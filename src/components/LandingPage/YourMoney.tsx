import { your_money_img } from 'assets/MutualFundLandingPage'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function YourMoney() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className='w-full flex flex-col items-start justify-center gap-6 my-12'>
      <h1 className='text-4xl font-bold w-full text-start underline'>Your money. Your choice.</h1>
      <div className='w-full flex items-center justify-between'>
        <div className='w-full flex items-center justify-start' data-aos="fade-right" data-aos-duration="1000">
            <img src={your_money_img} alt="" />
        </div>
        <div className='w-full flex flex-col items-start justify-center gap-6' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='text-7xl font-bold'>Zero<span className='text-3xl'> account charge</span></h1>
            <p className='text-lg font-normal '>You don't have to pay a single rupee for opening a mutual fund account or account maintenance</p>
            <button className='px-12 py-4 bg-BmTheme rounded-md text-white text-lg font-bold capitalize'>create account for free</button>
        </div>
      </div>
    </section>
  )
}
