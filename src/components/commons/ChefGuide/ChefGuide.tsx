import chefGuide from '~/assets/images/chef_guide.png'
import aurthor from '~/assets/icons/john-smith.svg'

export const ChefGuide = () => {
  return (
    <div className='bg-white items-center mx-8 justify-center mb-7 pt-[80px]'>
      <div className='block mb-6'>
        <h1 className='font-primary-600 text-center text-[50px] font-bold text-primary'>
          Full Guide to Becoming a Professional Chef
        </h1>

        <div className='flex items-center justify-center mt-4'>
          <img src={aurthor} alt='Author' className='w-10 h-10 rounded-full' />
          <div className='ml-3 flex items-center gap-20'>
            <p className='text-gray-700 font-primary-500'>John Smith</p>
            <p className='text-sm font-primary-500 text-gray-500'>15 March 2022</p>
          </div>
        </div>

        <p className='flex mt-4 text-gray-600 font-primary-500 justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at
          dignissim turpis. Ut vehicula sed velit a faucibus.
        </p>
      </div>

      <div className=''>
        <img src={chefGuide} alt='Chef in the kitchen' className='w-full object-cover rounded-xl' />
      </div>
    </div>
  )
}
