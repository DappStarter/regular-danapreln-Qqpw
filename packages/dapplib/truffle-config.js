require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth muscle column gesture logic off sugar'; 
let testAccounts = [
"0x193178989fa27d58a8ad45f4641265c0621b5a9a972a98f6531f01694a294d54",
"0x8780695be78a8b573002b84cdcbe76da645a5fbcd87c337ed62ca87beca2e529",
"0x2b0474f29ba2a08937718b9e73560805ee721db39c3b61c254b8e6fa2a35ea3c",
"0xf3a7f7804d7b000c4bd83a7a4918e3ca8d932c6436ec66a048cc9f32beefa298",
"0x7dd5a35c75060c4c6b0e1f63dece11eecfb60de223b38f9e6188bd98a069c088",
"0xeb1ec48d91caaffab6f14932d8957c2c94ed376dfe9c0470e0377fff809defac",
"0x415805ddccf9a083c99175dde35390599502dee32d995215a5a43970227e7b9c",
"0xdaa79f098535cd6d676e48a9809f052ec21071b22512b311fce965b42cff861e",
"0x3dcd78eb83322e6679fc3d791fc2a840c99c2ea9f4dd75198505485f52283215",
"0xe33f1073b13259338e7231751222217300fc82caf5263b3a433826e60770efe7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


