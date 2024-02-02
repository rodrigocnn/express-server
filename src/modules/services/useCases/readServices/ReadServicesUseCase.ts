import { IServicesRepository } from "../../repositories/IServicesRepository"

export class ReadServicesUseCase {
  constructor(private servicesRepository: IServicesRepository) {}

  execute() {
    const roles = this.servicesRepository.read()
    return roles
  }
}
