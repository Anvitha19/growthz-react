import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Header from '../components/MainPage/Header'
import Testinomial from '../components/MainPage/Testinomial'
import Footer from '../components/MainPage/Footer'

const ContactUs = () => {
  return (
    <>
    <Header />
    {/* Banner start */}
    <div className='font-work md:py-10 w-full max-[876px]:py-8 bg-[#6E18F3]'>
        <div className='relative py-[100px] mx-auto flex-auto w-[90%] grid md:grid-cols-2'>
          <div className='max-[676px]:pb-14'>
          <h1 className='text-white md:text-[88px] md:leading-[6.25rem] font-black max-[876px]:text-[32px]'>Drop Us A Message</h1>
          <p className='text-white pt-4 text-[#1A1E21] md:text-lg font-medium sm:text-sm w-[80%]'>We're excited to work with you soon! We seek lasting relationships to help our clients unlock rapid growth at efficient economics. Tell us where you are and where you want to be. We’ll help you get there.</p>
          <ul className="list-none mb-0 mt-5 text-white pt-8">
      <li>
        <a href="tel:+919030819534" className="text-decoration-none flex items-center">
          <FaPhone className="mr-2" />
          +91 90308 19534
        </a>
      </li>
      <li>
        <a href="mailto:info@growthz.com" className="text-decoration-none flex items-center">
          <FaEnvelope className="mr-2" />
          info@growthz.com
        </a>
      </li>
    </ul>

        </div>
      <div className="bg-white md:w-[70%] px-4 py-4 rounded items-right justify-right">
      <h4 className="text-3xl font-bold mb-3">Tell Us About You!</h4>
      <form className="register-form">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 mt-4">
      <div className="col-span-full sm:col-span-12 mb-2">
        <div className="input-group mb-3">
          <input type="text" className="form-input" id="Name" required placeholder="Name" aria-label="Name" />
        </div>
      </div>
      <div className="col-span-full sm:col-span-12">
        <div className="input-group mb-3">
          <input type="text" className="form-input" id="OrganisationName" placeholder="Organisation's Name" aria-label="Organisation's Name" />
        </div>
      </div>
      <div className="col-span-full sm:col-span-12">
        <div className="input-group mb-3">
          <input type="text" className="form-input" id="phone" required placeholder="Phone Number" aria-label="Phone Number" />
        </div>
      </div>
      <div className="col-span-full sm:col-span-12">
        <div className="input-group mb-3">
          <input type="email" className="form-input" id="email" required placeholder="Email" aria-label="Email" />
        </div>
      </div>
      <div className="col-span-full sm:col-span-12">
        <div className="input-group mb-3">
          <input type="number" className="form-input" id="budget" required placeholder="Budget" aria-label="Budget" />
        </div>
      </div>
      <div className="col-span-full">
        <div className="input-group mb-3">
          <textarea className="form-input h-20" id="yourMessage" required placeholder="How can we help you?"></textarea>
        </div>
      </div>
    </div>
        <button type="submit" className='bg-[#f3be18] text-sm font-black text-black py-2.5 px-14 rounded-2xl hover:bg-black hover:text-white duration:300'>Submit</button>
      </form>
    </div>
        </div>
    </div>
    {/* Banner end */}
    <Testinomial />
    <Footer />
    </>
  )
}

export default ContactUs
