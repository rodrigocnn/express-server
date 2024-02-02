import { Router } from "express"

import { readRolesController } from "../modules/roles/useCases/readRoles"
import { updateRoleController } from "../modules/roles/useCases/updateRole"
import { deleteRoleController } from "../modules/roles/useCases/deleteRole"
import { CreateRoleController } from "../modules/roles/useCases/createRole/CreateRoleController"
import { ShowRoleController } from "../modules/roles/useCases/showRole/ShowRoleController"

const rolesRoutes = Router()

const createRoleController = new CreateRoleController()
const showRoleController = new ShowRoleController()

rolesRoutes.post("/roles", createRoleController.handle)

rolesRoutes.get("/roles", (request, response) => {
  return readRolesController.handle(request, response)
})

rolesRoutes.get("/roles/:roleId", (request, response) => {
  return showRoleController.handle(request, response)
})

rolesRoutes.put("/roles/:roleId", (request, response) => {
  return updateRoleController.handle(request, response)
})

rolesRoutes.delete("/roles/:roleId", (request, response) => {
  return deleteRoleController.handle(request, response)
})

export { rolesRoutes }
