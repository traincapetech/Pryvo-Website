/**
 * PRYVO - Terms of Service Page
 * 
 * Premium redesign with comprehensive, accurate legal content
 * for a dating application
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../Styles/legal.css";
import { FaFileContract, FaUserCheck, FaShieldAlt, FaBan, FaCreditCard, FaGavel } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

const Terms = () => {
  const lastUpdated = "January 29, 2025";
  
  const tableOfContents = [
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "eligibility", label: "Eligibility" },
    { id: "account", label: "Your Account" },
    { id: "conduct", label: "User Conduct" },
    { id: "content", label: "User Content" },
    { id: "safety", label: "Safety & Reporting" },
    { id: "subscriptions", label: "Subscriptions & Payments" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "termination", label: "Termination" },
    { id: "disputes", label: "Dispute Resolution" },
    { id: "general", label: "General Provisions" },
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
            <FaFileContract />
          </motion.div>
          <motion.h1 variants={fadeInUp}>Terms of Service</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            The rules and guidelines for using Pryvo
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
              Welcome to Pryvo! These Terms of Service ("Terms") govern your use of 
              our dating application, website, and related services (collectively, the "Service"). 
              Please read these Terms carefully before using Pryvo.
            </p>
            <p>
              <strong>By creating an account or using Pryvo, you agree to be bound by these Terms.</strong> 
              If you do not agree to these Terms, you may not use our Service.
            </p>
          </div>

          {/* Section 1: Acceptance */}
          <Section id="acceptance" title="1. Acceptance of Terms" icon={FaFileContract}>
            <p>
              By accessing or using Pryvo, you confirm that you have read, understood, and agree 
              to be bound by these Terms and our <Link to="/privacy-policy">Privacy Policy</Link>. 
              These Terms constitute a legally binding agreement between you and Pryvo.
            </p>
            <p>
              We may update these Terms from time to time. If we make material changes, we will 
              notify you through the app or by email. Your continued use of Pryvo after such 
              changes constitutes acceptance of the updated Terms.
            </p>
          </Section>

          {/* Section 2: Eligibility */}
          <Section id="eligibility" title="2. Eligibility Requirements" icon={FaUserCheck}>
            <p>To use Pryvo, you must:</p>
            <ul>
              <li>Be at least <strong>18 years of age</strong> (or the age of majority in your jurisdiction, whichever is higher)</li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Not have been previously banned or removed from Pryvo</li>
              <li>Not be a registered sex offender in any jurisdiction</li>
              <li>Be seeking genuine romantic or social connections in good faith</li>
            </ul>

            <div className="warning-box">
              <strong>Age Verification:</strong> If we discover that a user is under 18, we will 
              immediately terminate their account and delete all associated data. If you believe 
              a minor is using Pryvo, please report it to us immediately.
            </div>
          </Section>

          {/* Section 3: Account */}
          <Section id="account" title="3. Your Account">
            <h3>3.1 Account Creation</h3>
            <p>When creating your account, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Keep your information updated at all times</li>
              <li>Use your real identity (no fake profiles or impersonation)</li>
              <li>Upload only photos of yourself (no stock images, celebrities, or other people)</li>
              <li>Create only one account per person</li>
            </ul>

            <h3>3.2 Account Security</h3>
            <p>You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Using strong, unique passwords</li>
              <li>Logging out from shared or public devices</li>
            </ul>
            <p>
              Pryvo is not liable for any loss or damage arising from your failure to 
              comply with these security obligations.
            </p>
          </Section>

          {/* Section 4: User Conduct */}
          <Section id="conduct" title="4. User Conduct & Prohibited Activities" icon={FaBan}>
            <p>
              Pryvo is committed to creating a safe, respectful community. 
              The following behaviors are strictly prohibited:
            </p>

            <h3>4.1 Harassment & Abuse</h3>
            <ul>
              <li>Harassment, bullying, intimidation, or stalking of other users</li>
              <li>Hate speech, discrimination, or content promoting violence</li>
              <li>Sending unsolicited explicit content or sexual messages</li>
              <li>Threatening or abusive language or behavior</li>
              <li>Doxxing or sharing others' private information without consent</li>
            </ul>

            <h3>4.2 Fraud & Deception</h3>
            <ul>
              <li>Creating fake profiles or impersonating others</li>
              <li>Scamming, fraud, or soliciting money from users</li>
              <li>Catfishing or misrepresenting your identity</li>
              <li>Using the platform for commercial purposes (advertising, selling)</li>
              <li>Romance scams or financial manipulation</li>
            </ul>

            <h3>4.3 Illegal Activities</h3>
            <ul>
              <li>Prostitution, escort services, or sexual solicitation</li>
              <li>Human trafficking or exploitation</li>
              <li>Drug dealing or illegal substance promotion</li>
              <li>Any activity that violates local, state, or international law</li>
            </ul>

            <h3>4.4 Platform Abuse</h3>
            <ul>
              <li>Spamming, automated messaging, or bot usage</li>
              <li>Attempting to hack, reverse engineer, or compromise our systems</li>
              <li>Circumventing security measures or access restrictions</li>
              <li>Scraping data or using unauthorized third-party tools</li>
              <li>Creating multiple accounts to evade bans</li>
            </ul>

            <div className="info-box">
              <strong>Consequences:</strong> Violations may result in warnings, temporary suspension, 
              permanent bans, and/or referral to law enforcement where appropriate.
            </div>
          </Section>

          {/* Section 5: User Content */}
          <Section id="content" title="5. User Content">
            <h3>5.1 Your Content</h3>
            <p>
              You retain ownership of the content you post on Pryvo. However, by posting 
              content, you grant Pryvo a worldwide, non-exclusive, royalty-free license to use, 
              display, reproduce, and distribute your content in connection with operating 
              and promoting the Service.
            </p>

            <h3>5.2 Content Standards</h3>
            <p>Your content must not:</p>
            <ul>
              <li>Contain nudity, pornography, or sexually explicit material</li>
              <li>Depict violence, gore, or graphic imagery</li>
              <li>Promote illegal activities or dangerous behavior</li>
              <li>Infringe on intellectual property rights</li>
              <li>Contain personal contact information in your bio (phone numbers, social handles)</li>
              <li>Include content involving minors</li>
            </ul>

            <h3>5.3 Content Moderation</h3>
            <p>
              Pryvo reserves the right to review, moderate, and remove any content 
              that violates these Terms or our Community Guidelines. We may use automated 
              systems and human review to detect violations.
            </p>
          </Section>

          {/* Section 6: Safety */}
          <Section id="safety" title="6. Safety & Reporting" icon={FaShieldAlt}>
            <p>
              Your safety is our priority. If you encounter problematic behavior:
            </p>
            <ul>
              <li><strong>Report Users:</strong> Use the in-app report feature for any violations</li>
              <li><strong>Block Users:</strong> Block anyone you don't want to interact with</li>
              <li><strong>Contact Support:</strong> Reach out for serious concerns</li>
              <li><strong>Call Authorities:</strong> If you're in immediate danger, contact local emergency services</li>
            </ul>

            <div className="warning-box">
              <strong>Real-World Safety:</strong> Pryvo is an online service. We cannot guarantee 
              the behavior of users in real life. When meeting in person, always meet in public 
              places, tell someone where you're going, and trust your instincts.
            </div>
          </Section>

          {/* Section 7: Subscriptions */}
          <Section id="subscriptions" title="7. Subscriptions & Payments" icon={FaCreditCard}>
            <h3>7.1 Premium Features</h3>
            <p>
              Pryvo offers optional premium subscriptions with enhanced features. 
              By subscribing, you agree to the pricing and payment terms presented at checkout.
            </p>

            <h3>7.2 Billing</h3>
            <ul>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You must cancel at least 24 hours before the renewal date</li>
              <li>Payments are processed through Apple App Store, Google Play, or our payment processors</li>
              <li>Prices may vary by region and are subject to change</li>
            </ul>

            <h3>7.3 Refunds</h3>
            <p>
              Refund eligibility depends on your location and the platform through which you purchased:
            </p>
            <ul>
              <li><strong>App Store/Google Play:</strong> Refunds are handled according to their policies</li>
              <li><strong>Direct purchases:</strong> We offer refunds within 14 days for EU/UK users, as required by law</li>
              <li><strong>General policy:</strong> No refunds for partial subscription periods after the cooling-off period</li>
            </ul>

            <h3>7.4 Free Trials</h3>
            <p>
              If we offer free trials, you may need to provide payment information. 
              You will be charged when the trial ends unless you cancel beforehand.
            </p>
          </Section>

          {/* Section 8: Intellectual Property */}
          <Section id="intellectual-property" title="8. Intellectual Property">
            <p>
              Pryvo and its content, features, and functionality are owned by Pryvo and 
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Copy, modify, or distribute Pryvo's content without permission</li>
              <li>Use Pryvo's branding, logos, or trademarks</li>
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Create derivative works based on Pryvo</li>
            </ul>
          </Section>

          {/* Section 9: Disclaimers */}
          <Section id="disclaimers" title="9. Disclaimers">
            <p>
              PRYVO IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy of user profiles or content</li>
              <li>Warranties about the behavior or intentions of other users</li>
            </ul>

            <div className="warning-box">
              <strong>No Guarantee of Matches:</strong> We do not guarantee that you will 
              find matches, relationships, or connections through Pryvo. Dating outcomes 
              depend on many factors beyond our control.
            </div>
          </Section>

          {/* Section 10: Liability */}
          <Section id="liability" title="10. Limitation of Liability" icon={FaGavel}>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PRYVO AND ITS AFFILIATES, OFFICERS, 
              DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, or goodwill</li>
              <li>Damages arising from your use of, or inability to use, the Service</li>
              <li>Conduct of other users, whether online or offline</li>
              <li>Damages exceeding the amount you paid to Pryvo in the past 12 months</li>
            </ul>
            <p>
              Some jurisdictions do not allow these limitations, so they may not apply to you.
            </p>
          </Section>

          {/* Section 11: Termination */}
          <Section id="termination" title="11. Termination">
            <h3>11.1 Your Right to Terminate</h3>
            <p>
              You may delete your account at any time through the app settings. 
              Upon deletion, your profile and data will be removed according to our Privacy Policy.
            </p>

            <h3>11.2 Our Right to Terminate</h3>
            <p>We may suspend or terminate your account if:</p>
            <ul>
              <li>You violate these Terms or Community Guidelines</li>
              <li>We believe you pose a safety risk to others</li>
              <li>We are required to do so by law</li>
              <li>Your account is inactive for an extended period</li>
            </ul>
            <p>
              We will notify you of termination unless doing so would compromise safety 
              or legal proceedings.
            </p>
          </Section>

          {/* Section 12: Disputes */}
          <Section id="disputes" title="12. Dispute Resolution">
            <h3>12.1 Informal Resolution</h3>
            <p>
              Before initiating formal legal action, you agree to contact us and attempt 
              to resolve any dispute informally for at least 30 days.
            </p>

            <h3>12.2 Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be 
              resolved in the courts of [Your Jurisdiction], unless otherwise required by 
              applicable consumer protection laws.
            </p>

            <h3>12.3 Class Action Waiver</h3>
            <p>
              You agree to resolve disputes individually and waive any right to participate 
              in class action lawsuits or class-wide arbitration, to the extent permitted by law.
            </p>
          </Section>

          {/* Section 13: General */}
          <Section id="general" title="13. General Provisions">
            <ul>
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Pryvo</li>
              <li><strong>Severability:</strong> If any provision is unenforceable, the remaining provisions remain valid</li>
              <li><strong>No Waiver:</strong> Our failure to enforce any right does not waive our right to do so later</li>
              <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our consent</li>
              <li><strong>Force Majeure:</strong> We are not liable for failures due to circumstances beyond our control</li>
            </ul>
          </Section>

          {/* Section 14: Contact */}
          <Section id="contact" title="14. Contact Us">
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="contact-box">
              <p><strong>Email:</strong> pryvo@traincapetech.in</p>
              <p><strong>Help Center:</strong> Available in the app under Settings → Help</p>
            </div>
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

export default Terms;
