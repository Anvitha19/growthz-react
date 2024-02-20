import React from 'react'
import Button from './Button';

const sectionsData = [
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

const Process = () => {
  return (
    <section className='pb-20'>
      <div className='w-full ml-28 pb-10'>
      <h1 className='py-16 text-[#6E18F3] md:text-[57px] font-black leading-none sm:text-5xl'>DISCOVER OUR <br />PROCESS</h1>
      {sectionsData.map((section, index) => (
        <div key={index} className=' w-10/12 mb-10'>
          <div className='flex flex-col justify-center border-b-4 border-solid border-[#f3be18]'>
            <h1 className='md:text-4xl  sm:text-3xl text-2xl font-black py-2'>{section.title}</h1>
            <h4 className='md:text-lg sm:text-sm text-base font-semibold pb-2'>{section.subTitle}</h4>
            <p className='text-[#1A1E21] md:text-lg sm:text-sm font-normal pb-8'>{section.description}</p>
          </div>
        </div>
      ))}
      <Button>LET'S TALK</Button>
    </div>
    </section>
  )
}

export default Process
