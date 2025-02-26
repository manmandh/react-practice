import { memo } from 'react'

import KissSalad from '~/assets/images/kiss-salad.png'
import PhotoPlate from '~/assets/images/photo-plate.png'

export const RecipeDetailBanner = memo(() => {
  return (
    <div className='mt-[160px] py-[24px] md:py-[32px] lg:py-[54px] xl:py-[80px] bg-bgc-banner rounded-[60px] flex flex-col items-center justify-center relative overflow-hidden'>
      <img
        className='absolute bottom-0 left-0 hidden md:block w-[150px] md:w-[200px] lg:w-[250px]'
        src={KissSalad}
        alt='kiss salad'
      />
      <img
        className='absolute bottom-0 right-0 hidden md:block w-[150px] md:w-[200px] lg:w-[250px]'
        src={PhotoPlate}
        alt='photo plate'
      />

      <p className='text-[20px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-center font-semibold pb-6'>
        Deliciousness to your inbox
      </p>
      <p className='text-center pb-[64px] max-w-[620px] text-[12px] lg:text-[14px] xl:text-[16px] text-[#00000099]'>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqut enim ad minim
      </p>
      <div className='py-[10px] pr-[10px] pl-4 lg:pl-6 xl:pl-8 bg-white rounded-[24px] max-w-[480px] w-full flex gap-4'>
        <input type='text' placeholder='Your email address...' className='outline-none bg-transparent flex-1' />
        <button className='px-[45px] py-5 bg-primary text-white text-[10px] md:text-[12px] xl:text-[14px] font-bold rounded-[16px] duration-300 hover:bg-infor'>
          Subcribe
        </button>
      </div>
    </div>
  )
})
