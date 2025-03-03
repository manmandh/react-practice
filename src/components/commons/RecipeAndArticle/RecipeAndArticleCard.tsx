import { memo } from 'react'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { API_URL } from '~/utils'
import avtUser from '~/assets/icons/craig_love.svg'

interface RecipeAndArticleCardProps {
  recipe: IRecipe
}

export const RecipeAndArticleCard = memo(({ recipe }: RecipeAndArticleCardProps) => {
  return (
    <div className='flex items-center gap-4'>
      <img
        className='w-[360px] h-[250px] object-cover rounded-[20px]'
        src={recipe.preview.startsWith('https') ? recipe.preview : API_URL + recipe.preview}
        alt=''
      />
      <div className='justify-between flex flex-col'>
        <h2 className='text-[24px] font-semibold text-gray-800'>{recipe.recipeName}</h2>
        <p className='text-[16px] text-gray-600 line-clamp-3'>{recipe.desc}</p>
        <div className='flex items-center gap-12'>
          <div className='flex items-center gap-2'>
            <img className='object-cover' src={avtUser} alt='icon' />
            <p className='text-[16px] text-primary font-bold'>Robert Fox</p>
          </div>
          <p className='text-[14px] text-gray-500'>{new Date(recipe.pushlishDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
})
