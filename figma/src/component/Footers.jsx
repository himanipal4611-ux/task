import React from 'react'

export default function Footers() {
  return (
    <section className='bg-[#191919] py-10  px-10 lg:flex gap-x-80 capitalize sm:flex '>
        <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773726312/Kds_logo_white_1_ctzks0.png" alt="" 
        className='h-[60px]'/>
        <div className='lg:flex text-white gap-2 md:text-flex'>
            <p className=''>privacy and policy <span>|</span> </p>
            <p>terms of services</p>
        </div>
    </section>
  )
}
