import React from 'react';
// import Vector from '../assets/VectoR1.png'
import image from '../assets/img3.png'
import imag from '../assets/img4.png'
import Item from '../assets/tink.png'
import imagei from '../assets/img5.png'
import imageu from '../assets/img6.png'


const CultureSection = () => {
  const items = Item;
  return (
    <div className='bg-auto bg-no-repeat bg-[100%]'
    style={{backgroundImage: `url(${items})`}} >
  <section className=" text-white py-16 lg:px-10 px-3">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start  lg:space-x-16">
    
      <div className="lg:w-1/2 w-full">
        <img
          src={image}
          alt="culture"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      
      <div className="lg:w-">
        <h2 className="text-3xl lg:text-6xl font-CotorisBold leading-snug">
          A distinctive dining destination inspired by the culture.
        </h2>
        <p className="mt-4 text-lg lg:text-xl font-Poppins">
          Experience Al Balad old town of Jeddah vibes.
        </p>
       <div className='relative'> 
       <div className='bg-[#5B0017] border-2 border-[#CC9D2F] lg:w-[131px] h-[50px] relative top-3 -left-2  '>
        <button className="font-CotorisBold mt-6 px-6 py-3 w-full   bg-[#CC9D2F] border border-[#5B0017] text-[#5B0017] font-medium  hover:bg-[#5B0017] hover:text-white transition duration-300 relative -top-[29px] left-[2px] ">
          Our Venue 
        </button>
        </div>
        </div>
        <div className="mt-8 flex justify-between space-x-4 lg:justify-start">
      <img
        src={imag}
        alt="Venue 1"
        className="w-[100%] lg:w-[25%] object-cover rounded-md shadow-md"
      />
      <img
        src={imagei}
        alt="Venue 2"
        className="w-[100%] lg:w-[25%] object-cover rounded-md shadow-md"
      />
      <img
        src={imageu}
        alt="Venue 3"
        className="w-[100%] lg:w-[25%] object-cover rounded-md shadow-md  "
      />
    </div>
    <div className='border-[#CC9D2F] border-b-[3px] w-[70%] pt-10'></div>

      </div>
    </div>

   
    
  </section>
</div>

  )
}

export default CultureSection;
