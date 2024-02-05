export interface ICreateRoleDTO {
  name: string;
}

export interface IResponseRole {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRolesRepository {
  create(role: ICreateRoleDTO): Promise<IResponseRole>;
  read(): void;
  update(id: string, role: ICreateRoleDTO): Promise<IResponseRole>;
  delete(id: string): void;
  show(id: string): Promise<IResponseRole | null>;
  exists?(id: string): Promise<boolean>;
}
