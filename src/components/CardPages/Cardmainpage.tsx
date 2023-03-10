import React from 'react'
import PerformanceDetails from './PerformanceDetails'

export default function Cardmainpage() {
  return (
    <section className='main-container w-full flex items-start justify-between'>
      <div className='w-3/5 flex flex-col items-start justify-start gap-12'>
        <PerformanceDetails/>
      </div>
      <div className='w-2/5 relative'></div>
    </section>
  )
}
