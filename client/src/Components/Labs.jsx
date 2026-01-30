/**
 * PRYVO - Labs Page
 * 
 * Innovation & Research hub
 * Premium redesign showcasing Pryvo's R&D and upcoming features
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../Styles/labs.css";
import { FaFlask, FaRocket, FaLightbulb, FaShieldAlt, FaHeart, FaBrain } from 'react-icons/fa';
import { BsStars, BsGear, BsGraphUp } from 'react-icons/bs';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// Animated Section
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

// Project Card
const ProjectCard = ({ icon: Icon, title, status, description, tags }) => (
  <motion.div 
    className="project-card"
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="project-header">
      <div className="project-icon">
        <Icon />
      </div>
      <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tags">
      {tags.map((tag, i) => (
        <span key={i} className="tag">{tag}</span>
      ))}
    </div>
  </motion.div>
);

// Research Area Card
const ResearchCard = ({ icon: Icon, title, description }) => (
  <motion.div className="research-card" variants={fadeInUp}>
    <div className="research-icon">
      <Icon />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </motion.div>
);

const Labs = () => {
  const projects = [
    {
      icon: FaBrain,
      title: "Smart Matching 2.0",
      status: "In Progress",
      description: "Next-generation compatibility algorithm using behavioral patterns and communication styles.",
      tags: ["AI/ML", "Matching", "2025"]
    },
    {
      icon: FaShieldAlt,
      title: "Trust Score",
      status: "Beta",
      description: "Profile credibility system based on verification, behavior, and community feedback.",
      tags: ["Safety", "Trust", "Verification"]
    },
    {
      icon: FaHeart,
      title: "Date Planner",
      status: "Coming Soon",
      description: "AI-powered suggestions for first dates based on shared interests and local venues.",
      tags: ["Features", "IRL", "AI"]
    },
    {
      icon: BsGraphUp,
      title: "Connection Insights",
      status: "In Progress",
      description: "Personal analytics to understand your dating patterns and improve your experience.",
      tags: ["Analytics", "Self-improvement"]
    }
  ];

  const researchAreas = [
    {
      icon: FaLightbulb,
      title: "Behavioral Psychology",
      description: "Understanding what creates lasting romantic connections"
    },
    {
      icon: BsGear,
      title: "Safety Technology",
      description: "Advancing real-time threat detection and prevention"
    },
    {
      icon: FaRocket,
      title: "User Experience",
      description: "Designing delightful and intuitive dating experiences"
    }
  ];

  return (
    <div className="labs-page">
      {/* Hero Section */}
      <section className="labs-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="labs-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="hero-eyebrow" variants={fadeInUp}>
            <FaFlask /> Pryvo Labs
          </motion.span>
          <motion.h1 variants={fadeInUp}>
            Where <span className="gradient-text">innovation</span> meets connection
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Explore the research and experiments shaping the future of meaningful dating.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <AnimatedSection className="projects-section">
        <div className="section-header">
          <span className="section-label">Current Projects</span>
          <h2>What we're <span>building</span></h2>
          <p>A glimpse into features and technologies currently in development.</p>
        </div>
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Research Areas */}
      <AnimatedSection className="research-section">
        <div className="research-content">
          <div className="research-text">
            <span className="section-label">Research Focus</span>
            <h2>The science behind <span>better dating</span></h2>
            <p>
              Our team of researchers, psychologists, and engineers work together 
              to understand what truly matters in building lasting connections.
            </p>
          </div>
          <motion.div 
            className="research-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {researchAreas.map((area, index) => (
              <ResearchCard key={index} {...area} />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="labs-stats-section">
        <div className="stats-content">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Active Experiments</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Research Papers</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Beta Testers</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Join Labs CTA */}
      <AnimatedSection className="labs-cta-section">
        <div className="cta-content">
          <h2>Want early access?</h2>
          <p>Join our beta program and be the first to try new features.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Join Beta Program</button>
            <button className="btn-secondary">View Changelog</button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Labs;