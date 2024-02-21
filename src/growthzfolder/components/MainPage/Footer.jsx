import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcons from './SocialIcons'
import { Icons } from "./Menu";
import HeroFooter from "../../../assets/hero-footer.png"

const Footer = () => {
  return (
      <footer className="">
         <section className='pb-16 '>
      <div className="bg-[#6E18F3] w-full  z-50">
        <div className='w-9/12  items-center text-center justify-center ml-32'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 leading-none'>Maximize Your Digital Presence with Our Expertise</h2>
            <div className='pb-8'>
            <button className='font-sans bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET STARTED TODAY
            </button>
            </div>
        </div>
        <img src={HeroFooter} alt="/"/>
    </div>
    </section>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center text-gray-400 text-sm pb-2 border-t-2 border-gray-600 pt-4"
      >
        <span className='text-base font-normal hover:text-[#F3BE18]'>Terms and Conditions · Privacy Policy</span>
        <span></span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}

export default Footer
