import { IUser, IUserCreation } from '~/commons/interfaces/IUser'
import { ErrorResponse, SuccessResponse } from '~/commons/models'
import { axiosInstance } from '~/utils/axiosInstance'

const defaultAvatarURL =
  'https://imgs.search.brave.com/G93cGwx1mTPuGGhw9tI6O03D-ROopqJNO69CYy0tqAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4L2Q0/LzVhLzQ4ZDQ1YTM2/NDM3MGE0MmNjYWIx/N2RhN2U0YjQxMGQy/LmpwZw'

export const registerUser = async (user: IUserCreation): Promise<SuccessResponse<IUser> | ErrorResponse> => {
  try {
    const response = await axiosInstance.post('/users', { ...user, avatar: defaultAvatarURL, createdAt: Date.now() })
    return new SuccessResponse('User was created!', response.data)
  } catch (error) {
    return new ErrorResponse(String(error))
  }
}

export const login = async (email: string): Promise<SuccessResponse<IUser> | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(`/users?email=${email}`)
    console.log(response.data[0])
    if (!response.data[0]) return new ErrorResponse('User is not found')

    return new SuccessResponse('User was logged in!', response.data[0])
  } catch (err) {
    return new ErrorResponse(String(err))
  }
}
