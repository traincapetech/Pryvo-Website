/**
 * PRYVO - Dedicated Account & Data Deletion Page
 *
 * Google Play Data Safety compliant self-service deletion flow
 * supporting both Email/Password and Google Sign-In accounts via Email OTP.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mainApi from '../api/mainapi';
import '../Styles/legal.css';
import {
  FaTrashAlt,
  FaListOl,
  FaDatabase,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaShieldAlt,
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DeleteAccount = () => {
  const lastUpdated = 'November 20, 2026';

  const [step, setStep] = useState('email'); // 'email' | 'otp' | 'done'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      setErrorMessage('Please enter your registered Pryvo email address.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setStatusMessage('');

    try {
      const res = await mainApi.post('/public/delete-account/send-otp', {
        email: trimmed,
      });
      setStatusMessage(
        res.data?.message ||
          `A 6-digit verification code has been sent to ${trimmed}. Check your inbox and spam folder.`,
      );
      setStep('otp');
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message ||
          'Could not send verification code. Please check your email address or contact pryvo@traincapetech.in.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDeletion = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedOtp = otp.trim();
    if (trimmedOtp.length !== 6) {
      setErrorMessage('Please enter the 6-digit verification code sent to your email.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setStatusMessage('');

    try {
      const res = await mainApi.post('/public/delete-account/confirm', {
        email: trimmedEmail,
        otp: trimmedOtp,
      });
      setStatusMessage(
        res.data?.message ||
          'Your Pryvo account and all associated personal data have been permanently deleted.',
      );
      setStep('done');
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message ||
          'Invalid or expired verification code. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const tableOfContents = [
    { id: 'steps', label: 'Steps to Delete' },
    { id: 'web-deletion', label: 'Delete Account Online' },
    { id: 'data-deleted', label: 'Data Deleted vs. Retained' },
    { id: 'contact', label: 'Need Help?' },
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
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div className="hero-icon" variants={fadeInUp}>
            <FaTrashAlt />
          </motion.div>
          <motion.h1 variants={fadeInUp}>Account &amp; Data Deletion</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Pryvo — Operated by Traincape Technologies Pvt Ltd
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
              <strong>App Name:</strong> Pryvo &nbsp;|&nbsp;{' '}
              <strong>Developer:</strong> Traincape Technologies Pvt Ltd
            </p>
            <p>
              You can permanently delete your Pryvo account and all associated personal data at
              any time — either inside the Pryvo mobile app or directly on this web page without
              reinstalling the app. This works for both <strong>Email/Password</strong> and{' '}
              <strong>Google Sign-In</strong> accounts.
            </p>
          </div>

          {/* Section 1: Steps */}
          <section id="steps" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaListOl />
              </div>
              <h2>1. Steps to Request Account Deletion</h2>
            </div>
            <div className="section-content">
              <h3>Option A — Delete Inside the Pryvo App (Instant)</h3>
              <ul>
                <li>Open the <strong>Pryvo</strong> app and sign in to your account.</li>
                <li>Tap the <strong>Settings</strong> tab in the bottom navigation bar.</li>
                <li>Scroll to Account Actions and tap <strong>Delete Account</strong>.</li>
                <li>Confirm your deletion request — your account and all data are permanently removed immediately.</li>
              </ul>

              <h3>Option B — Delete Online on This Page (No App Required)</h3>
              <ul>
                <li>Enter your registered Pryvo email address in the form below (works for both Email and Google Sign-In accounts).</li>
                <li>Click <strong>Send 6-Digit Verification Code</strong> and check your email inbox.</li>
                <li>Enter the 6-digit code and click <strong>Permanently Delete My Account</strong>.</li>
                <li>Your account and all personal data are permanently deleted immediately upon confirmation.</li>
              </ul>

              <h3>Option C — Email Support Request</h3>
              <p>
                If you no longer have access to your account or need manual assistance, email{' '}
                <strong>
                  <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a>
                </strong>{' '}
                from your registered email address with the subject{' '}
                <em>&ldquo;Delete My Pryvo Account&rdquo;</em>. Requests are completed within{' '}
                <strong>7 days</strong>.
              </p>
            </div>
          </section>

          {/* Section 2: Interactive Web Deletion Form */}
          <section id="web-deletion" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaShieldAlt />
              </div>
              <h2>2. Delete Your Pryvo Account Now</h2>
            </div>
            <div className="section-content">
              <div
                className="contact-box"
                style={{
                  border: '1px solid #f3d4d4',
                  background: '#fffafa',
                  padding: '28px',
                }}
              >
                {errorMessage && (
                  <div
                    className="warning-box"
                    style={{
                      background: '#fef2f2',
                      borderLeftColor: '#dc2626',
                      color: '#991b1b',
                      marginTop: 0,
                    }}
                  >
                    <FaExclamationTriangle style={{ marginRight: 8, verticalAlign: 'middle' }} />
                    {errorMessage}
                  </div>
                )}

                {statusMessage && (
                  <div className="info-box" style={{ marginTop: 0 }}>
                    <FaCheckCircle style={{ marginRight: 8, verticalAlign: 'middle' }} />
                    {statusMessage}
                  </div>
                )}

                {step === 'email' && (
                  <form onSubmit={handleSendOtp}>
                    <label
                      htmlFor="delete-email"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        marginBottom: 8,
                        color: '#1f2937',
                      }}
                    >
                      Registered Pryvo Email Address (Email or Google Sign-In)
                    </label>
                    <input
                      id="delete-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 10,
                        border: '1px solid #d1d5db',
                        fontSize: 15,
                        boxSizing: 'border-box',
                        marginBottom: 14,
                      }}
                    />
                    <p style={{ fontSize: 13, marginBottom: 18 }}>
                      We will send a one-time 6-digit verification code to confirm account ownership
                      before deleting your data.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        background: '#880000',
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 22px',
                        borderRadius: 10,
                        fontWeight: 600,
                        fontSize: 15,
                        cursor: loading ? 'not-allowed' : 'pointer',
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? 'Sending Verification Code...' : 'Send 6-Digit Verification Code'}
                    </button>
                  </form>
                )}

                {step === 'otp' && (
                  <form onSubmit={handleConfirmDeletion}>
                    <label
                      htmlFor="confirm-email"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        marginBottom: 6,
                        color: '#1f2937',
                      }}
                    >
                      Registered Account Email
                    </label>
                    <input
                      id="confirm-email"
                      type="email"
                      readOnly
                      value={email}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 10,
                        border: '1px solid #e5e7eb',
                        background: '#f3f4f6',
                        fontSize: 15,
                        boxSizing: 'border-box',
                        marginBottom: 16,
                      }}
                    />

                    <label
                      htmlFor="delete-otp"
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        marginBottom: 6,
                        color: '#1f2937',
                      }}
                    >
                      6-Digit Verification Code
                    </label>
                    <input
                      id="delete-otp"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit code from your email"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 10,
                        border: '1px solid #d1d5db',
                        fontSize: 16,
                        letterSpacing: 4,
                        boxSizing: 'border-box',
                        marginBottom: 14,
                      }}
                    />

                    <div
                      className="warning-box"
                      style={{
                        background: '#fef2f2',
                        borderLeftColor: '#dc2626',
                        color: '#991b1b',
                        margin: '12px 0 18px',
                      }}
                    >
                      <strong>Permanent Action:</strong> Confirming will immediately and permanently
                      delete your Pryvo account, profile, photos, matches, and chat history. This
                      cannot be undone.
                    </div>

                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          background: '#dc2626',
                          color: '#ffffff',
                          border: 'none',
                          padding: '12px 22px',
                          borderRadius: 10,
                          fontWeight: 600,
                          fontSize: 15,
                          cursor: loading ? 'not-allowed' : 'pointer',
                          opacity: loading ? 0.7 : 1,
                        }}
                      >
                        {loading ? 'Deleting Account...' : 'Permanently Delete My Account'}
                      </button>
                      <button
                        type="button"
                        disabled={loading}
                        onClick={() => {
                          setStep('email');
                          setOtp('');
                          setErrorMessage('');
                          setStatusMessage('');
                        }}
                        style={{
                          background: '#ffffff',
                          color: '#374151',
                          border: '1px solid #d1d5db',
                          padding: '12px 18px',
                          borderRadius: 10,
                          fontWeight: 600,
                          fontSize: 14,
                          cursor: 'pointer',
                        }}
                      >
                        Use a Different Email
                      </button>
                    </div>
                  </form>
                )}

                {step === 'done' && (
                  <p style={{ margin: 0, color: '#065f46', fontWeight: 500 }}>
                    Deletion complete. Thank you for using Pryvo. You may now safely close this
                    page.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 3: Data Deleted vs. Retained */}
          <section id="data-deleted" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaDatabase />
              </div>
              <h2>3. Types of Data Deleted vs. Retained &amp; Retention Period</h2>
            </div>
            <div className="section-content">
              <h3>Data Permanently Deleted (0-Day Retention — Immediate Removal)</h3>
              <p>
                Upon confirming your deletion request (in-app or via the form above), the following
                data is permanently deleted from our active databases and media storage immediately:
              </p>
              <ul>
                <li><strong>Account Credentials &amp; Identity:</strong> Name, email address, phone number, date of birth, password hash, and Google Sign-In link</li>
                <li><strong>Profile &amp; Preferences:</strong> Bio, gender, sexual orientation, dating preferences, prompts, and lifestyle details</li>
                <li><strong>Photos &amp; Media:</strong> All uploaded profile photos stored in our cloud media storage (Cloudflare R2)</li>
                <li><strong>Location Data:</strong> Stored latitude/longitude coordinates and city selection</li>
                <li><strong>Social Activity &amp; Messages:</strong> Swipes, likes, passes, matches, chat messages, streaks, blocks, and notifications</li>
                <li><strong>Device Identifiers:</strong> Push notification (FCM) tokens</li>
              </ul>

              <h3>Data Retained &amp; Retention Period</h3>
              <ul>
                <li>
                  <strong>Standard Accounts:</strong> <strong>0 days</strong> additional retention —
                  no personal profile, photo, location, or message data is kept after deletion.
                </li>
                <li>
                  <strong>Safety / Banned Accounts Only:</strong> If an account was permanently
                  banned for severe safety violations (such as fraud, harassment, or Child Sexual
                  Abuse and Exploitation / CSAE), we may retain minimal abuse-prevention records
                  strictly as required by applicable law and user safety obligations.
                </li>
                <li>
                  <strong>Crash Diagnostics:</strong> Anonymized crash logs collected by Firebase
                  Crashlytics expire automatically per Firebase&apos;s standard retention schedule
                  (up to 90 days) and are not linked back to your deleted profile.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Contact */}
          <section id="contact" className="legal-section">
            <div className="section-header">
              <div className="section-icon">
                <FaEnvelope />
              </div>
              <h2>4. Contact &amp; Related Policies</h2>
            </div>
            <div className="section-content">
              <div className="contact-box">
                <p><strong>Developer:</strong> Traincape Technologies Pvt Ltd</p>
                <p><strong>Privacy &amp; Deletion Support:</strong> <a href="mailto:pryvo@traincapetech.in">pryvo@traincapetech.in</a></p>
                <p>
                  <strong>Related Policies:</strong>{' '}
                  <Link to="/privacy">Privacy Policy</Link> &nbsp;|&nbsp;{' '}
                  <Link to="/terms">Terms of Service</Link> &nbsp;|&nbsp;{' '}
                  <Link to="/child-safety">Child Safety Standards</Link>
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

export default DeleteAccount;
