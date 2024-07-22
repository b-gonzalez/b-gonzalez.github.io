!function(){"use strict";var e={};function t(e){const t={type:"Entity",text:e.title,properties:{"Movie Name":{type:"String",basicValue:e.title||""},"Release Year":{type:"Double",basicValue:e.originalReleaseYear||0},"Release Date":{type:"String",basicValue:e.originalReleaseDate||""},Runtime:{type:"Double",basicValue:e.runtime||0},"Short Description":{type:"String",basicValue:e.shortDescription||""},itunes_currency:{type:"String",basicValue:e.itunes_currency||""},itunes_monetizationType:{type:"String",basicValue:e.itunes_monetizationType||""},itunes_presentationType:{type:"String",basicValue:e.itunes_presentationType||""},itunes_retailPrice:{type:"String",basicValue:e.itunes_retailPrice||""},itunes_retailPriceValue:{type:"Double",basicValue:e.itunes_retailPriceValue||0},amazon_currency:{type:"String",basicValue:e.amazon_currency||""},amazon_monetizationType:{type:"String",basicValue:e.amazon_monetizationType||""},amazon_presentationType:{type:"String",basicValue:e.amazon_presentationType||""},amazon_retailPrice:{type:"String",basicValue:e.amazon_retailPrice||""},amazon_retailPriceValue:{type:"Double",basicValue:e.amazon_retailPriceValue||0},vudu_currency:{type:"String",basicValue:e.vudu_currency||""},vudu_monetizationType:{type:"String",basicValue:e.vudu_monetizationType||""},vudu_presentationType:{type:"String",basicValue:e.vudu_presentationType||""},vudu_retailPrice:{type:"String",basicValue:e.vudu_retailPrice||""},vudu_retailPriceValue:{type:"Double",basicValue:e.vudu_retailPriceValue||0},amctheatresondemand_currency:{type:"String",basicValue:e.amctheatresondemand_currency||""},amctheatresondemand_monetizationType:{type:"String",basicValue:e.amctheatresondemand_monetizationType||""},amctheatresondemand_presentationType:{type:"String",basicValue:e.amctheatresondemand_presentationType||""},amctheatresondemand_retailPrice:{type:"String",basicValue:e.amctheatresondemand_retailPrice||""},amctheatresondemand_retailPriceValue:{type:"Double",basicValue:e.amctheatresondemand_retailPriceValue||0},microsoft_currency:{type:"String",basicValue:e.microsoft_currency||""},microsoft_monetizationType:{type:"String",basicValue:e.microsoft_monetizationType||""},microsoft_presentationType:{type:"String",basicValue:e.microsoft_presentationType||""},microsoft_retailPrice:{type:"String",basicValue:e.microsoft_retailPrice||""},microsoft_retailPriceValue:{type:"Double",basicValue:e.microsoft_retailPriceValue||0}},layouts:{compact:{icon:Excel.EntityCompactLayoutIcons.moviesAndTv},card:{title:{property:"Movie Name"},sections:[{layout:"List",title:"iTunes",collapsed:!0,properties:["itunes_currency","itunes_monetizationType","itunes_presentationType","itunes_retailPrice","itunes_retailPriceValue"]},{layout:"List",title:"Amazon",collapsed:!0,properties:["amazon_currency","amazon_monetizationType","amazon_presentationType","amazon_retailPrice","amazon_retailPriceValue"]},{layout:"List",title:"Vudu",collapsed:!0,properties:["vudu_currency","vudu_monetizationType","vudu_presentationType","vudu_retailPrice","vudu_retailPriceValue"]},{layout:"List",title:"AMC Theatres On Demand",collapsed:!0,properties:["amctheatresondemand_currency","amctheatresondemand_monetizationType","amctheatresondemand_presentationType","amctheatresondemand_retailPrice","amctheatresondemand_retailPriceValue"]},{layout:"List",title:"Microsoft",collapsed:!0,properties:["microsoft_currency","microsoft_monetizationType","microsoft_presentationType","microsoft_retailPrice","microsoft_retailPriceValue"]}]}},provider:{description:"JustWatch - The Streaming Guide",logoSourceAddress:"https://m.media-amazon.com/images/I/51R8OjhFkBL.png",logoTargetAddress:`https://www.justwatch.com/${e.fullPath}`}};return""!==e.posterUrl&&(t.properties.Image={type:"WebImage",address:`https://images.justwatch.com${e.posterUrl}`||""},t.layouts.card.mainImage={property:"Image"}),t}function a(e){const t={type:"Entity",text:e.title,properties:{"Movie Name":{type:"String",basicValue:e.title||""},"Release Year":{type:"Double",basicValue:e.originalReleaseYear||0},"Release Date":{type:"String",basicValue:e.originalReleaseDate||""},Runtime:{type:"Double",basicValue:e.runtime||0},"Short Description":{type:"String",basicValue:e.shortDescription||""}},layouts:{compact:{icon:Excel.EntityCompactLayoutIcons.moviesAndTv},card:{title:{property:"Movie Name"},sections:[]}},provider:{description:"JustWatch - The Streaming Guide",logoSourceAddress:"https://m.media-amazon.com/images/I/51R8OjhFkBL.png",logoTargetAddress:`https://www.justwatch.com/${e.fullPath}`}};return""!==e.posterUrl&&(t.properties.Image={type:"WebImage",address:`https://images.justwatch.com${e.posterUrl}`||""},t.layouts.card.mainImage={property:"Image"}),t}e.d=function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};async function r(e){let t=JSON.stringify({operationName:"GetNodeByUrlPath",variables:{country:(a=e).replace("https://www.justwatch.com","").split("/")[1].toUpperCase(),language:"en",urlPath:a,formatPoster:"JPG",profile:"S718"},query:"\n  fragment Movie on MovieOrShow {\n    content(country: $country, language: $language) {\n      title\n      fullPath\n      originalReleaseYear\n      originalReleaseDate\n      runtime\n      shortDescription\n      posterUrl(profile: $profile, format: $formatPoster)\n    }\n    offers(country: $country, platform: WEB) {\n      monetizationType\n      presentationType\n      retailPriceValue\n      currency\n      lastChangeRetailPriceValue\n      package {\n        clearName\n        technicalName\n      }\n    }\n  }\n\n  fragment Node on Node {\n      __typename\n      ...Movie\n  }\n\n  query GetNodeByUrlPath($urlPath: String!, $country: Country!, $language: Language!, $formatPoster: ImageFormat, $profile: PosterProfile) {\n    urlV2(fullPath: $urlPath) {\n        node {\n            ...Node\n        }\n    }\n  }\n"});var a;let r=await fetch("https://apis.justwatch.com/graphql",{method:"POST",mode:"no-cors",headers:void 0,body:t});if(200===r.status){let e=await r.json(),t=function(e){return{title:e.title,fullPath:e.fullPath,originalReleaseYear:e.originalReleaseYear,originalReleaseDate:e.originalReleaseDate,runtime:e.runtime,shortDescription:e.shortDescription,posterUrl:e.posterUrl}}(e.data.urlV2.node.content),a=function(e){let t=e.filter((e=>"BUY"===e.monetizationType&&null!==e.retailPrice&&"USD"===e.currency&&"HD"===e.presentationType||"_4k"===e.presentationType)),a={};return t.map((e=>{let t=e.package.technicalName;return a[`${t}_monetizationType`]=e.monetizationType,a[`${t}_retailPrice`]=e.retailPrice,a[`${t}_currency`]=e.currency,a[`${t}_presentationType`]=e.presentationType,a[`${t}_retailPriceValue`]=e.retailPriceValue,a[`${t}_package`]={clearName:e.package.techName},a})),a}(e.data.urlV2.node.offers);return[{...t,...a}]}console.log(r.status)}CustomFunctions.associate("MOVIESEARCH",(async function(e,a){const i={type:"Error",errorType:"NotAvailable"};try{null===a&&(a=!1),console.log(`Searching for ${e}...`);const n=await r(e);return 0==n.length?[[i]]:n.map((e=>[t(e)]))}catch(e){console.error(e)}})),CustomFunctions.associate("MOVIESEARCH2",(async function(e,t){const i={type:"Error",errorType:"NotAvailable"};try{null===t&&(t=!1),console.log(`Searching for ${e}...`);const n=await r(e);return 0==n.length?[[i]]:n.map((e=>[a(e)]))}catch(e){console.error(e)}}))}();
//# sourceMappingURL=functions.js.map