(this["webpackJsonpshlok-zanwar"]=this["webpackJsonpshlok-zanwar"]||[]).push([[33],{1216:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var o=n(2),a=n(42),i=n(28),r=n(1),c=n(582).a.TextArea;var d=function(t){var e=Object(r.useState)(t.edit?t.edit.value:""),n=Object(i.a)(e,2),a=n[0],d=n[1],s=Object(r.useRef)(null),l=["todo-row blue","todo-row orange","todo-row pink","todo-row purple","todo-row red","todo-row green"],u=["Blue","Orange","Pink","Purple","Red","Green"],j=Object(r.useState)(t.edit.class+" color-select-div"),f=Object(i.a)(j,2),p=f[0],b=f[1],x=Object(r.useState)(!1),h=Object(i.a)(x,2),O=h[0],m=h[1];Object(r.useEffect)((function(){window.innerWidth>=1350&&s.current.focus()}));var g=function(t){d(t.target.value)},v=Object(o.jsx)("div",{className:p,onClick:function(t){return function(t){var e=t.target.className.split(" ");b(l[(l.indexOf(e[0]+" "+e[1])+1)%l.length]+" color-select-div")}(t)},onContextMenu:function(t){return function(t){t.preventDefault(),m(!0)}(t)},children:u[l.indexOf(p.slice(0,-17))]});return O&&(v=l.map((function(t,e){return Object(o.jsx)("div",{className:t+" color-select-div",onClick:function(t){b(t.target.className),m(!1)},children:u[e]},u[e])}))),Object(o.jsx)("form",{className:"todo-form",style:{display:"flex",paddingRight:"10px",paddingLeft:"10px"},onSubmit:function(e){e.preventDefault(),t.edit.id?t.onSubmit({id:Math.floor(1e5*Math.random()),text:a,list:t.edit.list,class:p.slice(0,-17)}):t.onSubmit({id:Math.floor(1e5*Math.random()),text:a,list:"todo",class:l[Math.floor(Math.random()*l.length)]}),d("")},children:t.edit.id?Object(o.jsxs)("div",{style:{width:"100%"},onClick:function(){m(!1)},children:[Object(o.jsxs)("div",{className:"edit-form",style:{display:"inline-flex",width:"100%"},children:[Object(o.jsx)(c,{autoSize:!0,type:"text",placeholder:"Update your todo",value:a,onChange:g,ref:s,style:{padding:"14px 32px 14px 16px",borderRadius:"4px 0 0 4px",border:"2px solid #5d0cff",outline:"none",background:"transparent",color:"#fff"}}),Object(o.jsx)("button",{className:"todo-button edit",style:{flex:"1",minWidth:"52px",padding:"0px"},children:"Update"})]}),v]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c,{autoSize:!0,type:"text",placeholder:"Add a todo",value:a,style:{padding:"14px 32px 14px 16px",borderRadius:"4px 0 0 4px",border:"2px solid #5d0cff",outline:"none",background:"transparent",color:"#fff"},onChange:g,ref:s}),Object(o.jsx)("button",{className:"todo-button",style:{flex:"1",minWidth:"66px",padding:"0px"},children:"Add Todo"})]})})},s=n(591),l=n(105),u=n(116),j=n(355);var f=function(t){var e=t.todos,n=t.updateTodo,a=t.sendToDoing,c=t.sendToDone,f=t.handleDrag,p=t.handlePositionChange,b=t.allowDrop,x=t.setShowDelete,h=Object(r.useState)({id:null,value:"",list:"todo",class:""}),O=Object(i.a)(h,2),m=O[0],g=O[1];return m.id?Object(o.jsx)(d,{edit:m,onSubmit:function(t){n(m.id,t),g({id:null,value:"",list:"todo",class:""})}}):e.map((function(t,e){return"todo"===t.list?Object(o.jsxs)("div",{className:t.class,draggable:!0,onDragStart:function(e){return f(e,JSON.stringify(t))},onDragEnd:function(){return x(!1)},onDrop:function(e){return p(e,t)},onDragOver:function(t){return b(t)},onDoubleClick:function(){return g({id:t.id,value:t.text,list:"todo",class:t.class})},"data-aos":"zoom-in","data-aos-delay":100*e+100,"data-aos-anchor-placement":"top-bottom",children:[Object(o.jsx)("div",{children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(j.a,{title:"Edit Text",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(s.a,{onClick:function(){return g({id:t.id,value:t.text,list:"todo",class:t.class})},className:"edit-icon"})})}),Object(o.jsx)(j.a,{title:"Send to Doing",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(u.c,{onClick:function(){return a(t.id)}})})}),Object(o.jsx)(j.a,{title:"Send to Done",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(l.c,{onClick:function(){return c(t.id)}})})})]})]},t.id):null}))};var p=function(t){var e=t.todos,n=t.updateTodo,a=t.sendToDo,c=t.sendToDone,u=t.handleDrag,f=t.handlePositionChange,p=t.allowDrop,b=t.setShowDelete,x=Object(r.useState)({id:null,value:"",list:"doing",class:""}),h=Object(i.a)(x,2),O=h[0],m=h[1];return O.id?Object(o.jsx)(d,{edit:O,onSubmit:function(t){n(O.id,t),m({id:null,value:"",list:"doing",class:""})}}):e.map((function(t,e){return"doing"===t.list?Object(o.jsxs)("div",{className:t.class,draggable:!0,onDragStart:function(e){return u(e,JSON.stringify(t))},onDragEnd:function(){return b(!1)},onDrop:function(e){return f(e,t)},onDragOver:function(t){return p(t)},onDoubleClick:function(){return m({id:t.id,value:t.text,list:"doing",class:t.class})},"data-aos":"zoom-in","data-aos-delay":100*e+100,"data-aos-anchor-placement":"top-bottom",children:[Object(o.jsx)("div",{children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(j.a,{title:"Edit Text",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(s.a,{onClick:function(){return m({id:t.id,value:t.text,list:"doing",class:t.class})},className:"edit-icon"})})}),Object(o.jsx)(j.a,{title:"Send to To-Do's",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(l.b,{onClick:function(){return a(t.id)}})})}),Object(o.jsx)(j.a,{title:"Send to Done",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(l.c,{onClick:function(){return c(t.id)}})})})]})]},t.id):null}))};var b=function(t){var e=t.todos,n=t.deleteAllDone,i=t.allowDrop,r=t.removeTodo,c=t.showDelete;return Object(a.a)(e).filter((function(t){return"done"===t.list})).length>1||c?Object(o.jsx)("button",{className:"delete-all-button",onClick:n,onDragOver:function(t){return i(t)},onDrop:function(t){return r(JSON.parse(t.dataTransfer.getData("todo")).id)},children:"Delete Done"}):null},x=n(592);var h=function(t){var e=t.todos,n=t.removeTodo,a=t.updateTodo,c=t.sendToDo,u=t.handleDrag,f=t.handlePositionChange,p=t.allowDrop,b=t.setShowDelete,h=Object(r.useState)({id:null,value:"",list:"done",class:""}),O=Object(i.a)(h,2),m=O[0],g=O[1];return m.id?Object(o.jsx)(d,{edit:m,onSubmit:function(t){a(m.id,t),g({id:null,value:"",list:"done",class:""})}}):e.map((function(t,e){return"done"===t.list?Object(o.jsxs)("div",{className:t.class,draggable:!0,onDragStart:function(e){return u(e,JSON.stringify(t))},onDragEnd:function(){return b(!1)},onDrop:function(e){return f(e,t)},onDragOver:function(t){return p(t)},onDoubleClick:function(){return g({id:t.id,value:t.text,list:"done",class:t.class})},"data-aos":"zoom-in","data-aos-delay":100*e+100,"data-aos-anchor-placement":"top-bottom",children:[Object(o.jsx)("div",{children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(j.a,{title:"Edit Text",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(s.a,{onClick:function(){return g({id:t.id,value:t.text,list:"done",class:t.class})},className:"edit-icon"})})}),Object(o.jsx)(j.a,{title:"Send to To-Do's",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(l.b,{onClick:function(){return c(t.id)}})})}),Object(o.jsx)(j.a,{title:"Delete To-do",placement:"top",arrow:!0,children:Object(o.jsx)("span",{children:Object(o.jsx)(x.a,{onClick:function(){return n(t.id)}})})})]})]},t.id):null}))},O=n(133);var m=function(){var t=Object(r.useState)(localStorage.getItem("savedTodos")?JSON.parse(localStorage.getItem("savedTodos")):[]),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),l=Object(i.a)(s,2),u=l[0],j=l[1],x=Object(O.b)().enqueueSnackbar;Object(r.useEffect)((function(){localStorage.setItem("savedTodos",JSON.stringify(n))}),[n]),Object(r.useEffect)((function(){if("v1"!==localStorage.getItem("update_version")){var t=["todo-row blue","todo-row orange","todo-row pink","todo-row purple","todo-row red","todo-row green"],e=[],o="";n.map((function(n){o=n.todoList?"todo":n.doing?"doing":"done";var a={id:n.id,text:n.text,list:o,class:t[Math.floor(Math.random()*t.length)]};e.push(a)})),c(e),localStorage.setItem("update_version","v1")}}),[]);var m=function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))},g=function(t){var e=Object(a.a)(n).filter((function(e){return e.id!==t}));c((function(t){return c(e)}))},v=function(t){var e=n.map((function(e){return e.id===t&&(e.list="todo"),e}));c(e)},D=function(t){var e=n.map((function(e){return e.id===t&&(e.list="doing"),e}));c(e)},w=function(t){var e=n.map((function(e){return e.id===t&&(e.list="done"),e}));x("Yayyy !! You completed a todo. ",{variant:"success"}),c(e)},S=function(t,e){t.dataTransfer.setData("todo",e),j(!0)},T=function(t,e){var o=JSON.parse(t.dataTransfer.getData("todo"));o.list=e.list;var a,i=[];for(a=0;a<n.length;a++)n[a].id!==o.id&&i.push(n[a]),n[a].id===e.id&&i.push(o);j(!1),c((function(t){return c(i)}))},N=function(t){t.preventDefault()};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"todo-app",onDrop:function(t){return function(t){var e=JSON.parse(t.dataTransfer.getData("todo")).id;v(e),j(!1)}(t)},onDragOver:function(t){return N(t)},children:[Object(o.jsx)("h2",{className:"todo-name",children:"To Do's"}),Object(o.jsx)(d,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(a.a)(n));c(e)}},edit:{class:"todo-row blue"},newTodo:!0}),Object(o.jsx)(f,{todos:n.filter((function(t){return"todo"===t.list})),updateTodo:m,sendToDoing:D,sendToDone:w,handleDrag:S,handlePositionChange:T,allowDrop:N,setShowDelete:j})]}),Object(o.jsxs)("div",{className:"todo-app",onDrop:function(t){return function(t){var e=JSON.parse(t.dataTransfer.getData("todo")).id;D(e),j(!1)}(t)},onDragOver:function(t){return N(t)},children:[Object(o.jsx)("h2",{className:"todo-name",children:"Doing ...."}),Object(o.jsx)(p,{todos:n.filter((function(t){return"doing"===t.list})),updateTodo:m,sendToDo:v,sendToDone:w,handleDrag:S,handlePositionChange:T,allowDrop:N,setShowDelete:j})]}),Object(o.jsxs)("div",{className:"todo-app extra-padding",onDrop:function(t){return function(t){var e=JSON.parse(t.dataTransfer.getData("todo")).id;w(e),j(!1)}(t)},onDragOver:function(t){return N(t)},children:[Object(o.jsx)("h2",{className:"todo-name",children:"Done !!!"}),Object(o.jsx)(h,{todos:n.filter((function(t){return"done"===t.list})),removeTodo:g,updateTodo:m,sendToDo:v,handleDrag:S,handlePositionChange:T,allowDrop:N,setShowDelete:j}),Object(o.jsx)(b,{todos:n,deleteAllDone:function(){var t=Object(a.a)(n).filter((function(t){return"done"!==t.list}));c(t)},allowDrop:N,removeTodo:g,showDelete:u})]})]})},g=n(57);function v(){return document.title="To-Do App | Shlok Zanwar",Object(r.useEffect)((function(){window.scrollTo(0,0);var t=document.getElementsByTagName("meta").viewport.content;return document.getElementsByTagName("meta").viewport.content="width=device-width, initial-scale=1",function(){document.getElementsByTagName("meta").viewport.content=t}}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"main-outer-todo-div","data-aos":"fade-up",children:[Object(o.jsx)("div",{children:Object(o.jsx)(g.b,{className:"todo-heading",to:"/blogs/todo-app",children:"To-Do App"})}),Object(o.jsx)(m,{})]})})}}}]);
//# sourceMappingURL=33.93592077.chunk.js.map