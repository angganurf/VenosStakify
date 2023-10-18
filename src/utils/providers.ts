import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE =
  process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://opbnb-testnet.nodereal.io/v1/0a87ef3dd9964c519f1f9d1185710542'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
