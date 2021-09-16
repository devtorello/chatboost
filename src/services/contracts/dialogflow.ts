export interface Dialogflow {
  triggerIntent: (event: string) => Promise<string>
}
