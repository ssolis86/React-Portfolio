(this["webpackJsonpReact-Portfolio"]=this["webpackJsonpReact-Portfolio"]||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(10),o=c.n(i),r=(c(88),c(17)),s=c(51),l=c(139),d=c(142),j=c(144),b=c(145),h=c(146),p=c(147),m=c(50),u=c.n(m),x=c(31),g=(c.p,c(3)),O=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Nunito"},appbar:{background:"none"},appbarWrapper:{width:"80%",margin:"0 auto"},appbarTitle:{flexGrow:"1"},icon:{color:"#fff",fontSize:"2rem"},colorText:{color:"#5AFF3D"},container:{textAlign:"center"},title:{color:"#fff",fontSize:"4.5rem"},goDown:{color:"#5AFF3D",fontSize:"4rem"}}}));function f(){var e=O(),t=Object(a.useState)(!1),c=Object(s.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){i(!0)}),[]),Object(g.jsxs)("div",{className:e.root,id:"header",children:[Object(g.jsx)(d.a,{className:e.appbar,elevation:0,children:Object(g.jsxs)(j.a,{className:e.appbarWrapper,children:[Object(g.jsxs)("h1",{className:e.appbarTitle,children:["Stephen",Object(g.jsx)("span",{className:e.colorText,children:"Solis."})]}),Object(g.jsx)(x.Link,{to:"project-to-visit",smooth:!0,children:Object(g.jsx)(b.a,{color:"inherit",className:e.colorText,children:"Projects"})}),Object(g.jsx)(x.Link,{to:"contact-form",smooth:!0,children:Object(g.jsx)(b.a,{color:"inherit",className:e.colorText,children:"Contact"})})]})}),Object(g.jsx)(h.a,Object(r.a)(Object(r.a)({in:n},n?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(g.jsxs)("div",{className:e.container,children:[Object(g.jsxs)("h1",{className:e.title,children:["Welcome to ",Object(g.jsx)("br",{}),"My",Object(g.jsx)("span",{className:e.colorText,children:"Portfolio."})]}),Object(g.jsx)(x.Link,{to:"project-to-visit",smooth:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsx)(u.a,{className:e.goDown})})})]})}))]})}var v=c(46),k=c(148),w=c(150),y=c(149),N=c(151),S=Object(l.a)({root:{maxWidth:645,background:"rgba(0,0,0,0.5)",margin:"20px",textAlign:"center"},media:{height:140},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2rem",color:"#fff"},desc:{fontFamily:"Nunito",fontSize:"1.1rem",color:"#ddd",padding:3},btn:{background:"linear-gradient(45deg, #5AFF3D 30%, #3EB22A 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",fontFamily:"Nunito",fontWeight:"bold",fontSize:"1rem",color:"rgba(0,0,0,0.5)",height:48,padding:"1 30px",textAlign:"center"}});function F(e){var t=e.place,c=e.checked,a=S();return Object(g.jsx)(h.a,Object(r.a)(Object(r.a)({in:c},c?{timeout:1e3}:{}),{},{children:Object(g.jsxs)(k.a,{className:a.root,children:[Object(g.jsx)(y.a,{className:a.media,image:t.imageUrl}),Object(g.jsxs)(w.a,{children:[Object(g.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h1",className:a.title,children:t.title}),Object(g.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",className:a.desc,children:Object(g.jsx)(b.a,{href:t.deployed,className:a.btn,children:"Deployed Link"})}),Object(g.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",className:a.desc,children:Object(g.jsx)(b.a,{href:t.ghub,className:a.btn,children:"GitHub Repository"})})]})]})}))}var E=[{title:"Fitness Tracker",deployed:"https://still-fjord-86390.herokuapp.com/",ghub:"https://github.com/ssolis86/Fitness-Tracker",imageUrl:c.p+"static/media/fitness_tracker.36790c89.png",time:1500},{title:"e-Commerce Back End",deployed:"https://github.com/ssolis86/ORM-Ecommerce-Back-End",ghub:"https://github.com/ssolis86/ORM-Ecommerce-Back-End",imageUrl:c.p+"static/media/ecommerce.c4570727.png",time:1500},{title:"Weather Dashboard",deployed:"https://ssolis86.github.io/weather-dashboard/",ghub:"https://github.com/ssolis86/weather-dashboard",imageUrl:c.p+"static/media/weather.d6345d5e.png",time:1500},{title:"Workday Scheduler",deployed:"https://ssolis86.github.io/workdayscheduler/",ghub:"https://github.com/ssolis86/workdayscheduler",imageUrl:c.p+"static/media/workday.dfa4e294.png",time:1500},{title:"Digital Vaccine Tracker",deployed:"https://ancient-hollows-23369.herokuapp.com/",ghub:"https://github.com/wrp90/Vaccination_Tracker",imageUrl:c.p+"static/media/vaccine.06f54266.png",time:1500},{title:"Road Trippers",deployed:"https://enigmatic-taiga-76938.herokuapp.com/",ghub:"https://github.com/KannaVairavan/Travel-App",imageUrl:c.p+"static/media/roadtrippers.ad4eed30.png",time:1500}];var T=Object(l.a)((function(e){return{root:Object(v.a)({minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("md"),{flexDirection:"column"})}}));function R(){var e=T(),t=function(e){var t=Object(a.useState)(!1),c=Object(s.a)(t,2),n=c[0],i=c[1];return Object(a.useLayoutEffect)((function(){function t(){var t=window.document.getElementById(e).offsetHeight;window.pageYOffset>.7*t&&i(!0)}return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[e]),n}("header");return Object(g.jsxs)("div",{className:e.root,id:"project-to-visit",children:[Object(g.jsx)(F,{place:E[0],checked:t}),Object(g.jsx)(F,{place:E[1],checked:t}),Object(g.jsx)(F,{place:E[2],checked:t}),Object(g.jsx)(F,{place:E[3],checked:t}),Object(g.jsx)(F,{place:E[4],checked:t}),Object(g.jsx)(F,{place:E[5],checked:t}),Object(g.jsx)(h.a,Object(r.a)(Object(r.a)({in:t},t?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(g.jsx)("div",{className:e.container,children:Object(g.jsx)(x.Link,{to:"contact-form",smooth:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsx)(u.a,{className:e.goDown})})})})}))]})}var W=c(153),D=Object(l.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(2,3),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",width:"50ch",textAlign:"center",borderRadius:3}}}));function A(){var e=D();return Object(g.jsx)("div",{width:"25%",className:e.root,children:Object(g.jsxs)("form",{children:[Object(g.jsx)(W.a,{variant:"outlined",label:"Full Name",fullWidth:!0,autocomplete:"none"}),Object(g.jsx)(W.a,{variant:"outlined",label:"Email",fullWidth:!0,autocomplete:"none"}),Object(g.jsx)(W.a,{variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:5,autocomplete:"none"}),Object(g.jsx)(b.a,{variant:"contained",type:"submit",children:"Submit"})]})})}var B=Object(l.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3),display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Nunito"},paper:{maxWidth:400,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)}}}));function C(){var e=B();return Object(g.jsx)("div",{className:e.root,id:"contact-form",children:Object(g.jsx)(A,{})})}var L=c(71),z=c.n(L),H=c(72),U=c.n(H),I=c(73),M=c.n(I),P=c(74),G=c.n(P),_=c.p+"static/media/Revised_Resume.4d46a33d.pdf",V=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(d.a,{position:"static",elevation:0,component:"footer",color:"default",children:Object(g.jsxs)(j.a,{style:{justifyContent:"center"},children:[Object(g.jsx)(N.a,{variant:"caption",children:"\xa92020"}),Object(g.jsx)(p.a,{onClick:function(){return window.open("https://github.com/ssolis86?tab=repositories")},children:Object(g.jsx)(z.a,{})}),Object(g.jsx)(p.a,{onClick:function(){return window.open("https://www.linkedin.com/in/stephen-solis")},children:Object(g.jsx)(U.a,{})}),Object(g.jsx)(p.a,{onClick:function(){return window.open("mailto:stephensolis@sbcglobal.net")},children:Object(g.jsx)(M.a,{})}),Object(g.jsx)(p.a,{children:Object(g.jsx)("a",{href:_,target:"_blank",rel:"noreferrer noopener",download:"Stephen-Solis-Resume",children:Object(g.jsx)(G.a,{})})})]})})})},J=c(152),K=c(75),Y=c.n(K),q=c.p+"static/media/purrple.e7363d29.jpg",Q=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},bg:{backgroundImage:"url(".concat(q,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh",backgroundPosition:"center"}}}));var X=function(){var e=Q();return Object(g.jsxs)("div",{className:Y()(e.root,e.bg),children:[Object(g.jsx)(J.a,{}),Object(g.jsx)(f,{}),Object(g.jsx)(R,{}),Object(g.jsx)(C,{}),Object(g.jsx)(V,{})]})};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(X,{})}),document.getElementById("root"))},88:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.2fa9083a.chunk.js.map