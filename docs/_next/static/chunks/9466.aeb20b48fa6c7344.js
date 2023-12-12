"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9466],{49466:function(e,t,n){n.r(t),n.d(t,{scale_tab_panel:function(){return r}});var a=n(17005),s=n(75113);let l=0,r=class{constructor(e){(0,a.r)(this,e),this.generatedId=l++,this.small=!1,this.size="small"}componentDidRender(){!1!==this.small&&(0,s.s)({tag:"deprecated",message:'Property "small" is deprecated.',type:"warn",source:this.el})}render(){return(0,a.h)(a.a,{id:`scale-tab-panel-${this.generatedId}`,role:"tabpanel",tabindex:"0"},this.styles&&(0,a.h)("style",null,this.styles),(0,a.h)("div",{part:"tab-panel",class:"tab-panel"},(0,a.h)("slot",null)))}get el(){return(0,a.g)(this)}};r.style=":host{--spacing-top:var(--telekom-spacing-composition-space-08)}.tab-panel{margin-top:var(--spacing-top)}"},75113:function(e,t,n){n.d(t,{s:function(){return l}});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */let a={beta:"β",WIP:"\uD83D\uDEE0 WIP",deprecated:"\uD83D\uDE35 Deprecation notice",warning:"Warning"},s={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function l({tag:e="WIP",extraMessage:t=null,message:n=null,source:l=null,type:r="info"}){let o=console[r];o(`%c scale – ${a[e]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${n||s[e]} ${t?"\n"+t:""}
    `,null!==l?"\nsource:":"","object"==typeof l?l:`${l}`,null!==l?"\n\n":"")}}}]);