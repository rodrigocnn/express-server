import { IServicesRepository } from "../../repositories/IServicesRepository"

export class DeleteServiceUseCase {
  constructor(private servicesRepository: IServicesRepository) {}

  async execute(id: string) {
    if (this.servicesRepository.exists) {
      const serviceExists = await this.servicesRepository.exists(id)
      if (!serviceExists) {
        throw new Error(`Service with id ${id} not found`)
      }
    }
    this.servicesRepository.delete(id)
  }
}
