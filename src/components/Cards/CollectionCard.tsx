import React from 'react'
import { collectionArrayType } from '../.././type/MutualFundDashboard'

type prop ={
    item:collectionArrayType
}
export default function CollectionCard({item}: prop) {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-4 cursor-pointer'>
      <img src={item.img} alt="loading.." className='w-20 h-20 '/>
      <h1 className='text-gray-800 text-lg font-bold capitalize'>{item.title}</h1>
    </section>
  )
}
