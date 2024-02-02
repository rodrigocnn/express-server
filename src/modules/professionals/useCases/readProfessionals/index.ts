import { ProfessionalsRepositoryPrima } from "../../repositories/ProfessionalsRepositoryPrima"
import { ReadProfessionalsController } from "./ReadProfessionalsController"
import { ReadProfessionalsUseCase } from "./ReadProfessionalsUseCase"

const professionalRepository = new ProfessionalsRepositoryPrima()
const readProfessionalsUseCase = new ReadProfessionalsUseCase(professionalRepository)
export const readProfessionalsController = new ReadProfessionalsController(readProfessionalsUseCase)
