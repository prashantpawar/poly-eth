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
  return polyeth = function(eth){
    console.log( 'Polyeth loaded. wrapping/polyfilling native eth object.');
    return {
      eth: eth,
      getKey: function(cb){ eth.getKey(cb); }
    };
  };
}));
