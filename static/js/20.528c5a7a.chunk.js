(this["webpackJsonpshlok-zanwar"]=this["webpackJsonpshlok-zanwar"]||[]).push([[20],{1220:function(e,t,n){"use strict";n.r(t);var r=n(2),a=(n(507),n(432)),o=n.n(a),c=n(490),i=n(28),s=n(1),u=n.n(s),l=n(508),h=n(133),d=n(355),f=n(472),b=n(202),v=n(464),j=n(465),p=function e(t){Object(j.a)(this,e),this.data=t,this.left=null,this.right=null},g=function(){function e(t){Object(j.a)(this,e),this.root=t,this.traversal=[]}return Object(v.a)(e,[{key:"deleteTree",value:function(){this.root=null}},{key:"getRootNode",value:function(){return this.root}},{key:"insertNode",value:function(e){var t=new p(e);return this.traversal=[],null===this.root||void 0===this.root?this.root=t:this.insertRecursive(this.root,t),this.traversal.push(e),this.traversal}},{key:"insertRecursive",value:function(e,t){this.traversal.push(e.data),t.data<e.data?null===e.left||void 0===e.left?e.left=t:this.insertRecursive(e.left,t):null===e.right||void 0===e.left?e.right=t:this.insertRecursive(e.right,t)}},{key:"findInorderSuccessor",value:function(e){for(var t=e.data;null!=e.left;)t=e.left.data,e=e.left;return t}},{key:"deleteNode",value:function(e){this.root=this.deleteRecursive(this.root,e)}},{key:"deleteRecursive",value:function(e,t){if(null===e)return e;if(t<e.data)e.left=this.deleteRecursive(e.left,t);else if(t>e.data)e.right=this.deleteRecursive(e.right,t);else{if(null===e.left)return e.right;if(null===e.right)return e.left;e.data=this.findInorderSuccessor(e.right),e.right=this.deleteRecursive(e.right,e.data)}return e}},{key:"breathFT",value:function(e){if(null===e||void 0===e)return[];var t=[[e]],n=[[e.data]],r=this.treeHeight(e),a=0,o=0;for(a=0;a<r;a++){var c=[],i=[];for(o=0;o<Math.pow(2,a);o++)null===t[a][o]||void 0===t[a][o]?(c.push(null),c.push(null),i.push(0),i.push(0)):(c.push(t[a][o].left),c.push(t[a][o].right),i.push(t[a][o].left?t[a][o].left.data:0),i.push(t[a][o].right?t[a][o].right.data:0));t.push(c),n.push(i)}return n}},{key:"treeHeight",value:function(e){if(null==e)return-1;var t=this.treeHeight(e.left),n=this.treeHeight(e.right);return t>n?t+1:n+1}}]),e}();var m=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],u=Object(s.useState)(!0),v=Object(i.a)(u,2),j=v[0],p=v[1],m=Object(s.useState)(""),O=Object(i.a)(m,2),x=O[0],w=O[1],S=Object(h.b)().enqueueSnackbar,k=Object(s.useState)(-2),y=Object(i.a)(k,2),N=y[0],T=y[1],C=Object(s.useState)(!0),R=Object(i.a)(C,2),I=R[0],D=R[1],E=Object(s.useState)(new g(localStorage.getItem("BSTRoot")?JSON.parse(localStorage.getItem("BSTRoot")):null)),z=Object(i.a)(E,2),B=z[0],F=(z[1],Object(s.useState)(B.breathFT(B.getRootNode()))),H=Object(i.a)(F,2),A=H[0],J=H[1];Object(s.useEffect)((function(){L(),localStorage.setItem("BSTRoot",JSON.stringify(B.getRootNode()))}),[A]);var L=function(){var e,t,n,r=[],o=B.treeHeight(B.getRootNode())+1;for(e=0;e<o;e++){var c=Math.pow(2,o-e)-1,i=[];for(t=0;t<A[e].length;t++)if(i.push(A[e][t]),t<A[e].length-1)for(n=0;n<c;n++)i.push(0);r.push(i)}a(r)},M=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t){return setTimeout.apply(void 0,[t,e].concat(n))}))},P=0,W=function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(700);case 2:if(T(t[P]),!(++P<t.length)){e.next=7;break}return e.next=7,W(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t,n;for(t=0;t<A.length;t++)for(n=0;n<A[t].length;n++)if(A[t][n]===e)return!0;return!1};function V(){return(V=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!q(t)){e.next=3;break}return S(t+" is already present !!",{variant:"error"}),e.abrupt("return");case 3:if((n=B.insertNode(t)).push(N),J(B.breathFT(B.getRootNode())),S(t+" added to binary search tree.",{variant:"success"}),!I){e.next=10;break}return e.next=10,W(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(e){e.preventDefault();var t,n=e.target.value;return"ClearSearch"===n?(T(-2),w(""),void p(!0)):"ClearTree"===n?(B.deleteTree(),J(B.breathFT(B.getRootNode())),void p(!0)):""===x||x<=0?(S("Invalid input !!",{variant:"error"}),void w("")):void("Insert"===n?(!function(e){V.apply(this,arguments)}(parseInt(x)),w(""),p(!0)):"Delete"===n?(t=parseInt(x),q(t)?(B.deleteNode(t),J(B.breathFT(B.getRootNode())),S(t+" deleted from binary search tree.",{variant:"success"})):S(t+" not found !!",{variant:"error"}),w(""),p(!0)):"Search"===n&&(!function(e){var t,n;for(t=0;t<A.length;t++)for(n=0;n<A[t].length;n++)if(A[t][n]===e)return T(e),void S(e+" found. Highlighted in green.",{variant:"success"});S(e+" not found !!",{variant:"error"})}(parseInt(x)),w(""),p(!0)))};return Object(r.jsxs)("div",{className:"main-outer-div",children:[Object(r.jsxs)("div",{className:"form-div",children:[Object(r.jsx)("input",{id:"input_box",type:"number",placeholder:"Data",value:x,className:"operation-input",onChange:function(e){w(e.target.value)}}),Object(r.jsx)("button",{onClick:Z,className:"operation-button",value:"Insert",children:"Insert"}),Object(r.jsx)("button",{onClick:Z,className:"operation-button",value:"Delete",children:"Delete"}),Object(r.jsx)("button",{onClick:Z,className:"operation-button",value:"Search",children:"Search"}),Object(r.jsx)("button",{onClick:Z,className:"function-button",style:{marginLeft:"80px"},value:"ClearSearch",children:"Clear Search"}),Object(r.jsx)("button",{onClick:Z,className:"function-button",value:"ClearTree",children:"Clear Tree"}),Object(r.jsx)("span",{children:Object(r.jsx)(d.a,{title:"Show Animation",placement:"bottom",arrow:!0,children:Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",checked:I,onChange:function(){D(!I)}}),Object(r.jsx)("span",{className:"slider round"})]})})}),Object(r.jsx)(d.a,{title:"Refresh lines",placement:"bottom",arrow:!0,children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:function(){p(!0)},className:"function-button",children:Object(r.jsx)(b.a,{style:{fontSize:"21px"}})})})}),Object(r.jsx)(d.a,{title:"Source Code",placement:"bottom",arrow:!0,children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:function(){window.location.href="https://github.com/Shlok-Zanwar/Binary-Tree-Visualization"},className:"function-button",children:Object(r.jsx)(f.a,{style:{fontSize:"21px"}})})})})]}),Object(r.jsx)(l.a,{grid:n,loading:j,setLoading:p,search:N})]})};n(200);t.default=function(){var e=Object(h.b)(),t=e.enqueueSnackbar,n=e.closeSnackbar;document.title="BST Visualization | Shlok Zanwar";var a=function(e){return Object(r.jsx)(u.a.Fragment,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{onClick:function(){!function(e){localStorage.setItem("dontShowTreeSnack",!0),n(e)}(e)},style:{background:"transparent",border:"none",cursor:"pointer",color:"#fc28b2",paddingRight:"8px",textDecoration:"underline",fontWeight:"bolder"},children:"Dont show again"}),Object(r.jsx)("div",{onClick:function(){n(e)},style:{background:"transparent",border:"none",cursor:"pointer",color:"#fc28b2",textDecoration:"underline",fontWeight:"bolder"},children:"Dismiss"})]})})},o=window.matchMedia("only screen and (max-width: 1920px)").matches;return Object(s.useEffect)((function(){var e=document.getElementsByTagName("meta").viewport.content;return document.getElementsByTagName("meta").viewport.content=o?"width=1920;":"width=device-width, initial-scale=1",function(){document.getElementsByTagName("meta").viewport.content=e}}),[]),Object(s.useEffect)((function(){localStorage.getItem("dontShowTreeSnack")||t("This page is recommended to be used on desktop screen.",{variant:"warning",autoHideDuration:5e3,action:a})}),[]),Object(r.jsx)("div",{children:Object(r.jsx)(m,{})})}},432:function(e,t,n){e.exports=n(201)},464:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},465:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},490:function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},507:function(e,t,n){},508:function(e,t,n){"use strict";var r=n(2),a=n(1),o=n(593),c=n.n(o);t.a=function(e){var t=e.grid,n=e.loading,o=e.setLoading,i=e.search;Object(a.useEffect)((function(){var e=function(e,t){var n,r=arguments,a=this;return function(o){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(a,r)}),t)}}((function(){o(!0)}),500);window.addEventListener("resize",e)})),Object(a.useEffect)((function(){setTimeout((function(){return o(!1)}),100)}),[n]);var s=function(e,t){return e.map((function(e,n){var a=e===i?" searched":0===e?" transparent":"";return Object(r.jsx)("div",{className:"tree-node-div r".concat(t.toString(),"c").concat(n.toString()," ").concat(a),children:0===e?"":e},"r".concat(t.toString(),"c").concat(n.toString()))}))};return Object(r.jsx)("div",{className:"tree-outer-div",children:Object(r.jsxs)("div",{className:"tree-main-div",children:[t.map((function(e,t){return Object(r.jsx)("div",{className:"rows",children:s(e,t)},"r"+t.toString())})),n?null:t.map((function(e,n){return e.map((function(e,a){if(0!==e&&n<t.length-1){var o=a,i=a+Math.pow(2,t.length-n-1);return Object(r.jsxs)(r.Fragment,{children:[0!==t[n+1][o]&&Object(r.jsx)(c.a,{from:"r".concat(n,"c").concat(a),to:"r".concat(n+1,"c").concat(o),zIndex:-1,borderColor:"rgba(255, 84, 17, 1)",borderWidth:5,fromAnchor:"center"},"r".concat(n,"c").concat(a,"r").concat(n+1,"c").concat(o)),0!==t[n+1][i]&&Object(r.jsx)(c.a,{from:"r".concat(n,"c").concat(a),to:"r".concat(n+1,"c").concat(i),zIndex:-1,borderColor:"rgba(255, 84, 17, 1)",borderWidth:5,fromAnchor:"center"},"r".concat(n,"c").concat(a,"r").concat(n+1,"c").concat(i))]})}}))}))]})})}}}]);
//# sourceMappingURL=20.528c5a7a.chunk.js.map