import { memo } from 'react'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { API_URL } from '~/utils'

interface TastyRecipeCardProps {
  recipe: IRecipe
}

export const TastyRecipeCard = memo(({ recipe }: TastyRecipeCardProps) => {
  return (
    <div className='flex items-center gap-4 mb-4'>
      <img
        src={recipe.preview.startsWith('https') ? recipe.preview : API_URL + recipe.preview}
        className='w-[180px] h-[180px] object-cover'
        alt=''
      />
      <div>
        <h4 className='text-sm font-semibold text-gray-800'>{recipe.recipeName}</h4>
        <p className='text-xs text-gray-500'>By Author Name</p>
      </div>
    </div>
  )
})
