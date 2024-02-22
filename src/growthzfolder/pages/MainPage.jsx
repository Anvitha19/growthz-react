import React from 'react'
import Dashboard from '../../assets/dashboard.svg';
import Button from '../components/MainPage/Button';
import Home from '../../assets/home-img.svg';
import Home1 from '../../assets/home-img-1.png';
import Home2 from '../../assets/home-img-2.svg';
import Home3 from '../../assets/home-img-3.svg';
import Header from '../components/MainPage/Header'
import Maximize from '../components/MainPage/Maximize'
import Footer from '../components/MainPage/Footer'
import Clients from '../components/MainPage/Clients'
import Testinomial from '../components/MainPage/Testinomial'

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
  return (
    <>
    <Header />
    {/* Banner start */}
    <div className='py-16 w-full'>
        <div className='max-w-[1240px] relative py-[100px] mx-auto flex-auto items-center justify-center w-[90%]'>
            <h1 className='text-black md:text-[80px] leading-tight font-black max-[876px]:text-[32px]'>We Help Impactful <br/>Brands Build
                    <span className='text-[#F3BE18]'> Predictable </span>
                    {/* <span>Sustainable</span>
                    <span>Scalable</span>
                    <span>Measurable</span> */}
                Compounding Growth
            </h1>
            <p className='py-4 text-[#1A1E21] md:text-lg font-medium sm:text-sm'>We're not your typical marketing agency. Instead, we're a team of dedicated experts blending innovative thinking with proven methodologies. With a focus on processes that work and a talented squad that's second to none, we're here to transform your brand's vision into measurable success.</p>
            <div className='md:pt-12 max-[876px]:pb-5'>
                <Button>Let's talk</Button>
            </div>
        </div>
        <div className='border-b-4 border-solid border-black w-[90%] mx-auto '>
            <img src={Dashboard} alt="dashboardImage" className='w-[1296px]  md:-mt-[180px] max-[876px]:-mt-[100px]'/>
        </div>
    </div>
    {/* Banner end */}
    <div className='w-full py-16'>
      {sectionsData.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 w-[80%]'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={section.image} alt='/' />
        </div>
      ))}
      {sectionsData1.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 w-[80%]'>
          <img className='w-[500px] mx-auto my-4 max-[876px]:order-1 md:order-none' src={section.image} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
        </div>
      ))}
      {sectionsData2.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 w-[80%]'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={section.image} alt='/' />
        </div>
      ))}
      {sectionsData3.map((section, index) => (
        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 w-[80%]'>
          <img className='w-[500px] mx-auto my-4 max-[876px]:order-1 md:order-none' src={section.image} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-[57px] md:leading-none sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-3xl sm:text-xl text-base font-medium pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-medium'>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='w-full py-16'>
    <div className='max-w-[1240px] items-center justify-center text-center mx-auto w-[70%]'>
      <h2 className='md:text-[57px] md:leading-tight  max-[867px]:text-2xl text-2xl text-black font-black pb-4'>LET'S SCALE YOUR GROWTHZ STORY TODAY</h2>
      <div className=''>
      <Button>GET IN TOUCH</Button>
      </div>
    </div>
    </div>
    <Clients />
    <Testinomial />
    <div className='w-full py-16'>
      <div className='max-w-[1240px] mx-auto w-[90%]  max-[876px]:w-[80%]'>
      <h1 className='py-16 text-[#6E18F3] md:text-[57px] font-black leading-none  max-[876px]:text-3xl'>DISCOVER OUR <br />PROCESS</h1>
      {process.map((section, index) => (
        <div key={index} className='mx-auto mb-10'>
          <div className='flex flex-col justify-center border-b-4 border-solid border-[#f3be18]'>
            <h1 className='md:text-4xl  sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-lg sm:text-sm text-base font-semibold pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal pb-8'>{section.description}</p>
          </div>
        </div>
      ))}
      <Button>LET'S TALK</Button>
    </div>
    </div>
    <Maximize />
    <Footer />
    </>
  )
}

export default MainPage
