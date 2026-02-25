import React from 'react'
import Hero from '../Components/Hero'
import ProductCard from '../Components/ProductCard'
import ServicesCard from '../Components/ServicesCard.jsx'
import Works from '../Components/Works.jsx'
import Rate from '../Components/Rate.jsx'
import Faq from '../Components/Faq.jsx'
import About from '../Components/About.jsx'
import Auth from '../Components/Auth'
import FeaturesSection from '../Components/FeaturesSection'
import TrustSection from '../Components/TrustSection'
import FeaturesOverview from '../Components/FeaturesOverview'
import CTASection from '../Components/CTASection'
import SecuritySection from '../Components/SecuritySection'
import CoreValuesSection from '../Components/CoreValuesSection'
import MissionVision from '../Components/MissionVision'

function Home() {
  return (
     <>
        <Hero/>
        <ServicesCard/>
        <About/>
        <Rate/>
        <Works/>
        <FeaturesSection/>
        <TrustSection/>   
        <FeaturesOverview/>
        <CTASection/>
        <SecuritySection/>
        <CoreValuesSection/>
        <MissionVision/>
        <Auth/>
        <ProductCard/>
         <Faq/>
    </>
  )
}

export default Home