(self.webpackChunk=self.webpackChunk||[]).push([[217],{37264:function(e,t,n){"use strict";n.r(t);var r=n(41788),a=n(89349),l=n(67294),i=function(e){return l.createElement("div",e)},s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.config;if(0===(e.users||[]).length)return null;var t=e.users.map((function(e){return l.createElement("a",{href:e.infoLink,key:e.infoLink},l.createElement("img",{src:e.image,alt:e.caption,title:e.caption}))}));return l.createElement("div",{className:"mainContainer"},l.createElement(i,{padding:["bottom","top"]},l.createElement("div",{className:"showcaseSection"},l.createElement("div",{className:"prose"},l.createElement("h1",null,"Who is Using This?"),l.createElement("p",null,"This project is used by many folks")),l.createElement("div",{className:"logos"},t),e.repoUrl&&l.createElement(l.Fragment,null,l.createElement("p",null,"Are you using this project?"),l.createElement("a",{href:e.repoUrl+"/edit/master/website/siteConfig.js",className:"button"},"Add your company")))))},t}(l.Component);t.default=function(e){return l.createElement(a.Z,null,l.createElement(s,e))}}}]);