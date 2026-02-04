import React from "react";
import "../Styles/footer.css";
import { FaRegCopyright, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="footer">
        {/* LEFT SIDE */}
        <div className="left-side-footer">
          <div className="logo">
            <Link to="/home">
              <span className="burning-text">𝑷𝒓𝒚𝒗𝒐</span>
            </Link>
          </div>

          <p className="footer-tagline">Connecting hearts with safety & style ❤️</p>


          <div className="copyright">
            <FaRegCopyright />
            <span>2025 Pryvo Pvt. Ltd.</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side-footer">
          <div className="footer-column">
            <h3 className="footer-title">Index</h3>
            <Link to="/howItWork">How it works</Link>
            <Link to="/Impact">Impact</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/labs">Labs</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <Link to="/dating_tips">Safe Dating Tips</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/trust">Trust & Safety</Link>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Legal</h3>
            <Link to="/Security">Security</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
