"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{170:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t,o,f,i,a,c,s=r(885),d=r(861),l=r(687),u=r.n(l),b=r(791),m=r(739),p=r(36),h=r(168),x=r(444),g=r(731),v=(0,x.ZP)("div")(t||(t=(0,h.Z)(["\n    display: flex;\n    justify-content: center;\n    padding: 30px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    color: #010101;\n    border-radius: 8px;\n    border-bottom: 2px solid blue;\n    background: #fffc00;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to bottom right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom right, #ffffff, #fffc00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n"]))),k=(0,x.ZP)(g.OL)(o||(o=(0,h.Z)(["\n    width: 120px;\n    text-align: center;\n    margin-bottom: 5px;\n    border: 2px solid blue;\n    border-radius: 8px;\n    background: #fffc00;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to left, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #ffffff, #fffc00);\n\n    &.active {\n        background: linear-gradient(to right, #1488cc, #2b32b2);\n        color: #fff;\n    }\n    :hover:not(.active),\n    :focus-visible:not(.active) {\n        color: red;\n        background: #fffc00;  /* fallback for old browsers */\n        background: -webkit-linear-gradient(to right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */\n        background: linear-gradient(to right, #ffffff, #fffc00);\n        transform: scale(1.02);\n    }\n"]))),w=(0,x.ZP)("div")(f||(f=(0,h.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-left: 30px;\n"]))),j=(0,x.ZP)("h2")(i||(i=(0,h.Z)(["\nmargin-bottom: 10px;\n"]))),Z=(0,x.ZP)("p")(a||(a=(0,h.Z)(["\nmargin-bottom: 10px;\n"]))),y=(0,x.ZP)("ul")(c||(c=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 30px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n    border-bottom: 2px solid blue;\n"]))),_=r(977),C=r(184),P=function(){var e=(0,d.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"85df3ff8d6dde44e5fe9194c59be3b9a",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("85df3ff8d6dde44e5fe9194c59be3b9a"));case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",r.json());case 6:return e.abrupt("return",Promise.reject(new Error("We have a problem")));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e,n,r,t,o,f,i=(0,b.useState)({}),a=(0,s.Z)(i,2),c=a[0],d=a[1],l=(0,m.UO)().movieId,u=(0,m.TH)();(0,b.useEffect)((function(){P(Number(l)).then(d).catch((function(e){Promise.reject(new Error("".concat(e.message)))}))}),[l]);var h=c.title,x=c.poster_path,g=c.vote_average,S=c.overview,E=c.genres,F=function(e){return e?"(".concat((0,_.Z)(new Date(e),"yyyy"),")"):""}(c.release_date),O=function(e){var n=(10*e).toFixed(0);return e?"".concat(n,"%"):"There is no user scores."}(g);return console.log("FormatedDate =>",F),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(k,{to:null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies",end:!0,children:[" ",(0,C.jsx)(p.wFh,{}),"Go Back"]}),(0,C.jsxs)(v,{children:[(0,C.jsx)("img",{src:function(e){return e?"https://www.themoviedb.org/t/p/w500".concat(e):"https://klike.net/uploads/posts/2020-02/1581672920_6.jpg"}(x),alt:h,width:"240"}),(0,C.jsxs)(w,{children:[(0,C.jsxs)(j,{children:[h," ",F]}),(0,C.jsxs)(Z,{children:[" User score: ",O]}),(0,C.jsx)(j,{children:" Overview "}),(0,C.jsx)(Z,{children:S}),(0,C.jsx)(j,{children:" Genres "}),E&&(0,C.jsx)(Z,{children:E.map((function(e){return e.name})).join(", ")})]})]}),(0,C.jsxs)(y,{children:[(0,C.jsx)(k,{to:"cast",state:{from:null!==(r=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/movies"},end:!0,children:" Cast"}),(0,C.jsx)(k,{to:"reviews",state:{from:null!==(o=null===(f=u.state)||void 0===f?void 0:f.from)&&void 0!==o?o:"/movies"},end:!0,children:" Review"})]}),(0,C.jsx)(b.Suspense,{fallback:null,children:(0,C.jsx)(m.j3,{})})]})}}}]);
//# sourceMappingURL=170.ae3e2c6d.chunk.js.map