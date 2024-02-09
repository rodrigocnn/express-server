export interface ICreatePatientDTO {
  id?: number;
  name: string;
  email: string;
  birth: string;
  phone: string;
  rg: string;
  cpf: string;
  address: string;
  district: string;
  city: string;
  state: string;
}
export interface IResponsePatient {
  id?: number;
  name: string;
  email: string;
  birth: string;
  phone: string;
  rg: string;
  cpf: string;
  address: string;
  district: string;
  city: string;
  state: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPatientsRepository {
  create(patient: ICreatePatientDTO): Promise<IResponsePatient | null>;
  read(): Promise<IResponsePatient[]>;
  update(id: string, role: ICreatePatientDTO): Promise<IResponsePatient | null>;
  show(id: string): Promise<IResponsePatient | null>;
  exists?(id: string): Promise<boolean>;
}
