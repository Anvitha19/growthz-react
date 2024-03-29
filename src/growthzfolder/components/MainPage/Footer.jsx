import React from 'react'
import Item from './Item';
import Icon from '../../../assets/icon.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Services = [
  { name: "SEO", link: "#" },
  { name: "SEM/PPC", link: "#" },
  { name: "Social ADS", link: "#" },
  { name: "SMM", link: "#" },
  { name: "Branding", link: "#" },
  { name: "Outbound", link: "#" },
];
const Company = [
  { name: "About Us", link: "#" },
  { name: "Contact", link: "#" },
  { name: "Carrers", link: "#" },
  { name: "Case Studies", link: "#" },
  { name: "Blogs", link: "#" },
];

const Icons = [
  { name: "logo-facebook", link: "https://www.facebook.com/syoftofficial/" },
  { name: "logo-twitter", link: "https://twitter.com/syoftofficial" },
  // { name: "logo-github", link: "https://anvitha19.github.io/growthz-react/" },
  { name: "logo-linkedin", link: "https://www.linkedin.com/company/syoft/" },
  { name: "logo-instagram", link: "https://www.instagram.com/syoftofficial/" },
];

const Footer = () => {
  return (
      <footer className="font-work w-full">
      <div className='mx-auto'>
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
        <h1 className='mb-4 text-[#1A1E21] md:text-3xl max-[876px]:text-lg font-semibold'>
            Get In Touch
        </h1>
        <ul className="list-none mb-0 md:text-2xl">
      <li>
        <a href="tel:+919030819534" className="text-decoration-none flex items-center hover:text-[#F3BE18]">
          <FaPhone className="mr-2" />
          +91 90308 19534
        </a>
      </li>
      <li>
        <a href="mailto:info@growthz.com" className="text-decoration-none flex items-center md:pt-4 hover:text-[#F3BE18]">
          <FaEnvelope className="mr-2" />
          info@growthz.com
        </a>
      </li>
    </ul>
      </div>
    </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
      text-center text-gray-400 text-sm pb-2 md:border-t-2 md:border-gray-600 pt-4 mx-8"
      >
       <ul className="list-unstyled flex space-x-4 mb-0 md:order-none max-[876px]:order-2 md:text-left">
      <li className="list-inline-item">
        <a href="/" className="text-decoration-none text-black font-normal hover:text-[#F3BE18] max-[876px]:ml-5">Terms And Conditions</a>
      </li>
      <li className="list-inline-item">
        <a href="/" className="text-decoration-none text-black font-normal hover:text-[#F3BE18] max-[876px]:mr-5">Privacy Policy</a>
      </li>
    </ul>
      <div className="font-work text-black md:text-right">
      {Icons.map((icon) => (
        <a href={icon.link}>
          <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-black text-gray-100 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#F3BE18]
        duration-300 "
        >
          <ion-icon name={icon.name}>
          </ion-icon>
        </span>
        </a>
      ))}
    </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer