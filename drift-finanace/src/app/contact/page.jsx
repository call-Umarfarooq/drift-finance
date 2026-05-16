import ContactDirectly from '@/components/ContactDirectly'
import ContactForm from '@/components/ContactForm'
import ContactHero from '@/components/ContactHero'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import React from 'react'
import Founders from '@/components/Founders'

const ContactPage = () => {
    return (
        <main className="w-full min-h-screen bg-white font-inter">
            <TopBar />
            <ContactHero />
            <div className=' mt-[40px] md:mt-20'></div>
            <ContactForm />
            <div className=' mt-[40px] md:mt-20'></div>
            <ContactDirectly />
            <div className=' mt-[40px] md:mt-20'></div>
            <Founders />
            <div className=' mt-[40px] md:mt-20'></div>
            <Footer />
        </main>
    )
}

export default ContactPage