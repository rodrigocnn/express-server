import { Request, Response } from 'express';
import { CreateRoleUseCase } from './CreateRoleUseCase';
import { container } from 'tsyringe';

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    try {
      const createRoleUseCase = container.resolve(CreateRoleUseCase);
      const roleCreated = await createRoleUseCase.execute({ ...request.body });
      return response.status(201).send(roleCreated);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
