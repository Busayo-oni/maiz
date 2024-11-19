import React from 'react'
import Footer from './Footer'
import Header from './HeaDers'
import Map from './Map'
import Pot from '../assets/Imag1.png'
import Door from '../assets/Imag2.png'
import Item from '../assets/Rectangle1.png'

const OurStory = () => {
    const items = Item;

  return (
    <div className='bg-auto bg-no-repeat '
    style={{backgroundImage: `url(${items})`, backgroundSize: '45%'}} >
    <Header />
    <section className='w-[100%] grid grid-cols-1 px-4 lg:p-10  gap-10 lg:grid-cols-2 '
     >
    <div className='w-[85%]'>
        <h1 className='font-CotorisBold lg:text-[70px] text-[40px] font-400 text-[#5B0017]  '>Our Story</h1>
        <p className='font-Inter lg:text-[18px] text-[14px] text-[#5B0017] '>We’re an absolute leader in the Saudi cuisine-themed restaurants. </p>
        <div className='flex gap-8 lg:py-20 pt-[14%] px-8 '>
        <img className='w-[50%] ' src={Pot} alt="mod pot image" />
        <img className='relative bottom-14 w-[50%] ' src={Door} alt="mod pot image" />
        </div>
    </div>
    <div className='py-10 w-[100%] '>
        <h2 className='font-CotorisBold text-center lg:text-left leading-[44.88px] lg:text-[30px] text-[25px] text-400 text-white '>One of the best resturants in Saudi Arabia.</h2>
        <p className='font-Inter lg:text-[21px] text-[14px] text-[#5B0017] '>Your one direction to high-quality Saudi feasts, since 1998 we served in Saudi Arabia. <br />Locals who are proud of the country and want to introduce it to visitors from around the world.   </p><br />
        <p className='font-Inter lg:text-[21px] text-[14px] text-[#5B0017] '>We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.</p>
    </div>
    </section>
    <section className='flex flex-col lg:flex-row items-center justify-center p-[10%] bg-[#5B0017] gap-10 mx-10 '>
        <div className='border-t border-[#FFFFFF26]  '>
            <h1 className='font-Poppins text-600 text-[29px] text-[#fff] pt-6 border-t-[5.61px] border-[#CC9D2F] inline-block '>1998</h1><br />
            <b className='font-PlayfairDisplay text-700 text-[18px] text-[#fff] '>Milestone One</b>
            <p className='font-Poppins text-400 text-[14px] text-[#CC9D2F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='border-t border-[#FFFFFF26] '>
            <h1 className='font-Poppins text-600 text-[29px] text-[#fff] pt-6 border-t-[5.61px] border-[#CC9D2F] inline-block  '>2005</h1><br />
            <b className='font-PlayfairDisplay text-700 text-[18px] text-[#fff] '>Milestone Twoe</b>
            <p className='font-Poppins text-400 text-[14px] text-[#CC9D2F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='border-t border-[#FFFFFF26] '>
            <h1 className='font-Poppins text-600 text-[29px] text-[#fff] pt-6 border-t-[5.61px] border-[#CC9D2F] inline-block  '>2012</h1><br />
            <b className='font-PlayfairDisplay text-700 text-[18px] text-[#fff] '>Milestone Three</b>
            <p className='font-Poppins text-400 text-[14px] text-[#CC9D2F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='border-t border-[#FFFFFF26] '>
            <h1 className='font-Poppins text-600 text-[29px] text-[#fff] pt-6 border-t-[5.61px] border-[#CC9D2F] inline-block  '>2021</h1><br />
            <b className='font-PlayfairDisplay text-700 text-[18px] text-[#fff] '>Milestone Four</b>
            <p className='font-Poppins text-400 text-[14px] text-[#CC9D2F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </section>
    <Map />
    <Footer />
    </div>
  )
}

export default OurStory
