"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4850],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=["components"],l={id:"build-zapp-dev-environment-direct-install",title:"Setup Zapp Development Environment (without Docker)",sidebar_label:"Zapp Development Environment (without Docker)",slug:"../build-zapp-dev-environment-direct-install"},p=void 0,d={unversionedId:"build/build-zapp-dev-environment-direct-install",id:"build/build-zapp-dev-environment-direct-install",title:"Setup Zapp Development Environment (without Docker)",description:"You need to install NVM, Node JS, Arlocal and Ganache-CLI as dependent services for Point Node to use.",source:"@site/docs/build/build-zapp-dev-environment-direct-install.md",sourceDirName:"build",slug:"/build-zapp-dev-environment-direct-install",permalink:"/docs/build-zapp-dev-environment-direct-install",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-zapp-dev-environment-direct-install.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1658831636,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"build-zapp-dev-environment-direct-install",title:"Setup Zapp Development Environment (without Docker)",sidebar_label:"Zapp Development Environment (without Docker)",slug:"../build-zapp-dev-environment-direct-install"},sidebar:"pnSidebar",previous:{title:"Zapp Development Environment using Docker",permalink:"/docs/build-zapp-dev-environment-docker"},next:{title:"Create a Dev Point Network Profile in Firefox",permalink:"/docs/build-create-a-dev-point-network-profile-in-firefox"}},s=[{value:"Install NVM",id:"install-nvm",children:[],level:2},{value:"Install Node JS",id:"install-node-js",children:[],level:2},{value:"Install Point Network Dependencies",id:"install-point-network-dependencies",children:[],level:2},{value:"Start Point Network Services",id:"start-point-network-services",children:[],level:2},{value:"Start Point Network Dev Node",id:"start-point-network-dev-node",children:[],level:2},{value:"Deploy the Template Example dApp",id:"deploy-the-template-example-dapp",children:[],level:2},{value:"Open the deployed Template dApp in the Owner Point Browser",id:"open-the-deployed-template-dapp-in-the-owner-point-browser",children:[],level:2},{value:"Stop all Dev Services",id:"stop-all-dev-services",children:[],level:2},{value:"Clean Local Data Cached Chunks and Files from Devlocal and Visitlocal profiles",id:"clean-local-data-cached-chunks-and-files-from-devlocal-and-visitlocal-profiles",children:[],level:2},{value:"(Optional) Run a second Point Node to simulate a Visitor",id:"optional-run-a-second-point-node-to-simulate-a-visitor",children:[],level:2},{value:"Start Point Network Visitor Node",id:"start-point-network-visitor-node",children:[{value:"Open the dApp in the Visitor Point Browser",id:"open-the-dapp-in-the-visitor-point-browser",children:[],level:3},{value:"Deploy your dApp to Point Network",id:"deploy-your-dapp-to-point-network",children:[],level:3}],level:2}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You need to install NVM, Node JS, Arlocal and Ganache-CLI as dependent services for Point Node to use."),(0,r.kt)("h2",{id:"install-nvm"},"Install NVM"),(0,r.kt)("p",null,"Follow the instructions on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM repo")," for your platform."),(0,r.kt)("h2",{id:"install-node-js"},"Install Node JS"),(0,r.kt)("p",null,"With NVM installed and setup you are now ready to install Node JS as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nvm use 14\n")),(0,r.kt)("p",null,"The Point Node repo makes use of an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/.nvmrc"},".nvmrc file")," which can be recognised by your terminal to automatically switch to the correct version of Node using NVM."),(0,r.kt)("p",null,"If you are using ZSH terminal then follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#zsh"},"these instructions")," to add support to switch to the correct Node version automatically. "),(0,r.kt)("h2",{id:"install-point-network-dependencies"},"Install Point Network Dependencies"),(0,r.kt)("p",null,"Clone the Point Engine repo, the Point Contracts repo and then install the dependencies like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/pointnetwork/pointnetwork.git\ngit clone https://github.com/pointnetwork/point-contracts.git\ncd pointnetwork\nsource .bash_alias\npoint-dev-install\n")),(0,r.kt)("h2",{id:"start-point-network-services"},"Start Point Network Services"),(0,r.kt)("p",null,"Once all the dependencies are installed you can start the services like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"point-dev-start\n")),(0,r.kt)("h2",{id:"start-point-network-dev-node"},"Start Point Network Dev Node"),(0,r.kt)("p",null,"Start a Point Network Dev Node like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"point-dev\n")),(0,r.kt)("h2",{id:"deploy-the-template-example-dapp"},"Deploy the Template Example dApp"),(0,r.kt)("p",null,"Point Network provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/template.point"},"example Template dApp")," that you can use to build your own dApps from. Clone this repo to a folder ",(0,r.kt)("strong",{parentName:"p"},"one level below pointnetwork")," repo. "),(0,r.kt)("p",null,"Keep the Point Network Dev Node running in your terminal and open a new terminal window to deploy the Template dApp like so. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pointnetwork     <-- NOTE: the folder of the cloned pointnetowrk repo\nsource .bash_alias\ngit clone https://github.com/pointnetwork/template.point.git ../template.point\ncd ../template.point\nnpm i && npm run build\ncd ../pointnetwork\npoint-deploy ../template.point --contracts\n")),(0,r.kt)("h2",{id:"open-the-deployed-template-dapp-in-the-owner-point-browser"},"Open the deployed Template dApp in the Owner Point Browser"),(0,r.kt)("p",null,"In a new terminal window run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pointnetwork     <-- NOTE: the folder of the cloned pointnetowrk repo\nsource .bash_alias\ngit clone https://github.com/pointnetwork/pointsdk.git ../pointsdk\ncd ../pointsdk\nnvm use\nnpm i\nnpm run build\nnpm i -g web-ext@6.6.0\npoint-browser-owner\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you see the error message ",(0,r.kt)("inlineCode",{parentName:"p"},'The request "website_owner" profile name cannot be resolved to a profile path')," then you need to ",(0,r.kt)("a",{parentName:"p",href:"./build-create-a-dev-point-network-profile-in-firefox"},"create that specific profile in Firefox")," then run the above command again to open the Point Browser."),(0,r.kt)("h2",{id:"stop-all-dev-services"},"Stop all Dev Services"),(0,r.kt)("p",null,"To terminate all Point Network Dev process, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-dev-stop\n")),(0,r.kt)("h2",{id:"clean-local-data-cached-chunks-and-files-from-devlocal-and-visitlocal-profiles"},"Clean Local Data Cached Chunks and Files from Devlocal and Visitlocal profiles"),(0,r.kt)("p",null,"To clear out all locally cached files and chunk data and reset the database for ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"visitlocal"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-dev-clean\n")),(0,r.kt)("h2",{id:"optional-run-a-second-point-node-to-simulate-a-visitor"},"(Optional) Run a second Point Node to simulate a Visitor"),(0,r.kt)("p",null,"To simulate having more than one Identity on the Network and to be able to interact with both Identities, it is necessary to create a new profile and start a separate instance of the Point Node using this new profile. This is especially useful when developing dApps such as ",(0,r.kt)("inlineCode",{parentName:"p"},"email.point")," which require direct interaction between two identities (sending emails). "),(0,r.kt)("h2",{id:"start-point-network-visitor-node"},"Start Point Network Visitor Node"),(0,r.kt)("p",null,"From the cloned Pointnetwork repo, start a Point Network Visitor Node like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"point-visit\n")),(0,r.kt)("h3",{id:"open-the-dapp-in-the-visitor-point-browser"},"Open the dApp in the Visitor Point Browser"),(0,r.kt)("p",null,"From the cloned PointSDK repo, open the a Visitor Point Browser like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"point-browser-visitor\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you see the error message ",(0,r.kt)("inlineCode",{parentName:"p"},'The request "website_visitor" profile name cannot be resolved to a profile path')," then you need to ",(0,r.kt)("a",{parentName:"p",href:"./build-create-a-dev-point-network-profile-in-firefox"},"create that specific profile in Firefox")," then run the above command again to open the Point Browser."),(0,r.kt)("p",null,"You should now be able to interact with any dApps that have been deployed. As mentioned this is useful for dApps that require interacting between two Identities such as the email dApp. I encourage you to try it!"),(0,r.kt)("h3",{id:"deploy-your-dapp-to-point-network"},"Deploy your dApp to Point Network"),(0,r.kt)("p",null,"You can modify and deploy the Template dApp to Ponit Network using your own registered Identity. Visit ",(0,r.kt)("a",{parentName:"p",href:"./build-deploy-zapp"},"this page")," for details."))}u.isMDXComponent=!0}}]);