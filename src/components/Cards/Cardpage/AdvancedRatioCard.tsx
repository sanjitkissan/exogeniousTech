import React from 'react'
import { advancedRatioArrType } from '../../../type/CardPage'
type prop={
curElm:advancedRatioArrType
}
export default function AdvancedRatioCard({curElm}:prop) {
  return (
    
      
        <div className="w-full flex items-center justify-between">
            <h1 className="w-full text-lg font-bold text-gray-600 text-start">{curElm.title}</h1>
            <h1 className="w-full text-lg font-bold text-gray-900 text-end">{curElm.amount}</h1>
        </div>
   
     
  )
}
