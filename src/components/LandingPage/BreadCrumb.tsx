import { hero_img } from 'assets/MutualFundLandingPage'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BreadCrumb() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='w-full flex items-center justify-between my-12 h-[60vh]'>
      <div className='w-full  transition-all duration-500 ease-in-out' data-aos="fade-right" data-aos-duration="2000">
        <span className='w-full flex flex-col items-start justify-center gap-6'>
            <h1 className='text-4xl font-bold capitalize'>invest in <span className='text-blue-600'> mutual fund</span></h1>
            <p className='text-xl text-gray-600 font-medium w-3/5'>Trusted by <b> Millions</b> of Indians. Start investing today.</p>
            <button className='px-12 py-4 bg-BmTheme rounded-md text-white text-lg font-bold capitalize'>get started</button>
        </span>
      </div>
      <div className='w-full overflow-hidden transition-all duration-500 ease-in-out' data-aos="fade-left" data-aos-duration="2000">
        <img src={hero_img} alt="" className=''/>
      </div>
    </section>
  )
}
