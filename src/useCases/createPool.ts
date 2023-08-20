import { Prisma } from '@prisma/client'

import { ClientsRepository } from '@/repositories/clientsRepository'
import { PoolsRepository } from '@/repositories/poolsRepository'
import { UsersRepository } from '@/repositories/usersRepository'

import { OwnerNotFound } from './errors/errorOwnerNotFound'

interface CreatePoolUseCaseRequest
  extends Omit<Prisma.PoolCreateInput, 'clientOwner' | 'userOwner'> {
  userOwnerId: string
  clientOwnerId: string
}

export class CreatePoolUseCase {
  constructor(
    private clientsRepository: ClientsRepository,
    private usersRepository: UsersRepository,
    private poolsRepository: PoolsRepository,
  ) {
    this.clientsRepository = clientsRepository
  }

  async execute({
    userOwnerId,
    isActive,
    name,
    address,
    zip,
    state,
    city,
    clientOwnerId,
    animalDanger,
    lockerCode,
    poolType,
    enterSide,
    photos,
  }: CreatePoolUseCaseRequest) {
    const client = await this.clientsRepository.findById(clientOwnerId)
    const user = await this.usersRepository.findById(userOwnerId)

    if (!user || !client) {
      throw new OwnerNotFound()
    }
    console.log(address)
    const pool = await this.poolsRepository.create({
      address,
      zip,
      city,
      isActive,
      state,
      userOwner: { connect: { id: userOwnerId } },
      name,
      enterSide,
      poolType,
      animalDanger,
      clientOwner: { connect: { id: clientOwnerId } },
      lockerCode,
      photos,
    })

    return {
      pool,
    }
  }
}
