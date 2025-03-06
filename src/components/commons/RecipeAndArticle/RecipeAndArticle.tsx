import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IPagination } from '~/commons/interfaces/IPagination'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { ErrorResponse } from '~/commons/models'
import { ViewRecipesButton } from '~/components/elements/Button/Button'
import Loading from '~/components/elements/Loading/Loading'
import { Pagination } from '~/components/elements/Pagination/Pagination'
import { useDebounce } from '~/hooks/useDebounce.hooks'
import { getAllRecipesWithPagination } from '~/services'
import { RecipeAndArticleCard } from './RecipeAndArticleCard'
import { TastyRecipeCard } from './TastyRecipeCard'

const _limit = 5

export const RecipeAndArticle = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [isFetching, setIsFetching] = useState(true)
  const [search, setSearch] = useState('')
  const searchDebounce = useDebounce(search, 500)

  const [pagination, setPagination] = useState<IPagination>({ _limit, _page: 1, _totalRows: 0 })

  const handlePageChange = (_page: number) => {
    setPagination({ ...pagination, _page })
  }

  const getRecipes = useCallback(async () => {
    setIsFetching(true)
    const response = await getAllRecipesWithPagination({ search: searchDebounce, _limit, _page: pagination._page })
    if (response instanceof ErrorResponse) {
      toast.error(response.error)
    } else {
      setRecipes(response.data)
      console.log(response.pagination)
      setPagination(response.pagination)
    }
    setIsFetching(false)
  }, [pagination._page, searchDebounce])

  useEffect(() => {
    ;(async () => {
      await getRecipes()
    })()
  }, [getRecipes, searchDebounce])

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

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
            onChange={handleSearch}
            className='flex-grow px-4 py-2 text-sm outline-none rounded-l-full'
          />
          <ViewRecipesButton showIcon={false}>Search</ViewRecipesButton>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Recipe Posts */}
          <div className='col-span-2 space-y-6'>
            {isFetching ? (
              <div className='flex items-center justify-center h-[200px]'>
                <Loading stroke={3} size={20} />
              </div>
            ) : (
              recipes.map((recipe) => <RecipeAndArticleCard key={recipe.recipeId} recipe={recipe} />)
            )}
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Tasty Recipes */}
            <div>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Tasty Recipes</h3>
              {recipes.slice(0, 5).map((recipe) => (
                <TastyRecipeCard key={recipe.recipeId} recipe={recipe} />
              ))}
            </div>

            {/* Reminder */}
            {/* <div className='absolute bg-green-400 w-[400px] h-[400px] rounded-lg text-center'>
              <img
                src={healthyFood}
                alt='Healthy food reminder'
                className='absolute inset-0 w-full h-full object-cover rounded-lg'
              />
              <div className='relative transform'>
                <p className='text-lg text-center font-bold text-white'>Don't forget to eat healthy food!</p>
                <p className='text-sm text-white top-0'>www.foodiehub.com</p>
              </div>
            </div> */}
          </div>
        </div>
        {/*Pagination*/}
        {!isFetching && (
          <div className='flex justify-center mt-10'>
            <Pagination
              currentPage={pagination._page}
              totalPages={Math.ceil(pagination._totalRows / pagination._limit)}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  )
}
