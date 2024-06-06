import { inject as ce, defineComponent as P, ref as Y, watch as K, createVNode as $, Fragment as se, mergeProps as ue, openBlock as de, createElementBlock as fe, createElementVNode as he, createTextVNode as me, computed as le, unref as Z } from "vue";
import { NDataTable as ye, NEmpty as ge, NModal as pe, NIcon as $e, createDiscreteApi as ve, NForm as we } from "naive-ui";
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var ee;
(function(i) {
  i.pop = "pop", i.push = "push";
})(ee || (ee = {}));
var te;
(function(i) {
  i.back = "back", i.forward = "forward", i.unknown = "";
})(te || (te = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var re;
(function(i) {
  i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
})(re || (re = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const _e = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Me() {
  return ce(_e);
}
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Se(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ae = { exports: {} };
(function(i, m) {
  (function(v, w) {
    i.exports = w();
  })(De, function() {
    var v = 1e3, w = 6e4, M = 36e5, y = "millisecond", e = "second", f = "minute", g = "hour", x = "day", O = "week", _ = "month", D = "quarter", b = "year", u = "date", c = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, G = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(l) {
      var n = ["th", "st", "nd", "rd"], t = l % 100;
      return "[" + l + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, L = function(l, n, t) {
      var s = String(l);
      return !s || s.length >= n ? l : "" + Array(n + 1 - s.length).join(t) + l;
    }, oe = { s: L, z: function(l) {
      var n = -l.utcOffset(), t = Math.abs(n), s = Math.floor(t / 60), r = t % 60;
      return (n <= 0 ? "+" : "-") + L(s, 2, "0") + ":" + L(r, 2, "0");
    }, m: function l(n, t) {
      if (n.date() < t.date())
        return -l(t, n);
      var s = 12 * (t.year() - n.year()) + (t.month() - n.month()), r = n.clone().add(s, _), a = t - r < 0, o = n.clone().add(s + (a ? -1 : 1), _);
      return +(-(s + (t - r) / (a ? r - o : o - r)) || 0);
    }, a: function(l) {
      return l < 0 ? Math.ceil(l) || 0 : Math.floor(l);
    }, p: function(l) {
      return { M: _, y: b, w: O, d: x, D: u, h: g, m: f, s: e, ms: y, Q: D }[l] || String(l || "").toLowerCase().replace(/s$/, "");
    }, u: function(l) {
      return l === void 0;
    } }, F = "en", A = {};
    A[F] = T;
    var R = "$isDayjsObject", Q = function(l) {
      return l instanceof U || !(!l || !l[R]);
    }, J = function l(n, t, s) {
      var r;
      if (!n)
        return F;
      if (typeof n == "string") {
        var a = n.toLowerCase();
        A[a] && (r = a), t && (A[a] = t, r = a);
        var o = n.split("-");
        if (!r && o.length > 1)
          return l(o[0]);
      } else {
        var h = n.name;
        A[h] = n, r = h;
      }
      return !s && r && (F = r), r || !s && F;
    }, S = function(l, n) {
      if (Q(l))
        return l.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = l, t.args = arguments, new U(t);
    }, d = oe;
    d.l = J, d.i = Q, d.w = function(l, n) {
      return S(l, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var U = function() {
      function l(t) {
        this.$L = J(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[R] = !0;
      }
      var n = l.prototype;
      return n.parse = function(t) {
        this.$d = function(s) {
          var r = s.date, a = s.utc;
          if (r === null)
            return /* @__PURE__ */ new Date(NaN);
          if (d.u(r))
            return /* @__PURE__ */ new Date();
          if (r instanceof Date)
            return new Date(r);
          if (typeof r == "string" && !/Z$/i.test(r)) {
            var o = r.match(V);
            if (o) {
              var h = o[2] - 1 || 0, p = (o[7] || "0").substring(0, 3);
              return a ? new Date(Date.UTC(o[1], h, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, p)) : new Date(o[1], h, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, p);
            }
          }
          return new Date(r);
        }(t), this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return d;
      }, n.isValid = function() {
        return this.$d.toString() !== c;
      }, n.isSame = function(t, s) {
        var r = S(t);
        return this.startOf(s) <= r && r <= this.endOf(s);
      }, n.isAfter = function(t, s) {
        return S(t) < this.startOf(s);
      }, n.isBefore = function(t, s) {
        return this.endOf(s) < S(t);
      }, n.$g = function(t, s, r) {
        return d.u(t) ? this[s] : this.set(r, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, s) {
        var r = this, a = !!d.u(s) || s, o = d.p(t), h = function(I, N) {
          var q = d.w(r.$u ? Date.UTC(r.$y, N, I) : new Date(r.$y, N, I), r);
          return a ? q : q.endOf(x);
        }, p = function(I, N) {
          return d.w(r.toDate()[I].apply(r.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N)), r);
        }, k = this.$W, C = this.$M, E = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (o) {
          case b:
            return a ? h(1, 0) : h(31, 11);
          case _:
            return a ? h(1, C) : h(0, C + 1);
          case O:
            var H = this.$locale().weekStart || 0, X = (k < H ? k + 7 : k) - H;
            return h(a ? E - X : E + (6 - X), C);
          case x:
          case u:
            return p(W + "Hours", 0);
          case g:
            return p(W + "Minutes", 1);
          case f:
            return p(W + "Seconds", 2);
          case e:
            return p(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, s) {
        var r, a = d.p(t), o = "set" + (this.$u ? "UTC" : ""), h = (r = {}, r[x] = o + "Date", r[u] = o + "Date", r[_] = o + "Month", r[b] = o + "FullYear", r[g] = o + "Hours", r[f] = o + "Minutes", r[e] = o + "Seconds", r[y] = o + "Milliseconds", r)[a], p = a === x ? this.$D + (s - this.$W) : s;
        if (a === _ || a === b) {
          var k = this.clone().set(u, 1);
          k.$d[h](p), k.init(), this.$d = k.set(u, Math.min(this.$D, k.daysInMonth())).$d;
        } else
          h && this.$d[h](p);
        return this.init(), this;
      }, n.set = function(t, s) {
        return this.clone().$set(t, s);
      }, n.get = function(t) {
        return this[d.p(t)]();
      }, n.add = function(t, s) {
        var r, a = this;
        t = Number(t);
        var o = d.p(s), h = function(C) {
          var E = S(a);
          return d.w(E.date(E.date() + Math.round(C * t)), a);
        };
        if (o === _)
          return this.set(_, this.$M + t);
        if (o === b)
          return this.set(b, this.$y + t);
        if (o === x)
          return h(1);
        if (o === O)
          return h(7);
        var p = (r = {}, r[f] = w, r[g] = M, r[e] = v, r)[o] || 1, k = this.$d.getTime() + t * p;
        return d.w(k, this);
      }, n.subtract = function(t, s) {
        return this.add(-1 * t, s);
      }, n.format = function(t) {
        var s = this, r = this.$locale();
        if (!this.isValid())
          return r.invalidDate || c;
        var a = t || "YYYY-MM-DDTHH:mm:ssZ", o = d.z(this), h = this.$H, p = this.$m, k = this.$M, C = r.weekdays, E = r.months, W = r.meridiem, H = function(N, q, B, z) {
          return N && (N[q] || N(s, a)) || B[q].slice(0, z);
        }, X = function(N) {
          return d.s(h % 12 || 12, N, "0");
        }, I = W || function(N, q, B) {
          var z = N < 12 ? "AM" : "PM";
          return B ? z.toLowerCase() : z;
        };
        return a.replace(G, function(N, q) {
          return q || function(B) {
            switch (B) {
              case "YY":
                return String(s.$y).slice(-2);
              case "YYYY":
                return d.s(s.$y, 4, "0");
              case "M":
                return k + 1;
              case "MM":
                return d.s(k + 1, 2, "0");
              case "MMM":
                return H(r.monthsShort, k, E, 3);
              case "MMMM":
                return H(E, k);
              case "D":
                return s.$D;
              case "DD":
                return d.s(s.$D, 2, "0");
              case "d":
                return String(s.$W);
              case "dd":
                return H(r.weekdaysMin, s.$W, C, 2);
              case "ddd":
                return H(r.weekdaysShort, s.$W, C, 3);
              case "dddd":
                return C[s.$W];
              case "H":
                return String(h);
              case "HH":
                return d.s(h, 2, "0");
              case "h":
                return X(1);
              case "hh":
                return X(2);
              case "a":
                return I(h, p, !0);
              case "A":
                return I(h, p, !1);
              case "m":
                return String(p);
              case "mm":
                return d.s(p, 2, "0");
              case "s":
                return String(s.$s);
              case "ss":
                return d.s(s.$s, 2, "0");
              case "SSS":
                return d.s(s.$ms, 3, "0");
              case "Z":
                return o;
            }
            return null;
          }(N) || o.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, s, r) {
        var a, o = this, h = d.p(s), p = S(t), k = (p.utcOffset() - this.utcOffset()) * w, C = this - p, E = function() {
          return d.m(o, p);
        };
        switch (h) {
          case b:
            a = E() / 12;
            break;
          case _:
            a = E();
            break;
          case D:
            a = E() / 3;
            break;
          case O:
            a = (C - k) / 6048e5;
            break;
          case x:
            a = (C - k) / 864e5;
            break;
          case g:
            a = C / M;
            break;
          case f:
            a = C / w;
            break;
          case e:
            a = C / v;
            break;
          default:
            a = C;
        }
        return r ? a : d.a(a);
      }, n.daysInMonth = function() {
        return this.endOf(_).$D;
      }, n.$locale = function() {
        return A[this.$L];
      }, n.locale = function(t, s) {
        if (!t)
          return this.$L;
        var r = this.clone(), a = J(t, s, !0);
        return a && (r.$L = a), r;
      }, n.clone = function() {
        return d.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, l;
    }(), j = U.prototype;
    return S.prototype = j, [["$ms", y], ["$s", e], ["$m", f], ["$H", g], ["$W", x], ["$M", _], ["$y", b], ["$D", u]].forEach(function(l) {
      j[l[1]] = function(n) {
        return this.$g(n, l[0], l[1]);
      };
    }), S.extend = function(l, n) {
      return l.$i || (l(n, U, S), l.$i = !0), S;
    }, S.locale = J, S.isDayjs = Q, S.unix = function(l) {
      return S(1e3 * l);
    }, S.en = A[F], S.Ls = A, S.p = {}, S;
  });
})(ae);
var ke = ae.exports;
const Oe = /* @__PURE__ */ Se(ke);
function xe(i) {
  if (typeof i == "string")
    return !1;
  try {
    return JSON.parse(i), !0;
  } catch {
    return !1;
  }
}
const be = {
  showIcon: !1,
  autoFocus: !1,
  negativeButtonProps: {
    style: {
      minWidth: "80px"
    }
  },
  positiveButtonProps: {
    style: {
      minWidth: "80px"
    }
  }
}, ne = {
  style: {
    cursor: "pointer"
  },
  tooltip: {
    flip: !0,
    arrowPointToCenter: !0,
    contentStyle: {
      minWidth: "100px",
      maxWidth: "300px",
      maxHeight: "300px",
      overflowY: "auto",
      whiteSpace: "pre-line",
      boxSizing: "border-box",
      margin: "0 -14px",
      padding: "0 14px"
    },
    arrowStyle: {
      backgroundColor: "--n-color"
    }
  }
}, Ce = /* @__PURE__ */ P((i, {}) => {
  console.log(Me);
  const m = {
    fullPath: ""
  }, v = Y([]);
  function w(O) {
    if (i.summaryColumns)
      return [i.selectColumns, ...i.columns, i.oprColumns].reduce((_, D) => {
        var b, u;
        return D != null && D.key && (_[D.key] = ((u = (b = i.summaryColumns) == null ? void 0 : b.call(i, O)) == null ? void 0 : u[D.key]) || {
          value: null
        }), _;
      }, {});
  }
  const M = "filter_key";
  function y() {
    const O = window.localStorage.getItem(M);
    return xe(O) ? JSON.parse(O) : {};
  }
  const e = Y(y()), f = Y([]), g = Y(0);
  K(() => i.columns, () => {
    x();
  }, {
    immediate: !0
  }), K(() => i.oprColumns, (O) => {
    console.log("oprColumns", O);
  });
  function x() {
    var D, b;
    f.value = ((D = e.value) == null ? void 0 : D[m == null ? void 0 : m.fullPath]) || ((b = i.columns) == null ? void 0 : b.map((u, c) => (u == null ? void 0 : u.key) || Oe().valueOf() + c));
    const O = i.isFilter ? i.columns.filter((u) => {
      var c;
      return (c = f.value) == null ? void 0 : c.includes(u == null ? void 0 : u.key);
    }) : [...i.columns];
    i.selectColumns && O.unshift({
      key: "selectKey",
      ...i.selectColumns
    }), i.oprColumns && O.push(i.oprColumns);
    let _ = 0;
    v.value = O.map((u) => {
      var V;
      const c = {
        align: "center",
        width: 120,
        ...u,
        ellipsis: typeof (u == null ? void 0 : u.ellipsis) == "boolean" && !(u != null && u.ellipsis) ? u == null ? void 0 : u.ellipsis : typeof (u == null ? void 0 : u.ellipsis) == "object" ? {
          ...ne,
          ...u == null ? void 0 : u.ellipsis
        } : {
          ...ne
        },
        "ellipsis-component": "ellipsis"
      };
      return _ += c != null && c.width ? parseInt(c == null ? void 0 : c.width) : (((V = c == null ? void 0 : c.title) == null ? void 0 : V.length) || 0) * c.length + 30 || 0, c;
    }), g.value = _, console.log("计算");
  }
  return () => $(se, null, [$(ye, ue(i, {
    data: i.data,
    columns: v.value,
    "scroll-x": "scrollX",
    summary: i.summaryColumns ? w : void 0,
    "summary-placement": "bottom",
    pagination: i.pagination,
    "row-props": () => ({
      style: {
        height: "60px"
      }
    }),
    "flex-height": !0,
    remote: !0,
    "virtual-scroll": i.data.length > 1e3,
    style: "flex: 1"
  }), {
    empty: () => $("slot", {
      name: "empty"
    }, [$(ge, null, {
      default: () => [i.emptyText]
    })])
  })]);
}, {
  name: "Table",
  props: {
    columns: {
      type: Array,
      default: () => [{
        title: "序号",
        key: "id"
      }, {
        title: "标题",
        key: "title"
      }, {
        title: "描述",
        key: "desc"
      }, {
        title: "内容",
        key: "content"
      }]
    },
    data: {
      type: Array,
      default: () => []
    },
    summaryColumns: {
      type: [null, Function],
      default: () => null
    },
    oprColumns: {
      type: [Object, null],
      default: () => null
    },
    defaultColumns: {
      type: [Object, null],
      default: () => null
    },
    selectColumns: {
      type: [Object, null],
      default: () => null
    },
    emptyText: {
      type: String,
      default: () => "没有数据"
    },
    emptyIcon: {
      type: String,
      default: () => ""
    },
    isFilter: {
      type: Boolean,
      default: () => !1
    },
    pagination: {
      type: [],
      default: void 0
    }
  }
}), Ne = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, Ee = /* @__PURE__ */ he(
  "path",
  {
    d: "M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Te = [Ee], qe = P({
  name: "Close",
  render: function(m, v) {
    return de(), fe("svg", Ne, Te);
  }
}), Ae = /* @__PURE__ */ P((i, {
  slots: m,
  emit: v,
  expose: w
}) => {
  const M = Y(i.show);
  K(() => i.show, (f) => M.value = f), K(() => M.value, (f) => v("update:show", f));
  function y() {
  }
  function e() {
    M.value = !1;
  }
  return w({
    close: e,
    init: y
  }), () => $(se, null, [$(pe, {
    show: M.value,
    "onUpdate:show": (f) => M.value = f,
    "display-directive": "show"
  }, {
    default: () => [$("div", {
      class: "dialog_main"
    }, [$("div", {
      class: "dialog_main_header"
    }, [$("div", null, ["未定义"]), $("div", {
      class: "dialog_main_close",
      onClick: e
    }, [$($e, null, {
      default: () => [$(qe, null, null)]
    })])]), $("div", {
      class: "dialog_main_content"
    }, {
      default: m.default
    }), $("div", {
      class: "dialog_main_footer"
    }, null)])]
  })]);
}, {
  name: "Dialog",
  emits: ["update:show"],
  props: {
    show: {
      type: Boolean,
      default: () => !1
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}), He = /* @__PURE__ */ P((i, {
  slots: m
}) => () => $("div", {
  class: "main_wrap w-full h-full flex flex-col"
}, [$("div", {
  class: ""
}, [m.head()]), $("div", {
  class: "flex-1"
}, [m.default()]), $("div", {
  class: ""
}, [m.footer()])]), {
  name: "Main",
  slots: Object
}), ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NEXDialog: Ae,
  NEXMain: He,
  NEXTable: Ce
}, Symbol.toStringTag, { value: "Module" })), Ie = /* @__PURE__ */ P(() => () => $("div", null, [me("FormItem")]), {
  name: "FormItem"
});
function Xe({
  title: i = "",
  options: m = [],
  labelField: v = "label",
  isNo: w = !0,
  formProps: M = {},
  interfaceFn: y = null,
  valueData: e = null,
  isRead: f = !1,
  action: g = null,
  style: x = {}
}, O = null) {
  const _ = "$dialog" in window ? window.$dialog : ve(["dialog"]).dialog, D = Y({
    ...e
  }), b = le(() => f ? null : g ? {
    action: () => g && (g == null ? void 0 : g({
      d: u,
      formRef: c,
      data: D.value
    }))
  } : {
    positiveText: "确定",
    onPositiveClick: () => {
      var T;
      return (T = c.value) == null || T.validate((L) => {
        L || (u.loading = !0, y && y(D.value, {
          close: () => u.destroy(),
          hideLoading: () => u.loading = !1
        }));
      }), !1;
    }
  });
  let u = null;
  const c = Y();
  console.log("触发");
  const V = Ye({
    options: m,
    model: D,
    labelField: v,
    formOpr: {
      formRef: c,
      resetForm: () => {
        var T;
        return (T = c == null ? void 0 : c.value) == null ? void 0 : T.restoreValidation();
      }
    }
  });
  function G() {
    u && u.destroy(), u = _.create({
      type: "info",
      ...be,
      title: i,
      style: {
        width: "500px"
      },
      content: () => $(we, ue({
        ref: (T) => c.value = T,
        model: D.value,
        rules: f ? {} : V.value,
        "label-placement": "left",
        "label-width": "100px",
        "require-mark-placement": "right-hanging",
        class: f ? "dialog-content" : "dialog-main",
        style: {
          minHeight: w ? "unset" : null
        }
      }, M), {
        default: () => [$(Ie, {
          value: D.value,
          "onUpdate:value": (T) => D.value = T,
          d: u,
          formRef: c,
          option: m,
          labelField: v,
          isRead: f,
          style: x
        }, null)]
      }),
      ...b.value,
      ...O
    });
  }
  return {
    show: () => G(),
    close: () => u == null ? void 0 : u.destroy(),
    hideLoading: () => u.loading = !1
  };
}
function Ye({
  options: i = [],
  model: m,
  labelField: v = "label",
  formOpr: w = {}
}) {
  return le(() => (i == null ? void 0 : i.reduce((M, {
    fields: y,
    ...e
  }) => {
    var f, g;
    return Array.isArray(e == null ? void 0 : e.key) ? e.key.forEach((x) => {
      M[String(x)] = {
        required: e != null && e.required ? typeof (e == null ? void 0 : e.required) == "function" ? e == null ? void 0 : e.required(Z(m), {
          ...w
        }) : e == null ? void 0 : e.required : !1,
        message: (e == null ? void 0 : e.message) || `请选择${e == null ? void 0 : e[v]}`,
        fields: y
      };
    }) : M[e == null ? void 0 : e.key] = e != null && e.rule ? typeof (e == null ? void 0 : e.rule) != "function" ? e == null ? void 0 : e.rule : e == null ? void 0 : e.rule(Z(m), {
      ...w
    }) : y ? {
      required: e != null && e.required ? typeof (e == null ? void 0 : e.required) == "function" ? e == null ? void 0 : e.required(Z(m), {
        ...w
      }) : e == null ? void 0 : e.required : !1,
      message: (e == null ? void 0 : e.message) || `请${(f = e == null ? void 0 : e.options) != null && f.length ? "选择" : "输入"}${e == null ? void 0 : e[v]}`,
      fields: y
    } : {
      required: e != null && e.required ? typeof (e == null ? void 0 : e.required) == "function" ? e == null ? void 0 : e.required(Z(m), {
        ...w
      }) : e == null ? void 0 : e.required : !1,
      message: (e == null ? void 0 : e.message) || `请${(g = e == null ? void 0 : e.options) != null && g.length ? "选择" : "输入"}${e == null ? void 0 : e[v]}`
    }, M;
  }, {})) || {});
}
function Ve({
  components: i = [],
  componentPrfix: m = "NEX"
} = {}) {
  const v = [];
  function w(y, e, f) {
    y.component(m + e) || y.component(m + e, f);
  }
  function M(y) {
    v.includes(y) || (v.push(y), i.forEach((e) => {
      const { name: f, alias: g } = e;
      w(y, f, e), g && g.forEach((x) => w(y, x, e));
    }));
  }
  return {
    install: M
  };
}
const We = Ve({
  components: Object.keys(ie).map(
    (i) => ie[i]
  )
}), Be = We.install;
export {
  Ae as NEXDialog,
  He as NEXMain,
  Ce as NEXTable,
  We as default,
  Be as install,
  Xe as useNEXDialog
};
