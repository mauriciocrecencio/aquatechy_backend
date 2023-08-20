import { UsersRepository } from '@/repositories/usersRepository'

export class FindUserUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    return {
      user,
    }
  }
}
