(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1465:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t(0),r=t.n(l),c=t(973),o=(t(41),t(22)),s=t(8),i=t(2),u=t(1011),m=t(998),d=t(25),E=Object(c.a)(function(){return{root:{}}}),b=function(e){var a=e.className,t=(e.CarePlanData,Object(s.a)(e,["className","CarePlanData"])),n=E();return r.a.createElement("div",Object.assign({},t,{className:Object(i.a)(n.root,a)}),r.a.createElement(u.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(u.a,{item:!0}),r.a.createElement(u.a,{item:!0},r.a.createElement(d.a,{to:"/addCarePlan"},r.a.createElement(m.a,{color:"primary",variant:"contained"},"Add carePlan")))))},f=t(48),j=t.n(f),O=t(90),g=t(991),p=t(1006),h=t(995),C=t(992),v=t(1022),P=t(1026),N=t(1024),S=t(1025),D=t(1023),w=t(1007),y=t(1040),x=(t(108),t(168),t(15)),A=(t(241),t(31)),k=t(198),B=t(23),H=(t(282),t(442)),I=Object(c.a)(function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}),R=function(e){var a=Object(l.useState)(),t=Object(n.a)(a,2),c=(t[0],t[1],Object(k.a)()),u=(c.isLoading,c.mutate),d=(c.isError,c.error,c.refetch,Object(x.d)(function(e){return e.DeletCarePlanSlice}).DeletCarePlanData);console.log(d);var E=Object(l.useState)(),b=Object(n.a)(E,2),f=b[0],R=b[1],q=Object(l.useState)(!1),F=Object(n.a)(q,2),L=F[0],T=F[1],z=function(){return T(!1)},J=Object(l.useState)(!1),M=Object(n.a)(J,2),G=M[0],W=M[1],_=Object(l.useState)(),K=Object(n.a)(_,2),Q=(K[0],K[1]),U=Object(l.useState)(),V=Object(n.a)(U,2),X=V[0],Y=V[1],Z=function(){return W(!1)},$=(Object(A.a)(),e.className),ee=e.customers,ae=e.CarePlanData,te=Object(s.a)(e,["className","customers","CarePlanData"]),ne=(Object(x.c)(),I()),le=Object(l.useState)([]),re=Object(n.a)(le,2),ce=re[0],oe=(re[1],Object(l.useState)(0)),se=Object(n.a)(oe,2),ie=se[0],ue=se[1],me=Object(l.useState)(10),de=Object(n.a)(me,2),Ee=de[0],be=de[1];return r.a.createElement("div",Object.assign({},te,{className:Object(i.a)(ne.root,$)}),r.a.createElement(B.a,{show:L,onHide:z},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,{className:"text-center "},r.a.createElement("div",{className:""},"Alert"))),r.a.createElement(B.a.Body,null,r.a.createElement("div",{className:"d-flex "},"Are you Sure ?")),r.a.createElement(B.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:z},"Cancel"),r.a.createElement(m.a,{variant:"primary",onClick:function(){return function(e){u(e),z()}(f)}},"Delet"))),r.a.createElement(B.a,{show:G,onHide:Z},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,{className:"text-center "},r.a.createElement("div",{className:""},"Edite Care Plan"))),r.a.createElement(B.a.Body,null,r.a.createElement("div",{className:"d-flex "},r.a.createElement(H.a,{custmerData:X,handleCloseEdite:Z}))),r.a.createElement(B.a.Footer,null)),r.a.createElement(O.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},ee.length," Records found. Page ",ie+1," of"," ",Math.ceil(ee.length/Ee)),r.a.createElement(g.a,null,r.a.createElement(p.a,{action:r.a.createElement(o.d,null),title:"All customers"}),r.a.createElement(h.a,null),r.a.createElement(C.a,{className:ne.content},r.a.createElement(j.a,null,r.a.createElement("div",{className:ne.inner},r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,null,r.a.createElement(S.a,null,"Number"),r.a.createElement(S.a,null,"comunication"),r.a.createElement(S.a,null,"Date"),r.a.createElement(S.a,null,"frequency"),r.a.createElement(S.a,null,"Created"),r.a.createElement(S.a,{align:"right"},"Actions"))),r.a.createElement(D.a,null,null===ae||void 0===ae?void 0:ae.map(function(e,a){return r.a.createElement(N.a,{hover:!0},r.a.createElement(S.a,null,a+1),r.a.createElement(S.a,null,e.comunication),r.a.createElement(S.a,null,e.date),r.a.createElement(S.a,null,e.frequency),r.a.createElement(S.a,null,e.created_at),r.a.createElement(S.a,{align:"right"},r.a.createElement(m.a,{color:"primary",onClick:function(){return W(!0),Q(e.id),Y(e)},size:"small",variant:"outlined"},r.a.createElement("i",{className:"fa-regular fa-pen-to-square p-1"})),r.a.createElement(m.a,{className:"ms-1",color:"primary",onClick:function(){return R(e.id),T(!0)},size:"small",variant:"outlined"},r.a.createElement("i",{className:"fa-sharp fa-solid fa-trash p-1"}))))})))))),r.a.createElement(w.a,{className:ne.actions},r.a.createElement(y.a,{component:"div",count:ee.length,onChangePage:function(e,a){ue(a)},onChangeRowsPerPage:function(e){be(e.target.value)},page:ie,rowsPerPage:Ee,rowsPerPageOptions:[5,10,25]}))),r.a.createElement(o.s,{selected:ce}))};R.defaultProps={customers:[]};var q=R,F=t(445),L=Object(c.a)(function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)}}}),T=function(){var e=Object(k.a)(),a=(e.isLoading,e.mutate),t=(e.isError,e.error,e.refetch,Object(x.d)(function(e){return e.DeletCarePlanSlice}).DeletCarePlanData);console.log(t);var c=Object(l.useState)(),s=Object(n.a)(c,2),i=s[0],u=s[1],m=Object(l.useState)(!1),d=Object(n.a)(m,2),E=d[0],f=d[1],j=function(){return f(!1)},O=function(e){a(e),j()},g=L(),p=Object(l.useState)([{},{}]),h=Object(n.a)(p,2),C=h[0],v=(h[1],Object(F.a)().data,Object(x.d)(function(e){return e.GetAllCAREplaneSlice}).CarePlanData);return console.log(v),r.a.createElement(o.i,{className:g.root,title:"Customer Management List"},r.a.createElement(b,{CarePlanData:v,handelDeletCarePlan:O}),r.a.createElement(o.p,{onFilter:function(){},onSearch:function(){}}),C&&r.a.createElement(q,{Id:i,setId:u,handelDeletCarePlan:O,handleShow:function(){return f(!0)},handleClose:j,show:E,className:g.results,customers:C,CarePlanData:v}))};t.d(a,"default",function(){return T})}}]);
//# sourceMappingURL=51.3738d099.chunk.js.map