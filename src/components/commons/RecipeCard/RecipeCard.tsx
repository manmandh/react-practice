import { useNavigate } from 'react-router-dom'
import forkKnife from '~/assets/icons/forkKnife.svg'
import HeartInactiveIcon from '~/assets/icons/heart-inactive.svg'
import HeartIcon from '~/assets/icons/heart.svg'
import timer from '~/assets/icons/timer.svg'
import { IRecipeCardProps } from '~/commons/interfaces/IRecipeCardProps'
import { API_URL } from '~/utils'

const RecipeCard: React.FC<IRecipeCardProps> = ({ recipe, backgroundColor, isFavorite = false }) => {
  const navigation = useNavigate()

  return (
    <div
      onClick={() => navigation(`/recipe-details/${recipe.recipeId}`)}
      className={`cursor-pointer p-[16px] rounded-[30px] duration-300 hover:scale-105 relative flex flex-col ${backgroundColor ? 'bg-gradient-to-b from-transparent-blue to-light-blue' : ''}`}
    >
      <div className='absolute right-[32px] top-[32px] size-[48px] bg-white inline-flex items-center justify-center rounded-full cursor-pointer'>
        <img className='aspect-square' src={isFavorite ? HeartIcon : HeartInactiveIcon} alt='heart icon' />
      </div>
      <img
        src={recipe.preview.startsWith('https') ? recipe.preview : API_URL + recipe.preview}
        alt={recipe.recipeName}
        className='w-full object-cover h-[320px] rounded-[30px]'
      />
      <div className='px-4 flex flex-col flex-1'>
        <h3 className='text-[24px] font-primary-600 mt-4 pb-4'>
          <span className='line-clamp-2'>{recipe.recipeName}</span>
        </h3>
        <div className='flex items-end text-gray-700 gap-6 flex-1 mt-auto'>
          <div className='flex items-center text-sm font-primary-500'>
            <img src={timer} alt='timer icon' className='size-[24px] mr-2' />
            <span className='text-[14px]'>{recipe.cookTime} Minutes</span>
          </div>
          <div className='flex items-center text-sm font-primary-500'>
            <img src={forkKnife} alt='category icon' className='size-[24px] mr-2' />
            <span className='text-[14px]'>{recipe.recipeType}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { RecipeCard }
