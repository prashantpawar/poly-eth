
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
    getKey: function(cb){ cb('MockKey213dsf3454as')}
  }

  var clients = {
    aleth: {
      eth: eth,
      client: 'aleth',
      getKey: function(cb){ return cb(eth.key); }
    },

    ethereal: {
      eth: eth,
      client: 'ethereal',
      getKey: function(cb){ return eth.getKey(cb); }
    }
  }

  if (!eth) return mocketh;
  else return clients[checkClient(eth)]
};


if(typeof module !== 'undefined' ) {
  module.exports = polyeth;
}
