import { ServicesRepositoryPrisma } from "../../repositories/ServicesRepositoryPrisma"
import { DeleteServiceController } from "./DeleteServiceController"
import { DeleteServiceUseCase } from "./DeleteServiceUseCase"

const serviceRepository = new ServicesRepositoryPrisma()
const deleteServiceUseCase = new DeleteServiceUseCase(serviceRepository)
export const deleteServiceController = new DeleteServiceController(deleteServiceUseCase)
