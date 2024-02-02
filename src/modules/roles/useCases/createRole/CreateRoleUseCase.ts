import { inject, injectable } from "tsyringe"
import { IRolesRepository } from "../../repositories/IRolesRepository"

interface IRequest {
  name: string
}

@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject("RolesRepositoryPrisma")
    private rolesRepository: IRolesRepository,
  ) {}

  execute(role: IRequest) {
    if (!role.name) {
      throw new Error("Name is required")
    }
    this.rolesRepository.create(role)
  }
}
