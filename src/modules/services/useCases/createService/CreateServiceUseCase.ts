import {
  IResponseService,
  IServicesRepository
} from '../../repositories/IServicesRepository';

interface IRequest {
  name: string;
  price: number;
}

export class CreateServiceUseCase {
  constructor(private servicesRepository: IServicesRepository) {}

  async execute(service: IRequest): Promise<IResponseService | null> {
    if (!service.name || !service.price) {
      throw new Error('Name and Price are required');
    }
    return this.servicesRepository.create(service);
  }
}
