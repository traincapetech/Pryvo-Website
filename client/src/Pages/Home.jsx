import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Route, Routes } from 'react-router'
import { useStore } from '../store/store'
// import { motion } from "motion/react"  

const Home = () => {
  const [email, setEmail] = useState("");
   const {
      subscribe,
    
    } = useStore();

  const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault()
subscribe(email)
setEmail(" ")
} 

useEffect(() => {
  
}, [])

  return (
    <div>
      <div className="banner-container">
        <Navbar />
        <img src="/banner.jpg" alt="banner-img" className='banner-img' />
        <div className="banner-text">
          <h3>Connections,</h3>
          <h4>That Feel Right.</h4>
        </div>
      </div>
      <div className="section">
        <div className="approach">
          <div className="approach-left">
            <span className='approach-name'>The Magic Behind the Match</span>
            <h2>Because the right match<br />Changes everything.</h2>
            <div className="approachImg">
              <img src="/couple.png" />
            </div>
          </div>
          {/* <div className="approach-middle">
            <img src="/Arrow.png" />
          </div> */}

          <div className="approach-descr">

            <div className="approach-descr-upper">
              <p><b>
                Pryvo is built on a simple belief: everyone looking for love deserves to find it. That’s why Pryvo focuses on real connections, not endless swiping. With intelligent matchmaking designed to understand what truly matters, Pryvo helps you meet people who fit your vibe so you can move from chats to meaningful, promising dates.</b>
              </p>
              <button className='btn-mis' onClick={() => navigate('/mission')}><span className='btn-txt'>How we do it</span></button>
            </div>

            <div className="labs-title">
              <span className='labs-name'>
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


        <div className="slider-container" style={{
          width: "100%", padding: "50px 0"
        }}>
          <div className="user-word">
            <h3>Whats Our Users say</h3>
            <br />
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            speed={800}>
            <SwiperSlide>
              <p className="testimonial-text">
                “I have used several dating apps in the past, but Pryvo completely transformed the way I approach online dating, the interface is intuitive, the matches are genuinely compatible with my preferences, and the conversations I’ve had feel natural and meaningful, which makes me feel confident and excited every time I log in. It’s refreshing to finally use an app that prioritizes authenticity and quality connections over just swiping endlessly, and I genuinely feel that Pryvo understands what users really want in today’s dating world.” <br /><br /><span>- James dervin</span>
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <p className="testimonial-text">
                “From the moment I started using Pryvo, I noticed a huge difference compared to other dating apps I’ve tried, the profiles are real, the algorithm actually seems to understand my interests, and the way the app encourages users to engage in meaningful conversations makes online dating feel less awkward and more fun. I’ve met some amazing people through Pryvo, and the experience has been so positive that I feel more hopeful about finding a genuine connection than ever before.” <br /><br /><span>- Alice garcia</span>
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <p className="testimonial-text">
                “Pryvo has completely changed my online dating experience because it combines smart technology with a human touch, providing matches that actually make sense while creating a safe and friendly environment to connect with people; the app’s design is sleek, the features are easy to use, and every interaction feels purposeful, which is something I never experienced on other dating platforms where it felt like just endless scrolling with no real outcome.” <br /><br /><span>- Lily Armer</span>
              </p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="works">
          <div className="work-disp">
            <div className="work-title">
              <span className='work-name'>Build with us, Grow with us</span><br /><br />
              <p><b>Shape a future where technology feels <br />personal, purposeful, and truly designed <br />for human connections.</b></p>
              <br />
              <button className='btn-mis' onClick={() => navigate('/career')}><span className='btn-txt'>Join us</span></button>
            </div>
          </div>
          <div className="work-img-list">
            <img src='/Office1.jpg' alt="Office1" className='ofc-work' />
            <img src='/office3.jpg' alt="Office3" className='ofc-work' />
            <img src='/office2.jpg' alt="Office2" className='ofc-work' />
          </div>
        </div>
        <div className="newsletter">
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
            <input type="email" className='newsletter-input' placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" className='newsletter-form-submit'>Subscribe</button>
          </form>
          <p>
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home