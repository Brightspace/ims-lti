if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["hmac-sha1.coffee"]) {
    _$jscoverage["hmac-sha1.coffee"] = [];
    _$jscoverage["hmac-sha1.coffee"][1] = 0;
    _$jscoverage["hmac-sha1.coffee"][2] = 0;
    _$jscoverage["hmac-sha1.coffee"][3] = 0;
    _$jscoverage["hmac-sha1.coffee"][14] = 0;
    _$jscoverage["hmac-sha1.coffee"][16] = 0;
    _$jscoverage["hmac-sha1.coffee"][18] = 0;
    _$jscoverage["hmac-sha1.coffee"][19] = 0;
    _$jscoverage["hmac-sha1.coffee"][21] = 0;
    _$jscoverage["hmac-sha1.coffee"][22] = 0;
    _$jscoverage["hmac-sha1.coffee"][24] = 0;
    _$jscoverage["hmac-sha1.coffee"][25] = 0;
    _$jscoverage["hmac-sha1.coffee"][26] = 0;
    _$jscoverage["hmac-sha1.coffee"][27] = 0;
    _$jscoverage["hmac-sha1.coffee"][28] = 0;
    _$jscoverage["hmac-sha1.coffee"][30] = 0;
    _$jscoverage["hmac-sha1.coffee"][32] = 0;
    _$jscoverage["hmac-sha1.coffee"][34] = 0;
    _$jscoverage["hmac-sha1.coffee"][35] = 0;
    _$jscoverage["hmac-sha1.coffee"][37] = 0;
    _$jscoverage["hmac-sha1.coffee"][41] = 0;
    _$jscoverage["hmac-sha1.coffee"][43] = 0;
    _$jscoverage["hmac-sha1.coffee"][44] = 0;
    _$jscoverage["hmac-sha1.coffee"][47] = 0;
    _$jscoverage["hmac-sha1.coffee"][53] = 0;
    _$jscoverage["hmac-sha1.coffee"][56] = 0;
    _$jscoverage["hmac-sha1.coffee"][57] = 0;
    _$jscoverage["hmac-sha1.coffee"][58] = 0;
    _$jscoverage["hmac-sha1.coffee"][60] = 0;
    _$jscoverage["hmac-sha1.coffee"][61] = 0;
    _$jscoverage["hmac-sha1.coffee"][64] = 0;
    _$jscoverage["hmac-sha1.coffee"][65] = 0;
    _$jscoverage["hmac-sha1.coffee"][67] = 0;
    _$jscoverage["hmac-sha1.coffee"][68] = 0;
    _$jscoverage["hmac-sha1.coffee"][69] = 0;
    _$jscoverage["hmac-sha1.coffee"][71] = 0;
    _$jscoverage["hmac-sha1.coffee"][72] = 0;
    _$jscoverage["hmac-sha1.coffee"][74] = 0;
    _$jscoverage["hmac-sha1.coffee"][77] = 0;
    _$jscoverage["hmac-sha1.coffee"][78] = 0;
    _$jscoverage["hmac-sha1.coffee"][80] = 0;
    _$jscoverage["hmac-sha1.coffee"][82] = 0;
}

_$jscoverage["hmac-sha1.coffee"].source = ["crypto    = require 'crypto'", "url       = require 'url'", "utils     = require './utils'", "", "", "# Cleaning invloves:", "#   stripping the oauth_signature from the params", "#   encoding the values ( yes this double encodes them )", "#   sorting the key/value pairs", "#   joining them with &", "#   encoding them again", "#", "# Returns a string representing the request", "_clean_request_body = (body, query) ->", "", "  out = []", "", "  encodeParam = (key, val) ->", "    return \"#{key}=#{utils.special_encode(val)}\"", "", "  cleanParams = (params) ->", "    return if typeof params isnt 'object'", "", "    for key, vals of params", "      continue if key is 'oauth_signature'", "      if Array.isArray(vals) is true", "        for val in vals", "          out.push encodeParam key, val", "      else", "        out.push encodeParam key, vals", "", "    return", "", "  cleanParams body", "  cleanParams query", "", "  utils.special_encode out.sort().join('&')", "", "", "", "class HMAC_SHA1", "", "  toString: () ->", "    'HMAC_SHA1'", "", "  build_signature_raw: (req_url, parsed_url, method, params, consumer_secret, token) ->", "    sig = [", "      method.toUpperCase()", "      utils.special_encode req_url", "      _clean_request_body params, parsed_url.query", "    ]", "", "    @sign_string sig.join('&'), consumer_secret, token", "", "  build_signature: (req, body, consumer_secret, token) ->", "    hapiRawReq = req.raw and req.raw.req", "    if hapiRawReq", "      req = hapiRawReq", "", "    originalUrl = req.originalUrl or req.url", "    protocol = req.headers['x-forwarded-proto'] || req.protocol", "", "    # Since canvas includes query parameters in the body we can omit the query string", "    if body.tool_consumer_info_product_family_code == 'canvas'", "      originalUrl = url.parse(originalUrl).pathname", "", "    if protocol is undefined", "      encrypted = req.connection.encrypted", "      protocol = (encrypted and 'https') or 'http'", "", "    parsedUrl  = url.parse originalUrl, true", "    hitUrl     = protocol + '://' + req.headers.host + parsedUrl.pathname", "", "    @build_signature_raw hitUrl, parsedUrl, req.method, body, consumer_secret, token", "", "  sign_string: (str, key, token) ->", "    key = \"#{key}&\"", "    key += token if token", "", "    crypto.createHmac('sha1', key).update(str).digest('base64')", "", "exports = module.exports = HMAC_SHA1", ""];

(function() {
  var HMAC_SHA1, _clean_request_body, crypto, exports, url, utils;

  _$jscoverage["hmac-sha1.coffee"][1]++;

  crypto = require('crypto');

  _$jscoverage["hmac-sha1.coffee"][2]++;

  url = require('url');

  _$jscoverage["hmac-sha1.coffee"][3]++;

  utils = require('./utils');

  _$jscoverage["hmac-sha1.coffee"][14]++;

  _clean_request_body = function(body, query) {
    var cleanParams, encodeParam, out;
    _$jscoverage["hmac-sha1.coffee"][16]++;
    out = [];
    _$jscoverage["hmac-sha1.coffee"][18]++;
    encodeParam = function(key, val) {
      _$jscoverage["hmac-sha1.coffee"][19]++;
      return key + "=" + (utils.special_encode(val));
    };
    _$jscoverage["hmac-sha1.coffee"][21]++;
    cleanParams = function(params) {
      var i, key, len, val, vals;
      _$jscoverage["hmac-sha1.coffee"][22]++;
      if (typeof params !== 'object') {
        return;
      }
      _$jscoverage["hmac-sha1.coffee"][24]++;
      for (key in params) {
        vals = params[key];
        _$jscoverage["hmac-sha1.coffee"][25]++;
        if (key === 'oauth_signature') {
          continue;
        }
        _$jscoverage["hmac-sha1.coffee"][26]++;
        if (Array.isArray(vals) === true) {
          _$jscoverage["hmac-sha1.coffee"][27]++;
          for (i = 0, len = vals.length; i < len; i++) {
            val = vals[i];
            _$jscoverage["hmac-sha1.coffee"][28]++;
            out.push(encodeParam(key, val));
          }
        } else {
          _$jscoverage["hmac-sha1.coffee"][30]++;
          out.push(encodeParam(key, vals));
        }
      }
      _$jscoverage["hmac-sha1.coffee"][32]++;
    };
    _$jscoverage["hmac-sha1.coffee"][34]++;
    cleanParams(body);
    _$jscoverage["hmac-sha1.coffee"][35]++;
    cleanParams(query);
    _$jscoverage["hmac-sha1.coffee"][37]++;
    return utils.special_encode(out.sort().join('&'));
  };

  _$jscoverage["hmac-sha1.coffee"][41]++;

  HMAC_SHA1 = (function() {
    function HMAC_SHA1() {}

    _$jscoverage["hmac-sha1.coffee"][43]++;

    HMAC_SHA1.prototype.toString = function() {
      _$jscoverage["hmac-sha1.coffee"][44]++;
      return 'HMAC_SHA1';
    };

    HMAC_SHA1.prototype.build_signature_raw = function(req_url, parsed_url, method, params, consumer_secret, token) {
      var sig;
      _$jscoverage["hmac-sha1.coffee"][47]++;
      sig = [method.toUpperCase(), utils.special_encode(req_url), _clean_request_body(params, parsed_url.query)];
      _$jscoverage["hmac-sha1.coffee"][53]++;
      return this.sign_string(sig.join('&'), consumer_secret, token);
    };

    HMAC_SHA1.prototype.build_signature = function(req, body, consumer_secret, token) {
      var encrypted, hapiRawReq, hitUrl, originalUrl, parsedUrl, protocol;
      _$jscoverage["hmac-sha1.coffee"][56]++;
      hapiRawReq = req.raw && req.raw.req;
      _$jscoverage["hmac-sha1.coffee"][57]++;
      if (hapiRawReq) {
        _$jscoverage["hmac-sha1.coffee"][58]++;
        req = hapiRawReq;
      }
      _$jscoverage["hmac-sha1.coffee"][60]++;
      originalUrl = req.originalUrl || req.url;
      _$jscoverage["hmac-sha1.coffee"][61]++;
      protocol = req.headers['x-forwarded-proto'] || req.protocol;
      _$jscoverage["hmac-sha1.coffee"][64]++;
      if (body.tool_consumer_info_product_family_code === 'canvas') {
        _$jscoverage["hmac-sha1.coffee"][65]++;
        originalUrl = url.parse(originalUrl).pathname;
      }
      _$jscoverage["hmac-sha1.coffee"][67]++;
      if (protocol === void 0) {
        _$jscoverage["hmac-sha1.coffee"][68]++;
        encrypted = req.connection.encrypted;
        _$jscoverage["hmac-sha1.coffee"][69]++;
        protocol = (encrypted && 'https') || 'http';
      }
      _$jscoverage["hmac-sha1.coffee"][71]++;
      parsedUrl = url.parse(originalUrl, true);
      _$jscoverage["hmac-sha1.coffee"][72]++;
      hitUrl = protocol + '://' + req.headers.host + parsedUrl.pathname;
      _$jscoverage["hmac-sha1.coffee"][74]++;
      return this.build_signature_raw(hitUrl, parsedUrl, req.method, body, consumer_secret, token);
    };

    HMAC_SHA1.prototype.sign_string = function(str, key, token) {
      _$jscoverage["hmac-sha1.coffee"][77]++;
      key = key + "&";
      _$jscoverage["hmac-sha1.coffee"][78]++;
      if (token) {
        key += token;
      }
      _$jscoverage["hmac-sha1.coffee"][80]++;
      return crypto.createHmac('sha1', key).update(str).digest('base64');
    };

    return HMAC_SHA1;

  })();

  _$jscoverage["hmac-sha1.coffee"][82]++;

  exports = module.exports = HMAC_SHA1;

}).call(this);
