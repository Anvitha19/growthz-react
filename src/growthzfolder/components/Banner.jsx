import React from 'react';
import Dashboard from '../../assets/dashboard.svg';
import Button from './Button';

const Banner = () => {
  return (
    <section className='pt-32 pb-16 md:ml-24'>
        <div className='w-full items-center justify-center'>
        <div className='relative p-2.5 w-10/12 flex-auto'>
            <h1 className='text-black md:text-[80px] leading-tight font-black sm:text-6xl'>We Help Impactful <br/>Brands Build
                    <span className='text-[#F3BE18]'> Predictable </span>
                    {/* <span>Sustainable</span>
                    <span>Scalable</span>
                    <span>Measurable</span> */}
                Compounding Growth
            </h1>
            <p className='py-4 text-[#1A1E21] md:text-lg sm:text-sm font-medium'>We're not your typical marketing agency. Instead, we're a team of dedicated experts blending innovative thinking with proven methodologies. With a focus on processes that work and a talented squad that's second to none, we're here to transform your brand's vision into measurable success.</p>
            <div className='pt-12'>
                <Button>Let's talk</Button>
            </div>
        </div>
        <div className='border-b-4 border-solid border-black w-11/12'>
            <img src={Dashboard} alt="dashboardImage" className='w-full'/>
        </div>
        </div>
    </section>
  )
}

export default Banner
