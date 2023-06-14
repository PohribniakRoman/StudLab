import {
  __commonJS,
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index = pair.indexOf("=");
        if (index < 0) {
          continue;
        }
        var key = pair.substring(0, index).trim();
        if (void 0 == obj[key]) {
          var val = pair.substring(index + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/universal-cookie/es6/Cookies.js
var cookie2 = __toESM(require_cookie());

// node_modules/universal-cookie/es6/utils.js
var cookie = __toESM(require_cookie());
function hasDocumentCookie() {
  return typeof document === "object" && typeof document.cookie === "string";
}
function parseCookies(cookies, options) {
  if (typeof cookies === "string") {
    return cookie.parse(cookies, options);
  } else if (typeof cookies === "object" && cookies !== null) {
    return cookies;
  } else {
    return {};
  }
}
function isParsingCookie(value, doNotParse) {
  if (typeof doNotParse === "undefined") {
    doNotParse = !value || value[0] !== "{" && value[0] !== "[" && value[0] !== '"';
  }
  return !doNotParse;
}
function readCookie(value, options) {
  if (options === void 0) {
    options = {};
  }
  var cleanValue = cleanupCookieValue(value);
  if (isParsingCookie(cleanValue, options.doNotParse)) {
    try {
      return JSON.parse(cleanValue);
    } catch (e) {
    }
  }
  return value;
}
function cleanupCookieValue(value) {
  if (value && value[0] === "j" && value[1] === ":") {
    return value.substr(2);
  }
  return value;
}

// node_modules/universal-cookie/es6/Cookies.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var Cookies = (
  /** @class */
  function() {
    function Cookies2(cookies, options) {
      var _this = this;
      this.changeListeners = [];
      this.HAS_DOCUMENT_COOKIE = false;
      this.cookies = parseCookies(cookies, options);
      new Promise(function() {
        _this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();
      }).catch(function() {
      });
    }
    Cookies2.prototype._updateBrowserValues = function(parseOptions) {
      if (!this.HAS_DOCUMENT_COOKIE) {
        return;
      }
      this.cookies = cookie2.parse(document.cookie, parseOptions);
    };
    Cookies2.prototype._emitChange = function(params) {
      for (var i = 0; i < this.changeListeners.length; ++i) {
        this.changeListeners[i](params);
      }
    };
    Cookies2.prototype.get = function(name, options, parseOptions) {
      if (options === void 0) {
        options = {};
      }
      this._updateBrowserValues(parseOptions);
      return readCookie(this.cookies[name], options);
    };
    Cookies2.prototype.getAll = function(options, parseOptions) {
      if (options === void 0) {
        options = {};
      }
      this._updateBrowserValues(parseOptions);
      var result = {};
      for (var name_1 in this.cookies) {
        result[name_1] = readCookie(this.cookies[name_1], options);
      }
      return result;
    };
    Cookies2.prototype.set = function(name, value, options) {
      var _a;
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      this.cookies = __assign(__assign({}, this.cookies), (_a = {}, _a[name] = value, _a));
      if (this.HAS_DOCUMENT_COOKIE) {
        document.cookie = cookie2.serialize(name, value, options);
      }
      this._emitChange({ name, value, options });
    };
    Cookies2.prototype.remove = function(name, options) {
      var finalOptions = options = __assign(__assign({}, options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
      this.cookies = __assign({}, this.cookies);
      delete this.cookies[name];
      if (this.HAS_DOCUMENT_COOKIE) {
        document.cookie = cookie2.serialize(name, "", finalOptions);
      }
      this._emitChange({ name, value: void 0, options });
    };
    Cookies2.prototype.addChangeListener = function(callback) {
      this.changeListeners.push(callback);
    };
    Cookies2.prototype.removeChangeListener = function(callback) {
      var idx = this.changeListeners.indexOf(callback);
      if (idx >= 0) {
        this.changeListeners.splice(idx, 1);
      }
    };
    return Cookies2;
  }()
);
var Cookies_default = Cookies;

// node_modules/universal-cookie/es6/index.js
var es6_default = Cookies_default;
export {
  es6_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=universal-cookie.js.map
