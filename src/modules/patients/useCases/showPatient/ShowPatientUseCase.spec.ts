import 'reflect-metadata';

import { PatientsRepositoryInMemory } from '../../repositories/PatientsRepositoryInMemory';
import { CreatePatientUseCase } from '../createPatient/CreatePatientUseCase';
import { ShowPatientUseCase } from './ShowPatientUseCase';

let createPatientUseCase: CreatePatientUseCase;
let showPatientUseCase: ShowPatientUseCase;
let patientsRepositoryInMemory: PatientsRepositoryInMemory;

describe('Show Patient', () => {
  beforeEach(() => {
    patientsRepositoryInMemory = new PatientsRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientsRepositoryInMemory);
    showPatientUseCase = new ShowPatientUseCase(patientsRepositoryInMemory);
  });

  it('should be able to find a patienti by id', async () => {
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

    const createdPatient = await createPatientUseCase.execute(patient);
    const idPatientCreated = createdPatient.id.toString();
    const findedPatient = await showPatientUseCase.execute(idPatientCreated);
    expect(findedPatient.id).toEqual(Number(idPatientCreated));
  });
});
