(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Boardroom"],{"016c":function(t,e,a){"use strict";a("0943")},"0943":function(t,e,a){},"0f77":function(t,e,a){},1750:function(t,e,a){},"1d12":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"sort",on:{click:function(e){return t.sort(t.num)}}},[t._v(" "+t._s(t.name)+" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.sortType===t.num&&"0"===t.sortSide,expression:"sortType === num && sortSide === '0'"}],attrs:{src:a("8219"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:t.sortType===t.num&&"1"===t.sortSide,expression:"sortType === num && sortSide === '1'"}],attrs:{src:a("4ee8"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:t.sortType!==t.num,expression:"sortType !== num"}],attrs:{src:a("0edc"),alt:""}})])},i=[],o={name:"h5sort",data:function(){return{sortNum:1}},props:{name:{type:String,default:""},sortType:{type:String,default:""},sortSide:{type:String,default:"1"},num:{type:String,default:""}},beforeMount:function(){},computed:{},methods:{sort:function(t){this.sortNum=1==this.sortNum?2:1,this.$emit("sort",this.num,this.sortSide,this.sortNum)}}},n=o,r=(a("f04b"),a("2877")),c=Object(r["a"])(n,s,i,!1,null,"beb63ce6",null);e["a"]=c.exports},2777:function(t,e,a){},"29c7":function(t,e,a){"use strict";a("ab84")},"4bf4":function(t,e,a){"use strict";a("ae9f")},"4d63":function(t,e,a){var s=a("83ab"),i=a("da84"),o=a("94ca"),n=a("7156"),r=a("9bf2").f,c=a("241c").f,l=a("44e7"),u=a("ad6d"),h=a("9f7f"),d=a("6eeb"),m=a("d039"),p=a("69f3").set,_=a("2626"),b=a("b622"),v=b("match"),f=i.RegExp,C=f.prototype,w=/a/g,y=/a/g,g=new f(w)!==w,T=h.UNSUPPORTED_Y,$=s&&o("RegExp",!g||T||m((function(){return y[v]=!1,f(w)!=w||f(y)==y||"/a/i"!=f(w,"i")})));if($){var x=function(t,e){var a,s=this instanceof x,i=l(t),o=void 0===e;if(!s&&i&&t.constructor===x&&o)return t;g?i&&!o&&(t=t.source):t instanceof x&&(o&&(e=u.call(t)),t=t.source),T&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var r=n(g?new f(t,e):f(t,e),s?this:C,x);return T&&a&&p(r,{sticky:a}),r},N=function(t){t in x||r(x,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},k=c(f),S=0;while(k.length>S)N(k[S++]);C.constructor=x,x.prototype=C,d(i,"RegExp",x)}_("RegExp")},"50fc":function(t,e,a){"use strict";a("9abb")},"6ca2":function(t,e,a){"use strict";a("d7a6")},"85db":function(t,e,a){},"896e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"h5TableTitle between"},[a("div",{staticClass:"item"},[a("span",[t._v(t._s(t.name))]),a("span",{staticClass:"line"},[t._v("/")]),a("h5sort",{attrs:{name:t.transaction,sortType:t.sortType,sortSide:t.sortSide,num:"4"},on:{sort:t.sort}})],1),a("div",{staticClass:"item right"},[a("h5sort",{attrs:{name:t.PersonalIncome,sortType:t.sortType,sortSide:t.sortSide,num:"5"},on:{sort:t.sort}}),a("span",{staticClass:"line"},[t._v("/")]),a("h5sort",{attrs:{name:t.reward,sortType:t.sortType,sortSide:t.sortSide,num:"1"},on:{sort:t.sort}})],1),a("div",{staticClass:"item-end"},[a("h5sort",{attrs:{name:t.APY,sortType:t.sortType,sortSide:t.sortSide,num:"3"},on:{sort:t.sort}})],1)])},i=[],o=a("1d12"),n={name:"h5TableTitle",data:function(){return{isShow:!1,listAct:0,listItemAct:0,searchValue:"",listItem:[]}},components:{h5sort:o["a"]},props:{name:{type:String,default:"交易对"},transaction:{type:String,default:"TVL"},PersonalIncome:{type:String,default:"个人收益"},reward:{type:String,default:"日产量"},APY:{type:String,default:"APY"},sortType:{type:String,default:"3"},sortSide:{type:String,default:"1"}},beforeMount:function(){},computed:{},methods:{sort:function(t,e,a){this.$emit("sort",t,e,a)}}},r=n,c=(a("b6f0"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,"24bde45b",null);e["a"]=l.exports},"9abb":function(t,e,a){},a2e3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic_bar"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("ApyTopic.apr"))+":")]),a("strong",[t._v(t._s(Number(this.apy).toFixed(2))+"%")])]),a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("ApyTopic.apy"))+":")]),a("strong",[t._v(t._s(Number(100*Math.pow(1+this.apy/365/100,365)).toFixed(2))+"%")])]),a("p",[t._v(t._s(t.$t("ApyTopic.reinvest")))]),a("p",[t._v(t._s(t.$t("ApyTopic.interest")))])])},i=[],o=(a("a9e3"),{name:"ApyTopic",props:{apy:{type:[String,Number],require:!0,default:0}},data:function(){return{}},mounted:function(){},computed:{},methods:{}}),n=o,r=(a("fc4f"),a("2877")),c=Object(r["a"])(n,s,i,!1,null,"b48a4902",null);e["a"]=c.exports},ab84:function(t,e,a){},ae9f:function(t,e,a){},b0f7:function(t,e,a){"use strict";a("2777")},b6f0:function(t,e,a){"use strict";a("1750")},caa1:function(t,e,a){},d7a6:function(t,e,a){},e150:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"selete",class:t.chainName},[s("div",{staticClass:"sele-head"},[s("ul",{staticClass:"sele-wenzi"},[t._l(t.list,(function(e,a){return s("li",{key:a,staticClass:"sele-span item-span",class:e.show?"sele-act-btn":"",on:{click:function(s){return t.onlist(e,a)}}},[s("span",[t._v(" "+t._s(e.name))])])})),s("li",{staticClass:"li-hide"}),s("li",{staticClass:"li-hide"})],2),s("div",{staticClass:"se-input"},[t.showCheck?s("div",{staticClass:"action",on:{click:t.chenck}},[s("img",{directives:[{name:"show",rawName:"v-show",value:"Heco"==t.chainName&&t.actionChenck,expression:"chainName=='Heco'&&actionChenck"}],attrs:{src:a("69fa"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==t.chainName&&t.actionChenck,expression:"chainName=='Bsc'&&actionChenck"}],attrs:{src:a("e1a0"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:!t.actionChenck,expression:"!actionChenck"}],attrs:{src:a("5a5d"),alt:""}}),s("span",[t._v(t._s(t.$t("Pledged")))])]):t._e(),s("div",{staticClass:"sele-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:t.inputText},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),s("img",{attrs:{src:a("1c4e"),alt:""}})])])]),t.listItem.length>0?s("div",{staticClass:"item-ul"},[s("ul",{staticClass:"sele-item"},t._l(t.listItem,(function(e,a){return s("li",{key:a,staticClass:"se-item-name child-item",class:e.show?"se-li-item-act":"",on:{click:function(s){return t.onlistItem(e,a)}}},[s("span",[t._v(" "+t._s(e.name)+" ")])])})),0)]):t._e()])},i=[],o=a("b85c"),n=(a("159b"),{name:"selete-table",data:function(){return{listAct:0,listItemAct:0,searchValue:"",listItem:[],actionChenck:!1,autoTapIndex:0,autoTapChild:[]}},watch:{searchValue:function(t){this.$emit("change-input",t)},list:function(t){this.listItem=t[0].child||[]},chainName:function(){var t,e=Object(o["a"])(this.list);try{for(e.s();!(t=e.n()).done;){var a=t.value;if(a.show=!1,a.child){var s,i=Object(o["a"])(a.child);try{for(i.s();!(s=i.n()).done;){var n=s.value;n.show=!1}}catch(r){i.e(r)}finally{i.f()}}a.child&&a.child.length>0&&(a.child[0].show=!0)}}catch(r){e.e(r)}finally{e.f()}this.list[0].show=!0,this.listItem=this.list[0].child||[]}},props:{list:{type:Array,default:function(){return[]}},inputText:{type:String,default:""},showCheck:{type:Boolean,default:!0},autoTap:{type:Boolean,default:!1}},beforeMount:function(){this.listItem=this.list[0].child||[]},computed:{chainName:function(){return this.changeList(),this.$store.state.chainName},isPC:function(){return this.$store.getters.isPC}},methods:{changeList:function(){},chenck:function(){if(this.actionChenck=!this.actionChenck,this.$emit("onchenck",this.actionChenck),this.autoTap){for(var t in this.list)this.list[t].show=!1;this.actionChenck?(this.list[0].show=!0,this.$emit("change-list",{item:this.list[0],index:0}),this.listItem=[]):(this.list[this.autoTapIndex].show=!0,this.$emit("change-list",{item:this.list[this.autoTapIndex],index:this.autoTapIndex}),this.listItem=this.autoTapChild)}},setAct:function(t,e,a,s,i){for(var o in this[t][this[e]].show=!1,this[t])this[t][o].show=!1;this[t][a].show=!0,this[e]=a,null!=s&&this.$emit(i,{item:s,index:a})},onlist:function(t,e){for(var a in this.isPC||this.hiddenHandle(),this.list)this.list[a].show=!1;this.list[e].show=!0,this.$emit("change-list",{item:t,index:e}),this.listItem=t.child||[],this.autoTapChild=this.listItem,this.autoTapIndex=e},onlistItem:function(t,e){this.setAct("listItem","listItemAct",e,t,"change-list-item"),this.isPC||this.hiddenHandle()},hiddenHandle:function(){this.$el.offsetParent.querySelectorAll(".topic_content").forEach((function(t){""==t.style.display&&(t.style.display="none")}))}}}),r=n,c=(a("6ca2"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,"3edc4097",null);e["a"]=l.exports},e653:function(t,e,a){"use strict";a("85db")},f04b:function(t,e,a){"use strict";a("caa1")},fc4f:function(t,e,a){"use strict";a("0f77")},fcd9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"h5TableTitle between ",class:t.chainName,on:{click:t.onitem}},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.name))]),a("p",[t._v("$"),a("CountUp",{attrs:{endVal:Number(t.transaction)}})],1)]),a("div",{staticClass:"item right"},[a("p",[t._v(" "+t._s(t.getformatFloat())+" "),t.$route.path.includes("boardroom")?a("span",{staticClass:"span"},[t._v(t._s(t.item.earnedToken))]):a("span",{staticClass:"span"},[t._v("MDX")])]),a("p",[t._v(t._s(t.per)),a("CountUp",{attrs:{endVal:Number(t.reward)}}),t._v(" "+t._s(t.after)+" ")],1)]),a("div",{staticClass:"item-end",on:{click:function(e){return e.stopPropagation(),t.topicShowHandle(e)}}},[a("CountUp",{attrs:{endVal:t.needApy?Number(t.APY>0?100*Math.pow(1+t.APY/365/100,365):0):t.APY>0?t.APY:0}}),t._v("% "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.topicShow,expression:"topicShow"}],staticClass:"topic_content"},[a("ApyTopic",{attrs:{apy:t.APY}})],1),t.APY>0?a("div",{staticClass:"topic"},[a("img",{attrs:{src:"Heco"==t.chainName?t.hecoTopic:t.bscTopic,alt:""}})]):t._e()],1)])},i=[],o=(a("a9e3"),a("caad"),a("2532"),a("159b"),a("2a5e")),n=a("a2e3"),r={name:"h5Table",data:function(){return{topicShow:!1,hoverIndex:-1,bscTopic:a("994b"),hecoTopic:a("c93a"),listAct:0,listItemAct:0,searchValue:"",listItem:[],per:"",after:"",earned:""}},props:{index:{type:Number,default:-1},item:{type:Object,default:function(){}},needApy:{type:Boolean,default:!1},name:{type:String,default:""},transaction:{type:String|Number,default:""},PersonalIncome:{type:String|Number,default:""},reward:{type:String|Number,default:""},APY:{type:String|Number,default:""},show:{type:Boolean,default:!1}},components:{ApyTopic:n["a"]},beforeMount:function(){},mounted:function(){this.unit()},computed:{chainName:function(){return this.$store.state.chainName},isShow:function(){return!this.show||0!==this.PersonalIncome}},methods:{getformatFloat:function(){return Object(o["a"])(this.PersonalIncome,2)},onitem:function(){this.$emit("ontable")},unit:function(){this.$route.path.includes("boardroom")?(this.per="$",this.after="",this.earned=this.item.earnedToken):(this.per="",this.after="MDX",this.earned="MDX")},topicShowHandle:function(){var t=this;this.$el.parentNode.querySelectorAll(".topic_content").forEach((function(e,a){t.index!=a?e.style.display="none":"none"==e.style.display?(e.style.display="",t.topicShow=!0):(e.style.display="",t.topicShow=!1)}))}}},c=r,l=(a("b0f7"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"70cec708",null);e["a"]=u.exports},fcf9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boardroom",class:[t.chainName,t.getLanguage]},[a("title-banner"),a("div",{staticClass:"boardroom__total"},[a("div",{staticClass:"container"},[a("div",{staticClass:"boardroom__tab"},t._l(t.getTabList,(function(e,s){return a("div",{key:"tabListRander"+s,staticClass:"boardroom-tab__item",class:{"is-active":t.boardroomTab===s+1},on:{click:function(e){return t.changeBoardroomTab(s+1)}}},[t._v(" "+t._s(t.$t(""+e["name"]))+" ")])})),0),1===t.boardroomTab?a("div",{staticClass:"boardroom__total-warp"},t._l(t.getTabList[0]["paramList"],(function(e,s){return a("div",{key:"tabParam1_"+s,staticClass:"boardroom-total__item"},[a("div",{staticClass:"total__key"},[t._v(t._s(e["text"]))]),a("div",{staticClass:"total__value"},[t._v(" $"),a("CountUp",{attrs:{endVal:e["val"]}})],1)])})),0):t._e(),2===t.boardroomTab?a("div",{staticClass:"boardroom__total-warp"},t._l(t.getTabList[1]["paramList"],(function(e,s){return a("div",{key:"tabParam2_"+s,staticClass:"boardroom-total__item"},[a("div",{staticClass:"total__key"},[t._v(" "+t._s(e["text"])+" ")]),a("div",{staticClass:"total__value"},[t._v(" $"),1!==s?a("CountUp",{attrs:{endVal:e["val"]}}):a("span",[t._v(t._s(e["val"]))]),2===s?a("span",[t._v("MDX")]):t._e()],1)])})),0):t._e(),3===t.boardroomTab?a("div",{staticClass:"boardroom__total-warp combustion-param"},[a("div",{staticClass:"combustion-list"},t._l(t.getTabList[2]["paramList"],(function(e,s){return a("div",{key:"tabParam1_"+s,staticClass:"boardroom-total__item combustion-item"},[a("div",{staticClass:"total__key"},[t._v(t._s(e["text"]))]),a("div",{staticClass:"total__value"},[1===s?a("span",[t._v("$")]):t._e(),a("CountUp",{attrs:{endVal:e["val"]}}),0===s?a("span",[t._v(" MDX")]):t._e(),1===s?a("span",[t._v(" USDT")]):t._e()],1)])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.boardroomTab,expression:"boardroomTab === 3"}],staticClass:"combustion-btn",on:{click:function(){return t.$router.push("/buyback")}}},[t._v(" "+t._s(t.$t("GoCombustion"))+" "),a("img",{attrs:{src:"Heco"===t.chainName?t.hecoJump:t.bscJump,alt:""}})])]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:[1,2].includes(t.boardroomTab),expression:"[1,2].includes(boardroomTab)"}],staticClass:"boardroom-total__rule-button",on:{click:t.showRule}},[t._v(" "+t._s(t.$t("seeRule"))+" "),a("span",{staticClass:"rule__button-icon"})])])]),a("Reward",{directives:[{name:"show",rawName:"v-show",value:1===t.boardroomTab,expression:"boardroomTab === 1"}]}),a("Repurchase",{directives:[{name:"show",rawName:"v-show",value:2===t.boardroomTab,expression:"boardroomTab === 2"}]}),a("Combustion",{directives:[{name:"show",rawName:"v-show",value:3===t.boardroomTab,expression:"boardroomTab === 3"}]}),a("Rule",{ref:"rule"})],1)},i=[],o=(a("13d5"),a("a9e3"),a("aa95")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("DestroyHistory"))+" "),a("a",{staticClass:"more",attrs:{href:t.transferUrl(t.getDestoryAdr,"address"),target:"_blank"}},[a("span",[t._v(" "+t._s(t.$t("seeMores")))]),a("img",{attrs:{src:t.rightArrow,alt:""}})])]),a("table",{staticClass:"table"},[t.isPC?a("colgroup",t._l(t.pcWidthList,(function(t,e){return a("col",{key:"pcWidthList"+e,attrs:{width:t}})})),0):a("colgroup",t._l(t.mobileWidthList,(function(t,e){return a("col",{key:"mobileWidthList"+e,attrs:{width:t}})})),0),a("thead",[a("tr",t._l(t.textList,(function(e,s){return a("th",{key:"textList"+s},[t._v(t._s(t.$t(e)))])})),0)]),a("tbody",t._l(t.combustionData["destroy_list"],(function(e,s){return a("tr",{key:"combustionList"+s},[a("td",[a("a",{attrs:{href:t.transferUrl(e["hash"]),target:"_blank"}},[t._v(t._s(t.transferAddress(e["hash"]))),a("img",{attrs:{src:t.direction,alt:""}})])]),a("td",[t._v(t._s(t.transferTime(1e3*e["destroy_time"])))]),a("td",[t._v(t._s(t._numComma(e["destroy_amount"],4)))]),a("td",[a("button",{on:{click:function(){return t.jumpHandle(e["hash"])}}},[t._v("Link")])])])})),0)])])},r=[],c=(a("1276"),a("ac1f"),a("b680"),a("d3b7"),a("25f0"),a("99af"),function(t,e){var a=new Date(+t),s=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var o=a.getDate();o=o<10?"0"+o:o;var n=a.getHours();n=n<10?"0"+n:n;var r=a.getMinutes();r=r<10?"0"+r:r;var c=a.getSeconds();return c=c<10?"0"+c:c,1===e?s+"-"+i+"-"+o+" "+n+":"+r+":"+c:2===e?s+"-"+i+"-"+o+" "+n+":"+r:3===e?i+"-"+o+" "+n+":"+r+":"+c:4===e?s+"-"+i+"-"+o+" "+n+":"+r+":"+c:5===e?i+"月"+o+"日":6===e?s+"/"+i+"/"+o:7===e?s+"/"+i+"/"+o+" "+n+":"+r+":"+c:8===e?i+"/"+o+" "+n+":"+r:9===e?n+":"+r+" "+i+"/"+s:10===e?s+"-"+i+"-"+o:11===e?i+"-"+o:12===e?i+"/"+o+" "+n+":"+r:n+":"+r+":"+c}),l=function(t,e){if(Number(t)>=0){var a=0;a=a.toFixed(e).split(".")[1];var s=t.toString(),i="",o=0;if(-1===s.indexOf(".")){for(var n=s.length-1;n>=0;n--)i=o%3===0&&0!==o?s.charAt(n)+","+i:s.charAt(n)+i,o++;return s=i,s}for(var r=s.indexOf(".")-1;r>=0;r--)i=o%3===0&&0!==o?s.charAt(r)+","+i:s.charAt(r)+i,o++;return s=i+(s+a).substr((s+a).indexOf("."),e+1),s}},u=function(t,e){return t?t.substring(0,e)+"..."+t.substring(t.length-e):""},h=function(t,e,a,s){var i=s||"tx";return"https://".concat("Heco"===e?"hecoinfo":"bscscan",".com/").concat(i,"/").concat(t,"?lang=").concat("zh-CN"===a?"zh-CN":"en")},d=a("32a9"),m={name:"Combustion",data:function(){return{rightArrow:a("9678"),pcWidthList:["25%","25%","25%","25%"],mobileWidthList:["30%","27%","28%","15%"],textList:["jyhash","DestroyTime","DestroyNum"],direction:a("2b86")}},beforeCreate:function(){this.$store.dispatch("buyBack/getCombustionData")},computed:{combustionData:function(){return this.$store.state.buyBack.combustionData},getDestoryAdr:function(){return d["b"][this.chainName]}},methods:{jumpHandle:function(t){window.open(this.transferUrl(t))},transferTime:function(t){return c(t,this.isPC?7:3)},transferAddress:function(t){return u(t,this.isPC?6:4)},transferUrl:function(t,e){return h(t,this.chainName,this.getLanguage,e)},_numComma:l}},p=m,_=(a("016c"),a("2877")),b=Object(_["a"])(p,n,r,!1,null,"60fa0375",null),v=b.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[t.modelShow?s("div",{staticClass:"model"},[s("div",{staticClass:"model-wrap"},[s("img",{staticClass:"close-icon",attrs:{src:a("c2f4")},on:{click:t.hideModel}}),s("h2",[t._v(t._s(t.$t("text1"))+"：")]),t.isdes?s("h3",[t._v(" "+t._s("Heco"==t.chainName?t.$t("text2_heco"):t.$t("text2_bsc"))+"：")]):t._e(),t.isdes?s("p",[t._v(t._s("Heco"==t.chainName?t.$t("text3_heco"):t.$t("text3_bsc")))]):t._e(),t.isairdrop?s("h3",[t._v(" "+t._s("Heco"==t.chainName?t.$t("text4_heco"):t.$t("text4_bsc"))+"：")]):t._e(),t.isairdrop?s("p",[t._v(t._s("Heco"==t.chainName?t.$t("text5_heco"):t.$t("text5_bsc")))]):t._e(),s("hr"),s("p",[t._v(t._s(t.$t("text6"))+t._s(t.$t("text7")))])])]):t._e()])},C=[],w={name:"Rule",data:function(){return{modelShow:!1,isairdrop:!1,isdes:!0}},methods:{showModel:function(t,e){this.isairdrop=t,this.isdes=e,this.modelShow=!0},hideModel:function(){this.isairdrop=!1,this.isdes=!1,this.modelShow=!1}}},y=w,g=(a("50fc"),Object(_["a"])(y,f,C,!1,null,"03d90eeb",null)),T=g.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"repurchase",class:t.chainName},[t.isPC?s("div",{staticClass:"container"},[s("div",{staticClass:"repo-record"},[s("div",{staticClass:"record-title"},[s("span",[t._v(" "+t._s(t.$t("buyHistory")))]),s("a",{attrs:{href:t.urlInfo[t.chainName],target:"_blank"}},[s("span",[t._v(" "+t._s(t.$t("seeMores")))]),s("span",{staticClass:"rule__button-icon"})])]),s("div",{staticClass:"record-table"},[t.listData.length?s("div",{staticClass:"repurchase__table"},[s("div",{staticClass:"repurchase__table-head"},[s("div",{staticClass:"repurchase__table-head-column column-1"},[t._v(" "+t._s(t.$t("hash"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-2"},[t._v(" "+t._s(t.$t("block"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-4"},[t._v(" "+t._s(t.$t("send"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-5"}),s("div",{staticClass:"repurchase__table-head-column column-6"},[t._v(" "+t._s(t.$t("receive"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-7"},[t._v(" "+t._s(t.$t("price"))+" ")]),s("div",{staticClass:"repurchase__table-head-column column-8"},[t._v(" "+t._s(t.$t("amount"))+" ")])]),s("div",{staticClass:"repurchase__table-body"},t._l(t.listData,(function(e){return s("div",{key:e.trans_hash,staticClass:"repurchase__table-body-row"},[s("div",{staticClass:"repurchase__table-body-column column-1 text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/tx/"+e.trans_hash+"?"+t.globalLanguage}},[t._v(" "+t._s(e.trans_hash)+" ")])]),s("div",{staticClass:"repurchase__table-body-column column-2"},[t._v(" "+t._s(e.block_number)+" ")]),s("div",{staticClass:"repurchase__table-body-column column-4 text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+e.addr_from+"?"+t.globalLanguage}},[t._v(" "+t._s(e.addr_from))])]),t._m(0,!0),s("div",{staticClass:"repurchase__table-body-column column-6 text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+e.addr_to+"?"+t.globalLanguage}},[t._v(t._s(e.addr_to))])]),s("div",{staticClass:"repurchase__table-body-column column-7"},[t._v(" $"+t._s(Number(e.price).toFixed(4))+" ")]),s("div",{staticClass:"repurchase__table-body-column column-8"},[t._v(" "+t._s(Number(e.amount).toFixed(4))+" ")])])})),0)]):t._e(),t.listData.length?t._e():s("div",{staticClass:"empty"},[s("img",{attrs:{src:a("1427")}}),s("p",[t._v(t._s(t.$t("empptyData")))])])])])]):t._e(),t.isMobile?s("div",{staticClass:"container"},[s("div",{staticClass:"repo-record"},[s("div",{staticClass:"record-title"},[t._v(" "+t._s(t.$t("buyHistory"))+" "),s("a",{attrs:{href:t.urlInfo[t.chainName],target:"_blank"}},[s("span",[t._v(" "+t._s(t.$t("seeMores")))]),s("span",{staticClass:"rule__button-icon"})])]),s("div",{staticClass:"record-table"},[t.listData.length?s("div",{staticClass:"repurchase__table"},[s("div",{staticClass:"repurchase__table-head"},[s("div",{staticClass:"repurchase__table-head-column column-1"},[s("div",{staticClass:"repurchase__table-head-row"},[t._v(t._s(t.$t("hash")))]),s("div",{staticClass:"repurchase__table-head-row margin-top-4"},[t._v(" "+t._s(t.$t("block"))+" ")])]),s("div",{staticClass:"repurchase__table-head-column column-2"},[s("div",{staticClass:"repurchase__table-head-row"},[t._v(t._s(t.$t("price")))]),s("div",{staticClass:"repurchase__table-head-row margin-top-4"},[t._v(" "+t._s(t.$t("amount"))+" ")])]),s("div",{staticClass:"repurchase__table-head-column column-3"},[s("div",{staticClass:"repurchase__table-head-row"},[t._v(t._s(t.$t("send")))]),s("div",{staticClass:"repurchase__table-head-row margin-top-4"},[t._v(" "+t._s(t.$t("receive"))+" ")])]),s("div",{staticClass:"repurchase__table-head-column column-4"})]),s("div",{staticClass:"repurchase__table-body"},t._l(t.listData,(function(e){return s("div",{key:e.trans_hash,staticClass:"repurchase__table-body-row"},[s("div",{staticClass:"repurchase__table-body-column-warp column-1"},[s("div",{staticClass:"repurchase__table-body-column  text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/tx/"+e.trans_hash+"?"+t.globalLanguage}},[t._v(" "+t._s(e.trans_hash)+" ")])]),s("div",{staticClass:"repurchase__table-body-column"},[t._v(" "+t._s(e.block_number)+" ")])]),s("div",{staticClass:"repurchase__table-body-column-warp column-2"},[s("div",{staticClass:"repurchase__table-body-column"},[t._v(" $"+t._s(Number(e.price).toFixed(3))+" ")]),s("div",{staticClass:"repurchase__table-body-column"},[t._v(" "+t._s(Number(e.amount).toFixed(2))+" ")])]),s("div",{staticClass:"repurchase__table-body-column-warp column-3"},[s("div",{staticClass:"repurchase__table-body-column text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+e.addr_from+"?"+t.globalLanguage}},[t._v(" "+t._s(e.addr_from))])]),s("div",{staticClass:"repurchase__table-body-column text-overflow"},[s("a",{staticClass:"address",attrs:{target:"_blank",href:t.url[t.chainName]+"/address/"+e.addr_to+"?"+t.globalLanguage}},[t._v(t._s(e.addr_to))])])]),s("div",{staticClass:"repurchase__table-body-column-warp column-4"},[s("a",{staticClass:"repurchase__table-button",attrs:{target:"_blank",href:t.url[t.chainName]+"/tx/"+e.trans_hash+"?"+t.globalLanguage}},[t._v("Link")])])])})),0)]):t._e(),t.listData.length?t._e():s("div",{staticClass:"empty"},[s("img",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==t.chainName,expression:"chainName=='Bsc'"}],attrs:{src:a("7312")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"Heco"==t.chainName,expression:"chainName=='Heco'"}],attrs:{src:a("1427")}}),s("p",[t._v(t._s(t.$t("empptyData")))])])])])]):t._e()])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"repurchase__table-body-column column-5"},[a("span",{staticClass:"repurchase__table-body-icon"})])}],N=a("ed08"),k=null,S={name:"Repurchase",data:function(){return{url:{Bsc:"https://bscscan.com",Heco:"https://hecoinfo.com"},urlInfo:{Bsc:" https://bscscan.com/address/0x1308AF6853B449d7604C7544cb2170248527110F",Heco:" https://hecoinfo.com/address/0x46900c0c18ace98baab81561b9906dc93287910c"}}},beforeCreate:function(){this.$store.dispatch("boardRoom/getDestroyList")},methods:{formatData:function(t){return Object(N["d"])(t,"/").ymdhms}},computed:{listData:function(){return this.$store.state.boardRoom.destroyList}},beforeDestroy:function(){clearInterval(k)}},D=S,A=(a("e653"),Object(_["a"])(D,$,x,!1,null,"1de91c46",null)),L=A.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boardroom__container",class:t.chainName},[t.isPC?s("div",{staticClass:"container"},[s("selete-table",{directives:[{name:"show",rawName:"v-show",value:"Heco"==t.chainName,expression:"chainName=='Heco'"}],attrs:{autoTap:!0,list:t.listNameHeco,inputText:t.isPC?t.$t("search"):t.$t("searchText")},on:{"change-list":t.onList,"change-list-item":t.onListItem,"change-input":function(e){t.searchValue=e},onchenck:t.onActionChenck}}),s("selete-table",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==t.chainName,expression:"chainName=='Bsc'"}],attrs:{autoTap:!0,list:t.listNameBsc,inputText:t.isPC?t.$t("search"):t.$t("searchText")},on:{"change-list":t.onList,"change-list-item":t.onListItem,"change-input":function(e){t.searchValue=e},onchenck:t.onActionChenck}}),s("div",{staticClass:"boardroom__content"},[t._l(t.currentBoardroomData,(function(e,a){return[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.actionChenck||0!==Number(e.__reward),expression:"actionChenck?Number(item.__reward) === 0?false:true:true"}],key:a+"i",staticClass:"boardroom__content-item"},[s("div",{staticClass:"percent"},[s("span",[t._v(t._s(e.pool_rate)+"%")])]),s("div",{staticClass:"airdrop"},[s("div",{staticClass:"bg"},[t._v(t._s(e.name))]),s("div",{staticClass:"wait-airdrop"},[s("div",{staticClass:"wait-title"},[t._v(t._s(t.$t("TotalAirdropRewards"))+"($)")]),s("div",{staticClass:"wait-info"},[s("CountUp",{attrs:{endVal:Number(e.total_amount||0)}})],1)]),s("div",{staticClass:"wait-airdrop"},[s("div",{staticClass:"wait-title"},[t._v(" "+t._s(t.$t("CurrentAirdropRewards"))+"($) ")]),s("div",{staticClass:"wait-info"},[s("CountUp",{attrs:{endVal:Number(e.amount||0)}})],1)]),s("div",{staticClass:"wait-airdrop"},[s("div",{staticClass:"wait-title"},[t._v(" "+t._s(t.$t("MounthAirdropRewards"))+"($) ")]),s("div",{staticClass:"wait-info"},[t._v(" ≈ "),s("CountUp",{attrs:{endVal:Number(30*e.amount||0)}})],1)])]),s("div",{staticClass:"icon-container"},[s("div",{staticClass:"icon-wrap"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:t.getLpImgUrl(e),alt:""}})]),s("div",{staticClass:"info"},[s("p",{staticClass:"ht-price"},[t._v(t._s(e.name))])])]),s("div",{staticClass:"icon-wrap w200"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:t.getImgUrl(e.earnedToken),alt:""}})]),s("div",{staticClass:"info"},[s("p",{staticClass:"ht-price"},[t._v(" "+t._s(e.earnedToken)+" "),s("span",[t._v("Earned")])])])]),s("div",{staticClass:"value-warp"},[s("div",{staticClass:"key"},[t._v(" APY ")]),s("div",{staticClass:"value"},[s("CountUp",{attrs:{endVal:Number(e.pool_apy>0?100*Math.pow(1+e.pool_apy/365/100,365):0)}}),t._v("% "),t.hoverIndex==a?s("div",{staticClass:"topic_content"},[s("ApyTopic",{attrs:{apy:Number(e.pool_apy||0)}})],1):t._e(),e.pool_apy>0?s("div",{staticClass:"topic"},[s("img",{attrs:{src:"Heco"==t.chainName?t.hecoTopic:t.bscTopic,alt:""},on:{mouseover:function(e){t.hoverIndex=a},mouseleave:function(e){t.hoverIndex=-1}}})]):t._e()],1)]),s("div",{staticClass:"value-warp w250"},[s("div",{staticClass:"key"},[t._v(" TVL ")]),s("div",{staticClass:"value value2"},[t._v(" $"),s("CountUp",{attrs:{endVal:Number(e.pool_tvl||0)}})],1)]),s("div",{staticClass:"value-warp w250"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.$t("Reward"))+" ")]),s("div",{staticClass:"value"},[s("CountUp",{attrs:{options:t.options,endVal:Number(e.__reward)}}),t._v(" "+t._s(e.earnedToken)+" ")],1)]),s("div",{staticClass:"boardroom__content-button-warp"},[s("div",{staticClass:"boardroom__content-button"},[s("span",{staticClass:"span",on:{click:function(a){return t.toPool(e)}}},[t._v(t._s(t.$t("Stakeds")))]),s("span",[t._v("|")]),s("a",{staticClass:"span",attrs:{href:t.globalGetTokenConfig(e),target:"_blank"}},[t._v(t._s(t.$t("transactions")))])])])])])]})),t.currentBoardroomData.length?t._e():s("div",{staticClass:"empty"},[s("img",{attrs:{src:a("1427")}}),s("p",[t._v(t._s(t.$t("empptyData")))])])],2)],1):t._e(),t.isMobile?s("div",{staticClass:"container"},[s("selete-table",{directives:[{name:"show",rawName:"v-show",value:"Heco"==t.chainName,expression:"chainName=='Heco'"}],attrs:{list:t.listNameHeco,inputText:t.isPC?t.$t("search"):t.$t("searchText")},on:{"change-list":t.onList,"change-list-item":t.onListItem,"change-input":function(e){t.searchValue=e},onchenck:t.onh5Chenck}}),s("selete-table",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==t.chainName,expression:"chainName=='Bsc'"}],attrs:{list:t.listNameBsc,inputText:t.isPC?t.$t("search"):t.$t("searchText")},on:{"change-list":t.onList,"change-list-item":t.onListItem,"change-input":function(e){t.searchValue=e},onchenck:t.onh5Chenck}}),s("h5-table-title",{attrs:{name:2==t.tabValue?t.$t("TradesLP"):t.$t("Trades"),transaction:"TVL",PersonalIncome:t.$t("Reward"),reward:t.$t("DailyReward"),APY:"APY",sortType:t.sortType,sortSide:t.sortSide},on:{sort:t.onh5Sort}}),t._l(t.currentBoardroomData,(function(e,a){return s("h5-table",{key:a+"t",attrs:{name:e.name,transaction:e.pool_tvl,reward:e.amount,APY:e.pool_apy,PersonalIncome:e.__reward,show:t.boolChenck,index:a,item:e,needApy:!0},on:{ontable:function(a){return t.toPool(e)}}})})),0==t.currentBoardroomData.length?s("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()],2):t._e()])},R=[],I=a("5530"),V=(a("159b"),a("4de4"),a("4d63"),a("b0c0"),a("837b")),H=a("e150"),B=a("896e"),M=a("fcd9"),O=a("a2e3"),E={name:"Boardroom",data:function(){return{hoverIndex:-1,bscTopic:a("994b"),hecoTopic:a("5312"),PersonalIncome:0,actionChenck:!1,boolChenck:!1,sortType:"3",sortSide:"1",tabValue:1,options:{decimalPlaces:4},currencyTabValue:"all",searchValue:"",tableSortType:1,tableSortKey:"apy"}},components:{SeleteTable:H["a"],"h5-table-title":B["a"],"h5-table":M["a"],ApyTopic:O["a"]},computed:{listNameHeco:function(){return[{name:this.$t("all"),show:!0,child:[{name:this.$t("all"),show:!0},{name:"WHT",show:!1},{name:"MDX",show:!1}]},{name:"LP",show:!1,child:[{name:this.$t("all"),show:!0},{name:"WHT",show:!1},{name:"MDX",show:!1}]},{name:this.$t("currency"),show:!1,child:[{name:this.$t("all"),show:!0},{name:"WHT",show:!1},{name:"MDX",show:!1}]}]},listNameBsc:function(){return[{name:this.$t("all"),show:!0,child:[{name:this.$t("all"),show:!0},{name:"HMDX",show:!1},{name:"MDX",show:!1}]},{name:"LP",show:!1,child:[{name:this.$t("all"),show:!0},{name:"HMDX",show:!1},{name:"MDX",show:!1}]},{name:this.$t("currency"),show:!1,child:[{name:this.$t("all"),show:!0},{name:"HMDX",show:!1},{name:"MDX",show:!1}]}]},mobileCountUpOptions:function(){var t=this;return{formattingFn:function(e){return Object(N["g"])(Object(N["c"])(e,1e4),1)+t.$t("unit")}}},isMobile:function(){return this.$store.getters.isMobile},chainId:function(){return this.$store.state.chainId},coinConfig:function(){return V["a"][this.chainId]},isPC:function(){return this.$store.getters.isPC},currentAddress:function(){return this.$store.getters.currentAddress},earn:function(){return this.$store.state.boardRoom.earn},boardroomData:function(){return 1===this.tabValue?this.boardRoomDataAll:2===this.tabValue?this.boardRoomDataLP:3===this.tabValue?this.boardRoomDataSingle:void 0},poolReward:function(){return this.$store.state.boardRoom.poolReward},currentBoardroomData:function(){var t=this,e=[],a=this.boardroomData;if(a.forEach((function(a){var s=Object(I["a"])(Object(I["a"])({},a),{},{__reward:t.poolReward[a.earnedToken.toLocaleLowerCase()]?t.poolReward[a.earnedToken.toLocaleLowerCase()][a.pid]:0});e.push(s)})),"all"!==this.currencyTabValue&&(e=e.filter((function(e){return e.earnedToken.toUpperCase()===t.currencyTabValue.toUpperCase()}))),this.searchValue){var s=new RegExp(this.searchValue,"gi");e=e.filter((function(t){return s.test(t.earnedToken)||s.test(t.name)}))}return this.tableSortType&&this.tableSortKey&&(1===this.tableSortType&&e.sort((function(e,a){return a[t.tableSortKey]-e[t.tableSortKey]})),2===this.tableSortType&&e.sort((function(e,a){return e[t.tableSortKey]-a[t.tableSortKey]}))),e},boardRoomDataLP:function(){return this.$store.getters["boardRoom/currentChainBoardRoomDataLP"]},boardRoomDataSingle:function(){return this.$store.getters["boardRoom/currentChainBoardRoomDataSingle"]},boardRoomDataAll:function(){return this.$store.getters["boardRoom/currentChainBoardRoomDataAll"]}},methods:{onh5Sort:function(t,e,a){t&&(this.sortType=t,this.tableSortKey=3==t?"pool_apy":1==t?"amount":4==t?"pool_tvl":"__reward",this.sortSide=1==a?"1":"0",this.tableSortType=a)},onList:function(t){var e=t.index;this.changeTabValue(e+1)},onListItem:function(t){var e=t.item,a=t.index,s=0===a?"all":e.name;this.changeCurrencyTabValue(s)},onActionChenck:function(){this.actionChenck=!this.actionChenck},onh5Chenck:function(t){this.boolChenck=t},toPool:function(t){1!=this.chainId&&this.$router.push({path:"/pool/boardroom/".concat(t.earned_token.toLowerCase(),"/").concat(t.pid)})},resetTable:function(){this.currencyTabValue="all",this.searchValue="",this.tableSortType=0,this.tableSortKey=""},changeTabValue:function(t){this.tabValue=t,this.resetTable()},changeCurrencyTabValue:function(t){this.currencyTabValue=t},sortTable:function(t){t===this.tableSortKey?this.tableSortType=1===this.tableSortType?2:1:this.tableSortType=1,this.tableSortKey=t},getImgUrl:function(t){return this.coinConfig?this.globalGetImgUrl(this.coinConfig[t.toLowerCase()]):""},getLpImgUrl:function(t){return this.globalGetImgUrl(t.lpAddress)}}},U=E,j=(a("29c7"),Object(_["a"])(U,P,R,!1,null,"20f0f208",null)),Y=j.exports,X={name:"Boardroom",components:{Rule:T,Reward:Y,Repurchase:L,Combustion:v,TitleBanner:o["a"]},data:function(){return{boardroomTab:1,stakedOptions:{decimalPlaces:4},hecoJump:a("5c91"),bscJump:a("173c")}},computed:{getTabList:function(){return[{name:"airdropRewards",paramList:[{text:"".concat(this.$i18n.t("PendingAirdropRewards"),"（HECO&BSC）"),val:this.allChainData.reward_amount||0},{text:"".concat(this.$i18n.t("TotalAirdropRewards"),"（HECO&BSC）"),val:this.allChainData.boardroom_rewards||0},{text:this.$i18n.t("TotalRewardAmountOfTheDay"),val:this.todayReward},{text:this.$i18n.t("EstimatedTotalRewardAmountOfTheMonth"),val:30*this.todayReward}]},{name:"Repurchase",paramList:[{text:"".concat(this.$i18n.t("AmountToBeRepurchased"),"（HECO&BSC）"),val:this.allChainData.repurch_amount||0},{text:this.$i18n.t("RepurchasePrice"),val:Math.round(1e4*this.rewardeData.destoryPrice)/1e4},{text:"".concat(this.$i18n.t("TotalRepurchaseAndDestructionQuantity"),"（HECO&BSC）"),val:this.allChainData.destroy_mdx||0},{text:"".concat(this.$i18n.t("TotalRepurchaseAmount"),"（HECO&BSC）"),val:this.allChainData.total_repurch||0}]},{name:"Combustion",paramList:[{text:"".concat(this.$i18n.t("CombustionNum"),"（HECO&BSC）"),val:+this.combustionData["total_destroy_mdx"]},{text:"".concat(this.$i18n.t("CombustionAmount"),"（HECO&BSC）"),val:+this.combustionData["total_destroy_usdt"]}]}]},allChainData:function(){return this.$store.state.allChain},rewardeData:function(){return this.$store.state.boardRoom.rewardeData},combustionData:function(){return this.$store.state.buyBack.combustionData},todayReward:function(){var t=this.$store.getters["boardRoom/currentChainBoardRoomData"]["allData"],e=t.reduce((function(t,e){return t+Number(e.amount)}),0);return e||0}},methods:{changeBoardroomTab:function(t){this.boardroomTab=t},showRule:function(){1===this.boardroomTab&&this.$refs.rule.showModel(!0,!1),2===this.boardroomTab&&this.$refs.rule.showModel(!1,!0)}}},F=X,K=(a("4bf4"),Object(_["a"])(F,s,i,!1,null,"97916fee",null));e["default"]=K.exports}}]);