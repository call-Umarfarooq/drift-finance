import React from 'react'
import TopBar from '@/components/TopBar'
import ConventionalLoanHero from '@/components/ConventionalLoanHero'
import ConventionalLoanContent from '@/components/ConventionalLoanContent'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Conventional Loans",
  description: "Explore conventional loan options with Drift Financial. Find stable rates, flexible terms, and professional guidance for your next home purchase or refinance.",
};

const ConventionalLoanPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <ConventionalLoanHero />
      <ConventionalLoanContent />
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>

       <CTA/>
      <Footer />
    </main>
  )
}

export default ConventionalLoanPage