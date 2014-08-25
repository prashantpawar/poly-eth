
var bigInt = require( './lib/BigInteger' );
var EthString = require( './lib/ethstring' );




var polyeth = function(eth) {

  var checkClient = function(eth) {
    var UA = window.navigator.userAgent;
    if (UA.match( 'Aleth' )) return 'aleth';
    if (UA.match( 'Ethereal')) return 'ethereal'
  }

  var accounts = {
    'NAMEREG': '0xasdoa3y4oeidhasd',
    'SELF': '0xoasidyhasod',
    '8815f6289f656e5148b7d4dee93d5d96ee7ece8f': '8815f6289f656e5148b7d4dee93d5d96ee7ece8f'
  }

  var mocketh = {
    eth: null,
    getKeys: function(cb){ cb(['MockKey213dsf3454as'])},
    secretToAddress: function(privateKey){
      return accounts[privateKey] || accounts['SELF'];
    },
    watch: function(addr, cb) {
      console.log( 'attach change handlers for: ', addr );
    },
    ready: function(cb){
      console.log( 'mocketh ready...')
      window.onload = cb;
    }
  }

  var clients = {
    aleth: {
      eth: eth,
      client: 'aleth',
      getKeys: function(cb){ return cb(eth.keys); }
    },

    ethereal: {
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
