import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Home.css'
import '../Styles/privacy.css'
import { FcPrivacy } from "react-icons/fc";

const Privacy = () => {
  return (
    <div className='font-PTserif'>
      <Navbar />
      <div className="privacy-section">
        <div className="privacy-title">
          <FcPrivacy />
          <h3>PRIVACY POLICY</h3>
        </div>
        <div className="privacy-heading">
          <p>
            At Pryvo, your privacy is at the core of everything we build. We are committed to protecting your personal information and being transparent about how your data is collected, used, stored, and safeguarded. This Privacy Policy explains our practices and your rights when you use the Pryvo platform.
          </p>
          <br />
          <hr />
        </div>


        <div className="Privacy-disp">
          <ul className='privacy-list'>
            <li><h2> Information We Collect</h2></li>
            <p>
              We collect information to provide a secure, personalized, and meaningful experience.
            </p>
            <ul className='Pr-info-list'>
              <li><h2>Information You Provide</h2></li>
              <p>
                Name, username, email address, phone number

                Profile details such as photos, bio, preferences, and interests

                Account credentials and authentication data

                Communications with other users and with Pryvo support
              </p>
              <li><h2>Automatically Collected Information</h2></li>
              <p>
                Device information (device type, operating system, browser)

                Log data such as IP address, timestamps, and usage activity

                Cookies and similar technologies to enhance performance and security

              </p>
            </ul>
            <li><h2>How We Use Your Information</h2></li>
            <p>
              Your data is used only for legitimate and necessary purposes, including:

              Creating and managing your Pryvo account

              Connecting you with compatible matches

              Improving app performance, features, and user experience

              Ensuring platform safety, fraud prevention, and abuse detection

              Communicating important updates, security alerts, and support messages


              We do not sell your personal data or use it for unethical purposes.
            </p>
            <li><h2>Data Sharing & Disclosure</h2></li>
            <p>
              Pryvo limits data sharing to the minimum required:

              With trusted service providers who support platform operations

              When required by law or to protect user safety

              During business transitions such as mergers or acquisitions


              All partners are contractually required to maintain strict confidentiality and security standards.
            </p>
            <li><h2> Data Security</h2></li>
            <p>
              We implement industry-standard safeguards to protect your data:

              Encryption of data in transit and at rest

              Role-based and least-privilege access controls

              Continuous monitoring and security logging

              Regular security reviews and assessments


              Security is integrated into every stage of our product—from design and development to deployment and maintenance.
            </p>
            <li><h2>User Controls & Choices</h2></li>
            <p>
              You have full control over your information:

              Edit or update your profile at any time

              Manage privacy and visibility settings

              Request account deactivation or deletion

              Opt out of non-essential communications


              We respect your choices and act on your requests promptly.
            </p>
            <li><h2>Data Retention</h2></li>
            <p>
              We retain your information only as long as necessary to:

              Provide Pryvo services

              Comply with legal obligations

              Resolve disputes and enforce policies


              Once no longer required, data is securely deleted or anonymized.
            </p>
            <li><h2>Children’s Privacy</h2></li>
            <p>
              Pryvo is strictly intended for users 18 years and older.
              We do not knowingly collect personal data from minors. Any such data identified is promptly removed.

            </p>
            <li><h2>International Data Transfers</h2></li>
            <p>
              Your data may be processed and stored in secure servers located in different regions. We ensure appropriate safeguards are in place to protect your data regardless of location
            </p>
            <li><h2> Compliance & Legal Rights</h2></li>
            <p>
              Pryvo complies with applicable data protection laws and industry standards, including privacy and security regulations. Depending on your location, you may have rights such as:

              Accessing your personal data

              Requesting correction or deletion

              Restricting or objecting to processing.

            </p>
            <li><h2> Updates to This Policy</h2></li>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in law, technology, or our services. Any updates will be communicated clearly through the Pryvo platform.
            </p>
            <li><h2>Contact Us</h2></li>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us through our official support channels. We are here to help.
            </p>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Privacy