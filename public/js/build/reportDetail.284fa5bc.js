import{R as o}from"./ReportDetail.9cf6a3b9.js";import{n as p}from"./app.f77e0ba6.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.8b53491b.js";import"./@babel.f9bcab46.js";import"./dayjs.cca95ac2.js";import"./localforage.aabfe982.js";import"./markdown-it.bda97caf.js";import"./mdurl.ce6c1dd8.js";import"./uc.micro.8d343c98.js";import"./entities.48a44fec.js";import"./linkify-it.c5e8196e.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.897ae552.js";import"./vue.fd9b772e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.50be9c5e.js";import"./clipboard.058ef547.js";import"./view-design-hi.6f78f8ef.js";import"./vuedraggable.9fd6afed.js";import"./sortablejs.d74243d9.js";import"./vue-resize-observer.c3c9ca4e.js";import"./element-sea.7f208f9b.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.0bdc1850.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.49abba38.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"electron-report"},[e("PageTitle",{attrs:{title:t.$L("\u62A5\u544A\u8BE6\u60C5")}}),e("ReportDetail",{attrs:{data:t.detailData}})],1)},m=[];const s={components:{ReportDetail:o},data(){return{detailData:{}}},computed:{reportDetailId(){const{reportDetailId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)}},watch:{reportDetailId:{handler(){this.getDetail()},immediate:!0}},methods:{getDetail(){this.reportDetailId<=0||this.$store.dispatch("call",{url:"report/detail",data:{id:this.reportDetailId}}).then(({data:t})=>{this.detailData=t}).catch(({msg:t})=>{$A.messageError(t)})}}},i={};var l=p(s,a,m,!1,n,"76126c11",null,null);function n(t){for(let r in i)this[r]=i[r]}var U=function(){return l.exports}();export{U as default};
