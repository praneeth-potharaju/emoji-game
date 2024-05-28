(this["webpackJsonpemoji-game"]=this["webpackJsonpemoji-game"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(8),a=n.n(c),o=n(9),r=n(2),m=n(4),j=n(3),l=n(5),h=(n(14),n(15),n(0)),d=function(e){function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=Object(j.a)(this,t,[].concat(i))).renderScores=function(){var t=e.props,n=t.currentScore,i=t.topScore;return t.isGameEnd?null:Object(h.jsxs)("div",{className:"Score-container",children:[Object(h.jsxs)("p",{className:"score-label",children:["Score : ",Object(h.jsx)("span",{className:"score-value",children:n})]}),Object(h.jsxs)("p",{className:"score-label",children:["Total Score : ",Object(h.jsx)("span",{className:"score-value",children:i})]})]})},e}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"navbar-container",children:[Object(h.jsxs)("div",{className:"logo-title-container",children:[Object(h.jsx)("img",{className:"logo-image",src:"https://assets.ccbp.in/frontend/react-js/game-logo-img.png",alt:"logo"}),Object(h.jsx)("p",{className:"logo-title",children:"Emoji Game"})]}),this.renderScores()]})}}])}(i.Component),u=d,g=(n(17),function(e){function t(){return Object(r.a)(this,t),Object(j.a)(this,t,arguments)}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.emoji,n=e.onClickEmoji,i=t.emojiName,s=t.emojiUrl,c=t.id;return Object(h.jsx)("li",{className:"emoji-item",onClick:function(){n(c)},children:Object(h.jsx)("img",{src:s,alt:i,className:"emoji-image"},c)})}}])}(i.Component)),p=g,f=(n(18),function(e){function t(){return Object(r.a)(this,t),Object(j.a)(this,t,arguments)}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isWon,n=e.onClickPlayAgain,i=e.score,s=t?"https://assets.ccbp.in/frontend/react-js/won-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png",c=t?"happyFace":"sadFace",a=t?"You Won":"You Lose",o=t?"Best Score":"Score";return Object(h.jsxs)("div",{className:"winOrLose-container",children:[Object(h.jsxs)("div",{className:"winOrLose-text-container",children:[Object(h.jsx)("h1",{className:"winOrLose-status",children:a}),Object(h.jsx)("p",{className:"winOrLose-label",children:o}),Object(h.jsxs)("p",{className:"winOrLose-current-score",children:[i,"/12"]}),Object(h.jsx)("button",{className:"winOrLose-button",type:"button",onClick:n,children:"Play Again"})]}),Object(h.jsx)("div",{className:"winOrLose-image-container",children:Object(h.jsx)("img",{className:"win-or-lose-image",src:s,alt:c})})]})}}])}(i.Component)),b=f,O=function(e){function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=Object(j.a)(this,t,[].concat(i))).state={clickedEmojis:[],isGameEnd:!1,topScore:0},e.getShuffledEmojisList=function(){return e.props.emojisList.sort((function(){return Math.random()-.5}))},e.onClickEmoji=function(t){var n=e.props.emojisList,i=e.state.clickedEmojis;i.includes(t)?e.finishGameAndSetTopScore(i.length):(n.length-1===i.length&&e.finishGameAndSetTopScore(n.length),e.setState((function(e){return{clickedEmojis:[].concat(Object(o.a)(e.clickedEmojis),[t])}})))},e.finishGameAndSetTopScore=function(t){t>e.state.topScore&&e.setState({topScore:t}),e.setIsGameEnd(!0)},e.restartGame=function(){e.setState({clickedEmojis:[]}),e.setIsGameEnd(!1)},e.setIsGameEnd=function(t){e.setState({isGameEnd:t})},e.renderWinOrLose=function(){var t=e.props.emojisList,n=e.state.clickedEmojis,i=t.length===n.length;return Object(h.jsx)(b,{isWon:i,onClickPlayAgain:e.restartGame,score:n.length})},e.renderEmojiList=function(){var t=e.getShuffledEmojisList();return Object(h.jsx)("ul",{className:"emoji-list",children:t.map((function(t){return Object(h.jsx)(p,{emoji:t,onClickEmoji:e.onClickEmoji},t.id)}))})},e}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isGameEnd,n=e.clickedEmojis,i=e.topScore,s=n.length;return Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)(u,{currentScore:s,topScore:i,isGameEnd:t}),Object(h.jsx)("div",{className:"emoji-body-container",children:t?this.renderWinOrLose():this.renderEmojiList()})]})}}])}(i.Component),w=O,N=(n(19),[{id:0,emojiName:"Face with stuck out tongue",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png"},{id:1,emojiName:"Face with head bandage",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png"},{id:2,emojiName:"Face with hugs",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png"},{id:3,emojiName:"Face with laughing",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png"},{id:4,emojiName:"Laughing face with hand in front of mouth",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png"},{id:5,emojiName:"Face with mask",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png"},{id:6,emojiName:"Face with silence",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png"},{id:7,emojiName:"Face with stuck out tongue and winked eye",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png"},{id:8,emojiName:"Grinning face with sweat",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png"},{id:9,emojiName:"Smiling face with heart eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png"},{id:10,emojiName:"Grinning face",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-img.png"},{id:11,emojiName:"Smiling face with star eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png"}]),S=function(){return Object(h.jsx)(w,{emojisList:N})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.07e625c6.chunk.js.map