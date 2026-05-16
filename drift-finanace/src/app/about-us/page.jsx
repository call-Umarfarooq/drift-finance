import React from 'react'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import AboutUsHero from '@/components/AboutUsHero'
import OurStory from '@/components/OurStory'
import WhyChooseUs from '@/components/WhyChooseUs'
import Founders from '@/components/Founders'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import LogoTicker from '@/components/LogoTicker'
import ServicesCards from '@/components/ServicesCards'
import FAQ from '@/components/FAQ'

const AboutUsPage = () => {
    return (
        <main className="w-full min-h-screen bg-white font-inter">
            <TopBar />
            <AboutUsHero />
            <LogoTicker />
            <div className='mt-10 lg:mt-20'></div>
            <ServicesCards className="mt-0" />
            {/* ── Reused Sections ── */}
            <div className='mt-10 lg:mt-20'></div>
            <OurStory />
            <div className='mt-10 lg:mt-20'></div>
            <WhyChooseUs />
            <div className='mt-10 lg:mt-20'></div>
            <Testimonials />
            <div className='mt-10 lg:mt-20'></div>
            <Founders />
            <div className='mt-10 lg:mt-20'></div>
            <FAQ />
            <div className='mt-10 lg:mt-20'></div>
            <CTA />
            <Footer />

        </main>
    )
}

export default AboutUsPage