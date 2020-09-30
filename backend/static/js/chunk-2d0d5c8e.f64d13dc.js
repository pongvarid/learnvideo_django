(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c8e"],{7087:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-screen overflow-hidden flex flex-col ",staticStyle:{"font-family":"'Lato',sans-serif"}},[r("main",{staticClass:"bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex-col  py-10"},[t._m(0),r("section",{staticClass:"bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto relative"},[r("form",{staticClass:"flex flex-col",on:{submit:function(e){return e.preventDefault(),t.updateUserProfile()}}},[r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"email"}},[t._v("ชื่อ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.first_name,expression:"user.first_name"}],staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3",attrs:{type:"text",value:"User-Name",id:"email"},domProps:{value:t.user.first_name},on:{input:function(e){e.target.composing||t.$set(t.user,"first_name",e.target.value)}}})]),r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"password"}},[t._v("สกุล")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3",attrs:{type:"text",value:"User-Surname",id:"password"},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}})]),r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"password"}},[t._v("อีเมล์")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3",attrs:{disabled:"",type:"email",value:"user@email.com",id:"password"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"password"}},[t._v("ชื่อผู้ใช้")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3",attrs:{disabled:"",type:"text",value:"user@email.com",id:"password"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),r("button",{staticClass:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200",attrs:{type:"submit"}},[t._v("แก้ไข")])]),t._v(" "),r("br"),r("form",{staticClass:"flex flex-col",on:{submit:function(e){return e.preventDefault(),t.changePasswordProfile()}}},[r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"password"}},[t._v("รหัสผ่านใหม่")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.new_password1,expression:"form.new_password1"}],staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3",attrs:{type:"password",required:""},domProps:{value:t.form.new_password1},on:{input:function(e){e.target.composing||t.$set(t.form,"new_password1",e.target.value)}}})]),r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"password"}},[t._v("ยืนยันรหัสผ่านใหม่")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.new_password2,expression:"form.new_password2"}],staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-3",attrs:{type:"password",required:""},domProps:{value:t.form.new_password2},on:{input:function(e){e.target.composing||t.$set(t.form,"new_password2",e.target.value)}}})]),r("button",{staticClass:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200",attrs:{type:"submit"}},[t._v("เปลี่ยนรหัสผ่าน")])]),r("br"),r("hr"),r("section",{staticClass:"p-4"},[r("h3",{staticClass:"font-bold text-2xl h-full w-full  "},[t._v("ประวัติการทำแบบฝึกหัด")]),t._v(" "),r("br"),r("button",{staticClass:"w-full  bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200",on:{click:function(e){t.historyDialog=!0}}},[t._v("ดูประวัติ")]),r("br"),r("br")])])]),r("vs-dialog",{attrs:{blur:""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin"},[t._v(" ประวัติการทำแบบฝึกหัด ")])]},proxy:!0}]),model:{value:t.historyDialog,callback:function(e){t.historyDialog=e},expression:"historyDialog"}},[r("div",{staticClass:"con-form"},t._l(t.history,(function(e,s){return r("div",{key:s,staticClass:"m-2 rounded-xl"},[r("h2",{staticClass:"text-2xl"},[t._v(t._s(e.exercise.name))]),r("h3",{staticClass:"text-xl"},[t._v(t._s(e.score)+" คะแนน")]),r("h4",[t._v(t._s(t.convert(e.created_at)))]),r("hr")])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"p-4"},[r("h3",{staticClass:"font-bold text-2xl h-full w-full  "},[t._v("โปรไฟล์")])])}],o=r("5530"),n=(r("96cf"),r("1da1")),i=r("7ffd"),l=r("c1df"),u=r.n(l),c={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World",form:{},historyDialog:!1,history:[]}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,r){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})))()},computed:Object(o["a"])({},Object(i["e"])("auth/*")),methods:Object(o["a"])(Object(o["a"])({},Object(i["a"])("auth/*")),{},{convert:function(t){return u()(t).toNow()},changePasswordProfile:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.updatePassword(t.form);case 2:r=e.sent,r.status?(t.$vs.notification({color:"success",title:"เปลี่ยนรหัสผ่านสำเร็จ"}),t.form={}):t.$vs.notification({color:"danger",title:"เปลี่ยนรหัสผ่านไม่สำเร็จ",text:"โปรดตรวจสอบข้อมูลให้ถูกต้อง"});case 4:case"end":return e.stop()}}),e)})))()},updateUserProfile:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.updateUser();case 2:r=e.sent,console.log(r),r.pk?(t.$vs.notification({color:"success",title:"เปลี่ยนข้อมูลสำเร็จ"}),t.form={}):t.$vs.notification({color:"danger",title:"เปลี่ยนข้อมูลไม่สำเร็จ",text:"โปรดตรวจสอบข้อมูลให้ถูกต้อง"});case 5:case"end":return e.stop()}}),e)})))()},load:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getUser();case 2:return t.next=4,this.getHistory(this.user.pk);case 4:e=t.sent,this.history=e.body.results;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},d=c,m=r("2877"),f=Object(m["a"])(d,s,a,!1,null,"18addb55",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0d5c8e.f64d13dc.js.map