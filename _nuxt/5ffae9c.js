(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{350:function(t,e,n){t.exports=n.p+"img/cloudy.16fae24.png"},351:function(t,e,n){t.exports=n.p+"img/hamburger.6e4ad84.png"},352:function(t,e,n){t.exports=n.p+"img/alien.d1630df.png"},356:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("060fc8be",content,!0,{sourceMap:!1})},368:function(t,e,n){t.exports=n.p+"img/grad.6650c95.png"},369:function(t,e,n){t.exports=n.p+"img/suitcase.8f55169.png"},370:function(t,e,n){t.exports=n.p+"img/puzzle.1599167.png"},371:function(t,e,n){t.exports=n.p+"img/me.d77285e.jpg"},372:function(t,e,n){"use strict";n(356)},373:function(t,e,n){var r=n(13)(!1);r.push([t.i,"#about[data-v-57a99fcc]{background-color:#f4f7f5}",""]),t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{features:[{img:n(350),title:"Weather app",text:"Simple weather app using weatherstack API, built using Handlebars and Node.",link:"https://rogers-node-weather-app.herokuapp.com/"},{img:n(351),title:"Burger Builder",text:"Learning project for creating and ordering a burger, built using React, CSS, and Firebase.",link:"https://burger-builder-f9483.web.app/"},{img:n(352),title:"Alien Game",text:"Question based, front-end web-game built using Vue.js.",link:""}]}}},o=(n(372),n(50)),c=n(58),l=n.n(c),d=n(424),f=n(385),m=n(142),v=n(425),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"about"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-5",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"7"}},[r("h1",{staticClass:"display-2"},[t._v("About me")]),t._v(" "),r("h1",{staticClass:"display-1 mb-3"},[t._v("Always learning.")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[r("v-img",{staticClass:"mr-4",attrs:{src:n(368),"max-width":"60px"}}),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n                  Graduated in 2016 with a 2:1 B.Sc in Computer Science and\n                  Software Engineering from Maynooth University in Ireland.\n                ")])],1),t._v(" "),r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[r("v-img",{staticClass:"mr-4",attrs:{src:n(369),"max-width":"60px"}}),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n                  After roles in New York and London, I moved to Berlin in\n                  2019 and got my first front end position with\n                  "),r("a",{attrs:{href:"https://www.softgames.com/"}},[t._v("Softgames GmbH")]),t._v(",\n                  building automation tools with React and Node.js. I then\n                  accepted a role at my current company,\n                  "),r("a",{attrs:{href:"https://www.easybell.de/"}},[t._v("easybell GmbH")]),t._v(", where\n                  I primarily use Vue.js.\n                ")])],1),t._v(" "),r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[r("v-img",{staticClass:"mr-4",attrs:{src:n(370),"max-width":"60px"}}),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n                  In my spare time, I love to play sports - mainly Gaelic\n                  football, soccer, and basketball. I also enjoy movies, video\n                  games and occasionally chess!\n                ")])],1)],1)],1),t._v(" "),r("v-col",{staticClass:"d-none d-md-flex radius",attrs:{cols:"12",md:"5"}},[r("v-img",{staticClass:"ml-auto mr-auto radius",attrs:{src:n(371),"max-width":"400px"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"57a99fcc",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VImg:m.a,VRow:v.a})},385:function(t,e,n){"use strict";n(9),n(10),n(74),n(30),n(235),n(349),n(66),n(82);var r=n(1);var o,c=n(97);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})}}]);