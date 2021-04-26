import * as fs from 'fs';
import fetch from 'node-fetch';

export interface Obj {
    [key: string]: string;
}

export const checkFile = (fileName: string) => {
    return new Promise((resolve ,reject) => {
        fs.access(fileName, (err) => {
            if (err) return resolve(null);

            return reject(new Error("File does exist!"));
        })
    })
}

export const writeFile = (filePath: string, fileContent: string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, fileContent, (err) => {
            if (err) return reject(err);

            return resolve(null);
        })
    }) 
}

export const appendFile = (filePath: string, fileContent: string) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, fileContent, (err) => {
            if (err) return reject(err);

            return resolve(null);
        });
    });
}

export const readFile = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if (err) return reject(err);

            return resolve(content);
        })
    })
}


export const getAbiPath = (answers: Obj) => `src/abi/connectors/v${answers.version}/${answers.name}.ts`;
export const getAbiDir = (answers: Obj) => `src/abi/connectors/v${answers.version}`;
export const addressV1Path = `src/addresses/mainnet/connectorsV1.ts`;
export const addressV2Path = `src/addresses/mainnet/connectorsV2_M1.ts`;
export const getAbiTemplate = (varName: string, abi: string) => `
import { AbiItem } from 'web3-utils'

export const ${varName}: AbiItem[] = ${abi}
`.trim();

export const getABI = async (address: string): Promise<string> => {
    console.log('🔮 Fetching ABI')
    const res = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${process.env.API_KEY_TOKEN}`);
    const {result} = await res.json(); 
    return result;
}