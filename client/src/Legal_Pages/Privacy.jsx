/**
 * PRYVO - Privacy Policy Page
 *
 * Accurate legal disclosures aligned with Pryvo mobile app & Google Play Data Safety.
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles/legal.css';
import { FaShieldAlt, FaUserShield, FaLock, FaDatabase, FaGlobe, FaEnvelope } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, title, icon: Icon, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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
        {Icon && (
          <div className="section-icon">
            <Icon />
          </div>
        )}
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </motion.section>
  );
};

const Privacy = () => {
  const lastUpdated = 'November 20, 2026';

  const tableOfContents = [
    { id: 'information-collected', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'sharing', label: 'Information Sharing & SDKs' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'your-rights', label: 'Your Rights & Account Deletion' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'international', label: 'International Transfers' },
    { id: 'children', label: "Children's Privacy & CSAE" },
    { id: 'updates', label: 'Policy Updates' },
    { id: 'contact', label: 'Contact Us' },
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
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div className="hero-icon" variants={fadeInUp}>
            <FaShieldAlt />
          </motion.div>
          <motion.h1 variants={fadeInUp}>Privacy Policy</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Pryvo (Traincape Technologies Pvt Ltd) — Your privacy is fundamental to everything we do
          </motion.p>
          <motion.p className="last-updated" variants={fadeInUp}>
            Last Updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="legal-container">
        <aside className="toc-sidebar">
          <div className="toc-sticky">
            <h4>Contents</h4>
            <nav>
              {tableOfContents.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="legal-content">
          <div className="intro-box">
            <p>
              Pryvo, operated by <strong>Traincape Technologies Pvt Ltd</strong>, is committed to
              protecting your privacy and personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use the Pryvo mobile
              application and website (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p>
              <strong>By creating an account or using Pryvo, you agree to the practices described in this policy.</strong>
            </p>
          </div>

          {/* Section 1 */}
          <Section id="information-collected" title="1. Information We Collect" icon={FaDatabase}>
            <h3>1.1 Information You Provide</h3>
            <p>When you create an account and use Pryvo, you voluntarily provide us with:</p>
            <ul>
              <li><strong>Account Information:</strong> Full name, email address, phone number, date of birth (to enforce our 18+ requirement), and password (or Google Sign-In account identifier)</li>
              <li><strong>Profile Information:</strong> Gender, sexual orientation, photos, bio, prompts, interests, lifestyle details, education, occupation, and dating preferences</li>
              <li><strong>Communications:</strong> Chat messages exchanged with matches, user reports, blocks, and support inquiries</li>
            </ul>
            <div className="info-box">
              <strong>No Financial Data Collected:</strong> Pryvo is currently 100% free with no
              in-app purchases or subscriptions. We do not collect or process payment card or bank
              information in this version.
            </div>

            <h3>1.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>App Activity:</strong> Swipes, likes, passes, matches, and interactions within the app</li>
              <li><strong>Diagnostics &amp; Crash Logs:</strong> Crash reports and technical stability diagnostics via Firebase Crashlytics</li>
              <li><strong>Device Push Tokens:</strong> Firebase Cloud Messaging (FCM) device tokens to deliver match and message notifications</li>
            </ul>

            <h3>1.3 Location Information</h3>
            <p>
              With your explicit permission, we collect your approximate or precise location to
              show you potential matches nearby and calculate approximate distance. You can disable
              location access at any time in your device settings. <strong>Your exact GPS coordinates
              are never displayed to other users.</strong>
            </p>
          </Section>

          {/* Section 2 */}
          <Section id="how-we-use" title="2. How We Use Your Information" icon={FaUserShield}>
            <p>We use your information strictly to:</p>
            <ul>
              <li><strong>Provide Core Dating Features:</strong> Create and authenticate your account, verify your email via OTP, display profiles, enable matching, and power real-time chat</li>
              <li><strong>Enforce Safety &amp; Moderation:</strong> Verify 18+ eligibility, screen uploaded images for safety, filter abusive chat content, and act on user reports</li>
              <li><strong>Send Notifications:</strong> Deliver push notifications for new matches and messages (which you can disable in Settings)</li>
              <li><strong>Maintain Reliability:</strong> Diagnose app crashes and fix technical issues</li>
              <li><strong>Comply with Law:</strong> Respond to lawful legal requests and enforce our Terms of Service</li>
            </ul>

            <div className="info-box">
              <strong>Our Commitment:</strong> We do <strong>not</strong> sell your personal data
              and we do <strong>not</strong> share your data with third-party advertisers.
            </div>
          </Section>

          {/* Section 3 */}
          <Section id="sharing" title="3. Information Sharing &amp; Third-Party Service Providers" icon={FaGlobe}>
            <h3>3.1 With Other Pryvo Users</h3>
            <p>
              Your public profile (first name, age, photos, bio, prompts, preferences, and
              approximate distance) is visible to other Pryvo users. Your email address, phone
              number, date of birth, and exact coordinates are never shown to other users.
            </p>

            <h3>3.2 Third-Party Infrastructure &amp; Service Providers</h3>
            <p>We use trusted third-party processors strictly to operate Pryvo on our behalf:</p>
            <ul>
              <li><strong>MongoDB Atlas &amp; Render:</strong> Secure database and backend API hosting</li>
              <li><strong>Cloudflare R2:</strong> Encrypted storage and delivery for uploaded profile photos</li>
              <li><strong>Google Sign-In &amp; Google Places:</strong> Optional OAuth sign-in and city/location autocomplete</li>
              <li><strong>Firebase Cloud Messaging &amp; Crashlytics (Google):</strong> Push notifications and crash diagnostics</li>
              <li><strong>Azure AI Content Safety (Microsoft):</strong> Automated safety moderation of uploaded images</li>
              <li><strong>Brevo:</strong> Delivery of transactional verification emails (signup OTP and account deletion OTP)</li>
            </ul>

            <h3>3.3 Legal &amp; Safety Disclosures</h3>
            <p>
              We may disclose information if required by applicable law, court order, or when
              necessary to protect user safety, investigate fraud, or report suspected Child Sexual
              Abuse and Exploitation (CSAE) to competent authorities.
            </p>
          </Section>

          {/* Section 4 */}
          <Section id="data-security" title="4. Data Security" icon={FaLock}>
            <p>We protect your information with industry-standard security controls:</p>
            <ul>
              <li><strong>Encrypted in Transit:</strong> All communication between the Pryvo app, website, and servers uses HTTPS/TLS (and WSS for real-time chat); cleartext HTTP traffic is blocked in production builds</li>
              <li><strong>Password &amp; Token Security:</strong> Passwords are salted and hashed with bcrypt; API and real-time chat sessions require signed JWT authentication</li>
              <li><strong>Rate Limiting &amp; Access Controls:</strong> Strict authentication checks, input sanitization, and rate limits protect accounts against unauthorized access</li>
            </ul>
            <div className="warning-box">
              <strong>Note:</strong> No electronic transmission or storage method is 100% immune
              from risk. Please use a strong, unique password and never share your OTP codes.
            </div>
          </Section>

          {/* Section 5 */}
          <Section id="your-rights" title="5. Your Rights &amp; Account Deletion">
            <h3>5.1 Access &amp; Update</h3>
            <p>
              You can view and edit your profile details, photos, and notification preferences at
              any time inside the Pryvo app.
            </p>

            <h3>5.2 Permanent Account &amp; Data Deletion</h3>
            <p>
              You can permanently delete your Pryvo account and all associated data immediately at
              any time via:
            </p>
            <ul>
              <li><strong>In-App:</strong> Open Pryvo → <strong>Settings → Delete Account</strong></li>
              <li>
                <strong>On the Web (no app required):</strong> Visit{' '}
                <Link to="/delete-account">pryvo.traincapetech.in/delete-account</Link> (supports
                both Email/Password and Google Sign-In accounts via 6-digit email verification)
              </li>
            </ul>

            <h3>5.3 Privacy Rights</h3>
            <p>
              Depending on your jurisdiction (including India DPDP Act, EU/UK GDPR, and California
              CCPA), you have the right to request access, correction, erasure, or withdrawal of
              consent. Contact us at <strong><a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a></strong>.
            </p>
          </Section>

          {/* Section 6 */}
          <Section id="data-retention" title="6. Data Retention">
            <p>
              We retain your personal data only while your account is active. When you delete your
              account (in-app or via <Link to="/delete-account">/delete-account</Link>), your
              account, profile, photos, location, likes, matches, messages, blocks, and push tokens
              are <strong>permanently deleted immediately (0-day retention)</strong>.
            </p>
            <p>
              Only accounts permanently banned for severe safety violations (such as fraud or CSAE)
              may have minimal abuse-prevention identifiers retained strictly as required by law.
              Anonymized Firebase Crashlytics diagnostics expire automatically within 90 days.
            </p>
          </Section>

          {/* Section 7 */}
          <Section id="international" title="7. International Data Transfers">
            <p>
              Because our cloud infrastructure providers (such as MongoDB Atlas, Render, Cloudflare,
              Google Firebase, Microsoft Azure, and Brevo) operate globally, your information may
              be processed in countries outside your country of residence under appropriate
              contractual and technical safeguards.
            </p>
          </Section>

          {/* Section 8 */}
          <Section id="children" title="8. Children's Privacy &amp; Zero Tolerance for CSAE">
            <p>
              <strong>Pryvo is strictly for adults aged 18 and older.</strong> We enforce 18+ age
              gating both in-app and server-side, and we do not knowingly collect personal
              information from anyone under 18.
            </p>
            <p>
              We maintain zero tolerance for Child Sexual Abuse Material (CSAM) and Child Sexual
              Exploitation and Abuse (CSAE). Please read our dedicated{' '}
              <Link to="/child-safety">Child Safety Standards</Link>. If you believe a minor is
              using Pryvo, contact{' '}
              <strong><a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a></strong>{' '}
              immediately.
            </p>
          </Section>

          {/* Section 9 */}
          <Section id="updates" title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any updates will be reflected by
              the &ldquo;Last Updated&rdquo; date above and, for material changes, communicated
              in-app or by email.
            </p>
          </Section>

          {/* Section 10 */}
          <Section id="contact" title="10. Contact Us" icon={FaEnvelope}>
            <p>If you have questions about this Privacy Policy or your personal data, contact us:</p>
            <div className="contact-box">
              <p><strong>Developer:</strong> Traincape Technologies Pvt Ltd</p>
              <p><strong>Email:</strong> <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a></p>
              <p><strong>Account Deletion:</strong> <Link to="/delete-account">pryvo.traincapetech.in/delete-account</Link></p>
              <p><strong>Help Center:</strong> Available in the app under Settings → Help Centre</p>
            </div>
            <p className="response-time">
              We aim to respond to all privacy-related inquiries promptly and within 30 days.
            </p>
          </Section>

          <div className="footer-note">
            <p>© 2026 Traincape Technologies Pvt Ltd (Pryvo). All rights reserved.</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy;
