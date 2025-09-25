// export * as core from './core'
// export * as connectorsV1 from './connectorsV1'
// export * as connectorsV2_M1 from './connectorsV2_M1'

import { core } from './core'
import { connectorsV1 as connectorsV1_Mainnet } from './mainnet/connectorsV1'
import { connectorsV2_M1 as connectorsV2_M1_Mainnet } from './mainnet/connectorsV2_M1'
import { connectorsV1 as connectorsV1_Polygon } from './polygon/connectorsV1'
import { connectorsV2_M1 as connectorsV2_M1_Polygon } from './polygon/connectorsV2_M1'
import { connectorsV2_M1 as connectorsV2_M1_Arbitrum } from './arbitrum/connectorsV2_M1'
import { connectorsV2_M1 as connectorsV2_M1_Avalanche } from './avalanche/connectorsV2_M1'
import { connectorsV2_M1 as connectorsV2_M1_Optimism } from './optimism/connectorsV2_M1'
import { connectorsV2_M1 as connectorsV2_M1_Fantom } from './fantom/connectorsV2_M1'
import { connectorsV2_M1 as connectorsV2_M1_Base } from './base/connectorsV2_M1'
import { connectorsV2_M1 as connectorsV2_M1_Plasma } from './plasma/connectorsV2_M1'

export const Addresses = {
  genesis: '0x0000000000000000000000000000000000000000',
  core,
  connectors: {
    chains: {
      1: {
        versions: {
          1: connectorsV1_Mainnet,
          2: connectorsV2_M1_Mainnet,
        },
      },
      137: {
        versions: {
          1: connectorsV1_Polygon,
          2: connectorsV2_M1_Polygon,
        },
      },
      42161: {
        versions: {
          2: connectorsV2_M1_Arbitrum,
        },
      },
      43114: {
        versions: {
          2: connectorsV2_M1_Avalanche,
        },
      },
      10: {
        versions: {
          2: connectorsV2_M1_Optimism,
        },
      },
      250: {
        versions: {
          2: connectorsV2_M1_Fantom,
        },
      },
      8453: {
        versions: {
          2: connectorsV2_M1_Base,
        }
      },
      9745: {
        versions: {
          2: connectorsV2_M1_Plasma,
        },
      },
    },
  },
}
