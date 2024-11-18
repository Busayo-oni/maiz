import React from 'react';
import Mask from '../assets/mask.png'
import Part from '../assets/grouper.svg'
import mandiChickendishImage from '../assets/Video.png'

const TestimonialSection = () => {
    return (
      <div className="w-full bg-[#5B0017] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-[#CC9D2F] overflow-hidden shadow-xl">
            
            <div className=" relative p-10 md:p-12 flex items-center">
              <div>
                <blockquote className="pb-10 font-Inter text-[#243054] text-lg md:text-xl mb-4">
                  "You can't go wrong with Chicken Mandi, I tried it twice. The chicken 
                  was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I 
                  would definitely recommend it."
                </blockquote>
                <div className="flex justify-between pb-4 -mb-4 border-b-[1px] border-b-[#00646D] ">
                  <div>
                  <b className="text-[14px] text-[#243054]">Khalid Al Dawsry</b>
                  <p className="text-[10px] text-[#243054]">Jeddah, Saudi</p>
                  </div>
                  <img className='pb-4 -mb-4 border-b-[3px] border-b-[#243054] ' src={Mask} alt="" />
                </div>
              </div>
              <img className='absolute -left-0 bottom-3 ' src={Part} alt="" />
            </div>
            
            
            <div className="relative h-[300px] md:h-[400px]">
              <img 
                src={mandiChickendishImage} 
                alt="Mandi chicken dish" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialSection;
