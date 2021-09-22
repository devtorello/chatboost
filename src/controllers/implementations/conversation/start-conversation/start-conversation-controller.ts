import { HttpController, HttpRequest, HttpResponse } from '@/controllers/contracts'
import { StartConversation } from '@/usecases/contracts/conversation'
import { noContent, serverError } from '@/controllers/common/http-returns'

export class StartConversationController implements HttpController {
  constructor (
    private readonly startConversation: StartConversation
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      await this.startConversation.execute()

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
