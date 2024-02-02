export interface ICreateUserDTO {
  name: string
  email: string
  password: string
  admin: boolean
}

export interface ISessionUserDTO {
  id?: number
  name: string
  email: string
  password: string
  admin: boolean
  createdAt: Date
  updatedAt: Date
}

export interface IUsersRepository {
  create(user: ICreateUserDTO): void
  read(): void
  update(id: string, user: ICreateUserDTO): void
  delete(id: string): void
  exists?(id: string): Promise<boolean>
  existsbyEmail(email: string): Promise<{
    id: number
    name: string
    email: string
    password: string
    admin: boolean
    createdAt: Date
    updatedAt: Date
  } | null>
}
