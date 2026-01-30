import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/store';
import { FaShieldAlt, FaRocket, FaUsers, FaEnvelopeOpenText } from 'react-icons/fa';
import '../Styles/NewsLetter.css';

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const { subscribe, subscribing } = useStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        subscribe(email, "dedicated_page");
        setEmail("");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="newsletter-page">
            {/* Hero Section */}
            <section className="newsletter-hero">
                <div className="hero-content">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        The <span>Pryvo</span> Pulse
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        More than just updates. It's your guide to meaningful connections, 
                        digital safety, and the future of dating.
                    </motion.p>
                </div>
                
                <motion.div 
                    className="hero-form-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <form onSubmit={handleSubmit} className="modern-form">
                        <div className="input-group">
                            <FaEnvelopeOpenText className="input-icon" />
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" disabled={subscribing}>
                            {subscribing ? "Joining..." : "Join the Inner Circle"}
                        </button>
                    </form>
                    <span className="trust-note">Join 5,000+ subscribers. No spam, ever.</span>
                </motion.div>
            </section>

            {/* Features Breakdown */}
            <motion.section 
                className="newsletter-features"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="feature-card" variants={itemVariants}>
                    <div className="feature-icon-wrapper">
                        <FaShieldAlt />
                    </div>
                    <h3>Safety First</h3>
                    <p>Exclusive tips on digital privacy, spotting scammers, and dating safely in the modern world.</p>
                </motion.div>

                <motion.div className="feature-card" variants={itemVariants}>
                    <div className="feature-icon-wrapper">
                        <FaRocket />
                    </div>
                    <h3>Early Access</h3>
                    <p>Be the first to know about new Pryvo features, local events, and premium matchmaking updates.</p>
                </motion.div>

                <motion.div className="feature-card" variants={itemVariants}>
                    <div className="feature-icon-wrapper">
                        <FaUsers />
                    </div>
                    <h3>Stories & Science</h3>
                    <p>Real success stories mixed with the psychology behind why we connect the way we do.</p>
                </motion.div>
            </motion.section>

            {/* Visual Teaser */}
            <section className="newsletter-teaser">
                <div className="teaser-inner">
                    <div className="teaser-text">
                        <h2>Quality over Quantity</h2>
                        <p>
                            We believe in connections that feel right. Our newsletter reflects that value—curated content 
                            designed to improve your dating life, not clutter your inbox.
                        </p>
                    </div>
                    <div className="teaser-visual">
                        <div className="glass-mockup">
                            <div className="mockup-header">Newsletter #42</div>
                            <div className="mockup-body">
                                <div className="skeleton line-1"></div>
                                <div className="skeleton line-2"></div>
                                <div className="skeleton line-3"></div>
                                <div className="skeleton circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;