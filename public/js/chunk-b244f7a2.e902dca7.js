(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b244f7a2"],{b0c0:function(t,e,a){var s=a("83ab"),n=a("9bf2").f,r=Function.prototype,i=r.toString,l=/^\s*function ([^ (]*)/,u="name";s&&!(u in r)&&n(r,u,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(t){return""}}})},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("div",{staticClass:"container"},[a("div",{staticClass:"card mt-3",staticStyle:{width:"18rem"}},[a("img",{staticClass:"w-100",attrs:{src:t.user.img||"https://pruittcares.org/wp-content/uploads/bb-plugin/cache/placeholder-circle.jpg",alt:""}}),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("Email: "+t._s(t.user.email))]),a("li",{staticClass:"list-group-item"},[t._v("Name: "+t._s(t.user.name))]),a("li",{staticClass:"list-group-item"},[t._v("Username: "+t._s(t.user.username))])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#editModal"}},[t._v("Edit")])]),a("div",{staticClass:"modal fade",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"editModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"custom-file mb-3"},[a("input",{ref:"profileImg",staticClass:"custom-file-input",attrs:{type:"file",name:"profileImg",id:"customFile"}}),a("label",{staticClass:"custom-file-label",attrs:{for:"customFile"}},[t._v("Profile Picture")])]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"name"},domProps:{value:null===t.name?t.user.name:t.name},on:{input:function(e){return t.getInputValue(e)}}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:null===t.username?t.user.username:t.username},on:{input:function(e){return t.getInputValue(e)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:null===t.name||null===t.username},on:{click:t.onUpdateUser}},[t._v("Save changes")])])])])])]):t._e()},n=[],r=(a("b0c0"),a("96cf"),a("1da1")),i=a("5530"),l=a("2f62"),u={data:function(){return{name:null,username:null}},computed:Object(i["a"])({},Object(l["c"])(["user"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["getProfile","updateUser"])),{},{onUpdateUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=new FormData,a.append("name",t.name),a.append("username",t.username),a.append("image",t.$refs.profileImg.files[0]),t.updateUser(a).then((function(e){t.name=t.username=null,t.getProfile()}));case 5:case"end":return e.stop()}}),e)})))()},getInputValue:function(t){"name"==t.target.name?(this.name=t.target.value,null===this.name&&(this.name=this.user.name)):(this.username=t.target.value,null===this.username&&(this.username=this.user.username))}}),created:function(){this.getProfile()}},o=u,c=a("2877"),m=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-b244f7a2.e902dca7.js.map