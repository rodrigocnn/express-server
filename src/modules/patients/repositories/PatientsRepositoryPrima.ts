import { ICreatePatientDTO, IPatientsRepository, IResponsePatient } from "./IPatientsRepository"
import { prisma } from "../../../database/prismaClient"

export class PatientsRepositoryPrima implements IPatientsRepository {
  async create(patient: ICreatePatientDTO) {
    await prisma.patient.create({ data: patient })
  }

  async read() {
    const patients = await prisma.patient.findMany()
    return patients
  }

  async show(id: string): Promise<IResponsePatient | null> {
    const result = await prisma.patient.findFirst({ where: { id: Number(id) } })
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
          updatedAt: result.updatedAt,
        }
      : null
  }

  async update(id: string, patient: ICreatePatientDTO) {
    await prisma.patient.update({
      where: {
        id: Number(id),
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
        state: patient.state,
      } as ICreatePatientDTO,
    })
  }

  async exists(id: string) {
    const patient = await prisma.patient.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    })

    return !!patient
  }
}
