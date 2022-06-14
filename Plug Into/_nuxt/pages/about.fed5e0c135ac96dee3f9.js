webpackJsonp([4],{"7mZk":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"root",staticClass:"about"},[t._m(0),e("div",{staticClass:"separator"}),e("div",{staticClass:"section"},[e("div",{staticClass:"intro"},[t._v("高卒。受託会社のインターンを経てすぐに独立。起業してサービスをつくろうと思い立ち、はや6年。デザインとエンジニアリングを両立してきました。ほとんどデザインをデータにおこすことはなく、コードを書きながらデザインしていきます。制作の全行程を１人の人間がおこなうことで、細かなインタラクティブや、高い品質を提供することができます。")]),e("div",{staticClass:"thumb"},[e("img",{ref:"thumb",attrs:{src:t.src}}),e("canvas",{attrs:{id:"canvasThumb"}})])]),e("div",{staticClass:"separator"}),t._m(1),e("div",{staticClass:"separator"}),e("div",{staticClass:"section"},[e("div",{staticClass:"subTitle"},[t._v("02. Welcome")]),e("div",{staticClass:"welcome"},[t._v("お仕事募集中😻"),e("br"),e("nuxt-link",{attrs:{to:"/contact"}},[t._v("コチラ")]),t._v("からお問い合わせください！")],1)]),e("div",{staticClass:"separator"}),e("div",{staticClass:"section"},[e("div",{staticClass:"subTitle"},[t._v("03. Social")]),e("div",{staticClass:"social"},[e("a",{attrs:{href:t.url.twitter,target:"_blank"}},[t._v("Twitter")]),e("a",{attrs:{href:t.url.instagram,target:"_blank"}},[t._v("Instagram")]),e("a",{attrs:{href:t.url.facebook,target:"_blank"}},[t._v("Facebook")]),e("a",{attrs:{href:t.url.github,target:"_blank"}},[t._v("GitHub")])])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"helloEng"},[this._v("I'm a Web Designer")]),a("div",{staticClass:"helloJa"},[this._v("開発もイケちゃうデザイナー")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section"},[e("div",{staticClass:"subTitle"},[t._v("01. Skillset")]),e("ul",{staticClass:"skillset"},[e("li",[t._v("HTML5"),e("span",[t._v(" /")]),t._v(" Pug")]),e("li",[t._v("CSS3"),e("span",[t._v(" /")]),t._v(" Stylus"),e("span",[t._v(" /")]),t._v(" SASS"),e("span",[t._v(" /")]),t._v(" SCSS")]),e("li",[t._v("JavaScript"),e("span",[t._v("  /")]),t._v(" Nuxt"),e("span",[t._v(" /")]),t._v(" Vue"),e("span",[t._v(" /")]),t._v(" Riot"),e("span",[t._v(" /")]),t._v(" React"),e("span",[t._v(" /")]),t._v(" Node")]),e("li",[t._v("GSAP(TweenMax)"),e("span",[t._v(" /")]),t._v(" CSS Animation")]),e("li",[t._v("PHP"),e("span",[t._v(" /")]),t._v(" CodeIgniter"),e("span",[t._v(" /")]),t._v(" Wordpress"),e("span",[t._v(" /")]),t._v(" MySQL")]),e("li",[t._v("Netlify"),e("span",[t._v(" /")]),t._v(" Heroku"),e("span",[t._v(" /")]),t._v(" Firebase"),e("span",[t._v(" /")]),t._v(" GCP"),e("span",[t._v(" /")]),t._v(" AWS")]),e("li",[t._v("Git"),e("span",[t._v(" /")]),t._v(" GitHub"),e("span",[t._v(" /")]),t._v(" CircleCI 2.0")]),e("li",[t._v("Terminal"),e("span",[t._v(" /")]),t._v(" Zsh"),e("span",[t._v(" /")]),t._v(" tmux"),e("span",[t._v(" /")]),t._v(" Vim"),e("span",[t._v(" /")]),t._v(" VSCode")]),e("li",[t._v("Sketch"),e("span",[t._v(" /")]),t._v(" Photoshop"),e("span",[t._v(" /")]),t._v(" Illustrator")]),e("li",[t._v("Slack"),e("span",[t._v(" /")]),t._v(" Discord")]),e("li",[t._v("etc...")])])])}]};a.a=n},PveV:function(t,a,e){"use strict";var i=e("Xxa5"),n=e.n(i),s=e("exGp"),o=e.n(s),r=e("Dd8w"),c=e.n(r),l=e("NYxO"),v=e("+Uzz"),p=(e.n(v),e("naNl"));e.n(p);a.a={data:function(){return{src:"/thumbnail.jpg",url:p.url}},computed:c()({},Object(l.mapGetters)({completed:"firstview/completed"})),watch:{completed:function(){var t=o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("scrollArea").scrollTop=0,t.next=3,this.$delay(300);case 3:requestAnimationFrame(function(){v.TweenMax.staggerTo(".section",5,{y:0,opacity:1,ease:v.Elastic.easeOut.config(1,.3),startAt:{y:"40px",opacity:0}},.1),v.TweenMax.staggerTo(".separator",5,{scaleX:1,x:0,opacity:1,transformOrigin:"left center",ease:v.Elastic.easeOut.config(1,.3),startAt:{scaleX:0,x:"-20px",opacity:0}},.1)});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=this;document.getElementById("scrollArea").scrollTop=0,this.$imageOnLoad(this.src,function(){requestAnimationFrame(function(){v.TweenMax.to(t.$refs.thumb,1.5,{opacity:1,ease:v.Expo.easeInOut})})});var a=document.getElementById("canvasThumb"),e=a.getContext("2d");function i(){a.width=window.innerWidth,a.height=window.innerHeight}i(),window.onresize=i;var n=!0;!function t(){(n=!n)?requestAnimationFrame(t):(function(t){for(var a=t.canvas.width,e=t.canvas.height,i=t.createImageData(a,e),n=new Uint32Array(i.data.buffer),s=n.length,o=0;o<s;)n[o++]=(255*Math.random()|0)<<24;t.putImageData(i,0,0)}(e),requestAnimationFrame(t))}()},head:{title:"About",meta:[{property:"og:title",content:"About | Nitta.Studio🖕🏻"},{property:"og:url",content:"../about"},{property:"twitter:title",content:"About | Nitta.Studio🖕🏻"}]},transition:{appear:!1,enter:function(t,a){requestAnimationFrame(function(){v.TweenMax.staggerTo(".section",1,{y:0,opacity:1,ease:v.Back.easeOut.config(3),startAt:{y:"40px",opacity:0}},.1,function(){a()}),v.TweenMax.staggerTo(".separator",1,{scaleX:1,x:0,opacity:1,transformOrigin:"left center",ease:v.Back.easeOut.config(3),startAt:{scaleX:0,x:"-20px",opacity:0}},.1)})},leave:function(t,a){requestAnimationFrame(function(){v.TweenMax.staggerTo(".section",.7,{y:"-40px",opacity:0,ease:v.Back.easeIn.config(3)},.1,function(){a()}),v.TweenMax.staggerTo(".separator",.7,{scaleX:0,x:"20px",opacity:0,ease:v.Back.easeIn.config(3)},.1)})}}}},hSk2:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("PveV"),n=e("7mZk"),s=!1;var o=function(t){s||e("s8Vx")},r=e("VU/8")(i.a,n.a,!1,o,"data-v-0a606064",null);r.options.__file="pages/about.vue",a.default=r.exports},s8Vx:function(t,a,e){var i=e("wxsi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("c9ecd482",i,!1,{sourceMap:!1})},wxsi:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.about .section[data-v-0a606064]{opacity:0}.about .subTitle[data-v-0a606064]{color:#555;font-size:22px;font-weight:700}@media screen and (min-device-width:768px){.about .subTitle[data-v-0a606064]{font-size:24px}}.about .separator[data-v-0a606064]{margin:50px 0;width:15px;height:3px;background:#444;opacity:0}@media screen and (min-device-width:768px){.about .separator[data-v-0a606064]{margin:65px 0}}.about .helloEng[data-v-0a606064]{font-size:22px;font-weight:700}@media screen and (min-device-width:768px){.about .helloEng[data-v-0a606064]{font-size:24px}}.about .helloJa[data-v-0a606064]{font-size:13px;letter-spacing:2.5px}@media screen and (min-device-width:768px){.about .helloJa[data-v-0a606064]{font-size:15px}}.about .intro[data-v-0a606064]{font-size:13px;line-height:2}@media screen and (min-device-width:768px){.about .intro[data-v-0a606064]{font-size:15px}}.about .thumb[data-v-0a606064]{position:relative;margin-top:30px;width:100%;height:150px}@media screen and (min-device-width:768px){.about .thumb[data-v-0a606064]{margin-top:45px;height:300px}}.about .thumb img[data-v-0a606064]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;opacity:0}.about .thumb #canvasThumb[data-v-0a606064]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.32}.about .skillset[data-v-0a606064]{margin-top:30px}@media screen and (min-device-width:768px){.about .skillset[data-v-0a606064]{margin-top:45px}}.about .skillset li[data-v-0a606064]{margin-bottom:6.5px;font-size:13px;line-height:2}@media screen and (min-device-width:768px){.about .skillset li[data-v-0a606064]{font-size:15px}}.about .skillset li span[data-v-0a606064]{color:#555}.about .welcome[data-v-0a606064]{margin-top:30px;font-size:13px;line-height:2}@media screen and (min-device-width:768px){.about .welcome[data-v-0a606064]{margin-top:45px;font-size:15px}}.about .welcome a[data-v-0a606064]{display:inline-block;position:relative}.about .welcome a[data-v-0a606064]:after{content:"";position:absolute;left:0;bottom:5px;width:100%;height:1px;background:#555}.about .social[data-v-0a606064]{margin-top:30px;font-size:13px}@media screen and (min-device-width:768px){.about .social[data-v-0a606064]{margin-top:45px;font-size:15px}}.about .social a[data-v-0a606064]{display:inline-block;position:relative;margin-right:15px;line-height:2}.about .social a[data-v-0a606064]:after{content:"";position:absolute;left:0;bottom:5px;width:100%;height:1px;background:#555}',""])}});