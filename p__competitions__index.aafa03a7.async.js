(self.webpackChunk=self.webpackChunk||[]).push([[380],{94320:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r=n(97857),i=n.n(r),s=n(13769),a=n.n(s),c=n(58720),o=n(36139),u=n(90513),l="default___THebl",d="text___DYTKH",f="tableContainer___y6be9",h="tableTitle___FYLz4",m="table___kapbS",p=n(86074),v=["emptyText","title","className"],$=function(t){var e=t.text;return(0,p.jsxs)("div",{className:"df jcc aic fdc ".concat(l),children:[(0,p.jsx)(u.r,{}),(0,p.jsx)("span",{className:d,children:e})]})},_=function(t){var e=t.emptyText,n=void 0===e?"No Data":e,r=t.title,s=t.className,u=a()(t,v);return r?(0,p.jsxs)("div",{className:"".concat(f," ").concat(s," bgc10"),children:[(0,p.jsx)("div",{className:"".concat(h," c200 f16 fw3"),children:r}),(0,p.jsx)(c.ZP,{renderEmpty:function(){return(0,p.jsx)($,{text:n})},children:(0,p.jsx)(o.Z,i()(i()({},u),{},{className:"".concat(s," ").concat(m)}))})]}):(0,p.jsx)(c.ZP,{renderEmpty:function(){return(0,p.jsx)($,{text:n})},children:(0,p.jsx)(o.Z,i()({className:"".concat(s," ").concat(m)},u))})}},48980:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return J}});var r=n(5574),i=n.n(r),s=n(34713),a=n(71230),c=n(15746),o=n(96963),u=n(62435),l=n(95591),d=n(78621),f=n(27697),h=n(55952),m=n(56853),p=Object.defineProperty,v=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const y=t=>u.createElement("svg",((t,e)=>{for(var n in e||(e={}))$.call(e,n)&&g(t,n,e[n]);if(v)for(var n of v(e))_.call(e,n)&&g(t,n,e[n]);return t})({width:36,height:37,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),u.createElement("path",{d:"M2.962 18.462a15 15 0 1 1 30 .076 15 15 0 0 1-30-.076Z",fill:"#1E2126"}),u.createElement("path",{d:"M17.88 25.63a1.288 1.288 0 0 0 0-1.8l-4.111-4.144H26.49a1.259 1.259 0 0 0 1.26-1.26 1.262 1.262 0 0 0-1.26-1.262H13.894l3.986-3.99a1.274 1.274 0 0 0-.9-2.174c-.337 0-.66.134-.9.373l-6.73 6.772a.5.5 0 0 0 0 .705l6.749 6.78a1.26 1.26 0 0 0 1.781 0Z",fill:"#EEEFF1"}));var b=n(38478),x=n(74595),w=n(94320),j=n(58926),M=n(98330),O=n(85161),S="container___i9Bwh",D="icon___RB3ki",C="arrow___AqGme",N="content___KdUBV",Z="tabBarViewContainer___zZe0M",H="card___GxT84",T="cardTitle___pwwBE",I="table___A078R",E="text___N1iME",k="countDown___O21F0",P=n(79536),Y=n(9783),A=n.n(Y),L=n(94184),V=n.n(L),R="tabList___N8r6S",F="tabItem___XtiRk",W="selected___JfpgA",z=n(86074),B=function(t){var e=t.options,n=void 0===e?[]:e,r=(t.defaultValue,t.value),i=t.onChange,s=t.className;return(0,z.jsx)("div",{className:"".concat(s," ").concat(R),children:n.map((function(t,e){return(0,z.jsx)("div",{onClick:function(){return i(t)},className:V()(F,A()({},W,r===t.value)),children:t.label},e)}))})},U=[{label:"Total ROI",value:1},{label:"Trade Profit",value:2}],J=function(){var t=(0,s.Ge)(),e=t.library,n=t.account,r=t.chainId,p=x.I.useContainer().isMobile,v=(0,u.useState)(1),$=i()(v,2),_=$[0],g=$[1],Y=(0,u.useState)([]),A=i()(Y,2),L=A[0],V=A[1],R=(0,M.Z)().t,F=(0,l.ZP)(["getCompetitionPageInfos",n],(function(){return(0,h.I)({account:n,roundId:O.kT,orderBy:1===_?"pnl":"totalProfit",chainId:r})}),{refreshInterval:5e3}).data,W=(0,l.ZP)(n?"getUserCompetitionInfo":null,(function(){return(0,h.r)({account:n,roundId:O.kT,chainId:r})})).data,J=(0,l.ZP)(["getVault",n,r],(function(){if(n&&r)return m.a.getVault(e,n,r||j.rC)})).data,q=(0,f.Yy)(_,F,J,W),G=(0,f.Xz)(_);return(0,u.useEffect)((function(){F&&F.list&&F.list.length&&V(F.list)}),[F]),(0,z.jsxs)("div",{className:S,children:[(0,z.jsxs)("header",{children:[(0,z.jsx)("div",{className:C,onClick:function(){return d.m8.back()},children:(0,z.jsx)(y,{})}),(0,z.jsxs)("div",{className:N,children:[(0,z.jsx)("h1",{className:"df fdc c200",children:(0,z.jsx)(d._H,{id:"Competitions"})}),(0,z.jsx)("span",{className:E+" c120",children:(0,z.jsx)(d._H,{id:"CompetitionsSubtitle"})})]})]}),(0,z.jsxs)("div",{className:"".concat(Z," df aic jcsb"),children:[(0,z.jsx)(B,{options:U,value:_,onChange:function(t){var e=t.value;return g(e)}}),(0,z.jsx)(P.m,{className:k+" f18",startTime:O.q1||(null==F?void 0:F.startAt),endedTime:O.xH||(null==F?void 0:F.endedAt)})]}),(0,z.jsx)(a.Z,{gutter:[24,12],children:q.map((function(t,e){return(0,z.jsx)(c.Z,{xs:24,md:12,lg:8,children:(0,z.jsxs)("div",{className:"".concat(H," df fdc br12 bgc10"),children:[(0,z.jsx)("div",{className:"fl1",children:(0,z.jsxs)("span",{className:"df aic c200",children:[(0,z.jsx)("span",{className:"dib",style:{marginRight:4},children:t.title}),(0,z.jsx)(o.Z,{title:t.tooltipContent,children:(0,z.jsx)(b.r,{className:D})})]})}),(0,z.jsxs)("div",{className:"df fdc fl1",children:[(0,z.jsx)("span",{className:"".concat(T," c200"),children:t.text1}),(0,z.jsx)("span",{className:"c100",children:t.text2})]})]})},e)}))}),(0,z.jsx)(w.Z,{className:I,title:R("Rank List"),size:"small",columns:p?G.slice(0,3):G,dataSource:L,bordered:!1,pagination:!1})]})}},90513:function(t,e,n){"use strict";n.d(e,{r:function(){return u}});var r=n(62435),i=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,o=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const u=t=>r.createElement("svg",((t,e)=>{for(var n in e||(e={}))a.call(e,n)&&o(t,n,e[n]);if(s)for(var n of s(e))c.call(e,n)&&o(t,n,e[n]);return t})({width:50,height:51,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25 11.75H10.55C4.725 11.75 0 6.713 0 .5h14.45C20.275.5 25 5.537 25 11.75ZM10.55 13H25c0 6.213-4.724 11.25-10.55 11.25H0C0 18.037 4.724 13 10.55 13ZM25 24.25h14.45C45.275 24.25 50 19.213 50 13H35.55C29.725 13 25 18.037 25 24.25Zm25-12.5H35.55C29.725 11.75 25 6.713 25 .5h14.45C45.275.5 50 5.537 50 11.75Zm-39.45 27.5C4.725 39.25 0 44.287 0 50.5h14.45C20.275 50.5 25 45.463 25 39.25H10.55ZM25 38H10.55C4.725 38 0 32.963 0 26.75h14.45C20.275 26.75 25 31.787 25 38Zm0 12.5h14.45C45.275 50.5 50 45.463 50 39.25H35.55C29.725 39.25 25 44.287 25 50.5Zm0-23.75h14.45C45.275 26.75 50 31.787 50 38H35.55C29.725 38 25 32.963 25 26.75Z",fill:"#292D33"}))},38478:function(t,e,n){"use strict";n.d(e,{r:function(){return u}});var r=n(62435),i=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,o=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const u=t=>r.createElement("svg",((t,e)=>{for(var n in e||(e={}))a.call(e,n)&&o(t,n,e[n]);if(s)for(var n of s(e))c.call(e,n)&&o(t,n,e[n]);return t})({width:17,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.667 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.7-9V4.6h-1.4V6h1.4Zm0 6V7.467h-1.4V12h1.4Z",fill:"#5F6671"}))},27484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",c="day",o="week",u="month",l="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},_={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:o,d:c,D:f,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=v;var b=function(t){return t instanceof M},x=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(i=s),n&&(y[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var c=e.name;y[c]=e,i=c}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},j=_;j.l=x,j.i=b,j.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function v(t){this.$L=x(t.locale,null,!0),this.parse(t)}var $=v.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return j},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return w(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<w(t)},$.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!j.u(e)||e,l=j.p(t),h=function(t,e){var i=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(c)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case u:return r?h(1,v):h(0,v+1);case o:var g=this.$locale().weekStart||0,y=(p<g?p+7:p)-g;return h(r?$-y:$+(6-y),v);case c:case f:return m(_+"Hours",0);case a:return m(_+"Minutes",1);case s:return m(_+"Seconds",2);case i:return m(_+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,o=j.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[c]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===c?this.$D+(e-this.$W):e;if(o===u||o===d){var p=this.clone().set(f,1);p.$d[h](m),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[j.p(t)]()},$.add=function(r,l){var f,h=this;r=Number(r);var m=j.p(l),p=function(t){var e=w(h);return j.w(e.date(e.date()+Math.round(t*r)),h)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return p(1);if(m===o)return p(7);var v=(f={},f[s]=e,f[a]=n,f[i]=t,f)[m]||1,$=this.$d.getTime()+r*v;return j.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,u=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return j.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:j.s(c+1,2,"0"),MMM:l(n.monthsShort,c,u,3),MMMM:l(u,c),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:j.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||m[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,f,h){var m,p=j.p(f),v=w(r),$=(v.utcOffset()-this.utcOffset())*e,_=this-v,g=j.m(this,v);return g=(m={},m[d]=g/12,m[u]=g,m[l]=g/3,m[o]=(_-$)/6048e5,m[c]=(_-$)/864e5,m[a]=_/n,m[s]=_/e,m[i]=_/t,m)[p]||_,h?g:j.a(g)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return y[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return j.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},v}(),O=M.prototype;return w.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",c],["$M",u],["$y",d],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,M,w),t.$i=!0),w},w.locale=x,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=y[g],w.Ls=y,w.p={},w}()}}]);