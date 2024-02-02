import { IRolesRepository } from "../../repositories/IRolesRepository"

export class ReadRolesUseCase {
  constructor(private rolesRepository: IRolesRepository) {}

  execute() {
    const roles = this.rolesRepository.read()
    return roles
  }
}
