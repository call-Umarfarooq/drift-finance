'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    lookingTo: '',
    message: '',
    agreeEmail: false,
    agreePhone: false,
    agreeText: false,
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !formData.name.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.lookingTo.trim()
    ) {
      setStatus('error');
      setStatusMsg('Please fill out all required fields.');
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
          sheetName: 'Sheet2',
          values: [
            formData.name,
            formData.lastName,
            formData.email,
            formData.phone,
            formData.lookingTo,
            formData.message,
            formData.agreeEmail ? 'Yes' : 'No',
            formData.agreePhone ? 'Yes' : 'No',
            formData.agreeText ? 'Yes' : 'No',
          ]
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent and recorded in the Google Sheet.');
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          lookingTo: '',
          message: '',
          agreeEmail: false,
          agreePhone: false,
          agreeText: false,
        });
      } else {
        setStatus('error');
        setStatusMsg(result.error || 'Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting Contact form:', error);
      setStatus('error');
      setStatusMsg('An unexpected network error occurred. Please try again.');
    }
  };

  return (
    <section className="w-full bg-white flex justify-center ">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Send a message
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[1100px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            We'll Respond <span className="text-P2-Gold font-playfair italic">Within</span> 24 Hours
          </div>
          <div className="text-neutral-600 text-[10px] lg:text-lg font-medium font-inter mt-1 lg:mt-2 max-w-[280px] lg:max-w-none">
            One of our principals personally replies — no hand-offs, no automated responses.
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full lg:max-w-[1360px] flex flex-col gap-7 lg:gap-10">
          
          {/* Row 1 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg disabled:opacity-50" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Last name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg disabled:opacity-50" 
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Email address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg disabled:opacity-50" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Phone number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg disabled:opacity-50" 
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">I'm looking to</label>
              <input 
                type="text" 
                name="lookingTo"
                value={formData.lookingTo}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                placeholder="Purchase a home...." 
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg placeholder:text-neutral-400 placeholder:text-[8px] lg:placeholder:text-base placeholder:font-light disabled:opacity-50" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Message (optional)</label>
              <input 
                type="text" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Share your situation, timeline, or any questions..." 
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg placeholder:text-neutral-400 placeholder:text-[8px] lg:placeholder:text-base placeholder:font-light disabled:opacity-50" 
              />
            </div>
          </div>

          {/* How can we reach you? Section */}
          <div className="w-full flex flex-col items-center lg:items-start gap-4 lg:gap-6 mt-4 lg:mt-8">
            <div className="text-center lg:text-left text-P1-Navy text-base lg:text-2xl font-bold lg:font-semibold font-inter uppercase">
              How can we reach you?
            </div>
            
            <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-center gap-3.5 lg:gap-10">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="agreeEmail"
                  checked={formData.agreeEmail}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy disabled:opacity-50" 
                />
                <span className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter group-hover:text-P2-Gold transition-colors">
                  I agree to receive emails from Drift Financial.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="agreePhone"
                  checked={formData.agreePhone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy disabled:opacity-50" 
                />
                <span className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter group-hover:text-P2-Gold transition-colors">
                  I agree to be contacted by phone call.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="agreeText"
                  checked={formData.agreeText}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy disabled:opacity-50" 
                />
                <span className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter group-hover:text-P2-Gold transition-colors">
                  I agree to receive text messages. Reply STOP to opt out.
                </span>
              </label>
            </div>
          </div>

          {/* Status Message */}
          {statusMsg && (
            <div className={`w-full p-4 rounded-xl text-xs lg:text-sm font-medium font-inter border transition-all duration-300 ${
              status === 'success' 
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}>
              {status === 'success' ? '✅' : '❌'} {statusMsg}
            </div>
          )}

          {/* Submit Button */}
          <div className="w-full flex justify-center mt-2">
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-8 lg:px-10 py-2.5 lg:py-3 cursor-pointer bg-P1-Navy rounded-full flex justify-center items-center gap-1.5 lg:gap-2 group transition hover:bg-[#0b1421] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-white text-[10px] lg:text-base font-semibold font-inter">
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </span>
              {status !== 'loading' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
