import { PatientsRepositoryPrima } from "../../repositories/PatientsRepositoryPrima"
import { CreatePatientController } from "./CreatePatientController"
import { CreatePatientUseCase } from "./CreatePatientUseCase"

const patientsRepository = new PatientsRepositoryPrima()
const createPatientUseCase = new CreatePatientUseCase(patientsRepository)
export const createPatientController = new CreatePatientController(createPatientUseCase)
