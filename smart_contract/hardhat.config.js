// https://eth-goerli.g.alchemy.com/v2/o0af5xUl6sX8A4cjYrwl4bLgnIqxUZGW

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/o0af5xUl6sX8A4cjYrwl4bLgnIqxUZGW',
            accounts: ['ccaad567fc11ea789109ad8eb0ce1415f283c8b2b8ef2b749b6985b2d721b3f1']
        }
    }
}