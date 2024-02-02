export interface ICreateProfessionalDTO {
  name: string
  roleId: number | null
  email: string
  birth: string
  phone: string
  rg: string
  cpf: string
  address: string
  district: string
  city: string
  state: string
}

export interface IResponseProfessional {
  id: number
  roleId: number | null
  roleName?: string
  name: string
  email: string
  birth: string
  phone: string
  rg: string
  cpf: string | null
  address: string
  district: string
  city: string
  state: string
  createdAt: Date
  updatedAt: Date
}

export interface IProfessionalsRepository {
  create(professional: ICreateProfessionalDTO): void
  read(): void
  show(id: string): Promise<IResponseProfessional | null>
  update(id: string, professional: ICreateProfessionalDTO): Promise<IResponseProfessional | null>
  // delete(id: string): void
  exists?(id: string): Promise<boolean>
}
