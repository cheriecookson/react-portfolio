(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cover-image.69e7b91c.jpg"},function(e,t,a){e.exports=a.p+"static/media/cv.75421d6c.pdf"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){var n={"./budget-tracker.jpg":15,"./code-quiz-challenge.jpg":16,"./covid-travel-tracker.jpg":17,"./git-cookin.jpg":18,"./social-network-api.jpg":19,"./weather-dashboard.jpg":20};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/budget-tracker.3d0f8389.jpg"},function(e,t,a){e.exports=a.p+"static/media/code-quiz-challenge.19a09ac7.jpg"},function(e,t,a){e.exports=a.p+"static/media/covid-travel-tracker.3723aa33.jpg"},function(e,t,a){e.exports=a.p+"static/media/git-cookin.301a4e9f.jpg"},function(e,t,a){e.exports=a.p+"static/media/social-network-api.4bd68578.jpg"},function(e,t,a){e.exports=a.p+"static/media/weather-dashboard.0ca5dc38.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(13),a(1));function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var m=function(e){var t=e.pages,a=void 0===t?[]:t,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=i(c.name)}),[c]),r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement("a",{"data-testid":"link",href:"https://cheriecookson.github.io/react-portfolio/"},"Cherie Cookson")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-1 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){l(e)}},i(e.name)))})))))},u=function(e){return r.a.createElement("div",null,e.children)},d=a(6),p=a.n(d);var h=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("img",{src:p.a,className:"my-2",style:{width:"20%"},alt:"cover"}),r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"When an analytical mind meets creativity you get a Certified Full Stack Web Developer with a Masters of Accounting."),r.a.createElement("p",null,"I started my career selling total IT solutions to small and medium sized businesses at Dell Inc after graduating from Texas Tech University with a BS in Communication Studies in 2004.  Five years later, during the financial crisis of 2009, I left Dell Inc to pursue a Masters of Accounting degree from Texas A&M Corpus Christi.  While at TAMUCC I was awarded a Graduate Assistantship at the university\u2019s Business Innovation Center where I helped startup businesses put their ideas into motion."),r.a.createElement("p",null,"Fast forward to today, I am now a full time Accountant working for one of the top Cardiothoracic Surgeons in South Texas.  I am also the sole Accountant for two other up and coming businesses."),r.a.createElement("p",null,"My Accounting career has been reliable and rewarding but I desire something more where I can let my creative side thrive.  As a Full Stack Web Developer I will get the best of both worlds.")))};var E=function(e){var t=e.project,n=t.name,l=t.repo,c=t.link,o=t.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:a(14)("./".concat(n,".jpg")),alt:s(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},s(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,o)))};var f=function(){var e=Object(n.useState)([{name:"git-cookin",description:"MySQL, Sequelize, Handlebars.js, Express.js, Sass",link:"http://git-cookin.herokuapp.com/",repo:"https://github.com/cheriecookson/git-cookin"},{name:"covid-travel-tracker",description:"HTML, CSS, JavaScript, jQuery, Materlialize, 3rd Party APIs",link:"https://cheriecookson.github.io/covid19-travel-tracker/",repo:"https://github.com/cheriecookson/covid19-travel-tracker"},{name:"budget-tracker",description:"NoSQL, IndexedDB, Express.js, Service Worker, MongoDB Atlas and Heroku",link:"https://shrouded-plateau-83298.herokuapp.com/",repo:"https://github.com/cheriecookson/budget-tracker"},{name:"social-network-api",description:"NoSQL, Mongoose ODM, MongoDB, Express.js, Node.js",link:"https://drive.google.com/file/d/1ginBLVwq6uaLn4HTgs92sEaF9EFSJUs9/view",repo:"https://github.com/cheriecookson/social-network-api"},{name:"weather-dashboard",description:"API weather data, jQuery, Bootstrap",link:"https://cheriecookson.github.io/weather-dashboard/",repo:"https://github.com/cheriecookson/weather-dashboard"},{name:"code-quiz-challenge",description:"HTML, CSS, JavaScript, Web APIs",link:"https://cheriecookson.github.io/code-quiz-challenge/",repo:"https://github.com/cheriecookson/code-quiz-challenge"}]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement(E,{project:e,key:"project"+t})}))))},g=a(2),v=a(3);var b=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],m=i[1],u=a.name,d=a.email,p=a.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."));s||(l(Object(v.a)(Object(v.a)({},a),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",{className:"my-5"},r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:u,onBlur:h})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:d,onBlur:h})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:h})),s&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},s)),r.a.createElement("button",{"data-testid":"button",type:"submit"},"Submit")))},k=a(7),w=a.n(k);var j=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",{className:"resume"},r.a.createElement("a",{href:w.a},r.a.createElement("i",{class:"far fa-file"}," Download"))),r.a.createElement("h4",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"HTLM"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Materlialize"),r.a.createElement("li",null,"Sass"),r.a.createElement("li",null,"Handlebars.js"),r.a.createElement("li",null,"React")),r.a.createElement("h4",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"3rd Party and Web APIs"),r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Express.js"),r.a.createElement("li",null,"SQL"),r.a.createElement("li",null,"Sequelize"),r.a.createElement("li",null,"NoSQL"),r.a.createElement("li",null,"IndexedDB"),r.a.createElement("li",null,"Service Worker"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"Heroku"))))};var S=function(e){var t=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,i(t.name)),r.a.createElement(u,null,function(){switch(t.name){case"about me":return r.a.createElement(h,null);case"portfolio":return r.a.createElement(f,null);case"contact":return r.a.createElement(b,null);case"resume":return r.a.createElement(j,null);default:return r.a.createElement(h,null)}}()))},y=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"icon"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/cheriecookson"},r.a.createElement("i",{class:"fab fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/cherie-cookson-3501646/"},r.a.createElement("i",{class:"fab fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/cherie.cookson/"},r.a.createElement("i",{class:"fab fa-facebook-square"})))))};var x=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement(m,{pages:t,setCurrentPage:i,currentPage:c}),r.a.createElement("main",null,r.a.createElement(S,{currentPage:c})),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.55a0d50a.chunk.js.map