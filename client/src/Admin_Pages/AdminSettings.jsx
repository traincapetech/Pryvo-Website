import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminUpperNav from '../Components/AdminUpperNav';
import { FaBell, FaPalette, FaLock, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../Styles/AdminProfile.css';

const AdminSettings = () => {
    const settingsOptions = [
        {
            icon: <FaBell />,
            title: 'Notifications',
            description: 'Manage email and push notification preferences',
        },
        {
            icon: <FaPalette />,
            title: 'Appearance',
            description: 'Customize dashboard theme and layout',
        },
        {
            icon: <FaLock />,
            title: 'Security',
            description: 'Two-factor authentication and session management',
        },
        {
            icon: <FaGlobe />,
            title: 'Localization',
            description: 'Language and timezone settings',
        },
    ];

    return (
        <div className="adminDash-layout">
            <AdminNavbar />
            <div className="adminDash-main">
                <AdminUpperNav />
                <div className="admin-profile-content">
                    <div className="settings-container">
                        <h1 className="settings-title">Settings</h1>
                        <p className="settings-subtitle">Manage your admin preferences</p>

                        <div className="settings-grid">
                            {settingsOptions.map((option, index) => (
                                <motion.div 
                                    key={index}
                                    className="settings-card"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="settings-icon">
                                        {option.icon}
                                    </div>
                                    <div className="settings-text">
                                        <h3>{option.title}</h3>
                                        <p>{option.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="settings-footer">
                            <p>More settings coming soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
