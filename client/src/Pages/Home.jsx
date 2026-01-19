import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { useStore } from '../store/store'
import { motion } from 'framer-motion'
import { FaCheckCircle } from "react-icons/fa";
import { BsFire } from "react-icons/bs";

const Home = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const word = "PRYVO";
  const [visibleLetters, setVisibleLetters] = useState(0);
  const { subscribe } = useStore();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault()
    subscribe(email)
    setEmail(" ")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev === word.length) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400); 
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);


  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-200 overflow-hidden">
        <div className="flex space-x-1">
          {word.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index < visibleLetters ? 1 : 0,
                y: index < visibleLetters ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
              className="text-5xl text-[#880000] font-semibold font-PTserif">
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="banner-container w-full h-screen">
        <motion.img initial={{ scale: 2 }} animate={{ scale: 1, transition: { duration: 2 } }} src="/banner.jpg" alt="banner-img" className='banner-img' />
        <div className="banner-text">
          <h3>Connections,</h3>
          <h4>That Feel Right.</h4>
        </div>
      </div>
      <div className="section">

        <div className="approach">
          <div
            className="approach-left">
            <span className='home-title'>The Magic Behind the Match</span>
            <span className='home-head'>Because the right match Changes everything.</span>
            <div className="approachImg">
              <img src="/couple.png" />
            </div>
          </div>

          <div
            className="approach-right">

            <div className="approach-right-upper">
              <p><b>
                Pryvo is built on a simple belief: everyone looking for love deserves to find it. That’s why Pryvo focuses on real connections, not endless swiping. With intelligent matchmaking designed to understand what truly matters, Pryvo helps you meet people who fit your vibe so you can move from chats to meaningful, promising dates.</b>
              </p>
              <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className='btn-mis' onClick={() => navigate('/howItWork')}><span className='btn-txt'>How we do it</span></motion.button>
            </div>

            <div className="approach-right-lower">
              <span className='home-title'>
                We're Match-Making Innovators
              </span>
              <br /><br />
              <p><b>
                Pryvo's expert team carefully studies dating behaviour, modern relationship patterns, and real compatibility factors to make your experience smoother and more meaningful. Over time, we've gotten really good at understanding what truly helps people connect.
              </b>
              </p>
            </div>
          </div>
        </div>

        <div className="single">
          <div
            // initial={{ opacity: 0, x: -100 }}
            //   whileInView={{ opacity: 1, x: 0 }}
            //   transition={{ duration: 1.5, ease: "easeOut" }}
            //   viewport={{ once: false, amount: 0.3 }}
            className="single-content">
            <span className='home-title'>Connect online and chat with singles</span>
            <p>
              Chat with singles who share your interests. Enjoy real conversations and build genuine connections anytime, anywhere.
            </p>
          </div>

          <div
            // initial={{ opacity: 0, x: 100 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.5, ease: "easeOut" }}
            // viewport={{ once: false, amount: 0.3 }}
            className="match-wrapper">

            {/* LEFT CARD */}
            <div className="match-card left">
              <img src="/single.jpg" alt="Olga" className="card-img" />

              <div className="badges">
                <BsFire className="fire" />
                <FaCheckCircle className="verify" />
              </div>

              <div className="info">
                <span>Olga, 30</span>
                <span className="online"></span>
              </div>

              <span className="emoji heart">
                <img src="/heart.png" alt="heart" />
              </span>
            </div>

            {/* RIGHT CARD */}
            <div className="match-card right">
              <img src="/single2.jpg" alt="Antony" className="card-img" />

              <div className="badges">
                <BsFire className="fire" />
                <FaCheckCircle className="verify" />
              </div>

              <div className="info">
                <span>Antony, 35</span>
                <span className="online"></span>
              </div>

              <span className="emoji wink">
                <img src="/smiley.png" alt="wink" />
              </span>
            </div>

          </div>

        </div>

        <div
          // initial={{ opacity: 0, y: 100 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1.5, ease: "easeOut" }}
          // viewport={{ once: false, amount: 0.3 }}
          className="customer-word-section">
          <h2
            // initial={{ opacity: 0, y: 100 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 1.5, ease: "easeOut" }}
            //   viewport={{ once: false, amount: 0.3 }}
            className='customer-section-title'>
            Read what our users say
          </h2>
          <div
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1.5, ease: "easeOut" }}
            // viewport={{ once: false, amount: 0.3 }}
            className="customer-card-list">
            <div className="customer-card">
              <div
                // initial={{ opacity: 0, x: -100 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1.5, ease: "easeOut" }}
                // viewport={{ once: false, amount: 0.3 }}
                className="user-word1">
                <div className="user-dtl">
                  <img src="/double.png" alt="doublequot" />
                  <p>Pryvo stands out as a genuinely safe and trustworthy platform where profile verification creates real confidence in every connection. The strong privacy controls make it easy to feel secure while interacting, and the absence of fake profiles or spam keeps conversations meaningful. The interface is clean and smooth, making interactions natural and respectful. Overall, Pryvo focuses on quality connections rather than just increasing matches, which makes the experience feel authentic and reliable.</p>
                  <div className="user-profile">
                    <img src="/profile2.jpg" alt="user1" />
                    <div className="user-name">
                      <span className='reviewName'>Alexander Thompson</span>
                      <span className='reviewDesig'>Product Designer, New York</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                // initial={{ opacity: 0, y: 100 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 1.5, ease: "easeOut" }}
                // viewport={{ once: false, amount: 0.3 }}
                className="user-word1">
                <div className="user-dtl">
                  <img src="/double.png" alt="doublequot" />
                  <p>Pryvo makes me feel comfortable and secure from the very beginning, which is something I truly value. The profile verification and strong privacy features give me confidence while interacting with others. Conversations feel respectful and genuine, without the usual spam or fake profiles. The platform is easy to use, clean, and thoughtfully designed. Most importantly, Pryvo focuses on meaningful connections, making the overall experience feel safe, authentic, and reassuring.</p>
                  <div className="user-profile">
                    <img src="/profile3.jpg" alt="user1" />
                    <div className="user-name">
                      <span className='reviewName'>Emily Carter</span>
                      <span className='reviewDesig'>Marketing Strategist, Toronto</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                // initial={{ opacity: 0, x: 100 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1.5, ease: "easeOut" }}
                // viewport={{ once: false, amount: 0.3 }}
                className="user-word1">
                <div className="user-dtl">
                  <img src="/double.png" alt="doublequot" />
                  <p>Using Pryvo feels refreshing because safety and privacy are clearly a priority. I appreciate how verified profiles create a sense of trust and reduce unwanted interactions. The platform encourages respectful conversations, which makes communication feel comfortable and genuine. The design is simple and smooth to navigate, without distractions. Pryvo doesn’t rush connections—instead, it supports meaningful interactions, making the experience feel calm, secure, and truly user-focused.</p>
                  <div className="user-profile">
                    <img src="/profile4.jpg" alt="user1" />
                    <div className="user-name">
                      <span className='reviewName'>Sophia Martinez</span>
                      <span className='reviewDesig'>UX Researcher, Barcelona</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div
          // initial={{ opacity: 0, y: 100 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 1.5, ease: "easeOut" }}
          //   viewport={{ once: false, amount: 0.3 }} 
          className="newsletter">
          <h1>𝑷𝒓𝒚𝒗𝒐</h1>
          <p>
            <span className='stay'>𝙎𝙩𝙖𝙮</span> Connected with Pryvo
          </p>
          <p>
            Get the latest updates, safety tips, feature announcements,
            and community news delivered straight to your inbox.
            No spam. Only what truly matters.

          </p>
          <form onSubmit={handleSubmit} className='newsletter-form'>
            <input type="email" className='newsletter-input' placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />


            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit" className='btn-mis'>Subscribe</motion.button>
          </form>
          <p>
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

      </div>
      
    </div>

  )
}

export default Home