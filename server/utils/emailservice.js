import nodemailer from "nodemailer"
// Create transporter with Hostinger SMTP support (or fallback to Gmail)
const createTransporter = () => {
    // Support multiple env naming conventions
    const host =
        process.env.SMTP_HOST || process.env.EMAIL_HOST || process.env.MAIL_HOST;
    const portStr =
        process.env.SMTP_PORT || process.env.EMAIL_PORT || process.env.MAIL_PORT;
    const user =
        process.env.SMTP_USER || process.env.EMAIL_USER || process.env.MAIL_USER;
    const pass =
        process.env.SMTP_PASSWORD ||
        process.env.EMAIL_PASSWORD ||
        process.env.MAIL_PASSWORD ||
        process.env.MAIL_PASS;
    const secureStr =
        process.env.SMTP_SECURE ||
        process.env.EMAIL_SECURE ||
        process.env.MAIL_SECURE;
    const rejectUnauthorizedStr =
        process.env.SMTP_TLS_REJECT_UNAUTHORIZED ||
        process.env.EMAIL_TLS_REJECT_UNAUTHORIZED ||
        process.env.MAIL_TLS_REJECT_UNAUTHORIZED;

    // Prefer explicit SMTP configuration if provided (e.g., Hostinger)
    if (host && user && pass) {
        const port = Number(portStr || 587);
        const secure =
            String(secureStr || "").toLowerCase() === "true" || port === 465;
        const rejectUnauthorized =
            String(rejectUnauthorizedStr || "true").toLowerCase() === "true";
        console.log(
            `📨 Using SMTP transporter: host=${host}, port=${port}, secure=${secure}`
        );
        console.log("📨 SMTP auth user:", user);
        return nodemailer.createTransport({
            host,
            port,
            secure,
            auth: { user, pass },
            requireTLS: !secure,
            tls: { rejectUnauthorized },
            connectionTimeout: 60000,
            greetingTimeout: 30000,
            socketTimeout: 60000,
        });
    }

    // Fallback to Gmail App Password configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error(
            "❌ Email configuration missing: set SMTP_*/EMAIL_*/MAIL_* or EMAIL_USER/EMAIL_PASSWORD"
        );
        return null;
    }

    console.log("📨 Using Gmail transporter via EMAIL_USER/EMAIL_PASSWORD");
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
        connectionTimeout: 60000,
        greetingTimeout: 30000,
        socketTimeout: 60000,
    });
};

// Generic email sender
export const sendEmail = async ({ to, subject, html, text }) => {
    try {
        const transporter = createTransporter();

        if (!transporter) {
            console.error(
                "❌ Email transporter not created - check environment variables"
            );
            return false;
        }

        const fromAddress =
            process.env.SMTP_FROM ||
            process.env.EMAIL_FROM ||
            process.env.MAIL_FROM ||
            process.env.SMTP_USER ||
            process.env.EMAIL_USER ||
            process.env.MAIL_USER;
        const fromName =
            process.env.SMTP_FROM_NAME ||
            process.env.EMAIL_FROM_NAME ||
            process.env.MAIL_FROM_NAME ||
            "Traincape LMS";
        const fromHeader = /<.*>/.test(fromAddress)
            ? fromAddress
            : `${fromName} <${fromAddress}>`;

        const mailOptions = {
            from: fromHeader,
            to,
            subject,
            text: text || html.replace(/<[^>]*>/g, ""), // Fallback text generation
            html,
            envelope: {
                from: fromAddress,
                to,
            },
        };

        console.log(`📨 Sending generic email to: ${to}`);
        const result = await transporter.sendMail(mailOptions);
        console.log(
            `✅ Email sent successfully to ${to}, Message ID: ${result.messageId}`
        );
        return true;
    } catch (error) {
        console.error(`❌ Error sending email to ${to}:`, error.message);
        return false;
    }
};

