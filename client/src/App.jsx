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

import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Routes>
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
      </Routes>
    </>
  )
}

export default App
