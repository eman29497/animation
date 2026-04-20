"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const AnimationPage = () => {
  const {animations} = useSelector((state:RootState)=>state.content);
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = { duration: 1000, easing: 'ease-out', fill: 'forwards' as FillMode };
    if (section1.current) section1.current.animate([{ opacity: 0, x: -50 }, { opacity: 1, x: 0 }], options);
    if (section2.current) section2.current.animate([{ opacity: 0, x: 50 }, { opacity: 1, x: 0 }], { ...options, delay: 300 });
  }, []);
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-20">Animation Gallery</h1>
      <div className="max-w-5xl mx-auto space-y-32">
        <div ref={section1} className="flex flex-col md:flex-row items-center justify-between gap-10 opacity-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{animations[0].title}</h2>
            <p className="text-slate-500">{animations[0].desc}</p>
          </div>
          <div className="w-64 h-64 bg-purple-100 rounded-2xl flex items-center justify-center shadow-inner">
             <div className="h-20 w-20 bg-purple-600 rounded-lg animate-pulse"></div>
          </div>
        </div>
        <div ref={section2} className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 opacity-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{animations[1].title}</h2>
            <p className="text-slate-500">{animations[1].desc}</p>
          </div>
          <div className="w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
             <div className="h-16 w-16 bg-purple-500 rounded-full shadow-lg" 
                  style={{ animation: 'float 3s ease-in-out infinite' }}>
             </div>
          </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default AnimationPage;