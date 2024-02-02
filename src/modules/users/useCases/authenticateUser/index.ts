import { UsersRepositoryPrisma } from "../../repositories/UsersRepositoryPrisma"
import { AuthenticateUserController } from "./AuthenticateUserController"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

const userRepository = new UsersRepositoryPrisma()
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)
export const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)
