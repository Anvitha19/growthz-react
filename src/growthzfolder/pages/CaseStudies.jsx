import React from 'react'
import casestudy1 from "../../assets/case-study-1.png";
import casestudy2 from "../../assets/case-study-2.png";
import casestudy3 from "../../assets/case-study-3.png";
import casestudy4 from "../../assets/case-study-4.png";
import HeroFooter from "../../assets/hero-footer.png"
import Header from '../components/MainPage/Header';
import Footer from '../components/MainPage/Footer';

const caseStudy = [
    {
        img: casestudy1,
        title: "Kalamandir Royale",
    },
    {
        img: casestudy2,
        title: "Nira Finance",
    },
    {
        img: casestudy3,
        title: "House of Ashwath",
    },
    {
        img: casestudy4,
        title: "Sarvoham Animal Foundation",
    }
]

const CaseStudies = () => {
  return (
    <>
    <Header />
    {/* Banner start */}
    <div className='font-work md:py-10 w-full max-[876px]:py-8 bg-[#6E18F3]'>
        <div className='relative md:py-[80px] max-[876px]:pt-[80px] max-[876px]:pb-[50px] mx-auto flex-auto items-center justify-center w-[90%]'>
            <h1 className='text-white md:text-[88px] md:leading-[6.25rem] font-black max-[876px]:text-[32px] md:w-[70%]'>Few of Our Recent Works</h1>
        </div>
    </div>
    {/* Banner end */}
    <div className='font-work w-full md:py-10 max-[876px]:px-5 max-[876px]:pt-10'>
  ` <div className='max-w-[1240px] mx-auto flex-auto grid md:grid-cols-2 justify-between'>
    {caseStudy.map((section, index) => (
      <div key={index} className='flex flex-col justify-center items-center max-[876px]:pb-5 pt-5'>
        <a href="/CaseStudyInner">
        <img src={section.img} alt="Case-Study" className='w-auto h-auto max-[876px]:pb-8'/>
        <h1 className='md:text-3xl md:leading-[53px] max-[876px]:hidden text-xl font-medium py-2 items-left hover:text-[#F3BE18]'>{section.title}</h1>
        </a>
      </div>
    ))}
  </div>
</div>
<div className='font-work w-full py-16'>
      <div className="bg-[#6E18F3] mx-auto md:pt-8">
        <div className='items-center text-center justify-center mx-auto md:w-[60%] max-[876px]:w-[70%] md:relative md:z-50'>
            <h2 className='text-white md:text-[57px] sm:text-5xl font-black italic py-9 max-[876px]:text-[25px] leading-[34px]'>Let's Scale Your Growthz Story Today!</h2>
            <div className='pb-8'>
              <a href='/ContactUS'>
              <button className='bg-white text-sm font-black text-black py-2.5 px-8 rounded-2xl hover:bg-[#F3BE18] duration:300'>
                GET IN TOUCH
            </button>
              </a>
            </div>
        </div>
        <div className='w-auto md:relative md:z-0'>
        <img src={HeroFooter} alt="/" className='max-[1024px]:hidden -mt-[240px] cursor-pointer duration-300' href="https://drive.google.com/drive/folders/1RwphnPH1Qoi0VIAFu16zNc8PNE6euGdN?usp=sharing"/>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default CaseStudies
