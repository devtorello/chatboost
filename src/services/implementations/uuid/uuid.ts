import { UUID } from '@/services/contracts/uuid'
import { v4 as uuid } from 'uuid'

export class UUIDService implements UUID {
  generate (): string {
    return uuid()
  }
}
