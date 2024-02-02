import { prisma } from "../../../database/prismaClient"

import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository"

export class UsersRepositoryPrisma implements IUsersRepository {
  async create(user: ICreateUserDTO) {
    await prisma.user.create({ data: user })
  }
  async read() {
    const users = await prisma.user.findMany()
    return users
  }

  async update(id: string, user: ICreateUserDTO) {
    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name: user.name,
        email: user.email,
      } as ICreateUserDTO,
    })
  }

  async delete(id: string) {
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    })
  }

  async exists(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    })

    return !!user
  }

  async existsbyEmail(email: string) {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    return user
  }
}
