import { Request, Response } from "express"
import { ShowServiceUseCase } from "./ShowServiceUseCase"
import { container } from "tsyringe"

export class ShowServiceController {
  async handle(request: Request, response: Response) {
    try {
      const showServiceUseCase = container.resolve(ShowServiceUseCase)
      const id = request.params.serviceId
      const role = await showServiceUseCase.execute(id)
      return response.status(201).send(role)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
