if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["content.coffee"]) {
    _$jscoverage["content.coffee"] = [];
    _$jscoverage["content.coffee"][1] = 0;
    _$jscoverage["content.coffee"][3] = 0;
    _$jscoverage["content.coffee"][5] = 0;
    _$jscoverage["content.coffee"][6] = 0;
    _$jscoverage["content.coffee"][7] = 0;
    _$jscoverage["content.coffee"][8] = 0;
    _$jscoverage["content.coffee"][9] = 0;
    _$jscoverage["content.coffee"][10] = 0;
    _$jscoverage["content.coffee"][13] = 0;
    _$jscoverage["content.coffee"][14] = 0;
    _$jscoverage["content.coffee"][15] = 0;
    _$jscoverage["content.coffee"][16] = 0;
    _$jscoverage["content.coffee"][18] = 0;
    _$jscoverage["content.coffee"][19] = 0;
    _$jscoverage["content.coffee"][20] = 0;
    _$jscoverage["content.coffee"][21] = 0;
    _$jscoverage["content.coffee"][25] = 0;
    _$jscoverage["content.coffee"][26] = 0;
    _$jscoverage["content.coffee"][27] = 0;
    _$jscoverage["content.coffee"][29] = 0;
    _$jscoverage["content.coffee"][30] = 0;
    _$jscoverage["content.coffee"][34] = 0;
    _$jscoverage["content.coffee"][38] = 0;
    _$jscoverage["content.coffee"][42] = 0;
    _$jscoverage["content.coffee"][44] = 0;
    _$jscoverage["content.coffee"][45] = 0;
    _$jscoverage["content.coffee"][47] = 0;
    _$jscoverage["content.coffee"][48] = 0;
    _$jscoverage["content.coffee"][49] = 0;
    _$jscoverage["content.coffee"][51] = 0;
    _$jscoverage["content.coffee"][53] = 0;
    _$jscoverage["content.coffee"][57] = 0;
    _$jscoverage["content.coffee"][59] = 0;
    _$jscoverage["content.coffee"][60] = 0;
    _$jscoverage["content.coffee"][62] = 0;
    _$jscoverage["content.coffee"][63] = 0;
    _$jscoverage["content.coffee"][65] = 0;
    _$jscoverage["content.coffee"][66] = 0;
    _$jscoverage["content.coffee"][67] = 0;
    _$jscoverage["content.coffee"][69] = 0;
    _$jscoverage["content.coffee"][73] = 0;
    _$jscoverage["content.coffee"][75] = 0;
    _$jscoverage["content.coffee"][76] = 0;
    _$jscoverage["content.coffee"][78] = 0;
    _$jscoverage["content.coffee"][79] = 0;
    _$jscoverage["content.coffee"][81] = 0;
    _$jscoverage["content.coffee"][82] = 0;
    _$jscoverage["content.coffee"][83] = 0;
    _$jscoverage["content.coffee"][85] = 0;
    _$jscoverage["content.coffee"][89] = 0;
    _$jscoverage["content.coffee"][91] = 0;
    _$jscoverage["content.coffee"][92] = 0;
    _$jscoverage["content.coffee"][94] = 0;
    _$jscoverage["content.coffee"][95] = 0;
    _$jscoverage["content.coffee"][97] = 0;
    _$jscoverage["content.coffee"][98] = 0;
    _$jscoverage["content.coffee"][100] = 0;
    _$jscoverage["content.coffee"][104] = 0;
    _$jscoverage["content.coffee"][106] = 0;
    _$jscoverage["content.coffee"][107] = 0;
    _$jscoverage["content.coffee"][109] = 0;
    _$jscoverage["content.coffee"][110] = 0;
    _$jscoverage["content.coffee"][112] = 0;
    _$jscoverage["content.coffee"][114] = 0;
    _$jscoverage["content.coffee"][118] = 0;
    _$jscoverage["content.coffee"][120] = 0;
    _$jscoverage["content.coffee"][121] = 0;
    _$jscoverage["content.coffee"][123] = 0;
    _$jscoverage["content.coffee"][124] = 0;
    _$jscoverage["content.coffee"][126] = 0;
    _$jscoverage["content.coffee"][127] = 0;
    _$jscoverage["content.coffee"][128] = 0;
    _$jscoverage["content.coffee"][130] = 0;
    _$jscoverage["content.coffee"][134] = 0;
    _$jscoverage["content.coffee"][135] = 0;
    _$jscoverage["content.coffee"][139] = 0;
    _$jscoverage["content.coffee"][141] = 0;
    _$jscoverage["content.coffee"][142] = 0;
    _$jscoverage["content.coffee"][144] = 0;
    _$jscoverage["content.coffee"][149] = 0;
    _$jscoverage["content.coffee"][150] = 0;
}

_$jscoverage["content.coffee"].source = ["url    = require 'url'", "", "errors = require '../errors'", "", "FILE_RETURN_TYPE           = 'file'", "IFRAME_RETURN_TYPE         = 'iframe'", "IMAGE_URL_RETURN_TYPE      = 'image_url'", "LTI_LAUNCH_URL_RETURN_TYPE = 'lti_launch_url'", "OEMBED_RETURN_TYPE         = 'oembed'", "URL_RETURN_TYPE            = 'url'", "", "", "parse_url = (raw_url) ->", "  return_url = url.parse(raw_url, true)", "  delete return_url.path", "  return_url", "", "optional_url_property_setter = (return_url) ->", "  return (property, value) ->", "    if typeof value isnt 'undefined'", "      return_url.query[property] = value", "", "", "", "class ContentExtension", "  constructor: (params) ->", "    @return_types    = params.ext_content_return_types.split(',')", "    # According to the spec if the ext_content_return_url is not present launch_presentation_return_url is the fallback.", "    @return_url      = params.ext_content_return_url or params.launch_presentation_return_url", "    @file_extensions = (params.ext_content_file_extensions and params.ext_content_file_extensions.split(',')) or []", "", "", "  has_return_type: (return_type) ->", "    @return_types.indexOf(return_type) != -1", "", "", "  has_file_extension: (extension) ->", "    @file_extensions.indexOf(extension) != -1", "", "", "  send_file: (res, file_url, text, content_type) ->", "    @_validate_return_type(FILE_RETURN_TYPE)", "", "    return_url    = parse_url(@return_url, true)", "    set_if_exists = optional_url_property_setter(return_url)", "", "    return_url.query.return_type = FILE_RETURN_TYPE", "    return_url.query.url         = file_url", "    return_url.query.text        = text", "", "    set_if_exists('content_type', content_type)", "", "    exports.redirector(res, url.format(return_url))", "", "", "  send_iframe: (res, iframe_url, title, width, height) ->", "    @_validate_return_type(IFRAME_RETURN_TYPE)", "", "    return_url    = parse_url(@return_url, true)", "    set_if_exists = optional_url_property_setter(return_url)", "", "    return_url.query.return_type = IFRAME_RETURN_TYPE", "    return_url.query.url         = iframe_url", "", "    set_if_exists(\"title\", title)", "    set_if_exists(\"width\", width)", "    set_if_exists(\"height\", height)", "", "    exports.redirector(res, url.format(return_url))", "", "", "  send_image_url: (res, image_url, text, width, height) ->", "    @_validate_return_type(IMAGE_URL_RETURN_TYPE)", "", "    return_url    = parse_url(@return_url, true)", "    set_if_exists = optional_url_property_setter(return_url)", "", "    return_url.query.return_type = IMAGE_URL_RETURN_TYPE", "    return_url.query.url         = image_url", "", "    set_if_exists(\"text\", text)", "    set_if_exists(\"width\", width)", "    set_if_exists(\"height\", height)", "", "    exports.redirector(res, url.format(return_url))", "", "", "  send_lti_launch_url: (res, launch_url, title, text) ->", "    @_validate_return_type(LTI_LAUNCH_URL_RETURN_TYPE)", "", "    return_url    = parse_url(@return_url, true)", "    set_if_exists = optional_url_property_setter(return_url)", "", "    return_url.query.return_type = LTI_LAUNCH_URL_RETURN_TYPE", "    return_url.query.url         = launch_url", "", "    set_if_exists(\"title\", title)", "    set_if_exists(\"text\", text)", "", "    exports.redirector(res, url.format(return_url))", "", "", "  send_oembed: (res, oembed_url, endpoint) ->", "    @_validate_return_type(OEMBED_RETURN_TYPE)", "", "    return_url    = parse_url(@return_url, true)", "    set_if_exists = optional_url_property_setter(return_url)", "", "    return_url.query.return_type = OEMBED_RETURN_TYPE", "    return_url.query.url         = oembed_url", "", "    set_if_exists(\"endpoint\", endpoint)", "", "    exports.redirector(res, url.format(return_url))", "", "", "  send_url: (res, hyperlink, text, title, target) ->", "    @_validate_return_type(URL_RETURN_TYPE)", "", "    return_url    = parse_url(@return_url, true)", "    set_if_exists = optional_url_property_setter(return_url)", "", "    return_url.query.return_type = URL_RETURN_TYPE", "    return_url.query.url         = hyperlink", "", "    set_if_exists('text', text)", "    set_if_exists('title', title)", "    set_if_exists('target', target)", "", "    exports.redirector(res, url.format(return_url))", "", "", "  _validate_return_type: (return_type) ->", "    if @has_return_type(return_type) is false", "      throw new errors.ExtensionError('Invalid return type, valid options are ' + @return_types.join(', '))", "", "", "", "exports.init = (provider) ->", "  # The extension is defined to exist if the ext_content_return_types parameter is present.", "  if provider.body.ext_content_return_types", "    provider.ext_content = new ContentExtension(provider.body)", "  else", "    provider.ext_content = false", "", "", "# The default redirector is set to be compatible with Express and can be easily overridden by accessing the ims-lti", "# module and setting lti.Extensions.Content.redirector to a custom function.", "exports.redirector = (res, url) ->", "  res.redirect(303, url)", ""];

(function() {
  var ContentExtension, FILE_RETURN_TYPE, IFRAME_RETURN_TYPE, IMAGE_URL_RETURN_TYPE, LTI_LAUNCH_URL_RETURN_TYPE, OEMBED_RETURN_TYPE, URL_RETURN_TYPE, errors, optional_url_property_setter, parse_url, url;

  _$jscoverage["content.coffee"][1]++;

  url = require('url');

  _$jscoverage["content.coffee"][3]++;

  errors = require('../errors');

  _$jscoverage["content.coffee"][5]++;

  FILE_RETURN_TYPE = 'file';

  _$jscoverage["content.coffee"][6]++;

  IFRAME_RETURN_TYPE = 'iframe';

  _$jscoverage["content.coffee"][7]++;

  IMAGE_URL_RETURN_TYPE = 'image_url';

  _$jscoverage["content.coffee"][8]++;

  LTI_LAUNCH_URL_RETURN_TYPE = 'lti_launch_url';

  _$jscoverage["content.coffee"][9]++;

  OEMBED_RETURN_TYPE = 'oembed';

  _$jscoverage["content.coffee"][10]++;

  URL_RETURN_TYPE = 'url';

  _$jscoverage["content.coffee"][13]++;

  parse_url = function(raw_url) {
    var return_url;
    _$jscoverage["content.coffee"][14]++;
    return_url = url.parse(raw_url, true);
    _$jscoverage["content.coffee"][15]++;
    delete return_url.path;
    _$jscoverage["content.coffee"][16]++;
    return return_url;
  };

  _$jscoverage["content.coffee"][18]++;

  optional_url_property_setter = function(return_url) {
    _$jscoverage["content.coffee"][19]++;
    return function(property, value) {
      _$jscoverage["content.coffee"][20]++;
      if (typeof value !== 'undefined') {
        _$jscoverage["content.coffee"][21]++;
        return return_url.query[property] = value;
      }
    };
  };

  _$jscoverage["content.coffee"][25]++;

  ContentExtension = (function() {
    _$jscoverage["content.coffee"][26]++;

    function ContentExtension(params) {
      _$jscoverage["content.coffee"][27]++;
      this.return_types = params.ext_content_return_types.split(',');
      _$jscoverage["content.coffee"][29]++;
      this.return_url = params.ext_content_return_url || params.launch_presentation_return_url;
      _$jscoverage["content.coffee"][30]++;
      this.file_extensions = (params.ext_content_file_extensions && params.ext_content_file_extensions.split(',')) || [];
    }

    ContentExtension.prototype.has_return_type = function(return_type) {
      _$jscoverage["content.coffee"][34]++;
      return this.return_types.indexOf(return_type) !== -1;
    };

    ContentExtension.prototype.has_file_extension = function(extension) {
      _$jscoverage["content.coffee"][38]++;
      return this.file_extensions.indexOf(extension) !== -1;
    };

    ContentExtension.prototype.send_file = function(res, file_url, text, content_type) {
      var return_url, set_if_exists;
      _$jscoverage["content.coffee"][42]++;
      this._validate_return_type(FILE_RETURN_TYPE);
      _$jscoverage["content.coffee"][44]++;
      return_url = parse_url(this.return_url, true);
      _$jscoverage["content.coffee"][45]++;
      set_if_exists = optional_url_property_setter(return_url);
      _$jscoverage["content.coffee"][47]++;
      return_url.query.return_type = FILE_RETURN_TYPE;
      _$jscoverage["content.coffee"][48]++;
      return_url.query.url = file_url;
      _$jscoverage["content.coffee"][49]++;
      return_url.query.text = text;
      _$jscoverage["content.coffee"][51]++;
      set_if_exists('content_type', content_type);
      _$jscoverage["content.coffee"][53]++;
      return exports.redirector(res, url.format(return_url));
    };

    ContentExtension.prototype.send_iframe = function(res, iframe_url, title, width, height) {
      var return_url, set_if_exists;
      _$jscoverage["content.coffee"][57]++;
      this._validate_return_type(IFRAME_RETURN_TYPE);
      _$jscoverage["content.coffee"][59]++;
      return_url = parse_url(this.return_url, true);
      _$jscoverage["content.coffee"][60]++;
      set_if_exists = optional_url_property_setter(return_url);
      _$jscoverage["content.coffee"][62]++;
      return_url.query.return_type = IFRAME_RETURN_TYPE;
      _$jscoverage["content.coffee"][63]++;
      return_url.query.url = iframe_url;
      _$jscoverage["content.coffee"][65]++;
      set_if_exists("title", title);
      _$jscoverage["content.coffee"][66]++;
      set_if_exists("width", width);
      _$jscoverage["content.coffee"][67]++;
      set_if_exists("height", height);
      _$jscoverage["content.coffee"][69]++;
      return exports.redirector(res, url.format(return_url));
    };

    ContentExtension.prototype.send_image_url = function(res, image_url, text, width, height) {
      var return_url, set_if_exists;
      _$jscoverage["content.coffee"][73]++;
      this._validate_return_type(IMAGE_URL_RETURN_TYPE);
      _$jscoverage["content.coffee"][75]++;
      return_url = parse_url(this.return_url, true);
      _$jscoverage["content.coffee"][76]++;
      set_if_exists = optional_url_property_setter(return_url);
      _$jscoverage["content.coffee"][78]++;
      return_url.query.return_type = IMAGE_URL_RETURN_TYPE;
      _$jscoverage["content.coffee"][79]++;
      return_url.query.url = image_url;
      _$jscoverage["content.coffee"][81]++;
      set_if_exists("text", text);
      _$jscoverage["content.coffee"][82]++;
      set_if_exists("width", width);
      _$jscoverage["content.coffee"][83]++;
      set_if_exists("height", height);
      _$jscoverage["content.coffee"][85]++;
      return exports.redirector(res, url.format(return_url));
    };

    ContentExtension.prototype.send_lti_launch_url = function(res, launch_url, title, text) {
      var return_url, set_if_exists;
      _$jscoverage["content.coffee"][89]++;
      this._validate_return_type(LTI_LAUNCH_URL_RETURN_TYPE);
      _$jscoverage["content.coffee"][91]++;
      return_url = parse_url(this.return_url, true);
      _$jscoverage["content.coffee"][92]++;
      set_if_exists = optional_url_property_setter(return_url);
      _$jscoverage["content.coffee"][94]++;
      return_url.query.return_type = LTI_LAUNCH_URL_RETURN_TYPE;
      _$jscoverage["content.coffee"][95]++;
      return_url.query.url = launch_url;
      _$jscoverage["content.coffee"][97]++;
      set_if_exists("title", title);
      _$jscoverage["content.coffee"][98]++;
      set_if_exists("text", text);
      _$jscoverage["content.coffee"][100]++;
      return exports.redirector(res, url.format(return_url));
    };

    ContentExtension.prototype.send_oembed = function(res, oembed_url, endpoint) {
      var return_url, set_if_exists;
      _$jscoverage["content.coffee"][104]++;
      this._validate_return_type(OEMBED_RETURN_TYPE);
      _$jscoverage["content.coffee"][106]++;
      return_url = parse_url(this.return_url, true);
      _$jscoverage["content.coffee"][107]++;
      set_if_exists = optional_url_property_setter(return_url);
      _$jscoverage["content.coffee"][109]++;
      return_url.query.return_type = OEMBED_RETURN_TYPE;
      _$jscoverage["content.coffee"][110]++;
      return_url.query.url = oembed_url;
      _$jscoverage["content.coffee"][112]++;
      set_if_exists("endpoint", endpoint);
      _$jscoverage["content.coffee"][114]++;
      return exports.redirector(res, url.format(return_url));
    };

    ContentExtension.prototype.send_url = function(res, hyperlink, text, title, target) {
      var return_url, set_if_exists;
      _$jscoverage["content.coffee"][118]++;
      this._validate_return_type(URL_RETURN_TYPE);
      _$jscoverage["content.coffee"][120]++;
      return_url = parse_url(this.return_url, true);
      _$jscoverage["content.coffee"][121]++;
      set_if_exists = optional_url_property_setter(return_url);
      _$jscoverage["content.coffee"][123]++;
      return_url.query.return_type = URL_RETURN_TYPE;
      _$jscoverage["content.coffee"][124]++;
      return_url.query.url = hyperlink;
      _$jscoverage["content.coffee"][126]++;
      set_if_exists('text', text);
      _$jscoverage["content.coffee"][127]++;
      set_if_exists('title', title);
      _$jscoverage["content.coffee"][128]++;
      set_if_exists('target', target);
      _$jscoverage["content.coffee"][130]++;
      return exports.redirector(res, url.format(return_url));
    };

    ContentExtension.prototype._validate_return_type = function(return_type) {
      _$jscoverage["content.coffee"][134]++;
      if (this.has_return_type(return_type) === false) {
        _$jscoverage["content.coffee"][135]++;
        throw new errors.ExtensionError('Invalid return type, valid options are ' + this.return_types.join(', '));
      }
    };

    return ContentExtension;

  })();

  _$jscoverage["content.coffee"][139]++;

  exports.init = function(provider) {
    _$jscoverage["content.coffee"][141]++;
    if (provider.body.ext_content_return_types) {
      _$jscoverage["content.coffee"][142]++;
      return provider.ext_content = new ContentExtension(provider.body);
    } else {
      _$jscoverage["content.coffee"][144]++;
      return provider.ext_content = false;
    }
  };

  _$jscoverage["content.coffee"][149]++;

  exports.redirector = function(res, url) {
    _$jscoverage["content.coffee"][150]++;
    return res.redirect(303, url);
  };

}).call(this);
