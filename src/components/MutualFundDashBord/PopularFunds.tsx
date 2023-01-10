import React from "react";
import "../.././index.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import FundCard from "../Cards/Dashboard/FundCard";
import { fundCardArr } from "../.././utils/MutualfundDashboard";

export default function PopularFunds() {
  return (
    
      <section className="w-full flex flex-col items-center justify-center gap-6 ">
        <div className="w-full flex items-center justify-between ">
          <h1 className="text-2xl text-textTheme font-bold logoWarper capitalize">
            popular funds
          </h1>
          <button className="px-4 py-2 rounded-full bg-textTheme bg-opacity-20 text-textTheme text-lg font-semibold">
            <span className="center gap-2">
              <FilterListIcon className="logoWarper" />
              <h3 className="text-textTheme font-light uppercase ">
                screener
              </h3>
            </span>
          </button>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          {fundCardArr.map((item)=>(
          <FundCard item={item} key={item.id}/>
          ))}
        </div>
      </section>
      
  
  );
}
