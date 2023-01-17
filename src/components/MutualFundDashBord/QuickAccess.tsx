import QuickAccessCard from '../Cards/Dashboard/QuickAccessCard'
import React from 'react'
import { quickAccessArr } from '../.././utils/MutualfundDashboard'

export default function QuickAccess() {
  return (
    <section className='w-full flex flex-col items-start justify-start gap-10 '>
      <h1 className='text-2xl text-textTheme font-bold logoWarper capitalize'>quick access</h1>
      <div className='w-full flex items-center justify-between gap-6'>
        {quickAccessArr.map((item)=>(
            <QuickAccessCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
