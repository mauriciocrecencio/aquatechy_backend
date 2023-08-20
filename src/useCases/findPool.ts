import { PoolsRepository } from '@/repositories/poolsRepository'

export class FindPoolUseCase {
  constructor(private poolRepository: PoolsRepository) {
    this.poolRepository = poolRepository
  }

  async execute(id: string) {
    const pool = await this.poolRepository.findById(id)

    return {
      pool,
    }
  }
}
