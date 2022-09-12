"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7884],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={title:"Backup",sidebar_label:"Backup"},l="Validator Backup",u={unversionedId:"point_chain/validators/security/backup",id:"point_chain/validators/security/backup",title:"Backup",description:"Learn how to backup your validator.",source:"@site/docs/point_chain/validators/security/backup.md",sourceDirName:"point_chain/validators/security",slug:"/point_chain/validators/security/backup",permalink:"/docs/point_chain/validators/security/backup",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/security/backup.md",tags:[],version:"current",lastUpdatedBy:"Brian",lastUpdatedAt:1662999477,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Backup",sidebar_label:"Backup"},sidebar:"pnSidebar",previous:{title:"Validator Security Checklist",permalink:"/docs/point_chain/validators/security/checklist"},next:{title:"Overview",permalink:"/docs/point_chain/validators/upgrades/overview"}},p=[],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validator-backup"},"Validator Backup"),(0,o.kt)("p",null,"Learn how to backup your validator."),(0,o.kt)("p",null,"It is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"crucial"))," to backup your validator's private key. It's the only way to restore your validator in the event of a disaster."),(0,o.kt)("p",null,"The validator private key is a Tendermint Key: a unique key used to sign consensus votes."),(0,o.kt)("p",null,'To backup everything you need to restore your validator, note that if you are using the "software sign" (the default signing method of Tendermint), your Tendermint key is located at:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"~/.pointd/config/priv_validator_key.json\n")),(0,o.kt)("p",null,"Then do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Backup the ",(0,o.kt)("inlineCode",{parentName:"li"},"json")," file mentioned above (or backup the whole ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," folder)."),(0,o.kt)("li",{parentName:"ol"},"Backup the self-delegator wallet. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/point_chain/users/wallets/backup"},"backing up wallets with the Point Chain Daemon"),".")),(0,o.kt)("p",null,"To see your validator's associated public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tendermint show-validator\n")),(0,o.kt)("p",null,"To see your validator's associated bech32 address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tendermint show-address\n")),(0,o.kt)("p",null,"You can also use hardware to store your Tendermint Key much more safely, such as ",(0,o.kt)("a",{parentName:"p",href:"https://developers.yubico.com/YubiHSM2/"},"YubiHSM2"),"."))}d.isMDXComponent=!0}}]);