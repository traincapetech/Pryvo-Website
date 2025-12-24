import React from 'react'
import './footer.css'
import { FaRegCopyright } from "react-icons/fa6"
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="left-side-footer">
                    <div className="logo">
                        <Link to='/home'><span>𝑷𝒓𝒚𝒗𝒐</span></Link>
                    </div>
                    <div className="copy">
                        <p className='copyright'>
                            <FaRegCopyright />
                            <div className="copyright-text">
                                <span>
                                    2025 pryvo pvt. ltd
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="right-side-footer">
                    <div className="index">
                        <h3 className='footer-title'>Index</h3>
                        <Link to='/howItWork'><span>How it works</span></Link>
                        <Link to='/careers'><span>Careers</span></Link>
                        <Link to='/labs'><span>Labs</span></Link>
                        <Link to='/newsletter'><span>NewsLetter</span></Link>
                        <Link to='/contact'><span>Contact</span></Link>
                    </div>
                    <div className="resource">
                        <h3 className='footer-title'>Resources</h3>
                        <Link to='/dating_tips' target="_blank"><span>Safe Dating Tips</span></Link>
                        <Link to='/faq'><span>FAQ</span></Link>
                        <Link to='/trust'><span>Trust & Safety</span></Link>
                    </div>
                    <div className="legal">
                        <h3 className='footer-title'>Legal</h3>
                        <Link to='/Security'><span>Security</span></Link>
                        <Link to='/terms'><span>Terms</span></Link>
                        <Link to='/privacy'><span>Privacy</span></Link>
                        <Link to='/cookies'><span>Cookie Policy</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer