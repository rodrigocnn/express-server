import { IProfessionalsRepository, IResponseProfessional } from "../../repositories/IProfessionalsRepository"

interface IRequest {
  id: string
  roleId: number
  name: string
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

export class UpdateProfessionalUseCase {
  constructor(private professionalRepository: IProfessionalsRepository) {}

  async execute(professional: IRequest): Promise<IResponseProfessional | null> {
    if (!professional.name || !professional.email) {
      throw new Error("Name and email are required.")
    }

    return await this.professionalRepository.update(professional.id, professional)
  }
}
