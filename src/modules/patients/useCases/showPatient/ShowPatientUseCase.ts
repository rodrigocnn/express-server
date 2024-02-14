import { inject, injectable } from 'tsyringe';

import { IPatientsRepository } from '../../repositories/IPatientsRepository';

@injectable()
export class ShowPatientUseCase {
  constructor(
    @inject('PatientsRepositoryPrisma')
    private patientsRepository: IPatientsRepository
  ) {}

  async execute(id: number) {
    if (this.patientsRepository.exists) {
      const roleExists = await this.patientsRepository.show(id);
      if (!roleExists) {
        throw new Error(`Role with id ${id} not found`);
      }
      return roleExists;
    }
    return null;
  }
}
