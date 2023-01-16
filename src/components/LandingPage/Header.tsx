import { main_logo } from '../.././assets/MutualFundLandingPage'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {
  return (
    <section className='w-full bg-[#042567] center sticky top-0 z-50'>
    <div className='main-container w-full flex items-center justify-between h-20 '>
      <div className='w-full h-full flex items-center justify-start'>
        <img src={main_logo} alt="loading" className='w-44 h-auto' />
      </div>
      <div className='w-full h-full px-4 center relative'>
        <SearchIcon className='absolute left-5 top-7'/>
        <input 
        type="search "
        className='rounded-lg focus:border-none px-8 h-12 w-full'
        placeholder='What are you looking for today ?'
        />
      </div>
      <div className='w-full h-full flex items-center justify-end'>
        <button className='px-8 py-4 rounded-md text-[#042567] font-bold bg-white'>Login/Register</button>
      </div>
    </div>
    </section>
  )
}
