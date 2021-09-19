export interface Dialogflow {
  triggerIntent: (event: string) => Promise<any>
}
