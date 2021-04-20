// export * as basics from './basics'
// export { connectors } from './connectors'
// export * as core from './core'
// export * as read from './read'

import * as basics from './basics'
import { connectors } from './connectors'
import { core } from './core'
import {read} from './read'

export const Abi = {
  basics,
  connectors,
  core,
  read,
}
