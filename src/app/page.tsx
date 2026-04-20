'use client';
import Link from "next/link";
import { useEffect,useRef } from "react";
export default function Home ()  {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
   const addContent = async ()=>{
    try{
      const res = await fetch ('/api/content',{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
          title:'Home Page Click',
          description:'User clicked this from Home Page ',
          type:'Trend',
        }),
      });
      if(res.ok) alert('Data Saved to MongoDB');
    }catch(error){
      console.error('Error saving:',error);
    }
  };
  useEffect(()=>{
    addContent();
  },[]);
  useEffect(()=>{  
    if(titleRef.current){
      titleRef.current.animate(
        [
          {opacity:0, transform:'translateY(50px)'},
          {opacity:1,transform:'translateY(0)'}
        ],
        {duration:1000,
          easing:'ease-out',
          fill:'forwards',
        }
      );
    }
    if(imageRef.current){
      imageRef.current.animate(
        [
          {opacity:0,transform:'scale(0.8)'},
          {opacity:1,transform:'scale(1)'},
        ],
        {
          duration:1200,                    
          easing:'ease-out',
          fill:'forwards',
          delay:300
        }
      );
         imageRef.current.animate(
      [
      {transform:'translateY(0)'},
      {transform:'translateY(-20px)'}
      ],
      {duration:2000,
        iterations:Infinity,
        direction:'alternate',
        easing:'ease-in-out'
      }
    );
    }
    if(card1Ref.current){
      card1Ref.current.animate(
      [
        {opacity:0,transform:'translateY(40px)'},
        {opacity:1,transform:'translateY(0)'}
      ],
      {
        duration:1000,
        easing:'ease-out',
        fill:'forwards',
        delay:500
      }
      );
      if(card2Ref.current){
        card2Ref.current.animate(
          [
            {opacity:0,transform:'translateY(40px)'},
            {opacity:1,transform:'translateT(0)'}
          ],
          {duration:2000,
            easing:'ease-out',
            fill:'forwards',
            delay:700
          }
        );
      }
      if(card3Ref.current){
        card3Ref.current.animate(
          [
            {opacity:0,transform:'translateY(40px)'},
            {opacity:1,transform:'translateY(0)'}
          ],
          {duration:3000,
            easing:'ease-out',
            fill:'forwards',
            delay:900
          }
        );
      }
    }
 
  },[]);
  return (
    <div className="flex flex-col min-h-screen bg-white items-center pt-20 px-4">
      <h1
      ref={titleRef}
       className="text-4xl md:text-6xl font-extrabold text-black text-center max-w-4xl leading-tight">
        Bringing Ideas to Life Through <span className="text-purple-600">Motion</span>
      </h1>
      <p className="text-gray-500 text-lg md:text-xl text-center mt-6 max-w-2xl">
        Experience the blend of latest UI trends and playful illustrations in one seamless journey.
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <Link href='/trend'>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all shadow-lg">
          Explore Trends
        </button>
        </Link>
        <Link href='/animation'>
        <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium px-8 py-3 rounded-full transition-all">
          See Animations
        </button>
        </Link>
      </div>
      <div className="mt-16 w-full max-w-3xl flex justify-center">
        <img 
        ref={imageRef}
          src="/image.svg" 
          alt="Creative Process" 
          className="w-full h-auto object-contain"
        />
      </div>
      <h2 className="text-3xl text-black font-bold">Explore Our Categories</h2>
      <div className="grid grid-cols-1 w-full px-4 mt-16 md:grid-cols-3 gap-6  max-w-6xl mx-auto">
<div 
 ref={card1Ref}
className="bg-white w-full max-w-3xl h-96 p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl flex flex-col transition-all duration-300 hover:-transalate-y-2">
  <div className="h-40 w-40 bg-purple-50 rounded-2xl mb-6 ">
    <img
    src='/image1.svg'
    className="max-h-full w-auto object contain"
    />
  </div>
  <h3 className="text-2xl font-bold mb-4">Latest Trends</h3>
  <p className="text-gray-500 text-center text-sm">
    Explore the newest UI design movements in the industry
</p>
</div>
<div
 ref={card2Ref}
 className="bg-white w-full max-w-3xl h-96 p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl flex flex-col transition-all duration-300 hover:transalate-y-2">
<div className="h-40 w-40 bg-purple-50 rounded-2xl mb-6 ">
  <img
  src='/image2.svg'
  />
</div>
<h3 className="text-2xl font-bold mb-4">Creative Illustration</h3>
<p className="text-gray-500 text-center text-sm">
Discover a world of unique vector art and 2D characters designed to give your projects a distinct personality 
</p>
</div>
<div
 ref={card3Ref}
 className="bg-white w-full max-w-3xl h-96 p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl flex flex-col transition-all duration-300 hover:transalate-y-2">
<div className="h-40 w-40 bg-purple-50 rounded-2xl mb-6 ">
  <img
  src='/image3.svg'
  />
</div>
<h3 className="text-2xl font-bold mb-4">Motion Animations</h3>
<p className="text-gray-500 text-center text-sm">
Bring your static designs to life with smooth, high-quality transitions and interactive motion effects
</p>
</div>

      </div>
      </div>


    



  );
}