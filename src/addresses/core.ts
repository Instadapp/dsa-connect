import { core as mainnetCore } from './mainnet/core'
import { core as polygonCore } from './polygon/core'

export const core = {
  1: mainnetCore,
  137: polygonCore
}
