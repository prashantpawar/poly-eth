
var bigInt = require( './lib/BigInteger' );
var EthString = require( './lib/ethstring' );


var polyeth = function(eth) {

  var checkClient = function(eth) {
    var UA = window.navigator.userAgent;
    if (UA.match( 'Aleth' )) return 'aleth';
    if (UA.match( 'Ethereal')) return 'ethereal';
    if (UA.match( 'Ethos')) return 'ethos';
  }

  var accounts = {
    'NAMEREG': '0xasdoa3y4oeidhasd',
    'SELF': '0xoasidyhasod',
    '8815f6289f656e5148b7d4dee93d5d96ee7ece8f': '8815f6289f656e5148b7d4dee93d5d96ee7ece8f'
  }

  var watching = {}

  var cpp_eth = require( './lib/eth.js')

  var mocketh = {
    eth: cpp_eth,
    client: 'mocketh',

    // Proxy to cpp-ethereum eth/rpc object

    getProcedures: cpp_eth.getProcedures,
    getCoinbase: cpp_eth.getCoinbase,
    getIsListening: cpp_eth.getIsListening,
    getIsMining: cpp_eth.getIsMining,
    getGasPrice: cpp_eth.getGasPrice,
    getKey: cpp_eth.getKey,
    getKeys: cpp_eth.getKeys,
    getPeerCount: cpp_eth.getPeerCount,
    getBalanceAt: cpp_eth.getBalanceAt,
    balanceAt: cpp_eth.balanceAt,
    getStorageAt: cpp_eth.getStorageAt,
    storageAt: cpp_eth.storageAt,
    getTxCountAt: cpp_eth.getTxCountAt,
    txCountAt: cpp_eth.txCountAt, 
    getIsContractAt: cpp_eth.getIsContractAt,
    isContractAt: cpp_eth.isContractAt,
    create: cpp_eth.create,
    transact: cpp_eth.transact,
    getSecretToAddress: cpp_eth.getSecretToAddress,
    secretToAddress: cpp_eth.secretToAddress,
    getLll: cpp_eth.getLll,
    lll: cpp_eth.lll,
    check: cpp_eth.check,
    watch: cpp_eth.watch,
    unwatch: cpp_eth.unwatch,
    newBlock: cpp_eth.newBlock,

    getKeys: function(cb){ cb(['MockKey213dsf3454as'])},
    secretToAddress: function(privateKey){
      return accounts[privateKey] || accounts['SELF'];
    },
    watch: function(addr, cb) {
      console.log( 'Attach change handlers for: ', addr );
      if (watching[addr]) {
        watching[addr].push( cb )
      } else {
        watching[addr] = [cb];
      }
    },
    ready: function(cb){
      window.onload = cb;
    }
  }

  var clients = {

    ethos: checkClient( eth ) == 'aleth' && mocketh,

    aleth: checkClient( eth ) == 'aleth' && {
      eth: eth,
      client: 'aleth',
      getKeys: function(cb){ return cb(eth.keys); },
      gasPrice: eth.gasPrice,
      watch: eth.watch,
      secretToAddress: eth.secretToAddress,
      key: eth.key,
      balanceAt: eth.balanceAt,
      storageAt: eth.storageAt,
      transact: eth.transact,
      create: eth.create,
      ready: function(cb) {
        if (typeof jQuery !== 'undefined') {
          jQuery( document ).ready( cb )
        } else {
          window.onload = cb;
        }
      }

    },

    ethereal: checkClient( eth ) == 'ethereal' && {
      eth: eth,
      client: 'ethereal',
      getKeys: function(cb){ 
        // ethereal client has ony a single key and corresponding getter
        return eth.getKey(function(key){
          // wrapping in array for consistency
          return [key];
        }); 
      }
    }
  }

  if (!eth) return mocketh;
  else return clients[checkClient(eth)]
};


if ( typeof module !== 'undefined' ) {
  module.exports = polyeth;
}
