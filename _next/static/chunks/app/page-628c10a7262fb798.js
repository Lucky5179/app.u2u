!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "d8c5f005-647f-4580-a354-69aea6a21875"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d8c5f005-647f-4580-a354-69aea6a21875"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931],
    {
      71434: function (e, t, s) {
        Promise.resolve().then(s.bind(s, 85605));
      },
      85605: function (e, t, s) {
        "use strict";
        s.r(t),
          s.d(t, {
            default: function () {
              return ez;
            },
          });
        var a,
          l,
          r,
          n,
          i = s(57437),
          o = s(2265),
          d = s(12902),
          c = s(39502),
          x = s(29501),
          p = s(34422),
          m = s(73842),
          u = s(42586),
          f = s(48534),
          b = s(83002),
          h = s(50374);
        function g(e) {
          let {
              action: t,
              className: s,
              showConnectButton: a,
              children: l,
            } = e,
            r = (0, u.useTranslations)(),
            { isValidSession: n } = (0, f.aC)(),
            { setOpen: o } = (0, b.Z)((e) => e),
            d = () => {
              "undefined" != typeof localStorage &&
                (n
                  ? null == t || t()
                  : (localStorage.removeItem("auth-storage"), o(!0)));
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className: "w-full",
              onClick: d,
              children:
                a && !n
                  ? (0, i.jsx)(h.Z, {
                      scale: "md",
                      className: "".concat(
                        s,
                        " p-4 w-full bg-[#7EFFC5] text-[#141414] hover:!bg-transparent hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid border-[#8C8C99]"
                      ),
                      onClick: d,
                      children: r("common.connect_wallet"),
                    })
                  : l,
            }),
          });
        }
        var y = s(64707),
          j = s(27526),
          w = s(16986),
          N = s(75018),
          v = s(93184),
          C = s(47284);
        let F = () => {
          let [e, t] = (0, o.useState)(!1);
          return {
            waitForTransaction: async (e) => {
              try {
                t(!0), await (0, v.e)(C.vc, { hash: e });
              } finally {
                t(!1);
              }
            },
            isLoading: e,
          };
        };
        var k = s(79946);
        let A = () => {
          let { address: e } = (0, y.m)(),
            t = (0, j.S)(),
            { waitForTransaction: s } = F(),
            { data: a } = (0, w.N)({
              contracts: [
                {
                  ...k.re.pUSDT,
                  functionName: "allowance",
                  args: [e, k.re.stakePublicV2.address],
                },
                { ...k.re.pUSDT, functionName: "balanceOf", args: [e] },
              ],
              query: { refetchInterval: 3e3, enabled: !!e },
            }),
            l = async () =>
              s(
                await t.writeContractAsync({
                  ...k.re.pUSDT,
                  functionName: "approve",
                  args: [k.re.stakePublicV2.address, N.zL],
                })
              );
          return {
            ...t,
            balanceOfUsdt: a ? a[1].result : 0,
            allowancePUSDT: a ? a[0].result : 0,
            onApprovePUsdt: l,
          };
        };
        var S = s(38480),
          E = s.n(S),
          U = s(33534),
          B = s.n(U);
        let Z = (e, t, s) =>
            t && Number(e) < t
              ? parseFloat(String(e)).toFixed(s || 2)
              : e
              ? Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                  maximumFractionDigits: 3,
                }).format(Math.trunc(Number(e)))
              : "0.00",
          I = (e, t) => {
            let s = "bigint" == typeof e ? e : BigInt(e || 0);
            return Z((0, c.b)(s, t || 6).toString(), 1e4);
          },
          T = function (e) {
            let t,
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 4;
            return (
              -1 !=
                (t = E()(e).format(
                  "0,0[.]" + "0".repeat(s),
                  Math.floor
                )).indexOf(".") && (t = B()(t, "0")),
              "." === t.substr(-1) && (t = t.replace(".", "")),
              t
            );
          };
        var D = s(45214),
          M = s(31394),
          P = (e) => {
            let { isOpen: t, onClose: s } = e,
              [a, l] = (0, o.useState)(!1),
              {
                onApprovePUsdt: r,
                isPending: n,
                isSuccess: c,
                isError: x,
              } = A(),
              p = async () => {
                try {
                  l(!0), await r();
                } catch (e) {
                  console.log(e);
                } finally {
                  l(!1);
                }
              };
            return (
              (0, o.useEffect)(() => {
                c && (M.A.success({ message: "Approve successfully!" }), s());
              }, [c]),
              (0, o.useEffect)(() => {
                x && M.A.error({ message: "Approve failed!" });
              }, [x]),
              (0, i.jsxs)(D.Z, {
                isOpen: t,
                onClose: s,
                title: "Approval Required",
                className:
                  "relative max-w-[390px] tablet:max-w-[499px] !p-8 w-full flex flex-col gap-8",
                "data-sentry-element": "Modal",
                "data-sentry-component": "ApproveModal",
                "data-sentry-source-file": "ApproveModal.tsx",
                children: [
                  (0, i.jsx)("hr", { className: "border-[#1F1F1F]" }),
                  (0, i.jsx)("h3", {
                    className: "text-lg font-semibold text-center",
                    children: "Do you want to proceed with the approval?",
                  }),
                  (0, i.jsx)(d.Z.ApproveLogo, {
                    className: "mx-auto",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "ApproveModal.tsx",
                  }),
                  (0, i.jsx)("p", {
                    className: "font-semibold text-[#929292] text-center",
                    children:
                      "To continue with staking, you need to approve the use of your pUSDT. This is a one-time authorization and will not be required again for future staking unless conditions change.",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-6 justify-between items-center",
                    children: [
                      (0, i.jsx)(h.Z, {
                        onClick: s,
                        className: "w-full py-4 px-8 rounded-lg text-[#7EFFC5]",
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "ApproveModal.tsx",
                        children: "Cancel",
                      }),
                      (0, i.jsx)(h.Z, {
                        onClick: p,
                        loading: a || n,
                        loadingText: "Approving...",
                        className:
                          "w-full py-4 px-8 rounded-lg bg-[#7EFFC5] text-[#141414] hover:!bg-transparent hover:text-[#7EFFC5]",
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "ApproveModal.tsx",
                        children: "Approve",
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          L = s(30356),
          R = (e) => {
            let { mainForm: t, fieldName: s } = e,
              {
                formState: { errors: a },
              } = t;
            return (0, i.jsx)(L.B, {
              errors: a,
              name: s,
              render: (e) => {
                let { message: t } = e;
                return (0, i.jsx)("p", {
                  className: "text-red-500 text-sm italic",
                  children: t,
                });
              },
              "data-sentry-element": "ErrorMessage",
              "data-sentry-component": "FormMessageValidate",
              "data-sentry-source-file": "FormMessageValidate.tsx",
            });
          },
          $ = s(51985),
          H = s(27323);
        let _ = () => {
            let e = (0, j.S)(),
              { waitForTransaction: t } = F(),
              { address: s } = (0, y.m)(),
              { data: a } = (0, H.u)({
                ...k.re.stakePublicV2,
                functionName: "endTime",
                args: [],
                query: {},
              }),
              { data: l } = (0, H.u)({
                ...k.re.stakePublicV2,
                functionName: "claimableTime",
                args: [],
                query: {},
              }),
              { data: r } = (0, w.N)({
                contracts: [
                  {
                    ...k.re.stakePublicV2,
                    functionName: "getUserInfo",
                    args: [s],
                  },
                  {
                    ...k.re.stakePublicV2,
                    functionName: "pendingRewards",
                    args: [s],
                  },
                ],
                query: { enabled: !!s, refetchInterval: 3e3 },
              }),
              [n, i, d] = (0, o.useMemo)(
                () => (r && r[0].result ? r[0].result : []),
                [r]
              ),
              { data: c } = (0, H.u)({
                ...k.re.stakePublicV2,
                functionName: "rewardsRatePerSecond",
                args: [],
                query: {},
              }),
              x = async (s) => {
                let { amount: a, expiresAt: l, signature: r } = s;
                return t(
                  await e.writeContractAsync({
                    ...k.re.stakePublicV2,
                    functionName: "stake",
                    args: [1e6 * a, l, r],
                  })
                );
              },
              p = async () =>
                t(
                  await e.writeContractAsync({
                    ...k.re.stakePublicV2,
                    functionName: "harvest",
                    args: [],
                  })
                ),
              m = async () =>
                t(
                  await e.writeContractAsync({
                    ...k.re.stakePublicV2,
                    functionName: "unstake",
                    args: [],
                  })
                ),
              u = async () =>
                t(
                  await e.writeContractAsync({
                    ...k.re.stakePublicV2,
                    functionName: "legacyPoolUnstake",
                    args: [],
                  })
                );
            return {
              ...e,
              onStake: x,
              endTime: a,
              rewardsRatePerSecond: c,
              getUserInfo: r && r[0].result ? r[0].result : null,
              totalStaked: n,
              latestHarvest: i,
              totalClaimed: d,
              pendingReward: r && r[1].result ? r[1].result : null,
              onClaim: p,
              onUnStakeV2: m,
              onUnStakeV1: u,
              claimableTime: l,
            };
          },
          z = () => {
            let e = (0, j.S)(),
              { waitForTransaction: t } = F(),
              { address: s } = (0, y.m)(),
              { data: a } = (0, H.u)({
                ...k.re.stakePublic,
                functionName: "endTime",
                args: [],
                query: {},
              }),
              { data: l } = (0, H.u)({
                ...k.re.stakePublic,
                functionName: "claimableTime",
                args: [],
                query: {},
              }),
              { data: r } = (0, w.N)({
                contracts: [
                  {
                    ...k.re.stakePublic,
                    functionName: "getUserInfo",
                    args: [s],
                  },
                  {
                    ...k.re.stakePublic,
                    functionName: "pendingRewards",
                    args: [s],
                  },
                ],
                query: { enabled: !!s, refetchInterval: 3e3 },
              }),
              [n, i, d] = (0, o.useMemo)(
                () => (r && r[0].result ? r[0].result : []),
                [r]
              ),
              { data: c } = (0, H.u)({
                ...k.re.stakePublic,
                functionName: "rewardsRatePerSecond",
                args: [],
                query: {},
              }),
              x = async (s) => {
                let { amount: a, expiresAt: l, signature: r } = s;
                return t(
                  await e.writeContractAsync({
                    ...k.re.stakePublic,
                    functionName: "stake",
                    args: [1e6 * a, l, r],
                  })
                );
              },
              p = async () =>
                t(
                  await e.writeContractAsync({
                    ...k.re.stakePublic,
                    functionName: "harvest",
                    args: [],
                  })
                ),
              m = async () =>
                t(
                  await e.writeContractAsync({
                    ...k.re.stakePublic,
                    functionName: "unstake",
                    args: [],
                  })
                );
            return {
              ...e,
              onStake: x,
              endTime: a,
              rewardsRatePerSecond: c,
              getUserInfo: r && r[0].result ? r[0].result : null,
              totalStaked: n,
              latestHarvest: i,
              totalClaimed: d,
              pendingReward: r && r[1].result ? r[1].result : null,
              onClaim: p,
              onUnStake: m,
              claimableTime: l,
            };
          };
        function V() {
          let { allowancePUSDT: e, balanceOfUsdt: t } = A(),
            { rewardsRatePerSecond: s, endTime: a } = _(),
            {
              onStake: l,
              isPending: r,
              isSuccess: n,
              isError: u,
              totalStaked: f,
            } = _(),
            { totalStaked: b } = z(),
            [y, j] = (0, o.useState)(!1),
            [w, N] = (0, o.useState)(Date.now()),
            [v, C] = (0, o.useState)(10),
            [F] = (0, o.useState)(1e4),
            [S, E] = (0, o.useState)(!1),
            { trigger: U } = (0, $.Y6)(),
            { trigger: B } = (0, $.Kp)(),
            Z = p.Ry({
              maxAmount: p.Rx(),
              amount: p
                .Rx()
                .transform((e) => (Number.isNaN(e) ? void 0 : e))
                .required("Amount is required")
                .min(10, "Amount must be at least 10")
                .test("balance-check", "Balance not enough", function (e) {
                  return e <= Number(t || 0) / 1e6;
                })
                .test(
                  "max-amount-check",
                  "Total amount exceeds the maximum allowed ".concat(
                    T(F, 2),
                    " $pUSDT"
                  ),
                  function (e) {
                    return (
                      e +
                        Number((0, c.b)(BigInt(f || 0), 6)) +
                        Number((0, c.b)(BigInt(b || 0), 6)) <=
                      F
                    );
                  }
                ),
            }),
            D = (0, x.cI)({
              resolver: (0, m.X)(Z),
              mode: "all",
              reValidateMode: "onChange",
              defaultValues: { amount: 10 },
            }),
            {
              handleSubmit: L,
              watch: H,
              setValue: V,
              control: W,
              reset: O,
            } = D,
            { amount: q } = H(),
            G = (0, o.useMemo)(
              () =>
                !t || Number((0, c.b)(BigInt(e || 0), 6)) >= Number(t) / 1e6,
              [e, t]
            ),
            X = async () => {
              j(!0);
            },
            Y = async () => {
              try {
                E(!0);
                let e = "public" === k.pi.toLowerCase() ? await U() : await B(),
                  t = e.data.data.sig,
                  s = e.data.data.expiresAt;
                t &&
                  s &&
                  (await l({ amount: Number(q), expiresAt: s, signature: t }));
              } catch (e) {
                console.log(e);
              } finally {
                E(!1), O();
              }
            },
            K = (e) => () => {
              if ((C(e.value), "number" === e.type)) {
                let s = Number(t || 0) / 1e6,
                  a =
                    1e4 -
                    (Number((0, c.b)(BigInt(f || 0), 6)) +
                      Number((0, c.b)(BigInt(b || 0), 6)) >=
                    1e4
                      ? 1e4
                      : Number((0, c.b)(BigInt(f || 0), 6)) +
                        Number((0, c.b)(BigInt(b || 0), 6)));
                return 1e4 === e.value
                  ? s < e.value && s < a
                    ? V("amount", s)
                    : V("amount", a)
                  : V("amount", e.value);
              }
              {
                let s = Number(t || 0) / 1e6,
                  a =
                    1e4 -
                    (Number((0, c.b)(BigInt(f || 0), 6)) +
                      Number((0, c.b)(BigInt(b || 0), 6)) >=
                    1e4
                      ? 1e4
                      : Number((0, c.b)(BigInt(f || 0), 6)) +
                        Number((0, c.b)(BigInt(b || 0), 6)));
                return s < a
                  ? V("amount", (e.value * Number(s)) / 100)
                  : V("amount", (e.value * Number(a)) / 100);
              }
            };
          (0, o.useEffect)(() => {
            let e = setInterval(() => {
              N(Date.now());
            }, 1e3);
            return () => clearInterval(e);
          }, []);
          let Q = (0, o.useMemo)(() => {
              if (s) {
                let e = 86400 * Number(s ? Number(s) * Number(q) : 0);
                return Number((0, c.b)(BigInt(1e6 * e), 18));
              }
            }, [s, q]),
            J = (0, o.useMemo)(() => {
              if (s) {
                let e = 86400 * Number(s ? Number(s) : 0);
                return Number((0, c.b)(BigInt(1e6 * e), 18));
              }
            }, [s, q]);
          (0, o.useEffect)(() => {
            n && (M.A.success({ message: "Staking successfully" }), O());
          }, [n]),
            (0, o.useEffect)(() => {
              u && (M.A.error({ message: "Staking fail" }), O());
            }, [u]);
          let ee = (0, o.useMemo)(() => {
              let e = Number(a) - w / 1e3;
              return Number(q) * Number(J) * Number(Math.floor(e / 86400));
            }, [J, a, q]),
            et = (0, o.useMemo)(() => {
              let e =
                Number((0, c.b)(BigInt(Number(f) || 0), 6)) +
                Number((0, c.b)(BigInt(Number(b) || 0), 6));
              return e >= 1e4 ? 0 : 1e4 - e;
            }, [f, b]);
          return (0, i.jsxs)(x.RV, {
            ...D,
            "data-sentry-element": "FormProvider",
            "data-sentry-component": "FormStaking",
            "data-sentry-source-file": "FormStaking.tsx",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "p-5 laptop:p-8 flex flex-col w-full gap-8 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsxs)("div", {
                        className: "p-5 rounded-2xl bg-[#1F1F1F]",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-sm laptop:text-lg font-semibold",
                                    children: "Stakeable:",
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-sm laptop:text-lg font-bold text-[#7EFFC5]",
                                    children: [T(et, 3), " $pUSDT"],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "hidden laptop:flex gap-2 items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-[#4A4A4A] text-sm laptop:text-lg",
                                    children: "pUSDT Available:",
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-[#AFAFAF] text-sm laptop:text-lg font-semibold",
                                    children: [
                                      I(Number(t) || 0, 6),
                                      " ",
                                      "$pUSDT",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "mb-2",
                            children: (0, i.jsx)(x.Qr, {
                              control: W,
                              name: "amount",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, i.jsx)("input", {
                                  ...t,
                                  type: "number",
                                  name: "",
                                  id: "",
                                  placeholder: "Ex. 10000",
                                  className:
                                    "outline-none w-full flex gap-4 justify-between px-4 py-2 border min-w-full !border-solid rounded-lg border-[#4A4A4A] mt-4 laptop:mt-8 bg-transparent",
                                  onChange: (e) => {
                                    t.onChange(e), C(0);
                                  },
                                  onKeyPress: (e) => {
                                    /^\d*\.?\d*$/.test(e.key) ||
                                      e.preventDefault();
                                  },
                                });
                              },
                              "data-sentry-element": "Controller",
                              "data-sentry-source-file": "FormStaking.tsx",
                            }),
                          }),
                          (0, i.jsx)(R, {
                            mainForm: D,
                            fieldName: "amount",
                            "data-sentry-element": "FormMessageValidate",
                            "data-sentry-source-file": "FormStaking.tsx",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex laptop:hidden gap-2 items-center mt-3",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "text-[#4A4A4A] text-base laptop:text-xl",
                                children: "pUSDT Available:",
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "text-[#AFAFAF] text-base laptop:text-xl font-semibold",
                                children: [I(Number(t) || 0, 6), " ", "$pUSDT"],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "scrollbar-hide overflow-x-scroll mt-3 laptop:mt-5 flex items-center gap-2 laptop:gap-4 w-full",
                            children: [
                              { value: 10, type: "number", label: "Min: 10$" },
                              { value: 40, type: "percent", label: "40%" },
                              { value: 60, type: "percent", label: "60%" },
                              { value: 80, type: "percent", label: "80%" },
                              { value: 1e4, type: "number", label: "Max" },
                            ].map((e) =>
                              (0, i.jsx)(
                                "div",
                                {
                                  onClick: K(e),
                                  className: "".concat(
                                    v === e.value && "!bg-gradient-to-r",
                                    " cursor-pointer w-full min-w-[98px] rounded-lg flex justify-center items-center bg-[#4A4A4A] h-[35px] py-2 hover:bg-gradient-to-r from-[#9299FF] to-[#4651F6]"
                                  ),
                                  children: e.label,
                                },
                                e.value
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "mt-4 block laptop:flex gap-1 items-center",
                        children: [
                          (0, i.jsx)("p", {
                            className: "text-[#929292]",
                            children:
                              "*Maximum pUSDT can be deposited to this pool:",
                          }),
                          (0, i.jsx)("p", {
                            className: "text-[#7EFFC5] font-semibold",
                            children: "1,500,000 pUSDT",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("hr", { className: "border-[#4A4A4A]" }),
                  (0, i.jsxs)("div", {
                    className: "",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex flex-col gap-5",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "text-base laptop:text-xl font-semibold",
                                children: "Estimate rewards",
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                children: [T(ee, 3), " $U2U"],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "flex flex-1 flex-col gap-1 items-start",
                                children: (0, i.jsx)("p", {
                                  className:
                                    "text-base laptop:text-xl font-semibold",
                                  children: "Current rate",
                                }),
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                children: [T(Q, 3), " $U2U/day"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "w-full flex items-center gap-2 mt-6",
                        children: [
                          (0, i.jsx)(d.Z.IconWarning, {
                            width: 24,
                            height: 24,
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "FormStaking.tsx",
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "text-sm laptop:text-base font-semibold text-[#FF72B4]",
                            children: "Deposit locked until campaign ended.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(g, {
                    showConnectButton: !0,
                    className: "flex justify-center mt-4",
                    "data-sentry-element": "ConnectWalletButton",
                    "data-sentry-source-file": "FormStaking.tsx",
                    children: G
                      ? (0, i.jsx)(h.Z, {
                          loading: r || S,
                          disabled: r || S,
                          loadingText: "Staking...",
                          scale: "md",
                          className:
                            "disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 mt-4 w-full !rounded-xl laptop:!rounded-[20px] bg-[#4651F6] text-white hover:!bg-transparent hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                          onClick: () => {
                            L(Y)();
                          },
                          children: "Stake now",
                        })
                      : (0, i.jsx)(h.Z, {
                          scale: "md",
                          className:
                            "disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 mt-4 w-full !rounded-xl laptop:!rounded-[20px] bg-[#4651F6] text-white hover:!bg-transparent hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                          onClick: X,
                          children: "Approve",
                        }),
                  }),
                ],
              }),
              (0, i.jsx)(P, {
                isOpen: y,
                onClose: () => j(!1),
                "data-sentry-element": "ApproveModal",
                "data-sentry-source-file": "FormStaking.tsx",
              }),
            ],
          });
        }
        var W = s(85118);
        s(6957);
        var O = s(46792),
          q = s(21479),
          G = s(99740);
        let X = new q.f({ uri: k.dg, cache: new G.h() });
        var Y = s(2559);
        let K = (0, Y.Ps)(
            "\n  query DashboardPublic {\n   dashboards {\n    id\n    amountStakePublic\n    amountHarvestPublic\n    totalUserPublic\n  }\n}\n"
          ),
          Q = (0, Y.Ps)(
            "\nquery TransactionReward($contracts: [String!], $address: String, $limit: Int = 10, $skip: Int = 0) {\n  transactionPools(where: {to: $address, event: HARVEST, contract_in: $contracts}, \n  first: $limit,\n  skip: $skip,\n    orderBy: timestamp,\n    orderDirection: desc\n  ) {\n    txHash\n    to\n    timestamp\n    id\n    from\n    event\n    contract\n    amount\n  }\n}"
          ),
          J = (0, Y.Ps)(
            "\nquery TransactionReward($contracts: [String!], $address: String, $limit: Int = 10, $skip: Int = 0) {\n  transactionPools(\n    where: { to: $address, event: STAKE, contract_in: $contracts }, \n    first: $limit,\n    skip: $skip,\n    orderBy: timestamp,\n    orderDirection: desc\n  ) {\n    txHash\n    to\n    timestamp\n    id\n    from\n    event\n    contract\n    amount\n  }\n}"
          ),
          ee = (0, Y.Ps)(
            "\n  query DashboardBitget {\n   dashboards {\n    id\n    amountStakeBitget\n    amountHarvestBitget\n    totalUserBitget\n  }\n}\n"
          ),
          et = {
            getDashboardPublicData: () =>
              X.query({ query: K, fetchPolicy: "no-cache" }),
            getDashboardBitgetData: () =>
              X.query({ query: ee, fetchPolicy: "no-cache" }),
            getGetTransactionReward: (e, t) =>
              X.query({
                query: Q,
                variables: { address: e, contracts: t },
                fetchPolicy: "no-cache",
              }),
            getGetTransactionStake: (e, t) =>
              X.query({
                query: J,
                variables: { address: e, contracts: t },
                fetchPolicy: "no-cache",
              }),
          },
          es = (e, t, s) => {
            let { onError: a, ...l } = s || {};
            return (0, W.ZP)(e, t, {
              ...l,
              onError: (e, t, s) => {
                null == a || a(e, t, s);
              },
            });
          },
          ea = (e) =>
            es("getDashboardPublicData", () => et.getDashboardPublicData(), e),
          el = (e) =>
            es("getDashboardBitgetData", () => et.getDashboardBitgetData(), e);
        function er() {
          var e, t;
          let { data: s, mutate: a } = ea({ refreshInterval: 3e3 }),
            {
              amountStakePublic: l,
              amountHarvestPublic: r,
              totalUserPublic: n,
            } = (null == s
              ? void 0
              : null === (e = s.data) || void 0 === e
              ? void 0
              : e.dashboards[0]) || {},
            { data: d, mutate: c } = el({ refreshInterval: 3e3 }),
            {
              amountStakeBitget: x,
              amountHarvestBitget: p,
              totalUserBitget: m,
            } = (null == d
              ? void 0
              : null === (t = d.data) || void 0 === t
              ? void 0
              : t.dashboards[0]) || {};
          return (
            (0, o.useEffect)(() => {
              let e = setInterval(() => {
                "public" === k.pi.toLowerCase() ? a() : c();
              }, 1e4);
              return () => {
                clearInterval(e);
              };
            }, [a, c]),
            (0, i.jsxs)("div", {
              className:
                "flex justify-center w-full flex-col p-0 laptop:p-5 min-w-full laptop:min-w-[437px] gap-1 laptop:gap-[48px]",
              "data-sentry-component": "Statistics",
              "data-sentry-source-file": "Statistics.tsx",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex justify-center w-full laptop:flex-col min-w-full laptop:min-w-[437px] gap-2 laptop:gap-[48px]",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "basis-6/12 py-[8px] laptop:py-6 flex flex-col items-center justify-center gap-4",
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-semibold",
                          children: "Total Rewards ($U2U)",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "font-semibold text-3xl laptop:text-5xl text-gradient bg-gradient-to-r from-[#9299FF_48%] to-[#4651F6_168%]",
                          children: I(
                            "public" === k.pi.toLowerCase() ? r : p || 0,
                            18
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "basis-6/12 py-[8px] laptop:py-6 flex flex-col items-center justify-center gap-4",
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-semibold",
                          children: "Total staked pUSDT",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "font-semibold text-3xl laptop:text-5xl text-gradient bg-gradient-to-r from-[#9299FF_48%] to-[#4651F6_168%]",
                          children: I(
                            "public" === k.pi.toLowerCase() ? l : x || 0,
                            6
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex-1  py-[8px] laptop:py-6 flex flex-col items-center justify-center gap-4",
                  children: [
                    (0, i.jsx)("p", {
                      className: "font-semibold",
                      children: "Number of participants",
                    }),
                    (0, i.jsxs)("p", {
                      className:
                        "font-semibold text-3xl laptop:text-5xl text-gradient bg-gradient-to-r from-[#9299FF_48%] to-[#4651F6_168%]",
                      children: [
                        T("public" === k.pi.toLowerCase() ? n : m || 0, 0),
                        " ",
                        "USERS",
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var en = s(56424),
          ei = s(79996);
        function eo() {
          let [e, t] = (0, o.useState)([]),
            { address: s } = (0, y.m)(),
            a = async () => {
              if (!s) return;
              let { data: e } = await et.getGetTransactionStake(
                null == s ? void 0 : s.toLowerCase(),
                "public" === k.pi.toLowerCase()
                  ? [k.z7.toLowerCase(), k.fu.toLowerCase()]
                  : [k.YE.toLowerCase(), k.ov.toLowerCase()]
              );
              t((null == e ? void 0 : e.transactionPools) || []);
            };
          return (
            (0, o.useEffect)(() => {
              let e = setInterval(() => {
                a().then();
              }, 3e3);
              return () => {
                clearInterval(e);
              };
            }, [s]),
            (0, o.useEffect)(() => {
              a().then();
            }, [s]),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)("div", {
                className:
                  "flex justify-center gap-6 laptop:gap-4 flex-col w-full",
                children: [
                  (0, i.jsx)("h3", {
                    className: "font-jockey text-2xl",
                    children: "Transactions",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "hidden laptop:flex overflow-auto relative p-5 laptop:p-8 justify-center flex-col w-full gap-6 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                    children: (0, i.jsxs)("div", {
                      className:
                        "h-[300px] w-full flex flex-col justify-between items-center",
                      children: [
                        (0, i.jsxs)("table", {
                          className: "border-collapse w-full table-auto",
                          children: [
                            (0, i.jsx)("thead", {
                              className: "sticky -top-[32px] rounded-xl",
                              children: (0, i.jsxs)("tr", {
                                className: "text-[#929292] bg-[#1F1F1F] *:py-4",
                                children: [
                                  (0, i.jsx)("th", {
                                    className: "pl-2 text-left w-1/3",
                                    children: "Timestamp",
                                  }),
                                  (0, i.jsx)("th", {
                                    className:
                                      "text-left laptop:text-center w-1/3",
                                    children: "Amount",
                                  }),
                                  (0, i.jsx)("th", {
                                    className:
                                      "pr-2 text-left laptop:text-right w-1/3",
                                    children: "TxHash",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("tbody", {
                              className: "h-full",
                              children: (null == e ? void 0 : e.length)
                                ? null == e
                                  ? void 0
                                  : e.map((e, t) =>
                                      (0, i.jsxs)(
                                        "tr",
                                        {
                                          children: [
                                            (0, i.jsx)("td", {
                                              className:
                                                "py-4 pr-4 laptop:px-2 text-base laptop:text-lg border-b border-[#4a4a4a80] ...",
                                              children: (0, en.WU)(
                                                new Date(
                                                  1e3 * Number(e.timestamp)
                                                ),
                                                "yyyy-MM-dd HH:mm:ss"
                                              ),
                                            }),
                                            (0, i.jsxs)("td", {
                                              className:
                                                "py-4 pr-4 laptop:px-2 text-left laptop:text-center text-base laptop:text-lg border-b border-[#4a4a4a80] ...",
                                              children: [
                                                T(
                                                  Number(
                                                    (0, c.b)(
                                                      BigInt(
                                                        Number(e.amount) || 0
                                                      ),
                                                      6
                                                    )
                                                  ),
                                                  3
                                                ),
                                                " ",
                                                "$pUSDT",
                                              ],
                                            }),
                                            (0, i.jsx)("td", {
                                              className:
                                                "cursor-pointer text-left laptop:text-right py-4 pr-4 laptop:px-2 text-base laptop:text-lg border-b border-[#4a4a4a80] ...",
                                              children: (0, i.jsx)("div", {
                                                className:
                                                  "flex items-center justify-end gap-1",
                                                children: (0, i.jsx)("a", {
                                                  className: "underline",
                                                  target: "_blank",
                                                  href: ""
                                                    .concat(k.di, "/")
                                                    .concat(e.txHash),
                                                  children: (0, ei.Xn)(
                                                    e.txHash
                                                  ),
                                                }),
                                              }),
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    )
                                : null,
                            }),
                          ],
                        }),
                        !(null == e ? void 0 : e.length) &&
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center h-full w-full",
                            children: (0, i.jsx)("p", {
                              className: "text-[#929292]",
                              children: "No transaction found",
                            }),
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex tablet:hidden flex-col items-center w-full gap-6 overflow-auto",
                    children: [
                      e &&
                        e.length > 0 &&
                        e.map((e, t) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className: (0, ei.AK)(
                                "flex flex-col items-center justify-center gap-4 w-full",
                                "rounded-2xl bg-[#141414] p-5"
                              ),
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between gap-4 w-full",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "font-roboto font-normal text-sm text-[#929292]",
                                      children: "Timestamp",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "flex flex-row items-center justify-start font-inter font-bold text-base text-[#FFF]",
                                      children: (0, en.WU)(
                                        new Date(1e3 * Number(e.timestamp)),
                                        "yyyy-MM-dd HH:mm:ss"
                                      ),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between gap-4 w-full",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "font-roboto font-normal text-sm text-[#929292]",
                                      children: "Amount",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "flex flex-row items-center justify-start font-inter font-bold text-base text-[#FFF]",
                                      children: [
                                        T(
                                          Number(
                                            (0, c.b)(
                                              BigInt(Number(e.amount) || 0),
                                              6
                                            )
                                          ),
                                          3
                                        ),
                                        " ",
                                        "$pUSDT",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between gap-4 w-full",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "font-roboto font-normal text-sm text-[#929292]",
                                      children: "TxHash",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "flex flex-row items-center justify-start font-inter font-bold text-base text-[#FFF]",
                                      children: (0, i.jsx)("div", {
                                        className:
                                          "flex items-center justify-end gap-1",
                                        children: (0, i.jsx)("a", {
                                          className: "underline",
                                          target: "_blank",
                                          href: ""
                                            .concat(k.di, "/")
                                            .concat(e.txHash),
                                          children: (0, ei.Xn)(e.txHash),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            "mobile-".concat(t)
                          )
                        ),
                      (null == e ? void 0 : e.length) === 0 &&
                        (0, i.jsx)("div", {
                          className:
                            "w-full flex py-20 justify-center h-full uppercase",
                          children: (0, i.jsx)("p", { children: "No Data" }),
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        let ed = () => {
          let { isValidSession: e } = (0, f.aC)();
          return (0, i.jsxs)("div", {
            className:
              "bg-[#1F1F1F] p-4 laptop:p-8 rounded-2xl flex flex-col gap-10 items-center",
            "data-sentry-component": "Staking",
            "data-sentry-source-file": "Staking.tsx",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "w-full flex flex-col-reverse gap-10 laptop:flex-row justify-between items-center",
                children: [
                  (0, i.jsx)(V, {
                    "data-sentry-element": "FormStaking",
                    "data-sentry-source-file": "Staking.tsx",
                  }),
                  (0, i.jsx)(er, {
                    "data-sentry-element": "Statistics",
                    "data-sentry-source-file": "Staking.tsx",
                  }),
                ],
              }),
              e && (0, i.jsx)(eo, {}),
            ],
          });
        };
        var ec = s(73377),
          ex = s(19764);
        function ep() {
          let { rewardsRatePerSecond: e, endTime: t, pendingReward: s } = z(),
            {
              onClaim: a,
              isSuccess: l,
              isError: r,
              totalStaked: n,
              totalClaimed: x,
            } = z(),
            { rewardsRatePerSecond: p, pendingReward: m } = _(),
            {
              onUnStakeV1: u,
              onUnStakeV2: f,
              onClaim: b,
              isSuccess: j,
              isError: w,
              totalStaked: N,
              totalClaimed: v,
            } = _(),
            [C, F] = (0, o.useState)(Date.now()),
            [k, A] = (0, o.useState)(!1),
            [S, E] = (0, o.useState)(!1),
            [U, B] = (0, o.useState)(!1),
            [Z, D] = (0, o.useState)(!1),
            { address: P } = (0, y.m)(),
            L = async () => {
              try {
                A(!0), await a();
              } catch (e) {
                console.log(e);
              } finally {
                A(!1);
              }
            },
            R = async () => {
              try {
                E(!0), await b();
              } catch (e) {
                console.log(e);
              } finally {
                E(!1);
              }
            },
            $ = async () => {
              try {
                B(!0), await u();
              } catch (e) {
                console.log(e);
              } finally {
                B(!1);
              }
            },
            H = async () => {
              try {
                D(!0), await f();
              } catch (e) {
                console.log(e);
              } finally {
                D(!1);
              }
            };
          (0, o.useEffect)(() => {
            let e = setInterval(() => {
              F(Date.now());
            }, 1e3);
            return () => clearInterval(e);
          }, []),
            (0, o.useEffect)(() => {
              l && M.A.success({ message: "Claim successfully" });
            }, [l]),
            (0, o.useEffect)(() => {
              j && M.A.success({ message: "Claim successfully" });
            }, [j]),
            (0, o.useEffect)(() => {
              r && M.A.error({ message: "Claim fail" });
            }, [r]),
            (0, o.useEffect)(() => {
              w && M.A.error({ message: "Claim fail" });
            }, [w]);
          let V = (0, o.useMemo)(() => {
              if (e) {
                let t = 86400 * Number(e || 0);
                return Number((0, c.b)(BigInt(1e6 * t), 18));
              }
            }, [e]),
            W = (0, o.useMemo)(
              () =>
                Number(Number((0, c.b)(BigInt(Number(n) || 0), 6))) * Number(V),
              [C, n]
            ),
            O = (0, o.useMemo)(() => {
              let e = C / 1e3;
              return Math.ceil(
                (Number(t) - 7776e3 > e ? 7776e3 : Number(t) - e) / 86400
              );
            }, [C, t]),
            q = (0, o.useMemo)(() => {
              if (p) {
                let e = 86400 * Number(p || 0);
                return Number((0, c.b)(BigInt(1e6 * e), 18));
              }
            }, [p]),
            G = (0, o.useMemo)(
              () =>
                Number(Number((0, c.b)(BigInt(Number(N) || 0), 6))) * Number(q),
              [C, N]
            ),
            X = (0, o.useMemo)(
              () => !(Number((0, c.b)(BigInt(Number(s) || 0), 18)) > 0),
              [s]
            ),
            Y = (0, o.useMemo)(
              () => !(Number((0, c.b)(BigInt(Number(m) || 0), 18)) > 0),
              [m]
            ),
            K = (0, o.useMemo)(() => C / 1e3 < Number(1734508800), [C]),
            Q = (0, o.useMemo)(() => C / 1e3 < Number(1734508800), [C]),
            J = (0, o.useMemo)(() => C / 1e3 > Number(t), []);
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: "flex flex-col gap-4 laptop:gap-6 w-full",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex items-center justify-center w-full min-w-full laptop:min-w-[437px] gap-2 laptop:gap-6",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "basis-6/12 laptop:basis-2/6 py-[8px] laptop:py-6 flex flex-col items-center justify-center gap-4",
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-semibold",
                          children: "Total Earnings",
                        }),
                        (0, i.jsxs)("p", {
                          className:
                            "font-semibold text-3xl laptop:text-5xl text-gradient bg-gradient-to-r from-[#9299FF_48%] to-[#4651F6_168%]",
                          children: [
                            I(Number(Number(x || 0) + Number(v || 0)), 18),
                            " ",
                            "$U2U",
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(d.Z.IconStart, {
                      width: 60,
                      height: 60,
                      "data-sentry-element": "unknown",
                      "data-sentry-source-file": "ClaimReward.tsx",
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "basis-6/12 laptop:basis-2/6 py-[8px] laptop:py-6 flex flex-col items-center justify-center gap-4",
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-semibold",
                          children: "Stake Duration",
                        }),
                        (0, i.jsxs)("p", {
                          className:
                            "font-semibold text-3xl laptop:text-5xl text-gradient bg-gradient-to-r from-[#9299FF_48%] to-[#4651F6_168%]",
                          children: [O, " Days"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("hr", {
                  className: "border-[#4A4A4A] block laptop:hidden w-full",
                }),
                (0, i.jsx)("div", {
                  className: "w-full flex justify-center",
                  children: (0, i.jsxs)("div", {
                    className:
                      "max-w-full laptop:max-w-[645px] flex justify-center items-center rounded-2xl p-4 laptop:px-4 laptop:py-10 gap-6 border border-[#FF72B4] bg-[#14141480]",
                    children: [
                      (0, i.jsx)(d.Z.Warning, {
                        className: "hidden laptop:block",
                        width: 24,
                        height: 24,
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "ClaimReward.tsx",
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col gap-4 laptop:gap-1",
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              (0, i.jsx)("span", {
                                className: "font-bold text-[#7EFFC5]",
                                children: "Section 1",
                              }),
                              ": For those who started staking",
                              " ",
                              (0, i.jsx)("span", {
                                className: "font-bold text-[#7EFFC5]",
                                children: "before December 12, 2024",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("span", {
                            children: [
                              (0, i.jsx)("span", {
                                className: "font-bold text-[#7EFFC5]",
                                children: "Section 2",
                              }),
                              ": For those who started staking on or",
                              " ",
                              (0, i.jsx)("span", {
                                className: "font-bold text-[#7EFFC5]",
                                children: "after December 12, 2024.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "hidden laptop:flex items-center gap-8 w-full",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "p-5 laptop:p-8 flex flex-col w-full gap-8 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                      children: [
                        (0, i.jsx)("div", {
                          className: "",
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Section",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: "1",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("hr", {
                                className: "border-[#4A4A4A]",
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Wallet Address",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: (0, ei.Xn)(P),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Staked",
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: [
                                      I(Number(n || 0), 6),
                                      " ",
                                      "$pUSDT",
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-start",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "flex flex-1 flex-col gap-1 items-start",
                                    children: (0, i.jsx)("p", {
                                      className:
                                        "text-base laptop:text-xl font-semibold",
                                      children: "Claimable",
                                    }),
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: [
                                      T(
                                        Number(
                                          (0, c.b)(BigInt(Number(s) || 0), 18)
                                        ),
                                        3
                                      ),
                                      " ",
                                      "$U2U",
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Current rate",
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: [T(W, 3), " $U2U/day"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("hr", { className: "border-[#4A4A4A]" }),
                        (0, i.jsxs)("div", {
                          className: "flex items-center gap-6 mt-4",
                          children: [
                            (0, i.jsx)(g, {
                              showConnectButton: !0,
                              className:
                                "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                              "data-sentry-element": "ConnectWalletButton",
                              "data-sentry-source-file": "ClaimReward.tsx",
                              children: (0, i.jsx)(h.Z, {
                                loading: k,
                                disabled: !(!K && !X),
                                loadingText: "Claiming...",
                                scale: "md",
                                className:
                                  "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#7EFFC5] hover:!bg-transparent text-[#141414] hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#8C8C99]",
                                onClick: L,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "ClaimReward.tsx",
                                children: "Claim",
                              }),
                            }),
                            J
                              ? (0, i.jsx)(g, {
                                  showConnectButton: !0,
                                  className:
                                    "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                                  children: (0, i.jsx)(h.Z, {
                                    loading: U,
                                    disabled: !1,
                                    loadingText: "Processing...",
                                    scale: "md",
                                    className:
                                      "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                    onClick: $,
                                    children: "Withdraw",
                                  }),
                                })
                              : (0, i.jsx)(h.Z, {
                                  disabled: !0,
                                  loadingText: "Processing...",
                                  scale: "md",
                                  className:
                                    "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                  onClick: $,
                                  children: "Withdraw",
                                }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "p-5 laptop:p-8 flex flex-col w-full gap-8 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                      children: [
                        (0, i.jsx)("div", {
                          className: "",
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col gap-5",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Section",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: "2",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("hr", {
                                className: "border-[#4A4A4A]",
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Wallet Address",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: (0, ei.Xn)(P),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Staked",
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: [
                                      I(Number(N || 0), 6),
                                      " ",
                                      "$pUSDT",
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-start",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "flex flex-1 flex-col gap-1 items-start",
                                    children: (0, i.jsx)("p", {
                                      className:
                                        "text-base laptop:text-xl font-semibold",
                                      children: "Claimable",
                                    }),
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: [
                                      T(
                                        Number(
                                          (0, c.b)(BigInt(Number(m) || 0), 18)
                                        ),
                                        3
                                      ),
                                      " ",
                                      "$U2U",
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-base laptop:text-xl font-semibold",
                                    children: "Current rate",
                                  }),
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                    children: [T(G, 3), " $U2U/day"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("hr", { className: "border-[#4A4A4A]" }),
                        (0, i.jsxs)("div", {
                          className: "flex items-center gap-6 mt-4",
                          children: [
                            (0, i.jsx)(g, {
                              showConnectButton: !0,
                              className:
                                "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                              "data-sentry-element": "ConnectWalletButton",
                              "data-sentry-source-file": "ClaimReward.tsx",
                              children: (0, i.jsx)(h.Z, {
                                loading: S,
                                disabled: !(!Q && !Y),
                                loadingText: "Claiming...",
                                scale: "md",
                                className:
                                  "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#7EFFC5] hover:!bg-transparent text-[#141414] hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#8C8C99]",
                                onClick: R,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "ClaimReward.tsx",
                                children: "Claim",
                              }),
                            }),
                            J
                              ? (0, i.jsx)(g, {
                                  showConnectButton: !0,
                                  className:
                                    "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                                  children: (0, i.jsx)(h.Z, {
                                    loading: Z,
                                    disabled: !1,
                                    loadingText: "Processing...",
                                    scale: "md",
                                    className:
                                      "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                    onClick: H,
                                    children: "Withdraw",
                                  }),
                                })
                              : (0, i.jsx)(h.Z, {
                                  disabled: !0,
                                  loadingText: "Processing...",
                                  scale: "md",
                                  className:
                                    "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                  onClick: H,
                                  children: "Withdraw",
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: (0, ei.AK)(
                    "col-span-full tablet:col-span-5 laptop:col-span-7 flex flex-col",
                    "bg-gray-custom rounded-2xl overflow-hidden",
                    "pb-[2rem] tablet:py-0"
                  ),
                  children: (0, i.jsx)("div", {
                    className: "block laptop:hidden relative w-auto h-full",
                    children: (0, i.jsxs)(ex.tq, {
                      modules: [ec.tl, ec.W_],
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                      navigation: {
                        prevEl: ".swiper-for-buy-phone-btn-prev",
                        nextEl: ".swiper-for-buy-phone-btn-next",
                        disabledClass: "btn-disabled",
                        enabled: !0,
                      },
                      pagination: {
                        horizontalClass: "swiper-for-buy-phone-horizontal",
                        bulletClass: "swiper-for-buy-phone-pagination",
                        bulletActiveClass:
                          "swiper-for-buy-phone-pagination-active",
                        clickable: !0,
                      },
                      grabCursor: !0,
                      wrapperClass: "flex flex-row w-fit h-full item-center",
                      className: "h-full",
                      "data-sentry-element": "Swiper",
                      "data-sentry-source-file": "ClaimReward.tsx",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "absolute inset-y-0 left-[1rem] flex flex-row items-center",
                          children: (0, i.jsx)("div", {
                            className: "swiper-for-buy-phone-btn-prev group",
                            children: (0, i.jsx)("div", {
                              className: (0, ei.AK)(
                                "flex flex-row items-center justify-center cursor-pointer z-30",
                                "rounded-full bg-gray4-custom size-[3.25rem]",
                                "group-[.btn-disabled]:cursor-not-allowed group-[.btn-disabled]:opacity-50"
                              ),
                              children: (0, i.jsx)(d.Z.ArrowRightIcon, {
                                className: "size-7 text-gray2-custom",
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "ClaimReward.tsx",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "absolute inset-y-0 right-[1rem] flex flex-row items-center",
                          children: (0, i.jsx)("div", {
                            className: "swiper-for-buy-phone-btn-next group",
                            children: (0, i.jsx)("div", {
                              className: (0, ei.AK)(
                                "flex flex-row items-center justify-center cursor-pointer z-30",
                                "rounded-full bg-gray4-custom size-[3.25rem]",
                                "group-[.btn-disabled]:cursor-not-allowed group-[.btn-disabled]:opacity-50"
                              ),
                              children: (0, i.jsx)(d.Z.ArrowRightIcon, {
                                className:
                                  "rotate-180 size-7 text-gray2-custom",
                                "data-sentry-element": "unknown",
                                "data-sentry-source-file": "ClaimReward.tsx",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)(ex.o5, {
                          className:
                            "relative w-full flex flex-col justify-center items-center",
                          "data-sentry-element": "SwiperSlide",
                          "data-sentry-source-file": "ClaimReward.tsx",
                          children: (0, i.jsx)("div", {
                            className:
                              "flex justify-center w-full items-center gap-8",
                            children: (0, i.jsxs)("div", {
                              className:
                                "p-5 laptop:p-8 flex flex-col w-full gap-8 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "",
                                  children: (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-5",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Section",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: "1",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)("hr", {
                                        className: "border-[#4A4A4A]",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Wallet Address",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: (0, ei.Xn)(P),
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Staked",
                                          }),
                                          (0, i.jsxs)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: [
                                              I(Number(n || 0), 6),
                                              " ",
                                              "$pUSDT",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "flex flex-1 flex-col gap-1 items-start",
                                            children: (0, i.jsx)("p", {
                                              className:
                                                "text-base laptop:text-xl font-semibold",
                                              children: "Claimable",
                                            }),
                                          }),
                                          (0, i.jsxs)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: [
                                              T(
                                                Number(
                                                  (0, c.b)(
                                                    BigInt(Number(s) || 0),
                                                    18
                                                  )
                                                ),
                                                3
                                              ),
                                              " ",
                                              "$U2U",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Current rate",
                                          }),
                                          (0, i.jsxs)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: [T(W, 3), " $U2U/day"],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("hr", {
                                  className: "border-[#4A4A4A]",
                                }),
                                (0, i.jsxs)("div", {
                                  className: "flex items-center gap-6 mt-4",
                                  children: [
                                    (0, i.jsx)(g, {
                                      showConnectButton: !0,
                                      className:
                                        "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                                      "data-sentry-element":
                                        "ConnectWalletButton",
                                      "data-sentry-source-file":
                                        "ClaimReward.tsx",
                                      children: (0, i.jsx)(h.Z, {
                                        loading: k,
                                        disabled: !(!K && !X),
                                        loadingText: "Claiming...",
                                        scale: "md",
                                        className:
                                          "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#7EFFC5] hover:!bg-transparent text-[#141414] hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#8C8C99]",
                                        onClick: L,
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file":
                                          "ClaimReward.tsx",
                                        children: "Claim",
                                      }),
                                    }),
                                    J
                                      ? (0, i.jsx)(g, {
                                          showConnectButton: !0,
                                          className:
                                            "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                                          children: (0, i.jsx)(h.Z, {
                                            loading: U,
                                            disabled: !1,
                                            loadingText: "Processing...",
                                            scale: "md",
                                            className:
                                              "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                            onClick: $,
                                            children: "Withdraw",
                                          }),
                                        })
                                      : (0, i.jsx)(h.Z, {
                                          disabled: !0,
                                          loadingText: "Processing...",
                                          scale: "md",
                                          className:
                                            "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                          onClick: $,
                                          children: "Withdraw",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)(ex.o5, {
                          className:
                            "relative w-full flex flex-col justify-center items-center",
                          "data-sentry-element": "SwiperSlide",
                          "data-sentry-source-file": "ClaimReward.tsx",
                          children: (0, i.jsx)("div", {
                            className:
                              "flex justify-center w-full items-center gap-8",
                            children: (0, i.jsxs)("div", {
                              className:
                                "p-5 laptop:p-8 flex flex-col w-full gap-8 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "",
                                  children: (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-5",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Section",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: "2",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)("hr", {
                                        className: "border-[#4A4A4A]",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Wallet Address",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: (0, ei.Xn)(P),
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Staked",
                                          }),
                                          (0, i.jsxs)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: [
                                              I(Number(N || 0), 6),
                                              " ",
                                              "$pUSDT",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "flex flex-1 flex-col gap-1 items-start",
                                            children: (0, i.jsx)("p", {
                                              className:
                                                "text-base laptop:text-xl font-semibold",
                                              children: "Claimable",
                                            }),
                                          }),
                                          (0, i.jsxs)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: [
                                              T(
                                                Number(
                                                  (0, c.b)(
                                                    BigInt(Number(m) || 0),
                                                    18
                                                  )
                                                ),
                                                3
                                              ),
                                              " ",
                                              "$U2U",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center",
                                        children: [
                                          (0, i.jsx)("p", {
                                            className:
                                              "text-base laptop:text-xl font-semibold",
                                            children: "Current rate",
                                          }),
                                          (0, i.jsxs)("p", {
                                            className:
                                              "text-lg laptop:text-2xl font-bold text-[#7EFFC5]",
                                            children: [
                                              T(G, 3),
                                              " ",
                                              "$U2U/day",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("hr", {
                                  className: "border-[#4A4A4A]",
                                }),
                                (0, i.jsxs)("div", {
                                  className: "flex items-center gap-6 mt-4",
                                  children: [
                                    (0, i.jsx)(g, {
                                      showConnectButton: !0,
                                      className:
                                        "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                                      "data-sentry-element":
                                        "ConnectWalletButton",
                                      "data-sentry-source-file":
                                        "ClaimReward.tsx",
                                      children: (0, i.jsx)(h.Z, {
                                        loading: S,
                                        disabled: !(!Q && !Y),
                                        loadingText: "Claiming...",
                                        scale: "md",
                                        className:
                                          "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#7EFFC5] hover:!bg-transparent text-[#141414] hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#8C8C99]",
                                        onClick: R,
                                        "data-sentry-element": "Button",
                                        "data-sentry-source-file":
                                          "ClaimReward.tsx",
                                        children: "Claim",
                                      }),
                                    }),
                                    J
                                      ? (0, i.jsx)(g, {
                                          showConnectButton: !0,
                                          className:
                                            "flex justify-center h-12 laptop:h-[64px] !rounded-xl laptop:!rounded-2xl",
                                          children: (0, i.jsx)(h.Z, {
                                            loading: Z,
                                            disabled: !1,
                                            loadingText: "Processing...",
                                            scale: "md",
                                            className:
                                              "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                            onClick: H,
                                            children: "Withdraw",
                                          }),
                                        })
                                      : (0, i.jsx)(h.Z, {
                                          disabled: !0,
                                          loadingText: "Processing...",
                                          scale: "md",
                                          className:
                                            "h-12 laptop:h-[64px] disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:text-[#92929299] disabled:!border-[#8C8C99] p-4 w-full !rounded-xl laptop:!rounded-2xl bg-[#4651F6] hover:!bg-transparent text-white hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid hover:!border-[#7EFFC5] !border-[#4651F6]",
                                          onClick: H,
                                          children: "Withdraw",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function em() {
          let [e, t] = (0, o.useState)([]),
            { address: s } = (0, y.m)(),
            a = async () => {
              if (!s) return;
              let { data: e } = await et.getGetTransactionReward(
                null == s ? void 0 : s.toLowerCase(),
                "public" === k.pi.toLowerCase()
                  ? [k.z7.toLowerCase(), k.fu.toLowerCase()]
                  : [k.YE.toLowerCase(), k.ov.toLowerCase()]
              );
              t((null == e ? void 0 : e.transactionPools) || []);
            };
          return (
            (0, o.useEffect)(() => {
              let e = setInterval(() => {
                a().then();
              }, 3e3);
              return () => {
                clearInterval(e);
              };
            }, [s]),
            (0, o.useEffect)(() => {
              a().then();
            }, [s]),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)("div", {
                className:
                  "flex justify-center gap-6 laptop:gap-4 flex-col w-full",
                children: [
                  (0, i.jsx)("h3", {
                    className: "font-jockey text-2xl",
                    children: "Reward Transactions",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "hidden laptop:flex overflow-auto relative p-5 laptop:p-8 justify-center flex-col w-full gap-6 rounded-2xl bg-[#14141480] backdrop-blur-[2px] border border-solid border-[#4A4A4A]",
                    children: (0, i.jsxs)("div", {
                      className:
                        "h-[300px] w-full flex flex-col justify-between items-center",
                      children: [
                        (0, i.jsxs)("table", {
                          className: "border-collapse w-full table-auto",
                          children: [
                            (0, i.jsx)("thead", {
                              className: "sticky -top-[32px] rounded-xl",
                              children: (0, i.jsxs)("tr", {
                                className: "text-[#929292] bg-[#1F1F1F] *:py-4",
                                children: [
                                  (0, i.jsx)("th", {
                                    className: "pl-2 text-left w-1/3",
                                    children: "Timestamp",
                                  }),
                                  (0, i.jsx)("th", {
                                    className:
                                      "text-left laptop:text-center w-1/3",
                                    children: "Amount",
                                  }),
                                  (0, i.jsx)("th", {
                                    className:
                                      "pr-2 text-left laptop:text-right w-1/3",
                                    children: "TxHash",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("tbody", {
                              className: "h-full",
                              children: (null == e ? void 0 : e.length)
                                ? null == e
                                  ? void 0
                                  : e.map((e, t) =>
                                      (0, i.jsxs)(
                                        "tr",
                                        {
                                          children: [
                                            (0, i.jsx)("td", {
                                              className:
                                                "py-4 pr-4 laptop:px-2 text-base laptop:text-lg border-b border-[#4a4a4a80] ...",
                                              children: (0, en.WU)(
                                                new Date(
                                                  1e3 * Number(e.timestamp)
                                                ),
                                                "yyyy-MM-dd HH:mm:ss"
                                              ),
                                            }),
                                            (0, i.jsxs)("td", {
                                              className:
                                                "py-4 pr-4 laptop:px-2 text-left laptop:text-center text-base laptop:text-lg border-b border-[#4a4a4a80] ...",
                                              children: [
                                                T(
                                                  Number(
                                                    (0, c.b)(
                                                      BigInt(
                                                        Number(e.amount) || 0
                                                      ),
                                                      18
                                                    )
                                                  ),
                                                  4
                                                ),
                                                " ",
                                                "$U2U",
                                              ],
                                            }),
                                            (0, i.jsx)("td", {
                                              className:
                                                "cursor-pointer text-left laptop:text-right py-4 pr-4 laptop:px-2 text-base laptop:text-lg border-b border-[#4a4a4a80] ...",
                                              children: (0, i.jsx)("div", {
                                                className:
                                                  "flex items-center justify-end gap-1",
                                                children: (0, i.jsx)("a", {
                                                  className: "underline",
                                                  target: "_blank",
                                                  href: ""
                                                    .concat(k.di, "/")
                                                    .concat(e.txHash),
                                                  children: (0, ei.Xn)(
                                                    e.txHash
                                                  ),
                                                }),
                                              }),
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    )
                                : null,
                            }),
                          ],
                        }),
                        !(null == e ? void 0 : e.length) &&
                          (0, i.jsx)("div", {
                            className:
                              "flex justify-center items-center h-full w-full",
                            children: (0, i.jsx)("p", {
                              className: "text-[#929292]",
                              children: "No transaction found",
                            }),
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex tablet:hidden flex-col items-center w-full gap-6 overflow-auto",
                    children: [
                      e &&
                        e.length > 0 &&
                        e.map((e, t) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className: (0, ei.AK)(
                                "flex flex-col items-center justify-center gap-4 w-full",
                                "rounded-2xl bg-[#141414] p-5"
                              ),
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between gap-4 w-full",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "font-roboto font-normal text-sm text-[#929292]",
                                      children: "Timestamp",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "flex flex-row items-center justify-start font-inter font-bold text-base text-[#FFF]",
                                      children: (0, en.WU)(
                                        new Date(1e3 * Number(e.timestamp)),
                                        "yyyy-MM-dd HH:mm:ss"
                                      ),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between gap-4 w-full",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "font-roboto font-normal text-sm text-[#929292]",
                                      children: "Amount",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "flex flex-row items-center justify-start font-inter font-bold text-base text-[#FFF]",
                                      children: [
                                        T(
                                          Number(
                                            (0, c.b)(
                                              BigInt(Number(e.amount) || 0),
                                              18
                                            )
                                          ),
                                          4
                                        ),
                                        " ",
                                        "$U2U",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-row items-center justify-between gap-4 w-full",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "font-roboto font-normal text-sm text-[#929292]",
                                      children: "TxHash",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "flex flex-row items-center justify-start font-inter font-bold text-base text-[#FFF]",
                                      children: (0, i.jsx)("div", {
                                        className:
                                          "flex items-center justify-end gap-1",
                                        children: (0, i.jsx)("a", {
                                          className: "underline",
                                          target: "_blank",
                                          href: ""
                                            .concat(k.di, "/")
                                            .concat(e.txHash),
                                          children: (0, ei.Xn)(e.txHash),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            "mobile-".concat(t)
                          )
                        ),
                      (null == e ? void 0 : e.length) === 0 &&
                        (0, i.jsx)("div", {
                          className:
                            "w-full flex py-20 justify-center h-full uppercase",
                          children: (0, i.jsx)("p", { children: "No Data" }),
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        let eu = () => {
          let { isValidSession: e } = (0, f.aC)();
          return (0, i.jsxs)("div", {
            className:
              "bg-[#1F1F1F] p-4 laptop:p-8 rounded-2xl flex flex-col gap-6 laptop:gap-10 justify-between items-start",
            "data-sentry-component": "Reward",
            "data-sentry-source-file": "Reward.tsx",
            children: [
              (0, i.jsx)(ep, {
                "data-sentry-element": "ClaimReward",
                "data-sentry-source-file": "Reward.tsx",
              }),
              e && (0, i.jsx)(em, {}),
            ],
          });
        };
        function ef() {
          let [e, t] = (0, o.useState)("staking"),
            s = (e) => {
              if ("reward" === e) {
                if (!a) {
                  l(!0), t("staking");
                  return;
                }
                t(e);
              }
              t(e);
            },
            { isValidSession: a } = (0, f.aC)(),
            { setOpen: l } = (0, b.Z)();
          return (0, i.jsxs)("div", {
            id: "section_2",
            className:
              "relative mt-10 laptop:mt-[110px] mb-[80px] laptop:mb-[125px] w-full min-h-screen overflow-hidden",
            "data-sentry-component": "HomeSectionTwo",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, i.jsx)("div", {
                className: "absolute top-0 left-0 z-0",
                children: (0, i.jsx)(d.Z.HomeSection2Ellipse, {
                  className: "w-[500] h-full",
                  "data-sentry-element": "unknown",
                  "data-sentry-source-file": "index.tsx",
                }),
              }),
              (0, i.jsx)("div", {
                className: "absolute top-0 left-0 z-0",
                children: (0, i.jsx)(d.Z.HomeSection2Ellipse2, {
                  className: "w-[500] h-full",
                  "data-sentry-element": "unknown",
                  "data-sentry-source-file": "index.tsx",
                }),
              }),
              (0, i.jsx)("div", {
                className: "absolute top-[-15%] right-0 z-0",
                children: (0, i.jsx)(d.Z.HomeSection2Bg, {
                  className: "w-full h-full",
                  "data-sentry-element": "unknown",
                  "data-sentry-source-file": "index.tsx",
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "px-4 laptop:px-4 desktop:px-0 laptop:max-w-screen-laptop desktop:max-w-screen-desktop w-full mx-auto relative z-10",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex justify-center items-center",
                    children: [
                      (0, i.jsxs)("div", {
                        onClick: () => s("staking"),
                        className: "".concat(
                          "staking" === e ? "z-10" : "z-0",
                          " cursor-pointer relative flex justify-center items-center"
                        ),
                        children: [
                          "staking" === e
                            ? (0, i.jsx)(d.Z.StakingTabActive, {
                                className: "relative w-[200px] laptop:w-auto",
                              })
                            : (0, i.jsx)(d.Z.StakingTabNotActive, {
                                className: "relative w-[200px] laptop:w-auto",
                              }),
                          (0, i.jsx)("p", {
                            className:
                              "absolute font-jockey text-[32px] ".concat(
                                "staking" === e
                                  ? "text-[#7EFFC5]"
                                  : "text-[#929292]"
                              ),
                            children: "Staking",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        onClick: () => s("reward"),
                        className: "".concat(
                          "reward" === e ? "z-10" : "z-0",
                          " cursor-pointer relative flex justify-center items-center -ml-6"
                        ),
                        children: [
                          "reward" === e
                            ? (0, i.jsx)(d.Z.StakingTabActive, {
                                className: "relative w-[200px] laptop:w-auto",
                              })
                            : (0, i.jsx)(d.Z.StakingTabNotActive, {
                                className: "relative w-[200px] laptop:w-auto",
                              }),
                          (0, i.jsx)("p", {
                            className:
                              "absolute font-jockey text-[32px] ".concat(
                                "reward" === e
                                  ? "text-[#7EFFC5]"
                                  : "text-[#929292]"
                              ),
                            children: "Rewards",
                          }),
                        ],
                      }),
                    ],
                  }),
                  "staking" === e ? (0, i.jsx)(ed, {}) : (0, i.jsx)(eu, {}),
                ],
              }),
            ],
          });
        }
        var eb = s(51772),
          eh = s(88254),
          eg = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 768,
              [t, s] = (0, o.useState)(!1);
            return (
              (0, o.useLayoutEffect)(() => {
                let t = () => {
                  s(window.innerWidth <= e);
                };
                return (
                  window.addEventListener("resize", t),
                  t(),
                  () => window.removeEventListener("resize", t)
                );
              }, []),
              t
            );
          },
          ey = s(9099);
        ((a = r || (r = {}))[(a.NONE = 0)] = "NONE"),
          (a[(a.REQUESTED = 1)] = "REQUESTED"),
          (a[(a.PENDING = 2)] = "PENDING"),
          (a[(a.SUCCESS = 3)] = "SUCCESS"),
          (a[(a.FAILED = 4)] = "FAILED");
        var ej = s(99144);
        ((l = n || (n = {}))[(l.NONE = 0)] = "NONE"),
          (l[(l.REQUESTED = 1)] = "REQUESTED"),
          (l[(l.PENDING = 2)] = "PENDING"),
          (l[(l.SUCCESS = 3)] = "SUCCESS"),
          (l[(l.FAILED = 4)] = "FAILED");
        let ew = (e) => {
            let { isOpen: t, onClose: s, onClaim: a } = e;
            return (0, i.jsxs)(D.Z, {
              isOpen: t,
              onClose: s,
              title: "Free U2U Gas Fee",
              description:
                "Make a $10 USDT transaction to the U2U Network and get 5 $U2U instantly!",
              className:
                "relative border border-[#7EFFC5] !max-w-[550px] max-[550px]:w-[360px] w-[550px] tablet:max-w-[450px] p-6 flex flex-col gap-5",
              "data-sentry-element": "Modal",
              "data-sentry-component": "ClaimGasFeeModal",
              "data-sentry-source-file": "airdrop-modal.tsx",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full flex flex-col gap-5",
                  children: (0, i.jsx)("div", {
                    style: {
                      background:
                        "linear-gradient(90deg, #9299FF 0%, #4651F6 100%)",
                    },
                    className: "w-full h-[1px] bg-[#9299FF] mb-2",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "w-full relative",
                  children:
                    "public" === k.pi.toLowerCase()
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(d.Z.AirdropBanner, {
                              className: "w-full",
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "absolute bottom-0 left-8 w-full h-[32%] max-[550px]:h-[34%] max-[550px]:left-5 font-jockey text-3xl max-[550px]:text-xl",
                              children: "5 $U2U Await you",
                            }),
                          ],
                        })
                      : (0, i.jsx)(d.Z.AirdropClaimBitget, {
                          className: "w-full",
                        }),
                }),
                (0, i.jsxs)("div", {
                  className: "w-full flex flex-col gap-5",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "w-full flex items-center gap-5",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)(d.Z.StarPurple, {
                            className: "w-[30px]",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "airdrop-modal.tsx",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex-1 flex items-center",
                          children: "Simple transaction, get 5 $U2U instantly",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full flex items-center gap-5",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)(d.Z.StarPurple, {
                            className: "w-[30px]",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "airdrop-modal.tsx",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex-1 flex items-center",
                          children: "Limited to 1 claim per wallet",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full flex items-center gap-5",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)(d.Z.StarPurple, {
                            className: "w-[30px]",
                            "data-sentry-element": "unknown",
                            "data-sentry-source-file": "airdrop-modal.tsx",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex-1 flex items-center",
                          children:
                            "Explore U2U Network Ecosystem in early stage",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "w-full flex items-center justify-between gap-2 laptop:gap-6",
                  children: [
                    (0, i.jsx)(h.Z, {
                      scale: "md",
                      className:
                        "!text-[17px] w-[35%] text-[#7EFFC5] laptop:w-full p-4 !rounded-lg flex items-center justify-center",
                      onClick: () => {
                        window.open(k.$v, "_blank");
                      },
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "airdrop-modal.tsx",
                      children: "Learn More",
                    }),
                    (0, i.jsx)(h.Z, {
                      scale: "md",
                      className:
                        "!text-[17px] w-[65%] laptop:w-full p-4 !rounded-lg bg-[#7EFFC5] text-[#141414] hover:!bg-transparent hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid border-[#8C8C99]",
                      onClick: () => a(),
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "airdrop-modal.tsx",
                      children: "Claim Free Gas Fee Here",
                    }),
                  ],
                }),
              ],
            });
          },
          eN = (e) => {
            let { isOpen: t, onClose: s, onAirdropNow: a } = e;
            return (0, i.jsxs)(D.Z, {
              isOpen: t,
              onClose: s,
              title: "Ineligible",
              className:
                "relative border border-[#7EFFC5] !max-w-[500px] max-[500px]:w-[350px] w-[500px] tablet:max-w-[450px] p-6 flex flex-col gap-5",
              "data-sentry-element": "Modal",
              "data-sentry-component": "NotEligbleModal",
              "data-sentry-source-file": "airdrop-modal.tsx",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full flex flex-col gap-5",
                  children: (0, i.jsx)("div", {
                    className: "w-full h-[1px] bg-[#1F1F1F] mb-2",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "w-full flex justify-center",
                  children: (0, i.jsx)(d.Z.NotEligible, {
                    className: "w-[40%]",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "airdrop-modal.tsx",
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "w-full flex flex-col gap-5 text-center text-balance px-2 py-5",
                  children:
                    "You need a successful bridge transaction from $USDT to U2U Network with at least $10. Complete the transaction and return to claim your reward!",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "w-full flex items-center justify-between gap-2 laptop:gap-6",
                  children: [
                    (0, i.jsx)(h.Z, {
                      scale: "md",
                      className:
                        "!text-[18px] w-full text-[#7EFFC5] p-4 !rounded-lg flex items-center justify-center gap-1 border border-solid border-[#8C8C99]",
                      onClick: () => {
                        window.open(k.$v, "_blank");
                      },
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "airdrop-modal.tsx",
                      children: "Learn More",
                    }),
                    (0, i.jsx)(h.Z, {
                      scale: "md",
                      className:
                        "!text-[18px] w-full p-4 !rounded-lg bg-[#7EFFC5] text-[#141414] hover:!bg-transparent hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid border-[#8C8C99]",
                      onClick: () => a(),
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "airdrop-modal.tsx",
                      children: "Airdrop Now",
                    }),
                  ],
                }),
              ],
            });
          },
          ev = (e) => {
            let { isOpen: t, onClose: s } = e,
              { userClaimStatus: a } = (0, ey.ZP)();
            return (0, i.jsxs)(D.Z, {
              isOpen: t,
              onClose: s,
              className:
                "relative border border-[#7EFFC5] !max-w-[500px] max-[500px]:w-[350px] w-[500px] tablet:max-w-[450px] p-6 flex flex-col gap-5",
              "data-sentry-element": "Modal",
              "data-sentry-component": "ClaimSuccessModal",
              "data-sentry-source-file": "airdrop-modal.tsx",
              children: [
                (0, i.jsx)("div", {
                  style: { fontFamily: "Inter Bolder" },
                  className:
                    "w-full text-center text-balance text-[#7EFFC5] !text-[24px] pb-10",
                  children: "Gas Fee Successfully Claimed",
                }),
                (0, i.jsx)("div", {
                  className: "w-full flex justify-center",
                  children: (0, i.jsx)(d.Z.ClaimSuccess, {
                    className: "w-[60%]",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "airdrop-modal.tsx",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "w-full text-center text-balance pt-5 text-[16px]",
                  children:
                    "Your claim of 5 $U2U was successful! Thank you for being a part of the Coinlist campaign.",
                }),
                (0, i.jsx)("div", {
                  className: "w-full flex flex-col gap-5",
                  children: (0, i.jsx)("div", {
                    style: {
                      background:
                        "linear-gradient(90deg, #9299FF 0%, #4651F6 100%)",
                    },
                    className: "w-full h-[1px] bg-[#9299FF]",
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "w-full flex items-center justify-between",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-[#929292] text-[15px]",
                      children: "Tx Hash",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "text-[white] text-[16px] font-bold cursor-pointer hover:underline",
                      onClick: () =>
                        window.open(
                          ""
                            .concat("https://u2uscan.xyz/tx/", "/")
                            .concat(null == a ? void 0 : a.txHash),
                          "_blank"
                        ),
                      children: (0, ei.Xn)(null == a ? void 0 : a.txHash),
                    }),
                  ],
                }),
                (0, i.jsx)(h.Z, {
                  onClick: s,
                  scale: "md",
                  className:
                    "bg-[#7EFFC5] text-[#141414] hover:!bg-transparent hover:text-[#7EFFC5] py-4 mt-5",
                  "data-sentry-element": "Button",
                  "data-sentry-source-file": "airdrop-modal.tsx",
                  children: "Nice!",
                }),
              ],
            });
          },
          eC = (e) => {
            let { isOpen: t, onClose: s, onRetryClaim: a } = e;
            return (0, i.jsxs)(D.Z, {
              isOpen: t,
              onClose: s,
              title: "Airdrop Claim Failed",
              className:
                "relative border border-[#7EFFC5] !max-w-[550px] max-[550px]:w-[360px] w-[550px] tablet:max-w-[450px] p-6 flex flex-col gap-5",
              "data-sentry-element": "Modal",
              "data-sentry-component": "AirdropClaimErrModal",
              "data-sentry-source-file": "airdrop-modal.tsx",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full flex flex-col gap-5",
                  children: (0, i.jsx)("div", {
                    style: {
                      background:
                        "linear-gradient(90deg, #9299FF 0%, #4651F6 100%)",
                    },
                    className: "w-full h-[1px] bg-[#9299FF] mb-2",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "w-full relative flex justify-center",
                  children: (0, i.jsx)(d.Z.AirdropClaimError, {
                    className: "w-[60%]",
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "airdrop-modal.tsx",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "w-full text-center text-balance",
                  children:
                    "Claim failed due to network or eligibility issues. Please try again or contact support.",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "w-full flex items-center justify-between gap-2 laptop:gap-6",
                  children: [
                    (0, i.jsx)(h.Z, {
                      scale: "md",
                      className:
                        "!text-[17px] w-full p-4 !rounded-lg text-[#7EFFC5] flex items-center justify-center",
                      onClick: () => {},
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "airdrop-modal.tsx",
                      children: "Contact Support",
                    }),
                    (0, i.jsx)(h.Z, {
                      scale: "md",
                      className:
                        "!text-[17px] w-full p-4 !rounded-lg bg-[#7EFFC5] text-[#141414] hover:!bg-transparent hover:text-[#7EFFC5]  flex items-center justify-center gap-1 border border-solid border-[#8C8C99]",
                      onClick: () => a(),
                      "data-sentry-element": "Button",
                      "data-sentry-source-file": "airdrop-modal.tsx",
                      children: "Retry Claim",
                    }),
                  ],
                }),
              ],
            });
          },
          eF = async () => (await O.QR.get("/airdrop/bridge/get")).data.data;
        function ek(e) {
          let { isOpen: t, onClose: s } = e,
            [a, l] = (0, o.useState)(!0),
            { userClaimStatus: r, setUserClaimStatus: n } = (0, ey.ZP)();
          (0, W.ZP)(t ? "get-claim-status" : null, eF, {
            refreshInterval:
              null !== r && 2 !== r.claimStatus && 1 !== r.claimStatus
                ? 0
                : 1e3,
            onSuccess: (e) => {
              n(e), a && l(!1);
            },
          });
          let d = async () => {
              await O.QR.post("/airdrop/bridge/claim"), n(await eF());
            },
            c = async () => {
              r &&
                (n({ claimStatus: 1, isEligibility: r.isEligibility }),
                await O.QR.post("/airdrop/bridge/claim"),
                n(await eF()));
            };
          return a
            ? (0, i.jsx)(ej.Z, {
                isLoading: t,
                title: "Loading claim data. Please wait...",
                onClose: s,
              })
            : r
            ? r.isEligibility
              ? 0 === r.claimStatus
                ? (0, i.jsx)(ew, { isOpen: t, onClose: s, onClaim: d })
                : 3 === r.claimStatus
                ? (0, i.jsx)(ev, { isOpen: t, onClose: s })
                : 4 === r.claimStatus
                ? (0, i.jsx)(eC, { isOpen: t, onClose: s, onRetryClaim: c })
                : 1 === r.claimStatus || 2 === r.claimStatus
                ? (0, i.jsx)(ej.Z, {
                    isLoading: t,
                    title: "Processing your claim... Please wait.",
                    onClose: s,
                  })
                : void 0
              : (0, i.jsx)(eN, {
                  isOpen: t,
                  onClose: s,
                  onAirdropNow: () => window.open(k.An, "_blank"),
                })
            : null;
        }
        s(3479);
        let eA = () =>
            (0, i.jsxs)("div", {
              className: "flex flex-col gap-6 max-[1000px]:gap-1 w-[100%]",
              "data-sentry-component": "TitleWithDes",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, i.jsx)("h1", {
                  className:
                    " text-white font-jockey text-2xl leading-[64px] text-[64px] max-[1000px]:text-[30px] font-normal mb-4",
                  children:
                    "public" === k.pi.toLowerCase()
                      ? "U2U Incentivized Mainnet Saga"
                      : "Unlock Rewards  with Bitget Wallet Staking!",
                }),
                (0, i.jsx)("p", {
                  style: {
                    background: "linear-gradient(to right,#9299FF, #4651F6)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                  className:
                    " font-jockey font-normal text-[32px] leading-[35px] max-[1000px]:text-[24px]",
                  children:
                    "public" === k.pi.toLowerCase()
                      ? "Stake, Earn $U2U Instantly, and Watch Your Rewards Grow!"
                      : "Stake $pUSDT & Claim $U2U Instantly",
                }),
              ],
            }),
          eS = () =>
            (0, i.jsx)("div", {
              className:
                "flex items-center justify-center w-[100%] flex-1 !pointer-events-none",
              "data-sentry-component": "Crystal",
              "data-sentry-source-file": "index.tsx",
              children: (0, i.jsx)(d.Z.Crystal, {
                "data-sentry-element": "unknown",
                "data-sentry-source-file": "index.tsx",
              }),
            }),
          eE = (e) => {
            let { steps: t } = e;
            return (0, i.jsx)("div", {
              className: "flex w-[100%] flex-col gap-0",
              "data-sentry-component": "Steps",
              "data-sentry-source-file": "index.tsx",
              children: t.map((e, s) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: "w-full flex flex-row items-center",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "w-[50px] h-[172px] max-[728px]:h-[270px] flex flex-col items-center justify-center",
                        children: [
                          (0, i.jsx)("div", {
                            style: {
                              background: e.isCompleted
                                ? 0 === s
                                  ? "#7EFFC5"
                                  : s > 0 && t[s - 1].isCompleted
                                  ? "linear-gradient(#164f1e, #0a260e)"
                                  : "#7EFFC5"
                                : s > 0 && t[s - 1].isCompleted
                                ? "linear-gradient(#3ac84d, #164f1e)"
                                : "#4451BB",
                              opacity: e.isCompleted ? 1 : 0.25,
                              borderRadius: 0 === s ? "8px 8px 0px 0px" : 0,
                            },
                            className: "w-[6px] flex-1",
                          }),
                          (0, i.jsx)("div", {
                            style: {
                              background: e.isCompleted
                                ? "#7EFFC5"
                                : "linear-gradient(180deg, #4A4C54 0%, #202020 100%)",
                              color: e.isCompleted ? "#4651F6" : "white",
                              border: e.isCompleted
                                ? "none"
                                : "1px solid #242424",
                              boxShadow: e.isCompleted
                                ? "none"
                                : "0px 2px 2px 0px rgba(255, 255, 255, 0.25) inset",
                            },
                            className:
                              "w-[50px] h-[50px] bg-[black] flex items-center justify-center rounded-full font-jockey font-medium text-[20px]",
                            children: s + 1,
                          }),
                          (0, i.jsx)("div", {
                            style: {
                              background: e.isCompleted
                                ? "linear-gradient(#6cdaa9, #164f1e)"
                                : "#4451BB",
                              opacity:
                                s !== t.length - 1
                                  ? e.isCompleted
                                    ? 1
                                    : 0.25
                                  : 0,
                            },
                            className: "w-[6px] flex-1",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex-1 flex justify-center flex-col px-5 gap-1",
                        children: [
                          e.isCompleted
                            ? (0, i.jsxs)("div", {
                                className:
                                  "font-jockey font-normal text-[#7EFFC5] text-[24px]",
                                children: [
                                  (0, i.jsxs)("a", {
                                    "data-tooltip-id": "step_".concat(s),
                                    className: "cursor-pointer",
                                    "data-tooltip-content": "".concat(
                                      e.type,
                                      " completed. Ready for the next step!"
                                    ),
                                    children: [
                                      e.isCompleted && "✅",
                                      "\xa0\xa0\xa0",
                                      e.type,
                                      " Completed",
                                    ],
                                  }),
                                  (0, i.jsx)(eh.u, {
                                    id: "step_".concat(s),
                                    style: {
                                      backgroundColor: "#4651F6",
                                      color: "white",
                                      fontFamily: "Inter Bold",
                                      fontSize: "14px",
                                    },
                                  }),
                                ],
                              })
                            : (0, i.jsx)("div", {
                                className:
                                  "font-jockey font-normal text-white text-[24px]",
                                children: e.title,
                              }),
                          (0, i.jsx)("div", {
                            className: "font-normal text-[#AFAFAF] text-[20px]",
                            children: e.description,
                          }),
                          (0, i.jsx)("div", {
                            className: "font-normal text-[#AFAFAF] text-[20px]",
                            children: e.actionButton && e.actionButton,
                          }),
                        ],
                      }),
                    ],
                  },
                  s
                )
              ),
            });
          },
          eU = () =>
            (0, i.jsx)(eb.Z, {
              style: { height: "100%" },
              "data-sentry-element": "Marquee",
              "data-sentry-component": "SectionMarquee",
              "data-sentry-source-file": "index.tsx",
              children: (0, i.jsxs)("div", {
                style: {
                  background:
                    "linear-gradient(90deg, #67C99D 0%, #28513F 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
                className:
                  "flex flex-row gap-10 items-center tracking-[4px] font-jockey text-[36px]",
                children: [
                  (0, i.jsx)("div", {
                    className: "h-full flex items-center",
                    children: "Deposit locked until campaign ended.",
                  }),
                  (0, i.jsx)("div", {
                    className: "w-[45px] aspect-square",
                    children: (0, i.jsx)(
                      d.Z.StarsIcon,
                      {
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "index.tsx",
                      },
                      "1"
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className: "h-full flex items-center",
                    children: "Join before campaign ends",
                  }),
                  (0, i.jsx)("div", {
                    className: "w-[45px] aspect-square",
                    children: (0, i.jsx)(
                      d.Z.StarsIcon,
                      {
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "index.tsx",
                      },
                      "2"
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className: "h-full flex items-center",
                    children: "Deposit locked until campaign ended.",
                  }),
                  (0, i.jsx)("div", {
                    className: "w-[45px] aspect-square",
                    children: (0, i.jsx)(
                      d.Z.StarsIcon,
                      {
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "index.tsx",
                      },
                      "3"
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className: "h-full flex items-center",
                    children: "Join before campaign ends",
                  }),
                  (0, i.jsx)("div", {
                    className: "w-[45px] aspect-square",
                    children: (0, i.jsx)(
                      d.Z.StarsIcon,
                      {
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "index.tsx",
                      },
                      "4"
                    ),
                  }),
                ],
              }),
            });
        function eB() {
          let { isValidSession: e } = (0, f.aC)(),
            { setOpen: t } = (0, b.Z)(),
            { userClaimStatus: s } = (0, ey.ZP)(),
            a = eg(1e3),
            [l, n] = (0, o.useState)(!1),
            c = [
              {
                title: (0, i.jsx)(i.Fragment, {
                  children: "Bridge & Start - Move $USDT with Owlto",
                }),
                description:
                  "Begin by bridging your $USDT to the U2U Chain with Owlto.",
                type: "Bridge",
                isCompleted: !!e && null != s && !!s.isEligibility,
                actionButton: (0, i.jsx)(h.Z, {
                  style: {
                    fontFamily: "Inter Bolder",
                    pointerEvents:
                      e && (null == s ? void 0 : s.isEligibility)
                        ? "none"
                        : "auto",
                    filter:
                      e && (null == s ? void 0 : s.isEligibility)
                        ? "grayscale(100%) brightness(60%)"
                        : "none",
                  },
                  onClick: () => {
                    if (!e) {
                      t(!0);
                      return;
                    }
                    n(!l);
                  },
                  className:
                    "px-10 py-3 bg-[#4651F6] border-none text-white rounded-lg text-[16px] cursor-pointer max-[1000px]:w-[100%] mt-2 mb-10 hover:bg-[#4651F6] hover:text-[white]",
                  children: "Bridge to U2U",
                }),
              },
              {
                title: (0, i.jsx)(i.Fragment, {
                  children: "Claim Your Free Gas Fees",
                }),
                type: "Claim",
                description: "Receive free gas fees to kickstart your journey.",
                isCompleted:
                  !!e &&
                  null != s &&
                  !!s.isEligibility &&
                  (null == s ? void 0 : s.claimStatus) === r.SUCCESS,
                actionButton:
                  e && (null == s ? void 0 : s.isEligibility) === !1
                    ? (0, i.jsx)(h.Z, {
                        style: {
                          pointerEvents: "none",
                          filter: "grayscale(100%) brightness(60%)",
                        },
                        onClick: () => {
                          if (!e) {
                            t(!0);
                            return;
                          }
                          n(!l);
                        },
                        className:
                          "px-10 py-3 bg-[#4651F6] border-none text-white rounded-lg text-[16px] cursor-pointer max-[1000px]:w-[100%] mt-2 mb-10 hover:bg-[#4651F6] hover:text-[white]",
                        children: "Claim Free Gas",
                      })
                    : (0, i.jsx)(h.Z, {
                        style: {
                          pointerEvents:
                            e &&
                            (null == s ? void 0 : s.claimStatus) === r.SUCCESS
                              ? "none"
                              : "auto",
                          filter:
                            e &&
                            (null == s ? void 0 : s.claimStatus) === r.SUCCESS
                              ? "grayscale(100%) brightness(60%)"
                              : "none",
                        },
                        onClick: () => {
                          if (!e) {
                            t(!0);
                            return;
                          }
                          n(!l);
                        },
                        className:
                          "px-10 py-3 bg-[#4651F6] border-none text-white rounded-lg text-[16px] cursor-pointer max-[1000px]:w-[100%] mt-2 mb-10 hover:bg-[#4651F6] hover:text-[white]",
                        children: "Claim Free Gas",
                      }),
              },
              {
                title: "Stake & Earn Big - Boost Your U2U Rewards",
                description: "Stake your $USDT to earn $U2U tokens instantly!",
                isCompleted: !1,
                type: "Stake",
                actionButton: (0, i.jsx)(h.Z, {
                  style: { fontFamily: "Inter Bolder" },
                  onClick: () => {
                    let e = document.getElementById("section_2");
                    e &&
                      window.scrollTo({ top: e.offsetTop, behavior: "smooth" });
                  },
                  className:
                    "px-10 py-3 bg-[#4651F6] border-none text-white rounded-lg text-[16px] cursor-pointer max-[1000px]:w-[100%] mt-2 mb-10 hover:bg-[#4651F6] hover:text-[white]",
                  children: "Stake pUSDT",
                }),
              },
            ];
          return (0, i.jsxs)("div", {
            className:
              "w-[100%] desktop:max-w-[100%] min-h-[100vh] relative flex flex-col items-center",
            "data-sentry-component": "SectionOne",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, i.jsx)("div", {
                className: "absolute left-0 top-0 w-[100%] h-[100%]",
                children: (0, i.jsxs)("div", {
                  className:
                    "absolute z-0 landing-page w-full h-full px-4 tablet:px-8 desktop:px-[10%] top-5 flex flex-col items-center justify-center tablet:pb-0",
                  children: [
                    (0, i.jsx)(d.Z.EllipseSectionOne, {
                      className:
                        "absolute tablet:block z-0 -translate-x-[50%] max-[728px]:translate-x-0 max-[728px]:-top-[15%]",
                      "data-sentry-element": "unknown",
                      "data-sentry-source-file": "index.tsx",
                    }),
                    (0, i.jsx)("div", {
                      className: "relative",
                      children: (0, i.jsx)("div", {
                        className: "absolute flex w-full justify-center z-0 ",
                        children: (0, i.jsx)(d.Z.EllipseSectionOne, {
                          className: "z-0 h-revert-layer",
                          "data-sentry-element": "unknown",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute left-0 top-0 w-[100%] h-[100%] overflow-hidden",
                children: (0, i.jsxs)("div", {
                  className:
                    "absolute z-0 w-full h-full px-4 tablet:px-8 flex flex-col items-center justify-center tablet:pb-0",
                  children: [
                    (0, i.jsx)(d.Z.EllipseBackground, {
                      className:
                        "absolute tablet:block z-0 translate-x-[110%] translate-y-[30%] max-[728px]:translate-x-[30%] max-[728px]:top-[20%]",
                      "data-sentry-element": "unknown",
                      "data-sentry-source-file": "index.tsx",
                    }),
                    (0, i.jsx)("div", {
                      className: "relative",
                      children: (0, i.jsx)("div", {
                        className: "absolute flex w-full justify-center z-0 ",
                        children: (0, i.jsx)(d.Z.EllipseBackground, {
                          className: "z-0 h-revert-layer",
                          "data-sentry-element": "unknown",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              a
                ? (0, i.jsxs)("div", {
                    className:
                      "w-full z-10 flex flex-col py-10 px-10 max-w-screen-mobile",
                    "data-sentry-component": "renderMobile",
                    "data-sentry-source-file": "index.tsx",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "w-[100%] flex flex-col text-center text-balance",
                        children: (0, i.jsx)(eA, {
                          "data-sentry-element": "TitleWithDes",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "w-[100%]",
                        children: (0, i.jsx)(eS, {
                          "data-sentry-element": "Crystal",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "w-full mt-16",
                        children: (0, i.jsx)(eE, {
                          steps: c,
                          "data-sentry-element": "Steps",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                    ],
                  })
                : (0, i.jsxs)("div", {
                    style: { minHeight: "calc(100vh - 160px)" },
                    className:
                      "w-full z-10 flex flex-row pt-32 max-w-screen-desktop max-[1600px]:px-20 max-[768px]:px-0",
                    "data-sentry-component": "renderDesktop",
                    "data-sentry-source-file": "index.tsx",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "w-[55%] flex flex-col",
                        children: [
                          (0, i.jsx)(eA, {
                            "data-sentry-element": "TitleWithDes",
                            "data-sentry-source-file": "index.tsx",
                          }),
                          (0, i.jsx)("div", {
                            className: "w-full mt-16",
                            children: (0, i.jsx)(eE, {
                              steps: c,
                              "data-sentry-element": "Steps",
                              "data-sentry-source-file": "index.tsx",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "w-[45%] px-8 flex items-center",
                        children: (0, i.jsx)(eS, {
                          "data-sentry-element": "Crystal",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                    ],
                  }),
              (0, i.jsx)("div", {
                className:
                  "w-full h-[80px] flex items-center bg-[#7EFFC5] mt-10",
                children: (0, i.jsx)(eU, {
                  "data-sentry-element": "SectionMarquee",
                  "data-sentry-source-file": "index.tsx",
                }),
              }),
              (0, i.jsx)(ek, {
                isOpen: l,
                onClose: () => n(!1),
                "data-sentry-element": "AirdropModal",
                "data-sentry-source-file": "index.tsx",
              }),
            ],
          });
        }
        var eZ = s(27648);
        function eI(e) {
          let { className: t, width: s, height: a } = e;
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: a,
            className: t,
            viewBox: "0 0 24 24",
            fill: "none",
            "data-sentry-element": "svg",
            "data-sentry-component": "TwitterIcon",
            "data-sentry-source-file": "Twitter.tsx",
            children: (0, i.jsx)("path", {
              d: "M18.9014 1H22.5816L14.5415 10.1893L24 22.6938H16.5941L10.7935 15.1099L4.15631 22.6938H0.473926L9.07356 12.8648L0 1H7.59394L12.8372 7.932L18.9014 1ZM17.6098 20.491H19.649L6.48589 3.08705H4.29759L17.6098 20.491Z",
              fill: "#AFAFAF",
              "data-sentry-element": "path",
              "data-sentry-source-file": "Twitter.tsx",
            }),
          });
        }
        function eT(e) {
          let { className: t, width: s, height: a } = e;
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: a,
            className: t,
            viewBox: "0 0 25 25",
            fill: "none",
            "data-sentry-element": "svg",
            "data-sentry-component": "TelegramIcon",
            "data-sentry-source-file": "Telegram.tsx",
            children: (0, i.jsx)("path", {
              d: "M12.1465 0.250488C18.7271 0.250488 24.1465 5.66984 24.1465 12.2505C24.1465 18.8795 18.7271 24.2505 12.1465 24.2505C5.51745 24.2505 0.146484 18.8795 0.146484 12.2505C0.146484 5.66984 5.51745 0.250488 12.1465 0.250488ZM17.6626 8.42791C17.711 8.28275 17.711 8.13759 17.6626 7.94404C17.6626 7.84726 17.5658 7.7021 17.5175 7.65371C17.3723 7.50855 17.1304 7.50855 17.0336 7.50855C16.5981 7.50855 15.8723 7.75049 12.5336 9.15371C11.3723 9.63758 9.04971 10.6053 5.56584 12.1537C4.98519 12.3956 4.69487 12.5892 4.64648 12.8311C4.5981 13.2182 5.22713 13.3634 5.95294 13.6053C6.58197 13.7989 7.40455 14.0408 7.84003 14.0408C8.22713 14.0408 8.66261 13.8956 9.14648 13.5569C12.3884 11.3311 14.082 10.2182 14.1787 10.2182C14.2755 10.2182 14.3723 10.1698 14.4207 10.2182C14.5175 10.315 14.5175 10.4118 14.4691 10.4602C14.4207 10.7021 11.3723 13.5086 11.1787 13.7021C10.5013 14.3795 9.72713 14.815 10.9368 15.5892C11.9529 16.2666 12.5336 16.7021 13.5981 17.3795C14.2755 17.815 14.8078 18.3473 15.4852 18.2989C15.8239 18.2505 16.1626 17.9602 16.3078 17.0408C16.7433 14.9602 17.5175 10.315 17.6626 8.42791Z",
              fill: "#AFAFAF",
              "data-sentry-element": "path",
              "data-sentry-source-file": "Telegram.tsx",
            }),
          });
        }
        function eD(e) {
          let { className: t, width: s, height: a } = e;
          return (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: a,
            className: t,
            viewBox: "0 0 24 24",
            fill: "none",
            "data-sentry-element": "svg",
            "data-sentry-component": "FacebookIcon",
            "data-sentry-source-file": "Facebook.tsx",
            children: [
              (0, i.jsx)("g", {
                clipPath: "url(#clip0_318_39628)",
                "data-sentry-element": "g",
                "data-sentry-source-file": "Facebook.tsx",
                children: (0, i.jsx)("path", {
                  d: "M24 12.2505C24 5.62313 18.6274 0.250488 12 0.250488C5.37264 0.250488 0 5.62313 0 12.2505C0 17.878 3.87456 22.6003 9.10128 23.8972V15.9177H6.62688V12.2505H9.10128V10.6703C9.10128 6.58601 10.9498 4.69289 14.9597 4.69289C15.72 4.69289 17.0318 4.84217 17.5685 4.99097V8.31497C17.2853 8.28521 16.7933 8.27033 16.1822 8.27033C14.2147 8.27033 13.4544 9.01577 13.4544 10.9535V12.2505H17.3741L16.7006 15.9177H13.4544V24.1627C19.3954 23.4451 24 18.3858 24 12.2505Z",
                  fill: "#AFAFAF",
                  "data-sentry-element": "path",
                  "data-sentry-source-file": "Facebook.tsx",
                }),
              }),
              (0, i.jsx)("defs", {
                "data-sentry-element": "defs",
                "data-sentry-source-file": "Facebook.tsx",
                children: (0, i.jsx)("clipPath", {
                  id: "clip0_318_39628",
                  "data-sentry-element": "clipPath",
                  "data-sentry-source-file": "Facebook.tsx",
                  children: (0, i.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white",
                    "data-sentry-element": "rect",
                    "data-sentry-source-file": "Facebook.tsx",
                  }),
                }),
              }),
            ],
          });
        }
        function eM(e) {
          let { className: t, width: s, height: a } = e;
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: a,
            className: t,
            viewBox: "0 0 24 24",
            fill: "none",
            "data-sentry-element": "svg",
            "data-sentry-component": "DiscordIcon",
            "data-sentry-source-file": "Discord.tsx",
            children: (0, i.jsx)("path", {
              d: "M20.3459 4.38457C23.0409 8.38622 24.3884 12.8779 23.8984 18.0637C23.8984 18.0637 23.8984 18.1045 23.8575 18.1045C22.0609 19.452 20.0192 20.4729 17.855 21.1262C17.8142 21.167 17.8142 21.1262 17.7734 21.1262C17.3242 20.4729 16.9159 19.8195 16.5484 19.1254C16.5484 19.0845 16.5484 19.0845 16.5484 19.0437L16.5892 19.0029C17.2425 18.7579 17.855 18.472 18.4675 18.1045C18.4675 18.1045 18.5084 18.1045 18.5084 18.0637C18.5084 18.0229 18.5084 18.0229 18.4675 17.982C18.345 17.9004 18.2225 17.8187 18.1 17.6962C18.0592 17.6962 18.0592 17.6962 18.0184 17.6962C14.1392 19.4929 9.89256 19.4929 5.97257 17.6962C5.93173 17.6962 5.8909 17.6962 5.8909 17.6962C5.7684 17.8187 5.6459 17.9004 5.5234 17.982C5.48257 18.0229 5.48257 18.0229 5.48257 18.0637C5.48257 18.1045 5.48257 18.1045 5.5234 18.1045C6.09507 18.472 6.7484 18.7579 7.40173 19.0029C7.40173 19.0029 7.40173 19.0437 7.44256 19.0437C7.44256 19.0845 7.44256 19.0845 7.44256 19.1254C7.07507 19.8195 6.66673 20.4729 6.21757 21.1262C6.17673 21.1262 6.1359 21.167 6.1359 21.1262C3.97174 20.4729 1.93008 19.452 0.133413 18.1045C0.0925798 18.1045 0.0925798 18.0637 0.0925798 18.0637C-0.315753 13.572 0.541746 9.03955 3.64507 4.38457C3.64507 4.38457 3.64507 4.38457 3.68591 4.38457C5.23757 3.64957 6.8709 3.15957 8.54506 2.87374C8.5859 2.83291 8.62673 2.87374 8.62673 2.87374C8.87173 3.28207 9.07589 3.73124 9.23923 4.13957C11.0767 3.85374 12.9142 3.85374 14.7517 4.13957C14.915 3.73124 15.1192 3.28207 15.3642 2.87374C15.3642 2.87374 15.405 2.83291 15.4459 2.87374C17.12 3.15957 18.7534 3.64957 20.305 4.38457C20.3459 4.38457 20.3459 4.38457 20.3459 4.38457ZM8.01423 15.3279C9.19839 15.3279 10.1784 14.2254 10.1784 12.9187C10.1784 11.5712 9.23923 10.5096 8.01423 10.5096C6.83007 10.5096 5.85007 11.5712 5.85007 12.9187C5.85007 14.2254 6.83007 15.3279 8.01423 15.3279ZM15.9767 15.3279C17.2017 15.3279 18.1409 14.2254 18.1409 12.9187C18.1817 11.5712 17.2017 10.5096 15.9767 10.5096C14.7926 10.5096 13.8534 11.5712 13.8534 12.9187C13.8534 14.2254 14.7926 15.3279 15.9767 15.3279Z",
              fill: "#AFAFAF",
              "data-sentry-element": "path",
              "data-sentry-source-file": "Discord.tsx",
            }),
          });
        }
        function eP(e) {
          let { className: t, width: s, height: a } = e;
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: a,
            className: t,
            viewBox: "0 0 24 24",
            fill: "none",
            "data-sentry-element": "svg",
            "data-sentry-component": "YoutubeIcon",
            "data-sentry-source-file": "Youtube.tsx",
            children: (0, i.jsx)("path", {
              d: "M23.4735 6.67642C24 8.5192 24 12.468 24 12.468C24 12.468 24 16.3729 23.4735 18.2596C23.2102 19.3126 22.3766 20.1024 21.3675 20.3656C19.4808 20.8483 12.0219 20.8483 12.0219 20.8483C12.0219 20.8483 4.5192 20.8483 2.63254 20.3656C1.6234 20.1024 0.789762 19.3126 0.526508 18.2596C0 16.3729 0 12.468 0 12.468C0 12.468 0 8.5192 0.526508 6.67642C0.789762 5.6234 1.6234 4.78976 2.63254 4.52651C4.5192 4 12.0219 4 12.0219 4C12.0219 4 19.4808 4 21.3675 4.52651C22.3766 4.78976 23.2102 5.6234 23.4735 6.67642ZM9.5649 16.0219L15.7952 12.468L9.5649 8.91408V16.0219Z",
              fill: "#AFAFAF",
              "data-sentry-element": "path",
              "data-sentry-source-file": "Youtube.tsx",
            }),
          });
        }
        function eL(e) {
          let { className: t, width: s, height: a } = e;
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: a,
            className: t,
            viewBox: "0 0 25 25",
            fill: "none",
            "data-sentry-element": "svg",
            "data-sentry-component": "LinkedinIcon",
            "data-sentry-source-file": "Linkedin.tsx",
            children: (0, i.jsx)("path", {
              d: "M22.9801 0.333984C23.8908 0.333984 24.6943 1.13756 24.6943 2.10184V22.6197C24.6943 23.584 23.8908 24.334 22.9801 24.334H2.35505C1.44434 24.334 0.694336 23.584 0.694336 22.6197V2.10184C0.694336 1.13756 1.44434 0.333984 2.35505 0.333984H22.9801ZM7.92648 20.9054V9.4947H4.39076V20.9054H7.92648ZM6.15862 7.88756C7.28362 7.88756 8.19434 6.97684 8.19434 5.85184C8.19434 4.72684 7.28362 3.76256 6.15862 3.76256C4.98005 3.76256 4.06934 4.72684 4.06934 5.85184C4.06934 6.97684 4.98005 7.88756 6.15862 7.88756ZM21.2658 20.9054V14.6376C21.2658 11.584 20.5693 9.17327 16.9801 9.17327C15.2658 9.17327 14.0872 10.1376 13.6051 11.0483H13.5515V9.4947H10.1765V20.9054H13.7122V15.2804C13.7122 13.7804 13.9801 12.334 15.8551 12.334C17.6765 12.334 17.6765 14.0483 17.6765 15.334V20.9054H21.2658Z",
              fill: "#AFAFAF",
              "data-sentry-element": "path",
              "data-sentry-source-file": "Linkedin.tsx",
            }),
          });
        }
        var eR = () => {
            let e = eg();
            return (0, i.jsx)("footer", {
              className: "w-full h-full desktop:px-[100px] px-4 bg-[#141414]",
              "data-sentry-component": "Footer",
              "data-sentry-source-file": "index.tsx",
              children: (0, i.jsxs)("div", {
                className:
                  "items-center gap-4 flex-col tablet:flex-row flex justify-between desktop:py-9 py-4 border-t border-[#7EFFC5] ",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex items-center gap-4",
                    children: e
                      ? (0, i.jsx)(d.Z.Logo, {
                          width: "80%",
                          className:
                            "tablet:w-10 tablet:h-10 w-[32px] h-[32px]",
                        })
                      : (0, i.jsx)(d.Z.Logo, {
                          className:
                            "tablet:w-10 tablet:h-10 w-[32px] h-[32px]",
                        }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-4 tablet:gap-6",
                    children: [
                      (0, i.jsx)(eZ.default, {
                        href: "https://x.com/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "link-icons",
                        "aria-current": "page",
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, i.jsx)(eI, {
                          width: 20,
                          height: 20,
                          className: "desktop:w-[24px] desktop:h-[24px]",
                          "data-sentry-element": "TwitterIcon",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                      (0, i.jsx)(eZ.default, {
                        href: "https://t.me/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "link-icons",
                        "aria-current": "page",
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, i.jsx)(eT, {
                          width: 20,
                          height: 20,
                          className: "desktop:w-[24px] desktop:h-[24px]",
                          "data-sentry-element": "TelegramIcon",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          e$ = (e) => {
            let { isOpen: t, onClose: s } = e,
              a = (0, u.useTranslations)(),
              { isValidSession: l } = (0, f.aC)(),
              { setOpen: n } = (0, b.Z)(),
              [c, x] = (0, o.useState)(!1),
              { userClaimStatus: p } = (0, ey.ZP)(),
              { address: m } = (0, y.m)(),
              { onLogout: g } = (0, f.aC)(),
              j = () => {
                g(), s && s();
              };
            return (0, i.jsxs)("div", {
              "data-sentry-component": "SlideMenu",
              "data-sentry-source-file": "SidebarMenu.tsx",
              children: [
                (0, i.jsx)("button", {
                  className: "menu-icon",
                  onClick: s,
                  children: t
                    ? (0, i.jsxs)("div", {
                        className:
                          "w-full flex items-center justify-between pl-5",
                        children: [
                          (0, i.jsx)(d.Z.Logo, {
                            width: "70%",
                            className:
                              "tablet:w-10 tablet:h-10 w-[32px] h-[32px]",
                          }),
                          (0, i.jsx)(d.Z.Close, { width: 29, height: 29 }),
                        ],
                      })
                    : "",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "fullscreen-menu flex flex-col justify-between h-full ".concat(
                      t ? "open" : ""
                    ),
                  children: [
                    (0, i.jsx)("ul", {
                      className: "",
                      children: (0, i.jsx)("li", {}),
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full",
                      children: [
                        m &&
                          (0, i.jsxs)("div", {
                            className:
                              "w-full p-4 border border-solid border-[#7effc5] rounded-lg text-xl justify-center flex gap-1 items-center mb-6",
                            children: [
                              (0, i.jsx)("p", { children: "Address:" }),
                              (0, i.jsx)("p", { children: (0, ei.Xn)(m) }),
                            ],
                          }),
                        l && (null == p ? void 0 : p.isEligibility) === !1
                          ? (0, i.jsx)(h.Z, {
                              style: {
                                pointerEvents: "none",
                                filter: "grayscale(100%) brightness(60%)",
                              },
                              onClick: () => {
                                if (!l) {
                                  n(!0);
                                  return;
                                }
                                x(!c);
                              },
                              className:
                                "w-full p-4 hover:bg-gray-500 bg-[#141414] flex items-center justify-center gap-1 border border-solid border-[#8C8C99] rounded-lg text-[#000]",
                              children: (0, i.jsx)("span", {
                                className:
                                  "text-xl text-[#7EFFC5] font-semibold",
                                children: "Claim your Gas fee",
                              }),
                            })
                          : (0, i.jsx)(h.Z, {
                              style: {
                                pointerEvents:
                                  l &&
                                  (null == p ? void 0 : p.claimStatus) ===
                                    r.SUCCESS
                                    ? "none"
                                    : "auto",
                                filter:
                                  l &&
                                  (null == p ? void 0 : p.claimStatus) ===
                                    r.SUCCESS
                                    ? "grayscale(100%) brightness(60%)"
                                    : "none",
                              },
                              onClick: () => {
                                if (!l) {
                                  n(!0);
                                  return;
                                }
                                x(!c);
                              },
                              className:
                                "w-full p-4 hover:bg-gray-500 bg-[#141414] flex items-center justify-center gap-1 border border-solid border-[#8C8C99] rounded-lg text-[#000]",
                              children: (0, i.jsx)("span", {
                                className:
                                  "text-xl text-[#7EFFC5] font-semibold",
                                children: "Claim your Gas fee",
                              }),
                            }),
                        l
                          ? (0, i.jsx)(h.Z, {
                              scale: "md",
                              className:
                                "p-4 mt-4 w-full bg-[#141414] flex items-center justify-center gap-1 border border-solid border-[#8C8C99] rounded-lg text-[#000]",
                              onClick: () => j(),
                              children: (0, i.jsx)("p", {
                                className: "text-xl text-white font-semibold",
                                children: a("common.disconnect"),
                              }),
                            })
                          : (0, i.jsx)(h.Z, {
                              scale: "md",
                              className:
                                "p-4 mt-4 w-full bg-[#141414] flex items-center justify-center gap-1 border border-solid border-[#8C8C99] rounded-lg text-[#7EFFC5]",
                              onClick: () => {
                                if (!l) {
                                  n(!0), s && s();
                                  return;
                                }
                                s && s();
                              },
                              children: "Connect Wallet",
                            }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(ek, {
                  isOpen: c,
                  onClose: () => x(!1),
                  "data-sentry-element": "AirdropModal",
                  "data-sentry-source-file": "SidebarMenu.tsx",
                }),
              ],
            });
          },
          eH = s(18951),
          e_ = () => {
            let e = (0, x.cI)({
                defaultValues: { isOpenSideBar: !1, isOpenConnectWallet: !1 },
              }),
              t = (0, u.useTranslations)(),
              [s, a] = (0, o.useState)(!1),
              { setOpen: l } = (0, b.Z)(),
              { isValidSession: n } = (0, f.aC)(),
              { userClaimStatus: c } = (0, ey.ZP)(),
              { onLogout: p } = (0, f.aC)(),
              m = eg(1280),
              [j, w] = (0, o.useState)(!1),
              { address: N } = (0, y.m)(),
              v = async () => {
                try {
                  await p(), w(!1);
                } catch (e) {
                  console.error("Error logout wallet:", e);
                }
              },
              C = (0, o.useMemo)(
                () => (null == c ? void 0 : c.claimStatus) === r.SUCCESS,
                [c]
              );
            return (0, i.jsxs)(x.RV, {
              ...e,
              "data-sentry-element": "FormProvider",
              "data-sentry-component": "LandingHeader",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, i.jsx)("nav", {
                  className:
                    "p-4 bg-[#141414] tablet:px-[100px] tablet:py-4 w-full flex",
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex w-full tablet:flex-row tablet:gap-2 desktop:gap-0 tablet:items-center justify-between desktop:py-10 laptop:py-10 desktop:px-8 mobile:px-5",
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex gap-6",
                        children: (0, i.jsx)(eZ.default, {
                          href: "/",
                          className:
                            "min-w-[150px] flex items-center tablet:mb-0",
                          "data-sentry-element": "Link",
                          "data-sentry-source-file": "index.tsx",
                          children: m
                            ? (0, i.jsx)(d.Z.Logo, {
                                width: "80%",
                                className:
                                  "tablet:w-10 tablet:h-10 w-[32px] h-[32px]",
                              })
                            : (0, i.jsx)(d.Z.Logo, {
                                className:
                                  "tablet:w-10 tablet:h-10 w-[32px] h-[32px]",
                              }),
                        }),
                      }),
                      (0, i.jsx)("button", {
                        className: "z-50 laptop:hidden block",
                        onClick: () => e.setValue("isOpenSideBar", !0),
                        children: (0, i.jsx)(d.Z.Menu, {
                          width: 24,
                          height: 24,
                          "data-sentry-element": "unknown",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "desktop:flex laptop:flex hidden flex-1 justify-end gap-3",
                        children: [
                          !C &&
                            (0, i.jsx)(i.Fragment, {
                              children:
                                n &&
                                (null == c ? void 0 : c.isEligibility) === !1
                                  ? (0, i.jsx)(h.Z, {
                                      style: {
                                        pointerEvents: "none",
                                        filter:
                                          "grayscale(100%) brightness(60%)",
                                      },
                                      onClick: () => {
                                        if (!n) {
                                          l(!0);
                                          return;
                                        }
                                        a(!s);
                                      },
                                      className:
                                        "disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:border-none disabled:text-[#92929299] font-semibold !text-sm tablet:text-sm text-center text-nowrap cursor-pointer px-10 !py-2 tablet:px-4 bg-[#4651F6] !border-[#4651F6] items-center gap-1 rounded-[32px] text-[white] hover:brightness-75 transition-all",
                                      children: "Claim Free Gas",
                                    })
                                  : (0, i.jsx)(h.Z, {
                                      style: {
                                        pointerEvents:
                                          n &&
                                          (null == c
                                            ? void 0
                                            : c.claimStatus) === r.SUCCESS
                                            ? "none"
                                            : "auto",
                                        filter:
                                          n &&
                                          (null == c
                                            ? void 0
                                            : c.claimStatus) === r.SUCCESS
                                            ? "grayscale(100%) brightness(60%)"
                                            : "none",
                                      },
                                      onClick: () => {
                                        if (!n) {
                                          l(!0);
                                          return;
                                        }
                                        a(!s);
                                      },
                                      className:
                                        "disabled:bg-[#4A4A4A] disabled:!shadow-none disabled:border-none disabled:text-[#92929299] font-semibold !text-sm tablet:text-sm text-center text-nowrap cursor-pointer px-10 !py-2 tablet:px-4 bg-[#4651F6] !border-[#4651F6] items-center gap-1 rounded-[32px] text-[white] hover:brightness-75 transition-all",
                                      children: "Claim Free Gas",
                                    }),
                            }),
                          (0, i.jsx)("div", {
                            className:
                              "gap-2 mt-4 tablet:mt-0 hidden laptop:flex",
                            children: (0, i.jsx)(g, {
                              className:
                                "!px-3 !py-2 !rounded-[32px] font-semibold !text-sm  tablet:px-4 bg-[#7EFFC5] flex items-center gap-1 tablet:rounded-[32px] text-[#141414]",
                              showConnectButton: !0,
                              "data-sentry-element": "ConnectWalletButton",
                              "data-sentry-source-file": "index.tsx",
                              children: (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsxs)("button", {
                                    onClick: () => w(!j),
                                    className:
                                      "px-3 py-2 tablet:px-4 tablet:py-2 bg-[#7EFFC5] flex items-center gap-1 border border-solid border-[#8C8C99] rounded-[24px] tablet:rounded-[32px] text-[#141414]",
                                    children: [
                                      (0, i.jsx)("p", {
                                        className:
                                          "text-xs tablet:text-sm text-[#141414] font-semibold text-center",
                                        children: (0, ei.Xn)(N),
                                      }),
                                      (0, i.jsx)(eH.Z, {
                                        stroke: "#141414",
                                        className:
                                          "w-4 h-4 tablet:w-5 tablet:h-5",
                                        "data-sentry-element": "ArrowRightIcon",
                                        "data-sentry-source-file": "index.tsx",
                                      }),
                                    ],
                                  }),
                                  j &&
                                    (0, i.jsx)("button", {
                                      onClick: v,
                                      className:
                                        "mt-2 w-[150px] px-3 py-2 tablet:px-4 tablet:py-2 bg-[#282828] text-[14px] text-gray-400 rounded-[24px] tablet:rounded-[32px] absolute z-20",
                                      children: t("common.disconnect"),
                                    }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(e$, {
                  isOpen: e.watch("isOpenSideBar"),
                  onClose: () => e.setValue("isOpenSideBar", !1),
                  "data-sentry-element": "SidebarMenu",
                  "data-sentry-source-file": "index.tsx",
                }),
                (0, i.jsx)(ek, {
                  isOpen: s,
                  onClose: () => a(!1),
                  "data-sentry-element": "AirdropModal",
                  "data-sentry-source-file": "index.tsx",
                }),
              ],
            });
          };
        function ez() {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(e_, {
                "data-sentry-element": "LandingHeader",
                "data-sentry-source-file": "page.tsx",
              }),
              (0, i.jsx)(eB, {
                "data-sentry-element": "SectionOne",
                "data-sentry-source-file": "page.tsx",
              }),
              (0, i.jsx)(ef, {
                "data-sentry-element": "HomeSectionTwo",
                "data-sentry-source-file": "page.tsx",
              }),
              (0, i.jsx)(eR, {
                "data-sentry-element": "Footer",
                "data-sentry-source-file": "page.tsx",
              }),
            ],
          });
        }
      },
    },
    function (e) {
      e.O(0, [9237, 9472, 5096, 5230, 1708, 2971, 7042, 1744], function () {
        return e((e.s = 71434));
      }),
        (_N_E = e.O());
    },
  ]);
