(this["webpackJsonpmoreorlessfollowers-frontend"]=this["webpackJsonpmoreorlessfollowers-frontend"]||[]).push([[0],{197:function(e,t,n){},198:function(e,t,n){},208:function(e,t){},209:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(73),c=n.n(s),o=n(6),l=n.n(o),i=n(2),u=n(41),d=n(11),m=n(5),f=n(15),h=n(74),b=n.n(h),j=n(1);function x(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("footer",{className:"flex-initial w-full py-3 px-4 text-gray-400 text-sm flex",children:[Object(j.jsx)("p",{className:"float-left capitalize flex-auto flex-col justify-end hidden md:flex",children:Object(j.jsx)(F,{})}),Object(j.jsx)("p",{className:"float-right flex flex-col text-left md:text-right lg:flex-row flex-initial",children:[Object(j.jsx)("span",{className:"flex md:hidden capitalize",children:Object(j.jsx)(F,{})}),Object(j.jsxs)(j.Fragment,{children:["Developed By ",Object(j.jsx)(p,{href:"https://gabrielromualdo.com/",children:"Gabriel Romualdo"})]}),Object(j.jsxs)(j.Fragment,{children:["Inspired By ",Object(j.jsx)(p,{href:"http://www.higherlowergame.com/",children:"The Higher Lower Game"})]}),Object(j.jsxs)(j.Fragment,{children:["Read"," ",Object(j.jsx)(p,{button:!0,onClick:function(){return r(!0)},children:"About This Game"})]})].map((function(e,t){return Object(j.jsx)("span",{className:"mt-2 lg:mt-0 lg:ml-3",children:e},t)}))})]}),n?Object(j.jsx)(z,{closeModal:function(){r(!1)},children:Object(j.jsx)("article",{className:"prose mx-auto invert about-section",children:Object(j.jsx)(b.a,{children:"\n# About\n\nMore Or Less Followers is a game to guess which accounts have more or less Instagram followers. Data is updated periodically from a wide array of top Instagram accounts, and games are randomly selected from those accounts.\n\nWe do not own any of the photos, posts, or other relevant information from Instagram.\n\n### Code & Technologies\n\nMore Or Less Followers uses:\n\n - React.js on the frontend with Tailwind.css\n - PHP on the backend with data stored as JSON\n - A Python data fetching system to get and update Instagram data\n\nThis was my first time using Tailwind.css and fetching data from Instagram using the Instaloader package. These two tools were definitely interesting to expose myself to and get familiar with while developing this game.\n\nIf you'd like to take a look at the code, see [the GitHub repository for the frontend](https://github.com/xtrp/moreorlessfollowers-frontend). Other relevant repositories with backend and server code are linked there.\n\n### License & Credits\n\nMore Or Less Followers is built by [Gabriel Romualdo](https://gabrielromualdo.com). It is inspired by [The Higher Lower Game](http://www.higherlowergame.com/). Most of the code is licensed under the MIT License. See the GitHub repositories for more information.\n"})})}):null]})}var g=n(20);function p(e){var t=e.button,n=Object(g.a)(e,["button"]),a="".concat(n.className," cursor-pointer font-semibold transition-all border-b border-solid border-current hover:text-white focus:text-white focus:outline-none");return t?Object(j.jsx)("button",Object(i.a)(Object(i.a)({},n),{},{className:a,children:n.children})):Object(j.jsx)("a",Object(i.a)(Object(i.a)({},n),{},{className:a,target:n.target||"_blank",rel:n.rel||"noreferrer noopener",children:n.children}))}function w(e){var t=e.loading,n=Object(g.a)(e,["loading"]);return Object(j.jsxs)("button",Object(i.a)(Object(i.a)(Object(i.a)({},n),{},{className:"".concat(n.className," ").concat(t?"text-transparent relative":""," font-medium text-lg w-48 py-2 px-4 rounded-md border-2 border-white transition-all hover:text-gray-800 hover:bg-white duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none disabled:bg-white disabled:opacity-70 disabled:pointer-events-none")},t?{disabled:!0}:{}),{},{children:[n.children,t?Object(j.jsx)("div",{className:"absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6",children:Object(j.jsx)("div",{className:"h-full w-full border-2 border-gray-300 rounded-full loader animate-spin"})}):null]}))}var O="http://localhost:6001";function v(){return(v=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O).concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return v.apply(this,arguments)},N=n(40),I=n.n(N),k=n(75),S=n.n(k);function F(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,y("/get-data-last-updated.php");case 3:e.t1=e.sent.lastUpdated,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsx)(j.Fragment,{children:n?"Instagram data updated ".concat(I()(n).fromNow()):""})}I.a.extend(S.a);n(197);function z(e){var t=e.children,n=e.closeModal,r=Object(g.a)(e,["children","closeModal"]),s=Object(a.useState)(!1),c=Object(m.a)(s,2),o=c[0],l=c[1],u=Object(a.useRef)(null),d=function(){l(!0),setTimeout((function(){n()}),250)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("style",{children:"body{overflow:hidden;}"}),Object(j.jsx)("div",Object(i.a)(Object(i.a)({},r),{},{ref:u,className:"modal-component ".concat(e.className," ").concat(o?"closing":""),onClick:function(e){e.target===u.current&&d()},children:Object(j.jsxs)("div",{className:"inner bg-gray-800 w-full md:w-3/5 shadow-xl rounded-lg",children:[Object(j.jsx)("button",{className:"rounded-full close focus:outline-none mt-3 mb-3 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800","aria-label":"Close Modal",onClick:function(){return d()},children:Object(j.jsx)(f.e,{className:"text-white h-8 w-8"})}),t]})}))]})}var T=n(76),L=n(77),M=n(31),A=n(82),C=n(81),R=n(78),H=n.n(R),B=function(e){Object(A.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={currentFrame:0,updateNumberInterval:void 0},a.updateNumberInterval=a.updateNumberInterval.bind(Object(M.a)(a)),a}return Object(L.a)(n,[{key:"updateNumberInterval",value:function(){100===this.state.currentFrame?clearInterval(this.state.updateNumberInterval):this.setState({currentFrame:this.state.currentFrame+1})}},{key:"componentDidMount",value:function(){this.setState({updateNumberInterval:setInterval(this.updateNumberInterval,4)})}},{key:"render",value:function(){var e=(this.props.number||0)/100*this.state.currentFrame;return Object(j.jsx)(j.Fragment,{children:H()(Math.floor(e))})}}]),n}(a.Component),E='<svg id="b9c6752e-3fcf-4c62-9b7f-d0104f13cd51" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 827 334.27"><text transform="translate(2.32 298.46)" font-size="132" fill="#9ca3af" font-family="Inter-Bold, Inter" font-weight="700">FOL<tspan x="255.32" y="0" letter-spacing="-0.03em">L</tspan><tspan x="326.48" y="0">OWERS</tspan></text><text transform="translate(2.27 130.1)" font-size="132" fill="#10b981" font-family="Inter-Bold, Inter" font-weight="700">MORE</text><text transform="translate(493.18 130.1)" font-size="132" fill="#ef4444" font-family="Inter-Bold, Inter" font-weight="700">LESS</text><line x1="469" y1="2.46" x2="417" y2="163.46" fill="none" stroke="#9ca3af" stroke-miterlimit="10" stroke-width="16"/></svg>',G=(n(198),n(79)),P=n.n(G),_=n(80),U=n.n(_),D="highscore",W={play:"bg-white",gameover:"bg-red-500",correct:"bg-green-500"},J={play:"text-gray-800",gameover:"text-white",correct:"text-white"},Y=function(e){return"".concat(O,"/images/").concat(P()(e),".jpg")};var q=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(m.a)(s,2),o=c[0],h=c[1],b=Object(a.useState)(!1),g=Object(m.a)(b,2),p=g[0],v=g[1],N=Object(a.useState)(0),I=Object(m.a)(N,2),k=I[0],S=I[1],F=Object(a.useState)(0),z=Object(m.a)(F,2),T=z[0],L=z[1],M=Object(a.useState)([]),A=Object(m.a)(M,2),C=A[0],R=A[1],H=Object(a.useState)("play"),G=Object(m.a)(H,2),P=G[0],_=G[1],q=Object(a.useState)(!1),K=Object(m.a)(q,2),Q=K[0],V=K[1],X=Object(a.useState)(!1),Z=Object(m.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(m.a)(te,2),ae=ne[0],re=ne[1],se=Object(a.useRef)(null),ce=function(){return L(parseInt(localStorage.getItem(D))||0)};Object(a.useEffect)((function(){return ce()}),[]);var oe=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("/get-random-account.php?excluded-ids="+C[C.length-1].id);case 2:t=e.sent,R([].concat(Object(u.a)(C.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{showAnswer:!0})}))),[Object(i.a)(Object(i.a)({},t),{},{showAnswer:!1})]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("/get-random-account.php");case 2:return t=e.sent,e.next=5,y("/get-random-account.php?excluded-ids="+t.id);case 5:n=e.sent,R([Object(i.a)(Object(i.a)({},t),{},{showAnswer:!0}),Object(i.a)(Object(i.a)({},n),{},{showAnswer:!1})]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(e){R([].concat(Object(u.a)(C.slice(0,C.length-1)),[Object(i.a)(Object(i.a)({},C[C.length-1]),{},{showAnswer:!0})])),setTimeout((function(){_(e)}),500),setTimeout(Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("gameover"!==e){t.next=6;break}ee(!0),setTimeout((function(){re(!0)}),300),setTimeout((function(){_("play"),R([]),S(0),h(!1),v(!0),ee(!1),re(!1)}),550),t.next=14;break;case 6:return t.next=8,oe();case 8:(n=k+1)>T&&(localStorage.setItem(D,n),ce()),S(n),V(!0),window.innerWidth<768?se.current.scrollTo({top:se.current.scrollHeight,left:0,behavior:"smooth"}):se.current.scrollTo({left:se.current.scrollWidth,top:0,behavior:"smooth"}),setTimeout((function(){_("play"),V(!1)}),600);case 14:case"end":return t.stop()}}),t)}))),900)},ue={backgroundImage:"\n    linear-gradient( rgba(31, 41, 55, .95), rgba(31, 41, 55, .95) ),\n    url(".concat(O,"/get-collage-img.php)\n    "),backgroundSize:"cover, 25rem auto",backgroundPosition:"center, center"};return Object(j.jsxs)("div",{className:"text-white font-sans w-full flex min-h-screen flex-col items-center antialiased",style:ue,children:[Object(j.jsxs)("header",{className:"fixed pt-2 px-2 inset-0 h-10 z-50",children:[o?Object(j.jsxs)("p",{className:"float-left rounded bg-gray-400 py-1 px-3 font-medium shadow-md",children:["Score: ",k]}):null,Object(j.jsxs)("p",{className:"float-right rounded bg-gradient-to-br from-green-400 to-blue-500 py-1 px-3 font-medium shadow-md",children:["Your High Score: ",T]})]}),o?Object(j.jsxs)("main",{className:"w-full h-screen overflow-hidden md:whitespace-nowrap",ref:se,children:[Object(j.jsx)("a",{className:"hidden md:block fixed bottom-0 right-0 w-32 py-2 px-3 z-50 opacity-70 hover:opacity-100 transition-all",dangerouslySetInnerHTML:{__html:E},href:"./"}),Object(j.jsxs)("div",{className:"transition-all transition duration-300 ".concat(Q?"opacity-0":""," absolute left-0 md:left-1/2 top-1/2 md:top-0 h-16 md:h-full z-20 transform -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0 flex flex-row md:flex-col justify-center w-full md:w-16"),children:[Object(j.jsx)("div",{className:"z-auto absolute left-0 md:left-1/2 top-1/2 md:top-0 h-1 md:h-full z-20 transform -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-full md:w-1 ".concat(W[P])}),Object(j.jsx)("div",{className:"transform scale-90 md:scale-100 z-10 w-16 h-16 rounded-md ".concat(W[P]," shadow ").concat(J[P]," text-2xl text-center uppercase font-bold"),style:{lineHeight:"".concat(4,"rem")},children:"play"===P?"or":"gameover"===P?Object(j.jsx)(f.f,{className:"w-12 h-12",style:{marginTop:"-.1rem"}}):"correct"===P?Object(j.jsx)(f.b,{className:"w-12 h-12"}):void 0})]}),C.map((function(e,t){return Object(j.jsxs)("div",{className:"w-full h-screen-1/2 pt-8 md:pt-0 md:w-1/2 md:h-screen relative align-top inline-flex flex-col justify-center items-center",children:[Object(j.jsx)("div",{className:"absolute inset-0 h-full w-full z-0",children:e.postImageURLs.map((function(t,n){return Object(j.jsx)("div",{className:"w-1/3 h-1/3 float-left relative bg-cover bg-center",children:Object(j.jsx)("img",{className:"w-full h-full absolute inset object-cover object-center",src:Y(t),alt:"A recent post from ".concat(e.username," on Instagram"),onError:function(t){var n="/post-placeholder.jpg",a=Y(e.postImageURLs[Math.floor(U()(e.username)()*e.postImageURLs.length)]);t.target.src!==a?t.target.src=a:t.target.src!==n&&(t.target.src=n)}})},n)}))}),Object(j.jsx)("div",{className:"absolute inset-0 h-full w-full z-10 bg-black opacity-80"}),Object(j.jsxs)("div",{className:"-md-zoom-small z-20 w-10/12 md:w-8/12 lg:w-96 p-1 md:p-4 rounded-md flex text-gray-900 shadow-lg bg-white",children:[Object(j.jsx)("img",{className:"h-16 w-16 rounded-md md:rounded-full flex-initial bg-cover bg-center",src:Y(e.pictureURL),onError:function(e){var t="/picture-placeholder.jpg";e.target.src!==t&&(e.target.src=t)},alt:"".concat(e.username," on Instagram"),loading:"lazy"}),Object(j.jsxs)("div",{className:"flex-initial flex flex-col justify-center ml-3",style:{width:"calc(100% - ".concat(4.75,"rem)")},children:[Object(j.jsx)("h1",{className:"text-xl font-semibold w-full truncate",children:e.name}),Object(j.jsx)("p",{className:"text-gray-500 w-full truncate",children:e.showAnswer?Object(j.jsxs)("a",{href:"https://instagram.com/".concat(e.username),target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:["@",e.username]}):Object(j.jsxs)(j.Fragment,{children:["@",e.username]})})]})]}),Object(j.jsx)("h2",{className:"-md-zoom-small z-20 uppercase text-center w-full text-white font-bold text-lg md:text-xl tracking-wide mt-4 opacity-60",children:"has"}),Object(j.jsx)("div",{className:" z-20 w-10/12 md:w-8/12 lg:w-96 ".concat(e.showAnswer?"flex-row h-16":"py-4 lg:py-0 flex-col lg:flex-row"," flex items-center lg:h-20"),children:e.showAnswer?Object(j.jsx)("h2",{className:"text-4xl lg:text-5xl text-center font-bold w-full",children:Object(j.jsx)(B,{number:1e4*Math.floor(e.followers/1e4)})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(w,{className:"w-auto flex-auto lg:w-auto w-full pr-8",onClick:function(){var n=e.followers>=C[t-1].followers?"correct":"gameover";ie(n)},children:[Object(j.jsx)(f.d,{className:"mr-2 button-icon"}),"More"]}),Object(j.jsxs)(w,{className:"w-auto flex-auto mt-2 lg:ml-2 lg:mt-0 lg:w-auto w-full pr-8",onClick:function(){var n=e.followers<=C[t-1].followers?"correct":"gameover";ie(n)},children:[Object(j.jsx)(f.c,{className:"mr-2 button-icon"}),"Less"]})]})}),Object(j.jsxs)("h2",{className:"-md-zoom-small z-20 uppercase text-center w-full text-white font-bold text-lg md:text-xl tracking-wide mt-1 md:mt-2 opacity-60",children:[e.showAnswer?"Instagram":""," followers",e.showAnswer?"":Object(j.jsxs)(j.Fragment,{children:[" than @",C[t-1].username]})]})]},t)})),$?Object(j.jsx)("div",{className:"fixed inset-0 w-full h-screen bg-gray-800 transition-all duration-300 ".concat(ae?"opacity-100":"opacity-0"),style:Object(i.a)(Object(i.a)({},ue),{},{zIndex:9999})}):null]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("main",{className:"w-96 max-w-full px-4 md:px-0 flex flex-col justify-center flex-1 text-center",children:[Object(j.jsx)("div",{className:"inline-block w-full",dangerouslySetInnerHTML:{__html:E}}),Object(j.jsx)("p",{className:"mt-4 mb-7 text-gray-300 text-lg mx-auto",children:"A game to guess which accounts have more or less Instagram followers!"}),Object(j.jsx)(w,{onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,le();case 3:r(!1),h(!0);case 5:case"end":return e.stop()}}),e)}))),loading:n,className:"w-full sm:w-64 text-center mx-auto",children:Object(j.jsxs)(j.Fragment,{children:["Play ",p?"Again":"Now"," ",Object(j.jsx)(f.a,{className:"ml-1 button-icon pulse-right"})]})})]}),Object(j.jsx)(x,{})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("gabriel-enters-the-chat")),K()}},[[209,1,2]]]);
//# sourceMappingURL=main.ba002161.chunk.js.map