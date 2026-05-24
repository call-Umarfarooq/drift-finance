import CareersApplyForm from '@/components/CareersApplyForm'
import CareersOpenPositions from '@/components/CareersOpenPositions'
import CareersWhyJoinUs from '@/components/CareersWhyJoinUs'
import CareersHero from '@/components/CareersHero'
import TopBar from '@/components/TopBar'
import React from 'react'
import Founders from '@/components/Founders'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Careers",
  description: "Join the team at Drift Financial. Explore our open positions, learn about our values, and build your career with a leading financial service provider.",
};

const CarearsPage = () => {
    return (
        <main className="w-full min-h-screen bg-white font-inter">
            <TopBar />
            <CareersHero />
            <div className='mt-[40px] md:mt-20'></div>
            <CareersWhyJoinUs />
            <div className='mt-[40px] md:mt-20'></div>
            <CareersOpenPositions />
            <div className='mt-[40px] md:mt-20'></div>
            <Founders />
            <div className='mt-[40px] md:mt-20'></div>
            <CareersApplyForm />
            <div className='mt-[40px] md:mt-20'></div>
            <CTA />
            <Footer />
        </main>
    )
}

export default CarearsPage