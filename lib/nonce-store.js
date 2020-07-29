if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["nonce-store.coffee"]) {
    _$jscoverage["nonce-store.coffee"] = [];
    _$jscoverage["nonce-store.coffee"][1] = 0;
    _$jscoverage["nonce-store.coffee"][3] = 0;
    _$jscoverage["nonce-store.coffee"][6] = 0;
    _$jscoverage["nonce-store.coffee"][7] = 0;
    _$jscoverage["nonce-store.coffee"][10] = 0;
    _$jscoverage["nonce-store.coffee"][11] = 0;
    _$jscoverage["nonce-store.coffee"][14] = 0;
}

_$jscoverage["nonce-store.coffee"].source = ["class NonceStore", "", "  isNonceStore: () -> true", "", "  isNew: ()=>", "    for i, arg of arguments", "      return arg new Error(\"NOT IMPLEMENTED\"), false if typeof arg is 'function'", "", "  setUsed: ()=>", "    for i, arg of arguments", "      return arg new Error(\"NOT IMPLEMENTED\"), false if typeof arg is 'function'", "", "", "exports = module.exports = NonceStore", ""];

(function() {
  var NonceStore, exports,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["nonce-store.coffee"][1]++;

  NonceStore = (function() {
    function NonceStore() {
      this.setUsed = bind(this.setUsed, this);
      this.isNew = bind(this.isNew, this);
    }

    _$jscoverage["nonce-store.coffee"][3]++;

    NonceStore.prototype.isNonceStore = function() {
      return true;
    };

    NonceStore.prototype.isNew = function() {
      var arg, i;
      _$jscoverage["nonce-store.coffee"][6]++;
      for (i in arguments) {
        arg = arguments[i];
        _$jscoverage["nonce-store.coffee"][7]++;
        if (typeof arg === 'function') {
          return arg(new Error("NOT IMPLEMENTED"), false);
        }
      }
    };

    NonceStore.prototype.setUsed = function() {
      var arg, i;
      _$jscoverage["nonce-store.coffee"][10]++;
      for (i in arguments) {
        arg = arguments[i];
        _$jscoverage["nonce-store.coffee"][11]++;
        if (typeof arg === 'function') {
          return arg(new Error("NOT IMPLEMENTED"), false);
        }
      }
    };

    return NonceStore;

  })();

  _$jscoverage["nonce-store.coffee"][14]++;

  exports = module.exports = NonceStore;

}).call(this);
