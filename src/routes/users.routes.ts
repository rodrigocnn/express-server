import { Router } from "express"

import { createUserController } from "../modules/users/useCases/createUser"
import { authenticateUserController } from "../modules/users/useCases/authenticateUser"
import { ReadUsersController } from "../modules/users/useCases/readUsers/ReadUsersController"

const usersRoutes = Router()
const readUsersController = new ReadUsersController()

usersRoutes.post("/users", (request, response) => {
  return createUserController.handle(request, response)
})
usersRoutes.get("/users", readUsersController.handle)

usersRoutes.post("/login", (request, response) => {
  return authenticateUserController.handle(request, response)
})

export { usersRoutes }
