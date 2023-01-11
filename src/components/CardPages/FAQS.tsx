import React,{useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Collapse } from "@mui/material";
import { faqArr } from '../.././utils/CardPage';
export default function FAQS() {

    const [isOpen, setIsOpen]=useState<any>(null)

    const handleClick = (i: any) => {
        if (isOpen === i) {
          setIsOpen(false);
          return;
        }
        setIsOpen(i);
      };

  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 p-4'>
      <div className='w-full '>
        <h1 className='text-2xl font-bold text-gray-900 w-full text-start Uppercase'>faq's</h1>
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-4 '>
        {faqArr.map((item,Index)=>(
        <span className='w-full flex flex-col items-start justify-center gap-1 border-b border-b-gray-300 py-2'
        onClick={() => handleClick(Index)}
        >
        <span className='w-full flex items-start justify-between'>
            <h1 className='text-lg font-semibold text-gray-700 tracking-wide '>{item.title}</h1>
            <KeyboardArrowDownIcon className={`${isOpen==Index && "rotate-180 !transition-all !duration-500 !ease-in-out"}`}/>
        </span>
        <Collapse
                  in={isOpen === Index}
                  timeout="auto"
                  unmountOnExit
                >
                   <p className="w-full text-sm font-semibold text-gray-500 text-start">{item.subTitle}</p> 
                </Collapse>
        </span>
        ))}
      </div>
    </section>
  )
}
