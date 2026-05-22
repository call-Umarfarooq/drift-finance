'use client';
import React, { useState } from 'react';

const CareersApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    about: '',
    agree: false
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
      !formData.position.trim() ||
      !formData.experience.trim() ||
      !formData.about.trim()
    ) {
      setStatus('error');
      setStatusMsg('Please fill out all fields.');
      return;
    }

    if (!formData.agree) {
      setStatus('error');
      setStatusMsg('Please agree to be contacted regarding this application.');
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
          sheetName: 'Sheet3',
          values: [
            formData.name,
            formData.lastName,
            formData.email,
            formData.phone,
            formData.position,
            formData.experience,
            formData.about,
            formData.agree ? 'Yes' : 'No'
          ]
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMsg('Thank you! Your application has been submitted and saved directly to the Google Sheet.');
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          about: '',
          agree: false
        });
      } else {
        setStatus('error');
        setStatusMsg(result.error || 'Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting Careers form:', error);
      setStatus('error');
      setStatusMsg('An unexpected network error occurred. Please try again.');
    }
  };

  return (
    <section className="w-full bg-white flex justify-center  ">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Apply now
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[1100px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            Fill Out The Form Below And We'll Be<br className="hidden lg:block"/>
            In Touch Within 3 <span className="text-P2-Gold font-playfair italic">Business</span> Days.
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full lg:max-w-[1360px] flex flex-col gap-7 lg:gap-10">
          
          {/* Row 1 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Name</label>
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
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Last name</label>
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
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Email address</label>
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
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Phone number</label>
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
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Position of interest</label>
              <input 
                type="text" 
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg disabled:opacity-50" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Years of mortgage experience</label>
              <input 
                type="text" 
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg disabled:opacity-50" 
              />
            </div>
          </div>

          {/* Row 4 (Full Width) */}
          <div className="w-full flex flex-col gap-0.5 lg:gap-2">
            <label className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Tell us about yourself</label>
            <textarea 
              rows="2"
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              placeholder="Share your background, what you're looking for, and why Drift Financial..."
              className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg placeholder:text-neutral-400 placeholder:text-[8px] lg:placeholder:text-base placeholder:font-light lg:placeholder:font-light resize-none placeholder:leading-6 lg:placeholder:leading-normal disabled:opacity-50"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-[6px] lg:gap-4 mt-2 lg:mt-2">
            <input 
              type="checkbox" 
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy disabled:opacity-50" 
            />
            <div className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter leading-3 lg:leading-normal">
              I agree to be contacted by Drift Financial via phone, text, or email regarding this application. View our <span className="underline">privacy policy</span>.
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
          <div className="w-full flex justify-center mt-2 lg:mt-4">
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-6 lg:px-8 py-2 lg:py-3 cursor-pointer bg-P1-Navy rounded-full flex justify-center items-center gap-1.5 lg:gap-2 group transition hover:bg-[#0b1421] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-white text-[10px] lg:text-base font-semibold font-inter">
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </span>
              {status !== 'loading' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
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

export default CareersApplyForm;
