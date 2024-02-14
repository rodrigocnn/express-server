import { IPatientsRepository } from '../../repositories/IPatientsRepository';

export interface IRequestPatient {
  id: number;
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

export class UpdatePatientUseCase {
  constructor(private patientRepository: IPatientsRepository) {}

  async execute(patient: IRequestPatient) {
    if (!patient.name || !patient.email) {
      throw new Error('Name and email are required.');
    }

    return await this.patientRepository.update(patient.id, patient);
  }
}
