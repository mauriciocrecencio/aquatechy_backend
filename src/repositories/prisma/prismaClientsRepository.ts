import { Prisma } from '@prisma/client'

import { prismaExclude } from '@/utils/prismaExclude'

import { ClientsRepository } from '../clientsRepository'
import { bd } from '../repository'

export class PrismaClientsRepository implements ClientsRepository {
  async create(data: Prisma.ClientCreateInput) {
    const client = await bd.client.create({ data })
    return client
  }

  async findByEmail(email1: string) {
    const client = await bd.client.findUnique({ where: { email1 } })
    return client
  }

  async findById(id: string) {
    const client = await bd.client.findUnique({
      where: { id },
      select: {
        ...prismaExclude('Client', [
          'id',
          'createdAt',
          'updatedAt',
          'userOwnerId',
        ]),
        userOwner: {
          select: prismaExclude('User', [
            'password',
            'id',
            'refreshTokens',
            'createdAt',
            'updatedAt',
          ]),
        },
      },
    })

    return client // Retorna diretamente o objeto client
  }

  // async findById(id: string) {
  //   const client = await bd.client.findUnique({
  //     where: { id },
  //     select: {
  //       ...prismaExclude('Client', ['id', 'createdAt', 'updatedAt']),
  //       userOwner: {
  //         select: prismaExclude('User', [
  //           'password',
  //           'id',
  //           'refreshTokens',
  //           'createdAt',
  //           'updatedAt',
  //         ]),
  //       },
  //     },
  //   })
  //   return client
  // }
}
