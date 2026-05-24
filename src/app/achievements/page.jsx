import AchievementsRecognition from '@/components/AchievementsRecognition'
import AchievementsNumbers from '@/components/AchievementsNumbers'
import IndustryRecognition from '@/components/IndustryRecognition'
import AchievementsStats from '@/components/AchievementsStats'
import AchievementsHero from '@/components/AchievementsHero'
import TopBar from '@/components/TopBar'
import React from 'react'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Our Achievements",
  description: "Discover Drift Financial's milestones, industry recognition, and our proven track record of excellence in financial services.",
};

const AchievementsPage = () => {
    return (
        <main className="w-full min-h-screen bg-white font-inter">
            <TopBar />
            <AchievementsHero />
            <AchievementsStats />
            <div className='mt-10 lg:mt-20'></div>
            {/* <IndustryRecognition /> */}
            {/* <div className='mt-10 lg:mt-20'></div> */}
            <AchievementsNumbers />
            <div className='mt-10 lg:mt-20'></div>
            <AchievementsRecognition />
            <div className='mt-10 lg:mt-20'></div>
            <Testimonials />
            <div className='mt-10 lg:mt-20'></div>
            <CTA />
            <Footer />

        </main>

    )
}

export default AchievementsPage