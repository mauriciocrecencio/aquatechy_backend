import { app } from './app'
import { env } from './env'

const port = env.PORT
const host = env.HOST

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server is running on ${host}:${port}`)
  })
