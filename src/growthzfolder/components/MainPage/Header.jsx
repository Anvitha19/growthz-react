import React, { useState } from 'react';
import Logo from '../../../assets/logo-color.png';
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
    let [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleServicesDropdown = () => {
        setServicesOpen(!servicesOpen);
    };

    const Links = [
        { name: "About", link: "/AboutUs" },
        { name: "Services", link: "/", sublinks: [
            { name: "Search Engine Optimization", link: "/Services" },
            { name: "SEM / PPC", link: "/" },
            { name: "Social Media Marketing", link: "/" },
            { name: "Outbound Marketing", link: "/" },
            { name: "Social Media Ads", link: "/" },
            { name: "Branding", link: "/" }
        ]},
        { name: "Case Studies", link: "/" },
        { name: "Careers", link: "/" },
    ];

    return (
        <nav className='font-work w-full fixed top-0 left-0 bg-white z-50'>
            <div className='mx-10 md:flex  justify-between   py-4'>
                <a href='/' className="block">
                    <img src={Logo} alt="Logo" className='w-36 h-auto'></img>
                </a>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-10 text-xl md:my-0 my-7'>
                            {link.sublinks ? (
                                <div className="relative">
                                    <span className='text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer flex items-center' onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onClick={toggleServicesDropdown}>
                                        {link.name}
                                        <AiFillCaretDown />
                                    </span>
                                    {servicesOpen && (
                                        <ul className="absolute w-[300px] left-0 top-8 bg-white shadow-md py-2.5 px-4 rounded-md -ml-16" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onClick={toggleServicesDropdown}>
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex} className="text-black text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer py-2">
                                                    <a href={sublink.link}>{sublink.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a href={link.link} className='text-black text-lg font-bold hover:text-[#F3BE18] duration-300'>{link.name}</a>
                            )}
                        </li>
                    ))}
                <button className='bg-[#6E18F3] text-sm font-black text-white py-2.5 px-8 rounded-2xl md:ml-8 hover:bg-black duration:300'>LET'S TALK</button>
                </ul>
            </div>
        </nav>
        
    );
};

export default Header;
