import React,{useEffect} from 'react'
import { learnArrType } from 'type/LandingPage'
import AOS from 'aos';
import 'aos/dist/aos.css';
type prop ={
    item:learnArrType
}

export default function LearningCard({ item}: prop) {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section className='w-full flex flex-col items-center justify-center gap-6 p-4 rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-80 cursor-pointer' key={item.id}  data-aos="fade-up" data-aos-duration="2000">
        <div className='w-full h-64 rounded-md overflow-hidden relative group'>
            <img src={item.img} alt=""className='h-full w-full' />
            <span className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 ease-in-out rounded-md'></span>
        </div>
        <h1 className='w-full text-xl font-bold text-center  '>{item.title}</h1>
    </section>
  )
}
