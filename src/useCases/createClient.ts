import { ClientsRepository } from '@/repositories/clientsRepository'
import { UsersRepository } from '@/repositories/usersRepository'

import { ClientAlreadyExistsError } from './errors/errorClientAlreadyExists'
import { OwnerNotFound } from './errors/errorOwnerNotFound'

interface CreateClientUseCaseRequest {
  userOwnerId: string
  isActive: boolean
  name: string
  address: string
  zip: string
  state: string
  city: string
  phone1: string
  phone2?: string
  email1: string
  email2?: string
  deactivatedAt: Date
}

export class CreateClientUseCase {
  constructor(
    private clientsRepository: ClientsRepository,
    private usersRepository: UsersRepository,
  ) {
    this.clientsRepository = clientsRepository
  }

  async execute({
    address,
    zip,
    city,
    deactivatedAt,
    isActive,
    phone1,
    state,
    userOwnerId,
    name,
    email1,
  }: CreateClientUseCaseRequest) {
    const clientWithSameEmail = await this.clientsRepository.findByEmail(email1)
    const user = await this.usersRepository.findById(userOwnerId)

    if (!user) {
      throw new OwnerNotFound()
    }

    if (clientWithSameEmail) {
      throw new ClientAlreadyExistsError()
    }

    const client = await this.clientsRepository.create({
      address,
      zip,
      city,
      deactivatedAt,
      isActive,
      phone1,
      state,
      userOwner: { connect: { id: userOwnerId } },
      name,
      email1,
    })

    return {
      client,
    }
  }
}
