(function(V,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue"),require("naive-ui")):typeof define=="function"&&define.amd?define(["exports","vue","naive-ui"],s):(V=typeof globalThis<"u"?globalThis:V||self,s(V.index={},V.Vue,V.naive))})(this,function(V,s,Y){"use strict";/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */var G;(function(i){i.pop="pop",i.push="push"})(G||(G={}));var Q;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Q||(Q={})),Symbol(process.env.NODE_ENV!=="production"?"navigation failure":"");var R;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(R||(R={})),Symbol(process.env.NODE_ENV!=="production"?"router view location matched":""),Symbol(process.env.NODE_ENV!=="production"?"router view depth":""),Symbol(process.env.NODE_ENV!=="production"?"router":"");const le=Symbol(process.env.NODE_ENV!=="production"?"route location":"");Symbol(process.env.NODE_ENV!=="production"?"router view location":"");function ue(){return s.inject(le)}var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function de(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var j={exports:{}};(function(i,y){(function(w,_){i.exports=_()})(ce,function(){var w=1e3,_=6e4,D=36e5,g="millisecond",e="second",h="minute",p="hour",k="day",O="week",M="month",S="quarter",x="year",o="date",d="Invalid Date",W=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var n=["th","st","nd","rd"],t=l%100;return"["+l+(n[(t-20)%10]||n[t]||n[0])+"]"}},L=function(l,n,t){var a=String(l);return!a||a.length>=n?l:""+Array(n+1-a.length).join(t)+l},Ne={s:L,z:function(l){var n=-l.utcOffset(),t=Math.abs(n),a=Math.floor(t/60),r=t%60;return(n<=0?"+":"-")+L(a,2,"0")+":"+L(r,2,"0")},m:function l(n,t){if(n.date()<t.date())return-l(t,n);var a=12*(t.year()-n.year())+(t.month()-n.month()),r=n.clone().add(a,M),u=t-r<0,c=n.clone().add(a+(u?-1:1),M);return+(-(a+(t-r)/(u?r-c:c-r))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M,y:x,w:O,d:k,D:o,h:p,m:h,s:e,ms:g,Q:S}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},X="en",A={};A[X]=T;var ae="$isDayjsObject",U=function(l){return l instanceof z||!(!l||!l[ae])},J=function l(n,t,a){var r;if(!n)return X;if(typeof n=="string"){var u=n.toLowerCase();A[u]&&(r=u),t&&(A[u]=t,r=u);var c=n.split("-");if(!r&&c.length>1)return l(c[0])}else{var m=n.name;A[m]=n,r=m}return!a&&r&&(X=r),r||!a&&X},N=function(l,n){if(U(l))return l.clone();var t=typeof n=="object"?n:{};return t.date=l,t.args=arguments,new z(t)},f=Ne;f.l=J,f.i=U,f.w=function(l,n){return N(l,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var z=function(){function l(t){this.$L=J(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[ae]=!0}var n=l.prototype;return n.parse=function(t){this.$d=function(a){var r=a.date,u=a.utc;if(r===null)return new Date(NaN);if(f.u(r))return new Date;if(r instanceof Date)return new Date(r);if(typeof r=="string"&&!/Z$/i.test(r)){var c=r.match(W);if(c){var m=c[2]-1||0,$=(c[7]||"0").substring(0,3);return u?new Date(Date.UTC(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,$)):new Date(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,$)}}return new Date(r)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return f},n.isValid=function(){return this.$d.toString()!==d},n.isSame=function(t,a){var r=N(t);return this.startOf(a)<=r&&r<=this.endOf(a)},n.isAfter=function(t,a){return N(t)<this.startOf(a)},n.isBefore=function(t,a){return this.endOf(a)<N(t)},n.$g=function(t,a,r){return f.u(t)?this[a]:this.set(r,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,a){var r=this,u=!!f.u(a)||a,c=f.p(t),m=function(I,b){var q=f.w(r.$u?Date.UTC(r.$y,b,I):new Date(r.$y,b,I),r);return u?q:q.endOf(k)},$=function(I,b){return f.w(r.toDate()[I].apply(r.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(b)),r)},v=this.$W,C=this.$M,E=this.$D,F="set"+(this.$u?"UTC":"");switch(c){case x:return u?m(1,0):m(31,11);case M:return u?m(1,C):m(0,C+1);case O:var H=this.$locale().weekStart||0,P=(v<H?v+7:v)-H;return m(u?E-P:E+(6-P),C);case k:case o:return $(F+"Hours",0);case p:return $(F+"Minutes",1);case h:return $(F+"Seconds",2);case e:return $(F+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,a){var r,u=f.p(t),c="set"+(this.$u?"UTC":""),m=(r={},r[k]=c+"Date",r[o]=c+"Date",r[M]=c+"Month",r[x]=c+"FullYear",r[p]=c+"Hours",r[h]=c+"Minutes",r[e]=c+"Seconds",r[g]=c+"Milliseconds",r)[u],$=u===k?this.$D+(a-this.$W):a;if(u===M||u===x){var v=this.clone().set(o,1);v.$d[m]($),v.init(),this.$d=v.set(o,Math.min(this.$D,v.daysInMonth())).$d}else m&&this.$d[m]($);return this.init(),this},n.set=function(t,a){return this.clone().$set(t,a)},n.get=function(t){return this[f.p(t)]()},n.add=function(t,a){var r,u=this;t=Number(t);var c=f.p(a),m=function(C){var E=N(u);return f.w(E.date(E.date()+Math.round(C*t)),u)};if(c===M)return this.set(M,this.$M+t);if(c===x)return this.set(x,this.$y+t);if(c===k)return m(1);if(c===O)return m(7);var $=(r={},r[h]=_,r[p]=D,r[e]=w,r)[c]||1,v=this.$d.getTime()+t*$;return f.w(v,this)},n.subtract=function(t,a){return this.add(-1*t,a)},n.format=function(t){var a=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var u=t||"YYYY-MM-DDTHH:mm:ssZ",c=f.z(this),m=this.$H,$=this.$m,v=this.$M,C=r.weekdays,E=r.months,F=r.meridiem,H=function(b,q,B,Z){return b&&(b[q]||b(a,u))||B[q].slice(0,Z)},P=function(b){return f.s(m%12||12,b,"0")},I=F||function(b,q,B){var Z=b<12?"AM":"PM";return B?Z.toLowerCase():Z};return u.replace(K,function(b,q){return q||function(B){switch(B){case"YY":return String(a.$y).slice(-2);case"YYYY":return f.s(a.$y,4,"0");case"M":return v+1;case"MM":return f.s(v+1,2,"0");case"MMM":return H(r.monthsShort,v,E,3);case"MMMM":return H(E,v);case"D":return a.$D;case"DD":return f.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return H(r.weekdaysMin,a.$W,C,2);case"ddd":return H(r.weekdaysShort,a.$W,C,3);case"dddd":return C[a.$W];case"H":return String(m);case"HH":return f.s(m,2,"0");case"h":return P(1);case"hh":return P(2);case"a":return I(m,$,!0);case"A":return I(m,$,!1);case"m":return String($);case"mm":return f.s($,2,"0");case"s":return String(a.$s);case"ss":return f.s(a.$s,2,"0");case"SSS":return f.s(a.$ms,3,"0");case"Z":return c}return null}(b)||c.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,a,r){var u,c=this,m=f.p(a),$=N(t),v=($.utcOffset()-this.utcOffset())*_,C=this-$,E=function(){return f.m(c,$)};switch(m){case x:u=E()/12;break;case M:u=E();break;case S:u=E()/3;break;case O:u=(C-v)/6048e5;break;case k:u=(C-v)/864e5;break;case p:u=C/D;break;case h:u=C/_;break;case e:u=C/w;break;default:u=C}return r?u:f.a(u)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return A[this.$L]},n.locale=function(t,a){if(!t)return this.$L;var r=this.clone(),u=J(t,a,!0);return u&&(r.$L=u),r},n.clone=function(){return f.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},l}(),oe=z.prototype;return N.prototype=oe,[["$ms",g],["$s",e],["$m",h],["$H",p],["$W",k],["$M",M],["$y",x],["$D",o]].forEach(function(l){oe[l[1]]=function(n){return this.$g(n,l[0],l[1])}}),N.extend=function(l,n){return l.$i||(l(n,z,N),l.$i=!0),N},N.locale=J,N.isDayjs=U,N.unix=function(l){return N(1e3*l)},N.en=A[X],N.Ls=A,N.p={},N})})(j);var fe=j.exports;const he=de(fe);function me(i){if(typeof i=="string")return!1;try{return JSON.parse(i),!0}catch{return!1}}const ye={showIcon:!1,autoFocus:!1,negativeButtonProps:{style:{minWidth:"80px"}},positiveButtonProps:{style:{minWidth:"80px"}}},ee={style:{cursor:"pointer"},tooltip:{flip:!0,arrowPointToCenter:!0,contentStyle:{minWidth:"100px",maxWidth:"300px",maxHeight:"300px",overflowY:"auto",whiteSpace:"pre-line",boxSizing:"border-box",margin:"0 -14px",padding:"0 14px"},arrowStyle:{backgroundColor:"--n-color"}}},te=s.defineComponent((i,{})=>{console.log(ue);const y={fullPath:""},w=s.ref([]);function _(O){if(i.summaryColumns)return[i.selectColumns,...i.columns,i.oprColumns].reduce((M,S)=>{var x,o;return S!=null&&S.key&&(M[S.key]=((o=(x=i.summaryColumns)==null?void 0:x.call(i,O))==null?void 0:o[S.key])||{value:null}),M},{})}const D="filter_key";function g(){const O=window.localStorage.getItem(D);return me(O)?JSON.parse(O):{}}const e=s.ref(g()),h=s.ref([]),p=s.ref(0);s.watch(()=>i.columns,()=>{k()},{immediate:!0}),s.watch(()=>i.oprColumns,O=>{console.log("oprColumns",O)});function k(){var S,x;h.value=((S=e.value)==null?void 0:S[y==null?void 0:y.fullPath])||((x=i.columns)==null?void 0:x.map((o,d)=>(o==null?void 0:o.key)||he().valueOf()+d));const O=i.isFilter?i.columns.filter(o=>{var d;return(d=h.value)==null?void 0:d.includes(o==null?void 0:o.key)}):[...i.columns];i.selectColumns&&O.unshift({key:"selectKey",...i.selectColumns}),i.oprColumns&&O.push(i.oprColumns);let M=0;w.value=O.map(o=>{var W;const d={align:"center",width:120,...o,ellipsis:typeof(o==null?void 0:o.ellipsis)=="boolean"&&!(o!=null&&o.ellipsis)?o==null?void 0:o.ellipsis:typeof(o==null?void 0:o.ellipsis)=="object"?{...ee,...o==null?void 0:o.ellipsis}:{...ee},"ellipsis-component":"ellipsis"};return M+=d!=null&&d.width?parseInt(d==null?void 0:d.width):(((W=d==null?void 0:d.title)==null?void 0:W.length)||0)*d.length+30||0,d}),p.value=M,console.log("计算")}return()=>s.createVNode(s.Fragment,null,[s.createVNode(Y.NDataTable,s.mergeProps(i,{data:i.data,columns:w.value,"scroll-x":"scrollX",summary:i.summaryColumns?_:void 0,"summary-placement":"bottom",pagination:i.pagination,"row-props":()=>({style:{height:"60px"}}),"flex-height":!0,remote:!0,"virtual-scroll":i.data.length>1e3,style:"flex: 1"}),{empty:()=>s.createVNode("slot",{name:"empty"},[s.createVNode(Y.NEmpty,null,{default:()=>[i.emptyText]})])})])},{name:"Table",props:{columns:{type:Array,default:()=>[{title:"序号",key:"id"},{title:"标题",key:"title"},{title:"描述",key:"desc"},{title:"内容",key:"content"}]},data:{type:Array,default:()=>[]},summaryColumns:{type:[null,Function],default:()=>null},oprColumns:{type:[Object,null],default:()=>null},defaultColumns:{type:[Object,null],default:()=>null},selectColumns:{type:[Object,null],default:()=>null},emptyText:{type:String,default:()=>"没有数据"},emptyIcon:{type:String,default:()=>""},isFilter:{type:Boolean,default:()=>!1},pagination:{type:[],default:void 0}}}),ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pe=[s.createElementVNode("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1)],$e=s.defineComponent({name:"Close",render:function(y,w){return s.openBlock(),s.createElementBlock("svg",ge,pe)}}),re=s.defineComponent((i,{slots:y,emit:w,expose:_})=>{const D=s.ref(i.show);s.watch(()=>i.show,h=>D.value=h),s.watch(()=>D.value,h=>w("update:show",h));function g(){}function e(){D.value=!1}return _({close:e,init:g}),()=>s.createVNode(s.Fragment,null,[s.createVNode(Y.NModal,{show:D.value,"onUpdate:show":h=>D.value=h,"display-directive":"show"},{default:()=>[s.createVNode("div",{class:"dialog_main"},[s.createVNode("div",{class:"dialog_main_header"},[s.createVNode("div",null,["未定义"]),s.createVNode("div",{class:"dialog_main_close",onClick:e},[s.createVNode(Y.NIcon,null,{default:()=>[s.createVNode($e,null,null)]})])]),s.createVNode("div",{class:"dialog_main_content"},{default:y.default}),s.createVNode("div",{class:"dialog_main_footer"},null)])]})])},{name:"Dialog",emits:["update:show"],props:{show:{type:Boolean,default:()=>!1},options:{type:Array,default:()=>[]}}}),ne=s.defineComponent((i,{slots:y})=>()=>s.createVNode("div",{class:"main_wrap w-full h-full flex flex-col"},[s.createVNode("div",{class:""},[y.head()]),s.createVNode("div",{class:"flex-1"},[y.default()]),s.createVNode("div",{class:""},[y.footer()])]),{name:"Main",slots:Object}),ie=Object.freeze(Object.defineProperty({__proto__:null,NEXDialog:re,NEXMain:ne,NEXTable:te},Symbol.toStringTag,{value:"Module"})),we=s.defineComponent(()=>()=>s.createVNode("div",null,[s.createTextVNode("FormItem")]),{name:"FormItem"});function _e({title:i="",options:y=[],labelField:w="label",isNo:_=!0,formProps:D={},interfaceFn:g=null,valueData:e=null,isRead:h=!1,action:p=null,style:k={}},O=null){const M="$dialog"in window?window.$dialog:Y.createDiscreteApi(["dialog"]).dialog,S=s.ref({...e}),x=s.computed(()=>h?null:p?{action:()=>p&&(p==null?void 0:p({d:o,formRef:d,data:S.value}))}:{positiveText:"确定",onPositiveClick:()=>{var T;return(T=d.value)==null||T.validate(L=>{L||(o.loading=!0,g&&g(S.value,{close:()=>o.destroy(),hideLoading:()=>o.loading=!1}))}),!1}});let o=null;const d=s.ref();console.log("触发");const W=Me({options:y,model:S,labelField:w,formOpr:{formRef:d,resetForm:()=>{var T;return(T=d==null?void 0:d.value)==null?void 0:T.restoreValidation()}}});function K(){o&&o.destroy(),o=M.create({type:"info",...ye,title:i,style:{width:"500px"},content:()=>s.createVNode(Y.NForm,s.mergeProps({ref:T=>d.value=T,model:S.value,rules:h?{}:W.value,"label-placement":"left","label-width":"100px","require-mark-placement":"right-hanging",class:h?"dialog-content":"dialog-main",style:{minHeight:_?"unset":null}},D),{default:()=>[s.createVNode(we,{value:S.value,"onUpdate:value":T=>S.value=T,d:o,formRef:d,option:y,labelField:w,isRead:h,style:k},null)]}),...x.value,...O})}return{show:()=>K(),close:()=>o==null?void 0:o.destroy(),hideLoading:()=>o.loading=!1}}function Me({options:i=[],model:y,labelField:w="label",formOpr:_={}}){return s.computed(()=>(i==null?void 0:i.reduce((D,{fields:g,...e})=>{var h,p;return Array.isArray(e==null?void 0:e.key)?e.key.forEach(k=>{D[String(k)]={required:e!=null&&e.required?typeof(e==null?void 0:e.required)=="function"?e==null?void 0:e.required(s.unref(y),{..._}):e==null?void 0:e.required:!1,message:(e==null?void 0:e.message)||`请选择${e==null?void 0:e[w]}`,fields:g}}):D[e==null?void 0:e.key]=e!=null&&e.rule?typeof(e==null?void 0:e.rule)!="function"?e==null?void 0:e.rule:e==null?void 0:e.rule(s.unref(y),{..._}):g?{required:e!=null&&e.required?typeof(e==null?void 0:e.required)=="function"?e==null?void 0:e.required(s.unref(y),{..._}):e==null?void 0:e.required:!1,message:(e==null?void 0:e.message)||`请${(h=e==null?void 0:e.options)!=null&&h.length?"选择":"输入"}${e==null?void 0:e[w]}`,fields:g}:{required:e!=null&&e.required?typeof(e==null?void 0:e.required)=="function"?e==null?void 0:e.required(s.unref(y),{..._}):e==null?void 0:e.required:!1,message:(e==null?void 0:e.message)||`请${(p=e==null?void 0:e.options)!=null&&p.length?"选择":"输入"}${e==null?void 0:e[w]}`},D},{}))||{})}function De({components:i=[],componentPrfix:y="NEX"}={}){const w=[];function _(g,e,h){g.component(y+e)||g.component(y+e,h)}function D(g){w.includes(g)||(w.push(g),i.forEach(e=>{const{name:h,alias:p}=e;_(g,h,e),p&&p.forEach(k=>_(g,k,e))}))}return{install:D}}const se=De({components:Object.keys(ie).map(i=>ie[i])}),Se=se.install;V.NEXDialog=re,V.NEXMain=ne,V.NEXTable=te,V.default=se,V.install=Se,V.useNEXDialog=_e,Object.defineProperties(V,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});