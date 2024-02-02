import { Request, Response } from "express"
import { CreateProfessionalUseCase } from "./CreateProfessionalUseCase"

export class CreateProfessionalsController {
  constructor(private createProfessionalUseCase: CreateProfessionalUseCase) {}

  handle(request: Request, response: Response) {
    try {
      this.createProfessionalUseCase.execute({ ...request.body })
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
