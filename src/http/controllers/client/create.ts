import { FastifyReply, FastifyRequest } from 'fastify'

import { ClientSchema } from '@/lib/zodObjects'
import { ClientAlreadyExistsError } from '@/useCases/errors/errorClientAlreadyExists'
import { makeCreateClientUseCase } from '@/useCases/factories/makeCreateClientFactory'

export async function createClient(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const data = ClientSchema.parse(request.body)

  let user
  try {
    const createClientUseCase = makeCreateClientUseCase()

    user = await createClientUseCase.execute(data)
  } catch (error) {
    if (error instanceof ClientAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }
  return reply.status(201).send(user)
}
