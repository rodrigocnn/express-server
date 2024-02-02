import { Request, Response } from "express"
import { UpdateRoleUseCase } from "./UpdateRoleUseCase"
import { errorResponse, successResponse } from "../../../../shared/utils/responseUtils"
import { IResponseRole } from "../../repositories/IRolesRepository"

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handle(request: Request, response: Response) {
    const role = {
      id: request.params.roleId,
      ...request.body,
    }

    try {
      const roleUpdated = await this.updateRoleUseCase.execute(role)
      const result = successResponse<IResponseRole>("Cargo atualizado com sucesso", roleUpdated)
      return response.status(201).send(result)
    } catch (error) {
      if (error instanceof Error) {
        const result = errorResponse(error.message)
        return response.status(400).json(result)
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
