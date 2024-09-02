import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6 aos-init aos-animate' data-aos="fade-up">
        <HeroSection />
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials />
        <Footer/>
      </div>

    </>
  )
}

export default App
