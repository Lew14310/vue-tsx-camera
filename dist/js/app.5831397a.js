(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);v&&v(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f245403c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"1ba8":function(e,t,a){},"5f4c":function(e,t,a){"use strict";a("1ba8")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),Object(r["g"])({setup:function(){return Object(r["n"])((function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(a,r){t.call(navigator,e,a,r)})):(alert(1),Promise.reject(new Error("getUserMedia is not implemented in this browser")))}),navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{min:1024,ideal:1280,max:1920},height:{min:776,ideal:720,max:1080}}}).then((function(e){var t=document.querySelector("video");"srcObject"in t?t.srcObject=e:t.src=window.URL.createObjectURL(e),t.onloadedmetadata=function(e){t.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))})),function(){return Object(r["f"])("div",null,[Object(r["e"])("12138"),Object(r["f"])("video",{controls:!0,style:"border:10px solid red;",width:"320",height:"240",playsinline:!0,"webkit-playsinline":"true",autoplay:!0},null)])}}})),o=n,i=a("6c02"),u=a("cf05"),c=a.n(u),l={class:"home"},s=Object(r["f"])("img",{alt:"Vue logo",src:c.a},null,-1);function v(e,t,a,n,o,i){var u=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["c"])("div",l,[s,Object(r["f"])(u,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var f=a("d4ec"),d=a("262e"),p=a("2caf"),b=a("9ab4"),h=a("ce1f"),g=Object(r["B"])("data-v-6e5994af");Object(r["t"])("data-v-6e5994af");var m={class:"hello"},j=Object(r["d"])('<p data-v-6e5994af> For a guide and recipes on how to configure / customize this project,<br data-v-6e5994af> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vue-cli documentation</a>. </p><h3 data-v-6e5994af>Installed CLI Plugins</h3><ul data-v-6e5994af><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-6e5994af>babel</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-6e5994af>router</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-6e5994af>vuex</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-6e5994af>typescript</a></li></ul><h3 data-v-6e5994af>Essential Links</h3><ul data-v-6e5994af><li data-v-6e5994af><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>Core Docs</a></li><li data-v-6e5994af><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>Forum</a></li><li data-v-6e5994af><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>Community Chat</a></li><li data-v-6e5994af><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-6e5994af>Twitter</a></li><li data-v-6e5994af><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>News</a></li></ul><h3 data-v-6e5994af>Ecosystem</h3><ul data-v-6e5994af><li data-v-6e5994af><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vue-router</a></li><li data-v-6e5994af><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vuex</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-6e5994af>vue-devtools</a></li><li data-v-6e5994af><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-6e5994af>vue-loader</a></li><li data-v-6e5994af><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-6e5994af>awesome-vue</a></li></ul>',7);Object(r["q"])();var O=g((function(e,t,a,n,o,i){return Object(r["p"])(),Object(r["c"])("div",m,[Object(r["f"])("h1",null,Object(r["y"])(e.msg),1),j])})),y=function(e){Object(d["a"])(a,e);var t=Object(p["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);y=Object(b["a"])([Object(h["a"])({props:{msg:String}})],y);var w=y;a("5f4c");w.render=O,w.__scopeId="data-v-6e5994af";var k=w,_=function(e){Object(d["a"])(a,e);var t=Object(p["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);_=Object(b["a"])([Object(h["a"])({components:{HelloWorld:k}})],_);var x=_;x.render=v;var P=x,M=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],S=Object(i["a"])({history:Object(i["b"])(),routes:M}),U=S,C=a("5502"),D=Object(C["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["b"])(o).use(D).use(U).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});