if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["provider.coffee"]) {
    _$jscoverage["provider.coffee"] = [];
    _$jscoverage["provider.coffee"][1] = 0;
    _$jscoverage["provider.coffee"][2] = 0;
    _$jscoverage["provider.coffee"][3] = 0;
    _$jscoverage["provider.coffee"][4] = 0;
    _$jscoverage["provider.coffee"][8] = 0;
    _$jscoverage["provider.coffee"][9] = 0;
    _$jscoverage["provider.coffee"][11] = 0;
    _$jscoverage["provider.coffee"][12] = 0;
    _$jscoverage["provider.coffee"][14] = 0;
    _$jscoverage["provider.coffee"][15] = 0;
    _$jscoverage["provider.coffee"][17] = 0;
    _$jscoverage["provider.coffee"][18] = 0;
    _$jscoverage["provider.coffee"][20] = 0;
    _$jscoverage["provider.coffee"][21] = 0;
    _$jscoverage["provider.coffee"][23] = 0;
    _$jscoverage["provider.coffee"][24] = 0;
    _$jscoverage["provider.coffee"][25] = 0;
    _$jscoverage["provider.coffee"][26] = 0;
    _$jscoverage["provider.coffee"][27] = 0;
    _$jscoverage["provider.coffee"][35] = 0;
    _$jscoverage["provider.coffee"][36] = 0;
    _$jscoverage["provider.coffee"][37] = 0;
    _$jscoverage["provider.coffee"][39] = 0;
    _$jscoverage["provider.coffee"][40] = 0;
    _$jscoverage["provider.coffee"][42] = 0;
    _$jscoverage["provider.coffee"][44] = 0;
    _$jscoverage["provider.coffee"][45] = 0;
    _$jscoverage["provider.coffee"][47] = 0;
    _$jscoverage["provider.coffee"][54] = 0;
    _$jscoverage["provider.coffee"][55] = 0;
    _$jscoverage["provider.coffee"][57] = 0;
    _$jscoverage["provider.coffee"][59] = 0;
    _$jscoverage["provider.coffee"][60] = 0;
    _$jscoverage["provider.coffee"][61] = 0;
    _$jscoverage["provider.coffee"][63] = 0;
    _$jscoverage["provider.coffee"][69] = 0;
    _$jscoverage["provider.coffee"][70] = 0;
    _$jscoverage["provider.coffee"][71] = 0;
    _$jscoverage["provider.coffee"][78] = 0;
    _$jscoverage["provider.coffee"][79] = 0;
    _$jscoverage["provider.coffee"][80] = 0;
    _$jscoverage["provider.coffee"][81] = 0;
    _$jscoverage["provider.coffee"][82] = 0;
    _$jscoverage["provider.coffee"][83] = 0;
    _$jscoverage["provider.coffee"][85] = 0;
    _$jscoverage["provider.coffee"][93] = 0;
    _$jscoverage["provider.coffee"][95] = 0;
    _$jscoverage["provider.coffee"][96] = 0;
    _$jscoverage["provider.coffee"][97] = 0;
    _$jscoverage["provider.coffee"][99] = 0;
    _$jscoverage["provider.coffee"][101] = 0;
    _$jscoverage["provider.coffee"][102] = 0;
    _$jscoverage["provider.coffee"][103] = 0;
    _$jscoverage["provider.coffee"][104] = 0;
    _$jscoverage["provider.coffee"][105] = 0;
    _$jscoverage["provider.coffee"][106] = 0;
    _$jscoverage["provider.coffee"][107] = 0;
    _$jscoverage["provider.coffee"][108] = 0;
    _$jscoverage["provider.coffee"][109] = 0;
    _$jscoverage["provider.coffee"][110] = 0;
    _$jscoverage["provider.coffee"][111] = 0;
    _$jscoverage["provider.coffee"][112] = 0;
    _$jscoverage["provider.coffee"][113] = 0;
    _$jscoverage["provider.coffee"][114] = 0;
    _$jscoverage["provider.coffee"][116] = 0;
    _$jscoverage["provider.coffee"][119] = 0;
    _$jscoverage["provider.coffee"][120] = 0;
    _$jscoverage["provider.coffee"][122] = 0;
    _$jscoverage["provider.coffee"][125] = 0;
    _$jscoverage["provider.coffee"][126] = 0;
    _$jscoverage["provider.coffee"][127] = 0;
    _$jscoverage["provider.coffee"][130] = 0;
    _$jscoverage["provider.coffee"][140] = 0;
    _$jscoverage["provider.coffee"][141] = 0;
    _$jscoverage["provider.coffee"][145] = 0;
}

_$jscoverage["provider.coffee"].source = ["HMAC_SHA1         = require './hmac-sha1'", "MemoryNonceStore  = require './memory-nonce-store'", "errors            = require './errors'", "extensions        = require './extensions'", "", "", "", "class Provider", "  constructor: (consumer_key, consumer_secret, nonceStore, signature_method=(new HMAC_SHA1()) ) ->", "", "    if typeof consumer_key is 'undefined' or consumer_key is null", "      throw new errors.ConsumerError 'Must specify consumer_key'", "", "    if typeof consumer_secret is 'undefined' or consumer_secret is null", "      throw new errors.ConsumerError 'Must specify consumer_secret'", "", "    if not nonceStore", "      nonceStore = new MemoryNonceStore()", "", "    if not nonceStore.isNonceStore?()", "      throw new errors.ParameterError 'Fourth argument must be a nonceStore object'", "", "    @consumer_key     = consumer_key", "    @consumer_secret  = consumer_secret", "    @signer           = signature_method", "    @nonceStore       = nonceStore", "    @body             = {}", "", "", "  # Verify parameter and OAuth signature by passing the request object", "  # Returns true/false if is valid", "  #", "  # Sets up request variables for easier access down the line", "  valid_request: (req, body, callback) =>", "    if not callback", "      callback = body", "      body = undefined", "", "    body = body or req.body or req.payload", "    callback = callback or () ->", "", "    @parse_request(req, body)", "", "    if not @_valid_parameters(body)", "      return callback(new errors.ParameterError('Invalid LTI parameters'), false)", "", "    @_valid_oauth req, body, callback", "", "", "  # Helper to validate basic LTI parameters", "  #", "  # Returns true/false if is valid LTI request", "  _valid_parameters: (body) ->", "    if not body", "      return false", "    ", "    correct_message_type = body.lti_message_type is 'basic-lti-launch-request'", "", "    correct_version      = require('./ims-lti').supported_versions.indexOf(body.lti_version) isnt -1", "    has_resource_link_id = body.resource_link_id?", "    correct_message_type and correct_version and has_resource_link_id", "", "    omits_content_item_params = ", "      not body.resource_link_id? and", "      not body.resource_link_title? and ", "      not body.resource_link_description? and ", "      not body.launch_presentation_return_url? and", "      not body.lis_result_sourcedid?", "    correct_version and", "      ( body.lti_message_type is 'basic-lti-launch-request' and has_resource_link_id ) or", "      ( body.lti_message_type is 'ContentItemSelectionRequest' and omits_content_item_params )", "", "", "  # Helper to validate the OAuth information in the request", "  #", "  # Returns true/false if is valid OAuth signatue and nonce", "  _valid_oauth: (req, body, callback) ->", "    generated = @signer.build_signature req, body, @consumer_secret", "    valid_signature = generated is body.oauth_signature", "    return callback new errors.SignatureError('Invalid Signature'), false if not valid_signature", "    @nonceStore.isNew body.oauth_nonce, body.oauth_timestamp, (err, valid) ->", "      if not valid", "        callback new errors.NonceError('Expired nonce'), false", "      else", "        callback null, true", "", "", "  # Stores the request's properties into the @body accessor", "  #  Strips 'oauth_' parameters for saftey", "  #", "  # Does not return anything", "  parse_request: (req, body) =>", "    body = body or req.body or req.payload", "", "    for key, val of body", "      continue if key.match(/^oauth_/)", "      @body[key] = val", "", "    @body.roles = @body.roles.split ',' if typeof @body.roles is 'string'", "", "    @admin = @has_role('Administrator')", "    @alumni = @has_role('Alumni')", "    @content_developer = @has_role('ContentDeveloper')", "    @guest = @has_role('Guest')", "    @instructor = @has_role('Instructor') or @has_role('Faculty') or @has_role('Staff')", "    @manager = @has_role('Manager')", "    @member = @has_role('Member')", "    @mentor = @has_role('Mentor')", "    @none = @has_role('None')", "    @observer = @has_role('Observer')", "    @other = @has_role('Other')", "    @prospective_student = @has_role('ProspectiveStudent')", "    @student = @has_role('Learner') or @has_role('Student')", "    @ta = @has_role('TeachingAssistant')", "", "    @launch_request = @body.lti_message_type is 'basic-lti-launch-request'", "", "    # user", "    @username = @body.lis_person_name_given or @body.lis_person_name_family or @body.lis_person_name_full or ''", "    @userId   = @body.user_id", "", "    @mentor_user_ids = (decodeURIComponent(id) for id in @body.role_scope_mentor.split ',') if typeof @body.role_scope_mentor is 'string'", "", "    # Context information", "    @context_id     = @body.context_id", "    @context_label  = @body.context_label", "    @context_title  = @body.context_title", "", "    # Load up the extensions!", "    extension.init(@) for extension_name, extension of extensions", "", "", "  # has_role Helper", "  has_role: (role) ->", "    # There's 3 different types of roles: system, institution, and context. Each one has their own unique identifier", "    # string within the urn prefix. This regular expression can verify the prefix is there at all, and if it is, ensure", "    # that it matches one of the three different ways that it can be formatted. Additionally, context roles can have a", "    # suffix that futher describes what the role may be (such as an instructor that is a lecturer). Those details are", "    # probably a bit too specific for most cases, so we can just verify that they are optionally there.", "    regex = new RegExp \"^(urn:lti:(sys|inst)?role:ims/lis/)?#{role}(/.+)?$\", 'i'", "    @body.roles && @body.roles.some (r) -> regex.test(r)", "", "", "", "exports = module.exports = Provider", ""];

(function() {
  var HMAC_SHA1, MemoryNonceStore, Provider, errors, exports, extensions,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["provider.coffee"][1]++;

  HMAC_SHA1 = require('./hmac-sha1');

  _$jscoverage["provider.coffee"][2]++;

  MemoryNonceStore = require('./memory-nonce-store');

  _$jscoverage["provider.coffee"][3]++;

  errors = require('./errors');

  _$jscoverage["provider.coffee"][4]++;

  extensions = require('./extensions');

  _$jscoverage["provider.coffee"][8]++;

  Provider = (function() {
    _$jscoverage["provider.coffee"][9]++;

    function Provider(consumer_key, consumer_secret, nonceStore, signature_method) {
      if (signature_method == null) {
        signature_method = new HMAC_SHA1();
      }
      this.parse_request = bind(this.parse_request, this);
      this.valid_request = bind(this.valid_request, this);
      _$jscoverage["provider.coffee"][11]++;
      if (typeof consumer_key === 'undefined' || consumer_key === null) {
        _$jscoverage["provider.coffee"][12]++;
        throw new errors.ConsumerError('Must specify consumer_key');
      }
      _$jscoverage["provider.coffee"][14]++;
      if (typeof consumer_secret === 'undefined' || consumer_secret === null) {
        _$jscoverage["provider.coffee"][15]++;
        throw new errors.ConsumerError('Must specify consumer_secret');
      }
      _$jscoverage["provider.coffee"][17]++;
      if (!nonceStore) {
        _$jscoverage["provider.coffee"][18]++;
        nonceStore = new MemoryNonceStore();
      }
      _$jscoverage["provider.coffee"][20]++;
      if (!(typeof nonceStore.isNonceStore === "function" ? nonceStore.isNonceStore() : void 0)) {
        _$jscoverage["provider.coffee"][21]++;
        throw new errors.ParameterError('Fourth argument must be a nonceStore object');
      }
      _$jscoverage["provider.coffee"][23]++;
      this.consumer_key = consumer_key;
      _$jscoverage["provider.coffee"][24]++;
      this.consumer_secret = consumer_secret;
      _$jscoverage["provider.coffee"][25]++;
      this.signer = signature_method;
      _$jscoverage["provider.coffee"][26]++;
      this.nonceStore = nonceStore;
      _$jscoverage["provider.coffee"][27]++;
      this.body = {};
    }

    Provider.prototype.valid_request = function(req, body, callback) {
      _$jscoverage["provider.coffee"][35]++;
      if (!callback) {
        _$jscoverage["provider.coffee"][36]++;
        callback = body;
        _$jscoverage["provider.coffee"][37]++;
        body = void 0;
      }
      _$jscoverage["provider.coffee"][39]++;
      body = body || req.body || req.payload;
      _$jscoverage["provider.coffee"][40]++;
      callback = callback || function() {};
      _$jscoverage["provider.coffee"][42]++;
      this.parse_request(req, body);
      _$jscoverage["provider.coffee"][44]++;
      if (!this._valid_parameters(body)) {
        _$jscoverage["provider.coffee"][45]++;
        return callback(new errors.ParameterError('Invalid LTI parameters'), false);
      }
      _$jscoverage["provider.coffee"][47]++;
      return this._valid_oauth(req, body, callback);
    };

    Provider.prototype._valid_parameters = function(body) {
      var correct_message_type, correct_version, has_resource_link_id, omits_content_item_params;
      _$jscoverage["provider.coffee"][54]++;
      if (!body) {
        _$jscoverage["provider.coffee"][55]++;
        return false;
      }
      _$jscoverage["provider.coffee"][57]++;
      correct_message_type = body.lti_message_type === 'basic-lti-launch-request';
      _$jscoverage["provider.coffee"][59]++;
      correct_version = require('./ims-lti').supported_versions.indexOf(body.lti_version) !== -1;
      _$jscoverage["provider.coffee"][60]++;
      has_resource_link_id = body.resource_link_id != null;
      _$jscoverage["provider.coffee"][61]++;
      correct_message_type && correct_version && has_resource_link_id;
      _$jscoverage["provider.coffee"][63]++;
      omits_content_item_params = (body.resource_link_id == null) && (body.resource_link_title == null) && (body.resource_link_description == null) && (body.launch_presentation_return_url == null) && (body.lis_result_sourcedid == null);
      _$jscoverage["provider.coffee"][69]++;
      return correct_version && (_$jscoverage["provider.coffee"][70]++, body.lti_message_type === 'basic-lti-launch-request' && has_resource_link_id) || (_$jscoverage["provider.coffee"][71]++, body.lti_message_type === 'ContentItemSelectionRequest' && omits_content_item_params);
    };

    Provider.prototype._valid_oauth = function(req, body, callback) {
      var generated, valid_signature;
      _$jscoverage["provider.coffee"][78]++;
      generated = this.signer.build_signature(req, body, this.consumer_secret);
      _$jscoverage["provider.coffee"][79]++;
      valid_signature = generated === body.oauth_signature;
      _$jscoverage["provider.coffee"][80]++;
      if (!valid_signature) {
        return callback(new errors.SignatureError('Invalid Signature'), false);
      }
      _$jscoverage["provider.coffee"][81]++;
      return this.nonceStore.isNew(body.oauth_nonce, body.oauth_timestamp, function(err, valid) {
        _$jscoverage["provider.coffee"][82]++;
        if (!valid) {
          _$jscoverage["provider.coffee"][83]++;
          return callback(new errors.NonceError('Expired nonce'), false);
        } else {
          _$jscoverage["provider.coffee"][85]++;
          return callback(null, true);
        }
      });
    };

    Provider.prototype.parse_request = function(req, body) {
      var extension, extension_name, id, key, results, val;
      _$jscoverage["provider.coffee"][93]++;
      body = body || req.body || req.payload;
      _$jscoverage["provider.coffee"][95]++;
      for (key in body) {
        val = body[key];
        _$jscoverage["provider.coffee"][96]++;
        if (key.match(/^oauth_/)) {
          continue;
        }
        _$jscoverage["provider.coffee"][97]++;
        this.body[key] = val;
      }
      _$jscoverage["provider.coffee"][99]++;
      if (typeof this.body.roles === 'string') {
        this.body.roles = this.body.roles.split(',');
      }
      _$jscoverage["provider.coffee"][101]++;
      this.admin = this.has_role('Administrator');
      _$jscoverage["provider.coffee"][102]++;
      this.alumni = this.has_role('Alumni');
      _$jscoverage["provider.coffee"][103]++;
      this.content_developer = this.has_role('ContentDeveloper');
      _$jscoverage["provider.coffee"][104]++;
      this.guest = this.has_role('Guest');
      _$jscoverage["provider.coffee"][105]++;
      this.instructor = this.has_role('Instructor') || this.has_role('Faculty') || this.has_role('Staff');
      _$jscoverage["provider.coffee"][106]++;
      this.manager = this.has_role('Manager');
      _$jscoverage["provider.coffee"][107]++;
      this.member = this.has_role('Member');
      _$jscoverage["provider.coffee"][108]++;
      this.mentor = this.has_role('Mentor');
      _$jscoverage["provider.coffee"][109]++;
      this.none = this.has_role('None');
      _$jscoverage["provider.coffee"][110]++;
      this.observer = this.has_role('Observer');
      _$jscoverage["provider.coffee"][111]++;
      this.other = this.has_role('Other');
      _$jscoverage["provider.coffee"][112]++;
      this.prospective_student = this.has_role('ProspectiveStudent');
      _$jscoverage["provider.coffee"][113]++;
      this.student = this.has_role('Learner') || this.has_role('Student');
      _$jscoverage["provider.coffee"][114]++;
      this.ta = this.has_role('TeachingAssistant');
      _$jscoverage["provider.coffee"][116]++;
      this.launch_request = this.body.lti_message_type === 'basic-lti-launch-request';
      _$jscoverage["provider.coffee"][119]++;
      this.username = this.body.lis_person_name_given || this.body.lis_person_name_family || this.body.lis_person_name_full || '';
      _$jscoverage["provider.coffee"][120]++;
      this.userId = this.body.user_id;
      _$jscoverage["provider.coffee"][122]++;
      if (typeof this.body.role_scope_mentor === 'string') {
        this.mentor_user_ids = (function() {
          var i, len, ref, results;
          ref = this.body.role_scope_mentor.split(',');
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            id = ref[i];
            results.push(decodeURIComponent(id));
          }
          return results;
        }).call(this);
      }
      _$jscoverage["provider.coffee"][125]++;
      this.context_id = this.body.context_id;
      _$jscoverage["provider.coffee"][126]++;
      this.context_label = this.body.context_label;
      _$jscoverage["provider.coffee"][127]++;
      this.context_title = this.body.context_title;
      _$jscoverage["provider.coffee"][130]++;
      results = [];
      for (extension_name in extensions) {
        extension = extensions[extension_name];
        results.push(extension.init(this));
      }
      return results;
    };

    Provider.prototype.has_role = function(role) {
      var regex;
      _$jscoverage["provider.coffee"][140]++;
      regex = new RegExp("^(urn:lti:(sys|inst)?role:ims/lis/)?" + role + "(/.+)?$", 'i');
      _$jscoverage["provider.coffee"][141]++;
      return this.body.roles && this.body.roles.some(function(r) {
        return regex.test(r);
      });
    };

    return Provider;

  })();

  _$jscoverage["provider.coffee"][145]++;

  exports = module.exports = Provider;

}).call(this);
