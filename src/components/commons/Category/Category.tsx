import breakFast from '~/assets/images/breakfast.png'
import vegan from '~/assets/images/vegan.png'
import meat from '~/assets/images/meat.png'
import dessert from '~/assets/images/dessert.png'
import lunch from '~/assets/images/lunch.png'
import chocolate from '~/assets/images/chocolate.png'

const images = [breakFast, vegan, meat, dessert, lunch, chocolate]

export const Category = () => {
  return (
    <div className='flex pt-[142px] flex-col gap-20 bg-white px-8 font-primary-600'>
      <div className='flex justify-between max-sm:flex-col'>
        <h2 className='text-[48px] font-[600]'>Categories</h2>
        <span className='bg-bgc-banner w-[200px] h-[60px] rounded-2xl px-[27px] py-[20px]'>
          <p className='text-[16px] font-[600] leading-normal tracking-[-0.32px] cursor-pointer'>View All Categories</p>
        </span>
      </div>
      <div className='grid grid-cols-2 max-custom-500:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10'>
        {images.map((image, index) => (
          <img
            className='cursor-pointer duration-300 hover:scale-105'
            key={index}
            src={image}
            alt={`category-${index}`}
          />
        ))}
      </div>
    </div>
  )
}
