import React from 'react'
import TopBar from '@/components/TopBar'
import VALoanHero from '@/components/VALoanHero'
import VALoanContent from '@/components/VALoanContent'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "VA Loans",
  description: "Honoring those who serve. Explore low-rate, no down payment VA loan options from Drift Financial for veterans, active service members, and their families.",
};

const VALoanPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <VALoanHero />
      <VALoanContent />
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>

       <CTA/>
      <Footer />
    </main>
  )
}

export default VALoanPage
