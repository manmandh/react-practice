import { IUserWithoutPassword } from './IUser'

export interface INutrition {
  calories: number
  totalFat: number
  protein: number
  carbohydrate: number
  cholesterol: number
}

export interface IRecipeDirection {
  title: string
  desc: string
}

export interface IRecipe {
  recipeId: string
  recipeName: string
  authorId: string
  prepareTime: number
  cookTime: number
  recipeType: string
  desc: string
  pushlishDate: number
  preview: string
  isFavorite: boolean

  nutritionInfo: INutrition

  directions: IRecipeDirection[]
}

export interface IRecipeWithAuthor {
  recipeId: string
  recipeName: string
  authorId: string
  prepareTime: number
  cookTime: number
  recipeType: string
  desc: string
  pushlishDate: number
  preview: string
  isFavorite: boolean

  nutritionInfo: INutrition

  directions: IRecipeDirection[]
  author: IUserWithoutPassword
}

export interface IRecipeCreation {
  recipeName: string
  authorId: string
  prepareTime: number
  cookTime: number
  recipeType: string
  desc: string
  preview: string

  nutritionInfo: INutrition

  directions: IRecipeDirection[]
}
