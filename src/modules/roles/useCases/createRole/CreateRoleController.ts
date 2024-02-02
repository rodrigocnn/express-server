import { Request, Response } from "express"
import { CreateRoleUseCase } from "./CreateRoleUseCase"
import { container } from "tsyringe"

export class CreateRoleController {
  handle(request: Request, response: Response) {
    try {
      const createRoleUseCase = container.resolve(CreateRoleUseCase)
      createRoleUseCase.execute({ ...request.body })
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
