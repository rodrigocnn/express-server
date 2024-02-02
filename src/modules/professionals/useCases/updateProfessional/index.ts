import { ProfessionalsRepositoryPrima } from "../../repositories/ProfessionalsRepositoryPrima"
import { UpdateProfessionalController } from "./UpdateProfessionalController "
import { UpdateProfessionalUseCase } from "./UpdateProfessionalUseCase"

const professionalRepository = new ProfessionalsRepositoryPrima()
const updateProfessionalUseCase = new UpdateProfessionalUseCase(professionalRepository)
export const updateProfessionalController = new UpdateProfessionalController(updateProfessionalUseCase)
