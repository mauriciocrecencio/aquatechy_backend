import { PrismaUsersRepository } from '@/repositories/prisma/prismaUsersRepository'

import { FindUserUseCase } from '../findUser'

export function makeFindUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const findUserUseCase = new FindUserUseCase(usersRepository)

  return findUserUseCase
}
