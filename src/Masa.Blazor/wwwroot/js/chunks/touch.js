import{_ as t,a as e}from"./tslib.es6.js";var n,i;class r{constructor(t){this.size=t,n.set(this,[]),i.set(this,0)}push(r){t(this,n,"f")[t(this,i,"f")]=r,e(this,i,(t(this,i,"f")+1)%this.size,"f")}values(){return t(this,n,"f").slice(t(this,i,"f")).concat(t(this,n,"f").slice(0,t(this,i,"f")))}}n=new WeakMap,i=new WeakMap;function s(t){return(t<0?-1:1)*Math.sqrt(Math.abs(t))*1.41421356237}function o(t){if(t.length<2)return 0;if(2===t.length)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const i=s(e),r=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(r-i)*Math.abs(r),n===t.length-1&&(e*=.5)}return 1e3*s(e)}function h(){const t={};return{addMovement:function(e){Array.from(e.changedTouches).forEach((n=>{var i;(null!==(i=t[n.identifier])&&void 0!==i?i:t[n.identifier]=new r(20)).push([e.timeStamp,n])}))},endTouch:function(e){Array.from(e.changedTouches).forEach((e=>{delete t[e.identifier]}))},getVelocity:function(e){var n;const i=null===(n=t[e])||void 0===n?void 0:n.values().reverse();if(!i)throw new Error(`No samples for touch id ${e}`);const r=i[0],s=[],h=[];for(const t of i){if(r[0]-t[0]>100)break;s.push({t:t[0],d:t[1].clientX}),h.push({t:t[0],d:t[1].clientY})}return{x:o(s),y:o(h),get direction(){const{x:t,y:e}=this,[n,i]=[Math.abs(t),Math.abs(e)];return n>i&&t>=0?"right":n>i&&t<=0?"left":i>n&&e>=0?"down":i>n&&e<=0?"up":function(){throw new Error}()}}}}}export{h as u};
//# sourceMappingURL=touch.js.map