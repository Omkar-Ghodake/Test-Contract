const assert = require('assert');
const ganache = require('ganache-cli');
const { interface, bytecode } = require('../compile');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;
let output;

beforeEach(async () => {
    // get list of all accounts from ganache
    accounts = await web3.eth.getAccounts();

    // use one of these accounts to deploy contract
    output = await new web3.eth.Contract(interface)
        .deploy({ data: bytecode, arguments: [2, 4] })
        .send({ from: accounts[0], gas: 3000000 })
});

describe('Demo', () => {
    it('If deploys the \'Demo\' contract', () => {
        console.log(output);
    });
});