import React from 'react'
import { quickAccessArrayType } from '../../../type/MutualFundDashboard'
type prop = {
    item:quickAccessArrayType
}
export default function QuickAccessCard({ item}: prop) {
  return (
    <section className='w-full flex flex-col items-start justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4 cursor-pointer'>
        <span>{item.icon}</span>
      <h1 className='text-lg font-bold text-gray-800 '>{item.title}</h1>
    </section>
  )
}
