(this["webpackJsonpdummy-api-project"]=this["webpackJsonpdummy-api-project"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(13),s=n.n(r),i=(n(20),n(4)),j=n.n(i),p=n(14),o=n(15),l=(n(22),n(23),n(0));var u=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://dummy.restapiexample.com/api/v1/employees");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){r()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Employee's Details"}),Object(l.jsx)("div",{className:"flex",children:n.length&&n.map((function(e){return Object(l.jsxs)("div",{className:"Enter",children:[Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:e.employee_name})}),Object(l.jsxs)("p",{children:[" Salary: ",e.employee_salary]}),Object(l.jsx)("p",{children:e.employee_age}),Object(l.jsx)("img",{src:e.avatar},e.avatar)]},e.id)}))})]})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3aa9df60.chunk.js.map