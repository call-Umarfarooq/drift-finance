import React from 'react'
import TopBar from '@/components/TopBar'
import FinanceEducationHero from '@/components/FinanceEducationHero'
import FeaturedGuides from '@/components/FeaturedGuides'
import MortgageGlossary from '@/components/MortgageGlossary'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: "Financial Education",
  description: "Enhance your financial knowledge with Drift Financial's curated guide library, mortgage glossary, FAQs, and expert articles designed to help you make informed decisions.",
};

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