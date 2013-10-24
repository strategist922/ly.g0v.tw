function import$(e,t){var n={}.hasOwnProperty;for(var o in t)n.call(t,o)&&(e[o]=t[o]);return e}function in$(e,t){for(var n=-1,o=t.length>>>0;o>++n;)if(e===t[n]&&n in t)return!0;return!1}function deepEq$(e,t,n){function o(e,t,r){var s,l,c,u,d,f,g,p;if(null==e||null==t)return e===t;if(e.__placeholder__||t.__placeholder__)return!0;if(e===t)return 0!==e||1/e==1/t;if(s=i.call(e),i.call(t)!=s)return!1;switch(s){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(l=r.length;l--;)if(r[l]==e)return!0;if(r.push(e),c=0,u=!0,"[object Array]"==s){if(d=e.length,f=t.length,first){switch(n){case"===":u=d===f;break;case"<==":u=f>=d;break;case"<<=":u=f>d}c=d,first=!1}else u=d===f,c=d;if(u)for(;c--&&(u=c in e==c in t&&o(e[c],t[c],r)););}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;for(g in e)if(a(e,g)&&(c++,!(u=a(t,g)&&o(e[g],t[g],r))))break;if(u){p=0;for(g in t)a(t,g)&&++p;first?u="<<="===n?p>c:"<=="===n?p>=c:c===p:(first=!1,u=c===p)}}return r.pop(),u}var i={}.toString,r={}.hasOwnProperty,a=function(e,t){return r.call(e,t)};return first=!0,o(e,t,[])}function curry$(e,t){var n,o=function(i){return e.length>1?function(){var r=i?i.concat():[];return n=t?n||this:this,r.push.apply(r,arguments)<e.length&&arguments.length?o.call(n,r):e.apply(n,r)}:e};return o()}(function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},o=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n,o,i=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var r=0,a=n.length;a>r;r++)o=n[r],".."===o?i.pop():"."!==o&&""!==o&&i.push(o);return i.join("/")},r=function(e){return e.split("/").slice(0,-1).join("/")},a=function(t){return function(n){var o=r(t),a=i(o,n);return e.require(a)}},s=function(e,t){var o={id:e,exports:{}};t(o.exports,a(e),o);var i=n[e]=o.exports;return i},l=function(e){var r=i(e,".");if(o(n,r))return n[r];if(o(t,r))return s(r,t[r]);var a=i(r,"./index");if(o(n,a))return n[a];if(o(t,a))return s(a,t[a]);throw Error('Cannot find module "'+e+'"')},c=function(e,n){if("object"==typeof e)for(var i in e)o(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=l,e.require.define=c,e.require.register=c,e.require.brunch=!0}})(),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("ly.g0v.tw",["ngGrid","app.controllers","app.directives","app.filters","app.services","scroll","partials","ui.state","utils"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("motions",{url:"/motions",templateUrl:"/partials/motions.html",controller:"LYMotions"}).state("motions.sitting",{url:"/{session}/{sitting}"}).state("bills",{url:"/bills/{billId}",templateUrl:"/partials/bills.html",controller:"LYBills"}).state("calendar",{url:"/calendar",templateUrl:"/partials/calendar.html"}).state("sittings",{url:"/sittings",templateUrl:"/partials/sittings.html",controller:"LYSittings"}).state("sittings.detail",{url:"/{sitting}"}).state("sittings.detail.video",{url:"/video"}).state("debates",{url:"/debates",templateUrl:"/partials/debates.html"}).state("sitting",{url:"/sitting",templateUrl:"/partials/sitting.html",controller:"LYSitting"}).state("about",{url:"/about",templateUrl:"/partials/about.html",controller:"About"}),t.otherwise("/calendar"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,o){return e.$state=t,e.$stateParam=n,e.go=function(e){return o.path(e)},e._build=window.global.config.BUILD,window.onYouTubeIframeAPIReady=function(){return e.$broadcast("youtube-ready")}}));var committees,renderCommittee,dateParse,dowave,replace$="".replace;committees={IAD:"內政",FND:"外交及國防",ECO:"經濟",FIN:"財政",EDU:"教育及文化",TRA:"交通",JUD:"司法及法制",SWE:"社會福利及衛生環境",PRO:"程序"},renderCommittee=function(e){var t,n,o,i,r;if(null==e)return"院會";if("null"===e)return"院會";for($.isArray(e)||(e=[e]),n=[],o=0,i=e.length;i>o;++o)r=e[o],n.push('<img class="avatar small" src="http://avatars.io/50a65bb26e293122b0000073/committee-'+r+'?size=small" alt="'+committees[r]+'">'+committees[r]);return t=n,t.join("")},dateParse=function(e){return e=e.replace(/[-:]/g," ").split(" "),new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])},dowave=function(e,t,n,o){var i,r,a,s,l,c,u,d,f,g;return null==o&&(o=0),i={top:0,left:30,right:0,bottom:50},r=960-i.left-i.right,a=100-i.top-i.bottom,s=d3.time.format("%YM%m").parse,l=d3.select("svg.waveform").text("").attr("width",r+i.left+i.right).attr("height",a+i.top+i.bottom).on("click",function(){var e;return e=u.invert(d3.mouse(this)[0]-i.left),n(e)}).append("g").attr("transform","translate("+i.left+","+i.top+")"),c=[],c.forEach(function(e){return e.date=s(e.date)}),u=d3.scale.linear().range([0,r]).domain([0,e.length]),d=d3.scale.linear().range([a,0]).domain([0,d3.max(e)]),dowave.setLoc=function(e){return d3.select("#location-marker").attr("transform",function(){return"translate("+u(e)+" 0)"})},f=d3.svg.axis().scale(u).orient("bottom").tickFormat(function(e){var t,n,i,r;return o&&(e=(28800+e+o.getTime()/1e3)%86400),t=[parseInt(e/3600)%60,parseInt(e/60)%60,e%60].map(function(e){return e>9&&e+""||"0"+e}),n=t[0],i=t[1],r=t[2],n+":"+i+":"+r}),l.append("g").attr("class","x axis").attr("transform","translate(0,"+a+")").call(f),l.append("path").attr("id","location-marker").attr("d","M0 0L0,40").attr("stroke","#f00").attr("stroke-width","2px"),g=l.selectAll("g.avatar").data(t).enter().append("g"),g.attr("class","avatar"),g.attr("transform",function(e){return"translate("+u(e.offset/1e3)+" 0)"}),g.append("image").attr("class","avatar small").attr("width",10).attr("height",10).attr("xlink:href",function(e){var t;return t=""+CryptoJS.MD5("MLY/"+e.mly),"http://avatars.io/50a65bb26e293122b0000073/"+t+"?size=small"}).attr("alt",function(e){return e.speaker}),g.append("rect").attr("width",10).attr("height",10).style("stroke","steelblue").style("stroke-width","1px").style("fill","none"),g},angular.module("app.controllers",[]).controller({AppCtrl:["$scope","$location","$rootScope"].concat(function(e,t){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""}})}).filter("committee",function(){return renderCommittee}).controller({LYCalendar:["$rootScope","$scope","$http","LYService"].concat(function(e,t,n,o){function i(){var e;return e={start:moment(r).day(0-s),end:moment(r).day(0-s+7)},e.label=e.start.format("YYYY:  MM-DD to "+e.end.format("MM-DD")),e}var r,a,s,l;for(t.type="sitting",e.activeTab="calendar",t.committee=function(e){var t,n,o,i,r,a,s;if(t=e.entity,n=t.committee,!n)return"院會";for(i=[],r=0,a=n.length;a>r;++r)s=n[r],i.push('<img class="avatar small" src="http://avatars.io/50a65bb26e293122b0000073/committee-'+s+'?size=small" alt="'+committees[s]+'">'+committees[s]);return o=i,o.join("")},t.chair=function(e){var t,n,i,r;return t=e.entity,(n=t.chair)?(i=o.resolveParty(n),r=""+CryptoJS.MD5("MLY/"+n),n+('<img class="avatar small '+i+'" src="http://avatars.io/50a65bb26e293122b0000073/'+r+'?size=small" alt="'+n+'">')):""},t.onair=function(e){var t,n,o,i,a,s,l;return t=e.entity,n=t.date,o=t.time,i=moment(n).startOf("day"),+r!==+i?!1:(a=o.split("~").map(function(e){return moment(i.format("YYYY-MM-DD")+" "+e)}),s=a[0],l=a[1],(a=moment())>=s&&l>=a)},t.gridOptions=import$({showFilter:!0,showColumnMenu:!0,showGroupPanel:!0,enableHighlighting:!0,groupsCollapsedByDefault:!1,inlineAggregate:!0,enableRowSelection:!0},{groups:["primaryCommittee"],rowHeight:65,data:"calendar",i18n:"zh-tw",aggregateTemplate:'<div ng-click="row.toggleExpand()" ng-style="rowStyle(row)" class="ngAggregate" ng-switch on="row.field">\n  <span ng-switch-when="primaryCommittee" class="ngAggregateText" ng-bind-html-unsafe="row.label | committee"></span>\n  <span ng-switch-default class="ngAggregateText">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}} {{AggItemsLabel}})</span>\n  <div class="{{row.aggClass()}}"></div>\n</div>',columnDefs:[{field:"primaryCommittee",visible:!1,displayName:"委員會",width:130,cellTemplate:'<div ng-bind-html-unsafe="row.getProperty(col.field) | committee"></div>'},{field:"committee",visible:!1,displayName:"委員會",width:130,cellTemplate:'<div ng-bind-html-unsafe="row.getProperty(col.field) | committee"></div>'},{field:"chair",displayName:"主席",width:130,cellTemplate:'<div ng-bind-html-unsafe="chair(row)"></div>'},{field:"date",cellFilter:"date: mediumDate",width:100,displayName:"日期"},{field:"time",width:100,displayName:"時間",cellTemplate:'<div ng-class="{onair: onair(row)}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>\'}]'},{field:"name",displayName:"名稱",width:320},{field:"summary",displayName:"議程",cellClass:"summary",width:"*"}]}),t.$watch("height",function(){var e;return $(".grid").height(t.height-65),e=t.gridOptions,e.$gridServices.DomUtilityService.RebuildGrid(e.$gridScope,e.ngGrid)},!1),r=moment().startOf("day"),t.weeksOpts=[],a=0;49>=a;a+=7)s=a,t.weeksOpts.push(i());return t.weeks=t.weeksOpts[0],l=function(){var e,o,i;return e=[t.weeks.start,t.weeks.end].map(function(e){return e.format("YYYY-MM-DD")}),o=e[0],i=e[1],t.start=t.weeks.start.format("YYYY-MM-DD"),t.end=t.weeks.end.format("YYYY-MM-DD"),n.get("http://api-beta.ly.g0v.tw/v0/collections/calendar",{params:{s:JSON.stringify({date:1,time:1}),q:JSON.stringify({date:{$gt:o,$lt:i},type:t.type})}}).success(function(e){var n,o;return n=e.paging,o=e.entries,t.calendar=o.map(function(e){var t;return e.primaryCommittee=null!=(t=e.committee)?t[0]:void 0,e})})},t.$watch("weeks",l),t.change=function(e){t.type=e,l()}})}).controller({LYBills:["$scope","$http","$state","LYService"].concat(function(e,t,n,o){return e.$watch("$state.params.billId",function(){var i;return i=n.params.billId,t.get("http://api-beta.ly.g0v.tw/v0/collections/bills/"+i).success(function(n){var r;return r=n.committee,t.get("http://api-beta.ly.g0v.tw/v0/collections/bills/"+i+"/data").success(function(t){var i,r;return i&&(i=i.map(function(e){return{abbr:e,name:committees[e]}})),import$((e.summary=n.summary,e.abstract=n.abstract,e),{committee:i,related:n.committee?null!=t?null!=(r=t.related)?r.map(function(e){var t,n,i,r,a;return t=e[0],n=e[1],import$({id:t,summary:n},null!=(i=n.match(/本院委員(.*?)等/))&&(r=i[0],a=i[1],i)?{party:o.resolveParty(a),avatar:""+CryptoJS.MD5("MLY/"+a),name:a}:{})}):void 0:void 0:void 0,sponsors:null!=(r=n.sponsors)?r.map(function(e){var t;return t=o.resolveParty(e),{party:t,name:e,avatar:""+CryptoJS.MD5("MLY/"+e)}}):void 0,cosponsors:null!=(r=n.cosponsors)?r.map(function(e){var t;return t=o.resolveParty(e),{party:t,name:e,avatar:""+CryptoJS.MD5("MLY/"+e)}}):void 0,setDiff:function(e,t){var n,o,i,r,a,s,l,c,u;for(o=[],i=0,a=(r=e.header).length;a>i;++i)s=i,l=r[i],l===t&&o.push(s);return n=o,c=e.baseIndex,u=e.commentIndex,import$(e,{diffnew:t,diffcontent:e.content.map(function(t){var o;return{comment:null!=(o=t[u][e.header[n].replace(/審查會通過條文/,"審查會")])?o.replace(/\n/g,"<br>\n"):void 0,diff:diffview({baseTextLines:t[c]||" ",newTextLines:t[n]||t[c],baseTextName:e.header[c],newTextName:e.header[n],tchar:"",tsize:0})[0]}})})},diff:null!=t?null!=(r=t.content)?r.map(function(e){var t,n,o,i,r;return t=e.header,i=function(){var e,i,r,a=[];for(e=0,r=(i=t).length;r>e;++e)n=e,o=i[e],/^現行/.exec(o)&&a.push(n);return a}()[0],r=function(){var e,i,r,a=[];for(e=0,r=(i=t).length;r>e;++e)n=e,o=i[e],"說明"===o&&a.push(n);return a}()[0],import$({header:e.header,content:e.content,name:e.name},{versions:t.filter(function(e,t){return"說明"!==e&&t!==i}),baseIndex:i,commentIndex:r,diffbase:t[i],diffnew:t[0],diffcontent:e.content.map(function(e){var n;return{comment:null!=(n=e[r][t[0].replace(/審查會通過條文/,"審查會")])?n.replace(/\n/g,"<br>\n"):void 0,diff:diffview({baseTextLines:e[i]||" ",newTextLines:e[0]||e[i],baseTextName:null!=(n=t[i])?n:"",newTextName:t[0],tchar:"",tsize:0})[0]}})})}):void 0:void 0})})})})})}).controller({About:["$rootScope","$http"].concat(function(e){return e.activeTab="about"})}).controller({LYMotions:["$rootScope","$scope","$state","LYService"].concat(function(e,t,n,o){return e.activeTab="motions",t.session="8-2",t.$on("data",function(e,n){return t.$apply(function(){return t.data=n})}),t.$watch("$state.params.sitting",function(){var e;return(e=n.params.sitting)?t.$watch("data",function(n){return n?(t.sitting=+e,t.setType("announcement"),t.setStatus(null)):void 0}):(t.sitting=null,void 0)}),t.$on("show",function(e,o,i,r){return t.$apply(function(){return n.transitionTo("motions.sitting",{session:t.session,sitting:o}),t.sitting=o,t.status=r,t.setType(i),t.setStatus(r)})}),import$(t,{allTypes:[{key:"announcement",value:"報告事項"},{key:"discussion",value:"討論事項"},{key:"exmotion",value:"臨時提案"}],setType:function(e){var n,i,r,a,s,l,c,u,d,f,g;for(i=function(){var e,o,i,r=[];for(e=0,i=(o=t.data).length;i>e;++e)n=o[e],n.meeting.sitting===t.sitting&&r.push(n);return r}()[0],r=i[e],a=[{key:"all",value:"全部"}].concat(function(){function e(){var e,t,n,o,i={};for(e=0,n=(t=r).length;n>e;++e)l=t[e],i[null!=(o=l.status)?o:"unknown"]=!0;return i}var n=[];for(s in e())n.push({key:s,value:t.statusName(s)});return n}()),in$(t.status,a.map(function(e){return e.key}))||(t.status=""),c=0,u=r.length;u>c;++c)l=r[c],null==l.avatars&&(d=null!=(f=l.proposer)?f.match(/委員(.*?)(、|等)/):void 0)&&(g=o.resolveParty(d[1]),l.avatars=[{party:g,name:d[1],avatar:""+CryptoJS.MD5("MLY/"+d[1])}]);return t.type=e,t.entries=r,t.allStatus=a,t},setStatus:function(e){return"all"===e&&(e=""),"unknown"===e&&(e=""),t.status=e},statusName:function(e){var t,n;return t={unknown:"未知",other:"其他",passed:"通過",consultation:"協商",retrected:"撤回",unhandled:"未處理",ey:"請行政院研處",prioritized:"逕付二讀",committee:"交委員會",rejected:"退回",accepted:"查照"},null!=(n=t[e])?n:e}}),window.loadMotions(t)})}).controller({LYSittings:["$rootScope","$scope","$http","$state","LYService"].concat(function(e,t,n,o,i){var r,a,s;return e.activeTab="sittings",t.committees=committees,t.lists={},window.YT?t.youtubeReady=!0:t.$on("youtube-ready",function(){return t.youtubeReady=!0}),t.setContext=function(e){return t.context=e,o.params.sitting=null},t.$watch("$state.params.sitting",function(){return"sittings.detail.video"===o.current.name?(console.log("viewing video, do not fetch anything"),void 0):o.params.sitting?(console.log("specified sitting, get context from id of sitting"),t.context=o.params.sitting.replace(/[\d-]/g,"")):(console.log("no specified sitting, use YS as default context if necessary"),t.context?void 0:t.context="YS")}),t.$watch("context",function(e,n){return e||n?(console.log("current context is ",t.context),t.lists.hasOwnProperty(t.context)?t.currentList=t.lists[t.context]:(console.log("using context that we do not have yet. fetch it "),r())):void 0}),r=function(e){var o;return o=committees[t.context]?'{"'+t.context+'"}':null,e||(e=40),t.loadingList=!0,n.get("http://api-beta.ly.g0v.tw/v0/collections/sittings",{params:{q:{ad:8,committee:o},l:e,f:{motions:0}}}).success(function(e){var n;return n=e.entries,t.loadingList=!1,t.lists[t.context]=n,t.currentList=t.lists[t.context]})},t.$watch("currentList",function(){var e,n,i,r,s;if(t.currentList)return e=null!=(n=function(){var e,n,a,s=[];for(e=0,a=(n=t.currentList).length;a>e;++e)i=n[e],r=i.id,r===o.params.sitting&&s.push(i);return s}())?n[0]:void 0,e?t.chosenSitting=e:(s=o.params.sitting,s?(console.log("user specified a id out of fetched list, use the i and keep drop-down list blank"),a(s)):(console.log("user move to a new context, use the lastest sitting by default"),t.chosenSitting=t.currentList[0]))}),t.$watch("chosenSitting",function(e){var n;if(e)return n=t.chosenSitting.id,a(t.chosenSitting.id)}),a=function(e){var i;if("sittings.detail.video"!==o.current.name)return i=/^sittings.detail/.exec(o.current.name)?o.current.name:"sittings.detail",o.transitionTo("sittings.detail",{sitting:e}),t.loadingSitting=!0,n.get("http://api-beta.ly.g0v.tw/v0/collections/sittings",{params:{fo:!0,q:JSON.stringify({id:e})}}).success(function(e){return t.loadingSitting=!1,import$(t,e),t.data=[],t.data.announcement=s(e.motions,"announcement"),t.data.discussion=s(e.motions,"discussion"),t.data.exmotion=s(e.motions,"exmotion"),t.setType("announcement")})},s=function(e,t){var n;return function(){var o,i,r,a=[];for(o=0,r=(i=e).length;r>o;++o)n=i[o],n.motion_class===t&&a.push(n);return a}()},import$(t,{allTypes:[{key:"announcement",value:"報告事項"},{key:"discussion",value:"討論事項"},{key:"exmotion",value:"臨時提案"}],setType:function(e){var n,o,r,a,s,l,c,u,d;for(n=t.data[e],o=[{key:"all",value:"全部"}].concat(function(){function e(){var e,t,o,i,r={};for(e=0,o=(t=n).length;o>e;++e)a=t[e],r[null!=(i=a.status)?i:"unknown"]=!0;return r}var o=[];for(r in e())o.push({key:r,value:t.statusName(r)});return o}()),in$(t.status,o.map(function(e){return e.key}))||(t.status=""),s=0,l=n.length;l>s;++s)a=n[s],null==a.avatars&&(c=null!=(u=a.proposed_by)?u.match(/委員(.*?)(、|等)/):void 0)&&(d=i.resolveParty(c[1]),a.avatars=[{party:d,name:c[1],avatar:""+CryptoJS.MD5("MLY/"+c[1])}]);return t.type=e,t.entries=n,t.allStatus=o,t},setStatus:function(e){return"all"===e&&(e=""),"unknown"===e&&(e=""),t.status=e},statusName:function(e){var t,n;return t={unknown:"未知",other:"其他",passed:"通過",consultation:"協商",retrected:"撤回",unhandled:"未處理",ey:"請行政院研處",prioritized:"逕付二讀",committee:"交委員會",rejected:"退回",accepted:"查照"},null!=(n=t[e])?n:e}}),t.playFrom=function(e){return-1===t.player.getPlayerState()?(t.player.playVideo(),t.player.nextStart=e):t.player.seekTo(e)},t.$watch("$state.current.name + $state.params.sitting",function(){if("sittings.detail.video"===o.current.name){if(t.video=!0,t.loaded===o.params.sitting)return;return t.loaded=o.params.sitting,n.get("http://api-beta.ly.g0v.tw/v0/collections/sittings/"+o.params.sitting+"/videos").success(function(e){var o,i,r,a,s,l,c,u,d,f;for(i=[],r=0,a=e.length;a>r;++r)s=e[r],"whole"===s.firm&&i.push(s);for(o=i,l=(c=o[0]&&o[0].first_frame_timestamp)?dateParse(c):null,u=null!=l?l:dateParse(o[0].time),i=[],r=0,a=e.length;a>r;++r)s=e[r],"whole"!==s.firm&&i.push({offset:dateParse(s.time)-u,mly:replace$.call(s.speaker,/\s*委員/,""),length:s.length});return d=i,f="AIzaSyDT6AVKwNjyWRWtVAdn86Q9I7HXJHG11iI",n.get("https://www.googleapis.com/youtube/v3/videos?id="+o[0].youtube_id+"&key="+f+"&part=snippet,contentDetails,statistics,status").success(function(e){var i,r,a,s,c,u,f,g,p,h,m,v;return i=e.items[0].contentDetails.duration.match(/^PT(\d+H)?(\d+M)?(\d+S)/),r=i[0],a=i[1],s=i[2],c=i[3],u=60*(60*parseInt(a)+parseInt(s))+parseInt(c),f=!1,g=function(e){return t.player=e.target},p=null,h=function(e){var n,o,i,r;e.data!==YT.PlayerState.PLAYING||f?(p&&clearInterval(p),p=null):((n=t.player.nextStart)&&(t.player.seekTo(n),t.player.nextStart=null),p&&clearInterval(p),o=i={},o.sec=t.player.getCurrentTime(),o.start=(new Date).getTime()/1e3,o.rate=t.player.getPlaybackRate(),o.now=0,r=function(){return i.now=(new Date).getTime()/1e3,dowave.setLoc(i.sec+(i.now-i.start)*i.rate)},p=setInterval(function(){return r()},1e4),r())},t.player?t.player.loadVideoById({videoId:o[0].youtube_id}):(m=function(){return new YT.Player("player",{height:"390",width:"640",videoId:o[0].youtube_id,events:{onReady:g,onStateChange:h}})},t.youtubeReady?m():t.$on("youtube-ready",function(){return m()})),t.waveforms=[],v=function(e,n){var o;return o=[],e.forEach(function(e){return o.push(e/255)}),t.waveforms[n]=o,u>e.length&&(e=e.concat(function(){var t,n,o=[];for(t=1,n=u-e.length;n>=t;++t)o.push(t);return o}().map(function(){return 0}))),dowave(e,d,function(e){return t.playFrom(e)},l)},o.forEach(function(e,t){n.get("http://kcwu.csie.org/~kcwu/tmp/ivod/waveform/"+e.wmvid+".json").error(function(){return v([],t)}).success(function(e){return v(e,t)})})})})}return t.loaded=null,t.video=null})})}).controller({LYSitting:["$rootScope","$scope","$http"].concat(function(e,t,n){return n.get("/data/yslog/ly-4004.json").success(function(n){var o,i,r,a,s,l,c=[];for(e.activeTab="sitting",t.json=n,t.meta=n.meta,t.meta.map=[],o={"立法院公報":/^立法院公報　/,"主席":/^主　+席　/,"時間":/^時　+間　/,"地點":/^地　+點　/},n.meta.raw.forEach(function(e){var t,i,r,a;for(t in i=o){if(r=i[t],e.match(r)){e=e.replace(r,""),a=t;break}a=""}return n.meta.map.push({key:a,value:e})}),t.annoucement=[],t.interpellation={answers:[],questions:[],interpellations:[]},t.interp=[],i=function(e,n){var o,i,r,a,s,l,c,u,d,f,g,p,h,m,v,b,y=[];switch(e){case"Announcement":t.Announcement=n;for(o in n){for(i=n[o],r={subject:i.subject,conversation:[]},a=0,l=(s=i.conversation).length;l>a;++a)c=s[a],u=c[0],d=c[1],r.conversation.push({speaker:u,words:d});y.push(t.annoucement.push(r))}return y;case"Interpellation":for(f in s=n.answers)c=s[f],g=c[0],d=c[1],t.interpellation.answers.push({receiver:g,words:d});for(f in s=n.questions)c=s[f],p=c[0],d=c[1],t.interpellation.questions.push({asker:p,words:d});for(a=0,l=(s=n.interpellation).length;l>a;++a)c=s[a],e=c[0],h=c[1],"interp"===e&&t.interp.push(h);for(a=0,l=(s=n.interpellation).length;l>a;++a){if(c=s[a],e=c[0],h=c[1],m=[],"interp"===e||"interpdoc"===e||"exmotion"===e)for(r={questioner:h[0][0],conversation:[]},v=0,b=h.length;b>v;++v)c=h[v],u=c[0],d=c[1],r.conversation.push({speaker:u,words:d});else r={questioner:null,conversation:[{speaker:e,words:h}]};m.push(t.interpellation.interpellations.push(r)),y.push(m)}return y;default:return t.otherwise=n}},r=0,s=(a=n.log).length;s>r;++r)l=a[r],c.push(i.apply(null,l));return c})})}).controller({LYDebates:["$rootScope","$scope","$http","LYService"].concat(function(e,t,n,o){var i;return e.activeTab="debates",t.answer=function(e){switch(!1){case!e:return"已答";default:return"未答"}},t.mly=function(e){var t,n,i,r;return t=e.entity,n=t.mly,n[0]?(i=o.resolveParty(n[0]),r=""+CryptoJS.MD5("MLY/"+n[0]),n[0]+('<img class="avatar small '+i+'" src="http://avatars.io/50a65bb26e293122b0000073/'+r+'?size=small" alt="'+n[0]+'">')):""},i=function(e,t){return e.length>=t?e:i("0"+e,t)},t.source=function(e){var t,n,o,r,a;return t=e.entity,n=t.source,(o=n.link)?(r=(""+o[1]).concat(i(o[2],3)).concat(i(o[3],2)),a="http://lis.ly.gov.tw/lgcgi/lypdftxt?"+r+";".concat(i(o[4],4)).concat(";"+i(o[5],4)),'<a href="'+a+'" target="_blank">質詢公報</a>'):""},t.answers=function(e){var t,n,o;return t=e.entity,n=t.answers,o="",angular.forEach(n,function(e){var t,n,r;e.source.text.match(/口頭答復/)||(t=e.source.link,n=(""+t[1]).concat(i(t[2],3)).concat(i(t[3],2)),r="http://lis.ly.gov.tw/lgcgi/lypdftxt?"+n+";".concat(i(t[4],4)).concat(";"+i(t[5],4)),o+='<div><a href="'+r+'" target="_blank">書面答復</a></div>')}),deepEq$(o,"","===")&&(o+="口頭(見質詢公報)"),o},t.pagingOptions={pageSizes:[10,20,30],pageSize:30,currentPage:1},t.$watch("pagingOptions",function(e,n){deepEq$(e.pageSize,n.pageSize,"===")&&deepEq$(e.currentPage,n.currentPage,"===")||t.getData(e)},!0),t.gridOptions=import$({showFilter:!0,showColumnMenu:!0,showGroupPanel:!0,enableHighlighting:!0,enableRowSelection:!0,enablePaging:!0,showFooter:!0},{rowHeight:80,data:"debates",pagingOptions:t.pagingOptions,i18n:"zh-tw",columnDefs:[{field:"tts_id",displayName:"系統號",width:80},{field:"mly",displayName:"質詢人",width:130,cellTemplate:'<div ng-bind-html-unsafe="mly(row)"></div>'},{field:"source",displayName:"質詢公報",width:80,cellTemplate:'<div ng-bind-html-unsafe="source(row)"></div>'},{field:"answers",displayName:"答復公報",width:100,cellTemplate:'<div ng-bind-html-unsafe="answers(row)"></div>'},{field:"summary",displayName:"案由",visible:!1},{field:"answered",displayName:"答復",width:"50",cellTemplate:'<div ng-bind-html-unsafe="answer(row)"></div>'},{field:"date_asked",cellFilter:"date: mediumDate",width:"100",displayName:"質詢日期"},{field:"category",width:"*",displayName:"類別",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span class="label">{{c}}</span></div>'},{field:"topic",displayName:"主題",width:"*",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span class="label">{{c}}</span></div>'},{field:"keywords",displayName:"關鍵詞",width:"*",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span class="label">{{c}}</span></div>'},{field:"answered_by",displayName:"答復人",width:"80",cellTemplate:'<div ng-repeat="c in row.getProperty(col.field) track by $id($index)"><span >{{c}}</span></div>'},{field:"debate_type",displayName:"質詢性質",width:"*"}]}),t.getData=function(e){var o,i;return o=e.currentPage,i=e.pageSize,n.get("http://api.ly.g0v.tw/v0/collections/debates",{params:{sk:(o-1)*i,l:i}}).success(function(e){var n,o;return n=e.paging,o=e.entries,angular.forEach(o,function(e){e.date_asked=new Date(e.date_asked),e.source=JSON.parse(e.source)}),t.debates=o})},t.getData(t.pagingOptions)})}),angular.module("app.directives",["app.services"]).directive("ngxResize",["$window"].concat(function(e){return function(t){return t.width=e.innerWidth,t.height=e.innerHeight,angular.element(e).bind("resize",function(){return t.$apply(function(){return t.width=e.innerWidth,t.height=e.innerHeight})})}})).directive("ngWaveform",function(){return{link:function(e,t,n){var o,i,r,a,s;o=~~n.width||t.parent().width(),i=~~n.height||t.parent().height(),r=n.innercolor||"#000",a=n.outercolor||"#fff",s=new Waveform({container:t[0],width:o,height:i,innerColor:r,outerColor:a}),e.$watch(n.ngWaveform,function(e){e&&s.update({data:e})})}}}),angular.module("app.filters",[]).filter("interpolate",["version"].concat(function(e){return function(t){return(t+"").replace(/\%VERSION\%/gm,e)}}));var mod;mod={LYService:["$http"].concat(function(e){var t;return t=[],e.get("/data/mly-8.json").success(function(e){return t=e}),{resolveParty:function(e){var n,o;return n=function(){var i,r,a,s,l=[];for(i=0,a=(r=t).length;a>i;++i)s=r[i],n=s.party,o=s.name,o===e&&l.push(n);return l}()[0]}}})},angular.module("app.services",[]).factory(mod),function(){var e={};e.exports={BUILD:"git-cd64d6d"},window.global||(window.global={}),window.global.config=e.exports}.call(this);var maketree;maketree=function(e,t,n){var o,i,r,a,s,l,c,u,d,f;return o={top:0,right:40,bottom:0,left:40},i=960-o.right,r=n-o.top-o.bottom,a=d3.layout.tree().size([r,1]).separation(function(){return 1}),a.sort(function(e,t){return+e.name-+t.name}),s=d3.select(e).append("svg").attr("width",i+o.left+o.right).attr("height",r+o.top+o.bottom).style("margin","1em 0 1em "+-o.left+"px"),l=s.append("g").attr("transform","translate("+o.left+","+o.top+")"),c=a.nodes(t),u=d3.scale.linear().range([0,i]),u.domain([d3.min(c,function(e){return+e.name}),d3.max(c,function(e){return+e.name})]),d=l.selectAll(".link").data(a.links(c)).enter().append("path").attr("class","link").attr("d",d3.svg.diagonal().source(function(e){return{y:u(+e.source.name),x:e.source.x}}).target(function(e){return{y:u(+e.target.name),x:e.target.x}}).projection(function(e){return[e.y,e.x]})),f=l.selectAll(".node").data(c).enter().append("g").attr("class",function(e){return(e.type||"")+" node"}).attr("transform",function(e){return"translate("+u(+e.name)+","+e.x+")"}),f.append("text").attr("x",6).attr("dy",".32em").text(function(e){return e.name}).each(function(e){return e.width=this.getComputedTextLength()+12}),f.insert("rect","text").attr("ry",6).attr("rx",6).attr("y",-10).attr("height",20).attr("width",function(e){return Math.max(32,e.width)}),s},window.billHistory=function(e){var t,n,o,i,r,a,s,l,c,u,d;return t={top:20,right:20,bottom:100,left:40},n=960-t.left-t.right,o=500-t.top-t.bottom,i=d3.scale.ordinal().rangeRoundBands([0,n],.1),r=d3.scale.linear().rangeRound([o,0]),a=e.map(function(e){return e.motions.map(function(e){return e.meeting})}).reduce(curry$(function(e,t){return e.concat(t)})),s=d3.min(a),l=d3.max(a),i.domain(e.map(function(e){return e.motions.map(function(e){return e.meeting})}).reduce(curry$(function(e,t){return e.concat(t)}))),c=d3.svg.axis().scale(i).orient("bottom"),u=function(e,t,n){var o,i,r,a,s,l,c,d,f,g,p,h=[];if(i=function(){var e,i,r,a=[];for(e=0,r=(i=t).length;r>e;++e)o=i[e],o.id===n&&a.push(o);return a}()[0],null!=i){for(r=e,a=0,l=(s=i.motions).length;l>a;++a)c=s[a],d={name:c.meeting,bill:i,"class":"motion",children:[],type:"text"},console.log("push",r,d),r.children.push(d),r=d;for(a=0,l=(s=null!=(f=i.related)?f:[]).length;l>a;++a)g=s[a],h.push(p=u(r,t,g));return h}},d={name:17,"class":"root",children:[]},u(d,e,e[0].id),u(d,e,e[0].id),console.log(d),maketree(".history",d,360)};var stackedBars;window.loadMotions=function(e){return $(function(){return d3.json("/data/8-2.json",function(t){var n;return n=t.map(function(e){var t,n,o,i,r,a,s,l,c,u,d,f;for(t=e.meeting,n=e.announcement,o=e.discussion,i=function(){return d3.nest().key(function(e){var t;return null!=(t=e.status)?t:"unknown"}).rollup(function(e){return e.length})},a=[],s=0,l=o.length;l>s;++s)c=o[s],"exmotion"===c.type&&a.push(c);for(r=a,a=[],s=0,l=o.length;l>s;++s)c=o[s],"exmotion"!==c.type&&a.push(c);return o=a,u=i().map(n),d=i().map(o),f=i().map(r),{sitting:t.sitting,ann:n.length,dis:null!=o?o.length:void 0,ann_status:u,dis_status:d,exm_status:f,announcement:n,discussion:o,exmotion:r,meeting:t}}),e.$root.$broadcast("data",n),stackedBars(n,e)})})},stackedBars=function(e,t){var n,o,i,r,a,s,l,c,u,d,f,g,p,h,m,v,b,y,w,x,C;return n={top:10,right:20,bottom:10,left:60},o=1600,i=600,r=d3.scale.ordinal().rangeRoundBands([0,o],.1),a=d3.scale.linear().rangeRound([i,0]),s=d3.scale.ordinal().range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"]),l=d3.svg.axis().scale(r).orient("bottom"),c=d3.svg.axis().scale(a).orient("left").tickFormat(d3.format(".2s")),u=o+n.left+n.right,d=i+n.top+n.bottom,f="0 0 "+u+" "+d,g=d3.select(".chart").append("svg").attr("width","100%").attr("height","80%").attr("viewBox",f).append("g").attr("transform","translate("+n.left+","+n.top+")"),p=200,h=800,m=d3.select(".legends").append("svg").attr("width","100%").attr("height","80%").attr("viewbox","0 0 "+p+" "+h),v=d3.scale.ordinal().range(["#cccccc","#8a89a6","#7b6888","#6b486b","#ff8c00","#ff1c00","#000000","#23ff8c","#6b486b","#dddddd","#dddddd"]).domain(["retrected","rejected","accepted","committee","prioritized","unhandled","consultation","passed","ey","other","unknown"]),s.domain(["ann","dis"]),e.forEach(function(e){var t,n;return t=0,e.cum=s.domain().map(function(n){return{name:n,y0:t,y1:t+=+e[n]}}),t=0,e.ann_cum=v.domain().map(function(n){var o;return{name:n,y0:t,y1:t+=+(null!=(o=e.ann_status[n])?o:0)}}),t=0,e.dis_cum=v.domain().map(function(n){var o;return{name:n,y0:t,y1:t+=+(null!=(o=e.dis_status[n])?o:0)}}),t=0,e.exm_cum=v.domain().map(function(n){var o;return{name:n,y0:t,y1:t+=+(null!=(o=e.exm_status[n])?o:0)}}),e.total=(n=e.cum)[n.length-1].y1}),r.domain(e.map(function(e){return e.sitting})),a.domain([0,d3.max(e,function(e){return e.total})]),b=function(e,n,o){return t.$root.$broadcast("show",o,e,n)},g.append("g").attr("class","x axis").attr("transform","translate(0,"+i+")").call(l),y=g.selectAll(".sitting").data(e).enter().append("g").attr("class","g").attr("transform",function(e){return"translate("+r(e.sitting)+",0)"}).on("click",function(e){return b("announcement",e.name,x)}),w=g.append("g").selectAll(".desc").data(["報告事項","討論事項","臨時提案"]).enter().append("text").attr("class","desc").attr("transform",function(e,t){return"rotate(-90)translate("+(-i-10)+","+(r.rangeBand()*t/3+r(5))+")"}).attr("dy",".71em").style("text-anchor","end").text(function(e){return e}),x=null,y.selectAll("rect.sep").data(function(e){return[e.sitting]}).enter().append("rect").attr("class","sep").attr("width",1).attr("y",0).attr("x",r.rangeBand()+3).attr("height",i).style("fill","none").style("stroke","black").style("stroke-width",1).style("opacity",.2),y.selectAll("rect.col").data(function(e){return[e.sitting]}).enter().append("rect").attr("class","col").attr("width",r.rangeBand()).attr("y",0).attr("height",i).style("fill","white").style("opacity",0).on("mouseover",function(e){return e!==x?(w.attr("transform",function(t,n){return"rotate(-90)translate("+(-i-20)+","+(r.rangeBand()*n/3+r(e))+")"
}),x=e):void 0}),y.selectAll("rect.ann").data(function(e){return e.ann_cum}).enter().append("rect").attr("class","ann").attr("width",r.rangeBand()/3-2).attr("y",function(e){return a(e.y1)}).attr("height",function(e){return a(e.y0)-a(e.y1)}).style("fill",function(e){return v(e.name)}),y.selectAll("rect.dis").data(function(e){return e.dis_cum}).enter().append("rect").attr("class","dis").attr("width",r.rangeBand()/3-2).attr("x",function(){return r.rangeBand()/3+1}).attr("y",function(e){return a(e.y1)}).attr("height",function(e){return a(e.y0)-a(e.y1)}).style("fill",function(e){return v(e.name)}),y.selectAll("rect.exm").data(function(e){return e.exm_cum}).enter().append("rect").attr("class","exm").attr("width",r.rangeBand()/3-2).attr("x",function(){return 2*(r.rangeBand()/3)+1}).attr("y",function(e){return a(e.y1)}).attr("height",function(e){return a(e.y0)-a(e.y1)}).style("fill",function(e){return v(e.name)}),C=m.selectAll(".legend").data(v.domain().slice().reverse()).enter().append("g").attr("class","legend").attr("transform",function(e,t){return"translate(0,"+20*t+")"}),C.append("rect").attr("x",0).attr("width",18).attr("height",18).style("fill",v),C.append("text").attr("x",20).attr("y",9).attr("dy",".35em").text(function(e){return t.statusName(e)}),g.append("g").attr("class","y axis").call(c).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("議案數")},angular.module("utils",[]).controller("topBtnCtrl",["$scope","$window"].concat(function(e,t){return e.showBtn=!1,angular.element(t).bind("scroll",function(){return console.log(window.pageYOffset),e.showBtn=window.pageYOffset>500?!0:!1,e.$apply()}),e.jumpToTop=function(){return window.scrollTo(0,0)}}));var ctemplate,renderConversation,render,renderYs,slice$=[].slice;ctemplate=require("view/ys/conversation"),renderConversation=function(e){return ctemplate({conversation:e,renderConversation:renderConversation})},render=function(e,t,n){var o,i,r,a,s,l,c=[];switch(t){case"Announcement":return e.append(require("view/ys/announcement")({content:n,renderConversation:renderConversation})),$(".sidebarnav").append($("<ul><li><a href='#announcement'>報告事項</a><li/></ul>").html());case"Interpellation":for(e.append(require("view/ys/interpellation")({content:n,renderConversation:renderConversation})),$(".sidebarnav").append($("<ul><li><a href='#interpellation'>質詢事項</a><li/></ul>").html()),o=0,r=(i=n.interpellation).length;r>o;++o)a=i[o],t=a[0],s=a[1],"interp"===t&&(l=s[0][0],c.push($(".sidebarnav").append($("<ul><li><a scrollto href='#interpellation-"+l+"'>"+l+"</a><li/></ul>").html())));return c;default:return e.append(renderConversation({conversation:[t,n]}))}},renderYs=function(e,t){var n,o,i,r,a,s;for(n=t.meta,o=t.log,e.append(require("view/ys/meta")(n)),i=0,r=o.length;r>i;++i)a=o[i],render.apply(null,[e].concat(slice$.call(a)));return $('[data-spy="affix"]').affix(),s=function(){return $('[data-spy="scroll"]').each(function(){return $(this).scrollspy("refresh")})},$(".collapse").on("hidden",s),s()},window.init=function(){return $.get("/data/yslog/ly-4004.json",{type:"json"},function(e){return renderYs($(".content"),e)})};