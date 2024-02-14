import { Request, Response } from 'express';
import { ShowPatientUseCase } from './ShowPatientUseCase';
import { container } from 'tsyringe';

export class ShowPatientController {
  async handle(request: Request, response: Response) {
    try {
      const showPatientUseCase = container.resolve(ShowPatientUseCase);
      const id = request.params.patientId;
      const role = await showPatientUseCase.execute(Number(id));
      return response.status(201).send(role);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
