import { core as mainnetCore } from './mainnet/core'
import { core as polygonCore } from './polygon/core'
import { core as arbitrumCore } from './arbitrum/core'

export const core = {
  1: mainnetCore,
  137: polygonCore,
  42161: arbitrumCore,
}
