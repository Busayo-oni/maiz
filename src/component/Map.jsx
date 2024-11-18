import React from 'react'
import Item from '../assets/Rectangle1.png'
import Maps from '../assets/Map.png'


const Map = () => {
    const items = Item;
  return (
    <section className='flex flex-col justify-center lg:flex-row items-center  p-[6%] bg-[#243054]  my-10 bg-auto bg-no-repeat bg-[100%]' 
    style={{backgroundImage: `url(${items})`}} >
        <div className='bg-[#5B0017] p-20 w-[100%] lg:w-[35%] '>
            <b className='font-CotorisBold text-700 text-[18px] text-[#CC9D2F] '>Working Hours</b>
            <p className='font-Inter leading-8 text-400 text-[14px] text-[#fff] '>Sunday to Saturday <br /> 09:00 AM to 11:00 PM</p>
            <p className='font-Inter leading-8 text-400 text-[14px] text-[#fff] '>Friday <br /> 02:00 PM to 1:00 AM</p>

            <b className='font-CotorisBold text-700 text-[18px] text-[#CC9D2F] '>Location</b>
            <p className='font-Inter leading-6  text-400 text-[14px] text-[#fff] '>Street - 127, Jeddah, <br /> Saudi Arabia <br /> 546544</p>

            
            <b className='font-CotorisBold text-700 text-[18px] text-[#CC9D2F] '>Working Hours</b>
            <p className='font-Inter leading-7 text-400 text-[14px] text-[#fff] '>+123456789 <br />service@maizresturant.com</p>
        </div>
        <div>
            <img className='w-[100%] ' src={Maps} alt=""  />
        </div>
        
    </section>
  )
}


export default Map