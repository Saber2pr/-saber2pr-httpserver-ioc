import { Method } from '../../interface/controller'
import { mapMethodToKey } from '../../core/utils/mapMethodToKey'
import { KEY } from '../../common/constants/metakeys'

describe('mapMethodToKey', () => {
  it('resolve methods to keys', () => {
    const methods: Method[] = ['GET', 'POST', 'DELETE', 'PUT']
    const result = methods.map(mapMethodToKey)
    expect(result).toEqual([
      KEY.Controller.GET,
      KEY.Controller.POST,
      KEY.Controller.DELETE,
      KEY.Controller.PUT
    ])
  })
})
