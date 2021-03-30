// export * as core from './core'
// export * as connectorsV1 from './connectorsV1'
// export * as connectorsV2_M1 from './connectorsV2_M1'

import { core } from './core'
import { connectorsV1 } from './connectorsV1'
import { connectorsV2_M1 } from './connectorsV2_M1'

export const Addresses = {
    genesis: '0x0000000000000000000000000000000000000000',
    core,
    connectors: {
        versions: {
            1: connectorsV1,
            2: connectorsV2_M1
        }
    }
}
