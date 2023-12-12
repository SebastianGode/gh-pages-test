"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9001],{19001:function(t,e,i){i.r(e),i.d(e,{scale_tooltip:function(){return h}});var o=i(17005),s=i(69663),r=i(31811),n=i(75113);let a=0,h=class{constructor(t){(0,o.r)(this,t),this.tooltipBeforeShow=(0,o.c)(this,"scale-before-show",7),this.tooltipShow=(0,o.c)(this,"scale-show",7),this.tooltipBeforeHide=(0,o.c)(this,"scale-before-hide",7),this.tooltipHide=(0,o.c)(this,"scale-hide",7),this.componentId=`tooltip-${++a}`,this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.arrowOffset=-4,this.arrowPadding=8,this.opened=!1,this.trigger="hover focus",this.flip=!0,this.mouseOverTooltip=!1,this.update=async()=>{if(this.disabled||null==this.triggerEl)return;let{x:t,y:e,placement:i,middlewareData:o}=await (0,s.c)(this.triggerEl,this.tooltipEl,{placement:this.placement,middleware:[(0,s.o)(this.distance),...this.flip?[(0,s.f)()]:[],(0,s.a)({element:this.arrowEl,padding:this.arrowPadding}),(0,s.s)({crossAxis:!0})]});Object.assign(this.tooltipEl.style,{left:`${t}px`,top:`${e}px`});let{x:r,y:n}=o.arrow,[a]=i.split("-");Object.assign(this.arrowEl.style,{left:null!=r?`${r}px`:"",top:null!=n?`${n}px`:"",right:"",bottom:"",[({top:"bottom",right:"left",bottom:"top",left:"right"})[a]]:`${this.arrowOffset}px`})},this.handleBlur=()=>{this.hasTrigger("focus")&&this.hideTooltip()},this.handleClick=()=>{this.hasTrigger("click")&&(this.opened&&!this.hasTrigger("focus")?this.hideTooltip():this.showTooltip())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.showTooltip()},this.handleKeyDown=t=>{this.opened&&"Escape"===t.key&&(t.stopPropagation(),this.hideTooltip())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&this.showTooltip()},this.handleMouseOut=()=>{!this.mouseOverTooltip&&this.hasTrigger("hover")&&this.hideTooltip()},this.handleTooltipMouseOver=()=>{this.mouseOverTooltip=!0},this.handleTooltipBlur=()=>{this.mouseOverTooltip=!1,this.handleMouseOut()},this.hasTrigger=t=>{let e=this.trigger.split(" ");return e.includes(t)}}handleOpenChange(){this.opened?this.showTooltip():this.hideTooltip()}connectedCallback(){(0,n.s)({source:this.hostElement,tag:"beta"}),this.hostElement.hasAttribute("open")&&(0,n.s)({tag:"deprecated",message:"The `open` prop is deprecated in favor of `opened`",source:this.hostElement});let t=Array.from(this.hostElement.children).filter(t=>!t.hasAttribute("slot"));if(0===t.length){(0,n.s)({tag:"warning",message:"An element is required, if using text, wrap it in a `<span>`",type:"warn",source:this.hostElement});return}this.triggerEl=t[0],this.triggerEl.addEventListener("blur",this.handleBlur,!0),this.triggerEl.addEventListener("click",this.handleClick,!0),this.triggerEl.addEventListener("focus",this.handleFocus,!0),this.triggerEl.addEventListener("mouseover",this.handleMouseOver,!0),this.triggerEl.addEventListener("mouseout",this.handleMouseOut,!0)}disconnectedCallback(){this.triggerEl.removeEventListener("blur",this.handleBlur,!0),this.triggerEl.removeEventListener("click",this.handleClick,!0),this.triggerEl.removeEventListener("focus",this.handleFocus,!0),this.triggerEl.removeEventListener("mouseover",this.handleMouseOver,!0),this.triggerEl.removeEventListener("mouseout",this.handleMouseOut,!0)}handleOutsideClick(t){(0,r.b)(t,this.hostElement)&&this.hideTooltip()}componentDidUpdate(){this.update(),this.opened&&this.showTooltip()}componentDidRender(){this.update()}async showTooltip(){if(this.opened)return;let t=this.tooltipBeforeShow.emit();if(t.defaultPrevented){this.opened=!1;return}this.opened=!0,this.update()}async hideTooltip(){if(!this.opened)return;let t=this.tooltipBeforeHide.emit();if(t.defaultPrevented){this.opened=!0;return}this.opened=!1,this.update()}render(){return(0,o.h)(o.a,{onKeyDown:this.handleKeyDown},this.styles&&(0,o.h)("style",null,this.styles),(0,o.h)("span",{part:"trigger","aria-describedby":this.componentId},(0,o.h)("slot",null)),!this.disabled&&(0,o.h)("div",{part:"tooltip",role:"tooltip","aria-hidden":this.opened?"false":"true",ref:t=>this.tooltipEl=t,id:this.componentId,onMouseOver:this.handleTooltipMouseOver,onMouseLeave:this.handleTooltipBlur},(0,o.h)("slot",{name:"content"},this.content),(0,o.h)("div",{"aria-hidden":"true",part:"arrow",ref:t=>this.arrowEl=t})))}get hostElement(){return(0,o.g)(this)}static get watchers(){return{opened:["handleOpenChange"]}}};h.style=":host{--radius:var(--telekom-radius-small);--background:var(--telekom-color-background-surface-highlight);--color:var(--telekom-color-text-and-icon-white-standard);--font-weight:var(--telekom-typography-font-weight-regular);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing:var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-04);--arrow-size:12px;--transition-delay-hide:var(--telekom-motion-duration-instant);--transition-duration-hide:var(--telekom-motion-duration-immediate);--transition-timing-function-hide:var(--telekom-motion-easing-standard);--transition-duration-show:var(--telekom-motion-duration-immediate);--transition-timing-function-show:var(--telekom-motion-easing-standard);--z-index:var(--scl-z-index-70);display:contents;position:relative;box-sizing:border-box}[part='tooltip']{position:absolute;z-index:var(--z-index);top:0;left:0;background:var(--background);color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);padding:var(--spacing);border-radius:var(--radius);transition-property:opacity;transition-duration:var(--transition-duration-show);transition-timing-function:var(--transition-timing-function-show)}[part='tooltip'][aria-hidden='true']{opacity:0;transition-delay:var(--transition-delay-hide);transition-duration:var(--transition-duration-hide);transition-timing-function:var(--transition-timing-function-hide);pointer-events:none}[part='trigger']{}[part='arrow']{position:absolute;z-index:-1;background:var(--background);width:var(--arrow-size);height:var(--arrow-size);transform:rotate(45deg)}@media screen and (-ms-high-contrast: active){[part='tooltip']{border:1px solid yellow}}"}}]);