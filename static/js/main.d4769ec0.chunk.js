(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=(n(15),n(7)),s=n(4),l=n(5),u=n(2),m=n(9),d=n(8),h=(n(16),n(17),n(18),n(6));var p=function(e){var t=e.items.map((function(e){return r.a.createElement("div",{className:"list",key:"item.key"},r.a.createElement("p",null,e.text))}));return r.a.createElement("div",null,r.a.createElement(h.a,{duration:300,easing:"ease-in-out"},t))},v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(c.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"todo-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Tasks",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(p,{items:this.state.items}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d4769ec0.chunk.js.map