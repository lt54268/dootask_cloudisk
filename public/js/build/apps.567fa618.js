import{M as i}from"./MicroApps.37a5e1bd.js";import{n}from"./app.1af6ee7b.js";import"./DialogWrapper.9a412a54.js";import"./longpress.43ca7fd9.js";import"./index.03de5ea3.js";import"./UserSelect.5d461bf4.js";import"./ImgUpload.8f407411.js";import"./details.2ac4a8b7.js";var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.loading?t._e():e("MicroApps",{attrs:{url:t.appUrl,path:t.path}})},p=[];const s={components:{MicroApps:i},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="manage-apps"&&this.$nextTick(()=>{this.loading=!1;let r=$A.apiUrl("../apps/okr");r.indexOf("http")==-1&&(r=window.location.origin+r),this.appUrl={}.VITE_OKR_WEB_URL||r,this.path=this.$route.query.path||""})},immediate:!0}}},a={};var l=n(s,o,p,!1,c,null,null,null);function c(t){for(let r in a)this[r]=a[r]}var x=function(){return l.exports}();export{x as default};
