"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{55860:function(t,i,o){o.d(i,{c:function(){return e}});var n,a,e=(n=a={path:void 0,exports:{},require:function(t,i){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},a.exports,function(){var t={}.hasOwnProperty;function i(){for(var o=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var e=typeof a;if("string"===e||"number"===e)o.push(a);else if(Array.isArray(a)&&a.length){var s=i.apply(null,a);s&&o.push(s)}else if("object"===e)for(var r in a)t.call(a,r)&&a[r]&&o.push(r)}}return o.join(" ")}n.exports?(i.default=i,n.exports=i):window.classNames=i}(),a.exports)},10157:function(t,i,o){o.r(i),o.d(i,{scale_notification_toast:function(){return r}});var n=o(17005),a=o(55860),e=o(75113),s=o(31811);let r=class{constructor(t){(0,n.r)(this,t),this.scaleClosing=(0,n.c)(this,"scale-closing",7),this.scaleClose=(0,n.c)(this,"scale-close",7),this.variant="informational",this.animated=!0,this.alignment="top-right",this.positionVertical=12,this.positionHorizontal=12,this.autoHide=!1,this.autoHideDuration=3e3,this.fadeDuration=500,this.closeButtonLabel="close",this.closeButtonTitle="close",this.toastHeightWithOffset=0,this.hideToast=!1,this.close=()=>{(0,s.e)(this,"scaleClosing"),this.hideToast=!0,setTimeout(()=>{this.opened=!1,(0,s.e)(this,"scaleClose")},this.fadeDuration)},this.transitions=t=>`
      @keyframes fadeIn {
        from {
          opacity: 0;
          ${this.alignmentVertical}: -${t}px;
        }
        to {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
      }
  
      @keyframes fadeOut {
        from {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
        to {
          opacity: 0;
          ${this.alignmentVertical}: -${t}px;
        }
      }
    `,this.animationStyle=t=>this.animated?`
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeIn ${this.fadeDuration/1e3}s ease-in-out;
          ${this.alignmentVertical}: ${this.positionVertical}px;
          opacity: 1;
        },
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeOut ${this.fadeDuration/1e3}s ease-in-out;
          ${this.alignmentVertical}: -${t}px;
          opacity: 0;
        }
      `:`
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: ${this.positionVertical}px;
      opacity: 1;
    },
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: -${t}px;
      opacity: 0;
    }
  `}connectedCallback(){(0,e.s)({source:this.element,type:"warn"})}componentWillLoad(){let t=this.alignment.split("-");this.alignmentVertical=t[0],this.alignmentHorizontal=t[1]}componentDidRender(){!0===this.autoHide&&setTimeout(this.close,this.autoHideDuration)}handleIcons(){if(this.variant)switch(this.variant){case"success":return(0,n.h)("scale-icon-action-success",{class:"notification-toast__icon",size:20,color:"#ffffff",selected:!0,"aria-hidden":"true"});case"informational":return(0,n.h)("scale-icon-alert-information",{class:"notification-toast__icon",size:20,selected:!0,color:"#ffffff","aria-hidden":"true"});case"error":return(0,n.h)("scale-icon-alert-error",{class:"notification-toast__icon",size:20,selected:!0,color:"#ffffff","aria-hidden":"true"});case"warning":return(0,n.h)("scale-icon-alert-warning",{class:"notification-toast__icon",color:"#ffff",size:20,selected:!0,"aria-hidden":"true"})}}async open(){this.opened=!0,this.hideToast=!1}render(){if(this.opened)return(0,n.h)(n.a,null,this.styles&&(0,n.h)("style",null,this.styles),(0,n.h)("style",null,this.transitions(this.toastHeightWithOffset)),(0,n.h)("style",null,this.animationStyle(this.toastHeightWithOffset)),(0,n.h)("div",{role:"alert",style:{display:`${this.opened?"":"none"}`},class:this.getCssClassMap(),part:this.getBasePartMap(),tabindex:"0"},(0,n.h)("div",{class:"notification-toast__icon-container"},this.handleIcons()),(0,n.h)("div",{class:"notification-toast__text-container"},(0,n.h)("slot",{name:"header"}),(0,n.h)("slot",{name:"body"}),(0,n.h)("scale-link",{href:this.href,class:"notification-toast__link",role:"link"},(0,n.h)("slot",{name:"link"}))),(0,n.h)("button",{part:"button-dismissable",type:"button",class:"notification-toast__button-close",onClick:()=>this.close(),tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:t=>{"Enter"===t.key&&this.close()}},(0,n.h)("scale-icon-action-circle-close",null))))}getToastHeightWithOffset(){let t=this.element.shadowRoot.querySelector(".toast").scrollHeight;this.toastHeightWithOffset=t+this.positionVertical}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){let i="notification-toast",o="basePart"===t?"":`${i}`;return(0,a.c)("basePart"===t?"base":i,this.variant&&`${o}--variant-${this.variant}`,!!this.opened&&`${o}--opened`,!this.hideToast&&`${o}--show`,!!this.hideToast&&`${o}--hide`,this.story&&`${o}--story`)}get element(){return(0,n.g)(this)}};r.style=":host{--width:366px;--width-icon-container:48px;--radius:var(--telekom-radius-standard);--background:var(--telekom-color-background-surface);--z-index:100;--box-shadow:var(--telekom-shadow-raised-standard);--background-success-icon-container:var(\n    --telekom-color-functional-success-standard\n  );--background-warning-icon-container:var(\n    --telekom-color-functional-warning-standard\n  );--background-error-icon-container:var(\n    --telekom-color-functional-danger-standard\n  );--background-informational-icon-container:var(\n    --telekom-color-functional-informational-standard\n  );--background-success-text-container:var(\n    --telekom-color-functional-success-subtle\n  );--background-warning-text-container:var(\n    --telekom-color-functional-warning-subtle\n  );--background-error-text-container:var(\n    --telekom-color-functional-danger-subtle\n  );--background-informational-text-container:var(\n    --telekom-color-functional-informational-subtle\n  )}.notification-toast{width:calc(var(--width) - var(--width-icon-container));opacity:1;z-index:var(--z-index);position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:0 var(--radius) var(--radius) 0;flex-direction:column;justify-content:space-between}.notification-toast.notification-toast--story{position:absolute}.notification-toast.notification-toast--story.notification-toast--hide{opacity:0}.notification-toast.notification-toast--story.notification-toast--opened{opacity:1}.notification-toast.notification-toast--variant-success{background:var(--background-success-text-container)}.notification-toast.notification-toast--variant-warning{background:var(--background-warning-text-container)}.notification-toast.notification-toast--variant-error{background:var(--background-error-text-container)}.notification-toast.notification-toast--variant-informational{background:var(--background-informational-text-container)}.notification-toast__icon{position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px}.notification-toast__icon-container{height:100%;width:var(--width-icon-container);position:absolute;left:calc(var(--width-icon-container) * -1 + 1px);top:0;float:left;border-radius:var(--radius) 0 0 var(--radius)}.notification-toast.notification-toast--variant-success .notification-toast__icon-container{background:var(--background-success-icon-container)}.notification-toast.notification-toast--variant-warning .notification-toast__icon-container{background:var(--background-warning-icon-container)}.notification-toast.notification-toast--variant-error .notification-toast__icon-container{background:var(--background-error-icon-container)}.notification-toast.notification-toast--variant-informational .notification-toast__icon-container{background:var(--background-informational-icon-container)}::slotted([slot='header']){margin:0;padding:3px var(--width-icon-container) 0 10px;font-weight:bold;font-size:16px}::slotted([slot='body']){padding:3px 0 0 10px;margin:0}::slotted([slot='link']){padding:10px 0 15px 10px;margin:0}.notification-toast__text-container{width:calc(var(--width) - calc(var(--width-icon-container) * 1));min-height:33px;float:left;position:relative;margin:0 0 0 1px;padding:15px 0 0 0}.notification-toast__button-close{position:absolute;top:10px;right:7.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-toast__button-close svg{height:19px;width:19px;padding:7.5px 6.5px 6.5px 6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-toast__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-toast__button-close svg{color:hsl(0, 0%, 100%)}.notification-toast{border:1px solid hsl(0, 0%, 100%)}.notification-toast__icon-container{border:1px solid hsl(0, 0%, 100%);margin-top:-1px}}"},75113:function(t,i,o){o.d(i,{s:function(){return e}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let n={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},a={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function e({tag:t="WIP",extraMessage:i=null,message:o=null,source:e=null,type:s="info"}){let r=console[s];r(`%c scale – ${n[t]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${o||a[t]} ${i?"\n"+i:""}
    `,null!==e?"\nsource:":"","object"==typeof e?e:`${e}`,null!==e?"\n\n":"")}},31811:function(t,i,o){o.d(i,{a:function(){return d},b:function(){return s},c:function(){return a},e:function(){return e},g:function(){return l},h:function(){return n},i:function(){return r}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let n=t=>!!t.shadowRoot&&!!t.attachShadow,a=t=>{let i=document.styleSheets[0];if(!i){let t=document.createElement("style");document.head.appendChild(t),i=document.styleSheets[0],document.head.removeChild(t)}return function(){try{return/^:/.test(t)||(t=":"+t),i.insertRule("html"+t+"{}",0),i.deleteRule(0),!0}catch(t){return!1}}()};function e(t,i,o){let n=i+"Legacy",a=[];return void 0!==t[n]&&a.push(t[n].emit(o)),a.push(t[i].emit(o)),a}function s(t,i){let o=t.target,n=null!=o.shadowRoot,a=n?t.composedPath():[];do{if(o===i)return!1;o=n?a.shift():o.parentNode}while(o);return!0}let r=t=>null!=t&&1===t.nodeType&&"SCALE-ICON"===t.nodeName.toUpperCase().substring(0,10),c=0;function l(){return c++}let d=t=>Promise.all(t.getAnimations({subtree:!0}).map(t=>t.finished))}}]);