/**
 * steps to add a connector to the sdk
 * 1) Add connector address in this file under connectors object with key as connector_name and value as connector_address. Eg: curve_susd: "0x..."
 * 2) Create a new ts file in this folder with the same connector_name as file name. Eg: curve_susd.ts
 * 3) In curve_susd.ts, create a variable with same name as the file name and assign the ABI to that variable. Eg:
 * import { AbiItem } from 'web3-utils'
 * export const curve_susd: AbiItem[] = CONNECTOR_ABI 
 */

import Web3 from "web3";
import inquirer from "inquirer"
import {connectorsV1} from '../src/addresses/mainnet/connectorsV1'
import {connectorsV2_M1} from '../src/addresses/mainnet/connectorsV2_M1'
import { Obj, appendFile, checkFile, readFile, writeFile, getAbiDir, getAbiPath, getAbiTemplate, addressV1Path, addressV2Path, getABI } from "./utils";

const mainnetConnectorsV1 = connectorsV1 as Obj;
const mainnetConnectorsV2 = connectorsV2_M1 as Obj;
let connectorsV1Template = `export const connectorsV1 = `;
let connectorsV2Template = `export const connectorsV2_M1 = `;

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter the connector name? (ex: curve_claim or 1INCH-A)",
        validate: (connectorName: string) => !!connectorName || "Connector name is required!"
    },
    {
        type: "input",
        name: "variable_name",
        message: "Enter the connector variable name? (ex: curve_claim or ONEINCH_A)",
        validate: (name: string) => {
            try {
                Function('var ' + name);
            } catch(_) {
                return false || "Connector variable name is required!"
            }
                return true;
            } 
        },
    {
        type: "list",
        name: "version",
        message: "What's the connector version?",
        choices: [1, 2]
    },
    {
        type: "input",
        name: "address",
        message: "What's the connector address?",
        validate: (address: string) =>  Web3.utils.isAddress(address) || "Enter a valid address!"
    }
];


(async () => {
    const answers = await inquirer.prompt(questions);
    const abi = await getABI(answers.address);
    await checkFile(getAbiPath(answers))

    if (answers.version === 1) {
        if (mainnetConnectorsV1[answers.variable_name]) {
            throw new Error("Mainnet Connectors V1 already contains " + answers.variable);
        }
        mainnetConnectorsV1[answers.variable_name] = answers.address;
        connectorsV1Template += JSON.stringify(mainnetConnectorsV1, null, 4);

        // save the file
        await writeFile(addressV1Path, connectorsV1Template);
        console.log(`🚀 ${addressV1Path} [updated]`)
    } else {
        if (mainnetConnectorsV2[answers.name]) {
            throw new Error("Mainnet Connectors V2 already contains " + answers.name);
        }
        mainnetConnectorsV2[answers.name] = answers.address;
        connectorsV2Template += JSON.stringify(mainnetConnectorsV2, null, 4);

        // save the file
        await writeFile(addressV2Path, connectorsV2Template);
        console.log(`🚀 ${addressV2Path} [updated]`)
    }

    const abiFileContent = getAbiTemplate(answers.variable_name, abi);
    await writeFile(getAbiPath(answers), abiFileContent);
    console.log(`🚀 ${getAbiPath(answers)} [created]`)

    const abiDir = getAbiDir(answers);

    if (answers.version === 1) {
        await appendFile(`${abiDir}/index.ts`, `export * from './${answers.name}'`);
        console.log(`🚀 ${abiDir}/index.ts [updated]`)
    } else {
        const content = await readFile(`${abiDir}/index.ts`);
        const match = /\n\nexport/.exec(content)!;
        let beforeExport = content.slice(0, match.index);
        let afterExport = content.slice(match.index, content.length).split(`{\n`);
        beforeExport += `import {${answers.variable_name}} from './${answers.name}'`;
        
        const final = `${beforeExport}\n\n${afterExport[0]}{\n    "${answers.name}": ${answers.variable_name},\n${afterExport[1]}`;

        // save the file
        await writeFile(`${abiDir}/index.ts`, final);
        console.log(`🚀 ${abiDir}/index.ts [updated]`)
    }
})();