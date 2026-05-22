'use client';
import React, { useState, useEffect } from 'react';
import { triggerEmail } from '@/utils/emailHelper';

const FloatingEmailButton = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleToastEvent = () => {
      setShowToast(true);
      // Automatically fade out after 3 seconds
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3500);
      return () => clearTimeout(timer);
    };

    window.addEventListener('show-email-toast', handleToastEvent);
    return () => {
      window.removeEventListener('show-email-toast', handleToastEvent);
    };
  }, []);

  return (
    <>
      <a
        href="mailto:Drift@driftfinancial.com"
        onClick={triggerEmail}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-0 hover:gap-2.5 bg-P2-Gold text-white font-semibold rounded-full p-4 shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer border border-P2-Gold/30 hover:bg-P1-Navy hover:border-P2-Gold active:scale-95"
        aria-label="Email Drift Financial"
      >
        {/* Golden pulsing ring around it */}
        <span className="absolute inset-0 rounded-full bg-P2-Gold/30 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300"></span>
        
        <div className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-out font-inter text-sm tracking-wide">
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-white uppercase text-xs tracking-wider">
            Email Us
          </span>
        </div>
        
        {/* Beautiful envelope svg icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 text-white"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </a>

      {/* Highly premium corporate custom Toast notification */}
      <div 
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-P1-Navy border border-P2-Gold/40 text-white px-5 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 ease-out transform ${
          showToast 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-P2-Gold/20 flex justify-center items-center shrink-0 border border-P2-Gold/40 animate-pulse">
          <svg className="w-4 h-4 text-P2-Gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex flex-col font-inter">
          <span className="text-xs text-P2-Gold font-bold uppercase tracking-wider">Email Copied!</span>
          <span className="text-sm font-medium text-white/90">Drift@driftfinancial.com is copied to clipboard</span>
        </div>
      </div>
    </>
  );
};

export default FloatingEmailButton;
