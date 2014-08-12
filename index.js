(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('b'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['b'], function (b) {
      return (root.returnExportsGlobal = factory(b));
    });
  } else {
    // Global Variables
    root.returnExportsGlobal = factory(root.b);
  }
}(this, function (b) {
  // Your actual module

  var checkClient = function(eth) {
    var UA = window.navigator.userAgent;
    if (UA.match( 'Aleth' )) return 'aleth';
    if (UA.match( 'Ethereal')) return 'ethereal'
  }

  return polyeth = function(eth){

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
    
    console.log( 'Polyeth loaded. wrapping/polyfilling native eth object.');
    return clients[checkClient(eth)]
  };
}));
