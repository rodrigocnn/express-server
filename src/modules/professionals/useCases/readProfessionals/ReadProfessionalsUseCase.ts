import { IProfessionalsRepository } from "../../repositories/IProfessionalsRepository"

export class ReadProfessionalsUseCase {
  constructor(private professionalsRepository: IProfessionalsRepository) {}

  execute() {
    const patients = this.professionalsRepository.read()
    return patients
  }
}
