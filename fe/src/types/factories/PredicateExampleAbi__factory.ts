/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.41.0
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import {
  BigNumberish,
  BN,
  Predicate,
  Provider,
} from 'fuels';

export type ValidationInput = { has_account: boolean, total_complete: BigNumberish };
export type ValidationOutput = { has_account: boolean, total_complete: BN };

type PredicateExampleAbiInputs = [received: ValidationInput];

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "struct Validation",
      "components": [
        {
          "name": "has_account",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "total_complete",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "received",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "main",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
}

const _bin = '0x9000000447000000000000000000006c5dfcc00110fff30071480003614521017344000b614d210d9000001272400002134114005a41000173400011614d211f90000012240000005d41300013410040734000169000001a504130085d4500005d43f00013411400244000000000000000000064'

export class PredicateExampleAbi__factory {

  static readonly abi = _abi
  static readonly bin = _bin;

  static createInstance(provider?: Provider) {

    const { abi, bin } = PredicateExampleAbi__factory

    const predicate = new Predicate(bin, abi, provider);

    return predicate;

  }

}
