import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';
import Img1 from "../../../assets/testinomial-img-1.png";
import Img2 from "../../../assets/testinomial-img-2.png";
import Quote from "../../../assets/quote.svg"


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
        <div className='w-full py-16'>
            <div className='max-w-[1240px] mx-auto w-[90%]  max-[876px]:w-[80%]'>
            <h1 className='py-16 text-[#6E18F3] md:text-[57px] font-black leading-none max-[876px]:text-3xl'>WHAT OUR <br/>CLIENT SAYS</h1>
            <Slider {...settings}>
                {clients.map((client, index) => ( 
                    <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:columns-2 md:border-r-2 md:border-solid md:border-black md:pl-10 sm:border-r-0'>
                        <img src={Quote} alt="/" className='w-[60px] -mb-[10px]'/>
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
            <div className='py-16 mx-auto'>
            <Button>KNOW MORE</Button>
            </div>
        </div>
        </div>
        
    )
}

const clients = [
    {
        title:"Top 3 Rankings Achieved",
        image:Img1,
        review:"Growthz is an incredible partner for achieving top rankings on search and social platforms. Their expertise in SEO and social media has helped our brand secure verified visibility, with consistent top 3 rankings. Thank you, Growthz, for your exceptional skills",
        name:"Maya Patel ",
        profession:" Project Manager ",
    },
    {
        title:"Top 3 Rankings Achieved",
        image:Img2,
        review:"Growthz is an incredible partner for achieving top rankings on search and social platforms. Their expertise in SEO and social media has helped our brand secure verified visibility, with consistent top 3 rankings. Thank you, Growthz, for your exceptional skills",
        name:"Martha Brown",
        profession:" Project Manager ",
    }
]

export default Testinomial;
