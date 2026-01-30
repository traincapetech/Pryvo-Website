import React from 'react'
import '../Styles/security.css'
import '../Styles/Home.css'
import { FcLock } from "react-icons/fc";

const Security = () => {
  return (
    <div className='font-PTserif'>
      <div className="security_section">
        <div className="security-top">
          <div className="Security-title flex items-center gap-3 justify-center">
           <FcLock className=''/>
            <h1>Security</h1>
          </div>
        </div>
        <div className="security-content px-6 md:p-0">
          <div className="security-image">
            <h3><b>User Privacy and security are our highest priorities, above commercial interests.</b></h3>
            <img src="security.jpg" alt="SecurtiyImg" className='securityImg' />
            <ul className='security-points'>
              <li>All user data is protected using industry-standard encryption while being transmitted 
                 and while stored on our secure cloud infrastructure.</li>
              <li>We follow strict access-control practices, ensuring team members can only access the systems and data required to perform their specific responsibilities.</li>
              <li>Every interaction with our systems is monitored and logged to maintain accountability and detect suspicious activity.</li>
              <li>Our security measures are reviewed and tested regularly by independent security professionals and external auditors.</li>
              <li>We actively encourage responsible disclosure and welcome security researchers to report vulnerabilities through our dedicated reporting channels. </li>
              <li>Security is built into every stage of our product development — from design and testing to deployment and ongoing improvements.</li>

            </ul>
          </div>

          <div className="security-image">
            <h4> <b>Compliances</b></h4>
            <img src="/security2.jpg" alt="SecurtiyImg" className='securityImg' /><br />
            <ul className='security-points'>
              <li> At Pryvo, we are committed to maintaining the highest standards of security, privacy, and regulatory compliance to protect our users and their data. We strictly adhere to applicable laws, industry standards, <br /> and best practices to ensure a safe and trustworthy dating experience. <br /></li>
              <li> Pryvo complies with global and regional data protection and privacy regulations, ensuring that user information is collected, processed, and stored lawfully and transparently.</li>
              <li>All user data is handled in accordance with industry-recognized security standards, including secure data storage, encrypted data transmission, and controlled access mechanisms.</li>
              <li>We follow the principle of least privilege access, ensuring that only authorized personnel can access sensitive systems and data required to perform their job responsibilities.</li>
              <li>Pryvo conducts regular internal security reviews and assessments to ensure continued compliance with evolving security requirements and regulatory expectations.</li>
              <li> Our systems are designed with privacy and security by design, embedding compliance considerations at every stage—from product design and development to deployment and ongoing operations.</li>
              <li> We maintain detailed audit logs and monitoring mechanisms to detect, prevent, and respond to unauthorized or suspicious activities.</li>
              <li> Pryvo encourages responsible disclosure and works proactively with security researchers to identify and address potential vulnerabilities in a timely manner.</li>
              <li> We continuously update our policies, controls, and procedures to remain aligned with emerging compliance standards and legal requirements.</li>
            </ul>
          </div>

          <div className="security-image">
            <p> <strong>Contact Security</strong></p>
<br />
            <ul className='security-points'>
              <li> Pryvo appreciates and supports responsible contributions from the security research community. If you believe you have discovered a security weakness in any part of our platform or infrastructure, we encourage you to report it responsibly through our official vulnerability disclosure process.
              </li>
              <li> To help keep our users safe, we ask that information related to any suspected vulnerabilities remains confidential and is not shared publicly or with third parties until our security team has reviewed the issue and confirmed that it has been resolved. Please be aware that Pryvo strictly forbids activities such as Denial of Service (DoS) testing or the use of automated scanning tools on our applications or systems.</li>
              <li> For account-related questions, profile issues, general concerns, or to report another user or profile, please contact us through our dedicated support portal for assistance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security