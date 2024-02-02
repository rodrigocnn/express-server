import { Router } from "express"
import { createPatientController } from "../modules/patients/useCases/createPatient"
import { readPatientsController } from "../modules/patients/useCases/readPatients"
import { updatePatientController } from "../modules/patients/useCases/updatePatient"
import { ShowPatientController } from "../modules/patients/useCases/showPatient/ShowPatientController"

const patientsRoutes = Router()

const showPatientController = new ShowPatientController()

patientsRoutes.post("/patients", (request, response) => {
  return createPatientController.handle(request, response)
})

patientsRoutes.get("/patients", (request, response) => {
  return readPatientsController.handle(request, response)
})

patientsRoutes.get("/patients/:patientId", (request, response) => {
  return showPatientController.handle(request, response)
})

patientsRoutes.put("/patients/:patientId", (request, response) => {
  return updatePatientController.handle(request, response)
})

export { patientsRoutes }
