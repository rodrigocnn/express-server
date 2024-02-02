import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"

@injectable()
export class ReadUsersUseCase {
  constructor(
    @inject("UsersRepositoryPrisma")
    private usersRepository: IUsersRepository,
  ) {}

  execute() {
    const users = this.usersRepository.read()
    return users
  }
}
