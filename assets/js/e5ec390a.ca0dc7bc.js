"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7811],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),y=o,m=s["".concat(l,".").concat(y)]||s[y]||c[y]||p;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<p;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(83117),o=n(80102),p=(n(67294),n(3905)),a=["components"],i={id:"build-deploy-zapp",title:"Deploy Zapp to Point Network",sidebar_label:"Deploy Zapp to Point Network",slug:"../build-deploy-zapp"},l=void 0,u={unversionedId:"build/build-deploy-zapp",id:"build/build-deploy-zapp",title:"Deploy Zapp to Point Network",description:"First follow the steps in teh Zapp Developer Guide to get up and running.",source:"@site/docs/build/build-deploy-zapp.md",sourceDirName:"build",slug:"/build-deploy-zapp",permalink:"/docs/build-deploy-zapp",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-deploy-zapp.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1655191082,formattedLastUpdatedAt:"6/14/2022",frontMatter:{id:"build-deploy-zapp",title:"Deploy Zapp to Point Network",sidebar_label:"Deploy Zapp to Point Network",slug:"../build-deploy-zapp"},sidebar:"pnSidebar",previous:{title:"Point Network Zapp Developers Guide",permalink:"/docs/build-zapp-developer-guide"},next:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"}},d=[],c={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"First follow the steps in teh ",(0,p.kt)("a",{parentName:"p",href:"./build-zapp-developer-guide"},"Zapp Developer Guide")," to get up and running."),(0,p.kt)("p",null,"Once you are ready to share your amazing new Zapp to the world, you can deploy it to YNet You can do so as follows:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Stop all your locally running services - Point Network, Blockchain, Arlocal etc.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Download and install the ",(0,p.kt)("a",{parentName:"p",href:"https://pointnetwork.io/download"},"Point Network ALPHA"),". This will step you through the process of creating your own mnemonic keys and you will also register your identity on YNet. Be sure to register the Identity that you want for your Zapp name e.g. ",(0,p.kt)("inlineCode",{parentName:"p"},"MyNewZapp")," (replace with your Zapp name).")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Now exit the Alpha application and return to your cloned pointnetwork repo")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Start the Point Node in YNet mode from the cloned pointnetwork repo folder by running ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build && npm run start"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Open the Point Browser - which connects to the Point Node that is now connected in YNET")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Now run the deploy script for your Zapp like so (while in the pointnetwork repo directory):"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"./point deploy ../myzapps/mynewzapp.point --contracts\n")),(0,p.kt)("p",{parentName:"li"},"Since your Point Node is connected to YNET your Zapp will be deployed to YNET using your Identity that you have registered earlier.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Once the deployment is complete you can open your new Zapp in YNET. You can share the Zapp url (e.g. ",(0,p.kt)("a",{parentName:"p",href:"https://mynewzapp.point"},"https://mynewzapp.point"),") to anyone you like and they can open the Zapp in Point Network!"))))}s.isMDXComponent=!0}}]);