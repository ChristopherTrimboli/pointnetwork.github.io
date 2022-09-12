"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9411],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<s;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31341:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var i=t(83117),a=t(80102),s=(t(67294),t(3905)),r=["components"],o={title:"Multisig",sidebar_label:"Multisig"},l="Multisig",u={unversionedId:"point_chain/users/keys/multisig",id:"point_chain/users/keys/multisig",title:"Multisig",description:"Learn how to generate, sign and broadcast a transaction using the keyring multisig",source:"@site/docs/point_chain/users/keys/multisig.md",sourceDirName:"point_chain/users/keys",slug:"/point_chain/users/keys/multisig",permalink:"/docs/point_chain/users/keys/multisig",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/keys/multisig.md",tags:[],version:"current",lastUpdatedBy:"Brian",lastUpdatedAt:1662999477,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Multisig",sidebar_label:"Multisig"},sidebar:"pnSidebar",previous:{title:"Keyring",permalink:"/docs/point_chain/users/keys/keyring"},next:{title:"Architecture",permalink:"/docs/point_chain/users/technical_concepts/architecture"}},p=[{value:"Generate a Multisig key",id:"generate-a-multisig-key",children:[],level:2},{value:"Signing a transaction",id:"signing-a-transaction",children:[{value:"Step 1: Create the multisig key",id:"step-1-create-the-multisig-key",children:[],level:3},{value:"Step 2: Create the multisig transaction",id:"step-2-create-the-multisig-transaction",children:[],level:3},{value:"Step 3: Sign individually",id:"step-3-sign-individually",children:[],level:3},{value:"Step 4: Create multisignature",id:"step-4-create-multisignature",children:[],level:3},{value:"Step 5: Broadcast transaction",id:"step-5-broadcast-transaction",children:[],level:3}],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"multisig"},"Multisig"),(0,s.kt)("p",null,"Learn how to generate, sign and broadcast a transaction using the keyring multisig"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"multisig account")," is an Point Chain account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"threshold number of signatures required"),(0,s.kt)("li",{parentName:"ul"},"the public keys involved in signing")),(0,s.kt)("p",null,"To sign with a multisig account, the transaction must be signed individually by the different keys specified for the account. Then, the signatures will be combined into a multisignature which can be used to sign the transaction. If fewer than the threshold number of signatures needed are present, the resultant multisignature is considered invalid."),(0,s.kt)("h2",{id:"generate-a-multisig-key"},"Generate a Multisig key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add --multisig=name1,name2,name3[...] --multisig-threshold=K new_key_name\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"K")," is the minimum number of private keys that must have signed the transactions that carry the public key's address as signer."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"--multisig")," flag must contain the name of public keys that will be combined into a public key that will be generated and stored as ",(0,s.kt)("inlineCode",{parentName:"p"},"new_key_name")," in the local database. All names supplied through ",(0,s.kt)("inlineCode",{parentName:"p"},"--multisig")," must already exist in the local database."),(0,s.kt)("p",null,"Unless the flag ",(0,s.kt)("inlineCode",{parentName:"p"},"--nosort")," is set, the order in which the keys are supplied on the command line does not matter, i.e. the following commands generate two identical keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add --multisig=p1,p2,p3 --multisig-threshold=2 multisig_address\npointd keys add --multisig=p2,p3,p1 --multisig-threshold=2 multisig_address\n")),(0,s.kt)("p",null,"Multisig addresses can also be generated on-the-fly and printed through the which command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys show --multisig-threshold=K name1 name2 name3 [...]\n")),(0,s.kt)("h2",{id:"signing-a-transaction"},"Signing a transaction"),(0,s.kt)("h3",{id:"step-1-create-the-multisig-key"},"Step 1: Create the multisig key"),(0,s.kt)("p",null,"Let's assume that you have ",(0,s.kt)("inlineCode",{parentName:"p"},"test1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test2")," want to make a multisig account with ",(0,s.kt)("inlineCode",{parentName:"p"},"test3"),"."),(0,s.kt)("p",null,"First import the public keys of ",(0,s.kt)("inlineCode",{parentName:"p"},"test3")," into your keyring."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pointd keys add \\\n    test3 \\\n    --pubkey=pointpub1addwnpepqgcxazmq6wgt2j4rdfumsfwla0zfk8e5sws3p3zg5dkm9007hmfysxas0u2\n")),(0,s.kt)("p",null,"Generate the multisig key with 2/3 threshold."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pointd keys add \\\n    multi \\\n    --multisig=test1,test2,test3 \\\n    --multisig-threshold=2\n")),(0,s.kt)("p",null,"You can see its address and details:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'pointd keys show multi\n\n- name: multi\n  type: multi\n  address: point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m\n  pubkey: pointpub1ytql0csgqgfzd666axrjzq3mxw59ys6yqcd3ydjvhgs0uzs6kdk5fp4t73gmkl8t6y02yfq7tvfzd666axrjzq3sd69kp5usk492x6nehqjal67ynv0nfqapzrzy3gmdk27la0kjfqfzd666axrjzq6utqt639ka2j3xkncgk65dup06t297ccljmxhvhu3rmk92u3afjuyz9dg9\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n')),(0,s.kt)("p",null,"Let's add 10 POINT to the multisig wallet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tx bank send \\\n    test1 \\\n    point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m \\\n    10000000000000000000apoint \\\n    --chain-id=point_10687_1 \\\n    --gas=auto \\\n    --fees=1000000apoint \\\n    --broadcast-mode=block\n")),(0,s.kt)("h3",{id:"step-2-create-the-multisig-transaction"},"Step 2: Create the multisig transaction"),(0,s.kt)("p",null,"We want to send 5 point from our multisig account to ",(0,s.kt)("inlineCode",{parentName:"p"},"point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tx bank send \\\n    point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft \\\n    point157g6rn6t6k5rl0dl57zha2wx72t633axqyvvwq \\\n    5000000000000000000apoint \\\n    --gas=200000 \\\n    --fees=1000000apoint \\\n    --chain-id=point_10687_1 \\\n    --generate-only > unsignedTx.json\n")),(0,s.kt)("p",null,"The file ",(0,s.kt)("inlineCode",{parentName:"p"},"unsignedTx.json")," contains the unsigned transaction encoded in JSON."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from_address": "point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft",\n        "to_address": "point157g6rn6t6k5rl0dl57zha2wx72t633axqyvvwq",\n        "amount": [\n          {\n            "denom": "apoint",\n            "amount": "5000000000000000000"\n          }\n        ]\n      }\n    ],\n    "memo": "",\n    "timeout_height": "0",\n    "extension_options": [],\n    "non_critical_extension_options": []\n  },\n  "auth_info": {\n    "signer_infos": [],\n    "fee": {\n      "amount": [\n        {\n          "denom": "apoint",\n          "amount": "1000000"\n        }\n      ],\n      "gas_limit": "200000",\n      "payer": "",\n      "granter": ""\n    }\n  },\n  "signatures": []\n}\n')),(0,s.kt)("h3",{id:"step-3-sign-individually"},"Step 3: Sign individually"),(0,s.kt)("p",null,"Sign with ",(0,s.kt)("inlineCode",{parentName:"p"},"test1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test2")," and create individual signatures."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx sign \\\n    unsignedTx.json \\\n    --multisig=point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m \\\n    --from=test1 \\\n    --output-document=test1sig.json \\\n    --chain-id=point_10687_1\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx sign \\\n    unsignedTx.json \\\n    --multisig=point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m \\\n    --from=test2 \\\n    --output-document=test2sig.json \\\n    --chain-id=point_10687_1\n")),(0,s.kt)("h3",{id:"step-4-create-multisignature"},"Step 4: Create multisignature"),(0,s.kt)("p",null,"Combine signatures to sign transaction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx multisign \\\n    unsignedTx.json \\\n    multi \\\n    test1sig.json test2sig.json \\\n    --output-document=signedTx.json \\\n    --chain-id=point_10687_1\n")),(0,s.kt)("p",null,"The TX is now signed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from_address": "point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft",\n        "to_address": "point157g6rn6t6k5rl0dl57zha2wx72t633axqyvvwq",\n        "amount": [\n          {\n            "denom": "apoint",\n            "amount": "5000000000000000000"\n          }\n        ]\n      }\n    ],\n    "memo": "",\n    "timeout_height": "0",\n    "extension_options": [],\n    "non_critical_extension_options": []\n  },\n  "auth_info": {\n    "signer_infos": [\n      {\n        "public_key": {\n          "@type": "/cosmos.crypto.multisig.LegacyAminoPubKey",\n          "threshold": 2,\n          "public_keys": [\n            {\n              "@type": "/cosmos.crypto.secp256k1.PubKey",\n              "key": "ApCzSG8k7Tr4aM6e4OJRExN7cNtvH21L9azbh+uRrvt4"\n            },\n            {\n              "@type": "/cosmos.crypto.secp256k1.PubKey",\n              "key": "Ah91erz8ChNanqLe9ea948rvAiXMCRlR5Ka7EE/c0xUK"\n            },\n            {\n              "@type": "/cosmos.crypto.secp256k1.PubKey",\n              "key": "A0OjtIUCFJM3AobJ9HJTWKP9RZV2+WPcwVjLgsAidrZ/"\n            }\n          ]\n        },\n        "mode_info": {\n          "multi": {\n            "bitarray": {\n              "extra_bits_stored": 3,\n              "elems": "wA=="\n            },\n            "mode_infos": [\n              {\n                "single": {\n                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"\n                }\n              },\n              {\n                "single": {\n                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"\n                }\n              }\n            ]\n          }\n        },\n        "sequence": "1"\n      }\n    ],\n    "fee": {\n      "amount": [\n        {\n          "denom": "apoint",\n          "amount": "1000000"\n        }\n      ],\n      "gas_limit": "200000",\n      "payer": "",\n      "granter": ""\n    }\n  },\n  "signatures": [\n    "CkCEeIbeGc+I1ipZuhp/0KhVNnWAv2tTlvgo5x61lzk1KHmLPV38m/YFurrFt5cm5+fqIXrn+FlOjrJuzBhw8ogYCkCawm9mpXsBHk0CFsE5618fVnvScEkfrzW0c2jCcjqV8EPuj3ut74UWzZyQkwtJGxUWtro9EgnGsB7Di1Gzizst"\n  ]\n}\n')),(0,s.kt)("h3",{id:"step-5-broadcast-transaction"},"Step 5: Broadcast transaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx broadcast signedTx.json \\\n    --chain-id=point_10687_1 \\\n    --broadcast-mode=block\n")))}d.isMDXComponent=!0}}]);