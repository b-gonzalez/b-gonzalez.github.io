!function(){"use strict";CustomFunctions.associate("ADD",(function(n,t){return n+t})),CustomFunctions.associate("CLOCK",(function(n){var t=setInterval((function(){var t=(new Date).toLocaleTimeString();n.setResult(t)}),1e3);n.onCanceled=function(){clearInterval(t)}})),CustomFunctions.associate("INCREMENT",(function(n,t){var e=0,o=setInterval((function(){e+=n,t.setResult(e)}),1e3);t.onCanceled=function(){clearInterval(o)}})),CustomFunctions.associate("LOG",(function(n){return console.log(n),n})),CustomFunctions.associate("MINUS",(function(n,t){return n-t}))}();
//# sourceMappingURL=functions.js.map