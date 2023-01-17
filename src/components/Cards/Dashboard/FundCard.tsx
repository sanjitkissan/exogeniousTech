import React from "react";
import "../.././index.css";
import { fundCardType } from "../../../type/MutualFundDashboard";
type prop = {
  item: fundCardType;
};
export default function FundCard({ item }: prop) {
  return (
    <section className="w-full h-40 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-start justify-center gap-4 hover:scale-105 transition-all ease-in-out duration-500 overflow-hidden">
      <img
        src={item.logo}
        alt="loading"
        className="w-10 h-10 rounded-md  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
      />
      <h1 className="text-gray-900 font-semibold tracking-wide text-sm text-ellipsis">
        {item.title}
      </h1>
      <span className="center gap-2">
        <h2 className="text-sm font-semibold ">{item.growth}</h2>
        <h3 className="text-sm font-semibold text-gray-600">{item.year}</h3>
      </span>
    </section>
  );
}
