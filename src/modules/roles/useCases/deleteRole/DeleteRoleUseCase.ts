import { IRolesRepository } from "../../repositories/IRolesRepository"

export class DeleteRoleUseCase {
  constructor(private rolesRepository: IRolesRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required")
    }

    if (this.rolesRepository.exists) {
      const roleExists = await this.rolesRepository.exists(id)
      if (!roleExists) {
        throw new Error(`Role with id ${id} not found`)
      }
    }

    this.rolesRepository.delete(id)
  }
}
