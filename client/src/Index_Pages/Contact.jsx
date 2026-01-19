import React, { useState } from 'react'
import "../Styles/contact.css"
import { Link } from "react-router"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [response, setResponse] = useState("")
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

    return (
        <div>
            <div className="contact-section">
                <h1>Submit a request</h1>
                <p>Please choose a request type below</p>
                <select
                    name="response"
                    required
                    onChange={(e) => setResponse(e.target.value)}
                    className="Select-list">
                    <option value="">Select a reason</option>
                    <option value="Report a user">Report a User</option>
                    <option value="harassment or Abuse">Harassment or Abuse</option>
                    <option value="scam or Fraud Concern">Scam or Fraud Concern</option>
                    <option value="Account Access or Login Issue">Account Access or Login Issue</option>
                    <option value="Account Deletion or Deactivation">Account Deletion or Deactivation</option>
                    <option value="Profile Review or Appeal">Profile Review or Appeal</option>
                    <option value="Privacy or Data Request">Privacy or Data Request</option>
                    <option value="Technical Issue / Bug Report">Technical Issue / Bug Report</option>
                    <option value="Feedback or Suggestions">Feedback or Suggestions</option>
                    <option value="Other / General Inquiry  ">Other / General Inquiry</option>
                </select>

                {response && (
                    <form className="Contact-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <div className="form-section-list">
                                {/* <h2>Email Address</h2> */}
                                <input type="email" className="text-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email address' required />
                            </div>
                            <div className="form-section-list">
                                {/* <h2>Subject</h2> */}
                                <input type="text" className="text-input" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' required />
                            </div>
                            <div className="form-section-list">
                                {/* <h2>Description</h2> */}
                                <ReactQuill
                                    theme="snow"
                                    value={description}
                                    onChange={setDescription}
                                    placeholder="Describe your issue..."
                                    className='request-textarea'
                                />
                            </div>
                            <br /><br />
                            <button type="submit" className="contact-form-submit" disabled={loading}>
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
export default Contact
