(this["webpackJsonpbudget-planner"]=this["webpackJsonpbudget-planner"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(9),i=n.n(a),r=(n(15),n(10)),j=n(2),l=n(0),d=function(e){var t=e.saveItem,n=Object(c.useState)(""),s=Object(j.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)(""),d=Object(j.a)(r,2),u=d[0],b=d[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"25rem"},children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"e.g. rent",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"e.g 100",value:u,onChange:function(e){return b(e.target.value)}})]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"button",value:"Save",onClick:function(e){return console.log("Add:",a,u),void(a||u?(t(a,u),i(""),b("")):alert("Please enter your values"))}})]})},u=function(e){var t=e.budget,n=e.editBudget,s=Object(c.useState)(t),a=Object(j.a)(s,2),i=a[0],r=a[1],d=Object(c.useState)(!1),u=Object(j.a)(d,2),b=u[0],o=u[1];return Object(l.jsxs)("div",{className:"p-2 d-flex justify-content-between",children:[b?Object(l.jsx)("input",{type:"text",value:i,onChange:function(e){!function(e){r(e.target.value)}(e)}}):Object(l.jsxs)("span",{children:[" Total Budget: $",i]}),b?Object(l.jsx)("input",{className:"edit",type:"button",value:"Save",onClick:function(){o(!1),n(i)}}):Object(l.jsx)("input",{className:"edit",type:"button",value:"Edit",onClick:function(){o(!0)}})]})};var b=function(e){var t=e.expense,n=e.deleteExpense;return console.log("ExpenseItem",t),Object(l.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(l.jsx)("span",{children:t.name}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"badge bg-primary",children:["$",t.amount]}),Object(l.jsx)("button",{className:"btn",children:Object(l.jsx)("i",{className:"bi bi-trash",onClick:function(){return e=t.id,void n(e);var e}})})]})]})},o=function(e){var t=e.expense,n=e.deleteExpense;return Object(l.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(l.jsx)(b,{expense:e,deleteExpense:n},e.id)}))})},x=function(e){var t=e.budget,n=e.expense.reduce((function(e,t){return e+parseInt(t.amount)}),0);return Object(l.jsx)("div",{className:"p-2",children:Object(l.jsxs)("span",{children:["Remaining: $",t-n]})})},O=function(e){var t=e.expense.reduce((function(e,t){return e+parseInt(t.amount)}),0);return Object(l.jsx)("div",{className:"p-2",children:Object(l.jsxs)("span",{children:["Spent So far: $",t]})})},h=n(4),m=[{id:Object(h.v4)(),name:"Rent",amount:"1600"},{id:Object(h.v4)(),name:"Car Payment",amount:"300"},{id:Object(h.v4)(),name:"Electric Bill",amount:"100"}],p=function(){var e=Object(c.useState)("5000"),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(m),i=Object(j.a)(a,2),b=i[0],p=i[1];return Object(l.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(l.jsx)("h1",{children:"My Budget Planner (Hooks)"}),Object(l.jsxs)("div",{className:"card",style:{width:"60rem"},children:[Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsx)("div",{className:"border bg-info text-white ",style:{width:"18rem",height:"3rem"},children:Object(l.jsx)(u,{budget:n,editBudget:function(e){s(e)}})}),Object(l.jsx)("div",{className:"border bg-secondary text-white",style:{width:"18rem"},children:Object(l.jsx)(x,{budget:n,expense:b})}),Object(l.jsx)("div",{className:"border bg-success text-white",style:{width:"18rem"},children:Object(l.jsx)(O,{expense:b})})]}),Object(l.jsx)("h3",{children:"Expenses"}),Object(l.jsx)("div",{children:Object(l.jsx)(o,{expense:b,deleteExpense:function(e){var t=b.filter((function(t){return t.id!==e}));p(t)}})}),Object(l.jsx)("h3",{children:"Add Expenses"}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{saveItem:function(e,t){var n={id:Object(h.v4)(),name:e,amount:t},c=[].concat(Object(r.a)(b),[n]);p(c)}})})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.17d1c637.chunk.js.map