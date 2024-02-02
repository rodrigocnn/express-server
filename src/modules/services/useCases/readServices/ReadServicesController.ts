import { Request, Response } from "express"

import { ReadServicesUseCase } from "./ReadServicesUseCase"

export class ReadServicesController {
  constructor(private readServicesUseCase: ReadServicesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const roles = await this.readServicesUseCase.execute()
      return response.status(201).send(roles)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
