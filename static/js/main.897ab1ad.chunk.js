(this.webpackJsonptodoDz=this.webpackJsonptodoDz||[]).push([[0],{106:function(e,t,a){e.exports={todolist:"TodoList_todolist___28mP"}},111:function(e,t,a){e.exports={login:"Login_login__3D9O4"}},114:function(e,t,a){e.exports=a.p+"static/media/grid-1.1s-200px.82b1d7ed.svg"},126:function(e,t,a){e.exports=a(157)},131:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"initialSelect",(function(){return C})),a.d(n,"alertSelect",(function(){return O})),a.d(n,"progresSelector",(function(){return w})),a.d(n,"authSelector",(function(){return S})),a.d(n,"todolistArraySelector",(function(){return A})),a.d(n,"allTaskSelector",(function(){return I}));var r={};a.r(r),a.d(r,"AlertComponent",(function(){return Ve}));var o={};a.r(o),a.d(o,"AddItemForm",(function(){return Fe}));var i={};a.r(i),a.d(i,"InputSpan",(function(){return Ue}));var c={};a.r(c),a.d(c,"NavBar",(function(){return Be}));var s,u,l=a(0),d=a.n(l),p=a(9),f=a.n(p),m=(a(131),a(41)),h=a(197),b=a(198),v=a(159),k=a(117),g=a(160),T=a(199),y=a(105),x=a.n(y),_=a(47),j=a.n(_),E=a(18),C=function(e){return e.app.initApp},O=function(e){return e.app.alertContent},w=function(e){return e.app.progressLoading},S=function(e){return e.app.authMe},A=function(e){return e.todolist},I=function(e){return e.tasks},N=a(85),L=a(73),M=a(75),P=a(11),V=a.n(P),W=a(19),D=a(101),H=a.n(D);!function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(s||(s={})),function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Complite=2]="Complite",e[e.Draft=3]="Draft"}(u||(u={}));var F=H.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1",withCredentials:!0,headers:{"API-KEY":"9708f55c-7c56-4108-a0bf-76b37c22e7d1"}}),U=function(){return F.get("/todo-lists").then((function(e){return e}))},K=function(e){return F.post("/todo-lists",{title:e}).then((function(e){return e.data}))},B=function(e){return F.delete("/todo-lists/".concat(e)).then((function(e){return e.data}))},R=function(e,t){return F.put("/todo-lists/".concat(e),{title:t}).then((function(e){return e.data}))},z=function(e){return F.get("/todo-lists/".concat(e,"/tasks")).then((function(e){return e}))},J=function(e,t){return F.post("/todo-lists/".concat(e,"/tasks"),{title:t}).then((function(e){return e.data}))},q=function(e,t){return F.delete("/todo-lists/".concat(e,"/tasks/").concat(t)).then((function(e){return e.data}))},Q=function(e,t,a){return F.put("/todo-lists/".concat(e,"/tasks/").concat(t),a).then((function(e){return e.data}))},G=function(){return F.get("/auth/me").then((function(e){return e.data}))},Y=function(e){return F.post("/auth/login",Object(M.a)({},e)).then((function(e){return e.data}))},X=function(){return F.delete("/auth/login").then((function(e){return e.data}))},Z=a(15),$=a(209),ee=function(e,t){return{id:Object($.a)(),type:e,title:t}},te=Object(Z.b)("app/authMeThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:if(0!==(n=e.sent).resultCode){e.next=9;break}return a.dispatch(ie({dataUser:n.data,value:!0})),e.abrupt("return",{value:!0});case 9:return e.abrupt("return",{value:!0});case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),a.rejectWithValue({error:e.t0.message}),e.abrupt("return",{value:!0});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}()),ae=Object(Z.b)("app/loginThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch(ce({value:!0})),e.prev=1,e.next=4,Y(t);case 4:if(0!==(n=e.sent).resultCode){e.next=10;break}return a.dispatch(ce({value:!1})),e.abrupt("return",{value:!0});case 10:return a.dispatch(se({alert:ee("error",n.messages)})),a.dispatch(ce({value:!1})),e.abrupt("return",a.rejectWithValue({error:[n.messages]}));case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(1),a.dispatch(ce({value:!1})),a.dispatch(se({alert:ee("error",e.t0.message)})),e.abrupt("return",a.rejectWithValue({error:[e.t0.message]}));case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,a){return e.apply(this,arguments)}}()),ne=Object(Z.b)("app/logoutThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch(ce({value:!0})),e.prev=1,e.next=4,X();case 4:if(0!==e.sent.resultCode){e.next=10;break}return a.dispatch(ce({value:!1})),e.abrupt("return",{value:!1});case 10:return e.abrupt("return",a.rejectWithValue({value:!1}));case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(1),a.dispatch(se({alert:ee("error",e.t0.message)})),e.abrupt("return",a.rejectWithValue({error:e.t0.message}));case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),re=Object(Z.c)({name:"app",initialState:{initApp:!1,progressLoading:!1,alertContent:[],dataUser:null,authMe:!1},reducers:{setDataAction:function(e,t){e.authMe=t.payload.value,e.dataUser=t.payload.dataUser},initAppAction:function(e,t){e.progressLoading=t.payload.value},setAlertAction:function(e,t){e.alertContent.push(t.payload.alert)},removeAlertAction:function(e,t){e.alertContent=e.alertContent.filter((function(e){return e.id!==t.payload.id}))}},extraReducers:function(e){e.addCase(ae.fulfilled,(function(e,t){e.authMe=t.payload.value})),e.addCase(ne.fulfilled,(function(e,t){e.authMe=t.payload.value})),e.addCase(te.fulfilled,(function(e,t){e.initApp=t.payload.value}))}}),oe=re.reducer,ie=re.actions.setDataAction,ce=re.actions.initAppAction,se=re.actions.setAlertAction,ue=re.actions.removeAlertAction,le=Object(Z.b)("tasks/getTaskThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.prev=1,e.next=4,z(t);case 4:if(200!==(o=e.sent).status){e.next=9;break}return e.abrupt("return",{tasks:o.data.items,id:t});case 9:return n(se({alert:ee("error",o.statusText)})),e.abrupt("return",{});case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",r({error:e.t0.message}));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),de=Object(Z.b)("tasks/addTaskThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.prev=1,e.next=4,J(t.id,t.nameTask);case 4:if(0!==(o=e.sent).resultCode){e.next=10;break}return n(se({alert:ee("success","\u0421\u043e\u0437\u0434\u0430\u043d Task: ".concat(t.nameTask))})),e.abrupt("return",{id:o.data.item.todoListId,newTask:o.data.item});case 10:return n(se({alert:ee("error",o.statusText)})),e.abrupt("return",{});case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(1),e.abrupt("return",r({error:e.t0.message}));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a){return e.apply(this,arguments)}}()),pe=Object(Z.b)("tasks/removeTaskThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r,o,i,c,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,o=a.getState,i=o(),c=i.tasks[t.id].find((function(e){return e.id===t.taskId}))){e.next=5;break}return e.abrupt("return");case 5:return n(be({id:t.id,taskId:t.taskId,value:"loading"})),e.prev=6,e.next=9,q(t.id,t.taskId);case 9:if(0!==(s=e.sent).resultCode){e.next=15;break}return n(se({alert:ee("success","\u0423\u0434\u0430\u043b\u0435\u043d Task: ".concat(c.title))})),e.abrupt("return",{id:t.id,taskId:t.taskId});case 15:return n(se({alert:ee("error",s.statusText)})),e.abrupt("return",{});case 17:e.next=22;break;case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",r({error:e.t0.message}));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t,a){return e.apply(this,arguments)}}()),fe=Object(Z.b)("tasks/updateTaskThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r,o,i,c,s,u,l;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.dispatch,r=a.getState,o=a.rejectWithValue,i=r(),c=i.tasks[t.id].find((function(e){return e.id===t.taskId}))){e.next=5;break}return e.abrupt("return");case 5:return s=Object.keys(t.update).join(" "),u=Object(M.a)({id:c.id,title:c.title,addedDate:c.addedDate,description:c.description,priority:c.priority,order:c.order,startDate:c.startDate,todoListId:c.todoListId,deadline:c.deadline,status:c.status,statusProcess:c.statusProcess},t.update),n(be({id:t.id,taskId:t.taskId,value:"chengeStatus"})),e.prev=8,e.next=11,Q(t.id,t.taskId,u);case 11:if(0!==(l=e.sent).resultCode){e.next=17;break}return n(se({alert:ee("success","\u0418\u0437\u043c\u0435\u043d\u0435\u043d ".concat(s," Task: ").concat(c.title))})),e.abrupt("return",{id:t.id,taskId:t.taskId,task:u});case 17:return n(se({alert:ee("error",l.statusText)})),e.abrupt("return",{});case 19:e.next=24;break;case 21:return e.prev=21,e.t0=e.catch(8),e.abrupt("return",o({error:e.t0.message}));case 24:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(t,a){return e.apply(this,arguments)}}()),me=Object(Z.c)({name:"tasks",initialState:{},reducers:{setDisabledAction:function(e,t){e[t.payload.id]=e[t.payload.id].map((function(e){return e.id===t.payload.taskId?(e.statusProcess=t.payload.value,e):e}))}},extraReducers:function(e){e.addCase(le.fulfilled,(function(e,t){t.payload.id&&(e[t.payload.id]=t.payload.tasks)})),e.addCase(de.fulfilled,(function(e,t){t.payload&&(e[t.payload.id]=[].concat(Object(L.a)(e[t.payload.id]),[t.payload.newTask]))})),e.addCase(pe.fulfilled,(function(e,t){var a;(null===(a=t.payload)||void 0===a?void 0:a.id)&&(e[t.payload.id]=e[t.payload.id].filter((function(e){var a;return e.id!==(null===(a=t.payload)||void 0===a?void 0:a.taskId)})))})),e.addCase(fe.fulfilled,(function(e,t){var a;(null===(a=t.payload)||void 0===a?void 0:a.id)&&(e[t.payload.id]=e[t.payload.id].map((function(e){var a;return e.id===(null===(a=t.payload)||void 0===a?void 0:a.taskId)?e=t.payload.task:e})))}))}}),he=me.reducer,be=me.actions.setDisabledAction,ve=a(55),ke=Object(Z.b)("todolist/getTodolistThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return n=e.sent,e.abrupt("return",{todolists:n.data});case 7:return e.prev=7,e.t0=e.catch(0),r=e.t0,a.dispatch(se({alert:ee("error",r.message)})),e.abrupt("return",a.rejectWithValue({errors:r.message}));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),ge=Object(Z.b)("todolist/addTodolistThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.prev=1,e.next=4,K(t);case 4:if(0!==(o=e.sent).resultCode){e.next=10;break}return n(se({alert:ee("success","\u0421\u043e\u0437\u0434\u0430\u043d Todolist: ".concat(t))})),e.abrupt("return",{newTodolist:o.data.item});case 10:return n(se({alert:ee("error","".concat(o.messages))})),e.abrupt("return",{});case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(1),n(se({alert:ee("error","".concat(e.t0.message))})),e.abrupt("return",r({errors:e.t0.message}));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a){return e.apply(this,arguments)}}()),Te=Object(Z.b)("todolist/removeTodolistThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r,o,i,c,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.getState,r=a.dispatch,o=a.rejectWithValue,i=n(),c=i.todolist.find((function(e){return e.id===t}))){e.next=5;break}return e.abrupt("return");case 5:return r(Ee({idTodolist:c.id,value:"loading"})),e.prev=6,e.next=9,B(t);case 9:if(0!==(s=e.sent).resultCode){e.next=15;break}return r(se({alert:ee("success","\u0423\u0434\u0430\u043b\u0435\u043d Todolist: ".concat(c.title))})),e.abrupt("return",{idTodolist:t});case 15:return r(se({alert:ee("error",s.messages)})),e.abrupt("return",{});case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(6),r(se({alert:ee("error",e.t0.message)})),e.abrupt("return",o({errors:e.t0.message}));case 23:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t,a){return e.apply(this,arguments)}}()),ye=Object(Z.b)("todolist/chengeNameTodolistThunk",function(){var e=Object(W.a)(V.a.mark((function e(t,a){var n,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.prev=1,e.next=4,R(t.id,t.text);case 4:if(0!==e.sent.resultCode){e.next=10;break}return n(se({alert:ee("success","\u0418\u0437\u043c\u0435\u043d\u0435\u043d Todolist: ".concat(t.text))})),e.abrupt("return",{idTodolist:t.id,newTitleTodolist:t.text});case 10:return e.abrupt("return");case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",r({errors:e.t0.message}));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),xe=Object(Z.c)({name:"todolist",initialState:[],reducers:{chengeFilterTodolistAction:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.idTodolist}));e[a].filter=t.payload.newfilterTodolist},disabledAction:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.idTodolist}));e[a].entiryStatus=t.payload.value}},extraReducers:function(e){e.addCase(ke.fulfilled,(function(e,t){return t.payload.todolists.map((function(e){return e.filter="all",e.entiryStatus="",e}))})),e.addCase(ge.fulfilled,(function(e,t){if(t.payload.newTodolist)return[].concat(Object(L.a)(e),[t.payload.newTodolist])})),e.addCase(Te.fulfilled,(function(e,t){if(t.payload)return e.filter((function(e){var a;return e.id!==(null===(a=t.payload)||void 0===a?void 0:a.idTodolist)}))})),e.addCase(ye.fulfilled,(function(e,t){if(t.payload){var a=e.findIndex((function(e){var a;return e.id===(null===(a=t.payload)||void 0===a?void 0:a.idTodolist)}));e[a].title=t.payload.newTitleTodolist}}))}}),_e=xe.reducer,je=xe.actions.chengeFilterTodolistAction,Ee=xe.actions.disabledAction,Ce=Object(N.b)({todolist:_e,tasks:he,app:oe}),Oe=Object(Z.a)({reducer:Ce,middleware:function(e){return e().prepend(ve.a)}});function we(e){var t=Object(E.b)();return Object(l.useMemo)((function(){return Object(N.a)(e,t)}),[])}window.store=Oe;var Se={getTodolistThunk:ke,addTodolistThunk:ge,removeTodolistThunk:Te,chengeNameTodolistThunk:ye,chengeFilterTodolistAction:je},Ae={addTaskThunk:de,removeTaskThunk:pe,updateTaskThunk:fe,getTaskThunk:le},Ie={loginThunk:ae,authMeThunk:te,logoutThunk:ne,removeAlertAction:ue},Ne=a(208),Le=a(192),Me=a(82),Pe=a.n(Me),Ve=d.a.memo((function(e){var t=e.alertList,a=e.onCloseAlert;return Object(l.useEffect)((function(){if(t){var e=t.filter((function(e){return"error"!==e.type}));0!==e.length&&setTimeout((function(){a(e[0].id)}),2e3)}}),[null===t||void 0===t?void 0:t.length]),d.a.createElement("div",{className:Pe.a.alert__block},null===t||void 0===t?void 0:t.map((function(e){return d.a.createElement(Ne.a,{className:Pe.a.alert,severity:e.type,onClose:function(){return a(e.id)},key:e.id},d.a.createElement(Le.a,null,e.title))})))})),We=a(193),De=a(158),He=a(206),Fe=d.a.memo((function(e){var t=e.addTask,a=e.status,n=Object(l.useState)(""),r=Object(m.a)(n,2),o=r[0],i=r[1],c=Object(l.useState)({style:"",textSpan:""}),s=Object(m.a)(c,2),u=s[0],p=s[1],f=function(){o.trim()?(t(o),i("")):p({style:"error",textSpan:"Error"})};return d.a.createElement(We.a,{item:!0,xs:12},d.a.createElement(De.a,{elevation:3,style:{padding:"20px"}},d.a.createElement(He.a,{className:u.style,fullWidth:!0,disabled:"loading"===a,margin:"normal",value:o,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){13===e.charCode&&f(),32!==e.charCode&&p({style:"",textSpan:""})}}),d.a.createElement(g.a,{variant:"contained",color:"primary",onClick:f,disabled:"loading"===a},"Create Task"),d.a.createElement(k.a,null,u.textSpan)))})),Ue=d.a.memo((function(e){var t=e.text,a=e.onChengeTitleHendler,n=Object(l.useState)(!0),r=Object(m.a)(n,2),o=r[0],i=r[1],c=Object(l.useState)(t),s=Object(m.a)(c,2),u=s[0],p=s[1];return d.a.createElement(d.a.Fragment,null,o?d.a.createElement("span",{onDoubleClick:function(){return i(!1)}},u):d.a.createElement(He.a,{onKeyPress:function(e){13===e.charCode&&u.trim()&&(a(u),i(!0))},onChange:function(e){return p(e.target.value)},value:u,type:"text"}))})),Ke=a(210),Be=function(e){var t=e.show,a=e.setValue,n=we(Se).addTodolistThunk,r=Object(l.useCallback)((function(e){n(e)}),[]);return d.a.createElement(Ke.a,{anchor:"left",hideBackdrop:!1,onClose:function(){return a(!1)},open:t},d.a.createElement(We.a,{container:!0,spacing:10},d.a.createElement(o.AddItemForm,{addTask:r})))},Re=function(){var e=Object(l.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],o=we(Ie).logoutThunk,i=Object(E.c)(n.progresSelector),s=Object(E.c)(n.authSelector);return d.a.createElement(h.a,{position:"fixed",className:j.a.header},d.a.createElement(c.NavBar,{show:a,setValue:r}),d.a.createElement(b.a,{className:j.a.header__inner},d.a.createElement("div",{className:j.a.header__menu},d.a.createElement(v.a,{className:j.a.header__icon,edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return r(!0)}},d.a.createElement(x.a,null)),d.a.createElement(k.a,{variant:"h4"},"Todolist")),s?d.a.createElement(g.a,{className:j.a.header__btn,color:"inherit",onClick:function(){o()}},"Logout"):d.a.createElement(d.a.Fragment,null)),i&&d.a.createElement(T.a,{className:j.a.progressbar}))},ze=a(13),Je=a(83),qe=a.n(Je),Qe=a(106),Ge=a.n(Qe),Ye=a(196),Xe=a(202),Ze=a(200),$e=a(201),et=a(211),tt=a(108),at=a.n(tt),nt=a(107),rt=a.n(nt),ot=d.a.memo((function(e){var t=e.id,a=e.item,n=e.removeTask,r=e.chengeTaskTitle,o=e.chengeStatus,c=Object(l.useCallback)((function(e){r(t,a.id,e)}),[t,a.id]);return d.a.createElement(Ze.a,{style:{display:"flex",justifyContent:"space-between"}},"chengeStatus"===a.statusProcess?d.a.createElement($e.a,{size:28}):2===a.status?d.a.createElement(g.a,{disabled:"loading"===a.statusProcess,onClick:function(){return o(t,a.id,0===a.status?2:0)}},d.a.createElement(rt.a,null)):d.a.createElement(et.a,{disabled:"loading"===a.statusProcess,onChange:function(){return o(t,a.id,0===a.status?2:0)},color:"secondary"}),d.a.createElement(i.InputSpan,{text:a.title,onChengeTitleHendler:c}),d.a.createElement(g.a,{variant:"outlined",disabled:"loading"===a.statusProcess,onClick:function(){return n(t,a.id)}},d.a.createElement(at.a,null)))})),it=a(109),ct=a.n(it),st=d.a.memo((function(e){var t=e.title,a=e.tasks,n=e.filter,r=e.chengeFilter,c=e.id,s=e.chengeTitle,u=e.removeTodoList,p=e.entiryStatus,f=we(Ae),m=f.addTaskThunk,h=f.removeTaskThunk,b=f.updateTaskThunk,v=f.getTaskThunk;Object(l.useEffect)((function(){v(c)}),[c]);var T=Object(l.useCallback)((function(e){m({id:c,nameTask:e})}),[c]),y=Object(l.useCallback)((function(e,t){h({id:e,taskId:t})}),[c]),x=Object(l.useCallback)((function(e,t,a){b({id:e,taskId:t,update:{status:a}})}),[c]),_=function(e,t,a){b({id:e,taskId:t,update:{title:a}})},j=a;j&&("active"===n&&(j=a.filter((function(e){return 0===e.status}))),"complete"===n&&(j=a.filter((function(e){return 2===e.status}))));var E=function(e,t){return d.a.createElement(g.a,{color:n===e?"secondary":"primary",onClick:function(){return r(c,e)}},t)};return d.a.createElement(We.a,{className:Ge.a.todolist,item:!0},d.a.createElement(De.a,{elevation:3,style:{padding:"20px"}},d.a.createElement(k.a,{variant:"h3",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},d.a.createElement(i.InputSpan,{text:t,onChengeTitleHendler:function(e){return s(c,e)}}),d.a.createElement(g.a,{onClick:function(){return u(c)},disabled:"loading"===p},d.a.createElement(ct.a,null))),d.a.createElement(o.AddItemForm,{addTask:T,status:p}),void 0===j?null:j.map((function(e){return d.a.createElement(Ye.a,{key:e.id},d.a.createElement(ot,{id:c,item:e,removeTask:y,chengeTaskTitle:_,chengeStatus:x}))})),d.a.createElement(Xe.a,{variant:"text",style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"30px 0 0 0"}},E("all","All"),E("active","Active"),E("complete","Completed"))))})),ut=d.a.memo((function(){var e=Object(E.c)(n.authSelector),t=Object(E.c)(n.todolistArraySelector),a=Object(E.c)(n.allTaskSelector),r=we(Se),o=r.chengeNameTodolistThunk,i=r.removeTodolistThunk,c=r.getTodolistThunk,s=r.chengeFilterTodolistAction;Object(l.useEffect)((function(){c()}),[]);var u=Object(l.useCallback)((function(e,t){o({id:e,text:t})}),[t]),p=Object(l.useCallback)((function(e){i(e)}),[]),f=Object(l.useCallback)((function(e,t){s({idTodolist:e,newfilterTodolist:t})}),[]);return e?d.a.createElement("div",{className:qe.a.todolist},d.a.createElement(We.a,{className:qe.a.todolist__items,container:!0,spacing:10},t.map((function(e){var t=a[e.id];return d.a.createElement(st,{key:e.id,id:e.id,title:e.title,tasks:t,chengeFilter:f,filter:e.filter,removeTodoList:p,chengeTitle:u,entiryStatus:e.entiryStatus})})))):d.a.createElement(ze.a,{to:"/"})})),lt=a(111),dt=a.n(lt),pt=a(194),ft=a(195),mt=a(203),ht=a(204),bt=a(205),vt=a(115),kt=function(){var e=Object(E.c)(n.authSelector),t=we(Ie).loginThunk,a=Object(vt.a)({initialValues:{email:"",password:"",rememderMe:!1},validate:function(e){return e.email.trim()?e.password.trim()?e.password.trim().length<8?{password:"Password is less than 8 characters"}:void 0:{password:"Password is required"}:{email:"Email is required"}},onSubmit:function(){var e=Object(W.a)(V.a.mark((function e(a){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return e?d.a.createElement(ze.a,{to:"/todolist"}):d.a.createElement(We.a,{container:!0,justify:"center",alignItems:"center"},d.a.createElement(De.a,{className:dt.a.login,elevation:3},d.a.createElement("form",{onSubmit:a.handleSubmit},d.a.createElement(pt.a,null,d.a.createElement(ft.a,null,"Login"),d.a.createElement(mt.a,null,d.a.createElement(He.a,{label:"Email",name:"email",margin:"normal",value:a.values.email,onChange:a.handleChange}),a.errors.email&&d.a.createElement("div",null,a.errors.email),d.a.createElement(He.a,{label:"Password",margin:"normal",name:"password",value:a.values.password,onChange:a.handleChange}),a.errors.password&&d.a.createElement("div",null,a.errors.password),d.a.createElement(ht.a,{control:d.a.createElement(bt.a,null),label:"Remamder Me",name:"rememberMe",value:a.values.rememderMe}),d.a.createElement(g.a,{disabled:!(!a.errors.email&&!a.errors.password),type:"submit",variant:"contained",color:"primary"},"Send"))))))},gt=function(){return d.a.createElement("main",null,d.a.createElement(ze.d,null,d.a.createElement(ze.b,{path:"/todolist",component:ut}),d.a.createElement(ze.b,{path:"/",component:kt})))},Tt=a(114),yt=a.n(Tt),xt=function(){var e=Object(E.c)(n.initialSelect),t=Object(E.c)(n.alertSelect),a=we(Ie),o=a.authMeThunk,i=a.removeAlertAction;Object(l.useEffect)((function(){o()}),[]);return e?d.a.createElement("div",{style:{height:"100vh"}},d.a.createElement(Re,null),d.a.createElement("div",{className:"container"},d.a.createElement(gt,null)),d.a.createElement(r.AlertComponent,{alertList:t,onCloseAlert:function(e){i({id:e})}})):d.a.createElement("div",{className:"install_app"},d.a.createElement("img",{className:"install_app__icon",src:yt.a,alt:" "}))},_t=a(53);f.a.render(d.a.createElement(_t.a,null,d.a.createElement(E.a,{store:Oe},d.a.createElement(xt,null))),document.getElementById("root"))},47:function(e,t,a){e.exports={container:"Header_container__x8HgT",install_app:"Header_install_app__LSKCf",install_app__icon:"Header_install_app__icon__3P5vD",header:"Header_header__zJoaA",header__inner:"Header_header__inner__t3QNQ",header__menu:"Header_header__menu__1UnAI",header__icon:"Header_header__icon__2CtfG",progressbar:"Header_progressbar__2T9AT"}},82:function(e,t,a){e.exports={alert__block:"alertComponent_alert__block__1M-bO",alert:"alertComponent_alert__2tuKs"}},83:function(e,t,a){e.exports={todolist:"CreateTodoList_todolist__1WVMI",todolist__items:"CreateTodoList_todolist__items__KWT_c"}}},[[126,1,2]]]);
//# sourceMappingURL=main.897ab1ad.chunk.js.map