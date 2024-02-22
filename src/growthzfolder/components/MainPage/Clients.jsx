import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zepul from "../../../assets/zepul.png";
import Mps from "../../../assets/mps.png";
import WiseLearner from "../../../assets/wise-learner.png";
import Lenspick from "../../../assets/lenspick.png";
import Kalamandir from "../../../assets/kalamandir.png";
import Hoa from "../../../assets/hoa.png";
import Worke from "../../../assets/worke.png";
import Eazyrooms from "../../../assets/eazyrooms.png"


function Clients  () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
          breakpoint: 678, // Adjust breakpoint as needed
          settings: {
              slidesToShow: 2,
          }
      }
  ]
  };
  return (
    <div className='w-full py-16 '>
        <div className=' bg-[#F3BE18] mx-auto'>
        <h1 className='md:text-[57px] md:ml-16 font-black py-5 uppercase ml-8 max-[876px]:text-[24px]'>
            Our Clients
        </h1>
        <Slider {...settings}>
                {data.map((data, index) => ( 
                  <div className='mx-auto'> 
                    <div key={index} className='max-w-[800px] mx-auto'>
                        <img className='md:w-[285px] md:h-[155px] sm:w-[150px]' src={data.img} alt='/'/>
                    </div>
                  </div>
                ))}
        </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    img: Zepul
  },
  {
    img: Mps
  },
  {
    img: WiseLearner
  },
  {
    img: Lenspick
  },
  {
    img: Kalamandir
  },
  {
    img: Hoa
  },
  {
    img: Worke
  },
  {
    img: Eazyrooms
  },
];

export default Clients


