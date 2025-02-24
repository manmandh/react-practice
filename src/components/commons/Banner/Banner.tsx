import hotRecipes from '~/assets/icons/hot-recipe.svg'
import timer from '~/assets/icons/timer.svg'
import forkKnife from '~/assets/icons/forkKnife.svg'
import johnSmith from '~/assets/icons/john-smith.svg'
import bakedSauce from '~/assets/images/baked-chicken-sauce.jpg'
import { ViewRecipesButton } from '~/components/elements/Button/Button'

export const Banner = () => {
  return (
    <>
      <div className='flex bg-white px-4 sm:px-8 w-full font-primary-600'>
        <div className='bg-bgc-banner rounded-xl flex flex-col custom-900:flex-row w-full'>
          {/* Left section */}
          <div className='flex p-6 sm:p-[50px] flex-col justify-between space-y-4 w-full sm:w-1/2'>
            <div className='flex bg-white w-[120px] custom-900:w-[156px] h-[40px] custom-900:h-[45px] rounded-[20px] custom-900:rounded-[30px] p-[10px] custom-900:p-[20px] items-center space-x-2'>
              <img src={hotRecipes} alt='Hot Recipes' className='w-5 custom-900:w-6 h-5 custom-900:h-6' />
              <span className='text-xs custom-900:text-sm font-bold text-primary'>Hot Recipes</span>
            </div>
            <h1 className='text-[24px] font-bold md:text-[36px] lg:text-[50px] xl:text-[64px]'>
              Spicy delicious chicken wings
            </h1>
            <p className='opacity-60 text-sm sm:text-base leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className='flex space-x-4 custom-900:space-x-6'>
              <div className='flex py-[6px] px-[12px] w-[120px] custom-900:w-[139px] h-[35px] custom-900:h-[40px] bg-bgc-opacity items-center rounded-[20px] sm:rounded-[30px] space-x-2'>
                <img src={timer} alt='timer' className='w-4 custom-900:w-5 h-4 sm:h-5' />
                <span className='text-xs custom-900:text-sm opacity-60'>30 Minutes</span>
              </div>
              <div className='flex py-[6px] px-[12px] w-[120px] custom-900:w-[139px] h-[35px] custom-900:h-[40px] bg-bgc-opacity items-center rounded-[20px] sm:rounded-[30px] space-x-2'>
                <img src={forkKnife} alt='fork-knife' className='w-4 sm:w-5 h-4 sm:h-5' />
                <span className='text-xs custom-900:text-sm opacity-60'>Chicken</span>
              </div>
            </div>
            <div className='flex flex-row max-custom-940:flex-col max-custom-940:gap-5 max-custom-940:items-start gap-0 items-center justify-between pt-[60px] custom-900:pt-[84px]'>
              <div className='flex items-center space-x-1'>
                <img src={johnSmith} alt='John Smith' className='w-8 sm:w-10 h-8 sm:h-10 rounded-full' />
                <div>
                  <p className='text-xs sm:text-sm text-primary'>John Smith</p>
                  <p className='text-xs opacity-60'>15 March 2022</p>
                </div>
              </div>
              <ViewRecipesButton>View Recipes</ViewRecipesButton>
            </div>
          </div>

          {/* Right section */}
          <div className='w-full custom-900:w-1/2 flex justify-center custom-900:justify-end h-full'>
            <img
              src={bakedSauce}
              alt='Baked Chicken with Sauce'
              className='rounded-lg shadow-lg w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </>
  )
}
