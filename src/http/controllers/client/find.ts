import { FastifyReply, FastifyRequest } from 'fastify'

import { ID } from '@/lib/zodObjects'
import { makeFindClientUseCase } from '@/useCases/factories/makeFindClientFactory'

export async function findClient(request: FastifyRequest, reply: FastifyReply) {
  const { id } = ID.parse(request.params)

  const findClientUseCase = makeFindClientUseCase()

  const client = await findClientUseCase.execute(id)

  return reply.status(200).send(client)
}
