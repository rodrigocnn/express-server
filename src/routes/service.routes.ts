import { Router } from "express"
import { createServiceController } from "../modules/services/useCases/createService"
import { readServicesController } from "../modules/services/useCases/readServices"
import { deleteServiceController } from "../modules/services/useCases/deleteService"
import { updateServiceController } from "../modules/services/useCases/updateService"
import { ShowServiceController } from "../modules/services/useCases/showService/ShowServiceController"

const servicesRoutes = Router()

const showServiceController = new ShowServiceController()

servicesRoutes.post("/services", (request, response) => {
  return createServiceController.handle(request, response)
})

servicesRoutes.get("/services", (request, response) => {
  return readServicesController.handle(request, response)
})

servicesRoutes.get("/services/:serviceId", (request, response) => {
  return showServiceController.handle(request, response)
})

servicesRoutes.put("/services/:serviceId", (request, response) => {
  return updateServiceController.handle(request, response)
})

servicesRoutes.delete("/services/:serviceId", (request, response) => {
  return deleteServiceController.handle(request, response)
})

export { servicesRoutes }
