import { Request, Response } from "express"
import { CreatePatientUseCase } from "./CreatePatientUseCase"

export class CreatePatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase) {}

  handle(request: Request, response: Response) {
    try {
      this.createPatientUseCase.execute({ ...request.body })
      return response.status(201).send()
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
