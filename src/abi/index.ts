export * as basics from './basics'
export * as connectors from './connectors'
export * as connectorsV1 from './connectors/v1'
export * as connectorsV2 from './connectors/v2'
export * as core from './core'
export * as read from './read'

import * as basics from './basics'
import * as connectorsV1 from './connectors/v1'
import * as connectorsV2 from './connectors/v2'
import * as core from './core'
import * as read from './read'

export const Abi = {
  basics,
  connectors: {
    1: connectorsV1,
    2: connectorsV2
  },
  core,
  read,
}
