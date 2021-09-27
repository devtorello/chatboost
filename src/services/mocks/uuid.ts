import { UUID } from '@/services/contracts/uuid'

export const mockUUID = (): UUID => {
  class UUIDGeneratorServiceStub implements UUID {
    generate (): string {
      return 'any_uuid'
    }
  }

  return new UUIDGeneratorServiceStub()
}
