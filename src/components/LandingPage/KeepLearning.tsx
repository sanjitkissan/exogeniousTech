import LearningCard from '../.././components/Cards/LandingPage/LearningCard'
import React from 'react'
import { learnArr } from '../.././utils/LandingPage'
import EastIcon from '@mui/icons-material/East';
export default function KeepLearning() {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-12 my-12'>
      <h1 className='w-full text-3xl font-bold text-center'>Keep learning. Keep growing.</h1>
      <div className='w-full flex items-center justify-between gap-6 '>
        {
            learnArr.map((item)=>(
                <LearningCard item={item} />
            ))
        }

      </div>
      <span className='w-full center'>
        <a href="https://bullsmart.in/learn/" target={"_blank"} className="text-lg text-textTheme">
            View All Articles <EastIcon/>
        </a>
      </span>
    </section>
  )
}
