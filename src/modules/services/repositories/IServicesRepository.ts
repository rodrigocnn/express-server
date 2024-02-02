export interface ICreateServiceDTO {
  name: string
  price: number
}

export interface IResponseService {
  id: number
  name: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export interface IServicesRepository {
  create(service: ICreateServiceDTO): void
  read(): void
  show(id: string): Promise<IResponseService | null>
  update(id: string, role: ICreateServiceDTO): Promise<IResponseService | null>
  delete(id: string): void
  exists?(id: string): Promise<boolean>
}
