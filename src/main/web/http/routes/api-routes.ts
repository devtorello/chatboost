import { makeStartConversation } from '@/main/factories/conversation/start-conversation/start-conversation-factory'
import { adaptExpressRoute } from '@/main/web/http/config/route-adapter'
import { Router } from 'express'

export default async (router: Router): Promise<void> => {
  router.post('/welcome', adaptExpressRoute(makeStartConversation()))
}
