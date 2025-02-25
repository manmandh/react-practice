import { Fragment, memo } from 'react'
import { IRecipeDirection } from '~/commons/interfaces/IRecipe'

interface RecipeDirectionsProps {
  directions: IRecipeDirection[]
}

export const RecipeDirection = memo(({ directions }: RecipeDirectionsProps) => {
  return (
    <>
      <h3 className='text-[32px] font-semibold pb-8'>Directions</h3>
      <div className='pl-[47px] flex flex-col gap-8'>
        {directions.map((direction, index) => (
          <Fragment key={index}>
            <div>
              <h4 className='text-[24px] font-semibold pb-[24px]'>
                {index + 1}. {direction.title}
              </h4>
              <div className='flex flex-col gap-12'>
                <p className='text-[#00000099]'>{direction.desc}</p>
              </div>
            </div>
            <hr />
          </Fragment>
        ))}
      </div>
    </>
  )
})
