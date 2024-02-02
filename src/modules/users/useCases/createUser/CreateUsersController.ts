import { Request, Response } from "express"

import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response) {
    try {
      this.createUserUseCase.execute({ ...request.body })
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
