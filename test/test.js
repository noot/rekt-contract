var HelpMe = artifacts.require("HelpMe");

contract('HelpMe', function(accounts) {
    var addressA = accounts[0];
    web3.eth.defaultAccount = web3.eth.accounts[0]

    let contract;

    it("should deploy", async () => {
        contract = await HelpMe.deployed();
        console.log("\t\t[ contract address :: " + contract.address + " ]");
        assert(contract !== undefined, 'has no contract instance');
    }).timeout(100000);

    it("should revert", async() => {
        let hash = contract.vmError();
        let res = contract.vmError.call();
    })

    it("should use all gas", async() => {
        let hash = contract.useAllGas()
        let res = contract.useAllGas.call();
    })
})