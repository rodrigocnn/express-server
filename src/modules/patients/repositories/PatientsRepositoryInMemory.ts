import { v4 as uuidv4 } from 'uuid';

import {
  ICreatePatientDTO,
  IPatientsRepository,
  IResponsePatient
} from './IPatientsRepository';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class PatientsRepositoryInMemory implements IPatientsRepository {
  patients: ICreatePatientDTO[] = [];

  async create(patient: ICreatePatientDTO): Promise<IResponsePatient> {
    const id = getRandomInt(1, 100);
    const patientWithId = { ...patient, id };
    await this.patients.push(patientWithId);
    return patientWithId;
  }
  async read(): Promise<IResponsePatient[]> {
    return await this.patients;
  }
  async update(
    id: string,
    patient: ICreatePatientDTO
  ): Promise<IResponsePatient> {
    return await this.patients.find((patient) => patient.id === Number(id));
  }
  async show(id: string): Promise<IResponsePatient> {
    const patient = this.patients.find((patient) => patient.id === Number(id));
    return patient;
  }
  async exists?(id: string): Promise<boolean> {
    const patient = this.patients.find((patient) => patient.id === Number(id));
    return !!patient;
  }
}
