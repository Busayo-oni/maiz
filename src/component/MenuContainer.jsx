import React from 'react'
import Header from './Header';
import Rectangle1 from '../assets/Rectangle1.png';
import rectangle from '../assets/rectangle.png'
import { MapContainer } from './MapContainer';

import { MenuGrid } from './MenuGrid';
import Footer from './Footer'
export const MenuContainer = () => {
  const pattern = Rectangle1
  return ( 
    <div className='bg-red-900 bg-auto bg-no-repeat  '
    style={{backgroundImage: `url(${pattern})`, backgroundSize: '40%'} } >

        <Header />
        <MenuGrid />
        <MapContainer />
        <Footer />
        </div>
  )
}
