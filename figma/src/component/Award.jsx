import React from 'react'

export const Award = () => {
  return (
    <section className='bg-[#18225A] w-full text-center justify-center capitalize py-20 font-sans'>
        <h2 className='text-white m-0 font-bold text-3xl tracking-tighter'>an award-winning mobile app development company</h2>
        <h3 className='text-white font-normal text-2xl tracking-tighter pb-5'>leverage our industry expertise to create company delivery mibile app for your business</h3>
           
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  items-center justify-center gap-5 px-4'>
            <div className=' bg-[#FFFFFF] p-3 text-start rounded-2xl mx-4'>
                <div className='flex'>
                    <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645511/Mask_group_j43i9m.png" alt="" className='h-[20px] pt-5'/>
                <h3 className='font-semibold px-2'>4.9/5</h3>
                </div>
                <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645829/34cdab2f5c45458a06225af3546f76aea894cab3_jncblw.png" alt=""  className='h-[20px] '/>
          <p className='text-sm'>reviewed by goodfirms with 4.9/5 rating based upon client reviews</p>
            </div>
           

            <div className=' bg-[#FFFFFF] p-3 text-start rounded-2xl mx-4'>
                <div className='flex'>
                    <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645511/Mask_group_j43i9m.png" alt="" className='h-[20px] pt-5'/>
                    <h3 className='font-semibold px-2'>4.0/5</h3>
                </div>
                <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773647336/041d4bef9125d551a26658d4f30a139e7cec32d6_gxzmsc.png" alt=""  className='h-[20px] '/>
                <p className='text-sm'>platinum certified with a 4.0/5 ratings. interviewed by appfutura</p>
            </div>

            <div className=' bg-[#FFFFFF] p-3 text-start rounded-2xl mx-4'>
                <div className='flex'>
                    <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645511/Mask_group_j43i9m.png" alt="" className='h-[20px] pt-5'/>
                    <h3 className='font-semibold px-2'>4.6/5</h3>
                </div>
                <img src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773647548/ee282aa25d2b1ff6436b6b5367e16f2c8348a820_nfwwlw.png" alt=""  className='h-[20px] '/>
                <p className='text-sm'>with astoundings 4.6/5 rating we're amongest the top comapnies on upwork</p>
            </div>
            <div></div>
           </div>
    </section>
  )
}
