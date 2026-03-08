(function() {
	const n = document.createElement("link").relList;
	if (n && n.supports && n.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) t(o);
	new MutationObserver(o => {
		for (const s of o)
			if (s.type === "childList")
				for (const p of s.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && t(p)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function r(o) {
		const s = {};
		return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
	}

	function t(o) {
		if (o.ep) return;
		o.ep = !0;
		const s = r(o);
		fetch(o.href, s)
	}
})();
var Od = {
		exports: {}
	},
	$l = {},
	Wd = {
		exports: {}
	},
	ln = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tu = Symbol.for("react.element"),
	sh = Symbol.for("react.portal"),
	fh = Symbol.for("react.fragment"),
	ch = Symbol.for("react.strict_mode"),
	dh = Symbol.for("react.profiler"),
	ph = Symbol.for("react.provider"),
	vh = Symbol.for("react.context"),
	hh = Symbol.for("react.forward_ref"),
	mh = Symbol.for("react.suspense"),
	gh = Symbol.for("react.memo"),
	_h = Symbol.for("react.lazy"),
	_c = Symbol.iterator;

function yh(e) {
	return e === null || typeof e != "object" ? null : (e = _c && e[_c] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ud = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	jd = Object.assign,
	Md = {};

function Aa(e, n, r) {
	this.props = e, this.context = n, this.refs = Md, this.updater = r || Ud
}
Aa.prototype.isReactComponent = {};
Aa.prototype.setState = function(e, n) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, n, "setState")
};
Aa.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function xd() {}
xd.prototype = Aa.prototype;

function wf(e, n, r) {
	this.props = e, this.context = n, this.refs = Md, this.updater = r || Ud
}
var Ef = wf.prototype = new xd;
Ef.constructor = wf;
jd(Ef, Aa.prototype);
Ef.isPureReactComponent = !0;
var yc = Array.isArray,
	Id = Object.prototype.hasOwnProperty,
	bf = {
		current: null
	},
	Dd = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Nd(e, n, r) {
	var t, o = {},
		s = null,
		p = null;
	if (n != null)
		for (t in n.ref !== void 0 && (p = n.ref), n.key !== void 0 && (s = "" + n.key), n) Id.call(n, t) && !Dd.hasOwnProperty(t) && (o[t] = n[t]);
	var k = arguments.length - 2;
	if (k === 1) o.children = r;
	else if (1 < k) {
		for (var U = Array(k), K = 0; K < k; K++) U[K] = arguments[K + 2];
		o.children = U
	}
	if (e && e.defaultProps)
		for (t in k = e.defaultProps, k) o[t] === void 0 && (o[t] = k[t]);
	return {
		$$typeof: Tu,
		type: e,
		key: s,
		ref: p,
		props: o,
		_owner: bf.current
	}
}

function wh(e, n) {
	return {
		$$typeof: Tu,
		type: e.type,
		key: n,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function Tf(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Tu
}

function Eh(e) {
	var n = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(r) {
		return n[r]
	})
}
var wc = /\/+/g;

function Gl(e, n) {
	return typeof e == "object" && e !== null && e.key != null ? Eh("" + e.key) : n.toString(36)
}

function Qu(e, n, r, t, o) {
	var s = typeof e;
	(s === "undefined" || s === "boolean") && (e = null);
	var p = !1;
	if (e === null) p = !0;
	else switch (s) {
		case "string":
		case "number":
			p = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case Tu:
				case sh:
					p = !0
			}
	}
	if (p) return p = e, o = o(p), e = t === "" ? "." + Gl(p, 0) : t, yc(o) ? (r = "", e != null && (r = e.replace(wc, "$&/") + "/"), Qu(o, n, r, "", function(K) {
		return K
	})) : o != null && (Tf(o) && (o = wh(o, r + (!o.key || p && p.key === o.key ? "" : ("" + o.key).replace(wc, "$&/") + "/") + e)), n.push(o)), 1;
	if (p = 0, t = t === "" ? "." : t + ":", yc(e))
		for (var k = 0; k < e.length; k++) {
			s = e[k];
			var U = t + Gl(s, k);
			p += Qu(s, n, r, U, o)
		} else if (U = yh(e), typeof U == "function")
			for (e = U.call(e), k = 0; !(s = e.next()).done;) s = s.value, U = t + Gl(s, k++), p += Qu(s, n, r, U, o);
		else if (s === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
	return p
}

function Ru(e, n, r) {
	if (e == null) return e;
	var t = [],
		o = 0;
	return Qu(e, t, "", "", function(s) {
		return n.call(r, s, o++)
	}), t
}

function bh(e) {
	if (e._status === -1) {
		var n = e._result;
		n = n(), n.then(function(r) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
		}, function(r) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
		}), e._status === -1 && (e._status = 0, e._result = n)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var Kt = {
		current: null
	},
	Ku = {
		transition: null
	},
	Th = {
		ReactCurrentDispatcher: Kt,
		ReactCurrentBatchConfig: Ku,
		ReactCurrentOwner: bf
	};

function Ld() {
	throw Error("act(...) is not supported in production builds of React.")
}
ln.Children = {
	map: Ru,
	forEach: function(e, n, r) {
		Ru(e, function() {
			n.apply(this, arguments)
		}, r)
	},
	count: function(e) {
		var n = 0;
		return Ru(e, function() {
			n++
		}), n
	},
	toArray: function(e) {
		return Ru(e, function(n) {
			return n
		}) || []
	},
	only: function(e) {
		if (!Tf(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
ln.Component = Aa;
ln.Fragment = fh;
ln.Profiler = dh;
ln.PureComponent = wf;
ln.StrictMode = ch;
ln.Suspense = mh;
ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Th;
ln.act = Ld;
ln.cloneElement = function(e, n, r) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var t = jd({}, e.props),
		o = e.key,
		s = e.ref,
		p = e._owner;
	if (n != null) {
		if (n.ref !== void 0 && (s = n.ref, p = bf.current), n.key !== void 0 && (o = "" + n.key), e.type && e.type.defaultProps) var k = e.type.defaultProps;
		for (U in n) Id.call(n, U) && !Dd.hasOwnProperty(U) && (t[U] = n[U] === void 0 && k !== void 0 ? k[U] : n[U])
	}
	var U = arguments.length - 2;
	if (U === 1) t.children = r;
	else if (1 < U) {
		k = Array(U);
		for (var K = 0; K < U; K++) k[K] = arguments[K + 2];
		t.children = k
	}
	return {
		$$typeof: Tu,
		type: e.type,
		key: o,
		ref: s,
		props: t,
		_owner: p
	}
};
ln.createContext = function(e) {
	return e = {
		$$typeof: vh,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: ph,
		_context: e
	}, e.Consumer = e
};
ln.createElement = Nd;
ln.createFactory = function(e) {
	var n = Nd.bind(null, e);
	return n.type = e, n
};
ln.createRef = function() {
	return {
		current: null
	}
};
ln.forwardRef = function(e) {
	return {
		$$typeof: hh,
		render: e
	}
};
ln.isValidElement = Tf;
ln.lazy = function(e) {
	return {
		$$typeof: _h,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: bh
	}
};
ln.memo = function(e, n) {
	return {
		$$typeof: gh,
		type: e,
		compare: n === void 0 ? null : n
	}
};
ln.startTransition = function(e) {
	var n = Ku.transition;
	Ku.transition = {};
	try {
		e()
	} finally {
		Ku.transition = n
	}
};
ln.unstable_act = Ld;
ln.useCallback = function(e, n) {
	return Kt.current.useCallback(e, n)
};
ln.useContext = function(e) {
	return Kt.current.useContext(e)
};
ln.useDebugValue = function() {};
ln.useDeferredValue = function(e) {
	return Kt.current.useDeferredValue(e)
};
ln.useEffect = function(e, n) {
	return Kt.current.useEffect(e, n)
};
ln.useId = function() {
	return Kt.current.useId()
};
ln.useImperativeHandle = function(e, n, r) {
	return Kt.current.useImperativeHandle(e, n, r)
};
ln.useInsertionEffect = function(e, n) {
	return Kt.current.useInsertionEffect(e, n)
};
ln.useLayoutEffect = function(e, n) {
	return Kt.current.useLayoutEffect(e, n)
};
ln.useMemo = function(e, n) {
	return Kt.current.useMemo(e, n)
};
ln.useReducer = function(e, n, r) {
	return Kt.current.useReducer(e, n, r)
};
ln.useRef = function(e) {
	return Kt.current.useRef(e)
};
ln.useState = function(e) {
	return Kt.current.useState(e)
};
ln.useSyncExternalStore = function(e, n, r) {
	return Kt.current.useSyncExternalStore(e, n, r)
};
ln.useTransition = function() {
	return Kt.current.useTransition()
};
ln.version = "18.3.1";
Wd.exports = ln;
var vt = Wd.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah = vt,
	Ch = Symbol.for("react.element"),
	Sh = Symbol.for("react.fragment"),
	kh = Object.prototype.hasOwnProperty,
	Rh = Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Ph = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Hd(e, n, r) {
	var t, o = {},
		s = null,
		p = null;
	r !== void 0 && (s = "" + r), n.key !== void 0 && (s = "" + n.key), n.ref !== void 0 && (p = n.ref);
	for (t in n) kh.call(n, t) && !Ph.hasOwnProperty(t) && (o[t] = n[t]);
	if (e && e.defaultProps)
		for (t in n = e.defaultProps, n) o[t] === void 0 && (o[t] = n[t]);
	return {
		$$typeof: Ch,
		type: e,
		key: s,
		ref: p,
		props: o,
		_owner: Rh.current
	}
}
$l.Fragment = Sh;
$l.jsx = Hd;
$l.jsxs = Hd;
Od.exports = $l;
var vr = Od.exports,
	Vd = {
		exports: {}
	},
	si = {},
	zd = {
		exports: {}
	},
	Bd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function n(Pe, ze) {
		var Ge = Pe.length;
		Pe.push(ze);
		e: for (; 0 < Ge;) {
			var qe = Ge - 1 >>> 1,
				tr = Pe[qe];
			if (0 < o(tr, ze)) Pe[qe] = ze, Pe[Ge] = tr, Ge = qe;
			else break e
		}
	}

	function r(Pe) {
		return Pe.length === 0 ? null : Pe[0]
	}

	function t(Pe) {
		if (Pe.length === 0) return null;
		var ze = Pe[0],
			Ge = Pe.pop();
		if (Ge !== ze) {
			Pe[0] = Ge;
			e: for (var qe = 0, tr = Pe.length, Er = tr >>> 1; qe < Er;) {
				var fn = 2 * (qe + 1) - 1,
					nn = Pe[fn],
					Ze = fn + 1,
					Mr = Pe[Ze];
				if (0 > o(nn, Ge)) Ze < tr && 0 > o(Mr, nn) ? (Pe[qe] = Mr, Pe[Ze] = Ge, qe = Ze) : (Pe[qe] = nn, Pe[fn] = Ge, qe = fn);
				else if (Ze < tr && 0 > o(Mr, Ge)) Pe[qe] = Mr, Pe[Ze] = Ge, qe = Ze;
				else break e
			}
		}
		return ze
	}

	function o(Pe, ze) {
		var Ge = Pe.sortIndex - ze.sortIndex;
		return Ge !== 0 ? Ge : Pe.id - ze.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var s = performance;
		e.unstable_now = function() {
			return s.now()
		}
	} else {
		var p = Date,
			k = p.now();
		e.unstable_now = function() {
			return p.now() - k
		}
	}
	var U = [],
		K = [],
		f = 1,
		te = null,
		ae = 3,
		ce = !1,
		_e = !1,
		Ce = !1,
		Qe = typeof setTimeout == "function" ? setTimeout : null,
		Z = typeof clearTimeout == "function" ? clearTimeout : null,
		G = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function q(Pe) {
		for (var ze = r(K); ze !== null;) {
			if (ze.callback === null) t(K);
			else if (ze.startTime <= Pe) t(K), ze.sortIndex = ze.expirationTime, n(U, ze);
			else break;
			ze = r(K)
		}
	}

	function Ee(Pe) {
		if (Ce = !1, q(Pe), !_e)
			if (r(U) !== null) _e = !0, Ne(Te);
			else {
				var ze = r(K);
				ze !== null && zr(Ee, ze.startTime - Pe)
			}
	}

	function Te(Pe, ze) {
		_e = !1, Ce && (Ce = !1, Z(Ae), Ae = -1), ce = !0;
		var Ge = ae;
		try {
			for (q(ze), te = r(U); te !== null && (!(te.expirationTime > ze) || Pe && !Me());) {
				var qe = te.callback;
				if (typeof qe == "function") {
					te.callback = null, ae = te.priorityLevel;
					var tr = qe(te.expirationTime <= ze);
					ze = e.unstable_now(), typeof tr == "function" ? te.callback = tr : te === r(U) && t(U), q(ze)
				} else t(U);
				te = r(U)
			}
			if (te !== null) var Er = !0;
			else {
				var fn = r(K);
				fn !== null && zr(Ee, fn.startTime - ze), Er = !1
			}
			return Er
		} finally {
			te = null, ae = Ge, ce = !1
		}
	}
	var Ue = !1,
		je = null,
		Ae = -1,
		Ve = 5,
		$e = -1;

	function Me() {
		return !(e.unstable_now() - $e < Ve)
	}

	function xe() {
		if (je !== null) {
			var Pe = e.unstable_now();
			$e = Pe;
			var ze = !0;
			try {
				ze = je(!0, Pe)
			} finally {
				ze ? ke() : (Ue = !1, je = null)
			}
		} else Ue = !1
	}
	var ke;
	if (typeof G == "function") ke = function() {
		G(xe)
	};
	else if (typeof MessageChannel < "u") {
		var sr = new MessageChannel,
			Be = sr.port2;
		sr.port1.onmessage = xe, ke = function() {
			Be.postMessage(null)
		}
	} else ke = function() {
		Qe(xe, 0)
	};

	function Ne(Pe) {
		je = Pe, Ue || (Ue = !0, ke())
	}

	function zr(Pe, ze) {
		Ae = Qe(function() {
			Pe(e.unstable_now())
		}, ze)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(Pe) {
		Pe.callback = null
	}, e.unstable_continueExecution = function() {
		_e || ce || (_e = !0, Ne(Te))
	}, e.unstable_forceFrameRate = function(Pe) {
		0 > Pe || 125 < Pe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ve = 0 < Pe ? Math.floor(1e3 / Pe) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return ae
	}, e.unstable_getFirstCallbackNode = function() {
		return r(U)
	}, e.unstable_next = function(Pe) {
		switch (ae) {
			case 1:
			case 2:
			case 3:
				var ze = 3;
				break;
			default:
				ze = ae
		}
		var Ge = ae;
		ae = ze;
		try {
			return Pe()
		} finally {
			ae = Ge
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(Pe, ze) {
		switch (Pe) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				Pe = 3
		}
		var Ge = ae;
		ae = Pe;
		try {
			return ze()
		} finally {
			ae = Ge
		}
	}, e.unstable_scheduleCallback = function(Pe, ze, Ge) {
		var qe = e.unstable_now();
		switch (typeof Ge == "object" && Ge !== null ? (Ge = Ge.delay, Ge = typeof Ge == "number" && 0 < Ge ? qe + Ge : qe) : Ge = qe, Pe) {
			case 1:
				var tr = -1;
				break;
			case 2:
				tr = 250;
				break;
			case 5:
				tr = 1073741823;
				break;
			case 4:
				tr = 1e4;
				break;
			default:
				tr = 5e3
		}
		return tr = Ge + tr, Pe = {
			id: f++,
			callback: ze,
			priorityLevel: Pe,
			startTime: Ge,
			expirationTime: tr,
			sortIndex: -1
		}, Ge > qe ? (Pe.sortIndex = Ge, n(K, Pe), r(U) === null && Pe === r(K) && (Ce ? (Z(Ae), Ae = -1) : Ce = !0, zr(Ee, Ge - qe))) : (Pe.sortIndex = tr, n(U, Pe), _e || ce || (_e = !0, Ne(Te))), Pe
	}, e.unstable_shouldYield = Me, e.unstable_wrapCallback = function(Pe) {
		var ze = ae;
		return function() {
			var Ge = ae;
			ae = ze;
			try {
				return Pe.apply(this, arguments)
			} finally {
				ae = Ge
			}
		}
	}
})(Bd);
zd.exports = Bd;
var Fh = zd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $h = vt,
	li = Fh;

function Le(e) {
	for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
	return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Yd = new Set,
	au = {};

function Bo(e, n) {
	ga(e, n), ga(e + "Capture", n)
}

function ga(e, n) {
	for (au[e] = n, e = 0; e < n.length; e++) Yd.add(n[e])
}
var Yi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	Es = Object.prototype.hasOwnProperty,
	Oh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Ec = {},
	bc = {};

function Wh(e) {
	return Es.call(bc, e) ? !0 : Es.call(Ec, e) ? !1 : Oh.test(e) ? bc[e] = !0 : (Ec[e] = !0, !1)
}

function Uh(e, n, r, t) {
	if (r !== null && r.type === 0) return !1;
	switch (typeof n) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return t ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function jh(e, n, r, t) {
	if (n === null || typeof n > "u" || Uh(e, n, r, t)) return !0;
	if (t) return !1;
	if (r !== null) switch (r.type) {
		case 3:
			return !n;
		case 4:
			return n === !1;
		case 5:
			return isNaN(n);
		case 6:
			return isNaN(n) || 1 > n
	}
	return !1
}

function qt(e, n, r, t, o, s, p) {
	this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = t, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = p
}
var Dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	Dt[e] = new qt(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var n = e[0];
	Dt[n] = new qt(n, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	Dt[e] = new qt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	Dt[e] = new qt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	Dt[e] = new qt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	Dt[e] = new qt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	Dt[e] = new qt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	Dt[e] = new qt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	Dt[e] = new qt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Af = /[\-:]([a-z])/g;

function Cf(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var n = e.replace(Af, Cf);
	Dt[n] = new qt(n, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var n = e.replace(Af, Cf);
	Dt[n] = new qt(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var n = e.replace(Af, Cf);
	Dt[n] = new qt(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	Dt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Dt.xlinkHref = new qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	Dt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Sf(e, n, r, t) {
	var o = Dt.hasOwnProperty(n) ? Dt[n] : null;
	(o !== null ? o.type !== 0 : t || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (jh(n, r, o, t) && (r = null), t || o === null ? Wh(n) && (r === null ? e.removeAttribute(n) : e.setAttribute(n, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (n = o.attributeName, t = o.attributeNamespace, r === null ? e.removeAttribute(n) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, t ? e.setAttributeNS(t, n, r) : e.setAttribute(n, r))))
}
var qi = $h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Pu = Symbol.for("react.element"),
	Jo = Symbol.for("react.portal"),
	ea = Symbol.for("react.fragment"),
	kf = Symbol.for("react.strict_mode"),
	bs = Symbol.for("react.profiler"),
	Gd = Symbol.for("react.provider"),
	Qd = Symbol.for("react.context"),
	Rf = Symbol.for("react.forward_ref"),
	Ts = Symbol.for("react.suspense"),
	As = Symbol.for("react.suspense_list"),
	Pf = Symbol.for("react.memo"),
	io = Symbol.for("react.lazy"),
	Kd = Symbol.for("react.offscreen"),
	Tc = Symbol.iterator;

function xa(e) {
	return e === null || typeof e != "object" ? null : (e = Tc && e[Tc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Et = Object.assign,
	Ql;

function Ba(e) {
	if (Ql === void 0) try {
		throw Error()
	} catch (r) {
		var n = r.stack.trim().match(/\n( *(at )?)/);
		Ql = n && n[1] || ""
	}
	return `
` + Ql + e
}
var Kl = !1;

function ql(e, n) {
	if (!e || Kl) return "";
	Kl = !0;
	var r = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (n)
			if (n = function() {
					throw Error()
				}, Object.defineProperty(n.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(n, [])
				} catch (K) {
					var t = K
				}
				Reflect.construct(e, [], n)
			} else {
				try {
					n.call()
				} catch (K) {
					t = K
				}
				e.call(n.prototype)
			}
		else {
			try {
				throw Error()
			} catch (K) {
				t = K
			}
			e()
		}
	} catch (K) {
		if (K && t && typeof K.stack == "string") {
			for (var o = K.stack.split(`
`), s = t.stack.split(`
`), p = o.length - 1, k = s.length - 1; 1 <= p && 0 <= k && o[p] !== s[k];) k--;
			for (; 1 <= p && 0 <= k; p--, k--)
				if (o[p] !== s[k]) {
					if (p !== 1 || k !== 1)
						do
							if (p--, k--, 0 > k || o[p] !== s[k]) {
								var U = `
` + o[p].replace(" at new ", " at ");
								return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U
							} while (1 <= p && 0 <= k);
					break
				}
		}
	} finally {
		Kl = !1, Error.prepareStackTrace = r
	}
	return (e = e ? e.displayName || e.name : "") ? Ba(e) : ""
}

function Mh(e) {
	switch (e.tag) {
		case 5:
			return Ba(e.type);
		case 16:
			return Ba("Lazy");
		case 13:
			return Ba("Suspense");
		case 19:
			return Ba("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = ql(e.type, !1), e;
		case 11:
			return e = ql(e.type.render, !1), e;
		case 1:
			return e = ql(e.type, !0), e;
		default:
			return ""
	}
}

function Cs(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case ea:
			return "Fragment";
		case Jo:
			return "Portal";
		case bs:
			return "Profiler";
		case kf:
			return "StrictMode";
		case Ts:
			return "Suspense";
		case As:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case Qd:
			return (e.displayName || "Context") + ".Consumer";
		case Gd:
			return (e._context.displayName || "Context") + ".Provider";
		case Rf:
			var n = e.render;
			return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case Pf:
			return n = e.displayName || null, n !== null ? n : Cs(e.type) || "Memo";
		case io:
			n = e._payload, e = e._init;
			try {
				return Cs(e(n))
			} catch {}
	}
	return null
}

function xh(e) {
	var n = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (n.displayName || "Context") + ".Consumer";
		case 10:
			return (n._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return n;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Cs(n);
		case 8:
			return n === kf ? "StrictMode" : "Mode";
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
			if (typeof n == "function") return n.displayName || n.name || null;
			if (typeof n == "string") return n
	}
	return null
}

function yo(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function qd(e) {
	var n = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
}

function Ih(e) {
	var n = qd(e) ? "checked" : "value",
		r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
		t = "" + e[n];
	if (!e.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
		var o = r.get,
			s = r.set;
		return Object.defineProperty(e, n, {
			configurable: !0,
			get: function() {
				return o.call(this)
			},
			set: function(p) {
				t = "" + p, s.call(this, p)
			}
		}), Object.defineProperty(e, n, {
			enumerable: r.enumerable
		}), {
			getValue: function() {
				return t
			},
			setValue: function(p) {
				t = "" + p
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[n]
			}
		}
	}
}

function Fu(e) {
	e._valueTracker || (e._valueTracker = Ih(e))
}

function Xd(e) {
	if (!e) return !1;
	var n = e._valueTracker;
	if (!n) return !0;
	var r = n.getValue(),
		t = "";
	return e && (t = qd(e) ? e.checked ? "true" : "false" : e.value), e = t, e !== r ? (n.setValue(e), !0) : !1
}

function ul(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function Ss(e, n) {
	var r = n.checked;
	return Et({}, n, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: r ?? e._wrapperState.initialChecked
	})
}

function Ac(e, n) {
	var r = n.defaultValue == null ? "" : n.defaultValue,
		t = n.checked != null ? n.checked : n.defaultChecked;
	r = yo(n.value != null ? n.value : r), e._wrapperState = {
		initialChecked: t,
		initialValue: r,
		controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
	}
}

function Zd(e, n) {
	n = n.checked, n != null && Sf(e, "checked", n, !1)
}

function ks(e, n) {
	Zd(e, n);
	var r = yo(n.value),
		t = n.type;
	if (r != null) t === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
	else if (t === "submit" || t === "reset") {
		e.removeAttribute("value");
		return
	}
	n.hasOwnProperty("value") ? Rs(e, n.type, r) : n.hasOwnProperty("defaultValue") && Rs(e, n.type, yo(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}

function Cc(e, n, r) {
	if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
		var t = n.type;
		if (!(t !== "submit" && t !== "reset" || n.value !== void 0 && n.value !== null)) return;
		n = "" + e._wrapperState.initialValue, r || n === e.value || (e.value = n), e.defaultValue = n
	}
	r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function Rs(e, n, r) {
	(n !== "number" || ul(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Ya = Array.isArray;

function ca(e, n, r, t) {
	if (e = e.options, n) {
		n = {};
		for (var o = 0; o < r.length; o++) n["$" + r[o]] = !0;
		for (r = 0; r < e.length; r++) o = n.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && t && (e[r].defaultSelected = !0)
	} else {
		for (r = "" + yo(r), n = null, o = 0; o < e.length; o++) {
			if (e[o].value === r) {
				e[o].selected = !0, t && (e[o].defaultSelected = !0);
				return
			}
			n !== null || e[o].disabled || (n = e[o])
		}
		n !== null && (n.selected = !0)
	}
}

function Ps(e, n) {
	if (n.dangerouslySetInnerHTML != null) throw Error(Le(91));
	return Et({}, n, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function Sc(e, n) {
	var r = n.value;
	if (r == null) {
		if (r = n.children, n = n.defaultValue, r != null) {
			if (n != null) throw Error(Le(92));
			if (Ya(r)) {
				if (1 < r.length) throw Error(Le(93));
				r = r[0]
			}
			n = r
		}
		n == null && (n = ""), r = n
	}
	e._wrapperState = {
		initialValue: yo(r)
	}
}

function Jd(e, n) {
	var r = yo(n.value),
		t = yo(n.defaultValue);
	r != null && (r = "" + r, r !== e.value && (e.value = r), n.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), t != null && (e.defaultValue = "" + t)
}

function kc(e) {
	var n = e.textContent;
	n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}

function ep(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function Fs(e, n) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? ep(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var $u, rp = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, r, t, o) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(n, r, t, o)
		})
	} : e
}(function(e, n) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
	else {
		for ($u = $u || document.createElement("div"), $u.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = $u.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; n.firstChild;) e.appendChild(n.firstChild)
	}
});

function uu(e, n) {
	if (n) {
		var r = e.firstChild;
		if (r && r === e.lastChild && r.nodeType === 3) {
			r.nodeValue = n;
			return
		}
	}
	e.textContent = n
}
var Ka = {
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
	},
	Dh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ka).forEach(function(e) {
	Dh.forEach(function(n) {
		n = n + e.charAt(0).toUpperCase() + e.substring(1), Ka[n] = Ka[e]
	})
});

function np(e, n, r) {
	return n == null || typeof n == "boolean" || n === "" ? "" : r || typeof n != "number" || n === 0 || Ka.hasOwnProperty(e) && Ka[e] ? ("" + n).trim() : n + "px"
}

function tp(e, n) {
	e = e.style;
	for (var r in n)
		if (n.hasOwnProperty(r)) {
			var t = r.indexOf("--") === 0,
				o = np(r, n[r], t);
			r === "float" && (r = "cssFloat"), t ? e.setProperty(r, o) : e[r] = o
		}
}
var Nh = Et({
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

function $s(e, n) {
	if (n) {
		if (Nh[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(Le(137, e));
		if (n.dangerouslySetInnerHTML != null) {
			if (n.children != null) throw Error(Le(60));
			if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(Le(61))
		}
		if (n.style != null && typeof n.style != "object") throw Error(Le(62))
	}
}

function Os(e, n) {
	if (e.indexOf("-") === -1) return typeof n.is == "string";
	switch (e) {
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
var Ws = null;

function Ff(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Us = null,
	da = null,
	pa = null;

function Rc(e) {
	if (e = Su(e)) {
		if (typeof Us != "function") throw Error(Le(280));
		var n = e.stateNode;
		n && (n = Ml(n), Us(e.stateNode, e.type, n))
	}
}

function ip(e) {
	da ? pa ? pa.push(e) : pa = [e] : da = e
}

function op() {
	if (da) {
		var e = da,
			n = pa;
		if (pa = da = null, Rc(e), n)
			for (e = 0; e < n.length; e++) Rc(n[e])
	}
}

function ap(e, n) {
	return e(n)
}

function up() {}
var Xl = !1;

function lp(e, n, r) {
	if (Xl) return e(n, r);
	Xl = !0;
	try {
		return ap(e, n, r)
	} finally {
		Xl = !1, (da !== null || pa !== null) && (up(), op())
	}
}

function lu(e, n) {
	var r = e.stateNode;
	if (r === null) return null;
	var t = Ml(r);
	if (t === null) return null;
	r = t[n];
	e: switch (n) {
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
			(t = !t.disabled) || (e = e.type, t = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !t;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (r && typeof r != "function") throw Error(Le(231, n, typeof r));
	return r
}
var js = !1;
if (Yi) try {
	var Ia = {};
	Object.defineProperty(Ia, "passive", {
		get: function() {
			js = !0
		}
	}), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia)
} catch {
	js = !1
}

function Lh(e, n, r, t, o, s, p, k, U) {
	var K = Array.prototype.slice.call(arguments, 3);
	try {
		n.apply(r, K)
	} catch (f) {
		this.onError(f)
	}
}
var qa = !1,
	ll = null,
	sl = !1,
	Ms = null,
	Hh = {
		onError: function(e) {
			qa = !0, ll = e
		}
	};

function Vh(e, n, r, t, o, s, p, k, U) {
	qa = !1, ll = null, Lh.apply(Hh, arguments)
}

function zh(e, n, r, t, o, s, p, k, U) {
	if (Vh.apply(this, arguments), qa) {
		if (qa) {
			var K = ll;
			qa = !1, ll = null
		} else throw Error(Le(198));
		sl || (sl = !0, Ms = K)
	}
}

function Yo(e) {
	var n = e,
		r = e;
	if (e.alternate)
		for (; n.return;) n = n.return;
	else {
		e = n;
		do n = e, n.flags & 4098 && (r = n.return), e = n.return; while (e)
	}
	return n.tag === 3 ? r : null
}

function sp(e) {
	if (e.tag === 13) {
		var n = e.memoizedState;
		if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
	}
	return null
}

function Pc(e) {
	if (Yo(e) !== e) throw Error(Le(188))
}

function Bh(e) {
	var n = e.alternate;
	if (!n) {
		if (n = Yo(e), n === null) throw Error(Le(188));
		return n !== e ? null : e
	}
	for (var r = e, t = n;;) {
		var o = r.return;
		if (o === null) break;
		var s = o.alternate;
		if (s === null) {
			if (t = o.return, t !== null) {
				r = t;
				continue
			}
			break
		}
		if (o.child === s.child) {
			for (s = o.child; s;) {
				if (s === r) return Pc(o), e;
				if (s === t) return Pc(o), n;
				s = s.sibling
			}
			throw Error(Le(188))
		}
		if (r.return !== t.return) r = o, t = s;
		else {
			for (var p = !1, k = o.child; k;) {
				if (k === r) {
					p = !0, r = o, t = s;
					break
				}
				if (k === t) {
					p = !0, t = o, r = s;
					break
				}
				k = k.sibling
			}
			if (!p) {
				for (k = s.child; k;) {
					if (k === r) {
						p = !0, r = s, t = o;
						break
					}
					if (k === t) {
						p = !0, t = s, r = o;
						break
					}
					k = k.sibling
				}
				if (!p) throw Error(Le(189))
			}
		}
		if (r.alternate !== t) throw Error(Le(190))
	}
	if (r.tag !== 3) throw Error(Le(188));
	return r.stateNode.current === r ? e : n
}

function fp(e) {
	return e = Bh(e), e !== null ? cp(e) : null
}

function cp(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var n = cp(e);
		if (n !== null) return n;
		e = e.sibling
	}
	return null
}
var dp = li.unstable_scheduleCallback,
	Fc = li.unstable_cancelCallback,
	Yh = li.unstable_shouldYield,
	Gh = li.unstable_requestPaint,
	Rt = li.unstable_now,
	Qh = li.unstable_getCurrentPriorityLevel,
	$f = li.unstable_ImmediatePriority,
	pp = li.unstable_UserBlockingPriority,
	fl = li.unstable_NormalPriority,
	Kh = li.unstable_LowPriority,
	vp = li.unstable_IdlePriority,
	Ol = null,
	Wi = null;

function qh(e) {
	if (Wi && typeof Wi.onCommitFiberRoot == "function") try {
		Wi.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var Ai = Math.clz32 ? Math.clz32 : Jh,
	Xh = Math.log,
	Zh = Math.LN2;

function Jh(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (Xh(e) / Zh | 0) | 0
}
var Ou = 64,
	Wu = 4194304;

function Ga(e) {
	switch (e & -e) {
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
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function cl(e, n) {
	var r = e.pendingLanes;
	if (r === 0) return 0;
	var t = 0,
		o = e.suspendedLanes,
		s = e.pingedLanes,
		p = r & 268435455;
	if (p !== 0) {
		var k = p & ~o;
		k !== 0 ? t = Ga(k) : (s &= p, s !== 0 && (t = Ga(s)))
	} else p = r & ~o, p !== 0 ? t = Ga(p) : s !== 0 && (t = Ga(s));
	if (t === 0) return 0;
	if (n !== 0 && n !== t && !(n & o) && (o = t & -t, s = n & -n, o >= s || o === 16 && (s & 4194240) !== 0)) return n;
	if (t & 4 && (t |= r & 16), n = e.entangledLanes, n !== 0)
		for (e = e.entanglements, n &= t; 0 < n;) r = 31 - Ai(n), o = 1 << r, t |= e[r], n &= ~o;
	return t
}

function em(e, n) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return n + 250;
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
			return n + 5e3;
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

function rm(e, n) {
	for (var r = e.suspendedLanes, t = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
		var p = 31 - Ai(s),
			k = 1 << p,
			U = o[p];
		U === -1 ? (!(k & r) || k & t) && (o[p] = em(k, n)) : U <= n && (e.expiredLanes |= k), s &= ~k
	}
}

function xs(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function hp() {
	var e = Ou;
	return Ou <<= 1, !(Ou & 4194240) && (Ou = 64), e
}

function Zl(e) {
	for (var n = [], r = 0; 31 > r; r++) n.push(e);
	return n
}

function Au(e, n, r) {
	e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ai(n), e[n] = r
}

function nm(e, n) {
	var r = e.pendingLanes & ~n;
	e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
	var t = e.eventTimes;
	for (e = e.expirationTimes; 0 < r;) {
		var o = 31 - Ai(r),
			s = 1 << o;
		n[o] = 0, t[o] = -1, e[o] = -1, r &= ~s
	}
}

function Of(e, n) {
	var r = e.entangledLanes |= n;
	for (e = e.entanglements; r;) {
		var t = 31 - Ai(r),
			o = 1 << t;
		o & n | e[t] & n && (e[t] |= n), r &= ~o
	}
}
var Nn = 0;

function mp(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gp, Wf, _p, yp, wp, Is = !1,
	Uu = [],
	fo = null,
	co = null,
	po = null,
	su = new Map,
	fu = new Map,
	ao = [],
	tm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function $c(e, n) {
	switch (e) {
		case "focusin":
		case "focusout":
			fo = null;
			break;
		case "dragenter":
		case "dragleave":
			co = null;
			break;
		case "mouseover":
		case "mouseout":
			po = null;
			break;
		case "pointerover":
		case "pointerout":
			su.delete(n.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			fu.delete(n.pointerId)
	}
}

function Da(e, n, r, t, o, s) {
	return e === null || e.nativeEvent !== s ? (e = {
		blockedOn: n,
		domEventName: r,
		eventSystemFlags: t,
		nativeEvent: s,
		targetContainers: [o]
	}, n !== null && (n = Su(n), n !== null && Wf(n)), e) : (e.eventSystemFlags |= t, n = e.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), e)
}

function im(e, n, r, t, o) {
	switch (n) {
		case "focusin":
			return fo = Da(fo, e, n, r, t, o), !0;
		case "dragenter":
			return co = Da(co, e, n, r, t, o), !0;
		case "mouseover":
			return po = Da(po, e, n, r, t, o), !0;
		case "pointerover":
			var s = o.pointerId;
			return su.set(s, Da(su.get(s) || null, e, n, r, t, o)), !0;
		case "gotpointercapture":
			return s = o.pointerId, fu.set(s, Da(fu.get(s) || null, e, n, r, t, o)), !0
	}
	return !1
}

function Ep(e) {
	var n = Wo(e.target);
	if (n !== null) {
		var r = Yo(n);
		if (r !== null) {
			if (n = r.tag, n === 13) {
				if (n = sp(r), n !== null) {
					e.blockedOn = n, wp(e.priority, function() {
						_p(r)
					});
					return
				}
			} else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function qu(e) {
	if (e.blockedOn !== null) return !1;
	for (var n = e.targetContainers; 0 < n.length;) {
		var r = Ds(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
		if (r === null) {
			r = e.nativeEvent;
			var t = new r.constructor(r.type, r);
			Ws = t, r.target.dispatchEvent(t), Ws = null
		} else return n = Su(r), n !== null && Wf(n), e.blockedOn = r, !1;
		n.shift()
	}
	return !0
}

function Oc(e, n, r) {
	qu(e) && r.delete(n)
}

function om() {
	Is = !1, fo !== null && qu(fo) && (fo = null), co !== null && qu(co) && (co = null), po !== null && qu(po) && (po = null), su.forEach(Oc), fu.forEach(Oc)
}

function Na(e, n) {
	e.blockedOn === n && (e.blockedOn = null, Is || (Is = !0, li.unstable_scheduleCallback(li.unstable_NormalPriority, om)))
}

function cu(e) {
	function n(o) {
		return Na(o, e)
	}
	if (0 < Uu.length) {
		Na(Uu[0], e);
		for (var r = 1; r < Uu.length; r++) {
			var t = Uu[r];
			t.blockedOn === e && (t.blockedOn = null)
		}
	}
	for (fo !== null && Na(fo, e), co !== null && Na(co, e), po !== null && Na(po, e), su.forEach(n), fu.forEach(n), r = 0; r < ao.length; r++) t = ao[r], t.blockedOn === e && (t.blockedOn = null);
	for (; 0 < ao.length && (r = ao[0], r.blockedOn === null);) Ep(r), r.blockedOn === null && ao.shift()
}
var va = qi.ReactCurrentBatchConfig,
	dl = !0;

function am(e, n, r, t) {
	var o = Nn,
		s = va.transition;
	va.transition = null;
	try {
		Nn = 1, Uf(e, n, r, t)
	} finally {
		Nn = o, va.transition = s
	}
}

function um(e, n, r, t) {
	var o = Nn,
		s = va.transition;
	va.transition = null;
	try {
		Nn = 4, Uf(e, n, r, t)
	} finally {
		Nn = o, va.transition = s
	}
}

function Uf(e, n, r, t) {
	if (dl) {
		var o = Ds(e, n, r, t);
		if (o === null) ls(e, n, t, pl, r), $c(e, t);
		else if (im(o, e, n, r, t)) t.stopPropagation();
		else if ($c(e, t), n & 4 && -1 < tm.indexOf(e)) {
			for (; o !== null;) {
				var s = Su(o);
				if (s !== null && gp(s), s = Ds(e, n, r, t), s === null && ls(e, n, t, pl, r), s === o) break;
				o = s
			}
			o !== null && t.stopPropagation()
		} else ls(e, n, t, null, r)
	}
}
var pl = null;

function Ds(e, n, r, t) {
	if (pl = null, e = Ff(t), e = Wo(e), e !== null)
		if (n = Yo(e), n === null) e = null;
		else if (r = n.tag, r === 13) {
		if (e = sp(n), e !== null) return e;
		e = null
	} else if (r === 3) {
		if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
		e = null
	} else n !== e && (e = null);
	return pl = e, null
}

function bp(e) {
	switch (e) {
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
			switch (Qh()) {
				case $f:
					return 1;
				case pp:
					return 4;
				case fl:
				case Kh:
					return 16;
				case vp:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var lo = null,
	jf = null,
	Xu = null;

function Tp() {
	if (Xu) return Xu;
	var e, n = jf,
		r = n.length,
		t, o = "value" in lo ? lo.value : lo.textContent,
		s = o.length;
	for (e = 0; e < r && n[e] === o[e]; e++);
	var p = r - e;
	for (t = 1; t <= p && n[r - t] === o[s - t]; t++);
	return Xu = o.slice(e, 1 < t ? 1 - t : void 0)
}

function Zu(e) {
	var n = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ju() {
	return !0
}

function Wc() {
	return !1
}

function fi(e) {
	function n(r, t, o, s, p) {
		this._reactName = r, this._targetInst = o, this.type = t, this.nativeEvent = s, this.target = p, this.currentTarget = null;
		for (var k in e) e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(s) : s[k]);
		return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ju : Wc, this.isPropagationStopped = Wc, this
	}
	return Et(n.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var r = this.nativeEvent;
			r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ju)
		},
		stopPropagation: function() {
			var r = this.nativeEvent;
			r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ju)
		},
		persist: function() {},
		isPersistent: ju
	}), n
}
var Ca = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Mf = fi(Ca),
	Cu = Et({}, Ca, {
		view: 0,
		detail: 0
	}),
	lm = fi(Cu),
	Jl, es, La, Wl = Et({}, Cu, {
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
		getModifierState: xf,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== La && (La && e.type === "mousemove" ? (Jl = e.screenX - La.screenX, es = e.screenY - La.screenY) : es = Jl = 0, La = e), Jl)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : es
		}
	}),
	Uc = fi(Wl),
	sm = Et({}, Wl, {
		dataTransfer: 0
	}),
	fm = fi(sm),
	cm = Et({}, Cu, {
		relatedTarget: 0
	}),
	rs = fi(cm),
	dm = Et({}, Ca, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	pm = fi(dm),
	vm = Et({}, Ca, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	hm = fi(vm),
	mm = Et({}, Ca, {
		data: 0
	}),
	jc = fi(mm),
	gm = {
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
	},
	_m = {
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
	},
	ym = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function wm(e) {
	var n = this.nativeEvent;
	return n.getModifierState ? n.getModifierState(e) : (e = ym[e]) ? !!n[e] : !1
}

function xf() {
	return wm
}
var Em = Et({}, Cu, {
		key: function(e) {
			if (e.key) {
				var n = gm[e.key] || e.key;
				if (n !== "Unidentified") return n
			}
			return e.type === "keypress" ? (e = Zu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _m[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: xf,
		charCode: function(e) {
			return e.type === "keypress" ? Zu(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? Zu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	bm = fi(Em),
	Tm = Et({}, Wl, {
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
	}),
	Mc = fi(Tm),
	Am = Et({}, Cu, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: xf
	}),
	Cm = fi(Am),
	Sm = Et({}, Ca, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	km = fi(Sm),
	Rm = Et({}, Wl, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	Pm = fi(Rm),
	Fm = [9, 13, 27, 32],
	If = Yi && "CompositionEvent" in window,
	Xa = null;
Yi && "documentMode" in document && (Xa = document.documentMode);
var $m = Yi && "TextEvent" in window && !Xa,
	Ap = Yi && (!If || Xa && 8 < Xa && 11 >= Xa),
	xc = " ",
	Ic = !1;

function Cp(e, n) {
	switch (e) {
		case "keyup":
			return Fm.indexOf(n.keyCode) !== -1;
		case "keydown":
			return n.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function Sp(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var ra = !1;

function Om(e, n) {
	switch (e) {
		case "compositionend":
			return Sp(n);
		case "keypress":
			return n.which !== 32 ? null : (Ic = !0, xc);
		case "textInput":
			return e = n.data, e === xc && Ic ? null : e;
		default:
			return null
	}
}

function Wm(e, n) {
	if (ra) return e === "compositionend" || !If && Cp(e, n) ? (e = Tp(), Xu = jf = lo = null, ra = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
				if (n.char && 1 < n.char.length) return n.char;
				if (n.which) return String.fromCharCode(n.which)
			}
			return null;
		case "compositionend":
			return Ap && n.locale !== "ko" ? null : n.data;
		default:
			return null
	}
}
var Um = {
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

function Dc(e) {
	var n = e && e.nodeName && e.nodeName.toLowerCase();
	return n === "input" ? !!Um[e.type] : n === "textarea"
}

function kp(e, n, r, t) {
	ip(t), n = vl(n, "onChange"), 0 < n.length && (r = new Mf("onChange", "change", null, r, t), e.push({
		event: r,
		listeners: n
	}))
}
var Za = null,
	du = null;

function jm(e) {
	Ip(e, 0)
}

function Ul(e) {
	var n = ia(e);
	if (Xd(n)) return e
}

function Mm(e, n) {
	if (e === "change") return n
}
var Rp = !1;
if (Yi) {
	var ns;
	if (Yi) {
		var ts = "oninput" in document;
		if (!ts) {
			var Nc = document.createElement("div");
			Nc.setAttribute("oninput", "return;"), ts = typeof Nc.oninput == "function"
		}
		ns = ts
	} else ns = !1;
	Rp = ns && (!document.documentMode || 9 < document.documentMode)
}

function Lc() {
	Za && (Za.detachEvent("onpropertychange", Pp), du = Za = null)
}

function Pp(e) {
	if (e.propertyName === "value" && Ul(du)) {
		var n = [];
		kp(n, du, e, Ff(e)), lp(jm, n)
	}
}

function xm(e, n, r) {
	e === "focusin" ? (Lc(), Za = n, du = r, Za.attachEvent("onpropertychange", Pp)) : e === "focusout" && Lc()
}

function Im(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ul(du)
}

function Dm(e, n) {
	if (e === "click") return Ul(n)
}

function Nm(e, n) {
	if (e === "input" || e === "change") return Ul(n)
}

function Lm(e, n) {
	return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
}
var Si = typeof Object.is == "function" ? Object.is : Lm;

function pu(e, n) {
	if (Si(e, n)) return !0;
	if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
	var r = Object.keys(e),
		t = Object.keys(n);
	if (r.length !== t.length) return !1;
	for (t = 0; t < r.length; t++) {
		var o = r[t];
		if (!Es.call(n, o) || !Si(e[o], n[o])) return !1
	}
	return !0
}

function Hc(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function Vc(e, n) {
	var r = Hc(e);
	e = 0;
	for (var t; r;) {
		if (r.nodeType === 3) {
			if (t = e + r.textContent.length, e <= n && t >= n) return {
				node: r,
				offset: n - e
			};
			e = t
		}
		e: {
			for (; r;) {
				if (r.nextSibling) {
					r = r.nextSibling;
					break e
				}
				r = r.parentNode
			}
			r = void 0
		}
		r = Hc(r)
	}
}

function Fp(e, n) {
	return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Fp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
}

function $p() {
	for (var e = window, n = ul(); n instanceof e.HTMLIFrameElement;) {
		try {
			var r = typeof n.contentWindow.location.href == "string"
		} catch {
			r = !1
		}
		if (r) e = n.contentWindow;
		else break;
		n = ul(e.document)
	}
	return n
}

function Df(e) {
	var n = e && e.nodeName && e.nodeName.toLowerCase();
	return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
}

function Hm(e) {
	var n = $p(),
		r = e.focusedElem,
		t = e.selectionRange;
	if (n !== r && r && r.ownerDocument && Fp(r.ownerDocument.documentElement, r)) {
		if (t !== null && Df(r)) {
			if (n = t.start, e = t.end, e === void 0 && (e = n), "selectionStart" in r) r.selectionStart = n, r.selectionEnd = Math.min(e, r.value.length);
			else if (e = (n = r.ownerDocument || document) && n.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var o = r.textContent.length,
					s = Math.min(t.start, o);
				t = t.end === void 0 ? s : Math.min(t.end, o), !e.extend && s > t && (o = t, t = s, s = o), o = Vc(r, s);
				var p = Vc(r, t);
				o && p && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (n = n.createRange(), n.setStart(o.node, o.offset), e.removeAllRanges(), s > t ? (e.addRange(n), e.extend(p.node, p.offset)) : (n.setEnd(p.node, p.offset), e.addRange(n)))
			}
		}
		for (n = [], e = r; e = e.parentNode;) e.nodeType === 1 && n.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++) e = n[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var Vm = Yi && "documentMode" in document && 11 >= document.documentMode,
	na = null,
	Ns = null,
	Ja = null,
	Ls = !1;

function zc(e, n, r) {
	var t = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
	Ls || na == null || na !== ul(t) || (t = na, "selectionStart" in t && Df(t) ? t = {
		start: t.selectionStart,
		end: t.selectionEnd
	} : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = {
		anchorNode: t.anchorNode,
		anchorOffset: t.anchorOffset,
		focusNode: t.focusNode,
		focusOffset: t.focusOffset
	}), Ja && pu(Ja, t) || (Ja = t, t = vl(Ns, "onSelect"), 0 < t.length && (n = new Mf("onSelect", "select", null, n, r), e.push({
		event: n,
		listeners: t
	}), n.target = na)))
}

function Mu(e, n) {
	var r = {};
	return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r
}
var ta = {
		animationend: Mu("Animation", "AnimationEnd"),
		animationiteration: Mu("Animation", "AnimationIteration"),
		animationstart: Mu("Animation", "AnimationStart"),
		transitionend: Mu("Transition", "TransitionEnd")
	},
	is = {},
	Op = {};
Yi && (Op = document.createElement("div").style, "AnimationEvent" in window || (delete ta.animationend.animation, delete ta.animationiteration.animation, delete ta.animationstart.animation), "TransitionEvent" in window || delete ta.transitionend.transition);

function jl(e) {
	if (is[e]) return is[e];
	if (!ta[e]) return e;
	var n = ta[e],
		r;
	for (r in n)
		if (n.hasOwnProperty(r) && r in Op) return is[e] = n[r];
	return e
}
var Wp = jl("animationend"),
	Up = jl("animationiteration"),
	jp = jl("animationstart"),
	Mp = jl("transitionend"),
	xp = new Map,
	Bc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Eo(e, n) {
	xp.set(e, n), Bo(n, [e])
}
for (var os = 0; os < Bc.length; os++) {
	var as = Bc[os],
		zm = as.toLowerCase(),
		Bm = as[0].toUpperCase() + as.slice(1);
	Eo(zm, "on" + Bm)
}
Eo(Wp, "onAnimationEnd");
Eo(Up, "onAnimationIteration");
Eo(jp, "onAnimationStart");
Eo("dblclick", "onDoubleClick");
Eo("focusin", "onFocus");
Eo("focusout", "onBlur");
Eo(Mp, "onTransitionEnd");
ga("onMouseEnter", ["mouseout", "mouseover"]);
ga("onMouseLeave", ["mouseout", "mouseover"]);
ga("onPointerEnter", ["pointerout", "pointerover"]);
ga("onPointerLeave", ["pointerout", "pointerover"]);
Bo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	Ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));

function Yc(e, n, r) {
	var t = e.type || "unknown-event";
	e.currentTarget = r, zh(t, n, void 0, e), e.currentTarget = null
}

function Ip(e, n) {
	n = (n & 4) !== 0;
	for (var r = 0; r < e.length; r++) {
		var t = e[r],
			o = t.event;
		t = t.listeners;
		e: {
			var s = void 0;
			if (n)
				for (var p = t.length - 1; 0 <= p; p--) {
					var k = t[p],
						U = k.instance,
						K = k.currentTarget;
					if (k = k.listener, U !== s && o.isPropagationStopped()) break e;
					Yc(o, k, K), s = U
				} else
					for (p = 0; p < t.length; p++) {
						if (k = t[p], U = k.instance, K = k.currentTarget, k = k.listener, U !== s && o.isPropagationStopped()) break e;
						Yc(o, k, K), s = U
					}
		}
	}
	if (sl) throw e = Ms, sl = !1, Ms = null, e
}

function st(e, n) {
	var r = n[Ys];
	r === void 0 && (r = n[Ys] = new Set);
	var t = e + "__bubble";
	r.has(t) || (Dp(n, e, 2, !1), r.add(t))
}

function us(e, n, r) {
	var t = 0;
	n && (t |= 4), Dp(r, e, t, n)
}
var xu = "_reactListening" + Math.random().toString(36).slice(2);

function vu(e) {
	if (!e[xu]) {
		e[xu] = !0, Yd.forEach(function(r) {
			r !== "selectionchange" && (Ym.has(r) || us(r, !1, e), us(r, !0, e))
		});
		var n = e.nodeType === 9 ? e : e.ownerDocument;
		n === null || n[xu] || (n[xu] = !0, us("selectionchange", !1, n))
	}
}

function Dp(e, n, r, t) {
	switch (bp(n)) {
		case 1:
			var o = am;
			break;
		case 4:
			o = um;
			break;
		default:
			o = Uf
	}
	r = o.bind(null, n, r, e), o = void 0, !js || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), t ? o !== void 0 ? e.addEventListener(n, r, {
		capture: !0,
		passive: o
	}) : e.addEventListener(n, r, !0) : o !== void 0 ? e.addEventListener(n, r, {
		passive: o
	}) : e.addEventListener(n, r, !1)
}

function ls(e, n, r, t, o) {
	var s = t;
	if (!(n & 1) && !(n & 2) && t !== null) e: for (;;) {
		if (t === null) return;
		var p = t.tag;
		if (p === 3 || p === 4) {
			var k = t.stateNode.containerInfo;
			if (k === o || k.nodeType === 8 && k.parentNode === o) break;
			if (p === 4)
				for (p = t.return; p !== null;) {
					var U = p.tag;
					if ((U === 3 || U === 4) && (U = p.stateNode.containerInfo, U === o || U.nodeType === 8 && U.parentNode === o)) return;
					p = p.return
				}
			for (; k !== null;) {
				if (p = Wo(k), p === null) return;
				if (U = p.tag, U === 5 || U === 6) {
					t = s = p;
					continue e
				}
				k = k.parentNode
			}
		}
		t = t.return
	}
	lp(function() {
		var K = s,
			f = Ff(r),
			te = [];
		e: {
			var ae = xp.get(e);
			if (ae !== void 0) {
				var ce = Mf,
					_e = e;
				switch (e) {
					case "keypress":
						if (Zu(r) === 0) break e;
					case "keydown":
					case "keyup":
						ce = bm;
						break;
					case "focusin":
						_e = "focus", ce = rs;
						break;
					case "focusout":
						_e = "blur", ce = rs;
						break;
					case "beforeblur":
					case "afterblur":
						ce = rs;
						break;
					case "click":
						if (r.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						ce = Uc;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						ce = fm;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						ce = Cm;
						break;
					case Wp:
					case Up:
					case jp:
						ce = pm;
						break;
					case Mp:
						ce = km;
						break;
					case "scroll":
						ce = lm;
						break;
					case "wheel":
						ce = Pm;
						break;
					case "copy":
					case "cut":
					case "paste":
						ce = hm;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						ce = Mc
				}
				var Ce = (n & 4) !== 0,
					Qe = !Ce && e === "scroll",
					Z = Ce ? ae !== null ? ae + "Capture" : null : ae;
				Ce = [];
				for (var G = K, q; G !== null;) {
					q = G;
					var Ee = q.stateNode;
					if (q.tag === 5 && Ee !== null && (q = Ee, Z !== null && (Ee = lu(G, Z), Ee != null && Ce.push(hu(G, Ee, q)))), Qe) break;
					G = G.return
				}
				0 < Ce.length && (ae = new ce(ae, _e, null, r, f), te.push({
					event: ae,
					listeners: Ce
				}))
			}
		}
		if (!(n & 7)) {
			e: {
				if (ae = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", ae && r !== Ws && (_e = r.relatedTarget || r.fromElement) && (Wo(_e) || _e[Gi])) break e;
				if ((ce || ae) && (ae = f.window === f ? f : (ae = f.ownerDocument) ? ae.defaultView || ae.parentWindow : window, ce ? (_e = r.relatedTarget || r.toElement, ce = K, _e = _e ? Wo(_e) : null, _e !== null && (Qe = Yo(_e), _e !== Qe || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (ce = null, _e = K), ce !== _e)) {
					if (Ce = Uc, Ee = "onMouseLeave", Z = "onMouseEnter", G = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Mc, Ee = "onPointerLeave", Z = "onPointerEnter", G = "pointer"), Qe = ce == null ? ae : ia(ce), q = _e == null ? ae : ia(_e), ae = new Ce(Ee, G + "leave", ce, r, f), ae.target = Qe, ae.relatedTarget = q, Ee = null, Wo(f) === K && (Ce = new Ce(Z, G + "enter", _e, r, f), Ce.target = q, Ce.relatedTarget = Qe, Ee = Ce), Qe = Ee, ce && _e) r: {
						for (Ce = ce, Z = _e, G = 0, q = Ce; q; q = Zo(q)) G++;
						for (q = 0, Ee = Z; Ee; Ee = Zo(Ee)) q++;
						for (; 0 < G - q;) Ce = Zo(Ce),
						G--;
						for (; 0 < q - G;) Z = Zo(Z),
						q--;
						for (; G--;) {
							if (Ce === Z || Z !== null && Ce === Z.alternate) break r;
							Ce = Zo(Ce), Z = Zo(Z)
						}
						Ce = null
					}
					else Ce = null;
					ce !== null && Gc(te, ae, ce, Ce, !1), _e !== null && Qe !== null && Gc(te, Qe, _e, Ce, !0)
				}
			}
			e: {
				if (ae = K ? ia(K) : window, ce = ae.nodeName && ae.nodeName.toLowerCase(), ce === "select" || ce === "input" && ae.type === "file") var Te = Mm;
				else if (Dc(ae))
					if (Rp) Te = Nm;
					else {
						Te = Im;
						var Ue = xm
					}
				else(ce = ae.nodeName) && ce.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (Te = Dm);
				if (Te && (Te = Te(e, K))) {
					kp(te, Te, r, f);
					break e
				}
				Ue && Ue(e, ae, K),
				e === "focusout" && (Ue = ae._wrapperState) && Ue.controlled && ae.type === "number" && Rs(ae, "number", ae.value)
			}
			switch (Ue = K ? ia(K) : window, e) {
				case "focusin":
					(Dc(Ue) || Ue.contentEditable === "true") && (na = Ue, Ns = K, Ja = null);
					break;
				case "focusout":
					Ja = Ns = na = null;
					break;
				case "mousedown":
					Ls = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					Ls = !1, zc(te, r, f);
					break;
				case "selectionchange":
					if (Vm) break;
				case "keydown":
				case "keyup":
					zc(te, r, f)
			}
			var je;
			if (If) e: {
				switch (e) {
					case "compositionstart":
						var Ae = "onCompositionStart";
						break e;
					case "compositionend":
						Ae = "onCompositionEnd";
						break e;
					case "compositionupdate":
						Ae = "onCompositionUpdate";
						break e
				}
				Ae = void 0
			}
			else ra ? Cp(e, r) && (Ae = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ae = "onCompositionStart");Ae && (Ap && r.locale !== "ko" && (ra || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && ra && (je = Tp()) : (lo = f, jf = "value" in lo ? lo.value : lo.textContent, ra = !0)), Ue = vl(K, Ae), 0 < Ue.length && (Ae = new jc(Ae, e, null, r, f), te.push({
				event: Ae,
				listeners: Ue
			}), je ? Ae.data = je : (je = Sp(r), je !== null && (Ae.data = je)))),
			(je = $m ? Om(e, r) : Wm(e, r)) && (K = vl(K, "onBeforeInput"), 0 < K.length && (f = new jc("onBeforeInput", "beforeinput", null, r, f), te.push({
				event: f,
				listeners: K
			}), f.data = je))
		}
		Ip(te, n)
	})
}

function hu(e, n, r) {
	return {
		instance: e,
		listener: n,
		currentTarget: r
	}
}

function vl(e, n) {
	for (var r = n + "Capture", t = []; e !== null;) {
		var o = e,
			s = o.stateNode;
		o.tag === 5 && s !== null && (o = s, s = lu(e, r), s != null && t.unshift(hu(e, s, o)), s = lu(e, n), s != null && t.push(hu(e, s, o))), e = e.return
	}
	return t
}

function Zo(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function Gc(e, n, r, t, o) {
	for (var s = n._reactName, p = []; r !== null && r !== t;) {
		var k = r,
			U = k.alternate,
			K = k.stateNode;
		if (U !== null && U === t) break;
		k.tag === 5 && K !== null && (k = K, o ? (U = lu(r, s), U != null && p.unshift(hu(r, U, k))) : o || (U = lu(r, s), U != null && p.push(hu(r, U, k)))), r = r.return
	}
	p.length !== 0 && e.push({
		event: n,
		listeners: p
	})
}
var Gm = /\r\n?/g,
	Qm = /\u0000|\uFFFD/g;

function Qc(e) {
	return (typeof e == "string" ? e : "" + e).replace(Gm, `
`).replace(Qm, "")
}

function Iu(e, n, r) {
	if (n = Qc(n), Qc(e) !== n && r) throw Error(Le(425))
}

function hl() {}
var Hs = null,
	Vs = null;

function zs(e, n) {
	return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
}
var Bs = typeof setTimeout == "function" ? setTimeout : void 0,
	Km = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Kc = typeof Promise == "function" ? Promise : void 0,
	qm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kc < "u" ? function(e) {
		return Kc.resolve(null).then(e).catch(Xm)
	} : Bs;

function Xm(e) {
	setTimeout(function() {
		throw e
	})
}

function ss(e, n) {
	var r = n,
		t = 0;
	do {
		var o = r.nextSibling;
		if (e.removeChild(r), o && o.nodeType === 8)
			if (r = o.data, r === "/$") {
				if (t === 0) {
					e.removeChild(o), cu(n);
					return
				}
				t--
			} else r !== "$" && r !== "$?" && r !== "$!" || t++;
		r = o
	} while (r);
	cu(n)
}

function vo(e) {
	for (; e != null; e = e.nextSibling) {
		var n = e.nodeType;
		if (n === 1 || n === 3) break;
		if (n === 8) {
			if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
			if (n === "/$") return null
		}
	}
	return e
}

function qc(e) {
	e = e.previousSibling;
	for (var n = 0; e;) {
		if (e.nodeType === 8) {
			var r = e.data;
			if (r === "$" || r === "$!" || r === "$?") {
				if (n === 0) return e;
				n--
			} else r === "/$" && n++
		}
		e = e.previousSibling
	}
	return null
}
var Sa = Math.random().toString(36).slice(2),
	Oi = "__reactFiber$" + Sa,
	mu = "__reactProps$" + Sa,
	Gi = "__reactContainer$" + Sa,
	Ys = "__reactEvents$" + Sa,
	Zm = "__reactListeners$" + Sa,
	Jm = "__reactHandles$" + Sa;

function Wo(e) {
	var n = e[Oi];
	if (n) return n;
	for (var r = e.parentNode; r;) {
		if (n = r[Gi] || r[Oi]) {
			if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
				for (e = qc(e); e !== null;) {
					if (r = e[Oi]) return r;
					e = qc(e)
				}
			return n
		}
		e = r, r = e.parentNode
	}
	return null
}

function Su(e) {
	return e = e[Oi] || e[Gi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function ia(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(Le(33))
}

function Ml(e) {
	return e[mu] || null
}
var Gs = [],
	oa = -1;

function bo(e) {
	return {
		current: e
	}
}

function ft(e) {
	0 > oa || (e.current = Gs[oa], Gs[oa] = null, oa--)
}

function ot(e, n) {
	oa++, Gs[oa] = e.current, e.current = n
}
var wo = {},
	Bt = bo(wo),
	Jt = bo(!1),
	No = wo;

function _a(e, n) {
	var r = e.type.contextTypes;
	if (!r) return wo;
	var t = e.stateNode;
	if (t && t.__reactInternalMemoizedUnmaskedChildContext === n) return t.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		s;
	for (s in r) o[s] = n[s];
	return t && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function ei(e) {
	return e = e.childContextTypes, e != null
}

function ml() {
	ft(Jt), ft(Bt)
}

function Xc(e, n, r) {
	if (Bt.current !== wo) throw Error(Le(168));
	ot(Bt, n), ot(Jt, r)
}

function Np(e, n, r) {
	var t = e.stateNode;
	if (n = n.childContextTypes, typeof t.getChildContext != "function") return r;
	t = t.getChildContext();
	for (var o in t)
		if (!(o in n)) throw Error(Le(108, xh(e) || "Unknown", o));
	return Et({}, r, t)
}

function gl(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wo, No = Bt.current, ot(Bt, e), ot(Jt, Jt.current), !0
}

function Zc(e, n, r) {
	var t = e.stateNode;
	if (!t) throw Error(Le(169));
	r ? (e = Np(e, n, No), t.__reactInternalMemoizedMergedChildContext = e, ft(Jt), ft(Bt), ot(Bt, e)) : ft(Jt), ot(Jt, r)
}
var Ni = null,
	xl = !1,
	fs = !1;

function Lp(e) {
	Ni === null ? Ni = [e] : Ni.push(e)
}

function eg(e) {
	xl = !0, Lp(e)
}

function To() {
	if (!fs && Ni !== null) {
		fs = !0;
		var e = 0,
			n = Nn;
		try {
			var r = Ni;
			for (Nn = 1; e < r.length; e++) {
				var t = r[e];
				do t = t(!0); while (t !== null)
			}
			Ni = null, xl = !1
		} catch (o) {
			throw Ni !== null && (Ni = Ni.slice(e + 1)), dp($f, To), o
		} finally {
			Nn = n, fs = !1
		}
	}
	return null
}
var aa = [],
	ua = 0,
	_l = null,
	yl = 0,
	ci = [],
	di = 0,
	Lo = null,
	Vi = 1,
	zi = "";

function $o(e, n) {
	aa[ua++] = yl, aa[ua++] = _l, _l = e, yl = n
}

function Hp(e, n, r) {
	ci[di++] = Vi, ci[di++] = zi, ci[di++] = Lo, Lo = e;
	var t = Vi;
	e = zi;
	var o = 32 - Ai(t) - 1;
	t &= ~(1 << o), r += 1;
	var s = 32 - Ai(n) + o;
	if (30 < s) {
		var p = o - o % 5;
		s = (t & (1 << p) - 1).toString(32), t >>= p, o -= p, Vi = 1 << 32 - Ai(n) + o | r << o | t, zi = s + e
	} else Vi = 1 << s | r << o | t, zi = e
}

function Nf(e) {
	e.return !== null && ($o(e, 1), Hp(e, 1, 0))
}

function Lf(e) {
	for (; e === _l;) _l = aa[--ua], aa[ua] = null, yl = aa[--ua], aa[ua] = null;
	for (; e === Lo;) Lo = ci[--di], ci[di] = null, zi = ci[--di], ci[di] = null, Vi = ci[--di], ci[di] = null
}
var ui = null,
	ai = null,
	ht = !1,
	Ti = null;

function Vp(e, n) {
	var r = vi(5, null, null, 0);
	r.elementType = "DELETED", r.stateNode = n, r.return = e, n = e.deletions, n === null ? (e.deletions = [r], e.flags |= 16) : n.push(r)
}

function Jc(e, n) {
	switch (e.tag) {
		case 5:
			var r = e.type;
			return n = n.nodeType !== 1 || r.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ui = e, ai = vo(n.firstChild), !0) : !1;
		case 6:
			return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ui = e, ai = null, !0) : !1;
		case 13:
			return n = n.nodeType !== 8 ? null : n, n !== null ? (r = Lo !== null ? {
				id: Vi,
				overflow: zi
			} : null, e.memoizedState = {
				dehydrated: n,
				treeContext: r,
				retryLane: 1073741824
			}, r = vi(18, null, null, 0), r.stateNode = n, r.return = e, e.child = r, ui = e, ai = null, !0) : !1;
		default:
			return !1
	}
}

function Qs(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ks(e) {
	if (ht) {
		var n = ai;
		if (n) {
			var r = n;
			if (!Jc(e, n)) {
				if (Qs(e)) throw Error(Le(418));
				n = vo(r.nextSibling);
				var t = ui;
				n && Jc(e, n) ? Vp(t, r) : (e.flags = e.flags & -4097 | 2, ht = !1, ui = e)
			}
		} else {
			if (Qs(e)) throw Error(Le(418));
			e.flags = e.flags & -4097 | 2, ht = !1, ui = e
		}
	}
}

function ed(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	ui = e
}

function Du(e) {
	if (e !== ui) return !1;
	if (!ht) return ed(e), ht = !0, !1;
	var n;
	if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !zs(e.type, e.memoizedProps)), n && (n = ai)) {
		if (Qs(e)) throw zp(), Error(Le(418));
		for (; n;) Vp(e, n), n = vo(n.nextSibling)
	}
	if (ed(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(Le(317));
		e: {
			for (e = e.nextSibling, n = 0; e;) {
				if (e.nodeType === 8) {
					var r = e.data;
					if (r === "/$") {
						if (n === 0) {
							ai = vo(e.nextSibling);
							break e
						}
						n--
					} else r !== "$" && r !== "$!" && r !== "$?" || n++
				}
				e = e.nextSibling
			}
			ai = null
		}
	} else ai = ui ? vo(e.stateNode.nextSibling) : null;
	return !0
}

function zp() {
	for (var e = ai; e;) e = vo(e.nextSibling)
}

function ya() {
	ai = ui = null, ht = !1
}

function Hf(e) {
	Ti === null ? Ti = [e] : Ti.push(e)
}
var rg = qi.ReactCurrentBatchConfig;

function Ha(e, n, r) {
	if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (r._owner) {
			if (r = r._owner, r) {
				if (r.tag !== 1) throw Error(Le(309));
				var t = r.stateNode
			}
			if (!t) throw Error(Le(147, e));
			var o = t,
				s = "" + e;
			return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === s ? n.ref : (n = function(p) {
				var k = o.refs;
				p === null ? delete k[s] : k[s] = p
			}, n._stringRef = s, n)
		}
		if (typeof e != "string") throw Error(Le(284));
		if (!r._owner) throw Error(Le(290, e))
	}
	return e
}

function Nu(e, n) {
	throw e = Object.prototype.toString.call(n), Error(Le(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
}

function rd(e) {
	var n = e._init;
	return n(e._payload)
}

function Bp(e) {
	function n(Z, G) {
		if (e) {
			var q = Z.deletions;
			q === null ? (Z.deletions = [G], Z.flags |= 16) : q.push(G)
		}
	}

	function r(Z, G) {
		if (!e) return null;
		for (; G !== null;) n(Z, G), G = G.sibling;
		return null
	}

	function t(Z, G) {
		for (Z = new Map; G !== null;) G.key !== null ? Z.set(G.key, G) : Z.set(G.index, G), G = G.sibling;
		return Z
	}

	function o(Z, G) {
		return Z = _o(Z, G), Z.index = 0, Z.sibling = null, Z
	}

	function s(Z, G, q) {
		return Z.index = q, e ? (q = Z.alternate, q !== null ? (q = q.index, q < G ? (Z.flags |= 2, G) : q) : (Z.flags |= 2, G)) : (Z.flags |= 1048576, G)
	}

	function p(Z) {
		return e && Z.alternate === null && (Z.flags |= 2), Z
	}

	function k(Z, G, q, Ee) {
		return G === null || G.tag !== 6 ? (G = gs(q, Z.mode, Ee), G.return = Z, G) : (G = o(G, q), G.return = Z, G)
	}

	function U(Z, G, q, Ee) {
		var Te = q.type;
		return Te === ea ? f(Z, G, q.props.children, Ee, q.key) : G !== null && (G.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === io && rd(Te) === G.type) ? (Ee = o(G, q.props), Ee.ref = Ha(Z, G, q), Ee.return = Z, Ee) : (Ee = ol(q.type, q.key, q.props, null, Z.mode, Ee), Ee.ref = Ha(Z, G, q), Ee.return = Z, Ee)
	}

	function K(Z, G, q, Ee) {
		return G === null || G.tag !== 4 || G.stateNode.containerInfo !== q.containerInfo || G.stateNode.implementation !== q.implementation ? (G = _s(q, Z.mode, Ee), G.return = Z, G) : (G = o(G, q.children || []), G.return = Z, G)
	}

	function f(Z, G, q, Ee, Te) {
		return G === null || G.tag !== 7 ? (G = Do(q, Z.mode, Ee, Te), G.return = Z, G) : (G = o(G, q), G.return = Z, G)
	}

	function te(Z, G, q) {
		if (typeof G == "string" && G !== "" || typeof G == "number") return G = gs("" + G, Z.mode, q), G.return = Z, G;
		if (typeof G == "object" && G !== null) {
			switch (G.$$typeof) {
				case Pu:
					return q = ol(G.type, G.key, G.props, null, Z.mode, q), q.ref = Ha(Z, null, G), q.return = Z, q;
				case Jo:
					return G = _s(G, Z.mode, q), G.return = Z, G;
				case io:
					var Ee = G._init;
					return te(Z, Ee(G._payload), q)
			}
			if (Ya(G) || xa(G)) return G = Do(G, Z.mode, q, null), G.return = Z, G;
			Nu(Z, G)
		}
		return null
	}

	function ae(Z, G, q, Ee) {
		var Te = G !== null ? G.key : null;
		if (typeof q == "string" && q !== "" || typeof q == "number") return Te !== null ? null : k(Z, G, "" + q, Ee);
		if (typeof q == "object" && q !== null) {
			switch (q.$$typeof) {
				case Pu:
					return q.key === Te ? U(Z, G, q, Ee) : null;
				case Jo:
					return q.key === Te ? K(Z, G, q, Ee) : null;
				case io:
					return Te = q._init, ae(Z, G, Te(q._payload), Ee)
			}
			if (Ya(q) || xa(q)) return Te !== null ? null : f(Z, G, q, Ee, null);
			Nu(Z, q)
		}
		return null
	}

	function ce(Z, G, q, Ee, Te) {
		if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") return Z = Z.get(q) || null, k(G, Z, "" + Ee, Te);
		if (typeof Ee == "object" && Ee !== null) {
			switch (Ee.$$typeof) {
				case Pu:
					return Z = Z.get(Ee.key === null ? q : Ee.key) || null, U(G, Z, Ee, Te);
				case Jo:
					return Z = Z.get(Ee.key === null ? q : Ee.key) || null, K(G, Z, Ee, Te);
				case io:
					var Ue = Ee._init;
					return ce(Z, G, q, Ue(Ee._payload), Te)
			}
			if (Ya(Ee) || xa(Ee)) return Z = Z.get(q) || null, f(G, Z, Ee, Te, null);
			Nu(G, Ee)
		}
		return null
	}

	function _e(Z, G, q, Ee) {
		for (var Te = null, Ue = null, je = G, Ae = G = 0, Ve = null; je !== null && Ae < q.length; Ae++) {
			je.index > Ae ? (Ve = je, je = null) : Ve = je.sibling;
			var $e = ae(Z, je, q[Ae], Ee);
			if ($e === null) {
				je === null && (je = Ve);
				break
			}
			e && je && $e.alternate === null && n(Z, je), G = s($e, G, Ae), Ue === null ? Te = $e : Ue.sibling = $e, Ue = $e, je = Ve
		}
		if (Ae === q.length) return r(Z, je), ht && $o(Z, Ae), Te;
		if (je === null) {
			for (; Ae < q.length; Ae++) je = te(Z, q[Ae], Ee), je !== null && (G = s(je, G, Ae), Ue === null ? Te = je : Ue.sibling = je, Ue = je);
			return ht && $o(Z, Ae), Te
		}
		for (je = t(Z, je); Ae < q.length; Ae++) Ve = ce(je, Z, Ae, q[Ae], Ee), Ve !== null && (e && Ve.alternate !== null && je.delete(Ve.key === null ? Ae : Ve.key), G = s(Ve, G, Ae), Ue === null ? Te = Ve : Ue.sibling = Ve, Ue = Ve);
		return e && je.forEach(function(Me) {
			return n(Z, Me)
		}), ht && $o(Z, Ae), Te
	}

	function Ce(Z, G, q, Ee) {
		var Te = xa(q);
		if (typeof Te != "function") throw Error(Le(150));
		if (q = Te.call(q), q == null) throw Error(Le(151));
		for (var Ue = Te = null, je = G, Ae = G = 0, Ve = null, $e = q.next(); je !== null && !$e.done; Ae++, $e = q.next()) {
			je.index > Ae ? (Ve = je, je = null) : Ve = je.sibling;
			var Me = ae(Z, je, $e.value, Ee);
			if (Me === null) {
				je === null && (je = Ve);
				break
			}
			e && je && Me.alternate === null && n(Z, je), G = s(Me, G, Ae), Ue === null ? Te = Me : Ue.sibling = Me, Ue = Me, je = Ve
		}
		if ($e.done) return r(Z, je), ht && $o(Z, Ae), Te;
		if (je === null) {
			for (; !$e.done; Ae++, $e = q.next()) $e = te(Z, $e.value, Ee), $e !== null && (G = s($e, G, Ae), Ue === null ? Te = $e : Ue.sibling = $e, Ue = $e);
			return ht && $o(Z, Ae), Te
		}
		for (je = t(Z, je); !$e.done; Ae++, $e = q.next()) $e = ce(je, Z, Ae, $e.value, Ee), $e !== null && (e && $e.alternate !== null && je.delete($e.key === null ? Ae : $e.key), G = s($e, G, Ae), Ue === null ? Te = $e : Ue.sibling = $e, Ue = $e);
		return e && je.forEach(function(xe) {
			return n(Z, xe)
		}), ht && $o(Z, Ae), Te
	}

	function Qe(Z, G, q, Ee) {
		if (typeof q == "object" && q !== null && q.type === ea && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
			switch (q.$$typeof) {
				case Pu:
					e: {
						for (var Te = q.key, Ue = G; Ue !== null;) {
							if (Ue.key === Te) {
								if (Te = q.type, Te === ea) {
									if (Ue.tag === 7) {
										r(Z, Ue.sibling), G = o(Ue, q.props.children), G.return = Z, Z = G;
										break e
									}
								} else if (Ue.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === io && rd(Te) === Ue.type) {
									r(Z, Ue.sibling), G = o(Ue, q.props), G.ref = Ha(Z, Ue, q), G.return = Z, Z = G;
									break e
								}
								r(Z, Ue);
								break
							} else n(Z, Ue);
							Ue = Ue.sibling
						}
						q.type === ea ? (G = Do(q.props.children, Z.mode, Ee, q.key), G.return = Z, Z = G) : (Ee = ol(q.type, q.key, q.props, null, Z.mode, Ee), Ee.ref = Ha(Z, G, q), Ee.return = Z, Z = Ee)
					}
					return p(Z);
				case Jo:
					e: {
						for (Ue = q.key; G !== null;) {
							if (G.key === Ue)
								if (G.tag === 4 && G.stateNode.containerInfo === q.containerInfo && G.stateNode.implementation === q.implementation) {
									r(Z, G.sibling), G = o(G, q.children || []), G.return = Z, Z = G;
									break e
								} else {
									r(Z, G);
									break
								}
							else n(Z, G);
							G = G.sibling
						}
						G = _s(q, Z.mode, Ee),
						G.return = Z,
						Z = G
					}
					return p(Z);
				case io:
					return Ue = q._init, Qe(Z, G, Ue(q._payload), Ee)
			}
			if (Ya(q)) return _e(Z, G, q, Ee);
			if (xa(q)) return Ce(Z, G, q, Ee);
			Nu(Z, q)
		}
		return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, G !== null && G.tag === 6 ? (r(Z, G.sibling), G = o(G, q), G.return = Z, Z = G) : (r(Z, G), G = gs(q, Z.mode, Ee), G.return = Z, Z = G), p(Z)) : r(Z, G)
	}
	return Qe
}
var wa = Bp(!0),
	Yp = Bp(!1),
	wl = bo(null),
	El = null,
	la = null,
	Vf = null;

function zf() {
	Vf = la = El = null
}

function Bf(e) {
	var n = wl.current;
	ft(wl), e._currentValue = n
}

function qs(e, n, r) {
	for (; e !== null;) {
		var t = e.alternate;
		if ((e.childLanes & n) !== n ? (e.childLanes |= n, t !== null && (t.childLanes |= n)) : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n), e === r) break;
		e = e.return
	}
}

function ha(e, n) {
	El = e, Vf = la = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Zt = !0), e.firstContext = null)
}

function mi(e) {
	var n = e._currentValue;
	if (Vf !== e)
		if (e = {
				context: e,
				memoizedValue: n,
				next: null
			}, la === null) {
			if (El === null) throw Error(Le(308));
			la = e, El.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else la = la.next = e;
	return n
}
var Uo = null;

function Yf(e) {
	Uo === null ? Uo = [e] : Uo.push(e)
}

function Gp(e, n, r, t) {
	var o = n.interleaved;
	return o === null ? (r.next = r, Yf(n)) : (r.next = o.next, o.next = r), n.interleaved = r, Qi(e, t)
}

function Qi(e, n) {
	e.lanes |= n;
	var r = e.alternate;
	for (r !== null && (r.lanes |= n), r = e, e = e.return; e !== null;) e.childLanes |= n, r = e.alternate, r !== null && (r.childLanes |= n), r = e, e = e.return;
	return r.tag === 3 ? r.stateNode : null
}
var oo = !1;

function Gf(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
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

function Qp(e, n) {
	e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function Bi(e, n) {
	return {
		eventTime: e,
		lane: n,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function ho(e, n, r) {
	var t = e.updateQueue;
	if (t === null) return null;
	if (t = t.shared, kn & 2) {
		var o = t.pending;
		return o === null ? n.next = n : (n.next = o.next, o.next = n), t.pending = n, Qi(e, r)
	}
	return o = t.interleaved, o === null ? (n.next = n, Yf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Qi(e, r)
}

function Ju(e, n, r) {
	if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194240) !== 0)) {
		var t = n.lanes;
		t &= e.pendingLanes, r |= t, n.lanes = r, Of(e, r)
	}
}

function nd(e, n) {
	var r = e.updateQueue,
		t = e.alternate;
	if (t !== null && (t = t.updateQueue, r === t)) {
		var o = null,
			s = null;
		if (r = r.firstBaseUpdate, r !== null) {
			do {
				var p = {
					eventTime: r.eventTime,
					lane: r.lane,
					tag: r.tag,
					payload: r.payload,
					callback: r.callback,
					next: null
				};
				s === null ? o = s = p : s = s.next = p, r = r.next
			} while (r !== null);
			s === null ? o = s = n : s = s.next = n
		} else o = s = n;
		r = {
			baseState: t.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: s,
			shared: t.shared,
			effects: t.effects
		}, e.updateQueue = r;
		return
	}
	e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n
}

function bl(e, n, r, t) {
	var o = e.updateQueue;
	oo = !1;
	var s = o.firstBaseUpdate,
		p = o.lastBaseUpdate,
		k = o.shared.pending;
	if (k !== null) {
		o.shared.pending = null;
		var U = k,
			K = U.next;
		U.next = null, p === null ? s = K : p.next = K, p = U;
		var f = e.alternate;
		f !== null && (f = f.updateQueue, k = f.lastBaseUpdate, k !== p && (k === null ? f.firstBaseUpdate = K : k.next = K, f.lastBaseUpdate = U))
	}
	if (s !== null) {
		var te = o.baseState;
		p = 0, f = K = U = null, k = s;
		do {
			var ae = k.lane,
				ce = k.eventTime;
			if ((t & ae) === ae) {
				f !== null && (f = f.next = {
					eventTime: ce,
					lane: 0,
					tag: k.tag,
					payload: k.payload,
					callback: k.callback,
					next: null
				});
				e: {
					var _e = e,
						Ce = k;
					switch (ae = n, ce = r, Ce.tag) {
						case 1:
							if (_e = Ce.payload, typeof _e == "function") {
								te = _e.call(ce, te, ae);
								break e
							}
							te = _e;
							break e;
						case 3:
							_e.flags = _e.flags & -65537 | 128;
						case 0:
							if (_e = Ce.payload, ae = typeof _e == "function" ? _e.call(ce, te, ae) : _e, ae == null) break e;
							te = Et({}, te, ae);
							break e;
						case 2:
							oo = !0
					}
				}
				k.callback !== null && k.lane !== 0 && (e.flags |= 64, ae = o.effects, ae === null ? o.effects = [k] : ae.push(k))
			} else ce = {
				eventTime: ce,
				lane: ae,
				tag: k.tag,
				payload: k.payload,
				callback: k.callback,
				next: null
			}, f === null ? (K = f = ce, U = te) : f = f.next = ce, p |= ae;
			if (k = k.next, k === null) {
				if (k = o.shared.pending, k === null) break;
				ae = k, k = ae.next, ae.next = null, o.lastBaseUpdate = ae, o.shared.pending = null
			}
		} while (!0);
		if (f === null && (U = te), o.baseState = U, o.firstBaseUpdate = K, o.lastBaseUpdate = f, n = o.shared.interleaved, n !== null) {
			o = n;
			do p |= o.lane, o = o.next; while (o !== n)
		} else s === null && (o.shared.lanes = 0);
		Vo |= p, e.lanes = p, e.memoizedState = te
	}
}

function td(e, n, r) {
	if (e = n.effects, n.effects = null, e !== null)
		for (n = 0; n < e.length; n++) {
			var t = e[n],
				o = t.callback;
			if (o !== null) {
				if (t.callback = null, t = r, typeof o != "function") throw Error(Le(191, o));
				o.call(t)
			}
		}
}
var ku = {},
	Ui = bo(ku),
	gu = bo(ku),
	_u = bo(ku);

function jo(e) {
	if (e === ku) throw Error(Le(174));
	return e
}

function Qf(e, n) {
	switch (ot(_u, n), ot(gu, e), ot(Ui, ku), e = n.nodeType, e) {
		case 9:
		case 11:
			n = (n = n.documentElement) ? n.namespaceURI : Fs(null, "");
			break;
		default:
			e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Fs(n, e)
	}
	ft(Ui), ot(Ui, n)
}

function Ea() {
	ft(Ui), ft(gu), ft(_u)
}

function Kp(e) {
	jo(_u.current);
	var n = jo(Ui.current),
		r = Fs(n, e.type);
	n !== r && (ot(gu, e), ot(Ui, r))
}

function Kf(e) {
	gu.current === e && (ft(Ui), ft(gu))
}
var yt = bo(0);

function Tl(e) {
	for (var n = e; n !== null;) {
		if (n.tag === 13) {
			var r = n.memoizedState;
			if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return n
		} else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
			if (n.flags & 128) return n
		} else if (n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === e) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === e) return null;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
	return null
}
var cs = [];

function qf() {
	for (var e = 0; e < cs.length; e++) cs[e]._workInProgressVersionPrimary = null;
	cs.length = 0
}
var el = qi.ReactCurrentDispatcher,
	ds = qi.ReactCurrentBatchConfig,
	Ho = 0,
	wt = null,
	$t = null,
	Ut = null,
	Al = !1,
	eu = !1,
	yu = 0,
	ng = 0;

function Lt() {
	throw Error(Le(321))
}

function Xf(e, n) {
	if (n === null) return !1;
	for (var r = 0; r < n.length && r < e.length; r++)
		if (!Si(e[r], n[r])) return !1;
	return !0
}

function Zf(e, n, r, t, o, s) {
	if (Ho = s, wt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, el.current = e === null || e.memoizedState === null ? ag : ug, e = r(t, o), eu) {
		s = 0;
		do {
			if (eu = !1, yu = 0, 25 <= s) throw Error(Le(301));
			s += 1, Ut = $t = null, n.updateQueue = null, el.current = lg, e = r(t, o)
		} while (eu)
	}
	if (el.current = Cl, n = $t !== null && $t.next !== null, Ho = 0, Ut = $t = wt = null, Al = !1, n) throw Error(Le(300));
	return e
}

function Jf() {
	var e = yu !== 0;
	return yu = 0, e
}

function $i() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return Ut === null ? wt.memoizedState = Ut = e : Ut = Ut.next = e, Ut
}

function gi() {
	if ($t === null) {
		var e = wt.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = $t.next;
	var n = Ut === null ? wt.memoizedState : Ut.next;
	if (n !== null) Ut = n, $t = e;
	else {
		if (e === null) throw Error(Le(310));
		$t = e, e = {
			memoizedState: $t.memoizedState,
			baseState: $t.baseState,
			baseQueue: $t.baseQueue,
			queue: $t.queue,
			next: null
		}, Ut === null ? wt.memoizedState = Ut = e : Ut = Ut.next = e
	}
	return Ut
}

function wu(e, n) {
	return typeof n == "function" ? n(e) : n
}

function ps(e) {
	var n = gi(),
		r = n.queue;
	if (r === null) throw Error(Le(311));
	r.lastRenderedReducer = e;
	var t = $t,
		o = t.baseQueue,
		s = r.pending;
	if (s !== null) {
		if (o !== null) {
			var p = o.next;
			o.next = s.next, s.next = p
		}
		t.baseQueue = o = s, r.pending = null
	}
	if (o !== null) {
		s = o.next, t = t.baseState;
		var k = p = null,
			U = null,
			K = s;
		do {
			var f = K.lane;
			if ((Ho & f) === f) U !== null && (U = U.next = {
				lane: 0,
				action: K.action,
				hasEagerState: K.hasEagerState,
				eagerState: K.eagerState,
				next: null
			}), t = K.hasEagerState ? K.eagerState : e(t, K.action);
			else {
				var te = {
					lane: f,
					action: K.action,
					hasEagerState: K.hasEagerState,
					eagerState: K.eagerState,
					next: null
				};
				U === null ? (k = U = te, p = t) : U = U.next = te, wt.lanes |= f, Vo |= f
			}
			K = K.next
		} while (K !== null && K !== s);
		U === null ? p = t : U.next = k, Si(t, n.memoizedState) || (Zt = !0), n.memoizedState = t, n.baseState = p, n.baseQueue = U, r.lastRenderedState = t
	}
	if (e = r.interleaved, e !== null) {
		o = e;
		do s = o.lane, wt.lanes |= s, Vo |= s, o = o.next; while (o !== e)
	} else o === null && (r.lanes = 0);
	return [n.memoizedState, r.dispatch]
}

function vs(e) {
	var n = gi(),
		r = n.queue;
	if (r === null) throw Error(Le(311));
	r.lastRenderedReducer = e;
	var t = r.dispatch,
		o = r.pending,
		s = n.memoizedState;
	if (o !== null) {
		r.pending = null;
		var p = o = o.next;
		do s = e(s, p.action), p = p.next; while (p !== o);
		Si(s, n.memoizedState) || (Zt = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), r.lastRenderedState = s
	}
	return [s, t]
}

function qp() {}

function Xp(e, n) {
	var r = wt,
		t = gi(),
		o = n(),
		s = !Si(t.memoizedState, o);
	if (s && (t.memoizedState = o, Zt = !0), t = t.queue, ec(ev.bind(null, r, t, e), [e]), t.getSnapshot !== n || s || Ut !== null && Ut.memoizedState.tag & 1) {
		if (r.flags |= 2048, Eu(9, Jp.bind(null, r, t, o, n), void 0, null), jt === null) throw Error(Le(349));
		Ho & 30 || Zp(r, n, o)
	}
	return o
}

function Zp(e, n, r) {
	e.flags |= 16384, e = {
		getSnapshot: n,
		value: r
	}, n = wt.updateQueue, n === null ? (n = {
		lastEffect: null,
		stores: null
	}, wt.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e))
}

function Jp(e, n, r, t) {
	n.value = r, n.getSnapshot = t, rv(n) && nv(e)
}

function ev(e, n, r) {
	return r(function() {
		rv(n) && nv(e)
	})
}

function rv(e) {
	var n = e.getSnapshot;
	e = e.value;
	try {
		var r = n();
		return !Si(e, r)
	} catch {
		return !0
	}
}

function nv(e) {
	var n = Qi(e, 1);
	n !== null && Ci(n, e, 1, -1)
}

function id(e) {
	var n = $i();
	return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: wu,
		lastRenderedState: e
	}, n.queue = e, e = e.dispatch = og.bind(null, wt, e), [n.memoizedState, e]
}

function Eu(e, n, r, t) {
	return e = {
		tag: e,
		create: n,
		destroy: r,
		deps: t,
		next: null
	}, n = wt.updateQueue, n === null ? (n = {
		lastEffect: null,
		stores: null
	}, wt.updateQueue = n, n.lastEffect = e.next = e) : (r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (t = r.next, r.next = e, e.next = t, n.lastEffect = e)), e
}

function tv() {
	return gi().memoizedState
}

function rl(e, n, r, t) {
	var o = $i();
	wt.flags |= e, o.memoizedState = Eu(1 | n, r, void 0, t === void 0 ? null : t)
}

function Il(e, n, r, t) {
	var o = gi();
	t = t === void 0 ? null : t;
	var s = void 0;
	if ($t !== null) {
		var p = $t.memoizedState;
		if (s = p.destroy, t !== null && Xf(t, p.deps)) {
			o.memoizedState = Eu(n, r, s, t);
			return
		}
	}
	wt.flags |= e, o.memoizedState = Eu(1 | n, r, s, t)
}

function od(e, n) {
	return rl(8390656, 8, e, n)
}

function ec(e, n) {
	return Il(2048, 8, e, n)
}

function iv(e, n) {
	return Il(4, 2, e, n)
}

function ov(e, n) {
	return Il(4, 4, e, n)
}

function av(e, n) {
	if (typeof n == "function") return e = e(), n(e),
		function() {
			n(null)
		};
	if (n != null) return e = e(), n.current = e,
		function() {
			n.current = null
		}
}

function uv(e, n, r) {
	return r = r != null ? r.concat([e]) : null, Il(4, 4, av.bind(null, n, e), r)
}

function rc() {}

function lv(e, n) {
	var r = gi();
	n = n === void 0 ? null : n;
	var t = r.memoizedState;
	return t !== null && n !== null && Xf(n, t[1]) ? t[0] : (r.memoizedState = [e, n], e)
}

function sv(e, n) {
	var r = gi();
	n = n === void 0 ? null : n;
	var t = r.memoizedState;
	return t !== null && n !== null && Xf(n, t[1]) ? t[0] : (e = e(), r.memoizedState = [e, n], e)
}

function fv(e, n, r) {
	return Ho & 21 ? (Si(r, n) || (r = hp(), wt.lanes |= r, Vo |= r, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Zt = !0), e.memoizedState = r)
}

function tg(e, n) {
	var r = Nn;
	Nn = r !== 0 && 4 > r ? r : 4, e(!0);
	var t = ds.transition;
	ds.transition = {};
	try {
		e(!1), n()
	} finally {
		Nn = r, ds.transition = t
	}
}

function cv() {
	return gi().memoizedState
}

function ig(e, n, r) {
	var t = go(e);
	if (r = {
			lane: t,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, dv(e)) pv(n, r);
	else if (r = Gp(e, n, r, t), r !== null) {
		var o = Qt();
		Ci(r, e, t, o), vv(r, n, t)
	}
}

function og(e, n, r) {
	var t = go(e),
		o = {
			lane: t,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (dv(e)) pv(n, o);
	else {
		var s = e.alternate;
		if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null)) try {
			var p = n.lastRenderedState,
				k = s(p, r);
			if (o.hasEagerState = !0, o.eagerState = k, Si(k, p)) {
				var U = n.interleaved;
				U === null ? (o.next = o, Yf(n)) : (o.next = U.next, U.next = o), n.interleaved = o;
				return
			}
		} catch {} finally {}
		r = Gp(e, n, o, t), r !== null && (o = Qt(), Ci(r, e, t, o), vv(r, n, t))
	}
}

function dv(e) {
	var n = e.alternate;
	return e === wt || n !== null && n === wt
}

function pv(e, n) {
	eu = Al = !0;
	var r = e.pending;
	r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n
}

function vv(e, n, r) {
	if (r & 4194240) {
		var t = n.lanes;
		t &= e.pendingLanes, r |= t, n.lanes = r, Of(e, r)
	}
}
var Cl = {
		readContext: mi,
		useCallback: Lt,
		useContext: Lt,
		useEffect: Lt,
		useImperativeHandle: Lt,
		useInsertionEffect: Lt,
		useLayoutEffect: Lt,
		useMemo: Lt,
		useReducer: Lt,
		useRef: Lt,
		useState: Lt,
		useDebugValue: Lt,
		useDeferredValue: Lt,
		useTransition: Lt,
		useMutableSource: Lt,
		useSyncExternalStore: Lt,
		useId: Lt,
		unstable_isNewReconciler: !1
	},
	ag = {
		readContext: mi,
		useCallback: function(e, n) {
			return $i().memoizedState = [e, n === void 0 ? null : n], e
		},
		useContext: mi,
		useEffect: od,
		useImperativeHandle: function(e, n, r) {
			return r = r != null ? r.concat([e]) : null, rl(4194308, 4, av.bind(null, n, e), r)
		},
		useLayoutEffect: function(e, n) {
			return rl(4194308, 4, e, n)
		},
		useInsertionEffect: function(e, n) {
			return rl(4, 2, e, n)
		},
		useMemo: function(e, n) {
			var r = $i();
			return n = n === void 0 ? null : n, e = e(), r.memoizedState = [e, n], e
		},
		useReducer: function(e, n, r) {
			var t = $i();
			return n = r !== void 0 ? r(n) : n, t.memoizedState = t.baseState = n, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: n
			}, t.queue = e, e = e.dispatch = ig.bind(null, wt, e), [t.memoizedState, e]
		},
		useRef: function(e) {
			var n = $i();
			return e = {
				current: e
			}, n.memoizedState = e
		},
		useState: id,
		useDebugValue: rc,
		useDeferredValue: function(e) {
			return $i().memoizedState = e
		},
		useTransition: function() {
			var e = id(!1),
				n = e[0];
			return e = tg.bind(null, e[1]), $i().memoizedState = e, [n, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, n, r) {
			var t = wt,
				o = $i();
			if (ht) {
				if (r === void 0) throw Error(Le(407));
				r = r()
			} else {
				if (r = n(), jt === null) throw Error(Le(349));
				Ho & 30 || Zp(t, n, r)
			}
			o.memoizedState = r;
			var s = {
				value: r,
				getSnapshot: n
			};
			return o.queue = s, od(ev.bind(null, t, s, e), [e]), t.flags |= 2048, Eu(9, Jp.bind(null, t, s, r, n), void 0, null), r
		},
		useId: function() {
			var e = $i(),
				n = jt.identifierPrefix;
			if (ht) {
				var r = zi,
					t = Vi;
				r = (t & ~(1 << 32 - Ai(t) - 1)).toString(32) + r, n = ":" + n + "R" + r, r = yu++, 0 < r && (n += "H" + r.toString(32)), n += ":"
			} else r = ng++, n = ":" + n + "r" + r.toString(32) + ":";
			return e.memoizedState = n
		},
		unstable_isNewReconciler: !1
	},
	ug = {
		readContext: mi,
		useCallback: lv,
		useContext: mi,
		useEffect: ec,
		useImperativeHandle: uv,
		useInsertionEffect: iv,
		useLayoutEffect: ov,
		useMemo: sv,
		useReducer: ps,
		useRef: tv,
		useState: function() {
			return ps(wu)
		},
		useDebugValue: rc,
		useDeferredValue: function(e) {
			var n = gi();
			return fv(n, $t.memoizedState, e)
		},
		useTransition: function() {
			var e = ps(wu)[0],
				n = gi().memoizedState;
			return [e, n]
		},
		useMutableSource: qp,
		useSyncExternalStore: Xp,
		useId: cv,
		unstable_isNewReconciler: !1
	},
	lg = {
		readContext: mi,
		useCallback: lv,
		useContext: mi,
		useEffect: ec,
		useImperativeHandle: uv,
		useInsertionEffect: iv,
		useLayoutEffect: ov,
		useMemo: sv,
		useReducer: vs,
		useRef: tv,
		useState: function() {
			return vs(wu)
		},
		useDebugValue: rc,
		useDeferredValue: function(e) {
			var n = gi();
			return $t === null ? n.memoizedState = e : fv(n, $t.memoizedState, e)
		},
		useTransition: function() {
			var e = vs(wu)[0],
				n = gi().memoizedState;
			return [e, n]
		},
		useMutableSource: qp,
		useSyncExternalStore: Xp,
		useId: cv,
		unstable_isNewReconciler: !1
	};

function Ei(e, n) {
	if (e && e.defaultProps) {
		n = Et({}, n), e = e.defaultProps;
		for (var r in e) n[r] === void 0 && (n[r] = e[r]);
		return n
	}
	return n
}

function Xs(e, n, r, t) {
	n = e.memoizedState, r = r(t, n), r = r == null ? n : Et({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Dl = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? Yo(e) === e : !1
	},
	enqueueSetState: function(e, n, r) {
		e = e._reactInternals;
		var t = Qt(),
			o = go(e),
			s = Bi(t, o);
		s.payload = n, r != null && (s.callback = r), n = ho(e, s, o), n !== null && (Ci(n, e, o, t), Ju(n, e, o))
	},
	enqueueReplaceState: function(e, n, r) {
		e = e._reactInternals;
		var t = Qt(),
			o = go(e),
			s = Bi(t, o);
		s.tag = 1, s.payload = n, r != null && (s.callback = r), n = ho(e, s, o), n !== null && (Ci(n, e, o, t), Ju(n, e, o))
	},
	enqueueForceUpdate: function(e, n) {
		e = e._reactInternals;
		var r = Qt(),
			t = go(e),
			o = Bi(r, t);
		o.tag = 2, n != null && (o.callback = n), n = ho(e, o, t), n !== null && (Ci(n, e, t, r), Ju(n, e, t))
	}
};

function ad(e, n, r, t, o, s, p) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(t, s, p) : n.prototype && n.prototype.isPureReactComponent ? !pu(r, t) || !pu(o, s) : !0
}

function hv(e, n, r) {
	var t = !1,
		o = wo,
		s = n.contextType;
	return typeof s == "object" && s !== null ? s = mi(s) : (o = ei(n) ? No : Bt.current, t = n.contextTypes, s = (t = t != null) ? _a(e, o) : wo), n = new n(r, s), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Dl, e.stateNode = n, n._reactInternals = e, t && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), n
}

function ud(e, n, r, t) {
	e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, t), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, t), n.state !== e && Dl.enqueueReplaceState(n, n.state, null)
}

function Zs(e, n, r, t) {
	var o = e.stateNode;
	o.props = r, o.state = e.memoizedState, o.refs = {}, Gf(e);
	var s = n.contextType;
	typeof s == "object" && s !== null ? o.context = mi(s) : (s = ei(n) ? No : Bt.current, o.context = _a(e, s)), o.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Xs(e, n, s, r), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (n = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), n !== o.state && Dl.enqueueReplaceState(o, o.state, null), bl(e, r, o, t), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function ba(e, n) {
	try {
		var r = "",
			t = n;
		do r += Mh(t), t = t.return; while (t);
		var o = r
	} catch (s) {
		o = `
Error generating stack: ` + s.message + `
` + s.stack
	}
	return {
		value: e,
		source: n,
		stack: o,
		digest: null
	}
}

function hs(e, n, r) {
	return {
		value: e,
		source: null,
		stack: r ?? null,
		digest: n ?? null
	}
}

function Js(e, n) {
	try {
		console.error(n.value)
	} catch (r) {
		setTimeout(function() {
			throw r
		})
	}
}
var sg = typeof WeakMap == "function" ? WeakMap : Map;

function mv(e, n, r) {
	r = Bi(-1, r), r.tag = 3, r.payload = {
		element: null
	};
	var t = n.value;
	return r.callback = function() {
		kl || (kl = !0, ff = t), Js(e, n)
	}, r
}

function gv(e, n, r) {
	r = Bi(-1, r), r.tag = 3;
	var t = e.type.getDerivedStateFromError;
	if (typeof t == "function") {
		var o = n.value;
		r.payload = function() {
			return t(o)
		}, r.callback = function() {
			Js(e, n)
		}
	}
	var s = e.stateNode;
	return s !== null && typeof s.componentDidCatch == "function" && (r.callback = function() {
		Js(e, n), typeof t != "function" && (mo === null ? mo = new Set([this]) : mo.add(this));
		var p = n.stack;
		this.componentDidCatch(n.value, {
			componentStack: p !== null ? p : ""
		})
	}), r
}

function ld(e, n, r) {
	var t = e.pingCache;
	if (t === null) {
		t = e.pingCache = new sg;
		var o = new Set;
		t.set(n, o)
	} else o = t.get(n), o === void 0 && (o = new Set, t.set(n, o));
	o.has(r) || (o.add(r), e = Tg.bind(null, e, n, r), n.then(e, e))
}

function sd(e) {
	do {
		var n;
		if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
		e = e.return
	} while (e !== null);
	return null
}

function fd(e, n, r, t, o) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (n = Bi(-1, 1), n.tag = 2, ho(r, n, 1))), r.lanes |= 1), e)
}
var fg = qi.ReactCurrentOwner,
	Zt = !1;

function Gt(e, n, r, t) {
	n.child = e === null ? Yp(n, null, r, t) : wa(n, e.child, r, t)
}

function cd(e, n, r, t, o) {
	r = r.render;
	var s = n.ref;
	return ha(n, o), t = Zf(e, n, r, t, s, o), r = Jf(), e !== null && !Zt ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, Ki(e, n, o)) : (ht && r && Nf(n), n.flags |= 1, Gt(e, n, t, o), n.child)
}

function dd(e, n, r, t, o) {
	if (e === null) {
		var s = r.type;
		return typeof s == "function" && !sc(s) && s.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (n.tag = 15, n.type = s, _v(e, n, s, t, o)) : (e = ol(r.type, null, t, n, n.mode, o), e.ref = n.ref, e.return = n, n.child = e)
	}
	if (s = e.child, !(e.lanes & o)) {
		var p = s.memoizedProps;
		if (r = r.compare, r = r !== null ? r : pu, r(p, t) && e.ref === n.ref) return Ki(e, n, o)
	}
	return n.flags |= 1, e = _o(s, t), e.ref = n.ref, e.return = n, n.child = e
}

function _v(e, n, r, t, o) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (pu(s, t) && e.ref === n.ref)
			if (Zt = !1, n.pendingProps = t = s, (e.lanes & o) !== 0) e.flags & 131072 && (Zt = !0);
			else return n.lanes = e.lanes, Ki(e, n, o)
	}
	return ef(e, n, r, t, o)
}

function yv(e, n, r) {
	var t = n.pendingProps,
		o = t.children,
		s = e !== null ? e.memoizedState : null;
	if (t.mode === "hidden")
		if (!(n.mode & 1)) n.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, ot(fa, oi), oi |= r;
		else {
			if (!(r & 1073741824)) return e = s !== null ? s.baseLanes | r : r, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, n.updateQueue = null, ot(fa, oi), oi |= e, null;
			n.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, t = s !== null ? s.baseLanes : r, ot(fa, oi), oi |= t
		}
	else s !== null ? (t = s.baseLanes | r, n.memoizedState = null) : t = r, ot(fa, oi), oi |= t;
	return Gt(e, n, o, r), n.child
}

function wv(e, n) {
	var r = n.ref;
	(e === null && r !== null || e !== null && e.ref !== r) && (n.flags |= 512, n.flags |= 2097152)
}

function ef(e, n, r, t, o) {
	var s = ei(r) ? No : Bt.current;
	return s = _a(n, s), ha(n, o), r = Zf(e, n, r, t, s, o), t = Jf(), e !== null && !Zt ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, Ki(e, n, o)) : (ht && t && Nf(n), n.flags |= 1, Gt(e, n, r, o), n.child)
}

function pd(e, n, r, t, o) {
	if (ei(r)) {
		var s = !0;
		gl(n)
	} else s = !1;
	if (ha(n, o), n.stateNode === null) nl(e, n), hv(n, r, t), Zs(n, r, t, o), t = !0;
	else if (e === null) {
		var p = n.stateNode,
			k = n.memoizedProps;
		p.props = k;
		var U = p.context,
			K = r.contextType;
		typeof K == "object" && K !== null ? K = mi(K) : (K = ei(r) ? No : Bt.current, K = _a(n, K));
		var f = r.getDerivedStateFromProps,
			te = typeof f == "function" || typeof p.getSnapshotBeforeUpdate == "function";
		te || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== t || U !== K) && ud(n, p, t, K), oo = !1;
		var ae = n.memoizedState;
		p.state = ae, bl(n, t, p, o), U = n.memoizedState, k !== t || ae !== U || Jt.current || oo ? (typeof f == "function" && (Xs(n, r, f, t), U = n.memoizedState), (k = oo || ad(n, r, k, t, ae, U, K)) ? (te || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = t, n.memoizedState = U), p.props = t, p.state = U, p.context = K, t = k) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), t = !1)
	} else {
		p = n.stateNode, Qp(e, n), k = n.memoizedProps, K = n.type === n.elementType ? k : Ei(n.type, k), p.props = K, te = n.pendingProps, ae = p.context, U = r.contextType, typeof U == "object" && U !== null ? U = mi(U) : (U = ei(r) ? No : Bt.current, U = _a(n, U));
		var ce = r.getDerivedStateFromProps;
		(f = typeof ce == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== te || ae !== U) && ud(n, p, t, U), oo = !1, ae = n.memoizedState, p.state = ae, bl(n, t, p, o);
		var _e = n.memoizedState;
		k !== te || ae !== _e || Jt.current || oo ? (typeof ce == "function" && (Xs(n, r, ce, t), _e = n.memoizedState), (K = oo || ad(n, r, K, t, ae, _e, U) || !1) ? (f || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(t, _e, U), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(t, _e, U)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || k === e.memoizedProps && ae === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && ae === e.memoizedState || (n.flags |= 1024), n.memoizedProps = t, n.memoizedState = _e), p.props = t, p.state = _e, p.context = U, t = K) : (typeof p.componentDidUpdate != "function" || k === e.memoizedProps && ae === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && ae === e.memoizedState || (n.flags |= 1024), t = !1)
	}
	return rf(e, n, r, t, s, o)
}

function rf(e, n, r, t, o, s) {
	wv(e, n);
	var p = (n.flags & 128) !== 0;
	if (!t && !p) return o && Zc(n, r, !1), Ki(e, n, s);
	t = n.stateNode, fg.current = n;
	var k = p && typeof r.getDerivedStateFromError != "function" ? null : t.render();
	return n.flags |= 1, e !== null && p ? (n.child = wa(n, e.child, null, s), n.child = wa(n, null, k, s)) : Gt(e, n, k, s), n.memoizedState = t.state, o && Zc(n, r, !0), n.child
}

function Ev(e) {
	var n = e.stateNode;
	n.pendingContext ? Xc(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Xc(e, n.context, !1), Qf(e, n.containerInfo)
}

function vd(e, n, r, t, o) {
	return ya(), Hf(o), n.flags |= 256, Gt(e, n, r, t), n.child
}
var nf = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function tf(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function bv(e, n, r) {
	var t = n.pendingProps,
		o = yt.current,
		s = !1,
		p = (n.flags & 128) !== 0,
		k;
	if ((k = p) || (k = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), k ? (s = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ot(yt, o & 1), e === null) return Ks(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (p = t.children, e = t.fallback, s ? (t = n.mode, s = n.child, p = {
		mode: "hidden",
		children: p
	}, !(t & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = p) : s = Hl(p, t, 0, null), e = Do(e, t, r, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = tf(r), n.memoizedState = nf, e) : nc(n, p));
	if (o = e.memoizedState, o !== null && (k = o.dehydrated, k !== null)) return cg(e, n, p, t, k, o, r);
	if (s) {
		s = t.fallback, p = n.mode, o = e.child, k = o.sibling;
		var U = {
			mode: "hidden",
			children: t.children
		};
		return !(p & 1) && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = U, n.deletions = null) : (t = _o(o, U), t.subtreeFlags = o.subtreeFlags & 14680064), k !== null ? s = _o(k, s) : (s = Do(s, p, r, null), s.flags |= 2), s.return = n, t.return = n, t.sibling = s, n.child = t, t = s, s = n.child, p = e.child.memoizedState, p = p === null ? tf(r) : {
			baseLanes: p.baseLanes | r,
			cachePool: null,
			transitions: p.transitions
		}, s.memoizedState = p, s.childLanes = e.childLanes & ~r, n.memoizedState = nf, t
	}
	return s = e.child, e = s.sibling, t = _o(s, {
		mode: "visible",
		children: t.children
	}), !(n.mode & 1) && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (r = n.deletions, r === null ? (n.deletions = [e], n.flags |= 16) : r.push(e)), n.child = t, n.memoizedState = null, t
}

function nc(e, n) {
	return n = Hl({
		mode: "visible",
		children: n
	}, e.mode, 0, null), n.return = e, e.child = n
}

function Lu(e, n, r, t) {
	return t !== null && Hf(t), wa(n, e.child, null, r), e = nc(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
}

function cg(e, n, r, t, o, s, p) {
	if (r) return n.flags & 256 ? (n.flags &= -257, t = hs(Error(Le(422))), Lu(e, n, p, t)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (s = t.fallback, o = n.mode, t = Hl({
		mode: "visible",
		children: t.children
	}, o, 0, null), s = Do(s, o, p, null), s.flags |= 2, t.return = n, s.return = n, t.sibling = s, n.child = t, n.mode & 1 && wa(n, e.child, null, p), n.child.memoizedState = tf(p), n.memoizedState = nf, s);
	if (!(n.mode & 1)) return Lu(e, n, p, null);
	if (o.data === "$!") {
		if (t = o.nextSibling && o.nextSibling.dataset, t) var k = t.dgst;
		return t = k, s = Error(Le(419)), t = hs(s, t, void 0), Lu(e, n, p, t)
	}
	if (k = (p & e.childLanes) !== 0, Zt || k) {
		if (t = jt, t !== null) {
			switch (p & -p) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
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
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0
			}
			o = o & (t.suspendedLanes | p) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Qi(e, o), Ci(t, e, o, -1))
		}
		return lc(), t = hs(Error(Le(421))), Lu(e, n, p, t)
	}
	return o.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Ag.bind(null, e), o._reactRetry = n, null) : (e = s.treeContext, ai = vo(o.nextSibling), ui = n, ht = !0, Ti = null, e !== null && (ci[di++] = Vi, ci[di++] = zi, ci[di++] = Lo, Vi = e.id, zi = e.overflow, Lo = n), n = nc(n, t.children), n.flags |= 4096, n)
}

function hd(e, n, r) {
	e.lanes |= n;
	var t = e.alternate;
	t !== null && (t.lanes |= n), qs(e.return, n, r)
}

function ms(e, n, r, t, o) {
	var s = e.memoizedState;
	s === null ? e.memoizedState = {
		isBackwards: n,
		rendering: null,
		renderingStartTime: 0,
		last: t,
		tail: r,
		tailMode: o
	} : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = t, s.tail = r, s.tailMode = o)
}

function Tv(e, n, r) {
	var t = n.pendingProps,
		o = t.revealOrder,
		s = t.tail;
	if (Gt(e, n, t.children, r), t = yt.current, t & 2) t = t & 1 | 2, n.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = n.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && hd(e, r, n);
			else if (e.tag === 19) hd(e, r, n);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === n) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === n) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		t &= 1
	}
	if (ot(yt, t), !(n.mode & 1)) n.memoizedState = null;
	else switch (o) {
		case "forwards":
			for (r = n.child, o = null; r !== null;) e = r.alternate, e !== null && Tl(e) === null && (o = r), r = r.sibling;
			r = o, r === null ? (o = n.child, n.child = null) : (o = r.sibling, r.sibling = null), ms(n, !1, o, r, s);
			break;
		case "backwards":
			for (r = null, o = n.child, n.child = null; o !== null;) {
				if (e = o.alternate, e !== null && Tl(e) === null) {
					n.child = o;
					break
				}
				e = o.sibling, o.sibling = r, r = o, o = e
			}
			ms(n, !0, r, null, s);
			break;
		case "together":
			ms(n, !1, null, null, void 0);
			break;
		default:
			n.memoizedState = null
	}
	return n.child
}

function nl(e, n) {
	!(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2)
}

function Ki(e, n, r) {
	if (e !== null && (n.dependencies = e.dependencies), Vo |= n.lanes, !(r & n.childLanes)) return null;
	if (e !== null && n.child !== e.child) throw Error(Le(153));
	if (n.child !== null) {
		for (e = n.child, r = _o(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null;) e = e.sibling, r = r.sibling = _o(e, e.pendingProps), r.return = n;
		r.sibling = null
	}
	return n.child
}

function dg(e, n, r) {
	switch (n.tag) {
		case 3:
			Ev(n), ya();
			break;
		case 5:
			Kp(n);
			break;
		case 1:
			ei(n.type) && gl(n);
			break;
		case 4:
			Qf(n, n.stateNode.containerInfo);
			break;
		case 10:
			var t = n.type._context,
				o = n.memoizedProps.value;
			ot(wl, t._currentValue), t._currentValue = o;
			break;
		case 13:
			if (t = n.memoizedState, t !== null) return t.dehydrated !== null ? (ot(yt, yt.current & 1), n.flags |= 128, null) : r & n.child.childLanes ? bv(e, n, r) : (ot(yt, yt.current & 1), e = Ki(e, n, r), e !== null ? e.sibling : null);
			ot(yt, yt.current & 1);
			break;
		case 19:
			if (t = (r & n.childLanes) !== 0, e.flags & 128) {
				if (t) return Tv(e, n, r);
				n.flags |= 128
			}
			if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ot(yt, yt.current), t) break;
			return null;
		case 22:
		case 23:
			return n.lanes = 0, yv(e, n, r)
	}
	return Ki(e, n, r)
}
var Av, of, Cv, Sv;
Av = function(e, n) {
	for (var r = n.child; r !== null;) {
		if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
		else if (r.tag !== 4 && r.child !== null) {
			r.child.return = r, r = r.child;
			continue
		}
		if (r === n) break;
		for (; r.sibling === null;) {
			if (r.return === null || r.return === n) return;
			r = r.return
		}
		r.sibling.return = r.return, r = r.sibling
	}
};
of = function() {};
Cv = function(e, n, r, t) {
	var o = e.memoizedProps;
	if (o !== t) {
		e = n.stateNode, jo(Ui.current);
		var s = null;
		switch (r) {
			case "input":
				o = Ss(e, o), t = Ss(e, t), s = [];
				break;
			case "select":
				o = Et({}, o, {
					value: void 0
				}), t = Et({}, t, {
					value: void 0
				}), s = [];
				break;
			case "textarea":
				o = Ps(e, o), t = Ps(e, t), s = [];
				break;
			default:
				typeof o.onClick != "function" && typeof t.onClick == "function" && (e.onclick = hl)
		}
		$s(r, t);
		var p;
		r = null;
		for (K in o)
			if (!t.hasOwnProperty(K) && o.hasOwnProperty(K) && o[K] != null)
				if (K === "style") {
					var k = o[K];
					for (p in k) k.hasOwnProperty(p) && (r || (r = {}), r[p] = "")
				} else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (au.hasOwnProperty(K) ? s || (s = []) : (s = s || []).push(K, null));
		for (K in t) {
			var U = t[K];
			if (k = o?.[K], t.hasOwnProperty(K) && U !== k && (U != null || k != null))
				if (K === "style")
					if (k) {
						for (p in k) !k.hasOwnProperty(p) || U && U.hasOwnProperty(p) || (r || (r = {}), r[p] = "");
						for (p in U) U.hasOwnProperty(p) && k[p] !== U[p] && (r || (r = {}), r[p] = U[p])
					} else r || (s || (s = []), s.push(K, r)), r = U;
			else K === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, k = k ? k.__html : void 0, U != null && k !== U && (s = s || []).push(K, U)) : K === "children" ? typeof U != "string" && typeof U != "number" || (s = s || []).push(K, "" + U) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (au.hasOwnProperty(K) ? (U != null && K === "onScroll" && st("scroll", e), s || k === U || (s = [])) : (s = s || []).push(K, U))
		}
		r && (s = s || []).push("style", r);
		var K = s;
		(n.updateQueue = K) && (n.flags |= 4)
	}
};
Sv = function(e, n, r, t) {
	r !== t && (n.flags |= 4)
};

function Va(e, n) {
	if (!ht) switch (e.tailMode) {
		case "hidden":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? e.tail = null : r.sibling = null;
			break;
		case "collapsed":
			r = e.tail;
			for (var t = null; r !== null;) r.alternate !== null && (t = r), r = r.sibling;
			t === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : t.sibling = null
	}
}

function Ht(e) {
	var n = e.alternate !== null && e.alternate.child === e.child,
		r = 0,
		t = 0;
	if (n)
		for (var o = e.child; o !== null;) r |= o.lanes | o.childLanes, t |= o.subtreeFlags & 14680064, t |= o.flags & 14680064, o.return = e, o = o.sibling;
	else
		for (o = e.child; o !== null;) r |= o.lanes | o.childLanes, t |= o.subtreeFlags, t |= o.flags, o.return = e, o = o.sibling;
	return e.subtreeFlags |= t, e.childLanes = r, n
}

function pg(e, n, r) {
	var t = n.pendingProps;
	switch (Lf(n), n.tag) {
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
			return Ht(n), null;
		case 1:
			return ei(n.type) && ml(), Ht(n), null;
		case 3:
			return t = n.stateNode, Ea(), ft(Jt), ft(Bt), qf(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (Du(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Ti !== null && (pf(Ti), Ti = null))), of(e, n), Ht(n), null;
		case 5:
			Kf(n);
			var o = jo(_u.current);
			if (r = n.type, e !== null && n.stateNode != null) Cv(e, n, r, t, o), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
			else {
				if (!t) {
					if (n.stateNode === null) throw Error(Le(166));
					return Ht(n), null
				}
				if (e = jo(Ui.current), Du(n)) {
					t = n.stateNode, r = n.type;
					var s = n.memoizedProps;
					switch (t[Oi] = n, t[mu] = s, e = (n.mode & 1) !== 0, r) {
						case "dialog":
							st("cancel", t), st("close", t);
							break;
						case "iframe":
						case "object":
						case "embed":
							st("load", t);
							break;
						case "video":
						case "audio":
							for (o = 0; o < Qa.length; o++) st(Qa[o], t);
							break;
						case "source":
							st("error", t);
							break;
						case "img":
						case "image":
						case "link":
							st("error", t), st("load", t);
							break;
						case "details":
							st("toggle", t);
							break;
						case "input":
							Ac(t, s), st("invalid", t);
							break;
						case "select":
							t._wrapperState = {
								wasMultiple: !!s.multiple
							}, st("invalid", t);
							break;
						case "textarea":
							Sc(t, s), st("invalid", t)
					}
					$s(r, s), o = null;
					for (var p in s)
						if (s.hasOwnProperty(p)) {
							var k = s[p];
							p === "children" ? typeof k == "string" ? t.textContent !== k && (s.suppressHydrationWarning !== !0 && Iu(t.textContent, k, e), o = ["children", k]) : typeof k == "number" && t.textContent !== "" + k && (s.suppressHydrationWarning !== !0 && Iu(t.textContent, k, e), o = ["children", "" + k]) : au.hasOwnProperty(p) && k != null && p === "onScroll" && st("scroll", t)
						} switch (r) {
						case "input":
							Fu(t), Cc(t, s, !0);
							break;
						case "textarea":
							Fu(t), kc(t);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof s.onClick == "function" && (t.onclick = hl)
					}
					t = o, n.updateQueue = t, t !== null && (n.flags |= 4)
				} else {
					p = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ep(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof t.is == "string" ? e = p.createElement(r, {
						is: t.is
					}) : (e = p.createElement(r), r === "select" && (p = e, t.multiple ? p.multiple = !0 : t.size && (p.size = t.size))) : e = p.createElementNS(e, r), e[Oi] = n, e[mu] = t, Av(e, n, !1, !1), n.stateNode = e;
					e: {
						switch (p = Os(r, t), r) {
							case "dialog":
								st("cancel", e), st("close", e), o = t;
								break;
							case "iframe":
							case "object":
							case "embed":
								st("load", e), o = t;
								break;
							case "video":
							case "audio":
								for (o = 0; o < Qa.length; o++) st(Qa[o], e);
								o = t;
								break;
							case "source":
								st("error", e), o = t;
								break;
							case "img":
							case "image":
							case "link":
								st("error", e), st("load", e), o = t;
								break;
							case "details":
								st("toggle", e), o = t;
								break;
							case "input":
								Ac(e, t), o = Ss(e, t), st("invalid", e);
								break;
							case "option":
								o = t;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!t.multiple
								}, o = Et({}, t, {
									value: void 0
								}), st("invalid", e);
								break;
							case "textarea":
								Sc(e, t), o = Ps(e, t), st("invalid", e);
								break;
							default:
								o = t
						}
						$s(r, o),
						k = o;
						for (s in k)
							if (k.hasOwnProperty(s)) {
								var U = k[s];
								s === "style" ? tp(e, U) : s === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && rp(e, U)) : s === "children" ? typeof U == "string" ? (r !== "textarea" || U !== "") && uu(e, U) : typeof U == "number" && uu(e, "" + U) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (au.hasOwnProperty(s) ? U != null && s === "onScroll" && st("scroll", e) : U != null && Sf(e, s, U, p))
							} switch (r) {
							case "input":
								Fu(e), Cc(e, t, !1);
								break;
							case "textarea":
								Fu(e), kc(e);
								break;
							case "option":
								t.value != null && e.setAttribute("value", "" + yo(t.value));
								break;
							case "select":
								e.multiple = !!t.multiple, s = t.value, s != null ? ca(e, !!t.multiple, s, !1) : t.defaultValue != null && ca(e, !!t.multiple, t.defaultValue, !0);
								break;
							default:
								typeof o.onClick == "function" && (e.onclick = hl)
						}
						switch (r) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								t = !!t.autoFocus;
								break e;
							case "img":
								t = !0;
								break e;
							default:
								t = !1
						}
					}
					t && (n.flags |= 4)
				}
				n.ref !== null && (n.flags |= 512, n.flags |= 2097152)
			}
			return Ht(n), null;
		case 6:
			if (e && n.stateNode != null) Sv(e, n, e.memoizedProps, t);
			else {
				if (typeof t != "string" && n.stateNode === null) throw Error(Le(166));
				if (r = jo(_u.current), jo(Ui.current), Du(n)) {
					if (t = n.stateNode, r = n.memoizedProps, t[Oi] = n, (s = t.nodeValue !== r) && (e = ui, e !== null)) switch (e.tag) {
						case 3:
							Iu(t.nodeValue, r, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && Iu(t.nodeValue, r, (e.mode & 1) !== 0)
					}
					s && (n.flags |= 4)
				} else t = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(t), t[Oi] = n, n.stateNode = t
			}
			return Ht(n), null;
		case 13:
			if (ft(yt), t = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (ht && ai !== null && n.mode & 1 && !(n.flags & 128)) zp(), ya(), n.flags |= 98560, s = !1;
				else if (s = Du(n), t !== null && t.dehydrated !== null) {
					if (e === null) {
						if (!s) throw Error(Le(318));
						if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(Le(317));
						s[Oi] = n
					} else ya(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
					Ht(n), s = !1
				} else Ti !== null && (pf(Ti), Ti = null), s = !0;
				if (!s) return n.flags & 65536 ? n : null
			}
			return n.flags & 128 ? (n.lanes = r, n) : (t = t !== null, t !== (e !== null && e.memoizedState !== null) && t && (n.child.flags |= 8192, n.mode & 1 && (e === null || yt.current & 1 ? Ot === 0 && (Ot = 3) : lc())), n.updateQueue !== null && (n.flags |= 4), Ht(n), null);
		case 4:
			return Ea(), of(e, n), e === null && vu(n.stateNode.containerInfo), Ht(n), null;
		case 10:
			return Bf(n.type._context), Ht(n), null;
		case 17:
			return ei(n.type) && ml(), Ht(n), null;
		case 19:
			if (ft(yt), s = n.memoizedState, s === null) return Ht(n), null;
			if (t = (n.flags & 128) !== 0, p = s.rendering, p === null)
				if (t) Va(s, !1);
				else {
					if (Ot !== 0 || e !== null && e.flags & 128)
						for (e = n.child; e !== null;) {
							if (p = Tl(e), p !== null) {
								for (n.flags |= 128, Va(s, !1), t = p.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), n.subtreeFlags = 0, t = r, r = n.child; r !== null;) s = r, e = t, s.flags &= 14680066, p = s.alternate, p === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = p.childLanes, s.lanes = p.lanes, s.child = p.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = p.memoizedProps, s.memoizedState = p.memoizedState, s.updateQueue = p.updateQueue, s.type = p.type, e = p.dependencies, s.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), r = r.sibling;
								return ot(yt, yt.current & 1 | 2), n.child
							}
							e = e.sibling
						}
					s.tail !== null && Rt() > Ta && (n.flags |= 128, t = !0, Va(s, !1), n.lanes = 4194304)
				}
			else {
				if (!t)
					if (e = Tl(p), e !== null) {
						if (n.flags |= 128, t = !0, r = e.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), Va(s, !0), s.tail === null && s.tailMode === "hidden" && !p.alternate && !ht) return Ht(n), null
					} else 2 * Rt() - s.renderingStartTime > Ta && r !== 1073741824 && (n.flags |= 128, t = !0, Va(s, !1), n.lanes = 4194304);
				s.isBackwards ? (p.sibling = n.child, n.child = p) : (r = s.last, r !== null ? r.sibling = p : n.child = p, s.last = p)
			}
			return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = Rt(), n.sibling = null, r = yt.current, ot(yt, t ? r & 1 | 2 : r & 1), n) : (Ht(n), null);
		case 22:
		case 23:
			return uc(), t = n.memoizedState !== null, e !== null && e.memoizedState !== null !== t && (n.flags |= 8192), t && n.mode & 1 ? oi & 1073741824 && (Ht(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ht(n), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(Le(156, n.tag))
}

function vg(e, n) {
	switch (Lf(n), n.tag) {
		case 1:
			return ei(n.type) && ml(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
		case 3:
			return Ea(), ft(Jt), ft(Bt), qf(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
		case 5:
			return Kf(n), null;
		case 13:
			if (ft(yt), e = n.memoizedState, e !== null && e.dehydrated !== null) {
				if (n.alternate === null) throw Error(Le(340));
				ya()
			}
			return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
		case 19:
			return ft(yt), null;
		case 4:
			return Ea(), null;
		case 10:
			return Bf(n.type._context), null;
		case 22:
		case 23:
			return uc(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Hu = !1,
	Vt = !1,
	hg = typeof WeakSet == "function" ? WeakSet : Set,
	er = null;

function sa(e, n) {
	var r = e.ref;
	if (r !== null)
		if (typeof r == "function") try {
			r(null)
		} catch (t) {
			At(e, n, t)
		} else r.current = null
}

function af(e, n, r) {
	try {
		r()
	} catch (t) {
		At(e, n, t)
	}
}
var md = !1;

function mg(e, n) {
	if (Hs = dl, e = $p(), Df(e)) {
		if ("selectionStart" in e) var r = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			r = (r = e.ownerDocument) && r.defaultView || window;
			var t = r.getSelection && r.getSelection();
			if (t && t.rangeCount !== 0) {
				r = t.anchorNode;
				var o = t.anchorOffset,
					s = t.focusNode;
				t = t.focusOffset;
				try {
					r.nodeType, s.nodeType
				} catch {
					r = null;
					break e
				}
				var p = 0,
					k = -1,
					U = -1,
					K = 0,
					f = 0,
					te = e,
					ae = null;
				r: for (;;) {
					for (var ce; te !== r || o !== 0 && te.nodeType !== 3 || (k = p + o), te !== s || t !== 0 && te.nodeType !== 3 || (U = p + t), te.nodeType === 3 && (p += te.nodeValue.length), (ce = te.firstChild) !== null;) ae = te, te = ce;
					for (;;) {
						if (te === e) break r;
						if (ae === r && ++K === o && (k = p), ae === s && ++f === t && (U = p), (ce = te.nextSibling) !== null) break;
						te = ae, ae = te.parentNode
					}
					te = ce
				}
				r = k === -1 || U === -1 ? null : {
					start: k,
					end: U
				}
			} else r = null
		}
		r = r || {
			start: 0,
			end: 0
		}
	} else r = null;
	for (Vs = {
			focusedElem: e,
			selectionRange: r
		}, dl = !1, er = n; er !== null;)
		if (n = er, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, er = e;
		else
			for (; er !== null;) {
				n = er;
				try {
					var _e = n.alternate;
					if (n.flags & 1024) switch (n.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (_e !== null) {
								var Ce = _e.memoizedProps,
									Qe = _e.memoizedState,
									Z = n.stateNode,
									G = Z.getSnapshotBeforeUpdate(n.elementType === n.type ? Ce : Ei(n.type, Ce), Qe);
								Z.__reactInternalSnapshotBeforeUpdate = G
							}
							break;
						case 3:
							var q = n.stateNode.containerInfo;
							q.nodeType === 1 ? q.textContent = "" : q.nodeType === 9 && q.documentElement && q.removeChild(q.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(Le(163))
					}
				} catch (Ee) {
					At(n, n.return, Ee)
				}
				if (e = n.sibling, e !== null) {
					e.return = n.return, er = e;
					break
				}
				er = n.return
			}
	return _e = md, md = !1, _e
}

function ru(e, n, r) {
	var t = n.updateQueue;
	if (t = t !== null ? t.lastEffect : null, t !== null) {
		var o = t = t.next;
		do {
			if ((o.tag & e) === e) {
				var s = o.destroy;
				o.destroy = void 0, s !== void 0 && af(n, r, s)
			}
			o = o.next
		} while (o !== t)
	}
}

function Nl(e, n) {
	if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
		var r = n = n.next;
		do {
			if ((r.tag & e) === e) {
				var t = r.create;
				r.destroy = t()
			}
			r = r.next
		} while (r !== n)
	}
}

function uf(e) {
	var n = e.ref;
	if (n !== null) {
		var r = e.stateNode;
		switch (e.tag) {
			case 5:
				e = r;
				break;
			default:
				e = r
		}
		typeof n == "function" ? n(e) : n.current = e
	}
}

function kv(e) {
	var n = e.alternate;
	n !== null && (e.alternate = null, kv(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Oi], delete n[mu], delete n[Ys], delete n[Zm], delete n[Jm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Rv(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function gd(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || Rv(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function lf(e, n, r) {
	var t = e.tag;
	if (t === 5 || t === 6) e = e.stateNode, n ? r.nodeType === 8 ? r.parentNode.insertBefore(e, n) : r.insertBefore(e, n) : (r.nodeType === 8 ? (n = r.parentNode, n.insertBefore(e, r)) : (n = r, n.appendChild(e)), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = hl));
	else if (t !== 4 && (e = e.child, e !== null))
		for (lf(e, n, r), e = e.sibling; e !== null;) lf(e, n, r), e = e.sibling
}

function sf(e, n, r) {
	var t = e.tag;
	if (t === 5 || t === 6) e = e.stateNode, n ? r.insertBefore(e, n) : r.appendChild(e);
	else if (t !== 4 && (e = e.child, e !== null))
		for (sf(e, n, r), e = e.sibling; e !== null;) sf(e, n, r), e = e.sibling
}
var xt = null,
	bi = !1;

function to(e, n, r) {
	for (r = r.child; r !== null;) Pv(e, n, r), r = r.sibling
}

function Pv(e, n, r) {
	if (Wi && typeof Wi.onCommitFiberUnmount == "function") try {
		Wi.onCommitFiberUnmount(Ol, r)
	} catch {}
	switch (r.tag) {
		case 5:
			Vt || sa(r, n);
		case 6:
			var t = xt,
				o = bi;
			xt = null, to(e, n, r), xt = t, bi = o, xt !== null && (bi ? (e = xt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : xt.removeChild(r.stateNode));
			break;
		case 18:
			xt !== null && (bi ? (e = xt, r = r.stateNode, e.nodeType === 8 ? ss(e.parentNode, r) : e.nodeType === 1 && ss(e, r), cu(e)) : ss(xt, r.stateNode));
			break;
		case 4:
			t = xt, o = bi, xt = r.stateNode.containerInfo, bi = !0, to(e, n, r), xt = t, bi = o;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!Vt && (t = r.updateQueue, t !== null && (t = t.lastEffect, t !== null))) {
				o = t = t.next;
				do {
					var s = o,
						p = s.destroy;
					s = s.tag, p !== void 0 && (s & 2 || s & 4) && af(r, n, p), o = o.next
				} while (o !== t)
			}
			to(e, n, r);
			break;
		case 1:
			if (!Vt && (sa(r, n), t = r.stateNode, typeof t.componentWillUnmount == "function")) try {
				t.props = r.memoizedProps, t.state = r.memoizedState, t.componentWillUnmount()
			} catch (k) {
				At(r, n, k)
			}
			to(e, n, r);
			break;
		case 21:
			to(e, n, r);
			break;
		case 22:
			r.mode & 1 ? (Vt = (t = Vt) || r.memoizedState !== null, to(e, n, r), Vt = t) : to(e, n, r);
			break;
		default:
			to(e, n, r)
	}
}

function _d(e) {
	var n = e.updateQueue;
	if (n !== null) {
		e.updateQueue = null;
		var r = e.stateNode;
		r === null && (r = e.stateNode = new hg), n.forEach(function(t) {
			var o = Cg.bind(null, e, t);
			r.has(t) || (r.add(t), t.then(o, o))
		})
	}
}

function wi(e, n) {
	var r = n.deletions;
	if (r !== null)
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			try {
				var s = e,
					p = n,
					k = p;
				e: for (; k !== null;) {
					switch (k.tag) {
						case 5:
							xt = k.stateNode, bi = !1;
							break e;
						case 3:
							xt = k.stateNode.containerInfo, bi = !0;
							break e;
						case 4:
							xt = k.stateNode.containerInfo, bi = !0;
							break e
					}
					k = k.return
				}
				if (xt === null) throw Error(Le(160));
				Pv(s, p, o), xt = null, bi = !1;
				var U = o.alternate;
				U !== null && (U.return = null), o.return = null
			} catch (K) {
				At(o, n, K)
			}
		}
	if (n.subtreeFlags & 12854)
		for (n = n.child; n !== null;) Fv(n, e), n = n.sibling
}

function Fv(e, n) {
	var r = e.alternate,
		t = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (wi(n, e), Fi(e), t & 4) {
				try {
					ru(3, e, e.return), Nl(3, e)
				} catch (Ce) {
					At(e, e.return, Ce)
				}
				try {
					ru(5, e, e.return)
				} catch (Ce) {
					At(e, e.return, Ce)
				}
			}
			break;
		case 1:
			wi(n, e), Fi(e), t & 512 && r !== null && sa(r, r.return);
			break;
		case 5:
			if (wi(n, e), Fi(e), t & 512 && r !== null && sa(r, r.return), e.flags & 32) {
				var o = e.stateNode;
				try {
					uu(o, "")
				} catch (Ce) {
					At(e, e.return, Ce)
				}
			}
			if (t & 4 && (o = e.stateNode, o != null)) {
				var s = e.memoizedProps,
					p = r !== null ? r.memoizedProps : s,
					k = e.type,
					U = e.updateQueue;
				if (e.updateQueue = null, U !== null) try {
					k === "input" && s.type === "radio" && s.name != null && Zd(o, s), Os(k, p);
					var K = Os(k, s);
					for (p = 0; p < U.length; p += 2) {
						var f = U[p],
							te = U[p + 1];
						f === "style" ? tp(o, te) : f === "dangerouslySetInnerHTML" ? rp(o, te) : f === "children" ? uu(o, te) : Sf(o, f, te, K)
					}
					switch (k) {
						case "input":
							ks(o, s);
							break;
						case "textarea":
							Jd(o, s);
							break;
						case "select":
							var ae = o._wrapperState.wasMultiple;
							o._wrapperState.wasMultiple = !!s.multiple;
							var ce = s.value;
							ce != null ? ca(o, !!s.multiple, ce, !1) : ae !== !!s.multiple && (s.defaultValue != null ? ca(o, !!s.multiple, s.defaultValue, !0) : ca(o, !!s.multiple, s.multiple ? [] : "", !1))
					}
					o[mu] = s
				} catch (Ce) {
					At(e, e.return, Ce)
				}
			}
			break;
		case 6:
			if (wi(n, e), Fi(e), t & 4) {
				if (e.stateNode === null) throw Error(Le(162));
				o = e.stateNode, s = e.memoizedProps;
				try {
					o.nodeValue = s
				} catch (Ce) {
					At(e, e.return, Ce)
				}
			}
			break;
		case 3:
			if (wi(n, e), Fi(e), t & 4 && r !== null && r.memoizedState.isDehydrated) try {
				cu(n.containerInfo)
			} catch (Ce) {
				At(e, e.return, Ce)
			}
			break;
		case 4:
			wi(n, e), Fi(e);
			break;
		case 13:
			wi(n, e), Fi(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (oc = Rt())), t & 4 && _d(e);
			break;
		case 22:
			if (f = r !== null && r.memoizedState !== null, e.mode & 1 ? (Vt = (K = Vt) || f, wi(n, e), Vt = K) : wi(n, e), Fi(e), t & 8192) {
				if (K = e.memoizedState !== null, (e.stateNode.isHidden = K) && !f && e.mode & 1)
					for (er = e, f = e.child; f !== null;) {
						for (te = er = f; er !== null;) {
							switch (ae = er, ce = ae.child, ae.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									ru(4, ae, ae.return);
									break;
								case 1:
									sa(ae, ae.return);
									var _e = ae.stateNode;
									if (typeof _e.componentWillUnmount == "function") {
										t = ae, r = ae.return;
										try {
											n = t, _e.props = n.memoizedProps, _e.state = n.memoizedState, _e.componentWillUnmount()
										} catch (Ce) {
											At(t, r, Ce)
										}
									}
									break;
								case 5:
									sa(ae, ae.return);
									break;
								case 22:
									if (ae.memoizedState !== null) {
										wd(te);
										continue
									}
							}
							ce !== null ? (ce.return = ae, er = ce) : wd(te)
						}
						f = f.sibling
					}
				e: for (f = null, te = e;;) {
					if (te.tag === 5) {
						if (f === null) {
							f = te;
							try {
								o = te.stateNode, K ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (k = te.stateNode, U = te.memoizedProps.style, p = U != null && U.hasOwnProperty("display") ? U.display : null, k.style.display = np("display", p))
							} catch (Ce) {
								At(e, e.return, Ce)
							}
						}
					} else if (te.tag === 6) {
						if (f === null) try {
							te.stateNode.nodeValue = K ? "" : te.memoizedProps
						} catch (Ce) {
							At(e, e.return, Ce)
						}
					} else if ((te.tag !== 22 && te.tag !== 23 || te.memoizedState === null || te === e) && te.child !== null) {
						te.child.return = te, te = te.child;
						continue
					}
					if (te === e) break e;
					for (; te.sibling === null;) {
						if (te.return === null || te.return === e) break e;
						f === te && (f = null), te = te.return
					}
					f === te && (f = null), te.sibling.return = te.return, te = te.sibling
				}
			}
			break;
		case 19:
			wi(n, e), Fi(e), t & 4 && _d(e);
			break;
		case 21:
			break;
		default:
			wi(n, e), Fi(e)
	}
}

function Fi(e) {
	var n = e.flags;
	if (n & 2) {
		try {
			e: {
				for (var r = e.return; r !== null;) {
					if (Rv(r)) {
						var t = r;
						break e
					}
					r = r.return
				}
				throw Error(Le(160))
			}
			switch (t.tag) {
				case 5:
					var o = t.stateNode;
					t.flags & 32 && (uu(o, ""), t.flags &= -33);
					var s = gd(e);
					sf(e, s, o);
					break;
				case 3:
				case 4:
					var p = t.stateNode.containerInfo,
						k = gd(e);
					lf(e, k, p);
					break;
				default:
					throw Error(Le(161))
			}
		}
		catch (U) {
			At(e, e.return, U)
		}
		e.flags &= -3
	}
	n & 4096 && (e.flags &= -4097)
}

function gg(e, n, r) {
	er = e, $v(e)
}

function $v(e, n, r) {
	for (var t = (e.mode & 1) !== 0; er !== null;) {
		var o = er,
			s = o.child;
		if (o.tag === 22 && t) {
			var p = o.memoizedState !== null || Hu;
			if (!p) {
				var k = o.alternate,
					U = k !== null && k.memoizedState !== null || Vt;
				k = Hu;
				var K = Vt;
				if (Hu = p, (Vt = U) && !K)
					for (er = o; er !== null;) p = er, U = p.child, p.tag === 22 && p.memoizedState !== null ? Ed(o) : U !== null ? (U.return = p, er = U) : Ed(o);
				for (; s !== null;) er = s, $v(s), s = s.sibling;
				er = o, Hu = k, Vt = K
			}
			yd(e)
		} else o.subtreeFlags & 8772 && s !== null ? (s.return = o, er = s) : yd(e)
	}
}

function yd(e) {
	for (; er !== null;) {
		var n = er;
		if (n.flags & 8772) {
			var r = n.alternate;
			try {
				if (n.flags & 8772) switch (n.tag) {
					case 0:
					case 11:
					case 15:
						Vt || Nl(5, n);
						break;
					case 1:
						var t = n.stateNode;
						if (n.flags & 4 && !Vt)
							if (r === null) t.componentDidMount();
							else {
								var o = n.elementType === n.type ? r.memoizedProps : Ei(n.type, r.memoizedProps);
								t.componentDidUpdate(o, r.memoizedState, t.__reactInternalSnapshotBeforeUpdate)
							} var s = n.updateQueue;
						s !== null && td(n, s, t);
						break;
					case 3:
						var p = n.updateQueue;
						if (p !== null) {
							if (r = null, n.child !== null) switch (n.child.tag) {
								case 5:
									r = n.child.stateNode;
									break;
								case 1:
									r = n.child.stateNode
							}
							td(n, p, r)
						}
						break;
					case 5:
						var k = n.stateNode;
						if (r === null && n.flags & 4) {
							r = k;
							var U = n.memoizedProps;
							switch (n.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									U.autoFocus && r.focus();
									break;
								case "img":
									U.src && (r.src = U.src)
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
						if (n.memoizedState === null) {
							var K = n.alternate;
							if (K !== null) {
								var f = K.memoizedState;
								if (f !== null) {
									var te = f.dehydrated;
									te !== null && cu(te)
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
						throw Error(Le(163))
				}
				Vt || n.flags & 512 && uf(n)
			} catch (ae) {
				At(n, n.return, ae)
			}
		}
		if (n === e) {
			er = null;
			break
		}
		if (r = n.sibling, r !== null) {
			r.return = n.return, er = r;
			break
		}
		er = n.return
	}
}

function wd(e) {
	for (; er !== null;) {
		var n = er;
		if (n === e) {
			er = null;
			break
		}
		var r = n.sibling;
		if (r !== null) {
			r.return = n.return, er = r;
			break
		}
		er = n.return
	}
}

function Ed(e) {
	for (; er !== null;) {
		var n = er;
		try {
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					var r = n.return;
					try {
						Nl(4, n)
					} catch (U) {
						At(n, r, U)
					}
					break;
				case 1:
					var t = n.stateNode;
					if (typeof t.componentDidMount == "function") {
						var o = n.return;
						try {
							t.componentDidMount()
						} catch (U) {
							At(n, o, U)
						}
					}
					var s = n.return;
					try {
						uf(n)
					} catch (U) {
						At(n, s, U)
					}
					break;
				case 5:
					var p = n.return;
					try {
						uf(n)
					} catch (U) {
						At(n, p, U)
					}
			}
		} catch (U) {
			At(n, n.return, U)
		}
		if (n === e) {
			er = null;
			break
		}
		var k = n.sibling;
		if (k !== null) {
			k.return = n.return, er = k;
			break
		}
		er = n.return
	}
}
var _g = Math.ceil,
	Sl = qi.ReactCurrentDispatcher,
	tc = qi.ReactCurrentOwner,
	hi = qi.ReactCurrentBatchConfig,
	kn = 0,
	jt = null,
	Ft = null,
	It = 0,
	oi = 0,
	fa = bo(0),
	Ot = 0,
	bu = null,
	Vo = 0,
	Ll = 0,
	ic = 0,
	nu = null,
	Xt = null,
	oc = 0,
	Ta = 1 / 0,
	Di = null,
	kl = !1,
	ff = null,
	mo = null,
	Vu = !1,
	so = null,
	Rl = 0,
	tu = 0,
	cf = null,
	tl = -1,
	il = 0;

function Qt() {
	return kn & 6 ? Rt() : tl !== -1 ? tl : tl = Rt()
}

function go(e) {
	return e.mode & 1 ? kn & 2 && It !== 0 ? It & -It : rg.transition !== null ? (il === 0 && (il = hp()), il) : (e = Nn, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bp(e.type)), e) : 1
}

function Ci(e, n, r, t) {
	if (50 < tu) throw tu = 0, cf = null, Error(Le(185));
	Au(e, r, t), (!(kn & 2) || e !== jt) && (e === jt && (!(kn & 2) && (Ll |= r), Ot === 4 && uo(e, It)), ri(e, t), r === 1 && kn === 0 && !(n.mode & 1) && (Ta = Rt() + 500, xl && To()))
}

function ri(e, n) {
	var r = e.callbackNode;
	rm(e, n);
	var t = cl(e, e === jt ? It : 0);
	if (t === 0) r !== null && Fc(r), e.callbackNode = null, e.callbackPriority = 0;
	else if (n = t & -t, e.callbackPriority !== n) {
		if (r != null && Fc(r), n === 1) e.tag === 0 ? eg(bd.bind(null, e)) : Lp(bd.bind(null, e)), qm(function() {
			!(kn & 6) && To()
		}), r = null;
		else {
			switch (mp(t)) {
				case 1:
					r = $f;
					break;
				case 4:
					r = pp;
					break;
				case 16:
					r = fl;
					break;
				case 536870912:
					r = vp;
					break;
				default:
					r = fl
			}
			r = Dv(r, Ov.bind(null, e))
		}
		e.callbackPriority = n, e.callbackNode = r
	}
}

function Ov(e, n) {
	if (tl = -1, il = 0, kn & 6) throw Error(Le(327));
	var r = e.callbackNode;
	if (ma() && e.callbackNode !== r) return null;
	var t = cl(e, e === jt ? It : 0);
	if (t === 0) return null;
	if (t & 30 || t & e.expiredLanes || n) n = Pl(e, t);
	else {
		n = t;
		var o = kn;
		kn |= 2;
		var s = Uv();
		(jt !== e || It !== n) && (Di = null, Ta = Rt() + 500, Io(e, n));
		do try {
			Eg();
			break
		} catch (k) {
			Wv(e, k)
		}
		while (!0);
		zf(), Sl.current = s, kn = o, Ft !== null ? n = 0 : (jt = null, It = 0, n = Ot)
	}
	if (n !== 0) {
		if (n === 2 && (o = xs(e), o !== 0 && (t = o, n = df(e, o))), n === 1) throw r = bu, Io(e, 0), uo(e, t), ri(e, Rt()), r;
		if (n === 6) uo(e, t);
		else {
			if (o = e.current.alternate, !(t & 30) && !yg(o) && (n = Pl(e, t), n === 2 && (s = xs(e), s !== 0 && (t = s, n = df(e, s))), n === 1)) throw r = bu, Io(e, 0), uo(e, t), ri(e, Rt()), r;
			switch (e.finishedWork = o, e.finishedLanes = t, n) {
				case 0:
				case 1:
					throw Error(Le(345));
				case 2:
					Oo(e, Xt, Di);
					break;
				case 3:
					if (uo(e, t), (t & 130023424) === t && (n = oc + 500 - Rt(), 10 < n)) {
						if (cl(e, 0) !== 0) break;
						if (o = e.suspendedLanes, (o & t) !== t) {
							Qt(), e.pingedLanes |= e.suspendedLanes & o;
							break
						}
						e.timeoutHandle = Bs(Oo.bind(null, e, Xt, Di), n);
						break
					}
					Oo(e, Xt, Di);
					break;
				case 4:
					if (uo(e, t), (t & 4194240) === t) break;
					for (n = e.eventTimes, o = -1; 0 < t;) {
						var p = 31 - Ai(t);
						s = 1 << p, p = n[p], p > o && (o = p), t &= ~s
					}
					if (t = o, t = Rt() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * _g(t / 1960)) - t, 10 < t) {
						e.timeoutHandle = Bs(Oo.bind(null, e, Xt, Di), t);
						break
					}
					Oo(e, Xt, Di);
					break;
				case 5:
					Oo(e, Xt, Di);
					break;
				default:
					throw Error(Le(329))
			}
		}
	}
	return ri(e, Rt()), e.callbackNode === r ? Ov.bind(null, e) : null
}

function df(e, n) {
	var r = nu;
	return e.current.memoizedState.isDehydrated && (Io(e, n).flags |= 256), e = Pl(e, n), e !== 2 && (n = Xt, Xt = r, n !== null && pf(n)), e
}

function pf(e) {
	Xt === null ? Xt = e : Xt.push.apply(Xt, e)
}

function yg(e) {
	for (var n = e;;) {
		if (n.flags & 16384) {
			var r = n.updateQueue;
			if (r !== null && (r = r.stores, r !== null))
				for (var t = 0; t < r.length; t++) {
					var o = r[t],
						s = o.getSnapshot;
					o = o.value;
					try {
						if (!Si(s(), o)) return !1
					} catch {
						return !1
					}
				}
		}
		if (r = n.child, n.subtreeFlags & 16384 && r !== null) r.return = n, n = r;
		else {
			if (n === e) break;
			for (; n.sibling === null;) {
				if (n.return === null || n.return === e) return !0;
				n = n.return
			}
			n.sibling.return = n.return, n = n.sibling
		}
	}
	return !0
}

function uo(e, n) {
	for (n &= ~ic, n &= ~Ll, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
		var r = 31 - Ai(n),
			t = 1 << r;
		e[r] = -1, n &= ~t
	}
}

function bd(e) {
	if (kn & 6) throw Error(Le(327));
	ma();
	var n = cl(e, 0);
	if (!(n & 1)) return ri(e, Rt()), null;
	var r = Pl(e, n);
	if (e.tag !== 0 && r === 2) {
		var t = xs(e);
		t !== 0 && (n = t, r = df(e, t))
	}
	if (r === 1) throw r = bu, Io(e, 0), uo(e, n), ri(e, Rt()), r;
	if (r === 6) throw Error(Le(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = n, Oo(e, Xt, Di), ri(e, Rt()), null
}

function ac(e, n) {
	var r = kn;
	kn |= 1;
	try {
		return e(n)
	} finally {
		kn = r, kn === 0 && (Ta = Rt() + 500, xl && To())
	}
}

function zo(e) {
	so !== null && so.tag === 0 && !(kn & 6) && ma();
	var n = kn;
	kn |= 1;
	var r = hi.transition,
		t = Nn;
	try {
		if (hi.transition = null, Nn = 1, e) return e()
	} finally {
		Nn = t, hi.transition = r, kn = n, !(kn & 6) && To()
	}
}

function uc() {
	oi = fa.current, ft(fa)
}

function Io(e, n) {
	e.finishedWork = null, e.finishedLanes = 0;
	var r = e.timeoutHandle;
	if (r !== -1 && (e.timeoutHandle = -1, Km(r)), Ft !== null)
		for (r = Ft.return; r !== null;) {
			var t = r;
			switch (Lf(t), t.tag) {
				case 1:
					t = t.type.childContextTypes, t != null && ml();
					break;
				case 3:
					Ea(), ft(Jt), ft(Bt), qf();
					break;
				case 5:
					Kf(t);
					break;
				case 4:
					Ea();
					break;
				case 13:
					ft(yt);
					break;
				case 19:
					ft(yt);
					break;
				case 10:
					Bf(t.type._context);
					break;
				case 22:
				case 23:
					uc()
			}
			r = r.return
		}
	if (jt = e, Ft = e = _o(e.current, null), It = oi = n, Ot = 0, bu = null, ic = Ll = Vo = 0, Xt = nu = null, Uo !== null) {
		for (n = 0; n < Uo.length; n++)
			if (r = Uo[n], t = r.interleaved, t !== null) {
				r.interleaved = null;
				var o = t.next,
					s = r.pending;
				if (s !== null) {
					var p = s.next;
					s.next = o, t.next = p
				}
				r.pending = t
			} Uo = null
	}
	return e
}

function Wv(e, n) {
	do {
		var r = Ft;
		try {
			if (zf(), el.current = Cl, Al) {
				for (var t = wt.memoizedState; t !== null;) {
					var o = t.queue;
					o !== null && (o.pending = null), t = t.next
				}
				Al = !1
			}
			if (Ho = 0, Ut = $t = wt = null, eu = !1, yu = 0, tc.current = null, r === null || r.return === null) {
				Ot = 1, bu = n, Ft = null;
				break
			}
			e: {
				var s = e,
					p = r.return,
					k = r,
					U = n;
				if (n = It, k.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
					var K = U,
						f = k,
						te = f.tag;
					if (!(f.mode & 1) && (te === 0 || te === 11 || te === 15)) {
						var ae = f.alternate;
						ae ? (f.updateQueue = ae.updateQueue, f.memoizedState = ae.memoizedState, f.lanes = ae.lanes) : (f.updateQueue = null, f.memoizedState = null)
					}
					var ce = sd(p);
					if (ce !== null) {
						ce.flags &= -257, fd(ce, p, k, s, n), ce.mode & 1 && ld(s, K, n), n = ce, U = K;
						var _e = n.updateQueue;
						if (_e === null) {
							var Ce = new Set;
							Ce.add(U), n.updateQueue = Ce
						} else _e.add(U);
						break e
					} else {
						if (!(n & 1)) {
							ld(s, K, n), lc();
							break e
						}
						U = Error(Le(426))
					}
				} else if (ht && k.mode & 1) {
					var Qe = sd(p);
					if (Qe !== null) {
						!(Qe.flags & 65536) && (Qe.flags |= 256), fd(Qe, p, k, s, n), Hf(ba(U, k));
						break e
					}
				}
				s = U = ba(U, k),
				Ot !== 4 && (Ot = 2),
				nu === null ? nu = [s] : nu.push(s),
				s = p;do {
					switch (s.tag) {
						case 3:
							s.flags |= 65536, n &= -n, s.lanes |= n;
							var Z = mv(s, U, n);
							nd(s, Z);
							break e;
						case 1:
							k = U;
							var G = s.type,
								q = s.stateNode;
							if (!(s.flags & 128) && (typeof G.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (mo === null || !mo.has(q)))) {
								s.flags |= 65536, n &= -n, s.lanes |= n;
								var Ee = gv(s, k, n);
								nd(s, Ee);
								break e
							}
					}
					s = s.return
				} while (s !== null)
			}
			Mv(r)
		} catch (Te) {
			n = Te, Ft === r && r !== null && (Ft = r = r.return);
			continue
		}
		break
	} while (!0)
}

function Uv() {
	var e = Sl.current;
	return Sl.current = Cl, e === null ? Cl : e
}

function lc() {
	(Ot === 0 || Ot === 3 || Ot === 2) && (Ot = 4), jt === null || !(Vo & 268435455) && !(Ll & 268435455) || uo(jt, It)
}

function Pl(e, n) {
	var r = kn;
	kn |= 2;
	var t = Uv();
	(jt !== e || It !== n) && (Di = null, Io(e, n));
	do try {
		wg();
		break
	} catch (o) {
		Wv(e, o)
	}
	while (!0);
	if (zf(), kn = r, Sl.current = t, Ft !== null) throw Error(Le(261));
	return jt = null, It = 0, Ot
}

function wg() {
	for (; Ft !== null;) jv(Ft)
}

function Eg() {
	for (; Ft !== null && !Yh();) jv(Ft)
}

function jv(e) {
	var n = Iv(e.alternate, e, oi);
	e.memoizedProps = e.pendingProps, n === null ? Mv(e) : Ft = n, tc.current = null
}

function Mv(e) {
	var n = e;
	do {
		var r = n.alternate;
		if (e = n.return, n.flags & 32768) {
			if (r = vg(r, n), r !== null) {
				r.flags &= 32767, Ft = r;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				Ot = 6, Ft = null;
				return
			}
		} else if (r = pg(r, n, oi), r !== null) {
			Ft = r;
			return
		}
		if (n = n.sibling, n !== null) {
			Ft = n;
			return
		}
		Ft = n = e
	} while (n !== null);
	Ot === 0 && (Ot = 5)
}

function Oo(e, n, r) {
	var t = Nn,
		o = hi.transition;
	try {
		hi.transition = null, Nn = 1, bg(e, n, r, t)
	} finally {
		hi.transition = o, Nn = t
	}
	return null
}

function bg(e, n, r, t) {
	do ma(); while (so !== null);
	if (kn & 6) throw Error(Le(327));
	r = e.finishedWork;
	var o = e.finishedLanes;
	if (r === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(Le(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var s = r.lanes | r.childLanes;
	if (nm(e, s), e === jt && (Ft = jt = null, It = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Vu || (Vu = !0, Dv(fl, function() {
			return ma(), null
		})), s = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || s) {
		s = hi.transition, hi.transition = null;
		var p = Nn;
		Nn = 1;
		var k = kn;
		kn |= 4, tc.current = null, mg(e, r), Fv(r, e), Hm(Vs), dl = !!Hs, Vs = Hs = null, e.current = r, gg(r), Gh(), kn = k, Nn = p, hi.transition = s
	} else e.current = r;
	if (Vu && (Vu = !1, so = e, Rl = o), s = e.pendingLanes, s === 0 && (mo = null), qh(r.stateNode), ri(e, Rt()), n !== null)
		for (t = e.onRecoverableError, r = 0; r < n.length; r++) o = n[r], t(o.value, {
			componentStack: o.stack,
			digest: o.digest
		});
	if (kl) throw kl = !1, e = ff, ff = null, e;
	return Rl & 1 && e.tag !== 0 && ma(), s = e.pendingLanes, s & 1 ? e === cf ? tu++ : (tu = 0, cf = e) : tu = 0, To(), null
}

function ma() {
	if (so !== null) {
		var e = mp(Rl),
			n = hi.transition,
			r = Nn;
		try {
			if (hi.transition = null, Nn = 16 > e ? 16 : e, so === null) var t = !1;
			else {
				if (e = so, so = null, Rl = 0, kn & 6) throw Error(Le(331));
				var o = kn;
				for (kn |= 4, er = e.current; er !== null;) {
					var s = er,
						p = s.child;
					if (er.flags & 16) {
						var k = s.deletions;
						if (k !== null) {
							for (var U = 0; U < k.length; U++) {
								var K = k[U];
								for (er = K; er !== null;) {
									var f = er;
									switch (f.tag) {
										case 0:
										case 11:
										case 15:
											ru(8, f, s)
									}
									var te = f.child;
									if (te !== null) te.return = f, er = te;
									else
										for (; er !== null;) {
											f = er;
											var ae = f.sibling,
												ce = f.return;
											if (kv(f), f === K) {
												er = null;
												break
											}
											if (ae !== null) {
												ae.return = ce, er = ae;
												break
											}
											er = ce
										}
								}
							}
							var _e = s.alternate;
							if (_e !== null) {
								var Ce = _e.child;
								if (Ce !== null) {
									_e.child = null;
									do {
										var Qe = Ce.sibling;
										Ce.sibling = null, Ce = Qe
									} while (Ce !== null)
								}
							}
							er = s
						}
					}
					if (s.subtreeFlags & 2064 && p !== null) p.return = s, er = p;
					else e: for (; er !== null;) {
						if (s = er, s.flags & 2048) switch (s.tag) {
							case 0:
							case 11:
							case 15:
								ru(9, s, s.return)
						}
						var Z = s.sibling;
						if (Z !== null) {
							Z.return = s.return, er = Z;
							break e
						}
						er = s.return
					}
				}
				var G = e.current;
				for (er = G; er !== null;) {
					p = er;
					var q = p.child;
					if (p.subtreeFlags & 2064 && q !== null) q.return = p, er = q;
					else e: for (p = G; er !== null;) {
						if (k = er, k.flags & 2048) try {
							switch (k.tag) {
								case 0:
								case 11:
								case 15:
									Nl(9, k)
							}
						} catch (Te) {
							At(k, k.return, Te)
						}
						if (k === p) {
							er = null;
							break e
						}
						var Ee = k.sibling;
						if (Ee !== null) {
							Ee.return = k.return, er = Ee;
							break e
						}
						er = k.return
					}
				}
				if (kn = o, To(), Wi && typeof Wi.onPostCommitFiberRoot == "function") try {
					Wi.onPostCommitFiberRoot(Ol, e)
				} catch {}
				t = !0
			}
			return t
		} finally {
			Nn = r, hi.transition = n
		}
	}
	return !1
}

function Td(e, n, r) {
	n = ba(r, n), n = mv(e, n, 1), e = ho(e, n, 1), n = Qt(), e !== null && (Au(e, 1, n), ri(e, n))
}

function At(e, n, r) {
	if (e.tag === 3) Td(e, e, r);
	else
		for (; n !== null;) {
			if (n.tag === 3) {
				Td(n, e, r);
				break
			} else if (n.tag === 1) {
				var t = n.stateNode;
				if (typeof n.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (mo === null || !mo.has(t))) {
					e = ba(r, e), e = gv(n, e, 1), n = ho(n, e, 1), e = Qt(), n !== null && (Au(n, 1, e), ri(n, e));
					break
				}
			}
			n = n.return
		}
}

function Tg(e, n, r) {
	var t = e.pingCache;
	t !== null && t.delete(n), n = Qt(), e.pingedLanes |= e.suspendedLanes & r, jt === e && (It & r) === r && (Ot === 4 || Ot === 3 && (It & 130023424) === It && 500 > Rt() - oc ? Io(e, 0) : ic |= r), ri(e, n)
}

function xv(e, n) {
	n === 0 && (e.mode & 1 ? (n = Wu, Wu <<= 1, !(Wu & 130023424) && (Wu = 4194304)) : n = 1);
	var r = Qt();
	e = Qi(e, n), e !== null && (Au(e, n, r), ri(e, r))
}

function Ag(e) {
	var n = e.memoizedState,
		r = 0;
	n !== null && (r = n.retryLane), xv(e, r)
}

function Cg(e, n) {
	var r = 0;
	switch (e.tag) {
		case 13:
			var t = e.stateNode,
				o = e.memoizedState;
			o !== null && (r = o.retryLane);
			break;
		case 19:
			t = e.stateNode;
			break;
		default:
			throw Error(Le(314))
	}
	t !== null && t.delete(n), xv(e, r)
}
var Iv;
Iv = function(e, n, r) {
	if (e !== null)
		if (e.memoizedProps !== n.pendingProps || Jt.current) Zt = !0;
		else {
			if (!(e.lanes & r) && !(n.flags & 128)) return Zt = !1, dg(e, n, r);
			Zt = !!(e.flags & 131072)
		}
	else Zt = !1, ht && n.flags & 1048576 && Hp(n, yl, n.index);
	switch (n.lanes = 0, n.tag) {
		case 2:
			var t = n.type;
			nl(e, n), e = n.pendingProps;
			var o = _a(n, Bt.current);
			ha(n, r), o = Zf(null, n, t, e, o, r);
			var s = Jf();
			return n.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ei(t) ? (s = !0, gl(n)) : s = !1, n.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Gf(n), o.updater = Dl, n.stateNode = o, o._reactInternals = n, Zs(n, t, e, r), n = rf(null, n, t, !0, s, r)) : (n.tag = 0, ht && s && Nf(n), Gt(null, n, o, r), n = n.child), n;
		case 16:
			t = n.elementType;
			e: {
				switch (nl(e, n), e = n.pendingProps, o = t._init, t = o(t._payload), n.type = t, o = n.tag = kg(t), e = Ei(t, e), o) {
					case 0:
						n = ef(null, n, t, e, r);
						break e;
					case 1:
						n = pd(null, n, t, e, r);
						break e;
					case 11:
						n = cd(null, n, t, e, r);
						break e;
					case 14:
						n = dd(null, n, t, Ei(t.type, e), r);
						break e
				}
				throw Error(Le(306, t, ""))
			}
			return n;
		case 0:
			return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ei(t, o), ef(e, n, t, o, r);
		case 1:
			return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ei(t, o), pd(e, n, t, o, r);
		case 3:
			e: {
				if (Ev(n), e === null) throw Error(Le(387));t = n.pendingProps,
				s = n.memoizedState,
				o = s.element,
				Qp(e, n),
				bl(n, t, null, r);
				var p = n.memoizedState;
				if (t = p.element, s.isDehydrated)
					if (s = {
							element: t,
							isDehydrated: !1,
							cache: p.cache,
							pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
							transitions: p.transitions
						}, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
						o = ba(Error(Le(423)), n), n = vd(e, n, t, r, o);
						break e
					} else if (t !== o) {
					o = ba(Error(Le(424)), n), n = vd(e, n, t, r, o);
					break e
				} else
					for (ai = vo(n.stateNode.containerInfo.firstChild), ui = n, ht = !0, Ti = null, r = Yp(n, null, t, r), n.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
				else {
					if (ya(), t === o) {
						n = Ki(e, n, r);
						break e
					}
					Gt(e, n, t, r)
				}
				n = n.child
			}
			return n;
		case 5:
			return Kp(n), e === null && Ks(n), t = n.type, o = n.pendingProps, s = e !== null ? e.memoizedProps : null, p = o.children, zs(t, o) ? p = null : s !== null && zs(t, s) && (n.flags |= 32), wv(e, n), Gt(e, n, p, r), n.child;
		case 6:
			return e === null && Ks(n), null;
		case 13:
			return bv(e, n, r);
		case 4:
			return Qf(n, n.stateNode.containerInfo), t = n.pendingProps, e === null ? n.child = wa(n, null, t, r) : Gt(e, n, t, r), n.child;
		case 11:
			return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ei(t, o), cd(e, n, t, o, r);
		case 7:
			return Gt(e, n, n.pendingProps, r), n.child;
		case 8:
			return Gt(e, n, n.pendingProps.children, r), n.child;
		case 12:
			return Gt(e, n, n.pendingProps.children, r), n.child;
		case 10:
			e: {
				if (t = n.type._context, o = n.pendingProps, s = n.memoizedProps, p = o.value, ot(wl, t._currentValue), t._currentValue = p, s !== null)
					if (Si(s.value, p)) {
						if (s.children === o.children && !Jt.current) {
							n = Ki(e, n, r);
							break e
						}
					} else
						for (s = n.child, s !== null && (s.return = n); s !== null;) {
							var k = s.dependencies;
							if (k !== null) {
								p = s.child;
								for (var U = k.firstContext; U !== null;) {
									if (U.context === t) {
										if (s.tag === 1) {
											U = Bi(-1, r & -r), U.tag = 2;
											var K = s.updateQueue;
											if (K !== null) {
												K = K.shared;
												var f = K.pending;
												f === null ? U.next = U : (U.next = f.next, f.next = U), K.pending = U
											}
										}
										s.lanes |= r, U = s.alternate, U !== null && (U.lanes |= r), qs(s.return, r, n), k.lanes |= r;
										break
									}
									U = U.next
								}
							} else if (s.tag === 10) p = s.type === n.type ? null : s.child;
							else if (s.tag === 18) {
								if (p = s.return, p === null) throw Error(Le(341));
								p.lanes |= r, k = p.alternate, k !== null && (k.lanes |= r), qs(p, r, n), p = s.sibling
							} else p = s.child;
							if (p !== null) p.return = s;
							else
								for (p = s; p !== null;) {
									if (p === n) {
										p = null;
										break
									}
									if (s = p.sibling, s !== null) {
										s.return = p.return, p = s;
										break
									}
									p = p.return
								}
							s = p
						}
				Gt(e, n, o.children, r),
				n = n.child
			}
			return n;
		case 9:
			return o = n.type, t = n.pendingProps.children, ha(n, r), o = mi(o), t = t(o), n.flags |= 1, Gt(e, n, t, r), n.child;
		case 14:
			return t = n.type, o = Ei(t, n.pendingProps), o = Ei(t.type, o), dd(e, n, t, o, r);
		case 15:
			return _v(e, n, n.type, n.pendingProps, r);
		case 17:
			return t = n.type, o = n.pendingProps, o = n.elementType === t ? o : Ei(t, o), nl(e, n), n.tag = 1, ei(t) ? (e = !0, gl(n)) : e = !1, ha(n, r), hv(n, t, o), Zs(n, t, o, r), rf(null, n, t, !0, e, r);
		case 19:
			return Tv(e, n, r);
		case 22:
			return yv(e, n, r)
	}
	throw Error(Le(156, n.tag))
};

function Dv(e, n) {
	return dp(e, n)
}

function Sg(e, n, r, t) {
	this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function vi(e, n, r, t) {
	return new Sg(e, n, r, t)
}

function sc(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function kg(e) {
	if (typeof e == "function") return sc(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === Rf) return 11;
		if (e === Pf) return 14
	}
	return 2
}

function _o(e, n) {
	var r = e.alternate;
	return r === null ? (r = vi(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : {
		lanes: n.lanes,
		firstContext: n.firstContext
	}, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function ol(e, n, r, t, o, s) {
	var p = 2;
	if (t = e, typeof e == "function") sc(e) && (p = 1);
	else if (typeof e == "string") p = 5;
	else e: switch (e) {
		case ea:
			return Do(r.children, o, s, n);
		case kf:
			p = 8, o |= 8;
			break;
		case bs:
			return e = vi(12, r, n, o | 2), e.elementType = bs, e.lanes = s, e;
		case Ts:
			return e = vi(13, r, n, o), e.elementType = Ts, e.lanes = s, e;
		case As:
			return e = vi(19, r, n, o), e.elementType = As, e.lanes = s, e;
		case Kd:
			return Hl(r, o, s, n);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case Gd:
					p = 10;
					break e;
				case Qd:
					p = 9;
					break e;
				case Rf:
					p = 11;
					break e;
				case Pf:
					p = 14;
					break e;
				case io:
					p = 16, t = null;
					break e
			}
			throw Error(Le(130, e == null ? e : typeof e, ""))
	}
	return n = vi(p, r, n, o), n.elementType = e, n.type = t, n.lanes = s, n
}

function Do(e, n, r, t) {
	return e = vi(7, e, t, n), e.lanes = r, e
}

function Hl(e, n, r, t) {
	return e = vi(22, e, t, n), e.elementType = Kd, e.lanes = r, e.stateNode = {
		isHidden: !1
	}, e
}

function gs(e, n, r) {
	return e = vi(6, e, null, n), e.lanes = r, e
}

function _s(e, n, r) {
	return n = vi(4, e.children !== null ? e.children : [], e.key, n), n.lanes = r, n.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, n
}

function Rg(e, n, r, t, o) {
	this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = t, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function fc(e, n, r, t, o, s, p, k, U) {
	return e = new Rg(e, n, r, k, U), n === 1 ? (n = 1, s === !0 && (n |= 8)) : n = 0, s = vi(3, null, null, n), e.current = s, s.stateNode = e, s.memoizedState = {
		element: t,
		isDehydrated: r,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, Gf(s), e
}

function Pg(e, n, r) {
	var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Jo,
		key: t == null ? null : "" + t,
		children: e,
		containerInfo: n,
		implementation: r
	}
}

function Nv(e) {
	if (!e) return wo;
	e = e._reactInternals;
	e: {
		if (Yo(e) !== e || e.tag !== 1) throw Error(Le(170));
		var n = e;do {
			switch (n.tag) {
				case 3:
					n = n.stateNode.context;
					break e;
				case 1:
					if (ei(n.type)) {
						n = n.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			n = n.return
		} while (n !== null);
		throw Error(Le(171))
	}
	if (e.tag === 1) {
		var r = e.type;
		if (ei(r)) return Np(e, r, n)
	}
	return n
}

function Lv(e, n, r, t, o, s, p, k, U) {
	return e = fc(r, t, !0, e, o, s, p, k, U), e.context = Nv(null), r = e.current, t = Qt(), o = go(r), s = Bi(t, o), s.callback = n ?? null, ho(r, s, o), e.current.lanes = o, Au(e, o, t), ri(e, t), e
}

function Vl(e, n, r, t) {
	var o = n.current,
		s = Qt(),
		p = go(o);
	return r = Nv(r), n.context === null ? n.context = r : n.pendingContext = r, n = Bi(s, p), n.payload = {
		element: e
	}, t = t === void 0 ? null : t, t !== null && (n.callback = t), e = ho(o, n, p), e !== null && (Ci(e, o, p, s), Ju(e, o, p)), p
}

function Fl(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function Ad(e, n) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var r = e.retryLane;
		e.retryLane = r !== 0 && r < n ? r : n
	}
}

function cc(e, n) {
	Ad(e, n), (e = e.alternate) && Ad(e, n)
}

function Fg() {
	return null
}
var Hv = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function dc(e) {
	this._internalRoot = e
}
zl.prototype.render = dc.prototype.render = function(e) {
	var n = this._internalRoot;
	if (n === null) throw Error(Le(409));
	Vl(e, n, null, null)
};
zl.prototype.unmount = dc.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var n = e.containerInfo;
		zo(function() {
			Vl(null, e, null, null)
		}), n[Gi] = null
	}
};

function zl(e) {
	this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var n = yp();
		e = {
			blockedOn: null,
			target: e,
			priority: n
		};
		for (var r = 0; r < ao.length && n !== 0 && n < ao[r].priority; r++);
		ao.splice(r, 0, e), r === 0 && Ep(e)
	}
};

function pc(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Bl(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Cd() {}

function $g(e, n, r, t, o) {
	if (o) {
		if (typeof t == "function") {
			var s = t;
			t = function() {
				var K = Fl(p);
				s.call(K)
			}
		}
		var p = Lv(n, t, e, 0, null, !1, !1, "", Cd);
		return e._reactRootContainer = p, e[Gi] = p.current, vu(e.nodeType === 8 ? e.parentNode : e), zo(), p
	}
	for (; o = e.lastChild;) e.removeChild(o);
	if (typeof t == "function") {
		var k = t;
		t = function() {
			var K = Fl(U);
			k.call(K)
		}
	}
	var U = fc(e, 0, !1, null, null, !1, !1, "", Cd);
	return e._reactRootContainer = U, e[Gi] = U.current, vu(e.nodeType === 8 ? e.parentNode : e), zo(function() {
		Vl(n, U, r, t)
	}), U
}

function Yl(e, n, r, t, o) {
	var s = r._reactRootContainer;
	if (s) {
		var p = s;
		if (typeof o == "function") {
			var k = o;
			o = function() {
				var U = Fl(p);
				k.call(U)
			}
		}
		Vl(n, p, e, o)
	} else p = $g(r, n, e, o, t);
	return Fl(p)
}
gp = function(e) {
	switch (e.tag) {
		case 3:
			var n = e.stateNode;
			if (n.current.memoizedState.isDehydrated) {
				var r = Ga(n.pendingLanes);
				r !== 0 && (Of(n, r | 1), ri(n, Rt()), !(kn & 6) && (Ta = Rt() + 500, To()))
			}
			break;
		case 13:
			zo(function() {
				var t = Qi(e, 1);
				if (t !== null) {
					var o = Qt();
					Ci(t, e, 1, o)
				}
			}), cc(e, 1)
	}
};
Wf = function(e) {
	if (e.tag === 13) {
		var n = Qi(e, 134217728);
		if (n !== null) {
			var r = Qt();
			Ci(n, e, 134217728, r)
		}
		cc(e, 134217728)
	}
};
_p = function(e) {
	if (e.tag === 13) {
		var n = go(e),
			r = Qi(e, n);
		if (r !== null) {
			var t = Qt();
			Ci(r, e, n, t)
		}
		cc(e, n)
	}
};
yp = function() {
	return Nn
};
wp = function(e, n) {
	var r = Nn;
	try {
		return Nn = e, n()
	} finally {
		Nn = r
	}
};
Us = function(e, n, r) {
	switch (n) {
		case "input":
			if (ks(e, r), n = r.name, r.type === "radio" && n != null) {
				for (r = e; r.parentNode;) r = r.parentNode;
				for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < r.length; n++) {
					var t = r[n];
					if (t !== e && t.form === e.form) {
						var o = Ml(t);
						if (!o) throw Error(Le(90));
						Xd(t), ks(t, o)
					}
				}
			}
			break;
		case "textarea":
			Jd(e, r);
			break;
		case "select":
			n = r.value, n != null && ca(e, !!r.multiple, n, !1)
	}
};
ap = ac;
up = zo;
var Og = {
		usingClientEntryPoint: !1,
		Events: [Su, ia, Ml, ip, op, ac]
	},
	za = {
		findFiberByHostInstance: Wo,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	Wg = {
		bundleType: za.bundleType,
		version: za.version,
		rendererPackageName: za.rendererPackageName,
		rendererConfig: za.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: qi.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = fp(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: za.findFiberByHostInstance || Fg,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!zu.isDisabled && zu.supportsFiber) try {
		Ol = zu.inject(Wg), Wi = zu
	} catch {}
}
si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Og;
si.createPortal = function(e, n) {
	var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!pc(n)) throw Error(Le(200));
	return Pg(e, n, null, r)
};
si.createRoot = function(e, n) {
	if (!pc(e)) throw Error(Le(299));
	var r = !1,
		t = "",
		o = Hv;
	return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (t = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), n = fc(e, 1, !1, null, null, r, !1, t, o), e[Gi] = n.current, vu(e.nodeType === 8 ? e.parentNode : e), new dc(n)
};
si.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var n = e._reactInternals;
	if (n === void 0) throw typeof e.render == "function" ? Error(Le(188)) : (e = Object.keys(e).join(","), Error(Le(268, e)));
	return e = fp(n), e = e === null ? null : e.stateNode, e
};
si.flushSync = function(e) {
	return zo(e)
};
si.hydrate = function(e, n, r) {
	if (!Bl(n)) throw Error(Le(200));
	return Yl(null, e, n, !0, r)
};
si.hydrateRoot = function(e, n, r) {
	if (!pc(e)) throw Error(Le(405));
	var t = r != null && r.hydratedSources || null,
		o = !1,
		s = "",
		p = Hv;
	if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), n = Lv(n, null, e, 1, r ?? null, o, !1, s, p), e[Gi] = n.current, vu(e), t)
		for (e = 0; e < t.length; e++) r = t[e], o = r._getVersion, o = o(r._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [r, o] : n.mutableSourceEagerHydrationData.push(r, o);
	return new zl(n)
};
si.render = function(e, n, r) {
	if (!Bl(n)) throw Error(Le(200));
	return Yl(null, e, n, !1, r)
};
si.unmountComponentAtNode = function(e) {
	if (!Bl(e)) throw Error(Le(40));
	return e._reactRootContainer ? (zo(function() {
		Yl(null, null, e, !1, function() {
			e._reactRootContainer = null, e[Gi] = null
		})
	}), !0) : !1
};
si.unstable_batchedUpdates = ac;
si.unstable_renderSubtreeIntoContainer = function(e, n, r, t) {
	if (!Bl(r)) throw Error(Le(200));
	if (e == null || e._reactInternals === void 0) throw Error(Le(38));
	return Yl(e, n, r, !1, t)
};
si.version = "18.3.1-next-f1338f8080-20240426";

function Vv() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)
	} catch (e) {
		console.error(e)
	}
}
Vv(), Vd.exports = si;
var Ug = Vd.exports,
	zv, Sd = Ug;
zv = Sd.createRoot, Sd.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jg = {
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
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
	Ao = (e, n) => {
		const r = vt.forwardRef(({
			color: t = "currentColor",
			size: o = 24,
			strokeWidth: s = 2,
			absoluteStrokeWidth: p,
			className: k = "",
			children: U,
			...K
		}, f) => vt.createElement("svg", {
			ref: f,
			...jg,
			width: o,
			height: o,
			stroke: t,
			strokeWidth: p ? Number(s) * 24 / Number(o) : s,
			className: ["lucide", `lucide-${Mg(e)}`, k].join(" "),
			...K
		}, [...n.map(([te, ae]) => vt.createElement(te, ae)), ...Array.isArray(U) ? U : [U]]));
		return r.displayName = `${e}`, r
	};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = Ao("AlertCircle", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = Ao("CheckCircle", [
	["path", {
		d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
		key: "g774vq"
	}],
	["path", {
		d: "m9 11 3 3L22 4",
		key: "1pflzl"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = Ao("Download", [
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["polyline", {
		points: "7 10 12 15 17 10",
		key: "2ggqvy"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "15",
		y2: "3",
		key: "1vk2je"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = Ao("Image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = Ao("Loader2", [
	["path", {
		d: "M21 12a9 9 0 1 1-6.219-8.56",
		key: "13zald"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = Ao("Trash2", [
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
		key: "4alrt4"
	}],
	["path", {
		d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
		key: "v07s0e"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "11",
		y2: "17",
		key: "1uufr5"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "11",
		y2: "17",
		key: "xtxkd"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = Ao("Upload", [
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["polyline", {
		points: "17 8 12 3 7 8",
		key: "t8dd8p"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "3",
		y2: "15",
		key: "widbto"
	}]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = Ao("X", [
	["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}],
	["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]
]);

function zg({
	options: e,
	outputType: n,
	onOptionsChange: r,
	onOutputTypeChange: t
}) {
	return vr.jsxs("div", {
		className: "space-y-6 bg-white p-6 rounded-lg shadow-sm",
		children: [vr.jsxs("div", {
			children: [vr.jsx("label", {
				className: "block text-sm font-medium text-gray-700 mb-2",
				children: "Output Format"
			}), vr.jsx("div", {
				className: "grid grid-cols-2 sm:grid-cols-5 gap-2",
				children: ["avif", "jpeg", "jxl", "png", "webp"].map(o => vr.jsx("button", {
					className: `px-4 py-2 rounded-md text-sm font-medium uppercase ${n===o?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
					onClick: () => t(o),
					children: o
				}, o))
			})]
		}), n !== "png" && vr.jsxs("div", {
			children: [vr.jsxs("label", {
				className: "block text-sm font-medium text-gray-700 mb-2",
				children: ["Quality: ", e.quality, "%"]
			}), vr.jsx("input", {
				type: "range",
				min: "1",
				max: "100",
				value: e.quality,
				onChange: o => r({
					quality: Number(o.target.value)
				}),
				className: "w-full"
			})]
		})]
	})
}

function Bg({
	onFilesDrop: e
}) {
	const n = vt.useCallback(o => {
			o.preventDefault();
			const s = Array.from(o.dataTransfer.files).filter(p => p.type.startsWith("image/") || p.name.toLowerCase().endsWith("jxl")).map(p => ({
				id: crypto.randomUUID(),
				file: p,
				status: "pending",
				originalSize: p.size
			}));
			e(s)
		}, [e]),
		r = vt.useCallback(o => {
			o.preventDefault()
		}, []),
		t = vt.useCallback(o => {
			const s = Array.from(o.target.files || []).filter(p => p.type.startsWith("image/") || p.name.toLowerCase().endsWith("jxl")).map(p => ({
				id: crypto.randomUUID(),
				file: p,
				status: "pending",
				originalSize: p.size
			}));
			e(s), o.target.value = ""
		}, [e]);
	return vr.jsxs("div", {
		className: "border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors",
		onDrop: n,
		onDragOver: r,
		children: [vr.jsx("input", {
			type: "file",
			id: "fileInput",
			className: "hidden",
			multiple: !0,
			accept: "image/*,.jxl",
			onChange: t
		}), vr.jsxs("label", {
			htmlFor: "fileInput",
			className: "cursor-pointer flex flex-col items-center gap-4",
			children: [vr.jsx(Hg, {
				className: "w-12 h-12 text-gray-400"
			}), vr.jsxs("div", {
				children: [vr.jsx("p", {
					className: "text-lg font-medium text-gray-700",
					children: "Drop images here or click to upload"
				}), vr.jsx("p", {
					className: "text-sm text-gray-500",
					children: "Supports JPEG, PNG, WebP, AVIF, and JXL"
				})]
			})]
		})]
	})
}
const Yg = "modulepreload",
	Gg = function(e) {
		return "/" + e
	},
	kd = {},
	pi = function(n, r, t) {
		let o = Promise.resolve();
		if (r && r.length > 0) {
			document.getElementsByTagName("link");
			const p = document.querySelector("meta[property=csp-nonce]"),
				k = p?.nonce || p?.getAttribute("nonce");
			o = Promise.allSettled(r.map(U => {
				if (U = Gg(U), U in kd) return;
				kd[U] = !0;
				const K = U.endsWith(".css"),
					f = K ? '[rel="stylesheet"]' : "";
				if (document.querySelector(`link[href="${U}"]${f}`)) return;
				const te = document.createElement("link");
				if (te.rel = K ? "stylesheet" : Yg, K || (te.as = "script"), te.crossOrigin = "", te.href = U, k && te.setAttribute("nonce", k), document.head.appendChild(te), K) return new Promise((ae, ce) => {
					te.addEventListener("load", ae), te.addEventListener("error", () => ce(new Error(`Unable to preload CSS for ${U}`)))
				})
			}))
		}

		function s(p) {
			const k = new Event("vite:preloadError", {
				cancelable: !0
			});
			if (k.payload = p, window.dispatchEvent(k), !k.defaultPrevented) throw p
		}
		return o.then(p => {
			for (const k of p || []) k.status === "rejected" && s(k.reason);
			return n().catch(s)
		})
	},
	Qg = {
		cqLevel: 33,
		cqAlphaLevel: -1,
		denoiseLevel: 0,
		tileColsLog2: 0,
		tileRowsLog2: 0,
		speed: 6,
		subsample: 1,
		chromaDeltaQ: !1,
		sharpness: 0,
		tune: 0
	};

function vf(e, n, r = {}) {
	return e({
		noInitialRun: !0,
		instantiateWasm: void 0,
		...r
	})
}
const Yv = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), Gv = () => (async e => {
	try {
		return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e)
	} catch {
		return !1
	}
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]));
let Mo;
const Kg = () => typeof process < "u" && process.release && process.release.name === "node",
	qg = () => {
		var e;
		return ((e = globalThis.caches) === null || e === void 0 ? void 0 : e.default) !== void 0
	};
async function Xg(e, n) {
	if (!Kg() && !qg() && await Gv()) {
		const t = await pi(() => Promise.resolve().then(() => Q_), void 0);
		return Mo = vf(t.default, e, n), Mo
	}
	const r = await pi(() => Promise.resolve().then(() => J_), void 0);
	return Mo = vf(r.default, e, n), Mo
}
async function Qv(e, n = {}) {
	Mo || (Mo = Xg());
	const r = await Mo,
		t = {
			...Qg,
			...n
		},
		o = r.encode(e.data, e.width, e.height, t);
	if (!o) throw new Error("Encoding error.");
	return o.buffer
}
var Zg = function() {
	var e = import.meta.url;
	return function(r) {
		r = r || {};
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(g, T) {
			t = g, o = T
		});
		var s = {},
			p;
		for (p in r) r.hasOwnProperty(p) && (s[p] = r[p]);
		var k = !1,
			U = !1;
		k = typeof window == "object", U = typeof importScripts == "function", typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var K = "";

		function f(g) {
			return r.locateFile ? r.locateFile(g, K) : K + g
		}
		var te;
		(k || U) && (U ? K = self.location.href : typeof document < "u" && document.currentScript && (K = document.currentScript.src), e && (K = e), K.indexOf("blob:") !== 0 ? K = K.substr(0, K.lastIndexOf("/") + 1) : K = "", U && (te = function(g) {
			var T = new XMLHttpRequest;
			return T.open("GET", g, !1), T.responseType = "arraybuffer", T.send(null), new Uint8Array(T.response)
		}));
		var ae = r.print || console.log.bind(console),
			ce = r.printErr || console.warn.bind(console);
		for (p in s) s.hasOwnProperty(p) && (r[p] = s[p]);
		s = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
		var _e = 0,
			Ce = function(g) {
				_e = g
			},
			Qe = function() {
				return _e
			},
			Z;
		r.wasmBinary && (Z = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && Ir("no native wasm support detected");
		var G, q = !1;

		function Ee(g, T, L) {
			for (var re = T + L, le = ""; !(T >= re);) {
				var pe = g[T++];
				if (!pe) return le;
				if (!(pe & 128)) {
					le += String.fromCharCode(pe);
					continue
				}
				var A = g[T++] & 63;
				if ((pe & 224) == 192) {
					le += String.fromCharCode((pe & 31) << 6 | A);
					continue
				}
				var S = g[T++] & 63;
				if ((pe & 240) == 224 ? pe = (pe & 15) << 12 | A << 6 | S : pe = (pe & 7) << 18 | A << 12 | S << 6 | g[T++] & 63, pe < 65536) le += String.fromCharCode(pe);
				else {
					var M = pe - 65536;
					le += String.fromCharCode(55296 | M >> 10, 56320 | M & 1023)
				}
			}
			return le
		}

		function Te(g, T) {
			return g ? Ee(Pe, g, T) : ""
		}

		function Ue(g, T, L, re) {
			if (!(re > 0)) return 0;
			for (var le = L, pe = L + re - 1, A = 0; A < g.length; ++A) {
				var S = g.charCodeAt(A);
				if (S >= 55296 && S <= 57343) {
					var M = g.charCodeAt(++A);
					S = 65536 + ((S & 1023) << 10) | M & 1023
				}
				if (S <= 127) {
					if (L >= pe) break;
					T[L++] = S
				} else if (S <= 2047) {
					if (L + 1 >= pe) break;
					T[L++] = 192 | S >> 6, T[L++] = 128 | S & 63
				} else if (S <= 65535) {
					if (L + 2 >= pe) break;
					T[L++] = 224 | S >> 12, T[L++] = 128 | S >> 6 & 63, T[L++] = 128 | S & 63
				} else {
					if (L + 3 >= pe) break;
					T[L++] = 240 | S >> 18, T[L++] = 128 | S >> 12 & 63, T[L++] = 128 | S >> 6 & 63, T[L++] = 128 | S & 63
				}
			}
			return T[L] = 0, L - le
		}

		function je(g, T, L) {
			return Ue(g, Pe, T, L)
		}

		function Ae(g) {
			for (var T = 0, L = 0; L < g.length; ++L) {
				var re = g.charCodeAt(L);
				re >= 55296 && re <= 57343 && (re = 65536 + ((re & 1023) << 10) | g.charCodeAt(++L) & 1023), re <= 127 ? ++T : re <= 2047 ? T += 2 : re <= 65535 ? T += 3 : T += 4
			}
			return T
		}

		function Ve(g, T) {
			for (var L = "", re = 0; !(re >= T / 2); ++re) {
				var le = ze[g + re * 2 >> 1];
				if (le == 0) break;
				L += String.fromCharCode(le)
			}
			return L
		}

		function $e(g, T, L) {
			if (L === void 0 && (L = 2147483647), L < 2) return 0;
			L -= 2;
			for (var re = T, le = L < g.length * 2 ? L / 2 : g.length, pe = 0; pe < le; ++pe) {
				var A = g.charCodeAt(pe);
				ze[T >> 1] = A, T += 2
			}
			return ze[T >> 1] = 0, T - re
		}

		function Me(g) {
			return g.length * 2
		}

		function xe(g, T) {
			for (var L = 0, re = ""; !(L >= T / 4);) {
				var le = qe[g + L * 4 >> 2];
				if (le == 0) break;
				if (++L, le >= 65536) {
					var pe = le - 65536;
					re += String.fromCharCode(55296 | pe >> 10, 56320 | pe & 1023)
				} else re += String.fromCharCode(le)
			}
			return re
		}

		function ke(g, T, L) {
			if (L === void 0 && (L = 2147483647), L < 4) return 0;
			for (var re = T, le = re + L - 4, pe = 0; pe < g.length; ++pe) {
				var A = g.charCodeAt(pe);
				if (A >= 55296 && A <= 57343) {
					var S = g.charCodeAt(++pe);
					A = 65536 + ((A & 1023) << 10) | S & 1023
				}
				if (qe[T >> 2] = A, T += 4, T + 4 > le) break
			}
			return qe[T >> 2] = 0, T - re
		}

		function sr(g) {
			for (var T = 0, L = 0; L < g.length; ++L) {
				var re = g.charCodeAt(L);
				re >= 55296 && re <= 57343 && ++L, T += 4
			}
			return T
		}

		function Be(g, T) {
			return g % T > 0 && (g += T - g % T), g
		}
		var Ne, zr, Pe, ze, Ge, qe, tr, Er, fn;

		function nn(g) {
			Ne = g, r.HEAP8 = zr = new Int8Array(g), r.HEAP16 = ze = new Int16Array(g), r.HEAP32 = qe = new Int32Array(g), r.HEAPU8 = Pe = new Uint8Array(g), r.HEAPU16 = Ge = new Uint16Array(g), r.HEAPU32 = tr = new Uint32Array(g), r.HEAPF32 = Er = new Float32Array(g), r.HEAPF64 = fn = new Float64Array(g)
		}
		r.INITIAL_MEMORY;
		var Ze, Mr = [],
			tn = [],
			wn = [];

		function On() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) Fr(r.preRun.shift());
			en(Mr)
		}

		function or() {
			en(tn)
		}

		function yr() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) En(r.postRun.shift());
			en(wn)
		}

		function Fr(g) {
			Mr.unshift(g)
		}

		function cn(g) {
			tn.unshift(g)
		}

		function En(g) {
			wn.unshift(g)
		}
		var $r = 0,
			dn = null;

		function pn(g) {
			$r++, r.monitorRunDependencies && r.monitorRunDependencies($r)
		}

		function Xr(g) {
			if ($r--, r.monitorRunDependencies && r.monitorRunDependencies($r), $r == 0 && dn) {
				var T = dn;
				dn = null, T()
			}
		}
		r.preloadedImages = {}, r.preloadedAudios = {};

		function Ir(g) {
			r.onAbort && r.onAbort(g), g += "", ce(g), q = !0, g = "abort(" + g + "). Build with -s ASSERTIONS=1 for more info.";
			var T = new WebAssembly.RuntimeError(g);
			throw o(T), T
		}
		var Mn = "data:application/octet-stream;base64,";

		function Dr(g) {
			return g.startsWith(Mn)
		}
		if (r.locateFile) {
			var Tr = "avif_dec.wasm";
			Dr(Tr) || (Tr = f(Tr))
		} else var Tr = new URL(location.href +"assets/avif_dec-3FkjLu3p.wasm", import.meta.url).toString();

		function bn(g) {
			try {
				if (g == Tr && Z) return new Uint8Array(Z);
				if (te) return te(g);
				throw "both async and sync fetching of the wasm failed"
			} catch (T) {
				Ir(T)
			}
		}

		function Ar() {
			return !Z && (k || U) && typeof fetch == "function" ? fetch(Tr, {
				credentials: "same-origin"
			}).then(function(g) {
				if (!g.ok) throw "failed to load wasm binary file at '" + Tr + "'";
				return g.arrayBuffer()
			}).catch(function() {
				return bn(Tr)
			}) : Promise.resolve().then(function() {
				return bn(Tr)
			})
		}

		function cr() {
			var g = {
				a: J
			};

			function T(A, S) {
				var M = A.exports;
				r.asm = M, G = r.asm.C, nn(G.buffer), Ze = r.asm.L, cn(r.asm.D), Xr()
			}
			pn();

			function L(A) {
				T(A.instance)
			}

			function re(A) {
				return Ar().then(function(S) {
					var M = WebAssembly.instantiate(S, g);
					return M
				}).then(A, function(S) {
					ce("failed to asynchronously prepare wasm: " + S), Ir(S)
				})
			}

			function le() {
				return !Z && typeof WebAssembly.instantiateStreaming == "function" && !Dr(Tr) && typeof fetch == "function" ? fetch(Tr, {
					credentials: "same-origin"
				}).then(function(A) {
					var S = WebAssembly.instantiateStreaming(A, g);
					return S.then(L, function(M) {
						return ce("wasm streaming compile failed: " + M), ce("falling back to ArrayBuffer instantiation"), re(L)
					})
				}) : re(L)
			}
			if (r.instantiateWasm) try {
				var pe = r.instantiateWasm(g, T);
				return pe
			} catch (A) {
				return ce("Module.instantiateWasm callback failed with error: " + A), !1
			}
			return le().catch(o), {}
		}

		function en(g) {
			for (; g.length > 0;) {
				var T = g.shift();
				if (typeof T == "function") {
					T(r);
					continue
				}
				var L = T.func;
				typeof L == "number" ? T.arg === void 0 ? Ze.get(L)() : Ze.get(L)(T.arg) : L(T.arg === void 0 ? null : T.arg)
			}
		}

		function Qr(g, T) {}

		function Or(g, T) {
			return void 0
		}

		function Wr(g, T, L, re, le) {}

		function Zr(g) {
			switch (g) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + g)
			}
		}

		function Cr() {
			for (var g = new Array(256), T = 0; T < 256; ++T) g[T] = String.fromCharCode(T);
			kr = g
		}
		var kr = void 0;

		function Rr(g) {
			for (var T = "", L = g; Pe[L];) T += kr[Pe[L++]];
			return T
		}
		var Jr = {},
			pr = {},
			on = {},
			br = 48,
			xr = 57;

		function Sr(g) {
			if (g === void 0) return "_unknown";
			g = g.replace(/[^a-zA-Z0-9_]/g, "$");
			var T = g.charCodeAt(0);
			return T >= br && T <= xr ? "_" + g : g
		}

		function Br(g, T) {
			return g = Sr(g),
				function() {
					return T.apply(this, arguments)
				}
		}

		function mr(g, T) {
			var L = Br(T, function(re) {
				this.name = T, this.message = re;
				var le = new Error(re).stack;
				le !== void 0 && (this.stack = this.toString() + `
` + le.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return L.prototype = Object.create(g.prototype), L.prototype.constructor = L, L.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, L
		}
		var Je = void 0;

		function wr(g) {
			throw new Je(g)
		}
		var hr = void 0;

		function Ur(g) {
			throw new hr(g)
		}

		function lr(g, T, L) {
			g.forEach(function(S) {
				on[S] = T
			});

			function re(S) {
				var M = L(S);
				M.length !== g.length && Ur("Mismatched type converter count");
				for (var ie = 0; ie < g.length; ++ie) we(g[ie], M[ie])
			}
			var le = new Array(T.length),
				pe = [],
				A = 0;
			T.forEach(function(S, M) {
				pr.hasOwnProperty(S) ? le[M] = pr[S] : (pe.push(S), Jr.hasOwnProperty(S) || (Jr[S] = []), Jr[S].push(function() {
					le[M] = pr[S], ++A, A === pe.length && re(le)
				}))
			}), pe.length === 0 && re(le)
		}

		function we(g, T, L) {
			if (L = L || {}, !("argPackAdvance" in T)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var re = T.name;
			if (g || wr('type "' + re + '" must have a positive integer typeid pointer'), pr.hasOwnProperty(g)) {
				if (L.ignoreDuplicateRegistrations) return;
				wr("Cannot register type '" + re + "' twice")
			}
			if (pr[g] = T, delete on[g], Jr.hasOwnProperty(g)) {
				var le = Jr[g];
				delete Jr[g], le.forEach(function(pe) {
					pe()
				})
			}
		}

		function Rn(g, T, L, re, le) {
			var pe = Zr(L);
			T = Rr(T), we(g, {
				name: T,
				fromWireType: function(A) {
					return !!A
				},
				toWireType: function(A, S) {
					return S ? re : le
				},
				argPackAdvance: 8,
				readValueFromPointer: function(A) {
					var S;
					if (L === 1) S = zr;
					else if (L === 2) S = ze;
					else if (L === 4) S = qe;
					else throw new TypeError("Unknown boolean type size: " + T);
					return this.fromWireType(S[A >> pe])
				},
				destructorFunction: null
			})
		}
		var dr = [],
			Re = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function an(g) {
			g > 4 && --Re[g].refcount === 0 && (Re[g] = void 0, dr.push(g))
		}

		function Yr() {
			for (var g = 0, T = 5; T < Re.length; ++T) Re[T] !== void 0 && ++g;
			return g
		}

		function vn() {
			for (var g = 5; g < Re.length; ++g)
				if (Re[g] !== void 0) return Re[g];
			return null
		}

		function Lr() {
			r.count_emval_handles = Yr, r.get_first_emval = vn
		}

		function Kr(g) {
			switch (g) {
				case void 0:
					return 1;
				case null:
					return 2;
				case !0:
					return 3;
				case !1:
					return 4;
				default: {
					var T = dr.length ? dr.pop() : Re.length;
					return Re[T] = {
						refcount: 1,
						value: g
					}, T
				}
			}
		}

		function Ln(g) {
			return this.fromWireType(tr[g >> 2])
		}

		function Hn(g, T) {
			T = Rr(T), we(g, {
				name: T,
				fromWireType: function(L) {
					var re = Re[L].value;
					return an(L), re
				},
				toWireType: function(L, re) {
					return Kr(re)
				},
				argPackAdvance: 8,
				readValueFromPointer: Ln,
				destructorFunction: null
			})
		}

		function Gr(g) {
			if (g === null) return "null";
			var T = typeof g;
			return T === "object" || T === "array" || T === "function" ? g.toString() : "" + g
		}

		function un(g, T) {
			switch (T) {
				case 2:
					return function(L) {
						return this.fromWireType(Er[L >> 2])
					};
				case 3:
					return function(L) {
						return this.fromWireType(fn[L >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + g)
			}
		}

		function Xn(g, T, L) {
			var re = Zr(L);
			T = Rr(T), we(g, {
				name: T,
				fromWireType: function(le) {
					return le
				},
				toWireType: function(le, pe) {
					if (typeof pe != "number" && typeof pe != "boolean") throw new TypeError('Cannot convert "' + Gr(pe) + '" to ' + this.name);
					return pe
				},
				argPackAdvance: 8,
				readValueFromPointer: un(T, re),
				destructorFunction: null
			})
		}

		function Cn(g) {
			for (; g.length;) {
				var T = g.pop(),
					L = g.pop();
				L(T)
			}
		}

		function Zn(g, T, L, re, le) {
			var pe = T.length;
			pe < 2 && wr("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var A = T[1] !== null && L !== null, S = !1, M = 1; M < T.length; ++M)
				if (T[M] !== null && T[M].destructorFunction === void 0) {
					S = !0;
					break
				} var ie = T[0].name !== "void",
				w = pe - 2,
				E = new Array(w),
				j = [],
				Q = [];
			return function() {
				arguments.length !== w && wr("function " + g + " called with " + arguments.length + " arguments, expected " + w + " args!"), Q.length = 0;
				var ue;
				j.length = A ? 2 : 1, j[0] = le, A && (ue = T[1].toWireType(Q, this), j[1] = ue);
				for (var y = 0; y < w; ++y) E[y] = T[y + 2].toWireType(Q, arguments[y]), j.push(E[y]);
				var R = re.apply(null, j);
				if (S) Cn(Q);
				else
					for (var y = A ? 1 : 2; y < T.length; y++) {
						var c = y === 1 ? ue : E[y - 2];
						T[y].destructorFunction !== null && T[y].destructorFunction(c)
					}
				if (ie) return T[0].fromWireType(R)
			}
		}

		function hn(g, T, L) {
			if (g[T].overloadTable === void 0) {
				var re = g[T];
				g[T] = function() {
					return g[T].overloadTable.hasOwnProperty(arguments.length) || wr("Function '" + L + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + g[T].overloadTable + ")!"), g[T].overloadTable[arguments.length].apply(this, arguments)
				}, g[T].overloadTable = [], g[T].overloadTable[re.argCount] = re
			}
		}

		function mn(g, T, L) {
			r.hasOwnProperty(g) ? ((L === void 0 || r[g].overloadTable !== void 0 && r[g].overloadTable[L] !== void 0) && wr("Cannot register public name '" + g + "' twice"), hn(r, g, g), r.hasOwnProperty(L) && wr("Cannot register multiple overloads of a function with the same number of arguments (" + L + ")!"), r[g].overloadTable[L] = T) : (r[g] = T, L !== void 0 && (r[g].numArguments = L))
		}

		function jr(g, T) {
			for (var L = [], re = 0; re < g; re++) L.push(qe[(T >> 2) + re]);
			return L
		}

		function Hr(g, T, L) {
			r.hasOwnProperty(g) || Ur("Replacing nonexistant public symbol"), r[g].overloadTable !== void 0 && L !== void 0 ? r[g].overloadTable[L] = T : (r[g] = T, r[g].argCount = L)
		}

		function Pn(g, T, L) {
			var re = r["dynCall_" + g];
			return L && L.length ? re.apply(null, [T].concat(L)) : re.call(null, T)
		}

		function xn(g, T, L) {
			return g.includes("j") ? Pn(g, T, L) : Ze.get(T).apply(null, L)
		}

		function Fn(g, T) {
			var L = [];
			return function() {
				L.length = arguments.length;
				for (var re = 0; re < arguments.length; re++) L[re] = arguments[re];
				return xn(g, T, L)
			}
		}

		function In(g, T) {
			g = Rr(g);

			function L() {
				return g.includes("j") ? Fn(g, T) : Ze.get(T)
			}
			var re = L();
			return typeof re != "function" && wr("unknown function pointer with signature " + g + ": " + T), re
		}
		var Wn = void 0;

		function Un(g) {
			var T = Fe(g),
				L = Rr(T);
			return be(T), L
		}

		function Vn(g, T) {
			var L = [],
				re = {};

			function le(pe) {
				if (!re[pe] && !pr[pe]) {
					if (on[pe]) {
						on[pe].forEach(le);
						return
					}
					L.push(pe), re[pe] = !0
				}
			}
			throw T.forEach(le), new Wn(g + ": " + L.map(Un).join([", "]))
		}

		function Jn(g, T, L, re, le, pe) {
			var A = jr(T, L);
			g = Rr(g), le = In(re, le), mn(g, function() {
				Vn("Cannot call " + g + " due to unbound types", A)
			}, T - 1), lr([], A, function(S) {
				var M = [S[0], null].concat(S.slice(1));
				return Hr(g, Zn(g, M, null, le, pe), T - 1), []
			})
		}

		function ct(g, T, L) {
			switch (T) {
				case 0:
					return L ? function(le) {
						return zr[le]
					} : function(le) {
						return Pe[le]
					};
				case 1:
					return L ? function(le) {
						return ze[le >> 1]
					} : function(le) {
						return Ge[le >> 1]
					};
				case 2:
					return L ? function(le) {
						return qe[le >> 2]
					} : function(le) {
						return tr[le >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + g)
			}
		}

		function zn(g, T, L, re, le) {
			T = Rr(T), le === -1 && (le = 4294967295);
			var pe = Zr(L),
				A = function(ie) {
					return ie
				};
			if (re === 0) {
				var S = 32 - 8 * L;
				A = function(ie) {
					return ie << S >>> S
				}
			}
			var M = T.includes("unsigned");
			we(g, {
				name: T,
				fromWireType: A,
				toWireType: function(ie, w) {
					if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + Gr(w) + '" to ' + this.name);
					if (w < re || w > le) throw new TypeError('Passing a number "' + Gr(w) + '" from JS side to C/C++ side to an argument of type "' + T + '", which is outside the valid range [' + re + ", " + le + "]!");
					return M ? w >>> 0 : w | 0
				},
				argPackAdvance: 8,
				readValueFromPointer: ct(T, pe, re !== 0),
				destructorFunction: null
			})
		}

		function Bn(g, T, L) {
			var re = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				le = re[T];

			function pe(A) {
				A = A >> 2;
				var S = tr,
					M = S[A],
					ie = S[A + 1];
				return new le(Ne, ie, M)
			}
			L = Rr(L), we(g, {
				name: L,
				fromWireType: pe,
				argPackAdvance: 8,
				readValueFromPointer: pe
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function dt(g, T) {
			T = Rr(T);
			var L = T === "std::string";
			we(g, {
				name: T,
				fromWireType: function(re) {
					var le = tr[re >> 2],
						pe;
					if (L)
						for (var A = re + 4, S = 0; S <= le; ++S) {
							var M = re + 4 + S;
							if (S == le || Pe[M] == 0) {
								var ie = M - A,
									w = Te(A, ie);
								pe === void 0 ? pe = w : (pe += "\0", pe += w), A = M + 1
							}
						} else {
							for (var E = new Array(le), S = 0; S < le; ++S) E[S] = String.fromCharCode(Pe[re + 4 + S]);
							pe = E.join("")
						}
					return be(re), pe
				},
				toWireType: function(re, le) {
					le instanceof ArrayBuffer && (le = new Uint8Array(le));
					var pe, A = typeof le == "string";
					A || le instanceof Uint8Array || le instanceof Uint8ClampedArray || le instanceof Int8Array || wr("Cannot pass non-string to std::string"), L && A ? pe = function() {
						return Ae(le)
					} : pe = function() {
						return le.length
					};
					var S = pe(),
						M = ge(4 + S + 1);
					if (tr[M >> 2] = S, L && A) je(le, M + 4, S + 1);
					else if (A)
						for (var ie = 0; ie < S; ++ie) {
							var w = le.charCodeAt(ie);
							w > 255 && (be(M), wr("String has UTF-16 code units that do not fit in 8 bits")), Pe[M + 4 + ie] = w
						} else
							for (var ie = 0; ie < S; ++ie) Pe[M + 4 + ie] = le[ie];
					return re !== null && re.push(be, M), M
				},
				argPackAdvance: 8,
				readValueFromPointer: Ln,
				destructorFunction: function(re) {
					be(re)
				}
			})
		}

		function et(g, T, L) {
			L = Rr(L);
			var re, le, pe, A, S;
			T === 2 ? (re = Ve, le = $e, A = Me, pe = function() {
				return Ge
			}, S = 1) : T === 4 && (re = xe, le = ke, A = sr, pe = function() {
				return tr
			}, S = 2), we(g, {
				name: L,
				fromWireType: function(M) {
					for (var ie = tr[M >> 2], w = pe(), E, j = M + 4, Q = 0; Q <= ie; ++Q) {
						var ue = M + 4 + Q * T;
						if (Q == ie || w[ue >> S] == 0) {
							var y = ue - j,
								R = re(j, y);
							E === void 0 ? E = R : (E += "\0", E += R), j = ue + T
						}
					}
					return be(M), E
				},
				toWireType: function(M, ie) {
					typeof ie != "string" && wr("Cannot pass non-string to C++ string type " + L);
					var w = A(ie),
						E = ge(4 + w + T);
					return tr[E >> 2] = w >> S, le(ie, E + 4, w + T), M !== null && M.push(be, E), E
				},
				argPackAdvance: 8,
				readValueFromPointer: Ln,
				destructorFunction: function(M) {
					be(M)
				}
			})
		}

		function Pr(g, T) {
			T = Rr(T), we(g, {
				isVoid: !0,
				name: T,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(L, re) {}
			})
		}
		var tt = {};

		function ar(g) {
			var T = tt[g];
			return T === void 0 ? Rr(g) : T
		}

		function qr() {
			if (typeof globalThis == "object") return globalThis;

			function g(T) {
				T.$$$embind_global$$$ = T;
				var L = typeof $$$embind_global$$$ == "object" && T.$$$embind_global$$$ === T;
				return L || delete T.$$$embind_global$$$, L
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && g(global) ? $$$embind_global$$$ = global : typeof self == "object" && g(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function sn(g) {
			return g === 0 ? Kr(qr()) : (g = ar(g), Kr(qr()[g]))
		}

		function gn(g) {
			g > 4 && (Re[g].refcount += 1)
		}

		function Vr(g, T) {
			var L = pr[g];
			return L === void 0 && wr(T + " has unknown type " + Un(g)), L
		}

		function Yn(g) {
			var T = new Array(g + 1);
			return function(L, re, le) {
				T[0] = L;
				for (var pe = 0; pe < g; ++pe) {
					var A = Vr(qe[(re >> 2) + pe], "parameter " + pe);
					T[pe + 1] = A.readValueFromPointer(le), le += A.argPackAdvance
				}
				var S = new(L.bind.apply(L, T));
				return Kr(S)
			}
		}
		var _n = {};

		function rt(g) {
			return g || wr("Cannot use deleted val. handle = " + g), Re[g].value
		}

		function at(g, T, L, re) {
			g = rt(g);
			var le = _n[T];
			return le || (le = Yn(T), _n[T] = le), le(g, L, re)
		}

		function Tn() {
			Ir()
		}

		function mt(g, T) {
			throw u(g, T || 1), "longjmp"
		}

		function Gn(g, T) {
			return mt(g, T)
		}

		function ut(g, T, L) {
			Pe.copyWithin(g, T, T + L)
		}

		function Qn(g) {
			try {
				return G.grow(g - Ne.byteLength + 65535 >>> 16), nn(G.buffer), 1
			} catch {}
		}

		function $n(g) {
			var T = Pe.length;
			g = g >>> 0;
			var L = 2147483648;
			if (g > L) return !1;
			for (var re = 1; re <= 4; re *= 2) {
				var le = T * (1 + .2 / re);
				le = Math.min(le, g + 100663296);
				var pe = Math.min(L, Be(Math.max(g, le), 65536)),
					A = Qn(pe);
				if (A) return !0
			}
			return !1
		}
		var nt = {
			mappings: {},
			buffers: [null, [],
				[]
			],
			printChar: function(g, T) {
				var L = nt.buffers[g];
				T === 0 || T === 10 ? ((g === 1 ? ae : ce)(Ee(L, 0)), L.length = 0) : L.push(T)
			},
			varargs: void 0,
			get: function() {
				nt.varargs += 4;
				var g = qe[nt.varargs - 4 >> 2];
				return g
			},
			getStr: function(g) {
				var T = Te(g);
				return T
			},
			get64: function(g, T) {
				return g
			}
		};

		function lt(g) {
			return 0
		}

		function it(g, T, L, re, le) {}

		function pt(g, T, L, re) {
			for (var le = 0, pe = 0; pe < L; pe++) {
				for (var A = qe[T + pe * 8 >> 2], S = qe[T + (pe * 8 + 4) >> 2], M = 0; M < S; M++) nt.printChar(g, Pe[A + M]);
				le += S
			}
			return qe[re >> 2] = le, 0
		}

		function x() {
			return Qe()
		}

		function I(g) {
			Ce(g)
		}
		Cr(), Je = r.BindingError = mr(Error, "BindingError"), hr = r.InternalError = mr(Error, "InternalError"), Lr(), Wn = r.UnboundTypeError = mr(Error, "UnboundTypeError");
		var J = {
			j: Or,
			v: Wr,
			r: Rn,
			B: Hn,
			q: Xn,
			t: Jn,
			e: zn,
			d: Bn,
			m: dt,
			l: et,
			s: Pr,
			h: an,
			i: sn,
			n: gn,
			o: at,
			a: Tn,
			g: Gn,
			y: ut,
			k: $n,
			z: lt,
			u: it,
			A: pt,
			b: x,
			f: $,
			w: D,
			p: C,
			x: v,
			c: I
		};
		cr(), r.___wasm_call_ctors = function() {
			return (r.___wasm_call_ctors = r.asm.D).apply(null, arguments)
		};
		var ge = r._malloc = function() {
				return (ge = r._malloc = r.asm.E).apply(null, arguments)
			},
			be = r._free = function() {
				return (be = r._free = r.asm.F).apply(null, arguments)
			},
			Fe = r.___getTypeName = function() {
				return (Fe = r.___getTypeName = r.asm.G).apply(null, arguments)
			};
		r.___embind_register_native_and_builtin_types = function() {
			return (r.___embind_register_native_and_builtin_types = r.asm.H).apply(null, arguments)
		};
		var P = r.stackSave = function() {
				return (P = r.stackSave = r.asm.I).apply(null, arguments)
			},
			i = r.stackRestore = function() {
				return (i = r.stackRestore = r.asm.J).apply(null, arguments)
			},
			u = r._setThrew = function() {
				return (u = r._setThrew = r.asm.K).apply(null, arguments)
			};
		r.dynCall_iiijii = function() {
			return (r.dynCall_iiijii = r.asm.M).apply(null, arguments)
		}, r.dynCall_jiji = function() {
			return (r.dynCall_jiji = r.asm.N).apply(null, arguments)
		};

		function v(g, T, L, re, le, pe, A, S) {
			var M = P();
			try {
				Ze.get(g)(T, L, re, le, pe, A, S)
			} catch (ie) {
				if (i(M), ie !== ie + 0 && ie !== "longjmp") throw ie;
				u(1, 0)
			}
		}

		function C(g, T, L, re, le) {
			var pe = P();
			try {
				Ze.get(g)(T, L, re, le)
			} catch (A) {
				if (i(pe), A !== A + 0 && A !== "longjmp") throw A;
				u(1, 0)
			}
		}

		function $(g, T, L) {
			var re = P();
			try {
				return Ze.get(g)(T, L)
			} catch (le) {
				if (i(re), le !== le + 0 && le !== "longjmp") throw le;
				u(1, 0)
			}
		}

		function D(g, T, L, re, le) {
			var pe = P();
			try {
				return Ze.get(g)(T, L, re, le)
			} catch (A) {
				if (i(pe), A !== A + 0 && A !== "longjmp") throw A;
				u(1, 0)
			}
		}
		var V;
		dn = function g() {
			V || B(), V || (dn = g)
		};

		function B(g) {
			if ($r > 0 || (On(), $r > 0)) return;

			function T() {
				V || (V = !0, r.calledRun = !0, !q && (or(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), yr()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), T()
			}, 1)) : T()
		}
		if (r.run = B, r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return B(), r.ready
	}
}();
const Jg = globalThis.ServiceWorkerGlobalScope !== void 0,
	e_ = Jg && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
	r_ = typeof process == "object" && process.release && process.release.name === "node";
(e_ || r_) && (globalThis.ImageData || (globalThis.ImageData = class {
	constructor(n, r, t) {
		this.data = n, this.width = r, this.height = t
	}
}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
	href: ""
}));
let hf;
async function n_(e, n) {
	hf = vf(Zg, e, n)
}
async function Kv(e) {
	hf || n_();
	const r = (await hf).decode(e);
	if (!r) throw new Error("Decoding error");
	return r
}
const t_ = Object.freeze(Object.defineProperty({
	__proto__: null,
	decode: Kv,
	encode: Qv
}, Symbol.toStringTag, {
	value: "Module"
}));
var i_ = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(w, E) {
			t = w, o = E
		});
		const p = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
			k = typeof process == "object" && process.release && process.release.name === "node";
		(p || k) && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(E, j, Q) {
				this.data = E, this.width = j, this.height = Q
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
			href: ""
		}));
		var U = Object.assign({}, r),
			K = "./this.program",
			f = (w, E) => {
				throw E
			},
			te = typeof window == "object",
			ae = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var ce = "";

		function _e(w) {
			return r.locateFile ? r.locateFile(w, ce) : ce + w
		}
		var Ce;
		(te || ae) && (ae ? ce = self.location.href : typeof document < "u" && document.currentScript && (ce = document.currentScript.src), e && (ce = e), ce.indexOf("blob:") !== 0 ? ce = ce.substr(0, ce.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ce = "", ae && (Ce = w => {
			var E = new XMLHttpRequest;
			return E.open("GET", w, !1), E.responseType = "arraybuffer", E.send(null), new Uint8Array(E.response)
		}));
		var Qe = r.print || console.log.bind(console),
			Z = r.printErr || console.warn.bind(console);
		Object.assign(r, U), U = null, r.arguments && r.arguments, r.thisProgram && (K = r.thisProgram), r.quit && (f = r.quit);
		var G;
		r.wasmBinary && (G = r.wasmBinary);
		var q = r.noExitRuntime || !0;
		typeof WebAssembly != "object" && $r("no native wasm support detected");
		var Ee, Te = !1;

		function Ue(w, E, j) {
			for (var Q = E + j, ue = ""; !(E >= Q);) {
				var y = w[E++];
				if (!y) return ue;
				if (!(y & 128)) {
					ue += String.fromCharCode(y);
					continue
				}
				var R = w[E++] & 63;
				if ((y & 224) == 192) {
					ue += String.fromCharCode((y & 31) << 6 | R);
					continue
				}
				var c = w[E++] & 63;
				if ((y & 240) == 224 ? y = (y & 15) << 12 | R << 6 | c : y = (y & 7) << 18 | R << 12 | c << 6 | w[E++] & 63, y < 65536) ue += String.fromCharCode(y);
				else {
					var h = y - 65536;
					ue += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023)
				}
			}
			return ue
		}

		function je(w, E) {
			return w ? Ue(xe, w, E) : ""
		}

		function Ae(w, E, j, Q) {
			if (!(Q > 0)) return 0;
			for (var ue = j, y = j + Q - 1, R = 0; R < w.length; ++R) {
				var c = w.charCodeAt(R);
				if (c >= 55296 && c <= 57343) {
					var h = w.charCodeAt(++R);
					c = 65536 + ((c & 1023) << 10) | h & 1023
				}
				if (c <= 127) {
					if (j >= y) break;
					E[j++] = c
				} else if (c <= 2047) {
					if (j + 1 >= y) break;
					E[j++] = 192 | c >> 6, E[j++] = 128 | c & 63
				} else if (c <= 65535) {
					if (j + 2 >= y) break;
					E[j++] = 224 | c >> 12, E[j++] = 128 | c >> 6 & 63, E[j++] = 128 | c & 63
				} else {
					if (j + 3 >= y) break;
					E[j++] = 240 | c >> 18, E[j++] = 128 | c >> 12 & 63, E[j++] = 128 | c >> 6 & 63, E[j++] = 128 | c & 63
				}
			}
			return E[j] = 0, j - ue
		}

		function Ve(w, E, j) {
			return Ae(w, xe, E, j)
		}

		function $e(w) {
			for (var E = 0, j = 0; j < w.length; ++j) {
				var Q = w.charCodeAt(j);
				Q <= 127 ? E++ : Q <= 2047 ? E += 2 : Q >= 55296 && Q <= 57343 ? (E += 4, ++j) : E += 3
			}
			return E
		}
		var Me, xe, ke, sr, Be, Ne, zr, Pe;

		function ze() {
			var w = Ee.buffer;
			r.HEAP8 = Me = new Int8Array(w), r.HEAP16 = ke = new Int16Array(w), r.HEAP32 = Be = new Int32Array(w), r.HEAPU8 = xe = new Uint8Array(w), r.HEAPU16 = sr = new Uint16Array(w), r.HEAPU32 = Ne = new Uint32Array(w), r.HEAPF32 = zr = new Float32Array(w), r.HEAPF64 = Pe = new Float64Array(w)
		}
		var Ge, qe = [],
			tr = [],
			Er = [],
			fn = 0;

		function nn() {
			return q || fn > 0
		}

		function Ze() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) wn(r.preRun.shift());
			cr(qe)
		}

		function Mr() {
			cr(tr)
		}

		function tn() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) or(r.postRun.shift());
			cr(Er)
		}

		function wn(w) {
			qe.unshift(w)
		}

		function On(w) {
			tr.unshift(w)
		}

		function or(w) {
			Er.unshift(w)
		}
		var yr = 0,
			Fr = null;

		function cn(w) {
			yr++, r.monitorRunDependencies && r.monitorRunDependencies(yr)
		}

		function En(w) {
			if (yr--, r.monitorRunDependencies && r.monitorRunDependencies(yr), yr == 0 && Fr) {
				var E = Fr;
				Fr = null, E()
			}
		}

		function $r(w) {
			r.onAbort && r.onAbort(w), w = "Aborted(" + w + ")", Z(w), Te = !0, w += ". Build with -sASSERTIONS for more info.";
			var E = new WebAssembly.RuntimeError(w);
			throw o(E), E
		}
		var dn = "data:application/octet-stream;base64,";

		function pn(w) {
			return w.startsWith(dn)
		}
		var Xr;
		r.locateFile ? (Xr = "mozjpeg_enc.wasm", pn(Xr) || (Xr = _e(Xr))) : Xr = new URL(location.href +"assets/mozjpeg_enc-vQJRyljW.wasm", import.meta.url).href;

		function Ir(w) {
			try {
				if (w == Xr && G) return new Uint8Array(G);
				if (Ce) return Ce(w);
				throw "both async and sync fetching of the wasm failed"
			} catch (E) {
				$r(E)
			}
		}

		function Mn(w) {
			return !G && (te || ae) && typeof fetch == "function" ? fetch(w, {
				credentials: "same-origin"
			}).then(function(E) {
				if (!E.ok) throw "failed to load wasm binary file at '" + w + "'";
				return E.arrayBuffer()
			}).catch(function() {
				return Ir(w)
			}) : Promise.resolve().then(function() {
				return Ir(w)
			})
		}

		function Dr(w, E, j) {
			return Mn(w).then(function(Q) {
				return WebAssembly.instantiate(Q, E)
			}).then(function(Q) {
				return Q
			}).then(j, function(Q) {
				Z("failed to asynchronously prepare wasm: " + Q), $r(Q)
			})
		}

		function Tr(w, E, j, Q) {
			return !w && typeof WebAssembly.instantiateStreaming == "function" && !pn(E) && typeof fetch == "function" ? fetch(E, {
				credentials: "same-origin"
			}).then(function(ue) {
				var y = WebAssembly.instantiateStreaming(ue, j);
				return y.then(Q, function(R) {
					return Z("wasm streaming compile failed: " + R), Z("falling back to ArrayBuffer instantiation"), Dr(E, j, Q)
				})
			}) : Dr(E, j, Q)
		}

		function bn() {
			var w = {
				a: re
			};

			function E(Q, ue) {
				var y = Q.exports;
				return r.asm = y, Ee = r.asm.B, ze(), Ge = r.asm.H, On(r.asm.C), En(), y
			}
			cn();

			function j(Q) {
				E(Q.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(w, E)
			} catch (Q) {
				Z("Module.instantiateWasm callback failed with error: " + Q), o(Q)
			}
			return Tr(G, Xr, w, j).catch(o), {}
		}

		function Ar(w) {
			this.name = "ExitStatus", this.message = "Program terminated with exit(" + w + ")", this.status = w
		}

		function cr(w) {
			for (; w.length > 0;) w.shift()(r)
		}

		function en(w) {
			this.excPtr = w, this.ptr = w - 24, this.set_type = function(E) {
				Ne[this.ptr + 4 >> 2] = E
			}, this.get_type = function() {
				return Ne[this.ptr + 4 >> 2]
			}, this.set_destructor = function(E) {
				Ne[this.ptr + 8 >> 2] = E
			}, this.get_destructor = function() {
				return Ne[this.ptr + 8 >> 2]
			}, this.set_refcount = function(E) {
				Be[this.ptr >> 2] = E
			}, this.set_caught = function(E) {
				E = E ? 1 : 0, Me[this.ptr + 12 >> 0] = E
			}, this.get_caught = function() {
				return Me[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(E) {
				E = E ? 1 : 0, Me[this.ptr + 13 >> 0] = E
			}, this.get_rethrown = function() {
				return Me[this.ptr + 13 >> 0] != 0
			}, this.init = function(E, j) {
				this.set_adjusted_ptr(0), this.set_type(E), this.set_destructor(j), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var E = Be[this.ptr >> 2];
				Be[this.ptr >> 2] = E + 1
			}, this.release_ref = function() {
				var E = Be[this.ptr >> 2];
				return Be[this.ptr >> 2] = E - 1, E === 1
			}, this.set_adjusted_ptr = function(E) {
				Ne[this.ptr + 16 >> 2] = E
			}, this.get_adjusted_ptr = function() {
				return Ne[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var E = S(this.get_type());
				if (E) return Ne[this.excPtr >> 2];
				var j = this.get_adjusted_ptr();
				return j !== 0 ? j : this.excPtr
			}
		}

		function Qr(w, E, j) {
			var Q = new en(w);
			throw Q.init(E, j), w
		}
		var Or = {};

		function Wr(w) {
			for (; w.length;) {
				var E = w.pop(),
					j = w.pop();
				j(E)
			}
		}

		function Zr(w) {
			return this.fromWireType(Be[w >> 2])
		}
		var Cr = {},
			kr = {},
			Rr = {},
			Jr = 48,
			pr = 57;

		function on(w) {
			if (w === void 0) return "_unknown";
			w = w.replace(/[^a-zA-Z0-9_]/g, "$");
			var E = w.charCodeAt(0);
			return E >= Jr && E <= pr ? "_" + w : w
		}

		function br(w, E) {
			return w = on(w), {
				[w]: function() {
					return E.apply(this, arguments)
				}
			} [w]
		}

		function xr(w, E) {
			var j = br(E, function(Q) {
				this.name = E, this.message = Q;
				var ue = new Error(Q).stack;
				ue !== void 0 && (this.stack = this.toString() + `
` + ue.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return j.prototype = Object.create(w.prototype), j.prototype.constructor = j, j.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, j
		}
		var Sr = void 0;

		function Br(w) {
			throw new Sr(w)
		}

		function mr(w, E, j) {
			w.forEach(function(c) {
				Rr[c] = E
			});

			function Q(c) {
				var h = j(c);
				h.length !== w.length && Br("Mismatched type converter count");
				for (var b = 0; b < w.length; ++b) Re(w[b], h[b])
			}
			var ue = new Array(E.length),
				y = [],
				R = 0;
			E.forEach((c, h) => {
				kr.hasOwnProperty(c) ? ue[h] = kr[c] : (y.push(c), Cr.hasOwnProperty(c) || (Cr[c] = []), Cr[c].push(() => {
					ue[h] = kr[c], ++R, R === y.length && Q(ue)
				}))
			}), y.length === 0 && Q(ue)
		}

		function Je(w) {
			var E = Or[w];
			delete Or[w];
			var j = E.rawConstructor,
				Q = E.rawDestructor,
				ue = E.fields,
				y = ue.map(R => R.getterReturnType).concat(ue.map(R => R.setterArgumentType));
			mr([w], y, R => {
				var c = {};
				return ue.forEach((h, b) => {
					var W = h.fieldName,
						H = R[b],
						Y = h.getter,
						fe = h.getterContext,
						he = R[b + ue.length],
						ye = h.setter,
						Oe = h.setterContext;
					c[W] = {
						read: ir => H.fromWireType(Y(fe, ir)),
						write: (ir, ur) => {
							var Xe = [];
							ye(Oe, ir, he.toWireType(Xe, ur)), Wr(Xe)
						}
					}
				}), [{
					name: E.name,
					fromWireType: function(h) {
						var b = {};
						for (var W in c) b[W] = c[W].read(h);
						return Q(h), b
					},
					toWireType: function(h, b) {
						for (var W in c)
							if (!(W in b)) throw new TypeError('Missing field:  "' + W + '"');
						var H = j();
						for (W in c) c[W].write(H, b[W]);
						return h !== null && h.push(Q, H), H
					},
					argPackAdvance: 8,
					readValueFromPointer: Zr,
					destructorFunction: Q
				}]
			})
		}

		function wr(w, E, j, Q, ue) {}

		function hr(w) {
			switch (w) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + w)
			}
		}

		function Ur() {
			for (var w = new Array(256), E = 0; E < 256; ++E) w[E] = String.fromCharCode(E);
			lr = w
		}
		var lr = void 0;

		function we(w) {
			for (var E = "", j = w; xe[j];) E += lr[xe[j++]];
			return E
		}
		var Rn = void 0;

		function dr(w) {
			throw new Rn(w)
		}

		function Re(w, E, j = {}) {
			if (!("argPackAdvance" in E)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var Q = E.name;
			if (w || dr('type "' + Q + '" must have a positive integer typeid pointer'), kr.hasOwnProperty(w)) {
				if (j.ignoreDuplicateRegistrations) return;
				dr("Cannot register type '" + Q + "' twice")
			}
			if (kr[w] = E, delete Rr[w], Cr.hasOwnProperty(w)) {
				var ue = Cr[w];
				delete Cr[w], ue.forEach(y => y())
			}
		}

		function an(w, E, j, Q, ue) {
			var y = hr(j);
			E = we(E), Re(w, {
				name: E,
				fromWireType: function(R) {
					return !!R
				},
				toWireType: function(R, c) {
					return c ? Q : ue
				},
				argPackAdvance: 8,
				readValueFromPointer: function(R) {
					var c;
					if (j === 1) c = Me;
					else if (j === 2) c = ke;
					else if (j === 4) c = Be;
					else throw new TypeError("Unknown boolean type size: " + E);
					return this.fromWireType(c[R >> y])
				},
				destructorFunction: null
			})
		}
		var Yr = [],
			vn = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function Lr(w) {
			w > 4 && --vn[w].refcount === 0 && (vn[w] = void 0, Yr.push(w))
		}

		function Kr() {
			for (var w = 0, E = 5; E < vn.length; ++E) vn[E] !== void 0 && ++w;
			return w
		}

		function Ln() {
			for (var w = 5; w < vn.length; ++w)
				if (vn[w] !== void 0) return vn[w];
			return null
		}

		function Hn() {
			r.count_emval_handles = Kr, r.get_first_emval = Ln
		}
		var Gr = {
			toValue: w => (w || dr("Cannot use deleted val. handle = " + w), vn[w].value),
			toHandle: w => {
				switch (w) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var E = Yr.length ? Yr.pop() : vn.length;
						return vn[E] = {
							refcount: 1,
							value: w
						}, E
					}
				}
			}
		};

		function un(w, E) {
			E = we(E), Re(w, {
				name: E,
				fromWireType: function(j) {
					var Q = Gr.toValue(j);
					return Lr(j), Q
				},
				toWireType: function(j, Q) {
					return Gr.toHandle(Q)
				},
				argPackAdvance: 8,
				readValueFromPointer: Zr,
				destructorFunction: null
			})
		}

		function Xn(w, E) {
			switch (E) {
				case 2:
					return function(j) {
						return this.fromWireType(zr[j >> 2])
					};
				case 3:
					return function(j) {
						return this.fromWireType(Pe[j >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + w)
			}
		}

		function Cn(w, E, j) {
			var Q = hr(j);
			E = we(E), Re(w, {
				name: E,
				fromWireType: function(ue) {
					return ue
				},
				toWireType: function(ue, y) {
					return y
				},
				argPackAdvance: 8,
				readValueFromPointer: Xn(E, Q),
				destructorFunction: null
			})
		}

		function Zn(w, E, j, Q, ue, y) {
			var R = E.length;
			R < 2 && dr("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var c = E[1] !== null && j !== null, h = !1, b = 1; b < E.length; ++b)
				if (E[b] !== null && E[b].destructorFunction === void 0) {
					h = !0;
					break
				} var W = E[0].name !== "void",
				H = R - 2,
				Y = new Array(H),
				fe = [],
				he = [];
			return function() {
				arguments.length !== H && dr("function " + w + " called with " + arguments.length + " arguments, expected " + H + " args!"), he.length = 0;
				var ye;
				fe.length = c ? 2 : 1, fe[0] = ue, c && (ye = E[1].toWireType(he, this), fe[1] = ye);
				for (var Oe = 0; Oe < H; ++Oe) Y[Oe] = E[Oe + 2].toWireType(he, arguments[Oe]), fe.push(Y[Oe]);
				var ir = Q.apply(null, fe);

				function ur(Xe) {
					if (h) Wr(he);
					else
						for (var He = c ? 1 : 2; He < E.length; He++) {
							var Kn = He === 1 ? ye : Y[He - 2];
							E[He].destructorFunction !== null && E[He].destructorFunction(Kn)
						}
					if (W) return E[0].fromWireType(Xe)
				}
				return ur(ir)
			}
		}

		function hn(w, E, j) {
			if (w[E].overloadTable === void 0) {
				var Q = w[E];
				w[E] = function() {
					return w[E].overloadTable.hasOwnProperty(arguments.length) || dr("Function '" + j + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + w[E].overloadTable + ")!"), w[E].overloadTable[arguments.length].apply(this, arguments)
				}, w[E].overloadTable = [], w[E].overloadTable[Q.argCount] = Q
			}
		}

		function mn(w, E, j) {
			r.hasOwnProperty(w) ? ((j === void 0 || r[w].overloadTable !== void 0 && r[w].overloadTable[j] !== void 0) && dr("Cannot register public name '" + w + "' twice"), hn(r, w, w), r.hasOwnProperty(j) && dr("Cannot register multiple overloads of a function with the same number of arguments (" + j + ")!"), r[w].overloadTable[j] = E) : (r[w] = E, j !== void 0 && (r[w].numArguments = j))
		}

		function jr(w, E) {
			for (var j = [], Q = 0; Q < w; Q++) j.push(Ne[E + Q * 4 >> 2]);
			return j
		}

		function Hr(w, E, j) {
			r.hasOwnProperty(w) || Br("Replacing nonexistant public symbol"), r[w].overloadTable !== void 0 && j !== void 0 ? r[w].overloadTable[j] = E : (r[w] = E, r[w].argCount = j)
		}

		function Pn(w, E, j) {
			var Q = r["dynCall_" + w];
			return j && j.length ? Q.apply(null, [E].concat(j)) : Q.call(null, E)
		}
		var xn = [];

		function Fn(w) {
			var E = xn[w];
			return E || (w >= xn.length && (xn.length = w + 1), xn[w] = E = Ge.get(w)), E
		}

		function In(w, E, j) {
			if (w.includes("j")) return Pn(w, E, j);
			var Q = Fn(E).apply(null, j);
			return Q
		}

		function Wn(w, E) {
			var j = [];
			return function() {
				return j.length = 0, Object.assign(j, arguments), In(w, E, j)
			}
		}

		function Un(w, E) {
			w = we(w);

			function j() {
				return w.includes("j") ? Wn(w, E) : Fn(E)
			}
			var Q = j();
			return typeof Q != "function" && dr("unknown function pointer with signature " + w + ": " + E), Q
		}
		var Vn = void 0;

		function Jn(w) {
			var E = A(w),
				j = we(E);
			return pe(E), j
		}

		function ct(w, E) {
			var j = [],
				Q = {};

			function ue(y) {
				if (!Q[y] && !kr[y]) {
					if (Rr[y]) {
						Rr[y].forEach(ue);
						return
					}
					j.push(y), Q[y] = !0
				}
			}
			throw E.forEach(ue), new Vn(w + ": " + j.map(Jn).join([", "]))
		}

		function zn(w, E, j, Q, ue, y, R) {
			var c = jr(E, j);
			w = we(w), ue = Un(Q, ue), mn(w, function() {
				ct("Cannot call " + w + " due to unbound types", c)
			}, E - 1), mr([], c, function(h) {
				var b = [h[0], null].concat(h.slice(1));
				return Hr(w, Zn(w, b, null, ue, y), E - 1), []
			})
		}

		function Bn(w, E, j) {
			switch (E) {
				case 0:
					return j ? function(ue) {
						return Me[ue]
					} : function(ue) {
						return xe[ue]
					};
				case 1:
					return j ? function(ue) {
						return ke[ue >> 1]
					} : function(ue) {
						return sr[ue >> 1]
					};
				case 2:
					return j ? function(ue) {
						return Be[ue >> 2]
					} : function(ue) {
						return Ne[ue >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + w)
			}
		}

		function dt(w, E, j, Q, ue) {
			E = we(E);
			var y = hr(j),
				R = H => H;
			if (Q === 0) {
				var c = 32 - 8 * j;
				R = H => H << c >>> c
			}
			var h = E.includes("unsigned"),
				b = (H, Y) => {},
				W;
			h ? W = function(H, Y) {
				return b(Y, this.name), Y >>> 0
			} : W = function(H, Y) {
				return b(Y, this.name), Y
			}, Re(w, {
				name: E,
				fromWireType: R,
				toWireType: W,
				argPackAdvance: 8,
				readValueFromPointer: Bn(E, y, Q !== 0),
				destructorFunction: null
			})
		}

		function et(w, E, j) {
			var Q = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				ue = Q[E];

			function y(R) {
				R = R >> 2;
				var c = Ne,
					h = c[R],
					b = c[R + 1];
				return new ue(c.buffer, b, h)
			}
			j = we(j), Re(w, {
				name: j,
				fromWireType: y,
				argPackAdvance: 8,
				readValueFromPointer: y
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function Pr(w, E) {
			E = we(E);
			var j = E === "std::string";
			Re(w, {
				name: E,
				fromWireType: function(Q) {
					var ue = Ne[Q >> 2],
						y = Q + 4,
						R;
					if (j)
						for (var c = y, h = 0; h <= ue; ++h) {
							var b = y + h;
							if (h == ue || xe[b] == 0) {
								var W = b - c,
									H = je(c, W);
								R === void 0 ? R = H : (R += "\0", R += H), c = b + 1
							}
						} else {
							for (var Y = new Array(ue), h = 0; h < ue; ++h) Y[h] = String.fromCharCode(xe[y + h]);
							R = Y.join("")
						}
					return pe(Q), R
				},
				toWireType: function(Q, ue) {
					ue instanceof ArrayBuffer && (ue = new Uint8Array(ue));
					var y, R = typeof ue == "string";
					R || ue instanceof Uint8Array || ue instanceof Uint8ClampedArray || ue instanceof Int8Array || dr("Cannot pass non-string to std::string"), j && R ? y = $e(ue) : y = ue.length;
					var c = le(4 + y + 1),
						h = c + 4;
					if (Ne[c >> 2] = y, j && R) Ve(ue, h, y + 1);
					else if (R)
						for (var b = 0; b < y; ++b) {
							var W = ue.charCodeAt(b);
							W > 255 && (pe(h), dr("String has UTF-16 code units that do not fit in 8 bits")), xe[h + b] = W
						} else
							for (var b = 0; b < y; ++b) xe[h + b] = ue[b];
					return Q !== null && Q.push(pe, c), c
				},
				argPackAdvance: 8,
				readValueFromPointer: Zr,
				destructorFunction: function(Q) {
					pe(Q)
				}
			})
		}

		function tt(w, E) {
			for (var j = "", Q = 0; !(Q >= E / 2); ++Q) {
				var ue = ke[w + Q * 2 >> 1];
				if (ue == 0) break;
				j += String.fromCharCode(ue)
			}
			return j
		}

		function ar(w, E, j) {
			if (j === void 0 && (j = 2147483647), j < 2) return 0;
			j -= 2;
			for (var Q = E, ue = j < w.length * 2 ? j / 2 : w.length, y = 0; y < ue; ++y) {
				var R = w.charCodeAt(y);
				ke[E >> 1] = R, E += 2
			}
			return ke[E >> 1] = 0, E - Q
		}

		function qr(w) {
			return w.length * 2
		}

		function sn(w, E) {
			for (var j = 0, Q = ""; !(j >= E / 4);) {
				var ue = Be[w + j * 4 >> 2];
				if (ue == 0) break;
				if (++j, ue >= 65536) {
					var y = ue - 65536;
					Q += String.fromCharCode(55296 | y >> 10, 56320 | y & 1023)
				} else Q += String.fromCharCode(ue)
			}
			return Q
		}

		function gn(w, E, j) {
			if (j === void 0 && (j = 2147483647), j < 4) return 0;
			for (var Q = E, ue = Q + j - 4, y = 0; y < w.length; ++y) {
				var R = w.charCodeAt(y);
				if (R >= 55296 && R <= 57343) {
					var c = w.charCodeAt(++y);
					R = 65536 + ((R & 1023) << 10) | c & 1023
				}
				if (Be[E >> 2] = R, E += 4, E + 4 > ue) break
			}
			return Be[E >> 2] = 0, E - Q
		}

		function Vr(w) {
			for (var E = 0, j = 0; j < w.length; ++j) {
				var Q = w.charCodeAt(j);
				Q >= 55296 && Q <= 57343 && ++j, E += 4
			}
			return E
		}

		function Yn(w, E, j) {
			j = we(j);
			var Q, ue, y, R, c;
			E === 2 ? (Q = tt, ue = ar, R = qr, y = () => sr, c = 1) : E === 4 && (Q = sn, ue = gn, R = Vr, y = () => Ne, c = 2), Re(w, {
				name: j,
				fromWireType: function(h) {
					for (var b = Ne[h >> 2], W = y(), H, Y = h + 4, fe = 0; fe <= b; ++fe) {
						var he = h + 4 + fe * E;
						if (fe == b || W[he >> c] == 0) {
							var ye = he - Y,
								Oe = Q(Y, ye);
							H === void 0 ? H = Oe : (H += "\0", H += Oe), Y = he + E
						}
					}
					return pe(h), H
				},
				toWireType: function(h, b) {
					typeof b != "string" && dr("Cannot pass non-string to C++ string type " + j);
					var W = R(b),
						H = le(4 + W + E);
					return Ne[H >> 2] = W >> c, ue(b, H + 4, W + E), h !== null && h.push(pe, H), H
				},
				argPackAdvance: 8,
				readValueFromPointer: Zr,
				destructorFunction: function(h) {
					pe(h)
				}
			})
		}

		function _n(w, E, j, Q, ue, y) {
			Or[w] = {
				name: we(E),
				rawConstructor: Un(j, Q),
				rawDestructor: Un(ue, y),
				fields: []
			}
		}

		function rt(w, E, j, Q, ue, y, R, c, h, b) {
			Or[w].fields.push({
				fieldName: we(E),
				getterReturnType: j,
				getter: Un(Q, ue),
				getterContext: y,
				setterArgumentType: R,
				setter: Un(c, h),
				setterContext: b
			})
		}

		function at(w, E) {
			E = we(E), Re(w, {
				isVoid: !0,
				name: E,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(j, Q) {}
			})
		}
		var Tn = {};

		function mt(w) {
			var E = Tn[w];
			return E === void 0 ? we(w) : E
		}

		function Gn() {
			if (typeof globalThis == "object") return globalThis;

			function w(E) {
				E.$$$embind_global$$$ = E;
				var j = typeof $$$embind_global$$$ == "object" && E.$$$embind_global$$$ == E;
				return j || delete E.$$$embind_global$$$, j
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && w(global) ? $$$embind_global$$$ = global : typeof self == "object" && w(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function ut(w) {
			return w === 0 ? Gr.toHandle(Gn()) : (w = mt(w), Gr.toHandle(Gn()[w]))
		}

		function Qn(w) {
			w > 4 && (vn[w].refcount += 1)
		}

		function $n(w, E) {
			var j = kr[w];
			return j === void 0 && dr(E + " has unknown type " + Jn(w)), j
		}

		function nt(w) {
			var E = new Array(w + 1);
			return function(j, Q, ue) {
				E[0] = j;
				for (var y = 0; y < w; ++y) {
					var R = $n(Ne[Q + y * 4 >> 2], "parameter " + y);
					E[y + 1] = R.readValueFromPointer(ue), ue += R.argPackAdvance
				}
				var c = new(j.bind.apply(j, E));
				return Gr.toHandle(c)
			}
		}
		var lt = {};

		function it(w, E, j, Q) {
			w = Gr.toValue(w);
			var ue = lt[E];
			return ue || (ue = nt(E), lt[E] = ue), ue(w, j, Q)
		}

		function pt() {
			$r("")
		}

		function x(w, E, j) {
			xe.copyWithin(w, E, E + j)
		}

		function I() {
			return 2147483648
		}

		function J(w) {
			var E = Ee.buffer;
			try {
				return Ee.grow(w - E.byteLength + 65535 >>> 16), ze(), 1
			} catch {}
		}

		function ge(w) {
			var E = xe.length;
			w = w >>> 0;
			var j = I();
			if (w > j) return !1;
			let Q = (h, b) => h + (b - h % b) % b;
			for (var ue = 1; ue <= 4; ue *= 2) {
				var y = E * (1 + .2 / ue);
				y = Math.min(y, w + 100663296);
				var R = Math.min(j, Q(Math.max(w, y), 65536)),
					c = J(R);
				if (c) return !0
			}
			return !1
		}
		var be = {};

		function Fe() {
			return K || "./this.program"
		}

		function P() {
			if (!P.strings) {
				var w = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
					E = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: w,
						_: Fe()
					};
				for (var j in be) be[j] === void 0 ? delete E[j] : E[j] = be[j];
				var Q = [];
				for (var j in E) Q.push(j + "=" + E[j]);
				P.strings = Q
			}
			return P.strings
		}

		function i(w, E, j) {
			for (var Q = 0; Q < w.length; ++Q) Me[E++ >> 0] = w.charCodeAt(Q);
			Me[E >> 0] = 0
		}

		function u(w, E) {
			var j = 0;
			return P().forEach(function(Q, ue) {
				var y = E + j;
				Ne[w + ue * 4 >> 2] = y, i(Q, y), j += Q.length + 1
			}), 0
		}

		function v(w, E) {
			var j = P();
			Ne[w >> 2] = j.length;
			var Q = 0;
			return j.forEach(function(ue) {
				Q += ue.length + 1
			}), Ne[E >> 2] = Q, 0
		}

		function C(w) {
			nn() || (r.onExit && r.onExit(w), Te = !0), f(w, new Ar(w))
		}

		function $(w, E) {
			C(w)
		}
		var D = $;

		function V(w) {
			return 52
		}

		function B(w, E, j, Q, ue) {
			return 70
		}
		var g = [null, [],
			[]
		];

		function T(w, E) {
			var j = g[w];
			E === 0 || E === 10 ? ((w === 1 ? Qe : Z)(Ue(j, 0)), j.length = 0) : j.push(E)
		}

		function L(w, E, j, Q) {
			for (var ue = 0, y = 0; y < j; y++) {
				var R = Ne[E >> 2],
					c = Ne[E + 4 >> 2];
				E += 8;
				for (var h = 0; h < c; h++) T(w, xe[R + h]);
				ue += c
			}
			return Ne[Q >> 2] = ue, 0
		}
		Sr = r.InternalError = xr(Error, "InternalError"), Ur(), Rn = r.BindingError = xr(Error, "BindingError"), Hn(), Vn = r.UnboundTypeError = xr(Error, "UnboundTypeError");
		var re = {
			k: Qr,
			m: Je,
			p: wr,
			x: an,
			w: un,
			h: Cn,
			e: zn,
			c: dt,
			a: et,
			i: Pr,
			d: Yn,
			n: _n,
			b: rt,
			y: at,
			g: Lr,
			z: ut,
			l: Qn,
			j: it,
			f: pt,
			t: x,
			q: ge,
			r: u,
			s: v,
			A: D,
			u: V,
			o: B,
			v: L
		};
		bn();
		var le = function() {
				return (le = r.asm.D).apply(null, arguments)
			},
			pe = function() {
				return (pe = r.asm.E).apply(null, arguments)
			},
			A = r.___getTypeName = function() {
				return (A = r.___getTypeName = r.asm.F).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.G).apply(null, arguments)
		};
		var S = function() {
			return (S = r.asm.I).apply(null, arguments)
		};
		r.dynCall_jiji = function() {
			return (r.dynCall_jiji = r.asm.J).apply(null, arguments)
		};
		var M;
		Fr = function w() {
			M || ie(), M || (Fr = w)
		};

		function ie() {
			if (yr > 0 || (Ze(), yr > 0)) return;

			function w() {
				M || (M = !0, r.calledRun = !0, !Te && (Mr(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), tn()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), w()
			}, 1)) : w()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return ie(), r.ready
	}
})();
const o_ = {
	quality: 75,
	baseline: !1,
	arithmetic: !1,
	progressive: !0,
	optimize_coding: !0,
	smoothing: 0,
	color_space: 3,
	quant_table: 3,
	trellis_multipass: !1,
	trellis_opt_zero: !1,
	trellis_opt_table: !1,
	trellis_loops: 1,
	auto_subsample: !0,
	chroma_subsample: 2,
	separate_chroma_quality: !1,
	chroma_quality: 75
};

function qv(e, n, r = {}) {
	return e({
		noInitialRun: !0,
		instantiateWasm: void 0,
		...r
	})
}
let mf;
async function a_(e, n) {
	mf = qv(i_, e, n)
}
async function Xv(e, n = {}) {
	mf || a_();
	const r = await mf,
		t = {
			...o_,
			...n
		};
	return r.encode(e.data, e.width, e.height, t).buffer
}
var u_ = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(A, S) {
			t = A, o = S
		});
		const p = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
			k = typeof process == "object" && process.release && process.release.name === "node";
		(p || k) && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(S, M, ie) {
				this.data = S, this.width = M, this.height = ie
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
			href: ""
		}));
		var U = Object.assign({}, r),
			K = "./this.program",
			f = (A, S) => {
				throw S
			},
			te = typeof window == "object",
			ae = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var ce = "";

		function _e(A) {
			return r.locateFile ? r.locateFile(A, ce) : ce + A
		}
		var Ce;
		(te || ae) && (ae ? ce = self.location.href : typeof document < "u" && document.currentScript && (ce = document.currentScript.src), e && (ce = e), ce.indexOf("blob:") !== 0 ? ce = ce.substr(0, ce.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ce = "", ae && (Ce = A => {
			var S = new XMLHttpRequest;
			return S.open("GET", A, !1), S.responseType = "arraybuffer", S.send(null), new Uint8Array(S.response)
		}));
		var Qe = r.print || console.log.bind(console),
			Z = r.printErr || console.warn.bind(console);
		Object.assign(r, U), U = null, r.arguments && r.arguments, r.thisProgram && (K = r.thisProgram), r.quit && (f = r.quit);
		var G;
		r.wasmBinary && (G = r.wasmBinary);
		var q = r.noExitRuntime || !0;
		typeof WebAssembly != "object" && $r("no native wasm support detected");
		var Ee, Te = !1;

		function Ue(A, S, M) {
			for (var ie = S + M, w = ""; !(S >= ie);) {
				var E = A[S++];
				if (!E) return w;
				if (!(E & 128)) {
					w += String.fromCharCode(E);
					continue
				}
				var j = A[S++] & 63;
				if ((E & 224) == 192) {
					w += String.fromCharCode((E & 31) << 6 | j);
					continue
				}
				var Q = A[S++] & 63;
				if ((E & 240) == 224 ? E = (E & 15) << 12 | j << 6 | Q : E = (E & 7) << 18 | j << 12 | Q << 6 | A[S++] & 63, E < 65536) w += String.fromCharCode(E);
				else {
					var ue = E - 65536;
					w += String.fromCharCode(55296 | ue >> 10, 56320 | ue & 1023)
				}
			}
			return w
		}

		function je(A, S) {
			return A ? Ue(xe, A, S) : ""
		}

		function Ae(A, S, M, ie) {
			if (!(ie > 0)) return 0;
			for (var w = M, E = M + ie - 1, j = 0; j < A.length; ++j) {
				var Q = A.charCodeAt(j);
				if (Q >= 55296 && Q <= 57343) {
					var ue = A.charCodeAt(++j);
					Q = 65536 + ((Q & 1023) << 10) | ue & 1023
				}
				if (Q <= 127) {
					if (M >= E) break;
					S[M++] = Q
				} else if (Q <= 2047) {
					if (M + 1 >= E) break;
					S[M++] = 192 | Q >> 6, S[M++] = 128 | Q & 63
				} else if (Q <= 65535) {
					if (M + 2 >= E) break;
					S[M++] = 224 | Q >> 12, S[M++] = 128 | Q >> 6 & 63, S[M++] = 128 | Q & 63
				} else {
					if (M + 3 >= E) break;
					S[M++] = 240 | Q >> 18, S[M++] = 128 | Q >> 12 & 63, S[M++] = 128 | Q >> 6 & 63, S[M++] = 128 | Q & 63
				}
			}
			return S[M] = 0, M - w
		}

		function Ve(A, S, M) {
			return Ae(A, xe, S, M)
		}

		function $e(A) {
			for (var S = 0, M = 0; M < A.length; ++M) {
				var ie = A.charCodeAt(M);
				ie <= 127 ? S++ : ie <= 2047 ? S += 2 : ie >= 55296 && ie <= 57343 ? (S += 4, ++M) : S += 3
			}
			return S
		}
		var Me, xe, ke, sr, Be, Ne, zr, Pe;

		function ze() {
			var A = Ee.buffer;
			r.HEAP8 = Me = new Int8Array(A), r.HEAP16 = ke = new Int16Array(A), r.HEAP32 = Be = new Int32Array(A), r.HEAPU8 = xe = new Uint8Array(A), r.HEAPU16 = sr = new Uint16Array(A), r.HEAPU32 = Ne = new Uint32Array(A), r.HEAPF32 = zr = new Float32Array(A), r.HEAPF64 = Pe = new Float64Array(A)
		}
		var Ge, qe = [],
			tr = [],
			Er = [],
			fn = 0;

		function nn() {
			return q || fn > 0
		}

		function Ze() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) wn(r.preRun.shift());
			cr(qe)
		}

		function Mr() {
			cr(tr)
		}

		function tn() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) or(r.postRun.shift());
			cr(Er)
		}

		function wn(A) {
			qe.unshift(A)
		}

		function On(A) {
			tr.unshift(A)
		}

		function or(A) {
			Er.unshift(A)
		}
		var yr = 0,
			Fr = null;

		function cn(A) {
			yr++, r.monitorRunDependencies && r.monitorRunDependencies(yr)
		}

		function En(A) {
			if (yr--, r.monitorRunDependencies && r.monitorRunDependencies(yr), yr == 0 && Fr) {
				var S = Fr;
				Fr = null, S()
			}
		}

		function $r(A) {
			r.onAbort && r.onAbort(A), A = "Aborted(" + A + ")", Z(A), Te = !0, A += ". Build with -sASSERTIONS for more info.";
			var S = new WebAssembly.RuntimeError(A);
			throw o(S), S
		}
		var dn = "data:application/octet-stream;base64,";

		function pn(A) {
			return A.startsWith(dn)
		}
		var Xr;
		r.locateFile ? (Xr = "mozjpeg_dec.wasm", pn(Xr) || (Xr = _e(Xr))) : Xr = new URL(location.href +"assets/mozjpeg_dec-DwY6NVeq.wasm", import.meta.url).href;

		function Ir(A) {
			try {
				if (A == Xr && G) return new Uint8Array(G);
				if (Ce) return Ce(A);
				throw "both async and sync fetching of the wasm failed"
			} catch (S) {
				$r(S)
			}
		}

		function Mn(A) {
			return !G && (te || ae) && typeof fetch == "function" ? fetch(A, {
				credentials: "same-origin"
			}).then(function(S) {
				if (!S.ok) throw "failed to load wasm binary file at '" + A + "'";
				return S.arrayBuffer()
			}).catch(function() {
				return Ir(A)
			}) : Promise.resolve().then(function() {
				return Ir(A)
			})
		}

		function Dr(A, S, M) {
			return Mn(A).then(function(ie) {
				return WebAssembly.instantiate(ie, S)
			}).then(function(ie) {
				return ie
			}).then(M, function(ie) {
				Z("failed to asynchronously prepare wasm: " + ie), $r(ie)
			})
		}

		function Tr(A, S, M, ie) {
			return !A && typeof WebAssembly.instantiateStreaming == "function" && !pn(S) && typeof fetch == "function" ? fetch(S, {
				credentials: "same-origin"
			}).then(function(w) {
				var E = WebAssembly.instantiateStreaming(w, M);
				return E.then(ie, function(j) {
					return Z("wasm streaming compile failed: " + j), Z("falling back to ArrayBuffer instantiation"), Dr(S, M, ie)
				})
			}) : Dr(S, M, ie)
		}

		function bn() {
			var A = {
				a: B
			};

			function S(ie, w) {
				var E = ie.exports;
				return r.asm = E, Ee = r.asm.y, ze(), Ge = r.asm.E, On(r.asm.z), En(), E
			}
			cn();

			function M(ie) {
				S(ie.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(A, S)
			} catch (ie) {
				Z("Module.instantiateWasm callback failed with error: " + ie), o(ie)
			}
			return Tr(G, Xr, A, M).catch(o), {}
		}

		function Ar(A) {
			this.name = "ExitStatus", this.message = "Program terminated with exit(" + A + ")", this.status = A
		}

		function cr(A) {
			for (; A.length > 0;) A.shift()(r)
		}

		function en(A) {
			this.excPtr = A, this.ptr = A - 24, this.set_type = function(S) {
				Ne[this.ptr + 4 >> 2] = S
			}, this.get_type = function() {
				return Ne[this.ptr + 4 >> 2]
			}, this.set_destructor = function(S) {
				Ne[this.ptr + 8 >> 2] = S
			}, this.get_destructor = function() {
				return Ne[this.ptr + 8 >> 2]
			}, this.set_refcount = function(S) {
				Be[this.ptr >> 2] = S
			}, this.set_caught = function(S) {
				S = S ? 1 : 0, Me[this.ptr + 12 >> 0] = S
			}, this.get_caught = function() {
				return Me[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(S) {
				S = S ? 1 : 0, Me[this.ptr + 13 >> 0] = S
			}, this.get_rethrown = function() {
				return Me[this.ptr + 13 >> 0] != 0
			}, this.init = function(S, M) {
				this.set_adjusted_ptr(0), this.set_type(S), this.set_destructor(M), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var S = Be[this.ptr >> 2];
				Be[this.ptr >> 2] = S + 1
			}, this.release_ref = function() {
				var S = Be[this.ptr >> 2];
				return Be[this.ptr >> 2] = S - 1, S === 1
			}, this.set_adjusted_ptr = function(S) {
				Ne[this.ptr + 16 >> 2] = S
			}, this.get_adjusted_ptr = function() {
				return Ne[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var S = re(this.get_type());
				if (S) return Ne[this.excPtr >> 2];
				var M = this.get_adjusted_ptr();
				return M !== 0 ? M : this.excPtr
			}
		}

		function Qr(A, S, M) {
			var ie = new en(A);
			throw ie.init(S, M), A
		}

		function Or(A, S, M, ie, w) {}

		function Wr(A) {
			switch (A) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + A)
			}
		}

		function Zr() {
			for (var A = new Array(256), S = 0; S < 256; ++S) A[S] = String.fromCharCode(S);
			Cr = A
		}
		var Cr = void 0;

		function kr(A) {
			for (var S = "", M = A; xe[M];) S += Cr[xe[M++]];
			return S
		}
		var Rr = {},
			Jr = {},
			pr = {},
			on = 48,
			br = 57;

		function xr(A) {
			if (A === void 0) return "_unknown";
			A = A.replace(/[^a-zA-Z0-9_]/g, "$");
			var S = A.charCodeAt(0);
			return S >= on && S <= br ? "_" + A : A
		}

		function Sr(A, S) {
			return A = xr(A), {
				[A]: function() {
					return S.apply(this, arguments)
				}
			} [A]
		}

		function Br(A, S) {
			var M = Sr(S, function(ie) {
				this.name = S, this.message = ie;
				var w = new Error(ie).stack;
				w !== void 0 && (this.stack = this.toString() + `
` + w.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return M.prototype = Object.create(A.prototype), M.prototype.constructor = M, M.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, M
		}
		var mr = void 0;

		function Je(A) {
			throw new mr(A)
		}
		var wr = void 0;

		function hr(A) {
			throw new wr(A)
		}

		function Ur(A, S, M) {
			A.forEach(function(Q) {
				pr[Q] = S
			});

			function ie(Q) {
				var ue = M(Q);
				ue.length !== A.length && hr("Mismatched type converter count");
				for (var y = 0; y < A.length; ++y) lr(A[y], ue[y])
			}
			var w = new Array(S.length),
				E = [],
				j = 0;
			S.forEach((Q, ue) => {
				Jr.hasOwnProperty(Q) ? w[ue] = Jr[Q] : (E.push(Q), Rr.hasOwnProperty(Q) || (Rr[Q] = []), Rr[Q].push(() => {
					w[ue] = Jr[Q], ++j, j === E.length && ie(w)
				}))
			}), E.length === 0 && ie(w)
		}

		function lr(A, S, M = {}) {
			if (!("argPackAdvance" in S)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var ie = S.name;
			if (A || Je('type "' + ie + '" must have a positive integer typeid pointer'), Jr.hasOwnProperty(A)) {
				if (M.ignoreDuplicateRegistrations) return;
				Je("Cannot register type '" + ie + "' twice")
			}
			if (Jr[A] = S, delete pr[A], Rr.hasOwnProperty(A)) {
				var w = Rr[A];
				delete Rr[A], w.forEach(E => E())
			}
		}

		function we(A, S, M, ie, w) {
			var E = Wr(M);
			S = kr(S), lr(A, {
				name: S,
				fromWireType: function(j) {
					return !!j
				},
				toWireType: function(j, Q) {
					return Q ? ie : w
				},
				argPackAdvance: 8,
				readValueFromPointer: function(j) {
					var Q;
					if (M === 1) Q = Me;
					else if (M === 2) Q = ke;
					else if (M === 4) Q = Be;
					else throw new TypeError("Unknown boolean type size: " + S);
					return this.fromWireType(Q[j >> E])
				},
				destructorFunction: null
			})
		}
		var Rn = [],
			dr = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function Re(A) {
			A > 4 && --dr[A].refcount === 0 && (dr[A] = void 0, Rn.push(A))
		}

		function an() {
			for (var A = 0, S = 5; S < dr.length; ++S) dr[S] !== void 0 && ++A;
			return A
		}

		function Yr() {
			for (var A = 5; A < dr.length; ++A)
				if (dr[A] !== void 0) return dr[A];
			return null
		}

		function vn() {
			r.count_emval_handles = an, r.get_first_emval = Yr
		}
		var Lr = {
			toValue: A => (A || Je("Cannot use deleted val. handle = " + A), dr[A].value),
			toHandle: A => {
				switch (A) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var S = Rn.length ? Rn.pop() : dr.length;
						return dr[S] = {
							refcount: 1,
							value: A
						}, S
					}
				}
			}
		};

		function Kr(A) {
			return this.fromWireType(Be[A >> 2])
		}

		function Ln(A, S) {
			S = kr(S), lr(A, {
				name: S,
				fromWireType: function(M) {
					var ie = Lr.toValue(M);
					return Re(M), ie
				},
				toWireType: function(M, ie) {
					return Lr.toHandle(ie)
				},
				argPackAdvance: 8,
				readValueFromPointer: Kr,
				destructorFunction: null
			})
		}

		function Hn(A, S) {
			switch (S) {
				case 2:
					return function(M) {
						return this.fromWireType(zr[M >> 2])
					};
				case 3:
					return function(M) {
						return this.fromWireType(Pe[M >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + A)
			}
		}

		function Gr(A, S, M) {
			var ie = Wr(M);
			S = kr(S), lr(A, {
				name: S,
				fromWireType: function(w) {
					return w
				},
				toWireType: function(w, E) {
					return E
				},
				argPackAdvance: 8,
				readValueFromPointer: Hn(S, ie),
				destructorFunction: null
			})
		}

		function un(A) {
			for (; A.length;) {
				var S = A.pop(),
					M = A.pop();
				M(S)
			}
		}

		function Xn(A, S, M, ie, w, E) {
			var j = S.length;
			j < 2 && Je("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var Q = S[1] !== null && M !== null, ue = !1, y = 1; y < S.length; ++y)
				if (S[y] !== null && S[y].destructorFunction === void 0) {
					ue = !0;
					break
				} var R = S[0].name !== "void",
				c = j - 2,
				h = new Array(c),
				b = [],
				W = [];
			return function() {
				arguments.length !== c && Je("function " + A + " called with " + arguments.length + " arguments, expected " + c + " args!"), W.length = 0;
				var H;
				b.length = Q ? 2 : 1, b[0] = w, Q && (H = S[1].toWireType(W, this), b[1] = H);
				for (var Y = 0; Y < c; ++Y) h[Y] = S[Y + 2].toWireType(W, arguments[Y]), b.push(h[Y]);
				var fe = ie.apply(null, b);

				function he(ye) {
					if (ue) un(W);
					else
						for (var Oe = Q ? 1 : 2; Oe < S.length; Oe++) {
							var ir = Oe === 1 ? H : h[Oe - 2];
							S[Oe].destructorFunction !== null && S[Oe].destructorFunction(ir)
						}
					if (R) return S[0].fromWireType(ye)
				}
				return he(fe)
			}
		}

		function Cn(A, S, M) {
			if (A[S].overloadTable === void 0) {
				var ie = A[S];
				A[S] = function() {
					return A[S].overloadTable.hasOwnProperty(arguments.length) || Je("Function '" + M + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + A[S].overloadTable + ")!"), A[S].overloadTable[arguments.length].apply(this, arguments)
				}, A[S].overloadTable = [], A[S].overloadTable[ie.argCount] = ie
			}
		}

		function Zn(A, S, M) {
			r.hasOwnProperty(A) ? ((M === void 0 || r[A].overloadTable !== void 0 && r[A].overloadTable[M] !== void 0) && Je("Cannot register public name '" + A + "' twice"), Cn(r, A, A), r.hasOwnProperty(M) && Je("Cannot register multiple overloads of a function with the same number of arguments (" + M + ")!"), r[A].overloadTable[M] = S) : (r[A] = S, M !== void 0 && (r[A].numArguments = M))
		}

		function hn(A, S) {
			for (var M = [], ie = 0; ie < A; ie++) M.push(Ne[S + ie * 4 >> 2]);
			return M
		}

		function mn(A, S, M) {
			r.hasOwnProperty(A) || hr("Replacing nonexistant public symbol"), r[A].overloadTable !== void 0 && M !== void 0 ? r[A].overloadTable[M] = S : (r[A] = S, r[A].argCount = M)
		}

		function jr(A, S, M) {
			var ie = r["dynCall_" + A];
			return M && M.length ? ie.apply(null, [S].concat(M)) : ie.call(null, S)
		}
		var Hr = [];

		function Pn(A) {
			var S = Hr[A];
			return S || (A >= Hr.length && (Hr.length = A + 1), Hr[A] = S = Ge.get(A)), S
		}

		function xn(A, S, M) {
			if (A.includes("j")) return jr(A, S, M);
			var ie = Pn(S).apply(null, M);
			return ie
		}

		function Fn(A, S) {
			var M = [];
			return function() {
				return M.length = 0, Object.assign(M, arguments), xn(A, S, M)
			}
		}

		function In(A, S) {
			A = kr(A);

			function M() {
				return A.includes("j") ? Fn(A, S) : Pn(S)
			}
			var ie = M();
			return typeof ie != "function" && Je("unknown function pointer with signature " + A + ": " + S), ie
		}
		var Wn = void 0;

		function Un(A) {
			var S = L(A),
				M = kr(S);
			return T(S), M
		}

		function Vn(A, S) {
			var M = [],
				ie = {};

			function w(E) {
				if (!ie[E] && !Jr[E]) {
					if (pr[E]) {
						pr[E].forEach(w);
						return
					}
					M.push(E), ie[E] = !0
				}
			}
			throw S.forEach(w), new Wn(A + ": " + M.map(Un).join([", "]))
		}

		function Jn(A, S, M, ie, w, E, j) {
			var Q = hn(S, M);
			A = kr(A), w = In(ie, w), Zn(A, function() {
				Vn("Cannot call " + A + " due to unbound types", Q)
			}, S - 1), Ur([], Q, function(ue) {
				var y = [ue[0], null].concat(ue.slice(1));
				return mn(A, Xn(A, y, null, w, E), S - 1), []
			})
		}

		function ct(A, S, M) {
			switch (S) {
				case 0:
					return M ? function(w) {
						return Me[w]
					} : function(w) {
						return xe[w]
					};
				case 1:
					return M ? function(w) {
						return ke[w >> 1]
					} : function(w) {
						return sr[w >> 1]
					};
				case 2:
					return M ? function(w) {
						return Be[w >> 2]
					} : function(w) {
						return Ne[w >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + A)
			}
		}

		function zn(A, S, M, ie, w) {
			S = kr(S);
			var E = Wr(M),
				j = c => c;
			if (ie === 0) {
				var Q = 32 - 8 * M;
				j = c => c << Q >>> Q
			}
			var ue = S.includes("unsigned"),
				y = (c, h) => {},
				R;
			ue ? R = function(c, h) {
				return y(h, this.name), h >>> 0
			} : R = function(c, h) {
				return y(h, this.name), h
			}, lr(A, {
				name: S,
				fromWireType: j,
				toWireType: R,
				argPackAdvance: 8,
				readValueFromPointer: ct(S, E, ie !== 0),
				destructorFunction: null
			})
		}

		function Bn(A, S, M) {
			var ie = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				w = ie[S];

			function E(j) {
				j = j >> 2;
				var Q = Ne,
					ue = Q[j],
					y = Q[j + 1];
				return new w(Q.buffer, y, ue)
			}
			M = kr(M), lr(A, {
				name: M,
				fromWireType: E,
				argPackAdvance: 8,
				readValueFromPointer: E
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function dt(A, S) {
			S = kr(S);
			var M = S === "std::string";
			lr(A, {
				name: S,
				fromWireType: function(ie) {
					var w = Ne[ie >> 2],
						E = ie + 4,
						j;
					if (M)
						for (var Q = E, ue = 0; ue <= w; ++ue) {
							var y = E + ue;
							if (ue == w || xe[y] == 0) {
								var R = y - Q,
									c = je(Q, R);
								j === void 0 ? j = c : (j += "\0", j += c), Q = y + 1
							}
						} else {
							for (var h = new Array(w), ue = 0; ue < w; ++ue) h[ue] = String.fromCharCode(xe[E + ue]);
							j = h.join("")
						}
					return T(ie), j
				},
				toWireType: function(ie, w) {
					w instanceof ArrayBuffer && (w = new Uint8Array(w));
					var E, j = typeof w == "string";
					j || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || Je("Cannot pass non-string to std::string"), M && j ? E = $e(w) : E = w.length;
					var Q = g(4 + E + 1),
						ue = Q + 4;
					if (Ne[Q >> 2] = E, M && j) Ve(w, ue, E + 1);
					else if (j)
						for (var y = 0; y < E; ++y) {
							var R = w.charCodeAt(y);
							R > 255 && (T(ue), Je("String has UTF-16 code units that do not fit in 8 bits")), xe[ue + y] = R
						} else
							for (var y = 0; y < E; ++y) xe[ue + y] = w[y];
					return ie !== null && ie.push(T, Q), Q
				},
				argPackAdvance: 8,
				readValueFromPointer: Kr,
				destructorFunction: function(ie) {
					T(ie)
				}
			})
		}

		function et(A, S) {
			for (var M = "", ie = 0; !(ie >= S / 2); ++ie) {
				var w = ke[A + ie * 2 >> 1];
				if (w == 0) break;
				M += String.fromCharCode(w)
			}
			return M
		}

		function Pr(A, S, M) {
			if (M === void 0 && (M = 2147483647), M < 2) return 0;
			M -= 2;
			for (var ie = S, w = M < A.length * 2 ? M / 2 : A.length, E = 0; E < w; ++E) {
				var j = A.charCodeAt(E);
				ke[S >> 1] = j, S += 2
			}
			return ke[S >> 1] = 0, S - ie
		}

		function tt(A) {
			return A.length * 2
		}

		function ar(A, S) {
			for (var M = 0, ie = ""; !(M >= S / 4);) {
				var w = Be[A + M * 4 >> 2];
				if (w == 0) break;
				if (++M, w >= 65536) {
					var E = w - 65536;
					ie += String.fromCharCode(55296 | E >> 10, 56320 | E & 1023)
				} else ie += String.fromCharCode(w)
			}
			return ie
		}

		function qr(A, S, M) {
			if (M === void 0 && (M = 2147483647), M < 4) return 0;
			for (var ie = S, w = ie + M - 4, E = 0; E < A.length; ++E) {
				var j = A.charCodeAt(E);
				if (j >= 55296 && j <= 57343) {
					var Q = A.charCodeAt(++E);
					j = 65536 + ((j & 1023) << 10) | Q & 1023
				}
				if (Be[S >> 2] = j, S += 4, S + 4 > w) break
			}
			return Be[S >> 2] = 0, S - ie
		}

		function sn(A) {
			for (var S = 0, M = 0; M < A.length; ++M) {
				var ie = A.charCodeAt(M);
				ie >= 55296 && ie <= 57343 && ++M, S += 4
			}
			return S
		}

		function gn(A, S, M) {
			M = kr(M);
			var ie, w, E, j, Q;
			S === 2 ? (ie = et, w = Pr, j = tt, E = () => sr, Q = 1) : S === 4 && (ie = ar, w = qr, j = sn, E = () => Ne, Q = 2), lr(A, {
				name: M,
				fromWireType: function(ue) {
					for (var y = Ne[ue >> 2], R = E(), c, h = ue + 4, b = 0; b <= y; ++b) {
						var W = ue + 4 + b * S;
						if (b == y || R[W >> Q] == 0) {
							var H = W - h,
								Y = ie(h, H);
							c === void 0 ? c = Y : (c += "\0", c += Y), h = W + S
						}
					}
					return T(ue), c
				},
				toWireType: function(ue, y) {
					typeof y != "string" && Je("Cannot pass non-string to C++ string type " + M);
					var R = j(y),
						c = g(4 + R + S);
					return Ne[c >> 2] = R >> Q, w(y, c + 4, R + S), ue !== null && ue.push(T, c), c
				},
				argPackAdvance: 8,
				readValueFromPointer: Kr,
				destructorFunction: function(ue) {
					T(ue)
				}
			})
		}

		function Vr(A, S) {
			S = kr(S), lr(A, {
				isVoid: !0,
				name: S,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(M, ie) {}
			})
		}
		var Yn = {};

		function _n(A) {
			var S = Yn[A];
			return S === void 0 ? kr(A) : S
		}

		function rt() {
			if (typeof globalThis == "object") return globalThis;

			function A(S) {
				S.$$$embind_global$$$ = S;
				var M = typeof $$$embind_global$$$ == "object" && S.$$$embind_global$$$ == S;
				return M || delete S.$$$embind_global$$$, M
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && A(global) ? $$$embind_global$$$ = global : typeof self == "object" && A(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function at(A) {
			return A === 0 ? Lr.toHandle(rt()) : (A = _n(A), Lr.toHandle(rt()[A]))
		}

		function Tn(A) {
			A > 4 && (dr[A].refcount += 1)
		}

		function mt(A, S) {
			var M = Jr[A];
			return M === void 0 && Je(S + " has unknown type " + Un(A)), M
		}

		function Gn(A) {
			var S = new Array(A + 1);
			return function(M, ie, w) {
				S[0] = M;
				for (var E = 0; E < A; ++E) {
					var j = mt(Ne[ie + E * 4 >> 2], "parameter " + E);
					S[E + 1] = j.readValueFromPointer(w), w += j.argPackAdvance
				}
				var Q = new(M.bind.apply(M, S));
				return Lr.toHandle(Q)
			}
		}
		var ut = {};

		function Qn(A, S, M, ie) {
			A = Lr.toValue(A);
			var w = ut[S];
			return w || (w = Gn(S), ut[S] = w), w(A, M, ie)
		}

		function $n() {
			$r("")
		}

		function nt(A, S, M) {
			xe.copyWithin(A, S, S + M)
		}

		function lt() {
			return 2147483648
		}

		function it(A) {
			var S = Ee.buffer;
			try {
				return Ee.grow(A - S.byteLength + 65535 >>> 16), ze(), 1
			} catch {}
		}

		function pt(A) {
			var S = xe.length;
			A = A >>> 0;
			var M = lt();
			if (A > M) return !1;
			let ie = (ue, y) => ue + (y - ue % y) % y;
			for (var w = 1; w <= 4; w *= 2) {
				var E = S * (1 + .2 / w);
				E = Math.min(E, A + 100663296);
				var j = Math.min(M, ie(Math.max(A, E), 65536)),
					Q = it(j);
				if (Q) return !0
			}
			return !1
		}
		var x = {};

		function I() {
			return K || "./this.program"
		}

		function J() {
			if (!J.strings) {
				var A = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
					S = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: A,
						_: I()
					};
				for (var M in x) x[M] === void 0 ? delete S[M] : S[M] = x[M];
				var ie = [];
				for (var M in S) ie.push(M + "=" + S[M]);
				J.strings = ie
			}
			return J.strings
		}

		function ge(A, S, M) {
			for (var ie = 0; ie < A.length; ++ie) Me[S++ >> 0] = A.charCodeAt(ie);
			Me[S >> 0] = 0
		}

		function be(A, S) {
			var M = 0;
			return J().forEach(function(ie, w) {
				var E = S + M;
				Ne[A + w * 4 >> 2] = E, ge(ie, E), M += ie.length + 1
			}), 0
		}

		function Fe(A, S) {
			var M = J();
			Ne[A >> 2] = M.length;
			var ie = 0;
			return M.forEach(function(w) {
				ie += w.length + 1
			}), Ne[S >> 2] = ie, 0
		}

		function P(A) {
			nn() || (r.onExit && r.onExit(A), Te = !0), f(A, new Ar(A))
		}

		function i(A, S) {
			P(A)
		}
		var u = i;

		function v(A) {
			return 52
		}

		function C(A, S, M, ie, w) {
			return 70
		}
		var $ = [null, [],
			[]
		];

		function D(A, S) {
			var M = $[A];
			S === 0 || S === 10 ? ((A === 1 ? Qe : Z)(Ue(M, 0)), M.length = 0) : M.push(S)
		}

		function V(A, S, M, ie) {
			for (var w = 0, E = 0; E < M; E++) {
				var j = Ne[S >> 2],
					Q = Ne[S + 4 >> 2];
				S += 8;
				for (var ue = 0; ue < Q; ue++) D(A, xe[j + ue]);
				w += Q
			}
			return Ne[ie >> 2] = w, 0
		}
		Zr(), mr = r.BindingError = Br(Error, "BindingError"), wr = r.InternalError = Br(Error, "InternalError"), vn(), Wn = r.UnboundTypeError = Br(Error, "UnboundTypeError");
		var B = {
			n: Qr,
			p: Or,
			l: we,
			w: Ln,
			k: Gr,
			i: Jn,
			b: zn,
			a: Bn,
			f: dt,
			e: gn,
			m: Vr,
			c: Re,
			d: at,
			h: Tn,
			g: Qn,
			j: $n,
			t: nt,
			q: pt,
			r: be,
			s: Fe,
			x: u,
			u: v,
			o: C,
			v: V
		};
		bn();
		var g = function() {
				return (g = r.asm.A).apply(null, arguments)
			},
			T = function() {
				return (T = r.asm.B).apply(null, arguments)
			},
			L = r.___getTypeName = function() {
				return (L = r.___getTypeName = r.asm.C).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.D).apply(null, arguments)
		};
		var re = function() {
			return (re = r.asm.F).apply(null, arguments)
		};
		r.dynCall_jiji = function() {
			return (r.dynCall_jiji = r.asm.G).apply(null, arguments)
		};
		var le;
		Fr = function A() {
			le || pe(), le || (Fr = A)
		};

		function pe() {
			if (yr > 0 || (Ze(), yr > 0)) return;

			function A() {
				le || (le = !0, r.calledRun = !0, !Te && (Mr(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), tn()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), A()
			}, 1)) : A()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return pe(), r.ready
	}
})();
let gf;
async function l_(e, n) {
	gf = qv(u_, e, n)
}
async function Zv(e) {
	gf || l_();
	const r = (await gf).decode(e);
	if (!r) throw new Error("Decoding error");
	return r
}
const s_ = Object.freeze(Object.defineProperty({
		__proto__: null,
		decode: Zv,
		encode: Xv
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	f_ = {
		effort: 7,
		quality: 75,
		progressive: !1,
		epf: -1,
		lossyPalette: !1,
		decodingSpeedTier: 0,
		photonNoiseIso: 0,
		lossyModular: !1
	};

function al(e, n, r = {}) {
	return e({
		noInitialRun: !0,
		instantiateWasm: void 0,
		...r
	})
}
let Li;
const c_ = () => typeof process < "u" && process.release && process.release.name === "node",
	d_ = () => {
		var e;
		return ((e = globalThis.caches) === null || e === void 0 ? void 0 : e.default) !== void 0
	};
async function p_(e, n) {
	if (!c_() && !d_() && await Gv()) {
		if (await Yv()) {
			const o = await pi(() => Promise.resolve().then(() => ry), void 0);
			return Li = al(o.default, e, n), Li
		}
		const t = await pi(() => Promise.resolve().then(() => ty), void 0);
		return Li = al(t.default, e, n), Li
	}
	const r = await pi(() => Promise.resolve().then(() => oy), void 0);
	return Li = al(r.default, e, n), Li
}
async function Jv(e, n = {}) {
	Li || (Li = p_());
	const r = await Li,
		t = {
			...f_,
			...n
		},
		o = r.encode(e.data, e.width, e.height, t);
	if (!o) throw new Error("Encoding error.");
	return o.buffer
}
var v_ = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(i, u) {
			t = i, o = u
		});
		const p = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
			k = typeof process == "object" && process.release && process.release.name === "node";
		(p || k) && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(u, v, C) {
				this.data = u, this.width = v, this.height = C
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
			href: ""
		}));
		var U = Object.assign({}, r),
			K = typeof window == "object",
			f = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var te = "";

		function ae(i) {
			return r.locateFile ? r.locateFile(i, te) : te + i
		}
		var ce;
		(K || f) && (f ? te = self.location.href : typeof document < "u" && document.currentScript && (te = document.currentScript.src), e && (te = e), te.indexOf("blob:") !== 0 ? te = te.substr(0, te.replace(/[?#].*/, "").lastIndexOf("/") + 1) : te = "", f && (ce = i => {
			var u = new XMLHttpRequest;
			return u.open("GET", i, !1), u.responseType = "arraybuffer", u.send(null), new Uint8Array(u.response)
		}));
		var _e = r.print || console.log.bind(console),
			Ce = r.printErr || console.warn.bind(console);
		Object.assign(r, U), U = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
		var Qe;
		r.wasmBinary && (Qe = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && or("no native wasm support detected");
		var Z, G = !1;

		function q(i, u, v) {
			for (var C = u + v, $ = ""; !(u >= C);) {
				var D = i[u++];
				if (!D) return $;
				if (!(D & 128)) {
					$ += String.fromCharCode(D);
					continue
				}
				var V = i[u++] & 63;
				if ((D & 224) == 192) {
					$ += String.fromCharCode((D & 31) << 6 | V);
					continue
				}
				var B = i[u++] & 63;
				if ((D & 240) == 224 ? D = (D & 15) << 12 | V << 6 | B : D = (D & 7) << 18 | V << 12 | B << 6 | i[u++] & 63, D < 65536) $ += String.fromCharCode(D);
				else {
					var g = D - 65536;
					$ += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023)
				}
			}
			return $
		}

		function Ee(i, u) {
			return i ? q(Ve, i, u) : ""
		}

		function Te(i, u, v, C) {
			if (!(C > 0)) return 0;
			for (var $ = v, D = v + C - 1, V = 0; V < i.length; ++V) {
				var B = i.charCodeAt(V);
				if (B >= 55296 && B <= 57343) {
					var g = i.charCodeAt(++V);
					B = 65536 + ((B & 1023) << 10) | g & 1023
				}
				if (B <= 127) {
					if (v >= D) break;
					u[v++] = B
				} else if (B <= 2047) {
					if (v + 1 >= D) break;
					u[v++] = 192 | B >> 6, u[v++] = 128 | B & 63
				} else if (B <= 65535) {
					if (v + 2 >= D) break;
					u[v++] = 224 | B >> 12, u[v++] = 128 | B >> 6 & 63, u[v++] = 128 | B & 63
				} else {
					if (v + 3 >= D) break;
					u[v++] = 240 | B >> 18, u[v++] = 128 | B >> 12 & 63, u[v++] = 128 | B >> 6 & 63, u[v++] = 128 | B & 63
				}
			}
			return u[v] = 0, v - $
		}

		function Ue(i, u, v) {
			return Te(i, Ve, u, v)
		}

		function je(i) {
			for (var u = 0, v = 0; v < i.length; ++v) {
				var C = i.charCodeAt(v);
				C <= 127 ? u++ : C <= 2047 ? u += 2 : C >= 55296 && C <= 57343 ? (u += 4, ++v) : u += 3
			}
			return u
		}
		var Ae, Ve, $e, Me, xe, ke, sr, Be;

		function Ne() {
			var i = Z.buffer;
			r.HEAP8 = Ae = new Int8Array(i), r.HEAP16 = $e = new Int16Array(i), r.HEAP32 = xe = new Int32Array(i), r.HEAPU8 = Ve = new Uint8Array(i), r.HEAPU16 = Me = new Uint16Array(i), r.HEAPU32 = ke = new Uint32Array(i), r.HEAPF32 = sr = new Float32Array(i), r.HEAPF64 = Be = new Float64Array(i)
		}
		var zr, Pe = [],
			ze = [],
			Ge = [];

		function qe() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) fn(r.preRun.shift());
			Ir(Pe)
		}

		function tr() {
			Ir(ze)
		}

		function Er() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) Ze(r.postRun.shift());
			Ir(Ge)
		}

		function fn(i) {
			Pe.unshift(i)
		}

		function nn(i) {
			ze.unshift(i)
		}

		function Ze(i) {
			Ge.unshift(i)
		}
		var Mr = 0,
			tn = null;

		function wn(i) {
			Mr++, r.monitorRunDependencies && r.monitorRunDependencies(Mr)
		}

		function On(i) {
			if (Mr--, r.monitorRunDependencies && r.monitorRunDependencies(Mr), Mr == 0 && tn) {
				var u = tn;
				tn = null, u()
			}
		}

		function or(i) {
			r.onAbort && r.onAbort(i), i = "Aborted(" + i + ")", Ce(i), G = !0, i += ". Build with -sASSERTIONS for more info.";
			var u = new WebAssembly.RuntimeError(i);
			throw o(u), u
		}
		var yr = "data:application/octet-stream;base64,";

		function Fr(i) {
			return i.startsWith(yr)
		}
		var cn;
		r.locateFile ? (cn = "jxl_dec.wasm", Fr(cn) || (cn = ae(cn))) : cn = new URL(location.href +"assets/jxl_dec-BE7lT9uY.wasm", import.meta.url).href;

		function En(i) {
			try {
				if (i == cn && Qe) return new Uint8Array(Qe);
				if (ce) return ce(i);
				throw "both async and sync fetching of the wasm failed"
			} catch (u) {
				or(u)
			}
		}

		function $r(i) {
			return !Qe && (K || f) && typeof fetch == "function" ? fetch(i, {
				credentials: "same-origin"
			}).then(function(u) {
				if (!u.ok) throw "failed to load wasm binary file at '" + i + "'";
				return u.arrayBuffer()
			}).catch(function() {
				return En(i)
			}) : Promise.resolve().then(function() {
				return En(i)
			})
		}

		function dn(i, u, v) {
			return $r(i).then(function(C) {
				return WebAssembly.instantiate(C, u)
			}).then(function(C) {
				return C
			}).then(v, function(C) {
				Ce("failed to asynchronously prepare wasm: " + C), or(C)
			})
		}

		function pn(i, u, v, C) {
			return !i && typeof WebAssembly.instantiateStreaming == "function" && !Fr(u) && typeof fetch == "function" ? fetch(u, {
				credentials: "same-origin"
			}).then(function($) {
				var D = WebAssembly.instantiateStreaming($, v);
				return D.then(C, function(V) {
					return Ce("wasm streaming compile failed: " + V), Ce("falling back to ArrayBuffer instantiation"), dn(u, v, C)
				})
			}) : dn(u, v, C)
		}

		function Xr() {
			var i = {
				a: x
			};

			function u(C, $) {
				var D = C.exports;
				return r.asm = D, Z = r.asm.w, Ne(), zr = r.asm.C, nn(r.asm.x), On(), D
			}
			wn();

			function v(C) {
				u(C.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(i, u)
			} catch (C) {
				Ce("Module.instantiateWasm callback failed with error: " + C), o(C)
			}
			return pn(Qe, cn, i, v).catch(o), {}
		}

		function Ir(i) {
			for (; i.length > 0;) i.shift()(r)
		}

		function Mn(i, u, v, C) {
			or("Assertion failed: " + Ee(i) + ", at: " + [u ? Ee(u) : "unknown filename", v, C ? Ee(C) : "unknown function"])
		}

		function Dr(i) {
			this.excPtr = i, this.ptr = i - 24, this.set_type = function(u) {
				ke[this.ptr + 4 >> 2] = u
			}, this.get_type = function() {
				return ke[this.ptr + 4 >> 2]
			}, this.set_destructor = function(u) {
				ke[this.ptr + 8 >> 2] = u
			}, this.get_destructor = function() {
				return ke[this.ptr + 8 >> 2]
			}, this.set_refcount = function(u) {
				xe[this.ptr >> 2] = u
			}, this.set_caught = function(u) {
				u = u ? 1 : 0, Ae[this.ptr + 12 >> 0] = u
			}, this.get_caught = function() {
				return Ae[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(u) {
				u = u ? 1 : 0, Ae[this.ptr + 13 >> 0] = u
			}, this.get_rethrown = function() {
				return Ae[this.ptr + 13 >> 0] != 0
			}, this.init = function(u, v) {
				this.set_adjusted_ptr(0), this.set_type(u), this.set_destructor(v), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var u = xe[this.ptr >> 2];
				xe[this.ptr >> 2] = u + 1
			}, this.release_ref = function() {
				var u = xe[this.ptr >> 2];
				return xe[this.ptr >> 2] = u - 1, u === 1
			}, this.set_adjusted_ptr = function(u) {
				ke[this.ptr + 16 >> 2] = u
			}, this.get_adjusted_ptr = function() {
				return ke[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var u = be(this.get_type());
				if (u) return ke[this.excPtr >> 2];
				var v = this.get_adjusted_ptr();
				return v !== 0 ? v : this.excPtr
			}
		}

		function Tr(i, u, v) {
			var C = new Dr(i);
			throw C.init(u, v), i
		}

		function bn(i, u, v, C, $) {}

		function Ar(i) {
			switch (i) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + i)
			}
		}

		function cr() {
			for (var i = new Array(256), u = 0; u < 256; ++u) i[u] = String.fromCharCode(u);
			en = i
		}
		var en = void 0;

		function Qr(i) {
			for (var u = "", v = i; Ve[v];) u += en[Ve[v++]];
			return u
		}
		var Or = {},
			Wr = {},
			Zr = {},
			Cr = 48,
			kr = 57;

		function Rr(i) {
			if (i === void 0) return "_unknown";
			i = i.replace(/[^a-zA-Z0-9_]/g, "$");
			var u = i.charCodeAt(0);
			return u >= Cr && u <= kr ? "_" + i : i
		}

		function Jr(i, u) {
			return i = Rr(i), {
				[i]: function() {
					return u.apply(this, arguments)
				}
			} [i]
		}

		function pr(i, u) {
			var v = Jr(u, function(C) {
				this.name = u, this.message = C;
				var $ = new Error(C).stack;
				$ !== void 0 && (this.stack = this.toString() + `
` + $.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return v.prototype = Object.create(i.prototype), v.prototype.constructor = v, v.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, v
		}
		var on = void 0;

		function br(i) {
			throw new on(i)
		}
		var xr = void 0;

		function Sr(i) {
			throw new xr(i)
		}

		function Br(i, u, v) {
			i.forEach(function(B) {
				Zr[B] = u
			});

			function C(B) {
				var g = v(B);
				g.length !== i.length && Sr("Mismatched type converter count");
				for (var T = 0; T < i.length; ++T) mr(i[T], g[T])
			}
			var $ = new Array(u.length),
				D = [],
				V = 0;
			u.forEach((B, g) => {
				Wr.hasOwnProperty(B) ? $[g] = Wr[B] : (D.push(B), Or.hasOwnProperty(B) || (Or[B] = []), Or[B].push(() => {
					$[g] = Wr[B], ++V, V === D.length && C($)
				}))
			}), D.length === 0 && C($)
		}

		function mr(i, u, v = {}) {
			if (!("argPackAdvance" in u)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var C = u.name;
			if (i || br('type "' + C + '" must have a positive integer typeid pointer'), Wr.hasOwnProperty(i)) {
				if (v.ignoreDuplicateRegistrations) return;
				br("Cannot register type '" + C + "' twice")
			}
			if (Wr[i] = u, delete Zr[i], Or.hasOwnProperty(i)) {
				var $ = Or[i];
				delete Or[i], $.forEach(D => D())
			}
		}

		function Je(i, u, v, C, $) {
			var D = Ar(v);
			u = Qr(u), mr(i, {
				name: u,
				fromWireType: function(V) {
					return !!V
				},
				toWireType: function(V, B) {
					return B ? C : $
				},
				argPackAdvance: 8,
				readValueFromPointer: function(V) {
					var B;
					if (v === 1) B = Ae;
					else if (v === 2) B = $e;
					else if (v === 4) B = xe;
					else throw new TypeError("Unknown boolean type size: " + u);
					return this.fromWireType(B[V >> D])
				},
				destructorFunction: null
			})
		}
		var wr = [],
			hr = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function Ur(i) {
			i > 4 && --hr[i].refcount === 0 && (hr[i] = void 0, wr.push(i))
		}

		function lr() {
			for (var i = 0, u = 5; u < hr.length; ++u) hr[u] !== void 0 && ++i;
			return i
		}

		function we() {
			for (var i = 5; i < hr.length; ++i)
				if (hr[i] !== void 0) return hr[i];
			return null
		}

		function Rn() {
			r.count_emval_handles = lr, r.get_first_emval = we
		}
		var dr = {
			toValue: i => (i || br("Cannot use deleted val. handle = " + i), hr[i].value),
			toHandle: i => {
				switch (i) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var u = wr.length ? wr.pop() : hr.length;
						return hr[u] = {
							refcount: 1,
							value: i
						}, u
					}
				}
			}
		};

		function Re(i) {
			return this.fromWireType(xe[i >> 2])
		}

		function an(i, u) {
			u = Qr(u), mr(i, {
				name: u,
				fromWireType: function(v) {
					var C = dr.toValue(v);
					return Ur(v), C
				},
				toWireType: function(v, C) {
					return dr.toHandle(C)
				},
				argPackAdvance: 8,
				readValueFromPointer: Re,
				destructorFunction: null
			})
		}

		function Yr(i, u) {
			switch (u) {
				case 2:
					return function(v) {
						return this.fromWireType(sr[v >> 2])
					};
				case 3:
					return function(v) {
						return this.fromWireType(Be[v >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + i)
			}
		}

		function vn(i, u, v) {
			var C = Ar(v);
			u = Qr(u), mr(i, {
				name: u,
				fromWireType: function($) {
					return $
				},
				toWireType: function($, D) {
					return D
				},
				argPackAdvance: 8,
				readValueFromPointer: Yr(u, C),
				destructorFunction: null
			})
		}

		function Lr(i) {
			for (; i.length;) {
				var u = i.pop(),
					v = i.pop();
				v(u)
			}
		}

		function Kr(i, u, v, C, $, D) {
			var V = u.length;
			V < 2 && br("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var B = u[1] !== null && v !== null, g = !1, T = 1; T < u.length; ++T)
				if (u[T] !== null && u[T].destructorFunction === void 0) {
					g = !0;
					break
				} var L = u[0].name !== "void",
				re = V - 2,
				le = new Array(re),
				pe = [],
				A = [];
			return function() {
				arguments.length !== re && br("function " + i + " called with " + arguments.length + " arguments, expected " + re + " args!"), A.length = 0;
				var S;
				pe.length = B ? 2 : 1, pe[0] = $, B && (S = u[1].toWireType(A, this), pe[1] = S);
				for (var M = 0; M < re; ++M) le[M] = u[M + 2].toWireType(A, arguments[M]), pe.push(le[M]);
				var ie = C.apply(null, pe);

				function w(E) {
					if (g) Lr(A);
					else
						for (var j = B ? 1 : 2; j < u.length; j++) {
							var Q = j === 1 ? S : le[j - 2];
							u[j].destructorFunction !== null && u[j].destructorFunction(Q)
						}
					if (L) return u[0].fromWireType(E)
				}
				return w(ie)
			}
		}

		function Ln(i, u, v) {
			if (i[u].overloadTable === void 0) {
				var C = i[u];
				i[u] = function() {
					return i[u].overloadTable.hasOwnProperty(arguments.length) || br("Function '" + v + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + i[u].overloadTable + ")!"), i[u].overloadTable[arguments.length].apply(this, arguments)
				}, i[u].overloadTable = [], i[u].overloadTable[C.argCount] = C
			}
		}

		function Hn(i, u, v) {
			r.hasOwnProperty(i) ? ((v === void 0 || r[i].overloadTable !== void 0 && r[i].overloadTable[v] !== void 0) && br("Cannot register public name '" + i + "' twice"), Ln(r, i, i), r.hasOwnProperty(v) && br("Cannot register multiple overloads of a function with the same number of arguments (" + v + ")!"), r[i].overloadTable[v] = u) : (r[i] = u, v !== void 0 && (r[i].numArguments = v))
		}

		function Gr(i, u) {
			for (var v = [], C = 0; C < i; C++) v.push(ke[u + C * 4 >> 2]);
			return v
		}

		function un(i, u, v) {
			r.hasOwnProperty(i) || Sr("Replacing nonexistant public symbol"), r[i].overloadTable !== void 0 && v !== void 0 ? r[i].overloadTable[v] = u : (r[i] = u, r[i].argCount = v)
		}

		function Xn(i, u, v) {
			var C = r["dynCall_" + i];
			return v && v.length ? C.apply(null, [u].concat(v)) : C.call(null, u)
		}
		var Cn = [];

		function Zn(i) {
			var u = Cn[i];
			return u || (i >= Cn.length && (Cn.length = i + 1), Cn[i] = u = zr.get(i)), u
		}

		function hn(i, u, v) {
			if (i.includes("j")) return Xn(i, u, v);
			var C = Zn(u).apply(null, v);
			return C
		}

		function mn(i, u) {
			var v = [];
			return function() {
				return v.length = 0, Object.assign(v, arguments), hn(i, u, v)
			}
		}

		function jr(i, u) {
			i = Qr(i);

			function v() {
				return i.includes("j") ? mn(i, u) : Zn(u)
			}
			var C = v();
			return typeof C != "function" && br("unknown function pointer with signature " + i + ": " + u), C
		}
		var Hr = void 0;

		function Pn(i) {
			var u = ge(i),
				v = Qr(u);
			return J(u), v
		}

		function xn(i, u) {
			var v = [],
				C = {};

			function $(D) {
				if (!C[D] && !Wr[D]) {
					if (Zr[D]) {
						Zr[D].forEach($);
						return
					}
					v.push(D), C[D] = !0
				}
			}
			throw u.forEach($), new Hr(i + ": " + v.map(Pn).join([", "]))
		}

		function Fn(i, u, v, C, $, D, V) {
			var B = Gr(u, v);
			i = Qr(i), $ = jr(C, $), Hn(i, function() {
				xn("Cannot call " + i + " due to unbound types", B)
			}, u - 1), Br([], B, function(g) {
				var T = [g[0], null].concat(g.slice(1));
				return un(i, Kr(i, T, null, $, D), u - 1), []
			})
		}

		function In(i, u, v) {
			switch (u) {
				case 0:
					return v ? function($) {
						return Ae[$]
					} : function($) {
						return Ve[$]
					};
				case 1:
					return v ? function($) {
						return $e[$ >> 1]
					} : function($) {
						return Me[$ >> 1]
					};
				case 2:
					return v ? function($) {
						return xe[$ >> 2]
					} : function($) {
						return ke[$ >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + i)
			}
		}

		function Wn(i, u, v, C, $) {
			u = Qr(u);
			var D = Ar(v),
				V = re => re;
			if (C === 0) {
				var B = 32 - 8 * v;
				V = re => re << B >>> B
			}
			var g = u.includes("unsigned"),
				T = (re, le) => {},
				L;
			g ? L = function(re, le) {
				return T(le, this.name), le >>> 0
			} : L = function(re, le) {
				return T(le, this.name), le
			}, mr(i, {
				name: u,
				fromWireType: V,
				toWireType: L,
				argPackAdvance: 8,
				readValueFromPointer: In(u, D, C !== 0),
				destructorFunction: null
			})
		}

		function Un(i, u, v) {
			var C = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				$ = C[u];

			function D(V) {
				V = V >> 2;
				var B = ke,
					g = B[V],
					T = B[V + 1];
				return new $(B.buffer, T, g)
			}
			v = Qr(v), mr(i, {
				name: v,
				fromWireType: D,
				argPackAdvance: 8,
				readValueFromPointer: D
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function Vn(i, u) {
			u = Qr(u);
			var v = u === "std::string";
			mr(i, {
				name: u,
				fromWireType: function(C) {
					var $ = ke[C >> 2],
						D = C + 4,
						V;
					if (v)
						for (var B = D, g = 0; g <= $; ++g) {
							var T = D + g;
							if (g == $ || Ve[T] == 0) {
								var L = T - B,
									re = Ee(B, L);
								V === void 0 ? V = re : (V += "\0", V += re), B = T + 1
							}
						} else {
							for (var le = new Array($), g = 0; g < $; ++g) le[g] = String.fromCharCode(Ve[D + g]);
							V = le.join("")
						}
					return J(C), V
				},
				toWireType: function(C, $) {
					$ instanceof ArrayBuffer && ($ = new Uint8Array($));
					var D, V = typeof $ == "string";
					V || $ instanceof Uint8Array || $ instanceof Uint8ClampedArray || $ instanceof Int8Array || br("Cannot pass non-string to std::string"), v && V ? D = je($) : D = $.length;
					var B = I(4 + D + 1),
						g = B + 4;
					if (ke[B >> 2] = D, v && V) Ue($, g, D + 1);
					else if (V)
						for (var T = 0; T < D; ++T) {
							var L = $.charCodeAt(T);
							L > 255 && (J(g), br("String has UTF-16 code units that do not fit in 8 bits")), Ve[g + T] = L
						} else
							for (var T = 0; T < D; ++T) Ve[g + T] = $[T];
					return C !== null && C.push(J, B), B
				},
				argPackAdvance: 8,
				readValueFromPointer: Re,
				destructorFunction: function(C) {
					J(C)
				}
			})
		}

		function Jn(i, u) {
			for (var v = "", C = 0; !(C >= u / 2); ++C) {
				var $ = $e[i + C * 2 >> 1];
				if ($ == 0) break;
				v += String.fromCharCode($)
			}
			return v
		}

		function ct(i, u, v) {
			if (v === void 0 && (v = 2147483647), v < 2) return 0;
			v -= 2;
			for (var C = u, $ = v < i.length * 2 ? v / 2 : i.length, D = 0; D < $; ++D) {
				var V = i.charCodeAt(D);
				$e[u >> 1] = V, u += 2
			}
			return $e[u >> 1] = 0, u - C
		}

		function zn(i) {
			return i.length * 2
		}

		function Bn(i, u) {
			for (var v = 0, C = ""; !(v >= u / 4);) {
				var $ = xe[i + v * 4 >> 2];
				if ($ == 0) break;
				if (++v, $ >= 65536) {
					var D = $ - 65536;
					C += String.fromCharCode(55296 | D >> 10, 56320 | D & 1023)
				} else C += String.fromCharCode($)
			}
			return C
		}

		function dt(i, u, v) {
			if (v === void 0 && (v = 2147483647), v < 4) return 0;
			for (var C = u, $ = C + v - 4, D = 0; D < i.length; ++D) {
				var V = i.charCodeAt(D);
				if (V >= 55296 && V <= 57343) {
					var B = i.charCodeAt(++D);
					V = 65536 + ((V & 1023) << 10) | B & 1023
				}
				if (xe[u >> 2] = V, u += 4, u + 4 > $) break
			}
			return xe[u >> 2] = 0, u - C
		}

		function et(i) {
			for (var u = 0, v = 0; v < i.length; ++v) {
				var C = i.charCodeAt(v);
				C >= 55296 && C <= 57343 && ++v, u += 4
			}
			return u
		}

		function Pr(i, u, v) {
			v = Qr(v);
			var C, $, D, V, B;
			u === 2 ? (C = Jn, $ = ct, V = zn, D = () => Me, B = 1) : u === 4 && (C = Bn, $ = dt, V = et, D = () => ke, B = 2), mr(i, {
				name: v,
				fromWireType: function(g) {
					for (var T = ke[g >> 2], L = D(), re, le = g + 4, pe = 0; pe <= T; ++pe) {
						var A = g + 4 + pe * u;
						if (pe == T || L[A >> B] == 0) {
							var S = A - le,
								M = C(le, S);
							re === void 0 ? re = M : (re += "\0", re += M), le = A + u
						}
					}
					return J(g), re
				},
				toWireType: function(g, T) {
					typeof T != "string" && br("Cannot pass non-string to C++ string type " + v);
					var L = V(T),
						re = I(4 + L + u);
					return ke[re >> 2] = L >> B, $(T, re + 4, L + u), g !== null && g.push(J, re), re
				},
				argPackAdvance: 8,
				readValueFromPointer: Re,
				destructorFunction: function(g) {
					J(g)
				}
			})
		}

		function tt(i, u) {
			u = Qr(u), mr(i, {
				isVoid: !0,
				name: u,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(v, C) {}
			})
		}
		var ar = {};

		function qr(i) {
			var u = ar[i];
			return u === void 0 ? Qr(i) : u
		}

		function sn() {
			if (typeof globalThis == "object") return globalThis;

			function i(u) {
				u.$$$embind_global$$$ = u;
				var v = typeof $$$embind_global$$$ == "object" && u.$$$embind_global$$$ == u;
				return v || delete u.$$$embind_global$$$, v
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && i(global) ? $$$embind_global$$$ = global : typeof self == "object" && i(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function gn(i) {
			return i === 0 ? dr.toHandle(sn()) : (i = qr(i), dr.toHandle(sn()[i]))
		}

		function Vr(i) {
			i > 4 && (hr[i].refcount += 1)
		}

		function Yn(i, u) {
			var v = Wr[i];
			return v === void 0 && br(u + " has unknown type " + Pn(i)), v
		}

		function _n(i) {
			var u = new Array(i + 1);
			return function(v, C, $) {
				u[0] = v;
				for (var D = 0; D < i; ++D) {
					var V = Yn(ke[C + D * 4 >> 2], "parameter " + D);
					u[D + 1] = V.readValueFromPointer($), $ += V.argPackAdvance
				}
				var B = new(v.bind.apply(v, u));
				return dr.toHandle(B)
			}
		}
		var rt = {};

		function at(i, u, v, C) {
			i = dr.toValue(i);
			var $ = rt[u];
			return $ || ($ = _n(u), rt[u] = $), $(i, v, C)
		}

		function Tn() {
			or("")
		}

		function mt(i, u, v) {
			Ve.copyWithin(i, u, u + v)
		}

		function Gn() {
			return 2147483648
		}

		function ut(i) {
			var u = Z.buffer;
			try {
				return Z.grow(i - u.byteLength + 65535 >>> 16), Ne(), 1
			} catch {}
		}

		function Qn(i) {
			var u = Ve.length;
			i = i >>> 0;
			var v = Gn();
			if (i > v) return !1;
			let C = (g, T) => g + (T - g % T) % T;
			for (var $ = 1; $ <= 4; $ *= 2) {
				var D = u * (1 + .2 / $);
				D = Math.min(D, i + 100663296);
				var V = Math.min(v, C(Math.max(i, D), 65536)),
					B = ut(V);
				if (B) return !0
			}
			return !1
		}

		function $n(i) {
			return 52
		}

		function nt(i, u, v, C, $) {
			return 70
		}
		var lt = [null, [],
			[]
		];

		function it(i, u) {
			var v = lt[i];
			u === 0 || u === 10 ? ((i === 1 ? _e : Ce)(q(v, 0)), v.length = 0) : v.push(u)
		}

		function pt(i, u, v, C) {
			for (var $ = 0, D = 0; D < v; D++) {
				var V = ke[u >> 2],
					B = ke[u + 4 >> 2];
				u += 8;
				for (var g = 0; g < B; g++) it(i, Ve[V + g]);
				$ += B
			}
			return ke[C >> 2] = $, 0
		}
		cr(), on = r.BindingError = pr(Error, "BindingError"), xr = r.InternalError = pr(Error, "InternalError"), Rn(), Hr = r.UnboundTypeError = pr(Error, "UnboundTypeError");
		var x = {
			b: Mn,
			o: Tr,
			q: bn,
			m: Je,
			v: an,
			k: vn,
			j: Fn,
			d: Wn,
			c: Un,
			l: Vn,
			g: Pr,
			n: tt,
			e: Ur,
			f: gn,
			i: Vr,
			h: at,
			a: Tn,
			u: mt,
			r: Qn,
			t: $n,
			p: nt,
			s: pt
		};
		Xr();
		var I = function() {
				return (I = r.asm.y).apply(null, arguments)
			},
			J = function() {
				return (J = r.asm.z).apply(null, arguments)
			},
			ge = r.___getTypeName = function() {
				return (ge = r.___getTypeName = r.asm.A).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.B).apply(null, arguments)
		};
		var be = function() {
			return (be = r.asm.D).apply(null, arguments)
		};
		r.dynCall_iiji = function() {
			return (r.dynCall_iiji = r.asm.E).apply(null, arguments)
		}, r.dynCall_jiji = function() {
			return (r.dynCall_jiji = r.asm.F).apply(null, arguments)
		};
		var Fe;
		tn = function i() {
			Fe || P(), Fe || (tn = i)
		};

		function P() {
			if (Mr > 0 || (qe(), Mr > 0)) return;

			function i() {
				Fe || (Fe = !0, r.calledRun = !0, !G && (tr(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), Er()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), i()
			}, 1)) : i()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return P(), r.ready
	}
})();
let iu;
async function h_(e, n) {
	return iu = al(v_, e, n), iu
}
async function eh(e) {
	iu || (iu = h_());
	const r = (await iu).decode(e);
	if (!r) throw new Error("Decoding error");
	return r
}
const m_ = Object.freeze(Object.defineProperty({
	__proto__: null,
	decode: eh,
	encode: Jv
}, Symbol.toStringTag, {
	value: "Module"
}));
let zt, rh = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
rh.decode();
let Bu = null;

function vc() {
	return (Bu === null || Bu.buffer !== zt.memory.buffer) && (Bu = new Uint8Array(zt.memory.buffer)), Bu
}

function g_(e, n) {
	return rh.decode(vc().subarray(e, e + n))
}
let Yu = null;

function __() {
	return (Yu === null || Yu.buffer !== zt.memory.buffer) && (Yu = new Uint8ClampedArray(zt.memory.buffer)), Yu
}

function y_(e, n) {
	return __().subarray(e / 1, e / 1 + n)
}
const Hi = new Array(32).fill(void 0);
Hi.push(void 0, null, !0, !1);
let ou = Hi.length;

function w_(e) {
	ou === Hi.length && Hi.push(Hi.length + 1);
	const n = ou;
	return ou = Hi[n], Hi[n] = e, n
}
let hc = 0;

function nh(e, n) {
	const r = n(e.length * 1);
	return vc().set(e, r / 1), hc = e.length, r
}
let Gu = null;

function Rd() {
	return (Gu === null || Gu.buffer !== zt.memory.buffer) && (Gu = new Int32Array(zt.memory.buffer)), Gu
}

function E_(e, n) {
	return vc().subarray(e / 1, e / 1 + n)
}

function b_(e, n, r) {
	try {
		const U = zt.__wbindgen_add_to_stack_pointer(-16);
		var t = nh(e, zt.__wbindgen_malloc),
			o = hc;
		zt.encode(U, t, o, n, r);
		var s = Rd()[U / 4 + 0],
			p = Rd()[U / 4 + 1],
			k = E_(s, p).slice();
		return zt.__wbindgen_free(s, p * 1), k
	} finally {
		zt.__wbindgen_add_to_stack_pointer(16)
	}
}

function T_(e) {
	return Hi[e]
}

function A_(e) {
	e < 36 || (Hi[e] = ou, ou = e)
}

function C_(e) {
	const n = T_(e);
	return A_(e), n
}

function S_(e) {
	var n = nh(e, zt.__wbindgen_malloc),
		r = hc,
		t = zt.decode(n, r);
	return C_(t)
}
async function k_(e, n) {
	if (typeof Response == "function" && e instanceof Response) {
		if (typeof WebAssembly.instantiateStreaming == "function") try {
			return await WebAssembly.instantiateStreaming(e, n)
		} catch (t) {
			if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
			else throw t
		}
		const r = await e.arrayBuffer();
		return await WebAssembly.instantiate(r, n)
	} else {
		const r = await WebAssembly.instantiate(e, n);
		return r instanceof WebAssembly.Instance ? {
			instance: r,
			module: e
		} : r
	}
}
async function mc(e) {
	typeof e > "u" && (e = new URL(location.href +"assets/squoosh_png_bg-3Rhg4duP.wasm", import.meta.url));
	const n = {};
	n.wbg = {}, n.wbg.__wbg_newwithownedu8clampedarrayandsh_787b2db8ea6bfd62 = function(o, s, p, k) {
		var U = y_(o, s).slice();
		zt.__wbindgen_free(o, s * 1);
		var K = new ImageData(U, p >>> 0, k >>> 0);
		return w_(K)
	}, n.wbg.__wbindgen_throw = function(o, s) {
		throw new Error(g_(o, s))
	}, (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
	const {
		instance: r,
		module: t
	} = await k_(await e, n);
	return zt = r.exports, mc.__wbindgen_wasm_module = t, zt
}
const R_ = globalThis.ServiceWorkerGlobalScope !== void 0,
	P_ = R_ && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
	F_ = typeof process == "object" && process.release && process.release.name === "node";
(P_ || F_) && (globalThis.ImageData || (globalThis.ImageData = class {
	constructor(n, r, t) {
		this.data = n, this.width = r, this.height = t
	}
}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
	href: ""
}));
let ys;
async function $_(e) {
	return ys || (ys = mc(e)), ys
}
async function th(e) {
	await $_();
	const n = await b_(e.data, e.width, e.height);
	if (!n) throw new Error("Encoding error.");
	return n
}
let ws;
async function O_(e) {
	return ws || (ws = mc(e)), ws
}
async function ih(e) {
	await O_();
	const n = await S_(new Uint8Array(e));
	if (!n) throw new Error("Encoding error.");
	return n
}
const W_ = Object.freeze(Object.defineProperty({
		__proto__: null,
		decode: ih,
		encode: th
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	U_ = {
		quality: 75,
		target_size: 0,
		target_PSNR: 0,
		method: 4,
		sns_strength: 50,
		filter_strength: 60,
		filter_sharpness: 0,
		filter_type: 1,
		partitions: 0,
		segments: 4,
		pass: 1,
		show_compressed: 0,
		preprocessing: 0,
		autofilter: 0,
		partition_limit: 0,
		alpha_compression: 1,
		alpha_filtering: 1,
		alpha_quality: 100,
		lossless: 0,
		exact: 0,
		image_hint: 0,
		emulate_jpeg_size: 0,
		thread_level: 0,
		low_memory: 0,
		near_lossless: 100,
		use_delta_palette: 0,
		use_sharp_yuv: 0
	};

function _f(e, n, r = {}) {
	return e({
		noInitialRun: !0,
		instantiateWasm: void 0,
		...r
	})
}
let xo;
async function j_(e, n) {
	if (await Yv()) {
		const t = await pi(() => Promise.resolve().then(() => uy), void 0);
		return xo = _f(t.default, e, n), xo
	}
	const r = await pi(() => Promise.resolve().then(() => sy), void 0);
	return xo = _f(r.default, e, n), xo
}
async function oh(e, n = {}) {
	xo || (xo = j_());
	const r = {
			...U_,
			...n
		},
		o = (await xo).encode(e.data, e.width, e.height, r);
	if (!o) throw new Error("Encoding error.");
	return o.buffer
}
var M_ = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(x, I) {
			t = x, o = I
		});
		const p = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
			k = typeof process == "object" && process.release && process.release.name === "node";
		(p || k) && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(I, J, ge) {
				this.data = I, this.width = J, this.height = ge
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
			href: ""
		}));
		var U = Object.assign({}, r),
			K = typeof window == "object",
			f = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var te = "";

		function ae(x) {
			return r.locateFile ? r.locateFile(x, te) : te + x
		}
		var ce;
		(K || f) && (f ? te = self.location.href : typeof document < "u" && document.currentScript && (te = document.currentScript.src), e && (te = e), te.indexOf("blob:") !== 0 ? te = te.substr(0, te.replace(/[?#].*/, "").lastIndexOf("/") + 1) : te = "", f && (ce = x => {
			var I = new XMLHttpRequest;
			return I.open("GET", x, !1), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response)
		})), r.print || console.log.bind(console);
		var _e = r.printErr || console.warn.bind(console);
		Object.assign(r, U), U = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
		var Ce;
		r.wasmBinary && (Ce = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && On("no native wasm support detected");
		var Qe, Z = !1;

		function G(x, I, J) {
			for (var ge = I + J, be = ""; !(I >= ge);) {
				var Fe = x[I++];
				if (!Fe) return be;
				if (!(Fe & 128)) {
					be += String.fromCharCode(Fe);
					continue
				}
				var P = x[I++] & 63;
				if ((Fe & 224) == 192) {
					be += String.fromCharCode((Fe & 31) << 6 | P);
					continue
				}
				var i = x[I++] & 63;
				if ((Fe & 240) == 224 ? Fe = (Fe & 15) << 12 | P << 6 | i : Fe = (Fe & 7) << 18 | P << 12 | i << 6 | x[I++] & 63, Fe < 65536) be += String.fromCharCode(Fe);
				else {
					var u = Fe - 65536;
					be += String.fromCharCode(55296 | u >> 10, 56320 | u & 1023)
				}
			}
			return be
		}

		function q(x, I) {
			return x ? G(Ae, x, I) : ""
		}

		function Ee(x, I, J, ge) {
			if (!(ge > 0)) return 0;
			for (var be = J, Fe = J + ge - 1, P = 0; P < x.length; ++P) {
				var i = x.charCodeAt(P);
				if (i >= 55296 && i <= 57343) {
					var u = x.charCodeAt(++P);
					i = 65536 + ((i & 1023) << 10) | u & 1023
				}
				if (i <= 127) {
					if (J >= Fe) break;
					I[J++] = i
				} else if (i <= 2047) {
					if (J + 1 >= Fe) break;
					I[J++] = 192 | i >> 6, I[J++] = 128 | i & 63
				} else if (i <= 65535) {
					if (J + 2 >= Fe) break;
					I[J++] = 224 | i >> 12, I[J++] = 128 | i >> 6 & 63, I[J++] = 128 | i & 63
				} else {
					if (J + 3 >= Fe) break;
					I[J++] = 240 | i >> 18, I[J++] = 128 | i >> 12 & 63, I[J++] = 128 | i >> 6 & 63, I[J++] = 128 | i & 63
				}
			}
			return I[J] = 0, J - be
		}

		function Te(x, I, J) {
			return Ee(x, Ae, I, J)
		}

		function Ue(x) {
			for (var I = 0, J = 0; J < x.length; ++J) {
				var ge = x.charCodeAt(J);
				ge <= 127 ? I++ : ge <= 2047 ? I += 2 : ge >= 55296 && ge <= 57343 ? (I += 4, ++J) : I += 3
			}
			return I
		}
		var je, Ae, Ve, $e, Me, xe, ke, sr;

		function Be() {
			var x = Qe.buffer;
			r.HEAP8 = je = new Int8Array(x), r.HEAP16 = Ve = new Int16Array(x), r.HEAP32 = Me = new Int32Array(x), r.HEAPU8 = Ae = new Uint8Array(x), r.HEAPU16 = $e = new Uint16Array(x), r.HEAPU32 = xe = new Uint32Array(x), r.HEAPF32 = ke = new Float32Array(x), r.HEAPF64 = sr = new Float64Array(x)
		}
		var Ne, zr = [],
			Pe = [],
			ze = [];

		function Ge() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) Er(r.preRun.shift());
			Xr(zr)
		}

		function qe() {
			Xr(Pe)
		}

		function tr() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) nn(r.postRun.shift());
			Xr(ze)
		}

		function Er(x) {
			zr.unshift(x)
		}

		function fn(x) {
			Pe.unshift(x)
		}

		function nn(x) {
			ze.unshift(x)
		}
		var Ze = 0,
			Mr = null;

		function tn(x) {
			Ze++, r.monitorRunDependencies && r.monitorRunDependencies(Ze)
		}

		function wn(x) {
			if (Ze--, r.monitorRunDependencies && r.monitorRunDependencies(Ze), Ze == 0 && Mr) {
				var I = Mr;
				Mr = null, I()
			}
		}

		function On(x) {
			r.onAbort && r.onAbort(x), x = "Aborted(" + x + ")", _e(x), Z = !0, x += ". Build with -sASSERTIONS for more info.";
			var I = new WebAssembly.RuntimeError(x);
			throw o(I), I
		}
		var or = "data:application/octet-stream;base64,";

		function yr(x) {
			return x.startsWith(or)
		}
		var Fr;
		r.locateFile ? (Fr = "webp_dec.wasm", yr(Fr) || (Fr = ae(Fr))) : Fr = new URL(location.href +"assets/webp_dec-C990n7mh.wasm", import.meta.url).href;

		function cn(x) {
			try {
				if (x == Fr && Ce) return new Uint8Array(Ce);
				if (ce) return ce(x);
				throw "both async and sync fetching of the wasm failed"
			} catch (I) {
				On(I)
			}
		}

		function En(x) {
			return !Ce && (K || f) && typeof fetch == "function" ? fetch(x, {
				credentials: "same-origin"
			}).then(function(I) {
				if (!I.ok) throw "failed to load wasm binary file at '" + x + "'";
				return I.arrayBuffer()
			}).catch(function() {
				return cn(x)
			}) : Promise.resolve().then(function() {
				return cn(x)
			})
		}

		function $r(x, I, J) {
			return En(x).then(function(ge) {
				return WebAssembly.instantiate(ge, I)
			}).then(function(ge) {
				return ge
			}).then(J, function(ge) {
				_e("failed to asynchronously prepare wasm: " + ge), On(ge)
			})
		}

		function dn(x, I, J, ge) {
			return !x && typeof WebAssembly.instantiateStreaming == "function" && !yr(I) && typeof fetch == "function" ? fetch(I, {
				credentials: "same-origin"
			}).then(function(be) {
				var Fe = WebAssembly.instantiateStreaming(be, J);
				return Fe.then(ge, function(P) {
					return _e("wasm streaming compile failed: " + P), _e("falling back to ArrayBuffer instantiation"), $r(I, J, ge)
				})
			}) : $r(I, J, ge)
		}

		function pn() {
			var x = {
				a: ut
			};

			function I(ge, be) {
				var Fe = ge.exports;
				return r.asm = Fe, Qe = r.asm.s, Be(), Ne = r.asm.y, fn(r.asm.t), wn(), Fe
			}
			tn();

			function J(ge) {
				I(ge.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(x, I)
			} catch (ge) {
				_e("Module.instantiateWasm callback failed with error: " + ge), o(ge)
			}
			return dn(Ce, Fr, x, J).catch(o), {}
		}

		function Xr(x) {
			for (; x.length > 0;) x.shift()(r)
		}

		function Ir(x) {
			this.excPtr = x, this.ptr = x - 24, this.set_type = function(I) {
				xe[this.ptr + 4 >> 2] = I
			}, this.get_type = function() {
				return xe[this.ptr + 4 >> 2]
			}, this.set_destructor = function(I) {
				xe[this.ptr + 8 >> 2] = I
			}, this.get_destructor = function() {
				return xe[this.ptr + 8 >> 2]
			}, this.set_refcount = function(I) {
				Me[this.ptr >> 2] = I
			}, this.set_caught = function(I) {
				I = I ? 1 : 0, je[this.ptr + 12 >> 0] = I
			}, this.get_caught = function() {
				return je[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(I) {
				I = I ? 1 : 0, je[this.ptr + 13 >> 0] = I
			}, this.get_rethrown = function() {
				return je[this.ptr + 13 >> 0] != 0
			}, this.init = function(I, J) {
				this.set_adjusted_ptr(0), this.set_type(I), this.set_destructor(J), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var I = Me[this.ptr >> 2];
				Me[this.ptr >> 2] = I + 1
			}, this.release_ref = function() {
				var I = Me[this.ptr >> 2];
				return Me[this.ptr >> 2] = I - 1, I === 1
			}, this.set_adjusted_ptr = function(I) {
				xe[this.ptr + 16 >> 2] = I
			}, this.get_adjusted_ptr = function() {
				return xe[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var I = lt(this.get_type());
				if (I) return xe[this.excPtr >> 2];
				var J = this.get_adjusted_ptr();
				return J !== 0 ? J : this.excPtr
			}
		}

		function Mn(x, I, J) {
			var ge = new Ir(x);
			throw ge.init(I, J), x
		}

		function Dr(x, I, J, ge, be) {}

		function Tr(x) {
			switch (x) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + x)
			}
		}

		function bn() {
			for (var x = new Array(256), I = 0; I < 256; ++I) x[I] = String.fromCharCode(I);
			Ar = x
		}
		var Ar = void 0;

		function cr(x) {
			for (var I = "", J = x; Ae[J];) I += Ar[Ae[J++]];
			return I
		}
		var en = {},
			Qr = {},
			Or = {},
			Wr = 48,
			Zr = 57;

		function Cr(x) {
			if (x === void 0) return "_unknown";
			x = x.replace(/[^a-zA-Z0-9_]/g, "$");
			var I = x.charCodeAt(0);
			return I >= Wr && I <= Zr ? "_" + x : x
		}

		function kr(x, I) {
			return x = Cr(x), {
				[x]: function() {
					return I.apply(this, arguments)
				}
			} [x]
		}

		function Rr(x, I) {
			var J = kr(I, function(ge) {
				this.name = I, this.message = ge;
				var be = new Error(ge).stack;
				be !== void 0 && (this.stack = this.toString() + `
` + be.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return J.prototype = Object.create(x.prototype), J.prototype.constructor = J, J.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, J
		}
		var Jr = void 0;

		function pr(x) {
			throw new Jr(x)
		}
		var on = void 0;

		function br(x) {
			throw new on(x)
		}

		function xr(x, I, J) {
			x.forEach(function(i) {
				Or[i] = I
			});

			function ge(i) {
				var u = J(i);
				u.length !== x.length && br("Mismatched type converter count");
				for (var v = 0; v < x.length; ++v) Sr(x[v], u[v])
			}
			var be = new Array(I.length),
				Fe = [],
				P = 0;
			I.forEach((i, u) => {
				Qr.hasOwnProperty(i) ? be[u] = Qr[i] : (Fe.push(i), en.hasOwnProperty(i) || (en[i] = []), en[i].push(() => {
					be[u] = Qr[i], ++P, P === Fe.length && ge(be)
				}))
			}), Fe.length === 0 && ge(be)
		}

		function Sr(x, I, J = {}) {
			if (!("argPackAdvance" in I)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var ge = I.name;
			if (x || pr('type "' + ge + '" must have a positive integer typeid pointer'), Qr.hasOwnProperty(x)) {
				if (J.ignoreDuplicateRegistrations) return;
				pr("Cannot register type '" + ge + "' twice")
			}
			if (Qr[x] = I, delete Or[x], en.hasOwnProperty(x)) {
				var be = en[x];
				delete en[x], be.forEach(Fe => Fe())
			}
		}

		function Br(x, I, J, ge, be) {
			var Fe = Tr(J);
			I = cr(I), Sr(x, {
				name: I,
				fromWireType: function(P) {
					return !!P
				},
				toWireType: function(P, i) {
					return i ? ge : be
				},
				argPackAdvance: 8,
				readValueFromPointer: function(P) {
					var i;
					if (J === 1) i = je;
					else if (J === 2) i = Ve;
					else if (J === 4) i = Me;
					else throw new TypeError("Unknown boolean type size: " + I);
					return this.fromWireType(i[P >> Fe])
				},
				destructorFunction: null
			})
		}
		var mr = [],
			Je = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function wr(x) {
			x > 4 && --Je[x].refcount === 0 && (Je[x] = void 0, mr.push(x))
		}

		function hr() {
			for (var x = 0, I = 5; I < Je.length; ++I) Je[I] !== void 0 && ++x;
			return x
		}

		function Ur() {
			for (var x = 5; x < Je.length; ++x)
				if (Je[x] !== void 0) return Je[x];
			return null
		}

		function lr() {
			r.count_emval_handles = hr, r.get_first_emval = Ur
		}
		var we = {
			toValue: x => (x || pr("Cannot use deleted val. handle = " + x), Je[x].value),
			toHandle: x => {
				switch (x) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var I = mr.length ? mr.pop() : Je.length;
						return Je[I] = {
							refcount: 1,
							value: x
						}, I
					}
				}
			}
		};

		function Rn(x) {
			return this.fromWireType(Me[x >> 2])
		}

		function dr(x, I) {
			I = cr(I), Sr(x, {
				name: I,
				fromWireType: function(J) {
					var ge = we.toValue(J);
					return wr(J), ge
				},
				toWireType: function(J, ge) {
					return we.toHandle(ge)
				},
				argPackAdvance: 8,
				readValueFromPointer: Rn,
				destructorFunction: null
			})
		}

		function Re(x, I) {
			switch (I) {
				case 2:
					return function(J) {
						return this.fromWireType(ke[J >> 2])
					};
				case 3:
					return function(J) {
						return this.fromWireType(sr[J >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + x)
			}
		}

		function an(x, I, J) {
			var ge = Tr(J);
			I = cr(I), Sr(x, {
				name: I,
				fromWireType: function(be) {
					return be
				},
				toWireType: function(be, Fe) {
					return Fe
				},
				argPackAdvance: 8,
				readValueFromPointer: Re(I, ge),
				destructorFunction: null
			})
		}

		function Yr(x) {
			for (; x.length;) {
				var I = x.pop(),
					J = x.pop();
				J(I)
			}
		}

		function vn(x, I, J, ge, be, Fe) {
			var P = I.length;
			P < 2 && pr("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var i = I[1] !== null && J !== null, u = !1, v = 1; v < I.length; ++v)
				if (I[v] !== null && I[v].destructorFunction === void 0) {
					u = !0;
					break
				} var C = I[0].name !== "void",
				$ = P - 2,
				D = new Array($),
				V = [],
				B = [];
			return function() {
				arguments.length !== $ && pr("function " + x + " called with " + arguments.length + " arguments, expected " + $ + " args!"), B.length = 0;
				var g;
				V.length = i ? 2 : 1, V[0] = be, i && (g = I[1].toWireType(B, this), V[1] = g);
				for (var T = 0; T < $; ++T) D[T] = I[T + 2].toWireType(B, arguments[T]), V.push(D[T]);
				var L = ge.apply(null, V);

				function re(le) {
					if (u) Yr(B);
					else
						for (var pe = i ? 1 : 2; pe < I.length; pe++) {
							var A = pe === 1 ? g : D[pe - 2];
							I[pe].destructorFunction !== null && I[pe].destructorFunction(A)
						}
					if (C) return I[0].fromWireType(le)
				}
				return re(L)
			}
		}

		function Lr(x, I, J) {
			if (x[I].overloadTable === void 0) {
				var ge = x[I];
				x[I] = function() {
					return x[I].overloadTable.hasOwnProperty(arguments.length) || pr("Function '" + J + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + x[I].overloadTable + ")!"), x[I].overloadTable[arguments.length].apply(this, arguments)
				}, x[I].overloadTable = [], x[I].overloadTable[ge.argCount] = ge
			}
		}

		function Kr(x, I, J) {
			r.hasOwnProperty(x) ? ((J === void 0 || r[x].overloadTable !== void 0 && r[x].overloadTable[J] !== void 0) && pr("Cannot register public name '" + x + "' twice"), Lr(r, x, x), r.hasOwnProperty(J) && pr("Cannot register multiple overloads of a function with the same number of arguments (" + J + ")!"), r[x].overloadTable[J] = I) : (r[x] = I, J !== void 0 && (r[x].numArguments = J))
		}

		function Ln(x, I) {
			for (var J = [], ge = 0; ge < x; ge++) J.push(xe[I + ge * 4 >> 2]);
			return J
		}

		function Hn(x, I, J) {
			r.hasOwnProperty(x) || br("Replacing nonexistant public symbol"), r[x].overloadTable !== void 0 && J !== void 0 ? r[x].overloadTable[J] = I : (r[x] = I, r[x].argCount = J)
		}

		function Gr(x, I, J) {
			var ge = r["dynCall_" + x];
			return J && J.length ? ge.apply(null, [I].concat(J)) : ge.call(null, I)
		}
		var un = [];

		function Xn(x) {
			var I = un[x];
			return I || (x >= un.length && (un.length = x + 1), un[x] = I = Ne.get(x)), I
		}

		function Cn(x, I, J) {
			if (x.includes("j")) return Gr(x, I, J);
			var ge = Xn(I).apply(null, J);
			return ge
		}

		function Zn(x, I) {
			var J = [];
			return function() {
				return J.length = 0, Object.assign(J, arguments), Cn(x, I, J)
			}
		}

		function hn(x, I) {
			x = cr(x);

			function J() {
				return x.includes("j") ? Zn(x, I) : Xn(I)
			}
			var ge = J();
			return typeof ge != "function" && pr("unknown function pointer with signature " + x + ": " + I), ge
		}
		var mn = void 0;

		function jr(x) {
			var I = nt(x),
				J = cr(I);
			return $n(I), J
		}

		function Hr(x, I) {
			var J = [],
				ge = {};

			function be(Fe) {
				if (!ge[Fe] && !Qr[Fe]) {
					if (Or[Fe]) {
						Or[Fe].forEach(be);
						return
					}
					J.push(Fe), ge[Fe] = !0
				}
			}
			throw I.forEach(be), new mn(x + ": " + J.map(jr).join([", "]))
		}

		function Pn(x, I, J, ge, be, Fe, P) {
			var i = Ln(I, J);
			x = cr(x), be = hn(ge, be), Kr(x, function() {
				Hr("Cannot call " + x + " due to unbound types", i)
			}, I - 1), xr([], i, function(u) {
				var v = [u[0], null].concat(u.slice(1));
				return Hn(x, vn(x, v, null, be, Fe), I - 1), []
			})
		}

		function xn(x, I, J) {
			switch (I) {
				case 0:
					return J ? function(be) {
						return je[be]
					} : function(be) {
						return Ae[be]
					};
				case 1:
					return J ? function(be) {
						return Ve[be >> 1]
					} : function(be) {
						return $e[be >> 1]
					};
				case 2:
					return J ? function(be) {
						return Me[be >> 2]
					} : function(be) {
						return xe[be >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + x)
			}
		}

		function Fn(x, I, J, ge, be) {
			I = cr(I);
			var Fe = Tr(J),
				P = $ => $;
			if (ge === 0) {
				var i = 32 - 8 * J;
				P = $ => $ << i >>> i
			}
			var u = I.includes("unsigned"),
				v = ($, D) => {},
				C;
			u ? C = function($, D) {
				return v(D, this.name), D >>> 0
			} : C = function($, D) {
				return v(D, this.name), D
			}, Sr(x, {
				name: I,
				fromWireType: P,
				toWireType: C,
				argPackAdvance: 8,
				readValueFromPointer: xn(I, Fe, ge !== 0),
				destructorFunction: null
			})
		}

		function In(x, I, J) {
			var ge = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				be = ge[I];

			function Fe(P) {
				P = P >> 2;
				var i = xe,
					u = i[P],
					v = i[P + 1];
				return new be(i.buffer, v, u)
			}
			J = cr(J), Sr(x, {
				name: J,
				fromWireType: Fe,
				argPackAdvance: 8,
				readValueFromPointer: Fe
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function Wn(x, I) {
			I = cr(I);
			var J = I === "std::string";
			Sr(x, {
				name: I,
				fromWireType: function(ge) {
					var be = xe[ge >> 2],
						Fe = ge + 4,
						P;
					if (J)
						for (var i = Fe, u = 0; u <= be; ++u) {
							var v = Fe + u;
							if (u == be || Ae[v] == 0) {
								var C = v - i,
									$ = q(i, C);
								P === void 0 ? P = $ : (P += "\0", P += $), i = v + 1
							}
						} else {
							for (var D = new Array(be), u = 0; u < be; ++u) D[u] = String.fromCharCode(Ae[Fe + u]);
							P = D.join("")
						}
					return $n(ge), P
				},
				toWireType: function(ge, be) {
					be instanceof ArrayBuffer && (be = new Uint8Array(be));
					var Fe, P = typeof be == "string";
					P || be instanceof Uint8Array || be instanceof Uint8ClampedArray || be instanceof Int8Array || pr("Cannot pass non-string to std::string"), J && P ? Fe = Ue(be) : Fe = be.length;
					var i = Qn(4 + Fe + 1),
						u = i + 4;
					if (xe[i >> 2] = Fe, J && P) Te(be, u, Fe + 1);
					else if (P)
						for (var v = 0; v < Fe; ++v) {
							var C = be.charCodeAt(v);
							C > 255 && ($n(u), pr("String has UTF-16 code units that do not fit in 8 bits")), Ae[u + v] = C
						} else
							for (var v = 0; v < Fe; ++v) Ae[u + v] = be[v];
					return ge !== null && ge.push($n, i), i
				},
				argPackAdvance: 8,
				readValueFromPointer: Rn,
				destructorFunction: function(ge) {
					$n(ge)
				}
			})
		}

		function Un(x, I) {
			for (var J = "", ge = 0; !(ge >= I / 2); ++ge) {
				var be = Ve[x + ge * 2 >> 1];
				if (be == 0) break;
				J += String.fromCharCode(be)
			}
			return J
		}

		function Vn(x, I, J) {
			if (J === void 0 && (J = 2147483647), J < 2) return 0;
			J -= 2;
			for (var ge = I, be = J < x.length * 2 ? J / 2 : x.length, Fe = 0; Fe < be; ++Fe) {
				var P = x.charCodeAt(Fe);
				Ve[I >> 1] = P, I += 2
			}
			return Ve[I >> 1] = 0, I - ge
		}

		function Jn(x) {
			return x.length * 2
		}

		function ct(x, I) {
			for (var J = 0, ge = ""; !(J >= I / 4);) {
				var be = Me[x + J * 4 >> 2];
				if (be == 0) break;
				if (++J, be >= 65536) {
					var Fe = be - 65536;
					ge += String.fromCharCode(55296 | Fe >> 10, 56320 | Fe & 1023)
				} else ge += String.fromCharCode(be)
			}
			return ge
		}

		function zn(x, I, J) {
			if (J === void 0 && (J = 2147483647), J < 4) return 0;
			for (var ge = I, be = ge + J - 4, Fe = 0; Fe < x.length; ++Fe) {
				var P = x.charCodeAt(Fe);
				if (P >= 55296 && P <= 57343) {
					var i = x.charCodeAt(++Fe);
					P = 65536 + ((P & 1023) << 10) | i & 1023
				}
				if (Me[I >> 2] = P, I += 4, I + 4 > be) break
			}
			return Me[I >> 2] = 0, I - ge
		}

		function Bn(x) {
			for (var I = 0, J = 0; J < x.length; ++J) {
				var ge = x.charCodeAt(J);
				ge >= 55296 && ge <= 57343 && ++J, I += 4
			}
			return I
		}

		function dt(x, I, J) {
			J = cr(J);
			var ge, be, Fe, P, i;
			I === 2 ? (ge = Un, be = Vn, P = Jn, Fe = () => $e, i = 1) : I === 4 && (ge = ct, be = zn, P = Bn, Fe = () => xe, i = 2), Sr(x, {
				name: J,
				fromWireType: function(u) {
					for (var v = xe[u >> 2], C = Fe(), $, D = u + 4, V = 0; V <= v; ++V) {
						var B = u + 4 + V * I;
						if (V == v || C[B >> i] == 0) {
							var g = B - D,
								T = ge(D, g);
							$ === void 0 ? $ = T : ($ += "\0", $ += T), D = B + I
						}
					}
					return $n(u), $
				},
				toWireType: function(u, v) {
					typeof v != "string" && pr("Cannot pass non-string to C++ string type " + J);
					var C = P(v),
						$ = Qn(4 + C + I);
					return xe[$ >> 2] = C >> i, be(v, $ + 4, C + I), u !== null && u.push($n, $), $
				},
				argPackAdvance: 8,
				readValueFromPointer: Rn,
				destructorFunction: function(u) {
					$n(u)
				}
			})
		}

		function et(x, I) {
			I = cr(I), Sr(x, {
				isVoid: !0,
				name: I,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(J, ge) {}
			})
		}
		var Pr = {};

		function tt(x) {
			var I = Pr[x];
			return I === void 0 ? cr(x) : I
		}

		function ar() {
			if (typeof globalThis == "object") return globalThis;

			function x(I) {
				I.$$$embind_global$$$ = I;
				var J = typeof $$$embind_global$$$ == "object" && I.$$$embind_global$$$ == I;
				return J || delete I.$$$embind_global$$$, J
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && x(global) ? $$$embind_global$$$ = global : typeof self == "object" && x(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function qr(x) {
			return x === 0 ? we.toHandle(ar()) : (x = tt(x), we.toHandle(ar()[x]))
		}

		function sn(x) {
			x > 4 && (Je[x].refcount += 1)
		}

		function gn(x, I) {
			var J = Qr[x];
			return J === void 0 && pr(I + " has unknown type " + jr(x)), J
		}

		function Vr(x) {
			var I = new Array(x + 1);
			return function(J, ge, be) {
				I[0] = J;
				for (var Fe = 0; Fe < x; ++Fe) {
					var P = gn(xe[ge + Fe * 4 >> 2], "parameter " + Fe);
					I[Fe + 1] = P.readValueFromPointer(be), be += P.argPackAdvance
				}
				var i = new(J.bind.apply(J, I));
				return we.toHandle(i)
			}
		}
		var Yn = {};

		function _n(x, I, J, ge) {
			x = we.toValue(x);
			var be = Yn[I];
			return be || (be = Vr(I), Yn[I] = be), be(x, J, ge)
		}

		function rt() {
			On("")
		}

		function at(x, I, J) {
			Ae.copyWithin(x, I, I + J)
		}

		function Tn() {
			return 2147483648
		}

		function mt(x) {
			var I = Qe.buffer;
			try {
				return Qe.grow(x - I.byteLength + 65535 >>> 16), Be(), 1
			} catch {}
		}

		function Gn(x) {
			var I = Ae.length;
			x = x >>> 0;
			var J = Tn();
			if (x > J) return !1;
			let ge = (u, v) => u + (v - u % v) % v;
			for (var be = 1; be <= 4; be *= 2) {
				var Fe = I * (1 + .2 / be);
				Fe = Math.min(Fe, x + 100663296);
				var P = Math.min(J, ge(Math.max(x, Fe), 65536)),
					i = mt(P);
				if (i) return !0
			}
			return !1
		}
		bn(), Jr = r.BindingError = Rr(Error, "BindingError"), on = r.InternalError = Rr(Error, "InternalError"), lr(), mn = r.UnboundTypeError = Rr(Error, "UnboundTypeError");
		var ut = {
			n: Mn,
			o: Dr,
			l: Br,
			r: dr,
			k: an,
			c: Pn,
			b: Fn,
			a: In,
			g: Wn,
			f: dt,
			m: et,
			d: wr,
			e: qr,
			i: sn,
			h: _n,
			j: rt,
			q: at,
			p: Gn
		};
		pn();
		var Qn = function() {
				return (Qn = r.asm.u).apply(null, arguments)
			},
			$n = function() {
				return ($n = r.asm.v).apply(null, arguments)
			},
			nt = r.___getTypeName = function() {
				return (nt = r.___getTypeName = r.asm.w).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.x).apply(null, arguments)
		};
		var lt = function() {
				return (lt = r.asm.z).apply(null, arguments)
			},
			it;
		Mr = function x() {
			it || pt(), it || (Mr = x)
		};

		function pt() {
			if (Ze > 0 || (Ge(), Ze > 0)) return;

			function x() {
				it || (it = !0, r.calledRun = !0, !Z && (qe(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), tr()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), x()
			}, 1)) : x()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return pt(), r.ready
	}
})();
let yf;
async function x_(e, n) {
	yf = _f(M_, e, n)
}
async function ah(e) {
	yf || x_();
	const r = (await yf).decode(e);
	if (!r) throw new Error("Decoding error");
	return r
}
const I_ = Object.freeze(Object.defineProperty({
		__proto__: null,
		decode: ah,
		encode: oh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Pd = new Map;
async function uh(e) {
	if (!Pd.get(e)) try {
		switch (e) {
			case "avif":
				await pi(() => Promise.resolve().then(() => t_), void 0);
				break;
			case "jpeg":
				await pi(() => Promise.resolve().then(() => s_), void 0);
				break;
			case "jxl":
				await pi(() => Promise.resolve().then(() => m_), void 0);
				break;
			case "png":
				await pi(() => Promise.resolve().then(() => W_), void 0);
				break;
			case "webp":
				await pi(() => Promise.resolve().then(() => I_), void 0);
				break
		}
		Pd.set(e, !0)
	} catch (n) {
		throw console.error(`Failed to initialize WASM for ${e}:`, n), new Error(`Failed to initialize ${e} support`)
	}
}
async function D_(e, n) {
	await uh(e);
	try {
		switch (e) {
			case "avif":
				return await Kv(n);
			case "jpeg":
			case "jpg":
				return await Zv(n);
			case "jxl":
				return await eh(n);
			case "png":
				return await ih(n);
			case "webp":
				return await ah(n);
			default:
				throw new Error(`Unsupported source type: ${e}`)
		}
	} catch (r) {
		throw console.error(`Failed to decode ${e} image:`, r), new Error(`Failed to decode ${e} image`)
	}
}
async function N_(e, n, r) {
	await uh(e);
	try {
		switch (e) {
			case "avif": {
				const t = {
					quality: r.quality,
					effort: 4
				};
				return await Qv(n, t)
			}
			case "jpeg": {
				const t = {
					quality: r.quality
				};
				return await Xv(n, t)
			}
			case "jxl": {
				const t = {
					quality: r.quality
				};
				return await Jv(n, t)
			}
			case "png":
				return await th(n);
			case "webp": {
				const t = {
					quality: r.quality
				};
				return await oh(n, t)
			}
			default:
				throw new Error(`Unsupported output type: ${e}`)
		}
	} catch (t) {
		throw console.error(`Failed to encode to ${e}:`, t), new Error(`Failed to encode to ${e}`)
	}
}

function L_(e) {
	if (e.name.toLowerCase().endsWith("jxl")) return "jxl";
	const n = e.type.split("/")[1];
	return n === "jpeg" ? "jpg" : n
}

function Fd(e) {
	if (e === 0) return "0 B";
	const n = 1024,
		r = ["B", "KB", "MB", "GB"],
		t = Math.floor(Math.log(e) / Math.log(n));
	return `${parseFloat((e/Math.pow(n,t)).toFixed(2))} ${r[t]}`
}

function H_(e) {
	if (!e.blob || !e.outputType) return;
	const n = document.createElement("a");
	n.href = URL.createObjectURL(e.blob), n.download = `${e.file.name.split(".")[0]}.${e.outputType}`, n.click(), URL.revokeObjectURL(n.href)
}

function V_({
	images: e,
	onRemove: n
}) {
	return e.length === 0 ? null : vr.jsx("div", {
		className: "space-y-4",
		children: e.map(r => vr.jsxs("div", {
			className: "bg-white rounded-lg shadow-sm p-4 flex items-center gap-4",
			children: [r.preview && vr.jsx("img", {
				src: r.preview,
				alt: r.file.name,
				className: "w-16 h-16 object-cover rounded"
			}), vr.jsxs("div", {
				className: "flex-1 min-w-0",
				children: [vr.jsxs("div", {
					className: "flex items-center justify-between",
					children: [vr.jsx("p", {
						className: "text-sm font-medium text-gray-900 truncate",
						children: r.file.name
					}), vr.jsxs("div", {
						className: "flex items-center gap-2",
						children: [r.status === "complete" && vr.jsx("button", {
							onClick: () => H_(r),
							className: "text-gray-400 hover:text-gray-600",
							title: "Download",
							children: vr.jsx(Bv, {
								className: "w-5 h-5"
							})
						}), vr.jsx("button", {
							onClick: () => n(r.id),
							className: "text-gray-400 hover:text-gray-600",
							title: "Remove",
							children: vr.jsx(Vg, {
								className: "w-5 h-5"
							})
						})]
					})]
				}), vr.jsxs("div", {
					className: "mt-1 flex items-center gap-2 text-sm text-gray-500",
					children: [r.status === "pending" && vr.jsx("span", {
						children: "Ready to process"
					}), r.status === "processing" && vr.jsxs("span", {
						className: "flex items-center gap-2",
						children: [vr.jsx(Ng, {
							className: "w-4 h-4 animate-spin"
						}), "Processing..."]
					}), r.status === "complete" && vr.jsxs("span", {
						className: "flex items-center gap-2 text-green-600",
						children: [vr.jsx(Ig, {
							className: "w-4 h-4"
						}), "Complete"]
					}), r.status === "error" && vr.jsxs("span", {
						className: "flex items-center gap-2 text-red-600",
						children: [vr.jsx(xg, {
							className: "w-4 h-4"
						}), r.error || "Error processing image"]
					})]
				}), vr.jsxs("div", {
					className: "mt-1 text-sm text-gray-500",
					children: [Fd(r.originalSize), r.compressedSize && vr.jsxs(vr.Fragment, {
						children: [" → ", Fd(r.compressedSize), " ", vr.jsxs("span", {
							className: "text-green-600",
							children: ["(", Math.round((r.originalSize - r.compressedSize) / r.originalSize * 100), "% smaller)"]
						})]
					})]
				})]
			})]
		}, r.id))
	})
}

function z_({
	onDownloadAll: e,
	count: n
}) {
	return vr.jsxs("button", {
		onClick: e,
		className: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",
		children: [vr.jsx(Bv, {
			className: "w-5 h-5"
		}), "Download All (", n, " ", n === 1 ? "image" : "images", ")"]
	})
}

function B_(e, n, r) {
	const [o, s] = vt.useState([]), p = vt.useRef(0), k = vt.useRef(new Set), U = vt.useCallback(async te => {
		if (!k.current.has(te.id)) {
			k.current.add(te.id), p.current++;
			try {
				r(G => G.map(q => q.id === te.id ? {
					...q,
					status: "processing"
				} : q));
				const ae = await te.file.arrayBuffer(),
					ce = L_(te.file);
				if (!ae.byteLength) throw new Error("Empty file");
				const _e = await D_(ce, ae);
				if (!_e || !_e.width || !_e.height) throw new Error("Invalid image data");
				const Ce = await N_(n, _e, e);
				if (!Ce.byteLength) throw new Error("Failed to compress image");
				const Qe = new Blob([Ce], {
						type: `image/${n}`
					}),
					Z = URL.createObjectURL(Qe);
				r(G => G.map(q => q.id === te.id ? {
					...q,
					status: "complete",
					preview: Z,
					blob: Qe,
					compressedSize: Ce.byteLength,
					outputType: n
				} : q))
			} catch (ae) {
				console.error("Error processing image:", ae), r(ce => ce.map(_e => _e.id === te.id ? {
					..._e,
					status: "error",
					error: ae instanceof Error ? ae.message : "Failed to process image"
				} : _e))
			} finally {
				k.current.delete(te.id), p.current--, setTimeout(K, 0)
			}
		}
	}, [e, n, r]), K = vt.useCallback(() => {
		console.log("Processing next in queue:", {
			queueLength: o.length,
			processingCount: p.current,
			processingImages: [...k.current]
		}), o.length !== 0 && r(te => {
			const ae = te.filter(ce => o.includes(ce.id) && !k.current.has(ce.id) && p.current < 3);
			return console.log("Found images to process:", ae.length), ae.length === 0 ? te : (ae.forEach((ce, _e) => {
				setTimeout(() => {
					U(ce)
				}, _e * 100)
			}), s(ce => ce.filter(_e => !ae.some(Ce => Ce.id === _e))), te.map(ce => ae.some(_e => _e.id === ce.id) ? {
				...ce,
				status: "queued"
			} : ce))
		})
	}, [o, U, r]);
	return vt.useEffect(() => {
		console.log("Queue changed:", o.length), o.length > 0 && K()
	}, [o, K]), {
		addToQueue: vt.useCallback(te => {
			console.log("Adding to queue:", te), s(ae => [...ae, te])
		}, [])
	}
}
const $d = {
	avif: 50,
	jpeg: 75,
	jxl: 75,
	webp: 75
};

function Y_() {
	const [e, n] = vt.useState([]), [r, t] = vt.useState("webp"), [o, s] = vt.useState({
		quality: $d.webp
	}), {
		addToQueue: p
	} = B_(o, r, n), k = vt.useCallback(ce => {
		t(ce), ce !== "png" && s({
			quality: $d[ce]
		})
	}, []), U = vt.useCallback(ce => {
		n(_e => [..._e, ...ce]), requestAnimationFrame(() => {
			ce.forEach(_e => p(_e.id))
		})
	}, [p]), K = vt.useCallback(ce => {
		n(_e => {
			const Ce = _e.find(Qe => Qe.id === ce);
			return Ce?.preview && URL.revokeObjectURL(Ce.preview), _e.filter(Qe => Qe.id !== ce)
		})
	}, []), f = vt.useCallback(() => {
		e.forEach(ce => {
			ce.preview && URL.revokeObjectURL(ce.preview)
		}), n([])
	}, [e]), te = vt.useCallback(async () => {
		const ce = e.filter(_e => _e.status === "complete");
		for (const _e of ce) {
			if (_e.blob && _e.outputType) {
				const Ce = document.createElement("a");
				Ce.href = URL.createObjectURL(_e.blob), Ce.download = `${_e.file.name.split(".")[0]}.${_e.outputType}`, Ce.click(), URL.revokeObjectURL(Ce.href)
			}
			await new Promise(Ce => setTimeout(Ce, 100))
		}
	}, [e]), ae = e.filter(ce => ce.status === "complete").length;
	return vr.jsx("div", {
		className: "min-h-screen bg-gray-50",
		children: vr.jsxs("div", {
			className: "max-w-4xl mx-auto px-4 py-12",
			children: [vr.jsxs("div", {
				className: "text-center mb-8",
				children: [vr.jsxs("div", {
					className: "flex items-center justify-center gap-2 mb-4",
					children: [vr.jsx(Dg, {
						className: "w-8 h-8 text-blue-500"
					}), vr.jsx("h1", {
						className: "text-3xl font-bold text-gray-900",
						children: "Squish"
					})]
				}), vr.jsx("p", {
					className: "text-gray-600",
					children: "Compress and convert your images to AVIF, JPEG, JPEG XL, PNG, or WebP"
				})]
			}), vr.jsxs("div", {
				className: "space-y-6",
				children: [vr.jsx(zg, {
					options: o,
					outputType: r,
					onOptionsChange: s,
					onOutputTypeChange: k
				}), vr.jsx(Bg, {
					onFilesDrop: U
				}), ae > 0 && vr.jsx(z_, {
					onDownloadAll: te,
					count: ae
				}), vr.jsx(V_, {
					images: e,
					onRemove: K
				}), e.length > 0 && vr.jsxs("button", {
					onClick: f,
					className: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",
					children: [vr.jsx(Lg, {
						className: "w-5 h-5"
					}), "Clear All"]
				})]
			})]
		})
	})
}
zv(document.getElementById("root")).render(vr.jsx(vt.StrictMode, {
	children: vr.jsx(Y_, {})
}));
var G_ = function() {
	var e = import.meta.url;
	return function(f) {
		f = f || {};

		function r() {
			return Be.buffer != or && Ir(Be.buffer), yr
		}

		function t() {
			return Be.buffer != or && Ir(Be.buffer), Fr
		}

		function o() {
			return Be.buffer != or && Ir(Be.buffer), cn
		}

		function s() {
			return Be.buffer != or && Ir(Be.buffer), En
		}

		function p() {
			return Be.buffer != or && Ir(Be.buffer), $r
		}

		function k() {
			return Be.buffer != or && Ir(Be.buffer), dn
		}

		function U() {
			return Be.buffer != or && Ir(Be.buffer), pn
		}

		function K() {
			return Be.buffer != or && Ir(Be.buffer), Xr
		}
		var f = typeof f < "u" ? f : {},
			te, ae;
		f.ready = new Promise(function(d, _) {
			te = d, ae = _
		});
		var ce = {},
			_e;
		for (_e in f) f.hasOwnProperty(_e) && (ce[_e] = f[_e]);
		var Ce = function(d, _) {
				throw _
			},
			Qe = !1,
			Z = !1,
			G = !1;
		Qe = typeof window == "object", Z = typeof importScripts == "function", G = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
		var q = f.ENVIRONMENT_IS_PTHREAD || !1,
			Ee = "";

		function Te(d) {
			return f.locateFile ? f.locateFile(d, Ee) : Ee + d
		}
		var Ue;
		(Qe || Z) && (Z ? Ee = self.location.href : typeof document < "u" && document.currentScript && (Ee = document.currentScript.src), e && (Ee = e), Ee.indexOf("blob:") !== 0 ? Ee = Ee.substr(0, Ee.lastIndexOf("/") + 1) : Ee = "", Z && (Ue = function(d) {
			var _ = new XMLHttpRequest;
			return _.open("GET", d, !1), _.responseType = "arraybuffer", _.send(null), new Uint8Array(_.response)
		}));
		var je = f.print || console.log.bind(console),
			Ae = f.printErr || console.warn.bind(console);
		for (_e in ce) ce.hasOwnProperty(_e) && (f[_e] = ce[_e]);
		ce = null, f.arguments && f.arguments, f.thisProgram && f.thisProgram, f.quit && (Ce = f.quit);

		function Ve(d) {
			Ve.shown || (Ve.shown = {}), Ve.shown[d] || (Ve.shown[d] = 1, Ae(d))
		}
		var $e = 0,
			Me = function(d) {
				$e = d
			},
			xe = function() {
				return $e
			},
			ke;
		f.wasmBinary && (ke = f.wasmBinary);
		var sr = f.noExitRuntime || !0;
		typeof WebAssembly != "object" && pr("no native wasm support detected");
		var Be, Ne, zr = !1;

		function Pe(d, _) {
			d || pr("Assertion failed: " + _)
		}

		function ze(d, _, O) {
			for (var z = _ + O, oe = ""; !(_ >= z);) {
				var de = d[_++];
				if (!de) return oe;
				if (!(de & 128)) {
					oe += String.fromCharCode(de);
					continue
				}
				var me = d[_++] & 63;
				if ((de & 224) == 192) {
					oe += String.fromCharCode((de & 31) << 6 | me);
					continue
				}
				var Se = d[_++] & 63;
				if ((de & 240) == 224 ? de = (de & 15) << 12 | me << 6 | Se : de = (de & 7) << 18 | me << 12 | Se << 6 | d[_++] & 63, de < 65536) oe += String.fromCharCode(de);
				else {
					var Ye = de - 65536;
					oe += String.fromCharCode(55296 | Ye >> 10, 56320 | Ye & 1023)
				}
			}
			return oe
		}

		function Ge(d, _) {
			return d ? ze(t(), d, _) : ""
		}

		function qe(d, _, O, z) {
			if (!(z > 0)) return 0;
			for (var oe = O, de = O + z - 1, me = 0; me < d.length; ++me) {
				var Se = d.charCodeAt(me);
				if (Se >= 55296 && Se <= 57343) {
					var Ye = d.charCodeAt(++me);
					Se = 65536 + ((Se & 1023) << 10) | Ye & 1023
				}
				if (Se <= 127) {
					if (O >= de) break;
					_[O++] = Se
				} else if (Se <= 2047) {
					if (O + 1 >= de) break;
					_[O++] = 192 | Se >> 6, _[O++] = 128 | Se & 63
				} else if (Se <= 65535) {
					if (O + 2 >= de) break;
					_[O++] = 224 | Se >> 12, _[O++] = 128 | Se >> 6 & 63, _[O++] = 128 | Se & 63
				} else {
					if (O + 3 >= de) break;
					_[O++] = 240 | Se >> 18, _[O++] = 128 | Se >> 12 & 63, _[O++] = 128 | Se >> 6 & 63, _[O++] = 128 | Se & 63
				}
			}
			return _[O] = 0, O - oe
		}

		function tr(d, _, O) {
			return qe(d, t(), _, O)
		}

		function Er(d) {
			for (var _ = 0, O = 0; O < d.length; ++O) {
				var z = d.charCodeAt(O);
				z >= 55296 && z <= 57343 && (z = 65536 + ((z & 1023) << 10) | d.charCodeAt(++O) & 1023), z <= 127 ? ++_ : z <= 2047 ? _ += 2 : z <= 65535 ? _ += 3 : _ += 4
			}
			return _
		}

		function fn(d, _) {
			for (var O = "", z = 0; !(z >= _ / 2); ++z) {
				var oe = o()[d + z * 2 >> 1];
				if (oe == 0) break;
				O += String.fromCharCode(oe)
			}
			return O
		}

		function nn(d, _, O) {
			if (O === void 0 && (O = 2147483647), O < 2) return 0;
			O -= 2;
			for (var z = _, oe = O < d.length * 2 ? O / 2 : d.length, de = 0; de < oe; ++de) {
				var me = d.charCodeAt(de);
				o()[_ >> 1] = me, _ += 2
			}
			return o()[_ >> 1] = 0, _ - z
		}

		function Ze(d) {
			return d.length * 2
		}

		function Mr(d, _) {
			for (var O = 0, z = ""; !(O >= _ / 4);) {
				var oe = p()[d + O * 4 >> 2];
				if (oe == 0) break;
				if (++O, oe >= 65536) {
					var de = oe - 65536;
					z += String.fromCharCode(55296 | de >> 10, 56320 | de & 1023)
				} else z += String.fromCharCode(oe)
			}
			return z
		}

		function tn(d, _, O) {
			if (O === void 0 && (O = 2147483647), O < 4) return 0;
			for (var z = _, oe = z + O - 4, de = 0; de < d.length; ++de) {
				var me = d.charCodeAt(de);
				if (me >= 55296 && me <= 57343) {
					var Se = d.charCodeAt(++de);
					me = 65536 + ((me & 1023) << 10) | Se & 1023
				}
				if (p()[_ >> 2] = me, _ += 4, _ + 4 > oe) break
			}
			return p()[_ >> 2] = 0, _ - z
		}

		function wn(d) {
			for (var _ = 0, O = 0; O < d.length; ++O) {
				var z = d.charCodeAt(O);
				z >= 55296 && z <= 57343 && ++O, _ += 4
			}
			return _
		}

		function On(d, _) {
			return d % _ > 0 && (d += _ - d % _), d
		}
		var or, yr, Fr, cn, En, $r, dn, pn, Xr;
		q && (or = f.buffer);

		function Ir(d) {
			or = d, f.HEAP8 = yr = new Int8Array(d), f.HEAP16 = cn = new Int16Array(d), f.HEAP32 = $r = new Int32Array(d), f.HEAPU8 = Fr = new Uint8Array(d), f.HEAPU16 = En = new Uint16Array(d), f.HEAPU32 = dn = new Uint32Array(d), f.HEAPF32 = pn = new Float32Array(d), f.HEAPF64 = Xr = new Float64Array(d)
		}
		var Mn = f.INITIAL_MEMORY || 16777216;
		if (q) Be = f.wasmMemory, or = f.buffer;
		else if (f.wasmMemory) Be = f.wasmMemory;
		else if (Be = new WebAssembly.Memory({
				initial: Mn / 65536,
				maximum: 2147483648 / 65536,
				shared: !0
			}), !(Be.buffer instanceof SharedArrayBuffer)) throw Ae("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), G && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");
		Be && (or = Be.buffer), Mn = or.byteLength, Ir(or);
		var Dr, Tr = [],
			bn = [],
			Ar = [];

		function cr() {
			if (!q) {
				if (f.preRun)
					for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length;) Or(f.preRun.shift());
				hr(Tr)
			}
		}

		function en() {
			q || hr(bn)
		}

		function Qr() {
			if (!q) {
				if (f.postRun)
					for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length;) Zr(f.postRun.shift());
				hr(Ar)
			}
		}

		function Or(d) {
			Tr.unshift(d)
		}

		function Wr(d) {
			bn.unshift(d)
		}

		function Zr(d) {
			Ar.unshift(d)
		}
		var Cr = 0,
			kr = null;

		function Rr(d) {
			Pe(!q, "addRunDependency cannot be used in a pthread worker"), Cr++, f.monitorRunDependencies && f.monitorRunDependencies(Cr)
		}

		function Jr(d) {
			if (Cr--, f.monitorRunDependencies && f.monitorRunDependencies(Cr), Cr == 0 && kr) {
				var _ = kr;
				kr = null, _()
			}
		}
		f.preloadedImages = {}, f.preloadedAudios = {};

		function pr(d) {
			f.onAbort && f.onAbort(d), q && console.error("Pthread aborting at " + new Error().stack), d += "", Ae(d), zr = !0, d = "abort(" + d + "). Build with -s ASSERTIONS=1 for more info.";
			var _ = new WebAssembly.RuntimeError(d);
			throw ae(_), _
		}
		var on = "data:application/octet-stream;base64,";

		function br(d) {
			return d.startsWith(on)
		}
		if (f.locateFile) {
			var xr = "avif_enc_mt.wasm";
			br(xr) || (xr = Te(xr))
		} else var xr = new URL(location.href +"assets/avif_enc_mt-DS1m7BJk.wasm", import.meta.url).toString();

		function Sr(d) {
			try {
				if (d == xr && ke) return new Uint8Array(ke);
				if (Ue) return Ue(d);
				throw "both async and sync fetching of the wasm failed"
			} catch (_) {
				pr(_)
			}
		}

		function Br() {
			return !ke && (Qe || Z) && typeof fetch == "function" ? fetch(xr, {
				credentials: "same-origin"
			}).then(function(d) {
				if (!d.ok) throw "failed to load wasm binary file at '" + xr + "'";
				return d.arrayBuffer()
			}).catch(function() {
				return Sr(xr)
			}) : Promise.resolve().then(function() {
				return Sr(xr)
			})
		}

		function mr() {
			var d = {
				a: Fo
			};

			function _(me, Se) {
				var Ye = me.exports;
				if (f.asm = Ye, Dr = f.asm.ja, Wr(f.asm.fa), Re.tlsInitFunctions.push(f.asm.ia), Ne = Se, !q) {
					var fr = Re.unusedWorkers.length;
					Re.unusedWorkers.forEach(function(_r) {
						Re.loadWasmModuleToWorker(_r, function() {
							--fr || Jr()
						})
					})
				}
			}
			q || Rr();

			function O(me) {
				_(me.instance, me.module)
			}

			function z(me) {
				return Br().then(function(Se) {
					var Ye = WebAssembly.instantiate(Se, d);
					return Ye
				}).then(me, function(Se) {
					Ae("failed to asynchronously prepare wasm: " + Se), pr(Se)
				})
			}

			function oe() {
				return !ke && typeof WebAssembly.instantiateStreaming == "function" && !br(xr) && typeof fetch == "function" ? fetch(xr, {
					credentials: "same-origin"
				}).then(function(me) {
					var Se = WebAssembly.instantiateStreaming(me, d);
					return Se.then(O, function(Ye) {
						return Ae("wasm streaming compile failed: " + Ye), Ae("falling back to ArrayBuffer instantiation"), z(O)
					})
				}) : z(O)
			}
			if (f.instantiateWasm) try {
				var de = f.instantiateWasm(d, _);
				return de
			} catch (me) {
				return Ae("Module.instantiateWasm callback failed with error: " + me), !1
			}
			return oe().catch(ae), {}
		}
		var Je = {
			601116: function() {
				throw "Canceled!"
			},
			601134: function(d, _) {
				setTimeout(function() {
					ro(d, _)
				}, 0)
			}
		};

		function wr() {
			Re.initRuntime()
		}

		function hr(d) {
			for (; d.length > 0;) {
				var _ = d.shift();
				if (typeof _ == "function") {
					_(f);
					continue
				}
				var O = _.func;
				typeof O == "number" ? _.arg === void 0 ? Dr.get(O)() : Dr.get(O)(_.arg) : O(_.arg === void 0 ? null : _.arg)
			}
		}
		var Ur = {
			EPERM: 63,
			ENOENT: 44,
			ESRCH: 71,
			EINTR: 27,
			EIO: 29,
			ENXIO: 60,
			E2BIG: 1,
			ENOEXEC: 45,
			EBADF: 8,
			ECHILD: 12,
			EAGAIN: 6,
			EWOULDBLOCK: 6,
			ENOMEM: 48,
			EACCES: 2,
			EFAULT: 21,
			ENOTBLK: 105,
			EBUSY: 10,
			EEXIST: 20,
			EXDEV: 75,
			ENODEV: 43,
			ENOTDIR: 54,
			EISDIR: 31,
			EINVAL: 28,
			ENFILE: 41,
			EMFILE: 33,
			ENOTTY: 59,
			ETXTBSY: 74,
			EFBIG: 22,
			ENOSPC: 51,
			ESPIPE: 70,
			EROFS: 69,
			EMLINK: 34,
			EPIPE: 64,
			EDOM: 18,
			ERANGE: 68,
			ENOMSG: 49,
			EIDRM: 24,
			ECHRNG: 106,
			EL2NSYNC: 156,
			EL3HLT: 107,
			EL3RST: 108,
			ELNRNG: 109,
			EUNATCH: 110,
			ENOCSI: 111,
			EL2HLT: 112,
			EDEADLK: 16,
			ENOLCK: 46,
			EBADE: 113,
			EBADR: 114,
			EXFULL: 115,
			ENOANO: 104,
			EBADRQC: 103,
			EBADSLT: 102,
			EDEADLOCK: 16,
			EBFONT: 101,
			ENOSTR: 100,
			ENODATA: 116,
			ETIME: 117,
			ENOSR: 118,
			ENONET: 119,
			ENOPKG: 120,
			EREMOTE: 121,
			ENOLINK: 47,
			EADV: 122,
			ESRMNT: 123,
			ECOMM: 124,
			EPROTO: 65,
			EMULTIHOP: 36,
			EDOTDOT: 125,
			EBADMSG: 9,
			ENOTUNIQ: 126,
			EBADFD: 127,
			EREMCHG: 128,
			ELIBACC: 129,
			ELIBBAD: 130,
			ELIBSCN: 131,
			ELIBMAX: 132,
			ELIBEXEC: 133,
			ENOSYS: 52,
			ENOTEMPTY: 55,
			ENAMETOOLONG: 37,
			ELOOP: 32,
			EOPNOTSUPP: 138,
			EPFNOSUPPORT: 139,
			ECONNRESET: 15,
			ENOBUFS: 42,
			EAFNOSUPPORT: 5,
			EPROTOTYPE: 67,
			ENOTSOCK: 57,
			ENOPROTOOPT: 50,
			ESHUTDOWN: 140,
			ECONNREFUSED: 14,
			EADDRINUSE: 3,
			ECONNABORTED: 13,
			ENETUNREACH: 40,
			ENETDOWN: 38,
			ETIMEDOUT: 73,
			EHOSTDOWN: 142,
			EHOSTUNREACH: 23,
			EINPROGRESS: 26,
			EALREADY: 7,
			EDESTADDRREQ: 17,
			EMSGSIZE: 35,
			EPROTONOSUPPORT: 66,
			ESOCKTNOSUPPORT: 137,
			EADDRNOTAVAIL: 4,
			ENETRESET: 39,
			EISCONN: 30,
			ENOTCONN: 53,
			ETOOMANYREFS: 141,
			EUSERS: 136,
			EDQUOT: 19,
			ESTALE: 72,
			ENOTSUP: 138,
			ENOMEDIUM: 148,
			EILSEQ: 25,
			EOVERFLOW: 61,
			ECANCELED: 11,
			ENOTRECOVERABLE: 56,
			EOWNERDEAD: 62,
			ESTRPIPE: 135
		};

		function lr(d, _) {
			if (d <= 0 || d > r().length || d & !0 || _ < 0) return -28;
			if (_ == 0) return 0;
			_ >= 2147483647 && (_ = 1 / 0);
			var O = Atomics.load(p(), Ke >> 2),
				z = 0;
			if (O == d) {
				var oe = Atomics.compareExchange(p(), Ke >> 2, O, 0);
				if (oe == O && (--_, z = 1, _ <= 0)) return 1
			}
			var de = Atomics.notify(p(), d >> 2, _);
			if (de >= 0) return de + z;
			throw "Atomics.notify returned an unexpected value " + de
		}
		f._emscripten_futex_wake = lr;

		function we(d) {
			if (q) throw "Internal Error! killThread() can only ever be called from main application thread!";
			if (!d) throw "Internal Error! Null pthread_ptr in killThread!";
			p()[d + 12 >> 2] = 0;
			var _ = Re.pthreads[d];
			_.worker.terminate(), Re.freeThreadData(_), Re.runningWorkers.splice(Re.runningWorkers.indexOf(_.worker), 1), _.worker.pthread = void 0
		}

		function Rn(d) {
			if (q) throw "Internal Error! cancelThread() can only ever be called from main application thread!";
			if (!d) throw "Internal Error! Null pthread_ptr in cancelThread!";
			var _ = Re.pthreads[d];
			_.worker.postMessage({
				cmd: "cancel"
			})
		}

		function dr(d) {
			if (q) throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
			if (!d) throw "Internal Error! Null pthread_ptr in cleanupThread!";
			var _ = Re.pthreads[d];
			if (_) {
				p()[d + 12 >> 2] = 0;
				var O = _.worker;
				Re.returnWorkerToPool(O)
			}
		}
		var Re = {
			unusedWorkers: [],
			runningWorkers: [],
			tlsInitFunctions: [],
			initMainThreadBlock: function() {
				for (var d = navigator.hardwareConcurrency, _ = 0; _ < d; ++_) Re.allocateUnusedWorker()
			},
			initRuntime: function() {
				for (var d = Yt(228), _ = 0; _ < 228 / 4; ++_) k()[d / 4 + _] = 0;
				p()[d + 12 >> 2] = d;
				var O = d + 152;
				p()[O >> 2] = O;
				for (var z = Yt(512), _ = 0; _ < 128; ++_) k()[z / 4 + _] = 0;
				Atomics.store(k(), d + 100 >> 2, z), Atomics.store(k(), d + 40 >> 2, d), xi(d, !Z, 1), Ji(d)
			},
			initWorker: function() {},
			pthreads: {},
			threadExitHandlers: [],
			runExitHandlers: function() {
				for (; Re.threadExitHandlers.length > 0;) Re.threadExitHandlers.pop()();
				q && a() && l()
			},
			runExitHandlersAndDeinitThread: function(d, _) {
				Atomics.store(k(), d + 56 >> 2, 1), Atomics.store(k(), d + 60 >> 2, 0), Re.runExitHandlers(), Atomics.store(k(), d + 4 >> 2, _), Atomics.store(k(), d + 0 >> 2, 1), lr(d + 0, 2147483647), xi(0, 0, 0)
			},
			setExitStatus: function(d) {},
			threadExit: function(d) {
				var _ = a();
				_ && (Re.runExitHandlersAndDeinitThread(_, d), q && postMessage({
					cmd: "exit"
				}))
			},
			threadCancel: function() {
				Re.runExitHandlersAndDeinitThread(a(), -1), postMessage({
					cmd: "cancelDone"
				})
			},
			terminateAllThreads: function() {
				for (var d in Re.pthreads) {
					var _ = Re.pthreads[d];
					_ && _.worker && Re.returnWorkerToPool(_.worker)
				}
				Re.pthreads = {};
				for (var O = 0; O < Re.unusedWorkers.length; ++O) {
					var z = Re.unusedWorkers[O];
					z.terminate()
				}
				Re.unusedWorkers = [];
				for (var O = 0; O < Re.runningWorkers.length; ++O) {
					var z = Re.runningWorkers[O],
						_ = z.pthread;
					Re.freeThreadData(_), z.terminate()
				}
				Re.runningWorkers = []
			},
			freeThreadData: function(d) {
				if (d) {
					if (d.threadInfoStruct) {
						var _ = p()[d.threadInfoStruct + 100 >> 2];
						p()[d.threadInfoStruct + 100 >> 2] = 0, St(_), St(d.threadInfoStruct)
					}
					d.threadInfoStruct = 0, d.allocatedOwnStack && d.stackBase && St(d.stackBase), d.stackBase = 0, d.worker && (d.worker.pthread = null)
				}
			},
			returnWorkerToPool: function(d) {
				Re.runWithoutMainThreadQueuedCalls(function() {
					delete Re.pthreads[d.pthread.threadInfoStruct], Re.unusedWorkers.push(d), Re.runningWorkers.splice(Re.runningWorkers.indexOf(d), 1), Re.freeThreadData(d.pthread), d.pthread = void 0
				})
			},
			runWithoutMainThreadQueuedCalls: function(d) {
				p()[nr >> 2] = 0;
				try {
					d()
				} finally {
					p()[nr >> 2] = 1
				}
			},
			receiveObjectTransfer: function(d) {},
			threadInit: function() {
				for (var d in Re.tlsInitFunctions) Re.tlsInitFunctions[d]()
			},
			loadWasmModuleToWorker: function(d, _) {
				d.onmessage = function(O) {
					var z = O.data,
						oe = z.cmd;
					if (d.pthread && (Re.currentProxiedOperationCallerThread = d.pthread.threadInfoStruct), z.targetThread && z.targetThread != a()) {
						var de = Re.pthreads[z.targetThread];
						de ? de.worker.postMessage(O.data, z.transferList) : console.error('Internal error! Worker sent a message "' + oe + '" to target pthread ' + z.targetThread + ", but that thread no longer exists!"), Re.currentProxiedOperationCallerThread = void 0;
						return
					}
					if (oe === "processQueuedMainThreadWork") Pi();
					else if (oe === "spawnThread") qo(O.data);
					else if (oe === "cleanupThread") dr(z.thread);
					else if (oe === "killThread") we(z.thread);
					else if (oe === "cancelThread") Rn(z.thread);
					else if (oe === "loaded") d.loaded = !0, _ && _(d), d.runPthread && (d.runPthread(), delete d.runPthread);
					else if (oe === "print") je("Thread " + z.threadId + ": " + z.text);
					else if (oe === "printErr") Ae("Thread " + z.threadId + ": " + z.text);
					else if (oe === "alert") alert("Thread " + z.threadId + ": " + z.text);
					else if (oe === "exit") {
						var me = d.pthread && Atomics.load(k(), d.pthread.threadInfoStruct + 64 >> 2);
						me && Re.returnWorkerToPool(d)
					} else if (oe === "exitProcess") try {
						ja(z.returnCode)
					} catch (Se) {
						if (Se instanceof rn) return;
						throw Se
					} else oe === "cancelDone" ? Re.returnWorkerToPool(d) : oe === "objectTransfer" ? Re.receiveObjectTransfer(O.data) : O.data.target === "setimmediate" ? d.postMessage(O.data) : Ae("worker sent an unknown command " + oe);
					Re.currentProxiedOperationCallerThread = void 0
				}, d.onerror = function(O) {
					Ae("pthread sent an error! " + O.filename + ":" + O.lineno + ": " + O.message)
				}, d.postMessage({
					cmd: "load",
					urlOrBlob: f.mainScriptUrlOrBlob,
					wasmMemory: Be,
					wasmModule: Ne
				})
			},
			allocateUnusedWorker: function() {
				if (!f.locateFile) {
					Re.unusedWorkers.push(new Worker(new URL(location.href +"assets/avif_enc_mt.worker-T87Ax5K3.js", import.meta.url)));
					return
				}
				var d = Te("avif_enc_mt.worker.js");
				Re.unusedWorkers.push(new Worker(d))
			},
			getNewWorker: function() {
				return Re.unusedWorkers.length == 0 && (Re.allocateUnusedWorker(), Re.loadWasmModuleToWorker(Re.unusedWorkers[0])), Re.unusedWorkers.pop()
			},
			busySpinWait: function(d) {
				for (var _ = performance.now() + d; performance.now() < _;);
			}
		};

		function an(d, _) {
			ne(d, _), N(d)
		}
		f.establishStackSpace = an;

		function Yr(d, _) {
			return Dr.get(d)(_)
		}
		f.invokeEntryPoint = Yr;
		var vn = 0;

		function Lr() {
			return sr || vn > 0
		}
		f.keepRuntimeAlive = Lr;

		function Kr(d, _, O, z) {
			pr("Assertion failed: " + Ge(d) + ", at: " + [_ ? Ge(_) : "unknown filename", O, z ? Ge(z) : "unknown function"])
		}
		var Ln;
		q ? Ln = function() {
			return performance.now() - f.__performance_now_clock_drift
		} : Ln = function() {
			return performance.now()
		};

		function Hn(d, _) {
			Re.threadExitHandlers.push(function() {
				Dr.get(d)(_)
			})
		}

		function Gr(d, _) {
			return Hn(d, _)
		}
		var un = {
			mappings: {},
			buffers: [null, [],
				[]
			],
			printChar: function(d, _) {
				var O = un.buffers[d];
				_ === 0 || _ === 10 ? ((d === 1 ? je : Ae)(ze(O, 0)), O.length = 0) : O.push(_)
			},
			varargs: void 0,
			get: function() {
				un.varargs += 4;
				var d = p()[un.varargs - 4 >> 2];
				return d
			},
			getStr: function(d) {
				var _ = Ge(d);
				return _
			},
			get64: function(d, _) {
				return d
			}
		};

		function Xn(d, _, O) {
			return q ? ye(1, 1, d, _, O) : (un.varargs = O, 0)
		}

		function Cn(d, _, O) {
			return q ? ye(2, 1, d, _, O) : (un.varargs = O, 0)
		}

		function Zn(d, _, O) {
			if (q) return ye(3, 1, d, _, O);
			un.varargs = O
		}
		var hn = {};

		function mn(d) {
			for (; d.length;) {
				var _ = d.pop(),
					O = d.pop();
				O(_)
			}
		}

		function jr(d) {
			return this.fromWireType(k()[d >> 2])
		}
		var Hr = {},
			Pn = {},
			xn = {},
			Fn = 48,
			In = 57;

		function Wn(d) {
			if (d === void 0) return "_unknown";
			d = d.replace(/[^a-zA-Z0-9_]/g, "$");
			var _ = d.charCodeAt(0);
			return _ >= Fn && _ <= In ? "_" + d : d
		}

		function Un(d, _) {
			return d = Wn(d),
				function() {
					return _.apply(this, arguments)
				}
		}

		function Vn(d, _) {
			var O = Un(_, function(z) {
				this.name = _, this.message = z;
				var oe = new Error(z).stack;
				oe !== void 0 && (this.stack = this.toString() + `
` + oe.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return O.prototype = Object.create(d.prototype), O.prototype.constructor = O, O.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, O
		}
		var Jn = void 0;

		function ct(d) {
			throw new Jn(d)
		}

		function zn(d, _, O) {
			d.forEach(function(Se) {
				xn[Se] = _
			});

			function z(Se) {
				var Ye = O(Se);
				Ye.length !== d.length && ct("Mismatched type converter count");
				for (var fr = 0; fr < d.length; ++fr) gn(d[fr], Ye[fr])
			}
			var oe = new Array(_.length),
				de = [],
				me = 0;
			_.forEach(function(Se, Ye) {
				Pn.hasOwnProperty(Se) ? oe[Ye] = Pn[Se] : (de.push(Se), Hr.hasOwnProperty(Se) || (Hr[Se] = []), Hr[Se].push(function() {
					oe[Ye] = Pn[Se], ++me, me === de.length && z(oe)
				}))
			}), de.length === 0 && z(oe)
		}

		function Bn(d) {
			var _ = hn[d];
			delete hn[d];
			var O = _.rawConstructor,
				z = _.rawDestructor,
				oe = _.fields,
				de = oe.map(function(me) {
					return me.getterReturnType
				}).concat(oe.map(function(me) {
					return me.setterArgumentType
				}));
			zn([d], de, function(me) {
				var Se = {};
				return oe.forEach(function(Ye, fr) {
					var _r = Ye.fieldName,
						An = me[fr],
						Nt = Ye.getter,
						Pt = Ye.getterContext,
						Ii = me[fr + oe.length],
						Mt = Ye.setter,
						Xo = Ye.setterContext;
					Se[_r] = {
						read: function(Ma) {
							return An.fromWireType(Nt(Pt, Ma))
						},
						write: function(Ma, lh) {
							var gc = [];
							Mt(Xo, Ma, Ii.toWireType(gc, lh)), mn(gc)
						}
					}
				}), [{
					name: _.name,
					fromWireType: function(Ye) {
						var fr = {};
						for (var _r in Se) fr[_r] = Se[_r].read(Ye);
						return z(Ye), fr
					},
					toWireType: function(Ye, fr) {
						for (var _r in Se)
							if (!(_r in fr)) throw new TypeError('Missing field:  "' + _r + '"');
						var An = O();
						for (_r in Se) Se[_r].write(An, fr[_r]);
						return Ye !== null && Ye.push(z, An), An
					},
					argPackAdvance: 8,
					readValueFromPointer: jr,
					destructorFunction: z
				}]
			})
		}

		function dt(d, _, O, z, oe) {}

		function et(d) {
			switch (d) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + d)
			}
		}

		function Pr() {
			for (var d = new Array(256), _ = 0; _ < 256; ++_) d[_] = String.fromCharCode(_);
			tt = d
		}
		var tt = void 0;

		function ar(d) {
			for (var _ = "", O = d; t()[O];) _ += tt[t()[O++]];
			return _
		}
		var qr = void 0;

		function sn(d) {
			throw new qr(d)
		}

		function gn(d, _, O) {
			if (O = O || {}, !("argPackAdvance" in _)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var z = _.name;
			if (d || sn('type "' + z + '" must have a positive integer typeid pointer'), Pn.hasOwnProperty(d)) {
				if (O.ignoreDuplicateRegistrations) return;
				sn("Cannot register type '" + z + "' twice")
			}
			if (Pn[d] = _, delete xn[d], Hr.hasOwnProperty(d)) {
				var oe = Hr[d];
				delete Hr[d], oe.forEach(function(de) {
					de()
				})
			}
		}

		function Vr(d, _, O, z, oe) {
			var de = et(O);
			_ = ar(_), gn(d, {
				name: _,
				fromWireType: function(me) {
					return !!me
				},
				toWireType: function(me, Se) {
					return Se ? z : oe
				},
				argPackAdvance: 8,
				readValueFromPointer: function(me) {
					var Se;
					if (O === 1) Se = r();
					else if (O === 2) Se = o();
					else if (O === 4) Se = p();
					else throw new TypeError("Unknown boolean type size: " + _);
					return this.fromWireType(Se[me >> de])
				},
				destructorFunction: null
			})
		}
		var Yn = [],
			_n = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function rt(d) {
			d > 4 && --_n[d].refcount === 0 && (_n[d] = void 0, Yn.push(d))
		}

		function at() {
			for (var d = 0, _ = 5; _ < _n.length; ++_) _n[_] !== void 0 && ++d;
			return d
		}

		function Tn() {
			for (var d = 5; d < _n.length; ++d)
				if (_n[d] !== void 0) return _n[d];
			return null
		}

		function mt() {
			f.count_emval_handles = at, f.get_first_emval = Tn
		}

		function Gn(d) {
			switch (d) {
				case void 0:
					return 1;
				case null:
					return 2;
				case !0:
					return 3;
				case !1:
					return 4;
				default: {
					var _ = Yn.length ? Yn.pop() : _n.length;
					return _n[_] = {
						refcount: 1,
						value: d
					}, _
				}
			}
		}

		function ut(d, _) {
			_ = ar(_), gn(d, {
				name: _,
				fromWireType: function(O) {
					var z = _n[O].value;
					return rt(O), z
				},
				toWireType: function(O, z) {
					return Gn(z)
				},
				argPackAdvance: 8,
				readValueFromPointer: jr,
				destructorFunction: null
			})
		}

		function Qn(d) {
			if (d === null) return "null";
			var _ = typeof d;
			return _ === "object" || _ === "array" || _ === "function" ? d.toString() : "" + d
		}

		function $n(d, _) {
			switch (_) {
				case 2:
					return function(O) {
						return this.fromWireType(U()[O >> 2])
					};
				case 3:
					return function(O) {
						return this.fromWireType(K()[O >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + d)
			}
		}

		function nt(d, _, O) {
			var z = et(O);
			_ = ar(_), gn(d, {
				name: _,
				fromWireType: function(oe) {
					return oe
				},
				toWireType: function(oe, de) {
					if (typeof de != "number" && typeof de != "boolean") throw new TypeError('Cannot convert "' + Qn(de) + '" to ' + this.name);
					return de
				},
				argPackAdvance: 8,
				readValueFromPointer: $n(_, z),
				destructorFunction: null
			})
		}

		function lt(d, _, O, z, oe) {
			var de = _.length;
			de < 2 && sn("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var me = _[1] !== null && O !== null, Se = !1, Ye = 1; Ye < _.length; ++Ye)
				if (_[Ye] !== null && _[Ye].destructorFunction === void 0) {
					Se = !0;
					break
				} var fr = _[0].name !== "void",
				_r = de - 2,
				An = new Array(_r),
				Nt = [],
				Pt = [];
			return function() {
				arguments.length !== _r && sn("function " + d + " called with " + arguments.length + " arguments, expected " + _r + " args!"), Pt.length = 0;
				var Ii;
				Nt.length = me ? 2 : 1, Nt[0] = oe, me && (Ii = _[1].toWireType(Pt, this), Nt[1] = Ii);
				for (var Mt = 0; Mt < _r; ++Mt) An[Mt] = _[Mt + 2].toWireType(Pt, arguments[Mt]), Nt.push(An[Mt]);
				var Xo = z.apply(null, Nt);
				if (Se) mn(Pt);
				else
					for (var Mt = me ? 1 : 2; Mt < _.length; Mt++) {
						var Ma = Mt === 1 ? Ii : An[Mt - 2];
						_[Mt].destructorFunction !== null && _[Mt].destructorFunction(Ma)
					}
				if (fr) return _[0].fromWireType(Xo)
			}
		}

		function it(d, _, O) {
			if (d[_].overloadTable === void 0) {
				var z = d[_];
				d[_] = function() {
					return d[_].overloadTable.hasOwnProperty(arguments.length) || sn("Function '" + O + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d[_].overloadTable + ")!"), d[_].overloadTable[arguments.length].apply(this, arguments)
				}, d[_].overloadTable = [], d[_].overloadTable[z.argCount] = z
			}
		}

		function pt(d, _, O) {
			f.hasOwnProperty(d) ? ((O === void 0 || f[d].overloadTable !== void 0 && f[d].overloadTable[O] !== void 0) && sn("Cannot register public name '" + d + "' twice"), it(f, d, d), f.hasOwnProperty(O) && sn("Cannot register multiple overloads of a function with the same number of arguments (" + O + ")!"), f[d].overloadTable[O] = _) : (f[d] = _, O !== void 0 && (f[d].numArguments = O))
		}

		function x(d, _) {
			for (var O = [], z = 0; z < d; z++) O.push(p()[(_ >> 2) + z]);
			return O
		}

		function I(d, _, O) {
			f.hasOwnProperty(d) || ct("Replacing nonexistant public symbol"), f[d].overloadTable !== void 0 && O !== void 0 ? f[d].overloadTable[O] = _ : (f[d] = _, f[d].argCount = O)
		}

		function J(d, _, O) {
			var z = f["dynCall_" + d];
			return O && O.length ? z.apply(null, [_].concat(O)) : z.call(null, _)
		}

		function ge(d, _, O) {
			return d.includes("j") ? J(d, _, O) : Dr.get(_).apply(null, O)
		}

		function be(d, _) {
			var O = [];
			return function() {
				O.length = arguments.length;
				for (var z = 0; z < arguments.length; z++) O[z] = arguments[z];
				return ge(d, _, O)
			}
		}

		function Fe(d, _) {
			d = ar(d);

			function O() {
				return d.includes("j") ? be(d, _) : Dr.get(_)
			}
			var z = O();
			return typeof z != "function" && sn("unknown function pointer with signature " + d + ": " + _), z
		}
		var P = void 0;

		function i(d) {
			var _ = ki(d),
				O = ar(_);
			return St(_), O
		}

		function u(d, _) {
			var O = [],
				z = {};

			function oe(de) {
				if (!z[de] && !Pn[de]) {
					if (xn[de]) {
						xn[de].forEach(oe);
						return
					}
					O.push(de), z[de] = !0
				}
			}
			throw _.forEach(oe), new P(d + ": " + O.map(i).join([", "]))
		}

		function v(d, _, O, z, oe, de) {
			var me = x(_, O);
			d = ar(d), oe = Fe(z, oe), pt(d, function() {
				u("Cannot call " + d + " due to unbound types", me)
			}, _ - 1), zn([], me, function(Se) {
				var Ye = [Se[0], null].concat(Se.slice(1));
				return I(d, lt(d, Ye, null, oe, de), _ - 1), []
			})
		}

		function C(d, _, O) {
			switch (_) {
				case 0:
					return O ? function(oe) {
						return r()[oe]
					} : function(oe) {
						return t()[oe]
					};
				case 1:
					return O ? function(oe) {
						return o()[oe >> 1]
					} : function(oe) {
						return s()[oe >> 1]
					};
				case 2:
					return O ? function(oe) {
						return p()[oe >> 2]
					} : function(oe) {
						return k()[oe >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + d)
			}
		}

		function $(d, _, O, z, oe) {
			_ = ar(_), oe === -1 && (oe = 4294967295);
			var de = et(O),
				me = function(fr) {
					return fr
				};
			if (z === 0) {
				var Se = 32 - 8 * O;
				me = function(fr) {
					return fr << Se >>> Se
				}
			}
			var Ye = _.includes("unsigned");
			gn(d, {
				name: _,
				fromWireType: me,
				toWireType: function(fr, _r) {
					if (typeof _r != "number" && typeof _r != "boolean") throw new TypeError('Cannot convert "' + Qn(_r) + '" to ' + this.name);
					if (_r < z || _r > oe) throw new TypeError('Passing a number "' + Qn(_r) + '" from JS side to C/C++ side to an argument of type "' + _ + '", which is outside the valid range [' + z + ", " + oe + "]!");
					return Ye ? _r >>> 0 : _r | 0
				},
				argPackAdvance: 8,
				readValueFromPointer: C(_, de, z !== 0),
				destructorFunction: null
			})
		}

		function D(d, _, O) {
			var z = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				oe = z[_];

			function de(me) {
				me = me >> 2;
				var Se = k(),
					Ye = Se[me],
					fr = Se[me + 1];
				return new oe(or, fr, Ye)
			}
			O = ar(O), gn(d, {
				name: O,
				fromWireType: de,
				argPackAdvance: 8,
				readValueFromPointer: de
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function V(d, _) {
			_ = ar(_);
			var O = _ === "std::string";
			gn(d, {
				name: _,
				fromWireType: function(z) {
					var oe = k()[z >> 2],
						de;
					if (O)
						for (var me = z + 4, Se = 0; Se <= oe; ++Se) {
							var Ye = z + 4 + Se;
							if (Se == oe || t()[Ye] == 0) {
								var fr = Ye - me,
									_r = Ge(me, fr);
								de === void 0 ? de = _r : (de += "\0", de += _r), me = Ye + 1
							}
						} else {
							for (var An = new Array(oe), Se = 0; Se < oe; ++Se) An[Se] = String.fromCharCode(t()[z + 4 + Se]);
							de = An.join("")
						}
					return St(z), de
				},
				toWireType: function(z, oe) {
					oe instanceof ArrayBuffer && (oe = new Uint8Array(oe));
					var de, me = typeof oe == "string";
					me || oe instanceof Uint8Array || oe instanceof Uint8ClampedArray || oe instanceof Int8Array || sn("Cannot pass non-string to std::string"), O && me ? de = function() {
						return Er(oe)
					} : de = function() {
						return oe.length
					};
					var Se = de(),
						Ye = Yt(4 + Se + 1);
					if (k()[Ye >> 2] = Se, O && me) tr(oe, Ye + 4, Se + 1);
					else if (me)
						for (var fr = 0; fr < Se; ++fr) {
							var _r = oe.charCodeAt(fr);
							_r > 255 && (St(Ye), sn("String has UTF-16 code units that do not fit in 8 bits")), t()[Ye + 4 + fr] = _r
						} else
							for (var fr = 0; fr < Se; ++fr) t()[Ye + 4 + fr] = oe[fr];
					return z !== null && z.push(St, Ye), Ye
				},
				argPackAdvance: 8,
				readValueFromPointer: jr,
				destructorFunction: function(z) {
					St(z)
				}
			})
		}

		function B(d, _, O) {
			O = ar(O);
			var z, oe, de, me, Se;
			_ === 2 ? (z = fn, oe = nn, me = Ze, de = function() {
				return s()
			}, Se = 1) : _ === 4 && (z = Mr, oe = tn, me = wn, de = function() {
				return k()
			}, Se = 2), gn(d, {
				name: O,
				fromWireType: function(Ye) {
					for (var fr = k()[Ye >> 2], _r = de(), An, Nt = Ye + 4, Pt = 0; Pt <= fr; ++Pt) {
						var Ii = Ye + 4 + Pt * _;
						if (Pt == fr || _r[Ii >> Se] == 0) {
							var Mt = Ii - Nt,
								Xo = z(Nt, Mt);
							An === void 0 ? An = Xo : (An += "\0", An += Xo), Nt = Ii + _
						}
					}
					return St(Ye), An
				},
				toWireType: function(Ye, fr) {
					typeof fr != "string" && sn("Cannot pass non-string to C++ string type " + O);
					var _r = me(fr),
						An = Yt(4 + _r + _);
					return k()[An >> 2] = _r >> Se, oe(fr, An + 4, _r + _), Ye !== null && Ye.push(St, An), An
				},
				argPackAdvance: 8,
				readValueFromPointer: jr,
				destructorFunction: function(Ye) {
					St(Ye)
				}
			})
		}

		function g(d, _, O, z, oe, de) {
			hn[d] = {
				name: ar(_),
				rawConstructor: Fe(O, z),
				rawDestructor: Fe(oe, de),
				fields: []
			}
		}

		function T(d, _, O, z, oe, de, me, Se, Ye, fr) {
			hn[d].fields.push({
				fieldName: ar(_),
				getterReturnType: O,
				getter: Fe(z, oe),
				getterContext: de,
				setterArgumentType: me,
				setter: Fe(Se, Ye),
				setterContext: fr
			})
		}

		function L(d, _) {
			_ = ar(_), gn(d, {
				isVoid: !0,
				name: _,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(O, z) {}
			})
		}

		function re(d, _) {
			if (d == _) postMessage({
				cmd: "processQueuedMainThreadWork"
			});
			else if (q) postMessage({
				targetThread: d,
				cmd: "processThreadQueue"
			});
			else {
				var O = Re.pthreads[d],
					z = O && O.worker;
				if (!z) return;
				z.postMessage({
					cmd: "processThreadQueue"
				})
			}
			return 1
		}
		var le = {};

		function pe(d) {
			var _ = le[d];
			return _ === void 0 ? ar(d) : _
		}

		function A() {
			if (typeof globalThis == "object") return globalThis;

			function d(_) {
				_.$$$embind_global$$$ = _;
				var O = typeof $$$embind_global$$$ == "object" && _.$$$embind_global$$$ === _;
				return O || delete _.$$$embind_global$$$, O
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && d(global) ? $$$embind_global$$$ = global : typeof self == "object" && d(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function S(d) {
			return d === 0 ? Gn(A()) : (d = pe(d), Gn(A()[d]))
		}

		function M(d) {
			d > 4 && (_n[d].refcount += 1)
		}

		function ie(d, _) {
			var O = Pn[d];
			return O === void 0 && sn(_ + " has unknown type " + i(d)), O
		}

		function w(d) {
			var _ = new Array(d + 1);
			return function(O, z, oe) {
				_[0] = O;
				for (var de = 0; de < d; ++de) {
					var me = ie(p()[(z >> 2) + de], "parameter " + de);
					_[de + 1] = me.readValueFromPointer(oe), oe += me.argPackAdvance
				}
				var Se = new(O.bind.apply(O, _));
				return Gn(Se)
			}
		}
		var E = {};

		function j(d) {
			return d || sn("Cannot use deleted val. handle = " + d), _n[d].value
		}

		function Q(d, _, O, z) {
			d = j(d);
			var oe = E[_];
			return oe || (oe = w(_), E[_] = oe), oe(d, O, z)
		}

		function ue() {
			pr()
		}
		var y = [];

		function R(d, _) {
			y.length = 0;
			var O;
			for (_ >>= 2; O = t()[d++];) {
				var z = O < 105;
				z && _ & 1 && _++, y.push(z ? K()[_++ >> 1] : p()[_]), ++_
			}
			return y
		}

		function c(d, _, O) {
			var z = R(_, O);
			return Je[d].apply(null, z)
		}

		function h() {
			Z || Ve("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")
		}

		function b(d, _) {}

		function W(d, _, O) {
			if (d <= 0 || d > r().length || d & !0) return -28;
			if (Qe) {
				if (Atomics.load(p(), d >> 2) != _) return -6;
				for (var oe = performance.now(), de = oe + O, me = Atomics.exchange(p(), Ke >> 2, d);;) {
					if (oe = performance.now(), oe > de) return me = Atomics.exchange(p(), Ke >> 2, 0), -73;
					if (me = Atomics.exchange(p(), Ke >> 2, 0), me == 0) break;
					if (Pi(), Atomics.load(p(), d >> 2) != _) return -6;
					me = Atomics.exchange(p(), Ke >> 2, d)
				}
				return 0
			} else {
				var z = Atomics.wait(p(), d >> 2, _, O);
				if (z === "timed-out") return -73;
				if (z === "not-equal") return -6;
				if (z === "ok") return 0;
				throw "Atomics.wait returned an unexpected value " + z
			}
		}

		function H(d, _) {
			throw ee(d, _ || 1), "longjmp"
		}

		function Y(d, _) {
			return H(d, _)
		}

		function fe(d, _, O) {
			t().copyWithin(d, _, _ + O)
		}

		function he() {
			return navigator.hardwareConcurrency
		}

		function ye(d, _) {
			for (var O = arguments.length - 2, z = F(), oe = O, de = X(oe * 8), me = de >> 3, Se = 0; Se < O; Se++) {
				var Ye = arguments[2 + Se];
				K()[me + Se] = Ye
			}
			var fr = no(d, oe, de, _);
			return N(z), fr
		}
		var Oe = [];

		function ir(d, _, O) {
			Oe.length = _;
			for (var z = O >> 3, oe = 0; oe < _; oe++) Oe[oe] = K()[z + oe];
			var de = d < 0,
				me = de ? Je[-d - 1] : Po[d];
			return me.apply(null, Oe)
		}

		function ur(d) {
			try {
				return Be.grow(d - or.byteLength + 65535 >>> 16), Ir(Be.buffer), 1
			} catch {}
		}

		function Xe(d) {
			var _ = t().length;
			if (d = d >>> 0, d <= _) return !1;
			var O = 2147483648;
			if (d > O) return !1;
			for (var z = 1; z <= 4; z *= 2) {
				var oe = _ * (1 + .2 / z);
				oe = Math.min(oe, d + 100663296);
				var de = Math.min(O, On(Math.max(d, oe), 65536)),
					me = ur(de);
				if (me) return !0
			}
			return !1
		}
		var He = {
			inEventHandler: 0,
			removeAllEventListeners: function() {
				for (var d = He.eventHandlers.length - 1; d >= 0; --d) He._removeHandler(d);
				He.eventHandlers = [], He.deferredCalls = []
			},
			registerRemoveEventListeners: function() {
				He.removeEventListenersRegistered || (He.removeEventListenersRegistered = !0)
			},
			deferredCalls: [],
			deferCall: function(d, _, O) {
				function z(me, Se) {
					if (me.length != Se.length) return !1;
					for (var Ye in me)
						if (me[Ye] != Se[Ye]) return !1;
					return !0
				}
				for (var oe in He.deferredCalls) {
					var de = He.deferredCalls[oe];
					if (de.targetFunction == d && z(de.argsList, O)) return
				}
				He.deferredCalls.push({
					targetFunction: d,
					precedence: _,
					argsList: O
				}), He.deferredCalls.sort(function(me, Se) {
					return me.precedence < Se.precedence
				})
			},
			removeDeferredCalls: function(d) {
				for (var _ = 0; _ < He.deferredCalls.length; ++_) He.deferredCalls[_].targetFunction == d && (He.deferredCalls.splice(_, 1), --_)
			},
			canPerformEventHandlerRequests: function() {
				return He.inEventHandler && He.currentEventHandler.allowsDeferredCalls
			},
			runDeferredCalls: function() {
				if (He.canPerformEventHandlerRequests())
					for (var d = 0; d < He.deferredCalls.length; ++d) {
						var _ = He.deferredCalls[d];
						He.deferredCalls.splice(d, 1), --d, _.targetFunction.apply(null, _.argsList)
					}
			},
			eventHandlers: [],
			removeAllHandlersOnTarget: function(d, _) {
				for (var O = 0; O < He.eventHandlers.length; ++O) He.eventHandlers[O].target == d && (!_ || _ == He.eventHandlers[O].eventTypeString) && He._removeHandler(O--)
			},
			_removeHandler: function(d) {
				var _ = He.eventHandlers[d];
				_.target.removeEventListener(_.eventTypeString, _.eventListenerFunc, _.useCapture), He.eventHandlers.splice(d, 1)
			},
			registerOrRemoveHandler: function(d) {
				var _ = function(oe) {
					++He.inEventHandler, He.currentEventHandler = d, He.runDeferredCalls(), d.handlerFunc(oe), He.runDeferredCalls(), --He.inEventHandler
				};
				if (d.callbackfunc) d.eventListenerFunc = _, d.target.addEventListener(d.eventTypeString, _, d.useCapture), He.eventHandlers.push(d), He.registerRemoveEventListeners();
				else
					for (var O = 0; O < He.eventHandlers.length; ++O) He.eventHandlers[O].target == d.target && He.eventHandlers[O].eventTypeString == d.eventTypeString && He._removeHandler(O--)
			},
			queueEventHandlerOnThread_iiii: function(d, _, O, z, oe) {
				var de = F(),
					me = X(12);
				p()[me >> 2] = O, p()[me + 4 >> 2] = z, p()[me + 8 >> 2] = oe, ti(0, d, 637534208, _, z, me), N(de)
			},
			getTargetThreadForEventCallback: function(d) {
				switch (d) {
					case 1:
						return 0;
					case 2:
						return Re.currentProxiedOperationCallerThread;
					default:
						return d
				}
			},
			getNodeNameForTarget: function(d) {
				return d ? d == window ? "#window" : d == screen ? "#screen" : d && d.nodeName ? d.nodeName : "" : ""
			},
			fullscreenEnabled: function() {
				return document.fullscreenEnabled || document.webkitFullscreenEnabled
			}
		};

		function Kn(d) {
			var _ = Er(d) + 1,
				O = Yt(_);
			return tr(d, O, _), O
		}

		function bt(d, _, O, z) {
			var oe = F(),
				de = X(12),
				me = 0;
			_ && (me = Kn(_)), p()[de >> 2] = me, p()[de + 4 >> 2] = O, p()[de + 8 >> 2] = z, ti(0, d, 657457152, 0, me, de), N(oe)
		}

		function Tt(d, _, O, z) {
			_ = _ ? Ge(_) : "", bt(d, _, O, z)
		}

		function Wt(d) {
			return d > 2 ? Ge(d) : d
		}
		var Ie = [0, typeof document < "u" ? document : 0, typeof window < "u" ? window : 0];

		function gr(d) {
			d = Wt(d);
			var _ = Ie[d] || (typeof document < "u" ? document.querySelector(d) : void 0);
			return _
		}

		function yn(d) {
			return gr(d)
		}

		function gt(d, _, O) {
			var z = yn(d);
			if (!z) return -4;
			if (z.canvasSharedPtr && (p()[z.canvasSharedPtr >> 2] = _, p()[z.canvasSharedPtr + 4 >> 2] = O), z.offscreenCanvas || !z.controlTransferredOffscreen) {
				z.offscreenCanvas && (z = z.offscreenCanvas);
				var oe = !1;
				if (z.GLctxObject && z.GLctxObject.GLctx) {
					var de = z.GLctxObject.GLctx.getParameter(2978);
					oe = de[0] === 0 && de[1] === 0 && de[2] === z.width && de[3] === z.height
				}
				z.width = _, z.height = O, oe && z.GLctxObject.GLctx.viewport(0, 0, _, O)
			} else if (z.canvasSharedPtr) {
				var me = p()[z.canvasSharedPtr + 8 >> 2];
				return Tt(me, d, _, O), 1
			} else return -4;
			return 0
		}

		function ni(d, _, O) {
			return q ? ye(4, 1, d, _, O) : gt(d, _, O)
		}

		function ji(d, _, O) {
			var z = yn(d);
			return z ? gt(d, _, O) : ni(d, _, O)
		}

		function Co(d) {}

		function So(d) {
			var _ = d.getExtension("ANGLE_instanced_arrays");
			if (_) return d.vertexAttribDivisor = function(O, z) {
				_.vertexAttribDivisorANGLE(O, z)
			}, d.drawArraysInstanced = function(O, z, oe, de) {
				_.drawArraysInstancedANGLE(O, z, oe, de)
			}, d.drawElementsInstanced = function(O, z, oe, de, me) {
				_.drawElementsInstancedANGLE(O, z, oe, de, me)
			}, 1
		}

		function ko(d) {
			var _ = d.getExtension("OES_vertex_array_object");
			if (_) return d.createVertexArray = function() {
				return _.createVertexArrayOES()
			}, d.deleteVertexArray = function(O) {
				_.deleteVertexArrayOES(O)
			}, d.bindVertexArray = function(O) {
				_.bindVertexArrayOES(O)
			}, d.isVertexArray = function(O) {
				return _.isVertexArrayOES(O)
			}, 1
		}

		function ka(d) {
			var _ = d.getExtension("WEBGL_draw_buffers");
			if (_) return d.drawBuffers = function(O, z) {
				_.drawBuffersWEBGL(O, z)
			}, 1
		}

		function Ra(d) {
			return !!(d.multiDrawWebgl = d.getExtension("WEBGL_multi_draw"))
		}
		var qn = {
				counter: 1,
				buffers: [],
				programs: [],
				framebuffers: [],
				renderbuffers: [],
				textures: [],
				shaders: [],
				vaos: [],
				contexts: {},
				offscreenCanvases: {},
				queries: [],
				stringCache: {},
				unpackAlignment: 4,
				recordError: function(_) {
					qn.lastError || (qn.lastError = _)
				},
				getNewId: function(d) {
					for (var _ = qn.counter++, O = d.length; O < _; O++) d[O] = null;
					return _
				},
				getSource: function(d, _, O, z) {
					for (var oe = "", de = 0; de < _; ++de) {
						var me = z ? p()[z + de * 4 >> 2] : -1;
						oe += Ge(p()[O + de * 4 >> 2], me < 0 ? void 0 : me)
					}
					return oe
				},
				createContext: function(d, _) {
					d.getContextSafariWebGL2Fixed || (d.getContextSafariWebGL2Fixed = d.getContext, d.getContext = function(oe, de) {
						var me = d.getContextSafariWebGL2Fixed(oe, de);
						return oe == "webgl" == me instanceof WebGLRenderingContext ? me : null
					});
					var O = d.getContext("webgl", _);
					if (!O) return 0;
					var z = qn.registerContext(O, _);
					return z
				},
				registerContext: function(d, _) {
					var O = Yt(8);
					p()[O + 4 >> 2] = a();
					var z = {
						handle: O,
						attributes: _,
						version: _.majorVersion,
						GLctx: d
					};
					return d.canvas && (d.canvas.GLctxObject = z), qn.contexts[O] = z, (typeof _.enableExtensionsByDefault > "u" || _.enableExtensionsByDefault) && qn.initExtensions(z), O
				},
				makeContextCurrent: function(d) {
					return qn.currentContext = qn.contexts[d], f.ctx = Zi = qn.currentContext && qn.currentContext.GLctx, !(d && !Zi)
				},
				getContext: function(d) {
					return qn.contexts[d]
				},
				deleteContext: function(d) {
					qn.currentContext === qn.contexts[d] && (qn.currentContext = null), typeof He == "object" && He.removeAllHandlersOnTarget(qn.contexts[d].GLctx.canvas), qn.contexts[d] && qn.contexts[d].GLctx.canvas && (qn.contexts[d].GLctx.canvas.GLctxObject = void 0), St(qn.contexts[d].handle), qn.contexts[d] = null
				},
				initExtensions: function(d) {
					if (d || (d = qn.currentContext), !d.initExtensionsDone) {
						d.initExtensionsDone = !0;
						var _ = d.GLctx;
						So(_), ko(_), ka(_), _.disjointTimerQueryExt = _.getExtension("EXT_disjoint_timer_query"), Ra(_);
						var O = _.getSupportedExtensions() || [];
						O.forEach(function(z) {
							!z.includes("lose_context") && !z.includes("debug") && _.getExtension(z)
						})
					}
				}
			},
			_i = ["default", "low-power", "high-performance"];

		function Pa(d, _) {
			var O = _ >> 2,
				z = p()[O + 6],
				oe = {
					alpha: !!p()[O + 0],
					depth: !!p()[O + 1],
					stencil: !!p()[O + 2],
					antialias: !!p()[O + 3],
					premultipliedAlpha: !!p()[O + 4],
					preserveDrawingBuffer: !!p()[O + 5],
					powerPreference: _i[z],
					failIfMajorPerformanceCaveat: !!p()[O + 7],
					majorVersion: p()[O + 8],
					minorVersion: p()[O + 9],
					enableExtensionsByDefault: p()[O + 10],
					explicitSwapControl: p()[O + 11],
					proxyContextToMainThread: p()[O + 12],
					renderViaOffscreenBackBuffer: p()[O + 13]
				},
				de = yn(d);
			if (!de || oe.explicitSwapControl) return 0;
			var me = qn.createContext(de, oe);
			return me
		}

		function Ro(d, _) {
			return Pa(d, _)
		}

		function Xi(d) {
			return q ? ye(5, 1, d) : 0
		}

		function Go(d, _, O, z) {
			if (q) return ye(6, 1, d, _, O, z);
			var oe = un.getStreamFromFD(d),
				de = un.doReadv(oe, _, O);
			return p()[z >> 2] = de, 0
		}

		function Qo(d, _, O, z, oe) {
			if (q) return ye(7, 1, d, _, O, z, oe)
		}

		function Ko(d, _, O, z) {
			if (q) return ye(8, 1, d, _, O, z);
			for (var oe = 0, de = 0; de < O; de++) {
				for (var me = p()[_ + de * 8 >> 2], Se = p()[_ + (de * 8 + 4) >> 2], Ye = 0; Ye < Se; Ye++) un.printChar(d, t()[me + Ye]);
				oe += Se
			}
			return p()[z >> 2] = oe, 0
		}

		function Fa() {
			return xe()
		}

		function $a(d) {
			var _ = Re.threadExitHandlers.pop();
			d && _()
		}

		function qo(d) {
			if (q) throw "Internal Error! spawnThread() can only ever be called from main application thread!";
			var _ = Re.getNewWorker();
			if (!_) return 6;
			if (_.pthread !== void 0) throw "Internal error!";
			if (!d.pthread_ptr) throw "Internal error, no pthread ptr!";
			Re.runningWorkers.push(_);
			for (var O = Yt(128 * 4), z = 0; z < 128; ++z) p()[O + z * 4 >> 2] = 0;
			var oe = d.stackBase + d.stackSize,
				de = Re.pthreads[d.pthread_ptr] = {
					worker: _,
					stackBase: d.stackBase,
					stackSize: d.stackSize,
					allocatedOwnStack: d.allocatedOwnStack,
					threadInfoStruct: d.pthread_ptr
				},
				me = de.threadInfoStruct >> 2;
			Atomics.store(k(), me + 16, d.detached), Atomics.store(k(), me + 25, O), Atomics.store(k(), me + 10, de.threadInfoStruct), Atomics.store(k(), me + 20, d.stackSize), Atomics.store(k(), me + 19, oe), Atomics.store(k(), me + 26, d.stackSize), Atomics.store(k(), me + 28, oe), Atomics.store(k(), me + 29, d.detached);
			var Se = m(),
				Ye = Se + 40;
			Atomics.store(k(), me + 43, Ye), _.pthread = de;
			var fr = {
				cmd: "run",
				start_routine: d.startRoutine,
				arg: d.arg,
				threadInfoStruct: d.pthread_ptr,
				stackBase: d.stackBase,
				stackSize: d.stackSize
			};
			return _.runPthread = function() {
				fr.time = performance.now(), _.postMessage(fr, d.transferList)
			}, _.loaded && (_.runPthread(), delete _.runPthread), 0
		}

		function Oa(d, _, O, z) {
			if (typeof SharedArrayBuffer > "u") return Ae("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
			if (!d) return Ae("pthread_create called with a null thread pointer!"), 28;
			var oe = [],
				de = 0;
			if (q && (oe.length === 0 || de)) return Ri(687865856, d, _, O, z);
			var me = 0,
				Se = 0,
				Ye = 0;
			_ && _ != -1 ? (me = p()[_ >> 2], me += 81920, Se = p()[_ + 8 >> 2], Ye = p()[_ + 12 >> 2] !== 0) : me = 2097152;
			var fr = Se == 0;
			fr ? Se = ve(16, me) : (Se -= me, Pe(Se > 0));
			for (var _r = Yt(228), An = 0; An < 57; ++An) k()[(_r >> 2) + An] = 0;
			p()[d >> 2] = _r, p()[_r + 12 >> 2] = _r;
			var Nt = _r + 152;
			p()[Nt >> 2] = Nt;
			var Pt = {
				stackBase: Se,
				stackSize: me,
				allocatedOwnStack: fr,
				detached: Ye,
				startRoutine: O,
				pthread_ptr: _r,
				arg: z,
				transferList: oe
			};
			return q ? (Pt.cmd = "spawnThread", postMessage(Pt, oe), 0) : qo(Pt)
		}

		function Wa() {
			if (q) {
				var d = a();
				if (d) {
					var _ = Atomics.load(k(), d + 56 >> 2);
					if (!_) {
						var O = Atomics.load(k(), d + 0 >> 2);
						if (O == 2) throw "Canceled!"
					}
				}
			}
		}

		function Ua(d, _, O) {
			if (!d) return Ae("pthread_join attempted on a null thread pointer!"), Ur.ESRCH;
			if (q && a() == d) return Ae("PThread " + d + " is attempting to join to itself!"), Ur.EDEADLK;
			if (!q && eo() == d) return Ae("Main thread " + d + " is attempting to join to itself!"), Ur.EDEADLK;
			var z = p()[d + 12 >> 2];
			if (z !== d) return Ae("pthread_join attempted on thread " + d + ", which does not point to a valid thread, or does not exist anymore!"), Ur.ESRCH;
			var oe = Atomics.load(k(), d + 64 >> 2);
			if (oe) return Ae("Attempted to join thread " + d + ", which was already detached!"), Ur.EINVAL;
			for (h();;) {
				var de = Atomics.load(k(), d + 0 >> 2);
				if (de == 1) {
					var me = Atomics.load(k(), d + 4 >> 2);
					return _ && (p()[_ >> 2] = me), Atomics.store(k(), d + 64 >> 2, 1), q ? postMessage({
						cmd: "cleanupThread",
						thread: d
					}) : dr(d), 0
				}
				Wa(), q || Pi(), W(d + 0, de, q ? 100 : 1)
			}
		}

		function Mi(d, _) {
			return Ua(d, _)
		}

		function Ct(d) {
			Me(d)
		}

		function yi(d) {
			var _ = Date.now() / 1e3 | 0;
			return d && (p()[d >> 2] = _), _
		}
		q || Re.initMainThreadBlock(), Jn = f.InternalError = Vn(Error, "InternalError"), Pr(), qr = f.BindingError = Vn(Error, "BindingError"), mt(), P = f.UnboundTypeError = Vn(Error, "UnboundTypeError");
		var Zi, Po = [null, Xn, Cn, Zn, ni, Xi, Go, Qo, Ko],
			Fo = {
				k: Kr,
				C: Gr,
				y: Xn,
				X: Cn,
				Y: Zn,
				F: Bn,
				I: dt,
				aa: Vr,
				$: ut,
				z: nt,
				E: v,
				j: $,
				g: D,
				A: V,
				r: B,
				K: g,
				h: T,
				ba: L,
				T: re,
				p: rt,
				_: S,
				D: M,
				Q,
				i: ue,
				w: c,
				O: h,
				v: b,
				l: W,
				m: lr,
				o: Ln,
				e: Y,
				M: fe,
				ea: he,
				P: ir,
				N: Xe,
				R: ji,
				u: Co,
				S: Ro,
				x: Xi,
				W: Go,
				H: Qo,
				Z: Ko,
				c: Fa,
				L: wr,
				q: kt,
				s: se,
				t: _t,
				J: jn,
				G: De,
				n: rr,
				f: Dn,
				d: Sn,
				a: Be || f.wasmMemory,
				U: $a,
				V: Hn,
				B: Oa,
				ca: Mi,
				b: Ct,
				da: yi
			};
		mr(), f.___wasm_call_ctors = function() {
			return (f.___wasm_call_ctors = f.asm.fa).apply(null, arguments)
		};
		var Yt = f._malloc = function() {
				return (Yt = f._malloc = f.asm.ga).apply(null, arguments)
			},
			St = f._free = function() {
				return (St = f._free = f.asm.ha).apply(null, arguments)
			};
		f._emscripten_tls_init = function() {
			return (f._emscripten_tls_init = f.asm.ia).apply(null, arguments)
		};
		var ki = f.___getTypeName = function() {
			return (ki = f.___getTypeName = f.asm.ka).apply(null, arguments)
		};
		f.___embind_register_native_and_builtin_types = function() {
			return (f.___embind_register_native_and_builtin_types = f.asm.la).apply(null, arguments)
		}, f._emscripten_current_thread_process_queued_calls = function() {
			return (f._emscripten_current_thread_process_queued_calls = f.asm.ma).apply(null, arguments)
		};
		var Ji = f._emscripten_register_main_browser_thread_id = function() {
				return (Ji = f._emscripten_register_main_browser_thread_id = f.asm.na).apply(null, arguments)
			},
			eo = f._emscripten_main_browser_thread_id = function() {
				return (eo = f._emscripten_main_browser_thread_id = f.asm.oa).apply(null, arguments)
			},
			ro = f.__emscripten_do_dispatch_to_thread = function() {
				return (ro = f.__emscripten_do_dispatch_to_thread = f.asm.pa).apply(null, arguments)
			},
			Ri = f._emscripten_sync_run_in_main_thread_4 = function() {
				return (Ri = f._emscripten_sync_run_in_main_thread_4 = f.asm.qa).apply(null, arguments)
			},
			Pi = f._emscripten_main_thread_process_queued_calls = function() {
				return (Pi = f._emscripten_main_thread_process_queued_calls = f.asm.ra).apply(null, arguments)
			},
			no = f._emscripten_run_in_main_runtime_thread_js = function() {
				return (no = f._emscripten_run_in_main_runtime_thread_js = f.asm.sa).apply(null, arguments)
			},
			ti = f.__emscripten_call_on_thread = function() {
				return (ti = f.__emscripten_call_on_thread = f.asm.ta).apply(null, arguments)
			},
			xi = f.__emscripten_thread_init = function() {
				return (xi = f.__emscripten_thread_init = f.asm.ua).apply(null, arguments)
			},
			a = f._pthread_self = function() {
				return (a = f._pthread_self = f.asm.va).apply(null, arguments)
			},
			l = f.___pthread_tsd_run_dtors = function() {
				return (l = f.___pthread_tsd_run_dtors = f.asm.wa).apply(null, arguments)
			},
			m = f._emscripten_get_global_libc = function() {
				return (m = f._emscripten_get_global_libc = f.asm.xa).apply(null, arguments)
			},
			F = f.stackSave = function() {
				return (F = f.stackSave = f.asm.ya).apply(null, arguments)
			},
			N = f.stackRestore = function() {
				return (N = f.stackRestore = f.asm.za).apply(null, arguments)
			},
			X = f.stackAlloc = function() {
				return (X = f.stackAlloc = f.asm.Aa).apply(null, arguments)
			},
			ne = f._emscripten_stack_set_limits = function() {
				return (ne = f._emscripten_stack_set_limits = f.asm.Ba).apply(null, arguments)
			},
			ee = f._setThrew = function() {
				return (ee = f._setThrew = f.asm.Ca).apply(null, arguments)
			},
			ve = f._memalign = function() {
				return (ve = f._memalign = f.asm.Da).apply(null, arguments)
			};
		f.dynCall_jiiiiiiiii = function() {
			return (f.dynCall_jiiiiiiiii = f.asm.Ea).apply(null, arguments)
		};
		var We = f.dynCall_ijiii = function() {
			return (We = f.dynCall_ijiii = f.asm.Fa).apply(null, arguments)
		};
		f.dynCall_jiji = function() {
			return (f.dynCall_jiji = f.asm.Ga).apply(null, arguments)
		}, f.dynCall_jiiiiiiii = function() {
			return (f.dynCall_jiiiiiiii = f.asm.Ha).apply(null, arguments)
		}, f.dynCall_jiiiiii = function() {
			return (f.dynCall_jiiiiii = f.asm.Ia).apply(null, arguments)
		}, f.dynCall_jiiiii = function() {
			return (f.dynCall_jiiiii = f.asm.Ja).apply(null, arguments)
		}, f.dynCall_iiijii = function() {
			return (f.dynCall_iiijii = f.asm.Ka).apply(null, arguments)
		};
		var nr = f.__emscripten_allow_main_runtime_queued_calls = 600960,
			Ke = f.__emscripten_main_thread_futex = 897316;

		function rr(d, _) {
			var O = F();
			try {
				Dr.get(d)(_)
			} catch (z) {
				if (N(O), z !== z + 0 && z !== "longjmp") throw z;
				ee(1, 0)
			}
		}

		function Sn(d, _, O, z, oe) {
			var de = F();
			try {
				Dr.get(d)(_, O, z, oe)
			} catch (me) {
				if (N(de), me !== me + 0 && me !== "longjmp") throw me;
				ee(1, 0)
			}
		}

		function Dn(d, _, O) {
			var z = F();
			try {
				Dr.get(d)(_, O)
			} catch (oe) {
				if (N(z), oe !== oe + 0 && oe !== "longjmp") throw oe;
				ee(1, 0)
			}
		}

		function _t(d, _, O, z, oe, de, me, Se, Ye, fr) {
			var _r = F();
			try {
				return Dr.get(d)(_, O, z, oe, de, me, Se, Ye, fr)
			} catch (An) {
				if (N(_r), An !== An + 0 && An !== "longjmp") throw An;
				ee(1, 0)
			}
		}

		function jn(d, _, O, z, oe, de, me, Se, Ye, fr, _r, An) {
			var Nt = F();
			try {
				return Dr.get(d)(_, O, z, oe, de, me, Se, Ye, fr, _r, An)
			} catch (Pt) {
				if (N(Nt), Pt !== Pt + 0 && Pt !== "longjmp") throw Pt;
				ee(1, 0)
			}
		}

		function kt(d, _, O, z, oe) {
			var de = F();
			try {
				return Dr.get(d)(_, O, z, oe)
			} catch (me) {
				if (N(de), me !== me + 0 && me !== "longjmp") throw me;
				ee(1, 0)
			}
		}

		function se(d, _, O, z, oe, de, me, Se, Ye) {
			var fr = F();
			try {
				return Dr.get(d)(_, O, z, oe, de, me, Se, Ye)
			} catch (_r) {
				if (N(fr), _r !== _r + 0 && _r !== "longjmp") throw _r;
				ee(1, 0)
			}
		}

		function De(d, _, O, z, oe, de) {
			var me = F();
			try {
				return We(d, _, O, z, oe, de)
			} catch (Se) {
				if (N(me), Se !== Se + 0 && Se !== "longjmp") throw Se;
				ee(1, 0)
			}
		}
		f.PThread = Re, f.PThread = Re, f.wasmMemory = Be, f.ExitStatus = rn;
		var Nr;

		function rn(d) {
			this.name = "ExitStatus", this.message = "Program terminated with exit(" + d + ")", this.status = d
		}
		kr = function d() {
			Nr || ii(), Nr || (kr = d)
		};

		function ii(d) {
			if (Cr > 0) return;
			if (q) {
				te(f), en(), postMessage({
					cmd: "loaded"
				});
				return
			}
			if (cr(), Cr > 0) return;

			function _() {
				Nr || (Nr = !0, f.calledRun = !0, !zr && (en(), te(f), f.onRuntimeInitialized && f.onRuntimeInitialized(), Qr()))
			}
			f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					f.setStatus("")
				}, 1), _()
			}, 1)) : _()
		}
		f.run = ii;

		function ja(d, _) {
			if (q) throw postMessage({
				cmd: "exitProcess",
				returnCode: d
			}), new rn(d);
			Lr() || (Re.terminateAllThreads(), f.onExit && f.onExit(d), zr = !0), Ce(d, new rn(d))
		}
		if (f.preInit)
			for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0;) f.preInit.pop()();
		return q && (sr = !1, Re.initWorker()), ii(), f.ready
	}
}();
const Q_ = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: G_
}, Symbol.toStringTag, {
	value: "Module"
}));
var K_ = function() {
	var e = import.meta.url;
	return function(r) {
		r = r || {};
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(y, R) {
			t = y, o = R
		});
		var s = {},
			p;
		for (p in r) r.hasOwnProperty(p) && (s[p] = r[p]);
		var k = !1,
			U = !1;
		k = typeof window == "object", U = typeof importScripts == "function", typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var K = "";

		function f(y) {
			return r.locateFile ? r.locateFile(y, K) : K + y
		}
		var te;
		(k || U) && (U ? K = self.location.href : typeof document < "u" && document.currentScript && (K = document.currentScript.src), e && (K = e), K.indexOf("blob:") !== 0 ? K = K.substr(0, K.lastIndexOf("/") + 1) : K = "", U && (te = function(y) {
			var R = new XMLHttpRequest;
			return R.open("GET", y, !1), R.responseType = "arraybuffer", R.send(null), new Uint8Array(R.response)
		}));
		var ae = r.print || console.log.bind(console),
			ce = r.printErr || console.warn.bind(console);
		for (p in s) s.hasOwnProperty(p) && (r[p] = s[p]);
		s = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
		var _e = 0,
			Ce = function(y) {
				_e = y
			},
			Qe = function() {
				return _e
			},
			Z;
		r.wasmBinary && (Z = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && Ir("no native wasm support detected");
		var G, q = !1;

		function Ee(y, R, c) {
			for (var h = R + c, b = ""; !(R >= h);) {
				var W = y[R++];
				if (!W) return b;
				if (!(W & 128)) {
					b += String.fromCharCode(W);
					continue
				}
				var H = y[R++] & 63;
				if ((W & 224) == 192) {
					b += String.fromCharCode((W & 31) << 6 | H);
					continue
				}
				var Y = y[R++] & 63;
				if ((W & 240) == 224 ? W = (W & 15) << 12 | H << 6 | Y : W = (W & 7) << 18 | H << 12 | Y << 6 | y[R++] & 63, W < 65536) b += String.fromCharCode(W);
				else {
					var fe = W - 65536;
					b += String.fromCharCode(55296 | fe >> 10, 56320 | fe & 1023)
				}
			}
			return b
		}

		function Te(y, R) {
			return y ? Ee(Pe, y, R) : ""
		}

		function Ue(y, R, c, h) {
			if (!(h > 0)) return 0;
			for (var b = c, W = c + h - 1, H = 0; H < y.length; ++H) {
				var Y = y.charCodeAt(H);
				if (Y >= 55296 && Y <= 57343) {
					var fe = y.charCodeAt(++H);
					Y = 65536 + ((Y & 1023) << 10) | fe & 1023
				}
				if (Y <= 127) {
					if (c >= W) break;
					R[c++] = Y
				} else if (Y <= 2047) {
					if (c + 1 >= W) break;
					R[c++] = 192 | Y >> 6, R[c++] = 128 | Y & 63
				} else if (Y <= 65535) {
					if (c + 2 >= W) break;
					R[c++] = 224 | Y >> 12, R[c++] = 128 | Y >> 6 & 63, R[c++] = 128 | Y & 63
				} else {
					if (c + 3 >= W) break;
					R[c++] = 240 | Y >> 18, R[c++] = 128 | Y >> 12 & 63, R[c++] = 128 | Y >> 6 & 63, R[c++] = 128 | Y & 63
				}
			}
			return R[c] = 0, c - b
		}

		function je(y, R, c) {
			return Ue(y, Pe, R, c)
		}

		function Ae(y) {
			for (var R = 0, c = 0; c < y.length; ++c) {
				var h = y.charCodeAt(c);
				h >= 55296 && h <= 57343 && (h = 65536 + ((h & 1023) << 10) | y.charCodeAt(++c) & 1023), h <= 127 ? ++R : h <= 2047 ? R += 2 : h <= 65535 ? R += 3 : R += 4
			}
			return R
		}

		function Ve(y, R) {
			for (var c = "", h = 0; !(h >= R / 2); ++h) {
				var b = ze[y + h * 2 >> 1];
				if (b == 0) break;
				c += String.fromCharCode(b)
			}
			return c
		}

		function $e(y, R, c) {
			if (c === void 0 && (c = 2147483647), c < 2) return 0;
			c -= 2;
			for (var h = R, b = c < y.length * 2 ? c / 2 : y.length, W = 0; W < b; ++W) {
				var H = y.charCodeAt(W);
				ze[R >> 1] = H, R += 2
			}
			return ze[R >> 1] = 0, R - h
		}

		function Me(y) {
			return y.length * 2
		}

		function xe(y, R) {
			for (var c = 0, h = ""; !(c >= R / 4);) {
				var b = qe[y + c * 4 >> 2];
				if (b == 0) break;
				if (++c, b >= 65536) {
					var W = b - 65536;
					h += String.fromCharCode(55296 | W >> 10, 56320 | W & 1023)
				} else h += String.fromCharCode(b)
			}
			return h
		}

		function ke(y, R, c) {
			if (c === void 0 && (c = 2147483647), c < 4) return 0;
			for (var h = R, b = h + c - 4, W = 0; W < y.length; ++W) {
				var H = y.charCodeAt(W);
				if (H >= 55296 && H <= 57343) {
					var Y = y.charCodeAt(++W);
					H = 65536 + ((H & 1023) << 10) | Y & 1023
				}
				if (qe[R >> 2] = H, R += 4, R + 4 > b) break
			}
			return qe[R >> 2] = 0, R - h
		}

		function sr(y) {
			for (var R = 0, c = 0; c < y.length; ++c) {
				var h = y.charCodeAt(c);
				h >= 55296 && h <= 57343 && ++c, R += 4
			}
			return R
		}

		function Be(y, R) {
			return y % R > 0 && (y += R - y % R), y
		}
		var Ne, zr, Pe, ze, Ge, qe, tr, Er, fn;

		function nn(y) {
			Ne = y, r.HEAP8 = zr = new Int8Array(y), r.HEAP16 = ze = new Int16Array(y), r.HEAP32 = qe = new Int32Array(y), r.HEAPU8 = Pe = new Uint8Array(y), r.HEAPU16 = Ge = new Uint16Array(y), r.HEAPU32 = tr = new Uint32Array(y), r.HEAPF32 = Er = new Float32Array(y), r.HEAPF64 = fn = new Float64Array(y)
		}
		r.INITIAL_MEMORY;
		var Ze, Mr = [],
			tn = [],
			wn = [];

		function On() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) Fr(r.preRun.shift());
			en(Mr)
		}

		function or() {
			en(tn)
		}

		function yr() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) En(r.postRun.shift());
			en(wn)
		}

		function Fr(y) {
			Mr.unshift(y)
		}

		function cn(y) {
			tn.unshift(y)
		}

		function En(y) {
			wn.unshift(y)
		}
		var $r = 0,
			dn = null;

		function pn(y) {
			$r++, r.monitorRunDependencies && r.monitorRunDependencies($r)
		}

		function Xr(y) {
			if ($r--, r.monitorRunDependencies && r.monitorRunDependencies($r), $r == 0 && dn) {
				var R = dn;
				dn = null, R()
			}
		}
		r.preloadedImages = {}, r.preloadedAudios = {};

		function Ir(y) {
			r.onAbort && r.onAbort(y), y += "", ce(y), q = !0, y = "abort(" + y + "). Build with -s ASSERTIONS=1 for more info.";
			var R = new WebAssembly.RuntimeError(y);
			throw o(R), R
		}
		var Mn = "data:application/octet-stream;base64,";

		function Dr(y) {
			return y.startsWith(Mn)
		}
		if (r.locateFile) {
			var Tr = "avif_enc.wasm";
			Dr(Tr) || (Tr = f(Tr))
		} else var Tr = new URL(location.href +"assets/avif_enc-BnarrZ9J.wasm", import.meta.url).toString();

		function bn(y) {
			try {
				if (y == Tr && Z) return new Uint8Array(Z);
				if (te) return te(y);
				throw "both async and sync fetching of the wasm failed"
			} catch (R) {
				Ir(R)
			}
		}

		function Ar() {
			return !Z && (k || U) && typeof fetch == "function" ? fetch(Tr, {
				credentials: "same-origin"
			}).then(function(y) {
				if (!y.ok) throw "failed to load wasm binary file at '" + Tr + "'";
				return y.arrayBuffer()
			}).catch(function() {
				return bn(Tr)
			}) : Promise.resolve().then(function() {
				return bn(Tr)
			})
		}

		function cr() {
			var y = {
				a: $
			};

			function R(H, Y) {
				var fe = H.exports;
				r.asm = fe, G = r.asm.P, nn(G.buffer), Ze = r.asm.Y, cn(r.asm.Q), Xr()
			}
			pn();

			function c(H) {
				R(H.instance)
			}

			function h(H) {
				return Ar().then(function(Y) {
					var fe = WebAssembly.instantiate(Y, y);
					return fe
				}).then(H, function(Y) {
					ce("failed to asynchronously prepare wasm: " + Y), Ir(Y)
				})
			}

			function b() {
				return !Z && typeof WebAssembly.instantiateStreaming == "function" && !Dr(Tr) && typeof fetch == "function" ? fetch(Tr, {
					credentials: "same-origin"
				}).then(function(H) {
					var Y = WebAssembly.instantiateStreaming(H, y);
					return Y.then(c, function(fe) {
						return ce("wasm streaming compile failed: " + fe), ce("falling back to ArrayBuffer instantiation"), h(c)
					})
				}) : h(c)
			}
			if (r.instantiateWasm) try {
				var W = r.instantiateWasm(y, R);
				return W
			} catch (H) {
				return ce("Module.instantiateWasm callback failed with error: " + H), !1
			}
			return b().catch(o), {}
		}

		function en(y) {
			for (; y.length > 0;) {
				var R = y.shift();
				if (typeof R == "function") {
					R(r);
					continue
				}
				var c = R.func;
				typeof c == "number" ? R.arg === void 0 ? Ze.get(c)() : Ze.get(c)(R.arg) : c(R.arg === void 0 ? null : R.arg)
			}
		}

		function Qr(y, R) {}

		function Or(y, R) {
			return void 0
		}
		var Wr = {
			mappings: {},
			buffers: [null, [],
				[]
			],
			printChar: function(y, R) {
				var c = Wr.buffers[y];
				R === 0 || R === 10 ? ((y === 1 ? ae : ce)(Ee(c, 0)), c.length = 0) : c.push(R)
			},
			varargs: void 0,
			get: function() {
				Wr.varargs += 4;
				var y = qe[Wr.varargs - 4 >> 2];
				return y
			},
			getStr: function(y) {
				var R = Te(y);
				return R
			},
			get64: function(y, R) {
				return y
			}
		};

		function Zr(y, R, c) {
			return Wr.varargs = c, 0
		}

		function Cr(y, R, c) {
			return Wr.varargs = c, 0
		}

		function kr(y, R, c) {
			Wr.varargs = c
		}
		var Rr = {};

		function Jr(y) {
			for (; y.length;) {
				var R = y.pop(),
					c = y.pop();
				c(R)
			}
		}

		function pr(y) {
			return this.fromWireType(tr[y >> 2])
		}
		var on = {},
			br = {},
			xr = {},
			Sr = 48,
			Br = 57;

		function mr(y) {
			if (y === void 0) return "_unknown";
			y = y.replace(/[^a-zA-Z0-9_]/g, "$");
			var R = y.charCodeAt(0);
			return R >= Sr && R <= Br ? "_" + y : y
		}

		function Je(y, R) {
			return y = mr(y),
				function() {
					return R.apply(this, arguments)
				}
		}

		function wr(y, R) {
			var c = Je(R, function(h) {
				this.name = R, this.message = h;
				var b = new Error(h).stack;
				b !== void 0 && (this.stack = this.toString() + `
` + b.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return c.prototype = Object.create(y.prototype), c.prototype.constructor = c, c.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, c
		}
		var hr = void 0;

		function Ur(y) {
			throw new hr(y)
		}

		function lr(y, R, c) {
			y.forEach(function(Y) {
				xr[Y] = R
			});

			function h(Y) {
				var fe = c(Y);
				fe.length !== y.length && Ur("Mismatched type converter count");
				for (var he = 0; he < y.length; ++he) Kr(y[he], fe[he])
			}
			var b = new Array(R.length),
				W = [],
				H = 0;
			R.forEach(function(Y, fe) {
				br.hasOwnProperty(Y) ? b[fe] = br[Y] : (W.push(Y), on.hasOwnProperty(Y) || (on[Y] = []), on[Y].push(function() {
					b[fe] = br[Y], ++H, H === W.length && h(b)
				}))
			}), W.length === 0 && h(b)
		}

		function we(y) {
			var R = Rr[y];
			delete Rr[y];
			var c = R.rawConstructor,
				h = R.rawDestructor,
				b = R.fields,
				W = b.map(function(H) {
					return H.getterReturnType
				}).concat(b.map(function(H) {
					return H.setterArgumentType
				}));
			lr([y], W, function(H) {
				var Y = {};
				return b.forEach(function(fe, he) {
					var ye = fe.fieldName,
						Oe = H[he],
						ir = fe.getter,
						ur = fe.getterContext,
						Xe = H[he + b.length],
						He = fe.setter,
						Kn = fe.setterContext;
					Y[ye] = {
						read: function(bt) {
							return Oe.fromWireType(ir(ur, bt))
						},
						write: function(bt, Tt) {
							var Wt = [];
							He(Kn, bt, Xe.toWireType(Wt, Tt)), Jr(Wt)
						}
					}
				}), [{
					name: R.name,
					fromWireType: function(fe) {
						var he = {};
						for (var ye in Y) he[ye] = Y[ye].read(fe);
						return h(fe), he
					},
					toWireType: function(fe, he) {
						for (var ye in Y)
							if (!(ye in he)) throw new TypeError('Missing field:  "' + ye + '"');
						var Oe = c();
						for (ye in Y) Y[ye].write(Oe, he[ye]);
						return fe !== null && fe.push(h, Oe), Oe
					},
					argPackAdvance: 8,
					readValueFromPointer: pr,
					destructorFunction: h
				}]
			})
		}

		function Rn(y, R, c, h, b) {}

		function dr(y) {
			switch (y) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + y)
			}
		}

		function Re() {
			for (var y = new Array(256), R = 0; R < 256; ++R) y[R] = String.fromCharCode(R);
			an = y
		}
		var an = void 0;

		function Yr(y) {
			for (var R = "", c = y; Pe[c];) R += an[Pe[c++]];
			return R
		}
		var vn = void 0;

		function Lr(y) {
			throw new vn(y)
		}

		function Kr(y, R, c) {
			if (c = c || {}, !("argPackAdvance" in R)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var h = R.name;
			if (y || Lr('type "' + h + '" must have a positive integer typeid pointer'), br.hasOwnProperty(y)) {
				if (c.ignoreDuplicateRegistrations) return;
				Lr("Cannot register type '" + h + "' twice")
			}
			if (br[y] = R, delete xr[y], on.hasOwnProperty(y)) {
				var b = on[y];
				delete on[y], b.forEach(function(W) {
					W()
				})
			}
		}

		function Ln(y, R, c, h, b) {
			var W = dr(c);
			R = Yr(R), Kr(y, {
				name: R,
				fromWireType: function(H) {
					return !!H
				},
				toWireType: function(H, Y) {
					return Y ? h : b
				},
				argPackAdvance: 8,
				readValueFromPointer: function(H) {
					var Y;
					if (c === 1) Y = zr;
					else if (c === 2) Y = ze;
					else if (c === 4) Y = qe;
					else throw new TypeError("Unknown boolean type size: " + R);
					return this.fromWireType(Y[H >> W])
				},
				destructorFunction: null
			})
		}
		var Hn = [],
			Gr = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function un(y) {
			y > 4 && --Gr[y].refcount === 0 && (Gr[y] = void 0, Hn.push(y))
		}

		function Xn() {
			for (var y = 0, R = 5; R < Gr.length; ++R) Gr[R] !== void 0 && ++y;
			return y
		}

		function Cn() {
			for (var y = 5; y < Gr.length; ++y)
				if (Gr[y] !== void 0) return Gr[y];
			return null
		}

		function Zn() {
			r.count_emval_handles = Xn, r.get_first_emval = Cn
		}

		function hn(y) {
			switch (y) {
				case void 0:
					return 1;
				case null:
					return 2;
				case !0:
					return 3;
				case !1:
					return 4;
				default: {
					var R = Hn.length ? Hn.pop() : Gr.length;
					return Gr[R] = {
						refcount: 1,
						value: y
					}, R
				}
			}
		}

		function mn(y, R) {
			R = Yr(R), Kr(y, {
				name: R,
				fromWireType: function(c) {
					var h = Gr[c].value;
					return un(c), h
				},
				toWireType: function(c, h) {
					return hn(h)
				},
				argPackAdvance: 8,
				readValueFromPointer: pr,
				destructorFunction: null
			})
		}

		function jr(y) {
			if (y === null) return "null";
			var R = typeof y;
			return R === "object" || R === "array" || R === "function" ? y.toString() : "" + y
		}

		function Hr(y, R) {
			switch (R) {
				case 2:
					return function(c) {
						return this.fromWireType(Er[c >> 2])
					};
				case 3:
					return function(c) {
						return this.fromWireType(fn[c >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + y)
			}
		}

		function Pn(y, R, c) {
			var h = dr(c);
			R = Yr(R), Kr(y, {
				name: R,
				fromWireType: function(b) {
					return b
				},
				toWireType: function(b, W) {
					if (typeof W != "number" && typeof W != "boolean") throw new TypeError('Cannot convert "' + jr(W) + '" to ' + this.name);
					return W
				},
				argPackAdvance: 8,
				readValueFromPointer: Hr(R, h),
				destructorFunction: null
			})
		}

		function xn(y, R, c, h, b) {
			var W = R.length;
			W < 2 && Lr("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var H = R[1] !== null && c !== null, Y = !1, fe = 1; fe < R.length; ++fe)
				if (R[fe] !== null && R[fe].destructorFunction === void 0) {
					Y = !0;
					break
				} var he = R[0].name !== "void",
				ye = W - 2,
				Oe = new Array(ye),
				ir = [],
				ur = [];
			return function() {
				arguments.length !== ye && Lr("function " + y + " called with " + arguments.length + " arguments, expected " + ye + " args!"), ur.length = 0;
				var Xe;
				ir.length = H ? 2 : 1, ir[0] = b, H && (Xe = R[1].toWireType(ur, this), ir[1] = Xe);
				for (var He = 0; He < ye; ++He) Oe[He] = R[He + 2].toWireType(ur, arguments[He]), ir.push(Oe[He]);
				var Kn = h.apply(null, ir);
				if (Y) Jr(ur);
				else
					for (var He = H ? 1 : 2; He < R.length; He++) {
						var bt = He === 1 ? Xe : Oe[He - 2];
						R[He].destructorFunction !== null && R[He].destructorFunction(bt)
					}
				if (he) return R[0].fromWireType(Kn)
			}
		}

		function Fn(y, R, c) {
			if (y[R].overloadTable === void 0) {
				var h = y[R];
				y[R] = function() {
					return y[R].overloadTable.hasOwnProperty(arguments.length) || Lr("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + y[R].overloadTable + ")!"), y[R].overloadTable[arguments.length].apply(this, arguments)
				}, y[R].overloadTable = [], y[R].overloadTable[h.argCount] = h
			}
		}

		function In(y, R, c) {
			r.hasOwnProperty(y) ? ((c === void 0 || r[y].overloadTable !== void 0 && r[y].overloadTable[c] !== void 0) && Lr("Cannot register public name '" + y + "' twice"), Fn(r, y, y), r.hasOwnProperty(c) && Lr("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), r[y].overloadTable[c] = R) : (r[y] = R, c !== void 0 && (r[y].numArguments = c))
		}

		function Wn(y, R) {
			for (var c = [], h = 0; h < y; h++) c.push(qe[(R >> 2) + h]);
			return c
		}

		function Un(y, R, c) {
			r.hasOwnProperty(y) || Ur("Replacing nonexistant public symbol"), r[y].overloadTable !== void 0 && c !== void 0 ? r[y].overloadTable[c] = R : (r[y] = R, r[y].argCount = c)
		}

		function Vn(y, R, c) {
			var h = r["dynCall_" + y];
			return c && c.length ? h.apply(null, [R].concat(c)) : h.call(null, R)
		}

		function Jn(y, R, c) {
			return y.includes("j") ? Vn(y, R, c) : Ze.get(R).apply(null, c)
		}

		function ct(y, R) {
			var c = [];
			return function() {
				c.length = arguments.length;
				for (var h = 0; h < arguments.length; h++) c[h] = arguments[h];
				return Jn(y, R, c)
			}
		}

		function zn(y, R) {
			y = Yr(y);

			function c() {
				return y.includes("j") ? ct(y, R) : Ze.get(R)
			}
			var h = c();
			return typeof h != "function" && Lr("unknown function pointer with signature " + y + ": " + R), h
		}
		var Bn = void 0;

		function dt(y) {
			var R = B(y),
				c = Yr(R);
			return V(R), c
		}

		function et(y, R) {
			var c = [],
				h = {};

			function b(W) {
				if (!h[W] && !br[W]) {
					if (xr[W]) {
						xr[W].forEach(b);
						return
					}
					c.push(W), h[W] = !0
				}
			}
			throw R.forEach(b), new Bn(y + ": " + c.map(dt).join([", "]))
		}

		function Pr(y, R, c, h, b, W) {
			var H = Wn(R, c);
			y = Yr(y), b = zn(h, b), In(y, function() {
				et("Cannot call " + y + " due to unbound types", H)
			}, R - 1), lr([], H, function(Y) {
				var fe = [Y[0], null].concat(Y.slice(1));
				return Un(y, xn(y, fe, null, b, W), R - 1), []
			})
		}

		function tt(y, R, c) {
			switch (R) {
				case 0:
					return c ? function(b) {
						return zr[b]
					} : function(b) {
						return Pe[b]
					};
				case 1:
					return c ? function(b) {
						return ze[b >> 1]
					} : function(b) {
						return Ge[b >> 1]
					};
				case 2:
					return c ? function(b) {
						return qe[b >> 2]
					} : function(b) {
						return tr[b >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + y)
			}
		}

		function ar(y, R, c, h, b) {
			R = Yr(R), b === -1 && (b = 4294967295);
			var W = dr(c),
				H = function(he) {
					return he
				};
			if (h === 0) {
				var Y = 32 - 8 * c;
				H = function(he) {
					return he << Y >>> Y
				}
			}
			var fe = R.includes("unsigned");
			Kr(y, {
				name: R,
				fromWireType: H,
				toWireType: function(he, ye) {
					if (typeof ye != "number" && typeof ye != "boolean") throw new TypeError('Cannot convert "' + jr(ye) + '" to ' + this.name);
					if (ye < h || ye > b) throw new TypeError('Passing a number "' + jr(ye) + '" from JS side to C/C++ side to an argument of type "' + R + '", which is outside the valid range [' + h + ", " + b + "]!");
					return fe ? ye >>> 0 : ye | 0
				},
				argPackAdvance: 8,
				readValueFromPointer: tt(R, W, h !== 0),
				destructorFunction: null
			})
		}

		function qr(y, R, c) {
			var h = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				b = h[R];

			function W(H) {
				H = H >> 2;
				var Y = tr,
					fe = Y[H],
					he = Y[H + 1];
				return new b(Ne, he, fe)
			}
			c = Yr(c), Kr(y, {
				name: c,
				fromWireType: W,
				argPackAdvance: 8,
				readValueFromPointer: W
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function sn(y, R) {
			R = Yr(R);
			var c = R === "std::string";
			Kr(y, {
				name: R,
				fromWireType: function(h) {
					var b = tr[h >> 2],
						W;
					if (c)
						for (var H = h + 4, Y = 0; Y <= b; ++Y) {
							var fe = h + 4 + Y;
							if (Y == b || Pe[fe] == 0) {
								var he = fe - H,
									ye = Te(H, he);
								W === void 0 ? W = ye : (W += "\0", W += ye), H = fe + 1
							}
						} else {
							for (var Oe = new Array(b), Y = 0; Y < b; ++Y) Oe[Y] = String.fromCharCode(Pe[h + 4 + Y]);
							W = Oe.join("")
						}
					return V(h), W
				},
				toWireType: function(h, b) {
					b instanceof ArrayBuffer && (b = new Uint8Array(b));
					var W, H = typeof b == "string";
					H || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof Int8Array || Lr("Cannot pass non-string to std::string"), c && H ? W = function() {
						return Ae(b)
					} : W = function() {
						return b.length
					};
					var Y = W(),
						fe = D(4 + Y + 1);
					if (tr[fe >> 2] = Y, c && H) je(b, fe + 4, Y + 1);
					else if (H)
						for (var he = 0; he < Y; ++he) {
							var ye = b.charCodeAt(he);
							ye > 255 && (V(fe), Lr("String has UTF-16 code units that do not fit in 8 bits")), Pe[fe + 4 + he] = ye
						} else
							for (var he = 0; he < Y; ++he) Pe[fe + 4 + he] = b[he];
					return h !== null && h.push(V, fe), fe
				},
				argPackAdvance: 8,
				readValueFromPointer: pr,
				destructorFunction: function(h) {
					V(h)
				}
			})
		}

		function gn(y, R, c) {
			c = Yr(c);
			var h, b, W, H, Y;
			R === 2 ? (h = Ve, b = $e, H = Me, W = function() {
				return Ge
			}, Y = 1) : R === 4 && (h = xe, b = ke, H = sr, W = function() {
				return tr
			}, Y = 2), Kr(y, {
				name: c,
				fromWireType: function(fe) {
					for (var he = tr[fe >> 2], ye = W(), Oe, ir = fe + 4, ur = 0; ur <= he; ++ur) {
						var Xe = fe + 4 + ur * R;
						if (ur == he || ye[Xe >> Y] == 0) {
							var He = Xe - ir,
								Kn = h(ir, He);
							Oe === void 0 ? Oe = Kn : (Oe += "\0", Oe += Kn), ir = Xe + R
						}
					}
					return V(fe), Oe
				},
				toWireType: function(fe, he) {
					typeof he != "string" && Lr("Cannot pass non-string to C++ string type " + c);
					var ye = H(he),
						Oe = D(4 + ye + R);
					return tr[Oe >> 2] = ye >> Y, b(he, Oe + 4, ye + R), fe !== null && fe.push(V, Oe), Oe
				},
				argPackAdvance: 8,
				readValueFromPointer: pr,
				destructorFunction: function(fe) {
					V(fe)
				}
			})
		}

		function Vr(y, R, c, h, b, W) {
			Rr[y] = {
				name: Yr(R),
				rawConstructor: zn(c, h),
				rawDestructor: zn(b, W),
				fields: []
			}
		}

		function Yn(y, R, c, h, b, W, H, Y, fe, he) {
			Rr[y].fields.push({
				fieldName: Yr(R),
				getterReturnType: c,
				getter: zn(h, b),
				getterContext: W,
				setterArgumentType: H,
				setter: zn(Y, fe),
				setterContext: he
			})
		}

		function _n(y, R) {
			R = Yr(R), Kr(y, {
				isVoid: !0,
				name: R,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(c, h) {}
			})
		}
		var rt = {};

		function at(y) {
			var R = rt[y];
			return R === void 0 ? Yr(y) : R
		}

		function Tn() {
			if (typeof globalThis == "object") return globalThis;

			function y(R) {
				R.$$$embind_global$$$ = R;
				var c = typeof $$$embind_global$$$ == "object" && R.$$$embind_global$$$ === R;
				return c || delete R.$$$embind_global$$$, c
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && y(global) ? $$$embind_global$$$ = global : typeof self == "object" && y(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function mt(y) {
			return y === 0 ? hn(Tn()) : (y = at(y), hn(Tn()[y]))
		}

		function Gn(y) {
			y > 4 && (Gr[y].refcount += 1)
		}

		function ut(y, R) {
			var c = br[y];
			return c === void 0 && Lr(R + " has unknown type " + dt(y)), c
		}

		function Qn(y) {
			var R = new Array(y + 1);
			return function(c, h, b) {
				R[0] = c;
				for (var W = 0; W < y; ++W) {
					var H = ut(qe[(h >> 2) + W], "parameter " + W);
					R[W + 1] = H.readValueFromPointer(b), b += H.argPackAdvance
				}
				var Y = new(c.bind.apply(c, R));
				return hn(Y)
			}
		}
		var $n = {};

		function nt(y) {
			return y || Lr("Cannot use deleted val. handle = " + y), Gr[y].value
		}

		function lt(y, R, c, h) {
			y = nt(y);
			var b = $n[R];
			return b || (b = Qn(R), $n[R] = b), b(y, c, h)
		}

		function it() {
			Ir()
		}

		function pt(y, R) {
			throw L(y, R || 1), "longjmp"
		}

		function x(y, R) {
			return pt(y, R)
		}

		function I(y, R, c) {
			Pe.copyWithin(y, R, R + c)
		}

		function J(y) {
			try {
				return G.grow(y - Ne.byteLength + 65535 >>> 16), nn(G.buffer), 1
			} catch {}
		}

		function ge(y) {
			var R = Pe.length;
			y = y >>> 0;
			var c = 2147483648;
			if (y > c) return !1;
			for (var h = 1; h <= 4; h *= 2) {
				var b = R * (1 + .2 / h);
				b = Math.min(b, y + 100663296);
				var W = Math.min(c, Be(Math.max(y, b), 65536)),
					H = J(W);
				if (H) return !0
			}
			return !1
		}

		function be(y) {
			return 0
		}

		function Fe(y, R, c, h) {
			var b = Wr.getStreamFromFD(y),
				W = Wr.doReadv(b, R, c);
			return qe[h >> 2] = W, 0
		}

		function P(y, R, c, h, b) {}

		function i(y, R, c, h) {
			for (var b = 0, W = 0; W < c; W++) {
				for (var H = qe[R + W * 8 >> 2], Y = qe[R + (W * 8 + 4) >> 2], fe = 0; fe < Y; fe++) Wr.printChar(y, Pe[H + fe]);
				b += Y
			}
			return qe[h >> 2] = b, 0
		}

		function u() {
			return Qe()
		}

		function v(y) {
			Ce(y)
		}

		function C(y) {
			var R = Date.now() / 1e3 | 0;
			return y && (qe[y >> 2] = R), R
		}
		hr = r.InternalError = wr(Error, "InternalError"), Re(), vn = r.BindingError = wr(Error, "BindingError"), Zn(), Bn = r.UnboundTypeError = wr(Error, "UnboundTypeError");
		var $ = {
			O: Or,
			s: Zr,
			G: Cr,
			H: kr,
			x: we,
			B: Rn,
			K: Ln,
			J: mn,
			t: Pn,
			w: Pr,
			i: ar,
			e: qr,
			u: sn,
			o: gn,
			z: Vr,
			g: Yn,
			L: _n,
			j: un,
			N: mt,
			v: Gn,
			D: lt,
			f: it,
			d: x,
			E: I,
			n: ge,
			r: be,
			F: Fe,
			A: P,
			I: i,
			b: u,
			l: ie,
			p: E,
			q: S,
			C: M,
			y: j,
			m: le,
			h: A,
			c: pe,
			k: w,
			a: v,
			M: C
		};
		cr(), r.___wasm_call_ctors = function() {
			return (r.___wasm_call_ctors = r.asm.Q).apply(null, arguments)
		};
		var D = r._malloc = function() {
				return (D = r._malloc = r.asm.R).apply(null, arguments)
			},
			V = r._free = function() {
				return (V = r._free = r.asm.S).apply(null, arguments)
			},
			B = r.___getTypeName = function() {
				return (B = r.___getTypeName = r.asm.T).apply(null, arguments)
			};
		r.___embind_register_native_and_builtin_types = function() {
			return (r.___embind_register_native_and_builtin_types = r.asm.U).apply(null, arguments)
		};
		var g = r.stackSave = function() {
				return (g = r.stackSave = r.asm.V).apply(null, arguments)
			},
			T = r.stackRestore = function() {
				return (T = r.stackRestore = r.asm.W).apply(null, arguments)
			},
			L = r._setThrew = function() {
				return (L = r._setThrew = r.asm.X).apply(null, arguments)
			};
		r.dynCall_jiiiiiiiii = function() {
			return (r.dynCall_jiiiiiiiii = r.asm.Z).apply(null, arguments)
		};
		var re = r.dynCall_ijiii = function() {
			return (re = r.dynCall_ijiii = r.asm._).apply(null, arguments)
		};
		r.dynCall_jiji = function() {
			return (r.dynCall_jiji = r.asm.$).apply(null, arguments)
		}, r.dynCall_jiiiiiiii = function() {
			return (r.dynCall_jiiiiiiii = r.asm.aa).apply(null, arguments)
		}, r.dynCall_jiiiiii = function() {
			return (r.dynCall_jiiiiii = r.asm.ba).apply(null, arguments)
		}, r.dynCall_jiiiii = function() {
			return (r.dynCall_jiiiii = r.asm.ca).apply(null, arguments)
		}, r.dynCall_iiijii = function() {
			return (r.dynCall_iiijii = r.asm.da).apply(null, arguments)
		};

		function le(y, R) {
			var c = g();
			try {
				Ze.get(y)(R)
			} catch (h) {
				if (T(c), h !== h + 0 && h !== "longjmp") throw h;
				L(1, 0)
			}
		}

		function pe(y, R, c, h, b) {
			var W = g();
			try {
				Ze.get(y)(R, c, h, b)
			} catch (H) {
				if (T(W), H !== H + 0 && H !== "longjmp") throw H;
				L(1, 0)
			}
		}

		function A(y, R, c) {
			var h = g();
			try {
				Ze.get(y)(R, c)
			} catch (b) {
				if (T(h), b !== b + 0 && b !== "longjmp") throw b;
				L(1, 0)
			}
		}

		function S(y, R, c, h, b, W, H, Y, fe, he) {
			var ye = g();
			try {
				return Ze.get(y)(R, c, h, b, W, H, Y, fe, he)
			} catch (Oe) {
				if (T(ye), Oe !== Oe + 0 && Oe !== "longjmp") throw Oe;
				L(1, 0)
			}
		}

		function M(y, R, c, h, b, W, H, Y, fe, he, ye, Oe) {
			var ir = g();
			try {
				return Ze.get(y)(R, c, h, b, W, H, Y, fe, he, ye, Oe)
			} catch (ur) {
				if (T(ir), ur !== ur + 0 && ur !== "longjmp") throw ur;
				L(1, 0)
			}
		}

		function ie(y, R, c, h, b) {
			var W = g();
			try {
				return Ze.get(y)(R, c, h, b)
			} catch (H) {
				if (T(W), H !== H + 0 && H !== "longjmp") throw H;
				L(1, 0)
			}
		}

		function w(y, R, c, h, b, W, H, Y, fe, he, ye) {
			var Oe = g();
			try {
				Ze.get(y)(R, c, h, b, W, H, Y, fe, he, ye)
			} catch (ir) {
				if (T(Oe), ir !== ir + 0 && ir !== "longjmp") throw ir;
				L(1, 0)
			}
		}

		function E(y, R, c, h, b, W, H, Y, fe) {
			var he = g();
			try {
				return Ze.get(y)(R, c, h, b, W, H, Y, fe)
			} catch (ye) {
				if (T(he), ye !== ye + 0 && ye !== "longjmp") throw ye;
				L(1, 0)
			}
		}

		function j(y, R, c, h, b, W) {
			var H = g();
			try {
				return re(y, R, c, h, b, W)
			} catch (Y) {
				if (T(H), Y !== Y + 0 && Y !== "longjmp") throw Y;
				L(1, 0)
			}
		}
		var Q;
		dn = function y() {
			Q || ue(), Q || (dn = y)
		};

		function ue(y) {
			if ($r > 0 || (On(), $r > 0)) return;

			function R() {
				Q || (Q = !0, r.calledRun = !0, !q && (or(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), yr()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), R()
			}, 1)) : R()
		}
		if (r.run = ue, r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return ue(), r.ready
	}
}();
const q_ = globalThis.ServiceWorkerGlobalScope !== void 0,
	X_ = q_ && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
	Z_ = typeof process == "object" && process.release && process.release.name === "node";
(X_ || Z_) && (globalThis.ImageData || (globalThis.ImageData = class {
	constructor(n, r, t) {
		this.data = n, this.width = r, this.height = t
	}
}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
	href: ""
}));
const J_ = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: K_
}, Symbol.toStringTag, {
	value: "Module"
}));
var ey = (() => {
	var e = import.meta.url;
	return function(f = {}) {
		function r() {
			return ke.buffer != Er.buffer && or(), Er
		}

		function t() {
			return ke.buffer != Er.buffer && or(), fn
		}

		function o() {
			return ke.buffer != Er.buffer && or(), nn
		}

		function s() {
			return ke.buffer != Er.buffer && or(), Ze
		}

		function p() {
			return ke.buffer != Er.buffer && or(), Mr
		}

		function k() {
			return ke.buffer != Er.buffer && or(), tn
		}

		function U() {
			return ke.buffer != Er.buffer && or(), wn
		}

		function K() {
			return ke.buffer != Er.buffer && or(), On
		}
		var f = typeof f < "u" ? f : {},
			te, ae;
		f.ready = new Promise(function(a, l) {
			te = a, ae = l
		}), globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && caches.default !== void 0 && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(l, m, F) {
				this.data = l, this.width = m, this.height = F
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), self.location === void 0 && (self.location = {
			href: ""
		}));
		var Ce = Object.assign({}, f),
			Qe = "./this.program",
			Z = (a, l) => {
				throw l
			},
			G = typeof window == "object",
			q = typeof importScripts == "function",
			Ee = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string",
			Te = f.ENVIRONMENT_IS_PTHREAD || !1,
			Ue = "";

		function je(a) {
			return f.locateFile ? f.locateFile(a, Ue) : Ue + a
		}
		var Ae;
		(G || q) && (q ? Ue = self.location.href : typeof document < "u" && document.currentScript && (Ue = document.currentScript.src), e && (Ue = e), Ue.indexOf("blob:") !== 0 ? Ue = Ue.substr(0, Ue.replace(/[?#].*/, "").lastIndexOf("/") + 1) : Ue = "", q && (Ae = a => {
			var l = new XMLHttpRequest;
			return l.open("GET", a, !1), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response)
		}));
		var Ve = f.print || console.log.bind(console),
			$e = f.printErr || console.warn.bind(console);
		Object.assign(f, Ce), Ce = null, f.arguments && f.arguments, f.thisProgram && (Qe = f.thisProgram), f.quit && (Z = f.quit);
		var Me;
		f.wasmBinary && (Me = f.wasmBinary);
		var xe = f.noExitRuntime || !0;
		typeof WebAssembly != "object" && Or("no native wasm support detected");
		var ke, sr, Be = !1,
			Ne;

		function zr(a, l) {
			a || Or(l)
		}

		function Pe(a, l, m) {
			for (var F = l + m, N = ""; !(l >= F);) {
				var X = a[l++];
				if (!X) return N;
				if (!(X & 128)) {
					N += String.fromCharCode(X);
					continue
				}
				var ne = a[l++] & 63;
				if ((X & 224) == 192) {
					N += String.fromCharCode((X & 31) << 6 | ne);
					continue
				}
				var ee = a[l++] & 63;
				if ((X & 240) == 224 ? X = (X & 15) << 12 | ne << 6 | ee : X = (X & 7) << 18 | ne << 12 | ee << 6 | a[l++] & 63, X < 65536) N += String.fromCharCode(X);
				else {
					var ve = X - 65536;
					N += String.fromCharCode(55296 | ve >> 10, 56320 | ve & 1023)
				}
			}
			return N
		}

		function ze(a, l) {
			return a ? Pe(t(), a, l) : ""
		}

		function Ge(a, l, m, F) {
			if (!(F > 0)) return 0;
			for (var N = m, X = m + F - 1, ne = 0; ne < a.length; ++ne) {
				var ee = a.charCodeAt(ne);
				if (ee >= 55296 && ee <= 57343) {
					var ve = a.charCodeAt(++ne);
					ee = 65536 + ((ee & 1023) << 10) | ve & 1023
				}
				if (ee <= 127) {
					if (m >= X) break;
					l[m++] = ee
				} else if (ee <= 2047) {
					if (m + 1 >= X) break;
					l[m++] = 192 | ee >> 6, l[m++] = 128 | ee & 63
				} else if (ee <= 65535) {
					if (m + 2 >= X) break;
					l[m++] = 224 | ee >> 12, l[m++] = 128 | ee >> 6 & 63, l[m++] = 128 | ee & 63
				} else {
					if (m + 3 >= X) break;
					l[m++] = 240 | ee >> 18, l[m++] = 128 | ee >> 12 & 63, l[m++] = 128 | ee >> 6 & 63, l[m++] = 128 | ee & 63
				}
			}
			return l[m] = 0, m - N
		}

		function qe(a, l, m) {
			return Ge(a, t(), l, m)
		}

		function tr(a) {
			for (var l = 0, m = 0; m < a.length; ++m) {
				var F = a.charCodeAt(m);
				F <= 127 ? l++ : F <= 2047 ? l += 2 : F >= 55296 && F <= 57343 ? (l += 4, ++m) : l += 3
			}
			return l
		}
		var Er, fn, nn, Ze, Mr, tn, wn, On;

		function or() {
			var a = ke.buffer;
			f.HEAP8 = Er = new Int8Array(a), f.HEAP16 = nn = new Int16Array(a), f.HEAP32 = Mr = new Int32Array(a), f.HEAPU8 = fn = new Uint8Array(a), f.HEAPU16 = Ze = new Uint16Array(a), f.HEAPU32 = tn = new Uint32Array(a), f.HEAPF32 = wn = new Float32Array(a), f.HEAPF64 = On = new Float64Array(a)
		}
		var yr = f.INITIAL_MEMORY || 16777216;
		if (zr(yr >= 65536, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + yr + "! (STACK_SIZE=65536)"), Te) ke = f.wasmMemory;
		else if (f.wasmMemory) ke = f.wasmMemory;
		else if (ke = new WebAssembly.Memory({
				initial: yr / 65536,
				maximum: 2147483648 / 65536,
				shared: !0
			}), !(ke.buffer instanceof SharedArrayBuffer)) throw $e("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), Ee && $e("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"), Error("bad memory");
		or(), yr = ke.buffer.byteLength;
		var Fr, cn = [],
			En = [],
			$r = [],
			dn = 0;

		function pn() {
			return xe || dn > 0
		}

		function Xr() {
			if (f.preRun)
				for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length;) Dr(f.preRun.shift());
			Rn(cn)
		}

		function Ir() {
			Te || Rn(En)
		}

		function Mn() {
			if (!Te) {
				if (f.postRun)
					for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length;) bn(f.postRun.shift());
				Rn($r)
			}
		}

		function Dr(a) {
			cn.unshift(a)
		}

		function Tr(a) {
			En.unshift(a)
		}

		function bn(a) {
			$r.unshift(a)
		}
		var Ar = 0,
			cr = null;

		function en(a) {
			Ar++, f.monitorRunDependencies && f.monitorRunDependencies(Ar)
		}

		function Qr(a) {
			if (Ar--, f.monitorRunDependencies && f.monitorRunDependencies(Ar), Ar == 0 && cr) {
				var l = cr;
				cr = null, l()
			}
		}

		function Or(a) {
			f.onAbort && f.onAbort(a), a = "Aborted(" + a + ")", $e(a), Be = !0, Ne = 1, a += ". Build with -sASSERTIONS for more info.";
			var l = new WebAssembly.RuntimeError(a);
			throw ae(l), l
		}
		var Wr = "data:application/octet-stream;base64,";

		function Zr(a) {
			return a.startsWith(Wr)
		}
		var Cr;
		f.locateFile ? (Cr = "jxl_enc_mt_simd.wasm", Zr(Cr) || (Cr = je(Cr))) : Cr = new URL(location.href +"assets/jxl_enc_mt_simd-dX2xfs-R.wasm", import.meta.url).href;

		function kr(a) {
			try {
				if (a == Cr && Me) return new Uint8Array(Me);
				if (Ae) return Ae(a);
				throw "both async and sync fetching of the wasm failed"
			} catch (l) {
				Or(l)
			}
		}

		function Rr(a) {
			return !Me && (G || q) && typeof fetch == "function" ? fetch(a, {
				credentials: "same-origin"
			}).then(function(l) {
				if (!l.ok) throw "failed to load wasm binary file at '" + a + "'";
				return l.arrayBuffer()
			}).catch(function() {
				return kr(a)
			}) : Promise.resolve().then(function() {
				return kr(a)
			})
		}

		function Jr(a, l, m) {
			return Rr(a).then(function(F) {
				return WebAssembly.instantiate(F, l)
			}).then(function(F) {
				return F
			}).then(m, function(F) {
				$e("failed to asynchronously prepare wasm: " + F), Or(F)
			})
		}

		function pr(a, l, m, F) {
			return !a && typeof WebAssembly.instantiateStreaming == "function" && !Zr(l) && typeof fetch == "function" ? fetch(l, {
				credentials: "same-origin"
			}).then(function(N) {
				var X = WebAssembly.instantiateStreaming(N, m);
				return X.then(F, function(ne) {
					return $e("wasm streaming compile failed: " + ne), $e("falling back to ArrayBuffer instantiation"), Jr(l, m, F)
				})
			}) : Jr(l, m, F)
		}

		function on() {
			var a = {
				a: Ua
			};

			function l(F, N) {
				var X = F.exports;
				return f.asm = X, Lr(f.asm.U), Fr = f.asm.aa, Tr(f.asm.R), sr = N, we.loadWasmModuleToAllWorkers(() => Qr()), X
			}
			en();

			function m(F) {
				l(F.instance, F.module)
			}
			if (f.instantiateWasm) try {
				return f.instantiateWasm(a, l)
			} catch (F) {
				$e("Module.instantiateWasm callback failed with error: " + F), ae(F)
			}
			return pr(Me, Cr, a, m).catch(ae), {}
		}

		function br(a) {
			this.name = "ExitStatus", this.message = "Program terminated with exit(" + a + ")", this.status = a
		}

		function xr(a) {
			a.terminate(), a.onmessage = l => {}
		}

		function Sr(a) {
			var l = we.pthreads[a];
			delete we.pthreads[a], xr(l), St(a), we.runningWorkers.splice(we.runningWorkers.indexOf(l), 1), l.pthread_ptr = 0
		}

		function Br(a) {
			var l = we.pthreads[a];
			l.postMessage({
				cmd: "cancel"
			})
		}

		function mr(a) {
			var l = we.pthreads[a];
			zr(l), we.returnWorkerToPool(l)
		}

		function Je(a) {
			var l = we.getNewWorker();
			if (!l) return 6;
			we.runningWorkers.push(l), we.pthreads[a.pthread_ptr] = l, l.pthread_ptr = a.pthread_ptr;
			var m = {
				cmd: "run",
				start_routine: a.startRoutine,
				arg: a.arg,
				pthread_ptr: a.pthread_ptr
			};
			return l.postMessage(m, a.transferList), 0
		}

		function wr(a) {
			if (Te) return Xe(1, 1, a);
			Ne = a, pn() || (we.terminateAllThreads(), f.onExit && f.onExit(a), Be = !0), Z(a, new br(a))
		}

		function hr(a, l) {
			if (Ne = a, Te) throw Re(a), "unwind";
			wr(a)
		}
		var Ur = hr;

		function lr(a) {
			if (a instanceof br || a == "unwind") return Ne;
			Z(1, a)
		}
		var we = {
			unusedWorkers: [],
			runningWorkers: [],
			tlsInitFunctions: [],
			pthreads: {},
			init: function() {
				Te ? we.initWorker() : we.initMainThread()
			},
			initMainThread: function() {
				for (var a = navigator.hardwareConcurrency; a--;) we.allocateUnusedWorker()
			},
			initWorker: function() {
				xe = !1
			},
			setExitStatus: function(a) {
				Ne = a
			},
			terminateAllThreads__deps: ["$terminateWorker"],
			terminateAllThreads: function() {
				for (var a of we.runningWorkers) xr(a);
				for (var a of we.unusedWorkers) xr(a);
				we.unusedWorkers = [], we.runningWorkers = [], we.pthreads = []
			},
			returnWorkerToPool: function(a) {
				var l = a.pthread_ptr;
				delete we.pthreads[l], we.unusedWorkers.push(a), we.runningWorkers.splice(we.runningWorkers.indexOf(a), 1), a.pthread_ptr = 0, St(l)
			},
			receiveObjectTransfer: function(a) {},
			threadInitTLS: function() {
				we.tlsInitFunctions.forEach(a => a())
			},
			loadWasmModuleToWorker: a => new Promise(l => {
				a.onmessage = X => {
					var ne = X.data,
						ee = ne.cmd;
					if (a.pthread_ptr && (we.currentProxiedOperationCallerThread = a.pthread_ptr), ne.targetThread && ne.targetThread != yi()) {
						var ve = we.pthreads[ne.targetThread];
						ve ? ve.postMessage(ne, ne.transferList) : $e('Internal error! Worker sent a message "' + ee + '" to target pthread ' + ne.targetThread + ", but that thread no longer exists!"), we.currentProxiedOperationCallerThread = void 0;
						return
					}
					ee === "checkMailbox" ? ie() : ee === "spawnThread" ? Je(ne) : ee === "cleanupThread" ? mr(ne.thread) : ee === "killThread" ? Sr(ne.thread) : ee === "cancelThread" ? Br(ne.thread) : ee === "loaded" ? (a.loaded = !0, l(a)) : ee === "print" ? Ve("Thread " + ne.threadId + ": " + ne.text) : ee === "printErr" ? $e("Thread " + ne.threadId + ": " + ne.text) : ee === "alert" ? alert("Thread " + ne.threadId + ": " + ne.text) : ne.target === "setimmediate" ? a.postMessage(ne) : ee === "callHandler" ? f[ne.handler](...ne.args) : ee && $e("worker sent an unknown command " + ee), we.currentProxiedOperationCallerThread = void 0
				}, a.onerror = X => {
					var ne = "worker sent an error!";
					throw $e(ne + " " + X.filename + ":" + X.lineno + ": " + X.message), X
				};
				var m = [],
					F = ["onExit", "onAbort", "print", "printErr"];
				for (var N of F) f.hasOwnProperty(N) && m.push(N);
				a.postMessage({
					cmd: "load",
					handlers: m,
					urlOrBlob: f.mainScriptUrlOrBlob,
					wasmMemory: ke,
					wasmModule: sr
				})
			}),
			loadWasmModuleToAllWorkers: function(a) {
				if (Te) return a();
				Promise.all(we.unusedWorkers.map(we.loadWasmModuleToWorker)).then(a)
			},
			allocateUnusedWorker: function() {
				var a;
				if (!f.locateFile) a = new Worker(new URL(location.href +"assets/jxl_enc_mt_simd.worker-BG8Ps9my.js", import.meta.url));
				else {
					var l = je("jxl_enc_mt_simd.worker.js");
					a = new Worker(l)
				}
				we.unusedWorkers.push(a)
			},
			getNewWorker: function() {
				return we.unusedWorkers.length == 0 && (we.allocateUnusedWorker(), we.loadWasmModuleToWorker(we.unusedWorkers[0])), we.unusedWorkers.pop()
			}
		};
		f.PThread = we;

		function Rn(a) {
			for (; a.length > 0;) a.shift()(f)
		}

		function dr() {
			var a = yi(),
				l = p()[a + 52 >> 2],
				m = p()[a + 56 >> 2],
				F = l - m;
			eo(l, F), Ri(l)
		}
		f.establishStackSpace = dr;

		function Re(a) {
			if (Te) return Xe(2, 0, a);
			Ur(a)
		}
		var an = [];

		function Yr(a) {
			var l = an[a];
			return l || (a >= an.length && (an.length = a + 1), an[a] = l = Fr.get(a)), l
		}

		function vn(a, l) {
			var m = Yr(a)(l);
			pn() ? we.setExitStatus(m) : ki(m)
		}
		f.invokeEntryPoint = vn;

		function Lr(a) {
			we.tlsInitFunctions.push(a)
		}

		function Kr(a) {
			this.excPtr = a, this.ptr = a - 24, this.set_type = function(l) {
				k()[this.ptr + 4 >> 2] = l
			}, this.get_type = function() {
				return k()[this.ptr + 4 >> 2]
			}, this.set_destructor = function(l) {
				k()[this.ptr + 8 >> 2] = l
			}, this.get_destructor = function() {
				return k()[this.ptr + 8 >> 2]
			}, this.set_refcount = function(l) {
				p()[this.ptr >> 2] = l
			}, this.set_caught = function(l) {
				l = l ? 1 : 0, r()[this.ptr + 12 >> 0] = l
			}, this.get_caught = function() {
				return r()[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(l) {
				l = l ? 1 : 0, r()[this.ptr + 13 >> 0] = l
			}, this.get_rethrown = function() {
				return r()[this.ptr + 13 >> 0] != 0
			}, this.init = function(l, m) {
				this.set_adjusted_ptr(0), this.set_type(l), this.set_destructor(m), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				Atomics.add(p(), this.ptr + 0 >> 2, 1)
			}, this.release_ref = function() {
				var l = Atomics.sub(p(), this.ptr + 0 >> 2, 1);
				return l === 1
			}, this.set_adjusted_ptr = function(l) {
				k()[this.ptr + 16 >> 2] = l
			}, this.get_adjusted_ptr = function() {
				return k()[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var l = no(this.get_type());
				if (l) return k()[this.excPtr >> 2];
				var m = this.get_adjusted_ptr();
				return m !== 0 ? m : this.excPtr
			}
		}

		function Ln(a, l, m) {
			var F = new Kr(a);
			throw F.init(l, m), a
		}

		function Hn(a) {
			Fo(a, !q, 1, !G), we.threadInitTLS()
		}

		function Gr(a) {
			Te ? postMessage({
				cmd: "cleanupThread",
				thread: a
			}) : mr(a)
		}

		function un(a, l, m) {
			return Te ? Xe(3, 1, a, l, m) : 0
		}

		function Xn(a, l, m, F) {
			if (Te) return Xe(4, 1, a, l, m, F)
		}
		var Cn = {};

		function Zn(a) {
			for (; a.length;) {
				var l = a.pop(),
					m = a.pop();
				m(l)
			}
		}

		function hn(a) {
			return this.fromWireType(p()[a >> 2])
		}
		var mn = {},
			jr = {},
			Hr = {},
			Pn = 48,
			xn = 57;

		function Fn(a) {
			if (a === void 0) return "_unknown";
			a = a.replace(/[^a-zA-Z0-9_]/g, "$");
			var l = a.charCodeAt(0);
			return l >= Pn && l <= xn ? "_" + a : a
		}

		function In(a, l) {
			return a = Fn(a), {
				[a]: function() {
					return l.apply(this, arguments)
				}
			} [a]
		}

		function Wn(a, l) {
			var m = In(l, function(F) {
				this.name = l, this.message = F;
				var N = new Error(F).stack;
				N !== void 0 && (this.stack = this.toString() + `
` + N.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return m.prototype = Object.create(a.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, m
		}
		var Un = void 0;

		function Vn(a) {
			throw new Un(a)
		}

		function Jn(a, l, m) {
			a.forEach(function(ee) {
				Hr[ee] = l
			});

			function F(ee) {
				var ve = m(ee);
				ve.length !== a.length && Vn("Mismatched type converter count");
				for (var We = 0; We < a.length; ++We) qr(a[We], ve[We])
			}
			var N = new Array(l.length),
				X = [],
				ne = 0;
			l.forEach((ee, ve) => {
				jr.hasOwnProperty(ee) ? N[ve] = jr[ee] : (X.push(ee), mn.hasOwnProperty(ee) || (mn[ee] = []), mn[ee].push(() => {
					N[ve] = jr[ee], ++ne, ne === X.length && F(N)
				}))
			}), X.length === 0 && F(N)
		}

		function ct(a) {
			var l = Cn[a];
			delete Cn[a];
			var m = l.rawConstructor,
				F = l.rawDestructor,
				N = l.fields,
				X = N.map(ne => ne.getterReturnType).concat(N.map(ne => ne.setterArgumentType));
			Jn([a], X, ne => {
				var ee = {};
				return N.forEach((ve, We) => {
					var nr = ve.fieldName,
						Ke = ne[We],
						rr = ve.getter,
						Sn = ve.getterContext,
						Dn = ne[We + N.length],
						_t = ve.setter,
						jn = ve.setterContext;
					ee[nr] = {
						read: kt => Ke.fromWireType(rr(Sn, kt)),
						write: (kt, se) => {
							var De = [];
							_t(jn, kt, Dn.toWireType(De, se)), Zn(De)
						}
					}
				}), [{
					name: l.name,
					fromWireType: function(ve) {
						var We = {};
						for (var nr in ee) We[nr] = ee[nr].read(ve);
						return F(ve), We
					},
					toWireType: function(ve, We) {
						for (var nr in ee)
							if (!(nr in We)) throw new TypeError('Missing field:  "' + nr + '"');
						var Ke = m();
						for (nr in ee) ee[nr].write(Ke, We[nr]);
						return ve !== null && ve.push(F, Ke), Ke
					},
					argPackAdvance: 8,
					readValueFromPointer: hn,
					destructorFunction: F
				}]
			})
		}

		function zn(a, l, m, F, N) {}

		function Bn(a) {
			switch (a) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + a)
			}
		}

		function dt() {
			for (var a = new Array(256), l = 0; l < 256; ++l) a[l] = String.fromCharCode(l);
			et = a
		}
		var et = void 0;

		function Pr(a) {
			for (var l = "", m = a; t()[m];) l += et[t()[m++]];
			return l
		}
		var tt = void 0;

		function ar(a) {
			throw new tt(a)
		}

		function qr(a, l, m = {}) {
			if (!("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var F = l.name;
			if (a || ar('type "' + F + '" must have a positive integer typeid pointer'), jr.hasOwnProperty(a)) {
				if (m.ignoreDuplicateRegistrations) return;
				ar("Cannot register type '" + F + "' twice")
			}
			if (jr[a] = l, delete Hr[a], mn.hasOwnProperty(a)) {
				var N = mn[a];
				delete mn[a], N.forEach(X => X())
			}
		}

		function sn(a, l, m, F, N) {
			var X = Bn(m);
			l = Pr(l), qr(a, {
				name: l,
				fromWireType: function(ne) {
					return !!ne
				},
				toWireType: function(ne, ee) {
					return ee ? F : N
				},
				argPackAdvance: 8,
				readValueFromPointer: function(ne) {
					var ee;
					if (m === 1) ee = r();
					else if (m === 2) ee = o();
					else if (m === 4) ee = p();
					else throw new TypeError("Unknown boolean type size: " + l);
					return this.fromWireType(ee[ne >> X])
				},
				destructorFunction: null
			})
		}
		var gn = [],
			Vr = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function Yn(a) {
			a > 4 && --Vr[a].refcount === 0 && (Vr[a] = void 0, gn.push(a))
		}

		function _n() {
			for (var a = 0, l = 5; l < Vr.length; ++l) Vr[l] !== void 0 && ++a;
			return a
		}

		function rt() {
			for (var a = 5; a < Vr.length; ++a)
				if (Vr[a] !== void 0) return Vr[a];
			return null
		}

		function at() {
			f.count_emval_handles = _n, f.get_first_emval = rt
		}
		var Tn = {
			toValue: a => (a || ar("Cannot use deleted val. handle = " + a), Vr[a].value),
			toHandle: a => {
				switch (a) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var l = gn.length ? gn.pop() : Vr.length;
						return Vr[l] = {
							refcount: 1,
							value: a
						}, l
					}
				}
			}
		};

		function mt(a, l) {
			l = Pr(l), qr(a, {
				name: l,
				fromWireType: function(m) {
					var F = Tn.toValue(m);
					return Yn(m), F
				},
				toWireType: function(m, F) {
					return Tn.toHandle(F)
				},
				argPackAdvance: 8,
				readValueFromPointer: hn,
				destructorFunction: null
			})
		}

		function Gn(a, l) {
			switch (l) {
				case 2:
					return function(m) {
						return this.fromWireType(U()[m >> 2])
					};
				case 3:
					return function(m) {
						return this.fromWireType(K()[m >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + a)
			}
		}

		function ut(a, l, m) {
			var F = Bn(m);
			l = Pr(l), qr(a, {
				name: l,
				fromWireType: function(N) {
					return N
				},
				toWireType: function(N, X) {
					return X
				},
				argPackAdvance: 8,
				readValueFromPointer: Gn(l, F),
				destructorFunction: null
			})
		}

		function Qn(a, l, m, F, N, X) {
			var ne = l.length;
			ne < 2 && ar("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var ee = l[1] !== null && m !== null, ve = !1, We = 1; We < l.length; ++We)
				if (l[We] !== null && l[We].destructorFunction === void 0) {
					ve = !0;
					break
				} var nr = l[0].name !== "void",
				Ke = ne - 2,
				rr = new Array(Ke),
				Sn = [],
				Dn = [];
			return function() {
				arguments.length !== Ke && ar("function " + a + " called with " + arguments.length + " arguments, expected " + Ke + " args!"), Dn.length = 0;
				var _t;
				Sn.length = ee ? 2 : 1, Sn[0] = N, ee && (_t = l[1].toWireType(Dn, this), Sn[1] = _t);
				for (var jn = 0; jn < Ke; ++jn) rr[jn] = l[jn + 2].toWireType(Dn, arguments[jn]), Sn.push(rr[jn]);
				var kt = F.apply(null, Sn);

				function se(De) {
					if (ve) Zn(Dn);
					else
						for (var Nr = ee ? 1 : 2; Nr < l.length; Nr++) {
							var rn = Nr === 1 ? _t : rr[Nr - 2];
							l[Nr].destructorFunction !== null && l[Nr].destructorFunction(rn)
						}
					if (nr) return l[0].fromWireType(De)
				}
				return se(kt)
			}
		}

		function $n(a, l, m) {
			if (a[l].overloadTable === void 0) {
				var F = a[l];
				a[l] = function() {
					return a[l].overloadTable.hasOwnProperty(arguments.length) || ar("Function '" + m + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[l].overloadTable + ")!"), a[l].overloadTable[arguments.length].apply(this, arguments)
				}, a[l].overloadTable = [], a[l].overloadTable[F.argCount] = F
			}
		}

		function nt(a, l, m) {
			f.hasOwnProperty(a) ? ((m === void 0 || f[a].overloadTable !== void 0 && f[a].overloadTable[m] !== void 0) && ar("Cannot register public name '" + a + "' twice"), $n(f, a, a), f.hasOwnProperty(m) && ar("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), f[a].overloadTable[m] = l) : (f[a] = l, m !== void 0 && (f[a].numArguments = m))
		}

		function lt(a, l) {
			for (var m = [], F = 0; F < a; F++) m.push(k()[l + F * 4 >> 2]);
			return m
		}

		function it(a, l, m) {
			f.hasOwnProperty(a) || Vn("Replacing nonexistant public symbol"), f[a].overloadTable !== void 0 && m !== void 0 ? f[a].overloadTable[m] = l : (f[a] = l, f[a].argCount = m)
		}

		function pt(a, l, m) {
			var F = f["dynCall_" + a];
			return m && m.length ? F.apply(null, [l].concat(m)) : F.call(null, l)
		}

		function x(a, l, m) {
			if (a.includes("j")) return pt(a, l, m);
			var F = Yr(l).apply(null, m);
			return F
		}

		function I(a, l) {
			var m = [];
			return function() {
				return m.length = 0, Object.assign(m, arguments), x(a, l, m)
			}
		}

		function J(a, l) {
			a = Pr(a);

			function m() {
				return a.includes("j") ? I(a, l) : Yr(l)
			}
			var F = m();
			return typeof F != "function" && ar("unknown function pointer with signature " + a + ": " + l), F
		}
		var ge = void 0;

		function be(a) {
			var l = Zi(a),
				m = Pr(l);
			return Ct(l), m
		}

		function Fe(a, l) {
			var m = [],
				F = {};

			function N(X) {
				if (!F[X] && !jr[X]) {
					if (Hr[X]) {
						Hr[X].forEach(N);
						return
					}
					m.push(X), F[X] = !0
				}
			}
			throw l.forEach(N), new ge(a + ": " + m.map(be).join([", "]))
		}

		function P(a, l, m, F, N, X, ne) {
			var ee = lt(l, m);
			a = Pr(a), N = J(F, N), nt(a, function() {
				Fe("Cannot call " + a + " due to unbound types", ee)
			}, l - 1), Jn([], ee, function(ve) {
				var We = [ve[0], null].concat(ve.slice(1));
				return it(a, Qn(a, We, null, N, X), l - 1), []
			})
		}

		function i(a, l, m) {
			switch (l) {
				case 0:
					return m ? function(N) {
						return r()[N]
					} : function(N) {
						return t()[N]
					};
				case 1:
					return m ? function(N) {
						return o()[N >> 1]
					} : function(N) {
						return s()[N >> 1]
					};
				case 2:
					return m ? function(N) {
						return p()[N >> 2]
					} : function(N) {
						return k()[N >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + a)
			}
		}

		function u(a, l, m, F, N) {
			l = Pr(l);
			var X = Bn(m),
				ne = Ke => Ke;
			if (F === 0) {
				var ee = 32 - 8 * m;
				ne = Ke => Ke << ee >>> ee
			}
			var ve = l.includes("unsigned"),
				We = (Ke, rr) => {},
				nr;
			ve ? nr = function(Ke, rr) {
				return We(rr, this.name), rr >>> 0
			} : nr = function(Ke, rr) {
				return We(rr, this.name), rr
			}, qr(a, {
				name: l,
				fromWireType: ne,
				toWireType: nr,
				argPackAdvance: 8,
				readValueFromPointer: i(l, X, F !== 0),
				destructorFunction: null
			})
		}

		function v(a, l, m) {
			var F = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				N = F[l];

			function X(ne) {
				ne = ne >> 2;
				var ee = k(),
					ve = ee[ne],
					We = ee[ne + 1];
				return new N(ee.buffer, We, ve)
			}
			m = Pr(m), qr(a, {
				name: m,
				fromWireType: X,
				argPackAdvance: 8,
				readValueFromPointer: X
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function C(a, l) {
			l = Pr(l);
			var m = l === "std::string";
			qr(a, {
				name: l,
				fromWireType: function(F) {
					var N = k()[F >> 2],
						X = F + 4,
						ne;
					if (m)
						for (var ee = X, ve = 0; ve <= N; ++ve) {
							var We = X + ve;
							if (ve == N || t()[We] == 0) {
								var nr = We - ee,
									Ke = ze(ee, nr);
								ne === void 0 ? ne = Ke : (ne += "\0", ne += Ke), ee = We + 1
							}
						} else {
							for (var rr = new Array(N), ve = 0; ve < N; ++ve) rr[ve] = String.fromCharCode(t()[X + ve]);
							ne = rr.join("")
						}
					return Ct(F), ne
				},
				toWireType: function(F, N) {
					N instanceof ArrayBuffer && (N = new Uint8Array(N));
					var X, ne = typeof N == "string";
					ne || N instanceof Uint8Array || N instanceof Uint8ClampedArray || N instanceof Int8Array || ar("Cannot pass non-string to std::string"), m && ne ? X = tr(N) : X = N.length;
					var ee = Mi(4 + X + 1),
						ve = ee + 4;
					if (k()[ee >> 2] = X, m && ne) qe(N, ve, X + 1);
					else if (ne)
						for (var We = 0; We < X; ++We) {
							var nr = N.charCodeAt(We);
							nr > 255 && (Ct(ve), ar("String has UTF-16 code units that do not fit in 8 bits")), t()[ve + We] = nr
						} else
							for (var We = 0; We < X; ++We) t()[ve + We] = N[We];
					return F !== null && F.push(Ct, ee), ee
				},
				argPackAdvance: 8,
				readValueFromPointer: hn,
				destructorFunction: function(F) {
					Ct(F)
				}
			})
		}

		function $(a, l) {
			for (var m = "", F = 0; !(F >= l / 2); ++F) {
				var N = o()[a + F * 2 >> 1];
				if (N == 0) break;
				m += String.fromCharCode(N)
			}
			return m
		}

		function D(a, l, m) {
			if (m === void 0 && (m = 2147483647), m < 2) return 0;
			m -= 2;
			for (var F = l, N = m < a.length * 2 ? m / 2 : a.length, X = 0; X < N; ++X) {
				var ne = a.charCodeAt(X);
				o()[l >> 1] = ne, l += 2
			}
			return o()[l >> 1] = 0, l - F
		}

		function V(a) {
			return a.length * 2
		}

		function B(a, l) {
			for (var m = 0, F = ""; !(m >= l / 4);) {
				var N = p()[a + m * 4 >> 2];
				if (N == 0) break;
				if (++m, N >= 65536) {
					var X = N - 65536;
					F += String.fromCharCode(55296 | X >> 10, 56320 | X & 1023)
				} else F += String.fromCharCode(N)
			}
			return F
		}

		function g(a, l, m) {
			if (m === void 0 && (m = 2147483647), m < 4) return 0;
			for (var F = l, N = F + m - 4, X = 0; X < a.length; ++X) {
				var ne = a.charCodeAt(X);
				if (ne >= 55296 && ne <= 57343) {
					var ee = a.charCodeAt(++X);
					ne = 65536 + ((ne & 1023) << 10) | ee & 1023
				}
				if (p()[l >> 2] = ne, l += 4, l + 4 > N) break
			}
			return p()[l >> 2] = 0, l - F
		}

		function T(a) {
			for (var l = 0, m = 0; m < a.length; ++m) {
				var F = a.charCodeAt(m);
				F >= 55296 && F <= 57343 && ++m, l += 4
			}
			return l
		}

		function L(a, l, m) {
			m = Pr(m);
			var F, N, X, ne, ee;
			l === 2 ? (F = $, N = D, ne = V, X = () => s(), ee = 1) : l === 4 && (F = B, N = g, ne = T, X = () => k(), ee = 2), qr(a, {
				name: m,
				fromWireType: function(ve) {
					for (var We = k()[ve >> 2], nr = X(), Ke, rr = ve + 4, Sn = 0; Sn <= We; ++Sn) {
						var Dn = ve + 4 + Sn * l;
						if (Sn == We || nr[Dn >> ee] == 0) {
							var _t = Dn - rr,
								jn = F(rr, _t);
							Ke === void 0 ? Ke = jn : (Ke += "\0", Ke += jn), rr = Dn + l
						}
					}
					return Ct(ve), Ke
				},
				toWireType: function(ve, We) {
					typeof We != "string" && ar("Cannot pass non-string to C++ string type " + m);
					var nr = ne(We),
						Ke = Mi(4 + nr + l);
					return k()[Ke >> 2] = nr >> ee, N(We, Ke + 4, nr + l), ve !== null && ve.push(Ct, Ke), Ke
				},
				argPackAdvance: 8,
				readValueFromPointer: hn,
				destructorFunction: function(ve) {
					Ct(ve)
				}
			})
		}

		function re(a, l, m, F, N, X) {
			Cn[a] = {
				name: Pr(l),
				rawConstructor: J(m, F),
				rawDestructor: J(N, X),
				fields: []
			}
		}

		function le(a, l, m, F, N, X, ne, ee, ve, We) {
			Cn[a].fields.push({
				fieldName: Pr(l),
				getterReturnType: m,
				getter: J(F, N),
				getterContext: X,
				setterArgumentType: ne,
				setter: J(ee, ve),
				setterContext: We
			})
		}

		function pe(a, l) {
			l = Pr(l), qr(a, {
				isVoid: !0,
				name: l,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(m, F) {}
			})
		}

		function A() {
			if (!pn()) try {
				Te ? ki(Ne) : Ur(Ne)
			} catch (a) {
				lr(a)
			}
		}

		function S(a) {
			if (!Be) try {
				a(), A()
			} catch (l) {
				lr(l)
			}
		}

		function M(a) {
			if (typeof Atomics.waitAsync == "function") {
				var l = Atomics.waitAsync(p(), a >> 2, a);
				l.value.then(ie);
				var m = a + 128;
				Atomics.store(p(), m >> 2, 1)
			}
		}
		f.__emscripten_thread_mailbox_await = M;

		function ie() {
			var a = yi();
			a && (M(a), S(() => Ji()))
		}
		f.checkMailbox = ie;

		function w(a, l, m) {
			if (a == l) setTimeout(() => ie());
			else if (Te) postMessage({
				targetThread: a,
				cmd: "checkMailbox"
			});
			else {
				var F = we.pthreads[a];
				if (!F) return;
				F.postMessage({
					cmd: "checkMailbox"
				})
			}
		}

		function E(a, l, m) {
			return -1
		}
		var j = {};

		function Q(a) {
			var l = j[a];
			return l === void 0 ? Pr(a) : l
		}

		function ue() {
			if (typeof globalThis == "object") return globalThis;

			function a(l) {
				l.$$$embind_global$$$ = l;
				var m = typeof $$$embind_global$$$ == "object" && l.$$$embind_global$$$ == l;
				return m || delete l.$$$embind_global$$$, m
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && a(global) ? $$$embind_global$$$ = global : typeof self == "object" && a(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function y(a) {
			return a === 0 ? Tn.toHandle(ue()) : (a = Q(a), Tn.toHandle(ue()[a]))
		}

		function R(a) {
			a > 4 && (Vr[a].refcount += 1)
		}

		function c(a, l) {
			var m = jr[a];
			return m === void 0 && ar(l + " has unknown type " + be(a)), m
		}

		function h(a) {
			var l = new Array(a + 1);
			return function(m, F, N) {
				l[0] = m;
				for (var X = 0; X < a; ++X) {
					var ne = c(k()[F + X * 4 >> 2], "parameter " + X);
					l[X + 1] = ne.readValueFromPointer(N), N += ne.argPackAdvance
				}
				var ee = new(m.bind.apply(m, l));
				return Tn.toHandle(ee)
			}
		}
		var b = {};

		function W(a, l, m, F) {
			a = Tn.toValue(a);
			var N = b[l];
			return N || (N = h(l), b[l] = N), N(a, m, F)
		}

		function H() {
			Or("")
		}

		function Y() {}

		function fe() {
			dn += 1
		}

		function he() {
			throw fe(), "unwind"
		}
		var ye;
		ye = () => performance.timeOrigin + performance.now();

		function Oe(a, l, m) {
			t().copyWithin(a, l, l + m)
		}

		function ir() {
			return navigator.hardwareConcurrency
		}

		function ur(a) {
			var l = ro(),
				m = a();
			return Ri(l), m
		}

		function Xe(a, l) {
			var m = arguments.length - 2,
				F = arguments;
			return ur(() => {
				for (var N = m, X = Pi(N * 8), ne = X >> 3, ee = 0; ee < m; ee++) {
					var ve = F[2 + ee];
					K()[ne + ee] = ve
				}
				return Yt(a, N, X, l)
			})
		}
		var He = [];

		function Kn(a, l, m) {
			He.length = l;
			for (var F = m >> 3, N = 0; N < l; N++) He[N] = K()[F + N];
			var X = Wa[a];
			return X.apply(null, He)
		}

		function bt() {
			return 2147483648
		}

		function Tt(a) {
			var l = ke.buffer;
			try {
				return ke.grow(a - l.byteLength + 65535 >>> 16), or(), 1
			} catch {}
		}

		function Wt(a) {
			var l = t().length;
			if (a = a >>> 0, a <= l) return !1;
			var m = bt();
			if (a > m) return !1;
			let F = (ve, We) => ve + (We - ve % We) % We;
			for (var N = 1; N <= 4; N *= 2) {
				var X = l * (1 + .2 / N);
				X = Math.min(X, a + 100663296);
				var ne = Math.min(m, F(Math.max(a, X), 65536)),
					ee = Tt(ne);
				if (ee) return !0
			}
			return !1
		}
		var Ie = {};

		function gr() {
			return Qe || "./this.program"
		}

		function yn() {
			if (!yn.strings) {
				var a = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
					l = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: a,
						_: gr()
					};
				for (var m in Ie) Ie[m] === void 0 ? delete l[m] : l[m] = Ie[m];
				var F = [];
				for (var m in l) F.push(m + "=" + l[m]);
				yn.strings = F
			}
			return yn.strings
		}

		function gt(a, l, m) {
			for (var F = 0; F < a.length; ++F) r()[l++ >> 0] = a.charCodeAt(F);
			r()[l >> 0] = 0
		}

		function ni(a, l) {
			if (Te) return Xe(5, 1, a, l);
			var m = 0;
			return yn().forEach(function(F, N) {
				var X = l + m;
				k()[a + N * 4 >> 2] = X, gt(F, X), m += F.length + 1
			}), 0
		}

		function ji(a, l) {
			if (Te) return Xe(6, 1, a, l);
			var m = yn();
			k()[a >> 2] = m.length;
			var F = 0;
			return m.forEach(function(N) {
				F += N.length + 1
			}), k()[l >> 2] = F, 0
		}

		function Co(a) {
			return Te ? Xe(7, 1, a) : 52
		}

		function So(a, l, m, F) {
			return Te ? Xe(8, 1, a, l, m, F) : 52
		}

		function ko(a, l, m, F, N) {
			return Te ? Xe(9, 1, a, l, m, F, N) : 70
		}
		var ka = [null, [],
			[]
		];

		function Ra(a, l) {
			var m = ka[a];
			l === 0 || l === 10 ? ((a === 1 ? Ve : $e)(Pe(m, 0)), m.length = 0) : m.push(l)
		}

		function qn(a, l, m, F) {
			if (Te) return Xe(10, 1, a, l, m, F);
			for (var N = 0, X = 0; X < m; X++) {
				var ne = k()[l >> 2],
					ee = k()[l + 4 >> 2];
				l += 8;
				for (var ve = 0; ve < ee; ve++) Ra(a, t()[ne + ve]);
				N += ee
			}
			return k()[F >> 2] = N, 0
		}

		function _i(a) {
			return a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)
		}

		function Pa(a, l) {
			for (var m = 0, F = 0; F <= l; m += a[F++]);
			return m
		}
		var Ro = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			Xi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		function Go(a, l) {
			for (var m = new Date(a.getTime()); l > 0;) {
				var F = _i(m.getFullYear()),
					N = m.getMonth(),
					X = (F ? Ro : Xi)[N];
				if (l > X - m.getDate()) l -= X - m.getDate() + 1, m.setDate(1), N < 11 ? m.setMonth(N + 1) : (m.setMonth(0), m.setFullYear(m.getFullYear() + 1));
				else return m.setDate(m.getDate() + l), m
			}
			return m
		}

		function Qo(a, l, m) {
			var F = tr(a) + 1,
				N = new Array(F);
			return Ge(a, N, 0, N.length), N
		}

		function Ko(a, l) {
			r().set(a, l)
		}

		function Fa(a, l, m, F) {
			var N = p()[F + 40 >> 2],
				X = {
					tm_sec: p()[F >> 2],
					tm_min: p()[F + 4 >> 2],
					tm_hour: p()[F + 8 >> 2],
					tm_mday: p()[F + 12 >> 2],
					tm_mon: p()[F + 16 >> 2],
					tm_year: p()[F + 20 >> 2],
					tm_wday: p()[F + 24 >> 2],
					tm_yday: p()[F + 28 >> 2],
					tm_isdst: p()[F + 32 >> 2],
					tm_gmtoff: p()[F + 36 >> 2],
					tm_zone: N ? ze(N) : ""
				},
				ne = ze(m),
				ee = {
					"%c": "%a %b %d %H:%M:%S %Y",
					"%D": "%m/%d/%y",
					"%F": "%Y-%m-%d",
					"%h": "%b",
					"%r": "%I:%M:%S %p",
					"%R": "%H:%M",
					"%T": "%H:%M:%S",
					"%x": "%m/%d/%y",
					"%X": "%H:%M:%S",
					"%Ec": "%c",
					"%EC": "%C",
					"%Ex": "%m/%d/%y",
					"%EX": "%H:%M:%S",
					"%Ey": "%y",
					"%EY": "%Y",
					"%Od": "%d",
					"%Oe": "%e",
					"%OH": "%H",
					"%OI": "%I",
					"%Om": "%m",
					"%OM": "%M",
					"%OS": "%S",
					"%Ou": "%u",
					"%OU": "%U",
					"%OV": "%V",
					"%Ow": "%w",
					"%OW": "%W",
					"%Oy": "%y"
				};
			for (var ve in ee) ne = ne.replace(new RegExp(ve, "g"), ee[ve]);
			var We = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				nr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			function Ke(se, De, Nr) {
				for (var rn = typeof se == "number" ? se.toString() : se || ""; rn.length < De;) rn = Nr[0] + rn;
				return rn
			}

			function rr(se, De) {
				return Ke(se, De, "0")
			}

			function Sn(se, De) {
				function Nr(ii) {
					return ii < 0 ? -1 : ii > 0 ? 1 : 0
				}
				var rn;
				return (rn = Nr(se.getFullYear() - De.getFullYear())) === 0 && (rn = Nr(se.getMonth() - De.getMonth())) === 0 && (rn = Nr(se.getDate() - De.getDate())), rn
			}

			function Dn(se) {
				switch (se.getDay()) {
					case 0:
						return new Date(se.getFullYear() - 1, 11, 29);
					case 1:
						return se;
					case 2:
						return new Date(se.getFullYear(), 0, 3);
					case 3:
						return new Date(se.getFullYear(), 0, 2);
					case 4:
						return new Date(se.getFullYear(), 0, 1);
					case 5:
						return new Date(se.getFullYear() - 1, 11, 31);
					case 6:
						return new Date(se.getFullYear() - 1, 11, 30)
				}
			}

			function _t(se) {
				var De = Go(new Date(se.tm_year + 1900, 0, 1), se.tm_yday),
					Nr = new Date(De.getFullYear(), 0, 4),
					rn = new Date(De.getFullYear() + 1, 0, 4),
					ii = Dn(Nr),
					ja = Dn(rn);
				return Sn(ii, De) <= 0 ? Sn(ja, De) <= 0 ? De.getFullYear() + 1 : De.getFullYear() : De.getFullYear() - 1
			}
			var jn = {
				"%a": function(se) {
					return We[se.tm_wday].substring(0, 3)
				},
				"%A": function(se) {
					return We[se.tm_wday]
				},
				"%b": function(se) {
					return nr[se.tm_mon].substring(0, 3)
				},
				"%B": function(se) {
					return nr[se.tm_mon]
				},
				"%C": function(se) {
					var De = se.tm_year + 1900;
					return rr(De / 100 | 0, 2)
				},
				"%d": function(se) {
					return rr(se.tm_mday, 2)
				},
				"%e": function(se) {
					return Ke(se.tm_mday, 2, " ")
				},
				"%g": function(se) {
					return _t(se).toString().substring(2)
				},
				"%G": function(se) {
					return _t(se)
				},
				"%H": function(se) {
					return rr(se.tm_hour, 2)
				},
				"%I": function(se) {
					var De = se.tm_hour;
					return De == 0 ? De = 12 : De > 12 && (De -= 12), rr(De, 2)
				},
				"%j": function(se) {
					return rr(se.tm_mday + Pa(_i(se.tm_year + 1900) ? Ro : Xi, se.tm_mon - 1), 3)
				},
				"%m": function(se) {
					return rr(se.tm_mon + 1, 2)
				},
				"%M": function(se) {
					return rr(se.tm_min, 2)
				},
				"%n": function() {
					return `
`
				},
				"%p": function(se) {
					return se.tm_hour >= 0 && se.tm_hour < 12 ? "AM" : "PM"
				},
				"%S": function(se) {
					return rr(se.tm_sec, 2)
				},
				"%t": function() {
					return "	"
				},
				"%u": function(se) {
					return se.tm_wday || 7
				},
				"%U": function(se) {
					var De = se.tm_yday + 7 - se.tm_wday;
					return rr(Math.floor(De / 7), 2)
				},
				"%V": function(se) {
					var De = Math.floor((se.tm_yday + 7 - (se.tm_wday + 6) % 7) / 7);
					if ((se.tm_wday + 371 - se.tm_yday - 2) % 7 <= 2 && De++, De) {
						if (De == 53) {
							var rn = (se.tm_wday + 371 - se.tm_yday) % 7;
							rn != 4 && (rn != 3 || !_i(se.tm_year)) && (De = 1)
						}
					} else {
						De = 52;
						var Nr = (se.tm_wday + 7 - se.tm_yday - 1) % 7;
						(Nr == 4 || Nr == 5 && _i(se.tm_year % 400 - 1)) && De++
					}
					return rr(De, 2)
				},
				"%w": function(se) {
					return se.tm_wday
				},
				"%W": function(se) {
					var De = se.tm_yday + 7 - (se.tm_wday + 6) % 7;
					return rr(Math.floor(De / 7), 2)
				},
				"%y": function(se) {
					return (se.tm_year + 1900).toString().substring(2)
				},
				"%Y": function(se) {
					return se.tm_year + 1900
				},
				"%z": function(se) {
					var De = se.tm_gmtoff,
						Nr = De >= 0;
					return De = Math.abs(De) / 60, De = De / 60 * 100 + De % 60, (Nr ? "+" : "-") + ("0000" + De).slice(-4)
				},
				"%Z": function(se) {
					return se.tm_zone
				},
				"%%": function() {
					return "%"
				}
			};
			ne = ne.replace(/%%/g, "\0\0");
			for (var ve in jn) ne.includes(ve) && (ne = ne.replace(new RegExp(ve, "g"), jn[ve](X)));
			ne = ne.replace(/\0\0/g, "%");
			var kt = Qo(ne);
			return kt.length > l ? 0 : (Ko(kt, a), kt.length - 1)
		}

		function $a(a, l, m, F, N) {
			return Fa(a, l, m, F)
		}

		function qo(a) {
			return p()[Po() >> 2] = a, a
		}

		function Oa(a) {
			return a ? (qo(52), -1) : 0
		}
		we.init(), Un = f.InternalError = Wn(Error, "InternalError"), dt(), tt = f.BindingError = Wn(Error, "BindingError"), at(), ge = f.UnboundTypeError = Wn(Error, "UnboundTypeError");
		var Wa = [null, wr, Re, un, Xn, ni, ji, Co, So, ko, qn],
			Ua = {
				l: Ln,
				G: Hn,
				i: Gr,
				J: un,
				K: Xn,
				r: ct,
				t: zn,
				N: sn,
				M: mt,
				m: ut,
				q: P,
				d: u,
				c: v,
				n: C,
				h: L,
				C: re,
				e: le,
				O: pe,
				z: w,
				E,
				F: M,
				g: Yn,
				Q: y,
				p: R,
				o: W,
				b: H,
				j: Y,
				L: he,
				f: ye,
				B: Oe,
				u: ir,
				D: Kn,
				y: Wt,
				w: ni,
				x: ji,
				A: Ur,
				k: Co,
				I: So,
				s: ko,
				H: qn,
				a: ke || f.wasmMemory,
				v: $a,
				P: Oa
			};
		on();
		var Mi = function() {
				return (Mi = f.asm.S).apply(null, arguments)
			},
			Ct = function() {
				return (Ct = f.asm.T).apply(null, arguments)
			};
		f.__emscripten_tls_init = function() {
			return (f.__emscripten_tls_init = f.asm.U).apply(null, arguments)
		};
		var yi = f._pthread_self = function() {
				return (yi = f._pthread_self = f.asm.V).apply(null, arguments)
			},
			Zi = f.___getTypeName = function() {
				return (Zi = f.___getTypeName = f.asm.W).apply(null, arguments)
			};
		f.__embind_initialize_bindings = function() {
			return (f.__embind_initialize_bindings = f.asm.X).apply(null, arguments)
		};
		var Po = function() {
				return (Po = f.asm.Y).apply(null, arguments)
			},
			Fo = f.__emscripten_thread_init = function() {
				return (Fo = f.__emscripten_thread_init = f.asm.Z).apply(null, arguments)
			};
		f.__emscripten_thread_crashed = function() {
			return (f.__emscripten_thread_crashed = f.asm._).apply(null, arguments)
		};
		var Yt = function() {
				return (Yt = f.asm.$).apply(null, arguments)
			},
			St = function() {
				return (St = f.asm.ba).apply(null, arguments)
			},
			ki = f.__emscripten_thread_exit = function() {
				return (ki = f.__emscripten_thread_exit = f.asm.ca).apply(null, arguments)
			},
			Ji = f.__emscripten_check_mailbox = function() {
				return (Ji = f.__emscripten_check_mailbox = f.asm.da).apply(null, arguments)
			},
			eo = function() {
				return (eo = f.asm.ea).apply(null, arguments)
			},
			ro = function() {
				return (ro = f.asm.fa).apply(null, arguments)
			},
			Ri = function() {
				return (Ri = f.asm.ga).apply(null, arguments)
			},
			Pi = function() {
				return (Pi = f.asm.ha).apply(null, arguments)
			},
			no = function() {
				return (no = f.asm.ia).apply(null, arguments)
			};
		f.dynCall_jiji = function() {
			return (f.dynCall_jiji = f.asm.ja).apply(null, arguments)
		}, f.dynCall_iiji = function() {
			return (f.dynCall_iiji = f.asm.ka).apply(null, arguments)
		}, f.dynCall_viijii = function() {
			return (f.dynCall_viijii = f.asm.la).apply(null, arguments)
		}, f.dynCall_iiiiij = function() {
			return (f.dynCall_iiiiij = f.asm.ma).apply(null, arguments)
		}, f.dynCall_iiiiijj = function() {
			return (f.dynCall_iiiiijj = f.asm.na).apply(null, arguments)
		}, f.dynCall_iiiiiijj = function() {
			return (f.dynCall_iiiiiijj = f.asm.oa).apply(null, arguments)
		}, f.keepRuntimeAlive = pn, f.wasmMemory = ke, f.ExitStatus = br, f.PThread = we;
		var ti;
		cr = function a() {
			ti || xi(), ti || (cr = a)
		};

		function xi() {
			if (Ar > 0) return;
			if (Te) {
				te(f), Ir(), startWorker(f);
				return
			}
			if (Xr(), Ar > 0) return;

			function a() {
				ti || (ti = !0, f.calledRun = !0, !Be && (Ir(), te(f), f.onRuntimeInitialized && f.onRuntimeInitialized(), Mn()))
			}
			f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					f.setStatus("")
				}, 1), a()
			}, 1)) : a()
		}
		if (f.preInit)
			for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0;) f.preInit.pop()();
		return xi(), f.ready
	}
})();
const ry = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: ey
}, Symbol.toStringTag, {
	value: "Module"
}));
var ny = (() => {
	var e = import.meta.url;
	return function(f = {}) {
		function r() {
			return ke.buffer != Er.buffer && or(), Er
		}

		function t() {
			return ke.buffer != Er.buffer && or(), fn
		}

		function o() {
			return ke.buffer != Er.buffer && or(), nn
		}

		function s() {
			return ke.buffer != Er.buffer && or(), Ze
		}

		function p() {
			return ke.buffer != Er.buffer && or(), Mr
		}

		function k() {
			return ke.buffer != Er.buffer && or(), tn
		}

		function U() {
			return ke.buffer != Er.buffer && or(), wn
		}

		function K() {
			return ke.buffer != Er.buffer && or(), On
		}
		var f = typeof f < "u" ? f : {},
			te, ae;
		f.ready = new Promise(function(a, l) {
			te = a, ae = l
		}), globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0 && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(l, m, F) {
				this.data = l, this.width = m, this.height = F
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), self.location === void 0 && (self.location = {
			href: ""
		}));
		var Ce = Object.assign({}, f),
			Qe = "./this.program",
			Z = (a, l) => {
				throw l
			},
			G = typeof window == "object",
			q = typeof importScripts == "function",
			Ee = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string",
			Te = f.ENVIRONMENT_IS_PTHREAD || !1,
			Ue = "";

		function je(a) {
			return f.locateFile ? f.locateFile(a, Ue) : Ue + a
		}
		var Ae;
		(G || q) && (q ? Ue = self.location.href : typeof document < "u" && document.currentScript && (Ue = document.currentScript.src), e && (Ue = e), Ue.indexOf("blob:") !== 0 ? Ue = Ue.substr(0, Ue.replace(/[?#].*/, "").lastIndexOf("/") + 1) : Ue = "", q && (Ae = a => {
			var l = new XMLHttpRequest;
			return l.open("GET", a, !1), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response)
		}));
		var Ve = f.print || console.log.bind(console),
			$e = f.printErr || console.warn.bind(console);
		Object.assign(f, Ce), Ce = null, f.arguments && f.arguments, f.thisProgram && (Qe = f.thisProgram), f.quit && (Z = f.quit);
		var Me;
		f.wasmBinary && (Me = f.wasmBinary);
		var xe = f.noExitRuntime || !0;
		typeof WebAssembly != "object" && Or("no native wasm support detected");
		var ke, sr, Be = !1,
			Ne;

		function zr(a, l) {
			a || Or(l)
		}

		function Pe(a, l, m) {
			for (var F = l + m, N = ""; !(l >= F);) {
				var X = a[l++];
				if (!X) return N;
				if (!(X & 128)) {
					N += String.fromCharCode(X);
					continue
				}
				var ne = a[l++] & 63;
				if ((X & 224) == 192) {
					N += String.fromCharCode((X & 31) << 6 | ne);
					continue
				}
				var ee = a[l++] & 63;
				if ((X & 240) == 224 ? X = (X & 15) << 12 | ne << 6 | ee : X = (X & 7) << 18 | ne << 12 | ee << 6 | a[l++] & 63, X < 65536) N += String.fromCharCode(X);
				else {
					var ve = X - 65536;
					N += String.fromCharCode(55296 | ve >> 10, 56320 | ve & 1023)
				}
			}
			return N
		}

		function ze(a, l) {
			return a ? Pe(t(), a, l) : ""
		}

		function Ge(a, l, m, F) {
			if (!(F > 0)) return 0;
			for (var N = m, X = m + F - 1, ne = 0; ne < a.length; ++ne) {
				var ee = a.charCodeAt(ne);
				if (ee >= 55296 && ee <= 57343) {
					var ve = a.charCodeAt(++ne);
					ee = 65536 + ((ee & 1023) << 10) | ve & 1023
				}
				if (ee <= 127) {
					if (m >= X) break;
					l[m++] = ee
				} else if (ee <= 2047) {
					if (m + 1 >= X) break;
					l[m++] = 192 | ee >> 6, l[m++] = 128 | ee & 63
				} else if (ee <= 65535) {
					if (m + 2 >= X) break;
					l[m++] = 224 | ee >> 12, l[m++] = 128 | ee >> 6 & 63, l[m++] = 128 | ee & 63
				} else {
					if (m + 3 >= X) break;
					l[m++] = 240 | ee >> 18, l[m++] = 128 | ee >> 12 & 63, l[m++] = 128 | ee >> 6 & 63, l[m++] = 128 | ee & 63
				}
			}
			return l[m] = 0, m - N
		}

		function qe(a, l, m) {
			return Ge(a, t(), l, m)
		}

		function tr(a) {
			for (var l = 0, m = 0; m < a.length; ++m) {
				var F = a.charCodeAt(m);
				F <= 127 ? l++ : F <= 2047 ? l += 2 : F >= 55296 && F <= 57343 ? (l += 4, ++m) : l += 3
			}
			return l
		}
		var Er, fn, nn, Ze, Mr, tn, wn, On;

		function or() {
			var a = ke.buffer;
			f.HEAP8 = Er = new Int8Array(a), f.HEAP16 = nn = new Int16Array(a), f.HEAP32 = Mr = new Int32Array(a), f.HEAPU8 = fn = new Uint8Array(a), f.HEAPU16 = Ze = new Uint16Array(a), f.HEAPU32 = tn = new Uint32Array(a), f.HEAPF32 = wn = new Float32Array(a), f.HEAPF64 = On = new Float64Array(a)
		}
		var yr = f.INITIAL_MEMORY || 16777216;
		if (zr(yr >= 65536, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + yr + "! (STACK_SIZE=65536)"), Te) ke = f.wasmMemory;
		else if (f.wasmMemory) ke = f.wasmMemory;
		else if (ke = new WebAssembly.Memory({
				initial: yr / 65536,
				maximum: 2147483648 / 65536,
				shared: !0
			}), !(ke.buffer instanceof SharedArrayBuffer)) throw $e("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), Ee && $e("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"), Error("bad memory");
		or(), yr = ke.buffer.byteLength;
		var Fr, cn = [],
			En = [],
			$r = [],
			dn = 0;

		function pn() {
			return xe || dn > 0
		}

		function Xr() {
			if (f.preRun)
				for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length;) Dr(f.preRun.shift());
			Rn(cn)
		}

		function Ir() {
			Te || Rn(En)
		}

		function Mn() {
			if (!Te) {
				if (f.postRun)
					for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length;) bn(f.postRun.shift());
				Rn($r)
			}
		}

		function Dr(a) {
			cn.unshift(a)
		}

		function Tr(a) {
			En.unshift(a)
		}

		function bn(a) {
			$r.unshift(a)
		}
		var Ar = 0,
			cr = null;

		function en(a) {
			Ar++, f.monitorRunDependencies && f.monitorRunDependencies(Ar)
		}

		function Qr(a) {
			if (Ar--, f.monitorRunDependencies && f.monitorRunDependencies(Ar), Ar == 0 && cr) {
				var l = cr;
				cr = null, l()
			}
		}

		function Or(a) {
			f.onAbort && f.onAbort(a), a = "Aborted(" + a + ")", $e(a), Be = !0, Ne = 1, a += ". Build with -sASSERTIONS for more info.";
			var l = new WebAssembly.RuntimeError(a);
			throw ae(l), l
		}
		var Wr = "data:application/octet-stream;base64,";

		function Zr(a) {
			return a.startsWith(Wr)
		}
		var Cr;
		f.locateFile ? (Cr = "jxl_enc_mt.wasm", Zr(Cr) || (Cr = je(Cr))) : Cr = new URL(location.href +"assets/jxl_enc_mt-DeBV9omF.wasm", import.meta.url).href;

		function kr(a) {
			try {
				if (a == Cr && Me) return new Uint8Array(Me);
				if (Ae) return Ae(a);
				throw "both async and sync fetching of the wasm failed"
			} catch (l) {
				Or(l)
			}
		}

		function Rr(a) {
			return !Me && (G || q) && typeof fetch == "function" ? fetch(a, {
				credentials: "same-origin"
			}).then(function(l) {
				if (!l.ok) throw "failed to load wasm binary file at '" + a + "'";
				return l.arrayBuffer()
			}).catch(function() {
				return kr(a)
			}) : Promise.resolve().then(function() {
				return kr(a)
			})
		}

		function Jr(a, l, m) {
			return Rr(a).then(function(F) {
				return WebAssembly.instantiate(F, l)
			}).then(function(F) {
				return F
			}).then(m, function(F) {
				$e("failed to asynchronously prepare wasm: " + F), Or(F)
			})
		}

		function pr(a, l, m, F) {
			return !a && typeof WebAssembly.instantiateStreaming == "function" && !Zr(l) && typeof fetch == "function" ? fetch(l, {
				credentials: "same-origin"
			}).then(function(N) {
				var X = WebAssembly.instantiateStreaming(N, m);
				return X.then(F, function(ne) {
					return $e("wasm streaming compile failed: " + ne), $e("falling back to ArrayBuffer instantiation"), Jr(l, m, F)
				})
			}) : Jr(l, m, F)
		}

		function on() {
			var a = {
				a: Ua
			};

			function l(F, N) {
				var X = F.exports;
				return f.asm = X, Lr(f.asm.U), Fr = f.asm.aa, Tr(f.asm.R), sr = N, we.loadWasmModuleToAllWorkers(() => Qr()), X
			}
			en();

			function m(F) {
				l(F.instance, F.module)
			}
			if (f.instantiateWasm) try {
				return f.instantiateWasm(a, l)
			} catch (F) {
				$e("Module.instantiateWasm callback failed with error: " + F), ae(F)
			}
			return pr(Me, Cr, a, m).catch(ae), {}
		}

		function br(a) {
			this.name = "ExitStatus", this.message = "Program terminated with exit(" + a + ")", this.status = a
		}

		function xr(a) {
			a.terminate(), a.onmessage = l => {}
		}

		function Sr(a) {
			var l = we.pthreads[a];
			delete we.pthreads[a], xr(l), St(a), we.runningWorkers.splice(we.runningWorkers.indexOf(l), 1), l.pthread_ptr = 0
		}

		function Br(a) {
			var l = we.pthreads[a];
			l.postMessage({
				cmd: "cancel"
			})
		}

		function mr(a) {
			var l = we.pthreads[a];
			zr(l), we.returnWorkerToPool(l)
		}

		function Je(a) {
			var l = we.getNewWorker();
			if (!l) return 6;
			we.runningWorkers.push(l), we.pthreads[a.pthread_ptr] = l, l.pthread_ptr = a.pthread_ptr;
			var m = {
				cmd: "run",
				start_routine: a.startRoutine,
				arg: a.arg,
				pthread_ptr: a.pthread_ptr
			};
			return l.postMessage(m, a.transferList), 0
		}

		function wr(a) {
			if (Te) return Xe(1, 1, a);
			Ne = a, pn() || (we.terminateAllThreads(), f.onExit && f.onExit(a), Be = !0), Z(a, new br(a))
		}

		function hr(a, l) {
			if (Ne = a, Te) throw Re(a), "unwind";
			wr(a)
		}
		var Ur = hr;

		function lr(a) {
			if (a instanceof br || a == "unwind") return Ne;
			Z(1, a)
		}
		var we = {
			unusedWorkers: [],
			runningWorkers: [],
			tlsInitFunctions: [],
			pthreads: {},
			init: function() {
				Te ? we.initWorker() : we.initMainThread()
			},
			initMainThread: function() {
				for (var a = navigator.hardwareConcurrency; a--;) we.allocateUnusedWorker()
			},
			initWorker: function() {
				xe = !1
			},
			setExitStatus: function(a) {
				Ne = a
			},
			terminateAllThreads__deps: ["$terminateWorker"],
			terminateAllThreads: function() {
				for (var a of we.runningWorkers) xr(a);
				for (var a of we.unusedWorkers) xr(a);
				we.unusedWorkers = [], we.runningWorkers = [], we.pthreads = []
			},
			returnWorkerToPool: function(a) {
				var l = a.pthread_ptr;
				delete we.pthreads[l], we.unusedWorkers.push(a), we.runningWorkers.splice(we.runningWorkers.indexOf(a), 1), a.pthread_ptr = 0, St(l)
			},
			receiveObjectTransfer: function(a) {},
			threadInitTLS: function() {
				we.tlsInitFunctions.forEach(a => a())
			},
			loadWasmModuleToWorker: a => new Promise(l => {
				a.onmessage = X => {
					var ne = X.data,
						ee = ne.cmd;
					if (a.pthread_ptr && (we.currentProxiedOperationCallerThread = a.pthread_ptr), ne.targetThread && ne.targetThread != yi()) {
						var ve = we.pthreads[ne.targetThread];
						ve ? ve.postMessage(ne, ne.transferList) : $e('Internal error! Worker sent a message "' + ee + '" to target pthread ' + ne.targetThread + ", but that thread no longer exists!"), we.currentProxiedOperationCallerThread = void 0;
						return
					}
					ee === "checkMailbox" ? ie() : ee === "spawnThread" ? Je(ne) : ee === "cleanupThread" ? mr(ne.thread) : ee === "killThread" ? Sr(ne.thread) : ee === "cancelThread" ? Br(ne.thread) : ee === "loaded" ? (a.loaded = !0, l(a)) : ee === "print" ? Ve("Thread " + ne.threadId + ": " + ne.text) : ee === "printErr" ? $e("Thread " + ne.threadId + ": " + ne.text) : ee === "alert" ? alert("Thread " + ne.threadId + ": " + ne.text) : ne.target === "setimmediate" ? a.postMessage(ne) : ee === "callHandler" ? f[ne.handler](...ne.args) : ee && $e("worker sent an unknown command " + ee), we.currentProxiedOperationCallerThread = void 0
				}, a.onerror = X => {
					var ne = "worker sent an error!";
					throw $e(ne + " " + X.filename + ":" + X.lineno + ": " + X.message), X
				};
				var m = [],
					F = ["onExit", "onAbort", "print", "printErr"];
				for (var N of F) f.hasOwnProperty(N) && m.push(N);
				a.postMessage({
					cmd: "load",
					handlers: m,
					urlOrBlob: f.mainScriptUrlOrBlob,
					wasmMemory: ke,
					wasmModule: sr
				})
			}),
			loadWasmModuleToAllWorkers: function(a) {
				if (Te) return a();
				Promise.all(we.unusedWorkers.map(we.loadWasmModuleToWorker)).then(a)
			},
			allocateUnusedWorker: function() {
				var a;
				if (!f.locateFile) a = new Worker(new URL(location.href +"assets/jxl_enc_mt.worker-DdALdbfl.js", import.meta.url));
				else {
					var l = je("jxl_enc_mt.worker.js");
					a = new Worker(l)
				}
				we.unusedWorkers.push(a)
			},
			getNewWorker: function() {
				return we.unusedWorkers.length == 0 && (we.allocateUnusedWorker(), we.loadWasmModuleToWorker(we.unusedWorkers[0])), we.unusedWorkers.pop()
			}
		};
		f.PThread = we;

		function Rn(a) {
			for (; a.length > 0;) a.shift()(f)
		}

		function dr() {
			var a = yi(),
				l = p()[a + 52 >> 2],
				m = p()[a + 56 >> 2],
				F = l - m;
			eo(l, F), Ri(l)
		}
		f.establishStackSpace = dr;

		function Re(a) {
			if (Te) return Xe(2, 0, a);
			Ur(a)
		}
		var an = [];

		function Yr(a) {
			var l = an[a];
			return l || (a >= an.length && (an.length = a + 1), an[a] = l = Fr.get(a)), l
		}

		function vn(a, l) {
			var m = Yr(a)(l);
			pn() ? we.setExitStatus(m) : ki(m)
		}
		f.invokeEntryPoint = vn;

		function Lr(a) {
			we.tlsInitFunctions.push(a)
		}

		function Kr(a) {
			this.excPtr = a, this.ptr = a - 24, this.set_type = function(l) {
				k()[this.ptr + 4 >> 2] = l
			}, this.get_type = function() {
				return k()[this.ptr + 4 >> 2]
			}, this.set_destructor = function(l) {
				k()[this.ptr + 8 >> 2] = l
			}, this.get_destructor = function() {
				return k()[this.ptr + 8 >> 2]
			}, this.set_refcount = function(l) {
				p()[this.ptr >> 2] = l
			}, this.set_caught = function(l) {
				l = l ? 1 : 0, r()[this.ptr + 12 >> 0] = l
			}, this.get_caught = function() {
				return r()[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(l) {
				l = l ? 1 : 0, r()[this.ptr + 13 >> 0] = l
			}, this.get_rethrown = function() {
				return r()[this.ptr + 13 >> 0] != 0
			}, this.init = function(l, m) {
				this.set_adjusted_ptr(0), this.set_type(l), this.set_destructor(m), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				Atomics.add(p(), this.ptr + 0 >> 2, 1)
			}, this.release_ref = function() {
				var l = Atomics.sub(p(), this.ptr + 0 >> 2, 1);
				return l === 1
			}, this.set_adjusted_ptr = function(l) {
				k()[this.ptr + 16 >> 2] = l
			}, this.get_adjusted_ptr = function() {
				return k()[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var l = no(this.get_type());
				if (l) return k()[this.excPtr >> 2];
				var m = this.get_adjusted_ptr();
				return m !== 0 ? m : this.excPtr
			}
		}

		function Ln(a, l, m) {
			var F = new Kr(a);
			throw F.init(l, m), a
		}

		function Hn(a) {
			Fo(a, !q, 1, !G), we.threadInitTLS()
		}

		function Gr(a) {
			Te ? postMessage({
				cmd: "cleanupThread",
				thread: a
			}) : mr(a)
		}

		function un(a, l, m) {
			return Te ? Xe(3, 1, a, l, m) : 0
		}

		function Xn(a, l, m, F) {
			if (Te) return Xe(4, 1, a, l, m, F)
		}
		var Cn = {};

		function Zn(a) {
			for (; a.length;) {
				var l = a.pop(),
					m = a.pop();
				m(l)
			}
		}

		function hn(a) {
			return this.fromWireType(p()[a >> 2])
		}
		var mn = {},
			jr = {},
			Hr = {},
			Pn = 48,
			xn = 57;

		function Fn(a) {
			if (a === void 0) return "_unknown";
			a = a.replace(/[^a-zA-Z0-9_]/g, "$");
			var l = a.charCodeAt(0);
			return l >= Pn && l <= xn ? "_" + a : a
		}

		function In(a, l) {
			return a = Fn(a), {
				[a]: function() {
					return l.apply(this, arguments)
				}
			} [a]
		}

		function Wn(a, l) {
			var m = In(l, function(F) {
				this.name = l, this.message = F;
				var N = new Error(F).stack;
				N !== void 0 && (this.stack = this.toString() + `
` + N.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return m.prototype = Object.create(a.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, m
		}
		var Un = void 0;

		function Vn(a) {
			throw new Un(a)
		}

		function Jn(a, l, m) {
			a.forEach(function(ee) {
				Hr[ee] = l
			});

			function F(ee) {
				var ve = m(ee);
				ve.length !== a.length && Vn("Mismatched type converter count");
				for (var We = 0; We < a.length; ++We) qr(a[We], ve[We])
			}
			var N = new Array(l.length),
				X = [],
				ne = 0;
			l.forEach((ee, ve) => {
				jr.hasOwnProperty(ee) ? N[ve] = jr[ee] : (X.push(ee), mn.hasOwnProperty(ee) || (mn[ee] = []), mn[ee].push(() => {
					N[ve] = jr[ee], ++ne, ne === X.length && F(N)
				}))
			}), X.length === 0 && F(N)
		}

		function ct(a) {
			var l = Cn[a];
			delete Cn[a];
			var m = l.rawConstructor,
				F = l.rawDestructor,
				N = l.fields,
				X = N.map(ne => ne.getterReturnType).concat(N.map(ne => ne.setterArgumentType));
			Jn([a], X, ne => {
				var ee = {};
				return N.forEach((ve, We) => {
					var nr = ve.fieldName,
						Ke = ne[We],
						rr = ve.getter,
						Sn = ve.getterContext,
						Dn = ne[We + N.length],
						_t = ve.setter,
						jn = ve.setterContext;
					ee[nr] = {
						read: kt => Ke.fromWireType(rr(Sn, kt)),
						write: (kt, se) => {
							var De = [];
							_t(jn, kt, Dn.toWireType(De, se)), Zn(De)
						}
					}
				}), [{
					name: l.name,
					fromWireType: function(ve) {
						var We = {};
						for (var nr in ee) We[nr] = ee[nr].read(ve);
						return F(ve), We
					},
					toWireType: function(ve, We) {
						for (var nr in ee)
							if (!(nr in We)) throw new TypeError('Missing field:  "' + nr + '"');
						var Ke = m();
						for (nr in ee) ee[nr].write(Ke, We[nr]);
						return ve !== null && ve.push(F, Ke), Ke
					},
					argPackAdvance: 8,
					readValueFromPointer: hn,
					destructorFunction: F
				}]
			})
		}

		function zn(a, l, m, F, N) {}

		function Bn(a) {
			switch (a) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + a)
			}
		}

		function dt() {
			for (var a = new Array(256), l = 0; l < 256; ++l) a[l] = String.fromCharCode(l);
			et = a
		}
		var et = void 0;

		function Pr(a) {
			for (var l = "", m = a; t()[m];) l += et[t()[m++]];
			return l
		}
		var tt = void 0;

		function ar(a) {
			throw new tt(a)
		}

		function qr(a, l, m = {}) {
			if (!("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var F = l.name;
			if (a || ar('type "' + F + '" must have a positive integer typeid pointer'), jr.hasOwnProperty(a)) {
				if (m.ignoreDuplicateRegistrations) return;
				ar("Cannot register type '" + F + "' twice")
			}
			if (jr[a] = l, delete Hr[a], mn.hasOwnProperty(a)) {
				var N = mn[a];
				delete mn[a], N.forEach(X => X())
			}
		}

		function sn(a, l, m, F, N) {
			var X = Bn(m);
			l = Pr(l), qr(a, {
				name: l,
				fromWireType: function(ne) {
					return !!ne
				},
				toWireType: function(ne, ee) {
					return ee ? F : N
				},
				argPackAdvance: 8,
				readValueFromPointer: function(ne) {
					var ee;
					if (m === 1) ee = r();
					else if (m === 2) ee = o();
					else if (m === 4) ee = p();
					else throw new TypeError("Unknown boolean type size: " + l);
					return this.fromWireType(ee[ne >> X])
				},
				destructorFunction: null
			})
		}
		var gn = [],
			Vr = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function Yn(a) {
			a > 4 && --Vr[a].refcount === 0 && (Vr[a] = void 0, gn.push(a))
		}

		function _n() {
			for (var a = 0, l = 5; l < Vr.length; ++l) Vr[l] !== void 0 && ++a;
			return a
		}

		function rt() {
			for (var a = 5; a < Vr.length; ++a)
				if (Vr[a] !== void 0) return Vr[a];
			return null
		}

		function at() {
			f.count_emval_handles = _n, f.get_first_emval = rt
		}
		var Tn = {
			toValue: a => (a || ar("Cannot use deleted val. handle = " + a), Vr[a].value),
			toHandle: a => {
				switch (a) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var l = gn.length ? gn.pop() : Vr.length;
						return Vr[l] = {
							refcount: 1,
							value: a
						}, l
					}
				}
			}
		};

		function mt(a, l) {
			l = Pr(l), qr(a, {
				name: l,
				fromWireType: function(m) {
					var F = Tn.toValue(m);
					return Yn(m), F
				},
				toWireType: function(m, F) {
					return Tn.toHandle(F)
				},
				argPackAdvance: 8,
				readValueFromPointer: hn,
				destructorFunction: null
			})
		}

		function Gn(a, l) {
			switch (l) {
				case 2:
					return function(m) {
						return this.fromWireType(U()[m >> 2])
					};
				case 3:
					return function(m) {
						return this.fromWireType(K()[m >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + a)
			}
		}

		function ut(a, l, m) {
			var F = Bn(m);
			l = Pr(l), qr(a, {
				name: l,
				fromWireType: function(N) {
					return N
				},
				toWireType: function(N, X) {
					return X
				},
				argPackAdvance: 8,
				readValueFromPointer: Gn(l, F),
				destructorFunction: null
			})
		}

		function Qn(a, l, m, F, N, X) {
			var ne = l.length;
			ne < 2 && ar("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var ee = l[1] !== null && m !== null, ve = !1, We = 1; We < l.length; ++We)
				if (l[We] !== null && l[We].destructorFunction === void 0) {
					ve = !0;
					break
				} var nr = l[0].name !== "void",
				Ke = ne - 2,
				rr = new Array(Ke),
				Sn = [],
				Dn = [];
			return function() {
				arguments.length !== Ke && ar("function " + a + " called with " + arguments.length + " arguments, expected " + Ke + " args!"), Dn.length = 0;
				var _t;
				Sn.length = ee ? 2 : 1, Sn[0] = N, ee && (_t = l[1].toWireType(Dn, this), Sn[1] = _t);
				for (var jn = 0; jn < Ke; ++jn) rr[jn] = l[jn + 2].toWireType(Dn, arguments[jn]), Sn.push(rr[jn]);
				var kt = F.apply(null, Sn);

				function se(De) {
					if (ve) Zn(Dn);
					else
						for (var Nr = ee ? 1 : 2; Nr < l.length; Nr++) {
							var rn = Nr === 1 ? _t : rr[Nr - 2];
							l[Nr].destructorFunction !== null && l[Nr].destructorFunction(rn)
						}
					if (nr) return l[0].fromWireType(De)
				}
				return se(kt)
			}
		}

		function $n(a, l, m) {
			if (a[l].overloadTable === void 0) {
				var F = a[l];
				a[l] = function() {
					return a[l].overloadTable.hasOwnProperty(arguments.length) || ar("Function '" + m + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[l].overloadTable + ")!"), a[l].overloadTable[arguments.length].apply(this, arguments)
				}, a[l].overloadTable = [], a[l].overloadTable[F.argCount] = F
			}
		}

		function nt(a, l, m) {
			f.hasOwnProperty(a) ? ((m === void 0 || f[a].overloadTable !== void 0 && f[a].overloadTable[m] !== void 0) && ar("Cannot register public name '" + a + "' twice"), $n(f, a, a), f.hasOwnProperty(m) && ar("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), f[a].overloadTable[m] = l) : (f[a] = l, m !== void 0 && (f[a].numArguments = m))
		}

		function lt(a, l) {
			for (var m = [], F = 0; F < a; F++) m.push(k()[l + F * 4 >> 2]);
			return m
		}

		function it(a, l, m) {
			f.hasOwnProperty(a) || Vn("Replacing nonexistant public symbol"), f[a].overloadTable !== void 0 && m !== void 0 ? f[a].overloadTable[m] = l : (f[a] = l, f[a].argCount = m)
		}

		function pt(a, l, m) {
			var F = f["dynCall_" + a];
			return m && m.length ? F.apply(null, [l].concat(m)) : F.call(null, l)
		}

		function x(a, l, m) {
			if (a.includes("j")) return pt(a, l, m);
			var F = Yr(l).apply(null, m);
			return F
		}

		function I(a, l) {
			var m = [];
			return function() {
				return m.length = 0, Object.assign(m, arguments), x(a, l, m)
			}
		}

		function J(a, l) {
			a = Pr(a);

			function m() {
				return a.includes("j") ? I(a, l) : Yr(l)
			}
			var F = m();
			return typeof F != "function" && ar("unknown function pointer with signature " + a + ": " + l), F
		}
		var ge = void 0;

		function be(a) {
			var l = Zi(a),
				m = Pr(l);
			return Ct(l), m
		}

		function Fe(a, l) {
			var m = [],
				F = {};

			function N(X) {
				if (!F[X] && !jr[X]) {
					if (Hr[X]) {
						Hr[X].forEach(N);
						return
					}
					m.push(X), F[X] = !0
				}
			}
			throw l.forEach(N), new ge(a + ": " + m.map(be).join([", "]))
		}

		function P(a, l, m, F, N, X, ne) {
			var ee = lt(l, m);
			a = Pr(a), N = J(F, N), nt(a, function() {
				Fe("Cannot call " + a + " due to unbound types", ee)
			}, l - 1), Jn([], ee, function(ve) {
				var We = [ve[0], null].concat(ve.slice(1));
				return it(a, Qn(a, We, null, N, X), l - 1), []
			})
		}

		function i(a, l, m) {
			switch (l) {
				case 0:
					return m ? function(N) {
						return r()[N]
					} : function(N) {
						return t()[N]
					};
				case 1:
					return m ? function(N) {
						return o()[N >> 1]
					} : function(N) {
						return s()[N >> 1]
					};
				case 2:
					return m ? function(N) {
						return p()[N >> 2]
					} : function(N) {
						return k()[N >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + a)
			}
		}

		function u(a, l, m, F, N) {
			l = Pr(l);
			var X = Bn(m),
				ne = Ke => Ke;
			if (F === 0) {
				var ee = 32 - 8 * m;
				ne = Ke => Ke << ee >>> ee
			}
			var ve = l.includes("unsigned"),
				We = (Ke, rr) => {},
				nr;
			ve ? nr = function(Ke, rr) {
				return We(rr, this.name), rr >>> 0
			} : nr = function(Ke, rr) {
				return We(rr, this.name), rr
			}, qr(a, {
				name: l,
				fromWireType: ne,
				toWireType: nr,
				argPackAdvance: 8,
				readValueFromPointer: i(l, X, F !== 0),
				destructorFunction: null
			})
		}

		function v(a, l, m) {
			var F = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				N = F[l];

			function X(ne) {
				ne = ne >> 2;
				var ee = k(),
					ve = ee[ne],
					We = ee[ne + 1];
				return new N(ee.buffer, We, ve)
			}
			m = Pr(m), qr(a, {
				name: m,
				fromWireType: X,
				argPackAdvance: 8,
				readValueFromPointer: X
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function C(a, l) {
			l = Pr(l);
			var m = l === "std::string";
			qr(a, {
				name: l,
				fromWireType: function(F) {
					var N = k()[F >> 2],
						X = F + 4,
						ne;
					if (m)
						for (var ee = X, ve = 0; ve <= N; ++ve) {
							var We = X + ve;
							if (ve == N || t()[We] == 0) {
								var nr = We - ee,
									Ke = ze(ee, nr);
								ne === void 0 ? ne = Ke : (ne += "\0", ne += Ke), ee = We + 1
							}
						} else {
							for (var rr = new Array(N), ve = 0; ve < N; ++ve) rr[ve] = String.fromCharCode(t()[X + ve]);
							ne = rr.join("")
						}
					return Ct(F), ne
				},
				toWireType: function(F, N) {
					N instanceof ArrayBuffer && (N = new Uint8Array(N));
					var X, ne = typeof N == "string";
					ne || N instanceof Uint8Array || N instanceof Uint8ClampedArray || N instanceof Int8Array || ar("Cannot pass non-string to std::string"), m && ne ? X = tr(N) : X = N.length;
					var ee = Mi(4 + X + 1),
						ve = ee + 4;
					if (k()[ee >> 2] = X, m && ne) qe(N, ve, X + 1);
					else if (ne)
						for (var We = 0; We < X; ++We) {
							var nr = N.charCodeAt(We);
							nr > 255 && (Ct(ve), ar("String has UTF-16 code units that do not fit in 8 bits")), t()[ve + We] = nr
						} else
							for (var We = 0; We < X; ++We) t()[ve + We] = N[We];
					return F !== null && F.push(Ct, ee), ee
				},
				argPackAdvance: 8,
				readValueFromPointer: hn,
				destructorFunction: function(F) {
					Ct(F)
				}
			})
		}

		function $(a, l) {
			for (var m = "", F = 0; !(F >= l / 2); ++F) {
				var N = o()[a + F * 2 >> 1];
				if (N == 0) break;
				m += String.fromCharCode(N)
			}
			return m
		}

		function D(a, l, m) {
			if (m === void 0 && (m = 2147483647), m < 2) return 0;
			m -= 2;
			for (var F = l, N = m < a.length * 2 ? m / 2 : a.length, X = 0; X < N; ++X) {
				var ne = a.charCodeAt(X);
				o()[l >> 1] = ne, l += 2
			}
			return o()[l >> 1] = 0, l - F
		}

		function V(a) {
			return a.length * 2
		}

		function B(a, l) {
			for (var m = 0, F = ""; !(m >= l / 4);) {
				var N = p()[a + m * 4 >> 2];
				if (N == 0) break;
				if (++m, N >= 65536) {
					var X = N - 65536;
					F += String.fromCharCode(55296 | X >> 10, 56320 | X & 1023)
				} else F += String.fromCharCode(N)
			}
			return F
		}

		function g(a, l, m) {
			if (m === void 0 && (m = 2147483647), m < 4) return 0;
			for (var F = l, N = F + m - 4, X = 0; X < a.length; ++X) {
				var ne = a.charCodeAt(X);
				if (ne >= 55296 && ne <= 57343) {
					var ee = a.charCodeAt(++X);
					ne = 65536 + ((ne & 1023) << 10) | ee & 1023
				}
				if (p()[l >> 2] = ne, l += 4, l + 4 > N) break
			}
			return p()[l >> 2] = 0, l - F
		}

		function T(a) {
			for (var l = 0, m = 0; m < a.length; ++m) {
				var F = a.charCodeAt(m);
				F >= 55296 && F <= 57343 && ++m, l += 4
			}
			return l
		}

		function L(a, l, m) {
			m = Pr(m);
			var F, N, X, ne, ee;
			l === 2 ? (F = $, N = D, ne = V, X = () => s(), ee = 1) : l === 4 && (F = B, N = g, ne = T, X = () => k(), ee = 2), qr(a, {
				name: m,
				fromWireType: function(ve) {
					for (var We = k()[ve >> 2], nr = X(), Ke, rr = ve + 4, Sn = 0; Sn <= We; ++Sn) {
						var Dn = ve + 4 + Sn * l;
						if (Sn == We || nr[Dn >> ee] == 0) {
							var _t = Dn - rr,
								jn = F(rr, _t);
							Ke === void 0 ? Ke = jn : (Ke += "\0", Ke += jn), rr = Dn + l
						}
					}
					return Ct(ve), Ke
				},
				toWireType: function(ve, We) {
					typeof We != "string" && ar("Cannot pass non-string to C++ string type " + m);
					var nr = ne(We),
						Ke = Mi(4 + nr + l);
					return k()[Ke >> 2] = nr >> ee, N(We, Ke + 4, nr + l), ve !== null && ve.push(Ct, Ke), Ke
				},
				argPackAdvance: 8,
				readValueFromPointer: hn,
				destructorFunction: function(ve) {
					Ct(ve)
				}
			})
		}

		function re(a, l, m, F, N, X) {
			Cn[a] = {
				name: Pr(l),
				rawConstructor: J(m, F),
				rawDestructor: J(N, X),
				fields: []
			}
		}

		function le(a, l, m, F, N, X, ne, ee, ve, We) {
			Cn[a].fields.push({
				fieldName: Pr(l),
				getterReturnType: m,
				getter: J(F, N),
				getterContext: X,
				setterArgumentType: ne,
				setter: J(ee, ve),
				setterContext: We
			})
		}

		function pe(a, l) {
			l = Pr(l), qr(a, {
				isVoid: !0,
				name: l,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(m, F) {}
			})
		}

		function A() {
			if (!pn()) try {
				Te ? ki(Ne) : Ur(Ne)
			} catch (a) {
				lr(a)
			}
		}

		function S(a) {
			if (!Be) try {
				a(), A()
			} catch (l) {
				lr(l)
			}
		}

		function M(a) {
			if (typeof Atomics.waitAsync == "function") {
				var l = Atomics.waitAsync(p(), a >> 2, a);
				l.value.then(ie);
				var m = a + 128;
				Atomics.store(p(), m >> 2, 1)
			}
		}
		f.__emscripten_thread_mailbox_await = M;

		function ie() {
			var a = yi();
			a && (M(a), S(() => Ji()))
		}
		f.checkMailbox = ie;

		function w(a, l, m) {
			if (a == l) setTimeout(() => ie());
			else if (Te) postMessage({
				targetThread: a,
				cmd: "checkMailbox"
			});
			else {
				var F = we.pthreads[a];
				if (!F) return;
				F.postMessage({
					cmd: "checkMailbox"
				})
			}
		}

		function E(a, l, m) {
			return -1
		}
		var j = {};

		function Q(a) {
			var l = j[a];
			return l === void 0 ? Pr(a) : l
		}

		function ue() {
			if (typeof globalThis == "object") return globalThis;

			function a(l) {
				l.$$$embind_global$$$ = l;
				var m = typeof $$$embind_global$$$ == "object" && l.$$$embind_global$$$ == l;
				return m || delete l.$$$embind_global$$$, m
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && a(global) ? $$$embind_global$$$ = global : typeof self == "object" && a(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function y(a) {
			return a === 0 ? Tn.toHandle(ue()) : (a = Q(a), Tn.toHandle(ue()[a]))
		}

		function R(a) {
			a > 4 && (Vr[a].refcount += 1)
		}

		function c(a, l) {
			var m = jr[a];
			return m === void 0 && ar(l + " has unknown type " + be(a)), m
		}

		function h(a) {
			var l = new Array(a + 1);
			return function(m, F, N) {
				l[0] = m;
				for (var X = 0; X < a; ++X) {
					var ne = c(k()[F + X * 4 >> 2], "parameter " + X);
					l[X + 1] = ne.readValueFromPointer(N), N += ne.argPackAdvance
				}
				var ee = new(m.bind.apply(m, l));
				return Tn.toHandle(ee)
			}
		}
		var b = {};

		function W(a, l, m, F) {
			a = Tn.toValue(a);
			var N = b[l];
			return N || (N = h(l), b[l] = N), N(a, m, F)
		}

		function H() {
			Or("")
		}

		function Y() {}

		function fe() {
			dn += 1
		}

		function he() {
			throw fe(), "unwind"
		}
		var ye;
		ye = () => performance.timeOrigin + performance.now();

		function Oe(a, l, m) {
			t().copyWithin(a, l, l + m)
		}

		function ir() {
			return navigator.hardwareConcurrency
		}

		function ur(a) {
			var l = ro(),
				m = a();
			return Ri(l), m
		}

		function Xe(a, l) {
			var m = arguments.length - 2,
				F = arguments;
			return ur(() => {
				for (var N = m, X = Pi(N * 8), ne = X >> 3, ee = 0; ee < m; ee++) {
					var ve = F[2 + ee];
					K()[ne + ee] = ve
				}
				return Yt(a, N, X, l)
			})
		}
		var He = [];

		function Kn(a, l, m) {
			He.length = l;
			for (var F = m >> 3, N = 0; N < l; N++) He[N] = K()[F + N];
			var X = Wa[a];
			return X.apply(null, He)
		}

		function bt() {
			return 2147483648
		}

		function Tt(a) {
			var l = ke.buffer;
			try {
				return ke.grow(a - l.byteLength + 65535 >>> 16), or(), 1
			} catch {}
		}

		function Wt(a) {
			var l = t().length;
			if (a = a >>> 0, a <= l) return !1;
			var m = bt();
			if (a > m) return !1;
			let F = (ve, We) => ve + (We - ve % We) % We;
			for (var N = 1; N <= 4; N *= 2) {
				var X = l * (1 + .2 / N);
				X = Math.min(X, a + 100663296);
				var ne = Math.min(m, F(Math.max(a, X), 65536)),
					ee = Tt(ne);
				if (ee) return !0
			}
			return !1
		}
		var Ie = {};

		function gr() {
			return Qe || "./this.program"
		}

		function yn() {
			if (!yn.strings) {
				var a = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
					l = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: a,
						_: gr()
					};
				for (var m in Ie) Ie[m] === void 0 ? delete l[m] : l[m] = Ie[m];
				var F = [];
				for (var m in l) F.push(m + "=" + l[m]);
				yn.strings = F
			}
			return yn.strings
		}

		function gt(a, l, m) {
			for (var F = 0; F < a.length; ++F) r()[l++ >> 0] = a.charCodeAt(F);
			r()[l >> 0] = 0
		}

		function ni(a, l) {
			if (Te) return Xe(5, 1, a, l);
			var m = 0;
			return yn().forEach(function(F, N) {
				var X = l + m;
				k()[a + N * 4 >> 2] = X, gt(F, X), m += F.length + 1
			}), 0
		}

		function ji(a, l) {
			if (Te) return Xe(6, 1, a, l);
			var m = yn();
			k()[a >> 2] = m.length;
			var F = 0;
			return m.forEach(function(N) {
				F += N.length + 1
			}), k()[l >> 2] = F, 0
		}

		function Co(a) {
			return Te ? Xe(7, 1, a) : 52
		}

		function So(a, l, m, F) {
			return Te ? Xe(8, 1, a, l, m, F) : 52
		}

		function ko(a, l, m, F, N) {
			return Te ? Xe(9, 1, a, l, m, F, N) : 70
		}
		var ka = [null, [],
			[]
		];

		function Ra(a, l) {
			var m = ka[a];
			l === 0 || l === 10 ? ((a === 1 ? Ve : $e)(Pe(m, 0)), m.length = 0) : m.push(l)
		}

		function qn(a, l, m, F) {
			if (Te) return Xe(10, 1, a, l, m, F);
			for (var N = 0, X = 0; X < m; X++) {
				var ne = k()[l >> 2],
					ee = k()[l + 4 >> 2];
				l += 8;
				for (var ve = 0; ve < ee; ve++) Ra(a, t()[ne + ve]);
				N += ee
			}
			return k()[F >> 2] = N, 0
		}

		function _i(a) {
			return a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)
		}

		function Pa(a, l) {
			for (var m = 0, F = 0; F <= l; m += a[F++]);
			return m
		}
		var Ro = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			Xi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		function Go(a, l) {
			for (var m = new Date(a.getTime()); l > 0;) {
				var F = _i(m.getFullYear()),
					N = m.getMonth(),
					X = (F ? Ro : Xi)[N];
				if (l > X - m.getDate()) l -= X - m.getDate() + 1, m.setDate(1), N < 11 ? m.setMonth(N + 1) : (m.setMonth(0), m.setFullYear(m.getFullYear() + 1));
				else return m.setDate(m.getDate() + l), m
			}
			return m
		}

		function Qo(a, l, m) {
			var F = tr(a) + 1,
				N = new Array(F);
			return Ge(a, N, 0, N.length), N
		}

		function Ko(a, l) {
			r().set(a, l)
		}

		function Fa(a, l, m, F) {
			var N = p()[F + 40 >> 2],
				X = {
					tm_sec: p()[F >> 2],
					tm_min: p()[F + 4 >> 2],
					tm_hour: p()[F + 8 >> 2],
					tm_mday: p()[F + 12 >> 2],
					tm_mon: p()[F + 16 >> 2],
					tm_year: p()[F + 20 >> 2],
					tm_wday: p()[F + 24 >> 2],
					tm_yday: p()[F + 28 >> 2],
					tm_isdst: p()[F + 32 >> 2],
					tm_gmtoff: p()[F + 36 >> 2],
					tm_zone: N ? ze(N) : ""
				},
				ne = ze(m),
				ee = {
					"%c": "%a %b %d %H:%M:%S %Y",
					"%D": "%m/%d/%y",
					"%F": "%Y-%m-%d",
					"%h": "%b",
					"%r": "%I:%M:%S %p",
					"%R": "%H:%M",
					"%T": "%H:%M:%S",
					"%x": "%m/%d/%y",
					"%X": "%H:%M:%S",
					"%Ec": "%c",
					"%EC": "%C",
					"%Ex": "%m/%d/%y",
					"%EX": "%H:%M:%S",
					"%Ey": "%y",
					"%EY": "%Y",
					"%Od": "%d",
					"%Oe": "%e",
					"%OH": "%H",
					"%OI": "%I",
					"%Om": "%m",
					"%OM": "%M",
					"%OS": "%S",
					"%Ou": "%u",
					"%OU": "%U",
					"%OV": "%V",
					"%Ow": "%w",
					"%OW": "%W",
					"%Oy": "%y"
				};
			for (var ve in ee) ne = ne.replace(new RegExp(ve, "g"), ee[ve]);
			var We = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				nr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			function Ke(se, De, Nr) {
				for (var rn = typeof se == "number" ? se.toString() : se || ""; rn.length < De;) rn = Nr[0] + rn;
				return rn
			}

			function rr(se, De) {
				return Ke(se, De, "0")
			}

			function Sn(se, De) {
				function Nr(ii) {
					return ii < 0 ? -1 : ii > 0 ? 1 : 0
				}
				var rn;
				return (rn = Nr(se.getFullYear() - De.getFullYear())) === 0 && (rn = Nr(se.getMonth() - De.getMonth())) === 0 && (rn = Nr(se.getDate() - De.getDate())), rn
			}

			function Dn(se) {
				switch (se.getDay()) {
					case 0:
						return new Date(se.getFullYear() - 1, 11, 29);
					case 1:
						return se;
					case 2:
						return new Date(se.getFullYear(), 0, 3);
					case 3:
						return new Date(se.getFullYear(), 0, 2);
					case 4:
						return new Date(se.getFullYear(), 0, 1);
					case 5:
						return new Date(se.getFullYear() - 1, 11, 31);
					case 6:
						return new Date(se.getFullYear() - 1, 11, 30)
				}
			}

			function _t(se) {
				var De = Go(new Date(se.tm_year + 1900, 0, 1), se.tm_yday),
					Nr = new Date(De.getFullYear(), 0, 4),
					rn = new Date(De.getFullYear() + 1, 0, 4),
					ii = Dn(Nr),
					ja = Dn(rn);
				return Sn(ii, De) <= 0 ? Sn(ja, De) <= 0 ? De.getFullYear() + 1 : De.getFullYear() : De.getFullYear() - 1
			}
			var jn = {
				"%a": function(se) {
					return We[se.tm_wday].substring(0, 3)
				},
				"%A": function(se) {
					return We[se.tm_wday]
				},
				"%b": function(se) {
					return nr[se.tm_mon].substring(0, 3)
				},
				"%B": function(se) {
					return nr[se.tm_mon]
				},
				"%C": function(se) {
					var De = se.tm_year + 1900;
					return rr(De / 100 | 0, 2)
				},
				"%d": function(se) {
					return rr(se.tm_mday, 2)
				},
				"%e": function(se) {
					return Ke(se.tm_mday, 2, " ")
				},
				"%g": function(se) {
					return _t(se).toString().substring(2)
				},
				"%G": function(se) {
					return _t(se)
				},
				"%H": function(se) {
					return rr(se.tm_hour, 2)
				},
				"%I": function(se) {
					var De = se.tm_hour;
					return De == 0 ? De = 12 : De > 12 && (De -= 12), rr(De, 2)
				},
				"%j": function(se) {
					return rr(se.tm_mday + Pa(_i(se.tm_year + 1900) ? Ro : Xi, se.tm_mon - 1), 3)
				},
				"%m": function(se) {
					return rr(se.tm_mon + 1, 2)
				},
				"%M": function(se) {
					return rr(se.tm_min, 2)
				},
				"%n": function() {
					return `
`
				},
				"%p": function(se) {
					return se.tm_hour >= 0 && se.tm_hour < 12 ? "AM" : "PM"
				},
				"%S": function(se) {
					return rr(se.tm_sec, 2)
				},
				"%t": function() {
					return "	"
				},
				"%u": function(se) {
					return se.tm_wday || 7
				},
				"%U": function(se) {
					var De = se.tm_yday + 7 - se.tm_wday;
					return rr(Math.floor(De / 7), 2)
				},
				"%V": function(se) {
					var De = Math.floor((se.tm_yday + 7 - (se.tm_wday + 6) % 7) / 7);
					if ((se.tm_wday + 371 - se.tm_yday - 2) % 7 <= 2 && De++, De) {
						if (De == 53) {
							var rn = (se.tm_wday + 371 - se.tm_yday) % 7;
							rn != 4 && (rn != 3 || !_i(se.tm_year)) && (De = 1)
						}
					} else {
						De = 52;
						var Nr = (se.tm_wday + 7 - se.tm_yday - 1) % 7;
						(Nr == 4 || Nr == 5 && _i(se.tm_year % 400 - 1)) && De++
					}
					return rr(De, 2)
				},
				"%w": function(se) {
					return se.tm_wday
				},
				"%W": function(se) {
					var De = se.tm_yday + 7 - (se.tm_wday + 6) % 7;
					return rr(Math.floor(De / 7), 2)
				},
				"%y": function(se) {
					return (se.tm_year + 1900).toString().substring(2)
				},
				"%Y": function(se) {
					return se.tm_year + 1900
				},
				"%z": function(se) {
					var De = se.tm_gmtoff,
						Nr = De >= 0;
					return De = Math.abs(De) / 60, De = De / 60 * 100 + De % 60, (Nr ? "+" : "-") + ("0000" + De).slice(-4)
				},
				"%Z": function(se) {
					return se.tm_zone
				},
				"%%": function() {
					return "%"
				}
			};
			ne = ne.replace(/%%/g, "\0\0");
			for (var ve in jn) ne.includes(ve) && (ne = ne.replace(new RegExp(ve, "g"), jn[ve](X)));
			ne = ne.replace(/\0\0/g, "%");
			var kt = Qo(ne);
			return kt.length > l ? 0 : (Ko(kt, a), kt.length - 1)
		}

		function $a(a, l, m, F, N) {
			return Fa(a, l, m, F)
		}

		function qo(a) {
			return p()[Po() >> 2] = a, a
		}

		function Oa(a) {
			return a ? (qo(52), -1) : 0
		}
		we.init(), Un = f.InternalError = Wn(Error, "InternalError"), dt(), tt = f.BindingError = Wn(Error, "BindingError"), at(), ge = f.UnboundTypeError = Wn(Error, "UnboundTypeError");
		var Wa = [null, wr, Re, un, Xn, ni, ji, Co, So, ko, qn],
			Ua = {
				l: Ln,
				G: Hn,
				i: Gr,
				J: un,
				K: Xn,
				r: ct,
				t: zn,
				N: sn,
				M: mt,
				m: ut,
				q: P,
				d: u,
				c: v,
				n: C,
				h: L,
				C: re,
				e: le,
				O: pe,
				z: w,
				E,
				F: M,
				g: Yn,
				Q: y,
				p: R,
				o: W,
				b: H,
				j: Y,
				L: he,
				f: ye,
				B: Oe,
				u: ir,
				D: Kn,
				y: Wt,
				w: ni,
				x: ji,
				A: Ur,
				k: Co,
				I: So,
				s: ko,
				H: qn,
				a: ke || f.wasmMemory,
				v: $a,
				P: Oa
			};
		on();
		var Mi = function() {
				return (Mi = f.asm.S).apply(null, arguments)
			},
			Ct = function() {
				return (Ct = f.asm.T).apply(null, arguments)
			};
		f.__emscripten_tls_init = function() {
			return (f.__emscripten_tls_init = f.asm.U).apply(null, arguments)
		};
		var yi = f._pthread_self = function() {
				return (yi = f._pthread_self = f.asm.V).apply(null, arguments)
			},
			Zi = f.___getTypeName = function() {
				return (Zi = f.___getTypeName = f.asm.W).apply(null, arguments)
			};
		f.__embind_initialize_bindings = function() {
			return (f.__embind_initialize_bindings = f.asm.X).apply(null, arguments)
		};
		var Po = function() {
				return (Po = f.asm.Y).apply(null, arguments)
			},
			Fo = f.__emscripten_thread_init = function() {
				return (Fo = f.__emscripten_thread_init = f.asm.Z).apply(null, arguments)
			};
		f.__emscripten_thread_crashed = function() {
			return (f.__emscripten_thread_crashed = f.asm._).apply(null, arguments)
		};
		var Yt = function() {
				return (Yt = f.asm.$).apply(null, arguments)
			},
			St = function() {
				return (St = f.asm.ba).apply(null, arguments)
			},
			ki = f.__emscripten_thread_exit = function() {
				return (ki = f.__emscripten_thread_exit = f.asm.ca).apply(null, arguments)
			},
			Ji = f.__emscripten_check_mailbox = function() {
				return (Ji = f.__emscripten_check_mailbox = f.asm.da).apply(null, arguments)
			},
			eo = function() {
				return (eo = f.asm.ea).apply(null, arguments)
			},
			ro = function() {
				return (ro = f.asm.fa).apply(null, arguments)
			},
			Ri = function() {
				return (Ri = f.asm.ga).apply(null, arguments)
			},
			Pi = function() {
				return (Pi = f.asm.ha).apply(null, arguments)
			},
			no = function() {
				return (no = f.asm.ia).apply(null, arguments)
			};
		f.dynCall_jiji = function() {
			return (f.dynCall_jiji = f.asm.ja).apply(null, arguments)
		}, f.dynCall_iiji = function() {
			return (f.dynCall_iiji = f.asm.ka).apply(null, arguments)
		}, f.dynCall_viijii = function() {
			return (f.dynCall_viijii = f.asm.la).apply(null, arguments)
		}, f.dynCall_iiiiij = function() {
			return (f.dynCall_iiiiij = f.asm.ma).apply(null, arguments)
		}, f.dynCall_iiiiijj = function() {
			return (f.dynCall_iiiiijj = f.asm.na).apply(null, arguments)
		}, f.dynCall_iiiiiijj = function() {
			return (f.dynCall_iiiiiijj = f.asm.oa).apply(null, arguments)
		}, f.keepRuntimeAlive = pn, f.wasmMemory = ke, f.ExitStatus = br, f.PThread = we;
		var ti;
		cr = function a() {
			ti || xi(), ti || (cr = a)
		};

		function xi() {
			if (Ar > 0) return;
			if (Te) {
				te(f), Ir(), startWorker(f);
				return
			}
			if (Xr(), Ar > 0) return;

			function a() {
				ti || (ti = !0, f.calledRun = !0, !Be && (Ir(), te(f), f.onRuntimeInitialized && f.onRuntimeInitialized(), Mn()))
			}
			f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					f.setStatus("")
				}, 1), a()
			}, 1)) : a()
		}
		if (f.preInit)
			for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0;) f.preInit.pop()();
		return xi(), f.ready
	}
})();
const ty = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: ny
}, Symbol.toStringTag, {
	value: "Module"
}));
var iy = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(c, h) {
			t = c, o = h
		});
		const p = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
			k = typeof process == "object" && process.release && process.release.name === "node";
		(p || k) && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(h, b, W) {
				this.data = h, this.width = b, this.height = W
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
			href: ""
		}));
		var U = Object.assign({}, r),
			K = "./this.program",
			f = typeof window == "object",
			te = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var ae = "";

		function ce(c) {
			return r.locateFile ? r.locateFile(c, ae) : ae + c
		}
		var _e;
		(f || te) && (te ? ae = self.location.href : typeof document < "u" && document.currentScript && (ae = document.currentScript.src), e && (ae = e), ae.indexOf("blob:") !== 0 ? ae = ae.substr(0, ae.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ae = "", te && (_e = c => {
			var h = new XMLHttpRequest;
			return h.open("GET", c, !1), h.responseType = "arraybuffer", h.send(null), new Uint8Array(h.response)
		}));
		var Ce = r.print || console.log.bind(console),
			Qe = r.printErr || console.warn.bind(console);
		Object.assign(r, U), U = null, r.arguments && r.arguments, r.thisProgram && (K = r.thisProgram), r.quit && r.quit;
		var Z;
		r.wasmBinary && (Z = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && yr("no native wasm support detected");
		var G, q = !1;

		function Ee(c, h, b) {
			for (var W = h + b, H = ""; !(h >= W);) {
				var Y = c[h++];
				if (!Y) return H;
				if (!(Y & 128)) {
					H += String.fromCharCode(Y);
					continue
				}
				var fe = c[h++] & 63;
				if ((Y & 224) == 192) {
					H += String.fromCharCode((Y & 31) << 6 | fe);
					continue
				}
				var he = c[h++] & 63;
				if ((Y & 240) == 224 ? Y = (Y & 15) << 12 | fe << 6 | he : Y = (Y & 7) << 18 | fe << 12 | he << 6 | c[h++] & 63, Y < 65536) H += String.fromCharCode(Y);
				else {
					var ye = Y - 65536;
					H += String.fromCharCode(55296 | ye >> 10, 56320 | ye & 1023)
				}
			}
			return H
		}

		function Te(c, h) {
			return c ? Ee($e, c, h) : ""
		}

		function Ue(c, h, b, W) {
			if (!(W > 0)) return 0;
			for (var H = b, Y = b + W - 1, fe = 0; fe < c.length; ++fe) {
				var he = c.charCodeAt(fe);
				if (he >= 55296 && he <= 57343) {
					var ye = c.charCodeAt(++fe);
					he = 65536 + ((he & 1023) << 10) | ye & 1023
				}
				if (he <= 127) {
					if (b >= Y) break;
					h[b++] = he
				} else if (he <= 2047) {
					if (b + 1 >= Y) break;
					h[b++] = 192 | he >> 6, h[b++] = 128 | he & 63
				} else if (he <= 65535) {
					if (b + 2 >= Y) break;
					h[b++] = 224 | he >> 12, h[b++] = 128 | he >> 6 & 63, h[b++] = 128 | he & 63
				} else {
					if (b + 3 >= Y) break;
					h[b++] = 240 | he >> 18, h[b++] = 128 | he >> 12 & 63, h[b++] = 128 | he >> 6 & 63, h[b++] = 128 | he & 63
				}
			}
			return h[b] = 0, b - H
		}

		function je(c, h, b) {
			return Ue(c, $e, h, b)
		}

		function Ae(c) {
			for (var h = 0, b = 0; b < c.length; ++b) {
				var W = c.charCodeAt(b);
				W <= 127 ? h++ : W <= 2047 ? h += 2 : W >= 55296 && W <= 57343 ? (h += 4, ++b) : h += 3
			}
			return h
		}
		var Ve, $e, Me, xe, ke, sr, Be, Ne;

		function zr() {
			var c = G.buffer;
			r.HEAP8 = Ve = new Int8Array(c), r.HEAP16 = Me = new Int16Array(c), r.HEAP32 = ke = new Int32Array(c), r.HEAPU8 = $e = new Uint8Array(c), r.HEAPU16 = xe = new Uint16Array(c), r.HEAPU32 = sr = new Uint32Array(c), r.HEAPF32 = Be = new Float32Array(c), r.HEAPF64 = Ne = new Float64Array(c)
		}
		var Pe, ze = [],
			Ge = [],
			qe = [];

		function tr() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) nn(r.preRun.shift());
			Mn(ze)
		}

		function Er() {
			Mn(Ge)
		}

		function fn() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) Mr(r.postRun.shift());
			Mn(qe)
		}

		function nn(c) {
			ze.unshift(c)
		}

		function Ze(c) {
			Ge.unshift(c)
		}

		function Mr(c) {
			qe.unshift(c)
		}
		var tn = 0,
			wn = null;

		function On(c) {
			tn++, r.monitorRunDependencies && r.monitorRunDependencies(tn)
		}

		function or(c) {
			if (tn--, r.monitorRunDependencies && r.monitorRunDependencies(tn), tn == 0 && wn) {
				var h = wn;
				wn = null, h()
			}
		}

		function yr(c) {
			r.onAbort && r.onAbort(c), c = "Aborted(" + c + ")", Qe(c), q = !0, c += ". Build with -sASSERTIONS for more info.";
			var h = new WebAssembly.RuntimeError(c);
			throw o(h), h
		}
		var Fr = "data:application/octet-stream;base64,";

		function cn(c) {
			return c.startsWith(Fr)
		}
		var En;
		r.locateFile ? (En = "jxl_enc.wasm", cn(En) || (En = ce(En))) : En = new URL(location.href +"assets/jxl_enc-Brgqtac1.wasm", import.meta.url).href;

		function $r(c) {
			try {
				if (c == En && Z) return new Uint8Array(Z);
				if (_e) return _e(c);
				throw "both async and sync fetching of the wasm failed"
			} catch (h) {
				yr(h)
			}
		}

		function dn(c) {
			return !Z && (f || te) && typeof fetch == "function" ? fetch(c, {
				credentials: "same-origin"
			}).then(function(h) {
				if (!h.ok) throw "failed to load wasm binary file at '" + c + "'";
				return h.arrayBuffer()
			}).catch(function() {
				return $r(c)
			}) : Promise.resolve().then(function() {
				return $r(c)
			})
		}

		function pn(c, h, b) {
			return dn(c).then(function(W) {
				return WebAssembly.instantiate(W, h)
			}).then(function(W) {
				return W
			}).then(b, function(W) {
				Qe("failed to asynchronously prepare wasm: " + W), yr(W)
			})
		}

		function Xr(c, h, b, W) {
			return !c && typeof WebAssembly.instantiateStreaming == "function" && !cn(h) && typeof fetch == "function" ? fetch(h, {
				credentials: "same-origin"
			}).then(function(H) {
				var Y = WebAssembly.instantiateStreaming(H, b);
				return Y.then(W, function(fe) {
					return Qe("wasm streaming compile failed: " + fe), Qe("falling back to ArrayBuffer instantiation"), pn(h, b, W)
				})
			}) : pn(h, b, W)
		}

		function Ir() {
			var c = {
				a: ie
			};

			function h(W, H) {
				var Y = W.exports;
				return r.asm = Y, G = r.asm.F, zr(), Pe = r.asm.M, Ze(r.asm.G), or(), Y
			}
			On();

			function b(W) {
				h(W.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(c, h)
			} catch (W) {
				Qe("Module.instantiateWasm callback failed with error: " + W), o(W)
			}
			return Xr(Z, En, c, b).catch(o), {}
		}

		function Mn(c) {
			for (; c.length > 0;) c.shift()(r)
		}

		function Dr(c) {
			this.excPtr = c, this.ptr = c - 24, this.set_type = function(h) {
				sr[this.ptr + 4 >> 2] = h
			}, this.get_type = function() {
				return sr[this.ptr + 4 >> 2]
			}, this.set_destructor = function(h) {
				sr[this.ptr + 8 >> 2] = h
			}, this.get_destructor = function() {
				return sr[this.ptr + 8 >> 2]
			}, this.set_refcount = function(h) {
				ke[this.ptr >> 2] = h
			}, this.set_caught = function(h) {
				h = h ? 1 : 0, Ve[this.ptr + 12 >> 0] = h
			}, this.get_caught = function() {
				return Ve[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(h) {
				h = h ? 1 : 0, Ve[this.ptr + 13 >> 0] = h
			}, this.get_rethrown = function() {
				return Ve[this.ptr + 13 >> 0] != 0
			}, this.init = function(h, b) {
				this.set_adjusted_ptr(0), this.set_type(h), this.set_destructor(b), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var h = ke[this.ptr >> 2];
				ke[this.ptr >> 2] = h + 1
			}, this.release_ref = function() {
				var h = ke[this.ptr >> 2];
				return ke[this.ptr >> 2] = h - 1, h === 1
			}, this.set_adjusted_ptr = function(h) {
				sr[this.ptr + 16 >> 2] = h
			}, this.get_adjusted_ptr = function() {
				return sr[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var h = ue(this.get_type());
				if (h) return sr[this.excPtr >> 2];
				var b = this.get_adjusted_ptr();
				return b !== 0 ? b : this.excPtr
			}
		}

		function Tr(c, h, b) {
			var W = new Dr(c);
			throw W.init(h, b), c
		}

		function bn(c, h, b) {
			return 0
		}

		function Ar(c, h, b, W) {}
		var cr = {};

		function en(c) {
			for (; c.length;) {
				var h = c.pop(),
					b = c.pop();
				b(h)
			}
		}

		function Qr(c) {
			return this.fromWireType(ke[c >> 2])
		}
		var Or = {},
			Wr = {},
			Zr = {},
			Cr = 48,
			kr = 57;

		function Rr(c) {
			if (c === void 0) return "_unknown";
			c = c.replace(/[^a-zA-Z0-9_]/g, "$");
			var h = c.charCodeAt(0);
			return h >= Cr && h <= kr ? "_" + c : c
		}

		function Jr(c, h) {
			return c = Rr(c), {
				[c]: function() {
					return h.apply(this, arguments)
				}
			} [c]
		}

		function pr(c, h) {
			var b = Jr(h, function(W) {
				this.name = h, this.message = W;
				var H = new Error(W).stack;
				H !== void 0 && (this.stack = this.toString() + `
` + H.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return b.prototype = Object.create(c.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, b
		}
		var on = void 0;

		function br(c) {
			throw new on(c)
		}

		function xr(c, h, b) {
			c.forEach(function(he) {
				Zr[he] = h
			});

			function W(he) {
				var ye = b(he);
				ye.length !== c.length && br("Mismatched type converter count");
				for (var Oe = 0; Oe < c.length; ++Oe) we(c[Oe], ye[Oe])
			}
			var H = new Array(h.length),
				Y = [],
				fe = 0;
			h.forEach((he, ye) => {
				Wr.hasOwnProperty(he) ? H[ye] = Wr[he] : (Y.push(he), Or.hasOwnProperty(he) || (Or[he] = []), Or[he].push(() => {
					H[ye] = Wr[he], ++fe, fe === Y.length && W(H)
				}))
			}), Y.length === 0 && W(H)
		}

		function Sr(c) {
			var h = cr[c];
			delete cr[c];
			var b = h.rawConstructor,
				W = h.rawDestructor,
				H = h.fields,
				Y = H.map(fe => fe.getterReturnType).concat(H.map(fe => fe.setterArgumentType));
			xr([c], Y, fe => {
				var he = {};
				return H.forEach((ye, Oe) => {
					var ir = ye.fieldName,
						ur = fe[Oe],
						Xe = ye.getter,
						He = ye.getterContext,
						Kn = fe[Oe + H.length],
						bt = ye.setter,
						Tt = ye.setterContext;
					he[ir] = {
						read: Wt => ur.fromWireType(Xe(He, Wt)),
						write: (Wt, Ie) => {
							var gr = [];
							bt(Tt, Wt, Kn.toWireType(gr, Ie)), en(gr)
						}
					}
				}), [{
					name: h.name,
					fromWireType: function(ye) {
						var Oe = {};
						for (var ir in he) Oe[ir] = he[ir].read(ye);
						return W(ye), Oe
					},
					toWireType: function(ye, Oe) {
						for (var ir in he)
							if (!(ir in Oe)) throw new TypeError('Missing field:  "' + ir + '"');
						var ur = b();
						for (ir in he) he[ir].write(ur, Oe[ir]);
						return ye !== null && ye.push(W, ur), ur
					},
					argPackAdvance: 8,
					readValueFromPointer: Qr,
					destructorFunction: W
				}]
			})
		}

		function Br(c, h, b, W, H) {}

		function mr(c) {
			switch (c) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + c)
			}
		}

		function Je() {
			for (var c = new Array(256), h = 0; h < 256; ++h) c[h] = String.fromCharCode(h);
			wr = c
		}
		var wr = void 0;

		function hr(c) {
			for (var h = "", b = c; $e[b];) h += wr[$e[b++]];
			return h
		}
		var Ur = void 0;

		function lr(c) {
			throw new Ur(c)
		}

		function we(c, h, b = {}) {
			if (!("argPackAdvance" in h)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var W = h.name;
			if (c || lr('type "' + W + '" must have a positive integer typeid pointer'), Wr.hasOwnProperty(c)) {
				if (b.ignoreDuplicateRegistrations) return;
				lr("Cannot register type '" + W + "' twice")
			}
			if (Wr[c] = h, delete Zr[c], Or.hasOwnProperty(c)) {
				var H = Or[c];
				delete Or[c], H.forEach(Y => Y())
			}
		}

		function Rn(c, h, b, W, H) {
			var Y = mr(b);
			h = hr(h), we(c, {
				name: h,
				fromWireType: function(fe) {
					return !!fe
				},
				toWireType: function(fe, he) {
					return he ? W : H
				},
				argPackAdvance: 8,
				readValueFromPointer: function(fe) {
					var he;
					if (b === 1) he = Ve;
					else if (b === 2) he = Me;
					else if (b === 4) he = ke;
					else throw new TypeError("Unknown boolean type size: " + h);
					return this.fromWireType(he[fe >> Y])
				},
				destructorFunction: null
			})
		}
		var dr = [],
			Re = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function an(c) {
			c > 4 && --Re[c].refcount === 0 && (Re[c] = void 0, dr.push(c))
		}

		function Yr() {
			for (var c = 0, h = 5; h < Re.length; ++h) Re[h] !== void 0 && ++c;
			return c
		}

		function vn() {
			for (var c = 5; c < Re.length; ++c)
				if (Re[c] !== void 0) return Re[c];
			return null
		}

		function Lr() {
			r.count_emval_handles = Yr, r.get_first_emval = vn
		}
		var Kr = {
			toValue: c => (c || lr("Cannot use deleted val. handle = " + c), Re[c].value),
			toHandle: c => {
				switch (c) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var h = dr.length ? dr.pop() : Re.length;
						return Re[h] = {
							refcount: 1,
							value: c
						}, h
					}
				}
			}
		};

		function Ln(c, h) {
			h = hr(h), we(c, {
				name: h,
				fromWireType: function(b) {
					var W = Kr.toValue(b);
					return an(b), W
				},
				toWireType: function(b, W) {
					return Kr.toHandle(W)
				},
				argPackAdvance: 8,
				readValueFromPointer: Qr,
				destructorFunction: null
			})
		}

		function Hn(c, h) {
			switch (h) {
				case 2:
					return function(b) {
						return this.fromWireType(Be[b >> 2])
					};
				case 3:
					return function(b) {
						return this.fromWireType(Ne[b >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + c)
			}
		}

		function Gr(c, h, b) {
			var W = mr(b);
			h = hr(h), we(c, {
				name: h,
				fromWireType: function(H) {
					return H
				},
				toWireType: function(H, Y) {
					return Y
				},
				argPackAdvance: 8,
				readValueFromPointer: Hn(h, W),
				destructorFunction: null
			})
		}

		function un(c, h, b, W, H, Y) {
			var fe = h.length;
			fe < 2 && lr("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var he = h[1] !== null && b !== null, ye = !1, Oe = 1; Oe < h.length; ++Oe)
				if (h[Oe] !== null && h[Oe].destructorFunction === void 0) {
					ye = !0;
					break
				} var ir = h[0].name !== "void",
				ur = fe - 2,
				Xe = new Array(ur),
				He = [],
				Kn = [];
			return function() {
				arguments.length !== ur && lr("function " + c + " called with " + arguments.length + " arguments, expected " + ur + " args!"), Kn.length = 0;
				var bt;
				He.length = he ? 2 : 1, He[0] = H, he && (bt = h[1].toWireType(Kn, this), He[1] = bt);
				for (var Tt = 0; Tt < ur; ++Tt) Xe[Tt] = h[Tt + 2].toWireType(Kn, arguments[Tt]), He.push(Xe[Tt]);
				var Wt = W.apply(null, He);

				function Ie(gr) {
					if (ye) en(Kn);
					else
						for (var yn = he ? 1 : 2; yn < h.length; yn++) {
							var gt = yn === 1 ? bt : Xe[yn - 2];
							h[yn].destructorFunction !== null && h[yn].destructorFunction(gt)
						}
					if (ir) return h[0].fromWireType(gr)
				}
				return Ie(Wt)
			}
		}

		function Xn(c, h, b) {
			if (c[h].overloadTable === void 0) {
				var W = c[h];
				c[h] = function() {
					return c[h].overloadTable.hasOwnProperty(arguments.length) || lr("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + c[h].overloadTable + ")!"), c[h].overloadTable[arguments.length].apply(this, arguments)
				}, c[h].overloadTable = [], c[h].overloadTable[W.argCount] = W
			}
		}

		function Cn(c, h, b) {
			r.hasOwnProperty(c) ? ((b === void 0 || r[c].overloadTable !== void 0 && r[c].overloadTable[b] !== void 0) && lr("Cannot register public name '" + c + "' twice"), Xn(r, c, c), r.hasOwnProperty(b) && lr("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), r[c].overloadTable[b] = h) : (r[c] = h, b !== void 0 && (r[c].numArguments = b))
		}

		function Zn(c, h) {
			for (var b = [], W = 0; W < c; W++) b.push(sr[h + W * 4 >> 2]);
			return b
		}

		function hn(c, h, b) {
			r.hasOwnProperty(c) || br("Replacing nonexistant public symbol"), r[c].overloadTable !== void 0 && b !== void 0 ? r[c].overloadTable[b] = h : (r[c] = h, r[c].argCount = b)
		}

		function mn(c, h, b) {
			var W = r["dynCall_" + c];
			return b && b.length ? W.apply(null, [h].concat(b)) : W.call(null, h)
		}
		var jr = [];

		function Hr(c) {
			var h = jr[c];
			return h || (c >= jr.length && (jr.length = c + 1), jr[c] = h = Pe.get(c)), h
		}

		function Pn(c, h, b) {
			if (c.includes("j")) return mn(c, h, b);
			var W = Hr(h).apply(null, b);
			return W
		}

		function xn(c, h) {
			var b = [];
			return function() {
				return b.length = 0, Object.assign(b, arguments), Pn(c, h, b)
			}
		}

		function Fn(c, h) {
			c = hr(c);

			function b() {
				return c.includes("j") ? xn(c, h) : Hr(h)
			}
			var W = b();
			return typeof W != "function" && lr("unknown function pointer with signature " + c + ": " + h), W
		}
		var In = void 0;

		function Wn(c) {
			var h = j(c),
				b = hr(h);
			return E(h), b
		}

		function Un(c, h) {
			var b = [],
				W = {};

			function H(Y) {
				if (!W[Y] && !Wr[Y]) {
					if (Zr[Y]) {
						Zr[Y].forEach(H);
						return
					}
					b.push(Y), W[Y] = !0
				}
			}
			throw h.forEach(H), new In(c + ": " + b.map(Wn).join([", "]))
		}

		function Vn(c, h, b, W, H, Y, fe) {
			var he = Zn(h, b);
			c = hr(c), H = Fn(W, H), Cn(c, function() {
				Un("Cannot call " + c + " due to unbound types", he)
			}, h - 1), xr([], he, function(ye) {
				var Oe = [ye[0], null].concat(ye.slice(1));
				return hn(c, un(c, Oe, null, H, Y), h - 1), []
			})
		}

		function Jn(c, h, b) {
			switch (h) {
				case 0:
					return b ? function(H) {
						return Ve[H]
					} : function(H) {
						return $e[H]
					};
				case 1:
					return b ? function(H) {
						return Me[H >> 1]
					} : function(H) {
						return xe[H >> 1]
					};
				case 2:
					return b ? function(H) {
						return ke[H >> 2]
					} : function(H) {
						return sr[H >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + c)
			}
		}

		function ct(c, h, b, W, H) {
			h = hr(h);
			var Y = mr(b),
				fe = ur => ur;
			if (W === 0) {
				var he = 32 - 8 * b;
				fe = ur => ur << he >>> he
			}
			var ye = h.includes("unsigned"),
				Oe = (ur, Xe) => {},
				ir;
			ye ? ir = function(ur, Xe) {
				return Oe(Xe, this.name), Xe >>> 0
			} : ir = function(ur, Xe) {
				return Oe(Xe, this.name), Xe
			}, we(c, {
				name: h,
				fromWireType: fe,
				toWireType: ir,
				argPackAdvance: 8,
				readValueFromPointer: Jn(h, Y, W !== 0),
				destructorFunction: null
			})
		}

		function zn(c, h, b) {
			var W = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				H = W[h];

			function Y(fe) {
				fe = fe >> 2;
				var he = sr,
					ye = he[fe],
					Oe = he[fe + 1];
				return new H(he.buffer, Oe, ye)
			}
			b = hr(b), we(c, {
				name: b,
				fromWireType: Y,
				argPackAdvance: 8,
				readValueFromPointer: Y
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function Bn(c, h) {
			h = hr(h);
			var b = h === "std::string";
			we(c, {
				name: h,
				fromWireType: function(W) {
					var H = sr[W >> 2],
						Y = W + 4,
						fe;
					if (b)
						for (var he = Y, ye = 0; ye <= H; ++ye) {
							var Oe = Y + ye;
							if (ye == H || $e[Oe] == 0) {
								var ir = Oe - he,
									ur = Te(he, ir);
								fe === void 0 ? fe = ur : (fe += "\0", fe += ur), he = Oe + 1
							}
						} else {
							for (var Xe = new Array(H), ye = 0; ye < H; ++ye) Xe[ye] = String.fromCharCode($e[Y + ye]);
							fe = Xe.join("")
						}
					return E(W), fe
				},
				toWireType: function(W, H) {
					H instanceof ArrayBuffer && (H = new Uint8Array(H));
					var Y, fe = typeof H == "string";
					fe || H instanceof Uint8Array || H instanceof Uint8ClampedArray || H instanceof Int8Array || lr("Cannot pass non-string to std::string"), b && fe ? Y = Ae(H) : Y = H.length;
					var he = w(4 + Y + 1),
						ye = he + 4;
					if (sr[he >> 2] = Y, b && fe) je(H, ye, Y + 1);
					else if (fe)
						for (var Oe = 0; Oe < Y; ++Oe) {
							var ir = H.charCodeAt(Oe);
							ir > 255 && (E(ye), lr("String has UTF-16 code units that do not fit in 8 bits")), $e[ye + Oe] = ir
						} else
							for (var Oe = 0; Oe < Y; ++Oe) $e[ye + Oe] = H[Oe];
					return W !== null && W.push(E, he), he
				},
				argPackAdvance: 8,
				readValueFromPointer: Qr,
				destructorFunction: function(W) {
					E(W)
				}
			})
		}

		function dt(c, h) {
			for (var b = "", W = 0; !(W >= h / 2); ++W) {
				var H = Me[c + W * 2 >> 1];
				if (H == 0) break;
				b += String.fromCharCode(H)
			}
			return b
		}

		function et(c, h, b) {
			if (b === void 0 && (b = 2147483647), b < 2) return 0;
			b -= 2;
			for (var W = h, H = b < c.length * 2 ? b / 2 : c.length, Y = 0; Y < H; ++Y) {
				var fe = c.charCodeAt(Y);
				Me[h >> 1] = fe, h += 2
			}
			return Me[h >> 1] = 0, h - W
		}

		function Pr(c) {
			return c.length * 2
		}

		function tt(c, h) {
			for (var b = 0, W = ""; !(b >= h / 4);) {
				var H = ke[c + b * 4 >> 2];
				if (H == 0) break;
				if (++b, H >= 65536) {
					var Y = H - 65536;
					W += String.fromCharCode(55296 | Y >> 10, 56320 | Y & 1023)
				} else W += String.fromCharCode(H)
			}
			return W
		}

		function ar(c, h, b) {
			if (b === void 0 && (b = 2147483647), b < 4) return 0;
			for (var W = h, H = W + b - 4, Y = 0; Y < c.length; ++Y) {
				var fe = c.charCodeAt(Y);
				if (fe >= 55296 && fe <= 57343) {
					var he = c.charCodeAt(++Y);
					fe = 65536 + ((fe & 1023) << 10) | he & 1023
				}
				if (ke[h >> 2] = fe, h += 4, h + 4 > H) break
			}
			return ke[h >> 2] = 0, h - W
		}

		function qr(c) {
			for (var h = 0, b = 0; b < c.length; ++b) {
				var W = c.charCodeAt(b);
				W >= 55296 && W <= 57343 && ++b, h += 4
			}
			return h
		}

		function sn(c, h, b) {
			b = hr(b);
			var W, H, Y, fe, he;
			h === 2 ? (W = dt, H = et, fe = Pr, Y = () => xe, he = 1) : h === 4 && (W = tt, H = ar, fe = qr, Y = () => sr, he = 2), we(c, {
				name: b,
				fromWireType: function(ye) {
					for (var Oe = sr[ye >> 2], ir = Y(), ur, Xe = ye + 4, He = 0; He <= Oe; ++He) {
						var Kn = ye + 4 + He * h;
						if (He == Oe || ir[Kn >> he] == 0) {
							var bt = Kn - Xe,
								Tt = W(Xe, bt);
							ur === void 0 ? ur = Tt : (ur += "\0", ur += Tt), Xe = Kn + h
						}
					}
					return E(ye), ur
				},
				toWireType: function(ye, Oe) {
					typeof Oe != "string" && lr("Cannot pass non-string to C++ string type " + b);
					var ir = fe(Oe),
						ur = w(4 + ir + h);
					return sr[ur >> 2] = ir >> he, H(Oe, ur + 4, ir + h), ye !== null && ye.push(E, ur), ur
				},
				argPackAdvance: 8,
				readValueFromPointer: Qr,
				destructorFunction: function(ye) {
					E(ye)
				}
			})
		}

		function gn(c, h, b, W, H, Y) {
			cr[c] = {
				name: hr(h),
				rawConstructor: Fn(b, W),
				rawDestructor: Fn(H, Y),
				fields: []
			}
		}

		function Vr(c, h, b, W, H, Y, fe, he, ye, Oe) {
			cr[c].fields.push({
				fieldName: hr(h),
				getterReturnType: b,
				getter: Fn(W, H),
				getterContext: Y,
				setterArgumentType: fe,
				setter: Fn(he, ye),
				setterContext: Oe
			})
		}

		function Yn(c, h) {
			h = hr(h), we(c, {
				isVoid: !0,
				name: h,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(b, W) {}
			})
		}
		var _n = {};

		function rt(c) {
			var h = _n[c];
			return h === void 0 ? hr(c) : h
		}

		function at() {
			if (typeof globalThis == "object") return globalThis;

			function c(h) {
				h.$$$embind_global$$$ = h;
				var b = typeof $$$embind_global$$$ == "object" && h.$$$embind_global$$$ == h;
				return b || delete h.$$$embind_global$$$, b
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && c(global) ? $$$embind_global$$$ = global : typeof self == "object" && c(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function Tn(c) {
			return c === 0 ? Kr.toHandle(at()) : (c = rt(c), Kr.toHandle(at()[c]))
		}

		function mt(c) {
			c > 4 && (Re[c].refcount += 1)
		}

		function Gn(c, h) {
			var b = Wr[c];
			return b === void 0 && lr(h + " has unknown type " + Wn(c)), b
		}

		function ut(c) {
			var h = new Array(c + 1);
			return function(b, W, H) {
				h[0] = b;
				for (var Y = 0; Y < c; ++Y) {
					var fe = Gn(sr[W + Y * 4 >> 2], "parameter " + Y);
					h[Y + 1] = fe.readValueFromPointer(H), H += fe.argPackAdvance
				}
				var he = new(b.bind.apply(b, h));
				return Kr.toHandle(he)
			}
		}
		var Qn = {};

		function $n(c, h, b, W) {
			c = Kr.toValue(c);
			var H = Qn[h];
			return H || (H = ut(h), Qn[h] = H), H(c, b, W)
		}

		function nt() {
			yr("")
		}

		function lt(c, h, b) {
			$e.copyWithin(c, h, h + b)
		}

		function it() {
			return 2147483648
		}

		function pt(c) {
			var h = G.buffer;
			try {
				return G.grow(c - h.byteLength + 65535 >>> 16), zr(), 1
			} catch {}
		}

		function x(c) {
			var h = $e.length;
			c = c >>> 0;
			var b = it();
			if (c > b) return !1;
			let W = (ye, Oe) => ye + (Oe - ye % Oe) % Oe;
			for (var H = 1; H <= 4; H *= 2) {
				var Y = h * (1 + .2 / H);
				Y = Math.min(Y, c + 100663296);
				var fe = Math.min(b, W(Math.max(c, Y), 65536)),
					he = pt(fe);
				if (he) return !0
			}
			return !1
		}
		var I = {};

		function J() {
			return K || "./this.program"
		}

		function ge() {
			if (!ge.strings) {
				var c = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
					h = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: c,
						_: J()
					};
				for (var b in I) I[b] === void 0 ? delete h[b] : h[b] = I[b];
				var W = [];
				for (var b in h) W.push(b + "=" + h[b]);
				ge.strings = W
			}
			return ge.strings
		}

		function be(c, h, b) {
			for (var W = 0; W < c.length; ++W) Ve[h++ >> 0] = c.charCodeAt(W);
			Ve[h >> 0] = 0
		}

		function Fe(c, h) {
			var b = 0;
			return ge().forEach(function(W, H) {
				var Y = h + b;
				sr[c + H * 4 >> 2] = Y, be(W, Y), b += W.length + 1
			}), 0
		}

		function P(c, h) {
			var b = ge();
			sr[c >> 2] = b.length;
			var W = 0;
			return b.forEach(function(H) {
				W += H.length + 1
			}), sr[h >> 2] = W, 0
		}

		function i(c) {
			return 52
		}

		function u(c, h, b, W) {
			return 52
		}

		function v(c, h, b, W, H) {
			return 70
		}
		var C = [null, [],
			[]
		];

		function $(c, h) {
			var b = C[c];
			h === 0 || h === 10 ? ((c === 1 ? Ce : Qe)(Ee(b, 0)), b.length = 0) : b.push(h)
		}

		function D(c, h, b, W) {
			for (var H = 0, Y = 0; Y < b; Y++) {
				var fe = sr[h >> 2],
					he = sr[h + 4 >> 2];
				h += 8;
				for (var ye = 0; ye < he; ye++) $(c, $e[fe + ye]);
				H += he
			}
			return sr[W >> 2] = H, 0
		}

		function V(c) {
			return c % 4 === 0 && (c % 100 !== 0 || c % 400 === 0)
		}

		function B(c, h) {
			for (var b = 0, W = 0; W <= h; b += c[W++]);
			return b
		}
		var g = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			T = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		function L(c, h) {
			for (var b = new Date(c.getTime()); h > 0;) {
				var W = V(b.getFullYear()),
					H = b.getMonth(),
					Y = (W ? g : T)[H];
				if (h > Y - b.getDate()) h -= Y - b.getDate() + 1, b.setDate(1), H < 11 ? b.setMonth(H + 1) : (b.setMonth(0), b.setFullYear(b.getFullYear() + 1));
				else return b.setDate(b.getDate() + h), b
			}
			return b
		}

		function re(c, h, b) {
			var W = Ae(c) + 1,
				H = new Array(W);
			return Ue(c, H, 0, H.length), H
		}

		function le(c, h) {
			Ve.set(c, h)
		}

		function pe(c, h, b, W) {
			var H = ke[W + 40 >> 2],
				Y = {
					tm_sec: ke[W >> 2],
					tm_min: ke[W + 4 >> 2],
					tm_hour: ke[W + 8 >> 2],
					tm_mday: ke[W + 12 >> 2],
					tm_mon: ke[W + 16 >> 2],
					tm_year: ke[W + 20 >> 2],
					tm_wday: ke[W + 24 >> 2],
					tm_yday: ke[W + 28 >> 2],
					tm_isdst: ke[W + 32 >> 2],
					tm_gmtoff: ke[W + 36 >> 2],
					tm_zone: H ? Te(H) : ""
				},
				fe = Te(b),
				he = {
					"%c": "%a %b %d %H:%M:%S %Y",
					"%D": "%m/%d/%y",
					"%F": "%Y-%m-%d",
					"%h": "%b",
					"%r": "%I:%M:%S %p",
					"%R": "%H:%M",
					"%T": "%H:%M:%S",
					"%x": "%m/%d/%y",
					"%X": "%H:%M:%S",
					"%Ec": "%c",
					"%EC": "%C",
					"%Ex": "%m/%d/%y",
					"%EX": "%H:%M:%S",
					"%Ey": "%y",
					"%EY": "%Y",
					"%Od": "%d",
					"%Oe": "%e",
					"%OH": "%H",
					"%OI": "%I",
					"%Om": "%m",
					"%OM": "%M",
					"%OS": "%S",
					"%Ou": "%u",
					"%OU": "%U",
					"%OV": "%V",
					"%Ow": "%w",
					"%OW": "%W",
					"%Oy": "%y"
				};
			for (var ye in he) fe = fe.replace(new RegExp(ye, "g"), he[ye]);
			var Oe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				ir = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			function ur(Ie, gr, yn) {
				for (var gt = typeof Ie == "number" ? Ie.toString() : Ie || ""; gt.length < gr;) gt = yn[0] + gt;
				return gt
			}

			function Xe(Ie, gr) {
				return ur(Ie, gr, "0")
			}

			function He(Ie, gr) {
				function yn(ni) {
					return ni < 0 ? -1 : ni > 0 ? 1 : 0
				}
				var gt;
				return (gt = yn(Ie.getFullYear() - gr.getFullYear())) === 0 && (gt = yn(Ie.getMonth() - gr.getMonth())) === 0 && (gt = yn(Ie.getDate() - gr.getDate())), gt
			}

			function Kn(Ie) {
				switch (Ie.getDay()) {
					case 0:
						return new Date(Ie.getFullYear() - 1, 11, 29);
					case 1:
						return Ie;
					case 2:
						return new Date(Ie.getFullYear(), 0, 3);
					case 3:
						return new Date(Ie.getFullYear(), 0, 2);
					case 4:
						return new Date(Ie.getFullYear(), 0, 1);
					case 5:
						return new Date(Ie.getFullYear() - 1, 11, 31);
					case 6:
						return new Date(Ie.getFullYear() - 1, 11, 30)
				}
			}

			function bt(Ie) {
				var gr = L(new Date(Ie.tm_year + 1900, 0, 1), Ie.tm_yday),
					yn = new Date(gr.getFullYear(), 0, 4),
					gt = new Date(gr.getFullYear() + 1, 0, 4),
					ni = Kn(yn),
					ji = Kn(gt);
				return He(ni, gr) <= 0 ? He(ji, gr) <= 0 ? gr.getFullYear() + 1 : gr.getFullYear() : gr.getFullYear() - 1
			}
			var Tt = {
				"%a": function(Ie) {
					return Oe[Ie.tm_wday].substring(0, 3)
				},
				"%A": function(Ie) {
					return Oe[Ie.tm_wday]
				},
				"%b": function(Ie) {
					return ir[Ie.tm_mon].substring(0, 3)
				},
				"%B": function(Ie) {
					return ir[Ie.tm_mon]
				},
				"%C": function(Ie) {
					var gr = Ie.tm_year + 1900;
					return Xe(gr / 100 | 0, 2)
				},
				"%d": function(Ie) {
					return Xe(Ie.tm_mday, 2)
				},
				"%e": function(Ie) {
					return ur(Ie.tm_mday, 2, " ")
				},
				"%g": function(Ie) {
					return bt(Ie).toString().substring(2)
				},
				"%G": function(Ie) {
					return bt(Ie)
				},
				"%H": function(Ie) {
					return Xe(Ie.tm_hour, 2)
				},
				"%I": function(Ie) {
					var gr = Ie.tm_hour;
					return gr == 0 ? gr = 12 : gr > 12 && (gr -= 12), Xe(gr, 2)
				},
				"%j": function(Ie) {
					return Xe(Ie.tm_mday + B(V(Ie.tm_year + 1900) ? g : T, Ie.tm_mon - 1), 3)
				},
				"%m": function(Ie) {
					return Xe(Ie.tm_mon + 1, 2)
				},
				"%M": function(Ie) {
					return Xe(Ie.tm_min, 2)
				},
				"%n": function() {
					return `
`
				},
				"%p": function(Ie) {
					return Ie.tm_hour >= 0 && Ie.tm_hour < 12 ? "AM" : "PM"
				},
				"%S": function(Ie) {
					return Xe(Ie.tm_sec, 2)
				},
				"%t": function() {
					return "	"
				},
				"%u": function(Ie) {
					return Ie.tm_wday || 7
				},
				"%U": function(Ie) {
					var gr = Ie.tm_yday + 7 - Ie.tm_wday;
					return Xe(Math.floor(gr / 7), 2)
				},
				"%V": function(Ie) {
					var gr = Math.floor((Ie.tm_yday + 7 - (Ie.tm_wday + 6) % 7) / 7);
					if ((Ie.tm_wday + 371 - Ie.tm_yday - 2) % 7 <= 2 && gr++, gr) {
						if (gr == 53) {
							var gt = (Ie.tm_wday + 371 - Ie.tm_yday) % 7;
							gt != 4 && (gt != 3 || !V(Ie.tm_year)) && (gr = 1)
						}
					} else {
						gr = 52;
						var yn = (Ie.tm_wday + 7 - Ie.tm_yday - 1) % 7;
						(yn == 4 || yn == 5 && V(Ie.tm_year % 400 - 1)) && gr++
					}
					return Xe(gr, 2)
				},
				"%w": function(Ie) {
					return Ie.tm_wday
				},
				"%W": function(Ie) {
					var gr = Ie.tm_yday + 7 - (Ie.tm_wday + 6) % 7;
					return Xe(Math.floor(gr / 7), 2)
				},
				"%y": function(Ie) {
					return (Ie.tm_year + 1900).toString().substring(2)
				},
				"%Y": function(Ie) {
					return Ie.tm_year + 1900
				},
				"%z": function(Ie) {
					var gr = Ie.tm_gmtoff,
						yn = gr >= 0;
					return gr = Math.abs(gr) / 60, gr = gr / 60 * 100 + gr % 60, (yn ? "+" : "-") + ("0000" + gr).slice(-4)
				},
				"%Z": function(Ie) {
					return Ie.tm_zone
				},
				"%%": function() {
					return "%"
				}
			};
			fe = fe.replace(/%%/g, "\0\0");
			for (var ye in Tt) fe.includes(ye) && (fe = fe.replace(new RegExp(ye, "g"), Tt[ye](Y)));
			fe = fe.replace(/\0\0/g, "%");
			var Wt = re(fe);
			return Wt.length > h ? 0 : (le(Wt, c), Wt.length - 1)
		}

		function A(c, h, b, W, H) {
			return pe(c, h, b, W)
		}

		function S(c) {
			return ke[Q() >> 2] = c, c
		}

		function M(c) {
			return c ? (S(52), -1) : 0
		}
		on = r.InternalError = pr(Error, "InternalError"), Je(), Ur = r.BindingError = pr(Error, "BindingError"), Lr(), In = r.UnboundTypeError = pr(Error, "UnboundTypeError");
		var ie = {
			h: Tr,
			y: bn,
			z: Ar,
			n: Sr,
			q: Br,
			B: Rn,
			A: Ln,
			i: Gr,
			m: Vn,
			c: ct,
			b: zn,
			j: Bn,
			f: sn,
			p: gn,
			d: Vr,
			C: Yn,
			e: an,
			E: Tn,
			l: mt,
			k: $n,
			a: nt,
			v: lt,
			u: x,
			s: Fe,
			t: P,
			g: i,
			x: u,
			o: v,
			w: D,
			r: A,
			D: M
		};
		Ir();
		var w = function() {
				return (w = r.asm.H).apply(null, arguments)
			},
			E = function() {
				return (E = r.asm.I).apply(null, arguments)
			},
			j = r.___getTypeName = function() {
				return (j = r.___getTypeName = r.asm.J).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.K).apply(null, arguments)
		};
		var Q = function() {
				return (Q = r.asm.L).apply(null, arguments)
			},
			ue = function() {
				return (ue = r.asm.N).apply(null, arguments)
			};
		r.dynCall_jiji = function() {
			return (r.dynCall_jiji = r.asm.O).apply(null, arguments)
		}, r.dynCall_iiji = function() {
			return (r.dynCall_iiji = r.asm.P).apply(null, arguments)
		}, r.dynCall_viijii = function() {
			return (r.dynCall_viijii = r.asm.Q).apply(null, arguments)
		}, r.dynCall_iiiiij = function() {
			return (r.dynCall_iiiiij = r.asm.R).apply(null, arguments)
		}, r.dynCall_iiiiijj = function() {
			return (r.dynCall_iiiiijj = r.asm.S).apply(null, arguments)
		}, r.dynCall_iiiiiijj = function() {
			return (r.dynCall_iiiiiijj = r.asm.T).apply(null, arguments)
		};
		var y;
		wn = function c() {
			y || R(), y || (wn = c)
		};

		function R() {
			if (tn > 0 || (tr(), tn > 0)) return;

			function c() {
				y || (y = !0, r.calledRun = !0, !q && (Er(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), fn()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), c()
			}, 1)) : c()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return R(), r.ready
	}
})();
const oy = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: iy
}, Symbol.toStringTag, {
	value: "Module"
}));
var ay = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(P, i) {
			t = P, o = i
		}), globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && caches.default !== void 0 && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(i, u, v) {
				this.data = i, this.width = u, this.height = v
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), self.location === void 0 && (self.location = {
			href: ""
		}));
		var k = Object.assign({}, r),
			U = typeof window == "object",
			K = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var f = "";

		function te(P) {
			return r.locateFile ? r.locateFile(P, f) : f + P
		}
		var ae;
		(U || K) && (K ? f = self.location.href : typeof document < "u" && document.currentScript && (f = document.currentScript.src), e && (f = e), f.indexOf("blob:") !== 0 ? f = f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : f = "", K && (ae = P => {
			var i = new XMLHttpRequest;
			return i.open("GET", P, !1), i.responseType = "arraybuffer", i.send(null), new Uint8Array(i.response)
		})), r.print || console.log.bind(console);
		var ce = r.printErr || console.warn.bind(console);
		Object.assign(r, k), k = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
		var _e;
		r.wasmBinary && (_e = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && wn("no native wasm support detected");
		var Ce, Qe = !1;

		function Z(P, i, u) {
			for (var v = i + u, C = ""; !(i >= v);) {
				var $ = P[i++];
				if (!$) return C;
				if (!($ & 128)) {
					C += String.fromCharCode($);
					continue
				}
				var D = P[i++] & 63;
				if (($ & 224) == 192) {
					C += String.fromCharCode(($ & 31) << 6 | D);
					continue
				}
				var V = P[i++] & 63;
				if (($ & 240) == 224 ? $ = ($ & 15) << 12 | D << 6 | V : $ = ($ & 7) << 18 | D << 12 | V << 6 | P[i++] & 63, $ < 65536) C += String.fromCharCode($);
				else {
					var B = $ - 65536;
					C += String.fromCharCode(55296 | B >> 10, 56320 | B & 1023)
				}
			}
			return C
		}

		function G(P, i) {
			return P ? Z(je, P, i) : ""
		}

		function q(P, i, u, v) {
			if (!(v > 0)) return 0;
			for (var C = u, $ = u + v - 1, D = 0; D < P.length; ++D) {
				var V = P.charCodeAt(D);
				if (V >= 55296 && V <= 57343) {
					var B = P.charCodeAt(++D);
					V = 65536 + ((V & 1023) << 10) | B & 1023
				}
				if (V <= 127) {
					if (u >= $) break;
					i[u++] = V
				} else if (V <= 2047) {
					if (u + 1 >= $) break;
					i[u++] = 192 | V >> 6, i[u++] = 128 | V & 63
				} else if (V <= 65535) {
					if (u + 2 >= $) break;
					i[u++] = 224 | V >> 12, i[u++] = 128 | V >> 6 & 63, i[u++] = 128 | V & 63
				} else {
					if (u + 3 >= $) break;
					i[u++] = 240 | V >> 18, i[u++] = 128 | V >> 12 & 63, i[u++] = 128 | V >> 6 & 63, i[u++] = 128 | V & 63
				}
			}
			return i[u] = 0, u - C
		}

		function Ee(P, i, u) {
			return q(P, je, i, u)
		}

		function Te(P) {
			for (var i = 0, u = 0; u < P.length; ++u) {
				var v = P.charCodeAt(u);
				v <= 127 ? i++ : v <= 2047 ? i += 2 : v >= 55296 && v <= 57343 ? (i += 4, ++u) : i += 3
			}
			return i
		}
		var Ue, je, Ae, Ve, $e, Me, xe, ke;

		function sr() {
			var P = Ce.buffer;
			r.HEAP8 = Ue = new Int8Array(P), r.HEAP16 = Ae = new Int16Array(P), r.HEAP32 = $e = new Int32Array(P), r.HEAPU8 = je = new Uint8Array(P), r.HEAPU16 = Ve = new Uint16Array(P), r.HEAPU32 = Me = new Uint32Array(P), r.HEAPF32 = xe = new Float32Array(P), r.HEAPF64 = ke = new Float64Array(P)
		}
		var Be, Ne = [],
			zr = [],
			Pe = [];

		function ze() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) tr(r.preRun.shift());
			pn(Ne)
		}

		function Ge() {
			pn(zr)
		}

		function qe() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) fn(r.postRun.shift());
			pn(Pe)
		}

		function tr(P) {
			Ne.unshift(P)
		}

		function Er(P) {
			zr.unshift(P)
		}

		function fn(P) {
			Pe.unshift(P)
		}
		var nn = 0,
			Ze = null;

		function Mr(P) {
			nn++, r.monitorRunDependencies && r.monitorRunDependencies(nn)
		}

		function tn(P) {
			if (nn--, r.monitorRunDependencies && r.monitorRunDependencies(nn), nn == 0 && Ze) {
				var i = Ze;
				Ze = null, i()
			}
		}

		function wn(P) {
			r.onAbort && r.onAbort(P), P = "Aborted(" + P + ")", ce(P), Qe = !0, P += ". Build with -sASSERTIONS for more info.";
			var i = new WebAssembly.RuntimeError(P);
			throw o(i), i
		}
		var On = "data:application/octet-stream;base64,";

		function or(P) {
			return P.startsWith(On)
		}
		var yr;
		r.locateFile ? (yr = "webp_enc_simd.wasm", or(yr) || (yr = te(yr))) : yr = new URL(location.href +"assets/webp_enc_simd-CFvKQ_80.wasm", import.meta.url).href;

		function Fr(P) {
			try {
				if (P == yr && _e) return new Uint8Array(_e);
				if (ae) return ae(P);
				throw "both async and sync fetching of the wasm failed"
			} catch (i) {
				wn(i)
			}
		}

		function cn(P) {
			return !_e && (U || K) && typeof fetch == "function" ? fetch(P, {
				credentials: "same-origin"
			}).then(function(i) {
				if (!i.ok) throw "failed to load wasm binary file at '" + P + "'";
				return i.arrayBuffer()
			}).catch(function() {
				return Fr(P)
			}) : Promise.resolve().then(function() {
				return Fr(P)
			})
		}

		function En(P, i, u) {
			return cn(P).then(function(v) {
				return WebAssembly.instantiate(v, i)
			}).then(function(v) {
				return v
			}).then(u, function(v) {
				ce("failed to asynchronously prepare wasm: " + v), wn(v)
			})
		}

		function $r(P, i, u, v) {
			return !P && typeof WebAssembly.instantiateStreaming == "function" && !or(i) && typeof fetch == "function" ? fetch(i, {
				credentials: "same-origin"
			}).then(function(C) {
				var $ = WebAssembly.instantiateStreaming(C, u);
				return $.then(v, function(D) {
					return ce("wasm streaming compile failed: " + D), ce("falling back to ArrayBuffer instantiation"), En(i, u, v)
				})
			}) : En(i, u, v)
		}

		function dn() {
			var P = {
				a: pt
			};

			function i(v, C) {
				var $ = v.exports;
				return r.asm = $, Ce = r.asm.x, sr(), Be = r.asm.D, Er(r.asm.y), tn(), $
			}
			Mr();

			function u(v) {
				i(v.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(P, i)
			} catch (v) {
				ce("Module.instantiateWasm callback failed with error: " + v), o(v)
			}
			return $r(_e, yr, P, u).catch(o), {}
		}

		function pn(P) {
			for (; P.length > 0;) P.shift()(r)
		}

		function Xr(P) {
			this.excPtr = P, this.ptr = P - 24, this.set_type = function(i) {
				Me[this.ptr + 4 >> 2] = i
			}, this.get_type = function() {
				return Me[this.ptr + 4 >> 2]
			}, this.set_destructor = function(i) {
				Me[this.ptr + 8 >> 2] = i
			}, this.get_destructor = function() {
				return Me[this.ptr + 8 >> 2]
			}, this.set_refcount = function(i) {
				$e[this.ptr >> 2] = i
			}, this.set_caught = function(i) {
				i = i ? 1 : 0, Ue[this.ptr + 12 >> 0] = i
			}, this.get_caught = function() {
				return Ue[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(i) {
				i = i ? 1 : 0, Ue[this.ptr + 13 >> 0] = i
			}, this.get_rethrown = function() {
				return Ue[this.ptr + 13 >> 0] != 0
			}, this.init = function(i, u) {
				this.set_adjusted_ptr(0), this.set_type(i), this.set_destructor(u), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var i = $e[this.ptr >> 2];
				$e[this.ptr >> 2] = i + 1
			}, this.release_ref = function() {
				var i = $e[this.ptr >> 2];
				return $e[this.ptr >> 2] = i - 1, i === 1
			}, this.set_adjusted_ptr = function(i) {
				Me[this.ptr + 16 >> 2] = i
			}, this.get_adjusted_ptr = function() {
				return Me[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var i = ge(this.get_type());
				if (i) return Me[this.excPtr >> 2];
				var u = this.get_adjusted_ptr();
				return u !== 0 ? u : this.excPtr
			}
		}

		function Ir(P, i, u) {
			var v = new Xr(P);
			throw v.init(i, u), P
		}
		var Mn = {};

		function Dr(P) {
			for (; P.length;) {
				var i = P.pop(),
					u = P.pop();
				u(i)
			}
		}

		function Tr(P) {
			return this.fromWireType($e[P >> 2])
		}
		var bn = {},
			Ar = {},
			cr = {},
			en = 48,
			Qr = 57;

		function Or(P) {
			if (P === void 0) return "_unknown";
			P = P.replace(/[^a-zA-Z0-9_]/g, "$");
			var i = P.charCodeAt(0);
			return i >= en && i <= Qr ? "_" + P : P
		}

		function Wr(P, i) {
			return P = Or(P), {
				[P]: function() {
					return i.apply(this, arguments)
				}
			} [P]
		}

		function Zr(P, i) {
			var u = Wr(i, function(v) {
				this.name = i, this.message = v;
				var C = new Error(v).stack;
				C !== void 0 && (this.stack = this.toString() + `
` + C.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return u.prototype = Object.create(P.prototype), u.prototype.constructor = u, u.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, u
		}
		var Cr = void 0;

		function kr(P) {
			throw new Cr(P)
		}

		function Rr(P, i, u) {
			P.forEach(function(V) {
				cr[V] = i
			});

			function v(V) {
				var B = u(V);
				B.length !== P.length && kr("Mismatched type converter count");
				for (var g = 0; g < P.length; ++g) Je(P[g], B[g])
			}
			var C = new Array(i.length),
				$ = [],
				D = 0;
			i.forEach((V, B) => {
				Ar.hasOwnProperty(V) ? C[B] = Ar[V] : ($.push(V), bn.hasOwnProperty(V) || (bn[V] = []), bn[V].push(() => {
					C[B] = Ar[V], ++D, D === $.length && v(C)
				}))
			}), $.length === 0 && v(C)
		}

		function Jr(P) {
			var i = Mn[P];
			delete Mn[P];
			var u = i.rawConstructor,
				v = i.rawDestructor,
				C = i.fields,
				$ = C.map(D => D.getterReturnType).concat(C.map(D => D.setterArgumentType));
			Rr([P], $, D => {
				var V = {};
				return C.forEach((B, g) => {
					var T = B.fieldName,
						L = D[g],
						re = B.getter,
						le = B.getterContext,
						pe = D[g + C.length],
						A = B.setter,
						S = B.setterContext;
					V[T] = {
						read: M => L.fromWireType(re(le, M)),
						write: (M, ie) => {
							var w = [];
							A(S, M, pe.toWireType(w, ie)), Dr(w)
						}
					}
				}), [{
					name: i.name,
					fromWireType: function(B) {
						var g = {};
						for (var T in V) g[T] = V[T].read(B);
						return v(B), g
					},
					toWireType: function(B, g) {
						for (var T in V)
							if (!(T in g)) throw new TypeError('Missing field:  "' + T + '"');
						var L = u();
						for (T in V) V[T].write(L, g[T]);
						return B !== null && B.push(v, L), L
					},
					argPackAdvance: 8,
					readValueFromPointer: Tr,
					destructorFunction: v
				}]
			})
		}

		function pr(P, i, u, v, C) {}

		function on(P) {
			switch (P) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + P)
			}
		}

		function br() {
			for (var P = new Array(256), i = 0; i < 256; ++i) P[i] = String.fromCharCode(i);
			xr = P
		}
		var xr = void 0;

		function Sr(P) {
			for (var i = "", u = P; je[u];) i += xr[je[u++]];
			return i
		}
		var Br = void 0;

		function mr(P) {
			throw new Br(P)
		}

		function Je(P, i, u = {}) {
			if (!("argPackAdvance" in i)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var v = i.name;
			if (P || mr('type "' + v + '" must have a positive integer typeid pointer'), Ar.hasOwnProperty(P)) {
				if (u.ignoreDuplicateRegistrations) return;
				mr("Cannot register type '" + v + "' twice")
			}
			if (Ar[P] = i, delete cr[P], bn.hasOwnProperty(P)) {
				var C = bn[P];
				delete bn[P], C.forEach($ => $())
			}
		}

		function wr(P, i, u, v, C) {
			var $ = on(u);
			i = Sr(i), Je(P, {
				name: i,
				fromWireType: function(D) {
					return !!D
				},
				toWireType: function(D, V) {
					return V ? v : C
				},
				argPackAdvance: 8,
				readValueFromPointer: function(D) {
					var V;
					if (u === 1) V = Ue;
					else if (u === 2) V = Ae;
					else if (u === 4) V = $e;
					else throw new TypeError("Unknown boolean type size: " + i);
					return this.fromWireType(V[D >> $])
				},
				destructorFunction: null
			})
		}
		var hr = [],
			Ur = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function lr(P) {
			P > 4 && --Ur[P].refcount === 0 && (Ur[P] = void 0, hr.push(P))
		}

		function we() {
			for (var P = 0, i = 5; i < Ur.length; ++i) Ur[i] !== void 0 && ++P;
			return P
		}

		function Rn() {
			for (var P = 5; P < Ur.length; ++P)
				if (Ur[P] !== void 0) return Ur[P];
			return null
		}

		function dr() {
			r.count_emval_handles = we, r.get_first_emval = Rn
		}
		var Re = {
			toValue: P => (P || mr("Cannot use deleted val. handle = " + P), Ur[P].value),
			toHandle: P => {
				switch (P) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var i = hr.length ? hr.pop() : Ur.length;
						return Ur[i] = {
							refcount: 1,
							value: P
						}, i
					}
				}
			}
		};

		function an(P, i) {
			i = Sr(i), Je(P, {
				name: i,
				fromWireType: function(u) {
					var v = Re.toValue(u);
					return lr(u), v
				},
				toWireType: function(u, v) {
					return Re.toHandle(v)
				},
				argPackAdvance: 8,
				readValueFromPointer: Tr,
				destructorFunction: null
			})
		}

		function Yr(P, i, u) {
			if (P[i].overloadTable === void 0) {
				var v = P[i];
				P[i] = function() {
					return P[i].overloadTable.hasOwnProperty(arguments.length) || mr("Function '" + u + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + P[i].overloadTable + ")!"), P[i].overloadTable[arguments.length].apply(this, arguments)
				}, P[i].overloadTable = [], P[i].overloadTable[v.argCount] = v
			}
		}

		function vn(P, i, u) {
			r.hasOwnProperty(P) ? ((u === void 0 || r[P].overloadTable !== void 0 && r[P].overloadTable[u] !== void 0) && mr("Cannot register public name '" + P + "' twice"), Yr(r, P, P), r.hasOwnProperty(u) && mr("Cannot register multiple overloads of a function with the same number of arguments (" + u + ")!"), r[P].overloadTable[u] = i) : (r[P] = i, u !== void 0 && (r[P].numArguments = u))
		}

		function Lr(P, i, u) {
			switch (i) {
				case 0:
					return function(v) {
						var C = u ? Ue : je;
						return this.fromWireType(C[v])
					};
				case 1:
					return function(v) {
						var C = u ? Ae : Ve;
						return this.fromWireType(C[v >> 1])
					};
				case 2:
					return function(v) {
						var C = u ? $e : Me;
						return this.fromWireType(C[v >> 2])
					};
				default:
					throw new TypeError("Unknown integer type: " + P)
			}
		}

		function Kr(P, i, u, v) {
			var C = on(u);
			i = Sr(i);

			function $() {}
			$.values = {}, Je(P, {
				name: i,
				constructor: $,
				fromWireType: function(D) {
					return this.constructor.values[D]
				},
				toWireType: function(D, V) {
					return V.value
				},
				argPackAdvance: 8,
				readValueFromPointer: Lr(i, C, v),
				destructorFunction: null
			}), vn(i, $)
		}

		function Ln(P) {
			var i = J(P),
				u = Sr(i);
			return I(i), u
		}

		function Hn(P, i) {
			var u = Ar[P];
			return u === void 0 && mr(i + " has unknown type " + Ln(P)), u
		}

		function Gr(P, i, u) {
			var v = Hn(P, "enum");
			i = Sr(i);
			var C = v.constructor,
				$ = Object.create(v.constructor.prototype, {
					value: {
						value: u
					},
					constructor: {
						value: Wr(v.name + "_" + i, function() {})
					}
				});
			C.values[u] = $, C[i] = $
		}

		function un(P, i) {
			switch (i) {
				case 2:
					return function(u) {
						return this.fromWireType(xe[u >> 2])
					};
				case 3:
					return function(u) {
						return this.fromWireType(ke[u >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + P)
			}
		}

		function Xn(P, i, u) {
			var v = on(u);
			i = Sr(i), Je(P, {
				name: i,
				fromWireType: function(C) {
					return C
				},
				toWireType: function(C, $) {
					return $
				},
				argPackAdvance: 8,
				readValueFromPointer: un(i, v),
				destructorFunction: null
			})
		}

		function Cn(P, i, u, v, C, $) {
			var D = i.length;
			D < 2 && mr("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var V = i[1] !== null && u !== null, B = !1, g = 1; g < i.length; ++g)
				if (i[g] !== null && i[g].destructorFunction === void 0) {
					B = !0;
					break
				} var T = i[0].name !== "void",
				L = D - 2,
				re = new Array(L),
				le = [],
				pe = [];
			return function() {
				arguments.length !== L && mr("function " + P + " called with " + arguments.length + " arguments, expected " + L + " args!"), pe.length = 0;
				var A;
				le.length = V ? 2 : 1, le[0] = C, V && (A = i[1].toWireType(pe, this), le[1] = A);
				for (var S = 0; S < L; ++S) re[S] = i[S + 2].toWireType(pe, arguments[S]), le.push(re[S]);
				var M = v.apply(null, le);

				function ie(w) {
					if (B) Dr(pe);
					else
						for (var E = V ? 1 : 2; E < i.length; E++) {
							var j = E === 1 ? A : re[E - 2];
							i[E].destructorFunction !== null && i[E].destructorFunction(j)
						}
					if (T) return i[0].fromWireType(w)
				}
				return ie(M)
			}
		}

		function Zn(P, i) {
			for (var u = [], v = 0; v < P; v++) u.push(Me[i + v * 4 >> 2]);
			return u
		}

		function hn(P, i, u) {
			r.hasOwnProperty(P) || kr("Replacing nonexistant public symbol"), r[P].overloadTable !== void 0 && u !== void 0 ? r[P].overloadTable[u] = i : (r[P] = i, r[P].argCount = u)
		}

		function mn(P, i, u) {
			var v = r["dynCall_" + P];
			return u && u.length ? v.apply(null, [i].concat(u)) : v.call(null, i)
		}
		var jr = [];

		function Hr(P) {
			var i = jr[P];
			return i || (P >= jr.length && (jr.length = P + 1), jr[P] = i = Be.get(P)), i
		}

		function Pn(P, i, u) {
			if (P.includes("j")) return mn(P, i, u);
			var v = Hr(i).apply(null, u);
			return v
		}

		function xn(P, i) {
			var u = [];
			return function() {
				return u.length = 0, Object.assign(u, arguments), Pn(P, i, u)
			}
		}

		function Fn(P, i) {
			P = Sr(P);

			function u() {
				return P.includes("j") ? xn(P, i) : Hr(i)
			}
			var v = u();
			return typeof v != "function" && mr("unknown function pointer with signature " + P + ": " + i), v
		}
		var In = void 0;

		function Wn(P, i) {
			var u = [],
				v = {};

			function C($) {
				if (!v[$] && !Ar[$]) {
					if (cr[$]) {
						cr[$].forEach(C);
						return
					}
					u.push($), v[$] = !0
				}
			}
			throw i.forEach(C), new In(P + ": " + u.map(Ln).join([", "]))
		}

		function Un(P, i, u, v, C, $, D) {
			var V = Zn(i, u);
			P = Sr(P), C = Fn(v, C), vn(P, function() {
				Wn("Cannot call " + P + " due to unbound types", V)
			}, i - 1), Rr([], V, function(B) {
				var g = [B[0], null].concat(B.slice(1));
				return hn(P, Cn(P, g, null, C, $), i - 1), []
			})
		}

		function Vn(P, i, u) {
			switch (i) {
				case 0:
					return u ? function(C) {
						return Ue[C]
					} : function(C) {
						return je[C]
					};
				case 1:
					return u ? function(C) {
						return Ae[C >> 1]
					} : function(C) {
						return Ve[C >> 1]
					};
				case 2:
					return u ? function(C) {
						return $e[C >> 2]
					} : function(C) {
						return Me[C >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + P)
			}
		}

		function Jn(P, i, u, v, C) {
			i = Sr(i);
			var $ = on(u),
				D = L => L;
			if (v === 0) {
				var V = 32 - 8 * u;
				D = L => L << V >>> V
			}
			var B = i.includes("unsigned"),
				g = (L, re) => {},
				T;
			B ? T = function(L, re) {
				return g(re, this.name), re >>> 0
			} : T = function(L, re) {
				return g(re, this.name), re
			}, Je(P, {
				name: i,
				fromWireType: D,
				toWireType: T,
				argPackAdvance: 8,
				readValueFromPointer: Vn(i, $, v !== 0),
				destructorFunction: null
			})
		}

		function ct(P, i, u) {
			var v = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				C = v[i];

			function $(D) {
				D = D >> 2;
				var V = Me,
					B = V[D],
					g = V[D + 1];
				return new C(V.buffer, g, B)
			}
			u = Sr(u), Je(P, {
				name: u,
				fromWireType: $,
				argPackAdvance: 8,
				readValueFromPointer: $
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function zn(P, i) {
			i = Sr(i);
			var u = i === "std::string";
			Je(P, {
				name: i,
				fromWireType: function(v) {
					var C = Me[v >> 2],
						$ = v + 4,
						D;
					if (u)
						for (var V = $, B = 0; B <= C; ++B) {
							var g = $ + B;
							if (B == C || je[g] == 0) {
								var T = g - V,
									L = G(V, T);
								D === void 0 ? D = L : (D += "\0", D += L), V = g + 1
							}
						} else {
							for (var re = new Array(C), B = 0; B < C; ++B) re[B] = String.fromCharCode(je[$ + B]);
							D = re.join("")
						}
					return I(v), D
				},
				toWireType: function(v, C) {
					C instanceof ArrayBuffer && (C = new Uint8Array(C));
					var $, D = typeof C == "string";
					D || C instanceof Uint8Array || C instanceof Uint8ClampedArray || C instanceof Int8Array || mr("Cannot pass non-string to std::string"), u && D ? $ = Te(C) : $ = C.length;
					var V = x(4 + $ + 1),
						B = V + 4;
					if (Me[V >> 2] = $, u && D) Ee(C, B, $ + 1);
					else if (D)
						for (var g = 0; g < $; ++g) {
							var T = C.charCodeAt(g);
							T > 255 && (I(B), mr("String has UTF-16 code units that do not fit in 8 bits")), je[B + g] = T
						} else
							for (var g = 0; g < $; ++g) je[B + g] = C[g];
					return v !== null && v.push(I, V), V
				},
				argPackAdvance: 8,
				readValueFromPointer: Tr,
				destructorFunction: function(v) {
					I(v)
				}
			})
		}

		function Bn(P, i) {
			for (var u = "", v = 0; !(v >= i / 2); ++v) {
				var C = Ae[P + v * 2 >> 1];
				if (C == 0) break;
				u += String.fromCharCode(C)
			}
			return u
		}

		function dt(P, i, u) {
			if (u === void 0 && (u = 2147483647), u < 2) return 0;
			u -= 2;
			for (var v = i, C = u < P.length * 2 ? u / 2 : P.length, $ = 0; $ < C; ++$) {
				var D = P.charCodeAt($);
				Ae[i >> 1] = D, i += 2
			}
			return Ae[i >> 1] = 0, i - v
		}

		function et(P) {
			return P.length * 2
		}

		function Pr(P, i) {
			for (var u = 0, v = ""; !(u >= i / 4);) {
				var C = $e[P + u * 4 >> 2];
				if (C == 0) break;
				if (++u, C >= 65536) {
					var $ = C - 65536;
					v += String.fromCharCode(55296 | $ >> 10, 56320 | $ & 1023)
				} else v += String.fromCharCode(C)
			}
			return v
		}

		function tt(P, i, u) {
			if (u === void 0 && (u = 2147483647), u < 4) return 0;
			for (var v = i, C = v + u - 4, $ = 0; $ < P.length; ++$) {
				var D = P.charCodeAt($);
				if (D >= 55296 && D <= 57343) {
					var V = P.charCodeAt(++$);
					D = 65536 + ((D & 1023) << 10) | V & 1023
				}
				if ($e[i >> 2] = D, i += 4, i + 4 > C) break
			}
			return $e[i >> 2] = 0, i - v
		}

		function ar(P) {
			for (var i = 0, u = 0; u < P.length; ++u) {
				var v = P.charCodeAt(u);
				v >= 55296 && v <= 57343 && ++u, i += 4
			}
			return i
		}

		function qr(P, i, u) {
			u = Sr(u);
			var v, C, $, D, V;
			i === 2 ? (v = Bn, C = dt, D = et, $ = () => Ve, V = 1) : i === 4 && (v = Pr, C = tt, D = ar, $ = () => Me, V = 2), Je(P, {
				name: u,
				fromWireType: function(B) {
					for (var g = Me[B >> 2], T = $(), L, re = B + 4, le = 0; le <= g; ++le) {
						var pe = B + 4 + le * i;
						if (le == g || T[pe >> V] == 0) {
							var A = pe - re,
								S = v(re, A);
							L === void 0 ? L = S : (L += "\0", L += S), re = pe + i
						}
					}
					return I(B), L
				},
				toWireType: function(B, g) {
					typeof g != "string" && mr("Cannot pass non-string to C++ string type " + u);
					var T = D(g),
						L = x(4 + T + i);
					return Me[L >> 2] = T >> V, C(g, L + 4, T + i), B !== null && B.push(I, L), L
				},
				argPackAdvance: 8,
				readValueFromPointer: Tr,
				destructorFunction: function(B) {
					I(B)
				}
			})
		}

		function sn(P, i, u, v, C, $) {
			Mn[P] = {
				name: Sr(i),
				rawConstructor: Fn(u, v),
				rawDestructor: Fn(C, $),
				fields: []
			}
		}

		function gn(P, i, u, v, C, $, D, V, B, g) {
			Mn[P].fields.push({
				fieldName: Sr(i),
				getterReturnType: u,
				getter: Fn(v, C),
				getterContext: $,
				setterArgumentType: D,
				setter: Fn(V, B),
				setterContext: g
			})
		}

		function Vr(P, i) {
			i = Sr(i), Je(P, {
				isVoid: !0,
				name: i,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(u, v) {}
			})
		}
		var Yn = {};

		function _n(P) {
			var i = Yn[P];
			return i === void 0 ? Sr(P) : i
		}

		function rt() {
			if (typeof globalThis == "object") return globalThis;

			function P(i) {
				i.$$$embind_global$$$ = i;
				var u = typeof $$$embind_global$$$ == "object" && i.$$$embind_global$$$ == i;
				return u || delete i.$$$embind_global$$$, u
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && P(global) ? $$$embind_global$$$ = global : typeof self == "object" && P(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function at(P) {
			return P === 0 ? Re.toHandle(rt()) : (P = _n(P), Re.toHandle(rt()[P]))
		}

		function Tn(P) {
			P > 4 && (Ur[P].refcount += 1)
		}

		function mt(P) {
			var i = new Array(P + 1);
			return function(u, v, C) {
				i[0] = u;
				for (var $ = 0; $ < P; ++$) {
					var D = Hn(Me[v + $ * 4 >> 2], "parameter " + $);
					i[$ + 1] = D.readValueFromPointer(C), C += D.argPackAdvance
				}
				var V = new(u.bind.apply(u, i));
				return Re.toHandle(V)
			}
		}
		var Gn = {};

		function ut(P, i, u, v) {
			P = Re.toValue(P);
			var C = Gn[i];
			return C || (C = mt(i), Gn[i] = C), C(P, u, v)
		}

		function Qn() {
			wn("")
		}

		function $n(P, i, u) {
			je.copyWithin(P, i, i + u)
		}

		function nt() {
			return 2147483648
		}

		function lt(P) {
			var i = Ce.buffer;
			try {
				return Ce.grow(P - i.byteLength + 65535 >>> 16), sr(), 1
			} catch {}
		}

		function it(P) {
			var i = je.length;
			P = P >>> 0;
			var u = nt();
			if (P > u) return !1;
			let v = (B, g) => B + (g - B % g) % g;
			for (var C = 1; C <= 4; C *= 2) {
				var $ = i * (1 + .2 / C);
				$ = Math.min($, P + 100663296);
				var D = Math.min(u, v(Math.max(P, $), 65536)),
					V = lt(D);
				if (V) return !0
			}
			return !1
		}
		Cr = r.InternalError = Zr(Error, "InternalError"), br(), Br = r.BindingError = Zr(Error, "BindingError"), dr(), In = r.UnboundTypeError = Zr(Error, "UnboundTypeError");
		var pt = {
			k: Ir,
			m: Jr,
			o: pr,
			t: wr,
			s: an,
			q: Kr,
			d: Gr,
			h: Xn,
			f: Un,
			c: Jn,
			b: ct,
			i: zn,
			e: qr,
			n: sn,
			a: gn,
			u: Vr,
			j: lr,
			w: at,
			l: Tn,
			v: ut,
			g: Qn,
			r: $n,
			p: it
		};
		dn();
		var x = function() {
				return (x = r.asm.z).apply(null, arguments)
			},
			I = function() {
				return (I = r.asm.A).apply(null, arguments)
			},
			J = r.___getTypeName = function() {
				return (J = r.___getTypeName = r.asm.B).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.C).apply(null, arguments)
		};
		var ge = function() {
			return (ge = r.asm.E).apply(null, arguments)
		};
		r.dynCall_jiiii = function() {
			return (r.dynCall_jiiii = r.asm.F).apply(null, arguments)
		};
		var be;
		Ze = function P() {
			be || Fe(), be || (Ze = P)
		};

		function Fe() {
			if (nn > 0 || (ze(), nn > 0)) return;

			function P() {
				be || (be = !0, r.calledRun = !0, !Qe && (Ge(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), qe()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), P()
			}, 1)) : P()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return Fe(), r.ready
	}
})();
const uy = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: ay
}, Symbol.toStringTag, {
	value: "Module"
}));
var ly = (() => {
	var e = import.meta.url;
	return function(r = {}) {
		var r = typeof r < "u" ? r : {},
			t, o;
		r.ready = new Promise(function(i, u) {
			t = i, o = u
		});
		const p = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0,
			k = typeof process == "object" && process.release && process.release.name === "node";
		(p || k) && (globalThis.ImageData || (globalThis.ImageData = class {
			constructor(u, v, C) {
				this.data = u, this.width = v, this.height = C
			}
		}), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
			href: ""
		}));
		var U = Object.assign({}, r),
			K = typeof window == "object",
			f = typeof importScripts == "function";
		typeof process == "object" && typeof process.versions == "object" && process.versions.node;
		var te = "";

		function ae(i) {
			return r.locateFile ? r.locateFile(i, te) : te + i
		}
		var ce;
		(K || f) && (f ? te = self.location.href : typeof document < "u" && document.currentScript && (te = document.currentScript.src), e && (te = e), te.indexOf("blob:") !== 0 ? te = te.substr(0, te.replace(/[?#].*/, "").lastIndexOf("/") + 1) : te = "", f && (ce = i => {
			var u = new XMLHttpRequest;
			return u.open("GET", i, !1), u.responseType = "arraybuffer", u.send(null), new Uint8Array(u.response)
		})), r.print || console.log.bind(console);
		var _e = r.printErr || console.warn.bind(console);
		Object.assign(r, U), U = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
		var Ce;
		r.wasmBinary && (Ce = r.wasmBinary), r.noExitRuntime, typeof WebAssembly != "object" && On("no native wasm support detected");
		var Qe, Z = !1;

		function G(i, u, v) {
			for (var C = u + v, $ = ""; !(u >= C);) {
				var D = i[u++];
				if (!D) return $;
				if (!(D & 128)) {
					$ += String.fromCharCode(D);
					continue
				}
				var V = i[u++] & 63;
				if ((D & 224) == 192) {
					$ += String.fromCharCode((D & 31) << 6 | V);
					continue
				}
				var B = i[u++] & 63;
				if ((D & 240) == 224 ? D = (D & 15) << 12 | V << 6 | B : D = (D & 7) << 18 | V << 12 | B << 6 | i[u++] & 63, D < 65536) $ += String.fromCharCode(D);
				else {
					var g = D - 65536;
					$ += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023)
				}
			}
			return $
		}

		function q(i, u) {
			return i ? G(Ae, i, u) : ""
		}

		function Ee(i, u, v, C) {
			if (!(C > 0)) return 0;
			for (var $ = v, D = v + C - 1, V = 0; V < i.length; ++V) {
				var B = i.charCodeAt(V);
				if (B >= 55296 && B <= 57343) {
					var g = i.charCodeAt(++V);
					B = 65536 + ((B & 1023) << 10) | g & 1023
				}
				if (B <= 127) {
					if (v >= D) break;
					u[v++] = B
				} else if (B <= 2047) {
					if (v + 1 >= D) break;
					u[v++] = 192 | B >> 6, u[v++] = 128 | B & 63
				} else if (B <= 65535) {
					if (v + 2 >= D) break;
					u[v++] = 224 | B >> 12, u[v++] = 128 | B >> 6 & 63, u[v++] = 128 | B & 63
				} else {
					if (v + 3 >= D) break;
					u[v++] = 240 | B >> 18, u[v++] = 128 | B >> 12 & 63, u[v++] = 128 | B >> 6 & 63, u[v++] = 128 | B & 63
				}
			}
			return u[v] = 0, v - $
		}

		function Te(i, u, v) {
			return Ee(i, Ae, u, v)
		}

		function Ue(i) {
			for (var u = 0, v = 0; v < i.length; ++v) {
				var C = i.charCodeAt(v);
				C <= 127 ? u++ : C <= 2047 ? u += 2 : C >= 55296 && C <= 57343 ? (u += 4, ++v) : u += 3
			}
			return u
		}
		var je, Ae, Ve, $e, Me, xe, ke, sr;

		function Be() {
			var i = Qe.buffer;
			r.HEAP8 = je = new Int8Array(i), r.HEAP16 = Ve = new Int16Array(i), r.HEAP32 = Me = new Int32Array(i), r.HEAPU8 = Ae = new Uint8Array(i), r.HEAPU16 = $e = new Uint16Array(i), r.HEAPU32 = xe = new Uint32Array(i), r.HEAPF32 = ke = new Float32Array(i), r.HEAPF64 = sr = new Float64Array(i)
		}
		var Ne, zr = [],
			Pe = [],
			ze = [];

		function Ge() {
			if (r.preRun)
				for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length;) Er(r.preRun.shift());
			Xr(zr)
		}

		function qe() {
			Xr(Pe)
		}

		function tr() {
			if (r.postRun)
				for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length;) nn(r.postRun.shift());
			Xr(ze)
		}

		function Er(i) {
			zr.unshift(i)
		}

		function fn(i) {
			Pe.unshift(i)
		}

		function nn(i) {
			ze.unshift(i)
		}
		var Ze = 0,
			Mr = null;

		function tn(i) {
			Ze++, r.monitorRunDependencies && r.monitorRunDependencies(Ze)
		}

		function wn(i) {
			if (Ze--, r.monitorRunDependencies && r.monitorRunDependencies(Ze), Ze == 0 && Mr) {
				var u = Mr;
				Mr = null, u()
			}
		}

		function On(i) {
			r.onAbort && r.onAbort(i), i = "Aborted(" + i + ")", _e(i), Z = !0, i += ". Build with -sASSERTIONS for more info.";
			var u = new WebAssembly.RuntimeError(i);
			throw o(u), u
		}
		var or = "data:application/octet-stream;base64,";

		function yr(i) {
			return i.startsWith(or)
		}
		var Fr;
		r.locateFile ? (Fr = "webp_enc.wasm", yr(Fr) || (Fr = ae(Fr))) : Fr = new URL(location.href +"assets/webp_enc-BpZvKflB.wasm", import.meta.url).href;

		function cn(i) {
			try {
				if (i == Fr && Ce) return new Uint8Array(Ce);
				if (ce) return ce(i);
				throw "both async and sync fetching of the wasm failed"
			} catch (u) {
				On(u)
			}
		}

		function En(i) {
			return !Ce && (K || f) && typeof fetch == "function" ? fetch(i, {
				credentials: "same-origin"
			}).then(function(u) {
				if (!u.ok) throw "failed to load wasm binary file at '" + i + "'";
				return u.arrayBuffer()
			}).catch(function() {
				return cn(i)
			}) : Promise.resolve().then(function() {
				return cn(i)
			})
		}

		function $r(i, u, v) {
			return En(i).then(function(C) {
				return WebAssembly.instantiate(C, u)
			}).then(function(C) {
				return C
			}).then(v, function(C) {
				_e("failed to asynchronously prepare wasm: " + C), On(C)
			})
		}

		function dn(i, u, v, C) {
			return !i && typeof WebAssembly.instantiateStreaming == "function" && !yr(u) && typeof fetch == "function" ? fetch(u, {
				credentials: "same-origin"
			}).then(function($) {
				var D = WebAssembly.instantiateStreaming($, v);
				return D.then(C, function(V) {
					return _e("wasm streaming compile failed: " + V), _e("falling back to ArrayBuffer instantiation"), $r(u, v, C)
				})
			}) : $r(u, v, C)
		}

		function pn() {
			var i = {
				a: x
			};

			function u(C, $) {
				var D = C.exports;
				return r.asm = D, Qe = r.asm.x, Be(), Ne = r.asm.D, fn(r.asm.y), wn(), D
			}
			tn();

			function v(C) {
				u(C.instance)
			}
			if (r.instantiateWasm) try {
				return r.instantiateWasm(i, u)
			} catch (C) {
				_e("Module.instantiateWasm callback failed with error: " + C), o(C)
			}
			return dn(Ce, Fr, i, v).catch(o), {}
		}

		function Xr(i) {
			for (; i.length > 0;) i.shift()(r)
		}

		function Ir(i) {
			this.excPtr = i, this.ptr = i - 24, this.set_type = function(u) {
				xe[this.ptr + 4 >> 2] = u
			}, this.get_type = function() {
				return xe[this.ptr + 4 >> 2]
			}, this.set_destructor = function(u) {
				xe[this.ptr + 8 >> 2] = u
			}, this.get_destructor = function() {
				return xe[this.ptr + 8 >> 2]
			}, this.set_refcount = function(u) {
				Me[this.ptr >> 2] = u
			}, this.set_caught = function(u) {
				u = u ? 1 : 0, je[this.ptr + 12 >> 0] = u
			}, this.get_caught = function() {
				return je[this.ptr + 12 >> 0] != 0
			}, this.set_rethrown = function(u) {
				u = u ? 1 : 0, je[this.ptr + 13 >> 0] = u
			}, this.get_rethrown = function() {
				return je[this.ptr + 13 >> 0] != 0
			}, this.init = function(u, v) {
				this.set_adjusted_ptr(0), this.set_type(u), this.set_destructor(v), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
			}, this.add_ref = function() {
				var u = Me[this.ptr >> 2];
				Me[this.ptr >> 2] = u + 1
			}, this.release_ref = function() {
				var u = Me[this.ptr >> 2];
				return Me[this.ptr >> 2] = u - 1, u === 1
			}, this.set_adjusted_ptr = function(u) {
				xe[this.ptr + 16 >> 2] = u
			}, this.get_adjusted_ptr = function() {
				return xe[this.ptr + 16 >> 2]
			}, this.get_exception_ptr = function() {
				var u = be(this.get_type());
				if (u) return xe[this.excPtr >> 2];
				var v = this.get_adjusted_ptr();
				return v !== 0 ? v : this.excPtr
			}
		}

		function Mn(i, u, v) {
			var C = new Ir(i);
			throw C.init(u, v), i
		}
		var Dr = {};

		function Tr(i) {
			for (; i.length;) {
				var u = i.pop(),
					v = i.pop();
				v(u)
			}
		}

		function bn(i) {
			return this.fromWireType(Me[i >> 2])
		}
		var Ar = {},
			cr = {},
			en = {},
			Qr = 48,
			Or = 57;

		function Wr(i) {
			if (i === void 0) return "_unknown";
			i = i.replace(/[^a-zA-Z0-9_]/g, "$");
			var u = i.charCodeAt(0);
			return u >= Qr && u <= Or ? "_" + i : i
		}

		function Zr(i, u) {
			return i = Wr(i), {
				[i]: function() {
					return u.apply(this, arguments)
				}
			} [i]
		}

		function Cr(i, u) {
			var v = Zr(u, function(C) {
				this.name = u, this.message = C;
				var $ = new Error(C).stack;
				$ !== void 0 && (this.stack = this.toString() + `
` + $.replace(/^Error(:[^\n]*)?\n/, ""))
			});
			return v.prototype = Object.create(i.prototype), v.prototype.constructor = v, v.prototype.toString = function() {
				return this.message === void 0 ? this.name : this.name + ": " + this.message
			}, v
		}
		var kr = void 0;

		function Rr(i) {
			throw new kr(i)
		}

		function Jr(i, u, v) {
			i.forEach(function(B) {
				en[B] = u
			});

			function C(B) {
				var g = v(B);
				g.length !== i.length && Rr("Mismatched type converter count");
				for (var T = 0; T < i.length; ++T) wr(i[T], g[T])
			}
			var $ = new Array(u.length),
				D = [],
				V = 0;
			u.forEach((B, g) => {
				cr.hasOwnProperty(B) ? $[g] = cr[B] : (D.push(B), Ar.hasOwnProperty(B) || (Ar[B] = []), Ar[B].push(() => {
					$[g] = cr[B], ++V, V === D.length && C($)
				}))
			}), D.length === 0 && C($)
		}

		function pr(i) {
			var u = Dr[i];
			delete Dr[i];
			var v = u.rawConstructor,
				C = u.rawDestructor,
				$ = u.fields,
				D = $.map(V => V.getterReturnType).concat($.map(V => V.setterArgumentType));
			Jr([i], D, V => {
				var B = {};
				return $.forEach((g, T) => {
					var L = g.fieldName,
						re = V[T],
						le = g.getter,
						pe = g.getterContext,
						A = V[T + $.length],
						S = g.setter,
						M = g.setterContext;
					B[L] = {
						read: ie => re.fromWireType(le(pe, ie)),
						write: (ie, w) => {
							var E = [];
							S(M, ie, A.toWireType(E, w)), Tr(E)
						}
					}
				}), [{
					name: u.name,
					fromWireType: function(g) {
						var T = {};
						for (var L in B) T[L] = B[L].read(g);
						return C(g), T
					},
					toWireType: function(g, T) {
						for (var L in B)
							if (!(L in T)) throw new TypeError('Missing field:  "' + L + '"');
						var re = v();
						for (L in B) B[L].write(re, T[L]);
						return g !== null && g.push(C, re), re
					},
					argPackAdvance: 8,
					readValueFromPointer: bn,
					destructorFunction: C
				}]
			})
		}

		function on(i, u, v, C, $) {}

		function br(i) {
			switch (i) {
				case 1:
					return 0;
				case 2:
					return 1;
				case 4:
					return 2;
				case 8:
					return 3;
				default:
					throw new TypeError("Unknown type size: " + i)
			}
		}

		function xr() {
			for (var i = new Array(256), u = 0; u < 256; ++u) i[u] = String.fromCharCode(u);
			Sr = i
		}
		var Sr = void 0;

		function Br(i) {
			for (var u = "", v = i; Ae[v];) u += Sr[Ae[v++]];
			return u
		}
		var mr = void 0;

		function Je(i) {
			throw new mr(i)
		}

		function wr(i, u, v = {}) {
			if (!("argPackAdvance" in u)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
			var C = u.name;
			if (i || Je('type "' + C + '" must have a positive integer typeid pointer'), cr.hasOwnProperty(i)) {
				if (v.ignoreDuplicateRegistrations) return;
				Je("Cannot register type '" + C + "' twice")
			}
			if (cr[i] = u, delete en[i], Ar.hasOwnProperty(i)) {
				var $ = Ar[i];
				delete Ar[i], $.forEach(D => D())
			}
		}

		function hr(i, u, v, C, $) {
			var D = br(v);
			u = Br(u), wr(i, {
				name: u,
				fromWireType: function(V) {
					return !!V
				},
				toWireType: function(V, B) {
					return B ? C : $
				},
				argPackAdvance: 8,
				readValueFromPointer: function(V) {
					var B;
					if (v === 1) B = je;
					else if (v === 2) B = Ve;
					else if (v === 4) B = Me;
					else throw new TypeError("Unknown boolean type size: " + u);
					return this.fromWireType(B[V >> D])
				},
				destructorFunction: null
			})
		}
		var Ur = [],
			lr = [{}, {
				value: void 0
			}, {
				value: null
			}, {
				value: !0
			}, {
				value: !1
			}];

		function we(i) {
			i > 4 && --lr[i].refcount === 0 && (lr[i] = void 0, Ur.push(i))
		}

		function Rn() {
			for (var i = 0, u = 5; u < lr.length; ++u) lr[u] !== void 0 && ++i;
			return i
		}

		function dr() {
			for (var i = 5; i < lr.length; ++i)
				if (lr[i] !== void 0) return lr[i];
			return null
		}

		function Re() {
			r.count_emval_handles = Rn, r.get_first_emval = dr
		}
		var an = {
			toValue: i => (i || Je("Cannot use deleted val. handle = " + i), lr[i].value),
			toHandle: i => {
				switch (i) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default: {
						var u = Ur.length ? Ur.pop() : lr.length;
						return lr[u] = {
							refcount: 1,
							value: i
						}, u
					}
				}
			}
		};

		function Yr(i, u) {
			u = Br(u), wr(i, {
				name: u,
				fromWireType: function(v) {
					var C = an.toValue(v);
					return we(v), C
				},
				toWireType: function(v, C) {
					return an.toHandle(C)
				},
				argPackAdvance: 8,
				readValueFromPointer: bn,
				destructorFunction: null
			})
		}

		function vn(i, u, v) {
			if (i[u].overloadTable === void 0) {
				var C = i[u];
				i[u] = function() {
					return i[u].overloadTable.hasOwnProperty(arguments.length) || Je("Function '" + v + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + i[u].overloadTable + ")!"), i[u].overloadTable[arguments.length].apply(this, arguments)
				}, i[u].overloadTable = [], i[u].overloadTable[C.argCount] = C
			}
		}

		function Lr(i, u, v) {
			r.hasOwnProperty(i) ? ((v === void 0 || r[i].overloadTable !== void 0 && r[i].overloadTable[v] !== void 0) && Je("Cannot register public name '" + i + "' twice"), vn(r, i, i), r.hasOwnProperty(v) && Je("Cannot register multiple overloads of a function with the same number of arguments (" + v + ")!"), r[i].overloadTable[v] = u) : (r[i] = u, v !== void 0 && (r[i].numArguments = v))
		}

		function Kr(i, u, v) {
			switch (u) {
				case 0:
					return function(C) {
						var $ = v ? je : Ae;
						return this.fromWireType($[C])
					};
				case 1:
					return function(C) {
						var $ = v ? Ve : $e;
						return this.fromWireType($[C >> 1])
					};
				case 2:
					return function(C) {
						var $ = v ? Me : xe;
						return this.fromWireType($[C >> 2])
					};
				default:
					throw new TypeError("Unknown integer type: " + i)
			}
		}

		function Ln(i, u, v, C) {
			var $ = br(v);
			u = Br(u);

			function D() {}
			D.values = {}, wr(i, {
				name: u,
				constructor: D,
				fromWireType: function(V) {
					return this.constructor.values[V]
				},
				toWireType: function(V, B) {
					return B.value
				},
				argPackAdvance: 8,
				readValueFromPointer: Kr(u, $, C),
				destructorFunction: null
			}), Lr(u, D)
		}

		function Hn(i) {
			var u = ge(i),
				v = Br(u);
			return J(u), v
		}

		function Gr(i, u) {
			var v = cr[i];
			return v === void 0 && Je(u + " has unknown type " + Hn(i)), v
		}

		function un(i, u, v) {
			var C = Gr(i, "enum");
			u = Br(u);
			var $ = C.constructor,
				D = Object.create(C.constructor.prototype, {
					value: {
						value: v
					},
					constructor: {
						value: Zr(C.name + "_" + u, function() {})
					}
				});
			$.values[v] = D, $[u] = D
		}

		function Xn(i, u) {
			switch (u) {
				case 2:
					return function(v) {
						return this.fromWireType(ke[v >> 2])
					};
				case 3:
					return function(v) {
						return this.fromWireType(sr[v >> 3])
					};
				default:
					throw new TypeError("Unknown float type: " + i)
			}
		}

		function Cn(i, u, v) {
			var C = br(v);
			u = Br(u), wr(i, {
				name: u,
				fromWireType: function($) {
					return $
				},
				toWireType: function($, D) {
					return D
				},
				argPackAdvance: 8,
				readValueFromPointer: Xn(u, C),
				destructorFunction: null
			})
		}

		function Zn(i, u, v, C, $, D) {
			var V = u.length;
			V < 2 && Je("argTypes array size mismatch! Must at least get return value and 'this' types!");
			for (var B = u[1] !== null && v !== null, g = !1, T = 1; T < u.length; ++T)
				if (u[T] !== null && u[T].destructorFunction === void 0) {
					g = !0;
					break
				} var L = u[0].name !== "void",
				re = V - 2,
				le = new Array(re),
				pe = [],
				A = [];
			return function() {
				arguments.length !== re && Je("function " + i + " called with " + arguments.length + " arguments, expected " + re + " args!"), A.length = 0;
				var S;
				pe.length = B ? 2 : 1, pe[0] = $, B && (S = u[1].toWireType(A, this), pe[1] = S);
				for (var M = 0; M < re; ++M) le[M] = u[M + 2].toWireType(A, arguments[M]), pe.push(le[M]);
				var ie = C.apply(null, pe);

				function w(E) {
					if (g) Tr(A);
					else
						for (var j = B ? 1 : 2; j < u.length; j++) {
							var Q = j === 1 ? S : le[j - 2];
							u[j].destructorFunction !== null && u[j].destructorFunction(Q)
						}
					if (L) return u[0].fromWireType(E)
				}
				return w(ie)
			}
		}

		function hn(i, u) {
			for (var v = [], C = 0; C < i; C++) v.push(xe[u + C * 4 >> 2]);
			return v
		}

		function mn(i, u, v) {
			r.hasOwnProperty(i) || Rr("Replacing nonexistant public symbol"), r[i].overloadTable !== void 0 && v !== void 0 ? r[i].overloadTable[v] = u : (r[i] = u, r[i].argCount = v)
		}

		function jr(i, u, v) {
			var C = r["dynCall_" + i];
			return v && v.length ? C.apply(null, [u].concat(v)) : C.call(null, u)
		}
		var Hr = [];

		function Pn(i) {
			var u = Hr[i];
			return u || (i >= Hr.length && (Hr.length = i + 1), Hr[i] = u = Ne.get(i)), u
		}

		function xn(i, u, v) {
			if (i.includes("j")) return jr(i, u, v);
			var C = Pn(u).apply(null, v);
			return C
		}

		function Fn(i, u) {
			var v = [];
			return function() {
				return v.length = 0, Object.assign(v, arguments), xn(i, u, v)
			}
		}

		function In(i, u) {
			i = Br(i);

			function v() {
				return i.includes("j") ? Fn(i, u) : Pn(u)
			}
			var C = v();
			return typeof C != "function" && Je("unknown function pointer with signature " + i + ": " + u), C
		}
		var Wn = void 0;

		function Un(i, u) {
			var v = [],
				C = {};

			function $(D) {
				if (!C[D] && !cr[D]) {
					if (en[D]) {
						en[D].forEach($);
						return
					}
					v.push(D), C[D] = !0
				}
			}
			throw u.forEach($), new Wn(i + ": " + v.map(Hn).join([", "]))
		}

		function Vn(i, u, v, C, $, D, V) {
			var B = hn(u, v);
			i = Br(i), $ = In(C, $), Lr(i, function() {
				Un("Cannot call " + i + " due to unbound types", B)
			}, u - 1), Jr([], B, function(g) {
				var T = [g[0], null].concat(g.slice(1));
				return mn(i, Zn(i, T, null, $, D), u - 1), []
			})
		}

		function Jn(i, u, v) {
			switch (u) {
				case 0:
					return v ? function($) {
						return je[$]
					} : function($) {
						return Ae[$]
					};
				case 1:
					return v ? function($) {
						return Ve[$ >> 1]
					} : function($) {
						return $e[$ >> 1]
					};
				case 2:
					return v ? function($) {
						return Me[$ >> 2]
					} : function($) {
						return xe[$ >> 2]
					};
				default:
					throw new TypeError("Unknown integer type: " + i)
			}
		}

		function ct(i, u, v, C, $) {
			u = Br(u);
			var D = br(v),
				V = re => re;
			if (C === 0) {
				var B = 32 - 8 * v;
				V = re => re << B >>> B
			}
			var g = u.includes("unsigned"),
				T = (re, le) => {},
				L;
			g ? L = function(re, le) {
				return T(le, this.name), le >>> 0
			} : L = function(re, le) {
				return T(le, this.name), le
			}, wr(i, {
				name: u,
				fromWireType: V,
				toWireType: L,
				argPackAdvance: 8,
				readValueFromPointer: Jn(u, D, C !== 0),
				destructorFunction: null
			})
		}

		function zn(i, u, v) {
			var C = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
				$ = C[u];

			function D(V) {
				V = V >> 2;
				var B = xe,
					g = B[V],
					T = B[V + 1];
				return new $(B.buffer, T, g)
			}
			v = Br(v), wr(i, {
				name: v,
				fromWireType: D,
				argPackAdvance: 8,
				readValueFromPointer: D
			}, {
				ignoreDuplicateRegistrations: !0
			})
		}

		function Bn(i, u) {
			u = Br(u);
			var v = u === "std::string";
			wr(i, {
				name: u,
				fromWireType: function(C) {
					var $ = xe[C >> 2],
						D = C + 4,
						V;
					if (v)
						for (var B = D, g = 0; g <= $; ++g) {
							var T = D + g;
							if (g == $ || Ae[T] == 0) {
								var L = T - B,
									re = q(B, L);
								V === void 0 ? V = re : (V += "\0", V += re), B = T + 1
							}
						} else {
							for (var le = new Array($), g = 0; g < $; ++g) le[g] = String.fromCharCode(Ae[D + g]);
							V = le.join("")
						}
					return J(C), V
				},
				toWireType: function(C, $) {
					$ instanceof ArrayBuffer && ($ = new Uint8Array($));
					var D, V = typeof $ == "string";
					V || $ instanceof Uint8Array || $ instanceof Uint8ClampedArray || $ instanceof Int8Array || Je("Cannot pass non-string to std::string"), v && V ? D = Ue($) : D = $.length;
					var B = I(4 + D + 1),
						g = B + 4;
					if (xe[B >> 2] = D, v && V) Te($, g, D + 1);
					else if (V)
						for (var T = 0; T < D; ++T) {
							var L = $.charCodeAt(T);
							L > 255 && (J(g), Je("String has UTF-16 code units that do not fit in 8 bits")), Ae[g + T] = L
						} else
							for (var T = 0; T < D; ++T) Ae[g + T] = $[T];
					return C !== null && C.push(J, B), B
				},
				argPackAdvance: 8,
				readValueFromPointer: bn,
				destructorFunction: function(C) {
					J(C)
				}
			})
		}

		function dt(i, u) {
			for (var v = "", C = 0; !(C >= u / 2); ++C) {
				var $ = Ve[i + C * 2 >> 1];
				if ($ == 0) break;
				v += String.fromCharCode($)
			}
			return v
		}

		function et(i, u, v) {
			if (v === void 0 && (v = 2147483647), v < 2) return 0;
			v -= 2;
			for (var C = u, $ = v < i.length * 2 ? v / 2 : i.length, D = 0; D < $; ++D) {
				var V = i.charCodeAt(D);
				Ve[u >> 1] = V, u += 2
			}
			return Ve[u >> 1] = 0, u - C
		}

		function Pr(i) {
			return i.length * 2
		}

		function tt(i, u) {
			for (var v = 0, C = ""; !(v >= u / 4);) {
				var $ = Me[i + v * 4 >> 2];
				if ($ == 0) break;
				if (++v, $ >= 65536) {
					var D = $ - 65536;
					C += String.fromCharCode(55296 | D >> 10, 56320 | D & 1023)
				} else C += String.fromCharCode($)
			}
			return C
		}

		function ar(i, u, v) {
			if (v === void 0 && (v = 2147483647), v < 4) return 0;
			for (var C = u, $ = C + v - 4, D = 0; D < i.length; ++D) {
				var V = i.charCodeAt(D);
				if (V >= 55296 && V <= 57343) {
					var B = i.charCodeAt(++D);
					V = 65536 + ((V & 1023) << 10) | B & 1023
				}
				if (Me[u >> 2] = V, u += 4, u + 4 > $) break
			}
			return Me[u >> 2] = 0, u - C
		}

		function qr(i) {
			for (var u = 0, v = 0; v < i.length; ++v) {
				var C = i.charCodeAt(v);
				C >= 55296 && C <= 57343 && ++v, u += 4
			}
			return u
		}

		function sn(i, u, v) {
			v = Br(v);
			var C, $, D, V, B;
			u === 2 ? (C = dt, $ = et, V = Pr, D = () => $e, B = 1) : u === 4 && (C = tt, $ = ar, V = qr, D = () => xe, B = 2), wr(i, {
				name: v,
				fromWireType: function(g) {
					for (var T = xe[g >> 2], L = D(), re, le = g + 4, pe = 0; pe <= T; ++pe) {
						var A = g + 4 + pe * u;
						if (pe == T || L[A >> B] == 0) {
							var S = A - le,
								M = C(le, S);
							re === void 0 ? re = M : (re += "\0", re += M), le = A + u
						}
					}
					return J(g), re
				},
				toWireType: function(g, T) {
					typeof T != "string" && Je("Cannot pass non-string to C++ string type " + v);
					var L = V(T),
						re = I(4 + L + u);
					return xe[re >> 2] = L >> B, $(T, re + 4, L + u), g !== null && g.push(J, re), re
				},
				argPackAdvance: 8,
				readValueFromPointer: bn,
				destructorFunction: function(g) {
					J(g)
				}
			})
		}

		function gn(i, u, v, C, $, D) {
			Dr[i] = {
				name: Br(u),
				rawConstructor: In(v, C),
				rawDestructor: In($, D),
				fields: []
			}
		}

		function Vr(i, u, v, C, $, D, V, B, g, T) {
			Dr[i].fields.push({
				fieldName: Br(u),
				getterReturnType: v,
				getter: In(C, $),
				getterContext: D,
				setterArgumentType: V,
				setter: In(B, g),
				setterContext: T
			})
		}

		function Yn(i, u) {
			u = Br(u), wr(i, {
				isVoid: !0,
				name: u,
				argPackAdvance: 0,
				fromWireType: function() {},
				toWireType: function(v, C) {}
			})
		}
		var _n = {};

		function rt(i) {
			var u = _n[i];
			return u === void 0 ? Br(i) : u
		}

		function at() {
			if (typeof globalThis == "object") return globalThis;

			function i(u) {
				u.$$$embind_global$$$ = u;
				var v = typeof $$$embind_global$$$ == "object" && u.$$$embind_global$$$ == u;
				return v || delete u.$$$embind_global$$$, v
			}
			if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && i(global) ? $$$embind_global$$$ = global : typeof self == "object" && i(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
			throw Error("unable to get global object.")
		}

		function Tn(i) {
			return i === 0 ? an.toHandle(at()) : (i = rt(i), an.toHandle(at()[i]))
		}

		function mt(i) {
			i > 4 && (lr[i].refcount += 1)
		}

		function Gn(i) {
			var u = new Array(i + 1);
			return function(v, C, $) {
				u[0] = v;
				for (var D = 0; D < i; ++D) {
					var V = Gr(xe[C + D * 4 >> 2], "parameter " + D);
					u[D + 1] = V.readValueFromPointer($), $ += V.argPackAdvance
				}
				var B = new(v.bind.apply(v, u));
				return an.toHandle(B)
			}
		}
		var ut = {};

		function Qn(i, u, v, C) {
			i = an.toValue(i);
			var $ = ut[u];
			return $ || ($ = Gn(u), ut[u] = $), $(i, v, C)
		}

		function $n() {
			On("")
		}

		function nt(i, u, v) {
			Ae.copyWithin(i, u, u + v)
		}

		function lt() {
			return 2147483648
		}

		function it(i) {
			var u = Qe.buffer;
			try {
				return Qe.grow(i - u.byteLength + 65535 >>> 16), Be(), 1
			} catch {}
		}

		function pt(i) {
			var u = Ae.length;
			i = i >>> 0;
			var v = lt();
			if (i > v) return !1;
			let C = (g, T) => g + (T - g % T) % T;
			for (var $ = 1; $ <= 4; $ *= 2) {
				var D = u * (1 + .2 / $);
				D = Math.min(D, i + 100663296);
				var V = Math.min(v, C(Math.max(i, D), 65536)),
					B = it(V);
				if (B) return !0
			}
			return !1
		}
		kr = r.InternalError = Cr(Error, "InternalError"), xr(), mr = r.BindingError = Cr(Error, "BindingError"), Re(), Wn = r.UnboundTypeError = Cr(Error, "UnboundTypeError");
		var x = {
			k: Mn,
			m: pr,
			o: on,
			t: hr,
			s: Yr,
			q: Ln,
			d: un,
			h: Cn,
			f: Vn,
			c: ct,
			b: zn,
			i: Bn,
			e: sn,
			n: gn,
			a: Vr,
			u: Yn,
			j: we,
			w: Tn,
			l: mt,
			v: Qn,
			g: $n,
			r: nt,
			p: pt
		};
		pn();
		var I = function() {
				return (I = r.asm.z).apply(null, arguments)
			},
			J = function() {
				return (J = r.asm.A).apply(null, arguments)
			},
			ge = r.___getTypeName = function() {
				return (ge = r.___getTypeName = r.asm.B).apply(null, arguments)
			};
		r.__embind_initialize_bindings = function() {
			return (r.__embind_initialize_bindings = r.asm.C).apply(null, arguments)
		};
		var be = function() {
				return (be = r.asm.E).apply(null, arguments)
			},
			Fe;
		Mr = function i() {
			Fe || P(), Fe || (Mr = i)
		};

		function P() {
			if (Ze > 0 || (Ge(), Ze > 0)) return;

			function i() {
				Fe || (Fe = !0, r.calledRun = !0, !Z && (qe(), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), tr()))
			}
			r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
				setTimeout(function() {
					r.setStatus("")
				}, 1), i()
			}, 1)) : i()
		}
		if (r.preInit)
			for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
		return P(), r.ready
	}
})();
const sy = Object.freeze(Object.defineProperty({
	__proto__: null,
	default: ly
}, Symbol.toStringTag, {
	value: "Module"
}));
