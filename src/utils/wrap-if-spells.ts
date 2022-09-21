import { Spells } from '../spells'

export function wrapIfSpells(params: (Spells | string)| { spells: Spells | string }) {
  return params instanceof Spells || typeof params === "string" ? { spells: params } : params
}
