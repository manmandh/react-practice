export interface IUser {
  id: string
  name: string
  email: string
  password: string
  avatar: string
  createdAt: number
}

export interface IUserCreation {
  name: string
  email: string
  password: string
}

export interface IUserWithoutPassword {
  id: string
  name: string
  email: string
  avatar: string
  createdAt: number
}
