"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8059],{55860:function(t,e,a){a.d(e,{c:function(){return o}});var n,i,o=(n=i={path:void 0,exports:{},require:function(t,e){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports,function(){var t={}.hasOwnProperty;function e(){for(var a=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=typeof i;if("string"===o||"number"===o)a.push(i);else if(Array.isArray(i)&&i.length){var r=e.apply(null,i);r&&a.push(r)}else if("object"===o)for(var s in i)t.call(i,s)&&i[s]&&a.push(s)}}return a.join(" ")}n.exports?(e.default=e,n.exports=e):window.classNames=e}(),i.exports)},48059:function(t,e,a){a.r(e),a.d(e,{scale_notification:function(){return s}});var n=a(17005),i=a(55860),o=a(31811);let r={informational:"scale-icon-alert-information",warning:"scale-icon-alert-warning",success:"scale-icon-action-success",danger:"scale-icon-alert-error"},s=class{constructor(t){(0,n.r)(this,t),this.scaleOpen=(0,n.c)(this,"scale-open",7),this.scaleBeforeClose=(0,n.c)(this,"scale-before-close",7),this.scaleClose=(0,n.c)(this,"scale-close",7),this.type="inline",this.variant="informational",this.dismissible=!1,this.innerAriaLive="assertive",this.closeButtonLabel="Close",this.closeButtonTitle="Close",this.headingLevel=2,this.ariaHeading="Information",this.isOpen=this.opened||!1,this.role="alert",this.hasTextSlot=!1,this.lastCloseEventTrigger=null,this.open=()=>{this.isOpen=!0,this.role="alert",this.animationState="in",requestAnimationFrame(async()=>{await (0,o.a)(this.hostElement.shadowRoot),this.animationState=void 0,this.scaleOpen.emit(),void 0!==this.delay&&setTimeout(this.timeout,this.delay)})},this.close=()=>{let t=this.scaleBeforeClose.emit({trigger:this.lastCloseEventTrigger});this.lastCloseEventTrigger=null;let e=t.defaultPrevented;if(e){this.opened=!0;return}this.animationState="out",requestAnimationFrame(async()=>{await (0,o.a)(this.hostElement.shadowRoot),this.animationState=void 0,this.isOpen=!1,this.scaleClose.emit()})},this.timeout=()=>{this.lastCloseEventTrigger="TIMEOUT",this.opened=!1}}connectedCallback(){this.hostElement.hasAttribute("opened")&&(this.role=void 0,this.isOpen=!0),void 0!==this.delay&&setTimeout(this.timeout,this.delay),this.hasTextSlot=null!=this.hostElement.querySelector('[slot="text"]')}openedChanged(t){!0===t?(this.open(),this.lastCloseEventTrigger="ATTRIBUTE"):this.isOpen&&this.close()}render(){let t=r[this.variant];return(0,n.h)(n.a,null,this.styles&&(0,n.h)("style",null,this.styles),(0,n.h)("div",{part:(0,i.c)("base",this.animationState,`type-${this.type}`,`variant-${this.variant}`,this.isOpen&&"open"),role:this.role},(0,n.h)("div",{part:"icon","aria-hidden":"true"},(0,n.h)("slot",{name:"icon"},(0,n.h)(t,{size:20,selected:"toast"===this.type}))),(0,n.h)("div",{part:"body","aria-live":void 0===this.role?void 0:this.innerAriaLive},(0,n.h)("div",{part:"heading",role:"heading","aria-level":this.headingLevel,"aria-label":`${this.ariaHeading} ${this.heading}`},(0,n.h)("span",null,this.heading)),this.hasTextSlot&&(0,n.h)("div",{part:"text"},(0,n.h)("slot",{name:"text"}))),this.dismissible&&(0,n.h)("scale-button",{part:"close-button",variant:"ghost",onClick:()=>{this.lastCloseEventTrigger="CLOSE_BUTTON",this.opened=!1}},(0,n.h)("slot",{name:"close-icon"},(0,n.h)("scale-icon-action-circle-close",{"aria-label":this.closeButtonLabel,accessibilityTitle:this.closeButtonTitle,decorative:!0,size:20})))))}get hostElement(){return(0,n.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};s.style=":host{--width:100%;--width-toast:25rem;--radius:var(--telekom-radius-standard);--spacing-y:var(--telekom-spacing-composition-space-06);--spacing-y-inner:var(--telekom-spacing-composition-space-04);--spacing-x-aside:var(--telekom-spacing-composition-space-14);--duration-in:var(--telekom-motion-duration-transition);--duration-out:var(--telekom-motion-duration-transition);--easing-in:var(--telekom-motion-easing-enter);--easing-out:var(--telekom-motion-easing-exit);--translate-x:0;--translate-y:0;--translate-z:0;display:contents}[part~='base']{position:relative;display:none;box-sizing:border-box;border-radius:var(--radius);padding-right:var(--spacing-x-aside);width:var(--width);background:var(--_background-subtle);box-shadow:var(--_shadow);animation-duration:var(--duration)}[part~='base'][part~='open']{display:flex}@keyframes toggle{from{opacity:0;transform:translate3d(\n      var(--translate-x),\n      var(--translate-y),\n      var(--translate-z)\n    )}}[part~='in']{animation-name:toggle;animation-duration:var(--duration-in);animation-timing-function:var(--easing-in)}[part~='out']{animation-name:toggle;animation-direction:reverse;animation-duration:var(--duration-out);animation-timing-function:var(--easing-out)}[part~='variant-informational']{--_background-subtle:var(--telekom-color-functional-informational-subtle);--_background-accent:var(--telekom-color-functional-informational-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-informational)}[part~='variant-warning']{--_background-subtle:var(--telekom-color-functional-warning-subtle);--_background-accent:var(--telekom-color-functional-warning-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-warning)}[part~='variant-success']{--_background-subtle:var(--telekom-color-functional-success-subtle);--_background-accent:var(--telekom-color-functional-success-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-success)}[part~='variant-danger']{--_background-subtle:var(--telekom-color-functional-danger-subtle);--_background-accent:var(--telekom-color-functional-danger-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-danger)}[part~='type-banner']{--_shadow:var(--telekom-shadow-floating-standard)}[part~='type-toast']{--translate-x:var(--telekom-spacing-composition-space-05);--_shadow:var(--telekom-shadow-top);width:var(--width-toast)}[part='icon']{display:flex;flex-shrink:0;justify-content:center;align-items:flex-start;width:var(--spacing-x-aside);padding-top:var(--spacing-y);padding-bottom:var(--spacing-y);border-top-left-radius:var(--radius);border-bottom-left-radius:var(--radius);color:var(--_color-accent)}[part~='type-toast'] [part='icon']{background:var(--_background-accent);color:var(--telekom-color-text-and-icon-white-standard);align-items:center}[part~='type-toast'][part~='variant-warning'] [part='icon']{color:var(--telekom-color-text-and-icon-black-standard)}[part='body']{margin-top:var(--spacing-y);margin-bottom:var(--spacing-y)}[part~='type-toast'] [part='body']{padding-left:var(--spacing-y)}[part='heading']{font:var(--telekom-text-style-heading-6);line-height:var(--telekom-typography-line-spacing-tight)}[part='text']{margin-top:var(--spacing-y-inner)}::slotted(*){font:var(--telekom-text-style-body)}::slotted(p){margin:0;margin-top:var(--spacing-y-inner)}[part='close-button']{--color-ghost:var(--telekom-text-and-icon-standard);position:absolute;right:var(--telekom-spacing-composition-space-03);top:var(--telekom-spacing-composition-space-03)}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part~='base']{border:1px solid white}[part='close-button']{--color-ghost:white}}"},31811:function(t,e,a){a.d(e,{a:function(){return d},b:function(){return r},c:function(){return i},e:function(){return o},g:function(){return c},h:function(){return n},i:function(){return s}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let n=t=>!!t.shadowRoot&&!!t.attachShadow,i=t=>{let e=document.styleSheets[0];if(!e){let t=document.createElement("style");document.head.appendChild(t),e=document.styleSheets[0],document.head.removeChild(t)}return function(){try{return/^:/.test(t)||(t=":"+t),e.insertRule("html"+t+"{}",0),e.deleteRule(0),!0}catch(t){return!1}}()};function o(t,e,a){let n=e+"Legacy",i=[];return void 0!==t[n]&&i.push(t[n].emit(a)),i.push(t[e].emit(a)),i}function r(t,e){let a=t.target,n=null!=a.shadowRoot,i=n?t.composedPath():[];do{if(a===e)return!1;a=n?i.shift():a.parentNode}while(a);return!0}let s=t=>null!=t&&1===t.nodeType&&"SCALE-ICON"===t.nodeName.toUpperCase().substring(0,10),l=0;function c(){return l++}let d=t=>Promise.all(t.getAnimations({subtree:!0}).map(t=>t.finished))}}]);