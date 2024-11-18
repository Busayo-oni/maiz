import React from 'react'
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import LinkedIn from '../assets/linked.png'


const Footer = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-14 bg-[#CC9D2F] pt-10 '>
        <img src={Logo} alt="web logo" />
        <div className='flex  gap-6 lg:gap-20 cursor-pointer  '>
            <p className='font-Inter text-[14px] text-[#5B0017] '>Home</p>
            <p className='font-Inter text-[14px] text-[#5B0017] '>About</p>
            <p className='font-Inter text-[14px] text-[#5B0017] '>Menu </p>
            <p className='font-Inter text-[14px] text-[#5B0017] '>Venue</p>
            <p className='font-Inter text-[14px] text-[#5B0017] '>Events </p>
            <p className='font-Inter pb-5 text-[14px] text-[#5B0017] '>Contact Us</p>
        </div>
        
    </div>
    <div className='bg-[#CC9D2F] flex flex-col items-center gap-4 lg:flex-row justify-between p-[20px_40px] border-t-[1px] border-[#243054] '>
            <p className='font-Poppins text-400 text-[#243054] text-[14px] '>© 2021 | All rights reserved.</p>
            <div className='flex gap-3  '>
                <img className='w-[50%] ' src={Facebook} alt="Facebook logo" />
                <img className='w-[50%] ' src={Twitter} alt="Twitter logo" />
                <img className='w-[50%] ' src={Instagram} alt="Instagram" />
                <img className='w-[50%] ' src={LinkedIn} alt="LinkedIn logo" />
            </div>
            <p className='font-Poppins text-400 text-[#243054] text-[14px] '>Designed BY MaRt, DeOracleEdge, Uyi, Iman</p>
        </div>

    </>
  )
}

export default Footer