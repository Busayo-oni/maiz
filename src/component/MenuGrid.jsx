import React from 'react'
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import Image6 from '../assets/Image6.png';
import Image7 from '../assets/Image7.png';
import Image8 from '../assets/Image8.png';
import Image9 from '../assets/Image9.png';
import { MenuHero } from './MenuHero';

export const MenuGrid = () => {
  return (
   <div className='pb-[1rem] text-white'>
    <MenuHero />
    <div className="pb-[2rem] flex flex-col items-start justify-center gap-[2rem] px-[2rem] text-white sm:px-[3rem]  lg:px-[9rem]">
  {/* Categories Section */}
  <div className="flex flex-wrap gap-[1rem] sm:gap-[2rem] lg:gap-[4rem] text-[14px] justify-center ">
    <h2 className='font-Inter font-extrabold  '>All</h2>
    <h2 className="text-opacity-50 font-Inter font-light ">Feast</h2>
    <h2 className="text-opacity-50 font-Inter font-light ">Coffee</h2>
    <h2 className="text-opacity-50 font-Inter font-light ">Cocktails</h2>
    <h2 className="text-opacity-50 font-Inter font-light ">Dessert</h2>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9].map((image, index) => (
      <div key={index} className="flex flex-col items-center">
        <img src={image} alt={`img-${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
        <h2 className="bg-blue-900 w-full font-CotorisBold pl-7 p-4">{["Bukhari", "Saudi Mandi", "Zurbian", "Kabsa", "Madfoon", "Math Lootha", "Margoug", "Sayadiya", "Saleeg"][index]}</h2>
      </div>
    ))}
  </div>

  
</div>
{/* Button Section */}
  <div className=" text-center  ">
    <button className="border font-CotorisBold border-white px-6 py-3 text-[18px] hover:bg-white hover:text-blue-900 transition-colors">
      Show more
    </button>
  </div>
   </div>
  )
}
