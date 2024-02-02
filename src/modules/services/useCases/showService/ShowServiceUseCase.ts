import { inject, injectable } from "tsyringe"

import { IServicesRepository } from "../../repositories/IServicesRepository"

@injectable()
export class ShowServiceUseCase {
  constructor(
    @inject("ServicesRepositoryPrisma")
    private servicesRepository: IServicesRepository,
  ) {}

  async execute(id: string) {
    if (this.servicesRepository.exists) {
      const roleExists = await this.servicesRepository.show(id)
      if (!roleExists) {
        throw new Error(`Role with id ${id} not found`)
      }
      return roleExists
    }
  }
}
