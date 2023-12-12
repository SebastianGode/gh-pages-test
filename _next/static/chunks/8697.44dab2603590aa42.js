"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8697],{55860:function(t,e,a){a.d(e,{c:function(){return i}});var n,r,i=(n=r={path:void 0,exports:{},require:function(t,e){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports,function(){var t={}.hasOwnProperty;function e(){for(var a=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)a.push(r);else if(Array.isArray(r)&&r.length){var o=e.apply(null,r);o&&a.push(o)}else if("object"===i)for(var s in r)t.call(r,s)&&r[s]&&a.push(s)}}return a.join(" ")}n.exports?(e.default=e,n.exports=e):window.classNames=e}(),r.exports)},8697:function(t,e,a){a.r(e),a.d(e,{scale_toast:function(){return w}});var n,r=a(17005),i=a(55860),o=a(75113);function s(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t,e){if(e.length<t)throw TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):(("string"==typeof t||"[object String]"===e)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(Error().stack)),new Date(NaN))}function d(t){return t.getTime()%6e4}function l(t){var e=new Date(t.getTime()),a=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var n=a>0?(6e4+d(e))%6e4:d(e);return 6e4*a+n}function c(t,e){u(2,arguments);var a=h(t),n=h(e),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}var m={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var p={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function b(t){return function(e,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;n=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[s]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function v(t){return function(e,a){var n,r=String(e),i=a||{},o=i.width,s=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(s);if(!u)return null;var h=u[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return n="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(d,function(t){return t.test(h)}):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(d,function(t){return t.test(h)}),n=t.valueCallback?t.valueCallback(n):n,{value:n=i.valueCallback?i.valueCallback(n):n,rest:r.slice(h.length)}}}var y={code:"en-US",formatDistance:function(t,e,a){var n;return(a=a||{},n="string"==typeof m[t]?m[t]:1===e?m[t].one:m[t].other.replace("{{count}}",e),a.addSuffix)?a.comparison>0?"in "+n:n+" ago":n},formatLong:p,formatRelative:function(t,e,a,n){return g[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:b({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:b({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:b({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(n={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var a=String(t),r=e||{},i=a.match(n.matchPattern);if(!i)return null;var o=i[0],s=a.match(n.parsePattern);if(!s)return null;var u=n.valueCallback?n.valueCallback(s[0]):s[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(o.length)}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let w=class{constructor(t){(0,r.r)(this,t),this.size="",this.variant="",this.autoHide=!1,this.animated=!0,this.positionTop=12,this.positionRight=12,this.fadeDuration=500,this.progress=0,this.toastHeightWithOffset=0,this.hideToast=!1,this.timerId=null,this.close=()=>{clearInterval(this.timerId),this.hideToast=!0,setTimeout(()=>{this.timerId=null,this.opened=!1,this.progress=0},this.fadeDuration)},this.getTime=()=>{let t=this.time&&function(t,e,a){u(2,arguments);var n,r,i,o=a||{},s=o.locale||y;if(!s.formatDistance)throw RangeError("locale must contain formatDistance property");var d=c(t,e);if(isNaN(d))throw RangeError("Invalid time value");var m=function(t,e){if(null==t)throw TypeError("assign requires that input parameter not be null or undefined");for(var a in e=e||{})e.hasOwnProperty(a)&&(t[a]=e[a]);return t}({},o);m.addSuffix=!!o.addSuffix,m.comparison=d,d>0?(n=h(e),r=h(t)):(n=h(t),r=h(e));var f=function(t,e){u(2,arguments);var a=function(t,e){u(2,arguments);var a=h(t),n=h(e);return a.getTime()-n.getTime()}(t,e)/1e3;return a>0?Math.floor(a):Math.ceil(a)}(r,n),p=Math.round((f-(l(r)-l(n))/1e3)/60);if(p<2){if(o.includeSeconds){if(f<5)return s.formatDistance("lessThanXSeconds",5,m);if(f<10)return s.formatDistance("lessThanXSeconds",10,m);if(f<20)return s.formatDistance("lessThanXSeconds",20,m);if(f<40)return s.formatDistance("halfAMinute",null,m);else if(f<60)return s.formatDistance("lessThanXMinutes",1,m);else return s.formatDistance("xMinutes",1,m)}return 0===p?s.formatDistance("lessThanXMinutes",1,m):s.formatDistance("xMinutes",p,m)}if(p<45)return s.formatDistance("xMinutes",p,m);if(p<90)return s.formatDistance("aboutXHours",1,m);if(p<1440){var g=Math.round(p/60);return s.formatDistance("aboutXHours",g,m)}if(p<2520)return s.formatDistance("xDays",1,m);if(p<43200){var b=Math.round(p/1440);return s.formatDistance("xDays",b,m)}if(p<86400)return i=Math.round(p/43200),s.formatDistance("aboutXMonths",i,m);if((i=function(t,e){u(2,arguments);var a=h(t),n=h(e),r=c(a,n),i=Math.abs(function(t,e){u(2,arguments);var a=h(t),n=h(e);return 12*(a.getFullYear()-n.getFullYear())+(a.getMonth()-n.getMonth())}(a,n));a.setMonth(a.getMonth()-r*i);var o=c(a,n)===-r,s=r*(i-o);return 0===s?0:s}(r,n))<12){var v=Math.round(p/43200);return s.formatDistance("xMonths",v,m)}var w=i%12,M=Math.floor(i/12);return w<3?s.formatDistance("aboutXYears",M,m):w<9?s.formatDistance("overXYears",M,m):s.formatDistance("almostXYears",M+1,m)}(function(t,e){return u(2,arguments),function(t,e){return u(2,arguments),function(t,e){u(2,arguments);var a=h(t).getTime(),n=s(e);return new Date(a+n)}(t,1e3*s(e))}(t,-s(3))}(this.time,3),new Date,{addSuffix:!0});return t},this.setToastTimeout=()=>{this.opened&&!1!==this.autoHide&&!this.timerId&&(this.timerId=setInterval(()=>{this.progress+=1/(this.getAutoHide()/1e3),this.progress>=100&&this.close()},10))},this.transitions=t=>`
    @keyframes fadeIn {
      from {
        opacity: 0;
        top: -${t}px;
      }
      to {
        opacity: 1;
        top: ${this.positionTop}px;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        top: ${this.positionTop}px;
      }
      to {
        opacity: 0;
        top: -${t}px;
      }
    }
  `,this.animationStyle=t=>`
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeIn ${this.fadeDuration/1e3}s ease-in-out;
        top: ${this.positionTop}px;
        opacity: 1;
      },
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeOut ${this.fadeDuration/1e3}s ease-in-out;
        top: -${t}px;
        opacity: 0;
      }
    `}connectedCallback(){(0,o.s)({source:this.element,type:"warn"})}disconnectedCallback(){this.timerId&&(clearTimeout(this.timerId),this.timerId=null,this.opened=!1,this.progress=0)}async open(){this.opened=!0,this.hideToast=!1}render(){return this.setToastTimeout(),(0,r.h)(r.a,null,this.styles&&(0,r.h)("style",null,this.styles),(0,r.h)("style",null,this.transitions(this.toastHeightWithOffset)),(0,r.h)("style",null,this.animationStyle(this.toastHeightWithOffset)),(0,r.h)("div",{class:this.getCssClassMap(),part:this.getBasePartMap()},(0,r.h)("div",{part:"header",class:"toast__header"},(0,r.h)("slot",{name:"header"}),(0,r.h)("small",null,this.getTime()),(0,r.h)("a",{onClick:this.close},(0,r.h)("span",{"aria-hidden":"true"},"\xd7"))),this.autoHide&&(0,r.h)("div",{part:"progress",class:"toast__progress",style:{width:`${this.progress}%`}},"\xa0"),(0,r.h)("div",{part:"body",class:"toast__body"},(0,r.h)("slot",null))))}getToastHeightWithOffset(){let t=this.element.shadowRoot.querySelector(".toast").scrollHeight;this.toastHeightWithOffset=t+this.positionTop}getAutoHide(){return"number"==typeof this.autoHide||"string"==typeof this.autoHide?Number(this.autoHide):0}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){let e="toast",a="basePart"===t?"":`${e}`;return(0,i.c)("basePart"===t?"base":e,this.size&&`${a}--size-${this.size}`,this.variant&&`${a}--variant-${this.variant}`,!!this.opened&&`${a}--opened`,!this.hideToast&&`${a}--show`,!!this.hideToast&&`${a}--hide`)}get element(){return(0,r.g)(this)}};w.style=":host{--width:400px;--radius:var(--telekom-radius-small);--background:var(--scl-color-background-standard);--box-shadow:var(--telekom-shadow-app-bar-top-raised);--spacing:var(--telekom-spacing-composition-space-06);--border-header:1px solid var(--scl-color-grey-20);--font-size-header:var(--telekom-text-style-heading-4);--font-size-header-small:var(--telekom-typography-font-size-small);--height-progress:var(--telekom-spacing-composition-space-02)}.toast{width:var(--width);display:flex;opacity:0;z-index:1;position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:var(--radius);flex-direction:column;justify-content:space-between}.toast__body{padding:var(--spacing)}.toast__header{margin:0;display:flex;padding:var(--spacing);border-bottom:var(--border-header);justify-content:space-between;font:var(--font-size-header)}.toast__header a{cursor:pointer}.toast__header small{margin-top:5px;margin-left:120px;font-size:var(--font-size-header-small)}.toast__progress{left:0;bottom:0;height:var(--height-progress);display:block;overflow:hidden;position:absolute;background:red}"},75113:function(t,e,a){a.d(e,{s:function(){return i}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let n={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},r={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function i({tag:t="WIP",extraMessage:e=null,message:a=null,source:i=null,type:o="info"}){let s=console[o];s(`%c scale – ${n[t]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${a||r[t]} ${e?"\n"+e:""}
    `,null!==i?"\nsource:":"","object"==typeof i?i:`${i}`,null!==i?"\n\n":"")}}}]);