import { icici_bank_logo } from 'assets/MutualfundDashBord/PopularFund'
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import PerformanceGraph from './PerformanceGraph';
export default function PerformanceDetails() {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-6'>
      <div className='w-full flex items-center justify-between  '>
        
        <img src={icici_bank_logo} alt="" className='w-10 h-10 rounded-md ' />

        <span className='center gap-6'>
        <BookmarkIcon className='!cursor-pointer'/>
        <ShareIcon className='!cursor-pointer'/>
        </span>
      </div>
      <h1 className='text-2xl text-gray-900 font-bold text-start w-full capitalize'>
      ICICI prudential technology direct plan growth
      </h1>
      <div className='w-full flex items-center justify-start gap-2'>
        <a href="">
        <span className=' rounded-full px-4 py-2 border border-gray-200 capitalize cursor-pointer'>equity</span>
        </a>
        <a href="">
        <span className=' rounded-full px-4 py-2 border border-gray-200 capitalize cursor-pointer'>sectoral / thematic</span>
        </a>
        <a href="">
        <span className=' rounded-full px-4 py-2 border border-gray-200 capitalize cursor-pointer'>very high risk</span>
        </a>
      </div>
      <PerformanceGraph/>
    </section>
  )
}
