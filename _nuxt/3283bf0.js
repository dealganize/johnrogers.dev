(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{350:function(t,e,n){t.exports=n.p+"img/cloudy.16fae24.png"},351:function(t,e,n){t.exports=n.p+"img/hamburger.6e4ad84.png"},352:function(t,e,n){t.exports=n.p+"img/alien.d1630df.png"},354:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("02d9e096",content,!0,{sourceMap:!1})},355:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("04103375",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n.r(e);var r=n(50),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"wave",staticStyle:{"pointer-events":"none"},attrs:{fill:"white",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1920 75"}},[n("defs",[n("clipPath",{attrs:{id:"a"}},[n("rect",{staticClass:"a",attrs:{width:"1920",height:"75"}})]),t._v(" "),n("style",[t._v("\n      .a {\n        fill: none;\n      }\n      .b {\n        clip-path: url(#a);\n      }\n      .d {\n        opacity: 0.5;\n        isolation: isolate;\n      }\n    ")])]),t._v(" "),n("title",[t._v("wave")]),t._v(" "),n("g",{staticClass:"b"},[n("path",{staticClass:"c",attrs:{d:"M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"}})]),t._v(" "),n("g",{staticClass:"b"},[n("path",{staticClass:"d",attrs:{d:"M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"}})]),t._v(" "),n("g",{staticClass:"b"},[n("path",{staticClass:"d",attrs:{d:"M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"}})]),t._v(" "),n("g",{staticClass:"b"},[n("path",{staticClass:"d",attrs:{d:"M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"}})])])}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,n){t.exports=n.p+"img/bgHero.0bcf31c.jpg"},362:function(t,e,n){"use strict";n(354)},363:function(t,e,n){var r=n(13)(!1);r.push([t.i,"#hero{z-index:0}.card{min-height:300px;padding:10px;transition:.5s ease-out}.card .v-image{margin-bottom:15px;transition:.75s}.card h1{margin-bottom:10px}.zoom-efect{transform:scale(1.1)}.up{transform:translateY(-20px);transition:.5s ease-out}",""]),t.exports=r},364:function(t,e,n){"use strict";n(355)},365:function(t,e,n){var r=n(13)(!1);r.push([t.i,"section{position:relative}.v-parallax__content{padding:0!important;height:100%}",""]),t.exports=r},366:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0cd63bd9",content,!0,{sourceMap:!1})},367:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},381:function(t,e,n){"use strict";n.r(e);var r={components:{BorderWaves:n(359).default},data:function(){return{features:[{img:n(350),title:"Weather app",text:"Simple weather app using weatherstack API, built using Handlebars and Node.",link:"https://rogers-node-weather-app.herokuapp.com/"},{img:n(351),title:"Burger Builder",text:"Learning project for creating and ordering a burger, built using React, CSS, and Firebase.",link:"https://burger-builder-f9483.web.app/"},{img:n(352),title:"Alien Game",text:"Question based, front-end web-game built using Vue.js.",link:""}]}},methods:{redirectToDemo:function(link){window.open(link,"_blank")}}},o=(n(362),n(364),n(50)),l=n(58),c=n.n(l),d=n(233),h=n(171),f=n(424),v=n(385),m=(n(19),n(51),n(1)),w=m.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var r=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},r)}}}),x=n(55),y=n(5),_=n(8),C=Object(y.a)(w,x.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(_.c)("v-hover should only contain a single element",this),element)):(Object(_.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),j=n(168),S=n(142),k=(n(366),m.a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),T=Object(y.a)(k).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),H=n(425),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"hero"}},[r("v-parallax",{attrs:{src:n(361)}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6",xl:"8"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-4"},[t._v("\n              Welcome to my page\n            ")]),t._v(" "),r("h1",{staticClass:"font-weight-light"},[t._v("\n              I'm John, and I like to build things.\n            ")]),t._v(" "),r("v-btn",{staticClass:"mt-5",attrs:{rounded:"",outlined:"",large:"",dark:""},on:{click:function(e){return t.$vuetify.goTo("#features")}}},[t._v("\n              My projects\n              "),r("v-icon",{staticClass:"ml-2"},[t._v("mdi-arrow-down")])],1)],1),t._v(" "),r("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"6",xl:"4"}})],1)],1)],1),t._v(" "),r("BorderWaves",{staticClass:"wave"})],1),t._v(" "),r("v-container",{staticClass:"mt-2",attrs:{id:"features",fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-row",{attrs:{align:"center",justify:"space-around"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h1",{staticClass:"font-weight-light"},[t._v("\n              Some of my personal learning projects:\n            ")])]),t._v(" "),t._l(t.features,(function(e,i){return r("v-col",{key:i,staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"card",class:{up:o},attrs:{shaped:"",elevation:o?10:4}},[r("v-img",{staticClass:"d-block ml-auto mr-auto",class:{"zoom-efect":o},attrs:{src:e.img,"max-width":"100px"}}),t._v(" "),r("h1",{staticClass:"font-weight-regular"},[t._v(t._s(e.title))]),t._v(" "),r("h4",{staticClass:"font-weight-regular subtitle-1"},[t._v("\n                  "+t._s(e.text)+"\n                ")]),t._v(" "),r("v-btn",{attrs:{text:"",plain:"",ripple:!1},on:{click:function(n){return t.redirectToDemo(e.link)}}},[t._v("To demo >")])],1)]}}],null,!0)})],1)}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCol:f.a,VContainer:v.a,VHover:C,VIcon:j.a,VImg:S.a,VParallax:T,VRow:H.a})},385:function(t,e,n){"use strict";n(9),n(10),n(74),n(30),n(235),n(349),n(66),n(82);var r=n(1);var o,l=n(97);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})}}]);