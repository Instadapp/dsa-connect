import { Connector } from './internal'

export type Spell = {
  /**
   * The from address.
   */
  connector: Connector

  /**
   * The to address.
   */
  method: string

  /**
   * The ABI interface.
   */
  args: any[]
}

export class Spells {
  data: Spell[] = []

  add(spell: Spell) {
    if (!spell.connector) {
      throw new Error(`connector not defined.`)
    }

    if (!spell.method) {
      throw new Error(`method not defined.`)
    }

    if (!spell.args) {
      throw new Error(`args not defined.`)
    }

    this.data.push(spell)

    return this
  }
}
