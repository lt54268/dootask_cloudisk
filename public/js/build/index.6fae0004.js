import{n as s}from"./app.d6214888.js";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-resize-line",class:[e.resizing?"resizing":"",e.placement],on:{mousedown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"left",37,i.key,["Left","ArrowLeft"])||"button"in i&&i.button!==0?null:(i.stopPropagation(),i.preventDefault(),e.resizeDown.apply(null,arguments))}}})},u=[];const m={name:"ResizeLine",props:{value:{},min:{type:Number,default:100},max:{type:Number,default:600},placement:{validator(e){return["right","bottom"].includes(e)},default:"bottom"},reverse:{type:Boolean,default:!1},beforeResize:Function},data(){return{resizing:!1,mouseX:0,mouseY:0,offset:{},tmpSize:void 0}},mounted(){document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0)},methods:{resizeDown(e){if(!this.beforeResize){this.handleDown(e);return}const t=this.beforeResize();t&&t.then?t.then(n=>{this.handleDown(e)}):this.handleDown(e)},handleDown(e){this.mouseX=e.pageX||e.clientX+document.documentElement.scrollLeft,this.mouseY=e.pageY||e.clientY+document.documentElement.scrollTop,this.offset={left:e.target.offsetLeft,top:e.target.offsetTop},this.resizing=!0,typeof this.value=="number"&&(this.tmpSize=this.value),this.$emit("on-change",{event:"down"})},handleMove(e){if(!this.resizing)return;let t=(e.pageX||e.clientX+document.documentElement.scrollLeft)-this.mouseX,n=(e.pageY||e.clientY+document.documentElement.scrollTop)-this.mouseY;if(typeof this.tmpSize=="number"){let i;this.placement=="bottom"?i=this.reverse?this.tmpSize-n:this.tmpSize+n:i=this.reverse?this.tmpSize-t:this.tmpSize+t,this.min>0&&(i=Math.max(this.min,i)),this.max>0&&(i=Math.min(this.max,i)),this.$emit("input",i)}this.$emit("on-change",{event:"move",diff:{x:t,y:n},offset:this.offset})},handleUp(){!this.resizing||(this.resizing=!1,this.tmpSize=void 0,this.$emit("on-change",{event:"up"}))}}},o={};var c=s(m,l,u,!1,d,"3f2fedd4",null,null);function d(e){for(let t in o)this[t]=o[t]}var f=function(){return c.exports}(),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"body",staticClass:"overlay-body",style:e.bodyStyle},[n("div",{staticClass:"overlay-close"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){return i.stopPropagation(),e.onClose.apply(null,arguments)}}},[n("svg",{staticClass:"icon fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 26",fill:"none",role:"img"}},[n("path",{attrs:{d:"M8.28596 6.51819C7.7978 6.03003 7.00634 6.03003 6.51819 6.51819C6.03003 7.00634 6.03003 7.7978 6.51819 8.28596L11.2322 13L6.51819 17.714C6.03003 18.2022 6.03003 18.9937 6.51819 19.4818C7.00634 19.97 7.7978 19.97 8.28596 19.4818L13 14.7678L17.714 19.4818C18.2022 19.97 18.9937 19.97 19.4818 19.4818C19.97 18.9937 19.97 18.2022 19.4818 17.714L14.7678 13L19.4818 8.28596C19.97 7.7978 19.97 7.00634 19.4818 6.51819C18.9937 6.03003 18.2022 6.03003 17.714 6.51819L13 11.2322L8.28596 6.51819Z",fill:"currentColor"}})])])]),e.resize?n("ResizeLine",{staticClass:"overlay-resize",attrs:{placement:e.placement,min:e.minSize,max:0,reverse:!0,beforeResize:e.beforeResize},on:{"on-change":e.onChangeResize},model:{value:e.dynamicSize,callback:function(i){e.dynamicSize=i},expression:"dynamicSize"}}):e._e(),n("div",{staticClass:"overlay-content"},[e._t("default")],2)],1)},p=[];const v={name:"DrawerOverlayView",components:{ResizeLine:f},props:{placement:{validator(e){return["right","bottom"].includes(e)},default:"bottom"},size:{type:[Number,String],default:"100%"},minSize:{type:Number,default:300},resize:{type:Boolean,default:!0}},data(){return{dynamicSize:0}},computed:{bodyStyle(){let e=this.dynamicSize;return e=e<=100?`${e}%`:`${e}px`,this.placement=="right"?{width:e,height:"100%"}:{width:"100%",height:e}}},watch:{size:{handler(e){this.dynamicSize=parseInt(e)},immediate:!0}},methods:{onClose(){this.$emit("on-close")},beforeResize(){return new Promise(e=>{this.dynamicSize<=100&&this.updateSize(),e()})},onChangeResize({event:e}){e==="up"&&this.updateSize()},updateSize(){this.placement==="bottom"?this.dynamicSize=this.$refs.body.clientHeight:this.dynamicSize=this.$refs.body.clientWidth}}},r={};var _=s(v,h,p,!1,z,null,null,null);function z(e){for(let t in r)this[t]=r[t]}var y=function(){return _.exports}(),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{ref:"modal",attrs:{closable:e.escClosable,"mask-closable":e.maskClosable,"footer-hide":!0,"transition-names":[e.$A.isAndroid()?"":`drawer-slide-${e.placement}`,""],beforeClose:e.beforeClose,fullscreen:"","class-name":e.modalClass},model:{value:e.show,callback:function(i){e.show=i},expression:"show"}},[n("DrawerOverlayView",{attrs:{placement:e.placement,size:e.size,minSize:e.minSize,resize:e.resize},on:{"on-close":e.onClose}},[e._t("default")],2)],1)},g=[];const w={name:"DrawerOverlay",components:{DrawerOverlayView:y},props:{value:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},escClosable:{type:Boolean,default:!0},placement:{validator(e){return["right","bottom"].includes(e)},default:"bottom"},size:{type:[Number,String],default:"100%"},minSize:{type:Number,default:300},resize:{type:Boolean,default:!0},className:{type:String},beforeClose:Function},data(){return{show:this.value}},watch:{value(e){this.show=e},show(e){this.value!==e&&this.$emit("input",e)}},computed:{modalClass(){return this.className?`common-drawer-overlay ${this.className} ${this.placement}`:`common-drawer-overlay ${this.placement}`}},methods:{onClose(){this.$refs.modal.close()}}},a={};var S=s(w,b,g,!1,C,null,null,null);function C(e){for(let t in a)this[t]=a[t]}var x=function(){return S.exports}();export{x as D};
