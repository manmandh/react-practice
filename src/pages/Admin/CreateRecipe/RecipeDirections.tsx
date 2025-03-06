import { ChangeEvent, FC, memo } from 'react'
import { IRecipeDirection } from '~/commons/interfaces/IRecipe'
import { Children } from 'react'

interface RecipeDirectionsProps {
  directions: IRecipeDirection[]
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void
}

export const RecipeDirections: FC<RecipeDirectionsProps> = memo(({ directions, handleChange }) => {
  return Children.toArray(
    directions.map((direction, index) => (
      <>
        <p className='font-semibold'>Step {index + 1}</p>
        <div className='flex flex-col gap-3'>
          <label htmlFor={`title ${index}`} className='select-none text-white'>
            Title
          </label>
          <input
            type='text'
            className='py-[16px] px-[24px] border rounded-lg outline-none text-primary'
            placeholder='Enter type name'
            id={`title ${index}`}
            value={direction.title}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor={`step-desc ${index}`} className='select-none text-white'>
            Step description
          </label>
          <textarea
            className='py-[16px] px-[24px] border rounded-lg outline-none h-[5lh] resize-none text-primary'
            placeholder='Enter a description'
            id={`step-desc ${index}`}
            value={direction.desc}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      </>
    ))
  )
})
