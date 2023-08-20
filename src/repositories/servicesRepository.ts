import { Prisma, Service } from '@prisma/client'

export interface ServicesRepository {
  done: (data: Prisma.ServiceCreateInput) => Promise<Service | null>
}
