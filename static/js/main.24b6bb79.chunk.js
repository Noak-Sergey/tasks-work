(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={active:"Header_active__3m_-6",navPreJunPlus:"Header_navPreJunPlus__1bzkk",hidden:"Header_hidden__1MwH8"}},function(e,t,n){e.exports={message:"Message_message__2WQar",ava:"Message_ava__17DTz",angle:"Message_angle__3Rd4Z",content:"Message_content__1trIh",name:"Message_name__1DFRi",mess:"Message_mess__184U8",time:"Message_time__29vvg"}},,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__63TrT",affair:"Affairs_affair__1phFv",name:"Affairs_name__bM0zj",priority:"Affairs_priority__9p65X",button:"Affairs_button__1DJDj"}},function(e,t,n){e.exports={input:"SuperInputText_input__3NCu-",superInput:"SuperInputText_superInput__eJ94I",errorInput:"SuperInputText_errorInput__3Z08q",error:"SuperInputText_error__2zJyi"}},,,,,function(e,t,n){e.exports={default:"SuperButton_default__1bdQC",red:"SuperButton_red__2G5Td"}},function(e,t,n){e.exports={textError:"Greeting_textError__tu22M",error:"Greeting_error__1BTlo"}},function(e,t,n){e.exports={blue:"HW4_blue__29RMI",column:"HW4_column__Qo7kj",testSpanError:"HW4_testSpanError__2UzWL"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2kK-3",spanClassName:"SuperCheckbox_spanClassName__3NvNP"}},,,,function(e,t,n){e.exports={App:"App_App__JH2LL"}},,,function(e,t,n){e.exports={beautySpan:"SuperEditableSpan_beautySpan__1O-aU"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),i=(n(35),n(26)),o=n.n(i),j=n(10),l=n(8),u=n.n(l),d=n(0);var b=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:u.a.hidden,children:[Object(d.jsx)(j.b,{to:"/pre-junior",className:u.a.navPreJunPlus,activeClassName:u.a.active,children:"Pre-junior"}),Object(d.jsx)(j.b,{to:"/junior",className:u.a.navPreJunPlus,activeClassName:u.a.active,children:"Junior"}),Object(d.jsx)(j.b,{to:"/junior+",className:u.a.navPreJunPlus,activeClassName:u.a.active,children:"Junior+"}),Object(d.jsx)("div",{className:u.a.header,children:"Header(hw5)"})]})})},h=n(2),O=n(9),x=n.n(O);var m=function(e){return Object(d.jsxs)("div",{className:x.a.message,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:x.a.ava}),Object(d.jsx)("div",{className:x.a.angle}),Object(d.jsxs)("div",{className:x.a.content,children:[Object(d.jsxs)("div",{className:x.a.name,children:[" ",e.name," "]}),Object(d.jsxs)("div",{className:x.a.mess,children:[" ",e.message," "]}),Object(d.jsxs)("div",{className:x.a.time,children:[" ",e.time," "]})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",v="some text",_="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(m,{avatar:f,name:p,message:v,time:_}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=n(3),N=n(13),k=n.n(N),S=n(6),y=n(7),w=n(19),P=n.n(w),T=function(e){var t=e.red,n=e.className,a=Object(y.a)(e,["red","className"]),r="".concat(t?P.a.red:P.a.default," ").concat(n);return Object(d.jsx)("button",Object(S.a)({className:r},a))};var A=function(e){return Object(d.jsxs)("div",{className:k.a.affair,children:[Object(d.jsx)("div",{className:k.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:k.a.priority,children:e.affair.priority}),Object(d.jsx)(T,{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.button,children:"X"})]})};var E=function(e){var t=e.data.map((function(t){return Object(d.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(T,{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(T,{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(T,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(T,{onClick:function(){e.setFilter("low")},children:"Low"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(a.useState)(H),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(E,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=n(30),F=n(20),M=n.n(F),U=n(14),B=n.n(U),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(B.a.error," ").concat(i||""),l="".concat(B.a.input," ").concat(c?B.a.errorInput:B.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},D=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onKeyPressHandler,i=r?M.a.error:"",o=!!r;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(W,{value:t,onChange:n,onKeyUp:s,className:i}),Object(d.jsx)("span",{className:M.a.textError,children:r})]}),Object(d.jsx)(T,{onClick:a,disabled:o,children:" add "}),Object(d.jsx)("span",{children:c})]})},K=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],b=function(){0===s.length?u("Name is required"):s.length<2?u("name must contain at least 2 characters"):(alert("Hello ".concat(s,"  !")),n(s),i(""))},h=t.length;return Object(d.jsx)(D,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t&&(i(t),u(""))},addUser:b,error:l,totalUsers:h,onKeyPressHandler:function(e){"Enter"===e.key&&b()}})},z=n(44);var G=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(K,{users:n,addUserCallback:function(e){var t={_id:Object(z.a)(),name:e},a=[].concat(Object(J.a)(n),[t]);r(a)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},L=n(21),R=n.n(L),q=n(22),Q=n.n(q),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:Q.a.spanClassName,children:r})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:R.a.column,children:[Object(d.jsx)(W,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(W,{className:R.a.blue}),Object(d.jsx)(T,{children:"default"}),Object(d.jsx)(T,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(T,{disabled:!0,children:"disabled"}),Object(d.jsx)(X,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(X,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Y=n(29),$=n.n(Y),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(y.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,b=l.onDoubleClick,h=l.className,O=Object(y.a)(l,["children","onDoubleClick","className"]),x="".concat($.a.beautySpan," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(W,Object(S.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:x}),Object(d.jsx)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){j(!0),b&&b(e)}},O),{},{children:u||c.value}))]})})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(V,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(T,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(d.jsx)(T,{onClick:function(){var e=te("editable-span-value",n);r(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(I,{}),Object(d.jsx)(G,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(ne,{})]})};var re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};function ce(){return Object(d.jsx)("div",{children:"Hi i am junior frontend developer !"})}function se(){return Object(d.jsx)("div",{children:"Hi i am also junior frontend developer !!!"})}var ie="/pre-junior",oe="/junior",je="/junior+";var le=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:ie})}}),Object(d.jsx)(h.b,{path:ie,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(h.b,{path:oe,render:function(){return Object(d.jsx)(ce,{})}}),Object(d.jsx)(h.b,{path:je,render:function(){return Object(d.jsx)(se,{})}}),"// add routes",Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(re,{})}})]})})};var ue=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(le,{})]})})};var de=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.24b6bb79.chunk.js.map