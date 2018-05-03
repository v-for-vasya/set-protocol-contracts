export const StandardTokenMock = 
{
  "contractName": "StandardTokenMock",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialAccount",
          "type": "address"
        },
        {
          "name": "initialBalance",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x608060405260126003553480156200001657600080fd5b50604051620014813803806200148183398101806040528101908080519060200190929190805190602001909291908051820192919060200180518201929190505050826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550826006819055508160049080519060200190620000bb929190620000df565b508060059080519060200190620000d4929190620000df565b50505050506200018e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012257805160ff191683800117855562000153565b8280016001018555821562000153579182015b828111156200015257825182559160200191906001019062000135565b5b50905062000162919062000166565b5090565b6200018b91905b80821115620001875760008160009055506001016200016d565b5090565b90565b6112e3806200019e6000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014457806318160ddd146101a957806323b872dd146101d4578063313ce56714610259578063661884631461028457806370a08231146102e957806395d89b4114610340578063a9059cbb146103d0578063d73dd62314610435578063dd62ed3e1461049a575b600080fd5b3480156100c057600080fd5b506100c9610511565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101095780820151818401526020810190506100ee565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015057600080fd5b5061018f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105af565b604051808215151515815260200191505060405180910390f35b3480156101b557600080fd5b506101be6106a1565b6040518082815260200191505060405180910390f35b3480156101e057600080fd5b5061023f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106a7565b604051808215151515815260200191505060405180910390f35b34801561026557600080fd5b5061026e610a61565b6040518082815260200191505060405180910390f35b34801561029057600080fd5b506102cf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a67565b604051808215151515815260200191505060405180910390f35b3480156102f557600080fd5b5061032a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf8565b6040518082815260200191505060405180910390f35b34801561034c57600080fd5b50610355610d40565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039557808201518184015260208101905061037a565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103dc57600080fd5b5061041b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dde565b604051808215151515815260200191505060405180910390f35b34801561044157600080fd5b50610480600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ffd565b604051808215151515815260200191505060405180910390f35b3480156104a657600080fd5b506104fb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111f9565b6040518082815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60065481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561073157600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107bc57600080fd5b61080d826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128090919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108a0826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461129990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097182600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128090919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60035481565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610b78576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c0c565b610b8b838261128090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dd65780601f10610dab57610100808354040283529160200191610dd6565b820191906000526020600020905b815481529060010190602001808311610db957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e1b57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e6857600080fd5b610eb9826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128090919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f4c826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461129990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061108e82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461129990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115151561128e57fe5b818303905092915050565b60008082840190508381101515156112ad57fe5b80915050929150505600a165627a7a723058205462027103f36c5fb7194f0537e670faa10c1a76362c17e835afac715d11ca020029",
  "deployedBytecode": "0x6080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014457806318160ddd146101a957806323b872dd146101d4578063313ce56714610259578063661884631461028457806370a08231146102e957806395d89b4114610340578063a9059cbb146103d0578063d73dd62314610435578063dd62ed3e1461049a575b600080fd5b3480156100c057600080fd5b506100c9610511565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101095780820151818401526020810190506100ee565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015057600080fd5b5061018f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105af565b604051808215151515815260200191505060405180910390f35b3480156101b557600080fd5b506101be6106a1565b6040518082815260200191505060405180910390f35b3480156101e057600080fd5b5061023f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106a7565b604051808215151515815260200191505060405180910390f35b34801561026557600080fd5b5061026e610a61565b6040518082815260200191505060405180910390f35b34801561029057600080fd5b506102cf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a67565b604051808215151515815260200191505060405180910390f35b3480156102f557600080fd5b5061032a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf8565b6040518082815260200191505060405180910390f35b34801561034c57600080fd5b50610355610d40565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039557808201518184015260208101905061037a565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103dc57600080fd5b5061041b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dde565b604051808215151515815260200191505060405180910390f35b34801561044157600080fd5b50610480600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ffd565b604051808215151515815260200191505060405180910390f35b3480156104a657600080fd5b506104fb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111f9565b6040518082815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60065481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561073157600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107bc57600080fd5b61080d826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128090919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108a0826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461129990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097182600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128090919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60035481565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610b78576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c0c565b610b8b838261128090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dd65780601f10610dab57610100808354040283529160200191610dd6565b820191906000526020600020905b815481529060010190602001808311610db957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e1b57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e6857600080fd5b610eb9826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128090919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f4c826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461129990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061108e82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461129990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115151561128e57fe5b818303905092915050565b60008082840190508381101515156112ad57fe5b80915050929150505600a165627a7a723058205462027103f36c5fb7194f0537e670faa10c1a76362c17e835afac715d11ca020029",
  "sourceMap": "127:406:9:-;;;201:2;175:28;;284:246;8:9:-1;5:2;;;30:1;27;20:12;5:2;284:246:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;437:14;410:8;:24;419:14;410:24;;;;;;;;;;;;;;;:41;;;;471:14;457:11;:28;;;;498:5;491:4;:12;;;;;;;;;;;;:::i;:::-;;518:7;509:6;:16;;;;;;;;;;;;:::i;:::-;;284:246;;;;127:406;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "127:406:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;207:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;207:18:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;207:18:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1798:183:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;253:26:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;253:26:9;;;;;;;;;;;;;;;;;;;;;;;736:439:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;736:439:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;175:28:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;175:28:9;;;;;;;;;;;;;;;;;;;;;;;3602:398:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3602:398:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1189:107:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;229:20:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;229:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;229:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;608:379:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2883:257:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2300:126:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;207:18:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1798:183:17:-;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;253:26:9:-;;;;:::o;736:439:17:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;175:28:9:-;;;;:::o;3602:398:17:-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:12:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;229:20:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;608:379:12:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:17:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;835:110:10:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity 0.4.23;\n\n\nimport \"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\n\n\n// mock class using BasicToken\ncontract StandardTokenMock is StandardToken {\n  uint256 public decimals = 18;\n  string public name;\n  string public symbol;\n  uint256 public totalSupply;\n\n  constructor(\n    address initialAccount,\n    uint256 initialBalance,\n    string _name,\n    string _symbol)\n    public\n  {\n    balances[initialAccount] = initialBalance;\n    totalSupply = initialBalance;\n    name = _name;\n    symbol = _symbol;\n  }\n\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/test/StandardTokenMock.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/test/StandardTokenMock.sol",
    "exportedSymbols": {
      "StandardTokenMock": [
        1895
      ]
    },
    "id": 1896,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1852,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:9"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "id": 1853,
        "nodeType": "ImportDirective",
        "scope": 1896,
        "sourceUnit": 2596,
        "src": "26:67:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1854,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2595,
              "src": "157:13:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$2595",
                "typeString": "contract StandardToken"
              }
            },
            "id": 1855,
            "nodeType": "InheritanceSpecifier",
            "src": "157:13:9"
          }
        ],
        "contractDependencies": [
          2145,
          2222,
          2254,
          2595
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1895,
        "linearizedBaseContracts": [
          1895,
          2595,
          2145,
          2222,
          2254
        ],
        "name": "StandardTokenMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1858,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "175:28:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1856,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "175:7:9",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 1857,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "201:2:9",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1860,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "207:18:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1859,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "207:6:9",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1862,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "229:20:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1861,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "229:6:9",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1864,
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "253:26:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1863,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "253:7:9",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1893,
              "nodeType": "Block",
              "src": "404:126:9",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1875,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2062,
                        "src": "410:8:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1877,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1876,
                        "name": "initialAccount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1866,
                        "src": "419:14:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "410:24:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1878,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "437:14:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "410:41:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1880,
                  "nodeType": "ExpressionStatement",
                  "src": "410:41:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1881,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1864
                      ],
                      "referencedDeclaration": 1864,
                      "src": "457:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1882,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "471:14:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "457:28:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1884,
                  "nodeType": "ExpressionStatement",
                  "src": "457:28:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1887,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1885,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1860,
                      "src": "491:4:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1886,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1870,
                      "src": "498:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "491:12:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1888,
                  "nodeType": "ExpressionStatement",
                  "src": "491:12:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1889,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1862,
                      "src": "509:6:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1890,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1872,
                      "src": "518:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "509:16:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1892,
                  "nodeType": "ExpressionStatement",
                  "src": "509:16:9"
                }
              ]
            },
            "documentation": null,
            "id": 1894,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1866,
                  "name": "initialAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "301:22:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1868,
                  "name": "initialBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "329:22:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1870,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "357:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1869,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1872,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "375:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1871,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "295:95:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1874,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:9"
            },
            "scope": 1895,
            "src": "284:246:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1896,
        "src": "127:406:9"
      }
    ],
    "src": "0:534:9"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/test/StandardTokenMock.sol",
    "exportedSymbols": {
      "StandardTokenMock": [
        1895
      ]
    },
    "id": 1896,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1852,
        "literals": [
          "solidity",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:9"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "id": 1853,
        "nodeType": "ImportDirective",
        "scope": 1896,
        "sourceUnit": 2596,
        "src": "26:67:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1854,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2595,
              "src": "157:13:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$2595",
                "typeString": "contract StandardToken"
              }
            },
            "id": 1855,
            "nodeType": "InheritanceSpecifier",
            "src": "157:13:9"
          }
        ],
        "contractDependencies": [
          2145,
          2222,
          2254,
          2595
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1895,
        "linearizedBaseContracts": [
          1895,
          2595,
          2145,
          2222,
          2254
        ],
        "name": "StandardTokenMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1858,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "175:28:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1856,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "175:7:9",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 1857,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "201:2:9",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1860,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "207:18:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1859,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "207:6:9",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1862,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "229:20:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1861,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "229:6:9",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1864,
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 1895,
            "src": "253:26:9",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1863,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "253:7:9",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1893,
              "nodeType": "Block",
              "src": "404:126:9",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1875,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2062,
                        "src": "410:8:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1877,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1876,
                        "name": "initialAccount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1866,
                        "src": "419:14:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "410:24:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1878,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "437:14:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "410:41:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1880,
                  "nodeType": "ExpressionStatement",
                  "src": "410:41:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1881,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1864
                      ],
                      "referencedDeclaration": 1864,
                      "src": "457:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1882,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "471:14:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "457:28:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1884,
                  "nodeType": "ExpressionStatement",
                  "src": "457:28:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1887,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1885,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1860,
                      "src": "491:4:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1886,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1870,
                      "src": "498:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "491:12:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1888,
                  "nodeType": "ExpressionStatement",
                  "src": "491:12:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1889,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1862,
                      "src": "509:6:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1890,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1872,
                      "src": "518:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "509:16:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1892,
                  "nodeType": "ExpressionStatement",
                  "src": "509:16:9"
                }
              ]
            },
            "documentation": null,
            "id": 1894,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1866,
                  "name": "initialAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "301:22:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1868,
                  "name": "initialBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "329:22:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1870,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "357:12:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1869,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1872,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1894,
                  "src": "375:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1871,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:6:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "295:95:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1874,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:9"
            },
            "scope": 1895,
            "src": "284:246:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1896,
        "src": "127:406:9"
      }
    ],
    "src": "0:534:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-03T07:27:33.015Z"
}