import { Pool, Prisma } from '@prisma/client'

export interface PoolsRepository {
  create(data: Prisma.PoolCreateInput): Promise<Pool>
  findById(id: string): Promise<Partial<Pool | null>>
}
