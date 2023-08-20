import { PrismaServicesRepository } from '@/repositories/prisma/prismaServicesRepository'

import { FindClientUseCase } from '../findClient'

export function makeDoneServiceUseCase() {
  const servicesRepository = new PrismaServicesRepository()
  const findClientsUseCase = new FindClientUseCase(clientsRepository)

  return findClientsUseCase
}
