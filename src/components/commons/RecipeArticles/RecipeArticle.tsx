import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { API_URL } from '~/utils'

interface RecipeArticleProps {
  recipe: IRecipe
  authorName: string
}

export const RecipeArticle = memo(({ recipe, authorName }: RecipeArticleProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        navigate(`/recipe-details/${recipe.recipeId}`)
      }}
      className='flex gap-6 items-center cursor-pointer'
    >
      <img
        src={recipe.preview.startsWith('https') ? recipe.preview : API_URL + recipe.preview}
        alt=''
        className='w-[180px] h-[120px] rounded-[20px] object-cover'
      />
      <div className='flex flex-col flex-1 gap-4'>
        <p>
          <span className='line-clamp-2 text-[20px] font-semibold'>{recipe.recipeName}</span>
        </p>
        <span className='text-[#00000099] text-[14px] font-medium'>By {authorName}</span>
      </div>
    </div>
  )
})
