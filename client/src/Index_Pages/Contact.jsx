/**
 * PRYVO - Contact Page
 * 
 * Premium redesign with:
 * - Modern form design
 * - Animated elements
 * - Consistent design language
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../Styles/contact.css";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaHeadset, FaShieldAlt, FaPaperPlane } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Contact = () => {
  const [response, setResponse] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !subject || !description) {
      alert("Please fill all required fields");
      return;
    }
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          response: response,
          user_email: email,
          subject,
          description,
          to_email: "ashu0986ak@gmail.com"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully");
      setEmail("");
      setSubject("");
      setDescription("");
      setResponse("");

    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const requestTypes = [
    { value: "Report a user", label: "Report a User" },
    { value: "harassment or Abuse", label: "Harassment or Abuse" },
    { value: "scam or Fraud Concern", label: "Scam or Fraud Concern" },
    { value: "Account Access or Login Issue", label: "Account Access or Login Issue" },
    { value: "Account Deletion or Deactivation", label: "Account Deletion or Deactivation" },
    { value: "Profile Review or Appeal", label: "Profile Review or Appeal" },
    { value: "Privacy or Data Request", label: "Privacy or Data Request" },
    { value: "Technical Issue / Bug Report", label: "Technical Issue / Bug Report" },
    { value: "Feedback or Suggestions", label: "Feedback or Suggestions" },
    { value: "Other / General Inquiry", label: "Other / General Inquiry" }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-gradient" />
        <motion.div 
          className="contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="hero-eyebrow" variants={fadeInUp}>
            <BsStars /> We're here to help
          </motion.span>
          <motion.h1 variants={fadeInUp}>
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Have a question, concern, or feedback? Our support team is ready to help you.
          </motion.p>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="badge">
          <FaHeadset />
          <span>24/7 Support</span>
        </div>
        <div className="badge">
          <FaShieldAlt />
          <span>Secure & Private</span>
        </div>
        <div className="badge">
          <FaEnvelope />
          <span>Quick Response</span>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-header">
              <h2>Submit a Request</h2>
              <p>Please choose a request type and fill in the details below</p>
            </div>

            <div className="form-content">
              {/* Request Type Selector */}
              <div className="form-group">
                <label>What can we help you with?</label>
                <div className="select-wrapper">
                  <select
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className={response ? 'has-value' : ''}
                  >
                    <option value="">Select a reason...</option>
                    {requestTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Form Fields */}
              {response && (
                <motion.form 
                  className="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="form-group">
                    <label>Your Email</label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="you@example.com" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input 
                      type="text" 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)} 
                      placeholder="Brief description of your issue" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <div className="editor-wrapper">
                      <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        placeholder="Please describe your issue in detail..."
                      />
                    </div>
                  </div>

                  <motion.button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Submit Request</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="info-card">
              <h3>Response Time</h3>
              <p>We typically respond within 24-48 hours during business days.</p>
            </div>
            <div className="info-card">
              <h3>Before You Contact Us</h3>
              <ul>
                <li>Check our <a href="/faq">FAQ</a> for quick answers</li>
                <li>Review our <a href="/trustNSafety">Trust & Safety</a> guidelines</li>
                <li>Read our <a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="info-card highlight">
              <h3>Emergency?</h3>
              <p>If you're in immediate danger, please contact local emergency services first.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
