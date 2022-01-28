/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/promiseUtils"],(function(t,e,i,s){"use strict";const r={GCExt:249,COMMENT:254,APPExt:255,UNKNOWN:1,IMAGE:44,EOF:59,EXT:33};function a(t){if(!t||0===t.byteLength)return!1;const e=t.constructor===Uint8Array?t:new Uint8Array(t);return 71===e[0]&&73===e[1]&&70===e[2]&&56===e[3]}function n(t){const e=new Uint8ClampedArray(t);let i=6;return[e[i++]+(e[i++]<<8),e[i++]+(e[i++]<<8)]}function o(t){if(!t||0===t.byteLength)return!1;const e=new Uint8Array(t);if(!a(e))return!1;let i=0;for(let s=0,r=e.length-9;s<r&&(0!==e[s]||33!==e[s+1]||249!==e[s+2]||4!==e[s+3]||0!==e[s+8]||44!==e[s+9]&&33!==e[s+9]||(i++,!(i>1)));++s);return i>1}let h=function(){function t(){this.paused=!1,this.playing=!1,this.waitTillDone=!0,this.loading=!1,this.firstFrameOnly=!1,this.frames=[],this.comment="",this.length=0,this.currentFrameNumber=0,this.frameCount=0,this.playSpeed=1,this.lastFrame=null,this.playOnLoad=!0,this.complete=!1,this.interlaceOffsets=[0,4,2,1],this.interlaceSteps=[8,8,4,2],this._lastUsedFrame=-1}t.create=function(){var r=e._asyncToGenerator((function*(e,r){const a=new t;try{yield a._load(e,r)}catch(n){if(!s.isAbortError(n))return new i("invalid-resource",`Could not load PNG: ${n.message}`)}return a}));function a(t,e){return r.apply(this,arguments)}return a}();var a=t.prototype;return a.play=function(){this.playing||(this.paused=!1,this.playing=!0,this._play())},a.pause=function(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)},a.togglePlay=function(){this.paused||!this.playing?this.play():this.pause()},a.bindFrame=function(t,e,i){t.bindTexture(e,i);const s=this.frameChanged();if(s){const t=this.currentFrame,i=t.frameData;e.updateData(0,0,0,t.width,t.height,i),this.updateUsedFrame()}return s},a.seekFrame=function(t){clearTimeout(this.timerID),this.currentFrameNumber=t%this.frames.length,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)},a.seek=function(t){clearTimeout(this.timerID),t<0&&(t=0),t*=1e3,t%=this.length;let e=0;for(;t>this.frames[e].time+this.frames[e].delay&&e<this.frames.length;)e+=1;this.currentFrameNumber=e,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)},a.frameChanged=function(){return this._lastUsedFrame!==this.currentFrameNumber},a.updateUsedFrame=function(){this._lastUsedFrame=this.currentFrameNumber},a._load=function(){var t=e._asyncToGenerator((function*(t,e){try{this.loading=!0,yield this._parse(t,e),this.loading=!1,this.play()}catch(r){if(!s.isAbortError(r))return new i("invalid-resource","Could not parse gif!")}}));function r(e,i){return t.apply(this,arguments)}return r}(),a._parse=function(t,e){const i=new l(t);i.pos+=6,this.width=i.data[i.pos++]+(i.data[i.pos++]<<8),this.height=i.data[i.pos++]+(i.data[i.pos++]<<8);const s=i.data[i.pos++];return this.globalColourCount=1<<1+(7&s),i.pos++,i.pos++,128&s&&(this.globalColourTable=this._parseColourTable(this.globalColourCount,i)),new Promise(((t,s)=>{setTimeout((()=>this._parseBlock(i,t,s,e)),0)}))},a._parseBlock=function(){var t=e._asyncToGenerator((function*(t,e,i,a){if(a&&a.signal&&s.isAborted(a.signal))return void i(s.createAbortError());const n=t.data[t.pos++];if(n===r.IMAGE){if(this._parseImg(t),this.firstFrameOnly)return this._finishedLoading(),void e()}else{if(n===r.EOF)return this._finishedLoading(),void e();this._parseExt(t)}"function"==typeof this.onprogress&&this.onprogress({bytesRead:t.pos,totalBytes:t.data.length,frame:this.frames.length}),setTimeout((()=>this._parseBlock(t,e,i,a)),0)}));function i(e,i,s,r){return t.apply(this,arguments)}return i}(),a._parseColourTable=function(t,e){const i=[];for(let s=0;s<t;s++)i.push([e.data[e.pos++],e.data[e.pos++],e.data[e.pos++]]);return i},a._parseImg=function(t){const e=t=>{const e=this.pixelBufSize/t;this.interlacedBufSize!==this.pixelBufSize&&(this.deinterlaceBuf=new Uint8Array(this.pixelBufSize),this.interlacedBufSize=this.pixelBufSize);let i=0;for(let s=0;s<4;s++)for(let r=this.interlaceOffsets[s];r<e;r+=this.interlaceSteps[s])this.deinterlaceBuf.set(this.pixelBuf.subarray(i,i+t),r*t),i+=t},i={};this.frames.push(i),i.disposalMethod=this.disposalMethod,i.time=this.length,i.delay=10*this.delayTime,this.length+=i.delay,this.transparencyGiven?i.transparencyIndex=this.transparencyIndex:i.transparencyIndex=void 0,i.leftPos=t.data[t.pos++]+(t.data[t.pos++]<<8),i.topPos=t.data[t.pos++]+(t.data[t.pos++]<<8),i.width=t.data[t.pos++]+(t.data[t.pos++]<<8),i.height=t.data[t.pos++]+(t.data[t.pos++]<<8);const s=t.data[t.pos++];i.localColourTableFlag=!!(128&s),i.localColourTableFlag&&(i.localColourTable=this._parseColourTable(1<<1+(7&s),t)),this.pixelBufSize!==i.width*i.height&&(this.pixelBuf=new Uint8Array(i.width*i.height),this.pixelBufSize=i.width*i.height),this._lzwDecode(t.data[t.pos++],t.readSubBlocksB()),64&s?(i.interlaced=!0,e(i.width)):i.interlaced=!1,this._processFrame(i)},a._lzwDecode=function(t,e){let i,s,r,a,n,o,h,l,u;r=s=0;let p=[];const d=1<<t,c=d+1;for(a=t+1,u=!1;!u;){for(o=n,n=0,i=0;i<a;i++)e[r>>3]&1<<(7&r)&&(n|=1<<i),r++;if(n===d){for(p=[],a=t+1,i=0;i<d;i++)p[i]=[i];p[d]=[],p[c]=null}else{if(n===c)return void(u=!0);for(n>=p.length?p.push(p[o].concat(p[o][0])):o!==d&&p.push(p[o].concat(p[n][0])),h=p[n],l=h.length,i=0;i<l;i++)this.pixelBuf[s++]=h[i];p.length===1<<a&&a<12&&a++}}},a._processFrame=function(t){t.image=document.createElement("canvas"),t.image.width=this.width,t.image.height=this.height,t.ctx=t.image.getContext("2d");const e=t.localColourTableFlag?t.localColourTable:this.globalColourTable;null===this.lastFrame&&(this.lastFrame=t);const i=2===this.lastFrame.disposalMethod||3===this.lastFrame.disposalMethod;i||t.ctx.drawImage(this.lastFrame.image,0,0,this.width,this.height);const s=t.ctx.getImageData(t.leftPos,t.topPos,t.width,t.height),r=t.transparencyIndex,a=s.data,n=t.interlaced?this.deinterlaceBuf:this.pixelBuf,o=n.length;let h,l,u=0;for(let p=0;p<o;p++)h=n[p],l=e[h],r!==h?(a[u++]=l[0],a[u++]=l[1],a[u++]=l[2],a[u++]=255):i?(a[u+3]=0,u+=4):u+=4;t.ctx.putImageData(s,t.leftPos,t.topPos),this.lastFrame=t},a._parseExt=function(t){const e=t.data[t.pos++];e===r.GCExt?this._parseGCExt(t):e===r.COMMENT?this.comment+=t.readSubBlocks():e===r.APPExt?this._parseAppExt(t):(e===r.UNKNOWN&&(t.pos+=13),t.readSubBlocks())},a._parseAppExt=function(t){t.pos+=1,"NETSCAPE"===t.getString(8)?t.pos+=8:(t.pos+=3,t.readSubBlocks())},a._parseGCExt=function(t){t.pos++;const e=t.data[t.pos++];this.disposalMethod=(28&e)>>2,this.transparencyGiven=!!(1&e),this.delayTime=t.data[t.pos++]+(t.data[t.pos++]<<8),this.transparencyIndex=t.data[t.pos++],t.pos++},a._finishedLoading=function(){this.loading=!1,this.frameCount=this.frames.length,this.lastFrame=null,this.complete=!0,this.disposalMethod=void 0,this.transparencyGiven=void 0,this.delayTime=void 0,this.transparencyIndex=void 0,this.waitTillDone=void 0,this.pixelBuf=void 0,this.deinterlaceBuf=void 0,this.pixelBufSize=void 0,this.deinterlaceBuf=void 0,this.currentFrameNumber=0,this.frames.length>0&&this._setCurrentFrame(0),this.playOnLoad&&this.play()},a._play=function(){let t,e;0!==this.playSpeed?(this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed),this._setCurrentFrame(this.currentFrameNumber),this.timerID=window.setTimeout((()=>this._play()),t)):this.pause()},a._setCurrentFrame=function(t){const e=this.frames[t];this.currentFrame={frameData:e.image,top:0,left:0,width:this.width,height:this.height}},t}(),l=function(){function t(t){this.pos=0,this.data=new Uint8ClampedArray(t),this.len=this.data.length}var e=t.prototype;return e.getString=function(t){let e="";for(;t--;)e+=String.fromCharCode(this.data[this.pos++]);return e},e.readSubBlocks=function(){let t,e,i="";do{for(e=t=this.data[this.pos++];e--;)i+=String.fromCharCode(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return i},e.readSubBlocksB=function(){let t,e;const i=[];do{for(e=t=this.data[this.pos++];e--;)i.push(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return i},t}();t.default=h,t.getGIFSize=n,t.isAnimatedGIF=o,t.isGIF=a,Object.defineProperty(t,"__esModule",{value:!0})}));
