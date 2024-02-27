import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';
import Img1 from "../../../assets/testinomial-img-1.png";
import Img2 from "../../../assets/testinomial-img-2.png";
import Quote from "../../../assets/quote.svg";

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
        ],
        
    };

    return (
        <div className='font-work w-full md:py-16'>
            <div className='max-w-[1240px] mx-auto w-[90%]  max-[876px]:w-[80%]'>
                <h1 className='md:py-16 text-[#6E18F3] md:text-[57px] font-black leading-none max-[876px]:text-3xl max-[876px]:pt-16 max-[876px]:pb-10'>WHAT OUR <br/>CLIENT SAYS</h1>
                <Slider {...settings}>
                    {clients.map((client, index) => ( 
                        <div key={index} className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:columns-2  md:pl-5 pb-14'>
                            <img src={Quote} alt="/" className='w-[60px] -mb-[10px]'/>
                            <img src={client.image} alt='/' className='w-[274px] h-[281px]'/>
                            <div className='md:border-r-4 md:border-solid md:border-black sm:border-r-0 pr-5'>
                                <h1 className='text-2xl font-black pb-4 italic'>{client.title}</h1>
                                <p className='text-base font-medium pb-4'>{client.review}</p>
                                <h4 className='text-lg font-extrabold'>{client.name}</h4>
                                <p className='text-base font medium max-[876px]:pb-6'>{client.profession}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='py-14 mx-auto max-[876px]:text-center'>
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
    },
]

export default Testinomial;
