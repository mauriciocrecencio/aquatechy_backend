import { Prisma } from '@prisma/client'

import { prismaExclude } from '@/utils/prismaExclude'

import { PoolsRepository } from '../poolsRepository'
import { bd } from '../repository'

export class PrismaPoolsRepository implements PoolsRepository {
  async create(data: Prisma.PoolCreateInput) {
    const pool = await bd.pool.create({ data })
    return pool
  }

  async findById(id: string) {
    const pool = await bd.pool.findUnique({
      where: { id },
      select: {
        ...prismaExclude('Pool', [
          'id',
          'createdAt',
          'updatedAt',
          'userOwnerId',
          'clientOwnerId',
        ]),
        clientOwner: {
          select: prismaExclude('Client', ['id', 'createdAt', 'updatedAt']),
        },
      },
    })

    return pool
  }
}
