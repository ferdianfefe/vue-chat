(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52bde0a0"],{"14c3":function(t,e,s){"use strict";var n=s("c8f0"),a=s.n(n);a.a},2532:function(t,e,s){"use strict";var n=s("23e7"),a=s("5a34"),c=s("1d80"),i=s("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(c(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"293a":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[t.contacts?n("ContactList",{staticClass:"contact-list",attrs:{contacts:t.contacts}}):t._e(),null!=t.activeContact?n("Message",{staticClass:"message"}):n("div",{staticClass:"no-msg-placeholder w-100"},[n("img",{attrs:{src:s("cf05"),alt:""}})])],1)},a=[],c=(s("7db0"),s("5530")),i=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-group"},t._l(t.contacts,(function(e){return s("button",{key:e._id,staticClass:"list-group-item list-group-item-action d-flex justify-content-between align-items-center",class:e==t.activeContact?"active":"",attrs:{type:"button"},on:{click:function(s){return t.selectContact(e)}}},[t._v(" "+t._s(e.name)+" "),s("span",{staticClass:"badge badge-pill",class:e.isOnline?"badge-success":"badge-danger"},[t._v(t._s(e.isOnline?"Online":"Offline"))])])})),0)},r=[],u={name:"Chat",props:["contacts"],methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["setActiveContact","getMessages"])),{},{selectContact:function(t){this.setActiveContact(t),this.socket.emit("enter-chat",{sender:localStorage.getItem("userId"),receiver:t._id})}}),computed:Object(c["a"])({},Object(i["c"])(["user","activeContact","socket"]))},l=u,d=(s("faf5"),s("2877")),f=Object(d["a"])(l,o,r,!1,null,"dc561d28",null),g=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-light bg-light"},[n("a",{staticClass:"navbar-brand"},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:s("cf05"),width:"30",height:"30",alt:"",loading:"lazy"}}),t._v(" "+t._s(t.activeContact.name)+" ")])]),n("main",t._l(t.thisRoomMessages,(function(e){return n("div",{key:e._id,staticClass:"message-item",class:e.sender==t.user?"mine":"others"},[n("div",{staticClass:"message-box"},[n("p",{staticClass:"text-primary"},[t._v(t._s(e.message))])]),n("small",{staticClass:"text-muted"},[t._v(t._s(Date(e.date)))])])})),0),n("footer",{staticClass:"bg-light"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"message",type:"text",placeholder:"Type a message..."},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])])])},b=[],v=(s("4de4"),s("caad"),s("2532"),{name:"Message",data:function(){return{message:""}},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["getMessages","sendMessage"])),{},{onSubmit:function(){var t=this,e={receiverId:this.activeContact._id,message:this.message};this.sendMessage(e).then((function(e){t.socket.emit("send-message",t.message),t.getMessages()})),this.message=""}}),computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])(["activeContact","messages","socket"])),{},{user:function(){return localStorage.getItem("userId")},thisRoomMessages:function(){var t=this;return this.messages.filter((function(e){return e.room.participants.includes(t.activeContact._id)&&e.room.participants.includes(t.user)}))}}),created:function(){}}),h=v,p=(s("f87e"),Object(d["a"])(h,m,b,!1,null,null,null)),C=p.exports,O={components:{ContactList:g,Message:C},computed:Object(c["a"])({},Object(i["c"])(["contacts","activeContact","socket"])),methods:Object(c["a"])({},Object(i["b"])(["getContacts","getMessages"])),created:function(){var t=this;this.getMessages(),this.socket.on("online",(function(e){t.contacts.find((function(t){return t._id==e})).isOnline=!0})),this.socket.on("offline",(function(e){t.contacts.find((function(t){return t._id==e})).isOnline=!1})),this.socket.on("message",(function(e){t.getMessages()})),this.getContacts(),this.socket.emit("online",localStorage.getItem("userId"))},beforeDestroy:function(){this.socket.emit("offline",localStorage.getItem("userId"))}},_=O,j=(s("14c3"),Object(d["a"])(_,n,a,!1,null,null,null));e["default"]=j.exports},"44e7":function(t,e,s){var n=s("861d"),a=s("c6b6"),c=s("b622"),i=c("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},"5a34":function(t,e,s){var n=s("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"7db0":function(t,e,s){"use strict";var n=s("23e7"),a=s("b727").find,c=s("44d2"),i=s("ae40"),o="find",r=!0,u=i(o);o in[]&&Array(1)[o]((function(){r=!1})),n({target:"Array",proto:!0,forced:r||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},ab13:function(t,e,s){var n=s("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},afbc:function(t,e,s){},c8f0:function(t,e,s){},caad:function(t,e,s){"use strict";var n=s("23e7"),a=s("4d64").includes,c=s("44d2"),i=s("ae40"),o=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},ed82:function(t,e,s){},f87e:function(t,e,s){"use strict";var n=s("afbc"),a=s.n(n);a.a},faf5:function(t,e,s){"use strict";var n=s("ed82"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-52bde0a0.5a1d9aa9.js.map