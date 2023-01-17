import ReviewCard from 'components/Cards/LandingPage/ReviewCard'
import React from 'react'
import { reviewArr } from 'utils/LandingPage'

export default function Review() {
  return (
    <section className='w-full flex flex-col items-start justify-center gap-12 my-12'>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
      <h1 className='text-4xl font-bold capitalize'>creating proud investors</h1>
      <p className='text-lg font-semibold text-gray-600'>You can feel the pride of being a BullSmart investors in their words </p>
        </div>
      <div className='w-full flex items-center justify-between gap-6'>
        {
            reviewArr.map((item)=>(
                <ReviewCard item={item}/>
            ))
        }
      </div>
    </section>
  )
}
