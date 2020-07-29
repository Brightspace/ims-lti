if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["utils.coffee"]) {
    _$jscoverage["utils.coffee"] = [];
    _$jscoverage["utils.coffee"][7] = 0;
    _$jscoverage["utils.coffee"][8] = 0;
}

_$jscoverage["utils.coffee"].source = ["# Special encode is our encoding method that implements", "#  the encoding of characters not defaulted by encodeURI", "#", "#  Specifically ' and !", "#", "# Returns the encoded string", "exports.special_encode = (string) ->", "  encodeURIComponent(string).replace(/[!'()]/g, escape).replace(/\\*/g, '%2A')", ""];

(function() {
  _$jscoverage["utils.coffee"][7]++;

  exports.special_encode = function(string) {
    _$jscoverage["utils.coffee"][8]++;
    return encodeURIComponent(string).replace(/[!'()]/g, escape).replace(/\*/g, '%2A');
  };

}).call(this);
