import { defineComponent as m, openBlock as d, createElementBlock as f, createElementVNode as t, createTextVNode as a, unref as l, toDisplayString as b, normalizeClass as x, createBlock as h, Teleport as C, createVNode as c, Transition as y, withCtx as V, withModifiers as _, createCommentVNode as j, computed as g, ref as B } from "vue";
const I = "insurance-policy.pdf", $ = "Insurance document preview", M = "Insurance thumbnail", L = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700" }, z = ["src", "alt"], A = { class: "flex-1 min-w-0" }, U = { class: "text-sm font-semibold text-white" }, E = /* @__PURE__ */ m({
  __name: "InsurancePreview",
  props: {
    imageUrl: {}
  },
  emits: ["preview"],
  setup(o, { emit: n }) {
    const r = n;
    return (s, e) => (d(), f("div", null, [
      e[3] || (e[3] = t("p", { class: "text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3 flex items-center gap-2" }, [
        t("svg", {
          class: "w-3.5 h-3.5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          })
        ]),
        a(" Insurance Document ")
      ], -1)),
      t("div", {
        class: "flex items-center gap-4 bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 cursor-pointer hover:border-violet-500/50 transition-colors",
        onClick: e[0] || (e[0] = (i) => r("preview"))
      }, [
        t("div", L, [
          t("img", {
            src: o.imageUrl,
            alt: l(M),
            class: "w-full h-full object-cover"
          }, null, 8, z)
        ]),
        t("div", A, [
          t("p", U, b(l(I)), 1),
          e[1] || (e[1] = t("p", { class: "text-xs text-violet-400 mt-0.5 flex items-center gap-1" }, [
            t("svg", {
              class: "w-3 h-3",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              }),
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              })
            ]),
            a(" Click to preview full document ")
          ], -1))
        ]),
        e[2] || (e[2] = t("svg", {
          class: "w-4 h-4 text-slate-500 flex-shrink-0",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          })
        ], -1))
      ])
    ]));
  }
}), N = { class: "flex gap-3" }, T = /* @__PURE__ */ m({
  __name: "VerificationButtons",
  props: {
    isVerified: { type: Boolean }
  },
  emits: ["verify"],
  setup(o, { emit: n }) {
    const r = n;
    return (s, e) => (d(), f("div", null, [
      e[4] || (e[4] = t("p", { class: "text-xs text-slate-500 uppercase tracking-widest font-semibold mt-5 mb-3 flex items-center gap-2" }, [
        t("svg", {
          class: "w-3.5 h-3.5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          })
        ]),
        a(" Verification Action ")
      ], -1)),
      t("div", N, [
        t("button", {
          onClick: e[0] || (e[0] = (i) => r("verify", !0)),
          class: x([
            "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
            o.isVerified ? "bg-green-500 text-white shadow-lg shadow-green-500/20" : "bg-slate-800 text-slate-400 border border-slate-700 hover:border-green-500/40 hover:text-green-400"
          ])
        }, [...e[2] || (e[2] = [
          t("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            t("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          ], -1),
          a(" Verified ", -1)
        ])], 2),
        t("button", {
          onClick: e[1] || (e[1] = (i) => r("verify", !1)),
          class: x([
            "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
            o.isVerified ? "bg-slate-800 text-slate-400 border border-slate-700 hover:border-red-500/40 hover:text-red-400" : "bg-red-500 text-white shadow-lg shadow-red-500/20"
          ])
        }, [...e[3] || (e[3] = [
          t("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            t("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          ], -1),
          a(" Rejected ", -1)
        ])], 2)
      ])
    ]));
  }
}), H = { class: "relative max-w-2xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl" }, P = ["src", "alt"], R = /* @__PURE__ */ m({
  __name: "InsuranceLightbox",
  props: {
    open: { type: Boolean },
    imageUrl: {}
  },
  emits: ["close"],
  setup(o, { emit: n }) {
    const r = n;
    return (s, e) => (d(), h(C, { to: "body" }, [
      c(y, { name: "fade" }, {
        default: V(() => [
          o.open ? (d(), f("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6",
            onClick: e[1] || (e[1] = _((i) => r("close"), ["self"]))
          }, [
            t("div", H, [
              t("img", {
                src: o.imageUrl,
                alt: l($),
                class: "w-full object-contain max-h-[85vh] bg-slate-950"
              }, null, 8, P),
              t("button", {
                class: "absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors",
                onClick: e[0] || (e[0] = (i) => r("close")),
                "aria-label": "Close preview"
              }, [...e[2] || (e[2] = [
                t("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  t("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ])
          ])) : j("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), D = (o, n) => {
  const r = o.__vccOpts || o;
  for (const [s, e] of n)
    r[s] = e;
  return r;
}, O = /* @__PURE__ */ D(R, [["__scopeId", "data-v-0d29afdc"]]);
function S(o) {
  const n = g(() => o?.images?.[0]?.image || ""), r = g(() => o?.isVerified ?? !1);
  return {
    imageUrl: n,
    isVerified: r
  };
}
const F = { class: "bg-slate-900 rounded-2xl p-5 border border-slate-800" }, W = /* @__PURE__ */ m({
  __name: "InsuranceCard",
  props: {
    value: {}
  },
  emits: ["update:value"],
  setup(o, { emit: n }) {
    const r = o, s = n, { imageUrl: e, isVerified: i } = S(r.value), p = B(!1);
    function w(v) {
      s("update:value", { ...r.value, isVerified: v });
    }
    return (v, u) => (d(), f("div", F, [
      c(E, {
        "image-url": l(e),
        onPreview: u[0] || (u[0] = (k) => p.value = !0)
      }, null, 8, ["image-url"]),
      c(T, {
        "is-verified": l(i),
        onVerify: w
      }, null, 8, ["is-verified"]),
      c(O, {
        open: p.value,
        "image-url": l(e),
        onClose: u[1] || (u[1] = (k) => p.value = !1)
      }, null, 8, ["open", "image-url"])
    ]));
  }
}), G = {
  id: "insurance-card",
  name: "Insurance Card",
  icon: "verified",
  component: W,
  types: ["json"]
};
export {
  G as default
};
