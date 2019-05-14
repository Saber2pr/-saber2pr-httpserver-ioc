import { pathToProp } from '../../core/utils/pathToProp'

describe('pathToProp', () => {
  it('parsePathToTargetMemberNameStartWithSlash', () => {
    const result = pathToProp('/user')
    expect(result).toEqual('user')
  })

  it('parsePathToTargetMemberNameStartWithNoSlash', () => {
    const result = pathToProp('user')
    expect(result).toEqual('user')
  })
})
