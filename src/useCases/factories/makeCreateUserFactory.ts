import { PrismaUsersRepository } from '@/repositories/prisma/prismaUsersRepository'

import { CreateUserUseCase } from '../createUser'

export function makeCreateUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUserUseCase(usersRepository)

  return createUserUseCase
}
