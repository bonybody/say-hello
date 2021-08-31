/*! For license information please see 2.ea17d9ca.chunk.js.LICENSE.txt */
(this['webpackJsonpsay-hello'] = this['webpackJsonpsay-hello'] || []).push([
  [2],
  [
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    function (e, t, n) {
      e.exports = n(131);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(36);
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && Object(r.a)(e, t);
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n(23),
        i = n(46),
        o = n(49);
      function a(e) {
        var t = Object(i.a)();
        return function () {
          var n,
            i = Object(r.a)(e);
          if (t) {
            var a = Object(r.a)(this).constructor;
            n = Reflect.construct(i, arguments, a);
          } else n = i.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(125);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return c;
        });
      var r,
        i = n(3),
        o = n(4),
        a = n(0),
        s = n(1);
      !(function (e) {
        (e[(e.PCM = 1)] = 'PCM'),
          (e[(e.MuLaw = 2)] = 'MuLaw'),
          (e[(e.Siren = 3)] = 'Siren'),
          (e[(e.MP3 = 4)] = 'MP3'),
          (e[(e.SILKSkype = 5)] = 'SILKSkype'),
          (e[(e.OGG_OPUS = 6)] = 'OGG_OPUS'),
          (e[(e.WEBM_OPUS = 7)] = 'WEBM_OPUS'),
          (e[(e.ALaw = 8)] = 'ALaw');
      })(r || (r = {}));
      var u = (function () {
          function e() {
            Object(a.a)(this, e);
          }
          return (
            Object(s.a)(e, null, [
              {
                key: 'getDefaultInputFormat',
                value: function () {
                  return c.getDefaultInputFormat();
                },
              },
              {
                key: 'getWaveFormatPCM',
                value: function (e, t, n) {
                  return new c(e, t, n);
                },
              },
            ]),
            e
          );
        })(),
        c = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n() {
            var e,
              i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16e3,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
              s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
              u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.PCM;
            switch (
              (Object(a.a)(this, n),
              ((e = t.call(this)).setString = function (e, t, n) {
                for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r));
              }),
              u)
            ) {
              case r.PCM:
                e.formatTag = 1;
                break;
              case r.ALaw:
                e.formatTag = 6;
                break;
              case r.MuLaw:
                e.formatTag = 7;
            }
            (e.bitsPerSample = o),
              (e.samplesPerSec = i),
              (e.channels = s),
              (e.avgBytesPerSec = e.samplesPerSec * e.channels * (e.bitsPerSample / 8)),
              (e.blockAlign = e.channels * Math.max(e.bitsPerSample, 8)),
              (e.privHeader = new ArrayBuffer(44));
            var c = new DataView(e.privHeader);
            return (
              e.setString(c, 0, 'RIFF'),
              c.setUint32(4, 0, !0),
              e.setString(c, 8, 'WAVEfmt '),
              c.setUint32(16, 16, !0),
              c.setUint16(20, e.formatTag, !0),
              c.setUint16(22, e.channels, !0),
              c.setUint32(24, e.samplesPerSec, !0),
              c.setUint32(28, e.avgBytesPerSec, !0),
              c.setUint16(32, e.channels * (e.bitsPerSample / 8), !0),
              c.setUint16(34, e.bitsPerSample, !0),
              e.setString(c, 36, 'data'),
              c.setUint32(40, 0, !0),
              e
            );
          }
          return (
            Object(s.a)(
              n,
              [
                { key: 'close', value: function () {} },
                {
                  key: 'header',
                  get: function () {
                    return this.privHeader;
                  },
                },
              ],
              [
                {
                  key: 'getDefaultInputFormat',
                  value: function () {
                    return new n();
                  },
                },
                {
                  key: 'getAudioContext',
                  value: function (e) {
                    var t = window.AudioContext || window.webkitAudioContext || !1;
                    if (t)
                      return void 0 !== e && navigator.mediaDevices.getSupportedConstraints().sampleRate
                        ? new t({ sampleRate: e })
                        : new t();
                    throw new Error('Browser does not support Web Audio API (AudioContext is not available).');
                  },
                },
              ]
            ),
            n
          );
        })(u);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n(17),
        i = n(0),
        o = n(1),
        a = (function () {
          function e() {
            Object(i.a)(this, e);
          }
          return (
            Object(o.a)(e, null, [
              {
                key: 'throwIfNullOrUndefined',
                value: function (e, t) {
                  if (void 0 === e || null === e) throw new Error('throwIfNullOrUndefined:' + t);
                },
              },
              {
                key: 'throwIfNull',
                value: function (e, t) {
                  if (null === e) throw new Error('throwIfNull:' + t);
                },
              },
              {
                key: 'throwIfNullOrWhitespace',
                value: function (t, n) {
                  if ((e.throwIfNullOrUndefined(t, n), ('' + t).trim().length < 1))
                    throw new Error('throwIfNullOrWhitespace:' + n);
                },
              },
              {
                key: 'throwIfDisposed',
                value: function (e) {
                  if (e) throw new Error('the object is already disposed');
                },
              },
              {
                key: 'throwIfArrayEmptyOrWhitespace',
                value: function (t, n) {
                  if ((e.throwIfNullOrUndefined(t, n), 0 === t.length))
                    throw new Error('throwIfArrayEmptyOrWhitespace:' + n);
                  var i,
                    o = Object(r.a)(t);
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var a = i.value;
                      e.throwIfNullOrWhitespace(a, n);
                    }
                  } catch (s) {
                    o.e(s);
                  } finally {
                    o.f();
                  }
                },
              },
              {
                key: 'throwIfFileDoesNotExist',
                value: function (t, n) {
                  e.throwIfNullOrWhitespace(t, n);
                },
              },
              {
                key: 'throwIfNotUndefined',
                value: function (e, t) {
                  if (void 0 !== e) throw new Error('throwIfNotUndefined:' + t);
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      var r,
        i = n(0),
        o = n(1),
        a = n(26);
      !(function (e) {
        (e[(e.Debug = 0)] = 'Debug'),
          (e[(e.Info = 1)] = 'Info'),
          (e[(e.Warning = 2)] = 'Warning'),
          (e[(e.Error = 3)] = 'Error');
      })(r || (r = {}));
      var s = (function () {
        function e(t, n) {
          Object(i.a)(this, e),
            (this.privName = t),
            (this.privEventId = Object(a.a)()),
            (this.privEventTime = new Date().toISOString()),
            (this.privEventType = n),
            (this.privMetadata = {});
        }
        return (
          Object(o.a)(e, [
            {
              key: 'name',
              get: function () {
                return this.privName;
              },
            },
            {
              key: 'eventId',
              get: function () {
                return this.privEventId;
              },
            },
            {
              key: 'eventTime',
              get: function () {
                return this.privEventTime;
              },
            },
            {
              key: 'eventType',
              get: function () {
                return this.privEventType;
              },
            },
            {
              key: 'metadata',
              get: function () {
                return this.privMetadata;
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(130);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'OutputFormatPropertyName', function () {
        return r;
      }),
        n.d(t, 'CancellationErrorCodePropertyName', function () {
          return i;
        }),
        n.d(t, 'ServicePropertiesPropertyName', function () {
          return o;
        }),
        n.d(t, 'ForceDictationPropertyName', function () {
          return a;
        });
      var r = 'OutputFormat',
        i = 'CancellationErrorCode',
        o = 'ServiceProperties',
        a = 'ForceDictation';
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.Raw8Khz8BitMonoMULaw = 0)] = 'Raw8Khz8BitMonoMULaw'),
            (e[(e.Riff16Khz16KbpsMonoSiren = 1)] = 'Riff16Khz16KbpsMonoSiren'),
            (e[(e.Audio16Khz16KbpsMonoSiren = 2)] = 'Audio16Khz16KbpsMonoSiren'),
            (e[(e.Audio16Khz32KBitRateMonoMp3 = 3)] = 'Audio16Khz32KBitRateMonoMp3'),
            (e[(e.Audio16Khz128KBitRateMonoMp3 = 4)] = 'Audio16Khz128KBitRateMonoMp3'),
            (e[(e.Audio16Khz64KBitRateMonoMp3 = 5)] = 'Audio16Khz64KBitRateMonoMp3'),
            (e[(e.Audio24Khz48KBitRateMonoMp3 = 6)] = 'Audio24Khz48KBitRateMonoMp3'),
            (e[(e.Audio24Khz96KBitRateMonoMp3 = 7)] = 'Audio24Khz96KBitRateMonoMp3'),
            (e[(e.Audio24Khz160KBitRateMonoMp3 = 8)] = 'Audio24Khz160KBitRateMonoMp3'),
            (e[(e.Raw16Khz16BitMonoTrueSilk = 9)] = 'Raw16Khz16BitMonoTrueSilk'),
            (e[(e.Riff16Khz16BitMonoPcm = 10)] = 'Riff16Khz16BitMonoPcm'),
            (e[(e.Riff8Khz16BitMonoPcm = 11)] = 'Riff8Khz16BitMonoPcm'),
            (e[(e.Riff24Khz16BitMonoPcm = 12)] = 'Riff24Khz16BitMonoPcm'),
            (e[(e.Riff8Khz8BitMonoMULaw = 13)] = 'Riff8Khz8BitMonoMULaw'),
            (e[(e.Raw16Khz16BitMonoPcm = 14)] = 'Raw16Khz16BitMonoPcm'),
            (e[(e.Raw24Khz16BitMonoPcm = 15)] = 'Raw24Khz16BitMonoPcm'),
            (e[(e.Raw8Khz16BitMonoPcm = 16)] = 'Raw8Khz16BitMonoPcm'),
            (e[(e.Ogg16Khz16BitMonoOpus = 17)] = 'Ogg16Khz16BitMonoOpus'),
            (e[(e.Ogg24Khz16BitMonoOpus = 18)] = 'Ogg24Khz16BitMonoOpus'),
            (e[(e.Raw48Khz16BitMonoPcm = 19)] = 'Raw48Khz16BitMonoPcm'),
            (e[(e.Riff48Khz16BitMonoPcm = 20)] = 'Riff48Khz16BitMonoPcm'),
            (e[(e.Audio48Khz96KBitRateMonoMp3 = 21)] = 'Audio48Khz96KBitRateMonoMp3'),
            (e[(e.Audio48Khz192KBitRateMonoMp3 = 22)] = 'Audio48Khz192KBitRateMonoMp3'),
            (e[(e.Ogg48Khz16BitMonoOpus = 23)] = 'Ogg48Khz16BitMonoOpus'),
            (e[(e.Webm16Khz16BitMonoOpus = 24)] = 'Webm16Khz16BitMonoOpus'),
            (e[(e.Webm24Khz16BitMonoOpus = 25)] = 'Webm24Khz16BitMonoOpus'),
            (e[(e.Raw24Khz16BitMonoTrueSilk = 26)] = 'Raw24Khz16BitMonoTrueSilk'),
            (e[(e.Raw8Khz8BitMonoALaw = 27)] = 'Raw8Khz8BitMonoALaw'),
            (e[(e.Riff8Khz8BitMonoALaw = 28)] = 'Riff8Khz8BitMonoALaw');
        })(r || (r = {}));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      }),
        n.d(t, 'b', function () {
          return p;
        }),
        n.d(t, 'c', function () {
          return h;
        });
      var r = n(0),
        i = n(3),
        o = n(4),
        a = n(23),
        s = n(36);
      var u = n(46);
      function c(e, t, n) {
        return (c = Object(u.a)()
          ? Reflect.construct
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = new (Function.bind.apply(e, r))();
              return n && Object(s.a)(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function l(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (l = function (e) {
          if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
          var n;
          if ('function' !== typeof e) throw new TypeError('Super expression must either be null or a function');
          if ('undefined' !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return c(e, arguments, Object(a.a)(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            Object(s.a)(r, e)
          );
        })(e);
      }
      var f = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            var i;
            return Object(r.a)(this, n), ((i = t.call(this, e)).name = 'ArgumentNull'), (i.message = e), i;
          }
          return n;
        })(l(Error)),
        p = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            var i;
            return Object(r.a)(this, n), ((i = t.call(this, e)).name = 'InvalidOperation'), (i.message = e), i;
          }
          return n;
        })(l(Error)),
        h = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i) {
            var o;
            return Object(r.a)(this, n), ((o = t.call(this, i)).name = e + 'ObjectDisposed'), (o.message = i), o;
          }
          return n;
        })(l(Error));
    },
    ,
    ,
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return S;
      }),
        n.d(t, 'b', function () {
          return y;
        }),
        n.d(t, 'c', function () {
          return P;
        }),
        n.d(t, 'd', function () {
          return v;
        }),
        n.d(t, 'e', function () {
          return b;
        });
      var r = n(28),
        i = n(5),
        o = n.n(i),
        a = (n(40), n(24)),
        s = n(99),
        u = n(27),
        c = n(19),
        l = n(59),
        f = n.n(l),
        p = (n(143), n(33)),
        h =
          (n(100),
          function (e) {
            var t = Object(s.a)();
            return (t.displayName = e), t;
          }),
        d = h('Router-History'),
        v = h('Router'),
        y = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = { location: t.history.location }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._isMounted ? n.setState({ location: e }) : (n._pendingLocation = e);
                })),
              n
            );
          }
          Object(r.a)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: '/', url: '/', params: {}, isExact: '/' === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
              return o.a.createElement(
                v.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                o.a.createElement(d.Provider, { children: this.props.children || null, value: this.props.history })
              );
            }),
            t
          );
        })(o.a.Component);
      o.a.Component;
      o.a.Component;
      var m = {},
        g = 0;
      function b(e, t) {
        void 0 === t && (t = {}), ('string' === typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          i = n.exact,
          o = void 0 !== i && i,
          a = n.strict,
          s = void 0 !== a && a,
          u = n.sensitive,
          c = void 0 !== u && u;
        return [].concat(r).reduce(function (t, n) {
          if (!n && '' !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = '' + t.end + t.strict + t.sensitive,
                r = m[n] || (m[n] = {});
              if (r[e]) return r[e];
              var i = [],
                o = { regexp: f()(e, i, t), keys: i };
              return g < 1e4 && ((r[e] = o), g++), o;
            })(n, { end: o, strict: s, sensitive: c }),
            i = r.regexp,
            a = r.keys,
            u = i.exec(e);
          if (!u) return null;
          var l = u[0],
            p = u.slice(1),
            h = e === l;
          return o && !h
            ? null
            : {
                path: n,
                url: '/' === n && '' === l ? '/' : l,
                isExact: h,
                params: a.reduce(function (e, t, n) {
                  return (e[t.name] = p[n]), e;
                }, {}),
              };
        }, null);
      }
      var S = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return o.a.createElement(v.Consumer, null, function (t) {
              t || Object(u.a)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? b(n.pathname, e.props) : t.match,
                i = Object(c.a)({}, t, { location: n, match: r }),
                a = e.props,
                s = a.children,
                l = a.component,
                f = a.render;
              return (
                Array.isArray(s) &&
                  (function (e) {
                    return 0 === o.a.Children.count(e);
                  })(s) &&
                  (s = null),
                o.a.createElement(
                  v.Provider,
                  { value: i },
                  i.match
                    ? s
                      ? 'function' === typeof s
                        ? s(i)
                        : s
                      : l
                      ? o.a.createElement(l, i)
                      : f
                      ? f(i)
                      : null
                    : 'function' === typeof s
                    ? s(i)
                    : null
                )
              );
            });
          }),
          t
        );
      })(o.a.Component);
      function w(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function k(e, t) {
        if (!e) return t;
        var n = w(e);
        return 0 !== t.pathname.indexOf(n) ? t : Object(c.a)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function C(e) {
        return 'string' === typeof e ? e : Object(a.e)(e);
      }
      function O(e) {
        return function () {
          Object(u.a)(!1);
        };
      }
      function E() {}
      o.a.Component;
      var P = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return o.a.createElement(v.Consumer, null, function (t) {
              t || Object(u.a)(!1);
              var n,
                r,
                i = e.props.location || t.location;
              return (
                o.a.Children.forEach(e.props.children, function (e) {
                  if (null == r && o.a.isValidElement(e)) {
                    n = e;
                    var a = e.props.path || e.props.from;
                    r = a ? b(i.pathname, Object(c.a)({}, e.props, { path: a })) : t.match;
                  }
                }),
                r ? o.a.cloneElement(n, { location: i, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(o.a.Component);
      o.a.useContext;
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(45);
      function i(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = Object(r.a)(e)) || (t && e && 'number' === typeof e.length)) {
            n && (e = n);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          s = !0,
          u = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(0),
        i = function e() {
          Object(r.a)(this, e);
        };
      (i.AuthKey = 'Ocp-Apim-Subscription-Key'),
        (i.ConnectionId = 'X-ConnectionId'),
        (i.ContentType = 'Content-Type'),
        (i.CustomCommandsAppId = 'X-CommandsAppId'),
        (i.Path = 'Path'),
        (i.RequestId = 'X-RequestId'),
        (i.RequestStreamId = 'X-StreamId'),
        (i.RequestTimestamp = 'X-Timestamp');
    },
    function (e, t, n) {
      'use strict';
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      var r, i;
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return i;
        }),
        (function (e) {
          (e[(e.Success = 0)] = 'Success'), (e[(e.SynthesisEnd = 1)] = 'SynthesisEnd'), (e[(e.Error = 2)] = 'Error');
        })(r || (r = {})),
        (function (e) {
          (e[(e.Success = 0)] = 'Success'),
            (e[(e.NoMatch = 1)] = 'NoMatch'),
            (e[(e.InitialSilenceTimeout = 2)] = 'InitialSilenceTimeout'),
            (e[(e.BabbleTimeout = 3)] = 'BabbleTimeout'),
            (e[(e.Error = 4)] = 'Error'),
            (e[(e.EndOfDictation = 5)] = 'EndOfDictation'),
            (e[(e.TooManyRequests = 6)] = 'TooManyRequests');
        })(i || (i = {}));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'k', function () {
        return u;
      }),
        n.d(t, 'e', function () {
          return c;
        }),
        n.d(t, 'i', function () {
          return l;
        }),
        n.d(t, 'g', function () {
          return f;
        }),
        n.d(t, 'l', function () {
          return p;
        }),
        n.d(t, 'j', function () {
          return h;
        }),
        n.d(t, 'h', function () {
          return d;
        }),
        n.d(t, 'n', function () {
          return v;
        }),
        n.d(t, 'a', function () {
          return y;
        }),
        n.d(t, 'b', function () {
          return m;
        }),
        n.d(t, 'd', function () {
          return g;
        }),
        n.d(t, 'o', function () {
          return b;
        }),
        n.d(t, 'c', function () {
          return S;
        }),
        n.d(t, 'm', function () {
          return w;
        }),
        n.d(t, 'f', function () {
          return k;
        });
      var r = n(0),
        i = n(3),
        o = n(4),
        a = n(9),
        s = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i, o) {
            var a;
            return Object(r.a)(this, n), ((a = t.call(this, e, i)).privSignature = o), a;
          }
          return n;
        })(a.b),
        u = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPMemoryCacheHitEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        c = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPCacheMissEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        l = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPDiskCacheHitEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        f = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPCacheUpdateNeededEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        p = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPMemoryCacheStoreEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        h = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPDiskCacheStoreEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        d = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPCacheUpdatehCompleteEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        v = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n() {
            return Object(r.a)(this, n), t.call(this, 'OCSPStapleReceivedEvent', a.a.Debug, '');
          }
          return n;
        })(s),
        y = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i) {
            var o;
            return (
              Object(r.a)(this, n),
              ((o = t.call(this, 'OCSPCacheEntryExpiredEvent', a.a.Debug, e)).privExpireTime = i),
              o
            );
          }
          return n;
        })(s),
        m = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i, o) {
            var s;
            return (
              Object(r.a)(this, n),
              ((s = t.call(this, 'OCSPCacheEntryNeedsRefreshEvent', a.a.Debug, e)).privExpireTime = o),
              (s.privStartTime = i),
              s
            );
          }
          return n;
        })(s),
        g = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i, o) {
            var s;
            return (
              Object(r.a)(this, n),
              ((s = t.call(this, 'OCSPCacheHitEvent', a.a.Debug, e)).privExpireTime = o),
              (s.privExpireTimeString = new Date(o).toLocaleDateString()),
              (s.privStartTime = i),
              (s.privStartTimeString = new Date(i).toLocaleTimeString()),
              s
            );
          }
          return n;
        })(s),
        b = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i) {
            var o;
            return (
              Object(r.a)(this, n), ((o = t.call(this, 'OCSPVerificationFailedEvent', a.a.Debug, e)).privError = i), o
            );
          }
          return n;
        })(s),
        S = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i) {
            var o;
            return (
              Object(r.a)(this, n), ((o = t.call(this, 'OCSPCacheFetchErrorEvent', a.a.Debug, e)).privError = i), o
            );
          }
          return n;
        })(s),
        w = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'OCSPResponseRetrievedEvent', a.a.Debug, e);
          }
          return n;
        })(s),
        k = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n(e, i) {
            var o;
            return (
              Object(r.a)(this, n), ((o = t.call(this, 'OCSPCacheUpdateErrorEvent', a.a.Debug, e)).privError = i), o
            );
          }
          return n;
        })(s);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var r = n(0),
        i = n(1),
        o = n(49),
        a = n(3),
        s = n(4),
        u = n(13),
        c = n(25),
        l = n(18),
        f = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, i, a, s, c, f, p, h) {
            var d;
            if ((Object(r.a)(this, n), !i)) throw new u.a('path');
            if (!a) throw new u.a('requestId');
            var v = {};
            if (
              ((v[l.a.Path] = i),
              (v[l.a.RequestId] = a),
              (v[l.a.RequestTimestamp] = new Date().toISOString()),
              s && (v[l.a.ContentType] = s),
              f && (v[l.a.RequestStreamId] = f),
              p)
            )
              for (var y in p) y && (v[y] = p[y]);
            return (
              ((d = h ? t.call(this, e, c, v, h) : t.call(this, e, c, v)).privPath = i),
              (d.privRequestId = a),
              (d.privContentType = s),
              (d.privStreamId = f),
              (d.privAdditionalHeaders = p),
              Object(o.a)(d)
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'path',
                get: function () {
                  return this.privPath;
                },
              },
              {
                key: 'requestId',
                get: function () {
                  return this.privRequestId;
                },
              },
              {
                key: 'contentType',
                get: function () {
                  return this.privContentType;
                },
              },
              {
                key: 'streamId',
                get: function () {
                  return this.privStreamId;
                },
              },
              {
                key: 'additionalHeaders',
                get: function () {
                  return this.privAdditionalHeaders;
                },
              },
            ]),
            n
          );
        })(c.a);
      f.fromConnectionMessage = function (e) {
        var t = null,
          n = null,
          r = null,
          i = null,
          o = {};
        if (e.headers)
          for (var a in e.headers)
            a &&
              (a.toLowerCase() === l.a.Path.toLowerCase()
                ? (t = e.headers[a])
                : a.toLowerCase() === l.a.RequestId.toLowerCase()
                ? (n = e.headers[a])
                : a.toLowerCase() === l.a.RequestTimestamp.toLowerCase()
                ? e.headers[a]
                : a.toLowerCase() === l.a.ContentType.toLowerCase()
                ? (r = e.headers[a])
                : a.toLowerCase() === l.a.RequestStreamId.toLowerCase()
                ? (i = e.headers[a])
                : (o[a] = e.headers[a]));
        return new f(e.messageType, t, n, r, e.body, i, o, e.id);
      };
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return C;
      }),
        n.d(t, 'b', function () {
          return T;
        }),
        n.d(t, 'd', function () {
          return A;
        }),
        n.d(t, 'c', function () {
          return v;
        }),
        n.d(t, 'f', function () {
          return y;
        }),
        n.d(t, 'e', function () {
          return d;
        });
      var r = n(19);
      function i(e) {
        return '/' === e.charAt(0);
      }
      function o(e, t) {
        for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
        e.pop();
      }
      var a = function (e, t) {
        void 0 === t && (t = '');
        var n,
          r = (e && e.split('/')) || [],
          a = (t && t.split('/')) || [],
          s = e && i(e),
          u = t && i(t),
          c = s || u;
        if ((e && i(e) ? (a = r) : r.length && (a.pop(), (a = a.concat(r))), !a.length)) return '/';
        if (a.length) {
          var l = a[a.length - 1];
          n = '.' === l || '..' === l || '' === l;
        } else n = !1;
        for (var f = 0, p = a.length; p >= 0; p--) {
          var h = a[p];
          '.' === h ? o(a, p) : '..' === h ? (o(a, p), f++) : f && (o(a, p), f--);
        }
        if (!c) for (; f--; f) a.unshift('..');
        !c || '' === a[0] || (a[0] && i(a[0])) || a.unshift('');
        var d = a.join('/');
        return n && '/' !== d.substr(-1) && (d += '/'), d;
      };
      function s(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      var u = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ('object' === typeof t || 'object' === typeof n) {
            var r = s(t),
              i = s(n);
            return r !== t || i !== n
              ? e(r, i)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        },
        c = n(27);
      function l(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function f(e) {
        return '/' === e.charAt(0) ? e.substr(1) : e;
      }
      function p(e, t) {
        return (function (e, t) {
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function h(e) {
        return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function d(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          i = t || '/';
        return (
          n && '?' !== n && (i += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (i += '#' === r.charAt(0) ? r : '#' + r),
          i
        );
      }
      function v(e, t, n, i) {
        var o;
        'string' === typeof e
          ? ((o = (function (e) {
              var t = e || '/',
                n = '',
                r = '',
                i = t.indexOf('#');
              -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
              var o = t.indexOf('?');
              return (
                -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
                { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r }
              );
            })(e)).state = t)
          : (void 0 === (o = Object(r.a)({}, e)).pathname && (o.pathname = ''),
            o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : (o.search = ''),
            o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : (o.hash = ''),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (s) {
          throw s instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : s;
        }
        return (
          n && (o.key = n),
          i
            ? o.pathname
              ? '/' !== o.pathname.charAt(0) && (o.pathname = a(o.pathname, i.pathname))
              : (o.pathname = i.pathname)
            : o.pathname || (o.pathname = '/'),
          o
        );
      }
      function y(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          u(e.state, t.state)
        );
      }
      function m() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, i) {
            if (null != e) {
              var o = 'function' === typeof e ? e(t, n) : e;
              'string' === typeof o ? ('function' === typeof r ? r(o, i) : i(!0)) : i(!1 !== o);
            } else i(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var g = !('undefined' === typeof window || !window.document || !window.document.createElement);
      function b(e, t) {
        t(window.confirm(e));
      }
      var S = 'popstate',
        w = 'hashchange';
      function k() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function C(e) {
        void 0 === e && (e = {}), g || Object(c.a)(!1);
        var t = window.history,
          n = (function () {
            var e = window.navigator.userAgent;
            return (
              ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) ||
                -1 === e.indexOf('Mobile Safari') ||
                -1 !== e.indexOf('Chrome') ||
                -1 !== e.indexOf('Windows Phone')) &&
              window.history &&
              'pushState' in window.history
            );
          })(),
          i = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          o = e,
          a = o.forceRefresh,
          s = void 0 !== a && a,
          u = o.getUserConfirmation,
          f = void 0 === u ? b : u,
          y = o.keyLength,
          C = void 0 === y ? 6 : y,
          O = e.basename ? h(l(e.basename)) : '';
        function E(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            o = i.pathname + i.search + i.hash;
          return O && (o = p(o, O)), v(o, r, n);
        }
        function P() {
          return Math.random().toString(36).substr(2, C);
        }
        var x = m();
        function R(e) {
          Object(r.a)(F, e), (F.length = t.length), x.notifyListeners(F.location, F.action);
        }
        function T(e) {
          (function (e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
          })(e) || _(E(e.state));
        }
        function I() {
          _(E(k()));
        }
        var A = !1;
        function _(e) {
          if (A) (A = !1), R();
          else {
            x.confirmTransitionTo(e, 'POP', f, function (t) {
              t
                ? R({ action: 'POP', location: e })
                : (function (e) {
                    var t = F.location,
                      n = M.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = M.indexOf(e.key);
                    -1 === r && (r = 0);
                    var i = n - r;
                    i && ((A = !0), L(i));
                  })(e);
            });
          }
        }
        var j = E(k()),
          M = [j.key];
        function D(e) {
          return O + d(e);
        }
        function L(e) {
          t.go(e);
        }
        var z = 0;
        function N(e) {
          1 === (z += e) && 1 === e
            ? (window.addEventListener(S, T), i && window.addEventListener(w, I))
            : 0 === z && (window.removeEventListener(S, T), i && window.removeEventListener(w, I));
        }
        var B = !1;
        var F = {
          length: t.length,
          action: 'POP',
          location: j,
          createHref: D,
          push: function (e, r) {
            var i = 'PUSH',
              o = v(e, r, P(), F.location);
            x.confirmTransitionTo(o, i, f, function (e) {
              if (e) {
                var r = D(o),
                  a = o.key,
                  u = o.state;
                if (n)
                  if ((t.pushState({ key: a, state: u }, null, r), s)) window.location.href = r;
                  else {
                    var c = M.indexOf(F.location.key),
                      l = M.slice(0, c + 1);
                    l.push(o.key), (M = l), R({ action: i, location: o });
                  }
                else window.location.href = r;
              }
            });
          },
          replace: function (e, r) {
            var i = 'REPLACE',
              o = v(e, r, P(), F.location);
            x.confirmTransitionTo(o, i, f, function (e) {
              if (e) {
                var r = D(o),
                  a = o.key,
                  u = o.state;
                if (n)
                  if ((t.replaceState({ key: a, state: u }, null, r), s)) window.location.replace(r);
                  else {
                    var c = M.indexOf(F.location.key);
                    -1 !== c && (M[c] = o.key), R({ action: i, location: o });
                  }
                else window.location.replace(r);
              }
            });
          },
          go: L,
          goBack: function () {
            L(-1);
          },
          goForward: function () {
            L(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = x.setPrompt(e);
            return (
              B || (N(1), (B = !0)),
              function () {
                return B && ((B = !1), N(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = x.appendListener(e);
            return (
              N(1),
              function () {
                N(-1), t();
              }
            );
          },
        };
        return F;
      }
      var O = 'hashchange',
        E = {
          hashbang: {
            encodePath: function (e) {
              return '!' === e.charAt(0) ? e : '!/' + f(e);
            },
            decodePath: function (e) {
              return '!' === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: f, decodePath: l },
          slash: { encodePath: l, decodePath: l },
        };
      function P(e) {
        var t = e.indexOf('#');
        return -1 === t ? e : e.slice(0, t);
      }
      function x() {
        var e = window.location.href,
          t = e.indexOf('#');
        return -1 === t ? '' : e.substring(t + 1);
      }
      function R(e) {
        window.location.replace(P(window.location.href) + '#' + e);
      }
      function T(e) {
        void 0 === e && (e = {}), g || Object(c.a)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf('Firefox'), e),
          i = n.getUserConfirmation,
          o = void 0 === i ? b : i,
          a = n.hashType,
          s = void 0 === a ? 'slash' : a,
          u = e.basename ? h(l(e.basename)) : '',
          f = E[s],
          y = f.encodePath,
          S = f.decodePath;
        function w() {
          var e = S(x());
          return u && (e = p(e, u)), v(e);
        }
        var k = m();
        function C(e) {
          Object(r.a)(F, e), (F.length = t.length), k.notifyListeners(F.location, F.action);
        }
        var T = !1,
          I = null;
        function A() {
          var e,
            t,
            n = x(),
            r = y(n);
          if (n !== r) R(r);
          else {
            var i = w(),
              a = F.location;
            if (!T && ((t = i), (e = a).pathname === t.pathname && e.search === t.search && e.hash === t.hash)) return;
            if (I === d(i)) return;
            (I = null),
              (function (e) {
                if (T) (T = !1), C();
                else {
                  var t = 'POP';
                  k.confirmTransitionTo(e, t, o, function (n) {
                    n
                      ? C({ action: t, location: e })
                      : (function (e) {
                          var t = F.location,
                            n = D.lastIndexOf(d(t));
                          -1 === n && (n = 0);
                          var r = D.lastIndexOf(d(e));
                          -1 === r && (r = 0);
                          var i = n - r;
                          i && ((T = !0), L(i));
                        })(e);
                  });
                }
              })(i);
          }
        }
        var _ = x(),
          j = y(_);
        _ !== j && R(j);
        var M = w(),
          D = [d(M)];
        function L(e) {
          t.go(e);
        }
        var z = 0;
        function N(e) {
          1 === (z += e) && 1 === e ? window.addEventListener(O, A) : 0 === z && window.removeEventListener(O, A);
        }
        var B = !1;
        var F = {
          length: t.length,
          action: 'POP',
          location: M,
          createHref: function (e) {
            var t = document.querySelector('base'),
              n = '';
            return t && t.getAttribute('href') && (n = P(window.location.href)), n + '#' + y(u + d(e));
          },
          push: function (e, t) {
            var n = 'PUSH',
              r = v(e, void 0, void 0, F.location);
            k.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = d(r),
                  i = y(u + t);
                if (x() !== i) {
                  (I = t),
                    (function (e) {
                      window.location.hash = e;
                    })(i);
                  var o = D.lastIndexOf(d(F.location)),
                    a = D.slice(0, o + 1);
                  a.push(t), (D = a), C({ action: n, location: r });
                } else C();
              }
            });
          },
          replace: function (e, t) {
            var n = 'REPLACE',
              r = v(e, void 0, void 0, F.location);
            k.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = d(r),
                  i = y(u + t);
                x() !== i && ((I = t), R(i));
                var o = D.indexOf(d(F.location));
                -1 !== o && (D[o] = t), C({ action: n, location: r });
              }
            });
          },
          go: L,
          goBack: function () {
            L(-1);
          },
          goForward: function () {
            L(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = k.setPrompt(e);
            return (
              B || (N(1), (B = !0)),
              function () {
                return B && ((B = !1), N(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = k.appendListener(e);
            return (
              N(1),
              function () {
                N(-1), t();
              }
            );
          },
        };
        return F;
      }
      function I(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function A(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          i = t.initialEntries,
          o = void 0 === i ? ['/'] : i,
          a = t.initialIndex,
          s = void 0 === a ? 0 : a,
          u = t.keyLength,
          c = void 0 === u ? 6 : u,
          l = m();
        function f(e) {
          Object(r.a)(S, e), (S.length = S.entries.length), l.notifyListeners(S.location, S.action);
        }
        function p() {
          return Math.random().toString(36).substr(2, c);
        }
        var h = I(s, 0, o.length - 1),
          y = o.map(function (e) {
            return v(e, void 0, 'string' === typeof e ? p() : e.key || p());
          }),
          g = d;
        function b(e) {
          var t = I(S.index + e, 0, S.entries.length - 1),
            r = S.entries[t];
          l.confirmTransitionTo(r, 'POP', n, function (e) {
            e ? f({ action: 'POP', location: r, index: t }) : f();
          });
        }
        var S = {
          length: y.length,
          action: 'POP',
          location: y[h],
          index: h,
          entries: y,
          createHref: g,
          push: function (e, t) {
            var r = 'PUSH',
              i = v(e, t, p(), S.location);
            l.confirmTransitionTo(i, r, n, function (e) {
              if (e) {
                var t = S.index + 1,
                  n = S.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
                  f({ action: r, location: i, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = 'REPLACE',
              i = v(e, t, p(), S.location);
            l.confirmTransitionTo(i, r, n, function (e) {
              e && ((S.entries[S.index] = i), f({ action: r, location: i }));
            });
          },
          go: b,
          goBack: function () {
            b(-1);
          },
          goForward: function () {
            b(1);
          },
          canGo: function (e) {
            var t = S.index + e;
            return t >= 0 && t < S.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), l.setPrompt(e);
          },
          listen: function (e) {
            return l.appendListener(e);
          },
        };
        return S;
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return u;
        });
      var r,
        i = n(0),
        o = n(1),
        a = n(13),
        s = n(26);
      !(function (e) {
        (e[(e.Text = 0)] = 'Text'), (e[(e.Binary = 1)] = 'Binary');
      })(r || (r = {}));
      var u = (function () {
        function e(t, n, o, u) {
          if ((Object(i.a)(this, e), (this.privBody = null), t === r.Text && n && 'string' !== typeof n))
            throw new a.b('Payload must be a string');
          if (t === r.Binary && n && !(n instanceof ArrayBuffer)) throw new a.b('Payload must be ArrayBuffer');
          switch (
            ((this.privMessageType = t),
            (this.privBody = n),
            (this.privHeaders = o || {}),
            (this.privId = u || Object(s.a)()),
            this.messageType)
          ) {
            case r.Binary:
              this.privSize = null !== this.binaryBody ? this.binaryBody.byteLength : 0;
              break;
            case r.Text:
              this.privSize = this.textBody.length;
          }
        }
        return (
          Object(o.a)(e, [
            {
              key: 'messageType',
              get: function () {
                return this.privMessageType;
              },
            },
            {
              key: 'headers',
              get: function () {
                return this.privHeaders;
              },
            },
            {
              key: 'body',
              get: function () {
                return this.privBody;
              },
            },
            {
              key: 'textBody',
              get: function () {
                if (this.privMessageType === r.Binary) throw new a.b('Not supported for binary message');
                return this.privBody;
              },
            },
            {
              key: 'binaryBody',
              get: function () {
                if (this.privMessageType === r.Text) throw new a.b('Not supported for text message');
                return this.privBody;
              },
            },
            {
              key: 'id',
              get: function () {
                return this.privId;
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(87),
        i = function () {
          return Object(r.v4)().replace(new RegExp('-', 'g'), '').toUpperCase();
        };
    },
    function (e, t, n) {
      'use strict';
      var r = 'Invariant failed';
      t.a = function (e, t) {
        if (!e) throw new Error(r);
      };
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function i(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    ,
    function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return c;
      }),
        n.d(t, 'd', function () {
          return l;
        }),
        n.d(t, 'c', function () {
          return f;
        }),
        n.d(t, 'a', function () {
          return p;
        }),
        n.d(t, 'f', function () {
          return d;
        }),
        n.d(t, 'e', function () {
          return v;
        }),
        n.d(t, 'g', function () {
          return y;
        }),
        n.d(t, 'h', function () {
          return m;
        });
      var r = n(0),
        i = n(1),
        o = n(3),
        a = n(4),
        s = n(9),
        u = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            var o,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a.Info;
            return Object(r.a)(this, n), ((o = t.call(this, e, a)).privAudioSourceId = i), o;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'audioSourceId',
                get: function () {
                  return this.privAudioSourceId;
                },
              },
            ]),
            n
          );
        })(s.b),
        c = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'AudioSourceInitializingEvent', e);
          }
          return n;
        })(u),
        l = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'AudioSourceReadyEvent', e);
          }
          return n;
        })(u),
        f = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e) {
            return Object(r.a)(this, n), t.call(this, 'AudioSourceOffEvent', e);
          }
          return n;
        })(u),
        p = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            var o;
            return Object(r.a)(this, n), ((o = t.call(this, 'AudioSourceErrorEvent', e, s.a.Error)).privError = i), o;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'error',
                get: function () {
                  return this.privError;
                },
              },
            ]),
            n
          );
        })(u),
        h = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return Object(r.a)(this, n), ((a = t.call(this, e, i)).privAudioNodeId = o), a;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'audioNodeId',
                get: function () {
                  return this.privAudioNodeId;
                },
              },
            ]),
            n
          );
        })(u),
        d = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            return Object(r.a)(this, n), t.call(this, 'AudioStreamNodeAttachingEvent', e, i);
          }
          return n;
        })(h),
        v = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            return Object(r.a)(this, n), t.call(this, 'AudioStreamNodeAttachedEvent', e, i);
          }
          return n;
        })(h),
        y = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            return Object(r.a)(this, n), t.call(this, 'AudioStreamNodeDetachedEvent', e, i);
          }
          return n;
        })(h),
        m = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return Object(r.a)(this, n), ((a = t.call(this, 'AudioStreamNodeErrorEvent', e, i)).privError = o), a;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'error',
                get: function () {
                  return this.privError;
                },
              },
            ]),
            n
          );
        })(h);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return f;
        }),
        n.d(t, 'a', function () {
          return p;
        }),
        n.d(t, 'c', function () {
          return h;
        });
      var r,
        i = n(0),
        o = n(1),
        a = n(3),
        s = n(4),
        u = n(9),
        c = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, r, o) {
            var a,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.a.Info;
            return Object(i.a)(this, n), ((a = t.call(this, e, s)).privRequestId = r), (a.privSessionId = o), a;
          }
          return (
            Object(o.a)(n, [
              {
                key: 'requestId',
                get: function () {
                  return this.privRequestId;
                },
              },
              {
                key: 'sessionId',
                get: function () {
                  return this.privSessionId;
                },
              },
            ]),
            n
          );
        })(u.b),
        l = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, r, o, a) {
            var s;
            return (
              Object(i.a)(this, n),
              ((s = t.call(this, 'RecognitionTriggeredEvent', e, r)).privAudioSourceId = o),
              (s.privAudioNodeId = a),
              s
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'audioSourceId',
                get: function () {
                  return this.privAudioSourceId;
                },
              },
              {
                key: 'audioNodeId',
                get: function () {
                  return this.privAudioNodeId;
                },
              },
            ]),
            n
          );
        })(c),
        f = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, r, o, a) {
            var s;
            return (
              Object(i.a)(this, n),
              ((s = t.call(this, 'ListeningStartedEvent', e, r)).privAudioSourceId = o),
              (s.privAudioNodeId = a),
              s
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'audioSourceId',
                get: function () {
                  return this.privAudioSourceId;
                },
              },
              {
                key: 'audioNodeId',
                get: function () {
                  return this.privAudioNodeId;
                },
              },
            ]),
            n
          );
        })(c),
        p = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, r, o) {
            var a;
            return (
              Object(i.a)(this, n), ((a = t.call(this, 'ConnectingToServiceEvent', e, o)).privAuthFetchEventid = r), a
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'authFetchEventid',
                get: function () {
                  return this.privAuthFetchEventid;
                },
              },
            ]),
            n
          );
        })(c),
        h = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, r, o, a, s) {
            var u;
            return (
              Object(i.a)(this, n),
              ((u = t.call(this, 'RecognitionStartedEvent', e, s)).privAudioSourceId = r),
              (u.privAudioNodeId = o),
              (u.privAuthFetchEventId = a),
              u
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'audioSourceId',
                get: function () {
                  return this.privAudioSourceId;
                },
              },
              {
                key: 'audioNodeId',
                get: function () {
                  return this.privAudioNodeId;
                },
              },
              {
                key: 'authFetchEventId',
                get: function () {
                  return this.privAuthFetchEventId;
                },
              },
            ]),
            n
          );
        })(c);
      !(function (e) {
        (e[(e.Success = 0)] = 'Success'),
          (e[(e.AudioSourceError = 1)] = 'AudioSourceError'),
          (e[(e.AudioSourceTimeout = 2)] = 'AudioSourceTimeout'),
          (e[(e.AuthTokenFetchError = 3)] = 'AuthTokenFetchError'),
          (e[(e.AuthTokenFetchTimeout = 4)] = 'AuthTokenFetchTimeout'),
          (e[(e.UnAuthorized = 5)] = 'UnAuthorized'),
          (e[(e.ConnectTimeout = 6)] = 'ConnectTimeout'),
          (e[(e.ConnectError = 7)] = 'ConnectError'),
          (e[(e.ClientRecognitionActivityTimeout = 8)] = 'ClientRecognitionActivityTimeout'),
          (e[(e.UnknownError = 9)] = 'UnknownError');
      })(r || (r = {}));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e(t, n) {
            Object(r.a)(this, e), (this.privHeaderName = t), (this.privToken = n);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'headerName',
                get: function () {
                  return this.privHeaderName;
                },
              },
              {
                key: 'token',
                get: function () {
                  return this.privToken;
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(23);
      function i(e, t, n) {
        return (i =
          'undefined' !== typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var i = (function (e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Object(r.a)(e)); );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
    },
    ,
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return b;
      }),
        n.d(t, 'b', function () {
          return S;
        }),
        n.d(t, 'c', function () {
          return w;
        }),
        n.d(t, 'd', function () {
          return k;
        });
      var r,
        i = n(2),
        o = n.n(i),
        a = n(3),
        s = n(4),
        u = n(0),
        c = n(1),
        l = n(26),
        f = n(150),
        p = n(7),
        h = n(8),
        d = n(12),
        v = n(6),
        y = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e, r, i, o, a, s, c, l, f) {
            var p;
            return (
              Object(u.a)(this, n),
              ((p = t.call(this, i, s, r, e)).formatTag = e),
              (p.avgBytesPerSec = o),
              (p.blockAlign = a),
              (p.priAudioFormatString = c),
              (p.priRequestAudioFormatString = l),
              (p.priHasHeader = f),
              p
            );
          }
          return (
            Object(c.a)(
              n,
              [
                {
                  key: 'hasHeader',
                  get: function () {
                    return this.priHasHeader;
                  },
                },
                {
                  key: 'header',
                  get: function () {
                    if (this.hasHeader) return this.privHeader;
                  },
                },
                {
                  key: 'updateHeader',
                  value: function (e) {
                    this.priHasHeader && new DataView(this.privHeader).setUint32(40, e, !0);
                  },
                },
                {
                  key: 'requestAudioFormatString',
                  get: function () {
                    return this.priRequestAudioFormatString;
                  },
                },
              ],
              [
                {
                  key: 'fromSpeechSynthesisOutputFormat',
                  value: function (e) {
                    return void 0 === e
                      ? n.getDefaultOutputFormat()
                      : n.fromSpeechSynthesisOutputFormatString(n.SpeechSynthesisOutputFormatToString[e]);
                  },
                },
                {
                  key: 'fromSpeechSynthesisOutputFormatString',
                  value: function (e) {
                    switch (e) {
                      case 'raw-8khz-8bit-mono-mulaw':
                        return new n(v.a.MuLaw, 1, 8e3, 8e3, 1, 8, e, e, !1);
                      case 'riff-16khz-16kbps-mono-siren':
                        return new n(v.a.Siren, 1, 16e3, 2e3, 40, 0, e, 'audio-16khz-16kbps-mono-siren', !0);
                      case 'audio-16khz-16kbps-mono-siren':
                        return new n(v.a.Siren, 1, 16e3, 2e3, 40, 0, e, e, !1);
                      case 'audio-16khz-32kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 16e3, 4096, 2, 16, e, e, !1);
                      case 'audio-16khz-128kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 16e3, 16384, 2, 16, e, e, !1);
                      case 'audio-16khz-64kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 16e3, 8192, 2, 16, e, e, !1);
                      case 'audio-24khz-48kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 24e3, 6144, 2, 16, e, e, !1);
                      case 'audio-24khz-96kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 24e3, 12288, 2, 16, e, e, !1);
                      case 'audio-24khz-160kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 24e3, 20480, 2, 16, e, e, !1);
                      case 'raw-16khz-16bit-mono-truesilk':
                        return new n(v.a.SILKSkype, 1, 16e3, 32e3, 2, 16, e, e, !1);
                      case 'riff-8khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 8e3, 16e3, 2, 16, e, 'raw-8khz-16bit-mono-pcm', !0);
                      case 'riff-24khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 24e3, 48e3, 2, 16, e, 'raw-24khz-16bit-mono-pcm', !0);
                      case 'riff-8khz-8bit-mono-mulaw':
                        return new n(v.a.MuLaw, 1, 8e3, 8e3, 1, 8, e, 'raw-8khz-8bit-mono-mulaw', !0);
                      case 'raw-16khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 16e3, 32e3, 2, 16, e, 'raw-16khz-16bit-mono-pcm', !1);
                      case 'raw-24khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 24e3, 48e3, 2, 16, e, 'raw-24khz-16bit-mono-pcm', !1);
                      case 'raw-8khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 8e3, 16e3, 2, 16, e, 'raw-8khz-16bit-mono-pcm', !1);
                      case 'ogg-16khz-16bit-mono-opus':
                        return new n(v.a.OGG_OPUS, 1, 16e3, 8192, 2, 16, e, e, !1);
                      case 'ogg-24khz-16bit-mono-opus':
                        return new n(v.a.OGG_OPUS, 1, 24e3, 8192, 2, 16, e, e, !1);
                      case 'raw-48khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 48e3, 96e3, 2, 16, e, 'raw-48khz-16bit-mono-pcm', !1);
                      case 'riff-48khz-16bit-mono-pcm':
                        return new n(v.a.PCM, 1, 48e3, 96e3, 2, 16, e, 'raw-48khz-16bit-mono-pcm', !0);
                      case 'audio-48khz-96kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 48e3, 12288, 2, 16, e, e, !1);
                      case 'audio-48khz-192kbitrate-mono-mp3':
                        return new n(v.a.MP3, 1, 48e3, 24576, 2, 16, e, e, !1);
                      case 'ogg-48khz-16bit-mono-opus':
                        return new n(v.a.OGG_OPUS, 1, 48e3, 12e3, 2, 16, e, e, !1);
                      case 'webm-16khz-16bit-mono-opus':
                        return new n(v.a.WEBM_OPUS, 1, 16e3, 8e3, 2, 16, e, e, !1);
                      case 'webm-24khz-16bit-mono-opus':
                        return new n(v.a.WEBM_OPUS, 1, 24e3, 8e3, 2, 16, e, e, !1);
                      case 'raw-24khz-16bit-mono-truesilk':
                        return new n(v.a.SILKSkype, 1, 24e3, 48e3, 2, 16, e, e, !1);
                      case 'raw-8khz-8bit-mono-alaw':
                        return new n(v.a.ALaw, 1, 8e3, 8e3, 1, 8, e, e, !1);
                      case 'riff-8khz-8bit-mono-alaw':
                        return new n(v.a.ALaw, 1, 8e3, 8e3, 1, 8, e, 'raw-8khz-8bit-mono-alaw', !0);
                      case 'riff-16khz-16bit-mono-pcm':
                      default:
                        return new n(
                          v.a.PCM,
                          1,
                          16e3,
                          32e3,
                          2,
                          16,
                          'riff-16khz-16bit-mono-pcm',
                          'raw-16khz-16bit-mono-pcm',
                          !0
                        );
                    }
                  },
                },
                {
                  key: 'getDefaultOutputFormat',
                  value: function () {
                    return n.fromSpeechSynthesisOutputFormatString(
                      'undefined' !== typeof window ? 'audio-24khz-48kbitrate-mono-mp3' : 'riff-16khz-16bit-mono-pcm'
                    );
                  },
                },
              ]
            ),
            n
          );
        })(v.c);
      y.SpeechSynthesisOutputFormatToString =
        ((r = {}),
        Object(h.a)(r, d.a.Raw8Khz8BitMonoMULaw, 'raw-8khz-8bit-mono-mulaw'),
        Object(h.a)(r, d.a.Riff16Khz16KbpsMonoSiren, 'riff-16khz-16kbps-mono-siren'),
        Object(h.a)(r, d.a.Audio16Khz16KbpsMonoSiren, 'audio-16khz-16kbps-mono-siren'),
        Object(h.a)(r, d.a.Audio16Khz32KBitRateMonoMp3, 'audio-16khz-32kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Audio16Khz128KBitRateMonoMp3, 'audio-16khz-128kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Audio16Khz64KBitRateMonoMp3, 'audio-16khz-64kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Audio24Khz48KBitRateMonoMp3, 'audio-24khz-48kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Audio24Khz96KBitRateMonoMp3, 'audio-24khz-96kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Audio24Khz160KBitRateMonoMp3, 'audio-24khz-160kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Raw16Khz16BitMonoTrueSilk, 'raw-16khz-16bit-mono-truesilk'),
        Object(h.a)(r, d.a.Riff16Khz16BitMonoPcm, 'riff-16khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Riff8Khz16BitMonoPcm, 'riff-8khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Riff24Khz16BitMonoPcm, 'riff-24khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Riff8Khz8BitMonoMULaw, 'riff-8khz-8bit-mono-mulaw'),
        Object(h.a)(r, d.a.Raw16Khz16BitMonoPcm, 'raw-16khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Raw24Khz16BitMonoPcm, 'raw-24khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Raw8Khz16BitMonoPcm, 'raw-8khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Ogg16Khz16BitMonoOpus, 'ogg-16khz-16bit-mono-opus'),
        Object(h.a)(r, d.a.Ogg24Khz16BitMonoOpus, 'ogg-24khz-16bit-mono-opus'),
        Object(h.a)(r, d.a.Raw48Khz16BitMonoPcm, 'raw-48khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Riff48Khz16BitMonoPcm, 'riff-48khz-16bit-mono-pcm'),
        Object(h.a)(r, d.a.Audio48Khz96KBitRateMonoMp3, 'audio-48khz-96kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Audio48Khz192KBitRateMonoMp3, 'audio-48khz-192kbitrate-mono-mp3'),
        Object(h.a)(r, d.a.Ogg48Khz16BitMonoOpus, 'ogg-48khz-16bit-mono-opus'),
        Object(h.a)(r, d.a.Webm16Khz16BitMonoOpus, 'webm-16khz-16bit-mono-opus'),
        Object(h.a)(r, d.a.Webm24Khz16BitMonoOpus, 'webm-24khz-16bit-mono-opus'),
        Object(h.a)(r, d.a.Raw24Khz16BitMonoTrueSilk, 'raw-24khz-16bit-mono-truesilk'),
        Object(h.a)(r, d.a.Raw8Khz8BitMonoALaw, 'raw-8khz-8bit-mono-alaw'),
        Object(h.a)(r, d.a.Riff8Khz8BitMonoALaw, 'riff-8khz-8bit-mono-alaw'),
        r);
      var m = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        g = (function () {
          function e() {
            Object(u.a)(this, e);
          }
          return (
            Object(c.a)(e, null, [
              {
                key: 'createPullStream',
                value: function () {
                  return b.create();
                },
              },
            ]),
            e
          );
        })(),
        b = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(c.a)(n, null, [
              {
                key: 'create',
                value: function () {
                  return new S();
                },
              },
            ]),
            n
          );
        })(g),
        S = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            return Object(u.a)(this, n), ((e = t.call(this)).privId = Object(l.a)()), (e.privStream = new f.a()), e;
          }
          return (
            Object(c.a)(n, [
              {
                key: 'format',
                get: function () {
                  return this.privFormat;
                },
                set: function (e) {
                  (void 0 !== e && null !== e) || (this.privFormat = y.getDefaultOutputFormat()), (this.privFormat = e);
                },
              },
              {
                key: 'isClosed',
                get: function () {
                  return this.privStream.isClosed;
                },
              },
              {
                key: 'id',
                value: function () {
                  return this.privId;
                },
              },
              {
                key: 'read',
                value: function (e) {
                  return m(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function t() {
                      var n, r, i, a;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = new Int8Array(e)), (r = 0), void 0 === this.privLastChunkView)) {
                                  t.next = 10;
                                  break;
                                }
                                if (!(this.privLastChunkView.length > e.byteLength)) {
                                  t.next = 7;
                                  break;
                                }
                                return (
                                  n.set(this.privLastChunkView.slice(0, e.byteLength)),
                                  (this.privLastChunkView = this.privLastChunkView.slice(e.byteLength)),
                                  t.abrupt('return', Promise.resolve(e.byteLength))
                                );
                              case 7:
                                n.set(this.privLastChunkView),
                                  (r = this.privLastChunkView.length),
                                  (this.privLastChunkView = void 0);
                              case 10:
                                if (!(r < e.byteLength) || this.privStream.isReadEnded) {
                                  t.next = 25;
                                  break;
                                }
                                return (t.next = 13), this.privStream.read();
                              case 13:
                                if (void 0 === (i = t.sent) || i.isEnd) {
                                  t.next = 21;
                                  break;
                                }
                                (a = void 0),
                                  i.buffer.byteLength > e.byteLength - r
                                    ? ((a = i.buffer.slice(0, e.byteLength - r)),
                                      (this.privLastChunkView = new Int8Array(i.buffer.slice(e.byteLength - r))))
                                    : (a = i.buffer),
                                  n.set(new Int8Array(a), r),
                                  (r += a.byteLength),
                                  (t.next = 23);
                                break;
                              case 21:
                                return (t.next = 23), this.privStream.readEnded();
                              case 23:
                                t.next = 10;
                                break;
                              case 25:
                                return t.abrupt('return', r);
                              case 26:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'write',
                value: function (e) {
                  p.a.throwIfNullOrUndefined(this.privStream, 'must set format before writing'),
                    this.privStream.writeStreamChunk({ buffer: e, isEnd: !1, timeReceived: Date.now() });
                },
              },
              {
                key: 'close',
                value: function () {
                  this.privStream.close();
                },
              },
            ]),
            n
          );
        })(b),
        w = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(u.a)(this, n), t.call(this);
          }
          return (
            Object(c.a)(n, null, [
              {
                key: 'create',
                value: function (e) {
                  return new k(e);
                },
              },
            ]),
            n
          );
        })(g),
        k = (function (e) {
          Object(a.a)(n, e);
          var t = Object(s.a)(n);
          function n(e) {
            var r;
            return Object(u.a)(this, n), ((r = t.call(this)).privId = Object(l.a)()), (r.privCallback = e), r;
          }
          return (
            Object(c.a)(n, [
              { key: 'format', set: function (e) {} },
              {
                key: 'write',
                value: function (e) {
                  this.privCallback.write && this.privCallback.write(e);
                },
              },
              {
                key: 'close',
                value: function () {
                  this.privCallback.close && this.privCallback.close();
                },
              },
              {
                key: 'id',
                value: function () {
                  return this.privId;
                },
              },
            ]),
            n
          );
        })(w);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return r;
      }),
        n.d(t, 'd', function () {
          return l;
        }),
        n.d(t, 'e', function () {
          return f;
        }),
        n.d(t, 'a', function () {
          return p;
        }),
        n.d(t, 'b', function () {
          return d;
        }),
        n.d(t, 'f', function () {
          return u;
        }),
        n.d(t, 'g', function () {
          return c;
        });
      var r,
        i,
        o = n(0),
        a = n(1),
        s = n(41);
      !(function (e) {
        (e[(e.Interactive = 0)] = 'Interactive'),
          (e[(e.Conversation = 1)] = 'Conversation'),
          (e[(e.Dictation = 2)] = 'Dictation');
      })(r || (r = {})),
        (function (e) {
          (e[(e.Simple = 0)] = 'Simple'), (e[(e.Detailed = 1)] = 'Detailed');
        })(i || (i = {}));
      var u,
        c,
        l = (function () {
          function e(t, n) {
            Object(o.a)(this, e),
              (this.privRecognitionMode = r.Interactive),
              (this.privSpeechServiceConfig = t || new f(new p(null))),
              (this.privParameters = n),
              (this.privMaxRetryCount = parseInt(n.getProperty('SPEECH-Error-MaxRetryCount', '4'), 10));
          }
          return (
            Object(a.a)(e, [
              {
                key: 'parameters',
                get: function () {
                  return this.privParameters;
                },
              },
              {
                key: 'recognitionMode',
                get: function () {
                  return this.privRecognitionMode;
                },
                set: function (e) {
                  (this.privRecognitionMode = e),
                    (this.privRecognitionActivityTimeout = e === r.Interactive ? 8e3 : 25e3),
                    (this.privSpeechServiceConfig.Recognition = r[e]);
                },
              },
              {
                key: 'SpeechServiceConfig',
                get: function () {
                  return this.privSpeechServiceConfig;
                },
              },
              {
                key: 'recognitionActivityTimeout',
                get: function () {
                  return this.privRecognitionActivityTimeout;
                },
              },
              {
                key: 'isContinuousRecognition',
                get: function () {
                  return this.privRecognitionMode !== r.Interactive;
                },
              },
              {
                key: 'autoDetectSourceLanguages',
                get: function () {
                  return this.parameters.getProperty(s.a.SpeechServiceConnection_AutoDetectSourceLanguages, void 0);
                },
              },
              {
                key: 'maxRetryCount',
                get: function () {
                  return this.privMaxRetryCount;
                },
              },
            ]),
            e
          );
        })(),
        f = (function () {
          function e(t) {
            var n = this;
            Object(o.a)(this, e),
              (this.serialize = function () {
                return JSON.stringify(n, function (e, t) {
                  if (t && 'object' === typeof t) {
                    var n = {};
                    for (var r in t)
                      Object.hasOwnProperty.call(t, r) && (n[r && r.charAt(0).toLowerCase() + r.substring(1)] = t[r]);
                    return n;
                  }
                  return t;
                });
              }),
              (this.context = t);
          }
          return (
            Object(a.a)(e, [
              {
                key: 'Context',
                get: function () {
                  return this.context;
                },
              },
              {
                key: 'Recognition',
                get: function () {
                  return this.recognition;
                },
                set: function (e) {
                  this.recognition = e.toLowerCase();
                },
              },
            ]),
            e
          );
        })(),
        p = function e(t) {
          Object(o.a)(this, e), (this.system = new h()), (this.os = t);
        },
        h = function e() {
          Object(o.a)(this, e);
          (this.name = 'SpeechSDK'), (this.version = '1.18.1'), (this.build = 'JavaScript'), (this.lang = 'JavaScript');
        },
        d = function e(t, n, r) {
          Object(o.a)(this, e), (this.platform = t), (this.name = n), (this.version = r);
        };
      !(function (e) {
        (e.Bluetooth = 'Bluetooth'),
          (e.Wired = 'Wired'),
          (e.WiFi = 'WiFi'),
          (e.Cellular = 'Cellular'),
          (e.InBuilt = 'InBuilt'),
          (e.Unknown = 'Unknown');
      })(u || (u = {})),
        (function (e) {
          (e.Phone = 'Phone'),
            (e.Speaker = 'Speaker'),
            (e.Car = 'Car'),
            (e.Headset = 'Headset'),
            (e.Thermostat = 'Thermostat'),
            (e.Microphones = 'Microphones'),
            (e.Deskphone = 'Deskphone'),
            (e.RemoteControl = 'RemoteControl'),
            (e.Unknown = 'Unknown'),
            (e.File = 'File'),
            (e.Stream = 'Stream');
        })(c || (c = {}));
    },
    ,
    function (e, t, n) {
      e.exports = n(140)();
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.SpeechServiceConnection_Key = 0)] = 'SpeechServiceConnection_Key'),
            (e[(e.SpeechServiceConnection_Endpoint = 1)] = 'SpeechServiceConnection_Endpoint'),
            (e[(e.SpeechServiceConnection_Region = 2)] = 'SpeechServiceConnection_Region'),
            (e[(e.SpeechServiceAuthorization_Token = 3)] = 'SpeechServiceAuthorization_Token'),
            (e[(e.SpeechServiceAuthorization_Type = 4)] = 'SpeechServiceAuthorization_Type'),
            (e[(e.SpeechServiceConnection_EndpointId = 5)] = 'SpeechServiceConnection_EndpointId'),
            (e[(e.SpeechServiceConnection_TranslationToLanguages = 6)] =
              'SpeechServiceConnection_TranslationToLanguages'),
            (e[(e.SpeechServiceConnection_TranslationVoice = 7)] = 'SpeechServiceConnection_TranslationVoice'),
            (e[(e.SpeechServiceConnection_TranslationFeatures = 8)] = 'SpeechServiceConnection_TranslationFeatures'),
            (e[(e.SpeechServiceConnection_IntentRegion = 9)] = 'SpeechServiceConnection_IntentRegion'),
            (e[(e.SpeechServiceConnection_ProxyHostName = 10)] = 'SpeechServiceConnection_ProxyHostName'),
            (e[(e.SpeechServiceConnection_ProxyPort = 11)] = 'SpeechServiceConnection_ProxyPort'),
            (e[(e.SpeechServiceConnection_ProxyUserName = 12)] = 'SpeechServiceConnection_ProxyUserName'),
            (e[(e.SpeechServiceConnection_ProxyPassword = 13)] = 'SpeechServiceConnection_ProxyPassword'),
            (e[(e.SpeechServiceConnection_RecoMode = 14)] = 'SpeechServiceConnection_RecoMode'),
            (e[(e.SpeechServiceConnection_RecoLanguage = 15)] = 'SpeechServiceConnection_RecoLanguage'),
            (e[(e.Speech_SessionId = 16)] = 'Speech_SessionId'),
            (e[(e.SpeechServiceConnection_SynthLanguage = 17)] = 'SpeechServiceConnection_SynthLanguage'),
            (e[(e.SpeechServiceConnection_SynthVoice = 18)] = 'SpeechServiceConnection_SynthVoice'),
            (e[(e.SpeechServiceConnection_SynthOutputFormat = 19)] = 'SpeechServiceConnection_SynthOutputFormat'),
            (e[(e.SpeechServiceConnection_AutoDetectSourceLanguages = 20)] =
              'SpeechServiceConnection_AutoDetectSourceLanguages'),
            (e[(e.SpeechServiceResponse_RequestDetailedResultTrueFalse = 21)] =
              'SpeechServiceResponse_RequestDetailedResultTrueFalse'),
            (e[(e.SpeechServiceResponse_RequestProfanityFilterTrueFalse = 22)] =
              'SpeechServiceResponse_RequestProfanityFilterTrueFalse'),
            (e[(e.SpeechServiceResponse_JsonResult = 23)] = 'SpeechServiceResponse_JsonResult'),
            (e[(e.SpeechServiceResponse_JsonErrorDetails = 24)] = 'SpeechServiceResponse_JsonErrorDetails'),
            (e[(e.CancellationDetails_Reason = 25)] = 'CancellationDetails_Reason'),
            (e[(e.CancellationDetails_ReasonText = 26)] = 'CancellationDetails_ReasonText'),
            (e[(e.CancellationDetails_ReasonDetailedText = 27)] = 'CancellationDetails_ReasonDetailedText'),
            (e[(e.LanguageUnderstandingServiceResponse_JsonResult = 28)] =
              'LanguageUnderstandingServiceResponse_JsonResult'),
            (e[(e.SpeechServiceConnection_Url = 29)] = 'SpeechServiceConnection_Url'),
            (e[(e.SpeechServiceConnection_InitialSilenceTimeoutMs = 30)] =
              'SpeechServiceConnection_InitialSilenceTimeoutMs'),
            (e[(e.SpeechServiceConnection_EndSilenceTimeoutMs = 31)] = 'SpeechServiceConnection_EndSilenceTimeoutMs'),
            (e[(e.SpeechServiceConnection_EnableAudioLogging = 32)] = 'SpeechServiceConnection_EnableAudioLogging'),
            (e[(e.SpeechServiceResponse_ProfanityOption = 33)] = 'SpeechServiceResponse_ProfanityOption'),
            (e[(e.SpeechServiceResponse_PostProcessingOption = 34)] = 'SpeechServiceResponse_PostProcessingOption'),
            (e[(e.SpeechServiceResponse_RequestWordLevelTimestamps = 35)] =
              'SpeechServiceResponse_RequestWordLevelTimestamps'),
            (e[(e.SpeechServiceResponse_StablePartialResultThreshold = 36)] =
              'SpeechServiceResponse_StablePartialResultThreshold'),
            (e[(e.SpeechServiceResponse_OutputFormatOption = 37)] = 'SpeechServiceResponse_OutputFormatOption'),
            (e[(e.SpeechServiceResponse_TranslationRequestStablePartialResult = 38)] =
              'SpeechServiceResponse_TranslationRequestStablePartialResult'),
            (e[(e.Conversation_ApplicationId = 39)] = 'Conversation_ApplicationId'),
            (e[(e.Conversation_DialogType = 40)] = 'Conversation_DialogType'),
            (e[(e.Conversation_Initial_Silence_Timeout = 41)] = 'Conversation_Initial_Silence_Timeout'),
            (e[(e.Conversation_From_Id = 42)] = 'Conversation_From_Id'),
            (e[(e.Conversation_Conversation_Id = 43)] = 'Conversation_Conversation_Id'),
            (e[(e.Conversation_Custom_Voice_Deployment_Ids = 44)] = 'Conversation_Custom_Voice_Deployment_Ids'),
            (e[(e.Conversation_Speech_Activity_Template = 45)] = 'Conversation_Speech_Activity_Template'),
            (e[(e.Conversation_Request_Bot_Status_Messages = 46)] = 'Conversation_Request_Bot_Status_Messages'),
            (e[(e.Conversation_Agent_Connection_Id = 47)] = 'Conversation_Agent_Connection_Id'),
            (e[(e.SpeechServiceConnection_Host = 48)] = 'SpeechServiceConnection_Host'),
            (e[(e.ConversationTranslator_Host = 49)] = 'ConversationTranslator_Host'),
            (e[(e.ConversationTranslator_Name = 50)] = 'ConversationTranslator_Name'),
            (e[(e.ConversationTranslator_CorrelationId = 51)] = 'ConversationTranslator_CorrelationId'),
            (e[(e.ConversationTranslator_Token = 52)] = 'ConversationTranslator_Token'),
            (e[(e.PronunciationAssessment_ReferenceText = 53)] = 'PronunciationAssessment_ReferenceText'),
            (e[(e.PronunciationAssessment_GradingSystem = 54)] = 'PronunciationAssessment_GradingSystem'),
            (e[(e.PronunciationAssessment_Granularity = 55)] = 'PronunciationAssessment_Granularity'),
            (e[(e.PronunciationAssessment_EnableMiscue = 56)] = 'PronunciationAssessment_EnableMiscue'),
            (e[(e.PronunciationAssessment_Json = 57)] = 'PronunciationAssessment_Json'),
            (e[(e.PronunciationAssessment_Params = 58)] = 'PronunciationAssessment_Params'),
            (e[(e.SpeakerRecognition_Api_Version = 59)] = 'SpeakerRecognition_Api_Version');
        })(r || (r = {}));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      n(17);
      var r,
        i = n(0),
        o = n(1);
      !(function (e) {
        (e[(e.None = 0)] = 'None'), (e[(e.Resolved = 1)] = 'Resolved'), (e[(e.Rejected = 2)] = 'Rejected');
      })(r || (r = {}));
      var a = (function () {
        function e() {
          var t = this;
          Object(i.a)(this, e),
            (this.resolve = function (e) {
              return t.privResolve(e), t;
            }),
            (this.reject = function (e) {
              return t.privReject(e), t;
            }),
            (this.privPromise = new Promise(function (e, n) {
              (t.privResolve = e), (t.privReject = n);
            }));
        }
        return (
          Object(o.a)(e, [
            {
              key: 'promise',
              get: function () {
                return this.privPromise;
              },
            },
          ]),
          e
        );
      })();
      function s(e, t, n) {
        e.then(
          function (e) {
            try {
              t && t(e);
            } catch (i) {
              if (n)
                try {
                  if (i instanceof Error) {
                    var r = i;
                    n(r.name + ': ' + r.message);
                  } else n(i);
                } catch (i) {}
            }
          },
          function (e) {
            if (n)
              try {
                if (e instanceof Error) {
                  var t = e;
                  n(t.name + ': ' + t.message);
                } else n(e);
              } catch (e) {}
          }
        );
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(45);
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (i = !0), (o = u);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return n;
            }
          })(e, t) ||
          Object(r.a)(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return A;
      });
      var r = n(17),
        i = n(2),
        o = n.n(i),
        a = n(0),
        s = n(1),
        u = n(25),
        c = n(13),
        l = n(51),
        f = n(154),
        p = n(152),
        h = n(26),
        d = n(62),
        v = n(53),
        y = (function () {
          function e(t) {
            Object(a.a)(this, e), (this.privResult = t);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'result',
                get: function () {
                  return this.privResult;
                },
              },
            ]),
            e
          );
        })(),
        m = (function () {
          function e(t, n, r, i, o) {
            Object(a.a)(this, e),
              (this.privResultId = t),
              (this.privReason = n),
              (this.privAudioData = r),
              (this.privErrorDetails = i),
              (this.privProperties = o);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'resultId',
                get: function () {
                  return this.privResultId;
                },
              },
              {
                key: 'reason',
                get: function () {
                  return this.privReason;
                },
              },
              {
                key: 'audioData',
                get: function () {
                  return this.privAudioData;
                },
              },
              {
                key: 'errorDetails',
                get: function () {
                  return this.privErrorDetails;
                },
              },
              {
                key: 'properties',
                get: function () {
                  return this.privProperties;
                },
              },
            ]),
            e
          );
        })(),
        g = n(52),
        b = n(86),
        S = (function () {
          function e(t, n, r, i) {
            Object(a.a)(this, e),
              (this.privAudioOffset = t),
              (this.privText = n),
              (this.privWordLength = r),
              (this.privTextOffset = i);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'audioOffset',
                get: function () {
                  return this.privAudioOffset;
                },
              },
              {
                key: 'text',
                get: function () {
                  return this.privText;
                },
              },
              {
                key: 'wordLength',
                get: function () {
                  return this.privWordLength;
                },
              },
              {
                key: 'textOffset',
                get: function () {
                  return this.privTextOffset;
                },
              },
            ]),
            e
          );
        })(),
        w = (function () {
          function e(t, n) {
            Object(a.a)(this, e), (this.privAudioOffset = t), (this.privText = n);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'audioOffset',
                get: function () {
                  return this.privAudioOffset;
                },
              },
              {
                key: 'text',
                get: function () {
                  return this.privText;
                },
              },
            ]),
            e
          );
        })(),
        k = (function () {
          function e(t, n, r) {
            Object(a.a)(this, e), (this.privAudioOffset = t), (this.privVisemeId = n), (this.privAnimation = r);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'audioOffset',
                get: function () {
                  return this.privAudioOffset;
                },
              },
              {
                key: 'visemeId',
                get: function () {
                  return this.privVisemeId;
                },
              },
              {
                key: 'animation',
                get: function () {
                  return this.privAnimation;
                },
              },
            ]),
            e
          );
        })(),
        C = n(41),
        O = n(84),
        E = n(76),
        P = n(74),
        x = n(11),
        R = n(77),
        T = n(22),
        I = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        A = (function () {
          function e(t, n, r, i, o) {
            var s = this;
            if (
              (Object(a.a)(this, e),
              (this.speakOverride = void 0),
              (this.receiveMessageOverride = void 0),
              (this.connectImplOverride = void 0),
              (this.configConnectionOverride = void 0),
              (this.sendSynthesisContext = function (e) {
                var t = s.synthesisContext.toJSON();
                if (t)
                  return e.send(
                    new T.a(u.b.Text, 'synthesis.context', s.privSynthesisTurn.requestId, 'application/json', t)
                  );
              }),
              (this.sendSpeechServiceConfig = function (e, t) {
                if (t)
                  return e.send(
                    new T.a(u.b.Text, 'speech.config', s.privSynthesisTurn.requestId, 'application/json', t)
                  );
              }),
              (this.sendSsmlMessage = function (e, t, n) {
                return e.send(new T.a(u.b.Text, 'ssml', n, 'application/ssml+xml', t));
              }),
              !t)
            )
              throw new c.a('authentication');
            if (!n) throw new c.a('connectionFactory');
            if (!r) throw new c.a('synthesizerConfig');
            (this.privAuthentication = t),
              (this.privConnectionFactory = n),
              (this.privSynthesizerConfig = r),
              (this.privIsDisposed = !1),
              (this.privSpeechSynthesizer = i),
              (this.privSessionAudioDestination = o),
              (this.privSynthesisTurn = new O.a()),
              (this.privConnectionEvents = new l.a()),
              (this.privServiceEvents = new l.a()),
              (this.privSynthesisContext = new E.a(this.privSpeechSynthesizer)),
              (this.privAgentConfig = new P.a()),
              this.connectionEvents.attach(function (e) {
                if ('ConnectionClosedEvent' === e.name) {
                  var t = e;
                  1e3 !== t.statusCode &&
                    s.cancelSynthesisLocal(
                      d.a.Error,
                      1007 === t.statusCode ? v.a.BadRequestParameters : v.a.ConnectionFailure,
                      t.reason + ' websocket error code: ' + t.statusCode
                    );
                }
              });
          }
          return (
            Object(s.a)(
              e,
              [
                {
                  key: 'synthesisContext',
                  get: function () {
                    return this.privSynthesisContext;
                  },
                },
                {
                  key: 'agentConfig',
                  get: function () {
                    return this.privAgentConfig;
                  },
                },
                {
                  key: 'connectionEvents',
                  get: function () {
                    return this.privConnectionEvents;
                  },
                },
                {
                  key: 'serviceEvents',
                  get: function () {
                    return this.privServiceEvents;
                  },
                },
                {
                  key: 'activityTemplate',
                  get: function () {
                    return this.privActivityTemplate;
                  },
                  set: function (e) {
                    this.privActivityTemplate = e;
                  },
                },
                {
                  key: 'audioOutputFormat',
                  set: function (e) {
                    (this.privAudioOutputFormat = e),
                      (this.privSynthesisTurn.audioOutputFormat = e),
                      void 0 !== this.privSessionAudioDestination && (this.privSessionAudioDestination.format = e),
                      void 0 !== this.synthesisContext && (this.synthesisContext.audioOutputFormat = e);
                  },
                },
                {
                  key: 'isDisposed',
                  value: function () {
                    return this.privIsDisposed;
                  },
                },
                {
                  key: 'dispose',
                  value: function (e) {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function t() {
                        var n;
                        return o.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((this.privIsDisposed = !0),
                                    void 0 !== this.privSessionAudioDestination &&
                                      this.privSessionAudioDestination.close(),
                                    !this.privConnectionConfigurationPromise)
                                  ) {
                                    t.next = 8;
                                    break;
                                  }
                                  return (t.next = 5), this.privConnectionConfigurationPromise;
                                case 5:
                                  return (n = t.sent), (t.next = 8), n.dispose(e);
                                case 8:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'connect',
                  value: function () {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function e() {
                        return o.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.connectImpl();
                                case 2:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'sendNetworkMessage',
                  value: function (e, t) {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function n() {
                        var r, i, a;
                        return o.a.wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (r = 'string' === typeof t ? u.b.Text : u.b.Binary),
                                    (i = 'string' === typeof t ? 'application/json' : ''),
                                    (n.next = 4),
                                    this.fetchConnection()
                                  );
                                case 4:
                                  return (
                                    (a = n.sent),
                                    n.abrupt('return', a.send(new T.a(r, e, this.privSynthesisTurn.requestId, i, t)))
                                  );
                                case 6:
                                case 'end':
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'Speak',
                  value: function (e, t, n, r, i, a) {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function s() {
                        var u, c, l;
                        return o.a.wrap(
                          function (o) {
                            for (;;)
                              switch ((o.prev = o.next)) {
                                case 0:
                                  if (
                                    ((u = t ? e : this.privSpeechSynthesizer.buildSsml(e)),
                                    void 0 === this.speakOverride)
                                  ) {
                                    o.next = 3;
                                    break;
                                  }
                                  return o.abrupt('return', this.speakOverride(u, n, r, i));
                                case 3:
                                  return (
                                    (this.privSuccessCallback = r),
                                    (this.privErrorCallback = i),
                                    this.privSynthesisTurn.startNewSynthesis(n, e, t, a),
                                    (o.prev = 6),
                                    (o.next = 9),
                                    this.connectImpl()
                                  );
                                case 9:
                                  return (o.next = 11), this.fetchConnection();
                                case 11:
                                  return (c = o.sent), (o.next = 14), this.sendSynthesisContext(c);
                                case 14:
                                  return (o.next = 16), this.sendSsmlMessage(c, u, n);
                                case 16:
                                  (l = new y(new m(n, g.a.SynthesizingAudioStarted))),
                                    this.privSpeechSynthesizer.synthesisStarted &&
                                      this.privSpeechSynthesizer.synthesisStarted(this.privSpeechSynthesizer, l),
                                    this.receiveMessage(),
                                    (o.next = 25);
                                  break;
                                case 21:
                                  return (
                                    (o.prev = 21),
                                    (o.t0 = o.catch(6)),
                                    this.cancelSynthesisLocal(d.a.Error, v.a.ConnectionFailure, o.t0),
                                    o.abrupt('return', Promise.reject(o.t0))
                                  );
                                case 25:
                                case 'end':
                                  return o.stop();
                              }
                          },
                          s,
                          this,
                          [[6, 21]]
                        );
                      })
                    );
                  },
                },
                {
                  key: 'cancelSynthesis',
                  value: function (e, t, n, r) {
                    var i = new b.a();
                    i.setProperty(x.CancellationErrorCodePropertyName, v.a[n]);
                    var o = new m(e, g.a.Canceled, void 0, r, i);
                    if (this.privSpeechSynthesizer.SynthesisCanceled) {
                      var a = new y(o);
                      try {
                        this.privSpeechSynthesizer.SynthesisCanceled(this.privSpeechSynthesizer, a);
                      } catch (s) {}
                    }
                    if (this.privSuccessCallback)
                      try {
                        this.privSuccessCallback(o);
                      } catch (u) {}
                  },
                },
                {
                  key: 'cancelSynthesisLocal',
                  value: function (e, t, n) {
                    this.privSynthesisTurn.isSynthesizing &&
                      (this.privSynthesisTurn.onStopSynthesizing(),
                      this.cancelSynthesis(this.privSynthesisTurn.requestId, e, t, n));
                  },
                },
                {
                  key: 'processTypeSpecificMessages',
                  value: function (e, t, n) {
                    return !0;
                  },
                },
                {
                  key: 'receiveMessage',
                  value: function () {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function t() {
                        var n, i, a, s, u, c, l, p, h, d, v, b, C, O;
                        return o.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.prev = 0), (t.next = 3), this.fetchConnection();
                                case 3:
                                  return (n = t.sent), (t.next = 6), n.read();
                                case 6:
                                  if (((i = t.sent), void 0 === this.receiveMessageOverride)) {
                                    t.next = 9;
                                    break;
                                  }
                                  return t.abrupt('return', this.receiveMessageOverride());
                                case 9:
                                  if (!this.privIsDisposed) {
                                    t.next = 11;
                                    break;
                                  }
                                  return t.abrupt('return');
                                case 11:
                                  if (i) {
                                    t.next = 17;
                                    break;
                                  }
                                  if (this.privSynthesisTurn.isSynthesizing) {
                                    t.next = 16;
                                    break;
                                  }
                                  return t.abrupt('return');
                                case 16:
                                  return t.abrupt('return', this.receiveMessage());
                                case 17:
                                  if (
                                    ((this.privServiceHasSentMessage = !0),
                                    (a = T.a.fromConnectionMessage(i)).requestId.toLowerCase() !==
                                      this.privSynthesisTurn.requestId.toLowerCase())
                                  ) {
                                    t.next = 74;
                                    break;
                                  }
                                  (t.t0 = a.path.toLowerCase()),
                                    (t.next =
                                      'turn.start' === t.t0
                                        ? 23
                                        : 'response' === t.t0
                                        ? 25
                                        : 'audio' === t.t0
                                        ? 27
                                        : 'audio.metadata' === t.t0
                                        ? 29
                                        : 'turn.end' === t.t0
                                        ? 59
                                        : 73);
                                  break;
                                case 23:
                                  return this.privSynthesisTurn.onServiceTurnStartResponse(), t.abrupt('break', 74);
                                case 25:
                                  return (
                                    this.privSynthesisTurn.onServiceResponseMessage(a.textBody), t.abrupt('break', 74)
                                  );
                                case 27:
                                  if (
                                    this.privSynthesisTurn.streamId.toLowerCase() === a.streamId.toLowerCase() &&
                                    a.binaryBody
                                  ) {
                                    if (
                                      (this.privSynthesisTurn.onAudioChunkReceived(a.binaryBody),
                                      this.privSpeechSynthesizer.synthesizing)
                                    )
                                      try {
                                        (s = e.addHeader(a.binaryBody, this.privSynthesisTurn.audioOutputFormat)),
                                          (u = new y(
                                            new m(this.privSynthesisTurn.requestId, g.a.SynthesizingAudio, s)
                                          )),
                                          this.privSpeechSynthesizer.synthesizing(this.privSpeechSynthesizer, u);
                                      } catch (o) {}
                                    void 0 !== this.privSessionAudioDestination &&
                                      this.privSessionAudioDestination.write(a.binaryBody);
                                  }
                                  return t.abrupt('break', 74);
                                case 29:
                                  (c = R.b.fromJSON(a.textBody).Metadata), (l = Object(r.a)(c)), (t.prev = 31), l.s();
                                case 33:
                                  if ((p = l.n()).done) {
                                    t.next = 50;
                                    break;
                                  }
                                  (h = p.value),
                                    (t.t1 = h.Type),
                                    (t.next =
                                      t.t1 === R.a.WordBoundary
                                        ? 38
                                        : t.t1 === R.a.Bookmark
                                        ? 42
                                        : t.t1 === R.a.Viseme
                                        ? 45
                                        : 48);
                                  break;
                                case 38:
                                  if (
                                    (this.privSynthesisTurn.onWordBoundaryEvent(h.Data.text.Text),
                                    (d = new S(
                                      h.Data.Offset,
                                      h.Data.text.Text,
                                      h.Data.text.Length,
                                      this.privSynthesisTurn.currentTextOffset
                                    )),
                                    this.privSpeechSynthesizer.wordBoundary)
                                  )
                                    try {
                                      this.privSpeechSynthesizer.wordBoundary(this.privSpeechSynthesizer, d);
                                    } catch (o) {}
                                  return t.abrupt('break', 48);
                                case 42:
                                  if (
                                    ((v = new w(h.Data.Offset, h.Data.Bookmark)),
                                    this.privSpeechSynthesizer.bookmarkReached)
                                  )
                                    try {
                                      this.privSpeechSynthesizer.bookmarkReached(this.privSpeechSynthesizer, v);
                                    } catch (o) {}
                                  return t.abrupt('break', 48);
                                case 45:
                                  if (
                                    (this.privSynthesisTurn.onVisemeMetadataReceived(h),
                                    h.Data.IsLastAnimation &&
                                      ((b = new k(
                                        h.Data.Offset,
                                        h.Data.VisemeId,
                                        this.privSynthesisTurn.getAndClearVisemeAnimation()
                                      )),
                                      this.privSpeechSynthesizer.visemeReceived))
                                  )
                                    try {
                                      this.privSpeechSynthesizer.visemeReceived(this.privSpeechSynthesizer, b);
                                    } catch (o) {}
                                  return t.abrupt('break', 48);
                                case 48:
                                  t.next = 33;
                                  break;
                                case 50:
                                  t.next = 55;
                                  break;
                                case 52:
                                  (t.prev = 52), (t.t2 = t.catch(31)), l.e(t.t2);
                                case 55:
                                  return (t.prev = 55), l.f(), t.finish(55);
                                case 58:
                                  return t.abrupt('break', 74);
                                case 59:
                                  return (
                                    this.privSynthesisTurn.onServiceTurnEndResponse(),
                                    (t.prev = 60),
                                    (t.next = 63),
                                    this.privSynthesisTurn.getAllReceivedAudioWithHeader()
                                  );
                                case 63:
                                  (O = t.sent),
                                    (C = new m(this.privSynthesisTurn.requestId, g.a.SynthesizingAudioCompleted, O)),
                                    this.privSuccessCallback && this.privSuccessCallback(C),
                                    (t.next = 71);
                                  break;
                                case 68:
                                  (t.prev = 68),
                                    (t.t3 = t.catch(60)),
                                    this.privErrorCallback && this.privErrorCallback(t.t3);
                                case 71:
                                  if (this.privSpeechSynthesizer.synthesisCompleted)
                                    try {
                                      this.privSpeechSynthesizer.synthesisCompleted(
                                        this.privSpeechSynthesizer,
                                        new y(C)
                                      );
                                    } catch (E) {}
                                  return t.abrupt('break', 74);
                                case 73:
                                  this.processTypeSpecificMessages(a) ||
                                    (this.privServiceEvents &&
                                      this.serviceEvents.onEvent(new f.h(a.path.toLowerCase(), a.textBody)));
                                case 74:
                                  return t.abrupt('return', this.receiveMessage());
                                case 77:
                                  (t.prev = 77), (t.t4 = t.catch(0));
                                case 79:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [
                            [0, 77],
                            [31, 52, 55, 58],
                            [60, 68],
                          ]
                        );
                      })
                    );
                  },
                },
                {
                  key: 'connectImpl',
                  value: function () {
                    var e = this,
                      t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.privConnectionPromise)
                      return this.privConnectionPromise.then(
                        function (t) {
                          return t.state() === p.a.Disconnected
                            ? ((e.privConnectionId = null),
                              (e.privConnectionPromise = null),
                              (e.privServiceHasSentMessage = !1),
                              e.connectImpl())
                            : e.privConnectionPromise;
                        },
                        function (t) {
                          return (
                            (e.privConnectionId = null),
                            (e.privConnectionPromise = null),
                            (e.privServiceHasSentMessage = !1),
                            e.connectImpl()
                          );
                        }
                      );
                    (this.privAuthFetchEventId = Object(h.a)()),
                      (this.privConnectionId = Object(h.a)()),
                      this.privSynthesisTurn.onPreConnectionStart(this.privAuthFetchEventId, this.privConnectionId);
                    var n = t
                      ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId)
                      : this.privAuthentication.fetch(this.privAuthFetchEventId);
                    return (
                      (this.privConnectionPromise = n.then(
                        function (n) {
                          return I(
                            e,
                            void 0,
                            void 0,
                            o.a.mark(function e() {
                              var r,
                                i,
                                a = this;
                              return o.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), this.privSynthesisTurn.onAuthCompleted(!1);
                                      case 2:
                                        return (
                                          (r = this.privConnectionFactory.create(
                                            this.privSynthesizerConfig,
                                            n,
                                            this.privConnectionId
                                          )).events.attach(function (e) {
                                            a.connectionEvents.onEvent(e);
                                          }),
                                          (e.next = 6),
                                          r.open()
                                        );
                                      case 6:
                                        if (200 !== (i = e.sent).statusCode) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (e.next = 10),
                                          this.privSynthesisTurn.onConnectionEstablishCompleted(i.statusCode)
                                        );
                                      case 10:
                                        return e.abrupt('return', Promise.resolve(r));
                                      case 13:
                                        if (403 !== i.statusCode || t) {
                                          e.next = 17;
                                          break;
                                        }
                                        return e.abrupt('return', this.connectImpl(!0));
                                      case 17:
                                        return (
                                          (e.next = 19),
                                          this.privSynthesisTurn.onConnectionEstablishCompleted(i.statusCode, i.reason)
                                        );
                                      case 19:
                                        return e.abrupt(
                                          'return',
                                          Promise.reject(
                                            'Unable to contact server. StatusCode: '
                                              .concat(i.statusCode, ', ')
                                              .concat(
                                                this.privSynthesizerConfig.parameters.getProperty(
                                                  C.a.SpeechServiceConnection_Endpoint
                                                ),
                                                ' Reason: '
                                              )
                                              .concat(i.reason)
                                          )
                                        );
                                      case 20:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                        },
                        function (t) {
                          return I(
                            e,
                            void 0,
                            void 0,
                            o.a.mark(function e() {
                              return o.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), this.privSynthesisTurn.onAuthCompleted(!0, t);
                                      case 2:
                                        throw new Error(t);
                                      case 3:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                        }
                      )),
                      this.privConnectionPromise.catch(function () {}),
                      this.privConnectionPromise
                    );
                  },
                },
                {
                  key: 'fetchConnection',
                  value: function () {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function e() {
                        var t = this;
                        return o.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!this.privConnectionConfigurationPromise) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt(
                                    'return',
                                    this.privConnectionConfigurationPromise.then(
                                      function (e) {
                                        return e.state() === p.a.Disconnected
                                          ? ((t.privConnectionId = null),
                                            (t.privConnectionConfigurationPromise = null),
                                            (t.privServiceHasSentMessage = !1),
                                            t.fetchConnection())
                                          : t.privConnectionConfigurationPromise;
                                      },
                                      function (e) {
                                        return (
                                          (t.privConnectionId = null),
                                          (t.privConnectionConfigurationPromise = null),
                                          (t.privServiceHasSentMessage = !1),
                                          t.fetchConnection()
                                        );
                                      }
                                    )
                                  );
                                case 2:
                                  return (
                                    (this.privConnectionConfigurationPromise = this.configureConnection()),
                                    (e.next = 5),
                                    this.privConnectionConfigurationPromise
                                  );
                                case 5:
                                  return e.abrupt('return', e.sent);
                                case 6:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'configureConnection',
                  value: function () {
                    return I(
                      this,
                      void 0,
                      void 0,
                      o.a.mark(function e() {
                        var t;
                        return o.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.connectImpl();
                                case 2:
                                  if (((t = e.sent), void 0 === this.configConnectionOverride)) {
                                    e.next = 5;
                                    break;
                                  }
                                  return e.abrupt('return', this.configConnectionOverride(t));
                                case 5:
                                  return (
                                    (e.next = 7),
                                    this.sendSpeechServiceConfig(
                                      t,
                                      this.privSynthesizerConfig.SpeechServiceConfig.serialize()
                                    )
                                  );
                                case 7:
                                  return e.abrupt('return', t);
                                case 8:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: 'addHeader',
                  value: function (e, t) {
                    if (!t.hasHeader) return e;
                    t.updateHeader(e.byteLength);
                    var n = new Uint8Array(e.byteLength + t.header.byteLength);
                    return n.set(new Uint8Array(t.header), 0), n.set(new Uint8Array(e), t.header.byteLength), n.buffer;
                  },
                },
              ]
            ),
            e
          );
        })();
      A.telemetryDataEnabled = !0;
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n(57);
      function i(e, t) {
        if (e) {
          if ('string' === typeof e) return Object(r.a)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(e, t)
              : void 0
          );
        }
      }
    },
    function (e, t, n) {
      'use strict';
      function r() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.Success = 0)] = 'Success'), (e[(e.Error = 1)] = 'Error');
        })(r || (r = {}));
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      n.d(t, 'a', function () {
        return o;
      });
      var i = n(47);
      function o(e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? Object(i.a)(e) : t;
      }
    },
    ,
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n(0),
        i = n(1),
        o = n(13),
        a = n(26),
        s = (function () {
          function e(t) {
            var n = this;
            Object(r.a)(this, e),
              (this.privEventListeners = {}),
              (this.privIsDisposed = !1),
              (this.onEvent = function (e) {
                if (n.isDisposed()) throw new o.c('EventSource');
                if (n.metadata)
                  for (var t in n.metadata) t && e.metadata && (e.metadata[t] || (e.metadata[t] = n.metadata[t]));
                for (var r in n.privEventListeners) r && n.privEventListeners[r] && n.privEventListeners[r](e);
              }),
              (this.attach = function (e) {
                var t = Object(a.a)();
                return (
                  (n.privEventListeners[t] = e),
                  {
                    detach: function () {
                      return delete n.privEventListeners[t], Promise.resolve();
                    },
                  }
                );
              }),
              (this.attachListener = function (e) {
                return n.attach(e.onEvent);
              }),
              (this.isDisposed = function () {
                return n.privIsDisposed;
              }),
              (this.dispose = function () {
                (n.privEventListeners = null), (n.privIsDisposed = !0);
              }),
              (this.privMetadata = t);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'metadata',
                get: function () {
                  return this.privMetadata;
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.NoMatch = 0)] = 'NoMatch'),
            (e[(e.Canceled = 1)] = 'Canceled'),
            (e[(e.RecognizingSpeech = 2)] = 'RecognizingSpeech'),
            (e[(e.RecognizedSpeech = 3)] = 'RecognizedSpeech'),
            (e[(e.RecognizedKeyword = 4)] = 'RecognizedKeyword'),
            (e[(e.RecognizingIntent = 5)] = 'RecognizingIntent'),
            (e[(e.RecognizedIntent = 6)] = 'RecognizedIntent'),
            (e[(e.TranslatingSpeech = 7)] = 'TranslatingSpeech'),
            (e[(e.TranslatedSpeech = 8)] = 'TranslatedSpeech'),
            (e[(e.SynthesizingAudio = 9)] = 'SynthesizingAudio'),
            (e[(e.SynthesizingAudioCompleted = 10)] = 'SynthesizingAudioCompleted'),
            (e[(e.SynthesizingAudioStarted = 11)] = 'SynthesizingAudioStarted'),
            (e[(e.EnrollingVoiceProfile = 12)] = 'EnrollingVoiceProfile'),
            (e[(e.EnrolledVoiceProfile = 13)] = 'EnrolledVoiceProfile'),
            (e[(e.RecognizedSpeakers = 14)] = 'RecognizedSpeakers'),
            (e[(e.RecognizedSpeaker = 15)] = 'RecognizedSpeaker'),
            (e[(e.ResetVoiceProfile = 16)] = 'ResetVoiceProfile'),
            (e[(e.DeletedVoiceProfile = 17)] = 'DeletedVoiceProfile');
        })(r || (r = {}));
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.NoError = 0)] = 'NoError'),
            (e[(e.AuthenticationFailure = 1)] = 'AuthenticationFailure'),
            (e[(e.BadRequestParameters = 2)] = 'BadRequestParameters'),
            (e[(e.TooManyRequests = 3)] = 'TooManyRequests'),
            (e[(e.ConnectionFailure = 4)] = 'ConnectionFailure'),
            (e[(e.ServiceTimeout = 5)] = 'ServiceTimeout'),
            (e[(e.ServiceError = 6)] = 'ServiceError'),
            (e[(e.RuntimeError = 7)] = 'RuntimeError');
        })(r || (r = {}));
    },
    ,
    function (e, t, n) {
      'use strict';
      var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null === e || void 0 === e) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
          for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, s, u = a(e), c = 1; c < arguments.length; c++) {
              for (var l in (n = Object(arguments[c]))) i.call(n, l) && (u[l] = n[l]);
              if (r) {
                s = r(n);
                for (var f = 0; f < s.length; f++) o.call(n, s[f]) && (u[s[f]] = n[s[f]]);
              }
            }
            return u;
          };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' === typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    ,
    function (e, t, n) {
      var r = n(142);
      (e.exports = h),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return s(o(e, t), t);
        }),
        (e.exports.tokensToFunction = s),
        (e.exports.tokensToRegExp = p);
      var i = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );
      function o(e, t) {
        for (var n, r = [], o = 0, a = 0, s = '', l = (t && t.delimiter) || '/'; null != (n = i.exec(e)); ) {
          var f = n[0],
            p = n[1],
            h = n.index;
          if (((s += e.slice(a, h)), (a = h + f.length), p)) s += p[1];
          else {
            var d = e[a],
              v = n[2],
              y = n[3],
              m = n[4],
              g = n[5],
              b = n[6],
              S = n[7];
            s && (r.push(s), (s = ''));
            var w = null != v && null != d && d !== v,
              k = '+' === b || '*' === b,
              C = '?' === b || '*' === b,
              O = n[2] || l,
              E = m || g;
            r.push({
              name: y || o++,
              prefix: v || '',
              delimiter: O,
              optional: C,
              repeat: k,
              partial: w,
              asterisk: !!S,
              pattern: E ? c(E) : S ? '.*' : '[^' + u(O) + ']+?',
            });
          }
        }
        return a < e.length && (s += e.substr(a)), s && r.push(s), r;
      }
      function a(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e, t) {
        for (var n = new Array(e.length), i = 0; i < e.length; i++)
          'object' === typeof e[i] && (n[i] = new RegExp('^(?:' + e[i].pattern + ')$', f(t)));
        return function (t, i) {
          for (var o = '', s = t || {}, u = (i || {}).pretty ? a : encodeURIComponent, c = 0; c < e.length; c++) {
            var l = e[c];
            if ('string' !== typeof l) {
              var f,
                p = s[l.name];
              if (null == p) {
                if (l.optional) {
                  l.partial && (o += l.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + l.name + '" to be defined');
              }
              if (r(p)) {
                if (!l.repeat)
                  throw new TypeError(
                    'Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(p) + '`'
                  );
                if (0 === p.length) {
                  if (l.optional) continue;
                  throw new TypeError('Expected "' + l.name + '" to not be empty');
                }
                for (var h = 0; h < p.length; h++) {
                  if (((f = u(p[h])), !n[c].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received `' +
                        JSON.stringify(f) +
                        '`'
                    );
                  o += (0 === h ? l.prefix : l.delimiter) + f;
                }
              } else {
                if (
                  ((f = l.asterisk
                    ? encodeURI(p).replace(/[?#]/g, function (e) {
                        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : u(p)),
                  !n[c].test(f))
                )
                  throw new TypeError(
                    'Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"'
                  );
                o += l.prefix + f;
              }
            } else o += l;
          }
          return o;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function c(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function l(e, t) {
        return (e.keys = t), e;
      }
      function f(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function p(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (var i = (n = n || {}).strict, o = !1 !== n.end, a = '', s = 0; s < e.length; s++) {
          var c = e[s];
          if ('string' === typeof c) a += u(c);
          else {
            var p = u(c.prefix),
              h = '(?:' + c.pattern + ')';
            t.push(c),
              c.repeat && (h += '(?:' + p + h + ')*'),
              (a += h =
                c.optional ? (c.partial ? p + '(' + h + ')?' : '(?:' + p + '(' + h + '))?') : p + '(' + h + ')');
          }
        }
        var d = u(n.delimiter || '/'),
          v = a.slice(-d.length) === d;
        return (
          i || (a = (v ? a.slice(0, -d.length) : a) + '(?:' + d + '(?=$))?'),
          (a += o ? '$' : i && v ? '' : '(?=' + d + '|$)'),
          l(new RegExp('^' + a, f(n)), t)
        );
      }
      function h(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return l(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], i = 0; i < e.length; i++) r.push(h(e[i], t, n).source);
                return l(new RegExp('(?:' + r.join('|') + ')', f(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return p(o(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return h;
      });
      var r,
        i = n(2),
        o = n.n(i),
        a = n(17),
        s = n(0),
        u = n(1),
        c = n(13),
        l = function e(t) {
          var n = this;
          if (
            (Object(s.a)(this, e),
            (this.privSubscriptionIdCounter = 0),
            (this.privAddSubscriptions = {}),
            (this.privRemoveSubscriptions = {}),
            (this.privDisposedSubscriptions = {}),
            (this.privDisposeReason = null),
            (this.get = function (e) {
              return n.throwIfDisposed(), n.privList[e];
            }),
            (this.first = function () {
              return n.get(0);
            }),
            (this.last = function () {
              return n.get(n.length() - 1);
            }),
            (this.add = function (e) {
              n.throwIfDisposed(), n.insertAt(n.privList.length, e);
            }),
            (this.insertAt = function (e, t) {
              n.throwIfDisposed(),
                0 === e
                  ? n.privList.unshift(t)
                  : e === n.privList.length
                  ? n.privList.push(t)
                  : n.privList.splice(e, 0, t),
                n.triggerSubscriptions(n.privAddSubscriptions);
            }),
            (this.removeFirst = function () {
              return n.throwIfDisposed(), n.removeAt(0);
            }),
            (this.removeLast = function () {
              return n.throwIfDisposed(), n.removeAt(n.length() - 1);
            }),
            (this.removeAt = function (e) {
              return n.throwIfDisposed(), n.remove(e, 1)[0];
            }),
            (this.remove = function (e, t) {
              n.throwIfDisposed();
              var r = n.privList.splice(e, t);
              return n.triggerSubscriptions(n.privRemoveSubscriptions), r;
            }),
            (this.clear = function () {
              n.throwIfDisposed(), n.remove(0, n.length());
            }),
            (this.length = function () {
              return n.throwIfDisposed(), n.privList.length;
            }),
            (this.onAdded = function (e) {
              n.throwIfDisposed();
              var t = n.privSubscriptionIdCounter++;
              return (
                (n.privAddSubscriptions[t] = e),
                {
                  detach: function () {
                    return delete n.privAddSubscriptions[t], Promise.resolve();
                  },
                }
              );
            }),
            (this.onRemoved = function (e) {
              n.throwIfDisposed();
              var t = n.privSubscriptionIdCounter++;
              return (
                (n.privRemoveSubscriptions[t] = e),
                {
                  detach: function () {
                    return delete n.privRemoveSubscriptions[t], Promise.resolve();
                  },
                }
              );
            }),
            (this.onDisposed = function (e) {
              n.throwIfDisposed();
              var t = n.privSubscriptionIdCounter++;
              return (
                (n.privDisposedSubscriptions[t] = e),
                {
                  detach: function () {
                    return delete n.privDisposedSubscriptions[t], Promise.resolve();
                  },
                }
              );
            }),
            (this.join = function (e) {
              return n.throwIfDisposed(), n.privList.join(e);
            }),
            (this.toArray = function () {
              var e = Array();
              return (
                n.privList.forEach(function (t) {
                  e.push(t);
                }),
                e
              );
            }),
            (this.any = function (e) {
              return n.throwIfDisposed(), e ? n.where(e).length() > 0 : n.length() > 0;
            }),
            (this.all = function (e) {
              return n.throwIfDisposed(), n.where(e).length() === n.length();
            }),
            (this.forEach = function (e) {
              n.throwIfDisposed();
              for (var t = 0; t < n.length(); t++) e(n.privList[t], t);
            }),
            (this.select = function (t) {
              n.throwIfDisposed();
              for (var r = [], i = 0; i < n.privList.length; i++) r.push(t(n.privList[i], i));
              return new e(r);
            }),
            (this.where = function (t) {
              n.throwIfDisposed();
              for (var r = new e(), i = 0; i < n.privList.length; i++) t(n.privList[i], i) && r.add(n.privList[i]);
              return r;
            }),
            (this.orderBy = function (t) {
              n.throwIfDisposed();
              var r = n.toArray().sort(t);
              return new e(r);
            }),
            (this.orderByDesc = function (e) {
              return (
                n.throwIfDisposed(),
                n.orderBy(function (t, n) {
                  return e(n, t);
                })
              );
            }),
            (this.clone = function () {
              return n.throwIfDisposed(), new e(n.toArray());
            }),
            (this.concat = function (t) {
              return n.throwIfDisposed(), new e(n.privList.concat(t.toArray()));
            }),
            (this.concatArray = function (t) {
              return n.throwIfDisposed(), new e(n.privList.concat(t));
            }),
            (this.isDisposed = function () {
              return null == n.privList;
            }),
            (this.dispose = function (e) {
              n.isDisposed() ||
                ((n.privDisposeReason = e),
                (n.privList = null),
                (n.privAddSubscriptions = null),
                (n.privRemoveSubscriptions = null),
                n.triggerSubscriptions(n.privDisposedSubscriptions));
            }),
            (this.throwIfDisposed = function () {
              if (n.isDisposed()) throw new c.c('List', n.privDisposeReason);
            }),
            (this.triggerSubscriptions = function (e) {
              if (e) for (var t in e) t && e[t]();
            }),
            (this.privList = []),
            t)
          ) {
            var r,
              i = Object(a.a)(t);
            try {
              for (i.s(); !(r = i.n()).done; ) {
                var o = r.value;
                this.privList.push(o);
              }
            } catch (u) {
              i.e(u);
            } finally {
              i.f();
            }
          }
        },
        f = n(42),
        p = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        (e[(e.Dequeue = 0)] = 'Dequeue'), (e[(e.Peek = 1)] = 'Peek');
      })(r || (r = {}));
      var h = (function () {
        function e(t) {
          var n = this;
          Object(s.a)(this, e),
            (this.privPromiseStore = new l()),
            (this.privIsDrainInProgress = !1),
            (this.privIsDisposing = !1),
            (this.privDisposeReason = null),
            (this.enqueue = function (e) {
              n.throwIfDispose(),
                n.enqueueFromPromise(
                  new Promise(function (t, n) {
                    t(e);
                  })
                );
            }),
            (this.enqueueFromPromise = function (e) {
              n.throwIfDispose(),
                e.then(
                  function (e) {
                    n.privList.add(e);
                  },
                  function (e) {}
                );
            }),
            (this.dequeue = function () {
              n.throwIfDispose();
              var e = new f.a();
              return (
                n.privSubscribers && (n.privSubscribers.add({ deferral: e, type: r.Dequeue }), n.drain()), e.promise
              );
            }),
            (this.peek = function () {
              n.throwIfDispose();
              var e = new f.a();
              return n.privSubscribers && (n.privSubscribers.add({ deferral: e, type: r.Peek }), n.drain()), e.promise;
            }),
            (this.length = function () {
              return n.throwIfDispose(), n.privList.length();
            }),
            (this.isDisposed = function () {
              return null == n.privSubscribers;
            }),
            (this.drain = function () {
              if (!n.privIsDrainInProgress && !n.privIsDisposing) {
                n.privIsDrainInProgress = !0;
                var e = n.privSubscribers,
                  t = n.privList;
                if (e && t) {
                  for (; t.length() > 0 && e.length() > 0 && !n.privIsDisposing; ) {
                    var i = e.removeFirst();
                    if (i.type === r.Peek) i.deferral.resolve(t.first());
                    else {
                      var o = t.removeFirst();
                      i.deferral.resolve(o);
                    }
                  }
                  n.privSubscribers === e && (n.privSubscribers = e), n.privList === t && (n.privList = t);
                }
                n.privIsDrainInProgress = !1;
              }
            }),
            (this.throwIfDispose = function () {
              if (n.isDisposed()) {
                if (n.privDisposeReason) throw new c.b(n.privDisposeReason);
                throw new c.c('Queue');
              }
              if (n.privIsDisposing) throw new c.b('Queue disposing');
            }),
            (this.privList = t || new l()),
            (this.privDetachables = []),
            (this.privSubscribers = new l()),
            this.privDetachables.push(this.privList.onAdded(this.drain));
        }
        return (
          Object(u.a)(e, [
            {
              key: 'drainAndDispose',
              value: function (e, t) {
                return p(
                  this,
                  void 0,
                  void 0,
                  o.a.mark(function n() {
                    var r,
                      i,
                      s,
                      u,
                      c,
                      l = this;
                    return o.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (this.isDisposed() || this.privIsDisposing) {
                                n.next = 30;
                                break;
                              }
                              if (
                                ((this.privDisposeReason = t), (this.privIsDisposing = !0), (r = this.privSubscribers))
                              ) {
                                for (; r.length() > 0; ) r.removeFirst().deferral.resolve(void 0);
                                this.privSubscribers === r && (this.privSubscribers = r);
                              }
                              (i = Object(a.a)(this.privDetachables)), (n.prev = 6), i.s();
                            case 8:
                              if ((s = i.n()).done) {
                                n.next = 14;
                                break;
                              }
                              return (u = s.value), (n.next = 12), u.detach();
                            case 12:
                              n.next = 8;
                              break;
                            case 14:
                              n.next = 19;
                              break;
                            case 16:
                              (n.prev = 16), (n.t0 = n.catch(6)), i.e(n.t0);
                            case 19:
                              return (n.prev = 19), i.f(), n.finish(19);
                            case 22:
                              if (!(this.privPromiseStore.length() > 0 && e)) {
                                n.next = 28;
                                break;
                              }
                              return (
                                (c = []),
                                this.privPromiseStore.toArray().forEach(function (e) {
                                  c.push(e);
                                }),
                                n.abrupt(
                                  'return',
                                  Promise.all(c)
                                    .finally(function () {
                                      (l.privSubscribers = null),
                                        l.privList.forEach(function (t, n) {
                                          e(t);
                                        }),
                                        (l.privList = null);
                                    })
                                    .then()
                                )
                              );
                            case 28:
                              (this.privSubscribers = null), (this.privList = null);
                            case 30:
                            case 'end':
                              return n.stop();
                          }
                      },
                      n,
                      this,
                      [[6, 16, 19, 22]]
                    );
                  })
                );
              },
            },
            {
              key: 'dispose',
              value: function (e) {
                return p(
                  this,
                  void 0,
                  void 0,
                  o.a.mark(function t() {
                    return o.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.drainAndDispose(null, e);
                            case 2:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n(0),
        i = n(1),
        o = n(13),
        a = n(51),
        s = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(i.a)(e, null, [
              {
                key: 'instance',
                get: function () {
                  return e.privInstance;
                },
              },
            ]),
            e
          );
        })();
      (s.privInstance = new a.a()),
        (s.setEventSource = function (e) {
          if (!e) throw new o.a('eventSource');
          s.privInstance = e;
        });
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.Error = 0)] = 'Error'), (e[(e.EndOfStream = 1)] = 'EndOfStream');
        })(r || (r = {}));
    },
    ,
    function (e, t) {
      var n =
        ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        e.exports = function () {
          return n(r), r;
        };
      } else {
        var i = new Array(16);
        e.exports = function () {
          for (var e, t = 0; t < 16; t++)
            0 === (3 & t) && (e = 4294967296 * Math.random()), (i[t] = (e >>> ((3 & t) << 3)) & 255);
          return i;
        };
      }
    },
    function (e, t) {
      for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
      e.exports = function (e, t) {
        var r = t || 0,
          i = n;
        return [
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          '-',
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
        ].join('');
      };
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        var r = n(135),
          i = n(136),
          o = n(137);
        function a() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function s(e, t) {
          if (a() < t) throw new RangeError('Invalid typed array length');
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
              : (null === e && (e = new u(t)), (e.length = t)),
            e
          );
        }
        function u(e, t, n) {
          if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u)) return new u(e, t, n);
          if ('number' === typeof e) {
            if ('string' === typeof t)
              throw new Error('If encoding is specified then the first argument must be a string');
            return f(this, e);
          }
          return c(this, e, t, n);
        }
        function c(e, t, n, r) {
          if ('number' === typeof t) throw new TypeError('"value" argument must not be a number');
          return 'undefined' !== typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, n, r) {
                if ((t.byteLength, n < 0 || t.byteLength < n)) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(t)
                    : void 0 === r
                    ? new Uint8Array(t, n)
                    : new Uint8Array(t, n, r);
                u.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = u.prototype) : (e = p(e, t));
                return e;
              })(e, t, n, r)
            : 'string' === typeof t
            ? (function (e, t, n) {
                ('string' === typeof n && '' !== n) || (n = 'utf8');
                if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | d(t, n),
                  i = (e = s(e, r)).write(t, n);
                i !== r && (e = e.slice(0, i));
                return e;
              })(e, t, n)
            : (function (e, t) {
                if (u.isBuffer(t)) {
                  var n = 0 | h(t.length);
                  return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
                }
                if (t) {
                  if (('undefined' !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || 'length' in t)
                    return 'number' !== typeof t.length || (r = t.length) !== r ? s(e, 0) : p(e, t);
                  if ('Buffer' === t.type && o(t.data)) return p(e, t.data);
                }
                var r;
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                );
              })(e, t);
        }
        function l(e) {
          if ('number' !== typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative');
        }
        function f(e, t) {
          if ((l(t), (e = s(e, t < 0 ? 0 : 0 | h(t))), !u.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < t; ++n) e[n] = 0;
          return e;
        }
        function p(e, t) {
          var n = t.length < 0 ? 0 : 0 | h(t.length);
          e = s(e, n);
          for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
          return e;
        }
        function h(e) {
          if (e >= a())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' + a().toString(16) + ' bytes'
            );
          return 0 | e;
        }
        function d(e, t) {
          if (u.isBuffer(e)) return e.length;
          if (
            'undefined' !== typeof ArrayBuffer &&
            'function' === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          'string' !== typeof e && (e = '' + e);
          var n = e.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (t) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return U(e).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n;
              case 'hex':
                return n >>> 1;
              case 'base64':
                return q(e).length;
              default:
                if (r) return U(e).length;
                (t = ('' + t).toLowerCase()), (r = !0);
            }
        }
        function v(e, t, n) {
          var r = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return '';
          if ((n >>>= 0) <= (t >>>= 0)) return '';
          for (e || (e = 'utf8'); ; )
            switch (e) {
              case 'hex':
                return I(this, t, n);
              case 'utf8':
              case 'utf-8':
                return P(this, t, n);
              case 'ascii':
                return R(this, t, n);
              case 'latin1':
              case 'binary':
                return T(this, t, n);
              case 'base64':
                return E(this, t, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return A(this, t, n);
              default:
                if (r) throw new TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (r = !0);
            }
        }
        function y(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function m(e, t, n, r, i) {
          if (0 === e.length) return -1;
          if (
            ('string' === typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (i) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (('string' === typeof t && (t = u.from(t, r)), u.isBuffer(t)))
            return 0 === t.length ? -1 : g(e, t, n, r, i);
          if ('number' === typeof t)
            return (
              (t &= 255),
              u.TYPED_ARRAY_SUPPORT && 'function' === typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : g(e, [t], n, r, i)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function g(e, t, n, r, i) {
          var o,
            a = 1,
            s = e.length,
            u = t.length;
          if (
            void 0 !== r &&
            ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (a = 2), (s /= 2), (u /= 2), (n /= 2);
          }
          function c(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }
          if (i) {
            var l = -1;
            for (o = n; o < s; o++)
              if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === u)) return l * a;
              } else -1 !== l && (o -= o - l), (l = -1);
          } else
            for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
              for (var f = !0, p = 0; p < u; p++)
                if (c(e, o + p) !== c(t, p)) {
                  f = !1;
                  break;
                }
              if (f) return o;
            }
          return -1;
        }
        function b(e, t, n, r) {
          n = Number(n) || 0;
          var i = e.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = t.length;
          if (o % 2 !== 0) throw new TypeError('Invalid hex string');
          r > o / 2 && (r = o / 2);
          for (var a = 0; a < r; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            e[n + a] = s;
          }
          return a;
        }
        function S(e, t, n, r) {
          return W(U(t, e.length - n), e, n, r);
        }
        function w(e, t, n, r) {
          return W(
            (function (e) {
              for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function k(e, t, n, r) {
          return w(e, t, n, r);
        }
        function C(e, t, n, r) {
          return W(q(t), e, n, r);
        }
        function O(e, t, n, r) {
          return W(
            (function (e, t) {
              for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                (r = (n = e.charCodeAt(a)) >> 8), (i = n % 256), o.push(i), o.push(r);
              return o;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function E(e, t, n) {
          return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
        }
        function P(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], i = t; i < n; ) {
            var o,
              a,
              s,
              u,
              c = e[i],
              l = null,
              f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + f <= n)
              switch (f) {
                case 1:
                  c < 128 && (l = c);
                  break;
                case 2:
                  128 === (192 & (o = e[i + 1])) && (u = ((31 & c) << 6) | (63 & o)) > 127 && (l = u);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (a = e[i + 2]),
                    128 === (192 & o) &&
                      128 === (192 & a) &&
                      (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 &&
                      (u < 55296 || u > 57343) &&
                      (l = u);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (a = e[i + 2]),
                    (s = e[i + 3]),
                    128 === (192 & o) &&
                      128 === (192 & a) &&
                      128 === (192 & s) &&
                      (u = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 &&
                      u < 1114112 &&
                      (l = u);
              }
            null === l
              ? ((l = 65533), (f = 1))
              : l > 65535 && ((l -= 65536), r.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
              r.push(l),
              (i += f);
          }
          return (function (e) {
            var t = e.length;
            if (t <= x) return String.fromCharCode.apply(String, e);
            var n = '',
              r = 0;
            for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += x)));
            return n;
          })(r);
        }
        (t.Buffer = u),
          (t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return u.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === e.foo() && 'function' === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = a()),
          (u.poolSize = 8192),
          (u._augment = function (e) {
            return (e.__proto__ = u.prototype), e;
          }),
          (u.from = function (e, t, n) {
            return c(null, e, t, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            'undefined' !== typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })),
          (u.alloc = function (e, t, n) {
            return (function (e, t, n, r) {
              return (
                l(t),
                t <= 0
                  ? s(e, t)
                  : void 0 !== n
                  ? 'string' === typeof r
                    ? s(e, t).fill(n, r)
                    : s(e, t).fill(n)
                  : s(e, t)
              );
            })(null, e, t, n);
          }),
          (u.allocUnsafe = function (e) {
            return f(null, e);
          }),
          (u.allocUnsafeSlow = function (e) {
            return f(null, e);
          }),
          (u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError('Arguments must be Buffers');
            if (e === t) return 0;
            for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
              if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t),
              i = 0;
            for (n = 0; n < e.length; ++n) {
              var a = e[n];
              if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
              a.copy(r, i), (i += a.length);
            }
            return r;
          }),
          (u.byteLength = d),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var t = 0; t < e; t += 2) y(this, t, t + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var t = 0; t < e; t += 8)
              y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e ? '' : 0 === arguments.length ? P(this, 0, e) : v.apply(this, arguments);
          }),
          (u.prototype.equals = function (e) {
            if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
            return this === e || 0 === u.compare(this, e);
          }),
          (u.prototype.inspect = function () {
            var e = '',
              n = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString('hex', 0, n).match(/.{2}/g).join(' ')), this.length > n && (e += ' ... ')),
              '<Buffer ' + e + '>'
            );
          }),
          (u.prototype.compare = function (e, t, n, r, i) {
            if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              t < 0 || n > e.length || r < 0 || i > this.length)
            )
              throw new RangeError('out of range index');
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (r >>>= 0),
                a = (n >>>= 0) - (t >>>= 0),
                s = Math.min(o, a),
                c = this.slice(r, i),
                l = e.slice(t, n),
                f = 0;
              f < s;
              ++f
            )
              if (c[f] !== l[f]) {
                (o = c[f]), (a = l[f]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (u.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (u.prototype.indexOf = function (e, t, n) {
            return m(this, e, t, n, !0);
          }),
          (u.prototype.lastIndexOf = function (e, t, n) {
            return m(this, e, t, n, !1);
          }),
          (u.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
            else if (void 0 === n && 'string' === typeof t) (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
              (t |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0));
            }
            var i = this.length - t;
            if (((void 0 === n || n > i) && (n = i), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
              throw new RangeError('Attempt to write outside buffer bounds');
            r || (r = 'utf8');
            for (var o = !1; ; )
              switch (r) {
                case 'hex':
                  return b(this, e, t, n);
                case 'utf8':
                case 'utf-8':
                  return S(this, e, t, n);
                case 'ascii':
                  return w(this, e, t, n);
                case 'latin1':
                case 'binary':
                  return k(this, e, t, n);
                case 'base64':
                  return C(this, e, t, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return O(this, e, t, n);
                default:
                  if (o) throw new TypeError('Unknown encoding: ' + r);
                  (r = ('' + r).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        var x = 4096;
        function R(e, t, n) {
          var r = '';
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
          return r;
        }
        function T(e, t, n) {
          var r = '';
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
          return r;
        }
        function I(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = '', o = t; o < n; ++o) i += F(e[o]);
          return i;
        }
        function A(e, t, n) {
          for (var r = e.slice(t, n), i = '', o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function _(e, t, n) {
          if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint');
          if (e + t > n) throw new RangeError('Trying to access beyond buffer length');
        }
        function j(e, t, n, r, i, o) {
          if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError('Index out of range');
        }
        function M(e, t, n, r) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
            e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function D(e, t, n, r) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function L(e, t, n, r, i, o) {
          if (n + r > e.length) throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('Index out of range');
        }
        function z(e, t, n, r, o) {
          return o || L(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
        }
        function N(e, t, n, r, o) {
          return o || L(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function (e, t) {
          var n,
            r = this.length;
          if (
            ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var i = t - e;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + e];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || _(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
            return r;
          }),
          (u.prototype.readUIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || _(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
            return r;
          }),
          (u.prototype.readUInt8 = function (e, t) {
            return t || _(e, 1, this.length), this[e];
          }),
          (u.prototype.readUInt16LE = function (e, t) {
            return t || _(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (e, t) {
            return t || _(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (u.prototype.readUInt32LE = function (e, t) {
            return (
              t || _(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (e, t) {
            return (
              t || _(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (u.prototype.readIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || _(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (u.prototype.readIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || _(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); ) o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (u.prototype.readInt8 = function (e, t) {
            return t || _(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
          }),
          (u.prototype.readInt16LE = function (e, t) {
            t || _(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function (e, t) {
            t || _(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function (e, t) {
            return t || _(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
          }),
          (u.prototype.readInt32BE = function (e, t) {
            return t || _(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
          }),
          (u.prototype.readFloatLE = function (e, t) {
            return t || _(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (e, t) {
            return t || _(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (e, t) {
            return t || _(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (e, t) {
            return t || _(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256); ) this[t + o] = (e / i) & 255;
            return t + n;
          }),
          (u.prototype.writeUIntBE = function (e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = (e / o) & 255;
            return t + n;
          }),
          (u.prototype.writeUInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : M(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : M(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e))
                : D(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
                : D(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              j(this, e, t, n, i - 1, -i);
            }
            var o = 0,
              a = 1,
              s = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255);
            return t + n;
          }),
          (u.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              j(this, e, t, n, i - 1, -i);
            }
            var o = n - 1,
              a = 1,
              s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255);
            return t + n;
          }),
          (u.prototype.writeInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : M(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : M(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24))
                : D(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || j(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
                : D(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeFloatLE = function (e, t, n) {
            return z(this, e, t, !0, n);
          }),
          (u.prototype.writeFloatBE = function (e, t, n) {
            return z(this, e, t, !1, n);
          }),
          (u.prototype.writeDoubleLE = function (e, t, n) {
            return N(this, e, t, !0, n);
          }),
          (u.prototype.writeDoubleBE = function (e, t, n) {
            return N(this, e, t, !1, n);
          }),
          (u.prototype.copy = function (e, t, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError('targetStart out of bounds');
            if (n < 0 || n >= this.length) throw new RangeError('sourceStart out of bounds');
            if (r < 0) throw new RangeError('sourceEnd out of bounds');
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var i,
              o = r - n;
            if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o;
          }),
          (u.prototype.fill = function (e, t, n, r) {
            if ('string' === typeof e) {
              if (
                ('string' === typeof t
                  ? ((r = t), (t = 0), (n = this.length))
                  : 'string' === typeof n && ((r = n), (n = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== r && 'string' !== typeof r) throw new TypeError('encoding must be a string');
              if ('string' === typeof r && !u.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r);
            } else 'number' === typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
            if (n <= t) return this;
            var o;
            if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' === typeof e))
              for (o = t; o < n; ++o) this[o] = e;
            else {
              var a = u.isBuffer(e) ? e : U(new u(e, r).toString()),
                s = a.length;
              for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
            }
            return this;
          });
        var B = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
          return e < 16 ? '0' + e.toString(16) : e.toString(16);
        }
        function U(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((t -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point');
              if ((t -= 4) < 0) break;
              o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
            }
          }
          return o;
        }
        function q(e) {
          return r.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
                })(e).replace(B, '')).length < 2
              )
                return '';
              for (; e.length % 4 !== 0; ) e += '=';
              return e;
            })(e)
          );
        }
        function W(e, t, n, r) {
          for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
          return i;
        }
      }.call(this, n(56)));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n(17),
        i = n(0),
        o = n(42),
        a = n(25),
        s = n(101),
        u = function e() {
          var t = this;
          Object(i.a)(this, e),
            (this.toConnectionMessage = function (e) {
              var n = new o.a();
              try {
                if (e.messageType === a.b.Text) {
                  var r = e.textContent,
                    i = {},
                    s = null;
                  if (r) {
                    var u = r.split('\r\n\r\n');
                    u && u.length > 0 && ((i = t.parseHeaders(u[0])), u.length > 1 && (s = u[1]));
                  }
                  n.resolve(new a.a(e.messageType, s, i, e.id));
                } else if (e.messageType === a.b.Binary) {
                  var c,
                    l = e.binaryContent,
                    f = null;
                  if (!l || l.byteLength < 2) throw new Error('Invalid binary message format. Header length missing.');
                  var p = new DataView(l),
                    h = p.getInt16(0);
                  if (l.byteLength < h + 2) throw new Error('Invalid binary message format. Header content missing.');
                  for (var d = '', v = 0; v < h; v++) d += String.fromCharCode(p.getInt8(v + 2));
                  (c = t.parseHeaders(d)),
                    l.byteLength > h + 2 && (f = l.slice(2 + h)),
                    n.resolve(new a.a(e.messageType, f, c, e.id));
                }
              } catch (y) {
                n.reject('Error formatting the message. Error: '.concat(y));
              }
              return n.promise;
            }),
            (this.fromConnectionMessage = function (e) {
              var n = new o.a();
              try {
                if (e.messageType === a.b.Text) {
                  var r = ''
                    .concat(t.makeHeaders(e))
                    .concat('\r\n')
                    .concat(e.textBody ? e.textBody : '');
                  n.resolve(new s.a(a.b.Text, r, e.id));
                } else if (e.messageType === a.b.Binary) {
                  var i = t.makeHeaders(e),
                    u = e.binaryBody,
                    c = t.stringToArrayBuffer(i),
                    l = new Int8Array(c),
                    f = l.byteLength,
                    p = new Int8Array(2 + f + (u ? u.byteLength : 0));
                  if (((p[0] = (f >> 8) & 255), (p[1] = 255 & f), p.set(l, 2), u)) {
                    var h = new Int8Array(u);
                    p.set(h, 2 + f);
                  }
                  var d = p.buffer;
                  n.resolve(new s.a(a.b.Binary, d, e.id));
                }
              } catch (v) {
                n.reject('Error formatting the message. '.concat(v));
              }
              return n.promise;
            }),
            (this.makeHeaders = function (e) {
              var t = '';
              if (e.headers)
                for (var n in e.headers) n && (t += ''.concat(n, ': ').concat(e.headers[n]).concat('\r\n'));
              return t;
            }),
            (this.parseHeaders = function (e) {
              var t = {};
              if (e) {
                var n = e.match(/[^\r\n]+/g);
                if (t) {
                  var i,
                    o = Object(r.a)(n);
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var a = i.value;
                      if (a) {
                        var s = a.indexOf(':'),
                          u = s > 0 ? a.substr(0, s).trim().toLowerCase() : a,
                          c = s > 0 && a.length > s + 1 ? a.substr(s + 1).trim() : '';
                        t[u] = c;
                      }
                    }
                  } catch (l) {
                    o.e(l);
                  } finally {
                    o.f();
                  }
                }
              }
              return t;
            }),
            (this.stringToArrayBuffer = function (e) {
              for (var t = new ArrayBuffer(e.length), n = new DataView(t), r = 0; r < e.length; r++)
                n.setUint8(r, e.charCodeAt(r));
              return t;
            });
        };
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n(0),
        i = n(1),
        o = n(48),
        a = (function () {
          function e(t) {
            Object(r.a)(this, e),
              (this.privTranslationHypothesis = JSON.parse(t)),
              (this.privTranslationHypothesis.Translation.TranslationStatus =
                o.a[this.privTranslationHypothesis.Translation.TranslationStatus]);
          }
          return (
            Object(i.a)(
              e,
              [
                {
                  key: 'Duration',
                  get: function () {
                    return this.privTranslationHypothesis.Duration;
                  },
                },
                {
                  key: 'Offset',
                  get: function () {
                    return this.privTranslationHypothesis.Offset;
                  },
                },
                {
                  key: 'Text',
                  get: function () {
                    return this.privTranslationHypothesis.Text;
                  },
                },
                {
                  key: 'Translation',
                  get: function () {
                    return this.privTranslationHypothesis.Translation;
                  },
                },
              ],
              [
                {
                  key: 'fromJSON',
                  value: function (t) {
                    return new e(t);
                  },
                },
              ]
            ),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n(0),
        i = n(1),
        o = n(20),
        a = n(48),
        s = (function () {
          function e(t) {
            Object(r.a)(this, e),
              (this.privTranslationPhrase = JSON.parse(t)),
              (this.privTranslationPhrase.RecognitionStatus = o.a[this.privTranslationPhrase.RecognitionStatus]),
              void 0 !== this.privTranslationPhrase.Translation &&
                (this.privTranslationPhrase.Translation.TranslationStatus =
                  a.a[this.privTranslationPhrase.Translation.TranslationStatus]);
          }
          return (
            Object(i.a)(
              e,
              [
                {
                  key: 'RecognitionStatus',
                  get: function () {
                    return this.privTranslationPhrase.RecognitionStatus;
                  },
                },
                {
                  key: 'Offset',
                  get: function () {
                    return this.privTranslationPhrase.Offset;
                  },
                },
                {
                  key: 'Duration',
                  get: function () {
                    return this.privTranslationPhrase.Duration;
                  },
                },
                {
                  key: 'Text',
                  get: function () {
                    return this.privTranslationPhrase.Text;
                  },
                },
                {
                  key: 'Translation',
                  get: function () {
                    return this.privTranslationPhrase.Translation;
                  },
                },
              ],
              [
                {
                  key: 'fromJSON',
                  value: function (t) {
                    return new e(t);
                  },
                },
              ]
            ),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var r = n(0),
        i = n(1),
        o = n(52),
        a = n(62),
        s = n(53),
        u = n(20),
        c = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(i.a)(e, null, [
              {
                key: 'implTranslateRecognitionResult',
                value: function (e) {
                  var t = o.a.Canceled;
                  switch (e) {
                    case u.a.Success:
                      t = o.a.RecognizedSpeech;
                      break;
                    case u.a.NoMatch:
                    case u.a.InitialSilenceTimeout:
                    case u.a.BabbleTimeout:
                    case u.a.EndOfDictation:
                      t = o.a.NoMatch;
                      break;
                    case u.a.Error:
                    default:
                      t = o.a.Canceled;
                  }
                  return t;
                },
              },
              {
                key: 'implTranslateCancelResult',
                value: function (e) {
                  var t = a.a.EndOfStream;
                  switch (e) {
                    case u.a.Success:
                    case u.a.EndOfDictation:
                    case u.a.NoMatch:
                      t = a.a.EndOfStream;
                      break;
                    case u.a.InitialSilenceTimeout:
                    case u.a.BabbleTimeout:
                    case u.a.Error:
                    default:
                      t = a.a.Error;
                  }
                  return t;
                },
              },
              {
                key: 'implTranslateCancelErrorCode',
                value: function (e) {
                  var t = s.a.NoError;
                  switch (e) {
                    case u.a.Error:
                      t = s.a.ServiceError;
                      break;
                    case u.a.TooManyRequests:
                      t = s.a.TooManyRequests;
                      break;
                    default:
                      t = s.a.NoError;
                  }
                  return t;
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n(0),
        i = n(1),
        o = n(20),
        a = (function () {
          function e(t) {
            Object(r.a)(this, e),
              (this.privSynthesisEnd = JSON.parse(t)),
              (this.privSynthesisEnd.SynthesisStatus = o.b[this.privSynthesisEnd.SynthesisStatus]);
          }
          return (
            Object(i.a)(
              e,
              [
                {
                  key: 'SynthesisStatus',
                  get: function () {
                    return this.privSynthesisEnd.SynthesisStatus;
                  },
                },
                {
                  key: 'FailureReason',
                  get: function () {
                    return this.privSynthesisEnd.FailureReason;
                  },
                },
              ],
              [
                {
                  key: 'fromJSON',
                  value: function (t) {
                    return new e(t);
                  },
                },
              ]
            ),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'addPhrase',
                value: function (e) {
                  this.privPhrases || (this.privPhrases = []),
                    e instanceof Array ? (this.privPhrases = this.privPhrases.concat(e)) : this.privPhrases.push(e);
                },
              },
              {
                key: 'clearPhrases',
                value: function () {
                  this.privPhrases = void 0;
                },
              },
              {
                key: 'addReferenceGrammar',
                value: function (e) {
                  this.privGrammars || (this.privGrammars = []),
                    e instanceof Array ? (this.privGrammars = this.privGrammars.concat(e)) : this.privGrammars.push(e);
                },
              },
              {
                key: 'clearGrammars',
                value: function () {
                  this.privGrammars = void 0;
                },
              },
              {
                key: 'generateGrammarObject',
                value: function () {
                  if (void 0 !== this.privGrammars || void 0 !== this.privPhrases) {
                    var e = {};
                    if (
                      ((e.ReferenceGrammars = this.privGrammars),
                      void 0 !== this.privPhrases && 0 !== this.privPhrases.length)
                    ) {
                      var t = [];
                      this.privPhrases.forEach(function (e, n, r) {
                        t.push({ Text: e });
                      }),
                        (e.Groups = [{ Type: 'Generic', Items: t }]);
                    }
                    return e;
                  }
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e(t) {
            Object(r.a)(this, e), (this.privContext = {}), (this.privDynamicGrammar = t);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'setSection',
                value: function (e, t) {
                  this.privContext[e] = t;
                },
              },
              {
                key: 'setPronunciationAssessmentParams',
                value: function (e) {
                  void 0 === this.privContext.phraseDetection &&
                    (this.privContext.phraseDetection = { enrichment: { pronunciationAssessment: {} } }),
                    (this.privContext.phraseDetection.enrichment.pronunciationAssessment = JSON.parse(e)),
                    void 0 === this.privContext.phraseOutput &&
                      (this.privContext.phraseOutput = { detailed: { options: [] }, format: {} }),
                    (this.privContext.phraseOutput.format = 'Detailed'),
                    this.privContext.phraseOutput.detailed.options.push('PronunciationAssessment'),
                    -1 === this.privContext.phraseOutput.detailed.options.indexOf('WordTimings') &&
                      this.privContext.phraseOutput.detailed.options.push('WordTimings'),
                    -1 === this.privContext.phraseOutput.detailed.options.indexOf('SNR') &&
                      this.privContext.phraseOutput.detailed.options.push('SNR');
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  var e = this.privDynamicGrammar.generateGrammarObject();
                  return this.setSection('dgi', e), JSON.stringify(this.privContext);
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'toJsonString',
                value: function () {
                  return JSON.stringify(this.iPrivConfig);
                },
              },
              {
                key: 'get',
                value: function () {
                  return this.iPrivConfig;
                },
              },
              {
                key: 'set',
                value: function (e) {
                  this.iPrivConfig = e;
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e(t) {
            Object(r.a)(this, e), (this.privSpeechStartDetected = JSON.parse(t));
          }
          return (
            Object(i.a)(
              e,
              [
                {
                  key: 'Offset',
                  get: function () {
                    return this.privSpeechStartDetected.Offset;
                  },
                },
              ],
              [
                {
                  key: 'fromJSON',
                  value: function (t) {
                    return new e(t);
                  },
                },
              ]
            ),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e(t) {
            Object(r.a)(this, e), (this.privContext = {}), (this.privSpeechSynthesizer = t);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'setSection',
                value: function (e, t) {
                  this.privContext[e] = t;
                },
              },
              {
                key: 'audioOutputFormat',
                set: function (e) {
                  this.privAudioOutputFormat = e;
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  var e = this.buildSynthesisContext();
                  return this.setSection('synthesis', e), JSON.stringify(this.privContext);
                },
              },
              {
                key: 'buildSynthesisContext',
                value: function () {
                  return {
                    audio: {
                      metadataOptions: {
                        bookmarkEnabled: !!this.privSpeechSynthesizer.bookmarkReached,
                        sentenceBoundaryEnabled: !1,
                        visemeEnabled: !!this.privSpeechSynthesizer.visemeReceived,
                        wordBoundaryEnabled: !!this.privSpeechSynthesizer.wordBoundary,
                      },
                      outputFormat: this.privAudioOutputFormat.requestAudioFormatString,
                    },
                    language: { autoDetection: this.privSpeechSynthesizer.autoDetectSourceLanguage },
                  };
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return a;
        });
      var r,
        i = n(0),
        o = n(1);
      !(function (e) {
        (e.WordBoundary = 'WordBoundary'), (e.Bookmark = 'Bookmark'), (e.Viseme = 'Viseme');
      })(r || (r = {}));
      var a = (function () {
        function e(t) {
          Object(i.a)(this, e), (this.privSynthesisAudioMetadata = JSON.parse(t));
        }
        return (
          Object(o.a)(
            e,
            [
              {
                key: 'Metadata',
                get: function () {
                  return this.privSynthesisAudioMetadata.Metadata;
                },
              },
            ],
            [
              {
                key: 'fromJSON',
                value: function (t) {
                  return new e(t);
                },
              },
            ]
          ),
          e
        );
      })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n(0),
        i = n(13),
        o = n(18),
        a = n(32),
        s = function e(t) {
          var n = this;
          if (
            (Object(r.a)(this, e),
            (this.fetch = function (e) {
              return Promise.resolve(n.privAuthInfo);
            }),
            (this.fetchOnExpiry = function (e) {
              return Promise.resolve(n.privAuthInfo);
            }),
            !t)
          )
            throw new i.a('subscriptionKey');
          this.privAuthInfo = new a.a(o.a.AuthKey, t);
        };
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n(0),
        i = n(13),
        o = n(32),
        a = 'Authorization',
        s = function e(t, n) {
          var s = this;
          if (
            (Object(r.a)(this, e),
            (this.fetch = function (e) {
              return s.privFetchCallback(e).then(function (e) {
                return new o.a(a, e);
              });
            }),
            (this.fetchOnExpiry = function (e) {
              return s.privFetchOnExpiryCallback(e).then(function (e) {
                return new o.a(a, e);
              });
            }),
            !t)
          )
            throw new i.a('fetchCallback');
          if (!n) throw new i.a('fetchOnExpiryCallback');
          (this.privFetchCallback = t), (this.privFetchOnExpiryCallback = n);
        };
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return _;
      });
      var r = n(17),
        i = n(2),
        o = n.n(i),
        a = n(0),
        s = n(1),
        u = n(47),
        c = n(3),
        l = n(4),
        f = n(25),
        p = n(48),
        h = n(86),
        d = n(41),
        v = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, r, i, o, s, u, c, l, f) {
            var p;
            return (
              Object(a.a)(this, n),
              ((p = t.call(this, r, i, o, s, u, void 0, void 0, void 0, c, l, f)).privTranslations = e),
              p
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: 'translations',
                get: function () {
                  return this.privTranslations;
                },
              },
            ]),
            n
          );
        })(
          (function (e) {
            Object(c.a)(n, e);
            var t = Object(l.a)(n);
            function n(e, r, i, o, s, u, c, l, f, p, h) {
              var d;
              return Object(a.a)(this, n), ((d = t.call(this, e, r, i, o, s, u, c, f, p, h)).privSpeakerId = l), d;
            }
            return (
              Object(s.a)(n, [
                {
                  key: 'speakerId',
                  get: function () {
                    return this.privSpeakerId;
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              function e(t, n, r, i, o, s, u, c, l, f) {
                Object(a.a)(this, e),
                  (this.privResultId = t),
                  (this.privReason = n),
                  (this.privText = r),
                  (this.privDuration = i),
                  (this.privOffset = o),
                  (this.privLanguage = s),
                  (this.privLanguageDetectionConfidence = u),
                  (this.privErrorDetails = c),
                  (this.privJson = l),
                  (this.privProperties = f);
              }
              return (
                Object(s.a)(e, [
                  {
                    key: 'resultId',
                    get: function () {
                      return this.privResultId;
                    },
                  },
                  {
                    key: 'reason',
                    get: function () {
                      return this.privReason;
                    },
                  },
                  {
                    key: 'text',
                    get: function () {
                      return this.privText;
                    },
                  },
                  {
                    key: 'duration',
                    get: function () {
                      return this.privDuration;
                    },
                  },
                  {
                    key: 'offset',
                    get: function () {
                      return this.privOffset;
                    },
                  },
                  {
                    key: 'language',
                    get: function () {
                      return this.privLanguage;
                    },
                  },
                  {
                    key: 'languageDetectionConfidence',
                    get: function () {
                      return this.privLanguageDetectionConfidence;
                    },
                  },
                  {
                    key: 'errorDetails',
                    get: function () {
                      return this.privErrorDetails;
                    },
                  },
                  {
                    key: 'json',
                    get: function () {
                      return this.privJson;
                    },
                  },
                  {
                    key: 'properties',
                    get: function () {
                      return this.privProperties;
                    },
                  },
                ]),
                e
              );
            })()
          )
        ),
        y = n(52),
        m = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, r, i) {
            var o;
            return Object(a.a)(this, n), ((o = t.call(this, r, i)).privResult = e), o;
          }
          return (
            Object(s.a)(n, [
              {
                key: 'result',
                get: function () {
                  return this.privResult;
                },
              },
            ]),
            n
          );
        })(n(155).a),
        g = (function () {
          function e(t, n) {
            Object(a.a)(this, e), (this.privReason = t), (this.privAudio = n);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'audio',
                get: function () {
                  return this.privAudio;
                },
              },
              {
                key: 'reason',
                get: function () {
                  return this.privReason;
                },
              },
            ]),
            e
          );
        })(),
        b = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, r) {
            var i;
            return Object(a.a)(this, n), ((i = t.call(this, r)).privResult = e), i;
          }
          return (
            Object(s.a)(n, [
              {
                key: 'result',
                get: function () {
                  return this.privResult;
                },
              },
            ]),
            n
          );
        })(n(149).a),
        S = (function () {
          function e(t, n, r, i, o) {
            Object(a.a)(this, e),
              (this.privCancelReason = n),
              (this.privErrorDetails = r),
              (this.privResult = o),
              (this.privSessionId = t),
              (this.privErrorCode = i);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'result',
                get: function () {
                  return this.privResult;
                },
              },
              {
                key: 'sessionId',
                get: function () {
                  return this.privSessionId;
                },
              },
              {
                key: 'reason',
                get: function () {
                  return this.privCancelReason;
                },
              },
              {
                key: 'errorCode',
                get: function () {
                  return this.privErrorCode;
                },
              },
              {
                key: 'errorDetails',
                get: function () {
                  return this.privErrorDetails;
                },
              },
            ]),
            e
          );
        })(),
        w = n(62),
        k = n(53),
        C = (function () {
          function e() {
            Object(a.a)(this, e), (this.privMap = new h.a());
          }
          return (
            Object(s.a)(e, [
              {
                key: 'get',
                value: function (e, t) {
                  return this.privMap.getProperty(e, t);
                },
              },
              {
                key: 'set',
                value: function (e, t) {
                  this.privMap.setProperty(e, t);
                },
              },
              {
                key: 'languages',
                get: function () {
                  return this.privMap.keys;
                },
              },
            ]),
            e
          );
        })(),
        O = n(68),
        E = n(69),
        P = n(20),
        x = n(70),
        R = n(71),
        T = n(11),
        I = n(82),
        A = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        _ = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, r, i, s, c) {
            var l;
            return (
              Object(a.a)(this, n),
              ((l = t.call(this, e, r, i, s, c)).privTranslationRecognizer = c),
              l.connectionEvents.attach(function (e) {
                return A(
                  Object(u.a)(l),
                  void 0,
                  void 0,
                  o.a.mark(function t() {
                    return o.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ('ConnectionEstablishedEvent' !== e.name) {
                                t.next = 4;
                                break;
                              }
                              this.privTranslationRecognizer.onConnection(), (t.next = 7);
                              break;
                            case 4:
                              if ('ConnectionClosedEvent' !== e.name) {
                                t.next = 7;
                                break;
                              }
                              return (t.next = 7), this.privTranslationRecognizer.onDisconnection();
                            case 7:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              }),
              l
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: 'processTypeSpecificMessages',
                value: function (e) {
                  return A(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function t() {
                      var n, r, i, a, s, u, c, l, p, C, T, I, A;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = new h.a()),
                                  (r = !1),
                                  e.messageType === f.b.Text &&
                                    n.setProperty(d.a.SpeechServiceResponse_JsonResult, e.textBody),
                                  (t.t0 = e.path.toLowerCase()),
                                  (t.next =
                                    'translation.hypothesis' === t.t0
                                      ? 6
                                      : 'translation.phrase' === t.t0
                                      ? 11
                                      : 'translation.synthesis' === t.t0
                                      ? 32
                                      : 'translation.synthesis.end' === t.t0
                                      ? 35
                                      : 47);
                                break;
                              case 6:
                                if (
                                  ((i = this.fireEventForResult(O.a.fromJSON(e.textBody), n)),
                                  this.privRequestSession.onHypothesis(
                                    this.privRequestSession.currentTurnAudioOffset + i.offset
                                  ),
                                  this.privTranslationRecognizer.recognizing)
                                )
                                  try {
                                    this.privTranslationRecognizer.recognizing(this.privTranslationRecognizer, i);
                                  } catch (o) {}
                                return (r = !0), t.abrupt('break', 48);
                              case 11:
                                if (
                                  ((a = E.a.fromJSON(e.textBody)),
                                  this.privRequestSession.onPhraseRecognized(
                                    this.privRequestSession.currentTurnAudioOffset + a.Offset + a.Duration
                                  ),
                                  a.RecognitionStatus !== P.a.Success)
                                ) {
                                  t.next = 20;
                                  break;
                                }
                                if (((s = this.fireEventForResult(a, n)), this.privTranslationRecognizer.recognized))
                                  try {
                                    this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, s);
                                  } catch (o) {}
                                if (this.privSuccessCallback) {
                                  try {
                                    this.privSuccessCallback(s.result);
                                  } catch (_) {
                                    this.privErrorCallback && this.privErrorCallback(_);
                                  }
                                  (this.privSuccessCallback = void 0), (this.privErrorCallback = void 0);
                                }
                                return t.abrupt('break', 48);
                              case 20:
                                if (
                                  ((u = x.a.implTranslateRecognitionResult(a.RecognitionStatus)),
                                  (c = new v(
                                    void 0,
                                    this.privRequestSession.requestId,
                                    u,
                                    a.Text,
                                    a.Duration,
                                    this.privRequestSession.currentTurnAudioOffset + a.Offset,
                                    void 0,
                                    e.textBody,
                                    n
                                  )),
                                  u !== y.a.Canceled)
                                ) {
                                  t.next = 28;
                                  break;
                                }
                                return (
                                  (l = x.a.implTranslateCancelResult(a.RecognitionStatus)),
                                  (t.next = 26),
                                  this.cancelRecognitionLocal(
                                    l,
                                    x.a.implTranslateCancelErrorCode(a.RecognitionStatus),
                                    void 0
                                  )
                                );
                              case 26:
                                t.next = 30;
                                break;
                              case 28:
                                if (
                                  (!this.privRequestSession.isSpeechEnded ||
                                    u !== y.a.NoMatch ||
                                    a.RecognitionStatus === P.a.InitialSilenceTimeout) &&
                                  ((p = new m(c, c.offset, this.privRequestSession.sessionId)),
                                  this.privTranslationRecognizer.recognized)
                                )
                                  try {
                                    this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, p);
                                  } catch (o) {}
                                if (this.privSuccessCallback) {
                                  try {
                                    this.privSuccessCallback(c);
                                  } catch (_) {
                                    this.privErrorCallback && this.privErrorCallback(_);
                                  }
                                  (this.privSuccessCallback = void 0), (this.privErrorCallback = void 0);
                                }
                              case 30:
                                return (r = !0), t.abrupt('break', 48);
                              case 32:
                                return (
                                  this.sendSynthesisAudio(e.binaryBody, this.privRequestSession.sessionId),
                                  (r = !0),
                                  t.abrupt('break', 48)
                                );
                              case 35:
                                (C = R.a.fromJSON(e.textBody)),
                                  (t.t1 = C.SynthesisStatus),
                                  (t.next = t.t1 === P.b.Error ? 39 : t.t1 === P.b.Success ? 42 : 44);
                                break;
                              case 39:
                                if (this.privTranslationRecognizer.synthesizing) {
                                  (T = new g(y.a.Canceled, void 0)), (I = new b(T, this.privRequestSession.sessionId));
                                  try {
                                    this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, I);
                                  } catch (o) {}
                                }
                                if (this.privTranslationRecognizer.canceled) {
                                  A = new S(
                                    this.privRequestSession.sessionId,
                                    w.a.Error,
                                    C.FailureReason,
                                    k.a.ServiceError,
                                    null
                                  );
                                  try {
                                    this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, A);
                                  } catch (o) {}
                                }
                                return t.abrupt('break', 45);
                              case 42:
                                return (
                                  this.sendSynthesisAudio(void 0, this.privRequestSession.sessionId),
                                  t.abrupt('break', 45)
                                );
                              case 44:
                                return t.abrupt('break', 45);
                              case 45:
                                return (r = !0), t.abrupt('break', 48);
                              case 47:
                                return t.abrupt('break', 48);
                              case 48:
                                return t.abrupt('return', r);
                              case 49:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'cancelRecognition',
                value: function (e, t, n, r, i) {
                  var o = new h.a();
                  if (
                    (o.setProperty(T.CancellationErrorCodePropertyName, k.a[r]),
                    this.privTranslationRecognizer.canceled)
                  ) {
                    var a = new S(e, n, i, r, void 0);
                    try {
                      this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, a);
                    } catch (u) {}
                  }
                  if (this.privSuccessCallback) {
                    var s = new v(void 0, t, y.a.Canceled, void 0, void 0, void 0, i, void 0, o);
                    try {
                      this.privSuccessCallback(s), (this.privSuccessCallback = void 0);
                    } catch (c) {}
                  }
                },
              },
              {
                key: 'fireEventForResult',
                value: function (e, t) {
                  var n, i;
                  if (void 0 !== e.Translation.Translations) {
                    n = new C();
                    var o,
                      a = Object(r.a)(e.Translation.Translations);
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value;
                        n.set(s.Language, s.Text);
                      }
                    } catch (l) {
                      a.e(l);
                    } finally {
                      a.f();
                    }
                  }
                  i =
                    e instanceof E.a
                      ? e.Translation.TranslationStatus === p.a.Success
                        ? y.a.TranslatedSpeech
                        : y.a.RecognizedSpeech
                      : y.a.TranslatingSpeech;
                  var u = e.Offset + this.privRequestSession.currentTurnAudioOffset,
                    c = new v(
                      n,
                      this.privRequestSession.requestId,
                      i,
                      e.Text,
                      e.Duration,
                      u,
                      e.Translation.FailureReason,
                      JSON.stringify(e),
                      t
                    );
                  return new m(c, u, this.privRequestSession.sessionId);
                },
              },
              {
                key: 'sendSynthesisAudio',
                value: function (e, t) {
                  var n = void 0 === e ? y.a.SynthesizingAudioCompleted : y.a.SynthesizingAudio,
                    r = new g(n, e),
                    i = new b(r, t);
                  if (this.privTranslationRecognizer.synthesizing)
                    try {
                      this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, i);
                    } catch (o) {}
                },
              },
            ]),
            n
          );
        })(I.a);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return D;
      });
      var r = n(0),
        i = n(3),
        o = n(4),
        a = n(2),
        s = n.n(a),
        u = n(1),
        c = n(13),
        l = n(26),
        f = n(18),
        p = n(152),
        h = n(42),
        d = n(60),
        v = n(61),
        y = n(153),
        m = (function () {
          function e(t, n) {
            Object(r.a)(this, e), (this.privStatusCode = t), (this.privReason = n);
          }
          return (
            Object(u.a)(e, [
              {
                key: 'statusCode',
                get: function () {
                  return this.privStatusCode;
                },
              },
              {
                key: 'reason',
                get: function () {
                  return this.privReason;
                },
              },
            ]),
            e
          );
        })(),
        g = n(154),
        b = n(101),
        S = n(25),
        w = n(51),
        k = n(88),
        C = n.n(k),
        O = n(89),
        E = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        P = (function () {
          function e(t, n, i, o, a, s) {
            var u = this;
            if (
              (Object(r.a)(this, e),
              (this.open = function () {
                if (u.privConnectionState === p.a.Disconnected)
                  return Promise.reject('Cannot open a connection that is in '.concat(u.privConnectionState, ' state'));
                if (u.privConnectionEstablishDeferral) return u.privConnectionEstablishDeferral.promise;
                (u.privConnectionEstablishDeferral = new h.a()),
                  (u.privCertificateValidatedDeferral = new h.a()),
                  (u.privConnectionState = p.a.Connecting);
                try {
                  if ('undefined' === typeof WebSocket || e.forceNpmWebSocket) {
                    var t = { headers: u.privHeaders, perMessageDeflate: u.privEnableCompression };
                    u.privCertificateValidatedDeferral.resolve();
                    var n = new O.a(u.proxyInfo);
                    (t.agent = n.GetAgent()), (u.privWebsocketClient = new C.a(u.privUri, t));
                  } else
                    u.privCertificateValidatedDeferral.resolve(), (u.privWebsocketClient = new WebSocket(u.privUri));
                  (u.privWebsocketClient.binaryType = 'arraybuffer'),
                    (u.privReceivingMessageQueue = new d.a()),
                    (u.privDisconnectDeferral = new h.a()),
                    (u.privSendMessageQueue = new d.a()),
                    u.processSendQueue().catch(function (e) {
                      v.a.instance.onEvent(new y.a(e));
                    });
                } catch (r) {
                  return (
                    u.privConnectionEstablishDeferral.resolve(new m(500, r)), u.privConnectionEstablishDeferral.promise
                  );
                }
                return (
                  u.onEvent(new g.g(u.privConnectionId, u.privUri)),
                  (u.privWebsocketClient.onopen = function (e) {
                    u.privCertificateValidatedDeferral.promise.then(
                      function () {
                        (u.privConnectionState = p.a.Connected),
                          u.onEvent(new g.d(u.privConnectionId)),
                          u.privConnectionEstablishDeferral.resolve(new m(200, ''));
                      },
                      function (e) {
                        u.privConnectionEstablishDeferral.reject(e);
                      }
                    );
                  }),
                  (u.privWebsocketClient.onerror = function (e) {
                    u.onEvent(new g.b(u.privConnectionId, e.message, e.type)), (u.privLastErrorReceived = e.message);
                  }),
                  (u.privWebsocketClient.onclose = function (e) {
                    u.privConnectionState === p.a.Connecting
                      ? ((u.privConnectionState = p.a.Disconnected),
                        u.privConnectionEstablishDeferral.resolve(
                          new m(e.code, e.reason + ' ' + u.privLastErrorReceived)
                        ))
                      : ((u.privConnectionState = p.a.Disconnected),
                        (u.privWebsocketClient = null),
                        u.onEvent(new g.a(u.privConnectionId, e.code, e.reason))),
                      u.onClose(e.code, e.reason).catch(function (e) {
                        v.a.instance.onEvent(new y.a(e));
                      });
                  }),
                  (u.privWebsocketClient.onmessage = function (e) {
                    var t = new Date().toISOString();
                    if (u.privConnectionState === p.a.Connected) {
                      var n = new h.a();
                      if ((u.privReceivingMessageQueue.enqueueFromPromise(n.promise), e.data instanceof ArrayBuffer)) {
                        var r = new b.a(S.b.Binary, e.data);
                        u.privMessageFormatter.toConnectionMessage(r).then(
                          function (e) {
                            u.onEvent(new g.e(u.privConnectionId, t, e)), n.resolve(e);
                          },
                          function (e) {
                            n.reject('Invalid binary message format. Error: '.concat(e));
                          }
                        );
                      } else {
                        var i = new b.a(S.b.Text, e.data);
                        u.privMessageFormatter.toConnectionMessage(i).then(
                          function (e) {
                            u.onEvent(new g.e(u.privConnectionId, t, e)), n.resolve(e);
                          },
                          function (e) {
                            n.reject('Invalid text message format. Error: '.concat(e));
                          }
                        );
                      }
                    }
                  }),
                  u.privConnectionEstablishDeferral.promise
                );
              }),
              (this.send = function (e) {
                if (u.privConnectionState !== p.a.Connected)
                  return Promise.reject(
                    'Cannot send on connection that is in '.concat(p.a[u.privConnectionState], ' state')
                  );
                var t = new h.a(),
                  n = new h.a();
                return (
                  u.privSendMessageQueue.enqueueFromPromise(n.promise),
                  u.privMessageFormatter.fromConnectionMessage(e).then(
                    function (r) {
                      n.resolve({ Message: e, RawWebsocketMessage: r, sendStatusDeferral: t });
                    },
                    function (e) {
                      n.reject('Error formatting the message. '.concat(e));
                    }
                  ),
                  t.promise
                );
              }),
              (this.read = function () {
                return u.privConnectionState !== p.a.Connected
                  ? Promise.reject('Cannot read on connection that is in '.concat(u.privConnectionState, ' state'))
                  : u.privReceivingMessageQueue.dequeue();
              }),
              (this.close = function (e) {
                return u.privWebsocketClient
                  ? (u.privConnectionState !== p.a.Disconnected &&
                      u.privWebsocketClient.close(1e3, e || 'Normal closure by client'),
                    u.privDisconnectDeferral.promise)
                  : Promise.resolve();
              }),
              (this.sendRawMessage = function (e) {
                try {
                  return e
                    ? (u.onEvent(new g.f(u.privConnectionId, new Date().toISOString(), e.Message)),
                      u.isWebsocketOpen
                        ? (u.privWebsocketClient.send(e.RawWebsocketMessage.payload), Promise.resolve())
                        : Promise.reject(
                            'websocket send error: Websocket not ready ' +
                              u.privConnectionId +
                              ' ' +
                              e.Message.id +
                              ' ' +
                              new Error().stack
                          ))
                    : Promise.resolve();
                } catch (t) {
                  return Promise.reject('websocket send error: '.concat(t));
                }
              }),
              (this.onEvent = function (e) {
                u.privConnectionEvents.onEvent(e), v.a.instance.onEvent(e);
              }),
              !t)
            )
              throw new c.a('uri');
            if (!i) throw new c.a('messageFormatter');
            (this.proxyInfo = o),
              (this.privConnectionEvents = new w.a()),
              (this.privConnectionId = n),
              (this.privMessageFormatter = i),
              (this.privConnectionState = p.a.None),
              (this.privUri = t),
              (this.privHeaders = a),
              (this.privEnableCompression = s),
              (this.privHeaders[f.a.ConnectionId] = this.privConnectionId),
              (this.privLastErrorReceived = '');
          }
          return (
            Object(u.a)(e, [
              {
                key: 'state',
                get: function () {
                  return this.privConnectionState;
                },
              },
              {
                key: 'events',
                get: function () {
                  return this.privConnectionEvents;
                },
              },
              {
                key: 'onClose',
                value: function (e, t) {
                  return E(
                    this,
                    void 0,
                    void 0,
                    s.a.mark(function n() {
                      var r;
                      return s.a.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (r = 'Connection closed. '.concat(e, ': ').concat(t)),
                                  (this.privConnectionState = p.a.Disconnected),
                                  this.privDisconnectDeferral.resolve(),
                                  (n.next = 5),
                                  this.privReceivingMessageQueue.drainAndDispose(function (e) {}, r)
                                );
                              case 5:
                                return (
                                  (n.next = 7),
                                  this.privSendMessageQueue.drainAndDispose(function (e) {
                                    e.sendStatusDeferral.reject(r);
                                  }, r)
                                );
                              case 7:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'processSendQueue',
                value: function () {
                  return E(
                    this,
                    void 0,
                    void 0,
                    s.a.mark(function e() {
                      var t, n;
                      return s.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (t = this.privSendMessageQueue.dequeue()), (e.next = 4), t;
                              case 4:
                                if ((n = e.sent)) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt('return');
                              case 7:
                                return (e.prev = 7), (e.next = 10), this.sendRawMessage(n);
                              case 10:
                                n.sendStatusDeferral.resolve(), (e.next = 16);
                                break;
                              case 13:
                                (e.prev = 13), (e.t0 = e.catch(7)), n.sendStatusDeferral.reject(e.t0);
                              case 16:
                                e.next = 0;
                                break;
                              case 18:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[7, 13]]
                      );
                    })
                  );
                },
              },
              {
                key: 'isWebsocketOpen',
                get: function () {
                  return (
                    this.privWebsocketClient && this.privWebsocketClient.readyState === this.privWebsocketClient.OPEN
                  );
                },
              },
            ]),
            e
          );
        })();
      P.forceNpmWebSocket = !1;
      var x = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        R = (function () {
          function e(t, n, i, o, a) {
            var s = this,
              u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              f = arguments.length > 6 ? arguments[6] : void 0;
            if (
              (Object(r.a)(this, e),
              (this.privIsDisposed = !1),
              (this.isDisposed = function () {
                return s.privIsDisposed;
              }),
              (this.state = function () {
                return s.privConnectionMessageAdapter.state;
              }),
              (this.open = function () {
                return s.privConnectionMessageAdapter.open();
              }),
              (this.send = function (e) {
                return s.privConnectionMessageAdapter.send(e);
              }),
              (this.read = function () {
                return s.privConnectionMessageAdapter.read();
              }),
              !t)
            )
              throw new c.a('uri');
            if (!o) throw new c.a('messageFormatter');
            this.privMessageFormatter = o;
            var p = '',
              h = 0;
            if (n)
              for (var d in n)
                if (d) {
                  p += 0 === h && -1 === t.indexOf('?') ? '?' : '&';
                  var v = encodeURIComponent(n[d]);
                  (p += ''.concat(d, '=').concat(v)), h++;
                }
            if (i)
              for (var y in i)
                if (y) {
                  p += 0 === h && -1 === t.indexOf('?') ? '?' : '&';
                  var m = encodeURIComponent(i[y]);
                  (p += ''.concat(y, '=').concat(m)), h++;
                }
            (this.privUri = t + p),
              (this.privId = f || Object(l.a)()),
              (this.privConnectionMessageAdapter = new P(this.privUri, this.id, this.privMessageFormatter, a, i, u));
          }
          return (
            Object(u.a)(e, [
              {
                key: 'dispose',
                value: function () {
                  return x(
                    this,
                    void 0,
                    void 0,
                    s.a.mark(function e() {
                      return s.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((this.privIsDisposed = !0), !this.privConnectionMessageAdapter)) {
                                  e.next = 4;
                                  break;
                                }
                                return (e.next = 4), this.privConnectionMessageAdapter.close();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'id',
                get: function () {
                  return this.privId;
                },
              },
              {
                key: 'events',
                get: function () {
                  return this.privConnectionMessageAdapter.events;
                },
              },
            ]),
            e
          );
        })(),
        T = n(41),
        I = (function () {
          function e(t, n, i, o) {
            Object(r.a)(this, e),
              (this.privProxyHostName = t),
              (this.privProxyPort = n),
              (this.privProxyUserName = i),
              (this.privProxyPassword = o);
          }
          return (
            Object(u.a)(
              e,
              [
                {
                  key: 'HostName',
                  get: function () {
                    return this.privProxyHostName;
                  },
                },
                {
                  key: 'Port',
                  get: function () {
                    return this.privProxyPort;
                  },
                },
                {
                  key: 'UserName',
                  get: function () {
                    return this.privProxyUserName;
                  },
                },
                {
                  key: 'Password',
                  get: function () {
                    return this.privProxyPassword;
                  },
                },
              ],
              [
                {
                  key: 'fromParameters',
                  value: function (t) {
                    return new e(
                      t.getProperty(T.a.SpeechServiceConnection_ProxyHostName),
                      parseInt(t.getProperty(T.a.SpeechServiceConnection_ProxyPort), 10),
                      t.getProperty(T.a.SpeechServiceConnection_ProxyUserName),
                      t.getProperty(T.a.SpeechServiceConnection_ProxyPassword)
                    );
                  },
                },
                {
                  key: 'fromRecognizerConfig',
                  value: function (e) {
                    return this.fromParameters(e.parameters);
                  },
                },
              ]
            ),
            e
          );
        })(),
        A = n(11),
        _ = function e() {
          Object(r.a)(this, e);
        };
      (_.BotId = 'botid'),
        (_.CustomSpeechDeploymentId = 'cid'),
        (_.CustomVoiceDeploymentId = 'deploymentId'),
        (_.EnableAudioLogging = 'storeAudio'),
        (_.EnableLanguageId = 'lidEnabled'),
        (_.EnableWordLevelTimestamps = 'wordLevelTimestamps'),
        (_.EndSilenceTimeoutMs = 'endSilenceTimeoutMs'),
        (_.Format = 'format'),
        (_.InitialSilenceTimeoutMs = 'initialSilenceTimeoutMs'),
        (_.Language = 'language'),
        (_.Profanity = 'profanity'),
        (_.RequestBotStatusMessages = 'enableBotMessageStatus'),
        (_.StableIntermediateThreshold = 'stableIntermediateThreshold'),
        (_.StableTranslation = 'stableTranslation'),
        (_.TestHooks = 'testhooks');
      var j = (function () {
          function e() {
            Object(r.a)(this, e);
          }
          return (
            Object(u.a)(e, [
              {
                key: 'setCommonUrlParams',
                value: function (e, t, n) {
                  this.setUrlParameter(T.a.SpeechServiceConnection_EnableAudioLogging, _.EnableAudioLogging, e, t, n),
                    this.setUrlParameter(
                      T.a.SpeechServiceResponse_RequestWordLevelTimestamps,
                      _.EnableWordLevelTimestamps,
                      e,
                      t,
                      n
                    ),
                    this.setUrlParameter(T.a.SpeechServiceResponse_ProfanityOption, _.Profanity, e, t, n),
                    this.setUrlParameter(
                      T.a.SpeechServiceConnection_InitialSilenceTimeoutMs,
                      _.InitialSilenceTimeoutMs,
                      e,
                      t,
                      n
                    ),
                    this.setUrlParameter(
                      T.a.SpeechServiceConnection_EndSilenceTimeoutMs,
                      _.EndSilenceTimeoutMs,
                      e,
                      t,
                      n
                    ),
                    this.setUrlParameter(
                      T.a.SpeechServiceResponse_StablePartialResultThreshold,
                      _.StableIntermediateThreshold,
                      e,
                      t,
                      n
                    );
                  var r = JSON.parse(e.parameters.getProperty(A.ServicePropertiesPropertyName, '{}'));
                  Object.keys(r).forEach(function (e, n, i) {
                    t[e] = r[e];
                  });
                },
              },
              {
                key: 'setUrlParameter',
                value: function (e, t, n, r, i) {
                  var o = n.parameters.getProperty(e, void 0);
                  !o || (i && -1 !== i.search(t)) || (r[t] = o.toLocaleLowerCase());
                },
              },
            ]),
            e
          );
        })(),
        M = n(67),
        D = (function (e) {
          Object(i.a)(n, e);
          var t = Object(o.a)(n);
          function n() {
            var e;
            return (
              Object(r.a)(this, n),
              ((e = t.apply(this, arguments)).create = function (t, n, r) {
                var i = t.parameters.getProperty(T.a.SpeechServiceConnection_Endpoint, void 0);
                if (!i) {
                  var o = t.parameters.getProperty(T.a.SpeechServiceConnection_Region, void 0),
                    a = o && o.toLowerCase().startsWith('china') ? '.azure.cn' : '.microsoft.com';
                  i =
                    t.parameters.getProperty(T.a.SpeechServiceConnection_Host, 'wss://' + o + '.s2s.speech' + a) +
                    '/speech/translation/cognitiveservices/v1';
                }
                var s = {
                  from: t.parameters.getProperty(T.a.SpeechServiceConnection_RecoLanguage),
                  to: t.parameters.getProperty(T.a.SpeechServiceConnection_TranslationToLanguages),
                };
                e.setCommonUrlParams(t, s, i),
                  e.setUrlParameter(
                    T.a.SpeechServiceResponse_TranslationRequestStablePartialResult,
                    _.StableTranslation,
                    t,
                    s,
                    i
                  );
                void 0 !== t.parameters.getProperty(T.a.SpeechServiceConnection_TranslationVoice, void 0) &&
                  ((s.voice = t.parameters.getProperty(T.a.SpeechServiceConnection_TranslationVoice)),
                  (s.features = 'texttospeech'));
                var u = {};
                void 0 !== n.token && '' !== n.token && (u[n.headerName] = n.token),
                  (u[f.a.ConnectionId] = r),
                  t.parameters.setProperty(T.a.SpeechServiceConnection_Url, i);
                var c = 'true' === t.parameters.getProperty('SPEECH-EnableWebsocketCompression', 'false');
                return new R(i, s, u, new M.a(), I.fromRecognizerConfig(t), c, r);
              }),
              e
            );
          }
          return n;
        })(j);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return I;
      });
      var r = n(2),
        i = n.n(r),
        o = n(0),
        a = n(1),
        s = n(17),
        u = (function () {
          function e(t, n) {
            var r = this;
            Object(o.a)(this, e),
              (this.privBuffers = []),
              (this.privReplayOffset = 0),
              (this.privLastShrinkOffset = 0),
              (this.privBufferStartOffset = 0),
              (this.privBufferSerial = 0),
              (this.privBufferedBytes = 0),
              (this.privReplay = !1),
              (this.privLastChunkAcquiredTime = 0),
              (this.id = function () {
                return r.privAudioNode.id();
              }),
              (this.privAudioNode = t),
              (this.privBytesPerSecond = n);
          }
          return (
            Object(a.a)(e, [
              {
                key: 'read',
                value: function () {
                  var e = this;
                  if (this.privReplay && 0 !== this.privBuffers.length) {
                    var t = this.privReplayOffset - this.privBufferStartOffset,
                      n = Math.round(t * this.privBytesPerSecond * 1e-7);
                    0 !== n % 2 && n++;
                    for (var r = 0; r < this.privBuffers.length && n >= this.privBuffers[r].chunk.buffer.byteLength; )
                      n -= this.privBuffers[r++].chunk.buffer.byteLength;
                    if (r < this.privBuffers.length) {
                      var i = this.privBuffers[r].chunk.buffer.slice(n);
                      return (
                        (this.privReplayOffset += (i.byteLength / this.privBytesPerSecond) * 1e7),
                        r === this.privBuffers.length - 1 && (this.privReplay = !1),
                        Promise.resolve({ buffer: i, isEnd: !1, timeReceived: this.privBuffers[r].chunk.timeReceived })
                      );
                    }
                  }
                  return this.privAudioNode.read().then(function (t) {
                    return (
                      t &&
                        t.buffer &&
                        (e.privBuffers.push(new c(t, e.privBufferSerial++, e.privBufferedBytes)),
                        (e.privBufferedBytes += t.buffer.byteLength)),
                      t
                    );
                  });
                },
              },
              {
                key: 'detach',
                value: function () {
                  return (this.privBuffers = void 0), this.privAudioNode.detach();
                },
              },
              {
                key: 'replay',
                value: function () {
                  this.privBuffers &&
                    0 !== this.privBuffers.length &&
                    ((this.privReplay = !0), (this.privReplayOffset = this.privLastShrinkOffset));
                },
              },
              {
                key: 'shrinkBuffers',
                value: function (e) {
                  if (void 0 !== this.privBuffers && 0 !== this.privBuffers.length) {
                    this.privLastShrinkOffset = e;
                    for (
                      var t = e - this.privBufferStartOffset, n = Math.round(t * this.privBytesPerSecond * 1e-7), r = 0;
                      r < this.privBuffers.length && n >= this.privBuffers[r].chunk.buffer.byteLength;

                    )
                      n -= this.privBuffers[r++].chunk.buffer.byteLength;
                    (this.privBufferStartOffset = Math.round(e - (n / this.privBytesPerSecond) * 1e7)),
                      (this.privBuffers = this.privBuffers.slice(r));
                  }
                },
              },
              {
                key: 'findTimeAtOffset',
                value: function (e) {
                  if (e < this.privBufferStartOffset || void 0 === this.privBuffers) return 0;
                  var t,
                    n = Object(s.a)(this.privBuffers);
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var r = t.value,
                        i = (r.byteOffset / this.privBytesPerSecond) * 1e7,
                        o = i + (r.chunk.buffer.byteLength / this.privBytesPerSecond) * 1e7;
                      if (e >= i && e <= o) return r.chunk.timeReceived;
                    }
                  } catch (a) {
                    n.e(a);
                  } finally {
                    n.f();
                  }
                  return 0;
                },
              },
            ]),
            e
          );
        })(),
        c = function e(t, n, r) {
          Object(o.a)(this, e), (this.chunk = t), (this.serial = n), (this.byteOffset = r);
        },
        l = n(25),
        f = n(13),
        p = n(51),
        h = function e() {
          Object(o.a)(this, e);
        };
      (h.workerTimers = null),
        (h.clearTimeout = function (e) {
          return h.timers().clearTimeout(e);
        }),
        (h.setTimeout = function (e, t) {
          return h.timers().setTimeout(e, t);
        }),
        (h.load = function (e) {
          var t = new Map([[0, function () {}]]),
            n = new Map(),
            r = new Worker(e);
          r.addEventListener('message', function (e) {
            var r = e.data;
            if (h.isCallNotification(r)) {
              var i = r.params.timerId,
                o = t.get(i);
              if ('number' === typeof o) {
                var a = n.get(o);
                if (void 0 === a || a !== i) throw new Error('The timer is in an undefined state.');
              } else {
                if ('undefined' === typeof o) throw new Error('The timer is in an undefined state.');
                o(), t.delete(i);
              }
            } else {
              if (!h.isClearResponse(r)) {
                var s = r.error.message;
                throw new Error(s);
              }
              var u = r.id,
                c = n.get(u);
              if (void 0 === c) throw new Error('The timer is in an undefined state.');
              n.delete(u), t.delete(c);
            }
          });
          return {
            clearTimeout: function (e) {
              var i = Math.random();
              n.set(i, e), t.set(e, i), r.postMessage({ id: i, method: 'clear', params: { timerId: e } });
            },
            setTimeout: function (e, n) {
              var i = Math.random();
              return (
                t.set(i, e),
                r.postMessage({ id: null, method: 'set', params: { delay: n, now: performance.now(), timerId: i } }),
                i
              );
            },
          };
        }),
        (h.loadWorkerTimers = function () {
          return function () {
            if (null !== h.workerTimers) return h.workerTimers;
            var e = new Blob(
                [
                  '!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return d}));const r=new Map,o=new Map,i=e=>{const t=r.get(e);if(void 0===t)throw new Error(\'There is no interval scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),r.delete(e)},u=e=>{const t=o.get(e);if(void 0===t)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),o.delete(e)},f=(e,t)=>{let n,r;if("performance"in self){const o=performance.now();n=o,r=e-Math.max(0,o-t)}else n=Date.now(),r=e;return{expected:n+r,remainingDelay:r}},c=(e,t,n,r)=>{const o="performance"in self?performance.now():Date.now();o>n?postMessage({id:null,method:"call",params:{timerId:t}}):e.set(t,setTimeout(c,n-o,e,t,n))},a=(e,t,n)=>{const{expected:o,remainingDelay:i}=f(e,n);r.set(t,setTimeout(c,i,r,t,o))},d=(e,t,n)=>{const{expected:r,remainingDelay:i}=f(e,n);o.set(t,setTimeout(c,i,o,t,r))}},function(e,t,n){"use strict";n.r(t);var r=n(2);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i=n(3);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var u=n(4);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var f=n(5);for(var o in f)"default"!==o&&function(e){n.d(t,e,(function(){return f[e]}))}(o);var c=n(6);for(var o in c)"default"!==o&&function(e){n.d(t,e,(function(){return c[e]}))}(o);var a=n(7);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var d=n(8);for(var o in d)"default"!==o&&function(e){n.d(t,e,(function(){return d[e]}))}(o);var s=n(9);for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(11);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i=n(12);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var u=n(13);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o)},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var u=n(10);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);addEventListener("message",({data:e})=>{try{if("clear"===e.method){const{id:t,params:{timerId:n}}=e;Object(r.b)(n),postMessage({error:null,id:t})}else{if("set"!==e.method)throw new Error(\'The given method "\'.concat(e.method,\'" is not supported\'));{const{params:{delay:t,now:n,timerId:o}}=e;Object(r.d)(t,o,n)}}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}})}]);',
                ],
                { type: 'application/javascript; charset=utf-8' }
              ),
              t = URL.createObjectURL(e);
            return (
              (h.workerTimers = h.load(t)).setTimeout(function () {
                return URL.revokeObjectURL(t);
              }, 0),
              h.workerTimers
            );
          };
        }),
        (h.timers = h.loadWorkerTimers()),
        (h.isCallNotification = function (e) {
          return void 0 !== e.method && 'call' === e.method;
        }),
        (h.isClearResponse = function (e) {
          return null === e.error && 'number' === typeof e.id;
        });
      var d = n(154),
        v = n(152),
        y = n(26),
        m = n(62),
        g = n(53),
        b = n(41),
        S = n(149),
        w = n(155),
        k = n(83),
        C = n(72),
        O = n(73),
        E = n(74),
        P = n(38),
        x = n(75),
        R = n(22),
        T = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        I = (function () {
          function e(t, n, r, a, s) {
            var u = this;
            if (
              (Object(o.a)(this, e),
              (this.privSetTimeout = setTimeout),
              (this.privIsLiveAudio = !1),
              (this.recognizeOverride = void 0),
              (this.disconnectOverride = void 0),
              (this.receiveMessageOverride = void 0),
              (this.sendSpeechContext = function (e) {
                var t = u.speechContext.toJSON();
                if (t)
                  return e.send(
                    new R.a(l.b.Text, 'speech.context', u.privRequestSession.requestId, 'application/json', t)
                  );
              }),
              (this.sendPrePayloadJSONOverride = void 0),
              (this.postConnectImplOverride = void 0),
              (this.configConnectionOverride = void 0),
              (this.sendSpeechServiceConfig = function (t, n, r) {
                if (!0 !== e.telemetryDataEnabled) {
                  var i = { context: { system: JSON.parse(r).context.system } };
                  r = JSON.stringify(i);
                }
                if (
                  'true' ===
                  u.privRecognizerConfig.parameters
                    .getProperty('TranscriptionService_SingleChannel', 'false')
                    .toLowerCase()
                ) {
                  var o = JSON.parse(r);
                  (o.context.DisableReferenceChannel = 'True'), (o.context.MicSpec = '1_0_0'), (r = JSON.stringify(o));
                }
                if (r) return t.send(new R.a(l.b.Text, 'speech.config', n.requestId, 'application/json', r));
              }),
              !t)
            )
              throw new f.a('authentication');
            if (!n) throw new f.a('connectionFactory');
            if (!r) throw new f.a('audioSource');
            if (!a) throw new f.a('recognizerConfig');
            (this.privMustReportEndOfStream = !1),
              (this.privAuthentication = t),
              (this.privConnectionFactory = n),
              (this.privAudioSource = r),
              (this.privRecognizerConfig = a),
              (this.privIsDisposed = !1),
              (this.privRecognizer = s),
              (this.privRequestSession = new k.a(this.privAudioSource.id())),
              (this.privConnectionEvents = new p.a()),
              (this.privServiceEvents = new p.a()),
              (this.privDynamicGrammar = new C.a()),
              (this.privSpeechContext = new O.a(this.privDynamicGrammar)),
              (this.privAgentConfig = new E.a()),
              'undefined' !== typeof Blob && 'undefined' !== typeof Worker && (this.privSetTimeout = h.setTimeout),
              this.connectionEvents.attach(function (e) {
                return T(
                  u,
                  void 0,
                  void 0,
                  i.a.mark(function t() {
                    var n;
                    return i.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ('ConnectionClosedEvent' !== e.name) {
                                t.next = 5;
                                break;
                              }
                              if (
                                !(
                                  1003 === (n = e).statusCode ||
                                  1007 === n.statusCode ||
                                  1002 === n.statusCode ||
                                  4e3 === n.statusCode ||
                                  this.privRequestSession.numConnectionAttempts >
                                    this.privRecognizerConfig.maxRetryCount
                                )
                              ) {
                                t.next = 5;
                                break;
                              }
                              return (
                                (t.next = 5),
                                this.cancelRecognitionLocal(
                                  m.a.Error,
                                  1007 === n.statusCode ? g.a.BadRequestParameters : g.a.ConnectionFailure,
                                  n.reason + ' websocket error code: ' + n.statusCode
                                )
                              );
                            case 5:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              });
          }
          return (
            Object(a.a)(e, [
              {
                key: 'audioSource',
                get: function () {
                  return this.privAudioSource;
                },
              },
              {
                key: 'speechContext',
                get: function () {
                  return this.privSpeechContext;
                },
              },
              {
                key: 'dynamicGrammar',
                get: function () {
                  return this.privDynamicGrammar;
                },
              },
              {
                key: 'agentConfig',
                get: function () {
                  return this.privAgentConfig;
                },
              },
              {
                key: 'conversationTranslatorToken',
                set: function (e) {
                  this.privRecognizerConfig.parameters.setProperty(b.a.ConversationTranslator_Token, e);
                },
              },
              {
                key: 'authentication',
                set: function (e) {
                  this.privAuthentication = this.authentication;
                },
              },
              {
                key: 'isDisposed',
                value: function () {
                  return this.privIsDisposed;
                },
              },
              {
                key: 'dispose',
                value: function (e) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      var n;
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((this.privIsDisposed = !0), !this.privConnectionConfigurationPromise)) {
                                  t.next = 13;
                                  break;
                                }
                                return (t.prev = 2), (t.next = 5), this.privConnectionConfigurationPromise;
                              case 5:
                                return (n = t.sent), (t.next = 8), n.dispose(e);
                              case 8:
                                t.next = 13;
                                break;
                              case 10:
                                return (t.prev = 10), (t.t0 = t.catch(2)), t.abrupt('return');
                              case 13:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 10]]
                      );
                    })
                  );
                },
              },
              {
                key: 'connectionEvents',
                get: function () {
                  return this.privConnectionEvents;
                },
              },
              {
                key: 'serviceEvents',
                get: function () {
                  return this.privServiceEvents;
                },
              },
              {
                key: 'recognitionMode',
                get: function () {
                  return this.privRecognizerConfig.recognitionMode;
                },
              },
              {
                key: 'recognize',
                value: function (e, t, n) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function r() {
                      var o,
                        a,
                        s,
                        c,
                        l,
                        f,
                        p = this;
                      return i.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (void 0 === this.recognizeOverride) {
                                  r.next = 2;
                                  break;
                                }
                                return r.abrupt('return', this.recognizeOverride(e, t, n));
                              case 2:
                                return (
                                  (this.privConnectionConfigurationPromise = null),
                                  (this.privRecognizerConfig.recognitionMode = e),
                                  (this.privSuccessCallback = t),
                                  (this.privErrorCallback = n),
                                  this.privRequestSession.startNewRecognition(),
                                  this.privRequestSession.listenForServiceTelemetry(this.privAudioSource.events),
                                  (o = this.connectImpl()),
                                  (r.prev = 9),
                                  (r.next = 12),
                                  this.audioSource.attach(this.privRequestSession.audioNodeId)
                                );
                              case 12:
                                return (s = r.sent), (r.next = 15), this.audioSource.format;
                              case 15:
                                return (c = r.sent), (r.next = 18), this.audioSource.deviceInfo;
                              case 18:
                                return (
                                  (l = r.sent),
                                  (this.privIsLiveAudio = l.type && l.type === P.g.Microphones),
                                  (a = new u(s, c.avgBytesPerSec)),
                                  (r.next = 23),
                                  this.privRequestSession.onAudioSourceAttachCompleted(a, !1)
                                );
                              case 23:
                                (this.privRecognizerConfig.SpeechServiceConfig.Context.audio = { source: l }),
                                  (r.next = 31);
                                break;
                              case 26:
                                return (
                                  (r.prev = 26),
                                  (r.t0 = r.catch(9)),
                                  (r.next = 30),
                                  this.privRequestSession.onStopRecognizing()
                                );
                              case 30:
                                throw r.t0;
                              case 31:
                                return (r.prev = 31), (r.next = 34), o;
                              case 34:
                                r.next = 41;
                                break;
                              case 36:
                                return (
                                  (r.prev = 36),
                                  (r.t1 = r.catch(31)),
                                  (r.next = 40),
                                  this.cancelRecognitionLocal(m.a.Error, g.a.ConnectionFailure, r.t1)
                                );
                              case 40:
                                return r.abrupt('return');
                              case 41:
                                return (
                                  (f = new S.a(this.privRequestSession.sessionId)),
                                  this.privRecognizer.sessionStarted &&
                                    this.privRecognizer.sessionStarted(this.privRecognizer, f),
                                  this.receiveMessage(),
                                  this.sendAudio(a).catch(function (e) {
                                    return T(
                                      p,
                                      void 0,
                                      void 0,
                                      i.a.mark(function t() {
                                        return i.a.wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  return (
                                                    (t.next = 2),
                                                    this.cancelRecognitionLocal(m.a.Error, g.a.RuntimeError, e)
                                                  );
                                                case 2:
                                                case 'end':
                                                  return t.stop();
                                              }
                                          },
                                          t,
                                          this
                                        );
                                      })
                                    );
                                  }),
                                  r.abrupt('return')
                                );
                              case 47:
                              case 'end':
                                return r.stop();
                            }
                        },
                        r,
                        this,
                        [
                          [9, 26],
                          [31, 36],
                        ]
                      );
                    })
                  );
                },
              },
              {
                key: 'stopRecognizing',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.privRequestSession.isRecognizing) {
                                  e.next = 14;
                                  break;
                                }
                                return (e.prev = 1), (e.next = 4), this.audioSource.turnOff();
                              case 4:
                                return (e.next = 6), this.sendFinalAudio();
                              case 6:
                                return (e.next = 8), this.privRequestSession.onStopRecognizing();
                              case 8:
                                return (e.next = 10), this.privRequestSession.turnCompletionPromise;
                              case 10:
                                return (e.prev = 10), (e.next = 13), this.privRequestSession.dispose();
                              case 13:
                                return e.finish(10);
                              case 14:
                                return e.abrupt('return');
                              case 15:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, , 10, 14]]
                      );
                    })
                  );
                },
              },
              {
                key: 'connect',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.connectImpl();
                              case 2:
                                return e.abrupt('return', Promise.resolve());
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'connectAsync',
                value: function (e, t) {
                  this.connectImpl().then(
                    function (n) {
                      try {
                        e && e();
                      } catch (r) {
                        t && t(r);
                      }
                    },
                    function (e) {
                      try {
                        t && t(e);
                      } catch (n) {}
                    }
                  );
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.cancelRecognitionLocal(m.a.Error, g.a.NoError, 'Disconnecting')
                                );
                              case 2:
                                if (void 0 === this.disconnectOverride) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 5), this.disconnectOverride();
                              case 5:
                                return (e.prev = 5), (e.next = 8), this.privConnectionPromise;
                              case 8:
                                return (e.next = 10), e.sent.dispose();
                              case 10:
                                e.next = 14;
                                break;
                              case 12:
                                (e.prev = 12), (e.t0 = e.catch(5));
                              case 14:
                                this.privConnectionPromise = null;
                              case 15:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 12]]
                      );
                    })
                  );
                },
              },
              { key: 'sendMessage', value: function (e) {} },
              {
                key: 'sendNetworkMessage',
                value: function (e, t) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function n() {
                      var r, o, a;
                      return i.a.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (r = 'string' === typeof t ? l.b.Text : l.b.Binary),
                                  (o = 'string' === typeof t ? 'application/json' : ''),
                                  (n.next = 4),
                                  this.fetchConnection()
                                );
                              case 4:
                                return (
                                  (a = n.sent),
                                  n.abrupt('return', a.send(new R.a(r, e, this.privRequestSession.requestId, o, t)))
                                );
                              case 6:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'activityTemplate',
                get: function () {
                  return this.privActivityTemplate;
                },
                set: function (e) {
                  this.privActivityTemplate = e;
                },
              },
              {
                key: 'sendTelemetryData',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      var n, r;
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n = this.privRequestSession.getTelemetry()),
                                  !0 === e.telemetryDataEnabled && !this.privIsDisposed && null !== n)
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt('return');
                              case 3:
                                if (e.telemetryData)
                                  try {
                                    e.telemetryData(n);
                                  } catch (i) {}
                                return (t.next = 6), this.fetchConnection();
                              case 6:
                                return (
                                  (r = t.sent),
                                  (t.next = 9),
                                  r.send(
                                    new R.a(
                                      l.b.Text,
                                      'telemetry',
                                      this.privRequestSession.requestId,
                                      'application/json',
                                      n
                                    )
                                  )
                                );
                              case 9:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'cancelRecognitionLocal',
                value: function (e, t, n) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function r() {
                      return i.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!this.privRequestSession.isRecognizing) {
                                  r.next = 4;
                                  break;
                                }
                                return (r.next = 3), this.privRequestSession.onStopRecognizing();
                              case 3:
                                this.cancelRecognition(
                                  this.privRequestSession.sessionId,
                                  this.privRequestSession.requestId,
                                  e,
                                  t,
                                  n
                                );
                              case 4:
                              case 'end':
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'receiveMessage',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t, n, r, o, a, s, u, c, l;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), !this.privIsDisposed)) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt('return');
                              case 3:
                                return (e.next = 5), this.fetchConnection();
                              case 5:
                                return (t = e.sent), (e.next = 8), t.read();
                              case 8:
                                if (((n = e.sent), void 0 === this.receiveMessageOverride)) {
                                  e.next = 11;
                                  break;
                                }
                                return e.abrupt('return', this.receiveMessageOverride());
                              case 11:
                                if (n) {
                                  e.next = 17;
                                  break;
                                }
                                if (this.privRequestSession.isRecognizing) {
                                  e.next = 16;
                                  break;
                                }
                                return e.abrupt('return');
                              case 16:
                                return e.abrupt('return', this.receiveMessage());
                              case 17:
                                if (
                                  ((this.privServiceHasSentMessage = !0),
                                  (r = R.a.fromConnectionMessage(n)).requestId.toLowerCase() !==
                                    this.privRequestSession.requestId.toLowerCase())
                                ) {
                                  e.next = 60;
                                  break;
                                }
                                (e.t0 = r.path.toLowerCase()),
                                  (e.next =
                                    'turn.start' === e.t0
                                      ? 23
                                      : 'speech.startdetected' === e.t0
                                      ? 26
                                      : 'speech.enddetected' === e.t0
                                      ? 30
                                      : 'turn.end' === e.t0
                                      ? 36
                                      : 56);
                                break;
                              case 23:
                                return (
                                  (this.privMustReportEndOfStream = !0),
                                  this.privRequestSession.onServiceTurnStartResponse(),
                                  e.abrupt('break', 60)
                                );
                              case 26:
                                return (
                                  (o = x.a.fromJSON(r.textBody)),
                                  (a = new w.a(o.Offset, this.privRequestSession.sessionId)),
                                  this.privRecognizer.speechStartDetected &&
                                    this.privRecognizer.speechStartDetected(this.privRecognizer, a),
                                  e.abrupt('break', 60)
                                );
                              case 30:
                                return (
                                  (s = r.textBody.length > 0 ? r.textBody : '{ Offset: 0 }'),
                                  (u = x.a.fromJSON(s)),
                                  this.privRecognizerConfig.isContinuousRecognition &&
                                    this.privRequestSession.onServiceRecognized(
                                      u.Offset + this.privRequestSession.currentTurnAudioOffset
                                    ),
                                  (c = new w.a(
                                    u.Offset + this.privRequestSession.currentTurnAudioOffset,
                                    this.privRequestSession.sessionId
                                  )),
                                  this.privRecognizer.speechEndDetected &&
                                    this.privRecognizer.speechEndDetected(this.privRecognizer, c),
                                  e.abrupt('break', 60)
                                );
                              case 36:
                                return (e.next = 38), this.sendTelemetryData();
                              case 38:
                                if (!this.privRequestSession.isSpeechEnded || !this.privMustReportEndOfStream) {
                                  e.next = 42;
                                  break;
                                }
                                return (
                                  (this.privMustReportEndOfStream = !1),
                                  (e.next = 42),
                                  this.cancelRecognitionLocal(m.a.EndOfStream, g.a.NoError, void 0)
                                );
                              case 42:
                                return (
                                  (l = new S.a(this.privRequestSession.sessionId)),
                                  (e.next = 45),
                                  this.privRequestSession.onServiceTurnEndResponse(
                                    this.privRecognizerConfig.isContinuousRecognition
                                  )
                                );
                              case 45:
                                if (
                                  this.privRecognizerConfig.isContinuousRecognition &&
                                  !this.privRequestSession.isSpeechEnded &&
                                  this.privRequestSession.isRecognizing
                                ) {
                                  e.next = 50;
                                  break;
                                }
                                return (
                                  this.privRecognizer.sessionStopped &&
                                    this.privRecognizer.sessionStopped(this.privRecognizer, l),
                                  e.abrupt('return')
                                );
                              case 50:
                                return (e.next = 52), this.fetchConnection();
                              case 52:
                                return (t = e.sent), (e.next = 55), this.sendPrePayloadJSON(t);
                              case 55:
                                return e.abrupt('break', 60);
                              case 56:
                                return (e.next = 58), this.processTypeSpecificMessages(r);
                              case 58:
                                if (e.sent) {
                                  e.next = 60;
                                  break;
                                }
                                this.privServiceEvents &&
                                  this.serviceEvents.onEvent(new d.h(r.path.toLowerCase(), r.textBody));
                              case 60:
                                return e.abrupt('return', this.receiveMessage());
                              case 63:
                                return (e.prev = 63), (e.t1 = e.catch(0)), e.abrupt('return', null);
                              case 66:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 63]]
                      );
                    })
                  );
                },
              },
              {
                key: 'sendPrePayloadJSON',
                value: function (e) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (void 0 === this.sendPrePayloadJSONOverride) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return', this.sendPrePayloadJSONOverride(e));
                              case 2:
                                return (t.next = 4), this.sendSpeechContext(e);
                              case 4:
                                return (t.next = 6), this.sendWaveHeader(e);
                              case 6:
                                return t.abrupt('return');
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'sendWaveHeader',
                value: function (e) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      var n;
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.audioSource.format;
                              case 2:
                                return (
                                  (n = t.sent),
                                  t.abrupt(
                                    'return',
                                    e.send(
                                      new R.a(
                                        l.b.Binary,
                                        'audio',
                                        this.privRequestSession.requestId,
                                        'audio/x-wav',
                                        n.header
                                      )
                                    )
                                  )
                                );
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'connectImpl',
                value: function () {
                  var e = this;
                  return this.privConnectionPromise
                    ? this.privConnectionPromise.then(
                        function (t) {
                          return t.state() === v.a.Disconnected
                            ? ((e.privConnectionId = null),
                              (e.privConnectionPromise = null),
                              (e.privServiceHasSentMessage = !1),
                              e.connectImpl())
                            : e.privConnectionPromise;
                        },
                        function (t) {
                          return (
                            (e.privConnectionId = null),
                            (e.privConnectionPromise = null),
                            (e.privServiceHasSentMessage = !1),
                            e.connectImpl()
                          );
                        }
                      )
                    : ((this.privConnectionPromise = this.retryableConnect()),
                      this.privConnectionPromise.catch(function () {}),
                      void 0 !== this.postConnectImplOverride
                        ? this.postConnectImplOverride(this.privConnectionPromise)
                        : this.privConnectionPromise);
                },
              },
              {
                key: 'fetchConnection',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t = this;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.privConnectionConfigurationPromise) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt(
                                  'return',
                                  this.privConnectionConfigurationPromise.then(
                                    function (e) {
                                      return e.state() === v.a.Disconnected
                                        ? ((t.privConnectionId = null),
                                          (t.privConnectionConfigurationPromise = null),
                                          (t.privServiceHasSentMessage = !1),
                                          t.fetchConnection())
                                        : t.privConnectionConfigurationPromise;
                                    },
                                    function (e) {
                                      return (
                                        (t.privConnectionId = null),
                                        (t.privConnectionConfigurationPromise = null),
                                        (t.privServiceHasSentMessage = !1),
                                        t.fetchConnection()
                                      );
                                    }
                                  )
                                );
                              case 2:
                                return (
                                  (this.privConnectionConfigurationPromise = this.configureConnection()),
                                  (e.next = 5),
                                  this.privConnectionConfigurationPromise
                                );
                              case 5:
                                return e.abrupt('return', e.sent);
                              case 6:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'sendAudio',
                value: function (e) {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      var n,
                        r,
                        o,
                        a,
                        s,
                        u,
                        c = this;
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.audioSource.format;
                              case 2:
                                return (
                                  (n = t.sent),
                                  (r = Date.now()),
                                  (o = this.privRecognizerConfig.parameters.getProperty(
                                    'SPEECH-TransmitLengthBeforThrottleMs',
                                    '5000'
                                  )),
                                  (a = (n.avgBytesPerSec / 1e3) * parseInt(o, 10)),
                                  (s = this.privRequestSession.recogNumber),
                                  (u = function t() {
                                    return T(
                                      c,
                                      void 0,
                                      void 0,
                                      i.a.mark(function o() {
                                        var u,
                                          c,
                                          f,
                                          p,
                                          h = this;
                                        return i.a.wrap(
                                          function (i) {
                                            for (;;)
                                              switch ((i.prev = i.next)) {
                                                case 0:
                                                  if (
                                                    this.privIsDisposed ||
                                                    this.privRequestSession.isSpeechEnded ||
                                                    !this.privRequestSession.isRecognizing ||
                                                    this.privRequestSession.recogNumber !== s
                                                  ) {
                                                    i.next = 21;
                                                    break;
                                                  }
                                                  return (i.next = 3), this.fetchConnection();
                                                case 3:
                                                  return (u = i.sent), (i.next = 6), e.read();
                                                case 6:
                                                  if (((c = i.sent), !this.privRequestSession.isSpeechEnded)) {
                                                    i.next = 9;
                                                    break;
                                                  }
                                                  return i.abrupt('return');
                                                case 9:
                                                  if (
                                                    (!c || c.isEnd
                                                      ? ((f = null), (p = 0))
                                                      : ((f = c.buffer),
                                                        this.privRequestSession.onAudioSent(f.byteLength),
                                                        (p =
                                                          a >= this.privRequestSession.bytesSent
                                                            ? 0
                                                            : Math.max(0, r - Date.now()))),
                                                    0 === p)
                                                  ) {
                                                    i.next = 13;
                                                    break;
                                                  }
                                                  return (i.next = 13), this.delay(p);
                                                case 13:
                                                  if (
                                                    (null !== f &&
                                                      (r = Date.now() + (1e3 * f.byteLength) / (2 * n.avgBytesPerSec)),
                                                    this.privIsDisposed ||
                                                      this.privRequestSession.isSpeechEnded ||
                                                      !this.privRequestSession.isRecognizing ||
                                                      this.privRequestSession.recogNumber !== s)
                                                  ) {
                                                    i.next = 21;
                                                    break;
                                                  }
                                                  if (
                                                    (u
                                                      .send(
                                                        new R.a(
                                                          l.b.Binary,
                                                          'audio',
                                                          this.privRequestSession.requestId,
                                                          null,
                                                          f
                                                        )
                                                      )
                                                      .catch(function () {
                                                        h.privRequestSession
                                                          .onServiceTurnEndResponse(
                                                            h.privRecognizerConfig.isContinuousRecognition
                                                          )
                                                          .catch(function () {});
                                                      }),
                                                    null === c || void 0 === c ? void 0 : c.isEnd)
                                                  ) {
                                                    i.next = 20;
                                                    break;
                                                  }
                                                  return i.abrupt('return', t());
                                                case 20:
                                                  this.privIsLiveAudio || this.privRequestSession.onSpeechEnded();
                                                case 21:
                                                case 'end':
                                                  return i.stop();
                                              }
                                          },
                                          o,
                                          this
                                        );
                                      })
                                    );
                                  }),
                                  t.abrupt('return', u())
                                );
                              case 9:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'retryableConnect',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t,
                        n,
                        r,
                        o,
                        a,
                        s,
                        u,
                        c,
                        l = this;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = !1),
                                  (this.privAuthFetchEventId = Object(y.a)()),
                                  (n = this.privRequestSession.sessionId),
                                  (this.privConnectionId = void 0 !== n ? n : Object(y.a)()),
                                  this.privRequestSession.onPreConnectionStart(
                                    this.privAuthFetchEventId,
                                    this.privConnectionId
                                  ),
                                  (r = 0),
                                  (o = '');
                              case 7:
                                if (
                                  !(
                                    this.privRequestSession.numConnectionAttempts <=
                                    this.privRecognizerConfig.maxRetryCount
                                  )
                                ) {
                                  e.next = 32;
                                  break;
                                }
                                return (
                                  (a = t
                                    ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId)
                                    : this.privAuthentication.fetch(this.privAuthFetchEventId)),
                                  (e.next = 11),
                                  a
                                );
                              case 11:
                                return (s = e.sent), (e.next = 14), this.privRequestSession.onAuthCompleted(!1);
                              case 14:
                                return (
                                  (u = this.privConnectionFactory.create(
                                    this.privRecognizerConfig,
                                    s,
                                    this.privConnectionId
                                  )),
                                  this.privRequestSession.listenForServiceTelemetry(u.events),
                                  u.events.attach(function (e) {
                                    l.connectionEvents.onEvent(e);
                                  }),
                                  (e.next = 19),
                                  u.open()
                                );
                              case 19:
                                if (200 !== (c = e.sent).statusCode) {
                                  e.next = 26;
                                  break;
                                }
                                return (
                                  (e.next = 23), this.privRequestSession.onConnectionEstablishCompleted(c.statusCode)
                                );
                              case 23:
                                return e.abrupt('return', Promise.resolve(u));
                              case 26:
                                1006 === c.statusCode && (t = !0);
                              case 27:
                                (r = c.statusCode),
                                  (o = c.reason),
                                  this.privRequestSession.onRetryConnection(),
                                  (e.next = 7);
                                break;
                              case 32:
                                return (e.next = 34), this.privRequestSession.onConnectionEstablishCompleted(r, o);
                              case 34:
                                return e.abrupt(
                                  'return',
                                  Promise.reject(
                                    'Unable to contact server. StatusCode: '
                                      .concat(r, ', ')
                                      .concat(
                                        this.privRecognizerConfig.parameters.getProperty(
                                          b.a.SpeechServiceConnection_Endpoint
                                        ),
                                        ' Reason: '
                                      )
                                      .concat(o)
                                  )
                                );
                              case 35:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'delay',
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    t.privSetTimeout(n, e);
                  });
                },
              },
              {
                key: 'writeBufferToConsole',
                value: function (e) {
                  var t = 'Buffer Size: ';
                  if (null === e) t += 'null';
                  else {
                    var n = new Uint8Array(e);
                    t += e.byteLength + '\r\n';
                    for (var r = 0; r < e.byteLength; r++) t += n[r].toString(16).padStart(2, '0') + ' ';
                  }
                  console.info(t);
                },
              },
              {
                key: 'sendFinalAudio',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.fetchConnection();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  t.send(new R.a(l.b.Binary, 'audio', this.privRequestSession.requestId, null, null))
                                );
                              case 5:
                                return e.abrupt('return');
                              case 6:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'configureConnection',
                value: function () {
                  return T(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.connectImpl();
                              case 2:
                                if (((t = e.sent), void 0 === this.configConnectionOverride)) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt('return', this.configConnectionOverride(t));
                              case 5:
                                return (
                                  (e.next = 7),
                                  this.sendSpeechServiceConfig(
                                    t,
                                    this.privRequestSession,
                                    this.privRecognizerConfig.SpeechServiceConfig.serialize()
                                  )
                                );
                              case 7:
                                return (e.next = 9), this.sendPrePayloadJSON(t);
                              case 9:
                                return e.abrupt('return', t);
                              case 10:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
      I.telemetryDataEnabled = !0;
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return y;
      });
      var r = n(17),
        i = n(2),
        o = n.n(i),
        a = n(0),
        s = n(1),
        u = n(42),
        c = n(61),
        l = n(26),
        f = n(31),
        p = n(30),
        h = n(154),
        d = (function () {
          function e(t, n, r) {
            var i = this;
            Object(a.a)(this, e),
              (this.privIsDisposed = !1),
              (this.privListeningTriggerMetric = null),
              (this.privMicMetric = null),
              (this.privConnectionEstablishMetric = null),
              (this.onEvent = function (e) {
                if (
                  !i.privIsDisposed &&
                  (e instanceof f.d &&
                    e.requestId === i.privRequestId &&
                    (i.privListeningTriggerMetric = { End: e.eventTime, Name: 'ListeningTrigger', Start: e.eventTime }),
                  e instanceof p.f &&
                    e.audioSourceId === i.privAudioSourceId &&
                    e.audioNodeId === i.privAudioNodeId &&
                    (i.privMicStartTime = e.eventTime),
                  e instanceof p.e &&
                    e.audioSourceId === i.privAudioSourceId &&
                    e.audioNodeId === i.privAudioNodeId &&
                    (i.privMicStartTime = e.eventTime),
                  e instanceof p.a &&
                    e.audioSourceId === i.privAudioSourceId &&
                    (i.privMicMetric ||
                      (i.privMicMetric = {
                        End: e.eventTime,
                        Error: e.error,
                        Name: 'Microphone',
                        Start: i.privMicStartTime,
                      })),
                  e instanceof p.h &&
                    e.audioSourceId === i.privAudioSourceId &&
                    e.audioNodeId === i.privAudioNodeId &&
                    (i.privMicMetric ||
                      (i.privMicMetric = {
                        End: e.eventTime,
                        Error: e.error,
                        Name: 'Microphone',
                        Start: i.privMicStartTime,
                      })),
                  e instanceof p.g &&
                    e.audioSourceId === i.privAudioSourceId &&
                    e.audioNodeId === i.privAudioNodeId &&
                    (i.privMicMetric ||
                      (i.privMicMetric = { End: e.eventTime, Name: 'Microphone', Start: i.privMicStartTime })),
                  e instanceof f.a && e.requestId === i.privRequestId && (i.privConnectionId = e.sessionId),
                  e instanceof h.g &&
                    e.connectionId === i.privConnectionId &&
                    (i.privConnectionStartTime = e.eventTime),
                  e instanceof h.d &&
                    e.connectionId === i.privConnectionId &&
                    (i.privConnectionEstablishMetric ||
                      (i.privConnectionEstablishMetric = {
                        End: e.eventTime,
                        Id: i.privConnectionId,
                        Name: 'Connection',
                        Start: i.privConnectionStartTime,
                      })),
                  e instanceof h.c &&
                    e.connectionId === i.privConnectionId &&
                    (i.privConnectionEstablishMetric ||
                      (i.privConnectionEstablishMetric = {
                        End: e.eventTime,
                        Error: i.getConnectionError(e.statusCode),
                        Id: i.privConnectionId,
                        Name: 'Connection',
                        Start: i.privConnectionStartTime,
                      })),
                  e instanceof h.e &&
                    e.connectionId === i.privConnectionId &&
                    e.message &&
                    e.message.headers &&
                    e.message.headers.path)
                ) {
                  i.privReceivedMessages[e.message.headers.path] ||
                    (i.privReceivedMessages[e.message.headers.path] = new Array());
                  i.privReceivedMessages[e.message.headers.path].length < 50 &&
                    i.privReceivedMessages[e.message.headers.path].push(e.networkReceivedTime);
                }
              }),
              (this.getTelemetry = function () {
                var e = new Array();
                i.privListeningTriggerMetric && e.push(i.privListeningTriggerMetric),
                  i.privMicMetric && e.push(i.privMicMetric),
                  i.privConnectionEstablishMetric && e.push(i.privConnectionEstablishMetric),
                  i.privPhraseLatencies.length > 0 && e.push({ PhraseLatencyMs: i.privPhraseLatencies }),
                  i.privHypothesisLatencies.length > 0 &&
                    e.push({ FirstHypothesisLatencyMs: i.privHypothesisLatencies });
                var t = { Metrics: e, ReceivedMessages: i.privReceivedMessages },
                  n = JSON.stringify(t);
                return (
                  (i.privReceivedMessages = {}),
                  (i.privListeningTriggerMetric = null),
                  (i.privMicMetric = null),
                  (i.privConnectionEstablishMetric = null),
                  (i.privPhraseLatencies = []),
                  (i.privHypothesisLatencies = []),
                  n
                );
              }),
              (this.dispose = function () {
                i.privIsDisposed = !0;
              }),
              (this.getConnectionError = function (e) {
                switch (e) {
                  case 400:
                  case 1002:
                  case 1003:
                  case 1005:
                  case 1007:
                  case 1008:
                  case 1009:
                    return 'BadRequest';
                  case 401:
                    return 'Unauthorized';
                  case 403:
                    return 'Forbidden';
                  case 503:
                  case 1001:
                    return 'ServerUnavailable';
                  case 500:
                  case 1011:
                    return 'ServerError';
                  case 408:
                  case 504:
                    return 'Timeout';
                  default:
                    return 'statuscode:' + e.toString();
                }
              }),
              (this.privRequestId = t),
              (this.privAudioSourceId = n),
              (this.privAudioNodeId = r),
              (this.privReceivedMessages = {}),
              (this.privPhraseLatencies = []),
              (this.privHypothesisLatencies = []);
          }
          return (
            Object(s.a)(e, [
              {
                key: 'phraseReceived',
                value: function (e) {
                  e > 0 && this.privPhraseLatencies.push(Date.now() - e);
                },
              },
              {
                key: 'hypothesisReceived',
                value: function (e) {
                  e > 0 && this.privHypothesisLatencies.push(Date.now() - e);
                },
              },
              {
                key: 'hasTelemetry',
                get: function () {
                  return (
                    0 !== Object.keys(this.privReceivedMessages).length ||
                    null !== this.privListeningTriggerMetric ||
                    null !== this.privMicMetric ||
                    null !== this.privConnectionEstablishMetric ||
                    0 !== this.privPhraseLatencies.length ||
                    0 !== this.privHypothesisLatencies.length
                  );
                },
              },
            ]),
            e
          );
        })(),
        v = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        y = (function () {
          function e(t) {
            var n = this;
            Object(a.a)(this, e),
              (this.privIsDisposed = !1),
              (this.privDetachables = new Array()),
              (this.privIsAudioNodeDetached = !1),
              (this.privIsRecognizing = !1),
              (this.privIsSpeechEnded = !1),
              (this.privTurnStartAudioOffset = 0),
              (this.privLastRecoOffset = 0),
              (this.privHypothesisReceived = !1),
              (this.privBytesSent = 0),
              (this.privRecogNumber = 0),
              (this.privInTurn = !1),
              (this.privConnectionAttempts = 0),
              (this.onPreConnectionStart = function (e, t) {
                (n.privAuthFetchEventId = e),
                  (n.privSessionId = t),
                  n.onEvent(new f.a(n.privRequestId, n.privAuthFetchEventId, n.privSessionId));
              }),
              (this.onServiceTurnStartResponse = function () {
                n.privTurnDeferral &&
                  n.privInTurn &&
                  (n.privTurnDeferral.reject('Another turn started before current completed.'),
                  n.privTurnDeferral.promise.then().catch(function () {})),
                  (n.privInTurn = !0),
                  (n.privTurnDeferral = new u.a());
              }),
              (this.getTelemetry = function () {
                return n.privServiceTelemetryListener.hasTelemetry
                  ? n.privServiceTelemetryListener.getTelemetry()
                  : null;
              }),
              (this.onEvent = function (e) {
                n.privServiceTelemetryListener && n.privServiceTelemetryListener.onEvent(e), c.a.instance.onEvent(e);
              }),
              (this.privAudioSourceId = t),
              (this.privRequestId = Object(l.a)()),
              (this.privAudioNodeId = Object(l.a)()),
              (this.privTurnDeferral = new u.a()),
              this.privTurnDeferral.resolve();
          }
          return (
            Object(s.a)(e, [
              {
                key: 'sessionId',
                get: function () {
                  return this.privSessionId;
                },
              },
              {
                key: 'requestId',
                get: function () {
                  return this.privRequestId;
                },
              },
              {
                key: 'audioNodeId',
                get: function () {
                  return this.privAudioNodeId;
                },
              },
              {
                key: 'turnCompletionPromise',
                get: function () {
                  return this.privTurnDeferral.promise;
                },
              },
              {
                key: 'isSpeechEnded',
                get: function () {
                  return this.privIsSpeechEnded;
                },
              },
              {
                key: 'isRecognizing',
                get: function () {
                  return this.privIsRecognizing;
                },
              },
              {
                key: 'currentTurnAudioOffset',
                get: function () {
                  return this.privTurnStartAudioOffset;
                },
              },
              {
                key: 'recogNumber',
                get: function () {
                  return this.privRecogNumber;
                },
              },
              {
                key: 'numConnectionAttempts',
                get: function () {
                  return this.privConnectionAttempts;
                },
              },
              {
                key: 'bytesSent',
                get: function () {
                  return this.privBytesSent;
                },
              },
              {
                key: 'listenForServiceTelemetry',
                value: function (e) {
                  this.privServiceTelemetryListener &&
                    this.privDetachables.push(e.attachListener(this.privServiceTelemetryListener));
                },
              },
              {
                key: 'startNewRecognition',
                value: function () {
                  (this.privIsSpeechEnded = !1),
                    (this.privIsRecognizing = !0),
                    (this.privTurnStartAudioOffset = 0),
                    (this.privLastRecoOffset = 0),
                    (this.privRequestId = Object(l.a)()),
                    this.privRecogNumber++,
                    (this.privServiceTelemetryListener = new d(
                      this.privRequestId,
                      this.privAudioSourceId,
                      this.privAudioNodeId
                    )),
                    this.onEvent(
                      new f.d(this.requestId, this.privSessionId, this.privAudioSourceId, this.privAudioNodeId)
                    );
                },
              },
              {
                key: 'onAudioSourceAttachCompleted',
                value: function (e, t, n) {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function n() {
                      return o.a.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (((this.privAudioNode = e), (this.privIsAudioNodeDetached = !1), !t)) {
                                  n.next = 7;
                                  break;
                                }
                                return (n.next = 5), this.onComplete();
                              case 5:
                                n.next = 8;
                                break;
                              case 7:
                                this.onEvent(
                                  new f.b(
                                    this.privRequestId,
                                    this.privSessionId,
                                    this.privAudioSourceId,
                                    this.privAudioNodeId
                                  )
                                );
                              case 8:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'onAuthCompleted',
                value: function (e, t) {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!e) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.onComplete();
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'onConnectionEstablishCompleted',
                value: function (e, t) {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (200 !== e) {
                                  t.next = 8;
                                  break;
                                }
                                return (
                                  this.onEvent(
                                    new f.c(
                                      this.requestId,
                                      this.privAudioSourceId,
                                      this.privAudioNodeId,
                                      this.privAuthFetchEventId,
                                      this.privSessionId
                                    )
                                  ),
                                  this.privAudioNode && this.privAudioNode.replay(),
                                  (this.privTurnStartAudioOffset = this.privLastRecoOffset),
                                  (this.privBytesSent = 0),
                                  t.abrupt('return')
                                );
                              case 8:
                                if (403 !== e) {
                                  t.next = 11;
                                  break;
                                }
                                return (t.next = 11), this.onComplete();
                              case 11:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'onServiceTurnEndResponse',
                value: function (e) {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ((this.privTurnDeferral.resolve(), e && !this.isSpeechEnded)) {
                                  t.next = 7;
                                  break;
                                }
                                return (t.next = 4), this.onComplete();
                              case 4:
                                (this.privInTurn = !1), (t.next = 10);
                                break;
                              case 7:
                                (this.privTurnStartAudioOffset = this.privLastRecoOffset),
                                  (this.privRequestId = Object(l.a)()),
                                  this.privAudioNode.replay();
                              case 10:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'onHypothesis',
                value: function (e) {
                  this.privHypothesisReceived ||
                    ((this.privHypothesisReceived = !0),
                    this.privServiceTelemetryListener.hypothesisReceived(this.privAudioNode.findTimeAtOffset(e)));
                },
              },
              {
                key: 'onPhraseRecognized',
                value: function (e) {
                  this.privServiceTelemetryListener.phraseReceived(this.privAudioNode.findTimeAtOffset(e)),
                    this.onServiceRecognized(e);
                },
              },
              {
                key: 'onServiceRecognized',
                value: function (e) {
                  (this.privLastRecoOffset = e),
                    (this.privHypothesisReceived = !1),
                    this.privAudioNode.shrinkBuffers(e),
                    (this.privConnectionAttempts = 0);
                },
              },
              {
                key: 'onAudioSent',
                value: function (e) {
                  this.privBytesSent += e;
                },
              },
              {
                key: 'onRetryConnection',
                value: function () {
                  this.privConnectionAttempts++;
                },
              },
              {
                key: 'dispose',
                value: function (e) {
                  var t;
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function e() {
                      var n, i, a;
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.privIsDisposed) {
                                  e.next = 21;
                                  break;
                                }
                                (this.privIsDisposed = !0),
                                  (n = Object(r.a)(this.privDetachables)),
                                  (e.prev = 3),
                                  n.s();
                              case 5:
                                if ((i = n.n()).done) {
                                  e.next = 11;
                                  break;
                                }
                                return (a = i.value), (e.next = 9), a.detach();
                              case 9:
                                e.next = 5;
                                break;
                              case 11:
                                e.next = 16;
                                break;
                              case 13:
                                (e.prev = 13), (e.t0 = e.catch(3)), n.e(e.t0);
                              case 16:
                                return (e.prev = 16), n.f(), e.finish(16);
                              case 19:
                                null === (t = this.privServiceTelemetryListener) || void 0 === t || t.dispose(),
                                  (this.privIsRecognizing = !1);
                              case 21:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 13, 16, 19]]
                      );
                    })
                  );
                },
              },
              {
                key: 'onStopRecognizing',
                value: function () {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function e() {
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.onComplete();
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'onSpeechEnded',
                value: function () {
                  this.privIsSpeechEnded = !0;
                },
              },
              {
                key: 'onComplete',
                value: function () {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function e() {
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.privIsRecognizing) {
                                  e.next = 4;
                                  break;
                                }
                                return (this.privIsRecognizing = !1), (e.next = 4), this.detachAudioNode();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'detachAudioNode',
                value: function () {
                  return v(
                    this,
                    void 0,
                    void 0,
                    o.a.mark(function e() {
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.privIsAudioNodeDetached) {
                                  e.next = 5;
                                  break;
                                }
                                if (((this.privIsAudioNodeDetached = !0), !this.privAudioNode)) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 5), this.privAudioNode.detach();
                              case 5:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return S;
      });
      var r = n(2),
        i = n.n(r),
        o = n(0),
        a = n(1),
        s = n(42),
        u = n(61),
        c = n(26),
        l = n(37),
        f = n(44),
        p = n(3),
        h = n(4),
        d = n(9),
        v = (function (e) {
          Object(p.a)(n, e);
          var t = Object(h.a)(n);
          function n(e, r) {
            var i,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.a.Info;
            return Object(o.a)(this, n), ((i = t.call(this, e, a)).privRequestId = r), i;
          }
          return (
            Object(a.a)(n, [
              {
                key: 'requestId',
                get: function () {
                  return this.privRequestId;
                },
              },
            ]),
            n
          );
        })(d.b),
        y = (function (e) {
          Object(p.a)(n, e);
          var t = Object(h.a)(n);
          function n(e, r, i) {
            var a;
            return (
              Object(o.a)(this, n),
              ((a = t.call(this, 'SynthesisTriggeredEvent', e)).privSessionAudioDestinationId = r),
              (a.privTurnAudioDestinationId = i),
              a
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: 'audioSessionDestinationId',
                get: function () {
                  return this.privSessionAudioDestinationId;
                },
              },
              {
                key: 'audioTurnDestinationId',
                get: function () {
                  return this.privTurnAudioDestinationId;
                },
              },
            ]),
            n
          );
        })(v),
        m = (function (e) {
          Object(p.a)(n, e);
          var t = Object(h.a)(n);
          function n(e, r) {
            var i;
            return (
              Object(o.a)(this, n),
              ((i = t.call(this, 'ConnectingToSynthesisServiceEvent', e)).privAuthFetchEventId = r),
              i
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: 'authFetchEventId',
                get: function () {
                  return this.privAuthFetchEventId;
                },
              },
            ]),
            n
          );
        })(v),
        g = (function (e) {
          Object(p.a)(n, e);
          var t = Object(h.a)(n);
          function n(e, r) {
            var i;
            return Object(o.a)(this, n), ((i = t.call(this, 'SynthesisStartedEvent', e)).privAuthFetchEventId = r), i;
          }
          return (
            Object(a.a)(n, [
              {
                key: 'authFetchEventId',
                get: function () {
                  return this.privAuthFetchEventId;
                },
              },
            ]),
            n
          );
        })(v),
        b = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        S = (function () {
          function e() {
            var t = this;
            Object(o.a)(this, e),
              (this.privIsDisposed = !1),
              (this.privIsSynthesizing = !1),
              (this.privIsSynthesisEnded = !1),
              (this.privBytesReceived = 0),
              (this.privInTurn = !1),
              (this.privTextOffset = 0),
              (this.privNextSearchTextIndex = 0),
              (this.onPreConnectionStart = function (e, n) {
                (t.privAuthFetchEventId = e), t.onEvent(new m(t.privRequestId, t.privAuthFetchEventId));
              }),
              (this.onAuthCompleted = function (e, n) {
                e && t.onComplete();
              }),
              (this.onConnectionEstablishCompleted = function (e, n) {
                if (200 === e)
                  return t.onEvent(new g(t.requestId, t.privAuthFetchEventId)), void (t.privBytesReceived = 0);
                403 === e && t.onComplete();
              }),
              (this.onServiceResponseMessage = function (e) {
                var n = JSON.parse(e);
                t.streamId = n.audio.streamId;
              }),
              (this.onServiceTurnEndResponse = function () {
                (t.privInTurn = !1), t.privTurnDeferral.resolve(), t.onComplete();
              }),
              (this.onServiceTurnStartResponse = function () {
                t.privTurnDeferral &&
                  t.privInTurn &&
                  (t.privTurnDeferral.reject('Another turn started before current completed.'),
                  t.privTurnDeferral.promise.then().catch(function () {})),
                  (t.privInTurn = !0),
                  (t.privTurnDeferral = new s.a());
              }),
              (this.dispose = function (e) {
                t.privIsDisposed || (t.privIsDisposed = !0);
              }),
              (this.onEvent = function (e) {
                u.a.instance.onEvent(e);
              }),
              (this.onComplete = function () {
                t.privIsSynthesizing &&
                  ((t.privIsSynthesizing = !1),
                  (t.privIsSynthesisEnded = !0),
                  t.privAudioOutputStream.close(),
                  (t.privInTurn = !1),
                  void 0 !== t.privTurnAudioDestination &&
                    (t.privTurnAudioDestination.close(), (t.privTurnAudioDestination = void 0)));
              }),
              (this.privRequestId = Object(c.a)()),
              (this.privTurnDeferral = new s.a()),
              this.privTurnDeferral.resolve();
          }
          return (
            Object(a.a)(e, [
              {
                key: 'requestId',
                get: function () {
                  return this.privRequestId;
                },
              },
              {
                key: 'streamId',
                get: function () {
                  return this.privStreamId;
                },
                set: function (e) {
                  this.privStreamId = e;
                },
              },
              {
                key: 'audioOutputFormat',
                get: function () {
                  return this.privAudioOutputFormat;
                },
                set: function (e) {
                  this.privAudioOutputFormat = e;
                },
              },
              {
                key: 'turnCompletionPromise',
                get: function () {
                  return this.privTurnDeferral.promise;
                },
              },
              {
                key: 'isSynthesisEnded',
                get: function () {
                  return this.privIsSynthesisEnded;
                },
              },
              {
                key: 'isSynthesizing',
                get: function () {
                  return this.privIsSynthesizing;
                },
              },
              {
                key: 'currentTextOffset',
                get: function () {
                  return this.privTextOffset;
                },
              },
              {
                key: 'bytesReceived',
                get: function () {
                  return this.privBytesReceived;
                },
              },
              {
                key: 'getAllReceivedAudio',
                value: function () {
                  return b(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.privReceivedAudio) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', Promise.resolve(this.privReceivedAudio));
                              case 2:
                                if (this.privIsSynthesisEnded) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt('return', null);
                              case 4:
                                return (e.next = 6), this.readAllAudioFromStream();
                              case 6:
                                return e.abrupt('return', Promise.resolve(this.privReceivedAudio));
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'getAllReceivedAudioWithHeader',
                value: function () {
                  return b(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.privReceivedAudioWithHeader) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', this.privReceivedAudioWithHeader);
                              case 2:
                                if (this.privIsSynthesisEnded) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt('return', null);
                              case 4:
                                if (!this.audioOutputFormat.hasHeader) {
                                  e.next = 12;
                                  break;
                                }
                                return (e.next = 7), this.getAllReceivedAudio();
                              case 7:
                                return (
                                  (t = e.sent),
                                  (this.privReceivedAudioWithHeader = f.a.addHeader(t, this.audioOutputFormat)),
                                  e.abrupt('return', this.privReceivedAudioWithHeader)
                                );
                              case 12:
                                return e.abrupt('return', this.getAllReceivedAudio());
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'startNewSynthesis',
                value: function (e, t, n, r) {
                  (this.privIsSynthesisEnded = !1),
                    (this.privIsSynthesizing = !0),
                    (this.privRequestId = e),
                    (this.privRawText = t),
                    (this.privIsSSML = n),
                    (this.privAudioOutputStream = new l.b()),
                    (this.privAudioOutputStream.format = this.privAudioOutputFormat),
                    (this.privReceivedAudio = null),
                    (this.privReceivedAudioWithHeader = null),
                    (this.privBytesReceived = 0),
                    (this.privTextOffset = 0),
                    (this.privNextSearchTextIndex = 0),
                    (this.privPartialVisemeAnimation = ''),
                    void 0 !== r &&
                      ((this.privTurnAudioDestination = r),
                      (this.privTurnAudioDestination.format = this.privAudioOutputFormat)),
                    this.onEvent(new y(this.requestId, void 0, void 0 === r ? void 0 : r.id()));
                },
              },
              {
                key: 'onAudioChunkReceived',
                value: function (e) {
                  this.isSynthesizing &&
                    (this.privAudioOutputStream.write(e),
                    (this.privBytesReceived += e.byteLength),
                    void 0 !== this.privTurnAudioDestination && this.privTurnAudioDestination.write(e));
                },
              },
              {
                key: 'onWordBoundaryEvent',
                value: function (e) {
                  this.updateTextOffset(e);
                },
              },
              {
                key: 'onVisemeMetadataReceived',
                value: function (e) {
                  void 0 !== e.Data.AnimationChunk && (this.privPartialVisemeAnimation += e.Data.AnimationChunk);
                },
              },
              {
                key: 'onStopSynthesizing',
                value: function () {
                  this.onComplete();
                },
              },
              {
                key: 'getAndClearVisemeAnimation',
                value: function () {
                  var e = this.privPartialVisemeAnimation;
                  return (this.privPartialVisemeAnimation = ''), e;
                },
              },
              {
                key: 'updateTextOffset',
                value: function (e) {
                  this.privTextOffset >= 0 &&
                    ((this.privTextOffset = this.privRawText.indexOf(e, this.privNextSearchTextIndex)),
                    this.privTextOffset >= 0 && (this.privNextSearchTextIndex = this.privTextOffset + e.length),
                    this.privIsSSML &&
                      this.privRawText.indexOf('<', this.privTextOffset + 1) >
                        this.privRawText.indexOf('>', this.privTextOffset + 1) &&
                      this.updateTextOffset(e));
                },
              },
              {
                key: 'readAllAudioFromStream',
                value: function () {
                  return b(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.privIsSynthesisEnded) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  (this.privReceivedAudio = new ArrayBuffer(this.bytesReceived)),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this.privAudioOutputStream.read(this.privReceivedAudio)
                                );
                              case 5:
                                e.next = 10;
                                break;
                              case 7:
                                (e.prev = 7), (e.t0 = e.catch(2)), (this.privReceivedAudio = new ArrayBuffer(0));
                              case 10:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 7]]
                      );
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      !(function e() {
        if (
          'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(126));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n(0),
        i = n(1),
        o = n(41),
        a = (function () {
          function e() {
            Object(r.a)(this, e), (this.privKeys = []), (this.privValues = []);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'getProperty',
                value: function (e, t) {
                  var n;
                  n = 'string' === typeof e ? e : o.a[e];
                  for (var r = 0; r < this.privKeys.length; r++) if (this.privKeys[r] === n) return this.privValues[r];
                  return t;
                },
              },
              {
                key: 'setProperty',
                value: function (e, t) {
                  var n;
                  n = 'string' === typeof e ? e : o.a[e];
                  for (var r = 0; r < this.privKeys.length; r++)
                    if (this.privKeys[r] === n) return void (this.privValues[r] = t);
                  this.privKeys.push(n), this.privValues.push(t);
                },
              },
              {
                key: 'clone',
                value: function () {
                  for (var t = new e(), n = 0; n < this.privKeys.length; n++)
                    t.privKeys.push(this.privKeys[n]), t.privValues.push(this.privValues[n]);
                  return t;
                },
              },
              {
                key: 'mergeTo',
                value: function (e) {
                  var t = this;
                  this.privKeys.forEach(function (n) {
                    if (void 0 === e.getProperty(n, void 0)) {
                      var r = t.getProperty(n);
                      e.setProperty(n, r);
                    }
                  });
                },
              },
              {
                key: 'keys',
                get: function () {
                  return this.privKeys;
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      var r = n(132),
        i = n(133),
        o = i;
      (o.v1 = r), (o.v4 = i), (e.exports = o);
    },
    ,
    function (e, t, n) {
      'use strict';
      (function (e, r) {
        n.d(t, 'a', function () {
          return k;
        });
        var i = n(2),
          o = n.n(i),
          a = n(0),
          s = n(1),
          u = n(90),
          c = n(91),
          l = n.n(c),
          f = n(35),
          p = n(21),
          h = n(61),
          d = n(92),
          v = n.n(d),
          y = n(93),
          m = n.n(y),
          g = n(94),
          b = n.n(g),
          S = n(95),
          w = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          k = (function () {
            function t(n) {
              Object(a.a)(this, t),
                n && (this.privProxyInfo = n),
                t.privDiskCache ||
                  (t.privDiskCache = new m.a('microsoft-cognitiveservices-speech-sdk-cache', {
                    supportBuffer: !0,
                    location:
                      'undefined' !== typeof e &&
                      Object({
                        NODE_ENV: 'production',
                        PUBLIC_URL: '.',
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_AZURE_SERVICE_REGION: 'japaneast',
                        REACT_APP_AZURE_SUBSCRIPTION_KEY: '5720c7866e304029a4dc25b553e0e73e',
                      }).SPEECH_OCSP_CACHE_ROOT
                        ? Object({
                            NODE_ENV: 'production',
                            PUBLIC_URL: '.',
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0,
                            REACT_APP_AZURE_SERVICE_REGION: 'japaneast',
                            REACT_APP_AZURE_SUBSCRIPTION_KEY: '5720c7866e304029a4dc25b553e0e73e',
                          }).SPEECH_OCSP_CACHE_ROOT
                        : void 0,
                  }));
            }
            return (
              Object(s.a)(
                t,
                [
                  {
                    key: 'GetAgent',
                    value: function (e) {
                      var t = new v.a.Agent(this.CreateConnection);
                      if (
                        void 0 !== this.privProxyInfo &&
                        void 0 !== this.privProxyInfo.HostName &&
                        this.privProxyInfo.Port > 0
                      ) {
                        t.privProxyInfo = this.privProxyInfo;
                      }
                      return t;
                    },
                  },
                  {
                    key: 'CreateConnection',
                    value: function (n, r) {
                      var i,
                        o =
                          'undefined' !== typeof e &&
                          '0' !==
                            Object({
                              NODE_ENV: 'production',
                              PUBLIC_URL: '.',
                              WDS_SOCKET_HOST: void 0,
                              WDS_SOCKET_PATH: void 0,
                              WDS_SOCKET_PORT: void 0,
                              FAST_REFRESH: !0,
                              REACT_APP_AZURE_SERVICE_REGION: 'japaneast',
                              REACT_APP_AZURE_SUBSCRIPTION_KEY: '5720c7866e304029a4dc25b553e0e73e',
                            }).NODE_TLS_REJECT_UNAUTHORIZED &&
                          '0' !==
                            Object({
                              NODE_ENV: 'production',
                              PUBLIC_URL: '.',
                              WDS_SOCKET_HOST: void 0,
                              WDS_SOCKET_PATH: void 0,
                              WDS_SOCKET_PORT: void 0,
                              FAST_REFRESH: !0,
                              REACT_APP_AZURE_SERVICE_REGION: 'japaneast',
                              REACT_APP_AZURE_SUBSCRIPTION_KEY: '5720c7866e304029a4dc25b553e0e73e',
                            }).SPEECH_CONDUCT_OCSP_CHECK &&
                          r.secureEndpoint;
                      if (
                        ((r = Object.assign(Object.assign({}, r), {
                          requestOCSP: !t.forceDisableOCSPStapling,
                          servername: r.host,
                        })),
                        this.privProxyInfo)
                      ) {
                        var a = t.GetProxyAgent(this.privProxyInfo);
                        i = new Promise(function (e, t) {
                          a.callback(n, r, function (n, r) {
                            n ? t(n) : e(r);
                          });
                        });
                      } else i = r.secureEndpoint ? Promise.resolve(u.connect(r)) : Promise.resolve(S.connect(r));
                      return o ? t.OCSPCheck(i, this.privProxyInfo) : i;
                    },
                  },
                ],
                [
                  {
                    key: 'forceReinitDiskCache',
                    value: function () {
                      (t.privDiskCache = void 0), (t.privMemCache = {});
                    },
                  },
                  {
                    key: 'GetProxyAgent',
                    value: function (e) {
                      var t = { host: e.HostName, port: e.Port };
                      return (
                        e.UserName
                          ? (t.headers = {
                              'Proxy-Authentication':
                                'Basic ' +
                                new r(e.UserName + ':' + (void 0 === e.Password) ? '' : e.Password).toString('base64'),
                            })
                          : (t.headers = {}),
                        (t.headers.requestOCSP = 'true'),
                        new b.a(t)
                      );
                    },
                  },
                  {
                    key: 'OCSPCheck',
                    value: function (e, n) {
                      return w(
                        this,
                        void 0,
                        void 0,
                        o.a.mark(function r() {
                          var i,
                            a,
                            s,
                            u,
                            c,
                            l = this;
                          return o.a.wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (s = !1), (r.next = 3), e;
                                case 3:
                                  return (
                                    (u = r.sent).cork(),
                                    (c = u),
                                    r.abrupt(
                                      'return',
                                      new Promise(function (e, r) {
                                        u.on('OCSPResponse', function (e) {
                                          e && (l.onEvent(new p.n()), (a = e));
                                        }),
                                          u.on('error', function (e) {
                                            s || ((s = !0), u.destroy(), r(e));
                                          }),
                                          c.on('secure', function () {
                                            return w(
                                              l,
                                              void 0,
                                              void 0,
                                              o.a.mark(function l() {
                                                var p, h, d, v;
                                                return o.a.wrap(
                                                  function (o) {
                                                    for (;;)
                                                      switch ((o.prev = o.next)) {
                                                        case 0:
                                                          return (
                                                            (p = c.getPeerCertificate(!0)),
                                                            (o.prev = 1),
                                                            (o.next = 4),
                                                            this.GetIssuer(p)
                                                          );
                                                        case 4:
                                                          if (
                                                            ((h = o.sent),
                                                            (i = f.request.generate(p.raw, h.raw)),
                                                            (d = i.id.toString('hex')),
                                                            a)
                                                          ) {
                                                            o.next = 12;
                                                            break;
                                                          }
                                                          return (o.next = 10), t.GetResponseFromCache(d, i, n);
                                                        case 10:
                                                          (v = o.sent), (a = v);
                                                        case 12:
                                                          return (o.next = 14), this.VerifyOCSPResponse(a, i, n);
                                                        case 14:
                                                          u.uncork(), (s = !0), e(u), (o.next = 24);
                                                          break;
                                                        case 19:
                                                          (o.prev = 19),
                                                            (o.t0 = o.catch(1)),
                                                            u.destroy(),
                                                            (s = !0),
                                                            r(o.t0);
                                                        case 24:
                                                        case 'end':
                                                          return o.stop();
                                                      }
                                                  },
                                                  l,
                                                  this,
                                                  [[1, 19]]
                                                );
                                              })
                                            );
                                          });
                                      })
                                    )
                                  );
                                case 7:
                                case 'end':
                                  return r.stop();
                              }
                          }, r);
                        })
                      );
                    },
                  },
                  {
                    key: 'GetIssuer',
                    value: function (e) {
                      return e.issuerCertificate
                        ? Promise.resolve(e.issuerCertificate)
                        : new Promise(function (t, n) {
                            new f.Agent({}).fetchIssuer(e, null, function (e, r) {
                              e ? n(e) : t(r);
                            });
                          });
                    },
                  },
                  {
                    key: 'GetResponseFromCache',
                    value: function (e, n, r) {
                      return w(
                        this,
                        void 0,
                        void 0,
                        o.a.mark(function i() {
                          var a,
                            s,
                            u,
                            c,
                            l,
                            h,
                            d,
                            v = this;
                          return o.a.wrap(
                            function (i) {
                              for (;;)
                                switch ((i.prev = i.next)) {
                                  case 0:
                                    if (((a = t.privMemCache[e]) && this.onEvent(new p.k(e)), a)) {
                                      i.next = 13;
                                      break;
                                    }
                                    return (i.prev = 3), (i.next = 6), t.privDiskCache.get(e);
                                  case 6:
                                    (s = i.sent).isCached &&
                                      (t.onEvent(new p.i(e)), t.StoreMemoryCacheEntry(e, s.value), (a = s.value)),
                                      (i.next = 13);
                                    break;
                                  case 10:
                                    (i.prev = 10), (i.t0 = i.catch(3)), (a = null);
                                  case 13:
                                    if (a) {
                                      i.next = 15;
                                      break;
                                    }
                                    return i.abrupt('return', a);
                                  case 15:
                                    if (
                                      ((i.prev = 15),
                                      (u = f.utils.parseResponse(a)),
                                      !((c = u.value.tbsResponseData).responses.length < 1))
                                    ) {
                                      i.next = 21;
                                      break;
                                    }
                                    return (
                                      this.onEvent(new p.c(e, 'Not enough data in cached response')), i.abrupt('return')
                                    );
                                  case 21:
                                    (l = c.responses[0].thisUpdate),
                                      (h = c.responses[0].nextUpdate) < Date.now() + this.testTimeOffset - 6e4
                                        ? (this.onEvent(new p.a(e, h)), (a = null))
                                        : ((d = Math.min(864e5, (h - l) / 2)),
                                          h - (Date.now() + this.testTimeOffset) < d
                                            ? (this.onEvent(new p.b(e, l, h)),
                                              this.UpdateCache(n, r).catch(function (t) {
                                                v.onEvent(new p.f(e, t.toString()));
                                              }))
                                            : this.onEvent(new p.d(e, l, h))),
                                      (i.next = 30);
                                    break;
                                  case 26:
                                    (i.prev = 26), (i.t1 = i.catch(15)), this.onEvent(new p.c(e, i.t1)), (a = null);
                                  case 30:
                                    return a || this.onEvent(new p.e(e)), i.abrupt('return', a);
                                  case 32:
                                  case 'end':
                                    return i.stop();
                                }
                            },
                            i,
                            this,
                            [
                              [3, 10],
                              [15, 26],
                            ]
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'VerifyOCSPResponse',
                    value: function (e, n, r) {
                      return w(
                        this,
                        void 0,
                        void 0,
                        o.a.mark(function i() {
                          var a,
                            s = this;
                          return o.a.wrap(function (i) {
                            for (;;)
                              switch ((i.prev = i.next)) {
                                case 0:
                                  if (((a = e), n.certID.toString('hex'), a)) {
                                    i.next = 6;
                                    break;
                                  }
                                  return (i.next = 5), t.GetOCSPResponse(n, r);
                                case 5:
                                  a = i.sent;
                                case 6:
                                  return i.abrupt(
                                    'return',
                                    new Promise(function (i, o) {
                                      f.verify({ request: n, response: a }, function (u, c) {
                                        u
                                          ? (t.onEvent(new p.o(n.id.toString('hex'), u)),
                                            e
                                              ? s.VerifyOCSPResponse(null, n, r).then(
                                                  function () {
                                                    i();
                                                  },
                                                  function (e) {
                                                    o(e);
                                                  }
                                                )
                                              : o(u))
                                          : (e || t.StoreCacheEntry(n.id.toString('hex'), a), i());
                                      });
                                    })
                                  );
                                case 7:
                                case 'end':
                                  return i.stop();
                              }
                          }, i);
                        })
                      );
                    },
                  },
                  {
                    key: 'UpdateCache',
                    value: function (e, t) {
                      return w(
                        this,
                        void 0,
                        void 0,
                        o.a.mark(function n() {
                          var r, i;
                          return o.a.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (r = e.id.toString('hex')),
                                      this.onEvent(new p.g(r)),
                                      (n.next = 4),
                                      this.GetOCSPResponse(e, t)
                                    );
                                  case 4:
                                    (i = n.sent),
                                      this.StoreCacheEntry(r, i),
                                      this.onEvent(new p.h(e.id.toString('hex')));
                                  case 7:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'StoreCacheEntry',
                    value: function (e, t) {
                      this.StoreMemoryCacheEntry(e, t), this.StoreDiskCacheEntry(e, t);
                    },
                  },
                  {
                    key: 'StoreMemoryCacheEntry',
                    value: function (e, t) {
                      (this.privMemCache[e] = t), this.onEvent(new p.l(e));
                    },
                  },
                  {
                    key: 'StoreDiskCacheEntry',
                    value: function (e, t) {
                      var n = this;
                      this.privDiskCache.set(e, t).then(function () {
                        n.onEvent(new p.j(e));
                      });
                    },
                  },
                  {
                    key: 'GetOCSPResponse',
                    value: function (e, n) {
                      var r = this,
                        i = {};
                      if (n) {
                        var o = t.GetProxyAgent(n);
                        i.agent = o;
                      }
                      return new Promise(function (t, n) {
                        f.utils.getAuthorityInfo(e.cert, '1.3.6.1.5.5.7.48.1', function (o, a) {
                          if (o) n(o);
                          else {
                            var s = l.a(a);
                            (s.path = s.pathname),
                              (i = Object.assign(Object.assign({}, i), s)),
                              f.utils.getResponse(i, e.data, function (i, o) {
                                i ? n(i) : (r.onEvent(new p.m(e.certID.toString('hex'))), t(o));
                              });
                          }
                        });
                      });
                    },
                  },
                ]
              ),
              t
            );
          })();
        (k.testTimeOffset = 0),
          (k.forceDisableOCSPStapling = !1),
          (k.privMemCache = {}),
          (k.onEvent = function (e) {
            h.a.instance.onEvent(e);
          });
      }.call(this, n(134), n(66).Buffer));
    },
    ,
    function (e, t, n) {
      'use strict';
      (function (t) {
        var r = n(138),
          i = n(139),
          o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
          a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
          s = /^[a-zA-Z]:/,
          u = new RegExp(
            '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
          );
        function c(e) {
          return (e || '').toString().replace(u, '');
        }
        var l = [
            ['#', 'hash'],
            ['?', 'query'],
            function (e, t) {
              return h(t.protocol) ? e.replace(/\\/g, '/') : e;
            },
            ['/', 'pathname'],
            ['@', 'auth', 1],
            [NaN, 'host', void 0, 1, 1],
            [/:(\d+)$/, 'port', void 0, 1],
            [NaN, 'hostname', void 0, 1, 1],
          ],
          f = { hash: 1, query: 1 };
        function p(e) {
          var n,
            r =
              ('undefined' !== typeof window
                ? window
                : 'undefined' !== typeof t
                ? t
                : 'undefined' !== typeof self
                ? self
                : {}
              ).location || {},
            i = {},
            a = typeof (e = e || r);
          if ('blob:' === e.protocol) i = new v(unescape(e.pathname), {});
          else if ('string' === a) for (n in ((i = new v(e, {})), f)) delete i[n];
          else if ('object' === a) {
            for (n in e) n in f || (i[n] = e[n]);
            void 0 === i.slashes && (i.slashes = o.test(e.href));
          }
          return i;
        }
        function h(e) {
          return 'file:' === e || 'ftp:' === e || 'http:' === e || 'https:' === e || 'ws:' === e || 'wss:' === e;
        }
        function d(e, t) {
          (e = c(e)), (t = t || {});
          var n,
            r = a.exec(e),
            i = r[1] ? r[1].toLowerCase() : '',
            o = !!r[2],
            s = !!r[3],
            u = 0;
          return (
            o
              ? s
                ? ((n = r[2] + r[3] + r[4]), (u = r[2].length + r[3].length))
                : ((n = r[2] + r[4]), (u = r[2].length))
              : s
              ? ((n = r[3] + r[4]), (u = r[3].length))
              : (n = r[4]),
            'file:' === i
              ? u >= 2 && (n = n.slice(2))
              : h(i)
              ? (n = r[4])
              : i
              ? o && (n = n.slice(2))
              : u >= 2 && h(t.protocol) && (n = r[4]),
            { protocol: i, slashes: o || h(i), slashesCount: u, rest: n }
          );
        }
        function v(e, t, n) {
          if (((e = c(e)), !(this instanceof v))) return new v(e, t, n);
          var o,
            a,
            u,
            f,
            y,
            m,
            g = l.slice(),
            b = typeof t,
            S = this,
            w = 0;
          for (
            'object' !== b && 'string' !== b && ((n = t), (t = null)),
              n && 'function' !== typeof n && (n = i.parse),
              o = !(a = d(e || '', (t = p(t)))).protocol && !a.slashes,
              S.slashes = a.slashes || (o && t.slashes),
              S.protocol = a.protocol || t.protocol || '',
              e = a.rest,
              (('file:' === a.protocol && (2 !== a.slashesCount || s.test(e))) ||
                (!a.slashes && (a.protocol || a.slashesCount < 2 || !h(S.protocol)))) &&
                (g[3] = [/(.*)/, 'pathname']);
            w < g.length;
            w++
          )
            'function' !== typeof (f = g[w])
              ? ((u = f[0]),
                (m = f[1]),
                u !== u
                  ? (S[m] = e)
                  : 'string' === typeof u
                  ? ~(y = e.indexOf(u)) &&
                    ('number' === typeof f[2]
                      ? ((S[m] = e.slice(0, y)), (e = e.slice(y + f[2])))
                      : ((S[m] = e.slice(y)), (e = e.slice(0, y))))
                  : (y = u.exec(e)) && ((S[m] = y[1]), (e = e.slice(0, y.index))),
                (S[m] = S[m] || (o && f[3] && t[m]) || ''),
                f[4] && (S[m] = S[m].toLowerCase()))
              : (e = f(e, S));
          n && (S.query = n(S.query)),
            o &&
              t.slashes &&
              '/' !== S.pathname.charAt(0) &&
              ('' !== S.pathname || '' !== t.pathname) &&
              (S.pathname = (function (e, t) {
                if ('' === e) return t;
                for (
                  var n = (t || '/').split('/').slice(0, -1).concat(e.split('/')),
                    r = n.length,
                    i = n[r - 1],
                    o = !1,
                    a = 0;
                  r--;

                )
                  '.' === n[r]
                    ? n.splice(r, 1)
                    : '..' === n[r]
                    ? (n.splice(r, 1), a++)
                    : a && (0 === r && (o = !0), n.splice(r, 1), a--);
                return o && n.unshift(''), ('.' !== i && '..' !== i) || n.push(''), n.join('/');
              })(S.pathname, t.pathname)),
            '/' !== S.pathname.charAt(0) && h(S.protocol) && (S.pathname = '/' + S.pathname),
            r(S.port, S.protocol) || ((S.host = S.hostname), (S.port = '')),
            (S.username = S.password = ''),
            S.auth && ((f = S.auth.split(':')), (S.username = f[0] || ''), (S.password = f[1] || '')),
            (S.origin = 'file:' !== S.protocol && h(S.protocol) && S.host ? S.protocol + '//' + S.host : 'null'),
            (S.href = S.toString());
        }
        (v.prototype = {
          set: function (e, t, n) {
            var o = this;
            switch (e) {
              case 'query':
                'string' === typeof t && t.length && (t = (n || i.parse)(t)), (o[e] = t);
                break;
              case 'port':
                (o[e] = t),
                  r(t, o.protocol) ? t && (o.host = o.hostname + ':' + t) : ((o.host = o.hostname), (o[e] = ''));
                break;
              case 'hostname':
                (o[e] = t), o.port && (t += ':' + o.port), (o.host = t);
                break;
              case 'host':
                (o[e] = t),
                  /:\d+$/.test(t)
                    ? ((t = t.split(':')), (o.port = t.pop()), (o.hostname = t.join(':')))
                    : ((o.hostname = t), (o.port = ''));
                break;
              case 'protocol':
                (o.protocol = t.toLowerCase()), (o.slashes = !n);
                break;
              case 'pathname':
              case 'hash':
                if (t) {
                  var a = 'pathname' === e ? '/' : '#';
                  o[e] = t.charAt(0) !== a ? a + t : t;
                } else o[e] = t;
                break;
              default:
                o[e] = t;
            }
            for (var s = 0; s < l.length; s++) {
              var u = l[s];
              u[4] && (o[u[1]] = o[u[1]].toLowerCase());
            }
            return (
              (o.origin = 'file:' !== o.protocol && h(o.protocol) && o.host ? o.protocol + '//' + o.host : 'null'),
              (o.href = o.toString()),
              o
            );
          },
          toString: function (e) {
            (e && 'function' === typeof e) || (e = i.stringify);
            var t,
              n = this,
              r = n.protocol;
            r && ':' !== r.charAt(r.length - 1) && (r += ':');
            var o = r + (n.slashes || h(n.protocol) ? '//' : '');
            return (
              n.username && ((o += n.username), n.password && (o += ':' + n.password), (o += '@')),
              (o += n.host + n.pathname),
              (t = 'object' === typeof n.query ? e(n.query) : n.query) && (o += '?' !== t.charAt(0) ? '?' + t : t),
              n.hash && (o += n.hash),
              o
            );
          },
        }),
          (v.extractProtocol = d),
          (v.location = p),
          (v.trimLeft = c),
          (v.qs = i),
          (e.exports = v);
      }.call(this, n(56)));
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'a', function () {
          return m;
        }),
          n.d(t, 'b', function () {
            return w;
          });
        var r = n(2),
          i = n.n(r),
          o = n(3),
          a = n(4),
          s = n(0),
          u = n(1),
          c = n(38),
          l = n(61),
          f = n(51),
          p = n(151),
          h = n(30),
          d = n(26),
          v = n(6),
          y = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          m = (function () {
            function e() {
              Object(s.a)(this, e);
            }
            return (
              Object(u.a)(e, null, [
                {
                  key: 'createPushStream',
                  value: function (e) {
                    return g.create(e);
                  },
                },
                {
                  key: 'createPullStream',
                  value: function (e, t) {
                    return S.create(e, t);
                  },
                },
              ]),
              e
            );
          })(),
          g = (function (e) {
            Object(o.a)(n, e);
            var t = Object(a.a)(n);
            function n() {
              return Object(s.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(u.a)(n, null, [
                {
                  key: 'create',
                  value: function (e) {
                    return new b(e);
                  },
                },
              ]),
              n
            );
          })(m),
          b = (function (t) {
            Object(o.a)(r, t);
            var n = Object(a.a)(r);
            function r(e) {
              var t;
              return (
                Object(s.a)(this, r),
                ((t = n.call(this)).onEvent = function (e) {
                  t.privEvents.onEvent(e), l.a.instance.onEvent(e);
                }),
                (t.privFormat = void 0 === e ? v.c.getDefaultInputFormat() : e),
                (t.privEvents = new f.a()),
                (t.privId = Object(d.a)()),
                (t.privStream = new p.a(t.privFormat.avgBytesPerSec / 10)),
                t
              );
            }
            return (
              Object(u.a)(r, [
                {
                  key: 'format',
                  get: function () {
                    return Promise.resolve(this.privFormat);
                  },
                },
                {
                  key: 'write',
                  value: function (e) {
                    this.privStream.writeStreamChunk({ buffer: e, isEnd: !1, timeReceived: Date.now() });
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.privStream.close();
                  },
                },
                {
                  key: 'id',
                  value: function () {
                    return this.privId;
                  },
                },
                {
                  key: 'blob',
                  get: function () {
                    var t = this;
                    return this.attach('id').then(function (n) {
                      var r = [],
                        i = e.from('');
                      return (function o() {
                        return n.read().then(function (n) {
                          return !n || n.isEnd
                            ? 'undefined' !== typeof XMLHttpRequest && 'undefined' !== typeof Blob
                              ? Promise.resolve(new Blob(r))
                              : Promise.resolve(e.from(i))
                            : ('undefined' !== typeof Blob
                                ? r.push(n.buffer)
                                : (i = e.concat([i, t.toBuffer(n.buffer)])),
                              o());
                        });
                      })();
                    });
                  },
                },
                {
                  key: 'turnOn',
                  value: function () {
                    this.onEvent(new h.b(this.privId)), this.onEvent(new h.d(this.privId));
                  },
                },
                {
                  key: 'attach',
                  value: function (e) {
                    return y(
                      this,
                      void 0,
                      void 0,
                      i.a.mark(function t() {
                        var n,
                          r = this;
                        return i.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return this.onEvent(new h.f(this.privId, e)), (t.next = 3), this.turnOn();
                                case 3:
                                  return (
                                    (n = this.privStream),
                                    this.onEvent(new h.e(this.privId, e)),
                                    t.abrupt('return', {
                                      detach: function () {
                                        return y(
                                          r,
                                          void 0,
                                          void 0,
                                          i.a.mark(function t() {
                                            return i.a.wrap(
                                              function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        this.onEvent(new h.g(this.privId, e)),
                                                        t.abrupt('return', this.turnOff())
                                                      );
                                                    case 2:
                                                    case 'end':
                                                      return t.stop();
                                                  }
                                              },
                                              t,
                                              this
                                            );
                                          })
                                        );
                                      },
                                      id: function () {
                                        return e;
                                      },
                                      read: function () {
                                        return n.read();
                                      },
                                    })
                                  );
                                case 6:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'detach',
                  value: function (e) {
                    this.onEvent(new h.g(this.privId, e));
                  },
                },
                { key: 'turnOff', value: function () {} },
                {
                  key: 'events',
                  get: function () {
                    return this.privEvents;
                  },
                },
                {
                  key: 'deviceInfo',
                  get: function () {
                    return Promise.resolve({
                      bitspersample: this.privFormat.bitsPerSample,
                      channelcount: this.privFormat.channels,
                      connectivity: c.f.Unknown,
                      manufacturer: 'Speech SDK',
                      model: 'PushStream',
                      samplerate: this.privFormat.samplesPerSec,
                      type: c.g.Stream,
                    });
                  },
                },
                {
                  key: 'toBuffer',
                  value: function (t) {
                    for (var n = e.alloc(t.byteLength), r = new Uint8Array(t), i = 0; i < n.length; ++i) n[i] = r[i];
                    return n;
                  },
                },
              ]),
              r
            );
          })(g),
          S = (function (e) {
            Object(o.a)(n, e);
            var t = Object(a.a)(n);
            function n() {
              return Object(s.a)(this, n), t.call(this);
            }
            return (
              Object(u.a)(n, null, [
                {
                  key: 'create',
                  value: function (e, t) {
                    return new w(e, t);
                  },
                },
              ]),
              n
            );
          })(m),
          w = (function (e) {
            Object(o.a)(n, e);
            var t = Object(a.a)(n);
            function n(e, r) {
              var i;
              return (
                Object(s.a)(this, n),
                ((i = t.call(this)).onEvent = function (e) {
                  i.privEvents.onEvent(e), l.a.instance.onEvent(e);
                }),
                (i.privFormat = void 0 === r ? v.b.getDefaultInputFormat() : r),
                (i.privEvents = new f.a()),
                (i.privId = Object(d.a)()),
                (i.privCallback = e),
                (i.privIsClosed = !1),
                (i.privBufferSize = i.privFormat.avgBytesPerSec / 10),
                i
              );
            }
            return (
              Object(u.a)(n, [
                {
                  key: 'format',
                  get: function () {
                    return Promise.resolve(this.privFormat);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    (this.privIsClosed = !0), this.privCallback.close();
                  },
                },
                {
                  key: 'id',
                  value: function () {
                    return this.privId;
                  },
                },
                {
                  key: 'blob',
                  get: function () {
                    return Promise.reject('Not implemented');
                  },
                },
                {
                  key: 'turnOn',
                  value: function () {
                    this.onEvent(new h.b(this.privId)), this.onEvent(new h.d(this.privId));
                  },
                },
                {
                  key: 'attach',
                  value: function (e) {
                    return y(
                      this,
                      void 0,
                      void 0,
                      i.a.mark(function t() {
                        var n = this;
                        return i.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return this.onEvent(new h.f(this.privId, e)), (t.next = 3), this.turnOn();
                                case 3:
                                  return (
                                    this.onEvent(new h.e(this.privId, e)),
                                    t.abrupt('return', {
                                      detach: function () {
                                        return n.privCallback.close(), n.onEvent(new h.g(n.privId, e)), n.turnOff();
                                      },
                                      id: function () {
                                        return e;
                                      },
                                      read: function () {
                                        for (var e, t = 0; t < n.privBufferSize; ) {
                                          var r = new ArrayBuffer(n.privBufferSize - t),
                                            i = n.privCallback.read(r);
                                          if (void 0 === e) e = r;
                                          else new Int8Array(e).set(new Int8Array(r), t);
                                          if (0 === i) break;
                                          t += i;
                                        }
                                        return Promise.resolve({
                                          buffer: e.slice(0, t),
                                          isEnd: n.privIsClosed || 0 === t,
                                          timeReceived: Date.now(),
                                        });
                                      },
                                    })
                                  );
                                case 5:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'detach',
                  value: function (e) {
                    this.onEvent(new h.g(this.privId, e));
                  },
                },
                { key: 'turnOff', value: function () {} },
                {
                  key: 'events',
                  get: function () {
                    return this.privEvents;
                  },
                },
                {
                  key: 'deviceInfo',
                  get: function () {
                    return Promise.resolve({
                      bitspersample: this.privFormat.bitsPerSample,
                      channelcount: this.privFormat.channels,
                      connectivity: c.f.Unknown,
                      manufacturer: 'Speech SDK',
                      model: 'PullStream',
                      samplerate: this.privFormat.samplesPerSec,
                      type: c.g.Stream,
                    });
                  },
                },
              ]),
              n
            );
          })(S);
      }.call(this, n(66).Buffer));
    },
    ,
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var r = n(16),
        i = n(28),
        o = n(5),
        a = n.n(o),
        s = n(24),
        u = (n(40), n(19)),
        c = n(33),
        l = n(27);
      a.a.Component;
      var f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          return ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(s.b)(t.props)), t;
        }
        return (
          Object(i.a)(t, e),
          (t.prototype.render = function () {
            return a.a.createElement(r.b, { history: this.history, children: this.props.children });
          }),
          t
        );
      })(a.a.Component);
      var p = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        h = function (e, t) {
          return 'string' === typeof e ? Object(s.c)(e, null, null, t) : e;
        },
        d = function (e) {
          return e;
        },
        v = a.a.forwardRef;
      'undefined' === typeof v && (v = d);
      var y = v(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          i = e.onClick,
          o = Object(c.a)(e, ['innerRef', 'navigate', 'onClick']),
          s = o.target,
          l = Object(u.a)({}, o, {
            onClick: function (e) {
              try {
                i && i(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (s && '_self' !== s) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (l.ref = (d !== v && t) || n), a.a.createElement('a', l);
      });
      var m = v(function (e, t) {
          var n = e.component,
            i = void 0 === n ? y : n,
            o = e.replace,
            f = e.to,
            m = e.innerRef,
            g = Object(c.a)(e, ['component', 'replace', 'to', 'innerRef']);
          return a.a.createElement(r.d.Consumer, null, function (e) {
            e || Object(l.a)(!1);
            var n = e.history,
              r = h(p(f, e.location), e.location),
              c = r ? n.createHref(r) : '',
              y = Object(u.a)({}, g, {
                href: c,
                navigate: function () {
                  var t = p(f, e.location),
                    r = Object(s.e)(e.location) === Object(s.e)(h(t));
                  (o || r ? n.replace : n.push)(t);
                },
              });
            return d !== v ? (y.ref = t || m) : (y.innerRef = m), a.a.createElement(i, y);
          });
        }),
        g = function (e) {
          return e;
        },
        b = a.a.forwardRef;
      'undefined' === typeof b && (b = g);
      b(function (e, t) {
        var n = e['aria-current'],
          i = void 0 === n ? 'page' : n,
          o = e.activeClassName,
          s = void 0 === o ? 'active' : o,
          f = e.activeStyle,
          d = e.className,
          v = e.exact,
          y = e.isActive,
          S = e.location,
          w = e.sensitive,
          k = e.strict,
          C = e.style,
          O = e.to,
          E = e.innerRef,
          P = Object(c.a)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return a.a.createElement(r.d.Consumer, null, function (e) {
          e || Object(l.a)(!1);
          var n = S || e.location,
            o = h(p(O, n), n),
            c = o.pathname,
            x = c && c.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            R = x ? Object(r.e)(n.pathname, { path: x, exact: v, sensitive: w, strict: k }) : null,
            T = !!(y ? y(R, n) : R),
            I = T
              ? (function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return t
                    .filter(function (e) {
                      return e;
                    })
                    .join(' ');
                })(d, s)
              : d,
            A = T ? Object(u.a)({}, C, f) : C,
            _ = Object(u.a)({ 'aria-current': (T && i) || null, className: I, style: A, to: o }, P);
          return g !== b ? (_.ref = t || E) : (_.innerRef = E), a.a.createElement(m, _);
        });
      });
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        var r = n(5),
          i = n.n(r),
          o = n(28),
          a = n(40),
          s = n.n(a),
          u = 1073741823,
          c =
            'undefined' !== typeof globalThis
              ? globalThis
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof e
              ? e
              : {};
        function l(e) {
          var t = [];
          return {
            on: function (e) {
              t.push(e);
            },
            off: function (e) {
              t = t.filter(function (t) {
                return t !== e;
              });
            },
            get: function () {
              return e;
            },
            set: function (n, r) {
              (e = n),
                t.forEach(function (t) {
                  return t(e, r);
                });
            },
          };
        }
        var f =
          i.a.createContext ||
          function (e, t) {
            var n,
              i,
              a =
                '__create-react-context-' +
                (function () {
                  var e = '__global_unique_id__';
                  return (c[e] = (c[e] || 0) + 1);
                })() +
                '__',
              f = (function (e) {
                function n() {
                  var t;
                  return ((t = e.apply(this, arguments) || this).emitter = l(t.props.value)), t;
                }
                Object(o.a)(n, e);
                var r = n.prototype;
                return (
                  (r.getChildContext = function () {
                    var e;
                    return ((e = {})[a] = this.emitter), e;
                  }),
                  (r.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        i = e.value;
                      ((o = r) === (a = i) ? 0 !== o || 1 / o === 1 / a : o !== o && a !== a)
                        ? (n = 0)
                        : ((n = 'function' === typeof t ? t(r, i) : u), 0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var o, a;
                  }),
                  (r.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(r.Component);
            f.childContextTypes = (((n = {})[a] = s.a.object.isRequired), n);
            var p = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    0 !== ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              Object(o.a)(n, t);
              var r = n.prototype;
              return (
                (r.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = void 0 === t || null === t ? u : t;
                }),
                (r.componentDidMount = function () {
                  this.context[a] && this.context[a].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = void 0 === e || null === e ? u : e;
                }),
                (r.componentWillUnmount = function () {
                  this.context[a] && this.context[a].off(this.onUpdate);
                }),
                (r.getValue = function () {
                  return this.context[a] ? this.context[a].get() : e;
                }),
                (r.render = function () {
                  return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(r.Component);
            return (p.contextTypes = (((i = {})[a] = s.a.object), i)), { Provider: f, Consumer: p };
          };
        t.a = f;
      }.call(this, n(56)));
    },
    function (e, t, n) {
      'use strict';
      var r = n(145),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        s = {};
      function u(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      (s[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (s[r.Memo] = a);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' !== typeof n) {
          if (d) {
            var i = h(n);
            i && i !== d && e(t, i, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var s = u(t), v = u(n), y = 0; y < a.length; ++y) {
            var m = a[y];
            if (!o[m] && (!r || !r[m]) && (!v || !v[m]) && (!s || !s[m])) {
              var g = p(n, m);
              try {
                c(t, m, g);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n(0),
        i = n(1),
        o = n(25),
        a = n(13),
        s = n(26),
        u = (function () {
          function e(t, n, i) {
            if ((Object(r.a)(this, e), (this.privPayload = null), !n)) throw new a.a('payload');
            if (t === o.b.Binary && 'ArrayBuffer' !== n.__proto__.constructor.name)
              throw new a.b('Payload must be ArrayBuffer');
            if (t === o.b.Text && 'string' !== typeof n) throw new a.b('Payload must be a string');
            (this.privMessageType = t), (this.privPayload = n), (this.privId = i || Object(s.a)());
          }
          return (
            Object(i.a)(e, [
              {
                key: 'messageType',
                get: function () {
                  return this.privMessageType;
                },
              },
              {
                key: 'payload',
                get: function () {
                  return this.privPayload;
                },
              },
              {
                key: 'textContent',
                get: function () {
                  if (this.privMessageType === o.b.Binary) throw new a.b('Not supported for binary message');
                  return this.privPayload;
                },
              },
              {
                key: 'binaryContent',
                get: function () {
                  if (this.privMessageType === o.b.Text) throw new a.b('Not supported for text message');
                  return this.privPayload;
                },
              },
              {
                key: 'id',
                get: function () {
                  return this.privId;
                },
              },
            ]),
            e
          );
        })();
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      var r = n(55),
        i = 60103,
        o = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var a = 60109,
        s = 60110,
        u = 60112;
      t.Suspense = 60113;
      var c = 60115,
        l = 60116;
      if ('function' === typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (i = f('react.element')),
          (o = f('react.portal')),
          (t.Fragment = f('react.fragment')),
          (t.StrictMode = f('react.strict_mode')),
          (t.Profiler = f('react.profiler')),
          (a = f('react.provider')),
          (s = f('react.context')),
          (u = f('react.forward_ref')),
          (t.Suspense = f('react.suspense')),
          (c = f('react.memo')),
          (l = f('react.lazy'));
      }
      var p = 'function' === typeof Symbol && Symbol.iterator;
      function h(e) {
        for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var d = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = {};
      function y(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || d);
      }
      function m() {}
      function g(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || d);
      }
      (y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (e, t) {
          if ('object' !== typeof e && 'function' !== typeof e && null != e) throw Error(h(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (y.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (m.prototype = y.prototype);
      var b = (g.prototype = new m());
      (b.constructor = g), r(b, y.prototype), (b.isPureReactComponent = !0);
      var S = { current: null },
        w = Object.prototype.hasOwnProperty,
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, n) {
        var r,
          o = {},
          a = null,
          s = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            w.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) o.children = n;
        else if (1 < u) {
          for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
          o.children = c;
        }
        if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
        return { $$typeof: i, type: e, key: a, ref: s, props: o, _owner: S.current };
      }
      function O(e) {
        return 'object' === typeof e && null !== e && e.$$typeof === i;
      }
      var E = /\/+/g;
      function P(e, t) {
        return 'object' === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function x(e, t, n, r, a) {
        var s = typeof e;
        ('undefined' !== s && 'boolean' !== s) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (s) {
            case 'string':
            case 'number':
              u = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case i:
                case o:
                  u = !0;
              }
          }
        if (u)
          return (
            (a = a((u = e))),
            (e = '' === r ? '.' + P(u, 0) : r),
            Array.isArray(a)
              ? ((n = ''),
                null != e && (n = e.replace(E, '$&/') + '/'),
                x(a, t, n, '', function (e) {
                  return e;
                }))
              : null != a &&
                (O(a) &&
                  (a = (function (e, t) {
                    return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                  })(a, n + (!a.key || (u && u.key === a.key) ? '' : ('' + a.key).replace(E, '$&/') + '/') + e)),
                t.push(a)),
            1
          );
        if (((u = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
          for (var c = 0; c < e.length; c++) {
            var l = r + P((s = e[c]), c);
            u += x(s, t, n, l, a);
          }
        else if (
          'function' ===
          typeof (l = (function (e) {
            return null === e || 'object' !== typeof e
              ? null
              : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
              ? e
              : null;
          })(e))
        )
          for (e = l.call(e), c = 0; !(s = e.next()).done; ) u += x((s = s.value), t, n, (l = r + P(s, c++)), a);
        else if ('object' === s)
          throw (
            ((t = '' + e),
            Error(h(31, '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
          );
        return u;
      }
      function R(e, t, n) {
        if (null == e) return e;
        var r = [],
          i = 0;
        return (
          x(e, r, '', '', function (e) {
            return t.call(n, e, i++);
          }),
          r
        );
      }
      function T(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var I = { current: null };
      function A() {
        var e = I.current;
        if (null === e) throw Error(h(321));
        return e;
      }
      var _ = {
        ReactCurrentDispatcher: I,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: S,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: R,
        forEach: function (e, t, n) {
          R(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            R(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            R(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e)) throw Error(h(143));
          return e;
        },
      }),
        (t.Component = y),
        (t.PureComponent = g),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(h(267, e));
          var o = r({}, e.props),
            a = e.key,
            s = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (u = S.current)),
              void 0 !== t.key && (a = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (l in t) w.call(t, l) && !k.hasOwnProperty(l) && (o[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) o.children = n;
          else if (1 < l) {
            c = Array(l);
            for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
            o.children = c;
          }
          return { $$typeof: i, type: e.type, key: a, ref: s, props: o, _owner: u };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          var t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = O),
        (t.lazy = function (e) {
          return { $$typeof: l, _payload: { _status: -1, _result: e }, _init: T };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return A().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return A().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return A().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return A().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return A().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return A().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return A().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return A().useRef(e);
        }),
        (t.useState = function (e) {
          return A().useState(e);
        }),
        (t.version = '17.0.2');
    },
    function (e, t, n) {
      'use strict';
      var r = n(5),
        i = n(55),
        o = n(127);
      function a(e) {
        for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      if (!r) throw Error(a(227));
      var s = new Set(),
        u = {};
      function c(e, t) {
        l(e, t), l(e + 'Capture', t);
      }
      function l(e, t) {
        for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
      }
      var f = !(
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
        ),
        p =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        h = Object.prototype.hasOwnProperty,
        d = {},
        v = {};
      function y(e, t, n, r, i, o, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = a);
      }
      var m = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          m[e] = new y(e, 0, !1, e, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function (e) {
          var t = e[0];
          m[t] = new y(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
          m[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
          m[e] = new y(e, 2, !1, e, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            m[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          m[e] = new y(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          m[e] = new y(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          m[e] = new y(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          m[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var g = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function S(e, t, n, r) {
        var i = m.hasOwnProperty(t) ? m[t] : null;
        (null !== i
          ? 0 === i.type
          : !r && 2 < t.length && ('o' === t[0] || 'O' === t[0]) && ('n' === t[1] || 'N' === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              'undefined' === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !r &&
                      (null !== n ? !n.acceptsBooleans : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, i, r) && (n = null),
          r || null === i
            ? (function (e) {
                return !!h.call(v, e) || (!h.call(d, e) && (p.test(e) ? (v[e] = !0) : ((d[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && '' : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? '' : '' + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(g, b);
          m[t] = new y(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
          var t = e.replace(g, b);
          m[t] = new y(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
        }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(g, b);
          m[t] = new y(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          m[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (m.xlinkHref = new y('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          m[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        k = 60103,
        C = 60106,
        O = 60107,
        E = 60108,
        P = 60114,
        x = 60109,
        R = 60110,
        T = 60112,
        I = 60113,
        A = 60120,
        _ = 60115,
        j = 60116,
        M = 60121,
        D = 60128,
        L = 60129,
        z = 60130,
        N = 60131;
      if ('function' === typeof Symbol && Symbol.for) {
        var B = Symbol.for;
        (k = B('react.element')),
          (C = B('react.portal')),
          (O = B('react.fragment')),
          (E = B('react.strict_mode')),
          (P = B('react.profiler')),
          (x = B('react.provider')),
          (R = B('react.context')),
          (T = B('react.forward_ref')),
          (I = B('react.suspense')),
          (A = B('react.suspense_list')),
          (_ = B('react.memo')),
          (j = B('react.lazy')),
          (M = B('react.block')),
          B('react.scope'),
          (D = B('react.opaque.id')),
          (L = B('react.debug_trace_mode')),
          (z = B('react.offscreen')),
          (N = B('react.legacy_hidden'));
      }
      var F,
        U = 'function' === typeof Symbol && Symbol.iterator;
      function q(e) {
        return null === e || 'object' !== typeof e
          ? null
          : 'function' === typeof (e = (U && e[U]) || e['@@iterator'])
          ? e
          : null;
      }
      function W(e) {
        if (void 0 === F)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            F = (t && t[1]) || '';
          }
        return '\n' + F + e;
      }
      var K = !1;
      function H(e, t) {
        if (!e || K) return '';
        K = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              'object' === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var r = u;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                r = u;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (u) {
              r = u;
            }
            e();
          }
        } catch (u) {
          if (u && r && 'string' === typeof u.stack) {
            for (
              var i = u.stack.split('\n'), o = r.stack.split('\n'), a = i.length - 1, s = o.length - 1;
              1 <= a && 0 <= s && i[a] !== o[s];

            )
              s--;
            for (; 1 <= a && 0 <= s; a--, s--)
              if (i[a] !== o[s]) {
                if (1 !== a || 1 !== s)
                  do {
                    if ((a--, 0 > --s || i[a] !== o[s])) return '\n' + i[a].replace(' at new ', ' at ');
                  } while (1 <= a && 0 <= s);
                break;
              }
          }
        } finally {
          (K = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : '') ? W(e) : '';
      }
      function V(e) {
        switch (e.tag) {
          case 5:
            return W(e.type);
          case 16:
            return W('Lazy');
          case 13:
            return W('Suspense');
          case 19:
            return W('SuspenseList');
          case 0:
          case 2:
          case 15:
            return (e = H(e.type, !1));
          case 11:
            return (e = H(e.type.render, !1));
          case 22:
            return (e = H(e.type._render, !1));
          case 1:
            return (e = H(e.type, !0));
          default:
            return '';
        }
      }
      function $(e) {
        if (null == e) return null;
        if ('function' === typeof e) return e.displayName || e.name || null;
        if ('string' === typeof e) return e;
        switch (e) {
          case O:
            return 'Fragment';
          case C:
            return 'Portal';
          case P:
            return 'Profiler';
          case E:
            return 'StrictMode';
          case I:
            return 'Suspense';
          case A:
            return 'SuspenseList';
        }
        if ('object' === typeof e)
          switch (e.$$typeof) {
            case R:
              return (e.displayName || 'Context') + '.Consumer';
            case x:
              return (e._context.displayName || 'Context') + '.Provider';
            case T:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ''),
                e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case _:
              return $(e.type);
            case M:
              return $(e._render);
            case j:
              (t = e._payload), (e = e._init);
              try {
                return $(e(t));
              } catch (n) {}
          }
        return null;
      }
      function Q(e) {
        switch (typeof e) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return e;
          default:
            return '';
        }
      }
      function Y(e) {
        var t = e.type;
        return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
      }
      function G(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = Y(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = '' + e[t];
            if (
              !e.hasOwnProperty(t) &&
              'undefined' !== typeof n &&
              'function' === typeof n.get &&
              'function' === typeof n.set
            ) {
              var i = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return i.call(this);
                  },
                  set: function (e) {
                    (r = '' + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function J(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = '';
        return e && (r = Y(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
      }
      function X(e) {
        if ('undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Z(e, t) {
        var n = t.checked;
        return i({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? '' : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = Q(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && S(e, 'checked', t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = Q(t.value),
          r = t.type;
        if (null != n)
          'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
        else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
        t.hasOwnProperty('value')
          ? ie(e, t.type, n)
          : t.hasOwnProperty('defaultValue') && ie(e, t.type, Q(t.defaultValue)),
          null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
          var r = t.type;
          if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
          (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
        }
        '' !== (n = e.name) && (e.name = ''),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          '' !== n && (e.name = n);
      }
      function ie(e, t, n) {
        ('number' === t && X(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
      }
      function oe(e, t) {
        return (
          (e = i({ children: void 0 }, t)),
          (t = (function (e) {
            var t = '';
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function ae(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
          for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty('$' + e[n].value)),
              e[n].selected !== i && (e[n].selected = i),
              i && r && (e[n].defaultSelected = !0);
        } else {
          for (n = '' + Q(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return (e[i].selected = !0), void (r && (e[i].defaultSelected = !0));
            null !== t || e[i].disabled || (t = e[i]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function se(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
        return i({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
      }
      function ue(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(a(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(a(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ''), (n = t);
        }
        e._wrapperState = { initialValue: Q(n) };
      }
      function ce(e, t) {
        var n = Q(t.value),
          r = Q(t.defaultValue);
        null != n &&
          ((n = '' + n) !== e.value && (e.value = n),
          null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
          null != r && (e.defaultValue = '' + r);
      }
      function le(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
      }
      var fe = 'http://www.w3.org/1999/xhtml',
        pe = 'http://www.w3.org/2000/svg';
      function he(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function de(e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? he(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      }
      var ve,
        ye,
        me =
          ((ye = function (e, t) {
            if (e.namespaceURI !== pe || 'innerHTML' in e) e.innerHTML = t;
            else {
              for (
                (ve = ve || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                  t = ve.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ye(e, t);
                });
              }
            : ye);
      function ge(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var be = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        Se = ['Webkit', 'ms', 'Moz', 'O'];
      function we(e, t, n) {
        return null == t || 'boolean' === typeof t || '' === t
          ? ''
          : n || 'number' !== typeof t || 0 === t || (be.hasOwnProperty(e) && be[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      function ke(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
              i = we(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
          }
      }
      Object.keys(be).forEach(function (e) {
        Se.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
        });
      });
      var Ce = i(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function Oe(e, t) {
        if (t) {
          if (Ce[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(a(60));
            if ('object' !== typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
              throw Error(a(61));
          }
          if (null != t.style && 'object' !== typeof t.style) throw Error(a(62));
        }
      }
      function Ee(e, t) {
        if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
        switch (e) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      function Pe(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var xe = null,
        Re = null,
        Te = null;
      function Ie(e) {
        if ((e = ei(e))) {
          if ('function' !== typeof xe) throw Error(a(280));
          var t = e.stateNode;
          t && ((t = ni(t)), xe(e.stateNode, e.type, t));
        }
      }
      function Ae(e) {
        Re ? (Te ? Te.push(e) : (Te = [e])) : (Re = e);
      }
      function _e() {
        if (Re) {
          var e = Re,
            t = Te;
          if (((Te = Re = null), Ie(e), t)) for (e = 0; e < t.length; e++) Ie(t[e]);
        }
      }
      function je(e, t) {
        return e(t);
      }
      function Me(e, t, n, r, i) {
        return e(t, n, r, i);
      }
      function De() {}
      var Le = je,
        ze = !1,
        Ne = !1;
      function Be() {
        (null === Re && null === Te) || (De(), _e());
      }
      function Fe(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = ni(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && 'function' !== typeof n) throw Error(a(231, t, typeof n));
        return n;
      }
      var Ue = !1;
      if (f)
        try {
          var qe = {};
          Object.defineProperty(qe, 'passive', {
            get: function () {
              Ue = !0;
            },
          }),
            window.addEventListener('test', qe, qe),
            window.removeEventListener('test', qe, qe);
        } catch (ye) {
          Ue = !1;
        }
      function We(e, t, n, r, i, o, a, s, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c);
        } catch (l) {
          this.onError(l);
        }
      }
      var Ke = !1,
        He = null,
        Ve = !1,
        $e = null,
        Qe = {
          onError: function (e) {
            (Ke = !0), (He = e);
          },
        };
      function Ye(e, t, n, r, i, o, a, s, u) {
        (Ke = !1), (He = null), We.apply(Qe, arguments);
      }
      function Ge(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Je(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
      }
      function Xe(e) {
        if (Ge(e) !== e) throw Error(a(188));
      }
      function Ze(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ge(e))) throw Error(a(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var i = n.return;
              if (null === i) break;
              var o = i.alternate;
              if (null === o) {
                if (null !== (r = i.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (i.child === o.child) {
                for (o = i.child; o; ) {
                  if (o === n) return Xe(i), e;
                  if (o === r) return Xe(i), t;
                  o = o.sibling;
                }
                throw Error(a(188));
              }
              if (n.return !== r.return) (n = i), (r = o);
              else {
                for (var s = !1, u = i.child; u; ) {
                  if (u === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                  }
                  if (u === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                  }
                  u = u.sibling;
                }
                if (!s) {
                  for (u = o.child; u; ) {
                    if (u === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) throw Error(a(189));
                }
              }
              if (n.alternate !== r) throw Error(a(190));
            }
            if (3 !== n.tag) throw Error(a(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        it,
        ot = !1,
        at = [],
        st = null,
        ut = null,
        ct = null,
        lt = new Map(),
        ft = new Map(),
        pt = [],
        ht =
          'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
          );
      function dt(e, t, n, r, i) {
        return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: i, targetContainers: [r] };
      }
      function vt(e, t) {
        switch (e) {
          case 'focusin':
          case 'focusout':
            st = null;
            break;
          case 'dragenter':
          case 'dragleave':
            ut = null;
            break;
          case 'mouseover':
          case 'mouseout':
            ct = null;
            break;
          case 'pointerover':
          case 'pointerout':
            lt.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            ft.delete(t.pointerId);
        }
      }
      function yt(e, t, n, r, i, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = dt(t, n, r, i, o)), null !== t && null !== (t = ei(t)) && nt(t), e)
          : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
      }
      function mt(e) {
        var t = Zr(e.target);
        if (null !== t) {
          var n = Ge(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Je(n)))
                return (
                  (e.blockedOn = t),
                  void it(e.lanePriority, function () {
                    o.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function gt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = ei(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function bt(e, t, n) {
        gt(e) && n.delete(t);
      }
      function St() {
        for (ot = !1; 0 < at.length; ) {
          var e = at[0];
          if (null !== e.blockedOn) {
            null !== (e = ei(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && at.shift();
        }
        null !== st && gt(st) && (st = null),
          null !== ut && gt(ut) && (ut = null),
          null !== ct && gt(ct) && (ct = null),
          lt.forEach(bt),
          ft.forEach(bt);
      }
      function wt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null), ot || ((ot = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, St)));
      }
      function kt(e) {
        function t(t) {
          return wt(t, e);
        }
        if (0 < at.length) {
          wt(at[0], e);
          for (var n = 1; n < at.length; n++) {
            var r = at[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== st && wt(st, e),
            null !== ut && wt(ut, e),
            null !== ct && wt(ct, e),
            lt.forEach(t),
            ft.forEach(t),
            n = 0;
          n < pt.length;
          n++
        )
          (r = pt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < pt.length && null === (n = pt[0]).blockedOn; ) mt(n), null === n.blockedOn && pt.shift();
      }
      function Ct(e, t) {
        var n = {};
        return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
      }
      var Ot = {
          animationend: Ct('Animation', 'AnimationEnd'),
          animationiteration: Ct('Animation', 'AnimationIteration'),
          animationstart: Ct('Animation', 'AnimationStart'),
          transitionend: Ct('Transition', 'TransitionEnd'),
        },
        Et = {},
        Pt = {};
      function xt(e) {
        if (Et[e]) return Et[e];
        if (!Ot[e]) return e;
        var t,
          n = Ot[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Pt) return (Et[e] = n[t]);
        return e;
      }
      f &&
        ((Pt = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete Ot.animationend.animation,
          delete Ot.animationiteration.animation,
          delete Ot.animationstart.animation),
        'TransitionEvent' in window || delete Ot.transitionend.transition);
      var Rt = xt('animationend'),
        Tt = xt('animationiteration'),
        It = xt('animationstart'),
        At = xt('transitionend'),
        _t = new Map(),
        jt = new Map(),
        Mt = [
          'abort',
          'abort',
          Rt,
          'animationEnd',
          Tt,
          'animationIteration',
          It,
          'animationStart',
          'canplay',
          'canPlay',
          'canplaythrough',
          'canPlayThrough',
          'durationchange',
          'durationChange',
          'emptied',
          'emptied',
          'encrypted',
          'encrypted',
          'ended',
          'ended',
          'error',
          'error',
          'gotpointercapture',
          'gotPointerCapture',
          'load',
          'load',
          'loadeddata',
          'loadedData',
          'loadedmetadata',
          'loadedMetadata',
          'loadstart',
          'loadStart',
          'lostpointercapture',
          'lostPointerCapture',
          'playing',
          'playing',
          'progress',
          'progress',
          'seeking',
          'seeking',
          'stalled',
          'stalled',
          'suspend',
          'suspend',
          'timeupdate',
          'timeUpdate',
          At,
          'transitionEnd',
          'waiting',
          'waiting',
        ];
      function Dt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            i = e[n + 1];
          (i = 'on' + (i[0].toUpperCase() + i.slice(1))), jt.set(r, t), _t.set(r, i), c(i, [r]);
        }
      }
      (0, o.unstable_now)();
      var Lt = 8;
      function zt(e) {
        if (0 !== (1 & e)) return (Lt = 15), 1;
        if (0 !== (2 & e)) return (Lt = 14), 2;
        if (0 !== (4 & e)) return (Lt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Lt = 12), t)
          : 0 !== (32 & e)
          ? ((Lt = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((Lt = 10), t)
          : 0 !== (256 & e)
          ? ((Lt = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((Lt = 8), t)
          : 0 !== (4096 & e)
          ? ((Lt = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((Lt = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((Lt = 5), t)
          : 67108864 & e
          ? ((Lt = 4), 67108864)
          : 0 !== (134217728 & e)
          ? ((Lt = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((Lt = 2), t)
          : 0 !== (1073741824 & e)
          ? ((Lt = 1), 1073741824)
          : ((Lt = 8), e);
      }
      function Nt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Lt = 0);
        var r = 0,
          i = 0,
          o = e.expiredLanes,
          a = e.suspendedLanes,
          s = e.pingedLanes;
        if (0 !== o) (r = o), (i = Lt = 15);
        else if (0 !== (o = 134217727 & n)) {
          var u = o & ~a;
          0 !== u ? ((r = zt(u)), (i = Lt)) : 0 !== (s &= o) && ((r = zt(s)), (i = Lt));
        } else 0 !== (o = n & ~a) ? ((r = zt(o)), (i = Lt)) : 0 !== s && ((r = zt(s)), (i = Lt));
        if (0 === r) return 0;
        if (((r = n & (((0 > (r = 31 - Kt(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 === (t & a))) {
          if ((zt(t), i <= Lt)) return t;
          Lt = i;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; ) (i = 1 << (n = 31 - Kt(t))), (r |= e[n]), (t &= ~i);
        return r;
      }
      function Bt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
      }
      function Ft(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = Ut(24 & ~t)) ? Ft(10, t) : e;
          case 10:
            return 0 === (e = Ut(192 & ~t)) ? Ft(8, t) : e;
          case 8:
            return 0 === (e = Ut(3584 & ~t)) && 0 === (e = Ut(4186112 & ~t)) && (e = 512), e;
          case 2:
            return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(a(358, e));
      }
      function Ut(e) {
        return e & -e;
      }
      function qt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Wt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Kt(t))] = n);
      }
      var Kt = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Ht(e) / Vt) | 0)) | 0;
            },
        Ht = Math.log,
        Vt = Math.LN2;
      var $t = o.unstable_UserBlockingPriority,
        Qt = o.unstable_runWithPriority,
        Yt = !0;
      function Gt(e, t, n, r) {
        ze || De();
        var i = Xt,
          o = ze;
        ze = !0;
        try {
          Me(i, e, t, n, r);
        } finally {
          (ze = o) || Be();
        }
      }
      function Jt(e, t, n, r) {
        Qt($t, Xt.bind(null, e, t, n, r));
      }
      function Xt(e, t, n, r) {
        var i;
        if (Yt)
          if ((i = 0 === (4 & t)) && 0 < at.length && -1 < ht.indexOf(e)) (e = dt(null, e, t, n, r)), at.push(e);
          else {
            var o = Zt(e, t, n, r);
            if (null === o) i && vt(e, r);
            else {
              if (i) {
                if (-1 < ht.indexOf(e)) return (e = dt(o, e, t, n, r)), void at.push(e);
                if (
                  (function (e, t, n, r, i) {
                    switch (t) {
                      case 'focusin':
                        return (st = yt(st, e, t, n, r, i)), !0;
                      case 'dragenter':
                        return (ut = yt(ut, e, t, n, r, i)), !0;
                      case 'mouseover':
                        return (ct = yt(ct, e, t, n, r, i)), !0;
                      case 'pointerover':
                        var o = i.pointerId;
                        return lt.set(o, yt(lt.get(o) || null, e, t, n, r, i)), !0;
                      case 'gotpointercapture':
                        return (o = i.pointerId), ft.set(o, yt(ft.get(o) || null, e, t, n, r, i)), !0;
                    }
                    return !1;
                  })(o, e, t, n, r)
                )
                  return;
                vt(e, r);
              }
              _r(e, t, r, null, n);
            }
          }
      }
      function Zt(e, t, n, r) {
        var i = Pe(r);
        if (null !== (i = Zr(i))) {
          var o = Ge(i);
          if (null === o) i = null;
          else {
            var a = o.tag;
            if (13 === a) {
              if (null !== (i = Je(o))) return i;
              i = null;
            } else if (3 === a) {
              if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
              i = null;
            } else o !== i && (i = null);
          }
        }
        return _r(e, t, r, i, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          i = 'value' in en ? en.value : en.textContent,
          o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
        return (nn = i.slice(e, 1 < t ? 1 - t : void 0));
      }
      function on(e) {
        var t = e.keyCode;
        return (
          'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function an() {
        return !0;
      }
      function sn() {
        return !1;
      }
      function un(e) {
        function t(t, n, r, i, o) {
          for (var a in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = i),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
          return (
            (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
              ? an
              : sn),
            (this.isPropagationStopped = sn),
            this
          );
        }
        return (
          i(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault ? e.preventDefault() : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = an));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation ? e.stopPropagation() : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = an));
            },
            persist: function () {},
            isPersistent: an,
          }),
          t
        );
      }
      var cn,
        ln,
        fn,
        pn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        hn = un(pn),
        dn = i({}, pn, { view: 0, detail: 0 }),
        vn = un(dn),
        yn = i({}, dn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: xn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return 'movementX' in e
              ? e.movementX
              : (e !== fn &&
                  (fn && 'mousemove' === e.type
                    ? ((cn = e.screenX - fn.screenX), (ln = e.screenY - fn.screenY))
                    : (ln = cn = 0),
                  (fn = e)),
                cn);
          },
          movementY: function (e) {
            return 'movementY' in e ? e.movementY : ln;
          },
        }),
        mn = un(yn),
        gn = un(i({}, yn, { dataTransfer: 0 })),
        bn = un(i({}, dn, { relatedTarget: 0 })),
        Sn = un(i({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        wn = un(
          i({}, pn, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          })
        ),
        kn = un(i({}, pn, { data: 0 })),
        Cn = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        On = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        En = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
      function Pn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e];
      }
      function xn() {
        return Pn;
      }
      var Rn = un(
          i({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Cn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = on(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? On[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xn,
            charCode: function (e) {
              return 'keypress' === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type ? on(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
          })
        ),
        Tn = un(
          i({}, yn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        In = un(
          i({}, dn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: xn,
          })
        ),
        An = un(i({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        _n = un(
          i({}, yn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        jn = [9, 13, 27, 32],
        Mn = f && 'CompositionEvent' in window,
        Dn = null;
      f && 'documentMode' in document && (Dn = document.documentMode);
      var Ln = f && 'TextEvent' in window && !Dn,
        zn = f && (!Mn || (Dn && 8 < Dn && 11 >= Dn)),
        Nn = String.fromCharCode(32),
        Bn = !1;
      function Fn(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== jn.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Un(e) {
        return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
      }
      var qn = !1;
      var Wn = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Kn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!Wn[e.type] : 'textarea' === t;
      }
      function Hn(e, t, n, r) {
        Ae(r),
          0 < (t = Mr(t, 'onChange')).length &&
            ((n = new hn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
      }
      var Vn = null,
        $n = null;
      function Qn(e) {
        Pr(e, 0);
      }
      function Yn(e) {
        if (J(ti(e))) return e;
      }
      function Gn(e, t) {
        if ('change' === e) return t;
      }
      var Jn = !1;
      if (f) {
        var Xn;
        if (f) {
          var Zn = 'oninput' in document;
          if (!Zn) {
            var er = document.createElement('div');
            er.setAttribute('oninput', 'return;'), (Zn = 'function' === typeof er.oninput);
          }
          Xn = Zn;
        } else Xn = !1;
        Jn = Xn && (!document.documentMode || 9 < document.documentMode);
      }
      function tr() {
        Vn && (Vn.detachEvent('onpropertychange', nr), ($n = Vn = null));
      }
      function nr(e) {
        if ('value' === e.propertyName && Yn($n)) {
          var t = [];
          if ((Hn(t, $n, e, Pe(e)), (e = Qn), ze)) e(t);
          else {
            ze = !0;
            try {
              je(e, t);
            } finally {
              (ze = !1), Be();
            }
          }
        }
      }
      function rr(e, t, n) {
        'focusin' === e ? (tr(), ($n = n), (Vn = t).attachEvent('onpropertychange', nr)) : 'focusout' === e && tr();
      }
      function ir(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Yn($n);
      }
      function or(e, t) {
        if ('click' === e) return Yn(t);
      }
      function ar(e, t) {
        if ('input' === e || 'change' === e) return Yn(t);
      }
      var sr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              },
        ur = Object.prototype.hasOwnProperty;
      function cr(e, t) {
        if (sr(e, t)) return !0;
        if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) if (!ur.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function lr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function fr(e, t) {
        var n,
          r = lr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = lr(r);
        }
      }
      function pr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? pr(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function hr() {
        for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = 'string' === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = X((e = t.contentWindow).document);
        }
        return t;
      }
      function dr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      var vr = f && 'documentMode' in document && 11 >= document.documentMode,
        yr = null,
        mr = null,
        gr = null,
        br = !1;
      function Sr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == yr ||
          yr !== X(r) ||
          ('selectionStart' in (r = yr) && dr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                  .anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (gr && cr(gr, r)) ||
            ((gr = r),
            0 < (r = Mr(mr, 'onSelect')).length &&
              ((t = new hn('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = yr))));
      }
      Dt(
        'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
          ' '
        ),
        0
      ),
        Dt(
          'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
            ' '
          ),
          1
        ),
        Dt(Mt, 2);
      for (
        var wr = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '),
          kr = 0;
        kr < wr.length;
        kr++
      )
        jt.set(wr[kr], 0);
      l('onMouseEnter', ['mouseout', 'mouseover']),
        l('onMouseLeave', ['mouseout', 'mouseover']),
        l('onPointerEnter', ['pointerout', 'pointerover']),
        l('onPointerLeave', ['pointerout', 'pointerover']),
        c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        c(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
        ),
        c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        c('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        c('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
      var Cr =
          'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
          ),
        Or = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cr));
      function Er(e, t, n) {
        var r = e.type || 'unknown-event';
        (e.currentTarget = n),
          (function (e, t, n, r, i, o, s, u, c) {
            if ((Ye.apply(this, arguments), Ke)) {
              if (!Ke) throw Error(a(198));
              var l = He;
              (Ke = !1), (He = null), Ve || ((Ve = !0), ($e = l));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Pr(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t)
              for (var a = r.length - 1; 0 <= a; a--) {
                var s = r[a],
                  u = s.instance,
                  c = s.currentTarget;
                if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
                Er(i, s, c), (o = u);
              }
            else
              for (a = 0; a < r.length; a++) {
                if (
                  ((u = (s = r[a]).instance),
                  (c = s.currentTarget),
                  (s = s.listener),
                  u !== o && i.isPropagationStopped())
                )
                  break e;
                Er(i, s, c), (o = u);
              }
          }
        }
        if (Ve) throw ((e = $e), (Ve = !1), ($e = null), e);
      }
      function xr(e, t) {
        var n = ri(t),
          r = e + '__bubble';
        n.has(r) || (Ar(t, e, 2, !1), n.add(r));
      }
      var Rr = '_reactListening' + Math.random().toString(36).slice(2);
      function Tr(e) {
        e[Rr] ||
          ((e[Rr] = !0),
          s.forEach(function (t) {
            Or.has(t) || Ir(t, !1, e, null), Ir(t, !0, e, null);
          }));
      }
      function Ir(e, t, n, r) {
        var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          o = n;
        if (('selectionchange' === e && 9 !== n.nodeType && (o = n.ownerDocument), null !== r && !t && Or.has(e))) {
          if ('scroll' !== e) return;
          (i |= 2), (o = r);
        }
        var a = ri(o),
          s = e + '__' + (t ? 'capture' : 'bubble');
        a.has(s) || (t && (i |= 4), Ar(o, e, i, t), a.add(s));
      }
      function Ar(e, t, n, r) {
        var i = jt.get(t);
        switch (void 0 === i ? 2 : i) {
          case 0:
            i = Gt;
            break;
          case 1:
            i = Jt;
            break;
          default:
            i = Xt;
        }
        (n = i.bind(null, t, n, e)),
          (i = void 0),
          !Ue || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (i = !0),
          r
            ? void 0 !== i
              ? e.addEventListener(t, n, { capture: !0, passive: i })
              : e.addEventListener(t, n, !0)
            : void 0 !== i
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
      }
      function _r(e, t, n, r, i) {
        var o = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var a = r.tag;
            if (3 === a || 4 === a) {
              var s = r.stateNode.containerInfo;
              if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
              if (4 === a)
                for (a = r.return; null !== a; ) {
                  var u = a.tag;
                  if (
                    (3 === u || 4 === u) &&
                    ((u = a.stateNode.containerInfo) === i || (8 === u.nodeType && u.parentNode === i))
                  )
                    return;
                  a = a.return;
                }
              for (; null !== s; ) {
                if (null === (a = Zr(s))) return;
                if (5 === (u = a.tag) || 6 === u) {
                  r = o = a;
                  continue e;
                }
                s = s.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            Le(e, t, n);
          } finally {
            (Ne = !1), Be();
          }
        })(function () {
          var r = o,
            i = Pe(n),
            a = [];
          e: {
            var s = _t.get(e);
            if (void 0 !== s) {
              var u = hn,
                c = e;
              switch (e) {
                case 'keypress':
                  if (0 === on(n)) break e;
                case 'keydown':
                case 'keyup':
                  u = Rn;
                  break;
                case 'focusin':
                  (c = 'focus'), (u = bn);
                  break;
                case 'focusout':
                  (c = 'blur'), (u = bn);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  u = bn;
                  break;
                case 'click':
                  if (2 === n.button) break e;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  u = mn;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  u = gn;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  u = In;
                  break;
                case Rt:
                case Tt:
                case It:
                  u = Sn;
                  break;
                case At:
                  u = An;
                  break;
                case 'scroll':
                  u = vn;
                  break;
                case 'wheel':
                  u = _n;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  u = wn;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  u = Tn;
              }
              var l = 0 !== (4 & t),
                f = !l && 'scroll' === e,
                p = l ? (null !== s ? s + 'Capture' : null) : s;
              l = [];
              for (var h, d = r; null !== d; ) {
                var v = (h = d).stateNode;
                if (
                  (5 === h.tag && null !== v && ((h = v), null !== p && null != (v = Fe(d, p)) && l.push(jr(d, v, h))),
                  f)
                )
                  break;
                d = d.return;
              }
              0 < l.length && ((s = new u(s, c, null, n, i)), a.push({ event: s, listeners: l }));
            }
          }
          if (0 === (7 & t)) {
            if (
              ((u = 'mouseout' === e || 'pointerout' === e),
              (!(s = 'mouseover' === e || 'pointerover' === e) ||
                0 !== (16 & t) ||
                !(c = n.relatedTarget || n.fromElement) ||
                (!Zr(c) && !c[Jr])) &&
                (u || s) &&
                ((s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window),
                u
                  ? ((u = r),
                    null !== (c = (c = n.relatedTarget || n.toElement) ? Zr(c) : null) &&
                      (c !== (f = Ge(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                      (c = null))
                  : ((u = null), (c = r)),
                u !== c))
            ) {
              if (
                ((l = mn),
                (v = 'onMouseLeave'),
                (p = 'onMouseEnter'),
                (d = 'mouse'),
                ('pointerout' !== e && 'pointerover' !== e) ||
                  ((l = Tn), (v = 'onPointerLeave'), (p = 'onPointerEnter'), (d = 'pointer')),
                (f = null == u ? s : ti(u)),
                (h = null == c ? s : ti(c)),
                ((s = new l(v, d + 'leave', u, n, i)).target = f),
                (s.relatedTarget = h),
                (v = null),
                Zr(i) === r && (((l = new l(p, d + 'enter', c, n, i)).target = h), (l.relatedTarget = f), (v = l)),
                (f = v),
                u && c)
              )
                e: {
                  for (p = c, d = 0, h = l = u; h; h = Dr(h)) d++;
                  for (h = 0, v = p; v; v = Dr(v)) h++;
                  for (; 0 < d - h; ) (l = Dr(l)), d--;
                  for (; 0 < h - d; ) (p = Dr(p)), h--;
                  for (; d--; ) {
                    if (l === p || (null !== p && l === p.alternate)) break e;
                    (l = Dr(l)), (p = Dr(p));
                  }
                  l = null;
                }
              else l = null;
              null !== u && Lr(a, s, u, l, !1), null !== c && null !== f && Lr(a, f, c, l, !0);
            }
            if (
              'select' === (u = (s = r ? ti(r) : window).nodeName && s.nodeName.toLowerCase()) ||
              ('input' === u && 'file' === s.type)
            )
              var y = Gn;
            else if (Kn(s))
              if (Jn) y = ar;
              else {
                y = ir;
                var m = rr;
              }
            else
              (u = s.nodeName) &&
                'input' === u.toLowerCase() &&
                ('checkbox' === s.type || 'radio' === s.type) &&
                (y = or);
            switch (
              (y && (y = y(e, r))
                ? Hn(a, y, n, i)
                : (m && m(e, s, r),
                  'focusout' === e &&
                    (m = s._wrapperState) &&
                    m.controlled &&
                    'number' === s.type &&
                    ie(s, 'number', s.value)),
              (m = r ? ti(r) : window),
              e)
            ) {
              case 'focusin':
                (Kn(m) || 'true' === m.contentEditable) && ((yr = m), (mr = r), (gr = null));
                break;
              case 'focusout':
                gr = mr = yr = null;
                break;
              case 'mousedown':
                br = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (br = !1), Sr(a, n, i);
                break;
              case 'selectionchange':
                if (vr) break;
              case 'keydown':
              case 'keyup':
                Sr(a, n, i);
            }
            var g;
            if (Mn)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var b = 'onCompositionStart';
                    break e;
                  case 'compositionend':
                    b = 'onCompositionEnd';
                    break e;
                  case 'compositionupdate':
                    b = 'onCompositionUpdate';
                    break e;
                }
                b = void 0;
              }
            else
              qn
                ? Fn(e, n) && (b = 'onCompositionEnd')
                : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            b &&
              (zn &&
                'ko' !== n.locale &&
                (qn || 'onCompositionStart' !== b
                  ? 'onCompositionEnd' === b && qn && (g = rn())
                  : ((tn = 'value' in (en = i) ? en.value : en.textContent), (qn = !0))),
              0 < (m = Mr(r, b)).length &&
                ((b = new kn(b, e, null, n, i)),
                a.push({ event: b, listeners: m }),
                g ? (b.data = g) : null !== (g = Un(n)) && (b.data = g))),
              (g = Ln
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return Un(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((Bn = !0), Nn);
                      case 'textInput':
                        return (e = t.data) === Nn && Bn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (qn)
                      return 'compositionend' === e || (!Mn && Fn(e, t))
                        ? ((e = rn()), (nn = tn = en = null), (qn = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                        return null;
                      case 'keypress':
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return zn && 'ko' !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Mr(r, 'onBeforeInput')).length &&
                ((i = new kn('onBeforeInput', 'beforeinput', null, n, i)),
                a.push({ event: i, listeners: r }),
                (i.data = g));
          }
          Pr(a, t);
        });
      }
      function jr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Mr(e, t) {
        for (var n = t + 'Capture', r = []; null !== e; ) {
          var i = e,
            o = i.stateNode;
          5 === i.tag &&
            null !== o &&
            ((i = o), null != (o = Fe(e, n)) && r.unshift(jr(e, o, i)), null != (o = Fe(e, t)) && r.push(jr(e, o, i))),
            (e = e.return);
        }
        return r;
      }
      function Dr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Lr(e, t, n, r, i) {
        for (var o = t._reactName, a = []; null !== n && n !== r; ) {
          var s = n,
            u = s.alternate,
            c = s.stateNode;
          if (null !== u && u === r) break;
          5 === s.tag &&
            null !== c &&
            ((s = c),
            i
              ? null != (u = Fe(n, o)) && a.unshift(jr(n, u, s))
              : i || (null != (u = Fe(n, o)) && a.push(jr(n, u, s)))),
            (n = n.return);
        }
        0 !== a.length && e.push({ event: t, listeners: a });
      }
      function zr() {}
      var Nr = null,
        Br = null;
      function Fr(e, t) {
        switch (e) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!t.autoFocus;
        }
        return !1;
      }
      function Ur(e, t) {
        return (
          'textarea' === e ||
          'option' === e ||
          'noscript' === e ||
          'string' === typeof t.children ||
          'number' === typeof t.children ||
          ('object' === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var qr = 'function' === typeof setTimeout ? setTimeout : void 0,
        Wr = 'function' === typeof clearTimeout ? clearTimeout : void 0;
      function Kr(e) {
        1 === e.nodeType ? (e.textContent = '') : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
      }
      function Hr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Vr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === t) return e;
              t--;
            } else '/$' === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var $r = 0;
      var Qr = Math.random().toString(36).slice(2),
        Yr = '__reactFiber$' + Qr,
        Gr = '__reactProps$' + Qr,
        Jr = '__reactContainer$' + Qr,
        Xr = '__reactEvents$' + Qr;
      function Zr(e) {
        var t = e[Yr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Jr] || n[Yr])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = Vr(e); null !== e; ) {
                if ((n = e[Yr])) return n;
                e = Vr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ei(e) {
        return !(e = e[Yr] || e[Jr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
      }
      function ti(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(a(33));
      }
      function ni(e) {
        return e[Gr] || null;
      }
      function ri(e) {
        var t = e[Xr];
        return void 0 === t && (t = e[Xr] = new Set()), t;
      }
      var ii = [],
        oi = -1;
      function ai(e) {
        return { current: e };
      }
      function si(e) {
        0 > oi || ((e.current = ii[oi]), (ii[oi] = null), oi--);
      }
      function ui(e, t) {
        oi++, (ii[oi] = e.current), (e.current = t);
      }
      var ci = {},
        li = ai(ci),
        fi = ai(!1),
        pi = ci;
      function hi(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ci;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          o = {};
        for (i in n) o[i] = t[i];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function di(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function vi() {
        si(fi), si(li);
      }
      function yi(e, t, n) {
        if (li.current !== ci) throw Error(a(168));
        ui(li, t), ui(fi, n);
      }
      function mi(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
        for (var o in (r = r.getChildContext())) if (!(o in e)) throw Error(a(108, $(t) || 'Unknown', o));
        return i({}, n, r);
      }
      function gi(e) {
        return (
          (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ci),
          (pi = li.current),
          ui(li, e),
          ui(fi, fi.current),
          !0
        );
      }
      function bi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n ? ((e = mi(e, t, pi)), (r.__reactInternalMemoizedMergedChildContext = e), si(fi), si(li), ui(li, e)) : si(fi),
          ui(fi, n);
      }
      var Si = null,
        wi = null,
        ki = o.unstable_runWithPriority,
        Ci = o.unstable_scheduleCallback,
        Oi = o.unstable_cancelCallback,
        Ei = o.unstable_shouldYield,
        Pi = o.unstable_requestPaint,
        xi = o.unstable_now,
        Ri = o.unstable_getCurrentPriorityLevel,
        Ti = o.unstable_ImmediatePriority,
        Ii = o.unstable_UserBlockingPriority,
        Ai = o.unstable_NormalPriority,
        _i = o.unstable_LowPriority,
        ji = o.unstable_IdlePriority,
        Mi = {},
        Di = void 0 !== Pi ? Pi : function () {},
        Li = null,
        zi = null,
        Ni = !1,
        Bi = xi(),
        Fi =
          1e4 > Bi
            ? xi
            : function () {
                return xi() - Bi;
              };
      function Ui() {
        switch (Ri()) {
          case Ti:
            return 99;
          case Ii:
            return 98;
          case Ai:
            return 97;
          case _i:
            return 96;
          case ji:
            return 95;
          default:
            throw Error(a(332));
        }
      }
      function qi(e) {
        switch (e) {
          case 99:
            return Ti;
          case 98:
            return Ii;
          case 97:
            return Ai;
          case 96:
            return _i;
          case 95:
            return ji;
          default:
            throw Error(a(332));
        }
      }
      function Wi(e, t) {
        return (e = qi(e)), ki(e, t);
      }
      function Ki(e, t, n) {
        return (e = qi(e)), Ci(e, t, n);
      }
      function Hi() {
        if (null !== zi) {
          var e = zi;
          (zi = null), Oi(e);
        }
        Vi();
      }
      function Vi() {
        if (!Ni && null !== Li) {
          Ni = !0;
          var e = 0;
          try {
            var t = Li;
            Wi(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Li = null);
          } catch (n) {
            throw (null !== Li && (Li = Li.slice(e + 1)), Ci(Ti, Hi), n);
          } finally {
            Ni = !1;
          }
        }
      }
      var $i = w.ReactCurrentBatchConfig;
      function Qi(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = i({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Yi = ai(null),
        Gi = null,
        Ji = null,
        Xi = null;
      function Zi() {
        Xi = Ji = Gi = null;
      }
      function eo(e) {
        var t = Yi.current;
        si(Yi), (e.type._context._currentValue = t);
      }
      function to(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function no(e, t) {
        (Gi = e),
          (Xi = Ji = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 !== (e.lanes & t) && (Ma = !0), (e.firstContext = null));
      }
      function ro(e, t) {
        if (Xi !== e && !1 !== t && 0 !== t)
          if (
            (('number' === typeof t && 1073741823 !== t) || ((Xi = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Ji)
          ) {
            if (null === Gi) throw Error(a(308));
            (Ji = t), (Gi.dependencies = { lanes: 0, firstContext: t, responders: null });
          } else Ji = Ji.next = t;
        return e._currentValue;
      }
      var io = !1;
      function oo(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function ao(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function so(e, t) {
        return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function uo(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
      }
      function co(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var i = null,
            o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var a = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
            } while (null !== n);
            null === o ? (i = o = t) : (o = o.next = t);
          } else i = o = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: o,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
      }
      function lo(e, t, n, r) {
        var o = e.updateQueue;
        io = !1;
        var a = o.firstBaseUpdate,
          s = o.lastBaseUpdate,
          u = o.shared.pending;
        if (null !== u) {
          o.shared.pending = null;
          var c = u,
            l = c.next;
          (c.next = null), null === s ? (a = l) : (s.next = l), (s = c);
          var f = e.alternate;
          if (null !== f) {
            var p = (f = f.updateQueue).lastBaseUpdate;
            p !== s && (null === p ? (f.firstBaseUpdate = l) : (p.next = l), (f.lastBaseUpdate = c));
          }
        }
        if (null !== a) {
          for (p = o.baseState, s = 0, f = l = c = null; ; ) {
            u = a.lane;
            var h = a.eventTime;
            if ((r & u) === u) {
              null !== f &&
                (f = f.next =
                  { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
              e: {
                var d = e,
                  v = a;
                switch (((u = t), (h = n), v.tag)) {
                  case 1:
                    if ('function' === typeof (d = v.payload)) {
                      p = d.call(h, p, u);
                      break e;
                    }
                    p = d;
                    break e;
                  case 3:
                    d.flags = (-4097 & d.flags) | 64;
                  case 0:
                    if (null === (u = 'function' === typeof (d = v.payload) ? d.call(h, p, u) : d) || void 0 === u)
                      break e;
                    p = i({}, p, u);
                    break e;
                  case 2:
                    io = !0;
                }
              }
              null !== a.callback && ((e.flags |= 32), null === (u = o.effects) ? (o.effects = [a]) : u.push(a));
            } else
              (h = { eventTime: h, lane: u, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                null === f ? ((l = f = h), (c = p)) : (f = f.next = h),
                (s |= u);
            if (null === (a = a.next)) {
              if (null === (u = o.shared.pending)) break;
              (a = u.next), (u.next = null), (o.lastBaseUpdate = u), (o.shared.pending = null);
            }
          }
          null === f && (c = p),
            (o.baseState = c),
            (o.firstBaseUpdate = l),
            (o.lastBaseUpdate = f),
            (Ns |= s),
            (e.lanes = s),
            (e.memoizedState = p);
        }
      }
      function fo(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              i = r.callback;
            if (null !== i) {
              if (((r.callback = null), (r = n), 'function' !== typeof i)) throw Error(a(191, i));
              i.call(r);
            }
          }
      }
      var po = new r.Component().refs;
      function ho(e, t, n, r) {
        (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : i({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var vo = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ge(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = cu(),
            i = lu(e),
            o = so(r, i);
          (o.payload = t), void 0 !== n && null !== n && (o.callback = n), uo(e, o), fu(e, i, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = cu(),
            i = lu(e),
            o = so(r, i);
          (o.tag = 1), (o.payload = t), void 0 !== n && null !== n && (o.callback = n), uo(e, o), fu(e, i, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = cu(),
            r = lu(e),
            i = so(n, r);
          (i.tag = 2), void 0 !== t && null !== t && (i.callback = t), uo(e, i), fu(e, r, n);
        },
      };
      function yo(e, t, n, r, i, o, a) {
        return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, a)
          : !t.prototype || !t.prototype.isPureReactComponent || !cr(n, r) || !cr(i, o);
      }
      function mo(e, t, n) {
        var r = !1,
          i = ci,
          o = t.contextType;
        return (
          'object' === typeof o && null !== o
            ? (o = ro(o))
            : ((i = di(t) ? pi : li.current),
              (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? hi(e, i) : ci)),
          (t = new t(n, o)),
          (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = vo),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function go(e, t, n, r) {
        (e = t.state),
          'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
          'function' === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && vo.enqueueReplaceState(t, t.state, null);
      }
      function bo(e, t, n, r) {
        var i = e.stateNode;
        (i.props = n), (i.state = e.memoizedState), (i.refs = po), oo(e);
        var o = t.contextType;
        'object' === typeof o && null !== o
          ? (i.context = ro(o))
          : ((o = di(t) ? pi : li.current), (i.context = hi(e, o))),
          lo(e, n, i, r),
          (i.state = e.memoizedState),
          'function' === typeof (o = t.getDerivedStateFromProps) && (ho(e, t, o, n), (i.state = e.memoizedState)),
          'function' === typeof t.getDerivedStateFromProps ||
            'function' === typeof i.getSnapshotBeforeUpdate ||
            ('function' !== typeof i.UNSAFE_componentWillMount && 'function' !== typeof i.componentWillMount) ||
            ((t = i.state),
            'function' === typeof i.componentWillMount && i.componentWillMount(),
            'function' === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && vo.enqueueReplaceState(i, i.state, null),
            lo(e, n, i, r),
            (i.state = e.memoizedState)),
          'function' === typeof i.componentDidMount && (e.flags |= 4);
      }
      var So = Array.isArray;
      function wo(e, t, n) {
        if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(a(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(a(147, e));
            var i = '' + e;
            return null !== t && null !== t.ref && 'function' === typeof t.ref && t.ref._stringRef === i
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === po && (t = r.refs = {}), null === e ? delete t[i] : (t[i] = e);
                })._stringRef = i),
                t);
          }
          if ('string' !== typeof e) throw Error(a(284));
          if (!n._owner) throw Error(a(290, e));
        }
        return e;
      }
      function ko(e, t) {
        if ('textarea' !== e.type)
          throw Error(
            a(
              31,
              '[object Object]' === Object.prototype.toString.call(t)
                ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                : t
            )
          );
      }
      function Co(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
          return e;
        }
        function i(e, t) {
          return ((e = Wu(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
          );
        }
        function s(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag ? (((t = $u(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
        }
        function c(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = i(t, n.props)).ref = wo(e, t, n)), (r.return = e), r)
            : (((r = Ku(n.type, n.key, n.props, null, e.mode, r)).ref = wo(e, t, n)), (r.return = e), r);
        }
        function l(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Qu(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Hu(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }
        function p(e, t, n) {
          if ('string' === typeof t || 'number' === typeof t) return ((t = $u('' + t, e.mode, n)).return = e), t;
          if ('object' === typeof t && null !== t) {
            switch (t.$$typeof) {
              case k:
                return ((n = Ku(t.type, t.key, t.props, null, e.mode, n)).ref = wo(e, null, t)), (n.return = e), n;
              case C:
                return ((t = Qu(t, e.mode, n)).return = e), t;
            }
            if (So(t) || q(t)) return ((t = Hu(t, e.mode, n, null)).return = e), t;
            ko(e, t);
          }
          return null;
        }
        function h(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ('string' === typeof n || 'number' === typeof n) return null !== i ? null : u(e, t, '' + n, r);
          if ('object' === typeof n && null !== n) {
            switch (n.$$typeof) {
              case k:
                return n.key === i ? (n.type === O ? f(e, t, n.props.children, r, i) : c(e, t, n, r)) : null;
              case C:
                return n.key === i ? l(e, t, n, r) : null;
            }
            if (So(n) || q(n)) return null !== i ? null : f(e, t, n, r, null);
            ko(e, n);
          }
          return null;
        }
        function d(e, t, n, r, i) {
          if ('string' === typeof r || 'number' === typeof r) return u(t, (e = e.get(n) || null), '' + r, i);
          if ('object' === typeof r && null !== r) {
            switch (r.$$typeof) {
              case k:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === O ? f(t, e, r.props.children, i, r.key) : c(t, e, r, i)
                );
              case C:
                return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
            }
            if (So(r) || q(r)) return f(t, (e = e.get(n) || null), r, i, null);
            ko(t, r);
          }
          return null;
        }
        function v(i, a, s, u) {
          for (var c = null, l = null, f = a, v = (a = 0), y = null; null !== f && v < s.length; v++) {
            f.index > v ? ((y = f), (f = null)) : (y = f.sibling);
            var m = h(i, f, s[v], u);
            if (null === m) {
              null === f && (f = y);
              break;
            }
            e && f && null === m.alternate && t(i, f),
              (a = o(m, a, v)),
              null === l ? (c = m) : (l.sibling = m),
              (l = m),
              (f = y);
          }
          if (v === s.length) return n(i, f), c;
          if (null === f) {
            for (; v < s.length; v++)
              null !== (f = p(i, s[v], u)) && ((a = o(f, a, v)), null === l ? (c = f) : (l.sibling = f), (l = f));
            return c;
          }
          for (f = r(i, f); v < s.length; v++)
            null !== (y = d(f, i, v, s[v], u)) &&
              (e && null !== y.alternate && f.delete(null === y.key ? v : y.key),
              (a = o(y, a, v)),
              null === l ? (c = y) : (l.sibling = y),
              (l = y));
          return (
            e &&
              f.forEach(function (e) {
                return t(i, e);
              }),
            c
          );
        }
        function y(i, s, u, c) {
          var l = q(u);
          if ('function' !== typeof l) throw Error(a(150));
          if (null == (u = l.call(u))) throw Error(a(151));
          for (
            var f = (l = null), v = s, y = (s = 0), m = null, g = u.next();
            null !== v && !g.done;
            y++, g = u.next()
          ) {
            v.index > y ? ((m = v), (v = null)) : (m = v.sibling);
            var b = h(i, v, g.value, c);
            if (null === b) {
              null === v && (v = m);
              break;
            }
            e && v && null === b.alternate && t(i, v),
              (s = o(b, s, y)),
              null === f ? (l = b) : (f.sibling = b),
              (f = b),
              (v = m);
          }
          if (g.done) return n(i, v), l;
          if (null === v) {
            for (; !g.done; y++, g = u.next())
              null !== (g = p(i, g.value, c)) && ((s = o(g, s, y)), null === f ? (l = g) : (f.sibling = g), (f = g));
            return l;
          }
          for (v = r(i, v); !g.done; y++, g = u.next())
            null !== (g = d(v, i, y, g.value, c)) &&
              (e && null !== g.alternate && v.delete(null === g.key ? y : g.key),
              (s = o(g, s, y)),
              null === f ? (l = g) : (f.sibling = g),
              (f = g));
          return (
            e &&
              v.forEach(function (e) {
                return t(i, e);
              }),
            l
          );
        }
        return function (e, r, o, u) {
          var c = 'object' === typeof o && null !== o && o.type === O && null === o.key;
          c && (o = o.props.children);
          var l = 'object' === typeof o && null !== o;
          if (l)
            switch (o.$$typeof) {
              case k:
                e: {
                  for (l = o.key, c = r; null !== c; ) {
                    if (c.key === l) {
                      switch (c.tag) {
                        case 7:
                          if (o.type === O) {
                            n(e, c.sibling), ((r = i(c, o.props.children)).return = e), (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (c.elementType === o.type) {
                            n(e, c.sibling), ((r = i(c, o.props)).ref = wo(e, c, o)), (r.return = e), (e = r);
                            break e;
                          }
                      }
                      n(e, c);
                      break;
                    }
                    t(e, c), (c = c.sibling);
                  }
                  o.type === O
                    ? (((r = Hu(o.props.children, e.mode, u, o.key)).return = e), (e = r))
                    : (((u = Ku(o.type, o.key, o.props, null, e.mode, u)).ref = wo(e, r, o)), (u.return = e), (e = u));
                }
                return s(e);
              case C:
                e: {
                  for (c = o.key; null !== r; ) {
                    if (r.key === c) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        n(e, r.sibling), ((r = i(r, o.children || [])).return = e), (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Qu(o, e.mode, u)).return = e), (e = r);
                }
                return s(e);
            }
          if ('string' === typeof o || 'number' === typeof o)
            return (
              (o = '' + o),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
                : (n(e, r), ((r = $u(o, e.mode, u)).return = e), (e = r)),
              s(e)
            );
          if (So(o)) return v(e, r, o, u);
          if (q(o)) return y(e, r, o, u);
          if ((l && ko(e, o), 'undefined' === typeof o && !c))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(a(152, $(e.type) || 'Component'));
            }
          return n(e, r);
        };
      }
      var Oo = Co(!0),
        Eo = Co(!1),
        Po = {},
        xo = ai(Po),
        Ro = ai(Po),
        To = ai(Po);
      function Io(e) {
        if (e === Po) throw Error(a(174));
        return e;
      }
      function Ao(e, t) {
        switch ((ui(To, t), ui(Ro, e), ui(xo, Po), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : de(null, '');
            break;
          default:
            t = de((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
        }
        si(xo), ui(xo, t);
      }
      function _o() {
        si(xo), si(Ro), si(To);
      }
      function jo(e) {
        Io(To.current);
        var t = Io(xo.current),
          n = de(t, e.type);
        t !== n && (ui(Ro, e), ui(xo, n));
      }
      function Mo(e) {
        Ro.current === e && (si(xo), si(Ro));
      }
      var Do = ai(0);
      function Lo(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var zo = null,
        No = null,
        Bo = !1;
      function Fo(e, t) {
        var n = Uu(5, null, null, 0);
        (n.elementType = 'DELETED'),
          (n.type = 'DELETED'),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Uo(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 6:
            return null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
          case 13:
          default:
            return !1;
        }
      }
      function qo(e) {
        if (Bo) {
          var t = No;
          if (t) {
            var n = t;
            if (!Uo(e, t)) {
              if (!(t = Hr(n.nextSibling)) || !Uo(e, t))
                return (e.flags = (-1025 & e.flags) | 2), (Bo = !1), void (zo = e);
              Fo(zo, n);
            }
            (zo = e), (No = Hr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Bo = !1), (zo = e);
        }
      }
      function Wo(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
        zo = e;
      }
      function Ko(e) {
        if (e !== zo) return !1;
        if (!Bo) return Wo(e), (Bo = !0), !1;
        var t = e.type;
        if (5 !== e.tag || ('head' !== t && 'body' !== t && !Ur(t, e.memoizedProps)))
          for (t = No; t; ) Fo(e, t), (t = Hr(t.nextSibling));
        if ((Wo(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ('/$' === n) {
                  if (0 === t) {
                    No = Hr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
              }
              e = e.nextSibling;
            }
            No = null;
          }
        } else No = zo ? Hr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Ho() {
        (No = zo = null), (Bo = !1);
      }
      var Vo = [];
      function $o() {
        for (var e = 0; e < Vo.length; e++) Vo[e]._workInProgressVersionPrimary = null;
        Vo.length = 0;
      }
      var Qo = w.ReactCurrentDispatcher,
        Yo = w.ReactCurrentBatchConfig,
        Go = 0,
        Jo = null,
        Xo = null,
        Zo = null,
        ea = !1,
        ta = !1;
      function na() {
        throw Error(a(321));
      }
      function ra(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!sr(e[n], t[n])) return !1;
        return !0;
      }
      function ia(e, t, n, r, i, o) {
        if (
          ((Go = o),
          (Jo = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Qo.current = null === e || null === e.memoizedState ? Ia : Aa),
          (e = n(r, i)),
          ta)
        ) {
          o = 0;
          do {
            if (((ta = !1), !(25 > o))) throw Error(a(301));
            (o += 1), (Zo = Xo = null), (t.updateQueue = null), (Qo.current = _a), (e = n(r, i));
          } while (ta);
        }
        if (((Qo.current = Ta), (t = null !== Xo && null !== Xo.next), (Go = 0), (Zo = Xo = Jo = null), (ea = !1), t))
          throw Error(a(300));
        return e;
      }
      function oa() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return null === Zo ? (Jo.memoizedState = Zo = e) : (Zo = Zo.next = e), Zo;
      }
      function aa() {
        if (null === Xo) {
          var e = Jo.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Xo.next;
        var t = null === Zo ? Jo.memoizedState : Zo.next;
        if (null !== t) (Zo = t), (Xo = e);
        else {
          if (null === e) throw Error(a(310));
          (e = {
            memoizedState: (Xo = e).memoizedState,
            baseState: Xo.baseState,
            baseQueue: Xo.baseQueue,
            queue: Xo.queue,
            next: null,
          }),
            null === Zo ? (Jo.memoizedState = Zo = e) : (Zo = Zo.next = e);
        }
        return Zo;
      }
      function sa(e, t) {
        return 'function' === typeof t ? t(e) : t;
      }
      function ua(e) {
        var t = aa(),
          n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = Xo,
          i = r.baseQueue,
          o = n.pending;
        if (null !== o) {
          if (null !== i) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
          }
          (r.baseQueue = i = o), (n.pending = null);
        }
        if (null !== i) {
          (i = i.next), (r = r.baseState);
          var u = (s = o = null),
            c = i;
          do {
            var l = c.lane;
            if ((Go & l) === l)
              null !== u &&
                (u = u.next =
                  { lane: 0, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null }),
                (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
            else {
              var f = { lane: l, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
              null === u ? ((s = u = f), (o = r)) : (u = u.next = f), (Jo.lanes |= l), (Ns |= l);
            }
            c = c.next;
          } while (null !== c && c !== i);
          null === u ? (o = r) : (u.next = s),
            sr(r, t.memoizedState) || (Ma = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function ca(e) {
        var t = aa(),
          n = t.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          i = n.pending,
          o = t.memoizedState;
        if (null !== i) {
          n.pending = null;
          var s = (i = i.next);
          do {
            (o = e(o, s.action)), (s = s.next);
          } while (s !== i);
          sr(o, t.memoizedState) || (Ma = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o);
        }
        return [o, r];
      }
      function la(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var i = t._workInProgressVersionPrimary;
        if (
          (null !== i
            ? (e = i === r)
            : ((e = e.mutableReadLanes), (e = (Go & e) === e) && ((t._workInProgressVersionPrimary = r), Vo.push(t))),
          e)
        )
          return n(t._source);
        throw (Vo.push(t), Error(a(350)));
      }
      function fa(e, t, n, r) {
        var i = Is;
        if (null === i) throw Error(a(349));
        var o = t._getVersion,
          s = o(t._source),
          u = Qo.current,
          c = u.useState(function () {
            return la(i, t, n);
          }),
          l = c[1],
          f = c[0];
        c = Zo;
        var p = e.memoizedState,
          h = p.refs,
          d = h.getSnapshot,
          v = p.source;
        p = p.subscribe;
        var y = Jo;
        return (
          (e.memoizedState = { refs: h, source: t, subscribe: r }),
          u.useEffect(
            function () {
              (h.getSnapshot = n), (h.setSnapshot = l);
              var e = o(t._source);
              if (!sr(s, e)) {
                (e = n(t._source)),
                  sr(f, e) || (l(e), (e = lu(y)), (i.mutableReadLanes |= e & i.pendingLanes)),
                  (e = i.mutableReadLanes),
                  (i.entangledLanes |= e);
                for (var r = i.entanglements, a = e; 0 < a; ) {
                  var u = 31 - Kt(a),
                    c = 1 << u;
                  (r[u] |= e), (a &= ~c);
                }
              }
            },
            [n, t, r]
          ),
          u.useEffect(
            function () {
              return r(t._source, function () {
                var e = h.getSnapshot,
                  n = h.setSnapshot;
                try {
                  n(e(t._source));
                  var r = lu(y);
                  i.mutableReadLanes |= r & i.pendingLanes;
                } catch (o) {
                  n(function () {
                    throw o;
                  });
                }
              });
            },
            [t, r]
          ),
          (sr(d, n) && sr(v, t) && sr(p, r)) ||
            (((e = { pending: null, dispatch: null, lastRenderedReducer: sa, lastRenderedState: f }).dispatch = l =
              Ra.bind(null, Jo, e)),
            (c.queue = e),
            (c.baseQueue = null),
            (f = la(i, t, n)),
            (c.memoizedState = c.baseState = f)),
          f
        );
      }
      function pa(e, t, n) {
        return fa(aa(), e, t, n);
      }
      function ha(e) {
        var t = oa();
        return (
          'function' === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            { pending: null, dispatch: null, lastRenderedReducer: sa, lastRenderedState: e }).dispatch =
            Ra.bind(null, Jo, e)),
          [t.memoizedState, e]
        );
      }
      function da(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Jo.updateQueue)
            ? ((t = { lastEffect: null }), (Jo.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function va(e) {
        return (e = { current: e }), (oa().memoizedState = e);
      }
      function ya() {
        return aa().memoizedState;
      }
      function ma(e, t, n, r) {
        var i = oa();
        (Jo.flags |= e), (i.memoizedState = da(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function ga(e, t, n, r) {
        var i = aa();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== Xo) {
          var a = Xo.memoizedState;
          if (((o = a.destroy), null !== r && ra(r, a.deps))) return void da(t, n, o, r);
        }
        (Jo.flags |= e), (i.memoizedState = da(1 | t, n, o, r));
      }
      function ba(e, t) {
        return ma(516, 4, e, t);
      }
      function Sa(e, t) {
        return ga(516, 4, e, t);
      }
      function wa(e, t) {
        return ga(4, 2, e, t);
      }
      function ka(e, t) {
        return 'function' === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Ca(e, t, n) {
        return (n = null !== n && void 0 !== n ? n.concat([e]) : null), ga(4, 2, ka.bind(null, t, e), n);
      }
      function Oa() {}
      function Ea(e, t) {
        var n = aa();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ra(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
      }
      function Pa(e, t) {
        var n = aa();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ra(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function xa(e, t) {
        var n = Ui();
        Wi(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Wi(97 < n ? 97 : n, function () {
            var n = Yo.transition;
            Yo.transition = 1;
            try {
              e(!1), t();
            } finally {
              Yo.transition = n;
            }
          });
      }
      function Ra(e, t, n) {
        var r = cu(),
          i = lu(e),
          o = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null },
          a = t.pending;
        if (
          (null === a ? (o.next = o) : ((o.next = a.next), (a.next = o)),
          (t.pending = o),
          (a = e.alternate),
          e === Jo || (null !== a && a === Jo))
        )
          ta = ea = !0;
        else {
          if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
              var s = t.lastRenderedState,
                u = a(s, n);
              if (((o.eagerReducer = a), (o.eagerState = u), sr(u, s))) return;
            } catch (c) {}
          fu(e, i, r);
        }
      }
      var Ta = {
          readContext: ro,
          useCallback: na,
          useContext: na,
          useEffect: na,
          useImperativeHandle: na,
          useLayoutEffect: na,
          useMemo: na,
          useReducer: na,
          useRef: na,
          useState: na,
          useDebugValue: na,
          useDeferredValue: na,
          useTransition: na,
          useMutableSource: na,
          useOpaqueIdentifier: na,
          unstable_isNewReconciler: !1,
        },
        Ia = {
          readContext: ro,
          useCallback: function (e, t) {
            return (oa().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: ro,
          useEffect: ba,
          useImperativeHandle: function (e, t, n) {
            return (n = null !== n && void 0 !== n ? n.concat([e]) : null), ma(4, 2, ka.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return ma(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = oa();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
          },
          useReducer: function (e, t, n) {
            var r = oa();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
                Ra.bind(null, Jo, e)),
              [r.memoizedState, e]
            );
          },
          useRef: va,
          useState: ha,
          useDebugValue: Oa,
          useDeferredValue: function (e) {
            var t = ha(e),
              n = t[0],
              r = t[1];
            return (
              ba(
                function () {
                  var t = Yo.transition;
                  Yo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Yo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ha(!1),
              t = e[0];
            return va((e = xa.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = oa();
            return (
              (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }),
              fa(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (Bo) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: D, toString: e, valueOf: e };
                })(function () {
                  throw (e || ((e = !0), n('r:' + ($r++).toString(36))), Error(a(355)));
                }),
                n = ha(t)[1];
              return (
                0 === (2 & Jo.mode) &&
                  ((Jo.flags |= 516),
                  da(
                    5,
                    function () {
                      n('r:' + ($r++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return ha((t = 'r:' + ($r++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Aa = {
          readContext: ro,
          useCallback: Ea,
          useContext: ro,
          useEffect: Sa,
          useImperativeHandle: Ca,
          useLayoutEffect: wa,
          useMemo: Pa,
          useReducer: ua,
          useRef: ya,
          useState: function () {
            return ua(sa);
          },
          useDebugValue: Oa,
          useDeferredValue: function (e) {
            var t = ua(sa),
              n = t[0],
              r = t[1];
            return (
              Sa(
                function () {
                  var t = Yo.transition;
                  Yo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Yo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ua(sa)[0];
            return [ya().current, e];
          },
          useMutableSource: pa,
          useOpaqueIdentifier: function () {
            return ua(sa)[0];
          },
          unstable_isNewReconciler: !1,
        },
        _a = {
          readContext: ro,
          useCallback: Ea,
          useContext: ro,
          useEffect: Sa,
          useImperativeHandle: Ca,
          useLayoutEffect: wa,
          useMemo: Pa,
          useReducer: ca,
          useRef: ya,
          useState: function () {
            return ca(sa);
          },
          useDebugValue: Oa,
          useDeferredValue: function (e) {
            var t = ca(sa),
              n = t[0],
              r = t[1];
            return (
              Sa(
                function () {
                  var t = Yo.transition;
                  Yo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Yo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ca(sa)[0];
            return [ya().current, e];
          },
          useMutableSource: pa,
          useOpaqueIdentifier: function () {
            return ca(sa)[0];
          },
          unstable_isNewReconciler: !1,
        },
        ja = w.ReactCurrentOwner,
        Ma = !1;
      function Da(e, t, n, r) {
        t.child = null === e ? Eo(t, null, n, r) : Oo(t, e.child, n, r);
      }
      function La(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return (
          no(t, i),
          (r = ia(e, t, n, r, o, i)),
          null === e || Ma
            ? ((t.flags |= 1), Da(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), ns(e, t, i))
        );
      }
      function za(e, t, n, r, i, o) {
        if (null === e) {
          var a = n.type;
          return 'function' !== typeof a ||
            qu(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Ku(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), Na(e, t, a, r, i, o));
        }
        return (
          (a = e.child),
          0 === (i & o) && ((i = a.memoizedProps), (n = null !== (n = n.compare) ? n : cr)(i, r) && e.ref === t.ref)
            ? ns(e, t, o)
            : ((t.flags |= 1), ((e = Wu(a, r)).ref = t.ref), (e.return = t), (t.child = e))
        );
      }
      function Na(e, t, n, r, i, o) {
        if (null !== e && cr(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Ma = !1), 0 === (o & i))) return (t.lanes = e.lanes), ns(e, t, o);
          0 !== (16384 & e.flags) && (Ma = !0);
        }
        return Ua(e, t, n, r, o);
      }
      function Ba(e, t, n) {
        var r = t.pendingProps,
          i = r.children,
          o = null !== e ? e.memoizedState : null;
        if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
          if (0 === (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), bu(t, n);
          else {
            if (0 === (1073741824 & n))
              return (
                (e = null !== o ? o.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                bu(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }), bu(t, null !== o ? o.baseLanes : n);
          }
        else null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), bu(t, r);
        return Da(e, t, i, n), t.child;
      }
      function Fa(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
      }
      function Ua(e, t, n, r, i) {
        var o = di(n) ? pi : li.current;
        return (
          (o = hi(t, o)),
          no(t, i),
          (n = ia(e, t, n, r, o, i)),
          null === e || Ma
            ? ((t.flags |= 1), Da(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), ns(e, t, i))
        );
      }
      function qa(e, t, n, r, i) {
        if (di(n)) {
          var o = !0;
          gi(t);
        } else o = !1;
        if ((no(t, i), null === t.stateNode))
          null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            mo(t, n, r),
            bo(t, n, r, i),
            (r = !0);
        else if (null === e) {
          var a = t.stateNode,
            s = t.memoizedProps;
          a.props = s;
          var u = a.context,
            c = n.contextType;
          'object' === typeof c && null !== c ? (c = ro(c)) : (c = hi(t, (c = di(n) ? pi : li.current)));
          var l = n.getDerivedStateFromProps,
            f = 'function' === typeof l || 'function' === typeof a.getSnapshotBeforeUpdate;
          f ||
            ('function' !== typeof a.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof a.componentWillReceiveProps) ||
            ((s !== r || u !== c) && go(t, a, r, c)),
            (io = !1);
          var p = t.memoizedState;
          (a.state = p),
            lo(t, r, a, i),
            (u = t.memoizedState),
            s !== r || p !== u || fi.current || io
              ? ('function' === typeof l && (ho(t, n, l, r), (u = t.memoizedState)),
                (s = io || yo(t, n, s, r, p, u, c))
                  ? (f ||
                      ('function' !== typeof a.UNSAFE_componentWillMount &&
                        'function' !== typeof a.componentWillMount) ||
                      ('function' === typeof a.componentWillMount && a.componentWillMount(),
                      'function' === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                    'function' === typeof a.componentDidMount && (t.flags |= 4))
                  : ('function' === typeof a.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (a.props = r),
                (a.state = u),
                (a.context = c),
                (r = s))
              : ('function' === typeof a.componentDidMount && (t.flags |= 4), (r = !1));
        } else {
          (a = t.stateNode),
            ao(e, t),
            (s = t.memoizedProps),
            (c = t.type === t.elementType ? s : Qi(t.type, s)),
            (a.props = c),
            (f = t.pendingProps),
            (p = a.context),
            'object' === typeof (u = n.contextType) && null !== u
              ? (u = ro(u))
              : (u = hi(t, (u = di(n) ? pi : li.current)));
          var h = n.getDerivedStateFromProps;
          (l = 'function' === typeof h || 'function' === typeof a.getSnapshotBeforeUpdate) ||
            ('function' !== typeof a.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof a.componentWillReceiveProps) ||
            ((s !== f || p !== u) && go(t, a, r, u)),
            (io = !1),
            (p = t.memoizedState),
            (a.state = p),
            lo(t, r, a, i);
          var d = t.memoizedState;
          s !== f || p !== d || fi.current || io
            ? ('function' === typeof h && (ho(t, n, h, r), (d = t.memoizedState)),
              (c = io || yo(t, n, c, r, p, d, u))
                ? (l ||
                    ('function' !== typeof a.UNSAFE_componentWillUpdate &&
                      'function' !== typeof a.componentWillUpdate) ||
                    ('function' === typeof a.componentWillUpdate && a.componentWillUpdate(r, d, u),
                    'function' === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, u)),
                  'function' === typeof a.componentDidUpdate && (t.flags |= 4),
                  'function' === typeof a.getSnapshotBeforeUpdate && (t.flags |= 256))
                : ('function' !== typeof a.componentDidUpdate ||
                    (s === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 4),
                  'function' !== typeof a.getSnapshotBeforeUpdate ||
                    (s === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = d)),
              (a.props = r),
              (a.state = d),
              (a.context = u),
              (r = c))
            : ('function' !== typeof a.componentDidUpdate ||
                (s === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              'function' !== typeof a.getSnapshotBeforeUpdate ||
                (s === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Wa(e, t, n, r, o, i);
      }
      function Wa(e, t, n, r, i, o) {
        Fa(e, t);
        var a = 0 !== (64 & t.flags);
        if (!r && !a) return i && bi(t, n, !1), ns(e, t, o);
        (r = t.stateNode), (ja.current = t);
        var s = a && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
        return (
          (t.flags |= 1),
          null !== e && a ? ((t.child = Oo(t, e.child, null, o)), (t.child = Oo(t, null, s, o))) : Da(e, t, s, o),
          (t.memoizedState = r.state),
          i && bi(t, n, !0),
          t.child
        );
      }
      function Ka(e) {
        var t = e.stateNode;
        t.pendingContext ? yi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yi(0, t.context, !1),
          Ao(e, t.containerInfo);
      }
      var Ha,
        Va,
        $a,
        Qa = { dehydrated: null, retryLane: 0 };
      function Ya(e, t, n) {
        var r,
          i = t.pendingProps,
          o = Do.current,
          a = !1;
        return (
          (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
          r
            ? ((a = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === i.fallback ||
              !0 === i.unstable_avoidThisFallback ||
              (o |= 1),
          ui(Do, 1 & o),
          null === e
            ? (void 0 !== i.fallback && qo(t),
              (e = i.children),
              (o = i.fallback),
              a
                ? ((e = Ga(t, e, o, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Qa), e)
                : 'number' === typeof i.unstable_expectedLoadTime
                ? ((e = Ga(t, e, o, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Qa),
                  (t.lanes = 33554432),
                  e)
                : (((n = Vu({ mode: 'visible', children: e }, t.mode, n, null)).return = t), (t.child = n)))
            : (e.memoizedState,
              a
                ? ((i = Xa(e, t, i.children, i.fallback, n)),
                  (a = t.child),
                  (o = e.child.memoizedState),
                  (a.memoizedState = null === o ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
                  (a.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Qa),
                  i)
                : ((n = Ja(e, t, i.children, n)), (t.memoizedState = null), n))
        );
      }
      function Ga(e, t, n, r) {
        var i = e.mode,
          o = e.child;
        return (
          (t = { mode: 'hidden', children: t }),
          0 === (2 & i) && null !== o ? ((o.childLanes = 0), (o.pendingProps = t)) : (o = Vu(t, i, 0, null)),
          (n = Hu(n, i, r, null)),
          (o.return = e),
          (n.return = e),
          (o.sibling = n),
          (e.child = o),
          n
        );
      }
      function Ja(e, t, n, r) {
        var i = e.child;
        return (
          (e = i.sibling),
          (n = Wu(i, { mode: 'visible', children: n })),
          0 === (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function Xa(e, t, n, r, i) {
        var o = t.mode,
          a = e.child;
        e = a.sibling;
        var s = { mode: 'hidden', children: n };
        return (
          0 === (2 & o) && t.child !== a
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = s),
              null !== (a = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect), (t.lastEffect = a), (a.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = Wu(a, s)),
          null !== e ? (r = Wu(e, r)) : ((r = Hu(r, o, i, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function Za(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), to(e.return, t);
      }
      function es(e, t, n, r, i, o) {
        var a = e.memoizedState;
        null === a
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
              lastEffect: o,
            })
          : ((a.isBackwards = t),
            (a.rendering = null),
            (a.renderingStartTime = 0),
            (a.last = r),
            (a.tail = n),
            (a.tailMode = i),
            (a.lastEffect = o));
      }
      function ts(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          o = r.tail;
        if ((Da(e, t, r.children, n), 0 !== (2 & (r = Do.current)))) (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 !== (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Za(e, n);
              else if (19 === e.tag) Za(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((ui(Do, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (i) {
            case 'forwards':
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === Lo(e) && (i = n), (n = n.sibling);
              null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                es(t, !1, i, n, o, t.lastEffect);
              break;
            case 'backwards':
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === Lo(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              es(t, !0, n, null, o, t.lastEffect);
              break;
            case 'together':
              es(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function ns(e, t, n) {
        if ((null !== e && (t.dependencies = e.dependencies), (Ns |= t.lanes), 0 !== (n & t.childLanes))) {
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (n = Wu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
              (e = e.sibling), ((n = n.sibling = Wu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function rs(e, t) {
        if (!Bo)
          switch (e.tailMode) {
            case 'hidden':
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case 'collapsed':
              n = e.tail;
              for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
              null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
          }
      }
      function is(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return di(t.type) && vi(), null;
          case 3:
            return (
              _o(),
              si(fi),
              si(li),
              $o(),
              (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) || (Ko(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            Mo(t);
            var o = Io(To.current);
            if (((n = t.type), null !== e && null != t.stateNode)) Va(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(a(166));
                return null;
              }
              if (((e = Io(xo.current)), Ko(t))) {
                (r = t.stateNode), (n = t.type);
                var s = t.memoizedProps;
                switch (((r[Yr] = t), (r[Gr] = s), n)) {
                  case 'dialog':
                    xr('cancel', r), xr('close', r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    xr('load', r);
                    break;
                  case 'video':
                  case 'audio':
                    for (e = 0; e < Cr.length; e++) xr(Cr[e], r);
                    break;
                  case 'source':
                    xr('error', r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    xr('error', r), xr('load', r);
                    break;
                  case 'details':
                    xr('toggle', r);
                    break;
                  case 'input':
                    ee(r, s), xr('invalid', r);
                    break;
                  case 'select':
                    (r._wrapperState = { wasMultiple: !!s.multiple }), xr('invalid', r);
                    break;
                  case 'textarea':
                    ue(r, s), xr('invalid', r);
                }
                for (var c in (Oe(n, s), (e = null), s))
                  s.hasOwnProperty(c) &&
                    ((o = s[c]),
                    'children' === c
                      ? 'string' === typeof o
                        ? r.textContent !== o && (e = ['children', o])
                        : 'number' === typeof o && r.textContent !== '' + o && (e = ['children', '' + o])
                      : u.hasOwnProperty(c) && null != o && 'onScroll' === c && xr('scroll', r));
                switch (n) {
                  case 'input':
                    G(r), re(r, s, !0);
                    break;
                  case 'textarea':
                    G(r), le(r);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' === typeof s.onClick && (r.onclick = zr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((c = 9 === o.nodeType ? o : o.ownerDocument),
                  e === fe && (e = he(n)),
                  e === fe
                    ? 'script' === n
                      ? (((e = c.createElement('div')).innerHTML = '<script></script>'),
                        (e = e.removeChild(e.firstChild)))
                      : 'string' === typeof r.is
                      ? (e = c.createElement(n, { is: r.is }))
                      : ((e = c.createElement(n)),
                        'select' === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                    : (e = c.createElementNS(e, n)),
                  (e[Yr] = t),
                  (e[Gr] = r),
                  Ha(e, t),
                  (t.stateNode = e),
                  (c = Ee(n, r)),
                  n)
                ) {
                  case 'dialog':
                    xr('cancel', e), xr('close', e), (o = r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    xr('load', e), (o = r);
                    break;
                  case 'video':
                  case 'audio':
                    for (o = 0; o < Cr.length; o++) xr(Cr[o], e);
                    o = r;
                    break;
                  case 'source':
                    xr('error', e), (o = r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    xr('error', e), xr('load', e), (o = r);
                    break;
                  case 'details':
                    xr('toggle', e), (o = r);
                    break;
                  case 'input':
                    ee(e, r), (o = Z(e, r)), xr('invalid', e);
                    break;
                  case 'option':
                    o = oe(e, r);
                    break;
                  case 'select':
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (o = i({}, r, { value: void 0 })),
                      xr('invalid', e);
                    break;
                  case 'textarea':
                    ue(e, r), (o = se(e, r)), xr('invalid', e);
                    break;
                  default:
                    o = r;
                }
                Oe(n, o);
                var l = o;
                for (s in l)
                  if (l.hasOwnProperty(s)) {
                    var f = l[s];
                    'style' === s
                      ? ke(e, f)
                      : 'dangerouslySetInnerHTML' === s
                      ? null != (f = f ? f.__html : void 0) && me(e, f)
                      : 'children' === s
                      ? 'string' === typeof f
                        ? ('textarea' !== n || '' !== f) && ge(e, f)
                        : 'number' === typeof f && ge(e, '' + f)
                      : 'suppressContentEditableWarning' !== s &&
                        'suppressHydrationWarning' !== s &&
                        'autoFocus' !== s &&
                        (u.hasOwnProperty(s)
                          ? null != f && 'onScroll' === s && xr('scroll', e)
                          : null != f && S(e, s, f, c));
                  }
                switch (n) {
                  case 'input':
                    G(e), re(e, r, !1);
                    break;
                  case 'textarea':
                    G(e), le(e);
                    break;
                  case 'option':
                    null != r.value && e.setAttribute('value', '' + Q(r.value));
                    break;
                  case 'select':
                    (e.multiple = !!r.multiple),
                      null != (s = r.value)
                        ? ae(e, !!r.multiple, s, !1)
                        : null != r.defaultValue && ae(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    'function' === typeof o.onClick && (e.onclick = zr);
                }
                Fr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) $a(0, t, e.memoizedProps, r);
            else {
              if ('string' !== typeof r && null === t.stateNode) throw Error(a(166));
              (n = Io(To.current)),
                Io(xo.current),
                Ko(t)
                  ? ((r = t.stateNode), (n = t.memoizedProps), (r[Yr] = t), r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Yr] = t), (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              si(Do),
              (r = t.memoizedState),
              0 !== (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e ? void 0 !== t.memoizedProps.fallback && Ko(t) : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 !== (2 & t.mode) &&
                    ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & Do.current)
                      ? 0 === Ds && (Ds = 3)
                      : ((0 !== Ds && 3 !== Ds) || (Ds = 4),
                        null === Is || (0 === (134217727 & Ns) && 0 === (134217727 & Bs)) || vu(Is, _s))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return _o(), null === e && Tr(t.stateNode.containerInfo), null;
          case 10:
            return eo(t), null;
          case 17:
            return di(t.type) && vi(), null;
          case 19:
            if ((si(Do), null === (r = t.memoizedState))) return null;
            if (((s = 0 !== (64 & t.flags)), null === (c = r.rendering)))
              if (s) rs(r, !1);
              else {
                if (0 !== Ds || (null !== e && 0 !== (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (c = Lo(e))) {
                      for (
                        t.flags |= 64,
                          rs(r, !1),
                          null !== (s = c.updateQueue) && ((t.updateQueue = s), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((s = n).flags &= 2),
                          (s.nextEffect = null),
                          (s.firstEffect = null),
                          (s.lastEffect = null),
                          null === (c = s.alternate)
                            ? ((s.childLanes = 0),
                              (s.lanes = e),
                              (s.child = null),
                              (s.memoizedProps = null),
                              (s.memoizedState = null),
                              (s.updateQueue = null),
                              (s.dependencies = null),
                              (s.stateNode = null))
                            : ((s.childLanes = c.childLanes),
                              (s.lanes = c.lanes),
                              (s.child = c.child),
                              (s.memoizedProps = c.memoizedProps),
                              (s.memoizedState = c.memoizedState),
                              (s.updateQueue = c.updateQueue),
                              (s.type = c.type),
                              (e = c.dependencies),
                              (s.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                          (n = n.sibling);
                      return ui(Do, (1 & Do.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail && Fi() > Ws && ((t.flags |= 64), (s = !0), rs(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!s)
                if (null !== (e = Lo(c))) {
                  if (
                    ((t.flags |= 64),
                    (s = !0),
                    null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                    rs(r, !0),
                    null === r.tail && 'hidden' === r.tailMode && !c.alternate && !Bo)
                  )
                    return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                } else
                  2 * Fi() - r.renderingStartTime > Ws &&
                    1073741824 !== n &&
                    ((t.flags |= 64), (s = !0), rs(r, !1), (t.lanes = 33554432));
              r.isBackwards
                ? ((c.sibling = t.child), (t.child = c))
                : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Fi()),
                (n.sibling = null),
                (t = Do.current),
                ui(Do, s ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              Su(),
              null !== e &&
                (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                'unstable-defer-without-hiding' !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(a(156, t.tag));
      }
      function os(e) {
        switch (e.tag) {
          case 1:
            di(e.type) && vi();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((_o(), si(fi), si(li), $o(), 0 !== (64 & (t = e.flags)))) throw Error(a(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return Mo(e), null;
          case 13:
            return si(Do), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 19:
            return si(Do), null;
          case 4:
            return _o(), null;
          case 10:
            return eo(e), null;
          case 23:
          case 24:
            return Su(), null;
          default:
            return null;
        }
      }
      function as(e, t) {
        try {
          var n = '',
            r = t;
          do {
            (n += V(r)), (r = r.return);
          } while (r);
          var i = n;
        } catch (o) {
          i = '\nError generating stack: ' + o.message + '\n' + o.stack;
        }
        return { value: e, source: t, stack: i };
      }
      function ss(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Ha = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Va = function (e, t, n, r) {
          var o = e.memoizedProps;
          if (o !== r) {
            (e = t.stateNode), Io(xo.current);
            var a,
              s = null;
            switch (n) {
              case 'input':
                (o = Z(e, o)), (r = Z(e, r)), (s = []);
                break;
              case 'option':
                (o = oe(e, o)), (r = oe(e, r)), (s = []);
                break;
              case 'select':
                (o = i({}, o, { value: void 0 })), (r = i({}, r, { value: void 0 })), (s = []);
                break;
              case 'textarea':
                (o = se(e, o)), (r = se(e, r)), (s = []);
                break;
              default:
                'function' !== typeof o.onClick && 'function' === typeof r.onClick && (e.onclick = zr);
            }
            for (f in (Oe(n, r), (n = null), o))
              if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                if ('style' === f) {
                  var c = o[f];
                  for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                } else
                  'dangerouslySetInnerHTML' !== f &&
                    'children' !== f &&
                    'suppressContentEditableWarning' !== f &&
                    'suppressHydrationWarning' !== f &&
                    'autoFocus' !== f &&
                    (u.hasOwnProperty(f) ? s || (s = []) : (s = s || []).push(f, null));
            for (f in r) {
              var l = r[f];
              if (((c = null != o ? o[f] : void 0), r.hasOwnProperty(f) && l !== c && (null != l || null != c)))
                if ('style' === f)
                  if (c) {
                    for (a in c) !c.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
                    for (a in l) l.hasOwnProperty(a) && c[a] !== l[a] && (n || (n = {}), (n[a] = l[a]));
                  } else n || (s || (s = []), s.push(f, n)), (n = l);
                else
                  'dangerouslySetInnerHTML' === f
                    ? ((l = l ? l.__html : void 0),
                      (c = c ? c.__html : void 0),
                      null != l && c !== l && (s = s || []).push(f, l))
                    : 'children' === f
                    ? ('string' !== typeof l && 'number' !== typeof l) || (s = s || []).push(f, '' + l)
                    : 'suppressContentEditableWarning' !== f &&
                      'suppressHydrationWarning' !== f &&
                      (u.hasOwnProperty(f)
                        ? (null != l && 'onScroll' === f && xr('scroll', e), s || c === l || (s = []))
                        : 'object' === typeof l && null !== l && l.$$typeof === D
                        ? l.toString()
                        : (s = s || []).push(f, l));
            }
            n && (s = s || []).push('style', n);
            var f = s;
            (t.updateQueue = f) && (t.flags |= 4);
          }
        }),
        ($a = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var us = 'function' === typeof WeakMap ? WeakMap : Map;
      function cs(e, t, n) {
        ((n = so(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            $s || (($s = !0), (Qs = r)), ss(0, t);
          }),
          n
        );
      }
      function ls(e, t, n) {
        (n = so(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ('function' === typeof r) {
          var i = t.value;
          n.payload = function () {
            return ss(0, t), r(i);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            'function' === typeof o.componentDidCatch &&
            (n.callback = function () {
              'function' !== typeof r && (null === Ys ? (Ys = new Set([this])) : Ys.add(this), ss(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
          n
        );
      }
      var fs = 'function' === typeof WeakSet ? WeakSet : Set;
      function ps(e) {
        var t = e.ref;
        if (null !== t)
          if ('function' === typeof t)
            try {
              t(null);
            } catch (n) {
              zu(e, n);
            }
          else t.current = null;
      }
      function hs(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Qi(t.type, n), r)),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Kr(t.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(a(163));
      }
      function ds(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
              e = t = t.next;
              do {
                if (3 === (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
              e = t = t.next;
              do {
                var i = e;
                (r = i.next), 0 !== (4 & (i = i.tag)) && 0 !== (1 & i) && (Mu(n, e), ju(n, e)), (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r = n.elementType === n.type ? t.memoizedProps : Qi(n.type, t.memoizedProps)),
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
              void (null !== (t = n.updateQueue) && fo(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              fo(n, t, e);
            }
            return;
          case 5:
            return (e = n.stateNode), void (null === t && 4 & n.flags && Fr(n.type, n.memoizedProps) && e.focus());
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && kt(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(a(163));
      }
      function vs(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              'function' === typeof (r = r.style).setProperty
                ? r.setProperty('display', 'none', 'important')
                : (r.display = 'none');
            else {
              r = n.stateNode;
              var i = n.memoizedProps.style;
              (i = void 0 !== i && null !== i && i.hasOwnProperty('display') ? i.display : null),
                (r.style.display = we('display', i));
            }
          } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
          else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function ys(e, t) {
        if (wi && 'function' === typeof wi.onCommitFiberUnmount)
          try {
            wi.onCommitFiberUnmount(Si, t);
          } catch (o) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  i = r.destroy;
                if (((r = r.tag), void 0 !== i))
                  if (0 !== (4 & r)) Mu(t, n);
                  else {
                    r = t;
                    try {
                      i();
                    } catch (o) {
                      zu(r, o);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if ((ps(t), 'function' === typeof (e = t.stateNode).componentWillUnmount))
              try {
                (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
              } catch (o) {
                zu(t, o);
              }
            break;
          case 5:
            ps(t);
            break;
          case 4:
            ks(e, t);
        }
      }
      function ms(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function gs(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function bs(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (gs(t)) break e;
            t = t.return;
          }
          throw Error(a(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(a(161));
        }
        16 & n.flags && (ge(t, ''), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || gs(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? Ss(e, n, t) : ws(e, n, t);
      }
      function Ss(e, t, n) {
        var r = e.tag,
          i = 5 === r || 6 === r;
        if (i)
          (e = i ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = zr));
        else if (4 !== r && null !== (e = e.child))
          for (Ss(e, t, n), e = e.sibling; null !== e; ) Ss(e, t, n), (e = e.sibling);
      }
      function ws(e, t, n) {
        var r = e.tag,
          i = 5 === r || 6 === r;
        if (i) (e = i ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (ws(e, t, n), e = e.sibling; null !== e; ) ws(e, t, n), (e = e.sibling);
      }
      function ks(e, t) {
        for (var n, r, i = t, o = !1; ; ) {
          if (!o) {
            o = i.return;
            e: for (;;) {
              if (null === o) throw Error(a(160));
              switch (((n = o.stateNode), o.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              o = o.return;
            }
            o = !0;
          }
          if (5 === i.tag || 6 === i.tag) {
            e: for (var s = e, u = i, c = u; ; )
              if ((ys(s, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
              else {
                if (c === u) break e;
                for (; null === c.sibling; ) {
                  if (null === c.return || c.return === u) break e;
                  c = c.return;
                }
                (c.sibling.return = c.return), (c = c.sibling);
              }
            r
              ? ((s = n), (u = i.stateNode), 8 === s.nodeType ? s.parentNode.removeChild(u) : s.removeChild(u))
              : n.removeChild(i.stateNode);
          } else if (4 === i.tag) {
            if (null !== i.child) {
              (n = i.stateNode.containerInfo), (r = !0), (i.child.return = i), (i = i.child);
              continue;
            }
          } else if ((ys(e, i), null !== i.child)) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === t) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === t) return;
            4 === (i = i.return).tag && (o = !1);
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function Cs(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 === (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var i = null !== e ? e.memoizedProps : r;
              e = t.type;
              var o = t.updateQueue;
              if (((t.updateQueue = null), null !== o)) {
                for (
                  n[Gr] = r,
                    'input' === e && 'radio' === r.type && null != r.name && te(n, r),
                    Ee(e, i),
                    t = Ee(e, r),
                    i = 0;
                  i < o.length;
                  i += 2
                ) {
                  var s = o[i],
                    u = o[i + 1];
                  'style' === s
                    ? ke(n, u)
                    : 'dangerouslySetInnerHTML' === s
                    ? me(n, u)
                    : 'children' === s
                    ? ge(n, u)
                    : S(n, s, u, t);
                }
                switch (e) {
                  case 'input':
                    ne(n, r);
                    break;
                  case 'textarea':
                    ce(n, r);
                    break;
                  case 'select':
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (o = r.value)
                        ? ae(n, !!r.multiple, o, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? ae(n, !!r.multiple, r.defaultValue, !0)
                            : ae(n, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(a(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), kt(n.containerInfo)));
          case 12:
            return;
          case 13:
            return null !== t.memoizedState && ((qs = Fi()), vs(t.child, !0)), void Os(t);
          case 19:
            return void Os(t);
          case 17:
            return;
          case 23:
          case 24:
            return void vs(t, null !== t.memoizedState);
        }
        throw Error(a(163));
      }
      function Os(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new fs()),
            t.forEach(function (t) {
              var r = Bu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Es(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Ps = Math.ceil,
        xs = w.ReactCurrentDispatcher,
        Rs = w.ReactCurrentOwner,
        Ts = 0,
        Is = null,
        As = null,
        _s = 0,
        js = 0,
        Ms = ai(0),
        Ds = 0,
        Ls = null,
        zs = 0,
        Ns = 0,
        Bs = 0,
        Fs = 0,
        Us = null,
        qs = 0,
        Ws = 1 / 0;
      function Ks() {
        Ws = Fi() + 500;
      }
      var Hs,
        Vs = null,
        $s = !1,
        Qs = null,
        Ys = null,
        Gs = !1,
        Js = null,
        Xs = 90,
        Zs = [],
        eu = [],
        tu = null,
        nu = 0,
        ru = null,
        iu = -1,
        ou = 0,
        au = 0,
        su = null,
        uu = !1;
      function cu() {
        return 0 !== (48 & Ts) ? Fi() : -1 !== iu ? iu : (iu = Fi());
      }
      function lu(e) {
        if (0 === (2 & (e = e.mode))) return 1;
        if (0 === (4 & e)) return 99 === Ui() ? 1 : 2;
        if ((0 === ou && (ou = zs), 0 !== $i.transition)) {
          0 !== au && (au = null !== Us ? Us.pendingLanes : 0), (e = ou);
          var t = 4186112 & ~au;
          return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
        }
        return (
          (e = Ui()),
          0 !== (4 & Ts) && 98 === e
            ? (e = Ft(12, ou))
            : (e = Ft(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                ou
              )),
          e
        );
      }
      function fu(e, t, n) {
        if (50 < nu) throw ((nu = 0), (ru = null), Error(a(185)));
        if (null === (e = pu(e, t))) return null;
        Wt(e, t, n), e === Is && ((Bs |= t), 4 === Ds && vu(e, _s));
        var r = Ui();
        1 === t
          ? 0 !== (8 & Ts) && 0 === (48 & Ts)
            ? yu(e)
            : (hu(e, n), 0 === Ts && (Ks(), Hi()))
          : (0 === (4 & Ts) || (98 !== r && 99 !== r) || (null === tu ? (tu = new Set([e])) : tu.add(e)), hu(e, n)),
          (Us = e);
      }
      function pu(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function hu(e, t) {
        for (
          var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes;
          0 < s;

        ) {
          var u = 31 - Kt(s),
            c = 1 << u,
            l = o[u];
          if (-1 === l) {
            if (0 === (c & r) || 0 !== (c & i)) {
              (l = t), zt(c);
              var f = Lt;
              o[u] = 10 <= f ? l + 250 : 6 <= f ? l + 5e3 : -1;
            }
          } else l <= t && (e.expiredLanes |= c);
          s &= ~c;
        }
        if (((r = Nt(e, e === Is ? _s : 0)), (t = Lt), 0 === r))
          null !== n && (n !== Mi && Oi(n), (e.callbackNode = null), (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Mi && Oi(n);
          }
          15 === t
            ? ((n = yu.bind(null, e)), null === Li ? ((Li = [n]), (zi = Ci(Ti, Vi))) : Li.push(n), (n = Mi))
            : 14 === t
            ? (n = Ki(99, yu.bind(null, e)))
            : (n = Ki(
                (n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(a(358, e));
                  }
                })(t)),
                du.bind(null, e)
              )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function du(e) {
        if (((iu = -1), (au = ou = 0), 0 !== (48 & Ts))) throw Error(a(327));
        var t = e.callbackNode;
        if (_u() && e.callbackNode !== t) return null;
        var n = Nt(e, e === Is ? _s : 0);
        if (0 === n) return null;
        var r = n,
          i = Ts;
        Ts |= 16;
        var o = Cu();
        for ((Is === e && _s === r) || (Ks(), wu(e, r)); ; )
          try {
            Pu();
            break;
          } catch (u) {
            ku(e, u);
          }
        if (
          (Zi(), (xs.current = o), (Ts = i), null !== As ? (r = 0) : ((Is = null), (_s = 0), (r = Ds)), 0 !== (zs & Bs))
        )
          wu(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Ts |= 64), e.hydrate && ((e.hydrate = !1), Kr(e.containerInfo)), 0 !== (n = Bt(e)) && (r = Ou(e, n))),
            1 === r)
          )
            throw ((t = Ls), wu(e, 0), vu(e, n), hu(e, Fi()), t);
          switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 2:
              Tu(e);
              break;
            case 3:
              if ((vu(e, n), (62914560 & n) === n && 10 < (r = qs + 500 - Fi()))) {
                if (0 !== Nt(e, 0)) break;
                if (((i = e.suspendedLanes) & n) !== n) {
                  cu(), (e.pingedLanes |= e.suspendedLanes & i);
                  break;
                }
                e.timeoutHandle = qr(Tu.bind(null, e), r);
                break;
              }
              Tu(e);
              break;
            case 4:
              if ((vu(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, i = -1; 0 < n; ) {
                var s = 31 - Kt(n);
                (o = 1 << s), (s = r[s]) > i && (i = s), (n &= ~o);
              }
              if (
                ((n = i),
                10 <
                  (n =
                    (120 > (n = Fi() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Ps(n / 1960)) - n))
              ) {
                e.timeoutHandle = qr(Tu.bind(null, e), n);
                break;
              }
              Tu(e);
              break;
            case 5:
              Tu(e);
              break;
            default:
              throw Error(a(329));
          }
        }
        return hu(e, Fi()), e.callbackNode === t ? du.bind(null, e) : null;
      }
      function vu(e, t) {
        for (t &= ~Fs, t &= ~Bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - Kt(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function yu(e) {
        if (0 !== (48 & Ts)) throw Error(a(327));
        if ((_u(), e === Is && 0 !== (e.expiredLanes & _s))) {
          var t = _s,
            n = Ou(e, t);
          0 !== (zs & Bs) && (n = Ou(e, (t = Nt(e, t))));
        } else n = Ou(e, (t = Nt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Ts |= 64), e.hydrate && ((e.hydrate = !1), Kr(e.containerInfo)), 0 !== (t = Bt(e)) && (n = Ou(e, t))),
          1 === n)
        )
          throw ((n = Ls), wu(e, 0), vu(e, t), hu(e, Fi()), n);
        return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Tu(e), hu(e, Fi()), null;
      }
      function mu(e, t) {
        var n = Ts;
        Ts |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ts = n) && (Ks(), Hi());
        }
      }
      function gu(e, t) {
        var n = Ts;
        (Ts &= -2), (Ts |= 8);
        try {
          return e(t);
        } finally {
          0 === (Ts = n) && (Ks(), Hi());
        }
      }
      function bu(e, t) {
        ui(Ms, js), (js |= t), (zs |= t);
      }
      function Su() {
        (js = Ms.current), si(Ms);
      }
      function wu(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== As))
          for (n = As.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && vi();
                break;
              case 3:
                _o(), si(fi), si(li), $o();
                break;
              case 5:
                Mo(r);
                break;
              case 4:
                _o();
                break;
              case 13:
              case 19:
                si(Do);
                break;
              case 10:
                eo(r);
                break;
              case 23:
              case 24:
                Su();
            }
            n = n.return;
          }
        (Is = e), (As = Wu(e.current, null)), (_s = js = zs = t), (Ds = 0), (Ls = null), (Fs = Bs = Ns = 0);
      }
      function ku(e, t) {
        for (;;) {
          var n = As;
          try {
            if ((Zi(), (Qo.current = Ta), ea)) {
              for (var r = Jo.memoizedState; null !== r; ) {
                var i = r.queue;
                null !== i && (i.pending = null), (r = r.next);
              }
              ea = !1;
            }
            if (((Go = 0), (Zo = Xo = Jo = null), (ta = !1), (Rs.current = null), null === n || null === n.return)) {
              (Ds = 1), (Ls = t), (As = null);
              break;
            }
            e: {
              var o = e,
                a = n.return,
                s = n,
                u = t;
              if (
                ((t = _s),
                (s.flags |= 2048),
                (s.firstEffect = s.lastEffect = null),
                null !== u && 'object' === typeof u && 'function' === typeof u.then)
              ) {
                var c = u;
                if (0 === (2 & s.mode)) {
                  var l = s.alternate;
                  l
                    ? ((s.updateQueue = l.updateQueue), (s.memoizedState = l.memoizedState), (s.lanes = l.lanes))
                    : ((s.updateQueue = null), (s.memoizedState = null));
                }
                var f = 0 !== (1 & Do.current),
                  p = a;
                do {
                  var h;
                  if ((h = 13 === p.tag)) {
                    var d = p.memoizedState;
                    if (null !== d) h = null !== d.dehydrated;
                    else {
                      var v = p.memoizedProps;
                      h = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (h) {
                    var y = p.updateQueue;
                    if (null === y) {
                      var m = new Set();
                      m.add(c), (p.updateQueue = m);
                    } else y.add(c);
                    if (0 === (2 & p.mode)) {
                      if (((p.flags |= 64), (s.flags |= 16384), (s.flags &= -2981), 1 === s.tag))
                        if (null === s.alternate) s.tag = 17;
                        else {
                          var g = so(-1, 1);
                          (g.tag = 2), uo(s, g);
                        }
                      s.lanes |= 1;
                      break e;
                    }
                    (u = void 0), (s = t);
                    var b = o.pingCache;
                    if (
                      (null === b
                        ? ((b = o.pingCache = new us()), (u = new Set()), b.set(c, u))
                        : void 0 === (u = b.get(c)) && ((u = new Set()), b.set(c, u)),
                      !u.has(s))
                    ) {
                      u.add(s);
                      var S = Nu.bind(null, o, c, s);
                      c.then(S, S);
                    }
                    (p.flags |= 4096), (p.lanes = t);
                    break e;
                  }
                  p = p.return;
                } while (null !== p);
                u = Error(
                  ($(s.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
                );
              }
              5 !== Ds && (Ds = 2), (u = as(u, s)), (p = a);
              do {
                switch (p.tag) {
                  case 3:
                    (o = u), (p.flags |= 4096), (t &= -t), (p.lanes |= t), co(p, cs(0, o, t));
                    break e;
                  case 1:
                    o = u;
                    var w = p.type,
                      k = p.stateNode;
                    if (
                      0 === (64 & p.flags) &&
                      ('function' === typeof w.getDerivedStateFromError ||
                        (null !== k && 'function' === typeof k.componentDidCatch && (null === Ys || !Ys.has(k))))
                    ) {
                      (p.flags |= 4096), (t &= -t), (p.lanes |= t), co(p, ls(p, o, t));
                      break e;
                    }
                }
                p = p.return;
              } while (null !== p);
            }
            Ru(n);
          } catch (C) {
            (t = C), As === n && null !== n && (As = n = n.return);
            continue;
          }
          break;
        }
      }
      function Cu() {
        var e = xs.current;
        return (xs.current = Ta), null === e ? Ta : e;
      }
      function Ou(e, t) {
        var n = Ts;
        Ts |= 16;
        var r = Cu();
        for ((Is === e && _s === t) || wu(e, t); ; )
          try {
            Eu();
            break;
          } catch (i) {
            ku(e, i);
          }
        if ((Zi(), (Ts = n), (xs.current = r), null !== As)) throw Error(a(261));
        return (Is = null), (_s = 0), Ds;
      }
      function Eu() {
        for (; null !== As; ) xu(As);
      }
      function Pu() {
        for (; null !== As && !Ei(); ) xu(As);
      }
      function xu(e) {
        var t = Hs(e.alternate, e, js);
        (e.memoizedProps = e.pendingProps), null === t ? Ru(e) : (As = t), (Rs.current = null);
      }
      function Ru(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 === (2048 & t.flags))) {
            if (null !== (n = is(n, t, js))) return void (As = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 !== (1073741824 & js) ||
              0 === (4 & n.mode)
            ) {
              for (var r = 0, i = n.child; null !== i; ) (r |= i.lanes | i.childLanes), (i = i.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 === (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
          } else {
            if (null !== (n = os(t))) return (n.flags &= 2047), void (As = n);
            null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (As = t);
          As = t = e;
        } while (null !== t);
        0 === Ds && (Ds = 5);
      }
      function Tu(e) {
        var t = Ui();
        return Wi(99, Iu.bind(null, e, t)), null;
      }
      function Iu(e, t) {
        do {
          _u();
        } while (null !== Js);
        if (0 !== (48 & Ts)) throw Error(a(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          i = r,
          o = e.pendingLanes & ~i;
        (e.pendingLanes = i),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= i),
          (e.mutableReadLanes &= i),
          (e.entangledLanes &= i),
          (i = e.entanglements);
        for (var s = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
          var c = 31 - Kt(o),
            l = 1 << c;
          (i[c] = 0), (s[c] = -1), (u[c] = -1), (o &= ~l);
        }
        if (
          (null !== tu && 0 === (24 & r) && tu.has(e) && tu.delete(e),
          e === Is && ((As = Is = null), (_s = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (((i = Ts), (Ts |= 32), (Rs.current = null), (Nr = Yt), dr((s = hr())))) {
            if ('selectionStart' in s) u = { start: s.selectionStart, end: s.selectionEnd };
            else
              e: if (
                ((u = ((u = s.ownerDocument) && u.defaultView) || window),
                (l = u.getSelection && u.getSelection()) && 0 !== l.rangeCount)
              ) {
                (u = l.anchorNode), (o = l.anchorOffset), (c = l.focusNode), (l = l.focusOffset);
                try {
                  u.nodeType, c.nodeType;
                } catch (P) {
                  u = null;
                  break e;
                }
                var f = 0,
                  p = -1,
                  h = -1,
                  d = 0,
                  v = 0,
                  y = s,
                  m = null;
                t: for (;;) {
                  for (
                    var g;
                    y !== u || (0 !== o && 3 !== y.nodeType) || (p = f + o),
                      y !== c || (0 !== l && 3 !== y.nodeType) || (h = f + l),
                      3 === y.nodeType && (f += y.nodeValue.length),
                      null !== (g = y.firstChild);

                  )
                    (m = y), (y = g);
                  for (;;) {
                    if (y === s) break t;
                    if (
                      (m === u && ++d === o && (p = f), m === c && ++v === l && (h = f), null !== (g = y.nextSibling))
                    )
                      break;
                    m = (y = m).parentNode;
                  }
                  y = g;
                }
                u = -1 === p || -1 === h ? null : { start: p, end: h };
              } else u = null;
            u = u || { start: 0, end: 0 };
          } else u = null;
          (Br = { focusedElem: s, selectionRange: u }), (Yt = !1), (su = null), (uu = !1), (Vs = r);
          do {
            try {
              Au();
            } catch (P) {
              if (null === Vs) throw Error(a(330));
              zu(Vs, P), (Vs = Vs.nextEffect);
            }
          } while (null !== Vs);
          (su = null), (Vs = r);
          do {
            try {
              for (s = e; null !== Vs; ) {
                var b = Vs.flags;
                if ((16 & b && ge(Vs.stateNode, ''), 128 & b)) {
                  var S = Vs.alternate;
                  if (null !== S) {
                    var w = S.ref;
                    null !== w && ('function' === typeof w ? w(null) : (w.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    bs(Vs), (Vs.flags &= -3);
                    break;
                  case 6:
                    bs(Vs), (Vs.flags &= -3), Cs(Vs.alternate, Vs);
                    break;
                  case 1024:
                    Vs.flags &= -1025;
                    break;
                  case 1028:
                    (Vs.flags &= -1025), Cs(Vs.alternate, Vs);
                    break;
                  case 4:
                    Cs(Vs.alternate, Vs);
                    break;
                  case 8:
                    ks(s, (u = Vs));
                    var k = u.alternate;
                    ms(u), null !== k && ms(k);
                }
                Vs = Vs.nextEffect;
              }
            } catch (P) {
              if (null === Vs) throw Error(a(330));
              zu(Vs, P), (Vs = Vs.nextEffect);
            }
          } while (null !== Vs);
          if (
            ((w = Br),
            (S = hr()),
            (b = w.focusedElem),
            (s = w.selectionRange),
            S !== b && b && b.ownerDocument && pr(b.ownerDocument.documentElement, b))
          ) {
            null !== s &&
              dr(b) &&
              ((S = s.start),
              void 0 === (w = s.end) && (w = S),
              'selectionStart' in b
                ? ((b.selectionStart = S), (b.selectionEnd = Math.min(w, b.value.length)))
                : (w = ((S = b.ownerDocument || document) && S.defaultView) || window).getSelection &&
                  ((w = w.getSelection()),
                  (u = b.textContent.length),
                  (k = Math.min(s.start, u)),
                  (s = void 0 === s.end ? k : Math.min(s.end, u)),
                  !w.extend && k > s && ((u = s), (s = k), (k = u)),
                  (u = fr(b, k)),
                  (o = fr(b, s)),
                  u &&
                    o &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== u.node ||
                      w.anchorOffset !== u.offset ||
                      w.focusNode !== o.node ||
                      w.focusOffset !== o.offset) &&
                    ((S = S.createRange()).setStart(u.node, u.offset),
                    w.removeAllRanges(),
                    k > s
                      ? (w.addRange(S), w.extend(o.node, o.offset))
                      : (S.setEnd(o.node, o.offset), w.addRange(S))))),
              (S = []);
            for (w = b; (w = w.parentNode); )
              1 === w.nodeType && S.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for ('function' === typeof b.focus && b.focus(), b = 0; b < S.length; b++)
              ((w = S[b]).element.scrollLeft = w.left), (w.element.scrollTop = w.top);
          }
          (Yt = !!Nr), (Br = Nr = null), (e.current = n), (Vs = r);
          do {
            try {
              for (b = e; null !== Vs; ) {
                var C = Vs.flags;
                if ((36 & C && ds(b, Vs.alternate, Vs), 128 & C)) {
                  S = void 0;
                  var O = Vs.ref;
                  if (null !== O) {
                    var E = Vs.stateNode;
                    switch (Vs.tag) {
                      case 5:
                        S = E;
                        break;
                      default:
                        S = E;
                    }
                    'function' === typeof O ? O(S) : (O.current = S);
                  }
                }
                Vs = Vs.nextEffect;
              }
            } catch (P) {
              if (null === Vs) throw Error(a(330));
              zu(Vs, P), (Vs = Vs.nextEffect);
            }
          } while (null !== Vs);
          (Vs = null), Di(), (Ts = i);
        } else e.current = n;
        if (Gs) (Gs = !1), (Js = e), (Xs = t);
        else
          for (Vs = r; null !== Vs; )
            (t = Vs.nextEffect),
              (Vs.nextEffect = null),
              8 & Vs.flags && (((C = Vs).sibling = null), (C.stateNode = null)),
              (Vs = t);
        if (
          (0 === (r = e.pendingLanes) && (Ys = null),
          1 === r ? (e === ru ? nu++ : ((nu = 0), (ru = e))) : (nu = 0),
          (n = n.stateNode),
          wi && 'function' === typeof wi.onCommitFiberRoot)
        )
          try {
            wi.onCommitFiberRoot(Si, n, void 0, 64 === (64 & n.current.flags));
          } catch (P) {}
        if ((hu(e, Fi()), $s)) throw (($s = !1), (e = Qs), (Qs = null), e);
        return 0 !== (8 & Ts) || Hi(), null;
      }
      function Au() {
        for (; null !== Vs; ) {
          var e = Vs.alternate;
          uu ||
            null === su ||
            (0 !== (8 & Vs.flags) ? et(Vs, su) && (uu = !0) : 13 === Vs.tag && Es(e, Vs) && et(Vs, su) && (uu = !0));
          var t = Vs.flags;
          0 !== (256 & t) && hs(e, Vs),
            0 === (512 & t) ||
              Gs ||
              ((Gs = !0),
              Ki(97, function () {
                return _u(), null;
              })),
            (Vs = Vs.nextEffect);
        }
      }
      function _u() {
        if (90 !== Xs) {
          var e = 97 < Xs ? 97 : Xs;
          return (Xs = 90), Wi(e, Du);
        }
        return !1;
      }
      function ju(e, t) {
        Zs.push(t, e),
          Gs ||
            ((Gs = !0),
            Ki(97, function () {
              return _u(), null;
            }));
      }
      function Mu(e, t) {
        eu.push(t, e),
          Gs ||
            ((Gs = !0),
            Ki(97, function () {
              return _u(), null;
            }));
      }
      function Du() {
        if (null === Js) return !1;
        var e = Js;
        if (((Js = null), 0 !== (48 & Ts))) throw Error(a(331));
        var t = Ts;
        Ts |= 32;
        var n = eu;
        eu = [];
        for (var r = 0; r < n.length; r += 2) {
          var i = n[r],
            o = n[r + 1],
            s = i.destroy;
          if (((i.destroy = void 0), 'function' === typeof s))
            try {
              s();
            } catch (c) {
              if (null === o) throw Error(a(330));
              zu(o, c);
            }
        }
        for (n = Zs, Zs = [], r = 0; r < n.length; r += 2) {
          (i = n[r]), (o = n[r + 1]);
          try {
            var u = i.create;
            i.destroy = u();
          } catch (c) {
            if (null === o) throw Error(a(330));
            zu(o, c);
          }
        }
        for (u = e.current.firstEffect; null !== u; )
          (e = u.nextEffect), (u.nextEffect = null), 8 & u.flags && ((u.sibling = null), (u.stateNode = null)), (u = e);
        return (Ts = t), Hi(), !0;
      }
      function Lu(e, t, n) {
        uo(e, (t = cs(0, (t = as(n, t)), 1))), (t = cu()), null !== (e = pu(e, 1)) && (Wt(e, 1, t), hu(e, t));
      }
      function zu(e, t) {
        if (3 === e.tag) Lu(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Lu(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                'function' === typeof n.type.getDerivedStateFromError ||
                ('function' === typeof r.componentDidCatch && (null === Ys || !Ys.has(r)))
              ) {
                var i = ls(n, (e = as(t, e)), 1);
                if ((uo(n, i), (i = cu()), null !== (n = pu(n, 1)))) Wt(n, 1, i), hu(n, i);
                else if ('function' === typeof r.componentDidCatch && (null === Ys || !Ys.has(r)))
                  try {
                    r.componentDidCatch(t, e);
                  } catch (o) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function Nu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = cu()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Is === e &&
            (_s & n) === n &&
            (4 === Ds || (3 === Ds && (62914560 & _s) === _s && 500 > Fi() - qs) ? wu(e, 0) : (Fs |= n)),
          hu(e, t);
      }
      function Bu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 === (2 & (t = e.mode))
              ? (t = 1)
              : 0 === (4 & t)
              ? (t = 99 === Ui() ? 1 : 2)
              : (0 === ou && (ou = zs), 0 === (t = Ut(62914560 & ~ou)) && (t = 4194304))),
          (n = cu()),
          null !== (e = pu(e, t)) && (Wt(e, t, n), hu(e, n));
      }
      function Fu(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Uu(e, t, n, r) {
        return new Fu(e, t, n, r);
      }
      function qu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Wu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Uu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Ku(e, t, n, r, i, o) {
        var s = 2;
        if (((r = e), 'function' === typeof e)) qu(e) && (s = 1);
        else if ('string' === typeof e) s = 5;
        else
          e: switch (e) {
            case O:
              return Hu(n.children, i, o, t);
            case L:
              (s = 8), (i |= 16);
              break;
            case E:
              (s = 8), (i |= 1);
              break;
            case P:
              return ((e = Uu(12, n, t, 8 | i)).elementType = P), (e.type = P), (e.lanes = o), e;
            case I:
              return ((e = Uu(13, n, t, i)).type = I), (e.elementType = I), (e.lanes = o), e;
            case A:
              return ((e = Uu(19, n, t, i)).elementType = A), (e.lanes = o), e;
            case z:
              return Vu(n, i, o, t);
            case N:
              return ((e = Uu(24, n, t, i)).elementType = N), (e.lanes = o), e;
            default:
              if ('object' === typeof e && null !== e)
                switch (e.$$typeof) {
                  case x:
                    s = 10;
                    break e;
                  case R:
                    s = 9;
                    break e;
                  case T:
                    s = 11;
                    break e;
                  case _:
                    s = 14;
                    break e;
                  case j:
                    (s = 16), (r = null);
                    break e;
                  case M:
                    s = 22;
                    break e;
                }
              throw Error(a(130, null == e ? e : typeof e, ''));
          }
        return ((t = Uu(s, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t;
      }
      function Hu(e, t, n, r) {
        return ((e = Uu(7, e, r, t)).lanes = n), e;
      }
      function Vu(e, t, n, r) {
        return ((e = Uu(23, e, r, t)).elementType = z), (e.lanes = n), e;
      }
      function $u(e, t, n) {
        return ((e = Uu(6, e, null, t)).lanes = n), e;
      }
      function Qu(e, t, n) {
        return (
          ((t = Uu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
          (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
          t
        );
      }
      function Yu(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = qt(0)),
          (this.expirationTimes = qt(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = qt(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Gu(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: C, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
      }
      function Ju(e, t, n, r) {
        var i = t.current,
          o = cu(),
          s = lu(i);
        e: if (n) {
          t: {
            if (Ge((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(a(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (di(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(a(171));
          }
          if (1 === n.tag) {
            var c = n.type;
            if (di(c)) {
              n = mi(n, c, u);
              break e;
            }
          }
          n = u;
        } else n = ci;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = so(o, s)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          uo(i, t),
          fu(i, s, o),
          s
        );
      }
      function Xu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Zu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function ec(e, t) {
        Zu(e, t), (e = e.alternate) && Zu(e, t);
      }
      function tc(e, t, n) {
        var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
        if (
          ((n = new Yu(e, t, null != n && !0 === n.hydrate)),
          (t = Uu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          oo(t),
          (e[Jr] = n.current),
          Tr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var i = (t = r[e])._getVersion;
            (i = i(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, i])
                : n.mutableSourceEagerHydrationData.push(t, i);
          }
        this._internalRoot = n;
      }
      function nc(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
        );
      }
      function rc(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
          var a = o._internalRoot;
          if ('function' === typeof i) {
            var s = i;
            i = function () {
              var e = Xu(a);
              s.call(e);
            };
          }
          Ju(t, a, e, i);
        } else {
          if (
            ((o = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute('data-reactroot')
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new tc(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (a = o._internalRoot),
            'function' === typeof i)
          ) {
            var u = i;
            i = function () {
              var e = Xu(a);
              u.call(e);
            };
          }
          gu(function () {
            Ju(t, a, e, i);
          });
        }
        return Xu(a);
      }
      function ic(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nc(t)) throw Error(a(200));
        return Gu(e, t, null, n);
      }
      (Hs = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || fi.current) Ma = !0;
          else {
            if (0 === (n & r)) {
              switch (((Ma = !1), t.tag)) {
                case 3:
                  Ka(t), Ho();
                  break;
                case 5:
                  jo(t);
                  break;
                case 1:
                  di(t.type) && gi(t);
                  break;
                case 4:
                  Ao(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var i = t.type._context;
                  ui(Yi, i._currentValue), (i._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (n & t.child.childLanes)
                      ? Ya(e, t, n)
                      : (ui(Do, 1 & Do.current), null !== (t = ns(e, t, n)) ? t.sibling : null);
                  ui(Do, 1 & Do.current);
                  break;
                case 19:
                  if (((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))) {
                    if (r) return ts(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                    ui(Do, Do.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Ba(e, t, n);
              }
              return ns(e, t, n);
            }
            Ma = 0 !== (16384 & e.flags);
          }
        else Ma = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (i = hi(t, li.current)),
              no(t, n),
              (i = ia(null, t, r, e, i, n)),
              (t.flags |= 1),
              'object' === typeof i && null !== i && 'function' === typeof i.render && void 0 === i.$$typeof)
            ) {
              if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), di(r))) {
                var o = !0;
                gi(t);
              } else o = !1;
              (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null), oo(t);
              var s = r.getDerivedStateFromProps;
              'function' === typeof s && ho(t, r, s, e),
                (i.updater = vo),
                (t.stateNode = i),
                (i._reactInternals = t),
                bo(t, r, e, n),
                (t = Wa(null, t, r, !0, o, n));
            } else (t.tag = 0), Da(null, t, i, n), (t = t.child);
            return t;
          case 16:
            i = t.elementType;
            e: {
              switch (
                (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = (o = i._init)(i._payload)),
                (t.type = i),
                (o = t.tag =
                  (function (e) {
                    if ('function' === typeof e) return qu(e) ? 1 : 0;
                    if (void 0 !== e && null !== e) {
                      if ((e = e.$$typeof) === T) return 11;
                      if (e === _) return 14;
                    }
                    return 2;
                  })(i)),
                (e = Qi(i, e)),
                o)
              ) {
                case 0:
                  t = Ua(null, t, i, e, n);
                  break e;
                case 1:
                  t = qa(null, t, i, e, n);
                  break e;
                case 11:
                  t = La(null, t, i, e, n);
                  break e;
                case 14:
                  t = za(null, t, i, Qi(i.type, e), r, n);
                  break e;
              }
              throw Error(a(306, i, ''));
            }
            return t;
          case 0:
            return (r = t.type), (i = t.pendingProps), Ua(e, t, r, (i = t.elementType === r ? i : Qi(r, i)), n);
          case 1:
            return (r = t.type), (i = t.pendingProps), qa(e, t, r, (i = t.elementType === r ? i : Qi(r, i)), n);
          case 3:
            if ((Ka(t), (r = t.updateQueue), null === e || null === r)) throw Error(a(282));
            if (
              ((r = t.pendingProps),
              (i = null !== (i = t.memoizedState) ? i.element : null),
              ao(e, t),
              lo(t, r, null, n),
              (r = t.memoizedState.element) === i)
            )
              Ho(), (t = ns(e, t, n));
            else {
              if (
                ((o = (i = t.stateNode).hydrate) &&
                  ((No = Hr(t.stateNode.containerInfo.firstChild)), (zo = t), (o = Bo = !0)),
                o)
              ) {
                if (null != (e = i.mutableSourceEagerHydrationData))
                  for (i = 0; i < e.length; i += 2) ((o = e[i])._workInProgressVersionPrimary = e[i + 1]), Vo.push(o);
                for (n = Eo(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Da(e, t, r, n), Ho();
              t = t.child;
            }
            return t;
          case 5:
            return (
              jo(t),
              null === e && qo(t),
              (r = t.type),
              (i = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (s = i.children),
              Ur(r, i) ? (s = null) : null !== o && Ur(r, o) && (t.flags |= 16),
              Fa(e, t),
              Da(e, t, s, n),
              t.child
            );
          case 6:
            return null === e && qo(t), null;
          case 13:
            return Ya(e, t, n);
          case 4:
            return (
              Ao(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Oo(t, null, r, n)) : Da(e, t, r, n),
              t.child
            );
          case 11:
            return (r = t.type), (i = t.pendingProps), La(e, t, r, (i = t.elementType === r ? i : Qi(r, i)), n);
          case 7:
            return Da(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Da(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context), (i = t.pendingProps), (s = t.memoizedProps), (o = i.value);
              var u = t.type._context;
              if ((ui(Yi, u._currentValue), (u._currentValue = o), null !== s))
                if (
                  ((u = s.value),
                  0 ===
                    (o = sr(u, o)
                      ? 0
                      : 0 |
                        ('function' === typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823)))
                ) {
                  if (s.children === i.children && !fi.current) {
                    t = ns(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var c = u.dependencies;
                    if (null !== c) {
                      s = u.child;
                      for (var l = c.firstContext; null !== l; ) {
                        if (l.context === r && 0 !== (l.observedBits & o)) {
                          1 === u.tag && (((l = so(-1, n & -n)).tag = 2), uo(u, l)),
                            (u.lanes |= n),
                            null !== (l = u.alternate) && (l.lanes |= n),
                            to(u.return, n),
                            (c.lanes |= n);
                          break;
                        }
                        l = l.next;
                      }
                    } else s = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== s) s.return = u;
                    else
                      for (s = u; null !== s; ) {
                        if (s === t) {
                          s = null;
                          break;
                        }
                        if (null !== (u = s.sibling)) {
                          (u.return = s.return), (s = u);
                          break;
                        }
                        s = s.return;
                      }
                    u = s;
                  }
              Da(e, t, i.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (i = t.type),
              (r = (o = t.pendingProps).children),
              no(t, n),
              (r = r((i = ro(i, o.unstable_observedBits)))),
              (t.flags |= 1),
              Da(e, t, r, n),
              t.child
            );
          case 14:
            return (o = Qi((i = t.type), t.pendingProps)), za(e, t, i, (o = Qi(i.type, o)), r, n);
          case 15:
            return Na(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : Qi(r, i)),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              di(r) ? ((e = !0), gi(t)) : (e = !1),
              no(t, n),
              mo(t, r, i),
              bo(t, r, i, n),
              Wa(null, t, r, !0, e, n)
            );
          case 19:
            return ts(e, t, n);
          case 23:
          case 24:
            return Ba(e, t, n);
        }
        throw Error(a(156, t.tag));
      }),
        (tc.prototype.render = function (e) {
          Ju(e, this._internalRoot, null, null);
        }),
        (tc.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Ju(null, e, null, function () {
            t[Jr] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (fu(e, 4, cu()), ec(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (fu(e, 67108864, cu()), ec(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = cu(),
              n = lu(e);
            fu(e, n, t), ec(e, n);
          }
        }),
        (it = function (e, t) {
          return t();
        }),
        (xe = function (e, t, n) {
          switch (t) {
            case 'input':
              if ((ne(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var i = ni(r);
                    if (!i) throw Error(a(90));
                    J(r), ne(r, i);
                  }
                }
              }
              break;
            case 'textarea':
              ce(e, n);
              break;
            case 'select':
              null != (t = n.value) && ae(e, !!n.multiple, t, !1);
          }
        }),
        (je = mu),
        (Me = function (e, t, n, r, i) {
          var o = Ts;
          Ts |= 4;
          try {
            return Wi(98, e.bind(null, t, n, r, i));
          } finally {
            0 === (Ts = o) && (Ks(), Hi());
          }
        }),
        (De = function () {
          0 === (49 & Ts) &&
            ((function () {
              if (null !== tu) {
                var e = tu;
                (tu = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), hu(e, Fi());
                  });
              }
              Hi();
            })(),
            _u());
        }),
        (Le = function (e, t) {
          var n = Ts;
          Ts |= 2;
          try {
            return e(t);
          } finally {
            0 === (Ts = n) && (Ks(), Hi());
          }
        });
      var oc = { Events: [ei, ti, ni, Ae, _e, _u, { current: !1 }] },
        ac = { findFiberByHostInstance: Zr, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
        sc = {
          bundleType: ac.bundleType,
          version: ac.version,
          rendererPackageName: ac.rendererPackageName,
          rendererConfig: ac.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ze(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            ac.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!uc.isDisabled && uc.supportsFiber)
          try {
            (Si = uc.inject(sc)), (wi = uc);
          } catch (ye) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oc),
        (t.createPortal = ic),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ('function' === typeof e.render) throw Error(a(188));
            throw Error(a(268, Object.keys(e)));
          }
          return (e = null === (e = Ze(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          var n = Ts;
          if (0 !== (48 & n)) return e(t);
          Ts |= 1;
          try {
            if (e) return Wi(99, e.bind(null, t));
          } finally {
            (Ts = n), Hi();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!nc(t)) throw Error(a(200));
          return rc(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!nc(t)) throw Error(a(200));
          return rc(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!nc(e)) throw Error(a(40));
          return (
            !!e._reactRootContainer &&
            (gu(function () {
              rc(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Jr] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = mu),
        (t.unstable_createPortal = function (e, t) {
          return ic(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!nc(n)) throw Error(a(200));
          if (null == e || void 0 === e._reactInternals) throw Error(a(38));
          return rc(e, t, n, !1, r);
        }),
        (t.version = '17.0.2');
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(128);
    },
    function (e, t, n) {
      'use strict';
      var r, i, o, a;
      if ('object' === typeof performance && 'function' === typeof performance.now) {
        var s = performance;
        t.unstable_now = function () {
          return s.now();
        };
      } else {
        var u = Date,
          c = u.now();
        t.unstable_now = function () {
          return u.now() - c;
        };
      }
      if ('undefined' === typeof window || 'function' !== typeof MessageChannel) {
        var l = null,
          f = null,
          p = function e() {
            if (null !== l)
              try {
                var n = t.unstable_now();
                l(!0, n), (l = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          };
        (r = function (e) {
          null !== l ? setTimeout(r, 0, e) : ((l = e), setTimeout(p, 0));
        }),
          (i = function (e, t) {
            f = setTimeout(e, t);
          }),
          (o = function () {
            clearTimeout(f);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (a = t.unstable_forceFrameRate = function () {});
      } else {
        var h = window.setTimeout,
          d = window.clearTimeout;
        if ('undefined' !== typeof console) {
          var v = window.cancelAnimationFrame;
          'function' !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            'function' !== typeof v &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var y = !1,
          m = null,
          g = -1,
          b = 5,
          S = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= S;
        }),
          (a = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var w = new MessageChannel(),
          k = w.port2;
        (w.port1.onmessage = function () {
          if (null !== m) {
            var e = t.unstable_now();
            S = e + b;
            try {
              m(!0, e) ? k.postMessage(null) : ((y = !1), (m = null));
            } catch (n) {
              throw (k.postMessage(null), n);
            }
          } else y = !1;
        }),
          (r = function (e) {
            (m = e), y || ((y = !0), k.postMessage(null));
          }),
          (i = function (e, n) {
            g = h(function () {
              e(t.unstable_now());
            }, n);
          }),
          (o = function () {
            d(g), (g = -1);
          });
      }
      function C(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            i = e[r];
          if (!(void 0 !== i && 0 < P(i, t))) break e;
          (e[r] = t), (e[n] = i), (n = r);
        }
      }
      function O(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function E(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length; r < i; ) {
              var o = 2 * (r + 1) - 1,
                a = e[o],
                s = o + 1,
                u = e[s];
              if (void 0 !== a && 0 > P(a, n))
                void 0 !== u && 0 > P(u, a) ? ((e[r] = u), (e[s] = n), (r = s)) : ((e[r] = a), (e[o] = n), (r = o));
              else {
                if (!(void 0 !== u && 0 > P(u, n))) break e;
                (e[r] = u), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        return null;
      }
      function P(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var x = [],
        R = [],
        T = 1,
        I = null,
        A = 3,
        _ = !1,
        j = !1,
        M = !1;
      function D(e) {
        for (var t = O(R); null !== t; ) {
          if (null === t.callback) E(R);
          else {
            if (!(t.startTime <= e)) break;
            E(R), (t.sortIndex = t.expirationTime), C(x, t);
          }
          t = O(R);
        }
      }
      function L(e) {
        if (((M = !1), D(e), !j))
          if (null !== O(x)) (j = !0), r(z);
          else {
            var t = O(R);
            null !== t && i(L, t.startTime - e);
          }
      }
      function z(e, n) {
        (j = !1), M && ((M = !1), o()), (_ = !0);
        var r = A;
        try {
          for (D(n), I = O(x); null !== I && (!(I.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
            var a = I.callback;
            if ('function' === typeof a) {
              (I.callback = null), (A = I.priorityLevel);
              var s = a(I.expirationTime <= n);
              (n = t.unstable_now()), 'function' === typeof s ? (I.callback = s) : I === O(x) && E(x), D(n);
            } else E(x);
            I = O(x);
          }
          if (null !== I) var u = !0;
          else {
            var c = O(R);
            null !== c && i(L, c.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (I = null), (A = r), (_ = !1);
        }
      }
      var N = a;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          j || _ || ((j = !0), r(z));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return A;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return O(x);
        }),
        (t.unstable_next = function (e) {
          switch (A) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = A;
          }
          var n = A;
          A = t;
          try {
            return e();
          } finally {
            A = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = N),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = A;
          A = e;
          try {
            return t();
          } finally {
            A = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, a) {
          var s = t.unstable_now();
          switch (
            ('object' === typeof a && null !== a
              ? (a = 'number' === typeof (a = a.delay) && 0 < a ? s + a : s)
              : (a = s),
            e)
          ) {
            case 1:
              var u = -1;
              break;
            case 2:
              u = 250;
              break;
            case 5:
              u = 1073741823;
              break;
            case 4:
              u = 1e4;
              break;
            default:
              u = 5e3;
          }
          return (
            (e = { id: T++, callback: n, priorityLevel: e, startTime: a, expirationTime: (u = a + u), sortIndex: -1 }),
            a > s
              ? ((e.sortIndex = a), C(R, e), null === O(x) && e === O(R) && (M ? o() : (M = !0), i(L, a - s)))
              : ((e.sortIndex = u), C(x, e), j || _ || ((j = !0), r(z))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = A;
          return function () {
            var n = A;
            A = t;
            try {
              return e.apply(this, arguments);
            } finally {
              A = n;
            }
          };
        });
    },
    ,
    function (e, t, n) {
      'use strict';
      n(55);
      var r = n(5),
        i = 60103;
      if (((t.Fragment = 60107), 'function' === typeof Symbol && Symbol.for)) {
        var o = Symbol.for;
        (i = o('react.element')), (t.Fragment = o('react.fragment'));
      }
      var a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = Object.prototype.hasOwnProperty,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, t, n) {
        var r,
          o = {},
          c = null,
          l = null;
        for (r in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          s.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
        return { $$typeof: i, type: e, key: c, ref: l, props: o, _owner: a.current };
      }
      (t.jsx = c), (t.jsxs = c);
    },
    function (e, t, n) {
      var r = (function (e) {
        'use strict';
        var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          i = 'function' === typeof Symbol ? Symbol : {},
          o = i.iterator || '@@iterator',
          a = i.asyncIterator || '@@asyncIterator',
          s = i.toStringTag || '@@toStringTag';
        function u(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          u({}, '');
        } catch (A) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof y ? t : y,
            o = Object.create(i.prototype),
            a = new R(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = f;
              return function (i, o) {
                if (r === h) throw new Error('Generator is already running');
                if (r === d) {
                  if ('throw' === i) throw o;
                  return I();
                }
                for (n.method = i, n.arg = o; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = E(a, n);
                    if (s) {
                      if (s === v) continue;
                      return s;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if (r === f) throw ((r = d), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = h;
                  var u = l(e, t, n);
                  if ('normal' === u.type) {
                    if (((r = n.done ? d : p), u.arg === v)) continue;
                    return { value: u.arg, done: n.done };
                  }
                  'throw' === u.type && ((r = d), (n.method = 'throw'), (n.arg = u.arg));
                }
              };
            })(e, n, a)),
            o
          );
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (A) {
            return { type: 'throw', arg: A };
          }
        }
        e.wrap = c;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          d = 'completed',
          v = {};
        function y() {}
        function m() {}
        function g() {}
        var b = {};
        u(b, o, function () {
          return this;
        });
        var S = Object.getPrototypeOf,
          w = S && S(S(T([])));
        w && w !== n && r.call(w, o) && (b = w);
        var k = (g.prototype = y.prototype = Object.create(b));
        function C(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function O(e, t) {
          function n(i, o, a, s) {
            var u = l(e[i], e, o);
            if ('throw' !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && 'object' === typeof f && r.call(f, '__await')
                ? t.resolve(f.__await).then(
                    function (e) {
                      n('next', e, a, s);
                    },
                    function (e) {
                      n('throw', e, a, s);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return n('throw', e, a, s);
                    }
                  );
            }
            s(u.arg);
          }
          var i;
          this._invoke = function (e, r) {
            function o() {
              return new t(function (t, i) {
                n(e, r, t, i);
              });
            }
            return (i = i ? i.then(o, o) : o());
          };
        }
        function E(e, n) {
          var r = e.iterator[n.method];
          if (r === t) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (e.iterator.return && ((n.method = 'return'), (n.arg = t), E(e, n), 'throw' === n.method)) return v;
              (n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return v;
          }
          var i = l(r, e.iterator, n.arg);
          if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v;
          var o = i.arg;
          return o
            ? o.done
              ? ((n[e.resultName] = o.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : o
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function P(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function R(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0);
        }
        function T(e) {
          if (e) {
            var n = e[o];
            if (n) return n.call(e);
            if ('function' === typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                a = function n() {
                  for (; ++i < e.length; ) if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: t, done: !0 };
        }
        return (
          (m.prototype = g),
          u(k, 'constructor', g),
          u(g, 'constructor', m),
          (m.displayName = u(g, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' === typeof e && e.constructor;
            return !!t && (t === m || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : ((e.__proto__ = g), u(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(k)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          C(O.prototype),
          u(O.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new O(c(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          C(k),
          u(k, s, 'Generator'),
          u(k, o, function () {
            return this;
          }),
          u(k, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = T),
          (R.prototype = {
            constructor: R,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (s.type = 'throw'), (s.arg = e), (n.next = r), i && ((n.method = 'next'), (n.arg = t)), !!i;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc');
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!c) throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o && ('break' === e || 'continue' === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = r;
      } catch (i) {
        'object' === typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function('r', 'regeneratorRuntime = r')(r);
      }
    },
    function (e, t, n) {
      var r,
        i,
        o = n(64),
        a = n(65),
        s = 0,
        u = 0;
      e.exports = function (e, t, n) {
        var c = (t && n) || 0,
          l = t || [],
          f = (e = e || {}).node || r,
          p = void 0 !== e.clockseq ? e.clockseq : i;
        if (null == f || null == p) {
          var h = o();
          null == f && (f = r = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
            null == p && (p = i = 16383 & ((h[6] << 8) | h[7]));
        }
        var d = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          v = void 0 !== e.nsecs ? e.nsecs : u + 1,
          y = d - s + (v - u) / 1e4;
        if (
          (y < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
          (y < 0 || d > s) && void 0 === e.nsecs && (v = 0),
          v >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (s = d), (u = v), (i = p);
        var m = (1e4 * (268435455 & (d += 122192928e5)) + v) % 4294967296;
        (l[c++] = (m >>> 24) & 255), (l[c++] = (m >>> 16) & 255), (l[c++] = (m >>> 8) & 255), (l[c++] = 255 & m);
        var g = ((d / 4294967296) * 1e4) & 268435455;
        (l[c++] = (g >>> 8) & 255),
          (l[c++] = 255 & g),
          (l[c++] = ((g >>> 24) & 15) | 16),
          (l[c++] = (g >>> 16) & 255),
          (l[c++] = (p >>> 8) | 128),
          (l[c++] = 255 & p);
        for (var b = 0; b < 6; ++b) l[c + b] = f[b];
        return t || a(l);
      };
    },
    function (e, t, n) {
      var r = n(64),
        i = n(65);
      e.exports = function (e, t, n) {
        var o = (t && n) || 0;
        'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
        var a = (e = e || {}).random || (e.rng || r)();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) for (var s = 0; s < 16; ++s) t[o + s] = a[s];
        return t || i(a);
      };
    },
    function (e, t) {
      var n,
        r,
        i = (e.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : o;
        } catch (e) {
          n = o;
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var u,
        c = [],
        l = !1,
        f = -1;
      function p() {
        l && u && ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && h());
      }
      function h() {
        if (!l) {
          var e = s(p);
          l = !0;
          for (var t = c.length; t; ) {
            for (u = c, c = []; ++f < t; ) u && u[f].run();
            (f = -1), (t = c.length);
          }
          (u = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function d(e, t) {
        (this.fun = e), (this.array = t);
      }
      function v() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new d(e, t)), 1 !== c.length || l || s(h);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = v),
        (i.addListener = v),
        (i.once = v),
        (i.off = v),
        (i.removeListener = v),
        (i.removeAllListeners = v),
        (i.emit = v),
        (i.prependListener = v),
        (i.prependOnceListener = v),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function () {
          return '/';
        }),
        (i.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      'use strict';
      (t.byteLength = function (e) {
        var t = c(e),
          n = t[0],
          r = t[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (t.toByteArray = function (e) {
          var t,
            n,
            r = c(e),
            a = r[0],
            s = r[1],
            u = new o(
              (function (e, t, n) {
                return (3 * (t + n)) / 4 - n;
              })(0, a, s)
            ),
            l = 0,
            f = s > 0 ? a - 4 : a;
          for (n = 0; n < f; n += 4)
            (t =
              (i[e.charCodeAt(n)] << 18) |
              (i[e.charCodeAt(n + 1)] << 12) |
              (i[e.charCodeAt(n + 2)] << 6) |
              i[e.charCodeAt(n + 3)]),
              (u[l++] = (t >> 16) & 255),
              (u[l++] = (t >> 8) & 255),
              (u[l++] = 255 & t);
          2 === s && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (u[l++] = 255 & t));
          1 === s &&
            ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)),
            (u[l++] = (t >> 8) & 255),
            (u[l++] = 255 & t));
          return u;
        }),
        (t.fromByteArray = function (e) {
          for (var t, n = e.length, i = n % 3, o = [], a = 16383, s = 0, u = n - i; s < u; s += a)
            o.push(l(e, s, s + a > u ? u : s + a));
          1 === i
            ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + '=='))
            : 2 === i &&
              ((t = (e[n - 2] << 8) + e[n - 1]), o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + '='));
          return o.join('');
        });
      for (
        var r = [],
          i = [],
          o = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
          a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          s = 0,
          u = a.length;
        s < u;
        ++s
      )
        (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
      function c(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
        var n = e.indexOf('=');
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
      }
      function l(e, t, n) {
        for (var i, o, a = [], s = t; s < n; s += 3)
          (i = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])),
            a.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
        return a.join('');
      }
      (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
    },
    function (e, t) {
      (t.read = function (e, t, n, r, i) {
        var o,
          a,
          s = 8 * i - r - 1,
          u = (1 << s) - 1,
          c = u >> 1,
          l = -7,
          f = n ? i - 1 : 0,
          p = n ? -1 : 1,
          h = e[t + f];
        for (f += p, o = h & ((1 << -l) - 1), h >>= -l, l += s; l > 0; o = 256 * o + e[t + f], f += p, l -= 8);
        for (a = o & ((1 << -l) - 1), o >>= -l, l += r; l > 0; a = 256 * a + e[t + f], f += p, l -= 8);
        if (0 === o) o = 1 - c;
        else {
          if (o === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
          (a += Math.pow(2, r)), (o -= c);
        }
        return (h ? -1 : 1) * a * Math.pow(2, o - r);
      }),
        (t.write = function (e, t, n, r, i, o) {
          var a,
            s,
            u,
            c = 8 * o - i - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : o - 1,
            d = r ? 1 : -1,
            v = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((s = isNaN(t) ? 1 : 0), (a = l))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  (t += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >= 2 && (a++, (u /= 2)),
                  a + f >= l
                    ? ((s = 0), (a = l))
                    : a + f >= 1
                    ? ((s = (t * u - 1) * Math.pow(2, i)), (a += f))
                    : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            e[n + h] = 255 & s, h += d, s /= 256, i -= 8
          );
          for (a = (a << i) | s, c += i; c > 0; e[n + h] = 255 & a, h += d, a /= 256, c -= 8);
          e[n + h - d] |= 128 * v;
        });
    },
    function (e, t) {
      var n = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return '[object Array]' == n.call(e);
        };
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        if (((t = t.split(':')[0]), !(e = +e))) return !1;
        switch (t) {
          case 'http':
          case 'ws':
            return 80 !== e;
          case 'https':
          case 'wss':
            return 443 !== e;
          case 'ftp':
            return 21 !== e;
          case 'gopher':
            return 70 !== e;
          case 'file':
            return !1;
        }
        return 0 !== e;
      };
    },
    function (e, t, n) {
      'use strict';
      var r = Object.prototype.hasOwnProperty;
      function i(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, ' '));
        } catch (t) {
          return null;
        }
      }
      function o(e) {
        try {
          return encodeURIComponent(e);
        } catch (t) {
          return null;
        }
      }
      (t.stringify = function (e, t) {
        t = t || '';
        var n,
          i,
          a = [];
        for (i in ('string' !== typeof t && (t = '?'), e))
          if (r.call(e, i)) {
            if (
              ((n = e[i]) || (null !== n && undefined !== n && !isNaN(n)) || (n = ''),
              (i = o(i)),
              (n = o(n)),
              null === i || null === n)
            )
              continue;
            a.push(i + '=' + n);
          }
        return a.length ? t + a.join('&') : '';
      }),
        (t.parse = function (e) {
          for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; (t = n.exec(e)); ) {
            var o = i(t[1]),
              a = i(t[2]);
            null === o || null === a || o in r || (r[o] = a);
          }
          return r;
        });
    },
    function (e, t, n) {
      'use strict';
      var r = n(141);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, a) {
            if (a !== r) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((s.name = 'Invariant Violation'), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (e, t) {
      e.exports =
        Array.isArray ||
        function (e) {
          return '[object Array]' == Object.prototype.toString.call(e);
        };
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(144);
    },
    function (e, t, n) {
      'use strict';
      var r = 'function' === typeof Symbol && Symbol.for,
        i = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        a = r ? Symbol.for('react.fragment') : 60107,
        s = r ? Symbol.for('react.strict_mode') : 60108,
        u = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        p = r ? Symbol.for('react.concurrent_mode') : 60111,
        h = r ? Symbol.for('react.forward_ref') : 60112,
        d = r ? Symbol.for('react.suspense') : 60113,
        v = r ? Symbol.for('react.suspense_list') : 60120,
        y = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116,
        g = r ? Symbol.for('react.block') : 60121,
        b = r ? Symbol.for('react.fundamental') : 60117,
        S = r ? Symbol.for('react.responder') : 60118,
        w = r ? Symbol.for('react.scope') : 60119;
      function k(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case f:
                case p:
                case a:
                case u:
                case s:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case h:
                    case m:
                    case y:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function C(e) {
        return k(e) === p;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = i),
        (t.ForwardRef = h),
        (t.Fragment = a),
        (t.Lazy = m),
        (t.Memo = y),
        (t.Portal = o),
        (t.Profiler = u),
        (t.StrictMode = s),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return C(e) || k(e) === f;
        }),
        (t.isConcurrentMode = C),
        (t.isContextConsumer = function (e) {
          return k(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === i;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === h;
        }),
        (t.isFragment = function (e) {
          return k(e) === a;
        }),
        (t.isLazy = function (e) {
          return k(e) === m;
        }),
        (t.isMemo = function (e) {
          return k(e) === y;
        }),
        (t.isPortal = function (e) {
          return k(e) === o;
        }),
        (t.isProfiler = function (e) {
          return k(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === s;
        }),
        (t.isSuspense = function (e) {
          return k(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === a ||
            e === p ||
            e === u ||
            e === s ||
            e === d ||
            e === v ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === y ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === S ||
                e.$$typeof === w ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = k);
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(146);
    },
    function (e, t, n) {
      'use strict';
      var r = 'function' === typeof Symbol && Symbol.for,
        i = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        a = r ? Symbol.for('react.fragment') : 60107,
        s = r ? Symbol.for('react.strict_mode') : 60108,
        u = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        p = r ? Symbol.for('react.concurrent_mode') : 60111,
        h = r ? Symbol.for('react.forward_ref') : 60112,
        d = r ? Symbol.for('react.suspense') : 60113,
        v = r ? Symbol.for('react.suspense_list') : 60120,
        y = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116,
        g = r ? Symbol.for('react.block') : 60121,
        b = r ? Symbol.for('react.fundamental') : 60117,
        S = r ? Symbol.for('react.responder') : 60118,
        w = r ? Symbol.for('react.scope') : 60119;
      function k(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case f:
                case p:
                case a:
                case u:
                case s:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case h:
                    case m:
                    case y:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function C(e) {
        return k(e) === p;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = i),
        (t.ForwardRef = h),
        (t.Fragment = a),
        (t.Lazy = m),
        (t.Memo = y),
        (t.Portal = o),
        (t.Profiler = u),
        (t.StrictMode = s),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return C(e) || k(e) === f;
        }),
        (t.isConcurrentMode = C),
        (t.isContextConsumer = function (e) {
          return k(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === i;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === h;
        }),
        (t.isFragment = function (e) {
          return k(e) === a;
        }),
        (t.isLazy = function (e) {
          return k(e) === m;
        }),
        (t.isMemo = function (e) {
          return k(e) === y;
        }),
        (t.isPortal = function (e) {
          return k(e) === o;
        }),
        (t.isProfiler = function (e) {
          return k(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === s;
        }),
        (t.isSuspense = function (e) {
          return k(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === a ||
            e === p ||
            e === u ||
            e === s ||
            e === d ||
            e === v ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === y ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === S ||
                e.$$typeof === w ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = k);
    },
    function (e, t, n) {},
    ,
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(0),
        i = n(1),
        o = (function () {
          function e(t) {
            Object(r.a)(this, e), (this.privSessionId = t);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'sessionId',
                get: function () {
                  return this.privSessionId;
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var r = n(2),
        i = n.n(r),
        o = n(0),
        a = n(1),
        s = n(13),
        u = n(26),
        c = n(60),
        l = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        f = (function () {
          function e(t) {
            var n = this;
            Object(o.a)(this, e),
              (this.privIsWriteEnded = !1),
              (this.privIsReadEnded = !1),
              (this.read = function () {
                if (n.privIsReadEnded) throw new s.b('Stream read has already finished');
                return n.privReaderQueue.dequeue().then(function (e) {
                  return l(
                    n,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (void 0 !== e && !e.isEnd) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.privReaderQueue.dispose('End of stream reached');
                              case 3:
                                return t.abrupt('return', e);
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                });
              }),
              (this.readEnded = function () {
                n.privIsReadEnded || ((n.privIsReadEnded = !0), (n.privReaderQueue = new c.a()));
              }),
              (this.throwIfClosed = function () {
                if (n.privIsWriteEnded) throw new s.b('Stream closed');
              }),
              (this.privId = t || Object(u.a)()),
              (this.privReaderQueue = new c.a());
          }
          return (
            Object(a.a)(e, [
              {
                key: 'isClosed',
                get: function () {
                  return this.privIsWriteEnded;
                },
              },
              {
                key: 'isReadEnded',
                get: function () {
                  return this.privIsReadEnded;
                },
              },
              {
                key: 'id',
                get: function () {
                  return this.privId;
                },
              },
              {
                key: 'close',
                value: function () {
                  this.privIsWriteEnded ||
                    (this.writeStreamChunk({ buffer: null, isEnd: !0, timeReceived: Date.now() }),
                    (this.privIsWriteEnded = !0));
                },
              },
              {
                key: 'writeStreamChunk',
                value: function (e) {
                  if ((this.throwIfClosed(), !this.privReaderQueue.isDisposed()))
                    try {
                      this.privReaderQueue.enqueue(e);
                    } catch (t) {}
                },
              },
            ]),
            e
          );
        })();
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var r = n(0),
        i = n(1),
        o = n(34),
        a = n(23),
        s = n(3),
        u = n(4),
        c = (function (e) {
          Object(s.a)(n, e);
          var t = Object(u.a)(n);
          function n(e, i) {
            var o;
            return (
              Object(r.a)(this, n), ((o = t.call(this, i)).privTargetChunkSize = e), (o.privNextBufferReadyBytes = 0), o
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'writeStreamChunk',
                value: function (e) {
                  if (
                    e.isEnd ||
                    (0 === this.privNextBufferReadyBytes && e.buffer.byteLength === this.privTargetChunkSize)
                  )
                    Object(o.a)(Object(a.a)(n.prototype), 'writeStreamChunk', this).call(this, e);
                  else
                    for (var t = 0; t < e.buffer.byteLength; ) {
                      void 0 === this.privNextBufferToWrite &&
                        ((this.privNextBufferToWrite = new ArrayBuffer(this.privTargetChunkSize)),
                        (this.privNextBufferStartTime = e.timeReceived));
                      var r = Math.min(
                          e.buffer.byteLength - t,
                          this.privTargetChunkSize - this.privNextBufferReadyBytes
                        ),
                        i = new Uint8Array(this.privNextBufferToWrite),
                        s = new Uint8Array(e.buffer.slice(t, r + t));
                      i.set(s, this.privNextBufferReadyBytes),
                        (this.privNextBufferReadyBytes += r),
                        (t += r),
                        this.privNextBufferReadyBytes === this.privTargetChunkSize &&
                          (Object(o.a)(Object(a.a)(n.prototype), 'writeStreamChunk', this).call(this, {
                            buffer: this.privNextBufferToWrite,
                            isEnd: !1,
                            timeReceived: this.privNextBufferStartTime,
                          }),
                          (this.privNextBufferReadyBytes = 0),
                          (this.privNextBufferToWrite = void 0));
                    }
                },
              },
              {
                key: 'close',
                value: function () {
                  0 === this.privNextBufferReadyBytes ||
                    this.isClosed ||
                    Object(o.a)(Object(a.a)(n.prototype), 'writeStreamChunk', this).call(this, {
                      buffer: this.privNextBufferToWrite.slice(0, this.privNextBufferReadyBytes),
                      isEnd: !1,
                      timeReceived: this.privNextBufferStartTime,
                    }),
                    Object(o.a)(Object(a.a)(n.prototype), 'close', this).call(this);
                },
              },
            ]),
            n
          );
        })(n(150).a);
    },
    function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e[(e.None = 0)] = 'None'),
            (e[(e.Connected = 1)] = 'Connected'),
            (e[(e.Connecting = 2)] = 'Connecting'),
            (e[(e.Disconnected = 3)] = 'Disconnected');
        })(r || (r = {}));
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n(0),
        i = n(1),
        o = n(3),
        a = n(4),
        s = n(9),
        u = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e) {
            var i;
            return Object(r.a)(this, n), ((i = t.call(this, 'BackgroundEvent', s.a.Error)).privError = e), i;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'error',
                get: function () {
                  return this.privError;
                },
              },
            ]),
            n
          );
        })(s.b);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'h', function () {
        return u;
      }),
        n.d(t, 'g', function () {
          return l;
        }),
        n.d(t, 'd', function () {
          return f;
        }),
        n.d(t, 'a', function () {
          return p;
        }),
        n.d(t, 'b', function () {
          return h;
        }),
        n.d(t, 'c', function () {
          return d;
        }),
        n.d(t, 'e', function () {
          return v;
        }),
        n.d(t, 'f', function () {
          return y;
        });
      var r = n(0),
        i = n(1),
        o = n(3),
        a = n(4),
        s = n(9),
        u = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            var o,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a.Info;
            return Object(r.a)(this, n), ((o = t.call(this, e, a)).privJsonResult = i), o;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'jsonString',
                get: function () {
                  return this.privJsonResult;
                },
              },
            ]),
            n
          );
        })(s.b),
        c = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            var o,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a.Info;
            return Object(r.a)(this, n), ((o = t.call(this, e, a)).privConnectionId = i), o;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'connectionId',
                get: function () {
                  return this.privConnectionId;
                },
              },
            ]),
            n
          );
        })(s.b),
        l = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return (
              Object(r.a)(this, n), ((a = t.call(this, 'ConnectionStartEvent', e)).privUri = i), (a.privHeaders = o), a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'uri',
                get: function () {
                  return this.privUri;
                },
              },
              {
                key: 'headers',
                get: function () {
                  return this.privHeaders;
                },
              },
            ]),
            n
          );
        })(c),
        f = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            return Object(r.a)(this, n), t.call(this, 'ConnectionEstablishedEvent', e);
          }
          return n;
        })(c),
        p = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return (
              Object(r.a)(this, n),
              ((a = t.call(this, 'ConnectionClosedEvent', e, s.a.Debug)).privReason = o),
              (a.privStatusCode = i),
              a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'reason',
                get: function () {
                  return this.privReason;
                },
              },
              {
                key: 'statusCode',
                get: function () {
                  return this.privStatusCode;
                },
              },
            ]),
            n
          );
        })(c),
        h = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return (
              Object(r.a)(this, n),
              ((a = t.call(this, 'ConnectionErrorEvent', e, s.a.Debug)).privMessage = i),
              (a.privType = o),
              a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'message',
                get: function () {
                  return this.privMessage;
                },
              },
              {
                key: 'type',
                get: function () {
                  return this.privType;
                },
              },
            ]),
            n
          );
        })(c),
        d = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return (
              Object(r.a)(this, n),
              ((a = t.call(this, 'ConnectionEstablishErrorEvent', e, s.a.Error)).privStatusCode = i),
              (a.privReason = o),
              a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'reason',
                get: function () {
                  return this.privReason;
                },
              },
              {
                key: 'statusCode',
                get: function () {
                  return this.privStatusCode;
                },
              },
            ]),
            n
          );
        })(c),
        v = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return (
              Object(r.a)(this, n),
              ((a = t.call(this, 'ConnectionMessageReceivedEvent', e)).privNetworkReceivedTime = i),
              (a.privMessage = o),
              a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'networkReceivedTime',
                get: function () {
                  return this.privNetworkReceivedTime;
                },
              },
              {
                key: 'message',
                get: function () {
                  return this.privMessage;
                },
              },
            ]),
            n
          );
        })(c),
        y = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i, o) {
            var a;
            return (
              Object(r.a)(this, n),
              ((a = t.call(this, 'ConnectionMessageSentEvent', e)).privNetworkSentTime = i),
              (a.privMessage = o),
              a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'networkSentTime',
                get: function () {
                  return this.privNetworkSentTime;
                },
              },
              {
                key: 'message',
                get: function () {
                  return this.privMessage;
                },
              },
            ]),
            n
          );
        })(c);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n(0),
        i = n(1),
        o = n(3),
        a = n(4),
        s = (function (e) {
          Object(o.a)(n, e);
          var t = Object(a.a)(n);
          function n(e, i) {
            var o;
            return Object(r.a)(this, n), ((o = t.call(this, i)).privOffset = e), o;
          }
          return (
            Object(i.a)(n, [
              {
                key: 'offset',
                get: function () {
                  return this.privOffset;
                },
              },
            ]),
            n
          );
        })(n(149).a);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return ae;
      });
      var r = n(2),
        i = n.n(r),
        o = n(0),
        a = n(1),
        s = n(34),
        u = n(23),
        c = n(3),
        l = n(4),
        f = n(81),
        p = n(38),
        h = n(80),
        d = n(42),
        v = n(44),
        y = n(82),
        m = n(18),
        g = n(25),
        b = n(86),
        S = n(41),
        w = (function () {
          function e(t) {
            var n = this;
            Object(o.a)(this, e),
              (this.privConnectionMessage = t),
              (this.privProperties = new b.a()),
              this.privConnectionMessage.headers[m.a.ConnectionId] &&
                this.privProperties.setProperty(
                  S.a.Speech_SessionId,
                  this.privConnectionMessage.headers[m.a.ConnectionId]
                ),
              Object.keys(this.privConnectionMessage.headers).forEach(function (e, t, r) {
                n.privProperties.setProperty(e, n.privConnectionMessage.headers[e]);
              });
          }
          return (
            Object(a.a)(e, [
              {
                key: 'path',
                get: function () {
                  return this.privConnectionMessage.headers[
                    Object.keys(this.privConnectionMessage.headers).find(function (e) {
                      return e.toLowerCase() === 'path'.toLowerCase();
                    })
                  ];
                },
              },
              {
                key: 'isTextMessage',
                get: function () {
                  return this.privConnectionMessage.messageType === g.b.Text;
                },
              },
              {
                key: 'isBinaryMessage',
                get: function () {
                  return this.privConnectionMessage.messageType === g.b.Binary;
                },
              },
              {
                key: 'TextMessage',
                get: function () {
                  return this.privConnectionMessage.textBody;
                },
              },
              {
                key: 'binaryMessage',
                get: function () {
                  return this.privConnectionMessage.binaryBody;
                },
              },
              {
                key: 'properties',
                get: function () {
                  return this.privProperties;
                },
              },
              {
                key: 'toString',
                value: function () {
                  return '';
                },
              },
            ]),
            e
          );
        })(),
        k = n(7),
        C = n(149),
        O = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            return Object(o.a)(this, n), t.apply(this, arguments);
          }
          return n;
        })(C.a),
        E = (function () {
          function e(t) {
            Object(o.a)(this, e), (this.privConnectionMessage = t);
          }
          return (
            Object(a.a)(e, [
              {
                key: 'message',
                get: function () {
                  return this.privConnectionMessage;
                },
              },
              {
                key: 'toString',
                value: function () {
                  return 'Message: ' + this.privConnectionMessage.toString();
                },
              },
            ]),
            e
          );
        })(),
        P = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, r, i) {
            var a;
            return Object(o.a)(this, n), ((a = t.call(this, i)).privJsonResult = e), (a.privEventName = r), a;
          }
          return (
            Object(a.a)(n, [
              {
                key: 'jsonString',
                get: function () {
                  return this.privJsonResult;
                },
              },
              {
                key: 'eventName',
                get: function () {
                  return this.privEventName;
                },
              },
            ]),
            n
          );
        })(C.a),
        x = (function () {
          function e() {
            Object(o.a)(this, e);
          }
          return (
            Object(a.a)(
              e,
              [
                {
                  key: 'openConnection',
                  value: function (e, t) {
                    Object(d.b)(this.privInternalData.connect(), e, t);
                  },
                },
                {
                  key: 'closeConnection',
                  value: function (e, t) {
                    if (this.privInternalData instanceof v.a)
                      throw new Error("Disconnecting a synthesizer's connection is currently not supported");
                    Object(d.b)(this.privInternalData.disconnect(), e, t);
                  },
                },
                {
                  key: 'setMessageProperty',
                  value: function (e, t, n) {
                    if ((k.a.throwIfNullOrWhitespace(t, 'propertyName'), this.privInternalData instanceof y.a)) {
                      if ('speech.context' !== e.toLowerCase())
                        throw new Error(
                          'Only speech.context message property sets are currently supported for recognizer'
                        );
                      this.privInternalData.speechContext.setSection(t, n);
                    } else if (this.privInternalData instanceof v.a) {
                      if ('synthesis.context' !== e.toLowerCase())
                        throw new Error(
                          'Only synthesis.context message property sets are currently supported for synthesizer'
                        );
                      this.privInternalData.synthesisContext.setSection(t, n);
                    }
                  },
                },
                {
                  key: 'sendMessageAsync',
                  value: function (e, t, n, r) {
                    Object(d.b)(this.privInternalData.sendNetworkMessage(e, t), n, r);
                  },
                },
                { key: 'close', value: function () {} },
                {
                  key: 'setupEvents',
                  value: function () {
                    var e = this;
                    (this.privEventListener = this.privInternalData.connectionEvents.attach(function (t) {
                      'ConnectionEstablishedEvent' === t.name
                        ? e.connected && e.connected(new O(t.connectionId))
                        : 'ConnectionClosedEvent' === t.name
                        ? e.disconnected && e.disconnected(new O(t.connectionId))
                        : 'ConnectionMessageSentEvent' === t.name
                        ? e.messageSent && e.messageSent(new E(new w(t.message)))
                        : 'ConnectionMessageReceivedEvent' === t.name &&
                          e.messageReceived &&
                          e.messageReceived(new E(new w(t.message)));
                    })),
                      (this.privServiceEventListener = this.privInternalData.serviceEvents.attach(function (t) {
                        e.receivedServiceMessage && e.receivedServiceMessage(new P(t.jsonString, t.name));
                      }));
                  },
                },
              ],
              [
                {
                  key: 'fromRecognizer',
                  value: function (t) {
                    var n = t.internalData,
                      r = new e();
                    return (r.privInternalData = n), r.setupEvents(), r;
                  },
                },
                {
                  key: 'fromSynthesizer',
                  value: function (t) {
                    var n = t.internalData,
                      r = new e();
                    return (r.privInternalData = n), r.setupEvents(), r;
                  },
                },
              ]
            ),
            e
          );
        })(),
        R = n(78),
        T = n(79),
        I = function e(t, n) {
          var r = this;
          Object(o.a)(this, e),
            (this.encode = function (e) {
              var t = r.downSampleAudioFrame(e, r.privActualSampleRate, r.privDesiredSampleRate);
              if (!t) return null;
              var n = 2 * t.length,
                i = new ArrayBuffer(n),
                o = new DataView(i);
              return r.floatTo16BitPCM(o, 0, t), i;
            }),
            (this.setString = function (e, t, n) {
              for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r));
            }),
            (this.floatTo16BitPCM = function (e, t, n) {
              for (var r = 0; r < n.length; r++, t += 2) {
                var i = Math.max(-1, Math.min(1, n[r]));
                e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, !0);
              }
            }),
            (this.downSampleAudioFrame = function (e, t, n) {
              if (!e) return null;
              if (n === t || n > t) return e;
              for (var r = t / n, i = Math.round(e.length / r), o = new Float32Array(i), a = 0, s = 0; s < i; ) {
                for (var u = Math.round((s + 1) * r), c = 0, l = 0; a < u && a < e.length; ) (c += e[a++]), l++;
                o[s++] = c / l;
              }
              return o;
            }),
            (this.privActualSampleRate = t),
            (this.privDesiredSampleRate = n);
        },
        A = (function () {
          function e(t) {
            var n = this;
            Object(o.a)(this, e),
              (this.record = function (e, t, r) {
                var i = new I(e.sampleRate, 16e3),
                  o = e.createMediaStreamSource(t);
                if (!n.privSpeechProcessorScript) {
                  var a = new Blob(
                    [
                      "class SP extends AudioWorkletProcessor {\n                constructor(options) {\n                  super(options);\n                }\n                process(inputs, outputs) {\n                  const input = inputs[0];\n                  const output = [];\n                  for (let channel = 0; channel < input.length; channel += 1) {\n                    output[channel] = input[channel];\n                  }\n                  this.port.postMessage(output[0]);\n                  return true;\n                }\n              }\n              registerProcessor('speech-processor', SP);",
                    ],
                    { type: 'application/javascript; charset=utf-8' }
                  );
                  n.privSpeechProcessorScript = URL.createObjectURL(a);
                }
                if (!n.privSpeechProcessorScript || !e.audioWorklet)
                  throw new Error('Unable to start audio worklet node for PCMRecorder');
                e.audioWorklet
                  .addModule(n.privSpeechProcessorScript)
                  .then(function () {
                    var a = new AudioWorkletNode(e, 'speech-processor');
                    (a.port.onmessage = function (e) {
                      var t = e.data;
                      if (r && !r.isClosed) {
                        var n = i.encode(t);
                        n && (r.writeStreamChunk({ buffer: n, isEnd: !1, timeReceived: Date.now() }), !1);
                      }
                    }),
                      o.connect(a),
                      a.connect(e.destination),
                      (n.privMediaResources = { scriptProcessorNode: a, source: o, stream: t });
                  })
                  .catch(function () {
                    var a = (function () {
                      var t = 0;
                      try {
                        return e.createScriptProcessor(t, 1, 1);
                      } catch (r) {
                        t = 2048;
                        for (var n = e.sampleRate; t < 16384 && n >= 32e3; ) (t <<= 1), (n >>= 1);
                        return e.createScriptProcessor(t, 1, 1);
                      }
                    })();
                    (a.onaudioprocess = function (e) {
                      var t = e.inputBuffer.getChannelData(0);
                      if (r && !r.isClosed) {
                        var n = i.encode(t);
                        n && (r.writeStreamChunk({ buffer: n, isEnd: !1, timeReceived: Date.now() }), !1);
                      }
                    }),
                      o.connect(a),
                      a.connect(e.destination),
                      (n.privMediaResources = { scriptProcessorNode: a, source: o, stream: t });
                  });
              }),
              (this.releaseMediaResources = function (e) {
                n.privMediaResources &&
                  (n.privMediaResources.scriptProcessorNode &&
                    (n.privMediaResources.scriptProcessorNode.disconnect(e.destination),
                    (n.privMediaResources.scriptProcessorNode = null)),
                  n.privMediaResources.source &&
                    (n.privMediaResources.source.disconnect(),
                    n.privStopInputOnRelease &&
                      n.privMediaResources.stream.getTracks().forEach(function (e) {
                        return e.stop();
                      }),
                    (n.privMediaResources.source = null)));
              }),
              (this.privStopInputOnRelease = t);
          }
          return (
            Object(a.a)(e, [
              {
                key: 'setWorkletUrl',
                value: function (e) {
                  this.privSpeechProcessorScript = e;
                },
              },
            ]),
            e
          );
        })(),
        _ = n(17),
        j = n(30),
        M = n(151),
        D = n(61),
        L = n(26),
        z = n(51),
        N = n(6),
        B = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        F = (function () {
          function e(t, n, r, a) {
            var s = this;
            Object(o.a)(this, e),
              (this.privRecorder = t),
              (this.deviceId = n),
              (this.privStreams = {}),
              (this.turnOn = function () {
                if (s.privInitializeDeferral) return s.privInitializeDeferral.promise;
                s.privInitializeDeferral = new d.a();
                try {
                  s.createAudioContext();
                } catch (o) {
                  if (o instanceof Error) {
                    var e = o;
                    s.privInitializeDeferral.reject(e.name + ': ' + e.message);
                  } else s.privInitializeDeferral.reject(o);
                  return s.privInitializeDeferral.promise;
                }
                var t = window.navigator,
                  n = t.getUserMedia || t.webkitGetUserMedia || t.mozGetUserMedia || t.msGetUserMedia;
                if (
                  (t.mediaDevices &&
                    (n = function (e, n, r) {
                      t.mediaDevices.getUserMedia(e).then(n).catch(r);
                    }),
                  n)
                ) {
                  var r = function () {
                    s.onEvent(new j.b(s.privId)),
                      s.privMediaStream && s.privMediaStream.active
                        ? (s.onEvent(new j.d(s.privId)), s.privInitializeDeferral.resolve())
                        : n(
                            { audio: !s.deviceId || { deviceId: s.deviceId }, video: !1 },
                            function (e) {
                              (s.privMediaStream = e), s.onEvent(new j.d(s.privId)), s.privInitializeDeferral.resolve();
                            },
                            function (e) {
                              var t = 'Error occurred during microphone initialization: '.concat(e);
                              s.privInitializeDeferral.reject(t), s.onEvent(new j.a(s.privId, t));
                            }
                          );
                  };
                  'suspended' === s.privContext.state
                    ? s.privContext
                        .resume()
                        .then(r)
                        .catch(function (e) {
                          s.privInitializeDeferral.reject('Failed to initialize audio context: '.concat(e));
                        })
                    : r();
                } else {
                  var i = 'Browser does not support getUserMedia.';
                  s.privInitializeDeferral.reject(i), s.onEvent(new j.a(i, ''));
                }
                return s.privInitializeDeferral.promise;
              }),
              (this.id = function () {
                return s.privId;
              }),
              (this.attach = function (e) {
                return (
                  s.onEvent(new j.f(s.privId, e)),
                  s.listen(e).then(function (t) {
                    return (
                      s.onEvent(new j.e(s.privId, e)),
                      {
                        detach: function () {
                          return B(
                            s,
                            void 0,
                            void 0,
                            i.a.mark(function n() {
                              return i.a.wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (
                                          t.readEnded(),
                                          delete this.privStreams[e],
                                          this.onEvent(new j.g(this.privId, e)),
                                          n.abrupt('return', this.turnOff())
                                        );
                                      case 4:
                                      case 'end':
                                        return n.stop();
                                    }
                                },
                                n,
                                this
                              );
                            })
                          );
                        },
                        id: function () {
                          return e;
                        },
                        read: function () {
                          return t.read();
                        },
                      }
                    );
                  })
                );
              }),
              (this.detach = function (e) {
                e &&
                  s.privStreams[e] &&
                  (s.privStreams[e].close(), delete s.privStreams[e], s.onEvent(new j.g(s.privId, e)));
              }),
              (this.listen = function (e) {
                return B(
                  s,
                  void 0,
                  void 0,
                  i.a.mark(function t() {
                    var n, r;
                    return i.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.turnOn();
                            case 2:
                              (n = new M.a(this.privOutputChunkSize, e)),
                                (this.privStreams[e] = n),
                                (t.prev = 4),
                                this.privRecorder.record(this.privContext, this.privMediaStream, n),
                                (t.next = 12);
                              break;
                            case 8:
                              throw (
                                ((t.prev = 8), (t.t0 = t.catch(4)), this.onEvent(new j.h(this.privId, e, t.t0)), t.t0)
                              );
                            case 12:
                              return (r = n), t.abrupt('return', r);
                            case 14:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[4, 8]]
                    );
                  })
                );
              }),
              (this.onEvent = function (e) {
                s.privEvents.onEvent(e), D.a.instance.onEvent(e);
              }),
              (this.createAudioContext = function () {
                s.privContext || (s.privContext = N.c.getAudioContext(e.AUDIOFORMAT.samplesPerSec));
              }),
              (this.privOutputChunkSize = e.AUDIOFORMAT.avgBytesPerSec / 10),
              (this.privId = r || Object(L.a)()),
              (this.privEvents = new z.a()),
              (this.privMediaStream = a || null),
              (this.privIsClosing = !1);
          }
          return (
            Object(a.a)(e, [
              {
                key: 'format',
                get: function () {
                  return Promise.resolve(e.AUDIOFORMAT);
                },
              },
              {
                key: 'blob',
                get: function () {
                  return Promise.reject('Not implemented for Mic input');
                },
              },
              {
                key: 'turnOff',
                value: function () {
                  return B(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t, n;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (t in this.privStreams) t && (n = this.privStreams[t]) && n.close();
                                if ((this.onEvent(new j.c(this.privId)), !this.privInitializeDeferral)) {
                                  e.next = 6;
                                  break;
                                }
                                return (e.next = 5), this.privInitializeDeferral;
                              case 5:
                                this.privInitializeDeferral = null;
                              case 6:
                                return (e.next = 8), this.destroyAudioContext();
                              case 8:
                                return e.abrupt('return');
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'events',
                get: function () {
                  return this.privEvents;
                },
              },
              {
                key: 'deviceInfo',
                get: function () {
                  return this.getMicrophoneLabel().then(function (t) {
                    return {
                      bitspersample: e.AUDIOFORMAT.bitsPerSample,
                      channelcount: e.AUDIOFORMAT.channels,
                      connectivity: p.f.Unknown,
                      manufacturer: 'Speech SDK',
                      model: t,
                      samplerate: e.AUDIOFORMAT.samplesPerSec,
                      type: p.g.Microphones,
                    };
                  });
                },
              },
              {
                key: 'setProperty',
                value: function (e, t) {
                  if ('MICROPHONE-WorkletSourceUrl' !== e)
                    throw new Error("Property '" + e + "' is not supported on Microphone.");
                  this.privRecorder.setWorkletUrl(t);
                },
              },
              {
                key: 'getMicrophoneLabel',
                value: function () {
                  var e = this,
                    t = 'microphone';
                  if (void 0 !== this.privMicrophoneLabel) return Promise.resolve(this.privMicrophoneLabel);
                  if (void 0 === this.privMediaStream || !this.privMediaStream.active) return Promise.resolve(t);
                  this.privMicrophoneLabel = t;
                  var n = this.privMediaStream.getTracks()[0].getSettings().deviceId;
                  if (void 0 === n) return Promise.resolve(this.privMicrophoneLabel);
                  var r = new d.a();
                  return (
                    navigator.mediaDevices.enumerateDevices().then(
                      function (t) {
                        var i,
                          o = Object(_.a)(t);
                        try {
                          for (o.s(); !(i = o.n()).done; ) {
                            var a = i.value;
                            if (a.deviceId === n) {
                              e.privMicrophoneLabel = a.label;
                              break;
                            }
                          }
                        } catch (s) {
                          o.e(s);
                        } finally {
                          o.f();
                        }
                        r.resolve(e.privMicrophoneLabel);
                      },
                      function () {
                        return r.resolve(e.privMicrophoneLabel);
                      }
                    ),
                    r.promise
                  );
                },
              },
              {
                key: 'destroyAudioContext',
                value: function () {
                  return B(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.privContext) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return');
                              case 2:
                                if (
                                  (this.privRecorder.releaseMediaResources(this.privContext),
                                  (t = !1),
                                  'close' in this.privContext && (t = !0),
                                  !t)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                if (this.privIsClosing) {
                                  e.next = 12;
                                  break;
                                }
                                return (this.privIsClosing = !0), (e.next = 10), this.privContext.close();
                              case 10:
                                (this.privContext = null), (this.privIsClosing = !1);
                              case 12:
                                e.next = 17;
                                break;
                              case 14:
                                if (null === this.privContext || 'running' !== this.privContext.state) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.next = 17), this.privContext.suspend();
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
      F.AUDIOFORMAT = N.b.getDefaultInputFormat();
      var U,
        q = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        W = (function () {
          function e(t, n, r) {
            var a = this;
            Object(o.a)(this, e),
              (this.privStreams = {}),
              (this.privHeaderEnd = 44),
              (this.turnOn = function () {
                if (a.privFilename.lastIndexOf('.wav') !== a.privFilename.length - 4) {
                  var e = a.privFilename + ' is not supported. Only WAVE files are allowed at the moment.';
                  return a.onEvent(new j.a(e, '')), Promise.reject(e);
                }
                a.onEvent(new j.b(a.privId)), a.onEvent(new j.d(a.privId));
              }),
              (this.id = function () {
                return a.privId;
              }),
              (this.attach = function (e) {
                return q(
                  a,
                  void 0,
                  void 0,
                  i.a.mark(function t() {
                    var n,
                      r = this;
                    return i.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return this.onEvent(new j.f(this.privId, e)), (t.next = 3), this.upload(e);
                            case 3:
                              return (
                                (n = t.sent),
                                this.onEvent(new j.e(this.privId, e)),
                                t.abrupt(
                                  'return',
                                  Promise.resolve({
                                    detach: function () {
                                      return q(
                                        r,
                                        void 0,
                                        void 0,
                                        i.a.mark(function t() {
                                          return i.a.wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      n.readEnded(),
                                                      delete this.privStreams[e],
                                                      this.onEvent(new j.g(this.privId, e)),
                                                      (t.next = 5),
                                                      this.turnOff()
                                                    );
                                                  case 5:
                                                  case 'end':
                                                    return t.stop();
                                                }
                                            },
                                            t,
                                            this
                                          );
                                        })
                                      );
                                    },
                                    id: function () {
                                      return e;
                                    },
                                    read: function () {
                                      return n.read();
                                    },
                                  })
                                )
                              );
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              }),
              (this.detach = function (e) {
                e &&
                  a.privStreams[e] &&
                  (a.privStreams[e].close(), delete a.privStreams[e], a.onEvent(new j.g(a.privId, e)));
              }),
              (this.turnOff = function () {
                for (var e in a.privStreams)
                  if (e) {
                    var t = a.privStreams[e];
                    t && !t.isClosed && t.close();
                  }
                return a.onEvent(new j.c(a.privId)), Promise.resolve();
              }),
              (this.onEvent = function (e) {
                a.privEvents.onEvent(e), D.a.instance.onEvent(e);
              }),
              (this.privId = r || Object(L.a)()),
              (this.privEvents = new z.a()),
              (this.privSource = t),
              'undefined' !== typeof window && 'undefined' !== typeof Blob && this.privSource instanceof Blob
                ? (this.privFilename = t.name)
                : (this.privFilename = n || 'unknown.wav'),
              (this.privAudioFormatPromise = this.readHeader());
          }
          return (
            Object(a.a)(e, [
              {
                key: 'format',
                get: function () {
                  return this.privAudioFormatPromise;
                },
              },
              {
                key: 'blob',
                get: function () {
                  return Promise.resolve(this.privSource);
                },
              },
              {
                key: 'events',
                get: function () {
                  return this.privEvents;
                },
              },
              {
                key: 'deviceInfo',
                get: function () {
                  return this.privAudioFormatPromise.then(function (e) {
                    return Promise.resolve({
                      bitspersample: e.bitsPerSample,
                      channelcount: e.channels,
                      connectivity: p.f.Unknown,
                      manufacturer: 'Speech SDK',
                      model: 'File',
                      samplerate: e.samplesPerSec,
                      type: p.g.File,
                    });
                  });
                },
              },
              {
                key: 'readHeader',
                value: function () {
                  var e = this,
                    t = this.privSource.slice(0, 512),
                    n = new d.a(),
                    r = function (t) {
                      var r = new DataView(t),
                        i = function (e) {
                          return String.fromCharCode(
                            r.getUint8(e),
                            r.getUint8(e + 1),
                            r.getUint8(e + 2),
                            r.getUint8(e + 3)
                          );
                        };
                      if ('RIFF' === i(0))
                        if ('WAVE' === i(8) && 'fmt ' === i(12)) {
                          for (
                            var o = r.getInt32(16, !0),
                              a = r.getUint16(22, !0),
                              s = r.getUint32(24, !0),
                              u = r.getUint16(34, !0),
                              c = 36 + Math.max(o - 16, 0);
                            'data' !== i(c);
                            c += 2
                          )
                            if (c > 504) return void n.reject('Invalid WAV header in file, data block was not found');
                          (e.privHeaderEnd = c + 8), n.resolve(N.b.getWaveFormatPCM(s, u, a));
                        } else n.reject('Invalid WAV header in file, WAVEfmt was not found');
                      else n.reject('Invalid WAV header in file, RIFF was not found');
                    };
                  if ('undefined' !== typeof window && 'undefined' !== typeof Blob && t instanceof Blob) {
                    var i = new FileReader();
                    (i.onload = function (e) {
                      var t = e.target.result;
                      r(t);
                    }),
                      i.readAsArrayBuffer(t);
                  } else {
                    var o = t;
                    r(o.buffer.slice(o.byteOffset, o.byteOffset + o.byteLength));
                  }
                  return n.promise;
                },
              },
              {
                key: 'upload',
                value: function (e) {
                  return q(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      var n,
                        r,
                        o,
                        a,
                        s,
                        u,
                        c,
                        l = this;
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = function (t) {
                                    var n = "Error occurred while processing '".concat(l.privFilename, "'. ").concat(t);
                                    throw (l.onEvent(new j.h(l.privId, e, n)), new Error(n));
                                  }),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.turnOn()
                                );
                              case 4:
                                return (t.next = 6), this.privAudioFormatPromise;
                              case 6:
                                return (
                                  (r = t.sent),
                                  (o = new M.a(r.avgBytesPerSec / 10, e)),
                                  (this.privStreams[e] = o),
                                  (a = this.privSource.slice(this.privHeaderEnd)),
                                  (s = function (e) {
                                    o.isClosed ||
                                      (o.writeStreamChunk({ buffer: e, isEnd: !1, timeReceived: Date.now() }),
                                      o.close());
                                  }),
                                  'undefined' !== typeof window && 'undefined' !== typeof Blob && a instanceof Blob
                                    ? (((u = new FileReader()).onerror = function (e) {
                                        n(e.toString());
                                      }),
                                      (u.onload = function (e) {
                                        var t = e.target.result;
                                        s(t);
                                      }),
                                      u.readAsArrayBuffer(a))
                                    : s((c = a).buffer.slice(c.byteOffset, c.byteOffset + c.byteLength)),
                                  t.abrupt('return', o)
                                );
                              case 15:
                                (t.prev = 15), (t.t0 = t.catch(1)), n(t.t0);
                              case 18:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 15]]
                      );
                    })
                  );
                },
              },
            ]),
            e
          );
        })(),
        K = function e() {
          Object(o.a)(this, e);
        },
        H = n(96),
        V = n(8),
        $ = n(153),
        Q = n(37),
        Y = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        G =
          ((U = {}),
          Object(V.a)(U, N.a.PCM, 'audio/wav'),
          Object(V.a)(U, N.a.MuLaw, 'audio/x-wav'),
          Object(V.a)(U, N.a.MP3, 'audio/mpeg'),
          Object(V.a)(U, N.a.OGG_OPUS, 'audio/ogg'),
          Object(V.a)(U, N.a.WEBM_OPUS, 'audio/webm; codecs=opus'),
          Object(V.a)(U, N.a.ALaw, 'audio/x-wav'),
          U),
        J = (function () {
          function e(t) {
            Object(o.a)(this, e),
              (this.privPlaybackStarted = !1),
              (this.privAppendingToBuffer = !1),
              (this.privMediaSourceOpened = !1),
              (this.privBytesReceived = 0),
              (this.privId = t || Object(L.a)()),
              (this.privIsPaused = !1),
              (this.privIsClosed = !1);
          }
          return (
            Object(a.a)(e, [
              {
                key: 'id',
                value: function () {
                  return this.privId;
                },
              },
              {
                key: 'write',
                value: function (e, t, n) {
                  void 0 !== this.privAudioBuffer
                    ? (this.privAudioBuffer.push(e),
                      this.updateSourceBuffer().then(
                        function () {
                          t && t();
                        },
                        function (e) {
                          n && n(e);
                        }
                      ))
                    : void 0 !== this.privAudioOutputStream &&
                      (this.privAudioOutputStream.write(e), (this.privBytesReceived += e.byteLength));
                },
              },
              {
                key: 'close',
                value: function (e, t) {
                  var n = this;
                  if (((this.privIsClosed = !0), void 0 !== this.privSourceBuffer))
                    this.handleSourceBufferUpdateEnd().then(
                      function () {
                        e && e();
                      },
                      function (e) {
                        t && t(e);
                      }
                    );
                  else if (void 0 !== this.privAudioOutputStream)
                    if (
                      (this.privFormat.formatTag !== N.a.PCM &&
                        this.privFormat.formatTag !== N.a.MuLaw &&
                        this.privFormat.formatTag !== N.a.ALaw) ||
                      !1 !== this.privFormat.hasHeader
                    ) {
                      var r = new ArrayBuffer(this.privBytesReceived);
                      this.privAudioOutputStream.read(r).then(
                        function (i) {
                          r = v.a.addHeader(r, n.privFormat);
                          var o = new Blob([r], { type: G[n.privFormat.formatTag] });
                          (n.privAudio.src = window.URL.createObjectURL(o)),
                            n.notifyPlayback().then(
                              function () {
                                e && e();
                              },
                              function (e) {
                                t && t(e);
                              }
                            );
                        },
                        function (e) {
                          t && t(e);
                        }
                      );
                    } else
                      console.warn('Play back is not supported for raw PCM, mulaw or alaw format without header.'),
                        this.onAudioEnd && this.onAudioEnd(this);
                  else this.onAudioEnd && this.onAudioEnd(this);
                },
              },
              {
                key: 'format',
                set: function (e) {
                  var t = this;
                  if ('undefined' !== typeof AudioContext || 'undefined' !== typeof window.webkitAudioContext) {
                    this.privFormat = e;
                    var n = G[this.privFormat.formatTag];
                    void 0 === n
                      ? console.warn(
                          'Unknown mimeType for format '.concat(
                            N.a[this.privFormat.formatTag],
                            '; playback is not supported.'
                          )
                        )
                      : 'undefined' !== typeof MediaSource && MediaSource.isTypeSupported(n)
                      ? ((this.privAudio = new Audio()),
                        (this.privAudioBuffer = []),
                        (this.privMediaSource = new MediaSource()),
                        (this.privAudio.src = URL.createObjectURL(this.privMediaSource)),
                        this.privAudio.load(),
                        (this.privMediaSource.onsourceopen = function (e) {
                          (t.privMediaSourceOpened = !0),
                            (t.privMediaSource.duration = 1800),
                            (t.privSourceBuffer = t.privMediaSource.addSourceBuffer(n)),
                            (t.privSourceBuffer.onupdate = function (e) {
                              t.updateSourceBuffer().catch(function (e) {
                                D.a.instance.onEvent(new $.a(e));
                              });
                            }),
                            (t.privSourceBuffer.onupdateend = function (e) {
                              t.handleSourceBufferUpdateEnd().catch(function (e) {
                                D.a.instance.onEvent(new $.a(e));
                              });
                            }),
                            (t.privSourceBuffer.onupdatestart = function (e) {
                              t.privAppendingToBuffer = !1;
                            });
                        }),
                        this.updateSourceBuffer().catch(function (e) {
                          D.a.instance.onEvent(new $.a(e));
                        }))
                      : (console.warn(
                          'Format '.concat(
                            N.a[this.privFormat.formatTag],
                            ' could not be played by MSE, streaming playback is not enabled.'
                          )
                        ),
                        (this.privAudioOutputStream = new Q.b()),
                        (this.privAudioOutputStream.format = this.privFormat),
                        (this.privAudio = new Audio()));
                  }
                },
              },
              {
                key: 'isClosed',
                get: function () {
                  return this.privIsClosed;
                },
              },
              {
                key: 'currentTime',
                get: function () {
                  return void 0 !== this.privAudio ? this.privAudio.currentTime : -1;
                },
              },
              {
                key: 'pause',
                value: function () {
                  this.privIsPaused || void 0 === this.privAudio || (this.privAudio.pause(), (this.privIsPaused = !0));
                },
              },
              {
                key: 'resume',
                value: function (e, t) {
                  this.privIsPaused &&
                    void 0 !== this.privAudio &&
                    (this.privAudio.play().then(
                      function () {
                        e && e();
                      },
                      function (e) {
                        t && t(e);
                      }
                    ),
                    (this.privIsPaused = !1));
                },
              },
              {
                key: 'internalAudio',
                get: function () {
                  return this.privAudio;
                },
              },
              {
                key: 'updateSourceBuffer',
                value: function () {
                  return Y(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !(
                                    void 0 !== this.privAudioBuffer &&
                                    this.privAudioBuffer.length > 0 &&
                                    this.sourceBufferAvailable()
                                  )
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                (this.privAppendingToBuffer = !0),
                                  (t = this.privAudioBuffer.shift()),
                                  (e.prev = 3),
                                  this.privSourceBuffer.appendBuffer(t),
                                  (e.next = 12);
                                break;
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e.catch(3)),
                                  this.privAudioBuffer.unshift(t),
                                  console.log('buffer filled, pausing addition of binaries until space is made'),
                                  e.abrupt('return')
                                );
                              case 12:
                                return (e.next = 14), this.notifyPlayback();
                              case 14:
                                e.next = 19;
                                break;
                              case 16:
                                if (!this.canEndStream()) {
                                  e.next = 19;
                                  break;
                                }
                                return (e.next = 19), this.handleSourceBufferUpdateEnd();
                              case 19:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 7]]
                      );
                    })
                  );
                },
              },
              {
                key: 'handleSourceBufferUpdateEnd',
                value: function () {
                  return Y(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.canEndStream() || !this.sourceBufferAvailable()) {
                                  e.next = 4;
                                  break;
                                }
                                return this.privMediaSource.endOfStream(), (e.next = 4), this.notifyPlayback();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'notifyPlayback',
                value: function () {
                  return Y(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      var t = this;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.privPlaybackStarted || void 0 === this.privAudio) {
                                  e.next = 7;
                                  break;
                                }
                                if (
                                  ((this.privPlaybackStarted = !0),
                                  this.onAudioStart && this.onAudioStart(this),
                                  (this.privAudio.onended = function () {
                                    t.onAudioEnd && t.onAudioEnd(t);
                                  }),
                                  this.privIsPaused)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (e.next = 7), this.privAudio.play();
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'canEndStream',
                value: function () {
                  return (
                    this.isClosed &&
                    void 0 !== this.privSourceBuffer &&
                    0 === this.privAudioBuffer.length &&
                    this.privMediaSourceOpened &&
                    !this.privAppendingToBuffer &&
                    'open' === this.privMediaSource.readyState
                  );
                },
              },
              {
                key: 'sourceBufferAvailable',
                value: function () {
                  return void 0 !== this.privSourceBuffer && !this.privSourceBuffer.updating;
                },
              },
            ]),
            e
          );
        })(),
        X = function e() {
          Object(o.a)(this, e);
        },
        Z = n(39),
        ee = (function () {
          function e(t) {
            var n = this;
            Object(o.a)(this, e),
              (this.id = function () {
                return n.privId;
              }),
              k.a.throwIfNullOrUndefined(
                Z.openSync,
                '\nFile System access not available, please use Push or PullAudioOutputStream'
              ),
              (this.privFd = Z.openSync(t, 'w'));
          }
          return (
            Object(a.a)(e, [
              {
                key: 'format',
                set: function (e) {
                  k.a.throwIfNotUndefined(this.privAudioFormat, 'format is already set'), (this.privAudioFormat = e);
                  var t = 0;
                  this.privAudioFormat.hasHeader && (t = this.privAudioFormat.header.byteLength),
                    void 0 !== this.privFd &&
                      (this.privWriteStream = Z.createWriteStream('', { fd: this.privFd, start: t, autoClose: !1 }));
                },
              },
              {
                key: 'write',
                value: function (e) {
                  k.a.throwIfNullOrUndefined(this.privAudioFormat, 'must set format before writing.'),
                    void 0 !== this.privWriteStream && this.privWriteStream.write(new Uint8Array(e.slice(0)));
                },
              },
              {
                key: 'close',
                value: function () {
                  var e = this;
                  void 0 !== this.privFd &&
                    (this.privWriteStream.on('finish', function () {
                      e.privAudioFormat.hasHeader &&
                        (e.privAudioFormat.updateHeader(e.privWriteStream.bytesWritten),
                        Z.writeSync(
                          e.privFd,
                          new Int8Array(e.privAudioFormat.header),
                          0,
                          e.privAudioFormat.header.byteLength,
                          0
                        )),
                        Z.closeSync(e.privFd),
                        (e.privFd = void 0);
                    }),
                    this.privWriteStream.end());
                },
              },
            ]),
            e
          );
        })(),
        te = (function () {
          function e() {
            Object(o.a)(this, e);
          }
          return (
            Object(a.a)(e, null, [
              {
                key: 'fromDefaultMicrophoneInput',
                value: function () {
                  var e = new A(!0);
                  return new ne(new F(e));
                },
              },
              {
                key: 'fromMicrophoneInput',
                value: function (e) {
                  var t = new A(!0);
                  return new ne(new F(t, e));
                },
              },
              {
                key: 'fromWavFileInput',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'unnamedBuffer.wav';
                  return new ne(new W(e, t));
                },
              },
              {
                key: 'fromStreamInput',
                value: function (e) {
                  if (e instanceof K) return new ne(new H.b(e));
                  if (e instanceof H.a) return new ne(e);
                  if ('undefined' !== typeof MediaStream && e instanceof MediaStream) {
                    var t = new A(!1);
                    return new ne(new F(t, null, null, e));
                  }
                  throw new Error('Not Supported Type');
                },
              },
              {
                key: 'fromDefaultSpeakerOutput',
                value: function () {
                  return new re(new J());
                },
              },
              {
                key: 'fromSpeakerOutput',
                value: function (t) {
                  if (void 0 === t) return e.fromDefaultSpeakerOutput();
                  if (t instanceof J) return new re(t);
                  throw new Error('Not Supported Type');
                },
              },
              {
                key: 'fromAudioFileOutput',
                value: function (e) {
                  return new re(new ee(e));
                },
              },
              {
                key: 'fromStreamOutput',
                value: function (e) {
                  if (e instanceof X) return new re(new Q.d(e));
                  if (e instanceof Q.c) return new re(e);
                  if (e instanceof Q.a) return new re(e);
                  throw new Error('Not Supported Type');
                },
              },
            ]),
            e
          );
        })(),
        ne = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e) {
            var r;
            return Object(o.a)(this, n), ((r = t.call(this)).privSource = e), r;
          }
          return (
            Object(a.a)(n, [
              {
                key: 'format',
                get: function () {
                  return this.privSource.format;
                },
              },
              {
                key: 'close',
                value: function (e, t) {
                  this.privSource.turnOff().then(
                    function () {
                      e && e();
                    },
                    function (e) {
                      t && t(e);
                    }
                  );
                },
              },
              {
                key: 'id',
                value: function () {
                  return this.privSource.id();
                },
              },
              {
                key: 'blob',
                get: function () {
                  return this.privSource.blob;
                },
              },
              {
                key: 'turnOn',
                value: function () {
                  return this.privSource.turnOn();
                },
              },
              {
                key: 'attach',
                value: function (e) {
                  return this.privSource.attach(e);
                },
              },
              {
                key: 'detach',
                value: function (e) {
                  return this.privSource.detach(e);
                },
              },
              {
                key: 'turnOff',
                value: function () {
                  return this.privSource.turnOff();
                },
              },
              {
                key: 'events',
                get: function () {
                  return this.privSource.events;
                },
              },
              {
                key: 'setProperty',
                value: function (e, t) {
                  if ((k.a.throwIfNull(t, 'value'), void 0 === this.privSource.setProperty))
                    throw new Error('This AudioConfig instance does not support setting properties.');
                  this.privSource.setProperty(e, t);
                },
              },
              {
                key: 'getProperty',
                value: function (e, t) {
                  if (void 0 !== this.privSource.getProperty) return this.privSource.getProperty(e, t);
                  throw new Error('This AudioConfig instance does not support getting properties.');
                },
              },
              {
                key: 'deviceInfo',
                get: function () {
                  return this.privSource.deviceInfo;
                },
              },
            ]),
            n
          );
        })(te),
        re = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e) {
            var r;
            return Object(o.a)(this, n), ((r = t.call(this)).privDestination = e), r;
          }
          return (
            Object(a.a)(n, [
              {
                key: 'format',
                set: function (e) {
                  this.privDestination.format = e;
                },
              },
              {
                key: 'write',
                value: function (e) {
                  this.privDestination.write(e);
                },
              },
              {
                key: 'close',
                value: function () {
                  this.privDestination.close();
                },
              },
              {
                key: 'id',
                value: function () {
                  return this.privDestination.id();
                },
              },
              {
                key: 'setProperty',
                value: function (e, t) {
                  throw new Error('This AudioConfig instance does not support setting properties.');
                },
              },
              {
                key: 'getProperty',
                value: function (e, t) {
                  throw new Error('This AudioConfig instance does not support getting properties.');
                },
              },
            ]),
            n
          );
        })(te),
        ie = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        oe = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
        ae = (function (e) {
          Object(c.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, r) {
            var i;
            Object(o.a)(this, n);
            var a = e;
            return (
              k.a.throwIfNull(a, 'speechConfig'),
              ((i = t.call(this, r, a.properties, new f.a())).privDisposedTranslationRecognizer = !1),
              (i.privProperties = a.properties.clone()),
              void 0 !== i.properties.getProperty(S.a.SpeechServiceConnection_TranslationVoice, void 0) &&
                k.a.throwIfNullOrWhitespace(
                  i.properties.getProperty(S.a.SpeechServiceConnection_TranslationVoice),
                  S.a[S.a.SpeechServiceConnection_TranslationVoice]
                ),
              k.a.throwIfNullOrWhitespace(
                i.properties.getProperty(S.a.SpeechServiceConnection_TranslationToLanguages),
                S.a[S.a.SpeechServiceConnection_TranslationToLanguages]
              ),
              k.a.throwIfNullOrWhitespace(
                i.properties.getProperty(S.a.SpeechServiceConnection_RecoLanguage),
                S.a[S.a.SpeechServiceConnection_RecoLanguage]
              ),
              i
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: 'speechRecognitionLanguage',
                get: function () {
                  return (
                    k.a.throwIfDisposed(this.privDisposedTranslationRecognizer),
                    this.properties.getProperty(S.a.SpeechServiceConnection_RecoLanguage)
                  );
                },
              },
              {
                key: 'targetLanguages',
                get: function () {
                  return (
                    k.a.throwIfDisposed(this.privDisposedTranslationRecognizer),
                    this.properties.getProperty(S.a.SpeechServiceConnection_TranslationToLanguages).split(',')
                  );
                },
              },
              {
                key: 'voiceName',
                get: function () {
                  return (
                    k.a.throwIfDisposed(this.privDisposedTranslationRecognizer),
                    this.properties.getProperty(S.a.SpeechServiceConnection_TranslationVoice, void 0)
                  );
                },
              },
              {
                key: 'authorizationToken',
                get: function () {
                  return this.properties.getProperty(S.a.SpeechServiceAuthorization_Token);
                },
                set: function (e) {
                  this.properties.setProperty(S.a.SpeechServiceAuthorization_Token, e);
                },
              },
              {
                key: 'properties',
                get: function () {
                  return this.privProperties;
                },
              },
              {
                key: 'recognizeOnceAsync',
                value: function (e, t) {
                  k.a.throwIfDisposed(this.privDisposedTranslationRecognizer),
                    Object(d.b)(this.recognizeOnceAsyncImpl(p.c.Conversation), e, t);
                },
              },
              {
                key: 'startContinuousRecognitionAsync',
                value: function (e, t) {
                  Object(d.b)(this.startContinuousRecognitionAsyncImpl(p.c.Conversation), e, t);
                },
              },
              {
                key: 'stopContinuousRecognitionAsync',
                value: function (e, t) {
                  Object(d.b)(this.stopContinuousRecognitionAsyncImpl(), e, t);
                },
              },
              {
                key: 'removeTargetLanguage',
                value: function (e) {
                  if (
                    (k.a.throwIfNullOrUndefined(e, 'language to be removed'),
                    void 0 !== this.properties.getProperty(S.a.SpeechServiceConnection_TranslationToLanguages, void 0))
                  ) {
                    var t = this.properties.getProperty(S.a.SpeechServiceConnection_TranslationToLanguages).split(','),
                      n = t.indexOf(e);
                    n > -1 &&
                      (t.splice(n, 1),
                      this.properties.setProperty(S.a.SpeechServiceConnection_TranslationToLanguages, t.join(',')),
                      this.updateLanguages(t));
                  }
                },
              },
              {
                key: 'addTargetLanguage',
                value: function (e) {
                  k.a.throwIfNullOrUndefined(e, 'language to be added');
                  var t = [];
                  void 0 !== this.properties.getProperty(S.a.SpeechServiceConnection_TranslationToLanguages, void 0)
                    ? (t = this.properties
                        .getProperty(S.a.SpeechServiceConnection_TranslationToLanguages)
                        .split(',')).includes(e) ||
                      (t.push(e),
                      this.properties.setProperty(S.a.SpeechServiceConnection_TranslationToLanguages, t.join(',')))
                    : (this.properties.setProperty(S.a.SpeechServiceConnection_TranslationToLanguages, e), (t = [e])),
                    this.updateLanguages(t);
                },
              },
              {
                key: 'close',
                value: function (e, t) {
                  k.a.throwIfDisposed(this.privDisposedTranslationRecognizer), Object(d.b)(this.dispose(!0), e, t);
                },
              },
              { key: 'onConnection', value: function () {} },
              {
                key: 'onDisconnection',
                value: function () {
                  return oe(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function e() {
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                },
              },
              {
                key: 'dispose',
                value: function (e) {
                  var t = this,
                    r = Object.create(null, {
                      dispose: {
                        get: function () {
                          return Object(s.a)(Object(u.a)(n.prototype), 'dispose', t);
                        },
                      },
                    });
                  return oe(
                    this,
                    void 0,
                    void 0,
                    i.a.mark(function t() {
                      return i.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.privDisposedTranslationRecognizer) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return');
                              case 2:
                                if (((this.privDisposedTranslationRecognizer = !0), !e)) {
                                  t.next = 8;
                                  break;
                                }
                                return (t.next = 6), this.implRecognizerStop();
                              case 6:
                                return (t.next = 8), r.dispose.call(this, e);
                              case 8:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                },
              },
              {
                key: 'createRecognizerConfig',
                value: function (e) {
                  return new p.d(e, this.properties);
                },
              },
              {
                key: 'createServiceRecognizer',
                value: function (e, t, n, r) {
                  var i = n;
                  return new h.a(e, t, i, r, this);
                },
              },
              {
                key: 'updateLanguages',
                value: function (e) {
                  var t = x.fromRecognizer(this);
                  t &&
                    (t.setMessageProperty('speech.context', 'translationcontext', { to: e }),
                    t.sendMessageAsync('event', JSON.stringify({ id: 'translation', name: 'updateLanguage', to: e })));
                },
              },
            ]),
            n
          );
        })(
          (function () {
            function e(t, n, r) {
              Object(o.a)(this, e),
                (this.audioConfig = void 0 !== t ? t : te.fromDefaultMicrophoneInput()),
                (this.privDisposed = !1),
                (this.privProperties = n.clone()),
                (this.privConnectionFactory = r),
                this.implCommonRecognizerSetup();
            }
            return (
              Object(a.a)(
                e,
                [
                  {
                    key: 'close',
                    value: function (e, t) {
                      k.a.throwIfDisposed(this.privDisposed), Object(d.b)(this.dispose(!0), e, t);
                    },
                  },
                  {
                    key: 'internalData',
                    get: function () {
                      return this.privReco;
                    },
                  },
                  {
                    key: 'dispose',
                    value: function (e) {
                      return ie(
                        this,
                        void 0,
                        void 0,
                        i.a.mark(function t() {
                          return i.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (!this.privDisposed) {
                                      t.next = 2;
                                      break;
                                    }
                                    return t.abrupt('return');
                                  case 2:
                                    if (((this.privDisposed = !0), !e)) {
                                      t.next = 9;
                                      break;
                                    }
                                    if (!this.privReco) {
                                      t.next = 9;
                                      break;
                                    }
                                    return (t.next = 7), this.privReco.audioSource.turnOff();
                                  case 7:
                                    return (t.next = 9), this.privReco.dispose();
                                  case 9:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'implCommonRecognizerSetup',
                    value: function () {
                      var t = 'undefined' !== typeof window ? 'Browser' : 'Node',
                        n = 'unknown',
                        r = 'unknown';
                      'undefined' !== typeof navigator &&
                        ((t = t + '/' + navigator.platform), (n = navigator.userAgent), (r = navigator.appVersion));
                      var i = this.createRecognizerConfig(new p.e(new p.a(new p.b(t, n, r))));
                      this.privReco = this.createServiceRecognizer(
                        e.getAuthFromProperties(this.privProperties),
                        this.privConnectionFactory,
                        this.audioConfig,
                        i
                      );
                    },
                  },
                  {
                    key: 'recognizeOnceAsyncImpl',
                    value: function (e) {
                      return ie(
                        this,
                        void 0,
                        void 0,
                        i.a.mark(function t() {
                          var n, r;
                          return i.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      k.a.throwIfDisposed(this.privDisposed),
                                      (n = new d.a()),
                                      (t.next = 4),
                                      this.implRecognizerStop()
                                    );
                                  case 4:
                                    return (t.next = 6), this.privReco.recognize(e, n.resolve, n.reject);
                                  case 6:
                                    return (t.next = 8), n.promise;
                                  case 8:
                                    return (r = t.sent), (t.next = 11), this.implRecognizerStop();
                                  case 11:
                                    return t.abrupt('return', r);
                                  case 12:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'startContinuousRecognitionAsyncImpl',
                    value: function (e) {
                      return ie(
                        this,
                        void 0,
                        void 0,
                        i.a.mark(function t() {
                          return i.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      k.a.throwIfDisposed(this.privDisposed), (t.next = 3), this.implRecognizerStop()
                                    );
                                  case 3:
                                    return (t.next = 5), this.privReco.recognize(e, void 0, void 0);
                                  case 5:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'stopContinuousRecognitionAsyncImpl',
                    value: function () {
                      return ie(
                        this,
                        void 0,
                        void 0,
                        i.a.mark(function e() {
                          return i.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      k.a.throwIfDisposed(this.privDisposed), (e.next = 3), this.implRecognizerStop()
                                    );
                                  case 3:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'implRecognizerStop',
                    value: function () {
                      return ie(
                        this,
                        void 0,
                        void 0,
                        i.a.mark(function e() {
                          return i.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!this.privReco) {
                                      e.next = 3;
                                      break;
                                    }
                                    return (e.next = 3), this.privReco.stopRecognizing();
                                  case 3:
                                    return e.abrupt('return');
                                  case 4:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'telemetryEnabled',
                    get: function () {
                      return y.a.telemetryDataEnabled;
                    },
                  },
                  {
                    key: 'enableTelemetry',
                    value: function (e) {
                      y.a.telemetryDataEnabled = e;
                    },
                  },
                  {
                    key: 'getAuthFromProperties',
                    value: function (e) {
                      var t = e.getProperty(S.a.SpeechServiceConnection_Key, void 0);
                      return t && '' !== t
                        ? new R.a(t)
                        : new T.a(
                            function (t) {
                              var n = e.getProperty(S.a.SpeechServiceAuthorization_Token, void 0);
                              return Promise.resolve(n);
                            },
                            function (t) {
                              var n = e.getProperty(S.a.SpeechServiceAuthorization_Token, void 0);
                              return Promise.resolve(n);
                            }
                          );
                    },
                  },
                ]
              ),
              e
            );
          })()
        );
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return y;
      });
      var r,
        i,
        o = n(0),
        a = n(1),
        s = n(3),
        u = n(4),
        c = n(11),
        l = n(7),
        f = n(41),
        p = n(86);
      !(function (e) {
        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Detailed = 1)] = 'Detailed');
      })(r || (r = {})),
        (function (e) {
          (e[(e.Masked = 0)] = 'Masked'), (e[(e.Removed = 1)] = 'Removed'), (e[(e.Raw = 2)] = 'Raw');
        })(i || (i = {}));
      var h = n(12),
        d = (function () {
          function e() {
            Object(o.a)(this, e);
          }
          return (
            Object(a.a)(
              e,
              [{ key: 'close', value: function () {} }],
              [
                {
                  key: 'fromSubscription',
                  value: function (e, t) {
                    l.a.throwIfNullOrWhitespace(e, 'subscriptionKey'), l.a.throwIfNullOrWhitespace(t, 'region');
                    var n = new v();
                    return (
                      n.setProperty(f.a.SpeechServiceConnection_Region, t),
                      n.setProperty(f.a.SpeechServiceConnection_IntentRegion, t),
                      n.setProperty(f.a.SpeechServiceConnection_Key, e),
                      n
                    );
                  },
                },
                {
                  key: 'fromEndpoint',
                  value: function (e, t) {
                    l.a.throwIfNull(e, 'endpoint');
                    var n = new v();
                    return (
                      n.setProperty(f.a.SpeechServiceConnection_Endpoint, e.href),
                      void 0 !== t && n.setProperty(f.a.SpeechServiceConnection_Key, t),
                      n
                    );
                  },
                },
                {
                  key: 'fromHost',
                  value: function (e, t) {
                    l.a.throwIfNull(e, 'hostName');
                    var n = new v();
                    return (
                      n.setProperty(
                        f.a.SpeechServiceConnection_Host,
                        e.protocol + '//' + e.hostname + ('' === e.port ? '' : ':' + e.port)
                      ),
                      void 0 !== t && n.setProperty(f.a.SpeechServiceConnection_Key, t),
                      n
                    );
                  },
                },
                {
                  key: 'fromAuthorizationToken',
                  value: function (e, t) {
                    l.a.throwIfNull(e, 'authorizationToken'), l.a.throwIfNullOrWhitespace(t, 'region');
                    var n = new v();
                    return (
                      n.setProperty(f.a.SpeechServiceConnection_Region, t),
                      n.setProperty(f.a.SpeechServiceConnection_IntentRegion, t),
                      (n.authorizationToken = e),
                      n
                    );
                  },
                },
              ]
            ),
            e
          );
        })(),
        v = (function (e) {
          Object(s.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            return (
              Object(o.a)(this, n),
              ((e = t.call(this)).privProperties = new p.a()),
              (e.speechRecognitionLanguage = 'en-US'),
              (e.outputFormat = r.Simple),
              e
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: 'properties',
                get: function () {
                  return this.privProperties;
                },
              },
              {
                key: 'endPoint',
                get: function () {
                  return new URL(this.privProperties.getProperty(f.a.SpeechServiceConnection_Endpoint));
                },
              },
              {
                key: 'subscriptionKey',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_Key);
                },
              },
              {
                key: 'region',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_Region);
                },
              },
              {
                key: 'authorizationToken',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceAuthorization_Token);
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceAuthorization_Token, e);
                },
              },
              {
                key: 'speechRecognitionLanguage',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_RecoLanguage);
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_RecoLanguage, e);
                },
              },
              {
                key: 'autoDetectSourceLanguages',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_AutoDetectSourceLanguages);
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_AutoDetectSourceLanguages, e);
                },
              },
              {
                key: 'outputFormat',
                get: function () {
                  return r[this.privProperties.getProperty(c.OutputFormatPropertyName, void 0)];
                },
                set: function (e) {
                  this.privProperties.setProperty(c.OutputFormatPropertyName, r[e]);
                },
              },
              {
                key: 'endpointId',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_EndpointId);
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_EndpointId, e);
                },
              },
              {
                key: 'setProperty',
                value: function (e, t) {
                  l.a.throwIfNull(t, 'value'), this.privProperties.setProperty(e, t);
                },
              },
              {
                key: 'getProperty',
                value: function (e, t) {
                  return this.privProperties.getProperty(e, t);
                },
              },
              {
                key: 'setProxy',
                value: function (e, t, n, r) {
                  this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyHostName], e),
                    this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyPort], t),
                    this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyUserName], n),
                    this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyPassword], r);
                },
              },
              {
                key: 'setServiceProperty',
                value: function (e, t, n) {
                  var r = JSON.parse(this.privProperties.getProperty(c.ServicePropertiesPropertyName, '{}'));
                  (r[e] = t), this.privProperties.setProperty(c.ServicePropertiesPropertyName, JSON.stringify(r));
                },
              },
              {
                key: 'setProfanity',
                value: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceResponse_ProfanityOption, i[e]);
                },
              },
              {
                key: 'enableAudioLogging',
                value: function () {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_EnableAudioLogging, 'true');
                },
              },
              {
                key: 'requestWordLevelTimestamps',
                value: function () {
                  this.privProperties.setProperty(f.a.SpeechServiceResponse_RequestWordLevelTimestamps, 'true');
                },
              },
              {
                key: 'enableDictation',
                value: function () {
                  this.privProperties.setProperty(c.ForceDictationPropertyName, 'true');
                },
              },
              {
                key: 'clone',
                value: function () {
                  var e = new n();
                  return (e.privProperties = this.privProperties.clone()), e;
                },
              },
              {
                key: 'speechSynthesisLanguage',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_SynthLanguage);
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_SynthLanguage, e);
                },
              },
              {
                key: 'speechSynthesisVoiceName',
                get: function () {
                  return this.privProperties.getProperty(f.a.SpeechServiceConnection_SynthVoice);
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_SynthVoice, e);
                },
              },
              {
                key: 'speechSynthesisOutputFormat',
                get: function () {
                  return h.a[this.privProperties.getProperty(f.a.SpeechServiceConnection_SynthOutputFormat, void 0)];
                },
                set: function (e) {
                  this.privProperties.setProperty(f.a.SpeechServiceConnection_SynthOutputFormat, h.a[e]);
                },
              },
            ]),
            n
          );
        })(d),
        y = (function (e) {
          Object(s.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(o.a)(this, n), t.call(this);
          }
          return (
            Object(a.a)(n, null, [
              {
                key: 'fromSubscription',
                value: function (e, t) {
                  l.a.throwIfNullOrWhitespace(e, 'subscriptionKey'), l.a.throwIfNullOrWhitespace(t, 'region');
                  var n = new m();
                  return (
                    n.properties.setProperty(f.a.SpeechServiceConnection_Key, e),
                    n.properties.setProperty(f.a.SpeechServiceConnection_Region, t),
                    n
                  );
                },
              },
              {
                key: 'fromAuthorizationToken',
                value: function (e, t) {
                  l.a.throwIfNullOrWhitespace(e, 'authorizationToken'), l.a.throwIfNullOrWhitespace(t, 'region');
                  var n = new m();
                  return (
                    n.properties.setProperty(f.a.SpeechServiceAuthorization_Token, e),
                    n.properties.setProperty(f.a.SpeechServiceConnection_Region, t),
                    n
                  );
                },
              },
              {
                key: 'fromHost',
                value: function (e, t) {
                  l.a.throwIfNull(e, 'hostName');
                  var n = new m();
                  return (
                    n.setProperty(
                      f.a.SpeechServiceConnection_Host,
                      e.protocol + '//' + e.hostname + ('' === e.port ? '' : ':' + e.port)
                    ),
                    void 0 !== t && n.setProperty(f.a.SpeechServiceConnection_Key, t),
                    n
                  );
                },
              },
              {
                key: 'fromEndpoint',
                value: function (e, t) {
                  l.a.throwIfNull(e, 'endpoint'), l.a.throwIfNull(t, 'subscriptionKey');
                  var n = new m();
                  return (
                    n.properties.setProperty(f.a.SpeechServiceConnection_Endpoint, e.href),
                    n.properties.setProperty(f.a.SpeechServiceConnection_Key, t),
                    n
                  );
                },
              },
            ]),
            n
          );
        })(d),
        m = (function (e) {
          Object(s.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            return (
              Object(o.a)(this, n),
              ((e = t.call(this)).privSpeechProperties = new p.a()),
              (e.outputFormat = r.Simple),
              e
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: 'authorizationToken',
                set: function (e) {
                  l.a.throwIfNullOrWhitespace(e, 'value'),
                    this.privSpeechProperties.setProperty(f.a.SpeechServiceAuthorization_Token, e);
                },
              },
              {
                key: 'speechRecognitionLanguage',
                get: function () {
                  return this.privSpeechProperties.getProperty(f.a[f.a.SpeechServiceConnection_RecoLanguage]);
                },
                set: function (e) {
                  l.a.throwIfNullOrWhitespace(e, 'value'),
                    this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_RecoLanguage, e);
                },
              },
              {
                key: 'subscriptionKey',
                get: function () {
                  return this.privSpeechProperties.getProperty(f.a[f.a.SpeechServiceConnection_Key]);
                },
              },
              {
                key: 'outputFormat',
                get: function () {
                  return r[this.privSpeechProperties.getProperty(c.OutputFormatPropertyName, void 0)];
                },
                set: function (e) {
                  this.privSpeechProperties.setProperty(c.OutputFormatPropertyName, r[e]);
                },
              },
              {
                key: 'endpointId',
                get: function () {
                  return this.privSpeechProperties.getProperty(f.a.SpeechServiceConnection_EndpointId);
                },
                set: function (e) {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_EndpointId, e);
                },
              },
              {
                key: 'addTargetLanguage',
                value: function (e) {
                  l.a.throwIfNullOrWhitespace(e, 'value');
                  var t = this.targetLanguages;
                  t.push(e),
                    this.privSpeechProperties.setProperty(
                      f.a.SpeechServiceConnection_TranslationToLanguages,
                      t.join(',')
                    );
                },
              },
              {
                key: 'targetLanguages',
                get: function () {
                  return void 0 !==
                    this.privSpeechProperties.getProperty(f.a.SpeechServiceConnection_TranslationToLanguages, void 0)
                    ? this.privSpeechProperties
                        .getProperty(f.a.SpeechServiceConnection_TranslationToLanguages)
                        .split(',')
                    : [];
                },
              },
              {
                key: 'voiceName',
                get: function () {
                  return this.getProperty(f.a[f.a.SpeechServiceConnection_TranslationVoice]);
                },
                set: function (e) {
                  l.a.throwIfNullOrWhitespace(e, 'value'),
                    this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_TranslationVoice, e);
                },
              },
              {
                key: 'region',
                get: function () {
                  return this.privSpeechProperties.getProperty(f.a.SpeechServiceConnection_Region);
                },
              },
              {
                key: 'setProxy',
                value: function (e, t, n, r) {
                  this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyHostName], e),
                    this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyPort], t),
                    this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyUserName], n),
                    this.setProperty(f.a[f.a.SpeechServiceConnection_ProxyPassword], r);
                },
              },
              {
                key: 'getProperty',
                value: function (e, t) {
                  return this.privSpeechProperties.getProperty(e, t);
                },
              },
              {
                key: 'setProperty',
                value: function (e, t) {
                  this.privSpeechProperties.setProperty(e, t);
                },
              },
              {
                key: 'properties',
                get: function () {
                  return this.privSpeechProperties;
                },
              },
              { key: 'close', value: function () {} },
              {
                key: 'setServiceProperty',
                value: function (e, t, n) {
                  var r = JSON.parse(this.privSpeechProperties.getProperty(c.ServicePropertiesPropertyName, '{}'));
                  (r[e] = t), this.privSpeechProperties.setProperty(c.ServicePropertiesPropertyName, JSON.stringify(r));
                },
              },
              {
                key: 'setProfanity',
                value: function (e) {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceResponse_ProfanityOption, i[e]);
                },
              },
              {
                key: 'enableAudioLogging',
                value: function () {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_EnableAudioLogging, 'true');
                },
              },
              {
                key: 'requestWordLevelTimestamps',
                value: function () {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceResponse_RequestWordLevelTimestamps, 'true');
                },
              },
              {
                key: 'enableDictation',
                value: function () {
                  this.privSpeechProperties.setProperty(c.ForceDictationPropertyName, 'true');
                },
              },
              {
                key: 'speechSynthesisLanguage',
                get: function () {
                  return this.privSpeechProperties.getProperty(f.a.SpeechServiceConnection_SynthLanguage);
                },
                set: function (e) {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_SynthLanguage, e);
                },
              },
              {
                key: 'speechSynthesisVoiceName',
                get: function () {
                  return this.privSpeechProperties.getProperty(f.a.SpeechServiceConnection_SynthVoice);
                },
                set: function (e) {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_SynthVoice, e);
                },
              },
              {
                key: 'speechSynthesisOutputFormat',
                get: function () {
                  return h.a[
                    this.privSpeechProperties.getProperty(f.a.SpeechServiceConnection_SynthOutputFormat, void 0)
                  ];
                },
                set: function (e) {
                  this.privSpeechProperties.setProperty(f.a.SpeechServiceConnection_SynthOutputFormat, h.a[e]);
                },
              },
            ]),
            n
          );
        })(y);
    },
  ],
]);
//# sourceMappingURL=2.ea17d9ca.chunk.js.map
