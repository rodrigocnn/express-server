import { ProfessionalsRepositoryPrima } from "../../repositories/ProfessionalsRepositoryPrima"
import { CreateProfessionalUseCase } from "./CreateProfessionalUseCase"
import { CreateProfessionalsController } from "./CreateProfessionalsController"

const professionalsRepository = new ProfessionalsRepositoryPrima()
const createProfessionalUseCase = new CreateProfessionalUseCase(professionalsRepository)
export const createProfessionalController = new CreateProfessionalsController(createProfessionalUseCase)
