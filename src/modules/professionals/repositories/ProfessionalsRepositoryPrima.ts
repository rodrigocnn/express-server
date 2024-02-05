import {
  ICreateProfessionalDTO,
  IProfessionalsRepository,
  IResponseProfessional
} from './IProfessionalsRepository';
import { prisma } from '../../../database/prismaClient';

export class ProfessionalsRepositoryPrima implements IProfessionalsRepository {
  async create(professional: ICreateProfessionalDTO) {
    const result = await prisma.professional.create({ data: professional });

    return result
      ? {
          id: result.id,
          roleId: result.roleId,
          name: result.name,
          email: result.email,
          birth: result.birth,
          phone: result.phone,
          rg: result.rg,
          cpf: result.cpf || '',
          address: result.address,
          district: result.district,
          city: result.city,
          state: result.state,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }

  async read() {
    const professionals = await prisma.professional.findMany({
      include: { role: true }
    });

    return professionals.map((result) => ({
      id: result.id,
      roleId: result.roleId,
      roleName: result.role?.name,
      name: result.name,
      email: result.email,
      birth: result.birth,
      phone: result.phone,
      rg: result.rg,
      cpf: result.cpf || '',
      address: result.address,
      district: result.district,
      city: result.city,
      state: result.state,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt
    }));
  }

  async show(id: string): Promise<IResponseProfessional | null> {
    const result = await prisma.professional.findFirst({
      where: { id: Number(id) },
      include: { role: true }
    });
    return result
      ? {
          id: result.id,
          roleId: result.roleId,
          roleName: result.role?.name, // Adiciona o nome do cargo
          name: result.name,
          email: result.email,
          birth: result.birth,
          phone: result.phone,
          rg: result.rg,
          cpf: result.cpf || '',
          address: result.address,
          district: result.district,
          city: result.city,
          state: result.state,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }

  async update(
    id: string,
    professional: ICreateProfessionalDTO
  ): Promise<IResponseProfessional | null> {
    return await prisma.professional.update({
      where: {
        id: Number(id)
      },
      data: {
        roleId: professional.roleId,
        name: professional.name,
        email: professional.email,
        birth: professional.birth,
        phone: professional.phone,
        rg: professional.rg,
        cpf: professional.cpf || '',
        address: professional.address,
        district: professional.district,
        city: professional.city,
        state: professional.state
      } as ICreateProfessionalDTO
    });
  }

  async exists(id: string) {
    const professional = await prisma.professional.findFirst({
      where: {
        id: {
          equals: Number(id)
        }
      }
    });

    return !!professional;
  }
}
