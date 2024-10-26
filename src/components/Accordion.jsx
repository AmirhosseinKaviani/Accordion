/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Accordion = ({title,answer}) => {
    const [accordion, setAccordion] = useState(false)
    function accordionHandler (){
      setAccordion(!accordion)
    }
  return (
    <div>
      <button onClick={accordionHandler} className='flex justify-between w-full'>
      <span>{title}</span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordion && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordion && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div className={`transition-all ease-in-out duration-300 grid overflow-hidden text-slate-600 text-sm
         ${accordion ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
         <div>{answer}</div>
      </div>
    </div>
  )
}

export default Accordion
