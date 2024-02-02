import { hash } from "bcrypt"
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
  name: string
  email: string
  password: string
  admin: boolean
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IRequest) {
    if (!user.name || !user.email || !user.password) {
      throw new Error("Name,  email and password are required")
    }
    const passwordHash = await hash(user.password, 8)
    const userModified = { ...user }
    userModified.password = passwordHash
    this.usersRepository.create(userModified)
  }
}
