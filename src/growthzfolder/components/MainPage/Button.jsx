import React from 'react'

const Button = (props) => {
  return (
    <button className='font-work bg-[#6E18F3] text-base font-black text-white py-3 px-9 rounded-2xl hover:bg-black duration:300'>
    {props.children}
    </button>
  )
}

export default Button
