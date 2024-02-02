import { compare } from "bcrypt"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { sign } from "jsonwebtoken"

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IRequest): Promise<IResponse> {
    if (!user.email || !user.password) {
      throw new Error("Name,  email and password are required")
    }
    const userExist = await this.usersRepository.existsbyEmail(user.email)

    if (!userExist) {
      throw new Error(`Email ou Password Incorrect`)
    }
    const passwordMatch = await compare(user.password, userExist.password)

    if (!passwordMatch) {
      throw new Error(`Email ou Password Incorrect`)
    }
    const token = sign({}, "44c2c2b314ab59a456dde7290c33b024", {
      subject: userExist.email,
      expiresIn: "1d",
    })

    const userToReturn = {
      name: userExist.name,
      email: userExist.email,
    }

    return {
      user: userToReturn,
      token,
    }
  }
}
