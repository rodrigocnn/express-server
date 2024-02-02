import { UsersRepositoryPrisma } from "../../repositories/UsersRepositoryPrisma"
import { CreateUserController } from "./CreateUsersController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const userRepository = new UsersRepositoryPrisma()
const createUserUseCase = new CreateUserUseCase(userRepository)
export const createUserController = new CreateUserController(createUserUseCase)
