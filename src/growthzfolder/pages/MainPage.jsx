import React, { useState } from 'react'
import Logo from '../../assets/logo-color.png';
import LogoWhite from '../../assets/logo-white.png';
import Dashboard from '../../assets/dashboard.svg';
import Button from '../components/MainPage/Button';
import Home from '../../assets/home-img.svg';
import Home1 from '../../assets/home-img-1.png';
import Home2 from '../../assets/home-img-2.svg';
import Home3 from '../../assets/home-img-3.svg';
import Clients from '../components/MainPage/Clients'
import Testinomial from '../components/MainPage/Testinomial'
import HeroFooter from "../../assets/hero-footer.png"
import { AiFillCaretDown } from "react-icons/ai";
import Footer from '../components/MainPage/Footer';

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

const sectionsData = [
  {
    image: Home,
    title: '5X LEAD GENERATION',
    subTitle: 'CONVERSION EXCELLENCE DRIVING TANGIBLE BUSINESS OUTCOMES',
    description: 'Expanded lead generation efforts by an exceptional fivefold consistently, showcasing exceptional conversion strategies that lead to tangible business results.',
  },
];
const sectionsData1 = [
  {
    image: Home1,
    title: '400% REVENUE SURGE',
    subTitle: 'STRATEGIC MARKETING INITIATIVES POWERING EXCEPTIONAL RESULTS',
    description: 'Our strategic marketing initiatives drove a remarkable 400% revenue growth for our clients, illustrating exceptional financial results and observable business impact.',
  },
];
const sectionsData2 = [
  {
    image: Home2,
    title: '4x MORE ORGANIC WEBSITE TRAFFIC',
    subTitle: 'ENHANCED ONLINE VISIBILITY THROUGH ORGANIC OPTIMIZATION',
    description: 'Our tailored organic strategies resulted in a phenomenal fourfold surge in client website traffic, fortifying online visibility and amplifying brand presence organically.',
  },
];
const sectionsData3 = [
  {
    image: Home3,
    title: '80% ENHANCED ENGAGEMENT',
    subTitle: 'INSIGHT-DRIVEN ANALYSIS ELEVATING CONNECTIONS WITH PROVEN IMPACT',
    description: 'Expanded lead generation efforts by an exceptional fivefold consistently, showcasing exceptional conversion strategies that led to tangible business results.',
  }
];

const process = [
  {
    title: 'RESEARCH REVELATION',
    subTitle: 'Advancing Impactful Insights',
    description: 'At Growthz we Dive deep into market insights, dissect successful campaigns, and segment audiences for targeted strategies. Our comprehensive approach decodes industry secrets, ensuring every strategy is rooted in empirical data, leading to unparalleled resonance and impact. Market insights are not just data, they are our blueprint for disruption.',
  },
  {
    title: 'STRATEGIC BLUEPRINT CRAFTING',
    subTitle: 'Engineering Your Brands Direction',
    description: 'Amidst the chaos, we have mastered the art of finding your voice, shaping brand messages strictly aligned with empirical insights and intricately mapping customer journeys. Precision in budget allocation and crystal-clear KPIs fuel our campaigns, resonating, engaging, and propelling brands to exceptional heights. Crafting messages is not just an art; it is our scientific mastery.',
  },
  {
    title: 'PREPARATION AND LAUNCH MASTERY',
    subTitle: 'Precision Forging Flawless Outcomes',
    description: 'At Growthz, our data-informed strategies drive flawless campaign execution. We integrate meticulous data gathering with strategic decision-making to optimize reach and effectiveness across diverse channels. Initiating campaigns with precision, we vigilantly track metrics, leveraging real-time analytics for continual refinement and ensuring seamless executions. We are not about just launching campaigns; we are all about orchestrating success.',
  },
  {
    title: 'OPTIMIZATION DYNAMICS',
    subTitle: 'Fueling Your Growthz Engine',
    description: 'At our core, we employ an exclusive in-house optimization structure, thoroughly following a rigorous 20-point checklist after our campaign launches. From A/B testing to hyper-targeting, we relentlessly optimize using this structured framework. Our optimization strategies are geared not just towards success, but towards ensuring sustainable growth. We focus on enhancing ROAS, increasing purchase rates, and strategically reducing costs without compromising quality.',
  },
];

const MainPage = () => {
  let [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
};
  return (
    <>
    {/* Header section start */}
    <nav className='font-work w-full fixed top-0 left-0 bg-white z-50'>
            <div className='md:mx-10 md:flex  justify-between py-4 max-[876px]:mx-5'>
                <a href='/' className="block">
                    <img src={Logo} alt="Logo" className='w-36 h-auto'></img>
                </a>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in max-[976px]:hidden ${open ? 'right-0 ' : 'right-[-100%]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-10 text-xl md:my-0 my-7'>
                            {link.sublinks ? (
                                <div className="">
                                    <span className='text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer flex items-center' onClick={toggleServicesDropdown}>
                                        {link.name}
                                        <AiFillCaretDown />
                                    </span>
                                    {servicesOpen && (
                                        <ul className="relative w-[300px] left-0 top-8 bg-white shadow-md py-2.5 px-4 rounded-md -ml-16" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onClick={toggleServicesDropdown}>
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
                        <li key={index} className='md:ml-10 text-xl md:my-0 my-7'>
                            {link.sublinks ? (
                                <div className="relative">
                                    <span className='text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer flex items-center' onClick={toggleServicesDropdown}>
                                        {link.name}
                                        <AiFillCaretDown />
                                    </span>
                                    {servicesOpen && (
                                        <ul className="absolute w-[300px] left-0 top-8 bg-white shadow-md py-2.5 px-4 rounded-md md:-ml-16" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onClick={toggleServicesDropdown}>
                                            {link.sublinks.map((sublink, subIndex) => (
                                                <li key={subIndex} className="text-black text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer py-2">
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
          <div className="py-5">
          <button className='bg-[#f3be18] text-sm font-black text-black py-2.5 px-8 rounded-2xl md:ml-8 hover:bg-black hover:text-white duration:300'>LET'S TALK</button>
          </div>
            </ul>
            </div>
            {/* Mobile Navbar End */}
        </nav>
    {/* Header section end */}
    {/* Banner start */}
    <div className='font-work md:py-16 w-full max-[876px]:py-8'>
        <div className='max-w-[1240px] relative py-[100px] mx-auto flex-auto items-center justify-center w-[90%]'>
            <h1 className='text-black md:text-[88px] md:leading-[6.25rem] font-black max-[876px]:text-[32px]'>We Help Impactful <br/>Brands Build
                    <span className='text-[#F3BE18]'> Predictable </span>
                    {/* <span>Sustainable</span>
                    <span>Scalable</span>
                    <span>Measurable</span> */}
                Compounding Growth
            </h1>
            <p className='py-4 text-[#1A1E21] md:text-lg font-medium sm:text-sm'>We're not your typical marketing agency. Instead, we're a team of dedicated experts blending innovative thinking with proven methodologies. With a focus on processes that work and a talented squad that's second to none, we're here to transform your brand's vision into measurable success.</p>
            <div className='pt-12'>
                <Button>LET'S TALK</Button>
            </div>
        </div>
        <div className='border-b-4 border-solid border-black w-[90%] mx-auto '>
            <img src={Dashboard} alt="dashboardImage" className='w-[1296px]  md:-mt-[180px] max-[876px]:-mt-[100px]'/>
        </div>
    </div>
    {/* Banner end */}
    <div className='font worke w-full md:py-16'>
      {sectionsData.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-10 w-[80%]'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl max-[876px]:text-[28px] font-black py-2'>{section.title}</h1>
            <h4 className='md:text-2xl sm:text-xl text-base font-medium pb-2 max-[876px]:hidden'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal'>{section.description}</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={section.image} alt='/' />
        </div>
      ))}
      {sectionsData1.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-10 w-[80%]'>
          <img className='w-[500px] mx-auto my-4 max-[876px]:order-1 md:order-none' src={section.image} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl max-[876px]:text-[28px] font-black py-2'>{section.title}</h1>
            <h4 className='md:text-2xl sm:text-xl text-base font-medium pb-2 max-[876px]:hidden'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal'>{section.description}</p>
          </div>
        </div>
      ))}
      {sectionsData2.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-10 w-[80%]'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2 max-[876px]:text-[28px]'>{section.title}</h1>
            <h4 className='md:text-2xl sm:text-xl text-base font-medium pb-2 max-[876px]:hidden'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal'>{section.description}</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={section.image} alt='/' />
        </div>
      ))}
      {sectionsData3.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-10 w-[80%]'>
          <img className='w-[500px] mx-auto my-4 max-[876px]:order-1 md:order-none' src={section.image} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2 max-[876px]:text-[28px]'>{section.title}</h1>
            <h4 className='md:text-2xl sm:text-xl text-base font-medium pb-2 max-[876px]:hidden'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal'>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='font-work w-full py-16 max-[876px]:hidden'>
    <div className='max-w-[1240px] items-center justify-center text-center mx-auto w-[60%]'>
      <h2 className='md:text-[57px] md:leading-tight  max-[867px]:text-2xl text-2xl text-black font-bold pb-4'>LET'S SCALE YOUR GROWTHZ STORY TODAY</h2>
      <div className=''>
      <Button>GET IN TOUCH</Button>
      </div>
    </div>
    </div>
    <Clients />
    <Testinomial />
    <div className='font-work w-full md:pb-16'>
      <div className='max-w-[1240px] mx-auto w-[90%]  max-[876px]:w-[80%]'>
      <h1 className='md:py-16 max-[876px]:pb-10 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl'>DISCOVER OUR <br />PROCESS</h1>
      {process.map((section, index) => (
        <div key={index} className='mx-auto mb-10'>
          <div className='flex flex-col justify-center border-b-4 border-solid border-[#f3be18]'>
            <h1 className='md:text-4xl  sm:text-3xl text-2xl font-black py-2 max-[876px]:text-[18px]'>{section.title}</h1>
            <h4 className='md:text-lg sm:text-sm text-base font-semibold pb-2 max-[876px]:text-[16px]'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal pb-4'>{section.description}</p>
          </div>
        </div>
      ))}
      <div className='max-[876px]:text-center'>
      <Button>LET'S TALK</Button>
      </div>
    </div>
    </div>
    <div className='font-work w-full py-16'>
      <div className="bg-[#6E18F3] mx-auto pt-8">
        <div className='items-center text-center justify-center mx-auto w-[60%]'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 max-[876px]:text-[25px] leading-[34px]'>Maximize Your Digital Presence with Our Expertise</h2>
            <div className='pb-8'>
            <button className='bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET STARTED TODAY
            </button>
            </div>
        </div>
        <div className='w-auto'>
        <img src={HeroFooter} alt="/" className='max-[1024px]:hidden -mt-[220px]'/>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default MainPage
