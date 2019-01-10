function ready(e){document.addEventListener("DOMContentLoaded",e)}function addEvent(e,t,n){null!=e&&void 0!==e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)}function compareRandom(e,t){return Math.random()-.5}function getDocument(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=(new DOMParser).parseFromString(this.responseText,"text/html");t(e)}},n.send(null)}function smoothScrollToAnchor(){for(var e=document.querySelectorAll('[href^="#"]'),n=0;n<e.length;n++){var r=e[n].href.replace(/[^#]*(.*)/,"$1"),o=!1;if("#"!==r)o=document.querySelector(r);o&&e[n].addEventListener("click",function(e){document.querySelector(".layout__header").offsetHeight;e.preventDefault();var i=window.pageYOffset,a=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(a).getBoundingClientRect().top-50,start=null,requestAnimationFrame(function e(n){null===start&&(start=n);var r=n-start,o=t<0?Math.max(i-r/.3,i+t):Math.min(i+r/.3,i+t);window.scrollTo(0,o);o!=i+t?requestAnimationFrame(e):location.hash=a})},!1)}}!function(e,t,n){n=n||window;var r=!1;n.addEventListener(e,function(){r||(r=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(t)),r=!1}))})}("resize","optimizedResize"),readyjs.push(smoothScrollToAnchor);var breakpoint={small:767,medium:992,large:1200};function respondTo(e,t,n,r){if(e>=window.innerWidth){var o=!0;n&&requestAnimationFrame(t)}else o=!1;r&&window.addEventListener("optimizedResize",function(){if(!o&&(o=!0,e>=window.innerWidth))return setTimeout(function(){requestAnimationFrame(t)},100),!0;e<=window.innerWidth&&(o=!1)})}function respondFrom(e,t,n,r){if(e<=window.innerWidth){var o=!0;n&&requestAnimationFrame(t)}else o=!1;r&&window.addEventListener("optimizedResize",function(){if(!o&&(o=!0,e<=window.innerWidth))return setTimeout(function(){requestAnimationFrame(t)},100),!0;e>=window.innerWidth&&(o=!1)})}var activeDrawsList=[],showFrameRate=!1;function animate(e){var s="number"==typeof(e="object"==typeof e?e:{}).duration?e.duration:1e3,t="number"==typeof e.delay?e.delay:0,n="number"==typeof e.from?e.from:1,r="number"==typeof e.to?e.to:100,l="function"==typeof e.timing?e.timing:linear,u="function"==typeof e.draw?e.draw:function(e){console.log(100*e)},c="function"==typeof e.before?e.before:function(){},d="function"==typeof e.after?e.after:function(){},m=n/100,f=r/100;setTimeout(function(){for(var i=performance.now(),a=i,e=activeDrawsList.length-1;0<=e;e--)if(activeDrawsList[e]===u)return!1;activeDrawsList.push(u);requestAnimationFrame(function e(t){c&&(c(),c=!1);var n=(t-i)/s;if(1<n&&(n=1),m<f)var r=(n+=m)<f;else r=f<(n=-(n-m));var o=l(n);u(o),r?(requestAnimationFrame(e),showFrameRate&&(console.log(frameRate(a,t),Math.round(100*n)),a=t)):(activeDrawsList.splice(activeDrawsList.indexOf(u),1),d&&d())})},t)}function frameRate(e,t){return Math.round(1e3/(t-e))}function zone(e,t,n,r){if(n*=100,r*=100,(t*=100)<=(e*=100)&&e<=n){var o=(e-t)/(n-t);return r&&r(o),o}return e<=t?0:n<=e?1:void 0}function makeEaseOut(t){return function(e){return 1-t(1-e)}}function makeEaseInOut(t){return function(e){return e<.5?t(2*e)/2:(2-t(2*(1-e)))/2}}function linear(e){return e}function quad(e){return Math.pow(e,2)}var quadEaseOut=makeEaseOut(quad);function circ(e){return 1-Math.sin(Math.acos(e))}var circEaseOut=makeEaseOut(circ);function back(e,t){return Math.pow(t,2)*((e+1)*t-e)}var backEaseOut=makeEaseOut(back);function bounce(e){for(var t=0,n=1;;t+=n,n/=2)if((7-4*t)/11<=e)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)}var bounceEaseOut=makeEaseOut(bounce);function elastic(e,t){return Math.pow(2,10*(t-1))*Math.cos(20*Math.PI*e/3*t)}var fromMedium,toMedium,elemSideRight,elemActiveStiker,elemNextStiker,elemArticle,linkNextPage,documentNextPage,timerClearStyle,elasticEaseOut=makeEaseOut(elastic);function onLoadedMenu(){document.querySelector(".layout__menu-toggle").addEventListener("click",layoutMenuToggle)}function onUnloadMenu(){document.body.style.animation="fadeOut 1s"}function layoutMenuToggle(){document.documentElement.classList.toggle("menu--open")}function onScroll(){10<window.pageYOffset?document.documentElement.classList.add("onscroll"):document.documentElement.classList.remove("onscroll")}function onLoadedHeader(){window.addEventListener("scroll",headerScroll)}function headerScroll(){requestAnimationFrame(function(){var e=document.querySelector(".header");0==document.querySelector(".header__page-title").innerHTML?e.classList.add("empty-title"):e.classList.remove("empty-title")})}function onloadedMenu(){updateMenu();for(var e=document.querySelectorAll(".menu__item"),t=e.length-1;0<=t;t--)e[t].style.transitionDelay=.2*t+"s";var n=document.querySelectorAll(".menu__link");for(t=n.length-1;0<=t;t--)n[t].addEventListener("click",updateMenu),n[t].addEventListener("click",closeMenu)}function openMenu(){document.documentElement.classList.add("menu--open")}function closeMenu(){document.documentElement.classList.remove("menu--open")}function updateMenu(){setTimeout(function(){for(var e=document.querySelectorAll(".menu__link"),t=e.length-1;0<=t;t--){var n=window.location.pathname,r=window.location.hash;"/"==n&&(n="/index.html"),e[t].pathname+e[t].hash===n+r?e[t].classList.add("active"):e[t].classList.remove("active")}},0)}function onLoadedStartPage(){document.querySelector(".start-page__menu").addEventListener("click",startPageMenuToggle)}function startPageOpen(){document.documentElement.classList.add("start-page--open"),document.querySelector(".start-page__close").addEventListener("click",startPageClose)}function startPageMenuToggle(){document.querySelector(".start-page__menu").classList.toggle("open")}function startPageClose(){document.documentElement.classList.add("start-page--closing"),setTimeout(function(){document.documentElement.classList.remove("start-page--open"),document.documentElement.classList.remove("start-page--closing")},1e3)}function Stikers(){var r,s,m,l,c,f,t,n,o=this;this.init=function(e){return s=document.querySelector(e),m=s.querySelectorAll(".stiker"),t=s.querySelector(".stikers-group__next"),n=s.querySelector(".stikers-group__prev"),f=s.querySelector(".stikers-group__dots"),l=Array.prototype.slice.call(m),s.classList.add("stikers-group"),s.classList.onselectstart=function(){return!1},i(m),t.onclick=function(){o.slideNext(m)},n.onclick=function(){o.slidePrev(m)},requestAnimationFrame(function(){for(var e=m.length-1;0<=e;e--){var t=m[e],n=(t.querySelector(".stiker__number"),t.querySelector(".stiker__wrap")),r=10*Math.random()-5;n.style.transform="rotate("+r+"deg)"}}),this},this.convertToGrid=function(o,i,a,n){if(o<=0)throw new Error("Значение rows должно быть положительным");if(i<0)throw new Error("Значение cols должно больше нуля");return clearTimeout(void 0),s.classList.remove("stikers__slider"),timerFromGrid=setTimeout(function(){if(c=new Array,n?l.sort(compareRandom):l=Array.prototype.slice.call(m),i||(i=Math.ceil(l.length/o)),a)var e=1.15,t=1.55;else e=1.15,t=1.15;window.removeEventListener("optimizedResize",r),r=function(){requestAnimationFrame(function(){s.style.width=s.querySelector(".stiker").offsetWidth*e*o+"px",s.style.height=s.querySelector(".stiker").offsetHeight*t*i+"px"})},window.addEventListener("optimizedResize",r),r(e,t,o,i),setTimeout(function(){var e=0,t=0,n=0;for(e=0;e<=l.length-1;e++){var r=l[e];y(r),c[t]||(c[t]=new Array),c[t][n]||(c[t][n]=new Array),function(e,n,r,t,o,i){var a=c[r][n][t],s=a.querySelector(".stiker__title");a.querySelector(".stiker__wrap");if(i)var l=2.5,u=9;else{l=2.5,u=2.5;requestAnimationFrame(function(){s.style.display="none"})}setTimeout(function(){requestAnimationFrame(function(){var e=(16+l)*n,t=(16+u)*r;a.style.transform="translate("+e+"em, "+t+"em)",i&&(s.style.display="block")})},100*e)}(e,n,t,c[t][n].push(r)-1,0,a),o<=++n&&(n=0,i<=++t&&(t=0))}for(t=c.length-1;0<=t;t--)for(n=c[t].length-1;0<=n;n--)u(c[t][n])},300)},100),this},this.convertToSlider=function(){return this.convertToGrid(1,1,!0),s.classList.add("stikers__slider"),this},this.slideNext=function(){for(var e=m.length-1;0<=e;e--)if(m[e].classList.contains("active")){var t=m[e],n=t.querySelector(".stiker__wrap"),r=p(t,e);return animate({timing:linear,duration:500,draw:r,from:10,to:90,before:function(){n.style.overflow="visible"},after:function(){v(m),animate({timing:linear,duration:700,draw:r,from:90,to:1,after:function(){n.style.overflow="hidden"}})}}),this}return this},this.slidePrev=function(){for(var e=m.length-1;0<=e;e--)if(0==+m[e].style.zIndex){var t=m[e],n=t.querySelector(".stiker__wrap"),r=p(t,e);return animate({timing:linear,duration:500,draw:r,from:0,to:90,before:function(){n.style.overflow="visible"},after:function(){d(m,!0),animate({timing:linear,duration:700,draw:r,from:90,to:10,after:function(){n.style.overflow="hidden"}})}}),this}return this};var i=function(e){for(var t=e.length-1;0<=t;t--){var n=document.createElement("span");f.insertBefore(n,null)}},u=function(e){for(var t=e.length-1;0<=t;t--){var n=e[t];n.classList.remove("active"),n.style.zIndex=t}iteration=e.length-1,1<e.length?a(e,iteration,!1,!0):a(e,iteration,!0,!0)},a=function(t,e,n,r,o){var i,a=t[e],s=a.querySelector(".stiker__wrap"),l=(a.querySelector(".stiker__inner"),a.querySelector(".stiker__arena")),u=(a.querySelector(".stiker__outer"),a.querySelector(".stiker__back"),a.querySelector(".stiker__front"),p(a,e)),c=+a.style.zIndex;if(a.classList.add("active"),function(e){for(var t=f.querySelectorAll("span"),n=t.length-1;0<=n;n--)t[n].classList.remove("active");for(n=e.length-1;0<=n;n--)if(e[n].classList.contains("active"))return t[n].classList.add("active");t[m.length-1].classList.add("active")}(t),n)requestAnimationFrame(function(){u(0)});else{r?requestAnimationFrame(function(){u(.1)}):o||animate({timing:linear,duration:3e3,draw:u,from:1,to:10});var d=function(e){l.onmouseover=void 0,l.onmouseout=void 0,.1<(i=.05-(e.offsetY/this.offsetHeight-1))&&i<1&&requestAnimationFrame(function(e){u(i)})};l.onmouseover=function(e){animate({timing:linear,duration:3e3,draw:u,from:10,to:13})},l.onmouseout=function(e){animate({timing:linear,duration:3e3,draw:u,from:13,to:10})},l.onmousedown=function(e){a.style.zIndex="999",document.querySelector(".layout__header").style.zIndex="0",requestAnimationFrame(function(){s.style.overflow="visible",l.style.height="200%",l.style.width="200%",l.onmousemove=d})},l.onmouseup=function(e){a.style.zIndex=c,document.querySelector(".layout__header").style.zIndex="",requestAnimationFrame(function(){l.style.height="35%",l.style.width="35%",l.onmousemove=void 0}),animate(.4<i?{timing:linear,duration:700,draw:u,from:100*i,to:100,after:function(){v(t),animate({timing:linear,duration:700,draw:u,from:100,to:13,after:function(){y(a),s.style.overflow="hidden"}})}}:{timing:linear,duration:1e3,draw:u,from:100*i,to:10,after:function(){s.style.overflow="hidden"}})}}},y=function(e){e.querySelector(".stiker__wrap");var t=e.querySelector(".stiker__inner"),n=e.querySelector(".stiker__arena"),r=e.querySelector(".stiker__outer"),o=e.querySelector(".stiker__front"),i=e.querySelector(".stiker__back");e.onmouseover=void 0,e.onmouseout=void 0,n.onmouseover=void 0,n.onmouseout=void 0,n.onmousedown=void 0,n.onmouseup=void 0,n.onmousemove=void 0,e.classList.remove("active"),requestAnimationFrame(function(){t.style.transform="",r.style.transform="",i.style.transform="",o.style.transform="",n.style.left="",n.style.right=""})},v=function(r,o){requestAnimationFrame(function(e){for(var t,n=r.length-1;0<=n;n--)(t=+r[n].style.zIndex+1)>r.length-1?t=0:t<0&&(t=r.length-1),(r[n].style.zIndex=t)==r.length-1?a(r,n,!1,!1,o):y(r[n])})},d=function(r,o){requestAnimationFrame(function(e){for(var t,n=r.length-1;0<=n;n--)(t=+r[n].style.zIndex-1)>r.length-1?t=0:t<0&&(t=r.length-1),(r[n].style.zIndex=t)==r.length-1?a(r,n,!1,!1,o):y(r[n])})},p=function(t,e){var n=t.querySelector(".stiker__arena");return n.style.left="0",n.style.right="auto",function(e){!function(e,t){e.querySelector(".stiker__wrap");var n=e.querySelector(".stiker__inner"),r=(e.querySelector(".stiker__arena"),e.querySelector(".stiker__outer")),o=e.querySelector(".stiker__front"),i=e.querySelector(".stiker__back"),a=-24*t-4*t,s=24*t,l=-(17-34*t),u=17-34*t,c=(100-30*zone(t,.7,1))/100;n.style.transform="rotate(45deg) translateY("+a+"em)",r.style.transform="translateY("+s+"em)",o.style.transform="rotate(-45deg)",i.style.transform="rotate(-45deg) translate("+l+"em, "+u+"em) scale("+c+")",o.style.opacity=t<=.5?"1":"0"}(t,e)}}}function initAudioPlayer(e){var t=e.querySelector("audio"),n=e.querySelector(".audioplayer__button"),r=e.querySelector(".audioplayer__playhead"),o=e.querySelector(".audioplayer__timeline"),i=t.duration,a=o.offsetWidth;function s(){requestAnimationFrame(function(){var e=t.currentTime/i;r.style.transform="scaleX("+e+")",t.currentTime==i&&(n.classList.remove("pause"),n.classList.add("play"))})}n.addEventListener("click",function(){t.paused?(t.play(),n.classList.remove("play"),n.classList.add("pause")):(t.pause(),n.classList.remove("pause"),n.classList.add("play"))}),t.addEventListener("timeupdate",s,!1),o.addEventListener("click",function(e){t.currentTime=i*((e.clientX-o.getBoundingClientRect().left)/a),s()},!1),t.addEventListener("canplaythrough",function(){i=t.duration},!1)}function loadYoutubeVideos(){function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var t=[].concat(e(document.getElementsByClassName("youtube"))),n=[].concat(e(document.getElementsByClassName("do-now__play-btn")));t.map(function(e,t){var n=YouTubeGetID(e.dataset.video);e.style.backgroundImage="url('https://i.ytimg.com/vi/"+n+"/maxresdefault.jpg')"}),n.map(function(n){n.onclick=function(){var e=n.parentNode.dataset.video.split("?v=")[1],t=document.createElement("iframe");t.src="https://www.youtube.com/embed/"+e+"?rel=0&autoplay=1&showinfo=0",t.setAttribute("allow","autoplay"),t.setAttribute("allowfullscreen",!0),t.setAttribute("frameborder",0),t.style.width="100%",t.style.height="100%",t.style.position="absolute",n.parentNode.appendChild(t)}})}function loadYoutubeLinks(){for(var e=document.querySelectorAll(".YouTubeVideo"),t=e.length-1;0<=t;t--){var n=e[t],r=YouTubeGetID(n.href);n.target="_blank",n.style.backgroundImage="url(https://img.youtube.com/vi/"+r+"/0.jpg)"}}function YouTubeGetID(e){return void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?e[2].split(/[^0-9a-z_\-]/i)[0]:e}function onLoadedHomePage(){window.stikers=(new Stikers).init(".stikers-group"),document.querySelector(".header__icons_back").addEventListener("click",closeCases),"#cases"==window.location.hash?openCases():closeCases(),respondFrom(breakpoint.medium,function(){fromMedium()},!1,!0),respondTo(breakpoint.medium,function(){toMedium()},!1,!0);for(var e=document.getElementsByTagName("a"),t=e.length-1;0<=t;t--){var n=e[t];"#cases"===n.hash&&n.addEventListener("click",openCases)}}function openCases(){return document.documentElement.classList.add("homepage--cases"),window.location.hash="cases",updateMenu(),document.documentElement.classList.remove("homepage--ready"),document.querySelector(".homepage__cases > .oval-marker").style.display="none",fromMedium=function(){stikers.convertToGrid(4,!1,!0,!1)},toMedium=function(){stikers.convertToSlider()},respondFrom(breakpoint.medium,fromMedium,!0,!1),respondTo(breakpoint.medium,toMedium,!0,!1),!1}function closeCases(){return document.documentElement.classList.remove("homepage--cases"),window.location.hash="",updateMenu(),document.documentElement.classList.add("homepage--ready"),setTimeout(function(){document.querySelector(".homepage__cases > .oval-marker").style.display="block"},1e3),fromMedium=function(){stikers.convertToGrid(3,2,!1,!0)},toMedium=function(){stikers.convertToSlider()},respondFrom(breakpoint.medium,fromMedium,!0,!1),respondTo(breakpoint.medium,toMedium,!0,!1),updateMenu(),!1}function loadCaseDetailedPage(){elemSideRight=document.querySelector(".layout__side_right"),elemActiveStiker=document.querySelector(".case-detailed__stiker"),elemNextStiker=document.querySelector(".case-detailed__next"),elemArticle=document.querySelector(".case-detailed__article"),getDocument((linkNextPage=document.querySelector(".case-detailed__next a")).href,function(e){documentNextPage=e,elemSideRight.onclick=nextPage})}function nextPage(e){clearTimeout(timerClearStyle),elemSideRight.onclick=void 0;var t=elemActiveStiker.getBoundingClientRect(),n=elemNextStiker.getBoundingClientRect();elemNextStiker.style.transform="translateX("+n.x+"px) translateY("+n.y+"px)",elemNextStiker.style.top=0,elemNextStiker.style.left=0,requestAnimationFrame(function(){elemActiveStiker.style.transition="all 2000ms ease",elemActiveStiker.style.transform="translateX(-50rem) translateY(-50%)",elemActiveStiker.style.opacity=0,elemNextStiker.style.transition="all 1500ms ease 500ms",elemNextStiker.style.transform="translateX("+t.x+"px) translateY("+t.y+"px)",elemArticle.style.transition="all 2000ms ease 200ms, opacity 1000ms",elemArticle.style.transform="translateX(-50rem)",elemArticle.style.opacity=0,setTimeout(function(){requestAnimationFrame(function(){elemArticle.innerHTML=documentNextPage.querySelector(".case-detailed__article").innerHTML,elemActiveStiker.style.transition="",elemArticle.style.transition="",elemArticle.style.transform="translateX(50rem)",window.scrollTo(0,0),requestAnimationFrame(function(){elemArticle.style.transition="all 1500ms ease",elemArticle.style.opacity=1,elemArticle.style.transform=""})})},1e3),setTimeout(function(){requestAnimationFrame(function(){elemActiveStiker.innerHTML=elemNextStiker.innerHTML,elemActiveStiker.style.opacity="",elemActiveStiker.style.transform="",elemNextStiker.innerHTML=documentNextPage.querySelector(".case-detailed__next").innerHTML,elemNextStiker.style.transition="",elemNextStiker.style.opacity=0,elemNextStiker.style.top="",elemNextStiker.style.left="",elemNextStiker.style.transform="translateX(50rem) translateY(-50%)",history.pushState("","",linkNextPage.href),document.title=documentNextPage.title,document.querySelector(".header__page-title").innerHTML=documentNextPage.querySelector(".header__page-title").innerHTML,requestAnimationFrame(function(){elemNextStiker.style.transition="all 1500ms ease 500ms",elemNextStiker.style.opacity=1,elemNextStiker.style.transform="",timerClearStyle=setTimeout(function(){requestAnimationFrame(function(){elemSideRight.removeAttribute("style"),elemActiveStiker.removeAttribute("style"),elemNextStiker.removeAttribute("style"),elemArticle.removeAttribute("style"),documentNextPage=void 0;for(var e=readyjs.length-1;0<=e;e--)readyjs[e]()})},2e3)})})},2e3)})}document.addEventListener("DOMContentLoaded",onLoadedMenu),window.addEventListener("beforeunload",onUnloadMenu),window.addEventListener("scroll",onScroll),document.addEventListener("DOMContentLoaded",onLoadedHeader),document.addEventListener("DOMContentLoaded",onloadedMenu),document.addEventListener("DOMContentLoaded",onLoadedStartPage),readyjs.push(function(){for(var e=document.querySelectorAll(".stiker"),t=e.length-1;0<=t;t--){var n=e[t].querySelector(".stiker__wrap"),r=10*Math.random()-5;n.style.transform="rotate("+r+"deg)"}}),readyjs.push(function(){if(audioPlayers=document.querySelectorAll(".audioplayer"),audioPlayers)for(var e=audioPlayers.length-1;0<=e;e--)initAudioPlayer(audioPlayers[e])}),readyjs.push(loadYoutubeVideos),readyjs.push(loadYoutubeLinks);var trustUsFeedback=function(){var n=this;this.items=Array.from(document.querySelectorAll(".trust-us__icons-item")),this.itemsWrapper=document.getElementsByClassName("trust-us__icons")[0],this.round=document.getElementById("js-logo-wrapper"),this.backfeeds=Array.from(document.querySelectorAll(".audio-backfeed")),this.moveRound(this.items[0]),this.changeSlide(0),this.items.map(function(e,t){e.onclick=function(){n.moveRound(e),n.changeSlide(t)}})},inputsHandler=function(){this.inputs=Array.from(document.querySelectorAll(".feedback-form__input")),this.inputs.map(function(t){t.onblur=function(e){e.target.value.trim()?t.classList.add("is_fill"):(t.classList.remove("is_fill"),t.value="")}})};function initSlider(){new Swiper(".began-slider",{pagination:{el:".began-slider__pagination"},navigation:{nextEl:".began-slider__next",prevEl:".began-slider__prev"},effect:"coverflow",spaceBetween:20,speed:500,breakpointsInverse:!0,breakpoints:{1920:{spaceBetween:120},3996:{spaceBetween:950}}})}trustUsFeedback.prototype.moveRound=function(e){var t=e.getBoundingClientRect(),n=this.itemsWrapper.getBoundingClientRect(),r=t.left-n.left,o=t.top-n.top;this.round.style.left=r+"px",this.round.style.top=o+"px"},trustUsFeedback.prototype.changeSlide=function(n){this.backfeeds.map(function(e,t){n===t?e.classList.remove("is_hidden"):e.classList.add("is_hidden")})};