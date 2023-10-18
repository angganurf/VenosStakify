import { Token, ChainId } from '@pancakeswap/sdk'
import { bscTokens, opbnbTestnetTokens } from './tokens'
import { CAKE_BNB_LP_MAINNET, CAKE_BNB_LP_TESTNET } from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.BSC_TESTNET, CAKE_BNB_LP_TESTNET, 18, 'VENOS-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'blink',
    address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
    isActive: false,
    name: 'BLINk (BLK)',
    poolUnlimited: {
      saleAmount: '100,000,000 BLINK',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: opbnbTestnetTokens.cake,
    releaseBlockNumber: 3279767,
    campaignId: '511010000',
    articleUrl: 'https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8',
    tokenOfferingPrice: null,
    version: 1,
  },
]

export default ifos
