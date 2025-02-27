import { MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { IRecipe } from '~/commons/interfaces/IRecipe'
import { ErrorResponse } from '~/commons/models'
import Loading from '~/components/elements/Loading/Loading'
import { useAuth } from '~/hooks'
import { deleteRecipeById, getRecipesByAuthorId } from '~/services'
import { API_URL } from '~/utils'

export default function RecipePage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [fetching, setFetching] = useState(true)
  const [fetchError, setFetchError] = useState(false)
  const [recipeIdDeleting, setRecipeIdDeleting] = useState('')

  const navigate = useNavigate()
  const { user } = useAuth()

  const handleRowClick = (recipeId: string) => {
    navigate(`/admin/create-recipe?recipeId=${recipeId}`)
  }

  const handleDelete = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, recipeId: string) => {
    e.stopPropagation()
    setRecipeIdDeleting(recipeId)
    const response = await deleteRecipeById(recipeId)
    if (response instanceof ErrorResponse) {
      toast.error(response.error)
    } else {
      toast.success('Recipe deleted successfully')
      setRecipes(recipes.filter((recipe) => recipe.recipeId !== recipeId))
    }
    setRecipeIdDeleting('')
  }

  const getRecipes = async (id: string) => {
    const response = await getRecipesByAuthorId(id)
    if (response instanceof ErrorResponse) {
      toast.error(response.error)
      setFetchError(true)
    } else {
      setRecipes(response.data)
      setFetchError(false)
    }

    setFetching(false)
  }

  const handleRetry = async () => {
    if (!user) return
    setFetching(true)

    await getRecipes(user.id)
  }

  useEffect(() => {
    ;(async () => {
      if (!user) return

      await getRecipes(user.id)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-[32px] font-bold'>Recipes</h1>
        <button
          onClick={() => navigate('/admin/create-recipe')}
          className='bg-primary rounded-2xl shadow-xl text-white font-semibold py-[16px] px-[24px] duration-300 hover:opacity-70'
        >
          Create Recipe
        </button>
      </div>
      <div className='h-[80dvh] overflow-auto mt-10'>
        <table className='w-full border rounded-lg'>
          <thead className='border-b'>
            <tr>
              <th className='py-4 px-8 border'>Name</th>
              <th className='py-4 px-8 border'>Preview</th>
              <th className='py-4 px-8 border'>Type</th>
              <th className='py-4 px-8 border'>Description</th>
              <th className='py-4 px-8 border'>Pushlished</th>
              <th className='py-4 px-8 border'>Prepare time</th>
              <th className='py-4 px-8 border'>Cook time</th>
              <th className='py-4 px-8 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!recipes.length && (
              <tr>
                <td colSpan={8} className='text-center font-bold py-8'>
                  {fetching ? (
                    <div className='w-full flex justify-center'>
                      <Loading color='inherit' stroke={3} />
                    </div>
                  ) : (
                    'No Data'
                  )}
                </td>
              </tr>
            )}
            {fetchError && (
              <tr>
                <td colSpan={8} className='text-center font-bold py-8'>
                  <button
                    onClick={handleRetry}
                    className='bg-primary rounded-2xl shadow-xl text-white font-semibold py-[16px] px-[24px] duration-300 hover:opacity-70'
                  >
                    Retry
                  </button>
                </td>
              </tr>
            )}
            {recipes.map((recipe) => (
              <tr
                onClick={() => handleRowClick(recipe.recipeId)}
                className='duration-300 hover:bg-[#222e3c] cursor-pointer'
                key={recipe.recipeId}
              >
                <td className='py-4 px-8 border'>
                  <span className='line-clamp-2'>{recipe.recipeName}</span>
                </td>
                <td className='py-4 px-8 border'>
                  <img
                    src={recipe.preview.startsWith('https') ? recipe.preview : `${API_URL}${recipe.preview}`}
                    alt={recipe.recipeName}
                    className='size-16 mx-auto object-cover rounded-lg'
                    loading='lazy'
                  />
                </td>
                <td className='py-4 px-8 border'>
                  <span className='line-clamp-1'>{recipe.recipeType}</span>
                </td>
                <td className='py-4 px-8 border'>
                  <span className='line-clamp-2'>{recipe.desc}</span>
                </td>
                <td className='py-4 px-8 border'>
                  <span className='line-clamp-2 text-center'>{new Date(1740030263111).toLocaleDateString()}</span>
                </td>
                <td className='py-4 px-8 border'>
                  <span className='line-clamp-2 text-center'>{recipe.prepareTime} minutes</span>
                </td>
                <td className='py-4 px-8 border'>
                  <span className='line-clamp-2 text-center'>{recipe.cookTime} minutes</span>
                </td>
                <td className='py-4 px-8 border'>
                  <button
                    onClick={(e) => handleDelete(e, recipe.recipeId)}
                    className='bg-primary w-full inline-flex items-center justify-center gap-4 rounded-2xl shadow-xl text-white font-semibold py-[16px] px-[24px] duration-300 hover:opacity-70'
                  >
                    {recipeIdDeleting === recipe.recipeId ? <Loading color='inherit' stroke={3} /> : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
