import 'module-alias/register'

import { makeExpressApp } from '@/main/web/http/config/app'
import env from './env'

const main = async (): Promise<void> => {
  const app = makeExpressApp()

  app.listen(env.application.port, () => console.log(`Server listening on https://localhost:${env.application.port}! :)`))
}

main().catch(console.error)
