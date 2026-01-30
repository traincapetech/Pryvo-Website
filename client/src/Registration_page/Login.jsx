import React from 'react'
import { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { api } from "../api/api";
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    // 🔹 State for inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // 🔹 handleSubmit with API call
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(
                "/admin/login",
                { email, password }
            );
            if (res.data.success) {
                toast.success("Login successful!");
            }
            else {
                toast.error("Login failed. Please check your credentials.");
                return;
            }

            // Save JWT token
            localStorage.setItem("adminToken", res.data.token);

            // Redirect to dashboard
            navigate("/admin/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="/Admin.jpg" alt="Admin" />

                <div className="login-form">
                    <div className="logo">
                        <Link to="/"><span>𝑷𝒓𝒚𝒗𝒐</span></Link>
                    </div>

                    <h2>Admin Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="login-input-box">
                            <label>Email</label>
                            <input
                                type="email"
                                className="login-input-field"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="login-input-box">
                            <label>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="login-input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="login-btn"
                            type="submit"
                        >
                            Login
                        </motion.button>
                    </form>

                    <p className="login-redirect-text">
                        New admin?{" "}
                        <Link to="/admin/signup">Create account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
