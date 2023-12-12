"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2534],{55860:function(e,t,a){a.d(t,{c:function(){return s}});var r,c,s=(r=c={path:void 0,exports:{},require:function(e,t){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},c.exports,function(){var e={}.hasOwnProperty;function t(){for(var a=[],r=0;r<arguments.length;r++){var c=arguments[r];if(c){var s=typeof c;if("string"===s||"number"===s)a.push(c);else if(Array.isArray(c)&&c.length){var o=t.apply(null,c);o&&a.push(o)}else if("object"===s)for(var i in c)e.call(c,i)&&c[i]&&a.push(i)}}return a.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}(),c.exports)},42534:function(e,t,a){a.r(t),a.d(t,{scale_chart_stack_card:function(){return o}});var r=a(17005),c=a(55860),s=a(75113);let o=class{constructor(e){(0,r.r)(this,e),this.readData=e=>{try{return Array.isArray(JSON.parse(e))?JSON.parse(e):[]}catch(t){return Array.isArray(e)?e:[]}}}getOpacity(e,t){return JSON.stringify(0===t?1:+e.percentage/100)}getCardStyle(){return`
      .card:after {
          content: '';
          display: block;
          background: linear-gradient(0deg, white, rgba(255,255,255, 0));
          height: 2rem;
          margin-top: -2rem;
          position: relative;
        }

      .card__body: {
        padding-bottom: 0 !important;
      }
  `}connectedCallback(){(0,s.s)({source:this.hostElement,type:"warn"})}render(){return(0,r.h)(r.a,null,(0,r.h)("div",{class:this.getCssClassMap()},(0,r.h)("scale-card",{styles:this.getCardStyle()},(0,r.h)("div",{class:"header"},this.heading),(0,r.h)("div",{class:"bar"},this.readData(this.data).sort((e,t)=>t.percentage-e.percentage).map((e,t)=>{if(+e.percentage>0)return(0,r.h)("div",{class:"bar__item",style:{opacity:this.getOpacity(e,t),flex:JSON.stringify(+e.percentage)}})})),(0,r.h)("div",{class:"legend"},this.readData(this.data).sort((e,t)=>t.percentage-e.percentage).map((e,t)=>(0,r.h)("div",{class:"legend__row"},(0,r.h)("div",{class:"legend__row__item"},(0,r.h)("div",{class:"legend__item",style:{opacity:this.getOpacity(e,t)}}),(0,r.h)("div",{class:"legend__label spacer"},e.type)),(0,r.h)("div",{class:"legend__row__item"},(0,r.h)("div",{class:"spacer"},e.value),(0,r.h)("div",{class:"spacer"},e.percentage,"%"))))))))}getCssClassMap(){return(0,c.c)("chart-stack-card")}get hostElement(){return(0,r.g)(this)}};o.style=":host{--scl-chart-stack-card-color:var(--telekom-color-additional-blue-600)}.chart-stack-card{color:var(--color-text);--scl-chart-stack-card-color:var(--telekom-color-additional-blue-600)}.chart-stack-card .header{height:var(--telekom-spacing-composition-space-08);font-size:var(--telekom-typography-font-size-headline-3);font-weight:var(--telekom-typography-font-weight-extra-bold);line-height:var(--telekom-typography-line-spacing-tight);margin-bottom:var(--telekom-spacing-composition-space-08)}.chart-stack-card .bar{display:flex;justify-content:space-between;margin-bottom:var(--telekom-spacing-composition-space-06)}.chart-stack-card .bar__item{background-color:var(--scl-chart-stack-card-color);height:var(--telekom-spacing-composition-space-10);flex:1}.chart-stack-card .bar__item:first-of-type{border-top-left-radius:var(--telekom-radius-small);border-bottom-left-radius:var(--telekom-radius-small)}.chart-stack-card .bar__item:last-of-type{border-top-right-radius:var(--telekom-radius-small);border-bottom-right-radius:var(--telekom-radius-small)}.chart-stack-card .legend{display:flex;flex-direction:column;height:calc(var(--telekom-spacing-composition-space-06) * 10)}.chart-stack-card .spacer{padding:0 var(--telekom-spacing-composition-space-04)}.chart-stack-card .legend .legend__row__item{display:flex;line-height:var(--telekom-typography-line-spacing-standard)}.chart-stack-card .legend .legend__row{display:flex;justify-content:space-between}.chart-stack-card .legend .legend__row:last-child{padding-bottom:var(--telekom-spacing-composition-space-10)}.chart-stack-card .legend .legend__item{height:10px;width:10px;background-color:var(--scl-chart-stack-card-color);border-radius:100%;align-self:center;margin-right:var(--telekom-spacing-composition-space-03)}.chart-stack-card .legend .legend__label{font-weight:var(--type-weight-bold);font-size:var(--telekom-spacing-composition-space-06);line-height:200%}"},75113:function(e,t,a){a.d(t,{s:function(){return s}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let r={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},c={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function s({tag:e="WIP",extraMessage:t=null,message:a=null,source:s=null,type:o="info"}){let i=console[o];i(`%c scale – ${r[e]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${a||c[e]} ${t?"\n"+t:""}
    `,null!==s?"\nsource:":"","object"==typeof s?s:`${s}`,null!==s?"\n\n":"")}}}]);