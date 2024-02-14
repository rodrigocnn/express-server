import {
  IPatientDTO,
  IPatientsRepository,
  IResponsePatient
} from './IPatientsRepository';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class PatientsRepositoryInMemory implements IPatientsRepository {
  patients: IPatientDTO[] = [];

  async create(patient: IPatientDTO): Promise<IResponsePatient> {
    const id = getRandomInt(1, 100);
    const patientWithId = { ...patient, id };
    await this.patients.push(patientWithId);
    return patientWithId;
  }
  async read(): Promise<IResponsePatient[]> {
    return await this.patients;
  }
  async update(id: number, patient: IPatientDTO): Promise<IResponsePatient> {
    const index = this.patients.findIndex((patient) => patient.id === id);
    this.patients[index] = { ...this.patients[index], ...patient };
    return this.patients[index];
  }
  async show(id: number): Promise<IResponsePatient> {
    const patient = this.patients.find((patient) => patient.id === id);
    return patient;
  }
  async exists?(id: number): Promise<boolean> {
    const patient = this.patients.find((patient) => patient.id === id);
    return !!patient;
  }
}
