import { RolesRepositoryPrisma } from "../../repositories/RolesRepositoryPrisma"
import { DeleteRoleController } from "./DeleteRoleController"
import { DeleteRoleUseCase } from "./DeleteRoleUseCase"

const roleRepository = new RolesRepositoryPrisma()
const deleteRoleUseCase = new DeleteRoleUseCase(roleRepository)
export const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)
