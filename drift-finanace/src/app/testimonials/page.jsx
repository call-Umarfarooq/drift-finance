import TestimonialsHero from '@/components/TestimonialsHero'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import ClientReviews from '@/components/ClientReviews'
import TopBar from '@/components/TopBar'
import React from 'react'
import LogoTicker from '@/components/LogoTicker'
import FAQ from '@/components/FAQ'
import Founders from '@/components/Founders'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const TestimonialsPage = () => {
    return (
        <main className="w-full min-h-screen bg-white font-inter">
            <TopBar />
            <TestimonialsHero />
            <TestimonialsGrid />
            <div className=''></div>
            <ClientReviews />
            <div className='mt-[40px] md:mt-20'></div>
            <LogoTicker />
            <div className='mt-[40px] md:mt-20 '></div>
            <Founders />
            <div className='mt-[40px] md:mt-20'></div>
            <CTA />
            <Footer />

        </main>
    )
}

export default TestimonialsPage