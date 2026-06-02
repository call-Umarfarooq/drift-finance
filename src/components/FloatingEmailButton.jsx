'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
      <Link
        href="/contact?scroll=form"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-0 hover:gap-2.5 bg-P2-Gold text-white font-semibold rounded-full p-4 shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer border border-P2-Gold/30 hover:bg-P1-Navy hover:border-P2-Gold active:scale-95"
        aria-label="Contact Drift Financial"
      >
        {/* Golden pulsing ring around it */}
        <span className="absolute inset-0 rounded-full bg-P2-Gold/30 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300"></span>
        
        <div className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out font-inter text-sm tracking-wide">
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-white uppercase text-xs tracking-wider">
            Message Us
          </span>
        </div>
        
        {/* Message/chat icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 text-white"
        >
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223 6.75 6.75 0 003-.13z" clipRule="evenodd" />
        </svg>
      </Link>

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
