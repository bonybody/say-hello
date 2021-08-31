(this['webpackJsonpsay-hello'] = this['webpackJsonpsay-hello'] || []).push([
  [0],
  {
    129: function (e, a, n) {},
    148: function (e, a, n) {
      'use strict';
      n.r(a);
      var t,
        c = n(5),
        l = n.n(c),
        i = n(85),
        o = n.n(i),
        s = (n(129), n(98)),
        r = n(16),
        u = n(43),
        b = n(156),
        j = n(50),
        d = n.n(j),
        v = n(10),
        h = function (e) {
          var a = e.text,
            n = e.accent,
            t = e.onClick;
          return Object(v.jsx)('button', {
            type: 'button',
            className: ''.concat(d.a.button, ' ').concat(n ? d.a.accent : d.a.primary),
            onClick: null !== t && void 0 !== t ? t : void 0,
            children: a,
          });
        },
        m = function (e) {
          var a = e.text,
            n = e.accent,
            t = void 0 !== n && n,
            c = e.onClick,
            l = void 0 === c ? void 0 : c;
          return Object(v.jsx)(h, { text: a, accent: t, onClick: l });
        },
        p = n(29),
        _ = n.n(p),
        f = n.p + 'static/media/logo.b59fdaf7.svg',
        x = n(157),
        O = '5720c7866e304029a4dc25b553e0e73e',
        g = 'japaneast';
      (t = x.a.fromSubscription(O, g)).speechRecognitionLanguage = 'ja-JP';
      var y = n(58),
        C = n.n(y),
        N = function (e) {
          var a = e.value,
            n = e.options,
            t = e.onChangeHandle,
            c = e.id;
          return Object(v.jsx)('select', {
            id: c,
            className: ''.concat(C.a.select),
            value: a,
            onChange: t,
            children: n.map(function (e, a) {
              return Object(v.jsx)(
                'option',
                { className: ''.concat(C.a.option), value: e.value, children: e.label },
                a
              );
            }),
          });
        },
        S = function (e) {
          var a = e.value,
            n = e.options,
            t = e.onChangeHandle,
            c = e.id;
          return Object(v.jsx)(N, { id: c, value: a, options: n, onChangeHandle: t });
        },
        k = function () {
          var e = Object(c.useState)('en'),
            a = Object(u.a)(e, 2),
            n = a[0],
            l = a[1],
            i = Object(c.useState)(null),
            o = Object(u.a)(i, 2),
            s = o[0],
            r = o[1],
            j = Object(c.useState)(''),
            d = Object(u.a)(j, 2),
            h = d[0],
            p = d[1],
            x = Object(c.useState)(!1),
            O = Object(u.a)(x, 2),
            g = O[0],
            y = O[1];
          return Object(v.jsx)('div', {
            className: _.a.wrap,
            children: Object(v.jsxs)('div', {
              children: [
                Object(v.jsx)('p', {
                  className: _.a.image,
                  children: Object(v.jsx)('img', { src: f, alt: 'SayHello' }),
                }),
                Object(v.jsx)('p', {
                  className: _.a.catchCopy,
                  children: '\u3042\u306a\u305f\u3068\u4e16\u754c\u3092\u3061\u3087\u3063\u3068\u8eab\u8fd1\u306b',
                }),
                Object(v.jsxs)('div', {
                  className: _.a.content,
                  children: [
                    Object(v.jsx)('p', {
                      className: _.a.heading,
                      children:
                        '\u300c\u7ffb\u8a33\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u4e00\u8a00\u558b\u3063\u3066\u307f\u3088\u3046',
                    }),
                    Object(v.jsxs)('div', {
                      className: _.a.formSection,
                      children: [
                        Object(v.jsx)('p', { className: _.a.label, children: '\u7ffb\u8a33\u7d50\u679c' }),
                        Object(v.jsx)('p', {
                          children:
                            null !== s && void 0 !== s ? s : '\u7ffb\u8a33\u3057\u3066\u304f\u3060\u3055\u3044....',
                        }),
                        Object(v.jsx)('p', { children: s ? '\u7ffb\u8a33\u524d\uff1a'.concat(h) : '' }),
                      ],
                    }),
                    Object(v.jsxs)('div', {
                      className: _.a.formSection,
                      children: [
                        Object(v.jsx)('label', {
                          className: ''.concat(_.a.label),
                          htmlFor: 'target',
                          children: '\u7ffb\u8a33\u3057\u305f\u3044\u8a00\u8a9e',
                        }),
                        Object(v.jsx)(S, {
                          id: 'target',
                          value: n,
                          options: [
                            { value: 'en', label: '\u82f1\u8a9e' },
                            { value: 'fr', label: '\u30d5\u30e9\u30f3\u30b9\u8a9e' },
                            { value: 'de', label: '\u30c9\u30a4\u30c4\u8a9e' },
                            { value: 'ko', label: '\u97d3\u56fd\u8a9e' },
                            {
                              value: 'pt-pt',
                              label: '\u30dd\u30eb\u30c8\u30ac\u30eb\u8a9e(\u30dd\u30eb\u30c8\u30ac\u30eb)',
                            },
                            { value: 'pt-br', label: '\u30dd\u30eb\u30c8\u30ac\u30eb\u8a9e(\u30d6\u30e9\u30b8\u30eb)' },
                            { value: 'zh-Hans', label: '\u7c21\u4f53\u4e2d\u56fd\u8a9e' },
                            { value: 'zh-Hant', label: '\u4e2d\u56fd\u8a9e (\u7e41\u4f53\u5b57)' },
                            { value: 'it', label: '\u30a4\u30bf\u30ea\u30a2\u8a9e' },
                            { value: 'es', label: '\u30b9\u30da\u30a4\u30f3\u8a9e' },
                            { value: 'es', label: '\u30b9\u30da\u30a4\u30f3\u8a9e' },
                            { value: 'ar', label: '\u30a2\u30e9\u30d3\u30a2\u8a9e' },
                          ],
                          onChangeHandle: function (e) {
                            l(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(v.jsx)('div', {
                      className: ''.concat(_.a.formSection, ' ').concat(_.a.button),
                      children: Object(v.jsx)(m, {
                        text: g ? '\u7ffb\u8a33\u4e2d...' : '\u7ffb\u8a33',
                        onClick: function () {
                          var e;
                          y(!0), t.addTargetLanguage(n);
                          var a = new b.a(t);
                          null === (e = a) ||
                            void 0 === e ||
                            e.recognizeOnceAsync(
                              function (e) {
                                var t,
                                  c = e.translations,
                                  l = e.text,
                                  i = c.get(n);
                                p(l), r(i), null === (t = a) || void 0 === t || t.close(), (a = void 0), y(!1);
                              },
                              function (e) {
                                var n;
                                null === (n = a) || void 0 === n || n.close(), (a = void 0), y(!1);
                              }
                            );
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        H = n(97),
        w = n.n(H),
        J = function () {
          return Object(v.jsx)(s.a, {
            children: Object(v.jsx)('div', {
              className: w.a.layout,
              children: Object(v.jsx)(r.c, { children: Object(v.jsx)(r.a, { exact: !0, path: '/', component: k }) }),
            }),
          });
        },
        L = function (e) {
          e &&
            n
              .e(3)
              .then(n.bind(null, 158))
              .then(function (a) {
                var n = a.getCLS,
                  t = a.getFID,
                  c = a.getFCP,
                  l = a.getLCP,
                  i = a.getTTFB;
                n(e), t(e), c(e), l(e), i(e);
              })
              .catch(function () {
                return !1;
              });
        };
      n(147);
      o.a.render(Object(v.jsx)(l.a.StrictMode, { children: Object(v.jsx)(J, {}) }), document.getElementById('root')),
        L();
    },
    29: function (e, a, n) {
      e.exports = {
        wrap: 'main_wrap__3k9TW',
        image: 'main_image__JDgfa',
        catchCopy: 'main_catchCopy__3Nsyg',
        formSection: 'main_formSection__2f5xY',
        heading: 'main_heading__kAadh',
        label: 'main_label__1RlG3',
        button: 'main_button__3Z9_B',
        content: 'main_content__1UhR_',
      };
    },
    35: function (e, a) {},
    39: function (e, a) {},
    50: function (e, a, n) {
      e.exports = { button: 'main_button__WKW16', primary: 'main_primary__1J1kq', accent: 'main_accent__1WUSs' };
    },
    58: function (e, a, n) {
      e.exports = { select: 'main_select__aiGLU' };
    },
    88: function (e, a) {},
    90: function (e, a) {},
    92: function (e, a) {},
    93: function (e, a) {},
    94: function (e, a) {},
    95: function (e, a) {},
    97: function (e, a, n) {
      e.exports = { layout: 'App_layout__3IbE3' };
    },
  },
  [[148, 1, 2]],
]);
//# sourceMappingURL=main.bbd85aa1.chunk.js.map
