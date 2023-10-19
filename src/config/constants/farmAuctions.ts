import getLpAddress from 'utils/getLpAddress'
import { bscTokens, opbnbTestnetTokens } from './tokens'
import { FarmAuctionBidderConfig } from './types'

export const whitelistedBidders: FarmAuctionBidderConfig[] = [
  {
    account: '0xBc2b42bff61bc6056D5a1E1ebd9426333EfC8Bcb',
    farmName: 'BNB-BUSD',
    tokenAddress: '0x4200000000000000000000000000000000000006',
    quoteToken: opbnbTestnetTokens.usdt,
    tokenName: 'BNB',
    projectSite: 'https://OPBNB.com/',
  },
].map((bidderConfig) => ({
  ...bidderConfig,
  lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
}))

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: opbnbTestnetTokens.wbnb,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
