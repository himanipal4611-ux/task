import React from 'react'

export const Portfolio = () => {
  return (
  <div className="bg-[#24204E] py-16 px-6">


    <section className=' py-[60px]  flex flex-col md:flex-row font-sans leading-tight capitalize' >
        <div  className=' lg:mx-auto mx-0 '>
            <div  className=' w-[550px]'>
                <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773640234/Group_11_tjgbdk.png" alt="" 
                className='h-[447px] w-[347px] md:w-[447px] lg:w-[447px]  justify-center items-center'/>
            </div>
        </div>
        
        <div  className='w-[550px]  mt-30 text-white mx-auto pt-15 '>
            <h2 className='font-bold text-4xl '>web application</h2>
            <p className='font-light text-xl'> assumenda aut explicabo. Maiores, nostrum aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero recusandae fuga ratione eaque pariatur! Fuga, impedit iste ullam vel rerum quisquam architecto porro ex, id itaque, nobis non placeat sequi. Deserunt, obcaecati nobis doloremque architecto nulla corrupti unde excepturi doloribus, iure explicabo quod pariatur quia esse, aspernatur facilis eaque. Ullam.</p>
            
            <div className='flex text-xl'>
                <p>view our  projecct</p>
                <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773641649/Group_3_krycrp.png" alt="" 
                className='h-[20px] pt-7 '/>
            </div>
            </div>
    </section>
     </div>
  )
}
