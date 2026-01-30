/**
 * PRYVO - Premium Dating Landing Page
 * 
 * Design Philosophy:
 * - Emotionally resonant, not transactional
 * - Motion that feels human and calming
 * - Dating-specific visual language (profiles, prompts, match moments)
 * - Storytelling flow with connected sections
 * - Mobile-first, enterprise polish
 */

import React, { useEffect, useState, useRef } from 'react';
import '../Styles/Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaHeart, FaLock, FaUserCheck, FaPlay, FaApple, FaGooglePlay } from 'react-icons/fa';
import { BsFire, BsStars } from 'react-icons/bs';

// ============ ANIMATION VARIANTS ============
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const floatingCard = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const pulseHeart = {
  animate: {
    scale: [1, 1.15, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  }
};

// ============ SECTION COMPONENT ============
const Section = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ============ MOCK PROFILE CARD ============
const ProfileCard = ({ name, age, prompt, promptAnswer, image, position, delay = 0 }) => (
  <motion.div 
    className={`profile-card ${position}`}
    initial={{ opacity: 0, scale: 0.8, rotate: position === 'left' ? -15 : 10 }}
    animate={{ opacity: 1, scale: 1, rotate: position === 'left' ? -8 : 6 }}
    transition={{ duration: 1, delay }}
    whileHover={{ scale: 1.02, rotate: 0 }}
  >
    <motion.div {...floatingCard}>
      <div className="profile-image-container">
        <img src={image} alt={name} className="profile-image" />
        <div className="profile-badges">
          <BsFire className="badge-fire" />
          <FaCheckCircle className="badge-verified" />
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-name-row">
          <span className="profile-name">{name}, {age}</span>
          <span className="online-indicator" />
        </div>
        {prompt && (
          <div className="profile-prompt">
            <span className="prompt-question">{prompt}</span>
            <span className="prompt-answer">{promptAnswer}</span>
          </div>
        )}
      </div>
    </motion.div>
  </motion.div>
);

// ============ FEATURE CARD ============
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div 
    className="feature-card"
    variants={fadeInUp}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
  >
    <div className="feature-icon">
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

// ============ TESTIMONIAL CARD ============
const TestimonialCard = ({ quote, name, title, image, delay = 0 }) => (
  <motion.div 
    className="testimonial-card"
    variants={fadeInUp}
  >
    <div className="quote-mark">"</div>
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-author">
      <img src={image} alt={name} />
      <div>
        <span className="author-name">{name}</span>
        <span className="author-title">{title}</span>
      </div>
    </div>
  </motion.div>
);

// ============ MAIN COMPONENT ============
const Home = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const { subscribe } = useStore();
  const navigate = useNavigate();
  const word = "PRYVO";
  const [visibleLetters, setVisibleLetters] = useState(0);

  // Newsletter submit
  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe(email, "landing_page");
    setEmail("");
  };

  // Intro animation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev === word.length) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // ========== LOADING SCREEN ==========
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-letters">
          {word.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{
                opacity: index < visibleLetters ? 1 : 0,
                y: index < visibleLetters ? 0 : 30,
                scale: index < visibleLetters ? 1 : 0.8,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="loading-letter"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div 
          className="loading-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleLetters === word.length ? 1 : 0 }}
        >
          Connections that feel right
        </motion.div>
      </div>
    );
  }

  return (
    <div className="home-page">
      
      {/* ========== HERO SECTION ========== */}
      <section className="hero-section">
        <div className="hero-gradient" />
        
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="hero-eyebrow" variants={fadeInUp}>
              <BsStars /> Dating, done right
            </motion.span>
            <motion.h1 variants={fadeInUp}>
              Find someone who <span className="gradient-text">gets you</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Real profiles. Genuine intentions. Meaningful connections. 
              Pryvo is where quality matters more than quantity.
            </motion.p>
            <motion.div className="hero-cta" variants={fadeInUp}>
              <button className="btn-primary">
                <FaGooglePlay /> Get the App
              </button>
              <button className="btn-secondary">
                How it works
              </button>
            </motion.div>
            <motion.div className="hero-trust" variants={fadeInUp}>
              <span>🔒 Verified profiles only</span>
              <span>💜 50,000+ matches made</span>
            </motion.div>
          </motion.div>

          <div className="hero-visual">
            <ProfileCard 
              name="Priya" 
              age={28} 
              image="/single.jpg"
              prompt="I'm looking for..."
              promptAnswer="Someone who laughs at my bad puns"
              position="left"
              delay={0.5}
            />
            <ProfileCard 
              name="Arjun" 
              age={31} 
              image="/single2.jpg"
              prompt="My ideal weekend..."
              promptAnswer="Coffee, hiking, then a cozy movie night"
              position="right"
              delay={0.7}
            />
            {/* Match Connection Line */}
            <motion.div 
              className="match-connection"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.div {...pulseHeart} className="match-heart">
                <FaHeart />
              </motion.div>
              <span>It's a match!</span>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow" />
        </motion.div>
      </section>

      {/* ========== SECTION 1: DATING DONE RIGHT ========== */}
      <Section className="story-section section-1">
        <div className="section-content">
          <div className="section-text">
            <span className="section-label">The Pryvo Difference</span>
            <h2>Dating, but <span>done right</span></h2>
            <p>
              We built Pryvo on a simple belief: everyone looking for love deserves 
              a space that respects their time and intentions. No endless swiping. 
              No games. Just real people ready for real connection.
            </p>
            <div className="highlight-list">
              <div className="highlight-item">
                <FaCheckCircle />
                <span>Curated matches based on compatibility</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle />
                <span>Quality conversations over quantity</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle />
                <span>Designed for meaningful relationships</span>
              </div>
            </div>
            <button className="btn-outline" onClick={() => navigate('/howItWork')}>
              Learn how we do it →
            </button>
          </div>
          <div className="section-visual">
            <img src="/couple.png" alt="Happy couple" className="section-image" />
          </div>
        </div>
      </Section>

      {/* ========== SECTION 2: REAL PROFILES ========== */}
      <Section className="story-section section-2">
        <div className="section-content reverse">
          <div className="section-visual phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="app-profile-preview">
                  <div className="preview-header">
                    <img src="/profile2.jpg" alt="Profile" />
                    <div>
                      <h4>Sarah, 29</h4>
                      <span>2 km away</span>
                    </div>
                  </div>
                  <div className="preview-prompts">
                    <div className="prompt-bubble">
                      <span className="prompt-q">My love language is...</span>
                      <span className="prompt-a">Acts of service & quality time ✨</span>
                    </div>
                    <div className="prompt-bubble">
                      <span className="prompt-q">Dating me is like...</span>
                      <span className="prompt-a">Having a best friend who also gives great hugs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-text">
            <span className="section-label">Beyond the surface</span>
            <h2>Real profiles, <span>real intentions</span></h2>
            <p>
              Every profile tells a story. Our unique prompts help you share 
              who you really are—and discover what makes others tick. 
              Connect over shared values, not just photos.
            </p>
            <div className="stat-row">
              <div className="stat">
                <span className="stat-number">89%</span>
                <span className="stat-label">Verified profiles</span>
              </div>
              <div className="stat">
                <span className="stat-number">3x</span>
                <span className="stat-label">More meaningful conversations</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== SECTION 3: PRIVACY & SAFETY ========== */}
      <Section className="story-section section-3">
        <div className="section-header-centered">
          <span className="section-label">Your safety, our priority</span>
          <h2>Privacy, safety, and <span>control</span></h2>
          <p>
            We take your security seriously so you can focus on what matters—finding connection.
          </p>
        </div>
        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <FeatureCard 
            icon={FaUserCheck}
            title="Verified Profiles"
            description="Photo verification ensures you're talking to real people, not bots or catfishes."
          />
          <FeatureCard 
            icon={FaShieldAlt}
            title="Advanced Moderation"
            description="AI-powered safety features and 24/7 human review keep the community respectful."
          />
          <FeatureCard 
            icon={FaLock}
            title="Privacy Controls"
            description="You decide who sees what. Hide your profile, block anyone, anytime."
          />
        </motion.div>
      </Section>

      {/* ========== SOCIAL PROOF ========== */}
      <Section className="testimonials-section">
        <div className="section-header-centered">
          <span className="section-label">Love stories</span>
          <h2>What our members <span>say</span></h2>
        </div>
        <motion.div 
          className="testimonials-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialCard 
            quote="Pryvo felt different from day one. The conversations were actually meaningful, and I met my partner within 3 weeks."
            name="Alexander Thompson"
            title="Product Designer, New York"
            image="/profile2.jpg"
          />
          <TestimonialCard 
            quote="Finally, an app that prioritizes quality over swipe-fests. I feel safe and respected here."
            name="Emily Carter"
            title="Marketing Strategist, Toronto"
            image="/profile3.jpg"
          />
          <TestimonialCard 
            quote="The prompts helped me show my real personality. Found someone who loves my weird hobbies too!"
            name="Sophia Martinez"
            title="UX Researcher, Barcelona"
            image="/profile4.jpg"
          />
        </motion.div>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <Section className="final-cta-section">
        <div className="cta-content">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your person is waiting
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands who found meaningful connection on Pryvo. 
            Download free and start your journey today.
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="btn-primary large">
              <FaGooglePlay /> Google Play
            </button>
            <button className="btn-primary large apple">
              <FaApple /> App Store
            </button>
          </motion.div>
        </div>
        <div className="cta-background-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </Section>

      {/* ========== NEWSLETTER ========== */}
      <Section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h3>Stay in the loop</h3>
            <p>Get dating tips, success stories, and Pryvo updates. No spam, ever.</p>
          </div>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </Section>

    </div>
  );
};

export default Home;