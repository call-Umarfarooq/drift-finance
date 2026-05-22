'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingEmailButton from '@/components/FloatingEmailButton';

export default function MortgageCalculatorPage() {
  // --- STATE DEFINITIONS ---
  const [propertyValue, setPropertyValue] = useState("300,000");
  const [downPayment, setDownPayment] = useState("20");
  const [downPaymentType, setDownPaymentType] = useState("percent"); // 'percent' | 'dollar'
  const [interestRate, setInterestRate] = useState("5");
  const [termValue, setTermValue] = useState("30");
  const [termType, setTermType] = useState("years"); // 'years' | 'months'
  const [paymentFrequency, setPaymentFrequency] = useState("12"); // '12' (Monthly) | '26' (Bi-Weekly) | '52' (Weekly)
  
  const [propertyTax, setPropertyTax] = useState("1");
  const [propertyTaxType, setPropertyTaxType] = useState("percent"); // 'percent' | 'dollar'
  const [insurance, setInsurance] = useState("0.15");
  const [insuranceType, setInsuranceType] = useState("percent"); // 'percent' | 'dollar'
  const [pmi, setPmi] = useState("0");
  const [pmiType, setPmiType] = useState("percent"); // 'percent' | 'dollar'
  const [hoaFees, setHoaFees] = useState("0");
  
  const [extraPayment, setExtraPayment] = useState("0");
  const [extraAnnual, setExtraAnnual] = useState("0");
  
  // UI states
  const [isExtraOpen, setIsExtraOpen] = useState(false);
  const [results, setResults] = useState(null);
  const [shareToast, setShareToast] = useState(false);
  const resultsRef = useRef(null);

  // --- HELPERS ---
  const parseNumber = (str) => {
    return parseFloat(String(str).replace(/,/g, '')) || 0;
  };

  const formatWithCommas = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const formatCurrency = (num) => {
    return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  // --- CALCULATORS ---
  const calcPayment = (principal, annualRate, totalPayments) => {
    if (annualRate === 0) return principal / totalPayments;
    const monthlyRate = annualRate / 100 / 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
  };

  const calcEffectiveRate = (principal, totalInterest, payments, freq) => {
    if (payments <= 0 || principal <= 0) return 0;
    const totalPaid = principal + totalInterest;
    const avgPayment = totalPaid / payments;
    
    let rate = 0.05 / freq;
    for (let i = 0; i < 100; i++) {
      const factor = Math.pow(1 + rate, payments);
      const f = principal * rate * factor / (factor - 1) - avgPayment;
      const df = principal * (factor * (factor - 1) - rate * payments * Math.pow(1 + rate, payments - 1) * (factor - 1) + rate * factor * payments * Math.pow(1 + rate, payments - 1)) / Math.pow(factor - 1, 2);
      if (Math.abs(df) < 0.0000001) break;
      rate = Math.max(0.0000001, rate - f / df);
    }
    return rate * freq * 100;
  };

  // Dynamic Down Payment & Loan Amount calculation
  const parsedPropertyValue = parseNumber(propertyValue);
  const parsedDownPaymentInput = parseNumber(downPayment);
  
  let computedDownPayment = 0;
  if (downPaymentType === 'percent') {
    computedDownPayment = parsedPropertyValue * (parsedDownPaymentInput / 100);
  } else {
    computedDownPayment = parsedDownPaymentInput;
  }
  const loanAmount = Math.max(0, parsedPropertyValue - computedDownPayment);

  // Trigger calculation engine
  const runCalculation = () => {
    const parsedInterestRate = parseFloat(interestRate) || 0;
    const parsedTermValue = parseFloat(termValue) || 30;
    const termMonths = termType === 'years' ? parsedTermValue * 12 : parsedTermValue;
    
    // Property costs
    const parsedPropertyTax = parseFloat(propertyTax) || 0;
    const parsedInsurance = parseFloat(insurance) || 0;
    const parsedPmi = parseFloat(pmi) || 0;
    const parsedHoaFees = parseNumber(hoaFees);
    
    // Calculate monthly equivalents for expenses
    const monthlyTax = propertyTaxType === 'percent' 
      ? parsedPropertyValue * (parsedPropertyTax / 100) / 12 
      : parsedPropertyTax / 12;
    const monthlyInsurance = insuranceType === 'percent'
      ? parsedPropertyValue * (parsedInsurance / 100) / 12
      : parsedInsurance / 12;
    const monthlyPMI = pmiType === 'percent'
      ? loanAmount * (parsedPmi / 100) / 12
      : parsedPmi / 12;
      
    // Extra payments
    const parsedExtraPayment = parseNumber(extraPayment);
    const parsedExtraAnnual = parseNumber(extraAnnual);
    
    // Payments per year based on frequency
    const freq = parseInt(paymentFrequency); // 12, 26, 52
    
    // Monthly P&I (standard baseline)
    const monthlyPI = calcPayment(loanAmount, parsedInterestRate, termMonths);
    
    // Period Payment based on frequency
    let periodPI = monthlyPI;
    if (freq === 26) {
      periodPI = (monthlyPI * 12) / 26;
    } else if (freq === 52) {
      periodPI = (monthlyPI * 12) / 52;
    }
    
    // Generate amortization schedule
    let balance = loanAmount;
    let totalInterest = 0;
    let totalTaxesInsurance = 0;
    let paymentNum = 0;
    const schedule = [];
    const currentDate = new Date();
    
    // Loop through payments
    const maxPayments = termMonths * 2 * (freq / 12);
    while (balance > 0.01 && paymentNum < maxPayments) {
      paymentNum++;
      const interestRatePerPeriod = parsedInterestRate / 100 / freq;
      const interest = balance * interestRatePerPeriod;
      let principal = periodPI - interest;
      
      let extra = parsedExtraPayment * (12 / freq); // distribute monthly extra per period
      // Annual extra is applied once a year (e.g. paymentNum % freq === 0)
      if (paymentNum % freq === 0) {
        extra += parsedExtraAnnual;
      }
      
      let actualPrincipal = principal;
      let actualExtra = extra;
      
      if (actualPrincipal + actualExtra > balance) {
        if (actualPrincipal > balance) {
          actualPrincipal = balance;
          actualExtra = 0;
        } else {
          actualExtra = balance - actualPrincipal;
        }
      }
      
      balance -= (actualPrincipal + actualExtra);
      if (balance < 0) balance = 0;
      
      totalInterest += interest;
      // Expense per period
      const taxPerPeriod = monthlyTax * (12 / freq);
      const insurancePerPeriod = monthlyInsurance * (12 / freq);
      const pmiPerPeriod = monthlyPMI * (12 / freq);
      const hoaPerPeriod = parsedHoaFees * (12 / freq);
      
      totalTaxesInsurance += taxPerPeriod + insurancePerPeriod + pmiPerPeriod + hoaPerPeriod;
      
      const paymentDate = new Date(currentDate);
      if (freq === 12) {
        paymentDate.setMonth(paymentDate.getMonth() + paymentNum);
      } else if (freq === 26) {
        paymentDate.setDate(paymentDate.getDate() + paymentNum * 14);
      } else if (freq === 52) {
        paymentDate.setDate(paymentDate.getDate() + paymentNum * 7);
      }
      
      schedule.push({
        num: paymentNum,
        date: paymentDate,
        payment: actualPrincipal + interest + actualExtra,
        principal: actualPrincipal,
        interest: interest,
        extra: actualExtra,
        balance: balance
      });
    }
    
    // Calculations for donut charts
    const totalPaid = totalInterest + loanAmount + totalTaxesInsurance;
    const interestPercent = totalPaid > 0 ? (totalInterest / totalPaid) * 100 : 0;
    const principalPercent = totalPaid > 0 ? (loanAmount / totalPaid) * 100 : 0;
    const taxesPercent = totalPaid > 0 ? (totalTaxesInsurance / totalPaid) * 100 : 0;
    
    // Savings vs no extra payments
    const noExtraTotalInterest = (monthlyPI * termMonths) - loanAmount;
    const interestSavings = noExtraTotalInterest - totalInterest;
    
    // Net effective rate
    const netEffRate = calcEffectiveRate(loanAmount, totalInterest, paymentNum, freq);
    
    // Set all results
    setResults({
      monthlyPI,
      periodPI,
      monthlyTax,
      monthlyInsurance,
      monthlyPMI,
      totalMonthly: periodPI + (parsedExtraPayment * (12 / freq)) + (monthlyTax * (12 / freq)) + (monthlyInsurance * (12 / freq)) + (monthlyPMI * (12 / freq)) + (parsedHoaFees * (12 / freq)),
      totalInterest,
      totalPrincipal: loanAmount,
      totalTaxesInsurance,
      interestPercent,
      principalPercent,
      taxesPercent,
      yearsPayoff: paymentNum / freq,
      interestSavings,
      netEffectiveRate: netEffRate,
      schedule
    });
  };

  // Run calculation on change of any inputs
  useEffect(() => {
    runCalculation();
  }, [
    propertyValue, downPayment, downPaymentType, interestRate, termValue, termType, paymentFrequency,
    propertyTax, propertyTaxType, insurance, insuranceType, pmi, pmiType, hoaFees, extraPayment, extraAnnual
  ]);

  // Input Formatting Handlers
  const handleCommaChange = (val, setter) => {
    let cleaned = val.replace(/[^\d.]/g, '');
    const parts = cleaned.split('.');
    if (parts[0]) {
      parts[0] = parts[0].replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    setter(parts.join('.'));
  };

  // Actions
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mortgage Calculator | Drift Financial',
        text: 'Calculate your monthly payments and see your complete amortization schedule with Drift Financial.',
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  const handleCSVExport = () => {
    if (!results || !results.schedule.length) return;
    
    const headers = ['#', 'Date', 'Payment', 'Principal', 'Interest', 'Extra', 'Balance'];
    const rows = results.schedule.map(r => [
      r.num,
      formatDate(r.date),
      r.payment.toFixed(2),
      r.principal.toFixed(2),
      r.interest.toFixed(2),
      r.extra.toFixed(2),
      r.balance.toFixed(2)
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers, ...rows].map(e => e.join(",")).join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "drift_financial_amortization_schedule.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper for Circular Donut progress offset
  const getStrokeOffset = (percent) => {
    const circumference = 251.2; // 2 * pi * 40
    return circumference - (percent / 100 * circumference);
  };

  const frequencyLabel = () => {
    if (paymentFrequency === "26") return "Bi-Weekly";
    if (paymentFrequency === "52") return "Weekly";
    return "Monthly";
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      {/* GLOBAL HEADER */}
      <Header darkMode={false} />

      {/* CALCULATOR MAIN CONTENT */}
      <main className="flex-1 flex justify-center py-10 lg:py-16 px-6 lg:px-10">
        <div className="w-full max-w-[1360px] flex flex-col gap-8 lg:gap-12">
          
          {/* Header Typography */}
          <div className="text-center flex flex-col gap-3 lg:gap-4 print:hidden">
            <span className="text-P2-Gold text-xs lg:text-lg font-bold uppercase tracking-wider">
              Fintech tools
            </span>
            <h1 className="text-P1-Navy text-3xl lg:text-6xl font-semibold font-inter capitalize leading-tight">
              Mortgage <span className="text-P2-Gold font-playfair italic">Calculator</span>
            </h1>
            <p className="text-neutral-600 text-xs lg:text-lg font-medium max-w-[650px] mx-auto leading-relaxed">
              Calculate your monthly payments, homeowner expenses, extra payoff savings, and view your complete amortization schedule in real-time.
            </p>
          </div>

          {/* PRINT ONLY HEADER */}
          <div className="hidden print:flex flex-col gap-2 border-b border-neutral-200 pb-4 mb-4">
            <img src="/asstes/logo.svg" alt="Drift Financial" className="h-12 w-auto object-contain self-start" />
            <h1 className="text-P1-Navy text-2xl font-bold">Mortgage Amortization Schedule</h1>
            <p className="text-neutral-600 text-xs">Generated via Drift Financial Mortgage Calculator tool.</p>
          </div>

          {/* Main Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Inputs (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col gap-6 print:hidden">
              
              {/* Card 1: Mortgage Details */}
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-P1-Navy text-lg lg:text-xl font-bold border-b border-neutral-100 pb-3 uppercase tracking-wider">
                  1. Mortgage Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Property Value */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Property Value</label>
                    <div className="flex items-center bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      <span className="pl-4 pr-1 text-P2-Gold font-bold text-base select-none">$</span>
                      <input 
                        type="text" 
                        value={propertyValue}
                        onChange={(e) => handleCommaChange(e.target.value, setPropertyValue)}
                        className="w-full h-full bg-transparent px-2 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Down Payment</label>
                    <div className="flex items-stretch bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      {downPaymentType === 'dollar' && <span className="pl-4 pr-1 flex items-center text-P2-Gold font-bold text-base select-none">$</span>}
                      <input 
                        type="text" 
                        value={downPayment}
                        onChange={(e) => handleCommaChange(e.target.value, setDownPayment)}
                        className="w-full h-full bg-transparent px-3 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                      <div className="flex border-l border-neutral-200">
                        <button 
                          onClick={() => setDownPaymentType('dollar')}
                          className={`px-3.5 h-full text-xs font-bold transition-all border-r border-neutral-200 cursor-pointer ${downPaymentType === 'dollar' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          $
                        </button>
                        <button 
                          onClick={() => setDownPaymentType('percent')}
                          className={`px-3.5 h-full text-xs font-bold transition-all cursor-pointer ${downPaymentType === 'percent' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          %
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mortgage Amount (Read Only) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold opacity-85">Mortgage Loan Amount</label>
                    <div className="flex items-center bg-neutral-100/60 rounded-xl overflow-hidden border border-neutral-200 h-12">
                      <span className="pl-4 pr-1 text-neutral-500 font-semibold text-base select-none">$</span>
                      <input 
                        type="text" 
                        value={formatWithCommas(Math.round(loanAmount))}
                        readOnly 
                        className="w-full h-full bg-transparent px-2 text-neutral-600 font-mono font-bold outline-none text-base cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Interest Rate</label>
                    <div className="flex items-stretch bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      <input 
                        type="text" 
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value.replace(/[^\d.]/g, ''))}
                        className="w-full h-full bg-transparent px-4 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                      <span className="px-4 bg-neutral-100 flex items-center text-neutral-500 font-bold border-l border-neutral-200 text-xs">%</span>
                    </div>
                  </div>

                  {/* Amortization Term */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Amortization Period</label>
                    <div className="flex items-stretch bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      <input 
                        type="number" 
                        value={termValue}
                        onChange={(e) => setTermValue(e.target.value)}
                        className="w-full h-full bg-transparent px-4 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                      <div className="flex border-l border-neutral-200">
                        <button 
                          onClick={() => setTermType('years')}
                          className={`px-3 h-full text-xs font-bold transition-all border-r border-neutral-200 cursor-pointer ${termType === 'years' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          Yr
                        </button>
                        <button 
                          onClick={() => setTermType('months')}
                          className={`px-3 h-full text-xs font-bold transition-all cursor-pointer ${termType === 'months' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          Mo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Payment Frequency */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Payment Frequency</label>
                    <select 
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value)}
                      className="w-full h-12 bg-neutral-50 rounded-xl px-4 text-P1-Navy text-sm font-semibold outline-none border border-neutral-200 focus:border-P2-Gold cursor-pointer"
                    >
                      <option value="12">Monthly</option>
                      <option value="26">Bi-Weekly</option>
                      <option value="52">Weekly</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Card 2: Homeowner Expenses */}
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-P1-Navy text-lg lg:text-xl font-bold border-b border-neutral-100 pb-3 uppercase tracking-wider">
                  2. Homeowner Expenses
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Property Taxes */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Property Taxes / Year</label>
                    <div className="flex items-stretch bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      {propertyTaxType === 'dollar' && <span className="pl-4 pr-1 flex items-center text-P2-Gold font-bold text-base select-none">$</span>}
                      <input 
                        type="text" 
                        value={propertyTax}
                        onChange={(e) => handleCommaChange(e.target.value, setPropertyTax)}
                        className="w-full h-full bg-transparent px-3 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                      <div className="flex border-l border-neutral-200">
                        <button 
                          onClick={() => setPropertyTaxType('dollar')}
                          className={`px-3.5 h-full text-xs font-bold transition-all border-r border-neutral-200 cursor-pointer ${propertyTaxType === 'dollar' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          $
                        </button>
                        <button 
                          onClick={() => setPropertyTaxType('percent')}
                          className={`px-3.5 h-full text-xs font-bold transition-all cursor-pointer ${propertyTaxType === 'percent' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          %
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Home Insurance */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Home Insurance / Year</label>
                    <div className="flex items-stretch bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      {insuranceType === 'dollar' && <span className="pl-4 pr-1 flex items-center text-P2-Gold font-bold text-base select-none">$</span>}
                      <input 
                        type="text" 
                        value={insurance}
                        onChange={(e) => handleCommaChange(e.target.value, setInsurance)}
                        className="w-full h-full bg-transparent px-3 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                      <div className="flex border-l border-neutral-200">
                        <button 
                          onClick={() => setInsuranceType('dollar')}
                          className={`px-3.5 h-full text-xs font-bold transition-all border-r border-neutral-200 cursor-pointer ${insuranceType === 'dollar' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          $
                        </button>
                        <button 
                          onClick={() => setInsuranceType('percent')}
                          className={`px-3.5 h-full text-xs font-bold transition-all cursor-pointer ${insuranceType === 'percent' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          %
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* PMI */}
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-1.5 text-P1-Navy text-xs lg:text-sm font-semibold">
                      PMI / Year
                      <span className="w-4.5 h-4.5 rounded-full bg-neutral-200 text-neutral-600 inline-flex items-center justify-center text-[10px] font-bold cursor-help select-none font-sans" title="Private Mortgage Insurance - typically required if down payment is less than 20%">?</span>
                    </label>
                    <div className="flex items-stretch bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      {pmiType === 'dollar' && <span className="pl-4 pr-1 flex items-center text-P2-Gold font-bold text-base select-none">$</span>}
                      <input 
                        type="text" 
                        value={pmi}
                        onChange={(e) => handleCommaChange(e.target.value, setPmi)}
                        className="w-full h-full bg-transparent px-3 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                      <div className="flex border-l border-neutral-200">
                        <button 
                          onClick={() => setPmiType('dollar')}
                          className={`px-3.5 h-full text-xs font-bold transition-all border-r border-neutral-200 cursor-pointer ${pmiType === 'dollar' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          $
                        </button>
                        <button 
                          onClick={() => setPmiType('percent')}
                          className={`px-3.5 h-full text-xs font-bold transition-all cursor-pointer ${pmiType === 'percent' ? 'bg-P2-Gold text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                        >
                          %
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* HOA Fees */}
                  <div className="flex flex-col gap-2">
                    <label className="text-P1-Navy text-xs lg:text-sm font-semibold">HOA Fees / Month</label>
                    <div className="flex items-center bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                      <span className="pl-4 pr-1 text-P2-Gold font-bold text-base select-none">$</span>
                      <input 
                        type="text" 
                        value={hoaFees}
                        onChange={(e) => handleCommaChange(e.target.value, setHoaFees)}
                        className="w-full h-full bg-transparent px-2 text-P1-Navy font-mono font-bold outline-none text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Collapsible Panel for Extra Payments */}
                <div className="flex flex-col border border-neutral-200 rounded-2xl overflow-hidden">
                  <button 
                    type="button"
                    onClick={() => setIsExtraOpen(!isExtraOpen)}
                    className="flex justify-between items-center px-5 py-4 bg-neutral-50 hover:bg-neutral-100/80 transition-colors text-left cursor-pointer"
                  >
                    <span className="text-P1-Navy text-xs lg:text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      ⚡ Add Extra Payments (Pay Off Faster)
                    </span>
                    <svg 
                      className={`w-5 h-5 text-P2-Gold transition-transform duration-300 ${isExtraOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`transition-all duration-500 ease-in-out ${isExtraOpen ? 'max-h-96 opacity-100 border-t border-neutral-200' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'}`}>
                    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white">
                      {/* Extra Monthly Payment */}
                      <div className="flex flex-col gap-2">
                        <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Extra Monthly Payment</label>
                        <div className="flex items-center bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                          <span className="pl-4 pr-1 text-P2-Gold font-bold text-base select-none">$</span>
                          <input 
                            type="text" 
                            value={extraPayment}
                            onChange={(e) => handleCommaChange(e.target.value, setExtraPayment)}
                            className="w-full h-full bg-transparent px-2 text-P1-Navy font-mono font-bold outline-none text-base"
                          />
                        </div>
                      </div>

                      {/* Extra Annual Payment */}
                      <div className="flex flex-col gap-2">
                        <label className="text-P1-Navy text-xs lg:text-sm font-semibold">Extra Annual Payment</label>
                        <div className="flex items-center bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 focus-within:border-P2-Gold focus-within:ring-2 focus-within:ring-P2-Gold/20 transition-all h-12">
                          <span className="pl-4 pr-1 text-P2-Gold font-bold text-base select-none">$</span>
                          <input 
                            type="text" 
                            value={extraAnnual}
                            onChange={(e) => handleCommaChange(e.target.value, setExtraAnnual)}
                            className="w-full h-full bg-transparent px-2 text-P1-Navy font-mono font-bold outline-none text-base"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculate Trigger Button */}
                <button 
                  type="button"
                  onClick={() => {
                    runCalculation();
                    resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full h-14 cursor-pointer bg-P1-Navy hover:bg-neutral-800 text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.99] hover:shadow-lg uppercase tracking-wider text-sm flex justify-center items-center gap-2 group"
                >
                  <span>Calculate Mortgage</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: Results, Charts & Tables (lg:col-span-6) */}
            <div ref={resultsRef} className="lg:col-span-6 flex flex-col gap-6 print:col-span-12">
              
              {results && (
                <>
                  {/* Card 3: Payments Summary */}
                  <div className="bg-white border border-neutral-200 rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-6 print:border-none print:p-0 print:shadow-none">
                    <h3 className="text-P1-Navy text-lg lg:text-xl font-bold border-b border-neutral-100 pb-3 uppercase tracking-wider flex justify-between items-center">
                      <span>📊 Payment Breakdown</span>
                      <span className="text-xs bg-P2-Gold/10 text-P2-Gold px-2.5 py-1 rounded-full font-bold uppercase select-none">{frequencyLabel()}</span>
                    </h3>

                    {/* Cost Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col text-center">
                        <span className="text-P1-Navy font-mono font-bold text-lg lg:text-xl truncate">{formatCurrency(results.periodPI)}</span>
                        <span className="text-[10px] lg:text-xs text-neutral-500 font-semibold uppercase tracking-wide mt-1">P&I Payment</span>
                      </div>
                      
                      <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col text-center">
                        <span className="text-P1-Navy font-mono font-bold text-lg lg:text-xl truncate">
                          {formatCurrency(parseNumber(extraPayment) * (12 / parseInt(paymentFrequency)))}
                        </span>
                        <span className="text-[10px] lg:text-xs text-neutral-500 font-semibold uppercase tracking-wide mt-1">Extra Payment</span>
                      </div>

                      <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col text-center">
                        <span className="text-P1-Navy font-mono font-bold text-lg lg:text-xl truncate">
                          {formatCurrency(results.monthlyTax * (12 / parseInt(paymentFrequency)))}
                        </span>
                        <span className="text-[10px] lg:text-xs text-neutral-500 font-semibold uppercase tracking-wide mt-1">Property Taxes</span>
                      </div>

                      <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col text-center">
                        <span className="text-P1-Navy font-mono font-bold text-lg lg:text-xl truncate">
                          {formatCurrency(results.monthlyInsurance * (12 / parseInt(paymentFrequency)))}
                        </span>
                        <span className="text-[10px] lg:text-xs text-neutral-500 font-semibold uppercase tracking-wide mt-1">Home Insurance</span>
                      </div>

                      <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col text-center">
                        <span className="text-P1-Navy font-mono font-bold text-lg lg:text-xl truncate">
                          {formatCurrency(results.monthlyPMI * (12 / parseInt(paymentFrequency)))}
                        </span>
                        <span className="text-[10px] lg:text-xs text-neutral-500 font-semibold uppercase tracking-wide mt-1">PMI Fee</span>
                      </div>

                      <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col text-center">
                        <span className="text-P1-Navy font-mono font-bold text-lg lg:text-xl truncate">
                          {formatCurrency(parseNumber(hoaFees) * (12 / parseInt(paymentFrequency)))}
                        </span>
                        <span className="text-[10px] lg:text-xs text-neutral-500 font-semibold uppercase tracking-wide mt-1">HOA Fees</span>
                      </div>
                    </div>

                    {/* Hero Total payment Container */}
                    <div className="bg-gradient-to-r from-P1-Navy to-neutral-900 text-white rounded-3xl p-6 lg:p-8 flex flex-col text-center shadow-inner relative overflow-hidden select-none">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                      <span className="text-P2-Gold font-semibold uppercase tracking-wider text-xs lg:text-sm">Total {frequencyLabel()} Payment</span>
                      <span className="font-mono font-black text-3xl lg:text-5xl mt-2 text-white">{formatCurrency(results.totalMonthly)}</span>
                    </div>

                    {/* Donut Progress Charts */}
                    <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-2 print:hidden">
                      {/* Interest Donut */}
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                          <svg viewBox="0 0 100 100" className="-rotate-90 w-full h-full">
                            <circle cx="50" cy="50" r="40" className="stroke-neutral-100 fill-none" strokeWidth="10" />
                            <circle 
                              cx="50" cy="50" r="40" 
                              className="stroke-amber-600 fill-none transition-all duration-700 ease-out" 
                              strokeWidth="10" 
                              strokeDasharray="251.2" 
                              strokeDashoffset={getStrokeOffset(results.interestPercent)}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-neutral-800">
                            {Math.round(results.interestPercent)}%
                          </div>
                        </div>
                        <span className="font-mono font-bold text-xs sm:text-sm text-P1-Navy leading-none truncate w-full">{formatCurrency(results.totalInterest)}</span>
                        <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wide leading-none">Interest</span>
                      </div>

                      {/* Principal Donut */}
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                          <svg viewBox="0 0 100 100" className="-rotate-90 w-full h-full">
                            <circle cx="50" cy="50" r="40" className="stroke-neutral-100 fill-none" strokeWidth="10" />
                            <circle 
                              cx="50" cy="50" r="40" 
                              className="stroke-P2-Gold fill-none transition-all duration-700 ease-out" 
                              strokeWidth="10" 
                              strokeDasharray="251.2" 
                              strokeDashoffset={getStrokeOffset(results.principalPercent)}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-neutral-800">
                            {Math.round(results.principalPercent)}%
                          </div>
                        </div>
                        <span className="font-mono font-bold text-xs sm:text-sm text-P1-Navy leading-none truncate w-full">{formatCurrency(results.totalPrincipal)}</span>
                        <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wide leading-none">Principal</span>
                      </div>

                      {/* Taxes & Fees Donut */}
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                          <svg viewBox="0 0 100 100" className="-rotate-90 w-full h-full">
                            <circle cx="50" cy="50" r="40" className="stroke-neutral-100 fill-none" strokeWidth="10" />
                            <circle 
                              cx="50" cy="50" r="40" 
                              className="stroke-rose-700 fill-none transition-all duration-700 ease-out" 
                              strokeWidth="10" 
                              strokeDasharray="251.2" 
                              strokeDashoffset={getStrokeOffset(results.taxesPercent)}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-neutral-800">
                            {Math.round(results.taxesPercent)}%
                          </div>
                        </div>
                        <span className="font-mono font-bold text-xs sm:text-sm text-P1-Navy leading-none truncate w-full">{formatCurrency(results.totalTaxesInsurance)}</span>
                        <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wide leading-none">Taxes & Fees</span>
                      </div>
                    </div>

                    {/* Secondary Advanced Indicators */}
                    <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-5 text-center mt-2">
                      <div className="flex flex-col">
                        <span className="font-mono font-bold text-sm lg:text-base text-P2-Gold">{results.yearsPayoff.toFixed(2)} yrs</span>
                        <span className="text-[9px] lg:text-[11px] text-neutral-500 font-semibold uppercase mt-0.5 leading-none">Time to Payoff</span>
                      </div>
                      <div className="flex flex-col border-x border-neutral-100">
                        <span className="font-mono font-bold text-sm lg:text-base text-emerald-600">{formatCurrency(results.interestSavings)}</span>
                        <span className="text-[9px] lg:text-[11px] text-neutral-500 font-semibold uppercase mt-0.5 leading-none">Interest Saved</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono font-bold text-sm lg:text-base text-P1-Navy">{results.netEffectiveRate.toFixed(2)}%</span>
                        <span className="text-[9px] lg:text-[11px] text-neutral-500 font-semibold uppercase mt-0.5 leading-none">Effective Rate</span>
                      </div>
                    </div>

                    {/* Print & Share actions */}
                    <div className="flex gap-4 border-t border-neutral-100 pt-5 print:hidden">
                      <button 
                        type="button"
                        onClick={handlePrint}
                        className="flex-1 h-11 border border-P1-Navy/25 hover:border-P1-Navy text-P1-Navy font-bold rounded-xl flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        PRINT SCHEDULE
                      </button>
                      <button 
                        type="button"
                        onClick={handleShare}
                        className="flex-1 h-11 border border-P1-Navy/25 hover:border-P1-Navy text-P1-Navy font-bold rounded-xl flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer active:scale-95 relative"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        SHARE PAGE

                        {/* Share link copied toast */}
                        {shareToast && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap animate-bounce font-inter">
                            Link copied to clipboard!
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card 4: Amortization Schedule Table */}
                  <div className="bg-white border border-neutral-200 rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-4 print:border-none print:p-0 print:shadow-none">
                    <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                      <h3 className="text-P1-Navy text-lg lg:text-xl font-bold uppercase tracking-wider">
                        Amortization Schedule
                      </h3>
                      <button 
                        type="button"
                        onClick={handleCSVExport}
                        className="px-4 py-2 bg-P1-Navy hover:bg-neutral-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer print:hidden active:scale-95"
                      >
                        EXPORT CSV
                      </button>
                    </div>

                    {/* Table Viewport wrapper */}
                    <div className="overflow-x-auto rounded-2xl border border-neutral-200 max-h-[350px] shadow-inner print:max-h-none print:border-none">
                      <table className="w-full text-left border-collapse text-xs lg:text-sm">
                        <thead className="bg-P1-Navy text-white sticky top-0 z-10 print:bg-neutral-100 print:text-neutral-950 print:relative">
                          <tr>
                            <th className="p-3 text-center font-bold font-inter uppercase text-[10px] w-12">#</th>
                            <th className="p-3 text-left font-bold font-inter uppercase text-[10px] w-20">Date</th>
                            <th className="p-3 text-right font-bold font-inter uppercase text-[10px]">Payment</th>
                            <th className="p-3 text-right font-bold font-inter uppercase text-[10px]">Principal</th>
                            <th className="p-3 text-right font-bold font-inter uppercase text-[10px]">Interest</th>
                            <th className="p-3 text-right font-bold font-inter uppercase text-[10px]">Extra</th>
                            <th className="p-3 text-right font-bold font-inter uppercase text-[10px]">Balance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white font-mono">
                          {results.schedule.map((row) => {
                            const isYearRow = row.num % parseInt(paymentFrequency) === 0;
                            return (
                              <tr 
                                key={row.num}
                                className={`hover:bg-neutral-50 transition-colors ${isYearRow ? 'bg-P2-Gold/5 font-semibold text-P1-Navy' : 'text-neutral-700'}`}
                              >
                                <td className="p-3 text-center border-r border-neutral-100 text-neutral-400 font-inter font-bold">{row.num}</td>
                                <td className="p-3 text-left font-inter font-medium whitespace-nowrap">{formatDate(row.date)}</td>
                                <td className="p-3 text-right font-bold">{formatCurrency(row.payment)}</td>
                                <td className="p-3 text-right text-emerald-700">{formatCurrency(row.principal)}</td>
                                <td className="p-3 text-right text-amber-800">{formatCurrency(row.interest)}</td>
                                <td className="p-3 text-right text-P2-Gold">{row.extra > 0 ? formatCurrency(row.extra) : '-'}</td>
                                <td className="p-3 text-right font-bold text-P1-Navy">{formatCurrency(row.balance)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

            </div>

          </div>

        </div>
      </main>

      {/* GLOBAL TOAST & FLOATING BUTTONS */}
      <FloatingEmailButton />

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
