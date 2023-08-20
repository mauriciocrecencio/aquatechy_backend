import { FastifyReply, FastifyRequest } from 'fastify'

import { ID } from '@/lib/zodObjects'
import { makeFindPoolUseCase } from '@/useCases/factories/makeFindPoolFactory'

export async function findPool(request: FastifyRequest, reply: FastifyReply) {
  const { id } = ID.parse(request.params)

  const findPoolUseCase = makeFindPoolUseCase()

  const pool = await findPoolUseCase.execute(id)

  return reply.status(200).send(pool)
}
