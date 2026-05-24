import React from 'react'
import TopBar from '@/components/TopBar'
import NonQMLoanHero from '@/components/NonQMLoanHero'
import NonQMLoanContent from '@/components/NonQMLoanContent'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Non-QM Loans",
  description: "Explore non-qualified mortgage (Non-QM) loan solutions with Drift Financial, designed for self-employed individuals and unique financial situations.",
};

const NonQMLoanPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <NonQMLoanHero />
      <NonQMLoanContent />
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>

       <CTA/>
      <Footer />
    </main>
  )
}

export default NonQMLoanPage
