'use client';
import { useRef,useEffect } from "react";
import {useSelector} from 'react-redux';
import { RootState } from "../redux/store";
export default function IllustrationPage () {
    const {illustrations} = useSelector((state:RootState)=>state.content);
    const illuRef1 = useRef <HTMLDivElement>(null);
    const illuRef2 = useRef <HTMLDivElement>(null);
    useEffect(()=>{
        if(illuRef1.current){
            illuRef1.current.animate(
                [
                    {opacity:1,transform:'scale(0.5) rotate(-5deg)'},
                    {opacity:1, transform:'scale(1) rotate(0deg)'}
                ],
                {duration:1000,
                    easing:'ease-out',
                    iterations:Infinity,
                    fill:'forwards'
                }
            );
        }
        if(illuRef2.current){
            illuRef2.current.animate(
                [
                    {opacity:1,transform:'scale(0.5) rotate(5deg)'},
                    {opacity:1, transform:'scale(1) rotate(0deg)'}
                ],
                {duration:1000,
                    delay:300,
                    easing:'ease-out',
                    iterations:Infinity,
                    fill:'forwards'
                }
            );
        }
    })
    return(
        <div className="bg-white min-h-screen">
      <div className="justify-center items-center text-center pt-20 ">
        <h1 className="text-4xl text-black font-extrabold">Creative illustrations</h1>
        <p className="text-gray-700 text-2xl mt-4 max-w-2xl mx-auto">Visuals speak louder than words. Explore 
            our collection of modern illustrations that bring deigital concepts to life 
            with style and clarity
        </p>
</div>
<div className="flex flex-col items-center space-y-20 mt-16 max-w-4xl mx-auto px-6">
    <div 
    ref={illuRef1}
    className="flex flex-col items-center bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 w-full">
        <img 
        src='/image4.svg'
        alt={illustrations[0].title}
        className="h-64 md:h-80 object-contain mb-8"
        />
        <h3 className="text-2xl font-bold text-gray-700">{illustrations[0].title}</h3>
        <p className="text-gray-500 text-center max-w-md">
            {illustrations[0].desc}
        </p>
    </div>
    <div 
    ref={illuRef2}
    className="flex flex-col items-center bg-white  p-8 rounded-[2.5rem] shadow-sm border border-slate-100 w-full">
        <img
        src='/image5.svg'
        alt={illustrations[1].title}
        className="h-64 md:h-80 object-contain mb-8"
        />
        <h3 className="text-2xl font-bold text-gray-700 mb-3">{illustrations[1].title}</h3>
        <p className="text-gray-500 text-center max-w-md">
            {illustrations[1].desc}
        </p>

    </div>
</div>
      </div>
    )
}