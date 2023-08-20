import { ClientsRepository } from '@/repositories/clientsRepository'

export class FindClientUseCase {
  constructor(private clientsRepository: ClientsRepository) {
    this.clientsRepository = clientsRepository
  }

  async execute(id: string) {
    const client = await this.clientsRepository.findById(id)

    return {
      client,
    }
  }
}
