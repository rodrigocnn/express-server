import { IServicesRepository } from "../../repositories/IServicesRepository"

interface IRequest {
  name: string
  price: number
}

export class CreateServiceUseCase {
  constructor(private servicesRepository: IServicesRepository) {}

  execute(service: IRequest) {
    if (!service.name || !service.price) {
      throw new Error("Name and Price are required")
    }
    this.servicesRepository.create(service)
  }
}
