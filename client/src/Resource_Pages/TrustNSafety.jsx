/**
 * PRYVO - Trust & Safety Page
 * 
 * Premium redesign with comprehensive safety information
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../Styles/resources.css";
import { 
  FaShieldAlt, 
  FaUserCheck, 
  FaLock, 
  FaComments, 
  FaExclamationTriangle,
  FaHandsHelping,
  FaBalanceScale,
  FaHeart,
  FaFlag,
  FaBan,
  FaCog,
  FaBook,
  FaEnvelope
} from 'react-icons/fa';
import { BsShieldCheck, BsEye, BsPeople } from 'react-icons/bs';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Animated Section
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Safety Feature Card
const SafetyCard = ({ icon: Icon, title, description }) => (
  <motion.div className="safety-card" variants={fadeInUp}>
    <div className="safety-card-icon">
      <Icon />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </motion.div>
);

// Content Section
const ContentSection = ({ id, icon: Icon, title, children }) => (
  <AnimatedSection className="content-section" id={id}>
    <div className="section-header">
      <div className="section-icon">
        <Icon />
      </div>
      <h2>{title}</h2>
    </div>
    <div className="section-body">
      {children}
    </div>
  </AnimatedSection>
);

const TrustNSafety = () => {
  const safetyFeatures = [
    {
      icon: BsShieldCheck,
      title: "Profile Verification",
      description: "Multi-layer verification to ensure authentic profiles"
    },
    {
      icon: BsEye,
      title: "24/7 Moderation",
      description: "Continuous monitoring for harmful behavior"
    },
    {
      icon: FaLock,
      title: "Data Encryption",
      description: "Industry-standard encryption protects your data"
    },
    {
      icon: FaFlag,
      title: "Easy Reporting",
      description: "Report concerns with just a few taps"
    },
    {
      icon: FaBan,
      title: "Instant Blocking",
      description: "Block anyone you don't want to interact with"
    },
    {
      icon: BsPeople,
      title: "Community Standards",
      description: "Clear guidelines for respectful interactions"
    }
  ];

  return (
    <div className="resources-page trust-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="resources-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <FaShieldAlt /> Your Safety First
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            Trust & Safety
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Building a community where respect, safety, and trust come first
          </motion.p>
          <motion.p className="last-updated" variants={fadeInUp}>
            Last Updated: January 2025
          </motion.p>
        </motion.div>
      </section>

      {/* Safety Features Grid */}
      <AnimatedSection className="features-section">
        <div className="features-header">
          <h2>How we keep you safe</h2>
          <p>Multiple layers of protection for a secure dating experience</p>
        </div>
        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {safetyFeatures.map((feature, index) => (
            <SafetyCard key={index} {...feature} />
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="resources-content">
        {/* Our Commitment */}
        <ContentSection id="commitment" icon={FaHeart} title="Our Commitment to Safety">
          <p>
            At Pryvo, trust and safety are at the core of everything we do. Our goal is to 
            create a respectful, secure, and inclusive environment where people can connect 
            with confidence.
          </p>
          <p>
            We invest in technology, policies, and human review processes to help protect 
            our community from fraud, harassment, and harmful behavior. While no platform 
            can guarantee complete safety, we continuously work to reduce risks and empower 
            our community with tools, policies, and support.
          </p>
          <div className="highlight-box">
            <strong>Our Promise:</strong> We encourage all users to take an active role in 
            maintaining a safe experience by following our guidelines and reporting concerns.
          </div>
        </ContentSection>

        {/* Account Security */}
        <ContentSection id="security" icon={FaLock} title="Account Security">
          <p>
            We use a combination of technical and organizational measures to keep your account secure:
          </p>
          <ul>
            <li>Secure login and authentication methods</li>
            <li>Monitoring for suspicious activity and abuse</li>
            <li>Protection against unauthorized access</li>
            <li>Regular security audits and updates</li>
          </ul>
          <div className="warning-box">
            <strong>Important:</strong> Pryvo will never ask for your password or verification 
            codes via email or messages. Keep your login credentials confidential.
          </div>
        </ContentSection>

        {/* Profile Moderation */}
        <ContentSection id="moderation" icon={FaUserCheck} title="Profile Integrity & Moderation">
          <p>To help ensure authenticity on Pryvo:</p>
          <ul>
            <li>Profiles are reviewed using automated systems and human moderation</li>
            <li>We take action against fake, misleading, or fraudulent profiles</li>
            <li>Users who violate policies may face warnings, suspension, or permanent removal</li>
          </ul>
          <p>
            Our moderation systems are designed to balance safety, fairness, and user privacy.
          </p>
        </ContentSection>

        {/* Messaging Safety */}
        <ContentSection id="messaging" icon={FaComments} title="Messaging & Behavior Monitoring">
          <p>Pryvo uses safety tools to help detect:</p>
          <ul>
            <li>Harassment or abusive language</li>
            <li>Spam or solicitation</li>
            <li>Scams or fraudulent behavior</li>
            <li>Inappropriate content sharing</li>
          </ul>
          <p>
            These tools help us act quickly when harmful behavior is identified. 
            User reports are essential to keeping Pryvo safe.
          </p>
        </ContentSection>

        {/* Community Guidelines */}
        <ContentSection id="guidelines" icon={FaBook} title="Community Guidelines">
          <p>All users must follow Pryvo's Community Guidelines. These rules prohibit:</p>
          <ul>
            <li>Harassment, threats, or hateful conduct</li>
            <li>Underage use of the platform (18+ only)</li>
            <li>Requests for money, gifts, or financial assistance</li>
            <li>Sexual exploitation or coercion</li>
            <li>Impersonation, fraud, or misleading behavior</li>
            <li>Spam, promotions, or commercial activity</li>
          </ul>
          <p>Violations may result in account restrictions or permanent removal from Pryvo.</p>
        </ContentSection>

        {/* Reporting & Blocking */}
        <ContentSection id="reporting" icon={FaFlag} title="Reporting & Blocking">
          <p>If you encounter behavior that makes you uncomfortable or seems unsafe, you can:</p>
          <div className="action-cards">
            <div className="action-card">
              <FaFlag className="action-icon" />
              <h4>Report</h4>
              <p>Report a profile or message directly within the app</p>
            </div>
            <div className="action-card">
              <FaBan className="action-icon" />
              <h4>Block</h4>
              <p>Block users to prevent any further contact</p>
            </div>
          </div>
          <p>All reports are reviewed, and appropriate action is taken in accordance with our policies.</p>
        </ContentSection>

        {/* User Safety Tools */}
        <ContentSection id="tools" icon={FaCog} title="User Safety Tools">
          <p>Pryvo provides tools to give you control over your experience:</p>
          <ul>
            <li>Blocking and reporting features</li>
            <li>Privacy and visibility settings</li>
            <li>Account and notification controls</li>
            <li>Profile visibility options</li>
          </ul>
          <p>We encourage you to review and customize these settings based on your comfort level.</p>
        </ContentSection>

        {/* Education */}
        <ContentSection id="education" icon={FaBook} title="Education & Awareness">
          <p>We believe informed users are safer users. Pryvo offers guidance on:</p>
          <ul>
            <li>Safe online communication</li>
            <li>Recognizing scams and red flags</li>
            <li>Meeting safely in person</li>
            <li>Consent and respectful interactions</li>
          </ul>
          <p>
            Please review our <Link to="/dating-tips" className="inline-link">Safe Dating Tips</Link> for 
            practical advice on staying safe while connecting with others.
          </p>
        </ContentSection>

        {/* Law Enforcement */}
        <ContentSection id="legal" icon={FaBalanceScale} title="Law Enforcement & Legal Requests">
          <p>
            Pryvo may cooperate with law enforcement or regulatory authorities when required 
            by law or when necessary to protect our users and the public. We carefully review 
            all requests and aim to respect user privacy while fulfilling legal obligations.
          </p>
        </ContentSection>

        {/* Your Role */}
        <ContentSection id="your-role" icon={FaHandsHelping} title="Your Role in Safety">
          <p>Safety on Pryvo is a shared responsibility. You can help by:</p>
          <ul>
            <li>Being honest and respectful in your interactions</li>
            <li>Reporting suspicious or harmful behavior</li>
            <li>Protecting your personal information</li>
            <li>Trusting your instincts and prioritizing your well-being</li>
          </ul>
        </ContentSection>

        {/* Contact */}
        <ContentSection id="contact" icon={FaEnvelope} title="Contact Us">
          <p>If you have questions, concerns, or safety-related issues:</p>
          <div className="contact-box">
            <p><strong>In-App Support:</strong> Settings → Help → Contact Support</p>
            <p><strong>Email:</strong> pryvo@traincapetech.in</p>
          </div>
          <div className="emergency-box">
            <FaExclamationTriangle className="emergency-icon" />
            <p>
              <strong>If you are in immediate danger</strong>, please contact your local 
              emergency services right away.
            </p>
          </div>
        </ContentSection>

        {/* Footer */}
        <div className="resources-footer">
          <p>At Pryvo, we are committed to building a platform where trust, respect, and safety come first.</p>
        </div>
      </div>
    </div>
  );
};

export default TrustNSafety;