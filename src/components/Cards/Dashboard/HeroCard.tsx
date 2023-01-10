import React from 'react'
import { heroArrType } from '../../../type/MutualFundDashboard'

type prop = {
    item:heroArrType
}

export default function HeroCard({ item}: prop) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 ">
              <img src={item.img} alt="loading..." className="h-24 w-44 rounded-md object-cover" />
              <h1 className="text-xl font-bold w-full text-center">{item.title}</h1>
              <p className="text-sm font-thin text-gray-900 w-full text-center">{item.description} </p>
              <button className="rounded-md bg-textTheme bg-opacity-70 w-full py-4 text-white uppercase font-bold">{item.button}</button>
            </div>
  )
}
