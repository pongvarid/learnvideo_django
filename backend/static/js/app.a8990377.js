(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],p=0,f=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},u={app:0},a={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-222ddace":"2f564905","chunk-2d21eb63":"a94a9a6f","chunk-72123450":"3e4c9551","chunk-79843c52":"8e139eb0","chunk-2d0d5c8e":"f64d13dc","chunk-2d20f91a":"ca0f43b5","chunk-748afff6":"88a46cca","chunk-f96797c2":"e3bf0a82"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-72123450":1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-222ddace":"31d6cfe0","chunk-2d21eb63":"31d6cfe0","chunk-72123450":"8b33d15c","chunk-79843c52":"31d6cfe0","chunk-2d0d5c8e":"31d6cfe0","chunk-2d20f91a":"31d6cfe0","chunk-748afff6":"31d6cfe0","chunk-f96797c2":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===a))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],p=s.getAttribute("data-href");if(p===r||p===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],l.parentNode.removeChild(l),n(c)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){u[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=o(e);var f=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,n[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=p;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1335:function(e,t){var n=function(e,t){return e?{status:e,body:t.data}:{status:e,body:t.response.data}};e.exports={show:n}},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=n("2877"),o={},i=Object(c["a"])(o,u,a,!1,null,null,null),s=i.exports,p=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},l=[],h=(n("96cf"),n("1da1")),d={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteEnter:function(e,t,n){return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)})))()},computed:{},methods:{load:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},m=d,b=Object(c["a"])(m,f,l,!1,null,"59b9501c",null),w=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"bg-purple-800 p-2 mt-0 fixed w-full z-10 bottom-0"},[n("div",{staticClass:"container mx-auto flex flex-wrap items-center"},[n("div",{staticClass:"flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"},[n("ul",{staticClass:"list-reset flex justify-between flex-1 md:flex-none items-center"},[n("li",{staticClass:"mr-3"},[n("button",{staticClass:"inline-block py-2 px-4 text-white no-underline",on:{click:function(t){return e.$router.push("/home/")}}},[n("span",{staticClass:"mdi mdi-book-open text-xl"})])]),n("li",{staticClass:"mr-3"},[n("button",{staticClass:"inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 text-md",on:{click:function(t){return e.$router.push("/home/profile")}}},[n("span",{staticClass:"mdi mdi-account text-xl"})])]),n("li",{staticClass:"mr-3"},[n("button",{staticClass:"inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",on:{click:function(t){return e.$router.push("/home/about")}}},[n("span",{staticClass:"mdi mdi-information text-xl"})])]),n("li",{staticClass:"mr-3"},[n("button",{staticClass:"inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4",on:{click:function(t){return e.isLogout()}}},[n("span",{staticClass:"mdi mdi-login text-xl"})])])])])])]),n("div",[n("router-view"),n("br"),n("br"),n("br"),n("br")],1)])},v=[],x=(n("ac1f"),n("5319"),{name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteEnter:function(e,t,n){return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)})))()},computed:{},methods:{isLogout:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=confirm("คุณแน่ใจใช่ไหมที่จะออกจากระบบ"),!n){t.next=7;break}return t.next=4,e.$store.dispatch("auth/logout");case 4:return t.next=6,e.$router.replace("/");case 6:location.reload();case 7:case"end":return t.stop()}}),t)})))()},load:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}}),k=x,j=Object(c["a"])(k,g,v,!1,null,"4bc3a262",null),O=j.exports;r["default"].use(p["a"]);var R=[{path:"/",component:w,children:[{path:"",name:"Root-Home",component:function(){return Promise.all([n.e("chunk-222ddace"),n.e("chunk-72123450")]).then(n.bind(null,"5d8a"))}}]},{path:"/home",component:O,children:[{path:"",name:"home-Home",component:function(){return Promise.all([n.e("chunk-222ddace"),n.e("chunk-79843c52"),n.e("chunk-2d20f91a")]).then(n.bind(null,"b3d7"))}},{path:"profile",name:"home-profile",component:function(){return Promise.all([n.e("chunk-222ddace"),n.e("chunk-79843c52"),n.e("chunk-2d0d5c8e")]).then(n.bind(null,"7087"))}},{path:"exercise",name:"home-exercise",component:function(){return Promise.all([n.e("chunk-222ddace"),n.e("chunk-79843c52"),n.e("chunk-f96797c2")]).then(n.bind(null,"0aec"))}},{path:"video",name:"home-video",component:function(){return Promise.all([n.e("chunk-222ddace"),n.e("chunk-79843c52"),n.e("chunk-748afff6")]).then(n.bind(null,"4c07b"))}},{path:"about",name:"home-about",component:function(){return Promise.all([n.e("chunk-222ddace"),n.e("chunk-2d21eb63")]).then(n.bind(null,"d771"))}}]}],y=new p["a"]({routes:R}),C=y,E=n("2f62"),_=n("7ffd"),P=(n("2ef0"),n("bc3a")),S=n.n(P),T=(localStorage.getItem("token")&&"Token ".concat(localStorage.getItem("token")),{headers:{common:{}},baseURL:Object({NODE_ENV:"production",BASE_URL:"/static/"}).baseURL||Object({NODE_ENV:"production",BASE_URL:"/static/"}).apiUrl||"https://www.learnvideo.ga",timeout:91e3}),L=S.a.create(T),A=L,N=n("1335"),$={token:null,user:{}},U={},H=_["d"].mutations($),I={register:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.post("/auth/reg/register/",t).then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},getUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("auth/user/").then((function(e){return $.user=e.data,e.data})).catch(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.response.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),updatePassword:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.post("/auth/password/change/",t).then(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(N["show"])(!0,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},updateUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.put("auth/user/",$.user).then((function(e){return $.user=e.data,e.data})).catch(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.response.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),login:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.removeItem("token"),$.token=null,e.next=4,A.post("/auth/login/",t).then(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(_["c"])("auth/storeToken",t.data.key);case 2:return e.abrupt("return",Object(N["show"])(!0,t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return Object(N["show"])(!1,e)}));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()},storeToken:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.setItem("token",n),$.token=n,A.defaults.headers.common["Authorization"]="Token ".concat(n);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.post("/auth/logout/").then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return t=e.sent,localStorage.removeItem("token"),$.token=null,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))()},about:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/about/").then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},getHistory:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/scorehistory/?user=".concat(t)).then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}},B={namespaced:!0,state:$,getters:U,mutations:H,actions:I},D={},M={},q=_["d"].mutations(D),z={videos:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/video/").then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},video:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/video/".concat(t,"/")).then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},storeHistory:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.post("/api/scorehistory/",t).then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},getExercise:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/exercise/?video=".concat(t)).then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},getExerciseId:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/exercise/".concat(t,"/")).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},getAsk:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/askanswer/?exercise=".concat(t)).then((function(e){return Object(N["show"])(!0,e)})).catch((function(e){return Object(N["show"])(!1,e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}},J={namespaced:!0,state:D,getters:M,mutations:q,actions:z};r["default"].use(E["a"]);var V=function(){var e=new E["a"].Store({plugins:[_["b"].plugin],modules:{auth:B,exam:J}});return e},W=n("574d"),F=n.n(W);n("04f2");r["default"].use(F.a,{}),r["default"].config.productionTip=!1,new r["default"]({router:C,store:V,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.a8990377.js.map