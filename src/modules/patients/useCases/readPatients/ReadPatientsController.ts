import { Request, Response } from "express"

import { ReadPatientsUseCase } from "./ReadPatientsUseCase"

export class ReadPatientsController {
  constructor(private readPatientsUseCase: ReadPatientsUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const patients = await this.readPatientsUseCase.execute()
      return response.status(201).send(patients)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
