"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("vue"),W=require("naive-ui");/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */var Q;(function(i){i.pop="pop",i.push="push"})(Q||(Q={}));var R;(function(i){i.back="back",i.forward="forward",i.unknown=""})(R||(R={}));Symbol(process.env.NODE_ENV!=="production"?"navigation failure":"");var j;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(j||(j={}));Symbol(process.env.NODE_ENV!=="production"?"router view location matched":"");Symbol(process.env.NODE_ENV!=="production"?"router view depth":"");Symbol(process.env.NODE_ENV!=="production"?"router":"");const oe=Symbol(process.env.NODE_ENV!=="production"?"route location":"");Symbol(process.env.NODE_ENV!=="production"?"router view location":"");function ue(){return s.inject(oe)}var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function de(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var re={exports:{}};(function(i,y){(function($,w){i.exports=w()})(ce,function(){var $=1e3,w=6e4,M=36e5,g="millisecond",e="second",h="minute",p="hour",k="day",O="week",_="month",D="quarter",x="year",l="date",d="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var n=["th","st","nd","rd"],t=o%100;return"["+o+(n[(t-20)%10]||n[t]||n[0])+"]"}},F=function(o,n,t){var a=String(o);return!a||a.length>=n?o:""+Array(n+1-a.length).join(t)+o},le={s:F,z:function(o){var n=-o.utcOffset(),t=Math.abs(n),a=Math.floor(t/60),r=t%60;return(n<=0?"+":"-")+F(a,2,"0")+":"+F(r,2,"0")},m:function o(n,t){if(n.date()<t.date())return-o(t,n);var a=12*(t.year()-n.year())+(t.month()-n.month()),r=n.clone().add(a,_),u=t-r<0,c=n.clone().add(a+(u?-1:1),_);return+(-(a+(t-r)/(u?r-c:c-r))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:_,y:x,w:O,d:k,D:l,h:p,m:h,s:e,ms:g,Q:D}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},L="en",q={};q[L]=E;var K="$isDayjsObject",Z=function(o){return o instanceof U||!(!o||!o[K])},B=function o(n,t,a){var r;if(!n)return L;if(typeof n=="string"){var u=n.toLowerCase();q[u]&&(r=u),t&&(q[u]=t,r=u);var c=n.split("-");if(!r&&c.length>1)return o(c[0])}else{var m=n.name;q[m]=n,r=m}return!a&&r&&(L=r),r||!a&&L},S=function(o,n){if(Z(o))return o.clone();var t=typeof n=="object"?n:{};return t.date=o,t.args=arguments,new U(t)},f=le;f.l=B,f.i=Z,f.w=function(o,n){return S(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var U=function(){function o(t){this.$L=B(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[K]=!0}var n=o.prototype;return n.parse=function(t){this.$d=function(a){var r=a.date,u=a.utc;if(r===null)return new Date(NaN);if(f.u(r))return new Date;if(r instanceof Date)return new Date(r);if(typeof r=="string"&&!/Z$/i.test(r)){var c=r.match(I);if(c){var m=c[2]-1||0,v=(c[7]||"0").substring(0,3);return u?new Date(Date.UTC(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,v)):new Date(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,v)}}return new Date(r)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return f},n.isValid=function(){return this.$d.toString()!==d},n.isSame=function(t,a){var r=S(t);return this.startOf(a)<=r&&r<=this.endOf(a)},n.isAfter=function(t,a){return S(t)<this.startOf(a)},n.isBefore=function(t,a){return this.endOf(a)<S(t)},n.$g=function(t,a,r){return f.u(t)?this[a]:this.set(r,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,a){var r=this,u=!!f.u(a)||a,c=f.p(t),m=function(H,b){var T=f.w(r.$u?Date.UTC(r.$y,b,H):new Date(r.$y,b,H),r);return u?T:T.endOf(k)},v=function(H,b){return f.w(r.toDate()[H].apply(r.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(b)),r)},N=this.$W,C=this.$M,V=this.$D,Y="set"+(this.$u?"UTC":"");switch(c){case x:return u?m(1,0):m(31,11);case _:return u?m(1,C):m(0,C+1);case O:var A=this.$locale().weekStart||0,X=(N<A?N+7:N)-A;return m(u?V-X:V+(6-X),C);case k:case l:return v(Y+"Hours",0);case p:return v(Y+"Minutes",1);case h:return v(Y+"Seconds",2);case e:return v(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,a){var r,u=f.p(t),c="set"+(this.$u?"UTC":""),m=(r={},r[k]=c+"Date",r[l]=c+"Date",r[_]=c+"Month",r[x]=c+"FullYear",r[p]=c+"Hours",r[h]=c+"Minutes",r[e]=c+"Seconds",r[g]=c+"Milliseconds",r)[u],v=u===k?this.$D+(a-this.$W):a;if(u===_||u===x){var N=this.clone().set(l,1);N.$d[m](v),N.init(),this.$d=N.set(l,Math.min(this.$D,N.daysInMonth())).$d}else m&&this.$d[m](v);return this.init(),this},n.set=function(t,a){return this.clone().$set(t,a)},n.get=function(t){return this[f.p(t)]()},n.add=function(t,a){var r,u=this;t=Number(t);var c=f.p(a),m=function(C){var V=S(u);return f.w(V.date(V.date()+Math.round(C*t)),u)};if(c===_)return this.set(_,this.$M+t);if(c===x)return this.set(x,this.$y+t);if(c===k)return m(1);if(c===O)return m(7);var v=(r={},r[h]=w,r[p]=M,r[e]=$,r)[c]||1,N=this.$d.getTime()+t*v;return f.w(N,this)},n.subtract=function(t,a){return this.add(-1*t,a)},n.format=function(t){var a=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var u=t||"YYYY-MM-DDTHH:mm:ssZ",c=f.z(this),m=this.$H,v=this.$m,N=this.$M,C=r.weekdays,V=r.months,Y=r.meridiem,A=function(b,T,P,J){return b&&(b[T]||b(a,u))||P[T].slice(0,J)},X=function(b){return f.s(m%12||12,b,"0")},H=Y||function(b,T,P){var J=b<12?"AM":"PM";return P?J.toLowerCase():J};return u.replace(z,function(b,T){return T||function(P){switch(P){case"YY":return String(a.$y).slice(-2);case"YYYY":return f.s(a.$y,4,"0");case"M":return N+1;case"MM":return f.s(N+1,2,"0");case"MMM":return A(r.monthsShort,N,V,3);case"MMMM":return A(V,N);case"D":return a.$D;case"DD":return f.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return A(r.weekdaysMin,a.$W,C,2);case"ddd":return A(r.weekdaysShort,a.$W,C,3);case"dddd":return C[a.$W];case"H":return String(m);case"HH":return f.s(m,2,"0");case"h":return X(1);case"hh":return X(2);case"a":return H(m,v,!0);case"A":return H(m,v,!1);case"m":return String(v);case"mm":return f.s(v,2,"0");case"s":return String(a.$s);case"ss":return f.s(a.$s,2,"0");case"SSS":return f.s(a.$ms,3,"0");case"Z":return c}return null}(b)||c.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,a,r){var u,c=this,m=f.p(a),v=S(t),N=(v.utcOffset()-this.utcOffset())*w,C=this-v,V=function(){return f.m(c,v)};switch(m){case x:u=V()/12;break;case _:u=V();break;case D:u=V()/3;break;case O:u=(C-N)/6048e5;break;case k:u=(C-N)/864e5;break;case p:u=C/M;break;case h:u=C/w;break;case e:u=C/$;break;default:u=C}return r?u:f.a(u)},n.daysInMonth=function(){return this.endOf(_).$D},n.$locale=function(){return q[this.$L]},n.locale=function(t,a){if(!t)return this.$L;var r=this.clone(),u=B(t,a,!0);return u&&(r.$L=u),r},n.clone=function(){return f.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),G=U.prototype;return S.prototype=G,[["$ms",g],["$s",e],["$m",h],["$H",p],["$W",k],["$M",_],["$y",x],["$D",l]].forEach(function(o){G[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),S.extend=function(o,n){return o.$i||(o(n,U,S),o.$i=!0),S},S.locale=B,S.isDayjs=Z,S.unix=function(o){return S(1e3*o)},S.en=q[L],S.Ls=q,S.p={},S})})(re);var fe=re.exports;const he=de(fe);function me(i){if(typeof i=="string")return!1;try{return JSON.parse(i),!0}catch{return!1}}const ee={style:{cursor:"pointer"},tooltip:{flip:!0,arrowPointToCenter:!0,contentStyle:{minWidth:"100px",maxWidth:"300px",maxHeight:"300px",overflowY:"auto",whiteSpace:"pre-line",boxSizing:"border-box",margin:"0 -14px",padding:"0 14px"},arrowStyle:{backgroundColor:"--n-color"}}},ne=s.defineComponent((i,{})=>{console.log(ue);const y={fullPath:""},$=s.ref([]);function w(O){if(i.summaryColumns)return[i.selectColumns,...i.columns,i.oprColumns].reduce((_,D)=>{var x,l;return D!=null&&D.key&&(_[D.key]=((l=(x=i.summaryColumns)==null?void 0:x.call(i,O))==null?void 0:l[D.key])||{value:null}),_},{})}const M="filter_key";function g(){const O=window.localStorage.getItem(M);return me(O)?JSON.parse(O):{}}const e=s.ref(g()),h=s.ref([]),p=s.ref(0);s.watch(()=>i.columns,()=>{k()},{immediate:!0}),s.watch(()=>i.oprColumns,O=>{console.log("oprColumns",O)});function k(){var D,x;h.value=((D=e.value)==null?void 0:D[y==null?void 0:y.fullPath])||((x=i.columns)==null?void 0:x.map((l,d)=>(l==null?void 0:l.key)||he().valueOf()+d));const O=i.isFilter?i.columns.filter(l=>{var d;return(d=h.value)==null?void 0:d.includes(l==null?void 0:l.key)}):[...i.columns];i.selectColumns&&O.unshift({key:"selectKey",...i.selectColumns}),i.oprColumns&&O.push(i.oprColumns);let _=0;$.value=O.map(l=>{var I;const d={align:"center",width:120,...l,ellipsis:typeof(l==null?void 0:l.ellipsis)=="boolean"&&!(l!=null&&l.ellipsis)?l==null?void 0:l.ellipsis:typeof(l==null?void 0:l.ellipsis)=="object"?{...ee,...l==null?void 0:l.ellipsis}:{...ee},"ellipsis-component":"ellipsis"};return _+=d!=null&&d.width?parseInt(d==null?void 0:d.width):(((I=d==null?void 0:d.title)==null?void 0:I.length)||0)*d.length+30||0,d}),p.value=_,console.log("计算")}return()=>s.createVNode(s.Fragment,null,[s.createVNode(W.NDataTable,s.mergeProps(i,{data:i.data,columns:$.value,"scroll-x":"scrollX",summary:i.summaryColumns?w:void 0,"summary-placement":"bottom",pagination:i.pagination,"row-props":()=>({style:{height:"60px"}}),"flex-height":!0,remote:!0,"virtual-scroll":i.data.length>1e3,style:"flex: 1"}),{empty:()=>s.createVNode("slot",{name:"empty"},[s.createVNode(W.NEmpty,null,{default:()=>[i.emptyText]})])})])},{name:"Table",props:{columns:{type:Array,default:()=>[{title:"序号",key:"id"},{title:"标题",key:"title"},{title:"描述",key:"desc"},{title:"内容",key:"content"}]},data:{type:Array,default:()=>[]},summaryColumns:{type:[null,Function],default:()=>null},oprColumns:{type:[Object,null],default:()=>null},defaultColumns:{type:[Object,null],default:()=>null},selectColumns:{type:[Object,null],default:()=>null},emptyText:{type:String,default:()=>"没有数据"},emptyIcon:{type:String,default:()=>""},isFilter:{type:Boolean,default:()=>!1},pagination:{type:[],default:void 0}}}),ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ge=s.createElementVNode("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),pe=[ge],ve=s.defineComponent({name:"Close",render:function(y,$){return s.openBlock(),s.createElementBlock("svg",ye,pe)}}),ie=s.defineComponent((i,{slots:y,emit:$,expose:w})=>{const M=s.ref(i.show);s.watch(()=>i.show,h=>{M.value=h}),s.watch(()=>M.value,h=>$("update:show",h));function g(){}function e(){M.value=!1}return w({close:e,init:g}),()=>s.createVNode(s.Fragment,null,[s.createVNode(W.NModal,{show:M.value,"onUpdate:show":h=>M.value=h,"display-directive":"show"},{default:()=>[s.createVNode("div",{class:"dialog_main"},[s.createVNode("div",{class:"dialog_main_header"},[s.createVNode("div",null,["未定义"]),s.createVNode("div",{class:"dialog_main_close",onClick:e},[s.createVNode(W.NIcon,null,{default:()=>[s.createVNode(ve,null,null)]})])]),s.createVNode("div",{class:"dialog_main_content"},{default:y.default}),s.createVNode("div",{class:"dialog_main_footer"},null)])]})])},{name:"Dialog",emits:["update:show"],props:{show:{type:Boolean,default:()=>!1},options:{type:Array,default:()=>[]}}}),ae=s.defineComponent((i,{slots:y})=>()=>s.createVNode("div",{class:"main_wrap w-full h-full flex flex-col"},[s.createVNode("div",{class:""},[y.head()]),s.createVNode("div",{class:"flex-1"},[y.default()]),s.createVNode("div",{class:""},[y.footer()])]),{name:"Main",slots:Object}),te=Object.freeze(Object.defineProperty({__proto__:null,NEXDialog:ie,NEXMain:ae,NEXTable:ne},Symbol.toStringTag,{value:"Module"})),$e={showIcon:!1,autoFocus:!1,negativeButtonProps:{style:{minWidth:"80px"}},positiveButtonProps:{style:{minWidth:"80px"}},contentClass:"dialog_main_content",titleClass:"dialog_main_header",class:"dialog_main",actionClass:"dialog_main_footer"},we=s.defineComponent(()=>()=>s.createVNode("div",null,[s.createTextVNode("FormItem")]),{name:"FormItem"});function _e({title:i="",options:y=[],labelField:$="label",isNo:w=!0,formProps:M={},interfaceFn:g=null,valueData:e=null,isRead:h=!1,action:p=null,style:k={}},O=null){const _="$dialog"in window?window.$dialog:W.createDiscreteApi(["dialog"]).dialog,D=s.ref({...e}),x=s.computed(()=>h?null:p?{action:()=>p&&(p==null?void 0:p({d:l,formRef:d,data:D.value}))}:{positiveText:"确定",onPositiveClick:()=>{var E;return(E=d.value)==null||E.validate(F=>{F||(l.loading=!0,g&&g(D.value,{close:()=>l.destroy(),hideLoading:()=>l.loading=!1}))}),!1}});let l=null;const d=s.ref();console.log("触发");const I=Me({options:y,model:D,labelField:$,formOpr:{formRef:d,resetForm:()=>{var E;return(E=d==null?void 0:d.value)==null?void 0:E.restoreValidation()}}});function z(){l&&l.destroy(),l=_.create({type:"info",...$e,title:i,style:{width:"500px"},content:()=>s.createVNode(W.NForm,s.mergeProps({ref:E=>d.value=E,model:D.value,rules:h?{}:I.value,"label-placement":"left","label-width":"100px","require-mark-placement":"right-hanging",class:h?"dialog-content":"dialog-main",style:{minHeight:w?"unset":null}},M),{default:()=>[s.createVNode(we,{value:D.value,"onUpdate:value":E=>D.value=E,d:l,formRef:d,option:y,labelField:$,isRead:h,style:k},null)]}),...x.value,...O})}return{show:()=>z(),close:()=>l==null?void 0:l.destroy(),hideLoading:()=>l.loading=!1}}function Me({options:i=[],model:y,labelField:$="label",formOpr:w={}}){return s.computed(()=>(i==null?void 0:i.reduce((M,{fields:g,...e})=>{var h,p;return Array.isArray(e==null?void 0:e.key)?e.key.forEach(k=>{M[String(k)]={required:e!=null&&e.required?typeof(e==null?void 0:e.required)=="function"?e==null?void 0:e.required(s.unref(y),{...w}):e==null?void 0:e.required:!1,message:(e==null?void 0:e.message)||`请选择${e==null?void 0:e[$]}`,fields:g}}):M[e==null?void 0:e.key]=e!=null&&e.rule?typeof(e==null?void 0:e.rule)!="function"?e==null?void 0:e.rule:e==null?void 0:e.rule(s.unref(y),{...w}):g?{required:e!=null&&e.required?typeof(e==null?void 0:e.required)=="function"?e==null?void 0:e.required(s.unref(y),{...w}):e==null?void 0:e.required:!1,message:(e==null?void 0:e.message)||`请${(h=e==null?void 0:e.options)!=null&&h.length?"选择":"输入"}${e==null?void 0:e[$]}`,fields:g}:{required:e!=null&&e.required?typeof(e==null?void 0:e.required)=="function"?e==null?void 0:e.required(s.unref(y),{...w}):e==null?void 0:e.required:!1,message:(e==null?void 0:e.message)||`请${(p=e==null?void 0:e.options)!=null&&p.length?"选择":"输入"}${e==null?void 0:e[$]}`},M},{}))||{})}function De({components:i=[],componentPrfix:y="NEX"}={}){const $=[];function w(g,e,h){g.component(y+e)||g.component(y+e,h)}function M(g){$.includes(g)||($.push(g),i.forEach(e=>{const{name:h,alias:p}=e;w(g,h,e),p&&p.forEach(k=>w(g,k,e))}))}return{install:M}}const se=De({components:Object.keys(te).map(i=>te[i])}),Se=se.install;exports.NEXDialog=ie;exports.NEXMain=ae;exports.NEXTable=ne;exports.default=se;exports.install=Se;exports.useNEXDialog=_e;
