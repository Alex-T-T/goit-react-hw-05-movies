"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t,o,a,f=n(885),c=n(861),i=n(687),s=n.n(i),u=n(791),d=n(739),l=n(425),p=n(168),b=n(444),h=(0,b.ZP)("p")(t||(t=(0,p.Z)(["\n    font-size: 24;\n    font-weight: bold;\n    margin-bottom: 10px;\n"]))),m=(0,b.ZP)("p")(o||(o=(0,p.Z)(["\n    font-size: 14;\n"]))),g=(0,b.ZP)("li")(a||(a=(0,p.Z)(["\n    padding: 10px 30px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n    border-bottom: 2px solid blue;\n    background: #fffc00;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to bottom right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom right, #ffffff, #fffc00); \n"]))),k=n(184),x=function(){var e=(0,c.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"85df3ff8d6dde44e5fe9194c59be3b9a",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat("85df3ff8d6dde44e5fe9194c59be3b9a"));case 3:if(!(n=e.sent).ok){e.next=6;break}return e.abrupt("return",n.json());case 6:return e.abrupt("return",Promise.reject(new Error("We have a problem")));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,u.useState)(null),r=(0,f.Z)(e,2),n=r[0],t=r[1],o=(0,d.UO)().movieId;if((0,u.useEffect)((function(){x(Number(o)).then(t).catch((function(e){Promise.reject(new Error("".concat(e.message)))}))}),[o]),console.log(o),!n)return null;var a=n.results;return console.log("response =>",n),(0,k.jsx)("ul",{children:0!==a.length?a.map((function(e){var r=e.id,n=e.author,t=e.content;return(0,k.jsxs)(g,{children:[(0,k.jsxs)(h,{children:["Author: ",n]}),(0,k.jsxs)(m,{children:[" ",t]})]},r)})):(0,k.jsxs)("p",{children:[" ",(0,k.jsx)(l.j6O,{})," Sorry, we haven`t reviews yet!"]})})}}}]);
//# sourceMappingURL=387.4c3ab63d.chunk.js.map