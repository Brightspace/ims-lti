if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["errors.coffee"]) {
    _$jscoverage["errors.coffee"] = [];
    _$jscoverage["errors.coffee"][1] = 0;
    _$jscoverage["errors.coffee"][2] = 0;
    _$jscoverage["errors.coffee"][3] = 0;
    _$jscoverage["errors.coffee"][4] = 0;
    _$jscoverage["errors.coffee"][5] = 0;
    _$jscoverage["errors.coffee"][6] = 0;
    _$jscoverage["errors.coffee"][7] = 0;
    _$jscoverage["errors.coffee"][8] = 0;
    _$jscoverage["errors.coffee"][9] = 0;
    _$jscoverage["errors.coffee"][10] = 0;
    _$jscoverage["errors.coffee"][11] = 0;
    _$jscoverage["errors.coffee"][12] = 0;
    _$jscoverage["errors.coffee"][13] = 0;
    _$jscoverage["errors.coffee"][14] = 0;
    _$jscoverage["errors.coffee"][15] = 0;
    _$jscoverage["errors.coffee"][16] = 0;
    _$jscoverage["errors.coffee"][17] = 0;
    _$jscoverage["errors.coffee"][18] = 0;
    _$jscoverage["errors.coffee"][19] = 0;
    _$jscoverage["errors.coffee"][20] = 0;
    _$jscoverage["errors.coffee"][21] = 0;
    _$jscoverage["errors.coffee"][22] = 0;
    _$jscoverage["errors.coffee"][24] = 0;
}

_$jscoverage["errors.coffee"].source = ["class ConsumerError extends Error", "  constructor: (message) ->", "    super(message)", "class ExtensionError extends Error", "  constructor: (message) ->", "    super(message)", "class StoreError extends Error", "  constructor: (message) ->", "    super(message)", "class ParameterError extends Error", "  constructor: (message) ->", "    super(message)", "class SignatureError extends Error", "  constructor: (message) ->", "    super(message)", "class NonceError extends Error", "  constructor: (message) ->", "    super(message)", "class OutcomeResponseError extends Error", "  constructor: (message, @codeMinor) ->", "    super(message)", "    this.message = message", "", "module.exports =", "  ConsumerError: ConsumerError", "  ExtensionError: ExtensionError", "  StoreError: StoreError", "  ParameterError: ParameterError", "  SignatureError: SignatureError", "  NonceError: NonceError", "  OutcomeResponseError: OutcomeResponseError", ""];

(function() {
  var ConsumerError, ExtensionError, NonceError, OutcomeResponseError, ParameterError, SignatureError, StoreError,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  _$jscoverage["errors.coffee"][1]++;

  ConsumerError = (function(superClass) {
    extend(ConsumerError, superClass);

    _$jscoverage["errors.coffee"][2]++;

    function ConsumerError(message) {
      _$jscoverage["errors.coffee"][3]++;
      ConsumerError.__super__.constructor.call(this, message);
    }

    return ConsumerError;

  })(Error);

  _$jscoverage["errors.coffee"][4]++;

  ExtensionError = (function(superClass) {
    extend(ExtensionError, superClass);

    _$jscoverage["errors.coffee"][5]++;

    function ExtensionError(message) {
      _$jscoverage["errors.coffee"][6]++;
      ExtensionError.__super__.constructor.call(this, message);
    }

    return ExtensionError;

  })(Error);

  _$jscoverage["errors.coffee"][7]++;

  StoreError = (function(superClass) {
    extend(StoreError, superClass);

    _$jscoverage["errors.coffee"][8]++;

    function StoreError(message) {
      _$jscoverage["errors.coffee"][9]++;
      StoreError.__super__.constructor.call(this, message);
    }

    return StoreError;

  })(Error);

  _$jscoverage["errors.coffee"][10]++;

  ParameterError = (function(superClass) {
    extend(ParameterError, superClass);

    _$jscoverage["errors.coffee"][11]++;

    function ParameterError(message) {
      _$jscoverage["errors.coffee"][12]++;
      ParameterError.__super__.constructor.call(this, message);
    }

    return ParameterError;

  })(Error);

  _$jscoverage["errors.coffee"][13]++;

  SignatureError = (function(superClass) {
    extend(SignatureError, superClass);

    _$jscoverage["errors.coffee"][14]++;

    function SignatureError(message) {
      _$jscoverage["errors.coffee"][15]++;
      SignatureError.__super__.constructor.call(this, message);
    }

    return SignatureError;

  })(Error);

  _$jscoverage["errors.coffee"][16]++;

  NonceError = (function(superClass) {
    extend(NonceError, superClass);

    _$jscoverage["errors.coffee"][17]++;

    function NonceError(message) {
      _$jscoverage["errors.coffee"][18]++;
      NonceError.__super__.constructor.call(this, message);
    }

    return NonceError;

  })(Error);

  _$jscoverage["errors.coffee"][19]++;

  OutcomeResponseError = (function(superClass) {
    extend(OutcomeResponseError, superClass);

    _$jscoverage["errors.coffee"][20]++;

    function OutcomeResponseError(message, codeMinor) {
      this.codeMinor = codeMinor;
      _$jscoverage["errors.coffee"][21]++;
      OutcomeResponseError.__super__.constructor.call(this, message);
      _$jscoverage["errors.coffee"][22]++;
      this.message = message;
    }

    return OutcomeResponseError;

  })(Error);

  _$jscoverage["errors.coffee"][24]++;

  module.exports = {
    ConsumerError: ConsumerError,
    ExtensionError: ExtensionError,
    StoreError: StoreError,
    ParameterError: ParameterError,
    SignatureError: SignatureError,
    NonceError: NonceError,
    OutcomeResponseError: OutcomeResponseError
  };

}).call(this);
