"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{1687:function(e,n,t){t.d(n,{Df:function(){return s},Pg:function(){return p},V0:function(){return o},tx:function(){return d},zv:function(){return f}});var r=t(5861),a=t(7757),u=t.n(a),c=t(3263),i="c44487c03ffebabedae8b57076099ca1";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(7757),c=t.n(u),i=t(2791),s=t(7689),o=t(1687),p=t(4378),f=t(9014),d=t(184);n.default=function(){var e=(0,s.UO)().id,n=(0,i.useState)([]),t=(0,a.Z)(n,2),u=t[0],v=t[1],l=(0,i.useState)("idle"),h=(0,a.Z)(l,2),g=h[0],x=h[1];(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x("loading"),n.next=4,(0,o.tx)(e);case 4:t=n.sent,v(t),x("finished"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),f.ZP.error("Oops! Something went wrong! Please try again."),x("idle");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]);var w=u.results;return w&&w.length>0?(0,d.jsxs)("section",{children:[w.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:n}),(0,d.jsx)("p",{children:t})]},r)})),"loading"===g&&(0,d.jsx)(p.Z,{}),(0,d.jsx)(f.x7,{})]}):(0,d.jsx)("p",{children:"Review not found"})}}}]);
//# sourceMappingURL=186.73b7cf1b.chunk.js.map