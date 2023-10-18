import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens, opbnbTestnetTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(opbnbTestnetTokens)
const chainTokens = opbnbTestnetTokens
export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${chainTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake Venos</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${chainTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${chainTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO VENOS',
    description: <Trans>Stake Venos to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${chainTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      5611: '0x752982a24C733c5ac62EfB6979Bd1927993f0ab8',
      204: '0xadEFbbac7501f4Df8aDC7288c2FA86d36A3E9ebC',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  // {
  //   sousId: 290,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.peel,
  //   contractAddress: {
  //     204: '0x288d1aD79c113552B618765B4986f7DE679367Da',
  //     5611: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '4.34',
  //   version: 3,
  // },
  // {
  //   sousId: 289,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.shell,
  //   contractAddress: {
  //     204: '0x595B7AF4F1828AB4953792482b01B2AFC4A46b72',
  //     5611: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '89.699',
  //   version: 3,
  // },
  // {
  //   sousId: 288,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.high,
  //   contractAddress: {
  //     204: '0x28cc814bE3B994187B7f8Bfed10516A84A671119',
  //     5611: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.1332',
  //   version: 3,
  // },
  // {
  //   sousId: 287,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.ole,
  //   contractAddress: {
  //     204: '0xda6F750be1331963E5772BEe757062f6bddcEA4C',
  //     5611: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.2569',
  //   version: 3,
  // },
  // {
  //   sousId: 286,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.trivia,
  //   contractAddress: {
  //     204: '0x86471019Bf3f403083390AC47643062e15B0256e',
  //     5611: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '4.976',
  //   version: 3,
  // },
  // {
  //   sousId: 283,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.xcn,
  //   contractAddress: {
  //     5611: '',
  //     204: '0xa79D37ce9DF9443eF4B6DEC2e38a8ecd35303adc',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.2505',
  //   version: 3,
  // },
]

// known finished pools
const finishedPools = [
  {
    sousId: 285,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.usdc,
    contractAddress: {
      204: '0x168eF2e470bfeAEB32BE52FB218A41483904851c',
      5611: '0x168eF2e470bfeAEB32BE52FB218A41483904851c',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.405',
    version: 3,
  },
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
