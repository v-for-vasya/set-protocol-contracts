export const NoDecimalTokenMock = 
{
  "contractName": "NoDecimalTokenMock",
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
          "name": "",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060405161098a38038061098a8339810160409081528151602080840151838501516060860151600160a060020a0385166000908152808552959095208290556005829055850180519395919490939101916100719160039185019061008f565b50805161008590600490602084019061008f565b505050505061012a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100d057805160ff19168380011785556100fd565b828001600101855582156100fd579182015b828111156100fd5782518255916020019190600101906100e2565b5061010992915061010d565b5090565b61012791905b808211156101095760008155600101610113565b90565b610851806101396000396000f3006080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100a8578063095ea7b31461013257806318160ddd1461016a57806323b872dd1461019157806366188463146101bb57806370a08231146101df57806395d89b4114610200578063a9059cbb14610215578063d73dd62314610239578063dd62ed3e1461025d575b600080fd5b3480156100b457600080fd5b506100bd610284565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013e57600080fd5b50610156600160a060020a0360043516602435610312565b604080519115158252519081900360200190f35b34801561017657600080fd5b5061017f610378565b60408051918252519081900360200190f35b34801561019d57600080fd5b50610156600160a060020a036004358116906024351660443561037e565b3480156101c757600080fd5b50610156600160a060020a03600435166024356104f5565b3480156101eb57600080fd5b5061017f600160a060020a03600435166105e5565b34801561020c57600080fd5b506100bd610600565b34801561022157600080fd5b50610156600160a060020a036004351660243561065b565b34801561024557600080fd5b50610156600160a060020a036004351660243561073c565b34801561026957600080fd5b5061017f600160a060020a03600435811690602435166107d5565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561030a5780601f106102df5761010080835404028352916020019161030a565b820191906000526020600020905b8154815290600101906020018083116102ed57829003601f168201915b505050505081565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60055481565b6000600160a060020a038316151561039557600080fd5b600160a060020a0384166000908152602081905260409020548211156103ba57600080fd5b600160a060020a03841660009081526002602090815260408083203384529091529020548211156103ea57600080fd5b600160a060020a038416600090815260208190526040902054610413908363ffffffff61080016565b600160a060020a038086166000908152602081905260408082209390935590851681522054610448908363ffffffff61081216565b600160a060020a0380851660009081526020818152604080832094909455918716815260028252828120338252909152205461048a908363ffffffff61080016565b600160a060020a03808616600081815260026020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b336000908152600260209081526040808320600160a060020a03861684529091528120548083111561054a57336000908152600260209081526040808320600160a060020a038816845290915281205561057f565b61055a818463ffffffff61080016565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561030a5780601f106102df5761010080835404028352916020019161030a565b6000600160a060020a038316151561067257600080fd5b3360009081526020819052604090205482111561068e57600080fd5b336000908152602081905260409020546106ae908363ffffffff61080016565b3360009081526020819052604080822092909255600160a060020a038516815220546106e0908363ffffffff61081216565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b336000908152600260209081526040808320600160a060020a0386168452909152812054610770908363ffffffff61081216565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60008282111561080c57fe5b50900390565b8181018281101561081f57fe5b929150505600a165627a7a7230582091b5261218216d85684efa81822efb5f950fddd48752b0b5d5e37b000d259aee0029",
  "deployedBytecode": "0x6080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100a8578063095ea7b31461013257806318160ddd1461016a57806323b872dd1461019157806366188463146101bb57806370a08231146101df57806395d89b4114610200578063a9059cbb14610215578063d73dd62314610239578063dd62ed3e1461025d575b600080fd5b3480156100b457600080fd5b506100bd610284565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013e57600080fd5b50610156600160a060020a0360043516602435610312565b604080519115158252519081900360200190f35b34801561017657600080fd5b5061017f610378565b60408051918252519081900360200190f35b34801561019d57600080fd5b50610156600160a060020a036004358116906024351660443561037e565b3480156101c757600080fd5b50610156600160a060020a03600435166024356104f5565b3480156101eb57600080fd5b5061017f600160a060020a03600435166105e5565b34801561020c57600080fd5b506100bd610600565b34801561022157600080fd5b50610156600160a060020a036004351660243561065b565b34801561024557600080fd5b50610156600160a060020a036004351660243561073c565b34801561026957600080fd5b5061017f600160a060020a03600435811690602435166107d5565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561030a5780601f106102df5761010080835404028352916020019161030a565b820191906000526020600020905b8154815290600101906020018083116102ed57829003601f168201915b505050505081565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60055481565b6000600160a060020a038316151561039557600080fd5b600160a060020a0384166000908152602081905260409020548211156103ba57600080fd5b600160a060020a03841660009081526002602090815260408083203384529091529020548211156103ea57600080fd5b600160a060020a038416600090815260208190526040902054610413908363ffffffff61080016565b600160a060020a038086166000908152602081905260408082209390935590851681522054610448908363ffffffff61081216565b600160a060020a0380851660009081526020818152604080832094909455918716815260028252828120338252909152205461048a908363ffffffff61080016565b600160a060020a03808616600081815260026020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b336000908152600260209081526040808320600160a060020a03861684529091528120548083111561054a57336000908152600260209081526040808320600160a060020a038816845290915281205561057f565b61055a818463ffffffff61080016565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561030a5780601f106102df5761010080835404028352916020019161030a565b6000600160a060020a038316151561067257600080fd5b3360009081526020819052604090205482111561068e57600080fd5b336000908152602081905260409020546106ae908363ffffffff61080016565b3360009081526020819052604080822092909255600160a060020a038516815220546106e0908363ffffffff61081216565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b336000908152600260209081526040808320600160a060020a0386168452909152812054610770908363ffffffff61081216565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60008282111561080c57fe5b50900390565b8181018281101561081f57fe5b929150505600a165627a7a7230582091b5261218216d85684efa81822efb5f950fddd48752b0b5d5e37b000d259aee0029",
  "sourceMap": "96:375:53:-;;;222:246;8:9:-1;5:2;;;30:1;27;20:12;5:2;222:246:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;348:24:53;;:8;:24;;;;;;;;;;:41;;;395:11;:28;;;222:246;;429:12;;222:246;;;;;;;;;429:12;;:4;;:12;;;;:::i;:::-;-1:-1:-1;447:16:53;;;;:6;;:16;;;;;:::i;:::-;;222:246;;;;96:375;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;96:375:53;;;-1:-1:-1;96:375:53;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "96:375:53:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;145:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;145:18:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;145:18:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1829:188:64;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1829:188:64;-1:-1:-1;;;;;1829:188:64;;;;;;;;;;;;;;;;;;;;;;;;;191:26:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;191:26:53;;;;;;;;;;;;;;;;;;;;736:470:64;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;736:470:64;-1:-1:-1;;;;;736:470:64;;;;;;;;;;;;3701:425;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3701:425:64;-1:-1:-1;;;;;3701:425:64;;;;;;;1131:99:60;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1131:99:60;-1:-1:-1;;;;;1131:99:60;;;;;167:20:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;167:20:53;;;;608:321:60;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;608:321:60;-1:-1:-1;;;;;608:321:60;;;;;;;2946:293:64;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2946:293:64;-1:-1:-1;;;;;2946:293:64;;;;;;;2336:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2336:153:64;-1:-1:-1;;;;;2336:153:64;;;;;;;;;;145:18:53;;;;;;;;;;;;;;;-1:-1:-1;;145:18:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1829:188:64:-;1916:10;1896:4;1908:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;1908:29:64;;;;;;;;;;;:38;;;1957;;;;;;;1896:4;;1908:29;;1916:10;;1957:38;;;;;;;;-1:-1:-1;2008:4:64;1829:188;;;;:::o;191:26:53:-;;;;:::o;736:470:64:-;842:4;-1:-1:-1;;;;;864:17:64;;;;856:26;;;;;;-1:-1:-1;;;;;906:15:64;;:8;:15;;;;;;;;;;;896:25;;;888:34;;;;;;-1:-1:-1;;;;;946:14:64;;;;;;:7;:14;;;;;;;;961:10;946:26;;;;;;;;936:36;;;928:45;;;;;;-1:-1:-1;;;;;998:15:64;;:8;:15;;;;;;;;;;;:27;;1018:6;998:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;980:15:64;;;:8;:15;;;;;;;;;;;:45;;;;1047:13;;;;;;;:25;;1065:6;1047:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1031:13:64;;;:8;:13;;;;;;;;;;;:41;;;;1107:14;;;;;:7;:14;;;;;1122:10;1107:26;;;;;;;:38;;1138:6;1107:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;1078:14:64;;;;;;;:7;:14;;;;;;;;1093:10;1078:26;;;;;;;;:67;;;;1156:28;;;;;;;;;;;1078:14;;1156:28;;;;;;;;;;;-1:-1:-1;1197:4:64;736:470;;;;;:::o;3701:425::-;3842:10;3804:4;3834:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3834:29:64;;;;;;;;;;3873:27;;;3869:164;;;3918:10;3942:1;3910:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3910:29:64;;;;;;;;;:33;3869:164;;;3996:30;:8;4009:16;3996:30;:12;:30;:::i;:::-;3972:10;3964:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3964:29:64;;;;;;;;;:62;3869:164;4052:10;4074:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4043:61:64;;4074:29;;;;;;;;;;;4043:61;;;;;;;;;4052:10;4043:61;;;;;;;;;;;-1:-1:-1;4117:4:64;;3701:425;-1:-1:-1;;;3701:425:64:o;1131:99:60:-;-1:-1:-1;;;;;1209:16:60;1187:7;1209:16;;;;;;;;;;;;1131:99::o;167:20:53:-;;;;;;;;;;;;;;;-1:-1:-1;;167:20:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:321:60;671:4;-1:-1:-1;;;;;691:17:60;;;;683:26;;;;;;742:10;733:8;:20;;;;;;;;;;;723:30;;;715:39;;;;;;793:10;784:8;:20;;;;;;;;;;;:32;;809:6;784:32;:24;:32;:::i;:::-;770:10;761:8;:20;;;;;;;;;;;:55;;;;-1:-1:-1;;;;;838:13:60;;;;;;:25;;856:6;838:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;822:13:60;;:8;:13;;;;;;;;;;;;:41;;;;874:33;;;;;;;822:13;;883:10;;874:33;;;;;;;;;;-1:-1:-1;920:4:60;608:321;;;;:::o;2946:293:64:-;3106:10;3044:4;3098:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3098:29:64;;;;;;;;;;:46;;3132:11;3098:46;:33;:46;:::i;:::-;3066:10;3058:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3058:29:64;;;;;;;;;;;;:87;;;3156:61;;;;;;3058:29;;3156:61;;;;;;;;;;;-1:-1:-1;3230:4:64;2946:293;;;;:::o;2336:153::-;-1:-1:-1;;;;;2459:15:64;;;2435:7;2459:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;2336:153::o;1042:110:58:-;1100:7;1122:6;;;;1115:14;;;;-1:-1:-1;1142:5:58;;;1042:110::o;1214:123::-;1293:5;;;1311:6;;;;1304:14;;;;1214:123;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\n\nimport \"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\n\n\ncontract NoDecimalTokenMock is StandardToken {\n  string public name;\n  string public symbol;\n  uint256 public totalSupply;\n\n  constructor(\n    address initialAccount,\n    uint256 initialBalance,\n    string _name,\n    string _symbol)\n    public\n  {\n    balances[initialAccount] = initialBalance;\n    totalSupply = initialBalance;\n    name = _name;\n    symbol = _symbol;\n  }\n\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/mocks/tokens/NoDecimalTokenMock.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/mocks/tokens/NoDecimalTokenMock.sol",
    "exportedSymbols": {
      "NoDecimalTokenMock": [
        5136
      ]
    },
    "id": 5137,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5096,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:53"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "id": 5097,
        "nodeType": "ImportDirective",
        "scope": 5137,
        "sourceUnit": 6342,
        "src": "26:67:53",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5098,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6341,
              "src": "127:13:53",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$6341",
                "typeString": "contract StandardToken"
              }
            },
            "id": 5099,
            "nodeType": "InheritanceSpecifier",
            "src": "127:13:53"
          }
        ],
        "contractDependencies": [
          5985,
          6062,
          6094,
          6341
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5136,
        "linearizedBaseContracts": [
          5136,
          6341,
          5985,
          6062,
          6094
        ],
        "name": "NoDecimalTokenMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5101,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 5136,
            "src": "145:18:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5100,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "145:6:53",
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
            "id": 5103,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 5136,
            "src": "167:20:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5102,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "167:6:53",
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
            "id": 5105,
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 5136,
            "src": "191:26:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5104,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "191:7:53",
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
              "id": 5134,
              "nodeType": "Block",
              "src": "342:126:53",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5116,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5902,
                        "src": "348:8:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5118,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5117,
                        "name": "initialAccount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5107,
                        "src": "357:14:53",
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
                      "src": "348:24:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5119,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5109,
                      "src": "375:14:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "348:41:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5121,
                  "nodeType": "ExpressionStatement",
                  "src": "348:41:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5122,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        5105
                      ],
                      "referencedDeclaration": 5105,
                      "src": "395:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5123,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5109,
                      "src": "409:14:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "395:28:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5125,
                  "nodeType": "ExpressionStatement",
                  "src": "395:28:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5126,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5101,
                      "src": "429:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5127,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5111,
                      "src": "436:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "429:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5129,
                  "nodeType": "ExpressionStatement",
                  "src": "429:12:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5130,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5103,
                      "src": "447:6:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5131,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5113,
                      "src": "456:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "447:16:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5133,
                  "nodeType": "ExpressionStatement",
                  "src": "447:16:53"
                }
              ]
            },
            "documentation": null,
            "id": 5135,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5107,
                  "name": "initialAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "239:22:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5106,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:53",
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
                  "id": 5109,
                  "name": "initialBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "267:22:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:53",
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
                  "id": 5111,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "295:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5110,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "295:6:53",
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
                  "id": 5113,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "313:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5112,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:6:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "233:95:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 5115,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "342:0:53"
            },
            "scope": 5136,
            "src": "222:246:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5137,
        "src": "96:375:53"
      }
    ],
    "src": "0:472:53"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/mocks/tokens/NoDecimalTokenMock.sol",
    "exportedSymbols": {
      "NoDecimalTokenMock": [
        5136
      ]
    },
    "id": 5137,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5096,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:53"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "id": 5097,
        "nodeType": "ImportDirective",
        "scope": 5137,
        "sourceUnit": 6342,
        "src": "26:67:53",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5098,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6341,
              "src": "127:13:53",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$6341",
                "typeString": "contract StandardToken"
              }
            },
            "id": 5099,
            "nodeType": "InheritanceSpecifier",
            "src": "127:13:53"
          }
        ],
        "contractDependencies": [
          5985,
          6062,
          6094,
          6341
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5136,
        "linearizedBaseContracts": [
          5136,
          6341,
          5985,
          6062,
          6094
        ],
        "name": "NoDecimalTokenMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5101,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 5136,
            "src": "145:18:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5100,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "145:6:53",
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
            "id": 5103,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 5136,
            "src": "167:20:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5102,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "167:6:53",
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
            "id": 5105,
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 5136,
            "src": "191:26:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5104,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "191:7:53",
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
              "id": 5134,
              "nodeType": "Block",
              "src": "342:126:53",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5116,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5902,
                        "src": "348:8:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5118,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5117,
                        "name": "initialAccount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5107,
                        "src": "357:14:53",
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
                      "src": "348:24:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5119,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5109,
                      "src": "375:14:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "348:41:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5121,
                  "nodeType": "ExpressionStatement",
                  "src": "348:41:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5122,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        5105
                      ],
                      "referencedDeclaration": 5105,
                      "src": "395:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5123,
                      "name": "initialBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5109,
                      "src": "409:14:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "395:28:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5125,
                  "nodeType": "ExpressionStatement",
                  "src": "395:28:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5126,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5101,
                      "src": "429:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5127,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5111,
                      "src": "436:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "429:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5129,
                  "nodeType": "ExpressionStatement",
                  "src": "429:12:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5130,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5103,
                      "src": "447:6:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5131,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5113,
                      "src": "456:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "447:16:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5133,
                  "nodeType": "ExpressionStatement",
                  "src": "447:16:53"
                }
              ]
            },
            "documentation": null,
            "id": 5135,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5107,
                  "name": "initialAccount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "239:22:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5106,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:53",
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
                  "id": 5109,
                  "name": "initialBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "267:22:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:53",
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
                  "id": 5111,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "295:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5110,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "295:6:53",
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
                  "id": 5113,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 5135,
                  "src": "313:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5112,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:6:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "233:95:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 5115,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "342:0:53"
            },
            "scope": 5136,
            "src": "222:246:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5137,
        "src": "96:375:53"
      }
    ],
    "src": "0:472:53"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.206Z"
}