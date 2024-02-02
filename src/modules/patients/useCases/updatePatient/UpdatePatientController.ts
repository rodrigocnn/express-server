import { Request, Response } from "express"
import { UpdatePatientUseCase } from "./UpdatePatientUseCase"

export class UpdatePatientController {
  constructor(private updatePatientUseCase: UpdatePatientUseCase) {}

  async handle(request: Request, response: Response) {
    const service = {
      id: request.params.patientId,
      ...request.body,
    }

    try {
      const roles = await this.updatePatientUseCase.execute(service)
      return response.status(201).send(roles)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
