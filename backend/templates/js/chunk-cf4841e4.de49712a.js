(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf4841e4"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var f=n[a],u=f&&f.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(s){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1d1c":function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("37e8");n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:i})},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),a=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!a||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("1d1c"),r("7a82"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},"7a82":function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("9bf2");n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:i.f})},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),f=r("4930"),u=r("fdbf"),s=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),h=r("7b0b"),v=r("fc6a"),y=r("c04e"),g=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),S=r("057f"),j=r("7418"),x=r("06cf"),P=r("9bf2"),L=r("d1e7"),E=r("9112"),T=r("6eeb"),C=r("5692"),k=r("f772"),R=r("d012"),A=r("90e3"),D=r("b622"),M=r("e538"),N=r("746f"),V=r("d44e"),_=r("69f3"),G=r("b727").forEach,H=k("hidden"),F="Symbol",J="prototype",I=D("toPrimitive"),B=_.set,W=_.getterFor(F),q=Object[J],Q=o.Symbol,$=i("JSON","stringify"),z=x.f,K=P.f,U=S.f,X=L.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=o.QObject,ot=!nt||!nt[J]||!nt[J].findChild,it=a&&s((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(q,e);n&&delete q[e],K(t,e,r),n&&t!==q&&K(q,e,n)}:K,ct=function(t,e){var r=Y[t]=m(Q[J]);return B(r,{type:F,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ft=function(t,e,r){t===q&&ft(Z,e,r),p(t);var n=y(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,H)&&t[H][n]&&(t[H][n]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,H)||K(t,H,g(1,{})),t[H][n]=!0),it(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=v(e),n=O(r).concat(pt(r));return G(n,(function(e){a&&!lt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,H)&&this[H][e])||r)},bt=function(t,e){var r=v(t),n=y(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var o=z(r,n);return!o||!l(Y,n)||l(r,H)&&r[H][n]||(o.enumerable=!0),o}},dt=function(t){var e=U(v(t)),r=[];return G(e,(function(t){l(Y,t)||l(R,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=U(e?Z:v(t)),n=[];return G(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(f||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===q&&r.call(Z,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),it(this,e,g(1,t))};return a&&ot&&it(q,e,{configurable:!0,set:r}),ct(e,t)},T(Q[J],"toString",(function(){return W(this).tag})),T(Q,"withoutSetter",(function(t){return ct(A(t),t)})),L.f=lt,P.f=ft,x.f=bt,w.f=S.f=dt,j.f=pt,M.f=function(t){return ct(D(t),t)},a&&(K(Q[J],"description",{configurable:!0,get:function(){return W(this).description}}),c||T(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Q}),G(O(rt),(function(t){N(t)})),n({target:F,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!a},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(h(t))}}),$){var ht=!f||s((function(){var t=Q();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,$.apply(null,o)}})}Q[J][I]||E(Q[J],I,Q[J].valueOf),V(Q,F),R[H]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),c=Object.defineProperty,a={},f=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var r=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:f,l=i(e,1)?e[1]:void 0;return a[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,l)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),f=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,s=4==t,l=6==t,b=5==t||l;return function(d,p,h,v){for(var y,g,m=i(d),O=o(m),w=n(p,h,3),S=c(O.length),j=0,x=v||a,P=e?x(d,S):r?x(d,0):void 0;S>j;j++)if((b||j in O)&&(y=O[j],g=w(y,j,m),t))if(e)P[j]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return j;case 2:f.call(P,y)}else if(s)return!1;return l?-1:u||s?s:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d771:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-hidden flex items-center justify-center",staticStyle:{background:"#edf2f7"}},[r("main",{staticClass:"bg-white   p-8    shadow-2xl"},[r("section",[r("h3",{staticClass:"font-bold text-xl"},[r("b",[t._v(t._s(t.aboutText.title)+t._s(t.aboutText.text))])])]),r("hr"),r("section",{staticClass:"mt-10",domProps:{innerHTML:t._s(t.aboutText.body)}},[r("h2",[t._v("Application version Mockup 1.0")])])])])},o=[],i=r("5530"),c=(r("96cf"),r("1da1")),a=r("7ffd"),f={name:"Root",components:{},props:{},data:function(){return{aboutText:{},txt:"Hello World"}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,r){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:Object(i["a"])(Object(i["a"])({},Object(a["a"])("auth/*")),{},{load:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.about();case 2:e=t.sent,this.aboutText=e.body.results[0];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},u=f,s=r("2877"),l=Object(s["a"])(u,n,o,!1,null,"4cf3a6af",null);e["default"]=l.exports},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,u=i(n),s={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),u=!a||f;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-cf4841e4.de49712a.js.map