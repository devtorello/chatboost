export type StartConversationResultData = {
  message: string
}

export type StartConversationResult = {
  data: StartConversationResultData
}

export interface StartConversation {
  execute: () => Promise<StartConversationResult>
}

export type ContinueConversationResultData = {
  message: string
}

export type ContinueConversationResult = {
  data: ContinueConversationResultData
}

export type ContinueConversationDTO = {
  text: string
}

export interface ContinueConversation {
  execute: (dto: ContinueConversationDTO) => Promise<ContinueConversationResult>
}
