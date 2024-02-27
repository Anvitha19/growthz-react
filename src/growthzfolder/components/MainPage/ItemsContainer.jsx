import React from 'react';
import { Services, Company, GetInTouch } from "./Menu";
import Item from './Item';
import Icon from '../../../assets/icon.png';


const ItemsContainer = () => {
  return (
    <div className='font-work'>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:px-8 px-5 pb-8">
        <img src={Icon} alt='footer' className='md:w-36 max-[876px]:w-[88px]'/>
        <div className='max-[876px]:grid grid-cols-2  lg:grid grid-cols-1 gap-6'>
        <Item Links={Services} title="Services" />
        <Item Links={Company} title="Company" />
        </div>
      <div>
        <h1 className='mb-4 text-[#1A1E21] md:text-3xl max-[876px]:text-lg font-semibold'>
            Meet Us
        </h1>
        <p className='md:text-xl max-[876px]:text-base font-normal mb-4'>Plot No. 16, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032</p>
        <Item Links={GetInTouch} title="Get In Touch"/>
      </div>
    </div>
    </div>
  )
}

export default ItemsContainer