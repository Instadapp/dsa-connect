import { core as mainnetCore } from './mainnet/core'
import { core as polygonCore } from './polygon/core'
import { core as arbitrumCore } from './arbitrum/core'
import { core as avalancheCore } from './avalanche/core'
import { core as optimismCore } from './optimism/core'

export const core = {
  1: mainnetCore,
  137: polygonCore,
  42161: arbitrumCore,
  43114: avalancheCore,
  10: optimismCore
}
