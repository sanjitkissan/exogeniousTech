
import React from 'react'
import PopularFunds from './PopularFunds'
import Collection from './Collection'
import HeroCard from '../Cards/Dashboard/HeroCard'

import QuickAccess from './QuickAccess'
import "../.././index.css"
import { heroCardArr } from '../../utils/MutualfundDashboard'

export default function Dashboard() {
  
  return (
    <section className='main-container w-full flex items-start justify-between gap-6 my-12'>
      <div className='w-3/5 flex flex-col items-start justify-start gap-16'>
            <PopularFunds/>
            <Collection/>
            <QuickAccess/>
      </div>
      <div className="w-2/5 flex flex-col items-center justify-center gap-6">
        {heroCardArr.map((item)=>(
           <HeroCard item={item} key={item.id}/>
           ))}
      </div>
    </section>
  )
}
