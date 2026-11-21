/**
 * PRYVO - Child Safety & CSAE Prevention Standards Page
 *
 * Published standards required by Google Play for social & dating apps.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles/legal.css';
import {
  FaShieldAlt,
  FaUserLock,
  FaFlag,
  FaGavel,
  FaEnvelope,
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ChildSafety = () => {
  const lastUpdated = 'November 20, 2026';

  const tableOfContents = [
    { id: 'zero-tolerance', label: 'Zero-Tolerance Policy' },
    { id: 'age-gating', label: 'Strict 18+ Age Gating' },
    { id: 'detection-reporting', label: 'Detection & In-App Reporting' },
    { id: 'law-enforcement', label: 'Escalation & Law Enforcement' },
    { id: 'contact', label: 'Child Safety Point of Contact' },
  ];

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="hero-gradient" />
        <motion.div
          className="legal-hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div className="hero-icon" variants={fadeInUp}>
            <FaShieldAlt />
          </motion.div>
          <motion.h1 variants={fadeInUp}>Child Safety Standards</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Pryvo (Traincape Technologies Pvt Ltd) — Zero Tolerance for CSAM &amp; CSAE
          </motion.p>
          <motion.p className="last-updated" variants={fadeInUp}>
            Last Updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </section>

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
              <strong>App:</strong> Pryvo &nbsp;|&nbsp;{' '}
              <strong>Developer:</strong> Traincape Technologies Pvt Ltd
            </p>
            <p>
              Pryvo is strictly an <strong>18+ dating platform</strong>. We maintain an absolute,
              zero-tolerance policy against Child Sexual Abuse Material (CSAM) and Child Sexual
              Exploitation and Abuse (CSAE).
            </p>
          </div>

          <section id="zero-tolerance" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaShieldAlt />
              </div>
              <h2>1. Zero-Tolerance Policy</h2>
            </div>
            <div className="section-content">
              <p>Pryvo strictly prohibits:</p>
              <ul>
                <li>Any account created by or depicting individuals under 18 years of age.</li>
                <li>Uploading, requesting, sharing, or soliciting Child Sexual Abuse Material (CSAM) or sexually explicit imagery involving minors.</li>
                <li>Grooming, sextortion, trafficking, or any form of Child Sexual Exploitation and Abuse (CSAE).</li>
                <li>Using Pryvo to facilitate off-platform contact with minors.</li>
              </ul>
              <div className="warning-box">
                <strong>Immediate Action:</strong> Any violation of our child safety standards results
                in immediate permanent account termination, content removal, evidence preservation,
                and reporting to relevant authorities.
              </div>
            </div>
          </section>

          <section id="age-gating" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaUserLock />
              </div>
              <h2>2. Strict 18+ Age Verification &amp; Gating</h2>
            </div>
            <div className="section-content">
              <ul>
                <li><strong>Mandatory 18+ Confirmation:</strong> Users must explicitly confirm they are 18 or older during registration.</li>
                <li><strong>Server-Side Date of Birth Enforcement:</strong> Our backend strictly validates date of birth on both profile creation and profile updates, rejecting any user under 18 years of age.</li>
                <li><strong>Immediate Removal of Suspected Minors:</strong> Any account suspected or confirmed to belong to a minor is suspended immediately and permanently removed.</li>
              </ul>
            </div>
          </section>

          <section id="detection-reporting" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaFlag />
              </div>
              <h2>3. Automated Moderation &amp; In-App Reporting</h2>
            </div>
            <div className="section-content">
              <ul>
                <li><strong>Automated Image Safety Screening:</strong> Uploaded profile photos are screened using <strong>Azure AI Content Safety</strong> to detect and block sexually explicit, harmful, or abusive visual content before publication.</li>
                <li><strong>Chat Moderation:</strong> Real-time messaging includes automated text moderation filters against abusive and prohibited content.</li>
                <li><strong>In-App Reporting &amp; Blocking:</strong> Users can report suspected underage accounts, inappropriate photos, or CSAE/CSAM directly from any profile or chat screen, and instantly block any user.</li>
              </ul>
            </div>
          </section>

          <section id="law-enforcement" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaGavel />
              </div>
              <h2>4. Escalation &amp; Legal Compliance</h2>
            </div>
            <div className="section-content">
              <p>
                Pryvo complies with all applicable child safety laws and Google Play&apos;s Child
                Safety Standards Policy. When potential CSAM or CSAE is detected or reported:
              </p>
              <ul>
                <li>The offending content and account are immediately removed from the platform.</li>
                <li>Relevant evidence is preserved securely for legal investigation.</li>
                <li>Reports are escalated to regional and international authorities, including the <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong> and Indian cybercrime authorities (<strong>cybercrime.gov.in</strong>) as applicable.</li>
              </ul>
            </div>
          </section>

          <section id="contact" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaEnvelope />
              </div>
              <h2>5. Child Safety Point of Contact</h2>
            </div>
            <div className="section-content">
              <p>
                To report any child safety concern, suspected underage account, or CSAE/CSAM
                violation, contact our designated Child Safety Officer immediately:
              </p>
              <div className="contact-box">
                <p><strong>Developer:</strong> Traincape Technologies Pvt Ltd</p>
                <p><strong>Child Safety Email:</strong> <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a></p>
                <p>
                  <strong>Related Policies:</strong>{' '}
                  <Link to="/privacy">Privacy Policy</Link> &nbsp;|&nbsp;{' '}
                  <Link to="/terms">Terms of Service</Link> &nbsp;|&nbsp;{' '}
                  <Link to="/delete-account">Delete Account</Link>
                </p>
              </div>
            </div>
          </section>

          <div className="footer-note">
            <p>© 2026 Traincape Technologies Pvt Ltd (Pryvo). All rights reserved.</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChildSafety;
