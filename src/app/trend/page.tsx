"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const TrendPage = () => {
  const {trend} = useSelector((state:RootState)=>state.content);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const options = { duration: 800, easing: 'ease-out', fill: 'forwards' as FillMode };
    if (headerRef.current) headerRef.current.animate([{ opacity: 0, transform: 'translateY(-20px)' }, { opacity: 1, transform: 'translateY(0)' }], options);
    if (mainCardRef.current) mainCardRef.current.animate([{ opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }], { ...options, delay: 600 });
    if (card2Ref.current) card2Ref.current.animate([{ opacity: 0, x: 20 }, { opacity: 1, x: 0 }], { ...options, delay: 1000 });
    if (card3Ref.current) card3Ref.current.animate([{ opacity: 0, x: 20 }, { opacity: 1, x: 0 }], { ...options, delay: 1200 });
  }, []);
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <header ref={headerRef} className="text-center mb-16 opacity-0">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">{trend.title}</h1>
        <p className="text-gray-500 max-w-xl mx-auto">{trend.description}p</p>
      
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div ref={mainCardRef} className="md:col-span-2 bg-purple-50 rounded-3xl p-10 border border-purple-100 flex flex-col justify-center items-center opacity-0 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full h-64 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 flex items-center justify-center mb-6 shadow-inner">
            <span className="text-purple-600 font-medium italic">{trend.cards[0].name}</span>
          </div>
          <h2 className="text-2xl font-bold text-purple-800 mb-2">{trend.cards[0].name}</h2>
          <p className="text-purple-600/70 text-center">{trend.cards[0].detail}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div ref={card2Ref} className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 opacity-0 flex flex-col justify-center hover:bg-purple-50 transition-colors">
            <div className="h-10 w-10 bg-purple-200 rounded-full mb-4"></div>
            <h3 className="text-lg font-bold text-slate-800">{trend.cards[1].name}</h3>
            <p className="text-slate-500 text-sm">{trend.cards[1].detail}</p>
          </div>
          <div ref={card3Ref} className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 opacity-0 flex flex-col justify-center hover:bg-purple-50 transition-colors">
            <div className="h-10 w-10 bg-purple-200 rounded-full mb-4"></div>
            <h3 className="text-lg font-bold text-slate-800">{trend.cards[2].name}</h3>
            <p className="text-slate-500 text-sm">{trend.cards[2].detail}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrendPage;