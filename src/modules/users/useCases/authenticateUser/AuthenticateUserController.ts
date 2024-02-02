import { Request, Response } from "express"

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const user = await this.authenticateUserUseCase.execute({ ...request.body })
      return response.status(201).send(user)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
