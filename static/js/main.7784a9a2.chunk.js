(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{key:1,id:1,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/msdgowi-ec001-1551470524.jpg?crop=1.00xw:0.939xh;0,0&resize=980:*"},{key:2,id:2,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/m8dwesi-ec014-1551472348.jpg?crop=1xw:0.8915120854412592xh;center,top&resize=980:*"},{key:3,id:3,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mbdpsyc-ec018-1551472710.jpg?crop=1.00xw:0.861xh;0,0.0945xh&resize=980:*"},{key:4,id:4,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-74259006-1551473057.jpg?crop=1.00xw:0.816xh;0,0.0924xh&resize=980:*"},{key:5,id:5,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcdsoli-ec003-1551473007.jpg?crop=1xw:0.9525745257452575xh;center,top&resize=980:*"},{key:6,id:6,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/htra080-vv107-1551471737.jpg?crop=1.00xw:0.928xh;0,0.0347xh&resize=980:*"},{key:7,id:7,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcdmeme-ec035-1551471219.jpg?crop=1.00xw:0.892xh;0,0.0694xh&resize=980:*"},{key:8,id:8,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mbdroho-ec012-1551470908.jpg?crop=0.965xw:0.849xh;0.0354xw,0&resize=980:*"},{key:9,id:9,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/msdsoof-fe002-1551466940.jpg?crop=1xw:1xh;center,top&resize=768:*"},{key:10,id:10,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mbdapar-ec016-1551467428.jpg?crop=1.00xw:0.877xh;0,0.0847xh&resize=980:*"},{key:11,id:11,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/m8dtwan-ec002-1551469093.jpg?crop=1.00xw:0.930xh;0,0.0580xh&resize=980:*"},{key:12,id:12,image:"https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.thr.com%2Fsites%2Fdefault%2Ffiles%2F2012%2F04%2Fto_kill_a_mocking_bird_gregory_peck.jpg&f=1"}]},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),o=t(3),c=t.n(o),r=(t(15),t(4)),n=t(5),m=t(7),p=t(6),h=t(8);t(16);var l=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},g=t(1);t(17);var d=function(e){return i.a.createElement("img",{alt:e.image,src:e.image,onClick:e.verifyOneClick})};t(18);var u=function(e){return i.a.createElement("div",{className:"score"},e.children)},w=function(e){function a(){var e,t;Object(r.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={pics:g,clickedPics:[],score:0,highScore:0},t.shuffleArray=function(e){e.preventDefault();var a=t.pics.id,s=t.state.clickedPicsId;if(s.includes(a))t.setState({clickedPicsId:[],score:0,status:"Game Over! You lost. Click to play again!"});else{if(s.push(a),12===s.length)return t.setState({score:12,status:"You Won! Great Job, Smartie! Click to play again!",clickedPuppyIds:[]}),void console.log("You Win");t.setState({pics:g,clickedPicsId:s,score:s.length,status:" "});for(var i=g.length-1;i>0;i--){var o=Math.floor(Math.random()*(i+1)),c=[g[o],g[i]];g[i]=c[0],g[o]=c[1]}}},t}return Object(h.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(l,null,i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Clicky Game!!"),i.a.createElement("h4",{className:"header"},"Click on the images to gain points, but be careful!"),i.a.createElement("h4",{className:"header3"}," Clicking on the same image twice ends the game!")),i.a.createElement(u,{total:this.state.score,goal:12,status:this.state.status}),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"container"},this.state.pics.map(function(a){return i.a.createElement(d,{key:a.key,id:a.id,image:a.image,shuffleArray:e.shuffleArray})}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);c.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.7784a9a2.chunk.js.map