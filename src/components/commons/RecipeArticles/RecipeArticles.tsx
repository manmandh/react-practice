import { memo, useEffect, useState } from 'react'
import { RecipeArticle } from './RecipeArticle'
import { useAuth } from '~/hooks'
import { getRecipesByAuthorId } from '~/services'
import { ErrorResponse } from '~/commons/models'
import { toast } from 'react-toastify'
import { IRecipe } from '~/commons/interfaces/IRecipe'

export const RecipeArticles = memo(() => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  const { user } = useAuth()

  useEffect(() => {
    ;(async () => {
      if (!user) return

      const response = await getRecipesByAuthorId(user.id)
      if (response instanceof ErrorResponse) {
        toast.error(response.error)
      } else {
        setRecipes(response.data)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='w-full lg:w-[400px]'>
      <h3 className='text-[32px] font-semibold'>Other Recipe</h3>
      <div className='flex flex-col gap-6 mt-8'>
        {recipes.slice(0, 5).map((recipe) => (
          <RecipeArticle key={recipe.recipeId} recipe={recipe} authorName={user!.name} />
        ))}
      </div>
    </div>
  )
})
