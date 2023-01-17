import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function MonthlySIPCard() {
  const [isSip, setIsSip] = useState<boolean>(false);
  return (
    <>
      {isSip ? (
        <>
          <section className="w-full h-96 flex flex-col items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md overflow-hidden sticky top-20 ">
            <div className="w-full flex items-center justify-start gap-6 border-b border-b-gray-700">
              <span
                className="h-full p-2 center cursor-pointer"
                onClick={() => setIsSip(true)}
              >
                <h1 className="text-xl font-bold text-textTheme uppercase ">
                  monthly sip
                </h1>
              </span>
              <span
                className="h-full p-2 center cursor-pointer"
                onClick={() => setIsSip(false)}
              >
                <h1 className="text-xl font-bold text-gray-900 uppercase ">
                  one - time
                </h1>
              </span>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between ">
              <div className="w-full flex flex-col items-center justify-center">
                <span className="w-full flex items-center justify-between px-4 ">
                  <h1 className="text-lg font-normal text-gray-900  ">
                    SIP Amount{" "}
                  </h1>
                  <span className="center gap-4 bg-textTheme bg-opacity-10  rounded ">
                    <CurrencyRupeeIcon className="!text-textTheme" />
                    <input
                      type="number"
                      className="bg-transparent w-24 border-none focus:border-none !focus-none text-textTheme"
                    />
                  </span>
                </span>
                <span className="w-full flex items-center justify-between px-4">
                  <h1 className="text-lg font-normal text-gray-900  ">
                    SIP Amount{" "}
                  </h1>
                  <span className="center gap-4 bg-textTheme bg-opacity-10  rounded ">
                    <CalendarMonthIcon className="!text-textTheme" />
                    <input
                      type="date"
                      className="bg-transparent w-24 border-none focus:border-none !focus-none text-textTheme"
                    />
                  </span>
                </span>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-6">
                <h1 className="text-base font-normal text-center text-gray-600">
                  Next SIP Instalment on 16 of Feb{" "}
                </h1>
                <span className="w-full flex items-center justify-between px-4">
                  <button className="px-8 py-3 text-textTheme rounded-md uppercase">
                    add to cart{" "}
                  </button>
                  <button className="px-8 py-3 text-white bg-textTheme rounded-md  uppercase">
                    start sip{" "}
                  </button>
                </span>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="w-full h-96 flex flex-col items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md overflow-hidden sticky top-20 ">
            <div className="w-full flex items-center justify-start gap-6 border-b border-b-gray-700">
              <span
                className="h-full p-2 center cursor-pointer"
                onClick={() => setIsSip(true)}
              >
                <h1 className="text-xl font-bold text-textTheme uppercase ">
                  monthly sip
                </h1>
              </span>
              <span
                className="h-full p-2 center cursor-pointer"
                onClick={() => setIsSip(false)}
              >
                <h1 className="text-xl font-bold text-gray-900 uppercase ">
                  one - time
                </h1>
              </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full h-full">
              <span className="w-full flex items-center justify-between px-4 ">
                <h1 className="text-lg font-normal text-gray-900  ">
                  {" "}
                  Amount{" "}
                </h1>
                <span className="center gap-4 bg-textTheme bg-opacity-10  rounded ">
                  <CurrencyRupeeIcon className="!text-textTheme" />
                  <input
                    type="number"
                    className="bg-transparent w-24 border-none focus:border-none !focus-none text-textTheme"
                  />
                </span>
              </span>
              <span className="w-full flex items-center justify-between px-4">
                <button className="px-8 py-3 text-textTheme rounded-md font-bold uppercase">
                  add to cart{" "}
                </button>
                <button className="px-8 py-3 text-white bg-textTheme rounded-md font-bold  uppercase">
                  invest{" "}
                </button>
              </span>
            </div>
          </section>
        </>
      )}
    </>
  );
}
