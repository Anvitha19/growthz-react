import React, { useState } from 'react';
import Clients from '../components/MainPage/Clients';
import HeroFooter from "../../assets/hero-footer.png";
import Testinomial from '../components/MainPage/Testinomial';
import Accordion from "../components/MainPage/Accordion";
import Nira from "../../assets/services-1.png";
import Button from '../components/MainPage/Button';
import Header from '../components/MainPage/Header';
import Footer from '../components/MainPage/Footer';

const servicesData = [
    {
      title: '3X EFFECTIVE SEO WITH STRATEGIC LINK BUILDING BUILDING',
      description: 'Our Link Building Mastery significantly tripled brand visibility and authority, placing the clients brand at the forefront of industry recognition and trust.',
    },
    {
        title: 'COMPETITIVE ADVANTAGE WITH 250% TRAFFIC SURGE',
        description: 'By conducting an in-depth Competitive Analysis, we granted a 250% surge in website traffic, providing the clients business with a distinct competitive edge in the market.',
    },
  ];
const listData = [
    {name: 'UI/UX audit for SEO'},
    {name: 'Site architecture'},
    {name: 'Competitive analysis'},
    {name: 'Backlink analysis'},
    {name: 'Search Console setup'},
    {name: 'Content intent analysis'},
    {name: 'Keyword research'},
    {name: 'Competitor analysis'},
    {name: 'Metadata optimization'},
    {name: 'Internal linking audit'},
    {name: 'Link building'},
    {name: 'Site copy updates'},
    {name: 'Keyword research'},
    {name: 'Competitor analysis'},
    {name: 'Metadata optimization'},
    {name: 'Internal linking audit'},
    {name: 'Link building'},
    {name: 'Site copy updates'},
]

const Services = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const limitedList = listData.slice(0, 7); // Show only the first 5 items initially

  const handleReadMore = () => {
    setShowFullContent(!showFullContent);
  };

  const handleReadLess = () => {
    setShowFullContent(false); // Hide full content
  };
  return (
    <>
    <Header />
    {/* Banner start */}
    <div className='font-work md:py-10 w-full max-[876px]:py-8 bg-[#6E18F3]'>
        <div className='relative md:py-[100px] max-[876px]:pt-[70px] max-[876px]:pb-[50px] mx-auto flex-auto items-center justify-center w-[90%]'>
            <h1 className='text-white md:text-[88px] md:leading-[6.25rem] font-black max-[876px]:text-[32px]'>The Art of Marketing Perfected by science at GROWTHZ</h1>
            <p className='text-white pt-4 text-[#1A1E21] md:text-lg font-medium sm:text-sm w-[90%]'>We are an organic search engine optimization (SEO) agency that deploys proven SEO techniques and strategies that have helped many brands claim the top position on search engine results pages for competitive, high-volume industry keywords. Our SEO works — we know how to drive qualified traffic and keep your CAC low in the long term.</p>
            <div className='pt-12'>
              <a href='/ContactUS'>
            <button className='font-work bg-[#f3be18] text-base font-black text-black py-3 px-8 rounded-2xl hover:bg-black duration:300 hover:text-white'>LET'S TALK</button>
              </a>
            </div>
        </div>
    </div>
    {/* Banner end */}
    <div className='font-work w-full md:pt-16 max-[876px]:px-5 max-[876px]:py-10'>
  ` <div className='max-w-[1240px] mx-auto flex-auto grid md:gap-8 md:grid-cols-2 justify-between'>
    {servicesData.map((section, index) => (
      <div key={index} className='flex flex-col justify-center md:py-10 max-[876px]:pb-10'>
        <h1 className='md:text-[57px] md:leading-[53px] max-[876px]:text-[28px] text-xl font-black py-2  max-[876px]:leading-tight'>{section.title}</h1>
        <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal max-[876px]:justify-center max-[876px]:items-center py-2'>{section.description}</p>
      </div>
    ))}
  </div>
</div>
<Clients />
<div className='font-work w-full md:py-16 max-[876px]:px-6  max-[876px]:py-20'>
  <div className='max-w-[1240px] mx-auto border-b-[6px] border-solid border-black md:pb-10 max-[876px]:border-none'>
      <img src={Nira} alt="nira" className='border-b-[6px] border-solid border-black max-[876px]:w-[180px]'></img>
    <div className='grid md:grid-cols-3'>
      <div className='flex flex-col justify-center md:py-10 max-[876px]:pt-10  max-[876px]:grid grid-cols-2'>
        <div className='max-[876px]:flex flex-col max-[876px]:justify-left'>
        <h1 className='md:text-[90px] md:leading-[105px] max-[876px]:text-[54px] text-xl font-black'>50K+</h1>
        <h4 className='md:text-3xl sm:text-sm font-semibold max-[876px]:pt-3'>Monthly Visitors</h4>
        </div>
        <div className='max-[876px]:flex flex-col max-[876px]:justify-right'>
        <h1 className='md:text-[90px] md:leading-[105px] max-[876px]:text-[54px] text-xl font-black md:pt-6'>100K+</h1>
        <h4 className='md:text-3xl sm:text-sm font-semibold max-[876px]:pt-3'>Monthly Visitors</h4>
        </div>
      </div>
      <div className='flex flex-col justify-center md:py-10 max-[876px]:py-8 md:col-span-2'>
        <h4 className='md:text-3xl sm:text-sm font-semibold'>Nira Finance was a struggling microlending start-up with little to zero organic traffic & conversions. They on-boarded us specifically for SEO and search Ads.</h4>
        <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal md:pt-4 max-[876px]:pt-5'>Their expertise in SEO and social media has helped our brand secure verified visibility, with consistent top 3 rankings. They are truly proficient in optimizing our online presence, ensuring maximum exposure and success. Thank you, Growthz, for your exceptional skills and dedication to our brand's growth!</p>
      </div>
  </div>
  <a href='/ContactUS'>
  <Button>LET'S TALK</Button>
  </a>
  </div>
</div>
<div className='font-work w-full'>
    <div className='mx-auto w-[90%]  max-[876px]:w-[80%]'>
        <h1 className='md:py-16 max-[876px]:pb-8 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl'>OUR TACTICS</h1>
        <div className='mx-auto grid md:grid-cols-3 flex w-[90%] max-[876px]:hidden'>
        {listData.map((list, index) => (
        <ul key={index}>
        <li className='md:mb-14 list-disc md:text-2xl font-bold max-[876px]:text-[16px] max-[876px]:mb-7'>{list.name}</li>
      </ul>
        ))}
        </div>
        {/* Mobile screen */}
        <div className='md:hidden'>
        <div className='mx-auto grid flex w-[90%]'>
          {showFullContent ? (
            listData.map((item, index) => (
              <ul key={index}>
                <li className='md:mb-14 list-disc md:text-2xl font-bold max-[876px]:text-[16px] max-[876px]:mb-7'>{item.name}</li>
              </ul>
            ))
          ) : (
            limitedList.map((item, index) => (
              <ul key={index}>
                <li className='md:mb-14 list-disc md:text-2xl font-bold max-[876px]:text-[16px] max-[876px]:mb-7'>{item.name}</li>
              </ul>
            ))
          )}
        </div>
        {!showFullContent ? (
          <button
            className='text-[#6E18F3] text-lg font-bold border-b-2 border-[#6E18F3] border-solid ml-2'
            onClick={handleReadMore}
          >
            Read more
          </button>
        ) : (
          <button
            className='text-[#6E18F3] text-lg font-bold border-b-2 border-[#6E18F3] border-solid ml-2'
            onClick={handleReadLess}
          >
            Read less
          </button>
        )}
        </div>
    </div>
</div>
<Testinomial />
<div className='font-work w-full'>
    <div className='mx-auto w-[90%]  max-[876px]:w-[80%]'>
        <h1 className='md:py-16 max-[876px]:pb-5 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl max-[876px]:text-center'>FAQ'S</h1>
    <div className="md:p-4 rounded-lg">
      <Accordion
        title="Can I request a new feature for Quiety"
        answer="Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets."
      />
      <Accordion
        title="How do I create an account?"
        answer="Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets."
      />
      <Accordion title="Do you offer team accounts?" 
      answer="Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets." 
      />
    </div>
    </div>
</div>

<div className='font-work w-full py-16'>
      <div className="bg-[#6E18F3] mx-auto md:pt-8">
        <div className='items-center text-center justify-center mx-auto md:w-[60%] max-[876px]:w-[70%] md:relative md:z-50'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 max-[876px]:text-[25px] leading-[34px]'>Boost Your Visibility, Elevate Your Presence</h2>
            <div className='pb-8'>
              <a href='/ContactUS'>
              <button className='bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET IN TOUCH
            </button>
              </a>
            </div>
        </div>
        <div className='w-auto md:relative md:z-0'>
        <img src={HeroFooter} alt="/" className='max-[1024px]:hidden -mt-[240px]'/>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Services
