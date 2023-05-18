"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[277],{8193:function(e,t,r){r.d(t,{$iz:function(){return a}});var n=r(88357);function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(e)}},88357:function(e,t,r){r.d(t,{w_:function(){return c}});var n=r(62435),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,u({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return n.createElement(i,u({attr:u({},e.attr)},t),o(e.child))}}function i(e){var t=function(t){var r,a=e.attr,l=e.size,o=e.title,c=s(e,["attr","size","title"]),i=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},49808:function(e,t,r){r.d(t,{O:function(){return G}});var n=r(62435),a=r(12351),l=r(19946),u=r(32984),s=r(61363),o=r(84575),c=r(16723),i=r(23784),d=r(14157),f=r(3855),p=r(46045);function b({onFocus:e}){let[t,r]=(0,n.useState)(!0);return t?n.createElement(p._,{as:"button",type:"button",features:p.A.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame((function t(){if(!(a--<=0))return e()?(r(!1),void cancelAnimationFrame(n)):void(n=requestAnimationFrame(t));n&&cancelAnimationFrame(n)}))}}):null}var v,m,x,g=r(73781),T=r(81021),y=r(15466),h=((x=h||{})[x.Forwards=0]="Forwards",x[x.Backwards=1]="Backwards",x),E=((m=E||{})[m.Less=-1]="Less",m[m.Equal=0]="Equal",m[m.Greater=1]="Greater",m),P=((v=P||{})[v.SetSelectedIndex=0]="SetSelectedIndex",v[v.RegisterTab=1]="RegisterTab",v[v.UnregisterTab=2]="UnregisterTab",v[v.RegisterPanel=3]="RegisterPanel",v[v.UnregisterPanel=4]="UnregisterPanel",v);let w={0(e,t){var r;let n=(0,o.z2)(e.tabs,(e=>e.current)),a=(0,o.z2)(e.panels,(e=>e.current)),l=n.filter((e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))})),s={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let r=(0,u.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,u.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return{...s,selectedIndex:(0,u.E)(r,{0:()=>n.indexOf(l[0]),1:()=>n.indexOf(l[l.length-1])})}}let c=n.slice(0,t.index),i=[...n.slice(t.index),...c].find((e=>l.includes(e)));if(!i)return s;let d=null!=(r=n.indexOf(i))?r:e.selectedIndex;return-1===d&&(d=e.selectedIndex),{...s,selectedIndex:d}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,o.z2)([...e.tabs,t.tab],(e=>e.current)),l=null!=(r=a.indexOf(n))?r:e.selectedIndex;return-1===l&&(l=e.selectedIndex),{...e,tabs:a,selectedIndex:l}},2(e,t){return{...e,tabs:e.tabs.filter((e=>e!==t.tab))}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:(0,o.z2)([...e.panels,t.panel],(e=>e.current))}},4(e,t){return{...e,panels:e.panels.filter((e=>e!==t.panel))}}},I=(0,n.createContext)(null);function O(e){let t=(0,n.useContext)(I);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}I.displayName="TabsSSRContext";let A=(0,n.createContext)(null);function R(e){let t=(0,n.useContext)(A);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return t}A.displayName="TabsDataContext";let k=(0,n.createContext)(null);function z(e){let t=(0,n.useContext)(k);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}function S(e,t){return(0,u.E)(t.type,w,e,t)}k.displayName="TabsActionsContext";let C=n.Fragment,M=(0,a.yV)((function(e,t){let{defaultIndex:r=0,vertical:l=!1,manual:u=!1,onChange:s,selectedIndex:d=null,...p}=e;const v=l?"vertical":"horizontal",m=u?"manual":"auto";let x=null!==d,T=(0,i.T)(t),[y,h]=(0,n.useReducer)(S,{selectedIndex:null!=d?d:r,tabs:[],panels:[]}),E=(0,n.useMemo)((()=>({selectedIndex:y.selectedIndex})),[y.selectedIndex]),P=(0,f.E)(s||(()=>{})),w=(0,f.E)(y.tabs),O=(0,n.useMemo)((()=>({orientation:v,activation:m,...y})),[v,m,y]),R=(0,g.z)((e=>(h({type:1,tab:e}),()=>h({type:2,tab:e})))),z=(0,g.z)((e=>(h({type:3,panel:e}),()=>h({type:4,panel:e})))),M=(0,g.z)((e=>{j.current!==e&&P.current(e),x||h({type:0,index:e})})),j=(0,f.E)(x?e.selectedIndex:y.selectedIndex),L=(0,n.useMemo)((()=>({registerTab:R,registerPanel:z,change:M})),[]);(0,c.e)((()=>{h({type:0,index:null!=d?d:r})}),[d]),(0,c.e)((()=>{if(void 0===j.current||y.tabs.length<=0)return;let e=(0,o.z2)(y.tabs,(e=>e.current));e.some(((e,t)=>y.tabs[t]!==e))&&M(e.indexOf(y.tabs[j.current]))}));let N=(0,n.useRef)({tabs:0,panels:0}),F={ref:T};return n.createElement(I.Provider,{value:N},n.createElement(k.Provider,{value:L},n.createElement(A.Provider,{value:O},O.tabs.length<=0&&n.createElement(b,{onFocus:()=>{var e,t;for(let r of w.current)if(0===(null==(e=r.current)?void 0:e.tabIndex))return null==(t=r.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:F,theirProps:p,slot:E,defaultTag:C,name:"Tabs"}))))})),j=(0,a.yV)((function(e,t){let{orientation:r,selectedIndex:n}=R("Tab.List"),l=(0,i.T)(t);return(0,a.sY)({ourProps:{ref:l,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})})),L=(0,a.yV)((function(e,t){var r,f;let p=(0,l.M)(),{id:b=`headlessui-tabs-tab-${p}`,...v}=e,{orientation:m,activation:x,selectedIndex:h,tabs:E,panels:P}=R("Tab"),w=z("Tab"),I=R("Tab"),A=O("Tab"),k=(0,n.useRef)(null),S=(0,i.T)(k,t);(0,c.e)((()=>w.registerTab(k)),[w,k]);let C=(0,n.useRef)(-1);-1===C.current&&(C.current=A.current?A.current.tabs++:-1);let M=E.indexOf(k);-1===M&&(M=C.current);let j=M===h,L=(0,g.z)((e=>{var t;let r=e();if(r===o.fE.Success&&"auto"===x){let e=null==(t=(0,y.r)(k))?void 0:t.activeElement,r=I.tabs.findIndex((t=>t.current===e));-1!==r&&w.change(r)}return r})),N=(0,g.z)((e=>{let t=E.map((e=>e.current)).filter(Boolean);if(e.key===s.R.Space||e.key===s.R.Enter)return e.preventDefault(),e.stopPropagation(),void w.change(M);switch(e.key){case s.R.Home:case s.R.PageUp:return e.preventDefault(),e.stopPropagation(),L((()=>(0,o.jA)(t,o.TO.First)));case s.R.End:case s.R.PageDown:return e.preventDefault(),e.stopPropagation(),L((()=>(0,o.jA)(t,o.TO.Last)))}return L((()=>(0,u.E)(m,{vertical(){return e.key===s.R.ArrowUp?(0,o.jA)(t,o.TO.Previous|o.TO.WrapAround):e.key===s.R.ArrowDown?(0,o.jA)(t,o.TO.Next|o.TO.WrapAround):o.fE.Error},horizontal(){return e.key===s.R.ArrowLeft?(0,o.jA)(t,o.TO.Previous|o.TO.WrapAround):e.key===s.R.ArrowRight?(0,o.jA)(t,o.TO.Next|o.TO.WrapAround):o.fE.Error}})))===o.fE.Success?e.preventDefault():void 0})),F=(0,n.useRef)(!1),D=(0,g.z)((()=>{var e;F.current||(F.current=!0,null==(e=k.current)||e.focus(),w.change(M),(0,T.Y)((()=>{F.current=!1})))})),G=(0,g.z)((e=>{e.preventDefault()})),U=(0,n.useMemo)((()=>({selected:j})),[j]),Y={ref:S,onKeyDown:N,onMouseDown:G,onClick:D,id:b,role:"tab",type:(0,d.f)(e,k),"aria-controls":null==(f=null==(r=P[M])?void 0:r.current)?void 0:f.id,"aria-selected":j,tabIndex:j?0:-1};return(0,a.sY)({ourProps:Y,theirProps:v,slot:U,defaultTag:"button",name:"Tabs.Tab"})})),N=(0,a.yV)((function(e,t){let{selectedIndex:r}=R("Tab.Panels"),l=(0,i.T)(t),u=(0,n.useMemo)((()=>({selectedIndex:r})),[r]);return(0,a.sY)({ourProps:{ref:l},theirProps:e,slot:u,defaultTag:"div",name:"Tabs.Panels"})})),F=a.AN.RenderStrategy|a.AN.Static,D=(0,a.yV)((function(e,t){var r,u,s,o;let d=(0,l.M)(),{id:f=`headlessui-tabs-panel-${d}`,tabIndex:b=0,...v}=e,{selectedIndex:m,tabs:x,panels:g}=R("Tab.Panel"),T=z("Tab.Panel"),y=O("Tab.Panel"),h=(0,n.useRef)(null),E=(0,i.T)(h,t);(0,c.e)((()=>T.registerPanel(h)),[T,h]);let P=(0,n.useRef)(-1);-1===P.current&&(P.current=y.current?y.current.panels++:-1);let w=g.indexOf(h);-1===w&&(w=P.current);let I=w===m,A=(0,n.useMemo)((()=>({selected:I})),[I]),k={ref:E,id:f,role:"tabpanel","aria-labelledby":null==(u=null==(r=x[w])?void 0:r.current)?void 0:u.id,tabIndex:I?b:-1};return I||null!=(s=v.unmount)&&!s||null!=(o=v.static)&&o?(0,a.sY)({ourProps:k,theirProps:v,slot:A,defaultTag:"div",features:F,visible:I,name:"Tabs.Panel"}):n.createElement(p._,{as:"span",...k})})),G=Object.assign(L,{Group:M,List:j,Panels:N,Panel:D})},14157:function(e,t,r){r.d(t,{f:function(){return u}});var n=r(62435),a=r(16723);function l(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function u(e,t){let[r,u]=(0,n.useState)((()=>l(e)));return(0,a.e)((()=>{u(l(e))}),[e.type,e.as]),(0,a.e)((()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&u("button")}),[r,t]),r}}}]);