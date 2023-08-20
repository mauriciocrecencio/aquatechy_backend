import { FastifyReply, FastifyRequest } from 'fastify'

import { UserSchema } from '@/lib/zodObjects'
import { UserAlreadyExistsError } from '@/useCases/errors/errorUserAlreadyExists'
import { makeCreateUserUseCase } from '@/useCases/factories/makeCreateUserFactory'

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = UserSchema.parse(request.body)

  let user

  try {
    const createUserUseCase = makeCreateUserUseCase()

    user = await createUserUseCase.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }
  return reply.status(201).send(user)
}
