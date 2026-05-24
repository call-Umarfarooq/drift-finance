import React from 'react'
import TopBar from '@/components/TopBar'
import HelocHero from '@/components/HelocHero'
import HelocContent from '@/components/HelocContent'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "HELOC (Home Equity Line of Credit)",
  description: "Unlock the equity in your home with a HELOC from Drift Financial. Access cash when you need it for renovations, debt consolidation, or other financial needs.",
};

const HelocPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <HelocHero />
      <HelocContent />
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>

       <CTA/>
      <Footer />
    </main>
  )
}

export default HelocPage
