if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["consumer.coffee"]) {
    _$jscoverage["consumer.coffee"] = [];
    _$jscoverage["consumer.coffee"][1] = 0;
    _$jscoverage["consumer.coffee"][2] = 0;
    _$jscoverage["consumer.coffee"][3] = 0;
    _$jscoverage["consumer.coffee"][4] = 0;
    _$jscoverage["consumer.coffee"][6] = 0;
    _$jscoverage["consumer.coffee"][7] = 0;
    _$jscoverage["consumer.coffee"][9] = 0;
    _$jscoverage["consumer.coffee"][10] = 0;
    _$jscoverage["consumer.coffee"][12] = 0;
    _$jscoverage["consumer.coffee"][13] = 0;
    _$jscoverage["consumer.coffee"][15] = 0;
    _$jscoverage["consumer.coffee"][16] = 0;
    _$jscoverage["consumer.coffee"][17] = 0;
    _$jscoverage["consumer.coffee"][18] = 0;
    _$jscoverage["consumer.coffee"][21] = 0;
    _$jscoverage["consumer.coffee"][22] = 0;
    _$jscoverage["consumer.coffee"][23] = 0;
    _$jscoverage["consumer.coffee"][24] = 0;
    _$jscoverage["consumer.coffee"][25] = 0;
    _$jscoverage["consumer.coffee"][26] = 0;
    _$jscoverage["consumer.coffee"][28] = 0;
    _$jscoverage["consumer.coffee"][29] = 0;
    _$jscoverage["consumer.coffee"][31] = 0;
    _$jscoverage["consumer.coffee"][33] = 0;
}

_$jscoverage["consumer.coffee"].source = ["crypto            = require 'crypto'", "HMAC_SHA1         = require './hmac-sha1'", "errors            = require './errors'", "extensions        = require './extensions'", "", "class Consumer", "  constructor: (consumer_key, consumer_secret) ->", "", "    if typeof consumer_key is 'undefined' or consumer_key is null", "      throw new errors.ConsumerError 'Must specify consumer_key'", "", "    if typeof consumer_secret is 'undefined' or consumer_secret is null", "      throw new errors.ConsumerError 'Must specify consumer_secret'", "", "    @consumer_key     = consumer_key", "    @consumer_secret  = consumer_secret", "    @signer           = new HMAC_SHA1()", "    @body             = {}", "", "  encode_request: (urlInfo, body) =>", "    body.oauth_nonce = crypto.randomBytes(Math.ceil(16)).toString('hex').slice(0, 32)", "    body.oauth_consumer_key = @consumer_key", "    body.oauth_signature_method = 'HMAC-SHA1'", "    body.oauth_timestamp = Math.floor(new Date() / 1000)", "    body.oauth_version = '1.0'", "    body.oauth_callback = 'about:blank'", "", "    sig = @signer.build_signature urlInfo, body, @consumer_secret", "    body.oauth_signature = sig", "", "    return body", "", "exports = module.exports = Consumer", ""];

(function() {
  var Consumer, HMAC_SHA1, crypto, errors, exports, extensions,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["consumer.coffee"][1]++;

  crypto = require('crypto');

  _$jscoverage["consumer.coffee"][2]++;

  HMAC_SHA1 = require('./hmac-sha1');

  _$jscoverage["consumer.coffee"][3]++;

  errors = require('./errors');

  _$jscoverage["consumer.coffee"][4]++;

  extensions = require('./extensions');

  _$jscoverage["consumer.coffee"][6]++;

  Consumer = (function() {
    _$jscoverage["consumer.coffee"][7]++;

    function Consumer(consumer_key, consumer_secret) {
      this.encode_request = bind(this.encode_request, this);
      _$jscoverage["consumer.coffee"][9]++;
      if (typeof consumer_key === 'undefined' || consumer_key === null) {
        _$jscoverage["consumer.coffee"][10]++;
        throw new errors.ConsumerError('Must specify consumer_key');
      }
      _$jscoverage["consumer.coffee"][12]++;
      if (typeof consumer_secret === 'undefined' || consumer_secret === null) {
        _$jscoverage["consumer.coffee"][13]++;
        throw new errors.ConsumerError('Must specify consumer_secret');
      }
      _$jscoverage["consumer.coffee"][15]++;
      this.consumer_key = consumer_key;
      _$jscoverage["consumer.coffee"][16]++;
      this.consumer_secret = consumer_secret;
      _$jscoverage["consumer.coffee"][17]++;
      this.signer = new HMAC_SHA1();
      _$jscoverage["consumer.coffee"][18]++;
      this.body = {};
    }

    Consumer.prototype.encode_request = function(urlInfo, body) {
      var sig;
      _$jscoverage["consumer.coffee"][21]++;
      body.oauth_nonce = crypto.randomBytes(Math.ceil(16)).toString('hex').slice(0, 32);
      _$jscoverage["consumer.coffee"][22]++;
      body.oauth_consumer_key = this.consumer_key;
      _$jscoverage["consumer.coffee"][23]++;
      body.oauth_signature_method = 'HMAC-SHA1';
      _$jscoverage["consumer.coffee"][24]++;
      body.oauth_timestamp = Math.floor(new Date() / 1000);
      _$jscoverage["consumer.coffee"][25]++;
      body.oauth_version = '1.0';
      _$jscoverage["consumer.coffee"][26]++;
      body.oauth_callback = 'about:blank';
      _$jscoverage["consumer.coffee"][28]++;
      sig = this.signer.build_signature(urlInfo, body, this.consumer_secret);
      _$jscoverage["consumer.coffee"][29]++;
      body.oauth_signature = sig;
      _$jscoverage["consumer.coffee"][31]++;
      return body;
    };

    return Consumer;

  })();

  _$jscoverage["consumer.coffee"][33]++;

  exports = module.exports = Consumer;

}).call(this);
