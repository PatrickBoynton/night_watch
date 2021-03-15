(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(33),c=n.n(r),i=(n(39),n(4)),o=n(5),l=n(7),u=n(6),m=(n(40),n(11)),h=n.n(m),b=n(14),j=n(18),p=n(15),d=n(16),O=(n(42),n(13)),f=n.n(O),x=n(0),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(o.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify({username:this.state.username,email:this.state.email,password1:this.state.password1,password2:this.state.password2})},e.next=4,fetch("/rest-auth/registration/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,console.log(s);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{className:"login-register",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.username,className:"form-control",type:"text",name:"username"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.email,className:"form-control",type:"email",name:"email"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"password1",children:"Password"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.password1,className:"form-control",type:"password",name:"password1"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"password2",children:"Confirm Password"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.password2,className:"form-control mb-3",type:"password",name:"password2"}),Object(x.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}),Object(x.jsxs)("p",{children:["Already have an account? Why don't you ",Object(x.jsx)(d.b,{to:"/login",children:"Login"}),"? "]})]})})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(o.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify({username:this.state.username,password:this.state.password})},e.next=4,fetch("/rest-auth/login/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:(s=e.sent).key?f.a.set("Authorization","Token ".concat(s.key)):console.log("Did not log in.");case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{className:"text-center login-register",onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{onChange:this.handleInput,className:"form-control",type:"text",name:"username"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{onChange:this.handleInput,className:"form-control mb-3",type:"password",name:"password"}),Object(x.jsx)("button",{className:"btn btn-success",children:"Login"}),Object(x.jsxs)("p",{children:["Don't have an account yet? Why not ",Object(x.jsx)(d.b,{to:"/register",children:"Register"})," First?"]})]})})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"handleLogout",value:function(){f.a.remove("Authorization")}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Username"}),Object(x.jsx)("img",{src:"#",alt:"user"}),Object(x.jsx)("p",{children:"About me"}),Object(x.jsx)("p",{children:"My equipment"}),Object(x.jsx)("button",{onClick:this.handleLogout,className:"btn btn-danger",children:"Logout"})]})}}]),n}(a.Component),w=n(2),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={name:"",rise_time:"",set_time:"",magnitude:0,image:null,description:"",preview:""},a}return Object(o.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.file[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,s,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",this.state.image),a={method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken")},body:n},e.next=6,fetch("/api/v1/ephem/",a);case 6:return s=e.sent,e.next=9,s.json();case 9:r=e.sent,console.log(r),console.log(this.state);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t,e.state)},children:[Object(x.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{className:"form-control",type:"text",name:"name"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"rise_time",children:"Rise Time"}),Object(x.jsx)("input",{className:"form-control",type:"text",name:"rise_time"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"set_time",children:"Set Time"}),Object(x.jsx)("input",{className:"form-control",type:"text",name:"set_time"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"magnitude",children:"Magnitude"}),Object(x.jsx)("input",{className:"form-control",type:"number",name:"magnitude"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"image",children:"Image"}),Object(x.jsx)("input",{className:"form-control",type:"file",name:"image"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{className:"form-control",name:"description",cols:"30",rows:"10"}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})]})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={ephem:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({ephem:n}),console.log(this.state);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.ephem.map((function(e){return Object(x.jsxs)("section",{children:[Object(x.jsx)("img",{src:e.image,alt:"The sun."}),Object(x.jsx)("h1",{children:e.name}),Object(x.jsx)("p",{children:"Rise time: "}),Object(x.jsx)("h2",{children:e.rise_time}),Object(x.jsx)("p",{children:"Set time: "}),Object(x.jsx)("h2",{children:e.set_time})]})}));return Object(x.jsx)(x.Fragment,{children:e})}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:"EphemList"})}}]),n}(a.Component),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1},a}return Object(o.a)(n,[{key:"handleIsLoggedIn",value:function(){this.setState((function(e){return{isLoggedIn:!e.isLoggedIn}}))}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(w.c,{children:[Object(x.jsx)(w.a,{path:"/register",component:g}),Object(x.jsx)(w.a,{path:"/login",component:v}),Object(x.jsx)(w.a,{path:"/profile",component:y}),Object(x.jsx)(w.a,{path:"/ephem/form",component:N}),Object(x.jsx)(w.a,{path:"/display",component:k}),Object(x.jsx)(w.a,{path:"/list",component:S})]})})}}]),n}(a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)(F,{})})}),document.getElementById("root")),C()}},[[67,1,2]]]);
//# sourceMappingURL=main.32c9106e.chunk.js.map