import { RolesRepositoryPrisma } from "../../repositories/RolesRepositoryPrisma"
import { ReadRolesController } from "./ReadRolesController"

import { ReadRolesUseCase } from "./ReadRolesUseCase"

const roleRepository = new RolesRepositoryPrisma()
const readRolesUseCase = new ReadRolesUseCase(roleRepository)
export const readRolesController = new ReadRolesController(readRolesUseCase)
