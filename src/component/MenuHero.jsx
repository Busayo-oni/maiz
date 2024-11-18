import React from 'react'
import Line from '../assets/Line.png'

export const MenuHero = () => {
  return (
   <div className="py-[90px] ">
  {/* Section Header */}
  <div className="flex items-center  px-6 sm:px-10  lg:px-[10rem] py-[20px]">
    <h2 className="text-[#CC9D2F] font-Inter text-[14px] leading-loose">OUR MENU</h2>
    <div>
      <img src={Line} alt="line img" className="mt-2 ml-2" />
    </div>
  </div>

  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 lg:px-40 text-white leading-loose">
    {/* Title */}
    <h2 className="text-[36px] font-CotorisBold sm:text-[50px] lg:text-[70px] leading-tight text-center lg:text-left">
      Discover <br />
      Our Menu
    </h2>
    {/* Description */}
    <p className="font-Inter text-[#B8B8B8] text-[16px] sm:text-[18px] text-center lg:text-left">
      There is a wide selection of choices served by top <br className="hidden lg:block" />
      Saudi chefs, prepared using the best quality local <br className="hidden lg:block" />
      ingredients.
    </p>
  </div>
</div>

  )
}
