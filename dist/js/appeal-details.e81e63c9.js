(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appeal-details"],{"5ce9":function(t,s,a){t.exports=a.p+"img/telka.3fb7e71c.png"},"86ad":function(t,s,a){"use strict";a("be53")},"9cf8":function(t,s,a){t.exports=a.p+"img/Rectangle 11.737e4bce.png"},bc5c:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"details"},[t.imageState?e("div",{staticClass:"open-image"},[e("button",{staticClass:"close",on:{click:function(s){t.imageState=!t.imageState}}},[e("img",{attrs:{src:a("1d1b"),alt:""}})]),e("button",{staticClass:"prev",on:{click:t.prevImage}}),e("img",{attrs:{src:t.imageSrc,alt:""}}),e("button",{staticClass:"next",on:{click:t.nextImage}})]):t._e(),e("div",{staticClass:"container"},[e("h3",{staticClass:"notranslate"},[t._v(t._s(t.$t("details.appeal"))+" №UST46258391")]),e("section",{staticClass:"details-cnt"},[e("div",{staticClass:"details-img"},[e("div",{staticClass:"details-img-l",on:{click:t.openImage}},[e("img",{attrs:{src:t.getApplicationData.photo_url,alt:""}}),e("h5",[t._v("Запланировано")])]),e("div",{staticClass:"details-img-r",on:{click:t.openImage}},[e("img",{attrs:{src:a("d12b"),alt:""}}),e("img",{attrs:{src:a("d12b"),alt:""}}),t._m(0)])]),e("div",{staticClass:"details-info"},[e("div",{staticClass:"details-info-user"},[e("img",{attrs:{src:a("faca"),alt:""}}),e("p",[t._v(t._s(t.getApplicationData.first_name))])]),e("p",{staticClass:"details-info-text"},[t._v(" "+t._s(t.getApplicationData.message)+" ")]),e("div",{staticClass:"details-btns"},[e("button",{staticClass:"details-btn"},[t._v(t._s(t.$t("details.help"))+" (12)")]),e("button",{staticClass:"details-btn details-btn--t notranslate",on:{click:t.sharePage}},[t._v(" "+t._s(t.$t("details.share"))+" "),e("img",{attrs:{src:a("d6b7"),alt:""}})])])])]),e("section",{staticClass:"details-tabs"},[e("ul",[e("li",{staticClass:"details-tabs-li notranslate",class:{"li-checked":t.switcher},on:{click:function(s){t.switcher=!0}}},[t._v(" "+t._s(t.$t("details.main"))+" ")]),e("li",{staticClass:"details-tabs-li notranslate",class:{"li-checked":!t.switcher},on:{click:function(s){t.switcher=!1}}},[t._v(" "+t._s(t.$t("details.comment"))+" (5) ")])]),t.switcher?e("section",{staticClass:"details-gen-info"},[e("div",{staticClass:"details-gen-info-l"},[e("div",{staticClass:"details-gen-info-progress",class:{"details-gen-info-progress-active":t.checkStatusStep>=1}},[t._m(1),e("p",{staticClass:"details-gen-info-title notranslate",class:{"info-title-active":t.checkStatusStep>=1}},[t._v(" "+t._s(t.$t("details.check"))+" ")])]),e("div",{staticClass:"details-gen-info-progress",class:{"details-gen-info-progress-active":t.checkStatusStep>=2}},[t._m(2),e("p",{staticClass:"details-gen-info-title notranslate",class:{"info-title-active":t.checkStatusStep>=2}},[t._v(" "+t._s(t.$t("details.reg"))+" ")])]),e("div",{staticClass:"details-gen-info-progress",class:{"details-gen-info-progress-active":t.checkStatusStep>=3}},[t._m(3),e("p",{staticClass:"details-gen-info-title notranslate",class:{"info-title-active":t.checkStatusStep>=3}},[t._v(" "+t._s(t.$t("main.in-progress"))+" ")])]),e("div",{staticClass:"details-gen-info-progress",class:{"details-gen-info-progress-active":t.checkStatusStep>=4}},[t._m(4),e("p",{staticClass:"details-gen-info-title notranslate",class:{"info-title-active":t.checkStatusStep>=4}},[t._v(" "+t._s(t.$t("main.done"))+" ")])])]),e("div",{staticClass:"details-gen-info-r"},[e("map-view",{attrs:{lat:t.getApplicationData.latitude,long:t.getApplicationData.longitude,width:"100",height:"280"}})],1)]):t._e(),t.switcher?t._e():e("section",{staticClass:"details-comments"},[e("div",{staticClass:"details-comments-top notranslate"},[t.getIsAuth?t._e():e("p",[t._v(" "+t._s(t.$t("details.no-login"))+" "),e("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("details.loggin")))]),t._v(" "+t._s(t.$t("details.or"))+" "),e("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("details.regged"))+".")])]),e("input",{attrs:{type:"text",placeholder:t.$t("details.send-comment")}}),e("input",{attrs:{type:"button",disabled:!t.getIsAuth,value:t.$t("forms.send")}})]),t._m(5)])]),e("section",{staticClass:"details-appeals"},[e("h4",{staticClass:"notranslate"},[t._v(t._s(t.$t("details.copy-appeal")))]),e("div",{staticClass:"details-appeals-row"},t._l(t.getSimilarApp,(function(s,i){return e("div",{key:i,staticClass:"details-appeals-card details-card"},[e("div",{staticClass:"details-card-img"},[s.photo_url?e("img",{attrs:{src:s.photo_url,alt:""}}):e("img",{attrs:{src:a("9cf8"),alt:""}}),e("p",[t._v("Скоро")])]),e("div",{staticClass:"details-card-info"},[e("p",{staticClass:"details-card-title"}),e("span",[t._v(t._s(s.created_date))])]),e("p",{staticClass:"details-card-title"},[t._v(" "+t._s(t.$t("main.type"))+": "+t._s(s.app_type)+" ")]),e("p",{staticClass:"details-card-title"},[t._v(" "+t._s(t.$t("main.address"))+": "+t._s(s.address)+" ")]),e("button",{staticClass:"details-card-btn notranslate",on:{click:function(a){return t.goPage(s)}}},[t._v(" "+t._s(t.$t("main.details"))+" ")])])})),0)])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("img",{attrs:{src:a("d12b"),alt:""}}),e("p",[t._v("+2")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"details-gen-info-circle"},[a("div")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"details-gen-info-circle"},[a("div")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"details-gen-info-circle"},[a("div")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"details-gen-info-circle"},[a("div")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"details-comments-mid"},[e("div",{staticClass:"details-comment"},[e("div",{staticClass:"details-comment-user"},[e("img",{attrs:{src:a("5ce9"),alt:""}}),e("p",[t._v("Зарина")]),e("span",[t._v("22.04.2022 14:53")])]),e("p",{staticClass:"details-comment-text"},[t._v(" Пожалуй, не имеет смысла объяснять, насколько почва является важной частью жизни человека. Большую часть еды, которой питается человек, чтобы так продолжалось и дальше, необходимо поддерживать состояние грунта на должном уровне для... "),e("span",[t._v("Узнать больше")])])]),e("div",{staticClass:"details-comment"},[e("div",{staticClass:"details-comment-user"},[e("img",{attrs:{src:a("5ce9"),alt:""}}),e("p",[t._v("Зарина")]),e("span",[t._v("22.04.2022 14:53")])]),e("p",{staticClass:"details-comment-text"},[t._v(" Пожалуй, не имеет смысла объяснять, насколько почва является важной частью жизни человека. Большую часть еды, которой питается человек, чтобы так продолжалось и дальше, необходимо поддерживать состояние грунта на должном уровне для... "),e("span",[t._v("Узнать больше")])])]),e("button",{staticClass:"details-comment-btn"},[t._v("Показать все")])])}],c=a("ebfc"),n={components:{MapView:c["default"]},data:function(){return{switcher:!0,image:["https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349","https://the-tech.kz/wp-content/uploads/2021/07/SONATA-hero-option1-764A5360-edit.jpg","https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg","https://static.tcimg.net/vehicles/oem/05dde861dc976504/2023-Acura-Integra.jpg","https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg"],imageState:!1,imageIndex:0,imageSrc:""}},created:function(){this.$store.dispatch("getApplicationObject",this.$route.params.id)},mounted:function(){this.$store.dispatch("similarApp",this.getApplicationData.app_type)},computed:{getApplicationData:function(){return this.$store.getters.getApplicationDetails},checkStatusStep:function(){return"ожидание"==this.getApplicationData.app_status?1:"2"==this.getApplicationData.app_status?2:"3"==this.getApplicationData.app_status?3:4},getSimilarApp:function(){return this.$store.getters.getSimilarApp},getIsAuth:function(){return this.$store.getters.getIsAuth}},methods:{sharePage:function(){navigator.share({title:"test",text:"chlen",url:"https://google.com"})},goPage:function(t){this.$router.push({name:"appeal-details",params:{id:t.id}})},openImage:function(){this.imageState=!0,this.imageSrc=this.image[this.imageIndex]},close:function(){this.imageState=!this.imageState,this.imageIndex=0},nextImage:function(){this.imageIndex++,this.imageIndex>this.image.length-1&&(this.imageIndex=0),this.imageSrc=this.image[this.imageIndex]},prevImage:function(){this.imageIndex--,this.imageIndex<0&&(this.imageIndex=this.image.length-1),this.imageSrc=this.image[this.imageIndex]}}},l=n,o=(a("86ad"),a("2877")),r=Object(o["a"])(l,e,i,!1,null,"b41b323a",null);s["default"]=r.exports},be53:function(t,s,a){},d12b:function(t,s,a){t.exports=a.p+"img/menty.34da1758.png"},d6b7:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgBlZLfTcNADMY/h1Bejw0yAmwQNkiBSPAEmQB1AsQG3YD2CYkKmg3oBnQDbgLkx6IjNc6RK/8U9bB0kn3Kz/n8nQmRYe7OMtpr5poeENH4dXg/omh4Xj6RIA+1iIySWFjB7He/dBtkHspLIlwIhAkboRbJ+yT9klVkYDBXNZvbwiRmcKXSCiEsBa7iYW3N7DRHQhkSV2vN9N0IPax/qUVnU3Cq3cftR32qUgyavAO9AA+SO+TjfiiEGibmz+0KBhFBOqsh2X3WPGtl64wLddaofLteuRs+r20vHBJvmMJhxs7laz2L0MQbRqrUNcu23rokoQna58FmSay8uaPoDdt/LF+60Xz8a8PUC/vzhjgaBnYqfEoHrWXKJ7PJB6SjgL3qnVwHAAAAAElFTkSuQmCC"},faca:function(t,s,a){t.exports=a.p+"img/pacan.69affc81.png"}}]);
//# sourceMappingURL=appeal-details.e81e63c9.js.map