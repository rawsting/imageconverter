/*!
 * 
 * ==============================
 * List of third party licenses - https://ui.resizing.app/ThirdPartyNotices.txt
 * ==============================
 * 
 */
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "/",
    n(n.s = 16)
}([function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "render", function() {
        return U
    }),
    n.d(e, "hydrate", function() {
        return P
    }),
    n.d(e, "createElement", function() {
        return g
    }),
    n.d(e, "h", function() {
        return g
    }),
    n.d(e, "Fragment", function() {
        return w
    }),
    n.d(e, "createRef", function() {
        return v
    }),
    n.d(e, "isValidElement", function() {
        return o
    }),
    n.d(e, "Component", function() {
        return b
    }),
    n.d(e, "cloneElement", function() {
        return H
    }),
    n.d(e, "createContext", function() {
        return F
    }),
    n.d(e, "toChildArray", function() {
        return B
    }),
    n.d(e, "_unmount", function() {
        return N
    }),
    n.d(e, "options", function() {
        return i
    });
    var i, o, r, a, s, l, c, u, p = {}, h = [], d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function f(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function _(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function g(t, e, n) {
        var i, o = arguments, r = {};
        for (i in e)
            "key" !== i && "ref" !== i && (r[i] = e[i]);
        if (arguments.length > 3)
            for (n = [n],
            i = 3; i < arguments.length; i++)
                n.push(o[i]);
        if (null != n && (r.children = n),
        "function" == typeof t && null != t.defaultProps)
            for (i in t.defaultProps)
                void 0 === r[i] && (r[i] = t.defaultProps[i]);
        return m(t, r, e && e.key, e && e.ref, null)
    }
    function m(t, e, n, o, r) {
        var a = {
            type: t,
            props: e,
            key: n,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: r
        };
        return null == r && (a.__v = a),
        i.vnode && i.vnode(a),
        a
    }
    function v() {
        return {}
    }
    function w(t) {
        return t.children
    }
    function b(t, e) {
        this.props = t,
        this.context = e
    }
    function y(t, e) {
        if (null == e)
            return t.__ ? y(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e)
                return n.__e;
        return "function" == typeof t.type ? y(t) : null
    }
    function A(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
            for (t.__e = t.__c.base = null,
            e = 0; e < t.__k.length; e++)
                if (null != (n = t.__k[e]) && null != n.__e) {
                    t.__e = t.__c.base = n.__e;
                    break
                }
            return A(t)
        }
    }
    function x(t) {
        (!t.__d && (t.__d = !0) && r.push(t) && !a++ || l !== i.debounceRendering) && ((l = i.debounceRendering) || s)(C)
    }
    function C() {
        for (var t; a = r.length; )
            t = r.sort(function(t, e) {
                return t.__v.__b - e.__v.__b
            }),
            r = [],
            t.some(function(t) {
                var e, n, i, o, r, a, s;
                t.__d && (a = (r = (e = t).__v).__e,
                (s = e.__P) && (n = [],
                (i = f({}, r)).__v = i,
                o = M(s, r, i, e.__n, void 0 !== s.ownerSVGElement, null, n, null == a ? y(r) : a),
                O(n, r),
                o != a && A(r)))
            })
    }
    function I(t, e, n, i, o, r, a, s, l) {
        var c, u, d, f, g, m, v, w = n && n.__k || h, b = w.length;
        if (s == p && (s = null != r ? r[0] : b ? y(n, 0) : null),
        c = 0,
        e.__k = B(e.__k, function(n) {
            if (null != n) {
                if (n.__ = e,
                n.__b = e.__b + 1,
                null === (d = w[c]) || d && n.key == d.key && n.type === d.type)
                    w[c] = void 0;
                else
                    for (u = 0; u < b; u++) {
                        if ((d = w[u]) && n.key == d.key && n.type === d.type) {
                            w[u] = void 0;
                            break
                        }
                        d = null
                    }
                if (f = M(t, n, d = d || p, i, o, r, a, s, l),
                (u = n.ref) && d.ref != u && (v || (v = []),
                d.ref && v.push(d.ref, null, n),
                v.push(u, n.__c || f, n)),
                null != f) {
                    var h;
                    if (null == m && (m = f),
                    void 0 !== n.__d)
                        h = n.__d,
                        n.__d = void 0;
                    else if (r == d || f != s || null == f.parentNode) {
                        t: if (null == s || s.parentNode !== t)
                            t.appendChild(f),
                            h = null;
                        else {
                            for (g = s,
                            u = 0; (g = g.nextSibling) && u < b; u += 2)
                                if (g == f)
                                    break t;
                            t.insertBefore(f, s),
                            h = s
                        }
                        "option" == e.type && (t.value = "")
                    }
                    s = void 0 !== h ? h : f.nextSibling,
                    "function" == typeof e.type && (e.__d = s)
                } else
                    s && d.__e == s && s.parentNode != t && (s = y(d))
            }
            return c++,
            n
        }),
        e.__e = m,
        null != r && "function" != typeof e.type)
            for (c = r.length; c--; )
                null != r[c] && _(r[c]);
        for (c = b; c--; )
            null != w[c] && N(w[c], w[c]);
        if (v)
            for (c = 0; c < v.length; c++)
                z(v[c], v[++c], v[++c])
    }
    function B(t, e, n) {
        if (null == n && (n = []),
        null == t || "boolean" == typeof t)
            e && n.push(e(null));
        else if (Array.isArray(t))
            for (var i = 0; i < t.length; i++)
                B(t[i], e, n);
        else
            n.push(e ? e("string" == typeof t || "number" == typeof t ? m(null, t, null, null, t) : null != t.__e || null != t.__c ? m(t.type, t.props, t.key, null, t.__v) : t) : t);
        return n
    }
    function E(t, e, n) {
        "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === d.test(e) ? n + "px" : null == n ? "" : n
    }
    function k(t, e, n, i, o) {
        var r, a, s, l, c;
        if (o ? "className" === e && (e = "class") : "class" === e && (e = "className"),
        "style" === e)
            if (r = t.style,
            "string" == typeof n)
                r.cssText = n;
            else {
                if ("string" == typeof i && (r.cssText = "",
                i = null),
                i)
                    for (l in i)
                        n && l in n || E(r, l, "");
                if (n)
                    for (c in n)
                        i && n[c] === i[c] || E(r, c, n[c])
            }
        else
            "o" === e[0] && "n" === e[1] ? (a = e !== (e = e.replace(/Capture$/, "")),
            s = e.toLowerCase(),
            e = (s in t ? s : e).slice(2),
            n ? (i || t.addEventListener(e, S, a),
            (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, S, a)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !o && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n))
    }
    function S(t) {
        this.l[t.type](i.event ? i.event(t) : t)
    }
    function M(t, e, n, o, r, a, s, l, c) {
        var u, p, h, d, _, g, m, v, y, A, x = e.type;
        if (void 0 !== e.constructor)
            return null;
        (u = i.__b) && u(e);
        try {
            t: if ("function" == typeof x) {
                if (v = e.props,
                y = (u = x.contextType) && o[u.__c],
                A = u ? y ? y.props.value : u.__ : o,
                n.__c ? m = (p = e.__c = n.__c).__ = p.__E : ("prototype"in x && x.prototype.render ? e.__c = p = new x(v,A) : (e.__c = p = new b(v,A),
                p.constructor = x,
                p.render = j),
                y && y.sub(p),
                p.props = v,
                p.state || (p.state = {}),
                p.context = A,
                p.__n = o,
                h = p.__d = !0,
                p.__h = []),
                null == p.__s && (p.__s = p.state),
                null != x.getDerivedStateFromProps && (p.__s == p.state && (p.__s = f({}, p.__s)),
                f(p.__s, x.getDerivedStateFromProps(v, p.__s))),
                d = p.props,
                _ = p.state,
                h)
                    null == x.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(),
                    null != p.componentDidMount && p.__h.push(p.componentDidMount);
                else {
                    if (null == x.getDerivedStateFromProps && v !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(v, A),
                    !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(v, p.__s, A) || e.__v === n.__v && !p.__) {
                        for (p.props = v,
                        p.state = p.__s,
                        e.__v !== n.__v && (p.__d = !1),
                        p.__v = e,
                        e.__e = n.__e,
                        e.__k = n.__k,
                        p.__h.length && s.push(p),
                        u = 0; u < e.__k.length; u++)
                            e.__k[u] && (e.__k[u].__ = e);
                        break t
                    }
                    null != p.componentWillUpdate && p.componentWillUpdate(v, p.__s, A),
                    null != p.componentDidUpdate && p.__h.push(function() {
                        p.componentDidUpdate(d, _, g)
                    })
                }
                p.context = A,
                p.props = v,
                p.state = p.__s,
                (u = i.__r) && u(e),
                p.__d = !1,
                p.__v = e,
                p.__P = t,
                u = p.render(p.props, p.state, p.context),
                e.__k = null != u && u.type == w && null == u.key ? u.props.children : Array.isArray(u) ? u : [u],
                null != p.getChildContext && (o = f(f({}, o), p.getChildContext())),
                h || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)),
                I(t, e, n, o, r, a, s, l, c),
                p.base = e.__e,
                p.__h.length && s.push(p),
                m && (p.__E = p.__ = null),
                p.__e = !1
            } else
                null == a && e.__v === n.__v ? (e.__k = n.__k,
                e.__e = n.__e) : e.__e = D(n.__e, e, n, o, r, a, s, c);
            (u = i.diffed) && u(e)
        } catch (t) {
            e.__v = null,
            i.__e(t, e, n)
        }
        return e.__e
    }
    function O(t, e) {
        i.__c && i.__c(e, t),
        t.some(function(e) {
            try {
                t = e.__h,
                e.__h = [],
                t.some(function(t) {
                    t.call(e)
                })
            } catch (t) {
                i.__e(t, e.__v)
            }
        })
    }
    function D(t, e, n, i, o, r, a, s) {
        var l, c, u, d, f, _ = n.props, g = e.props;
        if (o = "svg" === e.type || o,
        null != r)
            for (l = 0; l < r.length; l++)
                if (null != (c = r[l]) && ((null === e.type ? 3 === c.nodeType : c.localName === e.type) || t == c)) {
                    t = c,
                    r[l] = null;
                    break
                }
        if (null == t) {
            if (null === e.type)
                return document.createTextNode(g);
            t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, g.is && {
                is: g.is
            }),
            r = null,
            s = !1
        }
        if (null === e.type)
            _ !== g && t.data != g && (t.data = g);
        else {
            if (null != r && (r = h.slice.call(t.childNodes)),
            u = (_ = n.props || p).dangerouslySetInnerHTML,
            d = g.dangerouslySetInnerHTML,
            !s) {
                if (_ === p)
                    for (_ = {},
                    f = 0; f < t.attributes.length; f++)
                        _[t.attributes[f].name] = t.attributes[f].value;
                (d || u) && (d && u && d.__html == u.__html || (t.innerHTML = d && d.__html || ""))
            }
            (function(t, e, n, i, o) {
                var r;
                for (r in n)
                    "children" === r || "key" === r || r in e || k(t, r, null, n[r], i);
                for (r in e)
                    o && "function" != typeof e[r] || "children" === r || "key" === r || "value" === r || "checked" === r || n[r] === e[r] || k(t, r, e[r], n[r], i)
            }
            )(t, g, _, o, s),
            e.__k = e.props.children,
            d || I(t, e, n, i, "foreignObject" !== e.type && o, r, a, p, s),
            s || ("value"in g && void 0 !== g.value && g.value !== t.value && (t.value = null == g.value ? "" : g.value),
            "checked"in g && void 0 !== g.checked && g.checked !== t.checked && (t.checked = g.checked))
        }
        return t
    }
    function z(t, e, n) {
        try {
            "function" == typeof t ? t(e) : t.current = e
        } catch (t) {
            i.__e(t, n)
        }
    }
    function N(t, e, n) {
        var o, r, a;
        if (i.unmount && i.unmount(t),
        (o = t.ref) && (o.current && o.current !== t.__e || z(o, null, e)),
        n || "function" == typeof t.type || (n = null != (r = t.__e)),
        t.__e = t.__d = void 0,
        null != (o = t.__c)) {
            if (o.componentWillUnmount)
                try {
                    o.componentWillUnmount()
                } catch (t) {
                    i.__e(t, e)
                }
            o.base = o.__P = null
        }
        if (o = t.__k)
            for (a = 0; a < o.length; a++)
                o[a] && N(o[a], e, n);
        null != r && _(r)
    }
    function j(t, e, n) {
        return this.constructor(t, n)
    }
    function U(t, e, n) {
        var o, r, a;
        i.__ && i.__(t, e),
        r = (o = n === c) ? null : n && n.__k || e.__k,
        t = g(w, null, [t]),
        a = [],
        M(e, (o ? e : n || e).__k = t, r || p, p, void 0 !== e.ownerSVGElement, n && !o ? [n] : r ? null : h.slice.call(e.childNodes), a, n || p, o),
        O(a, t)
    }
    function P(t, e) {
        U(t, e, c)
    }
    function H(t, e) {
        return e = f(f({}, t.props), e),
        arguments.length > 2 && (e.children = h.slice.call(arguments, 2)),
        m(t.type, e, e.key || t.key, e.ref || t.ref, null)
    }
    function F(t) {
        var e = {}
          , n = {
            __c: "__cC" + u++,
            __: t,
            Consumer: function(t, e) {
                return t.children(e)
            },
            Provider: function(t) {
                var i, o = this;
                return this.getChildContext || (i = [],
                this.getChildContext = function() {
                    return e[n.__c] = o,
                    e
                }
                ,
                this.shouldComponentUpdate = function(t) {
                    o.props.value !== t.value && i.some(function(e) {
                        e.context = t.value,
                        x(e)
                    })
                }
                ,
                this.sub = function(t) {
                    i.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function() {
                        i.splice(i.indexOf(t), 1),
                        e && e.call(t)
                    }
                }
                ),
                t.children
            }
        };
        return n.Consumer.contextType = n,
        n
    }
    i = {
        __e: function(t, e) {
            for (var n, i; e = e.__; )
                if ((n = e.__c) && !n.__)
                    try {
                        if (n.constructor && null != n.constructor.getDerivedStateFromError && (i = !0,
                        n.setState(n.constructor.getDerivedStateFromError(t))),
                        null != n.componentDidCatch && (i = !0,
                        n.componentDidCatch(t)),
                        i)
                            return x(n.__E = n)
                    } catch (e) {
                        t = e
                    }
            throw t
        }
    },
    o = function(t) {
        return null != t && void 0 === t.constructor
    }
    ,
    b.prototype.setState = function(t, e) {
        var n;
        n = this.__s !== this.state ? this.__s : this.__s = f({}, this.state),
        "function" == typeof t && (t = t(n, this.props)),
        t && f(n, t),
        null != t && this.__v && (e && this.__h.push(e),
        x(this))
    }
    ,
    b.prototype.forceUpdate = function(t) {
        this.__v && (this.__e = !0,
        t && this.__h.push(t),
        x(this))
    }
    ,
    b.prototype.render = w,
    r = [],
    a = 0,
    s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    c = p,
    u = 0
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "useState", function() {
        return d
    }),
    n.d(e, "useReducer", function() {
        return f
    }),
    n.d(e, "useEffect", function() {
        return _
    }),
    n.d(e, "useLayoutEffect", function() {
        return g
    }),
    n.d(e, "useRef", function() {
        return m
    }),
    n.d(e, "useImperativeHandle", function() {
        return v
    }),
    n.d(e, "useMemo", function() {
        return w
    }),
    n.d(e, "useCallback", function() {
        return b
    }),
    n.d(e, "useContext", function() {
        return y
    }),
    n.d(e, "useDebugValue", function() {
        return A
    }),
    n.d(e, "useErrorBoundary", function() {
        return x
    });
    var i, o, r, a = n(0), s = [], l = a.options.__r, c = a.options.diffed, u = a.options.__c, p = a.options.unmount;
    function h(t) {
        a.options.__h && a.options.__h(o);
        var e = o.__H || (o.__H = {
            __: [],
            __h: []
        });
        return t >= e.__.length && e.__.push({}),
        e.__[t]
    }
    function d(t) {
        return f(k, t)
    }
    function f(t, e, n) {
        var r = h(i++);
        return r.__c || (r.__c = o,
        r.__ = [n ? n(e) : k(void 0, e), function(e) {
            var n = t(r.__[0], e);
            r.__[0] !== n && (r.__[0] = n,
            r.__c.setState({}))
        }
        ]),
        r.__
    }
    function _(t, e) {
        var n = h(i++);
        E(n.__H, e) && (n.__ = t,
        n.__H = e,
        o.__H.__h.push(n))
    }
    function g(t, e) {
        var n = h(i++);
        E(n.__H, e) && (n.__ = t,
        n.__H = e,
        o.__h.push(n))
    }
    function m(t) {
        return w(function() {
            return {
                current: t
            }
        }, [])
    }
    function v(t, e, n) {
        g(function() {
            "function" == typeof t ? t(e()) : t && (t.current = e())
        }, null == n ? n : n.concat(t))
    }
    function w(t, e) {
        var n = h(i++);
        return E(n.__H, e) ? (n.__H = e,
        n.__h = t,
        n.__ = t()) : n.__
    }
    function b(t, e) {
        return w(function() {
            return t
        }, e)
    }
    function y(t) {
        var e = o.context[t.__c];
        if (!e)
            return t.__;
        var n = h(i++);
        return null == n.__ && (n.__ = !0,
        e.sub(o)),
        e.props.value
    }
    function A(t, e) {
        a.options.useDebugValue && a.options.useDebugValue(e ? e(t) : t)
    }
    function x(t) {
        var e = h(i++)
          , n = d();
        return e.__ = t,
        o.componentDidCatch || (o.componentDidCatch = function(t) {
            e.__ && e.__(t),
            n[1](t)
        }
        ),
        [n[0], function() {
            n[1](void 0)
        }
        ]
    }
    function C() {
        s.some(function(t) {
            if (t.__P)
                try {
                    t.__H.__h.forEach(I),
                    t.__H.__h.forEach(B),
                    t.__H.__h = []
                } catch (e) {
                    return t.__H.__h = [],
                    a.options.__e(e, t.__v),
                    !0
                }
        }),
        s = []
    }
    function I(t) {
        t.t && t.t()
    }
    function B(t) {
        var e = t.__();
        "function" == typeof e && (t.t = e)
    }
    function E(t, e) {
        return !t || e.some(function(e, n) {
            return e !== t[n]
        })
    }
    function k(t, e) {
        return "function" == typeof e ? e(t) : e
    }
    a.options.__r = function(t) {
        l && l(t),
        i = 0,
        (o = t.__c).__H && (o.__H.__h.forEach(I),
        o.__H.__h.forEach(B),
        o.__H.__h = [])
    }
    ,
    a.options.diffed = function(t) {
        c && c(t);
        var e = t.__c;
        if (e) {
            var n = e.__H;
            n && n.__h.length && (1 !== s.push(e) && r === a.options.requestAnimationFrame || ((r = a.options.requestAnimationFrame) || function(t) {
                var e, n = function() {
                    clearTimeout(i),
                    cancelAnimationFrame(e),
                    setTimeout(t)
                }, i = setTimeout(n, 100);
                "undefined" != typeof window && (e = requestAnimationFrame(n))
            }
            )(C))
        }
    }
    ,
    a.options.__c = function(t, e) {
        e.some(function(t) {
            try {
                t.__h.forEach(I),
                t.__h = t.__h.filter(function(t) {
                    return !t.__ || B(t)
                })
            } catch (n) {
                e.some(function(t) {
                    t.__h && (t.__h = [])
                }),
                e = [],
                a.options.__e(n, t.__v)
            }
        }),
        u && u(t, e)
    }
    ,
    a.options.unmount = function(t) {
        p && p(t);
        var e = t.__c;
        if (e) {
            var n = e.__H;
            if (n)
                try {
                    n.__.forEach(function(t) {
                        return t.t && t.t()
                    })
                } catch (t) {
                    a.options.__e(t, e.__v)
                }
        }
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || ""
                      , i = t[3];
                    if (!i)
                        return n;
                    if (e && "function" == typeof btoa) {
                        var o = (a = i,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */")
                          , r = i.sources.map(function(t) {
                            return "/*# sourceURL=" + i.sourceRoot + t + " */"
                        });
                        return [n].concat(r).concat([o]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }
        ,
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                null != a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a))
            }
        }
        ,
        e
    }
}
, function(t, e, n) {
    var i, o, r = {}, a = (i = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === o && (o = i.apply(this, arguments)),
        o
    }
    ), s = function(t) {
        var e = {};
        return function(t, n) {
            if ("function" == typeof t)
                return t();
            if (void 0 === e[t]) {
                var i = function(t, e) {
                    return e ? e.querySelector(t) : document.querySelector(t)
                }
                .call(this, t, n);
                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                    try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                e[t] = i
            }
            return e[t]
        }
    }(), l = null, c = 0, u = [], p = n(23);
    function h(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
              , o = r[i.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++)
                    o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++)
                    o.parts.push(v(i.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < i.parts.length; a++)
                    s.push(v(i.parts[a], e));
                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function d(t, e) {
        for (var n = [], i = {}, o = 0; o < t.length; o++) {
            var r = t[o]
              , a = e.base ? r[0] + e.base : r[0]
              , s = {
                css: r[1],
                media: r[2],
                sourceMap: r[3]
            };
            i[a] ? i[a].parts.push(s) : n.push(i[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
    function f(t, e) {
        var n = s(t.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = u[u.length - 1];
        if ("top" === t.insertAt)
            i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
            u.push(e);
        else if ("bottom" === t.insertAt)
            n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(t.insertAt.before, n);
            n.insertBefore(e, o)
        }
    }
    function _(t) {
        if (null === t.parentNode)
            return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1)
    }
    function g(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce) {
            var i = function() {
                0;
                return n.nc
            }();
            i && (t.attrs.nonce = i)
        }
        return m(e, t.attrs),
        f(t, e),
        e
    }
    function m(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }
    function v(t, e) {
        var n, i, o, r;
        if (e.transform && t.css) {
            if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css)))
                return function() {}
                ;
            t.css = r
        }
        if (e.singleton) {
            var a = c++;
            n = l || (l = g(e)),
            i = y.bind(null, n, a, !1),
            o = y.bind(null, n, a, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                t.attrs.rel = "stylesheet",
                m(e, t.attrs),
                f(t, e),
                e
            }(e),
            i = function(t, e, n) {
                var i = n.css
                  , o = n.sourceMap
                  , r = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || r) && (i = p(i));
                o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([i],{
                    type: "text/css"
                })
                  , s = t.href;
                t.href = URL.createObjectURL(a),
                s && URL.revokeObjectURL(s)
            }
            .bind(null, n, e),
            o = function() {
                _(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = g(e),
            i = function(t, e) {
                var n = e.css
                  , i = e.media;
                i && t.setAttribute("media", i);
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, n),
            o = function() {
                _(n)
            }
            );
        return i(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                i(t = e)
            } else
                o()
        }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
        var n = d(t, e);
        return h(n, e),
        function(t) {
            for (var i = [], o = 0; o < n.length; o++) {
                var a = n[o];
                (s = r[a.id]).refs--,
                i.push(s)
            }
            t && h(d(t, e), e);
            for (o = 0; o < i.length; o++) {
                var s;
                if (0 === (s = i[o]).refs) {
                    for (var l = 0; l < s.parts.length; l++)
                        s.parts[l]();
                    delete r[s.id]
                }
            }
        }
    }
    ;
    var w, b = (w = [],
    function(t, e) {
        return w[t] = e,
        w.filter(Boolean).join("\n")
    }
    );
    function y(t, e, n, i) {
        var o = n ? "" : i.css;
        if (t.styleSheet)
            t.styleSheet.cssText = b(e, o);
        else {
            var r = document.createTextNode(o)
              , a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1)
      , o = n(0);
    function r(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function a(t, e) {
        for (var n in t)
            if ("__source" !== n && !(n in e))
                return !0;
        for (var i in e)
            if ("__source" !== i && t[i] !== e[i])
                return !0;
        return !1
    }
    !function(t) {
        var e, n;
        function i(e) {
            var n;
            return (n = t.call(this, e) || this).isPureReactComponent = !0,
            n
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        e.prototype.constructor = e,
        e.__proto__ = n,
        i.prototype.shouldComponentUpdate = function(t, e) {
            return a(this.props, t) || a(this.state, e)
        }
    }(o.Component);
    var s = o.options.__b;
    function l(t) {
        function e(e) {
            var n = r({}, e);
            return delete n.ref,
            t(n, e.ref)
        }
        return e.prototype.isReactComponent = e.t = !0,
        e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")",
        e
    }
    o.options.__b = function(t) {
        t.type && t.type.t && t.ref && (t.props.ref = t.ref,
        t.ref = null),
        s && s(t)
    }
    ;
    var c = function(t, e) {
        return t ? Object(o.toChildArray)(t).reduce(function(t, n, i) {
            return t.concat(e(n, i))
        }, []) : null
    }
      , u = (o.toChildArray,
    o.options.__e);
    function p(t) {
        return t && ((t = r({}, t)).__c = null,
        t.__k = t.__k && t.__k.map(p)),
        t
    }
    function h() {
        this.__u = 0,
        this.o = null,
        this.__b = null
    }
    function d(t) {
        var e = t.__.__c;
        return e && e.u && e.u(t)
    }
    function f() {
        this.i = null,
        this.l = null
    }
    o.options.__e = function(t, e, n) {
        if (t.then)
            for (var i, o = e; o = o.__; )
                if ((i = o.__c) && i.__c)
                    return i.__c(t, e.__c);
        u(t, e, n)
    }
    ,
    (h.prototype = new o.Component).__c = function(t, e) {
        var n = this;
        null == n.o && (n.o = []),
        n.o.push(e);
        var i = d(n.__v)
          , o = !1
          , r = function() {
            o || (o = !0,
            i ? i(a) : a())
        };
        e.__c = e.componentWillUnmount,
        e.componentWillUnmount = function() {
            r(),
            e.__c && e.__c()
        }
        ;
        var a = function() {
            var t;
            if (!--n.__u)
                for (n.__v.__k[0] = n.state.u,
                n.setState({
                    u: n.__b = null
                }); t = n.o.pop(); )
                    t.forceUpdate()
        };
        n.__u++ || n.setState({
            u: n.__b = n.__v.__k[0]
        }),
        t.then(r, r)
    }
    ,
    h.prototype.render = function(t, e) {
        return this.__b && (this.__v.__k[0] = p(this.__b),
        this.__b = null),
        [Object(o.createElement)(o.Component, null, e.u ? null : t.children), e.u && t.fallback]
    }
    ;
    var _ = function(t, e, n) {
        if (++n[1] === n[0] && t.l.delete(e),
        t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
            for (n = t.i; n; ) {
                for (; n.length > 3; )
                    n.pop()();
                if (n[1] < n[0])
                    break;
                t.i = n = n[2]
            }
    };
    (f.prototype = new o.Component).u = function(t) {
        var e = this
          , n = d(e.__v)
          , i = e.l.get(t);
        return i[0]++,
        function(o) {
            var r = function() {
                e.props.revealOrder ? (i.push(o),
                _(e, t, i)) : o()
            };
            n ? n(r) : r()
        }
    }
    ,
    f.prototype.render = function(t) {
        this.i = null,
        this.l = new Map;
        var e = Object(o.toChildArray)(t.children);
        t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
        for (var n = e.length; n--; )
            this.l.set(e[n], this.i = [1, 0, this.i]);
        return t.children
    }
    ,
    f.prototype.componentDidUpdate = f.prototype.componentDidMount = function() {
        var t = this;
        t.l.forEach(function(e, n) {
            _(t, n, e)
        })
    }
    ;
    !function() {
        function t() {}
        var e = t.prototype;
        e.getChildContext = function() {
            return this.props.context
        }
        ,
        e.render = function(t) {
            return t.children
        }
    }();
    var g = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    o.Component.prototype.isReactComponent = {};
    var m = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    var v = o.options.event;
    function w(t, e) {
        t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
            configurable: !1,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                this["UNSAFE_" + e] = t
            }
        })
    }
    o.options.event = function(t) {
        v && (t = v(t)),
        t.persist = function() {}
        ;
        var e = !1
          , n = !1
          , i = t.stopPropagation;
        t.stopPropagation = function() {
            i.call(t),
            e = !0
        }
        ;
        var o = t.preventDefault;
        return t.preventDefault = function() {
            o.call(t),
            n = !0
        }
        ,
        t.isPropagationStopped = function() {
            return e
        }
        ,
        t.isDefaultPrevented = function() {
            return n
        }
        ,
        t.nativeEvent = t
    }
    ;
    var b = {
        configurable: !0,
        get: function() {
            return this.class
        }
    }
      , y = o.options.vnode;
    o.options.vnode = function(t) {
        t.$$typeof = m;
        var e = t.type
          , n = t.props;
        if (e) {
            if (n.class != n.className && (b.enumerable = "className"in n,
            null != n.className && (n.class = n.className),
            Object.defineProperty(n, "className", b)),
            "function" != typeof e) {
                var i, r, a;
                for (a in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue),
                delete n.defaultValue),
                Array.isArray(n.value) && n.multiple && "select" === e && (Object(o.toChildArray)(n.children).forEach(function(t) {
                    -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0)
                }),
                delete n.value),
                n)
                    if (i = g.test(a))
                        break;
                if (i)
                    for (a in r = t.props = {},
                    n)
                        r[g.test(a) ? a.replace(/[A-Z0-9]/, "-$&").toLowerCase() : a] = n[a]
            }
            !function(e) {
                var n = t.type
                  , i = t.props;
                if (i && "string" == typeof n) {
                    var o = {};
                    for (var r in i)
                        /^on(Ani|Tra|Tou)/.test(r) && (i[r.toLowerCase()] = i[r],
                        delete i[r]),
                        o[r.toLowerCase()] = r;
                    if (o.ondoubleclick && (i.ondblclick = i[o.ondoubleclick],
                    delete i[o.ondoubleclick]),
                    o.onbeforeinput && (i.onbeforeinput = i[o.onbeforeinput],
                    delete i[o.onbeforeinput]),
                    o.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(i.type))) {
                        var a = o.oninput || "oninput";
                        i[a] || (i[a] = i[o.onchange],
                        delete i[o.onchange])
                    }
                }
            }(),
            "function" == typeof e && !e.m && e.prototype && (w(e.prototype, "componentWillMount"),
            w(e.prototype, "componentWillReceiveProps"),
            w(e.prototype, "componentWillUpdate"),
            e.m = !0)
        }
        y && y(t)
    }
    ;
    i.useState,
    i.useReducer,
    i.useEffect,
    i.useLayoutEffect,
    i.useRef,
    i.useImperativeHandle,
    i.useMemo,
    i.useCallback,
    i.useContext,
    i.useDebugValue,
    o.createElement,
    o.createContext,
    o.createRef,
    o.Fragment,
    o.Component;
    n.d(e, "useStoreon", function() {
        return C
    }),
    n.d(e, "StoreContext", function() {
        return A
    }),
    n.d(e, "connectStoreon", function() {
        return I
    });
    let A = Object(o.createContext)()
      , x = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect
      , C = (...t)=>{
        let e = Object(i.useContext)(A);
        let n = Object(i.useState)({});
        return x(()=>e.on("@changed", (e,i)=>{
            t.some(t=>t in i) && n[1]({})
        }
        ), []),
        Object(i.useMemo)(()=>{
            let n = e.get()
              , i = {};
            return t.forEach(t=>{
                i[t] = n[t]
            }
            ),
            i.dispatch = e.dispatch,
            i
        }
        , [n[0]])
    }
      , I = (...t)=>{
        let e = t.pop();
        return l((n,i)=>{
            let r = {
                ...n,
                ...C(...t),
                ref: i
            };
            return Object(o.h)(e, r)
        }
        )
    }
}
, function(t, e, n) {
    "use strict";
    var i, o, r;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    function(t) {
        t.web = "web",
        t.chrome = "chrome"
    }(e.ENV_NAMES || (e.ENV_NAMES = {})),
    e.resizeModes = {
        widthOnly: "widthOnly",
        heightOnly: "heightOnly",
        maxSide: "maxSide",
        inPercents: "inPercents",
        custom: "custom"
    },
    e.resizeModeNames = {
        widthOnly: "by Width",
        heightOnly: "by Height",
        maxSide: "by Largest Side",
        inPercents: "by Percentage",
        custom: "Custom"
    },
    e.sizePresetNames = {
        custom: "Custom"
    },
    e.sizePresets = {
        square: {
            width: 1080,
            height: 1080
        },
        landscape: {
            width: 1920,
            height: 1080
        },
        vertical: {
            width: 1080,
            height: 1920
        },
        verticalInstagram: {
            width: 1080,
            height: 1350
        }
    },
    function(t) {
        t.settings = "settings",
        t.cropBox = "cropBox"
    }(e.CropSizeEventOrigin || (e.CropSizeEventOrigin = {})),
    function(t) {
        t.custom = "custom",
        t.fbPageCover = "fbPageCover",
        t.fbEventCover = "fbEventCover",
        t.fbSharedPost = "fbSharedPost",
        t.twiHeaderPhoto = "twiHeaderPhoto",
        t.twiPostImage = "twiPostImage",
        t.youtubeCoverImage = "youtubeCoverImage",
        t.youtubeVideoThumbnail = "youtubeVideoThumbnail",
        t.linkedinBannerImage = "linkedinBannerImage",
        t.linkedinCompanyCoverImage = "linkedinCompanyCoverImage",
        t.linkedinPostImage = "linkedinPostImage",
        t.instagramStories = "instagramStories",
        t.productHuntScreenshot = "productHuntScreenshot",
        t.productHuntScreenshot2x = "productHuntScreenshot2x"
    }(r = e.CropPreset || (e.CropPreset = {})),
    e.CropPresetValuesMap = ((i = {})[r.custom] = {},
    i[r.fbPageCover] = {
        width: 1200,
        height: 630
    },
    i[r.fbEventCover] = {
        width: 1920,
        height: 1005
    },
    i[r.fbSharedPost] = {
        width: 1200,
        height: 530
    },
    i[r.twiHeaderPhoto] = {
        width: 1500,
        height: 500
    },
    i[r.twiPostImage] = {
        width: 1024,
        height: 512
    },
    i[r.youtubeCoverImage] = {
        width: 2560,
        height: 1440
    },
    i[r.youtubeVideoThumbnail] = {
        width: 1280,
        height: 720
    },
    i[r.linkedinBannerImage] = {
        width: 1584,
        height: 396
    },
    i[r.linkedinCompanyCoverImage] = {
        width: 1536,
        height: 768
    },
    i[r.linkedinPostImage] = {
        width: 1200,
        height: 630
    },
    i[r.instagramStories] = {
        width: 1080,
        height: 1920
    },
    i[r.productHuntScreenshot] = {
        width: 635,
        height: 380
    },
    i[r.productHuntScreenshot2x] = {
        width: 1270,
        height: 760
    },
    i),
    e.CropPresetNames = ((o = {})[r.custom] = "Custom",
    o[r.fbPageCover] = "Facebook Page Cover",
    o[r.fbEventCover] = "Facebook Event Cover",
    o[r.fbSharedPost] = "Facebook Shared Post",
    o[r.twiHeaderPhoto] = "Twitter Header Photo",
    o[r.twiPostImage] = "Twitter Post Image",
    o[r.youtubeCoverImage] = "YouTube Cover Image",
    o[r.youtubeVideoThumbnail] = "YouTube Video Thumbnail",
    o[r.linkedinBannerImage] = "LinkedIn Banner Image",
    o[r.linkedinCompanyCoverImage] = "LinkedIn Company Cover Image",
    o[r.linkedinPostImage] = "LinkedIn Post Image",
    o[r.instagramStories] = "Instagram Story",
    o[r.productHuntScreenshot] = "Product Hunt Screenshot",
    o[r.productHuntScreenshot2x] = "Product Hunt Screenshot 2x",
    o),
    e.formatNames = {
        jpg: "jpg",
        png: "png",
        webp: "webp",
        bmp: "bmp",
        tiff: "tiff"
    },
    e.formatMIMETypes = {
        jpg: "image/jpeg",
        png: "image/png",
        webp: "image/webp",
        bmp: "image/bmp",
        tiff: "image/tiff"
    },
    e.extensionsMap = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
        "image/bmp": "bmp",
        "image/tiff": "tiff"
    },
    e.supportedImportTypes = {
        "image/jpeg": "image/jpeg",
        "image/png": "image/png",
        "image/webp": "image/webp",
        "image/tiff": "image/tiff",
        "image/bmp": "image/bmp",
        "image/gif": "image/gif"
    },
    e.extensionRegExp = "\\.[^.]*$",
    e.tiffJsLibStaticFileUrl = "assets/tiff.min.js",
    e.libheifStaticFileUrl = "/assets/libheif.min.js",
    e.uploadAnimationUrl = "/assets/upload-animation.png",
    e.completedNotificationTimeout = 18e3
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    );
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0)
      , a = n(29)
      , s = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return e.defaultValue && n.optionExist(e.defaultValue) ? n.setState({
                value: e.defaultValue
            }) : n.setState({
                value: e.options[0].value
            }),
            n
        }
        return o(e, t),
        e.prototype.optionExist = function(t) {
            return !!this.props.options.find(function(e) {
                return e.value === t
            })
        }
        ,
        e.prototype.handleChange = function(t) {
            this.setState({
                value: t
            }),
            this.props.handleChange(t)
        }
        ,
        e.prototype.render = function() {
            var t = this;
            return r.h("div", {
                className: a.select
            }, r.h("select", {
                value: this.state.value,
                onChange: function(e) {
                    return t.handleChange(e.target.value)
                }
            }, this.props.options && this.props.options.map(function(t) {
                return r.h("option", {
                    value: t.value,
                    key: t.value
                }, t.title)
            })))
        }
        ,
        e
    }(r.Component);
    e.default = s
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.convertMapToSelectOptions = function(t) {
        var e = [];
        return Object.keys(t).forEach(function(n) {
            var i = {
                value: n,
                title: t[n]
            };
            e.push(i)
        }),
        e
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(60)
      , o = n(61)
      , r = n(62);
    n(63);
    e.store = r.createStoreon([i.default, o.default, !1])
}
, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    );
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0)
      , a = n(31)
      , s = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return o(e, t),
        e.prototype.render = function() {
            var t = this;
            return r.h("div", {
                className: a.input
            }, this.props.prefix && r.h("span", {
                className: a.prefix
            }, this.props.prefix), this.props.suffix && r.h("span", {
                className: a.suffix
            }, this.props.suffix), r.h("input", {
                type: "number",
                value: this.props.value,
                disabled: this.props.disabled,
                onInput: function(e) {
                    return t.props.handleChange && t.props.handleChange(parseInt(e.target.value))
                }
            }))
        }
        ,
        e
    }(r.Component);
    e.default = s
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, o = n(0), r = n(46);
    !function(t) {
        t.PRIMARY = "PRIMARY",
        t.SECONDARY = "SECONDARY"
    }(i = e.BUTTON_TYPE || (e.BUTTON_TYPE = {})),
    e.Button = function(t) {
        var e = t.type
          , n = t.inverted
          , a = t.handleClick
          , s = t.children;
        return o.h("div", {
            className: r.button + " " + (e === i.SECONDARY ? r.secondary : "") + " " + (n ? r.inverted : "")
        }, o.h("button", {
            onClick: a
        }, s))
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(65);
    e.getBase64FromBlob = function(t) {
        return new Promise(function(e, n) {
            var i = new FileReader;
            i.onload = function() {
                e(i.result)
            }
            ,
            i.readAsDataURL(t)
        }
        )
    }
    ,
    e.getJpegBlobFromHeicFile = function(t) {
        return new Promise(function(e, n) {
            var i = new FileReader;
            i.onload = function(t) {
                var i = t.target.result
                  , o = (new window.libheif.HeifDecoder).decode(i);
                if (!o || !o.length)
                    return n("format not supported");
                var r = o.find(function(t) {
                    return t.is_primary()
                }) || o[0]
                  , a = r.get_width()
                  , s = r.get_height()
                  , l = document.createElement("canvas");
                l.width = a,
                l.height = s;
                for (var c = l.getContext("2d"), u = c.createImageData(a, s), p = 0; p < a * s; p++)
                    u.data[4 * p + 3] = 255;
                r.display(u, function(t) {
                    c.putImageData(t, 0, 0),
                    l.toBlob(function(t) {
                        t && e(t)
                    }, "image/jpeg", 1)
                })
            }
            ,
            i.readAsArrayBuffer(t)
        }
        )
    }
    ,
    e.hasExtension = function(t, e) {
        return new RegExp("^.*.(" + t + ")$","ig").test(e)
    }
    ,
    e.downloadDataUrl = function(t, e) {
        i.saveAs(t, e)
    }
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    var i = n(69)
      , o = "object" == typeof self && self && self.Object === Object && self
      , r = i || o || Function("return this")();
    t.exports = r
}
, function(t, e, n) {
    var i = n(14).Symbol;
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(17);
    n(88),
    n(90),
    function() {
        function t() {
            var t = this;
            return new Promise(function(e) {
                var n = new FileReader;
                n.onload = function() {
                    e(n.result)
                }
                ,
                n.readAsArrayBuffer(t)
            }
            )
        }
        File.prototype.arrayBuffer = File.prototype.arrayBuffer || t,
        Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || t
    }(),
    i.render(i.h(o.default, null), document.querySelector("#resizer"))
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    );
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0)
      , a = n(18)
      , s = n(87)
      , l = n(5)
      , c = n(8)
      , u = n(4)
      , p = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t),
        e.prototype.componentDidMount = function() {
            s.appendPrefetchUrlToHead(l.uploadAnimationUrl)
        }
        ,
        e.prototype.render = function() {
            return r.h(u.StoreContext.Provider, {
                value: c.store
            }, r.h(a.default, null))
        }
        ,
        e
    }(r.Component);
    e.default = p
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), r = this && this.__assign || function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(0)
      , s = n(19)
      , l = n(51)
      , c = n(53)
      , u = n(76)
      , p = n(12)
      , h = n(5)
      , d = n(80)
      , f = n(81)
      , _ = n(84)
      , g = n(4)
      , m = n(8)
      , v = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.initialState = {
                file: null,
                imageBase64: null,
                type: null,
                typeToExport: null,
                name: null,
                width: null,
                height: null
            },
            n.handleFileUpload = n.handleFileUpload.bind(n),
            n.handleFileSecondUpload = n.handleFileSecondUpload.bind(n),
            n.handleImageCreate = n.handleImageCreate.bind(n),
            n.reopenLastProcessedImage = n.reopenLastProcessedImage.bind(n),
            n.setState(n.initialState),
            n
        }
        return o(e, t),
        e.prototype.componentDidMount = function() {
            var t = this;
            m.store.on("image/cancel", function() {
                t.removeImage()
            }),
            m.store.on("image/export", function(e) {
                var n = h.formatMIMETypes[e.settings.type]
                  , i = e.settings.quality;
                t.exportImage(n, i)
            })
        }
        ,
        e.prototype.handleFileUpload = function(t) {
            var e = this
              , n = t.name
              , i = t.type;
            h.supportedImportTypes[i] || p.hasExtension("heic", n) ? (this.turnAnimationOn(),
            this.hideCompletedNotification(),
            p.hasExtension("heic", n) ? d.addScriptTagWithUrl(h.libheifStaticFileUrl, function() {
                p.getJpegBlobFromHeicFile(t).then(function(t) {
                    return t = t,
                    p.getBase64FromBlob(t)
                }).then(function(t) {
                    e.turnAnimationOff(3600),
                    e.setState({
                        imageBase64: t,
                        type: "image/jpeg",
                        name: n
                    })
                })
            }) : i === h.supportedImportTypes["image/tiff"] ? d.addScriptTagWithUrl(h.tiffJsLibStaticFileUrl, function() {
                var o = new FileReader;
                o.onload = function(t) {
                    var o = t.target.result;
                    window.Tiff.initialize({
                        TOTAL_MEMORY: 5e7
                    });
                    var r = new window.Tiff({
                        buffer: o
                    });
                    e.turnAnimationOff(3600),
                    e.setState({
                        imageBase64: r.toDataURL(),
                        type: i,
                        name: n
                    })
                }
                ,
                o.readAsArrayBuffer(t)
            }) : p.getBase64FromBlob(t).then(function(o) {
                e.turnAnimationOff(1400),
                e.setState({
                    file: t,
                    imageBase64: o,
                    type: i,
                    name: n
                })
            }),
            (0,
            g.useStoreon().dispatch)("image/upload", {
                type: i
            })) : alert("File type is not supported")
        }
        ,
        e.prototype.handleFileSecondUpload = function(t) {
            this.removeImage(),
            this.handleFileUpload(t)
        }
        ,
        e.prototype.handleImageCreate = function(t, e) {
            this.setState({
                width: t,
                height: e
            }, function() {
                var n = g.useStoreon("settings")
                  , i = n.dispatch;
                n.settings;
                i("settings/size", {
                    width: t,
                    height: e
                })
            })
        }
        ,
        e.prototype.removeImage = function() {
            this.setState(this.initialState)
        }
        ,
        e.prototype.exportImage = function(t, e) {
            var n = this
              , i = this.state.name;
            this.canvasComponentRef.exportImage(t, i, e).then(function() {
                n.saveAsLastProcessedImage(),
                n.removeImage(),
                n.showCompletedNotification()
            })
        }
        ,
        e.prototype.reopenLastProcessedImage = function() {
            var t = this;
            this.turnAnimationOn(),
            this.setState(r({}, this.lastProcessedImage), function() {
                t.turnAnimationOff(1800)
            })
        }
        ,
        e.prototype.turnAnimationOn = function() {
            (0,
            g.useStoreon().dispatch)("image/animation", !0)
        }
        ,
        e.prototype.turnAnimationOff = function(t) {
            var e = g.useStoreon().dispatch;
            t ? setTimeout(function() {
                e("image/animation", !1)
            }, t) : e("image/animation", !1)
        }
        ,
        e.prototype.showCompletedNotification = function() {
            (0,
            g.useStoreon().dispatch)("image/notification", !0)
        }
        ,
        e.prototype.hideCompletedNotification = function() {
            (0,
            g.useStoreon().dispatch)("image/notification", !1)
        }
        ,
        e.prototype.saveAsLastProcessedImage = function() {
            this.lastProcessedImage = r({}, this.state)
        }
        ,
        e.prototype.render = function() {
            var t = this
              , e = g.useStoreon("settings")
              , n = e.dispatch
              , i = e.settings;
            return a.h("div", {
                className: [l.workspaceBackdrop, "web" === h.ENV_NAMES.chrome && "chrome-ext"].join(" ")
            }, a.h("div", {
                onDragEnter: function() {
                    return n("image/drop/enter")
                },
                onDragOver: function(t) {
                    return t.stopPropagation(),
                    t.preventDefault(),
                    !1
                },
                className: l.workspaceContainer
            }, a.h(f.default, null), a.h(_.default, {
                description: this.lastProcessedImage && this.lastProcessedImage.name,
                onClick: this.reopenLastProcessedImage
            }), a.h(u.default, {
                handleFileUpload: this.handleFileUpload,
                displayOnFileDropOnly: !!this.state.imageBase64
            }), this.state.imageBase64 && a.h("div", {
                className: l.workspace
            }, a.h("div", {
                className: [l.workspace__item, l.canvas].join(" ")
            }, a.h(c.default, {
                imageBase64: this.state.imageBase64,
                file: this.state.file,
                type: this.state.type,
                cropMode: i.cropMode,
                ref: function(e) {
                    return t.canvasComponentRef = e
                },
                handleImageCreate: this.handleImageCreate
            })), a.h("div", {
                className: l.workspace__item
            }, a.h(s.default, {
                defaultSize: {
                    width: this.state.width,
                    height: this.state.height
                }
            })))), a.h("p", {
                className: l.resizeSupportedFormats
            }, "Supported image formats: PNG, JPEG, BMP, TIFF, HEIC, GIF, WEBP.", a.h("br", null), a.h("a", {
                href: "https://resizing.app",
                target: "_blank"
            }, "Powered by resizing.app")))
        }
        ,
        e
    }(a.Component);
    e.default = v
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(20)
      , r = n(24)
      , a = n(26)
      , s = n(33)
      , l = n(36)
      , c = n(43)
      , u = n(48)
      , p = n(4)
      , h = n(11);
    e.default = function(t) {
        var e = p.useStoreon("settings")
          , n = e.settings
          , d = e.dispatch;
        return i.h("div", {
            className: r.settings
        }, n.cropMode ? i.h("div", null, i.h("div", {
            className: r.settings__item
        }, i.h(o.SettingsItem, {
            title: "Crop"
        }, i.h(u.default, null))), i.h("div", {
            className: r.settings__controls
        }, i.h(c.CropControls, null))) : i.h(i.Fragment, null, i.h("div", {
            className: r.settings__item
        }, i.h(o.SettingsItem, {
            title: "Resize"
        }, i.h(a.default, {
            defaultSize: t.defaultSize
        }))), i.h("div", {
            className: r.settings__item
        }, i.h(o.SettingsItem, {
            title: "Optimize"
        }, i.h(l.default, null))), i.h("div", {
            className: r.settings__item
        }, i.h(o.SettingsItem, {
            title: "Save As"
        }, i.h(s.default, null))), i.h("div", {
            className: r.settings__controls
        }, i.h(h.Button, {
            handleClick: function() {
                return d("image/export")
            }
        }, "Save Image"))))
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(21);
    e.SettingsItem = function(t) {
        var e = t.title
          , n = t.children;
        return i.h("div", {
            className: o.item
        }, i.h("h3", {
            className: o.item__title
        }, e), n)
    }
}
, function(t, e, n) {
    var i = n(22);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".SettingsItem-module___item___3nFy0 {\n  padding: 12px 1px 16px; }\n\n.SettingsItem-module___item__title___1eYFW {\n  font-family: Ubuntu;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 13px;\n  margin: 0; }\n\n@media all and (max-width: 592px) {\n  .SettingsItem-module___item__title___1eYFW {\n    display: none; } }\n", ""]),
    e.locals = {
        item: "SettingsItem-module___item___3nFy0",
        item__title: "SettingsItem-module___item__title___1eYFW"
    }
}
, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e)
            throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t)
            return t;
        var n = e.protocol + "//" + e.host
          , i = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var o, r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""),
            "url(" + JSON.stringify(o) + ")")
        })
    }
}
, function(t, e, n) {
    var i = n(25);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".Settings-module___settings___3p2Vy {\n  width: 100%;\n  padding: 0 0 0 32px; }\n  .chrome-ext .Settings-module___settings___3p2Vy {\n    padding: 0 16px;\n    margin-top: 16px; }\n\n.Settings-module___settings__item___2aFih {\n  width: 200px;\n  background-color: #ffffff; }\n  .Settings-module___settings__item___2aFih ~ .Settings-module___settings__item___2aFih {\n    border-top: 1px solid #F4F6FC; }\n\n.Settings-module___settings__controls___2FWZI {\n  margin-top: 12px; }\n\n@media all and (max-width: 592px) {\n  .Settings-module___settings___3p2Vy {\n    padding: 0 8px; }\n  .Settings-module___settings__item___2aFih {\n    width: 100%; } }\n", ""]),
    e.locals = {
        settings: "Settings-module___settings___3p2Vy",
        settings__item: "Settings-module___settings__item___2aFih",
        settings__controls: "Settings-module___settings__controls___2FWZI"
    }
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ), r = this && this.__assign || function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(0)
      , s = n(27)
      , l = n(6)
      , c = n(10)
      , u = n(7)
      , p = n(5)
      , h = n(4)
      , d = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.handleWidthChange = n.handleWidthChange.bind(n),
            n.handleHeightChange = n.handleHeightChange.bind(n),
            n.handlePercentInput = n.handlePercentInput.bind(n),
            n.state = {
                resizeModeOptions: u.convertMapToSelectOptions(p.resizeModeNames),
                resizeMode: p.resizeModes.widthOnly,
                width: null,
                height: null,
                defaultRatio: null,
                initialValuesApplied: !1,
                percentages: 100
            },
            n
        }
        return o(e, t),
        e.prototype.componentDidMount = function() {
            this.setState(r(r({}, this.props.defaultSize), {
                defaultRatio: this.props.defaultSize.width / this.props.defaultSize.height
            }))
        }
        ,
        e.prototype.componentWillReceiveProps = function(t) {
            var e = t.defaultSize;
            !this.state.initialValuesApplied && e && e.width && e.height && this.setState(r(r({}, e), {
                defaultRatio: e.width / e.height,
                initialValuesApplied: !0
            }))
        }
        ,
        e.prototype.handleWidthChange = function(t, e) {
            var n = this;
            if (t > 9999)
                this.setState({
                    width: this.state.width
                });
            else {
                var i = this.state.resizeMode === p.resizeModes.custom ? this.state.height : parseInt((t / this.state.defaultRatio).toString());
                this.setState({
                    width: t || 1,
                    height: i || 1
                }, function() {
                    n.propagateSettingsChange(),
                    e || n.setState({
                        percentages: n.getCurrentSizeInPercents()
                    })
                })
            }
        }
        ,
        e.prototype.handleHeightChange = function(t, e) {
            var n = this;
            if (t > 9999)
                this.setState({
                    height: this.state.height
                });
            else {
                var i = this.state.resizeMode === p.resizeModes.custom ? this.state.width : parseInt((t * this.state.defaultRatio).toString());
                this.setState({
                    width: i || 1,
                    height: t || 1
                }, function() {
                    n.propagateSettingsChange(),
                    e || n.setState({
                        percentages: n.getCurrentSizeInPercents()
                    })
                })
            }
        }
        ,
        e.prototype.handlePercentInput = function(t) {
            if (t < 1 || t > 999)
                this.setState({
                    percentages: this.state.percentages
                });
            else {
                this.setState({
                    percentages: t
                });
                var e = parseInt((this.props.defaultSize.width / 100 * t).toString());
                this.handleWidthChange(e, !0)
            }
        }
        ,
        e.prototype.propagateSettingsChange = function() {
            var t = {
                width: this.state.width,
                height: this.state.height
            };
            (0,
            h.useStoreon().dispatch)("settings/size", t)
        }
        ,
        e.prototype.isHorizontalImage = function() {
            return this.state.width > this.state.height
        }
        ,
        e.prototype.shouldDisableWidth = function() {
            var t = this.state.resizeMode === p.resizeModes.heightOnly
              , e = this.state.resizeMode === p.resizeModes.maxSide;
            return t || e && !this.isHorizontalImage()
        }
        ,
        e.prototype.shouldDisableHeight = function() {
            var t = this.state.resizeMode === p.resizeModes.widthOnly
              , e = this.state.resizeMode === p.resizeModes.maxSide;
            return t || e && this.isHorizontalImage()
        }
        ,
        e.prototype.getCurrentSizeInPercents = function() {
            return parseInt((this.state.width / this.props.defaultSize.width * 100).toString())
        }
        ,
        e.prototype.render = function() {
            var t = this;
            return a.h("div", {
                className: s.form
            }, a.h("div", {
                className: s.form__group
            }, a.h(l.default, {
                options: this.state.resizeModeOptions,
                handleChange: function(e) {
                    return t.setState({
                        resizeMode: e
                    })
                }
            })), this.state.resizeMode === p.resizeModes.inPercents ? a.h("div", {
                className: s.form__group
            }, a.h(c.default, {
                suffix: "%",
                value: this.state.percentages,
                handleChange: this.handlePercentInput
            })) : a.h("div", {
                className: s.form__group
            }, a.h("div", {
                className: s.form__input
            }, a.h(c.default, {
                prefix: "W:",
                suffix: "px",
                value: this.state.width,
                handleChange: this.handleWidthChange,
                disabled: this.shouldDisableWidth()
            })), a.h("div", {
                className: s.form__input
            }, a.h(c.default, {
                prefix: "H:",
                suffix: "px",
                value: this.state.height,
                disabled: this.shouldDisableHeight(),
                handleChange: this.handleHeightChange
            }))))
        }
        ,
        e
    }(a.Component);
    e.default = d
}
, function(t, e, n) {
    var i = n(28);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".SizeSetting-module___form___14ONw {\n  padding-top: 8px; }\n\n.SizeSetting-module___form__group___37iep {\n  width: 100%;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .SizeSetting-module___form__group___37iep:last-child {\n    margin-bottom: 0; }\n\n.SizeSetting-module___form__input___NwBg9 {\n  flex: 1 1 auto; }\n  .SizeSetting-module___form__input___NwBg9 ~ .SizeSetting-module___form__input___NwBg9 {\n    margin-left: 12px; }\n\n.SizeSetting-module___separator___3_9lj {\n  display: flex;\n  justify-content: center;\n  flex-shrink: 0;\n  min-width: 10px; }\n  .SizeSetting-module___separator___3_9lj svg {\n    width: 52px; }\n", ""]),
    e.locals = {
        form: "SizeSetting-module___form___14ONw",
        form__group: "SizeSetting-module___form__group___37iep",
        form__input: "SizeSetting-module___form__input___NwBg9",
        separator: "SizeSetting-module___separator___3_9lj"
    }
}
, function(t, e, n) {
    var i = n(30);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".Select-module___select___31gWw {\n  position: relative;\n  height: 24px;\n  width: 100%;\n  background: white; }\n  .Select-module___select___31gWw:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    width: 8px;\n    height: 5px;\n    right: 12px;\n    bottom: 0;\n    margin: auto;\n    pointer-events: none;\n    background: url(\"data:image/svg+xml;utf8,<svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M-4.10887e-08 1.66668L0.94 0.726685L4 3.78002L7.06 0.726685L8 1.66668L4 5.66668L-4.10887e-08 1.66668Z' fill='rgb(51, 51, 51)'/></svg>\"); }\n  .Select-module___select___31gWw:hover:before {\n    background: #ffcfcf; }\n  .Select-module___select___31gWw select {\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    box-shadow: none;\n    border-radius: 0;\n    background: transparent;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 35px;\n    padding-left: 12px;\n    -moz-appearance: none;\n    -webkit-appearance: none; }\n    .Select-module___select___31gWw select:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000; }\n    .Select-module___select___31gWw select::-ms-expand {\n      display: none; }\n\n@media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {\n  .Select-module___select___31gWw select {\n    padding-right: 0; }\n  .Select-module___select___31gWw:after, .Select-module___select___31gWw:before {\n    display: none; } }\n", ""]),
    e.locals = {
        select: "Select-module___select___31gWw"
    }
}
, function(t, e, n) {
    var i = n(32);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".Input-module___input___1YExb {\n  position: relative;\n  height: 24px;\n  width: 100%;\n  background: white; }\n  .Input-module___input___1YExb input {\n    font-family: Ubuntu, sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 24px;\n    text-align: right;\n    box-shadow: none;\n    border-radius: 0;\n    background: transparent;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 24px;\n    padding-left: 24px;\n    -moz-appearance: textfield !important;\n    -webkit-appearance: none; }\n    .Input-module___input___1YExb input:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000; }\n    .Input-module___input___1YExb input::-ms-expand {\n      display: none; }\n    .Input-module___input___1YExb input:disabled {\n      background-color: #F4F6FC;\n      color: #B4BCC7;\n      opacity: 0.7;\n      cursor: not-allowed;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n    .Input-module___input___1YExb input::-webkit-outer-spin-button, .Input-module___input___1YExb input::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0; }\n\n.Input-module___prefix___2NIE3 {\n  position: absolute;\n  top: 5px;\n  left: 7px;\n  color: #B4BCC7;\n  pointer-events: none;\n  font-family: Ubuntu, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 15px; }\n\n.Input-module___suffix___1rJqc {\n  position: absolute;\n  top: 5px;\n  right: 8px;\n  color: #333333;\n  pointer-events: none;\n  font-family: Ubuntu, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px; }\n", ""]),
    e.locals = {
        input: "Input-module___input___1YExb",
        prefix: "Input-module___prefix___2NIE3",
        suffix: "Input-module___suffix___1rJqc"
    }
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(0)
      , r = n(34)
      , a = n(6)
      , s = n(7)
      , l = n(5)
      , c = n(4)
      , u = n(1);
    e.default = function() {
        var t = c.useStoreon("settings", "image")
          , e = t.dispatch
          , n = t.settings
          , p = t.image;
        u.useEffect(function() {
            var t, n = p.type, o = i(i({}, l.extensionsMap), /chrome/.test(navigator.userAgent.toLowerCase()) ? {} : ((t = {})[l.formatMIMETypes.webp] = null,
            t));
            e("settings/type", {
                type: o[n] || l.formatNames.jpg
            })
        }, []);
        var h = u.useCallback(function() {
            var t = i({}, l.formatNames);
            return /chrome/.test(navigator.userAgent.toLowerCase()) || delete t.webp,
            s.convertMapToSelectOptions(t).map(function(t) {
                return i(i({}, t), {
                    title: t.title.toUpperCase()
                })
            })
        }, []);
        return o.h("div", {
            className: r.group
        }, o.h("div", {
            className: r.group__input
        }, n.type && o.h(a.default, {
            options: h(),
            defaultValue: n.type,
            handleChange: function(t) {
                return e("settings/type", {
                    type: t
                })
            }
        })))
    }
}
, function(t, e, n) {
    var i = n(35);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".ExportSetting-module___group___3FAq8 {\n  padding-top: 8px; }\n\n.ExportSetting-module___group__input___1DTpa {\n  width: 100%;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .ExportSetting-module___group__input___1DTpa div ~ div {\n    margin-left: 12px; }\n  .ExportSetting-module___group__input___1DTpa:last-child {\n    margin-bottom: 0; }\n", ""]),
    e.locals = {
        group: "ExportSetting-module___group___3FAq8",
        group__input: "ExportSetting-module___group__input___1DTpa"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(37)
      , r = n(39)
      , a = n(42)
      , s = n(4);
    e.default = function(t) {
        var e = s.useStoreon("settings")
          , n = e.dispatch;
        return e.settings,
        i.h("div", {
            className: o.group
        }, i.h("div", {
            className: o.group__input
        }, i.h(r.default, {
            step: 25,
            rangeMarksNum: 5,
            handleChange: function(t) {
                return function(t) {
                    var e = a.convertOptimizationLevelToQuality(t);
                    n("settings/quality", {
                        quality: e
                    })
                }(t)
            }
        })))
    }
}
, function(t, e, n) {
    var i = n(38);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".QualitySetting-module___group___20NG8 {\n  padding-top: 16px; }\n\n.QualitySetting-module___group__input___1dzEf {\n  width: 100%;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .QualitySetting-module___group__input___1dzEf:last-child {\n    margin-bottom: 0; }\n", ""]),
    e.locals = {
        group: "QualitySetting-module___group___20NG8",
        group__input: "QualitySetting-module___group__input___1dzEf"
    }
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    );
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0)
      , a = n(40)
      , s = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return o(e, t),
        e.prototype.componentDidMount = function() {
            this.setState({
                value: this.props.defaultValue || 0
            })
        }
        ,
        e.prototype.handleChange = function(t) {
            var e = this;
            this.setState({
                value: t
            }, function() {
                e.props.handleChange(t)
            })
        }
        ,
        e.prototype.render = function() {
            var t = this;
            return r.h("div", {
                className: a.sliderContainer
            }, r.h("div", {
                className: a.slider
            }, r.h("input", {
                type: "range",
                step: this.props.step || 1,
                value: this.state.value,
                onChange: function(e) {
                    return t.handleChange(e.target.value)
                }
            }), r.h("div", {
                className: a.rangeMarks
            }, this.props.rangeMarksNum && new Array(this.props.rangeMarksNum).fill(null).map(function() {
                return r.h("div", {
                    className: a.rangeMark
                })
            }))))
        }
        ,
        e
    }(r.Component);
    e.default = s
}
, function(t, e, n) {
    var i = n(41);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, '.Slider-module___sliderContainer___1_H31 {\n  width: 100%; }\n\n.Slider-module___slider___MG5vO {\n  width: 100%;\n  height: 16px;\n  z-index: 10;\n  position: relative;\n  display: flex;\n  align-items: center; }\n  .Slider-module___slider___MG5vO input {\n    width: 100%;\n    height: 2px;\n    z-index: 10;\n    margin: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none; }\n    .Slider-module___slider___MG5vO input::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 1px;\n      background: #D9E1ED;\n      border: none; }\n    .Slider-module___slider___MG5vO input::-moz-range-track {\n      width: 100%;\n      height: 1px;\n      background: #D9E1ED;\n      border: none; }\n    .Slider-module___slider___MG5vO input::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      border: none;\n      border-radius: 0;\n      height: 16px;\n      width: 16px;\n      background: url(\'data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="16" height="16" fill="rgb(71, 210, 151)" stroke="rgb(19, 193, 154)"/><rect x="4" y="4" width="8" height="8" fill="white"/></svg>\') center no-repeat;\n      margin-top: -8px;\n      cursor: pointer;\n      z-index: 20; }\n    .Slider-module___slider___MG5vO input::-moz-range-thumb {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      border: none;\n      border-radius: 0;\n      height: 16px;\n      width: 16px;\n      background: url(\'data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="16" height="16" fill="rgb(71, 210, 151)" stroke="rgb(19, 193, 154)"/><rect x="4" y="4" width="8" height="8" fill="white"/></svg>\') center no-repeat;\n      margin-top: -8px;\n      cursor: pointer;\n      z-index: 20; }\n\n.Slider-module___rangeMarks___2qnq7 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 8px;\n  z-index: -1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.Slider-module___rangeMark___1Tqpv {\n  width: 1px;\n  height: 8px;\n  background-color: #D9E1ED; }\n', ""]),
    e.locals = {
        sliderContainer: "Slider-module___sliderContainer___1_H31",
        slider: "Slider-module___slider___MG5vO",
        rangeMarks: "Slider-module___rangeMarks___2qnq7",
        rangeMark: "Slider-module___rangeMark___1Tqpv"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.convertOptimizationLevelToQuality = function(t) {
        return parseFloat(((100 - t) / 100 * 40 / 100 + .4).toFixed(2))
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(44)
      , r = n(11)
      , a = n(4);
    e.CropControls = function() {
        var t = a.useStoreon().dispatch;
        return i.h("div", {
            className: o.controls
        }, i.h("div", {
            className: o.control
        }, i.h(r.Button, {
            inverted: !0,
            type: r.BUTTON_TYPE.SECONDARY,
            handleClick: function() {
                return t("settings/crop/cancel")
            }
        }, "Cancel")), i.h("div", {
            className: o.control
        }, i.h(r.Button, {
            type: r.BUTTON_TYPE.SECONDARY,
            handleClick: function() {
                return t("settings/crop/apply")
            }
        }, "Apply")))
    }
}
, function(t, e, n) {
    var i = n(45);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".CropControls-module___controls___3rKX4 {\n  display: flex;\n  justify-content: space-between; }\n\n.CropControls-module___control___3kWas {\n  flex: 1 1 100%; }\n  .CropControls-module___control___3kWas ~ .CropControls-module___control___3kWas {\n    margin-left: 12px; }\n", ""]),
    e.locals = {
        controls: "CropControls-module___controls___3rKX4",
        control: "CropControls-module___control___3kWas"
    }
}
, function(t, e, n) {
    var i = n(47);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".Button-module___button___3hvAS {\n  height: 28px;\n  width: 100%; }\n  .Button-module___button___3hvAS button {\n    font-family: Ubuntu, sans-serif;\n    font-weight: 500;\n    font-size: 13px;\n    cursor: pointer;\n    height: 100%;\n    width: 100%;\n    color: #FFFFFF;\n    background-color: #02C873;\n    border: 1px solid rgba(18, 167, 111, 0.4);\n    user-select: none; }\n    .Button-module___button___3hvAS button:focus {\n      outline: 0;\n      -webkit-box-shadow: 0px 0px 0px 2px #ECF0FD;\n      -moz-box-shadow: 0px 0px 0px 2px #ECF0FD;\n      box-shadow: 0px 0px 0px 2px #ECF0FD; }\n  .Button-module___button___3hvAS.Button-module___secondary___5yhra {\n    height: 24px; }\n    .Button-module___button___3hvAS.Button-module___secondary___5yhra button {\n      color: #0FA263;\n      background: linear-gradient(180deg, #FFFFFF 20.83%, #FDFDFF 112.5%);\n      border: 1px solid #D9E1ED;\n      box-sizing: border-box;\n      font-weight: 500;\n      font-size: 12px; }\n  .Button-module___button___3hvAS.Button-module___inverted___20qh0:not(.Button-module___secondary___5yhra) button {\n    color: #02C873;\n    background-color: transparent;\n    border: 1px solid #02C873; }\n  .Button-module___button___3hvAS.Button-module___inverted___20qh0.Button-module___secondary___5yhra button {\n    color: #333333; }\n\n@media all and (max-width: 592px) {\n  .Button-module___button___3hvAS {\n    height: 40px; }\n    .Button-module___button___3hvAS button {\n      font-size: 18px; } }\n", ""]),
    e.locals = {
        button: "Button-module___button___3hvAS",
        secondary: "Button-module___secondary___5yhra",
        inverted: "Button-module___inverted___20qh0"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(49)
      , r = n(10)
      , a = n(4)
      , s = n(6)
      , l = n(7)
      , c = n(5)
      , u = l.convertMapToSelectOptions(c.CropPresetNames);
    e.default = function(t) {
        var e = a.useStoreon("settings")
          , n = e.dispatch
          , l = e.settings
          , p = function(t, e) {
            n("settings/crop/size", {
                width: t,
                height: e,
                origin: c.CropSizeEventOrigin.settings
            })
        };
        return i.h("div", {
            className: o.cropSettings
        }, i.h("div", {
            className: o.group
        }, i.h(s.default, {
            options: u,
            handleChange: function(t) {
                var e = c.CropPresetValuesMap[t]
                  , i = e.height
                  , o = void 0 === i ? l.cropHeight : i
                  , r = e.width
                  , a = void 0 === r ? l.cropWidth : r;
                n("settings/crop/preset", t),
                p(a, o)
            }
        })), i.h("div", {
            className: o.group
        }, i.h("div", {
            className: o.group__input
        }, i.h(r.default, {
            prefix: "W:",
            suffix: "px",
            value: l.cropWidth,
            disabled: l.cropPreset !== c.CropPreset.custom,
            handleChange: function(t) {
                p(t > 9999 ? l.cropWidth : t || 1, l.cropHeight)
            }
        })), i.h("div", {
            className: o.group__input
        }, i.h(r.default, {
            prefix: "H:",
            suffix: "px",
            value: l.cropHeight,
            disabled: l.cropPreset !== c.CropPreset.custom,
            handleChange: function(t) {
                p(l.cropWidth, t > 9999 ? l.cropHeight : t || 1)
            }
        }))))
    }
}
, function(t, e, n) {
    var i = n(50);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".CropSetting-module___cropSettings___1doIt {\n  padding-top: 20px; }\n\n.CropSetting-module___group___1-gzk {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .CropSetting-module___group___1-gzk ~ .CropSetting-module___group___1-gzk {\n    margin-top: 12px; }\n\n.CropSetting-module___group__input___1W37I {\n  flex: 1 1 100%; }\n  .CropSetting-module___group__input___1W37I ~ .CropSetting-module___group__input___1W37I {\n    margin-left: 11px; }\n", ""]),
    e.locals = {
        cropSettings: "CropSetting-module___cropSettings___1doIt",
        group: "CropSetting-module___group___1-gzk",
        group__input: "CropSetting-module___group__input___1W37I"
    }
}
, function(t, e, n) {
    var i = n(52);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".Workspace-module___workspaceBackdrop___1dvJy {\n  height: 100vh;\n  padding: 64px 64px 125px; }\n\n.Workspace-module___workspaceContainer___TMnzE {\n  position: relative;\n  height: 100%;\n  margin: 0 auto;\n  box-shadow: 0px 0px 72px rgba(217, 225, 237, 0.6); }\n\n.Workspace-module___workspace___1ws1F {\n  display: flex;\n  padding: 36px;\n  margin: 0 auto;\n  height: 100%;\n  flex-basis: 100%; }\n\n.Workspace-module___canvas___16r7B {\n  width: 100%;\n  position: relative;\n  background-color: #F4F6FC;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.Workspace-module___canvasDroparea___zbyEu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: initial;\n  height: 100%; }\n\n.Workspace-module___resizeSupportedFormats___IByiK {\n  font-family: Ubuntu;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 22px;\n  text-align: center;\n  color: #b4bcc7;\n  max-width: 100%;\n  margin-top: 30px; }\n  .Workspace-module___resizeSupportedFormats___IByiK a {\n    color: #02c873; }\n\n.chrome-ext.Workspace-module___workspaceBackdrop___1dvJy {\n  padding: 0; }\n\n.chrome-ext .Workspace-module___workspace___1ws1F {\n  padding: 0; }\n\n.chrome-ext .Workspace-module___resizeSupportedFormats___IByiK {\n  display: none; }\n\n@media all and (max-width: 592px) {\n  .Workspace-module___workspace___1ws1F {\n    display: flex;\n    flex-direction: column;\n    padding: 20px 8px;\n    margin: 0 auto; }\n  .Workspace-module___workspace__item___75XRs {\n    width: 100%;\n    flex: 1 1 100%; }\n  .Workspace-module___workspace__item___75XRs ~ .Workspace-module___workspace__item___75XRs {\n    margin-left: 0;\n    margin-top: 8px; }\n  .Workspace-module___canvas___16r7B {\n    padding-right: 0; }\n  .Workspace-module___completedNotification___3_K4Z,\n  .Workspace-module___completedNotificationDisplay___3oaSz {\n    display: none; } }\n\n@media all and (max-width: 992px) {\n  .Workspace-module___workspaceBackdrop___1dvJy {\n    padding: 48px 20px 125px; }\n  .Workspace-module___completedNotification___3_K4Z {\n    left: unset;\n    right: 0;\n    margin-right: 26px;\n    margin-left: 0;\n    transform: none; } }\n", ""]),
    e.locals = {
        workspaceBackdrop: "Workspace-module___workspaceBackdrop___1dvJy",
        workspaceContainer: "Workspace-module___workspaceContainer___TMnzE",
        workspace: "Workspace-module___workspace___1ws1F",
        canvas: "Workspace-module___canvas___16r7B",
        canvasDroparea: "Workspace-module___canvasDroparea___zbyEu",
        resizeSupportedFormats: "Workspace-module___resizeSupportedFormats___IByiK",
        workspace__item: "Workspace-module___workspace__item___75XRs",
        completedNotification: "Workspace-module___completedNotification___3_K4Z",
        completedNotificationDisplay: "Workspace-module___completedNotificationDisplay___3oaSz"
    }
}
, function(t, e, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
    ,
    function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    );
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0)
      , a = n(54)
      , s = n(56)
      , l = n(5)
      , c = n(57)
      , u = n(8)
      , p = n(4)
      , h = n(64)
      , d = n(12)
      , f = n(66)
      , _ = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.resizeImage = n.resizeImage.bind(n),
            n.handleWindowResize = n.handleWindowResize.bind(n),
            n
        }
        return o(e, t),
        e.prototype.componentDidMount = function() {
            var t = this;
            this.createCanvasImage(),
            window.onresize = f(this.handleWindowResize, 100),
            this.unbindSettingsSizeSub = u.store.on("settings/size", function(e) {
                t.resizeImage(e.settings.width, e.settings.height)
            }),
            this.unbindSettingsCropSizeSub = u.store.on("settings/crop/size", function(e, n) {
                n.origin === l.CropSizeEventOrigin.settings && t.setCropBoxSize(n.width, n.height)
            }),
            this.unbindSettingsCropSizeSub = u.store.on("settings/crop/preset", function(e, n) {
                var i = l.CropPresetValuesMap[n]
                  , o = i.width
                  , r = i.height;
                o && r ? (t.cropper.setAspectRatio(o / r),
                t.cropper.setData({
                    width: o
                }),
                setTimeout(function() {
                    t.props.dispatch("settings/crop/size", {
                        width: t.cropper.getData().width,
                        height: t.cropper.getData().height,
                        origin: l.CropSizeEventOrigin.settings
                    })
                })) : t.cropper.setAspectRatio(null)
            }),
            this.unbindSettingsCropApplySub = u.store.on("settings/crop/apply", function() {
                t.putCroppedImageOnMainCanvas()
            })
        }
        ,
        e.prototype.componentDidUpdate = function(t) {
            t.imageBase64 !== this.props.imageBase64 && this.createCanvasImage(),
            t.cropMode !== this.props.cropMode && this.handleCropModeChange(this.props.cropMode)
        }
        ,
        e.prototype.componentWillUnmount = function() {
            this.unbindSettingsSizeSub(),
            this.unbindSettingsCropSizeSub(),
            this.unbindSettingsCropApplySub(),
            window.onresize = null
        }
        ,
        e.prototype.createCanvasImage = function() {
            var t = this;
            this.pica = s(),
            this.image = new Image,
            this.image.src = this.props.imageBase64,
            this.image.onload = function() {
                var e = t.getViewSize(t.image.width, t.image.height);
                t.props.handleImageCreate(t.image.width, t.image.height),
                t.setState({
                    viewSize: e,
                    defaultViewSize: e
                })
            }
        }
        ,
        e.prototype.getViewSize = function(t, e) {
            var n = t / e
              , i = this.containerRef.clientWidth
              , o = this.containerRef.clientHeight;
            return t <= i && e <= o ? {
                width: t,
                height: e
            } : t / i > e / o ? {
                width: i,
                height: i / n
            } : {
                height: o,
                width: o * n
            }
        }
        ,
        e.prototype.resizeImage = function(t, e) {
            this.canvasRef && (this.canvasRef.width = t,
            this.canvasRef.height = e,
            this.pica.resize(this.image, this.canvasRef, {
                alpha: !0
            }),
            this.setState({
                viewSize: this.getViewSize(t, e)
            }))
        }
        ,
        e.prototype.exportImage = function(t, e, n) {
            void 0 === t && (t = "image/jpeg"),
            void 0 === e && (e = "image"),
            void 0 === n && (n = .8);
            var i = e.replace(new RegExp(l.extensionRegExp), "")
              , o = l.extensionsMap[t]
              , r = i + "." + o;
            return [l.formatMIMETypes.jpg, l.formatMIMETypes.webp].includes(t) || this.props.type === l.formatMIMETypes.png && t === l.formatMIMETypes.png ? this.exportCurrentImageWithPica(t, n).then(function(t) {
                d.downloadDataUrl(t, r)
            }) : this.exportCurrentImageWithMagick(t, n, i, o).then(function(t) {
                d.downloadDataUrl(t, r)
            })
        }
        ,
        e.prototype.exportCurrentImageWithPica = function(t, e) {
            return this.pica.toBlob(this.canvasRef, t, e)
        }
        ,
        e.prototype.exportCurrentImageWithMagick = function(t, e, n, i) {
            return this.exportCurrentImageWithPica(l.formatMIMETypes.jpg, e).then(function(t) {
                return t.arrayBuffer()
            }).then(function(t) {
                var e = n + ".jpeg"
                  , o = n + "." + i
                  , r = {
                    name: e,
                    content: new Uint8Array(t)
                }
                  , a = ["convert", e, o];
                return Magick.call([r], a)
            }).then(function(e) {
                return new Blob([e.outputFiles[0].buffer],{
                    type: t
                })
            })
        }
        ,
        e.prototype.createCropCanvas = function() {
            var t = this
              , e = document.getElementById("canvas");
            this.cropper = new h(e,{
                viewMode: 1,
                rotatable: !1,
                background: !1,
                zoomable: !1,
                minContainerWidth: 10,
                minContainerHeight: 10,
                highlight: !1,
                crop: function(e) {
                    var n = e.detail
                      , i = n.width
                      , o = n.height;
                    i !== t.props.settings.width && o !== t.props.settings.height && t.props.dispatch("settings/crop/size", {
                        width: i,
                        height: o,
                        origin: l.CropSizeEventOrigin.cropBox
                    })
                }
            })
        }
        ,
        e.prototype.handleCropModeChange = function(t) {
            t ? this.createCropCanvas() : this.cropper.destroy()
        }
        ,
        e.prototype.setCropBoxSize = function(t, e) {
            var n;
            null === (n = this.cropper) || void 0 === n || n.setData({
                width: t,
                height: e
            })
        }
        ,
        e.prototype.putCroppedImageOnMainCanvas = function() {
            this.image.src = this.cropper.getCroppedCanvas().toDataURL("image/png")
        }
        ,
        e.prototype.handleWindowResize = function() {
            var t = this;
            this.setState({
                viewSize: {
                    width: 0,
                    height: 0
                }
            }, function() {
                var e, n, i = t.getViewSize(null === (e = t.props.settings) || void 0 === e ? void 0 : e.width, null === (n = t.props.settings) || void 0 === n ? void 0 : n.height);
                t.setState({
                    viewSize: i,
                    defaultViewSize: i
                })
            })
        }
        ,
        e.prototype.render = function() {
            var t = this;
            return r.h("div", {
                className: a.canvasContainer,
                ref: function(e) {
                    return t.containerRef = e
                }
            }, r.h(c.default, null), r.h("div", {
                className: a.canvas
            }, r.h("canvas", {
                key: 1,
                id: "canvas",
                ref: function(e) {
                    return t.canvasRef = e
                },
                style: this.state.viewSize
            })))
        }
        ,
        e
    }(r.Component);
    e.default = p.connectStoreon("settings", "image", _)
}
, function(t, e, n) {
    var i = n(55);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".Canvas-module___canvasContainer___1RjZM {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n\n.Canvas-module___canvas___2YvR2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n\n.Canvas-module___hiddenCanvas___3Y0YJ {\n  display: none; }\n", ""]),
    e.locals = {
        canvasContainer: "Canvas-module___canvasContainer___1RjZM",
        canvas: "Canvas-module___canvas___2YvR2",
        hiddenCanvas: "Canvas-module___hiddenCanvas___3Y0YJ"
    }
}
, function(t, e, n) {
    var i;
    t.exports = function t(e, n, o) {
        function r(s, l) {
            if (!n[s]) {
                if (!e[s]) {
                    var c = "function" == typeof i && i;
                    if (!l && c)
                        return i(s, !0);
                    if (a)
                        return a(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var p = n[s] = {
                    exports: {}
                };
                e[s][0].call(p.exports, function(t) {
                    var n = e[s][1][t];
                    return r(n || t)
                }, p, p.exports, t, e, n, o)
            }
            return n[s].exports
        }
        for (var a = "function" == typeof i && i, s = 0; s < o.length; s++)
            r(o[s]);
        return r
    }({
        1: [function(t, e, n) {
            "use strict";
            var i = t("inherits")
              , o = t("multimath")
              , r = t("multimath/lib/unsharp_mask")
              , a = t("./mm_resize");
            function s(t) {
                var e = t || []
                  , n = {
                    js: e.indexOf("js") >= 0,
                    wasm: e.indexOf("wasm") >= 0
                };
                o.call(this, n),
                this.features = {
                    js: n.js,
                    wasm: n.wasm && this.has_wasm
                },
                this.use(r),
                this.use(a)
            }
            i(s, o),
            s.prototype.resizeAndUnsharp = function(t, e) {
                var n = this.resize(t, e);
                return t.unsharpAmount && this.unsharp_mask(n, t.toWidth, t.toHeight, t.unsharpAmount, t.unsharpRadius, t.unsharpThreshold),
                n
            }
            ,
            e.exports = s
        }
        , {
            "./mm_resize": 4,
            inherits: 15,
            multimath: 16,
            "multimath/lib/unsharp_mask": 19
        }],
        2: [function(t, e, n) {
            "use strict";
            function i(t) {
                return t < 0 ? 0 : t > 255 ? 255 : t
            }
            e.exports = {
                convolveHorizontally: function(t, e, n, o, r, a) {
                    var s, l, c, u, p, h, d, f, _, g, m, v = 0, w = 0;
                    for (_ = 0; _ < o; _++) {
                        for (p = 0,
                        g = 0; g < r; g++) {
                            for (h = a[p++],
                            d = a[p++],
                            f = v + 4 * h | 0,
                            s = l = c = u = 0; d > 0; d--)
                                m = a[p++],
                                u = u + m * t[f + 3] | 0,
                                c = c + m * t[f + 2] | 0,
                                l = l + m * t[f + 1] | 0,
                                s = s + m * t[f] | 0,
                                f = f + 4 | 0;
                            e[w + 3] = i(u + 8192 >> 14),
                            e[w + 2] = i(c + 8192 >> 14),
                            e[w + 1] = i(l + 8192 >> 14),
                            e[w] = i(s + 8192 >> 14),
                            w = w + 4 * o | 0
                        }
                        w = 4 * (_ + 1) | 0,
                        v = (_ + 1) * n * 4 | 0
                    }
                },
                convolveVertically: function(t, e, n, o, r, a) {
                    var s, l, c, u, p, h, d, f, _, g, m, v = 0, w = 0;
                    for (_ = 0; _ < o; _++) {
                        for (p = 0,
                        g = 0; g < r; g++) {
                            for (h = a[p++],
                            d = a[p++],
                            f = v + 4 * h | 0,
                            s = l = c = u = 0; d > 0; d--)
                                m = a[p++],
                                u = u + m * t[f + 3] | 0,
                                c = c + m * t[f + 2] | 0,
                                l = l + m * t[f + 1] | 0,
                                s = s + m * t[f] | 0,
                                f = f + 4 | 0;
                            e[w + 3] = i(u + 8192 >> 14),
                            e[w + 2] = i(c + 8192 >> 14),
                            e[w + 1] = i(l + 8192 >> 14),
                            e[w] = i(s + 8192 >> 14),
                            w = w + 4 * o | 0
                        }
                        w = 4 * (_ + 1) | 0,
                        v = (_ + 1) * n * 4 | 0
                    }
                }
            }
        }
        , {}],
        3: [function(t, e, n) {
            "use strict";
            e.exports = "AGFzbQEAAAABFAJgBn9/f39/fwBgB39/f39/f38AAg8BA2VudgZtZW1vcnkCAAEDAwIAAQQEAXAAAAcZAghjb252b2x2ZQAACmNvbnZvbHZlSFYAAQkBAArmAwLBAwEQfwJAIANFDQAgBEUNACAFQQRqIRVBACEMQQAhDQNAIA0hDkEAIRFBACEHA0AgB0ECaiESAn8gBSAHQQF0IgdqIgZBAmouAQAiEwRAQQAhCEEAIBNrIRQgFSAHaiEPIAAgDCAGLgEAakECdGohEEEAIQlBACEKQQAhCwNAIBAoAgAiB0EYdiAPLgEAIgZsIAtqIQsgB0H/AXEgBmwgCGohCCAHQRB2Qf8BcSAGbCAKaiEKIAdBCHZB/wFxIAZsIAlqIQkgD0ECaiEPIBBBBGohECAUQQFqIhQNAAsgEiATagwBC0EAIQtBACEKQQAhCUEAIQggEgshByABIA5BAnRqIApBgMAAakEOdSIGQf8BIAZB/wFIG0EQdEGAgPwHcUEAIAZBAEobIAtBgMAAakEOdSIGQf8BIAZB/wFIG0EYdEEAIAZBAEobciAJQYDAAGpBDnUiBkH/ASAGQf8BSBtBCHRBgP4DcUEAIAZBAEobciAIQYDAAGpBDnUiBkH/ASAGQf8BSBtB/wFxQQAgBkEAShtyNgIAIA4gA2ohDiARQQFqIhEgBEcNAAsgDCACaiEMIA1BAWoiDSADRw0ACwsLIQACQEEAIAIgAyAEIAUgABAAIAJBACAEIAUgBiABEAALCw=="
        }
        , {}],
        4: [function(t, e, n) {
            "use strict";
            e.exports = {
                name: "resize",
                fn: t("./resize"),
                wasm_fn: t("./resize_wasm"),
                wasm_src: t("./convolve_wasm_base64")
            }
        }
        , {
            "./convolve_wasm_base64": 3,
            "./resize": 5,
            "./resize_wasm": 8
        }],
        5: [function(t, e, n) {
            "use strict";
            var i = t("./resize_filter_gen")
              , o = t("./convolve").convolveHorizontally
              , r = t("./convolve").convolveVertically;
            e.exports = function(t) {
                var e = t.src
                  , n = t.width
                  , a = t.height
                  , s = t.toWidth
                  , l = t.toHeight
                  , c = t.scaleX || t.toWidth / t.width
                  , u = t.scaleY || t.toHeight / t.height
                  , p = t.offsetX || 0
                  , h = t.offsetY || 0
                  , d = t.dest || new Uint8Array(s * l * 4)
                  , f = void 0 === t.quality ? 3 : t.quality
                  , _ = t.alpha || !1
                  , g = i(f, n, s, c, p)
                  , m = i(f, a, l, u, h)
                  , v = new Uint8Array(s * a * 4);
                return o(e, v, n, a, s, g),
                r(v, d, a, s, l, m),
                _ || function(t, e, n) {
                    for (var i = 3, o = e * n * 4 | 0; i < o; )
                        t[i] = 255,
                        i = i + 4 | 0
                }(d, s, l),
                d
            }
        }
        , {
            "./convolve": 2,
            "./resize_filter_gen": 6
        }],
        6: [function(t, e, n) {
            "use strict";
            var i = t("./resize_filter_info")
              , o = 14;
            function r(t) {
                return Math.round(t * ((1 << o) - 1))
            }
            e.exports = function(t, e, n, o, a) {
                var s, l, c, u, p, h, d, f, _, g, m, v, w, b, y, A, x, C = i[t].filter, I = 1 / o, B = Math.min(1, o), E = i[t].win / B, k = Math.floor(2 * (E + 1)), S = new Int16Array((k + 2) * n), M = 0, O = !S.subarray || !S.set;
                for (s = 0; s < n; s++) {
                    for (l = (s + .5) * I + a,
                    c = Math.max(0, Math.floor(l - E)),
                    u = Math.min(e - 1, Math.ceil(l + E)),
                    p = u - c + 1,
                    h = new Float32Array(p),
                    d = new Int16Array(p),
                    f = 0,
                    _ = c,
                    g = 0; _ <= u; _++,
                    g++)
                        m = C((_ + .5 - l) * B),
                        f += m,
                        h[g] = m;
                    for (v = 0,
                    g = 0; g < h.length; g++)
                        w = h[g] / f,
                        v += w,
                        d[g] = r(w);
                    for (d[n >> 1] += r(1 - v),
                    b = 0; b < d.length && 0 === d[b]; )
                        b++;
                    if (b < d.length) {
                        for (y = d.length - 1; y > 0 && 0 === d[y]; )
                            y--;
                        if (A = c + b,
                        x = y - b + 1,
                        S[M++] = A,
                        S[M++] = x,
                        O)
                            for (g = b; g <= y; g++)
                                S[M++] = d[g];
                        else
                            S.set(d.subarray(b, y + 1), M),
                            M += x
                    } else
                        S[M++] = 0,
                        S[M++] = 0
                }
                return S
            }
        }
        , {
            "./resize_filter_info": 7
        }],
        7: [function(t, e, n) {
            "use strict";
            e.exports = [{
                win: .5,
                filter: function(t) {
                    return t >= -.5 && t < .5 ? 1 : 0
                }
            }, {
                win: 1,
                filter: function(t) {
                    if (t <= -1 || t >= 1)
                        return 0;
                    if (t > -1.1920929e-7 && t < 1.1920929e-7)
                        return 1;
                    var e = t * Math.PI;
                    return Math.sin(e) / e * (.54 + .46 * Math.cos(e / 1))
                }
            }, {
                win: 2,
                filter: function(t) {
                    if (t <= -2 || t >= 2)
                        return 0;
                    if (t > -1.1920929e-7 && t < 1.1920929e-7)
                        return 1;
                    var e = t * Math.PI;
                    return Math.sin(e) / e * Math.sin(e / 2) / (e / 2)
                }
            }, {
                win: 3,
                filter: function(t) {
                    if (t <= -3 || t >= 3)
                        return 0;
                    if (t > -1.1920929e-7 && t < 1.1920929e-7)
                        return 1;
                    var e = t * Math.PI;
                    return Math.sin(e) / e * Math.sin(e / 3) / (e / 3)
                }
            }]
        }
        , {}],
        8: [function(t, e, n) {
            "use strict";
            var i = t("./resize_filter_gen")
              , o = !0;
            try {
                o = 1 === new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0]
            } catch (t) {}
            function r(t, e, n) {
                if (o)
                    e.set(function(t) {
                        return new Uint8Array(t.buffer,0,t.byteLength)
                    }(t), n);
                else
                    for (var i = n, r = 0; r < t.length; r++) {
                        var a = t[r];
                        e[i++] = 255 & a,
                        e[i++] = a >> 8 & 255
                    }
            }
            e.exports = function(t) {
                var e = t.src
                  , n = t.width
                  , o = t.height
                  , a = t.toWidth
                  , s = t.toHeight
                  , l = t.scaleX || t.toWidth / t.width
                  , c = t.scaleY || t.toHeight / t.height
                  , u = t.offsetX || 0
                  , p = t.offsetY || 0
                  , h = t.dest || new Uint8Array(a * s * 4)
                  , d = void 0 === t.quality ? 3 : t.quality
                  , f = t.alpha || !1
                  , _ = i(d, n, a, l, u)
                  , g = i(d, o, s, c, p)
                  , m = this.__align(0 + Math.max(e.byteLength, h.byteLength))
                  , v = this.__align(m + o * a * 4)
                  , w = this.__align(v + _.byteLength)
                  , b = w + g.byteLength
                  , y = this.__instance("resize", b)
                  , A = new Uint8Array(this.__memory.buffer)
                  , x = new Uint32Array(this.__memory.buffer)
                  , C = new Uint32Array(e.buffer);
                x.set(C),
                r(_, A, v),
                r(g, A, w);
                var I = y.exports.convolveHV || y.exports._convolveHV;
                I(v, w, m, n, o, a, s);
                var B = new Uint32Array(h.buffer);
                return B.set(new Uint32Array(this.__memory.buffer,0,s * a)),
                f || function(t, e, n) {
                    for (var i = 3, o = e * n * 4 | 0; i < o; )
                        t[i] = 255,
                        i = i + 4 | 0
                }(h, a, s),
                h
            }
        }
        , {
            "./resize_filter_gen": 6
        }],
        9: [function(t, e, n) {
            "use strict";
            function i(t, e) {
                this.create = t,
                this.available = [],
                this.acquired = {},
                this.lastId = 1,
                this.timeoutId = 0,
                this.idle = e || 2e3
            }
            i.prototype.acquire = function() {
                var t, e = this;
                return 0 !== this.available.length ? t = this.available.pop() : ((t = this.create()).id = this.lastId++,
                t.release = function() {
                    return e.release(t)
                }
                ),
                this.acquired[t.id] = t,
                t
            }
            ,
            i.prototype.release = function(t) {
                var e = this;
                delete this.acquired[t.id],
                t.lastUsed = Date.now(),
                this.available.push(t),
                0 === this.timeoutId && (this.timeoutId = setTimeout(function() {
                    return e.gc()
                }, 100))
            }
            ,
            i.prototype.gc = function() {
                var t = this
                  , e = Date.now();
                this.available = this.available.filter(function(n) {
                    return !(e - n.lastUsed > t.idle && (n.destroy(),
                    1))
                }),
                0 !== this.available.length ? this.timeoutId = setTimeout(function() {
                    return t.gc()
                }, 100) : this.timeoutId = 0
            }
            ,
            e.exports = i
        }
        , {}],
        10: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n, i, o, r) {
                var a = n / t
                  , s = i / e
                  , l = (2 * r + 2 + 1) / o;
                if (l > .5)
                    return [[n, i]];
                var c = Math.ceil(Math.log(Math.min(a, s)) / Math.log(l));
                if (c <= 1)
                    return [[n, i]];
                for (var u = [], p = 0; p < c; p++) {
                    var h = Math.round(Math.pow(Math.pow(t, c - p - 1) * Math.pow(n, p + 1), 1 / c))
                      , d = Math.round(Math.pow(Math.pow(e, c - p - 1) * Math.pow(i, p + 1), 1 / c));
                    u.push([h, d])
                }
                return u
            }
        }
        , {}],
        11: [function(t, e, n) {
            "use strict";
            var i = 1e-5;
            function o(t) {
                var e = Math.round(t);
                return Math.abs(t - e) < i ? e : Math.floor(t)
            }
            function r(t) {
                var e = Math.round(t);
                return Math.abs(t - e) < i ? e : Math.ceil(t)
            }
            e.exports = function(t) {
                var e, n, i, a, s, l, c = t.toWidth / t.width, u = t.toHeight / t.height, p = o(t.srcTileSize * c) - 2 * t.destTileBorder, h = o(t.srcTileSize * u) - 2 * t.destTileBorder;
                if (p < 1 || h < 1)
                    throw new Error("Internal error in pica: target tile width/height is too small.");
                var d, f = [];
                for (a = 0; a < t.toHeight; a += h)
                    for (i = 0; i < t.toWidth; i += p)
                        (e = i - t.destTileBorder) < 0 && (e = 0),
                        s = i + p + t.destTileBorder - e,
                        e + s >= t.toWidth && (s = t.toWidth - e),
                        (n = a - t.destTileBorder) < 0 && (n = 0),
                        l = a + h + t.destTileBorder - n,
                        n + l >= t.toHeight && (l = t.toHeight - n),
                        d = {
                            toX: e,
                            toY: n,
                            toWidth: s,
                            toHeight: l,
                            toInnerX: i,
                            toInnerY: a,
                            toInnerWidth: p,
                            toInnerHeight: h,
                            offsetX: e / c - o(e / c),
                            offsetY: n / u - o(n / u),
                            scaleX: c,
                            scaleY: u,
                            x: o(e / c),
                            y: o(n / u),
                            width: r(s / c),
                            height: r(l / u)
                        },
                        f.push(d);
                return f
            }
        }
        , {}],
        12: [function(t, e, n) {
            "use strict";
            function i(t) {
                return Object.prototype.toString.call(t)
            }
            e.exports.isCanvas = function(t) {
                var e = i(t);
                return "[object HTMLCanvasElement]" === e || "[object Canvas]" === e
            }
            ,
            e.exports.isImage = function(t) {
                return "[object HTMLImageElement]" === i(t)
            }
            ,
            e.exports.limiter = function(t) {
                var e = 0
                  , n = [];
                function i() {
                    e < t && n.length && (e++,
                    n.shift()())
                }
                return function(t) {
                    return new Promise(function(o, r) {
                        n.push(function() {
                            t().then(function(t) {
                                o(t),
                                e--,
                                i()
                            }, function(t) {
                                r(t),
                                e--,
                                i()
                            })
                        }),
                        i()
                    }
                    )
                }
            }
            ,
            e.exports.cib_quality_name = function(t) {
                switch (t) {
                case 0:
                    return "pixelated";
                case 1:
                    return "low";
                case 2:
                    return "medium"
                }
                return "high"
            }
            ,
            e.exports.cib_support = function() {
                return Promise.resolve().then(function() {
                    if ("undefined" == typeof createImageBitmap || "undefined" == typeof document)
                        return !1;
                    var t = document.createElement("canvas");
                    return t.width = 100,
                    t.height = 100,
                    createImageBitmap(t, 0, 0, 100, 100, {
                        resizeWidth: 10,
                        resizeHeight: 10,
                        resizeQuality: "high"
                    }).then(function(e) {
                        var n = 10 === e.width;
                        return e.close(),
                        t = null,
                        n
                    })
                }).catch(function() {
                    return !1
                })
            }
        }
        , {}],
        13: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                var e, n = t("./mathlib");
                onmessage = function(t) {
                    var i = t.data.opts;
                    e || (e = new n(t.data.features));
                    var o = e.resizeAndUnsharp(i);
                    postMessage({
                        result: o
                    }, [o.buffer])
                }
            }
        }
        , {
            "./mathlib": 1
        }],
        14: [function(t, e, n) {
            var i, o, r, a, s, l;
            function c(t, e, n, i, o, r) {
                var a, s, l, c, u, p, h, d, f, _, g, m, v, w;
                for (f = 0; f < r; f++) {
                    for (h = f,
                    d = 0,
                    a = t[p = f * o],
                    u = a * i[6],
                    c = u,
                    g = i[0],
                    m = i[1],
                    v = i[4],
                    w = i[5],
                    _ = 0; _ < o; _++)
                        s = t[p],
                        l = s * g + a * m + c * v + u * w,
                        u = c,
                        c = l,
                        a = s,
                        n[d] = c,
                        d++,
                        p++;
                    for (d--,
                    h += r * (o - 1),
                    a = t[--p],
                    u = a * i[7],
                    c = u,
                    s = a,
                    g = i[2],
                    m = i[3],
                    _ = o - 1; _ >= 0; _--)
                        l = s * g + a * m + c * v + u * w,
                        u = c,
                        c = l,
                        a = s,
                        s = t[p],
                        e[h] = n[d] + c,
                        p--,
                        d--,
                        h -= r
                }
            }
            e.exports = function(t, e, n, u) {
                if (u) {
                    var p = new Uint16Array(t.length)
                      , h = new Float32Array(Math.max(e, n))
                      , d = function(t) {
                        t < .5 && (t = .5);
                        var e = Math.exp(.527076) / t
                          , n = Math.exp(-e)
                          , c = Math.exp(-2 * e)
                          , u = (1 - n) * (1 - n) / (1 + 2 * e * n - c);
                        return i = u,
                        o = u * (e - 1) * n,
                        r = u * (e + 1) * n,
                        a = -u * c,
                        s = 2 * n,
                        l = -c,
                        new Float32Array([i, o, r, a, s, l, (i + o) / (1 - s - l), (r + a) / (1 - s - l)])
                    }(u);
                    c(t, p, h, d, e, n),
                    c(p, t, h, d, n, e)
                }
            }
        }
        , {}],
        15: [function(t, e, n) {
            "function" == typeof Object.create ? e.exports = function(t, e) {
                t.super_ = e,
                t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            : e.exports = function(t, e) {
                t.super_ = e;
                var n = function() {};
                n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype.constructor = t
            }
        }
        , {}],
        16: [function(t, e, n) {
            "use strict";
            var i = t("object-assign")
              , o = t("./lib/base64decode")
              , r = t("./lib/wa_detect")
              , a = {
                js: !0,
                wasm: !0
            };
            function s(t) {
                if (!(this instanceof s))
                    return new s(t);
                var e = i({}, a, t || {});
                if (this.options = e,
                this.__cache = {},
                this.has_wasm = r(),
                this.__init_promise = null,
                this.__modules = e.modules || {},
                this.__memory = null,
                this.__wasm = {},
                this.__isLE = 1 === new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0],
                !this.options.js && !this.options.wasm)
                    throw new Error('mathlib: at least "js" or "wasm" should be enabled')
            }
            s.prototype.use = function(t) {
                return this.__modules[t.name] = t,
                this.has_wasm && this.options.wasm && t.wasm_fn ? this[t.name] = t.wasm_fn : this[t.name] = t.fn,
                this
            }
            ,
            s.prototype.init = function() {
                if (this.__init_promise)
                    return this.__init_promise;
                if (!this.options.js && this.options.wasm && !this.has_wasm)
                    return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));
                var t = this;
                return this.__init_promise = Promise.all(Object.keys(t.__modules).map(function(e) {
                    var n = t.__modules[e];
                    return t.has_wasm && t.options.wasm && n.wasm_fn ? t.__wasm[e] ? null : WebAssembly.compile(t.__base64decode(n.wasm_src)).then(function(n) {
                        t.__wasm[e] = n
                    }) : null
                })).then(function() {
                    return t
                }),
                this.__init_promise
            }
            ,
            s.prototype.__base64decode = o,
            s.prototype.__reallocate = function(t) {
                if (!this.__memory)
                    return this.__memory = new WebAssembly.Memory({
                        initial: Math.ceil(t / 65536)
                    }),
                    this.__memory;
                var e = this.__memory.buffer.byteLength;
                return e < t && this.__memory.grow(Math.ceil((t - e) / 65536)),
                this.__memory
            }
            ,
            s.prototype.__instance = function(t, e, n) {
                if (e && this.__reallocate(e),
                !this.__wasm[t]) {
                    var o = this.__modules[t];
                    this.__wasm[t] = new WebAssembly.Module(this.__base64decode(o.wasm_src))
                }
                if (!this.__cache[t]) {
                    var r = {
                        memoryBase: 0,
                        memory: this.__memory,
                        tableBase: 0,
                        table: new WebAssembly.Table({
                            initial: 0,
                            element: "anyfunc"
                        })
                    };
                    this.__cache[t] = new WebAssembly.Instance(this.__wasm[t],{
                        env: i(r, n || {})
                    })
                }
                return this.__cache[t]
            }
            ,
            s.prototype.__align = function(t, e) {
                var n = t % (e = e || 8);
                return t + (n ? e - n : 0)
            }
            ,
            e.exports = s
        }
        , {
            "./lib/base64decode": 17,
            "./lib/wa_detect": 23,
            "object-assign": 24
        }],
        17: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                for (var e = t.replace(/[\r\n=]/g, ""), n = e.length, i = new Uint8Array(3 * n >> 2), o = 0, r = 0, a = 0; a < n; a++)
                    a % 4 == 0 && a && (i[r++] = o >> 16 & 255,
                    i[r++] = o >> 8 & 255,
                    i[r++] = 255 & o),
                    o = o << 6 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(a));
                var s = n % 4 * 6;
                return 0 === s ? (i[r++] = o >> 16 & 255,
                i[r++] = o >> 8 & 255,
                i[r++] = 255 & o) : 18 === s ? (i[r++] = o >> 10 & 255,
                i[r++] = o >> 2 & 255) : 12 === s && (i[r++] = o >> 4 & 255),
                i
            }
        }
        , {}],
        18: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n) {
                for (var i, o, r, a, s, l = e * n, c = new Uint16Array(l), u = 0; u < l; u++)
                    i = t[4 * u],
                    o = t[4 * u + 1],
                    r = t[4 * u + 2],
                    s = i >= o && i >= r ? i : o >= r && o >= i ? o : r,
                    a = i <= o && i <= r ? i : o <= r && o <= i ? o : r,
                    c[u] = 257 * (s + a) >> 1;
                return c
            }
        }
        , {}],
        19: [function(t, e, n) {
            "use strict";
            e.exports = {
                name: "unsharp_mask",
                fn: t("./unsharp_mask"),
                wasm_fn: t("./unsharp_mask_wasm"),
                wasm_src: t("./unsharp_mask_wasm_base64")
            }
        }
        , {
            "./unsharp_mask": 20,
            "./unsharp_mask_wasm": 21,
            "./unsharp_mask_wasm_base64": 22
        }],
        20: [function(t, e, n) {
            "use strict";
            var i = t("glur/mono16")
              , o = t("./hsl_l16");
            e.exports = function(t, e, n, r, a, s) {
                var l, c, u, p, h, d, f, _, g, m, v, w, b;
                if (!(0 === r || a < .5)) {
                    a > 2 && (a = 2);
                    var y = o(t, e, n)
                      , A = new Uint16Array(y);
                    i(A, e, n, a);
                    for (var x = r / 100 * 4096 + .5 | 0, C = 257 * s | 0, I = e * n, B = 0; B < I; B++)
                        w = 2 * (y[B] - A[B]),
                        Math.abs(w) >= C && (l = t[b = 4 * B],
                        c = t[b + 1],
                        u = t[b + 2],
                        d = 257 * ((_ = l >= c && l >= u ? l : c >= l && c >= u ? c : u) + (f = l <= c && l <= u ? l : c <= l && c <= u ? c : u)) >> 1,
                        f === _ ? p = h = 0 : (h = d <= 32767 ? 4095 * (_ - f) / (_ + f) | 0 : 4095 * (_ - f) / (510 - _ - f) | 0,
                        p = l === _ ? 65535 * (c - u) / (6 * (_ - f)) | 0 : c === _ ? 21845 + (65535 * (u - l) / (6 * (_ - f)) | 0) : 43690 + (65535 * (l - c) / (6 * (_ - f)) | 0)),
                        (d += x * w + 2048 >> 12) > 65535 ? d = 65535 : d < 0 && (d = 0),
                        0 === h ? l = c = u = d >> 8 : (g = 2 * d - (m = d <= 32767 ? d * (4096 + h) + 2048 >> 12 : d + ((65535 - d) * h + 2048 >> 12)) >> 8,
                        m >>= 8,
                        l = (v = p + 21845 & 65535) >= 43690 ? g : v >= 32767 ? g + (6 * (m - g) * (43690 - v) + 32768 >> 16) : v >= 10922 ? m : g + (6 * (m - g) * v + 32768 >> 16),
                        c = (v = 65535 & p) >= 43690 ? g : v >= 32767 ? g + (6 * (m - g) * (43690 - v) + 32768 >> 16) : v >= 10922 ? m : g + (6 * (m - g) * v + 32768 >> 16),
                        u = (v = p - 21845 & 65535) >= 43690 ? g : v >= 32767 ? g + (6 * (m - g) * (43690 - v) + 32768 >> 16) : v >= 10922 ? m : g + (6 * (m - g) * v + 32768 >> 16)),
                        t[b] = l,
                        t[b + 1] = c,
                        t[b + 2] = u)
                }
            }
        }
        , {
            "./hsl_l16": 18,
            "glur/mono16": 14
        }],
        21: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n, i, o, r) {
                if (!(0 === i || o < .5)) {
                    o > 2 && (o = 2);
                    var a = e * n
                      , s = 4 * a
                      , l = 2 * a
                      , c = 2 * a
                      , u = 4 * Math.max(e, n)
                      , p = s
                      , h = p + l
                      , d = h + c
                      , f = d + c
                      , _ = f + u
                      , g = this.__instance("unsharp_mask", s + l + 2 * c + u + 32, {
                        exp: Math.exp
                    })
                      , m = new Uint32Array(t.buffer)
                      , v = new Uint32Array(this.__memory.buffer);
                    v.set(m);
                    var w = g.exports.hsl_l16 || g.exports._hsl_l16;
                    w(0, p, e, n),
                    (w = g.exports.blurMono16 || g.exports._blurMono16)(p, h, d, f, _, e, n, o),
                    (w = g.exports.unsharp || g.exports._unsharp)(0, 0, p, h, e, n, i, r),
                    m.set(new Uint32Array(this.__memory.buffer,0,a))
                }
            }
        }
        , {}],
        22: [function(t, e, n) {
            "use strict";
            e.exports = "AGFzbQEAAAABMQZgAXwBfGACfX8AYAZ/f39/f38AYAh/f39/f39/fQBgBH9/f38AYAh/f39/f39/fwACGQIDZW52A2V4cAAAA2VudgZtZW1vcnkCAAEDBgUBAgMEBQQEAXAAAAdMBRZfX2J1aWxkX2dhdXNzaWFuX2NvZWZzAAEOX19nYXVzczE2X2xpbmUAAgpibHVyTW9ubzE2AAMHaHNsX2wxNgAEB3Vuc2hhcnAABQkBAAqJEAXZAQEGfAJAIAFE24a6Q4Ia+z8gALujIgOaEAAiBCAEoCIGtjgCECABIANEAAAAAAAAAMCiEAAiBbaMOAIUIAFEAAAAAAAA8D8gBKEiAiACoiAEIAMgA6CiRAAAAAAAAPA/oCAFoaMiArY4AgAgASAEIANEAAAAAAAA8L+gIAKioiIHtjgCBCABIAQgA0QAAAAAAADwP6AgAqKiIgO2OAIIIAEgBSACoiIEtow4AgwgASACIAegIAVEAAAAAAAA8D8gBqGgIgKjtjgCGCABIAMgBKEgAqO2OAIcCwu3AwMDfwR9CHwCQCADKgIUIQkgAyoCECEKIAMqAgwhCyADKgIIIQwCQCAEQX9qIgdBAEgiCA0AIAIgAC8BALgiDSADKgIYu6IiDiAJuyIQoiAOIAq7IhGiIA0gAyoCBLsiEqIgAyoCALsiEyANoqCgoCIPtjgCACACQQRqIQIgAEECaiEAIAdFDQAgBCEGA0AgAiAOIBCiIA8iDiARoiANIBKiIBMgAC8BALgiDaKgoKAiD7Y4AgAgAkEEaiECIABBAmohACAGQX9qIgZBAUoNAAsLAkAgCA0AIAEgByAFbEEBdGogAEF+ai8BACIIuCINIAu7IhGiIA0gDLsiEqKgIA0gAyoCHLuiIg4gCrsiE6KgIA4gCbsiFKKgIg8gAkF8aioCALugqzsBACAHRQ0AIAJBeGohAiAAQXxqIQBBACAFQQF0ayEHIAEgBSAEQQF0QXxqbGohBgNAIAghAyAALwEAIQggBiANIBGiIAO4Ig0gEqKgIA8iECAToqAgDiAUoqAiDyACKgIAu6CrOwEAIAYgB2ohBiAAQX5qIQAgAkF8aiECIBAhDiAEQX9qIgRBAUoNAAsLCwvfAgIDfwZ8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIgyaEAAiDSANoCIPtjgCECAEIAxEAAAAAAAAAMCiEAAiDraMOAIUIAREAAAAAAAA8D8gDaEiCyALoiANIAwgDKCiRAAAAAAAAPA/oCAOoaMiC7Y4AgAgBCANIAxEAAAAAAAA8L+gIAuioiIQtjgCBCAEIA0gDEQAAAAAAADwP6AgC6KiIgy2OAIIIAQgDiALoiINtow4AgwgBCALIBCgIA5EAAAAAAAA8D8gD6GgIgujtjgCGCAEIAwgDaEgC6O2OAIcIAYEQCAFQQF0IQogBiEJIAIhCANAIAAgCCADIAQgBSAGEAIgACAKaiEAIAhBAmohCCAJQX9qIgkNAAsLIAVFDQAgBkEBdCEIIAUhAANAIAIgASADIAQgBiAFEAIgAiAIaiECIAFBAmohASAAQX9qIgANAAsLC7wBAQV/IAMgAmwiAwRAQQAgA2shBgNAIAAoAgAiBEEIdiIHQf8BcSECAn8gBEH/AXEiAyAEQRB2IgRB/wFxIgVPBEAgAyIIIAMgAk8NARoLIAQgBCAHIAIgA0kbIAIgBUkbQf8BcQshCAJAIAMgAk0EQCADIAVNDQELIAQgByAEIAMgAk8bIAIgBUsbQf8BcSEDCyAAQQRqIQAgASADIAhqQYECbEEBdjsBACABQQJqIQEgBkEBaiIGDQALCwvTBgEKfwJAIAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6CqIQ0gBSAEbCILBEAgB0GBAmwhDgNAQQAgAi8BACADLwEAayIGQQF0IgdrIAcgBkEASBsgDk8EQCAAQQJqLQAAIQUCfyAALQAAIgYgAEEBai0AACIESSIJRQRAIAYiCCAGIAVPDQEaCyAFIAUgBCAEIAVJGyAGIARLGwshCAJ/IAYgBE0EQCAGIgogBiAFTQ0BGgsgBSAFIAQgBCAFSxsgCRsLIgogCGoiD0GBAmwiEEEBdiERQQAhDAJ/QQAiCSAIIApGDQAaIAggCmsiCUH/H2wgD0H+AyAIayAKayAQQYCABEkbbSEMIAYgCEYEQCAEIAVrQf//A2wgCUEGbG0MAQsgBSAGayAGIARrIAQgCEYiBhtB//8DbCAJQQZsbUHVqgFBqtUCIAYbagshCSARIAcgDWxBgBBqQQx1aiIGQQAgBkEAShsiBkH//wMgBkH//wNIGyEGAkACfwJAIAxB//8DcSIFBEAgBkH//wFKDQEgBUGAIGogBmxBgBBqQQx2DAILIAZBCHYiBiEFIAYhBAwCCyAFIAZB//8Dc2xBgBBqQQx2IAZqCyIFQQh2IQcgBkEBdCAFa0EIdiIGIQQCQCAJQdWqAWpB//8DcSIFQanVAksNACAFQf//AU8EQEGq1QIgBWsgByAGa2xBBmxBgIACakEQdiAGaiEEDAELIAchBCAFQanVAEsNACAFIAcgBmtsQQZsQYCAAmpBEHYgBmohBAsCfyAGIgUgCUH//wNxIghBqdUCSw0AGkGq1QIgCGsgByAGa2xBBmxBgIACakEQdiAGaiAIQf//AU8NABogByIFIAhBqdUASw0AGiAIIAcgBmtsQQZsQYCAAmpBEHYgBmoLIQUgCUGr1QJqQf//A3EiCEGp1QJLDQAgCEH//wFPBEBBqtUCIAhrIAcgBmtsQQZsQYCAAmpBEHYgBmohBgwBCyAIQanVAEsEQCAHIQYMAQsgCCAHIAZrbEEGbEGAgAJqQRB2IAZqIQYLIAEgBDoAACABQQFqIAU6AAAgAUECaiAGOgAACyADQQJqIQMgAkECaiECIABBBGohACABQQRqIQEgC0F/aiILDQALCwsL"
        }
        , {}],
        23: [function(t, e, n) {
            "use strict";
            var i;
            e.exports = function() {
                if (void 0 !== i)
                    return i;
                if (i = !1,
                "undefined" == typeof WebAssembly)
                    return i;
                try {
                    var t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11])
                      , e = new WebAssembly.Module(t)
                      , n = new WebAssembly.Instance(e,{});
                    return 0 !== n.exports.test(4) && (i = !0),
                    i
                } catch (t) {}
                return i
            }
        }
        , {}],
        24: [function(t, e, n) {
            /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
            "use strict";
            var i = Object.getOwnPropertySymbols
              , o = Object.prototype.hasOwnProperty
              , r = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var t = new String("abc");
                    if (t[5] = "de",
                    "5" === Object.getOwnPropertyNames(t)[0])
                        return !1;
                    for (var e = {}, n = 0; n < 10; n++)
                        e["_" + String.fromCharCode(n)] = n;
                    var i = Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    });
                    if ("0123456789" !== i.join(""))
                        return !1;
                    var o = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        o[t] = t
                    }),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var n, a, s = function(t) {
                    if (null == t)
                        throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), l = 1; l < arguments.length; l++) {
                    for (var c in n = Object(arguments[l]))
                        o.call(n, c) && (s[c] = n[c]);
                    if (i) {
                        a = i(n);
                        for (var u = 0; u < a.length; u++)
                            r.call(n, a[u]) && (s[a[u]] = n[a[u]])
                    }
                }
                return s
            }
        }
        , {}],
        25: [function(t, e, n) {
            var i = arguments[3]
              , o = arguments[4]
              , r = arguments[5]
              , a = JSON.stringify;
            e.exports = function(t, e) {
                for (var n, s = Object.keys(r), l = 0, c = s.length; l < c; l++) {
                    var u = s[l]
                      , p = r[u].exports;
                    if (p === t || p && p.default === t) {
                        n = u;
                        break
                    }
                }
                if (!n) {
                    n = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var h = {}, l = 0, c = s.length; l < c; l++) {
                        var u = s[l];
                        h[u] = u
                    }
                    o[n] = ["function(require,module,exports){" + t + "(self); }", h]
                }
                var d = Math.floor(Math.pow(16, 8) * Math.random()).toString(16)
                  , f = {};
                f[n] = n,
                o[d] = ["function(require,module,exports){var f = require(" + a(n) + ");(f.default ? f.default : f)(self);}", f];
                var _ = {};
                !function t(e) {
                    for (var n in _[e] = !0,
                    o[e][1]) {
                        var i = o[e][1][n];
                        _[i] || t(i)
                    }
                }(d);
                var g = "(" + i + ")({" + Object.keys(_).map(function(t) {
                    return a(t) + ":[" + o[t][0] + "," + a(o[t][1]) + "]"
                }).join(",") + "},{},[" + a(d) + "])"
                  , m = window.URL || window.webkitURL || window.mozURL || window.msURL
                  , v = new Blob([g],{
                    type: "text/javascript"
                });
                if (e && e.bare)
                    return v;
                var w = m.createObjectURL(v)
                  , b = new Worker(w);
                return b.objectURL = w,
                b
            }
        }
        , {}],
        "/": [function(t, e, n) {
            "use strict";
            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = []
                      , i = !0
                      , o = !1
                      , r = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                        !e || n.length !== e); i = !0)
                            ;
                    } catch (t) {
                        o = !0,
                        r = t
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (o)
                                throw r
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var o = t("object-assign")
              , r = t("webworkify")
              , a = t("./lib/mathlib")
              , s = t("./lib/pool")
              , l = t("./lib/utils")
              , c = t("./lib/worker")
              , u = t("./lib/stepper")
              , p = t("./lib/tiler")
              , h = {}
              , d = !1;
            try {
                "undefined" != typeof navigator && navigator.userAgent && (d = navigator.userAgent.indexOf("Safari") >= 0)
            } catch (t) {}
            var f = 1;
            "undefined" != typeof navigator && (f = Math.min(navigator.hardwareConcurrency || 1, 4));
            var _, g, m = {
                tile: 1024,
                concurrency: f,
                features: ["js", "wasm", "ww"],
                idle: 2e3
            }, v = {
                quality: 3,
                alpha: !1,
                unsharpAmount: 0,
                unsharpRadius: 0,
                unsharpThreshold: 0
            };
            function w() {
                return {
                    value: r(c),
                    destroy: function() {
                        if (this.value.terminate(),
                        "undefined" != typeof window) {
                            var t = window.URL || window.webkitURL || window.mozURL || window.msURL;
                            t && t.revokeObjectURL && this.value.objectURL && t.revokeObjectURL(this.value.objectURL)
                        }
                    }
                }
            }
            function b(t) {
                if (!(this instanceof b))
                    return new b(t);
                this.options = o({}, m, t || {});
                var e = "lk_".concat(this.options.concurrency);
                this.__limit = h[e] || l.limiter(this.options.concurrency),
                h[e] || (h[e] = this.__limit),
                this.features = {
                    js: !1,
                    wasm: !1,
                    cib: !1,
                    ww: !1
                },
                this.__workersPool = null,
                this.__requested_features = [],
                this.__mathlib = null
            }
            b.prototype.init = function() {
                var e = this;
                if (this.__initPromise)
                    return this.__initPromise;
                if (!1 !== _ && !0 !== _ && (_ = !1,
                "undefined" != typeof ImageData && "undefined" != typeof Uint8ClampedArray))
                    try {
                        new ImageData(new Uint8ClampedArray(400),10,10),
                        _ = !0
                    } catch (t) {}
                !1 !== g && !0 !== g && (g = !1,
                "undefined" != typeof ImageBitmap && (ImageBitmap.prototype && ImageBitmap.prototype.close ? g = !0 : this.debug("ImageBitmap does not support .close(), disabled")));
                var n = this.options.features.slice();
                if (n.indexOf("all") >= 0 && (n = ["cib", "wasm", "js", "ww"]),
                this.__requested_features = n,
                this.__mathlib = new a(n),
                n.indexOf("ww") >= 0 && "undefined" != typeof window && "Worker"in window)
                    try {
                        var i = t("webworkify")(function() {});
                        i.terminate(),
                        this.features.ww = !0;
                        var r = "wp_".concat(JSON.stringify(this.options));
                        h[r] ? this.__workersPool = h[r] : (this.__workersPool = new s(w,this.options.idle),
                        h[r] = this.__workersPool)
                    } catch (t) {}
                var c, u = this.__mathlib.init().then(function(t) {
                    o(e.features, t.features)
                });
                return c = g ? l.cib_support().then(function(t) {
                    e.features.cib && n.indexOf("cib") < 0 ? e.debug("createImageBitmap() resize supported, but disabled by config") : n.indexOf("cib") >= 0 && (e.features.cib = t)
                }) : Promise.resolve(!1),
                this.__initPromise = Promise.all([u, c]).then(function() {
                    return e
                }),
                this.__initPromise
            }
            ,
            b.prototype.resize = function(t, e, n) {
                var r = this;
                this.debug("Start resize...");
                var a = o({}, v);
                if (isNaN(n) ? n && (a = o(a, n)) : a = o(a, {
                    quality: n
                }),
                a.toWidth = e.width,
                a.toHeight = e.height,
                a.width = t.naturalWidth || t.width,
                a.height = t.naturalHeight || t.height,
                0 === e.width || 0 === e.height)
                    return Promise.reject(new Error("Invalid output size: ".concat(e.width, "x").concat(e.height)));
                a.unsharpRadius > 2 && (a.unsharpRadius = 2);
                var s = !1
                  , c = null;
                a.cancelToken && (c = a.cancelToken.then(function(t) {
                    throw s = !0,
                    t
                }, function(t) {
                    throw s = !0,
                    t
                }));
                var h = Math.ceil(Math.max(3, 2.5 * a.unsharpRadius | 0));
                return this.init().then(function() {
                    if (s)
                        return c;
                    if (r.features.cib) {
                        var n = e.getContext("2d", {
                            alpha: Boolean(a.alpha)
                        });
                        return r.debug("Resize via createImageBitmap()"),
                        createImageBitmap(t, {
                            resizeWidth: a.toWidth,
                            resizeHeight: a.toHeight,
                            resizeQuality: l.cib_quality_name(a.quality)
                        }).then(function(t) {
                            if (s)
                                return c;
                            if (!a.unsharpAmount)
                                return n.drawImage(t, 0, 0),
                                t.close(),
                                n = null,
                                r.debug("Finished!"),
                                e;
                            r.debug("Unsharp result");
                            var i = document.createElement("canvas");
                            i.width = a.toWidth,
                            i.height = a.toHeight;
                            var o = i.getContext("2d", {
                                alpha: Boolean(a.alpha)
                            });
                            o.drawImage(t, 0, 0),
                            t.close();
                            var l = o.getImageData(0, 0, a.toWidth, a.toHeight);
                            return r.__mathlib.unsharp(l.data, a.toWidth, a.toHeight, a.unsharpAmount, a.unsharpRadius, a.unsharpThreshold),
                            n.putImageData(l, 0, 0),
                            l = o = i = n = null,
                            r.debug("Finished!"),
                            e
                        })
                    }
                    var f = {}
                      , m = function(t, e, n) {
                        var i, o, a, u = function(e) {
                            return r.__limit(function() {
                                if (s)
                                    return c;
                                var u;
                                if (l.isCanvas(t))
                                    r.debug("Get tile pixel data"),
                                    u = i.getImageData(e.x, e.y, e.width, e.height);
                                else {
                                    r.debug("Draw tile imageBitmap/image to temporary canvas");
                                    var p = document.createElement("canvas");
                                    p.width = e.width,
                                    p.height = e.height;
                                    var h = p.getContext("2d", {
                                        alpha: Boolean(n.alpha)
                                    });
                                    h.globalCompositeOperation = "copy",
                                    h.drawImage(o || t, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height),
                                    r.debug("Get tile pixel data"),
                                    u = h.getImageData(0, 0, e.width, e.height),
                                    h = p = null
                                }
                                var g = {
                                    src: u.data,
                                    width: e.width,
                                    height: e.height,
                                    toWidth: e.toWidth,
                                    toHeight: e.toHeight,
                                    scaleX: e.scaleX,
                                    scaleY: e.scaleY,
                                    offsetX: e.offsetX,
                                    offsetY: e.offsetY,
                                    quality: n.quality,
                                    alpha: n.alpha,
                                    unsharpAmount: n.unsharpAmount,
                                    unsharpRadius: n.unsharpRadius,
                                    unsharpThreshold: n.unsharpThreshold
                                };
                                return r.debug("Invoke resize math"),
                                Promise.resolve().then(function() {
                                    return t = g,
                                    Promise.resolve().then(function() {
                                        return r.features.ww ? new Promise(function(e, n) {
                                            var i = r.__workersPool.acquire();
                                            c && c.catch(function(t) {
                                                return n(t)
                                            }),
                                            i.value.onmessage = function(t) {
                                                i.release(),
                                                t.data.err ? n(t.data.err) : e(t.data.result)
                                            }
                                            ,
                                            i.value.postMessage({
                                                opts: t,
                                                features: r.__requested_features,
                                                preload: {
                                                    wasm_nodule: r.__mathlib.__
                                                }
                                            }, [t.src.buffer])
                                        }
                                        ) : r.__mathlib.resizeAndUnsharp(t, f)
                                    });
                                    var t
                                }).then(function(t) {
                                    if (s)
                                        return c;
                                    var n;
                                    if (u = null,
                                    r.debug("Convert raw rgba tile result to ImageData"),
                                    _)
                                        n = new ImageData(new Uint8ClampedArray(t),e.toWidth,e.toHeight);
                                    else if ((n = a.createImageData(e.toWidth, e.toHeight)).data.set)
                                        n.data.set(t);
                                    else
                                        for (var i = n.data.length - 1; i >= 0; i--)
                                            n.data[i] = t[i];
                                    return r.debug("Draw tile"),
                                    d ? a.putImageData(n, e.toX, e.toY, e.toInnerX - e.toX, e.toInnerY - e.toY, e.toInnerWidth + 1e-5, e.toInnerHeight + 1e-5) : a.putImageData(n, e.toX, e.toY, e.toInnerX - e.toX, e.toInnerY - e.toY, e.toInnerWidth, e.toInnerHeight),
                                    null
                                })
                            })
                        };
                        return Promise.resolve().then(function() {
                            if (a = e.getContext("2d", {
                                alpha: Boolean(n.alpha)
                            }),
                            l.isCanvas(t))
                                return i = t.getContext("2d", {
                                    alpha: Boolean(n.alpha)
                                }),
                                null;
                            if (l.isImage(t))
                                return g ? (r.debug("Decode image via createImageBitmap"),
                                createImageBitmap(t).then(function(t) {
                                    o = t
                                })) : null;
                            throw new Error('".from" should be image or canvas')
                        }).then(function() {
                            if (s)
                                return c;
                            r.debug("Calculate tiles");
                            var t = p({
                                width: n.width,
                                height: n.height,
                                srcTileSize: r.options.tile,
                                toWidth: n.toWidth,
                                toHeight: n.toHeight,
                                destTileBorder: h
                            })
                              , i = t.map(function(t) {
                                return u(t)
                            });
                            function a() {
                                o && (o.close(),
                                o = null)
                            }
                            return r.debug("Process tiles"),
                            Promise.all(i).then(function() {
                                return r.debug("Finished!"),
                                a(),
                                e
                            }, function(t) {
                                throw a(),
                                t
                            })
                        })
                    }
                      , v = u(a.width, a.height, a.toWidth, a.toHeight, r.options.tile, h);
                    return function t(e, n, r, a) {
                        if (s)
                            return c;
                        var l, u = i(e.shift(), 2), p = u[0], h = u[1], d = 0 === e.length;
                        return a = o({}, a, {
                            toWidth: p,
                            toHeight: h,
                            quality: d ? a.quality : Math.min(1, a.quality)
                        }),
                        d || ((l = document.createElement("canvas")).width = p,
                        l.height = h),
                        m(n, d ? r : l, a).then(function() {
                            return d ? r : (a.width = p,
                            a.height = h,
                            t(e, l, r, a))
                        })
                    }(v, t, e, a)
                })
            }
            ,
            b.prototype.resizeBuffer = function(t) {
                var e = this
                  , n = o({}, v, t);
                return this.init().then(function() {
                    return e.__mathlib.resizeAndUnsharp(n)
                })
            }
            ,
            b.prototype.toBlob = function(t, e, n) {
                return e = e || "image/png",
                new Promise(function(i) {
                    if (t.toBlob)
                        t.toBlob(function(t) {
                            return i(t)
                        }, e, n);
                    else {
                        for (var o = atob(t.toDataURL(e, n).split(",")[1]), r = o.length, a = new Uint8Array(r), s = 0; s < r; s++)
                            a[s] = o.charCodeAt(s);
                        i(new Blob([a],{
                            type: e
                        }))
                    }
                }
                )
            }
            ,
            b.prototype.debug = function() {}
            ,
            e.exports = b
        }
        , {
            "./lib/mathlib": 1,
            "./lib/pool": 9,
            "./lib/stepper": 10,
            "./lib/tiler": 11,
            "./lib/utils": 12,
            "./lib/worker": 13,
            "object-assign": 24,
            webworkify: 25
        }]
    }, {}, [])("/")
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(58)
      , r = n(4);
    e.default = function() {
        var t = r.useStoreon("settings")
          , e = t.dispatch
          , n = t.settings
          , a = n.height < 30 || n.width < 30;
        return i.h("div", {
            className: o.canvasControls
        }, i.h("div", {
            className: o.canvasControl
        }, i.h("input", {
            id: "cancel-image",
            type: "checkbox",
            onChange: function() {
                return e("settings/clear"),
                void e("image/cancel")
            },
            checked: n.cropMode
        }), i.h("label", {
            for: "cancel-image"
        }, i.h("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, i.h("path", {
            d: "M1 9L9 1",
            stroke: "#333333",
            "stroke-width": "1.5"
        }), i.h("path", {
            d: "M1 1L9 9",
            stroke: "#333333",
            "stroke-width": "1.5"
        })))), i.h("div", {
            className: o.canvasControl
        }, i.h("input", {
            id: "crop-mode-toggle",
            type: "checkbox",
            onChange: function(t) {
                return function(t) {
                    a || e("settings/crop/mode", t.target.checked)
                }(t)
            },
            checked: n.cropMode,
            disabled: a
        }), i.h("label", {
            for: "crop-mode-toggle"
        }, i.h("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            xmlns: "http://www.w3.org/2000/svg"
        }, i.h("path", {
            d: "M13.5333 10.6062H11.5395V3.12047L13.1415 1.5185C13.3237 1.33623 13.3237 1.04078 13.1415 0.858517C12.9593 0.676293 12.6637 0.676293 12.4815 0.858517L10.8795 2.46049H3.39382V0.466667C3.39382 0.208955 3.18487 0 2.92716 0C2.66945 0 2.46049 0.208955 2.46049 0.466667V2.46049H0.466667C0.208955 2.46049 0 2.66945 0 2.92716C0 3.18487 0.208955 3.39382 0.466667 3.39382H2.46049V11.0728C2.46049 11.3306 2.66945 11.5395 2.92716 11.5395H10.6062V13.5333C10.6062 13.791 10.8151 14 11.0728 14C11.3306 14 11.5395 13.791 11.5395 13.5333V11.5395H13.5333C13.791 11.5395 14 11.3306 14 11.0728C14 10.8151 13.791 10.6062 13.5333 10.6062ZM9.9462 3.39382L3.39382 9.9462V3.39382H9.9462ZM4.0538 10.6062L10.6062 4.0538V10.6062H4.0538Z",
            fill: "black"
        })))))
    }
}
, function(t, e, n) {
    var i = n(59);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".CanvasControls-module___canvasControls___1mIlN {\n  position: absolute;\n  top: -16px;\n  left: -16px;\n  z-index: 990; }\n  .CanvasControls-module___canvasControls___1mIlN input {\n    visibility: hidden; }\n  .chrome-ext .CanvasControls-module___canvasControls___1mIlN {\n    top: 8px;\n    left: 8px; }\n\n.CanvasControls-module___canvasControl___3jJ3z {\n  width: 34px;\n  height: 34px; }\n  .CanvasControls-module___canvasControl___3jJ3z input {\n    display: none; }\n    .CanvasControls-module___canvasControl___3jJ3z input:disabled + label {\n      opacity: 0.6;\n      cursor: not-allowed; }\n    .CanvasControls-module___canvasControl___3jJ3z input:checked + label svg path {\n      fill: #02c873; }\n  .CanvasControls-module___canvasControl___3jJ3z label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background: #ffffff;\n    box-shadow: 0px 2px 4px rgba(180, 188, 199, 0.3);\n    cursor: pointer; }\n  .CanvasControls-module___canvasControl___3jJ3z ~ .CanvasControls-module___canvasControl___3jJ3z {\n    margin-top: 8px; }\n", ""]),
    e.locals = {
        canvasControls: "CanvasControls-module___canvasControls___1mIlN",
        canvasControl: "CanvasControls-module___canvasControl___3jJ3z"
    }
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5)
      , r = {
        width: null,
        height: null,
        defaultWidth: null,
        defaultHeight: null,
        displayWidth: null,
        displayHeight: null,
        type: null,
        quality: .8,
        cropMode: !1,
        cropPreset: o.CropPreset.custom,
        cropWidth: null,
        cropHeight: null
    };
    e.default = function(t) {
        t.on("@init", function() {
            return {
                settings: r
            }
        }),
        t.on("settings/clear", function() {
            return {
                settings: i({}, r)
            }
        }),
        t.on("settings/size", function(t, e) {
            var n = t.settings
              , o = e.width
              , r = e.height
              , a = {};
            return n.defaultWidth || n.defaultHeight || (a.defaultWidth = o,
            a.defaultHeight = r),
            {
                settings: i(i(i({}, n), a), {
                    width: o,
                    height: r
                })
            }
        }),
        t.on("settings/type", function(t, e) {
            var n = t.settings
              , o = e.type;
            return {
                settings: i(i({}, n), {
                    type: o
                })
            }
        }),
        t.on("settings/quality", function(t, e) {
            var n = t.settings
              , o = e.quality;
            return {
                settings: i(i({}, n), {
                    quality: o
                })
            }
        }),
        t.on("settings/crop/mode", function(t, e) {
            var n = t.settings;
            return {
                settings: i(i({}, n), {
                    cropMode: e
                })
            }
        }),
        t.on("settings/crop/preset", function(t, e) {
            var n = t.settings;
            return {
                settings: i(i({}, n), {
                    cropPreset: e
                })
            }
        }),
        t.on("settings/crop/size", function(t, e) {
            var n = t.settings
              , o = e.width
              , r = e.height;
            return {
                settings: i(i({}, n), {
                    cropWidth: Math.round(o),
                    cropHeight: Math.round(r)
                })
            }
        }),
        t.on("settings/crop/apply", function(t) {
            var e = t.settings;
            return {
                settings: i(i({}, e), {
                    cropMode: !1,
                    cropPreset: o.CropPreset.custom,
                    width: e.cropWidth,
                    height: e.cropHeight
                })
            }
        }),
        t.on("settings/crop/cancel", function(t) {
            var e = t.settings;
            return {
                settings: i(i({}, e), {
                    cropMode: !1,
                    cropPreset: o.CropPreset.custom
                })
            }
        })
    }
}
, function(t, e, n) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = {
        type: null,
        completedNotification: !1,
        uploadAnimation: !1,
        dropAnimation: !1
    };
    e.default = function(t) {
        t.on("@init", function() {
            return {
                image: i({}, o)
            }
        }),
        t.on("image/upload", function(t, e) {
            var n = t.image
              , o = e.type;
            return {
                image: i(i({}, n), {
                    type: o
                })
            }
        }),
        t.on("image/cancel", function(t) {
            return {
                image: t.image
            }
        }),
        t.on("image/notification", function(t, e) {
            var n = t.image;
            return {
                image: i(i({}, n), {
                    completedNotification: e
                })
            }
        }),
        t.on("image/animation", function(t, e) {
            var n = t.image;
            return {
                image: i(i({}, n), {
                    uploadAnimation: e
                })
            }
        }),
        t.on("image/preloader", function(t, e) {
            var n = t.image;
            return {
                image: i(i({}, n), {
                    preloader: e
                })
            }
        }),
        t.on("image/drop/enter", function(t) {
            var e = t.image;
            return {
                image: i(i({}, e), {
                    dropAnimation: !0
                })
            }
        }),
        t.on("image/drop/leave", function(t) {
            var e = t.image;
            return {
                image: i(i({}, e), {
                    dropAnimation: !1
                })
            }
        })
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "createStoreon", function() {
        return i
    });
    let i = t=>{
        let e = {}
          , n = {}
          , i = {
            dispatch(t, o) {
                if ("@dispatch" !== t && i.dispatch("@dispatch", [t, o, e[t]]),
                e[t]) {
                    let r, a = {};
                    e[t].forEach(t=>{
                        let e = t(n, o);
                        e && "function" != typeof e.then && (r = n = {
                            ...n,
                            ...e
                        },
                        a = {
                            ...a,
                            ...e
                        })
                    }
                    ),
                    r && i.dispatch("@changed", a)
                }
            },
            get: ()=>n,
            on: (t,n)=>((e[t] || (e[t] = [])).push(n),
            ()=>{
                e[t] = e[t].filter(t=>t !== n)
            }
            )
        };
        return t.forEach(t=>{
            t && t(i)
        }
        ),
        i.dispatch("@init"),
        i
    }
}
, function(t, e, n) {
    "use strict";
    let i;
    n.r(e),
    n.d(e, "storeonDevtools", function() {
        return r
    }),
    n.d(e, "storeonLogger", function() {
        return o
    }),
    i = "undefined" != typeof navigator && "ReactNative" !== navigator.product ? (t,e,n)=>{
        void 0 !== n ? console.log("%c" + t + " %c" + e, "color: #070", "color: #070; font-weight: 700", n) : console.log("%c" + t + " %c" + e, "color: #070", "color: #070; font-weight: 700")
    }
    : (t,e,n)=>{
        void 0 !== n ? console.log(t, e, n) : console.log(t, e)
    }
    ;
    let o = t=>{
        t.on("@dispatch", (t,e)=>{
            if ("@changed" === e[0]) {
                let n = Object.keys(e[1]).join(", ");
                i("changed", n, t)
            } else
                i("action", String(e[0]), e[1])
        }
        )
    }
      , r = t=>{
        let e = t && t.on && t.dispatch && t.get
          , n = n=>{
            let i;
            try {
                i = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__
            } catch (t) {}
            if (!i)
                return void 0;
            let o = i.connect(e ? {} : t);
            n.on("@init", ()=>{
                o.subscribe(t=>{
                    "DISPATCH" === t.type && t.state && n.dispatch("UPDATE_FROM_DEVTOOLS", JSON.parse(t.state))
                }
                ),
                o.init(n.get())
            }
            );
            let r = "";
            n.on("@dispatch", (t,e)=>{
                let n = String(e[0]);
                if ("UPDATE_FROM_DEVTOOLS" !== n && "UPDATE_FROM_DEVTOOLS" !== r) {
                    if ("@" !== n[0] && (!e[2] || 0 === e[2].length))
                        throw new Error("Unknown Storeon event " + n);
                    ("@changed" !== n || Object.keys(e[1]).length) && o.send({
                        type: n,
                        payload: e[1]
                    }, t)
                }
                r = n
            }
            ),
            n.on("UPDATE_FROM_DEVTOOLS", (t,e)=>{
                let n, i = {};
                for (n in t)
                    i[n] = void 0;
                for (n in e)
                    i[n] = e[n];
                return i
            }
            )
        }
        ;
        return e ? n(t) : n
    }
}
, function(t, e, n) {
    /*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:48.372Z
 */
    t.exports = function() {
        "use strict";
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(e)
        }
        function e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function n(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? i(o, !0).forEach(function(e) {
                    n(t, e, o[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(o).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return t
        }
        function r(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                    return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var a = "undefined" != typeof window && void 0 !== window.document
          , s = a ? window : {}
          , l = !!a && "ontouchstart"in s.document.documentElement
          , c = !!a && "PointerEvent"in s
          , u = "".concat("cropper", "-crop")
          , p = "".concat("cropper", "-disabled")
          , h = "".concat("cropper", "-hidden")
          , d = "".concat("cropper", "-hide")
          , f = "".concat("cropper", "-invisible")
          , _ = "".concat("cropper", "-modal")
          , g = "".concat("cropper", "-move")
          , m = "".concat("cropper", "Action")
          , v = "".concat("cropper", "Preview")
          , w = l ? "touchstart" : "mousedown"
          , b = l ? "touchmove" : "mousemove"
          , y = l ? "touchend touchcancel" : "mouseup"
          , A = c ? "pointerdown" : w
          , x = c ? "pointermove" : b
          , C = c ? "pointerup pointercancel" : y
          , I = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/
          , B = /^data:/
          , E = /^data:image\/jpeg;base64,/
          , k = /^img|canvas$/i
          , S = {
            viewMode: 0,
            dragMode: "crop",
            initialAspectRatio: NaN,
            aspectRatio: NaN,
            data: null,
            preview: "",
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: .8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: .1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: 200,
            minContainerHeight: 100,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null
        }
          , M = Number.isNaN || s.isNaN;
        function O(t) {
            return "number" == typeof t && !M(t)
        }
        var D = function(t) {
            return t > 0 && t < 1 / 0
        };
        function z(t) {
            return void 0 === t
        }
        function N(e) {
            return "object" === t(e) && null !== e
        }
        var j = Object.prototype.hasOwnProperty;
        function U(t) {
            if (!N(t))
                return !1;
            try {
                var e = t.constructor
                  , n = e.prototype;
                return e && n && j.call(n, "isPrototypeOf")
            } catch (t) {
                return !1
            }
        }
        function P(t) {
            return "function" == typeof t
        }
        var H = Array.prototype.slice;
        function F(t) {
            return Array.from ? Array.from(t) : H.call(t)
        }
        function W(t, e) {
            return t && P(e) && (Array.isArray(t) || O(t.length) ? F(t).forEach(function(n, i) {
                e.call(t, n, i, t)
            }) : N(t) && Object.keys(t).forEach(function(n) {
                e.call(t, t[n], n, t)
            })),
            t
        }
        var T = Object.assign || function(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i];
            return N(t) && n.length > 0 && n.forEach(function(e) {
                N(e) && Object.keys(e).forEach(function(n) {
                    t[n] = e[n]
                })
            }),
            t
        }
          , Q = /\.\d*(?:0|9){12}\d*$/;
        function R(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
            return Q.test(t) ? Math.round(t * e) / e : t
        }
        var L = /^width|height|left|top|marginLeft|marginTop$/;
        function Y(t, e) {
            var n = t.style;
            W(e, function(t, e) {
                L.test(e) && O(t) && (t = "".concat(t, "px")),
                n[e] = t
            })
        }
        function q(t, e) {
            if (e)
                if (O(t.length))
                    W(t, function(t) {
                        q(t, e)
                    });
                else if (t.classList)
                    t.classList.add(e);
                else {
                    var n = t.className.trim();
                    n ? n.indexOf(e) < 0 && (t.className = "".concat(n, " ").concat(e)) : t.className = e
                }
        }
        function X(t, e) {
            e && (O(t.length) ? W(t, function(t) {
                X(t, e)
            }) : t.classList ? t.classList.remove(e) : t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, "")))
        }
        function G(t, e, n) {
            e && (O(t.length) ? W(t, function(t) {
                G(t, e, n)
            }) : n ? q(t, e) : X(t, e))
        }
        var V = /([a-z\d])([A-Z])/g;
        function Z(t) {
            return t.replace(V, "$1-$2").toLowerCase()
        }
        function J(t, e) {
            return N(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(Z(e)))
        }
        function K(t, e, n) {
            N(n) ? t[e] = n : t.dataset ? t.dataset[e] = n : t.setAttribute("data-".concat(Z(e)), n)
        }
        var $ = /\s\s*/
          , tt = function() {
            var t = !1;
            if (a) {
                var e = !1
                  , n = function() {}
                  , i = Object.defineProperty({}, "once", {
                    get: function() {
                        return t = !0,
                        e
                    },
                    set: function(t) {
                        e = t
                    }
                });
                s.addEventListener("test", n, i),
                s.removeEventListener("test", n, i)
            }
            return t
        }();
        function et(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , o = n;
            e.trim().split($).forEach(function(e) {
                if (!tt) {
                    var r = t.listeners;
                    r && r[e] && r[e][n] && (o = r[e][n],
                    delete r[e][n],
                    0 === Object.keys(r[e]).length && delete r[e],
                    0 === Object.keys(r).length && delete t.listeners)
                }
                t.removeEventListener(e, o, i)
            })
        }
        function nt(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , o = n;
            e.trim().split($).forEach(function(e) {
                if (i.once && !tt) {
                    var r = t.listeners
                      , a = void 0 === r ? {} : r;
                    o = function() {
                        delete a[e][n],
                        t.removeEventListener(e, o, i);
                        for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++)
                            s[l] = arguments[l];
                        n.apply(t, s)
                    }
                    ,
                    a[e] || (a[e] = {}),
                    a[e][n] && t.removeEventListener(e, a[e][n], i),
                    a[e][n] = o,
                    t.listeners = a
                }
                t.addEventListener(e, o, i)
            })
        }
        function it(t, e, n) {
            var i;
            return P(Event) && P(CustomEvent) ? i = new CustomEvent(e,{
                detail: n,
                bubbles: !0,
                cancelable: !0
            }) : (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, n),
            t.dispatchEvent(i)
        }
        function ot(t) {
            var e = t.getBoundingClientRect();
            return {
                left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
                top: e.top + (window.pageYOffset - document.documentElement.clientTop)
            }
        }
        var rt = s.location
          , at = /^(\w+:)\/\/([^:\/?#]*):?(\d*)/i;
        function st(t) {
            var e = t.match(at);
            return null !== e && (e[1] !== rt.protocol || e[2] !== rt.hostname || e[3] !== rt.port)
        }
        function lt(t) {
            var e = "timestamp=".concat((new Date).getTime());
            return t + (-1 === t.indexOf("?") ? "?" : "&") + e
        }
        function ct(t) {
            var e = t.rotate
              , n = t.scaleX
              , i = t.scaleY
              , o = t.translateX
              , r = t.translateY
              , a = [];
            O(o) && 0 !== o && a.push("translateX(".concat(o, "px)")),
            O(r) && 0 !== r && a.push("translateY(".concat(r, "px)")),
            O(e) && 0 !== e && a.push("rotate(".concat(e, "deg)")),
            O(n) && 1 !== n && a.push("scaleX(".concat(n, ")")),
            O(i) && 1 !== i && a.push("scaleY(".concat(i, ")"));
            var s = a.length ? a.join(" ") : "none";
            return {
                WebkitTransform: s,
                msTransform: s,
                transform: s
            }
        }
        function ut(t, e) {
            var n = t.pageX
              , i = t.pageY
              , r = {
                endX: n,
                endY: i
            };
            return e ? r : o({
                startX: n,
                startY: i
            }, r)
        }
        function pt(t) {
            var e = t.aspectRatio
              , n = t.height
              , i = t.width
              , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain"
              , r = D(i)
              , a = D(n);
            if (r && a) {
                var s = n * e;
                "contain" === o && s > i || "cover" === o && s < i ? n = i / e : i = n * e
            } else
                r ? n = i / e : a && (i = n * e);
            return {
                width: i,
                height: n
            }
        }
        var ht = String.fromCharCode
          , dt = /^data:.*,/;
        function ft(t) {
            var e, n = new DataView(t);
            try {
                var i, o, r;
                if (255 === n.getUint8(0) && 216 === n.getUint8(1))
                    for (var a = n.byteLength, s = 2; s + 1 < a; ) {
                        if (255 === n.getUint8(s) && 225 === n.getUint8(s + 1)) {
                            o = s;
                            break
                        }
                        s += 1
                    }
                if (o) {
                    var l = o + 4
                      , c = o + 10;
                    if ("Exif" === function(t, e, n) {
                        var i = "";
                        n += e;
                        for (var o = e; o < n; o += 1)
                            i += ht(t.getUint8(o));
                        return i
                    }(n, l, 4)) {
                        var u = n.getUint16(c);
                        if (((i = 18761 === u) || 19789 === u) && 42 === n.getUint16(c + 2, i)) {
                            var p = n.getUint32(c + 4, i);
                            p >= 8 && (r = c + p)
                        }
                    }
                }
                if (r) {
                    var h, d, f = n.getUint16(r, i);
                    for (d = 0; d < f; d += 1)
                        if (h = r + 12 * d + 2,
                        274 === n.getUint16(h, i)) {
                            h += 8,
                            e = n.getUint16(h, i),
                            n.setUint16(h, 1, i);
                            break
                        }
                }
            } catch (t) {
                e = 1
            }
            return e
        }
        var _t = {
            render: function() {
                this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()
            },
            initContainer: function() {
                var t = this.element
                  , e = this.options
                  , n = this.container
                  , i = this.cropper;
                q(i, h),
                X(t, h);
                var o = {
                    width: Math.max(n.offsetWidth, Number(e.minContainerWidth) || 200),
                    height: Math.max(n.offsetHeight, Number(e.minContainerHeight) || 100)
                };
                this.containerData = o,
                Y(i, {
                    width: o.width,
                    height: o.height
                }),
                q(t, h),
                X(i, h)
            },
            initCanvas: function() {
                var t = this.containerData
                  , e = this.imageData
                  , n = this.options.viewMode
                  , i = Math.abs(e.rotate) % 180 == 90
                  , o = i ? e.naturalHeight : e.naturalWidth
                  , r = i ? e.naturalWidth : e.naturalHeight
                  , a = o / r
                  , s = t.width
                  , l = t.height;
                t.height * a > t.width ? 3 === n ? s = t.height * a : l = t.width / a : 3 === n ? l = t.width / a : s = t.height * a;
                var c = {
                    aspectRatio: a,
                    naturalWidth: o,
                    naturalHeight: r,
                    width: s,
                    height: l
                };
                c.left = (t.width - s) / 2,
                c.top = (t.height - l) / 2,
                c.oldLeft = c.left,
                c.oldTop = c.top,
                this.canvasData = c,
                this.limited = 1 === n || 2 === n,
                this.limitCanvas(!0, !0),
                this.initialImageData = T({}, e),
                this.initialCanvasData = T({}, c)
            },
            limitCanvas: function(t, e) {
                var n = this.options
                  , i = this.containerData
                  , o = this.canvasData
                  , r = this.cropBoxData
                  , a = n.viewMode
                  , s = o.aspectRatio
                  , l = this.cropped && r;
                if (t) {
                    var c = Number(n.minCanvasWidth) || 0
                      , u = Number(n.minCanvasHeight) || 0;
                    a > 1 ? (c = Math.max(c, i.width),
                    u = Math.max(u, i.height),
                    3 === a && (u * s > c ? c = u * s : u = c / s)) : a > 0 && (c ? c = Math.max(c, l ? r.width : 0) : u ? u = Math.max(u, l ? r.height : 0) : l && (c = r.width,
                    (u = r.height) * s > c ? c = u * s : u = c / s));
                    var p = pt({
                        aspectRatio: s,
                        width: c,
                        height: u
                    });
                    c = p.width,
                    u = p.height,
                    o.minWidth = c,
                    o.minHeight = u,
                    o.maxWidth = 1 / 0,
                    o.maxHeight = 1 / 0
                }
                if (e)
                    if (a > (l ? 0 : 1)) {
                        var h = i.width - o.width
                          , d = i.height - o.height;
                        o.minLeft = Math.min(0, h),
                        o.minTop = Math.min(0, d),
                        o.maxLeft = Math.max(0, h),
                        o.maxTop = Math.max(0, d),
                        l && this.limited && (o.minLeft = Math.min(r.left, r.left + (r.width - o.width)),
                        o.minTop = Math.min(r.top, r.top + (r.height - o.height)),
                        o.maxLeft = r.left,
                        o.maxTop = r.top,
                        2 === a && (o.width >= i.width && (o.minLeft = Math.min(0, h),
                        o.maxLeft = Math.max(0, h)),
                        o.height >= i.height && (o.minTop = Math.min(0, d),
                        o.maxTop = Math.max(0, d))))
                    } else
                        o.minLeft = -o.width,
                        o.minTop = -o.height,
                        o.maxLeft = i.width,
                        o.maxTop = i.height
            },
            renderCanvas: function(t, e) {
                var n = this.canvasData
                  , i = this.imageData;
                if (e) {
                    var o = function(t) {
                        var e = t.width
                          , n = t.height
                          , i = t.degree;
                        if (90 == (i = Math.abs(i) % 180))
                            return {
                                width: n,
                                height: e
                            };
                        var o = i % 90 * Math.PI / 180
                          , r = Math.sin(o)
                          , a = Math.cos(o)
                          , s = e * a + n * r
                          , l = e * r + n * a;
                        return i > 90 ? {
                            width: l,
                            height: s
                        } : {
                            width: s,
                            height: l
                        }
                    }({
                        width: i.naturalWidth * Math.abs(i.scaleX || 1),
                        height: i.naturalHeight * Math.abs(i.scaleY || 1),
                        degree: i.rotate || 0
                    })
                      , r = o.width
                      , a = o.height
                      , s = n.width * (r / n.naturalWidth)
                      , l = n.height * (a / n.naturalHeight);
                    n.left -= (s - n.width) / 2,
                    n.top -= (l - n.height) / 2,
                    n.width = s,
                    n.height = l,
                    n.aspectRatio = r / a,
                    n.naturalWidth = r,
                    n.naturalHeight = a,
                    this.limitCanvas(!0, !1)
                }
                (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft),
                (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop),
                n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth),
                n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight),
                this.limitCanvas(!1, !0),
                n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft),
                n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop),
                n.oldLeft = n.left,
                n.oldTop = n.top,
                Y(this.canvas, T({
                    width: n.width,
                    height: n.height
                }, ct({
                    translateX: n.left,
                    translateY: n.top
                }))),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0)
            },
            renderImage: function(t) {
                var e = this.canvasData
                  , n = this.imageData
                  , i = n.naturalWidth * (e.width / e.naturalWidth)
                  , o = n.naturalHeight * (e.height / e.naturalHeight);
                T(n, {
                    width: i,
                    height: o,
                    left: (e.width - i) / 2,
                    top: (e.height - o) / 2
                }),
                Y(this.image, T({
                    width: n.width,
                    height: n.height
                }, ct(T({
                    translateX: n.left,
                    translateY: n.top
                }, n)))),
                t && this.output()
            },
            initCropBox: function() {
                var t = this.options
                  , e = this.canvasData
                  , n = t.aspectRatio || t.initialAspectRatio
                  , i = Number(t.autoCropArea) || .8
                  , o = {
                    width: e.width,
                    height: e.height
                };
                n && (e.height * n > e.width ? o.height = o.width / n : o.width = o.height * n),
                this.cropBoxData = o,
                this.limitCropBox(!0, !0),
                o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth),
                o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight),
                o.width = Math.max(o.minWidth, o.width * i),
                o.height = Math.max(o.minHeight, o.height * i),
                o.left = e.left + (e.width - o.width) / 2,
                o.top = e.top + (e.height - o.height) / 2,
                o.oldLeft = o.left,
                o.oldTop = o.top,
                this.initialCropBoxData = T({}, o)
            },
            limitCropBox: function(t, e) {
                var n = this.options
                  , i = this.containerData
                  , o = this.canvasData
                  , r = this.cropBoxData
                  , a = this.limited
                  , s = n.aspectRatio;
                if (t) {
                    var l = Number(n.minCropBoxWidth) || 0
                      , c = Number(n.minCropBoxHeight) || 0
                      , u = a ? Math.min(i.width, o.width, o.width + o.left, i.width - o.left) : i.width
                      , p = a ? Math.min(i.height, o.height, o.height + o.top, i.height - o.top) : i.height;
                    l = Math.min(l, i.width),
                    c = Math.min(c, i.height),
                    s && (l && c ? c * s > l ? c = l / s : l = c * s : l ? c = l / s : c && (l = c * s),
                    p * s > u ? p = u / s : u = p * s),
                    r.minWidth = Math.min(l, u),
                    r.minHeight = Math.min(c, p),
                    r.maxWidth = u,
                    r.maxHeight = p
                }
                e && (a ? (r.minLeft = Math.max(0, o.left),
                r.minTop = Math.max(0, o.top),
                r.maxLeft = Math.min(i.width, o.left + o.width) - r.width,
                r.maxTop = Math.min(i.height, o.top + o.height) - r.height) : (r.minLeft = 0,
                r.minTop = 0,
                r.maxLeft = i.width - r.width,
                r.maxTop = i.height - r.height))
            },
            renderCropBox: function() {
                var t = this.options
                  , e = this.containerData
                  , n = this.cropBoxData;
                (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft),
                (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop),
                n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth),
                n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight),
                this.limitCropBox(!1, !0),
                n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft),
                n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop),
                n.oldLeft = n.left,
                n.oldTop = n.top,
                t.movable && t.cropBoxMovable && K(this.face, m, n.width >= e.width && n.height >= e.height ? "move" : "all"),
                Y(this.cropBox, T({
                    width: n.width,
                    height: n.height
                }, ct({
                    translateX: n.left,
                    translateY: n.top
                }))),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output()
            },
            output: function() {
                this.preview(),
                it(this.element, "crop", this.getData())
            }
        }
          , gt = {
            initPreview: function() {
                var t = this.element
                  , e = this.crossOrigin
                  , n = this.options.preview
                  , i = e ? this.crossOriginUrl : this.url
                  , o = t.alt || "The image to preview"
                  , r = document.createElement("img");
                if (e && (r.crossOrigin = e),
                r.src = i,
                r.alt = o,
                this.viewBox.appendChild(r),
                this.viewBoxImage = r,
                n) {
                    var a = n;
                    "string" == typeof n ? a = t.ownerDocument.querySelectorAll(n) : n.querySelector && (a = [n]),
                    this.previews = a,
                    W(a, function(t) {
                        var n = document.createElement("img");
                        K(t, v, {
                            width: t.offsetWidth,
                            height: t.offsetHeight,
                            html: t.innerHTML
                        }),
                        e && (n.crossOrigin = e),
                        n.src = i,
                        n.alt = o,
                        n.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',
                        t.innerHTML = "",
                        t.appendChild(n)
                    })
                }
            },
            resetPreview: function() {
                W(this.previews, function(t) {
                    var e = J(t, v);
                    Y(t, {
                        width: e.width,
                        height: e.height
                    }),
                    t.innerHTML = e.html,
                    function(t, e) {
                        if (N(t[e]))
                            try {
                                delete t[e]
                            } catch (n) {
                                t[e] = void 0
                            }
                        else if (t.dataset)
                            try {
                                delete t.dataset[e]
                            } catch (n) {
                                t.dataset[e] = void 0
                            }
                        else
                            t.removeAttribute("data-".concat(Z(e)))
                    }(t, v)
                })
            },
            preview: function() {
                var t = this.imageData
                  , e = this.canvasData
                  , n = this.cropBoxData
                  , i = n.width
                  , o = n.height
                  , r = t.width
                  , a = t.height
                  , s = n.left - e.left - t.left
                  , l = n.top - e.top - t.top;
                this.cropped && !this.disabled && (Y(this.viewBoxImage, T({
                    width: r,
                    height: a
                }, ct(T({
                    translateX: -s,
                    translateY: -l
                }, t)))),
                W(this.previews, function(e) {
                    var n = J(e, v)
                      , c = n.width
                      , u = n.height
                      , p = c
                      , h = u
                      , d = 1;
                    i && (h = o * (d = c / i)),
                    o && h > u && (p = i * (d = u / o),
                    h = u),
                    Y(e, {
                        width: p,
                        height: h
                    }),
                    Y(e.getElementsByTagName("img")[0], T({
                        width: r * d,
                        height: a * d
                    }, ct(T({
                        translateX: -s * d,
                        translateY: -l * d
                    }, t))))
                }))
            }
        }
          , mt = {
            bind: function() {
                var t = this.element
                  , e = this.options
                  , n = this.cropper;
                P(e.cropstart) && nt(t, "cropstart", e.cropstart),
                P(e.cropmove) && nt(t, "cropmove", e.cropmove),
                P(e.cropend) && nt(t, "cropend", e.cropend),
                P(e.crop) && nt(t, "crop", e.crop),
                P(e.zoom) && nt(t, "zoom", e.zoom),
                nt(n, A, this.onCropStart = this.cropStart.bind(this)),
                e.zoomable && e.zoomOnWheel && nt(n, "wheel", this.onWheel = this.wheel.bind(this), {
                    passive: !1,
                    capture: !0
                }),
                e.toggleDragModeOnDblclick && nt(n, "dblclick", this.onDblclick = this.dblclick.bind(this)),
                nt(t.ownerDocument, x, this.onCropMove = this.cropMove.bind(this)),
                nt(t.ownerDocument, C, this.onCropEnd = this.cropEnd.bind(this)),
                e.responsive && nt(window, "resize", this.onResize = this.resize.bind(this))
            },
            unbind: function() {
                var t = this.element
                  , e = this.options
                  , n = this.cropper;
                P(e.cropstart) && et(t, "cropstart", e.cropstart),
                P(e.cropmove) && et(t, "cropmove", e.cropmove),
                P(e.cropend) && et(t, "cropend", e.cropend),
                P(e.crop) && et(t, "crop", e.crop),
                P(e.zoom) && et(t, "zoom", e.zoom),
                et(n, A, this.onCropStart),
                e.zoomable && e.zoomOnWheel && et(n, "wheel", this.onWheel, {
                    passive: !1,
                    capture: !0
                }),
                e.toggleDragModeOnDblclick && et(n, "dblclick", this.onDblclick),
                et(t.ownerDocument, x, this.onCropMove),
                et(t.ownerDocument, C, this.onCropEnd),
                e.responsive && et(window, "resize", this.onResize)
            }
        }
          , vt = {
            resize: function() {
                var t = this.options
                  , e = this.container
                  , n = this.containerData
                  , i = Number(t.minContainerWidth) || 200
                  , o = Number(t.minContainerHeight) || 100;
                if (!(this.disabled || n.width <= i || n.height <= o)) {
                    var r, a, s = e.offsetWidth / n.width;
                    1 === s && e.offsetHeight === n.height || (t.restore && (r = this.getCanvasData(),
                    a = this.getCropBoxData()),
                    this.render(),
                    t.restore && (this.setCanvasData(W(r, function(t, e) {
                        r[e] = t * s
                    })),
                    this.setCropBoxData(W(a, function(t, e) {
                        a[e] = t * s
                    }))))
                }
            },
            dblclick: function() {
                var t, e;
                this.disabled || "none" === this.options.dragMode || this.setDragMode((t = this.dragBox,
                e = u,
                (t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1) ? "move" : "crop"))
            },
            wheel: function(t) {
                var e = this
                  , n = Number(this.options.wheelZoomRatio) || .1
                  , i = 1;
                this.disabled || (t.preventDefault(),
                this.wheeling || (this.wheeling = !0,
                setTimeout(function() {
                    e.wheeling = !1
                }, 50),
                t.deltaY ? i = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? i = -t.wheelDelta / 120 : t.detail && (i = t.detail > 0 ? 1 : -1),
                this.zoom(-i * n, t)))
            },
            cropStart: function(t) {
                var e = t.buttons
                  , n = t.button;
                if (!(this.disabled || ("mousedown" === t.type || "pointerdown" === t.type && "mouse" === t.pointerType) && (O(e) && 1 !== e || O(n) && 0 !== n || t.ctrlKey))) {
                    var i, o = this.options, r = this.pointers;
                    t.changedTouches ? W(t.changedTouches, function(t) {
                        r[t.identifier] = ut(t)
                    }) : r[t.pointerId || 0] = ut(t),
                    i = Object.keys(r).length > 1 && o.zoomable && o.zoomOnTouch ? "zoom" : J(t.target, m),
                    I.test(i) && !1 !== it(this.element, "cropstart", {
                        originalEvent: t,
                        action: i
                    }) && (t.preventDefault(),
                    this.action = i,
                    this.cropping = !1,
                    "crop" === i && (this.cropping = !0,
                    q(this.dragBox, _)))
                }
            },
            cropMove: function(t) {
                var e = this.action;
                if (!this.disabled && e) {
                    var n = this.pointers;
                    t.preventDefault(),
                    !1 !== it(this.element, "cropmove", {
                        originalEvent: t,
                        action: e
                    }) && (t.changedTouches ? W(t.changedTouches, function(t) {
                        T(n[t.identifier] || {}, ut(t, !0))
                    }) : T(n[t.pointerId || 0] || {}, ut(t, !0)),
                    this.change(t))
                }
            },
            cropEnd: function(t) {
                if (!this.disabled) {
                    var e = this.action
                      , n = this.pointers;
                    t.changedTouches ? W(t.changedTouches, function(t) {
                        delete n[t.identifier]
                    }) : delete n[t.pointerId || 0],
                    e && (t.preventDefault(),
                    Object.keys(n).length || (this.action = ""),
                    this.cropping && (this.cropping = !1,
                    G(this.dragBox, _, this.cropped && this.options.modal)),
                    it(this.element, "cropend", {
                        originalEvent: t,
                        action: e
                    }))
                }
            }
        }
          , wt = {
            change: function(t) {
                var e, n = this.options, i = this.canvasData, r = this.containerData, a = this.cropBoxData, s = this.pointers, l = this.action, c = n.aspectRatio, u = a.left, p = a.top, d = a.width, f = a.height, _ = u + d, g = p + f, m = 0, v = 0, w = r.width, b = r.height, y = !0;
                !c && t.shiftKey && (c = d && f ? d / f : 1),
                this.limited && (m = a.minLeft,
                v = a.minTop,
                w = m + Math.min(r.width, i.width, i.left + i.width),
                b = v + Math.min(r.height, i.height, i.top + i.height));
                var A = s[Object.keys(s)[0]]
                  , x = {
                    x: A.endX - A.startX,
                    y: A.endY - A.startY
                }
                  , C = function(t) {
                    switch (t) {
                    case "e":
                        _ + x.x > w && (x.x = w - _);
                        break;
                    case "w":
                        u + x.x < m && (x.x = m - u);
                        break;
                    case "n":
                        p + x.y < v && (x.y = v - p);
                        break;
                    case "s":
                        g + x.y > b && (x.y = b - g)
                    }
                };
                switch (l) {
                case "all":
                    u += x.x,
                    p += x.y;
                    break;
                case "e":
                    if (x.x >= 0 && (_ >= w || c && (p <= v || g >= b))) {
                        y = !1;
                        break
                    }
                    C("e"),
                    (d += x.x) < 0 && (l = "w",
                    u -= d = -d),
                    c && (f = d / c,
                    p += (a.height - f) / 2);
                    break;
                case "n":
                    if (x.y <= 0 && (p <= v || c && (u <= m || _ >= w))) {
                        y = !1;
                        break
                    }
                    C("n"),
                    f -= x.y,
                    p += x.y,
                    f < 0 && (l = "s",
                    p -= f = -f),
                    c && (d = f * c,
                    u += (a.width - d) / 2);
                    break;
                case "w":
                    if (x.x <= 0 && (u <= m || c && (p <= v || g >= b))) {
                        y = !1;
                        break
                    }
                    C("w"),
                    d -= x.x,
                    u += x.x,
                    d < 0 && (l = "e",
                    u -= d = -d),
                    c && (f = d / c,
                    p += (a.height - f) / 2);
                    break;
                case "s":
                    if (x.y >= 0 && (g >= b || c && (u <= m || _ >= w))) {
                        y = !1;
                        break
                    }
                    C("s"),
                    (f += x.y) < 0 && (l = "n",
                    p -= f = -f),
                    c && (d = f * c,
                    u += (a.width - d) / 2);
                    break;
                case "ne":
                    if (c) {
                        if (x.y <= 0 && (p <= v || _ >= w)) {
                            y = !1;
                            break
                        }
                        C("n"),
                        f -= x.y,
                        p += x.y,
                        d = f * c
                    } else
                        C("n"),
                        C("e"),
                        x.x >= 0 ? _ < w ? d += x.x : x.y <= 0 && p <= v && (y = !1) : d += x.x,
                        x.y <= 0 ? p > v && (f -= x.y,
                        p += x.y) : (f -= x.y,
                        p += x.y);
                    d < 0 && f < 0 ? (l = "sw",
                    p -= f = -f,
                    u -= d = -d) : d < 0 ? (l = "nw",
                    u -= d = -d) : f < 0 && (l = "se",
                    p -= f = -f);
                    break;
                case "nw":
                    if (c) {
                        if (x.y <= 0 && (p <= v || u <= m)) {
                            y = !1;
                            break
                        }
                        C("n"),
                        f -= x.y,
                        p += x.y,
                        d = f * c,
                        u += a.width - d
                    } else
                        C("n"),
                        C("w"),
                        x.x <= 0 ? u > m ? (d -= x.x,
                        u += x.x) : x.y <= 0 && p <= v && (y = !1) : (d -= x.x,
                        u += x.x),
                        x.y <= 0 ? p > v && (f -= x.y,
                        p += x.y) : (f -= x.y,
                        p += x.y);
                    d < 0 && f < 0 ? (l = "se",
                    p -= f = -f,
                    u -= d = -d) : d < 0 ? (l = "ne",
                    u -= d = -d) : f < 0 && (l = "sw",
                    p -= f = -f);
                    break;
                case "sw":
                    if (c) {
                        if (x.x <= 0 && (u <= m || g >= b)) {
                            y = !1;
                            break
                        }
                        C("w"),
                        d -= x.x,
                        u += x.x,
                        f = d / c
                    } else
                        C("s"),
                        C("w"),
                        x.x <= 0 ? u > m ? (d -= x.x,
                        u += x.x) : x.y >= 0 && g >= b && (y = !1) : (d -= x.x,
                        u += x.x),
                        x.y >= 0 ? g < b && (f += x.y) : f += x.y;
                    d < 0 && f < 0 ? (l = "ne",
                    p -= f = -f,
                    u -= d = -d) : d < 0 ? (l = "se",
                    u -= d = -d) : f < 0 && (l = "nw",
                    p -= f = -f);
                    break;
                case "se":
                    if (c) {
                        if (x.x >= 0 && (_ >= w || g >= b)) {
                            y = !1;
                            break
                        }
                        C("e"),
                        d += x.x,
                        f = d / c
                    } else
                        C("s"),
                        C("e"),
                        x.x >= 0 ? _ < w ? d += x.x : x.y >= 0 && g >= b && (y = !1) : d += x.x,
                        x.y >= 0 ? g < b && (f += x.y) : f += x.y;
                    d < 0 && f < 0 ? (l = "nw",
                    p -= f = -f,
                    u -= d = -d) : d < 0 ? (l = "sw",
                    u -= d = -d) : f < 0 && (l = "ne",
                    p -= f = -f);
                    break;
                case "move":
                    this.move(x.x, x.y),
                    y = !1;
                    break;
                case "zoom":
                    this.zoom(function(t) {
                        var e = o({}, t)
                          , n = [];
                        return W(t, function(t, i) {
                            delete e[i],
                            W(e, function(e) {
                                var i = Math.abs(t.startX - e.startX)
                                  , o = Math.abs(t.startY - e.startY)
                                  , r = Math.abs(t.endX - e.endX)
                                  , a = Math.abs(t.endY - e.endY)
                                  , s = Math.sqrt(i * i + o * o)
                                  , l = (Math.sqrt(r * r + a * a) - s) / s;
                                n.push(l)
                            })
                        }),
                        n.sort(function(t, e) {
                            return Math.abs(t) < Math.abs(e)
                        }),
                        n[0]
                    }(s), t),
                    y = !1;
                    break;
                case "crop":
                    if (!x.x || !x.y) {
                        y = !1;
                        break
                    }
                    e = ot(this.cropper),
                    u = A.startX - e.left,
                    p = A.startY - e.top,
                    d = a.minWidth,
                    f = a.minHeight,
                    x.x > 0 ? l = x.y > 0 ? "se" : "ne" : x.x < 0 && (u -= d,
                    l = x.y > 0 ? "sw" : "nw"),
                    x.y < 0 && (p -= f),
                    this.cropped || (X(this.cropBox, h),
                    this.cropped = !0,
                    this.limited && this.limitCropBox(!0, !0))
                }
                y && (a.width = d,
                a.height = f,
                a.left = u,
                a.top = p,
                this.action = l,
                this.renderCropBox()),
                W(s, function(t) {
                    t.startX = t.endX,
                    t.startY = t.endY
                })
            }
        }
          , bt = {
            crop: function() {
                return !this.ready || this.cropped || this.disabled || (this.cropped = !0,
                this.limitCropBox(!0, !0),
                this.options.modal && q(this.dragBox, _),
                X(this.cropBox, h),
                this.setCropBoxData(this.initialCropBoxData)),
                this
            },
            reset: function() {
                return this.ready && !this.disabled && (this.imageData = T({}, this.initialImageData),
                this.canvasData = T({}, this.initialCanvasData),
                this.cropBoxData = T({}, this.initialCropBoxData),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()),
                this
            },
            clear: function() {
                return this.cropped && !this.disabled && (T(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                }),
                this.cropped = !1,
                this.renderCropBox(),
                this.limitCanvas(!0, !0),
                this.renderCanvas(),
                X(this.dragBox, _),
                q(this.cropBox, h)),
                this
            },
            replace: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !this.disabled && t && (this.isImg && (this.element.src = t),
                e ? (this.url = t,
                this.image.src = t,
                this.ready && (this.viewBoxImage.src = t,
                W(this.previews, function(e) {
                    e.getElementsByTagName("img")[0].src = t
                }))) : (this.isImg && (this.replaced = !0),
                this.options.data = null,
                this.uncreate(),
                this.load(t))),
                this
            },
            enable: function() {
                return this.ready && this.disabled && (this.disabled = !1,
                X(this.cropper, p)),
                this
            },
            disable: function() {
                return this.ready && !this.disabled && (this.disabled = !0,
                q(this.cropper, p)),
                this
            },
            destroy: function() {
                var t = this.element;
                return t.cropper ? (t.cropper = void 0,
                this.isImg && this.replaced && (t.src = this.originalUrl),
                this.uncreate(),
                this) : this
            },
            move: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                  , n = this.canvasData
                  , i = n.left
                  , o = n.top;
                return this.moveTo(z(t) ? t : i + Number(t), z(e) ? e : o + Number(e))
            },
            moveTo: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                  , n = this.canvasData
                  , i = !1;
                return t = Number(t),
                e = Number(e),
                this.ready && !this.disabled && this.options.movable && (O(t) && (n.left = t,
                i = !0),
                O(e) && (n.top = e,
                i = !0),
                i && this.renderCanvas(!0)),
                this
            },
            zoom: function(t, e) {
                var n = this.canvasData;
                return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t,
                this.zoomTo(n.width * t / n.naturalWidth, null, e)
            },
            zoomTo: function(t, e, n) {
                var i = this.options
                  , o = this.canvasData
                  , r = o.width
                  , a = o.height
                  , s = o.naturalWidth
                  , l = o.naturalHeight;
                if ((t = Number(t)) >= 0 && this.ready && !this.disabled && i.zoomable) {
                    var c = s * t
                      , u = l * t;
                    if (!1 === it(this.element, "zoom", {
                        ratio: t,
                        oldRatio: r / s,
                        originalEvent: n
                    }))
                        return this;
                    if (n) {
                        var p = this.pointers
                          , h = ot(this.cropper)
                          , d = p && Object.keys(p).length ? function(t) {
                            var e = 0
                              , n = 0
                              , i = 0;
                            return W(t, function(t) {
                                var o = t.startX
                                  , r = t.startY;
                                e += o,
                                n += r,
                                i += 1
                            }),
                            {
                                pageX: e /= i,
                                pageY: n /= i
                            }
                        }(p) : {
                            pageX: n.pageX,
                            pageY: n.pageY
                        };
                        o.left -= (c - r) * ((d.pageX - h.left - o.left) / r),
                        o.top -= (u - a) * ((d.pageY - h.top - o.top) / a)
                    } else
                        U(e) && O(e.x) && O(e.y) ? (o.left -= (c - r) * ((e.x - o.left) / r),
                        o.top -= (u - a) * ((e.y - o.top) / a)) : (o.left -= (c - r) / 2,
                        o.top -= (u - a) / 2);
                    o.width = c,
                    o.height = u,
                    this.renderCanvas(!0)
                }
                return this
            },
            rotate: function(t) {
                return this.rotateTo((this.imageData.rotate || 0) + Number(t))
            },
            rotateTo: function(t) {
                return O(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360,
                this.renderCanvas(!0, !0)),
                this
            },
            scaleX: function(t) {
                var e = this.imageData.scaleY;
                return this.scale(t, O(e) ? e : 1)
            },
            scaleY: function(t) {
                var e = this.imageData.scaleX;
                return this.scale(O(e) ? e : 1, t)
            },
            scale: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                  , n = this.imageData
                  , i = !1;
                return t = Number(t),
                e = Number(e),
                this.ready && !this.disabled && this.options.scalable && (O(t) && (n.scaleX = t,
                i = !0),
                O(e) && (n.scaleY = e,
                i = !0),
                i && this.renderCanvas(!0, !0)),
                this
            },
            getData: function() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this.options, i = this.imageData, o = this.canvasData, r = this.cropBoxData;
                if (this.ready && this.cropped) {
                    t = {
                        x: r.left - o.left,
                        y: r.top - o.top,
                        width: r.width,
                        height: r.height
                    };
                    var a = i.width / i.naturalWidth;
                    if (W(t, function(e, n) {
                        t[n] = e / a
                    }),
                    e) {
                        var s = Math.round(t.y + t.height)
                          , l = Math.round(t.x + t.width);
                        t.x = Math.round(t.x),
                        t.y = Math.round(t.y),
                        t.width = l - t.x,
                        t.height = s - t.y
                    }
                } else
                    t = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                return n.rotatable && (t.rotate = i.rotate || 0),
                n.scalable && (t.scaleX = i.scaleX || 1,
                t.scaleY = i.scaleY || 1),
                t
            },
            setData: function(t) {
                var e = this.options
                  , n = this.imageData
                  , i = this.canvasData
                  , o = {};
                if (this.ready && !this.disabled && U(t)) {
                    var r = !1;
                    e.rotatable && O(t.rotate) && t.rotate !== n.rotate && (n.rotate = t.rotate,
                    r = !0),
                    e.scalable && (O(t.scaleX) && t.scaleX !== n.scaleX && (n.scaleX = t.scaleX,
                    r = !0),
                    O(t.scaleY) && t.scaleY !== n.scaleY && (n.scaleY = t.scaleY,
                    r = !0)),
                    r && this.renderCanvas(!0, !0);
                    var a = n.width / n.naturalWidth;
                    O(t.x) && (o.left = t.x * a + i.left),
                    O(t.y) && (o.top = t.y * a + i.top),
                    O(t.width) && (o.width = t.width * a),
                    O(t.height) && (o.height = t.height * a),
                    this.setCropBoxData(o)
                }
                return this
            },
            getContainerData: function() {
                return this.ready ? T({}, this.containerData) : {}
            },
            getImageData: function() {
                return this.sized ? T({}, this.imageData) : {}
            },
            getCanvasData: function() {
                var t = this.canvasData
                  , e = {};
                return this.ready && W(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
                    e[n] = t[n]
                }),
                e
            },
            setCanvasData: function(t) {
                var e = this.canvasData
                  , n = e.aspectRatio;
                return this.ready && !this.disabled && U(t) && (O(t.left) && (e.left = t.left),
                O(t.top) && (e.top = t.top),
                O(t.width) ? (e.width = t.width,
                e.height = t.width / n) : O(t.height) && (e.height = t.height,
                e.width = t.height * n),
                this.renderCanvas(!0)),
                this
            },
            getCropBoxData: function() {
                var t, e = this.cropBoxData;
                return this.ready && this.cropped && (t = {
                    left: e.left,
                    top: e.top,
                    width: e.width,
                    height: e.height
                }),
                t || {}
            },
            setCropBoxData: function(t) {
                var e, n, i = this.cropBoxData, o = this.options.aspectRatio;
                return this.ready && this.cropped && !this.disabled && U(t) && (O(t.left) && (i.left = t.left),
                O(t.top) && (i.top = t.top),
                O(t.width) && t.width !== i.width && (e = !0,
                i.width = t.width),
                O(t.height) && t.height !== i.height && (n = !0,
                i.height = t.height),
                o && (e ? i.height = i.width / o : n && (i.width = i.height * o)),
                this.renderCropBox()),
                this
            },
            getCroppedCanvas: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.ready || !window.HTMLCanvasElement)
                    return null;
                var e = this.canvasData
                  , n = function(t, e, n, i) {
                    var o = e.aspectRatio
                      , a = e.naturalWidth
                      , s = e.naturalHeight
                      , l = e.rotate
                      , c = void 0 === l ? 0 : l
                      , u = e.scaleX
                      , p = void 0 === u ? 1 : u
                      , h = e.scaleY
                      , d = void 0 === h ? 1 : h
                      , f = n.aspectRatio
                      , _ = n.naturalWidth
                      , g = n.naturalHeight
                      , m = i.fillColor
                      , v = void 0 === m ? "transparent" : m
                      , w = i.imageSmoothingEnabled
                      , b = void 0 === w || w
                      , y = i.imageSmoothingQuality
                      , A = void 0 === y ? "low" : y
                      , x = i.maxWidth
                      , C = void 0 === x ? 1 / 0 : x
                      , I = i.maxHeight
                      , B = void 0 === I ? 1 / 0 : I
                      , E = i.minWidth
                      , k = void 0 === E ? 0 : E
                      , S = i.minHeight
                      , M = void 0 === S ? 0 : S
                      , O = document.createElement("canvas")
                      , D = O.getContext("2d")
                      , z = pt({
                        aspectRatio: f,
                        width: C,
                        height: B
                    })
                      , N = pt({
                        aspectRatio: f,
                        width: k,
                        height: M
                    }, "cover")
                      , j = Math.min(z.width, Math.max(N.width, _))
                      , U = Math.min(z.height, Math.max(N.height, g))
                      , P = pt({
                        aspectRatio: o,
                        width: C,
                        height: B
                    })
                      , H = pt({
                        aspectRatio: o,
                        width: k,
                        height: M
                    }, "cover")
                      , F = Math.min(P.width, Math.max(H.width, a))
                      , W = Math.min(P.height, Math.max(H.height, s))
                      , T = [-F / 2, -W / 2, F, W];
                    return O.width = R(j),
                    O.height = R(U),
                    D.fillStyle = v,
                    D.fillRect(0, 0, j, U),
                    D.save(),
                    D.translate(j / 2, U / 2),
                    D.rotate(c * Math.PI / 180),
                    D.scale(p, d),
                    D.imageSmoothingEnabled = b,
                    D.imageSmoothingQuality = A,
                    D.drawImage.apply(D, [t].concat(r(T.map(function(t) {
                        return Math.floor(R(t))
                    })))),
                    D.restore(),
                    O
                }(this.image, this.imageData, e, t);
                if (!this.cropped)
                    return n;
                var i = this.getData()
                  , o = i.x
                  , a = i.y
                  , s = i.width
                  , l = i.height
                  , c = n.width / Math.floor(e.naturalWidth);
                1 !== c && (o *= c,
                a *= c,
                s *= c,
                l *= c);
                var u = s / l
                  , p = pt({
                    aspectRatio: u,
                    width: t.maxWidth || 1 / 0,
                    height: t.maxHeight || 1 / 0
                })
                  , h = pt({
                    aspectRatio: u,
                    width: t.minWidth || 0,
                    height: t.minHeight || 0
                }, "cover")
                  , d = pt({
                    aspectRatio: u,
                    width: t.width || (1 !== c ? n.width : s),
                    height: t.height || (1 !== c ? n.height : l)
                })
                  , f = d.width
                  , _ = d.height;
                f = Math.min(p.width, Math.max(h.width, f)),
                _ = Math.min(p.height, Math.max(h.height, _));
                var g = document.createElement("canvas")
                  , m = g.getContext("2d");
                g.width = R(f),
                g.height = R(_),
                m.fillStyle = t.fillColor || "transparent",
                m.fillRect(0, 0, f, _);
                var v = t.imageSmoothingEnabled
                  , w = void 0 === v || v
                  , b = t.imageSmoothingQuality;
                m.imageSmoothingEnabled = w,
                b && (m.imageSmoothingQuality = b);
                var y, A, x, C, I, B, E = n.width, k = n.height, S = o, M = a;
                S <= -s || S > E ? (S = 0,
                y = 0,
                x = 0,
                I = 0) : S <= 0 ? (x = -S,
                S = 0,
                y = Math.min(E, s + S),
                I = y) : S <= E && (x = 0,
                y = Math.min(s, E - S),
                I = y),
                y <= 0 || M <= -l || M > k ? (M = 0,
                A = 0,
                C = 0,
                B = 0) : M <= 0 ? (C = -M,
                M = 0,
                A = Math.min(k, l + M),
                B = A) : M <= k && (C = 0,
                A = Math.min(l, k - M),
                B = A);
                var O = [S, M, y, A];
                if (I > 0 && B > 0) {
                    var D = f / s;
                    O.push(x * D, C * D, I * D, B * D)
                }
                return m.drawImage.apply(m, [n].concat(r(O.map(function(t) {
                    return Math.floor(R(t))
                })))),
                g
            },
            setAspectRatio: function(t) {
                var e = this.options;
                return this.disabled || z(t) || (e.aspectRatio = Math.max(0, t) || NaN,
                this.ready && (this.initCropBox(),
                this.cropped && this.renderCropBox())),
                this
            },
            setDragMode: function(t) {
                var e = this.options
                  , n = this.dragBox
                  , i = this.face;
                if (this.ready && !this.disabled) {
                    var o = "crop" === t
                      , r = e.movable && "move" === t;
                    t = o || r ? t : "none",
                    e.dragMode = t,
                    K(n, m, t),
                    G(n, u, o),
                    G(n, g, r),
                    e.cropBoxMovable || (K(i, m, t),
                    G(i, u, o),
                    G(i, g, r))
                }
                return this
            }
        }
          , yt = s.Cropper
          , At = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                !e || !k.test(e.tagName))
                    throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                this.element = e,
                this.options = T({}, S, U(n) && n),
                this.cropped = !1,
                this.disabled = !1,
                this.pointers = {},
                this.ready = !1,
                this.reloading = !1,
                this.replaced = !1,
                this.sized = !1,
                this.sizing = !1,
                this.init()
            }
            return n = t,
            o = [{
                key: "noConflict",
                value: function() {
                    return window.Cropper = yt,
                    t
                }
            }, {
                key: "setDefaults",
                value: function(t) {
                    T(S, U(t) && t)
                }
            }],
            (i = [{
                key: "init",
                value: function() {
                    var t, e = this.element, n = e.tagName.toLowerCase();
                    if (!e.cropper) {
                        if (e.cropper = this,
                        "img" === n) {
                            if (this.isImg = !0,
                            t = e.getAttribute("src") || "",
                            this.originalUrl = t,
                            !t)
                                return;
                            t = e.src
                        } else
                            "canvas" === n && window.HTMLCanvasElement && (t = e.toDataURL());
                        this.load(t)
                    }
                }
            }, {
                key: "load",
                value: function(t) {
                    var e = this;
                    if (t) {
                        this.url = t,
                        this.imageData = {};
                        var n = this.element
                          , i = this.options;
                        if (i.rotatable || i.scalable || (i.checkOrientation = !1),
                        i.checkOrientation && window.ArrayBuffer)
                            if (B.test(t))
                                E.test(t) ? this.read((o = t.replace(dt, ""),
                                r = atob(o),
                                a = new ArrayBuffer(r.length),
                                W(s = new Uint8Array(a), function(t, e) {
                                    s[e] = r.charCodeAt(e)
                                }),
                                a)) : this.clone();
                            else {
                                var o, r, a, s, l = new XMLHttpRequest, c = this.clone.bind(this);
                                this.reloading = !0,
                                this.xhr = l,
                                l.onabort = c,
                                l.onerror = c,
                                l.ontimeout = c,
                                l.onprogress = function() {
                                    "image/jpeg" !== l.getResponseHeader("content-type") && l.abort()
                                }
                                ,
                                l.onload = function() {
                                    e.read(l.response)
                                }
                                ,
                                l.onloadend = function() {
                                    e.reloading = !1,
                                    e.xhr = null
                                }
                                ,
                                i.checkCrossOrigin && st(t) && n.crossOrigin && (t = lt(t)),
                                l.open("GET", t),
                                l.responseType = "arraybuffer",
                                l.withCredentials = "use-credentials" === n.crossOrigin,
                                l.send()
                            }
                        else
                            this.clone()
                    }
                }
            }, {
                key: "read",
                value: function(t) {
                    var e = this.options
                      , n = this.imageData
                      , i = ft(t)
                      , o = 0
                      , r = 1
                      , a = 1;
                    if (i > 1) {
                        this.url = function(t, e) {
                            for (var n = [], i = new Uint8Array(t); i.length > 0; )
                                n.push(ht.apply(null, F(i.subarray(0, 8192)))),
                                i = i.subarray(8192);
                            return "data:".concat(e, ";base64,").concat(btoa(n.join("")))
                        }(t, "image/jpeg");
                        var s = function(t) {
                            var e = 0
                              , n = 1
                              , i = 1;
                            switch (t) {
                            case 2:
                                n = -1;
                                break;
                            case 3:
                                e = -180;
                                break;
                            case 4:
                                i = -1;
                                break;
                            case 5:
                                e = 90,
                                i = -1;
                                break;
                            case 6:
                                e = 90;
                                break;
                            case 7:
                                e = 90,
                                n = -1;
                                break;
                            case 8:
                                e = -90
                            }
                            return {
                                rotate: e,
                                scaleX: n,
                                scaleY: i
                            }
                        }(i);
                        o = s.rotate,
                        r = s.scaleX,
                        a = s.scaleY
                    }
                    e.rotatable && (n.rotate = o),
                    e.scalable && (n.scaleX = r,
                    n.scaleY = a),
                    this.clone()
                }
            }, {
                key: "clone",
                value: function() {
                    var t = this.element
                      , e = this.url
                      , n = t.crossOrigin
                      , i = e;
                    this.options.checkCrossOrigin && st(e) && (n || (n = "anonymous"),
                    i = lt(e)),
                    this.crossOrigin = n,
                    this.crossOriginUrl = i;
                    var o = document.createElement("img");
                    n && (o.crossOrigin = n),
                    o.src = i || e,
                    o.alt = t.alt || "The image to crop",
                    this.image = o,
                    o.onload = this.start.bind(this),
                    o.onerror = this.stop.bind(this),
                    q(o, d),
                    t.parentNode.insertBefore(o, t.nextSibling)
                }
            }, {
                key: "start",
                value: function() {
                    var t = this
                      , e = this.image;
                    e.onload = null,
                    e.onerror = null,
                    this.sizing = !0;
                    var n = s.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(s.navigator.userAgent)
                      , i = function(e, n) {
                        T(t.imageData, {
                            naturalWidth: e,
                            naturalHeight: n,
                            aspectRatio: e / n
                        }),
                        t.sizing = !1,
                        t.sized = !0,
                        t.build()
                    };
                    if (!e.naturalWidth || n) {
                        var o = document.createElement("img")
                          , r = document.body || document.documentElement;
                        this.sizingImage = o,
                        o.onload = function() {
                            i(o.width, o.height),
                            n || r.removeChild(o)
                        }
                        ,
                        o.src = e.src,
                        n || (o.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",
                        r.appendChild(o))
                    } else
                        i(e.naturalWidth, e.naturalHeight)
                }
            }, {
                key: "stop",
                value: function() {
                    var t = this.image;
                    t.onload = null,
                    t.onerror = null,
                    t.parentNode.removeChild(t),
                    this.image = null
                }
            }, {
                key: "build",
                value: function() {
                    if (this.sized && !this.ready) {
                        var t = this.element
                          , e = this.options
                          , n = this.image
                          , i = t.parentNode
                          , o = document.createElement("div");
                        o.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
                        var r = o.querySelector(".".concat("cropper", "-container"))
                          , a = r.querySelector(".".concat("cropper", "-canvas"))
                          , s = r.querySelector(".".concat("cropper", "-drag-box"))
                          , l = r.querySelector(".".concat("cropper", "-crop-box"))
                          , c = l.querySelector(".".concat("cropper", "-face"));
                        this.container = i,
                        this.cropper = r,
                        this.canvas = a,
                        this.dragBox = s,
                        this.cropBox = l,
                        this.viewBox = r.querySelector(".".concat("cropper", "-view-box")),
                        this.face = c,
                        a.appendChild(n),
                        q(t, h),
                        i.insertBefore(r, t.nextSibling),
                        this.isImg || X(n, d),
                        this.initPreview(),
                        this.bind(),
                        e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN,
                        e.aspectRatio = Math.max(0, e.aspectRatio) || NaN,
                        e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0,
                        q(l, h),
                        e.guides || q(l.getElementsByClassName("".concat("cropper", "-dashed")), h),
                        e.center || q(l.getElementsByClassName("".concat("cropper", "-center")), h),
                        e.background && q(r, "".concat("cropper", "-bg")),
                        e.highlight || q(c, f),
                        e.cropBoxMovable && (q(c, g),
                        K(c, m, "all")),
                        e.cropBoxResizable || (q(l.getElementsByClassName("".concat("cropper", "-line")), h),
                        q(l.getElementsByClassName("".concat("cropper", "-point")), h)),
                        this.render(),
                        this.ready = !0,
                        this.setDragMode(e.dragMode),
                        e.autoCrop && this.crop(),
                        this.setData(e.data),
                        P(e.ready) && nt(t, "ready", e.ready, {
                            once: !0
                        }),
                        it(t, "ready")
                    }
                }
            }, {
                key: "unbuild",
                value: function() {
                    this.ready && (this.ready = !1,
                    this.unbind(),
                    this.resetPreview(),
                    this.cropper.parentNode.removeChild(this.cropper),
                    X(this.element, h))
                }
            }, {
                key: "uncreate",
                value: function() {
                    this.ready ? (this.unbuild(),
                    this.ready = !1,
                    this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null,
                    this.sizing = !1,
                    this.sized = !1) : this.reloading ? (this.xhr.onabort = null,
                    this.xhr.abort()) : this.image && this.stop()
                }
            }]) && e(n.prototype, i),
            o && e(n, o),
            t;
            var n, i, o
        }();
        return T(At.prototype, _t, gt, mt, vt, wt, bt),
        At
    }()
}
, function(t, e, n) {
    (function(n) {
        var i, o, r;
        o = [],
        void 0 === (r = "function" == typeof (i = function() {
            "use strict";
            function e(t, e, n) {
                var i = new XMLHttpRequest;
                i.open("GET", t),
                i.responseType = "blob",
                i.onload = function() {
                    a(i.response, e, n)
                }
                ,
                i.onerror = function() {
                    console.error("could not download file")
                }
                ,
                i.send()
            }
            function i(t) {
                var e = new XMLHttpRequest;
                e.open("HEAD", t, !1);
                try {
                    e.send()
                } catch (t) {}
                return 200 <= e.status && 299 >= e.status
            }
            function o(t) {
                try {
                    t.dispatchEvent(new MouseEvent("click"))
                } catch (n) {
                    var e = document.createEvent("MouseEvents");
                    e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                    t.dispatchEvent(e)
                }
            }
            var r = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof n && n.global === n ? n : void 0
              , a = r.saveAs || ("object" != typeof window || window !== r ? function() {}
            : "download"in HTMLAnchorElement.prototype ? function(t, n, a) {
                var s = r.URL || r.webkitURL
                  , l = document.createElement("a");
                n = n || t.name || "download",
                l.download = n,
                l.rel = "noopener",
                "string" == typeof t ? (l.href = t,
                l.origin === location.origin ? o(l) : i(l.href) ? e(t, n, a) : o(l, l.target = "_blank")) : (l.href = s.createObjectURL(t),
                setTimeout(function() {
                    s.revokeObjectURL(l.href)
                }, 4e4),
                setTimeout(function() {
                    o(l)
                }, 0))
            }
            : "msSaveOrOpenBlob"in navigator ? function(t, n, r) {
                if (n = n || t.name || "download",
                "string" != typeof t)
                    navigator.msSaveOrOpenBlob(function(t, e) {
                        return void 0 === e ? e = {
                            autoBom: !1
                        } : "object" != typeof e && (console.warn("Deprecated: Expected third argument to be a object"),
                        e = {
                            autoBom: !e
                        }),
                        e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t],{
                            type: t.type
                        }) : t
                    }(t, r), n);
                else if (i(t))
                    e(t, n, r);
                else {
                    var a = document.createElement("a");
                    a.href = t,
                    a.target = "_blank",
                    setTimeout(function() {
                        o(a)
                    })
                }
            }
            : function(t, n, i, o) {
                if ((o = o || open("", "_blank")) && (o.document.title = o.document.body.innerText = "downloading..."),
                "string" == typeof t)
                    return e(t, n, i);
                var a = "application/octet-stream" === t.type
                  , s = /constructor/i.test(r.HTMLElement) || r.safari
                  , l = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((l || a && s) && "object" == typeof FileReader) {
                    var c = new FileReader;
                    c.onloadend = function() {
                        var t = c.result;
                        t = l ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"),
                        o ? o.location.href = t : location = t,
                        o = null
                    }
                    ,
                    c.readAsDataURL(t)
                } else {
                    var u = r.URL || r.webkitURL
                      , p = u.createObjectURL(t);
                    o ? o.location = p : location.href = p,
                    o = null,
                    setTimeout(function() {
                        u.revokeObjectURL(p)
                    }, 4e4)
                }
            }
            );
            r.saveAs = a.saveAs = a,
            t.exports = a
        }
        ) ? i.apply(e, o) : i) || (t.exports = r)
    }
    ).call(this, n(13))
}
, function(t, e, n) {
    var i = n(67)
      , o = n(9)
      , r = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0
          , s = !0;
        if ("function" != typeof t)
            throw new TypeError(r);
        return o(n) && (a = "leading"in n ? !!n.leading : a,
        s = "trailing"in n ? !!n.trailing : s),
        i(t, e, {
            leading: a,
            maxWait: e,
            trailing: s
        })
    }
}
, function(t, e, n) {
    var i = n(9)
      , o = n(68)
      , r = n(70)
      , a = "Expected a function"
      , s = Math.max
      , l = Math.min;
    t.exports = function(t, e, n) {
        var c, u, p, h, d, f, _ = 0, g = !1, m = !1, v = !0;
        if ("function" != typeof t)
            throw new TypeError(a);
        function w(e) {
            var n = c
              , i = u;
            return c = u = void 0,
            _ = e,
            h = t.apply(i, n)
        }
        function b(t) {
            var n = t - f;
            return void 0 === f || n >= e || n < 0 || m && t - _ >= p
        }
        function y() {
            var t = o();
            if (b(t))
                return A(t);
            d = setTimeout(y, function(t) {
                var n = e - (t - f);
                return m ? l(n, p - (t - _)) : n
            }(t))
        }
        function A(t) {
            return d = void 0,
            v && c ? w(t) : (c = u = void 0,
            h)
        }
        function x() {
            var t = o()
              , n = b(t);
            if (c = arguments,
            u = this,
            f = t,
            n) {
                if (void 0 === d)
                    return function(t) {
                        return _ = t,
                        d = setTimeout(y, e),
                        g ? w(t) : h
                    }(f);
                if (m)
                    return clearTimeout(d),
                    d = setTimeout(y, e),
                    w(f)
            }
            return void 0 === d && (d = setTimeout(y, e)),
            h
        }
        return e = r(e) || 0,
        i(n) && (g = !!n.leading,
        p = (m = "maxWait"in n) ? s(r(n.maxWait) || 0, e) : p,
        v = "trailing"in n ? !!n.trailing : v),
        x.cancel = function() {
            void 0 !== d && clearTimeout(d),
            _ = 0,
            c = f = u = d = void 0
        }
        ,
        x.flush = function() {
            return void 0 === d ? h : A(o())
        }
        ,
        x
    }
}
, function(t, e, n) {
    var i = n(14);
    t.exports = function() {
        return i.Date.now()
    }
}
, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }
    ).call(this, n(13))
}
, function(t, e, n) {
    var i = n(9)
      , o = n(71)
      , r = NaN
      , a = /^\s+|\s+$/g
      , s = /^[-+]0x[0-9a-f]+$/i
      , l = /^0b[01]+$/i
      , c = /^0o[0-7]+$/i
      , u = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t)
            return t;
        if (o(t))
            return r;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = l.test(t);
        return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : s.test(t) ? r : +t
    }
}
, function(t, e, n) {
    var i = n(72)
      , o = n(75)
      , r = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || o(t) && i(t) == r
    }
}
, function(t, e, n) {
    var i = n(15)
      , o = n(73)
      , r = n(74)
      , a = "[object Null]"
      , s = "[object Undefined]"
      , l = i ? i.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? s : a : l && l in Object(t) ? o(t) : r(t)
    }
}
, function(t, e, n) {
    var i = n(15)
      , o = Object.prototype
      , r = o.hasOwnProperty
      , a = o.toString
      , s = i ? i.toStringTag : void 0;
    t.exports = function(t) {
        var e = r.call(t, s)
          , n = t[s];
        try {
            t[s] = void 0;
            var i = !0
        } catch (t) {}
        var o = a.call(t);
        return i && (e ? t[s] = n : delete t[s]),
        o
    }
}
, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}
, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(77)
      , r = n(79)
      , a = n(1)
      , s = n(4);
    e.default = function(t) {
        var e = t.handleFileUpload
          , n = t.displayOnFileDropOnly
          , l = a.useState(r())
          , c = l[0]
          , u = l[1]
          , p = s.useStoreon("image")
          , h = p.dispatch
          , d = p.image
          , f = a.useCallback(function(t) {
            var n = t.target.files[0];
            e(n),
            u(r())
        }, [e, n])
          , _ = a.useCallback(function(t) {
            h("settings/clear");
            var n = t.dataTransfer.files;
            e(n[0])
        }, [e, n]);
        return i.h("section", {
            className: [o.uploadContainer, n && !d.dropAnimation && o.uploadContainerInvisible].join(" ")
        }, i.h("div", {
            className: [o.dropArea, d.dropAnimation && o.dropAreaHighlighted].join(" "),
            onClick: function() {
                return document.getElementById(c).click()
            },
            onDragLeave: function() {
                return h("image/drop/leave")
            },
            onDrop: function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                h("image/drop/leave"),
                _(t),
                !1
            }
        }, i.h("div", {
            className: o.background
        }), i.h("div", {
            className: o.leftEmptySpace
        }), i.h("button", {
            className: o.uploadButton
        }, i.h("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, i.h("path", {
            d: "M17.7551 1.42857L17.7551 28.5714C17.7551 29.4437 17.2653 30 15.3061 30C13.3469 30 12.8572 29.4437 12.8572 28.5714L12.8572 1.42857C12.8572 0.556332 13.3469 -2.14064e-08 15.3061 -1.07045e-07C17.2653 -1.92683e-07 17.7551 0.556331 17.7551 1.42857Z",
            fill: "white"
        }), i.h("path", {
            d: "M30.0001 14.6939C30.0001 16.653 29.5418 17.1429 28.5714 17.1429L1.42857 17.1429C0.566019 17.1429 -2.1414e-08 16.653 -1.07053e-07 14.6939C-1.92691e-07 12.7347 0.4582 12.245 1.42857 12.245L28.5714 12.245C29.434 12.245 30.0001 12.7347 30.0001 14.6939Z",
            fill: "#EEFFFF"
        }), i.h("path", {
            d: "M30.0001 14.6364C30.0001 16.5956 29.5418 17.0854 28.5714 17.0854L1.42857 17.0854C0.566019 17.0854 -2.1414e-08 16.5956 -1.07053e-07 14.6364C-1.92692e-07 12.6772 0.4582 12.1875 1.42857 12.1875L28.5714 12.1875C29.434 12.1875 30.0001 12.6772 30.0001 14.6364Z",
            fill: "white"
        }))), i.h("h2", {
            className: o.title
        }, "Click ", i.h("span", null, "here"), " to upload your image")), i.h("input", {
            id: c,
            key: c,
            type: "file",
            onChange: f,
            ref: function(t) {
                return t
            },
            style: "display: none;"
        }))
    }
}
, function(t, e, n) {
    var i = n(78);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, '.UploadFile-module___uploadContainer___1Llg2 {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1000; }\n\n.UploadFile-module___uploadContainerInvisible___11rW1 {\n  display: none; }\n\n.UploadFile-module___dropArea___1w0pb {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 21px 0;\n  box-sizing: border-box;\n  background-color: white;\n  transform: scale(1);\n  overflow: hidden;\n  cursor: pointer; }\n\n.UploadFile-module___title___1LBD8 {\n  flex: 1 1 100%;\n  font-family: Ubuntu;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  color: #333333;\n  margin: 12px 0 5px;\n  padding: 0;\n  margin: 0;\n  margin-left: 24px;\n  z-index: 20;\n  transition: 0.2s cubic-bezier(0.75, 0.29, 0.24, 0.91); }\n  .UploadFile-module___title___1LBD8 span {\n    color: #02C873;\n    text-decoration: underline; }\n\n.UploadFile-module___leftEmptySpace___1Zsvd {\n  flex: 1 1 100%; }\n\n.UploadFile-module___uploadButton___1hHOw {\n  flex: 0 0 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: #02c873;\n  transform: rotate(-90deg);\n  transition: all 0.2s;\n  margin-left: 24px;\n  z-index: 20;\n  appearance: none;\n  -webkit-appearance: none; }\n  .UploadFile-module___uploadButton___1hHOw:hover {\n    transform: scale(1.1); }\n  .UploadFile-module___uploadButton___1hHOw:active {\n    background: #11b26d;\n    border: 1px solid #0ea463;\n    outline: none; }\n  .UploadFile-module___uploadButton___1hHOw:focus {\n    outline: none;\n    -webkit-box-shadow: 0px 0px 0px 2px #ecf0fd;\n    -moz-box-shadow: 0px 0px 0px 2px #ecf0fd;\n    box-shadow: 0px 0px 0px 2px #ecf0fd; }\n\n.UploadFile-module___background___2RnNQ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  width: 100%;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  background: url("/assets/upload-background.svg") center no-repeat;\n  background-size: cover; }\n\n.UploadFile-module___dropAreaHighlighted___3mWAV {\n  z-index: 9999; }\n  .UploadFile-module___dropAreaHighlighted___3mWAV .UploadFile-module___background___2RnNQ {\n    animation: UploadFile-module___dropareaBgrPulsation___v0q2F 5s infinite linear;\n    background: url("/assets/upload-background-highlighted.svg") center no-repeat;\n    background-size: cover; }\n  .UploadFile-module___dropAreaHighlighted___3mWAV .UploadFile-module___title___1LBD8 {\n    visibility: hidden;\n    tab-index: 0;\n    transform: translateX(999px); }\n  .UploadFile-module___dropAreaHighlighted___3mWAV > * {\n    pointer-events: none; }\n\n@keyframes UploadFile-module___dropareaBgrPulsation___v0q2F {\n  0% {\n    transform: scale(1); }\n  60% {\n    transform: scale(1.4); }\n  100% {\n    transform: scale(1); } }\n\n.chrome-ext .UploadFile-module___uploadContainer___1Llg2 {\n  padding: 0; }\n\n@media all and (max-width: 992px) {\n  .UploadFile-module___dropArea___1w0pb {\n    flex-direction: column;\n    max-width: 100%;\n    min-height: 355px; }\n    .chrome-ext .UploadFile-module___dropArea___1w0pb {\n      min-height: initial; }\n  .UploadFile-module___title___1LBD8 {\n    margin-left: 0;\n    margin-top: 24px;\n    text-align: center; }\n  .UploadFile-module___background___2RnNQ {\n    background: url("/assets/upload-background.svg") center no-repeat;\n    background-size: cover; }\n  .UploadFile-module___uploadButton___1hHOw {\n    margin: 24px 24px 0; } }\n', ""]),
    e.locals = {
        uploadContainer: "UploadFile-module___uploadContainer___1Llg2",
        uploadContainerInvisible: "UploadFile-module___uploadContainerInvisible___11rW1",
        dropArea: "UploadFile-module___dropArea___1w0pb",
        title: "UploadFile-module___title___1LBD8",
        leftEmptySpace: "UploadFile-module___leftEmptySpace___1Zsvd",
        uploadButton: "UploadFile-module___uploadButton___1hHOw",
        background: "UploadFile-module___background___2RnNQ",
        dropAreaHighlighted: "UploadFile-module___dropAreaHighlighted___3mWAV",
        dropareaBgrPulsation: "UploadFile-module___dropareaBgrPulsation___v0q2F"
    }
}
, function(t, e, n) {
    var i = self.crypto || self.msCrypto;
    t.exports = function(t) {
        t = t || 21;
        for (var e = "", n = i.getRandomValues(new Uint8Array(t)); t--; )
            e += "QLUint8ARdomValuesObj0h6345-79BCrypgJzHKTNYDSMkXPZ_FfG1WcqvwxEI2"[63 & n[t]];
        return e
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.addScriptTagWithUrl = function(t, n) {
        if (e.scriptIsOnPage(t))
            n();
        else {
            var i = document.createElement("script");
            i.type = "text/javascript",
            i.src = t,
            document.head.appendChild(i),
            i.onload = function() {
                n()
            }
        }
    }
    ,
    e.scriptIsOnPage = function(t) {
        return !!document.querySelector('script[src="' + t + '"]')
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(5)
      , r = n(4)
      , a = n(82);
    e.default = function() {
        var t = r.useStoreon("image").image;
        return i.h(i.Fragment, null, t.uploadAnimation && i.h("div", {
            className: a.uploadAnimationContainer
        }, i.h("div", {
            className: a.animationWrapper
        }, i.h("img", {
            src: o.uploadAnimationUrl,
            style: {
                width: 60
            }
        }))))
    }
}
, function(t, e, n) {
    var i = n(83);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, ".UploadAnimation-module___uploadAnimationContainer___1jiTd {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000; }\n\n.UploadAnimation-module___animationWrapper___2ypU2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-color: white;\n  overflow: hidden; }\n", ""]),
    e.locals = {
        uploadAnimationContainer: "UploadAnimation-module___uploadAnimationContainer___1jiTd",
        animationWrapper: "UploadAnimation-module___animationWrapper___2ypU2"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(85)
      , r = n(4)
      , a = n(5)
      , s = n(1);
    e.default = function(t) {
        var e = r.useStoreon("image")
          , n = e.dispatch
          , l = e.image;
        return s.useEffect(function() {
            var t;
            return l.completedNotification && (t = setTimeout(function() {
                n("image/notification", !1)
            }, a.completedNotificationTimeout)),
            function() {
                t && clearTimeout(t)
            }
        }),
        i.h("div", {
            className: [o.notificationContainer, l.completedNotification && o.displayNotification].join(" ")
        }, i.h("div", {
            className: o.notification
        }, i.h("div", {
            className: o.notificationBody
        }, i.h("div", {
            className: o.notificationIcon
        }), i.h("div", null, i.h("div", {
            className: o.notificationTitle
        }, "Completed!"), i.h("div", {
            className: o.notificationDescription
        }, function(t) {
            if (t)
                return t.length < 20 ? t : t.substring(0, 12) + "....." + t.substring(t.length - 9, t.length)
        }(t.description)))), i.h("button", {
            className: o.notificationButton,
            onClick: function(e) {
                n("image/notification", !1),
                t.onClick(e)
            }
        }, "Re-Open")))
    }
}
, function(t, e, n) {
    var i = n(86);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (e = t.exports = n(2)(!1)).push([t.i, '.Notification-module___notificationContainer___3YNxg {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  right: 40px;\n  margin-top: 0;\n  opacity: 0;\n  z-index: 2000;\n  transition: .3s; }\n\n.Notification-module___displayNotification___2Gdrw {\n  visibility: visible;\n  opacity: 1;\n  margin-top: 26px;\n  margin-left: 380px; }\n\n.Notification-module___notification___1ABOv {\n  width: 340px;\n  display: flex;\n  background: #ffffff;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08); }\n\n.Notification-module___notificationBody___izGfk {\n  display: flex;\n  flex: 0 1 100%;\n  padding: 13px 12px; }\n\n.Notification-module___notificationIcon___1rtnH {\n  width: 40px;\n  height: 40px;\n  background: url("/assets/completed.svg") center no-repeat;\n  margin-right: 12px;\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.Notification-module___notificationTitle___-6ayT {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 21px; }\n\n.Notification-module___notificationDescription___jne0j {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 20px;\n  word-break: break-all; }\n\n.Notification-module___notificationButton___Rf_Sg {\n  flex: 0 0 86px;\n  font-size: 13px;\n  cursor: pointer;\n  appearance: none;\n  background: none;\n  border: 0;\n  border-left: 1px solid #D9E1ED;\n  color: #02C873;\n  font-weight: 500;\n  line-height: 22px;\n  transition: background-color .2s; }\n  .Notification-module___notificationButton___Rf_Sg:hover {\n    color: #ffffff;\n    background-color: #02C873; }\n\n@media all and (max-width: 592px) {\n  .Notification-module___notificationContainer___3YNxg {\n    display: none; } }\n', ""]),
    e.locals = {
        notificationContainer: "Notification-module___notificationContainer___3YNxg",
        displayNotification: "Notification-module___displayNotification___2Gdrw",
        notification: "Notification-module___notification___1ABOv",
        notificationBody: "Notification-module___notificationBody___izGfk",
        notificationIcon: "Notification-module___notificationIcon___1rtnH",
        notificationTitle: "Notification-module___notificationTitle___-6ayT",
        notificationDescription: "Notification-module___notificationDescription___jne0j",
        notificationButton: "Notification-module___notificationButton___Rf_Sg"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.appendPrefetchUrlToHead = function(t) {
        var e = document.createElement("link");
        e.rel = "prefetch",
        e.href = t,
        document.head.appendChild(e)
    }
}
, function(t, e, n) {
    var i = n(89);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "/*!\n * Cropper.js v1.5.6\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2019-10-04T04:33:44.164Z\n */\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%; }\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden; }\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0; }\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5; }\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%; }\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute; }\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%; }\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3); }\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0; }\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute; }\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px; }\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px; }\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%; }\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0; }\n\n.cropper-line {\n  background-color: #39f; }\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px; }\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px; }\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px; }\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0; }\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px; }\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%; }\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px; }\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%; }\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px; }\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px; }\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px; }\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px; }\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px; }\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px; } }\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px; } }\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px; } }\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%; }\n\n.cropper-invisible {\n  opacity: 0; }\n\n.cropper-bg {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\"); }\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0; }\n\n.cropper-hidden {\n  display: none !important; }\n\n.cropper-move {\n  cursor: move; }\n\n.cropper-crop {\n  cursor: crosshair; }\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed; }\n", ""])
}
, function(t, e, n) {
    var i = n(91);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(3)(i, o);
    i.locals && (t.exports = i.locals)
}
, function(t, e, n) {
    (t.exports = n(2)(!1)).push([t.i, "* {\n  box-sizing: border-box;\n  font-family: Ubuntu;\n  font-style: normal; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n/*\n* Inputs\n*/\ninput,\nselect {\n  border: 1px solid #d9e1ed; }\n\ninput:focus,\nselect:focus {\n  outline: 0;\n  border: 1px solid #d9e1ed;\n  -webkit-box-shadow: 0px 0px 0px 2px #ecf0fd;\n  -moz-box-shadow: 0px 0px 0px 2px #ecf0fd;\n  box-shadow: 0px 0px 0px 2px #ecf0fd; }\n\ninput[type='range']:focus {\n  -webkit-box-shadow: 0px 0px 0px 1px #ecf0fd;\n  -moz-box-shadow: 0px 0px 0px 1px #ecf0fd;\n  box-shadow: 0px 0px 0px 1px #ecf0fd; }\n\n/*\n* Crop\n*/\n.cropper-view-box {\n  outline: 1px solid #fff;\n  outline-color: #fff; }\n\n.cropper-point {\n  background-color: #00FF91;\n  height: 8px;\n  width: 8px;\n  opacity: 1; }\n  .cropper-point.point-se {\n    height: 8px;\n    width: 8px; }\n  .cropper-point.point-e, .cropper-point.point-n, .cropper-point.point-w, .cropper-point.point-s {\n    height: 5px;\n    width: 5px;\n    background-color: #fff; }\n\n.cropper-modal {\n  opacity: 0.35; }\n", ""])
}
]);
