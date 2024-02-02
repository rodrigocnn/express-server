import { Request, Response } from "express"

import { CreateServiceUseCase } from "./CreateServiceUseCase"

export class CreateServiceController {
  constructor(private createServiceUseCase: CreateServiceUseCase) {}

  handle(request: Request, response: Response) {
    try {
      this.createServiceUseCase.execute({ ...request.body })
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
