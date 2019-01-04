(function framework7ComponentLoader(a,e){void 0===e&&(e=!0);document,window;var K=a.$,r=(a.Template7,a.utils),Q=(a.device,a.support),t=(a.Class,a.Modal,a.ConstructorMethods,a.ModalMethods,{open:function(a,e){var r;void 0===a&&(a=".card-expandable"),void 0===e&&(e=!0);var t=this;if(!K(".card-opened").length){var s=K(a).eq(0);if(s&&s.length&&!(s.hasClass("card-opened")||s.hasClass("card-opening")||s.hasClass("card-closing"))){var o,n=s.parents(".page").eq(0);if(n.length)if(s.trigger("card:beforeopen",{prevent:j}),t.emit("cardBeforeOpen",s[0],j),!o){var d,c,i;t.params.card.backrop&&((d=s.parents(".page-content").find(".card-backdrop")).length||(d=K('<div class="card-backdrop"></div>'),s.parents(".page-content").append(d))),t.params.card.hideNavbarOnOpen&&((c=n.children(".navbar")).length||n[0].f7Page&&(c=n[0].f7Page.$navbarEl)),t.params.card.hideToolbarOnOpen&&((i=n.children(".toolbar")).length||(i=n.parents(".view").children(".toolbar")),i.length||(i=n.parents(".views").children(".toolbar")));var l,p=s.css("transform");p&&p.match(/[2-9]/)&&(l=!0);var h=s.children(".card-content"),f=K(document.createElement("div")).addClass("card-expandable-size");s.append(f);var g,v,m=s[0].offsetWidth,u=s[0].offsetHeight,b=n[0].offsetWidth,C=n[0].offsetHeight,x=f[0].offsetWidth||b,k=f[0].offsetHeight||C,w=x/m,O=k/u,T=s.offset();l?(g=s[0].offsetLeft,v=s[0].offsetTop-s.parents(".page-content")[0].scrollTop):(g=T.left,v=T.top-n.offset().top,t.rtl&&(g-=s[0].scrollLeft)),v-=(C-k)/2;var M=x-m-(g-=(b-x)/2);t.rtl&&(g=(r=[M,g])[0],M=r[1]);var H,E,W,q,B,P,y,z,L,N,X,$=k-u-v,Y=(M-g)/2,D=($-v)/2;t.params.card.hideNavbarOnOpen&&c&&c.length&&t.navbar.hide(c,e),t.params.card.hideToolbarOnOpen&&i&&i.length&&t.toolbar.hide(i,e),d&&d.removeClass("card-backdrop-out").addClass("card-backdrop-in"),s.removeClass("card-transitioning"),e&&s.addClass("card-opening"),s.trigger("card:open"),t.emit("cardOpen",s[0]),h.css({width:x+"px",height:k+"px"}).transform("translate3d("+(t.rtl?g+Y:-g-Y)+"px, 0px, 0) scale("+1/w+", "+1/O+")"),s.transform("translate3d("+Y+"px, "+D+"px, 0) scale("+w+", "+O+")"),e?s.transitionEnd(function(){A()}):A(),n.addClass("page-with-card-opened"),s[0].detachEventHandlers=function(){t.off("resize",F),Q.touch&&t.params.card.swipeToClose&&(t.off("touchstart:passive",G),t.off("touchmove:active",I),t.off("touchend:passive",J))},t.on("resize",F),Q.touch&&t.params.card.swipeToClose&&(t.on("touchstart:passive",G),t.on("touchmove:active",I),t.on("touchend:passive",J))}}}function j(){o=!0}function A(){s.addClass("card-opened"),s.removeClass("card-opening"),s.trigger("card:opened"),t.emit("cardOpened",s[0])}function F(){var a;s.removeClass("card-transitioning"),m=s[0].offsetWidth,u=s[0].offsetHeight,b=n[0].offsetWidth,C=n[0].offsetHeight,x=f[0].offsetWidth||b,k=f[0].offsetHeight||C,w=x/m,O=k/u,s.transform("translate3d(0px, 0px, 0) scale(1)"),T=s.offset(),g=T.left-(b-x)/2,t.rtl&&(g-=s[0].scrollLeft),v=T.top-(C-k)/2,M=x-m-g,$=k-u-v,t.rtl&&(g=(a=[M,g])[0],M=a[1]),Y=(M-g)/2,D=($-v)/2,s.transform("translate3d("+Y+"px, "+D+"px, 0) scale("+w+", "+O+")"),h.css({width:x+"px",height:k+"px"}).transform("translate3d("+(t.rtl?g+Y:-g-Y)+"px, 0px, 0) scale("+1/w+", "+1/O+")")}function G(a){K(a.target).closest(s).length&&s.hasClass("card-opened")&&(H=h.scrollTop(),E=!0,q=a.targetTouches[0].pageX,B=a.targetTouches[0].pageY,z=void 0,X=N=!1)}function I(a){E&&(P=a.targetTouches[0].pageX,y=a.targetTouches[0].pageY,void 0===z&&(z=!!(z||Math.abs(y-B)>Math.abs(P-q))),X||N||(!z&&a.targetTouches[0].clientX<=50?X=!0:N=!0),!X&&!N||N&&0!==H?W=E=!0:(W||s.removeClass("card-transitioning"),W=!0,(0<(L=N?Math.max((y-B)/150,0):Math.max((P-q)/(m/2),0))&&N||X)&&(N&&t.device.ios&&(h.css("-webkit-overflow-scrolling","auto"),h.scrollTop(0)),a.preventDefault()),1<L&&(L=Math.pow(L,.3)),(N?1.3:1.1)<L?(W=E=!1,t.card.close(s)):s.transform("translate3d("+Y+"px, "+D+"px, 0) scale("+w*(1-.2*L)+", "+O*(1-.2*L)+")")))}function J(){E&&W&&(W=E=!1,t.device.ios&&h.css("-webkit-overflow-scrolling",""),.8<=L?t.card.close(s):s.addClass("card-transitioning").transform("translate3d("+Y+"px, "+D+"px, 0) scale("+w+", "+O+")"))}},close:function(a,e){void 0===a&&(a=".card-expandable.card-opened"),void 0===e&&(e=!0);var r=this,t=K(a).eq(0);if(t&&t.length&&t.hasClass("card-opened")&&!t.hasClass("card-opening")&&!t.hasClass("card-closing")){var s,o,n,d=t.children(".card-content"),c=t.parents(".page").eq(0);if(c.length)r.params.card.backrop&&(n=t.parents(".page-content").find(".card-backdrop")),r.params.card.hideNavbarOnOpen&&((s=c.children(".navbar")).length||c[0].f7Page&&(s=c[0].f7Page.$navbarEl),s&&s.length&&r.navbar.show(s,e)),r.params.card.hideToolbarOnOpen&&((o=c.children(".toolbar")).length||(o=c.parents(".view").children(".toolbar")),o.length||(o=c.parents(".views").children(".toolbar")),o&&o.length&&r.toolbar.show(o,e)),c.removeClass("page-with-card-opened"),n&&n.length&&n.removeClass("card-backdrop-in").addClass("card-backdrop-out"),t.removeClass("card-opened card-transitioning"),e?t.addClass("card-closing"):t.addClass("card-no-transition"),t.transform(""),t.trigger("card:close"),r.emit("cardClose",t[0]),d.css({width:"",height:""}).transform("").scrollTop(0,e?300:0),e?d.transitionEnd(function(){i()}):i(),t[0].detachEventHandlers&&(t[0].detachEventHandlers(),delete t[0].detachEventHandlers)}function i(){t.removeClass("card-closing card-no-transition"),t.trigger("card:closed"),t.find(".card-expandable-size").remove(),r.emit("cardClosed",t[0])}},toggle:function(a,e){void 0===a&&(a=".card-expandable");var r=K(a).eq(0);r.length&&(r.hasClass("card-opened")?this.card.close(r,e):this.card.open(r,e))}}),s={name:"card",params:{card:{hideNavbarOnOpen:!0,hideToolbarOnOpen:!0,swipeToClose:!0,closeByBackdropClick:!0,backrop:!0}},create:function(){r.extend(this,{card:{open:t.open.bind(this),close:t.close.bind(this),toggle:t.toggle.bind(this)}})},clicks:{".card-close":function(a,e){this.card.close(e.card)},".card-open":function(a,e){this.card.open(e.card)},".card-expandable":function(a){a.hasClass("card-opened")||a.hasClass("card-opening")||a.hasClass("card-closing")||this.card.open(a)},".card-backdrop-in":function(){var a=!1;this.params.card.closeByBackdropClick&&(a=!0);var e=K(".card-opened");e.length&&("true"===e.attr("data-close-on-backdrop-click")?a=!0:"false"===e.attr("data-close-on-backdrop-click")&&(a=!1),a&&this.card.close(e))}}};if(e){if(a.prototype.modules&&a.prototype.modules[s.name])return;a.use(s),a.instance&&(a.instance.useModuleParams(s,a.instance.params),a.instance.useModule(s))}return s}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))