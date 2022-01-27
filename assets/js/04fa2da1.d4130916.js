"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[551],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(k,r(r({ref:t},d),{},{components:n})):o.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=["components"],l={id:"build-build-with-point-network",title:"Point Network Builders Starter's Guide",sidebar_label:"Point Network Builders Starter's Guide",slug:"../build-build-with-point-network"},p=void 0,s={unversionedId:"build/build-build-with-point-network",id:"build/build-build-with-point-network",title:"Point Network Builders Starter's Guide",description:"Welcome to the builder's section of the Point Network Wiki.",source:"@site/docs/build/build-build-with-pointnetwork.md",sourceDirName:"build",slug:"/build-build-with-point-network",permalink:"/docs/build-build-with-point-network",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-build-with-pointnetwork.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1643246571,formattedLastUpdatedAt:"1/27/2022",frontMatter:{id:"build-build-with-point-network",title:"Point Network Builders Starter's Guide",sidebar_label:"Point Network Builders Starter's Guide",slug:"../build-build-with-point-network"},sidebar:"pnSidebar",previous:{title:"Builder's Portal",permalink:"/docs/build-index"},next:{title:"Testing Guide",permalink:"/docs/build-testing-guide"}},d=[{value:"Develop using docker compose",id:"develop-using-docker-compose",children:[],level:3},{value:"Troubleshooting the deployment",id:"troubleshooting-the-deployment",children:[],level:3},{value:"Open the deployed site in Point Browser",id:"open-the-deployed-site-in-point-browser",children:[],level:3},{value:"Create a Point Network Profile in Firefox",id:"create-a-point-network-profile-in-firefox",children:[],level:3},{value:"Open the deployed site in a second Point Browser",id:"open-the-deployed-site-in-a-second-point-browser",children:[],level:3},{value:"Next steps",id:"next-steps",children:[],level:3},{value:"Coding style",id:"coding-style",children:[],level:3}],c={toc:d};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the builder's section of the Point Network Wiki."),(0,a.kt)("h3",{id:"develop-using-docker-compose"},"Develop using docker compose"),(0,a.kt)("p",null,"First add some alias and functions to your local bash environment. The project comes with a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/.bash_alias"},(0,a.kt)("inlineCode",{parentName:"a"},".bash_alias"))," file that contains a set of alias that are useful for this project. The quickest way to add these alias to your terminal session is to run ",(0,a.kt)("inlineCode",{parentName:"p"},"source .bash_alias"),"."),(0,a.kt)("p",null,"You can also copy the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},".bash_alias")," into your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," file and then run ",(0,a.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile")," that way these alias commands will be available in every terminal session going forward."),(0,a.kt)("p",null,"Clone the pointnetwork repo, cd into and install deps like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:pointnetwork/pointnetwork.git\ncd pointnetwork\nnpm i\n")),(0,a.kt)("p",null,"Next, copy the ",(0,a.kt)("em",{parentName:"p"},".env.e2e.example")," file to ",(0,a.kt)("em",{parentName:"p"},".env.e2e"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.e2e.example .env.e2e\n")),(0,a.kt)("p",null,"If you want to use a Docker image built from the current branch you are working on, then run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"build-e2e\n")),(0,a.kt)("p",null,"With the above out of the way, run the following commands to install package dependencies for the Zapp you are working on."),(0,a.kt)("p",null,"NOTE: Since PointSocial Zapp uses React JS we need to make sure that the site is built locally first. For other Zapps you can check if dependencies are required and you only need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i"),". For example in ",(0,a.kt)("inlineCode",{parentName:"p"},"email.z")," there is a dev dependency required that needs to be installed before running the node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd example/pointsocial.z\nnpm i\nnpm run build       <-- only needed for building Zapps that use frontend libraries like React JS\n")),(0,a.kt)("p",null,"In one terminal start all the services and watch the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_owner")," logs (NOTE: run these commands ",(0,a.kt)("em",{parentName:"p"},"from the root")," of the cloned pointnetwork repo!)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dclean\npoint-e2e up -d\npoint-e2e logs -f website_owner\n")),(0,a.kt)("p",null,"In another terminal (to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"point_node")," node and deploy the site )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dexec point_node\n./scripts/deploy-sites.sh pointsocial.z --contracts\n")),(0,a.kt)("p",null,"The site should deploy sucessefully after a few minutes."),(0,a.kt)("h3",{id:"troubleshooting-the-deployment"},"Troubleshooting the deployment"),(0,a.kt)("p",null,"If you see the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Error: Could not find contract dependency, have you tried npm install?\n")),(0,a.kt)("p",null,"Then its likely that the Zapp you are attempting to deploy is missing dependencies required for the deployment or for the runtime. To fix this, its best to stop the Point Node running, install the Zapp dependencies using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i")," and then restarting the node and trying again."),(0,a.kt)("p",null,"If you see the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Error: >>>>>>>>>>>>>>>>>>>>>>>> SOLIDITY COMPILATION ERRORS <<<<<<<<<<<<<<<<<<<<<<<<\nInternal exception in StandardCompiler::compile: /solidity/libsolidity/interface/CompilerStack.cpp(104): Throw in function solidity::frontend::CompilerStack::CompilerStack(ReadCallback::Callback)\nDynamic exception type: boost::wrapexcept<solidity::langutil::InternalCompilerError>\nstd::exception::what: You shall not have another CompilerStack aside me.\n[solidity::util::tag_comment*] = You shall not have another CompilerStack aside me.\n")),(0,a.kt)("p",null,"... then it is usually due to installing dependencies after the Point Node has started. A simple restart of the Point Node should fix this."),(0,a.kt)("h3",{id:"open-the-deployed-site-in-point-browser"},"Open the deployed site in Point Browser"),(0,a.kt)("p",null,"First create three profiles in Firefox to be able to test connecting to the different nodes quickly and easily. I suggest creating 3 profiles matching the names of the profiles set in your bash alias as mentioned above. NOTE: these profiles only need to be created once."),(0,a.kt)("h3",{id:"create-a-point-network-profile-in-firefox"},"Create a Point Network Profile in Firefox"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new Profile by navigating to ",(0,a.kt)("inlineCode",{parentName:"li"},"about:profiles")," in Firefox.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"alt-text",src:n(58969).Z}))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Enter the profile name in the wizard")),(0,a.kt)("p",null,"Note we need to create 3 profiles so set the name to the profile you are currently creating"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage_provider_docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website_owner_docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website_visitor_docker"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"alt-text",src:n(38180).Z}))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Configure the proxy for the specific profile")),(0,a.kt)("p",null,"Note each profile that you are creating requires a spefific proxy setting. Please configure as shown below based on the profile you are currently adding:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Profile ",(0,a.kt)("inlineCode",{parentName:"li"},"storage_provider_docker")," : set proxy to ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:65500")),(0,a.kt)("li",{parentName:"ul"},"Profile ",(0,a.kt)("inlineCode",{parentName:"li"},"website_owner_docker")," : set proxy to ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:65501")),(0,a.kt)("li",{parentName:"ul"},"Profile ",(0,a.kt)("inlineCode",{parentName:"li"},"website_visitor_docker")," : set proxy to ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:65502"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"alt-text",src:n(43345).Z}))))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Import ",(0,a.kt)("strong",{parentName:"li"},"and trust")," the Point Network CA Certificate")),(0,a.kt)("p",null,"Note the Point Network CA certificate is located in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/tree/develop/client/proxy/certs"},(0,a.kt)("inlineCode",{parentName:"a"},"client/proxy/certs"))," directory."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"alt-text",src:n(28954).Z}))))),(0,a.kt)("p",null,"Now clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointsdk"},"PointSDK")," repo, cd into it and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"point-browser-docker-2")," alias command like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:pointnetwork/pointsdk.git\ncd pointsdk\npoint-browser-docker-2\n")),(0,a.kt)("p",null,"This should open the Point Browser with the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_owner_docker")," profile already configured to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_owner")," node and open ",(0,a.kt)("a",{parentName:"p",href:"https://point"},"https://point"),". Now you can navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://point/identities"},"https://point/identities")," and you should see the deployed pointsocial.z zapp listed, You can open it from there."),(0,a.kt)("h3",{id:"open-the-deployed-site-in-a-second-point-browser"},"Open the deployed site in a second Point Browser"),(0,a.kt)("p",null,"To test out interacting between different Point Network identities we can open another Point Browser, for example the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_visitor")," like so (from the root of the pointsdk repo):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd pointsdk\npoint-browser-docker-3\n")),(0,a.kt)("p",null,"If you have added the above command as an alias and you have setup the Firefox profile you should see a new browser open that is connected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_visitor")," node. You can now post messages between each other on pointsocial!"),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Try to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"store.z")," app. To do so its just a matter of:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the deps in store.z ",(0,a.kt)("inlineCode",{parentName:"li"},"cd example/store.z && npm i")),(0,a.kt)("li",{parentName:"ol"},"Build the store.z site ",(0,a.kt)("inlineCode",{parentName:"li"},"cd example/store.z && npm run build")),(0,a.kt)("li",{parentName:"ol"},"Tear down all the services (from the project root) ",(0,a.kt)("inlineCode",{parentName:"li"},"point-e2e down")),(0,a.kt)("li",{parentName:"ol"},"Clean all Docker containers and volumes ",(0,a.kt)("inlineCode",{parentName:"li"},"dclean")),(0,a.kt)("li",{parentName:"ol"},"Bring up all the services (from the project root) ",(0,a.kt)("inlineCode",{parentName:"li"},"point-e2e up -d")),(0,a.kt)("li",{parentName:"ol"},"Connect back into the ",(0,a.kt)("inlineCode",{parentName:"li"},"website_owner")," running container: ",(0,a.kt)("inlineCode",{parentName:"li"},"dexec point_node")),(0,a.kt)("li",{parentName:"ol"},"Deploy store.z: ",(0,a.kt)("inlineCode",{parentName:"li"},"./scripts/deploy-sites.sh store.z --contracts")),(0,a.kt)("li",{parentName:"ol"},"Open a Point Browser instance to ",(0,a.kt)("a",{parentName:"li",href:"https://store.z"},"https://store.z"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker Compose Logs")),(0,a.kt)("p",null,"To follow the logs of ",(0,a.kt)("em",{parentName:"p"},"all")," the containers simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"point-e2e logs -f")," in the terminal. If you want to follow the logs of a specific container, hten specify the service name as well like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"point-e2e logs -f storage_provider")," (to follow the logs of ",(0,a.kt)("inlineCode",{parentName:"p"},"storage_provider"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker Compose and Truffle Console")),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"blockchain_node")," service is exposed via ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7545")," its therefore possible to use truffle console without any modification."),(0,a.kt)("p",null,"Therefore, ",(0,a.kt)("em",{parentName:"p"},"from the root")," of the cloned pointnetwork repo, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," cd truffle\n truffle console\n")),(0,a.kt)("p",null," The above will connect to the running Ganache blockchain in the Docker ",(0,a.kt)("inlineCode",{parentName:"p"},"blockchain_node")," service."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Docker complete database reset")),(0,a.kt)("p",null," There is a simple command in the alias list above that will tear down all services, remove orphen containers and remove all volumes. ",(0,a.kt)("em",{parentName:"p"},"Only run this command if you are ok with it clearing out your Docker volumes etc"),". Check the alias for its exact functionality. The command run is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dclean\n")),(0,a.kt)("h3",{id:"coding-style"},"Coding style"),(0,a.kt)("p",null,"Following coding style applies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Always use semicolons otherwise ",(0,a.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/"},"dragons may bite you"),"!"),(0,a.kt)("li",{parentName:"ul"},"Use 4 spaces as a default indent for all files and set this in your IDE.")))}u.isMDXComponent=!0},58969:function(e,t,n){t.Z=n.p+"assets/images/1-add-new-firefox-profile-37c9724cacb8bb077c42f710747e9d5a.png"},38180:function(e,t,n){t.Z=n.p+"assets/images/2-add-new-firefox-profile-ab6b602c425b0211f42c1ef5743b34fb.png"},43345:function(e,t,n){t.Z=n.p+"assets/images/3-config-firefox-proxy-c9233d8a3b01f4205679c69d87bbcf7a.png"},28954:function(e,t,n){t.Z=n.p+"assets/images/4-import-ca-firefox-adef8a87b936b2642220e83709135062.png"}}]);