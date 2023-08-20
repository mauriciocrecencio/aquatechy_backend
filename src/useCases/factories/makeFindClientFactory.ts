import { PrismaClientsRepository } from '@/repositories/prisma/prismaClientsRepository'

import { FindClientUseCase } from '../findClient'

export function makeFindClientUseCase() {
  const clientsRepository = new PrismaClientsRepository()
  const findClientsUseCase = new FindClientUseCase(clientsRepository)

  return findClientsUseCase
}
