import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { reviewArrType } from 'type/LandingPage';
type prop={
    item:reviewArrType
}
export default function ReviewCard({item}:prop) {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-6 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 h-96 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out' key={item.id}>
      <div className='w-full flex items-center justify-start gap-6'>
        <img src={item.img} alt="" className='h-16 w-16 rounded-full ' />
        <span className='w-full flex items-center justify-start gap-3'>
            <StarIcon className='!text-yellow-700'/>
            <StarIcon className='!text-yellow-700'/>
            <StarIcon className='!text-yellow-700'/>
            <StarIcon className='!text-yellow-700'/>
            <StarIcon className='!text-yellow-700'/>
        </span>
      </div>
      <p className='text-lg font-semibold tracking-wider'>
      {item.description}
      </p>
      <span className='w-full flex flex-col items-start justify-center gap-4'>
        <h1 className='text-xl font-bold capitalize'>{item.name}</h1>
        <p className='text-base font-medium text-gray-600 capitalize'>{item.designation}</p>
      </span>
    </section>
  )
}
