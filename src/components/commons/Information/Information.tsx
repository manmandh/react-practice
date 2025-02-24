import chef from '~/assets/images/chef.png'
import { ViewRecipesButton } from '~/components/elements/Button/Button'

export const Information = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mt-16 mx-8 pb-[240px]'>
      {/* Left section (image) */}
      <div className='md:w-1/2 md:order-2'>
        <img src={chef} alt='' className='w-full h-auto md:max-h-screen' />
      </div>

      {/* Right section (text) */}
      <div className='sm:w-1/2 sm:order-1'>
        <h2 className='text-[48px] font-primary-600 font-bold mb-6'>Everyone can be a chef in their own kitchen</h2>
        <p className='text-primary mb-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
        <ViewRecipesButton showIcon={false}>Learn more</ViewRecipesButton>
      </div>
    </div>
  )
}
