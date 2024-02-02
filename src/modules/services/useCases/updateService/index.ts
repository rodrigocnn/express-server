import { ServicesRepositoryPrisma } from "../../repositories/ServicesRepositoryPrisma"
import { UpdateServiceController } from "./UpdateServiceController"
import { UpdateServiceUseCase } from "./UpdateServiceUseCase"

const serviceRepository = new ServicesRepositoryPrisma()
const updateServiceUseCase = new UpdateServiceUseCase(serviceRepository)
export const updateServiceController = new UpdateServiceController(updateServiceUseCase)
