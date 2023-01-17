import CollectionCard from '../Cards/Dashboard/CollectionCard'
import React from 'react'
import { collectionArr } from '../.././utils/MutualfundDashboard'

export default function Collection() {
  return (
    <section className='w-full flex flex-col items-start justify-start gap-10 '>
        <h1 className='text-2xl text-textTheme font-bold logoWarper capitalize'>collections</h1>
        <div className='w-full flex items-center justify-between gap-4'>
            {collectionArr.map((item)=>(
            <CollectionCard item={item} key={item.id}/>
            ))}
        </div>
    </section>
  )
}
