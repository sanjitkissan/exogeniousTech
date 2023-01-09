import React from "react";
import "../.././index.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import FundCard from "../.././components/Cards/FundCard";
import { fundCardArr } from "../.././utils/MutualfundDashboard";
import { New_On_Mf } from "../.././assets/MutualfundDashBord";
export default function PopularFunds() {
  return (
    <section className="w-full main-container flex items-start justify-between gap-6 my-12">
      <div className="w-3/5 flex flex-col items-center justify-center gap-6">
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
          <FundCard item={item}/>
          ))}
        </div>
      </div>
      <div className="w-2/5">
            <div className="w-full h-80 flex flex-col items-center justify-center gap-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 ">
              <img src={New_On_Mf} alt="loading..." className="h-24 w-44 rounded-md object-cover" />
              <h1 className="text-xl font-bold w-full text-center">New to Mutual Funds ?</h1>
              <p className="text-sm font-thin text-gray-600 w-full text-center">Start exploring mutual funds to begin your investment journey </p>
              <button className="rounded-md bg-textTheme bg-opacity-70 w-full py-4 text-white uppercase font-bold">explore mutual funds</button>
            </div>
      </div>
    </section>
  );
}
