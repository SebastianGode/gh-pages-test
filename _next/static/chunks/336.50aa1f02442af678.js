"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{55860:function(t,o,a){a.d(o,{c:function(){return s}});var e,r,s=(e=r={path:void 0,exports:{},require:function(t,o){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports,function(){var t={}.hasOwnProperty;function o(){for(var a=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)a.push(r);else if(Array.isArray(r)&&r.length){var n=o.apply(null,r);n&&a.push(n)}else if("object"===s)for(var i in r)t.call(r,i)&&r[i]&&a.push(i)}}return a.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}(),r.exports)},30336:function(t,o,a){a.r(o),a.d(o,{scale_table:function(){return n}});var e=a(17005),r=a(55860),s=a(75113);let n=class{constructor(t){(0,e.r)(this,t),this.showSort=!1,this.striped=!1,this.slots={}}componentWillLoad(){this.hostElement.querySelectorAll("th").forEach(t=>{t.insertAdjacentHTML("afterbegin",`
          <span class="scale-sort-indicator" aria-hidden="true">
            <scale-icon-content-sort-indicator-up class="scale-sort-indicator-icon up" size="16"></scale-icon-content-sort-indicator-up>
            <scale-icon-content-sort-indicator-down class="scale-sort-indicator-icon down" size="16"></scale-icon-content-sort-indicator-down>
          </span>`)})}componentDidLoad(){let t=this.hostElement,o=t.querySelectorAll("scale-progress-bar");o&&o.forEach(t=>{t.showStatus=!1})}componentDidRender(){this.size&&(0,s.s)({tag:"deprecated",message:'Property "size" is deprecated. Please use css overwrites for a small version!',type:"warn",source:this.hostElement})}render(){return(0,e.h)(e.a,{class:this.getCssClassMap()},this.styles&&(0,e.h)("style",null,this.styles),(0,e.h)("slot",null))}getCssClassMap(){return(0,r.c)("table",this.showSort&&"table--sortable",this.striped&&"table--striped")}get hostElement(){return(0,e.g)(this)}};n.style="scale-table{--radius:var(--telekom-radius-standard) var(--telekom-radius-standard) 0 0;--background:var(--telekom-color-ui-state-fill-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--font-size:var(--telekom-typography-font-size-small);--font-weight:var(--telekom-typography-font-weight-bold);--spacing-tbody-td:var(--telekom-spacing-composition-space-06)\n    var(--telekom-spacing-composition-space-04);--border-bottom-tbody-td:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-faint);--background-tbody:var(--telekom-color-ui-state-fill-standard);--background-tbody-tr-hover:var(--telekom-color-ui-state-fill-hovered);--background-tfoot:var(--telekom-color-ui-state-fill-standard);--border-bottom-tfoot-td:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-extra-strong);--spacing-th-sortable:0 var(--telekom-spacing-composition-space-04) 0 0;--background-th-sortable-hover:var(--telekom-color-ui-subtle);--background-th-sortable-active:var(--telekom-color-ui-faint);--box-shadow-th-sortable-focus:inset 0 0 0\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-focus-standard);--background-tr-striped:var(--telekom-color-ui-subtle);--padding:var(--telekom-spacing-composition-space-00)\n    var(--telekom-spacing-composition-space-04)}.table{display:block;overflow:auto;border-radius:var(--radius);background:var(--background);color:var(--color)}.table table{width:100%;white-space:nowrap;border-spacing:0;border-collapse:collapse}.table th{padding:var(--padding);text-align:left;line-height:32px;color:var(--color);font-size:var(--font-size);background:var(--telekom-color-background-surface-subtle)}.table td{padding:var(--padding)}.table tbody tr td{padding:8px}.table tbody td{border-bottom:var(--border-bottom-tbody-td)}.table thead tr th:last-of-type,.table tbody tr td:last-of-type,.table tfoot tr td:last-of-type{padding-right:12px}.table tfoot{background:var(--background-tfoot)}.table tbody{background:var(--background-tbody)}.table tfoot tr td{padding:8px;font-weight:var(--font-weight);border-bottom:var(--border-bottom-tfoot-td)}.table .scale-sort-indicator-icon{display:none !important}.table tbody tr:hover{background:var(--background-tbody-tr-hover)}.table th:focus{outline:none}.table--size-default tbody tr td{padding:var(--spacing-tbody-td)}.table--sortable th{cursor:pointer;padding:var(--spacing-th-sortable)}.table--sortable th:hover{padding:var(--spacing-th-sortable);background:var(--background-th-sortable-hover)}.table--sortable th:active{background:var(--background-th-sortable-active)}.table--sortable th:focus{box-shadow:var(--box-shadow-th-sortable-focus);border-radius:var(--radius)}.table--sortable th .scale-sort-indicator-icon{display:inline-flex !important}.table--sortable th[aria-disabled]{padding:var(--padding);pointer-events:none}.table--sortable th:not([aria-sort]){padding:var(--padding)}.table--sortable th[aria-sort='none']{padding:var(--padding)}.table--sortable th[aria-sort='ascending'] .scale-sort-indicator .up{color:var(--color)}.table--sortable th:hover .scale-sort-indicator .up{color:var(--color-hover)}.table--sortable th:hover[aria-sort='ascending'] .scale-sort-indicator-icon.up{color:var(--color-hover)}.table--sortable th:active[aria-sort='ascending'] .scale-sort-indicator-icon.up{color:var(--color-active)}.table--sortable th[aria-sort='ascending'] .scale-sort-indicator{color:transparent}.table--sortable th:hover[aria-sort='ascending'] .scale-sort-indicator{color:transparent}.table--sortable th:active[aria-sort='ascending'] .scale-sort-indicator{color:transparent}.table--sortable th[aria-sort='descending'] .scale-sort-indicator-icon.up{color:transparent}.table--sortable th:hover[aria-sort='descending'] .scale-sort-indicator-icon.up{color:transparent}.table--sortable th:active[aria-sort='descending'] .scale-sort-indicator-icon.up{color:transparent}.table--sortable th[aria-sort='descending'] .scale-sort-indicator-icon{color:var(--color)}.table--sortable th:hover[aria-sort='descending'] .scale-sort-indicator-icon{color:var(--color-hover)}.table--sortable th:active[aria-sort='descending'] .scale-sort-indicator-icon{color:var(--color-active)}.table--sortable th .scale-sort-indicator{width:16px;height:16px;margin:0 0 0 4px;display:inline-block;position:relative}.table--sortable th .scale-sort-indicator-icon{top:4px;left:0;width:16px;height:16px;position:absolute}.table--sortable th .scale-sort-indicator{color:transparent}.table--sortable th[aria-sort='none']:hover{padding:0 8px 0 0}.table--sortable th[aria-sort='none'] .scale-sort-indicator{display:none}.table--sortable th:not([aria-sort]):hover{padding:0 8px 0 0}.table--sortable th:not([aria-sort]) .scale-sort-indicator{display:none}.table--sortable th:hover .scale-sort-indicator{display:inline-block}.table--striped table tr:nth-child(even){background:var(--background-tr-striped)}"},75113:function(t,o,a){a.d(o,{s:function(){return s}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let e={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},r={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function s({tag:t="WIP",extraMessage:o=null,message:a=null,source:s=null,type:n="info"}){let i=console[n];i(`%c scale – ${e[t]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${a||r[t]} ${o?"\n"+o:""}
    `,null!==s?"\nsource:":"","object"==typeof s?s:`${s}`,null!==s?"\n\n":"")}}}]);