import React from 'react'
import image from '../assets/img.png'
import Vector from '../assets/VectoR2.png'
import Vec from '../assets/Vec1.png'
import Header from './Header';
import CultureSection from './CultureSection';
import Menu from './Menu'
import Pattern from '../assets/Rectangle1.png'
import Footer from './Footer';
import Testimonial from './Testimonial'

const HeroSection = () => {
  const pattern = Pattern
  return (
    <div className='bg-[#6a1b1a] bg-auto bg-no-repeat  '
    style={{backgroundImage: `url(${pattern})`, backgroundSize: '40%'} } >
      
    <Header />
    <section className=" lg:p-[30px] px-2 ">
 <div className=" flex flex-col lg:flex-row items- lg:items-start">
        <div className=" relative pt-8 p-0 ">
          <h1 className=" bg-[#5B0017B2] text-white  relative w-[100%] lg:w-[800px] z-10 text-4xl lg:text-[100px] font-CotorisBold lg:leading-[130px]">
            Taste the authentic <br />
            Saudi cuisine
          </h1>
          <p className="mt-4 text-lg font-light text-white">
            Among the best Saudi chefs in the world, <br /> serving you something beyond flavor.
          </p>
          <button className="mt-6 px-6 py-3 w-[100%] lg:w-[20%] bg-transparent border border-[#C8A42D] text-[#C8A42D] font-medium rounded-md hover:bg-[#C8A42D] hover:text-white transition duration-300">
            Our Menu
          </button>
          

          
          <div className=" relative lg:top-16 top-7 ">
            <img src={Vec} alt="Decorative Circle" className="w-16 h-16 lg:w-20 lg:h-20 z-20" />
          </div>
        </div>

    
        <div className="lg:w-[30%] w-[100%] flex justify-center  lg:mt-0 mt-10  relative">
          <img 
            src={image}
            alt="Saudi Cuisine"
            className="rounded-lg shadow-lg relative lg:right-[160px] lg:max-w-[900px] max-w-[90%]  "
          />
        <img src={Vector} alt="Decorative Element" className="   lg:-top-8 lg:left-[85%] w-12 h-12 lg:w-16 lg:h-16 z-30  lg:-ml-[188px] lg:-mt-[30px] -ml-[23px] -mt-[23px] "  />

        </div>
      </div>
    </section>
    <CultureSection />
    <Testimonial />
    <Menu />
    <Footer />
    </div>
  );
};
export default HeroSection;
