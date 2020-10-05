/**
 * steps to add a connector to the sdk
 * 1) Add connector address in this file under connectors object with key as connector_name and value as connector_address. Eg: curve_susd: "0x..."
 * 2) Create a new ts file in this folder with the same connector_name as file name. Eg: curve_susd.ts
 * 3) In curve_susd.ts, create a variable with same name as the file name and assign the ABI to that variable. Eg:
 * import { AbiItem } from 'web3-utils'
 * export const curve_susd: AbiItem[] = CONNECTOR_ABI 
 */