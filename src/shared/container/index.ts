import { container } from "tsyringe"
import { IRolesRepository } from "../../modules/roles/repositories/IRolesRepository"
import { RolesRepositoryPrisma } from "../../modules/roles/repositories/RolesRepositoryPrisma"
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository"
import { UsersRepositoryPrisma } from "../../modules/users/repositories/UsersRepositoryPrisma"
import { IServicesRepository } from "../../modules/services/repositories/IServicesRepository"
import { ServicesRepositoryPrisma } from "../../modules/services/repositories/ServicesRepositoryPrisma"
import { IPatientsRepository } from "../../modules/patients/repositories/IPatientsRepository"
import { PatientsRepositoryPrima } from "../../modules/patients/repositories/PatientsRepositoryPrima"
import { ProfessionalsRepositoryPrima } from "../../modules/professionals/repositories/ProfessionalsRepositoryPrima"
import { IProfessionalsRepository } from "../../modules/professionals/repositories/IProfessionalsRepository"

container.registerSingleton<IRolesRepository>("RolesRepositoryPrisma", RolesRepositoryPrisma)
container.registerSingleton<IUsersRepository>("UsersRepositoryPrisma", UsersRepositoryPrisma)
container.registerSingleton<IServicesRepository>("ServicesRepositoryPrisma", ServicesRepositoryPrisma)
container.registerSingleton<IPatientsRepository>("PatientsRepositoryPrisma", PatientsRepositoryPrima)
container.registerSingleton<IProfessionalsRepository>("ProfessionalsRepositoryPrisma", ProfessionalsRepositoryPrima)
