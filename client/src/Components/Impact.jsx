/**
 * PRYVO - Impact Page
 * 
 * "One More Hour" initiative - fostering IRL connections
 * Premium redesign with storytelling and emotional engagement
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../Styles/impact.css";
import { FaHeart, FaUsers, FaClock, FaHandHoldingHeart } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, number, label, description }) => (
  <motion.div className="stat-card" variants={fadeInUp}>
    <div className="stat-icon">
      <Icon />
    </div>
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
    <p>{description}</p>
  </motion.div>
);

const Impact = () => {
  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="impact-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="hero-eyebrow" variants={fadeInUp}>
            <BsStars /> Our Impact Initiative
          </motion.span>
          <motion.p className="hero-tagline" variants={fadeInUp}>
            One More Hour
          </motion.p>
          <motion.h1 variants={fadeInUp}>
            Fostering <span className="gradient-text">IRL Connection</span>
            <br />— one hour at a time.
          </motion.h1>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <AnimatedSection className="impact-image-section">
        <div className="image-container">
          <img src="/impact1.jpg" alt="People connecting in real life" />
          <div className="image-overlay">
            <FaHeart className="heart-icon" />
          </div>
        </div>
      </AnimatedSection>

      {/* The Problem Section */}
      <AnimatedSection className="problem-section">
        <div className="problem-content">
          <span className="section-label">The Problem</span>
          <h2>
            Today, Gen Z gets <span className="highlight">1,000 fewer hours</span> of 
            in-person connection time every year, compared to previous generations.
          </h2>
          <p>
            Digital connections have replaced face-to-face moments. While technology 
            connects us globally, we're losing the depth of real human interaction.
          </p>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="stats-section">
        <motion.div 
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <StatCard 
            icon={FaClock}
            number="1,000+"
            label="Hours Lost"
            description="Fewer in-person hours per year for Gen Z"
          />
          <StatCard 
            icon={FaUsers}
            number="67%"
            label="Feel Lonely"
            description="Young adults report feeling disconnected"
          />
          <StatCard 
            icon={FaHandHoldingHeart}
            number="3x"
            label="Happier"
            description="People with strong IRL connections"
          />
        </motion.div>
      </AnimatedSection>

      {/* Our Mission Section */}
      <AnimatedSection className="mission-section">
        <div className="mission-content">
          <span className="section-label">Our Mission</span>
          <h2>Bringing people <span>together</span></h2>
          <p>
            At Pryvo, we believe dating apps should lead to real dates, real conversations, 
            and real connections. Our "One More Hour" initiative is about encouraging 
            users to spend just one more hour a week in face-to-face connection.
          </p>
          <div className="mission-highlights">
            <div className="highlight-item">
              <span className="number">01</span>
              <div>
                <h4>Date Planning Features</h4>
                <p>Tools to help you plan meaningful in-person experiences</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="number">02</span>
              <div>
                <h4>Local Events</h4>
                <p>Curated suggestions for activities in your area</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="number">03</span>
              <div>
                <h4>Community Building</h4>
                <p>Group meetups for shared interests and hobbies</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="impact-cta-section">
        <div className="cta-content">
          <h2>Join the movement</h2>
          <p>Be part of a community that values real connection over endless scrolling.</p>
          <button className="btn-primary">Download Pryvo</button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Impact;
