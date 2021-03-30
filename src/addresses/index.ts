export * as core from './core'
export * as connectorsV1 from './connectorsV1'
export * as connectorsV2_M1 from './connectorsV2_M1'

import * as core from './core'
import * as connectorsV1 from './connectorsV1'
import * as connectorsV2_M1 from './connectorsV2_M1'

export const Addresses = {
    genesis: '0x0000000000000000000000000000000000000000',
    core: core,
    connectors: {
        1: connectorsV1,
        2: {
            m1: connectorsV2_M1
        }

    }
}
