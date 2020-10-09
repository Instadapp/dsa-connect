import { EstimateGasParams } from '../internal'

export class EstimatedGasException extends Error {
  constructor(public error: Error, public data: { data: string } & EstimateGasParams) {
    super(error.message)
  }
}
