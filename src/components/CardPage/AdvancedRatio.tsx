import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import AdvancedRatioCard from "../Cards/Cardpage/AdvancedRatioCard";
import { advancedRatioArr } from "../../utils/CardPage";
export default function AdvancedRatio() {
  return (
    <section className="w-full flex flex-col items-start justify-start p-4 gap-10">
    <h1 className=" text-xl text-gray-900 font-bold">AdvancedRatio</h1>
    <div className="w-full grid grid-cols-2 gap-6 ">
        {advancedRatioArr.map((item)=>(
        <AdvancedRatioCard curElm={item} key={item.id}/>
        ))}
    </div>
    <span className=" flex items-center justify-start gap-2">
        <p className="text-base font-medium text-gray-600"> Understand terms</p>
        <ErrorIcon/>
      </span>
    </section>
  );
}
