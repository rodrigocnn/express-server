import { prisma } from '../../../database/prismaClient';
import { ICreateRoleDTO, IRolesRepository } from './IRolesRepository';

export class RolesRepositoryPrisma implements IRolesRepository {
  async create(role: ICreateRoleDTO) {
    return await prisma.role.create({ data: role });
  }
  async read() {
    const roles = await prisma.role.findMany();
    return roles;
  }

  async update(id: string, role: ICreateRoleDTO) {
    return await prisma.role.update({
      where: {
        id: Number(id)
      },
      data: {
        name: role.name
      } as ICreateRoleDTO
    });
  }

  async delete(id: string) {
    await prisma.role.delete({
      where: {
        id: Number(id)
      }
    });
  }

  async exists(id: string) {
    const role = await prisma.role.findFirst({
      where: {
        id: {
          equals: Number(id)
        }
      }
    });

    return !!role;
  }

  async show(id: string) {
    const role = await prisma.role.findFirst({
      where: {
        id: {
          equals: Number(id)
        }
      }
    });

    return role;
  }
}
