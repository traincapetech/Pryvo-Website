import React from 'react'
import '../Styles/howItWorks.css'
import { FcSearch } from "react-icons/fc";

const HowWorks = () => {
    return (
        <div className='page-offset'>
            <div className="WorkSection">
                <div className="WorkSection-title">
                    <FcSearch />
                    <h2>HOW PRYVO WORKS</h2>
                </div>
                <div className="Work-section-step">
                    <h2>
                        Private. Safe. Meaningful Connections.
                    </h2>
                    <p>
                        Pryvo is built for people who want real connections without compromising their privacy. Every feature is designed to give you control, safety, and transparency from the very first step.
                    </p>
                    <hr />
                </div>
                <div className="Work-section-step">
                    <h2>
                        Step 1: Create Your Account
                    </h2>
                    <p>
                        Getting started on Pryvo is simple and secure.
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Sign up using your email address</li>
                        <li>No unnecessary personal information required</li>
                        <li>Strong security practices to protect your account</li>
                    </ul>
                    <p className='Note'>
                        Why this matters:
                    </p>
                    <p>We collect only what’s essential. Your identity and data stay protected from day one.</p>
                    <hr />
                </div>

                <div className="Work-section-step">
                    <h2>
                        Step 2: Set Your Privacy Preferences
                    </h2>
                    <p>
                        On Pryvo, <span className='Note'>you decide what others can see.</span>
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Control your profile visibility</li>
                        <li>Choose which details are public or private</li>
                        <li>Manage email and notification preferences</li>
                    </ul>
                    <p className='Note'>
                        Why this matters:
                    </p>
                    <p>Privacy isn’t hidden in settings — it’s a core feature. You’re always in control</p>
                    <hr />
                </div>

                <div className="Work-section-step">
                    <h2>
                        Step 3: Smart & Respectful Matching
                    </h2>
                    <p>
                        Pryvo focuses on quality, not quantity.
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Interest-based matching</li>
                        <li>Designed to reduce spam and fake interactions</li>
                        <li>No aggressive or intrusive algorithms</li>
                    </ul>
                    <p className='Note'>
                        Why this matters:
                    </p>
                    <p>Matches are created to encourage genuine conversations, not endless swiping.</p>
                    <hr />
                </div><div className="Work-section-step">
                    <h2>
                        Step 4: Connect & Chat Safely
                    </h2>
                    <p>
                        Communicate with confidence inside Pryvo.
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Secure in-app messaging</li>
                        <li>Block or report users instantly</li>
                        <li>No pressure to share personal contact details</li>
                    </ul>
                    <p className='Note'>
                        Why this matters:
                    </p>
                    <p>Your safety comes first. You’re never locked into a conversation you’re uncomfortable with.</p>
                    <hr />
                </div><div className="Work-section-step">
                    <h2>
                        Step 5: Trust & Safety at Every Level
                    </h2>
                    <p>
                        Safety isn’t optional on Pryvo — it’s built in.
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Profile moderation</li>
                        <li>Community guidelines enforcement</li>
                        <li>User reporting and support system</li>
                        <li>Continuous safety improvements</li>
                    </ul>
                    <p className='Note'>
                        Why this matters:
                    </p>
                    <p>We actively work to create a respectful and secure environment for everyone.</p>
                    <hr />
                </div><div className="Work-section-step">
                    <h2>
                        Step 6: Stay Updated — On Your Terms
                    </h2>
                    <p>
                        You choose how you hear from us.
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Product updates</li>
                        <li>Safety alerts</li>
                        <li>Feature announcements</li>
                        <li>Easy unsubscribe anytime</li>
                    </ul>
                    <p className='Note'>
                        Why this matters:
                    </p>
                    <p>No spam. No unwanted emails. Only what you opt into.</p>
                    <hr />
                </div>

                <div className="Work-section-step">
                    <h2>
                        Your Data. Your Control.
                    </h2>
                    <p>
                        We believe your data belongs to you.
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Minimal data storage</li>
                        <li>No selling of personal information</li>
                        <li>Access, manage, or delete your data anytime</li>
                        <li>Full transparency about how data is used</li>
                    </ul>
                    <p className='Note'>
                        Our promise:
                    </p>
                    <p>Pryvo exists to build trust — not to exploit data.</p>
                    <hr />
                </div>

                <div className="Work-section-step">
                    <h2>
                        Who Is Pryvo For?
                    </h2>
                    <p>
                        Pryvo is for people who:
                    </p>
                    <ul className='Work-step-lists'>
                        <li>Value privacy and security</li>
                        <li>Want meaningful connections</li>
                        <li>Are tired of fake profiles and spam</li>
                        <li>Expect transparency from platforms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HowWorks