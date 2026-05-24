import React from 'react'
import TopBar from '@/components/TopBar'
import DSCRLoanHero from '@/components/DSCRLoanHero'
import DSCRLoanContent from '@/components/DSCRLoanContent'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "DSCR Loans",
  description: "Grow your real estate investment portfolio with DSCR loans from Drift Financial. Qualify based on property cash flow rather than personal income.",
};

const DSCRLoanPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <DSCRLoanHero />
      <DSCRLoanContent />
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>

       <CTA/>
      <Footer />
    </main>
  )
}

export default DSCRLoanPage
