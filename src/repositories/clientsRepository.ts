import { Client, Prisma } from '@prisma/client'

export interface ClientsRepository {
  create(data: Prisma.ClientCreateInput): Promise<Client>
  findByEmail(email: string): Promise<Client | null>
  findById(id: string): Promise<Partial<Client | null>>
}
