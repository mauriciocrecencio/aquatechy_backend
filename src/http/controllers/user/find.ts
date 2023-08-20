import { FastifyReply, FastifyRequest } from 'fastify'

import { ID } from '@/lib/zodObjects'
import { makeFindUserUseCase } from '@/useCases/factories/makeFindUserFactory'

export async function findUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = ID.parse(request.params)

  const findUserUserCase = makeFindUserUseCase()

  const user = await findUserUserCase.execute(id)

  return reply.status(200).send(user)
}
