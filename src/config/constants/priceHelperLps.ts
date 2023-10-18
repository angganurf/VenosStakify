import { bscTokens, opbnbTestnetTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      5611: '0x6387c09fa3e0c86b1d1d954362a7a962638de31e',
      204: '0x3147F98B8f9C53Acdf8F16332eaD12B592a1a4ae',
    },
    token: opbnbTestnetTokens.wbnb,
    quoteToken: opbnbTestnetTokens.usdt,
  },
  // {
  //   pid: null,
  //   lpSymbol: 'ANTEX-BUSD LP',
  //   lpAddresses: {
  //     5611: '',
  //     204: '0x4DcB7b3b0E8914DC0e6D366521604cD23E7991E1',
  //   },
  //   token: bscTokens.antex,
  //   quoteToken: bscTokens.busd,
  // },
]

export default priceHelperLps
