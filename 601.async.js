(self.webpackChunk=self.webpackChunk||[]).push([[601],{79742:function(k,M){"use strict";M.byteLength=y,M.toByteArray=C,M.fromByteArray=I;for(var x=[],a=[],P=typeof Uint8Array!="undefined"?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_=0,w=s.length;_<w;++_)x[_]=s[_],a[s.charCodeAt(_)]=_;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;function c(h){var p=h.length;if(p%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var A=h.indexOf("=");A===-1&&(A=p);var v=A===p?0:4-A%4;return[A,v]}function y(h){var p=c(h),A=p[0],v=p[1];return(A+v)*3/4-v}function u(h,p,A){return(p+A)*3/4-A}function C(h){var p,A=c(h),v=A[0],D=A[1],U=new P(u(h,v,D)),Y=0,L=D>0?v-4:v,B;for(B=0;B<L;B+=4)p=a[h.charCodeAt(B)]<<18|a[h.charCodeAt(B+1)]<<12|a[h.charCodeAt(B+2)]<<6|a[h.charCodeAt(B+3)],U[Y++]=p>>16&255,U[Y++]=p>>8&255,U[Y++]=p&255;return D===2&&(p=a[h.charCodeAt(B)]<<2|a[h.charCodeAt(B+1)]>>4,U[Y++]=p&255),D===1&&(p=a[h.charCodeAt(B)]<<10|a[h.charCodeAt(B+1)]<<4|a[h.charCodeAt(B+2)]>>2,U[Y++]=p>>8&255,U[Y++]=p&255),U}function R(h){return x[h>>18&63]+x[h>>12&63]+x[h>>6&63]+x[h&63]}function F(h,p,A){for(var v,D=[],U=p;U<A;U+=3)v=(h[U]<<16&16711680)+(h[U+1]<<8&65280)+(h[U+2]&255),D.push(R(v));return D.join("")}function I(h){for(var p,A=h.length,v=A%3,D=[],U=16383,Y=0,L=A-v;Y<L;Y+=U)D.push(F(h,Y,Y+U>L?L:Y+U));return v===1?(p=h[A-1],D.push(x[p>>2]+x[p<<4&63]+"==")):v===2&&(p=(h[A-2]<<8)+h[A-1],D.push(x[p>>10]+x[p>>4&63]+x[p<<2&63]+"=")),D.join("")}},48764:function(k,M,x){"use strict";var a;var P=x(79742),s=x(80645),_=x(87300);M.lW=u,a=U,M.h2=50,u.TYPED_ARRAY_SUPPORT=x.g.TYPED_ARRAY_SUPPORT!==void 0?x.g.TYPED_ARRAY_SUPPORT:w(),a=c();function w(){try{var i=new Uint8Array(1);return i.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},i.foo()===42&&typeof i.subarray=="function"&&i.subarray(1,1).byteLength===0}catch(r){return!1}}function c(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function y(i,r){if(c()<r)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(i=new Uint8Array(r),i.__proto__=u.prototype):(i===null&&(i=new u(r)),i.length=r),i}function u(i,r,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(i,r,n);if(typeof i=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return I(this,i)}return C(this,i,r,n)}u.poolSize=8192,u._augment=function(i){return i.__proto__=u.prototype,i};function C(i,r,n,t){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer!="undefined"&&r instanceof ArrayBuffer?A(i,r,n,t):typeof r=="string"?h(i,r,n):v(i,r)}u.from=function(i,r,n){return C(null,i,r,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,typeof Symbol!="undefined"&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0}));function R(i){if(typeof i!="number")throw new TypeError('"size" argument must be a number');if(i<0)throw new RangeError('"size" argument must not be negative')}function F(i,r,n,t){return R(r),r<=0?y(i,r):n!==void 0?typeof t=="string"?y(i,r).fill(n,t):y(i,r).fill(n):y(i,r)}u.alloc=function(i,r,n){return F(null,i,r,n)};function I(i,r){if(R(r),i=y(i,r<0?0:D(r)|0),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<r;++n)i[n]=0;return i}u.allocUnsafe=function(i){return I(null,i)},u.allocUnsafeSlow=function(i){return I(null,i)};function h(i,r,n){if((typeof n!="string"||n==="")&&(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var t=Y(r,n)|0;i=y(i,t);var e=i.write(r,n);return e!==t&&(i=i.slice(0,e)),i}function p(i,r){var n=r.length<0?0:D(r.length)|0;i=y(i,n);for(var t=0;t<n;t+=1)i[t]=r[t]&255;return i}function A(i,r,n,t){if(r.byteLength,n<0||r.byteLength<n)throw new RangeError("'offset' is out of bounds");if(r.byteLength<n+(t||0))throw new RangeError("'length' is out of bounds");return n===void 0&&t===void 0?r=new Uint8Array(r):t===void 0?r=new Uint8Array(r,n):r=new Uint8Array(r,n,t),u.TYPED_ARRAY_SUPPORT?(i=r,i.__proto__=u.prototype):i=p(i,r),i}function v(i,r){if(u.isBuffer(r)){var n=D(r.length)|0;return i=y(i,n),i.length===0||r.copy(i,0,0,n),i}if(r){if(typeof ArrayBuffer!="undefined"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||yr(r.length)?y(i,0):p(i,r);if(r.type==="Buffer"&&_(r.data))return p(i,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function D(i){if(i>=c())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c().toString(16)+" bytes");return i|0}function U(i){return+i!=i&&(i=0),u.alloc(+i)}u.isBuffer=function(r){return!!(r!=null&&r._isBuffer)},u.compare=function(r,n){if(!u.isBuffer(r)||!u.isBuffer(n))throw new TypeError("Arguments must be Buffers");if(r===n)return 0;for(var t=r.length,e=n.length,o=0,f=Math.min(t,e);o<f;++o)if(r[o]!==n[o]){t=r[o],e=n[o];break}return t<e?-1:e<t?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,n){if(!_(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<r.length;++t)n+=r[t].length;var e=u.allocUnsafe(n),o=0;for(t=0;t<r.length;++t){var f=r[t];if(!u.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(e,o),o+=f.length}return e};function Y(i,r){if(u.isBuffer(i))return i.length;if(typeof ArrayBuffer!="undefined"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(i)||i instanceof ArrayBuffer))return i.byteLength;typeof i!="string"&&(i=""+i);var n=i.length;if(n===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return H(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return b(i).length;default:if(t)return H(i).length;r=(""+r).toLowerCase(),t=!0}}u.byteLength=Y;function L(i,r,n){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,r>>>=0,n<=r))return"";for(i||(i="utf8");;)switch(i){case"hex":return ar(this,r,n);case"utf8":case"utf-8":return X(this,r,n);case"ascii":return fr(this,r,n);case"latin1":case"binary":return hr(this,r,n);case"base64":return ur(this,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pr(this,r,n);default:if(t)throw new TypeError("Unknown encoding: "+i);i=(i+"").toLowerCase(),t=!0}}u.prototype._isBuffer=!0;function B(i,r,n){var t=i[r];i[r]=i[n],i[n]=t}u.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<r;n+=2)B(this,n,n+1);return this},u.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<r;n+=4)B(this,n,n+3),B(this,n+1,n+2);return this},u.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<r;n+=8)B(this,n,n+7),B(this,n+1,n+6),B(this,n+2,n+5),B(this,n+3,n+4);return this},u.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?X(this,0,r):L.apply(this,arguments)},u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){var r="",n=M.h2;return this.length>0&&(r=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(r+=" ... ")),"<Buffer "+r+">"},u.prototype.compare=function(r,n,t,e,o){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");if(n===void 0&&(n=0),t===void 0&&(t=r?r.length:0),e===void 0&&(e=0),o===void 0&&(o=this.length),n<0||t>r.length||e<0||o>this.length)throw new RangeError("out of range index");if(e>=o&&n>=t)return 0;if(e>=o)return-1;if(n>=t)return 1;if(n>>>=0,t>>>=0,e>>>=0,o>>>=0,this===r)return 0;for(var f=o-e,l=t-n,E=Math.min(f,l),m=this.slice(e,o),S=r.slice(n,t),g=0;g<E;++g)if(m[g]!==S[g]){f=m[g],l=S[g];break}return f<l?-1:l<f?1:0};function G(i,r,n,t,e){if(i.length===0)return-1;if(typeof n=="string"?(t=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=e?0:i.length-1),n<0&&(n=i.length+n),n>=i.length){if(e)return-1;n=i.length-1}else if(n<0)if(e)n=0;else return-1;if(typeof r=="string"&&(r=u.from(r,t)),u.isBuffer(r))return r.length===0?-1:J(i,r,n,t,e);if(typeof r=="number")return r=r&255,u.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(i,r,n):Uint8Array.prototype.lastIndexOf.call(i,r,n):J(i,[r],n,t,e);throw new TypeError("val must be string, number or Buffer")}function J(i,r,n,t,e){var o=1,f=i.length,l=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(i.length<2||r.length<2)return-1;o=2,f/=2,l/=2,n/=2}function E(j,q){return o===1?j[q]:j.readUInt16BE(q*o)}var m;if(e){var S=-1;for(m=n;m<f;m++)if(E(i,m)===E(r,S===-1?0:m-S)){if(S===-1&&(S=m),m-S+1===l)return S*o}else S!==-1&&(m-=m-S),S=-1}else for(n+l>f&&(n=f-l),m=n;m>=0;m--){for(var g=!0,V=0;V<l;V++)if(E(i,m+V)!==E(r,V)){g=!1;break}if(g)return m}return-1}u.prototype.includes=function(r,n,t){return this.indexOf(r,n,t)!==-1},u.prototype.indexOf=function(r,n,t){return G(this,r,n,t,!0)},u.prototype.lastIndexOf=function(r,n,t){return G(this,r,n,t,!1)};function rr(i,r,n,t){n=Number(n)||0;var e=i.length-n;t?(t=Number(t),t>e&&(t=e)):t=e;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");t>o/2&&(t=o/2);for(var f=0;f<t;++f){var l=parseInt(r.substr(f*2,2),16);if(isNaN(l))return f;i[n+f]=l}return f}function nr(i,r,n,t){return O(H(r,i.length-n),i,n,t)}function z(i,r,n,t){return O(wr(r),i,n,t)}function ir(i,r,n,t){return z(i,r,n,t)}function tr(i,r,n,t){return O(b(r),i,n,t)}function er(i,r,n,t){return O(Er(r,i.length-n),i,n,t)}u.prototype.write=function(r,n,t,e){if(n===void 0)e="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")e=n,t=this.length,n=0;else if(isFinite(n))n=n|0,isFinite(t)?(t=t|0,e===void 0&&(e="utf8")):(e=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-n;if((t===void 0||t>o)&&(t=o),r.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var f=!1;;)switch(e){case"hex":return rr(this,r,n,t);case"utf8":case"utf-8":return nr(this,r,n,t);case"ascii":return z(this,r,n,t);case"latin1":case"binary":return ir(this,r,n,t);case"base64":return tr(this,r,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return er(this,r,n,t);default:if(f)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),f=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ur(i,r,n){return r===0&&n===i.length?P.fromByteArray(i):P.fromByteArray(i.slice(r,n))}function X(i,r,n){n=Math.min(i.length,n);for(var t=[],e=r;e<n;){var o=i[e],f=null,l=o>239?4:o>223?3:o>191?2:1;if(e+l<=n){var E,m,S,g;switch(l){case 1:o<128&&(f=o);break;case 2:E=i[e+1],(E&192)===128&&(g=(o&31)<<6|E&63,g>127&&(f=g));break;case 3:E=i[e+1],m=i[e+2],(E&192)===128&&(m&192)===128&&(g=(o&15)<<12|(E&63)<<6|m&63,g>2047&&(g<55296||g>57343)&&(f=g));break;case 4:E=i[e+1],m=i[e+2],S=i[e+3],(E&192)===128&&(m&192)===128&&(S&192)===128&&(g=(o&15)<<18|(E&63)<<12|(m&63)<<6|S&63,g>65535&&g<1114112&&(f=g))}}f===null?(f=65533,l=1):f>65535&&(f-=65536,t.push(f>>>10&1023|55296),f=56320|f&1023),t.push(f),e+=l}return or(t)}var Z=4096;function or(i){var r=i.length;if(r<=Z)return String.fromCharCode.apply(String,i);for(var n="",t=0;t<r;)n+=String.fromCharCode.apply(String,i.slice(t,t+=Z));return n}function fr(i,r,n){var t="";n=Math.min(i.length,n);for(var e=r;e<n;++e)t+=String.fromCharCode(i[e]&127);return t}function hr(i,r,n){var t="";n=Math.min(i.length,n);for(var e=r;e<n;++e)t+=String.fromCharCode(i[e]);return t}function ar(i,r,n){var t=i.length;(!r||r<0)&&(r=0),(!n||n<0||n>t)&&(n=t);for(var e="",o=r;o<n;++o)e+=xr(i[o]);return e}function pr(i,r,n){for(var t=i.slice(r,n),e="",o=0;o<t.length;o+=2)e+=String.fromCharCode(t[o]+t[o+1]*256);return e}u.prototype.slice=function(r,n){var t=this.length;r=~~r,n=n===void 0?t:~~n,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),n<0?(n+=t,n<0&&(n=0)):n>t&&(n=t),n<r&&(n=r);var e;if(u.TYPED_ARRAY_SUPPORT)e=this.subarray(r,n),e.__proto__=u.prototype;else{var o=n-r;e=new u(o,void 0);for(var f=0;f<o;++f)e[f]=this[f+r]}return e};function T(i,r,n){if(i%1!==0||i<0)throw new RangeError("offset is not uint");if(i+r>n)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUIntLE=function(r,n,t){r=r|0,n=n|0,t||T(r,n,this.length);for(var e=this[r],o=1,f=0;++f<n&&(o*=256);)e+=this[r+f]*o;return e},u.prototype.readUIntBE=function(r,n,t){r=r|0,n=n|0,t||T(r,n,this.length);for(var e=this[r+--n],o=1;n>0&&(o*=256);)e+=this[r+--n]*o;return e},u.prototype.readUInt8=function(r,n){return n||T(r,1,this.length),this[r]},u.prototype.readUInt16LE=function(r,n){return n||T(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUInt16BE=function(r,n){return n||T(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUInt32LE=function(r,n){return n||T(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUInt32BE=function(r,n){return n||T(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readIntLE=function(r,n,t){r=r|0,n=n|0,t||T(r,n,this.length);for(var e=this[r],o=1,f=0;++f<n&&(o*=256);)e+=this[r+f]*o;return o*=128,e>=o&&(e-=Math.pow(2,8*n)),e},u.prototype.readIntBE=function(r,n,t){r=r|0,n=n|0,t||T(r,n,this.length);for(var e=n,o=1,f=this[r+--e];e>0&&(o*=256);)f+=this[r+--e]*o;return o*=128,f>=o&&(f-=Math.pow(2,8*n)),f},u.prototype.readInt8=function(r,n){return n||T(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,n){n||T(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t},u.prototype.readInt16BE=function(r,n){n||T(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t},u.prototype.readInt32LE=function(r,n){return n||T(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,n){return n||T(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readFloatLE=function(r,n){return n||T(r,4,this.length),s.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,n){return n||T(r,4,this.length),s.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,n){return n||T(r,8,this.length),s.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,n){return n||T(r,8,this.length),s.read(this,r,!1,52,8)};function d(i,r,n,t,e,o){if(!u.isBuffer(i))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<o)throw new RangeError('"value" argument is out of bounds');if(n+t>i.length)throw new RangeError("Index out of range")}u.prototype.writeUIntLE=function(r,n,t,e){if(r=+r,n=n|0,t=t|0,!e){var o=Math.pow(2,8*t)-1;d(this,r,n,t,o,0)}var f=1,l=0;for(this[n]=r&255;++l<t&&(f*=256);)this[n+l]=r/f&255;return n+t},u.prototype.writeUIntBE=function(r,n,t,e){if(r=+r,n=n|0,t=t|0,!e){var o=Math.pow(2,8*t)-1;d(this,r,n,t,o,0)}var f=t-1,l=1;for(this[n+f]=r&255;--f>=0&&(l*=256);)this[n+f]=r/l&255;return n+t},u.prototype.writeUInt8=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,1,255,0),u.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[n]=r&255,n+1};function N(i,r,n,t){r<0&&(r=65535+r+1);for(var e=0,o=Math.min(i.length-n,2);e<o;++e)i[n+e]=(r&255<<8*(t?e:1-e))>>>(t?e:1-e)*8}u.prototype.writeUInt16LE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8):N(this,r,n,!0),n+2},u.prototype.writeUInt16BE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>8,this[n+1]=r&255):N(this,r,n,!1),n+2};function W(i,r,n,t){r<0&&(r=4294967295+r+1);for(var e=0,o=Math.min(i.length-n,4);e<o;++e)i[n+e]=r>>>(t?e:3-e)*8&255}u.prototype.writeUInt32LE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[n+3]=r>>>24,this[n+2]=r>>>16,this[n+1]=r>>>8,this[n]=r&255):W(this,r,n,!0),n+4},u.prototype.writeUInt32BE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255):W(this,r,n,!1),n+4},u.prototype.writeIntLE=function(r,n,t,e){if(r=+r,n=n|0,!e){var o=Math.pow(2,8*t-1);d(this,r,n,t,o-1,-o)}var f=0,l=1,E=0;for(this[n]=r&255;++f<t&&(l*=256);)r<0&&E===0&&this[n+f-1]!==0&&(E=1),this[n+f]=(r/l>>0)-E&255;return n+t},u.prototype.writeIntBE=function(r,n,t,e){if(r=+r,n=n|0,!e){var o=Math.pow(2,8*t-1);d(this,r,n,t,o-1,-o)}var f=t-1,l=1,E=0;for(this[n+f]=r&255;--f>=0&&(l*=256);)r<0&&E===0&&this[n+f+1]!==0&&(E=1),this[n+f]=(r/l>>0)-E&255;return n+t},u.prototype.writeInt8=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,1,127,-128),u.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[n]=r&255,n+1},u.prototype.writeInt16LE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8):N(this,r,n,!0),n+2},u.prototype.writeInt16BE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>8,this[n+1]=r&255):N(this,r,n,!1),n+2},u.prototype.writeInt32LE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8,this[n+2]=r>>>16,this[n+3]=r>>>24):W(this,r,n,!0),n+4},u.prototype.writeInt32BE=function(r,n,t){return r=+r,n=n|0,t||d(this,r,n,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255):W(this,r,n,!1),n+4};function K(i,r,n,t,e,o){if(n+t>i.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Q(i,r,n,t,e){return e||K(i,r,n,4,34028234663852886e22,-34028234663852886e22),s.write(i,r,n,t,23,4),n+4}u.prototype.writeFloatLE=function(r,n,t){return Q(this,r,n,!0,t)},u.prototype.writeFloatBE=function(r,n,t){return Q(this,r,n,!1,t)};function $(i,r,n,t,e){return e||K(i,r,n,8,17976931348623157e292,-17976931348623157e292),s.write(i,r,n,t,52,8),n+8}u.prototype.writeDoubleLE=function(r,n,t){return $(this,r,n,!0,t)},u.prototype.writeDoubleBE=function(r,n,t){return $(this,r,n,!1,t)},u.prototype.copy=function(r,n,t,e){if(t||(t=0),!e&&e!==0&&(e=this.length),n>=r.length&&(n=r.length),n||(n=0),e>0&&e<t&&(e=t),e===t||r.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-n<e-t&&(e=r.length-n+t);var o=e-t,f;if(this===r&&t<n&&n<e)for(f=o-1;f>=0;--f)r[f+n]=this[f+t];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(f=0;f<o;++f)r[f+n]=this[f+t];else Uint8Array.prototype.set.call(r,this.subarray(t,t+o),n);return o},u.prototype.fill=function(r,n,t,e){if(typeof r=="string"){if(typeof n=="string"?(e=n,n=0,t=this.length):typeof t=="string"&&(e=t,t=this.length),r.length===1){var o=r.charCodeAt(0);o<256&&(r=o)}if(e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e)}else typeof r=="number"&&(r=r&255);if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;n=n>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var f;if(typeof r=="number")for(f=n;f<t;++f)this[f]=r;else{var l=u.isBuffer(r)?r:H(new u(r,e).toString()),E=l.length;for(f=0;f<t-n;++f)this[f+n]=l[f%E]}return this};var cr=/[^+\/0-9A-Za-z-_]/g;function lr(i){if(i=sr(i).replace(cr,""),i.length<2)return"";for(;i.length%4!==0;)i=i+"=";return i}function sr(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function xr(i){return i<16?"0"+i.toString(16):i.toString(16)}function H(i,r){r=r||1/0;for(var n,t=i.length,e=null,o=[],f=0;f<t;++f){if(n=i.charCodeAt(f),n>55295&&n<57344){if(!e){if(n>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(f+1===t){(r-=3)>-1&&o.push(239,191,189);continue}e=n;continue}if(n<56320){(r-=3)>-1&&o.push(239,191,189),e=n;continue}n=(e-55296<<10|n-56320)+65536}else e&&(r-=3)>-1&&o.push(239,191,189);if(e=null,n<128){if((r-=1)<0)break;o.push(n)}else if(n<2048){if((r-=2)<0)break;o.push(n>>6|192,n&63|128)}else if(n<65536){if((r-=3)<0)break;o.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((r-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return o}function wr(i){for(var r=[],n=0;n<i.length;++n)r.push(i.charCodeAt(n)&255);return r}function Er(i,r){for(var n,t,e,o=[],f=0;f<i.length&&!((r-=2)<0);++f)n=i.charCodeAt(f),t=n>>8,e=n%256,o.push(e),o.push(t);return o}function b(i){return P.toByteArray(lr(i))}function O(i,r,n,t){for(var e=0;e<t&&!(e+n>=r.length||e>=i.length);++e)r[e+n]=i[e];return e}function yr(i){return i!==i}},87300:function(k){var M={}.toString;k.exports=Array.isArray||function(x){return M.call(x)=="[object Array]"}},80645:function(k,M){M.read=function(x,a,P,s,_){var w,c,y=_*8-s-1,u=(1<<y)-1,C=u>>1,R=-7,F=P?_-1:0,I=P?-1:1,h=x[a+F];for(F+=I,w=h&(1<<-R)-1,h>>=-R,R+=y;R>0;w=w*256+x[a+F],F+=I,R-=8);for(c=w&(1<<-R)-1,w>>=-R,R+=s;R>0;c=c*256+x[a+F],F+=I,R-=8);if(w===0)w=1-C;else{if(w===u)return c?NaN:(h?-1:1)*(1/0);c=c+Math.pow(2,s),w=w-C}return(h?-1:1)*c*Math.pow(2,w-s)},M.write=function(x,a,P,s,_,w){var c,y,u,C=w*8-_-1,R=(1<<C)-1,F=R>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=s?0:w-1,p=s?1:-1,A=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(y=isNaN(a)?1:0,c=R):(c=Math.floor(Math.log(a)/Math.LN2),a*(u=Math.pow(2,-c))<1&&(c--,u*=2),c+F>=1?a+=I/u:a+=I*Math.pow(2,1-F),a*u>=2&&(c++,u/=2),c+F>=R?(y=0,c=R):c+F>=1?(y=(a*u-1)*Math.pow(2,_),c=c+F):(y=a*Math.pow(2,F-1)*Math.pow(2,_),c=0));_>=8;x[P+h]=y&255,h+=p,y/=256,_-=8);for(c=c<<_|y,C+=_;C>0;x[P+h]=c&255,h+=p,c/=256,C-=8);x[P+h-p]|=A*128}},74704:function(k,M,x){var a=x(86116);function P(s,_){var w=typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(!w){if(Array.isArray(s)||(w=a(s))||_&&s&&typeof s.length=="number"){w&&(s=w);var c=0,y=function(){};return{s:y,n:function(){return c>=s.length?{done:!0}:{done:!1,value:s[c++]}},e:function(I){throw I},f:y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=!0,C=!1,R;return{s:function(){w=w.call(s)},n:function(){var I=w.next();return u=I.done,I},e:function(I){C=!0,R=I},f:function(){try{!u&&w.return!=null&&w.return()}finally{if(C)throw R}}}}k.exports=P,k.exports.__esModule=!0,k.exports.default=k.exports}}]);
