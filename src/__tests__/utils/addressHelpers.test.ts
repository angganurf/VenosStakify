import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    204: '0xadEFbbac7501f4Df8aDC7288c2FA86d36A3E9ebC',
    5611: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    const expected = address[204]
    expect(getAddress(address, 204)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    const expected = address[5611]
    expect(getAddress(address, 5611)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    const expected = address[204]
    expect(getAddress(address, 31337)).toEqual(expected)
  })
})
