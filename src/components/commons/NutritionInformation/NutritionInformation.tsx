import { memo } from 'react'
import { INutrition } from '~/commons/interfaces/IRecipe'

interface NutritionInformationProps {
  nutritionInfo: INutrition
  description: string
}

export const NutritionInformation = memo(
  ({
    nutritionInfo: { calories, carbohydrate, cholesterol, protein, totalFat },
    description
  }: NutritionInformationProps) => {
    return (
      <div className='flex w-full flex-col justify-between xl:w-[400px] h-[600px] p-8 bg-bgc-banner rounded-[30px]'>
        <div className=''>
          <h3 className='text-[24px] font-semibold'>Nutrition Information</h3>
          <div className='flex items-center justify-between py-4 border-b border-[#0000001A]'>
            <span className='text-[#00000099]'>Calories</span>
            <span>{calories} kcal</span>
          </div>
          <div className='flex items-center justify-between py-4 border-b border-[#0000001A]'>
            <span className='text-[#00000099]'>Total Fat</span>
            <span>{totalFat} g</span>
          </div>
          <div className='flex items-center justify-between py-4 border-b border-[#0000001A]'>
            <span className='text-[#00000099]'>Protein</span>
            <span>{protein} g</span>
          </div>
          <div className='flex items-center justify-between py-4 border-b border-[#0000001A]'>
            <span className='text-[#00000099]'>Carbohydrate</span>
            <span>{carbohydrate} g</span>
          </div>
          <div className='flex items-center justify-between py-4 border-b border-[#0000001A]'>
            <span className='text-[#00000099]'>Cholesterol</span>
            <span>{cholesterol} mg</span>
          </div>
        </div>
        <p className='text-[#00000099] text-center line-clamp-4'>{description}</p>
      </div>
    )
  }
)
