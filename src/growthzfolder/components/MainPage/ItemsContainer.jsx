import React from 'react';
import { Services, Company, GetInTouch } from "./Menu";
import Item from './Item';
import Icon from '../../../assets/icon.png';


const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 ml-24 pb-8">
        <img src={Icon} alt='footer' className='w-36'/>
      <Item Links={Services} title="Services" />
      <Item Links={Company} title="Company" />
      <div>
        <h1 className='mb-6 text-[#1A1E21] text-3xl font-semibold'>
            Meet Us
        </h1>
        <p className='text-xl mb-4'>Plot No. 16, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032</p>
        <Item Links={GetInTouch} title="Get In Touch" />
      </div>
    </div>
  )
}

export default ItemsContainer
