import { PatientsRepositoryInMemory } from '../../repositories/PatientsRepositoryInMemory';
import { CreatePatientUseCase } from './CreatePatientUseCase';

let createPatientUseCase: CreatePatientUseCase;
let patientsRepositoryInMemory: PatientsRepositoryInMemory;

describe('Create Patient', () => {
  beforeEach(() => {
    patientsRepositoryInMemory = new PatientsRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientsRepositoryInMemory);
  });

  it('should be able to be create a new Patient', async () => {
    const patient = {
      name: 'Carlos',
      email: 'carlos@globo.com',
      birth: '16/04/1980',
      phone: '(77)99833-1616',
      rg: '928901564',
      cpf: '807.527.485-72',
      address: 'Rua São Francisco, 233',
      district: 'Sandra Regina',
      city: 'test',
      state: 'BA'
    };

    const result = await createPatientUseCase.execute(patient);
    expect(result).toHaveProperty('id');
  });

  it('Should not create a new Patient without required fields.', async () => {
    const patient = {
      name: '',
      email: '',
      birth: '16/04/1980',
      phone: '(77)99833-1616',
      rg: '928901564',
      cpf: '807.527.485-72',
      address: 'Rua São Francisco, 233',
      district: 'Sandra Regina',
      city: 'test',
      state: 'BA'
    };

    await expect(async () => {
      await createPatientUseCase.execute(patient);
    }).rejects.toThrow('Name and email are required.');
  });
});
