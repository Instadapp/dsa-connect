export * as accountV1 from './v1/account'
export * as connectorsV1 from './v1/connector'
export * as eventsV1 from './v1/events'

export * as accountV2_M1 from './v2/accountM1'
export * as connectorsV2_M1 from './v2/connectorsM1'
export * as accountProxy from './v2/accountProxy'
export * as implementations from './v2/implementations'
export * as accountDefault from './v2/accountDefault'

export * as index from './indexItem'
export * as list from './list'
export * as read from './read'


import { account as accountV1} from './v1/account'
import * as connectorsV1 from './v1/connector'
import * as eventsV1 from './v1/events'

import {accountM1 as accountV2_M1} from './v2/accountM1'
import * as connectorsV2_M1 from './v2/connectorsM1'
import * as accountProxy from './v2/accountProxy'
import * as implementations from './v2/implementations'
import * as accountDefault from './v2/accountDefault'

import {index} from './indexItem'
import {list} from './list'
import {read} from './read'


export const core = {
    index,
    list,
    read,
    versions: {
      1: {
        account: accountV1,
        connectors: connectorsV1,
        events: eventsV1,
      },
      2: {
        accountProxy,
        accountDefault,
        // connectorsProxy,
        implementations,
        account: accountV2_M1,
        connectors: connectorsV2_M1,
      }
    }
}
