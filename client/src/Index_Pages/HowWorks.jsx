/**
 * PRYVO - How It Works Page
 * 
 * Premium redesign with:
 * - Step-based journey visualization
 * - Animated cards
 * - Consistent design language with Home page
 */

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../Styles/howItWorks.css';
import { 
  FaUserPlus, 
  FaShieldAlt, 
  FaHeart, 
  FaComments, 
  FaCheckCircle, 
  FaBell,
  FaLock,
  FaUsers 
} from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

// Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Step Card Component
const StepCard = ({ number, icon: Icon, title, description, highlights, note, delay = 0 }) => (
  <motion.div 
    className="step-card"
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="step-header">
      <div className="step-number">{number}</div>
      <div className="step-icon">
        <Icon />
      </div>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    {highlights && (
      <ul className="step-highlights">
        {highlights.map((item, i) => (
          <li key={i}>
            <FaCheckCircle />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
    {note && (
      <div className="step-note">
        <strong>Why this matters:</strong>
        <p>{note}</p>
      </div>
    )}
  </motion.div>
);

const HowWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FaUserPlus,
      title: "Create Your Account",
      description: "Getting started on Pryvo is simple and secure.",
      highlights: [
        "Sign up using your email address",
        "No unnecessary personal information required",
        "Strong security practices to protect your account"
      ],
      note: "We collect only what's essential. Your identity and data stay protected from day one."
    },
    {
      number: "02",
      icon: FaShieldAlt,
      title: "Set Your Privacy Preferences",
      description: "You decide what others can see.",
      highlights: [
        "Control your profile visibility",
        "Choose which details are public or private",
        "Manage email and notification preferences"
      ],
      note: "Privacy isn't hidden in settings — it's a core feature. You're always in control."
    },
    {
      number: "03",
      icon: FaHeart,
      title: "Smart & Respectful Matching",
      description: "Pryvo focuses on quality, not quantity.",
      highlights: [
        "Interest-based matching",
        "Designed to reduce spam and fake interactions",
        "No aggressive or intrusive algorithms"
      ],
      note: "Matches are created to encourage genuine conversations, not endless swiping."
    },
    {
      number: "04",
      icon: FaComments,
      title: "Connect & Chat Safely",
      description: "Communicate with confidence inside Pryvo.",
      highlights: [
        "Secure in-app messaging",
        "Block or report users instantly",
        "No pressure to share personal contact details"
      ],
      note: "Your safety comes first. You're never locked into a conversation you're uncomfortable with."
    },
    {
      number: "05",
      icon: FaCheckCircle,
      title: "Trust & Safety at Every Level",
      description: "Safety isn't optional on Pryvo — it's built in.",
      highlights: [
        "Profile moderation",
        "Community guidelines enforcement",
        "User reporting and support system",
        "Continuous safety improvements"
      ],
      note: "We actively work to create a respectful and secure environment for everyone."
    },
    {
      number: "06",
      icon: FaBell,
      title: "Stay Updated — On Your Terms",
      description: "You choose how you hear from us.",
      highlights: [
        "Product updates",
        "Safety alerts",
        "Feature announcements",
        "Easy unsubscribe anytime"
      ],
      note: "No spam. No unwanted emails. Only what you opt into."
    }
  ];

  return (
    <div className="how-works-page">
      {/* Hero Section */}
      <section className="how-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="how-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="hero-eyebrow" variants={fadeInUp}>
            <BsStars /> The Pryvo Experience
          </motion.span>
          <motion.h1 variants={fadeInUp}>
            How <span className="gradient-text">Pryvo</span> Works
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Private. Safe. Meaningful Connections. Every feature is designed 
            to give you control, safety, and transparency from the very first step.
          </motion.p>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <motion.div 
          className="steps-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <StepCard key={index} {...step} delay={index * 0.1} />
          ))}
        </motion.div>
      </section>

      {/* Data Control Section */}
      <AnimatedSection className="data-section">
        <div className="data-content">
          <div className="data-icon">
            <FaLock />
          </div>
          <h2>Your Data. <span>Your Control.</span></h2>
          <p>We believe your data belongs to you.</p>
          <div className="data-features">
            <div className="data-feature">
              <FaCheckCircle />
              <span>Minimal data storage</span>
            </div>
            <div className="data-feature">
              <FaCheckCircle />
              <span>No selling of personal information</span>
            </div>
            <div className="data-feature">
              <FaCheckCircle />
              <span>Access, manage, or delete your data anytime</span>
            </div>
            <div className="data-feature">
              <FaCheckCircle />
              <span>Full transparency about how data is used</span>
            </div>
          </div>
          <div className="data-promise">
            <strong>Our promise:</strong> Pryvo exists to build trust — not to exploit data.
          </div>
        </div>
      </AnimatedSection>

      {/* Who Is Pryvo For Section */}
      <AnimatedSection className="audience-section">
        <div className="audience-content">
          <div className="audience-icon">
            <FaUsers />
          </div>
          <h2>Who Is <span>Pryvo</span> For?</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <span className="audience-emoji">🔒</span>
              <p>Value privacy and security</p>
            </div>
            <div className="audience-card">
              <span className="audience-emoji">💜</span>
              <p>Want meaningful connections</p>
            </div>
            <div className="audience-card">
              <span className="audience-emoji">🚫</span>
              <p>Tired of fake profiles and spam</p>
            </div>
            <div className="audience-card">
              <span className="audience-emoji">✨</span>
              <p>Expect transparency from platforms</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="how-cta-section">
        <div className="how-cta-content">
          <h2>Ready to find your person?</h2>
          <p>Join thousands who found meaningful connection on Pryvo.</p>
          <button className="btn-primary">Download Pryvo Free</button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HowWorks;