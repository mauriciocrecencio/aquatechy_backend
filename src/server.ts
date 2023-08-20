import { app } from './app'
import { env } from './env'

const port = env.PORT
const host = '0.0.0.0'

app
  .listen({
    host,
    port,
  })
  .then(() => {
    console.log(`Server is running on ${host}:${port}`)
  })
