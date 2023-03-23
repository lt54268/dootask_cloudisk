import{m as o,d as r,h as l,n as c}from"./app.d6214888.js";var u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-setting"},[t("PageTitle",{attrs:{title:e.$L(e.titleNameRoute)}}),t("div",{staticClass:"setting-head"},[t("div",{staticClass:"setting-titbox"},[t("div",{staticClass:"setting-title"},[t("h1",[e._v(e._s(e.$L(e.settingTitleName)))]),e.show768Box?e._e():t("div",{staticClass:"setting-more",on:{click:function(s){return e.toggleRoute("index")}}},[t("Icon",{attrs:{type:"md-close"}})],1)])])]),t("div",{staticClass:"setting-box",class:{"show768-box":e.show768Box}},[t("div",{staticClass:"setting-menu"},[t("ul",[e._l(e.menu,function(s,n){return t("li",{key:n,class:e.classNameRoute(s.path,s.divided),on:{click:function(g){return e.toggleRoute(s.path)}}},[e._v(e._s(e.$L(s.name)))])}),e.clientNewVersion?t("li",{staticClass:"flex",class:e.classNameRoute("version",!0),on:{click:function(s){return e.toggleRoute("version")}}},[t("AutoTip",{attrs:{disabled:""}},[e._v(e._s(e.$L("\u7248\u672C"))+": "+e._s(e.version))]),t("Badge",{attrs:{text:e.clientNewVersion}})],1):t("li",{staticClass:"version divided",on:{click:e.onVersion}},[t("AutoTip",[e._v(e._s(e.$L("\u7248\u672C"))+": "+e._s(e.version))])],1)],2)]),t("div",{staticClass:"setting-content"},[t("div",{staticClass:"setting-content-title"},[e._v(e._s(e.$L(e.titleNameRoute)))]),t("div",{staticClass:"setting-content-view"},[t("router-view",{staticClass:"setting-router-view"})],1)])])],1)},d=[];const m={data(){return{version:window.systemInfo.version}},mounted(){},computed:{...o(["userInfo","userIsAdmin","clientNewVersion"]),routeName(){return this.$route.name},show768Box(){return this.routeName==="manage-setting"},menu(){const e=[{path:"personal",name:"\u4E2A\u4EBA\u8BBE\u7F6E"},{path:"checkin",name:"\u7B7E\u5230\u8BBE\u7F6E",desc:" (Beta)"},{path:"language",name:"\u8BED\u8A00\u8BBE\u7F6E"},{path:"theme",name:"\u4E3B\u9898\u8BBE\u7F6E"},{path:"password",name:"\u5BC6\u7801\u8BBE\u7F6E"},{path:"email",name:"\u4FEE\u6539\u90AE\u7BB1"}];return this.$Electron&&e.splice(2,0,{path:"keyboard",name:"\u5FEB\u6377\u952E",desc:" (Beta)"}),["127.0.0.1:2222","192.168.100.88:2222","dootask.com","www.dootask.com","t.hitosea.com"].includes($A.getDomain($A.apiUrl("../")))&&this.$isEEUiApp&&e.push({path:"privacy",name:"\u9690\u79C1\u653F\u7B56",divided:!0},{path:"delete",name:"\u5220\u9664\u5E10\u53F7"}),this.userIsAdmin&&e.push({path:"system",name:"\u7CFB\u7EDF\u8BBE\u7F6E",divided:!0},{path:"license",name:"License Key"}),e.push({path:"clearCache",name:"\u6E05\u9664\u7F13\u5B58",divided:!0},{path:"logout",name:"\u9000\u51FA\u767B\u5F55"}),e},titleNameRoute(){const{routeName:e,menu:a}=this;let t="";return a.some(s=>{if(e===`manage-setting-${s.path}`)return t=`${s.name}${s.desc||""}`,!0}),t||"\u8BBE\u7F6E"},settingTitleName(){return this.windowSmall?this.titleNameRoute:"\u8BBE\u7F6E"}},watch:{routeName:{handler(e){e==="manage-setting"&&this.windowLarge&&this.goForward({name:"manage-setting-personal"},!0)},immediate:!0}},methods:{toggleRoute(e){switch(e){case"clearCache":this.$store.dispatch("handleClearCache",null).then(async()=>{await $A.IDBSet("clearCache","handle"),$A.reloadUrl()});break;case"logout":$A.modalConfirm({title:"\u9000\u51FA\u767B\u5F55",content:"\u4F60\u786E\u5B9A\u8981\u767B\u51FA\u7CFB\u7EDF\uFF1F",onOk:()=>{this.$store.dispatch("logout",!1)}});break;case"version":r.Store.set("updateNotification",null);break;case"privacy":this.openPrivacy();break;case"index":this.goForward({name:"manage-setting"});break;default:this.goForward({name:"manage-setting-"+e});break}},openPrivacy(){const e=$A.apiUrl("privacy");this.$isEEUiApp?$A.eeuiAppOpenPage({pageType:"app",pageTitle:" ",url:"web.js",params:{url:e,browser:!0,showProgress:!0}}):window.open(e)},classNameRoute(e,a){return{active:this.windowLarge&&this.routeName===`manage-setting-${e}`,divided:!!a}},onVersion(){l.get($A.apiUrl("system/version")).then(({status:e,data:a})=>{if(e===200){let t=`${this.$L("\u670D\u52A1\u5668")}: ${$A.getDomain($A.apiUrl("../"))}`;t+=`<br/>${this.$L("\u670D\u52A1\u5668\u7248\u672C")}: v${a.version}`,t+=`<br/>${this.$L("\u5BA2\u6237\u7AEF\u7248\u672C")}: v${this.version}`,$A.modalInfo({language:!1,title:"\u7248\u672C\u4FE1\u606F",content:t})}}).catch(e=>{})}}},i={};var h=c(m,u,d,!1,p,null,null,null);function p(e){for(let a in i)this[a]=i[a]}var $=function(){return h.exports}();export{$ as default};
