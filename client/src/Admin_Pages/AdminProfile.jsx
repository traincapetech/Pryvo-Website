import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminUpperNav from '../Components/AdminUpperNav';
import { FaUserShield, FaEnvelope, FaCalendarAlt, FaKey, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { api } from '../api/api';
import '../Styles/AdminProfile.css';

const AdminProfile = () => {
    const [adminData, setAdminData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdminProfile = async () => {
            try {
                const res = await api.get('/admin/profile');
                setAdminData(res.data.admin || res.data);
            } catch (error) {
                console.error("Failed to fetch admin profile", error);
                // Fallback to local storage name if API fails
                const token = localStorage.getItem('adminToken');
                if (token) {
                    try {
                        const payloadBase64 = token.split('.')[1];
                        const payload = JSON.parse(atob(payloadBase64));
                        setAdminData({
                            name: payload.name || 'Admin',
                            email: payload.email || 'admin@pryvo.com',
                            role: payload.role || 'admin',
                            createdAt: payload.iat ? new Date(payload.iat * 1000).toLocaleDateString() : 'N/A'
                        });
                    } catch {
                        setAdminData({
                            name: 'Admin',
                            email: 'admin@pryvo.com',
                            role: 'admin',
                            createdAt: 'N/A'
                        });
                    }
                }
            } finally {
                setLoading(false);
            }
        };
        fetchAdminProfile();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    if (loading) {
        return (
            <div className="adminDash-layout">
                <AdminNavbar />
                <div className="adminDash-main">
                    <AdminUpperNav />
                    <div className="admin-profile-content flex items-center justify-center">
                        <p className="text-xl">Loading profile...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="adminDash-layout">
            <AdminNavbar />
            <div className="adminDash-main">
                <AdminUpperNav />
                <div className="admin-profile-content">
                    <motion.div 
                        className="profile-card"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Header with Gradient */}
                        <div className="profile-header">
                            <div className="avatar-ring">
                                <div className="avatar">
                                    {adminData?.name?.charAt(0).toUpperCase() || 'A'}
                                </div>
                            </div>
                        </div>

                        {/* Profile Details */}
                        <div className="profile-body">
                            <h1 className="profile-name">{adminData?.name || 'Admin'}</h1>
                            <span className="profile-badge">{adminData?.role || 'Admin'}</span>

                            <div className="profile-info-list">
                                <motion.div className="info-item" variants={itemVariants}>
                                    <div className="info-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Email</span>
                                        <span className="info-value">{adminData?.email || 'N/A'}</span>
                                    </div>
                                </motion.div>

                                <motion.div className="info-item" variants={itemVariants}>
                                    <div className="info-icon">
                                        <FaUserShield />
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Role</span>
                                        <span className="info-value capitalize">{adminData?.role || 'admin'}</span>
                                    </div>
                                </motion.div>

                                <motion.div className="info-item" variants={itemVariants}>
                                    <div className="info-icon">
                                        <FaCalendarAlt />
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Member Since</span>
                                        <span className="info-value">
                                            {adminData?.createdAt 
                                                ? new Date(adminData.createdAt).toLocaleDateString() 
                                                : 'N/A'}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="profile-actions">
                                <motion.button 
                                    className="action-btn primary"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <FaKey /> Change Password
                                </motion.button>
                                <Link to="/admin/logout">
                                    <motion.button 
                                        className="action-btn danger"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <FaSignOutAlt /> Logout
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
