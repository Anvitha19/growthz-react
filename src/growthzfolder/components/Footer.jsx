import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcons from './SocialIcons'
import { Icons } from "./Menu";

const Footer = () => {
  return (
      <footer className="">
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
