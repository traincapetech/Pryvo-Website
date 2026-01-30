/**
 * PRYVO - Dating Tips Page
 * 
 * Premium redesign with comprehensive safe dating guidance
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../Styles/resources.css";
import { 
  FaHeart, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaMoneyBillWave,
  FaUserSecret,
  FaExclamationTriangle,
  FaComment,
  FaCar,
  FaGlassCheers,
  FaHandshake,
  FaFlag,
  FaGlobeAmericas,
  FaVenusMars,
  FaHeartbeat,
  FaQuestionCircle,
  FaLock,
  FaUsers,
  FaVideo
} from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

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

// Tip Card
const TipCard = ({ icon: Icon, title, children, type = "default" }) => (
  <motion.div className={`tip-card ${type}`} variants={fadeInUp}>
    <div className="tip-card-header">
      <div className="tip-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
    </div>
    <div className="tip-content">
      {children}
    </div>
  </motion.div>
);

// Section Header
const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="section-intro">
    <div className="section-intro-icon">
      <Icon />
    </div>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const Dating_tips = () => {
  return (
    <div className="resources-page dating-tips-page">
      {/* Hero Section */}
      <section className="resources-hero dating-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="resources-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <BsShieldCheck /> Stay Safe
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            Safe Dating Tips
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Your safety should always come first. Trust your instincts.
          </motion.p>
          <motion.p className="last-updated" variants={fadeInUp}>
            Last Updated: January 2025
          </motion.p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <AnimatedSection className="intro-section">
        <div className="intro-content">
          <p>
            Meeting new people can be exciting, but your safety should always come first. 
            Whether you're chatting online or meeting someone in person, use your best 
            judgment and trust your instincts. While you can't control others' actions, 
            there are steps you can take to make your Pryvo experience safer.
          </p>
        </div>
      </AnimatedSection>

      {/* Online Safety */}
      <AnimatedSection className="tips-section">
        <SectionHeader 
          icon={FaShieldAlt} 
          title="Online Safety" 
          subtitle="Protect yourself while connecting digitally"
        />
        
        <motion.div 
          className="tips-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TipCard icon={FaMoneyBillWave} title="Never Send Money" type="warning">
            <p>
              Never send money, gift cards, cryptocurrency, or share bank details with 
              someone you haven't met in person. Requests for money — even for emergencies 
              — are a common sign of scams.
            </p>
            <p className="tip-action">
              <strong>If anyone asks you for money, report the profile immediately.</strong>
            </p>
          </TipCard>

          <TipCard icon={FaUserSecret} title="Protect Your Personal Info">
            <p>
              Avoid sharing sensitive details such as your home or work address, daily 
              routine, or private family information with people you don't know well.
            </p>
            <p>
              If you're a parent, be mindful about what you share regarding your children, 
              including names, schools, or schedules.
            </p>
          </TipCard>

          <TipCard icon={FaComment} title="Stay on Pryvo">
            <p>
              Keep conversations within Pryvo while getting to know someone. Our messages 
              are monitored using safety tools to detect harmful behavior.
            </p>
            <p>
              <strong>People with bad intentions often try to move conversations off-platform quickly.</strong>
            </p>
          </TipCard>

          <TipCard icon={FaGlobeAmericas} title="Beware of Long-Distance Scams">
            <p>
              Be wary of users who claim to be stuck abroad or avoid meeting in person 
              or video calls. Scammers may push for emotional closeness quickly.
            </p>
            <p>
              <strong>If someone pressures you into a serious relationship too fast, it's a red flag.</strong>
            </p>
          </TipCard>

          <TipCard icon={FaFlag} title="Report Suspicious Behavior">
            <p>If something feels wrong, trust your instincts and report it:</p>
            <ul>
              <li>Requests for money or donations</li>
              <li>Underage users</li>
              <li>Harassment, threats, or hateful messages</li>
              <li>Fake or misleading profiles</li>
              <li>Spam or attempts to sell products</li>
            </ul>
          </TipCard>

          <TipCard icon={FaLock} title="Protect Your Account">
            <p>
              Choose a strong, unique password and be careful when logging in from shared 
              devices. Pryvo will never ask for your password via email or message.
            </p>
          </TipCard>
        </motion.div>
      </AnimatedSection>

      {/* Video Section */}
      <AnimatedSection className="video-section">
        <div className="video-content">
          <div className="video-text">
            <FaVideo className="video-icon" />
            <h3>Watch: How to Spot Dating Scams</h3>
            <p>Learn to recognize common warning signs and protect yourself</p>
          </div>
          <div className="video-container">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/jlxWxH0mgU8?si=nRDpUzTsKB1xYuRf" 
              title="Dating Scam Awareness" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </AnimatedSection>

      {/* Meeting in Person */}
      <AnimatedSection className="tips-section">
        <SectionHeader 
          icon={FaMapMarkerAlt} 
          title="Meeting in Person" 
          subtitle="Essential tips for safe first dates"
        />
        
        <motion.div 
          className="tips-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TipCard icon={FaUsers} title="Don't Rush">
            <p>
              Take time to get to know someone before meeting offline. Ask questions and 
              watch for warning signs.
            </p>
            <p>
              <strong>A phone or video call is a helpful step before meeting in person.</strong>
            </p>
          </TipCard>

          <TipCard icon={FaMapMarkerAlt} title="Meet in Public Places">
            <p>
              For your first few meetings, choose busy, public locations. Avoid meeting 
              at private homes or isolated places.
            </p>
            <p>
              <strong>If someone pressures you to go somewhere private, end the date.</strong>
            </p>
          </TipCard>

          <TipCard icon={FaComment} title="Share Your Plans">
            <p>
              Let a friend or family member know where you're going and who you're meeting. 
              Keep your phone charged and accessible at all times.
            </p>
          </TipCard>

          <TipCard icon={FaCar} title="Control Your Transportation">
            <p>
              Always have control over how you arrive and leave. Drive yourself, use public 
              transport, or arrange your own ride so you can leave whenever you want.
            </p>
          </TipCard>

          <TipCard icon={FaGlassCheers} title="Know Your Limits">
            <p>
              Alcohol and drugs can affect your awareness and decision-making. Don't feel 
              pressured to drink or use substances.
            </p>
            <p>
              <strong>If your date makes you uncomfortable, leave.</strong>
            </p>
          </TipCard>

          <TipCard icon={FaShieldAlt} title="Watch Your Drinks">
            <p>
              Only accept drinks directly from staff or pour them yourself. Keep your phone, 
              wallet, and belongings with you at all times.
            </p>
          </TipCard>

          <TipCard icon={FaExclamationTriangle} title="Trust Your Instincts" type="highlight">
            <p>
              It's okay to end a date early. If something feels off or unsafe, trust your 
              instincts and remove yourself from the situation.
            </p>
            <p>
              <strong>Ask staff or nearby people for help if needed.</strong>
            </p>
          </TipCard>
        </motion.div>
      </AnimatedSection>

      {/* LGBTQ+ Safety */}
      <AnimatedSection className="tips-section highlighted-section">
        <SectionHeader 
          icon={FaHeart} 
          title="LGBTQ+ Safety" 
          subtitle="Important considerations for dating and traveling"
        />
        
        <div className="highlighted-content">
          <p>
            While Pryvo supports inclusivity for all gender identities and sexual 
            orientations, laws and social attitudes vary across regions.
          </p>
          <ul>
            <li>Research local laws and safety conditions when traveling</li>
            <li>Dating apps may pose added risks in some areas</li>
            <li>Consider logging out or temporarily removing the app if you feel unsafe</li>
            <li>Exercise extra caution when connecting with new people in unfamiliar locations</li>
          </ul>
          <p>
            <strong>Prioritize your personal safety at all times.</strong>
          </p>
        </div>
      </AnimatedSection>

      {/* Sexual Health & Consent */}
      <AnimatedSection className="tips-section">
        <SectionHeader 
          icon={FaHeartbeat} 
          title="Sexual Health & Consent" 
          subtitle="Responsible and respectful intimacy"
        />
        
        <motion.div 
          className="tips-grid compact"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TipCard icon={FaShieldAlt} title="Protect Yourself">
            <p>
              Using protection such as condoms can significantly reduce the risk of 
              sexually transmitted infections (STIs).
            </p>
          </TipCard>

          <TipCard icon={FaHeartbeat} title="Know Your Status">
            <p>
              Many STIs don't show symptoms. Regular testing helps protect both you 
              and your partners.
            </p>
          </TipCard>

          <TipCard icon={FaComment} title="Communicate Openly">
            <p>
              Before becoming intimate, talk openly about sexual health, boundaries, 
              and testing. Honest communication builds trust.
            </p>
          </TipCard>

          <TipCard icon={FaHandshake} title="Consent Matters" type="highlight">
            <p>
              All sexual activity requires clear, enthusiastic consent. Consent can be 
              withdrawn at any time.
            </p>
            <p>
              <strong>Never proceed if your partner seems uncomfortable, unsure, or 
              unable to consent.</strong>
            </p>
          </TipCard>
        </motion.div>
      </AnimatedSection>

      {/* Resources & Help */}
      <AnimatedSection className="resources-cta-section">
        <div className="cta-content">
          <FaQuestionCircle className="cta-icon" />
          <h2>Need Help or Support?</h2>
          <p>
            Even when you take precautions, negative experiences can still happen — 
            and it's not your fault. Support is available.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Contact Support</Link>
            <Link to="/trust-safety" className="btn-secondary">Trust & Safety</Link>
          </div>
          <div className="emergency-notice">
            <FaExclamationTriangle className="emergency-icon" />
            <p>
              <strong>If you are in immediate danger</strong>, contact your local 
              emergency services right away.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Dating_tips;