import React from 'react'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { RecipeCard } from '~/components/commons/RecipeCard/RecipeCard'

interface RecipeListProps {
  recipes: IRecipe[]
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 custom-500:grid-cols-2 custom-500:gap-[15px] gap-[40px]'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipeId} isFavorite recipe={recipe} backgroundColor={true} />
      ))}
    </div>
  )
}
