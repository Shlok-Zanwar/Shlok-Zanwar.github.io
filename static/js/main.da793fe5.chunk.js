(this["webpackJsonpapp-react"]=this["webpackJsonpapp-react"]||[]).push([[0],{18:function(e,o,t){},19:function(e,o,t){"use strict";t.r(o);var n=t(1),d=t(2),i=t.n(d),c=t(12),s=t.n(c),a=(t(18),t(3));var r=function(e){var o=Object(d.useState)(e.edit?e.edit.value:""),t=Object(a.a)(o,2),i=t[0],c=t[1],s=Object(d.useRef)(null);Object(d.useEffect)((function(){s.current.focus()}));var r=function(e){c(e.target.value)};return Object(n.jsx)("form",{className:"todo-form",onSubmit:function(o){o.preventDefault(),e.edit?e.onSubmit({id:Math.floor(1e5*Math.random()),text:i,todoList:e.edit.todoList,doing:e.edit.doing,done:e.edit.done}):e.onSubmit({id:Math.floor(1e5*Math.random()),text:i,todoList:!0,doing:!1,done:!1}),c("")},children:e.edit?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",placeholder:"Update your todo",value:i,className:"todo-input",onChange:r,ref:s}),Object(n.jsx)("button",{className:"todo-button edit",children:"Update Todo"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",placeholder:"Add a todo",value:i,className:"todo-input",onChange:r,ref:s}),Object(n.jsx)("button",{className:"todo-button",children:"Add Todo"})]})})},u=t(6),l=t(5),j=t(4),b=t(8);var O=function(e){var o=e.todos,t=(e.removeTodo,e.updateTodo),i=(e.sendToDo,e.sendToDoing),c=e.sendToDone,s=Object(d.useState)({id:null,value:"",todoList:!0,doing:!1,done:!1}),u=Object(a.a)(s,2),O=u[0],x=u[1];return O.id?Object(n.jsx)(r,{edit:O,onSubmit:function(e){t(O.id,e),x({id:null,value:"",todoList:!0,doing:!1,done:!1})}}):o.map((function(e,o){return e.todoList?Object(n.jsxs)("div",{className:"todo-row",children:[Object(n.jsx)("div",{children:e.text},e.id),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(l.a,{onClick:function(){return x({id:e.id,value:e.text,todoList:!0,doing:!1,done:!1})},className:"edit-icon"}),Object(n.jsx)(b.a,{onClick:function(){return i(e.id)}}),Object(n.jsx)(j.b,{onClick:function(){return c(e.id)}})]})]},o):null}))};var x=function(e){var o=e.todos,t=(e.removeTodo,e.updateTodo),i=e.sendToDo,c=(e.sendToDoing,e.sendToDone),s=Object(d.useState)({id:null,value:"",todoList:!1,doing:!0,done:!1}),u=Object(a.a)(s,2),b=u[0],O=u[1];return b.id?Object(n.jsx)(r,{edit:b,onSubmit:function(e){t(b.id,e),O({id:null,value:"",todoList:!1,doing:!0,done:!1})}}):o.map((function(e,o){return e.doing?Object(n.jsxs)("div",{className:"todo-row",children:[Object(n.jsx)("div",{children:e.text},e.id),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(l.a,{onClick:function(){return O({id:e.id,value:e.text,todoList:!1,doing:!0,done:!1})},className:"edit-icon"}),Object(n.jsx)(j.a,{onClick:function(){return i(e.id)}}),Object(n.jsx)(j.b,{onClick:function(){return c(e.id)}})]})]},o):null}))},v=t(9);var f=function(e){var o=e.todos,t=e.removeTodo,i=e.updateTodo,c=e.sendToDo,s=(e.sendToDoing,e.sendToDone,Object(d.useState)({id:null,value:"",todoList:!1,doing:!1,done:!0})),u=Object(a.a)(s,2),b=u[0],O=u[1];return b.id?Object(n.jsx)(r,{edit:b,onSubmit:function(e){i(b.id,e),O({id:null,value:"",todoList:!1,doing:!1,done:!0})}}):o.map((function(e,o){return e.done?Object(n.jsxs)("div",{className:"todo-row",children:[Object(n.jsx)("div",{children:e.text},e.id),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(l.a,{onClick:function(){return O({id:e.id,value:e.text,todoList:!1,doing:!1,done:!0})},className:"edit-icon"}),Object(n.jsx)(j.a,{onClick:function(){return c(e.id)}}),Object(n.jsx)(v.a,{onClick:function(){return t(e.id)}})]})]},o):null}))};var m=function(e){var o=e.todos,t=e.deleteAllDone,d=e.removeTodo,i=e.updateTodo,c=e.sendToDo,s=e.sendToDoing,a=e.sendToDone;return Object(u.a)(o).filter((function(e){return e.done})).length<2?Object(n.jsxs)("div",{className:"todo-app",children:[Object(n.jsx)("h2",{children:"Done !!!"}),Object(n.jsx)(f,{todos:o,removeTodo:d,updateTodo:i,sendToDo:c,sendToDoing:s,sendToDone:a})]}):Object(n.jsxs)("div",{className:"todo-app",children:[Object(n.jsx)("h2",{children:"Done !!!"}),Object(n.jsx)(f,{todos:o,removeTodo:d,updateTodo:i,sendToDo:c,sendToDoing:s,sendToDone:a}),Object(n.jsx)("button",{className:"delete-all-button",onClick:t,children:"Delete Done"})]})};var T=function(){var e=Object(d.useState)(localStorage.getItem("savedTodos")?JSON.parse(localStorage.getItem("savedTodos")):[]),o=Object(a.a)(e,2),t=o[0],i=o[1];Object(d.useEffect)((function(){localStorage.setItem("savedTodos",JSON.stringify(t))}),[t]);var c=function(e,o){o.text&&!/^\s*$/.test(o.text)&&i((function(t){return t.map((function(t){return t.id===e?o:t}))}))},s=function(e){var o=Object(u.a)(t).filter((function(o){return o.id!==e}));i(o)},l=function(e){var o=t.map((function(o){return o.id===e&&(o.todoList=!0,o.doing=!1,o.done=!1),o}));i(o)},j=function(e){var o=t.map((function(o){return o.id===e&&(o.todoList=!1,o.doing=!0,o.done=!1),o}));i(o)},b=function(e){var o=t.map((function(o){return o.id===e&&(o.todoList=!1,o.doing=!1,o.done=!0),o}));i(o)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"todo-app",children:[Object(n.jsx)("h2",{children:"To Do's"}),Object(n.jsx)(r,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var o=[e].concat(Object(u.a)(t));i(o)}}}),Object(n.jsx)(O,{todos:t,removeTodo:s,updateTodo:c,sendToDo:l,sendToDoing:j,sendToDone:b})]}),Object(n.jsxs)("div",{className:"todo-app",children:[Object(n.jsx)("h2",{children:"Doing ...."}),Object(n.jsx)(x,{todos:t,removeTodo:s,updateTodo:c,sendToDo:l,sendToDoing:j,sendToDone:b})]}),Object(n.jsx)(m,{todos:t,deleteAllDone:function(){var e=Object(u.a)(t).filter((function(e){return!e.done}));i(e)},removeTodo:s,updateTodo:c,sendToDo:l,sendToDoing:j,sendToDone:b})]})};var p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"To-Do App - Shlok Zanwar"}),Object(n.jsx)(T,{})]})})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.da793fe5.chunk.js.map