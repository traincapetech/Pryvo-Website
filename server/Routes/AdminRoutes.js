import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../Models/Admin.js";
const router = express.Router();

/* ================= SIGNUP ================= */
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Signup successful",
            success: true,
            admin
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.json({
            message: "Login successful",
            token,
            admin,
            success: true
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
});

router.get("/", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json({ success: true, admins });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});

export { router as adminRoutes };
