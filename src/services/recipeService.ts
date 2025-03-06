import { IRecipe, IRecipeCreation, IRecipeWithAuthor } from '~/commons/interfaces/IRecipe'
import { ErrorResponse, SuccessResponse } from '~/commons/models'
import { SuccessResponseWithPagination } from '~/commons/models/SuccessResponseWithPagination'
import { randomId } from '~/utils'
import { axiosInstance } from '~/utils/axiosInstance'

export const createRecipe = async (
  recipe: IRecipeCreation,
  authorId: string
): Promise<SuccessResponse<IRecipe> | ErrorResponse> => {
  try {
    const id = randomId()
    const response = await axiosInstance.post('/recipes', {
      ...recipe,
      isFavorite: true,
      pushlishedDate: Date.now(),
      id,
      recipeId: id,
      authorId
    })
    return new SuccessResponse('Recipe was created!', response.data)
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const getRecipesByAuthorId = async (authorId: string): Promise<SuccessResponse<IRecipe[]> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(`/recipes?authorId=${authorId}`)
    return new SuccessResponse('Successfully', response.data)
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const getAllRecipes = async (): Promise<SuccessResponse<IRecipe[]> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(`/recipes`)
    return new SuccessResponse('Successfully', response.data)
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const getAllRecipesWithPagination = async ({
  search,
  _limit = 5,
  _page = 1
}: {
  search: string
  _page?: number
  _limit?: number
}): Promise<SuccessResponseWithPagination<IRecipe[]> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(`/recipes?_limit=${_limit}&_page=${_page}&recipeName_like=${search}`)
    console.log(response.data)
    return new SuccessResponseWithPagination('Successfully', response.data.data, response.data.pagination)
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const getRecipeById = async (recipeId: string): Promise<SuccessResponse<IRecipe> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(`/recipes?recipeId=${recipeId}`)

    if (!response.data[0]) return new ErrorResponse('Recipe not found')
    return new SuccessResponse('Recipe was found', response.data[0])
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const getRecipeWithAuthorById = async (
  recipeId: string
): Promise<SuccessResponse<IRecipeWithAuthor> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get<IRecipeWithAuthor[]>(`/recipes?recipeId=${recipeId}`)

    if (!response.data[0]) return new ErrorResponse('Recipe not found')

    const authorResponse = await axiosInstance.get(`/users/${response.data[0].authorId}`)
    if (!authorResponse.data) return new ErrorResponse('Author is not found')

    response.data[0].author = authorResponse.data

    return new SuccessResponse('Recipe was found', response.data[0])
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const deleteRecipeById = async (recipeId: string): Promise<SuccessResponse<IRecipe> | ErrorResponse> => {
  try {
    const response = await axiosInstance.delete(`/recipes/${recipeId}`)
    return new SuccessResponse('Recipe was deleted', response.data[0])
  } catch (error) {
    console.log(error)
    return new ErrorResponse(String(error))
  }
}

export const updateRecipeById = async (
  recipeId: string,
  updatedRecipe: Partial<IRecipe>
): Promise<SuccessResponse<IRecipe> | ErrorResponse> => {
  try {
    const response = await axiosInstance.patch(`/recipes/${recipeId}`, updatedRecipe)
    return new SuccessResponse('Recipe was updated', response.data[0])
  } catch (error) {
    console.log(error)
    return new ErrorResponse(String(error))
  }
}

export const searchRecipes = async (search: string): Promise<SuccessResponse<IRecipe[]> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(`/recipes?q=${search}`)
    console.log(response.data)
    return new SuccessResponse('Recipe was updated', response.data[0])
  } catch (error) {
    console.log(error)
    return new ErrorResponse(String(error))
  }
}
