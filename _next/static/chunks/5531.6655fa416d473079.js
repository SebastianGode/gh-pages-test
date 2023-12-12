"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5531],{25531:function(e,o,t){t.r(o),t.d(o,{scale_checkbox:function(){return i},scale_icon_action_minus:function(){return n}});var r=t(17005),a=t(31811),c=t(75113);let i=class{constructor(e){(0,r.r)(this,e),this.scaleChange=(0,r.c)(this,"scale-change",7),this.scaleChangeLegacy=(0,r.c)(this,"scaleChange",7),this.label="",this.hideLabel=!1,this.status="",this.invalid=!1,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.value="",this.internalId=(0,a.g)(),this.handleChange=e=>{this.indeterminate?(this.indeterminate=!1,this.checked=!0,e.target.checked=!0):this.checked=e.target.checked;let{checked:o,indeterminate:t,value:r,disabled:c}=this;(0,a.e)(this,"scaleChange",{checked:o,indeterminate:t,value:r,disabled:c})}}componentDidRender(){""!==this.status&&(0,c.s)({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.host}),this.host.hasAttribute("aria-label")&&(0,c.s)({tag:"deprecated",message:'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckbox" property!',type:"warn",source:this.host})}connectedCallback(){this.inputId||(this.inputId="input-checkbox-"+this.internalId)}renderIcon(){return this.indeterminate?(0,r.h)("scale-icon-action-minus",{part:"icon",decorative:!0}):this.checked?(0,r.h)("scale-icon-action-checkmark",{part:"icon",decorative:!0}):void 0}renderHelperIcon(){return this.helperText&&!this.invalid?(0,r.h)("scale-icon-alert-information",{size:11}):this.invalid?(0,r.h)("scale-icon-alert-error",{size:11}):void 0}renderHelperText(e){if(this.helperText&&""!==this.helperText)return(0,r.h)("div",{part:"helper-text",id:e.id,"aria-live":"polite","aria-relevant":"additions removals"},this.renderHelperIcon(),e.content)}render(){let e={id:this.helperText?`helper-message-${this.internalId}`:null,content:this.helperText};return(0,r.h)(r.a,{class:{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,error:"error"===this.status||this.invalid,hideLabel:this.hideLabel}},(0,r.h)("input",{type:"checkbox",part:"input",name:this.name||null,id:this.inputId,value:this.value,checked:this.checked,indeterminate:this.indeterminate,"aria-label":this.ariaLabelCheckbox,"aria-checked":!!this.indeterminate&&"mixed","aria-invalid":"error"===this.status||this.invalid,"aria-describedBy":e.id,disabled:this.disabled,required:this.required,onChange:this.handleChange}),(0,r.h)("label",{part:"container",htmlFor:this.inputId},(0,r.h)("div",{part:"checkbox"},this.renderIcon()),(0,r.h)("div",{part:"label"},this.label||(0,r.h)("slot",null))),this.renderHelperText(e))}get host(){return(0,r.g)(this)}};i.style=":host,scale-checkbox{--spacing-x:var(--telekom-spacing-composition-space-04);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-text:var(--telekom-color-text-and-icon-standard);--color-error:var(--telekom-color-functional-danger-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-standard:var(--telekom-color-background-surface);--background-disabled:none;--color-primary:var(--telekom-color-primary-standard);--color-focus:var(--telekom-color-functional-focus-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--width-control:var(--telekom-spacing-composition-space-07);--height-control:var(--telekom-spacing-composition-space-07);--transition-control:var(--transition);--spacing-control:var(--telekom-spacing-composition-space-02);--spacing-left-control:var(--telekom-spacing-composition-space-03);--radius-control:var(--telekom-radius-small);--border-width-control:var(--telekom-line-weight-standard);--transition-helper-text:var(--transition);--spacing-left-helper-text:calc(var(--width-control) + var(--spacing-x));--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--font-weight-label:var(--telekom-typography-font-weight-medium);--transition-label:var(--transition);--color-icon-checked-disabled:var(--telekom-color-text-and-icon-disabled);--color-icon-checked-active:var(\n    --telekom-color-text-and-icon-white-standard\n  );--width-icon:var(--telekom-spacing-composition-space-06);--height-icon:var(--telekom-spacing-composition-space-06);--stroke-width:var(--stroke-width-checkbox, 0.5px)}scale-checkbox{position:relative;display:flex;width:fit-content;flex-direction:column;color:var(--color-text)}scale-checkbox [part='icon'],scale-checkbox [part='checkbox'],scale-checkbox [part='label'],scale-checkbox [part='helper-text']{transition:var(--transition)}scale-checkbox [part='input'],scale-checkbox.hideLabel [part='label']{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}scale-checkbox [part='checkbox']{box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:var(--width-control);height:var(--height-control);border-radius:var(--radius-control);border:var(--border-width-control) solid\n    var(--telekom-color-ui-border-standard)}scale-checkbox [part='label']{font-weight:var(--font-weight-label);margin-left:var(--spacing-x)}scale-checkbox [part='icon']{width:var(--width-icon);height:var(--height-icon);color:var(--color-icon-checked-active)}scale-checkbox [part='icon'] svg{width:100%;height:100%}scale-checkbox [part='icon'] svg rect,scale-checkbox [part='icon'] svg path{stroke:currentColor;stroke-width:var(--stroke-width)}scale-checkbox [part='container']{align-items:center;display:flex;line-height:var(--telekom-typography-line-spacing-standard)}scale-checkbox [part='helper-text']{font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x) +\n      calc(var(--border-width-control) * 2)\n  );display:flex;align-items:center}scale-checkbox.indeterminate [part='checkbox']{background:var(--telekom-color-primary-standard);border:none;color:var(--color-icon-checked-active)}scale-checkbox.indeterminate [part='icon']{color:var(--color-icon-checked-active)}scale-checkbox.checked [part='checkbox']{background:var(--telekom-color-primary-standard);border-color:var(--telekom-color-primary-standard);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:hover [part='checkbox']{background:var(--telekom-color-ui-state-fill-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox.checked [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed);color:var(--color-icon-checked-active)}scale-checkbox [part='input']:focus~[part='container'] [part='checkbox']{outline:var(--telekom-spacing-composition-space-02) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}scale-checkbox [part='container']:hover{color:var(--color-primary-hover);cursor:pointer}scale-checkbox.checked [part='container']:hover [part='checkbox'],scale-checkbox.indeterminate [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-primary-hovered)}scale-checkbox.checked [part='input']:active~[part='container'],scale-checkbox.checked [part='container']:active{color:var(--color-primary-active)}scale-checkbox [part='input']:active~[part='container'] [part='checkbox'],scale-checkbox.checked [part='container']:active [part='checkbox'],scale-checkbox.indeterminate [part='container']:active [part='checkbox']{background:var(--telekom-color-primary-pressed);border-color:var(--telekom-color-primary-pressed)}scale-checkbox:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-composition-space-03)}scale-checkbox.error [part='helper-text']{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='helper-text'] scale-icon-alert-error{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--color-error);border:none}scale-checkbox.error [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--color-error)}scale-checkbox.error [part='checkbox']:hover{background-color:var(--telekom-color-ui-state-fill-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='checkbox']:active{background-color:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.error:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.checked.error [part='container']:hover [part='checkbox']{background-color:var(--telekom-color-primary-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='helper-text']{padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x)\n  )}scale-checkbox.disabled{cursor:not-allowed}scale-checkbox.disabled [part='container'],scale-checkbox.disabled [part='helper-text']{color:var(--color-disabled);pointer-events:none}scale-checkbox.disabled [part='checkbox']{background:var(--telekom-color-ui-solid-fill-disabled);border-color:var(--telekom-color-ui-border-disabled)}scale-checkbox.checked.disabled [part='checkbox']{background-color:var(--telekom-color-ui-disabled);border-color:transparent}scale-checkbox.checked.disabled [part='icon']{color:var(--color-icon-checked-disabled);background-color:var(--telekom-color-ui-disabled)}scale-checkbox.disabled [part='helper-text'] scale-icon-alert-information,scale-checkbox.disabled.error [part='helper-text'] scale-icon-alert-error{color:var(--color-disabled)}";let n=class{constructor(e){(0,r.r)(this,e),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){let e=this.decorative?{"aria-hidden":"true"}:{},o=this.focusable?{tabindex:0}:{};return(0,r.h)(r.a,null,(0,r.h)("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},e,o),this.accessibilityTitle&&(0,r.h)("title",null,this.accessibilityTitle),(0,r.h)("g",{fill:"currentColor"===this.fill?this.color:this.fill},this.selected?(0,r.h)("g",null,(0,r.h)("path",{d:"M19.5 10.75h-15a1.25 1.25 0 000 2.5h15a1.25 1.25 0 100-2.5z","fill-rule":"evenodd"})):(0,r.h)("g",null,(0,r.h)("path",{d:"M19.5 12.75h-15a.75.75 0 110-1.5h15a.75.75 0 110 1.5z","fill-rule":"evenodd"})))))}get hostElement(){return(0,r.g)(this)}};n.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}"},75113:function(e,o,t){t.d(o,{s:function(){return c}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let r={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},a={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function c({tag:e="WIP",extraMessage:o=null,message:t=null,source:c=null,type:i="info"}){let n=console[i];n(`%c scale – ${r[e]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${t||a[e]} ${o?"\n"+o:""}
    `,null!==c?"\nsource:":"","object"==typeof c?c:`${c}`,null!==c?"\n\n":"")}},31811:function(e,o,t){t.d(o,{a:function(){return h},b:function(){return i},c:function(){return a},e:function(){return c},g:function(){return s},h:function(){return r},i:function(){return n}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let r=e=>!!e.shadowRoot&&!!e.attachShadow,a=e=>{let o=document.styleSheets[0];if(!o){let e=document.createElement("style");document.head.appendChild(e),o=document.styleSheets[0],document.head.removeChild(e)}return function(){try{return/^:/.test(e)||(e=":"+e),o.insertRule("html"+e+"{}",0),o.deleteRule(0),!0}catch(e){return!1}}()};function c(e,o,t){let r=o+"Legacy",a=[];return void 0!==e[r]&&a.push(e[r].emit(t)),a.push(e[o].emit(t)),a}function i(e,o){let t=e.target,r=null!=t.shadowRoot,a=r?e.composedPath():[];do{if(t===o)return!1;t=r?a.shift():t.parentNode}while(t);return!0}let n=e=>null!=e&&1===e.nodeType&&"SCALE-ICON"===e.nodeName.toUpperCase().substring(0,10),l=0;function s(){return l++}let h=e=>Promise.all(e.getAnimations({subtree:!0}).map(e=>e.finished))}}]);