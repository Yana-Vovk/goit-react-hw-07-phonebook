(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{21:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},22:function(t,e,n){t.exports={title:"Filter_title__mtLuE",wrap:"Filter_wrap__Iw2Ae",input:"Filter_input__2DoVp"}},44:function(t,e,n){},46:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=n(5),u=(n(44),n(7)),i=(n(45),n(46),n(26)),l=n(11),b=n.n(l),d=n(18),j=n(2),f=n(19),m=n.n(f),O={addContactRequest:Object(j.b)("contacts/addContactRequest"),addContactSuccess:Object(j.b)("contacts/addContactSuccess"),addContactError:Object(j.b)("contacts/addContactError"),deleteContactRequest:Object(j.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(j.b)("contacts/deleteContactSuccess"),deleteContactError:Object(j.b)("contacts/deleteContactError"),changeFilter:Object(j.b)("contacts/changeFilter")},p=n(13),h=n.n(p);function C(){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/items");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="http://localhost:3000";var x=Object(j.c)("fetchContactsRequest",Object(d.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),v=function(t){var e=t.stateName,n=t.number;return function(t){var a={id:m.a.generate(),name:e,number:n};t(O.addContactRequest()),function(t){return h.a.post("/items",t)}(a).then((function(e){var n=e.data;return u.b.success("Contact successfully added!"),t(O.addContactSuccess(n))})).catch((function(e){return u.b.error("Contact is not added! Something wrong!"),t(O.addContactError(e))}))}},_=function(t){return function(e){var n;e(O.deleteContactRequest()),(n=t,h.a.delete("/items/"+n)).then((function(){return u.b.success("Contact successfully deleted!"),e(O.deleteContactSuccess(t))})).catch((function(t){return u.b.error("Contact is not deleted! Something wrong!"),e(O.deleteContactError(t))}))}},N=n(8),F=n.n(N),w=function(t){var e=t.contacts,n=e.filter,a=e.entities;return""===n?a:a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},S=function(t){return t.contacts.entities},y=n(1);var L=Object(s.b)(null,(function(t){return{onSubmit:function(e){var n=e.stateName,a=e.number;return t(v({stateName:n,number:a}))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(""),b=Object(i.a)(l,2),d=b[0],j=b[1],f=Object(s.d)(S),m=function(){o(""),j("")},O=function(t){var e=t.target,n=e.name,a=e.value;0!==n&&("name"===n?o(a):"number"===n&&j(a))};return Object(y.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault(),f.find((function(t){return t.name===r||t.number===d}))?u.b.warning("Contact already exists!"):e({stateName:r,number:d}),m()},children:[Object(y.jsxs)("label",{className:F.a.label,children:["Name",Object(y.jsx)("input",{className:F.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:O})]}),Object(y.jsxs)("label",{className:F.a.label,children:["Number",Object(y.jsx)("input",{className:F.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:O})]}),Object(y.jsx)("button",{className:F.a.button,type:"submit",onSubmit:m,children:"Add contact"})]})})),k=n(21),q=n.n(k);var E=Object(s.b)(null,(function(t){return{onDelete:function(e){return t(_(e))}}}))((function(t){var e=t.onDelete,n=Object(s.c)(),c=Object(s.d)(w);return Object(a.useEffect)((function(){n(x())}),[n]),Object(y.jsx)(y.Fragment,{children:0!==c.length&&Object(y.jsx)("ul",{className:q.a.list,children:c.map((function(t){var n=t.name,a=t.number,c=t.id;return Object(y.jsxs)("li",{className:q.a.item,children:[n," : ",a," ",Object(y.jsx)("button",{className:q.a.button,type:"button",onClick:function(){return e(c)},children:"Delete"})]},m.a.generate())}))})})})),R=n(22),A=n.n(R),T=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(O.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(y.jsxs)("div",{className:A.a.wrap,children:[Object(y.jsx)("p",{className:A.a.title,children:"Find contacts by name"}),Object(y.jsx)("input",{className:A.a.input,type:"text",name:"filter",value:e,onChange:n})]})}));var D,z,B,Z=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("section",{className:"mainSection",children:[Object(y.jsxs)("h1",{className:"mainTitle",children:[Object(y.jsx)("span",{className:"logo",children:"P"}),"honebook"]}),Object(y.jsx)(L,{}),Object(y.jsx)("h2",{className:"mainTitle",children:"Contacts"}),Object(y.jsx)(T,{}),Object(y.jsx)(E,{})]}),Object(y.jsx)(u.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},I=n(20),J=n(6),M=n(3),K=Object(j.d)([],(D={},Object(J.a)(D,x.fulfilled,(function(t,e){return e.payload})),Object(J.a)(D,O.addContactSuccess,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name||t.number===n.number}))?t:[].concat(Object(I.a)(t),[n])})),Object(J.a)(D,O.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),G=Object(j.d)("",Object(J.a)({},O.changeFilter,(function(t,e){return e.payload}))),H=Object(j.d)(!1,(z={},Object(J.a)(z,x.pending,(function(){return!0})),Object(J.a)(z,x.fulfilled,(function(){return!1})),Object(J.a)(z,x.rejected,(function(){return!1})),z)),U=Object(j.d)(null,(B={},Object(J.a)(B,x.rejected,(function(t,e){return e.payload})),Object(J.a)(B,x.pending,(function(){return null})),B)),V=Object(M.b)({filter:G,entities:K,isLoading:H,error:U}),Y=n(9),$=n(35),Q=n.n($),W={store:Object(j.a)({reducer:{contacts:V},middleware:function(t){return[].concat(Object(I.a)(t({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),[Q.a])},devTools:!1})};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(s.a,{store:W.store,children:Object(y.jsx)(Z,{})})}),document.getElementById("root")),P()},8:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[76,1,2]]]);
//# sourceMappingURL=main.7ef753e1.chunk.js.map