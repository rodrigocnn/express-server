import {
  IPatientDTO,
  IPatientsRepository,
  IResponsePatient
} from './IPatientsRepository';
import { prisma } from '../../../database/prismaClient';

export class PatientsRepositoryPrima implements IPatientsRepository {
  async create(patient: IPatientDTO) {
    const result = await prisma.patient.create({ data: patient });
    return result
      ? {
          id: result.id,
          name: result.name,
          email: result.email,
          birth: result.birth,
          phone: result.phone,
          rg: result.rg,
          cpf: result.rg,
          address: result.address,
          district: result.district,
          city: result.district,
          state: result.state,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }

  async read() {
    const patients = await prisma.patient.findMany();
    return patients;
  }

  async show(id: number): Promise<IResponsePatient | null> {
    const result = await prisma.patient.findFirst({
      where: { id: Number(id) }
    });
    return result
      ? {
          id: result.id,
          name: result.name,
          email: result.email,
          birth: result.birth,
          phone: result.phone,
          rg: result.rg,
          cpf: result.rg,
          address: result.address,
          district: result.district,
          city: result.district,
          state: result.state,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      : null;
  }

  async update(
    id: number,
    patient: IPatientDTO
  ): Promise<IResponsePatient | null> {
    return await prisma.patient.update({
      where: {
        id: Number(id)
      },
      data: {
        name: patient.name,
        email: patient.email,
        birth: patient.birth,
        phone: patient.phone,
        rg: patient.rg,
        cpf: patient.cpf,
        address: patient.address,
        district: patient.district,
        city: patient.city,
        state: patient.state
      } as IResponsePatient
    });
  }

  async exists(id: number) {
    const patient = await prisma.patient.findFirst({
      where: {
        id: {
          equals: Number(id)
        }
      }
    });

    return !!patient;
  }
}
