'use client';
import React, { useState } from 'react';
import { triggerEmail } from '@/utils/emailHelper';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setStatusMsg('Please fill in both Name and Email.');
      return;
    }

    setStatus('loading');
    setStatusMsg('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sheetName: 'Sheet1',
          values: [formData.name, formData.email, formData.message]
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMsg('Thank you! Your inquiry has been submitted and saved directly to the Google Sheet.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(result.error || 'Failed to submit form data.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setStatusMsg('An unexpected network error occurred. Please try again.');
    }
  };

  return (
    <section className="w-full bg-neutral-100 flex justify-center pt-14 pb-16 lg:pt-20 lg:pb-24 px-6 lg:px-10">
      <div className="w-full max-w-[1360px] flex flex-col justify-between items-center lg:items-start gap-10 lg:gap-10">
        
        {/* Left Column - Contact Info */}
        <div className="w-full lg:max-w-[400px] flex flex-col justify-start items-center lg:items-start gap-6 lg:gap-9">
          <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start">
            <h2 className="text-P1-Navy text-2xl lg:text-5xl font-semibold font-inter text-center lg:text-left">Let us help you!</h2>
            <p className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6 text-center lg:text-left max-w-[280px] lg:max-w-none">
              Ready to start your mortgage journey with Drift Financial?<br/>
              Contact us today to schedule a consultation.
            </p>
          </div>
          
          <div className="flex flex-col justify-start items-center lg:items-start gap-3 lg:gap-4 w-full">
            <h3 className="text-P1-Navy text-xl font-bold font-inter leading-6 text-center lg:text-left">Contact Us:</h3>
            <div className="flex flex-col justify-start items-center lg:items-start gap-3 w-full">
              <a href="tel:888-338-5504" className="text-P1-Navy text-base font-normal font-inter leading-6 hover:opacity-80 transition-opacity text-center lg:text-left">
                888-338-5504
              </a>
              <a href="mailto:Drift@driftfinancial.com" onClick={triggerEmail} className="text-P1-Navy text-base font-normal font-inter leading-6 hover:opacity-80 transition-opacity text-center lg:text-left">
                Drift@driftfinancial.com
              </a>
              <address className="text-P1-Navy text-base font-normal font-inter leading-6 not-italic text-center lg:text-left">
                209 W Sixth St,<br/>Royal Oak MI, 48067
              </address>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1 lg:mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                <img src="/asstes/facebook.svg" alt="Facebook" className="w-4 h-4 brightness-0 invert" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                <img src="/asstes/linkdin.svg" alt="LinkedIn" className="w-4 h-4 brightness-0 invert" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                <img src="/asstes/x.svg" alt="X" className="w-3.5 h-3.5 brightness-0 invert" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:max-w-[712px] flex flex-col justify-start items-stretch gap-7 lg:gap-8 mt-2 lg:mt-0">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-8 w-full">
            <div className="w-full flex flex-col gap-2 lg:gap-3">
              <label className="text-P1-Navy text-xs lg:text-base font-normal font-inter leading-6">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-3 bg-transparent outline-none border-b border-P1-Navy/50 text-P1-Navy font-inter placeholder:text-neutral-400 focus:border-P2-Gold transition-colors text-sm lg:text-base disabled:opacity-50"
              />
            </div>
            
            <div className="w-full flex flex-col gap-2 lg:gap-3">
              <label className="text-P1-Navy text-xs lg:text-base font-normal font-inter leading-6">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-3 bg-transparent outline-none border-b border-P1-Navy/50 text-P1-Navy font-inter placeholder:text-neutral-400 focus:border-P2-Gold transition-colors text-sm lg:text-base disabled:opacity-50"
              />
            </div>
            
            <div className="w-full flex flex-col gap-2 lg:gap-3">
              <label className="text-P1-Navy text-xs lg:text-base font-normal font-inter leading-6">Message</label>
              <textarea 
                rows="1"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Type your message here.."
                className="w-full pb-3 bg-transparent outline-none border-b border-P1-Navy/50 text-P1-Navy font-inter placeholder:text-neutral-400 text-[10px] lg:text-base focus:border-P2-Gold transition-colors resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {/* Status Notifications */}
            {statusMsg && (
              <div className={`w-full p-4 rounded-xl text-xs lg:text-sm font-medium font-inter border transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                  : 'bg-rose-50 text-rose-800 border-rose-200'
              }`}>
                {status === 'success' ? '✅' : '❌'} {statusMsg}
              </div>
            )}
            
            <p className="text-neutral-500 text-[10px] lg:text-xs leading-relaxed opacity-85 text-center lg:text-left mt-2 max-w-[650px]">
              By submitting your information, you agree that Drift Financial may contact you by phone, email, and text message regarding mortgage products and services. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out of text messages.
            </p>

            <div className="w-full flex justify-center lg:justify-start mt-2">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-2 lg:px-8 lg:py-3 bg-P1-Navy rounded-full flex justify-center items-center gap-2 hover:bg-[#0b1421] transition-colors group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="text-white text-[10px] lg:text-base font-semibold font-inter leading-4 lg:leading-6">
                  {status === 'loading' ? 'Submitting...' : 'Submit'}
                </span>
                {status !== 'loading' && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
