import { RolesRepositoryPrisma } from "../../repositories/RolesRepositoryPrisma"
import { UpdateRoleController } from "./UpdateRoleController"
import { UpdateRoleUseCase } from "./UpdateRoleUseCase"

const roleRepository = new RolesRepositoryPrisma()
const updateRoleUseCase = new UpdateRoleUseCase(roleRepository)
export const updateRoleController = new UpdateRoleController(updateRoleUseCase)
