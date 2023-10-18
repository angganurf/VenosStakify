import { ChainId, Token, WBNB } from '@pancakeswap/sdk'

const CAKE_MAINNET = new Token(
  ChainId.BSC,
  '0xadEFbbac7501f4Df8aDC7288c2FA86d36A3E9ebC',
  18,
  'VENOS',
  'Venos Stakify',
  'https://venosproject.com/',
)

const CAKE_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x752982a24C733c5ac62EfB6979Bd1927993f0ab8',
  18,
  'tVENOS',
  'Venos Testnet Token',
  'https://venosproject.com/',
)

const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x845E27B8A4ad1Fe3dc0b41b900dC8C1Bb45141C3',
  6,
  'USDC',
  'USD Coin',
  'https://www.centre.io/usdc',
)

const USDT_MAINNET = new Token(
  ChainId.BSC,
  '0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3',
  18,
  'USDT',
  'Tether USD',
  'https://www.centre.io/usdc',
)

const USDT_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xCF712f20c85421d00EAa1B6F6545AaEEb4492B75',
  6,
  'USDT',
  'Tether USD',
  'https://www.centre.io/usdc',
)

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

export const USDT = {
  [ChainId.BSC]: USDT_MAINNET,
  [ChainId.BSC_TESTNET]: USDT_TESTNET,
}

const BUSD_MAINNET = new Token(
  ChainId.BSC,
  '0xe4817d847b020ebf9650a70baecc53631c172a35',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x3d39133b8050611f76d039395d5d8d9a8cf1135c',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.BSC]: BUSD_MAINNET,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const bscTokens = {
  wbnb: WBNB[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.BSC,
    '0x4200000000000000000000000000000000000006',
    18,
    'BNB',
    'BNB',
    'https://www.binance.com/',
  ),
  cake: CAKE_MAINNET,
  usdc: USDC_BSC,
  usdt: USDT_MAINNET,
}

export const opbnbTestnetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  cake: CAKE_TESTNET,
  usdt: USDT_TESTNET,
  usdc: USDC_TESTNET,
  syrup: new Token(
    ChainId.BSC_TESTNET,
    '0x0C287E5726648e461c7594fEcCBc6Ef06C883B67',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://venosproject.com/',
  ),
  btcb: new Token(
    ChainId.BSC_TESTNET,
    '0x3AB4E696E31173409dbfBb1FEB5b9A7cC55A212c',
    18,
    'BTCB',
    'Binance BTC',
    'https://bitcoin.org/',
  ),
  bake: new Token(
    ChainId.BSC_TESTNET,
    '0xE513121F9908ecB99AC8ef58897f4fF61AFEb4f3',
    18,
    'sETH',
    'sEthereum Token',
    'https://www.bakeryswap.org/',
  ),
}
