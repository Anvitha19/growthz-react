import React from 'react';
import Home from '../../assets/home-img.svg';
import Home1 from '../../assets/home-img-1.png';
import Home2 from '../../assets/home-img-2.svg';
import Home3 from '../../assets/home-img-3.svg';

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

const Section2 = () => {
  return (
    <div className='w-full pt-16 mx-10 '>
      {sectionsData.map((section, index) => (
        <div key={index} className='max-w-[1200px] mx-auto grid md:grid-cols-2 py-16 sm:w-10/12 sm:pr-10 sm:py-0'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={section.image} alt='/' />
        </div>
      ))}
      {sectionsData1.map((section, index) => (
        <div key={index} className='max-w-[1200px] mx-auto grid md:grid-cols-2 py-16 sm:w-10/12 sm:pr-10 sm:pb-0'>
          <img className='w-[500px] mx-auto my-4 sm:order-1 md:order-none' src={section.image} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
        </div>
      ))}
      {sectionsData2.map((section, index) => (
        <div key={index} className='max-w-[1200px] mx-auto grid md:grid-cols-2 py-16 sm:w-10/12 sm:pr-10 sm:pb-0'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={section.image} alt='/' />
        </div>
      ))}
      {sectionsData3.map((section, index) => (
        <div key={index} className='max-w-[1200px] mx-auto grid md:grid-cols-2 py-16 sm:w-10/12 sm:pr-10 sm:pb-0'>
          <img className='w-[500px] mx-auto my-4 sm:order-1 md:order-none' src={section.image} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section2;
