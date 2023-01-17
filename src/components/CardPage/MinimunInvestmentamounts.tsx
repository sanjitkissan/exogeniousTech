import React from 'react'
import { minimumInvestmentArr } from '../../utils/CardPage'
import AdvancedRatioCard from '../Cards/Cardpage/AdvancedRatioCard'

export const MinimunInvestmentamounts = () => {
  return (
    <section className="w-full flex flex-col items-start justify-start p-4 gap-10">
        <h1 className=" text-xl text-gray-900 font-bold">Minimum investment amounts</h1>
        <div className="w-full grid grid-cols-2 gap-6 ">
        {minimumInvestmentArr.map((item)=>(
        <AdvancedRatioCard curElm={item} key={item.id}/>
        ))}
        </div>
    </section>
  )
}
