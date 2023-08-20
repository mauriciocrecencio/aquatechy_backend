import { Prisma } from '@prisma/client'

import { prismaExclude } from '@/utils/prismaExclude'

import { bd } from '../repository'
import { UsersRepository } from '../usersRepository'

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await bd.user.create({ data })
    return user
  }

  async findByEmail(email: string) {
    const user = await bd.user.findUnique({ where: { email } })
    return user
  }

  async findById(id: string) {
    const user = await bd.user.findUnique({
      where: { id },
      select: {
        ...prismaExclude('User', [
          'password',
          'id',
          'refreshTokens',
          'createdAt',
          'updatedAt',
        ]),
        clients: {
          select: {
            ...prismaExclude('Client', [
              'id',
              'createdAt',
              'updatedAt',
              'userOwnerId',
            ]),
            pools: {
              select: {
                ...prismaExclude('Pool', [
                  'createdAt',
                  'updatedAt',
                  'userOwnerId',
                  'clientOwnerId',
                ]),
              },
            },
          },
        },
      },
    })
    return user
  }
}
