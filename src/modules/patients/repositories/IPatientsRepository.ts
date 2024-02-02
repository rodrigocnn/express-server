export interface ICreatePatientDTO {
  name: string
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
export interface IResponsePatient {
  id: number
  name: string
  email: string
  birth: string
  phone: string
  rg: string
  cpf: string
  address: string
  district: string
  city: string
  state: string
  createdAt: Date
  updatedAt: Date
}

export interface IPatientsRepository {
  create(patient: ICreatePatientDTO): void
  read(): void
  update(id: string, role: ICreatePatientDTO): void
  show(id: string): Promise<IResponsePatient | null>
  // delete(id: string): void
  exists?(id: string): Promise<boolean>
}
