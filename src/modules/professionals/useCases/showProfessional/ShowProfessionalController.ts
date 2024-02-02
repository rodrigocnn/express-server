import { Request, Response } from "express"
import { ShowProfessionalUseCase } from "./ShowProfessionalUseCase"
import { container } from "tsyringe"

export class ShowProfessionalController {
  async handle(request: Request, response: Response) {
    try {
      const showProfessionalUseCase = container.resolve(ShowProfessionalUseCase)
      const id = request.params.professionalId
      const role = await showProfessionalUseCase.execute(id)
      return response.status(201).send(role)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.status(500).json({ error: "Internal Server Error" })
    }
  }
}
