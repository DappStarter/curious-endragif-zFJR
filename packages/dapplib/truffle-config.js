require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note noble smart include arctic surge snap'; 
let testAccounts = [
"0xbf61d0f8cf00767c60b4d1072129b61741263eeb134002d20f5fcbadf4801726",
"0x32490d6ebf6d69c24ebf73c4972a5ac84c395d7c64926f24431790c6b99f1416",
"0xcb42a2058074eccf9d4166bbbb04709a99ebfee9a62c359352de5688efdde34d",
"0x0aa10e4c191cc4ade910403389c5030eb83c7e2d489e763a891d7dd21ea26c89",
"0xa43da971172f4ea542f1d0dc2d57db016f568be69356ca0a8453f80c634f2a7d",
"0xddf73e114bc9de109503e4ce2250b32d9f883db2ab2dea168495c931c6f88370",
"0x41cc16207218ea145c8c95661cb19967e8c7b2611f7ff2271c844b73cfb4d419",
"0x93e12a0004f46e61134c666a6e93f15626eccdd4e2b91bbee3758dabd0ed3a87",
"0xf9cdf4a984b4d20cbbe06a979a1353c62395f6f314c4572faa84856df174ced9",
"0xaaccd425d861cb0a91575c6da9bcd05473fc546941ddf4e4ce872f5b2d6f8e5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

