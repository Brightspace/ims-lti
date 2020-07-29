if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["redis-nonce-store.coffee"]) {
    _$jscoverage["redis-nonce-store.coffee"] = [];
    _$jscoverage["redis-nonce-store.coffee"][1] = 0;
    _$jscoverage["redis-nonce-store.coffee"][4] = 0;
    _$jscoverage["redis-nonce-store.coffee"][6] = 0;
    _$jscoverage["redis-nonce-store.coffee"][8] = 0;
    _$jscoverage["redis-nonce-store.coffee"][9] = 0;
    _$jscoverage["redis-nonce-store.coffee"][10] = 0;
    _$jscoverage["redis-nonce-store.coffee"][11] = 0;
    _$jscoverage["redis-nonce-store.coffee"][15] = 0;
    _$jscoverage["redis-nonce-store.coffee"][16] = 0;
    _$jscoverage["redis-nonce-store.coffee"][18] = 0;
    _$jscoverage["redis-nonce-store.coffee"][19] = 0;
    _$jscoverage["redis-nonce-store.coffee"][23] = 0;
    _$jscoverage["redis-nonce-store.coffee"][25] = 0;
    _$jscoverage["redis-nonce-store.coffee"][27] = 0;
    _$jscoverage["redis-nonce-store.coffee"][28] = 0;
    _$jscoverage["redis-nonce-store.coffee"][31] = 0;
    _$jscoverage["redis-nonce-store.coffee"][32] = 0;
    _$jscoverage["redis-nonce-store.coffee"][33] = 0;
    _$jscoverage["redis-nonce-store.coffee"][35] = 0;
    _$jscoverage["redis-nonce-store.coffee"][36] = 0;
    _$jscoverage["redis-nonce-store.coffee"][40] = 0;
    _$jscoverage["redis-nonce-store.coffee"][41] = 0;
    _$jscoverage["redis-nonce-store.coffee"][42] = 0;
    _$jscoverage["redis-nonce-store.coffee"][45] = 0;
}

_$jscoverage["redis-nonce-store.coffee"].source = ["NonceStore = require './nonce-store'", "", "# Five minutes", "EXPIRE_IN_SEC = 5*60", "", "class RedisNonceStore extends NonceStore", "", "  constructor: (redisClient) ->", "    if typeof redisClient is 'string' and arguments.length is 2", "      redisClient = arguments[1]", "    @redis = redisClient", "", "  isNew: (nonce, timestamp, next=()->)->", "", "    if typeof nonce is 'undefined' or nonce is null or typeof nonce is 'function' or typeof timestamp is 'function' or typeof timestamp is 'undefined'", "      return next new Error('Invalid parameters'), false", "", "    if typeof timestamp is 'undefined' or timestamp is null", "      return next new Error('Timestamp required'), false", "", "", "    # Generate unix time in seconds", "    currentTime = Math.round(Date.now()/1000)", "    # Make sure this request is fresh (within the grace period)", "    freshTimestamp = (currentTime - parseInt(timestamp,10)) <= EXPIRE_IN_SEC", "", "    if not freshTimestamp", "      return next new Error('Expired timestamp'), false", "", "    # Pass all the parameter checks, now check to see if used", "    @redis.get nonce, (err, seen) =>", "      if seen", "        return next new Error('Nonce already seen'), false", "      # Dont have to wait for callback b/c it's a sync op", "      @setUsed nonce, timestamp", "      next null, true", "", "", "  setUsed: (nonce, timestamp, next=()->)->", "    @redis.set(nonce, timestamp)", "    @redis.expire(nonce, EXPIRE_IN_SEC)", "    next(null)", "", "", "exports = module.exports = RedisNonceStore", ""];

(function() {
  var EXPIRE_IN_SEC, NonceStore, RedisNonceStore, exports,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  _$jscoverage["redis-nonce-store.coffee"][1]++;

  NonceStore = require('./nonce-store');

  _$jscoverage["redis-nonce-store.coffee"][4]++;

  EXPIRE_IN_SEC = 5 * 60;

  _$jscoverage["redis-nonce-store.coffee"][6]++;

  RedisNonceStore = (function(superClass) {
    extend(RedisNonceStore, superClass);

    _$jscoverage["redis-nonce-store.coffee"][8]++;

    function RedisNonceStore(redisClient) {
      _$jscoverage["redis-nonce-store.coffee"][9]++;
      if (typeof redisClient === 'string' && arguments.length === 2) {
        _$jscoverage["redis-nonce-store.coffee"][10]++;
        redisClient = arguments[1];
      }
      _$jscoverage["redis-nonce-store.coffee"][11]++;
      this.redis = redisClient;
    }

    RedisNonceStore.prototype.isNew = function(nonce, timestamp, next) {
      var currentTime, freshTimestamp;
      if (next == null) {
        next = function() {};
      }
      _$jscoverage["redis-nonce-store.coffee"][15]++;
      if (typeof nonce === 'undefined' || nonce === null || typeof nonce === 'function' || typeof timestamp === 'function' || typeof timestamp === 'undefined') {
        _$jscoverage["redis-nonce-store.coffee"][16]++;
        return next(new Error('Invalid parameters'), false);
      }
      _$jscoverage["redis-nonce-store.coffee"][18]++;
      if (typeof timestamp === 'undefined' || timestamp === null) {
        _$jscoverage["redis-nonce-store.coffee"][19]++;
        return next(new Error('Timestamp required'), false);
      }
      _$jscoverage["redis-nonce-store.coffee"][23]++;
      currentTime = Math.round(Date.now() / 1000);
      _$jscoverage["redis-nonce-store.coffee"][25]++;
      freshTimestamp = (currentTime - parseInt(timestamp, 10)) <= EXPIRE_IN_SEC;
      _$jscoverage["redis-nonce-store.coffee"][27]++;
      if (!freshTimestamp) {
        _$jscoverage["redis-nonce-store.coffee"][28]++;
        return next(new Error('Expired timestamp'), false);
      }
      _$jscoverage["redis-nonce-store.coffee"][31]++;
      return this.redis.get(nonce, (function(_this) {
        return function(err, seen) {
          _$jscoverage["redis-nonce-store.coffee"][32]++;
          if (seen) {
            _$jscoverage["redis-nonce-store.coffee"][33]++;
            return next(new Error('Nonce already seen'), false);
          }
          _$jscoverage["redis-nonce-store.coffee"][35]++;
          _this.setUsed(nonce, timestamp);
          _$jscoverage["redis-nonce-store.coffee"][36]++;
          return next(null, true);
        };
      })(this));
    };

    RedisNonceStore.prototype.setUsed = function(nonce, timestamp, next) {
      if (next == null) {
        next = function() {};
      }
      _$jscoverage["redis-nonce-store.coffee"][40]++;
      this.redis.set(nonce, timestamp);
      _$jscoverage["redis-nonce-store.coffee"][41]++;
      this.redis.expire(nonce, EXPIRE_IN_SEC);
      _$jscoverage["redis-nonce-store.coffee"][42]++;
      return next(null);
    };

    return RedisNonceStore;

  })(NonceStore);

  _$jscoverage["redis-nonce-store.coffee"][45]++;

  exports = module.exports = RedisNonceStore;

}).call(this);
