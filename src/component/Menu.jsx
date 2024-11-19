import React from 'react'
import Stared from '../assets/star.png'
import Stroke from '../assets/Stroke.png'
import saudiCuisineImage from '../assets/image 4 (1).png'

const MenuSection = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center text-white "
    style={{background: 'linear-gradient(180deg, rgba(91, 0, 23, 0) 0%, #5B0017 93.23%)', }}

    >
      
      <img 
         src={saudiCuisineImage}
        alt="Saudi cuisine"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      
      {/* <div className="absolute inset-0 bg-red-900/80"></div> */}
      
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 flex justify-center">
        <img src={Stared} alt="" />
        </div>
        <h2 className="font-CotorisBold text-3xl lg:text-6xl md:text-5xl mb-8 max-w-2xl mx-auto leading-tight">
          A unique menu that reflects the true essence of the Saudi cuisine
        </h2>
           <div className=' flex justify-center w-full items-end '> 
       <div className='bg-[#5B0017] border-2 border-[#CC9D2F] lg:w-[131px] w-full  h-[50px] relative top-3 -left-2  '>
        <button className="font-CotorisBold mt-6 px-6 py-3 w-full   bg-[#CC9D2F] border border-[#5B0017] text-[#5B0017] font-medium  hover:bg-[#5B0017] hover:text-white transition duration-300 relative -top-[29px] left-[2px] ">
          Our Menu 
        </button>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default MenuSection;