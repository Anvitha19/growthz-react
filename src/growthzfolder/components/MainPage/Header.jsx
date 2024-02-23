import React, { useState } from 'react';
import Logo from '../../../assets/logo-color.png';

const Header = () => {
    let [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const Links = [
        { name: "About", link: "/" },
        { name: "Services", link: "/", sublinks: ["Search Engine Optimization", "SEM / PPC", "Social Media Marketing", "Outbound Marketing", "Social Media Ads", "Branding"] },
        { name: "Case Studies", link: "/" },
        { name: "Careers", link: "/" },
    ];

    return (
        <nav className='w-full fixed top-0 left-0'>
            <div className='max-w-[1240px] mx-auto md:flex  justify-between bg-white  py-4 w-[90%]'>
                    <img src={Logo} alt="Logo" className='w-36 h-auto'></img>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-10 text-xl md:my-0 my-7'>
                            {link.sublinks ? (
                                <div className="relative">
                                    <span className='text-black text-base font-bold hover:text-[#F3BE18] duration-300 cursor-pointer' onClick={() => setServicesOpen(!servicesOpen)}>{link.name}</span>
                                    {servicesOpen && (
                                        <ul className="absolute left-0 top-8 bg-white shadow-md py-2.5 px-4 rounded-md">
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex} className="text-black text-base font-bold hover:text-[#F3BE18] duration-300 cursor-pointer">{sublink}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a href={link.link} className='text-black text-base font-bold hover:text-[#F3BE18] duration-300'>{link.name}</a>
                            )}
                        </li>
                    ))}
                <button className='font-sans bg-[#6E18F3] text-sm font-black text-white py-2.5 px-8 rounded-2xl md:ml-8 hover:bg-black duration:300'>Let's Talk</button>
                </ul>
            </div>
        </nav>
        
    );
};

export default Header;
