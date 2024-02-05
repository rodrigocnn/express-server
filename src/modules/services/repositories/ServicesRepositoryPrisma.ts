import { prisma } from '../../../database/prismaClient';

import {
  ICreateServiceDTO,
  IResponseService,
  IServicesRepository
} from './IServicesRepository';

export class ServicesRepositoryPrisma implements IServicesRepository {
  async create(service: ICreateServiceDTO) {
    const result = await prisma.service.create({ data: service });
    return result
      ? {
          id: result.id,
          name: result.name,
          price: Number(result.price),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }
  async read() {
    const services = await prisma.service.findMany();
    return services;
  }

  async update(
    id: string,
    service: ICreateServiceDTO
  ): Promise<IResponseService | null> {
    const result = await prisma.service.update({
      where: {
        id: Number(id)
      },
      data: {
        name: service.name,
        price: service.price
      } as ICreateServiceDTO
    });

    return result
      ? {
          id: result.id,
          name: result.name,
          price: Number(result.price),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }

  async delete(id: string) {
    await prisma.service.delete({
      where: {
        id: Number(id)
      }
    });
  }

  async show(id: string): Promise<IResponseService | null> {
    const result = await prisma.service.findFirst({
      where: { id: Number(id) }
    });
    return result
      ? {
          id: result.id,
          name: result.name,
          price: Number(result.price),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }

  async exists(id: string) {
    const role = await prisma.service.findFirst({
      where: {
        id: {
          equals: Number(id)
        }
      }
    });

    return !!role;
  }
}
