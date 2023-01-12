import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis,CartesianGrid,Legend,YAxis,Tooltip } from "recharts";
// import { performanceGraphArr } from '../.././utils/CardPage';
const performanceGraphArr = [
    {
        id:1,
        time:"1 m",
        amount:-3.23
    },
    {
        id:2,
        time:"6 m",
        amount:3.94
    },
    {
        id:3,
        time:"1 y",
        amount:-22.30
    },
    {
        id:4,
        time:"3 y",
        amount:32.24
    },
    {
        id:5,
        time:"5 y",
        amount:23.29
    },
    {
        id:6,
        time:"All",
        amount:22.11
    },
]
function PerformanceGraph() {
  return (
    <section className='w-full '>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={performanceGraphArr}>
            <CartesianGrid strokeDasharray="1 3" stroke="#2fcfaf"/>
            <XAxis dataKey="time" interval={"preserveStartEnd"} stroke="#2fcfaf" />
            <YAxis  dataKey="amount" stroke="#2fcfaf"/>
            <Legend/>
            <Tooltip/>
            <Line dataKey="amount" stroke="#2fcfaf" activeDot={{r:8}} type="monotone"/>
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}
export default PerformanceGraph ;
