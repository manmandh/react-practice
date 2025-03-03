import { ViewRecipesButton } from '~/components/elements/Button/Button'
import healthyFood from '~/assets/images/healthy-food.png'
import { Pagination } from '~/components/elements/Pagination/Pagination'
import { useEffect, useState } from 'react'
import { getAllRecipesWithPagination } from '~/services'
import { ErrorResponse } from '~/commons/models'
import { toast } from 'react-toastify'
import { RecipeAndArticleCard } from './RecipeAndArticleCard'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { TastyRecipeCard } from './TastyRecipeCard'

export const RecipeAndArticle = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    ;(async () => {
      const response = await getAllRecipesWithPagination({})
      if (response instanceof ErrorResponse) {
        toast.error(response.error)
      } else {
        setRecipes(response.data)
      }
    })()
  }, [])

  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      <div className='mx-auto font-primary-600'>
        {/* Tittle */}
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-gray-800'>Recipe & Article</h1>
          <p className='text-gray-600 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>
        </div>

        {/* Search Bar */}
        <div className='flex mx-auto items-center bg-white p-2 rounded-[16px] shadow-lg max-w-md max-custom-500:block mb-8'>
          <input
            type='email'
            placeholder='Search article, newss or recipe'
            className='flex-grow px-4 py-2 text-sm outline-none rounded-l-full'
          />
          <ViewRecipesButton showIcon={false}>Search</ViewRecipesButton>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Recipe Posts */}
          <div className='col-span-2 space-y-6'>
            {recipes.map((recipe) => (
              <RecipeAndArticleCard key={recipe.recipeId} recipe={recipe} />
            ))}
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Tasty Recipes */}
            <div>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Tasty Recipes</h3>
              {recipes.slice(0, 5).map((recipe) => (
                <TastyRecipeCard recipe={recipe} />
              ))}
            </div>

            {/* Reminder */}
            <div className='absolute bg-green-400 w-[400px] h-[400px] rounded-lg text-center'>
              <img
                src={healthyFood}
                alt='Healthy food reminder'
                className='absolute inset-0 w-full h-full object-cover rounded-lg'
              />
              <div className='relative transform'>
                <p className='text-lg text-center font-bold text-white'>Don't forget to eat healthy food!</p>
                <p className='text-sm text-white top-0'>www.foodiehub.com</p>
              </div>
            </div>
          </div>
        </div>
        {/*Pagination*/}
        <div className='flex justify-center mt-10'>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  )
}
