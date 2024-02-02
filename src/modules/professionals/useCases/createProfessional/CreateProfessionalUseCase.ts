import { IProfessionalsRepository } from "../../repositories/IProfessionalsRepository"

interface IRequest {
  name: string
  roleId: number
  email: string
  birth: string
  phone: string
  rg: string
  cpf: string
  address: string
  district: string
  city: string
  state: string
}

export class CreateProfessionalUseCase {
  constructor(private patientsRepository: IProfessionalsRepository) {}

  execute(professional: IRequest) {
    if (!professional.name || !professional.email) {
      throw new Error("Name and email are required.")
    }

    this.patientsRepository.create(professional)
  }
}
