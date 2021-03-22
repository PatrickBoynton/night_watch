(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(25),i=n.n(r),c=(n(31),n(17)),o=n(4),l=n(5),h=n(3),u=n(7),m=n(6),d=(n(32),n(2)),b=n.n(d),j=n(10),p=n(13),f=n(11),O=n(8),v=n(9),x=n.n(v),g=n(0),y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:"",formErrors:{email:"",username:"",other:""}},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify({username:this.state.username,email:this.state.email,password1:this.state.password1,password2:this.state.password2})},e.next=4,fetch("/rest-auth/registration/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(s=e.sent,console.log(s),201!==a.status){e.next=15;break}return x.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/create-profile"),e.abrupt("return",Object(g.jsx)(f.a,{to:"/create-profile"}));case 15:console.log(s),this.setState({formErrors:{username:s.username,email:s.email}});case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:"login-register needs-validation",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsx)("h2",{children:"Register"}),""!==this.state.formErrors.username?Object(g.jsx)("div",{className:"alert-danger",children:this.state.formErrors.username}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.username,className:"form-control needs-validation",type:"text",name:"username",required:!0}),""!==this.state.formErrors.email?Object(g.jsx)("div",{className:"alert-danger",children:this.state.formErrors.email}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.email,className:"form-control needs-validation",type:"email",name:"email",required:!0}),Object(g.jsxs)("div",{className:"row g-3",children:[Object(g.jsxs)("div",{className:"col",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"password1",children:"Password"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.password1,className:"form-control needs-validation",type:"password",name:"password1",required:!0})]}),Object(g.jsxs)("div",{className:"col",children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"password2",children:"Confirm Password"}),Object(g.jsx)("input",{onChange:this.handleInput,value:this.state.password2,className:"form-control mb-3 needs-validation",type:"password",name:"password2",required:!0})]})]}),Object(g.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}),Object(g.jsxs)("p",{children:["Already have an account? Why don't you ",Object(g.jsx)(O.b,{to:"/login",children:"Login"}),"? "]})]})})}}]),n}(a.Component),N=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",statusMessage:""},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s,r=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":x.a.get("csrftoken"),Authorization:x.a.get("Authorization")},body:JSON.stringify({username:this.state.username,password:this.state.password})},e.next=4,fetch("/rest-auth/login/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(!(s=e.sent).key){e.next=16;break}if(x.a.set("Authorization","Token ".concat(s.key)),!x.a.get("Authorization")){e.next=14;break}return this.props.handleIsLoggedIn(),this.props.history.push("/celestial-list"),e.abrupt("return",Object(g.jsx)(f.a,{to:"/celestial-list"}));case 14:e.next=17;break;case 16:200!==a.status&&setInterval((function(){r.setState({statusMessage:"Something went wrong. Try again later."})}),200);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:"text-center login-register",onSubmit:this.handleSubmit,children:[Object(g.jsx)("h2",{children:"Login"}),""!==this.state.statusMessage?Object(g.jsx)("div",{className:"alert-danger",children:this.state.statusMessage}):null,Object(g.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{onChange:this.handleInput,className:"form-control",type:"text",name:"username",required:!0}),Object(g.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{onChange:this.handleInput,className:"form-control mb-3",type:"password",name:"password",required:!0}),Object(g.jsx)("button",{className:"btn btn-success",children:"Login"}),Object(g.jsxs)("p",{children:["Don't have an account yet? Why not ",Object(g.jsx)(O.b,{to:"/register",children:"Register"})," First?"]})]})})}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={user:"",profile_picture:"",about_me:"",my_equipment:[]},a.handleLogout=a.handleLogout.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/profiles/details/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),this.setState({user:n.user,profile_picture:n.profile_picture,my_equipment:n.my_equipment,about_me:n.about_me});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/logout/",{method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":x.a.get("csrftoken"),Authorization:x.a.get("Authorization")}});case 2:return x.a.remove("Authorization"),x.a.remove("csrftoken"),this.props.handleIsLoggedIn(),this.props.history.push("/login"),e.abrupt("return",Object(g.jsx)(f.a,{to:"/login"}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=null===(e=this.state.my_equipment)||void 0===e?void 0:e.map((function(e){return Object(g.jsx)("p",{children:e})}));return console.log(t),Object(g.jsxs)("div",{className:"container test",children:[Object(g.jsxs)("div",{className:"left-boarder",children:[Object(g.jsx)("h1",{children:this.state.user}),Object(g.jsx)("img",{className:"profile-image",src:this.state.profile_picture,alt:"username"}),Object(g.jsx)("p",{children:t}),Object(g.jsxs)("p",{children:["If you haven't yet created a profile, why not ",Object(g.jsx)(O.b,{to:"/create-profile",children:"Create a Profile"})]}),Object(g.jsx)("button",{onClick:this.handleLogout,className:"btn btn-danger",children:"Logout"})]}),Object(g.jsx)("div",{className:"right-boarder",children:Object(g.jsx)("p",{className:"about-text",children:this.state.about_me})})]})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"",rise_time:"",set_time:"",magnitude:0,image:"",description:"",preview:""},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleImage=a.handleImage.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",this.state.image),n.append("name",this.state.name),n.append("rise_time",this.state.rise_time),n.append("set_time",this.state.set_time),n.append("magnitude",this.state.magnitude),n.append("description",this.state.description),a={method:"POST",headers:{"X-CSRFToken":x.a.get("csrftoken")},body:n},e.next=11,fetch("/api/v1/ephem/",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t,e.state)},children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.name,name:"name"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"rise_time",children:"Rise Time"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.rise_time,name:"rise_time"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"set_time",children:"Set Time"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.set_time,name:"set_time"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"magnitude",children:"Magnitude"}),Object(g.jsx)("input",{className:"form-control",type:"number",onChange:this.handleInput,value:this.state.magnitude,name:"magnitude"}),this.state.image&&Object(g.jsx)("img",{src:this.state.preview,alt:"preview"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"image",children:"Image"}),Object(g.jsx)("input",{className:"form-control",type:"file",onChange:this.handleImage,name:"image"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{className:"form-control",onChange:this.handleInput,value:this.state.description,name:"description",cols:"30",rows:"10"}),Object(g.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})]})}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={ephem:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({ephem:n}),console.log(this.state);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.ephem.map((function(e){return Object(g.jsxs)("section",{children:[Object(g.jsx)("img",{src:e.image,alt:e.name}),Object(g.jsx)("h1",{children:e.name}),Object(g.jsx)("p",{children:"Rise time: "}),Object(g.jsx)("h2",{children:e.rise_time}),Object(g.jsx)("p",{children:"Set time: "}),Object(g.jsx)("h2",{children:e.set_time})]})}));return Object(g.jsx)(g.Fragment,{children:e[0]})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={ephems:[],message:{to:"",body:""},isEditMode:!1,isAdmin:!1,submitting:!1,error:!1},a.handleEditMode=a.handleEditMode.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleText=a.handleText.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,this.setState({ephems:n}),e.next=9,fetch("api/v1/profiles/details/");case 9:return a=e.sent,e.next=12,a.json();case 12:s=e.sent,(r=this.state.message).to="+"+s.phone,this.setState({currentState:r});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleEditMode",value:function(){this.setState({isEditMode:!0})}},{key:"handleSubmit",value:function(){this.setState({isEditMode:!1})}},{key:"handleText",value:function(){var e=Object(j.a)(b.a.mark((function e(t,n){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=this.state.message).body="Rise time: ".concat(this.state.ephems[n].rise_time," Name: ").concat(this.state.ephems[n].name),this.setState({submitting:!0}),this.setState({currentState:a}),s={method:"POST",headers:{"Content-Type":"Application/Json"},body:JSON.stringify(this.state.message.body)},e.next=8,fetch("/api/v1/broadcast/",s);case 8:e.sent,console.log(this.state.message.body);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.ephems.map((function(t,n){return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-header",children:[Object(g.jsx)("img",{src:t.image,alt:"A planet, star or satellite."}),Object(g.jsx)("h2",{className:"align-self-end",children:t.name})]}),Object(g.jsxs)("p",{children:["rise time: ",t.rise_time]}),Object(g.jsxs)("p",{children:["set time: ",t.set_time]}),Object(g.jsx)("button",{onClick:function(t){return e.handleText(t,n)},className:"btn-primary",children:"Remind me"}),e.state.isAdmin?Object(g.jsxs)("div",{className:"card-footer",children:[Object(g.jsx)("button",{onClick:e.handleEditMode,className:"btn btn-primary",children:"Edit"}),Object(g.jsx)("button",{className:"btn btn-danger",children:"Delete"})]}):null]},t.id)}));return Object(g.jsx)(g.Fragment,{children:this.state.isEditMode?this.showForm():Object(g.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:t})})}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"",time:"",target:"",description:""},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify({name:this.state.name,time:this.state.time,ephemeris:this.state.target,description:this.state.description})},e.next=4,fetch("/api/v1/events/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,console.log(s),this.props.history.push("/events"),e.abrupt("return",Object(g.jsx)(f.a,{to:"/events"}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[Object(g.jsx)("h2",{children:"Create an Event"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"name",children:"Event Name"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.value,name:"name"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"target",children:"Target"}),Object(g.jsx)("input",{type:"text",className:"form-control",onChange:this.handleInput,value:this.state.value,name:"target"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"time",children:"Time"}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleInput,value:this.state.value,name:"time",type:"text"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{className:"form-control",onChange:this.handleInput,name:"description",value:this.state.value}),Object(g.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create Event"})]})}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={id:0,data:[],isEditMode:!1,isAdmin:!1,name:"",ephemeris:"",time:""},a.handleDelete=a.handleDelete.bind(Object(h.a)(a)),a.handleEditMode=a.handleEditMode.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"PUT",headers:{"Content-Type":"Application/Json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify({name:this.state.name,ephemeris:this.state.ephemeris,time:this.state.time,description:this.state.description})},e.next=4,fetch("/api/v1/events/".concat(this.state.id,"/"),n);case 4:return window.location.reload(),e.abrupt("return",Object(g.jsx)(f.a,{to:"/events"}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(e){var t={method:"DELETE",headers:{"X-CSRFToken":x.a.get("csrftoken")}};fetch("/api/v1/events/".concat(e,"/"),t),window.location.reload()}},{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/events/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({data:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showForm",value:function(){return Object(g.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"name",value:this.state.name||""}),Object(g.jsx)("label",{className:"form-label",htmlFor:"ephemeris",children:"Target"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"ephemeris",value:this.state.ephemeris||""}),Object(g.jsx)("label",{className:"form-label",htmlFor:"time",children:"Time"}),Object(g.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"time",value:this.state.time||""}),Object(g.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{className:"form-control",name:"description",onChange:this.handleInput,value:this.state.description,cols:"30",rows:"10"}),Object(g.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Edit"})]})}},{key:"handleEditMode",value:function(e){this.setState((function(e){return{isEditMode:!e.isEditMode}})),this.setState({name:e.name,ephemeris:e.ephemeris,time:e.time,id:e.id,description:e.description})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.state.data)||void 0===e?void 0:e.map((function(e){return Object(g.jsx)("section",{className:"card",children:Object(g.jsxs)("div",{className:"event-card",children:[Object(g.jsxs)("div",{className:"card-header",children:[Object(g.jsx)("h2",{children:e.name}),Object(g.jsx)("p",{children:e.ephemeris})]}),Object(g.jsx)("p",{children:e.time}),Object(g.jsx)("p",{children:e.description}),Object(g.jsxs)("div",{className:"button-group card-footer",children:[Object(g.jsx)("button",{onClick:function(){return t.handleEditMode(e)},className:"btn btn-primary",children:"Edit"}),Object(g.jsx)("button",{onClick:function(){return t.handleDelete(e.id)},className:"btn btn-danger",children:"Delete"})]})]})},e.id)}));return Object(g.jsx)("div",{className:"d-flex",children:this.state.isEditMode?this.showForm():n})}}]),n}(a.Component),_=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isAdmin:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("nav",{className:"nav navbar container-fluid navbar-dark",children:[this.props.isLoggedIn?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.c,{className:"navbar-brand",to:"/home",children:"Night Watch"}),Object(g.jsx)(O.c,{to:"/profile",children:"Profile"}),Object(g.jsx)(O.c,{to:"/event/form",children:"Add Event"}),Object(g.jsx)(O.c,{to:"/celestial-list",children:"Planets"}),Object(g.jsx)(O.c,{to:"/events",children:"Upcoming Events"}),Object(g.jsx)(O.c,{to:"/glossary",children:"Glossary"}),Object(g.jsx)(O.c,{to:"/about",children:"About"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.c,{to:"/home",children:"Home"}),Object(g.jsx)(O.c,{to:"/register",children:"Register"}),Object(g.jsx)(O.c,{to:"/login",children:"Login"})]}),this.state.isAdmin?Object(g.jsx)(O.c,{to:"/ephem/form",children:"Add Planet"}):null]})}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={profile_picture:"",about_me:"",equipment:"",preview:""},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleImage=a.handleImage.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("profile_picture",this.state.profile_picture),n.append("about_me",this.state.about_me),n.append("equipment",this.state.equipment),a={method:"POST",headers:{"X-CSRFToken":x.a.get("csrftoken")},body:n},e.next=8,fetch("/api/v1/profiles/create/",a);case 8:return s=e.sent,e.next=11,s.json().catch((function(e){return console.log(e)}));case 11:if(r=e.sent,console.log(r),201!==s.status){e.next=15;break}return e.abrupt("return",Object(g.jsx)(f.a,{to:"/profile"}));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({profile_picture:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{className:"login-register",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsx)("h2",{children:"Create Your Profile"}),this.state.profile_picture&&Object(g.jsx)("img",{src:this.state.preview,alt:"preview"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"profile_picture",children:"Profile Picture"}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleImage,type:"file",name:"profile_picture"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"equipment",children:"My Equipment"}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleInput,value:this.state.equipment,type:"text",name:"equipment",placeholder:"Whatever you view the night sky with."}),Object(g.jsx)("label",{className:"form-label",htmlFor:"about_me",children:"About Me"}),Object(g.jsx)("textarea",{className:"form-control",onChange:this.handleInput,value:this.state.about_me,name:"about_me",cols:"30",rows:"10"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"phone_number",children:"Phone #"}),Object(g.jsx)("input",{type:"tel",className:"form-control",name:"phone_number",id:"phone_number",maxLength:12,placeholder:"for alerting you of astro events"}),Object(g.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create Profile"})]})}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{children:"Welcome to Night Watch"}),Object(g.jsx)("p",{children:"Night Watch is a simple astronomy planning app, register or login to view more!"})]})}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"About"})}}]),n}(a.Component),L=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"Glossary"})}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={message:{to:"",body:""},submitting:!1,error:!1},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState({message:Object(c.a)(Object(c.a)({},this.state.message),{},Object(p.a)({},e.target.name,e.target.value))})}},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json"},body:JSON.stringify(this.state.message)},e.next=4,fetch("/api/v1/broadcast/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,this.setState({submitting:!0}),console.log(s);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:"login-register",children:[Object(g.jsx)("h2",{children:"Set Reminder"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"to",children:"Phone #:"}),Object(g.jsx)("input",{className:"form-control",value:this.state.message.to,onChange:this.handleInput,type:"tel",name:"to",id:"to"}),Object(g.jsx)("label",{className:"form-label",htmlFor:"body",children:"Body:"}),Object(g.jsx)("textarea",{className:"form-control",name:"body",id:"body",value:this.state.message.body,onChange:this.handleInput,cols:"30",rows:"10"}),Object(g.jsx)("button",{className:"btn btn-success",children:"Remind Me"})]})}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!x.a.get("Authorization"),isAdmin:!1},a.handleIsLoggedIn=a.handleIsLoggedIn.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleIsLoggedIn",value:function(){this.setState((function(e){return{isLoggedIn:!e.isLoggedIn}}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(_,{isLoggedIn:this.state.isLoggedIn}),Object(g.jsxs)(f.d,{children:[Object(g.jsx)(f.b,{path:"/home",component:E}),Object(g.jsx)(f.b,{path:"/about",component:A}),Object(g.jsx)(f.b,{path:"/glossary",component:L}),Object(g.jsx)(f.b,{path:"/register",component:y}),Object(g.jsx)(f.b,{path:"/login",render:function(t){return Object(g.jsx)(N,Object(c.a)(Object(c.a)({},t),{},{isLoggedIn:e.state.isLoggedIn,handleIsLoggedIn:e.handleIsLoggedIn}))}}),Object(g.jsx)(f.b,{path:"/profile",render:function(t){return Object(g.jsx)(S,Object(c.a)(Object(c.a)({},t),{},{handleIsLoggedIn:e.handleIsLoggedIn}))}}),Object(g.jsx)(f.b,{path:"/create-profile",component:T}),Object(g.jsx)(f.b,{path:"/ephem/form",component:k}),Object(g.jsx)(f.b,{path:"/event/form",component:C}),Object(g.jsx)(f.b,{path:"/display",component:I}),Object(g.jsx)(f.b,{path:"/celestial-list",component:w}),Object(g.jsx)(f.b,{path:"/events",component:F}),Object(g.jsx)(f.b,{path:"/sms-form",component:M})]})]})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(D,{})})}),document.getElementById("root")),P()}},[[40,1,2]]]);
//# sourceMappingURL=main.6c4fa7c7.chunk.js.map