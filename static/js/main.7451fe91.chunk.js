(this["webpackJsonpmled-react"]=this["webpackJsonpmled-react"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),l=n(9),r=n.n(l),u=(n(18),n(1)),o=n(2),c=n(4),s=n(3),v=(n(19),n(10)),d={multiviews:[{layoutId:"",layoutType:"",title:"",resourceId:""}],selectedMultiview:"1"},y=Object(v.a)((function(e,t){var n;if(void 0===e)return d;if("GetMultiviewList"===t.type){var i=t.multiviews.concat();n=Object.assign({},e,{multiviews:i,selectedMultiview:e.selectedMultiview})}else if("SelectedMultiviewChanged"===t.type){var a=t.multiviews.concat();n=Object.assign({},e,{multiviews:a,selectedMultiview:t.selectedMultiview})}return n}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=n(6),p=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Header"))}}]),n}(i.Component),w=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p1",null,"Navigation"))}}]),n}(i.Component),O=n(7),f=n(12),b=n.n(f),h=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={multiviews:[{layoutId:"",layoutType:"",title:"",resourceId:""}],selectedMultiview:b.a.string},e.listener=function(){var t=y.getState();e.setState(Object(O.a)(Object(O.a)({},e.state),{},{newState:t}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){y.subscribe(this.listener),this.listener()}},{key:"render",value:function(){return a.a.createElement("div",null)}}]),n}(i.Component),j=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).getMultiviewList=function(){var e=JSON.stringify(m.response);console.log({json:e}),y.dispatch({type:"GetMultiviewList",multiviews:m.response})},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.getMultiviewList()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(w,null),a.a.createElement(p,null),a.a.createElement(h,null))}}]),n}(i.Component),_=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement(j,null)}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"version":"0.1","id":"get.multiview.list","seqId":"xxxx.get.multiview.list","response":[{"layoutId":"QUICK_MULTIVIEW","layoutType":"QuickMultiview","title":"Quick Multiview","layoutResourceId":""},{"layoutId":"layout_1","layoutType":"MakeMyOwn","title":"make my own 1","layoutResourceId":"mled_i_icon_user_thumb_01"},{"layoutId":"layout_2","layoutType":"MakeMyOwn","title":"make my own 2","layoutResourceId":"mled_i_icon_user_thumb_02"},{"layoutId":"GAME_SPECIAL","layoutType":"GameSpecial","title":"Game Special","layoutResourceId":""}]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.7451fe91.chunk.js.map