import { Request, Response } from "express"
import { UpdateServiceUseCase } from "./UpdateServiceUseCase"
import { successResponse } from "../../../../shared/utils/responseUtils"
import { IResponseService } from "../../repositories/IServicesRepository"

export class UpdateServiceController {
  constructor(private updateServiceUseCase: UpdateServiceUseCase) {}

  async handle(request: Request, response: Response) {
    const service = {
      id: request.params.serviceId,
      ...request.body,
    }

    try {
      const serviceUpdated = await this.updateServiceUseCase.execute(service)
      const result = successResponse<IResponseService | null>("Cargo atualizado com sucesso", serviceUpdated)
      return response.status(201).send(result)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
