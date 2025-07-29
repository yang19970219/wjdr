(function (t) {
  function n(n) {
    for (
      var i, r, c = n[0], o = n[1], p = n[2], u = 0, m = [];
      u < c.length;
      u++
    )
      (r = c[u]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && m.push(s[r][0]),
        (s[r] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    l && l(n);
    while (m.length) m.shift()();
    return e.push.apply(e, p || []), a();
  }
  function a() {
    for (var t, n = 0; n < e.length; n++) {
      for (var a = e[n], i = !0, c = 1; c < a.length; c++) {
        var o = a[c];
        0 !== s[o] && (i = !1);
      }
      i && (e.splice(n--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var i = {},
    s = { app: 0 },
    e = [];
  function r(n) {
    if (i[n]) return i[n].exports;
    var a = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = i),
    (r.d = function (t, n, a) {
      r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, n) {
      if ((1 & n && (t = r(t)), 8 & n)) return t;
      if (4 & n && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            a,
            i,
            function (n) {
              return t[n];
            }.bind(null, i)
          );
      return a;
    }),
    (r.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (r.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = c.push.bind(c);
  (c.push = n), (c = c.slice());
  for (var p = 0; p < c.length; p++) n(c[p]);
  var l = o;
  e.push([0, "chunk-vendors"]), a();
})({
  0: function (t, n, a) {
    t.exports = a("56d7");
  },
  "2a7f": function (t, n, a) {
    "use strict";
    a("4df0");
  },
  4532: function (t, n) {
    (document.onkeydown = function () {
      return (
        (!window.event || 123 != window.event.keyCode) &&
        (!window.event.ctrlKey ||
          !window.event.shiftKey ||
          73 != window.event.keyCode) &&
        (!window.event.shiftKey || 121 != window.event.keyCode) &&
        void 0
      );
    }),
      (document.oncontextmenu = new Function("event.returnValue=false"));
  },
  "4a34": function (t, n, a) {
    "use strict";
    a("c274");
  },
  "4df0": function (t, n, a) {},
  "56d7": function (t, n, a) {
    "use strict";
    a.r(n);
    a("cadf"), a("551c"), a("f751"), a("097d");
    var i = a("2b0e"),
      s = function () {
        var t = this,
          n = t._self._c;
        return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
      },
      e = [],
      r = { name: "app", components: {} },
      c = r,
      o = (a("4a34"), a("2877")),
      p = Object(o["a"])(c, s, e, !1, null, null, null),
      l = p.exports,
      u = a("8c4f"),
      m = function () {
        var t = this,
          n = t._self._c;
        return n("div", { staticClass: "wrap" }, [
          n("img", {
            staticClass: "banner",
            attrs: {
              src: "images/Index/banner.png",
              alt: "",
            },
          }),
          t._m(0),
          n(
            "div",
            { staticClass: "meau" },
            [
              n("router-link", { attrs: { to: "/register" } }, [
                n("img", {
                  attrs: {
                    src: "images/Index/btn1.png",
                    alt: "",
                  },
                }),
              ]),
              n("router-link", { attrs: { to: "/Recharge" } }, [
                n("img", {
                  attrs: {
                    src: "images/Index/btn2.png",
                    alt: "",
                  },
                }),
              ]),
              n("router-link", { attrs: { to: "/Benefit" } }, [
                n("img", {
                  attrs: {
                    src: "images/Index/btn3.png",
                    alt: "",
                  },
                }),
              ]),
              n("router-link", { attrs: { to: "/Method" } }, [
                n("img", {
                  attrs: {
                    src: "images/Index/btn4.png",
                    alt: "",
                  },
                }),
              ]),
            ],
            1
          ),
          t._m(1),
          t._m(2),
          t._m(3),
          t.show
            ? n("div", { staticClass: "mask", on: { click: t.showMask } })
            : t._e(),
          t.show
            ? n("div", { staticClass: "info" }, [
                n("p", [t._v("《必看提示》")]),
                n("p", [t._v("游戏账号官网内注册，登录游戏选择邮箱登录")]),
                n("p", [t._v("------------------------------------------")]),
                n("p", [t._v("新手奖励上线自动发送到邮箱，无需兑换")]),
                n("button", { staticClass: "aaa", on: { click: t.showMask } }, [
                  t._v("确定"),
                ]),
              ])
            : t._e(),
        ]);
      },
      d = [
        function () {
          var t = this,
            n = t._self._c;
          return n(
            "a",
            {
              staticClass: "qqBox",
              attrs: {
                href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=242nodG-o6f8ALaffvmQPYIAIR9rY6UY&authKey=dv0oWvf3G6o33kV8nQIlt3eHb8D1wd%2Bf8EDdWUxStCcYpNvElL6e%2BHUHYk%2FqtoXB&noverify=0&group_code=1009565483",
              },
            },
            [
              n("p", [t._v("客服Q群：1009565483")]),
              n("p", [t._v("点击即可加群")]),
            ]
          );
        },
        function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "textarea" }, [
            n("img", {
              attrs: {
                src: "images/Index/btn5.png",
                alt: "",
              },
            }),
            n("p", [
              t._v(
                "点击上方注册下载，可注册下载游戏，游戏内登录请选择邮箱登录方式"
              ),
            ]),
            n("p", [
              t._v("CDK兑换只能在官网兑换，新手福利无需领取上线自动到邮箱内"),
            ]),
            n("p", [t._v("-----------------")]),
            n("p", [t._v("申请Q群：1009565483 获取最新消息")]),
            n("p", [t._v("10元新手福利=32888寒冬之星（永久限购一次）")]),
            n("p", [t._v("------")]),
            n("p", [t._v("上线福利(邮箱内领取)")]),
            n("p", [t._v("统帅8，158888钻石")]),
            n("p", [t._v("200小时建造加速")]),
            n("p", [t._v("1000个5分钟建造加速，史诗通用英雄信物*300")]),
            n("p", [t._v("100个1W英雄经验，传说通用英雄信物*100")]),
            n("p", [t._v("------")]),
            n("p", [
              t._v(
                "每日任务完成活跃度可领取钻石1W+寒冬之星1000，轻松日常奖励丰厚！"
              ),
            ]),
            n("p", [t._v("统帅等级礼包每日免费礼包大幅度提升，奖励多多")]),
            n("p", [
              t._v(
                "竞技场爆改所有名次奖励，每日最多可得1W寒冬之星+2W钻石，每周最高可得10W钻石8W竞技币"
              ),
            ]),
            n("p", [
              t._v("网页累计充值额外赠送寒冬之星（均为正常充值后免费赠送）"),
            ]),
          ]);
        },
        function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "textarea titRight" }, [
            n("img", {
              attrs: {
                src: "images/Index/btn6.png",
                alt: "",
              },
            }),
            n("p", [t._v("1. 提升数据库性能升级配置")]),
            n("p", [t._v("2. 红装修改为第10天开放")]),
            n("p", [t._v("3. 世界聊天修改为24炉子，联盟聊天修改为21炉子")]),
          ]);
        },
        function () {
          var t = this,
            n = t._self._c;
          return n(
            "a",
            {
              staticClass: "float",
              attrs: { href: "https://wjdr.cqp9.com/index/cs" },
            },
            [
              n("img", {
                attrs: {
                  src: "images/Index/btn7.png",
                  alt: "",
                },
              }),
            ]
          );
        },
      ],
      b = {
        name: "Index",
        data: function () {
          return { show: !0 };
        },
        methods: {
          showMask: function () {
            this.show = !1;
          },
        },
      },
      f = b,
      v = (a("f75d"), Object(o["a"])(f, m, d, !1, null, null, null)),
      g = v.exports,
      h = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      _ = [
        function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "wrap" }, [
            n("img", {
              staticClass: "banner",
              attrs: {
                src: "images/Register/banner.png",
                alt: "",
              },
            }),
            n("a", { staticClass: "qqBox boxSmall", attrs: { href: "" } }, [
              n("p", [t._v("注册下载")]),
            ]),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Register/btn8.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/index/register?p=11308" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Register/btn1.png",
                    alt: "点击注册",
                  },
                }),
              ]
            ),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Register/btn7.png",
                alt: "",
              },
            }),
            n("div", { staticClass: "meau" }, [
              n("a", { attrs: { href: "https://ff.xyff.site/gVDz" } }, [
                n("img", {
                  attrs: {
                    src: "images/Register/btn2.png",
                    alt: "下载地址1",
                  },
                }),
              ]),
              n("a", { attrs: { href: "https://ff.xyff.site/gVDz" } }, [
                n("img", {
                  attrs: {
                    src: "images/Register/btn3.png",
                    alt: "下载地址2",
                  },
                }),
              ]),
              n("a", { attrs: { href: "https://z.188.city/z9Ri" } }, [
                n("img", {
                  attrs: {
                    src: "images/Register/btn4.png",
                    alt: "下载地址3",
                  },
                }),
              ]),
              n("a", { attrs: { href: "https://z.188.city/z9Ri" } }, [
                n("img", {
                  attrs: {
                    src: "images/Register/btn5.png",
                    alt: "下载地址4",
                  },
                }),
              ]),
            ]),
            n("div", { staticClass: "textarea" }, [
              n("img", {
                attrs: {
                  src: "images/Register/btn6.png",
                  alt: "",
                },
              }),
              n("p", [
                t._v(
                  "点击上方注册下载，可注册下载游戏，游戏内登录请选择邮箱登录方式"
                ),
              ]),
              n("p", [t._v("CDK兑换以及新手奖励均在官网兑换，游戏内无法兑换")]),
              n("p", [t._v("---------")]),
              n("p", [t._v("下载地址 1 - 2 为双端下载，3 - 4 为备用IOS下载")]),
              n("p", [
                t._v("如下载地址1无法下载，请自行更换其他下载地址再次尝试"),
              ]),
              n("p", [t._v("如不能解决请申请客服Q群处理")]),
            ]),
          ]);
        },
      ],
      j = {
        name: "Register",
        data: function () {
          return {};
        },
        methods: {},
      },
      w = j,
      y = (a("a93c"), Object(o["a"])(w, h, _, !1, null, "228c5f42", null)),
      q = y.exports,
      C = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      x = [
        function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "wrap" }, [
            n("img", {
              staticClass: "banner",
              attrs: {
                src: "images/Recharge/banner.png",
                alt: "",
              },
            }),
            n("a", { staticClass: "qqBox boxSmall", attrs: { href: "" } }, [
              n("p", [t._v("充值与充值福利")]),
            ]),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Recharge/btn2.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/player/index" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Recharge/btn1.png",
                    alt: "游戏充值",
                  },
                }),
              ]
            ),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Recharge/btn4.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/index/reward" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Recharge/btn5.png",
                    alt: "点击领取福利",
                  },
                }),
              ]
            ),
            n("div", { staticClass: "textarea" }, [
              n("img", {
                attrs: {
                  src: "images/Recharge/btn3.png",
                  alt: "",
                },
              }),
              n("p", [t._v("充值账号请输入登录游戏的账号")]),
              n("p", [t._v("点击头像显示王国几就是几区")]),
              n("p", [t._v("--")]),
              n("p", [
                t._v("游戏充值福利请前往官网主页 游戏攻略 - 版本介绍内查看"),
              ]),
              n("p", [t._v("--")]),
              n("p", [
                t._v(
                  "推荐购买10元新手福利，30,98,198,328五档首冲礼包！性价比超高！均可购买"
                ),
              ]),
              n("p", [t._v("--")]),
              n("p", [t._v("10元新手福利（限购一次），购买后可获得以下道具")]),
              n("p", [t._v("--")]),
              n("p", [t._v("寒冬之星X32888")]),
              n("p", [t._v("--")]),
              n("p", [t._v("30元新手福利（限购一次），购买后可获得以下道具")]),
              n("p", [t._v("--")]),
              n("p", [
                t._v(
                  "统帅点X10000，100点强化经验零件X10，专精能源石X10，寒冬之星X3000，钻石X3000"
                ),
              ]),
              n("p", [t._v("--")]),
              n("p", [t._v("98元新手福利（限购一次），购买后可获得以下道具")]),
              n("p", [t._v("--")]),
              n("p", [
                t._v(
                  "统帅点X35000,100点强化经验零件X35,专精能源石X35,寒冬之星X9800,钻石X11000"
                ),
              ]),
              n("p", [t._v("--")]),
              n("p", [t._v("198元新手福利（限购一次），购买后可获得以下道具")]),
              n("p", [t._v("--")]),
              n("p", [
                t._v(
                  "统帅点X80000,100点强化经验零件X70,专精能源石X70,寒冬之星X19800,钻石X23000"
                ),
              ]),
              n("p", [t._v("--")]),
              n("p", [t._v("328元新手福利（限购一次），购买后可获得以下道具")]),
              n("p", [t._v("--")]),
              n("p", [
                t._v(
                  "统帅点X120000,100点强化经验零件X125,专精能源石X125,寒冬之星X32800,钻石X40000"
                ),
              ]),
            ]),
          ]);
        },
      ],
      X = {
        name: "Recharge",
        data: function () {
          return {};
        },
        methods: {},
      },
      k = X,
      W = (a("f48b"), Object(o["a"])(k, C, x, !1, null, "fda91ae4", null)),
      O = W.exports,
      B = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      M = [
        function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "wrap" }, [
            n("img", {
              staticClass: "banner",
              attrs: {
                src: "images/Benefit/banner.png",
                alt: "",
              },
            }),
            n("a", { staticClass: "qqBox boxSmall", attrs: { href: "" } }, [
              n("p", [t._v("福利兑换")]),
            ]),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Benefit/btn3.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/index/gift?p=novice" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Benefit/btn1.png",
                    alt: "点击领取",
                  },
                }),
              ]
            ),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Benefit/btn4.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/index/cdk" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Benefit/btn2.png",
                    alt: "点击兑换CDK",
                  },
                }),
              ]
            ),
            n("div", { staticClass: "textarea" }, [
              n("img", {
                attrs: {
                  src: "images/Benefit/btn5.png",
                  alt: "",
                },
              }),
              n("p", [
                t._v(
                  "重大节日都会推出新的免费CDK，一定要申请Q群，获取最新消息哦！"
                ),
              ]),
              n("p", [t._v("--")]),
              n("p", [t._v("申请Q群：1009565483 获取最新消息")]),
              n("p", [t._v("10元新手福利=32888寒冬之星（永久限购一次）")]),
              n("p", [t._v("------")]),
              n("p", [t._v("上线福利(邮箱内领取)")]),
              n("p", [t._v("统帅8，158888钻石")]),
              n("p", [t._v("200小时建造加速")]),
              n("p", [t._v("1000个5分钟建造加速，史诗通用英雄信物*300")]),
              n("p", [t._v("100个1W英雄经验，传说通用英雄信物*100")]),
              n("p", [t._v("------")]),
              n("p", [
                t._v(
                  "每日任务完成活跃度可领取钻石1W+寒冬之星1000，轻松日常奖励丰厚！"
                ),
              ]),
              n("p", [t._v("统帅等级礼包每日免费礼包大幅度提升，奖励多多")]),
              n("p", [
                t._v(
                  "竞技场爆改所有名次奖励，每日最多可得1W寒冬之星+2W钻石，每周最高可得10W钻石8W竞技币"
                ),
              ]),
              n("p", [
                t._v("网页累计充值额外赠送寒冬之星（均为正常充值后免费赠送）"),
              ]),
            ]),
          ]);
        },
      ],
      R = {
        name: "Benefit",
        data: function () {
          return {};
        },
        methods: {},
      },
      S = R,
      D = (a("ab99"), Object(o["a"])(S, B, M, !1, null, "ce20261e", null)),
      K = D.exports,
      P = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      Q = [
        function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "wrap" }, [
            n("img", {
              staticClass: "banner",
              attrs: {
                src: "images/Method/banner.png",
                alt: "",
              },
            }),
            n("a", { staticClass: "qqBox boxSmall", attrs: { href: "" } }, [
              n("p", [t._v("游戏攻略")]),
            ]),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Method/btn3.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/index/introduce" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Method/btn1.png",
                    alt: "版本设定",
                  },
                }),
              ]
            ),
            n("img", {
              staticClass: "tit",
              attrs: {
                src: "images/Method/btn4.png",
                alt: "",
              },
            }),
            n(
              "a",
              {
                staticClass: "btn",
                attrs: { href: "https://wjdr.cqp9.com/index/introduce" },
              },
              [
                n("img", {
                  attrs: {
                    src: "images/Method/btn2.png",
                    alt: "游戏攻略",
                  },
                }),
              ]
            ),
            n("div", { staticClass: "textarea" }, [
              n("img", {
                attrs: {
                  src: "images/Method/btn5.png",
                  alt: "",
                },
              }),
              n("p", [
                t._v(
                  "每日任务完成活跃度可领取钻石1W+寒冬之星1000，轻松日常奖励丰厚！"
                ),
              ]),
              n("p", [t._v("统帅等级礼包每日免费礼包大幅度提升，奖励多多")]),
              n("p", [
                t._v(
                  "竞技场爆改所有名次奖励，每日最多可得1W寒冬之星+2W钻石，每周最高可得10W钻石8W竞技币"
                ),
              ]),
              n("p", [
                t._v("网页累计充值额外赠送寒冬之星（均为正常充值后免费赠送）"),
              ]),
            ]),
          ]);
        },
      ],
      z = {
        name: "Method",
        data: function () {
          return {};
        },
        methods: {},
      },
      I = z,
      Y = (a("2a7f"), Object(o["a"])(I, P, Q, !1, null, "003d087c", null)),
      V = Y.exports;
    i["a"].use(u["a"]);
    var H = new u["a"]({
      routes: [
        { path: "*", redirect: "/home" },
        { path: "/home", component: g },
        { path: "/register", component: q },
        { path: "/Recharge", component: O },
        { path: "/Benefit", component: K },
        { path: "/Method", component: V },
      ],
    });
    a("4532");
    (i["a"].config.productionTip = !1),
      new i["a"]({
        el: "#app",
        render: function (t) {
          return t(l);
        },
        router: H,
      });
  },
  "7d43": function (t, n, a) {},
  a33f: function (t, n, a) {},
  a93c: function (t, n, a) {
    "use strict";
    a("7d43");
  },
  ab99: function (t, n, a) {
    "use strict";
    a("f318");
  },
  c274: function (t, n, a) {},
  e5c2: function (t, n, a) {},
  f318: function (t, n, a) {},
  f48b: function (t, n, a) {
    "use strict";
    a("a33f");
  },
  f75d: function (t, n, a) {
    "use strict";
    a("e5c2");
  },
});
