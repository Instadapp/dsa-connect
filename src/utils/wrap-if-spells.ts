import { Spells } from '../spells'

export function wrapIfSpells(params: Spells | { spells: Spells }) {
  return params instanceof Spells ? { spells: params } : params
}
