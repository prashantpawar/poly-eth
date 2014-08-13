
var bigInt = require( './lib/BigInteger' );
var EthString = require( './lib/ethstring' );




var polyeth = function(eth) {

  var checkClient = function(eth) {
    var UA = window.navigator.userAgent;
    if (UA.match( 'Aleth' )) return 'aleth';
    if (UA.match( 'Ethereal')) return 'ethereal'
  }

  var mocketh = {
    eth: null,
    getKeys: function(cb){ cb(['MockKey213dsf3454as'])}
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
