import React from 'react'
import TopBar from '@/components/TopBar'
import FinanceEducationHero from '@/components/FinanceEducationHero'
import FeaturedGuides from '@/components/FeaturedGuides'
import MortgageGlossary from '@/components/MortgageGlossary'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

const FinanceEducationPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <FinanceEducationHero />
      <div className='mt-20'></div>
      <FeaturedGuides />
      <div className='mt-20'></div>
      <MortgageGlossary />
      <div className='mt-20'></div>
      <FAQ/>
      <div className='mt-20'></div>
      <CTA />
      <Footer />
    </main>
  )
}

export default FinanceEducationPage