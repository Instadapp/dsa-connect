/**
 * steps to add a connector to the sdk
 * 1) Add connector address in this file under connectors object with key as connector_name and value as connector_address. Eg: curve_susd: "0x..."
 * 2) Create a new ts file in this folder with the same connector_name as file name. Eg: curve_susd.ts
 * 3) In curve_susd.ts, create a variable with same name as the file name and assign the ABI to that variable. Eg:
 * import { AbiItem } from 'web3-utils'
 * export const curve_susd: AbiItem[] = CONNECTOR_ABI
 */

import Web3 from 'web3'
import inquirer from 'inquirer'
import { connectorsV1 as mConnectorsV1 } from '../src/addresses/mainnet/connectorsV1'
import { connectorsV2_M1 as mConnectorsV2_M1 } from '../src/addresses/mainnet/connectorsV2_M1'
import { connectorsV1 as pConnectorsV1 } from '../src/addresses/polygon/connectorsV1'
import { connectorsV2_M1 as pConnectorsV2_M1 } from '../src/addresses/polygon/connectorsV2_M1'
import { connectorsV2_M1 as avConnectorsV2_M1 } from '../src/addresses/avalanche/connectorsV2_M1'
import { connectorsV2_M1 as arConnectorsV2_M1 } from '../src/addresses/arbitrum/connectorsV2_M1'
import {
  Obj,
  checkFile,
  getAbiDir,
  getAbiPath,
  getAbiTemplate,
  mainnetAddressV1Path,
  mainnetAddressV2Path,
  polygonAddressV1Path,
  polygonAddressV2Path,
  avalancheAddressV2Path,
  arbitrumAddressV2Path,
  getABI,
} from './utils'
import fs from 'fs'


const mainnetConnectorsV1 = mConnectorsV1 as Obj;
const mainnetConnectorsV2 = mConnectorsV2_M1 as Obj;
const polygonConnectorsV1 = pConnectorsV1 as Obj;
const polygonConnectorsV2 = pConnectorsV2_M1 as Obj;
const avalancheConnectorsV2 = avConnectorsV2_M1 as Obj;
const arbitrumConnectorsV2 = arConnectorsV2_M1 as Obj;
let connectorsV1Template = `export const connectorsV1 = `;
let connectorsV2Template = `export const connectorsV2_M1 = `;

const abiChoices = ["From Address", "From JSON File Path", "From JSON (via URL)"]

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the connector name? (ex: curve_claim or 1INCH-A)',
    validate: (connectorName: string) => !!connectorName || 'Connector name is required!',
  },
  {
    type: 'input',
    name: 'variable_name',
    message: 'Enter the connector variable name? (ex: curve_claim or ONEINCH_A)',
    validate: (name: string) => {
      try {
        Function('var ' + name)
      } catch (_) {
        return false || 'Connector variable name is required!'
      }
      return true
    },
    {
        type: "list",
        name: "chain",
        message: "Which Chain?",
        choices: ["Mainnet", "Polygon", "Avalanche", "Arbitrum"]
    },
    {
        type: "list",
        name: "abi_type",
        message: "How to get the ABI?",
        choices: abiChoices,
    }
];


(async () => {
    const answers = await inquirer.prompt(questions);
    const abi_idx = abiChoices.indexOf(answers.abi_type)
    // if (answers.chain === "" && abi_idx === 0) {
    //     console.log("\n\n❌ Sorry but Fetching ABI from address only works with Mainnet, Polygon, Arbitrum and Avalanche ❌\n")
    //     process.exit(0);
    // }

    const abi = await getABI(abi_idx, answers);
    // await checkFile(getAbiPath(answers))

    if (answers.version === 1) {
        if (answers.chain === "Mainnet") {
            if (mainnetConnectorsV1[answers.variable_name]) {
                throw new Error("Mainnet Connectors V1 already contains " + answers.variable);
            }
            mainnetConnectorsV1[answers.variable_name] = answers.address;
            connectorsV1Template += JSON.stringify(mainnetConnectorsV1, null, 4);

            // save the file
            fs.writeFileSync(mainnetAddressV1Path, connectorsV1Template);
            console.log(`🚀 ${mainnetAddressV1Path} [updated]`)
        } else {
            if (polygonConnectorsV1[answers.variable_name]) {
                throw new Error("Polygon Connectors V1 already contains " + answers.variable_name);
            }
            polygonConnectorsV1[answers.variable_name] = answers.address;
            connectorsV1Template += JSON.stringify(polygonConnectorsV1, null, 4);

            // save the file
            fs.writeFileSync(polygonAddressV1Path, connectorsV1Template)
            console.log(`🚀 ${polygonAddressV1Path} [updated]`)
        }
    } else {
      if (polygonConnectorsV1[answers.variable_name]) {
        throw new Error('Polygon Connectors V1 already contains ' + answers.variable_name)
      }
      polygonConnectorsV1[answers.variable_name] = answers.address
      connectorsV1Template += JSON.stringify(polygonConnectorsV1, null, 4)

      // save the file
      fs.writeFileSync(polygonAddressV1Path, connectorsV1Template)
      console.log(`🚀 ${polygonAddressV1Path} [updated]`)
    }

    const abiFileContent = getAbiTemplate(answers.variable_name, abi);
    const AbiPath = getAbiPath(answers);
    let fileExist = false;
    if(fs.existsSync(AbiPath)){
        console.log(`ABI file already exists for ${answers.name}`);
        console.log('Using the existing ABI file');
        fileExist = true;
    } else {
        fs.writeFileSync(AbiPath, abiFileContent);
        console.log(`🚀 ${getAbiPath(answers)} [created]`)
    }

    const abiDir = getAbiDir(answers);

    if (answers.version === 1 && fileExist === false) {
        fs.appendFileSync(`${abiDir}/index.ts`, `export * from './${answers.name}'`);
        console.log(`🚀 ${abiDir}/index.ts [updated]`)
    } else if(fileExist === false) {
        const content = fs.readFileSync(`${abiDir}/index.ts`, 'utf-8');
        const match = /export/.exec(content)!;
        let beforeExport = content.slice(0, match.index).trim();
        let afterExport = content.slice(match.index, content.length).split(`{\n`);
        beforeExport += `\nimport {${answers.variable_name}} from './${answers.name}'`;

        const final = `${beforeExport}\n${afterExport[0]}{\n    "${answers.name}": ${answers.variable_name},\n${afterExport[1]}`;

        // save the file
        fs.writeFileSync(`${abiDir}/index.ts`, final);
        console.log(`🚀 ${abiDir}/index.ts [updated]`)

    }
  }

  const abiFileContent = getAbiTemplate(answers.variable_name, abi)
  fs.writeFileSync(getAbiPath(answers), abiFileContent)
  console.log(`🚀 ${getAbiPath(answers)} [created]`)

  const abiDir = getAbiDir(answers)

  if (answers.version === 1) {
    fs.appendFileSync(`${abiDir}/index.ts`, `export * from './${answers.name}'`)
    console.log(`🚀 ${abiDir}/index.ts [updated]`)
  } else {
    const content = fs.readFileSync(`${abiDir}/index.ts`, 'utf-8')
    const match = /export/.exec(content)!
    let beforeExport = content.slice(0, match.index).trim()
    let afterExport = content.slice(match.index, content.length).split(`{\n`)
    beforeExport += `\nimport {${answers.variable_name}} from './${answers.name}'`

    const final = `${beforeExport}\n${afterExport[0]}{\n    "${answers.name}": ${answers.variable_name},\n${afterExport[1]}`

    // save the file
    fs.writeFileSync(`${abiDir}/index.ts`, final)
    console.log(`🚀 ${abiDir}/index.ts [updated]`)
  }
})()
