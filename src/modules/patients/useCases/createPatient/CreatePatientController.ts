import { Request, Response } from 'express';
import { CreatePatientUseCase } from './CreatePatientUseCase';

export class CreatePatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const patientCreated = await this.createPatientUseCase.execute({
        ...request.body
      });
      return response.status(201).send(patientCreated);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
