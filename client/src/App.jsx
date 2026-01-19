import './App.css'
import Home from './Pages/Home.jsx'
import Security from './Legal_Pages/Security.jsx'
import Terms from './Legal_Pages/Terms.jsx'
import Privacy from './Legal_Pages/Privacy.jsx'
import Cookies from './Legal_Pages/Cookies.jsx'
import Dating_tips from './Resource_Pages/Dating_tips.jsx'
import FAQ from './Resource_Pages/Faq.jsx'
import Trust from './Resource_Pages/TrustNSafety.jsx'
import Contact from './Index_Pages/Contact.jsx'
import HowWorks from './Index_Pages/HowWorks.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'
import Charts from './Admin_Pages/Charts.jsx'
import Analytics from './Admin_Pages/Analytics.jsx'
import Login from './Registration_page/Login.jsx'
import Signup from './Registration_page/Signup.jsx'
import AdminLogout from './Registration_page/AdminLogout.jsx'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop";
import PublicLayout from "./Layout/PublicLayout.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import { Route, Routes } from 'react-router'

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const handleKey = (e) => {
      // Ctrl + Shift + A
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        navigate("/admin/login");
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [navigate]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Security' element={<Security />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/dating_tips' element={<Dating_tips />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/trust' element={<Trust />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/howItWork' element={<HowWorks />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />  
          <Route path='/admin/Chart' element={<Charts />} />
          <Route path='/admin/analytics' element={<Analytics />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


// https://dating-app-backend-19lb.onrender.com