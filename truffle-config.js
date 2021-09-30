require('babel-register');
require("babel-polyfill");
require("dotenv").config();


module.exports = {


  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
   }, 
  },
  

  contracts_directory: "./src/contracts/",
  contracts_build_directory:"./token_abi/abis/",


  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
