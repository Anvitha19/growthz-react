import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testinomial () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 678, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='py-24 ml-16'>
            <h1 className='py-16 text-[#6E18F3] md:text-[57px] font-black leading-none sm:text-5xl'>WHAT OUR <br/>CLIENT SAYS</h1>
            <Slider {...settings}>
                {clients.map((client, index) => ( 
                    <div key={index} className='max-w-[1300px] mx-auto grid md:grid-cols-2 md:columns-2 py-16 sm:w-10/12 sm:pr-10 sm:py-0 md:border-r-2 md:border-solid md:border-black pl-6 sm:border-r-0'>
                        <img src={client.image} alt='/' className='w-[274px] h-[281px]'/>
                        <div>
                            <h1 className='text-2xl font-bold pb-4'>{client.title}</h1>
                            <p className='text-base font-medium pb-6'>{client.review}</p>
                            <h4 className='text-lg font-extrabold'>{client.name}</h4>
                            <p className='text-base font medium'>{client.profession}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

const clients = [
    {
        title:"Top 3 Rankings Achieved",
        image:"https://www.syoft.com/growthz/assets/img/index-swiper-1.png",
        review:"Growthz is an incredible partner for achieving top rankings on search and social platforms. Their expertise in SEO and social media has helped our brand secure verified visibility, with consistent top 3 rankings. Thank you, Growthz, for your exceptional skills",
        name:"Maya Patel ",
        profession:" Project Manager ",
    },
    {
        title:"Top 3 Rankings Achieved",
        image:"https://www.syoft.com/growthz/assets/img/index-swiper-1.png",
        review:"Growthz is an incredible partner for achieving top rankings on search and social platforms. Their expertise in SEO and social media has helped our brand secure verified visibility, with consistent top 3 rankings. Thank you, Growthz, for your exceptional skills",
        name:"Martha Brown",
        profession:" Project Manager ",
    }
]

export default Testinomial;
