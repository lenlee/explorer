#!/usr/bin/env node

/*
    Stand-in for local testing of web3 calls
*/
var BigNumber = require('bignumber.js');
var etherUnits = require(__lib + "etherUnits.js")

exports.data = function(req, res){
  console.log(req.body)

  if ("addr" in req.body) {
    var addr = req.body.addr.toLowerCase();
    var options = req.body.options;
    var web3Tasks = [];

    var addrData = {};

    if (options.indexOf("balance") > -1) {
      addrData["balance"] = new BigNumber(75380000001024);
      addrData["balance"] = etherUnits.toEther(addrData["balance"], 'wei');
    }
    if (options.indexOf("count") > -1) {
      addrData["count"] = 139;
    }
    if (options.indexOf("bytecode") > -1) {
      addrData["isContract"] = true;
      addrData["bytecode"] = "0x606060405273da4a4626d3e16e094de3225a751aab7128e96526600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550610462806100516000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480632e6e504a1461005a5780633ccfd60b14610069578063eedcf50a14610078578063fdf97cb2146100b157610058565b005b61006760048050506100ea565b005b6100766004805050610277565b005b6100856004805050610424565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100be600480505061043c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166318160ddd604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166370a0823130604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303816000876161da5a03f11561000257505050604051805190602001503073ffffffffffffffffffffffffffffffffffffffff16310103604051809050600060405180830381858888f19350505050505b565b600073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166370a0823133604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303816000876161da5a03f1156100025750505060405180519060200150905073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166323b872dd333084604051847c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506020604051808303816000876161da5a03f1156100025750505060405180519060200150158061041657503373ffffffffffffffffffffffffffffffffffffffff16600082604051809050600060405180830381858888f19350505050155b1561042057610002565b5b50565b73bb9bc244d798123fde783fcc1c72d3bb8c18941381565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156";
    }

    res.write(JSON.stringify(addrData));
    res.end();


  } else if ("tx" in req.body) {
    var tx = {
      blockHash: "0x59fee9b288d1201841ca59569026a93fa0e32f350224019747145cc52d2877ba",
      blockNumber: 2004907,
      from: "0xf9436cd1bc93805bd54326dbb8857e15e9e5ef4a",
      gas: 90000,
      gasPrice: 20000000000,
      hash: "0x3868a24286d737841f42c55384b5593111defccfcec4a2d0b38115d67b10af6c",
      input: "0x",
      nonce: 3042,
      to: "0x7172e090ef7aad8fb5b58052040587aaf248d7be",
      transactionIndex: 5,
      value: etherUnits.toEther( new BigNumber("400000000000000000000"), "wei")
    }

    res.write(JSON.stringify(tx));
    res.end();

  } else {

    console.error("Invalid Request: " + action)
    res.status(400).send();
  }

};

exports.mc = new function() {
  this.getCode = function(addr) {
    return "0x606060405273da4a4626d3e16e094de3225a751aab7128e96526600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550610462806100516000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480632e6e504a1461005a5780633ccfd60b14610069578063eedcf50a14610078578063fdf97cb2146100b157610058565b005b61006760048050506100ea565b005b6100766004805050610277565b005b6100856004805050610424565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100be600480505061043c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166318160ddd604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166370a0823130604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303816000876161da5a03f11561000257505050604051805190602001503073ffffffffffffffffffffffffffffffffffffffff16310103604051809050600060405180830381858888f19350505050505b565b600073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166370a0823133604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303816000876161da5a03f1156100025750505060405180519060200150905073bb9bc244d798123fde783fcc1c72d3bb8c18941373ffffffffffffffffffffffffffffffffffffffff166323b872dd333084604051847c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506020604051808303816000876161da5a03f1156100025750505060405180519060200150158061041657503373ffffffffffffffffffffffffffffffffffffffff16600082604051809050600060405180830381858888f19350505050155b1561042057610002565b5b50565b73bb9bc244d798123fde783fcc1c72d3bb8c18941381565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156";
  }
}
