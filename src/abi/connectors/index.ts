export * as connectorsV1 from './v1'
export * as connectorsV2_M1 from './v2'

import * as connectorsV1 from './v1'
import * as connectorsV2_M1 from './v2'

export const connectors = {
    versions: {
        1: connectorsV1,
        2: connectorsV2_M1
    }
}
