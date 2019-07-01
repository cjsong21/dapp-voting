var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "game any rhythm team unfair hawk assist copy test remind rule caught";
var infuraKey = "https://ropsten.infura.io/v3/141d92359a2f4a2daf5031c69ee7bb2d";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function () {
           return new HDWalletProvider(mnemonic, infuraKey);
      },
      network_id: '3',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: '0.4.25',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
