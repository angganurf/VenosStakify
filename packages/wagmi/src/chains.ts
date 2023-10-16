import {
  arbitrumRinkeby,
  optimismKovan,
  polygonMumbai,
  rinkeby,
  mainnet,
  arbitrum,
  optimism,
  polygon,
} from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://opbnbscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'opBNB Mainnet',
  network: 'bsc',
  rpcUrls: {
    default: 'https://opbnb-mainnet-rpc.bnbchain.org',
    public: 'https://opbnb-mainnet-rpc.bnbchain.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  multicall: {
    address: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
    blockCreated: 7162653,
  },
  nativeCurrency: {
    name: 'BNB',
    symbol: 'bnb',
    decimals: 18,
  },
}

export const bscTest: Chain = {
  id: 1115,
  name: 'opBNB Testnet',
  network: 'opbnb-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'tBNB',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: 'https://opbnb-testnet-rpc.bnbchain.org/',
    public: 'https://opbnb-testnet-rpc.bnbchain.org/',
  },
  blockExplorers: {
    default: { name: 'CoreScan', url: 'https://testnet.opbnbscan.com' },
  },
  multicall: {
    address: '0x48ae351b88faB4a7A6d9f015883a5CDfa29eE1f7',
    blockCreated: 10056498,
  },
  testnet: true,
}

// export const opbnbTest: Chain = {
//   id: 5611,
//   name: 'opBNB TestNet',
//   network: 'opbnb-testnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'tBNB',
//     symbol: 'tBNB',
//   },
//   rpcUrls: {
//     default: 'https://opbnb-testnet-rpc.bnbchain.org/',
//     public: 'https://opbnb-testnet-rpc.bnbchain.org',
//   },
//   blockExplorers: {
//     default: { name: 'opbnbscan', url: 'https://testnet.opbnbscan.com' },
//   },
//   multicall: {
//     address: '0x48ae351b88faB4a7A6d9f015883a5CDfa29eE1f7',
//     blockCreated: 10056498,
//   },
//   testnet: true,
// }

export const CHAINS_TESTNET = [
  bscTest,
  rinkeby,
  arbitrumRinkeby,
  optimismKovan,
  polygonMumbai,
  avalandcheFuji,
  fantomTestnet,
]

export const CHAINS_STARGATE_TESTNET = [
  rinkeby,
  arbitrumRinkeby,
  optimismKovan,
  polygonMumbai,
  avalandcheFuji,
  fantomTestnet,
]

export const CHAINS = [bsc, bscTest, mainnet, arbitrum, optimism, polygon, fantomOpera, avalandche]
