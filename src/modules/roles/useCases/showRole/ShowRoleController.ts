import { Request, Response } from "express"
import { ShowRoleUseCase } from "./ShowRoleUseCase"
import { container } from "tsyringe"

export class ShowRoleController {
  async handle(request: Request, response: Response) {
    try {
      const showRoleUseCase = container.resolve(ShowRoleUseCase)
      const id = request.params.roleId
      const role = await showRoleUseCase.execute(id)
      return response.status(201).send(role)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
