import React, { useState } from "react";
import "../Styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { api } from "../api/api";
import { toast } from 'react-hot-toast';


const Signup = () => {
    const navigate = useNavigate();

    // 🔹 State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 🔹 handleSubmit will go here
    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { 
        name, 
        email, 
        password,
        signupKey: "pryvo-admin-secret-2026"
    };

    try {
        const res = await api.post(
            "/admin/signup",
            data
        );

        if (res.status === 201) {
            navigate("/admin/login");
            toast.success("Signup successful!");
        }
    } catch (error) {
        toast.error(error.response?.data?.message || error.message);
    }
};

    return (
        <div className="signup-container">
            <div className="signup-box">
                <img src="/Admin.jpg" alt="Admin" />

                <div className="signup-form">
                    <div className="logo">
                        <Link to="/"><span>𝑷𝒓𝒚𝒗𝒐</span></Link>
                    </div>

                    <h2>Admin Signup</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="signup-input-box">
                            <label>Name</label>
                            <input 
                                type="text" 
                                className="signup-input-field" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="signup-input-box">
                            <label>Email</label>
                            <input 
                                type="email" 
                                className="signup-input-field" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="signup-input-box">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="signup-input-field" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required 
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="signup-btn"
                            type="submit"
                        >
                            Signup
                        </motion.button>
                    </form>

                    <p className="signup-redirect-text">
                        Already an admin? <Link to="/admin/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;
