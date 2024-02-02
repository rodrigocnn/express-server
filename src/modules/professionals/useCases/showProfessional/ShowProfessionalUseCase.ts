import { inject, injectable } from "tsyringe"

import { IProfessionalsRepository } from "../../repositories/IProfessionalsRepository"

@injectable()
export class ShowProfessionalUseCase {
  constructor(
    @inject("ProfessionalsRepositoryPrisma")
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute(id: string) {
    if (this.professionalsRepository.exists) {
      const roleExists = await this.professionalsRepository.show(id)
      if (!roleExists) {
        throw new Error(`Role with id ${id} not found`)
      }
      return roleExists
    }
  }
}
