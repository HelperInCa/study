(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(3),u=n.n(r),o=(n(16),n(7)),c=n(4),i=n(5),l=n(8),h=n(6),d=n(1),m=n(9),g=(n(17),function(e){var t=e.startGame;return s.a.createElement("div",null,s.a.createElement("button",{onClick:t},"Start Game"))}),f=function(e){var t=e.words.map(function(e){return s.a.createElement("li",{key:e},e)});return s.a.createElement("div",null,s.a.createElement("ul",null,t))},v=function(e){var t=e.guesses.map(function(e){return s.a.createElement("li",{key:e.guess},s.a.createElement("span",null,e.guess),": ",s.a.createElement("span",null,e.result))});return s.a.createElement("div",null,s.a.createElement("ul",null,t))},b=function(e){var t=e.submitGuess,n=e.updateGuess,a=e.disabled,r=e.guess;return s.a.createElement("div",null,s.a.createElement("input",{onChange:function(e){n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(r)},disabled:a,value:r}),s.a.createElement("button",{disabled:a,onClick:function(e){return t(r)}},"Guess"))},E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={gameId:null,guess:"",guesses:[],words:[]},n.startGame=n.startGame.bind(Object(d.a)(n)),n.submitGuess=n.submitGuess.bind(Object(d.a)(n)),n.updateGuess=n.updateGuess.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateGuess",value:function(e){this.setState({guess:e})}},{key:"startGame",value:function(){var e=this;fetch("/game",{method:"POST"}).catch(function(e){return Promise.reject("you should have error handling")}).then(function(e){return e.ok?e.json():Promise.reject("you should have MORE error handling")}).then(function(t){e.setState({gameId:t.id})}).catch(function(e){return"do something real with ".concat(e)})}},{key:"submitGuess",value:function(e){var t=this;e=e||this.state.guess,function(e){var t=e.id,n=e.guess;return fetch("/game/".concat(t,"/").concat(n)).catch(function(e){return Promise.reject("you should have error handling")}).then(function(e){return e.ok?e.json():Promise.reject("you should have MORE error handling")})}({id:this.state.gameId,guess:e}).then(function(n){t.setState({guesses:[].concat(Object(o.a)(t.state.guesses),[{guess:e,result:n.result}])})}).catch(function(e){return"do something real with ".concat(e)})}},{key:"componentDidMount",value:function(){var e=this;fetch("/words").catch(function(e){return Promise.reject("you should have error handling")}).then(function(e){return e.ok?e.json():Promise.reject("you should have MORE error handling")}).then(function(t){e.setState({words:t})}).catch(function(e){return"do something real with ".concat(e)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,{startGame:this.startGame}),s.a.createElement(f,{words:this.state.words}),s.a.createElement(v,{guesses:this.state.guesses}),s.a.createElement(b,{disabled:!this.state.gameId,submitGuess:this.submitGuess,updateGuess:this.updateGuess,guess:this.state.guess}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.1bb590d5.chunk.js.map