import React, { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import AdminNavbar from '../Components/AdminNavbar';
import AdminUpperNav from '../Components/AdminUpperNav';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { FaPaperPlane, FaUsers, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import '../Styles/AdminEmail.css';

const AdminEmail = () => {
    const { 
        subscribers, 
        fetchSubscribers, 
        sendSubscribers, 
        subject, 
        setSubject, 
        message, 
        setMessage, 
        sending,
        loading 
    } = useStore();

    useEffect(() => {
        fetchSubscribers();
    }, [fetchSubscribers]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!subject || !message) {
            alert("Please fill in both subject and message.");
            return;
        }
        sendSubscribers(subject, message);
    };

    return (
        <div className="adminDash-layout">
            <AdminNavbar />
            <div className="adminDash-main">
                <AdminUpperNav />
                <div className="email-content">
                    {/* Page Header */}
                    <div className="email-header">
                        <div>
                            <h1>Newsletter Management</h1>
                            <p>Compose and send newsletters to your subscribers</p>
                        </div>
                        <div className="email-stats">
                            <div className="email-stat-badge">
                                <FaUsers />
                                <span>{subscribers.length} Subscribers</span>
                            </div>
                        </div>
                    </div>

                    <div className="email-grid">
                        {/* Send Newsletter Form */}
                        <div className="email-compose-card">
                            <div className="card-header">
                                <FaPaperPlane />
                                <h2>Compose Broadcast</h2>
                            </div>
                            <form onSubmit={handleSend} className="compose-form">
                                <div className="form-group">
                                    <label>Subject Line</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter a compelling subject..." 
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message Content</label>
                                    <div className="editor-wrapper">
                                        <ReactQuill 
                                            theme="snow" 
                                            value={message} 
                                            onChange={setMessage}
                                            placeholder="Write your newsletter content here..."
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={sending}
                                    className="send-btn"
                                >
                                    {sending ? (
                                        <>Sending...</>
                                    ) : (
                                        <><FaPaperPlane /> Send to All Subscribers</>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Subscribers List */}
                        <div className="subscribers-card">
                            <div className="card-header">
                                <FaEnvelope />
                                <h2>Active Subscribers</h2>
                            </div>
                            <div className="subscribers-list">
                                {loading ? (
                                    <div className="loading-state">
                                        <div className="spinner"></div>
                                        <p>Loading subscribers...</p>
                                    </div>
                                ) : subscribers.length === 0 ? (
                                    <div className="empty-state">
                                        <FaUsers className="empty-icon" />
                                        <p>No subscribers yet</p>
                                    </div>
                                ) : (
                                    <div className="subscriber-items">
                                        {subscribers.map((sub, index) => (
                                            <div key={index} className="subscriber-item">
                                                <div className="subscriber-avatar">
                                                    {sub.email.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="subscriber-info">
                                                    <span className="subscriber-email">{sub.email}</span>
                                                    <span className="subscriber-date">
                                                        <FaCalendarAlt />
                                                        {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString() : 'N/A'}
                                                    </span>
                                                </div>
                                                <span className={`subscriber-status ${sub.status || 'active'}`}>
                                                    {sub.status || 'active'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminEmail;
