import { PrismaPoolsRepository } from '@/repositories/prisma/prismaPoolsRepository'

import { FindPoolUseCase } from '../findPool'

export function makeFindPoolUseCase() {
  const poolsRepository = new PrismaPoolsRepository()

  const findPoolUseCase = new FindPoolUseCase(poolsRepository)

  return findPoolUseCase
}
