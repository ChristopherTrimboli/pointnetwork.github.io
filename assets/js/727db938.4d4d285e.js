"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4445],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=p(n),c=o,h=y["".concat(l,".").concat(c)]||y[c]||u[c]||r;return n?i.createElement(h,d(d({ref:t},s),{},{components:n})):i.createElement(h,d({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,d=new Array(r);d[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,d[1]=a;for(var p=2;p<r;p++)d[p]=n[p];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},33551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return y}});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),d=["components"],a={id:"build-delegating-deployer-identities",title:"Delegating an Identity to deploy your dApp",sidebar_label:"Delegating a dApp Deployer Identity",slug:"../build-delegating-deployer-identities"},l=void 0,p={unversionedId:"build/build-delegating-deployer-identities",id:"build/build-delegating-deployer-identities",title:"Delegating an Identity to deploy your dApp",description:"You may wish to delegate another Identity permission to update your dApp on your behalf.",source:"@site/docs/build/build-delegating-deployer-identities.md",sourceDirName:"build",slug:"/build-delegating-deployer-identities",permalink:"/docs/build-delegating-deployer-identities",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-delegating-deployer-identities.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1658831636,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"build-delegating-deployer-identities",title:"Delegating an Identity to deploy your dApp",sidebar_label:"Delegating a dApp Deployer Identity",slug:"../build-delegating-deployer-identities"},sidebar:"pnSidebar",previous:{title:"Start Point Node in YNet",permalink:"/docs/build-start-point-node-default"},next:{title:"Using Identity Oracle in dev",permalink:"/docs/build-use-identity-oracle-in-devlocal"}},s=[{value:"Using the CLI",id:"using-the-cli",children:[{value:"List the Deployers",id:"list-the-deployers",children:[],level:3},{value:"Assign a new deployer Identity to a dApp",id:"assign-a-new-deployer-identity-to-a-dapp",children:[],level:3},{value:"Remove deployer Identity from a dApp",id:"remove-deployer-identity-from-a-dapp",children:[],level:3}],level:2},{value:"Using Point Explorer Identity Management dApp",id:"using-point-explorer-identity-management-dapp",children:[],level:2}],u={toc:s};function y(e){var t=e.components,a=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may wish to delegate another Identity permission to update your dApp on your behalf. "),(0,r.kt)("p",null,"Once you have deployed your dApp you are the owner of that dApp. Only you can update it by redeploying it."),(0,r.kt)("p",null,"If you want you can assign multiple trusted Identities within Point Network and give them the authority to update your dApp."),(0,r.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,r.kt)("h3",{id:"list-the-deployers"},"List the Deployers"),(0,r.kt)("p",null,"To list the existing set of deployer Identities associated with a dApp you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity-list-deployers")," Hardhat Task like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'npx hardhat identity-list-deployers 0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d "social" --network development\n')),(0,r.kt)("p",null,"The above example will list the addresses of the Identities who are designated deployer Identities for the \"social\" dApp deployed in the 'development' network"),(0,r.kt)("h3",{id:"assign-a-new-deployer-identity-to-a-dapp"},"Assign a new deployer Identity to a dApp"),(0,r.kt)("p",null,"To add a new deployer Identity to an existing dApp you will first of all need to be the owner of that dApp. You can then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity-add-deployer")," Hardhat Task to add a new deployer Identity to the dApp like so. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'npx hardhat identity-add-deployer 0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d "social" 0x1cDfC3B4112B5077721014A514748e7EDCA920AD 0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048 --network development\n')),(0,r.kt)("p",null,"The above command will add the deployer Identity ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1cDfC3B4112B5077721014A514748e7EDCA920AD")," to the \"social\" dApp Identity deployed to the 'development' network. The format of the Hardhat Task is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat identity-add-deployer IDENTITY_CONTRACT_ADDRESS DAPP_IDENTITY NEW_DEPLOYER_IDENTITY_ADDRESS DAPP_OWNER_ADDRESS --network development\n")),(0,r.kt)("h3",{id:"remove-deployer-identity-from-a-dapp"},"Remove deployer Identity from a dApp"),(0,r.kt)("p",null,"To remove a deployer Identity from the list of authorized dApp deployers you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity-remove-deployer")," Hardhat task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'npx hardhat identity-remove-deployer 0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d "social" 0x1cDfC3B4112B5077721014A514748e7EDCA920AD 0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048 --network development\n')),(0,r.kt)("p",null,"The above command will remove the Identity ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1cDfC3B4112B5077721014A514748e7EDCA920AD"),' from the "social" dApp deployed to the "development" environment. The format of the Hardhat Task is the same as ',(0,r.kt)("inlineCode",{parentName:"p"},"identity-add-deployer")," above."),(0,r.kt)("h2",{id:"using-point-explorer-identity-management-dapp"},"Using Point Explorer Identity Management dApp"),(0,r.kt)("p",null,"Its possible to manage dApp deployer identities via the Point Explorer Identity Management dApp too. Assuming you have deployed Point Social to your local development environment you can open the Identity page for the Point Social dApp in Point Explorer ",(0,r.kt)("a",{parentName:"p",href:"https://point/identities/social"},"here")," (NOTE: link needs to be opened in Point Browser)"),(0,r.kt)("p",null,'Scroll to the "Deployers" section. Initially it will appear empty like so:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"alt-text",src:n(4426).Z}))))),(0,r.kt)("p",null,"Copy paste the address of the deployer you want to assign into the address text box and click the Add button. "),(0,r.kt)("p",null,"Once the transaction has been mined, the deployer address will be added to the list like so:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"alt-text",src:n(68911).Z}))))),(0,r.kt)("p",null,'Note that you can click the "Revoke" button next to the deployer Identity in the list to remove them.'))}y.isMDXComponent=!0},4426:function(e,t,n){t.Z=n.p+"assets/images/1-new-deployer-form-f8a9349ebf687a309c31c9db52083361.png"},68911:function(e,t,n){t.Z=n.p+"assets/images/2-deployer-added-5f10eca5746da79819561942044d588d.png"}}]);