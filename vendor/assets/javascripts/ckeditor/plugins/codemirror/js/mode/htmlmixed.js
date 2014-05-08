﻿CodeMirror.defineMode("htmlmixed",function(g,o){function h(a,b){var c=b.htmlState.tagName,e=d.token(a,b.htmlState);if("script"==c&&/\btag\b/.test(e)&&">"==a.current()){(c=(c=a.string.slice(Math.max(0,a.pos-100),a.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i))?c[1]:"")&&/[\"\']/.test(c.charAt(0))&&(c=c.slice(1,c.length-1));for(var j=0;j<i.length;++j){var f=i[j];if("string"==typeof f.matches?c==f.matches:f.matches.test(c)){f.mode&&(b.token=q,b.localMode=f.mode,b.localState=f.mode.startState&&
f.mode.startState(d.indent(b.htmlState,"")));break}}}else"style"==c&&(/\btag\b/.test(e)&&">"==a.current())&&(b.token=r,b.localMode=k,b.localState=k.startState(d.indent(b.htmlState,"")));return e}function p(a,b,c){var e=a.current(),d=e.search(b);-1<d?a.backUp(e.length-d):e.match(/<\/?$/)&&(a.backUp(e.length),a.match(b,!1)||a.match(e[0]));return c}function q(a,b){return a.match(/^<\/\s*script\s*>/i,!1)?(b.token=h,b.localState=b.localMode=null,h(a,b)):p(a,/<\/\s*script\s*>/,b.localMode.token(a,b.localState))}
function r(a,b){return a.match(/^<\/\s*style\s*>/i,!1)?(b.token=h,b.localState=b.localMode=null,h(a,b)):p(a,/<\/\s*style\s*>/,k.token(a,b.localState))}var d=CodeMirror.getMode(g,{name:"xml",htmlMode:!0}),k=CodeMirror.getMode(g,"css"),i=[],l=o&&o.scriptTypes;i.push({matches:/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,mode:CodeMirror.getMode(g,"javascript")});if(l)for(var m=0;m<l.length;++m){var n=l[m];i.push({matches:n.matches,mode:n.mode&&CodeMirror.getMode(g,n.mode)})}i.push({matches:/./,
mode:CodeMirror.getMode(g,"text/plain")});return{startState:function(){var a=d.startState();return{token:h,localMode:null,localState:null,htmlState:a}},copyState:function(a){if(a.localState)var b=CodeMirror.copyState(a.localMode,a.localState);return{token:a.token,localMode:a.localMode,localState:b,htmlState:CodeMirror.copyState(d,a.htmlState)}},token:function(a,b){return b.token(a,b)},indent:function(a,b){return!a.localMode||/^\s*<\//.test(b)?d.indent(a.htmlState,b):a.localMode.indent?a.localMode.indent(a.localState,
b):CodeMirror.Pass},electricChars:"/{}:",innerMode:function(a){return{state:a.localState||a.htmlState,mode:a.localMode||d}}}},"xml","javascript","css");CodeMirror.defineMIME("text/html","htmlmixed");