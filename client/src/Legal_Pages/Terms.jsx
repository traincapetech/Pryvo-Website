import React from 'react'
import '../Styles/term.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Home.css'


const Terms = () => {
  return (
    <div className='font-PTserif'>
      <Navbar />
      <div className="Term-section">
        <h1 className='Term-title'>Terms </h1>
        <div className="Term-title-heading">
          <div className="Term-title-head-list">
            <p className='Term-title-head-list-font'>TERMS OF USE AGREEMENT</p>
            <p className='Term-title-head-list-font-date'>Effective on December 20, 2025</p>
            <p className='Term-title-head-list-font'>By accessing or interacting with Pryvo’s platform and submitting any security-related findings, you agree to comply with the following terms:</p>
          </div>
          <ul className='term-list'>
            <li> Authorized Testing Only</li>
            <p>
              Security testing must be conducted responsibly and in good faith. Any activity that disrupts Pryvo’s services, compromises user data, or affects platform availability is strictly prohibited.
            </p>
            <li>Prohibited Activities</li>
            <p>
              You may not perform Denial of Service (DoS) attacks, distributed denial of service (DDoS) attacks, social engineering, phishing, spamming, or use automated scanning tools against Pryvo’s applications, servers, or infrastructure.
            </p>
            <li> Good-Faith Reporting</li>
            <p>
              Any information related to potential security vulnerabilities must remain confidential. You agree not to disclose, publish, or share vulnerability details with any third party until Pryvo has reviewed, resolved, and explicitly approved disclosure.
            </p>
            <li> Confidentiality Requirement</li>
            <p>
              Vulnerabilities must be reported promptly and responsibly through Pryvo’s designated reporting channels. Reports should include sufficient detail to allow our security team to validate and address the issue.
            </p>
            <li> No Data Exploitation </li>
            <p>
              You must not access, modify, copy, store, or delete user data during testing. Any accidental access to sensitive information must be reported immediately and not retained.
            </p>
            <li>No Legal Safe Harbor for Malicious Activity</li>
            <p>
              These terms do not grant permission for illegal actions. Pryvo reserves the right to take appropriate legal action against activities that are malicious, reckless, or violate applicable laws.
            </p>
            <li> No Guarantee of Reward</li>
            <p>
              Submission of a vulnerability does not guarantee compensation, recognition, or inclusion in any reward or bug bounty program unless explicitly stated by Pryvo.
            </p>
            <li>Independent Support Channels</li>
            <p>
              These terms apply only to security vulnerability reporting. For account issues, profile concerns, user reports, or general support inquiries, users must contact Pryvo through the official support portal.
            </p>
            <li> Right to Modify</li>
            <p>
              Pryvo reserves the right to update or modify these terms at any time without prior notice, Continued interaction with this page constitutes acceptance of the updated terms.
            </p>
          </ul>
        </div>

      </div>
      <Footer />
    </div>

  )
}

export default Terms