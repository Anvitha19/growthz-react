import React from 'react';
import Team1 from '../../assets/about-us-1.png';
import Team2 from '../../assets/about-us-2.png';
import Team3 from '../../assets/about-us-3.png';
import Icon1 from '../../assets/about-us-icon-1.svg';
import HeroFooter from "../../assets/hero-footer.png"

const teamsImg = [
    {
        image: Team1,
        name: "Maya Patel",
        profession:"General Manager"
    },
    {
        image: Team2,
        name: "Maya Patel",
        profession:"General Manager"
    },
    {
        image: Team3,
        name: "Maya Patel",
        profession:"General Manager"
    },
    {
        image: Team1,
        name: "Maya Patel",
        profession:"General Manager"
    },
]
const workIcons = [
    {
        img : Icon1,
        name: "Collaborative excellence"
    },
    {
        img : Icon1,
        name: "Collaborative excellence"
    },
    {
        img : Icon1,
        name: "Collaborative excellence"
    },
    {
        img : Icon1,
        name: "Collaborative excellence"
    },
]

const AboutUs = () => {
  return (
    <>
    {/* Banner start */}
    <div className='font-work md:py-10 w-full max-[876px]:py-8 bg-[#6E18F3]'>
        <div className='relative py-[100px] mx-auto flex-auto items-center justify-center w-[90%]'>
            <h1 className='text-white md:text-[88px] md:leading-[6.25rem] font-black max-[876px]:text-[32px]'>Empowering Brands Through Strategic Marketing Solutions</h1>
            <p className='text-white pt-4 text-[#1A1E21] md:text-lg font-medium sm:text-sm'>At Growthz, we are seasoned marketing mavens driven by the passion to transform brands. We specialise in crafting strategic solutions that elevate businesses across diverse industries. Our team comprises innovative thinkers and marketing enthusiasts dedicated to propelling your brand to new heights</p>
        </div>
    </div>
    {/* Banner end */}
    <div className='font-work w-full md:py-16'>
      <div className='mx-auto w-[90%]  max-[876px]:w-[80%]'>
      <h1 className='md:py-16 max-[876px]:pb-10 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl'>ABOUT US</h1>
      <p className='text-[#1A1E21] md:text-lg  sm:text-sm font-normal  justify-center items-center'>We offer tailored marketing solutions geared toward amplifying brand presence and driving growth. From comprehensive digital strategies to impactful campaigns, our services encompass strategic planning, creative content, SEO, social media management, and more. We're committed to reshaping your brand narrative and fostering lasting connections with your audience. Our approach is a blend of meticulous strategy and creative ingenuity. We delve deep into market insights, meticulously curating data-driven strategies tailored to your brand's unique needs. We navigate the digital landscape with precision, employing cutting-edge tools and innovative techniques to ensure your brand stands out amidst competition.</p>
    </div>
    </div>
    <div className='font-work w-full md:pb-16'>
        <div className='mx-auto w-[90%]  max-[876px]:w-[80%]'>
        <h1 className='md:py-16 max-[876px]:pb-10 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl'>MEET THE TEAM</h1>
        <div className='grid grid-cols-4'>
        {teamsImg.map((section, index) => (
        <div key={index}>
            <div className='pb-16'>
            <img src={section.image} alt='Team' className='w-[290px]'/>
            <h4 className='text-lg font-extrabold pt-4'>{section.name}</h4>
            <p className='text-base font medium max-[876px]:pb-6'>{section.profession}</p>
            </div>
            <div>
            <img src={section.image} alt='Team' className='w-[290px]'/>
            <h4 className='text-lg font-extrabold pt-4'>{section.name}</h4>
            <p className='text-base font medium max-[876px]:pb-6'>{section.profession}</p>
            </div>
        </div>
      ))}
        </div>
    </div>
    </div>
    <div className='font-work w-full'>
        <div className='mx-auto w-[90%]  max-[876px]:w-[80%]'>
        <h1 className='md:py-16 max-[876px]:pb-10 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl'>WORK LIFE AT ITS BEST</h1>
        <div className='grid grid-cols-4'>
        {workIcons.map((work, index) => (
        <div key={index}>
            <div className='pb-16 justify-center text-center'>
                <div className='mx-auto w-[170px] h-[170px] rounded-2xl relative block bg-white shadow-[0_5px_20px_0px_rgba(210, 210, 245, 0.5)] flex p-4'>
                    <img src={work.img} alt='Icon' className='w-[100px] h-[100px]'/>
                </div>
                <h4 className='text-xl font-semibold pt-4'>{work.name}</h4>
            </div>
        </div>
      ))}
        </div>
       </div>
    </div>
    <div className='font-work w-full py-16'>
      <div className="bg-[#6E18F3] mx-auto">
        <div className='items-center text-center justify-center mx-auto w-[70%]'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 max-[876px]:text-[25px] leading-[34px]'>Let's Scale Your Growthz Story Today!</h2>
            <div className='pb-8'>
            <button className='bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET IN TOUCH
            </button>
            </div>
        </div>
        <div className='w-auto'>
        <img src={HeroFooter} alt="/" className='max-[1024px]:hidden -mt-[240px]'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs
