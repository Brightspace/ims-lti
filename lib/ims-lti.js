if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["ims-lti.coffee"]) {
    _$jscoverage["ims-lti.coffee"] = [];
    _$jscoverage["ims-lti.coffee"][1] = 0;
    _$jscoverage["ims-lti.coffee"][4] = 0;
}

_$jscoverage["ims-lti.coffee"].source = ["extensions = require './extensions'", "", "# Export the main object", "exports = module.exports =", "", "  # Version of the library this is", "  version: '0.0.0'", "", "  # Provider and Consumer classes", "  Provider:        require './provider'", "  Consumer:        require './consumer'", "  OutcomeService:  extensions.Outcomes.OutcomeService", "  Errors:          require './errors'", "", "  Stores:", "    RedisStore:   require './redis-nonce-store'", "    MemoryStore:  require './memory-nonce-store'", "    NonceStore:   require './nonce-store'", "", "  Extensions: extensions", "", "  # Which version of the LTI standard are accepted", "  supported_versions: [", "    'LTI-1p0'", "  ]", ""];

(function() {
  var exports, extensions;

  _$jscoverage["ims-lti.coffee"][1]++;

  extensions = require('./extensions');

  _$jscoverage["ims-lti.coffee"][4]++;

  exports = module.exports = {
    version: '0.0.0',
    Provider: require('./provider'),
    Consumer: require('./consumer'),
    OutcomeService: extensions.Outcomes.OutcomeService,
    Errors: require('./errors'),
    Stores: {
      RedisStore: require('./redis-nonce-store'),
      MemoryStore: require('./memory-nonce-store'),
      NonceStore: require('./nonce-store')
    },
    Extensions: extensions,
    supported_versions: ['LTI-1p0']
  };

}).call(this);
