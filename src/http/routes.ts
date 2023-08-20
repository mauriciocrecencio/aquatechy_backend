import { FastifyInstance } from 'fastify'

import { createClient } from './controllers/client/create'
import { findClient } from './controllers/client/find'
import { createPool } from './controllers/pool/create'
import { findPool } from './controllers/pool/find'
import { createUser } from './controllers/user/create'
import { findUser } from './controllers/user/find'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.get('/users/:id', findUser)
  app.post('/clients', createClient)
  app.get('/clients/:id', findClient)
  app.post('/pools', createPool)
  app.get('/pools/:id', findPool)
}
