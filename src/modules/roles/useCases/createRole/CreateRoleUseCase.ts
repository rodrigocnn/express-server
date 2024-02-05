import { inject, injectable } from 'tsyringe';
import {
  IResponseRole,
  IRolesRepository
} from '../../repositories/IRolesRepository';

interface IRequest {
  name: string;
}

@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RolesRepositoryPrisma')
    private rolesRepository: IRolesRepository
  ) {}

  async execute(role: IRequest): Promise<IResponseRole> {
    if (!role.name) {
      throw new Error('Name is required');
    }
    return this.rolesRepository.create(role);
  }
}
