"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8264],{55860:function(t,n,e){e.d(n,{c:function(){return a}});var o,i,a=(o=i={path:void 0,exports:{},require:function(t,n){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports,function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var r=n.apply(null,i);r&&e.push(r)}else if("object"===a)for(var s in i)t.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}o.exports?(n.default=n,o.exports=n):window.classNames=n}(),i.exports)},88264:function(t,n,e){e.r(n),e.d(n,{scale_notification_banner:function(){return s}});var o=e(17005),i=e(55860),a=e(75113),r=e(31811);let s=class{constructor(t){(0,o.r)(this,t),this.scaleClose=(0,o.c)(this,"scale-close",7),this.variant="informational",this.dismissible=!1,this.autoHide=!1,this.autoHideDuration=3e3,this.closeButtonLabel="close",this.closeButtonTitle="close",this.close=()=>{this.opened=!1,(0,r.e)(this,"scaleClose")}}componentWillLoad(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]"),this.hasSlotLink=!!this.hostElement.querySelector("[slot=link]")}componentDidUpdate(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]"),this.hasSlotLink=!!this.hostElement.querySelector("[slot=link]")}connectedCallback(){(0,a.s)({source:this.hostElement,type:"warn"}),!0===this.autoHide&&setTimeout(this.close,this.autoHideDuration)}async open(){this.opened=!0}handleIcons(){if(this.variant)switch(this.variant){case"success":return(0,o.h)("scale-icon-action-success",{class:"notification-banner__icon-success",color:"#187431","accessibility-title":"success","aria-hidden":"true"});case"informational":return(0,o.h)("scale-icon-alert-information",{class:"notification-banner__icon-information","accessibility-title":"information","aria-hidden":"true"});case"error":return(0,o.h)("scale-icon-alert-error",{class:"notification-banner__icon-error","accessibility-title":"error","aria-hidden":"true"});case"warning":return(0,o.h)("scale-icon-alert-warning",{class:"notification-banner__icon-information",color:"#AE461C","aria-hidden":"true"})}}render(){return this.opened?(0,o.h)(o.a,null,(0,o.h)("div",{role:"alert",style:{display:`${this.opened?"":"none"}`},part:this.getBasePartMap(),class:this.getCssClassMap(),tabindex:"0"},(0,o.h)("div",{part:"container",class:"notification-banner__container"},this.handleIcons(),(0,o.h)("div",{part:"heading",class:"notification-banner__heading"},(0,o.h)("slot",null),this.dismissible&&(0,o.h)("button",{part:"button-dismissable",type:"button",class:"notification-banner__button-close",onClick:()=>this.close(),tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:t=>{"Enter"===t.key&&this.close()}},(0,o.h)("scale-icon-action-circle-close",null)),this.hasSlotText&&(0,o.h)("div",{part:"text",class:"notification-banner__text"},(0,o.h)("slot",{name:"text"})),this.hasSlotLink&&(0,o.h)("scale-link",{href:this.href,class:"notification-banner__link",role:"link"},(0,o.h)("slot",{name:"link"})))))):null}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){let n="notification-banner",e="basePart"===t?"":`${n}--`;return(0,i.c)(n,this.variant&&`${e}variant-${this.variant}`,this.hasSlotText&&`${e}has-text`,!this.hasSlotText&&`${e}has-no-text`,this.hasSlotLink&&`${e}has-link`,!this.hasSlotLink&&`${e}has-no-link`)}get hostElement(){return(0,o.g)(this)}};s.style=":host{--width:100%;--radius:var(--telekom-radius-standard);--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(\n    --telekom-color-functional-informational-subtle\n  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-banner{border-radius:var(--radius);width:var(--width);position:relative;box-shadow:var(--telekom-shadow-overlay);min-height:48px}.notification-banner--variant-error{background-color:var(--background-error)}.notification-banner--variant-warning{background-color:var(--background-warning)}.notification-banner--variant-informational{background-color:var(--background-informational)}.notification-banner--variant-success{background-color:var(--background-success)}.notification-banner__heading{margin:14px 48px 14px 48px;padding:13px 0 13px 0;font-weight:var(--telekom-typography-font-weight-bold);line-height:22px}.notification-banner__text ::slotted(*){margin:-10px 0px -25px 0px;line-height:16px;padding:13px 0 15px 0}.notification-banner--has-no-link .notification-banner__text ::slotted(*){margin:-10px 0px -14px 0px;line-height:16px;padding-bottom:15px}.notification-banner--has-no-text .notification-banner__link ::slotted(*){margin:0;padding:0px 0px 0px 16px}.notification-banner--has-text .notification-banner__link ::slotted(*){margin:20px 0 0 0;padding-bottom:2px;line-height:20px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-banner__button-close{position:absolute;top:8px;right:13.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-banner__button-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-banner__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-banner__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-banner__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-banner__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-banner__button-close svg{color:hsl(0, 0%, 100%)}.notification-banner{border:1px solid hsl(0, 0%, 100%)}.notification-banner__heading{margin:0px 48px 0px 48px}}"},75113:function(t,n,e){e.d(n,{s:function(){return a}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let o={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},i={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function a({tag:t="WIP",extraMessage:n=null,message:e=null,source:a=null,type:r="info"}){let s=console[r];s(`%c scale – ${o[t]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${e||i[t]} ${n?"\n"+n:""}
    `,null!==a?"\nsource:":"","object"==typeof a?a:`${a}`,null!==a?"\n\n":"")}},31811:function(t,n,e){e.d(n,{a:function(){return h},b:function(){return r},c:function(){return i},e:function(){return a},g:function(){return c},h:function(){return o},i:function(){return s}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let o=t=>!!t.shadowRoot&&!!t.attachShadow,i=t=>{let n=document.styleSheets[0];if(!n){let t=document.createElement("style");document.head.appendChild(t),n=document.styleSheets[0],document.head.removeChild(t)}return function(){try{return/^:/.test(t)||(t=":"+t),n.insertRule("html"+t+"{}",0),n.deleteRule(0),!0}catch(t){return!1}}()};function a(t,n,e){let o=n+"Legacy",i=[];return void 0!==t[o]&&i.push(t[o].emit(e)),i.push(t[n].emit(e)),i}function r(t,n){let e=t.target,o=null!=e.shadowRoot,i=o?t.composedPath():[];do{if(e===n)return!1;e=o?i.shift():e.parentNode}while(e);return!0}let s=t=>null!=t&&1===t.nodeType&&"SCALE-ICON"===t.nodeName.toUpperCase().substring(0,10),l=0;function c(){return l++}let h=t=>Promise.all(t.getAnimations({subtree:!0}).map(t=>t.finished))}}]);