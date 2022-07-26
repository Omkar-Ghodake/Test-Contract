const path = require('path');
const fs = require('fs');
const solc = require('solc');

// acquiring path of smart contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Demo.sol');

// reading content of acquired contract
const source = fs.readFileSync(inboxPath, 'utf8');

// compiling smart contract
var input = {
	language: 'Solidity',
	sources: {
		'Demo.sol': {
			content: source
		}
	},
	settings: {
		outputSelection: {
			'*': {
				'*': ['*']
			}
		}
	}
};

var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Demo.sol'].Demo;
// console.log(output.evm.bytecode.object);

module.exports = {
    interface: output.abi,
    bytecode: output.evm.bytecode.object
}