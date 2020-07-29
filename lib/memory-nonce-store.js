if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["memory-nonce-store.coffee"]) {
    _$jscoverage["memory-nonce-store.coffee"] = [];
    _$jscoverage["memory-nonce-store.coffee"][1] = 0;
    _$jscoverage["memory-nonce-store.coffee"][4] = 0;
    _$jscoverage["memory-nonce-store.coffee"][6] = 0;
    _$jscoverage["memory-nonce-store.coffee"][8] = 0;
    _$jscoverage["memory-nonce-store.coffee"][9] = 0;
    _$jscoverage["memory-nonce-store.coffee"][13] = 0;
    _$jscoverage["memory-nonce-store.coffee"][14] = 0;
    _$jscoverage["memory-nonce-store.coffee"][16] = 0;
    _$jscoverage["memory-nonce-store.coffee"][18] = 0;
    _$jscoverage["memory-nonce-store.coffee"][20] = 0;
    _$jscoverage["memory-nonce-store.coffee"][21] = 0;
    _$jscoverage["memory-nonce-store.coffee"][23] = 0;
    _$jscoverage["memory-nonce-store.coffee"][24] = 0;
    _$jscoverage["memory-nonce-store.coffee"][25] = 0;
    _$jscoverage["memory-nonce-store.coffee"][26] = 0;
    _$jscoverage["memory-nonce-store.coffee"][28] = 0;
    _$jscoverage["memory-nonce-store.coffee"][30] = 0;
    _$jscoverage["memory-nonce-store.coffee"][31] = 0;
    _$jscoverage["memory-nonce-store.coffee"][33] = 0;
    _$jscoverage["memory-nonce-store.coffee"][35] = 0;
    _$jscoverage["memory-nonce-store.coffee"][38] = 0;
    _$jscoverage["memory-nonce-store.coffee"][39] = 0;
    _$jscoverage["memory-nonce-store.coffee"][42] = 0;
    _$jscoverage["memory-nonce-store.coffee"][44] = 0;
    _$jscoverage["memory-nonce-store.coffee"][45] = 0;
    _$jscoverage["memory-nonce-store.coffee"][47] = 0;
    _$jscoverage["memory-nonce-store.coffee"][50] = 0;
}

_$jscoverage["memory-nonce-store.coffee"].source = ["NonceStore = require './nonce-store'", "", "# Five minutes", "EXPIRE_IN_SEC = 5 * 60", "", "class MemoryNonceStore extends NonceStore", "", "  constructor: () ->", "    @used = Object.create(null)", "", "  isNew: (nonce, timestamp, next=()->)->", "", "    if typeof nonce is 'undefined' or nonce is null or typeof nonce is 'function' or typeof timestamp is 'function' or typeof timestamp is 'undefined'", "      return next new Error('Invalid parameters'), false", "", "    @_clearNonces()", "", "    firstTimeSeen = @used[nonce] is undefined", "", "    if not firstTimeSeen", "      return next new Error('Nonce already seen'), false", "", "    @setUsed nonce, timestamp, (err) ->", "      if typeof timestamp isnt 'undefined' and timestamp isnt null", "        timestamp = parseInt timestamp, 10", "        currentTime = Math.round(Date.now() / 1000)", "", "        timestampIsFresh = (currentTime - timestamp) <= EXPIRE_IN_SEC", "", "        if timestampIsFresh", "          next null, true", "        else", "          next new Error('Expired timestamp'), false", "      else", "        next new Error('Timestamp required'), false", "", "  setUsed: (nonce, timestamp, next=()->)->", "    @used[nonce] = timestamp + EXPIRE_IN_SEC", "    next(null)", "", "  _clearNonces: () ->", "    now = Math.round(Date.now() / 1000)", "", "    for nonce, expiry of @used", "      delete @used[nonce] if expiry <= now", "", "    return", "", "", "exports = module.exports = MemoryNonceStore", ""];

(function() {
  var EXPIRE_IN_SEC, MemoryNonceStore, NonceStore, exports,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  _$jscoverage["memory-nonce-store.coffee"][1]++;

  NonceStore = require('./nonce-store');

  _$jscoverage["memory-nonce-store.coffee"][4]++;

  EXPIRE_IN_SEC = 5 * 60;

  _$jscoverage["memory-nonce-store.coffee"][6]++;

  MemoryNonceStore = (function(superClass) {
    extend(MemoryNonceStore, superClass);

    _$jscoverage["memory-nonce-store.coffee"][8]++;

    function MemoryNonceStore() {
      _$jscoverage["memory-nonce-store.coffee"][9]++;
      this.used = Object.create(null);
    }

    MemoryNonceStore.prototype.isNew = function(nonce, timestamp, next) {
      var firstTimeSeen;
      if (next == null) {
        next = function() {};
      }
      _$jscoverage["memory-nonce-store.coffee"][13]++;
      if (typeof nonce === 'undefined' || nonce === null || typeof nonce === 'function' || typeof timestamp === 'function' || typeof timestamp === 'undefined') {
        _$jscoverage["memory-nonce-store.coffee"][14]++;
        return next(new Error('Invalid parameters'), false);
      }
      _$jscoverage["memory-nonce-store.coffee"][16]++;
      this._clearNonces();
      _$jscoverage["memory-nonce-store.coffee"][18]++;
      firstTimeSeen = this.used[nonce] === void 0;
      _$jscoverage["memory-nonce-store.coffee"][20]++;
      if (!firstTimeSeen) {
        _$jscoverage["memory-nonce-store.coffee"][21]++;
        return next(new Error('Nonce already seen'), false);
      }
      _$jscoverage["memory-nonce-store.coffee"][23]++;
      return this.setUsed(nonce, timestamp, function(err) {
        var currentTime, timestampIsFresh;
        _$jscoverage["memory-nonce-store.coffee"][24]++;
        if (typeof timestamp !== 'undefined' && timestamp !== null) {
          _$jscoverage["memory-nonce-store.coffee"][25]++;
          timestamp = parseInt(timestamp, 10);
          _$jscoverage["memory-nonce-store.coffee"][26]++;
          currentTime = Math.round(Date.now() / 1000);
          _$jscoverage["memory-nonce-store.coffee"][28]++;
          timestampIsFresh = (currentTime - timestamp) <= EXPIRE_IN_SEC;
          _$jscoverage["memory-nonce-store.coffee"][30]++;
          if (timestampIsFresh) {
            _$jscoverage["memory-nonce-store.coffee"][31]++;
            return next(null, true);
          } else {
            _$jscoverage["memory-nonce-store.coffee"][33]++;
            return next(new Error('Expired timestamp'), false);
          }
        } else {
          _$jscoverage["memory-nonce-store.coffee"][35]++;
          return next(new Error('Timestamp required'), false);
        }
      });
    };

    MemoryNonceStore.prototype.setUsed = function(nonce, timestamp, next) {
      if (next == null) {
        next = function() {};
      }
      _$jscoverage["memory-nonce-store.coffee"][38]++;
      this.used[nonce] = timestamp + EXPIRE_IN_SEC;
      _$jscoverage["memory-nonce-store.coffee"][39]++;
      return next(null);
    };

    MemoryNonceStore.prototype._clearNonces = function() {
      var expiry, nonce, now, ref;
      _$jscoverage["memory-nonce-store.coffee"][42]++;
      now = Math.round(Date.now() / 1000);
      _$jscoverage["memory-nonce-store.coffee"][44]++;
      ref = this.used;
      for (nonce in ref) {
        expiry = ref[nonce];
        _$jscoverage["memory-nonce-store.coffee"][45]++;
        if (expiry <= now) {
          delete this.used[nonce];
        }
      }
      _$jscoverage["memory-nonce-store.coffee"][47]++;
    };

    return MemoryNonceStore;

  })(NonceStore);

  _$jscoverage["memory-nonce-store.coffee"][50]++;

  exports = module.exports = MemoryNonceStore;

}).call(this);
