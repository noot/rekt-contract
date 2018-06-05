var HelpMe = artifacts.require("./HelpMe.sol");

module.exports = function(deployer) { 
  deployer.deploy(HelpMe, {gas: 3000000});
};