(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1006:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(960),r=(a(973),a(194),a(195)),c=(a(0),a(45)),o=a(59),l=(a(965),a(239),a(1007)),s=a(245),i=function(e){var t=Object(c.c)();Object(o.a)();return Object(r.useQuery)("getprofile",l.a,{onSuccess:function(e){t(Object(s.a)(e))},onError:function(e){Object(n.a)(e.response.data.message,"error")}})}},1007:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(958),r=a.n(n),c=a(959),o=a(957),l=function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{token:localStorage.getItem("token")}},e.next=3,o.a.get("users",n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},1074:function(e,t,a){"use strict";var n=a(1),r=a(5),c=a(0),o=a.n(c),l=a(2),s=a(8),i=a(869),u=a(919),m=a(947),p=a(941),g=a(905),f=a(78),d=a(247),h=a(248),b=a(74),E=a(873),v=o.a.createElement(h.a,null),P=o.a.createElement(d.a,null),O=o.a.createElement(d.a,null),j=o.a.createElement(h.a,null),w=o.a.forwardRef(function(e,t){var a=e.backIconButtonProps,c=e.count,l=e.nextIconButtonProps,s=e.onChangePage,i=e.page,u=e.rowsPerPage,m=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),p=Object(b.a)();return o.a.createElement("div",Object(n.a)({ref:t},m),o.a.createElement(E.a,Object(n.a)({onClick:function(e){s(e,i-1)},disabled:0===i,color:"inherit"},a),"rtl"===p.direction?v:P),o.a.createElement(E.a,Object(n.a)({onClick:function(e){s(e,i+1)},disabled:i>=Math.ceil(c/u)-1,color:"inherit"},l),"rtl"===p.direction?O:j))}),k=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(n)},x=[10,25,50,100],N=o.a.forwardRef(function(e,t){var a,c=e.ActionsComponent,s=void 0===c?w:c,d=e.backIconButtonProps,h=e.classes,b=e.colSpan,E=e.component,v=void 0===E?p.a:E,P=e.count,O=e.labelDisplayedRows,j=void 0===O?k:O,N=e.labelRowsPerPage,C=void 0===N?"Rows per page:":N,S=e.nextIconButtonProps,y=e.onChangePage,R=e.onChangeRowsPerPage,I=e.page,A=e.rowsPerPage,B=e.rowsPerPageOptions,D=void 0===B?x:B,U=e.SelectProps,L=void 0===U?{}:U,M=Object(r.a)(e,["ActionsComponent","backIconButtonProps","classes","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);v!==p.a&&"td"!==v||(a=b||1e3);var z=L.native?"option":u.a;return o.a.createElement(v,Object(n.a)({className:h.root,colSpan:a,ref:t},M),o.a.createElement(g.a,{className:h.toolbar},o.a.createElement("div",{className:h.spacer}),D.length>1&&o.a.createElement(f.a,{color:"inherit",variant:"caption",className:h.caption},C),D.length>1&&o.a.createElement(m.a,Object(n.a)({classes:{select:h.select,icon:h.selectIcon},input:o.a.createElement(i.a,{className:Object(l.a)(h.input,h.selectRoot)}),value:A,onChange:R},L),D.map(function(e){return o.a.createElement(z,{className:h.menuItem,key:e,value:e},e)})),o.a.createElement(f.a,{color:"inherit",variant:"caption",className:h.caption},j({from:0===P?0:I*A+1,to:Math.min(P,(I+1)*A),count:P,page:I})),o.a.createElement(s,{className:h.actions,backIconButtonProps:d,count:P,nextIconButtonProps:S,onChangePage:y,page:I,rowsPerPage:A})))});t.a=Object(s.a)(function(e){return{root:{color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12),"&:last-child":{padding:0}},toolbar:{height:56,minHeight:56,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{top:1},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}},{name:"MuiTablePagination"})(N)},1379:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),c=a.n(r),o=a(876),l=(a(32),a(18)),s=a(9),i=a(2),u=a(927),m=a(78),p=a(914),g=Object(o.a)(function(){return{root:{}}}),f=function(e){var t=e.className,a=e.AllUserData,n=Object(s.a)(e,["className","AllUserData"]),r=g();return c.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),c.a.createElement(u.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(u.a,{item:!0},c.a.createElement(m.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Management"),c.a.createElement(m.a,{component:"h1",variant:"h3"},"Currnt Care Plan(",null===a||void 0===a?void 0:a.length,")")),c.a.createElement(u.a,{item:!0},c.a.createElement(p.a,{color:"primary",variant:"contained"},"Add customer"))))},d=a(21),h=a(40),b=a.n(h),E=a(907),v=a(922),P=a(911),O=a(908),j=a(938),w=a(942),k=a(940),x=a(941),N=a(939),C=a(913),S=a(923),y=a(1074),R=(a(105),a(1006)),I=a(45),A=a(253),B=a(59),D=Object(o.a)(function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}),U=function(e){var t=Object(B.a)(),a=e.className,o=e.customers,u=e.AllUserData,g=Object(s.a)(e,["className","customers","AllUserData"]),f=Object(I.c)(),h=D(),R=Object(r.useState)([]),U=Object(n.a)(R,2),L=U[0],M=(U[1],Object(r.useState)(0)),z=Object(n.a)(M,2),T=z[0],J=z[1],V=Object(r.useState)(10),F=Object(n.a)(V,2),G=F[0],H=F[1];return c.a.createElement("div",Object.assign({},g,{className:Object(i.a)(h.root,a)}),c.a.createElement(m.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},o.length," Records found. Page ",T+1," of"," ",Math.ceil(o.length/G)),c.a.createElement(E.a,null,c.a.createElement(v.a,{action:c.a.createElement(l.e,null),title:"All customers"}),c.a.createElement(P.a,null),c.a.createElement(O.a,{className:h.content},c.a.createElement(b.a,null,c.a.createElement("div",{className:h.inner},c.a.createElement(j.a,null,c.a.createElement(w.a,null,c.a.createElement(k.a,null,c.a.createElement(x.a,null,"Number"),c.a.createElement(x.a,null,"Name"),c.a.createElement(x.a,null,"Email"),c.a.createElement(x.a,null,"Phone"),c.a.createElement(x.a,null,"Sex"),c.a.createElement(x.a,{align:"right"},"Actions"))),c.a.createElement(N.a,null,null===u||void 0===u?void 0:u.map(function(e,a){return c.a.createElement(k.a,{hover:!0},c.a.createElement(x.a,null,a+1),c.a.createElement(C.a,{to:"/service/user"},c.a.createElement(x.a,null,c.a.createElement("div",{className:h.nameCell},c.a.createElement("div",null,c.a.createElement(C.a,{color:"inherit",component:d.a,to:"/management/customers/1",variant:"h6"},e.username))))),c.a.createElement(x.a,null,e.email),c.a.createElement(x.a,null,null!==e.worker?e.worker.phone:""),c.a.createElement(x.a,null,null!==e.worker?e.worker.sex:""),c.a.createElement(x.a,{align:"right"},c.a.createElement(p.a,{color:"primary",size:"small",onClick:function(){return function(e){var a=u.filter(function(t,a){return a===e});console.log(a),f(Object(A.a)(a)),t.history.push("/ViewProfile")}(a)},variant:"outlined"},"View"),c.a.createElement(p.a,{className:"ms-1",color:"primary",size:"small",variant:"outlined"},c.a.createElement("i",{className:"fa-sharp fa-solid fa-trash p-1"}))))})))))),c.a.createElement(S.a,{className:h.actions},c.a.createElement(y.a,{component:"div",count:o.length,onChangePage:function(e,t){J(t)},onChangeRowsPerPage:function(e){H(e.target.value)},page:T,rowsPerPage:G,rowsPerPageOptions:[5,10,25]}))),c.a.createElement(l.v,{selected:L}))};U.defaultProps={customers:[]};var L=U,M=Object(o.a)(function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)}}}),z=function(){var e=M(),t=Object(r.useState)([{},{}]),a=Object(n.a)(t,2),o=a[0],s=(a[1],Object(R.a)().data,Object(I.d)(function(e){return e.GetAllUserSlice}).AllUserData);return console.log(s),c.a.createElement(l.k,{className:e.root,title:"Customer Management List"},c.a.createElement(f,{AllUserData:s}),c.a.createElement(l.s,{onFilter:function(){},onSearch:function(){}}),o&&c.a.createElement(L,{className:e.results,customers:o,AllUserData:s}))};a.d(t,"default",function(){return z})},957:function(e,t,a){"use strict";var n=a(194),r=a.n(n).a.create({baseURL:"http://137.184.12.206/api/"});t.a=r},960:function(e,t,a){"use strict";var n=a(971);a(979);t.a=function(e,t){"warn"===t?n.b.warn(e):"success"===t?n.b.success(e):"error"===t&&n.b.error(e)}},965:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(958),r=a.n(n),c=a(959),o=a(957),l=function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("users/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},973:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(958),r=a.n(n),c=a(959),o=a(957),l=function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{token:localStorage.getItem("token")}},e.next=3,o.a.get("users/my-profile",n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=41.36ad48b5.chunk.js.map