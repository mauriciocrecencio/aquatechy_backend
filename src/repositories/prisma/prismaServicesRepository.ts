import { Prisma } from '@prisma/client'

import { bd } from '../repository'
import { ServicesRepository } from '../servicesRepository'

export class PrismaServicesRepository implements ServicesRepository {
  async done(data: Prisma.ServiceCreateInput) {
    const service = await bd.service.create({ data })
    return service
  }
}
