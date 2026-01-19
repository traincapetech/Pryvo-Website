
import React from "react";
import "../Styles/term.css";

const Terms = () => {
  return (
    <main className="terms-page">
      <section className="terms-container">
        <header className="terms-header">
          <h1 className="terms-title">Terms</h1>
          <p className="terms-subtitle">TERMS OF USE AGREEMENT</p>
          <p className="terms-date">Effective on December 20, 2025</p>
        </header>

        <p className="terms-intro">
          By accessing or interacting with Pryvo’s platform and submitting any
          security-related findings, you agree to comply with the following
          terms:
        </p>

        <ol className="terms-list">
          <li>
            <h3>Authorized Testing Only</h3>
            <p>
              Security testing must be conducted responsibly and in good faith.
              Any activity that disrupts Pryvo’s services, compromises user data,
              or affects platform availability is strictly prohibited.
            </p>
          </li>

          <li>
            <h3>Prohibited Activities</h3>
            <p>
              You may not perform DoS/DDoS attacks, phishing, spamming, social
              engineering, or automated scanning against Pryvo’s infrastructure.
            </p>
          </li>

          <li>
            <h3>Good-Faith Reporting</h3>
            <p>
              Vulnerability information must remain confidential until Pryvo has
              reviewed and approved disclosure.
            </p>
          </li>

          <li>
            <h3>Confidentiality Requirement</h3>
            <p>
              Vulnerabilities must be reported responsibly with enough detail
              for validation and resolution.
            </p>
          </li>

          <li>
            <h3>No Data Exploitation</h3>
            <p>
              You must not access, store, modify, or delete user data. Any
              accidental access must be reported immediately.
            </p>
          </li>

          <li>
            <h3>No Legal Safe Harbor</h3>
            <p>
              These terms do not permit illegal activity. Pryvo may pursue legal
              action when necessary.
            </p>
          </li>

          <li>
            <h3>No Guarantee of Reward</h3>
            <p>
              Submitting a vulnerability does not guarantee compensation unless
              explicitly stated.
            </p>
          </li>

          <li>
            <h3>Independent Support Channels</h3>
            <p>
              These terms apply only to security reporting. Other issues must go
              through official support channels.
            </p>
          </li>

          <li>
            <h3>Right to Modify</h3>
            <p>
              Pryvo may update these terms at any time. Continued use means
              acceptance of changes.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default Terms;
