(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(25),i=n.n(r),c=(n(31),n(19)),o=n(5),l=n(6),u=n(3),h=n(8),d=n(7),m=(n(32),n(2)),b=n.n(m),j=n(10),p=n(13),O=n(9),f=n(11),x=n(4),v=n.n(x),g=n(0),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:"",usernameStatus:"",emailStatus:"",password1Status:"",password2Status:"",profile_picture:"",equipment:"",about_me:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({username:this.state.username,email:this.state.email,password1:this.state.password1,password2:this.state.password2})},e.next=4,fetch("/rest-auth/registration/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(s=e.sent,console.log(s),201===a.status){e.next=13;break}console.log("Not logged in!"),e.next=16;break;case 13:return v.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/create-profile"),e.abrupt("return",Object(g.jsx)(O.a,{to:"/create-profile"}));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:"login-register",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsx)("h2",{children:"Register"}),""!==this.state.usernameStatus?Object(g.jsx)("div",{children:this.state.usernameStatus}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.username,className:"form-control",type:"text",name:"username"}),""!==this.state.emailStatus?Object(g.jsx)("div",{children:this.state.emailStatus}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.email,className:"form-control",type:"email",name:"email"}),Object(g.jsxs)("div",{className:"row g-3",children:[Object(g.jsxs)("div",{className:"col",children:[""!==this.password1Status?Object(g.jsx)("div",{children:this.state.password1Status}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"password1",children:"Password"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.password1,className:"form-control",type:"password",name:"password1"})]}),Object(g.jsxs)("div",{className:"col",children:[""!==this.password2Status?Object(g.jsx)("div",{children:this.state.password2Status}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"password2",children:"Confirm Password"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.password2,className:"form-control mb-3",type:"password",name:"password2"})]})]}),Object(g.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}),Object(g.jsxs)("p",{children:["Already have an account? Why don't you ",Object(g.jsx)(f.b,{to:"/login",children:"Login"}),"? "]})]})})}}]),n}(a.Component),N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",statusMessage:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({username:this.state.username,password:this.state.password})},e.next=4,fetch("/rest-auth/login/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(!(s=e.sent).key){e.next=17;break}if(v.a.set("Authorization","Token ".concat(s.key)),console.log(this.props.isLoggedIn),!v.a.get("Authorization")){e.next=15;break}return this.props.handleIsLoggedIn(),this.props.history.push("/celestial-list"),e.abrupt("return",Object(g.jsx)(O.a,{to:"/celestial-list"}));case 15:e.next=18;break;case 17:200!==a.status&&console.log("Login unsuccessful.");case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:"text-center login-register",onSubmit:this.handleSubmit,children:[Object(g.jsx)("h2",{children:"Login"}),""!==this.state.statusMessage?Object(g.jsx)("div",{children:this.state.statusMessage}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{onChange:this.handleInput,className:"form-control",type:"text",name:"username"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{onChange:this.handleInput,className:"form-control mb-3",type:"password",name:"password"}),Object(g.jsx)("button",{className:"btn btn-success",children:"Login"}),Object(g.jsxs)("p",{children:["Don't have an account yet? Why not ",Object(g.jsx)(f.b,{to:"/register",children:"Register"})," First?"]})]})})}}]),n}(a.Component),S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleLogout=a.handleLogout.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/logout/",{method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":v.a.get("csrftoken"),Authorization:v.a.get("Authorization")}});case 2:return v.a.remove("Authorization"),v.a.remove("csrftoken"),this.props.handleIsLoggedIn(),this.props.history.push("/login"),e.abrupt("return",Object(g.jsx)(O.a,{to:"/login"}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-header",children:[Object(g.jsx)("h1",{children:"Username"}),Object(g.jsx)("img",{src:"#",alt:"user"}),Object(g.jsx)("p",{children:"About me"})]}),Object(g.jsxs)("div",{className:"card-footer",children:[Object(g.jsx)("p",{children:"My equipment"}),Object(g.jsxs)("p",{children:["If you haven't yet you can ",Object(g.jsx)(f.b,{to:"/create-profile",className:"btn-link",children:"Create Profile"})," "]}),Object(g.jsx)("button",{onClick:this.handleLogout,className:"btn btn-danger",children:"Logout"})]})]})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"",rise_time:"",set_time:"",magnitude:0,image:"",description:"",preview:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleImage=a.handleImage.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",this.state.image),n.append("name",this.state.name),n.append("rise_time",this.state.rise_time),n.append("set_time",this.state.set_time),n.append("magnitude",this.state.magnitude),n.append("description",this.state.description),a={method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken")},body:n},e.next=11,fetch("/api/v1/ephem/",a);case 11:return s=e.sent,e.next=14,s.json();case 14:r=e.sent,console.log(r);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t,e.state)},children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.name,name:"name"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"rise_time",children:"Rise Time"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.rise_time,name:"rise_time"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"set_time",children:"Set Time"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.set_time,name:"set_time"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"magnitude",children:"Magnitude"}),Object(g.jsx)("input",{className:"form-control",type:"number",onChange:this.handleInput,value:this.state.magnitude,name:"magnitude"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"image",children:"Image"}),Object(g.jsx)("input",{className:"form-control",type:"file",onChange:this.handleImage,name:"image"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{className:"form-control",onChange:this.handleInput,value:this.state.description,name:"description",cols:"30",rows:"10"}),Object(g.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})]})}}]),n}(a.Component),I=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={ephem:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({ephem:n}),console.log(this.state);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.ephem.map((function(e){return Object(g.jsxs)("section",{children:[Object(g.jsx)("img",{src:e.image,alt:"The sun."}),Object(g.jsx)("h1",{children:e.name}),Object(g.jsx)("p",{children:"Rise time: "}),Object(g.jsx)("h2",{children:e.rise_time}),Object(g.jsx)("p",{children:"Set time: "}),Object(g.jsx)("h2",{children:e.set_time})]})}));return Object(g.jsx)(g.Fragment,{children:e[0]})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={ephems:[],isEditMode:!1,isAdmin:!1},a.handleEditMode=a.handleEditMode.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({ephems:n}),console.log(this.state.ephems);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleEditMode",value:function(){this.setState({isEditMode:!0})}},{key:"handleSubmit",value:function(){this.setState({isEditMode:!1})}},{key:"render",value:function(){var e=this,t=this.state.ephems.map((function(t){return Object(g.jsx)("section",{className:"container",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-header",children:[Object(g.jsx)("img",{src:t.image,alt:"A planet, star or satellite."}),Object(g.jsx)("h2",{children:t.name})]}),Object(g.jsxs)("p",{children:["rise time: ",t.rise_time]}),Object(g.jsxs)("p",{children:["set time: ",t.set_time]}),e.state.isAdmin?Object(g.jsxs)("div",{className:"card-footer",children:[Object(g.jsx)("button",{onClick:e.handleEditMode,className:"btn btn-primary",children:"Edit"}),Object(g.jsx)("button",{className:"btn btn-danger",children:"Delete"})]}):null]})},t.id)}));return Object(g.jsx)(g.Fragment,{children:this.state.isEditMode?this.showForm():t})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"",time:"",target:"",description:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({name:this.state.name,time:this.state.time,ephemeris:this.state.target,description:this.state.description})},e.next=4,fetch("/api/v1/events/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,console.log(s),this.props.history.push("/events"),e.abrupt("return",Object(g.jsx)(O.a,{to:"/events"}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"name",children:"Event Name"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.value,name:"name"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"target",children:"Target"}),Object(g.jsx)("input",{type:"text",className:"form-control",onChange:this.handleInput,value:this.state.value,name:"target"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"time",children:"Time"}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleInput,value:this.state.value,name:"time",type:"text"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{className:"form-control",onChange:this.handleInput,name:"description",value:this.state.value}),Object(g.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create Event"})]})}}]),n}(a.Component),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={id:0,data:[],isEditMode:!1,isAdmin:!1,name:"",ephemeris:"",time:""},a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a.handleEditMode=a.handleEditMode.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"PUT",headers:{"Content-Type":"Application/Json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({name:this.state.name,ephemeris:this.state.ephemeris,time:this.state.time,description:this.state.description})},e.next=4,fetch("/api/v1/events/".concat(this.state.id,"/"),n);case 4:return window.location.reload(),e.abrupt("return",Object(g.jsx)(O.a,{to:"/events"}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(e){var t={method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}};fetch("/api/v1/events/".concat(e,"/"),t),window.location.reload()}},{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/events/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({data:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showForm",value:function(){return Object(g.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"name",value:this.state.name||""}),Object(g.jsx)("label",{className:"form-label",htmlFor:"ephemeris",children:"Target"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"ephemeris",value:this.state.ephemeris||""}),Object(g.jsx)("label",{className:"form-label",htmlFor:"time",children:"Time"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"time",value:this.state.time||""}),Object(g.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{className:"form-control",name:"description",onChange:this.handleInput,value:this.state.description,cols:"30",rows:"10"}),Object(g.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Edit"})]})}},{key:"handleEditMode",value:function(e){this.setState((function(e){return{isEditMode:!e.isEditMode}})),this.setState({name:e.name,ephemeris:e.ephemeris,time:e.time,id:e.id,description:e.description})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.state.data)||void 0===e?void 0:e.map((function(e){return Object(g.jsx)("section",{children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-header",children:[Object(g.jsx)("h2",{children:e.name}),Object(g.jsx)("p",{children:e.ephemeris})]}),Object(g.jsx)("p",{children:e.time}),Object(g.jsx)("p",{children:e.description}),Object(g.jsxs)("div",{className:"button-group card-footer",children:[Object(g.jsx)("button",{onClick:function(){return t.handleEditMode(e)},className:"btn btn-primary",children:"Edit"}),Object(g.jsx)("button",{onClick:function(){return t.handleDelete(e.id)},className:"btn btn-danger",children:"Delete"})]})]})},e.id)}));return Object(g.jsx)(g.Fragment,{children:this.state.isEditMode?this.showForm():n})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isAdmin:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("nav",{className:"navbar container-fluid navbar-dark",children:[this.props.isLoggedIn?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.c,{to:"/profile",children:"Profile"}),Object(g.jsx)(f.c,{to:"/event/form",children:"Add Event"}),Object(g.jsx)(f.c,{to:"/celestial-list",children:"Planets"}),Object(g.jsx)(f.c,{to:"/events",children:"Upcoming Events"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.c,{to:"/register",children:"Register"}),Object(g.jsx)(f.c,{to:"/login",children:"Login"})]}),this.state.isAdmin?Object(g.jsx)(f.c,{to:"/ephem/form",children:"Add Planet"}):null]})}}]),n}(a.Component),L=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={profile_picture:"",about_me:"",equipment:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":v.a.get("csrftoken"),Authorization:v.a.get("Authorization")},body:JSON.stringify({about_me:this.state.about_me,equipment:this.state.equipment})},e.next=4,fetch("/api/v1/profiles/create/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,console.log(s);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{className:"login-register",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsx)("h2",{children:"Create Your Profile"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"profile_picture",children:"Profile Picture"}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleInput,type:"file",name:"profile_picture"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"equipment",children:"My Equipment"}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleInput,value:this.state.equipment,type:"text",name:"equipment",placeholder:"Whatever you view the night sky with."}),Object(g.jsx)("label",{className:"form-label",htmlFor:"about_me",children:"About Me"}),Object(g.jsx)("textarea",{className:"form-control",onChange:this.handleInput,value:this.state.about_me,name:"about_me",cols:"30",rows:"10"}),Object(g.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create Profile"})]})}}]),n}(a.Component),A=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!v.a.get("Authorization"),isAdmin:!1},a.handleIsLoggedIn=a.handleIsLoggedIn.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleIsLoggedIn",value:function(){this.setState((function(e){return{isLoggedIn:!e.isLoggedIn}}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(T,{isLoggedIn:this.state.isLoggedIn}),Object(g.jsxs)(O.d,{children:[Object(g.jsx)(O.b,{path:"/register",component:y}),Object(g.jsx)(O.b,{path:"/login",render:function(t){return Object(g.jsx)(N,Object(c.a)(Object(c.a)({},t),{},{isLoggedIn:e.state.isLoggedIn,handleIsLoggedIn:e.handleIsLoggedIn}))}}),Object(g.jsx)(O.b,{path:"/profile",render:function(t){return Object(g.jsx)(S,Object(c.a)(Object(c.a)({},t),{},{handleIsLoggedIn:e.handleIsLoggedIn}))}}),Object(g.jsx)(O.b,{path:"/create-profile",component:L}),Object(g.jsx)(O.b,{path:"/ephem/form",component:k}),Object(g.jsx)(O.b,{path:"/event/form",component:C}),Object(g.jsx)(O.b,{path:"/display",component:I}),Object(g.jsx)(O.b,{path:"/celestial-list",component:w}),Object(g.jsx)(O.b,{path:"/events",component:F})]})]})}}]),n}(a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(f.a,{children:Object(g.jsx)(A,{})})}),document.getElementById("root")),E()}},[[40,1,2]]]);
//# sourceMappingURL=main.44b9b753.chunk.js.map