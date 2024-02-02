import { IPatientsRepository } from "../../repositories/IPatientsRepository"

interface IRequest {
  id: string
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

export class UpdatePatientUseCase {
  constructor(private patientRepository: IPatientsRepository) {}

  execute(patient: IRequest) {
    if (!patient.name || !patient.email) {
      throw new Error("Name and email are required.")
    }

    this.patientRepository.update(patient.id, patient)
  }
}
