import {
  IProfessionalsRepository,
  IResponseProfessional
} from '../../repositories/IProfessionalsRepository';

interface IRequest {
  name: string;
  roleId: number;
  email: string;
  birth: string;
  phone: string;
  rg: string;
  cpf: string;
  address: string;
  district: string;
  city: string;
  state: string;
}

export class CreateProfessionalUseCase {
  constructor(private patientsRepository: IProfessionalsRepository) {}

  async execute(professional: IRequest): Promise<IResponseProfessional | null> {
    if (!professional.name || !professional.email) {
      throw new Error('Name and email are required.');
    }

    return await this.patientsRepository.create(professional);
  }
}
