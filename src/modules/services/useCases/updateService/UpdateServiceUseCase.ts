import { IResponseService, IServicesRepository } from "../../repositories/IServicesRepository"

interface IRequest {
  id: string
  name: string
  price: number
}

export class UpdateServiceUseCase {
  constructor(private servicesRepository: IServicesRepository) {}

  async execute(service: IRequest): Promise<IResponseService | null> {
    if (!service.name || !service.price) {
      throw new Error("Name and Price are required")
    }

    return await this.servicesRepository.update(service.id, service)
  }
}
