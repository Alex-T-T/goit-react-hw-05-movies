"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(885),c=t(861),o=t(687),s=t.n(o),a=t(791),u=t(739),i=t(425),f=t(184),l=function(){var e=(0,c.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"85df3ff8d6dde44e5fe9194c59be3b9a",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat("85df3ff8d6dde44e5fe9194c59be3b9a"));case 3:if(!(t=e.sent).ok){e.next=6;break}return e.abrupt("return",t.json());case 6:return e.abrupt("return",Promise.reject(new Error("We have a problem")));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();r.default=function(){var e=(0,a.useState)(null),r=(0,n.Z)(e,2),t=r[0],c=r[1],o=(0,u.UO)().movieId;if((0,a.useEffect)((function(){l(Number(o)).then(c).catch((function(e){Promise.reject(new Error("".concat(e.message)))}))}),[o]),console.log(o),!t)return null;var s=t.results;return console.log("response =>",t),(0,f.jsx)("ul",{children:0!==s.length?s.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",t]}),(0,f.jsxs)("p",{children:[" ",n]})]},r)})):(0,f.jsxs)("p",{children:[" ",(0,f.jsx)(i.j6O,{})," Sorry, we haven`t reviews yet!"]})})}}}]);
//# sourceMappingURL=186.afaa1fc0.chunk.js.map