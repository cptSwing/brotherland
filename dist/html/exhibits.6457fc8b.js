!function n(i, s, a) {
    function r(e, t) {
        if (!s[e]) {
            if (!i[e]) {
                var o = "function" == typeof require && undefined;
                if (!t && o) return o(e, !0);
                if (l) return l(e, !0);
                throw (t = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", t;
            }
            o = s[e] = {
                exports: {}
            }, i[e][0].call(o.exports, function(t) {
                return r(i[e][1][t] || t);
            }, o, o.exports, n, i, s, a);
        }
        return s[e].exports;
    }
    for(var l = "function" == typeof require && undefined, t = 0; t < a.length; t++)r(a[t]);
    return r;
}({
    1: [
        function(t, e, o) {
            (function(e) {
                (function() {
                    "use strict";
                    function h(t) {
                        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t;
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        })(t);
                    }
                    function f(t, e) {
                        var o, n, i, s, a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (a) return n = (o = !0, false), {
                            s: function() {
                                a = a.call(t);
                            },
                            n: function() {
                                var t = a.next();
                                return o = t.done, t;
                            },
                            e: function(t) {
                                n = !0, i = t;
                            },
                            f: function() {
                                try {
                                    o || null == a.return || a.return();
                                } finally{
                                    if (n) throw i;
                                }
                            }
                        };
                        if (Array.isArray(t) || (a = r(t)) || e && t && "number" == typeof t.length) return a && (t = a), s = 0, {
                            s: e = function() {},
                            n: function() {
                                return s >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[s++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: e
                        };
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    function n(t) {
                        return function(t) {
                            if (Array.isArray(t)) return i(t);
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                        }(t) || r(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function r(t, e) {
                        var o;
                        if (t) return "string" == typeof t ? i(t, e) : "Map" === (o = "Object" === (o = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : o) || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0;
                    }
                    function i(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for(var o = 0, n = new Array(e); o < e; o++)n[o] = t[o];
                        return n;
                    }
                    function s(t, e) {
                        for(var o = 0; o < e.length; o++){
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                        }
                    }
                    function a(t, e, o) {
                        e in t ? Object.defineProperty(t, e, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = o;
                    }
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.default = void 0;
                    var t = function() {
                        function i(t, e) {
                            var o, n = this;
                            if (!(this instanceof i)) throw new TypeError("Cannot call a class as a function");
                            a(this, "defaultOptions", {
                                sourceAttr: "href",
                                overlay: !0,
                                overlayOpacity: .7,
                                spinner: !0,
                                nav: !0,
                                navText: [
                                    "&lsaquo;",
                                    "&rsaquo;"
                                ],
                                captions: !0,
                                captionDelay: 0,
                                captionSelector: "img",
                                captionType: "attr",
                                captionsData: "title",
                                captionPosition: "bottom",
                                captionClass: "",
                                close: !0,
                                closeText: "&times;",
                                swipeClose: !0,
                                showCounter: !0,
                                fileExt: "png|jpg|jpeg|gif|webp",
                                animationSlide: !0,
                                animationSpeed: 250,
                                preloading: !0,
                                enableKeyboard: !0,
                                loop: !0,
                                rel: !1,
                                docClose: !0,
                                swipeTolerance: 50,
                                className: "simple-lightbox",
                                widthRatio: .8,
                                heightRatio: .9,
                                scaleImageToRatio: !1,
                                disableRightClick: !1,
                                disableScroll: !0,
                                alertError: !0,
                                alertErrorMessage: "Image not found, next image will be loaded",
                                additionalHtml: !1,
                                history: !0,
                                throttleInterval: 0,
                                doubleTapZoom: 2,
                                maxZoom: 10,
                                htmlClass: "has-lightbox",
                                rtl: !1,
                                fixedClass: "sl-fixed",
                                fadeSpeed: 300,
                                uniqueImages: !0,
                                focus: !0,
                                scrollZoom: !0,
                                scrollZoomFactor: .5,
                                download: !1
                            }), a(this, "transitionPrefix", void 0), a(this, "isPassiveEventsSupported", void 0), a(this, "transitionCapable", !1), a(this, "isTouchDevice", "ontouchstart" in window), a(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)), a(this, "initialLocationHash", void 0), a(this, "pushStateSupport", "pushState" in history), a(this, "isOpen", !1), a(this, "isAnimating", !1), a(this, "isClosing", !1), a(this, "isFadeIn", !1), a(this, "urlChangedOnce", !1), a(this, "hashReseted", !1), a(this, "historyHasChanges", !1), a(this, "historyUpdateTimeout", null), a(this, "currentImage", void 0), a(this, "eventNamespace", "simplelightbox"), a(this, "domNodes", {}), a(this, "loadedImages", []), a(this, "initialImageIndex", 0), a(this, "currentImageIndex", 0), a(this, "initialSelector", null), a(this, "globalScrollbarWidth", 0), a(this, "controlCoordinates", {
                                swipeDiff: 0,
                                swipeYDiff: 0,
                                swipeStart: 0,
                                swipeEnd: 0,
                                swipeYStart: 0,
                                swipeYEnd: 0,
                                mousedown: !1,
                                imageLeft: 0,
                                zoomed: !1,
                                containerHeight: 0,
                                containerWidth: 0,
                                containerOffsetX: 0,
                                containerOffsetY: 0,
                                imgHeight: 0,
                                imgWidth: 0,
                                capture: !1,
                                initialOffsetX: 0,
                                initialOffsetY: 0,
                                initialPointerOffsetX: 0,
                                initialPointerOffsetY: 0,
                                initialPointerOffsetX2: 0,
                                initialPointerOffsetY2: 0,
                                initialScale: 1,
                                initialPinchDistance: 0,
                                pointerOffsetX: 0,
                                pointerOffsetY: 0,
                                pointerOffsetX2: 0,
                                pointerOffsetY2: 0,
                                targetOffsetX: 0,
                                targetOffsetY: 0,
                                targetScale: 0,
                                pinchOffsetX: 0,
                                pinchOffsetY: 0,
                                limitOffsetX: 0,
                                limitOffsetY: 0,
                                scaleDifference: 0,
                                targetPinchDistance: 0,
                                touchCount: 0,
                                doubleTapped: !1,
                                touchmoveCount: 0
                            }), this.options = Object.assign(this.defaultOptions, e), this.isPassiveEventsSupported = this.checkPassiveEventsSupport(), "string" == typeof t ? (this.initialSelector = t, this.elements = Array.from(document.querySelectorAll(t))) : this.elements = void 0 !== t.length && 0 < t.length ? Array.from(t) : [
                                t
                            ], this.relatedElements = [], this.transitionPrefix = this.calculateTransitionPrefix(), this.transitionCapable = !1 !== this.transitionPrefix, this.initialLocationHash = this.hash, this.options.rel && (this.elements = this.getRelated(this.options.rel)), this.options.uniqueImages && (o = [], this.elements = Array.from(this.elements).filter(function(t) {
                                t = t.getAttribute(n.options.sourceAttr);
                                return -1 === o.indexOf(t) && (o.push(t), !0);
                            })), this.createDomNodes(), this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton), this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation), this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner), this.addEventListener(this.elements, "click." + this.eventNamespace, function(t) {
                                if (n.isValidLink(t.currentTarget)) {
                                    if (t.preventDefault(), n.isAnimating) return !1;
                                    n.initialImageIndex = n.elements.indexOf(t.currentTarget), n.openImage(t.currentTarget);
                                }
                            }), this.options.docClose && this.addEventListener(this.domNodes.wrapper, [
                                "click." + this.eventNamespace,
                                "touchstart." + this.eventNamespace
                            ], function(t) {
                                n.isOpen && t.target === t.currentTarget && n.close();
                            }), this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(t) {
                                t.target.parentElement.classList.contains("sl-image") && t.preventDefault();
                            }), this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(t) {
                                n.controlCoordinates.swipeDiff = 0, n.isAnimating && "Escape" === t.key ? (n.currentImage.setAttribute("src", ""), n.isAnimating = !1, n.close()) : n.isOpen && (t.preventDefault(), "Escape" === t.key && n.close(), !n.isAnimating && -1 < [
                                    "ArrowLeft",
                                    "ArrowRight"
                                ].indexOf(t.key) && n.loadImage("ArrowRight" === t.key ? 1 : -1));
                            }, this.options.throttleInterval)), this.addEvents();
                        }
                        var t, e, o;
                        return t = i, e = [
                            {
                                key: "checkPassiveEventsSupport",
                                value: function() {
                                    var t = !1;
                                    try {
                                        var e = Object.defineProperty({}, "passive", {
                                            get: function() {
                                                t = !0;
                                            }
                                        });
                                        window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
                                    } catch (t) {}
                                    return t;
                                }
                            },
                            {
                                key: "getCaptionElement",
                                value: function(t) {
                                    var e, o;
                                    return this.options.captionSelector.startsWith("+") ? (o = this.options.captionSelector.replace(/^\+/, "").trimStart(), !!(e = t.nextElementSibling).matches(o) && e) : this.options.captionSelector.startsWith(">") ? (o = this.options.captionSelector.replace(/^>/, "").trimStart(), t.querySelector(o)) : t.querySelector(this.options.captionSelector);
                                }
                            },
                            {
                                key: "generateQuerySelector",
                                value: function(t) {
                                    var e = t.tagName, o = t.id, n = t.className, i = t.parentNode;
                                    if ("HTML" === e) return "HTML";
                                    var s = e;
                                    if (s += "" !== o ? "#".concat(o) : "", n) for(var a = n.trim().split(/\s/), r = 0; r < a.length; r++)s += ".".concat(a[r]);
                                    for(var l = 1, d = t; d.previousElementSibling; d = d.previousElementSibling)l += 1;
                                    return s += ":nth-child(".concat(l, ")"), "".concat(this.generateQuerySelector(i), " > ").concat(s);
                                }
                            },
                            {
                                key: "createDomNodes",
                                value: function() {
                                    var t, e;
                                    this.domNodes.overlay = document.createElement("div"), this.domNodes.overlay.classList.add("sl-overlay"), this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity, this.domNodes.closeButton = document.createElement("button"), this.domNodes.closeButton.classList.add("sl-close"), this.domNodes.closeButton.innerHTML = this.options.closeText, this.domNodes.spinner = document.createElement("div"), this.domNodes.spinner.classList.add("sl-spinner"), this.domNodes.spinner.innerHTML = "<div></div>", this.domNodes.navigation = document.createElement("div"), this.domNodes.navigation.classList.add("sl-navigation"), this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>"), this.domNodes.counter = document.createElement("div"), this.domNodes.counter.classList.add("sl-counter"), this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>', this.domNodes.download = document.createElement("div"), this.domNodes.download.classList.add("sl-download"), this.domNodes.downloadLink = document.createElement("a"), this.domNodes.downloadLink.setAttribute("download", ""), this.domNodes.downloadLink.textContent = this.options.download, this.domNodes.download.appendChild(this.domNodes.downloadLink), this.domNodes.caption = document.createElement("div"), this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition), this.options.captionClass && (e = this.options.captionClass.split(/[\s,]+/), (t = this.domNodes.caption.classList).add.apply(t, n(e))), this.domNodes.image = document.createElement("div"), this.domNodes.image.classList.add("sl-image"), this.domNodes.wrapper = document.createElement("div"), this.domNodes.wrapper.classList.add("sl-wrapper"), this.domNodes.wrapper.setAttribute("tabindex", -1), this.domNodes.wrapper.setAttribute("role", "dialog"), this.domNodes.wrapper.setAttribute("aria-hidden", !1), this.options.className && this.domNodes.wrapper.classList.add(this.options.className), this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl");
                                }
                            },
                            {
                                key: "throttle",
                                value: function(t, e) {
                                    var o;
                                    return function() {
                                        o || (t.apply(this, arguments), o = !0, setTimeout(function() {
                                            return o = !1;
                                        }, e));
                                    };
                                }
                            },
                            {
                                key: "isValidLink",
                                value: function(t) {
                                    return !this.options.fileExt || t.getAttribute(this.options.sourceAttr) && new RegExp("(" + this.options.fileExt + ")($|\\?.*$)", "i").test(t.getAttribute(this.options.sourceAttr));
                                }
                            },
                            {
                                key: "calculateTransitionPrefix",
                                value: function() {
                                    var t = (document.body || document.documentElement).style;
                                    return "transition" in t ? "" : "WebkitTransition" in t ? "-webkit-" : "MozTransition" in t ? "-moz-" : "OTransition" in t && "-o";
                                }
                            },
                            {
                                key: "getScrollbarWidth",
                                value: function() {
                                    var t, e = document.createElement("div");
                                    return e.classList.add("sl-scrollbar-measure"), document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e), t;
                                }
                            },
                            {
                                key: "toggleScrollbar",
                                value: function(t) {
                                    var e, n = 0, o = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                                    return "hide" === t ? ((t = window.innerWidth) || (t = (e = document.documentElement.getBoundingClientRect()).right - Math.abs(e.left)), (document.body.clientWidth < t || this.isAppleDevice) && (e = parseInt(window.getComputedStyle(document.body).paddingRight || 0, 10), n = this.getScrollbarWidth(), document.body.dataset.originalPaddingRight = e, (0 < n || 0 == n && this.isAppleDevice) && (document.body.classList.add("hidden-scroll"), document.body.style.paddingRight = e + n + "px", o.forEach(function(t) {
                                        var e = t.style.paddingRight, o = window.getComputedStyle(t)["padding-right"];
                                        t.dataset.originalPaddingRight = e, t.style.paddingRight = "".concat(parseFloat(o) + n, "px");
                                    })))) : (document.body.classList.remove("hidden-scroll"), document.body.style.paddingRight = document.body.dataset.originalPaddingRight + "px", o.forEach(function(t) {
                                        var e = t.dataset.originalPaddingRight;
                                        void 0 !== e && (t.style.paddingRight = e);
                                    })), n;
                                }
                            },
                            {
                                key: "close",
                                value: function() {
                                    var t = this;
                                    if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
                                    this.isClosing = !0;
                                    var e, o = this.relatedElements[this.currentImageIndex];
                                    for(e in o.dispatchEvent(new Event("close.simplelightbox")), this.options.history && (this.historyHasChanges = !1, this.hashReseted || this.resetHash()), this.removeEventListener(document, "focusin." + this.eventNamespace), this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed), this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                                        t.options.disableScroll && t.toggleScrollbar("show"), t.options.htmlClass && "" !== t.options.htmlClass && document.querySelector("html").classList.remove(t.options.htmlClass), document.body.removeChild(t.domNodes.wrapper), t.options.overlay && document.body.removeChild(t.domNodes.overlay), t.domNodes.additionalHtml = null, t.domNodes.download = null, o.dispatchEvent(new Event("closed.simplelightbox")), t.isClosing = !1;
                                    }), this.currentImage = null, this.isOpen = !1, this.isAnimating = !1, this.controlCoordinates)this.controlCoordinates[e] = 0;
                                    this.controlCoordinates.mousedown = !1, this.controlCoordinates.zoomed = !1, this.controlCoordinates.capture = !1, this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom), this.controlCoordinates.doubleTapped = !1;
                                }
                            },
                            {
                                key: "hash",
                                get: function() {
                                    return window.location.hash.substring(1);
                                }
                            },
                            {
                                key: "preload",
                                value: function() {
                                    var e = this, o = this.currentImageIndex, t = this.relatedElements.length, n = o + 1 < 0 ? t - 1 : t - 1 <= o + 1 ? 0 : o + 1, t = o - 1 < 0 ? t - 1 : t - 1 <= o - 1 ? 0 : o - 1, i = new Image, s = new Image;
                                    i.addEventListener("load", function(t) {
                                        t = t.target.getAttribute("src");
                                        -1 === e.loadedImages.indexOf(t) && e.loadedImages.push(t), e.relatedElements[o].dispatchEvent(new Event("nextImageLoaded." + e.eventNamespace));
                                    }), i.setAttribute("src", this.relatedElements[n].getAttribute(this.options.sourceAttr)), s.addEventListener("load", function(t) {
                                        t = t.target.getAttribute("src");
                                        -1 === e.loadedImages.indexOf(t) && e.loadedImages.push(t), e.relatedElements[o].dispatchEvent(new Event("prevImageLoaded." + e.eventNamespace));
                                    }), s.setAttribute("src", this.relatedElements[t].getAttribute(this.options.sourceAttr));
                                }
                            },
                            {
                                key: "loadImage",
                                value: function(t) {
                                    var e = this, o = t, t = (this.options.rtl && (t = -t), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1 === t ? "next" : "prev") + "." + this.eventNamespace)), this.currentImageIndex + t);
                                    if (this.isAnimating || (t < 0 || t >= this.relatedElements.length) && !1 === this.options.loop) return !1;
                                    this.currentImageIndex = t < 0 ? this.relatedElements.length - 1 : t > this.relatedElements.length - 1 ? 0 : t, this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * o - this.controlCoordinates.swipeDiff + "px"), this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                                        e.isAnimating = !0, e.isClosing ? e.isAnimating = !1 : setTimeout(function() {
                                            var t = e.relatedElements[e.currentImageIndex];
                                            e.currentImage && (e.currentImage.setAttribute("src", t.getAttribute(e.options.sourceAttr)), -1 === e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr)) && e.show(e.domNodes.spinner), e.domNodes.image.contains(e.domNodes.caption) && e.domNodes.image.removeChild(e.domNodes.caption), e.adjustImage(o), e.options.preloading && e.preload());
                                        }, 100);
                                    });
                                }
                            },
                            {
                                key: "adjustImage",
                                value: function(s) {
                                    var a = this;
                                    if (!this.currentImage) return !1;
                                    var t = new Image, r = window.innerWidth * this.options.widthRatio, l = window.innerHeight * this.options.heightRatio;
                                    t.setAttribute("src", this.currentImage.getAttribute("src")), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, this.zoomPanElement(0, 0, 1), t.addEventListener("error", function(t) {
                                        a.relatedElements[a.currentImageIndex].dispatchEvent(new Event("error." + a.eventNamespace)), a.isAnimating = !1, a.isOpen = !0, a.domNodes.spinner.style.display = "none";
                                        var e = 1 === s || -1 === s;
                                        if (a.initialImageIndex === a.currentImageIndex && e) return a.close();
                                        a.options.alertError && alert(a.options.alertErrorMessage), a.loadImage(e ? s : 1);
                                    }), t.addEventListener("load", function(t) {
                                        void 0 !== s && (a.relatedElements[a.currentImageIndex].dispatchEvent(new Event("changed." + a.eventNamespace)), a.relatedElements[a.currentImageIndex].dispatchEvent(new Event((1 === s ? "nextDone" : "prevDone") + "." + a.eventNamespace))), a.options.history && a.updateURL(), -1 === a.loadedImages.indexOf(a.currentImage.getAttribute("src")) && a.loadedImages.push(a.currentImage.getAttribute("src"));
                                        var e, o, n, i = t.target.width, t = t.target.height;
                                        (a.options.scaleImageToRatio || r < i || l < t) && (i /= e = r / l < i / t ? i / r : t / l, t /= e), a.domNodes.image.style.top = (window.innerHeight - t) / 2 + "px", a.domNodes.image.style.left = (window.innerWidth - i - a.globalScrollbarWidth) / 2 + "px", a.domNodes.image.style.width = i + "px", a.domNodes.image.style.height = t + "px", a.domNodes.spinner.style.display = "none", a.options.focus && a.forceFocus(), a.fadeIn(a.currentImage, a.options.fadeSpeed, function() {
                                            a.options.focus && a.domNodes.wrapper.focus();
                                        }), a.isOpen = !0, "string" == typeof a.options.captionSelector ? o = "self" === a.options.captionSelector ? a.relatedElements[a.currentImageIndex] : a.getCaptionElement(a.relatedElements[a.currentImageIndex]) : "function" == typeof a.options.captionSelector && (o = a.options.captionSelector(a.relatedElements[a.currentImageIndex])), a.options.captions && o && (n = "data" === a.options.captionType ? o.dataset[a.options.captionsData] : "text" === a.options.captionType ? o.innerHTML : o.getAttribute(a.options.captionsData)), a.options.loop ? 1 === a.relatedElements.length ? a.hide(a.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : a.show(a.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : (0 === a.currentImageIndex && a.hide(a.domNodes.navigation.querySelector(".sl-prev")), a.currentImageIndex >= a.relatedElements.length - 1 && a.hide(a.domNodes.navigation.querySelector(".sl-next")), 0 < a.currentImageIndex && a.show(a.domNodes.navigation.querySelector(".sl-prev")), a.currentImageIndex < a.relatedElements.length - 1 && a.show(a.domNodes.navigation.querySelector(".sl-next"))), 1 === s || -1 === s ? (a.options.animationSlide && (a.slide(0, 100 * s + "px"), setTimeout(function() {
                                            a.slide(a.options.animationSpeed / 1e3, "0px");
                                        }, 50)), a.fadeIn(a.domNodes.image, a.options.fadeSpeed, function() {
                                            a.isAnimating = !1, a.setCaption(n, i);
                                        })) : (a.isAnimating = !1, a.setCaption(n, i)), a.options.additionalHtml && !a.domNodes.additionalHtml && (a.domNodes.additionalHtml = document.createElement("div"), a.domNodes.additionalHtml.classList.add("sl-additional-html"), a.domNodes.additionalHtml.innerHTML = a.options.additionalHtml, a.domNodes.image.appendChild(a.domNodes.additionalHtml)), a.options.download && a.domNodes.downloadLink.setAttribute("href", a.currentImage.getAttribute("src"));
                                    });
                                }
                            },
                            {
                                key: "zoomPanElement",
                                value: function(t, e, o) {
                                    this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + t + "," + e + ") scale(" + o + ")";
                                }
                            },
                            {
                                key: "minMax",
                                value: function(t, e, o) {
                                    return t < e ? e : o < t ? o : t;
                                }
                            },
                            {
                                key: "setZoomData",
                                value: function(t, e, o) {
                                    this.currentImage.dataset.scale = t, this.currentImage.dataset.translateX = e, this.currentImage.dataset.translateY = o;
                                }
                            },
                            {
                                key: "hashchangeHandler",
                                value: function() {
                                    this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = !0, this.close());
                                }
                            },
                            {
                                key: "addEvents",
                                value: function() {
                                    var o, n = this;
                                    this.addEventListener(window, "resize." + this.eventNamespace, function(t) {
                                        n.isOpen && n.adjustImage();
                                    }), this.addEventListener(this.domNodes.closeButton, [
                                        "click." + this.eventNamespace,
                                        "touchstart." + this.eventNamespace
                                    ], this.close.bind(this)), this.options.history && setTimeout(function() {
                                        n.addEventListener(window, "hashchange." + n.eventNamespace, function(t) {
                                            n.isOpen && n.hashchangeHandler();
                                        });
                                    }, 40), this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(t) {
                                        if (!t.currentTarget.tagName.match(/button/i)) return !0;
                                        t.preventDefault(), n.controlCoordinates.swipeDiff = 0, n.loadImage(t.currentTarget.classList.contains("sl-next") ? 1 : -1);
                                    }), this.options.scrollZoom && (o = 1, this.addEventListener(this.domNodes.image, [
                                        "mousewheel",
                                        "DOMMouseScroll"
                                    ], function(t) {
                                        if (n.controlCoordinates.mousedown || n.isAnimating || n.isClosing || !n.isOpen) return !0;
                                        0 == n.controlCoordinates.containerHeight && (n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX), n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY));
                                        var e = t.delta || t.wheelDelta, e = (void 0 === e && (e = t.detail), e = Math.max(-1, Math.min(1, e)), o += e * n.options.scrollZoomFactor * o, o = Math.max(1, Math.min(n.options.maxZoom, o)), n.controlCoordinates.targetScale = o, document.documentElement.scrollTop || document.body.scrollTop);
                                        n.controlCoordinates.pinchOffsetX = t.pageX, n.controlCoordinates.pinchOffsetY = t.pageY - e || 0, n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2, n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2, n.controlCoordinates.scaleDifference = n.controlCoordinates.targetScale - n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.initialOffsetX - (n.controlCoordinates.pinchOffsetX - n.controlCoordinates.containerOffsetX - n.controlCoordinates.containerWidth / 2 - n.controlCoordinates.initialOffsetX) / (n.controlCoordinates.targetScale - n.controlCoordinates.scaleDifference) * n.controlCoordinates.scaleDifference, -1 * n.controlCoordinates.limitOffsetX, n.controlCoordinates.limitOffsetX), n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.initialOffsetY - (n.controlCoordinates.pinchOffsetY - n.controlCoordinates.containerOffsetY - n.controlCoordinates.containerHeight / 2 - n.controlCoordinates.initialOffsetY) / (n.controlCoordinates.targetScale - n.controlCoordinates.scaleDifference) * n.controlCoordinates.scaleDifference, -1 * n.controlCoordinates.limitOffsetY, n.controlCoordinates.limitOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale), 1 < n.controlCoordinates.targetScale ? (n.controlCoordinates.zoomed = !0, (!n.domNodes.caption.style.opacity || 0 < n.domNodes.caption.style.opacity) && "none" !== n.domNodes.caption.style.display && n.fadeOut(n.domNodes.caption, n.options.fadeSpeed)) : (1 === n.controlCoordinates.initialScale && (n.controlCoordinates.zoomed = !1, "none" === n.domNodes.caption.style.display && n.fadeIn(n.domNodes.caption, n.options.fadeSpeed)), n.controlCoordinates.initialPinchDistance = null, n.controlCoordinates.capture = !1), n.controlCoordinates.initialPinchDistance = n.controlCoordinates.targetPinchDistance, n.controlCoordinates.initialScale = n.controlCoordinates.targetScale, n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY, n.setZoomData(n.controlCoordinates.targetScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale);
                                    })), this.addEventListener(this.domNodes.image, [
                                        "touchstart." + this.eventNamespace,
                                        "mousedown." + this.eventNamespace
                                    ], function(t) {
                                        if ("A" === t.target.tagName && "touchstart" === t.type) return !0;
                                        if ("mousedown" === t.type) t.preventDefault(), n.controlCoordinates.initialPointerOffsetX = t.clientX, n.controlCoordinates.initialPointerOffsetY = t.clientY, n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX), n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY);
                                        else if (n.controlCoordinates.touchCount = t.touches.length, n.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX, n.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY, n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, 1 === n.controlCoordinates.touchCount) {
                                            if (n.controlCoordinates.doubleTapped) return n.currentImage.classList.add("sl-transition"), n.controlCoordinates.zoomed ? (n.controlCoordinates.initialScale = 1, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), n.controlCoordinates.zoomed = !1) : (n.controlCoordinates.initialScale = n.options.doubleTapZoom, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), (!n.domNodes.caption.style.opacity || 0 < n.domNodes.caption.style.opacity) && "none" !== n.domNodes.caption.style.display && n.fadeOut(n.domNodes.caption, n.options.fadeSpeed), n.controlCoordinates.zoomed = !0), setTimeout(function() {
                                                n.currentImage && n.currentImage.classList.remove("sl-transition");
                                            }, 200), !1;
                                            n.controlCoordinates.doubleTapped = !0, setTimeout(function() {
                                                n.controlCoordinates.doubleTapped = !1;
                                            }, 300), n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX), n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY);
                                        } else 2 === n.controlCoordinates.touchCount && (n.controlCoordinates.initialPointerOffsetX2 = t.touches[1].clientX, n.controlCoordinates.initialPointerOffsetY2 = t.touches[1].clientY, n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX), n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY), n.controlCoordinates.pinchOffsetX = (n.controlCoordinates.initialPointerOffsetX + n.controlCoordinates.initialPointerOffsetX2) / 2, n.controlCoordinates.pinchOffsetY = (n.controlCoordinates.initialPointerOffsetY + n.controlCoordinates.initialPointerOffsetY2) / 2, n.controlCoordinates.initialPinchDistance = Math.sqrt((n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialPointerOffsetX2) * (n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialPointerOffsetX2) + (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialPointerOffsetY2) * (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialPointerOffsetY2)));
                                        return n.controlCoordinates.capture = !0, !!n.controlCoordinates.mousedown || (n.transitionCapable && (n.controlCoordinates.imageLeft = parseInt(n.domNodes.image.style.left, 10)), n.controlCoordinates.mousedown = !0, n.controlCoordinates.swipeDiff = 0, n.controlCoordinates.swipeYDiff = 0, n.controlCoordinates.swipeStart = t.pageX || t.touches[0].pageX, n.controlCoordinates.swipeYStart = t.pageY || t.touches[0].pageY, !1);
                                    }), this.addEventListener(this.domNodes.image, [
                                        "touchmove." + this.eventNamespace,
                                        "mousemove." + this.eventNamespace,
                                        "MSPointerMove"
                                    ], function(t) {
                                        if (!n.controlCoordinates.mousedown) return !0;
                                        if ("touchmove" === t.type) {
                                            if (!1 === n.controlCoordinates.capture) return !1;
                                            n.controlCoordinates.pointerOffsetX = t.touches[0].clientX, n.controlCoordinates.pointerOffsetY = t.touches[0].clientY, n.controlCoordinates.touchCount = t.touches.length, n.controlCoordinates.touchmoveCount++, 1 < n.controlCoordinates.touchCount ? (n.controlCoordinates.pointerOffsetX2 = t.touches[1].clientX, n.controlCoordinates.pointerOffsetY2 = t.touches[1].clientY, n.controlCoordinates.targetPinchDistance = Math.sqrt((n.controlCoordinates.pointerOffsetX - n.controlCoordinates.pointerOffsetX2) * (n.controlCoordinates.pointerOffsetX - n.controlCoordinates.pointerOffsetX2) + (n.controlCoordinates.pointerOffsetY - n.controlCoordinates.pointerOffsetY2) * (n.controlCoordinates.pointerOffsetY - n.controlCoordinates.pointerOffsetY2)), null === n.controlCoordinates.initialPinchDistance && (n.controlCoordinates.initialPinchDistance = n.controlCoordinates.targetPinchDistance), 1 <= Math.abs(n.controlCoordinates.initialPinchDistance - n.controlCoordinates.targetPinchDistance) && (n.controlCoordinates.targetScale = n.minMax(n.controlCoordinates.targetPinchDistance / n.controlCoordinates.initialPinchDistance * n.controlCoordinates.initialScale, 1, n.options.maxZoom), n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2, n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2, n.controlCoordinates.scaleDifference = n.controlCoordinates.targetScale - n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.initialOffsetX - (n.controlCoordinates.pinchOffsetX - n.controlCoordinates.containerOffsetX - n.controlCoordinates.containerWidth / 2 - n.controlCoordinates.initialOffsetX) / (n.controlCoordinates.targetScale - n.controlCoordinates.scaleDifference) * n.controlCoordinates.scaleDifference, -1 * n.controlCoordinates.limitOffsetX, n.controlCoordinates.limitOffsetX), n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.initialOffsetY - (n.controlCoordinates.pinchOffsetY - n.controlCoordinates.containerOffsetY - n.controlCoordinates.containerHeight / 2 - n.controlCoordinates.initialOffsetY) / (n.controlCoordinates.targetScale - n.controlCoordinates.scaleDifference) * n.controlCoordinates.scaleDifference, -1 * n.controlCoordinates.limitOffsetY, n.controlCoordinates.limitOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale), 1 < n.controlCoordinates.targetScale && (n.controlCoordinates.zoomed = !0, (!n.domNodes.caption.style.opacity || 0 < n.domNodes.caption.style.opacity) && "none" !== n.domNodes.caption.style.display && n.fadeOut(n.domNodes.caption, n.options.fadeSpeed)), n.controlCoordinates.initialPinchDistance = n.controlCoordinates.targetPinchDistance, n.controlCoordinates.initialScale = n.controlCoordinates.targetScale, n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY)) : (n.controlCoordinates.targetScale = n.controlCoordinates.initialScale, n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2, n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2, n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.pointerOffsetX - (n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialOffsetX), -1 * n.controlCoordinates.limitOffsetX, n.controlCoordinates.limitOffsetX), n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.pointerOffsetY - (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialOffsetY), -1 * n.controlCoordinates.limitOffsetY, n.controlCoordinates.limitOffsetY), Math.abs(n.controlCoordinates.targetOffsetX) === Math.abs(n.controlCoordinates.limitOffsetX) && (n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialPointerOffsetX = n.controlCoordinates.pointerOffsetX), Math.abs(n.controlCoordinates.targetOffsetY) === Math.abs(n.controlCoordinates.limitOffsetY) && (n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY, n.controlCoordinates.initialPointerOffsetY = n.controlCoordinates.pointerOffsetY), n.setZoomData(n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale));
                                        }
                                        if ("mousemove" === t.type && n.controlCoordinates.mousedown) {
                                            if ("touchmove" == t.type) return !0;
                                            if (t.preventDefault(), !1 === n.controlCoordinates.capture) return !1;
                                            n.controlCoordinates.pointerOffsetX = t.clientX, n.controlCoordinates.pointerOffsetY = t.clientY, n.controlCoordinates.targetScale = n.controlCoordinates.initialScale, n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2, n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2, n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.pointerOffsetX - (n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialOffsetX), -1 * n.controlCoordinates.limitOffsetX, n.controlCoordinates.limitOffsetX), n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.pointerOffsetY - (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialOffsetY), -1 * n.controlCoordinates.limitOffsetY, n.controlCoordinates.limitOffsetY), Math.abs(n.controlCoordinates.targetOffsetX) === Math.abs(n.controlCoordinates.limitOffsetX) && (n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialPointerOffsetX = n.controlCoordinates.pointerOffsetX), Math.abs(n.controlCoordinates.targetOffsetY) === Math.abs(n.controlCoordinates.limitOffsetY) && (n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY, n.controlCoordinates.initialPointerOffsetY = n.controlCoordinates.pointerOffsetY), n.setZoomData(n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale);
                                        }
                                        n.controlCoordinates.zoomed || (n.controlCoordinates.swipeEnd = t.pageX || t.touches[0].pageX, n.controlCoordinates.swipeYEnd = t.pageY || t.touches[0].pageY, n.controlCoordinates.swipeDiff = n.controlCoordinates.swipeStart - n.controlCoordinates.swipeEnd, n.controlCoordinates.swipeYDiff = n.controlCoordinates.swipeYStart - n.controlCoordinates.swipeYEnd, n.options.animationSlide && n.slide(0, -n.controlCoordinates.swipeDiff + "px"));
                                    }), this.addEventListener(this.domNodes.image, [
                                        "touchend." + this.eventNamespace,
                                        "mouseup." + this.eventNamespace,
                                        "touchcancel." + this.eventNamespace,
                                        "mouseleave." + this.eventNamespace,
                                        "pointerup",
                                        "pointercancel",
                                        "MSPointerUp",
                                        "MSPointerCancel"
                                    ], function(t) {
                                        n.isTouchDevice && "touchend" === t.type && (n.controlCoordinates.touchCount = t.touches.length, 0 === n.controlCoordinates.touchCount ? (n.currentImage && n.setZoomData(n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY), 1 === n.controlCoordinates.initialScale && (n.controlCoordinates.zoomed = !1, "none" === n.domNodes.caption.style.display && n.fadeIn(n.domNodes.caption, n.options.fadeSpeed)), n.controlCoordinates.initialPinchDistance = null, n.controlCoordinates.capture = !1) : 1 === n.controlCoordinates.touchCount ? (n.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX, n.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY) : 1 < n.controlCoordinates.touchCount && (n.controlCoordinates.initialPinchDistance = null)), n.controlCoordinates.mousedown && (t = (n.controlCoordinates.mousedown = !1, true), n.options.loop || (0 === n.currentImageIndex && n.controlCoordinates.swipeDiff < 0 && (t = !1), n.currentImageIndex >= n.relatedElements.length - 1 && 0 < n.controlCoordinates.swipeDiff && (t = !1)), Math.abs(n.controlCoordinates.swipeDiff) > n.options.swipeTolerance && t ? n.loadImage(0 < n.controlCoordinates.swipeDiff ? 1 : -1) : n.options.animationSlide && n.slide(n.options.animationSpeed / 1e3, "0px"), n.options.swipeClose && 50 < Math.abs(n.controlCoordinates.swipeYDiff) && Math.abs(n.controlCoordinates.swipeDiff) < n.options.swipeTolerance && n.close());
                                    }), this.addEventListener(this.domNodes.image, [
                                        "dblclick"
                                    ], function(t) {
                                        if (!n.isTouchDevice) return n.controlCoordinates.initialPointerOffsetX = t.clientX, n.controlCoordinates.initialPointerOffsetY = t.clientY, n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, n.currentImage.classList.add("sl-transition"), n.controlCoordinates.zoomed ? (n.controlCoordinates.initialScale = 1, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), n.controlCoordinates.zoomed = !1, "none" === n.domNodes.caption.style.display && n.fadeIn(n.domNodes.caption, n.options.fadeSpeed)) : (n.controlCoordinates.initialScale = n.options.doubleTapZoom, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), (!n.domNodes.caption.style.opacity || 0 < n.domNodes.caption.style.opacity) && "none" !== n.domNodes.caption.style.display && n.fadeOut(n.domNodes.caption, n.options.fadeSpeed), n.controlCoordinates.zoomed = !0), setTimeout(function() {
                                            n.currentImage && (n.currentImage.classList.remove("sl-transition"), n.currentImage.style[n.transitionPrefix + "transform-origin"] = null);
                                        }, 200), n.controlCoordinates.capture = !0, false;
                                    });
                                }
                            },
                            {
                                key: "getDimensions",
                                value: function(t) {
                                    var e = window.getComputedStyle(t), o = t.offsetHeight, t = t.offsetWidth, n = parseFloat(e.borderTopWidth);
                                    return {
                                        height: o - parseFloat(e.borderBottomWidth) - n - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom),
                                        width: t - parseFloat(e.borderLeftWidth) - parseFloat(e.borderRightWidth) - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
                                    };
                                }
                            },
                            {
                                key: "updateHash",
                                value: function() {
                                    var t = "pid=" + (this.currentImageIndex + 1), e = window.location.href.split("#")[0] + "#" + t;
                                    this.hashReseted = !1, this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, e) : this.historyHasChanges ? window.location.replace(e) : window.location.hash = t, this.historyHasChanges || (this.urlChangedOnce = !0), this.historyHasChanges = !0;
                                }
                            },
                            {
                                key: "resetHash",
                                value: function() {
                                    this.hashReseted = !0, this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "", clearTimeout(this.historyUpdateTimeout);
                                }
                            },
                            {
                                key: "updateURL",
                                value: function() {
                                    clearTimeout(this.historyUpdateTimeout), this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash();
                                }
                            },
                            {
                                key: "setCaption",
                                value: function(t, e) {
                                    var o = this;
                                    this.options.captions && t && "" !== t && void 0 !== t && (this.hide(this.domNodes.caption), this.domNodes.caption.style.width = e + "px", this.domNodes.caption.innerHTML = t, this.domNodes.image.appendChild(this.domNodes.caption), setTimeout(function() {
                                        o.fadeIn(o.domNodes.caption, o.options.fadeSpeed);
                                    }, this.options.captionDelay));
                                }
                            },
                            {
                                key: "slide",
                                value: function(t, e) {
                                    if (!this.transitionCapable) return this.domNodes.image.style.left = e;
                                    this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + e + ")", this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + t + "s linear";
                                }
                            },
                            {
                                key: "getRelated",
                                value: function(e) {
                                    var t = e && !1 !== e && "nofollow" !== e ? Array.from(this.elements).filter(function(t) {
                                        return t.getAttribute("rel") === e;
                                    }) : this.elements;
                                    return t;
                                }
                            },
                            {
                                key: "openImage",
                                value: function(t) {
                                    var e = this, o = (t.dispatchEvent(new Event("show." + this.eventNamespace)), this.globalScrollbarWidth = this.getScrollbarWidth(), this.options.disableScroll && (this.toggleScrollbar("hide"), this.globalScrollbarWidth = 0), this.options.htmlClass && "" !== this.options.htmlClass && document.querySelector("html").classList.add(this.options.htmlClass), document.body.appendChild(this.domNodes.wrapper), this.domNodes.wrapper.appendChild(this.domNodes.image), this.options.overlay && document.body.appendChild(this.domNodes.overlay), this.relatedElements = this.getRelated(t.rel), this.options.showCounter && (1 == this.relatedElements.length && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : 1 < this.relatedElements.length && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter)), this.options.download && this.domNodes.download && this.domNodes.wrapper.appendChild(this.domNodes.download), this.isAnimating = !0, this.currentImageIndex = this.relatedElements.indexOf(t), t.getAttribute(this.options.sourceAttr));
                                    this.currentImage = document.createElement("img"), this.currentImage.style.display = "none", this.currentImage.setAttribute("src", o), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o), this.domNodes.image.innerHTML = "", this.domNodes.image.setAttribute("style", ""), this.domNodes.image.appendChild(this.currentImage), this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed), this.fadeIn([
                                        this.domNodes.counter,
                                        this.domNodes.navigation,
                                        this.domNodes.closeButton,
                                        this.domNodes.download
                                    ], this.options.fadeSpeed), this.show(this.domNodes.spinner), this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length, this.adjustImage(), this.options.preloading && this.preload(), setTimeout(function() {
                                        t.dispatchEvent(new Event("shown." + e.eventNamespace));
                                    }, this.options.animationSpeed);
                                }
                            },
                            {
                                key: "forceFocus",
                                value: function() {
                                    var e = this;
                                    this.removeEventListener(document, "focusin." + this.eventNamespace), this.addEventListener(document, "focusin." + this.eventNamespace, function(t) {
                                        document === t.target || e.domNodes.wrapper === t.target || e.domNodes.wrapper.contains(t.target) || e.domNodes.wrapper.focus();
                                    });
                                }
                            },
                            {
                                key: "addEventListener",
                                value: function(t, e, o, n) {
                                    t = this.wrap(t), e = this.wrap(e);
                                    var i, s = f(t);
                                    try {
                                        for(s.s(); !(i = s.n()).done;){
                                            var a, r = i.value, l = (r.namespaces || (r.namespaces = {}), f(e));
                                            try {
                                                for(l.s(); !(a = l.n()).done;){
                                                    var d = a.value, c = n || !1;
                                                    0 <= [
                                                        "touchstart",
                                                        "touchmove",
                                                        "mousewheel",
                                                        "DOMMouseScroll"
                                                    ].indexOf(d.split(".")[0]) && this.isPassiveEventsSupported && ("object" === h(c) ? c.passive = !0 : c = {
                                                        passive: !0
                                                    }), r.namespaces[d] = o, r.addEventListener(d.split(".")[0], o, c);
                                                }
                                            } catch (t) {
                                                l.e(t);
                                            } finally{
                                                l.f();
                                            }
                                        }
                                    } catch (t) {
                                        s.e(t);
                                    } finally{
                                        s.f();
                                    }
                                }
                            },
                            {
                                key: "removeEventListener",
                                value: function(t, e) {
                                    t = this.wrap(t), e = this.wrap(e);
                                    var o, n = f(t);
                                    try {
                                        for(n.s(); !(o = n.n()).done;){
                                            var i, s = o.value, a = f(e);
                                            try {
                                                for(a.s(); !(i = a.n()).done;){
                                                    var r = i.value;
                                                    s.namespaces && s.namespaces[r] && (s.removeEventListener(r.split(".")[0], s.namespaces[r]), delete s.namespaces[r]);
                                                }
                                            } catch (t) {
                                                a.e(t);
                                            } finally{
                                                a.f();
                                            }
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                }
                            },
                            {
                                key: "fadeOut",
                                value: function(r, t, l) {
                                    var e, d = this, o = f(r = this.wrap(r));
                                    try {
                                        for(o.s(); !(e = o.n()).done;){
                                            var n = e.value;
                                            n.style.opacity = parseFloat(n) || window.getComputedStyle(n).getPropertyValue("opacity");
                                        }
                                    } catch (t) {
                                        o.e(t);
                                    } finally{
                                        o.f();
                                    }
                                    this.isFadeIn = !1;
                                    var c = 16.66666 / (t || this.options.fadeSpeed);
                                    (function t() {
                                        var e = parseFloat(r[0].style.opacity);
                                        if ((e -= c) < 0) {
                                            var o, n = f(r);
                                            try {
                                                for(n.s(); !(o = n.n()).done;){
                                                    var i = o.value;
                                                    i.style.display = "none", i.style.opacity = 1;
                                                }
                                            } catch (t) {
                                                n.e(t);
                                            } finally{
                                                n.f();
                                            }
                                            l && l.call(d, r);
                                        } else {
                                            var s, a = f(r);
                                            try {
                                                for(a.s(); !(s = a.n()).done;)s.value.style.opacity = e;
                                            } catch (t) {
                                                a.e(t);
                                            } finally{
                                                a.f();
                                            }
                                            requestAnimationFrame(t);
                                        }
                                    })();
                                }
                            },
                            {
                                key: "fadeIn",
                                value: function(l, t, d, e) {
                                    var o, c = this, n = f(l = this.wrap(l));
                                    try {
                                        for(n.s(); !(o = n.n()).done;){
                                            var i = o.value;
                                            i && (i.style.opacity = 0, i.style.display = e || "block");
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                    this.isFadeIn = !0;
                                    var h = parseFloat(l[0].dataset.opacityTarget || 1), m = 16.66666 * h / (t || this.options.fadeSpeed);
                                    (function t() {
                                        var e = parseFloat(l[0].style.opacity);
                                        if ((e += m) > h) {
                                            var o, n = f(l);
                                            try {
                                                for(n.s(); !(o = n.n()).done;){
                                                    var i = o.value;
                                                    i && (i.style.opacity = h);
                                                }
                                            } catch (t) {
                                                n.e(t);
                                            } finally{
                                                n.f();
                                            }
                                            d && d.call(c, l);
                                        } else {
                                            var s, a = f(l);
                                            try {
                                                for(a.s(); !(s = a.n()).done;){
                                                    var r = s.value;
                                                    r && (r.style.opacity = e);
                                                }
                                            } catch (t) {
                                                a.e(t);
                                            } finally{
                                                a.f();
                                            }
                                            c.isFadeIn && requestAnimationFrame(t);
                                        }
                                    })();
                                }
                            },
                            {
                                key: "hide",
                                value: function(t) {
                                    var e, o = f(t = this.wrap(t));
                                    try {
                                        for(o.s(); !(e = o.n()).done;){
                                            var n = e.value;
                                            "none" != n.style.display && (n.dataset.initialDisplay = n.style.display), n.style.display = "none";
                                        }
                                    } catch (t) {
                                        o.e(t);
                                    } finally{
                                        o.f();
                                    }
                                }
                            },
                            {
                                key: "show",
                                value: function(t, e) {
                                    var o, n = f(t = this.wrap(t));
                                    try {
                                        for(n.s(); !(o = n.n()).done;){
                                            var i = o.value;
                                            i.style.display = i.dataset.initialDisplay || e || "block";
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                }
                            },
                            {
                                key: "wrap",
                                value: function(t) {
                                    return "function" == typeof t[Symbol.iterator] && "string" != typeof t ? t : [
                                        t
                                    ];
                                }
                            },
                            {
                                key: "on",
                                value: function(t, e) {
                                    t = this.wrap(t);
                                    var o, n = f(this.elements);
                                    try {
                                        for(n.s(); !(o = n.n()).done;){
                                            var i, s = o.value, a = (s.fullyNamespacedEvents || (s.fullyNamespacedEvents = {}), f(t));
                                            try {
                                                for(a.s(); !(i = a.n()).done;){
                                                    var r = i.value;
                                                    s.fullyNamespacedEvents[r] = e, s.addEventListener(r, e);
                                                }
                                            } catch (t) {
                                                a.e(t);
                                            } finally{
                                                a.f();
                                            }
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                    return this;
                                }
                            },
                            {
                                key: "off",
                                value: function(t) {
                                    t = this.wrap(t);
                                    var e, o = f(this.elements);
                                    try {
                                        for(o.s(); !(e = o.n()).done;){
                                            var n, i = e.value, s = f(t);
                                            try {
                                                for(s.s(); !(n = s.n()).done;){
                                                    var a = n.value;
                                                    void 0 !== i.fullyNamespacedEvents && a in i.fullyNamespacedEvents && i.removeEventListener(a, i.fullyNamespacedEvents[a]);
                                                }
                                            } catch (t) {
                                                s.e(t);
                                            } finally{
                                                s.f();
                                            }
                                        }
                                    } catch (t) {
                                        o.e(t);
                                    } finally{
                                        o.f();
                                    }
                                    return this;
                                }
                            },
                            {
                                key: "open",
                                value: function(t) {
                                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                                    t = t || this.elements[0], "undefined" != typeof jQuery && t instanceof jQuery && (t = t.get(0)), 0 < e && (t = this.elements[e]), this.initialImageIndex = this.elements.indexOf(t), -1 < this.initialImageIndex && this.openImage(t);
                                }
                            },
                            {
                                key: "openPosition",
                                value: function(t) {
                                    var e = this.elements[t];
                                    this.open(e, t);
                                }
                            },
                            {
                                key: "next",
                                value: function() {
                                    this.loadImage(1);
                                }
                            },
                            {
                                key: "prev",
                                value: function() {
                                    this.loadImage(-1);
                                }
                            },
                            {
                                key: "getLighboxData",
                                value: function() {
                                    return {
                                        currentImageIndex: this.currentImageIndex,
                                        currentImage: this.currentImage,
                                        globalScrollbarWidth: this.globalScrollbarWidth
                                    };
                                }
                            },
                            {
                                key: "destroy",
                                value: function() {
                                    this.off([
                                        "close." + this.eventNamespace,
                                        "closed." + this.eventNamespace,
                                        "nextImageLoaded." + this.eventNamespace,
                                        "prevImageLoaded." + this.eventNamespace,
                                        "change." + this.eventNamespace,
                                        "nextDone." + this.eventNamespace,
                                        "prevDone." + this.eventNamespace,
                                        "error." + this.eventNamespace,
                                        "changed." + this.eventNamespace,
                                        "next." + this.eventNamespace,
                                        "prev." + this.eventNamespace,
                                        "show." + this.eventNamespace,
                                        "shown." + this.eventNamespace
                                    ]), this.removeEventListener(this.elements, "click." + this.eventNamespace), this.removeEventListener(document, "focusin." + this.eventNamespace), this.removeEventListener(document.body, "contextmenu." + this.eventNamespace), this.removeEventListener(document.body, "keyup." + this.eventNamespace), this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace), this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace), this.removeEventListener(window, "resize." + this.eventNamespace), this.removeEventListener(window, "hashchange." + this.eventNamespace), this.close(), this.isOpen && (document.body.removeChild(this.domNodes.wrapper), document.body.removeChild(this.domNodes.overlay)), this.elements = null;
                                }
                            },
                            {
                                key: "refresh",
                                value: function() {
                                    var t, e;
                                    if (this.initialSelector) return t = this.options, e = this.initialSelector, this.destroy(), this.constructor(e, t), this;
                                    throw "refreshing only works when you initialize using a selector!";
                                }
                            }
                        ], s(t.prototype, e), o && s(t, o), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), i;
                    }();
                    o.default = t, e.SimpleLightbox = t;
                }).call(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        },
        {}
    ]
}, {}, [
    1
]);

//# sourceMappingURL=exhibits.6457fc8b.js.map
