var gg = t => {
    throw TypeError(t)
}
;
var Gc = (t, e, n) => e.has(t) || gg("Cannot " + n);
var P = (t, e, n) => (Gc(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , ue = (t, e, n) => e.has(t) ? gg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n)
  , J = (t, e, n, i) => (Gc(t, e, "write to private field"),
i ? i.call(t, n) : e.set(t, n),
n)
  , ke = (t, e, n) => (Gc(t, e, "access private method"),
n);
var sl = (t, e, n, i) => ({
    set _(o) {
        J(t, e, o, n)
    },
    get _() {
        return P(t, e, i)
    }
});
function mb(t, e) {
    for (var n = 0; n < e.length; n++) {
        const i = e[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const o in i)
                if (o !== "default" && !(o in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, o);
                    l && Object.defineProperty(t, o, l.get ? l : {
                        enumerable: !0,
                        get: () => i[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
}
)();
function a0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Yc = {
    exports: {}
}
  , no = {}
  , Xc = {
    exports: {}
}
  , be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg;
function gb() {
    if (yg)
        return be;
    yg = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , u = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(N) {
        return N === null || typeof N != "object" ? null : (N = y && N[y] || N["@@iterator"],
        typeof N == "function" ? N : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , k = Object.assign
      , b = {};
    function S(N, z, ye) {
        this.props = N,
        this.context = z,
        this.refs = b,
        this.updater = ye || E
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(N, z) {
        if (typeof N != "object" && typeof N != "function" && N != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, z, "setState")
    }
    ,
    S.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    }
    ;
    function A() {}
    A.prototype = S.prototype;
    function V(N, z, ye) {
        this.props = N,
        this.context = z,
        this.refs = b,
        this.updater = ye || E
    }
    var j = V.prototype = new A;
    j.constructor = V,
    k(j, S.prototype),
    j.isPureReactComponent = !0;
    var D = Array.isArray
      , B = Object.prototype.hasOwnProperty
      , q = {
        current: null
    }
      , G = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function M(N, z, ye) {
        var ve, le = {}, he = null, Ne = null;
        if (z != null)
            for (ve in z.ref !== void 0 && (Ne = z.ref),
            z.key !== void 0 && (he = "" + z.key),
            z)
                B.call(z, ve) && !G.hasOwnProperty(ve) && (le[ve] = z[ve]);
        var _e = arguments.length - 2;
        if (_e === 1)
            le.children = ye;
        else if (1 < _e) {
            for (var we = Array(_e), pt = 0; pt < _e; pt++)
                we[pt] = arguments[pt + 2];
            le.children = we
        }
        if (N && N.defaultProps)
            for (ve in _e = N.defaultProps,
            _e)
                le[ve] === void 0 && (le[ve] = _e[ve]);
        return {
            $$typeof: t,
            type: N,
            key: he,
            ref: Ne,
            props: le,
            _owner: q.current
        }
    }
    function X(N, z) {
        return {
            $$typeof: t,
            type: N.type,
            key: z,
            ref: N.ref,
            props: N.props,
            _owner: N._owner
        }
    }
    function me(N) {
        return typeof N == "object" && N !== null && N.$$typeof === t
    }
    function de(N) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(ye) {
            return z[ye]
        })
    }
    var Te = /\/+/g;
    function Le(N, z) {
        return typeof N == "object" && N !== null && N.key != null ? de("" + N.key) : z.toString(36)
    }
    function Ae(N, z, ye, ve, le) {
        var he = typeof N;
        (he === "undefined" || he === "boolean") && (N = null);
        var Ne = !1;
        if (N === null)
            Ne = !0;
        else
            switch (he) {
            case "string":
            case "number":
                Ne = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                case t:
                case e:
                    Ne = !0
                }
            }
        if (Ne)
            return Ne = N,
            le = le(Ne),
            N = ve === "" ? "." + Le(Ne, 0) : ve,
            D(le) ? (ye = "",
            N != null && (ye = N.replace(Te, "$&/") + "/"),
            Ae(le, z, ye, "", function(pt) {
                return pt
            })) : le != null && (me(le) && (le = X(le, ye + (!le.key || Ne && Ne.key === le.key ? "" : ("" + le.key).replace(Te, "$&/") + "/") + N)),
            z.push(le)),
            1;
        if (Ne = 0,
        ve = ve === "" ? "." : ve + ":",
        D(N))
            for (var _e = 0; _e < N.length; _e++) {
                he = N[_e];
                var we = ve + Le(he, _e);
                Ne += Ae(he, z, ye, we, le)
            }
        else if (we = w(N),
        typeof we == "function")
            for (N = we.call(N),
            _e = 0; !(he = N.next()).done; )
                he = he.value,
                we = ve + Le(he, _e++),
                Ne += Ae(he, z, ye, we, le);
        else if (he === "object")
            throw z = String(N),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Ne
    }
    function Me(N, z, ye) {
        if (N == null)
            return N;
        var ve = []
          , le = 0;
        return Ae(N, ve, "", "", function(he) {
            return z.call(ye, he, le++)
        }),
        ve
    }
    function xe(N) {
        if (N._status === -1) {
            var z = N._result;
            z = z(),
            z.then(function(ye) {
                (N._status === 0 || N._status === -1) && (N._status = 1,
                N._result = ye)
            }, function(ye) {
                (N._status === 0 || N._status === -1) && (N._status = 2,
                N._result = ye)
            }),
            N._status === -1 && (N._status = 0,
            N._result = z)
        }
        if (N._status === 1)
            return N._result.default;
        throw N._result
    }
    var fe = {
        current: null
    }
      , K = {
        transition: null
    }
      , se = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: K,
        ReactCurrentOwner: q
    };
    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return be.Children = {
        map: Me,
        forEach: function(N, z, ye) {
            Me(N, function() {
                z.apply(this, arguments)
            }, ye)
        },
        count: function(N) {
            var z = 0;
            return Me(N, function() {
                z++
            }),
            z
        },
        toArray: function(N) {
            return Me(N, function(z) {
                return z
            }) || []
        },
        only: function(N) {
            if (!me(N))
                throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    },
    be.Component = S,
    be.Fragment = n,
    be.Profiler = o,
    be.PureComponent = V,
    be.StrictMode = i,
    be.Suspense = h,
    be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se,
    be.act = U,
    be.cloneElement = function(N, z, ye) {
        if (N == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
        var ve = k({}, N.props)
          , le = N.key
          , he = N.ref
          , Ne = N._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref,
            Ne = q.current),
            z.key !== void 0 && (le = "" + z.key),
            N.type && N.type.defaultProps)
                var _e = N.type.defaultProps;
            for (we in z)
                B.call(z, we) && !G.hasOwnProperty(we) && (ve[we] = z[we] === void 0 && _e !== void 0 ? _e[we] : z[we])
        }
        var we = arguments.length - 2;
        if (we === 1)
            ve.children = ye;
        else if (1 < we) {
            _e = Array(we);
            for (var pt = 0; pt < we; pt++)
                _e[pt] = arguments[pt + 2];
            ve.children = _e
        }
        return {
            $$typeof: t,
            type: N.type,
            key: le,
            ref: he,
            props: ve,
            _owner: Ne
        }
    }
    ,
    be.createContext = function(N) {
        return N = {
            $$typeof: u,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        N.Provider = {
            $$typeof: l,
            _context: N
        },
        N.Consumer = N
    }
    ,
    be.createElement = M,
    be.createFactory = function(N) {
        var z = M.bind(null, N);
        return z.type = N,
        z
    }
    ,
    be.createRef = function() {
        return {
            current: null
        }
    }
    ,
    be.forwardRef = function(N) {
        return {
            $$typeof: d,
            render: N
        }
    }
    ,
    be.isValidElement = me,
    be.lazy = function(N) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: xe
        }
    }
    ,
    be.memo = function(N, z) {
        return {
            $$typeof: m,
            type: N,
            compare: z === void 0 ? null : z
        }
    }
    ,
    be.startTransition = function(N) {
        var z = K.transition;
        K.transition = {};
        try {
            N()
        } finally {
            K.transition = z
        }
    }
    ,
    be.unstable_act = U,
    be.useCallback = function(N, z) {
        return fe.current.useCallback(N, z)
    }
    ,
    be.useContext = function(N) {
        return fe.current.useContext(N)
    }
    ,
    be.useDebugValue = function() {}
    ,
    be.useDeferredValue = function(N) {
        return fe.current.useDeferredValue(N)
    }
    ,
    be.useEffect = function(N, z) {
        return fe.current.useEffect(N, z)
    }
    ,
    be.useId = function() {
        return fe.current.useId()
    }
    ,
    be.useImperativeHandle = function(N, z, ye) {
        return fe.current.useImperativeHandle(N, z, ye)
    }
    ,
    be.useInsertionEffect = function(N, z) {
        return fe.current.useInsertionEffect(N, z)
    }
    ,
    be.useLayoutEffect = function(N, z) {
        return fe.current.useLayoutEffect(N, z)
    }
    ,
    be.useMemo = function(N, z) {
        return fe.current.useMemo(N, z)
    }
    ,
    be.useReducer = function(N, z, ye) {
        return fe.current.useReducer(N, z, ye)
    }
    ,
    be.useRef = function(N) {
        return fe.current.useRef(N)
    }
    ,
    be.useState = function(N) {
        return fe.current.useState(N)
    }
    ,
    be.useSyncExternalStore = function(N, z, ye) {
        return fe.current.useSyncExternalStore(N, z, ye)
    }
    ,
    be.useTransition = function() {
        return fe.current.useTransition()
    }
    ,
    be.version = "18.3.1",
    be
}
var vg;
function bf() {
    return vg || (vg = 1,
    Xc.exports = gb()),
    Xc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wg;
function yb() {
    if (wg)
        return no;
    wg = 1;
    var t = bf()
      , e = Symbol.for("react.element")
      , n = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function u(d, h, m) {
        var g, y = {}, w = null, E = null;
        m !== void 0 && (w = "" + m),
        h.key !== void 0 && (w = "" + h.key),
        h.ref !== void 0 && (E = h.ref);
        for (g in h)
            i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (d && d.defaultProps)
            for (g in h = d.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: d,
            key: w,
            ref: E,
            props: y,
            _owner: o.current
        }
    }
    return no.Fragment = n,
    no.jsx = u,
    no.jsxs = u,
    no
}
var xg;
function vb() {
    return xg || (xg = 1,
    Yc.exports = yb()),
    Yc.exports
}
var x = vb()
  , _ = bf();
const wb = a0(_)
  , l0 = mb({
    __proto__: null,
    default: wb
}, [_]);
var il = {}
  , Jc = {
    exports: {}
}
  , Nt = {}
  , Zc = {
    exports: {}
}
  , ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg;
function xb() {
    return Sg || (Sg = 1,
    (function(t) {
        function e(K, se) {
            var U = K.length;
            K.push(se);
            e: for (; 0 < U; ) {
                var N = U - 1 >>> 1
                  , z = K[N];
                if (0 < o(z, se))
                    K[N] = se,
                    K[U] = z,
                    U = N;
                else
                    break e
            }
        }
        function n(K) {
            return K.length === 0 ? null : K[0]
        }
        function i(K) {
            if (K.length === 0)
                return null;
            var se = K[0]
              , U = K.pop();
            if (U !== se) {
                K[0] = U;
                e: for (var N = 0, z = K.length, ye = z >>> 1; N < ye; ) {
                    var ve = 2 * (N + 1) - 1
                      , le = K[ve]
                      , he = ve + 1
                      , Ne = K[he];
                    if (0 > o(le, U))
                        he < z && 0 > o(Ne, le) ? (K[N] = Ne,
                        K[he] = U,
                        N = he) : (K[N] = le,
                        K[ve] = U,
                        N = ve);
                    else if (he < z && 0 > o(Ne, U))
                        K[N] = Ne,
                        K[he] = U,
                        N = he;
                    else
                        break e
                }
            }
            return se
        }
        function o(K, se) {
            var U = K.sortIndex - se.sortIndex;
            return U !== 0 ? U : K.id - se.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date
              , d = u.now();
            t.unstable_now = function() {
                return u.now() - d
            }
        }
        var h = []
          , m = []
          , g = 1
          , y = null
          , w = 3
          , E = !1
          , k = !1
          , b = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , A = typeof clearTimeout == "function" ? clearTimeout : null
          , V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(K) {
            for (var se = n(m); se !== null; ) {
                if (se.callback === null)
                    i(m);
                else if (se.startTime <= K)
                    i(m),
                    se.sortIndex = se.expirationTime,
                    e(h, se);
                else
                    break;
                se = n(m)
            }
        }
        function D(K) {
            if (b = !1,
            j(K),
            !k)
                if (n(h) !== null)
                    k = !0,
                    xe(B);
                else {
                    var se = n(m);
                    se !== null && fe(D, se.startTime - K)
                }
        }
        function B(K, se) {
            k = !1,
            b && (b = !1,
            A(M),
            M = -1),
            E = !0;
            var U = w;
            try {
                for (j(se),
                y = n(h); y !== null && (!(y.expirationTime > se) || K && !de()); ) {
                    var N = y.callback;
                    if (typeof N == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var z = N(y.expirationTime <= se);
                        se = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === n(h) && i(h),
                        j(se)
                    } else
                        i(h);
                    y = n(h)
                }
                if (y !== null)
                    var ye = !0;
                else {
                    var ve = n(m);
                    ve !== null && fe(D, ve.startTime - se),
                    ye = !1
                }
                return ye
            } finally {
                y = null,
                w = U,
                E = !1
            }
        }
        var q = !1
          , G = null
          , M = -1
          , X = 5
          , me = -1;
        function de() {
            return !(t.unstable_now() - me < X)
        }
        function Te() {
            if (G !== null) {
                var K = t.unstable_now();
                me = K;
                var se = !0;
                try {
                    se = G(!0, K)
                } finally {
                    se ? Le() : (q = !1,
                    G = null)
                }
            } else
                q = !1
        }
        var Le;
        if (typeof V == "function")
            Le = function() {
                V(Te)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ae = new MessageChannel
              , Me = Ae.port2;
            Ae.port1.onmessage = Te,
            Le = function() {
                Me.postMessage(null)
            }
        } else
            Le = function() {
                S(Te, 0)
            }
            ;
        function xe(K) {
            G = K,
            q || (q = !0,
            Le())
        }
        function fe(K, se) {
            M = S(function() {
                K(t.unstable_now())
            }, se)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(K) {
            K.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            k || E || (k = !0,
            xe(B))
        }
        ,
        t.unstable_forceFrameRate = function(K) {
            0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < K ? Math.floor(1e3 / K) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return n(h)
        }
        ,
        t.unstable_next = function(K) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var se = 3;
                break;
            default:
                se = w
            }
            var U = w;
            w = se;
            try {
                return K()
            } finally {
                w = U
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(K, se) {
            switch (K) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                K = 3
            }
            var U = w;
            w = K;
            try {
                return se()
            } finally {
                w = U
            }
        }
        ,
        t.unstable_scheduleCallback = function(K, se, U) {
            var N = t.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay,
            U = typeof U == "number" && 0 < U ? N + U : N) : U = N,
            K) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = U + z,
            K = {
                id: g++,
                callback: se,
                priorityLevel: K,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            },
            U > N ? (K.sortIndex = U,
            e(m, K),
            n(h) === null && K === n(m) && (b ? (A(M),
            M = -1) : b = !0,
            fe(D, U - N))) : (K.sortIndex = z,
            e(h, K),
            k || E || (k = !0,
            xe(B))),
            K
        }
        ,
        t.unstable_shouldYield = de,
        t.unstable_wrapCallback = function(K) {
            var se = w;
            return function() {
                var U = w;
                w = se;
                try {
                    return K.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    }
    )(ed)),
    ed
}
var bg;
function Sb() {
    return bg || (bg = 1,
    Zc.exports = xb()),
    Zc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kg;
function bb() {
    if (kg)
        return Nt;
    kg = 1;
    var t = bf()
      , e = Sb();
    function n(r) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, a = 1; a < arguments.length; a++)
            s += "&args[]=" + encodeURIComponent(arguments[a]);
        return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , o = {};
    function l(r, s) {
        u(r, s),
        u(r + "Capture", s)
    }
    function u(r, s) {
        for (o[r] = s,
        r = 0; r < s.length; r++)
            i.add(s[r])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function w(r) {
        return h.call(y, r) ? !0 : h.call(g, r) ? !1 : m.test(r) ? y[r] = !0 : (g[r] = !0,
        !1)
    }
    function E(r, s, a, c) {
        if (a !== null && a.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return c ? !1 : a !== null ? !a.acceptsBooleans : (r = r.toLowerCase().slice(0, 5),
            r !== "data-" && r !== "aria-");
        default:
            return !1
        }
    }
    function k(r, s, a, c) {
        if (s === null || typeof s > "u" || E(r, s, a, c))
            return !0;
        if (c)
            return !1;
        if (a !== null)
            switch (a.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function b(r, s, a, c, f, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = c,
        this.attributeNamespace = f,
        this.mustUseProperty = a,
        this.propertyName = r,
        this.type = s,
        this.sanitizeURL = p,
        this.removeEmptyString = v
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        S[r] = new b(r,0,!1,r,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
        var s = r[0];
        S[s] = new b(s,1,!1,r[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
        S[r] = new b(r,2,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
        S[r] = new b(r,2,!1,r,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        S[r] = new b(r,3,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(r) {
        S[r] = new b(r,3,!0,r,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(r) {
        S[r] = new b(r,4,!1,r,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(r) {
        S[r] = new b(r,6,!1,r,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(r) {
        S[r] = new b(r,5,!1,r.toLowerCase(),null,!1,!1)
    });
    var A = /[\-:]([a-z])/g;
    function V(r) {
        return r[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var s = r.replace(A, V);
        S[s] = new b(s,1,!1,r,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var s = r.replace(A, V);
        S[s] = new b(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
        var s = r.replace(A, V);
        S[s] = new b(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(r) {
        S[r] = new b(r,1,!1,r.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(r) {
        S[r] = new b(r,1,!1,r.toLowerCase(),null,!0,!0)
    });
    function j(r, s, a, c) {
        var f = S.hasOwnProperty(s) ? S[s] : null;
        (f !== null ? f.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (k(s, a, f, c) && (a = null),
        c || f === null ? w(s) && (a === null ? r.removeAttribute(s) : r.setAttribute(s, "" + a)) : f.mustUseProperty ? r[f.propertyName] = a === null ? f.type === 3 ? !1 : "" : a : (s = f.attributeName,
        c = f.attributeNamespace,
        a === null ? r.removeAttribute(s) : (f = f.type,
        a = f === 3 || f === 4 && a === !0 ? "" : "" + a,
        c ? r.setAttributeNS(c, s, a) : r.setAttribute(s, a))))
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , B = Symbol.for("react.element")
      , q = Symbol.for("react.portal")
      , G = Symbol.for("react.fragment")
      , M = Symbol.for("react.strict_mode")
      , X = Symbol.for("react.profiler")
      , me = Symbol.for("react.provider")
      , de = Symbol.for("react.context")
      , Te = Symbol.for("react.forward_ref")
      , Le = Symbol.for("react.suspense")
      , Ae = Symbol.for("react.suspense_list")
      , Me = Symbol.for("react.memo")
      , xe = Symbol.for("react.lazy")
      , fe = Symbol.for("react.offscreen")
      , K = Symbol.iterator;
    function se(r) {
        return r === null || typeof r != "object" ? null : (r = K && r[K] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var U = Object.assign, N;
    function z(r) {
        if (N === void 0)
            try {
                throw Error()
            } catch (a) {
                var s = a.stack.trim().match(/\n( *(at )?)/);
                N = s && s[1] || ""
            }
        return `
` + N + r
    }
    var ye = !1;
    function ve(r, s) {
        if (!r || ye)
            return "";
        ye = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (I) {
                        var c = I
                    }
                    Reflect.construct(r, [], s)
                } else {
                    try {
                        s.call()
                    } catch (I) {
                        c = I
                    }
                    r.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (I) {
                    c = I
                }
                r()
            }
        } catch (I) {
            if (I && c && typeof I.stack == "string") {
                for (var f = I.stack.split(`
`), p = c.stack.split(`
`), v = f.length - 1, C = p.length - 1; 1 <= v && 0 <= C && f[v] !== p[C]; )
                    C--;
                for (; 1 <= v && 0 <= C; v--,
                C--)
                    if (f[v] !== p[C]) {
                        if (v !== 1 || C !== 1)
                            do
                                if (v--,
                                C--,
                                0 > C || f[v] !== p[C]) {
                                    var T = `
` + f[v].replace(" at new ", " at ");
                                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)),
                                    T
                                }
                            while (1 <= v && 0 <= C);
                        break
                    }
            }
        } finally {
            ye = !1,
            Error.prepareStackTrace = a
        }
        return (r = r ? r.displayName || r.name : "") ? z(r) : ""
    }
    function le(r) {
        switch (r.tag) {
        case 5:
            return z(r.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return r = ve(r.type, !1),
            r;
        case 11:
            return r = ve(r.type.render, !1),
            r;
        case 1:
            return r = ve(r.type, !0),
            r;
        default:
            return ""
        }
    }
    function he(r) {
        if (r == null)
            return null;
        if (typeof r == "function")
            return r.displayName || r.name || null;
        if (typeof r == "string")
            return r;
        switch (r) {
        case G:
            return "Fragment";
        case q:
            return "Portal";
        case X:
            return "Profiler";
        case M:
            return "StrictMode";
        case Le:
            return "Suspense";
        case Ae:
            return "SuspenseList"
        }
        if (typeof r == "object")
            switch (r.$$typeof) {
            case de:
                return (r.displayName || "Context") + ".Consumer";
            case me:
                return (r._context.displayName || "Context") + ".Provider";
            case Te:
                var s = r.render;
                return r = r.displayName,
                r || (r = s.displayName || s.name || "",
                r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"),
                r;
            case Me:
                return s = r.displayName || null,
                s !== null ? s : he(r.type) || "Memo";
            case xe:
                s = r._payload,
                r = r._init;
                try {
                    return he(r(s))
                } catch {}
            }
        return null
    }
    function Ne(r) {
        var s = r.type;
        switch (r.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return r = s.render,
            r = r.displayName || r.name || "",
            s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return he(s);
        case 8:
            return s === M ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function _e(r) {
        switch (typeof r) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return r;
        case "object":
            return r;
        default:
            return ""
        }
    }
    function we(r) {
        var s = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function pt(r) {
        var s = we(r) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(r.constructor.prototype, s)
          , c = "" + r[s];
        if (!r.hasOwnProperty(s) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var f = a.get
              , p = a.set;
            return Object.defineProperty(r, s, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(v) {
                    c = "" + v,
                    p.call(this, v)
                }
            }),
            Object.defineProperty(r, s, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return c
                },
                setValue: function(v) {
                    c = "" + v
                },
                stopTracking: function() {
                    r._valueTracker = null,
                    delete r[s]
                }
            }
        }
    }
    function Tn(r) {
        r._valueTracker || (r._valueTracker = pt(r))
    }
    function Or(r) {
        if (!r)
            return !1;
        var s = r._valueTracker;
        if (!s)
            return !0;
        var a = s.getValue()
          , c = "";
        return r && (c = we(r) ? r.checked ? "true" : "false" : r.value),
        r = c,
        r !== a ? (s.setValue(r),
        !0) : !1
    }
    function $n(r) {
        if (r = r || (typeof document < "u" ? document : void 0),
        typeof r > "u")
            return null;
        try {
            return r.activeElement || r.body
        } catch {
            return r.body
        }
    }
    function Hn(r, s) {
        var a = s.checked;
        return U({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: a ?? r._wrapperState.initialChecked
        })
    }
    function kh(r, s) {
        var a = s.defaultValue == null ? "" : s.defaultValue
          , c = s.checked != null ? s.checked : s.defaultChecked;
        a = _e(s.value != null ? s.value : a),
        r._wrapperState = {
            initialChecked: c,
            initialValue: a,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function Eh(r, s) {
        s = s.checked,
        s != null && j(r, "checked", s, !1)
    }
    function ru(r, s) {
        Eh(r, s);
        var a = _e(s.value)
          , c = s.type;
        if (a != null)
            c === "number" ? (a === 0 && r.value === "" || r.value != a) && (r.value = "" + a) : r.value !== "" + a && (r.value = "" + a);
        else if (c === "submit" || c === "reset") {
            r.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? su(r, s.type, a) : s.hasOwnProperty("defaultValue") && su(r, s.type, _e(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (r.defaultChecked = !!s.defaultChecked)
    }
    function Ch(r, s, a) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var c = s.type;
            if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + r._wrapperState.initialValue,
            a || s === r.value || (r.value = s),
            r.defaultValue = s
        }
        a = r.name,
        a !== "" && (r.name = ""),
        r.defaultChecked = !!r._wrapperState.initialChecked,
        a !== "" && (r.name = a)
    }
    function su(r, s, a) {
        (s !== "number" || $n(r.ownerDocument) !== r) && (a == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + a && (r.defaultValue = "" + a))
    }
    var yi = Array.isArray;
    function gs(r, s, a, c) {
        if (r = r.options,
        s) {
            s = {};
            for (var f = 0; f < a.length; f++)
                s["$" + a[f]] = !0;
            for (a = 0; a < r.length; a++)
                f = s.hasOwnProperty("$" + r[a].value),
                r[a].selected !== f && (r[a].selected = f),
                f && c && (r[a].defaultSelected = !0)
        } else {
            for (a = "" + _e(a),
            s = null,
            f = 0; f < r.length; f++) {
                if (r[f].value === a) {
                    r[f].selected = !0,
                    c && (r[f].defaultSelected = !0);
                    return
                }
                s !== null || r[f].disabled || (s = r[f])
            }
            s !== null && (s.selected = !0)
        }
    }
    function iu(r, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(n(91));
        return U({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + r._wrapperState.initialValue
        })
    }
    function Th(r, s) {
        var a = s.value;
        if (a == null) {
            if (a = s.children,
            s = s.defaultValue,
            a != null) {
                if (s != null)
                    throw Error(n(92));
                if (yi(a)) {
                    if (1 < a.length)
                        throw Error(n(93));
                    a = a[0]
                }
                s = a
            }
            s == null && (s = ""),
            a = s
        }
        r._wrapperState = {
            initialValue: _e(a)
        }
    }
    function Ph(r, s) {
        var a = _e(s.value)
          , c = _e(s.defaultValue);
        a != null && (a = "" + a,
        a !== r.value && (r.value = a),
        s.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
        c != null && (r.defaultValue = "" + c)
    }
    function _h(r) {
        var s = r.textContent;
        s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s)
    }
    function Rh(r) {
        switch (r) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function ou(r, s) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? Rh(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r
    }
    var Yo, Ah = (function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, a, c, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return r(s, a, c, f)
            })
        }
        : r
    }
    )(function(r, s) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in r)
            r.innerHTML = s;
        else {
            for (Yo = Yo || document.createElement("div"),
            Yo.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = Yo.firstChild; r.firstChild; )
                r.removeChild(r.firstChild);
            for (; s.firstChild; )
                r.appendChild(s.firstChild)
        }
    });
    function vi(r, s) {
        if (s) {
            var a = r.firstChild;
            if (a && a === r.lastChild && a.nodeType === 3) {
                a.nodeValue = s;
                return
            }
        }
        r.textContent = s
    }
    var wi = {
        animationIterationCount: !0,
        aspectRatio: !0,
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
        strokeWidth: !0
    }
      , w1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wi).forEach(function(r) {
        w1.forEach(function(s) {
            s = s + r.charAt(0).toUpperCase() + r.substring(1),
            wi[s] = wi[r]
        })
    });
    function Nh(r, s, a) {
        return s == null || typeof s == "boolean" || s === "" ? "" : a || typeof s != "number" || s === 0 || wi.hasOwnProperty(r) && wi[r] ? ("" + s).trim() : s + "px"
    }
    function Oh(r, s) {
        r = r.style;
        for (var a in s)
            if (s.hasOwnProperty(a)) {
                var c = a.indexOf("--") === 0
                  , f = Nh(a, s[a], c);
                a === "float" && (a = "cssFloat"),
                c ? r.setProperty(a, f) : r[a] = f
            }
    }
    var x1 = U({
        menuitem: !0
    }, {
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
        wbr: !0
    });
    function au(r, s) {
        if (s) {
            if (x1[r] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(n(137, r));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(n(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(n(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(n(62))
        }
    }
    function lu(r, s) {
        if (r.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var uu = null;
    function cu(r) {
        return r = r.target || r.srcElement || window,
        r.correspondingUseElement && (r = r.correspondingUseElement),
        r.nodeType === 3 ? r.parentNode : r
    }
    var du = null
      , ys = null
      , vs = null;
    function jh(r) {
        if (r = Ui(r)) {
            if (typeof du != "function")
                throw Error(n(280));
            var s = r.stateNode;
            s && (s = wa(s),
            du(r.stateNode, r.type, s))
        }
    }
    function Lh(r) {
        ys ? vs ? vs.push(r) : vs = [r] : ys = r
    }
    function Dh() {
        if (ys) {
            var r = ys
              , s = vs;
            if (vs = ys = null,
            jh(r),
            s)
                for (r = 0; r < s.length; r++)
                    jh(s[r])
        }
    }
    function Mh(r, s) {
        return r(s)
    }
    function Ih() {}
    var fu = !1;
    function Fh(r, s, a) {
        if (fu)
            return r(s, a);
        fu = !0;
        try {
            return Mh(r, s, a)
        } finally {
            fu = !1,
            (ys !== null || vs !== null) && (Ih(),
            Dh())
        }
    }
    function xi(r, s) {
        var a = r.stateNode;
        if (a === null)
            return null;
        var c = wa(a);
        if (c === null)
            return null;
        a = c[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (c = !c.disabled) || (r = r.type,
            c = !(r === "button" || r === "input" || r === "select" || r === "textarea")),
            r = !c;
            break e;
        default:
            r = !1
        }
        if (r)
            return null;
        if (a && typeof a != "function")
            throw Error(n(231, s, typeof a));
        return a
    }
    var hu = !1;
    if (d)
        try {
            var Si = {};
            Object.defineProperty(Si, "passive", {
                get: function() {
                    hu = !0
                }
            }),
            window.addEventListener("test", Si, Si),
            window.removeEventListener("test", Si, Si)
        } catch {
            hu = !1
        }
    function S1(r, s, a, c, f, p, v, C, T) {
        var I = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(a, I)
        } catch (H) {
            this.onError(H)
        }
    }
    var bi = !1
      , Xo = null
      , Jo = !1
      , pu = null
      , b1 = {
        onError: function(r) {
            bi = !0,
            Xo = r
        }
    };
    function k1(r, s, a, c, f, p, v, C, T) {
        bi = !1,
        Xo = null,
        S1.apply(b1, arguments)
    }
    function E1(r, s, a, c, f, p, v, C, T) {
        if (k1.apply(this, arguments),
        bi) {
            if (bi) {
                var I = Xo;
                bi = !1,
                Xo = null
            } else
                throw Error(n(198));
            Jo || (Jo = !0,
            pu = I)
        }
    }
    function jr(r) {
        var s = r
          , a = r;
        if (r.alternate)
            for (; s.return; )
                s = s.return;
        else {
            r = s;
            do
                s = r,
                (s.flags & 4098) !== 0 && (a = s.return),
                r = s.return;
            while (r)
        }
        return s.tag === 3 ? a : null
    }
    function Vh(r) {
        if (r.tag === 13) {
            var s = r.memoizedState;
            if (s === null && (r = r.alternate,
            r !== null && (s = r.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function Bh(r) {
        if (jr(r) !== r)
            throw Error(n(188))
    }
    function C1(r) {
        var s = r.alternate;
        if (!s) {
            if (s = jr(r),
            s === null)
                throw Error(n(188));
            return s !== r ? null : r
        }
        for (var a = r, c = s; ; ) {
            var f = a.return;
            if (f === null)
                break;
            var p = f.alternate;
            if (p === null) {
                if (c = f.return,
                c !== null) {
                    a = c;
                    continue
                }
                break
            }
            if (f.child === p.child) {
                for (p = f.child; p; ) {
                    if (p === a)
                        return Bh(f),
                        r;
                    if (p === c)
                        return Bh(f),
                        s;
                    p = p.sibling
                }
                throw Error(n(188))
            }
            if (a.return !== c.return)
                a = f,
                c = p;
            else {
                for (var v = !1, C = f.child; C; ) {
                    if (C === a) {
                        v = !0,
                        a = f,
                        c = p;
                        break
                    }
                    if (C === c) {
                        v = !0,
                        c = f,
                        a = p;
                        break
                    }
                    C = C.sibling
                }
                if (!v) {
                    for (C = p.child; C; ) {
                        if (C === a) {
                            v = !0,
                            a = p,
                            c = f;
                            break
                        }
                        if (C === c) {
                            v = !0,
                            c = p,
                            a = f;
                            break
                        }
                        C = C.sibling
                    }
                    if (!v)
                        throw Error(n(189))
                }
            }
            if (a.alternate !== c)
                throw Error(n(190))
        }
        if (a.tag !== 3)
            throw Error(n(188));
        return a.stateNode.current === a ? r : s
    }
    function Uh(r) {
        return r = C1(r),
        r !== null ? zh(r) : null
    }
    function zh(r) {
        if (r.tag === 5 || r.tag === 6)
            return r;
        for (r = r.child; r !== null; ) {
            var s = zh(r);
            if (s !== null)
                return s;
            r = r.sibling
        }
        return null
    }
    var $h = e.unstable_scheduleCallback
      , Hh = e.unstable_cancelCallback
      , T1 = e.unstable_shouldYield
      , P1 = e.unstable_requestPaint
      , Qe = e.unstable_now
      , _1 = e.unstable_getCurrentPriorityLevel
      , mu = e.unstable_ImmediatePriority
      , qh = e.unstable_UserBlockingPriority
      , Zo = e.unstable_NormalPriority
      , R1 = e.unstable_LowPriority
      , Wh = e.unstable_IdlePriority
      , ea = null
      , pn = null;
    function A1(r) {
        if (pn && typeof pn.onCommitFiberRoot == "function")
            try {
                pn.onCommitFiberRoot(ea, r, void 0, (r.current.flags & 128) === 128)
            } catch {}
    }
    var tn = Math.clz32 ? Math.clz32 : j1
      , N1 = Math.log
      , O1 = Math.LN2;
    function j1(r) {
        return r >>>= 0,
        r === 0 ? 32 : 31 - (N1(r) / O1 | 0) | 0
    }
    var ta = 64
      , na = 4194304;
    function ki(r) {
        switch (r & -r) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return r & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return r
        }
    }
    function ra(r, s) {
        var a = r.pendingLanes;
        if (a === 0)
            return 0;
        var c = 0
          , f = r.suspendedLanes
          , p = r.pingedLanes
          , v = a & 268435455;
        if (v !== 0) {
            var C = v & ~f;
            C !== 0 ? c = ki(C) : (p &= v,
            p !== 0 && (c = ki(p)))
        } else
            v = a & ~f,
            v !== 0 ? c = ki(v) : p !== 0 && (c = ki(p));
        if (c === 0)
            return 0;
        if (s !== 0 && s !== c && (s & f) === 0 && (f = c & -c,
        p = s & -s,
        f >= p || f === 16 && (p & 4194240) !== 0))
            return s;
        if ((c & 4) !== 0 && (c |= a & 16),
        s = r.entangledLanes,
        s !== 0)
            for (r = r.entanglements,
            s &= c; 0 < s; )
                a = 31 - tn(s),
                f = 1 << a,
                c |= r[a],
                s &= ~f;
        return c
    }
    function L1(r, s) {
        switch (r) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function D1(r, s) {
        for (var a = r.suspendedLanes, c = r.pingedLanes, f = r.expirationTimes, p = r.pendingLanes; 0 < p; ) {
            var v = 31 - tn(p)
              , C = 1 << v
              , T = f[v];
            T === -1 ? ((C & a) === 0 || (C & c) !== 0) && (f[v] = L1(C, s)) : T <= s && (r.expiredLanes |= C),
            p &= ~C
        }
    }
    function gu(r) {
        return r = r.pendingLanes & -1073741825,
        r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    }
    function Kh() {
        var r = ta;
        return ta <<= 1,
        (ta & 4194240) === 0 && (ta = 64),
        r
    }
    function yu(r) {
        for (var s = [], a = 0; 31 > a; a++)
            s.push(r);
        return s
    }
    function Ei(r, s, a) {
        r.pendingLanes |= s,
        s !== 536870912 && (r.suspendedLanes = 0,
        r.pingedLanes = 0),
        r = r.eventTimes,
        s = 31 - tn(s),
        r[s] = a
    }
    function M1(r, s) {
        var a = r.pendingLanes & ~s;
        r.pendingLanes = s,
        r.suspendedLanes = 0,
        r.pingedLanes = 0,
        r.expiredLanes &= s,
        r.mutableReadLanes &= s,
        r.entangledLanes &= s,
        s = r.entanglements;
        var c = r.eventTimes;
        for (r = r.expirationTimes; 0 < a; ) {
            var f = 31 - tn(a)
              , p = 1 << f;
            s[f] = 0,
            c[f] = -1,
            r[f] = -1,
            a &= ~p
        }
    }
    function vu(r, s) {
        var a = r.entangledLanes |= s;
        for (r = r.entanglements; a; ) {
            var c = 31 - tn(a)
              , f = 1 << c;
            f & s | r[c] & s && (r[c] |= s),
            a &= ~f
        }
    }
    var je = 0;
    function Qh(r) {
        return r &= -r,
        1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Gh, wu, Yh, Xh, Jh, xu = !1, sa = [], qn = null, Wn = null, Kn = null, Ci = new Map, Ti = new Map, Qn = [], I1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Zh(r, s) {
        switch (r) {
        case "focusin":
        case "focusout":
            qn = null;
            break;
        case "dragenter":
        case "dragleave":
            Wn = null;
            break;
        case "mouseover":
        case "mouseout":
            Kn = null;
            break;
        case "pointerover":
        case "pointerout":
            Ci.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ti.delete(s.pointerId)
        }
    }
    function Pi(r, s, a, c, f, p) {
        return r === null || r.nativeEvent !== p ? (r = {
            blockedOn: s,
            domEventName: a,
            eventSystemFlags: c,
            nativeEvent: p,
            targetContainers: [f]
        },
        s !== null && (s = Ui(s),
        s !== null && wu(s)),
        r) : (r.eventSystemFlags |= c,
        s = r.targetContainers,
        f !== null && s.indexOf(f) === -1 && s.push(f),
        r)
    }
    function F1(r, s, a, c, f) {
        switch (s) {
        case "focusin":
            return qn = Pi(qn, r, s, a, c, f),
            !0;
        case "dragenter":
            return Wn = Pi(Wn, r, s, a, c, f),
            !0;
        case "mouseover":
            return Kn = Pi(Kn, r, s, a, c, f),
            !0;
        case "pointerover":
            var p = f.pointerId;
            return Ci.set(p, Pi(Ci.get(p) || null, r, s, a, c, f)),
            !0;
        case "gotpointercapture":
            return p = f.pointerId,
            Ti.set(p, Pi(Ti.get(p) || null, r, s, a, c, f)),
            !0
        }
        return !1
    }
    function ep(r) {
        var s = Lr(r.target);
        if (s !== null) {
            var a = jr(s);
            if (a !== null) {
                if (s = a.tag,
                s === 13) {
                    if (s = Vh(a),
                    s !== null) {
                        r.blockedOn = s,
                        Jh(r.priority, function() {
                            Yh(a)
                        });
                        return
                    }
                } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        r.blockedOn = null
    }
    function ia(r) {
        if (r.blockedOn !== null)
            return !1;
        for (var s = r.targetContainers; 0 < s.length; ) {
            var a = bu(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
            if (a === null) {
                a = r.nativeEvent;
                var c = new a.constructor(a.type,a);
                uu = c,
                a.target.dispatchEvent(c),
                uu = null
            } else
                return s = Ui(a),
                s !== null && wu(s),
                r.blockedOn = a,
                !1;
            s.shift()
        }
        return !0
    }
    function tp(r, s, a) {
        ia(r) && a.delete(s)
    }
    function V1() {
        xu = !1,
        qn !== null && ia(qn) && (qn = null),
        Wn !== null && ia(Wn) && (Wn = null),
        Kn !== null && ia(Kn) && (Kn = null),
        Ci.forEach(tp),
        Ti.forEach(tp)
    }
    function _i(r, s) {
        r.blockedOn === s && (r.blockedOn = null,
        xu || (xu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, V1)))
    }
    function Ri(r) {
        function s(f) {
            return _i(f, r)
        }
        if (0 < sa.length) {
            _i(sa[0], r);
            for (var a = 1; a < sa.length; a++) {
                var c = sa[a];
                c.blockedOn === r && (c.blockedOn = null)
            }
        }
        for (qn !== null && _i(qn, r),
        Wn !== null && _i(Wn, r),
        Kn !== null && _i(Kn, r),
        Ci.forEach(s),
        Ti.forEach(s),
        a = 0; a < Qn.length; a++)
            c = Qn[a],
            c.blockedOn === r && (c.blockedOn = null);
        for (; 0 < Qn.length && (a = Qn[0],
        a.blockedOn === null); )
            ep(a),
            a.blockedOn === null && Qn.shift()
    }
    var ws = D.ReactCurrentBatchConfig
      , oa = !0;
    function B1(r, s, a, c) {
        var f = je
          , p = ws.transition;
        ws.transition = null;
        try {
            je = 1,
            Su(r, s, a, c)
        } finally {
            je = f,
            ws.transition = p
        }
    }
    function U1(r, s, a, c) {
        var f = je
          , p = ws.transition;
        ws.transition = null;
        try {
            je = 4,
            Su(r, s, a, c)
        } finally {
            je = f,
            ws.transition = p
        }
    }
    function Su(r, s, a, c) {
        if (oa) {
            var f = bu(r, s, a, c);
            if (f === null)
                Vu(r, s, c, aa, a),
                Zh(r, c);
            else if (F1(f, r, s, a, c))
                c.stopPropagation();
            else if (Zh(r, c),
            s & 4 && -1 < I1.indexOf(r)) {
                for (; f !== null; ) {
                    var p = Ui(f);
                    if (p !== null && Gh(p),
                    p = bu(r, s, a, c),
                    p === null && Vu(r, s, c, aa, a),
                    p === f)
                        break;
                    f = p
                }
                f !== null && c.stopPropagation()
            } else
                Vu(r, s, c, null, a)
        }
    }
    var aa = null;
    function bu(r, s, a, c) {
        if (aa = null,
        r = cu(c),
        r = Lr(r),
        r !== null)
            if (s = jr(r),
            s === null)
                r = null;
            else if (a = s.tag,
            a === 13) {
                if (r = Vh(s),
                r !== null)
                    return r;
                r = null
            } else if (a === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                r = null
            } else
                s !== r && (r = null);
        return aa = r,
        null
    }
    function np(r) {
        switch (r) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (_1()) {
            case mu:
                return 1;
            case qh:
                return 4;
            case Zo:
            case R1:
                return 16;
            case Wh:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Gn = null
      , ku = null
      , la = null;
    function rp() {
        if (la)
            return la;
        var r, s = ku, a = s.length, c, f = "value"in Gn ? Gn.value : Gn.textContent, p = f.length;
        for (r = 0; r < a && s[r] === f[r]; r++)
            ;
        var v = a - r;
        for (c = 1; c <= v && s[a - c] === f[p - c]; c++)
            ;
        return la = f.slice(r, 1 < c ? 1 - c : void 0)
    }
    function ua(r) {
        var s = r.keyCode;
        return "charCode"in r ? (r = r.charCode,
        r === 0 && s === 13 && (r = 13)) : r = s,
        r === 10 && (r = 13),
        32 <= r || r === 13 ? r : 0
    }
    function ca() {
        return !0
    }
    function sp() {
        return !1
    }
    function Mt(r) {
        function s(a, c, f, p, v) {
            this._reactName = a,
            this._targetInst = f,
            this.type = c,
            this.nativeEvent = p,
            this.target = v,
            this.currentTarget = null;
            for (var C in r)
                r.hasOwnProperty(C) && (a = r[C],
                this[C] = a ? a(p) : p[C]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ca : sp,
            this.isPropagationStopped = sp,
            this
        }
        return U(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = ca)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = ca)
            },
            persist: function() {},
            isPersistent: ca
        }),
        s
    }
    var xs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(r) {
            return r.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Eu = Mt(xs), Ai = U({}, xs, {
        view: 0,
        detail: 0
    }), z1 = Mt(Ai), Cu, Tu, Ni, da = U({}, Ai, {
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
        getModifierState: _u,
        button: 0,
        buttons: 0,
        relatedTarget: function(r) {
            return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget
        },
        movementX: function(r) {
            return "movementX"in r ? r.movementX : (r !== Ni && (Ni && r.type === "mousemove" ? (Cu = r.screenX - Ni.screenX,
            Tu = r.screenY - Ni.screenY) : Tu = Cu = 0,
            Ni = r),
            Cu)
        },
        movementY: function(r) {
            return "movementY"in r ? r.movementY : Tu
        }
    }), ip = Mt(da), $1 = U({}, da, {
        dataTransfer: 0
    }), H1 = Mt($1), q1 = U({}, Ai, {
        relatedTarget: 0
    }), Pu = Mt(q1), W1 = U({}, xs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), K1 = Mt(W1), Q1 = U({}, xs, {
        clipboardData: function(r) {
            return "clipboardData"in r ? r.clipboardData : window.clipboardData
        }
    }), G1 = Mt(Q1), Y1 = U({}, xs, {
        data: 0
    }), op = Mt(Y1), X1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, J1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Z1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function eS(r) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(r) : (r = Z1[r]) ? !!s[r] : !1
    }
    function _u() {
        return eS
    }
    var tS = U({}, Ai, {
        key: function(r) {
            if (r.key) {
                var s = X1[r.key] || r.key;
                if (s !== "Unidentified")
                    return s
            }
            return r.type === "keypress" ? (r = ua(r),
            r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? J1[r.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: _u,
        charCode: function(r) {
            return r.type === "keypress" ? ua(r) : 0
        },
        keyCode: function(r) {
            return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        },
        which: function(r) {
            return r.type === "keypress" ? ua(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        }
    })
      , nS = Mt(tS)
      , rS = U({}, da, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , ap = Mt(rS)
      , sS = U({}, Ai, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _u
    })
      , iS = Mt(sS)
      , oS = U({}, xs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , aS = Mt(oS)
      , lS = U({}, da, {
        deltaX: function(r) {
            return "deltaX"in r ? r.deltaX : "wheelDeltaX"in r ? -r.wheelDeltaX : 0
        },
        deltaY: function(r) {
            return "deltaY"in r ? r.deltaY : "wheelDeltaY"in r ? -r.wheelDeltaY : "wheelDelta"in r ? -r.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , uS = Mt(lS)
      , cS = [9, 13, 27, 32]
      , Ru = d && "CompositionEvent"in window
      , Oi = null;
    d && "documentMode"in document && (Oi = document.documentMode);
    var dS = d && "TextEvent"in window && !Oi
      , lp = d && (!Ru || Oi && 8 < Oi && 11 >= Oi)
      , up = " "
      , cp = !1;
    function dp(r, s) {
        switch (r) {
        case "keyup":
            return cS.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function fp(r) {
        return r = r.detail,
        typeof r == "object" && "data"in r ? r.data : null
    }
    var Ss = !1;
    function fS(r, s) {
        switch (r) {
        case "compositionend":
            return fp(s);
        case "keypress":
            return s.which !== 32 ? null : (cp = !0,
            up);
        case "textInput":
            return r = s.data,
            r === up && cp ? null : r;
        default:
            return null
        }
    }
    function hS(r, s) {
        if (Ss)
            return r === "compositionend" || !Ru && dp(r, s) ? (r = rp(),
            la = ku = Gn = null,
            Ss = !1,
            r) : null;
        switch (r) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return lp && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var pS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
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
        week: !0
    };
    function hp(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s === "input" ? !!pS[r.type] : s === "textarea"
    }
    function pp(r, s, a, c) {
        Lh(c),
        s = ga(s, "onChange"),
        0 < s.length && (a = new Eu("onChange","change",null,a,c),
        r.push({
            event: a,
            listeners: s
        }))
    }
    var ji = null
      , Li = null;
    function mS(r) {
        Op(r, 0)
    }
    function fa(r) {
        var s = Ts(r);
        if (Or(s))
            return r
    }
    function gS(r, s) {
        if (r === "change")
            return s
    }
    var mp = !1;
    if (d) {
        var Au;
        if (d) {
            var Nu = "oninput"in document;
            if (!Nu) {
                var gp = document.createElement("div");
                gp.setAttribute("oninput", "return;"),
                Nu = typeof gp.oninput == "function"
            }
            Au = Nu
        } else
            Au = !1;
        mp = Au && (!document.documentMode || 9 < document.documentMode)
    }
    function yp() {
        ji && (ji.detachEvent("onpropertychange", vp),
        Li = ji = null)
    }
    function vp(r) {
        if (r.propertyName === "value" && fa(Li)) {
            var s = [];
            pp(s, Li, r, cu(r)),
            Fh(mS, s)
        }
    }
    function yS(r, s, a) {
        r === "focusin" ? (yp(),
        ji = s,
        Li = a,
        ji.attachEvent("onpropertychange", vp)) : r === "focusout" && yp()
    }
    function vS(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown")
            return fa(Li)
    }
    function wS(r, s) {
        if (r === "click")
            return fa(s)
    }
    function xS(r, s) {
        if (r === "input" || r === "change")
            return fa(s)
    }
    function SS(r, s) {
        return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s
    }
    var nn = typeof Object.is == "function" ? Object.is : SS;
    function Di(r, s) {
        if (nn(r, s))
            return !0;
        if (typeof r != "object" || r === null || typeof s != "object" || s === null)
            return !1;
        var a = Object.keys(r)
          , c = Object.keys(s);
        if (a.length !== c.length)
            return !1;
        for (c = 0; c < a.length; c++) {
            var f = a[c];
            if (!h.call(s, f) || !nn(r[f], s[f]))
                return !1
        }
        return !0
    }
    function wp(r) {
        for (; r && r.firstChild; )
            r = r.firstChild;
        return r
    }
    function xp(r, s) {
        var a = wp(r);
        r = 0;
        for (var c; a; ) {
            if (a.nodeType === 3) {
                if (c = r + a.textContent.length,
                r <= s && c >= s)
                    return {
                        node: a,
                        offset: s - r
                    };
                r = c
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = wp(a)
        }
    }
    function Sp(r, s) {
        return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Sp(r, s.parentNode) : "contains"in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function bp() {
        for (var r = window, s = $n(); s instanceof r.HTMLIFrameElement; ) {
            try {
                var a = typeof s.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                r = s.contentWindow;
            else
                break;
            s = $n(r.document)
        }
        return s
    }
    function Ou(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true")
    }
    function bS(r) {
        var s = bp()
          , a = r.focusedElem
          , c = r.selectionRange;
        if (s !== a && a && a.ownerDocument && Sp(a.ownerDocument.documentElement, a)) {
            if (c !== null && Ou(a)) {
                if (s = c.start,
                r = c.end,
                r === void 0 && (r = s),
                "selectionStart"in a)
                    a.selectionStart = s,
                    a.selectionEnd = Math.min(r, a.value.length);
                else if (r = (s = a.ownerDocument || document) && s.defaultView || window,
                r.getSelection) {
                    r = r.getSelection();
                    var f = a.textContent.length
                      , p = Math.min(c.start, f);
                    c = c.end === void 0 ? p : Math.min(c.end, f),
                    !r.extend && p > c && (f = c,
                    c = p,
                    p = f),
                    f = xp(a, p);
                    var v = xp(a, c);
                    f && v && (r.rangeCount !== 1 || r.anchorNode !== f.node || r.anchorOffset !== f.offset || r.focusNode !== v.node || r.focusOffset !== v.offset) && (s = s.createRange(),
                    s.setStart(f.node, f.offset),
                    r.removeAllRanges(),
                    p > c ? (r.addRange(s),
                    r.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset),
                    r.addRange(s)))
                }
            }
            for (s = [],
            r = a; r = r.parentNode; )
                r.nodeType === 1 && s.push({
                    element: r,
                    left: r.scrollLeft,
                    top: r.scrollTop
                });
            for (typeof a.focus == "function" && a.focus(),
            a = 0; a < s.length; a++)
                r = s[a],
                r.element.scrollLeft = r.left,
                r.element.scrollTop = r.top
        }
    }
    var kS = d && "documentMode"in document && 11 >= document.documentMode
      , bs = null
      , ju = null
      , Mi = null
      , Lu = !1;
    function kp(r, s, a) {
        var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Lu || bs == null || bs !== $n(c) || (c = bs,
        "selectionStart"in c && Ou(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(),
        c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }),
        Mi && Di(Mi, c) || (Mi = c,
        c = ga(ju, "onSelect"),
        0 < c.length && (s = new Eu("onSelect","select",null,s,a),
        r.push({
            event: s,
            listeners: c
        }),
        s.target = bs)))
    }
    function ha(r, s) {
        var a = {};
        return a[r.toLowerCase()] = s.toLowerCase(),
        a["Webkit" + r] = "webkit" + s,
        a["Moz" + r] = "moz" + s,
        a
    }
    var ks = {
        animationend: ha("Animation", "AnimationEnd"),
        animationiteration: ha("Animation", "AnimationIteration"),
        animationstart: ha("Animation", "AnimationStart"),
        transitionend: ha("Transition", "TransitionEnd")
    }
      , Du = {}
      , Ep = {};
    d && (Ep = document.createElement("div").style,
    "AnimationEvent"in window || (delete ks.animationend.animation,
    delete ks.animationiteration.animation,
    delete ks.animationstart.animation),
    "TransitionEvent"in window || delete ks.transitionend.transition);
    function pa(r) {
        if (Du[r])
            return Du[r];
        if (!ks[r])
            return r;
        var s = ks[r], a;
        for (a in s)
            if (s.hasOwnProperty(a) && a in Ep)
                return Du[r] = s[a];
        return r
    }
    var Cp = pa("animationend")
      , Tp = pa("animationiteration")
      , Pp = pa("animationstart")
      , _p = pa("transitionend")
      , Rp = new Map
      , Ap = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Yn(r, s) {
        Rp.set(r, s),
        l(s, [r])
    }
    for (var Mu = 0; Mu < Ap.length; Mu++) {
        var Iu = Ap[Mu]
          , ES = Iu.toLowerCase()
          , CS = Iu[0].toUpperCase() + Iu.slice(1);
        Yn(ES, "on" + CS)
    }
    Yn(Cp, "onAnimationEnd"),
    Yn(Tp, "onAnimationIteration"),
    Yn(Pp, "onAnimationStart"),
    Yn("dblclick", "onDoubleClick"),
    Yn("focusin", "onFocus"),
    Yn("focusout", "onBlur"),
    Yn(_p, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , TS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));
    function Np(r, s, a) {
        var c = r.type || "unknown-event";
        r.currentTarget = a,
        E1(c, s, void 0, r),
        r.currentTarget = null
    }
    function Op(r, s) {
        s = (s & 4) !== 0;
        for (var a = 0; a < r.length; a++) {
            var c = r[a]
              , f = c.event;
            c = c.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = c.length - 1; 0 <= v; v--) {
                        var C = c[v]
                          , T = C.instance
                          , I = C.currentTarget;
                        if (C = C.listener,
                        T !== p && f.isPropagationStopped())
                            break e;
                        Np(f, C, I),
                        p = T
                    }
                else
                    for (v = 0; v < c.length; v++) {
                        if (C = c[v],
                        T = C.instance,
                        I = C.currentTarget,
                        C = C.listener,
                        T !== p && f.isPropagationStopped())
                            break e;
                        Np(f, C, I),
                        p = T
                    }
            }
        }
        if (Jo)
            throw r = pu,
            Jo = !1,
            pu = null,
            r
    }
    function Fe(r, s) {
        var a = s[qu];
        a === void 0 && (a = s[qu] = new Set);
        var c = r + "__bubble";
        a.has(c) || (jp(s, r, 2, !1),
        a.add(c))
    }
    function Fu(r, s, a) {
        var c = 0;
        s && (c |= 4),
        jp(a, r, c, s)
    }
    var ma = "_reactListening" + Math.random().toString(36).slice(2);
    function Fi(r) {
        if (!r[ma]) {
            r[ma] = !0,
            i.forEach(function(a) {
                a !== "selectionchange" && (TS.has(a) || Fu(a, !1, r),
                Fu(a, !0, r))
            });
            var s = r.nodeType === 9 ? r : r.ownerDocument;
            s === null || s[ma] || (s[ma] = !0,
            Fu("selectionchange", !1, s))
        }
    }
    function jp(r, s, a, c) {
        switch (np(s)) {
        case 1:
            var f = B1;
            break;
        case 4:
            f = U1;
            break;
        default:
            f = Su
        }
        a = f.bind(null, s, a, r),
        f = void 0,
        !hu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (f = !0),
        c ? f !== void 0 ? r.addEventListener(s, a, {
            capture: !0,
            passive: f
        }) : r.addEventListener(s, a, !0) : f !== void 0 ? r.addEventListener(s, a, {
            passive: f
        }) : r.addEventListener(s, a, !1)
    }
    function Vu(r, s, a, c, f) {
        var p = c;
        if ((s & 1) === 0 && (s & 2) === 0 && c !== null)
            e: for (; ; ) {
                if (c === null)
                    return;
                var v = c.tag;
                if (v === 3 || v === 4) {
                    var C = c.stateNode.containerInfo;
                    if (C === f || C.nodeType === 8 && C.parentNode === f)
                        break;
                    if (v === 4)
                        for (v = c.return; v !== null; ) {
                            var T = v.tag;
                            if ((T === 3 || T === 4) && (T = v.stateNode.containerInfo,
                            T === f || T.nodeType === 8 && T.parentNode === f))
                                return;
                            v = v.return
                        }
                    for (; C !== null; ) {
                        if (v = Lr(C),
                        v === null)
                            return;
                        if (T = v.tag,
                        T === 5 || T === 6) {
                            c = p = v;
                            continue e
                        }
                        C = C.parentNode
                    }
                }
                c = c.return
            }
        Fh(function() {
            var I = p
              , H = cu(a)
              , W = [];
            e: {
                var $ = Rp.get(r);
                if ($ !== void 0) {
                    var Y = Eu
                      , ee = r;
                    switch (r) {
                    case "keypress":
                        if (ua(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = nS;
                        break;
                    case "focusin":
                        ee = "focus",
                        Y = Pu;
                        break;
                    case "focusout":
                        ee = "blur",
                        Y = Pu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = Pu;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Y = ip;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Y = H1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Y = iS;
                        break;
                    case Cp:
                    case Tp:
                    case Pp:
                        Y = K1;
                        break;
                    case _p:
                        Y = aS;
                        break;
                    case "scroll":
                        Y = z1;
                        break;
                    case "wheel":
                        Y = uS;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Y = G1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Y = ap
                    }
                    var re = (s & 4) !== 0
                      , Ge = !re && r === "scroll"
                      , O = re ? $ !== null ? $ + "Capture" : null : $;
                    re = [];
                    for (var R = I, L; R !== null; ) {
                        L = R;
                        var Q = L.stateNode;
                        if (L.tag === 5 && Q !== null && (L = Q,
                        O !== null && (Q = xi(R, O),
                        Q != null && re.push(Vi(R, Q, L)))),
                        Ge)
                            break;
                        R = R.return
                    }
                    0 < re.length && ($ = new Y($,ee,null,a,H),
                    W.push({
                        event: $,
                        listeners: re
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = r === "mouseover" || r === "pointerover",
                    Y = r === "mouseout" || r === "pointerout",
                    $ && a !== uu && (ee = a.relatedTarget || a.fromElement) && (Lr(ee) || ee[Pn]))
                        break e;
                    if ((Y || $) && ($ = H.window === H ? H : ($ = H.ownerDocument) ? $.defaultView || $.parentWindow : window,
                    Y ? (ee = a.relatedTarget || a.toElement,
                    Y = I,
                    ee = ee ? Lr(ee) : null,
                    ee !== null && (Ge = jr(ee),
                    ee !== Ge || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (Y = null,
                    ee = I),
                    Y !== ee)) {
                        if (re = ip,
                        Q = "onMouseLeave",
                        O = "onMouseEnter",
                        R = "mouse",
                        (r === "pointerout" || r === "pointerover") && (re = ap,
                        Q = "onPointerLeave",
                        O = "onPointerEnter",
                        R = "pointer"),
                        Ge = Y == null ? $ : Ts(Y),
                        L = ee == null ? $ : Ts(ee),
                        $ = new re(Q,R + "leave",Y,a,H),
                        $.target = Ge,
                        $.relatedTarget = L,
                        Q = null,
                        Lr(H) === I && (re = new re(O,R + "enter",ee,a,H),
                        re.target = L,
                        re.relatedTarget = Ge,
                        Q = re),
                        Ge = Q,
                        Y && ee)
                            t: {
                                for (re = Y,
                                O = ee,
                                R = 0,
                                L = re; L; L = Es(L))
                                    R++;
                                for (L = 0,
                                Q = O; Q; Q = Es(Q))
                                    L++;
                                for (; 0 < R - L; )
                                    re = Es(re),
                                    R--;
                                for (; 0 < L - R; )
                                    O = Es(O),
                                    L--;
                                for (; R--; ) {
                                    if (re === O || O !== null && re === O.alternate)
                                        break t;
                                    re = Es(re),
                                    O = Es(O)
                                }
                                re = null
                            }
                        else
                            re = null;
                        Y !== null && Lp(W, $, Y, re, !1),
                        ee !== null && Ge !== null && Lp(W, Ge, ee, re, !0)
                    }
                }
                e: {
                    if ($ = I ? Ts(I) : window,
                    Y = $.nodeName && $.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && $.type === "file")
                        var ie = gS;
                    else if (hp($))
                        if (mp)
                            ie = xS;
                        else {
                            ie = vS;
                            var oe = yS
                        }
                    else
                        (Y = $.nodeName) && Y.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ie = wS);
                    if (ie && (ie = ie(r, I))) {
                        pp(W, ie, a, H);
                        break e
                    }
                    oe && oe(r, $, I),
                    r === "focusout" && (oe = $._wrapperState) && oe.controlled && $.type === "number" && su($, "number", $.value)
                }
                switch (oe = I ? Ts(I) : window,
                r) {
                case "focusin":
                    (hp(oe) || oe.contentEditable === "true") && (bs = oe,
                    ju = I,
                    Mi = null);
                    break;
                case "focusout":
                    Mi = ju = bs = null;
                    break;
                case "mousedown":
                    Lu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Lu = !1,
                    kp(W, a, H);
                    break;
                case "selectionchange":
                    if (kS)
                        break;
                case "keydown":
                case "keyup":
                    kp(W, a, H)
                }
                var ae;
                if (Ru)
                    e: {
                        switch (r) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    Ss ? dp(r, a) && (ge = "onCompositionEnd") : r === "keydown" && a.keyCode === 229 && (ge = "onCompositionStart");
                ge && (lp && a.locale !== "ko" && (Ss || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Ss && (ae = rp()) : (Gn = H,
                ku = "value"in Gn ? Gn.value : Gn.textContent,
                Ss = !0)),
                oe = ga(I, ge),
                0 < oe.length && (ge = new op(ge,r,null,a,H),
                W.push({
                    event: ge,
                    listeners: oe
                }),
                ae ? ge.data = ae : (ae = fp(a),
                ae !== null && (ge.data = ae)))),
                (ae = dS ? fS(r, a) : hS(r, a)) && (I = ga(I, "onBeforeInput"),
                0 < I.length && (H = new op("onBeforeInput","beforeinput",null,a,H),
                W.push({
                    event: H,
                    listeners: I
                }),
                H.data = ae))
            }
            Op(W, s)
        })
    }
    function Vi(r, s, a) {
        return {
            instance: r,
            listener: s,
            currentTarget: a
        }
    }
    function ga(r, s) {
        for (var a = s + "Capture", c = []; r !== null; ) {
            var f = r
              , p = f.stateNode;
            f.tag === 5 && p !== null && (f = p,
            p = xi(r, a),
            p != null && c.unshift(Vi(r, p, f)),
            p = xi(r, s),
            p != null && c.push(Vi(r, p, f))),
            r = r.return
        }
        return c
    }
    function Es(r) {
        if (r === null)
            return null;
        do
            r = r.return;
        while (r && r.tag !== 5);
        return r || null
    }
    function Lp(r, s, a, c, f) {
        for (var p = s._reactName, v = []; a !== null && a !== c; ) {
            var C = a
              , T = C.alternate
              , I = C.stateNode;
            if (T !== null && T === c)
                break;
            C.tag === 5 && I !== null && (C = I,
            f ? (T = xi(a, p),
            T != null && v.unshift(Vi(a, T, C))) : f || (T = xi(a, p),
            T != null && v.push(Vi(a, T, C)))),
            a = a.return
        }
        v.length !== 0 && r.push({
            event: s,
            listeners: v
        })
    }
    var PS = /\r\n?/g
      , _S = /\u0000|\uFFFD/g;
    function Dp(r) {
        return (typeof r == "string" ? r : "" + r).replace(PS, `
`).replace(_S, "")
    }
    function ya(r, s, a) {
        if (s = Dp(s),
        Dp(r) !== s && a)
            throw Error(n(425))
    }
    function va() {}
    var Bu = null
      , Uu = null;
    function zu(r, s) {
        return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var $u = typeof setTimeout == "function" ? setTimeout : void 0
      , RS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Mp = typeof Promise == "function" ? Promise : void 0
      , AS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mp < "u" ? function(r) {
        return Mp.resolve(null).then(r).catch(NS)
    }
    : $u;
    function NS(r) {
        setTimeout(function() {
            throw r
        })
    }
    function Hu(r, s) {
        var a = s
          , c = 0;
        do {
            var f = a.nextSibling;
            if (r.removeChild(a),
            f && f.nodeType === 8)
                if (a = f.data,
                a === "/$") {
                    if (c === 0) {
                        r.removeChild(f),
                        Ri(s);
                        return
                    }
                    c--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || c++;
            a = f
        } while (a);
        Ri(s)
    }
    function Xn(r) {
        for (; r != null; r = r.nextSibling) {
            var s = r.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = r.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return r
    }
    function Ip(r) {
        r = r.previousSibling;
        for (var s = 0; r; ) {
            if (r.nodeType === 8) {
                var a = r.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (s === 0)
                        return r;
                    s--
                } else
                    a === "/$" && s++
            }
            r = r.previousSibling
        }
        return null
    }
    var Cs = Math.random().toString(36).slice(2)
      , mn = "__reactFiber$" + Cs
      , Bi = "__reactProps$" + Cs
      , Pn = "__reactContainer$" + Cs
      , qu = "__reactEvents$" + Cs
      , OS = "__reactListeners$" + Cs
      , jS = "__reactHandles$" + Cs;
    function Lr(r) {
        var s = r[mn];
        if (s)
            return s;
        for (var a = r.parentNode; a; ) {
            if (s = a[Pn] || a[mn]) {
                if (a = s.alternate,
                s.child !== null || a !== null && a.child !== null)
                    for (r = Ip(r); r !== null; ) {
                        if (a = r[mn])
                            return a;
                        r = Ip(r)
                    }
                return s
            }
            r = a,
            a = r.parentNode
        }
        return null
    }
    function Ui(r) {
        return r = r[mn] || r[Pn],
        !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r
    }
    function Ts(r) {
        if (r.tag === 5 || r.tag === 6)
            return r.stateNode;
        throw Error(n(33))
    }
    function wa(r) {
        return r[Bi] || null
    }
    var Wu = []
      , Ps = -1;
    function Jn(r) {
        return {
            current: r
        }
    }
    function Ve(r) {
        0 > Ps || (r.current = Wu[Ps],
        Wu[Ps] = null,
        Ps--)
    }
    function Ie(r, s) {
        Ps++,
        Wu[Ps] = r.current,
        r.current = s
    }
    var Zn = {}
      , mt = Jn(Zn)
      , Tt = Jn(!1)
      , Dr = Zn;
    function _s(r, s) {
        var a = r.type.contextTypes;
        if (!a)
            return Zn;
        var c = r.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === s)
            return c.__reactInternalMemoizedMaskedChildContext;
        var f = {}, p;
        for (p in a)
            f[p] = s[p];
        return c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = s,
        r.__reactInternalMemoizedMaskedChildContext = f),
        f
    }
    function Pt(r) {
        return r = r.childContextTypes,
        r != null
    }
    function xa() {
        Ve(Tt),
        Ve(mt)
    }
    function Fp(r, s, a) {
        if (mt.current !== Zn)
            throw Error(n(168));
        Ie(mt, s),
        Ie(Tt, a)
    }
    function Vp(r, s, a) {
        var c = r.stateNode;
        if (s = s.childContextTypes,
        typeof c.getChildContext != "function")
            return a;
        c = c.getChildContext();
        for (var f in c)
            if (!(f in s))
                throw Error(n(108, Ne(r) || "Unknown", f));
        return U({}, a, c)
    }
    function Sa(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Zn,
        Dr = mt.current,
        Ie(mt, r),
        Ie(Tt, Tt.current),
        !0
    }
    function Bp(r, s, a) {
        var c = r.stateNode;
        if (!c)
            throw Error(n(169));
        a ? (r = Vp(r, s, Dr),
        c.__reactInternalMemoizedMergedChildContext = r,
        Ve(Tt),
        Ve(mt),
        Ie(mt, r)) : Ve(Tt),
        Ie(Tt, a)
    }
    var _n = null
      , ba = !1
      , Ku = !1;
    function Up(r) {
        _n === null ? _n = [r] : _n.push(r)
    }
    function LS(r) {
        ba = !0,
        Up(r)
    }
    function er() {
        if (!Ku && _n !== null) {
            Ku = !0;
            var r = 0
              , s = je;
            try {
                var a = _n;
                for (je = 1; r < a.length; r++) {
                    var c = a[r];
                    do
                        c = c(!0);
                    while (c !== null)
                }
                _n = null,
                ba = !1
            } catch (f) {
                throw _n !== null && (_n = _n.slice(r + 1)),
                $h(mu, er),
                f
            } finally {
                je = s,
                Ku = !1
            }
        }
        return null
    }
    var Rs = []
      , As = 0
      , ka = null
      , Ea = 0
      , zt = []
      , $t = 0
      , Mr = null
      , Rn = 1
      , An = "";
    function Ir(r, s) {
        Rs[As++] = Ea,
        Rs[As++] = ka,
        ka = r,
        Ea = s
    }
    function zp(r, s, a) {
        zt[$t++] = Rn,
        zt[$t++] = An,
        zt[$t++] = Mr,
        Mr = r;
        var c = Rn;
        r = An;
        var f = 32 - tn(c) - 1;
        c &= ~(1 << f),
        a += 1;
        var p = 32 - tn(s) + f;
        if (30 < p) {
            var v = f - f % 5;
            p = (c & (1 << v) - 1).toString(32),
            c >>= v,
            f -= v,
            Rn = 1 << 32 - tn(s) + f | a << f | c,
            An = p + r
        } else
            Rn = 1 << p | a << f | c,
            An = r
    }
    function Qu(r) {
        r.return !== null && (Ir(r, 1),
        zp(r, 1, 0))
    }
    function Gu(r) {
        for (; r === ka; )
            ka = Rs[--As],
            Rs[As] = null,
            Ea = Rs[--As],
            Rs[As] = null;
        for (; r === Mr; )
            Mr = zt[--$t],
            zt[$t] = null,
            An = zt[--$t],
            zt[$t] = null,
            Rn = zt[--$t],
            zt[$t] = null
    }
    var It = null
      , Ft = null
      , Ue = !1
      , rn = null;
    function $p(r, s) {
        var a = Kt(5, null, null, 0);
        a.elementType = "DELETED",
        a.stateNode = s,
        a.return = r,
        s = r.deletions,
        s === null ? (r.deletions = [a],
        r.flags |= 16) : s.push(a)
    }
    function Hp(r, s) {
        switch (r.tag) {
        case 5:
            var a = r.type;
            return s = s.nodeType !== 1 || a.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (r.stateNode = s,
            It = r,
            Ft = Xn(s.firstChild),
            !0) : !1;
        case 6:
            return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (r.stateNode = s,
            It = r,
            Ft = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (a = Mr !== null ? {
                id: Rn,
                overflow: An
            } : null,
            r.memoizedState = {
                dehydrated: s,
                treeContext: a,
                retryLane: 1073741824
            },
            a = Kt(18, null, null, 0),
            a.stateNode = s,
            a.return = r,
            r.child = a,
            It = r,
            Ft = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Yu(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0
    }
    function Xu(r) {
        if (Ue) {
            var s = Ft;
            if (s) {
                var a = s;
                if (!Hp(r, s)) {
                    if (Yu(r))
                        throw Error(n(418));
                    s = Xn(a.nextSibling);
                    var c = It;
                    s && Hp(r, s) ? $p(c, a) : (r.flags = r.flags & -4097 | 2,
                    Ue = !1,
                    It = r)
                }
            } else {
                if (Yu(r))
                    throw Error(n(418));
                r.flags = r.flags & -4097 | 2,
                Ue = !1,
                It = r
            }
        }
    }
    function qp(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
            r = r.return;
        It = r
    }
    function Ca(r) {
        if (r !== It)
            return !1;
        if (!Ue)
            return qp(r),
            Ue = !0,
            !1;
        var s;
        if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type,
        s = s !== "head" && s !== "body" && !zu(r.type, r.memoizedProps)),
        s && (s = Ft)) {
            if (Yu(r))
                throw Wp(),
                Error(n(418));
            for (; s; )
                $p(r, s),
                s = Xn(s.nextSibling)
        }
        if (qp(r),
        r.tag === 13) {
            if (r = r.memoizedState,
            r = r !== null ? r.dehydrated : null,
            !r)
                throw Error(n(317));
            e: {
                for (r = r.nextSibling,
                s = 0; r; ) {
                    if (r.nodeType === 8) {
                        var a = r.data;
                        if (a === "/$") {
                            if (s === 0) {
                                Ft = Xn(r.nextSibling);
                                break e
                            }
                            s--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || s++
                    }
                    r = r.nextSibling
                }
                Ft = null
            }
        } else
            Ft = It ? Xn(r.stateNode.nextSibling) : null;
        return !0
    }
    function Wp() {
        for (var r = Ft; r; )
            r = Xn(r.nextSibling)
    }
    function Ns() {
        Ft = It = null,
        Ue = !1
    }
    function Ju(r) {
        rn === null ? rn = [r] : rn.push(r)
    }
    var DS = D.ReactCurrentBatchConfig;
    function zi(r, s, a) {
        if (r = a.ref,
        r !== null && typeof r != "function" && typeof r != "object") {
            if (a._owner) {
                if (a = a._owner,
                a) {
                    if (a.tag !== 1)
                        throw Error(n(309));
                    var c = a.stateNode
                }
                if (!c)
                    throw Error(n(147, r));
                var f = c
                  , p = "" + r;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var C = f.refs;
                    v === null ? delete C[p] : C[p] = v
                }
                ,
                s._stringRef = p,
                s)
            }
            if (typeof r != "string")
                throw Error(n(284));
            if (!a._owner)
                throw Error(n(290, r))
        }
        return r
    }
    function Ta(r, s) {
        throw r = Object.prototype.toString.call(s),
        Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r))
    }
    function Kp(r) {
        var s = r._init;
        return s(r._payload)
    }
    function Qp(r) {
        function s(O, R) {
            if (r) {
                var L = O.deletions;
                L === null ? (O.deletions = [R],
                O.flags |= 16) : L.push(R)
            }
        }
        function a(O, R) {
            if (!r)
                return null;
            for (; R !== null; )
                s(O, R),
                R = R.sibling;
            return null
        }
        function c(O, R) {
            for (O = new Map; R !== null; )
                R.key !== null ? O.set(R.key, R) : O.set(R.index, R),
                R = R.sibling;
            return O
        }
        function f(O, R) {
            return O = lr(O, R),
            O.index = 0,
            O.sibling = null,
            O
        }
        function p(O, R, L) {
            return O.index = L,
            r ? (L = O.alternate,
            L !== null ? (L = L.index,
            L < R ? (O.flags |= 2,
            R) : L) : (O.flags |= 2,
            R)) : (O.flags |= 1048576,
            R)
        }
        function v(O) {
            return r && O.alternate === null && (O.flags |= 2),
            O
        }
        function C(O, R, L, Q) {
            return R === null || R.tag !== 6 ? (R = $c(L, O.mode, Q),
            R.return = O,
            R) : (R = f(R, L),
            R.return = O,
            R)
        }
        function T(O, R, L, Q) {
            var ie = L.type;
            return ie === G ? H(O, R, L.props.children, Q, L.key) : R !== null && (R.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === xe && Kp(ie) === R.type) ? (Q = f(R, L.props),
            Q.ref = zi(O, R, L),
            Q.return = O,
            Q) : (Q = Ya(L.type, L.key, L.props, null, O.mode, Q),
            Q.ref = zi(O, R, L),
            Q.return = O,
            Q)
        }
        function I(O, R, L, Q) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = Hc(L, O.mode, Q),
            R.return = O,
            R) : (R = f(R, L.children || []),
            R.return = O,
            R)
        }
        function H(O, R, L, Q, ie) {
            return R === null || R.tag !== 7 ? (R = qr(L, O.mode, Q, ie),
            R.return = O,
            R) : (R = f(R, L),
            R.return = O,
            R)
        }
        function W(O, R, L) {
            if (typeof R == "string" && R !== "" || typeof R == "number")
                return R = $c("" + R, O.mode, L),
                R.return = O,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case B:
                    return L = Ya(R.type, R.key, R.props, null, O.mode, L),
                    L.ref = zi(O, null, R),
                    L.return = O,
                    L;
                case q:
                    return R = Hc(R, O.mode, L),
                    R.return = O,
                    R;
                case xe:
                    var Q = R._init;
                    return W(O, Q(R._payload), L)
                }
                if (yi(R) || se(R))
                    return R = qr(R, O.mode, L, null),
                    R.return = O,
                    R;
                Ta(O, R)
            }
            return null
        }
        function $(O, R, L, Q) {
            var ie = R !== null ? R.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number")
                return ie !== null ? null : C(O, R, "" + L, Q);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case B:
                    return L.key === ie ? T(O, R, L, Q) : null;
                case q:
                    return L.key === ie ? I(O, R, L, Q) : null;
                case xe:
                    return ie = L._init,
                    $(O, R, ie(L._payload), Q)
                }
                if (yi(L) || se(L))
                    return ie !== null ? null : H(O, R, L, Q, null);
                Ta(O, L)
            }
            return null
        }
        function Y(O, R, L, Q, ie) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number")
                return O = O.get(L) || null,
                C(R, O, "" + Q, ie);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                case B:
                    return O = O.get(Q.key === null ? L : Q.key) || null,
                    T(R, O, Q, ie);
                case q:
                    return O = O.get(Q.key === null ? L : Q.key) || null,
                    I(R, O, Q, ie);
                case xe:
                    var oe = Q._init;
                    return Y(O, R, L, oe(Q._payload), ie)
                }
                if (yi(Q) || se(Q))
                    return O = O.get(L) || null,
                    H(R, O, Q, ie, null);
                Ta(R, Q)
            }
            return null
        }
        function ee(O, R, L, Q) {
            for (var ie = null, oe = null, ae = R, ge = R = 0, ot = null; ae !== null && ge < L.length; ge++) {
                ae.index > ge ? (ot = ae,
                ae = null) : ot = ae.sibling;
                var Re = $(O, ae, L[ge], Q);
                if (Re === null) {
                    ae === null && (ae = ot);
                    break
                }
                r && ae && Re.alternate === null && s(O, ae),
                R = p(Re, R, ge),
                oe === null ? ie = Re : oe.sibling = Re,
                oe = Re,
                ae = ot
            }
            if (ge === L.length)
                return a(O, ae),
                Ue && Ir(O, ge),
                ie;
            if (ae === null) {
                for (; ge < L.length; ge++)
                    ae = W(O, L[ge], Q),
                    ae !== null && (R = p(ae, R, ge),
                    oe === null ? ie = ae : oe.sibling = ae,
                    oe = ae);
                return Ue && Ir(O, ge),
                ie
            }
            for (ae = c(O, ae); ge < L.length; ge++)
                ot = Y(ae, O, ge, L[ge], Q),
                ot !== null && (r && ot.alternate !== null && ae.delete(ot.key === null ? ge : ot.key),
                R = p(ot, R, ge),
                oe === null ? ie = ot : oe.sibling = ot,
                oe = ot);
            return r && ae.forEach(function(ur) {
                return s(O, ur)
            }),
            Ue && Ir(O, ge),
            ie
        }
        function re(O, R, L, Q) {
            var ie = se(L);
            if (typeof ie != "function")
                throw Error(n(150));
            if (L = ie.call(L),
            L == null)
                throw Error(n(151));
            for (var oe = ie = null, ae = R, ge = R = 0, ot = null, Re = L.next(); ae !== null && !Re.done; ge++,
            Re = L.next()) {
                ae.index > ge ? (ot = ae,
                ae = null) : ot = ae.sibling;
                var ur = $(O, ae, Re.value, Q);
                if (ur === null) {
                    ae === null && (ae = ot);
                    break
                }
                r && ae && ur.alternate === null && s(O, ae),
                R = p(ur, R, ge),
                oe === null ? ie = ur : oe.sibling = ur,
                oe = ur,
                ae = ot
            }
            if (Re.done)
                return a(O, ae),
                Ue && Ir(O, ge),
                ie;
            if (ae === null) {
                for (; !Re.done; ge++,
                Re = L.next())
                    Re = W(O, Re.value, Q),
                    Re !== null && (R = p(Re, R, ge),
                    oe === null ? ie = Re : oe.sibling = Re,
                    oe = Re);
                return Ue && Ir(O, ge),
                ie
            }
            for (ae = c(O, ae); !Re.done; ge++,
            Re = L.next())
                Re = Y(ae, O, ge, Re.value, Q),
                Re !== null && (r && Re.alternate !== null && ae.delete(Re.key === null ? ge : Re.key),
                R = p(Re, R, ge),
                oe === null ? ie = Re : oe.sibling = Re,
                oe = Re);
            return r && ae.forEach(function(pb) {
                return s(O, pb)
            }),
            Ue && Ir(O, ge),
            ie
        }
        function Ge(O, R, L, Q) {
            if (typeof L == "object" && L !== null && L.type === G && L.key === null && (L = L.props.children),
            typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case B:
                    e: {
                        for (var ie = L.key, oe = R; oe !== null; ) {
                            if (oe.key === ie) {
                                if (ie = L.type,
                                ie === G) {
                                    if (oe.tag === 7) {
                                        a(O, oe.sibling),
                                        R = f(oe, L.props.children),
                                        R.return = O,
                                        O = R;
                                        break e
                                    }
                                } else if (oe.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === xe && Kp(ie) === oe.type) {
                                    a(O, oe.sibling),
                                    R = f(oe, L.props),
                                    R.ref = zi(O, oe, L),
                                    R.return = O,
                                    O = R;
                                    break e
                                }
                                a(O, oe);
                                break
                            } else
                                s(O, oe);
                            oe = oe.sibling
                        }
                        L.type === G ? (R = qr(L.props.children, O.mode, Q, L.key),
                        R.return = O,
                        O = R) : (Q = Ya(L.type, L.key, L.props, null, O.mode, Q),
                        Q.ref = zi(O, R, L),
                        Q.return = O,
                        O = Q)
                    }
                    return v(O);
                case q:
                    e: {
                        for (oe = L.key; R !== null; ) {
                            if (R.key === oe)
                                if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                                    a(O, R.sibling),
                                    R = f(R, L.children || []),
                                    R.return = O,
                                    O = R;
                                    break e
                                } else {
                                    a(O, R);
                                    break
                                }
                            else
                                s(O, R);
                            R = R.sibling
                        }
                        R = Hc(L, O.mode, Q),
                        R.return = O,
                        O = R
                    }
                    return v(O);
                case xe:
                    return oe = L._init,
                    Ge(O, R, oe(L._payload), Q)
                }
                if (yi(L))
                    return ee(O, R, L, Q);
                if (se(L))
                    return re(O, R, L, Q);
                Ta(O, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L,
            R !== null && R.tag === 6 ? (a(O, R.sibling),
            R = f(R, L),
            R.return = O,
            O = R) : (a(O, R),
            R = $c(L, O.mode, Q),
            R.return = O,
            O = R),
            v(O)) : a(O, R)
        }
        return Ge
    }
    var Os = Qp(!0)
      , Gp = Qp(!1)
      , Pa = Jn(null)
      , _a = null
      , js = null
      , Zu = null;
    function ec() {
        Zu = js = _a = null
    }
    function tc(r) {
        var s = Pa.current;
        Ve(Pa),
        r._currentValue = s
    }
    function nc(r, s, a) {
        for (; r !== null; ) {
            var c = r.alternate;
            if ((r.childLanes & s) !== s ? (r.childLanes |= s,
            c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s),
            r === a)
                break;
            r = r.return
        }
    }
    function Ls(r, s) {
        _a = r,
        Zu = js = null,
        r = r.dependencies,
        r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (_t = !0),
        r.firstContext = null)
    }
    function Ht(r) {
        var s = r._currentValue;
        if (Zu !== r)
            if (r = {
                context: r,
                memoizedValue: s,
                next: null
            },
            js === null) {
                if (_a === null)
                    throw Error(n(308));
                js = r,
                _a.dependencies = {
                    lanes: 0,
                    firstContext: r
                }
            } else
                js = js.next = r;
        return s
    }
    var Fr = null;
    function rc(r) {
        Fr === null ? Fr = [r] : Fr.push(r)
    }
    function Yp(r, s, a, c) {
        var f = s.interleaved;
        return f === null ? (a.next = a,
        rc(s)) : (a.next = f.next,
        f.next = a),
        s.interleaved = a,
        Nn(r, c)
    }
    function Nn(r, s) {
        r.lanes |= s;
        var a = r.alternate;
        for (a !== null && (a.lanes |= s),
        a = r,
        r = r.return; r !== null; )
            r.childLanes |= s,
            a = r.alternate,
            a !== null && (a.childLanes |= s),
            a = r,
            r = r.return;
        return a.tag === 3 ? a.stateNode : null
    }
    var tr = !1;
    function sc(r) {
        r.updateQueue = {
            baseState: r.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Xp(r, s) {
        r = r.updateQueue,
        s.updateQueue === r && (s.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
        })
    }
    function On(r, s) {
        return {
            eventTime: r,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function nr(r, s, a) {
        var c = r.updateQueue;
        if (c === null)
            return null;
        if (c = c.shared,
        (Pe & 2) !== 0) {
            var f = c.pending;
            return f === null ? s.next = s : (s.next = f.next,
            f.next = s),
            c.pending = s,
            Nn(r, a)
        }
        return f = c.interleaved,
        f === null ? (s.next = s,
        rc(c)) : (s.next = f.next,
        f.next = s),
        c.interleaved = s,
        Nn(r, a)
    }
    function Ra(r, s, a) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (a & 4194240) !== 0)) {
            var c = s.lanes;
            c &= r.pendingLanes,
            a |= c,
            s.lanes = a,
            vu(r, a)
        }
    }
    function Jp(r, s) {
        var a = r.updateQueue
          , c = r.alternate;
        if (c !== null && (c = c.updateQueue,
        a === c)) {
            var f = null
              , p = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var v = {
                        eventTime: a.eventTime,
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    };
                    p === null ? f = p = v : p = p.next = v,
                    a = a.next
                } while (a !== null);
                p === null ? f = p = s : p = p.next = s
            } else
                f = p = s;
            a = {
                baseState: c.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: p,
                shared: c.shared,
                effects: c.effects
            },
            r.updateQueue = a;
            return
        }
        r = a.lastBaseUpdate,
        r === null ? a.firstBaseUpdate = s : r.next = s,
        a.lastBaseUpdate = s
    }
    function Aa(r, s, a, c) {
        var f = r.updateQueue;
        tr = !1;
        var p = f.firstBaseUpdate
          , v = f.lastBaseUpdate
          , C = f.shared.pending;
        if (C !== null) {
            f.shared.pending = null;
            var T = C
              , I = T.next;
            T.next = null,
            v === null ? p = I : v.next = I,
            v = T;
            var H = r.alternate;
            H !== null && (H = H.updateQueue,
            C = H.lastBaseUpdate,
            C !== v && (C === null ? H.firstBaseUpdate = I : C.next = I,
            H.lastBaseUpdate = T))
        }
        if (p !== null) {
            var W = f.baseState;
            v = 0,
            H = I = T = null,
            C = p;
            do {
                var $ = C.lane
                  , Y = C.eventTime;
                if ((c & $) === $) {
                    H !== null && (H = H.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    });
                    e: {
                        var ee = r
                          , re = C;
                        switch ($ = s,
                        Y = a,
                        re.tag) {
                        case 1:
                            if (ee = re.payload,
                            typeof ee == "function") {
                                W = ee.call(Y, W, $);
                                break e
                            }
                            W = ee;
                            break e;
                        case 3:
                            ee.flags = ee.flags & -65537 | 128;
                        case 0:
                            if (ee = re.payload,
                            $ = typeof ee == "function" ? ee.call(Y, W, $) : ee,
                            $ == null)
                                break e;
                            W = U({}, W, $);
                            break e;
                        case 2:
                            tr = !0
                        }
                    }
                    C.callback !== null && C.lane !== 0 && (r.flags |= 64,
                    $ = f.effects,
                    $ === null ? f.effects = [C] : $.push(C))
                } else
                    Y = {
                        eventTime: Y,
                        lane: $,
                        tag: C.tag,
                        payload: C.payload,
                        callback: C.callback,
                        next: null
                    },
                    H === null ? (I = H = Y,
                    T = W) : H = H.next = Y,
                    v |= $;
                if (C = C.next,
                C === null) {
                    if (C = f.shared.pending,
                    C === null)
                        break;
                    $ = C,
                    C = $.next,
                    $.next = null,
                    f.lastBaseUpdate = $,
                    f.shared.pending = null
                }
            } while (!0);
            if (H === null && (T = W),
            f.baseState = T,
            f.firstBaseUpdate = I,
            f.lastBaseUpdate = H,
            s = f.shared.interleaved,
            s !== null) {
                f = s;
                do
                    v |= f.lane,
                    f = f.next;
                while (f !== s)
            } else
                p === null && (f.shared.lanes = 0);
            Ur |= v,
            r.lanes = v,
            r.memoizedState = W
        }
    }
    function Zp(r, s, a) {
        if (r = s.effects,
        s.effects = null,
        r !== null)
            for (s = 0; s < r.length; s++) {
                var c = r[s]
                  , f = c.callback;
                if (f !== null) {
                    if (c.callback = null,
                    c = a,
                    typeof f != "function")
                        throw Error(n(191, f));
                    f.call(c)
                }
            }
    }
    var $i = {}
      , gn = Jn($i)
      , Hi = Jn($i)
      , qi = Jn($i);
    function Vr(r) {
        if (r === $i)
            throw Error(n(174));
        return r
    }
    function ic(r, s) {
        switch (Ie(qi, s),
        Ie(Hi, r),
        Ie(gn, $i),
        r = s.nodeType,
        r) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : ou(null, "");
            break;
        default:
            r = r === 8 ? s.parentNode : s,
            s = r.namespaceURI || null,
            r = r.tagName,
            s = ou(s, r)
        }
        Ve(gn),
        Ie(gn, s)
    }
    function Ds() {
        Ve(gn),
        Ve(Hi),
        Ve(qi)
    }
    function em(r) {
        Vr(qi.current);
        var s = Vr(gn.current)
          , a = ou(s, r.type);
        s !== a && (Ie(Hi, r),
        Ie(gn, a))
    }
    function oc(r) {
        Hi.current === r && (Ve(gn),
        Ve(Hi))
    }
    var ze = Jn(0);
    function Na(r) {
        for (var s = r; s !== null; ) {
            if (s.tag === 13) {
                var a = s.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === r)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === r)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var ac = [];
    function lc() {
        for (var r = 0; r < ac.length; r++)
            ac[r]._workInProgressVersionPrimary = null;
        ac.length = 0
    }
    var Oa = D.ReactCurrentDispatcher
      , uc = D.ReactCurrentBatchConfig
      , Br = 0
      , $e = null
      , tt = null
      , st = null
      , ja = !1
      , Wi = !1
      , Ki = 0
      , MS = 0;
    function gt() {
        throw Error(n(321))
    }
    function cc(r, s) {
        if (s === null)
            return !1;
        for (var a = 0; a < s.length && a < r.length; a++)
            if (!nn(r[a], s[a]))
                return !1;
        return !0
    }
    function dc(r, s, a, c, f, p) {
        if (Br = p,
        $e = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Oa.current = r === null || r.memoizedState === null ? BS : US,
        r = a(c, f),
        Wi) {
            p = 0;
            do {
                if (Wi = !1,
                Ki = 0,
                25 <= p)
                    throw Error(n(301));
                p += 1,
                st = tt = null,
                s.updateQueue = null,
                Oa.current = zS,
                r = a(c, f)
            } while (Wi)
        }
        if (Oa.current = Ma,
        s = tt !== null && tt.next !== null,
        Br = 0,
        st = tt = $e = null,
        ja = !1,
        s)
            throw Error(n(300));
        return r
    }
    function fc() {
        var r = Ki !== 0;
        return Ki = 0,
        r
    }
    function yn() {
        var r = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return st === null ? $e.memoizedState = st = r : st = st.next = r,
        st
    }
    function qt() {
        if (tt === null) {
            var r = $e.alternate;
            r = r !== null ? r.memoizedState : null
        } else
            r = tt.next;
        var s = st === null ? $e.memoizedState : st.next;
        if (s !== null)
            st = s,
            tt = r;
        else {
            if (r === null)
                throw Error(n(310));
            tt = r,
            r = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            },
            st === null ? $e.memoizedState = st = r : st = st.next = r
        }
        return st
    }
    function Qi(r, s) {
        return typeof s == "function" ? s(r) : s
    }
    function hc(r) {
        var s = qt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = tt
          , f = c.baseQueue
          , p = a.pending;
        if (p !== null) {
            if (f !== null) {
                var v = f.next;
                f.next = p.next,
                p.next = v
            }
            c.baseQueue = f = p,
            a.pending = null
        }
        if (f !== null) {
            p = f.next,
            c = c.baseState;
            var C = v = null
              , T = null
              , I = p;
            do {
                var H = I.lane;
                if ((Br & H) === H)
                    T !== null && (T = T.next = {
                        lane: 0,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    }),
                    c = I.hasEagerState ? I.eagerState : r(c, I.action);
                else {
                    var W = {
                        lane: H,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    };
                    T === null ? (C = T = W,
                    v = c) : T = T.next = W,
                    $e.lanes |= H,
                    Ur |= H
                }
                I = I.next
            } while (I !== null && I !== p);
            T === null ? v = c : T.next = C,
            nn(c, s.memoizedState) || (_t = !0),
            s.memoizedState = c,
            s.baseState = v,
            s.baseQueue = T,
            a.lastRenderedState = c
        }
        if (r = a.interleaved,
        r !== null) {
            f = r;
            do
                p = f.lane,
                $e.lanes |= p,
                Ur |= p,
                f = f.next;
            while (f !== r)
        } else
            f === null && (a.lanes = 0);
        return [s.memoizedState, a.dispatch]
    }
    function pc(r) {
        var s = qt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = a.dispatch
          , f = a.pending
          , p = s.memoizedState;
        if (f !== null) {
            a.pending = null;
            var v = f = f.next;
            do
                p = r(p, v.action),
                v = v.next;
            while (v !== f);
            nn(p, s.memoizedState) || (_t = !0),
            s.memoizedState = p,
            s.baseQueue === null && (s.baseState = p),
            a.lastRenderedState = p
        }
        return [p, c]
    }
    function tm() {}
    function nm(r, s) {
        var a = $e
          , c = qt()
          , f = s()
          , p = !nn(c.memoizedState, f);
        if (p && (c.memoizedState = f,
        _t = !0),
        c = c.queue,
        mc(im.bind(null, a, c, r), [r]),
        c.getSnapshot !== s || p || st !== null && st.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Gi(9, sm.bind(null, a, c, f, s), void 0, null),
            it === null)
                throw Error(n(349));
            (Br & 30) !== 0 || rm(a, s, f)
        }
        return f
    }
    function rm(r, s, a) {
        r.flags |= 16384,
        r = {
            getSnapshot: s,
            value: a
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.stores = [r]) : (a = s.stores,
        a === null ? s.stores = [r] : a.push(r))
    }
    function sm(r, s, a, c) {
        s.value = a,
        s.getSnapshot = c,
        om(s) && am(r)
    }
    function im(r, s, a) {
        return a(function() {
            om(s) && am(r)
        })
    }
    function om(r) {
        var s = r.getSnapshot;
        r = r.value;
        try {
            var a = s();
            return !nn(r, a)
        } catch {
            return !0
        }
    }
    function am(r) {
        var s = Nn(r, 1);
        s !== null && ln(s, r, 1, -1)
    }
    function lm(r) {
        var s = yn();
        return typeof r == "function" && (r = r()),
        s.memoizedState = s.baseState = r,
        r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qi,
            lastRenderedState: r
        },
        s.queue = r,
        r = r.dispatch = VS.bind(null, $e, r),
        [s.memoizedState, r]
    }
    function Gi(r, s, a, c) {
        return r = {
            tag: r,
            create: s,
            destroy: a,
            deps: c,
            next: null
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.lastEffect = r.next = r) : (a = s.lastEffect,
        a === null ? s.lastEffect = r.next = r : (c = a.next,
        a.next = r,
        r.next = c,
        s.lastEffect = r)),
        r
    }
    function um() {
        return qt().memoizedState
    }
    function La(r, s, a, c) {
        var f = yn();
        $e.flags |= r,
        f.memoizedState = Gi(1 | s, a, void 0, c === void 0 ? null : c)
    }
    function Da(r, s, a, c) {
        var f = qt();
        c = c === void 0 ? null : c;
        var p = void 0;
        if (tt !== null) {
            var v = tt.memoizedState;
            if (p = v.destroy,
            c !== null && cc(c, v.deps)) {
                f.memoizedState = Gi(s, a, p, c);
                return
            }
        }
        $e.flags |= r,
        f.memoizedState = Gi(1 | s, a, p, c)
    }
    function cm(r, s) {
        return La(8390656, 8, r, s)
    }
    function mc(r, s) {
        return Da(2048, 8, r, s)
    }
    function dm(r, s) {
        return Da(4, 2, r, s)
    }
    function fm(r, s) {
        return Da(4, 4, r, s)
    }
    function hm(r, s) {
        if (typeof s == "function")
            return r = r(),
            s(r),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return r = r(),
            s.current = r,
            function() {
                s.current = null
            }
    }
    function pm(r, s, a) {
        return a = a != null ? a.concat([r]) : null,
        Da(4, 4, hm.bind(null, s, r), a)
    }
    function gc() {}
    function mm(r, s) {
        var a = qt();
        s = s === void 0 ? null : s;
        var c = a.memoizedState;
        return c !== null && s !== null && cc(s, c[1]) ? c[0] : (a.memoizedState = [r, s],
        r)
    }
    function gm(r, s) {
        var a = qt();
        s = s === void 0 ? null : s;
        var c = a.memoizedState;
        return c !== null && s !== null && cc(s, c[1]) ? c[0] : (r = r(),
        a.memoizedState = [r, s],
        r)
    }
    function ym(r, s, a) {
        return (Br & 21) === 0 ? (r.baseState && (r.baseState = !1,
        _t = !0),
        r.memoizedState = a) : (nn(a, s) || (a = Kh(),
        $e.lanes |= a,
        Ur |= a,
        r.baseState = !0),
        s)
    }
    function IS(r, s) {
        var a = je;
        je = a !== 0 && 4 > a ? a : 4,
        r(!0);
        var c = uc.transition;
        uc.transition = {};
        try {
            r(!1),
            s()
        } finally {
            je = a,
            uc.transition = c
        }
    }
    function vm() {
        return qt().memoizedState
    }
    function FS(r, s, a) {
        var c = or(r);
        if (a = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        wm(r))
            xm(s, a);
        else if (a = Yp(r, s, a, c),
        a !== null) {
            var f = Et();
            ln(a, r, c, f),
            Sm(a, s, c)
        }
    }
    function VS(r, s, a) {
        var c = or(r)
          , f = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (wm(r))
            xm(s, f);
        else {
            var p = r.alternate;
            if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer,
            p !== null))
                try {
                    var v = s.lastRenderedState
                      , C = p(v, a);
                    if (f.hasEagerState = !0,
                    f.eagerState = C,
                    nn(C, v)) {
                        var T = s.interleaved;
                        T === null ? (f.next = f,
                        rc(s)) : (f.next = T.next,
                        T.next = f),
                        s.interleaved = f;
                        return
                    }
                } catch {} finally {}
            a = Yp(r, s, f, c),
            a !== null && (f = Et(),
            ln(a, r, c, f),
            Sm(a, s, c))
        }
    }
    function wm(r) {
        var s = r.alternate;
        return r === $e || s !== null && s === $e
    }
    function xm(r, s) {
        Wi = ja = !0;
        var a = r.pending;
        a === null ? s.next = s : (s.next = a.next,
        a.next = s),
        r.pending = s
    }
    function Sm(r, s, a) {
        if ((a & 4194240) !== 0) {
            var c = s.lanes;
            c &= r.pendingLanes,
            a |= c,
            s.lanes = a,
            vu(r, a)
        }
    }
    var Ma = {
        readContext: Ht,
        useCallback: gt,
        useContext: gt,
        useEffect: gt,
        useImperativeHandle: gt,
        useInsertionEffect: gt,
        useLayoutEffect: gt,
        useMemo: gt,
        useReducer: gt,
        useRef: gt,
        useState: gt,
        useDebugValue: gt,
        useDeferredValue: gt,
        useTransition: gt,
        useMutableSource: gt,
        useSyncExternalStore: gt,
        useId: gt,
        unstable_isNewReconciler: !1
    }
      , BS = {
        readContext: Ht,
        useCallback: function(r, s) {
            return yn().memoizedState = [r, s === void 0 ? null : s],
            r
        },
        useContext: Ht,
        useEffect: cm,
        useImperativeHandle: function(r, s, a) {
            return a = a != null ? a.concat([r]) : null,
            La(4194308, 4, hm.bind(null, s, r), a)
        },
        useLayoutEffect: function(r, s) {
            return La(4194308, 4, r, s)
        },
        useInsertionEffect: function(r, s) {
            return La(4, 2, r, s)
        },
        useMemo: function(r, s) {
            var a = yn();
            return s = s === void 0 ? null : s,
            r = r(),
            a.memoizedState = [r, s],
            r
        },
        useReducer: function(r, s, a) {
            var c = yn();
            return s = a !== void 0 ? a(s) : s,
            c.memoizedState = c.baseState = s,
            r = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: r,
                lastRenderedState: s
            },
            c.queue = r,
            r = r.dispatch = FS.bind(null, $e, r),
            [c.memoizedState, r]
        },
        useRef: function(r) {
            var s = yn();
            return r = {
                current: r
            },
            s.memoizedState = r
        },
        useState: lm,
        useDebugValue: gc,
        useDeferredValue: function(r) {
            return yn().memoizedState = r
        },
        useTransition: function() {
            var r = lm(!1)
              , s = r[0];
            return r = IS.bind(null, r[1]),
            yn().memoizedState = r,
            [s, r]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(r, s, a) {
            var c = $e
              , f = yn();
            if (Ue) {
                if (a === void 0)
                    throw Error(n(407));
                a = a()
            } else {
                if (a = s(),
                it === null)
                    throw Error(n(349));
                (Br & 30) !== 0 || rm(c, s, a)
            }
            f.memoizedState = a;
            var p = {
                value: a,
                getSnapshot: s
            };
            return f.queue = p,
            cm(im.bind(null, c, p, r), [r]),
            c.flags |= 2048,
            Gi(9, sm.bind(null, c, p, a, s), void 0, null),
            a
        },
        useId: function() {
            var r = yn()
              , s = it.identifierPrefix;
            if (Ue) {
                var a = An
                  , c = Rn;
                a = (c & ~(1 << 32 - tn(c) - 1)).toString(32) + a,
                s = ":" + s + "R" + a,
                a = Ki++,
                0 < a && (s += "H" + a.toString(32)),
                s += ":"
            } else
                a = MS++,
                s = ":" + s + "r" + a.toString(32) + ":";
            return r.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , US = {
        readContext: Ht,
        useCallback: mm,
        useContext: Ht,
        useEffect: mc,
        useImperativeHandle: pm,
        useInsertionEffect: dm,
        useLayoutEffect: fm,
        useMemo: gm,
        useReducer: hc,
        useRef: um,
        useState: function() {
            return hc(Qi)
        },
        useDebugValue: gc,
        useDeferredValue: function(r) {
            var s = qt();
            return ym(s, tt.memoizedState, r)
        },
        useTransition: function() {
            var r = hc(Qi)[0]
              , s = qt().memoizedState;
            return [r, s]
        },
        useMutableSource: tm,
        useSyncExternalStore: nm,
        useId: vm,
        unstable_isNewReconciler: !1
    }
      , zS = {
        readContext: Ht,
        useCallback: mm,
        useContext: Ht,
        useEffect: mc,
        useImperativeHandle: pm,
        useInsertionEffect: dm,
        useLayoutEffect: fm,
        useMemo: gm,
        useReducer: pc,
        useRef: um,
        useState: function() {
            return pc(Qi)
        },
        useDebugValue: gc,
        useDeferredValue: function(r) {
            var s = qt();
            return tt === null ? s.memoizedState = r : ym(s, tt.memoizedState, r)
        },
        useTransition: function() {
            var r = pc(Qi)[0]
              , s = qt().memoizedState;
            return [r, s]
        },
        useMutableSource: tm,
        useSyncExternalStore: nm,
        useId: vm,
        unstable_isNewReconciler: !1
    };
    function sn(r, s) {
        if (r && r.defaultProps) {
            s = U({}, s),
            r = r.defaultProps;
            for (var a in r)
                s[a] === void 0 && (s[a] = r[a]);
            return s
        }
        return s
    }
    function yc(r, s, a, c) {
        s = r.memoizedState,
        a = a(c, s),
        a = a == null ? s : U({}, s, a),
        r.memoizedState = a,
        r.lanes === 0 && (r.updateQueue.baseState = a)
    }
    var Ia = {
        isMounted: function(r) {
            return (r = r._reactInternals) ? jr(r) === r : !1
        },
        enqueueSetState: function(r, s, a) {
            r = r._reactInternals;
            var c = Et()
              , f = or(r)
              , p = On(c, f);
            p.payload = s,
            a != null && (p.callback = a),
            s = nr(r, p, f),
            s !== null && (ln(s, r, f, c),
            Ra(s, r, f))
        },
        enqueueReplaceState: function(r, s, a) {
            r = r._reactInternals;
            var c = Et()
              , f = or(r)
              , p = On(c, f);
            p.tag = 1,
            p.payload = s,
            a != null && (p.callback = a),
            s = nr(r, p, f),
            s !== null && (ln(s, r, f, c),
            Ra(s, r, f))
        },
        enqueueForceUpdate: function(r, s) {
            r = r._reactInternals;
            var a = Et()
              , c = or(r)
              , f = On(a, c);
            f.tag = 2,
            s != null && (f.callback = s),
            s = nr(r, f, c),
            s !== null && (ln(s, r, c, a),
            Ra(s, r, c))
        }
    };
    function bm(r, s, a, c, f, p, v) {
        return r = r.stateNode,
        typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(c, p, v) : s.prototype && s.prototype.isPureReactComponent ? !Di(a, c) || !Di(f, p) : !0
    }
    function km(r, s, a) {
        var c = !1
          , f = Zn
          , p = s.contextType;
        return typeof p == "object" && p !== null ? p = Ht(p) : (f = Pt(s) ? Dr : mt.current,
        c = s.contextTypes,
        p = (c = c != null) ? _s(r, f) : Zn),
        s = new s(a,p),
        r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = Ia,
        r.stateNode = s,
        s._reactInternals = r,
        c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = f,
        r.__reactInternalMemoizedMaskedChildContext = p),
        s
    }
    function Em(r, s, a, c) {
        r = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, c),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, c),
        s.state !== r && Ia.enqueueReplaceState(s, s.state, null)
    }
    function vc(r, s, a, c) {
        var f = r.stateNode;
        f.props = a,
        f.state = r.memoizedState,
        f.refs = {},
        sc(r);
        var p = s.contextType;
        typeof p == "object" && p !== null ? f.context = Ht(p) : (p = Pt(s) ? Dr : mt.current,
        f.context = _s(r, p)),
        f.state = r.memoizedState,
        p = s.getDerivedStateFromProps,
        typeof p == "function" && (yc(r, s, p, a),
        f.state = r.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (s = f.state,
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
        s !== f.state && Ia.enqueueReplaceState(f, f.state, null),
        Aa(r, a, f, c),
        f.state = r.memoizedState),
        typeof f.componentDidMount == "function" && (r.flags |= 4194308)
    }
    function Ms(r, s) {
        try {
            var a = ""
              , c = s;
            do
                a += le(c),
                c = c.return;
            while (c);
            var f = a
        } catch (p) {
            f = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: r,
            source: s,
            stack: f,
            digest: null
        }
    }
    function wc(r, s, a) {
        return {
            value: r,
            source: null,
            stack: a ?? null,
            digest: s ?? null
        }
    }
    function xc(r, s) {
        try {
            console.error(s.value)
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    var $S = typeof WeakMap == "function" ? WeakMap : Map;
    function Cm(r, s, a) {
        a = On(-1, a),
        a.tag = 3,
        a.payload = {
            element: null
        };
        var c = s.value;
        return a.callback = function() {
            Ha || (Ha = !0,
            Dc = c),
            xc(r, s)
        }
        ,
        a
    }
    function Tm(r, s, a) {
        a = On(-1, a),
        a.tag = 3;
        var c = r.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = s.value;
            a.payload = function() {
                return c(f)
            }
            ,
            a.callback = function() {
                xc(r, s)
            }
        }
        var p = r.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (a.callback = function() {
            xc(r, s),
            typeof c != "function" && (sr === null ? sr = new Set([this]) : sr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        ),
        a
    }
    function Pm(r, s, a) {
        var c = r.pingCache;
        if (c === null) {
            c = r.pingCache = new $S;
            var f = new Set;
            c.set(s, f)
        } else
            f = c.get(s),
            f === void 0 && (f = new Set,
            c.set(s, f));
        f.has(a) || (f.add(a),
        r = rb.bind(null, r, s, a),
        s.then(r, r))
    }
    function _m(r) {
        do {
            var s;
            if ((s = r.tag === 13) && (s = r.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return r;
            r = r.return
        } while (r !== null);
        return null
    }
    function Rm(r, s, a, c, f) {
        return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128,
        a.flags |= 131072,
        a.flags &= -52805,
        a.tag === 1 && (a.alternate === null ? a.tag = 17 : (s = On(-1, 1),
        s.tag = 2,
        nr(a, s, 1))),
        a.lanes |= 1),
        r) : (r.flags |= 65536,
        r.lanes = f,
        r)
    }
    var HS = D.ReactCurrentOwner
      , _t = !1;
    function kt(r, s, a, c) {
        s.child = r === null ? Gp(s, null, a, c) : Os(s, r.child, a, c)
    }
    function Am(r, s, a, c, f) {
        a = a.render;
        var p = s.ref;
        return Ls(s, f),
        c = dc(r, s, a, c, p, f),
        a = fc(),
        r !== null && !_t ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~f,
        jn(r, s, f)) : (Ue && a && Qu(s),
        s.flags |= 1,
        kt(r, s, c, f),
        s.child)
    }
    function Nm(r, s, a, c, f) {
        if (r === null) {
            var p = a.type;
            return typeof p == "function" && !zc(p) && p.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (s.tag = 15,
            s.type = p,
            Om(r, s, p, c, f)) : (r = Ya(a.type, null, c, s, s.mode, f),
            r.ref = s.ref,
            r.return = s,
            s.child = r)
        }
        if (p = r.child,
        (r.lanes & f) === 0) {
            var v = p.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Di,
            a(v, c) && r.ref === s.ref)
                return jn(r, s, f)
        }
        return s.flags |= 1,
        r = lr(p, c),
        r.ref = s.ref,
        r.return = s,
        s.child = r
    }
    function Om(r, s, a, c, f) {
        if (r !== null) {
            var p = r.memoizedProps;
            if (Di(p, c) && r.ref === s.ref)
                if (_t = !1,
                s.pendingProps = c = p,
                (r.lanes & f) !== 0)
                    (r.flags & 131072) !== 0 && (_t = !0);
                else
                    return s.lanes = r.lanes,
                    jn(r, s, f)
        }
        return Sc(r, s, a, c, f)
    }
    function jm(r, s, a) {
        var c = s.pendingProps
          , f = c.children
          , p = r !== null ? r.memoizedState : null;
        if (c.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ie(Fs, Vt),
                Vt |= a;
            else {
                if ((a & 1073741824) === 0)
                    return r = p !== null ? p.baseLanes | a : a,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: r,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Ie(Fs, Vt),
                    Vt |= r,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                c = p !== null ? p.baseLanes : a,
                Ie(Fs, Vt),
                Vt |= c
            }
        else
            p !== null ? (c = p.baseLanes | a,
            s.memoizedState = null) : c = a,
            Ie(Fs, Vt),
            Vt |= c;
        return kt(r, s, f, a),
        s.child
    }
    function Lm(r, s) {
        var a = s.ref;
        (r === null && a !== null || r !== null && r.ref !== a) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function Sc(r, s, a, c, f) {
        var p = Pt(a) ? Dr : mt.current;
        return p = _s(s, p),
        Ls(s, f),
        a = dc(r, s, a, c, p, f),
        c = fc(),
        r !== null && !_t ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~f,
        jn(r, s, f)) : (Ue && c && Qu(s),
        s.flags |= 1,
        kt(r, s, a, f),
        s.child)
    }
    function Dm(r, s, a, c, f) {
        if (Pt(a)) {
            var p = !0;
            Sa(s)
        } else
            p = !1;
        if (Ls(s, f),
        s.stateNode === null)
            Va(r, s),
            km(s, a, c),
            vc(s, a, c, f),
            c = !0;
        else if (r === null) {
            var v = s.stateNode
              , C = s.memoizedProps;
            v.props = C;
            var T = v.context
              , I = a.contextType;
            typeof I == "object" && I !== null ? I = Ht(I) : (I = Pt(a) ? Dr : mt.current,
            I = _s(s, I));
            var H = a.getDerivedStateFromProps
              , W = typeof H == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            W || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (C !== c || T !== I) && Em(s, v, c, I),
            tr = !1;
            var $ = s.memoizedState;
            v.state = $,
            Aa(s, c, v, f),
            T = s.memoizedState,
            C !== c || $ !== T || Tt.current || tr ? (typeof H == "function" && (yc(s, a, H, c),
            T = s.memoizedState),
            (C = tr || bm(s, a, C, c, $, T, I)) ? (W || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(),
            typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
            typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = c,
            s.memoizedState = T),
            v.props = c,
            v.state = T,
            v.context = I,
            c = C) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            c = !1)
        } else {
            v = s.stateNode,
            Xp(r, s),
            C = s.memoizedProps,
            I = s.type === s.elementType ? C : sn(s.type, C),
            v.props = I,
            W = s.pendingProps,
            $ = v.context,
            T = a.contextType,
            typeof T == "object" && T !== null ? T = Ht(T) : (T = Pt(a) ? Dr : mt.current,
            T = _s(s, T));
            var Y = a.getDerivedStateFromProps;
            (H = typeof Y == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (C !== W || $ !== T) && Em(s, v, c, T),
            tr = !1,
            $ = s.memoizedState,
            v.state = $,
            Aa(s, c, v, f);
            var ee = s.memoizedState;
            C !== W || $ !== ee || Tt.current || tr ? (typeof Y == "function" && (yc(s, a, Y, c),
            ee = s.memoizedState),
            (I = tr || bm(s, a, I, c, $, ee, T) || !1) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(c, ee, T),
            typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(c, ee, T)),
            typeof v.componentDidUpdate == "function" && (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || C === r.memoizedProps && $ === r.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || C === r.memoizedProps && $ === r.memoizedState || (s.flags |= 1024),
            s.memoizedProps = c,
            s.memoizedState = ee),
            v.props = c,
            v.state = ee,
            v.context = T,
            c = I) : (typeof v.componentDidUpdate != "function" || C === r.memoizedProps && $ === r.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || C === r.memoizedProps && $ === r.memoizedState || (s.flags |= 1024),
            c = !1)
        }
        return bc(r, s, a, c, p, f)
    }
    function bc(r, s, a, c, f, p) {
        Lm(r, s);
        var v = (s.flags & 128) !== 0;
        if (!c && !v)
            return f && Bp(s, a, !1),
            jn(r, s, p);
        c = s.stateNode,
        HS.current = s;
        var C = v && typeof a.getDerivedStateFromError != "function" ? null : c.render();
        return s.flags |= 1,
        r !== null && v ? (s.child = Os(s, r.child, null, p),
        s.child = Os(s, null, C, p)) : kt(r, s, C, p),
        s.memoizedState = c.state,
        f && Bp(s, a, !0),
        s.child
    }
    function Mm(r) {
        var s = r.stateNode;
        s.pendingContext ? Fp(r, s.pendingContext, s.pendingContext !== s.context) : s.context && Fp(r, s.context, !1),
        ic(r, s.containerInfo)
    }
    function Im(r, s, a, c, f) {
        return Ns(),
        Ju(f),
        s.flags |= 256,
        kt(r, s, a, c),
        s.child
    }
    var kc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ec(r) {
        return {
            baseLanes: r,
            cachePool: null,
            transitions: null
        }
    }
    function Fm(r, s, a) {
        var c = s.pendingProps, f = ze.current, p = !1, v = (s.flags & 128) !== 0, C;
        if ((C = v) || (C = r !== null && r.memoizedState === null ? !1 : (f & 2) !== 0),
        C ? (p = !0,
        s.flags &= -129) : (r === null || r.memoizedState !== null) && (f |= 1),
        Ie(ze, f & 1),
        r === null)
            return Xu(s),
            r = s.memoizedState,
            r !== null && (r = r.dehydrated,
            r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (v = c.children,
            r = c.fallback,
            p ? (c = s.mode,
            p = s.child,
            v = {
                mode: "hidden",
                children: v
            },
            (c & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = v) : p = Xa(v, c, 0, null),
            r = qr(r, c, a, null),
            p.return = s,
            r.return = s,
            p.sibling = r,
            s.child = p,
            s.child.memoizedState = Ec(a),
            s.memoizedState = kc,
            r) : Cc(s, v));
        if (f = r.memoizedState,
        f !== null && (C = f.dehydrated,
        C !== null))
            return qS(r, s, v, c, C, f, a);
        if (p) {
            p = c.fallback,
            v = s.mode,
            f = r.child,
            C = f.sibling;
            var T = {
                mode: "hidden",
                children: c.children
            };
            return (v & 1) === 0 && s.child !== f ? (c = s.child,
            c.childLanes = 0,
            c.pendingProps = T,
            s.deletions = null) : (c = lr(f, T),
            c.subtreeFlags = f.subtreeFlags & 14680064),
            C !== null ? p = lr(C, p) : (p = qr(p, v, a, null),
            p.flags |= 2),
            p.return = s,
            c.return = s,
            c.sibling = p,
            s.child = c,
            c = p,
            p = s.child,
            v = r.child.memoizedState,
            v = v === null ? Ec(a) : {
                baseLanes: v.baseLanes | a,
                cachePool: null,
                transitions: v.transitions
            },
            p.memoizedState = v,
            p.childLanes = r.childLanes & ~a,
            s.memoizedState = kc,
            c
        }
        return p = r.child,
        r = p.sibling,
        c = lr(p, {
            mode: "visible",
            children: c.children
        }),
        (s.mode & 1) === 0 && (c.lanes = a),
        c.return = s,
        c.sibling = null,
        r !== null && (a = s.deletions,
        a === null ? (s.deletions = [r],
        s.flags |= 16) : a.push(r)),
        s.child = c,
        s.memoizedState = null,
        c
    }
    function Cc(r, s) {
        return s = Xa({
            mode: "visible",
            children: s
        }, r.mode, 0, null),
        s.return = r,
        r.child = s
    }
    function Fa(r, s, a, c) {
        return c !== null && Ju(c),
        Os(s, r.child, null, a),
        r = Cc(s, s.pendingProps.children),
        r.flags |= 2,
        s.memoizedState = null,
        r
    }
    function qS(r, s, a, c, f, p, v) {
        if (a)
            return s.flags & 256 ? (s.flags &= -257,
            c = wc(Error(n(422))),
            Fa(r, s, v, c)) : s.memoizedState !== null ? (s.child = r.child,
            s.flags |= 128,
            null) : (p = c.fallback,
            f = s.mode,
            c = Xa({
                mode: "visible",
                children: c.children
            }, f, 0, null),
            p = qr(p, f, v, null),
            p.flags |= 2,
            c.return = s,
            p.return = s,
            c.sibling = p,
            s.child = c,
            (s.mode & 1) !== 0 && Os(s, r.child, null, v),
            s.child.memoizedState = Ec(v),
            s.memoizedState = kc,
            p);
        if ((s.mode & 1) === 0)
            return Fa(r, s, v, null);
        if (f.data === "$!") {
            if (c = f.nextSibling && f.nextSibling.dataset,
            c)
                var C = c.dgst;
            return c = C,
            p = Error(n(419)),
            c = wc(p, c, void 0),
            Fa(r, s, v, c)
        }
        if (C = (v & r.childLanes) !== 0,
        _t || C) {
            if (c = it,
            c !== null) {
                switch (v & -v) {
                case 4:
                    f = 2;
                    break;
                case 16:
                    f = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    f = 32;
                    break;
                case 536870912:
                    f = 268435456;
                    break;
                default:
                    f = 0
                }
                f = (f & (c.suspendedLanes | v)) !== 0 ? 0 : f,
                f !== 0 && f !== p.retryLane && (p.retryLane = f,
                Nn(r, f),
                ln(c, r, f, -1))
            }
            return Uc(),
            c = wc(Error(n(421))),
            Fa(r, s, v, c)
        }
        return f.data === "$?" ? (s.flags |= 128,
        s.child = r.child,
        s = sb.bind(null, r),
        f._reactRetry = s,
        null) : (r = p.treeContext,
        Ft = Xn(f.nextSibling),
        It = s,
        Ue = !0,
        rn = null,
        r !== null && (zt[$t++] = Rn,
        zt[$t++] = An,
        zt[$t++] = Mr,
        Rn = r.id,
        An = r.overflow,
        Mr = s),
        s = Cc(s, c.children),
        s.flags |= 4096,
        s)
    }
    function Vm(r, s, a) {
        r.lanes |= s;
        var c = r.alternate;
        c !== null && (c.lanes |= s),
        nc(r.return, s, a)
    }
    function Tc(r, s, a, c, f) {
        var p = r.memoizedState;
        p === null ? r.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: a,
            tailMode: f
        } : (p.isBackwards = s,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = c,
        p.tail = a,
        p.tailMode = f)
    }
    function Bm(r, s, a) {
        var c = s.pendingProps
          , f = c.revealOrder
          , p = c.tail;
        if (kt(r, s, c.children, a),
        c = ze.current,
        (c & 2) !== 0)
            c = c & 1 | 2,
            s.flags |= 128;
        else {
            if (r !== null && (r.flags & 128) !== 0)
                e: for (r = s.child; r !== null; ) {
                    if (r.tag === 13)
                        r.memoizedState !== null && Vm(r, a, s);
                    else if (r.tag === 19)
                        Vm(r, a, s);
                    else if (r.child !== null) {
                        r.child.return = r,
                        r = r.child;
                        continue
                    }
                    if (r === s)
                        break e;
                    for (; r.sibling === null; ) {
                        if (r.return === null || r.return === s)
                            break e;
                        r = r.return
                    }
                    r.sibling.return = r.return,
                    r = r.sibling
                }
            c &= 1
        }
        if (Ie(ze, c),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (f) {
            case "forwards":
                for (a = s.child,
                f = null; a !== null; )
                    r = a.alternate,
                    r !== null && Na(r) === null && (f = a),
                    a = a.sibling;
                a = f,
                a === null ? (f = s.child,
                s.child = null) : (f = a.sibling,
                a.sibling = null),
                Tc(s, !1, f, a, p);
                break;
            case "backwards":
                for (a = null,
                f = s.child,
                s.child = null; f !== null; ) {
                    if (r = f.alternate,
                    r !== null && Na(r) === null) {
                        s.child = f;
                        break
                    }
                    r = f.sibling,
                    f.sibling = a,
                    a = f,
                    f = r
                }
                Tc(s, !0, a, null, p);
                break;
            case "together":
                Tc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function Va(r, s) {
        (s.mode & 1) === 0 && r !== null && (r.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function jn(r, s, a) {
        if (r !== null && (s.dependencies = r.dependencies),
        Ur |= s.lanes,
        (a & s.childLanes) === 0)
            return null;
        if (r !== null && s.child !== r.child)
            throw Error(n(153));
        if (s.child !== null) {
            for (r = s.child,
            a = lr(r, r.pendingProps),
            s.child = a,
            a.return = s; r.sibling !== null; )
                r = r.sibling,
                a = a.sibling = lr(r, r.pendingProps),
                a.return = s;
            a.sibling = null
        }
        return s.child
    }
    function WS(r, s, a) {
        switch (s.tag) {
        case 3:
            Mm(s),
            Ns();
            break;
        case 5:
            em(s);
            break;
        case 1:
            Pt(s.type) && Sa(s);
            break;
        case 4:
            ic(s, s.stateNode.containerInfo);
            break;
        case 10:
            var c = s.type._context
              , f = s.memoizedProps.value;
            Ie(Pa, c._currentValue),
            c._currentValue = f;
            break;
        case 13:
            if (c = s.memoizedState,
            c !== null)
                return c.dehydrated !== null ? (Ie(ze, ze.current & 1),
                s.flags |= 128,
                null) : (a & s.child.childLanes) !== 0 ? Fm(r, s, a) : (Ie(ze, ze.current & 1),
                r = jn(r, s, a),
                r !== null ? r.sibling : null);
            Ie(ze, ze.current & 1);
            break;
        case 19:
            if (c = (a & s.childLanes) !== 0,
            (r.flags & 128) !== 0) {
                if (c)
                    return Bm(r, s, a);
                s.flags |= 128
            }
            if (f = s.memoizedState,
            f !== null && (f.rendering = null,
            f.tail = null,
            f.lastEffect = null),
            Ie(ze, ze.current),
            c)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            jm(r, s, a)
        }
        return jn(r, s, a)
    }
    var Um, Pc, zm, $m;
    Um = function(r, s) {
        for (var a = s.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
                r.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === s)
                break;
            for (; a.sibling === null; ) {
                if (a.return === null || a.return === s)
                    return;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
    }
    ,
    Pc = function() {}
    ,
    zm = function(r, s, a, c) {
        var f = r.memoizedProps;
        if (f !== c) {
            r = s.stateNode,
            Vr(gn.current);
            var p = null;
            switch (a) {
            case "input":
                f = Hn(r, f),
                c = Hn(r, c),
                p = [];
                break;
            case "select":
                f = U({}, f, {
                    value: void 0
                }),
                c = U({}, c, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                f = iu(r, f),
                c = iu(r, c),
                p = [];
                break;
            default:
                typeof f.onClick != "function" && typeof c.onClick == "function" && (r.onclick = va)
            }
            au(a, c);
            var v;
            a = null;
            for (I in f)
                if (!c.hasOwnProperty(I) && f.hasOwnProperty(I) && f[I] != null)
                    if (I === "style") {
                        var C = f[I];
                        for (v in C)
                            C.hasOwnProperty(v) && (a || (a = {}),
                            a[v] = "")
                    } else
                        I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (o.hasOwnProperty(I) ? p || (p = []) : (p = p || []).push(I, null));
            for (I in c) {
                var T = c[I];
                if (C = f != null ? f[I] : void 0,
                c.hasOwnProperty(I) && T !== C && (T != null || C != null))
                    if (I === "style")
                        if (C) {
                            for (v in C)
                                !C.hasOwnProperty(v) || T && T.hasOwnProperty(v) || (a || (a = {}),
                                a[v] = "");
                            for (v in T)
                                T.hasOwnProperty(v) && C[v] !== T[v] && (a || (a = {}),
                                a[v] = T[v])
                        } else
                            a || (p || (p = []),
                            p.push(I, a)),
                            a = T;
                    else
                        I === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0,
                        C = C ? C.__html : void 0,
                        T != null && C !== T && (p = p || []).push(I, T)) : I === "children" ? typeof T != "string" && typeof T != "number" || (p = p || []).push(I, "" + T) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (o.hasOwnProperty(I) ? (T != null && I === "onScroll" && Fe("scroll", r),
                        p || C === T || (p = [])) : (p = p || []).push(I, T))
            }
            a && (p = p || []).push("style", a);
            var I = p;
            (s.updateQueue = I) && (s.flags |= 4)
        }
    }
    ,
    $m = function(r, s, a, c) {
        a !== c && (s.flags |= 4)
    }
    ;
    function Yi(r, s) {
        if (!Ue)
            switch (r.tailMode) {
            case "hidden":
                s = r.tail;
                for (var a = null; s !== null; )
                    s.alternate !== null && (a = s),
                    s = s.sibling;
                a === null ? r.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = r.tail;
                for (var c = null; a !== null; )
                    a.alternate !== null && (c = a),
                    a = a.sibling;
                c === null ? s || r.tail === null ? r.tail = null : r.tail.sibling = null : c.sibling = null
            }
    }
    function yt(r) {
        var s = r.alternate !== null && r.alternate.child === r.child
          , a = 0
          , c = 0;
        if (s)
            for (var f = r.child; f !== null; )
                a |= f.lanes | f.childLanes,
                c |= f.subtreeFlags & 14680064,
                c |= f.flags & 14680064,
                f.return = r,
                f = f.sibling;
        else
            for (f = r.child; f !== null; )
                a |= f.lanes | f.childLanes,
                c |= f.subtreeFlags,
                c |= f.flags,
                f.return = r,
                f = f.sibling;
        return r.subtreeFlags |= c,
        r.childLanes = a,
        s
    }
    function KS(r, s, a) {
        var c = s.pendingProps;
        switch (Gu(s),
        s.tag) {
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
            return yt(s),
            null;
        case 1:
            return Pt(s.type) && xa(),
            yt(s),
            null;
        case 3:
            return c = s.stateNode,
            Ds(),
            Ve(Tt),
            Ve(mt),
            lc(),
            c.pendingContext && (c.context = c.pendingContext,
            c.pendingContext = null),
            (r === null || r.child === null) && (Ca(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            rn !== null && (Fc(rn),
            rn = null))),
            Pc(r, s),
            yt(s),
            null;
        case 5:
            oc(s);
            var f = Vr(qi.current);
            if (a = s.type,
            r !== null && s.stateNode != null)
                zm(r, s, a, c, f),
                r.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!c) {
                    if (s.stateNode === null)
                        throw Error(n(166));
                    return yt(s),
                    null
                }
                if (r = Vr(gn.current),
                Ca(s)) {
                    c = s.stateNode,
                    a = s.type;
                    var p = s.memoizedProps;
                    switch (c[mn] = s,
                    c[Bi] = p,
                    r = (s.mode & 1) !== 0,
                    a) {
                    case "dialog":
                        Fe("cancel", c),
                        Fe("close", c);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Fe("load", c);
                        break;
                    case "video":
                    case "audio":
                        for (f = 0; f < Ii.length; f++)
                            Fe(Ii[f], c);
                        break;
                    case "source":
                        Fe("error", c);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Fe("error", c),
                        Fe("load", c);
                        break;
                    case "details":
                        Fe("toggle", c);
                        break;
                    case "input":
                        kh(c, p),
                        Fe("invalid", c);
                        break;
                    case "select":
                        c._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Fe("invalid", c);
                        break;
                    case "textarea":
                        Th(c, p),
                        Fe("invalid", c)
                    }
                    au(a, p),
                    f = null;
                    for (var v in p)
                        if (p.hasOwnProperty(v)) {
                            var C = p[v];
                            v === "children" ? typeof C == "string" ? c.textContent !== C && (p.suppressHydrationWarning !== !0 && ya(c.textContent, C, r),
                            f = ["children", C]) : typeof C == "number" && c.textContent !== "" + C && (p.suppressHydrationWarning !== !0 && ya(c.textContent, C, r),
                            f = ["children", "" + C]) : o.hasOwnProperty(v) && C != null && v === "onScroll" && Fe("scroll", c)
                        }
                    switch (a) {
                    case "input":
                        Tn(c),
                        Ch(c, p, !0);
                        break;
                    case "textarea":
                        Tn(c),
                        _h(c);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (c.onclick = va)
                    }
                    c = f,
                    s.updateQueue = c,
                    c !== null && (s.flags |= 4)
                } else {
                    v = f.nodeType === 9 ? f : f.ownerDocument,
                    r === "http://www.w3.org/1999/xhtml" && (r = Rh(a)),
                    r === "http://www.w3.org/1999/xhtml" ? a === "script" ? (r = v.createElement("div"),
                    r.innerHTML = "<script><\/script>",
                    r = r.removeChild(r.firstChild)) : typeof c.is == "string" ? r = v.createElement(a, {
                        is: c.is
                    }) : (r = v.createElement(a),
                    a === "select" && (v = r,
                    c.multiple ? v.multiple = !0 : c.size && (v.size = c.size))) : r = v.createElementNS(r, a),
                    r[mn] = s,
                    r[Bi] = c,
                    Um(r, s, !1, !1),
                    s.stateNode = r;
                    e: {
                        switch (v = lu(a, c),
                        a) {
                        case "dialog":
                            Fe("cancel", r),
                            Fe("close", r),
                            f = c;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Fe("load", r),
                            f = c;
                            break;
                        case "video":
                        case "audio":
                            for (f = 0; f < Ii.length; f++)
                                Fe(Ii[f], r);
                            f = c;
                            break;
                        case "source":
                            Fe("error", r),
                            f = c;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Fe("error", r),
                            Fe("load", r),
                            f = c;
                            break;
                        case "details":
                            Fe("toggle", r),
                            f = c;
                            break;
                        case "input":
                            kh(r, c),
                            f = Hn(r, c),
                            Fe("invalid", r);
                            break;
                        case "option":
                            f = c;
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!c.multiple
                            },
                            f = U({}, c, {
                                value: void 0
                            }),
                            Fe("invalid", r);
                            break;
                        case "textarea":
                            Th(r, c),
                            f = iu(r, c),
                            Fe("invalid", r);
                            break;
                        default:
                            f = c
                        }
                        au(a, f),
                        C = f;
                        for (p in C)
                            if (C.hasOwnProperty(p)) {
                                var T = C[p];
                                p === "style" ? Oh(r, T) : p === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0,
                                T != null && Ah(r, T)) : p === "children" ? typeof T == "string" ? (a !== "textarea" || T !== "") && vi(r, T) : typeof T == "number" && vi(r, "" + T) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (o.hasOwnProperty(p) ? T != null && p === "onScroll" && Fe("scroll", r) : T != null && j(r, p, T, v))
                            }
                        switch (a) {
                        case "input":
                            Tn(r),
                            Ch(r, c, !1);
                            break;
                        case "textarea":
                            Tn(r),
                            _h(r);
                            break;
                        case "option":
                            c.value != null && r.setAttribute("value", "" + _e(c.value));
                            break;
                        case "select":
                            r.multiple = !!c.multiple,
                            p = c.value,
                            p != null ? gs(r, !!c.multiple, p, !1) : c.defaultValue != null && gs(r, !!c.multiple, c.defaultValue, !0);
                            break;
                        default:
                            typeof f.onClick == "function" && (r.onclick = va)
                        }
                        switch (a) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c = !!c.autoFocus;
                            break e;
                        case "img":
                            c = !0;
                            break e;
                        default:
                            c = !1
                        }
                    }
                    c && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return yt(s),
            null;
        case 6:
            if (r && s.stateNode != null)
                $m(r, s, r.memoizedProps, c);
            else {
                if (typeof c != "string" && s.stateNode === null)
                    throw Error(n(166));
                if (a = Vr(qi.current),
                Vr(gn.current),
                Ca(s)) {
                    if (c = s.stateNode,
                    a = s.memoizedProps,
                    c[mn] = s,
                    (p = c.nodeValue !== a) && (r = It,
                    r !== null))
                        switch (r.tag) {
                        case 3:
                            ya(c.nodeValue, a, (r.mode & 1) !== 0);
                            break;
                        case 5:
                            r.memoizedProps.suppressHydrationWarning !== !0 && ya(c.nodeValue, a, (r.mode & 1) !== 0)
                        }
                    p && (s.flags |= 4)
                } else
                    c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c),
                    c[mn] = s,
                    s.stateNode = c
            }
            return yt(s),
            null;
        case 13:
            if (Ve(ze),
            c = s.memoizedState,
            r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
                if (Ue && Ft !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    Wp(),
                    Ns(),
                    s.flags |= 98560,
                    p = !1;
                else if (p = Ca(s),
                c !== null && c.dehydrated !== null) {
                    if (r === null) {
                        if (!p)
                            throw Error(n(318));
                        if (p = s.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(n(317));
                        p[mn] = s
                    } else
                        Ns(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    yt(s),
                    p = !1
                } else
                    rn !== null && (Fc(rn),
                    rn = null),
                    p = !0;
                if (!p)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = a,
            s) : (c = c !== null,
            c !== (r !== null && r.memoizedState !== null) && c && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (r === null || (ze.current & 1) !== 0 ? nt === 0 && (nt = 3) : Uc())),
            s.updateQueue !== null && (s.flags |= 4),
            yt(s),
            null);
        case 4:
            return Ds(),
            Pc(r, s),
            r === null && Fi(s.stateNode.containerInfo),
            yt(s),
            null;
        case 10:
            return tc(s.type._context),
            yt(s),
            null;
        case 17:
            return Pt(s.type) && xa(),
            yt(s),
            null;
        case 19:
            if (Ve(ze),
            p = s.memoizedState,
            p === null)
                return yt(s),
                null;
            if (c = (s.flags & 128) !== 0,
            v = p.rendering,
            v === null)
                if (c)
                    Yi(p, !1);
                else {
                    if (nt !== 0 || r !== null && (r.flags & 128) !== 0)
                        for (r = s.child; r !== null; ) {
                            if (v = Na(r),
                            v !== null) {
                                for (s.flags |= 128,
                                Yi(p, !1),
                                c = v.updateQueue,
                                c !== null && (s.updateQueue = c,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                c = a,
                                a = s.child; a !== null; )
                                    p = a,
                                    r = c,
                                    p.flags &= 14680066,
                                    v = p.alternate,
                                    v === null ? (p.childLanes = 0,
                                    p.lanes = r,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = v.childLanes,
                                    p.lanes = v.lanes,
                                    p.child = v.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = v.memoizedProps,
                                    p.memoizedState = v.memoizedState,
                                    p.updateQueue = v.updateQueue,
                                    p.type = v.type,
                                    r = v.dependencies,
                                    p.dependencies = r === null ? null : {
                                        lanes: r.lanes,
                                        firstContext: r.firstContext
                                    }),
                                    a = a.sibling;
                                return Ie(ze, ze.current & 1 | 2),
                                s.child
                            }
                            r = r.sibling
                        }
                    p.tail !== null && Qe() > Vs && (s.flags |= 128,
                    c = !0,
                    Yi(p, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!c)
                    if (r = Na(v),
                    r !== null) {
                        if (s.flags |= 128,
                        c = !0,
                        a = r.updateQueue,
                        a !== null && (s.updateQueue = a,
                        s.flags |= 4),
                        Yi(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !v.alternate && !Ue)
                            return yt(s),
                            null
                    } else
                        2 * Qe() - p.renderingStartTime > Vs && a !== 1073741824 && (s.flags |= 128,
                        c = !0,
                        Yi(p, !1),
                        s.lanes = 4194304);
                p.isBackwards ? (v.sibling = s.child,
                s.child = v) : (a = p.last,
                a !== null ? a.sibling = v : s.child = v,
                p.last = v)
            }
            return p.tail !== null ? (s = p.tail,
            p.rendering = s,
            p.tail = s.sibling,
            p.renderingStartTime = Qe(),
            s.sibling = null,
            a = ze.current,
            Ie(ze, c ? a & 1 | 2 : a & 1),
            s) : (yt(s),
            null);
        case 22:
        case 23:
            return Bc(),
            c = s.memoizedState !== null,
            r !== null && r.memoizedState !== null !== c && (s.flags |= 8192),
            c && (s.mode & 1) !== 0 ? (Vt & 1073741824) !== 0 && (yt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : yt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(n(156, s.tag))
    }
    function QS(r, s) {
        switch (Gu(s),
        s.tag) {
        case 1:
            return Pt(s.type) && xa(),
            r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 3:
            return Ds(),
            Ve(Tt),
            Ve(mt),
            lc(),
            r = s.flags,
            (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 5:
            return oc(s),
            null;
        case 13:
            if (Ve(ze),
            r = s.memoizedState,
            r !== null && r.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(n(340));
                Ns()
            }
            return r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 19:
            return Ve(ze),
            null;
        case 4:
            return Ds(),
            null;
        case 10:
            return tc(s.type._context),
            null;
        case 22:
        case 23:
            return Bc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ba = !1
      , vt = !1
      , GS = typeof WeakSet == "function" ? WeakSet : Set
      , Z = null;
    function Is(r, s) {
        var a = r.ref;
        if (a !== null)
            if (typeof a == "function")
                try {
                    a(null)
                } catch (c) {
                    qe(r, s, c)
                }
            else
                a.current = null
    }
    function _c(r, s, a) {
        try {
            a()
        } catch (c) {
            qe(r, s, c)
        }
    }
    var Hm = !1;
    function YS(r, s) {
        if (Bu = oa,
        r = bp(),
        Ou(r)) {
            if ("selectionStart"in r)
                var a = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                };
            else
                e: {
                    a = (a = r.ownerDocument) && a.defaultView || window;
                    var c = a.getSelection && a.getSelection();
                    if (c && c.rangeCount !== 0) {
                        a = c.anchorNode;
                        var f = c.anchorOffset
                          , p = c.focusNode;
                        c = c.focusOffset;
                        try {
                            a.nodeType,
                            p.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var v = 0
                          , C = -1
                          , T = -1
                          , I = 0
                          , H = 0
                          , W = r
                          , $ = null;
                        t: for (; ; ) {
                            for (var Y; W !== a || f !== 0 && W.nodeType !== 3 || (C = v + f),
                            W !== p || c !== 0 && W.nodeType !== 3 || (T = v + c),
                            W.nodeType === 3 && (v += W.nodeValue.length),
                            (Y = W.firstChild) !== null; )
                                $ = W,
                                W = Y;
                            for (; ; ) {
                                if (W === r)
                                    break t;
                                if ($ === a && ++I === f && (C = v),
                                $ === p && ++H === c && (T = v),
                                (Y = W.nextSibling) !== null)
                                    break;
                                W = $,
                                $ = W.parentNode
                            }
                            W = Y
                        }
                        a = C === -1 || T === -1 ? null : {
                            start: C,
                            end: T
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Uu = {
            focusedElem: r,
            selectionRange: a
        },
        oa = !1,
        Z = s; Z !== null; )
            if (s = Z,
            r = s.child,
            (s.subtreeFlags & 1028) !== 0 && r !== null)
                r.return = s,
                Z = r;
            else
                for (; Z !== null; ) {
                    s = Z;
                    try {
                        var ee = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ee !== null) {
                                    var re = ee.memoizedProps
                                      , Ge = ee.memoizedState
                                      , O = s.stateNode
                                      , R = O.getSnapshotBeforeUpdate(s.elementType === s.type ? re : sn(s.type, re), Ge);
                                    O.__reactInternalSnapshotBeforeUpdate = R
                                }
                                break;
                            case 3:
                                var L = s.stateNode.containerInfo;
                                L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(n(163))
                            }
                    } catch (Q) {
                        qe(s, s.return, Q)
                    }
                    if (r = s.sibling,
                    r !== null) {
                        r.return = s.return,
                        Z = r;
                        break
                    }
                    Z = s.return
                }
        return ee = Hm,
        Hm = !1,
        ee
    }
    function Xi(r, s, a) {
        var c = s.updateQueue;
        if (c = c !== null ? c.lastEffect : null,
        c !== null) {
            var f = c = c.next;
            do {
                if ((f.tag & r) === r) {
                    var p = f.destroy;
                    f.destroy = void 0,
                    p !== void 0 && _c(s, a, p)
                }
                f = f.next
            } while (f !== c)
        }
    }
    function Ua(r, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var a = s = s.next;
            do {
                if ((a.tag & r) === r) {
                    var c = a.create;
                    a.destroy = c()
                }
                a = a.next
            } while (a !== s)
        }
    }
    function Rc(r) {
        var s = r.ref;
        if (s !== null) {
            var a = r.stateNode;
            switch (r.tag) {
            case 5:
                r = a;
                break;
            default:
                r = a
            }
            typeof s == "function" ? s(r) : s.current = r
        }
    }
    function qm(r) {
        var s = r.alternate;
        s !== null && (r.alternate = null,
        qm(s)),
        r.child = null,
        r.deletions = null,
        r.sibling = null,
        r.tag === 5 && (s = r.stateNode,
        s !== null && (delete s[mn],
        delete s[Bi],
        delete s[qu],
        delete s[OS],
        delete s[jS])),
        r.stateNode = null,
        r.return = null,
        r.dependencies = null,
        r.memoizedProps = null,
        r.memoizedState = null,
        r.pendingProps = null,
        r.stateNode = null,
        r.updateQueue = null
    }
    function Wm(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4
    }
    function Km(r) {
        e: for (; ; ) {
            for (; r.sibling === null; ) {
                if (r.return === null || Wm(r.return))
                    return null;
                r = r.return
            }
            for (r.sibling.return = r.return,
            r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
                if (r.flags & 2 || r.child === null || r.tag === 4)
                    continue e;
                r.child.return = r,
                r = r.child
            }
            if (!(r.flags & 2))
                return r.stateNode
        }
    }
    function Ac(r, s, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            s ? a.nodeType === 8 ? a.parentNode.insertBefore(r, s) : a.insertBefore(r, s) : (a.nodeType === 8 ? (s = a.parentNode,
            s.insertBefore(r, a)) : (s = a,
            s.appendChild(r)),
            a = a._reactRootContainer,
            a != null || s.onclick !== null || (s.onclick = va));
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Ac(r, s, a),
            r = r.sibling; r !== null; )
                Ac(r, s, a),
                r = r.sibling
    }
    function Nc(r, s, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            s ? a.insertBefore(r, s) : a.appendChild(r);
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Nc(r, s, a),
            r = r.sibling; r !== null; )
                Nc(r, s, a),
                r = r.sibling
    }
    var lt = null
      , on = !1;
    function rr(r, s, a) {
        for (a = a.child; a !== null; )
            Qm(r, s, a),
            a = a.sibling
    }
    function Qm(r, s, a) {
        if (pn && typeof pn.onCommitFiberUnmount == "function")
            try {
                pn.onCommitFiberUnmount(ea, a)
            } catch {}
        switch (a.tag) {
        case 5:
            vt || Is(a, s);
        case 6:
            var c = lt
              , f = on;
            lt = null,
            rr(r, s, a),
            lt = c,
            on = f,
            lt !== null && (on ? (r = lt,
            a = a.stateNode,
            r.nodeType === 8 ? r.parentNode.removeChild(a) : r.removeChild(a)) : lt.removeChild(a.stateNode));
            break;
        case 18:
            lt !== null && (on ? (r = lt,
            a = a.stateNode,
            r.nodeType === 8 ? Hu(r.parentNode, a) : r.nodeType === 1 && Hu(r, a),
            Ri(r)) : Hu(lt, a.stateNode));
            break;
        case 4:
            c = lt,
            f = on,
            lt = a.stateNode.containerInfo,
            on = !0,
            rr(r, s, a),
            lt = c,
            on = f;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!vt && (c = a.updateQueue,
            c !== null && (c = c.lastEffect,
            c !== null))) {
                f = c = c.next;
                do {
                    var p = f
                      , v = p.destroy;
                    p = p.tag,
                    v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && _c(a, s, v),
                    f = f.next
                } while (f !== c)
            }
            rr(r, s, a);
            break;
        case 1:
            if (!vt && (Is(a, s),
            c = a.stateNode,
            typeof c.componentWillUnmount == "function"))
                try {
                    c.props = a.memoizedProps,
                    c.state = a.memoizedState,
                    c.componentWillUnmount()
                } catch (C) {
                    qe(a, s, C)
                }
            rr(r, s, a);
            break;
        case 21:
            rr(r, s, a);
            break;
        case 22:
            a.mode & 1 ? (vt = (c = vt) || a.memoizedState !== null,
            rr(r, s, a),
            vt = c) : rr(r, s, a);
            break;
        default:
            rr(r, s, a)
        }
    }
    function Gm(r) {
        var s = r.updateQueue;
        if (s !== null) {
            r.updateQueue = null;
            var a = r.stateNode;
            a === null && (a = r.stateNode = new GS),
            s.forEach(function(c) {
                var f = ib.bind(null, r, c);
                a.has(c) || (a.add(c),
                c.then(f, f))
            })
        }
    }
    function an(r, s) {
        var a = s.deletions;
        if (a !== null)
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                try {
                    var p = r
                      , v = s
                      , C = v;
                    e: for (; C !== null; ) {
                        switch (C.tag) {
                        case 5:
                            lt = C.stateNode,
                            on = !1;
                            break e;
                        case 3:
                            lt = C.stateNode.containerInfo,
                            on = !0;
                            break e;
                        case 4:
                            lt = C.stateNode.containerInfo,
                            on = !0;
                            break e
                        }
                        C = C.return
                    }
                    if (lt === null)
                        throw Error(n(160));
                    Qm(p, v, f),
                    lt = null,
                    on = !1;
                    var T = f.alternate;
                    T !== null && (T.return = null),
                    f.return = null
                } catch (I) {
                    qe(f, s, I)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Ym(s, r),
                s = s.sibling
    }
    function Ym(r, s) {
        var a = r.alternate
          , c = r.flags;
        switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (an(s, r),
            vn(r),
            c & 4) {
                try {
                    Xi(3, r, r.return),
                    Ua(3, r)
                } catch (re) {
                    qe(r, r.return, re)
                }
                try {
                    Xi(5, r, r.return)
                } catch (re) {
                    qe(r, r.return, re)
                }
            }
            break;
        case 1:
            an(s, r),
            vn(r),
            c & 512 && a !== null && Is(a, a.return);
            break;
        case 5:
            if (an(s, r),
            vn(r),
            c & 512 && a !== null && Is(a, a.return),
            r.flags & 32) {
                var f = r.stateNode;
                try {
                    vi(f, "")
                } catch (re) {
                    qe(r, r.return, re)
                }
            }
            if (c & 4 && (f = r.stateNode,
            f != null)) {
                var p = r.memoizedProps
                  , v = a !== null ? a.memoizedProps : p
                  , C = r.type
                  , T = r.updateQueue;
                if (r.updateQueue = null,
                T !== null)
                    try {
                        C === "input" && p.type === "radio" && p.name != null && Eh(f, p),
                        lu(C, v);
                        var I = lu(C, p);
                        for (v = 0; v < T.length; v += 2) {
                            var H = T[v]
                              , W = T[v + 1];
                            H === "style" ? Oh(f, W) : H === "dangerouslySetInnerHTML" ? Ah(f, W) : H === "children" ? vi(f, W) : j(f, H, W, I)
                        }
                        switch (C) {
                        case "input":
                            ru(f, p);
                            break;
                        case "textarea":
                            Ph(f, p);
                            break;
                        case "select":
                            var $ = f._wrapperState.wasMultiple;
                            f._wrapperState.wasMultiple = !!p.multiple;
                            var Y = p.value;
                            Y != null ? gs(f, !!p.multiple, Y, !1) : $ !== !!p.multiple && (p.defaultValue != null ? gs(f, !!p.multiple, p.defaultValue, !0) : gs(f, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        f[Bi] = p
                    } catch (re) {
                        qe(r, r.return, re)
                    }
            }
            break;
        case 6:
            if (an(s, r),
            vn(r),
            c & 4) {
                if (r.stateNode === null)
                    throw Error(n(162));
                f = r.stateNode,
                p = r.memoizedProps;
                try {
                    f.nodeValue = p
                } catch (re) {
                    qe(r, r.return, re)
                }
            }
            break;
        case 3:
            if (an(s, r),
            vn(r),
            c & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Ri(s.containerInfo)
                } catch (re) {
                    qe(r, r.return, re)
                }
            break;
        case 4:
            an(s, r),
            vn(r);
            break;
        case 13:
            an(s, r),
            vn(r),
            f = r.child,
            f.flags & 8192 && (p = f.memoizedState !== null,
            f.stateNode.isHidden = p,
            !p || f.alternate !== null && f.alternate.memoizedState !== null || (Lc = Qe())),
            c & 4 && Gm(r);
            break;
        case 22:
            if (H = a !== null && a.memoizedState !== null,
            r.mode & 1 ? (vt = (I = vt) || H,
            an(s, r),
            vt = I) : an(s, r),
            vn(r),
            c & 8192) {
                if (I = r.memoizedState !== null,
                (r.stateNode.isHidden = I) && !H && (r.mode & 1) !== 0)
                    for (Z = r,
                    H = r.child; H !== null; ) {
                        for (W = Z = H; Z !== null; ) {
                            switch ($ = Z,
                            Y = $.child,
                            $.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Xi(4, $, $.return);
                                break;
                            case 1:
                                Is($, $.return);
                                var ee = $.stateNode;
                                if (typeof ee.componentWillUnmount == "function") {
                                    c = $,
                                    a = $.return;
                                    try {
                                        s = c,
                                        ee.props = s.memoizedProps,
                                        ee.state = s.memoizedState,
                                        ee.componentWillUnmount()
                                    } catch (re) {
                                        qe(c, a, re)
                                    }
                                }
                                break;
                            case 5:
                                Is($, $.return);
                                break;
                            case 22:
                                if ($.memoizedState !== null) {
                                    Zm(W);
                                    continue
                                }
                            }
                            Y !== null ? (Y.return = $,
                            Z = Y) : Zm(W)
                        }
                        H = H.sibling
                    }
                e: for (H = null,
                W = r; ; ) {
                    if (W.tag === 5) {
                        if (H === null) {
                            H = W;
                            try {
                                f = W.stateNode,
                                I ? (p = f.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (C = W.stateNode,
                                T = W.memoizedProps.style,
                                v = T != null && T.hasOwnProperty("display") ? T.display : null,
                                C.style.display = Nh("display", v))
                            } catch (re) {
                                qe(r, r.return, re)
                            }
                        }
                    } else if (W.tag === 6) {
                        if (H === null)
                            try {
                                W.stateNode.nodeValue = I ? "" : W.memoizedProps
                            } catch (re) {
                                qe(r, r.return, re)
                            }
                    } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === r) && W.child !== null) {
                        W.child.return = W,
                        W = W.child;
                        continue
                    }
                    if (W === r)
                        break e;
                    for (; W.sibling === null; ) {
                        if (W.return === null || W.return === r)
                            break e;
                        H === W && (H = null),
                        W = W.return
                    }
                    H === W && (H = null),
                    W.sibling.return = W.return,
                    W = W.sibling
                }
            }
            break;
        case 19:
            an(s, r),
            vn(r),
            c & 4 && Gm(r);
            break;
        case 21:
            break;
        default:
            an(s, r),
            vn(r)
        }
    }
    function vn(r) {
        var s = r.flags;
        if (s & 2) {
            try {
                e: {
                    for (var a = r.return; a !== null; ) {
                        if (Wm(a)) {
                            var c = a;
                            break e
                        }
                        a = a.return
                    }
                    throw Error(n(160))
                }
                switch (c.tag) {
                case 5:
                    var f = c.stateNode;
                    c.flags & 32 && (vi(f, ""),
                    c.flags &= -33);
                    var p = Km(r);
                    Nc(r, p, f);
                    break;
                case 3:
                case 4:
                    var v = c.stateNode.containerInfo
                      , C = Km(r);
                    Ac(r, C, v);
                    break;
                default:
                    throw Error(n(161))
                }
            } catch (T) {
                qe(r, r.return, T)
            }
            r.flags &= -3
        }
        s & 4096 && (r.flags &= -4097)
    }
    function XS(r, s, a) {
        Z = r,
        Xm(r)
    }
    function Xm(r, s, a) {
        for (var c = (r.mode & 1) !== 0; Z !== null; ) {
            var f = Z
              , p = f.child;
            if (f.tag === 22 && c) {
                var v = f.memoizedState !== null || Ba;
                if (!v) {
                    var C = f.alternate
                      , T = C !== null && C.memoizedState !== null || vt;
                    C = Ba;
                    var I = vt;
                    if (Ba = v,
                    (vt = T) && !I)
                        for (Z = f; Z !== null; )
                            v = Z,
                            T = v.child,
                            v.tag === 22 && v.memoizedState !== null ? eg(f) : T !== null ? (T.return = v,
                            Z = T) : eg(f);
                    for (; p !== null; )
                        Z = p,
                        Xm(p),
                        p = p.sibling;
                    Z = f,
                    Ba = C,
                    vt = I
                }
                Jm(r)
            } else
                (f.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = f,
                Z = p) : Jm(r)
        }
    }
    function Jm(r) {
        for (; Z !== null; ) {
            var s = Z;
            if ((s.flags & 8772) !== 0) {
                var a = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            vt || Ua(5, s);
                            break;
                        case 1:
                            var c = s.stateNode;
                            if (s.flags & 4 && !vt)
                                if (a === null)
                                    c.componentDidMount();
                                else {
                                    var f = s.elementType === s.type ? a.memoizedProps : sn(s.type, a.memoizedProps);
                                    c.componentDidUpdate(f, a.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && Zp(s, p, c);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (a = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        a = s.child.stateNode;
                                        break;
                                    case 1:
                                        a = s.child.stateNode
                                    }
                                Zp(s, v, a)
                            }
                            break;
                        case 5:
                            var C = s.stateNode;
                            if (a === null && s.flags & 4) {
                                a = C;
                                var T = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    T.autoFocus && a.focus();
                                    break;
                                case "img":
                                    T.src && (a.src = T.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var I = s.alternate;
                                if (I !== null) {
                                    var H = I.memoizedState;
                                    if (H !== null) {
                                        var W = H.dehydrated;
                                        W !== null && Ri(W)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(n(163))
                        }
                    vt || s.flags & 512 && Rc(s)
                } catch ($) {
                    qe(s, s.return, $)
                }
            }
            if (s === r) {
                Z = null;
                break
            }
            if (a = s.sibling,
            a !== null) {
                a.return = s.return,
                Z = a;
                break
            }
            Z = s.return
        }
    }
    function Zm(r) {
        for (; Z !== null; ) {
            var s = Z;
            if (s === r) {
                Z = null;
                break
            }
            var a = s.sibling;
            if (a !== null) {
                a.return = s.return,
                Z = a;
                break
            }
            Z = s.return
        }
    }
    function eg(r) {
        for (; Z !== null; ) {
            var s = Z;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var a = s.return;
                    try {
                        Ua(4, s)
                    } catch (T) {
                        qe(s, a, T)
                    }
                    break;
                case 1:
                    var c = s.stateNode;
                    if (typeof c.componentDidMount == "function") {
                        var f = s.return;
                        try {
                            c.componentDidMount()
                        } catch (T) {
                            qe(s, f, T)
                        }
                    }
                    var p = s.return;
                    try {
                        Rc(s)
                    } catch (T) {
                        qe(s, p, T)
                    }
                    break;
                case 5:
                    var v = s.return;
                    try {
                        Rc(s)
                    } catch (T) {
                        qe(s, v, T)
                    }
                }
            } catch (T) {
                qe(s, s.return, T)
            }
            if (s === r) {
                Z = null;
                break
            }
            var C = s.sibling;
            if (C !== null) {
                C.return = s.return,
                Z = C;
                break
            }
            Z = s.return
        }
    }
    var JS = Math.ceil
      , za = D.ReactCurrentDispatcher
      , Oc = D.ReactCurrentOwner
      , Wt = D.ReactCurrentBatchConfig
      , Pe = 0
      , it = null
      , Je = null
      , ut = 0
      , Vt = 0
      , Fs = Jn(0)
      , nt = 0
      , Ji = null
      , Ur = 0
      , $a = 0
      , jc = 0
      , Zi = null
      , Rt = null
      , Lc = 0
      , Vs = 1 / 0
      , Ln = null
      , Ha = !1
      , Dc = null
      , sr = null
      , qa = !1
      , ir = null
      , Wa = 0
      , eo = 0
      , Mc = null
      , Ka = -1
      , Qa = 0;
    function Et() {
        return (Pe & 6) !== 0 ? Qe() : Ka !== -1 ? Ka : Ka = Qe()
    }
    function or(r) {
        return (r.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && ut !== 0 ? ut & -ut : DS.transition !== null ? (Qa === 0 && (Qa = Kh()),
        Qa) : (r = je,
        r !== 0 || (r = window.event,
        r = r === void 0 ? 16 : np(r.type)),
        r)
    }
    function ln(r, s, a, c) {
        if (50 < eo)
            throw eo = 0,
            Mc = null,
            Error(n(185));
        Ei(r, a, c),
        ((Pe & 2) === 0 || r !== it) && (r === it && ((Pe & 2) === 0 && ($a |= a),
        nt === 4 && ar(r, ut)),
        At(r, c),
        a === 1 && Pe === 0 && (s.mode & 1) === 0 && (Vs = Qe() + 500,
        ba && er()))
    }
    function At(r, s) {
        var a = r.callbackNode;
        D1(r, s);
        var c = ra(r, r === it ? ut : 0);
        if (c === 0)
            a !== null && Hh(a),
            r.callbackNode = null,
            r.callbackPriority = 0;
        else if (s = c & -c,
        r.callbackPriority !== s) {
            if (a != null && Hh(a),
            s === 1)
                r.tag === 0 ? LS(ng.bind(null, r)) : Up(ng.bind(null, r)),
                AS(function() {
                    (Pe & 6) === 0 && er()
                }),
                a = null;
            else {
                switch (Qh(c)) {
                case 1:
                    a = mu;
                    break;
                case 4:
                    a = qh;
                    break;
                case 16:
                    a = Zo;
                    break;
                case 536870912:
                    a = Wh;
                    break;
                default:
                    a = Zo
                }
                a = cg(a, tg.bind(null, r))
            }
            r.callbackPriority = s,
            r.callbackNode = a
        }
    }
    function tg(r, s) {
        if (Ka = -1,
        Qa = 0,
        (Pe & 6) !== 0)
            throw Error(n(327));
        var a = r.callbackNode;
        if (Bs() && r.callbackNode !== a)
            return null;
        var c = ra(r, r === it ? ut : 0);
        if (c === 0)
            return null;
        if ((c & 30) !== 0 || (c & r.expiredLanes) !== 0 || s)
            s = Ga(r, c);
        else {
            s = c;
            var f = Pe;
            Pe |= 2;
            var p = sg();
            (it !== r || ut !== s) && (Ln = null,
            Vs = Qe() + 500,
            $r(r, s));
            do
                try {
                    tb();
                    break
                } catch (C) {
                    rg(r, C)
                }
            while (!0);
            ec(),
            za.current = p,
            Pe = f,
            Je !== null ? s = 0 : (it = null,
            ut = 0,
            s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (f = gu(r),
            f !== 0 && (c = f,
            s = Ic(r, f))),
            s === 1)
                throw a = Ji,
                $r(r, 0),
                ar(r, c),
                At(r, Qe()),
                a;
            if (s === 6)
                ar(r, c);
            else {
                if (f = r.current.alternate,
                (c & 30) === 0 && !ZS(f) && (s = Ga(r, c),
                s === 2 && (p = gu(r),
                p !== 0 && (c = p,
                s = Ic(r, p))),
                s === 1))
                    throw a = Ji,
                    $r(r, 0),
                    ar(r, c),
                    At(r, Qe()),
                    a;
                switch (r.finishedWork = f,
                r.finishedLanes = c,
                s) {
                case 0:
                case 1:
                    throw Error(n(345));
                case 2:
                    Hr(r, Rt, Ln);
                    break;
                case 3:
                    if (ar(r, c),
                    (c & 130023424) === c && (s = Lc + 500 - Qe(),
                    10 < s)) {
                        if (ra(r, 0) !== 0)
                            break;
                        if (f = r.suspendedLanes,
                        (f & c) !== c) {
                            Et(),
                            r.pingedLanes |= r.suspendedLanes & f;
                            break
                        }
                        r.timeoutHandle = $u(Hr.bind(null, r, Rt, Ln), s);
                        break
                    }
                    Hr(r, Rt, Ln);
                    break;
                case 4:
                    if (ar(r, c),
                    (c & 4194240) === c)
                        break;
                    for (s = r.eventTimes,
                    f = -1; 0 < c; ) {
                        var v = 31 - tn(c);
                        p = 1 << v,
                        v = s[v],
                        v > f && (f = v),
                        c &= ~p
                    }
                    if (c = f,
                    c = Qe() - c,
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * JS(c / 1960)) - c,
                    10 < c) {
                        r.timeoutHandle = $u(Hr.bind(null, r, Rt, Ln), c);
                        break
                    }
                    Hr(r, Rt, Ln);
                    break;
                case 5:
                    Hr(r, Rt, Ln);
                    break;
                default:
                    throw Error(n(329))
                }
            }
        }
        return At(r, Qe()),
        r.callbackNode === a ? tg.bind(null, r) : null
    }
    function Ic(r, s) {
        var a = Zi;
        return r.current.memoizedState.isDehydrated && ($r(r, s).flags |= 256),
        r = Ga(r, s),
        r !== 2 && (s = Rt,
        Rt = a,
        s !== null && Fc(s)),
        r
    }
    function Fc(r) {
        Rt === null ? Rt = r : Rt.push.apply(Rt, r)
    }
    function ZS(r) {
        for (var s = r; ; ) {
            if (s.flags & 16384) {
                var a = s.updateQueue;
                if (a !== null && (a = a.stores,
                a !== null))
                    for (var c = 0; c < a.length; c++) {
                        var f = a[c]
                          , p = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!nn(p(), f))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (a = s.child,
            s.subtreeFlags & 16384 && a !== null)
                a.return = s,
                s = a;
            else {
                if (s === r)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === r)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function ar(r, s) {
        for (s &= ~jc,
        s &= ~$a,
        r.suspendedLanes |= s,
        r.pingedLanes &= ~s,
        r = r.expirationTimes; 0 < s; ) {
            var a = 31 - tn(s)
              , c = 1 << a;
            r[a] = -1,
            s &= ~c
        }
    }
    function ng(r) {
        if ((Pe & 6) !== 0)
            throw Error(n(327));
        Bs();
        var s = ra(r, 0);
        if ((s & 1) === 0)
            return At(r, Qe()),
            null;
        var a = Ga(r, s);
        if (r.tag !== 0 && a === 2) {
            var c = gu(r);
            c !== 0 && (s = c,
            a = Ic(r, c))
        }
        if (a === 1)
            throw a = Ji,
            $r(r, 0),
            ar(r, s),
            At(r, Qe()),
            a;
        if (a === 6)
            throw Error(n(345));
        return r.finishedWork = r.current.alternate,
        r.finishedLanes = s,
        Hr(r, Rt, Ln),
        At(r, Qe()),
        null
    }
    function Vc(r, s) {
        var a = Pe;
        Pe |= 1;
        try {
            return r(s)
        } finally {
            Pe = a,
            Pe === 0 && (Vs = Qe() + 500,
            ba && er())
        }
    }
    function zr(r) {
        ir !== null && ir.tag === 0 && (Pe & 6) === 0 && Bs();
        var s = Pe;
        Pe |= 1;
        var a = Wt.transition
          , c = je;
        try {
            if (Wt.transition = null,
            je = 1,
            r)
                return r()
        } finally {
            je = c,
            Wt.transition = a,
            Pe = s,
            (Pe & 6) === 0 && er()
        }
    }
    function Bc() {
        Vt = Fs.current,
        Ve(Fs)
    }
    function $r(r, s) {
        r.finishedWork = null,
        r.finishedLanes = 0;
        var a = r.timeoutHandle;
        if (a !== -1 && (r.timeoutHandle = -1,
        RS(a)),
        Je !== null)
            for (a = Je.return; a !== null; ) {
                var c = a;
                switch (Gu(c),
                c.tag) {
                case 1:
                    c = c.type.childContextTypes,
                    c != null && xa();
                    break;
                case 3:
                    Ds(),
                    Ve(Tt),
                    Ve(mt),
                    lc();
                    break;
                case 5:
                    oc(c);
                    break;
                case 4:
                    Ds();
                    break;
                case 13:
                    Ve(ze);
                    break;
                case 19:
                    Ve(ze);
                    break;
                case 10:
                    tc(c.type._context);
                    break;
                case 22:
                case 23:
                    Bc()
                }
                a = a.return
            }
        if (it = r,
        Je = r = lr(r.current, null),
        ut = Vt = s,
        nt = 0,
        Ji = null,
        jc = $a = Ur = 0,
        Rt = Zi = null,
        Fr !== null) {
            for (s = 0; s < Fr.length; s++)
                if (a = Fr[s],
                c = a.interleaved,
                c !== null) {
                    a.interleaved = null;
                    var f = c.next
                      , p = a.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = f,
                        c.next = v
                    }
                    a.pending = c
                }
            Fr = null
        }
        return r
    }
    function rg(r, s) {
        do {
            var a = Je;
            try {
                if (ec(),
                Oa.current = Ma,
                ja) {
                    for (var c = $e.memoizedState; c !== null; ) {
                        var f = c.queue;
                        f !== null && (f.pending = null),
                        c = c.next
                    }
                    ja = !1
                }
                if (Br = 0,
                st = tt = $e = null,
                Wi = !1,
                Ki = 0,
                Oc.current = null,
                a === null || a.return === null) {
                    nt = 1,
                    Ji = s,
                    Je = null;
                    break
                }
                e: {
                    var p = r
                      , v = a.return
                      , C = a
                      , T = s;
                    if (s = ut,
                    C.flags |= 32768,
                    T !== null && typeof T == "object" && typeof T.then == "function") {
                        var I = T
                          , H = C
                          , W = H.tag;
                        if ((H.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
                            var $ = H.alternate;
                            $ ? (H.updateQueue = $.updateQueue,
                            H.memoizedState = $.memoizedState,
                            H.lanes = $.lanes) : (H.updateQueue = null,
                            H.memoizedState = null)
                        }
                        var Y = _m(v);
                        if (Y !== null) {
                            Y.flags &= -257,
                            Rm(Y, v, C, p, s),
                            Y.mode & 1 && Pm(p, I, s),
                            s = Y,
                            T = I;
                            var ee = s.updateQueue;
                            if (ee === null) {
                                var re = new Set;
                                re.add(T),
                                s.updateQueue = re
                            } else
                                ee.add(T);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                Pm(p, I, s),
                                Uc();
                                break e
                            }
                            T = Error(n(426))
                        }
                    } else if (Ue && C.mode & 1) {
                        var Ge = _m(v);
                        if (Ge !== null) {
                            (Ge.flags & 65536) === 0 && (Ge.flags |= 256),
                            Rm(Ge, v, C, p, s),
                            Ju(Ms(T, C));
                            break e
                        }
                    }
                    p = T = Ms(T, C),
                    nt !== 4 && (nt = 2),
                    Zi === null ? Zi = [p] : Zi.push(p),
                    p = v;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            s &= -s,
                            p.lanes |= s;
                            var O = Cm(p, T, s);
                            Jp(p, O);
                            break e;
                        case 1:
                            C = T;
                            var R = p.type
                              , L = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (sr === null || !sr.has(L)))) {
                                p.flags |= 65536,
                                s &= -s,
                                p.lanes |= s;
                                var Q = Tm(p, C, s);
                                Jp(p, Q);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                og(a)
            } catch (ie) {
                s = ie,
                Je === a && a !== null && (Je = a = a.return);
                continue
            }
            break
        } while (!0)
    }
    function sg() {
        var r = za.current;
        return za.current = Ma,
        r === null ? Ma : r
    }
    function Uc() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
        it === null || (Ur & 268435455) === 0 && ($a & 268435455) === 0 || ar(it, ut)
    }
    function Ga(r, s) {
        var a = Pe;
        Pe |= 2;
        var c = sg();
        (it !== r || ut !== s) && (Ln = null,
        $r(r, s));
        do
            try {
                eb();
                break
            } catch (f) {
                rg(r, f)
            }
        while (!0);
        if (ec(),
        Pe = a,
        za.current = c,
        Je !== null)
            throw Error(n(261));
        return it = null,
        ut = 0,
        nt
    }
    function eb() {
        for (; Je !== null; )
            ig(Je)
    }
    function tb() {
        for (; Je !== null && !T1(); )
            ig(Je)
    }
    function ig(r) {
        var s = ug(r.alternate, r, Vt);
        r.memoizedProps = r.pendingProps,
        s === null ? og(r) : Je = s,
        Oc.current = null
    }
    function og(r) {
        var s = r;
        do {
            var a = s.alternate;
            if (r = s.return,
            (s.flags & 32768) === 0) {
                if (a = KS(a, s, Vt),
                a !== null) {
                    Je = a;
                    return
                }
            } else {
                if (a = QS(a, s),
                a !== null) {
                    a.flags &= 32767,
                    Je = a;
                    return
                }
                if (r !== null)
                    r.flags |= 32768,
                    r.subtreeFlags = 0,
                    r.deletions = null;
                else {
                    nt = 6,
                    Je = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                Je = s;
                return
            }
            Je = s = r
        } while (s !== null);
        nt === 0 && (nt = 5)
    }
    function Hr(r, s, a) {
        var c = je
          , f = Wt.transition;
        try {
            Wt.transition = null,
            je = 1,
            nb(r, s, a, c)
        } finally {
            Wt.transition = f,
            je = c
        }
        return null
    }
    function nb(r, s, a, c) {
        do
            Bs();
        while (ir !== null);
        if ((Pe & 6) !== 0)
            throw Error(n(327));
        a = r.finishedWork;
        var f = r.finishedLanes;
        if (a === null)
            return null;
        if (r.finishedWork = null,
        r.finishedLanes = 0,
        a === r.current)
            throw Error(n(177));
        r.callbackNode = null,
        r.callbackPriority = 0;
        var p = a.lanes | a.childLanes;
        if (M1(r, p),
        r === it && (Je = it = null,
        ut = 0),
        (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || qa || (qa = !0,
        cg(Zo, function() {
            return Bs(),
            null
        })),
        p = (a.flags & 15990) !== 0,
        (a.subtreeFlags & 15990) !== 0 || p) {
            p = Wt.transition,
            Wt.transition = null;
            var v = je;
            je = 1;
            var C = Pe;
            Pe |= 4,
            Oc.current = null,
            YS(r, a),
            Ym(a, r),
            bS(Uu),
            oa = !!Bu,
            Uu = Bu = null,
            r.current = a,
            XS(a),
            P1(),
            Pe = C,
            je = v,
            Wt.transition = p
        } else
            r.current = a;
        if (qa && (qa = !1,
        ir = r,
        Wa = f),
        p = r.pendingLanes,
        p === 0 && (sr = null),
        A1(a.stateNode),
        At(r, Qe()),
        s !== null)
            for (c = r.onRecoverableError,
            a = 0; a < s.length; a++)
                f = s[a],
                c(f.value, {
                    componentStack: f.stack,
                    digest: f.digest
                });
        if (Ha)
            throw Ha = !1,
            r = Dc,
            Dc = null,
            r;
        return (Wa & 1) !== 0 && r.tag !== 0 && Bs(),
        p = r.pendingLanes,
        (p & 1) !== 0 ? r === Mc ? eo++ : (eo = 0,
        Mc = r) : eo = 0,
        er(),
        null
    }
    function Bs() {
        if (ir !== null) {
            var r = Qh(Wa)
              , s = Wt.transition
              , a = je;
            try {
                if (Wt.transition = null,
                je = 16 > r ? 16 : r,
                ir === null)
                    var c = !1;
                else {
                    if (r = ir,
                    ir = null,
                    Wa = 0,
                    (Pe & 6) !== 0)
                        throw Error(n(331));
                    var f = Pe;
                    for (Pe |= 4,
                    Z = r.current; Z !== null; ) {
                        var p = Z
                          , v = p.child;
                        if ((Z.flags & 16) !== 0) {
                            var C = p.deletions;
                            if (C !== null) {
                                for (var T = 0; T < C.length; T++) {
                                    var I = C[T];
                                    for (Z = I; Z !== null; ) {
                                        var H = Z;
                                        switch (H.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xi(8, H, p)
                                        }
                                        var W = H.child;
                                        if (W !== null)
                                            W.return = H,
                                            Z = W;
                                        else
                                            for (; Z !== null; ) {
                                                H = Z;
                                                var $ = H.sibling
                                                  , Y = H.return;
                                                if (qm(H),
                                                H === I) {
                                                    Z = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = Y,
                                                    Z = $;
                                                    break
                                                }
                                                Z = Y
                                            }
                                    }
                                }
                                var ee = p.alternate;
                                if (ee !== null) {
                                    var re = ee.child;
                                    if (re !== null) {
                                        ee.child = null;
                                        do {
                                            var Ge = re.sibling;
                                            re.sibling = null,
                                            re = Ge
                                        } while (re !== null)
                                    }
                                }
                                Z = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null)
                            v.return = p,
                            Z = v;
                        else
                            e: for (; Z !== null; ) {
                                if (p = Z,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xi(9, p, p.return)
                                    }
                                var O = p.sibling;
                                if (O !== null) {
                                    O.return = p.return,
                                    Z = O;
                                    break e
                                }
                                Z = p.return
                            }
                    }
                    var R = r.current;
                    for (Z = R; Z !== null; ) {
                        v = Z;
                        var L = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && L !== null)
                            L.return = v,
                            Z = L;
                        else
                            e: for (v = R; Z !== null; ) {
                                if (C = Z,
                                (C.flags & 2048) !== 0)
                                    try {
                                        switch (C.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ua(9, C)
                                        }
                                    } catch (ie) {
                                        qe(C, C.return, ie)
                                    }
                                if (C === v) {
                                    Z = null;
                                    break e
                                }
                                var Q = C.sibling;
                                if (Q !== null) {
                                    Q.return = C.return,
                                    Z = Q;
                                    break e
                                }
                                Z = C.return
                            }
                    }
                    if (Pe = f,
                    er(),
                    pn && typeof pn.onPostCommitFiberRoot == "function")
                        try {
                            pn.onPostCommitFiberRoot(ea, r)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                je = a,
                Wt.transition = s
            }
        }
        return !1
    }
    function ag(r, s, a) {
        s = Ms(a, s),
        s = Cm(r, s, 1),
        r = nr(r, s, 1),
        s = Et(),
        r !== null && (Ei(r, 1, s),
        At(r, s))
    }
    function qe(r, s, a) {
        if (r.tag === 3)
            ag(r, r, a);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    ag(s, r, a);
                    break
                } else if (s.tag === 1) {
                    var c = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (sr === null || !sr.has(c))) {
                        r = Ms(a, r),
                        r = Tm(s, r, 1),
                        s = nr(s, r, 1),
                        r = Et(),
                        s !== null && (Ei(s, 1, r),
                        At(s, r));
                        break
                    }
                }
                s = s.return
            }
    }
    function rb(r, s, a) {
        var c = r.pingCache;
        c !== null && c.delete(s),
        s = Et(),
        r.pingedLanes |= r.suspendedLanes & a,
        it === r && (ut & a) === a && (nt === 4 || nt === 3 && (ut & 130023424) === ut && 500 > Qe() - Lc ? $r(r, 0) : jc |= a),
        At(r, s)
    }
    function lg(r, s) {
        s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = na,
        na <<= 1,
        (na & 130023424) === 0 && (na = 4194304)));
        var a = Et();
        r = Nn(r, s),
        r !== null && (Ei(r, s, a),
        At(r, a))
    }
    function sb(r) {
        var s = r.memoizedState
          , a = 0;
        s !== null && (a = s.retryLane),
        lg(r, a)
    }
    function ib(r, s) {
        var a = 0;
        switch (r.tag) {
        case 13:
            var c = r.stateNode
              , f = r.memoizedState;
            f !== null && (a = f.retryLane);
            break;
        case 19:
            c = r.stateNode;
            break;
        default:
            throw Error(n(314))
        }
        c !== null && c.delete(s),
        lg(r, a)
    }
    var ug;
    ug = function(r, s, a) {
        if (r !== null)
            if (r.memoizedProps !== s.pendingProps || Tt.current)
                _t = !0;
            else {
                if ((r.lanes & a) === 0 && (s.flags & 128) === 0)
                    return _t = !1,
                    WS(r, s, a);
                _t = (r.flags & 131072) !== 0
            }
        else
            _t = !1,
            Ue && (s.flags & 1048576) !== 0 && zp(s, Ea, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var c = s.type;
            Va(r, s),
            r = s.pendingProps;
            var f = _s(s, mt.current);
            Ls(s, a),
            f = dc(null, s, c, r, f, a);
            var p = fc();
            return s.flags |= 1,
            typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Pt(c) ? (p = !0,
            Sa(s)) : p = !1,
            s.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            sc(s),
            f.updater = Ia,
            s.stateNode = f,
            f._reactInternals = s,
            vc(s, c, r, a),
            s = bc(null, s, c, !0, p, a)) : (s.tag = 0,
            Ue && p && Qu(s),
            kt(null, s, f, a),
            s = s.child),
            s;
        case 16:
            c = s.elementType;
            e: {
                switch (Va(r, s),
                r = s.pendingProps,
                f = c._init,
                c = f(c._payload),
                s.type = c,
                f = s.tag = ab(c),
                r = sn(c, r),
                f) {
                case 0:
                    s = Sc(null, s, c, r, a);
                    break e;
                case 1:
                    s = Dm(null, s, c, r, a);
                    break e;
                case 11:
                    s = Am(null, s, c, r, a);
                    break e;
                case 14:
                    s = Nm(null, s, c, sn(c.type, r), a);
                    break e
                }
                throw Error(n(306, c, ""))
            }
            return s;
        case 0:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : sn(c, f),
            Sc(r, s, c, f, a);
        case 1:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : sn(c, f),
            Dm(r, s, c, f, a);
        case 3:
            e: {
                if (Mm(s),
                r === null)
                    throw Error(n(387));
                c = s.pendingProps,
                p = s.memoizedState,
                f = p.element,
                Xp(r, s),
                Aa(s, c, null, a);
                var v = s.memoizedState;
                if (c = v.element,
                p.isDehydrated)
                    if (p = {
                        element: c,
                        isDehydrated: !1,
                        cache: v.cache,
                        pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                        transitions: v.transitions
                    },
                    s.updateQueue.baseState = p,
                    s.memoizedState = p,
                    s.flags & 256) {
                        f = Ms(Error(n(423)), s),
                        s = Im(r, s, c, a, f);
                        break e
                    } else if (c !== f) {
                        f = Ms(Error(n(424)), s),
                        s = Im(r, s, c, a, f);
                        break e
                    } else
                        for (Ft = Xn(s.stateNode.containerInfo.firstChild),
                        It = s,
                        Ue = !0,
                        rn = null,
                        a = Gp(s, null, c, a),
                        s.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (Ns(),
                    c === f) {
                        s = jn(r, s, a);
                        break e
                    }
                    kt(r, s, c, a)
                }
                s = s.child
            }
            return s;
        case 5:
            return em(s),
            r === null && Xu(s),
            c = s.type,
            f = s.pendingProps,
            p = r !== null ? r.memoizedProps : null,
            v = f.children,
            zu(c, f) ? v = null : p !== null && zu(c, p) && (s.flags |= 32),
            Lm(r, s),
            kt(r, s, v, a),
            s.child;
        case 6:
            return r === null && Xu(s),
            null;
        case 13:
            return Fm(r, s, a);
        case 4:
            return ic(s, s.stateNode.containerInfo),
            c = s.pendingProps,
            r === null ? s.child = Os(s, null, c, a) : kt(r, s, c, a),
            s.child;
        case 11:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : sn(c, f),
            Am(r, s, c, f, a);
        case 7:
            return kt(r, s, s.pendingProps, a),
            s.child;
        case 8:
            return kt(r, s, s.pendingProps.children, a),
            s.child;
        case 12:
            return kt(r, s, s.pendingProps.children, a),
            s.child;
        case 10:
            e: {
                if (c = s.type._context,
                f = s.pendingProps,
                p = s.memoizedProps,
                v = f.value,
                Ie(Pa, c._currentValue),
                c._currentValue = v,
                p !== null)
                    if (nn(p.value, v)) {
                        if (p.children === f.children && !Tt.current) {
                            s = jn(r, s, a);
                            break e
                        }
                    } else
                        for (p = s.child,
                        p !== null && (p.return = s); p !== null; ) {
                            var C = p.dependencies;
                            if (C !== null) {
                                v = p.child;
                                for (var T = C.firstContext; T !== null; ) {
                                    if (T.context === c) {
                                        if (p.tag === 1) {
                                            T = On(-1, a & -a),
                                            T.tag = 2;
                                            var I = p.updateQueue;
                                            if (I !== null) {
                                                I = I.shared;
                                                var H = I.pending;
                                                H === null ? T.next = T : (T.next = H.next,
                                                H.next = T),
                                                I.pending = T
                                            }
                                        }
                                        p.lanes |= a,
                                        T = p.alternate,
                                        T !== null && (T.lanes |= a),
                                        nc(p.return, a, s),
                                        C.lanes |= a;
                                        break
                                    }
                                    T = T.next
                                }
                            } else if (p.tag === 10)
                                v = p.type === s.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (v = p.return,
                                v === null)
                                    throw Error(n(341));
                                v.lanes |= a,
                                C = v.alternate,
                                C !== null && (C.lanes |= a),
                                nc(v, a, s),
                                v = p.sibling
                            } else
                                v = p.child;
                            if (v !== null)
                                v.return = p;
                            else
                                for (v = p; v !== null; ) {
                                    if (v === s) {
                                        v = null;
                                        break
                                    }
                                    if (p = v.sibling,
                                    p !== null) {
                                        p.return = v.return,
                                        v = p;
                                        break
                                    }
                                    v = v.return
                                }
                            p = v
                        }
                kt(r, s, f.children, a),
                s = s.child
            }
            return s;
        case 9:
            return f = s.type,
            c = s.pendingProps.children,
            Ls(s, a),
            f = Ht(f),
            c = c(f),
            s.flags |= 1,
            kt(r, s, c, a),
            s.child;
        case 14:
            return c = s.type,
            f = sn(c, s.pendingProps),
            f = sn(c.type, f),
            Nm(r, s, c, f, a);
        case 15:
            return Om(r, s, s.type, s.pendingProps, a);
        case 17:
            return c = s.type,
            f = s.pendingProps,
            f = s.elementType === c ? f : sn(c, f),
            Va(r, s),
            s.tag = 1,
            Pt(c) ? (r = !0,
            Sa(s)) : r = !1,
            Ls(s, a),
            km(s, c, f),
            vc(s, c, f, a),
            bc(null, s, c, !0, r, a);
        case 19:
            return Bm(r, s, a);
        case 22:
            return jm(r, s, a)
        }
        throw Error(n(156, s.tag))
    }
    ;
    function cg(r, s) {
        return $h(r, s)
    }
    function ob(r, s, a, c) {
        this.tag = r,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = c,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kt(r, s, a, c) {
        return new ob(r,s,a,c)
    }
    function zc(r) {
        return r = r.prototype,
        !(!r || !r.isReactComponent)
    }
    function ab(r) {
        if (typeof r == "function")
            return zc(r) ? 1 : 0;
        if (r != null) {
            if (r = r.$$typeof,
            r === Te)
                return 11;
            if (r === Me)
                return 14
        }
        return 2
    }
    function lr(r, s) {
        var a = r.alternate;
        return a === null ? (a = Kt(r.tag, s, r.key, r.mode),
        a.elementType = r.elementType,
        a.type = r.type,
        a.stateNode = r.stateNode,
        a.alternate = r,
        r.alternate = a) : (a.pendingProps = s,
        a.type = r.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = r.flags & 14680064,
        a.childLanes = r.childLanes,
        a.lanes = r.lanes,
        a.child = r.child,
        a.memoizedProps = r.memoizedProps,
        a.memoizedState = r.memoizedState,
        a.updateQueue = r.updateQueue,
        s = r.dependencies,
        a.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        a.sibling = r.sibling,
        a.index = r.index,
        a.ref = r.ref,
        a
    }
    function Ya(r, s, a, c, f, p) {
        var v = 2;
        if (c = r,
        typeof r == "function")
            zc(r) && (v = 1);
        else if (typeof r == "string")
            v = 5;
        else
            e: switch (r) {
            case G:
                return qr(a.children, f, p, s);
            case M:
                v = 8,
                f |= 8;
                break;
            case X:
                return r = Kt(12, a, s, f | 2),
                r.elementType = X,
                r.lanes = p,
                r;
            case Le:
                return r = Kt(13, a, s, f),
                r.elementType = Le,
                r.lanes = p,
                r;
            case Ae:
                return r = Kt(19, a, s, f),
                r.elementType = Ae,
                r.lanes = p,
                r;
            case fe:
                return Xa(a, f, p, s);
            default:
                if (typeof r == "object" && r !== null)
                    switch (r.$$typeof) {
                    case me:
                        v = 10;
                        break e;
                    case de:
                        v = 9;
                        break e;
                    case Te:
                        v = 11;
                        break e;
                    case Me:
                        v = 14;
                        break e;
                    case xe:
                        v = 16,
                        c = null;
                        break e
                    }
                throw Error(n(130, r == null ? r : typeof r, ""))
            }
        return s = Kt(v, a, s, f),
        s.elementType = r,
        s.type = c,
        s.lanes = p,
        s
    }
    function qr(r, s, a, c) {
        return r = Kt(7, r, c, s),
        r.lanes = a,
        r
    }
    function Xa(r, s, a, c) {
        return r = Kt(22, r, c, s),
        r.elementType = fe,
        r.lanes = a,
        r.stateNode = {
            isHidden: !1
        },
        r
    }
    function $c(r, s, a) {
        return r = Kt(6, r, null, s),
        r.lanes = a,
        r
    }
    function Hc(r, s, a) {
        return s = Kt(4, r.children !== null ? r.children : [], r.key, s),
        s.lanes = a,
        s.stateNode = {
            containerInfo: r.containerInfo,
            pendingChildren: null,
            implementation: r.implementation
        },
        s
    }
    function lb(r, s, a, c, f) {
        this.tag = s,
        this.containerInfo = r,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = yu(0),
        this.expirationTimes = yu(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = yu(0),
        this.identifierPrefix = c,
        this.onRecoverableError = f,
        this.mutableSourceEagerHydrationData = null
    }
    function qc(r, s, a, c, f, p, v, C, T) {
        return r = new lb(r,s,a,C,T),
        s === 1 ? (s = 1,
        p === !0 && (s |= 8)) : s = 0,
        p = Kt(3, null, null, s),
        r.current = p,
        p.stateNode = r,
        p.memoizedState = {
            element: c,
            isDehydrated: a,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        sc(p),
        r
    }
    function ub(r, s, a) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: q,
            key: c == null ? null : "" + c,
            children: r,
            containerInfo: s,
            implementation: a
        }
    }
    function dg(r) {
        if (!r)
            return Zn;
        r = r._reactInternals;
        e: {
            if (jr(r) !== r || r.tag !== 1)
                throw Error(n(170));
            var s = r;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Pt(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(n(171))
        }
        if (r.tag === 1) {
            var a = r.type;
            if (Pt(a))
                return Vp(r, a, s)
        }
        return s
    }
    function fg(r, s, a, c, f, p, v, C, T) {
        return r = qc(a, c, !0, r, f, p, v, C, T),
        r.context = dg(null),
        a = r.current,
        c = Et(),
        f = or(a),
        p = On(c, f),
        p.callback = s ?? null,
        nr(a, p, f),
        r.current.lanes = f,
        Ei(r, f, c),
        At(r, c),
        r
    }
    function Ja(r, s, a, c) {
        var f = s.current
          , p = Et()
          , v = or(f);
        return a = dg(a),
        s.context === null ? s.context = a : s.pendingContext = a,
        s = On(p, v),
        s.payload = {
            element: r
        },
        c = c === void 0 ? null : c,
        c !== null && (s.callback = c),
        r = nr(f, s, v),
        r !== null && (ln(r, f, v, p),
        Ra(r, f, v)),
        v
    }
    function Za(r) {
        if (r = r.current,
        !r.child)
            return null;
        switch (r.child.tag) {
        case 5:
            return r.child.stateNode;
        default:
            return r.child.stateNode
        }
    }
    function hg(r, s) {
        if (r = r.memoizedState,
        r !== null && r.dehydrated !== null) {
            var a = r.retryLane;
            r.retryLane = a !== 0 && a < s ? a : s
        }
    }
    function Wc(r, s) {
        hg(r, s),
        (r = r.alternate) && hg(r, s)
    }
    function cb() {
        return null
    }
    var pg = typeof reportError == "function" ? reportError : function(r) {
        console.error(r)
    }
    ;
    function Kc(r) {
        this._internalRoot = r
    }
    el.prototype.render = Kc.prototype.render = function(r) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(n(409));
        Ja(r, s, null, null)
    }
    ,
    el.prototype.unmount = Kc.prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
            this._internalRoot = null;
            var s = r.containerInfo;
            zr(function() {
                Ja(null, r, null, null)
            }),
            s[Pn] = null
        }
    }
    ;
    function el(r) {
        this._internalRoot = r
    }
    el.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
            var s = Xh();
            r = {
                blockedOn: null,
                target: r,
                priority: s
            };
            for (var a = 0; a < Qn.length && s !== 0 && s < Qn[a].priority; a++)
                ;
            Qn.splice(a, 0, r),
            a === 0 && ep(r)
        }
    }
    ;
    function Qc(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    }
    function tl(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    }
    function mg() {}
    function db(r, s, a, c, f) {
        if (f) {
            if (typeof c == "function") {
                var p = c;
                c = function() {
                    var I = Za(v);
                    p.call(I)
                }
            }
            var v = fg(s, c, r, 0, null, !1, !1, "", mg);
            return r._reactRootContainer = v,
            r[Pn] = v.current,
            Fi(r.nodeType === 8 ? r.parentNode : r),
            zr(),
            v
        }
        for (; f = r.lastChild; )
            r.removeChild(f);
        if (typeof c == "function") {
            var C = c;
            c = function() {
                var I = Za(T);
                C.call(I)
            }
        }
        var T = qc(r, 0, !1, null, null, !1, !1, "", mg);
        return r._reactRootContainer = T,
        r[Pn] = T.current,
        Fi(r.nodeType === 8 ? r.parentNode : r),
        zr(function() {
            Ja(s, T, a, c)
        }),
        T
    }
    function nl(r, s, a, c, f) {
        var p = a._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof f == "function") {
                var C = f;
                f = function() {
                    var T = Za(v);
                    C.call(T)
                }
            }
            Ja(s, v, r, f)
        } else
            v = db(a, s, r, f, c);
        return Za(v)
    }
    Gh = function(r) {
        switch (r.tag) {
        case 3:
            var s = r.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var a = ki(s.pendingLanes);
                a !== 0 && (vu(s, a | 1),
                At(s, Qe()),
                (Pe & 6) === 0 && (Vs = Qe() + 500,
                er()))
            }
            break;
        case 13:
            zr(function() {
                var c = Nn(r, 1);
                if (c !== null) {
                    var f = Et();
                    ln(c, r, 1, f)
                }
            }),
            Wc(r, 1)
        }
    }
    ,
    wu = function(r) {
        if (r.tag === 13) {
            var s = Nn(r, 134217728);
            if (s !== null) {
                var a = Et();
                ln(s, r, 134217728, a)
            }
            Wc(r, 134217728)
        }
    }
    ,
    Yh = function(r) {
        if (r.tag === 13) {
            var s = or(r)
              , a = Nn(r, s);
            if (a !== null) {
                var c = Et();
                ln(a, r, s, c)
            }
            Wc(r, s)
        }
    }
    ,
    Xh = function() {
        return je
    }
    ,
    Jh = function(r, s) {
        var a = je;
        try {
            return je = r,
            s()
        } finally {
            je = a
        }
    }
    ,
    du = function(r, s, a) {
        switch (s) {
        case "input":
            if (ru(r, a),
            s = a.name,
            a.type === "radio" && s != null) {
                for (a = r; a.parentNode; )
                    a = a.parentNode;
                for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < a.length; s++) {
                    var c = a[s];
                    if (c !== r && c.form === r.form) {
                        var f = wa(c);
                        if (!f)
                            throw Error(n(90));
                        Or(c),
                        ru(c, f)
                    }
                }
            }
            break;
        case "textarea":
            Ph(r, a);
            break;
        case "select":
            s = a.value,
            s != null && gs(r, !!a.multiple, s, !1)
        }
    }
    ,
    Mh = Vc,
    Ih = zr;
    var fb = {
        usingClientEntryPoint: !1,
        Events: [Ui, Ts, wa, Lh, Dh, Vc]
    }
      , to = {
        findFiberByHostInstance: Lr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , hb = {
        bundleType: to.bundleType,
        version: to.version,
        rendererPackageName: to.rendererPackageName,
        rendererConfig: to.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: D.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(r) {
            return r = Uh(r),
            r === null ? null : r.stateNode
        },
        findFiberByHostInstance: to.findFiberByHostInstance || cb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!rl.isDisabled && rl.supportsFiber)
            try {
                ea = rl.inject(hb),
                pn = rl
            } catch {}
    }
    return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fb,
    Nt.createPortal = function(r, s) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Qc(s))
            throw Error(n(200));
        return ub(r, s, null, a)
    }
    ,
    Nt.createRoot = function(r, s) {
        if (!Qc(r))
            throw Error(n(299));
        var a = !1
          , c = ""
          , f = pg;
        return s != null && (s.unstable_strictMode === !0 && (a = !0),
        s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (f = s.onRecoverableError)),
        s = qc(r, 1, !1, null, null, a, !1, c, f),
        r[Pn] = s.current,
        Fi(r.nodeType === 8 ? r.parentNode : r),
        new Kc(s)
    }
    ,
    Nt.findDOMNode = function(r) {
        if (r == null)
            return null;
        if (r.nodeType === 1)
            return r;
        var s = r._reactInternals;
        if (s === void 0)
            throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","),
            Error(n(268, r)));
        return r = Uh(s),
        r = r === null ? null : r.stateNode,
        r
    }
    ,
    Nt.flushSync = function(r) {
        return zr(r)
    }
    ,
    Nt.hydrate = function(r, s, a) {
        if (!tl(s))
            throw Error(n(200));
        return nl(null, r, s, !0, a)
    }
    ,
    Nt.hydrateRoot = function(r, s, a) {
        if (!Qc(r))
            throw Error(n(405));
        var c = a != null && a.hydratedSources || null
          , f = !1
          , p = ""
          , v = pg;
        if (a != null && (a.unstable_strictMode === !0 && (f = !0),
        a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
        a.onRecoverableError !== void 0 && (v = a.onRecoverableError)),
        s = fg(s, null, r, 1, a ?? null, f, !1, p, v),
        r[Pn] = s.current,
        Fi(r),
        c)
            for (r = 0; r < c.length; r++)
                a = c[r],
                f = a._getVersion,
                f = f(a._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [a, f] : s.mutableSourceEagerHydrationData.push(a, f);
        return new el(s)
    }
    ,
    Nt.render = function(r, s, a) {
        if (!tl(s))
            throw Error(n(200));
        return nl(null, r, s, !1, a)
    }
    ,
    Nt.unmountComponentAtNode = function(r) {
        if (!tl(r))
            throw Error(n(40));
        return r._reactRootContainer ? (zr(function() {
            nl(null, null, r, !1, function() {
                r._reactRootContainer = null,
                r[Pn] = null
            })
        }),
        !0) : !1
    }
    ,
    Nt.unstable_batchedUpdates = Vc,
    Nt.unstable_renderSubtreeIntoContainer = function(r, s, a, c) {
        if (!tl(a))
            throw Error(n(200));
        if (r == null || r._reactInternals === void 0)
            throw Error(n(38));
        return nl(r, s, a, !1, c)
    }
    ,
    Nt.version = "18.3.1-next-f1338f8080-20240426",
    Nt
}
var Eg;
function u0() {
    if (Eg)
        return Jc.exports;
    Eg = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    Jc.exports = bb(),
    Jc.exports
}
var Cg;
function kb() {
    if (Cg)
        return il;
    Cg = 1;
    var t = u0();
    return il.createRoot = t.createRoot,
    il.hydrateRoot = t.hydrateRoot,
    il
}
var Eb = kb();
const Cb = a0(Eb)
  , Tb = 20
  , Pb = 1e6
  , Vn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let td = 0;
function _b() {
    return td = (td + 1) % Number.MAX_VALUE,
    td.toString()
}
const nd = new Map
  , Tg = t => {
    if (nd.has(t))
        return;
    const e = setTimeout( () => {
        nd.delete(t),
        yo({
            type: Vn.REMOVE_TOAST,
            toastId: t
        })
    }
    , Pb);
    nd.set(t, e)
}
  , Rb = (t, e) => {
    switch (e.type) {
    case Vn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, Tb)
        };
    case Vn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(n => n.id === e.toast.id ? {
                ...n,
                ...e.toast
            } : n)
        };
    case Vn.DISMISS_TOAST:
        {
            const {toastId: n} = e;
            return n ? Tg(n) : t.toasts.forEach(i => {
                Tg(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === n || n === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case Vn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(n => n.id !== e.toastId)
        }
    }
}
  , yl = [];
let vl = {
    toasts: []
};
function yo(t) {
    vl = Rb(vl, t),
    yl.forEach(e => {
        e(vl)
    }
    )
}
function Ab({...t}) {
    const e = _b()
      , n = o => yo({
        type: Vn.UPDATE_TOAST,
        toast: {
            ...o,
            id: e
        }
    })
      , i = () => yo({
        type: Vn.DISMISS_TOAST,
        toastId: e
    });
    return yo({
        type: Vn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: o => {
                o || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: n
    }
}
function Nb() {
    const [t,e] = _.useState(vl);
    return _.useEffect( () => (yl.push(e),
    () => {
        const n = yl.indexOf(e);
        n > -1 && yl.splice(n, 1)
    }
    ), [t]),
    {
        ...t,
        toast: Ab,
        dismiss: n => yo({
            type: Vn.DISMISS_TOAST,
            toastId: n
        })
    }
}
function c0(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
                t[e] && (n = c0(t[e])) && (i && (i += " "),
                i += n)
        } else
            for (n in t)
                t[n] && (i && (i += " "),
                i += n);
    return i
}
function d0() {
    for (var t, e, n = 0, i = "", o = arguments.length; n < o; n++)
        (t = arguments[n]) && (e = c0(t)) && (i && (i += " "),
        i += e);
    return i
}
const Pg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , _g = d0
  , f0 = (t, e) => n => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return _g(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: l} = e
      , u = Object.keys(o).map(m => {
        const g = n == null ? void 0 : n[m]
          , y = l == null ? void 0 : l[m];
        if (g === null)
            return null;
        const w = Pg(g) || Pg(y);
        return o[m][w]
    }
    )
      , d = n && Object.entries(n).reduce( (m, g) => {
        let[y,w] = g;
        return w === void 0 || (m[y] = w),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: y, className: w, ...E} = g;
        return Object.entries(E).every(k => {
            let[b,S] = k;
            return Array.isArray(S) ? S.includes({
                ...l,
                ...d
            }[b]) : {
                ...l,
                ...d
            }[b] === S
        }
        ) ? [...m, y, w] : m
    }
    , []);
    return _g(t, u, h, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , h0 = (...t) => t.filter( (e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lb = _.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: n=2, absoluteStrokeWidth: i, className: o="", children: l, iconNode: u, ...d}, h) => _.createElement("svg", {
    ref: h,
    ...jb,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: h0("lucide", o),
    ...d
}, [...u.map( ([m,g]) => _.createElement(m, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = (t, e) => {
    const n = _.forwardRef( ({className: i, ...o}, l) => _.createElement(Lb, {
        ref: l,
        iconNode: e,
        className: h0(`lucide-${Ob(t)}`, i),
        ...o
    }));
    return n.displayName = `${t}`,
    n
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]
  , rd = en("ArrowLeft", Db);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , kf = en("ArrowRight", Mb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ib = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , wl = en("Check", Ib);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]
  , Vb = en("FileText", Fb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]
  , Ub = en("House", Bb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = [["path", {
    d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
    key: "zw3jo"
}], ["path", {
    d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
    key: "1wduqc"
}], ["path", {
    d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
    key: "kqbvx6"
}]]
  , $b = en("Layers", zb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]
  , qb = en("Mail", Hb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , Kb = en("MapPin", Wb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]
  , Gb = en("Palette", Qb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yb = [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]
  , p0 = en("Phone", Yb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xb = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , Jb = en("Send", Xb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , ek = en("X", Zb)
  , tk = (t, e) => {
    const n = new Array(t.length + e.length);
    for (let i = 0; i < t.length; i++)
        n[i] = t[i];
    for (let i = 0; i < e.length; i++)
        n[t.length + i] = e[i];
    return n
}
  , nk = (t, e) => ({
    classGroupId: t,
    validator: e
})
  , m0 = (t=new Map, e=null, n) => ({
    nextPart: t,
    validators: e,
    classGroupId: n
})
  , Al = "-"
  , Rg = []
  , rk = "arbitrary.."
  , sk = t => {
    const e = ok(t)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: u => {
            if (u.startsWith("[") && u.endsWith("]"))
                return ik(u);
            const d = u.split(Al)
              , h = d[0] === "" && d.length > 1 ? 1 : 0;
            return g0(d, h, e)
        }
        ,
        getConflictingClassGroupIds: (u, d) => {
            if (d) {
                const h = i[u]
                  , m = n[u];
                return h ? m ? tk(m, h) : h : m || Rg
            }
            return n[u] || Rg
        }
    }
}
  , g0 = (t, e, n) => {
    if (t.length - e === 0)
        return n.classGroupId;
    const o = t[e]
      , l = n.nextPart.get(o);
    if (l) {
        const m = g0(t, e + 1, l);
        if (m)
            return m
    }
    const u = n.validators;
    if (u === null)
        return;
    const d = e === 0 ? t.join(Al) : t.slice(e).join(Al)
      , h = u.length;
    for (let m = 0; m < h; m++) {
        const g = u[m];
        if (g.validator(d))
            return g.classGroupId
    }
}
  , ik = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const e = t.slice(1, -1)
      , n = e.indexOf(":")
      , i = e.slice(0, n);
    return i ? rk + i : void 0
}
)()
  , ok = t => {
    const {theme: e, classGroups: n} = t;
    return ak(n, e)
}
  , ak = (t, e) => {
    const n = m0();
    for (const i in t) {
        const o = t[i];
        Ef(o, n, i, e)
    }
    return n
}
  , Ef = (t, e, n, i) => {
    const o = t.length;
    for (let l = 0; l < o; l++) {
        const u = t[l];
        lk(u, e, n, i)
    }
}
  , lk = (t, e, n, i) => {
    if (typeof t == "string") {
        uk(t, e, n);
        return
    }
    if (typeof t == "function") {
        ck(t, e, n, i);
        return
    }
    dk(t, e, n, i)
}
  , uk = (t, e, n) => {
    const i = t === "" ? e : y0(e, t);
    i.classGroupId = n
}
  , ck = (t, e, n, i) => {
    if (fk(t)) {
        Ef(t(i), e, n, i);
        return
    }
    e.validators === null && (e.validators = []),
    e.validators.push(nk(n, t))
}
  , dk = (t, e, n, i) => {
    const o = Object.entries(t)
      , l = o.length;
    for (let u = 0; u < l; u++) {
        const [d,h] = o[u];
        Ef(h, y0(e, d), n, i)
    }
}
  , y0 = (t, e) => {
    let n = t;
    const i = e.split(Al)
      , o = i.length;
    for (let l = 0; l < o; l++) {
        const u = i[l];
        let d = n.nextPart.get(u);
        d || (d = m0(),
        n.nextPart.set(u, d)),
        n = d
    }
    return n
}
  , fk = t => "isThemeGetter"in t && t.isThemeGetter === !0
  , hk = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , n = Object.create(null)
      , i = Object.create(null);
    const o = (l, u) => {
        n[l] = u,
        e++,
        e > t && (e = 0,
        i = n,
        n = Object.create(null))
    }
    ;
    return {
        get(l) {
            let u = n[l];
            if (u !== void 0)
                return u;
            if ((u = i[l]) !== void 0)
                return o(l, u),
                u
        },
        set(l, u) {
            l in n ? n[l] = u : o(l, u)
        }
    }
}
  , Ad = "!"
  , Ag = ":"
  , pk = []
  , Ng = (t, e, n, i, o) => ({
    modifiers: t,
    hasImportantModifier: e,
    baseClassName: n,
    maybePostfixModifierPosition: i,
    isExternal: o
})
  , mk = t => {
    const {prefix: e, experimentalParseClassName: n} = t;
    let i = o => {
        const l = [];
        let u = 0, d = 0, h = 0, m;
        const g = o.length;
        for (let b = 0; b < g; b++) {
            const S = o[b];
            if (u === 0 && d === 0) {
                if (S === Ag) {
                    l.push(o.slice(h, b)),
                    h = b + 1;
                    continue
                }
                if (S === "/") {
                    m = b;
                    continue
                }
            }
            S === "[" ? u++ : S === "]" ? u-- : S === "(" ? d++ : S === ")" && d--
        }
        const y = l.length === 0 ? o : o.slice(h);
        let w = y
          , E = !1;
        y.endsWith(Ad) ? (w = y.slice(0, -1),
        E = !0) : y.startsWith(Ad) && (w = y.slice(1),
        E = !0);
        const k = m && m > h ? m - h : void 0;
        return Ng(l, E, w, k)
    }
    ;
    if (e) {
        const o = e + Ag
          , l = i;
        i = u => u.startsWith(o) ? l(u.slice(o.length)) : Ng(pk, !1, u, void 0, !0)
    }
    if (n) {
        const o = i;
        i = l => n({
            className: l,
            parseClassName: o
        })
    }
    return i
}
  , gk = t => {
    const e = new Map;
    return t.orderSensitiveModifiers.forEach( (n, i) => {
        e.set(n, 1e6 + i)
    }
    ),
    n => {
        const i = [];
        let o = [];
        for (let l = 0; l < n.length; l++) {
            const u = n[l]
              , d = u[0] === "["
              , h = e.has(u);
            d || h ? (o.length > 0 && (o.sort(),
            i.push(...o),
            o = []),
            i.push(u)) : o.push(u)
        }
        return o.length > 0 && (o.sort(),
        i.push(...o)),
        i
    }
}
  , yk = t => ({
    cache: hk(t.cacheSize),
    parseClassName: mk(t),
    sortModifiers: gk(t),
    ...sk(t)
})
  , vk = /\s+/
  , wk = (t, e) => {
    const {parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: o, sortModifiers: l} = e
      , u = []
      , d = t.trim().split(vk);
    let h = "";
    for (let m = d.length - 1; m >= 0; m -= 1) {
        const g = d[m]
          , {isExternal: y, modifiers: w, hasImportantModifier: E, baseClassName: k, maybePostfixModifierPosition: b} = n(g);
        if (y) {
            h = g + (h.length > 0 ? " " + h : h);
            continue
        }
        let S = !!b
          , A = i(S ? k.substring(0, b) : k);
        if (!A) {
            if (!S) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            if (A = i(k),
            !A) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            S = !1
        }
        const V = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":")
          , j = E ? V + Ad : V
          , D = j + A;
        if (u.indexOf(D) > -1)
            continue;
        u.push(D);
        const B = o(A, S);
        for (let q = 0; q < B.length; ++q) {
            const G = B[q];
            u.push(j + G)
        }
        h = g + (h.length > 0 ? " " + h : h)
    }
    return h
}
  , xk = (...t) => {
    let e = 0, n, i, o = "";
    for (; e < t.length; )
        (n = t[e++]) && (i = v0(n)) && (o && (o += " "),
        o += i);
    return o
}
  , v0 = t => {
    if (typeof t == "string")
        return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = v0(t[i])) && (n && (n += " "),
        n += e);
    return n
}
  , Sk = (t, ...e) => {
    let n, i, o, l;
    const u = h => {
        const m = e.reduce( (g, y) => y(g), t());
        return n = yk(m),
        i = n.cache.get,
        o = n.cache.set,
        l = d,
        d(h)
    }
      , d = h => {
        const m = i(h);
        if (m)
            return m;
        const g = wk(h, n);
        return o(h, g),
        g
    }
    ;
    return l = u,
    (...h) => l(xk(...h))
}
  , bk = []
  , rt = t => {
    const e = n => n[t] || bk;
    return e.isThemeGetter = !0,
    e
}
  , w0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , x0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , kk = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , Ek = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Ck = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Tk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Pk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , _k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , cr = t => kk.test(t)
  , Se = t => !!t && !Number.isNaN(Number(t))
  , dr = t => !!t && Number.isInteger(Number(t))
  , sd = t => t.endsWith("%") && Se(t.slice(0, -1))
  , Dn = t => Ek.test(t)
  , S0 = () => !0
  , Rk = t => Ck.test(t) && !Tk.test(t)
  , Cf = () => !1
  , Ak = t => Pk.test(t)
  , Nk = t => _k.test(t)
  , Ok = t => !te(t) && !ne(t)
  , jk = t => _r(t, E0, Cf)
  , te = t => w0.test(t)
  , Wr = t => _r(t, C0, Rk)
  , Og = t => _r(t, Uk, Se)
  , Lk = t => _r(t, P0, S0)
  , Dk = t => _r(t, T0, Cf)
  , jg = t => _r(t, b0, Cf)
  , Mk = t => _r(t, k0, Nk)
  , ol = t => _r(t, _0, Ak)
  , ne = t => x0.test(t)
  , ro = t => hs(t, C0)
  , Ik = t => hs(t, T0)
  , Lg = t => hs(t, b0)
  , Fk = t => hs(t, E0)
  , Vk = t => hs(t, k0)
  , al = t => hs(t, _0, !0)
  , Bk = t => hs(t, P0, !0)
  , _r = (t, e, n) => {
    const i = w0.exec(t);
    return i ? i[1] ? e(i[1]) : n(i[2]) : !1
}
  , hs = (t, e, n=!1) => {
    const i = x0.exec(t);
    return i ? i[1] ? e(i[1]) : n : !1
}
  , b0 = t => t === "position" || t === "percentage"
  , k0 = t => t === "image" || t === "url"
  , E0 = t => t === "length" || t === "size" || t === "bg-size"
  , C0 = t => t === "length"
  , Uk = t => t === "number"
  , T0 = t => t === "family-name"
  , P0 = t => t === "number" || t === "weight"
  , _0 = t => t === "shadow"
  , zk = () => {
    const t = rt("color")
      , e = rt("font")
      , n = rt("text")
      , i = rt("font-weight")
      , o = rt("tracking")
      , l = rt("leading")
      , u = rt("breakpoint")
      , d = rt("container")
      , h = rt("spacing")
      , m = rt("radius")
      , g = rt("shadow")
      , y = rt("inset-shadow")
      , w = rt("text-shadow")
      , E = rt("drop-shadow")
      , k = rt("blur")
      , b = rt("perspective")
      , S = rt("aspect")
      , A = rt("ease")
      , V = rt("animate")
      , j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , D = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , B = () => [...D(), ne, te]
      , q = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , G = () => ["auto", "contain", "none"]
      , M = () => [ne, te, h]
      , X = () => [cr, "full", "auto", ...M()]
      , me = () => [dr, "none", "subgrid", ne, te]
      , de = () => ["auto", {
        span: ["full", dr, ne, te]
    }, dr, ne, te]
      , Te = () => [dr, "auto", ne, te]
      , Le = () => ["auto", "min", "max", "fr", ne, te]
      , Ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , Me = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , xe = () => ["auto", ...M()]
      , fe = () => [cr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()]
      , K = () => [cr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...M()]
      , se = () => [cr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...M()]
      , U = () => [t, ne, te]
      , N = () => [...D(), Lg, jg, {
        position: [ne, te]
    }]
      , z = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , ye = () => ["auto", "cover", "contain", Fk, jk, {
        size: [ne, te]
    }]
      , ve = () => [sd, ro, Wr]
      , le = () => ["", "none", "full", m, ne, te]
      , he = () => ["", Se, ro, Wr]
      , Ne = () => ["solid", "dashed", "dotted", "double"]
      , _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , we = () => [Se, sd, Lg, jg]
      , pt = () => ["", "none", k, ne, te]
      , Tn = () => ["none", Se, ne, te]
      , Or = () => ["none", Se, ne, te]
      , $n = () => [Se, ne, te]
      , Hn = () => [cr, "full", ...M()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Dn],
            breakpoint: [Dn],
            color: [S0],
            container: [Dn],
            "drop-shadow": [Dn],
            ease: ["in", "out", "in-out"],
            font: [Ok],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Dn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Dn],
            shadow: [Dn],
            spacing: ["px", Se],
            text: [Dn],
            "text-shadow": [Dn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", cr, te, ne, S]
            }],
            container: ["container"],
            columns: [{
                columns: [Se, te, ne, d]
            }],
            "break-after": [{
                "break-after": j()
            }],
            "break-before": [{
                "break-before": j()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: B()
            }],
            overflow: [{
                overflow: q()
            }],
            "overflow-x": [{
                "overflow-x": q()
            }],
            "overflow-y": [{
                "overflow-y": q()
            }],
            overscroll: [{
                overscroll: G()
            }],
            "overscroll-x": [{
                "overscroll-x": G()
            }],
            "overscroll-y": [{
                "overscroll-y": G()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: X()
            }],
            "inset-x": [{
                "inset-x": X()
            }],
            "inset-y": [{
                "inset-y": X()
            }],
            start: [{
                "inset-s": X(),
                start: X()
            }],
            end: [{
                "inset-e": X(),
                end: X()
            }],
            "inset-bs": [{
                "inset-bs": X()
            }],
            "inset-be": [{
                "inset-be": X()
            }],
            top: [{
                top: X()
            }],
            right: [{
                right: X()
            }],
            bottom: [{
                bottom: X()
            }],
            left: [{
                left: X()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [dr, "auto", ne, te]
            }],
            basis: [{
                basis: [cr, "full", "auto", d, ...M()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Se, cr, "auto", "initial", "none", te]
            }],
            grow: [{
                grow: ["", Se, ne, te]
            }],
            shrink: [{
                shrink: ["", Se, ne, te]
            }],
            order: [{
                order: [dr, "first", "last", "none", ne, te]
            }],
            "grid-cols": [{
                "grid-cols": me()
            }],
            "col-start-end": [{
                col: de()
            }],
            "col-start": [{
                "col-start": Te()
            }],
            "col-end": [{
                "col-end": Te()
            }],
            "grid-rows": [{
                "grid-rows": me()
            }],
            "row-start-end": [{
                row: de()
            }],
            "row-start": [{
                "row-start": Te()
            }],
            "row-end": [{
                "row-end": Te()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": Le()
            }],
            "auto-rows": [{
                "auto-rows": Le()
            }],
            gap: [{
                gap: M()
            }],
            "gap-x": [{
                "gap-x": M()
            }],
            "gap-y": [{
                "gap-y": M()
            }],
            "justify-content": [{
                justify: [...Ae(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...Me(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...Me()]
            }],
            "align-content": [{
                content: ["normal", ...Ae()]
            }],
            "align-items": [{
                items: [...Me(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...Me(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ae()
            }],
            "place-items": [{
                "place-items": [...Me(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...Me()]
            }],
            p: [{
                p: M()
            }],
            px: [{
                px: M()
            }],
            py: [{
                py: M()
            }],
            ps: [{
                ps: M()
            }],
            pe: [{
                pe: M()
            }],
            pbs: [{
                pbs: M()
            }],
            pbe: [{
                pbe: M()
            }],
            pt: [{
                pt: M()
            }],
            pr: [{
                pr: M()
            }],
            pb: [{
                pb: M()
            }],
            pl: [{
                pl: M()
            }],
            m: [{
                m: xe()
            }],
            mx: [{
                mx: xe()
            }],
            my: [{
                my: xe()
            }],
            ms: [{
                ms: xe()
            }],
            me: [{
                me: xe()
            }],
            mbs: [{
                mbs: xe()
            }],
            mbe: [{
                mbe: xe()
            }],
            mt: [{
                mt: xe()
            }],
            mr: [{
                mr: xe()
            }],
            mb: [{
                mb: xe()
            }],
            ml: [{
                ml: xe()
            }],
            "space-x": [{
                "space-x": M()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": M()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: fe()
            }],
            "inline-size": [{
                inline: ["auto", ...K()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...K()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...K()]
            }],
            "block-size": [{
                block: ["auto", ...se()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...se()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...se()]
            }],
            w: [{
                w: [d, "screen", ...fe()]
            }],
            "min-w": [{
                "min-w": [d, "screen", "none", ...fe()]
            }],
            "max-w": [{
                "max-w": [d, "screen", "none", "prose", {
                    screen: [u]
                }, ...fe()]
            }],
            h: [{
                h: ["screen", "lh", ...fe()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...fe()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...fe()]
            }],
            "font-size": [{
                text: ["base", n, ro, Wr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, Bk, Lk]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sd, te]
            }],
            "font-family": [{
                font: [Ik, Dk, e]
            }],
            "font-features": [{
                "font-features": [te]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [o, ne, te]
            }],
            "line-clamp": [{
                "line-clamp": [Se, "none", ne, Og]
            }],
            leading: [{
                leading: [l, ...M()]
            }],
            "list-image": [{
                "list-image": ["none", ne, te]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", ne, te]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: U()
            }],
            "text-color": [{
                text: U()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Ne(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Se, "from-font", "auto", ne, Wr]
            }],
            "text-decoration-color": [{
                decoration: U()
            }],
            "underline-offset": [{
                "underline-offset": [Se, "auto", ne, te]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: M()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, te]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ne, te]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: N()
            }],
            "bg-repeat": [{
                bg: z()
            }],
            "bg-size": [{
                bg: ye()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, dr, ne, te],
                    radial: ["", ne, te],
                    conic: [dr, ne, te]
                }, Vk, Mk]
            }],
            "bg-color": [{
                bg: U()
            }],
            "gradient-from-pos": [{
                from: ve()
            }],
            "gradient-via-pos": [{
                via: ve()
            }],
            "gradient-to-pos": [{
                to: ve()
            }],
            "gradient-from": [{
                from: U()
            }],
            "gradient-via": [{
                via: U()
            }],
            "gradient-to": [{
                to: U()
            }],
            rounded: [{
                rounded: le()
            }],
            "rounded-s": [{
                "rounded-s": le()
            }],
            "rounded-e": [{
                "rounded-e": le()
            }],
            "rounded-t": [{
                "rounded-t": le()
            }],
            "rounded-r": [{
                "rounded-r": le()
            }],
            "rounded-b": [{
                "rounded-b": le()
            }],
            "rounded-l": [{
                "rounded-l": le()
            }],
            "rounded-ss": [{
                "rounded-ss": le()
            }],
            "rounded-se": [{
                "rounded-se": le()
            }],
            "rounded-ee": [{
                "rounded-ee": le()
            }],
            "rounded-es": [{
                "rounded-es": le()
            }],
            "rounded-tl": [{
                "rounded-tl": le()
            }],
            "rounded-tr": [{
                "rounded-tr": le()
            }],
            "rounded-br": [{
                "rounded-br": le()
            }],
            "rounded-bl": [{
                "rounded-bl": le()
            }],
            "border-w": [{
                border: he()
            }],
            "border-w-x": [{
                "border-x": he()
            }],
            "border-w-y": [{
                "border-y": he()
            }],
            "border-w-s": [{
                "border-s": he()
            }],
            "border-w-e": [{
                "border-e": he()
            }],
            "border-w-bs": [{
                "border-bs": he()
            }],
            "border-w-be": [{
                "border-be": he()
            }],
            "border-w-t": [{
                "border-t": he()
            }],
            "border-w-r": [{
                "border-r": he()
            }],
            "border-w-b": [{
                "border-b": he()
            }],
            "border-w-l": [{
                "border-l": he()
            }],
            "divide-x": [{
                "divide-x": he()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": he()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Ne(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Ne(), "hidden", "none"]
            }],
            "border-color": [{
                border: U()
            }],
            "border-color-x": [{
                "border-x": U()
            }],
            "border-color-y": [{
                "border-y": U()
            }],
            "border-color-s": [{
                "border-s": U()
            }],
            "border-color-e": [{
                "border-e": U()
            }],
            "border-color-bs": [{
                "border-bs": U()
            }],
            "border-color-be": [{
                "border-be": U()
            }],
            "border-color-t": [{
                "border-t": U()
            }],
            "border-color-r": [{
                "border-r": U()
            }],
            "border-color-b": [{
                "border-b": U()
            }],
            "border-color-l": [{
                "border-l": U()
            }],
            "divide-color": [{
                divide: U()
            }],
            "outline-style": [{
                outline: [...Ne(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Se, ne, te]
            }],
            "outline-w": [{
                outline: ["", Se, ro, Wr]
            }],
            "outline-color": [{
                outline: U()
            }],
            shadow: [{
                shadow: ["", "none", g, al, ol]
            }],
            "shadow-color": [{
                shadow: U()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, al, ol]
            }],
            "inset-shadow-color": [{
                "inset-shadow": U()
            }],
            "ring-w": [{
                ring: he()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: U()
            }],
            "ring-offset-w": [{
                "ring-offset": [Se, Wr]
            }],
            "ring-offset-color": [{
                "ring-offset": U()
            }],
            "inset-ring-w": [{
                "inset-ring": he()
            }],
            "inset-ring-color": [{
                "inset-ring": U()
            }],
            "text-shadow": [{
                "text-shadow": ["none", w, al, ol]
            }],
            "text-shadow-color": [{
                "text-shadow": U()
            }],
            opacity: [{
                opacity: [Se, ne, te]
            }],
            "mix-blend": [{
                "mix-blend": [..._e(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": _e()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Se]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": we()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": we()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": U()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": U()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": we()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": we()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": U()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": U()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": we()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": we()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": U()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": U()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": we()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": we()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": U()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": U()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": we()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": we()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": U()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": U()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": we()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": we()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": U()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": U()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": we()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": we()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": U()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": U()
            }],
            "mask-image-radial": [{
                "mask-radial": [ne, te]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": we()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": we()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": U()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": U()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": D()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Se]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": we()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": we()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": U()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": U()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: N()
            }],
            "mask-repeat": [{
                mask: z()
            }],
            "mask-size": [{
                mask: ye()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", ne, te]
            }],
            filter: [{
                filter: ["", "none", ne, te]
            }],
            blur: [{
                blur: pt()
            }],
            brightness: [{
                brightness: [Se, ne, te]
            }],
            contrast: [{
                contrast: [Se, ne, te]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", E, al, ol]
            }],
            "drop-shadow-color": [{
                "drop-shadow": U()
            }],
            grayscale: [{
                grayscale: ["", Se, ne, te]
            }],
            "hue-rotate": [{
                "hue-rotate": [Se, ne, te]
            }],
            invert: [{
                invert: ["", Se, ne, te]
            }],
            saturate: [{
                saturate: [Se, ne, te]
            }],
            sepia: [{
                sepia: ["", Se, ne, te]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", ne, te]
            }],
            "backdrop-blur": [{
                "backdrop-blur": pt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Se, ne, te]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Se, ne, te]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Se, ne, te]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Se, ne, te]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Se, ne, te]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Se, ne, te]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Se, ne, te]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Se, ne, te]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": M()
            }],
            "border-spacing-x": [{
                "border-spacing-x": M()
            }],
            "border-spacing-y": [{
                "border-spacing-y": M()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, te]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Se, "initial", ne, te]
            }],
            ease: [{
                ease: ["linear", "initial", A, ne, te]
            }],
            delay: [{
                delay: [Se, ne, te]
            }],
            animate: [{
                animate: ["none", V, ne, te]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [b, ne, te]
            }],
            "perspective-origin": [{
                "perspective-origin": B()
            }],
            rotate: [{
                rotate: Tn()
            }],
            "rotate-x": [{
                "rotate-x": Tn()
            }],
            "rotate-y": [{
                "rotate-y": Tn()
            }],
            "rotate-z": [{
                "rotate-z": Tn()
            }],
            scale: [{
                scale: Or()
            }],
            "scale-x": [{
                "scale-x": Or()
            }],
            "scale-y": [{
                "scale-y": Or()
            }],
            "scale-z": [{
                "scale-z": Or()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: $n()
            }],
            "skew-x": [{
                "skew-x": $n()
            }],
            "skew-y": [{
                "skew-y": $n()
            }],
            transform: [{
                transform: [ne, te, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: B()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Hn()
            }],
            "translate-x": [{
                "translate-x": Hn()
            }],
            "translate-y": [{
                "translate-y": Hn()
            }],
            "translate-z": [{
                "translate-z": Hn()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: U()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: U()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, te]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": M()
            }],
            "scroll-mx": [{
                "scroll-mx": M()
            }],
            "scroll-my": [{
                "scroll-my": M()
            }],
            "scroll-ms": [{
                "scroll-ms": M()
            }],
            "scroll-me": [{
                "scroll-me": M()
            }],
            "scroll-mbs": [{
                "scroll-mbs": M()
            }],
            "scroll-mbe": [{
                "scroll-mbe": M()
            }],
            "scroll-mt": [{
                "scroll-mt": M()
            }],
            "scroll-mr": [{
                "scroll-mr": M()
            }],
            "scroll-mb": [{
                "scroll-mb": M()
            }],
            "scroll-ml": [{
                "scroll-ml": M()
            }],
            "scroll-p": [{
                "scroll-p": M()
            }],
            "scroll-px": [{
                "scroll-px": M()
            }],
            "scroll-py": [{
                "scroll-py": M()
            }],
            "scroll-ps": [{
                "scroll-ps": M()
            }],
            "scroll-pe": [{
                "scroll-pe": M()
            }],
            "scroll-pbs": [{
                "scroll-pbs": M()
            }],
            "scroll-pbe": [{
                "scroll-pbe": M()
            }],
            "scroll-pt": [{
                "scroll-pt": M()
            }],
            "scroll-pr": [{
                "scroll-pr": M()
            }],
            "scroll-pb": [{
                "scroll-pb": M()
            }],
            "scroll-pl": [{
                "scroll-pl": M()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ne, te]
            }],
            fill: [{
                fill: ["none", ...U()]
            }],
            "stroke-w": [{
                stroke: [Se, ro, Wr, Og]
            }],
            stroke: [{
                stroke: ["none", ...U()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , $k = Sk(zk);
function Rr(...t) {
    return $k(d0(t))
}
const R0 = _.forwardRef( ({...t}, e) => x.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
R0.displayName = "ToastProvider";
const A0 = _.forwardRef( ({...t}, e) => x.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
A0.displayName = "ToastViewport";
const Hk = f0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , N0 = _.forwardRef( ({className: t, variant: e, ...n}, i) => x.jsx("div", {
    ref: i,
    className: Rr(Hk({
        variant: e
    }), t),
    ...n
}));
N0.displayName = "Toast";
const qk = _.forwardRef( ({className: t, ...e}, n) => x.jsx("div", {
    ref: n,
    className: Rr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
qk.displayName = "ToastAction";
const O0 = _.forwardRef( ({className: t, ...e}, n) => x.jsx("button", {
    ref: n,
    className: Rr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: x.jsx(ek, {
        className: "h-4 w-4"
    })
}));
O0.displayName = "ToastClose";
const j0 = _.forwardRef( ({className: t, ...e}, n) => x.jsx("div", {
    ref: n,
    className: Rr("text-sm font-semibold", t),
    ...e
}));
j0.displayName = "ToastTitle";
const L0 = _.forwardRef( ({className: t, ...e}, n) => x.jsx("div", {
    ref: n,
    className: Rr("text-sm opacity-90", t),
    ...e
}));
L0.displayName = "ToastDescription";
function Wk() {
    const {toasts: t} = Nb();
    return x.jsxs(R0, {
        children: [t.map(function({id: e, title: n, description: i, action: o, ...l}) {
            return x.jsxs(N0, {
                ...l,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && x.jsx(j0, {
                        children: n
                    }), i && x.jsx(L0, {
                        children: i
                    })]
                }), o, x.jsx(O0, {})]
            }, e)
        }), x.jsx(A0, {})]
    })
}
var Vo = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, Kk = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, pr, Sf, Xv, Qk = (Xv = class {
    constructor() {
        ue(this, pr, Kk);
        ue(this, Sf, !1)
    }
    setTimeoutProvider(t) {
        J(this, pr, t)
    }
    setTimeout(t, e) {
        return P(this, pr).setTimeout(t, e)
    }
    clearTimeout(t) {
        P(this, pr).clearTimeout(t)
    }
    setInterval(t, e) {
        return P(this, pr).setInterval(t, e)
    }
    clearInterval(t) {
        P(this, pr).clearInterval(t)
    }
}
,
pr = new WeakMap,
Sf = new WeakMap,
Xv), Yr = new Qk;
function Gk(t) {
    setTimeout(t, 0)
}
var ds = typeof window > "u" || "Deno"in globalThis;
function jt() {}
function Yk(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Nd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function D0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function kr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Jt(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Dg(t, e) {
    const {type: n="all", exact: i, fetchStatus: o, predicate: l, queryKey: u, stale: d} = t;
    if (u) {
        if (i) {
            if (e.queryHash !== Tf(u, e.options))
                return !1
        } else if (!Eo(e.queryKey, u))
            return !1
    }
    if (n !== "all") {
        const h = e.isActive();
        if (n === "active" && !h || n === "inactive" && h)
            return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || o && o !== e.state.fetchStatus || l && !l(e))
}
function Mg(t, e) {
    const {exact: n, status: i, predicate: o, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (n) {
            if (ko(e.options.mutationKey) !== ko(l))
                return !1
        } else if (!Eo(e.options.mutationKey, l))
            return !1
    }
    return !(i && e.state.status !== i || o && !o(e))
}
function Tf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || ko)(t)
}
function ko(t) {
    return JSON.stringify(t, (e, n) => jd(n) ? Object.keys(n).sort().reduce( (i, o) => (i[o] = n[o],
    i), {}) : n)
}
function Eo(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(n => Eo(t[n], e[n])) : !1
}
var Xk = Object.prototype.hasOwnProperty;
function M0(t, e, n=0) {
    if (t === e)
        return t;
    if (n > 500)
        return e;
    const i = Ig(t) && Ig(e);
    if (!i && !(jd(t) && jd(e)))
        return e;
    const l = (i ? t : Object.keys(t)).length
      , u = i ? e : Object.keys(e)
      , d = u.length
      , h = i ? new Array(d) : {};
    let m = 0;
    for (let g = 0; g < d; g++) {
        const y = i ? g : u[g]
          , w = t[y]
          , E = e[y];
        if (w === E) {
            h[y] = w,
            (i ? g < l : Xk.call(t, y)) && m++;
            continue
        }
        if (w === null || E === null || typeof w != "object" || typeof E != "object") {
            h[y] = E;
            continue
        }
        const k = M0(w, E, n + 1);
        h[y] = k,
        k === w && m++
    }
    return l === d && m === l ? t : h
}
function Od(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function Ig(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function jd(t) {
    if (!Fg(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const n = e.prototype;
    return !(!Fg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Fg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function Jk(t) {
    return new Promise(e => {
        Yr.setTimeout(e, t)
    }
    )
}
function Ld(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? M0(t, e) : e
}
function Zk(t, e, n=0) {
    const i = [...t, e];
    return n && i.length > n ? i.slice(1) : i
}
function eE(t, e, n=0) {
    const i = [e, ...t];
    return n && i.length > n ? i.slice(0, -1) : i
}
var Pf = Symbol();
function I0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Pf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function F0(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function tE(t, e, n) {
    let i = !1, o;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (o ?? (o = e()),
        i || (i = !0,
        o.aborted ? n() : o.addEventListener("abort", n, {
            once: !0
        })),
        o)
    }),
    t
}
var es, mr, Gs, Jv, nE = (Jv = class extends Vo {
    constructor() {
        super();
        ue(this, es);
        ue(this, mr);
        ue(this, Gs);
        J(this, Gs, e => {
            if (!ds && window.addEventListener) {
                const n = () => e();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, mr) || this.setEventListener(P(this, Gs))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = P(this, mr)) == null || e.call(this),
        J(this, mr, void 0))
    }
    setEventListener(e) {
        var n;
        J(this, Gs, e),
        (n = P(this, mr)) == null || n.call(this),
        J(this, mr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        P(this, es) !== e && (J(this, es, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(n => {
            n(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof P(this, es) == "boolean" ? P(this, es) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
es = new WeakMap,
mr = new WeakMap,
Gs = new WeakMap,
Jv), _f = new nE;
function Dd() {
    let t, e;
    const n = new Promise( (o, l) => {
        t = o,
        e = l
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function i(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        i({
            status: "fulfilled",
            value: o
        }),
        t(o)
    }
    ,
    n.reject = o => {
        i({
            status: "rejected",
            reason: o
        }),
        e(o)
    }
    ,
    n
}
var rE = Gk;
function sE() {
    let t = []
      , e = 0
      , n = d => {
        d()
    }
      , i = d => {
        d()
    }
      , o = rE;
    const l = d => {
        e ? t.push(d) : o( () => {
            n(d)
        }
        )
    }
      , u = () => {
        const d = t;
        t = [],
        d.length && o( () => {
            i( () => {
                d.forEach(h => {
                    n(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let h;
            e++;
            try {
                h = d()
            } finally {
                e--,
                e || u()
            }
            return h
        }
        ,
        batchCalls: d => (...h) => {
            l( () => {
                d(...h)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d => {
            n = d
        }
        ,
        setBatchNotifyFunction: d => {
            i = d
        }
        ,
        setScheduler: d => {
            o = d
        }
    }
}
var ft = sE(), Ys, gr, Xs, Zv, iE = (Zv = class extends Vo {
    constructor() {
        super();
        ue(this, Ys, !0);
        ue(this, gr);
        ue(this, Xs);
        J(this, Xs, e => {
            if (!ds && window.addEventListener) {
                const n = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, gr) || this.setEventListener(P(this, Xs))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = P(this, gr)) == null || e.call(this),
        J(this, gr, void 0))
    }
    setEventListener(e) {
        var n;
        J(this, Xs, e),
        (n = P(this, gr)) == null || n.call(this),
        J(this, gr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        P(this, Ys) !== e && (J(this, Ys, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return P(this, Ys)
    }
}
,
Ys = new WeakMap,
gr = new WeakMap,
Xs = new WeakMap,
Zv), Nl = new iE;
function oE(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function V0(t) {
    return (t ?? "online") === "online" ? Nl.isOnline() : !0
}
var Md = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function B0(t) {
    let e = !1, n = 0, i;
    const o = Dd()
      , l = () => o.status !== "pending"
      , u = b => {
        var S;
        if (!l()) {
            const A = new Md(b);
            w(A),
            (S = t.onCancel) == null || S.call(t, A)
        }
    }
      , d = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => _f.isFocused() && (t.networkMode === "always" || Nl.isOnline()) && t.canRun()
      , g = () => V0(t.networkMode) && t.canRun()
      , y = b => {
        l() || (i == null || i(),
        o.resolve(b))
    }
      , w = b => {
        l() || (i == null || i(),
        o.reject(b))
    }
      , E = () => new Promise(b => {
        var S;
        i = A => {
            (l() || m()) && b(A)
        }
        ,
        (S = t.onPause) == null || S.call(t)
    }
    ).then( () => {
        var b;
        i = void 0,
        l() || (b = t.onContinue) == null || b.call(t)
    }
    )
      , k = () => {
        if (l())
            return;
        let b;
        const S = n === 0 ? t.initialPromise : void 0;
        try {
            b = S ?? t.fn()
        } catch (A) {
            b = Promise.reject(A)
        }
        Promise.resolve(b).then(y).catch(A => {
            var q;
            if (l())
                return;
            const V = t.retry ?? (ds ? 0 : 3)
              , j = t.retryDelay ?? oE
              , D = typeof j == "function" ? j(n, A) : j
              , B = V === !0 || typeof V == "number" && n < V || typeof V == "function" && V(n, A);
            if (e || !B) {
                w(A);
                return
            }
            n++,
            (q = t.onFail) == null || q.call(t, n, A),
            Jk(D).then( () => m() ? void 0 : E()).then( () => {
                e ? w(A) : k()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        status: () => o.status,
        cancel: u,
        continue: () => (i == null || i(),
        o),
        cancelRetry: d,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? k() : E().then(k),
        o)
    }
}
var ts, e0, U0 = (e0 = class {
    constructor() {
        ue(this, ts)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Nd(this.gcTime) && J(this, ts, Yr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (ds ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        P(this, ts) && (Yr.clearTimeout(P(this, ts)),
        J(this, ts, void 0))
    }
}
,
ts = new WeakMap,
e0), ns, Js, Xt, rs, at, Lo, ss, cn, Mn, t0, aE = (t0 = class extends U0 {
    constructor(e) {
        super();
        ue(this, cn);
        ue(this, ns);
        ue(this, Js);
        ue(this, Xt);
        ue(this, rs);
        ue(this, at);
        ue(this, Lo);
        ue(this, ss);
        J(this, ss, !1),
        J(this, Lo, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        J(this, rs, e.client),
        J(this, Xt, P(this, rs).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        J(this, ns, Bg(this.options)),
        this.state = e.state ?? P(this, ns),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = P(this, at)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ...P(this, Lo),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const n = Bg(this.options);
            n.data !== void 0 && (this.setState(Vg(n.data, n.dataUpdatedAt)),
            J(this, ns, n))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, Xt).remove(this)
    }
    setData(e, n) {
        const i = Ld(this.state.data, e, this.options);
        return ke(this, cn, Mn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        i
    }
    setState(e, n) {
        ke(this, cn, Mn).call(this, {
            type: "setState",
            state: e,
            setStateOptions: n
        })
    }
    cancel(e) {
        var i, o;
        const n = (i = P(this, at)) == null ? void 0 : i.promise;
        return (o = P(this, at)) == null || o.cancel(e),
        n ? n.then(jt).catch(jt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, ns))
    }
    isActive() {
        return this.observers.some(e => Jt(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Pf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => kr(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !D0(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var n;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, at)) == null || n.continue()
    }
    onOnline() {
        var n;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, at)) == null || n.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        P(this, Xt).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e),
        this.observers.length || (P(this, at) && (P(this, ss) ? P(this, at).cancel({
            revert: !0
        }) : P(this, at).cancelRetry()),
        this.scheduleGc()),
        P(this, Xt).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || ke(this, cn, Mn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, n) {
        var h, m, g, y, w, E, k, b, S, A, V, j;
        if (this.state.fetchStatus !== "idle" && ((h = P(this, at)) == null ? void 0 : h.status()) !== "rejected") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, at))
                return P(this, at).continueRetry(),
                P(this, at).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const D = this.observers.find(B => B.options.queryFn);
            D && this.setOptions(D.options)
        }
        const i = new AbortController
          , o = D => {
            Object.defineProperty(D, "signal", {
                enumerable: !0,
                get: () => (J(this, ss, !0),
                i.signal)
            })
        }
          , l = () => {
            const D = I0(this.options, n)
              , q = ( () => {
                const G = {
                    client: P(this, rs),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(G),
                G
            }
            )();
            return J(this, ss, !1),
            this.options.persister ? this.options.persister(D, q, this) : D(q)
        }
          , d = ( () => {
            const D = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, rs),
                state: this.state,
                fetchFn: l
            };
            return o(D),
            D
        }
        )();
        (m = this.options.behavior) == null || m.onFetch(d, this),
        J(this, Js, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) && ke(this, cn, Mn).call(this, {
            type: "fetch",
            meta: (y = d.fetchOptions) == null ? void 0 : y.meta
        }),
        J(this, at, B0({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: d.fetchFn,
            onCancel: D => {
                D instanceof Md && D.revert && this.setState({
                    ...P(this, Js),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (D, B) => {
                ke(this, cn, Mn).call(this, {
                    type: "failed",
                    failureCount: D,
                    error: B
                })
            }
            ,
            onPause: () => {
                ke(this, cn, Mn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, cn, Mn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        }));
        try {
            const D = await P(this, at).start();
            if (D === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(D),
            (E = (w = P(this, Xt).config).onSuccess) == null || E.call(w, D, this),
            (b = (k = P(this, Xt).config).onSettled) == null || b.call(k, D, this.state.error, this),
            D
        } catch (D) {
            if (D instanceof Md) {
                if (D.silent)
                    return P(this, at).promise;
                if (D.revert) {
                    if (this.state.data === void 0)
                        throw D;
                    return this.state.data
                }
            }
            throw ke(this, cn, Mn).call(this, {
                type: "error",
                error: D
            }),
            (A = (S = P(this, Xt).config).onError) == null || A.call(S, D, this),
            (j = (V = P(this, Xt).config).onSettled) == null || j.call(V, this.state.data, D, this),
            D
        } finally {
            this.scheduleGc()
        }
    }
}
,
ns = new WeakMap,
Js = new WeakMap,
Xt = new WeakMap,
rs = new WeakMap,
at = new WeakMap,
Lo = new WeakMap,
ss = new WeakMap,
cn = new WeakSet,
Mn = function(e) {
    const n = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...z0(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const o = {
                ...i,
                ...Vg(e.data, e.dataUpdatedAt),
                dataUpdateCount: i.dataUpdateCount + 1,
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return J(this, Js, e.manual ? o : void 0),
            o;
        case "error":
            const l = e.error;
            return {
                ...i,
                error: l,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = n(this.state),
    ft.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        P(this, Xt).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
t0);
function z0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: V0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Vg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function Bg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , n = e !== void 0
      , i = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ot, Ee, Do, Ct, is, Zs, In, yr, Mo, ei, ti, os, as, vr, ni, Oe, lo, Id, Fd, Vd, Bd, Ud, zd, $d, $0, n0, lE = (n0 = class extends Vo {
    constructor(e, n) {
        super();
        ue(this, Oe);
        ue(this, Ot);
        ue(this, Ee);
        ue(this, Do);
        ue(this, Ct);
        ue(this, is);
        ue(this, Zs);
        ue(this, In);
        ue(this, yr);
        ue(this, Mo);
        ue(this, ei);
        ue(this, ti);
        ue(this, os);
        ue(this, as);
        ue(this, vr);
        ue(this, ni, new Set);
        this.options = n,
        J(this, Ot, e),
        J(this, yr, null),
        J(this, In, Dd()),
        this.bindMethods(),
        this.setOptions(n)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, Ee).addObserver(this),
        Ug(P(this, Ee), this.options) ? ke(this, Oe, lo).call(this) : this.updateResult(),
        ke(this, Oe, Bd).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Hd(P(this, Ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Hd(P(this, Ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        ke(this, Oe, Ud).call(this),
        ke(this, Oe, zd).call(this),
        P(this, Ee).removeObserver(this)
    }
    setOptions(e) {
        const n = this.options
          , i = P(this, Ee);
        if (this.options = P(this, Ot).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Jt(this.options.enabled, P(this, Ee)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        ke(this, Oe, $d).call(this),
        P(this, Ee).setOptions(this.options),
        n._defaulted && !Od(this.options, n) && P(this, Ot).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, Ee),
            observer: this
        });
        const o = this.hasListeners();
        o && zg(P(this, Ee), i, this.options, n) && ke(this, Oe, lo).call(this),
        this.updateResult(),
        o && (P(this, Ee) !== i || Jt(this.options.enabled, P(this, Ee)) !== Jt(n.enabled, P(this, Ee)) || kr(this.options.staleTime, P(this, Ee)) !== kr(n.staleTime, P(this, Ee))) && ke(this, Oe, Id).call(this);
        const l = ke(this, Oe, Fd).call(this);
        o && (P(this, Ee) !== i || Jt(this.options.enabled, P(this, Ee)) !== Jt(n.enabled, P(this, Ee)) || l !== P(this, vr)) && ke(this, Oe, Vd).call(this, l)
    }
    getOptimisticResult(e) {
        const n = P(this, Ot).getQueryCache().build(P(this, Ot), e)
          , i = this.createResult(n, e);
        return cE(this, i) && (J(this, Ct, i),
        J(this, Zs, this.options),
        J(this, is, P(this, Ee).state)),
        i
    }
    getCurrentResult() {
        return P(this, Ct)
    }
    trackResult(e, n) {
        return new Proxy(e,{
            get: (i, o) => (this.trackProp(o),
            n == null || n(o),
            o === "promise" && (this.trackProp("data"),
            !this.options.experimental_prefetchInRender && P(this, In).status === "pending" && P(this, In).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
            Reflect.get(i, o))
        })
    }
    trackProp(e) {
        P(this, ni).add(e)
    }
    getCurrentQuery() {
        return P(this, Ee)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const n = P(this, Ot).defaultQueryOptions(e)
          , i = P(this, Ot).getQueryCache().build(P(this, Ot), n);
        return i.fetch().then( () => this.createResult(i, n))
    }
    fetch(e) {
        return ke(this, Oe, lo).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        P(this, Ct)))
    }
    createResult(e, n) {
        var X;
        const i = P(this, Ee)
          , o = this.options
          , l = P(this, Ct)
          , u = P(this, is)
          , d = P(this, Zs)
          , m = e !== i ? e.state : P(this, Do)
          , {state: g} = e;
        let y = {
            ...g
        }, w = !1, E;
        if (n._optimisticResults) {
            const me = this.hasListeners()
              , de = !me && Ug(e, n)
              , Te = me && zg(e, i, n, o);
            (de || Te) && (y = {
                ...y,
                ...z0(g.data, e.options)
            }),
            n._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: k, errorUpdatedAt: b, status: S} = y;
        E = y.data;
        let A = !1;
        if (n.placeholderData !== void 0 && E === void 0 && S === "pending") {
            let me;
            l != null && l.isPlaceholderData && n.placeholderData === (d == null ? void 0 : d.placeholderData) ? (me = l.data,
            A = !0) : me = typeof n.placeholderData == "function" ? n.placeholderData((X = P(this, ti)) == null ? void 0 : X.state.data, P(this, ti)) : n.placeholderData,
            me !== void 0 && (S = "success",
            E = Ld(l == null ? void 0 : l.data, me, n),
            w = !0)
        }
        if (n.select && E !== void 0 && !A)
            if (l && E === (u == null ? void 0 : u.data) && n.select === P(this, Mo))
                E = P(this, ei);
            else
                try {
                    J(this, Mo, n.select),
                    E = n.select(E),
                    E = Ld(l == null ? void 0 : l.data, E, n),
                    J(this, ei, E),
                    J(this, yr, null)
                } catch (me) {
                    J(this, yr, me)
                }
        P(this, yr) && (k = P(this, yr),
        E = P(this, ei),
        b = Date.now(),
        S = "error");
        const V = y.fetchStatus === "fetching"
          , j = S === "pending"
          , D = S === "error"
          , B = j && V
          , q = E !== void 0
          , M = {
            status: S,
            fetchStatus: y.fetchStatus,
            isPending: j,
            isSuccess: S === "success",
            isError: D,
            isInitialLoading: B,
            isLoading: B,
            data: E,
            dataUpdatedAt: y.dataUpdatedAt,
            error: k,
            errorUpdatedAt: b,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
            isFetching: V,
            isRefetching: V && !j,
            isLoadingError: D && !q,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: D && q,
            isStale: Rf(e, n),
            refetch: this.refetch,
            promise: P(this, In),
            isEnabled: Jt(n.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const me = M.data !== void 0
              , de = M.status === "error" && !me
              , Te = Me => {
                de ? Me.reject(M.error) : me && Me.resolve(M.data)
            }
              , Le = () => {
                const Me = J(this, In, M.promise = Dd());
                Te(Me)
            }
              , Ae = P(this, In);
            switch (Ae.status) {
            case "pending":
                e.queryHash === i.queryHash && Te(Ae);
                break;
            case "fulfilled":
                (de || M.data !== Ae.value) && Le();
                break;
            case "rejected":
                (!de || M.error !== Ae.reason) && Le();
                break
            }
        }
        return M
    }
    updateResult() {
        const e = P(this, Ct)
          , n = this.createResult(P(this, Ee), this.options);
        if (J(this, is, P(this, Ee).state),
        J(this, Zs, this.options),
        P(this, is).data !== void 0 && J(this, ti, P(this, Ee)),
        Od(n, e))
            return;
        J(this, Ct, n);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: o} = this.options
              , l = typeof o == "function" ? o() : o;
            if (l === "all" || !l && !P(this, ni).size)
                return !0;
            const u = new Set(l ?? P(this, ni));
            return this.options.throwOnError && u.add("error"),
            Object.keys(P(this, Ct)).some(d => {
                const h = d;
                return P(this, Ct)[h] !== e[h] && u.has(h)
            }
            )
        }
        ;
        ke(this, Oe, $0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && ke(this, Oe, Bd).call(this)
    }
}
,
Ot = new WeakMap,
Ee = new WeakMap,
Do = new WeakMap,
Ct = new WeakMap,
is = new WeakMap,
Zs = new WeakMap,
In = new WeakMap,
yr = new WeakMap,
Mo = new WeakMap,
ei = new WeakMap,
ti = new WeakMap,
os = new WeakMap,
as = new WeakMap,
vr = new WeakMap,
ni = new WeakMap,
Oe = new WeakSet,
lo = function(e) {
    ke(this, Oe, $d).call(this);
    let n = P(this, Ee).fetch(this.options, e);
    return e != null && e.throwOnError || (n = n.catch(jt)),
    n
}
,
Id = function() {
    ke(this, Oe, Ud).call(this);
    const e = kr(this.options.staleTime, P(this, Ee));
    if (ds || P(this, Ct).isStale || !Nd(e))
        return;
    const i = D0(P(this, Ct).dataUpdatedAt, e) + 1;
    J(this, os, Yr.setTimeout( () => {
        P(this, Ct).isStale || this.updateResult()
    }
    , i))
}
,
Fd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, Ee)) : this.options.refetchInterval) ?? !1
}
,
Vd = function(e) {
    ke(this, Oe, zd).call(this),
    J(this, vr, e),
    !(ds || Jt(this.options.enabled, P(this, Ee)) === !1 || !Nd(P(this, vr)) || P(this, vr) === 0) && J(this, as, Yr.setInterval( () => {
        (this.options.refetchIntervalInBackground || _f.isFocused()) && ke(this, Oe, lo).call(this)
    }
    , P(this, vr)))
}
,
Bd = function() {
    ke(this, Oe, Id).call(this),
    ke(this, Oe, Vd).call(this, ke(this, Oe, Fd).call(this))
}
,
Ud = function() {
    P(this, os) && (Yr.clearTimeout(P(this, os)),
    J(this, os, void 0))
}
,
zd = function() {
    P(this, as) && (Yr.clearInterval(P(this, as)),
    J(this, as, void 0))
}
,
$d = function() {
    const e = P(this, Ot).getQueryCache().build(P(this, Ot), this.options);
    if (e === P(this, Ee))
        return;
    const n = P(this, Ee);
    J(this, Ee, e),
    J(this, Do, e.state),
    this.hasListeners() && (n == null || n.removeObserver(this),
    e.addObserver(this))
}
,
$0 = function(e) {
    ft.batch( () => {
        e.listeners && this.listeners.forEach(n => {
            n(P(this, Ct))
        }
        ),
        P(this, Ot).getQueryCache().notify({
            query: P(this, Ee),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
n0);
function uE(t, e) {
    return Jt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function Ug(t, e) {
    return uE(t, e) || t.state.data !== void 0 && Hd(t, e, e.refetchOnMount)
}
function Hd(t, e, n) {
    if (Jt(e.enabled, t) !== !1 && kr(e.staleTime, t) !== "static") {
        const i = typeof n == "function" ? n(t) : n;
        return i === "always" || i !== !1 && Rf(t, e)
    }
    return !1
}
function zg(t, e, n, i) {
    return (t !== e || Jt(i.enabled, t) === !1) && (!n.suspense || t.state.status !== "error") && Rf(t, n)
}
function Rf(t, e) {
    return Jt(e.enabled, t) !== !1 && t.isStaleByTime(kr(e.staleTime, t))
}
function cE(t, e) {
    return !Od(t.getCurrentResult(), e)
}
function $g(t) {
    return {
        onFetch: (e, n) => {
            var g, y, w, E, k;
            const i = e.options
              , o = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction
              , l = ((E = e.state.data) == null ? void 0 : E.pages) || []
              , u = ((k = e.state.data) == null ? void 0 : k.pageParams) || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let b = !1;
                const S = j => {
                    tE(j, () => e.signal, () => b = !0)
                }
                  , A = I0(e.options, e.fetchOptions)
                  , V = async (j, D, B) => {
                    if (b)
                        return Promise.reject();
                    if (D == null && j.pages.length)
                        return Promise.resolve(j);
                    const G = ( () => {
                        const de = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: D,
                            direction: B ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return S(de),
                        de
                    }
                    )()
                      , M = await A(G)
                      , {maxPages: X} = e.options
                      , me = B ? eE : Zk;
                    return {
                        pages: me(j.pages, M, X),
                        pageParams: me(j.pageParams, D, X)
                    }
                }
                ;
                if (o && l.length) {
                    const j = o === "backward"
                      , D = j ? dE : Hg
                      , B = {
                        pages: l,
                        pageParams: u
                    }
                      , q = D(i, B);
                    d = await V(B, q, j)
                } else {
                    const j = t ?? l.length;
                    do {
                        const D = h === 0 ? u[0] ?? i.initialPageParam : Hg(i, d);
                        if (h > 0 && D == null)
                            break;
                        d = await V(d, D),
                        h++
                    } while (h < j)
                }
                return d
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var b, S;
                return (S = (b = e.options).persister) == null ? void 0 : S.call(b, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, n)
            }
            : e.fetchFn = m
        }
    }
}
function Hg(t, {pages: e, pageParams: n}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0
}
function dE(t, {pages: e, pageParams: n}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, n[0], n) : void 0
}
var Io, wn, wt, ls, xn, fr, r0, fE = (r0 = class extends U0 {
    constructor(e) {
        super();
        ue(this, xn);
        ue(this, Io);
        ue(this, wn);
        ue(this, wt);
        ue(this, ls);
        J(this, Io, e.client),
        this.mutationId = e.mutationId,
        J(this, wt, e.mutationCache),
        J(this, wn, []),
        this.state = e.state || hE(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        P(this, wn).includes(e) || (P(this, wn).push(e),
        this.clearGcTimeout(),
        P(this, wt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        J(this, wn, P(this, wn).filter(n => n !== e)),
        this.scheduleGc(),
        P(this, wt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        P(this, wn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, wt).remove(this))
    }
    continue() {
        var e;
        return ((e = P(this, ls)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var u, d, h, m, g, y, w, E, k, b, S, A, V, j, D, B, q, G;
        const n = () => {
            ke(this, xn, fr).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: P(this, Io),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        J(this, ls, B0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, X) => {
                ke(this, xn, fr).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: X
                })
            }
            ,
            onPause: () => {
                ke(this, xn, fr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, wt).canRun(this)
        }));
        const o = this.state.status === "pending"
          , l = !P(this, ls).canStart();
        try {
            if (o)
                n();
            else {
                ke(this, xn, fr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }),
                P(this, wt).config.onMutate && await P(this, wt).config.onMutate(e, this, i);
                const X = await ((d = (u = this.options).onMutate) == null ? void 0 : d.call(u, e, i));
                X !== this.state.context && ke(this, xn, fr).call(this, {
                    type: "pending",
                    context: X,
                    variables: e,
                    isPaused: l
                })
            }
            const M = await P(this, ls).start();
            return await ((m = (h = P(this, wt).config).onSuccess) == null ? void 0 : m.call(h, M, e, this.state.context, this, i)),
            await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, M, e, this.state.context, i)),
            await ((E = (w = P(this, wt).config).onSettled) == null ? void 0 : E.call(w, M, null, this.state.variables, this.state.context, this, i)),
            await ((b = (k = this.options).onSettled) == null ? void 0 : b.call(k, M, null, e, this.state.context, i)),
            ke(this, xn, fr).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                await ((A = (S = P(this, wt).config).onError) == null ? void 0 : A.call(S, M, e, this.state.context, this, i))
            } catch (X) {
                Promise.reject(X)
            }
            try {
                await ((j = (V = this.options).onError) == null ? void 0 : j.call(V, M, e, this.state.context, i))
            } catch (X) {
                Promise.reject(X)
            }
            try {
                await ((B = (D = P(this, wt).config).onSettled) == null ? void 0 : B.call(D, void 0, M, this.state.variables, this.state.context, this, i))
            } catch (X) {
                Promise.reject(X)
            }
            try {
                await ((G = (q = this.options).onSettled) == null ? void 0 : G.call(q, void 0, M, e, this.state.context, i))
            } catch (X) {
                Promise.reject(X)
            }
            throw ke(this, xn, fr).call(this, {
                type: "error",
                error: M
            }),
            M
        } finally {
            P(this, wt).runNext(this)
        }
    }
}
,
Io = new WeakMap,
wn = new WeakMap,
wt = new WeakMap,
ls = new WeakMap,
xn = new WeakSet,
fr = function(e) {
    const n = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    ft.batch( () => {
        P(this, wn).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        P(this, wt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
r0);
function hE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Fn, dn, Fo, s0, pE = (s0 = class extends Vo {
    constructor(e={}) {
        super();
        ue(this, Fn);
        ue(this, dn);
        ue(this, Fo);
        this.config = e,
        J(this, Fn, new Set),
        J(this, dn, new Map),
        J(this, Fo, 0)
    }
    build(e, n, i) {
        const o = new fE({
            client: e,
            mutationCache: this,
            mutationId: ++sl(this, Fo)._,
            options: e.defaultMutationOptions(n),
            state: i
        });
        return this.add(o),
        o
    }
    add(e) {
        P(this, Fn).add(e);
        const n = ll(e);
        if (typeof n == "string") {
            const i = P(this, dn).get(n);
            i ? i.push(e) : P(this, dn).set(n, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (P(this, Fn).delete(e)) {
            const n = ll(e);
            if (typeof n == "string") {
                const i = P(this, dn).get(n);
                if (i)
                    if (i.length > 1) {
                        const o = i.indexOf(e);
                        o !== -1 && i.splice(o, 1)
                    } else
                        i[0] === e && P(this, dn).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const n = ll(e);
        if (typeof n == "string") {
            const i = P(this, dn).get(n)
              , o = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !o || o === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const n = ll(e);
        if (typeof n == "string") {
            const o = (i = P(this, dn).get(n)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ft.batch( () => {
            P(this, Fn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            P(this, Fn).clear(),
            P(this, dn).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Fn))
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Mg(n, i))
    }
    findAll(e={}) {
        return this.getAll().filter(n => Mg(e, n))
    }
    notify(e) {
        ft.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return ft.batch( () => Promise.all(e.map(n => n.continue().catch(jt))))
    }
}
,
Fn = new WeakMap,
dn = new WeakMap,
Fo = new WeakMap,
s0);
function ll(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Sn, i0, mE = (i0 = class extends Vo {
    constructor(e={}) {
        super();
        ue(this, Sn);
        this.config = e,
        J(this, Sn, new Map)
    }
    build(e, n, i) {
        const o = n.queryKey
          , l = n.queryHash ?? Tf(o, n);
        let u = this.get(l);
        return u || (u = new aE({
            client: e,
            queryKey: o,
            queryHash: l,
            options: e.defaultQueryOptions(n),
            state: i,
            defaultOptions: e.getQueryDefaults(o)
        }),
        this.add(u)),
        u
    }
    add(e) {
        P(this, Sn).has(e.queryHash) || (P(this, Sn).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const n = P(this, Sn).get(e.queryHash);
        n && (e.destroy(),
        n === e && P(this, Sn).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return P(this, Sn).get(e)
    }
    getAll() {
        return [...P(this, Sn).values()]
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Dg(n, i))
    }
    findAll(e={}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter(i => Dg(e, i)) : n
    }
    notify(e) {
        ft.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    onFocus() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
Sn = new WeakMap,
i0), We, wr, xr, ri, si, Sr, ii, oi, o0, gE = (o0 = class {
    constructor(t={}) {
        ue(this, We);
        ue(this, wr);
        ue(this, xr);
        ue(this, ri);
        ue(this, si);
        ue(this, Sr);
        ue(this, ii);
        ue(this, oi);
        J(this, We, t.queryCache || new mE),
        J(this, wr, t.mutationCache || new pE),
        J(this, xr, t.defaultOptions || {}),
        J(this, ri, new Map),
        J(this, si, new Map),
        J(this, Sr, 0)
    }
    mount() {
        sl(this, Sr)._++,
        P(this, Sr) === 1 && (J(this, ii, _f.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            P(this, We).onFocus())
        }
        )),
        J(this, oi, Nl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            P(this, We).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        sl(this, Sr)._--,
        P(this, Sr) === 0 && ((t = P(this, ii)) == null || t.call(this),
        J(this, ii, void 0),
        (e = P(this, oi)) == null || e.call(this),
        J(this, oi, void 0))
    }
    isFetching(t) {
        return P(this, We).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return P(this, wr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var n;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (n = P(this, We).get(e.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , n = P(this, We).build(this, e)
          , i = n.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(kr(e.staleTime, n)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return P(this, We).findAll(t).map( ({queryKey: e, state: n}) => {
            const i = n.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, n) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , o = P(this, We).get(i.queryHash)
          , l = o == null ? void 0 : o.state.data
          , u = Yk(e, l);
        if (u !== void 0)
            return P(this, We).build(this, i).setData(u, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(t, e, n) {
        return ft.batch( () => P(this, We).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, n)]))
    }
    getQueryState(t) {
        var n;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (n = P(this, We).get(e.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(t) {
        const e = P(this, We);
        ft.batch( () => {
            e.findAll(t).forEach(n => {
                e.remove(n)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const n = P(this, We);
        return ft.batch( () => (n.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const n = {
            revert: !0,
            ...e
        }
          , i = ft.batch( () => P(this, We).findAll(t).map(o => o.cancel(n)));
        return Promise.all(i).then(jt).catch(jt)
    }
    invalidateQueries(t, e={}) {
        return ft.batch( () => (P(this, We).findAll(t).forEach(n => {
            n.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const n = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = ft.batch( () => P(this, We).findAll(t).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let l = o.fetch(void 0, n);
            return n.throwOnError || (l = l.catch(jt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(jt)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = P(this, We).build(this, e);
        return n.isStaleByTime(kr(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(jt).catch(jt)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = $g(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(jt).catch(jt)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = $g(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return Nl.isOnline() ? P(this, wr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, We)
    }
    getMutationCache() {
        return P(this, wr)
    }
    getDefaultOptions() {
        return P(this, xr)
    }
    setDefaultOptions(t) {
        J(this, xr, t)
    }
    setQueryDefaults(t, e) {
        P(this, ri).set(ko(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...P(this, ri).values()]
          , n = {};
        return e.forEach(i => {
            Eo(t, i.queryKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(t, e) {
        P(this, si).set(ko(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...P(this, si).values()]
          , n = {};
        return e.forEach(i => {
            Eo(t, i.mutationKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...P(this, xr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = Tf(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Pf && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...P(this, xr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        P(this, We).clear(),
        P(this, wr).clear()
    }
}
,
We = new WeakMap,
wr = new WeakMap,
xr = new WeakMap,
ri = new WeakMap,
si = new WeakMap,
Sr = new WeakMap,
ii = new WeakMap,
oi = new WeakMap,
o0), H0 = _.createContext(void 0), yE = t => {
    const e = _.useContext(H0);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, vE = ({client: t, children: e}) => (_.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
x.jsx(H0.Provider, {
    value: t,
    children: e
})), q0 = _.createContext(!1), wE = () => _.useContext(q0);
q0.Provider;
function xE() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var SE = _.createContext(xE())
  , bE = () => _.useContext(SE)
  , kE = (t, e, n) => {
    const i = n != null && n.state.error && typeof t.throwOnError == "function" ? F0(t.throwOnError, [n.state.error, n]) : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
}
  , EE = t => {
    _.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , CE = ({result: t, errorResetBoundary: e, throwOnError: n, query: i, suspense: o}) => t.isError && !e.isReset() && !t.isFetching && i && (o && t.data === void 0 || F0(n, [t.error, i]))
  , TE = t => {
    if (t.suspense) {
        const n = o => o === "static" ? o : Math.max(o ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...o) => n(i(...o)) : n(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , PE = (t, e) => t.isLoading && t.isFetching && !e
  , _E = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , qg = (t, e, n) => e.fetchOptimistic(t).catch( () => {
    n.clearReset()
}
);
function RE(t, e, n) {
    var w, E, k, b;
    const i = wE()
      , o = bE()
      , l = yE()
      , u = l.defaultQueryOptions(t);
    (E = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || E.call(w, u);
    const d = l.getQueryCache().get(u.queryHash);
    u._optimisticResults = i ? "isRestoring" : "optimistic",
    TE(u),
    kE(u, o, d),
    EE(o);
    const h = !l.getQueryCache().get(u.queryHash)
      , [m] = _.useState( () => new e(l,u))
      , g = m.getOptimisticResult(u)
      , y = !i && t.subscribed !== !1;
    if (_.useSyncExternalStore(_.useCallback(S => {
        const A = y ? m.subscribe(ft.batchCalls(S)) : jt;
        return m.updateResult(),
        A
    }
    , [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    _.useEffect( () => {
        m.setOptions(u)
    }
    , [u, m]),
    _E(u, g))
        throw qg(u, m, o);
    if (CE({
        result: g,
        errorResetBoundary: o,
        throwOnError: u.throwOnError,
        query: d,
        suspense: u.suspense
    }))
        throw g.error;
    if ((b = (k = l.getDefaultOptions().queries) == null ? void 0 : k._experimental_afterQuery) == null || b.call(k, u, g),
    u.experimental_prefetchInRender && !ds && PE(g, i)) {
        const S = h ? qg(u, m, o) : d == null ? void 0 : d.promise;
        S == null || S.catch(jt).finally( () => {
            m.updateResult()
        }
        )
    }
    return u.notifyOnChangeProps ? g : m.trackResult(g)
}
function AE(t, e) {
    return RE(t, lE)
}
const NE = new gE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
u0();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Co() {
    return Co = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Co.apply(this, arguments)
}
var br;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(br || (br = {}));
const Wg = "popstate";
function OE(t) {
    t === void 0 && (t = {});
    function e(i, o) {
        let {pathname: l, search: u, hash: d} = i.location;
        return qd("", {
            pathname: l,
            search: u,
            hash: d
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(i, o) {
        return typeof o == "string" ? o : Ol(o)
    }
    return LE(e, n, null, t)
}
function et(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Af(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function jE() {
    return Math.random().toString(36).substr(2, 8)
}
function Kg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function qd(t, e, n, i) {
    return n === void 0 && (n = null),
    Co({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? di(e) : e, {
        state: n,
        key: e && e.key || i || jE()
    })
}
function Ol(t) {
    let {pathname: e="/", search: n="", hash: i=""} = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function di(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n),
        t = t.substr(0, n));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function LE(t, e, n, i) {
    i === void 0 && (i = {});
    let {window: o=document.defaultView, v5Compat: l=!1} = i
      , u = o.history
      , d = br.Pop
      , h = null
      , m = g();
    m == null && (m = 0,
    u.replaceState(Co({}, u.state, {
        idx: m
    }), ""));
    function g() {
        return (u.state || {
            idx: null
        }).idx
    }
    function y() {
        d = br.Pop;
        let S = g()
          , A = S == null ? null : S - m;
        m = S,
        h && h({
            action: d,
            location: b.location,
            delta: A
        })
    }
    function w(S, A) {
        d = br.Push;
        let V = qd(b.location, S, A);
        m = g() + 1;
        let j = Kg(V, m)
          , D = b.createHref(V);
        try {
            u.pushState(j, "", D)
        } catch (B) {
            if (B instanceof DOMException && B.name === "DataCloneError")
                throw B;
            o.location.assign(D)
        }
        l && h && h({
            action: d,
            location: b.location,
            delta: 1
        })
    }
    function E(S, A) {
        d = br.Replace;
        let V = qd(b.location, S, A);
        m = g();
        let j = Kg(V, m)
          , D = b.createHref(V);
        u.replaceState(j, "", D),
        l && h && h({
            action: d,
            location: b.location,
            delta: 0
        })
    }
    function k(S) {
        let A = o.location.origin !== "null" ? o.location.origin : o.location.href
          , V = typeof S == "string" ? S : Ol(S);
        return V = V.replace(/ $/, "%20"),
        et(A, "No window.location.(origin|href) available to create URL for href: " + V),
        new URL(V,A)
    }
    let b = {
        get action() {
            return d
        },
        get location() {
            return t(o, u)
        },
        listen(S) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Wg, y),
            h = S,
            () => {
                o.removeEventListener(Wg, y),
                h = null
            }
        },
        createHref(S) {
            return e(o, S)
        },
        createURL: k,
        encodeLocation(S) {
            let A = k(S);
            return {
                pathname: A.pathname,
                search: A.search,
                hash: A.hash
            }
        },
        push: w,
        replace: E,
        go(S) {
            return u.go(S)
        }
    };
    return b
}
var Qg;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Qg || (Qg = {}));
function DE(t, e, n) {
    return n === void 0 && (n = "/"),
    ME(t, e, n)
}
function ME(t, e, n, i) {
    let o = typeof e == "string" ? di(e) : e
      , l = Nf(o.pathname || "/", n);
    if (l == null)
        return null;
    let u = W0(t);
    IE(u);
    let d = null;
    for (let h = 0; d == null && h < u.length; ++h) {
        let m = GE(l);
        d = WE(u[h], m)
    }
    return d
}
function W0(t, e, n, i) {
    e === void 0 && (e = []),
    n === void 0 && (n = []),
    i === void 0 && (i = "");
    let o = (l, u, d) => {
        let h = {
            relativePath: d === void 0 ? l.path || "" : d,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: u,
            route: l
        };
        h.relativePath.startsWith("/") && (et(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        h.relativePath = h.relativePath.slice(i.length));
        let m = Er([i, h.relativePath])
          , g = n.concat(h);
        l.children && l.children.length > 0 && (et(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        W0(l.children, e, g, m)),
        !(l.path == null && !l.index) && e.push({
            path: m,
            score: HE(m, l.index),
            routesMeta: g
        })
    }
    ;
    return t.forEach( (l, u) => {
        var d;
        if (l.path === "" || !((d = l.path) != null && d.includes("?")))
            o(l, u);
        else
            for (let h of K0(l.path))
                o(l, u, h)
    }
    ),
    e
}
function K0(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[n,...i] = e
      , o = n.endsWith("?")
      , l = n.replace(/\?$/, "");
    if (i.length === 0)
        return o ? [l, ""] : [l];
    let u = K0(i.join("/"))
      , d = [];
    return d.push(...u.map(h => h === "" ? l : [l, h].join("/"))),
    o && d.push(...u),
    d.map(h => t.startsWith("/") && h === "" ? "/" : h)
}
function IE(t) {
    t.sort( (e, n) => e.score !== n.score ? n.score - e.score : qE(e.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)))
}
const FE = /^:[\w-]+$/
  , VE = 3
  , BE = 2
  , UE = 1
  , zE = 10
  , $E = -2
  , Gg = t => t === "*";
function HE(t, e) {
    let n = t.split("/")
      , i = n.length;
    return n.some(Gg) && (i += $E),
    e && (i += BE),
    n.filter(o => !Gg(o)).reduce( (o, l) => o + (FE.test(l) ? VE : l === "" ? UE : zE), i)
}
function qE(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, o) => i === e[o]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function WE(t, e, n) {
    let {routesMeta: i} = t
      , o = {}
      , l = "/"
      , u = [];
    for (let d = 0; d < i.length; ++d) {
        let h = i[d]
          , m = d === i.length - 1
          , g = l === "/" ? e : e.slice(l.length) || "/"
          , y = KE({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, g)
          , w = h.route;
        if (!y)
            return null;
        Object.assign(o, y.params),
        u.push({
            params: o,
            pathname: Er([l, y.pathname]),
            pathnameBase: eC(Er([l, y.pathnameBase])),
            route: w
        }),
        y.pathnameBase !== "/" && (l = Er([l, y.pathnameBase]))
    }
    return u
}
function KE(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = QE(t.path, t.caseSensitive, t.end)
      , o = e.match(n);
    if (!o)
        return null;
    let l = o[0]
      , u = l.replace(/(.)\/+$/, "$1")
      , d = o.slice(1);
    return {
        params: i.reduce( (m, g, y) => {
            let {paramName: w, isOptional: E} = g;
            if (w === "*") {
                let b = d[y] || "";
                u = l.slice(0, l.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const k = d[y];
            return E && !k ? m[w] = void 0 : m[w] = (k || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: l,
        pathnameBase: u,
        pattern: t
    }
}
function QE(t, e, n) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Af(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , o = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, d, h) => (i.push({
        paramName: d,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,e ? void 0 : "i"), i]
}
function GE(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Af(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Nf(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/"
}
const YE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , XE = t => YE.test(t);
function JE(t, e) {
    e === void 0 && (e = "/");
    let {pathname: n, search: i="", hash: o=""} = typeof t == "string" ? di(t) : t, l;
    if (n)
        if (XE(n))
            l = n;
        else {
            if (n.includes("//")) {
                let u = n;
                n = n.replace(/\/\/+/g, "/"),
                Af(!1, "Pathnames cannot have embedded double slashes - normalizing " + (u + " -> " + n))
            }
            n.startsWith("/") ? l = Yg(n.substring(1), "/") : l = Yg(n, e)
        }
    else
        l = e;
    return {
        pathname: l,
        search: tC(i),
        hash: nC(o)
    }
}
function Yg(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function id(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function ZE(t) {
    return t.filter( (e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}
function Q0(t, e) {
    let n = ZE(t);
    return e ? n.map( (i, o) => o === n.length - 1 ? i.pathname : i.pathnameBase) : n.map(i => i.pathnameBase)
}
function G0(t, e, n, i) {
    i === void 0 && (i = !1);
    let o;
    typeof t == "string" ? o = di(t) : (o = Co({}, t),
    et(!o.pathname || !o.pathname.includes("?"), id("?", "pathname", "search", o)),
    et(!o.pathname || !o.pathname.includes("#"), id("#", "pathname", "hash", o)),
    et(!o.search || !o.search.includes("#"), id("#", "search", "hash", o)));
    let l = t === "" || o.pathname === "", u = l ? "/" : o.pathname, d;
    if (u == null)
        d = n;
    else {
        let y = e.length - 1;
        if (!i && u.startsWith("..")) {
            let w = u.split("/");
            for (; w[0] === ".."; )
                w.shift(),
                y -= 1;
            o.pathname = w.join("/")
        }
        d = y >= 0 ? e[y] : "/"
    }
    let h = JE(o, d)
      , m = u && u !== "/" && u.endsWith("/")
      , g = (l || u === ".") && n.endsWith("/");
    return !h.pathname.endsWith("/") && (m || g) && (h.pathname += "/"),
    h
}
const Er = t => t.join("/").replace(/\/\/+/g, "/")
  , eC = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , tC = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , nC = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function rC(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Y0 = ["post", "put", "patch", "delete"];
new Set(Y0);
const sC = ["get", ...Y0];
new Set(sC);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function To() {
    return To = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    To.apply(this, arguments)
}
const Of = _.createContext(null)
  , iC = _.createContext(null)
  , ps = _.createContext(null)
  , $l = _.createContext(null)
  , Ar = _.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , X0 = _.createContext(null);
function oC(t, e) {
    let {relative: n} = e === void 0 ? {} : e;
    Bo() || et(!1);
    let {basename: i, navigator: o} = _.useContext(ps)
      , {hash: l, pathname: u, search: d} = Z0(t, {
        relative: n
    })
      , h = u;
    return i !== "/" && (h = u === "/" ? i : Er([i, u])),
    o.createHref({
        pathname: h,
        search: d,
        hash: l
    })
}
function Bo() {
    return _.useContext($l) != null
}
function fi() {
    return Bo() || et(!1),
    _.useContext($l).location
}
function J0(t) {
    _.useContext(ps).static || _.useLayoutEffect(t)
}
function aC() {
    let {isDataRoute: t} = _.useContext(Ar);
    return t ? bC() : lC()
}
function lC() {
    Bo() || et(!1);
    let t = _.useContext(Of)
      , {basename: e, future: n, navigator: i} = _.useContext(ps)
      , {matches: o} = _.useContext(Ar)
      , {pathname: l} = fi()
      , u = JSON.stringify(Q0(o, n.v7_relativeSplatPath))
      , d = _.useRef(!1);
    return J0( () => {
        d.current = !0
    }
    ),
    _.useCallback(function(m, g) {
        if (g === void 0 && (g = {}),
        !d.current)
            return;
        if (typeof m == "number") {
            i.go(m);
            return
        }
        let y = G0(m, JSON.parse(u), l, g.relative === "path");
        t == null && e !== "/" && (y.pathname = y.pathname === "/" ? e : Er([e, y.pathname])),
        (g.replace ? i.replace : i.push)(y, g.state, g)
    }, [e, i, u, l, t])
}
const uC = _.createContext(null);
function cC(t) {
    let e = _.useContext(Ar).outlet;
    return e && _.createElement(uC.Provider, {
        value: t
    }, e)
}
function Z0(t, e) {
    let {relative: n} = e === void 0 ? {} : e
      , {future: i} = _.useContext(ps)
      , {matches: o} = _.useContext(Ar)
      , {pathname: l} = fi()
      , u = JSON.stringify(Q0(o, i.v7_relativeSplatPath));
    return _.useMemo( () => G0(t, JSON.parse(u), l, n === "path"), [t, u, l, n])
}
function dC(t, e) {
    return fC(t, e)
}
function fC(t, e, n, i) {
    Bo() || et(!1);
    let {navigator: o} = _.useContext(ps)
      , {matches: l} = _.useContext(Ar)
      , u = l[l.length - 1]
      , d = u ? u.params : {};
    u && u.pathname;
    let h = u ? u.pathnameBase : "/";
    u && u.route;
    let m = fi(), g;
    if (e) {
        var y;
        let S = typeof e == "string" ? di(e) : e;
        h === "/" || (y = S.pathname) != null && y.startsWith(h) || et(!1),
        g = S
    } else
        g = m;
    let w = g.pathname || "/"
      , E = w;
    if (h !== "/") {
        let S = h.replace(/^\//, "").split("/");
        E = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let k = DE(t, {
        pathname: E
    })
      , b = yC(k && k.map(S => Object.assign({}, S, {
        params: Object.assign({}, d, S.params),
        pathname: Er([h, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? h : Er([h, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), l, n, i);
    return e && b ? _.createElement($l.Provider, {
        value: {
            location: To({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: br.Pop
        }
    }, b) : b
}
function hC() {
    let t = SC()
      , e = rC(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , n = t instanceof Error ? t.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return _.createElement(_.Fragment, null, _.createElement("h2", null, "Unexpected Application Error!"), _.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? _.createElement("pre", {
        style: o
    }, n) : null, null)
}
const pC = _.createElement(hC, null);
class mC extends _.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation
        }
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n)
    }
    render() {
        return this.state.error !== void 0 ? _.createElement(Ar.Provider, {
            value: this.props.routeContext
        }, _.createElement(X0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function gC(t) {
    let {routeContext: e, match: n, children: i} = t
      , o = _.useContext(Of);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Ar.Provider, {
        value: e
    }, i)
}
function yC(t, e, n, i) {
    var o;
    if (e === void 0 && (e = []),
    n === void 0 && (n = null),
    i === void 0 && (i = null),
    t == null) {
        var l;
        if (!n)
            return null;
        if (n.errors)
            t = n.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0)
            t = n.matches;
        else
            return null
    }
    let u = t
      , d = (o = n) == null ? void 0 : o.errors;
    if (d != null) {
        let g = u.findIndex(y => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
        g >= 0 || et(!1),
        u = u.slice(0, Math.min(u.length, g + 1))
    }
    let h = !1
      , m = -1;
    if (n && i && i.v7_partialHydration)
        for (let g = 0; g < u.length; g++) {
            let y = u[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
            y.route.id) {
                let {loaderData: w, errors: E} = n
                  , k = y.route.loader && w[y.route.id] === void 0 && (!E || E[y.route.id] === void 0);
                if (y.route.lazy || k) {
                    h = !0,
                    m >= 0 ? u = u.slice(0, m + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight( (g, y, w) => {
        let E, k = !1, b = null, S = null;
        n && (E = d && y.route.id ? d[y.route.id] : void 0,
        b = y.route.errorElement || pC,
        h && (m < 0 && w === 0 ? (kC("route-fallback"),
        k = !0,
        S = null) : m === w && (k = !0,
        S = y.route.hydrateFallbackElement || null)));
        let A = e.concat(u.slice(0, w + 1))
          , V = () => {
            let j;
            return E ? j = b : k ? j = S : y.route.Component ? j = _.createElement(y.route.Component, null) : y.route.element ? j = y.route.element : j = g,
            _.createElement(gC, {
                match: y,
                routeContext: {
                    outlet: g,
                    matches: A,
                    isDataRoute: n != null
                },
                children: j
            })
        }
        ;
        return n && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? _.createElement(mC, {
            location: n.location,
            revalidation: n.revalidation,
            component: b,
            error: E,
            children: V(),
            routeContext: {
                outlet: null,
                matches: A,
                isDataRoute: !0
            }
        }) : V()
    }
    , null)
}
var ew = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t
}
)(ew || {})
  , tw = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(tw || {});
function vC(t) {
    let e = _.useContext(Of);
    return e || et(!1),
    e
}
function wC(t) {
    let e = _.useContext(iC);
    return e || et(!1),
    e
}
function xC(t) {
    let e = _.useContext(Ar);
    return e || et(!1),
    e
}
function nw(t) {
    let e = xC()
      , n = e.matches[e.matches.length - 1];
    return n.route.id || et(!1),
    n.route.id
}
function SC() {
    var t;
    let e = _.useContext(X0)
      , n = wC()
      , i = nw();
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i]
}
function bC() {
    let {router: t} = vC(ew.UseNavigateStable)
      , e = nw(tw.UseNavigateStable)
      , n = _.useRef(!1);
    return J0( () => {
        n.current = !0
    }
    ),
    _.useCallback(function(o, l) {
        l === void 0 && (l = {}),
        n.current && (typeof o == "number" ? t.navigate(o) : t.navigate(o, To({
            fromRouteId: e
        }, l)))
    }, [t, e])
}
const Xg = {};
function kC(t, e, n) {
    Xg[t] || (Xg[t] = !0)
}
function EC(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function CC(t) {
    return cC(t.context)
}
function uo(t) {
    et(!1)
}
function TC(t) {
    let {basename: e="/", children: n=null, location: i, navigationType: o=br.Pop, navigator: l, static: u=!1, future: d} = t;
    Bo() && et(!1);
    let h = e.replace(/^\/*/, "/")
      , m = _.useMemo( () => ({
        basename: h,
        navigator: l,
        static: u,
        future: To({
            v7_relativeSplatPath: !1
        }, d)
    }), [h, d, l, u]);
    typeof i == "string" && (i = di(i));
    let {pathname: g="/", search: y="", hash: w="", state: E=null, key: k="default"} = i
      , b = _.useMemo( () => {
        let S = Nf(g, h);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: w,
                state: E,
                key: k
            },
            navigationType: o
        }
    }
    , [h, g, y, w, E, k, o]);
    return b == null ? null : _.createElement(ps.Provider, {
        value: m
    }, _.createElement($l.Provider, {
        children: n,
        value: b
    }))
}
function PC(t) {
    let {children: e, location: n} = t;
    return dC(Wd(e), n)
}
new Promise( () => {}
);
function Wd(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return _.Children.forEach(t, (i, o) => {
        if (!_.isValidElement(i))
            return;
        let l = [...e, o];
        if (i.type === _.Fragment) {
            n.push.apply(n, Wd(i.props.children, l));
            return
        }
        i.type !== uo && et(!1),
        !i.props.index || !i.props.children || et(!1);
        let u = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (u.children = Wd(i.props.children, l)),
        n.push(u)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kd() {
    return Kd = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Kd.apply(this, arguments)
}
function _C(t, e) {
    if (t == null)
        return {};
    var n = {}, i = Object.keys(t), o, l;
    for (l = 0; l < i.length; l++)
        o = i[l],
        !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n
}
function RC(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function AC(t, e) {
    return t.button === 0 && (!e || e === "_self") && !RC(t)
}
const NC = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , OC = "6";
try {
    window.__reactRouterVersion = OC
} catch {}
const jC = "startTransition"
  , Jg = l0[jC];
function LC(t) {
    let {basename: e, children: n, future: i, window: o} = t
      , l = _.useRef();
    l.current == null && (l.current = OE({
        window: o,
        v5Compat: !0
    }));
    let u = l.current
      , [d,h] = _.useState({
        action: u.action,
        location: u.location
    })
      , {v7_startTransition: m} = i || {}
      , g = _.useCallback(y => {
        m && Jg ? Jg( () => h(y)) : h(y)
    }
    , [h, m]);
    return _.useLayoutEffect( () => u.listen(g), [u, g]),
    _.useEffect( () => EC(i), [i]),
    _.createElement(TC, {
        basename: e,
        children: n,
        location: d.location,
        navigationType: d.action,
        navigator: u,
        future: i
    })
}
const DC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , MC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Po = _.forwardRef(function(e, n) {
    let {onClick: i, relative: o, reloadDocument: l, replace: u, state: d, target: h, to: m, preventScrollReset: g, viewTransition: y} = e, w = _C(e, NC), {basename: E} = _.useContext(ps), k, b = !1;
    if (typeof m == "string" && MC.test(m) && (k = m,
    DC))
        try {
            let j = new URL(window.location.href)
              , D = m.startsWith("//") ? new URL(j.protocol + m) : new URL(m)
              , B = Nf(D.pathname, E);
            D.origin === j.origin && B != null ? m = B + D.search + D.hash : b = !0
        } catch {}
    let S = oC(m, {
        relative: o
    })
      , A = IC(m, {
        replace: u,
        state: d,
        target: h,
        preventScrollReset: g,
        relative: o,
        viewTransition: y
    });
    function V(j) {
        i && i(j),
        j.defaultPrevented || A(j)
    }
    return _.createElement("a", Kd({}, w, {
        href: k || S,
        onClick: b || l ? i : V,
        ref: n,
        target: h
    }))
});
var Zg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Zg || (Zg = {}));
var ey;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(ey || (ey = {}));
function IC(t, e) {
    let {target: n, replace: i, state: o, preventScrollReset: l, relative: u, viewTransition: d} = e === void 0 ? {} : e
      , h = aC()
      , m = fi()
      , g = Z0(t, {
        relative: u
    });
    return _.useCallback(y => {
        if (AC(y, n)) {
            y.preventDefault();
            let w = i !== void 0 ? i : Ol(m) === Ol(g);
            h(t, {
                replace: w,
                state: o,
                preventScrollReset: l,
                relative: u,
                viewTransition: d
            })
        }
    }
    , [m, h, g, i, o, n, t, l, u, d])
}
function rw(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: FC} = Object.prototype
  , {getPrototypeOf: jf} = Object
  , {iterator: Hl, toStringTag: sw} = Symbol
  , ql = (t => e => {
    const n = FC.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , hn = t => (t = t.toLowerCase(),
e => ql(e) === t)
  , Wl = t => e => typeof e === t
  , {isArray: hi} = Array
  , ai = Wl("undefined");
function Uo(t) {
    return t !== null && !ai(t) && t.constructor !== null && !ai(t.constructor) && Lt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const iw = hn("ArrayBuffer");
function VC(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && iw(t.buffer),
    e
}
const BC = Wl("string")
  , Lt = Wl("function")
  , ow = Wl("number")
  , zo = t => t !== null && typeof t == "object"
  , UC = t => t === !0 || t === !1
  , xl = t => {
    if (ql(t) !== "object")
        return !1;
    const e = jf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(sw in t) && !(Hl in t)
}
  , zC = t => {
    if (!zo(t) || Uo(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , $C = hn("Date")
  , HC = hn("File")
  , qC = hn("Blob")
  , WC = hn("FileList")
  , KC = t => zo(t) && Lt(t.pipe)
  , QC = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || Lt(t.append) && ((e = ql(t)) === "formdata" || e === "object" && Lt(t.toString) && t.toString() === "[object FormData]"))
}
  , GC = hn("URLSearchParams")
  , [YC,XC,JC,ZC] = ["ReadableStream", "Request", "Response", "Headers"].map(hn)
  , eT = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $o(t, e, {allOwnKeys: n=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, o;
    if (typeof t != "object" && (t = [t]),
    hi(t))
        for (i = 0,
        o = t.length; i < o; i++)
            e.call(null, t[i], i, t);
    else {
        if (Uo(t))
            return;
        const l = n ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , u = l.length;
        let d;
        for (i = 0; i < u; i++)
            d = l[i],
            e.call(null, t[d], d, t)
    }
}
function aw(t, e) {
    if (Uo(t))
        return null;
    e = e.toLowerCase();
    const n = Object.keys(t);
    let i = n.length, o;
    for (; i-- > 0; )
        if (o = n[i],
        e === o.toLowerCase())
            return o;
    return null
}
const Xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , lw = t => !ai(t) && t !== Xr;
function Qd() {
    const {caseless: t, skipUndefined: e} = lw(this) && this || {}
      , n = {}
      , i = (o, l) => {
        if (l === "__proto__" || l === "constructor" || l === "prototype")
            return;
        const u = t && aw(n, l) || l;
        xl(n[u]) && xl(o) ? n[u] = Qd(n[u], o) : xl(o) ? n[u] = Qd({}, o) : hi(o) ? n[u] = o.slice() : (!e || !ai(o)) && (n[u] = o)
    }
    ;
    for (let o = 0, l = arguments.length; o < l; o++)
        arguments[o] && $o(arguments[o], i);
    return n
}
const tT = (t, e, n, {allOwnKeys: i}={}) => ($o(e, (o, l) => {
    n && Lt(o) ? Object.defineProperty(t, l, {
        value: rw(o, n),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(t, l, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: i
}),
t)
  , nT = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , rT = (t, e, n, i) => {
    t.prototype = Object.create(e.prototype, i),
    Object.defineProperty(t.prototype, "constructor", {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    n && Object.assign(t.prototype, n)
}
  , sT = (t, e, n, i) => {
    let o, l, u;
    const d = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (o = Object.getOwnPropertyNames(t),
        l = o.length; l-- > 0; )
            u = o[l],
            (!i || i(u, t, e)) && !d[u] && (e[u] = t[u],
            d[u] = !0);
        t = n !== !1 && jf(t)
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e
}
  , iT = (t, e, n) => {
    t = String(t),
    (n === void 0 || n > t.length) && (n = t.length),
    n -= e.length;
    const i = t.indexOf(e, n);
    return i !== -1 && i === n
}
  , oT = t => {
    if (!t)
        return null;
    if (hi(t))
        return t;
    let e = t.length;
    if (!ow(e))
        return null;
    const n = new Array(e);
    for (; e-- > 0; )
        n[e] = t[e];
    return n
}
  , aT = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && jf(Uint8Array))
  , lT = (t, e) => {
    const i = (t && t[Hl]).call(t);
    let o;
    for (; (o = i.next()) && !o.done; ) {
        const l = o.value;
        e.call(t, l[0], l[1])
    }
}
  , uT = (t, e) => {
    let n;
    const i = [];
    for (; (n = t.exec(e)) !== null; )
        i.push(n);
    return i
}
  , cT = hn("HTMLFormElement")
  , dT = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, i, o) {
    return i.toUpperCase() + o
})
  , ty = ( ({hasOwnProperty: t}) => (e, n) => t.call(e, n))(Object.prototype)
  , fT = hn("RegExp")
  , uw = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t)
      , i = {};
    $o(n, (o, l) => {
        let u;
        (u = e(o, l, t)) !== !1 && (i[l] = u || o)
    }
    ),
    Object.defineProperties(t, i)
}
  , hT = t => {
    uw(t, (e, n) => {
        if (Lt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const i = t[n];
        if (Lt(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , pT = (t, e) => {
    const n = {}
      , i = o => {
        o.forEach(l => {
            n[l] = !0
        }
        )
    }
    ;
    return hi(t) ? i(t) : i(String(t).split(e)),
    n
}
  , mT = () => {}
  , gT = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function yT(t) {
    return !!(t && Lt(t.append) && t[sw] === "FormData" && t[Hl])
}
const vT = t => {
    const e = new Array(10)
      , n = (i, o) => {
        if (zo(i)) {
            if (e.indexOf(i) >= 0)
                return;
            if (Uo(i))
                return i;
            if (!("toJSON"in i)) {
                e[o] = i;
                const l = hi(i) ? [] : {};
                return $o(i, (u, d) => {
                    const h = n(u, o + 1);
                    !ai(h) && (l[d] = h)
                }
                ),
                e[o] = void 0,
                l
            }
        }
        return i
    }
    ;
    return n(t, 0)
}
  , wT = hn("AsyncFunction")
  , xT = t => t && (zo(t) || Lt(t)) && Lt(t.then) && Lt(t.catch)
  , cw = ( (t, e) => t ? setImmediate : e ? ( (n, i) => (Xr.addEventListener("message", ({source: o, data: l}) => {
    o === Xr && l === n && i.length && i.shift()()
}
, !1),
o => {
    i.push(o),
    Xr.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Lt(Xr.postMessage))
  , ST = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xr) : typeof process < "u" && process.nextTick || cw
  , bT = t => t != null && Lt(t[Hl])
  , F = {
    isArray: hi,
    isArrayBuffer: iw,
    isBuffer: Uo,
    isFormData: QC,
    isArrayBufferView: VC,
    isString: BC,
    isNumber: ow,
    isBoolean: UC,
    isObject: zo,
    isPlainObject: xl,
    isEmptyObject: zC,
    isReadableStream: YC,
    isRequest: XC,
    isResponse: JC,
    isHeaders: ZC,
    isUndefined: ai,
    isDate: $C,
    isFile: HC,
    isBlob: qC,
    isRegExp: fT,
    isFunction: Lt,
    isStream: KC,
    isURLSearchParams: GC,
    isTypedArray: aT,
    isFileList: WC,
    forEach: $o,
    merge: Qd,
    extend: tT,
    trim: eT,
    stripBOM: nT,
    inherits: rT,
    toFlatObject: sT,
    kindOf: ql,
    kindOfTest: hn,
    endsWith: iT,
    toArray: oT,
    forEachEntry: lT,
    matchAll: uT,
    isHTMLForm: cT,
    hasOwnProperty: ty,
    hasOwnProp: ty,
    reduceDescriptors: uw,
    freezeMethods: hT,
    toObjectSet: pT,
    toCamelCase: dT,
    noop: mT,
    toFiniteNumber: gT,
    findKey: aw,
    global: Xr,
    isContextDefined: lw,
    isSpecCompliantForm: yT,
    toJSONObject: vT,
    isAsyncFn: wT,
    isThenable: xT,
    setImmediate: cw,
    asap: ST,
    isIterable: bT
};
let pe = class dw extends Error {
    static from(e, n, i, o, l, u) {
        const d = new dw(e.message,n || e.code,i,o,l);
        return d.cause = e,
        d.name = e.name,
        u && Object.assign(d, u),
        d
    }
    constructor(e, n, i, o, l) {
        super(e),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        n && (this.code = n),
        i && (this.config = i),
        o && (this.request = o),
        l && (this.response = l,
        this.status = l.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: F.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const kT = null;
function Gd(t) {
    return F.isPlainObject(t) || F.isArray(t)
}
function fw(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function ny(t, e, n) {
    return t ? t.concat(e).map(function(o, l) {
        return o = fw(o),
        !n && l ? "[" + o + "]" : o
    }).join(n ? "." : "") : e
}
function ET(t) {
    return F.isArray(t) && !t.some(Gd)
}
const CT = F.toFlatObject(F, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function Kl(t, e, n) {
    if (!F.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    n = F.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(b, S) {
        return !F.isUndefined(S[b])
    });
    const i = n.metaTokens
      , o = n.visitor || g
      , l = n.dots
      , u = n.indexes
      , h = (n.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(e);
    if (!F.isFunction(o))
        throw new TypeError("visitor must be a function");
    function m(k) {
        if (k === null)
            return "";
        if (F.isDate(k))
            return k.toISOString();
        if (F.isBoolean(k))
            return k.toString();
        if (!h && F.isBlob(k))
            throw new pe("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(k) || F.isTypedArray(k) ? h && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k
    }
    function g(k, b, S) {
        let A = k;
        if (k && !S && typeof k == "object") {
            if (F.endsWith(b, "{}"))
                b = i ? b : b.slice(0, -2),
                k = JSON.stringify(k);
            else if (F.isArray(k) && ET(k) || (F.isFileList(k) || F.endsWith(b, "[]")) && (A = F.toArray(k)))
                return b = fw(b),
                A.forEach(function(j, D) {
                    !(F.isUndefined(j) || j === null) && e.append(u === !0 ? ny([b], D, l) : u === null ? b : b + "[]", m(j))
                }),
                !1
        }
        return Gd(k) ? !0 : (e.append(ny(S, b, l), m(k)),
        !1)
    }
    const y = []
      , w = Object.assign(CT, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: Gd
    });
    function E(k, b) {
        if (!F.isUndefined(k)) {
            if (y.indexOf(k) !== -1)
                throw Error("Circular reference detected in " + b.join("."));
            y.push(k),
            F.forEach(k, function(A, V) {
                (!(F.isUndefined(A) || A === null) && o.call(e, A, F.isString(V) ? V.trim() : V, b, w)) === !0 && E(A, b ? b.concat(V) : [V])
            }),
            y.pop()
        }
    }
    if (!F.isObject(t))
        throw new TypeError("data must be an object");
    return E(t),
    e
}
function ry(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}
function Lf(t, e) {
    this._pairs = [],
    t && Kl(t, this, e)
}
const hw = Lf.prototype;
hw.append = function(e, n) {
    this._pairs.push([e, n])
}
;
hw.toString = function(e) {
    const n = e ? function(i) {
        return e.call(this, i, ry)
    }
    : ry;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function TT(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function pw(t, e, n) {
    if (!e)
        return t;
    const i = n && n.encode || TT
      , o = F.isFunction(n) ? {
        serialize: n
    } : n
      , l = o && o.serialize;
    let u;
    if (l ? u = l(e, o) : u = F.isURLSearchParams(e) ? e.toString() : new Lf(e,o).toString(i),
    u) {
        const d = t.indexOf("#");
        d !== -1 && (t = t.slice(0, d)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + u
    }
    return t
}
class sy {
    constructor() {
        this.handlers = []
    }
    use(e, n, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: n,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        F.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Df = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , PT = typeof URLSearchParams < "u" ? URLSearchParams : Lf
  , _T = typeof FormData < "u" ? FormData : null
  , RT = typeof Blob < "u" ? Blob : null
  , AT = {
    isBrowser: !0,
    classes: {
        URLSearchParams: PT,
        FormData: _T,
        Blob: RT
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Mf = typeof window < "u" && typeof document < "u"
  , Yd = typeof navigator == "object" && navigator || void 0
  , NT = Mf && (!Yd || ["ReactNative", "NativeScript", "NS"].indexOf(Yd.product) < 0)
  , OT = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , jT = Mf && window.location.href || "http://localhost"
  , LT = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Mf,
    hasStandardBrowserEnv: NT,
    hasStandardBrowserWebWorkerEnv: OT,
    navigator: Yd,
    origin: jT
}, Symbol.toStringTag, {
    value: "Module"
}))
  , St = {
    ...LT,
    ...AT
};
function DT(t, e) {
    return Kl(t, new St.classes.URLSearchParams, {
        visitor: function(n, i, o, l) {
            return St.isNode && F.isBuffer(n) ? (this.append(i, n.toString("base64")),
            !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
function MT(t) {
    return F.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function IT(t) {
    const e = {}
      , n = Object.keys(t);
    let i;
    const o = n.length;
    let l;
    for (i = 0; i < o; i++)
        l = n[i],
        e[l] = t[l];
    return e
}
function mw(t) {
    function e(n, i, o, l) {
        let u = n[l++];
        if (u === "__proto__")
            return !0;
        const d = Number.isFinite(+u)
          , h = l >= n.length;
        return u = !u && F.isArray(o) ? o.length : u,
        h ? (F.hasOwnProp(o, u) ? o[u] = [o[u], i] : o[u] = i,
        !d) : ((!o[u] || !F.isObject(o[u])) && (o[u] = []),
        e(n, i, o[u], l) && F.isArray(o[u]) && (o[u] = IT(o[u])),
        !d)
    }
    if (F.isFormData(t) && F.isFunction(t.entries)) {
        const n = {};
        return F.forEachEntry(t, (i, o) => {
            e(MT(i), o, n, 0)
        }
        ),
        n
    }
    return null
}
function FT(t, e, n) {
    if (F.isString(t))
        try {
            return (e || JSON.parse)(t),
            F.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (n || JSON.stringify)(t)
}
const Ho = {
    transitional: Df,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, n) {
        const i = n.getContentType() || ""
          , o = i.indexOf("application/json") > -1
          , l = F.isObject(e);
        if (l && F.isHTMLForm(e) && (e = new FormData(e)),
        F.isFormData(e))
            return o ? JSON.stringify(mw(e)) : e;
        if (F.isArrayBuffer(e) || F.isBuffer(e) || F.isStream(e) || F.isFile(e) || F.isBlob(e) || F.isReadableStream(e))
            return e;
        if (F.isArrayBufferView(e))
            return e.buffer;
        if (F.isURLSearchParams(e))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let d;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return DT(e, this.formSerializer).toString();
            if ((d = F.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return Kl(d ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return l || o ? (n.setContentType("application/json", !1),
        FT(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const n = this.transitional || Ho.transitional
          , i = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (F.isResponse(e) || F.isReadableStream(e))
            return e;
        if (e && F.isString(e) && (i && !this.responseType || o)) {
            const u = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (d) {
                if (u)
                    throw d.name === "SyntaxError" ? pe.from(d, pe.ERR_BAD_RESPONSE, this, null, this.response) : d
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: St.classes.FormData,
        Blob: St.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Ho.headers[t] = {}
}
);
const VT = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , BT = t => {
    const e = {};
    let n, i, o;
    return t && t.split(`
`).forEach(function(u) {
        o = u.indexOf(":"),
        n = u.substring(0, o).trim().toLowerCase(),
        i = u.substring(o + 1).trim(),
        !(!n || e[n] && VT[n]) && (n === "set-cookie" ? e[n] ? e[n].push(i) : e[n] = [i] : e[n] = e[n] ? e[n] + ", " + i : i)
    }),
    e
}
  , iy = Symbol("internals");
function so(t) {
    return t && String(t).trim().toLowerCase()
}
function Sl(t) {
    return t === !1 || t == null ? t : F.isArray(t) ? t.map(Sl) : String(t)
}
function UT(t) {
    const e = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = n.exec(t); )
        e[i[1]] = i[2];
    return e
}
const zT = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function od(t, e, n, i, o) {
    if (F.isFunction(i))
        return i.call(this, e, n);
    if (o && (e = n),
    !!F.isString(e)) {
        if (F.isString(i))
            return e.indexOf(i) !== -1;
        if (F.isRegExp(i))
            return i.test(e)
    }
}
function $T(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, i) => n.toUpperCase() + i)
}
function HT(t, e) {
    const n = F.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + n, {
            value: function(o, l, u) {
                return this[i].call(this, e, o, l, u)
            },
            configurable: !0
        })
    }
    )
}
let Dt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, n, i) {
        const o = this;
        function l(d, h, m) {
            const g = so(h);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const y = F.findKey(o, g);
            (!y || o[y] === void 0 || m === !0 || m === void 0 && o[y] !== !1) && (o[y || h] = Sl(d))
        }
        const u = (d, h) => F.forEach(d, (m, g) => l(m, g, h));
        if (F.isPlainObject(e) || e instanceof this.constructor)
            u(e, n);
        else if (F.isString(e) && (e = e.trim()) && !zT(e))
            u(BT(e), n);
        else if (F.isObject(e) && F.isIterable(e)) {
            let d = {}, h, m;
            for (const g of e) {
                if (!F.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                d[m = g[0]] = (h = d[m]) ? F.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            u(d, n)
        } else
            e != null && l(n, e, i);
        return this
    }
    get(e, n) {
        if (e = so(e),
        e) {
            const i = F.findKey(this, e);
            if (i) {
                const o = this[i];
                if (!n)
                    return o;
                if (n === !0)
                    return UT(o);
                if (F.isFunction(n))
                    return n.call(this, o, i);
                if (F.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, n) {
        if (e = so(e),
        e) {
            const i = F.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!n || od(this, this[i], i, n)))
        }
        return !1
    }
    delete(e, n) {
        const i = this;
        let o = !1;
        function l(u) {
            if (u = so(u),
            u) {
                const d = F.findKey(i, u);
                d && (!n || od(i, i[d], d, n)) && (delete i[d],
                o = !0)
            }
        }
        return F.isArray(e) ? e.forEach(l) : l(e),
        o
    }
    clear(e) {
        const n = Object.keys(this);
        let i = n.length
          , o = !1;
        for (; i--; ) {
            const l = n[i];
            (!e || od(this, this[l], l, e, !0)) && (delete this[l],
            o = !0)
        }
        return o
    }
    normalize(e) {
        const n = this
          , i = {};
        return F.forEach(this, (o, l) => {
            const u = F.findKey(i, l);
            if (u) {
                n[u] = Sl(o),
                delete n[l];
                return
            }
            const d = e ? $T(l) : String(l).trim();
            d !== l && delete n[l],
            n[d] = Sl(o),
            i[d] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const n = Object.create(null);
        return F.forEach(this, (i, o) => {
            i != null && i !== !1 && (n[o] = e && F.isArray(i) ? i.join(", ") : i)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,n]) => e + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...n) {
        const i = new this(e);
        return n.forEach(o => i.set(o)),
        i
    }
    static accessor(e) {
        const i = (this[iy] = this[iy] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function l(u) {
            const d = so(u);
            i[d] || (HT(o, u),
            i[d] = !0)
        }
        return F.isArray(e) ? e.forEach(l) : l(e),
        this
    }
}
;
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(Dt.prototype, ({value: t}, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[n] = i
        }
    }
}
);
F.freezeMethods(Dt);
function ad(t, e) {
    const n = this || Ho
      , i = e || n
      , o = Dt.from(i.headers);
    let l = i.data;
    return F.forEach(t, function(d) {
        l = d.call(n, l, o.normalize(), e ? e.status : void 0)
    }),
    o.normalize(),
    l
}
function gw(t) {
    return !!(t && t.__CANCEL__)
}
let qo = class extends pe {
    constructor(e, n, i) {
        super(e ?? "canceled", pe.ERR_CANCELED, n, i),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function yw(t, e, n) {
    const i = n.config.validateStatus;
    !n.status || !i || i(n.status) ? t(n) : e(new pe("Request failed with status code " + n.status,[pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function qT(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function WT(t, e) {
    t = t || 10;
    const n = new Array(t)
      , i = new Array(t);
    let o = 0, l = 0, u;
    return e = e !== void 0 ? e : 1e3,
    function(h) {
        const m = Date.now()
          , g = i[l];
        u || (u = m),
        n[o] = h,
        i[o] = m;
        let y = l
          , w = 0;
        for (; y !== o; )
            w += n[y++],
            y = y % t;
        if (o = (o + 1) % t,
        o === l && (l = (l + 1) % t),
        m - u < e)
            return;
        const E = g && m - g;
        return E ? Math.round(w * 1e3 / E) : void 0
    }
}
function KT(t, e) {
    let n = 0, i = 1e3 / e, o, l;
    const u = (m, g=Date.now()) => {
        n = g,
        o = null,
        l && (clearTimeout(l),
        l = null),
        t(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , y = g - n;
        y >= i ? u(m, g) : (o = m,
        l || (l = setTimeout( () => {
            l = null,
            u(o)
        }
        , i - y)))
    }
    , () => o && u(o)]
}
const jl = (t, e, n=3) => {
    let i = 0;
    const o = WT(50, 250);
    return KT(l => {
        const u = l.loaded
          , d = l.lengthComputable ? l.total : void 0
          , h = u - i
          , m = o(h)
          , g = u <= d;
        i = u;
        const y = {
            loaded: u,
            total: d,
            progress: d ? u / d : void 0,
            bytes: h,
            rate: m || void 0,
            estimated: m && d && g ? (d - u) / m : void 0,
            event: l,
            lengthComputable: d != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , n)
}
  , oy = (t, e) => {
    const n = t != null;
    return [i => e[0]({
        lengthComputable: n,
        total: t,
        loaded: i
    }), e[1]]
}
  , ay = t => (...e) => F.asap( () => t(...e))
  , QT = St.hasStandardBrowserEnv ? ( (t, e) => n => (n = new URL(n,St.origin),
t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(new URL(St.origin), St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)) : () => !0
  , GT = St.hasStandardBrowserEnv ? {
    write(t, e, n, i, o, l, u) {
        if (typeof document > "u")
            return;
        const d = [`${t}=${encodeURIComponent(e)}`];
        F.isNumber(n) && d.push(`expires=${new Date(n).toUTCString()}`),
        F.isString(i) && d.push(`path=${i}`),
        F.isString(o) && d.push(`domain=${o}`),
        l === !0 && d.push("secure"),
        F.isString(u) && d.push(`SameSite=${u}`),
        document.cookie = d.join("; ")
    },
    read(t) {
        if (typeof document > "u")
            return null;
        const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
        return e ? decodeURIComponent(e[1]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function YT(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function XT(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function vw(t, e, n) {
    let i = !YT(e);
    return t && (i || n == !1) ? XT(t, e) : e
}
const ly = t => t instanceof Dt ? {
    ...t
} : t;
function fs(t, e) {
    e = e || {};
    const n = {};
    function i(m, g, y, w) {
        return F.isPlainObject(m) && F.isPlainObject(g) ? F.merge.call({
            caseless: w
        }, m, g) : F.isPlainObject(g) ? F.merge({}, g) : F.isArray(g) ? g.slice() : g
    }
    function o(m, g, y, w) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m))
                return i(void 0, m, y, w)
        } else
            return i(m, g, y, w)
    }
    function l(m, g) {
        if (!F.isUndefined(g))
            return i(void 0, g)
    }
    function u(m, g) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m))
                return i(void 0, m)
        } else
            return i(void 0, g)
    }
    function d(m, g, y) {
        if (y in e)
            return i(m, g);
        if (y in t)
            return i(void 0, m)
    }
    const h = {
        url: l,
        method: l,
        data: l,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        withXSRFToken: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        responseEncoding: u,
        validateStatus: d,
        headers: (m, g, y) => o(ly(m), ly(g), y, !0)
    };
    return F.forEach(Object.keys({
        ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype")
            return;
        const y = F.hasOwnProp(h, g) ? h[g] : o
          , w = y(t[g], e[g], g);
        F.isUndefined(w) && y !== d || (n[g] = w)
    }),
    n
}
const ww = t => {
    const e = fs({}, t);
    let {data: n, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: l, headers: u, auth: d} = e;
    if (e.headers = u = Dt.from(u),
    e.url = pw(vw(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer),
    d && u.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))),
    F.isFormData(n)) {
        if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
            u.setContentType(void 0);
        else if (F.isFunction(n.getHeaders)) {
            const h = n.getHeaders()
              , m = ["content-type", "content-length"];
            Object.entries(h).forEach( ([g,y]) => {
                m.includes(g.toLowerCase()) && u.set(g, y)
            }
            )
        }
    }
    if (St.hasStandardBrowserEnv && (i && F.isFunction(i) && (i = i(e)),
    i || i !== !1 && QT(e.url))) {
        const h = o && l && GT.read(l);
        h && u.set(o, h)
    }
    return e
}
  , JT = typeof XMLHttpRequest < "u"
  , ZT = JT && function(t) {
    return new Promise(function(n, i) {
        const o = ww(t);
        let l = o.data;
        const u = Dt.from(o.headers).normalize();
        let {responseType: d, onUploadProgress: h, onDownloadProgress: m} = o, g, y, w, E, k;
        function b() {
            E && E(),
            k && k(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g)
        }
        let S = new XMLHttpRequest;
        S.open(o.method.toUpperCase(), o.url, !0),
        S.timeout = o.timeout;
        function A() {
            if (!S)
                return;
            const j = Dt.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , B = {
                data: !d || d === "text" || d === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: j,
                config: t,
                request: S
            };
            yw(function(G) {
                n(G),
                b()
            }, function(G) {
                i(G),
                b()
            }, B),
            S = null
        }
        "onloadend"in S ? S.onloadend = A : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(A)
        }
        ,
        S.onabort = function() {
            S && (i(new pe("Request aborted",pe.ECONNABORTED,t,S)),
            S = null)
        }
        ,
        S.onerror = function(D) {
            const B = D && D.message ? D.message : "Network Error"
              , q = new pe(B,pe.ERR_NETWORK,t,S);
            q.event = D || null,
            i(q),
            S = null
        }
        ,
        S.ontimeout = function() {
            let D = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const B = o.transitional || Df;
            o.timeoutErrorMessage && (D = o.timeoutErrorMessage),
            i(new pe(D,B.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,t,S)),
            S = null
        }
        ,
        l === void 0 && u.setContentType(null),
        "setRequestHeader"in S && F.forEach(u.toJSON(), function(D, B) {
            S.setRequestHeader(B, D)
        }),
        F.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials),
        d && d !== "json" && (S.responseType = o.responseType),
        m && ([w,k] = jl(m, !0),
        S.addEventListener("progress", w)),
        h && S.upload && ([y,E] = jl(h),
        S.upload.addEventListener("progress", y),
        S.upload.addEventListener("loadend", E)),
        (o.cancelToken || o.signal) && (g = j => {
            S && (i(!j || j.type ? new qo(null,t,S) : j),
            S.abort(),
            S = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(g),
        o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const V = qT(o.url);
        if (V && St.protocols.indexOf(V) === -1) {
            i(new pe("Unsupported protocol " + V + ":",pe.ERR_BAD_REQUEST,t));
            return
        }
        S.send(l || null)
    }
    )
}
  , eP = (t, e) => {
    const {length: n} = t = t ? t.filter(Boolean) : [];
    if (e || n) {
        let i = new AbortController, o;
        const l = function(m) {
            if (!o) {
                o = !0,
                d();
                const g = m instanceof Error ? m : this.reason;
                i.abort(g instanceof pe ? g : new qo(g instanceof Error ? g.message : g))
            }
        };
        let u = e && setTimeout( () => {
            u = null,
            l(new pe(`timeout of ${e}ms exceeded`,pe.ETIMEDOUT))
        }
        , e);
        const d = () => {
            t && (u && clearTimeout(u),
            u = null,
            t.forEach(m => {
                m.unsubscribe ? m.unsubscribe(l) : m.removeEventListener("abort", l)
            }
            ),
            t = null)
        }
        ;
        t.forEach(m => m.addEventListener("abort", l));
        const {signal: h} = i;
        return h.unsubscribe = () => F.asap(d),
        h
    }
}
  , tP = function*(t, e) {
    let n = t.byteLength;
    if (n < e) {
        yield t;
        return
    }
    let i = 0, o;
    for (; i < n; )
        o = i + e,
        yield t.slice(i, o),
        i = o
}
  , nP = async function*(t, e) {
    for await(const n of rP(t))
        yield*tP(n, e)
}
  , rP = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: n, value: i} = await e.read();
            if (n)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , uy = (t, e, n, i) => {
    const o = nP(t, e);
    let l = 0, u, d = h => {
        u || (u = !0,
        i && i(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: m, value: g} = await o.next();
                if (m) {
                    d(),
                    h.close();
                    return
                }
                let y = g.byteLength;
                if (n) {
                    let w = l += y;
                    n(w)
                }
                h.enqueue(new Uint8Array(g))
            } catch (m) {
                throw d(m),
                m
            }
        },
        cancel(h) {
            return d(h),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , cy = 64 * 1024
  , {isFunction: ul} = F
  , sP = ( ({Request: t, Response: e}) => ({
    Request: t,
    Response: e
}))(F.global)
  , {ReadableStream: dy, TextEncoder: fy} = F.global
  , hy = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , iP = t => {
    t = F.merge.call({
        skipUndefined: !0
    }, sP, t);
    const {fetch: e, Request: n, Response: i} = t
      , o = e ? ul(e) : typeof fetch == "function"
      , l = ul(n)
      , u = ul(i);
    if (!o)
        return !1;
    const d = o && ul(dy)
      , h = o && (typeof fy == "function" ? (k => b => k.encode(b))(new fy) : async k => new Uint8Array(await new n(k).arrayBuffer()))
      , m = l && d && hy( () => {
        let k = !1;
        const b = new n(St.origin,{
            body: new dy,
            method: "POST",
            get duplex() {
                return k = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return k && !b
    }
    )
      , g = u && d && hy( () => F.isReadableStream(new i("").body))
      , y = {
        stream: g && (k => k.body)
    };
    o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(k => {
        !y[k] && (y[k] = (b, S) => {
            let A = b && b[k];
            if (A)
                return A.call(b);
            throw new pe(`Response type '${k}' is not supported`,pe.ERR_NOT_SUPPORT,S)
        }
        )
    }
    );
    const w = async k => {
        if (k == null)
            return 0;
        if (F.isBlob(k))
            return k.size;
        if (F.isSpecCompliantForm(k))
            return (await new n(St.origin,{
                method: "POST",
                body: k
            }).arrayBuffer()).byteLength;
        if (F.isArrayBufferView(k) || F.isArrayBuffer(k))
            return k.byteLength;
        if (F.isURLSearchParams(k) && (k = k + ""),
        F.isString(k))
            return (await h(k)).byteLength
    }
      , E = async (k, b) => {
        const S = F.toFiniteNumber(k.getContentLength());
        return S ?? w(b)
    }
    ;
    return async k => {
        let {url: b, method: S, data: A, signal: V, cancelToken: j, timeout: D, onDownloadProgress: B, onUploadProgress: q, responseType: G, headers: M, withCredentials: X="same-origin", fetchOptions: me} = ww(k)
          , de = e || fetch;
        G = G ? (G + "").toLowerCase() : "text";
        let Te = eP([V, j && j.toAbortSignal()], D)
          , Le = null;
        const Ae = Te && Te.unsubscribe && ( () => {
            Te.unsubscribe()
        }
        );
        let Me;
        try {
            if (q && m && S !== "get" && S !== "head" && (Me = await E(M, A)) !== 0) {
                let N = new n(b,{
                    method: "POST",
                    body: A,
                    duplex: "half"
                }), z;
                if (F.isFormData(A) && (z = N.headers.get("content-type")) && M.setContentType(z),
                N.body) {
                    const [ye,ve] = oy(Me, jl(ay(q)));
                    A = uy(N.body, cy, ye, ve)
                }
            }
            F.isString(X) || (X = X ? "include" : "omit");
            const xe = l && "credentials"in n.prototype
              , fe = {
                ...me,
                signal: Te,
                method: S.toUpperCase(),
                headers: M.normalize().toJSON(),
                body: A,
                duplex: "half",
                credentials: xe ? X : void 0
            };
            Le = l && new n(b,fe);
            let K = await (l ? de(Le, me) : de(b, fe));
            const se = g && (G === "stream" || G === "response");
            if (g && (B || se && Ae)) {
                const N = {};
                ["status", "statusText", "headers"].forEach(le => {
                    N[le] = K[le]
                }
                );
                const z = F.toFiniteNumber(K.headers.get("content-length"))
                  , [ye,ve] = B && oy(z, jl(ay(B), !0)) || [];
                K = new i(uy(K.body, cy, ye, () => {
                    ve && ve(),
                    Ae && Ae()
                }
                ),N)
            }
            G = G || "text";
            let U = await y[F.findKey(y, G) || "text"](K, k);
            return !se && Ae && Ae(),
            await new Promise( (N, z) => {
                yw(N, z, {
                    data: U,
                    headers: Dt.from(K.headers),
                    status: K.status,
                    statusText: K.statusText,
                    config: k,
                    request: Le
                })
            }
            )
        } catch (xe) {
            throw Ae && Ae(),
            xe && xe.name === "TypeError" && /Load failed|fetch/i.test(xe.message) ? Object.assign(new pe("Network Error",pe.ERR_NETWORK,k,Le,xe && xe.response), {
                cause: xe.cause || xe
            }) : pe.from(xe, xe && xe.code, k, Le, xe && xe.response)
        }
    }
}
  , oP = new Map
  , xw = t => {
    let e = t && t.env || {};
    const {fetch: n, Request: i, Response: o} = e
      , l = [i, o, n];
    let u = l.length, d = u, h, m, g = oP;
    for (; d--; )
        h = l[d],
        m = g.get(h),
        m === void 0 && g.set(h, m = d ? new Map : iP(e)),
        g = m;
    return m
}
;
xw();
const If = {
    http: kT,
    xhr: ZT,
    fetch: {
        get: xw
    }
};
F.forEach(If, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const py = t => `- ${t}`
  , aP = t => F.isFunction(t) || t === null || t === !1;
function lP(t, e) {
    t = F.isArray(t) ? t : [t];
    const {length: n} = t;
    let i, o;
    const l = {};
    for (let u = 0; u < n; u++) {
        i = t[u];
        let d;
        if (o = i,
        !aP(i) && (o = If[(d = String(i)).toLowerCase()],
        o === void 0))
            throw new pe(`Unknown adapter '${d}'`);
        if (o && (F.isFunction(o) || (o = o.get(e))))
            break;
        l[d || "#" + u] = o
    }
    if (!o) {
        const u = Object.entries(l).map( ([h,m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let d = n ? u.length > 1 ? `since :
` + u.map(py).join(`
`) : " " + py(u[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + d,"ERR_NOT_SUPPORT")
    }
    return o
}
const Sw = {
    getAdapter: lP,
    adapters: If
};
function ld(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new qo(null,t)
}
function my(t) {
    return ld(t),
    t.headers = Dt.from(t.headers),
    t.data = ad.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Sw.getAdapter(t.adapter || Ho.adapter, t)(t).then(function(i) {
        return ld(t),
        i.data = ad.call(t, t.transformResponse, i),
        i.headers = Dt.from(i.headers),
        i
    }, function(i) {
        return gw(i) || (ld(t),
        i && i.response && (i.response.data = ad.call(t, t.transformResponse, i.response),
        i.response.headers = Dt.from(i.response.headers))),
        Promise.reject(i)
    })
}
const bw = "1.13.5"
  , Ql = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    Ql[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const gy = {};
Ql.transitional = function(e, n, i) {
    function o(l, u) {
        return "[Axios v" + bw + "] Transitional option '" + l + "'" + u + (i ? ". " + i : "")
    }
    return (l, u, d) => {
        if (e === !1)
            throw new pe(o(u, " has been removed" + (n ? " in " + n : "")),pe.ERR_DEPRECATED);
        return n && !gy[u] && (gy[u] = !0,
        console.warn(o(u, " has been deprecated since v" + n + " and will be removed in the near future"))),
        e ? e(l, u, d) : !0
    }
}
;
Ql.spelling = function(e) {
    return (n, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function uP(t, e, n) {
    if (typeof t != "object")
        throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let o = i.length;
    for (; o-- > 0; ) {
        const l = i[o]
          , u = e[l];
        if (u) {
            const d = t[l]
              , h = d === void 0 || u(d, l, t);
            if (h !== !0)
                throw new pe("option " + l + " must be " + h,pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new pe("Unknown option " + l,pe.ERR_BAD_OPTION)
    }
}
const bl = {
    assertOptions: uP,
    validators: Ql
}
  , Qt = bl.validators;
let us = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new sy,
            response: new sy
        }
    }
    async request(e, n) {
        try {
            return await this._request(e, n)
        } catch (i) {
            if (i instanceof Error) {
                let o = {};
                Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error;
                const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(e, n) {
        typeof e == "string" ? (n = n || {},
        n.url = e) : n = e || {},
        n = fs(this.defaults, n);
        const {transitional: i, paramsSerializer: o, headers: l} = n;
        i !== void 0 && bl.assertOptions(i, {
            silentJSONParsing: Qt.transitional(Qt.boolean),
            forcedJSONParsing: Qt.transitional(Qt.boolean),
            clarifyTimeoutError: Qt.transitional(Qt.boolean),
            legacyInterceptorReqResOrdering: Qt.transitional(Qt.boolean)
        }, !1),
        o != null && (F.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : bl.assertOptions(o, {
            encode: Qt.function,
            serialize: Qt.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        bl.assertOptions(n, {
            baseUrl: Qt.spelling("baseURL"),
            withXsrfToken: Qt.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let u = l && F.merge(l.common, l[n.method]);
        l && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], k => {
            delete l[k]
        }
        ),
        n.headers = Dt.concat(u, l);
        const d = [];
        let h = !0;
        this.interceptors.request.forEach(function(b) {
            if (typeof b.runWhen == "function" && b.runWhen(n) === !1)
                return;
            h = h && b.synchronous;
            const S = n.transitional || Df;
            S && S.legacyInterceptorReqResOrdering ? d.unshift(b.fulfilled, b.rejected) : d.push(b.fulfilled, b.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(b) {
            m.push(b.fulfilled, b.rejected)
        });
        let g, y = 0, w;
        if (!h) {
            const k = [my.bind(this), void 0];
            for (k.unshift(...d),
            k.push(...m),
            w = k.length,
            g = Promise.resolve(n); y < w; )
                g = g.then(k[y++], k[y++]);
            return g
        }
        w = d.length;
        let E = n;
        for (; y < w; ) {
            const k = d[y++]
              , b = d[y++];
            try {
                E = k(E)
            } catch (S) {
                b.call(this, S);
                break
            }
        }
        try {
            g = my.call(this, E)
        } catch (k) {
            return Promise.reject(k)
        }
        for (y = 0,
        w = m.length; y < w; )
            g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = fs(this.defaults, e);
        const n = vw(e.baseURL, e.url, e.allowAbsoluteUrls);
        return pw(n, e.params, e.paramsSerializer)
    }
}
;
F.forEach(["delete", "get", "head", "options"], function(e) {
    us.prototype[e] = function(n, i) {
        return this.request(fs(i || {}, {
            method: e,
            url: n,
            data: (i || {}).data
        }))
    }
});
F.forEach(["post", "put", "patch"], function(e) {
    function n(i) {
        return function(l, u, d) {
            return this.request(fs(d || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: u
            }))
        }
    }
    us.prototype[e] = n(),
    us.prototype[e + "Form"] = n(!0)
});
let cP = class kw {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(l) {
            n = l
        }
        );
        const i = this;
        this.promise.then(o => {
            if (!i._listeners)
                return;
            let l = i._listeners.length;
            for (; l-- > 0; )
                i._listeners[l](o);
            i._listeners = null
        }
        ),
        this.promise.then = o => {
            let l;
            const u = new Promise(d => {
                i.subscribe(d),
                l = d
            }
            ).then(o);
            return u.cancel = function() {
                i.unsubscribe(l)
            }
            ,
            u
        }
        ,
        e(function(l, u, d) {
            i.reason || (i.reason = new qo(l,u,d),
            n(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , n = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(n),
        e.signal.unsubscribe = () => this.unsubscribe(n),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new kw(function(o) {
                e = o
            }
            ),
            cancel: e
        }
    }
}
;
function dP(t) {
    return function(n) {
        return t.apply(null, n)
    }
}
function fP(t) {
    return F.isObject(t) && t.isAxiosError === !0
}
const Xd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Xd).forEach( ([t,e]) => {
    Xd[e] = t
}
);
function Ew(t) {
    const e = new us(t)
      , n = rw(us.prototype.request, e);
    return F.extend(n, us.prototype, e, {
        allOwnKeys: !0
    }),
    F.extend(n, e, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return Ew(fs(t, o))
    }
    ,
    n
}
const Xe = Ew(Ho);
Xe.Axios = us;
Xe.CanceledError = qo;
Xe.CancelToken = cP;
Xe.isCancel = gw;
Xe.VERSION = bw;
Xe.toFormData = Kl;
Xe.AxiosError = pe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(e) {
    return Promise.all(e)
}
;
Xe.spread = dP;
Xe.isAxiosError = fP;
Xe.mergeConfig = fs;
Xe.AxiosHeaders = Dt;
Xe.formToJSON = t => mw(F.isHTMLForm(t) ? new FormData(t) : t);
Xe.getAdapter = Sw.getAdapter;
Xe.HttpStatusCode = Xd;
Xe.default = Xe;
const {Axios: aj, AxiosError: lj, CanceledError: uj, isCancel: cj, CancelToken: dj, VERSION: fj, all: hj, Cancel: pj, isAxiosError: mj, spread: gj, toFormData: yj, AxiosHeaders: vj, HttpStatusCode: wj, formToJSON: xj, getAdapter: Sj, mergeConfig: bj} = Xe
  , hP = typeof window > "u"
  , yy = !hP && window.self !== window.top
  , ud = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , ct = [];
for (let t = 0; t < 256; ++t)
    ct.push((t + 256).toString(16).slice(1));
function pP(t, e=0) {
    return (ct[t[e + 0]] + ct[t[e + 1]] + ct[t[e + 2]] + ct[t[e + 3]] + "-" + ct[t[e + 4]] + ct[t[e + 5]] + "-" + ct[t[e + 6]] + ct[t[e + 7]] + "-" + ct[t[e + 8]] + ct[t[e + 9]] + "-" + ct[t[e + 10]] + ct[t[e + 11]] + ct[t[e + 12]] + ct[t[e + 13]] + ct[t[e + 14]] + ct[t[e + 15]]).toLowerCase()
}
let cd;
const mP = new Uint8Array(16);
function gP() {
    if (!cd) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        cd = crypto.getRandomValues.bind(crypto)
    }
    return cd(mP)
}
const yP = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , vy = {
    randomUUID: yP
};
function vP(t, e, n) {
    var o;
    t = t || {};
    const i = t.random ?? ((o = t.rng) == null ? void 0 : o.call(t)) ?? gP();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    pP(i)
}
function wP(t, e, n) {
    return vy.randomUUID && !t ? vy.randomUUID() : vP(t)
}

function co({baseURL: t, headers: e={}, token: n, interceptResponses: i=!0, onError: o}) {
    const l = Xe.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return n && (l.defaults.headers.common.Authorization = `Bearer ${n}`),
    l.interceptors.request.use(u => {
        typeof window < "u" && u.headers.set("X-Origin-URL", window.location.href);
        const d = wP();
        if (u.requestId = d,
        yy)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: d,
                    data: {
                        url: t + u.url,
                        method: u.method,
                        body: u.data instanceof FormData ? "[FormData object]" : u.data
                    }
                }, "*")
            } catch {}
        return u
    }
    ),
    i && l.interceptors.response.use(u => {
        var d;
        const h = (d = u.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            yy && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: u.status,
                    response: u.data
                }
            }, "*")
        } catch {}
        return u.data
    }
    , u => {
        var d, h, m, g, y, w, E, k;
        const b = ((h = (d = u.response) === null || d === void 0 ? void 0 : d.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = u.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || u.message
          , S = new xP(b,(y = u.response) === null || y === void 0 ? void 0 : y.status,(E = (w = u.response) === null || w === void 0 ? void 0 : w.data) === null || E === void 0 ? void 0 : E.code,(k = u.response) === null || k === void 0 ? void 0 : k.data,u);
        return o == null || o(S),
        Promise.reject(S)
    }
    ),
    l
}
function wy(t) {
    const {axios: e, appId: n, getSocket: i} = t;
    return new Proxy({},{
        get(o, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_")))
                return bP(e, n, l, i)
        }
    })
}

function kP(t, e) {
    return {
        async call(n, i, o) {
            if (!(n != null && n.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: l, queryParams: u, ...d} = o ?? {}
              , h = {
                ...d,
                ...l && {
                    path_params: l
                },
                ...u && {
                    query_params: u
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${n}/${i}`, h)
        }
    }
}
function xy(t, e) {
    const n = kP(t, e);
    return new Proxy({},{
        get(i, o) {
            if (!(typeof o != "string" || o === "then" || o.startsWith("_")))
                return o === "custom" ? n : new Proxy({},{
                    get(l, u) {
                        if (!(typeof u != "string" || u === "then" || u.startsWith("_")))
                            return async d => {
                                if (typeof d == "string")
                                    throw new Error(`Integration ${u} must receive an object with named parameters, received: ${d}`);
                                let h, m;
                                return d instanceof FormData || d && Object.values(d).some(g => g instanceof File) ? (h = new FormData,
                                Object.keys(d).forEach(g => {
                                    d[g]instanceof File ? h.append(g, d[g], d[g].name) : typeof d[g] == "object" && d[g] !== null ? h.append(g, JSON.stringify(d[g])) : h.append(g, d[g])
                                }
                                ),
                                m = "multipart/form-data") : (h = d,
                                m = "application/json"),
                                o === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${u}`, h || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${o}/integration-endpoints/${u}`, h || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function EP() {
    return typeof window > "u" ? !1 : window !== window.parent
}

function _P(t, e) {
    return {
        async getAccessToken(n) {
            if (!n || typeof n != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${n}`)).access_token
        },
        async getConnection(n) {
            var i;
            if (!n || typeof n != "string")
                throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${n}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getCurrentAppUserAccessToken(n) {
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${n}/token`)).access_token
        },
        async getCurrentAppUserConnection(n) {
            var i;
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            const l = await t.get(`/apps/${e}/app-user-auth/connectors/${n}/token`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}
function RP(t, e) {
    return {
        async connectAppUser(n) {
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${n}/initiate`)).redirect_url
        },
        async disconnectAppUser(n) {
            if (!n || typeof n != "string")
                throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${n}`)
        }
    }
}
function Sy(t, e, n) {
    const i = (l, u) => l ? `${String(l).replace(/\/$/, "")}${u}` : u
      , o = l => {
        const u = new Headers;
        if (n != null && n.getAuthHeaders) {
            const d = n.getAuthHeaders();
            Object.entries(d).forEach( ([h,m]) => {
                m != null && u.set(h, String(m))
            }
            )
        }
        return l && new Headers(l).forEach( (d, h) => {
            u.set(h, d)
        }
        ),
        u
    }
    ;
    return {
        async invoke(l, u) {
            if (typeof u == "string")
                throw new Error(`Function ${l} must receive an object with named parameters, received: ${u}`);
            let d, h;
            return u instanceof FormData || u && Object.values(u).some(m => m instanceof File) ? (d = new FormData,
            Object.keys(u).forEach(m => {
                u[m]instanceof File ? d.append(m, u[m], u[m].name) : typeof u[m] == "object" && u[m] !== null ? d.append(m, JSON.stringify(u[m])) : d.append(m, u[m])
            }
            ),
            h = "multipart/form-data") : (d = u,
            h = "application/json"),
            t.post(`/apps/${e}/functions/${l}`, d || u, {
                headers: {
                    "Content-Type": h
                }
            })
        },
        async fetch(l, u={}) {
            const h = `/functions${l.startsWith("/") ? l : `/${l}`}`
              , m = o(u.headers)
              , g = {
                ...u,
                headers: m
            };
            return await fetch(i(n == null ? void 0 : n.baseURL, h), g)
        }
    }
}
function by({axios: t, getSocket: e, appId: n, serverUrl: i, token: o}) {
    const l = `/apps/${n}/agents`
      , u = {}
      , d = () => t.get(`${l}/conversations`)
      , h = b => t.get(`${l}/conversations/${b}`);
    return {
        getConversations: d,
        getConversation: h,
        listConversations: b => t.get(`${l}/conversations`, {
            params: b
        }),
        createConversation: b => t.post(`${l}/conversations`, b),
        addMessage: async (b, S) => t.post(`${l}/conversations/v2/${b.id}/messages`, S),
        subscribeToConversation: (b, S) => {
            const A = `/agent-conversations/${b}`
              , V = e()
              , j = h(b).then(D => (u[b] = D,
            D));
            return V.subscribeToRoom(A, {
                connect: () => {}
                ,
                update_model: async ({data: D}) => {
                    const B = JSON.parse(D);
                    if (B._message) {
                        await j;
                        const q = B._message
                          , G = u[b];
                        if (G) {
                            const M = G.messages || []
                              , X = M.findIndex(de => de.id === q.id)
                              , me = X !== -1 ? M.map( (de, Te) => Te === X ? q : de) : [...M, q];
                            u[b] = {
                                ...G,
                                messages: me
                            },
                            S == null || S(u[b])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: b => {
            const S = `${i}/api/apps/${n}/agents/${encodeURIComponent(b)}/whatsapp`
              , A = o ?? _o();
            return A ? `${S}?token=${A}` : S
        }
        ,
        getTelegramConnectURL: b => {
            const S = `${i}/api/apps/${n}/agents/${encodeURIComponent(b)}/telegram`
              , A = o ?? _o();
            return A ? `${S}?token=${A}` : S
        }
    }
}
function ky(t, e) {
    const n = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${n}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(n, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${n}/stats`, {
                params: i
            })
        }
    }
}
function NP(t, e) {
    return {
        async inviteUser(n, i) {
            if (i !== "user" && i !== "admin")
                throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: n,
                role: i
            })
        }
    }
}
const Cn = Object.create(null);
Cn.open = "0";
Cn.close = "1";
Cn.ping = "2";
Cn.pong = "3";
Cn.message = "4";
Cn.upgrade = "5";
Cn.noop = "6";
const kl = Object.create(null);
Object.keys(Cn).forEach(t => {
    kl[Cn[t]] = t
}
);
const Jd = {
    type: "error",
    data: "parser error"
}
  , Cw = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Tw = typeof ArrayBuffer == "function"
  , Pw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , Ff = ({type: t, data: e}, n, i) => Cw && e instanceof Blob ? n ? i(e) : Ey(e, i) : Tw && (e instanceof ArrayBuffer || Pw(e)) ? n ? i(e) : Ey(new Blob([e]), i) : i(Cn[t] + (e || ""))
  , Ey = (t, e) => {
    const n = new FileReader;
    return n.onload = function() {
        const i = n.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    n.readAsDataURL(t)
}
;
function Cy(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let dd;
function OP(t, e) {
    if (Cw && t.data instanceof Blob)
        return t.data.arrayBuffer().then(Cy).then(e);
    if (Tw && (t.data instanceof ArrayBuffer || Pw(t.data)))
        return e(Cy(t.data));
    Ff(t, !1, n => {
        dd || (dd = new TextEncoder),
        e(dd.encode(n))
    }
    )
}
const Ty = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , fo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Ty.length; t++)
    fo[Ty.charCodeAt(t)] = t;
const jP = t => {
    let e = t.length * .75, n = t.length, i, o = 0, l, u, d, h;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e)
      , g = new Uint8Array(m);
    for (i = 0; i < n; i += 4)
        l = fo[t.charCodeAt(i)],
        u = fo[t.charCodeAt(i + 1)],
        d = fo[t.charCodeAt(i + 2)],
        h = fo[t.charCodeAt(i + 3)],
        g[o++] = l << 2 | u >> 4,
        g[o++] = (u & 15) << 4 | d >> 2,
        g[o++] = (d & 3) << 6 | h & 63;
    return m
}
  , LP = typeof ArrayBuffer == "function"
  , Vf = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: _w(t, e)
        };
    const n = t.charAt(0);
    return n === "b" ? {
        type: "message",
        data: DP(t.substring(1), e)
    } : kl[n] ? t.length > 1 ? {
        type: kl[n],
        data: t.substring(1)
    } : {
        type: kl[n]
    } : Jd
}
  , DP = (t, e) => {
    if (LP) {
        const n = jP(t);
        return _w(n, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , _w = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , Rw = ""
  , MP = (t, e) => {
    const n = t.length
      , i = new Array(n);
    let o = 0;
    t.forEach( (l, u) => {
        Ff(l, !1, d => {
            i[u] = d,
            ++o === n && e(i.join(Rw))
        }
        )
    }
    )
}
  , IP = (t, e) => {
    const n = t.split(Rw)
      , i = [];
    for (let o = 0; o < n.length; o++) {
        const l = Vf(n[o], e);
        if (i.push(l),
        l.type === "error")
            break
    }
    return i
}
;
function FP() {
    return new TransformStream({
        transform(t, e) {
            OP(t, n => {
                const i = n.length;
                let o;
                if (i < 126)
                    o = new Uint8Array(1),
                    new DataView(o.buffer).setUint8(0, i);
                else if (i < 65536) {
                    o = new Uint8Array(3);
                    const l = new DataView(o.buffer);
                    l.setUint8(0, 126),
                    l.setUint16(1, i)
                } else {
                    o = new Uint8Array(9);
                    const l = new DataView(o.buffer);
                    l.setUint8(0, 127),
                    l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (o[0] |= 128),
                e.enqueue(o),
                e.enqueue(n)
            }
            )
        }
    })
}
let fd;
function cl(t) {
    return t.reduce( (e, n) => e + n.length, 0)
}
function dl(t, e) {
    if (t[0].length === e)
        return t.shift();
    const n = new Uint8Array(e);
    let i = 0;
    for (let o = 0; o < e; o++)
        n[o] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    n
}
function VP(t, e) {
    fd || (fd = new TextDecoder);
    const n = [];
    let i = 0
      , o = -1
      , l = !1;
    return new TransformStream({
        transform(u, d) {
            for (n.push(u); ; ) {
                if (i === 0) {
                    if (cl(n) < 1)
                        break;
                    const h = dl(n, 1);
                    l = (h[0] & 128) === 128,
                    o = h[0] & 127,
                    o < 126 ? i = 3 : o === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (cl(n) < 2)
                        break;
                    const h = dl(n, 2);
                    o = new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (cl(n) < 8)
                        break;
                    const h = dl(n, 8)
                      , m = new DataView(h.buffer,h.byteOffset,h.length)
                      , g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        d.enqueue(Jd);
                        break
                    }
                    o = g * Math.pow(2, 32) + m.getUint32(4),
                    i = 3
                } else {
                    if (cl(n) < o)
                        break;
                    const h = dl(n, o);
                    d.enqueue(Vf(l ? h : fd.decode(h), e)),
                    i = 0
                }
                if (o === 0 || o > t) {
                    d.enqueue(Jd);
                    break
                }
            }
        }
    })
}
const Aw = 4;
function Ze(t) {
    if (t)
        return BP(t)
}
function BP(t) {
    for (var e in Ze.prototype)
        t[e] = Ze.prototype[e];
    return t
}
Ze.prototype.on = Ze.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
Ze.prototype.once = function(t, e) {
    function n() {
        this.off(t, n),
        e.apply(this, arguments)
    }
    return n.fn = e,
    this.on(t, n),
    this
}
;
Ze.prototype.off = Ze.prototype.removeListener = Ze.prototype.removeAllListeners = Ze.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var n = this._callbacks["$" + t];
    if (!n)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, o = 0; o < n.length; o++)
        if (i = n[o],
        i === e || i.fn === e) {
            n.splice(o, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + t],
    this
}
;
Ze.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (n) {
        n = n.slice(0);
        for (var i = 0, o = n.length; i < o; ++i)
            n[i].apply(this, e)
    }
    return this
}
;
Ze.prototype.emitReserved = Ze.prototype.emit;
Ze.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
Ze.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const Gl = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, n) => n(e, 0)
  , Zt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , UP = "arraybuffer";
function Nw(t, ...e) {
    return e.reduce( (n, i) => (t.hasOwnProperty(i) && (n[i] = t[i]),
    n), {})
}
const zP = Zt.setTimeout
  , $P = Zt.clearTimeout;
function Yl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = zP.bind(Zt),
    t.clearTimeoutFn = $P.bind(Zt)) : (t.setTimeoutFn = Zt.setTimeout.bind(Zt),
    t.clearTimeoutFn = Zt.clearTimeout.bind(Zt))
}
const HP = 1.33;
function qP(t) {
    return typeof t == "string" ? WP(t) : Math.ceil((t.byteLength || t.size) * HP)
}
function WP(t) {
    let e = 0
      , n = 0;
    for (let i = 0, o = t.length; i < o; i++)
        e = t.charCodeAt(i),
        e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (i++,
        n += 4);
    return n
}
function Ow() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function KP(t) {
    let e = "";
    for (let n in t)
        t.hasOwnProperty(n) && (e.length && (e += "&"),
        e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
    return e
}
function QP(t) {
    let e = {}
      , n = t.split("&");
    for (let i = 0, o = n.length; i < o; i++) {
        let l = n[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class GP extends Error {
    constructor(e, n, i) {
        super(e),
        this.description = n,
        this.context = i,
        this.type = "TransportError"
    }
}
class Bf extends Ze {
    constructor(e) {
        super(),
        this.writable = !1,
        Yl(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, n, i) {
        return super.emitReserved("error", new GP(e,n,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const n = Vf(e, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, n={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const n = KP(e);
        return n.length ? "?" + n : ""
    }
}
class YP extends Bf {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || n()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || n()
            }))
        } else
            n()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const n = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        IP(e, this.socket.binaryType).forEach(n),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        MP(e, n => {
            this.doWrite(n, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Ow()),
        !this.supportsBinary && !n.sid && (n.b64 = 1),
        this.createUri(e, n)
    }
}
let jw = !1;
try {
    jw = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const XP = jw;
function JP() {}
class ZP extends YP {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const n = location.protocol === "https:";
            let i = location.port;
            i || (i = n ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, n) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", n),
        i.on("error", (o, l) => {
            this.onError("xhr post error", o, l)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (n, i) => {
            this.onError("xhr poll error", n, i)
        }
        ),
        this.pollXhr = e
    }
}
class bn extends Ze {
    constructor(e, n, i) {
        super(),
        this.createRequest = e,
        Yl(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = n,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const n = Nw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(n);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let o in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(o) && i.setRequestHeader(o, this._opts.extraHeaders[o])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var o;
                i.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (o) {
            this.setTimeoutFn( () => {
                this._onError(o)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = bn.requestsCount++,
        bn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = JP,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete bn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
bn.requestsCount = 0;
bn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Py);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in Zt ? "pagehide" : "unload";
        addEventListener(t, Py, !1)
    }
}
function Py() {
    for (let t in bn.requests)
        bn.requests.hasOwnProperty(t) && bn.requests[t].abort()
}
const e_ = (function() {
    const t = Lw({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class t_ extends ZP {
    constructor(e) {
        super(e);
        const n = e && e.forceBase64;
        this.supportsBinary = e_ && !n
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new bn(Lw,this.uri(),e)
    }
}
function Lw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || XP))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new Zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const Dw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class n_ extends Bf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , n = this.opts.protocols
          , i = Dw ? {} : Nw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, n, i)
        } catch (o) {
            return this.emitReserved("error", o)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let n = 0; n < e.length; n++) {
            const i = e[n]
              , o = n === e.length - 1;
            Ff(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                o && Gl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = Ow()),
        this.supportsBinary || (n.b64 = 1),
        this.createUri(e, n)
    }
}
const hd = Zt.WebSocket || Zt.MozWebSocket;
class r_ extends n_ {
    createSocket(e, n, i) {
        return Dw ? new hd(e,n,i) : n ? new hd(e,n) : new hd(e)
    }
    doWrite(e, n) {
        this.ws.send(n)
    }
}
class s_ extends Bf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const n = VP(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(n).getReader()
                  , o = FP();
                o.readable.pipeTo(e.writable),
                this._writer = o.writable.getWriter();
                const l = () => {
                    i.read().then( ({done: d, value: h}) => {
                        d || (this.onPacket(h),
                        l())
                    }
                    ).catch(d => {}
                    )
                }
                ;
                l();
                const u = {
                    type: "open"
                };
                this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(u).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let n = 0; n < e.length; n++) {
            const i = e[n]
              , o = n === e.length - 1;
            this._writer.write(i).then( () => {
                o && Gl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const i_ = {
    websocket: r_,
    webtransport: s_,
    polling: t_
}
  , o_ = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , a_ = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Zd(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , n = t.indexOf("[")
      , i = t.indexOf("]");
    n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
    let o = o_.exec(t || "")
      , l = {}
      , u = 14;
    for (; u--; )
        l[a_[u]] = o[u] || "";
    return n != -1 && i != -1 && (l.source = e,
    l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"),
    l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    l.ipv6uri = !0),
    l.pathNames = l_(l, l.path),
    l.queryKey = u_(l, l.query),
    l
}
function l_(t, e) {
    const n = /\/{2,9}/g
      , i = e.replace(n, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function u_(t, e) {
    const n = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, o, l) {
        o && (n[o] = l)
    }),
    n
}
const ef = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , El = [];
ef && addEventListener("offline", () => {
    El.forEach(t => t())
}
, !1);
class Cr extends Ze {
    constructor(e, n) {
        if (super(),
        this.binaryType = UP,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (n = e,
        e = null),
        e) {
            const i = Zd(e);
            n.hostname = i.host,
            n.secure = i.protocol === "https" || i.protocol === "wss",
            n.port = i.port,
            i.query && (n.query = i.query)
        } else
            n.host && (n.hostname = Zd(n.host).host);
        Yl(this, n),
        this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:",
        n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
        this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        n.transports.forEach(i => {
            const o = i.prototype.name;
            this.transports.push(o),
            this._transportsByName[o] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, n),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = QP(this.opts.query)),
        ef && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        El.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = Aw,
        n.transport = e,
        this.id && (n.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Cr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(e);
        n.open(),
        this.setTransport(n)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open",
        Cr.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const n = new Error("server error");
                n.code = e.data,
                this._onError(n);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let n = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const o = this.writeBuffer[i].data;
            if (o && (n += qP(o)),
            i > 0 && n > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        Gl( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, n, i) {
        return this._sendPacket("message", e, n, i),
        this
    }
    send(e, n, i) {
        return this._sendPacket("message", e, n, i),
        this
    }
    _sendPacket(e, n, i, o) {
        if (typeof n == "function" && (o = n,
        n = void 0),
        typeof i == "function" && (o = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: n,
            options: i
        };
        this.emitReserved("packetCreate", l),
        this.writeBuffer.push(l),
        o && this.once("flush", o),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , n = () => {
            this.off("upgrade", n),
            this.off("upgradeError", n),
            e()
        }
          , i = () => {
            this.once("upgrade", n),
            this.once("upgradeError", n)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Cr.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            ef && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = El.indexOf(this._offlineEventListener);
                i !== -1 && El.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, n),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Cr.protocol = Aw;
class c_ extends Cr {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let n = this.createTransport(e)
          , i = !1;
        Cr.priorWebsocketSuccess = !1;
        const o = () => {
            i || (n.send([{
                type: "ping",
                data: "probe"
            }]),
            n.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", n),
                        !n)
                            return;
                        Cr.priorWebsocketSuccess = n.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(n),
                            n.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", n),
                            n = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const w = new Error("probe error");
                        w.transport = n.name,
                        this.emitReserved("upgradeError", w)
                    }
            }
            ))
        }
        ;
        function l() {
            i || (i = !0,
            g(),
            n.close(),
            n = null)
        }
        const u = y => {
            const w = new Error("probe error: " + y);
            w.transport = n.name,
            l(),
            this.emitReserved("upgradeError", w)
        }
        ;
        function d() {
            u("transport closed")
        }
        function h() {
            u("socket closed")
        }
        function m(y) {
            n && y.name !== n.name && l()
        }
        const g = () => {
            n.removeListener("open", o),
            n.removeListener("error", u),
            n.removeListener("close", d),
            this.off("close", h),
            this.off("upgrading", m)
        }
        ;
        n.once("open", o),
        n.once("error", u),
        n.once("close", d),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || n.open()
        }
        , 200) : n.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const n = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && n.push(e[i]);
        return n
    }
}
let d_ = class extends c_ {
    constructor(e, n={}) {
        const i = typeof e == "object" ? e : n;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(o => i_[o]).filter(o => !!o)),
        super(e, i)
    }
}
;
function f_(t, e="", n) {
    let i = t;
    n = n || typeof location < "u" && location,
    t == null && (t = n.protocol + "//" + n.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t),
    i = Zd(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e,
    i.href = i.protocol + "://" + l + (n && n.port === i.port ? "" : ":" + i.port),
    i
}
const h_ = typeof ArrayBuffer == "function"
  , p_ = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , Mw = Object.prototype.toString
  , m_ = typeof Blob == "function" || typeof Blob < "u" && Mw.call(Blob) === "[object BlobConstructor]"
  , g_ = typeof File == "function" || typeof File < "u" && Mw.call(File) === "[object FileConstructor]";
function Uf(t) {
    return h_ && (t instanceof ArrayBuffer || p_(t)) || m_ && t instanceof Blob || g_ && t instanceof File
}
function Cl(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let n = 0, i = t.length; n < i; n++)
            if (Cl(t[n]))
                return !0;
        return !1
    }
    if (Uf(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return Cl(t.toJSON(), !0);
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && Cl(t[n]))
            return !0;
    return !1
}
function y_(t) {
    const e = []
      , n = t.data
      , i = t;
    return i.data = tf(n, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function tf(t, e) {
    if (!t)
        return t;
    if (Uf(t)) {
        const n = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        n
    } else if (Array.isArray(t)) {
        const n = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            n[i] = tf(t[i], e);
        return n
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const n = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (n[i] = tf(t[i], e));
        return n
    }
    return t
}
function v_(t, e) {
    return t.data = nf(t.data, e),
    delete t.attachments,
    t
}
function nf(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let n = 0; n < t.length; n++)
            t[n] = nf(t[n], e);
    else if (typeof t == "object")
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (t[n] = nf(t[n], e));
    return t
}
const w_ = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Ce;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(Ce || (Ce = {}));
class x_ {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Ce.EVENT || e.type === Ce.ACK) && Cl(e) ? this.encodeAsBinary({
            type: e.type === Ce.EVENT ? Ce.BINARY_EVENT : Ce.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let n = "" + e.type;
        return (e.type === Ce.BINARY_EVENT || e.type === Ce.BINARY_ACK) && (n += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (n += e.nsp + ","),
        e.id != null && (n += e.id),
        e.data != null && (n += JSON.stringify(e.data, this.replacer)),
        n
    }
    encodeAsBinary(e) {
        const n = y_(e)
          , i = this.encodeAsString(n.packet)
          , o = n.buffers;
        return o.unshift(i),
        o
    }
}
class zf extends Ze {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let n;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(e);
            const i = n.type === Ce.BINARY_EVENT;
            i || n.type === Ce.BINARY_ACK ? (n.type = i ? Ce.EVENT : Ce.ACK,
            this.reconstructor = new S_(n),
            n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (Uf(e) || e.base64)
            if (this.reconstructor)
                n = this.reconstructor.takeBinaryData(e),
                n && (this.reconstructor = null,
                super.emitReserved("decoded", n));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let n = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Ce[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === Ce.BINARY_EVENT || i.type === Ce.BINARY_ACK) {
            const l = n + 1;
            for (; e.charAt(++n) !== "-" && n != e.length; )
                ;
            const u = e.substring(l, n);
            if (u != Number(u) || e.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(u)
        }
        if (e.charAt(n + 1) === "/") {
            const l = n + 1;
            for (; ++n && !(e.charAt(n) === "," || n === e.length); )
                ;
            i.nsp = e.substring(l, n)
        } else
            i.nsp = "/";
        const o = e.charAt(n + 1);
        if (o !== "" && Number(o) == o) {
            const l = n + 1;
            for (; ++n; ) {
                const u = e.charAt(n);
                if (u == null || Number(u) != u) {
                    --n;
                    break
                }
                if (n === e.length)
                    break
            }
            i.id = Number(e.substring(l, n + 1))
        }
        if (e.charAt(++n)) {
            const l = this.tryParse(e.substr(n));
            if (zf.isPayloadValid(i.type, l))
                i.data = l;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, n) {
        switch (e) {
        case Ce.CONNECT:
            return _y(n);
        case Ce.DISCONNECT:
            return n === void 0;
        case Ce.CONNECT_ERROR:
            return typeof n == "string" || _y(n);
        case Ce.EVENT:
        case Ce.BINARY_EVENT:
            return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && w_.indexOf(n[0]) === -1);
        case Ce.ACK:
        case Ce.BINARY_ACK:
            return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class S_ {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const n = v_(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
function _y(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const b_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: zf,
    Encoder: x_,
    get PacketType() {
        return Ce
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function fn(t, e, n) {
    return t.on(e, n),
    function() {
        t.off(e, n)
    }
}
const k_ = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Iw extends Ze {
    constructor(e, n, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = n,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [fn(e, "open", this.onopen.bind(this)), fn(e, "packet", this.onpacket.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...n) {
        var i, o, l;
        if (k_.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (n.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(n),
            this;
        const u = {
            type: Ce.EVENT,
            data: n
        };
        if (u.options = {},
        u.options.compress = this.flags.compress !== !1,
        typeof n[n.length - 1] == "function") {
            const g = this.ids++
              , y = n.pop();
            this._registerAckCallback(g, y),
            u.id = g
        }
        const d = (o = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || o === void 0 ? void 0 : o.writable
          , h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (h ? (this.notifyOutgoingListeners(u),
        this.packet(u)) : this.sendBuffer.push(u)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, n) {
        var i;
        const o = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (o === void 0) {
            this.acks[e] = n;
            return
        }
        const l = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let d = 0; d < this.sendBuffer.length; d++)
                this.sendBuffer[d].id === e && this.sendBuffer.splice(d, 1);
            n.call(this, new Error("operation has timed out"))
        }
        , o)
          , u = (...d) => {
            this.io.clearTimeoutFn(l),
            n.apply(this, d)
        }
        ;
        u.withError = !0,
        this.acks[e] = u
    }
    emitWithAck(e, ...n) {
        return new Promise( (i, o) => {
            const l = (u, d) => u ? o(u) : i(d);
            l.withError = !0,
            n.push(l),
            this.emit(e, ...n)
        }
        )
    }
    _addToQueue(e) {
        let n;
        typeof e[e.length - 1] == "function" && (n = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (o, ...l) => (this._queue[0],
        o !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        n && n(o)) : (this._queue.shift(),
        n && n(null, ...l)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const n = this._queue[0];
        n.pending && !e || (n.pending = !0,
        n.tryCount++,
        this.flags = n.flags,
        this.emit.apply(this, n.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Ce.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, n) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, n),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case Ce.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Ce.EVENT:
            case Ce.BINARY_EVENT:
                this.onevent(e);
                break;
            case Ce.ACK:
            case Ce.BINARY_ACK:
                this.onack(e);
                break;
            case Ce.DISCONNECT:
                this.ondisconnect();
                break;
            case Ce.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const n = e.data || [];
        e.id != null && n.push(this.ack(e.id)),
        this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const i of n)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const n = this;
        let i = !1;
        return function(...o) {
            i || (i = !0,
            n.packet({
                type: Ce.ACK,
                id: e,
                data: o
            }))
        }
    }
    onack(e) {
        const n = this.acks[e.id];
        typeof n == "function" && (delete this.acks[e.id],
        n.withError && e.data.unshift(null),
        n.apply(this, e.data))
    }
    onconnect(e, n) {
        this.id = e,
        this.recovered = n && this._pid === n,
        this._pid = n,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Ce.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const n = this._anyListeners;
            for (let i = 0; i < n.length; i++)
                if (e === n[i])
                    return n.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const n = this._anyOutgoingListeners;
            for (let i = 0; i < n.length; i++)
                if (e === n[i])
                    return n.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const i of n)
                i.apply(this, e.data)
        }
    }
}
function pi(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
pi.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , n = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n
    }
    return Math.min(t, this.max) | 0
}
;
pi.prototype.reset = function() {
    this.attempts = 0
}
;
pi.prototype.setMin = function(t) {
    this.ms = t
}
;
pi.prototype.setMax = function(t) {
    this.max = t
}
;
pi.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class rf extends Ze {
    constructor(e, n) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (n = e,
        e = void 0),
        n = n || {},
        n.path = n.path || "/socket.io",
        this.opts = n,
        Yl(this, n),
        this.reconnection(n.reconnection !== !1),
        this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(n.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new pi({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(n.timeout == null ? 2e4 : n.timeout),
        this._readyState = "closed",
        this.uri = e;
        const o = n.parser || b_;
        this.encoder = new o.Encoder,
        this.decoder = new o.Decoder,
        this._autoConnect = n.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var n;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (n = this.backoff) === null || n === void 0 || n.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var n;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (n = this.backoff) === null || n === void 0 || n.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var n;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (n = this.backoff) === null || n === void 0 || n.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new d_(this.uri,this.opts);
        const n = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const o = fn(n, "open", function() {
            i.onopen(),
            e && e()
        })
          , l = d => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", d),
            e ? e(d) : this.maybeReconnectOnOpen()
        }
          , u = fn(n, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout
              , h = this.setTimeoutFn( () => {
                o(),
                l(new Error("timeout")),
                n.close()
            }
            , d);
            this.opts.autoUnref && h.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(h)
            }
            )
        }
        return this.subs.push(o),
        this.subs.push(u),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(fn(e, "ping", this.onping.bind(this)), fn(e, "data", this.ondata.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this)), fn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(e) {
        Gl( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, n) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new Iw(this,e,n),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const n = Object.keys(this.nsps);
        for (const i of n)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const n = this.encoder.encode(e);
        for (let i = 0; i < n.length; i++)
            this.engine.write(n[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, n) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, n),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(o => {
                    o ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", o)) : e.onreconnect()
                }
                ))
            }
            , n);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const io = {};
function Tl(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const n = f_(t, e.path || "/socket.io")
      , i = n.source
      , o = n.id
      , l = n.path
      , u = io[o] && l in io[o].nsps
      , d = e.forceNew || e["force new connection"] || e.multiplex === !1 || u;
    let h;
    return d ? h = new rf(i,e) : (io[o] || (io[o] = new rf(i,e)),
    h = io[o]),
    n.query && !e.query && (e.query = n.queryKey),
    h.socket(n.path, e)
}
Object.assign(Tl, {
    Manager: rf,
    Socket: Iw,
    io: Tl,
    connect: Tl
});
function Ry(t, e) {
    var n;
    const i = Tl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (n = t.token) !== null && n !== void 0 ? n : _o()
        }
    });
    return i.on("connect", async () => {
        var o;
        return console.log("connect", i.id),
        (o = e.connect) === null || o === void 0 ? void 0 : o.call(e)
    }
    ),
    i.on("update_model", async o => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, o)
    }
    ),
    i.on("error", async o => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, o)
    }
    ),
    i.on("connect_error", async o => {
        var l;
        return console.error("connect_error", o),
        (l = e.error) === null || l === void 0 ? void 0 : l.call(e, o)
    }
    ),
    i
}
function E_({config: t}) {
    let e = {
        ...t
    };
    const n = {}
      , i = {
        connect: async () => {
            const E = [];
            Object.keys(n).forEach(k => {
                h(k);
                const b = y(k);
                b == null || b.forEach( ({connect: S}) => {
                    const A = async () => S == null ? void 0 : S();
                    E.push(A())
                }
                )
            }
            ),
            await Promise.all(E)
        }
        ,
        update_model: async E => {
            const b = y(E.room).map(S => {
                var A;
                return (A = S.update_model) === null || A === void 0 ? void 0 : A.call(S, E)
            }
            );
            await Promise.all(b)
        }
        ,
        error: async E => {
            console.error("error", E);
            const k = Object.values(n).flat().map(b => {
                var S;
                return (S = b.error) === null || S === void 0 ? void 0 : S.call(b, E)
            }
            );
            await Promise.all(k)
        }
    };
    let o = Ry(t, i);
    function l() {
        u()
    }
    function u() {
        o && o.disconnect()
    }
    function d(E) {
        l(),
        e = {
            ...e,
            ...E
        },
        o = Ry(e, i)
    }
    function h(E) {
        o.emit("join", E)
    }
    function m(E) {
        o.emit("leave", E)
    }
    async function g(E, k) {
        var b;
        const S = JSON.stringify(k);
        return (b = i.update_model) === null || b === void 0 ? void 0 : b.call(i, {
            room: E,
            data: S
        })
    }
    function y(E) {
        return n[E]
    }
    return {
        socket: o,
        subscribeToRoom: (E, k) => (n[E] || (h(E),
        n[E] = []),
        n[E].push(k),
        () => {
            var b, S;
            n[E] = (S = (b = n[E]) === null || b === void 0 ? void 0 : b.filter(A => A !== k)) !== null && S !== void 0 ? S : [],
            n[E].length === 0 && m(E)
        }
        ),
        updateConfig: d,
        updateModel: g,
        disconnect: u
    }
}
const T_ = "__user_heartbeat_event__"
  , P_ = "__initialization_event__"
  , __ = "__session_duration_event__"
  , Ay = "analytics-enable"
  , Ny = "base44_analytics_session_id"
  , R_ = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , A_ = "analytics"
  , De = C_(A_, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...R_,
        ...F_()
    }
}))
  , N_ = ({axiosClient: t, serverUrl: e, appId: n, userAuthModule: i}) => {
    var o;
    const {maxQueueSize: l, throttleTime: u, batchSize: d} = De.config;
    if (!(!((o = De.config) === null || o === void 0) && o.enabled))
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let h;
    const m = `${e}/api/apps/${n}/analytics/track/batch`
      , g = async j => {
        await t.request({
            method: "POST",
            url: `/apps/${n}/analytics/track/batch`,
            data: {
                events: j
            }
        })
    }
      , y = j => {
        try {
            const D = JSON.stringify({
                events: j
            })
              , B = new Blob([D],{
                type: "application/json"
            });
            return typeof navigator > "u" || D.length > 6e4 || !navigator.sendBeacon(m, B)
        } catch {
            return !1
        }
    }
      , w = async (j, D={}) => {
        if (j.length === 0)
            return;
        const B = await I_(i)
          , q = j.map(M_(B));
        try {
            (!D.isBeacon || !y(q)) && await g(q)
        } catch {}
    }
      , E = () => {
        jy(w, {
            throttleTime: u,
            batchSize: d
        })
    }
      , k = j => {
        if (De.requestsQueue.length >= l)
            return;
        const D = D_();
        De.requestsQueue.push({
            ...j,
            ...D
        }),
        E()
    }
      , b = () => {
        jy(w, {
            throttleTime: u,
            batchSize: d
        }),
        h = Ly(k),
        j_()
    }
      , S = () => {
        Oy(),
        h == null || h(),
        L_(k);
        const j = De.requestsQueue.splice(0);
        w(j, {
            isBeacon: !0
        })
    }
      , A = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && b())
    }
      , V = () => {
        Oy(),
        h == null || h(),
        typeof window < "u" && window.removeEventListener("visibilitychange", A)
    }
    ;
    return E(),
    h = Ly(k),
    O_(k),
    typeof window < "u" && window.addEventListener("visibilitychange", A),
    {
        track: k,
        cleanup: V
    }
}
;
function Oy() {
    De.isProcessing = !1
}
async function jy(t, e) {
    if (De.isProcessing)
        return;
    De.isProcessing = !0;
    const {throttleTime: n=1e3, batchSize: i=30} = e ?? {};
    for (; De.isProcessing && De.requestsQueue.length > 0; ) {
        const o = De.requestsQueue.splice(0, i);
        o.length && await t(o),
        await new Promise(l => setTimeout(l, n))
    }
    De.isProcessing = !1
}
function Ly(t) {
    var e;
    if (De.isHeartBeatProcessing || ((e = De.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10)
        return () => {}
        ;
    De.isHeartBeatProcessing = !0;
    const n = setInterval( () => {
        t({
            eventName: T_
        })
    }
    , De.config.heartBeatInterval);
    return () => {
        clearInterval(n),
        De.isHeartBeatProcessing = !1
    }
}
function O_(t) {
    typeof window > "u" || De.wasInitializationTracked || (De.wasInitializationTracked = !0,
    t({
        eventName: P_,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function j_() {
    typeof window > "u" || De.sessionStartTime !== null || (De.sessionStartTime = new Date().toISOString())
}
function L_(t) {
    if (typeof window > "u" || De.sessionStartTime === null)
        return;
    const e = new Date().getTime() - new Date(De.sessionStartTime).getTime();
    De.sessionStartTime = null,
    t({
        eventName: __,
        properties: {
            sessionDuration: e
        }
    })
}
function D_() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function M_(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let pd = null;
async function I_(t) {
    if (!De.sessionContext) {
        if (!pd) {
            const e = V_();
            pd = t.me().then(n => ({
                user_id: n.id,
                session_id: e
            })).catch( () => ({
                user_id: null,
                session_id: e
            }))
        }
        De.sessionContext = await pd
    }
    return De.sessionContext
}
function F_() {
    if (typeof window > "u")
        return;
    const e = new URLSearchParams(window.location.search).get(Ay);
    if (e == null || !e.length)
        return;
    const n = new URLSearchParams(window.location.search);
    n.delete(Ay);
    const i = window.location.pathname + (n.toString() ? "?" + n.toString() : "");
    return window.history.replaceState({}, "", i),
    {
        enabled: e === "true"
    }
}
function V_() {
    if (typeof window > "u")
        return ud();
    try {
        const t = localStorage.getItem(Ny);
        if (!t) {
            const e = ud();
            return localStorage.setItem(Ny, e),
            e
        }
        return t
    } catch {
        return ud()
    }
}
const Fw = typeof window > "u"
  , U_ = Fw ? {
    localStorage: new Map
} : window
  , vo = U_.localStorage
  , z_ = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , Us = (t, {defaultValue: e=void 0, removeFromUrl: n=!1}={}) => {
    if (Fw)
        return e;
    const i = `base44_${z_(t)}`
      , o = new URLSearchParams(window.location.search)
      , l = o.get(t);
    if (n) {
        o.delete(t);
        const d = `${window.location.pathname}${o.toString() ? `?${o.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, d)
    }
    if (l)
        return vo.setItem(i, l),
        l;
    if (e)
        return vo.setItem(i, e),
        e;
    const u = vo.getItem(i);
    return u || null
}
  
  ho = {
    ...$_()
}
  , {appId: H_, token: q_, functionsVersion: W_, appBaseUrl: K_} = ho
  , $s = B_({
    appId: H_,
    token: q_,
    functionsVersion: W_,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: K_
});
function Q_({}) {
    var o;
    const e = fi().pathname.substring(1)
      , {data: n, isFetched: i} = AE({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await $s.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return x.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: x.jsx("div", {
            className: "max-w-md w-full",
            children: x.jsxs("div", {
                className: "text-center space-y-6",
                children: [x.jsxs("div", {
                    className: "space-y-2",
                    children: [x.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), x.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), x.jsxs("div", {
                    className: "space-y-3",
                    children: [x.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), x.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", x.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && n.isAuthenticated && ((o = n.user) == null ? void 0 : o.role) === "admin" && x.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: x.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [x.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: x.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), x.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [x.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), x.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), x.jsx("div", {
                    className: "pt-6",
                    children: x.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [x.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: x.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Vw = _.createContext()
  , G_ = ({children: t}) => {
    const [e,n] = _.useState(null)
      , [i,o] = _.useState(!1)
      , [l,u] = _.useState(!0)
      , [d,h] = _.useState(!0)
      , [m,g] = _.useState(null)
      , [y,w] = _.useState(!1)
      , [E,k] = _.useState(null);
    _.useEffect( () => {
        b()
    }
    , []);
    const b = async () => {
        var j, D;
        try {
            h(!0),
            g(null);
            const B = co({
                baseURL: "/api/apps/public",
                headers: {
                    "X-App-Id": ho.appId
                },
                token: ho.token,
                interceptResponses: !0
            });
            try {
                const q = await B.get(`/prod/public-settings/by-id/${ho.appId}`);
                k(q),
                ho.token ? await S() : (u(!1),
                o(!1),
                w(!0)),
                h(!1)
            } catch (q) {
                if (console.error("App state check failed:", q),
                q.status === 403 && ((D = (j = q.data) == null ? void 0 : j.extra_data) != null && D.reason)) {
                    const G = q.data.extra_data.reason;
                    g(G === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : G === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: G,
                        message: q.message
                    })
                } else
                    g({
                        type: "unknown",
                        message: q.message || "Failed to load app"
                    });
                h(!1),
                u(!1)
            }
        } catch (B) {
            console.error("Unexpected error:", B),
            g({
                type: "unknown",
                message: B.message || "An unexpected error occurred"
            }),
            h(!1),
            u(!1)
        }
    }
      , S = async () => {
        try {
            u(!0);
            const j = await $s.auth.me();
            n(j),
            o(!0),
            u(!1),
            w(!0)
        } catch (j) {
            console.error("User auth check failed:", j),
            u(!1),
            o(!1),
            w(!0),
            (j.status === 401 || j.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , A = (j=!0) => {
        n(null),
        o(!1),
        j ? $s.auth.logout(window.location.href) : $s.auth.logout()
    }
      , V = () => {
        $s.auth.redirectToLogin(window.location.href)
    }
    ;
    return x.jsx(Vw.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: l,
            isLoadingPublicSettings: d,
            authError: m,
            appPublicSettings: E,
            authChecked: y,
            logout: A,
            navigateToLogin: V,
            checkUserAuth: S,
            checkAppState: b
        },
        children: t
    })
}
  , Y_ = () => {
    const t = _.useContext(Vw);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
  , X_ = () => x.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: x.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: x.jsxs("div", {
            className: "text-center",
            children: [x.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: x.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: x.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), x.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), x.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), x.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [x.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), x.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [x.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), x.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), x.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , $f = _.createContext({});
function Hf(t) {
    const e = _.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const Xl = _.createContext(null)
  , qf = _.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
class J_ extends _.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Z_({children: t, isPresent: e}) {
    const n = _.useId()
      , i = _.useRef(null)
      , o = _.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: l} = _.useContext(qf);
    return _.useInsertionEffect( () => {
        const {width: u, height: d, top: h, left: m} = o.current;
        if (e || !i.current || !u || !d)
            return;
        i.current.dataset.motionPopId = n;
        const g = document.createElement("style");
        return l && (g.nonce = l),
        document.head.appendChild(g),
        g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
            document.head.removeChild(g)
        }
    }
    , [e]),
    x.jsx(J_, {
        isPresent: e,
        childRef: i,
        sizeRef: o,
        children: _.cloneElement(t, {
            ref: i
        })
    })
}
const eR = ({children: t, initial: e, isPresent: n, onExitComplete: i, custom: o, presenceAffectsLayout: l, mode: u}) => {
    const d = Hf(tR)
      , h = _.useId()
      , m = _.useCallback(y => {
        d.set(y, !0);
        for (const w of d.values())
            if (!w)
                return;
        i && i()
    }
    , [d, i])
      , g = _.useMemo( () => ({
        id: h,
        initial: e,
        isPresent: n,
        custom: o,
        onExitComplete: m,
        register: y => (d.set(y, !1),
        () => d.delete(y))
    }), l ? [Math.random(), m] : [n, m]);
    return _.useMemo( () => {
        d.forEach( (y, w) => d.set(w, !1))
    }
    , [n]),
    _.useEffect( () => {
        !n && !d.size && i && i()
    }
    , [n]),
    u === "popLayout" && (t = x.jsx(Z_, {
        isPresent: n,
        children: t
    })),
    x.jsx(Xl.Provider, {
        value: g,
        children: t
    })
}
;
function tR() {
    return new Map
}
function Bw(t=!0) {
    const e = _.useContext(Xl);
    if (e === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: i, register: o} = e
      , l = _.useId();
    _.useEffect( () => {
        t && o(l)
    }
    , [t]);
    const u = _.useCallback( () => t && i && i(l), [l, i, t]);
    return !n && i ? [!1, u] : [!0]
}
const fl = t => t.key || "";
function Dy(t) {
    const e = [];
    return _.Children.forEach(t, n => {
        _.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const Wf = typeof window < "u"
  , Uw = Wf ? _.useLayoutEffect : _.useEffect
  , Ll = ({children: t, custom: e, initial: n=!0, onExitComplete: i, presenceAffectsLayout: o=!0, mode: l="sync", propagate: u=!1}) => {
    const [d,h] = Bw(u)
      , m = _.useMemo( () => Dy(t), [t])
      , g = u && !d ? [] : m.map(fl)
      , y = _.useRef(!0)
      , w = _.useRef(m)
      , E = Hf( () => new Map)
      , [k,b] = _.useState(m)
      , [S,A] = _.useState(m);
    Uw( () => {
        y.current = !1,
        w.current = m;
        for (let D = 0; D < S.length; D++) {
            const B = fl(S[D]);
            g.includes(B) ? E.delete(B) : E.get(B) !== !0 && E.set(B, !1)
        }
    }
    , [S, g.length, g.join("-")]);
    const V = [];
    if (m !== k) {
        let D = [...m];
        for (let B = 0; B < S.length; B++) {
            const q = S[B]
              , G = fl(q);
            g.includes(G) || (D.splice(B, 0, q),
            V.push(q))
        }
        l === "wait" && V.length && (D = V),
        A(Dy(D)),
        b(m);
        return
    }
    const {forceRender: j} = _.useContext($f);
    return x.jsx(x.Fragment, {
        children: S.map(D => {
            const B = fl(D)
              , q = u && !d ? !1 : m === S || g.includes(B)
              , G = () => {
                if (E.has(B))
                    E.set(B, !0);
                else
                    return;
                let M = !0;
                E.forEach(X => {
                    X || (M = !1)
                }
                ),
                M && (j == null || j(),
                A(w.current),
                u && (h == null || h()),
                i && i())
            }
            ;
            return x.jsx(eR, {
                isPresent: q,
                initial: !y.current || n ? void 0 : !1,
                custom: q ? void 0 : e,
                presenceAffectsLayout: o,
                mode: l,
                onExitComplete: q ? void 0 : G,
                children: D
            }, B)
        }
        )
    })
}
  , Bt = t => t;
let zw = Bt;
function Kf(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const li = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i
}
  , Bn = t => t * 1e3
  , Un = t => t / 1e3
  , nR = {
    useManualTiming: !1
};
function rR(t) {
    let e = new Set
      , n = new Set
      , i = !1
      , o = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(m) {
        l.has(m) && (h.schedule(m),
        t()),
        m(u)
    }
    const h = {
        schedule: (m, g=!1, y=!1) => {
            const E = y && i ? e : n;
            return g && l.add(m),
            E.has(m) || E.add(m),
            m
        }
        ,
        cancel: m => {
            n.delete(m),
            l.delete(m)
        }
        ,
        process: m => {
            if (u = m,
            i) {
                o = !0;
                return
            }
            i = !0,
            [e,n] = [n, e],
            e.forEach(d),
            e.clear(),
            i = !1,
            o && (o = !1,
            h.process(m))
        }
    };
    return h
}
const hl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , sR = 40;
function $w(t, e) {
    let n = !1
      , i = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => n = !0
      , u = hl.reduce( (A, V) => (A[V] = rR(l),
    A), {})
      , {read: d, resolveKeyframes: h, update: m, preRender: g, render: y, postRender: w} = u
      , E = () => {
        const A = performance.now();
        n = !1,
        o.delta = i ? 1e3 / 60 : Math.max(Math.min(A - o.timestamp, sR), 1),
        o.timestamp = A,
        o.isProcessing = !0,
        d.process(o),
        h.process(o),
        m.process(o),
        g.process(o),
        y.process(o),
        w.process(o),
        o.isProcessing = !1,
        n && e && (i = !1,
        t(E))
    }
      , k = () => {
        n = !0,
        i = !0,
        o.isProcessing || t(E)
    }
    ;
    return {
        schedule: hl.reduce( (A, V) => {
            const j = u[V];
            return A[V] = (D, B=!1, q=!1) => (n || k(),
            j.schedule(D, B, q)),
            A
        }
        , {}),
        cancel: A => {
            for (let V = 0; V < hl.length; V++)
                u[hl[V]].cancel(A)
        }
        ,
        state: o,
        steps: u
    }
}
const {schedule: Be, cancel: Tr, state: dt, steps: md} = $w(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0)
  , Hw = _.createContext({
    strict: !1
})
  , My = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ui = {};
for (const t in My)
    ui[t] = {
        isEnabled: e => My[t].some(n => !!e[n])
    };
function iR(t) {
    for (const e in t)
        ui[e] = {
            ...ui[e],
            ...t[e]
        }
}
const oR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Dl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || oR.has(t)
}
let qw = t => !Dl(t);
function aR(t) {
    t && (qw = e => e.startsWith("on") ? !Dl(e) : t(e))
}
try {
    aR(require("@emotion/is-prop-valid").default)
} catch {}
function lR(t, e, n) {
    const i = {};
    for (const o in t)
        o === "values" && typeof t.values == "object" || (qw(o) || n === !0 && Dl(o) || !e && !Dl(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
    return i
}
function uR(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , n = (...i) => t(...i);
    return new Proxy(n,{
        get: (i, o) => o === "create" ? t : (e.has(o) || e.set(o, t(o)),
        e.get(o))
    })
}
const Jl = _.createContext({});
function Ro(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Zl(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Qf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Gf = ["initial", ...Qf];
function eu(t) {
    return Zl(t.animate) || Gf.some(e => Ro(t[e]))
}
function Ww(t) {
    return !!(eu(t) || t.variants)
}
function cR(t, e) {
    if (eu(t)) {
        const {initial: n, animate: i} = t;
        return {
            initial: n === !1 || Ro(n) ? n : void 0,
            animate: Ro(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function dR(t) {
    const {initial: e, animate: n} = cR(t, _.useContext(Jl));
    return _.useMemo( () => ({
        initial: e,
        animate: n
    }), [Iy(e), Iy(n)])
}
function Iy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const fR = Symbol.for("motionComponentSymbol");
function Hs(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function hR(t, e, n) {
    return _.useCallback(i => {
        i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        n && (typeof n == "function" ? n(i) : Hs(n) && (n.current = i))
    }
    , [e])
}
const Yf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , pR = "framerAppearId"
  , Kw = "data-" + Yf(pR)
  , {schedule: Xf} = $w(queueMicrotask, !1)
  , Qw = _.createContext({});
function mR(t, e, n, i, o) {
    var l, u;
    const {visualElement: d} = _.useContext(Jl)
      , h = _.useContext(Hw)
      , m = _.useContext(Xl)
      , g = _.useContext(qf).reducedMotion
      , y = _.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: n,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current
      , E = _.useContext(Qw);
    w && !w.projection && o && (w.type === "html" || w.type === "svg") && gR(y.current, n, o, E);
    const k = _.useRef(!1);
    _.useInsertionEffect( () => {
        w && k.current && w.update(n, m)
    }
    );
    const b = n[Kw]
      , S = _.useRef(!!b && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, b)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, b)));
    return Uw( () => {
        w && (k.current = !0,
        window.MotionIsMounted = !0,
        w.updateFeatures(),
        Xf.render(w.render),
        S.current && w.animationState && w.animationState.animateChanges())
    }
    ),
    _.useEffect( () => {
        w && (!S.current && w.animationState && w.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var A;
            (A = window.MotionHandoffMarkAsComplete) === null || A === void 0 || A.call(window, b)
        }
        ),
        S.current = !1))
    }
    ),
    w
}
function gR(t, e, n, i) {
    const {layoutId: o, layout: l, drag: u, dragConstraints: d, layoutScroll: h, layoutRoot: m} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : Gw(t.parent)),
    t.projection.setOptions({
        layoutId: o,
        layout: l,
        alwaysMeasureLayout: !!u || d && Hs(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Gw(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Gw(t.parent)
}
function yR({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: o}) {
    var l, u;
    t && iR(t);
    function d(m, g) {
        let y;
        const w = {
            ..._.useContext(qf),
            ...m,
            layoutId: vR(m)
        }
          , {isStatic: E} = w
          , k = dR(m)
          , b = i(m, E);
        if (!E && Wf) {
            wR();
            const S = xR(w);
            y = S.MeasureLayout,
            k.visualElement = mR(o, b, w, e, S.ProjectionNode)
        }
        return x.jsxs(Jl.Provider, {
            value: k,
            children: [y && k.visualElement ? x.jsx(y, {
                visualElement: k.visualElement,
                ...w
            }) : null, n(o, m, hR(b, k.visualElement, g), b, E, k.visualElement)]
        })
    }
    d.displayName = `motion.${typeof o == "string" ? o : `create(${(u = (l = o.displayName) !== null && l !== void 0 ? l : o.name) !== null && u !== void 0 ? u : ""})`}`;
    const h = _.forwardRef(d);
    return h[fR] = o,
    h
}
function vR({layoutId: t}) {
    const e = _.useContext($f).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function wR(t, e) {
    _.useContext(Hw).strict
}
function xR(t) {
    const {drag: e, layout: n} = ui;
    if (!e && !n)
        return {};
    const i = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const SR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Jf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(SR.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function Fy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (n, i) => {
        e[0][i] = n.get(),
        e[1][i] = n.getVelocity()
    }
    ),
    e
}
function Zf(t, e, n, i) {
    if (typeof e == "function") {
        const [o,l] = Fy(i);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [o,l] = Fy(i);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    return e
}
const sf = t => Array.isArray(t)
  , bR = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , kR = t => sf(t) ? t[t.length - 1] || 0 : t
  , bt = t => !!(t && t.getVelocity);
function Pl(t) {
    const e = bt(t) ? t.get() : t;
    return bR(e) ? e.toValue() : e
}
function ER({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n}, i, o, l) {
    const u = {
        latestValues: CR(i, o, l, t),
        renderState: e()
    };
    return n && (u.onMount = d => n({
        props: i,
        current: d,
        ...u
    }),
    u.onUpdate = d => n(d)),
    u
}
const Yw = t => (e, n) => {
    const i = _.useContext(Jl)
      , o = _.useContext(Xl)
      , l = () => ER(t, e, i, o);
    return n ? l() : Hf(l)
}
;
function CR(t, e, n, i) {
    const o = {}
      , l = i(t, {});
    for (const w in l)
        o[w] = Pl(l[w]);
    let {initial: u, animate: d} = t;
    const h = eu(t)
      , m = Ww(t);
    e && m && !h && t.inherit !== !1 && (u === void 0 && (u = e.initial),
    d === void 0 && (d = e.animate));
    let g = n ? n.initial === !1 : !1;
    g = g || u === !1;
    const y = g ? d : u;
    if (y && typeof y != "boolean" && !Zl(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let E = 0; E < w.length; E++) {
            const k = Zf(t, w[E]);
            if (k) {
                const {transitionEnd: b, transition: S, ...A} = k;
                for (const V in A) {
                    let j = A[V];
                    if (Array.isArray(j)) {
                        const D = g ? j.length - 1 : 0;
                        j = j[D]
                    }
                    j !== null && (o[V] = j)
                }
                for (const V in b)
                    o[V] = b[V]
            }
        }
    }
    return o
}
const mi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ms = new Set(mi)
  , Xw = t => e => typeof e == "string" && e.startsWith(t)
  , Jw = Xw("--")
  , TR = Xw("var(--")
  , eh = t => TR(t) ? PR.test(t.split("/*")[0].trim()) : !1
  , PR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Zw = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , zn = (t, e, n) => n > e ? e : n < t ? t : n
  , gi = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , Ao = {
    ...gi,
    transform: t => zn(0, 1, t)
}
  , pl = {
    ...gi,
    default: 1
}
  , Wo = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , hr = Wo("deg")
  , kn = Wo("%")
  , ce = Wo("px")
  , _R = Wo("vh")
  , RR = Wo("vw")
  , Vy = {
    ...kn,
    parse: t => kn.parse(t) / 100,
    transform: t => kn.transform(t * 100)
}
  , AR = {
    borderWidth: ce,
    borderTopWidth: ce,
    borderRightWidth: ce,
    borderBottomWidth: ce,
    borderLeftWidth: ce,
    borderRadius: ce,
    radius: ce,
    borderTopLeftRadius: ce,
    borderTopRightRadius: ce,
    borderBottomRightRadius: ce,
    borderBottomLeftRadius: ce,
    width: ce,
    maxWidth: ce,
    height: ce,
    maxHeight: ce,
    top: ce,
    right: ce,
    bottom: ce,
    left: ce,
    padding: ce,
    paddingTop: ce,
    paddingRight: ce,
    paddingBottom: ce,
    paddingLeft: ce,
    margin: ce,
    marginTop: ce,
    marginRight: ce,
    marginBottom: ce,
    marginLeft: ce,
    backgroundPositionX: ce,
    backgroundPositionY: ce
}
  , NR = {
    rotate: hr,
    rotateX: hr,
    rotateY: hr,
    rotateZ: hr,
    scale: pl,
    scaleX: pl,
    scaleY: pl,
    scaleZ: pl,
    skew: hr,
    skewX: hr,
    skewY: hr,
    distance: ce,
    translateX: ce,
    translateY: ce,
    translateZ: ce,
    x: ce,
    y: ce,
    z: ce,
    perspective: ce,
    transformPerspective: ce,
    opacity: Ao,
    originX: Vy,
    originY: Vy,
    originZ: ce
}
  , By = {
    ...gi,
    transform: Math.round
}
  , th = {
    ...AR,
    ...NR,
    zIndex: By,
    size: ce,
    fillOpacity: Ao,
    strokeOpacity: Ao,
    numOctaves: By
}
  , OR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , jR = mi.length;
function LR(t, e, n) {
    let i = ""
      , o = !0;
    for (let l = 0; l < jR; l++) {
        const u = mi[l]
          , d = t[u];
        if (d === void 0)
            continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (u.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0,
        !h || n) {
            const m = Zw(d, th[u]);
            if (!h) {
                o = !1;
                const g = OR[u] || u;
                i += `${g}(${m}) `
            }
            n && (e[u] = m)
        }
    }
    return i = i.trim(),
    n ? i = n(e, o ? "" : i) : o && (i = "none"),
    i
}
function nh(t, e, n) {
    const {style: i, vars: o, transformOrigin: l} = t;
    let u = !1
      , d = !1;
    for (const h in e) {
        const m = e[h];
        if (ms.has(h)) {
            u = !0;
            continue
        } else if (Jw(h)) {
            o[h] = m;
            continue
        } else {
            const g = Zw(m, th[h]);
            h.startsWith("origin") ? (d = !0,
            l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (u || n ? i.transform = LR(e, t.transform, n) : i.transform && (i.transform = "none")),
    d) {
        const {originX: h="50%", originY: m="50%", originZ: g=0} = l;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const DR = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , MR = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function IR(t, e, n=1, i=0, o=!0) {
    t.pathLength = 1;
    const l = o ? DR : MR;
    t[l.offset] = ce.transform(-i);
    const u = ce.transform(e)
      , d = ce.transform(n);
    t[l.array] = `${u} ${d}`
}
function Uy(t, e, n) {
    return typeof t == "string" ? t : ce.transform(e + n * t)
}
function FR(t, e, n) {
    const i = Uy(e, t.x, t.width)
      , o = Uy(n, t.y, t.height);
    return `${i} ${o}`
}
function rh(t, {attrX: e, attrY: n, attrScale: i, originX: o, originY: l, pathLength: u, pathSpacing: d=1, pathOffset: h=0, ...m}, g, y) {
    if (nh(t, m, y),
    g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: w, style: E, dimensions: k} = t;
    w.transform && (k && (E.transform = w.transform),
    delete w.transform),
    k && (o !== void 0 || l !== void 0 || E.transform) && (E.transformOrigin = FR(k, o !== void 0 ? o : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (w.x = e),
    n !== void 0 && (w.y = n),
    i !== void 0 && (w.scale = i),
    u !== void 0 && IR(w, u, d, h, !1)
}
const sh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , ex = () => ({
    ...sh(),
    attrs: {}
})
  , ih = t => typeof t == "string" && t.toLowerCase() === "svg";
function tx(t, {style: e, vars: n}, i, o) {
    Object.assign(t.style, e, o && o.getProjectionStyles(i));
    for (const l in n)
        t.style.setProperty(l, n[l])
}
const nx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function rx(t, e, n, i) {
    tx(t, e, void 0, i);
    for (const o in e.attrs)
        t.setAttribute(nx.has(o) ? o : Yf(o), e.attrs[o])
}
const Ml = {};
function VR(t) {
    Object.assign(Ml, t)
}
function sx(t, {layout: e, layoutId: n}) {
    return ms.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ml[t] || t === "opacity")
}
function oh(t, e, n) {
    var i;
    const {style: o} = t
      , l = {};
    for (const u in o)
        (bt(o[u]) || e.style && bt(e.style[u]) || sx(u, t) || ((i = n == null ? void 0 : n.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[u] = o[u]);
    return l
}
function ix(t, e, n) {
    const i = oh(t, e, n);
    for (const o in t)
        if (bt(t[o]) || bt(e[o])) {
            const l = mi.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            i[l] = t[o]
        }
    return i
}
function BR(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const zy = ["x", "y", "width", "height", "cx", "cy", "r"]
  , UR = {
    useVisualState: Yw({
        scrapeMotionValuesFromProps: ix,
        createRenderState: ex,
        onUpdate: ({props: t, prevProps: e, current: n, renderState: i, latestValues: o}) => {
            if (!n)
                return;
            let l = !!t.drag;
            if (!l) {
                for (const d in o)
                    if (ms.has(d)) {
                        l = !0;
                        break
                    }
            }
            if (!l)
                return;
            let u = !e;
            if (e)
                for (let d = 0; d < zy.length; d++) {
                    const h = zy[d];
                    t[h] !== e[h] && (u = !0)
                }
            u && Be.read( () => {
                BR(n, i),
                Be.render( () => {
                    rh(i, o, ih(n.tagName), t.transformTemplate),
                    rx(n, i)
                }
                )
            }
            )
        }
    })
}
  , zR = {
    useVisualState: Yw({
        scrapeMotionValuesFromProps: oh,
        createRenderState: sh
    })
};
function ox(t, e, n) {
    for (const i in e)
        !bt(e[i]) && !sx(i, n) && (t[i] = e[i])
}
function $R({transformTemplate: t}, e) {
    return _.useMemo( () => {
        const n = sh();
        return nh(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function HR(t, e) {
    const n = t.style || {}
      , i = {};
    return ox(i, n, t),
    Object.assign(i, $R(t, e)),
    i
}
function qR(t, e) {
    const n = {}
      , i = HR(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
function WR(t, e, n, i) {
    const o = _.useMemo( () => {
        const l = ex();
        return rh(l, e, ih(i), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        ox(l, t.style, t),
        o.style = {
            ...l,
            ...o.style
        }
    }
    return o
}
function KR(t=!1) {
    return (n, i, o, {latestValues: l}, u) => {
        const h = (Jf(n) ? WR : qR)(i, l, u, n)
          , m = lR(i, typeof n == "string", t)
          , g = n !== _.Fragment ? {
            ...m,
            ...h,
            ref: o
        } : {}
          , {children: y} = i
          , w = _.useMemo( () => bt(y) ? y.get() : y, [y]);
        return _.createElement(n, {
            ...g,
            children: w
        })
    }
}
function QR(t, e) {
    return function(i, {forwardMotionProps: o}={
        forwardMotionProps: !1
    }) {
        const u = {
            ...Jf(i) ? UR : zR,
            preloadedFeatures: t,
            useRender: KR(o),
            createVisualElement: e,
            Component: i
        };
        return yR(u)
    }
}
function ax(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function tu(t, e, n) {
    const i = t.getProps();
    return Zf(i, e, n !== void 0 ? n : i.custom, t)
}
const GR = Kf( () => window.ScrollTimeline !== void 0);
class YR {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = n
    }
    attachTimeline(e, n) {
        const i = this.animations.map(o => {
            if (GR() && o.attachTimeline)
                return o.attachTimeline(e);
            if (typeof n == "function")
                return n(o)
        }
        );
        return () => {
            i.forEach( (o, l) => {
                o && o(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++)
            e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class XR extends YR {
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
}
function ah(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const of = 2e4;
function lx(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < of; )
        e += n,
        i = t.next(e);
    return e >= of ? 1 / 0 : e
}
function lh(t) {
    return typeof t == "function"
}
function $y(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const uh = t => Array.isArray(t) && typeof t[0] == "number"
  , JR = {
    linearEasing: void 0
};
function ZR(t, e) {
    const n = Kf(t);
    return () => {
        var i;
        return (i = JR[e]) !== null && i !== void 0 ? i : n()
    }
}
const Il = ZR( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , ux = (t, e, n=10) => {
    let i = "";
    const o = Math.max(Math.round(e / n), 2);
    for (let l = 0; l < o; l++)
        i += t(li(0, o - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function cx(t) {
    return !!(typeof t == "function" && Il() || !t || typeof t == "string" && (t in af || Il()) || uh(t) || Array.isArray(t) && t.every(cx))
}
const po = ([t,e,n,i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`
  , af = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: po([0, .65, .55, 1]),
    circOut: po([.55, 0, 1, .45]),
    backIn: po([.31, .01, .66, -.59]),
    backOut: po([.33, 1.53, .69, .99])
};
function dx(t, e) {
    if (t)
        return typeof t == "function" && Il() ? ux(t, e) : uh(t) ? po(t) : Array.isArray(t) ? t.map(n => dx(n, e) || af.easeOut) : af[t]
}
const un = {
    x: !1,
    y: !1
};
function fx() {
    return un.x || un.y
}
function hx(t, e, n) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let o = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : o.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
function px(t, e) {
    const n = hx(t)
      , i = new AbortController
      , o = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [n, o, () => i.abort()]
}
function Hy(t) {
    return e => {
        e.pointerType === "touch" || fx() || t(e)
    }
}
function eA(t, e, n={}) {
    const [i,o,l] = px(t, n)
      , u = Hy(d => {
        const {target: h} = d
          , m = e(d);
        if (typeof m != "function" || !h)
            return;
        const g = Hy(y => {
            m(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, o)
    }
    );
    return i.forEach(d => {
        d.addEventListener("pointerenter", u, o)
    }
    ),
    l
}
const mx = (t, e) => e ? t === e ? !0 : mx(t, e.parentElement) : !1
  , ch = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , tA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function nA(t) {
    return tA.has(t.tagName) || t.tabIndex !== -1
}
const mo = new WeakSet;
function qy(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function gd(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const rA = (t, e) => {
    const n = t.currentTarget;
    if (!n)
        return;
    const i = qy( () => {
        if (mo.has(n))
            return;
        gd(n, "down");
        const o = qy( () => {
            gd(n, "up")
        }
        )
          , l = () => gd(n, "cancel");
        n.addEventListener("keyup", o, e),
        n.addEventListener("blur", l, e)
    }
    );
    n.addEventListener("keydown", i, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
}
;
function Wy(t) {
    return ch(t) && !fx()
}
function sA(t, e, n={}) {
    const [i,o,l] = px(t, n)
      , u = d => {
        const h = d.currentTarget;
        if (!Wy(d) || mo.has(h))
            return;
        mo.add(h);
        const m = e(d)
          , g = (E, k) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!Wy(E) || !mo.has(h)) && (mo.delete(h),
            typeof m == "function" && m(E, {
                success: k
            }))
        }
          , y = E => {
            g(E, n.useGlobalTarget || mx(h, E.target))
        }
          , w = E => {
            g(E, !1)
        }
        ;
        window.addEventListener("pointerup", y, o),
        window.addEventListener("pointercancel", w, o)
    }
    ;
    return i.forEach(d => {
        !nA(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (n.useGlobalTarget ? window : d).addEventListener("pointerdown", u, o),
        d.addEventListener("focus", m => rA(m, o), o)
    }
    ),
    l
}
function iA(t) {
    return t === "x" || t === "y" ? un[t] ? null : (un[t] = !0,
    () => {
        un[t] = !1
    }
    ) : un.x || un.y ? null : (un.x = un.y = !0,
    () => {
        un.x = un.y = !1
    }
    )
}
const gx = new Set(["width", "height", "top", "left", "right", "bottom", ...mi]);
let _l;
function oA() {
    _l = void 0
}
const En = {
    now: () => (_l === void 0 && En.set(dt.isProcessing || nR.useManualTiming ? dt.timestamp : performance.now()),
    _l),
    set: t => {
        _l = t,
        queueMicrotask(oA)
    }
};
function dh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function fh(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class hh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return dh(this.subscriptions, e),
        () => fh(this.subscriptions, e)
    }
    notify(e, n, i) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](e, n, i);
            else
                for (let l = 0; l < o; l++) {
                    const u = this.subscriptions[l];
                    u && u(e, n, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function yx(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Ky = 30
  , aA = t => !isNaN(parseFloat(t));
class lA {
    constructor(e, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, o=!0) => {
            const l = En.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = En.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = aA(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new hh);
        const i = this.events[e].add(n);
        return e === "change" ? () => {
            i(),
            Be.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, i) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = En.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ky)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ky);
        return yx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function No(t, e) {
    return new lA(t,e)
}
function uA(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, No(n))
}
function cA(t, e) {
    const n = tu(t, e);
    let {transitionEnd: i={}, transition: o={}, ...l} = n || {};
    l = {
        ...l,
        ...i
    };
    for (const u in l) {
        const d = kR(l[u]);
        uA(t, u, d)
    }
}
function dA(t) {
    return !!(bt(t) && t.add)
}
function lf(t, e) {
    const n = t.getValue("willChange");
    if (dA(n))
        return n.add(e)
}
function vx(t) {
    return t.props[Kw]
}
const wx = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , fA = 1e-7
  , hA = 12;
function pA(t, e, n, i, o) {
    let l, u, d = 0;
    do
        u = e + (n - e) / 2,
        l = wx(u, i, o) - t,
        l > 0 ? n = u : e = u;
    while (Math.abs(l) > fA && ++d < hA);
    return u
}
function Ko(t, e, n, i) {
    if (t === e && n === i)
        return Bt;
    const o = l => pA(l, 0, 1, t, n);
    return l => l === 0 || l === 1 ? l : wx(o(l), e, i)
}
const xx = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Sx = t => e => 1 - t(1 - e)
  , bx = Ko(.33, 1.53, .69, .99)
  , ph = Sx(bx)
  , kx = xx(ph)
  , Ex = t => (t *= 2) < 1 ? .5 * ph(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , mh = t => 1 - Math.sin(Math.acos(t))
  , Cx = Sx(mh)
  , Tx = xx(mh)
  , Px = t => /^0[^.\s]+$/u.test(t);
function mA(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Px(t) : !0
}
const wo = t => Math.round(t * 1e5) / 1e5
  , gh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function gA(t) {
    return t == null
}
const yA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , yh = (t, e) => n => !!(typeof n == "string" && yA.test(n) && n.startsWith(t) || e && !gA(n) && Object.prototype.hasOwnProperty.call(n, e))
  , _x = (t, e, n) => i => {
    if (typeof i != "string")
        return i;
    const [o,l,u,d] = i.match(gh);
    return {
        [t]: parseFloat(o),
        [e]: parseFloat(l),
        [n]: parseFloat(u),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , vA = t => zn(0, 255, t)
  , yd = {
    ...gi,
    transform: t => Math.round(vA(t))
}
  , Jr = {
    test: yh("rgb", "red"),
    parse: _x("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: i=1}) => "rgba(" + yd.transform(t) + ", " + yd.transform(e) + ", " + yd.transform(n) + ", " + wo(Ao.transform(i)) + ")"
};
function wA(t) {
    let e = ""
      , n = ""
      , i = ""
      , o = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    i = t.substring(5, 7),
    o = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    i = t.substring(3, 4),
    o = t.substring(4, 5),
    e += e,
    n += n,
    i += i,
    o += o),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const uf = {
    test: yh("#"),
    parse: wA,
    transform: Jr.transform
}
  , qs = {
    test: yh("hsl", "hue"),
    parse: _x("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + kn.transform(wo(e)) + ", " + kn.transform(wo(n)) + ", " + wo(Ao.transform(i)) + ")"
}
  , xt = {
    test: t => Jr.test(t) || uf.test(t) || qs.test(t),
    parse: t => Jr.test(t) ? Jr.parse(t) : qs.test(t) ? qs.parse(t) : uf.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Jr.transform(t) : qs.transform(t)
}
  , xA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function SA(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(gh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(xA)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Rx = "number"
  , Ax = "color"
  , bA = "var"
  , kA = "var("
  , Qy = "${}"
  , EA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Oo(t) {
    const e = t.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let l = 0;
    const d = e.replace(EA, h => (xt.test(h) ? (i.color.push(l),
    o.push(Ax),
    n.push(xt.parse(h))) : h.startsWith(kA) ? (i.var.push(l),
    o.push(bA),
    n.push(h)) : (i.number.push(l),
    o.push(Rx),
    n.push(parseFloat(h))),
    ++l,
    Qy)).split(Qy);
    return {
        values: n,
        split: d,
        indexes: i,
        types: o
    }
}
function Nx(t) {
    return Oo(t).values
}
function Ox(t) {
    const {split: e, types: n} = Oo(t)
      , i = e.length;
    return o => {
        let l = "";
        for (let u = 0; u < i; u++)
            if (l += e[u],
            o[u] !== void 0) {
                const d = n[u];
                d === Rx ? l += wo(o[u]) : d === Ax ? l += xt.transform(o[u]) : l += o[u]
            }
        return l
    }
}
const CA = t => typeof t == "number" ? 0 : t;
function TA(t) {
    const e = Nx(t);
    return Ox(t)(e.map(CA))
}
const Pr = {
    test: SA,
    parse: Nx,
    createTransformer: Ox,
    getAnimatableNone: TA
}
  , PA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _A(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = n.match(gh) || [];
    if (!i)
        return t;
    const o = n.replace(i, "");
    let l = PA.has(e) ? 1 : 0;
    return i !== n && (l *= 100),
    e + "(" + l + o + ")"
}
const RA = /\b([a-z-]*)\(.*?\)/gu
  , cf = {
    ...Pr,
    getAnimatableNone: t => {
        const e = t.match(RA);
        return e ? e.map(_A).join(" ") : t
    }
}
  , AA = {
    ...th,
    color: xt,
    backgroundColor: xt,
    outlineColor: xt,
    fill: xt,
    stroke: xt,
    borderColor: xt,
    borderTopColor: xt,
    borderRightColor: xt,
    borderBottomColor: xt,
    borderLeftColor: xt,
    filter: cf,
    WebkitFilter: cf
}
  , vh = t => AA[t];
function jx(t, e) {
    let n = vh(t);
    return n !== cf && (n = Pr),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const NA = new Set(["auto", "none", "0"]);
function OA(t, e, n) {
    let i = 0, o;
    for (; i < t.length && !o; ) {
        const l = t[i];
        typeof l == "string" && !NA.has(l) && Oo(l).values.length && (o = t[i]),
        i++
    }
    if (o && n)
        for (const l of e)
            t[l] = jx(n, o)
}
const Gy = t => t === gi || t === ce
  , Yy = (t, e) => parseFloat(t.split(", ")[e])
  , Xy = (t, e) => (n, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const o = i.match(/^matrix3d\((.+)\)$/u);
    if (o)
        return Yy(o[1], e);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? Yy(l[1], t) : 0
    }
}
  , jA = new Set(["x", "y", "z"])
  , LA = mi.filter(t => !jA.has(t));
function DA(t) {
    const e = [];
    return LA.forEach(n => {
        const i = t.getValue(n);
        i !== void 0 && (e.push([n, i.get()]),
        i.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const ci = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: Xy(4, 13),
    y: Xy(5, 14)
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const cs = new Set;
let df = !1
  , ff = !1;
function Lx() {
    if (ff) {
        const t = Array.from(cs).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , n = new Map;
        e.forEach(i => {
            const o = DA(i);
            o.length && (n.set(i, o),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const o = n.get(i);
            o && o.forEach( ([l,u]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(u)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    ff = !1,
    df = !1,
    cs.forEach(t => t.complete()),
    cs.clear()
}
function Dx() {
    cs.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (ff = !0)
    }
    )
}
function MA() {
    Dx(),
    Lx()
}
class wh {
    constructor(e, n, i, o, l, u=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = i,
        this.motionValue = o,
        this.element = l,
        this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (cs.add(this),
        df || (df = !0,
        Be.read(Dx),
        Be.resolveKeyframes(Lx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: i, motionValue: o} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const u = o == null ? void 0 : o.get()
                      , d = e[e.length - 1];
                    if (u !== void 0)
                        e[0] = u;
                    else if (i && n) {
                        const h = i.readValue(n, d);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = d),
                    o && u === void 0 && o.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        cs.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        cs.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Mx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , IA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function FA(t) {
    const e = IA.exec(t);
    if (!e)
        return [, ];
    const [,n,i,o] = e;
    return [`--${n ?? i}`, o]
}
function Ix(t, e, n=1) {
    const [i,o] = FA(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const u = l.trim();
        return Mx(u) ? parseFloat(u) : u
    }
    return eh(o) ? Ix(o, e, n + 1) : o
}
const Fx = t => e => e.test(t)
  , VA = {
    test: t => t === "auto",
    parse: t => t
}
  , Vx = [gi, ce, kn, hr, RR, _R, VA]
  , Jy = t => Vx.find(Fx(t));
class Bx extends wh {
    constructor(e, n, i, o, l) {
        super(e, n, i, o, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: i} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(),
            eh(m))) {
                const g = Ix(m, n.current);
                g !== void 0 && (e[h] = g),
                h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !gx.has(i) || e.length !== 2)
            return;
        const [o,l] = e
          , u = Jy(o)
          , d = Jy(l);
        if (u !== d)
            if (Gy(u) && Gy(d))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , i = [];
        for (let o = 0; o < e.length; o++)
            mA(e[o]) && i.push(o);
        i.length && OA(e, i, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ci[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && e.getValue(i, o).jump(o, !1)
    }
    measureEndState() {
        var e;
        const {element: n, name: i, unresolvedKeyframes: o} = this;
        if (!n || !n.current)
            return;
        const l = n.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const u = o.length - 1
          , d = o[u];
        o[u] = ci[i](n.measureViewportBox(), window.getComputedStyle(n.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([h,m]) => {
            n.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Zy = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Pr.test(t) || t === "0") && !t.startsWith("url("));
function BA(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function UA(t, e, n, i) {
    const o = t[0];
    if (o === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , u = Zy(o, e)
      , d = Zy(l, e);
    return !u || !d ? !1 : BA(t) || (n === "spring" || lh(n)) && i
}
const zA = t => t !== null;
function nu(t, {repeat: e, repeatType: n="loop"}, i) {
    const o = t.filter(zA)
      , l = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !l || i === void 0 ? o[l] : i
}
const $A = 40;
class Ux {
    constructor({autoplay: e=!0, delay: n=0, type: i="keyframes", repeat: o=0, repeatDelay: l=0, repeatType: u="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = En.now(),
        this.options = {
            autoplay: e,
            delay: n,
            type: i,
            repeat: o,
            repeatDelay: l,
            repeatType: u,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > $A ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && MA(),
        this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = En.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: o, velocity: l, delay: u, onComplete: d, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !UA(e, i, o, l))
            if (u)
                this.options.duration = 0;
            else {
                h && h(nu(e, this.options, n)),
                d && d(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, n);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const He = (t, e, n) => t + (e - t) * n;
function vd(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function HA({hue: t, saturation: e, lightness: n, alpha: i}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let o = 0
      , l = 0
      , u = 0;
    if (!e)
        o = l = u = n;
    else {
        const d = n < .5 ? n * (1 + e) : n + e - n * e
          , h = 2 * n - d;
        o = vd(h, d, t + 1 / 3),
        l = vd(h, d, t),
        u = vd(h, d, t - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: i
    }
}
function Fl(t, e) {
    return n => n > 0 ? e : t
}
const wd = (t, e, n) => {
    const i = t * t
      , o = n * (e * e - i) + i;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , qA = [uf, Jr, qs]
  , WA = t => qA.find(e => e.test(t));
function ev(t) {
    const e = WA(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === qs && (n = HA(n)),
    n
}
const tv = (t, e) => {
    const n = ev(t)
      , i = ev(e);
    if (!n || !i)
        return Fl(t, e);
    const o = {
        ...n
    };
    return l => (o.red = wd(n.red, i.red, l),
    o.green = wd(n.green, i.green, l),
    o.blue = wd(n.blue, i.blue, l),
    o.alpha = He(n.alpha, i.alpha, l),
    Jr.transform(o))
}
  , KA = (t, e) => n => e(t(n))
  , Qo = (...t) => t.reduce(KA)
  , hf = new Set(["none", "hidden"]);
function QA(t, e) {
    return hf.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function GA(t, e) {
    return n => He(t, e, n)
}
function xh(t) {
    return typeof t == "number" ? GA : typeof t == "string" ? eh(t) ? Fl : xt.test(t) ? tv : JA : Array.isArray(t) ? zx : typeof t == "object" ? xt.test(t) ? tv : YA : Fl
}
function zx(t, e) {
    const n = [...t]
      , i = n.length
      , o = t.map( (l, u) => xh(l)(l, e[u]));
    return l => {
        for (let u = 0; u < i; u++)
            n[u] = o[u](l);
        return n
    }
}
function YA(t, e) {
    const n = {
        ...t,
        ...e
    }
      , i = {};
    for (const o in n)
        t[o] !== void 0 && e[o] !== void 0 && (i[o] = xh(t[o])(t[o], e[o]));
    return o => {
        for (const l in i)
            n[l] = i[l](o);
        return n
    }
}
function XA(t, e) {
    var n;
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const u = e.types[l]
          , d = t.indexes[u][o[u]]
          , h = (n = t.values[d]) !== null && n !== void 0 ? n : 0;
        i[l] = h,
        o[u]++
    }
    return i
}
const JA = (t, e) => {
    const n = Pr.createTransformer(e)
      , i = Oo(t)
      , o = Oo(e);
    return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? hf.has(t) && !o.values.length || hf.has(e) && !i.values.length ? QA(t, e) : Qo(zx(XA(i, o), o.values), n) : Fl(t, e)
}
;
function $x(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? He(t, e, n) : xh(t)(t, e)
}
const ZA = 5;
function Hx(t, e, n) {
    const i = Math.max(e - ZA, 0);
    return yx(n - t(i), e - i)
}
const Ke = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , xd = .001;
function eN({duration: t=Ke.duration, bounce: e=Ke.bounce, velocity: n=Ke.velocity, mass: i=Ke.mass}) {
    let o, l, u = 1 - e;
    u = zn(Ke.minDamping, Ke.maxDamping, u),
    t = zn(Ke.minDuration, Ke.maxDuration, Un(t)),
    u < 1 ? (o = m => {
        const g = m * u
          , y = g * t
          , w = g - n
          , E = pf(m, u)
          , k = Math.exp(-y);
        return xd - w / E * k
    }
    ,
    l = m => {
        const y = m * u * t
          , w = y * n + n
          , E = Math.pow(u, 2) * Math.pow(m, 2) * t
          , k = Math.exp(-y)
          , b = pf(Math.pow(m, 2), u);
        return (-o(m) + xd > 0 ? -1 : 1) * ((w - E) * k) / b
    }
    ) : (o = m => {
        const g = Math.exp(-m * t)
          , y = (m - n) * t + 1;
        return -xd + g * y
    }
    ,
    l = m => {
        const g = Math.exp(-m * t)
          , y = (n - m) * (t * t);
        return g * y
    }
    );
    const d = 5 / t
      , h = nN(o, l, d);
    if (t = Bn(t),
    isNaN(h))
        return {
            stiffness: Ke.stiffness,
            damping: Ke.damping,
            duration: t
        };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: u * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const tN = 12;
function nN(t, e, n) {
    let i = n;
    for (let o = 1; o < tN; o++)
        i = i - t(i) / e(i);
    return i
}
function pf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const rN = ["duration", "bounce"]
  , sN = ["stiffness", "damping", "mass"];
function nv(t, e) {
    return e.some(n => t[n] !== void 0)
}
function iN(t) {
    let e = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!nv(t, sN) && nv(t, rN))
        if (t.visualDuration) {
            const n = t.visualDuration
              , i = 2 * Math.PI / (n * 1.2)
              , o = i * i
              , l = 2 * zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
            e = {
                ...e,
                mass: Ke.mass,
                stiffness: o,
                damping: l
            }
        } else {
            const n = eN(t);
            e = {
                ...e,
                ...n,
                mass: Ke.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function qx(t=Ke.visualDuration, e=Ke.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: o} = n;
    const l = n.keyframes[0]
      , u = n.keyframes[n.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: h, damping: m, mass: g, duration: y, velocity: w, isResolvedFromDuration: E} = iN({
        ...n,
        velocity: -Un(n.velocity || 0)
    })
      , k = w || 0
      , b = m / (2 * Math.sqrt(h * g))
      , S = u - l
      , A = Un(Math.sqrt(h / g))
      , V = Math.abs(S) < 5;
    i || (i = V ? Ke.restSpeed.granular : Ke.restSpeed.default),
    o || (o = V ? Ke.restDelta.granular : Ke.restDelta.default);
    let j;
    if (b < 1) {
        const B = pf(A, b);
        j = q => {
            const G = Math.exp(-b * A * q);
            return u - G * ((k + b * A * S) / B * Math.sin(B * q) + S * Math.cos(B * q))
        }
    } else if (b === 1)
        j = B => u - Math.exp(-A * B) * (S + (k + A * S) * B);
    else {
        const B = A * Math.sqrt(b * b - 1);
        j = q => {
            const G = Math.exp(-b * A * q)
              , M = Math.min(B * q, 300);
            return u - G * ((k + b * A * S) * Math.sinh(M) + B * S * Math.cosh(M)) / B
        }
    }
    const D = {
        calculatedDuration: E && y || null,
        next: B => {
            const q = j(B);
            if (E)
                d.done = B >= y;
            else {
                let G = 0;
                b < 1 && (G = B === 0 ? Bn(k) : Hx(j, B, q));
                const M = Math.abs(G) <= i
                  , X = Math.abs(u - q) <= o;
                d.done = M && X
            }
            return d.value = d.done ? u : q,
            d
        }
        ,
        toString: () => {
            const B = Math.min(lx(D), of)
              , q = ux(G => D.next(B * G).value, B, 30);
            return B + "ms " + q
        }
    };
    return D
}
function rv({keyframes: t, velocity: e=0, power: n=.8, timeConstant: i=325, bounceDamping: o=10, bounceStiffness: l=500, modifyTarget: u, min: d, max: h, restDelta: m=.5, restSpeed: g}) {
    const y = t[0]
      , w = {
        done: !1,
        value: y
    }
      , E = M => d !== void 0 && M < d || h !== void 0 && M > h
      , k = M => d === void 0 ? h : h === void 0 || Math.abs(d - M) < Math.abs(h - M) ? d : h;
    let b = n * e;
    const S = y + b
      , A = u === void 0 ? S : u(S);
    A !== S && (b = A - y);
    const V = M => -b * Math.exp(-M / i)
      , j = M => A + V(M)
      , D = M => {
        const X = V(M)
          , me = j(M);
        w.done = Math.abs(X) <= m,
        w.value = w.done ? A : me
    }
    ;
    let B, q;
    const G = M => {
        E(w.value) && (B = M,
        q = qx({
            keyframes: [w.value, k(w.value)],
            velocity: Hx(j, M, w.value),
            damping: o,
            stiffness: l,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return G(0),
    {
        calculatedDuration: null,
        next: M => {
            let X = !1;
            return !q && B === void 0 && (X = !0,
            D(M),
            G(M)),
            B !== void 0 && M >= B ? q.next(M - B) : (!X && D(M),
            w)
        }
    }
}
const oN = Ko(.42, 0, 1, 1)
  , aN = Ko(0, 0, .58, 1)
  , Wx = Ko(.42, 0, .58, 1)
  , lN = t => Array.isArray(t) && typeof t[0] != "number"
  , uN = {
    linear: Bt,
    easeIn: oN,
    easeInOut: Wx,
    easeOut: aN,
    circIn: mh,
    circInOut: Tx,
    circOut: Cx,
    backIn: ph,
    backInOut: kx,
    backOut: bx,
    anticipate: Ex
}
  , sv = t => {
    if (uh(t)) {
        zw(t.length === 4);
        const [e,n,i,o] = t;
        return Ko(e, n, i, o)
    } else if (typeof t == "string")
        return uN[t];
    return t
}
;
function cN(t, e, n) {
    const i = []
      , o = n || $x
      , l = t.length - 1;
    for (let u = 0; u < l; u++) {
        let d = o(t[u], t[u + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[u] || Bt : e;
            d = Qo(h, d)
        }
        i.push(d)
    }
    return i
}
function dN(t, e, {clamp: n=!0, ease: i, mixer: o}={}) {
    const l = t.length;
    if (zw(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && e[0] === e[1])
        return () => e[1];
    const u = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const d = cN(e, i, o)
      , h = d.length
      , m = g => {
        if (u && g < t[0])
            return e[0];
        let y = 0;
        if (h > 1)
            for (; y < t.length - 2 && !(g < t[y + 1]); y++)
                ;
        const w = li(t[y], t[y + 1], g);
        return d[y](w)
    }
    ;
    return n ? g => m(zn(t[0], t[l - 1], g)) : m
}
function fN(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const o = li(0, e, i);
        t.push(He(n, 1, o))
    }
}
function hN(t) {
    const e = [0];
    return fN(e, t.length - 1),
    e
}
function pN(t, e) {
    return t.map(n => n * e)
}
function mN(t, e) {
    return t.map( () => e || Wx).splice(0, t.length - 1)
}
function Vl({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
    const o = lN(i) ? i.map(sv) : sv(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , u = pN(n && n.length === e.length ? n : hN(e), t)
      , d = dN(u, e, {
        ease: Array.isArray(o) ? o : mN(e, o)
    });
    return {
        calculatedDuration: t,
        next: h => (l.value = d(h),
        l.done = h >= t,
        l)
    }
}
const gN = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: () => Be.update(e, !0),
        stop: () => Tr(e),
        now: () => dt.isProcessing ? dt.timestamp : En.now()
    }
}
  , yN = {
    decay: rv,
    inertia: rv,
    tween: Vl,
    keyframes: Vl,
    spring: qx
}
  , vN = t => t / 100;
class Sh extends Ux {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options
          , u = (o == null ? void 0 : o.KeyframeResolver) || wh
          , d = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new u(l,d,n,i,o),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: n="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: l, velocity: u=0} = this.options
          , d = lh(n) ? n : yN[n] || Vl;
        let h, m;
        d !== Vl && typeof e[0] != "number" && (h = Qo(vN, $x(e[0], e[1])),
        e = [0, 100]);
        const g = d({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (m = d({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -u
        })),
        g.calculatedDuration === null && (g.calculatedDuration = lx(g));
        const {calculatedDuration: y} = g
          , w = y + o
          , E = w * (i + 1) - o;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: M} = this.options;
            return {
                done: !0,
                value: M[M.length - 1]
            }
        }
        const {finalKeyframe: o, generator: l, mirroredGenerator: u, mapPercentToKeyframes: d, keyframes: h, calculatedDuration: m, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: w, repeat: E, repeatType: k, repeatDelay: b, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)),
        n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const A = this.currentTime - w * (this.speed >= 0 ? 1 : -1)
          , V = this.speed >= 0 ? A < 0 : A > g;
        this.currentTime = Math.max(A, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let j = this.currentTime
          , D = l;
        if (E) {
            const M = Math.min(this.currentTime, g) / y;
            let X = Math.floor(M)
              , me = M % 1;
            !me && M >= 1 && (me = 1),
            me === 1 && X--,
            X = Math.min(X, E + 1),
            !!(X % 2) && (k === "reverse" ? (me = 1 - me,
            b && (me -= b / y)) : k === "mirror" && (D = u)),
            j = zn(0, 1, me) * y
        }
        const B = V ? {
            done: !1,
            value: h[0]
        } : D.next(j);
        d && (B.value = d(B.value));
        let {done: q} = B;
        !V && m !== null && (q = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && q);
        return G && o !== void 0 && (B.value = nu(h, this.options, o)),
        S && S(B.value),
        G && this.finish(),
        B
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Un(e.calculatedDuration) : 0
    }
    get time() {
        return Un(this.currentTime)
    }
    set time(e) {
        e = Bn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        n && (this.time = Un(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=gN, onPlay: n, startTime: i} = this.options;
        this.driver || (this.driver = e(l => this.tick(l))),
        n && n();
        const o = this.driver.now();
        this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const wN = new Set(["opacity", "clipPath", "filter", "transform"]);
function xN(t, e, n, {delay: i=0, duration: o=300, repeat: l=0, repeatType: u="loop", ease: d="easeInOut", times: h}={}) {
    const m = {
        [e]: n
    };
    h && (m.offset = h);
    const g = dx(d, o);
    return Array.isArray(g) && (m.easing = g),
    t.animate(m, {
        delay: i,
        duration: o,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const SN = Kf( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Bl = 10
  , bN = 2e4;
function kN(t) {
    return lh(t.type) || t.type === "spring" || !cx(t.ease)
}
function EN(t, e) {
    const n = new Sh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const o = [];
    let l = 0;
    for (; !i.done && l < bN; )
        i = n.sample(l),
        o.push(i.value),
        l += Bl;
    return {
        times: void 0,
        keyframes: o,
        duration: l - Bl,
        ease: "linear"
    }
}
const Kx = {
    anticipate: Ex,
    backInOut: kx,
    circInOut: Tx
};
function CN(t) {
    return t in Kx
}
class iv extends Ux {
    constructor(e) {
        super(e);
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options;
        this.resolver = new Bx(l, (u, d) => this.onKeyframesResolved(u, d),n,i,o),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        let {duration: i=300, times: o, ease: l, type: u, motionValue: d, name: h, startTime: m} = this.options;
        if (!d.owner || !d.owner.current)
            return !1;
        if (typeof l == "string" && Il() && CN(l) && (l = Kx[l]),
        kN(this.options)) {
            const {onComplete: y, onUpdate: w, motionValue: E, element: k, ...b} = this.options
              , S = EN(e, b);
            e = S.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = S.duration,
            o = S.times,
            l = S.ease,
            u = "keyframes"
        }
        const g = xN(d.owner.current, h, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: l
        });
        return g.startTime = m ?? this.calcStartTime(),
        this.pendingTimeline ? ($y(g, this.pendingTimeline),
        this.pendingTimeline = void 0) : g.onfinish = () => {
            const {onComplete: y} = this.options;
            d.set(nu(e, this.options, n)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: g,
            duration: i,
            times: o,
            type: u,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: n} = e;
        return Un(n)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: n} = e;
        return Un(n.currentTime || 0)
    }
    set time(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.currentTime = Bn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: n} = e;
        return n.playbackRate
    }
    set speed(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: n} = e;
        return n.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: n} = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: n} = this;
            if (!n)
                return Bt;
            const {animation: i} = n;
            $y(i, e)
        }
        return Bt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n, keyframes: i, duration: o, type: l, ease: u, times: d} = e;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: g, onComplete: y, element: w, ...E} = this.options
              , k = new Sh({
                ...E,
                keyframes: i,
                duration: o,
                type: l,
                ease: u,
                times: d,
                isGenerator: !0
            })
              , b = Bn(this.time);
            m.setWithVelocity(k.sample(b - Bl).value, k.sample(b).value, Bl)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: n, name: i, repeatDelay: o, repeatType: l, damping: u, type: d} = e;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: m} = n.owner.getProps();
        return SN() && i && wN.has(i) && !h && !m && !o && l !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const TN = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , PN = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , _N = {
    type: "keyframes",
    duration: .8
}
  , RN = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , AN = (t, {keyframes: e}) => e.length > 2 ? _N : ms.has(t) ? t.startsWith("scale") ? PN(e[1]) : TN : RN;
function NN({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: l, repeatType: u, repeatDelay: d, from: h, elapsed: m, ...g}) {
    return !!Object.keys(g).length
}
const bh = (t, e, n, i={}, o, l) => u => {
    const d = ah(i, t) || {}
      , h = d.delay || i.delay || 0;
    let {elapsed: m=0} = i;
    m = m - Bn(h);
    let g = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -m,
        onUpdate: w => {
            e.set(w),
            d.onUpdate && d.onUpdate(w)
        }
        ,
        onComplete: () => {
            u(),
            d.onComplete && d.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : o
    };
    NN(d) || (g = {
        ...g,
        ...AN(t, g)
    }),
    g.duration && (g.duration = Bn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Bn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const w = nu(g.keyframes, d);
        if (w !== void 0)
            return Be.update( () => {
                g.onUpdate(w),
                g.onComplete()
            }
            ),
            new XR([])
    }
    return !l && iv.supports(g) ? new iv(g) : new Sh(g)
}
;
function ON({protectedKeys: t, needsAnimating: e}, n) {
    const i = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    i
}
function Qx(t, e, {delay: n=0, transitionOverride: i, type: o}={}) {
    var l;
    let {transition: u=t.getDefaultTransition(), transitionEnd: d, ...h} = e;
    i && (u = i);
    const m = []
      , g = o && t.animationState && t.animationState.getState()[o];
    for (const y in h) {
        const w = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , E = h[y];
        if (E === void 0 || g && ON(g, y))
            continue;
        const k = {
            delay: n,
            ...ah(u || {}, y)
        };
        let b = !1;
        if (window.MotionHandoffAnimation) {
            const A = vx(t);
            if (A) {
                const V = window.MotionHandoffAnimation(A, y, Be);
                V !== null && (k.startTime = V,
                b = !0)
            }
        }
        lf(t, y),
        w.start(bh(y, w, E, t.shouldReduceMotion && gx.has(y) ? {
            type: !1
        } : k, t, b));
        const S = w.animation;
        S && m.push(S)
    }
    return d && Promise.all(m).then( () => {
        Be.update( () => {
            d && cA(t, d)
        }
        )
    }
    ),
    m
}
function mf(t, e, n={}) {
    var i;
    const o = tu(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (l = n.transitionOverride);
    const u = o ? () => Promise.all(Qx(t, o, n)) : () => Promise.resolve()
      , d = t.variantChildren && t.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: w} = l;
        return jN(t, e, g + m, y, w, n)
    }
    : () => Promise.resolve()
      , {when: h} = l;
    if (h) {
        const [m,g] = h === "beforeChildren" ? [u, d] : [d, u];
        return m().then( () => g())
    } else
        return Promise.all([u(), d(n.delay)])
}
function jN(t, e, n=0, i=0, o=1, l) {
    const u = []
      , d = (t.variantChildren.size - 1) * i
      , h = o === 1 ? (m=0) => m * i : (m=0) => d - m * i;
    return Array.from(t.variantChildren).sort(LN).forEach( (m, g) => {
        m.notify("AnimationStart", e),
        u.push(mf(m, e, {
            ...l,
            delay: n + h(g)
        }).then( () => m.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(u)
}
function LN(t, e) {
    return t.sortNodePosition(e)
}
function DN(t, e, n={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const o = e.map(l => mf(t, l, n));
        i = Promise.all(o)
    } else if (typeof e == "string")
        i = mf(t, e, n);
    else {
        const o = typeof e == "function" ? tu(t, e, n.custom) : e;
        i = Promise.all(Qx(t, o, n))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const MN = Gf.length;
function Gx(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Gx(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial),
        n
    }
    const e = {};
    for (let n = 0; n < MN; n++) {
        const i = Gf[n]
          , o = t.props[i];
        (Ro(o) || o === !1) && (e[i] = o)
    }
    return e
}
const IN = [...Qf].reverse()
  , FN = Qf.length;
function VN(t) {
    return e => Promise.all(e.map( ({animation: n, options: i}) => DN(t, n, i)))
}
function BN(t) {
    let e = VN(t)
      , n = ov()
      , i = !0;
    const o = h => (m, g) => {
        var y;
        const w = tu(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {transition: E, transitionEnd: k, ...b} = w;
            m = {
                ...m,
                ...b,
                ...k
            }
        }
        return m
    }
    ;
    function l(h) {
        e = h(t)
    }
    function u(h) {
        const {props: m} = t
          , g = Gx(t.parent) || {}
          , y = []
          , w = new Set;
        let E = {}
          , k = 1 / 0;
        for (let S = 0; S < FN; S++) {
            const A = IN[S]
              , V = n[A]
              , j = m[A] !== void 0 ? m[A] : g[A]
              , D = Ro(j)
              , B = A === h ? V.isActive : null;
            B === !1 && (k = S);
            let q = j === g[A] && j !== m[A] && D;
            if (q && i && t.manuallyAnimateOnMount && (q = !1),
            V.protectedKeys = {
                ...E
            },
            !V.isActive && B === null || !j && !V.prevProp || Zl(j) || typeof j == "boolean")
                continue;
            const G = UN(V.prevProp, j);
            let M = G || A === h && V.isActive && !q && D || S > k && D
              , X = !1;
            const me = Array.isArray(j) ? j : [j];
            let de = me.reduce(o(A), {});
            B === !1 && (de = {});
            const {prevResolvedValues: Te={}} = V
              , Le = {
                ...Te,
                ...de
            }
              , Ae = fe => {
                M = !0,
                w.has(fe) && (X = !0,
                w.delete(fe)),
                V.needsAnimating[fe] = !0;
                const K = t.getValue(fe);
                K && (K.liveStyle = !1)
            }
            ;
            for (const fe in Le) {
                const K = de[fe]
                  , se = Te[fe];
                if (E.hasOwnProperty(fe))
                    continue;
                let U = !1;
                sf(K) && sf(se) ? U = !ax(K, se) : U = K !== se,
                U ? K != null ? Ae(fe) : w.add(fe) : K !== void 0 && w.has(fe) ? Ae(fe) : V.protectedKeys[fe] = !0
            }
            V.prevProp = j,
            V.prevResolvedValues = de,
            V.isActive && (E = {
                ...E,
                ...de
            }),
            i && t.blockInitialAnimation && (M = !1),
            M && (!(q && G) || X) && y.push(...me.map(fe => ({
                animation: fe,
                options: {
                    type: A
                }
            })))
        }
        if (w.size) {
            const S = {};
            w.forEach(A => {
                const V = t.getBaseTarget(A)
                  , j = t.getValue(A);
                j && (j.liveStyle = !0),
                S[A] = V ?? null
            }
            ),
            y.push({
                animation: S
            })
        }
        let b = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (b = !1),
        i = !1,
        b ? e(y) : Promise.resolve()
    }
    function d(h, m) {
        var g;
        if (n[h].isActive === m)
            return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var E;
            return (E = w.animationState) === null || E === void 0 ? void 0 : E.setActive(h, m)
        }
        ),
        n[h].isActive = m;
        const y = u(h);
        for (const w in n)
            n[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: l,
        getState: () => n,
        reset: () => {
            n = ov(),
            i = !0
        }
    }
}
function UN(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !ax(e, t) : !1
}
function Kr(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function ov() {
    return {
        animate: Kr(!0),
        whileInView: Kr(),
        whileHover: Kr(),
        whileTap: Kr(),
        whileDrag: Kr(),
        whileFocus: Kr(),
        exit: Kr()
    }
}
class Nr {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class zN extends Nr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = BN(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Zl(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let $N = 0;
class HN extends Nr {
    constructor() {
        super(...arguments),
        this.id = $N++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const o = this.node.animationState.setActive("exit", !e);
        n && !e && o.then( () => n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const qN = {
    animation: {
        Feature: zN
    },
    exit: {
        Feature: HN
    }
};
function jo(t, e, n, i={
    passive: !0
}) {
    return t.addEventListener(e, n, i),
    () => t.removeEventListener(e, n)
}
function Go(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const WN = t => e => ch(e) && t(e, Go(e));
function xo(t, e, n, i) {
    return jo(t, e, WN(n), i)
}
const av = (t, e) => Math.abs(t - e);
function KN(t, e) {
    const n = av(t.x, e.x)
      , i = av(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
class Yx {
    constructor(e, n, {transformPagePoint: i, contextWindow: o, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = bd(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , E = KN(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !E)
                return;
            const {point: k} = y
              , {timestamp: b} = dt;
            this.history.push({
                ...k,
                timestamp: b
            });
            const {onStart: S, onMove: A} = this.handlers;
            w || (S && S(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            A && A(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, w) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Sd(w, this.transformPagePoint),
            Be.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, w) => {
            this.end();
            const {onEnd: E, onSessionEnd: k, resumeAnimation: b} = this.handlers;
            if (this.dragSnapToOrigin && b && b(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = bd(y.type === "pointercancel" ? this.lastMoveEventInfo : Sd(w, this.transformPagePoint), this.history);
            this.startEvent && E && E(y, S),
            k && k(y, S)
        }
        ,
        !ch(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = n,
        this.transformPagePoint = i,
        this.contextWindow = o || window;
        const u = Go(e)
          , d = Sd(u, this.transformPagePoint)
          , {point: h} = d
          , {timestamp: m} = dt;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {onSessionStart: g} = n;
        g && g(e, bd(d, this.history)),
        this.removeListeners = Qo(xo(this.contextWindow, "pointermove", this.handlePointerMove), xo(this.contextWindow, "pointerup", this.handlePointerUp), xo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Tr(this.updatePoint)
    }
}
function Sd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function lv(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function bd({point: t}, e) {
    return {
        point: t,
        delta: lv(t, Xx(e)),
        offset: lv(t, QN(e)),
        velocity: GN(e, .1)
    }
}
function QN(t) {
    return t[0]
}
function Xx(t) {
    return t[t.length - 1]
}
function GN(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , i = null;
    const o = Xx(t);
    for (; n >= 0 && (i = t[n],
    !(o.timestamp - i.timestamp > Bn(e))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Un(o.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const u = {
        x: (o.x - i.x) / l,
        y: (o.y - i.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0),
    u.y === 1 / 0 && (u.y = 0),
    u
}
const Jx = 1e-4
  , YN = 1 - Jx
  , XN = 1 + Jx
  , Zx = .01
  , JN = 0 - Zx
  , ZN = 0 + Zx;
function Ut(t) {
    return t.max - t.min
}
function e2(t, e, n) {
    return Math.abs(t - e) <= n
}
function uv(t, e, n, i=.5) {
    t.origin = i,
    t.originPoint = He(e.min, e.max, t.origin),
    t.scale = Ut(n) / Ut(e),
    t.translate = He(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= YN && t.scale <= XN || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= JN && t.translate <= ZN || isNaN(t.translate)) && (t.translate = 0)
}
function So(t, e, n, i) {
    uv(t.x, e.x, n.x, i ? i.originX : void 0),
    uv(t.y, e.y, n.y, i ? i.originY : void 0)
}
function cv(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + Ut(e)
}
function t2(t, e, n) {
    cv(t.x, e.x, n.x),
    cv(t.y, e.y, n.y)
}
function dv(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + Ut(e)
}
function bo(t, e, n) {
    dv(t.x, e.x, n.x),
    dv(t.y, e.y, n.y)
}
function n2(t, {min: e, max: n}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? He(n, t, i.max) : Math.min(t, n)),
    t
}
function fv(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function r2(t, {top: e, left: n, bottom: i, right: o}) {
    return {
        x: fv(t.x, n, o),
        y: fv(t.y, e, i)
    }
}
function hv(t, e) {
    let n = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
function s2(t, e) {
    return {
        x: hv(t.x, e.x),
        y: hv(t.y, e.y)
    }
}
function i2(t, e) {
    let n = .5;
    const i = Ut(t)
      , o = Ut(e);
    return o > i ? n = li(e.min, e.max - i, t.min) : i > o && (n = li(t.min, t.max - o, e.min)),
    zn(0, 1, n)
}
function o2(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const gf = .35;
function a2(t=gf) {
    return t === !1 ? t = 0 : t === !0 && (t = gf),
    {
        x: pv(t, "left", "right"),
        y: pv(t, "top", "bottom")
    }
}
function pv(t, e, n) {
    return {
        min: mv(t, e),
        max: mv(t, n)
    }
}
function mv(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const gv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ws = () => ({
    x: gv(),
    y: gv()
})
  , yv = () => ({
    min: 0,
    max: 0
})
  , Ye = () => ({
    x: yv(),
    y: yv()
});
function Yt(t) {
    return [t("x"), t("y")]
}
function e1({top: t, left: e, right: n, bottom: i}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}
function l2({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function u2(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}
function kd(t) {
    return t === void 0 || t === 1
}
function yf({scale: t, scaleX: e, scaleY: n}) {
    return !kd(t) || !kd(e) || !kd(n)
}
function Qr(t) {
    return yf(t) || t1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function t1(t) {
    return vv(t.x) || vv(t.y)
}
function vv(t) {
    return t && t !== "0%"
}
function Ul(t, e, n) {
    const i = t - n
      , o = e * i;
    return n + o
}
function wv(t, e, n, i, o) {
    return o !== void 0 && (t = Ul(t, o, i)),
    Ul(t, n, i) + e
}
function vf(t, e=0, n=1, i, o) {
    t.min = wv(t.min, e, n, i, o),
    t.max = wv(t.max, e, n, i, o)
}
function n1(t, {x: e, y: n}) {
    vf(t.x, e.translate, e.scale, e.originPoint),
    vf(t.y, n.translate, n.scale, n.originPoint)
}
const xv = .999999999999
  , Sv = 1.0000000000001;
function c2(t, e, n, i=!1) {
    const o = n.length;
    if (!o)
        return;
    e.x = e.y = 1;
    let l, u;
    for (let d = 0; d < o; d++) {
        l = n[d],
        u = l.projectionDelta;
        const {visualElement: h} = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && Qs(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        u && (e.x *= u.x.scale,
        e.y *= u.y.scale,
        n1(t, u)),
        i && Qr(l.latestValues) && Qs(t, l.latestValues))
    }
    e.x < Sv && e.x > xv && (e.x = 1),
    e.y < Sv && e.y > xv && (e.y = 1)
}
function Ks(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function bv(t, e, n, i, o=.5) {
    const l = He(t.min, t.max, o);
    vf(t, e, n, l, i)
}
function Qs(t, e) {
    bv(t.x, e.x, e.scaleX, e.scale, e.originX),
    bv(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function r1(t, e) {
    return e1(u2(t.getBoundingClientRect(), e))
}
function d2(t, e, n) {
    const i = r1(t, n)
      , {scroll: o} = e;
    return o && (Ks(i.x, o.offset.x),
    Ks(i.y, o.offset.y)),
    i
}
const s1 = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , f2 = new WeakMap;
class h2 {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ye(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Go(g).point)
        }
          , l = (g, y) => {
            const {drag: w, dragPropagation: E, onDragStart: k} = this.getProps();
            if (w && !E && (this.openDragLock && this.openDragLock(),
            this.openDragLock = iA(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Yt(S => {
                let A = this.getAxisMotionValue(S).get() || 0;
                if (kn.test(A)) {
                    const {projection: V} = this.visualElement;
                    if (V && V.layout) {
                        const j = V.layout.layoutBox[S];
                        j && (A = Ut(j) * (parseFloat(A) / 100))
                    }
                }
                this.originPoint[S] = A
            }
            ),
            k && Be.postRender( () => k(g, y)),
            lf(this.visualElement, "transform");
            const {animationState: b} = this.visualElement;
            b && b.setActive("whileDrag", !0)
        }
          , u = (g, y) => {
            const {dragPropagation: w, dragDirectionLock: E, onDirectionLock: k, onDrag: b} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: S} = y;
            if (E && this.currentDirection === null) {
                this.currentDirection = p2(S),
                this.currentDirection !== null && k && k(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, S),
            this.updateAxis("y", y.point, S),
            this.visualElement.render(),
            b && b(g, y)
        }
          , d = (g, y) => this.stop(g, y)
          , h = () => Yt(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new Yx(e,{
            onSessionStart: o,
            onStart: l,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: s1(this.visualElement)
        })
    }
    stop(e, n) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: l} = this.getProps();
        l && Be.postRender( () => l(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, i) {
        const {drag: o} = this.getProps();
        if (!i || !ml(e, o, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let u = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (u = n2(u, this.constraints[e], this.elastic[e])),
        l.set(u)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        n && Hs(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = r2(o.layoutBox, n) : this.constraints = !1,
        this.elastic = a2(i),
        l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Yt(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = o2(o.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !Hs(e))
            return !1;
        const i = e.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const l = d2(i, o.root, this.visualElement.getTransformPagePoint());
        let u = s2(o.layout.layoutBox, l);
        if (n) {
            const d = n(l2(u));
            this.hasMutatedConstraints = !!d,
            d && (u = e1(d))
        }
        return u
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: i, dragElastic: o, dragTransition: l, dragSnapToOrigin: u, onDragTransitionEnd: d} = this.getProps()
          , h = this.constraints || {}
          , m = Yt(g => {
            if (!ml(g, n, this.currentDirection))
                return;
            let y = h && h[g] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const w = o ? 200 : 1e6
              , E = o ? 40 : 1e7
              , k = {
                type: "inertia",
                velocity: i ? e[g] : 0,
                bounceStiffness: w,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(g, k)
        }
        );
        return Promise.all(m).then(d)
    }
    startAxisValueAnimation(e, n) {
        const i = this.getAxisMotionValue(e);
        return lf(this.visualElement, e),
        i.start(bh(e, i, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Yt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Yt(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , o = i[n];
        return o || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Yt(n => {
            const {drag: i} = this.getProps();
            if (!ml(n, i, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , l = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: u, max: d} = o.layout.layoutBox[n];
                l.set(e[n] - He(u, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Hs(n) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Yt(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const h = d.get();
                o[u] = i2({
                    min: h,
                    max: h
                }, this.constraints[u])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Yt(u => {
            if (!ml(u, e, null))
                return;
            const d = this.getAxisMotionValue(u)
              , {min: h, max: m} = this.constraints[u];
            d.set(He(h, m, o[u]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        f2.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = xo(e, "pointerdown", h => {
            const {drag: m, dragListener: g=!0} = this.getProps();
            m && g && this.start(h)
        }
        )
          , i = () => {
            const {dragConstraints: h} = this.getProps();
            Hs(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , l = o.addEventListener("measure", i);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Be.read(i);
        const u = jo(window, "resize", () => this.scalePositionWithinConstraints())
          , d = o.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Yt(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            u(),
            n(),
            l(),
            d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: i=!1, dragPropagation: o=!1, dragConstraints: l=!1, dragElastic: u=gf, dragMomentum: d=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: o,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: d
        }
    }
}
function ml(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function p2(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class m2 extends Nr {
    constructor(e) {
        super(e),
        this.removeGroupControls = Bt,
        this.removeListeners = Bt,
        this.controls = new h2(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Bt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const kv = t => (e, n) => {
    t && Be.postRender( () => t(e, n))
}
;
class g2 extends Nr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Bt
    }
    onPointerDown(e) {
        this.session = new Yx(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: s1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: kv(e),
            onStart: kv(n),
            onMove: i,
            onEnd: (l, u) => {
                delete this.session,
                o && Be.postRender( () => o(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = xo(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Rl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Ev(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const ao = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (ce.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = Ev(t, e.target.x)
          , i = Ev(t, e.target.y);
        return `${n}% ${i}%`
    }
}
  , y2 = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const i = t
          , o = Pr.parse(t);
        if (o.length > 5)
            return i;
        const l = Pr.createTransformer(t)
          , u = typeof o[0] != "number" ? 1 : 0
          , d = n.x.scale * e.x
          , h = n.y.scale * e.y;
        o[0 + u] /= d,
        o[1 + u] /= h;
        const m = He(d, h, .5);
        return typeof o[2 + u] == "number" && (o[2 + u] /= m),
        typeof o[3 + u] == "number" && (o[3 + u] /= m),
        l(o)
    }
};
class v2 extends _.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: o} = this.props
          , {projection: l} = e;
        VR(w2),
        l && (n.group && n.group.add(l),
        i && i.register && o && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Rl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: i, drag: o, isPresent: l} = this.props
          , u = i.projection;
        return u && (u.isPresent = l,
        o || e.layoutDependency !== n || n === void 0 ? u.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? u.promote() : u.relegate() || Be.postRender( () => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Xf.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i} = this.props
          , {projection: o} = e;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        i && i.deregister && i.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function i1(t) {
    const [e,n] = Bw()
      , i = _.useContext($f);
    return x.jsx(v2, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: _.useContext(Qw),
        isPresent: e,
        safeToRemove: n
    })
}
const w2 = {
    borderRadius: {
        ...ao,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ao,
    borderTopRightRadius: ao,
    borderBottomLeftRadius: ao,
    borderBottomRightRadius: ao,
    boxShadow: y2
};
function x2(t, e, n) {
    const i = bt(t) ? t : No(t);
    return i.start(bh("", i, e, n)),
    i.animation
}
function S2(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const b2 = (t, e) => t.depth - e.depth;
class k2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        dh(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        fh(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(b2),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function E2(t, e) {
    const n = En.now()
      , i = ({timestamp: o}) => {
        const l = o - n;
        l >= e && (Tr(i),
        t(l - e))
    }
    ;
    return Be.read(i, !0),
    () => Tr(i)
}
const o1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , C2 = o1.length
  , Cv = t => typeof t == "string" ? parseFloat(t) : t
  , Tv = t => typeof t == "number" || ce.test(t);
function T2(t, e, n, i, o, l) {
    o ? (t.opacity = He(0, n.opacity !== void 0 ? n.opacity : 1, P2(i)),
    t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, _2(i))) : l && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
    for (let u = 0; u < C2; u++) {
        const d = `border${o1[u]}Radius`;
        let h = Pv(e, d)
          , m = Pv(n, d);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || Tv(h) === Tv(m) ? (t[d] = Math.max(He(Cv(h), Cv(m), i), 0),
        (kn.test(m) || kn.test(h)) && (t[d] += "%")) : t[d] = m
    }
    (e.rotate || n.rotate) && (t.rotate = He(e.rotate || 0, n.rotate || 0, i))
}
function Pv(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const P2 = a1(0, .5, Cx)
  , _2 = a1(.5, .95, Bt);
function a1(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(li(t, e, i))
}
function _v(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Gt(t, e) {
    _v(t.x, e.x),
    _v(t.y, e.y)
}
function Rv(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function Av(t, e, n, i, o) {
    return t -= e,
    t = Ul(t, 1 / n, i),
    o !== void 0 && (t = Ul(t, 1 / o, i)),
    t
}
function R2(t, e=0, n=1, i=.5, o, l=t, u=t) {
    if (kn.test(e) && (e = parseFloat(e),
    e = He(u.min, u.max, e / 100) - u.min),
    typeof e != "number")
        return;
    let d = He(l.min, l.max, i);
    t === l && (d -= e),
    t.min = Av(t.min, e, n, d, o),
    t.max = Av(t.max, e, n, d, o)
}
function Nv(t, e, [n,i,o], l, u) {
    R2(t, e[n], e[i], e[o], e.scale, l, u)
}
const A2 = ["x", "scaleX", "originX"]
  , N2 = ["y", "scaleY", "originY"];
function Ov(t, e, n, i) {
    Nv(t.x, e, A2, n ? n.x : void 0, i ? i.x : void 0),
    Nv(t.y, e, N2, n ? n.y : void 0, i ? i.y : void 0)
}
function jv(t) {
    return t.translate === 0 && t.scale === 1
}
function l1(t) {
    return jv(t.x) && jv(t.y)
}
function Lv(t, e) {
    return t.min === e.min && t.max === e.max
}
function O2(t, e) {
    return Lv(t.x, e.x) && Lv(t.y, e.y)
}
function Dv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function u1(t, e) {
    return Dv(t.x, e.x) && Dv(t.y, e.y)
}
function Mv(t) {
    return Ut(t.x) / Ut(t.y)
}
function Iv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class j2 {
    constructor() {
        this.members = []
    }
    add(e) {
        dh(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (fh(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(o => e === o);
        if (n === 0)
            return !1;
        let i;
        for (let o = n; o >= 0; o--) {
            const l = this.members[o];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, n) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            n && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: o} = e.options;
            o === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: i} = e;
            n.onExitComplete && n.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function L2(t, e, n) {
    let i = "";
    const o = t.x.translate / e.x
      , l = t.y.translate / e.y
      , u = (n == null ? void 0 : n.z) || 0;
    if ((o || l || u) && (i = `translate3d(${o}px, ${l}px, ${u}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: m, rotate: g, rotateX: y, rotateY: w, skewX: E, skewY: k} = n;
        m && (i = `perspective(${m}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        w && (i += `rotateY(${w}deg) `),
        E && (i += `skewX(${E}deg) `),
        k && (i += `skewY(${k}deg) `)
    }
    const d = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`),
    i || "none"
}
const Gr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , go = typeof window < "u" && window.MotionDebug !== void 0
  , Ed = ["", "X", "Y", "Z"]
  , D2 = {
    visibility: "hidden"
}
  , Fv = 1e3;
let M2 = 0;
function Cd(t, e, n, i) {
    const {latestValues: o} = e;
    o[t] && (n[t] = o[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function c1(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = vx(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Be, !(o || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && c1(i)
}
function d1({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: o}) {
    return class {
        constructor(u={}, d=e == null ? void 0 : e()) {
            this.id = M2++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                go && (Gr.totalNodes = Gr.resolvedTargetDeltas = Gr.recalculatedProjection = 0),
                this.nodes.forEach(V2),
                this.nodes.forEach(H2),
                this.nodes.forEach(q2),
                this.nodes.forEach(B2),
                go && window.MotionDebug.record(Gr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = u,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new k2)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new hh),
            this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const h = this.eventHandlers.get(u);
            h && h.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = S2(u),
            this.instance = u;
            const {layoutId: h, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(u),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (m || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(u, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = E2(w, 250),
                    Rl.hasAnimatedSinceResize && (Rl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Bv))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: w, hasRelativeTargetChanged: E, layout: k}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || g.getDefaultTransition() || Y2
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: A} = g.getProps()
                  , V = !this.targetLayout || !u1(this.targetLayout, k) || E
                  , j = !w && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || j || w && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, j);
                    const D = {
                        ...ah(b, "layout"),
                        onPlay: S,
                        onComplete: A
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0,
                    D.type = !1),
                    this.startAnimation(D)
                } else
                    w || Bv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = k
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Tr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(W2),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: u} = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && c1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: h} = this.options;
            if (d === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Vv);
                return
            }
            this.isUpdating || this.nodes.forEach(z2),
            this.isUpdating = !1,
            this.nodes.forEach($2),
            this.nodes.forEach(I2),
            this.nodes.forEach(F2),
            this.clearAllSnapshots();
            const d = En.now();
            dt.delta = zn(0, 1e3 / 60, d - dt.timestamp),
            dt.timestamp = d,
            dt.isProcessing = !0,
            md.update.process(dt),
            md.preRender.process(dt),
            md.render.process(dt),
            dt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Xf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(U2),
            this.sharedNodes.forEach(K2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Be.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Be.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ye(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1),
            d) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: h,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !l1(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            u && (d || Qr(this.latestValues) || g) && (o(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(u=!0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return u && (h = this.removeTransform(h)),
            X2(h),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: d} = this.options;
            if (!d)
                return Ye();
            const h = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(J2))) {
                const {scroll: g} = this.root;
                g && (Ks(h.x, g.offset.x),
                Ks(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(u) {
            var d;
            const h = Ye();
            if (Gt(h, u),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: y, options: w} = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Gt(h, u),
                Ks(h.x, y.offset.x),
                Ks(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(u, d=!1) {
            const h = Ye();
            Gt(h, u);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Qs(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                Qr(g.latestValues) && Qs(h, g.latestValues)
            }
            return Qr(this.latestValues) && Qs(h, this.latestValues),
            h
        }
        removeTransform(u) {
            const d = Ye();
            Gt(d, u);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !Qr(m.latestValues))
                    continue;
                yf(m.latestValues) && m.updateSnapshot();
                const g = Ye()
                  , y = m.measurePageBox();
                Gt(g, y),
                Ov(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return Qr(this.latestValues) && Ov(d, this.latestValues),
            d
        }
        setTargetDelta(u) {
            this.targetDelta = u,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = {
                ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u=!1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(u || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: w} = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = dt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ye(),
                    this.relativeTargetOrigin = Ye(),
                    bo(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox),
                    Gt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ye(),
                    this.targetWithTransforms = Ye()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    t2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Gt(this.target, this.layout.layoutBox),
                    n1(this.target, this.targetDelta)) : Gt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Ye(),
                        this.relativeTargetOrigin = Ye(),
                        bo(this.relativeTargetOrigin, this.target, E.target),
                        Gt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    go && Gr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || yf(this.parent.latestValues) || t1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead()
              , h = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === dt.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Gt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
              , E = this.treeScale.y;
            c2(this.layoutCorrected, this.treeScale, this.path, h),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Ye());
            const {target: k} = d;
            if (!k) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Rv(this.prevProjectionDelta.x, this.projectionDelta.x),
            Rv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            So(this.projectionDelta, this.layoutCorrected, k, this.latestValues),
            (this.treeScale.x !== w || this.treeScale.y !== E || !Iv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Iv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", k)),
            go && Gr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            u) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ws(),
            this.projectionDelta = Ws(),
            this.projectionDeltaWithTransform = Ws()
        }
        setAnimationOrigin(u, d=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Ws();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const w = Ye()
              , E = h ? h.source : void 0
              , k = this.layout ? this.layout.source : void 0
              , b = E !== k
              , S = this.getStack()
              , A = !S || S.members.length <= 1
              , V = !!(b && !A && this.options.crossfade === !0 && !this.path.some(G2));
            this.animationProgress = 0;
            let j;
            this.mixTargetDelta = D => {
                const B = D / 1e3;
                Uv(y.x, u.x, B),
                Uv(y.y, u.y, B),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bo(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Q2(this.relativeTarget, this.relativeTargetOrigin, w, B),
                j && O2(this.relativeTarget, j) && (this.isProjectionDirty = !1),
                j || (j = Ye()),
                Gt(j, this.relativeTarget)),
                b && (this.animationValues = g,
                T2(g, m, this.latestValues, B, V, A)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = B
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Tr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Be.update( () => {
                Rl.hasAnimatedSinceResize = !0,
                this.currentAnimation = x2(0, Fv, {
                    ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        u.onUpdate && u.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        u.onComplete && u.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Fv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {targetWithTransforms: d, target: h, layout: m, latestValues: g} = u;
            if (!(!d || !h || !m)) {
                if (this !== u && this.layout && m && f1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Ye();
                    const y = Ut(this.layout.layoutBox.x);
                    h.x.min = u.target.x.min,
                    h.x.max = h.x.min + y;
                    const w = Ut(this.layout.layoutBox.y);
                    h.y.min = u.target.y.min,
                    h.y.max = h.y.min + w
                }
                Gt(d, h),
                Qs(d, g),
                So(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new j2),
            this.sharedNodes.get(u).add(d);
            const m = d.options.initialPromotionConfig;
            d.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {layoutId: u} = this.options;
            if (u)
                return this.root.sharedNodes.get(u)
        }
        promote({needsReset: u, transition: d, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            u && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: u} = this.options;
            if (!u)
                return;
            let d = !1;
            const {latestValues: h} = u;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0),
            !d)
                return;
            const m = {};
            h.z && Cd("z", u, m, this.animationValues);
            for (let g = 0; g < Ed.length; g++)
                Cd(`rotate${Ed[g]}`, u, m, this.animationValues),
                Cd(`skew${Ed[g]}`, u, m, this.animationValues);
            u.render();
            for (const g in m)
                u.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return D2;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = Pl(u == null ? void 0 : u.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const b = {};
                return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                b.pointerEvents = Pl(u == null ? void 0 : u.pointerEvents) || ""),
                this.hasProjected && !Qr(this.latestValues) && (b.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                b
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            m.transform = L2(this.projectionDeltaWithTransform, this.treeScale, w),
            g && (m.transform = g(w, m.transform));
            const {x: E, y: k} = this.projectionDelta;
            m.transformOrigin = `${E.origin * 100}% ${k.origin * 100}% 0`,
            y.animationValues ? m.opacity = y === this ? (h = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const b in Ml) {
                if (w[b] === void 0)
                    continue;
                const {correct: S, applyTo: A} = Ml[b]
                  , V = m.transform === "none" ? w[b] : S(w[b], y);
                if (A) {
                    const j = A.length;
                    for (let D = 0; D < j; D++)
                        m[A[D]] = V
                } else
                    m[b] = V
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? Pl(u == null ? void 0 : u.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(Vv),
            this.root.sharedNodes.clear()
        }
    }
}
function I2(t) {
    t.updateLayout()
}
function F2(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: o} = t.layout
          , {animationType: l} = t.options
          , u = n.source !== t.layout.source;
        l === "size" ? Yt(y => {
            const w = u ? n.measuredBox[y] : n.layoutBox[y]
              , E = Ut(w);
            w.min = i[y].min,
            w.max = w.min + E
        }
        ) : f1(l, n.layoutBox, i) && Yt(y => {
            const w = u ? n.measuredBox[y] : n.layoutBox[y]
              , E = Ut(i[y]);
            w.max = w.min + E,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + E)
        }
        );
        const d = Ws();
        So(d, i, n.layoutBox);
        const h = Ws();
        u ? So(h, t.applyTransform(o, !0), n.measuredBox) : So(h, i, n.layoutBox);
        const m = !l1(d);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: w, layout: E} = y;
                if (w && E) {
                    const k = Ye();
                    bo(k, n.layoutBox, w.layoutBox);
                    const b = Ye();
                    bo(b, i, E.layoutBox),
                    u1(k, b) || (g = !0),
                    y.options.layoutRoot && (t.relativeTarget = b,
                    t.relativeTargetOrigin = k,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function V2(t) {
    go && Gr.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function B2(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function U2(t) {
    t.clearSnapshot()
}
function Vv(t) {
    t.clearMeasurements()
}
function z2(t) {
    t.isLayoutDirty = !1
}
function $2(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Bv(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function H2(t) {
    t.resolveTargetDelta()
}
function q2(t) {
    t.calcProjection()
}
function W2(t) {
    t.resetSkewAndRotation()
}
function K2(t) {
    t.removeLeadSnapshot()
}
function Uv(t, e, n) {
    t.translate = He(e.translate, 0, n),
    t.scale = He(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function zv(t, e, n, i) {
    t.min = He(e.min, n.min, i),
    t.max = He(e.max, n.max, i)
}
function Q2(t, e, n, i) {
    zv(t.x, e.x, n.x, i),
    zv(t.y, e.y, n.y, i)
}
function G2(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Y2 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , $v = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , Hv = $v("applewebkit/") && !$v("chrome/") ? Math.round : Bt;
function qv(t) {
    t.min = Hv(t.min),
    t.max = Hv(t.max)
}
function X2(t) {
    qv(t.x),
    qv(t.y)
}
function f1(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !e2(Mv(e), Mv(n), .2)
}
function J2(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const Z2 = d1({
    attachResizeListener: (t, e) => jo(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Td = {
    current: void 0
}
  , h1 = d1({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!Td.current) {
            const t = new Z2({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            Td.current = t
        }
        return Td.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , eO = {
    pan: {
        Feature: g2
    },
    drag: {
        Feature: m2,
        ProjectionNode: h1,
        MeasureLayout: i1
    }
};
function Wv(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , l = i[o];
    l && Be.postRender( () => l(e, Go(e)))
}
class tO extends Nr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = eA(e, n => (Wv(this.node, n, "Start"),
        i => Wv(this.node, i, "End"))))
    }
    unmount() {}
}
class nO extends Nr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Qo(jo(this.node.current, "focus", () => this.onFocus()), jo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Kv(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , l = i[o];
    l && Be.postRender( () => l(e, Go(e)))
}
class rO extends Nr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = sA(e, n => (Kv(this.node, n, "Start"),
        (i, {success: o}) => Kv(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const wf = new WeakMap
  , Pd = new WeakMap
  , sO = t => {
    const e = wf.get(t.target);
    e && e(t)
}
  , iO = t => {
    t.forEach(sO)
}
;
function oO({root: t, ...e}) {
    const n = t || document;
    Pd.has(n) || Pd.set(n, {});
    const i = Pd.get(n)
      , o = JSON.stringify(e);
    return i[o] || (i[o] = new IntersectionObserver(iO,{
        root: t,
        ...e
    })),
    i[o]
}
function aO(t, e, n) {
    const i = oO(e);
    return wf.set(t, n),
    i.observe(t),
    () => {
        wf.delete(t),
        i.unobserve(t)
    }
}
const lO = {
    some: 0,
    all: 1
};
class uO extends Nr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: i, amount: o="some", once: l} = e
          , u = {
            root: n ? n.current : void 0,
            rootMargin: i,
            threshold: typeof o == "number" ? o : lO[o]
        }
          , d = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            l && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , w = m ? g : y;
            w && w(h)
        }
        ;
        return aO(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(cO(e, n)) && this.startObserver()
    }
    unmount() {}
}
function cO({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const dO = {
    inView: {
        Feature: uO
    },
    tap: {
        Feature: rO
    },
    focus: {
        Feature: nO
    },
    hover: {
        Feature: tO
    }
}
  , fO = {
    layout: {
        ProjectionNode: h1,
        MeasureLayout: i1
    }
}
  , xf = {
    current: null
}
  , p1 = {
    current: !1
};
function hO() {
    if (p1.current = !0,
    !!Wf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => xf.current = t.matches;
            t.addListener(e),
            e()
        } else
            xf.current = !1
}
const pO = [...Vx, xt, Pr]
  , mO = t => pO.find(Fx(t))
  , Qv = new WeakMap;
function gO(t, e, n) {
    for (const i in e) {
        const o = e[i]
          , l = n[i];
        if (bt(o))
            t.addValue(i, o);
        else if (bt(l))
            t.addValue(i, No(o, {
                owner: t
            }));
        else if (l !== o)
            if (t.hasValue(i)) {
                const u = t.getValue(i);
                u.liveStyle === !0 ? u.jump(o) : u.hasAnimated || u.set(o)
            } else {
                const u = t.getStaticValue(i);
                t.addValue(i, No(u !== void 0 ? u : o, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const Gv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class yO {
    scrapeMotionValuesFromProps(e, n, i) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: i, reducedMotionConfig: o, blockInitialAnimation: l, visualState: u}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = wh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const E = En.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E,
            Be.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m, onUpdate: g} = u;
        this.onUpdate = g,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = n.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = e,
        this.props = n,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = eu(n),
        this.isVariantNode = Ww(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: y, ...w} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const E in w) {
            const k = w[E];
            h[E] !== void 0 && bt(k) && k.set(h[E], !1)
        }
    }
    mount(e) {
        this.current = e,
        Qv.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, i) => this.bindToMotionValue(i, n)),
        p1.current || hO(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xf.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Qv.delete(this.current),
        this.projection && this.projection.unmount(),
        Tr(this.notifyUpdate),
        Tr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = ms.has(e)
          , o = n.on("change", d => {
            this.latestValues[e] = d,
            this.props.onUpdate && Be.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = n.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, () => {
            o(),
            l(),
            u && u(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ui) {
            const n = ui[e];
            if (!n)
                continue;
            const {isEnabled: i, Feature: o} = n;
            if (!this.features[e] && o && i(this.props) && (this.features[e] = new o(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let i = 0; i < Gv.length; i++) {
            const o = Gv[i];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const l = "on" + o
              , u = e[l];
            u && (this.propEventSubscriptions[o] = this.on(o, u))
        }
        this.prevMotionValues = gO(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const i = this.values.get(e);
        n !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && n !== void 0 && (i = No(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, n) {
        var i;
        let o = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return o != null && (typeof o == "string" && (Mx(o) || Px(o)) ? o = parseFloat(o) : !mO(o) && Pr.test(n) && (o = jx(e, n)),
        this.setBaseTarget(e, bt(o) ? o.get() : o)),
        bt(o) ? o.get() : o
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const u = Zf(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            u && (o = u[e])
        }
        if (i && o !== void 0)
            return o;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !bt(l) ? l : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new hh),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class m1 extends yO {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Bx
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: i}) {
        delete n[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        bt(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function vO(t) {
    return window.getComputedStyle(t)
}
class wO extends m1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = tx
    }
    readValueFromInstance(e, n) {
        if (ms.has(n)) {
            const i = vh(n);
            return i && i.default || 0
        } else {
            const i = vO(e)
              , o = (Jw(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return r1(e, n)
    }
    build(e, n, i) {
        nh(e, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return oh(e, n, i)
    }
}
class xO extends m1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ye
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ms.has(n)) {
            const i = vh(n);
            return i && i.default || 0
        }
        return n = nx.has(n) ? n : Yf(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return ix(e, n, i)
    }
    build(e, n, i) {
        rh(e, n, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, i, o) {
        rx(e, n, i, o)
    }
    mount(e) {
        this.isSVGTag = ih(e.tagName),
        super.mount(e)
    }
}
const SO = (t, e) => Jf(t) ? new xO(e) : new wO(e,{
    allowProjection: t !== _.Fragment
})
  , bO = QR({
    ...qN,
    ...dO,
    ...eO,
    ...fO
}, SO)
  , ht = uR(bO)
  , kO = {
    some: 0,
    all: 1
};
function EO(t, e, {root: n, margin: i, amount: o="some"}={}) {
    const l = hx(t)
      , u = new WeakMap
      , d = m => {
        m.forEach(g => {
            const y = u.get(g.target);
            if (g.isIntersecting !== !!y)
                if (g.isIntersecting) {
                    const w = e(g);
                    typeof w == "function" ? u.set(g.target, w) : h.unobserve(g.target)
                } else
                    typeof y == "function" && (y(g),
                    u.delete(g.target))
        }
        )
    }
      , h = new IntersectionObserver(d,{
        root: n,
        rootMargin: i,
        threshold: typeof o == "number" ? o : kO[o]
    });
    return l.forEach(m => h.observe(m)),
    () => h.disconnect()
}
function g1(t, {root: e, margin: n, amount: i, once: o=!1}={}) {
    const [l,u] = _.useState(!1);
    return _.useEffect( () => {
        if (!t.current || o && l)
            return;
        const d = () => (u(!0),
        o ? void 0 : () => u(!1))
          , h = {
            root: e && e.current || void 0,
            margin: n,
            amount: i
        };
        return EO(t.current, d, h)
    }
    , [e, t, n, o, i]),
    l
}
const CO = [{
    icon: Ub,
    label: "Home",
    href: "/"
}, {
    icon: $b,
    label: "Process",
    href: "/#process"
}, {
    icon: Gb,
    label: "Finishes",
    href: "/#finishes"
}, {
    icon: Vb,
    label: "Quote",
    href: "/quote"
}, {
    icon: p0,
    label: "Contact",
    href: "/#contact"
}];
function TO() {
    const [t,e] = _.useState(!0)
      , [n,i] = _.useState(0)
      , o = fi();
    _.useEffect( () => {
        const u = () => {
            const d = window.scrollY;
            e(d < n || d < 100),
            i(d)
        }
        ;
        return window.addEventListener("scroll", u, {
            passive: !0
        }),
        () => window.removeEventListener("scroll", u)
    }
    , [n]);
    const l = (u, d) => {
        var h;
        if (d.startsWith("/#")) {
            u.preventDefault();
            const m = d.replace("/#", "");
            if (o.pathname !== "/") {
                window.location.href = d;
                return
            }
            (h = document.getElementById(m)) == null || h.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
    ;
    return x.jsx(Ll, {
        children: t && x.jsx(ht.nav, {
            initial: {
                y: 100,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 100,
                opacity: 0
            },
            transition: {
                duration: .3,
                ease: "easeOut"
            },
            className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
            children: x.jsx("div", {
                className: "flex items-center gap-1 bg-secondary/95 backdrop-blur-xl rounded-full px-2 py-2 shadow-2xl shadow-black/20 border border-white/5",
                children: CO.map(u => {
                    const d = u.icon
                      , h = u.label === "Quote";
                    return x.jsxs(Po, {
                        to: u.href,
                        onClick: m => l(m, u.href),
                        className: `flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-body font-medium
                    ${h ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-white/10"}`,
                        children: [x.jsx(d, {
                            className: "w-4 h-4"
                        }), x.jsx("span", {
                            className: "hidden sm:inline",
                            children: u.label
                        })]
                    }, u.label)
                }
                )
            })
        })
    })
}
function PO() {
    return x.jsxs("div", {
        className: "min-h-screen bg-background font-body",
        children: [x.jsx(CC, {}), x.jsx(TO, {})]
    })
}
function Yv(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function _O(...t) {
    return e => {
        let n = !1;
        const i = t.map(o => {
            const l = Yv(o, e);
            return !n && typeof l == "function" && (n = !0),
            l
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < i.length; o++) {
                    const l = i[o];
                    typeof l == "function" ? l() : Yv(t[o], null)
                }
            }
    }
}
var RO = Symbol.for("react.lazy")
  , zl = l0[" use ".trim().toString()];
function AO(t) {
    return typeof t == "object" && t !== null && "then"in t
}
function y1(t) {
    return t != null && typeof t == "object" && "$$typeof"in t && t.$$typeof === RO && "_payload"in t && AO(t._payload)
}
function NO(t) {
    const e = jO(t)
      , n = _.forwardRef( (i, o) => {
        let {children: l, ...u} = i;
        y1(l) && typeof zl == "function" && (l = zl(l._payload));
        const d = _.Children.toArray(l)
          , h = d.find(DO);
        if (h) {
            const m = h.props.children
              , g = d.map(y => y === h ? _.Children.count(m) > 1 ? _.Children.only(null) : _.isValidElement(m) ? m.props.children : null : y);
            return x.jsx(e, {
                ...u,
                ref: o,
                children: _.isValidElement(m) ? _.cloneElement(m, void 0, g) : null
            })
        }
        return x.jsx(e, {
            ...u,
            ref: o,
            children: l
        })
    }
    );
    return n.displayName = `${t}.Slot`,
    n
}
var OO = NO("Slot");
function jO(t) {
    const e = _.forwardRef( (n, i) => {
        let {children: o, ...l} = n;
        if (y1(o) && typeof zl == "function" && (o = zl(o._payload)),
        _.isValidElement(o)) {
            const u = IO(o)
              , d = MO(l, o.props);
            return o.type !== _.Fragment && (d.ref = i ? _O(i, u) : u),
            _.cloneElement(o, d)
        }
        return _.Children.count(o) > 1 ? _.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var LO = Symbol("radix.slottable");
function DO(t) {
    return _.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === LO
}
function MO(t, e) {
    const n = {
        ...e
    };
    for (const i in e) {
        const o = t[i]
          , l = e[i];
        /^on[A-Z]/.test(i) ? o && l ? n[i] = (...d) => {
            const h = l(...d);
            return o(...d),
            h
        }
        : o && (n[i] = o) : i === "style" ? n[i] = {
            ...o,
            ...l
        } : i === "className" && (n[i] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}
function IO(t) {
    var i, o;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = (o = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : o.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
const FO = f0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Zr = _.forwardRef( ({className: t, variant: e, size: n, asChild: i=!1, ...o}, l) => {
    const u = i ? OO : "button";
    return x.jsx(u, {
        className: Rr(FO({
            variant: e,
            size: n,
            className: t
        })),
        ref: l,
        ...o
    })
}
);
Zr.displayName = "Button";
const VO = "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/0f7877203_de7d810f-750d-41b0-aebe-3784a3c4c7a8.png"
  , BO = "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/82ff02558_5747acf0-26b4-49be-80ba-8a4bb88fe09c.png";
function UO() {
    const [t,e] = _.useState(50)
      , n = _.useRef(null)
      , i = _.useRef(!1)
      , o = l => {
        if (!n.current)
            return;
        const u = n.current.getBoundingClientRect()
          , d = (l - u.left) / u.width * 100;
        e(Math.max(5, Math.min(95, d)))
    }
    ;
    return _.useEffect( () => {
        const l = h => {
            i.current && o(h.clientX)
        }
          , u = h => {
            i.current && o(h.touches[0].clientX)
        }
          , d = () => {
            i.current = !1
        }
        ;
        return window.addEventListener("mousemove", l),
        window.addEventListener("touchmove", u),
        window.addEventListener("mouseup", d),
        window.addEventListener("touchend", d),
        () => {
            window.removeEventListener("mousemove", l),
            window.removeEventListener("touchmove", u),
            window.removeEventListener("mouseup", d),
            window.removeEventListener("touchend", d)
        }
    }
    , []),
    x.jsxs("section", {
        className: "relative w-full h-screen overflow-hidden",
        children: [x.jsxs("div", {
            ref: n,
            className: "absolute inset-0 cursor-col-resize select-none",
            onMouseDown: () => {
                i.current = !0
            }
            ,
            onTouchStart: () => {
                i.current = !0
            }
            ,
            children: [x.jsx("img", {
                src: VO,
                alt: "Restored deck",
                className: "absolute inset-0 w-full h-full object-cover"
            }), x.jsxs("div", {
                className: "absolute inset-0 overflow-hidden",
                style: {
                    clipPath: `inset(0 ${100 - t}% 0 0)`
                },
                children: [x.jsx("img", {
                    src: BO,
                    alt: "Weathered deck",
                    className: "absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                }), x.jsx("div", {
                    className: "absolute inset-0 bg-black/20"
                })]
            }), x.jsxs("div", {
                className: "absolute top-0 bottom-0 z-10 flex items-center",
                style: {
                    left: `${t}%`,
                    transform: "translateX(-50%)"
                },
                children: [x.jsx("div", {
                    className: "w-[2px] h-full bg-white/80"
                }), x.jsx("div", {
                    className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-primary flex items-center justify-center shadow-xl",
                    children: x.jsxs("div", {
                        className: "flex gap-0.5",
                        children: [x.jsx("div", {
                            className: "w-0.5 h-4 bg-primary/60 rounded-full"
                        }), x.jsx("div", {
                            className: "w-0.5 h-4 bg-primary/60 rounded-full"
                        })]
                    })
                })]
            })]
        }), x.jsx("div", {
            className: "absolute top-0 left-0 right-0 z-20",
            children: x.jsx("div", {
                className: "w-full bg-gradient-to-b from-white via-white/80 to-transparent pt-6 pb-16 flex justify-center",
                children: x.jsx("img", {
                    src: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/243f732c0_StainCraftLogo.png",
                    alt: "StainCraft Logo",
                    className: "h-36 md:h-48 object-contain"
                })
            })
        }), x.jsx("div", {
            className: "absolute top-8 left-6 z-20",
            children: x.jsx("span", {
                className: "bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs font-body font-medium tracking-widest uppercase px-4 py-2 rounded-full",
                children: "Before"
            })
        }), x.jsx("div", {
            className: "absolute top-8 right-6 z-20",
            children: x.jsx("span", {
                className: "bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-body font-medium tracking-widest uppercase px-4 py-2 rounded-full",
                children: "After"
            })
        }), x.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-10"
        }), x.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 z-20 pb-32 px-6 md:px-16 lg:px-24",
            children: x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .3
                },
                className: "max-w-3xl",
                children: [x.jsx("p", {
                    className: "font-body text-white/70 text-sm tracking-[0.3em] uppercase mb-4",
                    children: "Ottawa's Premier Deck Restoration"
                }), x.jsxs("h1", {
                    className: "font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6",
                    children: ["Revive the", x.jsx("br", {}), x.jsx("span", {
                        className: "text-primary italic",
                        children: "grain beneath"
                    })]
                }), x.jsx("p", {
                    className: "font-body text-white/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed",
                    children: "Expert sanding and staining that transforms weathered wood into enduring works of craftsmanship."
                }), x.jsx(Po, {
                    to: "/quote",
                    children: x.jsxs(Zr, {
                        className: "h-14 px-8 text-base font-body font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40",
                        children: ["Start Your Transformation", x.jsx(kf, {
                            className: "w-5 h-5 ml-2"
                        })]
                    })
                })]
            })
        }), x.jsx(ht.div, {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0
            },
            transition: {
                delay: 4,
                duration: 1
            },
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none",
            children: x.jsx("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg",
                children: x.jsx("span", {
                    className: "font-body text-sm text-foreground font-medium",
                    children: "← Drag to compare →"
                })
            })
        })]
    })
}
const zO = [{
    value: "40+",
    label: "Decks Restored"
}, {
    value: "4.8★",
    label: "Google Rating"
}, {
    value: "100%",
    label: "Satisfaction"
}];
function $O() {
    const t = _.useRef(null)
      , e = g1(t, {
        once: !0
    });
    return x.jsx("section", {
        ref: t,
        className: "py-16 md:py-20 px-6 md:px-16 lg:px-24 border-y border-border",
        children: x.jsx("div", {
            className: "max-w-7xl mx-auto grid grid-cols-3 gap-8 md:gap-4",
            children: zO.map( (n, i) => x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: e ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    delay: i * .1,
                    duration: .5
                },
                className: "text-center",
                children: [x.jsx("p", {
                    className: "font-display text-4xl md:text-5xl text-foreground",
                    children: n.value
                }), x.jsx("p", {
                    className: "font-body text-muted-foreground text-sm tracking-[0.15em] uppercase mt-2",
                    children: n.label
                })]
            }, n.label))
        })
    })
}
const HO = [{
    number: "01",
    title: "Clean",
    subtitle: "Debris Removal",
    description: "We start by blowing off all leaves and debris with a leaf blower, then scrubbing the entire deck surface with a stiff brush to remove dirt and buildup, ensuring a clean, ready foundation.",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/c73a973b4_generated_image.png"
}, {
    number: "02",
    title: "Sand",
    subtitle: "Surface Preparation",
    description: "We use professional-grade orbital sanders to strip away years of weathering and grey wood fibers, revealing fresh open grain. Every board is sanded to 80-120 grit for optimal stain absorption.",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/3ec71d45b_generated_72070916.png"
}, {
    number: "03",
    title: "Stain",
    subtitle: "Protective Finish",
    description: "Premium, oil-based stains are hand-applied with precision brushwork. Each coat bonds deep into the wood fibers, delivering rich colour along with UV protection and water resistance built for Ottawa's harsh winters.",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/5aa98ae77_generated_a094aadf.png"
}];
function qO({step: t, index: e}) {
    const n = _.useRef(null)
      , i = g1(n, {
        once: !0,
        margin: "-100px"
    });
    return x.jsxs(ht.div, {
        ref: n,
        initial: {
            opacity: 0,
            y: 60
        },
        animate: i ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: .7,
            delay: e * .1
        },
        className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${e % 2 !== 0 ? "lg:grid-flow-dense" : ""}`,
        children: [x.jsx("div", {
            className: `${e % 2 !== 0 ? "lg:col-start-2" : ""}`,
            children: x.jsx("div", {
                className: "overflow-hidden rounded-2xl",
                children: x.jsx("img", {
                    src: t.image,
                    alt: t.title,
                    className: "w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                })
            })
        }), x.jsxs("div", {
            className: `space-y-4 ${e % 2 !== 0 ? "lg:col-start-1" : ""}`,
            children: [x.jsxs("div", {
                className: "flex items-baseline gap-4",
                children: [x.jsx("span", {
                    className: "font-display text-6xl md:text-7xl text-primary/20",
                    children: t.number
                }), x.jsxs("div", {
                    children: [x.jsx("h3", {
                        className: "font-display text-3xl md:text-4xl text-foreground",
                        children: t.title
                    }), x.jsx("p", {
                        className: "font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mt-1",
                        children: t.subtitle
                    })]
                })]
            }), x.jsx("p", {
                className: "font-body text-muted-foreground text-lg leading-relaxed max-w-md",
                children: t.description
            })]
        })]
    })
}
function WO() {
    return x.jsx("section", {
        id: "process",
        className: "py-24 md:py-36 px-6 md:px-16 lg:px-24",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "mb-20",
                children: [x.jsx("p", {
                    className: "font-body text-sm tracking-[0.3em] uppercase text-primary mb-4",
                    children: "Our Process"
                }), x.jsxs("h2", {
                    className: "font-display text-4xl md:text-6xl text-foreground leading-tight",
                    children: ["The science of", x.jsx("br", {}), x.jsx("span", {
                        className: "italic text-primary",
                        children: "restoration"
                    })]
                })]
            }), x.jsx("div", {
                className: "space-y-24 md:space-y-32",
                children: HO.map( (t, e) => x.jsx(qO, {
                    step: t,
                    index: e
                }, t.number))
            })]
        })
    })
}
const KO = [{
    title: "Deep Penetrating Protection",
    desc: "Penetrates wood fibres for long-lasting protection against moisture, UV rays, and weathering."
}, {
    title: "Enhances Natural Grain",
    desc: "Enriches the wood's natural beauty rather than masking it with a film-forming finish."
}, {
    title: "Superior Durability",
    desc: "Formulated to withstand harsh Canadian winters and humid summers without cracking or peeling."
}, {
    title: "Eco-Friendly Formula",
    desc: "Low-VOC, water-repellent formula that is safe for families, pets, and the environment."
}, {
    title: "Rich, Lasting Colour",
    desc: "Fade-resistant pigments maintain vibrant colour season after season with minimal maintenance."
}, {
    title: "Australian Heritage",
    desc: "Trusted by professionals worldwide for over 130 years, designed for the world's toughest climates."
}];
function QO() {
    return x.jsx("section", {
        className: "py-24 md:py-36 bg-secondary text-secondary-foreground overflow-hidden",
        children: x.jsx("div", {
            className: "px-6 md:px-16 lg:px-24 max-w-7xl mx-auto",
            children: x.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                children: [x.jsxs(ht.div, {
                    initial: {
                        opacity: 0,
                        x: -40
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .7
                    },
                    children: [x.jsx("p", {
                        className: "font-body text-sm tracking-[0.3em] uppercase text-primary mb-4",
                        children: "Our Product of Choice"
                    }), x.jsxs("h2", {
                        className: "font-display text-4xl md:text-6xl leading-tight mb-6",
                        children: ["Our go-to is", x.jsx("br", {}), x.jsx("span", {
                            className: "italic text-primary",
                            children: "Cabot Australian Oil"
                        })]
                    }), x.jsxs("p", {
                        className: "font-body text-secondary-foreground/70 text-lg leading-relaxed mb-10",
                        children: ["Not all stains are created equal. Our preferred product is ", x.jsx("strong", {
                            className: "text-secondary-foreground",
                            children: "Cabot Australian Timber Oil"
                        }), ", one of the most trusted and premium wood finishing products on the market. Engineered in Australia for extreme outdoor conditions, it delivers a finish that looks stunning and lasts for years. If you have a different product in mind, we're happy to work with your preference."]
                    }), x.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                        children: KO.map( (t, e) => x.jsxs(ht.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .5,
                                delay: e * .08
                            },
                            className: "flex gap-3",
                            children: [x.jsx("div", {
                                className: "mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center",
                                children: x.jsx(wl, {
                                    className: "w-3 h-3 text-primary-foreground"
                                })
                            }), x.jsxs("div", {
                                children: [x.jsx("p", {
                                    className: "font-body font-semibold text-sm text-secondary-foreground",
                                    children: t.title
                                }), x.jsx("p", {
                                    className: "font-body text-xs text-secondary-foreground/60 leading-relaxed mt-0.5",
                                    children: t.desc
                                })]
                            })]
                        }, t.title))
                    })]
                }), x.jsxs(ht.div, {
                    initial: {
                        opacity: 0,
                        x: 40
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .7
                    },
                    className: "relative",
                    children: [x.jsxs("div", {
                        className: "relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl",
                        children: [x.jsx("img", {
                            src: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/8ce46a751_Cabot-ATO-natural-1G-HERO-1.jpg",
                            alt: "Cabot Australian Timber Oil",
                            className: "w-full h-full object-cover"
                        }), x.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                        }), x.jsx("div", {
                            className: "absolute bottom-6 left-6 right-6",
                            children: x.jsxs("div", {
                                className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4",
                                children: [x.jsx("p", {
                                    className: "font-display text-white text-xl italic",
                                    children: "Cabot Australian Timber Oil"
                                }), x.jsx("p", {
                                    className: "font-body text-white/70 text-xs mt-1",
                                    children: "Premium wood protection since 1877"
                                })]
                            })
                        })]
                    }), x.jsx("div", {
                        className: "absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none"
                    })]
                })]
            })
        })
    })
}
const gl = [{
    name: "Amberwood",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/8ac215d3a_Amberwood.JPG",
    description: "A soft, warm amber with subtle grain that brightens any deck."
}, {
    name: "Honey Teak",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/0ec0f10fa_Honey.JPG",
    description: "Golden honey tones inspired by classic teak hardwood."
}, {
    name: "Mahogany Flame",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/f0b2431c8_Mahoganny.JPG",
    description: "Rich reddish-orange hues with deep wood character."
}, {
    name: "Jarrah Brown",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/db3261a53_Brown.JPG",
    description: "Deep chocolate-brown reminiscent of Australian jarrah timber."
}];
function GO() {
    const [t,e] = _.useState(0);
    return x.jsxs("section", {
        id: "finishes",
        className: "relative py-24 md:py-36 overflow-hidden",
        children: [x.jsx(Ll, {
            mode: "wait",
            children: x.jsxs(ht.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .6
                },
                className: "absolute inset-0",
                children: [x.jsx("img", {
                    src: gl[t].image,
                    alt: gl[t].name,
                    className: "w-full h-full object-cover"
                }), x.jsx("div", {
                    className: "absolute inset-0 bg-black/60"
                })]
            }, t)
        }), x.jsxs("div", {
            className: "relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto",
            children: [x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "mb-16",
                children: [x.jsx("p", {
                    className: "font-body text-sm tracking-[0.3em] uppercase text-primary mb-4",
                    children: "Finish Collection"
                }), x.jsxs("h2", {
                    className: "font-display text-4xl md:text-6xl text-white leading-tight",
                    children: ["Visualize your", x.jsx("br", {}), x.jsx("span", {
                        className: "italic text-primary",
                        children: "perfect finish"
                    })]
                })]
            }), x.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
                children: gl.map( (n, i) => x.jsxs(ht.button, {
                    onClick: () => e(i),
                    whileHover: {
                        y: -4
                    },
                    className: `group relative rounded-2xl border overflow-hidden transition-all duration-300 text-left
                ${i === t ? "border-primary shadow-xl shadow-primary/30 ring-2 ring-primary" : "border-white/10 hover:border-white/30"}`,
                    children: [x.jsx("img", {
                        src: n.image,
                        alt: n.name,
                        className: "w-full h-48 md:h-56 object-cover"
                    }), x.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    }), x.jsxs("div", {
                        className: "absolute bottom-0 left-0 right-0 p-4",
                        children: [x.jsx("h3", {
                            className: "font-display text-lg text-white",
                            children: n.name
                        }), x.jsx("p", {
                            className: "font-body text-white/60 text-xs leading-relaxed mt-1",
                            children: n.description
                        })]
                    })]
                }, n.name))
            }), x.jsx(Ll, {
                mode: "wait",
                children: x.jsx(ht.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    transition: {
                        duration: .4
                    },
                    className: "text-center",
                    children: x.jsxs("p", {
                        className: "font-body text-white/60 text-lg max-w-xl mx-auto",
                        children: ["Shown: ", x.jsx("span", {
                            className: "text-primary font-medium",
                            children: gl[t].name
                        }), " finish applied to a residential deck in Ottawa."]
                    })
                }, t)
            }), x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5,
                    delay: .2
                },
                className: "mt-12 border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 max-w-xl mx-auto text-center",
                children: [x.jsx("p", {
                    className: "font-display text-white text-2xl italic mb-2",
                    children: "Don't see your colour?"
                }), x.jsx("p", {
                    className: "font-body text-white/60 text-sm leading-relaxed mb-4",
                    children: "Deck stains come in a wide range of tones and types. If you have a specific colour in mind, we'd love to help you find the perfect match."
                }), x.jsx("a", {
                    href: "/quote",
                    className: "inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded-full transition-colors",
                    children: "Get a Quote"
                })]
            })]
        })]
    })
}
function YO() {
    return x.jsx("section", {
        className: "py-24 md:py-36 px-6 md:px-16 lg:px-24",
        children: x.jsx("div", {
            className: "max-w-4xl mx-auto text-center",
            children: x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                children: [x.jsx("p", {
                    className: "font-body text-sm tracking-[0.3em] uppercase text-primary mb-6",
                    children: "Ready to begin?"
                }), x.jsxs("h2", {
                    className: "font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-8",
                    children: ["Don't let your investment", x.jsx("br", {}), x.jsx("span", {
                        className: "italic text-primary",
                        children: "fade away"
                    })]
                }), x.jsx("p", {
                    className: "font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",
                    children: "Ottawa's freeze-thaw cycles are relentless. Protect your deck with professional restoration that endures season after season."
                }), x.jsx(Po, {
                    to: "/quote",
                    children: x.jsxs(Zr, {
                        className: "h-16 px-10 text-lg font-body font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105",
                        children: ["Get Your Free Quote", x.jsx(kf, {
                            className: "w-5 h-5 ml-3"
                        })]
                    })
                })]
            })
        })
    })
}
function XO() {
    return x.jsx("footer", {
        id: "contact",
        className: "bg-secondary text-secondary-foreground py-20 px-6 md:px-16 lg:px-24",
        children: x.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [x.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-16",
                children: [x.jsxs("div", {
                    children: [x.jsx("h3", {
                        className: "font-display text-3xl mb-4",
                        children: "StainCraft"
                    }), x.jsx("p", {
                        className: "font-body text-secondary-foreground/60 leading-relaxed",
                        children: "We transform weathered wood into enduring masterworks of exterior design."
                    })]
                }), x.jsxs("div", {
                    children: [x.jsx("h4", {
                        className: "font-body font-semibold text-sm tracking-[0.2em] uppercase text-primary mb-6",
                        children: "Contact"
                    }), x.jsxs("div", {
                        className: "space-y-4",
                        children: [x.jsxs("a", {
                            href: "tel:+16135018131",
                            className: "flex items-center gap-3 font-body text-secondary-foreground/70 hover:text-primary transition-colors",
                            children: [x.jsx(p0, {
                                className: "w-4 h-4 text-primary"
                            }), "(613) 501-8131"]
                        }), x.jsxs("a", {
                            href: "mailto:ottawastaincraft@gmail.com",
                            className: "flex items-center gap-3 font-body text-secondary-foreground/70 hover:text-primary transition-colors",
                            children: [x.jsx(qb, {
                                className: "w-4 h-4 text-primary"
                            }), "ottawastaincraft@gmail.com"]
                        }), x.jsxs("div", {
                            className: "flex items-center gap-3 font-body text-secondary-foreground/70",
                            children: [x.jsx(Kb, {
                                className: "w-4 h-4 text-primary"
                            }), "Serving all of Ottawa"]
                        })]
                    })]
                })]
            }), x.jsxs("div", {
                className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [x.jsx("p", {
                    className: "font-body text-secondary-foreground/40 text-sm",
                    children: "© 2026 StainCraft Ottawa. All rights reserved."
                }), x.jsx("p", {
                    className: "font-body text-secondary-foreground/40 text-sm",
                    children: "Premium Deck Sanding & Staining"
                })]
            })]
        })
    })
}
function JO() {
    return x.jsxs("div", {
        children: [x.jsx(UO, {}), x.jsx($O, {}), x.jsx(WO, {}), x.jsx(QO, {}), x.jsx(GO, {}), x.jsx(YO, {}), x.jsx(XO, {})]
    })
}
const zs = _.forwardRef( ({className: t, type: e, ...n}, i) => x.jsx("input", {
    type: e,
    className: Rr("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: i,
    ...n
}));
zs.displayName = "Input";
const v1 = _.forwardRef( ({className: t, ...e}, n) => x.jsx("textarea", {
    className: Rr("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: n,
    ...e
}));
v1.displayName = "Textarea";
const _d = [{
    id: "new",
    label: "New / Good",
    description: "Recently built or in good shape",
    emoji: "✨"
}, {
    id: "weathered",
    label: "Weathered",
    description: "Faded and greyed but solid",
    emoji: "🌧️"
}, {
    id: "peeling",
    label: "Peeling / Damaged",
    description: "Old stain peeling, some damage",
    emoji: "⚠️"
}]
  , Rd = [{
    id: "sand_stain",
    label: "Sand & Stain",
    price: "from $2.25/sq ft"
}, {
    id: "sand_only",
    label: "Sand Only",
    price: "from $1.50/sq ft"
}, {
    id: "stain_only",
    label: "Stain Only",
    price: "from $0.75/sq ft"
}, {
    id: "repair_restore",
    label: "Full Restoration",
    price: "from $3.75/sq ft"
}]
  , ZO = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3];
function ej() {
    var g, y;
    const [t,e] = _.useState(0)
      , [n,i] = _.useState({
        condition: "",
        service: "",
        size: 300,
        workedTogether: "",
        workTypes: [],
        woodSpecies: [],
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        notes: ""
    })
      , [o,l] = _.useState(!1)
      , u = (w, E) => {
        const k = n[w];
        i({
            ...n,
            [w]: k.includes(E) ? k.filter(b => b !== E) : [...k, E]
        })
    }
      , d = () => t === 0 ? n.condition : t === 1 ? n.service : t === 2 || t === 3 ? !0 : t === 4 ? n.name && n.email && n.phone && n.address && n.postalCode : !0
      , h = async () => {
        var b, S;
        const w = ((b = _d.find(A => A.id === n.condition)) == null ? void 0 : b.label) || n.condition
          , E = ((S = Rd.find(A => A.id === n.service)) == null ? void 0 : S.label) || n.service
          , k = `
New Quote Request from StainCraft Ottawa

Name: ${n.name}
Email: ${n.email}
Phone: ${n.phone}
Address: ${n.address}
Postal Code: ${n.postalCode}

Deck Condition: ${w}
Service: ${E}
Deck Size: ${n.size} sq ft
Worked Together Before: ${n.workedTogether || "Not specified"}
Work Types: ${n.workTypes.length ? n.workTypes.join(", ") : "Not specified"}
Wood Species: ${n.woodSpecies.length ? n.woodSpecies.join(", ") : "Not specified"}

Additional Notes:
${n.notes || "None"}
    `.trim();
        await $s.integrations.Core.SendEmail({
            to: "ottawastaincraft@gmail.com",
            subject: `New Quote Request – ${n.name} (${n.size} sq ft)`,
            body: k
        }),
        l(!0)
    }
    ;
    if (o)
        return x.jsx("div", {
            className: "min-h-screen flex items-center justify-center px-6",
            children: x.jsxs(ht.div, {
                initial: {
                    opacity: 0,
                    scale: .9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                className: "text-center max-w-md",
                children: [x.jsx("div", {
                    className: "w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: x.jsx(wl, {
                        className: "w-10 h-10 text-primary"
                    })
                }), x.jsx("h2", {
                    className: "font-display text-4xl text-foreground mb-4",
                    children: "Quote Submitted"
                }), x.jsx("p", {
                    className: "font-body text-muted-foreground mb-8",
                    children: "We'll reach out within 24 hours to schedule your free on-site assessment."
                }), x.jsx(Po, {
                    to: "/",
                    children: x.jsxs(Zr, {
                        variant: "outline",
                        className: "rounded-full h-12 px-8 font-body",
                        children: [x.jsx(rd, {
                            className: "w-4 h-4 mr-2"
                        }), "Back to Home"]
                    })
                })]
            })
        });
    const m = [x.jsxs("div", {
        className: "space-y-6",
        children: [x.jsxs("div", {
            children: [x.jsx("h3", {
                className: "font-display text-3xl text-foreground mb-2",
                children: "What condition is your deck in?"
            }), x.jsx("p", {
                className: "font-body text-muted-foreground",
                children: "Select the option that best describes your deck's current state."
            })]
        }), x.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
            children: _d.map(w => x.jsxs("button", {
                onClick: () => i({
                    ...n,
                    condition: w.id
                }),
                className: `p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg
              ${n.condition === w.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30"}`,
                children: [x.jsx("span", {
                    className: "text-3xl mb-3 block",
                    children: w.emoji
                }), x.jsx("h4", {
                    className: "font-body font-semibold text-foreground text-lg",
                    children: w.label
                }), x.jsx("p", {
                    className: "font-body text-muted-foreground text-sm mt-1",
                    children: w.description
                })]
            }, w.id))
        })]
    }, "condition"), x.jsxs("div", {
        className: "space-y-6",
        children: [x.jsxs("div", {
            children: [x.jsx("h3", {
                className: "font-display text-3xl text-foreground mb-2",
                children: "What service do you need?"
            }), x.jsxs("p", {
                className: "font-body text-muted-foreground",
                children: ["Choose the level of restoration for your deck. ", x.jsx("strong", {
                    children: "Note: stain/oil cost is additional and priced per square foot."
                })]
            })]
        }), x.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: Rd.map(w => x.jsxs("button", {
                onClick: () => i({
                    ...n,
                    service: w.id
                }),
                className: `p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg
              ${n.service === w.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30"}`,
                children: [x.jsx("h4", {
                    className: "font-body font-semibold text-foreground text-lg",
                    children: w.label
                }), x.jsx("p", {
                    className: "font-body text-primary font-medium text-sm mt-2",
                    children: w.price
                })]
            }, w.id))
        })]
    }, "service"), x.jsxs("div", {
        className: "space-y-6",
        children: [x.jsxs("div", {
            children: [x.jsx("h3", {
                className: "font-display text-3xl text-foreground mb-2",
                children: "How large is your deck?"
            }), x.jsx("p", {
                className: "font-body text-muted-foreground",
                children: "Approximate square footage. We will measure on-site."
            })]
        }), x.jsxs("div", {
            className: "py-8",
            children: [x.jsxs("div", {
                className: "text-center mb-8",
                children: [x.jsx("span", {
                    className: "font-display text-6xl text-foreground",
                    children: n.size
                }), x.jsx("span", {
                    className: "font-body text-muted-foreground text-xl ml-2",
                    children: "sq ft"
                })]
            }), x.jsx("input", {
                type: "range",
                min: 100,
                max: 1e3,
                step: 10,
                value: n.size,
                onChange: w => i({
                    ...n,
                    size: parseInt(w.target.value)
                }),
                className: "w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary",
                style: {
                    accentColor: "hsl(28, 54%, 51%)"
                }
            }), x.jsx("div", {
                className: "flex justify-between mt-3",
                children: ZO.map(w => x.jsx("span", {
                    className: "font-body text-xs text-muted-foreground",
                    children: w
                }, w))
            })]
        })]
    }, "size"), x.jsxs("div", {
        className: "space-y-8",
        children: [x.jsxs("div", {
            children: [x.jsx("h3", {
                className: "font-display text-3xl text-foreground mb-2",
                children: "A little more about your project"
            }), x.jsx("p", {
                className: "font-body text-muted-foreground",
                children: "Help us understand your needs better before we get in touch."
            })]
        }), x.jsxs("div", {
            className: "space-y-3",
            children: [x.jsx("p", {
                className: "font-body font-semibold text-foreground",
                children: "Have we worked together before?"
            }), x.jsx("div", {
                className: "flex gap-6 flex-wrap",
                children: ["Yes", "No"].map(w => x.jsxs("label", {
                    className: "flex items-center gap-3 cursor-pointer group",
                    children: [x.jsx("div", {
                        onClick: () => i({
                            ...n,
                            workedTogether: w
                        }),
                        className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                  ${n.workedTogether === w ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"}`,
                        children: n.workedTogether === w && x.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-primary-foreground"
                        })
                    }), x.jsx("span", {
                        onClick: () => i({
                            ...n,
                            workedTogether: w
                        }),
                        className: "font-body text-sm text-foreground",
                        children: w
                    })]
                }, w))
            })]
        }), x.jsxs("div", {
            className: "space-y-3",
            children: [x.jsxs("p", {
                className: "font-body font-semibold text-foreground",
                children: ["What are you looking to get restored, stained or sanded? ", x.jsx("span", {
                    className: "text-muted-foreground font-normal",
                    children: "(select all that apply)"
                })]
            }), x.jsx("div", {
                className: "flex gap-6 flex-wrap",
                children: ["Fence", "Gazebo", "Deck", "Other"].map(w => x.jsxs("label", {
                    className: "flex items-center gap-3 cursor-pointer group",
                    children: [x.jsx("div", {
                        onClick: () => u("workTypes", w),
                        className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                  ${n.workTypes.includes(w) ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"}`,
                        children: n.workTypes.includes(w) && x.jsx(wl, {
                            className: "w-3 h-3 text-primary-foreground"
                        })
                    }), x.jsx("span", {
                        onClick: () => u("workTypes", w),
                        className: "font-body text-sm text-foreground",
                        children: w
                    })]
                }, w))
            })]
        }), x.jsxs("div", {
            className: "space-y-3",
            children: [x.jsxs("p", {
                className: "font-body font-semibold text-foreground",
                children: ["What wood species is it made of? ", x.jsx("span", {
                    className: "text-muted-foreground font-normal",
                    children: "(select all that apply)"
                })]
            }), x.jsx("div", {
                className: "flex gap-3 flex-wrap",
                children: ["Cedar", "Pressure Treated", "Hardwood", "Other / Not Sure"].map(w => x.jsxs("label", {
                    className: "flex items-center gap-3 cursor-pointer group",
                    children: [x.jsx("div", {
                        onClick: () => u("woodSpecies", w),
                        className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                  ${n.woodSpecies.includes(w) ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"}`,
                        children: n.woodSpecies.includes(w) && x.jsx(wl, {
                            className: "w-3 h-3 text-primary-foreground"
                        })
                    }), x.jsx("span", {
                        onClick: () => u("woodSpecies", w),
                        className: "font-body text-sm text-foreground",
                        children: w
                    })]
                }, w))
            })]
        })]
    }, "about"), x.jsxs("div", {
        className: "space-y-6",
        children: [x.jsxs("div", {
            children: [x.jsx("h3", {
                className: "font-display text-3xl text-foreground mb-2",
                children: "Your contact details"
            }), x.jsx("p", {
                className: "font-body text-muted-foreground",
                children: "We'll reach out within 24 hours to schedule your free assessment."
            })]
        }), x.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [x.jsx(zs, {
                placeholder: "Full Name",
                value: n.name,
                onChange: w => i({
                    ...n,
                    name: w.target.value
                }),
                className: "h-12 rounded-xl font-body"
            }), x.jsx(zs, {
                placeholder: "Email",
                type: "email",
                value: n.email,
                onChange: w => i({
                    ...n,
                    email: w.target.value
                }),
                className: "h-12 rounded-xl font-body"
            }), x.jsx(zs, {
                placeholder: "Phone",
                type: "tel",
                value: n.phone,
                onChange: w => i({
                    ...n,
                    phone: w.target.value
                }),
                className: "h-12 rounded-xl font-body"
            }), x.jsx(zs, {
                placeholder: "Address *",
                value: n.address,
                onChange: w => i({
                    ...n,
                    address: w.target.value
                }),
                className: "h-12 rounded-xl font-body"
            }), x.jsx(zs, {
                placeholder: "Postal Code *",
                value: n.postalCode,
                onChange: w => i({
                    ...n,
                    postalCode: w.target.value
                }),
                className: "h-12 rounded-xl font-body"
            })]
        }), x.jsx(v1, {
            placeholder: "Any additional details about your project...",
            value: n.notes,
            onChange: w => i({
                ...n,
                notes: w.target.value
            }),
            className: "rounded-xl font-body min-h-[100px]"
        }), n.service && x.jsxs("div", {
            className: "bg-primary/5 rounded-2xl p-6 border border-primary/20",
            children: [x.jsx("p", {
                className: "font-body text-sm text-muted-foreground mb-1",
                children: "Your project summary"
            }), x.jsxs("div", {
                className: "flex flex-wrap gap-3 mt-2",
                children: [x.jsxs("span", {
                    className: "bg-background rounded-full px-3 py-1 text-sm font-body",
                    children: [(g = _d.find(w => w.id === n.condition)) == null ? void 0 : g.label, " deck"]
                }), x.jsx("span", {
                    className: "bg-background rounded-full px-3 py-1 text-sm font-body",
                    children: (y = Rd.find(w => w.id === n.service)) == null ? void 0 : y.label
                }), x.jsxs("span", {
                    className: "bg-background rounded-full px-3 py-1 text-sm font-body",
                    children: [n.size, " sq ft"]
                })]
            })]
        })]
    }, "contact")];
    return x.jsx("div", {
        className: "min-h-screen py-12 px-6 md:px-16 lg:px-24",
        children: x.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [x.jsxs("div", {
                className: "flex items-center justify-between mb-12",
                children: [x.jsxs(Po, {
                    to: "/",
                    className: "flex items-center gap-2 font-body text-muted-foreground hover:text-foreground transition-colors",
                    children: [x.jsx(rd, {
                        className: "w-4 h-4"
                    }), "Back"]
                }), x.jsx("img", {
                    src: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/04b49eeb3_StainCraftLogo.png",
                    alt: "StainCraft",
                    className: "h-8 object-contain"
                })]
            }), x.jsx("div", {
                className: "flex gap-2 mb-12",
                children: [0, 1, 2, 3, 4].map(w => x.jsx("div", {
                    className: `h-1 flex-1 rounded-full transition-all duration-500
                ${w <= t ? "bg-primary" : "bg-border"}`
                }, w))
            }), x.jsx(Ll, {
                mode: "wait",
                children: x.jsx(ht.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -30
                    },
                    transition: {
                        duration: .3
                    },
                    children: m[t]
                }, t)
            }), x.jsxs("div", {
                className: "flex justify-between mt-12 pb-24",
                children: [x.jsxs(Zr, {
                    variant: "outline",
                    onClick: () => e(t - 1),
                    disabled: t === 0,
                    className: "rounded-full h-12 px-6 font-body",
                    children: [x.jsx(rd, {
                        className: "w-4 h-4 mr-2"
                    }), "Back"]
                }), t < 4 ? x.jsxs(Zr, {
                    onClick: () => e(t + 1),
                    disabled: !d(),
                    className: "rounded-full h-12 px-6 font-body bg-primary hover:bg-primary/90 text-primary-foreground",
                    children: ["Next", x.jsx(kf, {
                        className: "w-4 h-4 ml-2"
                    })]
                }) : x.jsxs(Zr, {
                    onClick: h,
                    disabled: !d(),
                    className: "rounded-full h-12 px-8 font-body bg-primary hover:bg-primary/90 text-primary-foreground",
                    children: ["Submit Quote", x.jsx(Jb, {
                        className: "w-4 h-4 ml-2"
                    })]
                })]
            })]
        })
    })
}
const tj = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: n, navigateToLogin: i} = Y_();
    if (e || t)
        return x.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center bg-background",
            children: x.jsx("div", {
                className: "w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin"
            })
        });
    if (n) {
        if (n.type === "user_not_registered")
            return x.jsx(X_, {});
        if (n.type === "auth_required")
            return i(),
            null
    }
    return x.jsxs(PC, {
        children: [x.jsxs(uo, {
            element: x.jsx(PO, {}),
            children: [x.jsx(uo, {
                path: "/",
                element: x.jsx(JO, {})
            }), x.jsx(uo, {
                path: "/quote",
                element: x.jsx(ej, {})
            })]
        }), x.jsx(uo, {
            path: "*",
            element: x.jsx(Q_, {})
        })]
    })
}
;
function nj() {
    return x.jsx(G_, {
        children: x.jsxs(vE, {
            client: NE,
            children: [x.jsx(LC, {
                children: x.jsx(tj, {})
            }), x.jsx(Wk, {})]
        })
    })
}
Cb.createRoot(document.getElementById("root")).render(x.jsx(nj, {}));
