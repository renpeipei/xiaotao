!function(e) {
	function t(i) {
		if (n[i]) return n[i].exports;
		var a = n[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "http://kzcdn.itc.cn/bus/static-apps/572aba2ba3fa15f816ef1936/front/", t(0)
}([function(e, t, n) {
	function i() {
		return !(!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || "#mobile_view" === window.location.hash || window.location.search.match(/embed=true/i)) && window.SOHUZ && "4" != SOHUZ.page.page_type)
	}

	function a() {
		return (!!navigator.userAgent.match(/msie/i)) && false
	}! function() {
		if (!i()) {
			if (a() && window.SOHUZ) return void(window.location = "https://www.kuaizhan.com/homepage/support-mobile?site_id=" + SOHUZ.page.site_id + "&url=" + encodeURIComponent(window.location));
			n(1);
			var e = n(6);
			n(7), n(8);
			var t = new e;
			window.SOHUZ && t.init({
				title: SOHUZ.page.site_name,
				home_url: SOHUZ.page.site_url,
				logo: $('link[data-role="site-logo"]')[0].getAttribute("href"),
				menus: SOHUZ.nav || []
			})
		}
	}()
}, function(e, t, n) {
	var i = n(2);
	"string" == typeof i && (i = [
		[e.id, i, ""]
	]);
	n(5)(i, {});
	i.locals && (e.exports = i.locals)
}, function(e, t, n) {
	t = e.exports = n(3)(), t.push([e.id, '.kz-pc{background:#f5f5f5;font-family:PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans}.kz-pc .kz-pc-header{width:100%;height:80px;margin-bottom:10px;position:relative;z-index:12}.kz-pc .kz-pc-header .kz-pc-header-inner{height:100%;width:840px;margin:auto;box-sizing:border-box;padding-top:10px}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-logo]{max-width:160px;height:60px;margin-right:10px;display:inline-block;vertical-align:top;text-decoration:none;line-height:60px}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-logo] img{max-width:100%;max-height:100%;display:block;margin:auto;position:relative;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%)}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-title]{font-size:23px;display:inline-block;color:inherit;vertical-align:top;overflow:hidden;max-width:176px;white-space:nowrap;height:60px;line-height:60px}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu]{display:inline-block;margin-left:140px;height:60px;line-height:60px}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] ul{height:100%}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] li{display:inline-block;max-width:100px;margin-right:10px;color:inherit;white-space:nowrap;overflow:hidden}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] li a{color:inherit}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu]{position:relative;width:10px;max-width:100px;text-align:right;margin-right:0;height:6px;overflow:visible;vertical-align:top;margin-top:27px}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu]>ul{display:none;position:absolute;width:150px;background:#fff;height:auto;box-shadow:0 2px 4px rgba(0,0,0,.3);top:43px;right:0}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu]>ul li{padding:0 10px;color:#333;margin-right:0;height:38px;line-height:38px;text-align:left;display:block;max-width:100%}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu]>ul li:hover{background:#f5f5f5}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu]:after{content:".";font-size:0;position:absolute;background:url(' + n(4) + ');width:11px;height:6px;right:0;top:-3px;transition:all .5s}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu].hover>ul{display:block}.kz-pc .kz-pc-header .kz-pc-header-inner [data-pc-menu] [data-pc-role=more-menu].hover:after{transform:rotate(180deg);-webkit-transform:rotate(180deg)}.kz-pc .kz-pc-header.no-logo [data-pc-title]{max-width:336px}.kz-pc .kz-pc-side-nav{width:140px;position:absolute;top:90px;color:#999;font-size:14px;left:50%;margin-left:280px}.kz-pc .kz-pc-side-nav #qr-code-inner{background:#fff;width:100%;text-align:center;padding:20px;box-sizing:border-box}.kz-pc .kz-pc-side-nav #qr-code-inner img{width:100px;height:100px;margin:auto}.kz-pc .kz-pc-side-nav #qr-code-inner p{text-align:center;line-heigh:140%;margin-top:20px}.kz-pc .kz-pc-side-nav .kz-ad{text-align:center;line-height:140%;margin-top:20px}.kz-pc .kz-pc-side-nav .kz-ad a{color:#80a4f9}.kz-pc .kz-pc-side-nav.scrolling{position:fixed}.kz-pc #phone-main{width:640px;position:absolute!important;top:90px!important;left:50%!important;margin-left:-420px!important;border:20px solid #fff;background:#fff}.kz-pc #js-theme-nav,.kz-pc .kz-ad-layer,.kz-pc .pc-hidden,.kz-pc .phone-header{display:none!important}.kz-pc .kz-pc-loading{position:fixed;z-index:999999;width:100%;height:100%;top:0;left:0;background:#fff}.kz-pc .kz-pc-loading>span{background:url("https://pic.kuaizhan.com/g1/M01/9B/22/CgpQU1c60fSAHBgoAAC8fdvVPWo2331912");width:348px;height:222px;position:absolute;top:50%;left:50%;margin-left:-174px;margin-top:-111px}', ""])
}, function(e, t) {
	e.exports = function() {
		var e = [];
		return e.toString = function() {
			for (var e = [], t = 0; t < this.length; t++) {
				var n = this[t];
				n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
			}
			return e.join("")
		}, e.i = function(t, n) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var i = {}, a = 0; a < this.length; a++) {
				var r = this[a][0];
				"number" == typeof r && (i[r] = !0)
			}
			for (a = 0; a < t.length; a++) {
				var o = t[a];
				"number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
			}
		}, e
	}
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAAAXNSR0IArs4c6QAAAFdJREFUGBlj+P//Px8QbwVifQYcACjXDMR5DECCC4iPAvEbIMbQABTrBOJ/QJwMNgvI4AViDA1AMZjCNBRL0TXgVAjThaThO5ANshrVRJhCGA3VsA+bQgDznXdkqwD2cwAAAABJRU5ErkJggg=="
}, function(e, t, n) {
	function i(e, t) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n],
				a = f[i.id];
			if (a) {
				a.refs++;
				for (var r = 0; r < a.parts.length; r++) a.parts[r](i.parts[r]);
				for (; r < i.parts.length; r++) a.parts.push(d(i.parts[r], t))
			} else {
				for (var o = [], r = 0; r < i.parts.length; r++) o.push(d(i.parts[r], t));
				f[i.id] = {
					id: i.id,
					refs: 1,
					parts: o
				}
			}
		}
	}

	function a(e) {
		for (var t = [], n = {}, i = 0; i < e.length; i++) {
			var a = e[i],
				r = a[0],
				o = a[1],
				p = a[2],
				c = a[3],
				d = {
					css: o,
					media: p,
					sourceMap: c
				};
			n[r] ? n[r].parts.push(d) : t.push(n[r] = {
				id: r,
				parts: [d]
			})
		}
		return t
	}

	function r(e, t) {
		var n = m(),
			i = z[z.length - 1];
		if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), z.push(t);
		else {
			if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			n.appendChild(t)
		}
	}

	function o(e) {
		e.parentNode.removeChild(e);
		var t = z.indexOf(e);
		t >= 0 && z.splice(t, 1)
	}

	function p(e) {
		var t = document.createElement("style");
		return t.type = "text/css", r(e, t), t
	}

	function c(e) {
		var t = document.createElement("link");
		return t.rel = "stylesheet", r(e, t), t
	}

	function d(e, t) {
		var n, i, a;
		if (t.singleton) {
			var r = v++;
			n = k || (k = p(t)), i = s.bind(null, n, r, !1), a = s.bind(null, n, r, !0)
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), i = h.bind(null, n), a = function() {
			o(n), n.href && URL.revokeObjectURL(n.href)
		}) : (n = p(t), i = l.bind(null, n), a = function() {
			o(n)
		});
		return i(e),
			function(t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					i(e = t)
				} else a()
			}
	}

	function s(e, t, n, i) {
		var a = n ? "" : i.css;
		if (e.styleSheet) e.styleSheet.cssText = x(t, a);
		else {
			var r = document.createTextNode(a),
				o = e.childNodes;
			o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r)
		}
	}

	function l(e, t) {
		var n = t.css,
			i = t.media;
		if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
		else {
			for (; e.firstChild;) e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(n))
		}
	}

	function h(e, t) {
		var n = t.css,
			i = t.sourceMap;
		i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
		var a = new Blob([n], {
				type: "text/css"
			}),
			r = e.href;
		e.href = URL.createObjectURL(a), r && URL.revokeObjectURL(r)
	}
	var f = {},
		u = function(e) {
			var t;
			return function() {
				return "undefined" == typeof t && (t = e.apply(this, arguments)), t
			}
		},
		g = u(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
		}),
		m = u(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		k = null,
		v = 0,
		z = [];
	e.exports = function(e, t) {
		t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
		var n = a(e);
		return i(n, t),
			function(e) {
				for (var r = [], o = 0; o < n.length; o++) {
					var p = n[o],
						c = f[p.id];
					c.refs--, r.push(c)
				}
				if (e) {
					var d = a(e);
					i(d, t)
				}
				for (var o = 0; o < r.length; o++) {
					var c = r[o];
					if (0 === c.refs) {
						for (var s = 0; s < c.parts.length; s++) c.parts[s]();
						delete f[c.id]
					}
				}
			}
	};
	var x = function() {
		var e = [];
		return function(t, n) {
			return e[t] = n, e.filter(Boolean).join("\n")
		}
	}()
}, function(e, t) {
	var n = function() {
		this._v = "0.0.1", this.$body = $("body"), this.$html = $("html")
	};
	n.fn = function(e, t) {
		n.prototype[e] = t
	}, e.exports = n
}, function(e, t, n) {
	var i = n(6);
	i.fn("init-menu", function(e) {
		var t = e.menus;
		this.$menu_wrapper.html("<ul></ul>");
		for (var n = this.$menu_wrapper.find("ul"), i = 0; i < (t.length > 5 ? 5 : t.length); i++) n.append("<li><a href='" + t[i].link + "'>" + t[i].title + "</li>");
		if (t.length > 5) {
			n.append("<li data-pc-role='more-menu'></li>");
			var a = n.find("[data-pc-role='more-menu']");
			a.on("mouseover", function(e) {
				$(e.currentTarget).addClass("hover")
			}), this.$header.on("mouseout", function(e) {
				$(e.toElement).closest(".kz-pc-header").size() <= 0 && a.removeClass("hover")
			}), a.append("<ul></ul>");
			for (var r = a.find("ul"), i = 5; i < t.length; i++) r.append("<li><a href='" + t[i].link + "'>" + t[i].title + "</li>")
		}
	})
}, function(e, t, n) {
	var i = n(6);
	i.fn("init", function(e) {
		if (!window.qiao || "object" != typeof window.qiao) {
			var t = this;
			this.$html.addClass("kz-pc"),
			this.$body.prepend("<div class='kz-pc-loading'><span></span></div><div class='kz-pc-header kz-b-c-t kz-f-c-tc'><div class='kz-pc-header-inner'><a data-pc-logo></a><a data-pc-title></a><span data-pc-menu></span></div></div><div class='kz-pc-side-nav'><div id='qr-code-inner'><p>扫描二维码<br/>用手机访问本站</p></div></div>"),
			this.$logo_wrapper = this.$body.find("[data-pc-logo]"),
			this.$loading = this.$body.find(".kz-pc-loading"),
			this.$title_wrapper = this.$body.find("[data-pc-title]"),
			this.$menu_wrapper = this.$body.find("[data-pc-menu]"),
			this.$nav_wrapper = this.$body.find(".kz-pc-side-nav"),
			this.$header = this.$body.find(".kz-pc-header");
			t["init-menu"](e);
			e.logo ? (
				this.$logo_wrapper.html("<img src='" + e.logo + "'>").attr("href", e.home_url),
				this.$logo_wrapper.find("img").one("load", function() {
					t.$title_wrapper.css({
						"max-width": 336 - t.$logo_wrapper.width()
					})
					var n = 840 - t.$logo_wrapper.width() - t.$title_wrapper.width() - t.$menu_wrapper.width() - 15;
					t.$menu_wrapper.css({
						"margin-left": n + "px"
					})
				})
				) : (this.$logo_wrapper.hide(), this.$header.addClass("no-logo")),
			$(document).on("scroll", function() {
				if (document.body.scrollTop > 80) {
					if (!t.$nav_wrapper.is(".scrolling")) {
						var e = t.$nav_wrapper.position();
						t.$nav_wrapper.addClass("scrolling").css({
							top: 0,
							left: e.left
						})
					}
				} else t.$nav_wrapper.is(".scrolling") && t.$nav_wrapper.removeClass("scrolling").attr("style", "")
			}), e.title ? this.$title_wrapper.text(e.title).attr("href", e.home_url) : this.$title_wrapper.hide(), $(function() {
				t.$main = $("#phone-main");
				try {
					t.$main.addClass("kz-pc-main")
				} catch (e) {}
				t.$loading.remove()
			})
			$(function() {
                		var $header = $('.kz-pc-header');
                		var $mod_header = $('[data-role="nav-header"]');
               			var $mod_title = $('.title', $mod_header);
               			var bg_color = '#' + $mod_header.attr('data-theme-class').split('-')[1];
                		var color = '#fff';
                		try {
                			color = $mod_title[0] && window.getComputedStyle($mod_title[0]).color;
               	 		} catch(err) {
                			color = '#fff';
               			}
				if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(bg_color)) {
                    			bg_color = $mod_header.attr('data-theme-color');
                		}
                		$header[0].style.setProperty('background-color', bg_color, 'important');
                		$header[0].style.setProperty('color', color, 'important');
				if (!(window.SOHUZ && window.SOHUZ.page && window.SOHUZ.page.use_header)) {
                			$header[0].style.setProperty('display', 'none');
                			var $phone_main = $('.kz-pc .phone-main')
                			var $side_nav = $('.kz-pc .kz-pc-side-nav')
                			if ($phone_main[0] && $side_nav[0]) {
                				$phone_main[0].style.setProperty('top', '10px', 'important')
                				$side_nav[0].style.setProperty('top', '10px', 'important')
                			}
                		}
            		})
		}
	})
}])
