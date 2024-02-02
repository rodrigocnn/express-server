import { ServicesRepositoryPrisma } from "../../repositories/ServicesRepositoryPrisma"

import { ReadServicesController } from "./ReadServicesController"
import { ReadServicesUseCase } from "./ReadServicesUseCase"

const serviceRepository = new ServicesRepositoryPrisma()
const readServicesUseCase = new ReadServicesUseCase(serviceRepository)
export const readServicesController = new ReadServicesController(readServicesUseCase)
