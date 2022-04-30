"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,y=s["".concat(l,".").concat(m)]||s[m]||c[m]||r;return n?o.createElement(y,p(p({ref:t},u),{},{components:n})):o.createElement(y,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14640:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),p=["components"],i={id:"build-zapp-developer-guide",title:"Point Network Zapp Developers Guide",sidebar_label:"Point Network Zapp Developers Guide",slug:"../build-zapp-developer-guide"},l=void 0,d={unversionedId:"build/build-zapp-developer-guide",id:"build/build-zapp-developer-guide",title:"Point Network Zapp Developers Guide",description:"Welcome to the Zapp Developers Guide!",source:"@site/docs/build/build-zapp-developer-guide.md",sourceDirName:"build",slug:"/build-zapp-developer-guide",permalink:"/docs/build-zapp-developer-guide",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-zapp-developer-guide.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1651294822,formattedLastUpdatedAt:"4/30/2022",frontMatter:{id:"build-zapp-developer-guide",title:"Point Network Zapp Developers Guide",sidebar_label:"Point Network Zapp Developers Guide",slug:"../build-zapp-developer-guide"},sidebar:"pnSidebar",previous:{title:"Create a Dev Point Network Profile in Firefox",permalink:"/docs/build-create-a-dev-point-network-profile-in-firefox"},next:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Anatomy of a Zapp",id:"anatomy-of-a-zapp",children:[],level:2},{value:"Procedures for developing a Zapp",id:"procedures-for-developing-a-zapp",children:[],level:2},{value:"Deploy your Zapp to YNET",id:"deploy-your-zapp-to-ynet",children:[],level:2},{value:"Continue Developing",id:"continue-developing",children:[],level:2},{value:"Upgradable Zapps",id:"upgradable-zapps",children:[],level:2}],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Zapp Developers Guide!"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Zapps are what we call Dapps running on Point Network."),(0,r.kt)("p",null,"While Point Network does support running EVM based Dapps directly on the network, its also possible to build brand new Zapps using our SDK (called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointsdk"},"Point SDK"),"). "),(0,r.kt)("p",null,"Its highly recommended to use the Point SDK to build new Zapps since this SDK automatically proxies connections to the Point Node making development of new Zapps very straightforward."),(0,r.kt)("h2",{id:"anatomy-of-a-zapp"},"Anatomy of a Zapp"),(0,r.kt)("p",null,"A Zapp is made up of the following components at a minimum:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"point.deploy.json")," file which is a deployment manifest for your Zapp. You can read more about this file in ",(0,r.kt)("a",{parentName:"li",href:"/docs/build-point-deploy-json-file-explained"},"this article"),"."),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"routes.json")," file which defines your Zapps routes. You can read more about the Routes file in ",(0,r.kt)("a",{parentName:"li",href:"/docs/build-routes-json-file-explained"},"this article")),(0,r.kt)("li",{parentName:"ol"},"A static website containing the frontend code of your Zapp. Typically this would be a React JS application but you can use any frontend framework."),(0,r.kt)("li",{parentName:"ol"},"One or more Solidity Smart Contracts to be deployed along with your Zapp to act as a distributed backend data storage.")),(0,r.kt)("h2",{id:"procedures-for-developing-a-zapp"},"Procedures for developing a Zapp"),(0,r.kt)("p",null,"You would take the following steps to develop, test and deploy your Zapp onto Point Network."),(0,r.kt)("p",null,"Once you have a great idea for a new decentralized application that you want to deploy and share on Point Network you would:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/template.point"},"template.point")," Zapp repo into a local folder (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"myzapps"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/pointnetwork/template.point.git myzapps/mynewzapp.point\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," folder so that you can initialize for your own Github repo later on if you wish: ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf myzapps/mynewzapp.point/.git"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change directory into your new Zapp folder and install the dependencies ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i")," and build the React JS application ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Startup a local development environment of Point Network and deploy your new Zapp by following the instructions ",(0,r.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install"},"here"),"). Once you have completed that and you have your Zapp running locally, return to this tutorial.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," file to contain the following content (replace 'MyNewZapp' with your Zapp Name):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "version": 0.1,\n    "target": "mynewzapp.point",\n    "keyvalue": {},\n    "contracts": [\n      "MyNewZapp"\n    ]\n  }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Template.sol")," smart contract to contain the logic of your Zapp. Make sure to rename the file to something appropriate like ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNewZapp.sol")," as well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the React JS components to contain the logic of your Zapp.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy locally and continue to develop the Zapp. In the development environment you can run the watch command for the front end ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run watch")," so that as you make changes to any React JS components they are automatically built and you can simply refresh the Point Browser to see your latest changes. NOTE: if you need to make changes to your Smart Contract you will need to redeploy your Zapp to see these changes."))),(0,r.kt)("h2",{id:"deploy-your-zapp-to-ynet"},"Deploy your Zapp to YNET"),(0,r.kt)("p",null,"Once you are ready to share your amazing new Zapp to the world, you can deploy it to YNET. You can do so as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop all your locally running services - Point Network, Blockchain, Arlocal etc.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork-dashboard/blob/main/ALPHA.md"},"Point Network ALPHA"),". This will step you through the process of creating your own mnemonic keys and you will also register your identity on YNET. Be sure to register the Identity that you want for your Zapp name e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNewZapp")," (replace with your Zapp name).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now exit the Alpha application and return to your cloned pointnetwork repo")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Point Node in YNET mode from the cloned pointnetwork repo folder by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build && npm run start"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Point Browser - which connects to the Point Node that is now connected in YNET")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now run the deploy script for your Zapp like so (while in the pointnetwork repo directory):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./point deploy ../myzapps/mynewzapp.point --contracts\n")),(0,r.kt)("p",{parentName:"li"},"Since your Point Node is connected to YNET your Zapp will be deployed to YNET using your Identity that you have registered earlier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the deployment is complete you can open your new Zapp in YNET. You can share the Zapp url (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://mynewzapp.point"},"https://mynewzapp.point"),") to anyone you like and they can open the Zapp in Point Network!"))),(0,r.kt)("h2",{id:"continue-developing"},"Continue Developing"),(0,r.kt)("p",null,"To continue to develop your Zapp locally, simply stop the Point Node running that is connected to YNET and restart all your dev services as well as the Point Node running in the development environment as outlined ",(0,r.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install"},"here"),"."),(0,r.kt)("h2",{id:"upgradable-zapps"},"Upgradable Zapps"),(0,r.kt)("p",null,"If you build a Zapp ",(0,r.kt)("em",{parentName:"p"},"without")," using an upgradable smart contract pattern then each time you deploy the smart contract a ",(0,r.kt)("em",{parentName:"p"},"new instance")," of the smart contract will be deployed at a new address which will not contain the data of the previously deployed contract. If you intend to upgrade your Zapp from time to time, then consider building your Zapp as an ",(0,r.kt)("a",{parentName:"p",href:"./build-upgradable-zapps"},"Upgradable Zapp"),"."))}s.isMDXComponent=!0}}]);