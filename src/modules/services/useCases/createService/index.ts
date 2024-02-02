import { ServicesRepositoryPrisma } from "../../repositories/ServicesRepositoryPrisma"
import { CreateServiceController } from "./CreateServiceController"
import { CreateServiceUseCase } from "./CreateServiceUseCase"

const serviceRepository = new ServicesRepositoryPrisma()
const createServiceUseCase = new CreateServiceUseCase(serviceRepository)
export const createServiceController = new CreateServiceController(createServiceUseCase)
