import React from 'react'

const Button = (props) => {
  return (
    <button className='font-sans bg-[#6E18F3] text-sm font-black text-white py-2.5 px-8 rounded-2xl hover:bg-black duration:300'>
    {props.children}
    </button>
  )
}

export default Button
