import React, { useState } from 'react'
import Logo from '../../assets/logo-color.png';
import LogoWhite from '../../assets/logo-white.png';
import HeroFooter from "../../assets/hero-footer.png"
import Footer from '../components/MainPage/Footer';
import { AiFillCaretDown } from "react-icons/ai";
import NiraFinance from "../../assets/NiraFinance.png"

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
  const contacts = [
    { name: "LET'S TALK", link: "/ContactUS"},
  ]

const objectives = [
    {points : "Introducing them to the market"},
    {points : "Increasing content-generated and content-assisted inbound leads"},
    {points : "Improving ranking on high-intent industry key terms that have been historically dominated by the brand"},
    {points : "Localizing the website, and growing their US user base"},
    {points : "Improving overall lead tracking, funnel automation, and mid-funnel management"}
]

const challenges = [
    {points : "The client was operating with an obsolete marketing/analytics stack."},
    {points : "The client’s brand positioning was becoming increasingly challenged."},
    {points : "The client was facing increased competition in the market."},
    {points : "Due to all of the above, NIRA saw a steady decline in inbound traffic, qualifies leads, and a significant increase in CAC."}
]

const services = [
    {description : "Landing page building"},
    {description : "Market and competition research"},
    {description : "Persona and UX analysis"},
    {description : "Conversion Rate Optimization"},
    {description : "Full-funnel analytics and journey tracking"},
    {description : "SEO & Content Marketing"},
    {description : "Facebook and Instagram Ads"},
    {description : "Google and Bing Ads"},
    {description : "Content Partnerships"},
    {description : "Influencer Marketing"},
]

const approaches = [
    {number : "1" , description : "Audited current tech and analytics stack to identify tracking and reporting gaps and historical data across the funnel"},
    {number : "2" , description : "Reviewed existing funnel journeys and touchpoints to ensure proper implementation of tracking scripts, custom events, and triggers"},
    {number : "3" , description : "Defined lead journey patterns by channel, source, first touchpoint, and deal size"},
    {number : "4" , description : "Designed and implemented an end-to-end automation and personalization map with funnel stage definitions, trigger points, and automation/personalization variables"},
    {number : "5" , description : "Built a lead cohort analysis by touchpoint/s, source, medium, and deal size"},
    {number : "6" , description : "Reviewed and optimized tracking schema around digital strategy and content campaigns"},
    {number : "7" , description : "Built an executive dashboard showing leads and opportunities by exact marketing sources and campaigns illustrating marketing ROI to leadership"}
]

const ratings = [
    {number : "50K+", name : "Monthly Visitors"},
    {number : "88%", name : "Sign Up Rate"},
    {number : "3X", name : "Keyword Ranking"}
]

const CaseStudyInner = () => {
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
                                <div className="relative">
                                    <span className='text-lg font-bold hover:text-[#F3BE18] duration-300 cursor-pointer flex items-center' onClick={toggleServicesDropdown}>
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
                {contacts.map((contact) => (
                      <a href={contact.link}>
                    <button className='bg-[#6E18F3] text-sm font-black text-white py-3 px-8 rounded-2xl md:ml-8 hover:bg-black duration:300'>{contact.name}</button>
                      </a>
                    ))}
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
          {contacts.map((contact) => (
                      <div className="py-5 text-center">
                          <a href={contact.link}>
                    <button className='bg-[#f3be18] text-base font-black text-black py-3 px-20 rounded-2xl md:ml-8 hover:bg-black hover:text-white duration:300'>{contact.name}</button>
                      </a>
                      </div>
                    ))}
            </ul>
            </div>
            {/* Mobile Navbar End */}
        </nav>
    {/* Header section end */}
    <div className='font-work w-full py-16'>
    <div className='text-center items-center mx-auto py-16 w-[80%]'>
        <img src={NiraFinance} alt="Nira" className="items-center mx-auto max-[876px]:w-[186px]"></img>
      <h2 className='md:text-[73px] md:leading-10  max-[867px]:text-[32px] text-2xl text-[#6E18F3] font-black py-4'>Nira Finance Case Study</h2>
      <p className='text-[20px] font-medium justify-center pt-4 max-[867px]:text-left max-[867px]:items-center max-[867px]:text-[16px]'>Lark is the next-gen workspace for teams, built by Bytedance. The new take on an office suite combines all the essential team collaboration tools, from messaging and video conferencing, to schedule management and cloud storage, all in a single interconnected platform. These functions are always in sync, allowing Lark to deliver a seamless user experience for the modern enterprise.</p>
    </div>
    <div className='text-center items-center mx-auto md:py-10 w-[80%] grid grid md:grid-cols-3 md:border-y-[6px] border-solid border-black max-[867px]:border-y-[3px] border-solid'>
    {ratings.map((rating, index) => (
        <div key={index} className='w-[90%] max-[867px]:py-5 py-10'>
        <h1 className='md:text-[90px] md:leading-[105px] max-[876px]:text-[30px] text-xl font-black'>{rating.number}</h1>
        <h4 className='md:text-3xl sm:text-sm font-semibold max-[867px]:text-lg'>{rating.name}</h4>
        </div>
        ))}
    </div>
    <div className='md:text-center md:items-center mx-auto md:w-[60%] max-[867px]:w-[80%]'>
        <h1 className='text-[128px] font-black text-[#6E18F3]'>“</h1>
        <h3 className='md:text-[32px] font-black md:-mt-[50px] max-[867px]:-mt-[90px] max-[867px]:text-[24px]'>Growthz is a strategic and insightful partner</h3>
        <p className='md:text-[20px] font-medium justify-center pt-4 max-[867px]:text-[16px]'>The NoGood squad relentlessly and patiently challenged our approach to various inbound activities, and completely changed how we think about lead generation via content marketing and automation. They also showed us a new, more effective rhythm around approaching, tracking, and nurturing prospects.</p>
        <h4 className='text-lg font-extrabold pt-8 max-[867px]:text-center'>Maya Patel</h4>
        <p className='text-base font medium max-[867px]:text-center'>General Manager</p>                        
    </div>
    </div>

    <div className='font-work w-full py-10 bg-[#F3BE18]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='md:text-[50px] font-black md:py-5 text-[#6E18F3] max-[867px]:text-3xl'>Objectives</h1>
        <p className='md:text-[20px] font-semibold pt-4 max-[867px]:text-[18px]'>While already popular internationally, this SaaS company was looking to break into the US market. Growthz was tasked with;</p>
        <div className='mx-auto grid md:grid-cols-2 gap-8 py-10'>
        {objectives.map((objective, index) => (
        <ul key={index} className='ml-5'>
        <li className='list-disc md:text-[23px] font-normal md:mb-2 max-[867px]:text-[18px]'>{objective.points}</li>
      </ul>
        ))}
        </div>
      </div>
    </div>
    <div className='font-work w-full py-10 bg-[#6E18F3]'>
        <div className='mx-auto w-[90%]'>
        <h1 className='md:text-[50px] font-black md:py-5 text-[#F3BE18] max-[867px]:text-3xl'>Challenges</h1>
        <div className='mx-auto grid md:grid-cols-2 gap-8 py-10'>
        {challenges.map((challenge, index) => (
        <ul key={index} className='text-white'>
            <div className='md:border-t-[6px] border-solid border-white max-[867px]:border-t-[3px] border-solid border-white md:w-[80%]'> 
                <li className='md:text-3xl font-black mb-4 pt-4 max-[867px]:text-[18px]'>{challenge.points}</li>
            </div>
      </ul>
        ))}
        </div>
      </div>
    </div>
    <div className='font-work w-full py-10'>
        <div className='mx-auto w-[90%]'>
        <h1 className='md:text-[50px] font-black md:py-5 text-black max-[876px]:text-3xl'>Services Provided</h1>
        <div className='mx-auto grid md:grid-cols-2 gap-8 py-10'>
        {services.map((service, index) => (
        <ul key={index} className='ml-5 items-center'>
        <li className='list-disc md:text-[20px] font-normal max-[876px]:text-[18px]'>{service.description}</li>
      </ul>
        ))}
        </div>
      </div>
    </div>
    <div className='font-work w-full py-10'>
        <div className='mx-auto w-[90%]'>
        <h1 className='md:text-[50px] font-black md:py-5 text-black max-[876px]:text-3xl'>Approach</h1>
        <div className='mx-auto grid md:grid-cols-3 gap-8 py-10'>
        {approaches.map((approach, index) => (
        <ul key={index} className='text-black'>
            <h2 className='text-[#6E18F3] text-[50px] font-black'>{approach.number}</h2>
            <div className='md:border-t-[6px] border-solid border-black max-[876px]:border-t-[3px] md:w-[80%]'> 
                <li className='text-lg font-bold mb-4 pt-5'>{approach.description}</li>
            </div>
      </ul>
        ))}
        </div>
      </div>
    </div>
    <div className='font-work w-full md:py-10'>
        <div className='mx-auto w-[90%]'>
        <h1 className='md:text-[50px] font-black text-black pb-4 max-[876px]:text-3xl'>Results</h1>
        <div className='mx-auto grid md:grid-cols-3 gap-8 border-b-[6px] border-solid border-black md:pb-16'>
            <div className='md:border-t-[6px] border-solid border-black md:pt-16 col-span-2 md:w-[90%] max-[876px]:pt-5'>
                <h4 className='md:text-[26px] font-extrabold pb-4 max-[876px]:text-[18px]'>NoGood helped the company develop strategic content designed to drive qualified traffic.</h4>
                <p className='md:text-lg font-medium pb-4'>Through conversion rate optimization, UX/UI updates, a brand new information architecture, as well as a content and SEO strategy, NoGood was able to support our client in their effort to break into the US market.</p>
                <p className='md:text-lg font-medium pb-4'>Conversion Rate Optimization and UX/UI: NoGood took on the redesign of the complete US site. From the homepage all the way through product pages, the About Us page, pricing, and more. Pages were created to optimize conversion rate and deliver a next-level user experience.</p>
                <p className='md:text-lg font-medium pb-4'>Information Architecture and Content Mapping: The first thing we noticed about the current website was the structure needed an update. In order to develop an effective customer journey, we built out a navigation structure developed to deliver the optimal experience from a content and SEO standpoint.</p>
                <p className='md:text-lg font-medium pb-4'>Conversion Rate Optimization: We significantly decreased time spent per SQL through automated lead filtration, personalized email workflows, and meeting scheduling automation.</p>
            </div>
            <div className='md:items-right text-center md:pt-16 max-[667px]:mx-[100px] max-[768px]:mx-[250px]'>
            {ratings.map((rating, index) => (
        <div key={index} className='pb-10'>
        <h1 className='md:text-[90px] md:leading-[105px] max-[876px]:text-[30px] text-xl font-black max-[876px]:pb-2'>{rating.number}</h1>
        <h4 className='md:text-3xl sm:text-sm font-semibold'>{rating.name}</h4>
        </div>
        ))}
            </div>
        </div>
        <div className='py-10 md:w-[100%]'>
        <h3 className='md:text-[32px] font-black text-center max-[876px]:text-[24px]'>other case studies</h3>
        <div className='grid md:grid-cols-2 gap-8 pt-10 mx-auto'>
            <a href='/'>
            <h4 className='md:text-[24px] text-[#6E18F3] font-extrabold md:w-[60%]'>We increased revenue for JVN<br /> Hair by 298%</h4>
            </a>
            <a href='/'>
            <div className='md:items-right md:text-right'>
            <h4 className='md:text-[24px] text-[#6E18F3] font-extrabold'>We helped unspun increase <br/>revenue by 55% YoY</h4>
            </div>
            </a>
        </div>
        </div>
      </div>
    </div>
    {/* Footer section start */}
    <div className='font-work w-full py-16'>
      <div className="bg-[#6E18F3] mx-auto">
        <div className='items-center text-center justify-center mx-auto md:w-[60%] relative z-50'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 max-[876px]:text-[25px] leading-[34px]'>Let's Scale Your Growthz Story Today!</h2>
            <div className='pb-8'>
                <a href='/ContactUS'>
                <button className='bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET IN TOUCH
            </button>
                </a>
            </div>
        </div>
        <div className='w-auto relative z-0'>
        <img src={HeroFooter} alt="/" className='max-[1024px]:hidden -mt-[240px] cursor-pointer duration-300' href="https://drive.google.com/drive/folders/1RwphnPH1Qoi0VIAFu16zNc8PNE6euGdN?usp=sharing"/>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default CaseStudyInner
