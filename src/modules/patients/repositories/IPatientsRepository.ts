export interface IPatientDTO {
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
  create(patient: IPatientDTO): Promise<IResponsePatient | null>;
  read(): Promise<IResponsePatient[]>;
  update(id: number, patient: IPatientDTO): Promise<IResponsePatient | null>;
  show(id: number): Promise<IResponsePatient | null>;
  exists?(id: number): Promise<boolean>;
}
