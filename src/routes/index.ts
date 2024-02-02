import { Router } from "express"
import { patientsRoutes } from "./patients.routes"
import { rolesRoutes } from "./roles.routes"
import { servicesRoutes } from "./service.routes"
import { professionalsRoutes } from "./professionals.routes"
import { usersRoutes } from "./users.routes"

export const router = Router()

router.use(patientsRoutes)
router.use(rolesRoutes)
router.use(servicesRoutes)
router.use(professionalsRoutes)
router.use(usersRoutes)
