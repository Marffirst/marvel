(function(t){function e(e){for(var r,c,o=e[0],i=e[1],l=e[2],d=0,h=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header",{attrs:{changeSearch:t.changeSearch}}),a("div",{staticClass:"container"},[a("h1",{staticClass:"pt-3 pb-3"},[t._v("Персонажи Marvel")]),a("app-modal",{attrs:{character:t.character}}),t.loading?a("spinner"):t._e(),a("div",{staticClass:"row"},[t.searchCharacters.length||t.loading?t._e():a("h5",[t._v("Ничего не найдено")]),t._l(t.searchCharacters,(function(e,r){return a("div",{key:e.id,staticClass:"card mb-3 col-sm-12 col-md-6 col-lg-4"},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-md-4"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:e.thumbnail,alt:e.name}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},on:{click:function(e){t.characterIndex=r}}},[t._v(" Подробнее ")])])])])])}))],2)],1)],1)},s=[],c=a("1da1"),o=(a("96cf"),a("d3b7"),a("ac1f"),a("841c"),a("4de4"),a("b0c0"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("div",{staticClass:"spinner-border text-danger",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"})])])}],l={name:"Spinner"},u=l,d=a("2877"),h=Object(d["a"])(u,o,i,!1,null,"0391fb8e",null),p=h.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.character.name))]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.character.thumbnail,alt:t.character.name}}),a("div",[a("p",{staticClass:"text-muted"},[t._v(t._s(t.character.modified))]),a("h5",[t._v("Описание:")]),a("p",[t._v(t._s(t.character.description)+" ")]),a("h5",[t._v("Комиксы:")]),a("ul",t._l(t.character.comics,(function(e){return a("li",{key:e.name},[t._v(" "+t._s(e.name)+" ")])})),0)])]),t._m(0)])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Закрыть")])])}],v={name:"AppModal",props:["character"]},b=v,g=Object(d["a"])(b,f,m,!1,null,"1481c10e",null),_=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand"},[t._v("Marvel")]),a("form",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],staticClass:"form-control me-2",attrs:{type:"search",placeholder:"Поиск...","aria-label":"Search"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value.trim())},function(e){return t.changeSearch(t.search)}],blur:function(e){return t.$forceUpdate()}}}),a("button",{staticClass:"btn btn-outline-light",attrs:{type:"reset"}},[t._v(" все ")])])])])},y=[],w={name:"AppHeader",props:["changeSearch"],data:function(){return{search:""}}},x=w,O=Object(d["a"])(x,C,y,!1,null,"70bac963",null),j=O.exports,S={name:"App",components:{AppHeader:j,AppModal:_,Spinner:p},data:function(){return{loading:!1,characters:[],characterIndex:0,search:""}},methods:{fetchCharacters:function(){var t=this;return fetch("https://netology-api-marvel.herokuapp.com/characters").then((function(t){return t.json()})).then((function(e){return t.characters=e}))},changeSearch:function(t){this.search=t}},computed:{character:function(){return this.searchCharacters[this.characterIndex]||null},searchCharacters:function(){var t=this.characters,e=this.search;return t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())}))}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchCharacters();case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}},k=S,M=Object(d["a"])(k,n,s,!1,null,null,null),A=M.exports,P=a("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.4c0d05b8.js.map