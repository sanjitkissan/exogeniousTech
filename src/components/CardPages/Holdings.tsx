import React from 'react'
import { holdingsArr } from '../.././utils/CardPage'

export default function Holdings() {
  return (
    <section className='w-full main-container border border-gray-400 overflow-hidden rounded-md'>
      <table className='w-full'>
        <tr className='border-b border-b-gray-200'>
             <th className='w-1/2 text-start px-4 py-4'>Name</th>
             <th className='text-start px-4 py-4'>Sector</th>
             <th className='text-start px-4 py-4'>Instrument</th>
             <th className='text-start px-4 py-4'>Assets</th>
        </tr>
        {holdingsArr.map((item)=>(
        <tr className='border-b border-b-gray-200 ' key={item.id}>
            <td className='w-1/2 text-start px-4 capitalize cursor-pointer py-2 hover:text-textTheme !transition-all !duration-300 !ease-in-out '>{item.name}</td>
            <td className='text-start px-4 capitalize py-2'>{item.sector}</td>
            <td className='text-start px-4 capitalize py-2'>{item.Instrument}</td>
            <td className='text-start px-4 py-2'>{item.assets}</td>
        </tr>
        ))}
      </table>
    </section>
  )
}
