import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // 50px scroll hone ke baad
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-link">
          <Link to='/howItWork'>How it works</Link>
          <Link to='/impact'>Impact</Link>
          <Link to='/labs'>Labs</Link>
        </div>
        <div className="logo">
          <Link to='/'><span>𝑷𝒓𝒚𝒗𝒐</span></Link>
        </div>
        <div className="nav-link">
          <Link to='/newsletter'>NewsLetter</Link>
          <Link to='/careers'>Career</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;