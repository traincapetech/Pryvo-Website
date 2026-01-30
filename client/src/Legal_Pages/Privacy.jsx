/**
 * PRYVO - Privacy Policy Page
 * 
 * Premium redesign with comprehensive, accurate legal content
 * for a dating application
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../Styles/legal.css";
import { FaShieldAlt, FaUserShield, FaLock, FaDatabase, FaGlobe, FaEnvelope } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Section Component
const Section = ({ id, title, icon: Icon, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      className="legal-section"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-header">
        {Icon && <div className="section-icon"><Icon /></div>}
        <h2>{title}</h2>
      </div>
      <div className="section-content">
        {children}
      </div>
    </motion.section>
  );
};

const Privacy = () => {
  const lastUpdated = "January 29, 2025";
  
  const tableOfContents = [
    { id: "information-collected", label: "Information We Collect" },
    { id: "how-we-use", label: "How We Use Your Information" },
    { id: "sharing", label: "Information Sharing" },
    { id: "data-security", label: "Data Security" },
    { id: "your-rights", label: "Your Rights & Choices" },
    { id: "data-retention", label: "Data Retention" },
    { id: "international", label: "International Transfers" },
    { id: "children", label: "Children's Privacy" },
    { id: "updates", label: "Policy Updates" },
    { id: "contact", label: "Contact Us" }
  ];

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="legal-hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div className="hero-icon" variants={fadeInUp}>
            <FaShieldAlt />
          </motion.div>
          <motion.h1 variants={fadeInUp}>Privacy Policy</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Your privacy is fundamental to everything we do at Pryvo
          </motion.p>
          <motion.p className="last-updated" variants={fadeInUp}>
            Last Updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="legal-container">
        {/* Table of Contents */}
        <aside className="toc-sidebar">
          <div className="toc-sticky">
            <h4>Contents</h4>
            <nav>
              {tableOfContents.map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.label}</a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="legal-content">
          <div className="intro-box">
            <p>
              At Pryvo, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you 
              use our dating application and related services.
            </p>
            <p>
              <strong>By using Pryvo, you consent to the practices described in this policy.</strong>
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <Section id="information-collected" title="1. Information We Collect" icon={FaDatabase}>
            <h3>1.1 Information You Provide</h3>
            <p>When you create an account and use Pryvo, you voluntarily provide us with:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, phone number, date of birth, and password</li>
              <li><strong>Profile Information:</strong> Gender, photos, bio, interests, occupation, education, and dating preferences</li>
              <li><strong>Verification Data:</strong> Government ID (if applicable) for identity verification, photos for facial recognition verification</li>
              <li><strong>Communications:</strong> Messages sent to other users, reports, feedback, and support requests</li>
              <li><strong>Payment Information:</strong> Payment card details (processed securely by third-party payment processors)</li>
            </ul>

            <h3>1.2 Information Collected Automatically</h3>
            <p>When you use our services, we automatically collect:</p>
            <ul>
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, browser type</li>
              <li><strong>Usage Data:</strong> Features used, time spent on app, swipe patterns, matches, messages sent/received</li>
              <li><strong>Log Data:</strong> IP address, access times, pages viewed, app crashes, and system activity</li>
              <li><strong>Cookies & Similar Technologies:</strong> Session data, preferences, and analytics tracking</li>
            </ul>

            <h3>1.3 Location Information</h3>
            <p>
              With your explicit permission, we collect your precise location to show you 
              potential matches nearby and calculate distances. You can control this through 
              your device settings. If disabled, you may not be able to use certain location-based features.
            </p>

            <h3>1.4 Information from Third Parties</h3>
            <p>We may receive information from:</p>
            <ul>
              <li>Social media platforms if you choose to link accounts (e.g., Facebook, Instagram)</li>
              <li>Analytics partners who provide usage insights</li>
              <li>Background check services for enhanced verification (where legally permitted)</li>
            </ul>
          </Section>

          {/* Section 2: How We Use Your Information */}
          <Section id="how-we-use" title="2. How We Use Your Information" icon={FaUserShield}>
            <p>We use your information to:</p>
            <ul>
              <li><strong>Provide Services:</strong> Create and maintain your account, enable matching and messaging</li>
              <li><strong>Improve Experience:</strong> Personalize content, optimize matching algorithms, analyze usage patterns</li>
              <li><strong>Ensure Safety:</strong> Verify identities, detect fraud, prevent harassment, enforce community guidelines</li>
              <li><strong>Communicate:</strong> Send notifications, updates, marketing (with consent), and respond to inquiries</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws, respond to legal requests, protect our rights</li>
              <li><strong>Research & Development:</strong> Improve our services, develop new features, conduct internal analytics</li>
            </ul>

            <div className="info-box">
              <strong>Our Commitment:</strong> We do not sell your personal information to third parties 
              for their marketing purposes. We never share your exact location with other users.
            </div>
          </Section>

          {/* Section 3: Information Sharing */}
          <Section id="sharing" title="3. Information Sharing & Disclosure" icon={FaGlobe}>
            <h3>3.1 With Other Users</h3>
            <p>
              Your profile information (name, photos, bio, interests) is visible to other users. 
              When you match with someone, they can see your profile and exchange messages with you. 
              <strong> Your exact location is never shared</strong> — only approximate distance is shown.
            </p>

            <h3>3.2 Service Providers</h3>
            <p>We share information with trusted third parties who assist us in:</p>
            <ul>
              <li>Cloud hosting and data storage</li>
              <li>Payment processing</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support</li>
              <li>Identity verification</li>
              <li>Push notifications</li>
            </ul>
            <p>These providers are bound by strict confidentiality agreements and data protection obligations.</p>

            <h3>3.3 Legal Requirements</h3>
            <p>We may disclose your information when required to:</p>
            <ul>
              <li>Comply with applicable laws, regulations, or legal process</li>
              <li>Respond to valid government requests or court orders</li>
              <li>Protect the safety of our users, the public, or Pryvo</li>
              <li>Investigate potential violations of our Terms of Service</li>
              <li>Prevent fraud, security threats, or illegal activities</li>
            </ul>

            <h3>3.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, bankruptcy, or sale of assets, your information 
              may be transferred as part of that transaction. We will notify you of any such change.
            </p>
          </Section>

          {/* Section 4: Data Security */}
          <Section id="data-security" title="4. Data Security" icon={FaLock}>
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul>
              <li><strong>Encryption:</strong> Data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
              <li><strong>Access Controls:</strong> Strict employee access limitations on a need-to-know basis</li>
              <li><strong>Security Audits:</strong> Regular security assessments and penetration testing</li>
              <li><strong>Secure Infrastructure:</strong> Data stored in secure, SOC 2 compliant data centers</li>
              <li><strong>Incident Response:</strong> Procedures in place to detect and respond to security incidents</li>
            </ul>

            <div className="warning-box">
              <strong>Important:</strong> While we use robust security measures, no method of 
              transmission or storage is 100% secure. We cannot guarantee absolute security. 
              Please use strong passwords and be cautious about sharing personal information.
            </div>
          </Section>

          {/* Section 5: Your Rights & Choices */}
          <Section id="your-rights" title="5. Your Rights & Choices">
            <h3>5.1 Access and Correction</h3>
            <p>
              You can access and update most of your personal information directly through the app settings. 
              For additional data requests, contact our support team.
            </p>

            <h3>5.2 Account Deletion</h3>
            <p>
              You can delete your account at any time through the app settings. Upon deletion:
            </p>
            <ul>
              <li>Your profile will be removed from the platform immediately</li>
              <li>Your data will be deleted within 30 days</li>
              <li>Some data may be retained for legal compliance or fraud prevention</li>
              <li>Backup copies may take up to 90 days to be fully removed</li>
            </ul>

            <h3>5.3 Privacy Controls</h3>
            <ul>
              <li><strong>Location:</strong> Control location access through device settings</li>
              <li><strong>Notifications:</strong> Manage push notification preferences in the app</li>
              <li><strong>Marketing:</strong> Opt out of promotional emails using the unsubscribe link</li>
              <li><strong>Profile Visibility:</strong> Control who can see your profile through privacy settings</li>
            </ul>

            <h3>5.4 Rights for EU/UK/California Residents</h3>
            <p>If you reside in the EU, UK, or California, you have additional rights including:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Right to Object:</strong> Object to certain processing of your data</li>
              <li><strong>Right to Restrict:</strong> Request restriction of data processing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at <strong>privacy@pryvo.com</strong></p>
          </Section>

          {/* Section 6: Data Retention */}
          <Section id="data-retention" title="6. Data Retention">
            <p>We retain your information for as long as:</p>
            <ul>
              <li>Your account remains active</li>
              <li>Necessary to provide you with our services</li>
              <li>Required to comply with legal obligations</li>
              <li>Needed to resolve disputes or enforce agreements</li>
            </ul>
            <p>
              After account deletion, most data is removed within 30 days. Some information 
              may be retained for up to 90 days in backup systems and for up to 7 years for 
              legal compliance purposes (e.g., financial records, fraud prevention).
            </p>
          </Section>

          {/* Section 7: International Transfers */}
          <Section id="international" title="7. International Data Transfers">
            <p>
              Pryvo operates globally. Your information may be transferred to and processed in 
              countries other than your country of residence. These countries may have different 
              data protection laws.
            </p>
            <p>
              When we transfer data internationally, we use appropriate safeguards such as:
            </p>
            <ul>
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Data processing agreements with privacy shield principles</li>
              <li>Compliance with applicable data localization requirements</li>
            </ul>
          </Section>

          {/* Section 8: Children's Privacy */}
          <Section id="children" title="8. Children's Privacy">
            <p>
              <strong>Pryvo is strictly for users aged 18 and older.</strong> We do not knowingly 
              collect or solicit personal information from anyone under the age of 18.
            </p>
            <p>
              If we learn that we have collected personal information from a minor, we will 
              delete that information as quickly as possible. If you believe a child under 18 
              has provided us with personal information, please contact us immediately.
            </p>
          </Section>

          {/* Section 9: Policy Updates */}
          <Section id="updates" title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make significant changes, 
              we will notify you through:
            </p>
            <ul>
              <li>In-app notifications</li>
              <li>Email notifications</li>
              <li>Prominent notice on our website</li>
            </ul>
            <p>
              Your continued use of Pryvo after changes are posted constitutes your acceptance 
              of the updated policy. We encourage you to review this policy periodically.
            </p>
          </Section>

          {/* Section 10: Contact */}
          <Section id="contact" title="10. Contact Us" icon={FaEnvelope}>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="contact-box">
              <p><strong>Email:</strong> pryvo@traincapetech.in</p>
              {/* <p><strong>Data Protection Officer:</strong> dpo@pryvo.com</p> */}
              <p><strong>Help Center:</strong> Available in the app under Settings → Help</p>
            </div>
            <p className="response-time">
              We aim to respond to all privacy-related inquiries within 30 days.
            </p>
          </Section>

          <div className="footer-note">
            <p>© 2026 Pryvo. All rights reserved.</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy;
