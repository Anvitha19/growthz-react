import React from 'react'
import HeroFooter from "../../../assets/hero-footer.png"

const Maximize = () => {
  return (
    <div className='font-work w-full py-16'>
      <div className="bg-[#6E18F3] mx-auto">
        <div className='items-center text-center justify-center mx-auto w-[70%]'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 max-[876px]:text-[25px] leading-[34px]'>Maximize Your Digital Presence with Our Expertise</h2>
            <div className='pb-8'>
            <button className='bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET STARTED TODAY
            </button>
            </div>
        </div>
        <div className='w-[1500px]'>
        <img src={HeroFooter} alt="/" className='max-[1024px]:hidden -mt-[250px] -ml-[70px] '/>
        </div>
    </div>
    </div>
  )
}

export default Maximize
