import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaTimes } from "react-icons/fa"
import '../Styles/navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      <div className="nav-link desktop">
        <Link to="/howItWork">How it works</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/labs">Labs</Link>
      </div>

      <div className="logo">
        <Link to="/"><span>𝑷𝒓𝒚𝒗𝒐</span></Link>
      </div>

      <div className="nav-link desktop">
        <Link to="/newsletter">NewsLetter</Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link onClick={() => setMenuOpen(false)} to="/howItWork">How it works</Link>
          <Link onClick={() => setMenuOpen(false)} to="/impact">Impact</Link>
          <Link onClick={() => setMenuOpen(false)} to="/labs">Labs</Link>
          <Link onClick={() => setMenuOpen(false)} to="/newsletter">NewsLetter</Link>
        </div>
      )}

    </div>
  )
}

export default Navbar