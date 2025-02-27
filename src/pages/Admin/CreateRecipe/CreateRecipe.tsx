import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { IRecipeDirection } from '~/commons/interfaces/IRecipe'
import { ErrorResponse } from '~/commons/models'
import Loading from '~/components/elements/Loading/Loading'
import { useAuth } from '~/hooks'
import { createRecipe, getRecipeById, updateRecipeById } from '~/services'
import { RecipeDirections } from './RecipeDirections'

const schema = z.object({
  recipeName: z.string().nonempty('Require name'),
  prepareTime: z.preprocess((val) => Number(val) || 0, z.number().nonnegative()),
  cookTime: z.preprocess((val) => Number(val) || 0, z.number().nonnegative()),
  recipeType: z.string().nonempty(),
  desc: z.string().nonempty(),
  preview: z.string().nonempty(),
  nutritionInfo: z.object({
    calories: z.preprocess((val) => Number(val) || 0, z.number().nonnegative()),
    totalFat: z.preprocess((val) => Number(val) || 0, z.number().nonnegative()),
    protein: z.preprocess((val) => Number(val) || 0, z.number().nonnegative()),
    carbohydrate: z.preprocess((val) => Number(val) || 0, z.number().nonnegative()),
    cholesterol: z.preprocess((val) => Number(val) || 0, z.number().nonnegative())
  })
})

type DataRecipeType = z.infer<typeof schema>

export default function CreateRecipePage() {
  const [directions, setDirections] = useState<IRecipeDirection[]>([])
  const [fetching, setFetching] = useState(false)
  const [searchParams] = useSearchParams()

  const { user } = useAuth()
  const navigate = useNavigate()

  const recipeId = searchParams.get('recipeId')

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<DataRecipeType>({ resolver: zodResolver(schema) })

  const handleSubmitForm = async ({ ...others }: DataRecipeType) => {
    if (!user) return

    const payload = {
      ...others,
      authorId: user.id,
      directions
    }
    const response = recipeId ? await updateRecipeById(recipeId, others) : await createRecipe(payload, user.id)
    if (response instanceof ErrorResponse) {
      toast.error(response.error)
    } else {
      toast.success(response.message)
      navigate('/admin/recipes', { replace: true })
    }
  }

  const handleAddStep = () => {
    setDirections((prev) => [...prev, { title: '', desc: '' }])
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { id, value } = e.target
    if (id.includes('title')) {
      const newDirection = structuredClone(directions)
      newDirection[index].title = value
      setDirections(newDirection)
    } else {
      const newDirection = structuredClone(directions)
      newDirection[index].desc = value
      setDirections(newDirection)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (!recipeId) return

      setFetching(true)
      const response = await getRecipeById(recipeId)
      if (response instanceof ErrorResponse) {
        toast.error(response.error)
      } else {
        const { directions, ...data } = response.data
        reset({ ...data })
        setDirections(directions)
      }
      setFetching(false)
    })()
  }, [recipeId, reset])

  // Scroll to bottom when create a new direction step
  useEffect(() => {
    if (window && directions.length) {
      document.getElementById('content')?.scrollTo(0, document.body.scrollHeight)
    }
  }, [directions.length])

  if (fetching) {
    return (
      <div className='absolute inset-0 flex items-center justify-center'>
        <Loading stroke={3} />
      </div>
    )
  }

  return (
    <div>
      <div className='flex justify-between pb-8'>
        <h1 className='text-[32px] font-bold'>Recipe</h1>
        <button
          onClick={handleSubmit(handleSubmitForm)}
          className='inline-flex items-center justify-center gap-4 bg-primary rounded-lg text-white font-semibold py-[16px] px-[24px] duration-300 hover:opacity-70'
        >
          {isSubmitting && <Loading color='inherit' stroke={3} />}
          Save
        </button>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='name' className='select-none'>
            Name
          </label>
          <input
            type='text'
            autoFocus
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder="Enter recipe's name"
            defaultValue={'Name'}
            id='name'
            {...register('recipeName')}
          />
          <p className='text-red-500 text-xs'>{errors.recipeName?.message}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='prepare-time' className='select-none'>
            Prepare Time
          </label>
          <input
            type='number'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter a number (minute)'
            id='prepare-time'
            defaultValue={900}
            {...register('prepareTime')}
          />
          <p className='text-red-500 text-xs'>{errors.prepareTime?.message}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='cook-time' className='select-none'>
            Cook Time
          </label>
          <input
            type='number'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter a number (minute)'
            id='cook-time'
            defaultValue={900}
            {...register('cookTime')}
          />
          <p className='text-red-500 text-xs'>{errors.cookTime?.message}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='type' className='select-none'>
            Type
          </label>
          <input
            type='text'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter type name'
            id='type'
            defaultValue={'chicken'}
            {...register('recipeType')}
          />
          <p className='text-red-500 text-xs'>{errors.recipeType?.message}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='desc' className='select-none'>
            Description
          </label>
          <textarea
            className='py-[16px] px-[24px] border rounded-lg outline-none h-[5lh] resize-none'
            placeholder='Enter a description'
            id='desc'
            defaultValue={'Desc'}
            {...register('desc')}
          />
          <p className='text-red-500 text-xs'>{errors.desc?.message}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='preview-image' className='select-none'>
            Preview Image URL
          </label>
          <input
            type='text'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter image URL'
            id='preview-image'
            defaultValue={
              'https://imgs.search.brave.com/xej_qFlEMQjUS-Yw4TSsWzszIrPMiJUwJepsCLZF9ss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/anVzdG9uZWNvb2ti/b29rLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMy9K/YXBhbmVzZS1Gcmll/ZC1SaWNlLTg1OTUt/SS0zLmpwZw'
            }
            {...register('preview')}
          />
          <p className='text-red-500 text-xs'>{errors.preview?.message}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='nutrition' className='select-none'>
            Nutrition Information
          </label>
          <div className='flex flex-wrap gap-4'>
            <input
              type='number'
              className='py-[16px] px-[24px] border rounded-lg outline-none flex-1 basis-[200px]'
              placeholder='Enter Calories (kcal)'
              id='nutrition'
              defaultValue={12}
              {...register('nutritionInfo.calories')}
            />
            <input
              type='number'
              className='py-[16px] px-[24px] border rounded-lg outline-none flex-1 basis-[200px]'
              placeholder='Enter total fat (g)'
              id='nutrition'
              defaultValue={12}
              {...register('nutritionInfo.totalFat')}
            />
            <input
              type='number'
              className='py-[16px] px-[24px] border rounded-lg outline-none flex-1 basis-[200px]'
              placeholder='Enter protein (g)'
              id='nutrition'
              defaultValue={12}
              {...register('nutritionInfo.protein')}
            />
            <input
              type='number'
              className='py-[16px] px-[24px] border roundedname-lg outline-none flex-1 basis-[200px]'
              placeholder='Enter carbohydrate (g)'
              id='nutrition'
              defaultValue={12}
              {...register('nutritionInfo.carbohydrate')}
            />
            <input
              type='number'
              className='py-[16px] px-[24px] border rounded-lg outline-none flex-1 basis-[200px]'
              placeholder='Enter cholesterol (mg)'
              id='nutrition'
              defaultValue={12}
              {...register('nutritionInfo.cholesterol')}
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <span className='select-none'>Direction</span>
            <button
              onClick={handleAddStep}
              type='button'
              className='inline-flex items-center justify-center gap-4 bg-primary rounded-lg text-white font-semibold py-[16px] px-[24px] duration-300 hover:opacity-70'
            >
              Add step
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            <RecipeDirections directions={directions} handleChange={handleChange} />
          </div>
        </div>
      </form>
    </div>
  )
}
