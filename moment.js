!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var H;function f(){return H.apply(null,arguments)}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function F(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(c(e,t))return;return 1}function o(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function V(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function G(e,t){for(var n=[],s=e.length,i=0;i<s;++i)n.push(t(e[i],i));return n}function E(e,t){for(var n in t)c(t,n)&&(e[n]=t[n]);return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e}function l(e,t,n,s){return Pt(e,t,n,s,!0).utc()}function m(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function A(e){if(null==e._isValid){var t=m(e),n=j.call(t.parsedDateParts,function(e){return null!=e}),n=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return n;e._isValid=n}return e._isValid}function I(e){var t=l(NaN);return null!=e?E(m(t),e):m(t).userInvalidated=!0,t}var j=Array.prototype.some||function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1},Z=f.momentProperties=[],z=!1;function $(e,t){var n,s,i,r=Z.length;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=m(t)),o(t._locale)||(e._locale=t._locale),0<r)for(n=0;n<r;n++)o(i=t[s=Z[n]])||(e[s]=i);return e}function q(e){$(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===z&&(z=!0,f.updateOffset(this),z=!1)}function h(e){return e instanceof q||null!=e&&null!=e._isAMomentObject}function B(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function e(r,a){var o=!0;return E(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,r),o){for(var e,t,n=[],s=arguments.length,i=0;i<s;i++){if(e="","object"==typeof arguments[i]){for(t in e+="\n["+i+"] ",arguments[0])c(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[i];n.push(e)}B(r+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),o=!1}return a.apply(this,arguments)},a)}var J={};function Q(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),J[e]||(B(t),J[e]=!0)}function d(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function X(e,t){var n,s=E({},e);for(n in t)c(t,n)&&(F(e[n])&&F(t[n])?(s[n]={},E(s[n],e[n]),E(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)c(e,n)&&!c(t,n)&&F(e[n])&&(s[n]=E({},s[n]));return s}function K(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null;var ee=Object.keys||function(e){var t,n=[];for(t in e)c(e,t)&&n.push(t);return n};function r(e,t,n){var s=""+Math.abs(e);return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,t-s.length)).toString().substr(1)+s}var te=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ne=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,se={},ie={};function s(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(ie[e]=i),t&&(ie[t[0]]=function(){return r(i.apply(this,arguments),t[1],t[2])}),n&&(ie[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function re(e,t){return e.isValid()?(t=ae(t,e.localeData()),se[t]=se[t]||function(s){for(var e,i=s.match(te),t=0,r=i.length;t<r;t++)ie[i[t]]?i[t]=ie[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=d(i[n])?i[n].call(e,s):i[n];return t}}(t),se[t](e)):e.localeData().invalidDate()}function ae(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(ne.lastIndex=0;0<=n&&ne.test(e);)e=e.replace(ne,s),ne.lastIndex=0,--n;return e}var oe={};function t(e,t){var n=e.toLowerCase();oe[n]=oe[n+"s"]=oe[t]=e}function _(e){return"string"==typeof e?oe[e]||oe[e.toLowerCase()]:void 0}function ue(e){var t,n,s={};for(n in e)c(e,n)&&(t=_(n))&&(s[t]=e[n]);return s}var le={};function n(e,t){le[e]=t}function he(e){return e%4==0&&e%100!=0||e%400==0}function y(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function g(e){var e=+e,t=0;return t=0!=e&&isFinite(e)?y(e):t}function de(t,n){return function(e){return null!=e?(fe(this,t,e),f.updateOffset(this,n),this):ce(this,t)}}function ce(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&he(e.year())&&1===e.month()&&29===e.date()?(n=g(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),We(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var i=/\d/,w=/\d\d/,me=/\d{3}/,_e=/\d{4}/,ye=/[+-]?\d{6}/,p=/\d\d?/,ge=/\d\d\d\d?/,we=/\d\d\d\d\d\d?/,pe=/\d{1,3}/,ke=/\d{1,4}/,ve=/[+-]?\d{1,6}/,Me=/\d+/,De=/[+-]?\d+/,Se=/Z|[+-]\d\d:?\d\d/gi,Ye=/Z|[+-]\d\d(?::?\d\d)?/gi,k=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function v(e,n,s){be[e]=d(n)?n:function(e,t){return e&&s?s:n}}function Oe(e,t){return c(be,e)?be[e](t._strict,t._locale):new RegExp(M(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function M(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var be={},xe={};function D(e,n){var t,s,i=n;for("string"==typeof e&&(e=[e]),u(n)&&(i=function(e,t){t[n]=g(e)}),s=e.length,t=0;t<s;t++)xe[e[t]]=i}function Te(e,i){D(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var S,Y=0,O=1,b=2,x=3,T=4,N=5,Ne=6,Pe=7,Re=8;function We(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=(t%(n=12)+n)%n;return e+=(t-n)/12,1==n?he(e)?29:28:31-n%7%2}S=Array.prototype.indexOf||function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},s("M",["MM",2],"Mo",function(){return this.month()+1}),s("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),s("MMMM",0,0,function(e){return this.localeData().months(this,e)}),t("month","M"),n("month",8),v("M",p),v("MM",p,w),v("MMM",function(e,t){return t.monthsShortRegex(e)}),v("MMMM",function(e,t){return t.monthsRegex(e)}),D(["M","MM"],function(e,t){t[O]=g(e)-1}),D(["MMM","MMMM"],function(e,t,n,s){s=n._locale.monthsParse(e,s,n._strict);null!=s?t[O]=s:m(n).invalidMonth=e});var Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ue="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),He=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Fe=k,Le=k;function Ve(e,t){var n;if(e.isValid()){if("string"==typeof t)if(/^\d+$/.test(t))t=g(t);else if(!u(t=e.localeData().monthsParse(t)))return;n=Math.min(e.date(),We(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n)}}function Ge(e){return null!=e?(Ve(this,e),f.updateOffset(this,!0),this):ce(this,"Month")}function Ee(){function e(e,t){return t.length-e.length}for(var t,n=[],s=[],i=[],r=0;r<12;r++)t=l([2e3,r]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),i.push(this.months(t,"")),i.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),i.sort(e),r=0;r<12;r++)n[r]=M(n[r]),s[r]=M(s[r]);for(r=0;r<24;r++)i[r]=M(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Ae(e){return he(e)?366:365}s("Y",0,0,function(){var e=this.year();return e<=9999?r(e,4):"+"+e}),s(0,["YY",2],0,function(){return this.year()%100}),s(0,["YYYY",4],0,"year"),s(0,["YYYYY",5],0,"year"),s(0,["YYYYYY",6,!0],0,"year"),t("year","y"),n("year",1),v("Y",De),v("YY",p,w),v("YYYY",ke,_e),v("YYYYY",ve,ye),v("YYYYYY",ve,ye),D(["YYYYY","YYYYYY"],Y),D("YYYY",function(e,t){t[Y]=2===e.length?f.parseTwoDigitYear(e):g(e)}),D("YY",function(e,t){t[Y]=f.parseTwoDigitYear(e)}),D("Y",function(e,t){t[Y]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return g(e)+(68<g(e)?1900:2e3)};var Ie=de("FullYear",!0);function je(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}function Ze(e){var t;return e<100&&0<=e?((t=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,t)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function ze(e,t,n){n=7+t-n;return n-(7+Ze(e,0,n).getUTCDay()-t)%7-1}function $e(e,t,n,s,i){var r,t=1+7*(t-1)+(7+n-s)%7+ze(e,s,i),n=t<=0?Ae(r=e-1)+t:t>Ae(e)?(r=e+1,t-Ae(e)):(r=e,t);return{year:r,dayOfYear:n}}function qe(e,t,n){var s,i,r=ze(e.year(),t,n),r=Math.floor((e.dayOfYear()-r-1)/7)+1;return r<1?s=r+P(i=e.year()-1,t,n):r>P(e.year(),t,n)?(s=r-P(e.year(),t,n),i=e.year()+1):(i=e.year(),s=r),{week:s,year:i}}function P(e,t,n){var s=ze(e,t,n),t=ze(e+1,t,n);return(Ae(e)-s+t)/7}s("w",["ww",2],"wo","week"),s("W",["WW",2],"Wo","isoWeek"),t("week","w"),t("isoWeek","W"),n("week",5),n("isoWeek",5),v("w",p),v("ww",p,w),v("W",p),v("WW",p,w),Te(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=g(e)});function Be(e,t){return e.slice(t,7).concat(e.slice(0,t))}s("d",0,"do","day"),s("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),s("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),s("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),s("e",0,0,"weekday"),s("E",0,0,"isoWeekday"),t("day","d"),t("weekday","e"),t("isoWeekday","E"),n("day",11),n("weekday",11),n("isoWeekday",11),v("d",p),v("e",p),v("E",p),v("dd",function(e,t){return t.weekdaysMinRegex(e)}),v("ddd",function(e,t){return t.weekdaysShortRegex(e)}),v("dddd",function(e,t){return t.weekdaysRegex(e)}),Te(["dd","ddd","dddd"],function(e,t,n,s){s=n._locale.weekdaysParse(e,s,n._strict);null!=s?t.d=s:m(n).invalidWeekday=e}),Te(["d","e","E"],function(e,t,n,s){t[s]=g(e)});var Je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Qe="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ke=k,et=k,tt=k;function nt(){function e(e,t){return t.length-e.length}for(var t,n,s,i=[],r=[],a=[],o=[],u=0;u<7;u++)s=l([2e3,1]).day(u),t=M(this.weekdaysMin(s,"")),n=M(this.weekdaysShort(s,"")),s=M(this.weekdays(s,"")),i.push(t),r.push(n),a.push(s),o.push(t),o.push(n),o.push(s);i.sort(e),r.sort(e),a.sort(e),o.sort(e),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+i