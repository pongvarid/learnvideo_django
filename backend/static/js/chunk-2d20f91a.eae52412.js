(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f91a"],{b3d7:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden flex items-center justify-center",staticStyle:{background:"#edf2f7"}},[s("div",{staticClass:" bg-gray-200 flex items-center justify-center "},[s("div",{staticClass:"bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden   flex "},[s("div",{staticClass:"bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto"},[s("div",{staticClass:"mb-3"},[s("h1",{staticClass:"text-3xl font-bold"},[t._v("ล่าสุด")]),s("p",{staticClass:"text-sm text-gray-500 uppercase font-bold"},[t._v(t._s(t.convert(t.videoLastest.created_at)))])]),s("div",{staticClass:"mb-5",on:{click:function(e){return t.gotoVideo(t.videoLastest.id)}}},[s("a",{staticClass:"block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95",style:"background: url(https://www.learnvideo.ga/"+t.videoLastest.image+") center; background-size: cover;",attrs:{href:"#"},on:{click:function(e){return t.$router.push("/lessionA")}}},[t._m(0),s("div",{staticClass:"h-48"}),s("h2",{staticClass:"text-white text-2xl font-bold leading-tight mb-3 pr-5"},[t._v(t._s(t.videoLastest.name))])])]),t._m(1),t._l(t.videosList,(function(e,n){return s("div",{key:n},[s("hr",{staticClass:"border-gray-200 my-3"}),s("div",{on:{click:function(s){return t.gotoVideo(e.id)}}},[s("a",{staticClass:"flex w-full transform transition-all duration-300 scale-100 hover:scale-95",attrs:{href:"#"},on:{click:function(e){return t.$router.push("/lessionB")}}},[s("div",{staticClass:"block h-24 w-2/5 rounded overflow-hidden",style:"background: url(https://www.learnvideo.ga/"+e.image+") center; background-size: cover;"}),s("div",{staticClass:"pl-3 w-3/5"},[s("h3",{staticClass:"text-md font-semibold leading-tight mb-3"},[t._v(t._s(e.name))]),s("div",{staticClass:"flex w-full items-center text-xs text-gray-500 font-medium"},[s("div",[s("span",{staticClass:"mdi mdi-video"}),t._v(" "+t._s(t.convert(e.created_at)))])])])])])])}))],2)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"absolute top-0 right-0 -mt-3 mr-3"},[s("div",{staticClass:"rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"},[s("i",{staticClass:"mdi mdi-fire text-base align-middle"}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("ล่าสุด")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("h1",{staticClass:"text-3xl font-bold"},[t._v("บทเรียน")])])}],r=s("5530"),a=(s("96cf"),s("1da1")),o=s("7ffd"),c=s("c1df"),l=s.n(c),d={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World",videosList:[],videoLastest:{}}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,s){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:Object(r["a"])(Object(r["a"])({},Object(o["a"])("exam/*")),{},{convert:function(t){return l()(t).toNow()},gotoVideo:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$router.push("home/video?id=".concat(t));case 2:case"end":return s.stop()}}),s)})))()},load:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.videos();case 2:e=t.sent,this.videosList=e.body.results,this.videoLastest=this.videosList[this.videosList.length-1],console.log(this.videoLastest);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},u=d,v=s("2877"),f=Object(v["a"])(u,n,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d20f91a.eae52412.js.map