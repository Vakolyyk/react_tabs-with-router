(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a(14),s=a.n(n),i=(a(21),a(2)),b=a(1),r=function(){return Object(b.jsx)("h1",{children:"Home page"})},l=a(0),j=a.n(l),o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var e=Object(i.f)().tabId,t=o.find((function(t){return t.id===e}));return Object(b.jsxs)("div",{className:"tabs",children:[o.map((function(e){return Object(b.jsx)(j.a.Fragment,{children:Object(b.jsx)(c.b,{to:"/tabs/".concat(e.id),className:"tabs__link",activeClassName:"tabs__link--active",children:e.title})},e.id)})),t?Object(b.jsx)("p",{className:"tabs__content",children:t.content}):Object(b.jsx)("p",{className:"tabs__content",children:"Please select a tab"})]})},h=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(c.b,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active",children:"Home"}),Object(b.jsx)(c.b,{to:"/tabs",className:"nav__link",activeClassName:"nav__link--active",children:"Tabs"})]})}),Object(b.jsx)("main",{className:"content",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/tabs/:tabId?",component:d}),Object(b.jsx)(i.a,{path:"/",exact:!0,component:r})]})}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{children:"Created by @Vakolyyk"})})]})};s.a.render(Object(b.jsx)(c.a,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.282619de.chunk.js.map