import { Request, Response } from "express"
import { DeleteRoleUseCase } from "./DeleteRoleUseCase"

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id = request.params.roleId
      await this.deleteRoleUseCase.execute(id)
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
