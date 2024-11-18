import React from 'react'
import Item from '../assets/Rectangle1.png'
import map from '../assets/Map.png'

export const MapContainer = () => {
  const items = Item
  return (
    <div className="flex flex-col  lg:flex-row items-center justify-center gap-0 py-20 lg:mb-[-50px]bg-auto bg-no-repeat bg-[100%]" 
    style={{backgroundImage: `url(${items})`}} >
  {/* Information Section */}
  <div className="flex flex-col items-start justify-start text-white bg-[#243054] py-8 px-6 sm:px-10 lg:px-[50px] leading-relaxed text-[14px] w-full lg:w-auto">
    {/* Working Hours */}
    <div className="py-6">
      <h4 className="py-2 font-CotorisBold text-[#CC9D2F]">Working Hours</h4>
      <p className='font-Inter '>
        Sunday to Saturday:
        <br />
        09:00 AM to 11:00 PM
      </p>
      <p className='font-Inter '>
        Friday:
        <br />
        02:00 PM to 1:00 AM
      </p>
    </div>
    {/* Location */}
    <div className="py-4">
      <h4 className="py-2 font-CotorisBold text-[#CC9D2F]">Location</h4>
      <p className='font-Inter '>
        Street - 127, Jeddah,
        <br />
        Saudi Arabia
      </p>
      <p className='font-Inter '>545644</p>
    </div>
    {/* Contact Us */}
    <div className="py-4">
      <h4 className="py-2 font-CotorisBold text-[#CC9D2F]">Contact Us</h4>
      <p className='font-Inter '>Phone: +123456789</p>
      <p className='font-Inter '>Email: service@mailrestaurant.com</p>
    </div>
  </div>

  {/* Map Section */}
  <div className="w-full lg:w-auto">
    <img
      src={map}
      alt="Map"
      className="w-full h-auto object-cover "
    />
  </div>
</div>

  )
}
