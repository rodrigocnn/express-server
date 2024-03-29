import { inject } from 'tsyringe';
import { IPatientsRepository } from '../../repositories/IPatientsRepository';

interface IRequest {
  name: string;
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

export interface IResponsePatient {
  id?: number;
  name: string;
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

export class CreatePatientUseCase {
  constructor(
    @inject('PatientsRepositoryPrisma')
    private patientsRepository: IPatientsRepository
  ) {}

  async execute(patient: IRequest): Promise<IResponsePatient> {
    if (!patient.name || !patient.email) {
      throw new Error('Name and email are required.');
    }

    return await this.patientsRepository.create(patient);
  }
}
