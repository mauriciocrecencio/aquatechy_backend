import { FastifyReply, FastifyRequest } from 'fastify'

import { PoolSchema } from '@/lib/zodObjects'
import { OwnerNotFound } from '@/useCases/errors/errorOwnerNotFound'
import { makeCreatePoolUseCase } from '@/useCases/factories/makeCreatePoolFactory'

export async function createPool(request: FastifyRequest, reply: FastifyReply) {
  const data = PoolSchema.parse(request.body)

  let pool

  try {
    const createPoolUseCase = makeCreatePoolUseCase()

    pool = await createPoolUseCase.execute(data)
  } catch (error) {
    if (error instanceof OwnerNotFound) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }
  return reply.status(201).send(pool)
}
