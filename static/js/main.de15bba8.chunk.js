(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{16:function(e,t,n){e.exports={active:"Header_active__3m_-6",navPreJunPlus:"Header_navPreJunPlus__1bzkk",hidden:"Header_hidden__1MwH8"}},18:function(e,t,n){e.exports={message:"Message_message__2WQar",ava:"Message_ava__17DTz",angle:"Message_angle__3Rd4Z",content:"Message_content__1trIh",name:"Message_name__1DFRi",mess:"Message_mess__184U8",time:"Message_time__29vvg"}},23:function(e,t,n){e.exports={someClass:"Affairs_someClass__63TrT",affair:"Affairs_affair__1phFv",name:"Affairs_name__bM0zj",priority:"Affairs_priority__9p65X",button:"Affairs_button__1DJDj"}},24:function(e,t,n){e.exports={input:"SuperInputText_input__3NCu-",superInput:"SuperInputText_superInput__eJ94I",errorInput:"SuperInputText_errorInput__3Z08q",error:"SuperInputText_error__2zJyi"}},34:function(e,t,n){e.exports={default:"SuperButton_default__1bdQC",red:"SuperButton_red__2G5Td"}},35:function(e,t,n){e.exports={textError:"Greeting_textError__tu22M",error:"Greeting_error__1BTlo"}},36:function(e,t,n){e.exports={blue:"HW4_blue__29RMI",column:"HW4_column__Qo7kj",testSpanError:"HW4_testSpanError__2UzWL"}},37:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2kK-3",spanClassName:"SuperCheckbox_spanClassName__3NvNP"}},38:function(e,t,n){e.exports={dark:"HW12_dark__1MlXl","dark-text":"HW12_dark-text__3Par0",red:"HW12_red__LASn3","red-text":"HW12_red-text__3BaOR",some:"HW12_some__3clYt","some-text":"HW12_some-text__DmC_Y",lemon:"HW12_lemon__1-0OU","lemon-text":"HW12_lemon-text__2W_pH",green:"HW12_green__2zFj0"}},48:function(e,t,n){e.exports={App:"App_App__JH2LL"}},50:function(e,t,n){e.exports={beautySpan:"SuperEditableSpan_beautySpan__1O-aU"}},51:function(e,t,n){e.exports={btn:"HW8_btn__3OwrL"}},53:function(e,t,n){e.exports={range:"SuperRange_range__2FlY5"}},62:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(28),s=n.n(a),o=(n(62),n(48)),i=n.n(o),j=n(19),l=n(16),u=n.n(l),b=n(0);var d=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:u.a.hidden,children:[Object(b.jsx)(j.b,{to:"/pre-junior",className:u.a.navPreJunPlus,activeClassName:u.a.active,children:"Pre-junior"}),Object(b.jsx)(j.b,{to:"/junior",className:u.a.navPreJunPlus,activeClassName:u.a.active,children:"Junior"}),Object(b.jsx)(j.b,{to:"/junior+",className:u.a.navPreJunPlus,activeClassName:u.a.active,children:"Junior+"}),Object(b.jsx)("div",{className:u.a.header,children:"Header(hw5)"})]})})},O=n(8),h=n(18),x=n.n(h);var m=function(e){return Object(b.jsxs)("div",{className:x.a.message,children:[Object(b.jsx)("img",{src:e.avatar,alt:"avatar",className:x.a.ava}),Object(b.jsx)("div",{className:x.a.angle}),Object(b.jsxs)("div",{className:x.a.content,children:[Object(b.jsxs)("div",{className:x.a.name,children:[" ",e.name," "]}),Object(b.jsxs)("div",{className:x.a.mess,children:[" ",e.message," "]}),Object(b.jsxs)("div",{className:x.a.time,children:[" ",e.time," "]})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",f="some text",_="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(m,{avatar:v,name:p,message:f,time:_}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=n(4),N=n(23),k=n.n(N),y=n(7),S=n(10),w=n(34),E=n.n(w),H=function(e){var t=e.red,n=e.className,r=Object(S.a)(e,["red","className"]),c="".concat(t?E.a.red:E.a.default," ").concat(n);return Object(b.jsx)("button",Object(y.a)({className:c},r))};var A=function(e){return Object(b.jsxs)("div",{className:k.a.affair,children:[Object(b.jsx)("div",{className:k.a.name,children:e.affair.name}),Object(b.jsx)("div",{className:k.a.priority,children:e.affair.priority}),Object(b.jsx)(H,{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.button,children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(b.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)(H,{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(H,{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)(H,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)(H,{onClick:function(){e.setFilter("low")},children:"Low"})]})},P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var L=function(){var e=Object(r.useState)(P),t=Object(C.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(C.a)(a,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(T,{data:j,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:o}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},W=n(9),D=n(35),G=n.n(D),I=n(24),M=n.n(I),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(M.a.error," ").concat(o||""),l="".concat(M.a.input," ").concat(a?M.a.errorInput:M.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(y.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},i)),a&&Object(b.jsx)("span",{className:j,children:a})]})},R=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onKeyPressHandler,o=c?G.a.error:"",i=!!c;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(F,{value:t,onChange:n,onKeyUp:s,className:o}),Object(b.jsx)("span",{className:G.a.textError,children:c})]}),Object(b.jsx)(H,{onClick:r,disabled:i,children:" add "}),Object(b.jsx)("span",{children:a})]})},J=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(C.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),j=Object(C.a)(i,2),l=j[0],u=j[1],d=function(){0===s.length?u("Name is required"):s.length<2?u("name must contain at least 2 characters"):(alert("Hello ".concat(s,"  !")),n(s),o(""))},O=t.length;return Object(b.jsx)(R,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t&&(o(t),u(""))},addUser:d,error:l,totalUsers:O,onKeyPressHandler:function(e){"Enter"===e.key&&d()}})},U=n(103);var B=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(J,{users:n,addUserCallback:function(e){var t={_id:Object(U.a)(),name:e},r=[].concat(Object(W.a)(n),[t]);c(r)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},K=n(36),z=n.n(K),q=n(37),X=n.n(q),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(y.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(b.jsx)("span",{className:X.a.spanClassName,children:c})]})};var Q=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(C.a)(o,2),j=i[0],l=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:z.a.column,children:[Object(b.jsx)(F,{value:n,onChangeText:c,onEnter:s,error:a}),Object(b.jsx)(F,{className:z.a.blue}),Object(b.jsx)(H,{children:"default"}),Object(b.jsx)(H,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(H,{disabled:!0,children:"disabled"}),Object(b.jsx)(Y,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Y,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=n(50),$=n.n(Z),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(S.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),o=Object(C.a)(s,2),i=o[0],j=o[1],l=c||{},u=l.children,d=l.onDoubleClick,O=l.className,h=Object(S.a)(l,["children","onDoubleClick","className"]),x="".concat($.a.beautySpan," ").concat(O);return Object(b.jsx)(b.Fragment,{children:i?Object(b.jsx)(F,Object(y.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:x}),Object(b.jsx)("span",Object(y.a)(Object(y.a)({onDoubleClick:function(e){j(!0),d&&d(e)}},h),{},{children:u||a.value}))]})})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(V,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(H,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(b.jsx)(H,{onClick:function(){var e=te("editable-span-value",n);c(e)},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(L,{}),Object(b.jsx)(B,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(ne,{})]})};var ce=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ae=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),r=Object(S.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(b.jsxs)("option",{value:e,children:[" ",e," "]},t)})):[];return Object(b.jsx)("select",Object(y.a)(Object(y.a)({onChange:function(e){n&&n(e.currentTarget.value)}},r),{},{children:c}))},se=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=(e.onChange,e.onChangeOption),a=(Object(S.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,checked:r===e,value:e,onChange:a}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:s})},oe=["x","y","z"];var ie=function(){var e=Object(r.useState)(oe[1]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ae,{options:oe,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(se,{name:"radio",options:oe,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sort":var n=Object(W.a)(e),r=n.sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0}));return r;case"sortD":var c=Object(W.a)(e),a=c.sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0})),s=a.reverse();return s;case"check":var o=Object(W.a)(e),i=o.filter((function(e){return e.age>=18}));return i;default:return e}},le=n(51),ue=n.n(le),be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(r.useState)(be),t=Object(C.a)(e,2),n=t[0],c=t[1],a=n.map((function(e){return Object(b.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",a,Object(b.jsxs)("div",{className:ue.a.btn,children:[Object(b.jsx)("div",{children:Object(b.jsx)(H,{onClick:function(){return c(je(be,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(H,{onClick:function(){return c(je(be,{type:"sortD",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{children:Object(b.jsx)(H,{onClick:function(){return c(je(be,{type:"check",payload:"up18"}))},children:"check 18"})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Oe=function(){var e=Object(r.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(new Date),s=Object(C.a)(a,2),o=s[0],i=s[1],j=Object(r.useState)(!1),l=Object(C.a)(j,2),u=l[0],d=l[1],O=function(){clearInterval(n)},h=o.toLocaleTimeString(),x=o.toLocaleDateString();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),u&&Object(b.jsx)("div",{children:x}),Object(b.jsx)(H,{onClick:function(){O();var e=window.setInterval((function(){i(new Date)}),1e3);c(e)},children:"start"}),Object(b.jsx)(H,{onClick:O,children:"stop"})]})};var he=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(Oe,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},xe=n(17),me={isLoading:!1},ve=function(e){return{type:"CHANGE-LOADING",payload:{isLoading:e}}},pe=n.p+"static/media/Preloader.5cf28d5a.gif",fe=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:pe})})};var _e=function(){var e=Object(xe.c)((function(e){return e.loading.isLoading})),t=Object(xe.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",e?Object(b.jsxs)("div",{children:["\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430...",Object(b.jsx)(fe,{})]}):Object(b.jsx)("div",{children:Object(b.jsx)(H,{onClick:function(){t(ve(!0)),setTimeout((function(){return t(ve(!1))}),4e3),console.log("loading...")},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ge=n(53),Ce=n.n(ge),Ne=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,c=e.min,a=Object(S.a)(e,["type","onChange","onChangeRange","className","min"]),s="".concat(Ce.a.range," ").concat(r||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(y.a)({style:{width:"500px"},type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s,value:c},a))})},ke=n(102),ye=function(e){var t=e.onChangeRange,n=e.value,r=(e.min,e.max,e.step,e.disable,Object(S.a)(e,["onChangeRange","value","min","max","step","disable"]));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(ke.a,Object(y.a)({style:{maxWidth:500},value:n,onChange:function(e,n){t(n)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"},r))})};var Se=function(){var e=Object(r.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(100),s=Object(C.a)(a,2),o=s[0],i=s[1],j=[n,o];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(Ne,{onChangeRange:function(e){c(e)},min:n})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(ye,{onChangeRange:function(e){"object"===typeof e&&(c(e[0]),i(e[1]))},value:j}),Object(b.jsx)("span",{children:o})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};function we(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(ie,{}),Object(b.jsx)(de,{}),Object(b.jsx)(he,{}),Object(b.jsx)(_e,{}),Object(b.jsx)(Se,{})]})}var Ee=n(38),He=n.n(Ee),Ae=["dark","red","some","lemon","green"];var Te=function(){var e=Object(xe.c)((function(e){return e.colorTheme.colorTheme})),t=Object(xe.b)();return Object(b.jsxs)("div",{className:He.a[e],children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:He.a[e+"-text"],children:"homeworks 12"}),Object(b.jsx)(ae,{options:Ae,onChangeOption:function(e){"dark"===e&&t({type:"CHANGE-ON-DARK"}),"red"===e&&t({type:"CHANGE-ON-RED"}),"some"===e&&t({type:"CHANGE-ON-SOME"}),"lemon"===e&&t({type:"CHANGE-ON-LEMON"}),"green"===e&&t({type:"CHANGE-ON-GREEN"})}}),Object(b.jsx)("hr",{})]})},Pe=n(54),Le=n.n(Pe),We=function(e){return Le.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e}).then((function(e){return e.data.errorText})).catch((function(e){console.log(Object(y.a)({},e)),console.log(e.response?e.response.data.errorText:e.message)}))};function De(){var e=Object(r.useState)(!1),t=Object(C.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("Push button"),s=Object(C.a)(a,2),o=s[0],i=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(H,{onClick:function(){return function(e){We(e).then((function(e){i(void 0===e?"\u044d\u043c\u0438\u0442\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435":e)}))}(n)},children:"request"}),Object(b.jsx)(Y,{onClick:function(){return c(!n)}}),Object(b.jsx)("div",{children:o})]})}var Ge=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"homeworks 13"}),Object(b.jsx)(De,{})]})};function Ie(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Te,{}),Object(b.jsx)(Ge,{})]})}var Me="/pre-junior",Fe="/junior",Re="/junior+";var Je=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(O.a,{to:Me})}}),Object(b.jsx)(O.b,{path:Me,render:function(){return Object(b.jsx)(re,{})}}),Object(b.jsx)(O.b,{path:Fe,render:function(){return Object(b.jsx)(we,{})}}),Object(b.jsx)(O.b,{path:Re,render:function(){return Object(b.jsx)(Ie,{})}}),"// add routes",Object(b.jsx)(O.b,{render:function(){return Object(b.jsx)(ce,{})}})]})})};var Ue=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(Je,{})]})})};var Be=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=n(39),ze={colorTheme:"dark"},qe=Object(Ke.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING":return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},colorTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-ON-DARK":return{colorTheme:"dark"};case"CHANGE-ON-RED":return{colorTheme:"red"};case"CHANGE-ON-SOME":return{colorTheme:"some"};case"CHANGE-ON-LEMON":return{colorTheme:"lemon"};case"CHANGE-ON-GREEN":return{colorTheme:"green"};default:return e}}}),Xe=Object(Ke.b)(qe),Ye=Xe;window.store=Xe,s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(xe.a,{store:Ye,children:Object(b.jsx)(Be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[92,1,2]]]);
//# sourceMappingURL=main.de15bba8.chunk.js.map