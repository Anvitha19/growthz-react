import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="font-work py-2 pb-8" >
      <div className="border-b-4 border-solid border-[#f3be18]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex md:justify-between w-full"
      >
        <span className="md:text-4xl font-black leading-none hover:text-[#f3be18] max-[876px]:text-[25px]">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-[#f3be18] shrink-0 ml-8"
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
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:text-lg font-normal text-black pt-2 pb-4">{answer}</div>
      </div>
    </div>
    </div>
  )
}

export default Accordion