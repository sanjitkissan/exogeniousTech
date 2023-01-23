import {  hero_img2 } from 'assets/MutualFundLandingPage'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function BreadCrumb() {

  
 
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='w-full bg-gradient-to-r from-blue-800 to-[#042567]'>
    <section className='w-full flex items-center justify-between py-12 h-[60vh] main-container'>
      <div className='w-full  transition-all duration-500 ease-in-out' data-aos="fade-right" data-aos-duration="2000">
        <span className='w-full flex flex-col items-start justify-center gap-6'>
            <h1 className='text-4xl font-bold capitalize text-white'>invest in <span className='text-textTheme'> mutual fund</span></h1>
            <p className='text-xl text-gray-200 font-medium w-3/5'>Trusted by <b> Millions</b> of Indians. Start investing today.</p>
          
            <button className='px-12 py-4 bg-BmTheme rounded-md text-white text-lg font-bold capitalize border border-textTheme !transition-all !duration-300 !ease-in-out hover:scale-95'
            >get started</button>
       
        </span>
      </div>
      <div className='w-full overflow-hidden transition-all duration-500 ease-in-out' data-aos="fade-left" data-aos-duration="2000">
        <img src={hero_img2} alt="" className=''/>
      </div>
    </section>
   
    </section>
  )
}
