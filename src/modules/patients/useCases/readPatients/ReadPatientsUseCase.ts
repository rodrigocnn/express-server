import { IPatientsRepository } from "../../repositories/IPatientsRepository"

export class ReadPatientsUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  execute() {
    const patients = this.patientsRepository.read()
    return patients
  }
}
