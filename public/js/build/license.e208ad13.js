import{m as i,n}from"./app.d6214888.js";var r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"setting-item submit"},[o("Form",{ref:"formData",attrs:{model:t.formData,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(e){e.preventDefault()}}},[o("FormItem",{attrs:{label:"License",prop:"license"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:t.$L("\u8BF7\u8F93\u5165License...")},model:{value:t.formData.license,callback:function(e){t.$set(t.formData,"license",e)},expression:"formData.license"}})],1),o("FormItem",{attrs:{label:t.$L("\u8BE6\u7EC6\u4FE1\u606F")}},[o("div",{staticClass:"license-box"},[o("ul",[o("li",[o("em",[t._v("SN:")]),o("span",[t._v(t._s(t.formData.info.sn))]),o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u5F53\u524D\u73AF\u5883"))+": "+t._s(t.formData.doo_sn))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1)],1),o("li",[o("em",[t._v("IP:")]),o("span",[t._v(t._s(t.infoJoin(t.formData.info.ip)))])]),o("li",[o("em",[t._v(t._s(t.$L("\u57DF\u540D"))+":")]),o("span",[t._v(t._s(t.infoJoin(t.formData.info.domain)))])]),o("li",[o("em",[t._v("MAC:")]),o("span",[t._v(t._s(t.infoJoin(t.formData.info.mac)))]),o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u5F53\u524D\u73AF\u5883"))+": "+t._s(t.infoJoin(t.formData.macs,"-")))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1)],1),o("li",[o("em",[t._v(t._s(t.$L("\u4F7F\u7528\u4EBA\u6570"))+":")]),o("span",[t._v(t._s(t.formData.info.people||t.$L("\u65E0\u9650\u5236"))+" ("+t._s(t.$L("\u5DF2\u4F7F\u7528"))+": "+t._s(t.formData.user_count)+")")]),o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u9650\u5236\u6CE8\u518C\u4EBA\u6570")))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1)],1),o("li",[o("em",[t._v(t._s(t.$L("\u521B\u5EFA\u65F6\u95F4"))+":")]),o("span",[t._v(t._s(t.formData.info.created_at))])]),o("li",[o("em",[t._v(t._s(t.$L("\u5230\u671F\u65F6\u95F4"))+":")]),o("span",[t._v(t._s(t.formData.info.expired_at||t.$L("\u6C38\u4E45")))]),t.formData.info.expired_at?o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u5230\u671F\u540E\u9650\u5236\u6CE8\u518C\u5E10\u53F7")))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1):t._e()],1)])])])],1),o("div",{staticClass:"setting-footer"},[o("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},l=[];const m={data(){return{loadIng:0,formData:{license:"",info:{},macs:[],doo_sn:"",user_count:0}}},mounted(){this.systemSetting()},computed:{...i(["userInfo","formLabelPosition","formLabelWidth"])},methods:{submitForm(){this.$refs.formData.validate(t=>{t&&this.systemSetting(!0)})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)},systemSetting(t){this.loadIng++,this.$store.dispatch("call",{url:"system/license?type="+(t?"save":"get"),method:"post",data:this.formData}).then(({data:a})=>{t&&$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.formData=a,this.formData_bak=$A.cloneJSON(this.formData)}).catch(({msg:a})=>{t&&$A.modalError(a)}).finally(a=>{this.loadIng--})},infoJoin(t,a=null){return $A.isArray(t)&&(t=t.join(",")),t||(a===null?this.$L("\u65E0\u9650\u5236"):a)}}},s={};var c=n(m,r,l,!1,_,"63e2bc07",null,null);function _(t){for(let a in s)this[a]=s[a]}var u=function(){return c.exports}();export{u as default};
