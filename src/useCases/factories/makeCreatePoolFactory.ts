import { PrismaClientsRepository } from '@/repositories/prisma/prismaClientsRepository'
import { PrismaPoolsRepository } from '@/repositories/prisma/prismaPoolsRepository'
import { PrismaUsersRepository } from '@/repositories/prisma/prismaUsersRepository'

import { CreateClientUseCase } from '../createClient'
import { CreatePoolUseCase } from '../createPool'

export function makeCreatePoolUseCase() {
  const clientsRepository = new PrismaClientsRepository()
  const usersRepository = new PrismaUsersRepository()
  const poolsRepository = new PrismaPoolsRepository()

  const createPoolUseCase = new CreatePoolUseCase(
    clientsRepository,
    usersRepository,
    poolsRepository,
  )

  return createPoolUseCase
}
