import { Request, Response } from "express"
import { DeleteServiceUseCase } from "./DeleteServiceUseCase"

export class DeleteServiceController {
  constructor(private deleteServiceUseCase: DeleteServiceUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id = request.params.serviceId
      await this.deleteServiceUseCase.execute(id)
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
