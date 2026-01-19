import React, { useState } from "react";
import { Link } from "react-router";
import "../Styles/faq.css";
import { IoIosArrowForward } from "react-icons/io";

const Faq = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    return (
        <div className="faq-body">
            <div className="faq-section-list">
                <div className="left-faq-section">
                    <div className="left-faq-section-first">
                        <h2 onClick={() => setOpen(!open)}>How does Matching Work <IoIosArrowForward className={`${open ? "rotate-270" : ""} transition duration-400`} /></h2>
                        
                        {open && (
                            <p>
                            You can like profiles within your radius. A match happens when
                            both users like each other.
                        </p>
                         )}
                    </div>
                    <div className="left-faq-section-first">
                        <h2 onClick={() => setOpen2(!open2)}>How to update my profile <IoIosArrowForward className={`${open2 ? "rotate-270" : ""} transition duration-400`} /></h2>
                        
                        {open2 && (
                            <p>
                            To update your profile, go to settings and click on 'Edit
                            Profile'. Make the desired changes and save.
                        </p>
                         )}
                    </div>
                    <div className="left-faq-section-first">
                        <h2 onClick={() => setOpen3(!open3)}>How to reset my password<IoIosArrowForward className={`${open3 ? "rotate-270" : ""} transition duration-400`} /></h2>
                        
                        {open3 && (
                            <p>
                            To reset your password, click on 'Forgot Password' on the login
                            page and follow the instructions sent to your email.
                        </p>
                         )}
                    </div>
                </div>
                <div className="right-faq-section">
                    <div className="right-faq-section-first">
                        <h2 onClick={() => setOpen4(!open4)}>How can I change my location <IoIosArrowForward className={`${open4 ? "rotate-270" : ""} transition duration-400`} /></h2>
                        
                        {open4 && (
                            <p>
                            Location is updated automatically based on your device's GPS.
                            Ensure that location services are enabled for the app.
                        </p>
                         )}
                    </div>
                    <div className="right-faq-section-first">
                        <h2 onClick={() => setOpen5(!open5)}>How do I delete my Account <IoIosArrowForward className={`${open5 ? "rotate-270" : ""} transition duration-400`} /></h2>
                       
                       {open5 && (
                         <p>
                            To delete your account, go to settings, select 'Account', and then
                            choose 'Delete Account'. Follow the prompts to confirm.
                        </p>
                         )}
                    </div>
                    <div className="right-faq-section-first">
                        <h2 onClick={() => setOpen6(!open6)}>How to contact support <IoIosArrowForward className={`${open6 ? "rotate-270" : ""} transition duration-400`} /></h2>
                        
                        {open6 && (
                            <p>
                            You can contact support by emailing support@pryvo.com or through
                            the 'Contact Us' section in the app.
                        </p>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;