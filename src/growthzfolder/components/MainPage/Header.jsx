import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo-color.png';
import LogoWhite from '../../../assets/logo-white.png';
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

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
        { name: "Case Studies", link: "/CaseStudies" },
        { name: "Careers", link: "/" },
    ];

    useEffect(() => {
        const changeBackground = () => {
            setNavbar(window.scrollY >= 80);
        };
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);


    return (
        <nav className={`font-work w-full fixed top-0 left-0 z-50 ${navbar ? 'bg-white' : 'active:bg-[#6E18F3]'}`}>
            <div className='md:mx-10 md:flex justify-between py-4 max-[876px]:mx-5'>
                <a href='/' className="block">
                    <img src={navbar ? Logo : LogoWhite} alt="Logo" className='w-36 h-auto'></img>
                </a>
                <div onClick={() => setOpen(!open)} className={`text-3xl absolute right-4 top-6 cursor-pointer md:hidden ${navbar ? 'text-black' : 'text-white'}`}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in max-[976px]:hidden ${open ? 'right-0 ' : 'right-[-100%]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-10 text-xl md:my-0 my-7'>
                            {link.sublinks ? (
                                <div className="relative">
                                    <span className={`text-lg font-bold hover:text-[#f3be18] duration-300 cursor-pointer flex items-center ${navbar ? 'text-black' : 'text-white'}`} onClick={toggleServicesDropdown}>
                                        {link.name}
                                        <AiFillCaretDown />
                                    </span>
                                    {servicesOpen && (
                                        <ul className="absolute w-[300px] left-0 top-8 bg-white shadow-md py-2.5 px-4 rounded-md md:-ml-16" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onClick={toggleServicesDropdown}>
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex} className={`text-lg font-bold hover:text-[#f3be18] duration-300 cursor-pointer py-2`}>
                                                    <a href={sublink.link}>{sublink.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a href={link.link} className={`text-lg font-bold hover:text-[#f3be18] duration-300 ${navbar ? 'text-black' : 'text-white'}`}>{link.name}</a>
                            )}
                        </li>
                    ))}
                    <button className={`bg-[#f3be18] text-sm font-black py-2.5 px-8 rounded-2xl md:ml-8 hover:bg-black duration:300 ${navbar ? 'hover:text-white' : 'hover:text-white'}`}>LET'S TALK</button>
                </ul>
            </div>
            {/* Mobile Navbar Start */}
            <div className={`md:hidden bg-[#6E18F3] fixed max-[767px]:w-full top-0 overflow-y-auto shadow-none bottom-0 py-4 pl-4 duration-500 max-[768px]:w-[50%] ${open ? "right-0" : "right-[-100%]"}`}>
            <a href='/' className="md:hidden block">
              <img src={LogoWhite} alt="Logo" className='w-36 h-auto'></img>
            </a>
            <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-6 cursor-pointer md:hidden text-white'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
            <ul className='py-10 mx-4 text-white'>
            {Links.map((link, index) => (
                        <li key={index} className='md:ml-10 text-xl md:my-0 my-7 border-b-[0.5px] border-solid border-black pb-2'>
                            {link.sublinks ? (
                                <div className="relative">
                                    <span className='text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer flex items-center' onClick={toggleServicesDropdown}>
                                        {link.name}
                                        <AiFillCaretDown />
                                    </span>
                                    {servicesOpen && (
                                        <ul className="relative w-[300px] left-0 pt-4 bg-[#6E18F3] md:-ml-16 " onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onClick={toggleServicesDropdown}>
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex} className="text-white text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer py-2">
                                                    <a href={sublink.link}>{sublink.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a href={link.link} className='text-white text-lg font-bold hover:text-[#F3BE18] duration-300'>{link.name}</a>
                            )}
                        </li>
                    ))}
          <div className="py-5 text-center">
          <button className='bg-[#f3be18] text-sm font-black text-black py-2.5 px-20 rounded-2xl md:ml-8 hover:bg-black hover:text-white duration:300'>LET'S TALK</button>
          </div>
            </ul>
            </div>
            {/* Mobile Navbar End */}
        </nav>
    );
};

export default Header;
