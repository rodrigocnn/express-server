import { inject, injectable } from "tsyringe"
import { IRolesRepository } from "../../repositories/IRolesRepository"

@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject("RolesRepositoryPrisma")
    private rolesRepository: IRolesRepository,
  ) {}

  async execute(id: string) {
    if (this.rolesRepository.exists) {
      const roleExists = await this.rolesRepository.show(id)
      if (!roleExists) {
        throw new Error(`Role with id ${id} not found`)
      }
      return roleExists
    }
  }
}
