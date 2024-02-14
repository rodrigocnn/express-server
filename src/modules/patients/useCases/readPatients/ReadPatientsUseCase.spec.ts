import 'reflect-metadata';

import { PatientsRepositoryInMemory } from '../../repositories/PatientsRepositoryInMemory';
import { ReadPatientsUseCase } from './ReadPatientsUseCase';
import { CreatePatientUseCase } from '../createPatient/CreatePatientUseCase';

let readPatientsUseCase: ReadPatientsUseCase;
let patientsRepositoryInMemory: PatientsRepositoryInMemory;
let createPatientUseCase: CreatePatientUseCase;

describe('Read Patients', () => {
  beforeEach(() => {
    patientsRepositoryInMemory = new PatientsRepositoryInMemory();
    readPatientsUseCase = new ReadPatientsUseCase(patientsRepositoryInMemory);
    createPatientUseCase = new CreatePatientUseCase(patientsRepositoryInMemory);
  });

  it('should to return list of all patients', async () => {
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

    const patient2 = {
      name: 'Marcelo Moreira',
      email: 'marcelo@globo.com',
      birth: '16/04/1985',
      phone: '(77)99833-1016',
      rg: '92890157',
      cpf: '807.527.485-7',
      address: 'Rua São Marcos, 233',
      district: 'Centro',
      city: 'Barreiras',
      state: 'BA'
    };

    await createPatientUseCase.execute(patient);
    await createPatientUseCase.execute(patient2);

    const result = await readPatientsUseCase.execute();
    expect(result).toHaveLength(2);
  });
});
