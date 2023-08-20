import { PrismaClientsRepository } from '@/repositories/prisma/prismaClientsRepository'
import { PrismaUsersRepository } from '@/repositories/prisma/prismaUsersRepository'

import { CreateClientUseCase } from '../createClient'

export function makeCreateClientUseCase() {
  const clientsRepository = new PrismaClientsRepository()
  const usersRepository = new PrismaUsersRepository()

  const createClientUseCase = new CreateClientUseCase(
    clientsRepository,
    usersRepository,
  )

  return createClientUseCase
}
