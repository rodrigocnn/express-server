import { PatientsRepositoryPrima } from "../../repositories/PatientsRepositoryPrima"
import { ReadPatientsController } from "./ReadPatientsController"
import { ReadPatientsUseCase } from "./ReadPatientsUseCase"

const patientRepository = new PatientsRepositoryPrima()
const readPatientsUseCase = new ReadPatientsUseCase(patientRepository)
export const readPatientsController = new ReadPatientsController(readPatientsUseCase)
