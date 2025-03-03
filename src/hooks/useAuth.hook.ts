import { IUser } from '~/commons/interfaces/IUser'

export const useAuth = () => {
  const userJSON = localStorage.getItem('user')
  const user = userJSON ? (JSON.parse(userJSON) as IUser) : null

  return { user }
}
