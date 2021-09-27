import { UUIDService } from './uuid'

jest.mock('uuid', () => ({ v4: () => 'any_value' }))

describe('UUID Generator Service', () => {
  test('Should return a random uuid', () => {
    const sut = new UUIDService()
    const id = sut.generate()
    expect(id).toEqual('any_value')
  })
})
