/**
 * PRYVO - Terms of Service Page
 *
 * Accurate legal terms aligned with Pryvo 100% free launch & Google Play policies.
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../Styles/legal.css';
import {
  FaFileContract,
  FaUserCheck,
  FaShieldAlt,
  FaBan,
  FaHeart,
  FaGavel,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

const Terms = () => {
  const lastUpdated = 'November 20, 2026';

  const tableOfContents = [
    { id: 'acceptance', label: 'Acceptance of Terms' },
    { id: 'eligibility', label: 'Eligibility (18+)' },
    { id: 'account', label: 'Your Account' },
    { id: 'conduct', label: 'User Conduct & CSAE' },
    { id: 'content', label: 'User Content' },
    { id: 'safety', label: 'Safety & Reporting' },
    { id: 'free-service', label: 'Free Service (No IAP)' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'termination', label: 'Termination & Deletion' },
    { id: 'disputes', label: 'Governing Law & Disputes' },
    { id: 'general', label: 'General Provisions' },
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
            <FaFileContract />
          </motion.div>
          <motion.h1 variants={fadeInUp}>Terms of Service</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            The rules and guidelines for using Pryvo (Traincape Technologies Pvt Ltd)
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
              Welcome to Pryvo! These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
              Pryvo dating application, website, and related services (collectively, the
              &ldquo;Service&rdquo;), operated by <strong>Traincape Technologies Pvt Ltd</strong>.
              Please read these Terms carefully before using Pryvo.
            </p>
            <p>
              <strong>By creating an account or using Pryvo, you agree to be bound by these Terms.</strong>{' '}
              If you do not agree, you may not use the Service.
            </p>
          </div>

          <Section id="acceptance" title="1. Acceptance of Terms" icon={FaFileContract}>
            <p>
              By accessing or using Pryvo, you confirm that you have read, understood, and agree to
              be bound by these Terms, our <Link to="/privacy">Privacy Policy</Link>, and our{' '}
              <Link to="/child-safety">Child Safety Standards</Link>. These Terms constitute a
              legally binding agreement between you and Traincape Technologies Pvt Ltd.
            </p>
            <p>
              We may update these Terms from time to time. If we make material changes, we will
              notify you in-app or by email. Continued use of Pryvo after changes take effect
              constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section id="eligibility" title="2. Eligibility Requirements (18+ Only)" icon={FaUserCheck}>
            <p>To create an account or use Pryvo, you must:</p>
            <ul>
              <li>Be at least <strong>18 years of age</strong> (or the age of majority in your jurisdiction, whichever is higher)</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Not have been previously permanently banned from Pryvo</li>
              <li>Not be a registered sex offender in any jurisdiction</li>
            </ul>
            <div className="warning-box">
              <strong>Strict 18+ Enforcement:</strong> If we discover or reasonably suspect that a
              user is under 18, we will immediately terminate the account and delete associated
              data. Please report suspected underage accounts in-app or via{' '}
              <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a>.
            </div>
          </Section>

          <Section id="account" title="3. Your Account">
            <h3>3.1 Account Creation</h3>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Use your real identity (no fake profiles, catfishing, or impersonation)</li>
              <li>Upload only authentic photos of yourself</li>
              <li>Maintain only one account per person</li>
            </ul>

            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for safeguarding your login credentials and all activity under
              your account. Notify us immediately at{' '}
              <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a> if you suspect
              unauthorized access.
            </p>
          </Section>

          <Section id="conduct" title="4. User Conduct &amp; Zero Tolerance for CSAE" icon={FaBan}>
            <p>The following behaviors are strictly prohibited on Pryvo:</p>
            <ul>
              <li><strong>Child Sexual Abuse &amp; Exploitation (CSAM/CSAE):</strong> Absolute zero tolerance for any sexual exploitation, abuse, grooming, or inappropriate content involving minors. Violators are permanently banned and reported to law enforcement and NCMEC. See our <Link to="/child-safety">Child Safety Standards</Link>.</li>
              <li><strong>Harassment &amp; Abuse:</strong> Stalking, bullying, hate speech, threats, unsolicited explicit content, or doxxing</li>
              <li><strong>Fraud &amp; Scams:</strong> Impersonation, romance scams, soliciting money, or commercial spam</li>
              <li><strong>Illegal Activity:</strong> Prostitution, human trafficking, drug solicitation, or any unlawful conduct</li>
              <li><strong>Platform Abuse:</strong> Automated bots, scraping, hacking, or evading bans</li>
            </ul>
            <div className="info-box">
              <strong>Enforcement:</strong> Violations may result in immediate content removal,
              temporary suspension, permanent account ban, and referral to law enforcement.
            </div>
          </Section>

          <Section id="content" title="5. User Content">
            <p>
              You retain ownership of the photos, prompts, and text you post on Pryvo. By posting
              content, you grant Traincape Technologies Pvt Ltd a non-exclusive, royalty-free,
              worldwide license to host, display, and process your content solely to operate and
              moderate the Service.
            </p>
            <p>
              Your content must not depict nudity, sexually explicit material, violence, hate
              speech, minors, or infringe third-party rights. We use automated moderation (including
              Azure AI Content Safety) and human review to enforce these standards.
            </p>
          </Section>

          <Section id="safety" title="6. Safety &amp; Reporting" icon={FaShieldAlt}>
            <ul>
              <li><strong>Report Users:</strong> Use the in-app report tool on any profile or chat</li>
              <li><strong>Block Users:</strong> Instantly block anyone you no longer wish to interact with</li>
              <li><strong>Emergency:</strong> If you are in immediate danger, contact local emergency services right away</li>
            </ul>
            <div className="warning-box">
              <strong>Real-World Safety:</strong> Pryvo does not conduct criminal background checks.
              When meeting someone in person, always choose a public location, tell a trusted
              friend, and prioritize your personal safety.
            </div>
          </Section>

          <Section id="free-service" title="7. Free Service (No Subscriptions or Payments)" icon={FaHeart}>
            <p>
              <strong>Pryvo is currently provided 100% free of charge.</strong> There are no paid
              subscriptions, coins, virtual currencies, or in-app purchases in the current version
              of Pryvo.
            </p>
            <p>
              If optional paid features are introduced in a future update, we will update these
              Terms and clearly disclose all pricing and billing terms prior to any purchase.
            </p>
          </Section>

          <Section id="intellectual-property" title="8. Intellectual Property">
            <p>
              All Pryvo trademarks, logos, software, and visual designs are owned by Traincape
              Technologies Pvt Ltd and protected by applicable intellectual property laws. You may
              not copy, modify, reverse engineer, or distribute any part of the Service without
              prior written permission.
            </p>
          </Section>

          <Section id="disclaimers" title="9. Disclaimers">
            <p>
              PRYVO IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE MATCHES,
              RELATIONSHIPS, UNINTERRUPTED SERVICE, OR THE CONDUCT OF OTHER USERS ONLINE OR
              OFFLINE.
            </p>
          </Section>

          <Section id="liability" title="10. Limitation of Liability" icon={FaGavel}>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TRAINCAPE TECHNOLOGIES PVT LTD AND
              ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY CONDUCT OF OTHER USERS, ARISING OUT OF
              YOUR USE OF PRYVO.
            </p>
          </Section>

          <Section id="termination" title="11. Termination &amp; Account Deletion">
            <p>
              You may permanently delete your account at any time inside the app (
              <strong>Settings → Delete Account</strong>) or on the web at{' '}
              <Link to="/delete-account">pryvo.traincapetech.in/delete-account</Link>. Upon
              deletion, your data is permanently removed immediately as detailed in our{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
            <p>
              We reserve the right to suspend or permanently terminate accounts that violate these
              Terms or pose a safety risk to the community.
            </p>
          </Section>

          <Section id="disputes" title="12. Governing Law &amp; Dispute Resolution">
            <p>
              Before initiating formal legal proceedings, you agree to contact us at{' '}
              <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a> and attempt to
              resolve any dispute informally for at least 30 days.
            </p>
            <p>
              These Terms are governed by the laws of <strong>India</strong>. Subject to applicable
              consumer protection laws, any disputes shall be subject to the exclusive jurisdiction
              of the courts of <strong>New Delhi, India</strong>.
            </p>
          </Section>

          <Section id="general" title="13. General Provisions">
            <ul>
              <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and Child Safety Standards, form the entire agreement between you and Traincape Technologies Pvt Ltd</li>
              <li><strong>Severability:</strong> If any provision is held unenforceable, the remaining provisions stay in full effect</li>
              <li><strong>No Waiver:</strong> Failure to enforce a provision does not waive our right to enforce it later</li>
            </ul>
          </Section>

          <Section id="contact" title="14. Contact Us">
            <div className="contact-box">
              <p><strong>Developer:</strong> Traincape Technologies Pvt Ltd</p>
              <p><strong>Email:</strong> <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a></p>
              <p><strong>Help Center:</strong> Available in the app under Settings → Help Centre</p>
            </div>
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

export default Terms;
