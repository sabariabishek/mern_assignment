(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},22:function(e,t,a){},23:function(e){e.exports=[{id:0,name:"Firsty",universe:"Firsty Land",imgSrc:"https://image.shutterstock.com/image-illustration/beautiful-anime-girl-long-hair-260nw-1267307512.jpg",isClicked:!1},{id:1,name:"Sally",universe:"Sally Land",imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qDG7gCoGTu2zhe83WyX84e1WpfhGv7AK1PDneiiCdAOBeMvk",isClicked:!1},{id:2,name:"Winston",universe:"Winston Land",imgSrc:"http://s1.1zoom.me/big3/986/Vocaloid_Feathers_ame_no_438390.jpg",isClicked:!1},{id:3,name:"Hally",universe:"Hally Land",imgSrc:"https://i.ytimg.com/vi/lp4jPRi_nRc/maxresdefault.jpg",isClicked:!1},{id:4,name:"Tally",universe:"Tally Land",imgSrc:"https://cdn.pastemagazine.com/www/articles/Cowboy%20Bebop%20Anime%2050%20Main.jpeg",isClicked:!1},{id:5,name:"Dally",universe:"Dally Land",imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhujQNUjjZaMJqZkMimJ1jJK5oLTB1_9d3ZAnCr5ydUPcHIXR4w",isClicked:!1},{id:6,name:"Rally Mally",universe:"Rally Land",imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVBl_CpXVnCwnrraqHS5WXiQpMAv04GkhH0m2NEpDckNVI-Zm",isClicked:!1},{id:7,name:"Mally Rally",universe:"Rally Land",imgSrc:"https://res.cloudinary.com/sfp/image/upload/q_60/cste/4a160ef2-e516-43ec-8b7f-97816f00c234.jpg",isClicked:!1},{id:8,name:"SecondLasty",universe:"Lasty Land",imgSrc:"https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/01/One-Punch-Man-1.jpg",isClicked:!1},{id:9,name:"Lasty",universe:"Lasty Land",imgSrc:"https://darkartangel.files.wordpress.com/2015/01/8589130457234-anime-boy-wallpaper-hd.jpg",isClicked:!1}]},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){e.exports=a(79)},45:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),o=(a(44),a(45),a(82)),i=a(81),s=a(80);a(15);var m=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(s.a,{to:"/"},r.a.createElement("strong",null,"Home")))};var u=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(s.a,{to:"/giphy"},r.a.createElement("strong",null,"Giphy")))};var d=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(s.a,{to:"/match"},r.a.createElement("strong",null,"Match")))};var h=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(s.a,{to:"/books"},r.a.createElement("strong",null,"Books")))};var f=function(){return r.a.createElement("li",{className:"nav-item menuLink"},r.a.createElement(s.a,{to:"/contact"},r.a.createElement("strong",null,"Contact")))};var p=function(){return r.a.createElement("ul",{className:"nav App-navbar"},r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(d,null),r.a.createElement(f,null))},v=a(17),g=a(6),E=a(7),b=a(9),k=a(8),y=a(10),N=a(13),w=a.n(N),C={searchGiphy:function(e){return w.a.get("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=dc6zaTOxFJmzC&limit=10")},searchBooks:function(e){return w.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&orderBy=newest")},getBooks:function(){return w.a.get("/api/books")},getBook:function(e){return w.a.get("/api/books/"+e)},deleteBook:function(e){return w.a.delete("/api/books/"+e)},saveBook:function(e,t,a){return w.a.post("/api/books/"+{title:e,author:t,link:a})}};a(32);var S=function(e){return r.a.createElement("form",{className:"giphySeachInputBar"},r.a.createElement("div",{className:"formInput"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a Gif",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary btn-lg mt-3"},"Search")))};var j=function(e){return r.a.createElement("ul",{className:"matchBox"},e.results.map(function(e){return r.a.createElement("li",{className:"resultsBoxes",key:e.id},r.a.createElement("img",{className:"clickyBoxes",alt:e.title,src:e.images.original.url}))}))},O=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",results:[]},a.doTheSearch=function(e){C.searchGiphy(e).then(function(e){return a.setState({results:e.data.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(v.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.doTheSearch(a.state.search)},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.doTheSearch("hansolo")}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(j,{results:this.state.results}))}}]),t}(n.Component);var B=function(){return r.a.createElement("div",{className:"centeredContent"},r.a.createElement("h1",null,"This page uses Giphy API"))};var I=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"siteTitle"},"Giphy"),r.a.createElement(p,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement(B,null),r.a.createElement(O,null)))},M=a(36),x=a.n(M),G=(a(22),function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t={src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",ref:function(t){e.videoRef=t},onClick:function(){e.videoRef&&e.videoRef.paused?e.videoRef.play():e.videoRef&&e.videoRef.pause()},title:"click to play/pause"};return r.a.createElement("div",{style:{objectFit:"cover",width:"100%",height:"100%",position:"relative",zIndex:"0"}},r.a.createElement(x.a,{videoOptions:t}))}}]),t}(n.Component));var L=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",{className:"videoCaption"},"CLICK ME!"),r.a.createElement(G,null))};var A=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"siteTitle"},"Home"),r.a.createElement(p,null)),r.a.createElement("div",{className:"homevideobody"},r.a.createElement(L,null)))},T=a(3),F=a(23);a(33);var _=function(e){return r.a.createElement("ul",{className:"gameBox"},e.results.map(function(t){return r.a.createElement("li",{className:"clickyBoxes",key:t.id},r.a.createElement("img",{className:"clickyBoxes",id:t.id,alt:t.name,src:t.imgSrc,onClick:function(){e.getId(t),e.updateCounterClick()}}))}))};a(66);var R=function(e){return r.a.createElement("ul",{className:"gameBar"},r.a.createElement("li",{className:"gameBars"},"Matches: ",e.countstate),r.a.createElement("li",{className:"gameBars"},"GameOver?: ",e.gamestate))};var q=function(e){return r.a.createElement("form",{className:"gameOver"},r.a.createElement("h1",null,"Game Over!"),r.a.createElement("p",null,"You got: ",e.countstate),r.a.createElement("p",null,"Game State:  ",e.gamestate),r.a.createElement("button",{type:"submit",className:"gameOverButton",onClick:function(){e.newGame()}},"New Game?"))},D=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).getId=function(e){!0===e.isClicked?a.setState({Gameover:!0}):a.changeAndShuffle(e)},a.updateCounterClick=function(){a.setState({Count:a.state.Count+1})},a.shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.newGame=function(e){a.setState({Masterlist:F,Count:0,Gameover:!1})},a.changeAndShuffle=function(e){var t=e.id,n=a.state.Masterlist;n[t].isClicked=!0,a.shuffle(n),a.setState({Masterlist:n})},a.state={Masterlist:F,Count:0,Gameover:!1},a.getId=a.getId.bind(Object(T.a)(Object(T.a)(a))),a.updateCounterClick=a.updateCounterClick.bind(Object(T.a)(Object(T.a)(a))),a.newGame=a.newGame.bind(Object(T.a)(Object(T.a)(a))),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return!1===this.state.Gameover?r.a.createElement("div",{className:"wrapper"},r.a.createElement(R,{countstate:this.state.Count,gamestate:this.state.Gameover}),r.a.createElement(_,{results:this.state.Masterlist,updateCounterClick:this.updateCounterClick,changeAndShuffle:this.changeAndShuffle,getId:this.getId})):r.a.createElement(q,{countstate:this.state.Count,gamestate:this.state.Gameover,newGame:this.newGame})}}]),t}(n.Component);var P=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"siteTitle"},"Match"),r.a.createElement(p,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement(D,null)))};a(67);var W=function(){return r.a.createElement("span",{className:"contactFormSpacer"},r.a.createElement("form",{class:"mbr-form shadow-lg alert-dark",id:"contact-form",action:"https://formspree.io/thegreenmajority@gmail.com",method:"post","data-form-title":"Contact Form"},r.a.createElement("input",{type:"hidden","data-form-email":"true",className:"hideMe"}),r.a.createElement("div",{class:"row row-sm-offset"},r.a.createElement("div",{class:"col-sm-6 multi-horizontal","data-for":"name"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{class:"form-control-label mbr-fonts-style display-7",for:"name-form1-2w"},"Name"),r.a.createElement("input",{type:"text",class:"form-control",name:"name","data-form-field":"Name",placeholder:"Your name (required)",required:"required",id:"name-form1-2w"}))),r.a.createElement("input",{type:"hidden",name:"_subject",value:"Portfolio Contact Email Submission",className:"hideMe"}),r.a.createElement("input",{type:"hidden",name:"_format",value:"plain",className:"hideMe"}),r.a.createElement("input",{type:"text",name:"_gotcha",className:"hideMe"}),r.a.createElement("div",{class:"col-sm-6 multi-horizontal","data-for":"email"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{class:"form-control-label mbr-fonts-style display-7",for:"email-form1-2w"},"Email"),r.a.createElement("input",{type:"email",class:"form-control",name:"email","data-form-field":"Email",required:"required",placeholder:"Your email (required)",id:"email-form1-2w"})))),r.a.createElement("div",{class:"form-group","data-for":"message"},r.a.createElement("label",{class:"form-control-label mbr-fonts-style display-7",for:"message-form1-2w"},"Message"),r.a.createElement("textarea",{type:"text",class:"form-control",name:"message",placeholder:"I can't wait to hear from you!",rows:"7","data-form-field":"Message",id:"message-form1-2w"})),r.a.createElement("div",{class:"input-group-btn p-2 pt-3 mx-5"},r.a.createElement("button",{href:"",type:"submit",class:"btn btn-secondary btn-form btn-block display-4"},"Submit"))))};var z=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"siteTitle"},"Contact"),r.a.createElement(p,null)),r.a.createElement("div",{className:"contactBody"},r.a.createElement("div",{className:"contactFormSpacer"},r.a.createElement(W,null))))};a(34);var H=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"formInput"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for Books",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))},J=a(18),V=a(19);a(74);var X=function(e){var t=e.volumeinfo.title;console.log(t);var a=[e.volumeinfo.authors];console.log(a);var n=[e.volumeinfo.previewLink];return console.log(n),r.a.createElement("span",{className:"save-btn",role:"button",tabIndex:"0"},r.a.createElement("button",{className:"saveLink",onClick:function(){e.savebook(t,a,n)}},r.a.createElement(J.a,{icon:V.a})," "))};var Z=function(e){return r.a.createElement("ul",{className:"resultsBoxes"},e.results.map(function(t){return r.a.createElement("li",{className:"eachResult p-5",key:t.id},r.a.createElement("p",{className:"bookTitle"},r.a.createElement("a",{href:t.volumeInfo.previewLink,className:"bookLink"},t.volumeInfo.title)),r.a.createElement("p",{className:"bookAuthors"},r.a.createElement("strong",null,"Authors: "),t.volumeInfo.authors),r.a.createElement("p",{className:"bookDesc"},r.a.createElement("strong",null,"Brief: "),t.volumeInfo.description),r.a.createElement("p",{className:"bookCat"},r.a.createElement("strong",null,"Categories: "),t.volumeInfo.categories," ",r.a.createElement("strong",null,"Country: ")," ",t.saleInfo.country," ",r.a.createElement("strong",null,"Purchase Link: ")," ",t.saleInfo.buyLink),r.a.createElement(X,{savebook:function(){return e.savebook(t)},volumeinfo:t.volumeInfo}))}))},K=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).doTheSearch=function(e){console.log("I'm the Search: "+e),C.searchBooks(e).then(function(e){return a.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(v.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.doTheSearch(a.state.search)},a.saveBook=function(e,t,a){C.saveBook(e,t,a).catch(function(e){return console.log(e)})},a.state={search:"",results:[]},a.handleInputChange=a.handleInputChange.bind(Object(T.a)(Object(T.a)(a))),a.handleFormSubmit=a.handleFormSubmit.bind(Object(T.a)(Object(T.a)(a))),a.doTheSearch=a.doTheSearch.bind(Object(T.a)(Object(T.a)(a))),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.doTheSearch("harrypotter")}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(H,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(Z,{results:this.state.results,savebook:this.saveBook}))}}]),t}(r.a.Component);a(75);var U=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn",onClick:e.onClick},e,{role:"button",tabIndex:"0"}),r.a.createElement(J.a,{icon:V.b}))};function Y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}a(76);function Q(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function $(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var ee=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).loadBooks=function(){C.getBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.delBook=function(){C.deleteBook().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.state={books:[]},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement("span",{className:"savedBooksBox"},r.a.createElement(Y,{fluid:!0},r.a.createElement("span",null,r.a.createElement("h2",null,"My Saved Books")),this.state.books.length?r.a.createElement(Q,null,this.state.books.map(function(t){return r.a.createElement($,{key:t._id},r.a.createElement("a",{href:"/books/"+t._id},r.a.createElement("strong",null,t.title," by ",t.author)),r.a.createElement(U,{onClick:function(){return e.delBook(t._id)}}))})):r.a.createElement("h3",null,"No Results to Display")))}}]),t}(r.a.Component),te=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).handlePageToggle=function(){console.log(a.state.viewSaved),a.setState(function(e){return{viewSaved:!e.viewSaved}})},a.state={viewSaved:!1},a.handlePageToggle=a.handlePageToggle.bind(Object(T.a)(Object(T.a)(a))),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state.viewSaved?"Search For More Books":"Go To My Library";return r.a.createElement("div",null,r.a.createElement("span",{className:"bookTitleBox"},r.a.createElement("button",{type:"button",onClick:this.handlePageToggle,className:"btn btn-danger btn-lrg m-3"},e)),this.state.viewSaved?r.a.createElement("div",null,r.a.createElement(ee,null)):r.a.createElement("div",null,r.a.createElement(K,null)))}}]),t}(r.a.Component);var ae=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"siteTitle"},"Books"),r.a.createElement(p,null)),r.a.createElement("div",{className:"App-body"},r.a.createElement(te,null)))};var ne=function(){return r.a.createElement("div",{className:"App-footer"},"This is my footer")};a(77);var re=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{exact:!0,path:"/",component:A}),r.a.createElement(i.a,{exact:!0,path:"/giphy",component:I}),r.a.createElement(i.a,{exact:!0,path:"/match",component:P}),r.a.createElement(i.a,{exact:!0,path:"/books",component:ae}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:z}),r.a.createElement(ne,null)))},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(re,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");le?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ce(e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.507aa40e.chunk.js.map