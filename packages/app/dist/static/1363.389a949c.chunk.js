"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1363,1735,6406],{11735:function(Q,U,O){O.r(U),O.d(U,{a:function(){return w},m:function(){return $}});var Y=O(26312),G=Object.defineProperty,B=(R,T)=>G(R,"name",{value:T,configurable:!0});function W(R,T){return T.forEach(function(S){S&&typeof S!="string"&&!Array.isArray(S)&&Object.keys(S).forEach(function(k){if(k!=="default"&&!(k in R)){var g=Object.getOwnPropertyDescriptor(S,k);Object.defineProperty(R,k,g.get?g:{enumerable:!0,get:function(){return S[k]}})}})}),Object.freeze(R)}B(W,"_mergeNamespaces");var w={exports:{}};(function(R,T){(function(S){S(Y.a.exports)})(function(S){var k=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),g=S.Pos,h={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function p(d){return d&&d.bracketRegex||/[(){}[\]]/}B(p,"bracketRegex");function I(d,m,C){var P=d.getLineHandle(m.line),A=m.ch-1,y=C&&C.afterCursor;y==null&&(y=/(^| )cm-fat-cursor($| )/.test(d.getWrapperElement().className));var f=p(C),o=!y&&A>=0&&f.test(P.text.charAt(A))&&h[P.text.charAt(A)]||f.test(P.text.charAt(A+1))&&h[P.text.charAt(++A)];if(!o)return null;var s=o.charAt(1)==">"?1:-1;if(C&&C.strict&&s>0!=(A==m.ch))return null;var c=d.getTokenTypeAt(g(m.line,A+1)),e=D(d,g(m.line,A+(s>0?1:0)),s,c,C);return e==null?null:{from:g(m.line,A),to:e&&e.pos,match:e&&e.ch==o.charAt(0),forward:s>0}}B(I,"findMatchingBracket");function D(d,m,C,P,A){for(var y=A&&A.maxScanLineLength||1e4,f=A&&A.maxScanLines||1e3,o=[],s=p(A),c=C>0?Math.min(m.line+f,d.lastLine()+1):Math.max(d.firstLine()-1,m.line-f),e=m.line;e!=c;e+=C){var t=d.getLine(e);if(t){var n=C>0?0:t.length-1,r=C>0?t.length:-1;if(!(t.length>y))for(e==m.line&&(n=m.ch-(C<0?1:0));n!=r;n+=C){var l=t.charAt(n);if(s.test(l)&&(P===void 0||(d.getTokenTypeAt(g(e,n+1))||"")==(P||""))){var a=h[l];if(a&&a.charAt(1)==">"==C>0)o.push(l);else if(o.length)o.pop();else return{pos:g(e,n),ch:l}}}}}return e-C==(C>0?d.lastLine():d.firstLine())?!1:null}B(D,"scanForBracket");function K(d,m,C){for(var P=d.state.matchBrackets.maxHighlightLineLength||1e3,A=C&&C.highlightNonMatching,y=[],f=d.listSelections(),o=0;o<f.length;o++){var s=f[o].empty()&&I(d,f[o].head,C);if(s&&(s.match||A!==!1)&&d.getLine(s.from.line).length<=P){var c=s.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";y.push(d.markText(s.from,g(s.from.line,s.from.ch+1),{className:c})),s.to&&d.getLine(s.to.line).length<=P&&y.push(d.markText(s.to,g(s.to.line,s.to.ch+1),{className:c}))}}if(y.length){k&&d.state.focused&&d.focus();var e=B(function(){d.operation(function(){for(var t=0;t<y.length;t++)y[t].clear()})},"clear");if(m)setTimeout(e,800);else return e}}B(K,"matchBrackets");function F(d){d.operation(function(){d.state.matchBrackets.currentlyHighlighted&&(d.state.matchBrackets.currentlyHighlighted(),d.state.matchBrackets.currentlyHighlighted=null),d.state.matchBrackets.currentlyHighlighted=K(d,!1,d.state.matchBrackets)})}B(F,"doMatchBrackets");function E(d){d.state.matchBrackets&&d.state.matchBrackets.currentlyHighlighted&&(d.state.matchBrackets.currentlyHighlighted(),d.state.matchBrackets.currentlyHighlighted=null)}B(E,"clearHighlighted"),S.defineOption("matchBrackets",!1,function(d,m,C){C&&C!=S.Init&&(d.off("cursorActivity",F),d.off("focus",F),d.off("blur",E),E(d)),m&&(d.state.matchBrackets=typeof m=="object"?m:{},d.on("cursorActivity",F),d.on("focus",F),d.on("blur",E))}),S.defineExtension("matchBrackets",function(){K(this,!0)}),S.defineExtension("findMatchingBracket",function(d,m,C){return(C||typeof m=="boolean")&&(C?(C.strict=m,m=C):m=m?{strict:!0}:null),I(this,d,m)}),S.defineExtension("scanForBracket",function(d,m,C,P){return D(this,d,m,C,P)})})})();var z=w.exports,$=Object.freeze(W({__proto__:null,[Symbol.toStringTag]:"Module",default:z},[w.exports]))},66406:function(Q,U,O){O.r(U),O.d(U,{a:function(){return w},s:function(){return $}});var Y=O(26312),G=Object.defineProperty,B=(R,T)=>G(R,"name",{value:T,configurable:!0});function W(R,T){return T.forEach(function(S){S&&typeof S!="string"&&!Array.isArray(S)&&Object.keys(S).forEach(function(k){if(k!=="default"&&!(k in R)){var g=Object.getOwnPropertyDescriptor(S,k);Object.defineProperty(R,k,g.get?g:{enumerable:!0,get:function(){return S[k]}})}})}),Object.freeze(R)}B(W,"_mergeNamespaces");var w={exports:{}};(function(R,T){(function(S){S(Y.a.exports)})(function(S){var k=S.Pos;function g(f){var o=f.flags;return o!=null?o:(f.ignoreCase?"i":"")+(f.global?"g":"")+(f.multiline?"m":"")}B(g,"regexpFlags");function h(f,o){for(var s=g(f),c=s,e=0;e<o.length;e++)c.indexOf(o.charAt(e))==-1&&(c+=o.charAt(e));return s==c?f:new RegExp(f.source,c)}B(h,"ensureFlags");function p(f){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(f.source)}B(p,"maybeMultiline");function I(f,o,s){o=h(o,"g");for(var c=s.line,e=s.ch,t=f.lastLine();c<=t;c++,e=0){o.lastIndex=e;var n=f.getLine(c),r=o.exec(n);if(r)return{from:k(c,r.index),to:k(c,r.index+r[0].length),match:r}}}B(I,"searchRegexpForward");function D(f,o,s){if(!p(o))return I(f,o,s);o=h(o,"gm");for(var c,e=1,t=s.line,n=f.lastLine();t<=n;){for(var r=0;r<e&&!(t>n);r++){var l=f.getLine(t++);c=c==null?l:c+`
`+l}e=e*2,o.lastIndex=s.ch;var a=o.exec(c);if(a){var i=c.slice(0,a.index).split(`
`),u=a[0].split(`
`),v=s.line+i.length-1,L=i[i.length-1].length;return{from:k(v,L),to:k(v+u.length-1,u.length==1?L+u[0].length:u[u.length-1].length),match:a}}}}B(D,"searchRegexpForwardMultiline");function K(f,o,s){for(var c,e=0;e<=f.length;){o.lastIndex=e;var t=o.exec(f);if(!t)break;var n=t.index+t[0].length;if(n>f.length-s)break;(!c||n>c.index+c[0].length)&&(c=t),e=t.index+1}return c}B(K,"lastMatchIn");function F(f,o,s){o=h(o,"g");for(var c=s.line,e=s.ch,t=f.firstLine();c>=t;c--,e=-1){var n=f.getLine(c),r=K(n,o,e<0?0:n.length-e);if(r)return{from:k(c,r.index),to:k(c,r.index+r[0].length),match:r}}}B(F,"searchRegexpBackward");function E(f,o,s){if(!p(o))return F(f,o,s);o=h(o,"gm");for(var c,e=1,t=f.getLine(s.line).length-s.ch,n=s.line,r=f.firstLine();n>=r;){for(var l=0;l<e&&n>=r;l++){var a=f.getLine(n--);c=c==null?a:a+`
`+c}e*=2;var i=K(c,o,t);if(i){var u=c.slice(0,i.index).split(`
`),v=i[0].split(`
`),L=n+u.length,x=u[u.length-1].length;return{from:k(L,x),to:k(L+v.length-1,v.length==1?x+v[0].length:v[v.length-1].length),match:i}}}}B(E,"searchRegexpBackwardMultiline");var d,m;String.prototype.normalize?(d=B(function(f){return f.normalize("NFD").toLowerCase()},"doFold"),m=B(function(f){return f.normalize("NFD")},"noFold")):(d=B(function(f){return f.toLowerCase()},"doFold"),m=B(function(f){return f},"noFold"));function C(f,o,s,c){if(f.length==o.length)return s;for(var e=0,t=s+Math.max(0,f.length-o.length);;){if(e==t)return e;var n=e+t>>1,r=c(f.slice(0,n)).length;if(r==s)return n;r>s?t=n:e=n+1}}B(C,"adjustPos");function P(f,o,s,c){if(!o.length)return null;var e=c?d:m,t=e(o).split(/\r|\n\r?/);e:for(var n=s.line,r=s.ch,l=f.lastLine()+1-t.length;n<=l;n++,r=0){var a=f.getLine(n).slice(r),i=e(a);if(t.length==1){var u=i.indexOf(t[0]);if(u==-1)continue e;var s=C(a,i,u,e)+r;return{from:k(n,C(a,i,u,e)+r),to:k(n,C(a,i,u+t[0].length,e)+r)}}else{var v=i.length-t[0].length;if(i.slice(v)!=t[0])continue e;for(var L=1;L<t.length-1;L++)if(e(f.getLine(n+L))!=t[L])continue e;var x=f.getLine(n+t.length-1),b=e(x),_=t[t.length-1];if(b.slice(0,_.length)!=_)continue e;return{from:k(n,C(a,i,v,e)+r),to:k(n+t.length-1,C(x,b,_.length,e))}}}}B(P,"searchStringForward");function A(f,o,s,c){if(!o.length)return null;var e=c?d:m,t=e(o).split(/\r|\n\r?/);e:for(var n=s.line,r=s.ch,l=f.firstLine()-1+t.length;n>=l;n--,r=-1){var a=f.getLine(n);r>-1&&(a=a.slice(0,r));var i=e(a);if(t.length==1){var u=i.lastIndexOf(t[0]);if(u==-1)continue e;return{from:k(n,C(a,i,u,e)),to:k(n,C(a,i,u+t[0].length,e))}}else{var v=t[t.length-1];if(i.slice(0,v.length)!=v)continue e;for(var L=1,s=n-t.length+1;L<t.length-1;L++)if(e(f.getLine(s+L))!=t[L])continue e;var x=f.getLine(n+1-t.length),b=e(x);if(b.slice(b.length-t[0].length)!=t[0])continue e;return{from:k(n+1-t.length,C(x,b,x.length-t[0].length,e)),to:k(n,C(a,i,v.length,e))}}}}B(A,"searchStringBackward");function y(f,o,s,c){this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=f,s=s?f.clipPos(s):k(0,0),this.pos={from:s,to:s};var e;typeof c=="object"?e=c.caseFold:(e=c,c=null),typeof o=="string"?(e==null&&(e=!1),this.matches=function(t,n){return(t?A:P)(f,o,n,e)}):(o=h(o,"gm"),!c||c.multiline!==!1?this.matches=function(t,n){return(t?E:D)(f,o,n)}:this.matches=function(t,n){return(t?F:I)(f,o,n)})}B(y,"SearchCursor"),y.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(f){var o=this.doc.clipPos(f?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(o=k(o.line,o.ch),f?(o.ch--,o.ch<0&&(o.line--,o.ch=(this.doc.getLine(o.line)||"").length)):(o.ch++,o.ch>(this.doc.getLine(o.line)||"").length&&(o.ch=0,o.line++)),S.cmpPos(o,this.doc.clipPos(o))!=0))return this.atOccurrence=!1;var s=this.matches(f,o);if(this.afterEmptyMatch=s&&S.cmpPos(s.from,s.to)==0,s)return this.pos=s,this.atOccurrence=!0,this.pos.match||!0;var c=k(f?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:c,to:c},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(f,o){if(this.atOccurrence){var s=S.splitLines(f);this.doc.replaceRange(s,this.pos.from,this.pos.to,o),this.pos.to=k(this.pos.from.line+s.length-1,s[s.length-1].length+(s.length==1?this.pos.from.ch:0))}}},S.defineExtension("getSearchCursor",function(f,o,s){return new y(this.doc,f,o,s)}),S.defineDocExtension("getSearchCursor",function(f,o,s){return new y(this,f,o,s)}),S.defineExtension("selectMatches",function(f,o){for(var s=[],c=this.getSearchCursor(f,this.getCursor("from"),o);c.findNext()&&!(S.cmpPos(c.to(),this.getCursor("to"))>0);)s.push({anchor:c.from(),head:c.to()});s.length&&this.setSelections(s,0)})})})();var z=w.exports,$=Object.freeze(W({__proto__:null,[Symbol.toStringTag]:"Module",default:z},[w.exports]))},81363:function(Q,U,O){O.r(U),O.d(U,{s:function(){return T}});var Y=O(26312),G=O(66406),B=O(11735),W=Object.defineProperty,w=(S,k)=>W(S,"name",{value:k,configurable:!0});function z(S,k){return k.forEach(function(g){g&&typeof g!="string"&&!Array.isArray(g)&&Object.keys(g).forEach(function(h){if(h!=="default"&&!(h in S)){var p=Object.getOwnPropertyDescriptor(g,h);Object.defineProperty(S,h,p.get?p:{enumerable:!0,get:function(){return g[h]}})}})}),Object.freeze(S)}w(z,"_mergeNamespaces");var $={exports:{}};(function(S,k){(function(g){g(Y.a.exports,G.a.exports,B.a.exports)})(function(g){var h=g.commands,p=g.Pos;function I(e,t,n){if(n<0&&t.ch==0)return e.clipPos(p(t.line-1));var r=e.getLine(t.line);if(n>0&&t.ch>=r.length)return e.clipPos(p(t.line+1,0));for(var l="start",a,i=t.ch,u=i,v=n<0?0:r.length,L=0;u!=v;u+=n,L++){var x=r.charAt(n<0?u-1:u),b=x!="_"&&g.isWordChar(x)?"w":"o";if(b=="w"&&x.toUpperCase()==x&&(b="W"),l=="start")b!="o"?(l="in",a=b):i=u+n;else if(l=="in"&&a!=b){if(a=="w"&&b=="W"&&n<0&&u--,a=="W"&&b=="w"&&n>0)if(u==i+1){a="w";continue}else u--;break}}return p(t.line,u)}w(I,"findPosSubword");function D(e,t){e.extendSelectionsBy(function(n){return e.display.shift||e.doc.extend||n.empty()?I(e.doc,n.head,t):t<0?n.from():n.to()})}w(D,"moveSubword"),h.goSubwordLeft=function(e){D(e,-1)},h.goSubwordRight=function(e){D(e,1)},h.scrollLineUp=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local");e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},h.scrollLineDown=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1;e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},h.splitSelectionByLine=function(e){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++)for(var l=t[r].from(),a=t[r].to(),i=l.line;i<=a.line;++i)a.line>l.line&&i==a.line&&a.ch==0||n.push({anchor:i==l.line?l:p(i,0),head:i==a.line?a:p(i)});e.setSelections(n,0)},h.singleSelectionTop=function(e){var t=e.listSelections()[0];e.setSelection(t.anchor,t.head,{scroll:!1})},h.selectLine=function(e){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var l=t[r];n.push({anchor:p(l.from().line,0),head:p(l.to().line+1,0)})}e.setSelections(n)};function K(e,t){if(e.isReadOnly())return g.Pass;e.operation(function(){for(var n=e.listSelections().length,r=[],l=-1,a=0;a<n;a++){var i=e.listSelections()[a].head;if(!(i.line<=l)){var u=p(i.line+(t?0:1),0);e.replaceRange(`
`,u,null,"+insertLine"),e.indentLine(u.line,null,!0),r.push({head:u,anchor:u}),l=i.line+1}}e.setSelections(r)}),e.execCommand("indentAuto")}w(K,"insertLine"),h.insertLineAfter=function(e){return K(e,!1)},h.insertLineBefore=function(e){return K(e,!0)};function F(e,t){for(var n=t.ch,r=n,l=e.getLine(t.line);n&&g.isWordChar(l.charAt(n-1));)--n;for(;r<l.length&&g.isWordChar(l.charAt(r));)++r;return{from:p(t.line,n),to:p(t.line,r),word:l.slice(n,r)}}w(F,"wordAt"),h.selectNextOccurrence=function(e){var t=e.getCursor("from"),n=e.getCursor("to"),r=e.state.sublimeFindFullWord==e.doc.sel;if(g.cmpPos(t,n)==0){var l=F(e,t);if(!l.word)return;e.setSelection(l.from,l.to),r=!0}else{var a=e.getRange(t,n),i=r?new RegExp("\\b"+a+"\\b"):a,u=e.getSearchCursor(i,n),v=u.findNext();if(v||(u=e.getSearchCursor(i,p(e.firstLine(),0)),v=u.findNext()),!v||d(e.listSelections(),u.from(),u.to()))return;e.addSelection(u.from(),u.to())}r&&(e.state.sublimeFindFullWord=e.doc.sel)},h.skipAndSelectNextOccurrence=function(e){var t=e.getCursor("anchor"),n=e.getCursor("head");h.selectNextOccurrence(e),g.cmpPos(t,n)!=0&&e.doc.setSelections(e.doc.listSelections().filter(function(r){return r.anchor!=t||r.head!=n}))};function E(e,t){for(var n=e.listSelections(),r=[],l=0;l<n.length;l++){var a=n[l],i=e.findPosV(a.anchor,t,"line",a.anchor.goalColumn),u=e.findPosV(a.head,t,"line",a.head.goalColumn);i.goalColumn=a.anchor.goalColumn!=null?a.anchor.goalColumn:e.cursorCoords(a.anchor,"div").left,u.goalColumn=a.head.goalColumn!=null?a.head.goalColumn:e.cursorCoords(a.head,"div").left;var v={anchor:i,head:u};r.push(a),r.push(v)}e.setSelections(r)}w(E,"addCursorToSelection"),h.addCursorToPrevLine=function(e){E(e,-1)},h.addCursorToNextLine=function(e){E(e,1)};function d(e,t,n){for(var r=0;r<e.length;r++)if(g.cmpPos(e[r].from(),t)==0&&g.cmpPos(e[r].to(),n)==0)return!0;return!1}w(d,"isSelectedRange");var m="(){}[]";function C(e){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var l=t[r],a=l.head,i=e.scanForBracket(a,-1);if(!i)return!1;for(;;){var u=e.scanForBracket(a,1);if(!u)return!1;if(u.ch==m.charAt(m.indexOf(i.ch)+1)){var v=p(i.pos.line,i.pos.ch+1);if(g.cmpPos(v,l.from())==0&&g.cmpPos(u.pos,l.to())==0){if(i=e.scanForBracket(i.pos,-1),!i)return!1}else{n.push({anchor:v,head:u.pos});break}}a=p(u.pos.line,u.pos.ch+1)}}return e.setSelections(n),!0}w(C,"selectBetweenBrackets"),h.selectScope=function(e){C(e)||e.execCommand("selectAll")},h.selectBetweenBrackets=function(e){if(!C(e))return g.Pass};function P(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}w(P,"puncType"),h.goToBracket=function(e){e.extendSelectionsBy(function(t){var n=e.scanForBracket(t.head,1,P(e.getTokenTypeAt(t.head)));if(n&&g.cmpPos(n.pos,t.head)!=0)return n.pos;var r=e.scanForBracket(t.head,-1,P(e.getTokenTypeAt(p(t.head.line,t.head.ch+1))));return r&&p(r.pos.line,r.pos.ch+1)||t.head})},h.swapLineUp=function(e){if(e.isReadOnly())return g.Pass;for(var t=e.listSelections(),n=[],r=e.firstLine()-1,l=[],a=0;a<t.length;a++){var i=t[a],u=i.from().line-1,v=i.to().line;l.push({anchor:p(i.anchor.line-1,i.anchor.ch),head:p(i.head.line-1,i.head.ch)}),i.to().ch==0&&!i.empty()&&--v,u>r?n.push(u,v):n.length&&(n[n.length-1]=v),r=v}e.operation(function(){for(var L=0;L<n.length;L+=2){var x=n[L],b=n[L+1],_=e.getLine(x);e.replaceRange("",p(x,0),p(x+1,0),"+swapLine"),b>e.lastLine()?e.replaceRange(`
`+_,p(e.lastLine()),null,"+swapLine"):e.replaceRange(_+`
`,p(b,0),null,"+swapLine")}e.setSelections(l),e.scrollIntoView()})},h.swapLineDown=function(e){if(e.isReadOnly())return g.Pass;for(var t=e.listSelections(),n=[],r=e.lastLine()+1,l=t.length-1;l>=0;l--){var a=t[l],i=a.to().line+1,u=a.from().line;a.to().ch==0&&!a.empty()&&i--,i<r?n.push(i,u):n.length&&(n[n.length-1]=u),r=u}e.operation(function(){for(var v=n.length-2;v>=0;v-=2){var L=n[v],x=n[v+1],b=e.getLine(L);L==e.lastLine()?e.replaceRange("",p(L-1),p(L),"+swapLine"):e.replaceRange("",p(L,0),p(L+1,0),"+swapLine"),e.replaceRange(b+`
`,p(x,0),null,"+swapLine")}e.scrollIntoView()})},h.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},h.joinLines=function(e){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){for(var l=t[r],a=l.from(),i=a.line,u=l.to().line;r<t.length-1&&t[r+1].from().line==u;)u=t[++r].to().line;n.push({start:i,end:u,anchor:!l.empty()&&a})}e.operation(function(){for(var v=0,L=[],x=0;x<n.length;x++){for(var b=n[x],_=b.anchor&&p(b.anchor.line-v,b.anchor.ch),V,N=b.start;N<=b.end;N++){var M=N-v;N==b.end&&(V=p(M,e.getLine(M).length+1)),M<e.lastLine()&&(e.replaceRange(" ",p(M),p(M+1,/^\s*/.exec(e.getLine(M+1))[0].length)),++v)}L.push({anchor:_||V,head:V})}e.setSelections(L,0)})},h.duplicateLine=function(e){e.operation(function(){for(var t=e.listSelections().length,n=0;n<t;n++){var r=e.listSelections()[n];r.empty()?e.replaceRange(e.getLine(r.head.line)+`
`,p(r.head.line,0)):e.replaceRange(e.getRange(r.from(),r.to()),r.from())}e.scrollIntoView()})};function A(e,t,n){if(e.isReadOnly())return g.Pass;for(var r=e.listSelections(),l=[],a,i=0;i<r.length;i++){var u=r[i];if(!u.empty()){for(var v=u.from().line,L=u.to().line;i<r.length-1&&r[i+1].from().line==L;)L=r[++i].to().line;r[i].to().ch||L--,l.push(v,L)}}l.length?a=!0:l.push(e.firstLine(),e.lastLine()),e.operation(function(){for(var x=[],b=0;b<l.length;b+=2){var _=l[b],V=l[b+1],N=p(_,0),M=p(V),J=e.getRange(N,M,!1);t?J.sort(function(j,H){return j<H?-n:j==H?0:n}):J.sort(function(j,H){var X=j.toUpperCase(),Z=H.toUpperCase();return X!=Z&&(j=X,H=Z),j<H?-n:j==H?0:n}),e.replaceRange(J,N,M),a&&x.push({anchor:N,head:p(V+1,0)})}a&&e.setSelections(x,0)})}w(A,"sortLines"),h.sortLines=function(e){A(e,!0,1)},h.reverseSortLines=function(e){A(e,!0,-1)},h.sortLinesInsensitive=function(e){A(e,!1,1)},h.reverseSortLinesInsensitive=function(e){A(e,!1,-1)},h.nextBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){var n=t.shift(),r=n.find();if(r)return t.push(n),e.setSelection(r.from,r.to)}},h.prevBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){t.unshift(t.pop());var n=t[t.length-1].find();if(!n)t.pop();else return e.setSelection(n.from,n.to)}},h.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var l=t[r].from(),a=t[r].to(),i=t[r].empty()?e.findMarksAt(l):e.findMarks(l,a),u=0;u<i.length;u++)if(i[u].sublimeBookmark){i[u].clear();for(var v=0;v<n.length;v++)n[v]==i[u]&&n.splice(v--,1);break}u==i.length&&n.push(e.markText(l,a,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},h.clearBookmarks=function(e){var t=e.state.sublimeBookmarks;if(t)for(var n=0;n<t.length;n++)t[n].clear();t.length=0},h.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[];if(t)for(var r=0;r<t.length;r++){var l=t[r].find();l?n.push({anchor:l.from,head:l.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)};function y(e,t){e.operation(function(){for(var n=e.listSelections(),r=[],l=[],a=0;a<n.length;a++){var i=n[a];i.empty()?(r.push(a),l.push("")):l.push(t(e.getRange(i.from(),i.to())))}e.replaceSelections(l,"around","case");for(var a=r.length-1,u;a>=0;a--){var i=n[r[a]];if(!(u&&g.cmpPos(i.head,u)>0)){var v=F(e,i.head);u=v.from,e.replaceRange(t(v.word),v.from,v.to)}}})}w(y,"modifyWordOrSelection"),h.smartBackspace=function(e){if(e.somethingSelected())return g.Pass;e.operation(function(){for(var t=e.listSelections(),n=e.getOption("indentUnit"),r=t.length-1;r>=0;r--){var l=t[r].head,a=e.getRange({line:l.line,ch:0},l),i=g.countColumn(a,null,e.getOption("tabSize")),u=e.findPosH(l,-1,"char",!1);if(a&&!/\S/.test(a)&&i%n==0){var v=new p(l.line,g.findColumn(a,i-n,n));v.ch!=l.ch&&(u=v)}e.replaceRange("",u,l,"+delete")}})},h.delLineRight=function(e){e.operation(function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange("",t[n].anchor,p(t[n].to().line),"+delete");e.scrollIntoView()})},h.upcaseAtCursor=function(e){y(e,function(t){return t.toUpperCase()})},h.downcaseAtCursor=function(e){y(e,function(t){return t.toLowerCase()})},h.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},h.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&e.setSelection(e.getCursor(),t)},h.deleteToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();if(t){var n=e.getCursor(),r=t;if(g.cmpPos(n,r)>0){var l=r;r=n,n=l}e.state.sublimeKilled=e.getRange(n,r),e.replaceRange("",n,r)}},h.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},h.sublimeYank=function(e){e.state.sublimeKilled!=null&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},h.showInCenter=function(e){var t=e.cursorCoords(null,"local");e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)};function f(e){var t=e.getCursor("from"),n=e.getCursor("to");if(g.cmpPos(t,n)==0){var r=F(e,t);if(!r.word)return;t=r.from,n=r.to}return{from:t,to:n,query:e.getRange(t,n),word:r}}w(f,"getTarget");function o(e,t){var n=f(e);if(n){var r=n.query,l=e.getSearchCursor(r,t?n.to:n.from);(t?l.findNext():l.findPrevious())?e.setSelection(l.from(),l.to()):(l=e.getSearchCursor(r,t?p(e.firstLine(),0):e.clipPos(p(e.lastLine()))),(t?l.findNext():l.findPrevious())?e.setSelection(l.from(),l.to()):n.word&&e.setSelection(n.from,n.to))}}w(o,"findAndGoTo"),h.findUnder=function(e){o(e,!0)},h.findUnderPrevious=function(e){o(e,!1)},h.findAllUnder=function(e){var t=f(e);if(t){for(var n=e.getSearchCursor(t.query),r=[],l=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&l++;e.setSelections(r,l)}};var s=g.keyMap;s.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Shift-F5":"reverseSortLines","Cmd-F5":"sortLinesInsensitive","Shift-Cmd-F5":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-1":"foldAll","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},g.normalizeKeyMap(s.macSublime),s.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Shift-F9":"reverseSortLines","Ctrl-F9":"sortLinesInsensitive","Shift-Ctrl-F9":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-1":"foldAll","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},g.normalizeKeyMap(s.pcSublime);var c=s.default==s.macDefault;s.sublime=c?s.macSublime:s.pcSublime})})();var R=$.exports,T=Object.freeze(z({__proto__:null,[Symbol.toStringTag]:"Module",default:R},[$.exports]))}}]);})();

//# sourceMappingURL=1363.389a949c.chunk.js.map