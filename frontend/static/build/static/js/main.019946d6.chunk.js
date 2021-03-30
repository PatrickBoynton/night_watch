(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(22),i=n.n(r),c=(n(35),n(21)),o=n(2),l=n.n(o),h=n(11),u=n(6),d=n(7),b=n(4),m=n(9),p=n(8),j=(n(37),n(18)),f=n(14),v=n(12),O=n(10),g=n.n(O),x=n(0),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:"",formErrors:{email:"",username:"",other:""}},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({username:this.state.username,email:this.state.email,password1:this.state.password1,password2:this.state.password2})},e.next=4,fetch("/rest-auth/registration/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(s=e.sent,console.log(s),!a.ok){e.next=15;break}return g.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/create-profile"),e.abrupt("return",Object(x.jsx)(f.a,{to:"/create-profile"}));case 15:console.log(s),this.setState({formErrors:{username:s.username,email:s.email}});case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{className:"login-register needs-validation",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsx)("h2",{children:"Register"}),""!==this.state.formErrors.username?Object(x.jsx)("div",{className:"alert-danger",children:this.state.formErrors.username}):null,Object(x.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.username,className:"form-control needs-validation",type:"text",name:"username",required:!0}),""!==this.state.formErrors.email?Object(x.jsx)("div",{className:"alert-danger",children:this.state.formErrors.email}):null,Object(x.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.email,className:"form-control needs-validation",type:"email",name:"email",required:!0}),Object(x.jsxs)("div",{className:"row g-3",children:[Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("label",{className:"form-label",htmlFor:"password1",children:"Password"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.password1,className:"form-control needs-validation",type:"password",name:"password1",required:!0})]}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("label",{className:"form-label",htmlFor:"password2",children:"Confirm Password"}),Object(x.jsx)("input",{onChange:this.handleInput,value:this.state.password2,className:"form-control mb-3 needs-validation",type:"password",name:"password2",required:!0})]})]}),""!==this.state.username&&""!==this.state.email&&this.state.password1&&this.state.password2?Object(x.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}):Object(x.jsx)("button",{className:"btn btn-success",type:"submit",disabled:!0,children:"Register"}),Object(x.jsxs)("p",{children:["Already have an account? Why don't you ",Object(x.jsx)(v.b,{to:"/login",children:"Login"}),"? "]})]})})}}]),n}(a.Component),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",statusMessage:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken"),Authorization:g.a.get("Authorization")},body:JSON.stringify({username:this.state.username,password:this.state.password})},e.next=4,fetch("/rest-auth/login/",n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(!(s=e.sent).key){e.next=16;break}if(g.a.set("Authorization","Token ".concat(s.key)),!g.a.get("Authorization")){e.next=14;break}return this.props.handleIsLoggedIn(),this.props.history.push("/celestial-list"),e.abrupt("return",Object(x.jsx)(f.a,{to:"/celestial-list"}));case 14:e.next=17;break;case 16:a.ok||setTimeout((function(){return r.setState({statusMessage:"Something went wrong."})}),2e3);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout()}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{className:"text-center login-register",onSubmit:this.handleSubmit,children:[Object(x.jsx)("h2",{children:"Login"}),""!==this.state.statusMessage?Object(x.jsx)("div",{className:"alert-danger",children:this.state.statusMessage}):null,Object(x.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{onChange:this.handleInput,className:"form-control",type:"text",name:"username",required:!0}),Object(x.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{onChange:this.handleInput,className:"form-control mb-3",type:"password",name:"password",required:!0}),""!==this.state.username&&""!==this.state.password?Object(x.jsx)("button",{className:"btn btn-success",children:"Login"}):Object(x.jsx)("button",{className:"btn btn-success",disabled:!0,children:"Login"}),Object(x.jsxs)("p",{children:["Don't have an account yet? Why not ",Object(x.jsx)(v.b,{to:"/register",children:"Register"})," First?"]})]})})}}]),n}(a.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleLogout=a.handleLogout.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/logout/",{method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken"),Authorization:g.a.get("Authorization")}});case 2:return g.a.remove("Authorization"),g.a.remove("csrftoken"),this.props.handleIsLoggedIn(),this.props.history.push("/login"),e.abrupt("return",Object(x.jsx)(f.a,{to:"/login"}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-header",children:[Object(x.jsx)("h1",{children:this.props.user.user}),Object(x.jsx)("img",{style:{height:"200px",width:"200px"},className:"rounded-circle",src:this.props.user.profile_picture,alt:"username"}),Object(x.jsx)("p",{children:this.props.user.about_me}),Object(x.jsxs)("p",{children:["If you haven't created a profile, why not ",Object(x.jsx)(v.b,{to:"/create-profile",children:"Create a profile"}),"?"]})]})})})}}]),n}(a.Component),N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={ephem:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({ephem:n}),console.log(this.state);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.ephem.map((function(e){return Object(x.jsxs)("section",{children:[Object(x.jsx)("img",{src:e.image,alt:e.name}),Object(x.jsx)("h1",{children:e.name}),Object(x.jsx)("p",{children:"Rise time: "}),Object(x.jsx)("h2",{children:e.rise_time}),Object(x.jsx)("p",{children:"Set time: "}),Object(x.jsx)("h2",{children:e.set_time})]})}));return Object(x.jsx)(x.Fragment,{children:e[0]})}}]),n}(a.Component),S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleText=a.handleText.bind(Object(b.a)(a)),a.handleEditMode=a.handleEditMode.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleText",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),alert(this.props.id);case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleEditMode",value:function(){this.setState({isEditMode:!0})}},{key:"handleSubmit",value:function(){this.setState({isEditMode:!1})}},{key:"render",value:function(){var e=this;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"col-sm-4 col-12 mb-3",children:Object(x.jsxs)("div",{className:"card h-100",children:[Object(x.jsxs)("div",{className:"card-header",children:[Object(x.jsx)("div",{className:"img-container",children:Object(x.jsx)("img",{style:{height:"100%"},src:this.props.item.image,alt:"A planet, star or satellite."})}),Object(x.jsx)("h2",{children:this.props.item.name}),Object(x.jsx)("p",{children:this.props.item.description})]}),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:["rise time: ",this.props.item.rise_time]}),Object(x.jsxs)("p",{children:["set time: ",this.props.item.set_time]})]}),this.props.isLoggedIn?this.props.item.is_subscribed?Object(x.jsx)("button",{type:"submit",onClick:function(){return e.props.removeSubscriber(e.props.item)},className:"btn-primary",children:"Cancel Reminder"}):Object(x.jsx)("button",{type:"submit",onClick:function(){return e.props.addSubscriber(e.props.item)},className:"btn-primary",children:"Remind me"}):null,this.props.isAdmin?Object(x.jsxs)("div",{className:"card-footer",children:[Object(x.jsx)("button",{onClick:this.handleEditMode,className:"btn btn-primary",children:"Edit"}),Object(x.jsx)("button",{className:"btn btn-danger",children:"Delete"})]}):null]})})})}}]),n}(a.Component),I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={ephems:[],message:{to:"",body:""},isEditMode:!1,isAdmin:!1,submitting:!1,error:!1,result:"",id:0},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.addSubscriber=a.addSubscriber.bind(Object(b.a)(a)),a.removeSubscriber=a.removeSubscriber.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/ephem/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,this.setState({ephems:n}),e.next=9,fetch("api/v1/profiles/details/");case 9:return a=e.sent,e.next=12,a.json();case 12:s=e.sent,r=this.state.message,console.log(s.id),r.to="+"+s.phone,this.setState({currentState:r,id:s.id});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState({result:e.target.value})}},{key:"addSubscriber",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PATCH",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")}},e.next=3,fetch("/api/v1/ephem/".concat(t.id,"/subscribe/"),n);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,console.log(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeSubscriber",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PATCH",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")}},e.next=3,fetch("/api/v1/ephem/".concat(t.id,"/unsubscribe/"),n);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,console.log(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.ephems.filter((function(t){return null===e.state.search||t.name.toLowerCase().includes(e.state.result.toLowerCase())?t:void 0})).map((function(t,n){return Object(x.jsx)(S,{item:t,isLoggedIn:e.props.isLoggedIn,addSubscriber:e.addSubscriber,removeSubscriber:e.removeSubscriber,isAdmin:e.state.isAdmin},t.id)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("input",{className:"col-12 mb-5",style:{marginLeft:"30px",marginRight:"40px"},value:this.state.result,onChange:this.handleInput,type:"text",name:"result",placeholder:"Search..."})}),this.state.isEditMode?this.showForm():Object(x.jsx)("div",{className:"row",children:t})]})}}]),n}(a.Component),C=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={id:0,data:[],isEditMode:!1,isAdmin:!1,name:"",ephemeris:"",date_of_event:"",image:null},a.handleDelete=a.handleDelete.bind(Object(b.a)(a)),a.handleEditMode=a.handleEditMode.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleImage=a.handleImage.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"PUT",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({name:this.state.name,ephemeris:this.state.ephemeris,date_of_event:this.state.date_of_event,description:this.state.description})},e.next=4,fetch("/api/v1/events/".concat(this.state.id,"/my-events/"),n);case 4:return window.location.reload(),e.abrupt("return",Object(x.jsx)(f.a,{to:"/events"}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(e){var t={method:"DELETE",headers:{"X-CSRFToken":g.a.get("csrftoken")}};fetch("/api/v1/events/".concat(e,"/my-events/"),t),window.location.reload()}},{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/events/my-events/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),this.setState({data:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"showForm",value:function(){return Object(x.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[this.state.image?Object(x.jsx)("img",{src:this.state.preview,alt:""}):null,Object(x.jsx)("label",{className:"form-label",htmlFor:"image",children:"Image"}),Object(x.jsx)("input",{className:"form-control",type:"file",onChange:this.handleImage,name:"image"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"name",value:this.state.name||""}),Object(x.jsx)("label",{className:"form-label",htmlFor:"ephemeris",children:"Target"}),Object(x.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"ephemeris",value:this.state.ephemeris||""}),Object(x.jsx)("label",{className:"form-label",htmlFor:"time",children:"Date and Time"}),Object(x.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,name:"date_of_event",value:this.state.date_of_event||"",placeholder:"2021-06-12 22:33"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{className:"form-control",name:"description",onChange:this.handleInput,value:this.state.description,cols:"30",rows:"10"}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Edit"})]})}},{key:"handleEditMode",value:function(e){this.setState((function(e){return{isEditMode:!e.isEditMode}})),this.setState({name:e.name,ephemeris:e.ephemeris,date_of_event:e.date_of_event,id:e.id,description:e.description})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.state.data)||void 0===e?void 0:e.map((function(e){return Object(x.jsx)("div",{className:"col-sm-4 col-4 mb-3",children:Object(x.jsxs)("div",{className:"card h-100",children:[Object(x.jsxs)("div",{className:"card-header",children:[Object(x.jsx)("div",{className:"img-container img-responsive",children:Object(x.jsx)("img",{style:{height:"100%"},src:e.image,alt:"Nothin here."})}),Object(x.jsx)("h2",{children:e.name}),Object(x.jsx)("p",{children:e.ephemeris})]}),Object(x.jsx)("p",{children:e.date_of_event}),Object(x.jsx)("p",{children:e.description}),Object(x.jsxs)("div",{className:"button-group card-footer",children:[Object(x.jsx)("button",{onClick:function(){return t.handleEditMode(e)},className:"btn btn-primary",children:"Edit"}),Object(x.jsx)("button",{onClick:function(){return t.handleDelete(e.id)},className:"btn btn-danger",children:"Delete"})]})]})},e.id)}));return Object(x.jsx)("div",{className:"row",children:this.state.isEditMode?this.showForm():n})}}]),n}(a.Component),_=n(48),F=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).openModal=function(){return a.setState({isOpen:!0})},a.closeModal=function(){return a.setState({isOpen:!1})},a.state={name:"",date_of_event:"",ephemeris:"",description:"",message:{to:a.props.phone,body:"Testing 1, 2, 3"},image:null,preview:null,isStaff:!1,isOpen:!1},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleImage=a.handleImage.bind(Object(b.a)(a)),a.openModal=a.openModal.bind(Object(b.a)(a)),a.closeModal=a.closeModal.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",this.state.image),n.append("name",this.state.name),n.append("time",this.state.time),n.append("target",this.state.target),n.append("description",this.state.description),n.append("user",this.props.user),a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=11,fetch("/api/v1/events/my-events/",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSMS",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=this.state.message).body="Your viewing target: ".concat(this.state.name," will rise at ").concat(this.state.date_of_event,"  ").concat(this.state.description),this.setState({currentState:n}),a={method:"POST",headers:{"Content-Type":"Application/Json"},body:JSON.stringify(this.state.message.body)},e.next=7,fetch("/api/v1/broadcast/",a);case 7:this.setState({submitting:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:"btn btn-success",onClick:function(){return e.openModal()},children:"Create Event"}),Object(x.jsx)(C,{}),Object(x.jsx)(_.a,{show:this.state.isOpen,onHide:this.closeModal,children:Object(x.jsxs)("form",{style:{width:"100%"},className:"login-register",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsx)("h2",{children:"Create an Event"}),Object(x.jsxs)(x.Fragment,{children:[this.state.image?Object(x.jsx)("img",{src:this.state.preview,alt:""}):null,Object(x.jsx)("label",{className:"form-label",htmlFor:"image",children:"Image"}),Object(x.jsx)("input",{className:"form-control",onChange:this.handleImage,type:"file",name:"image"})]}),Object(x.jsx)("label",{className:"form-label",htmlFor:"name",children:"Event Name"}),Object(x.jsx)("input",{className:"form-control",type:"text",onChange:this.handleInput,value:this.state.value,name:"name"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"ephemeris",children:"Target"}),Object(x.jsx)("input",{type:"text",className:"form-control",onChange:this.handleInput,value:this.state.value,name:"ephemeris"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"date_of_event",children:"Time"}),Object(x.jsx)("input",{className:"form-control",onChange:this.handleInput,value:this.state.value,name:"date_of_event",type:"text"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{className:"form-control",onChange:this.handleInput,name:"description",value:this.state.value}),""!==this.state.name&&""!==this.state.time&&""!==this.state.target&&""!==this.state.description?Object(x.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create Event"}):Object(x.jsx)("button",{className:"btn btn-success",type:"submit",disabled:!0,children:"Create Event"})]})})]})}}]),n}(a.Component),L=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isAdmin:!1},a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"Application/Json","X-CSRFToken":g.a.get("csrftoken"),Authorization:g.a.get("Authorization")}},e.next=3,fetch("/rest-auth/logout/",t);case 3:return g.a.remove("csrftoken"),g.a.remove("Authorization"),this.props.history.push("/login"),this.props.handleIsLoggedIn(),e.abrupt("return",Object(x.jsx)(f.a,{to:"/login"}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsx)("nav",{className:"nav navbar navbar-expand-md navbar-dark",children:Object(x.jsxs)("div",{className:"container-fluid",children:[this.props.isLoggedIn?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v.c,{className:"navbar-brand",to:"/",children:"Night Watch"}),Object(x.jsx)(v.c,{to:"/celestial-list",children:"Celestial Bodies"}),Object(x.jsx)(v.c,{to:"/events",children:"Solar Events"}),Object(x.jsx)(v.c,{to:"/event/form",children:"My Events"}),Object(x.jsx)(v.c,{to:"/glossary",children:"Glossary"}),Object(x.jsx)(v.c,{to:"/profile",children:"Profile"}),Object(x.jsx)(v.c,{to:"/logout",onClick:this.handleLogout,children:"Logout"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v.c,{className:"navbar-brand",to:"/home",children:"Night Watch"}),Object(x.jsx)(v.c,{to:"/celestial-list",children:"Celestial Bodies"}),Object(x.jsx)(v.c,{to:"/register",children:"Register"}),Object(x.jsx)(v.c,{to:"/login",children:"Login"})]}),this.state.isAdmin?Object(x.jsx)(v.c,{to:"/ephem/form",children:"Add Planet"}):null]})})}}]),n}(a.Component),T=Object(f.g)(L),A=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={profile_picture:"",about_me:"",equipment:"",preview:"",receive_notifications:!1},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleCheck=a.handleCheck.bind(Object(b.a)(a)),a.handleImage=a.handleImage.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("profile_picture",this.state.profile_picture),n.append("about_me",this.state.about_me),n.append("equipment",this.state.equipment),a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=8,fetch("/api/v1/profiles/create/",a);case 8:return s=e.sent,e.next=11,s.json().catch((function(e){return console.log(e)}));case 11:if(r=e.sent,console.log(r),!s.ok){e.next=15;break}return e.abrupt("return",Object(x.jsx)(f.a,{to:"/profile"}));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({profile_picture:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleCheck",value:function(e){this.setState((function(e){return{receive_notifications:!e.receive_notifications}}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("form",{className:"login-register",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsx)("h2",{children:"Create Your Profile"}),this.state.profile_picture?Object(x.jsx)("img",{src:this.state.preview,alt:"preview"}):null,Object(x.jsx)("label",{className:"form-label",htmlFor:"profile_picture",children:"Profile Picture"}),Object(x.jsx)("input",{className:"form-control",onChange:this.handleImage,type:"file",name:"profile_picture"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"location",children:"City"}),Object(x.jsx)("input",{className:"form-control",type:"text",name:"location",id:"location"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"about_me",children:"About Me"}),Object(x.jsx)("textarea",{className:"form-control",onChange:this.handleInput,value:this.state.about_me,name:"about_me",cols:"30",rows:"10"}),Object(x.jsx)("label",{className:"form-label",htmlFor:"receive_notifications",children:"Receive Notifications"}),Object(x.jsx)("input",{className:"form-group",type:"checkbox",onChange:this.handleCheck,value:this.state.receive_notifications,name:"receive_notifications"}),this.state.receive_notifications?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{className:"form-label",htmlFor:"phone_number",children:"Phone #"}),Object(x.jsx)("input",{type:"tel",className:"form-control",name:"phone_number",id:"phone_number",maxLength:12,placeholder:"for alerting you of astro events"})]}):null,Object(x.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create Profile"})]})}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Welcome to Night Watch"}),Object(x.jsx)("p",{children:"The view of the earth from the moon fascinated me - a small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. Raging nationalistic interests, famines, wars, pestilence don't show from that distance. I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens, could look at earth and never know that it was inhabited at all. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'."})]})}}]),n}(a.Component),M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:"About"})}}]),n}(a.Component),D=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={terms:['Look again at that dot. That\'s here. That\'s home. That\'s us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.',"It is for these reasons that I regard the decision last year to shift our efforts in space from low to high gear as among the most important decisions that will be made during my incumbency in the office of the Presidency.","Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work"," believe that space travel will one day become as common as airline travel is today. I\u2019m convinced, however, that the true future of space travel does not lie with government agencies \u2014 NASA is still obsessed with the idea that the primary purpose of the space program is science \u2014 but real progress will come from private companies competing to provide the ultimate adventure ride, and NASA will receive the trickle-down benefits."]},a}return Object(d.a)(n,[{key:"render",value:function(){var e,t=null===(e=this.state.terms)||void 0===e?void 0:e.map((function(e){return Object(x.jsxs)("p",{style:{border:"1px solid #ffffff44"},className:"m-5",children:["Word: ",e]})}));return Object(x.jsx)("div",{className:"callout m-3",children:t})}}]),n}(a.Component),R=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"We're sorry the page you are not looking for was not found"}),Object(x.jsxs)("p",{children:["Please click on the navbar links or go  ",Object(x.jsx)(v.b,{to:"/celestial-events",children:"Here"})," "]})]})}}]),n}(a.Component),P=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={events:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/events/solar-events/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),this.setState({events:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.events.map((function(e){return Object(x.jsx)("div",{className:"col-sm-4 col-12",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)("div",{className:"card-header",children:[Object(x.jsx)("img",{src:e.image,alt:"Some sort of event"}),Object(x.jsx)("h1",{children:e.name}),Object(x.jsx)("h3",{children:e.ephemeris})]}),Object(x.jsxs)("div",{className:"card-footer",children:[Object(x.jsx)("p",{children:e.date_of_event}),Object(x.jsx)("p",{children:e.description})]})]})})}));return Object(x.jsx)("div",{className:"row",children:e})}}]),n}(a.Component),J=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!g.a.get("Authorization"),isAdmin:!1,user:{user:"",profile_picture:"",about_me:"",phone:""}},a.handleIsLoggedIn=a.handleIsLoggedIn.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/profiles/details/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({user:{user:n.user,profile_picture:n.profile_picture,about_me:n.about_me,phone:n.phone}});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleIsLoggedIn",value:function(){this.setState((function(e){return{isLoggedIn:!e.isLoggedIn}}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(T,{isLoggedIn:this.state.isLoggedIn,handleIsLoggedIn:this.handleIsLoggedIn}),Object(x.jsxs)(f.d,{children:[Object(x.jsx)(f.b,{path:"/about",component:M}),Object(x.jsx)(f.b,{path:"/glossary",component:D}),Object(x.jsx)(f.b,{path:"/register",component:y}),Object(x.jsx)(f.b,{path:"/login",render:function(t){return Object(x.jsx)(w,Object(c.a)(Object(c.a)({},t),{},{isLoggedIn:e.state.isLoggedIn,handleIsLoggedIn:e.handleIsLoggedIn}))}}),Object(x.jsx)(f.b,{path:"/profile",render:function(t){return Object(x.jsx)(k,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,handleIsLoggedIn:e.handleIsLoggedIn}))}}),Object(x.jsx)(f.b,{path:"/create-profile",component:A}),Object(x.jsx)(f.b,{path:"/event/form",render:function(t){return Object(x.jsx)(F,Object(c.a)(Object(c.a)({},t),{},{phone:e.state.user.phone}))}}),Object(x.jsx)(f.b,{path:"/display",component:N}),Object(x.jsx)(f.b,{path:"/celestial-list",render:function(t){return Object(x.jsx)(I,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,isLoggedIn:e.state.isLoggedIn}))}}),Object(x.jsx)(f.b,{path:"/events",component:P}),Object(x.jsx)(f.b,{path:"/"}),Object(x.jsx)(f.b,{exact:!0,path:"/",component:E}),Object(x.jsx)(f.b,{exact:!0,path:"*",component:R})]})]})}}]),n}(a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(v.a,{children:Object(x.jsx)(J,{})})}),document.getElementById("root")),z()}},[[45,1,2]]]);
//# sourceMappingURL=main.019946d6.chunk.js.map