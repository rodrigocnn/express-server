import { PatientsRepositoryPrima } from "../../repositories/PatientsRepositoryPrima"
import { UpdatePatientController } from "./UpdatePatientController"
import { UpdatePatientUseCase } from "./UpdatePatientUseCase"

const patientRepository = new PatientsRepositoryPrima()
const updatePatientUseCase = new UpdatePatientUseCase(patientRepository)
export const updatePatientController = new UpdatePatientController(updatePatientUseCase)
