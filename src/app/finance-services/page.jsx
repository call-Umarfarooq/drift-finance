import React from 'react'
import TopBar from '@/components/TopBar'
import FinanceServicesHero from '@/components/FinanceServicesHero'
import LogoTicker from '@/components/LogoTicker'
import ServicesCards from '@/components/ServicesCards'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FullSuiteCards from '@/components/FullSuiteCards'

export const metadata = {
  title: "Our Services",
  description: "Discover the full suite of financial and mortgage services offered by Drift Financial, tailored to support your personal and commercial property financing goals.",
};

const FinanceServicesPage = () => {
    return (
        <main className="w-full min-h-screen bg-white font-inter">
            <TopBar />
            <FinanceServicesHero />
            <div className='mt-[40px] md:mt-20'></div>
            <FullSuiteCards />
            <div className='mt-[40px] md:mt-20'></div>
            <Testimonials />
            <div className='mt-[40px] md:mt-20'></div>
            <CTA />
            <Footer />
        </main>
    )
}

export default FinanceServicesPage