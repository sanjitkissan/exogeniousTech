
import React from 'react'
import BreadCrumb from './BreadCrumb'
import Header from './Header'
import KeepLearning from './KeepLearning'
import Review from './Review'
import YourMoney from './YourMoney'

export default function MainPage() {
  return (
    <section className=' w-full flex flex-col items-start justify-start '>
      <Header/>
        <BreadCrumb/>
      <div className='w-full main-container flex flex-col items-start justify-start gap-6'>
        <YourMoney/>
        <KeepLearning/>
        <Review/>
      </div>
    </section>
  )
}
