(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{13:function(e,a,t){e.exports=t(24)},18:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),l=t.n(o),c=(t(18),t(2)),u=t(3),s=t(5),i=t(4),p=t(7),m=t.n(p);t(20);m.a.initializeApp({apiKey:"AIzaSyBrKuDBFAcon5GaFLkuOjEVkuKEDskVZ90",authDomain:"personal-journal-c0bd8.firebaseapp.com",databaseURL:"https://personal-journal-c0bd8.firebaseio.com",projectId:"personal-journal-c0bd8",storageBucket:"personal-journal-c0bd8.appspot.com",messagingSenderId:"299999700647",appId:"1:299999700647:web:d1e2e927ef461924025d82"});var h=m.a,d=(t(23),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"footerParagraph"},"Created by Anthony Galea at Juno College"))}}]),t}(n.Component)),f=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({userInput:a.target.value})},e.handleClick=function(a){a.preventDefault(),h.database().ref().push(e.state.userInput),e.setState({userInput:""})},e.handleRemove=function(e){console.log(e),h.database().ref().child(e).remove()},e.state={journals:[],userInput:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(a){console.log(a.val());var t=[],n=a.val();for(var r in n)console.log(r,n[r]),t.push({key:r,journalEntry:n[r]});e.setState({journals:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Personal Journal"),r.a.createElement("form",{action:"submit",className:"wrapper"},r.a.createElement("div",{className:"journalArea"},r.a.createElement("textarea",{id:"write",name:"write",rows:"20",cols:"50",placeholder:"What's on your mind?",onChange:this.handleChange,value:this.state.userInput}),r.a.createElement("button",{onClick:this.handleClick},"Log your journal"))),r.a.createElement("ul",{className:"wrapper"},this.state.journals.map((function(a){return r.a.createElement("li",{key:a.key},r.a.createElement("p",null,a.journalEntry),r.a.createElement("button",{onClick:function(){return e.handleRemove(a.key)}},"Delete"))}))),r.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.1e0620af.chunk.js.map