import { IResponseRole, IRolesRepository } from "../../repositories/IRolesRepository"

interface IRequest {
  id: string
  name: string
}

export class UpdateRoleUseCase {
  constructor(private rolesRepository: IRolesRepository) {}

  async execute(role: IRequest): Promise<IResponseRole> {
    if (!role.name) {
      throw new Error("Name is required")
    }

    return await this.rolesRepository.update(role.id, role)
  }
}
