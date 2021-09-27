import { HttpController, HttpRequest, HttpResponse } from '@/controllers/contracts'
import { StartConversation } from '@/usecases/contracts/conversation'
import { success, serverError } from '@/controllers/common/http-returns'

export class StartConversationController implements HttpController {
  constructor (
    private readonly startConversation: StartConversation
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.startConversation.execute()

      return success(result)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
