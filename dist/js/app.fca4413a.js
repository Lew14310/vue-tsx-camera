(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);v&&v(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fcb1a536"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"1ba8":function(e,t,a){},"5f4c":function(e,t,a){"use strict";a("1ba8")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),Object(r["f"])({setup:function(){Object(r["t"])({m:""});var e=function(){return!!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)};return Object(r["m"])((function(){e()?(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia({video:!0,audio:!1},(function(e){var t=document.querySelector("video");try{t.srcObject=e}catch(a){t.src=window.URL.createObjectURL(e)}}),(function(e){alert("您拒绝摄像头权限"),console.log("capturing",e)}))):navigator.getUserMedia?alert("getUserMedia"):navigator.webkitGetUserMedia?alert("webkitGetUserMedia"):navigator.mozGetUserMedia?alert("mozGetUserMedia"):navigator.msGetUserMedia&&alert("msGetUserMedia")})),function(){return Object(r["e"])("div",null,[Object(r["e"])("video",{autoplay:!0},null)])}}})),o=n,i=a("6c02"),u=a("cf05"),c=a.n(u),l={class:"home"},s=Object(r["e"])("img",{alt:"Vue logo",src:c.a},null,-1);function v(e,t,a,n,o,i){var u=Object(r["v"])("HelloWorld");return Object(r["o"])(),Object(r["c"])("div",l,[s,Object(r["e"])(u,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var f=a("d4ec"),d=a("262e"),p=a("2caf"),b=a("9ab4"),g=a("ce1f"),h=Object(r["A"])("data-v-6e5994af");Object(r["s"])("data-v-6e5994af");var j={class:"hello"},m=Object(r["d"])('<p data-v-6e5994af> For a guide and recipes on how to configure / customize this project,<br data-v-6e5994af> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vue-cli documentation</a>. </p><h3 data-v-6e5994af>Installed CLI Plugins</h3><ul data-v-6e5994af><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-6e5994af>babel</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-6e5994af>router</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-6e5994af>vuex</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-6e5994af>typescript</a></li></ul><h3 data-v-6e5994af>Essential Links</h3><ul data-v-6e5994af><li data-v-6e5994af><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>Core Docs</a></li><li data-v-6e5994af><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>Forum</a></li><li data-v-6e5994af><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>Community Chat</a></li><li data-v-6e5994af><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-6e5994af>Twitter</a></li><li data-v-6e5994af><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>News</a></li></ul><h3 data-v-6e5994af>Ecosystem</h3><ul data-v-6e5994af><li data-v-6e5994af><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vue-router</a></li><li data-v-6e5994af><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vuex</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-6e5994af>vue-devtools</a></li><li data-v-6e5994af><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vue-loader</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-6e5994af>awesome-vue</a></li></ul>',7);Object(r["p"])();var O=h((function(e,t,a,n,o,i){return Object(r["o"])(),Object(r["c"])("div",j,[Object(r["e"])("h1",null,Object(r["x"])(e.msg),1),m])})),y=function(e){Object(d["a"])(a,e);var t=Object(p["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["b"]);y=Object(b["a"])([Object(g["a"])({props:{msg:String}})],y);var k=y;a("5f4c");k.render=O,k.__scopeId="data-v-6e5994af";var w=k,_=function(e){Object(d["a"])(a,e);var t=Object(p["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["b"]);_=Object(b["a"])([Object(g["a"])({components:{HelloWorld:w}})],_);var M=_;M.render=v;var U=M,x=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],G=Object(i["a"])({history:Object(i["b"])(),routes:x}),P=G,S=a("5502"),C=Object(S["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["b"])(o).use(C).use(P).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});