(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f96797c2"],{"0aec":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-screen overflow-hidden flex items-center justify-center "},[r("div",{staticClass:"min-w-screen min-h-screen bg-gray-200 flex items-center justify-center "},[r("div",{staticClass:"bg-white text-gray-800 rounded-xl  overflow-hidden relative flex py-10",staticStyle:{height:"736px"}},[r("div",{staticClass:"bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto"},[e._m(0),e._l(e.ask,(function(t,n){return r("div",{key:n,staticClass:"py-4"},[r("div",[r("div",{staticClass:"pl-3 "},[r("h3",{staticClass:"text-xl font-semibold leading-tight mb-3"},[e._v(e._s(t.ask))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ans[n],expression:"ans[index]"}],attrs:{type:"radio",id:"ans1a"+n,name:"ans1a"+n,value:"0"},domProps:{checked:e._q(e.ans[n],"0")},on:{change:function(t){return e.$set(e.ans,n,"0")}}}),r("label",{staticClass:"ml-2",attrs:{for:"ans1a"+n}},[e._v("A. "+e._s(t.ans1))]),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ans[n],expression:"ans[index]"}],attrs:{type:"radio",id:"ans2a"+n,name:"ans2a"+n,value:"1"},domProps:{checked:e._q(e.ans[n],"1")},on:{change:function(t){return e.$set(e.ans,n,"1")}}}),r("label",{staticClass:"ml-2",attrs:{for:"ans2a"+n}},[e._v("B. "+e._s(t.ans2))]),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ans[n],expression:"ans[index]"}],attrs:{type:"radio",id:"ans3a"+n,name:"ans3a"+n,value:"2"},domProps:{checked:e._q(e.ans[n],"2")},on:{change:function(t){return e.$set(e.ans,n,"2")}}}),r("label",{staticClass:"ml-2",attrs:{for:"ans3a"+n}},[e._v("C. "+e._s(t.ans3))]),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ans[n],expression:"ans[index]"}],attrs:{type:"radio",id:"ans4a"+n,name:"ans4a"+n},domProps:{value:3,checked:e._q(e.ans[n],3)},on:{change:function(t){return e.$set(e.ans,n,3)}}}),r("label",{staticClass:"ml-2",attrs:{for:"ans4a"+n}},[e._v("D. "+e._s(t.ans4))])])]),r("hr",{staticClass:"border-gray-200 my-3"})])})),r("button",{staticClass:"bg-green-600 my-4 hover:bg-purple-700 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200",attrs:{type:"submit"},on:{click:function(t){return e.calculate()}}},[e._v("ยืนยัน")])],2)])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"text-3xl font-bold"},[e._v("แบบทดสอบ ")])])}],s=(r("a9e3"),r("5530")),o=(r("96cf"),r("1da1")),i=r("7ffd"),c=(r("c1df"),{name:"Root",components:{},props:{},data:function(){return{txt:"Hello World",ask:[],ans:[],score:0}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteEnter:function(e,t,r){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})))()},computed:Object(s["a"])({},Object(i["e"])("auth/*")),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(i["a"])("exam/*")),Object(i["a"])("auth/*")),{},{calculate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(r=0;r<e.ans.length;r++)e.ask[r].answer==e.ans[r]&&e.score++;return alert("คุณได้คะแนน ".concat(e.score," คะแนน")),t.next=4,e.storeHistory({user:e.user.pk,score:e.score,exercise:Number(e.$route.query.exercise)});case 4:return alert("คะแนนบันทึกที่ ประวัติการทำแบบฝึกหัด แล้ว"),t.next=7,e.$router.go(-1);case 7:case"end":return t.stop()}}),t)})))()},load:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getUser();case 2:return t=this.$route.query.exercise,e.next=5,this.getAsk(t);case 5:r=e.sent,this.ask=r.body.results;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})}),u=c,l=r("2877"),f=Object(l["a"])(u,n,a,!1,null,"c447583c",null);t["default"]=f.exports},"3bbe":function(e,t,r){var n=r("861d");e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),s="["+a+"]",o=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var s,o;return a&&"function"==typeof(s=t.constructor)&&s!==r&&n(o=s.prototype)&&o!==r.prototype&&a(e,o),e}},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),s=r("94ca"),o=r("6eeb"),i=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,h=r("06cf").f,v=r("9bf2").f,m=r("58a8").trim,b="Number",x=a[b],g=x.prototype,_=c(d(g))==b,w=function(e){var t,r,n,a,s,o,i,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=m(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(s=u.slice(2),o=s.length,i=0;i<o;i++)if(c=s.charCodeAt(i),c<48||c>a)return NaN;return parseInt(s,n)}return+u};if(s(b,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var y,N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(_?f((function(){g.valueOf.call(r)})):c(r)!=b)?u(new x(w(t)),r,N):w(t)},k=n?p(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)i(x,y=k[C])&&!i(N,y)&&v(N,y,h(x,y));N.prototype=g,g.constructor=N,o(a,b,N)}},d2bb:function(e,t,r){var n=r("825a"),a=r("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(r,[]),t=r instanceof Array}catch(s){}return function(r,s){return n(r),a(s),t?e.call(r,s):r.__proto__=s,r}}():void 0)}}]);
//# sourceMappingURL=chunk-f96797c2.e3bf0a82.js.map