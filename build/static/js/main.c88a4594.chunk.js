(this["webpackJsonpclient-react"]=this["webpackJsonpclient-react"]||[]).push([[3],{13:function(e,t,n){"use strict";var a=n(4),r=n.n(a),c=n(12),s=n(11),o=n.n(s),i=n(10),l=n.n(i),u={login:function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/login",t);case 3:n=e.sent,localStorage.setItem("token",n.data.token),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return localStorage.getItem("token")},isLoggedIn:function(){try{return!!localStorage.getItem("token")}catch(e){return console.log(e)}},logout:function(){try{localStorage.removeItem("token")}catch(e){console.log(e)}},register:function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/register",t);case 3:n=e.sent,localStorage.setItem("token",n.data.token),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),profile:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/api/profile");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),edit:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/edit",t);case 3:l()("Updated","Your profile has been updataed.","success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),forgot:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/forgot-password",t);case 3:l()("Reset Link Sent","A password reset link has been sent to your email address. Open email and reset your password within 15 minutes.","success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),reset:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/reset-password",t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),google:function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/google",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),l()("Oops!",e.t0.response.data,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};t.a=u},46:function(e,t,n){},47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),s=n.n(c),o=(n(46),n(47),n(9)),i=n(2),l=n(24),u=n(13),p=n(0);function b(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(i.g)();return Object(a.useEffect)((function(){r(u.a.isLoggedIn())}),[n]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"/",children:"Resume Builder"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/home",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/profile",children:"Profile"})}),n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/template",children:"My Resume"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/resume",children:"Edit Resume"})})]})]}),Object(p.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0",children:[!n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/login",children:"Login"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/register",children:"Register"})})]}),n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/edit",children:"Edit Profile"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/logout",onClick:function(e){e.preventDefault(),u.a.logout(),c.push("/login"),r(u.a.isLoggedIn())},children:"Logout"})})]})]})]})]})})})}var j=n(11),d=n.n(j),m=n(16),h=n(41),O=["component"];function x(e){var t=e.component,n=Object(h.a)(e,O);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(i.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return u.a.isLoggedIn()?Object(p.jsx)(t,Object(m.a)({},e)):Object(p.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})}var f=Object(a.lazy)((function(){return n.e(18).then(n.bind(null,249))})),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,250))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11),n.e(7)]).then(n.bind(null,251))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,252))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,253))})),N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,254))})),w=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,255))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,261))})),z=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,256))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,257))})),I=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(14)]).then(n.bind(null,258))})),L=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(15)]).then(n.bind(null,259))}));d.a.interceptors.request.use((function(e){return e.headers.common.Authorization="Bearer ".concat(u.a.getToken()),e}));var F=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(b,{}),Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(p.jsx)("div",{className:"spinner-border",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{exact:!0,path:"/",component:f}),Object(p.jsx)(i.b,{exact:!0,path:"/home",component:f}),Object(p.jsx)(i.b,{exact:!0,path:"/login",component:g}),Object(p.jsx)(i.b,{exact:!0,path:"/register",component:k}),Object(p.jsx)(i.b,{exact:!0,path:"/forgot-password",component:y}),Object(p.jsx)(i.b,{exact:!0,path:"/reset-password/:id/:token",component:N}),Object(p.jsx)(x,{exact:!0,path:"/profile",component:w}),Object(p.jsx)(x,{exact:!0,path:"/edit",component:P}),Object(p.jsx)(x,{exact:!0,path:"/resume",component:z}),Object(p.jsx)(x,{exact:!0,path:"/template",component:S}),Object(p.jsx)(x,{exact:!0,path:"/template-one",component:I}),Object(p.jsx)(x,{exact:!0,path:"/template-two",component:L}),Object(p.jsx)(i.b,{path:"*",component:v})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(19).then(n.bind(null,260)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),C()}},[[72,4,5]]]);
//# sourceMappingURL=main.c88a4594.chunk.js.map