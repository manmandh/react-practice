import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import ForkKNife from '~/assets/icons/forkKnife.svg'
import PrinterIcon from '~/assets/icons/printer.svg'
import ShareIcon from '~/assets/icons/share.svg'
import ClockIcon from '~/assets/icons/timer.svg'
import { Footer } from '~/components/commons/Footer/Footer'
import { Header } from '~/components/commons/Header/Header'

import { useEffect, useState } from 'react'
import { IRecipeWithAuthor } from '~/commons/interfaces/IRecipe'
import { ErrorResponse } from '~/commons/models'
import { NutritionInformation } from '~/components/commons/NutritionInformation/NutritionInformation'
import { RecipeArticles } from '~/components/commons/RecipeArticles/RecipeArticles'
import { RecipeDetailBanner } from '~/components/commons/RecipeDetailBanner/RecipeDetailBanner'
import { RecipeDirection } from '~/components/commons/RecipeDirection/RecipeDirection'
import Loading from '~/components/elements/Loading/Loading'
import { getRecipeWithAuthorById } from '~/services'
import { API_URL } from '~/utils'

export default function RecipeDetailPage() {
  const [recipe, setRecipe] = useState<IRecipeWithAuthor>()

  const { recipeId } = useParams<{ recipeId: string }>()
  const navigate = useNavigate()

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(location.href)
    toast.success('Copied URL to clipboard!', {
      position: 'bottom-right',
      autoClose: 2000
    })
  }

  useEffect(() => {
    ;(async () => {
      if (!recipeId) return

      setRecipe(undefined)
      const response = await getRecipeWithAuthorById(recipeId)
      if (response instanceof ErrorResponse) {
        navigate('/not-found', { replace: true })
      } else {
        setRecipe(response.data)
      }
    })()
  }, [recipeId, navigate])

  return recipe ? (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <div className='px-[10px] md:px-[20px] lg:px-[50px] xl:px-[80px] mt-[80px]'>
        <div className='flex flex-col gap-8 xl:flex-row xl:gap-0 justify-between items-center'>
          <div>
            <h1 className='text-[32px] lg:text-[48px] xl:text-[64px] font-bold text-center xl:text-left'>
              {recipe.recipeName}
            </h1>
            <div className='flex flex-col justify-center md:flex-row xl:justify-start pt-[48px]'>
              <div className='flex gap-[16px] justify-center border-b py-[10px] border-[#0000001A] pr-[10px] md:justify-start md:py-0 md:border-b-0 md:border-r lg:pr-[60px]'>
                <img src={recipe.author.avatar} alt='avatar' className='size-[50px] rounded-full object-cover' />
                <div className='flex flex-col'>
                  <span className='font-bold text-[16px]'>{recipe.author.name}</span>
                  <span className='text-[14px] text-[#00000099]'>
                    {new Date(recipe.author.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className='flex gap-[16px] items-center justify-center border-[#0000001A] border-b py-[10px] md:border-b-0 md:justify-start md:border-r md:py-0 px-[10px] lg:px-[32px]'>
                <img src={ClockIcon} alt='timer icon' />
                <div className='flex flex-col justify-between'>
                  <span className='text-[12px] font-bold'>PREP TIME</span>
                  <span className='text-[14px] text-[#00000099]'>{recipe.prepareTime} Minutes</span>
                </div>
              </div>
              <div className='flex gap-[16px] items-center justify-center border-[#0000001A] border-b py-[10px] md:border-b-0 md:justify-start md:border-r md:py-0 px-[10px] lg:px-[32px]'>
                <img src={ClockIcon} alt='timer icon' />
                <div className='flex flex-col justify-between'>
                  <span className='text-[12px] font-bold'>COOK TIME</span>
                  <span className='text-[14px] text-[#00000099]'>{recipe.cookTime} Minutes</span>
                </div>
              </div>
              <div className='flex gap-[16px] items-center justify-center border-[#0000001A] border-b py-[10px] md:border-b-0 md:justify-start md:border-r md:py-0 px-[10px] lg:px-[32px]'>
                <img src={ForkKNife} alt='timer icon' />
                <span className='text-[14px] text-[#00000099]'>{recipe.recipeType}</span>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <div className='flex flex-col gap-[16px] items-center'>
              <span
                onClick={window.print}
                className='p-[28px] aspect-square rounded-full gap-4 bg-bgc-banner cursor-pointer duration-300 hover:opacity-80'
              >
                <img className='size-6' src={PrinterIcon} alt='printer icon' />
              </span>
              <span className='text-[12px]'>PRINT</span>
            </div>
            <div className='flex flex-col gap-[16px] items-center'>
              <span
                onClick={handleCopyToClipboard}
                className='p-[28px] aspect-square rounded-full gap-4 bg-bgc-banner cursor-pointer duration-300 hover:opacity-80'
              >
                <img className='size-6' src={ShareIcon} alt='printer icon' />
              </span>
              <span className='text-[12px]'>SHARE</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center xl:flex-row justify-between gap-8 pt-[60px]'>
          <img
            src={recipe.preview.startsWith('https') ? recipe.preview : API_URL + recipe.preview}
            alt='preview image'
            className='flex-1 w-full rounded-[30px] object-cover'
          />
          <NutritionInformation nutritionInfo={recipe.nutritionInfo} description={recipe.desc} />
        </div>

        <p className='py-[80px] text-[#00000099]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='flex-1'>
            <RecipeDirection directions={recipe.directions} />
          </div>
          <RecipeArticles />
        </div>

        <RecipeDetailBanner />

        <div className='pt-[160px]'>
          <p className='text-[36px] font-semibold text-center pb-[80px]'>You may like these recipe too</p>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Loading size={50} stroke={5} />
    </div>
  )
}
