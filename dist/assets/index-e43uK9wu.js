(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="185",Zs={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E0=0,mf=1,T0=2,ll=1,up=2,Pa=3,Ur=0,kn=1,nr=2,ar=0,Ks=1,_f=2,gf=3,xf=4,w0=5,ts=100,A0=101,C0=102,R0=103,P0=104,D0=200,L0=201,I0=202,N0=203,jc=204,th=205,U0=206,O0=207,F0=208,B0=209,k0=210,z0=211,G0=212,V0=213,H0=214,eh=0,nh=1,ih=2,sa=3,rh=4,sh=5,ah=6,oh=7,fp=0,W0=1,X0=2,zi=0,dp=1,pp=2,mp=3,gu=4,_p=5,gp=6,xp=7,vp=300,ds=301,aa=302,tc=303,ec=304,Wl=306,tr=1e3,rr=1001,lh=1002,gn=1003,Y0=1004,So=1005,Cn=1006,nc=1007,ns=1008,ri=1009,Mp=1010,Sp=1011,eo=1012,xu=1013,Wi=1014,Oi=1015,cr=1016,vu=1017,Mu=1018,no=1020,yp=35902,bp=35899,Ep=1021,Tp=1022,Ai=1023,hr=1026,is=1027,wp=1028,Su=1029,ps=1030,yu=1031,bu=1033,cl=33776,hl=33777,ul=33778,fl=33779,ch=35840,hh=35841,uh=35842,fh=35843,dh=36196,ph=37492,mh=37496,_h=37488,gh=37489,El=37490,xh=37491,vh=37808,Mh=37809,Sh=37810,yh=37811,bh=37812,Eh=37813,Th=37814,wh=37815,Ah=37816,Ch=37817,Rh=37818,Ph=37819,Dh=37820,Lh=37821,Ih=36492,Nh=36494,Uh=36495,Oh=36283,Fh=36284,Tl=36285,Bh=36286,q0=3200,kh=0,Z0=1,Er="",_i="srgb",wl="srgb-linear",Al="linear",we="srgb",bs=7680,vf=519,K0=512,$0=513,J0=514,Eu=515,Q0=516,j0=517,Tu=518,t_=519,Mf=35044,Sf="300 es",Fi=2e3,io=2001;function e_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function n_(){const r=Cl("canvas");return r.style.display="block",r}const yf={};function bf(...r){const t="THREE."+r.shift();console.log(t,...r)}function Ap(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function te(...r){r=Ap(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ve(...r){r=Ap(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function $s(...r){const t=r.join(" ");t in yf||(yf[t]=!0,te(...r))}function i_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const r_={[eh]:nh,[ih]:ah,[rh]:oh,[sa]:sh,[nh]:eh,[ah]:ih,[oh]:rh,[sh]:sa};class Vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dl=Math.PI/180,zh=180/Math.PI;function _a(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function s_(r,t){return(r%t+t)%t}function ic(r,t,e){return(1-e)*r+e*t}function va(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const a_={DEG2RAD:dl},cf=class cf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cf.prototype.isVector2=!0;let Mt=cf;class Or{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==u||h!==_){let p=l*f+c*u+h*_+d*g;p<0&&(f=-f,u=-u,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,l=l*m+f*o,c=c*m+u*o,h=h*m+_*o,d=d*m+g*o}else{l=l*m+f*o,c=c*m+u*o,h=h*m+_*o,d=d*m+g*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],_=s[a+3];return t[e]=o*_+h*d+l*u-c*f,t[e+1]=l*_+h*f+c*d-o*u,t[e+2]=c*_+h*u+o*f-l*d,t[e+3]=h*_-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*_,this._y=c*u*d-f*h*_,this._z=c*h*_+f*u*d,this._w=c*h*d-f*u*_;break;case"YXZ":this._x=f*h*d+c*u*_,this._y=c*u*d-f*h*_,this._z=c*h*_-f*u*d,this._w=c*h*d+f*u*_;break;case"ZXY":this._x=f*h*d-c*u*_,this._y=c*u*d+f*h*_,this._z=c*h*_+f*u*d,this._w=c*h*d-f*u*_;break;case"ZYX":this._x=f*h*d-c*u*_,this._y=c*u*d+f*h*_,this._z=c*h*_-f*u*d,this._w=c*h*d+f*u*_;break;case"YZX":this._x=f*h*d+c*u*_,this._y=c*u*d+f*h*_,this._z=c*h*_-f*u*d,this._w=c*h*d-f*u*_;break;case"XZY":this._x=f*h*d-c*u*_,this._y=c*u*d-f*h*_,this._z=c*h*_+f*u*d,this._w=c*h*d+f*u*_;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hf=class hf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ef.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ef.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hf.prototype.isVector3=!0;let U=hf;const rc=new U,Ef=new Or,uf=class uf{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],b=i[4],x=i[7],w=i[2],S=i[5],T=i[8];return s[0]=a*g+o*y+l*w,s[3]=a*p+o*b+l*S,s[6]=a*m+o*x+l*T,s[1]=c*g+h*y+d*w,s[4]=c*p+h*b+d*S,s[7]=c*m+h*x+d*T,s[2]=f*g+u*y+_*w,s[5]=f*p+u*b+_*S,s[8]=f*m+u*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,_=e*d+n*f+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sc.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sc.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uf.prototype.isMatrix3=!0;let re=uf;const sc=new re,Tf=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){const r={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===we&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Er?Al:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wl]:{primaries:t,whitePoint:n,transfer:Al,toXYZ:Tf,fromXYZ:wf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Tf,fromXYZ:wf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),r}const ge=o_();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Es;class l_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Es===void 0&&(Es=Cl("canvas")),Es.width=t.width,Es.height=t.height;const i=Es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=or(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(or(e[n]/255)*255):e[n]=or(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let c_=0;class wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=_a(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ac(i[a].image)):s.push(ac(i[a]))}else s=ac(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ac(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?l_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let h_=0;const oc=new U;class Rn extends Vr{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,n=rr,i=rr,s=Cn,a=ns,o=Ai,l=ri,c=Rn.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=_a(),this.name="",this.source=new wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=vp;Rn.DEFAULT_ANISOTROPY=1;const ff=class ff{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(u+1)/2,w=(m+1)/2,S=(h+f)/4,T=(d+g)/4,v=(_+p)/4;return b>x&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=S/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=S/i,s=v/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=v/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ff.prototype.isVector4=!0;let Ge=ff;class u_ extends Vr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new Rn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new wu(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends u_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cp extends Rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class f_ extends Rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=class Hl{constructor(t,e,n,i,s,a,o,l,c,h,d,f,u,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,f,u,_,g,p)}set(t,e,n,i,s,a,o,l,c,h,d,f,u,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ts.setFromMatrixColumn(t,0).length(),s=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*h,u=a*d,_=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,_=c*h,g=c*d;e[0]=f+g*o,e[4]=_*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,_=c*h,g=c*d;e[0]=f-g*o,e[4]=-a*d,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,_=o*h,g=o*d;e[0]=l*h,e[4]=_*c-u,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=u*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*d,e[8]=_*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+_,e[10]=f-g*d}else if(t.order==="XZY"){const f=a*l,u=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=a*h,e[9]=u*d-_,e[2]=_*d-u,e[6]=o*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(d_,t,p_)}lookAt(t,e,n){const i=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),_r.crossVectors(n,Jn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),_r.crossVectors(n,Jn)),_r.normalize(),yo.crossVectors(Jn,_r),i[0]=_r.x,i[4]=yo.x,i[8]=Jn.x,i[1]=_r.y,i[5]=yo.y,i[9]=Jn.y,i[2]=_r.z,i[6]=yo.z,i[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],b=n[7],x=n[11],w=n[15],S=i[0],T=i[4],v=i[8],E=i[12],C=i[1],P=i[5],D=i[9],H=i[13],V=i[2],N=i[6],G=i[10],O=i[14],Z=i[3],nt=i[7],L=i[11],lt=i[15];return s[0]=a*S+o*C+l*V+c*Z,s[4]=a*T+o*P+l*N+c*nt,s[8]=a*v+o*D+l*G+c*L,s[12]=a*E+o*H+l*O+c*lt,s[1]=h*S+d*C+f*V+u*Z,s[5]=h*T+d*P+f*N+u*nt,s[9]=h*v+d*D+f*G+u*L,s[13]=h*E+d*H+f*O+u*lt,s[2]=_*S+g*C+p*V+m*Z,s[6]=_*T+g*P+p*N+m*nt,s[10]=_*v+g*D+p*G+m*L,s[14]=_*E+g*H+p*O+m*lt,s[3]=y*S+b*C+x*V+w*Z,s[7]=y*T+b*P+x*N+w*nt,s[11]=y*v+b*D+x*G+w*L,s[15]=y*E+b*H+x*O+w*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],_=t[3],g=t[7],p=t[11],m=t[15],y=l*u-c*f,b=o*u-c*d,x=o*f-l*d,w=a*u-c*h,S=a*f-l*h,T=a*d-o*h;return e*(g*y-p*b+m*x)-n*(_*y-p*w+m*S)+i*(_*b-g*w+m*T)-s*(_*x-g*S+p*T)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=e*o-n*a,b=e*l-i*a,x=e*c-s*a,w=n*l-i*o,S=n*c-s*o,T=i*c-s*l,v=h*g-d*_,E=h*p-f*_,C=h*m-u*_,P=d*p-f*g,D=d*m-u*g,H=f*m-u*p,V=y*H-b*D+x*P+w*C-S*E+T*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/V;return t[0]=(o*H-l*D+c*P)*N,t[1]=(i*D-n*H-s*P)*N,t[2]=(g*T-p*S+m*w)*N,t[3]=(f*S-d*T-u*w)*N,t[4]=(l*C-a*H-c*E)*N,t[5]=(e*H-i*C+s*E)*N,t[6]=(p*x-_*T-m*b)*N,t[7]=(h*T-f*x+u*b)*N,t[8]=(a*D-o*C+c*v)*N,t[9]=(n*C-e*D-s*v)*N,t[10]=(_*S-g*x+m*y)*N,t[11]=(d*x-h*S-u*y)*N,t[12]=(o*E-a*P-l*v)*N,t[13]=(e*P-n*E+i*v)*N,t[14]=(g*b-_*w-p*y)*N,t[15]=(h*w-d*b+f*y)*N,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,_=s*d,g=a*h,p=a*d,m=o*d,y=l*c,b=l*h,x=l*d,w=n.x,S=n.y,T=n.z;return i[0]=(1-(g+m))*w,i[1]=(u+x)*w,i[2]=(_-b)*w,i[3]=0,i[4]=(u-x)*S,i[5]=(1-(f+m))*S,i[6]=(p+y)*S,i[7]=0,i[8]=(_+b)*T,i[9]=(p-y)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ts.set(i[0],i[1],i[2]).length();const o=Ts.set(i[4],i[5],i[6]).length(),l=Ts.set(i[8],i[9],i[10]).length();s<0&&(a=-a),yi.copy(this);const c=1/a,h=1/o,d=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,e.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Fi,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Fi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===io)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Fi,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Fi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===io)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Hl.prototype.isMatrix4=!0;let Fe=Hl;const Ts=new U,yi=new Fe,d_=new U(0,0,0),p_=new U(1,1,1),_r=new U,yo=new U,Jn=new U,Af=new Fe,Cf=new Or;class Fr{constructor(t=0,e=0,n=0,i=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Af,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cf.setFromEuler(this),this.setFromQuaternion(Cf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let m_=0;const Rf=new U,ws=new Or,Zi=new Fe,bo=new U,Ma=new U,__=new U,g_=new Or,Pf=new U(1,0,0),Df=new U(0,1,0),Lf=new U(0,0,1),If={type:"added"},x_={type:"removed"},As={type:"childadded",child:null},lc={type:"childremoved",child:null};class mn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new U,e=new Fr,n=new Or,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new re}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Pf,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Lf,t)}translateOnAxis(t,e){return Rf.copy(t).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pf,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ma,bo,this.up):Zi.lookAt(bo,Ma,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(Zi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(If),As.child=t,this.dispatchEvent(As),As.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x_),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(If),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,t,__),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,g_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}mn.DEFAULT_UP=new U(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ne extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v_={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,_=.005;c.inputState.pinching&&f>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function hc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=s_(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=hc(a,s,t+1/3),this.g=hc(a,s,t),this.b=hc(a,s,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=_i){function n(s){s!==void 0&&parseFloat(s)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){const n=Pp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return ge.workingToColorSpace(bn.copy(this),t),Math.round(he(bn.r*255,0,255))*65536+Math.round(he(bn.g*255,0,255))*256+Math.round(he(bn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(bn.copy(this),e);const n=bn.r,i=bn.g,s=bn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=_i){ge.workingToColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,i=bn.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gr),this.setHSL(gr.h+t,gr.s+e,gr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gr),t.getHSL(Eo);const n=ic(gr.h,Eo.h,e),i=ic(gr.s,Eo.s,e),s=ic(gr.l,Eo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new le;le.NAMES=Pp;class Au{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=e}clone(){return new Au(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class M_ extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bi=new U,Ki=new U,uc=new U,$i=new U,Cs=new U,Rs=new U,Nf=new U,fc=new U,dc=new U,pc=new U,mc=new Ge,_c=new Ge,gc=new Ge;class wi{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bi.subVectors(t,e),i.cross(bi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bi.subVectors(i,e),Ki.subVectors(n,e),uc.subVectors(t,e);const a=bi.dot(bi),o=bi.dot(Ki),l=bi.dot(uc),c=Ki.dot(Ki),h=Ki.dot(uc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-u-_,_,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return mc.setScalar(0),_c.setScalar(0),gc.setScalar(0),mc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(mc,s.x),a.addScaledVector(_c,s.y),a.addScaledVector(gc,s.z),a}static isFrontFacing(t,e,n,i){return bi.subVectors(n,e),Ki.subVectors(t,e),bi.cross(Ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),bi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return wi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Cs.subVectors(i,n),Rs.subVectors(s,n),fc.subVectors(t,n);const l=Cs.dot(fc),c=Rs.dot(fc);if(l<=0&&c<=0)return e.copy(n);dc.subVectors(t,i);const h=Cs.dot(dc),d=Rs.dot(dc);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Cs,a);pc.subVectors(t,s);const u=Cs.dot(pc),_=Rs.dot(pc);if(_>=0&&u<=_)return e.copy(s);const g=u*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Rs,o);const p=h*_-u*d;if(p<=0&&d-h>=0&&u-_>=0)return Nf.subVectors(s,i),o=(d-h)/(d-h+(u-_)),e.copy(i).addScaledVector(Nf,o);const m=1/(p+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(Cs,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class xo{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sa),wo.subVectors(this.max,Sa),Ps.subVectors(t.a,Sa),Ds.subVectors(t.b,Sa),Ls.subVectors(t.c,Sa),xr.subVectors(Ds,Ps),vr.subVectors(Ls,Ds),Wr.subVectors(Ps,Ls);let e=[0,-xr.z,xr.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,xr.z,0,-xr.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-xr.y,xr.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!xc(e,Ps,Ds,Ls,wo)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,Ps,Ds,Ls,wo))?!1:(Ao.crossVectors(xr,vr),e=[Ao.x,Ao.y,Ao.z],xc(e,Ps,Ds,Ls,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new U,new U,new U,new U,new U,new U,new U,new U],Ei=new U,To=new xo,Ps=new U,Ds=new U,Ls=new U,xr=new U,vr=new U,Wr=new U,Sa=new U,wo=new U,Ao=new U,Xr=new U;function xc(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Xr.fromArray(r,s);const o=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=t.dot(Xr),c=e.dot(Xr),h=n.dot(Xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const en=new U,Co=new Mt;let S_=0;class Vi extends Vr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mf,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=va(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=va(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=va(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=va(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=va(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),i=Gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mf&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dp extends Vi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lp extends Vi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends Vi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const y_=new xo,ya=new U,vc=new U;class Xl{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):y_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ya.subVectors(t,this.center);const e=ya.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ya,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ya.copy(t.center).add(vc)),this.expandByPoint(ya.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let b_=0;const pi=new Fe,Mc=new mn,Is=new U,Qn=new xo,ba=new xo,fn=new U;class zn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e_(t)?Lp:Dp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Qn.min,ba.min),Qn.expandByPoint(fn),fn.addVectors(Qn.max,ba.max),Qn.expandByPoint(fn)):(Qn.expandByPoint(ba.min),Qn.expandByPoint(ba.max))}Qn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)fn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(t,c),fn.add(Is)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new U,l[v]=new U;const c=new U,h=new U,d=new U,f=new Mt,u=new Mt,_=new Mt,g=new U,p=new U;function m(v,E,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),f.fromBufferAttribute(s,v),u.fromBufferAttribute(s,E),_.fromBufferAttribute(s,C),h.sub(c),d.sub(c),u.sub(f),_.sub(f);const P=1/(u.x*_.y-_.x*u.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-u.y).multiplyScalar(P),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(P),o[v].add(g),o[E].add(g),o[C].add(g),l[v].add(p),l[E].add(p),l[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){const C=y[v],P=C.start,D=C.count;for(let H=P,V=P+D;H<V;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new U,x=new U,w=new U,S=new U;function T(v){w.fromBufferAttribute(i,v),S.copy(w);const E=o[v];b.copy(E),b.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(S,E);const P=x.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,P)}for(let v=0,E=y.length;v<E;++v){const C=y[v],P=C.start,D=C.count;for(let H=P,V=P+D;H<V;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Vi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,u=t.count;f<u;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?u=l[g]*o.data.stride+o.offset:u=l[g]*h;for(let m=0;m<h;m++)f[_++]=c[u++]}return new Vi(f,h,d)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let E_=0;class ga extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=Ks,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=th,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jc&&(n.blendSrc=this.blendSrc),this.blendDst!==th&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qi=new U,Sc=new U,Ro=new U,Mr=new U,yc=new U,Po=new U,bc=new U;class Cu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sc.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Mr.copy(this.origin).sub(Sc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ro),o=Mr.dot(this.direction),l=-Mr.dot(Ro),c=Mr.lengthSq(),h=Math.abs(1-a*a);let d,f,u,_;if(h>0)if(d=a*l-o,f=a*o-l,_=s*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sc).addScaledVector(Ro,f),u}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);const n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,i,s){yc.subVectors(e,t),Po.subVectors(n,t),bc.crossVectors(yc,Po);let a=this.direction.dot(bc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mr.subVectors(this.origin,t);const l=o*this.direction.dot(Po.crossVectors(Mr,Po));if(l<0)return null;const c=o*this.direction.dot(yc.cross(Mr));if(c<0||l+c>a)return null;const h=-o*Mr.dot(bc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tr extends ga{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Uf=new Fe,Yr=new Cu,Do=new Xl,Of=new U,Lo=new U,Io=new U,No=new U,Ec=new U,Uo=new U,Ff=new U,Oo=new U;class Q extends mn{constructor(t=new zn,e=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Ec.fromBufferAttribute(d,t),a?Uo.addScaledVector(Ec,h):Uo.addScaledVector(Ec.sub(e),h))}e.add(Uo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Yr.copy(t.ray).recast(t.near),!(Do.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Do,Of)===null||Yr.origin.distanceToSquared(Of)>(t.far-t.near)**2))&&(Uf.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(Uf),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let x=y,w=b;x<w;x+=3){const S=o.getX(x),T=o.getX(x+1),v=o.getX(x+2);i=Fo(this,m,t,n,c,h,d,S,T,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=_,m=g;p<m;p+=3){const y=o.getX(p),b=o.getX(p+1),x=o.getX(p+2);i=Fo(this,a,t,n,c,h,d,y,b,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=y,w=b;x<w;x+=3){const S=x,T=x+1,v=x+2;i=Fo(this,m,t,n,c,h,d,S,T,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=_,m=g;p<m;p+=3){const y=p,b=p+1,x=p+2;i=Fo(this,a,t,n,c,h,d,y,b,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function T_(r,t,e,n,i,s,a,o){let l;if(t.side===kn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ur,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:r}}function Fo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Lo),r.getVertexPosition(l,Io),r.getVertexPosition(c,No);const h=T_(r,t,e,n,Lo,Io,No,Ff);if(h){const d=new U;wi.getBarycoord(Ff,Lo,Io,No,d),i&&(h.uv=wi.getInterpolatedAttribute(i,o,l,c,d,new Mt)),s&&(h.uv1=wi.getInterpolatedAttribute(s,o,l,c,d,new Mt)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};wi.getNormal(Lo,Io,No,f.normal),h.face=f,h.barycoord=d}return h}class w_ extends Rn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=gn,h=gn,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new U,A_=new U,C_=new re;class br{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Tc.subVectors(n,e).cross(A_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||C_.getNormalMatrix(t),i=this.coplanarPoint(Tc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Xl,R_=new Mt(.5,.5),Bo=new U;class Ru{constructor(t=new br,e=new br,n=new br,i=new br,s=new br,a=new br){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],_=s[8],g=s[9],p=s[10],m=s[11],y=s[12],b=s[13],x=s[14],w=s[15];if(i[0].setComponents(c-a,u-h,m-_,w-y).normalize(),i[1].setComponents(c+a,u+h,m+_,w+y).normalize(),i[2].setComponents(c+o,u+d,m+g,w+b).normalize(),i[3].setComponents(c-o,u-d,m-g,w-b).normalize(),n)i[4].setComponents(l,f,p,x).normalize(),i[5].setComponents(c-l,u-f,m-p,w-x).normalize();else if(i[4].setComponents(c-l,u-f,m-p,w-x).normalize(),e===Fi)i[5].setComponents(c+l,u+f,m+p,w+x).normalize();else if(e===io)i[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(t){qr.center.set(0,0,0);const e=R_.distanceTo(t.center);return qr.radius=.7071067811865476+e,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Bo.x=i.normal.x>0?t.max.x:t.min.x,Bo.y=i.normal.y>0?t.max.y:t.min.y,Bo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ip extends ga{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rl=new U,Pl=new U,Bf=new Fe,Ea=new Cu,ko=new Xl,wc=new U,kf=new U;class P_ extends mn{constructor(t=new zn,e=new Ip){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Rl.fromBufferAttribute(e,i-1),Pl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Rl.distanceTo(Pl);t.setAttribute("lineDistance",new Be(n,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=s,t.ray.intersectsSphere(ko)===!1)return;Bf.copy(i).invert(),Ea.copy(t.ray).applyMatrix4(Bf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=u,p=_-1;g<p;g+=c){const m=h.getX(g),y=h.getX(g+1),b=zo(this,t,Ea,l,m,y,g);b&&e.push(b)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(u),m=zo(this,t,Ea,l,g,p,_-1);m&&e.push(m)}}else{const u=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=u,p=_-1;g<p;g+=c){const m=zo(this,t,Ea,l,g,g+1,g);m&&e.push(m)}if(this.isLineLoop){const g=zo(this,t,Ea,l,_-1,u,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zo(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Rl.fromBufferAttribute(o,i),Pl.fromBufferAttribute(o,s),e.distanceSqToSegment(Rl,Pl,wc,kf)>n)return;wc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(wc);if(!(c<t.near||c>t.far))return{distance:c,point:kf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const zf=new U,Gf=new U;class D_ extends P_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)zf.fromBufferAttribute(e,i),Gf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zf.distanceTo(Gf);t.setAttribute("lineDistance",new Be(n,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Np extends Rn{constructor(t=[],e=ds,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $r extends Rn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oa extends Rn{constructor(t,e,n=Wi,i,s,a,o=gn,l=gn,c,h=hr,d=1){if(h!==hr&&h!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class L_ extends oa{constructor(t,e=Wi,n=ds,i,s,a=gn,o=gn,l,c=hr){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Up extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bt extends zn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2));function _(g,p,m,y,b,x,w,S,T,v,E){const C=x/T,P=w/v,D=x/2,H=w/2,V=S/2,N=T+1,G=v+1;let O=0,Z=0;const nt=new U;for(let L=0;L<G;L++){const lt=L*P-H;for(let St=0;St<N;St++){const Qt=St*C-D;nt[g]=Qt*y,nt[p]=lt*b,nt[m]=V,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[p]=0,nt[m]=S>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(St/T),d.push(1-L/v),O+=1}}for(let L=0;L<v;L++)for(let lt=0;lt<T;lt++){const St=f+lt+N*L,Qt=f+lt+N*(L+1),jt=f+(lt+1)+N*(L+1),Jt=f+(lt+1)+N*L;l.push(St,Qt,Jt),l.push(Qt,jt,Jt),Z+=6}o.addGroup(u,Z,E),u+=Z,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ye extends zn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],f=[],u=[];let _=0;const g=[],p=n/2;let m=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(u,2));function y(){const x=new U,w=new U;let S=0;const T=(e-t)/n;for(let v=0;v<=s;v++){const E=[],C=v/s,P=C*(e-t)+t;for(let D=0;D<=i;D++){const H=D/i,V=H*l+o,N=Math.sin(V),G=Math.cos(V);w.x=P*N,w.y=-C*n+p,w.z=P*G,d.push(w.x,w.y,w.z),x.set(N,T,G).normalize(),f.push(x.x,x.y,x.z),u.push(H,1-C),E.push(_++)}g.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){const C=g[E][v],P=g[E+1][v],D=g[E+1][v+1],H=g[E][v+1];(t>0||E!==0)&&(h.push(C,P,H),S+=3),(e>0||E!==s-1)&&(h.push(P,D,H),S+=3)}c.addGroup(m,S,0),m+=S}function b(x){const w=_,S=new Mt,T=new U;let v=0;const E=x===!0?t:e,C=x===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*C,0),f.push(0,C,0),u.push(.5,.5),_++;const P=_;for(let D=0;D<=i;D++){const V=D/i*l+o,N=Math.cos(V),G=Math.sin(V);T.x=E*G,T.y=p*C,T.z=E*N,d.push(T.x,T.y,T.z),f.push(0,C,0),S.x=N*.5+.5,S.y=G*.5*C+.5,u.push(S.x,S.y),_++}for(let D=0;D<i;D++){const H=w+D,V=P+D;x===!0?h.push(V,V+1,H):h.push(V+1,V,H),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dl extends ye{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Dl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new Mt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,i=[],s=[],a=[],o=new U,l=new Fe;for(let u=0;u<=t;u++){const _=u/t;i[u]=this.getTangentAt(_,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(he(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,_))}a[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos(he(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(u=-u);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],u*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pu extends qi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class I_ extends Pu{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Du(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Vf=new U,Hf=new U,Ac=new Du,Cc=new Du,Rc=new Du;class N_ extends qi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Hf.subVectors(i[0],i[1]).add(i[0]),c=Hf);const d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Vf.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Vf),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Ac.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,g,p),Cc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,g,p),Rc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Cc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Rc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Ac.calc(l),Cc.calc(l),Rc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wf(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function U_(r,t){const e=1-r;return e*e*t}function O_(r,t){return 2*(1-r)*r*t}function F_(r,t){return r*r*t}function za(r,t,e,n){return U_(r,t)+O_(r,e)+F_(r,n)}function B_(r,t){const e=1-r;return e*e*e*t}function k_(r,t){const e=1-r;return 3*e*e*r*t}function z_(r,t){return 3*(1-r)*r*r*t}function G_(r,t){return r*r*r*t}function Ga(r,t,e,n,i){return B_(r,t)+k_(r,e)+z_(r,n)+G_(r,i)}class Op extends qi{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ga(t,i.x,s.x,a.x,o.x),Ga(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V_ extends qi{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ga(t,i.x,s.x,a.x,o.x),Ga(t,i.y,s.y,a.y,o.y),Ga(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fp extends qi{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H_ extends qi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bp extends qi{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(za(t,i.x,s.x,a.x),za(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W_ extends qi{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(za(t,i.x,s.x,a.x),za(t,i.y,s.y,a.y),za(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kp extends qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Wf(o,l.x,c.x,h.x,d.x),Wf(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}}var Gh=Object.freeze({__proto__:null,ArcCurve:I_,CatmullRomCurve3:N_,CubicBezierCurve:Op,CubicBezierCurve3:V_,EllipseCurve:Pu,LineCurve:Fp,LineCurve3:H_,QuadraticBezierCurve:Bp,QuadraticBezierCurve3:W_,SplineCurve:kp});class X_ extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Gh[i.type]().fromJSON(i))}return this}}class Xf extends X_{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fp(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Bp(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Op(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new Pu(t,e,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zp extends Xf{constructor(t){super(t),this.uuid=_a(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Xf().fromJSON(i))}return this}}function Y_(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Gp(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=J_(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,d=l;for(let f=e;f<i;f+=e){const u=r[f],_=r[f+1];u<o&&(o=u),_<l&&(l=_),u>h&&(h=u),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ro(s,a,e,o,l,c,0),a}function Gp(r,t,e,n,i){let s;if(i===lg(r,t,e,n)>0)for(let a=t;a<e;a+=n)s=Yf(a/n|0,r[a],r[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Yf(a/n|0,r[a],r[a+1],s);return s&&la(s,s.next)&&(ao(s),s=s.next),s}function ms(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(la(e,e.next)||Ve(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(r,t,e,n,i,s,a){if(!r)return;!a&&s&&ng(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Z_(r,n,i,s):q_(r)){t.push(l.i,r.i,c.i),ao(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=K_(ms(r),t),ro(r,t,e,n,i,s,2)):a===2&&$_(r,t,e,n,i,s):ro(ms(r),t,e,n,i,s,1);break}}}function q_(r){const t=r.prev,e=r,n=r.next;if(Ve(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,s,a),d=Math.min(o,l,c),f=Math.max(i,s,a),u=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=u&&Da(i,o,s,l,a,c,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Z_(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Ve(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,f=a.y,u=Math.min(o,l,c),_=Math.min(h,d,f),g=Math.max(o,l,c),p=Math.max(h,d,f),m=Vh(u,_,t,e,n),y=Vh(g,p,t,e,n);let b=r.prevZ,x=r.nextZ;for(;b&&b.z>=m&&x&&x.z<=y;){if(b.x>=u&&b.x<=g&&b.y>=_&&b.y<=p&&b!==i&&b!==a&&Da(o,h,l,d,c,f,b.x,b.y)&&Ve(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=u&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&Da(o,h,l,d,c,f,x.x,x.y)&&Ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=g&&b.y>=_&&b.y<=p&&b!==i&&b!==a&&Da(o,h,l,d,c,f,b.x,b.y)&&Ve(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=y;){if(x.x>=u&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&Da(o,h,l,d,c,f,x.x,x.y)&&Ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function K_(r,t){let e=r;do{const n=e.prev,i=e.next.next;!la(n,i)&&Hp(n,e,e.next,i)&&so(n,i)&&so(i,n)&&(t.push(n.i,e.i,i.i),ao(e),ao(e.next),e=r=i),e=e.next}while(e!==r);return ms(e)}function $_(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sg(a,o)){let l=Wp(a,o);a=ms(a,a.next),l=ms(l,l.next),ro(a,t,e,n,i,s,0),ro(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function J_(r,t,e,n){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=Gp(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(rg(c))}i.sort(Q_);for(let s=0;s<i.length;s++)e=j_(i[s],e);return e}function Q_(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function j_(r,t){const e=tg(r,t);if(!e)return t;const n=Wp(e,r);return ms(n,n.next),ms(e,e.next)}function tg(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;if(la(r,e))return e;do{if(la(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vp(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);so(e,r)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&eg(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function eg(r,t){return Ve(r.prev,r,t.prev)<0&&Ve(t.next,r,r.next)<0}function ng(r,t,e,n){let i=r;do i.z===0&&(i.z=Vh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,ig(i)}function ig(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,e*=2}while(t>1);return r}function Vh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function rg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Vp(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Da(r,t,e,n,i,s,a,o){return!(r===a&&t===o)&&Vp(r,t,e,n,i,s,a,o)}function sg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!ag(r,t)&&(so(r,t)&&so(t,r)&&og(r,t)&&(Ve(r.prev,r,t.prev)||Ve(r,t.prev,t))||la(r,t)&&Ve(r.prev,r,r.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function la(r,t){return r.x===t.x&&r.y===t.y}function Hp(r,t,e,n){const i=Vo(Ve(r,t,e)),s=Vo(Ve(r,t,n)),a=Vo(Ve(e,n,r)),o=Vo(Ve(e,n,t));return!!(i!==s&&a!==o||i===0&&Go(r,e,t)||s===0&&Go(r,n,t)||a===0&&Go(e,r,n)||o===0&&Go(e,t,n))}function Go(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Vo(r){return r>0?1:r<0?-1:0}function ag(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Hp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function so(r,t){return Ve(r.prev,r,r.next)<0?Ve(r,t,r.next)>=0&&Ve(r,r.prev,t)>=0:Ve(r,t,r.prev)<0||Ve(r,r.next,t)<0}function og(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Wp(r,t){const e=Hh(r.i,r.x,r.y),n=Hh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yf(r,t,e,n){const i=Hh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ao(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Hh(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lg(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class cg{static triangulate(t,e,n=2){return Y_(t,e,n)}}class Ws{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ws.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];qf(t),Zf(n,t);let a=t.length;e.forEach(qf);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Zf(n,e[l]);const o=cg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function qf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Zf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Lu extends zn{constructor(t=new zp([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Be(i,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:hg;let b,x=!1,w,S,T,v;if(m){b=m.getSpacedPoints(h),x=!0,f=!1;const tt=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,tt),S=new U,T=new U,v=new U}f||(p=0,u=0,_=0,g=0);const E=o.extractPoints(c);let C=E.shape;const P=E.holes;if(!Ws.isClockWise(C)){C=C.reverse();for(let tt=0,it=P.length;tt<it;tt++){const rt=P[tt];Ws.isClockWise(rt)&&(P[tt]=rt.reverse())}}function H(tt){const rt=10000000000000001e-36;let F=tt[0];for(let _t=1;_t<=tt.length;_t++){const zt=_t%tt.length,Nt=tt[zt],Lt=Nt.x-F.x,Xt=Nt.y-F.y,I=Lt*Lt+Xt*Xt,de=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(F.x),Math.abs(F.y)),Wt=rt*de*de;if(I<=Wt){tt.splice(zt,1),_t--;continue}F=Nt}}H(C),P.forEach(H);const V=P.length,N=C;for(let tt=0;tt<V;tt++){const it=P[tt];C=C.concat(it)}function G(tt,it,rt){return it||ve("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(it,rt)}const O=C.length;function Z(tt,it,rt){let F,_t,zt;const Nt=tt.x-it.x,Lt=tt.y-it.y,Xt=rt.x-tt.x,I=rt.y-tt.y,de=Nt*Nt+Lt*Lt,Wt=Nt*I-Lt*Xt;if(Math.abs(Wt)>Number.EPSILON){const R=Math.sqrt(de),M=Math.sqrt(Xt*Xt+I*I),k=it.x-Lt/R,W=it.y+Nt/R,K=rt.x-I/M,dt=rt.y+Xt/M,ct=((K-k)*I-(dt-W)*Xt)/(Nt*I-Lt*Xt);F=k+Nt*ct-tt.x,_t=W+Lt*ct-tt.y;const $=F*F+_t*_t;if($<=2)return new Mt(F,_t);zt=Math.sqrt($/2)}else{let R=!1;Nt>Number.EPSILON?Xt>Number.EPSILON&&(R=!0):Nt<-Number.EPSILON?Xt<-Number.EPSILON&&(R=!0):Math.sign(Lt)===Math.sign(I)&&(R=!0),R?(F=-Lt,_t=Nt,zt=Math.sqrt(de)):(F=Nt,_t=Lt,zt=Math.sqrt(de/2))}return new Mt(F/zt,_t/zt)}const nt=[];for(let tt=0,it=N.length,rt=it-1,F=tt+1;tt<it;tt++,rt++,F++)rt===it&&(rt=0),F===it&&(F=0),nt[tt]=Z(N[tt],N[rt],N[F]);const L=[];let lt,St=nt.concat();for(let tt=0,it=V;tt<it;tt++){const rt=P[tt];lt=[];for(let F=0,_t=rt.length,zt=_t-1,Nt=F+1;F<_t;F++,zt++,Nt++)zt===_t&&(zt=0),Nt===_t&&(Nt=0),lt[F]=Z(rt[F],rt[zt],rt[Nt]);L.push(lt),St=St.concat(lt)}let Qt;if(p===0)Qt=Ws.triangulateShape(N,P);else{const tt=[],it=[];for(let rt=0;rt<p;rt++){const F=rt/p,_t=u*Math.cos(F*Math.PI/2),zt=_*Math.sin(F*Math.PI/2)+g;for(let Nt=0,Lt=N.length;Nt<Lt;Nt++){const Xt=G(N[Nt],nt[Nt],zt);Ct(Xt.x,Xt.y,-_t),F===0&&tt.push(Xt)}for(let Nt=0,Lt=V;Nt<Lt;Nt++){const Xt=P[Nt];lt=L[Nt];const I=[];for(let de=0,Wt=Xt.length;de<Wt;de++){const R=G(Xt[de],lt[de],zt);Ct(R.x,R.y,-_t),F===0&&I.push(R)}F===0&&it.push(I)}}Qt=Ws.triangulateShape(tt,it)}const jt=Qt.length,Jt=_+g;for(let tt=0;tt<O;tt++){const it=f?G(C[tt],St[tt],Jt):C[tt];x?(T.copy(w.normals[0]).multiplyScalar(it.x),S.copy(w.binormals[0]).multiplyScalar(it.y),v.copy(b[0]).add(T).add(S),Ct(v.x,v.y,v.z)):Ct(it.x,it.y,0)}for(let tt=1;tt<=h;tt++)for(let it=0;it<O;it++){const rt=f?G(C[it],St[it],Jt):C[it];x?(T.copy(w.normals[tt]).multiplyScalar(rt.x),S.copy(w.binormals[tt]).multiplyScalar(rt.y),v.copy(b[tt]).add(T).add(S),Ct(v.x,v.y,v.z)):Ct(rt.x,rt.y,d/h*tt)}for(let tt=p-1;tt>=0;tt--){const it=tt/p,rt=u*Math.cos(it*Math.PI/2),F=_*Math.sin(it*Math.PI/2)+g;for(let _t=0,zt=N.length;_t<zt;_t++){const Nt=G(N[_t],nt[_t],F);Ct(Nt.x,Nt.y,d+rt)}for(let _t=0,zt=P.length;_t<zt;_t++){const Nt=P[_t];lt=L[_t];for(let Lt=0,Xt=Nt.length;Lt<Xt;Lt++){const I=G(Nt[Lt],lt[Lt],F);x?Ct(I.x,I.y+b[h-1].y,b[h-1].x+rt):Ct(I.x,I.y,d+rt)}}}J(),ht();function J(){const tt=i.length/3;if(f){let it=0,rt=O*it;for(let F=0;F<jt;F++){const _t=Qt[F];Vt(_t[2]+rt,_t[1]+rt,_t[0]+rt)}it=h+p*2,rt=O*it;for(let F=0;F<jt;F++){const _t=Qt[F];Vt(_t[0]+rt,_t[1]+rt,_t[2]+rt)}}else{for(let it=0;it<jt;it++){const rt=Qt[it];Vt(rt[2],rt[1],rt[0])}for(let it=0;it<jt;it++){const rt=Qt[it];Vt(rt[0]+O*h,rt[1]+O*h,rt[2]+O*h)}}n.addGroup(tt,i.length/3-tt,0)}function ht(){const tt=i.length/3;let it=0;ot(N,it),it+=N.length;for(let rt=0,F=P.length;rt<F;rt++){const _t=P[rt];ot(_t,it),it+=_t.length}n.addGroup(tt,i.length/3-tt,1)}function ot(tt,it){let rt=tt.length;for(;--rt>=0;){const F=rt;let _t=rt-1;_t<0&&(_t=tt.length-1);for(let zt=0,Nt=h+p*2;zt<Nt;zt++){const Lt=O*zt,Xt=O*(zt+1),I=it+F+Lt,de=it+_t+Lt,Wt=it+_t+Xt,R=it+F+Xt;It(I,de,Wt,R)}}}function Ct(tt,it,rt){l.push(tt),l.push(it),l.push(rt)}function Vt(tt,it,rt){ee(tt),ee(it),ee(rt);const F=i.length/3,_t=y.generateTopUV(n,i,F-3,F-2,F-1);Tt(_t[0]),Tt(_t[1]),Tt(_t[2])}function It(tt,it,rt,F){ee(tt),ee(it),ee(F),ee(it),ee(rt),ee(F);const _t=i.length/3,zt=y.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);Tt(zt[0]),Tt(zt[1]),Tt(zt[3]),Tt(zt[1]),Tt(zt[2]),Tt(zt[3])}function ee(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function Tt(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ug(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Gh[i.type]().fromJSON(i)),new Lu(n,t.options)}}const hg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Mt(s,a),new Mt(o,l),new Mt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],_=t[i*3+2],g=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Mt(a,1-l),new Mt(c,1-d),new Mt(f,1-_),new Mt(g,1-m)]:[new Mt(o,1-l),new Mt(h,1-d),new Mt(u,1-_),new Mt(p,1-m)]}};function ug(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vo extends zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,u=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const y=m*f-a;for(let b=0;b<c;b++){const x=b*d-s;_.push(x,-y,0),g.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const b=y+c*m,x=y+c*(m+1),w=y+1+c*(m+1),S=y+1+c*m;u.push(b,x,S),u.push(x,w,S)}this.setIndex(u),this.setAttribute("position",new Be(_,3)),this.setAttribute("normal",new Be(g,3)),this.setAttribute("uv",new Be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yl extends zn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new U,f=new U,u=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const y=[],b=m/n,x=a+b*o,w=t*Math.cos(x),S=Math.sqrt(t*t-w*w);let T=0;m===0&&a===0?T=.5/e:m===n&&l===Math.PI&&(T=-.5/e);for(let v=0;v<=e;v++){const E=v/e,C=i+E*s;d.x=-S*Math.cos(C),d.y=w,d.z=S*Math.sin(C),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(E+T,1-b),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const b=h[m][y+1],x=h[m][y],w=h[m+1][y],S=h[m+1][y+1];(m!==0||a>0)&&u.push(b,x,S),(m!==n-1||l<Math.PI)&&u.push(x,w,S)}this.setIndex(u),this.setAttribute("position",new Be(_,3)),this.setAttribute("normal",new Be(g,3)),this.setAttribute("uv",new Be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Va extends zn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new U,u=new U,_=new U;for(let g=0;g<=n;g++){const p=a+g/n*o;for(let m=0;m<=i;m++){const y=m/i*s;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),_.subVectors(u,f).normalize(),h.push(_.x,_.y,_.z),d.push(m/i),d.push(g/n)}}for(let g=1;g<=n;g++)for(let p=1;p<=i;p++){const m=(i+1)*g+p-1,y=(i+1)*(g-1)+p-1,b=(i+1)*(g-1)+p,x=(i+1)*g+p;l.push(m,y,x),l.push(y,b,x)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ca(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];if(Kf(i))i.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Kf(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Nn(r){const t={};for(let e=0;e<r.length;e++){const n=ca(r[e]);for(const i in n)t[i]=n[i]}return t}function Kf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function fg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Xp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const dg={clone:ca,merge:Nn};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ga{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ca(t.uniforms),this.uniformsGroups=fg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(i.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class _g extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $e extends ga{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pc extends $e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class gg extends ga{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xg extends ga{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ql extends mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vg extends ql{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Dc=new Fe,$f=new U,Jf=new U;class Yp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$f.setFromMatrixPosition(t.matrixWorld),e.position.copy($f),Jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jf),e.updateMatrixWorld(),Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===io||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ho=new U,Wo=new Or,Pi=new U;class qp extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ho,Wo,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Wo,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ho,Wo,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Wo,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new U,Qf=new Mt,jf=new Mt;class ni extends qp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z)}getViewSize(t,e){return this.getViewBounds(t,Qf,jf),e.subVectors(jf,Qf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Mg extends Yp{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class Xo extends ql{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Iu extends qp{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sg extends Yp{constructor(){super(new Iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Sg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class yg extends ql{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ns=-90,Us=1;class bg extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ni(Ns,Us,t,e);i.layers=this.layers,this.add(i);const s=new ni(Ns,Us,t,e);s.layers=this.layers,this.add(s);const a=new ni(Ns,Us,t,e);a.layers=this.layers,this.add(a);const o=new ni(Ns,Us,t,e);o.layers=this.layers,this.add(o);const l=new ni(Ns,Us,t,e);l.layers=this.layers,this.add(l);const c=new ni(Ns,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Eg extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ed{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const df=class df{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};df.prototype.isMatrix2=!0;let nd=df;class Tg extends D_{constructor(t=10,e=10,n=4473924,i=8947848){n=new le(n),i=new le(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,u=0,_=-o;f<=e;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=f===s?n:i;g.toArray(c,u),u+=3,g.toArray(c,u),u+=3,g.toArray(c,u),u+=3,g.toArray(c,u),u+=3}const h=new zn;h.setAttribute("position",new Be(l,3)),h.setAttribute("color",new Be(c,3));const d=new Ip({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wg extends Vr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function id(r,t,e,n){const i=Ag(n);switch(e){case Ep:return r*t;case wp:return r*t/i.components*i.byteLength;case Su:return r*t/i.components*i.byteLength;case ps:return r*t*2/i.components*i.byteLength;case yu:return r*t*2/i.components*i.byteLength;case Tp:return r*t*3/i.components*i.byteLength;case Ai:return r*t*4/i.components*i.byteLength;case bu:return r*t*4/i.components*i.byteLength;case cl:case hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ul:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hh:case fh:return Math.max(r,16)*Math.max(t,8)/4;case ch:case uh:return Math.max(r,8)*Math.max(t,8)/2;case dh:case ph:case _h:case gh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mh:case El:case xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Nh:case Uh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Oh:case Fh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Tl:case Bh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(r){switch(r){case ri:case Mp:return{byteLength:1,components:1};case eo:case Sp:case cr:return{byteLength:2,components:1};case vu:case Mu:return{byteLength:2,components:4};case Wi:case xu:case Oi:return{byteLength:4,components:1};case yp:case bp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zp(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Cg(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,_)=>u.start-_.start);let f=0;for(let u=1;u<d.length;u++){const _=d[f],g=d[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let u=0,_=d.length;u<_;u++){const g=d[u];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ax=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$v=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Rg,alphahash_pars_fragment:Pg,alphamap_fragment:Dg,alphamap_pars_fragment:Lg,alphatest_fragment:Ig,alphatest_pars_fragment:Ng,aomap_fragment:Ug,aomap_pars_fragment:Og,batching_pars_vertex:Fg,batching_vertex:Bg,begin_vertex:kg,beginnormal_vertex:zg,bsdfs:Gg,iridescence_fragment:Vg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:qg,color_fragment:Zg,color_pars_fragment:Kg,color_pars_vertex:$g,color_vertex:Jg,common:Qg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:tx,displacementmap_pars_vertex:ex,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ax,envmap_fragment:ox,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Sx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:gx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:vx,lights_pars_begin:Mx,lights_toon_fragment:yx,lights_toon_pars_fragment:bx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Tx,lights_physical_fragment:wx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Cx,lights_fragment_maps:Rx,lights_fragment_end:Px,lightprobes_pars_fragment:Dx,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ux,map_fragment:Ox,map_pars_fragment:Fx,map_particle_fragment:Bx,map_particle_pars_fragment:kx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Vx,morphcolor_vertex:Hx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:Yx,normal_fragment_begin:qx,normal_fragment_maps:Zx,normal_pars_fragment:Kx,normal_pars_vertex:$x,normal_vertex:Jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:ev,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:rv,premultiplied_alpha_fragment:sv,project_vertex:av,dithering_fragment:ov,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:fv,shadowmap_vertex:dv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:_v,skinning_vertex:gv,skinnormal_vertex:xv,specularmap_fragment:vv,specularmap_pars_fragment:Mv,tonemapping_fragment:Sv,tonemapping_pars_fragment:yv,transmission_fragment:bv,transmission_pars_fragment:Ev,uv_pars_fragment:Tv,uv_pars_vertex:wv,uv_vertex:Av,worldpos_vertex:Cv,background_vert:Rv,background_frag:Pv,backgroundCube_vert:Dv,backgroundCube_frag:Lv,cube_vert:Iv,cube_frag:Nv,depth_vert:Uv,depth_frag:Ov,distance_vert:Fv,distance_frag:Bv,equirect_vert:kv,equirect_frag:zv,linedashed_vert:Gv,linedashed_frag:Vv,meshbasic_vert:Hv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:Yv,meshmatcap_vert:qv,meshmatcap_frag:Zv,meshnormal_vert:Kv,meshnormal_frag:$v,meshphong_vert:Jv,meshphong_frag:Qv,meshphysical_vert:jv,meshphysical_frag:tM,meshtoon_vert:eM,meshtoon_frag:nM,points_vert:iM,points_frag:rM,shadow_vert:sM,shadow_frag:aM,sprite_vert:oM,sprite_frag:lM},Pt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ni={basic:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new le(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Pt.points,Pt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Pt.common,Pt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Pt.sprite,Pt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Nn([Pt.lights,Pt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ni.physical={uniforms:Nn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Yo={r:0,b:0,g:0},cM=new Fe,Kp=new re;Kp.set(-1,0,0,0,1,0,0,0,1);function hM(r,t,e,n,i,s){const a=new le(0);let o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const x=y.backgroundBlurriness>0;b=t.get(b,x)}return b}function _(y){let b=!1;const x=u(y);x===null?p(a,o):x&&x.isColor&&(p(x,1),b=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,b){const x=u(b);x&&(x.isCubeTexture||x.mapping===Wl)?(c===void 0&&(c=new Q(new bt(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ca(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cM.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kp),c.material.toneMapped=ge.getTransfer(x.colorSpace)!==we,(h!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Q(new vo(2,2),new Xi({name:"BackgroundMaterial",uniforms:ca(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ge.getTransfer(x.colorSpace)!==we,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(Yo,Xp(r)),e.buffers.color.setClear(Yo.r,Yo.g,Yo.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:_,addToRenderList:g,dispose:m}}function uM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(P,D,H,V,N){let G=!1;const O=d(P,V,H,D);s!==O&&(s=O,c(s.object)),G=u(P,V,H,N),G&&_(P,V,H,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(P,D,H,V),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function d(P,D,H,V){const N=V.wireframe===!0;let G=n[D.id];G===void 0&&(G={},n[D.id]=G);const O=P.isInstancedMesh===!0?P.id:0;let Z=G[O];Z===void 0&&(Z={},G[O]=Z);let nt=Z[H.id];nt===void 0&&(nt={},Z[H.id]=nt);let L=nt[N];return L===void 0&&(L=f(l()),nt[N]=L),L}function f(P){const D=[],H=[],V=[];for(let N=0;N<e;N++)D[N]=0,H[N]=0,V[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:V,object:P,attributes:{},index:null}}function u(P,D,H,V){const N=s.attributes,G=D.attributes;let O=0;const Z=H.getAttributes();for(const nt in Z)if(Z[nt].location>=0){const lt=N[nt];let St=G[nt];if(St===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(St=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(St=P.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;O++}return s.attributesNum!==O||s.index!==V}function _(P,D,H,V){const N={},G=D.attributes;let O=0;const Z=H.getAttributes();for(const nt in Z)if(Z[nt].location>=0){let lt=G[nt];lt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),N[nt]=St,O++}s.attributes=N,s.attributesNum=O,s.index=V}function g(){const P=s.newAttributes;for(let D=0,H=P.length;D<H;D++)P[D]=0}function p(P){m(P,0)}function m(P,D){const H=s.newAttributes,V=s.enabledAttributes,N=s.attributeDivisors;H[P]=1,V[P]===0&&(r.enableVertexAttribArray(P),V[P]=1),N[P]!==D&&(r.vertexAttribDivisor(P,D),N[P]=D)}function y(){const P=s.newAttributes,D=s.enabledAttributes;for(let H=0,V=D.length;H<V;H++)D[H]!==P[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function b(P,D,H,V,N,G,O){O===!0?r.vertexAttribIPointer(P,D,H,N,G):r.vertexAttribPointer(P,D,H,V,N,G)}function x(P,D,H,V){g();const N=V.attributes,G=H.getAttributes(),O=D.defaultAttributeValues;for(const Z in G){const nt=G[Z];if(nt.location>=0){let L=N[Z];if(L===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(L=P.instanceColor)),L!==void 0){const lt=L.normalized,St=L.itemSize,Qt=t.get(L);if(Qt===void 0)continue;const jt=Qt.buffer,Jt=Qt.type,J=Qt.bytesPerElement,ht=Jt===r.INT||Jt===r.UNSIGNED_INT||L.gpuType===xu;if(L.isInterleavedBufferAttribute){const ot=L.data,Ct=ot.stride,Vt=L.offset;if(ot.isInstancedInterleavedBuffer){for(let It=0;It<nt.locationSize;It++)m(nt.location+It,ot.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let It=0;It<nt.locationSize;It++)p(nt.location+It);r.bindBuffer(r.ARRAY_BUFFER,jt);for(let It=0;It<nt.locationSize;It++)b(nt.location+It,St/nt.locationSize,Jt,lt,Ct*J,(Vt+St/nt.locationSize*It)*J,ht)}else{if(L.isInstancedBufferAttribute){for(let ot=0;ot<nt.locationSize;ot++)m(nt.location+ot,L.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ot=0;ot<nt.locationSize;ot++)p(nt.location+ot);r.bindBuffer(r.ARRAY_BUFFER,jt);for(let ot=0;ot<nt.locationSize;ot++)b(nt.location+ot,St/nt.locationSize,Jt,lt,St*J,St/nt.locationSize*ot*J,ht)}}else if(O!==void 0){const lt=O[Z];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(nt.location,lt);break;case 3:r.vertexAttrib3fv(nt.location,lt);break;case 4:r.vertexAttrib4fv(nt.location,lt);break;default:r.vertexAttrib1fv(nt.location,lt)}}}}y()}function w(){E();for(const P in n){const D=n[P];for(const H in D){const V=D[H];for(const N in V){const G=V[N];for(const O in G)h(G[O].object),delete G[O];delete V[N]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const H in D){const V=D[H];for(const N in V){const G=V[N];for(const O in G)h(G[O].object),delete G[O];delete V[N]}}delete n[P.id]}function T(P){for(const D in n){const H=n[D];for(const V in H){const N=H[V];if(N[P.id]===void 0)continue;const G=N[P.id];for(const O in G)h(G[O].object),delete G[O];delete N[P.id]}}}function v(P){for(const D in n){const H=n[D],V=P.isInstancedMesh===!0?P.id:0,N=H[V];if(N!==void 0){for(const G in N){const O=N[G];for(const Z in O)h(O[Z].object),delete O[Z];delete N[G]}delete H[V],Object.keys(H).length===0&&delete n[D]}}}function E(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function fM(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function dM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Ai&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const v=T===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ri&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Oi&&!v)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:w,samples:S}}function pM(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new br,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,b=y*4;let x=m.clippingState||null;l.value=x,x=h(_,f,b,u);for(let w=0;w!==b;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=u+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,x=u;b!==g;++b,x+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}const wr=4,rd=[.125,.215,.35,.446,.526,.582],es=20,mM=256,Ta=new Iu,sd=new le;let Lc=null,Ic=0,Nc=0,Uc=!1;const _M=new U;class ad{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=_M}=s;Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Ic,Nc),this._renderer.xr.enabled=Uc,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===aa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:cr,format:Ai,colorSpace:wl,depthBuffer:!1},i=od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gM(s)),this._blurMaterial=vM(s,t,e),this._ggxMaterial=xM(s,t,e)}return i}_compileMaterial(t){const e=new Q(new zn,t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,i,s){const l=new ni(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(sd),d.toneMapping=zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new bt,new Tr({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(sd),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const w=this._cubeSize;Os(i,x*w,b>2?w:0,w,w),d.setRenderTarget(i),m&&d.render(g,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ds||t.mapping===aa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=0+c*1.25,u=d*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-wr?n-_+wr:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=_-e,Os(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,Ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Os(t,p,m,3*g,2*g),i.setRenderTarget(t),i.render(o,Ta)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ve("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*es-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):es;p>es&&te(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${es}`);const m=[];let y=0;for(let T=0;T<es;++T){const v=T/g,E=Math.exp(-v*v/2);m.push(E),T===0?y+=E:T<p&&(y+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const x=this._sizeLods[i],w=3*x*(i>b-wr?i-b+wr:0),S=4*(this._cubeSize-x);Os(e,w,S,3*x,2*x),l.setRenderTarget(e),l.render(d,Ta)}}function gM(r){const t=[],e=[],n=[];let i=r;const s=r-wr+1+rd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-wr?l=rd[a-r+wr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*u),b=new Float32Array(p*_*u),x=new Float32Array(m*_*u);for(let S=0;S<u;S++){const T=S%3*2/3-1,v=S>2?0:-1,E=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];y.set(E,g*_*S),b.set(f,p*_*S);const C=[S,S,S,S,S,S];x.set(C,m*_*S)}const w=new zn;w.setAttribute("position",new Vi(y,g)),w.setAttribute("uv",new Vi(b,p)),w.setAttribute("faceIndex",new Vi(x,m)),n.push(new Q(w,null)),i>wr&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function od(r,t,e){const n=new Gi(r,t,e);return n.texture.mapping=Wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function xM(r,t,e){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function vM(r,t,e){const n=new Float32Array(es),i=new U(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ld(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function cd(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $p extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Np(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bt(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:ar});s.uniforms.tEquirect.value=e;const a=new Q(i,s),o=e.minFilter;return e.minFilter===ns&&(e.minFilter=Cn),new bg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}function MM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){const u=f.mapping;if(u===tc||u===ec)if(t.has(f)){const _=t.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new $p(_.height);return g.fromEquirectangularTexture(r,f),t.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const u=f.mapping,_=u===tc||u===ec,g=u===ds||u===aa;if(_||g){let p=e.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ad(r)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const y=f.image;return _&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new ad(r)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===tc?f.mapping=ds:u===ec&&(f.mapping=aa),f}function l(f){let u=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&u++;return u===_}function c(f){const u=f.target;u.removeEventListener("dispose",c);const _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function SM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$s("WebGLRenderer: "+n+" extension not supported."),i}}}function yM(r,t,e,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const u=s.get(f);u&&(t.remove(u),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)t.update(f[u],r.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(u!==null){const y=u.array;g=u.version;for(let b=0,x=y.length;b<x;b+=3){const w=y[b+0],S=y[b+1],T=y[b+2];f.push(w,S,S,T,T,w)}}else{const y=_.array;g=_.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const w=b+0,S=b+1,T=b+2;f.push(w,S,S,T,T,w)}}const p=new(_.count>=65535?Lp:Dp)(f,1);p.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){const f=s.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function bM(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let g=0;for(let p=0;p<u;p++)g+=f[p];e.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function EM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function TM(r,t,e){const n=new WeakMap,i=new Ge;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let C=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var u=C;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let w=o.attributes.position.count*x,S=1;w>t.maxTextureSize&&(S=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*S*4*d),v=new Cp(T,w,S,d);v.type=Oi,v.needsUpdate=!0;const E=x*4;for(let P=0;P<d;P++){const D=m[P],H=y[P],V=b[P],N=w*S*4*P;for(let G=0;G<D.count;G++){const O=G*E;_===!0&&(i.fromBufferAttribute(D,G),T[N+O+0]=i.x,T[N+O+1]=i.y,T[N+O+2]=i.z,T[N+O+3]=0),g===!0&&(i.fromBufferAttribute(H,G),T[N+O+4]=i.x,T[N+O+5]=i.y,T[N+O+6]=i.z,T[N+O+7]=0),p===!0&&(i.fromBufferAttribute(V,G),T[N+O+8]=i.x,T[N+O+9]=i.y,T[N+O+10]=i.z,T[N+O+11]=V.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new Mt(w,S)},n.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wM(r,t,e,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const AM={[dp]:"LINEAR_TONE_MAPPING",[pp]:"REINHARD_TONE_MAPPING",[mp]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[gp]:"AGX_TONE_MAPPING",[xp]:"NEUTRAL_TONE_MAPPING",[_p]:"CUSTOM_TONE_MAPPING"};function CM(r,t,e,n,i,s){const a=new Gi(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new oa(t,e):void 0}),o=new Gi(t,e,{type:cr,depthBuffer:!1,stencilBuffer:!1}),l=new zn;l.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Be([0,2,0,0,2,0],2));const c=new _g({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Q(l,c),d=new Iu(-1,1,1,-1,0,1);let f=null,u=null,_=!1,g,p=null,m=[],y=!1;this.setSize=function(b,x){a.setSize(b,x),o.setSize(b,x);for(let w=0;w<m.length;w++){const S=m[w];S.setSize&&S.setSize(b,x)}},this.setEffects=function(b){m=b,y=m.length>0&&m[0].isRenderPass===!0;const x=a.width,w=a.height;for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(x,w)}},this.begin=function(b,x){if(_||b.toneMapping===zi&&m.length===0)return!1;if(p=x,x!==null){const w=x.width,S=x.height;(a.width!==w||a.height!==S)&&this.setSize(w,S)}return y===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=zi,!0},this.hasRenderPass=function(){return y},this.end=function(b,x){b.toneMapping=g,_=!0;let w=a,S=o;for(let T=0;T<m.length;T++){const v=m[T];if(v.enabled!==!1&&(v.render(b,S,w,x),v.needsSwap!==!1)){const E=w;w=S,S=E}}if(f!==b.outputColorSpace||u!==b.toneMapping){f=b.outputColorSpace,u=b.toneMapping,c.defines={},ge.getTransfer(f)===we&&(c.defines.SRGB_TRANSFER="");const T=AM[u];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(h,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Jp=new Rn,Wh=new oa(1,1),Qp=new Cp,jp=new f_,tm=new Np,hd=[],ud=[],fd=new Float32Array(16),dd=new Float32Array(9),pd=new Float32Array(4);function xa(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=hd[i];if(s===void 0&&(s=new Float32Array(i),hd[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function cn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function hn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Kl(r,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function RM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function PM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;r.uniform2fv(this.addr,t),hn(e,t)}}function DM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;r.uniform3fv(this.addr,t),hn(e,t)}}function LM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;r.uniform4fv(this.addr,t),hn(e,t)}}function IM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;pd.set(n),r.uniformMatrix2fv(this.addr,!1,pd),hn(e,n)}}function NM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;dd.set(n),r.uniformMatrix3fv(this.addr,!1,dd),hn(e,n)}}function UM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;fd.set(n),r.uniformMatrix4fv(this.addr,!1,fd),hn(e,n)}}function OM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function FM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;r.uniform2iv(this.addr,t),hn(e,t)}}function BM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;r.uniform3iv(this.addr,t),hn(e,t)}}function kM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;r.uniform4iv(this.addr,t),hn(e,t)}}function zM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function GM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;r.uniform2uiv(this.addr,t),hn(e,t)}}function VM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;r.uniform3uiv(this.addr,t),hn(e,t)}}function HM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;r.uniform4uiv(this.addr,t),hn(e,t)}}function WM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?Tu:Eu,s=Wh):s=Jp,e.setTexture2D(t||s,i)}function XM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jp,i)}function YM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tm,i)}function qM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qp,i)}function ZM(r){switch(r){case 5126:return RM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return GM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}function KM(r,t){r.uniform1fv(this.addr,t)}function $M(r,t){const e=xa(t,this.size,2);r.uniform2fv(this.addr,e)}function JM(r,t){const e=xa(t,this.size,3);r.uniform3fv(this.addr,e)}function QM(r,t){const e=xa(t,this.size,4);r.uniform4fv(this.addr,e)}function jM(r,t){const e=xa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tS(r,t){const e=xa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function eS(r,t){const e=xa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nS(r,t){r.uniform1iv(this.addr,t)}function iS(r,t){r.uniform2iv(this.addr,t)}function rS(r,t){r.uniform3iv(this.addr,t)}function sS(r,t){r.uniform4iv(this.addr,t)}function aS(r,t){r.uniform1uiv(this.addr,t)}function oS(r,t){r.uniform2uiv(this.addr,t)}function lS(r,t){r.uniform3uiv(this.addr,t)}function cS(r,t){r.uniform4uiv(this.addr,t)}function hS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);cn(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Wh:a=Jp;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function uS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);cn(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||jp,s[a])}function fS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);cn(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||tm,s[a])}function dS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);cn(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Qp,s[a])}function pS(r){switch(r){case 5126:return KM;case 35664:return $M;case 35665:return JM;case 35666:return QM;case 35674:return jM;case 35675:return tS;case 35676:return eS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return aS;case 36294:return oS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return dS}}class mS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ZM(e.type)}}class _S{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pS(e.type)}}class gS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function md(r,t){r.seq.push(t),r.map[t.id]=t}function xS(r,t,e){const n=r.name,i=n.length;for(Oc.lastIndex=0;;){const s=Oc.exec(n),a=Oc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){md(e,c===void 0?new mS(o,r,t):new _S(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new gS(o),md(e,d)),e=d}}}class pl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);xS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _d(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const vS=37297;let MS=0;function SS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const gd=new re;function yS(r){ge._getMatrix(gd,ge.workingColorSpace,r);const t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(r)){case Al:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function xd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+SS(r.getShaderSource(t),o)}else return s}function bS(r,t){const e=yS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ES={[dp]:"Linear",[pp]:"Reinhard",[mp]:"Cineon",[gu]:"ACESFilmic",[gp]:"AgX",[xp]:"Neutral",[_p]:"Custom"};function TS(r,t){const e=ES[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new U;function wS(){ge.getLuminanceCoefficients(qo);const r=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function CS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function RS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function La(r){return r!==""}function vd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Md(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(PS,LS)}const DS=new Map;function LS(r,t){let e=ce[t];if(e===void 0){const n=DS.get(t);if(n!==void 0)e=ce[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xh(e)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(r){return r.replace(IS,NS)}function NS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const US={[ll]:"SHADOWMAP_TYPE_PCF",[Pa]:"SHADOWMAP_TYPE_VSM"};function OS(r){return US[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FS={[ds]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE",[Wl]:"ENVMAP_TYPE_CUBE_UV"};function BS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":FS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const kS={[aa]:"ENVMAP_MODE_REFRACTION"};function zS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":kS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GS={[fp]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function VS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":GS[r.combine]||"ENVMAP_BLENDING_NONE"}function HS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function WS(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=OS(e),c=BS(e),h=zS(e),d=VS(e),f=HS(e),u=AS(e),_=CS(s),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(La).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(La).join(`
`),m.length>0&&(m+=`
`)):(p=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),m=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?ce.tonemapping_pars_fragment:"",e.toneMapping!==zi?TS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,bS("linearToOutputTexel",e.outputColorSpace),wS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(La).join(`
`)),a=Xh(a),a=vd(a,e),a=Md(a,e),o=Xh(o),o=vd(o,e),o=Md(o,e),a=Sd(a),o=Sd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=y+p+a,x=y+m+o,w=_d(i,i.VERTEX_SHADER,b),S=_d(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,S),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",H=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(S)||"",N=D.trim(),G=H.trim(),O=V.trim();let Z=!0,nt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,S);else{const L=xd(i,w,"vertex"),lt=xd(i,S,"fragment");ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+L+`
`+lt)}else N!==""?te("WebGLProgram: Program Info Log:",N):(G===""||O==="")&&(nt=!1);nt&&(P.diagnostics={runnable:Z,programLog:N,vertexShader:{log:G,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(w),i.deleteShader(S),v=new pl(i,g),E=RS(i,g)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(g,vS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=MS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}let XS=0;class YS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qS(t),e.set(t,n)),n}}class qS{constructor(t){this.id=XS++,this.code=t,this.usedTimes=0}}function ZS(r){return r===ps||r===El||r===Tl}function KS(r,t,e,n,i,s){const a=new Rp,o=new YS,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,E,C,P,D,H){const V=P.fog,N=D.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=t.get(v.envMap||G,O),nt=Z&&Z.mapping===Wl?Z.image.height:null,L=u[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&te("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const lt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,St=lt!==void 0?lt.length:0;let Qt=0;N.morphAttributes.position!==void 0&&(Qt=1),N.morphAttributes.normal!==void 0&&(Qt=2),N.morphAttributes.color!==void 0&&(Qt=3);let jt,Jt,J,ht;if(L){const at=Ni[L];jt=at.vertexShader,Jt=at.fragmentShader}else{jt=v.vertexShader,Jt=v.fragmentShader;const at=o.getVertexShaderStage(v),qt=o.getFragmentShaderStage(v);o.update(v,at,qt),J=at.id,ht=qt.id}const ot=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,It=D.isBatchedMesh===!0,ee=!!v.map,Tt=!!v.matcap,tt=!!Z,it=!!v.aoMap,rt=!!v.lightMap,F=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,zt=!!v.displacementMap,Nt=!!v.emissiveMap,Lt=!!v.metalnessMap,Xt=!!v.roughnessMap,I=v.anisotropy>0,de=v.clearcoat>0,Wt=v.dispersion>0,R=v.iridescence>0,M=v.sheen>0,k=v.transmission>0,W=I&&!!v.anisotropyMap,K=de&&!!v.clearcoatMap,dt=de&&!!v.clearcoatNormalMap,ct=de&&!!v.clearcoatRoughnessMap,$=R&&!!v.iridescenceMap,j=R&&!!v.iridescenceThicknessMap,xt=M&&!!v.sheenColorMap,Ot=M&&!!v.sheenRoughnessMap,vt=!!v.specularMap,gt=!!v.specularColorMap,pt=!!v.specularIntensityMap,Gt=k&&!!v.transmissionMap,Yt=k&&!!v.thicknessMap,B=!!v.gradientMap,mt=!!v.alphaMap,et=v.alphaTest>0,yt=!!v.alphaHash,Et=!!v.extensions;let st=zi;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(st=r.toneMapping);const ut={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:Jt,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:It,batchingColor:It&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:Tt,envMap:tt,envMapMode:tt&&Z.mapping,envMapCubeUVHeight:nt,aoMap:it,lightMap:rt,bumpMap:F,normalMap:_t,displacementMap:zt,emissiveMap:Nt,normalMapObjectSpace:_t&&v.normalMapType===Z0,normalMapTangentSpace:_t&&v.normalMapType===kh,packedNormalMap:_t&&v.normalMapType===kh&&ZS(v.normalMap.format),metalnessMap:Lt,roughnessMap:Xt,anisotropy:I,anisotropyMap:W,clearcoat:de,clearcoatMap:K,clearcoatNormalMap:dt,clearcoatRoughnessMap:ct,dispersion:Wt,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:j,sheen:M,sheenColorMap:xt,sheenRoughnessMap:Ot,specularMap:vt,specularColorMap:gt,specularIntensityMap:pt,transmission:k,transmissionMap:Gt,thicknessMap:Yt,gradientMap:B,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:et,alphaHash:yt,combine:v.combine,mapUv:ee&&_(v.map.channel),aoMapUv:it&&_(v.aoMap.channel),lightMapUv:rt&&_(v.lightMap.channel),bumpMapUv:F&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:zt&&_(v.displacementMap.channel),emissiveMapUv:Nt&&_(v.emissiveMap.channel),metalnessMapUv:Lt&&_(v.metalnessMap.channel),roughnessMapUv:Xt&&_(v.roughnessMap.channel),anisotropyMapUv:W&&_(v.anisotropyMap.channel),clearcoatMapUv:K&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(v.sheenRoughnessMap.channel),specularMapUv:vt&&_(v.specularMap.channel),specularColorMapUv:gt&&_(v.specularColorMap.channel),specularIntensityMapUv:pt&&_(v.specularIntensityMap.channel),transmissionMapUv:Gt&&_(v.transmissionMap.channel),thicknessMapUv:Yt&&_(v.thicknessMap.channel),alphaMapUv:mt&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||I),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(ee||mt),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&ge.getTransfer(v.map.colorSpace)===we,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&ge.getTransfer(v.emissiveMap.colorSpace)===we,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nr,flipSided:v.side===kn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Et&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&v.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(E,v),y(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){const E=u[v.type];let C;if(E){const P=Ni[E];C=dg.clone(P.uniforms)}else C=v.uniforms;return C}function x(v,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new WS(r,E,v,i),c.push(C),h.set(E,C)),C}function w(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:x,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:T}}function $S(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function JS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function bd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ed(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,_,g,p,m){let y=r[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},r[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=_,y.materialVariant=a(f),y.groupOrder=g,y.renderOrder=f.renderOrder,y.z=p,y.group=m),t++,y}function l(f,u,_,g,p,m){const y=o(f,u,_,g,p,m);_.transmission>0?n.push(y):_.transparent===!0?i.push(y):e.push(y)}function c(f,u,_,g,p,m){const y=o(f,u,_,g,p,m);_.transmission>0?n.unshift(y):_.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u,_){e.length>1&&e.sort(f||JS),n.length>1&&n.sort(u||bd),i.length>1&&i.sort(u||bd),_&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let f=t,u=r.length;f<u;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function QS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ed,r.set(n,[a])):i>=s.length?(a=new Ed,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function jS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new le};break;case"SpotLight":e={position:new U,direction:new U,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function ty(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ey=0;function ny(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function iy(r){const t=new jS,e=ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Fe,a=new Fe;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,_=0,g=0,p=0,m=0,y=0,b=0,x=0,w=0,S=0,T=0;c.sort(ny);for(let E=0,C=c.length;E<C;E++){const P=c[E],D=P.color,H=P.intensity,V=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ps?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*H,d+=D.g*H,f+=D.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],H);T++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,Z=e.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.directionalShadow[u]=Z,n.directionalShadowMap[u]=N,n.directionalShadowMatrix[u]=P.shadow.matrix,y++}n.directional[u]=G,u++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(D).multiplyScalar(H),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const O=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[g]=O.matrix,P.castShadow){const Z=e.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=N,x++}g++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(D).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=G,p++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const O=P.shadow,Z=e.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=P.shadow.matrix,b++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==u||v.pointLength!==_||v.spotLength!==g||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==x||v.numSpotMaps!==w||v.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,v.directionalLength=u,v.pointLength=_,v.spotLength=g,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=x,v.numSpotMaps=w,v.numLightProbes=T,n.version=ey++)}function l(c,h){let d=0,f=0,u=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const b=c[m];if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(b.isSpotLight){const x=n.spot[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(b.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Td(r){const t=new iy(r),e=[],n=[],i=[];function s(f){d.camera=f,e.length=0,n.length=0,i.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ry(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Td(r),t.set(i,[o])):s>=a.length?(o=new Td(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ly=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],wd=new Fe,wa=new U,Fc=new U;function cy(r,t,e){let n=new Ru;const i=new Mt,s=new Mt,a=new Ge,o=new gg,l=new xg,c={},h=e.maxTextureSize,d={[Ur]:kn,[kn]:Ur,[nr]:nr},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:sy,fragmentShader:ay}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Q(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let m=this.type;this.render=function(S,T,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===up&&(te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ll);const E=r.getRenderTarget(),C=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ar),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=m!==this.type;H&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(N=>N.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,N=S.length;V<N;V++){const G=S[V],O=G.shadow;if(O===void 0){te("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Z=O.getFrameExtents();i.multiply(Z),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y));const nt=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=nt,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Pa){if(G.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Gi(i.x,i.y,{format:ps,type:cr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new oa(i.x,i.y,Oi),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=hr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=gn,O.map.depthTexture.magFilter=gn}else G.isPointLight?(O.map=new $p(i.x),O.map.depthTexture=new L_(i.x,Wi)):(O.map=new Gi(i.x,i.y),O.map.depthTexture=new oa(i.x,i.y,Wi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=hr,this.type===ll?(O.map.depthTexture.compareFunction=nt?Tu:Eu,O.map.depthTexture.minFilter=Cn,O.map.depthTexture.magFilter=Cn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=gn,O.map.depthTexture.magFilter=gn);O.camera.updateProjectionMatrix()}const L=O.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<L;lt++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,lt),r.clear();else{lt===0&&(r.setRenderTarget(O.map),r.clear());const St=O.getViewport(lt);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),D.viewport(a)}if(G.isPointLight){const St=O.camera,Qt=O.matrix,jt=G.distance||St.far;jt!==St.far&&(St.far=jt,St.updateProjectionMatrix()),wa.setFromMatrixPosition(G.matrixWorld),St.position.copy(wa),Fc.copy(St.position),Fc.add(oy[lt]),St.up.copy(ly[lt]),St.lookAt(Fc),St.updateMatrixWorld(),Qt.makeTranslation(-wa.x,-wa.y,-wa.z),wd.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),O._frustum.setFromProjectionMatrix(wd,St.coordinateSystem,St.reversedDepth)}else O.updateMatrices(G);n=O.getFrustum(),x(T,v,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===Pa&&y(O,v),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(E,C,P)};function y(S,T){const v=t.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Gi(i.x,i.y,{format:ps,type:cr})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,v,f,g,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,v,u,g,null)}function b(S,T,v,E){let C=null;const P=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=C.uuid,H=T.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let N=V[H];N===void 0&&(N=C.clone(),V[H]=N,T.addEventListener("dispose",w)),C=N}if(C.visible=T.visible,C.wireframe=T.wireframe,E===Pa?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=r.properties.get(C);D.light=v}return C}function x(S,T,v,E,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Pa)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const H=t.update(S),V=S.material;if(Array.isArray(V)){const N=H.groups;for(let G=0,O=N.length;G<O;G++){const Z=N[G],nt=V[Z.materialIndex];if(nt&&nt.visible){const L=b(S,nt,E,C);S.onBeforeShadow(r,S,T,v,H,L,Z),r.renderBufferDirect(v,null,H,L,S,Z),S.onAfterShadow(r,S,T,v,H,L,Z)}}}else if(V.visible){const N=b(S,V,E,C);S.onBeforeShadow(r,S,T,v,H,N,null),r.renderBufferDirect(v,null,H,N,S,null),S.onAfterShadow(r,S,T,v,H,N,null)}}const D=S.children;for(let H=0,V=D.length;H<V;H++)x(D[H],T,v,E,C)}function w(S){S.target.removeEventListener("dispose",w);for(const v in c){const E=c[v],C=S.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function hy(r,t){function e(){let B=!1;const mt=new Ge;let et=null;const yt=new Ge(0,0,0,0);return{setMask:function(Et){et!==Et&&!B&&(r.colorMask(Et,Et,Et,Et),et=Et)},setLocked:function(Et){B=Et},setClear:function(Et,st,ut,at,qt){qt===!0&&(Et*=at,st*=at,ut*=at),mt.set(Et,st,ut,at),yt.equals(mt)===!1&&(r.clearColor(Et,st,ut,at),yt.copy(mt))},reset:function(){B=!1,et=null,yt.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,et=null,yt=null,Et=null;return{setReversed:function(st){if(mt!==st){const ut=t.get("EXT_clip_control");st?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),mt=st;const at=Et;Et=null,this.setClear(at)}},getReversed:function(){return mt},setTest:function(st){st?ot(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(st){et!==st&&!B&&(r.depthMask(st),et=st)},setFunc:function(st){if(mt&&(st=r_[st]),yt!==st){switch(st){case eh:r.depthFunc(r.NEVER);break;case nh:r.depthFunc(r.ALWAYS);break;case ih:r.depthFunc(r.LESS);break;case sa:r.depthFunc(r.LEQUAL);break;case rh:r.depthFunc(r.EQUAL);break;case sh:r.depthFunc(r.GEQUAL);break;case ah:r.depthFunc(r.GREATER);break;case oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=st}},setLocked:function(st){B=st},setClear:function(st){Et!==st&&(Et=st,mt&&(st=1-st),r.clearDepth(st))},reset:function(){B=!1,et=null,yt=null,Et=null,mt=!1}}}function i(){let B=!1,mt=null,et=null,yt=null,Et=null,st=null,ut=null,at=null,qt=null;return{setTest:function(ft){B||(ft?ot(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(ft){mt!==ft&&!B&&(r.stencilMask(ft),mt=ft)},setFunc:function(ft,Zt,Bt){(et!==ft||yt!==Zt||Et!==Bt)&&(r.stencilFunc(ft,Zt,Bt),et=ft,yt=Zt,Et=Bt)},setOp:function(ft,Zt,Bt){(st!==ft||ut!==Zt||at!==Bt)&&(r.stencilOp(ft,Zt,Bt),st=ft,ut=Zt,at=Bt)},setLocked:function(ft){B=ft},setClear:function(ft){qt!==ft&&(r.clearStencil(ft),qt=ft)},reset:function(){B=!1,mt=null,et=null,yt=null,Et=null,st=null,ut=null,at=null,qt=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f={},u=new WeakMap,_=[],g=null,p=!1,m=null,y=null,b=null,x=null,w=null,S=null,T=null,v=new le(0,0,0),E=0,C=!1,P=null,D=null,H=null,V=null,N=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),O=Z>=1):nt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),O=Z>=2);let L=null,lt={};const St=r.getParameter(r.SCISSOR_BOX),Qt=r.getParameter(r.VIEWPORT),jt=new Ge().fromArray(St),Jt=new Ge().fromArray(Qt);function J(B,mt,et,yt){const Et=new Uint8Array(4),st=r.createTexture();r.bindTexture(B,st),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<et;ut++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(mt+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return st}const ht={};ht[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(r.DEPTH_TEST),a.setFunc(sa),F(!1),_t(mf),ot(r.CULL_FACE),it(ar);function ot(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function Ct(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Vt(B,mt){return f[B]!==mt?(r.bindFramebuffer(B,mt),f[B]=mt,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=mt),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(B,mt){let et=_,yt=!1;if(B){et=u.get(mt),et===void 0&&(et=[],u.set(mt,et));const Et=B.textures;if(et.length!==Et.length||et[0]!==r.COLOR_ATTACHMENT0){for(let st=0,ut=Et.length;st<ut;st++)et[st]=r.COLOR_ATTACHMENT0+st;et.length=Et.length,yt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,yt=!0);yt&&r.drawBuffers(et)}function ee(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Tt={[ts]:r.FUNC_ADD,[A0]:r.FUNC_SUBTRACT,[C0]:r.FUNC_REVERSE_SUBTRACT};Tt[R0]=r.MIN,Tt[P0]=r.MAX;const tt={[D0]:r.ZERO,[L0]:r.ONE,[I0]:r.SRC_COLOR,[jc]:r.SRC_ALPHA,[k0]:r.SRC_ALPHA_SATURATE,[F0]:r.DST_COLOR,[U0]:r.DST_ALPHA,[N0]:r.ONE_MINUS_SRC_COLOR,[th]:r.ONE_MINUS_SRC_ALPHA,[B0]:r.ONE_MINUS_DST_COLOR,[O0]:r.ONE_MINUS_DST_ALPHA,[z0]:r.CONSTANT_COLOR,[G0]:r.ONE_MINUS_CONSTANT_COLOR,[V0]:r.CONSTANT_ALPHA,[H0]:r.ONE_MINUS_CONSTANT_ALPHA};function it(B,mt,et,yt,Et,st,ut,at,qt,ft){if(B===ar){p===!0&&(Ct(r.BLEND),p=!1);return}if(p===!1&&(ot(r.BLEND),p=!0),B!==w0){if(B!==m||ft!==C){if((y!==ts||w!==ts)&&(r.blendEquation(r.FUNC_ADD),y=ts,w=ts),ft)switch(B){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _f:r.blendFunc(r.ONE,r.ONE);break;case gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ve("WebGLState: Invalid blending: ",B);break}else switch(B){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _f:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gf:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xf:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",B);break}b=null,x=null,S=null,T=null,v.set(0,0,0),E=0,m=B,C=ft}return}Et=Et||mt,st=st||et,ut=ut||yt,(mt!==y||Et!==w)&&(r.blendEquationSeparate(Tt[mt],Tt[Et]),y=mt,w=Et),(et!==b||yt!==x||st!==S||ut!==T)&&(r.blendFuncSeparate(tt[et],tt[yt],tt[st],tt[ut]),b=et,x=yt,S=st,T=ut),(at.equals(v)===!1||qt!==E)&&(r.blendColor(at.r,at.g,at.b,qt),v.copy(at),E=qt),m=B,C=!1}function rt(B,mt){B.side===nr?Ct(r.CULL_FACE):ot(r.CULL_FACE);let et=B.side===kn;mt&&(et=!et),F(et),B.blending===Ks&&B.transparent===!1?it(ar):it(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const yt=B.stencilWrite;o.setTest(yt),yt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){P!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),P=B)}function _t(B){B!==E0?(ot(r.CULL_FACE),B!==D&&(B===mf?r.cullFace(r.BACK):B===T0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),D=B}function zt(B){B!==H&&(O&&r.lineWidth(B),H=B)}function Nt(B,mt,et){B?(ot(r.POLYGON_OFFSET_FILL),(V!==mt||N!==et)&&(V=mt,N=et,a.getReversed()&&(mt=-mt),r.polygonOffset(mt,et))):Ct(r.POLYGON_OFFSET_FILL)}function Lt(B){B?ot(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function Xt(B){B===void 0&&(B=r.TEXTURE0+G-1),L!==B&&(r.activeTexture(B),L=B)}function I(B,mt,et){et===void 0&&(L===null?et=r.TEXTURE0+G-1:et=L);let yt=lt[et];yt===void 0&&(yt={type:void 0,texture:void 0},lt[et]=yt),(yt.type!==B||yt.texture!==mt)&&(L!==et&&(r.activeTexture(et),L=et),r.bindTexture(B,mt||ht[B]),yt.type=B,yt.texture=mt)}function de(){const B=lt[L];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Wt(){try{r.compressedTexImage2D(...arguments)}catch(B){ve("WebGLState:",B)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(B){ve("WebGLState:",B)}}function M(){try{r.texSubImage2D(...arguments)}catch(B){ve("WebGLState:",B)}}function k(){try{r.texSubImage3D(...arguments)}catch(B){ve("WebGLState:",B)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(B){ve("WebGLState:",B)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(B){ve("WebGLState:",B)}}function dt(){try{r.texStorage2D(...arguments)}catch(B){ve("WebGLState:",B)}}function ct(){try{r.texStorage3D(...arguments)}catch(B){ve("WebGLState:",B)}}function $(){try{r.texImage2D(...arguments)}catch(B){ve("WebGLState:",B)}}function j(){try{r.texImage3D(...arguments)}catch(B){ve("WebGLState:",B)}}function xt(B){return d[B]!==void 0?d[B]:r.getParameter(B)}function Ot(B,mt){d[B]!==mt&&(r.pixelStorei(B,mt),d[B]=mt)}function vt(B){jt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function gt(B){Jt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Jt.copy(B))}function pt(B,mt){let et=c.get(mt);et===void 0&&(et=new WeakMap,c.set(mt,et));let yt=et.get(B);yt===void 0&&(yt=r.getUniformBlockIndex(mt,B.name),et.set(B,yt))}function Gt(B,mt){const yt=c.get(mt).get(B);l.get(mt)!==yt&&(r.uniformBlockBinding(mt,yt,B.__bindingPointIndex),l.set(mt,yt))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},L=null,lt={},f={},u=new WeakMap,_=[],g=null,p=!1,m=null,y=null,b=null,x=null,w=null,S=null,T=null,v=new le(0,0,0),E=0,C=!1,P=null,D=null,H=null,V=null,N=null,jt.set(0,0,r.canvas.width,r.canvas.height),Jt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:Ct,bindFramebuffer:Vt,drawBuffers:It,useProgram:ee,setBlending:it,setMaterial:rt,setFlipSided:F,setCullFace:_t,setLineWidth:zt,setPolygonOffset:Nt,setScissorTest:Lt,activeTexture:Xt,bindTexture:I,unbindTexture:de,compressedTexImage2D:Wt,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:Ot,getParameter:xt,updateUBOMapping:pt,uniformBlockBinding:Gt,texStorage2D:dt,texStorage3D:ct,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:vt,viewport:gt,reset:Yt}}function uy(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,d=new Set;let f;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return _?new OffscreenCanvas(R,M):Cl("canvas")}function p(R,M,k){let W=1;const K=Wt(R);if((K.width>k||K.height>k)&&(W=k/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const dt=Math.floor(W*K.width),ct=Math.floor(W*K.height);f===void 0&&(f=g(dt,ct));const $=M?g(dt,ct):f;return $.width=dt,$.height=ct,$.getContext("2d").drawImage(R,0,0,dt,ct),te("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+dt+"x"+ct+")."),$}else return"data"in R&&te("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,M,k,W,K,dt=!1){if(R!==null){if(r[R]!==void 0)return r[R];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct;W&&(ct=t.get("EXT_texture_norm16"),ct||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8),k===r.UNSIGNED_SHORT&&ct&&($=ct.R16_EXT),k===r.SHORT&&ct&&($=ct.R16_SNORM_EXT)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),M===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8),k===r.UNSIGNED_SHORT&&ct&&($=ct.RG16_EXT),k===r.SHORT&&ct&&($=ct.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),M===r.RGB&&(k===r.UNSIGNED_SHORT&&ct&&($=ct.RGB16_EXT),k===r.SHORT&&ct&&($=ct.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),M===r.RGBA){const j=dt?Al:ge.getTransfer(K);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=j===we?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ct&&($=ct.RGBA16_EXT),k===r.SHORT&&ct&&($=ct.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function w(R,M){let k;return R?M===null||M===Wi||M===no?k=r.DEPTH24_STENCIL8:M===Oi?k=r.DEPTH32F_STENCIL8:M===eo&&(k=r.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===no?k=r.DEPTH_COMPONENT24:M===Oi?k=r.DEPTH_COMPONENT32F:M===eo&&(k=r.DEPTH_COMPONENT16),k}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){const M=R.target;M.removeEventListener("dispose",T),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(R){const M=R.target;M.removeEventListener("dispose",v),P(M)}function E(R){const M=n.get(R);if(M.__webglInit===void 0)return;const k=R.source,W=u.get(k);if(W){const K=W[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(R),Object.keys(W).length===0&&u.delete(k)}n.remove(R)}function C(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const k=R.source,W=u.get(k);delete W[M.__cacheKey],a.memory.textures--}function P(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let K=0;K<M.__webglFramebuffer[W].length;K++)r.deleteFramebuffer(M.__webglFramebuffer[W][K]);else r.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)r.deleteFramebuffer(M.__webglFramebuffer[W]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let W=0,K=k.length;W<K;W++){const dt=n.get(k[W]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(R)}let D=0;function H(){D=0}function V(){return D}function N(R){D=R}function G(){const R=D;return R>=i.maxTextures&&te("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function O(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Z(R,M){const k=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const W=R.image;if(W===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function nt(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Ct(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function L(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Ct(k,R,M);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function lt(R,M){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Vt(k,R,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const St={[tr]:r.REPEAT,[rr]:r.CLAMP_TO_EDGE,[lh]:r.MIRRORED_REPEAT},Qt={[gn]:r.NEAREST,[Y0]:r.NEAREST_MIPMAP_NEAREST,[So]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[nc]:r.LINEAR_MIPMAP_NEAREST,[ns]:r.LINEAR_MIPMAP_LINEAR},jt={[K0]:r.NEVER,[t_]:r.ALWAYS,[$0]:r.LESS,[Eu]:r.LEQUAL,[J0]:r.EQUAL,[Tu]:r.GEQUAL,[Q0]:r.GREATER,[j0]:r.NOTEQUAL};function Jt(R,M){if(M.type===Oi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===nc||M.magFilter===So||M.magFilter===ns||M.minFilter===Cn||M.minFilter===nc||M.minFilter===So||M.minFilter===ns)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,St[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,St[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,St[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Qt[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Qt[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,jt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==So&&M.minFilter!==ns||M.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function J(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const W=M.source;let K=u.get(W);K===void 0&&(K={},u.set(W,K));const dt=O(M);if(dt!==R.__cacheKey){K[dt]===void 0&&(K[dt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[dt].usedTimes++;const ct=K[R.__cacheKey];ct!==void 0&&(K[R.__cacheKey].usedTimes--,ct.usedTimes===0&&C(M)),R.__cacheKey=dt,R.__webglTexture=K[dt].texture}return k}function ht(R,M,k){return Math.floor(Math.floor(R/k)/M)}function ot(R,M,k,W){const dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,k,W,M.data);else{dt.sort((Ot,vt)=>Ot.start-vt.start);let ct=0;for(let Ot=1;Ot<dt.length;Ot++){const vt=dt[ct],gt=dt[Ot],pt=vt.start+vt.count,Gt=ht(gt.start,M.width,4),Yt=ht(vt.start,M.width,4);gt.start<=pt+1&&Gt===Yt&&ht(gt.start+gt.count-1,M.width,4)===Gt?vt.count=Math.max(vt.count,gt.start+gt.count-vt.start):(++ct,dt[ct]=gt)}dt.length=ct+1;const $=e.getParameter(r.UNPACK_ROW_LENGTH),j=e.getParameter(r.UNPACK_SKIP_PIXELS),xt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ot=0,vt=dt.length;Ot<vt;Ot++){const gt=dt[Ot],pt=Math.floor(gt.start/4),Gt=Math.ceil(gt.count/4),Yt=pt%M.width,B=Math.floor(pt/M.width),mt=Gt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(r.UNPACK_SKIP_ROWS,B),e.texSubImage2D(r.TEXTURE_2D,0,Yt,B,mt,et,k,W,M.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,$),e.pixelStorei(r.UNPACK_SKIP_PIXELS,j),e.pixelStorei(r.UNPACK_SKIP_ROWS,xt)}}function Ct(R,M,k){let W=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=r.TEXTURE_3D);const K=J(R,M),dt=M.source;e.bindTexture(W,R.__webglTexture,r.TEXTURE0+k);const ct=n.get(dt);if(dt.version!==ct.__version||K===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const et=ge.getPrimaries(ge.workingColorSpace),yt=M.colorSpace===Er?null:ge.getPrimaries(M.colorSpace),Et=M.colorSpace===Er||et===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let j=p(M.image,!1,i.maxTextureSize);j=de(M,j);const xt=s.convert(M.format,M.colorSpace),Ot=s.convert(M.type);let vt=x(M.internalFormat,xt,Ot,M.normalized,M.colorSpace,M.isVideoTexture);Jt(W,M);let gt;const pt=M.mipmaps,Gt=M.isVideoTexture!==!0,Yt=ct.__version===void 0||K===!0,B=dt.dataReady,mt=S(M,j);if(M.isDepthTexture)vt=w(M.format===is,M.type),Yt&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,vt,j.width,j.height):e.texImage2D(r.TEXTURE_2D,0,vt,j.width,j.height,0,xt,Ot,null));else if(M.isDataTexture)if(pt.length>0){Gt&&Yt&&e.texStorage2D(r.TEXTURE_2D,mt,vt,pt[0].width,pt[0].height);for(let et=0,yt=pt.length;et<yt;et++)gt=pt[et],Gt?B&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,xt,Ot,gt.data):e.texImage2D(r.TEXTURE_2D,et,vt,gt.width,gt.height,0,xt,Ot,gt.data);M.generateMipmaps=!1}else Gt?(Yt&&e.texStorage2D(r.TEXTURE_2D,mt,vt,j.width,j.height),B&&ot(M,j,xt,Ot)):e.texImage2D(r.TEXTURE_2D,0,vt,j.width,j.height,0,xt,Ot,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&Yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,vt,pt[0].width,pt[0].height,j.depth);for(let et=0,yt=pt.length;et<yt;et++)if(gt=pt[et],M.format!==Ai)if(xt!==null)if(Gt){if(B)if(M.layerUpdates.size>0){const Et=id(gt.width,gt.height,M.format,M.type);for(const st of M.layerUpdates){const ut=gt.data.subarray(st*Et/gt.data.BYTES_PER_ELEMENT,(st+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,st,gt.width,gt.height,1,xt,ut)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,j.depth,xt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,vt,gt.width,gt.height,j.depth,0,gt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,j.depth,xt,Ot,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,vt,gt.width,gt.height,j.depth,0,xt,Ot,gt.data)}else{Gt&&Yt&&e.texStorage2D(r.TEXTURE_2D,mt,vt,pt[0].width,pt[0].height);for(let et=0,yt=pt.length;et<yt;et++)gt=pt[et],M.format!==Ai?xt!==null?Gt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,vt,gt.width,gt.height,0,gt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?B&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,xt,Ot,gt.data):e.texImage2D(r.TEXTURE_2D,et,vt,gt.width,gt.height,0,xt,Ot,gt.data)}else if(M.isDataArrayTexture)if(Gt){if(Yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,vt,j.width,j.height,j.depth),B)if(M.layerUpdates.size>0){const et=id(j.width,j.height,M.format,M.type);for(const yt of M.layerUpdates){const Et=j.data.subarray(yt*et/j.data.BYTES_PER_ELEMENT,(yt+1)*et/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,j.width,j.height,1,xt,Ot,Et)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,xt,Ot,j.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,j.width,j.height,j.depth,0,xt,Ot,j.data);else if(M.isData3DTexture)Gt?(Yt&&e.texStorage3D(r.TEXTURE_3D,mt,vt,j.width,j.height,j.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,xt,Ot,j.data)):e.texImage3D(r.TEXTURE_3D,0,vt,j.width,j.height,j.depth,0,xt,Ot,j.data);else if(M.isFramebufferTexture){if(Yt)if(Gt)e.texStorage2D(r.TEXTURE_2D,mt,vt,j.width,j.height);else{let et=j.width,yt=j.height;for(let Et=0;Et<mt;Et++)e.texImage2D(r.TEXTURE_2D,Et,vt,et,yt,0,xt,Ot,null),et>>=1,yt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),j.parentNode!==et){et.appendChild(j),d.add(M),et.onpaint=yt=>{const Et=yt.changedElements;for(const st of d)Et.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{const Et=r.RGBA,st=r.RGBA,ut=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Et,st,ut,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(pt.length>0){if(Gt&&Yt){const et=Wt(pt[0]);e.texStorage2D(r.TEXTURE_2D,mt,vt,et.width,et.height)}for(let et=0,yt=pt.length;et<yt;et++)gt=pt[et],Gt?B&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,xt,Ot,gt):e.texImage2D(r.TEXTURE_2D,et,vt,xt,Ot,gt);M.generateMipmaps=!1}else if(Gt){if(Yt){const et=Wt(j);e.texStorage2D(r.TEXTURE_2D,mt,vt,et.width,et.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Ot,j)}else e.texImage2D(r.TEXTURE_2D,0,vt,xt,Ot,j);m(M)&&y(W),ct.__version=dt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Vt(R,M,k){if(M.image.length!==6)return;const W=J(R,M),K=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const dt=n.get(K);if(K.version!==dt.__version||W===!0){e.activeTexture(r.TEXTURE0+k);const ct=ge.getPrimaries(ge.workingColorSpace),$=M.colorSpace===Er?null:ge.getPrimaries(M.colorSpace),j=M.colorSpace===Er||ct===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!xt&&!Ot?vt[st]=p(M.image[st],!0,i.maxCubemapSize):vt[st]=Ot?M.image[st].image:M.image[st],vt[st]=de(M,vt[st]);const gt=vt[0],pt=s.convert(M.format,M.colorSpace),Gt=s.convert(M.type),Yt=x(M.internalFormat,pt,Gt,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,mt=dt.__version===void 0||W===!0,et=K.dataReady;let yt=S(M,gt);Jt(r.TEXTURE_CUBE_MAP,M);let Et;if(xt){B&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Yt,gt.width,gt.height);for(let st=0;st<6;st++){Et=vt[st].mipmaps;for(let ut=0;ut<Et.length;ut++){const at=Et[ut];M.format!==Ai?pt!==null?B?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,at.width,at.height,pt,at.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,Yt,at.width,at.height,0,at.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,at.width,at.height,pt,Gt,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,Yt,at.width,at.height,0,pt,Gt,at.data)}}}else{if(Et=M.mipmaps,B&&mt){Et.length>0&&yt++;const st=Wt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Yt,st.width,st.height)}for(let st=0;st<6;st++)if(Ot){B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,pt,Gt,vt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Yt,vt[st].width,vt[st].height,0,pt,Gt,vt[st].data);for(let ut=0;ut<Et.length;ut++){const qt=Et[ut].image[st].image;B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,qt.width,qt.height,pt,Gt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,Yt,qt.width,qt.height,0,pt,Gt,qt.data)}}else{B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt,Gt,vt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Yt,pt,Gt,vt[st]);for(let ut=0;ut<Et.length;ut++){const at=Et[ut];B?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,pt,Gt,at.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,Yt,pt,Gt,at.image[st])}}}m(M)&&y(r.TEXTURE_CUBE_MAP),dt.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function It(R,M,k,W,K,dt){const ct=s.convert(k.format,k.colorSpace),$=s.convert(k.type),j=x(k.internalFormat,ct,$,k.normalized,k.colorSpace),xt=n.get(M),Ot=n.get(k);if(Ot.__renderTarget=M,!xt.__hasExternalTextures){const vt=Math.max(1,M.width>>dt),gt=Math.max(1,M.height>>dt);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,dt,j,vt,gt,M.depth,0,ct,$,null):e.texImage2D(K,dt,j,vt,gt,0,ct,$,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Xt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,K,Ot.__webglTexture,0,Lt(M)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,K,Ot.__webglTexture,dt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(R,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const W=M.depthTexture,K=W&&W.isDepthTexture?W.type:null,dt=w(M.stencilBuffer,K),ct=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(M),dt,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(M),dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,R)}else{const W=M.textures;for(let K=0;K<W.length;K++){const dt=W[K],ct=s.convert(dt.format,dt.colorSpace),$=s.convert(dt.type),j=x(dt.internalFormat,ct,$,dt.normalized,dt.colorSpace);Xt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(M),j,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(M),j,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,j,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(R,M,k){const W=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Jt(r.TEXTURE_CUBE_MAP,M.depthTexture);const xt=s.convert(M.depthTexture.format),Ot=s.convert(M.depthTexture.type);let vt;M.depthTexture.format===hr?vt=r.DEPTH_COMPONENT24:M.depthTexture.format===is&&(vt=r.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,vt,M.width,M.height,0,xt,Ot,null)}}else Z(M.depthTexture,0);const dt=K.__webglTexture,ct=Lt(M),$=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,j=M.depthTexture.format===is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===hr)Xt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,dt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,dt,0);else if(M.depthTexture.format===is)Xt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,dt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(R){const M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=W}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Tt(M.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?Tt(M.__webglFramebuffer[0],R,0):Tt(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=r.createRenderbuffer(),ee(M.__webglDepthbuffer[W],R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,dt)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ee(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,dt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(R,M,k){const W=n.get(R);M!==void 0&&It(W.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&tt(R)}function rt(R){const M=R.texture,k=n.get(R),W=n.get(M);R.addEventListener("dispose",v);const K=R.textures,dt=R.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=M.version,a.memory.textures++),dt){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let j=0;j<M.mipmaps.length;j++)k.__webglFramebuffer[$][j]=r.createFramebuffer()}else k.__webglFramebuffer[$]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)k.__webglFramebuffer[$]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ct)for(let $=0,j=K.length;$<j;$++){const xt=n.get(K[$]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Xt(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const j=K[$];k.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const xt=s.convert(j.format,j.colorSpace),Ot=s.convert(j.type),vt=x(j.internalFormat,xt,Ot,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),gt=Lt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,vt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,k.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Jt(r.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)It(k.__webglFramebuffer[$][j],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else It(k.__webglFramebuffer[$],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(M)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let $=0,j=K.length;$<j;$++){const xt=K[$],Ot=n.get(xt);let vt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ot.__webglTexture),Jt(vt,xt),It(k.__webglFramebuffer,R,xt,r.COLOR_ATTACHMENT0+$,vt,0),m(xt)&&y(vt)}e.unbindTexture()}else{let $=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture($,W.__webglTexture),Jt($,M),M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)It(k.__webglFramebuffer[j],R,M,r.COLOR_ATTACHMENT0,$,j);else It(k.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,$,0);m(M)&&y($),e.unbindTexture()}R.depthBuffer&&tt(R)}function F(R){const M=R.textures;for(let k=0,W=M.length;k<W;k++){const K=M[k];if(m(K)){const dt=b(R),ct=n.get(K).__webglTexture;e.bindTexture(dt,ct),y(dt),e.unbindTexture()}}}const _t=[],zt=[];function Nt(R){if(R.samples>0){if(Xt(R)===!1){const M=R.textures,k=R.width,W=R.height;let K=r.COLOR_BUFFER_BIT;const dt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=n.get(R),$=M.length>1;if($)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const j=R.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[xt]);const Ot=n.get(M[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,k,W,0,0,k,W,K,r.NEAREST),l===!0&&(_t.length=0,zt.length=0,_t.push(r.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_t.push(dt),zt.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,ct.__webglColorRenderbuffer[xt]);const Ot=n.get(M[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Lt(R){return Math.min(i.maxSamples,R.samples)}function Xt(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function I(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function de(R,M){const k=R.colorSpace,W=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==wl&&k!==Er&&(ge.getTransfer(k)===we?(W!==Ai||K!==ri)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",k)),M}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=V,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=nt,this.setTexture3D=L,this.setTextureCube=lt,this.rebindTextures=it,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function fy(r,t){function e(n,i=Er){let s;const a=ge.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===vu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Mu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===yp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mp)return r.BYTE;if(n===Sp)return r.SHORT;if(n===eo)return r.UNSIGNED_SHORT;if(n===xu)return r.INT;if(n===Wi)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===cr)return r.HALF_FLOAT;if(n===Ep)return r.ALPHA;if(n===Tp)return r.RGB;if(n===Ai)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===is)return r.DEPTH_STENCIL;if(n===wp)return r.RED;if(n===Su)return r.RED_INTEGER;if(n===ps)return r.RG;if(n===yu)return r.RG_INTEGER;if(n===bu)return r.RGBA_INTEGER;if(n===cl||n===hl||n===ul||n===fl)if(a===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ch||n===hh||n===uh||n===fh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dh||n===ph||n===mh||n===_h||n===gh||n===El||n===xh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dh||n===ph)return a===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===_h)return s.COMPRESSED_R11_EAC;if(n===gh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===El)return s.COMPRESSED_RG11_EAC;if(n===xh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vh||n===Mh||n===Sh||n===yh||n===bh||n===Eh||n===Th||n===wh||n===Ah||n===Ch||n===Rh||n===Ph||n===Dh||n===Lh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Th)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ah)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ch)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ph)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ih||n===Nh||n===Uh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ih)return a===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Fh||n===Tl||n===Bh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===no?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,py=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class my{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Up(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:dy,fragmentShader:py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _y extends Vr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,_=null;const g=typeof XRWebGLBinding<"u",p=new my,m={},y=e.getContextAttributes();let b=null,x=null;const w=[],S=[],T=new Mt;let v=null;const E=new ni;E.viewport=new Ge;const C=new ni;C.viewport=new Ge;const P=[E,C],D=new Eg;let H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=w[J];return ht===void 0&&(ht=new cc,w[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=w[J];return ht===void 0&&(ht=new cc,w[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=w[J];return ht===void 0&&(ht=new cc,w[J]=ht),ht.getHandSpace()};function N(J){const ht=S.indexOf(J.inputSource);if(ht===-1)return;const ot=w[ht];ot!==void 0&&(ot.update(J.inputSource,J.frame,c||a),ot.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",O);for(let J=0;J<w.length;J++){const ht=S[J];ht!==null&&(S[J]=null,w[J].disconnect(ht))}H=null,V=null,p.reset();for(const J in m)delete m[J];t.setRenderTarget(b),u=null,f=null,d=null,i=null,x=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Ct=null,Vt=null;y.depth&&(Vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?is:hr,Ct=y.stencil?no:Wi);const It={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(It),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Gi(f.textureWidth,f.textureHeight,{format:Ai,type:ri,depthTexture:new oa(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Gi(u.framebufferWidth,u.framebufferHeight,{format:Ai,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(J){for(let ht=0;ht<J.removed.length;ht++){const ot=J.removed[ht],Ct=S.indexOf(ot);Ct>=0&&(S[Ct]=null,w[Ct].disconnect(ot))}for(let ht=0;ht<J.added.length;ht++){const ot=J.added[ht];let Ct=S.indexOf(ot);if(Ct===-1){for(let It=0;It<w.length;It++)if(It>=S.length){S.push(ot),Ct=It;break}else if(S[It]===null){S[It]=ot,Ct=It;break}if(Ct===-1)break}const Vt=w[Ct];Vt&&Vt.connect(ot)}}const Z=new U,nt=new U;function L(J,ht,ot){Z.setFromMatrixPosition(ht.matrixWorld),nt.setFromMatrixPosition(ot.matrixWorld);const Ct=Z.distanceTo(nt),Vt=ht.projectionMatrix.elements,It=ot.projectionMatrix.elements,ee=Vt[14]/(Vt[10]-1),Tt=Vt[14]/(Vt[10]+1),tt=(Vt[9]+1)/Vt[5],it=(Vt[9]-1)/Vt[5],rt=(Vt[8]-1)/Vt[0],F=(It[8]+1)/It[0],_t=ee*rt,zt=ee*F,Nt=Ct/(-rt+F),Lt=Nt*-rt;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(Nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Vt[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Xt=ee+Nt,I=Tt+Nt,de=_t-Lt,Wt=zt+(Ct-Lt),R=tt*Tt/I*Xt,M=it*Tt/I*Xt;J.projectionMatrix.makePerspective(de,Wt,R,M,Xt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ht=J.near,ot=J.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),D.near=C.near=E.near=ht,D.far=C.far=E.far=ot,(H!==D.near||V!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,V=D.far),D.layers.mask=J.layers.mask|6,E.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;const Ct=J.parent,Vt=D.cameras;lt(D,Ct);for(let It=0;It<Vt.length;It++)lt(Vt[It],Ct);Vt.length===2?L(D,E,C):D.projectionMatrix.copy(E.projectionMatrix),St(J,D,Ct)};function St(J,ht,ot){ot===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(J){return m[J]};let Qt=null;function jt(J,ht){if(h=ht.getViewerPose(c||a),_=ht,h!==null){const ot=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let Ct=!1;ot.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let Tt=0;Tt<ot.length;Tt++){const tt=ot[Tt];let it=null;if(u!==null)it=u.getViewport(tt);else{const F=d.getViewSubImage(f,tt);it=F.viewport,Tt===0&&(t.setRenderTargetTextures(x,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(x))}let rt=P[Tt];rt===void 0&&(rt=new ni,rt.layers.enable(Tt),rt.viewport=new Ge,P[Tt]=rt),rt.matrix.fromArray(tt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(tt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(it.x,it.y,it.width,it.height),Tt===0&&(D.matrix.copy(rt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(rt)}const Vt=i.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Tt=d.getDepthInformation(ot[0]);Tt&&Tt.isValid&&Tt.texture&&p.init(Tt,i.renderState)}if(Vt&&Vt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Tt=0;Tt<ot.length;Tt++){const tt=ot[Tt].camera;if(tt){let it=m[tt];it||(it=new Up,m[tt]=it);const rt=d.getCameraImage(tt);it.sourceTexture=rt}}}}for(let ot=0;ot<w.length;ot++){const Ct=S[ot],Vt=w[ot];Ct!==null&&Vt!==void 0&&Vt.update(Ct,ht,c||a)}Qt&&Qt(J,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),_=null}const Jt=new Zp;Jt.setAnimationLoop(jt),this.setAnimationLoop=function(J){Qt=J},this.dispose=function(){}}}const gy=new Fe,em=new re;em.set(-1,0,0,0,1,0,0,0,1);function xy(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,b,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),b=y.envMap,x=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(em),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vy(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const S=w.program;n.uniformBlockBinding(x,S)}function c(x,w){let S=i[x.id];S===void 0&&(p(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",y));const T=w.program;n.updateUBOMapping(x,T);const v=t.render.frame;s[x.id]!==v&&(f(x),s[x.id]=v)}function h(x){const w=d();x.__bindingPointIndex=w;const S=r.createBuffer(),T=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,S),S}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const w=i[x.id],S=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let v=0,E=S.length;v<E;v++){const C=S[v];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)u(C[P],v,P,T);else u(C,v,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(x,w,S,T){if(g(x,w,S,T)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){const D=E[P],H=m(D);_(D,x.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function _(x,w,S){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,S)}function g(x,w,S,T){const v=x.value,E=w+"_"+S;if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:ArrayBuffer.isView(v)?T[E]=v.slice():T[E]=v.clone(),!0;{const C=T[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return T[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(x){const w=x.uniforms;let S=0;const T=16;for(let E=0,C=w.length;E<C;E++){const P=Array.isArray(w[E])?w[E]:[w[E]];for(let D=0,H=P.length;D<H;D++){const V=P[D],N=Array.isArray(V.value)?V.value:[V.value];for(let G=0,O=N.length;G<O;G++){const Z=N[G],nt=m(Z),L=S%T,lt=L%nt.boundary,St=L+lt;S+=lt,St!==0&&T-St<nt.storage&&(S+=T-St),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=nt.storage}}}const v=S%T;return v>0&&(S+=T-v),x.__size=S,x.__cache={},this}function m(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):te("WebGLRenderer: Unsupported uniform value type.",x),w}function y(x){const w=x.target;w.removeEventListener("dispose",y);const S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function b(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:b}}const My=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function Sy(){return Di===null&&(Di=new w_(My,16,16,ps,cr),Di.name="DFG_LUT",Di.minFilter=Cn,Di.magFilter=Cn,Di.wrapS=rr,Di.wrapT=rr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class yy{constructor(t={}){const{canvas:e=n_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ri}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=u,p=new Set([bu,yu,Su]),m=new Set([ri,Wi,eo,no,vu,Mu]),y=new Uint32Array(4),b=new Int32Array(4),x=new U;let w=null,S=null;const T=[],v=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,D=null,H=null,V=null,N=null;this._outputColorSpace=_i;let G=0,O=0,Z=null,nt=-1,L=null;const lt=new Ge,St=new Ge;let Qt=null;const jt=new le(0);let Jt=0,J=e.width,ht=e.height,ot=1,Ct=null,Vt=null;const It=new Ge(0,0,J,ht),ee=new Ge(0,0,J,ht);let Tt=!1;const tt=new Ru;let it=!1,rt=!1;const F=new Fe,_t=new U,zt=new Ge,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Xt(){return Z===null?ot:1}let I=n;function de(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Zt,!1),I===null){const z="webgl2";if(I=de(z,A),I===null)throw de(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw ve("WebGLRenderer: "+A.message),A}let Wt,R,M,k,W,K,dt,ct,$,j,xt,Ot,vt,gt,pt,Gt,Yt,B,mt,et,yt,Et,st;function ut(){Wt=new SM(I),Wt.init(),yt=new fy(I,Wt),R=new dM(I,Wt,t,yt),M=new hy(I,Wt),R.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),H=I.createFramebuffer(),V=I.createFramebuffer(),N=I.createFramebuffer(),k=new EM(I),W=new $S,K=new uy(I,Wt,M,W,R,yt,k),dt=new MM(C),ct=new Cg(I),Et=new uM(I,ct),$=new yM(I,ct,k,Et),j=new wM(I,$,ct,Et,k),B=new TM(I,R,K),pt=new pM(W),xt=new KS(C,dt,Wt,R,Et,pt),Ot=new xy(C,W),vt=new QS,gt=new ry(Wt),Yt=new hM(C,dt,M,j,_,l),Gt=new cy(C,j,R),st=new vy(I,k,R,M),mt=new fM(I,Wt,k),et=new bM(I,Wt,k),k.programs=xt.programs,C.capabilities=R,C.extensions=Wt,C.properties=W,C.renderLists=vt,C.shadowMap=Gt,C.state=M,C.info=k}ut(),g!==ri&&(E=new CM(g,e.width,e.height,o,i,s));const at=new _y(C,I);this.xr=at,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(J,ht,!1))},this.getSize=function(A){return A.set(J,ht)},this.setSize=function(A,z,q=!0){if(at.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,ht=z,e.width=Math.floor(A*ot),e.height=Math.floor(z*ot),q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(J*ot,ht*ot).floor()},this.setDrawingBufferSize=function(A,z,q){J=A,ht=z,ot=q,e.width=Math.floor(A*q),e.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(g===ri){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(lt)},this.getViewport=function(A){return A.copy(It)},this.setViewport=function(A,z,q,X){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,z,q,X),M.viewport(lt.copy(It).multiplyScalar(ot).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,z,q,X){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,z,q,X),M.scissor(St.copy(ee).multiplyScalar(ot).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){M.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){Ct=A},this.setTransparentSort=function(A){Vt=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let X=0;if(A){let Y=!1;if(Z!==null){const At=Z.texture.format;Y=p.has(At)}if(Y){const At=Z.texture.type,Rt=m.has(At),Dt=Yt.getClearColor(),Ht=Yt.getClearAlpha(),Kt=Dt.r,oe=Dt.g,ue=Dt.b;Rt?(y[0]=Kt,y[1]=oe,y[2]=ue,y[3]=Ht,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=Kt,b[1]=oe,b[2]=ue,b[3]=Ht,I.clearBufferiv(I.COLOR,0,b))}else X|=I.COLOR_BUFFER_BIT}z&&(X|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),Yt.dispose(),vt.dispose(),gt.dispose(),W.dispose(),dt.dispose(),j.dispose(),Et.dispose(),st.dispose(),xt.dispose(),at.dispose(),at.removeEventListener("sessionstart",se),at.removeEventListener("sessionend",Me),ae.stop()};function qt(A){A.preventDefault(),bf("WebGLRenderer: Context Lost."),P=!0}function ft(){bf("WebGLRenderer: Context Restored."),P=!1;const A=k.autoReset,z=Gt.enabled,q=Gt.autoUpdate,X=Gt.needsUpdate,Y=Gt.type;ut(),k.autoReset=A,Gt.enabled=z,Gt.autoUpdate=q,Gt.needsUpdate=X,Gt.type=Y}function Zt(A){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const z=A.target;z.removeEventListener("dispose",Bt),ne(z)}function ne(A){Ue(A),W.remove(A)}function Ue(A){const z=W.get(A).programs;z!==void 0&&(z.forEach(function(q){xt.releaseProgram(q)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,X,Y,At){z===null&&(z=Nt);const Rt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Dt=un(A,z,q,X,Y);M.setMaterial(X,Rt);let Ht=q.index,Kt=1;if(X.wireframe===!0){if(Ht=$.getWireframeAttribute(q),Ht===void 0)return;Kt=2}const oe=q.drawRange,ue=q.attributes.position;let $t=oe.start*Kt,Ae=(oe.start+oe.count)*Kt;At!==null&&($t=Math.max($t,At.start*Kt),Ae=Math.min(Ae,(At.start+At.count)*Kt)),Ht!==null?($t=Math.max($t,0),Ae=Math.min(Ae,Ht.count)):ue!=null&&($t=Math.max($t,0),Ae=Math.min(Ae,ue.count));const Ze=Ae-$t;if(Ze<0||Ze===1/0)return;Et.setup(Y,X,Dt,q,Ht);let Xe,Re=mt;if(Ht!==null&&(Xe=ct.get(Ht),Re=et,Re.setIndex(Xe)),Y.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*Xt()),Re.setMode(I.LINES)):Re.setMode(I.TRIANGLES);else if(Y.isLine){let Sn=X.linewidth;Sn===void 0&&(Sn=1),M.setLineWidth(Sn*Xt()),Y.isLineSegments?Re.setMode(I.LINES):Y.isLineLoop?Re.setMode(I.LINE_LOOP):Re.setMode(I.LINE_STRIP)}else Y.isPoints?Re.setMode(I.POINTS):Y.isSprite&&Re.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Re.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Sn=Y._multiDrawStarts,Ft=Y._multiDrawCounts,$n=Y._multiDrawCount,Se=Ht?ct.get(Ht).bytesPerElement:1,di=W.get(X).currentProgram.getUniforms();for(let Ri=0;Ri<$n;Ri++)di.setValue(I,"_gl_DrawID",Ri),Re.render(Sn[Ri]/Se,Ft[Ri])}else if(Y.isInstancedMesh)Re.renderInstances($t,Ze,Y.count);else if(q.isInstancedBufferGeometry){const Sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ft=Math.min(q.instanceCount,Sn);Re.renderInstances($t,Ze,Ft)}else Re.render($t,Ze)};function wt(A,z,q){A.transparent===!0&&A.side===nr&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,We(A,z,q),A.side=Ur,A.needsUpdate=!0,We(A,z,q),A.side=nr):We(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),S=gt.get(q),S.init(z),v.push(S),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();const X=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const At=Y.material;if(At)if(Array.isArray(At))for(let Rt=0;Rt<At.length;Rt++){const Dt=At[Rt];wt(Dt,q,Y),X.add(Dt)}else wt(At,q,Y),X.add(At)}),S=v.pop(),X},this.compileAsync=function(A,z,q=null){const X=this.compile(A,z,q);return new Promise(Y=>{function At(){if(X.forEach(function(Rt){W.get(Rt).currentProgram.isReady()&&X.delete(Rt)}),X.size===0){Y(A);return}setTimeout(At,10)}Wt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ut=null;function ie(A){Ut&&Ut(A)}function se(){ae.stop()}function Me(){ae.start()}const ae=new Zp;ae.setAnimationLoop(ie),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(A){Ut=A,at.setAnimationLoop(A),A===null?ae.stop():ae.start()},at.addEventListener("sessionstart",se),at.addEventListener("sessionend",Me),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,z);const q=at.enabled===!0&&at.isPresenting===!0,X=E!==null&&(Z===null||q)&&E.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,Z),S=gt.get(A,v.length),S.init(z),S.state.textureUnits=K.getTextureUnits(),v.push(S),F.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(F,Fi,z.reversedDepth),rt=this.localClippingEnabled,it=pt.init(this.clippingPlanes,rt),w=vt.get(A,T.length),w.init(),T.push(w),at.enabled===!0&&at.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&je(Rt,z,-1/0,C.sortObjects)}je(A,z,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(Ct,Vt,z.reversedDepth),Lt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Lt&&Yt.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&pt.beginShadows();const Y=S.state.shadowsArray;if(Gt.render(Y,A,z),it===!0&&pt.endShadows(),(X&&E.hasRenderPass())===!1){const Rt=w.opaque,Dt=w.transmissive;if(S.setupLights(),z.isArrayCamera){const Ht=z.cameras;if(Dt.length>0)for(let Kt=0,oe=Ht.length;Kt<oe;Kt++){const ue=Ht[Kt];Mn(Rt,Dt,A,ue)}Lt&&Yt.render(A);for(let Kt=0,oe=Ht.length;Kt<oe;Kt++){const ue=Ht[Kt];Ee(w,A,ue,ue.viewport)}}else Dt.length>0&&Mn(Rt,Dt,A,z),Lt&&Yt.render(A),Ee(w,A,z)}Z!==null&&O===0&&(K.updateMultisampleRenderTarget(Z),K.updateRenderTargetMipmap(Z)),X&&E.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),Et.resetDefaultState(),nt=-1,L=null,v.pop(),v.length>0?(S=v[v.length-1],K.setTextureUnits(S.state.textureUnits),it===!0&&pt.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,D!==null&&D.renderEnd()};function je(A,z,q,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||tt.intersectsSprite(A)){X&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const Rt=j.update(A),Dt=A.material;Dt.visible&&w.push(A,Rt,Dt,q,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||tt.intersectsObject(A))){const Rt=j.update(A),Dt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),zt.copy(Rt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(F)),Array.isArray(Dt)){const Ht=Rt.groups;for(let Kt=0,oe=Ht.length;Kt<oe;Kt++){const ue=Ht[Kt],$t=Dt[ue.materialIndex];$t&&$t.visible&&w.push(A,Rt,$t,q,zt.z,ue)}}else Dt.visible&&w.push(A,Rt,Dt,q,zt.z,null)}}const At=A.children;for(let Rt=0,Dt=At.length;Rt<Dt;Rt++)je(At[Rt],z,q,X)}function Ee(A,z,q,X){const{opaque:Y,transmissive:At,transparent:Rt}=A;S.setupLightsView(q),it===!0&&pt.setGlobalState(C.clippingPlanes,q),X&&M.viewport(lt.copy(X)),Y.length>0&&Dn(Y,z,q),At.length>0&&Dn(At,z,q),Rt.length>0&&Dn(Rt,z,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Mn(A,z,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){const $t=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new Gi(1,1,{generateMipmaps:!0,type:$t?cr:ri,minFilter:ns,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const At=S.state.transmissionRenderTarget[X.id],Rt=X.viewport||lt;At.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);const Dt=C.getRenderTarget(),Ht=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(jt),Jt=C.getClearAlpha(),Jt<1&&C.setClearColor(16777215,.5),C.clear(),Lt&&Yt.render(q);const oe=C.toneMapping;C.toneMapping=zi;const ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),it===!0&&pt.setGlobalState(C.clippingPlanes,X),Dn(A,q,X),K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ae=0,Ze=z.length;Ae<Ze;Ae++){const Xe=z[Ae],{object:Re,geometry:Sn,material:Ft,group:$n}=Xe;if(Ft.side===nr&&Re.layers.test(X.layers)){const Se=Ft.side;Ft.side=kn,Ft.needsUpdate=!0,tn(Re,q,X,Sn,Ft,$n),Ft.side=Se,Ft.needsUpdate=!0,$t=!0}}$t===!0&&(K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At))}C.setRenderTarget(Dt,Ht,Kt),C.setClearColor(jt,Jt),ue!==void 0&&(X.viewport=ue),C.toneMapping=oe}function Dn(A,z,q){const X=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,At=A.length;Y<At;Y++){const Rt=A[Y],{object:Dt,geometry:Ht,group:Kt}=Rt;let oe=Rt.material;oe.allowOverride===!0&&X!==null&&(oe=X),Dt.layers.test(q.layers)&&tn(Dt,z,q,Ht,oe,Kt)}}function tn(A,z,q,X,Y,At){A.onBeforeRender(C,z,q,X,Y,At),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,z,q,X,A,At),Y.transparent===!0&&Y.side===nr&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,C.renderBufferDirect(q,z,X,Y,A,At),Y.side=Ur,Y.needsUpdate=!0,C.renderBufferDirect(q,z,X,Y,A,At),Y.side=nr):C.renderBufferDirect(q,z,X,Y,A,At),A.onAfterRender(C,z,q,X,Y,At)}function We(A,z,q){z.isScene!==!0&&(z=Nt);const X=W.get(A),Y=S.state.lights,At=S.state.shadowsArray,Rt=Y.state.version,Dt=xt.getParameters(A,Y.state,At,z,q,S.state.lightProbeGridArray),Ht=xt.getProgramCacheKey(Dt);let Kt=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;const oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=dt.get(A.envMap||X.environment,oe),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Bt),Kt=new Map,X.programs=Kt);let ue=Kt.get(Ht);if(ue!==void 0){if(X.currentProgram===ue&&X.lightsStateVersion===Rt)return Ci(A,Dt),ue}else Dt.uniforms=xt.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,q,Dt),A.onBeforeCompile(Dt,C),ue=xt.acquireProgram(Dt,Ht),Kt.set(Ht,ue),X.uniforms=Dt.uniforms;const $t=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=pt.uniform),Ci(A,Dt),X.needsLights=fi(A),X.lightsStateVersion=Rt,X.needsLights&&($t.ambientLightColor.value=Y.state.ambient,$t.lightProbe.value=Y.state.probe,$t.directionalLights.value=Y.state.directional,$t.directionalLightShadows.value=Y.state.directionalShadow,$t.spotLights.value=Y.state.spot,$t.spotLightShadows.value=Y.state.spotShadow,$t.rectAreaLights.value=Y.state.rectArea,$t.ltc_1.value=Y.state.rectAreaLTC1,$t.ltc_2.value=Y.state.rectAreaLTC2,$t.pointLights.value=Y.state.point,$t.pointLightShadows.value=Y.state.pointShadow,$t.hemisphereLights.value=Y.state.hemi,$t.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$t.spotLightMatrix.value=Y.state.spotLightMatrix,$t.spotLightMap.value=Y.state.spotLightMap,$t.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=ue,X.uniformsList=null,ue}function sn(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=pl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ci(A,z){const q=W.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Ms(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let q=0,X=A.length;q<X;q++){const Y=A[q];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function un(A,z,q,X,Y){z.isScene!==!0&&(z=Nt),K.resetTextureUnits();const At=z.fog,Rt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Dt=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ge.workingColorSpace,Ht=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Kt=dt.get(X.envMap||Rt,Ht),oe=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ue=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),$t=!!q.morphAttributes.position,Ae=!!q.morphAttributes.normal,Ze=!!q.morphAttributes.color;let Xe=zi;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const Re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Sn=Re!==void 0?Re.length:0,Ft=W.get(X),$n=S.state.lights;if(it===!0&&(rt===!0||A!==L)){const Ie=A===L&&X.id===nt;pt.setState(X,A,Ie)}let Se=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==$n.state.version||Ft.outputColorSpace!==Dt||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==Kt||X.fog===!0&&Ft.fog!==At||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==pt.numPlanes||Ft.numIntersection!==pt.numIntersection)||Ft.vertexAlphas!==oe||Ft.vertexTangents!==ue||Ft.morphTargets!==$t||Ft.morphNormals!==Ae||Ft.morphColors!==Ze||Ft.toneMapping!==Xe||Ft.morphTargetsCount!==Sn||!!Ft.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Ft.__version=X.version);let di=Ft.currentProgram;Se===!0&&(di=We(X,z,Y),D&&X.isNodeMaterial&&D.onUpdateProgram(X,di,Ft));let Ri=!1,dr=!1,Ss=!1;const Pe=di.getUniforms(),Ke=Ft.uniforms;if(M.useProgram(di.program)&&(Ri=!0,dr=!0,Ss=!0),X.id!==nt&&(nt=X.id,dr=!0),Ft.needsLights){const Ie=Ms(S.state.lightProbeGridArray,Y);Ft.lightProbeGrid!==Ie&&(Ft.lightProbeGrid=Ie,dr=!0)}if(Ri||L!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(I,"projectionMatrix",A.projectionMatrix),Pe.setValue(I,"viewMatrix",A.matrixWorldInverse);const mr=Pe.map.cameraPosition;mr!==void 0&&mr.setValue(I,_t.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&Pe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Pe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,dr=!0,Ss=!0)}if(Ft.needsLights&&($n.state.directionalShadowMap.length>0&&Pe.setValue(I,"directionalShadowMap",$n.state.directionalShadowMap,K),$n.state.spotShadowMap.length>0&&Pe.setValue(I,"spotShadowMap",$n.state.spotShadowMap,K),$n.state.pointShadowMap.length>0&&Pe.setValue(I,"pointShadowMap",$n.state.pointShadowMap,K)),Y.isSkinnedMesh){Pe.setOptional(I,Y,"bindMatrix"),Pe.setOptional(I,Y,"bindMatrixInverse");const Ie=Y.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Pe.setValue(I,"boneTexture",Ie.boneTexture,K))}Y.isBatchedMesh&&(Pe.setOptional(I,Y,"batchingTexture"),Pe.setValue(I,"batchingTexture",Y._matricesTexture,K),Pe.setOptional(I,Y,"batchingIdTexture"),Pe.setValue(I,"batchingIdTexture",Y._indirectTexture,K),Pe.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pe.setValue(I,"batchingColorTexture",Y._colorsTexture,K));const pr=q.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&B.update(Y,q,di),(dr||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,Pe.setValue(I,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Ke.envMapIntensity.value=z.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Sy()),dr){if(Pe.setValue(I,"toneMappingExposure",C.toneMappingExposure),Ft.needsLights&&qe(Ke,Ss),At&&X.fog===!0&&Ot.refreshFogUniforms(Ke,At),Ot.refreshMaterialUniforms(Ke,X,ot,ht,S.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){const Ie=Ft.lightProbeGrid;Ke.probesSH.value=Ie.texture,Ke.probesMin.value.copy(Ie.boundingBox.min),Ke.probesMax.value.copy(Ie.boundingBox.max),Ke.probesResolution.value.copy(Ie.resolution)}pl.upload(I,sn(Ft),Ke,K)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pl.upload(I,sn(Ft),Ke,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Pe.setValue(I,"center",Y.center),Pe.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Pe.setValue(I,"normalMatrix",Y.normalMatrix),Pe.setValue(I,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const Ie=X.uniformsGroups;for(let mr=0,ys=Ie.length;mr<ys;mr++){const pf=Ie[mr];st.update(pf,di),st.bind(pf,di)}}return di}function qe(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function fi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,z,q){const X=W.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=z,W.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=W.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,q=0){Z=A,G=z,O=q;let X=null,Y=!1,At=!1;if(A){const Dt=W.get(A);if(Dt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(I.FRAMEBUFFER,Dt.__webglFramebuffer),lt.copy(A.viewport),St.copy(A.scissor),Qt=A.scissorTest,M.viewport(lt),M.scissor(St),M.setScissorTest(Qt),nt=-1;return}else if(Dt.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(Dt.__hasExternalTextures)K.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const oe=A.depthTexture;if(Dt.__boundDepthTexture!==oe){if(oe!==null&&W.has(oe)&&(A.width!==oe.image.width||A.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Kt=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[z])?X=Kt[z][q]:X=Kt[z],Y=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?X=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[q]:X=Kt,lt.copy(A.viewport),St.copy(A.scissor),Qt=A.scissorTest}else lt.copy(It).multiplyScalar(ot).floor(),St.copy(ee).multiplyScalar(ot).floor(),Qt=Tt;if(q!==0&&(X=H),M.bindFramebuffer(I.FRAMEBUFFER,X)&&M.drawBuffers(A,X),M.viewport(lt),M.scissor(St),M.setScissorTest(Qt),Y){const Dt=W.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Dt.__webglTexture,q)}else if(At){const Dt=z;for(let Ht=0;Ht<A.textures.length;Ht++){const Kt=W.get(A.textures[Ht]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ht,Kt.__webglTexture,q,Dt)}}else if(A!==null&&q!==0){const Dt=W.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,q)}nt=-1},this.readRenderTargetPixels=function(A,z,q,X,Y,At,Rt,Dt=0){if(!(A&&A.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ht=Ht[Rt]),Ht){M.bindFramebuffer(I.FRAMEBUFFER,Ht);try{const Kt=A.textures[Dt],oe=Kt.format,ue=Kt.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Dt),!R.textureFormatReadable(oe)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(ue)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&q>=0&&q<=A.height-Y&&I.readPixels(z,q,X,Y,yt.convert(oe),yt.convert(ue),At)}finally{const Kt=Z!==null?W.get(Z).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,X,Y,At,Rt,Dt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ht=Ht[Rt]),Ht)if(z>=0&&z<=A.width-X&&q>=0&&q<=A.height-Y){M.bindFramebuffer(I.FRAMEBUFFER,Ht);const Kt=A.textures[Dt],oe=Kt.format,ue=Kt.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Dt),!R.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),I.readPixels(z,q,X,Y,yt.convert(oe),yt.convert(ue),0);const Ae=Z!==null?W.get(Z).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Ae);const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await i_(I,Ze,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.deleteBuffer($t),I.deleteSync(Ze),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const X=Math.pow(2,-q),Y=Math.floor(A.image.width*X),At=Math.floor(A.image.height*X),Rt=z!==null?z.x:0,Dt=z!==null?z.y:0;K.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Rt,Dt,Y,At),M.unbindTexture()},this.copyTextureToTexture=function(A,z,q=null,X=null,Y=0,At=0){let Rt,Dt,Ht,Kt,oe,ue,$t,Ae,Ze;const Xe=A.isCompressedTexture?A.mipmaps[At]:A.image;if(q!==null)Rt=q.max.x-q.min.x,Dt=q.max.y-q.min.y,Ht=q.isBox3?q.max.z-q.min.z:1,Kt=q.min.x,oe=q.min.y,ue=q.isBox3?q.min.z:0;else{const Ke=Math.pow(2,-Y);Rt=Math.floor(Xe.width*Ke),Dt=Math.floor(Xe.height*Ke),A.isDataArrayTexture?Ht=Xe.depth:A.isData3DTexture?Ht=Math.floor(Xe.depth*Ke):Ht=1,Kt=0,oe=0,ue=0}X!==null?($t=X.x,Ae=X.y,Ze=X.z):($t=0,Ae=0,Ze=0);const Re=yt.convert(z.format),Sn=yt.convert(z.type);let Ft;z.isData3DTexture?(K.setTexture3D(z,0),Ft=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Ft=I.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Ft=I.TEXTURE_2D),M.activeTexture(I.TEXTURE0),M.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const $n=M.getParameter(I.UNPACK_ROW_LENGTH),Se=M.getParameter(I.UNPACK_IMAGE_HEIGHT),di=M.getParameter(I.UNPACK_SKIP_PIXELS),Ri=M.getParameter(I.UNPACK_SKIP_ROWS),dr=M.getParameter(I.UNPACK_SKIP_IMAGES);M.pixelStorei(I.UNPACK_ROW_LENGTH,Xe.width),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xe.height),M.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),M.pixelStorei(I.UNPACK_SKIP_ROWS,oe),M.pixelStorei(I.UNPACK_SKIP_IMAGES,ue);const Ss=A.isDataArrayTexture||A.isData3DTexture,Pe=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Ke=W.get(A),pr=W.get(z),Ie=W.get(Ke.__renderTarget),mr=W.get(pr.__renderTarget);M.bindFramebuffer(I.READ_FRAMEBUFFER,Ie.__webglFramebuffer),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let ys=0;ys<Ht;ys++)Ss&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(A).__webglTexture,Y,ue+ys),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(z).__webglTexture,At,Ze+ys)),I.blitFramebuffer(Kt,oe,Rt,Dt,$t,Ae,Rt,Dt,I.DEPTH_BUFFER_BIT,I.NEAREST);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||W.has(A)){const Ke=W.get(A),pr=W.get(z);M.bindFramebuffer(I.READ_FRAMEBUFFER,V),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let Ie=0;Ie<Ht;Ie++)Ss?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ke.__webglTexture,Y,ue+Ie):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ke.__webglTexture,Y),Pe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pr.__webglTexture,At,Ze+Ie):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pr.__webglTexture,At),Y!==0?I.blitFramebuffer(Kt,oe,Rt,Dt,$t,Ae,Rt,Dt,I.COLOR_BUFFER_BIT,I.NEAREST):Pe?I.copyTexSubImage3D(Ft,At,$t,Ae,Ze+Ie,Kt,oe,Rt,Dt):I.copyTexSubImage2D(Ft,At,$t,Ae,Kt,oe,Rt,Dt);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Pe?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ft,At,$t,Ae,Ze,Rt,Dt,Ht,Re,Sn,Xe.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Ft,At,$t,Ae,Ze,Rt,Dt,Ht,Re,Xe.data):I.texSubImage3D(Ft,At,$t,Ae,Ze,Rt,Dt,Ht,Re,Sn,Xe):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,$t,Ae,Rt,Dt,Re,Sn,Xe.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,$t,Ae,Xe.width,Xe.height,Re,Xe.data):I.texSubImage2D(I.TEXTURE_2D,At,$t,Ae,Rt,Dt,Re,Sn,Xe);M.pixelStorei(I.UNPACK_ROW_LENGTH,$n),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se),M.pixelStorei(I.UNPACK_SKIP_PIXELS,di),M.pixelStorei(I.UNPACK_SKIP_ROWS,Ri),M.pixelStorei(I.UNPACK_SKIP_IMAGES,dr),At===0&&z.generateMipmaps&&I.generateMipmap(Ft),M.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){G=0,O=0,Z=null,M.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}const Ad={type:"change"},Nu={type:"start"},nm={type:"end"},Zo=new Cu,Cd=new br,by=Math.cos(70*a_.DEG2RAD),an=new U,Vn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bc=1e-6;class Ey extends wg{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Or,this._lastTargetPosition=new U,this._quat=new Or().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ed,this._sphericalDelta=new ed,this._scale=1,this._panOffset=new U,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new U,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wy.bind(this),this._onPointerDown=Ty.bind(this),this._onPointerUp=Ay.bind(this),this._onContextMenu=Ny.bind(this),this._onMouseWheel=Py.bind(this),this._onKeyDown=Dy.bind(this),this._onTouchStart=Ly.bind(this),this._onTouchMove=Iy.bind(this),this._onMouseDown=Cy.bind(this),this._onMouseMove=Ry.bind(this),this._interceptControlDown=Uy.bind(this),this._interceptControlUp=Oy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ad),this.update(),this.state=Ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Vn:n>Math.PI&&(n-=Vn),i<-Math.PI?i+=Vn:i>Math.PI&&(i-=Vn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=an.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zo.origin.copy(this.object.position),Zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zo.direction))<by?this.object.lookAt(this.target):(Cd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zo.intersectPlane(Cd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bc||this._lastTargetPosition.distanceToSquared(this.target)>Bc?(this.dispatchEvent(Ad),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;an.copy(i).sub(this.target);let s=an.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ty(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wy(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Ay(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nm),this.state=Ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Cy(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ce.DOLLY;break;case Zs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ce.ROTATE}break;case Zs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(Nu)}function Ry(r){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Py(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(r.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(nm))}function Dy(r){this.enabled!==!1&&this._handleKeyDown(r)}function Ly(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ce.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ce.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(Nu)}function Iy(r){switch(this._trackPointer(r),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ce.NONE}}function Ny(r){this.enabled!==!1&&r.preventDefault()}function Uy(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Oy(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Fy{constructor(t){this.canvas=t,this.isNight=!1,this.isOrbitEnabled=!1,this.frameCount=0,this.fps=60,this.lastTime=performance.now(),this.initRenderer(),this.initScene(),this.initCamera(),this.initSunsetEnvironment(),this.initLights(),this.initControls(),this.initEvents()}initRenderer(){this.renderer=new yy({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=up,this.renderer.toneMapping=gu,this.renderer.toneMappingExposure=1.3}initScene(){this.scene=new M_,this.scene.background=new le(1840678),this.scene.fog=new Au(1446432,.006)}initSunsetEnvironment(){const t=new Yl(350,32,16),e=document.createElement("canvas");e.width=1,e.height=256;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#0a0d1a"),i.addColorStop(.35,"#2a1b38"),i.addColorStop(.7,"#ea580c"),i.addColorStop(.9,"#f97316"),i.addColorStop(1,"#fbbf24"),n.fillStyle=i,n.fillRect(0,0,1,256);const s=new $r(e),a=new Tr({map:s,side:kn}),o=new Q(t,a);this.scene.add(o)}initCamera(){this.camera=new ni(42,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(52,22,65),this.cameraTarget=new U(0,18,0),this.camera.lookAt(this.cameraTarget)}initLights(){this.ambientLight=new yg(16486972,.55),this.scene.add(this.ambientLight),this.hemiLight=new vg(16347926,988970,.75),this.scene.add(this.hemiLight),this.sunLight=new td(16755268,3.8),this.sunLight.position.set(-60,22,-40),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=240;const t=65;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-3e-4,this.scene.add(this.sunLight),this.rimLight=new td(61695,1.4),this.rimLight.position.set(50,60,50),this.scene.add(this.rimLight),this.drawingLight=new Xo(16772565,1.5,18),this.drawingLight.position.set(-6,26.2,7.5),this.scene.add(this.drawingLight),this.kitchenLight=new Xo(16775149,1.5,18),this.kitchenLight.position.set(7.5,26.2,7.5),this.scene.add(this.kitchenLight),this.bedroomLight=new Xo(16708551,1.4,18),this.bedroomLight.position.set(-6.5,26,-9),this.scene.add(this.bedroomLight),this.bathLight=new Xo(14742270,1.4,18),this.bathLight.position.set(6.5,26,-6.5),this.scene.add(this.bathLight)}initControls(){this.controls=new Ey(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.01,this.controls.minDistance=8,this.controls.maxDistance=180,this.controls.target.copy(this.cameraTarget),this.controls.enabled=!1}initEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}toggleNightMode(){return this.isNight=!this.isNight,this.isNight?(this.scene.background.setHex(198418),this.scene.fog.color.setHex(198418),this.ambientLight.intensity=.15,this.sunLight.intensity=.3,this.sunLight.color.setHex(3718648)):(this.scene.background.setHex(1840678),this.scene.fog.color.setHex(1446432),this.ambientLight.intensity=.55,this.sunLight.intensity=3.8,this.sunLight.color.setHex(16755268)),this.isNight}toggleOrbitControls(){return this.isOrbitEnabled=!this.isOrbitEnabled,this.controls.enabled=this.isOrbitEnabled,this.isOrbitEnabled}render(t){const e=performance.now();this.frameCount++,e-this.lastTime>=1e3&&(this.fps=Math.round(this.frameCount*1e3/(e-this.lastTime)),this.frameCount=0,this.lastTime=e,t&&t(this.fps)),this.isOrbitEnabled?this.controls.update():this.camera.lookAt(this.cameraTarget),this.renderer.render(this.scene,this.camera)}}class By{constructor(t){this.scene=t,this.rootGroup=new Ne,this.layers={ground:new Ne,concrete:new Ne,facade:new Ne,penthouse:new Ne,rebar:new Ne,crane:new Ne},this.materials={},this.explodedFactor=0,this.isXray=!1,this.initTexturesAndMaterials(),this.buildPhotorealisticExcavatorVaku(),this.buildConcreteStructure(),this.buildGlassFacade(),this.buildFloorplanApartmentMatchingImage(),this.buildRoofTowerCrane(),Object.values(this.layers).forEach(e=>this.rootGroup.add(e)),this.scene.add(this.rootGroup)}createPillowGeometry(t,e,n,i=.08){const s=new zp,a=t/2-i,o=n/2-i;s.moveTo(-a,-o),s.lineTo(a,-o),s.quadraticCurveTo(a+i,-o,a+i,-o+i),s.lineTo(a+i,o-i),s.quadraticCurveTo(a+i,o+i,a,o+i),s.lineTo(-a,o+i),s.quadraticCurveTo(-a-i,o+i,-a-i,o-i),s.lineTo(-a-i,-o+i),s.quadraticCurveTo(-a-i,-o,-a,-o);const l={steps:1,depth:Math.max(.01,e-i*2),bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelOffset:0,bevelSegments:6},c=new Lu(s,l);return c.center(),c.rotateX(Math.PI/2),c}initTexturesAndMaterials(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#374151",e.fillRect(0,0,512,512);const n=e.getImageData(0,0,512,512),i=n.data;for(let S=0;S<i.length;S+=4){const T=(Math.random()-.5)*40;i[S]=Math.min(255,Math.max(0,i[S]+T)),i[S+1]=Math.min(255,Math.max(0,i[S+1]+T)),i[S+2]=Math.min(255,Math.max(0,i[S+2]+T))}e.putImageData(n,0,0),e.strokeStyle="rgba(15, 23, 42, 0.4)",e.lineWidth=3;for(let S=0;S<=512;S+=128)e.beginPath(),e.moveTo(S,0),e.lineTo(S,512),e.stroke();for(let S=0;S<=512;S+=128)e.beginPath(),e.moveTo(0,S),e.lineTo(512,S),e.stroke();const s=new $r(t);s.wrapS=tr,s.wrapT=tr,s.repeat.set(2,4),this.materials.concretePBR=new $e({map:s,bumpMap:s,bumpScale:.06,roughness:.85,metalness:.12});const a=document.createElement("canvas");a.width=512,a.height=512;const o=a.getContext("2d");o.fillStyle="#d97706",o.fillRect(0,0,512,512),o.fillStyle="rgba(120, 53, 15, 0.25)";for(let S=0;S<512;S+=24)o.fillRect(0,S,512,2);const l=new $r(a);l.wrapS=tr,l.wrapT=tr,l.repeat.set(4,4),this.materials.oakFloor=new $e({map:l,roughness:.3,metalness:.05});const c=document.createElement("canvas");c.width=256,c.height=256;const h=c.getContext("2d");h.fillStyle="#0f172a",h.fillRect(0,0,256,256),h.strokeStyle="rgba(56, 189, 248, 0.2)",h.lineWidth=2;for(let S=0;S<=256;S+=16)h.beginPath(),h.moveTo(S,0),h.lineTo(S,256),h.stroke();for(let S=0;S<=256;S+=16)h.beginPath(),h.moveTo(0,S),h.lineTo(256,S),h.stroke();const d=new $r(c);d.wrapS=tr,d.wrapT=tr,d.repeat.set(2,2),this.materials.navyTile=new $e({map:d,roughness:.2,metalness:.2});const f=document.createElement("canvas");f.width=256,f.height=256;const u=f.getContext("2d");u.fillStyle="#f8fafc",u.fillRect(0,0,256,256),u.strokeStyle="rgba(148, 163, 184, 0.3)",u.lineWidth=3,u.beginPath(),u.moveTo(0,50),u.bezierCurveTo(80,100,150,20,256,180),u.stroke(),u.beginPath(),u.moveTo(40,256),u.bezierCurveTo(120,180,180,220,256,80),u.stroke();const _=new $r(f);this.materials.whiteMarble=new $e({map:_,roughness:.15,metalness:.1}),this.materials.whiteWall=new $e({color:16317180,roughness:.5,metalness:.05}),this.materials.beigeWall=new $e({color:15987958,roughness:.55,metalness:.05}),this.materials.greyHeadboard=new $e({color:4674921,roughness:.65,metalness:.1}),this.materials.darkGranite=new $e({color:1976635,roughness:.2,metalness:.3}),this.materials.chromePiston=new $e({color:16317180,metalness:.95,roughness:.08}),this.materials.brassGold=new $e({color:16096779,metalness:.85,roughness:.2}),this.materials.yellowMachinery=new $e({color:14251782,roughness:.35,metalness:.75}),this.materials.darkSteelTrack=new $e({color:1976635,roughness:.7,metalness:.85}),this.materials.glassPanoramic=new Pc({color:3718648,metalness:.1,roughness:.05,transmission:.9,transparent:!0,opacity:.35,ior:1.5,reflectivity:.95}),this.materials.waterCyan=new Pc({color:3718648,metalness:.1,roughness:.1,transmission:.85,transparent:!0,opacity:.7}),this.materials.porcelainWhite=new $e({color:16777215,roughness:.12,metalness:.05}),this.materials.fabricCharcoal=new $e({color:3359061,roughness:.85,metalness:.05}),this.materials.greenPlant=new $e({color:1409085,roughness:.5});const g=document.createElement("canvas");g.width=512,g.height=288;const p=g.getContext("2d"),m=p.createLinearGradient(0,0,512,288);m.addColorStop(0,"#0f172a"),m.addColorStop(.5,"#1e1b4b"),m.addColorStop(1,"#0284c7"),p.fillStyle=m,p.fillRect(0,0,512,288),p.fillStyle="#38bdf8",p.font="bold 26px sans-serif",p.fillText("APEX PENTHOUSE 4D",40,140),p.fillStyle="#94a3b8",p.font="16px sans-serif",p.fillText("Ultra Luxury Architectural Showcase",40,180);const y=new $r(g);this.materials.tvScreenDisplay=new Tr({map:y});const b=document.createElement("canvas");b.width=512,b.height=320;const x=b.getContext("2d");x.fillStyle="#0f172a",x.fillRect(0,0,512,320),x.fillStyle="#1e293b",x.fillRect(0,0,512,32),x.fillStyle="#ef4444",x.beginPath(),x.arc(20,16,5,0,Math.PI*2),x.fill(),x.fillStyle="#f59e0b",x.beginPath(),x.arc(36,16,5,0,Math.PI*2),x.fill(),x.fillStyle="#10b981",x.beginPath(),x.arc(52,16,5,0,Math.PI*2),x.fill(),x.fillStyle="#38bdf8",x.font="bold 16px monospace",x.fillText("const penthouse = new ArchitecturalModel();",30,75),x.fillStyle="#a855f7",x.fillText("penthouse.render({ luxury: true, organic: true });",30,110),x.fillStyle="#22c55e",x.fillText("// 3D Engine: Operational (60 FPS)",30,145),x.fillStyle="#1e293b",x.fillRect(30,170,452,120),x.fillStyle="#0284c7",x.fillRect(40,180,432,100),x.beginPath(),x.moveTo(50,260),x.lineTo(120,220),x.lineTo(190,245),x.lineTo(260,195),x.lineTo(330,215),x.lineTo(400,190),x.lineTo(460,210),x.lineWidth=4,x.strokeStyle="#38bdf8",x.stroke();const w=new $r(b);this.materials.laptopScreenDisplay=new Tr({map:w}),this.materials.ledGlow=new Tr({color:16707722}),this.materials.velvetTeal=new $e({color:889992,roughness:.7,metalness:.15}),this.materials.appleGreen=new $e({color:2278750,roughness:.25,metalness:.1}),this.materials.lampGlow=new Tr({color:16707722}),this.materials.wireframe=new Tr({color:61695,wireframe:!0,transparent:!0,opacity:.45})}buildPhotorealisticExcavatorVaku(){const t=new vo(140,140),e=new $e({color:725280,roughness:.98}),n=new Q(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.layers.ground.add(n);const i=new Tg(140,40,16347926,1976635);i.position.y=.04,this.layers.ground.add(i);const s=new Ne;s.position.set(-34,0,24),s.rotation.y=Math.PI/3.5,[-1.9,1.9].forEach(C=>{const P=new Ne;P.position.set(0,.7,C);const D=new bt(6.8,1.25,1.1),H=new Q(D,this.materials.darkSteelTrack);P.add(H),[-3.1,3.1].forEach(V=>{const N=new ye(.65,.65,1.15,16),G=new Q(N,this.materials.darkSteelTrack);G.rotation.x=Math.PI/2,G.position.set(V,0,0),P.add(G)});for(let V=-2.2;V<=2.2;V+=.88){const N=new ye(.35,.35,1.12,12),G=new Q(N,this.materials.darkSteelTrack);G.rotation.x=Math.PI/2,G.position.set(V,-.4,0),P.add(G)}s.add(P)});const a=new Ne;a.position.set(0,2.55,0);const o=new bt(4,2.5,3.6),l=new Q(o,this.materials.yellowMachinery);l.castShadow=!0,a.add(l);const c=new bt(1.6,2.4,3.5),h=new Q(c,this.materials.darkSteelTrack);h.position.set(-2.6,0,0),a.add(h);const d=new Pc({color:988970,roughness:.1,metalness:.95}),f=new bt(1.8,1.8,.1),u=new Q(f,d);u.position.set(1.1,.35,1.81),a.add(u);const _=new Ne;_.position.set(1.2,.8,0),_.rotation.z=Math.PI/4.2;const g=new bt(6.5,.85,.75),p=new Q(g,this.materials.yellowMachinery);p.position.set(3.25,0,0),p.castShadow=!0,_.add(p);const m=new ye(.2,.2,4.8,16),y=new Q(m,this.materials.chromePiston);y.rotation.z=-Math.PI/12,y.position.set(2,-.6,.45),_.add(y);const b=new Q(m,this.materials.chromePiston);b.rotation.z=-Math.PI/12,b.position.set(2,-.6,-.45),_.add(b);const x=new Ne;x.position.set(6.5,0,0),x.rotation.z=-Math.PI/3.2;const w=new bt(4.8,.65,.65),S=new Q(w,this.materials.yellowMachinery);S.position.set(2.4,0,0),S.castShadow=!0,x.add(S);const T=new Ne;T.position.set(4.8,0,0),T.rotation.z=-Math.PI/6;const v=new bt(1.8,1.8,2),E=new Q(v,this.materials.darkSteelTrack);E.position.set(.9,-.9,0),E.castShadow=!0,T.add(E);for(let C=-.8;C<=.8;C+=.4){const P=new Dl(.12,.6,6),D=new Q(P,this.materials.chromePiston);D.rotation.z=-Math.PI/2,D.position.set(1.9,-1.5,C),T.add(D)}x.add(T),_.add(x),a.add(_),s.add(a),this.layers.ground.add(s)}buildConcreteStructure(){const t=[0,4.5,9,13.5,18,22.5],e=[-12,-4,4,12],n=[-12,-4,4,12],i=new bt(8.2,23.5,8.2),s=new Q(i,this.materials.concretePBR);s.position.set(0,11.75,0),this.layers.concrete.add(s),t.forEach((a,o)=>{if(o===5)return;const l=new bt(26.4,.5,26.4),c=new Q(l,this.materials.concretePBR);c.position.set(0,a+.25,0),c.receiveShadow=!0,this.layers.concrete.add(c),o<5&&e.forEach(h=>{n.forEach(d=>{if(Math.abs(h)<5&&Math.abs(d)<5)return;const f=new bt(.85,4,.85),u=new Q(f,this.materials.concretePBR);u.position.set(h,a+2.5,d),u.castShadow=!0,this.layers.concrete.add(u)})})})}buildGlassFacade(){for(let t=0;t<5;t++){const e=t*4.5+2.5,n=new Q(new bt(26.4,4,.1),this.materials.glassPanoramic);n.position.set(0,e,13);const i=new Q(new bt(26.4,4,.1),this.materials.glassPanoramic);i.position.set(0,e,-13);const s=new Q(new bt(.1,4,26.4),this.materials.glassPanoramic);s.position.set(-13,e,0);const a=new Q(new bt(.1,4,26.4),this.materials.glassPanoramic);a.position.set(13,e,0),this.layers.facade.add(n,i,s,a)}}buildFloorplanApartmentMatchingImage(){const t=new Ne;t.position.set(0,22.5,0);const e=new bt(26.4,.6,26.4),n=new Q(e,this.materials.oakFloor);n.position.set(0,.3,0),n.receiveShadow=!0,t.add(n);const i=new Q(new bt(4.8,.04,5.2),this.materials.porcelainWhite);i.position.set(-6.5,.62,-9),i.receiveShadow=!0;const s=new Q(new bt(5.4,.04,4),this.materials.porcelainWhite);s.position.set(-6,.62,8.5),s.receiveShadow=!0,t.add(i,s);const a=new bt(26.4,.6,26.4),o=new Q(a,this.materials.concretePBR);o.position.set(0,6.3,0),o.castShadow=!0,o.receiveShadow=!0,t.add(o);const l=new Q(new bt(10,2,.4),this.materials.whiteWall);l.position.set(-8,1.6,-13);const c=new Q(new bt(6,2,.4),this.materials.whiteWall);c.position.set(10,1.6,-13),t.add(l,c);const h=new Q(new bt(26.4,5.4,.2),this.materials.glassPanoramic);h.position.set(0,3.3,13),t.add(h);const d=new Q(new bt(.4,2,26.4),this.materials.beigeWall);d.position.set(-13,1.6,0);const f=new Q(new bt(.4,2,26.4),this.materials.whiteWall);f.position.set(13,1.6,0),t.add(d,f);const u=new Q(new bt(.35,2,8),this.materials.beigeWall);u.position.set(0,1.6,8.5);const _=new Q(new bt(.35,2,8),this.materials.beigeWall);_.position.set(0,1.6,-8.5),t.add(u,_);const g=new Q(new bt(8,2,.35),this.materials.beigeWall);g.position.set(-8.5,1.6,-1),t.add(g);const p=new Q(new bt(8,2,.35),this.materials.navyTile);p.position.set(8.5,1.6,-1),t.add(p);const m=new Q(new bt(5.6,1,.9),this.materials.porcelainWhite);m.position.set(-6,.8,5.5);const y=new Q(new bt(4.4,2.5,.08),this.materials.darkSteelTrack);y.position.set(-6,2.7,5.5);const b=new Q(new bt(4.2,2.3,.09),this.materials.tvScreenDisplay);b.position.set(-6,2.7,5.51);const x=new Q(new bt(3.6,.18,.25),this.materials.darkSteelTrack);x.position.set(-6,1.4,5.5),t.add(m,y,b,x);const w=new Q(new bt(5.2,.45,1.8),this.materials.fabricCharcoal);w.position.set(-6,.825,10);const S=new Q(new bt(5.2,.85,.45),this.materials.fabricCharcoal);S.position.set(-6,1.3,10.7);const T=new Q(new bt(.45,.75,2.25),this.materials.fabricCharcoal);T.position.set(-8.4,.975,9.8);const v=new Q(new bt(.45,.75,2.25),this.materials.fabricCharcoal);v.position.set(-3.6,.975,9.8);const E=new Q(new bt(.85,.04,1.4),this.materials.velvetTeal);E.rotation.y=Math.PI/12,E.position.set(-8.3,1.36,9.7),t.add(w,S,T,v,E);const C=this.createPillowGeometry(.75,.22,.5,.08);[-7.2,-6,-4.8].forEach((wt,Ut)=>{const ie=Ut===1?this.materials.velvetTeal:this.materials.porcelainWhite,se=new Q(C,ie);se.rotation.set(-Math.PI/7,0,(Ut-1)*.15),se.position.set(wt,1.18,10.38),t.add(se)});const P=new Q(new bt(2.5,.08,1.4),this.materials.whiteMarble);P.position.set(-6,.65,7.8),[-1.05,1.05].forEach(wt=>{[-.5,.5].forEach(Ut=>{const ie=new Q(new ye(.04,.04,.6,10),this.materials.chromePiston);ie.position.set(-6+wt,.3,7.8+Ut),t.add(ie)})}),t.add(P);const D=new Ne;D.position.set(-6.7,.69,7.7);const H=new Q(new bt(.68,.02,.46),this.materials.chromePiston);H.position.set(0,.01,0);const V=new Q(new bt(.22,.002,.14),this.materials.darkSteelTrack);V.position.set(0,.021,.12);const N=new Q(new bt(.58,.002,.22),this.materials.darkSteelTrack);N.position.set(0,.021,-.08);const G=new Ne;G.position.set(0,.02,-.22),G.rotation.x=-Math.PI/6;const O=new Q(new bt(.68,.44,.015),this.materials.chromePiston);O.position.set(0,.22,0);const Z=new Q(new bt(.64,.4,.005),this.materials.laptopScreenDisplay);Z.position.set(0,.22,.009),G.add(O,Z),D.add(H,V,N,G),t.add(D);const nt=new Q(new bt(.48,.04,.36),this.materials.brassGold);nt.position.set(-5.7,.71,8.1),nt.rotation.y=Math.PI/18;const L=new Q(new bt(.44,.04,.32),this.materials.fabricCharcoal);L.position.set(-5.7,.75,8.1),L.rotation.y=-Math.PI/12;const lt=new Q(new ye(.16,.16,.02,20),this.materials.porcelainWhite);lt.position.set(-5.3,.7,7.4);const St=new Q(new ye(.09,.07,.15,16),this.materials.porcelainWhite);St.position.set(-5.3,.785,7.4);const Qt=new Q(new Va(.05,.012,8,16),this.materials.porcelainWhite);Qt.position.set(-5.2,.785,7.4),t.add(nt,L,lt,St,Qt);const jt=new Q(new bt(2.8,.08,1.5),this.materials.porcelainWhite);jt.position.set(-10.5,1.25,2.5),[-1.2,1.2].forEach(wt=>{const Ut=new Q(new ye(.04,.04,1.2,10),this.materials.chromePiston);Ut.position.set(-10.5+wt,.6,2.5),t.add(Ut)});const Jt=new Q(new bt(.65,.08,.65),this.materials.fabricCharcoal);Jt.position.set(-10.5,.85,1);const J=new Q(new bt(.65,.75,.08),this.materials.fabricCharcoal);J.position.set(-10.5,1.25,.65),t.add(jt,Jt,J);const ht=new Q(new bt(6.8,1.25,2.2),this.materials.porcelainWhite);ht.position.set(7.5,.925,9.5);const ot=new Q(new bt(6.8,.1,2.3),this.materials.darkGranite);ot.position.set(7.5,1.6,9.5);const Ct=new Q(new bt(1.4,.02,1.2),this.materials.chromePiston);Ct.position.set(9,1.66,9.5);const Vt=new Q(new Va(.22,.035,10,20,Math.PI),this.materials.chromePiston);Vt.rotation.z=Math.PI/2,Vt.position.set(9,1.95,9.5);const It=new Q(new bt(1.6,.02,1.2),this.materials.darkSteelTrack);It.position.set(6.5,1.66,9.5);const ee=new Q(new bt(6.8,1.2,1.1),this.materials.porcelainWhite);ee.position.set(7.5,4.4,9.5);const Tt=new Q(new bt(1.8,4.4,1.8),this.materials.chromePiston);Tt.position.set(11.2,2.5,9.5),t.add(ht,ot,Ct,Vt,It,ee,Tt);const tt=new Q(new bt(3.4,.08,1.8),this.materials.oakFloor);tt.position.set(6.5,1.35,3.5),[-1.5,1.5].forEach(wt=>{[-.7,.7].forEach(Ut=>{const ie=new Q(new ye(.04,.04,1.3,10),this.materials.darkSteelTrack);ie.position.set(6.5+wt,.65,3.5+Ut),t.add(ie)})}),t.add(tt);const it=this.createPillowGeometry(.58,.08,.55,.04),rt=this.createPillowGeometry(.58,.48,.06,.03);[{x:5.4,z:2.3,rotY:Math.PI/6},{x:7.6,z:2.3,rotY:-Math.PI/6},{x:5.4,z:4.7,rotY:Math.PI-Math.PI/6},{x:7.6,z:4.7,rotY:Math.PI+Math.PI/6}].forEach(wt=>{const Ut=new Ne;Ut.position.set(wt.x,.6,wt.z),Ut.rotation.y=wt.rotY,[[-.22,-.2],[.22,-.2],[-.22,.2],[.22,.2]].forEach(([Me,ae])=>{const je=new Q(new ye(.025,.018,.8,10),this.materials.darkSteelTrack);je.position.set(Me,.4,ae),je.rotation.z=Me>0?-.1:.1,je.rotation.x=ae>0?-.1:.1;const Ee=new Q(new ye(.027,.027,.08,10),this.materials.brassGold);Ee.position.set(Me,.04,ae),Ut.add(je,Ee)});const ie=new Q(it,this.materials.greyHeadboard);ie.position.set(0,.82,0),[-.22,.22].forEach(Me=>{const ae=new Q(new ye(.02,.02,.55,8),this.materials.darkSteelTrack);ae.position.set(Me,1.05,.22),Ut.add(ae)});const se=new Q(rt,this.materials.greyHeadboard);se.position.set(0,1.25,.22),se.rotation.x=-Math.PI/18,Ut.add(ie,se),t.add(Ut)});const _t=new Q(new ye(.09,.1,.65,14),this.materials.greenPlant);_t.position.set(6.5,1.7,3.5);const zt=new Q(new ye(.35,.2,.15,16),this.materials.porcelainWhite);zt.position.set(7.2,1.45,3.5),[-.1,.1].forEach(wt=>{const Ut=new Q(new Yl(.08,12,12),this.materials.appleGreen);Ut.position.set(7.2+wt,1.58,3.5+wt),t.add(Ut)}),t.add(_t,zt);const Nt=new Q(new bt(3.8,2.2,.25),this.materials.greyHeadboard);Nt.position.set(-6.5,1.7,-12.5);const Lt=new Q(new bt(3.9,.06,.05),this.materials.ledGlow);Lt.position.set(-6.5,2.82,-12.55);for(let wt=-1.6;wt<=1.6;wt+=.8){const Ut=new Q(new bt(.12,2.1,.08),this.materials.greyHeadboard);Ut.position.set(-6.5+wt,1.7,-12.35),t.add(Ut)}const Xt=new Q(new bt(3.6,.5,4.4),this.materials.porcelainWhite);Xt.position.set(-6.5,.85,-10);const I=new Q(new bt(3.62,.08,2.4),this.materials.fabricCharcoal);I.position.set(-6.5,1.14,-9),t.add(Nt,Lt,Xt,I);const de=this.createPillowGeometry(1.15,.25,.65,.1),Wt=this.createPillowGeometry(.95,.2,.55,.08);[-1,1].forEach(wt=>{const Ut=new Q(de,this.materials.porcelainWhite);Ut.rotation.x=-Math.PI/7,Ut.position.set(-6.5+wt,1.25,-11.75);const ie=new Q(Wt,this.materials.velvetTeal);ie.rotation.x=-Math.PI/6,ie.position.set(-6.5+wt,1.34,-11.35),t.add(Ut,ie)}),[-9.5,-3.5].forEach(wt=>{const Ut=new Q(new bt(.9,.9,.9),this.materials.darkSteelTrack);Ut.position.set(wt,1.05,-12);const ie=new Q(new ye(.08,.18,.45,16),this.materials.brassGold);ie.position.set(wt,1.72,-12);const se=new Q(new ye(.3,.42,.55,20),this.materials.lampGlow);se.position.set(wt,2.15,-12),t.add(Ut,ie,se)}),[-1.4,0,1.4].forEach(wt=>{const Ut=new Q(new bt(.95,1.35,.05),this.materials.porcelainWhite);Ut.position.set(-6.5+wt,3.5,-12.85);const ie=new Q(new bt(.8,1.2,.07),this.materials.navyTile);ie.position.set(-6.5+wt,3.5,-12.85),t.add(Ut,ie)});const R=new Q(new bt(3.4,4.6,1.3),this.materials.porcelainWhite);R.position.set(-11,2.6,-6.5),t.add(R);const M=new Q(new bt(7.5,.05,6),this.materials.navyTile);M.position.set(6.5,.62,-6.5),t.add(M);const k=this.createPillowGeometry(2.4,.04,1.6,.04),W=new Q(k,this.materials.porcelainWhite);W.position.set(6.5,.66,-6.2),t.add(W);const K=new Q(new bt(.9,.06,.45),this.materials.oakFloor);K.position.set(4.6,.95,-4.5),[-.35,.35].forEach(wt=>{const Ut=new Q(new ye(.03,.03,.32,10),this.materials.darkSteelTrack);Ut.position.set(4.6+wt,.78,-4.5),t.add(Ut)}),t.add(K);const dt=new Ne;dt.position.set(6.5,1.07,-8.8);const ct=new Q(new ye(1.4,1.2,.9,32),this.materials.porcelainWhite);ct.scale.set(1.3,1,.75);const $=new Q(new ye(1.3,1.1,.85,32),this.materials.porcelainWhite);$.scale.set(1.25,1,.7),$.position.y=.05;const j=new Q(new ye(1.28,1.08,.02,32),this.materials.waterCyan);j.scale.set(1.24,1,.68),j.position.y=.32,dt.add(ct,j);const xt=new Ne;xt.position.set(4.7,.62,-8.8);const Ot=new Q(new ye(.035,.045,1.3,12),this.materials.brassGold);Ot.position.y=.65;const vt=new Q(new Va(.2,.03,10,20,Math.PI),this.materials.brassGold);vt.rotation.z=-Math.PI/2,vt.position.set(.18,1.3,0);const gt=new Q(new ye(.02,.02,.14,8),this.materials.brassGold);gt.rotation.z=Math.PI/2,gt.position.set(0,.95,.08),xt.add(Ot,vt,gt);const pt=new Q(new bt(1.35,.04,.38),this.materials.oakFloor);pt.position.set(6.5,1.52,-8.8);const Gt=new Q(new ye(.06,.06,.12,12),this.materials.porcelainWhite);Gt.position.set(6.2,1.6,-8.8);const Yt=new Q(new Dl(.02,.06,8),this.materials.ledGlow);Yt.position.set(6.2,1.69,-8.8),t.add(dt,xt,pt,Gt,Yt);const B=new Q(new bt(.55,.45,.8),this.materials.porcelainWhite);B.position.set(4.5,.95,-6.5);const mt=new Q(new bt(.5,.35,.04),this.materials.chromePiston);mt.position.set(4.5,1.8,-9.4),t.add(B,mt);const et=new Q(new bt(2.6,1,1.1),this.materials.porcelainWhite);et.position.set(8.5,1.1,-4.5);const yt=new Q(new bt(2.4,2,.06),this.materials.chromePiston);yt.position.set(8.5,3,-3.6);const Et=new Q(new bt(2.5,2.1,.04),this.materials.ledGlow);Et.position.set(8.5,3,-3.62);const st=new Q(new bt(.6,.15,.4),this.materials.porcelainWhite);st.position.set(8.5,1.675,-4.5),t.add(et,yt,Et,st);const ut=new Q(new bt(10,1.2,.08),this.materials.glassPanoramic);ut.position.set(1,1.2,-12.9);const at=new Q(new bt(10,.08,.12),this.materials.chromePiston);at.position.set(1,1.82,-12.9),t.add(ut,at);const qt=new Q(new ye(.9,.9,.06,24),this.materials.oakFloor);qt.position.set(1,1.2,-10.5);const ft=new Q(new ye(.06,.22,1.1,14),this.materials.darkSteelTrack);ft.position.set(1,.6,-10.5),t.add(qt,ft),[-1.1,1.1].forEach(wt=>{const Ut=new Q(new bt(.55,.06,.55),this.materials.darkSteelTrack);Ut.position.set(1+wt,.85,-10.5);const ie=new Q(new bt(.55,.65,.06),this.materials.darkSteelTrack);ie.position.set(1+wt,1.2,-10.5);const se=new Q(new bt(.5,.04,.5),this.materials.porcelainWhite);se.position.set(1+wt,.9,-10.5),t.add(Ut,ie,se)});const Zt=new Q(new ye(.45,.3,.9,20),this.materials.porcelainWhite);Zt.position.set(5,1.05,-10.5),t.add(Zt);const Bt=new Q(new ye(.42,.42,.04,20),this.materials.darkSteelTrack);Bt.position.set(5,1.48,-10.5),t.add(Bt),[{rx:.15,ry:.3,px:-.08,pz:-.08},{rx:-.2,ry:-.5,px:.08,pz:.08},{rx:.25,ry:1.2,px:0,pz:.1},{rx:-.15,ry:2.1,px:-.1,pz:.05},{rx:.2,ry:-1.8,px:.1,pz:-.08},{rx:.35,ry:.8,px:.05,pz:-.1},{rx:-.25,ry:-1.2,px:-.08,pz:.1}].forEach(wt=>{const Ut=new Ne;Ut.position.set(5+wt.px,1.5,-10.5+wt.pz),Ut.rotation.set(wt.rx,wt.ry,0);const ie=new Q(new ye(.015,.02,.75,8),this.materials.greenPlant);ie.position.set(0,.375,0);const se=new Q(new bt(.38,.015,.48),this.materials.greenPlant);se.position.set(0,.75,.1),se.rotation.x=.25,Ut.add(ie,se),t.add(Ut)});const ne=new Q(new bt(1.6,4.4,.15),this.materials.porcelainWhite);ne.position.set(11,2.5,-1);const Ue=new Q(new ye(.03,.03,.4,8),this.materials.chromePiston);Ue.rotation.z=Math.PI/2,Ue.position.set(10.4,2.5,-.9),t.add(ne,Ue),this.layers.penthouse.add(t)}buildRoofTowerCrane(){const t=new Ne;t.position.set(4,29.5,-4);const e=new bt(2.2,16,2.2),n=new $e({color:16096779,wireframe:!0}),i=new Q(e,n);i.position.set(0,8,0),t.add(i);const s=new bt(34,1.4,1.4),a=new $e({color:14251782,wireframe:!0}),o=new Q(s,a);o.position.set(-8,17.5,0),t.add(o),this.layers.crane.add(t)}updateExplosion(t){this.explodedFactor=t,this.layers.ground.position.y=-t*10,this.layers.concrete.position.y=0,this.layers.facade.position.y=t*6,this.layers.penthouse.position.y=t*14,this.layers.crane.position.y=t*22}setXrayMode(t){this.isXray=t,this.rootGroup.traverse(e=>{e.isMesh&&(t?(e.userData.origMat||(e.userData.origMat=e.material),e.material=this.materials.wireframe):e.userData.origMat&&(e.material=e.userData.origMat))})}isolateLayer(t){Object.keys(this.layers).forEach(e=>{t==="all"||e===t?this.layers[e].visible=!0:this.layers[e].visible=!1})}}class ky{constructor(t,e){this.container=t,this.camera=e,this.hotspots=[],this.visible=!0,this.initHotspots()}initHotspots(){[{id:"hs-excavator",position:new U(-34,2.5,24),tag:"01 • EXTERIOR GROUND YARD",title:"Caterpillar CAT 330 Excavator",text:"Heavy crawler backhoe outside on front yard with chrome pistons.",minProgress:0,maxProgress:.22},{id:"hs-concrete",position:new U(8,13.5,8),tag:"02 • TOWER FACADE",title:"C50 Column Grid & Glass Facade",text:"Weather-resistant concrete columns & panoramic glass curtain wall.",minProgress:.2,maxProgress:.32},{id:"hs-drawing",position:new U(-6,25.2,7.8),tag:"03 • DRAWING LOUNGE 360°",title:"Executive TV Console & Lounge",text:'White console, 65" TV, charcoal linen sofa, rug & marble coffee table.',minProgress:.28,maxProgress:.44},{id:"hs-kitchen",position:new U(7.5,25.2,9.5),tag:"04 • KITCHEN & DINING 360°",title:"L-Shaped Kitchen & Granite Counter",text:"Dark granite top, chrome faucet, induction cooktop & 4-chair dining table.",minProgress:.44,maxProgress:.6},{id:"hs-bedroom",position:new U(-6.5,25.2,-9.1),tag:"05 • MASTER BEDROOM 360°",title:"King Bed & Canvas Art Set",text:"Grey upholstered headboard, white area rug, nightstand & wall art frames.",minProgress:.6,maxProgress:.76},{id:"hs-bathroom",position:new U(6.5,25.2,-6.5),tag:"06 • NAVY SPA BATHROOM 360°",title:"Navy Mosaic Tiles & Bathrobes",text:"Dark navy tile feature wall, white bathrobes, glass shower & wall toilet.",minProgress:.76,maxProgress:.88},{id:"hs-balcony",position:new U(1,25.2,-11.5),tag:"07 • BALCONY & TOWER CRANE",title:"Terrace Bistro & Crane Crown",text:"Glass balustrade railing, outdoor bistro table & tower crane overhead.",minProgress:.88,maxProgress:1}].forEach(e=>{const n=document.createElement("div");n.className="hotspot-card",n.id=e.id,n.innerHTML=`
        <div class="hotspot-content">
          <span class="hotspot-tag">${e.tag}</span>
          <div class="hotspot-title">${e.title}</div>
          <div class="hotspot-text">${e.text}</div>
        </div>
        <div class="hotspot-trigger"></div>
      `,this.container.appendChild(n),this.hotspots.push({element:n,position:e.position,minProgress:e.minProgress,maxProgress:e.maxProgress,active:!1})})}updateHotspotVisibility(t){this.hotspots.forEach(e=>{t>=e.minProgress&&t<=e.maxProgress?e.active=!0:e.active=!1})}toggleHotspots(t){this.visible=t,t||this.hotspots.forEach(e=>e.element.classList.remove("visible"))}updatePositions(){if(!this.visible)return;const t=window.innerWidth,e=window.innerHeight,n=new U;this.hotspots.forEach(i=>{if(!i.active){i.element.classList.remove("visible");return}if(n.copy(i.position),n.project(this.camera),n.z>1){i.element.classList.remove("visible");return}const s=(n.x*.5+.5)*t,a=(-(n.y*.5)+.5)*e;i.element.style.transform=`translate(${s}px, ${a}px) translate(-50%, -100%)`,i.element.classList.add("visible")})}}function ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function im(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},Uu,vn,Oe,vi=1e8,Le=1/vi,Yh=Math.PI*2,zy=Yh/4,Gy=0,rm=Math.sqrt,Vy=Math.cos,Hy=Math.sin,_n=function(t){return typeof t=="string"},Ye=function(t){return typeof t=="function"},ur=function(t){return typeof t=="number"},Ou=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},Xn=function(t){return t!==!1},Fu=function(){return typeof window<"u"},Ko=function(t){return Ye(t)||_n(t)},sm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,Wy=/random\([^)]+\)/g,Xy=/,\s*/g,Rd=/(?:-?\.?\d|\.)+/gi,am=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,om=/[+-]=-?[.\d]+/,Yy=/[^,'"\[\]\s]+/gi,qy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,Li,qh,Bu,hi={},Ll={},lm,cm=function(t){return(Ll=ha(t,hi))&&Kn},ku=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},lo=function(t,e){return!e&&console.warn(t)},hm=function(t,e){return t&&(hi[t]=e)&&Ll&&(Ll[t]=e)||hi},co=function(){return 0},Zy={suppressEvents:!0,isStart:!0,kill:!1},ml={suppressEvents:!0,kill:!1},Ky={suppressEvents:!0},zu={},Lr=[],Zh={},um,ei={},zc={},Pd=30,_l=[],Gu="",Vu=function(t){var e=t[0],n,i;if(Yi(e)||Ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=_l.length;i--&&!_l[i].targetTest(e););n=_l[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Im(t[i],n)))||t.splice(i,1);return t},as=function(t){return t._gsap||Vu(Mi(t))[0]._gsap},fm=function(t,e,n){return(n=t[e])&&Ye(n)?t[e]():Ou(n)&&t.getAttribute&&t.getAttribute(e)||n},Yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Je=function(t){return Math.round(t*1e5)/1e5||0},ke=function(t){return Math.round(t*1e7)/1e7||0},Qs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},$y=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Il=function(){var t=Lr.length,e=Lr.slice(0),n,i;for(Zh={},Lr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hu=function(t){return!!(t._initted||t._startAt||t.add)},dm=function(t,e,n,i){Lr.length&&!vn&&Il(),t.render(e,n,!!(vn&&e<0&&Hu(t))),Lr.length&&!vn&&Il()},pm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yy).length<2?e:_n(t)?t.trim():t},mm=function(t){return t},ui=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Jy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ha=function(t,e){for(var n in e)t[n]=e[n];return t},Dd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Nl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ha=function(t){var e=t.parent||ze,n=t.keyframes?Jy(Pn(t.keyframes)):ui;if(Xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Qy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},_m=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},$l=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Br=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},os=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Kh=function(t,e,n,i){return t._startAt&&(vn?t._startAt.revert(ml):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},tb=function r(t){return!t||t._ts&&r(t.parent)},Ld=function(t){return t._repeat?ua(t._tTime,t=t.duration()+t._rDelay)*t:0},ua=function(t,e){var n=Math.floor(t=ke(t/e));return t&&n===t?n-1:n},Ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Jl=function(t){return t._end=ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Le)||0))},Ql=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Jl(t),n._dirty||os(n,t)),t},gm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ul(t.rawTime(),e),(!e._dur||Mo(0,e.totalDuration(),n)-e._tTime>Le)&&e.render(n,!0)),os(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Le}},Ui=function(t,e,n,i){return e.parent&&Br(e),e._start=ke((ur(n)?n:n||t!==ze?mi(t,n,e):t._time)+e._delay),e._end=ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_m(t,e,"_first","_last",t._sort?"_start":0),$h(e)||(t._recent=e),i||gm(t,e),t._ts<0&&Ql(t,t._tTime),t},xm=function(t,e){return(hi.ScrollTrigger||ku("scrollTrigger",e))&&hi.ScrollTrigger.create(e,t)},vm=function(t,e,n,i,s){if(Xu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&um!==si.frame)return Lr.push(t),t._lazy=[s,i],1},eb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},$h=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},nb=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&eb(t)&&!(!t._initted&&$h(t))||(t._ts<0||t._dp._ts<0)&&!$h(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=Mo(0,t._tDur,e),h=ua(l,o),t._yoyo&&h&1&&(a=1-a),h!==ua(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||vn||i||t._zTime===Le||!e&&t._zTime){if(!t._initted&&vm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Le:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Kh(t,e,n,!0),t._onUpdate&&!n&&oi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&oi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Br(t,1),!n&&!vn&&(oi(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ib=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},fa=function(t,e,n,i){var s=t._repeat,a=ke(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ke(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ql(t,t._tTime=t._tDur*o),t.parent&&Jl(t),n||os(t.parent,t),t},Id=function(t){return t instanceof Wn?os(t):fa(t,t._dur)},rb={_start:0,endTime:co,totalDuration:co},mi=function r(t,e,n){var i=t.labels,s=t._recent||rb,a=t.duration()>=vi?s.endTime(!1):t._dur,o,l,c;return _n(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Wa=function(t,e,n){var i=ur(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Xn(l.vars.inherit)&&l.parent;a.immediateRender=Xn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new rn(e[0],a,e[s+1])},Hr=function(t,e){return t||t===0?e(t):e},Mo=function(t,e,n){return n<t?t:n>e?e:n},wn=function(t,e){return!_n(t)||!(e=qy.exec(t))?"":e[1]},sb=function(t,e,n){return Hr(n,function(i){return Mo(t,e,i)})},Jh=[].slice,Mm=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Li},ab=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return _n(i)&&!e||Mm(i,1)?(s=n).push.apply(s,Mi(i)):n.push(i)})||n},Mi=function(t,e,n){return Oe&&!e&&Oe.selector?Oe.selector(t):_n(t)&&!n&&(qh||!da())?Jh.call((e||Bu).querySelectorAll(t),0):Pn(t)?ab(t,n):Mm(t)?Jh.call(t,0):t?[t]:[]},Qh=function(t){return t=Mi(t)[0]||lo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Mi(e,n.querySelectorAll?n:n===t?lo("Invalid scope")||Bu.createElement("div"):t)}},Sm=function(t){return t.sort(function(){return .5-Math.random()})},ym=function(t){if(Ye(t))return t;var e=Yi(t)?t:{each:t},n=ls(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return _n(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,_){var g=(_||e).length,p=a[g],m,y,b,x,w,S,T,v,E;if(!p){if(E=e.grid==="auto"?0:(e.grid||[1,vi])[1],!E){for(T=-vi;T<(T=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(p=a[g]=[],m=l?Math.min(E,g)*h-.5:i%E,y=E===vi?0:l?g*d/E-.5:i/E|0,T=0,v=vi,S=0;S<g;S++)b=S%E-m,x=y-(S/E|0),p[S]=w=c?Math.abs(c==="y"?x:b):rm(b*b+x*x),w>T&&(T=w),w<v&&(v=w);i==="random"&&Sm(p),p.max=T-v,p.min=v,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=wn(e.amount||e.each)||0,n=n&&g<0?vb(n):n}return g=(p[f]-p.min)/p.max||0,ke(p.b+(n?n(g):g)*p.v)+p.u}},jh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ke(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ur(n)?0:wn(n))}},bm=function(t,e){var n=Pn(t),i,s;return!n&&Yi(t)&&(i=n=t.radius||vi,t.values?(t=Mi(t.values),(s=!ur(t[0]))&&(i*=i)):t=jh(t.increment)),Hr(e,n?Ye(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=vi,h=0,d=t.length,f,u;d--;)s?(f=t[d].x-o,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:a,s||h===a||ur(a)?h:h+wn(a)}:jh(t))},Em=function(t,e,n,i){return Hr(Pn(t)?!e:n===!0?!!(n=0):!i,function(){return Pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ob=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},lb=function(t,e){return function(n){return t(parseFloat(n))+(e||wn(n))}},cb=function(t,e,n){return wm(t,e,0,1,n)},Tm=function(t,e,n){return Hr(n,function(i){return t[~~e(i)]})},hb=function r(t,e,n){var i=e-t;return Pn(t)?Tm(t,r(0,t.length),e):Hr(n,function(s){return(i+(s-t)%i)%i+t})},ub=function r(t,e,n){var i=e-t,s=i*2;return Pn(t)?Tm(t,r(0,t.length-1),e):Hr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ho=function(t){return t.replace(Wy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Xy);return Em(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},wm=function(t,e,n,i,s){var a=e-t,o=i-n;return Hr(s,function(l){return n+((l-t)/a*o||0)})},fb=function r(t,e,n,i){var s=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!s){var a=_n(t),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Pn(t)&&!Pn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=ha(Pn(t)?[]:{},t));if(!h){for(l in e)Wu.call(o,t,l,"get",e[l]);s=function(_){return Zu(_,o)||(a?t.p:t)}}}return Hr(n,s)},Nd=function(t,e,n){var i=t.labels,s=vi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},oi=function(t,e,n){var i=t.vars,s=i[e],a=Oe,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Lr.length&&Il(),o&&(Oe=o),h=l?s.apply(c,l):s.call(c),Oe=a,h},Ia=function(t){return Br(t),t.scrollTrigger&&t.scrollTrigger.kill(!!vn),t.progress()<1&&oi(t,"onInterrupt"),t},Ys,Am=[],Cm=function(t){if(t)if(t=!t.name&&t.default||t,Fu()||t.headless){var e=t.name,n=Ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:co,render:Zu,add:Wu,kill:Rb,modifier:Cb,rawVars:0},a={targetTest:0,get:0,getSetter:qu,aliases:{},register:0};if(da(),t!==i){if(ei[e])return;ui(i,ui(Nl(t,s),a)),ha(i.prototype,ha(s,Nl(t,a))),ei[i.prop=e]=i,t.targetTest&&(_l.push(i),zu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}hm(e,i),t.register&&t.register(Kn,i,qn)}else Am.push(t)},De=255,Na={aqua:[0,De,De],lime:[0,De,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,De],navy:[0,0,128],white:[De,De,De],olive:[128,128,0],yellow:[De,De,0],orange:[De,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[De,0,0],pink:[De,192,203],cyan:[0,De,De],transparent:[De,De,De,0]},Gc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*De+.5|0},Rm=function(t,e,n){var i=t?ur(t)?[t>>16,t>>8&De,t&De]:0:Na.black,s,a,o,l,c,h,d,f,u,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Na[t])i=Na[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&De,i&De,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&De,t&De]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Rd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Gc(l+1/3,s,a),i[1]=Gc(l,s,a),i[2]=Gc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(am),n&&i.length<4&&(i[3]=1),i}else i=t.match(Rd)||Na.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/De,a=i[1]/De,o=i[2]/De,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Pm=function(t){var e=[],n=[],i=-1;return t.split(Ir).forEach(function(s){var a=s.match(Xs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Ud=function(t,e,n){var i="",s=(t+i).match(Ir),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(f){return(f=Rm(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Pm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ir,"1").split(Xs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ir),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Ir=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Na)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),db=/hsl[a]?\(/,Dm=function(t){var e=t.join(" "),n;if(Ir.lastIndex=0,Ir.test(e))return n=db.test(e),t[1]=Ud(t[1],n),t[0]=Ud(t[0],n,Pm(t[1])),!0},uo,si=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,_=function g(p){var m=r()-i,y=p===!0,b,x,w,S;if((m>t||m<0)&&(n+=m-e),i+=m,w=i-n,b=w-a,(b>0||y)&&(S=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,a+=b+(b>=s?4:s-b),x=1),y||(l=c(g)),x)for(u=0;u<o.length;u++)o[u](w,f,S,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){lm&&(!qh&&Fu()&&(Li=qh=window,Bu=Li.document||{},hi.gsap=Kn,(Li.gsapVersions||(Li.gsapVersions=[])).push(Kn.version),cm(Ll||Li.GreenSockGlobals||!Li.gsap&&Li||{}),Am.forEach(Cm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},uo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),uo=0,c=co},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,y){var b=m?function(x,w,S,T){p(x,w,S,T),d.remove(b)}:p;return d.remove(p),o[y?"unshift":"push"](b),da(),b},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&u>=m&&u--},_listeners:o},d}(),da=function(){return!uo&&si.wake()},xe={},pb=/^[\d.\-M][\d.\-,\s]/,mb=/["']/g,_b=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(mb,"").trim():+c,i=l.substr(o+1).trim();return e},gb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xb=function(t){var e=(t+"").split("("),n=xe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[_b(e[1])]:gb(t).split(",").map(pm)):xe._CE&&pb.test(t)?xe._CE("",t):n},vb=function(t){return function(e){return 1-t(1-e)}},ls=function(t,e){return t&&(Ye(t)?t:xe[t]||xb(t))||e},vs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Yn(t,function(o){xe[o]=hi[o]=s,xe[a=o.toLowerCase()]=n;for(var l in s)xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xe[o+"."+l]=s[l]}),s},Lm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Vc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Yh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Hy((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Lm(o);return s=Yh/s,l.config=function(c,h){return r(t,c,h)},l},Hc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Lm(n);return i.config=function(s){return r(t,s)},i};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;vs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;vs("Elastic",Vc("in"),Vc("out"),Vc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});vs("Circ",function(r){return-(rm(1-r*r)-1)});vs("Sine",function(r){return r===1?1:-Vy(r*zy)+1});vs("Back",Hc("in"),Hc("out"),Hc());xe.SteppedEase=xe.steps=hi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Le;return function(o){return((i*Mo(0,a,o)|0)+s)*n}}};oo.ease=xe["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gu+=r+","+r+"Params,"});var Im=function(t,e){this.id=Gy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:fm,this.set=e?e.getSetter:qu},fo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,fa(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),uo||si.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,fa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(da(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ql(this,n),!s._dp||s.parent||gm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Le||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ld(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ua(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Le?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Le?0:this._rts,this.totalTime(Mo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Jl(this),jy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(da(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Le&&(this._tTime-=Le)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ke(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ky);var i=vn;return vn=n,Hu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Id(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Id(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(mi(this,n),Xn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Xn(i)),this._dur||(this._zTime=-Le),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Le:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Le,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Le)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ye(n)?n:mm,l=function(){var h=i.then;i.then=null,s&&s(),Ye(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ia(this)},r}();ui(fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Le,_prom:0,_ps:!1,_rts:1});var Wn=function(r){im(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Xn(n.sortChildren),ze&&Ui(n.parent||ze,ji(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&xm(ji(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Wa(0,arguments,this),this},e.from=function(i,s,a){return Wa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Wa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(i,s,mi(this,a),1),this},e.call=function(i,s,a){return Ui(this,rn.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new rn(i,a,mi(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Ha(a).immediateRender=Xn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Ha(o).immediateRender=Xn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ke(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,_,g,p,m,y,b,x,w,S,T;if(this!==ze&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,x=this._start,b=this._ts,m=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=ke(h%p),h===l?(g=this._repeat,f=c):(w=ke(h/p),g=~~w,g&&g===w&&(f=c,g--),f>c&&(f=c)),w=ua(this._tTime,p),!o&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),S&&g&1&&(f=c-f,T=1),g!==w&&!this._lock){var v=S&&w&1,E=v===(S&&g&1);if(g<w&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(T?0:ke(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ib(this,ke(o),ke(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!w&&(oi(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(_=u._next,(u._act||f>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=-Le);break}}u=_}else{u=this._last;for(var C=i<0?i:f;u;){if(_=u._prev,(u._act||C<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,s,a||vn&&Hu(u)),f!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=C?-Le:Le);break}}u=_}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-Le)._zTime=f>=o?1:-1,this._ts))return this._start=x,Jl(this),this.render(i,s,a);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(oi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ur(s)||(s=mi(this,s,i)),!(i instanceof fo)){if(Pn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(_n(i))return this.addLabel(i,s);if(Ye(i))i=rn.delayedCall(0,i);else return this}return this!==i?Ui(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof rn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return _n(i)?this.removeLabel(i):Ye(i)?this.killTweensOf(i):(i.parent===this&&$l(this,i),i===this._recent&&(this._recent=this._last),os(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ke(si.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=mi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=rn.delayedCall(0,s||co,a);return o.data="isPause",this._hasPause=1,Ui(this,o,mi(this,i))},e.removePause=function(i){var s=this._first;for(i=mi(this,i);s;)s._start===i&&s.data==="isPause"&&Br(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ar!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Mi(i),l=this._first,c=ur(s),h;l;)l instanceof rn?$y(l._targets,o)&&(c?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=mi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,_=rn.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Le,onStart:function(){if(a.pause(),!u){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&fa(_,p,0,1).render(_._time,!0,!0),u=1}h&&h.apply(_,d||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ui({startAt:{time:mi(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nd(this,mi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nd(this,mi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Le)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ke(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return os(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),os(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=vi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ui(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ke(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;fa(a,a===ze&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ze._ts&&(dm(ze,Ul(i,ze)),um=si.frame),si.frame>=Pd){Pd+=ci.autoSleep||120;var s=ze._first;if((!s||!s._ts)&&ci.autoSleep&&si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||si.sleep()}}},t}(fo);ui(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mb=function(t,e,n,i,s,a,o){var l=new qn(this._pt,t,e,0,1,km,null,s),c=0,h=0,d,f,u,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ho(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),f=n.match(kc)||[];d=kc.exec(i);)_=d[0],g=i.substring(c,d.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Qs(p,_)-p:parseFloat(_)-p,m:u&&u<4?Math.round:0},c=kc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(om.test(i)||m)&&(l.e=0),this._pt=l,l},Wu=function(t,e,n,i,s,a,o,l,c,h){Ye(i)&&(i=i(s||0,t,a));var d=t[e],f=n!=="get"?n:Ye(d)?c?t[e.indexOf("set")||!Ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ye(d)?c?Tb:Fm:Yu,_;if(_n(i)&&(~i.indexOf("random(")&&(i=ho(i)),i.charAt(1)==="="&&(_=Qs(f,i)+(wn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||tu)return!isNaN(f*i)&&i!==""?(_=new qn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?Ab:Bm,0,u),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!d&&!(e in t)&&ku(e,i),Mb.call(this,t,e,f,i,u,l||ci.stringFilter,c))},Sb=function(t,e,n,i,s){if(Ye(t)&&(t=Xa(t,s,e,n,i)),!Yi(t)||t.style&&t.nodeType||Pn(t)||sm(t))return _n(t)?Xa(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Xa(t[o],s,e,n,i);return a},Nm=function(t,e,n,i,s,a){var o,l,c,h;if(ei[t]&&(o=new ei[t]).init(s,o.rawVars?e[t]:Sb(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ys))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ar,tu,Xu=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,b=t._overwrite==="auto"&&!Uu,x=t.timeline,w=i.easeReverse||d,S,T,v,E,C,P,D,H,V,N,G,O,Z;if(x&&(!f||!s)&&(s="none"),t._ease=ls(s,oo.ease),t._rEase=w&&(ls(w)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||f&&!i.stagger){if(H=p[0]?as(p[0]).harness:0,O=H&&i[H.prop],S=Nl(i,zu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!u?g.render(-1,!0):g.revert(h&&_?ml:Zy),g._lazy=0),a){if(Br(t._startAt=rn.set(p,ui({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Xn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vn||!o&&!u)&&t._startAt.revert(ml),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),v=ui({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Xn(l),immediateRender:o,stagger:0,parent:m},S),O&&(v[H.prop]=O),Br(t._startAt=rn.set(p,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vn?t._startAt.revert(ml):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Le,Le);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Xn(l)||l&&!_,T=0;T<p.length;T++){if(C=p[T],D=C._gsap||Vu(p)[T]._gsap,t._ptLookup[T]=N={},Zh[D.id]&&Lr.length&&Il(),G=y===p?T:y.indexOf(C),H&&(V=new H).init(C,O||S,t,G,y)!==!1&&(t._pt=E=new qn(t._pt,C,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(nt){N[nt]=E}),V.priority&&(P=1)),!H||O)for(v in S)ei[v]&&(V=Nm(v,S,t,G,C,y))?V.priority&&(P=1):N[v]=E=Wu.call(t,C,v,"get",S[v],G,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(C,t._op[T]),b&&t._pt&&(Ar=t,ze.killTweensOf(C,N,t.globalTime(e)),Z=!t.parent,Ar=0),t._pt&&l&&(Zh[D.id]=1)}P&&zm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,f&&e<=0&&x.render(vi,!0,!0)},yb=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return tu=1,t.vars[e]="+=0",Xu(t,o),tu=0,l?lo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Je(n)+wn(d.e)),d.b&&(d.b=h.s+wn(d.b))},bb=function(t,e){var n=t[0]?as(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ha({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Eb=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Pn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Xa=function(t,e,n,i,s){return Ye(t)?t.call(e,n,i,s):_n(t)&&~t.indexOf("random(")?ho(t):t},Um=Gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Om={};Yn(Um+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Om[r]=1});var rn=function(r){im(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ha(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||ze,y=(Pn(n)||sm(n)?ur(n[0]):"length"in i)?[n]:Mi(n),b,x,w,S,T,v,E,C;if(o._targets=y.length?Vu(y):lo("GSAP target "+n+" not found. https://gsap.com",!ci.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,_||f||Ko(c)||Ko(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(b=o.timeline=new Wn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),b.kill(),b.parent=b._dp=ji(o),b._start=0,f||Ko(c)||Ko(h)){if(S=y.length,E=f&&ym(f),Yi(f))for(T in f)~Um.indexOf(T)&&(C||(C={}),C[T]=f[T]);for(x=0;x<S;x++)w=Nl(i,Om),w.stagger=0,P&&(w.easeReverse=P),C&&ha(w,C),v=y[x],w.duration=+Xa(c,ji(o),x,v,y),w.delay=(+Xa(h,ji(o),x,v,y)||0)-o._delay,!f&&S===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),b.to(v,w,E?E(x,v,y):0),b._ease=xe.none;b.duration()?c=h=0:o.timeline=0}else if(_){Ha(ui(b.vars.defaults,{ease:"none"})),b._ease=ls(_.ease||i.ease||"none");var D=0,H,V,N;if(Pn(_))_.forEach(function(G){return b.to(y,G,">")}),b.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||Eb(T,_[T],w,_.easeEach);for(T in w)for(H=w[T].sort(function(G,O){return G.t-O.t}),D=0,x=0;x<H.length;x++)V=H[x],N={ease:V.e,duration:(V.t-(x?H[x-1].t:0))/100*c},N[T]=V.v,b.to(y,N,D),D+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return u===!0&&!Uu&&(Ar=ji(o),ze.killTweensOf(y),Ar=0),Ui(m,ji(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===ke(m._time)&&Xn(d)&&tb(ji(o))&&m.data!=="nested")&&(o._tTime=-Le,o.render(Math.max(0,-h)||0)),p&&xm(ji(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Le&&!h?l:i<Le?0:i,f,u,_,g,p,m,y,b;if(!c)nb(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(f=ke(d%g),d===l?(_=this._repeat,f=c):(p=ke(d/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=ua(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(ke(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(vm(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var w=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(x?-1:1)/w:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(oi(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Kh(this,i,s,a),oi(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Kh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Br(this,1),!s&&!(h&&!o)&&(d||o||m)&&(oi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){uo||si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Xu(this,c),h=this._ease(c/this._dur),yb(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Ql(this,0),this.parent||_m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ar&&Ar.vars.overwrite!==!0)._first||Ia(this),this.parent&&a!==this.timeline.totalDuration()&&fa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Mi(i):o,c=this._ptLookup,h=this._pt,d,f,u,_,g,p,m;if((!s||s==="all")&&Qy(o,l))return s==="all"&&(this._pt=0),Ia(this);for(d=this._op=this._op||[],s!=="all"&&(_n(s)&&(g={},Yn(s,function(y){return g[y]=1}),s=g),s=bb(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,_=f,u={}):(u=d[m]=d[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&$l(this,p,"_pt"),delete f[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&Ia(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Wa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Wa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ze.killTweensOf(i,s,a)},t}(fo);ui(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(r){rn[r]=function(){var t=new Wn,e=Jh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yu=function(t,e,n){return t[e]=n},Fm=function(t,e,n){return t[e](n)},Tb=function(t,e,n,i){return t[e](i.fp,n)},wb=function(t,e,n){return t.setAttribute(e,n)},qu=function(t,e){return Ye(t[e])?Fm:Ou(t[e])&&t.setAttribute?wb:Yu},Bm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ab=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},km=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Zu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Cb=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Rb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?$l(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Pb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zm=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qn=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Bm,this.d=l||this,this.set=c||Yu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Pb,this.m=n,this.mt=s,this.tween=i},r}();Yn(Gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return zu[r]=1});hi.TweenMax=hi.TweenLite=rn;hi.TimelineLite=hi.TimelineMax=Wn;ze=new Wn({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=Dm;var cs=[],gl={},Db=[],Od=0,Lb=0,Wc=function(t){return(gl[t]||Db).map(function(e){return e()})},eu=function(){var t=Date.now(),e=[];t-Od>2&&(Wc("matchMediaInit"),cs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Li.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Wc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Od=t,Wc("matchMedia"))},Gm=function(){function r(e,n){this.selector=n&&Qh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ye(n)&&(s=i,i=n,n=Ye);var a=this,o=function(){var c=Oe,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Qh(s)),Oe=a,d=i.apply(a,arguments),Ye(d)&&a._r.push(d),Oe=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Ye?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Oe;Oe=null,n(this),Oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof rn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof rn)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=cs.length;a--;)cs[a].id===this.id&&cs.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Ib=function(){function r(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Yi(n)||(n={matches:n});var a=new Gm(0,s||this.scope),o=a.conditions={},l,c,h;Oe&&!a.selector&&(a.selector=Oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Li.matchMedia(n[c]),l&&(cs.indexOf(a)<0&&cs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(eu):l.addEventListener("change",eu)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ol={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Cm(i)})},timeline:function(t){return new Wn(t)},getTweensOf:function(t,e){return ze.getTweensOf(t,e)},getProperty:function(t,e,n,i){_n(t)&&(t=Mi(t)[0]);var s=as(t||{}).get,a=n?mm:pm;return n==="native"&&(n=""),t&&(e?a((ei[e]&&ei[e].get||s)(t,e,n,i)):function(o,l,c){return a((ei[o]&&ei[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Mi(t),t.length>1){var i=t.map(function(h){return Kn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=ei[e],o=as(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;Ys._pt=0,d.init(t,n?h+n:h,Ys,0,[t]),d.render(1,d),Ys._pt&&Zu(1,Ys)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Kn.to(t,ui((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ls(t.ease,oo.ease)),Dd(oo,t||{})},config:function(t){return Dd(ci,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ei[o]&&!hi[o]&&lo(e+" effect requires "+o+" plugin.")}),zc[e]=function(o,l,c){return n(Mi(o),ui(l||{},s),c)},a&&(Wn.prototype[e]=function(o,l,c){return this.add(zc[e](o,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){xe[t]=ls(e)},parseEase:function(t,e){return arguments.length?ls(t,e):xe},getById:function(t){return ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Wn(t),i,s;for(n.smoothChildTiming=Xn(t.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,i=ze._first;i;)s=i._next,(e||!(!i._dur&&i instanceof rn&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=s;return Ui(ze,n,0),n},context:function(t,e){return t?new Gm(t,e):Oe},matchMedia:function(t){return new Ib(t)},matchMediaRefresh:function(){return cs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||eu()},addEventListener:function(t,e){var n=gl[t]||(gl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=gl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:hb,wrapYoyo:ub,distribute:ym,random:Em,snap:bm,normalize:cb,getUnit:wn,clamp:sb,splitColor:Rm,toArray:Mi,selector:Qh,mapRange:wm,pipe:ob,unitize:lb,interpolate:fb,shuffle:Sm},install:cm,effects:zc,ticker:si,updateRoot:Wn.updateRoot,plugins:ei,globalTimeline:ze,core:{PropTween:qn,globals:hm,Tween:rn,Timeline:Wn,Animation:fo,getCache:as,_removeLinkedListItem:$l,reverting:function(){return vn},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return Uu=t}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ol[r]=rn[r]});si.add(Wn.updateRoot);Ys=Ol.to({},{duration:0});var Nb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ub=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Nb(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Xc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(_n(s)&&(l={},Yn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ub(o,s)}}}},Kn=Ol.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xc("roundProps",jh),Xc("modifiers"),Xc("snap",bm))||Ol;rn.version=Wn.version=Kn.version="3.15.0";lm=1;Fu()&&da();xe.Power0;xe.Power1;xe.Power2;xe.Power3;xe.Power4;xe.Linear;xe.Quad;xe.Cubic;xe.Quart;xe.Quint;xe.Strong;xe.Elastic;xe.Back;xe.SteppedEase;xe.Bounce;xe.Sine;xe.Expo;xe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fd,Cr,js,Ku,rs,Bd,$u,Ob=function(){return typeof window<"u"},fr={},Jr=180/Math.PI,ta=Math.PI/180,Fs=Math.atan2,kd=1e8,Ju=/([A-Z])/g,Fb=/(left|right|width|margin|padding|x)/i,Bb=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Vb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Vm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Hm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Hb=function(t,e,n){return t.style[e]=n},Wb=function(t,e,n){return t.style.setProperty(e,n)},Xb=function(t,e,n){return t._gsap[e]=n},Yb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},qb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Zb=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},He="transform",Zn=He+"Origin",Kb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in fr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Bi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=er(i,o)}):this.tfm[t]=a.x?a[t]:er(i,t),t===Zn&&(this.tfm.zOrigin=a.zOrigin);else return Bi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(He)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,e,"")),t=He}(s||e)&&this.props.push(t,e,s[t])},Wm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$b=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ju,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=$u(),(!s||!s.isStart)&&!n[He]&&(Wm(n),i.zOrigin&&n[Zn]&&(n[Zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xm=function(t,e){var n={target:t,props:[],revert:$b,save:Kb};return t._gsap||Kn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ym,iu=function(t,e){var n=Cr.createElementNS?Cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Cr.createElement(t);return n&&n.style?n:Cr.createElement(t)},li=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ju,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,pa(e)||e,1)||""},zd="O,Moz,ms,Ms,Webkit".split(","),pa=function(t,e,n){var i=e||rs,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(zd[a]+t in s););return a<0?null:(a===3?"ms":a>=0?zd[a]:"")+t},ru=function(){Ob()&&window.document&&(Fd=window,Cr=Fd.document,js=Cr.documentElement,rs=iu("div")||{style:{}},iu("div"),He=pa(He),Zn=He+"Origin",rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ym=!!pa("perspective"),$u=Kn.core.reverting,Ku=1)},Gd=function(t){var e=t.ownerSVGElement,n=iu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),js.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),js.removeChild(n),s},Vd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},qm=function(t){var e,n;try{e=t.getBBox()}catch{e=Gd(t),n=1}return e&&(e.width||e.height)||n||(e=Gd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Vd(t,["x","cx","x1"])||0,y:+Vd(t,["y","cy","y1"])||0,width:0,height:0}:e},Zm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qm(t))},kr=function(t,e){if(e){var n=t.style,i;e in fr&&e!==Zn&&(e=He),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ju,"-$1").toLowerCase())):n.removeAttribute(e)}},Rr=function(t,e,n,i,s,a){var o=new qn(t._pt,e,n,0,1,a?Hm:Vm);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Hd={deg:1,rad:1,turn:1},Jb={grid:1,flex:1},zr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=rs.style,l=Fb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",_,g,p,m;if(i===a||!s||Hd[i]||Hd[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Zm(t),(u||a==="%")&&(fr[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],Je(u?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Cr||!g.appendChild)&&(g=Cr.body),p=g._gsap,p&&u&&p.width&&l&&p.time===si.time&&!p.uncache)return Je(s/p.width*d);if(u&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,_=t[h],y?t.style[e]=y:kr(t,e)}else(u||a==="%")&&!Jb[li(g,"display")]&&(o.position=li(t,"position")),g===t&&(o.position="static"),g.appendChild(rs),_=rs[h],g.removeChild(rs),o.position="absolute";return l&&u&&(p=as(g),p.time=si.time,p.width=g[h]),Je(f?_*s/d:_&&s?d/_*s:0)},er=function(t,e,n,i){var s;return Ku||ru(),e in Bi&&e!=="transform"&&(e=Bi[e],~e.indexOf(",")&&(e=e.split(",")[0])),fr[e]&&e!=="transform"?(s=mo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Bl(li(t,Zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Fl[e]&&Fl[e](t,e,n)||li(t,e)||fm(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(t,e,s,n)+n:s},Qb=function(t,e,n,i){if(!n||n==="none"){var s=pa(e,t,1),a=s&&li(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=li(t,"borderTopColor"))}var o=new qn(this._pt,t.style,e,0,1,km),l=0,c=0,h,d,f,u,_,g,p,m,y,b,x,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=li(t,e)||i,g?t.style[e]=g:kr(t,e)),h=[n,i],Dm(h),n=h[0],i=h[1],f=n.match(Xs)||[],w=i.match(Xs)||[],w.length){for(;d=Xs.exec(i);)p=d[0],y=i.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(u=parseFloat(g)||0,x=g.substr((u+"").length),p.charAt(1)==="="&&(p=Qs(u,p)+x),m=parseFloat(p),b=p.substr((m+"").length),l=Xs.lastIndex-b.length,b||(b=b||ci.units[e]||x,l===i.length&&(i+=b,o.e+=b)),x!==b&&(u=zr(t,e,g,b)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:u,c:m-u,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Hm:Vm;return om.test(i)&&(o.e=0),this._pt=o,o},Wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Wd[n]||n,e[1]=Wd[i]||i,e.join(" ")},tE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],fr[o]&&(l=1,o=o==="transformOrigin"?Zn:He),kr(n,o);l&&(kr(n,He),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",mo(n,1),a.uncache=1,Wm(i)))}},Fl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qn(t._pt,e,n,0,0,tE);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},po=[1,0,0,1,0,0],Km={},$m=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Xd=function(t){var e=li(t,He);return $m(e)?po:e.substr(7).match(am).map(Je)},Qu=function(t,e){var n=t._gsap||as(t),i=t.style,s=Xd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?po:s):(s===po&&!t.offsetParent&&t!==js&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,js.appendChild(t)),s=Xd(t),l?i.display=l:kr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):js.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},su=function(t,e,n,i,s,a){var o=t._gsap,l=s||Qu(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],b=e.split(" "),x=parseFloat(b[0])||0,w=parseFloat(b[1])||0,S,T,v,E;n?l!==po&&(T=u*p-_*g)&&(v=x*(p/T)+w*(-g/T)+(g*y-p*m)/T,E=x*(-_/T)+w*(u/T)-(u*y-_*m)/T,x=v,w=E):(S=qm(t),x=S.x+(~b[0].indexOf("%")?x/100*S.width:x),w=S.y+(~(b[1]||b[0]).indexOf("%")?w/100*S.height:w)),i||i!==!1&&o.smooth?(m=x-c,y=w-h,o.xOffset=d+(m*u+y*g)-m,o.yOffset=f+(m*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=w,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Zn]="0px 0px",a&&(Rr(a,o,"xOrigin",c,x),Rr(a,o,"yOrigin",h,w),Rr(a,o,"xOffset",d,o.xOffset),Rr(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+w)},mo=function(t,e){var n=t._gsap||new Im(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=li(t,Zn)||"0",h,d,f,u,_,g,p,m,y,b,x,w,S,T,v,E,C,P,D,H,V,N,G,O,Z,nt,L,lt,St,Qt,jt,Jt;return h=d=f=g=p=m=y=b=x=0,u=_=1,n.svg=!!(t.getCTM&&Zm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),i.scale=i.rotate=i.translate="none"),T=Qu(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),su(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,S=n.yOrigin||0,T!==po&&(P=T[0],D=T[1],H=T[2],V=T[3],h=N=T[4],d=G=T[5],T.length===6?(u=Math.sqrt(P*P+D*D),_=Math.sqrt(V*V+H*H),g=P||D?Fs(D,P)*Jr:0,y=H||V?Fs(H,V)*Jr+g:0,y&&(_*=Math.abs(Math.cos(y*ta))),n.svg&&(h-=w-(w*P+S*H),d-=S-(w*D+S*V))):(Jt=T[6],Qt=T[7],L=T[8],lt=T[9],St=T[10],jt=T[11],h=T[12],d=T[13],f=T[14],v=Fs(Jt,St),p=v*Jr,v&&(E=Math.cos(-v),C=Math.sin(-v),O=N*E+L*C,Z=G*E+lt*C,nt=Jt*E+St*C,L=N*-C+L*E,lt=G*-C+lt*E,St=Jt*-C+St*E,jt=Qt*-C+jt*E,N=O,G=Z,Jt=nt),v=Fs(-H,St),m=v*Jr,v&&(E=Math.cos(-v),C=Math.sin(-v),O=P*E-L*C,Z=D*E-lt*C,nt=H*E-St*C,jt=V*C+jt*E,P=O,D=Z,H=nt),v=Fs(D,P),g=v*Jr,v&&(E=Math.cos(v),C=Math.sin(v),O=P*E+D*C,Z=N*E+G*C,D=D*E-P*C,G=G*E-N*C,P=O,N=Z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),u=Je(Math.sqrt(P*P+D*D+H*H)),_=Je(Math.sqrt(G*G+Jt*Jt)),v=Fs(N,G),y=Math.abs(v)>2e-4?v*Jr:0,x=jt?1/(jt<0?-jt:jt):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$m(li(t,He)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(u*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Je(u),n.scaleY=Je(_),n.rotation=Je(g)+o,n.rotationX=Je(p)+o,n.rotationY=Je(m)+o,n.skewX=y+o,n.skewY=b+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Zn]=Bl(c)),n.xOffset=n.yOffset=0,n.force3D=ci.force3D,n.renderTransform=n.svg?nE:Ym?Jm:eE,n.uncache=0,n},Bl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yc=function(t,e,n){var i=wn(e);return Je(parseFloat(e)+parseFloat(zr(t,"x",n+"px",i)))+i},eE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Jm(t,e)},Zr="0deg",Aa="0px",Kr=") ",Jm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,b=n.zOrigin,x="",w=m==="auto"&&t&&t!==1||m===!0;if(b&&(d!==Zr||h!==Zr)){var S=parseFloat(h)*ta,T=Math.sin(S),v=Math.cos(S),E;S=parseFloat(d)*ta,E=Math.cos(S),a=Yc(y,a,T*E*-b),o=Yc(y,o,-Math.sin(S)*-b),l=Yc(y,l,v*E*-b+b)}p!==Aa&&(x+="perspective("+p+Kr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||a!==Aa||o!==Aa||l!==Aa)&&(x+=l!==Aa||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Kr),c!==Zr&&(x+="rotate("+c+Kr),h!==Zr&&(x+="rotateY("+h+Kr),d!==Zr&&(x+="rotateX("+d+Kr),(f!==Zr||u!==Zr)&&(x+="skew("+f+", "+u+Kr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Kr),y.style[He]=x||"translate(0, 0)"},nE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,b=parseFloat(a),x=parseFloat(o),w,S,T,v,E;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ta,c*=ta,w=Math.cos(l)*d,S=Math.sin(l)*d,T=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(h*=ta,E=Math.tan(c-h),E=Math.sqrt(1+E*E),T*=E,v*=E,h&&(E=Math.tan(h),E=Math.sqrt(1+E*E),w*=E,S*=E)),w=Je(w),S=Je(S),T=Je(T),v=Je(v)):(w=d,v=f,S=T=0),(b&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(b=zr(u,"x",a,"px"),x=zr(u,"y",o,"px")),(_||g||p||m)&&(b=Je(b+_-(_*w+g*T)+p),x=Je(x+g-(_*S+g*v)+m)),(i||s)&&(E=u.getBBox(),b=Je(b+i/100*E.width),x=Je(x+s/100*E.height)),E="matrix("+w+","+S+","+T+","+v+","+b+","+x+")",u.setAttribute("transform",E),y&&(u.style[He]=E)},iE=function(t,e,n,i,s){var a=360,o=_n(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Jr:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*kd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*kd)%a-~~(c/a)*a)),t._pt=f=new qn(t._pt,e,n,i,c,kb),f.e=h,f.u="deg",t._props.push(n),f},Yd=function(t,e){for(var n in e)t[n]=e[n];return t},rE=function(t,e,n){var i=Yd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[He]=e,o=mo(n,1),kr(n,He),n.setAttribute("transform",c)):(c=getComputedStyle(n)[He],a[He]=e,o=mo(n,1),a[He]=c);for(l in fr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=wn(c),_=wn(h),d=u!==_?zr(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new qn(t._pt,o,l,d,f-d,nu),t._pt.u=_||0,t._props.push(l));Yd(o,i)};Yn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Fl[t>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(_){return er(o,_,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(_,g){return u[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,u,d)}});var Qm={name:"css",register:ru,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,f,u,_,g,p,m,y,b,x,w,S,T,v,E;Ku||ru(),this.styles=this.styles||Xm(t),v=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ei[g]&&Nm(g,e,n,i,t,s)))){if(u=typeof h,_=Fl[g],u==="function"&&(h=h.call(n,i,t,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ho(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ir.lastIndex=0,Ir.test(c)||(p=wn(c),m=wn(h),m?p!==m&&(c=zr(t,g,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],_n(c)&&~c.indexOf("random(")&&(c=ho(c)),wn(c+"")||c==="auto"||(c+=ci.units[g]||wn(er(t,g))||""),(c+"").charAt(1)==="="&&(c=er(t,g))):c=er(t,g),f=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),g in Bi&&(g==="autoAlpha"&&(f===1&&er(t,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,o.visibility),Rr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in fr,b){if(this.styles.save(g),E=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=li(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=li(t,"perspective"),C?t.style.perspective=C:kr(t,"perspective")}d=parseFloat(h)}if(x||(w=t._gsap,w.renderTransform&&!e.parseTransform||mo(t,e.parseTransform),S=e.smoothOrigin!==!1&&w.smooth,x=this._pt=new qn(this._pt,o,He,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new qn(this._pt,w,"scaleY",w.scaleY,(y?Qs(w.scaleY,y+d):d)-w.scaleY||0,nu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(Zn,0,o[Zn]),h=jb(h),w.svg?su(t,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==w.zOrigin&&Rr(this,w,"zOrigin",w.zOrigin,m),Rr(this,o,g,Bl(c),Bl(h)));continue}else if(g==="svgOrigin"){su(t,h,1,S,0,this);continue}else if(g in Km){iE(this,w,g,f,y?Qs(f,y+h):h);continue}else if(g==="smoothOrigin"){Rr(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){rE(this,h,t);continue}}else g in o||(g=pa(g)||g);if(b||(d||d===0)&&(f||f===0)&&!Bb.test(h)&&g in o)p=(c+"").substr((f+"").length),d||(d=0),m=wn(h)||(g in ci.units?ci.units[g]:p),p!==m&&(f=zr(t,g,c,m)),this._pt=new qn(this._pt,b?w:o,g,f,(y?Qs(f,y+d):d)-f,!b&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Vb:nu),this._pt.u=m||0,b&&E!==h?(this._pt.b=c,this._pt.e=E,this._pt.r=Gb):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=zb);else if(g in o)Qb.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,s);else if(g!=="parseTransform"){ku(g,h);continue}b||(g in o?v.push(g,0,o[g]):typeof t[g]=="function"?v.push(g,2,t[g]()):v.push(g,1,c||t[g])),a.push(g)}}T&&zm(this)},render:function(t,e){if(e.tween._time||!$u())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:er,aliases:Bi,getSetter:function(t,e,n){var i=Bi[e];return i&&i.indexOf(",")<0&&(e=i),e in fr&&e!==Zn&&(t._gsap.x||er(t,"x"))?n&&Bd===n?e==="scale"?Yb:Xb:(Bd=n||{})&&(e==="scale"?qb:Zb):t.style&&!Ou(t.style[e])?Hb:~e.indexOf("-")?Wb:qu(t,e)},core:{_removeProperty:kr,_getMatrix:Qu}};Kn.utils.checkPrefix=pa;Kn.core.getStyleSaver=Xm;(function(r,t,e,n){var i=Yn(r+","+t+","+e,function(s){fr[s]=1});Yn(t,function(s){ci.units[s]="deg",Km[s]=1}),Bi[i[13]]=r+","+t,Yn(n,function(s){var a=s.split(":");Bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ci.units[r]="px"});Kn.registerPlugin(Qm);var ju=Kn.registerPlugin(Qm)||Kn;ju.core.Tween;function sE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function aE(r,t,e){return t&&sE(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,xl,ai,Pr,Dr,ea,jm,Qr,na,t0,sr,Ti,e0,n0=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},i0=1,qs=[],me=[],Hi=[],Ya=Date.now,au=function(t,e){return e},oE=function(){var t=na.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,me),i.push.apply(i,Hi),me=n,Hi=i,au=function(a,o){return e[a](o)}},Nr=function(t,e){return~Hi.indexOf(t)&&Hi[Hi.indexOf(t)+1][e]},qa=function(t){return!!~t0.indexOf(t)},In=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$o="scrollLeft",Jo="scrollTop",ou=function(){return sr&&sr.isPressed||me.cache++},kl=function(t,e){var n=function i(s){if(s||s===0){i0&&(ai.history.scrollRestoration="manual");var a=sr&&sr.isPressed;s=i.v=Math.round(s)||(sr&&sr.iOS?1:0),t(s),i.cacheID=me.cache,a&&au("ss",s)}else(e||me.cache!==i.cacheID||au("ref"))&&(i.cacheID=me.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Bn={s:$o,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:kl(function(r){return arguments.length?ai.scrollTo(r,ln.sc()):ai.pageXOffset||Pr[$o]||Dr[$o]||ea[$o]||0})},ln={s:Jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:kl(function(r){return arguments.length?ai.scrollTo(Bn.sc(),r):ai.pageYOffset||Pr[Jo]||Dr[Jo]||ea[Jo]||0})},Hn=function(t,e){return(e&&e._ctx&&e._ctx.selector||xn.utils.toArray)(t)[0]||(typeof t=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},lE=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Gr=function(t,e){var n=e.s,i=e.sc;qa(t)&&(t=Pr.scrollingElement||Dr);var s=me.indexOf(t),a=i===ln.sc?1:2;!~s&&(s=me.push(t)-1),me[s+a]||In(t,"scroll",ou);var o=me[s+a],l=o||(me[s+a]=kl(Nr(t,n),!0)||(qa(t)?i:kl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=xn.getProperty(t,"scrollBehavior")==="smooth"),l},lu=function(t,e,n){var i=t,s=t,a=Ya(),o=a,l=e||50,c=Math.max(500,l*3),h=function(_,g){var p=Ya();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,p=s,m=Ya();return(_||_===0)&&_!==i&&h(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:h,reset:d,getVelocity:f}},Ca=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},qd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},r0=function(){na=xn.core.globals().ScrollTrigger,na&&na.core&&oE()},s0=function(t){return xn=t||n0(),!xl&&xn&&typeof document<"u"&&document.body&&(ai=window,Pr=document,Dr=Pr.documentElement,ea=Pr.body,t0=[ai,Pr,Dr,ea],xn.utils.clamp,e0=xn.core.context||function(){},Qr="onpointerenter"in ea?"pointer":"mouse",jm=Qe.isTouch=ai.matchMedia&&ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ti=Qe.eventTypes=("ontouchstart"in Dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return i0=0},500),xl=1),na||r0(),xl};Bn.op=ln;me.cache=0;var Qe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){xl||s0(xn)||console.warn("Please gsap.registerPlugin(Observer)"),na||r0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,b=n.onPress,x=n.onRelease,w=n.onRight,S=n.onLeft,T=n.onUp,v=n.onDown,E=n.onChangeX,C=n.onChangeY,P=n.onChange,D=n.onToggleX,H=n.onToggleY,V=n.onHover,N=n.onHoverEnd,G=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,nt=n.onGestureStart,L=n.onGestureEnd,lt=n.onWheel,St=n.onEnable,Qt=n.onDisable,jt=n.onClick,Jt=n.scrollSpeed,J=n.capture,ht=n.allowClicks,ot=n.lockAxis,Ct=n.onLockAxis;this.target=o=Hn(o)||Dr,this.vars=n,u&&(u=xn.utils.toArray(u)),i=i||1e-9,s=s||0,_=_||1,Jt=Jt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ai.getComputedStyle(ea).lineHeight)||22);var Vt,It,ee,Tt,tt,it,rt,F=this,_t=0,zt=0,Nt=n.passive||!h&&n.passive!==!1,Lt=Gr(o,Bn),Xt=Gr(o,ln),I=Lt(),de=Xt(),Wt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ti[0]==="pointerdown",R=qa(o),M=o.ownerDocument||Pr,k=[0,0,0],W=[0,0,0],K=0,dt=function(){return K=Ya()},ct=function(at,qt){return(F.event=at)&&u&&lE(at.target,u)||qt&&Wt&&at.pointerType!=="touch"||O&&O(at,qt)},$=function(){F._vx.reset(),F._vy.reset(),It.pause(),d&&d(F)},j=function(){var at=F.deltaX=qd(k),qt=F.deltaY=qd(W),ft=Math.abs(at)>=i,Zt=Math.abs(qt)>=i;P&&(ft||Zt)&&P(F,at,qt,k,W),ft&&(w&&F.deltaX>0&&w(F),S&&F.deltaX<0&&S(F),E&&E(F),D&&F.deltaX<0!=_t<0&&D(F),_t=F.deltaX,k[0]=k[1]=k[2]=0),Zt&&(v&&F.deltaY>0&&v(F),T&&F.deltaY<0&&T(F),C&&C(F),H&&F.deltaY<0!=zt<0&&H(F),zt=F.deltaY,W[0]=W[1]=W[2]=0),(Tt||ee)&&(G&&G(F),ee&&(p&&ee===1&&p(F),y&&y(F),ee=0),Tt=!1),it&&!(it=!1)&&Ct&&Ct(F),tt&&(lt(F),tt=!1),Vt=0},xt=function(at,qt,ft){k[ft]+=at,W[ft]+=qt,F._vx.update(at),F._vy.update(qt),c?Vt||(Vt=requestAnimationFrame(j)):j()},Ot=function(at,qt){ot&&!rt&&(F.axis=rt=Math.abs(at)>Math.abs(qt)?"x":"y",it=!0),rt!=="y"&&(k[2]+=at,F._vx.update(at,!0)),rt!=="x"&&(W[2]+=qt,F._vy.update(qt,!0)),c?Vt||(Vt=requestAnimationFrame(j)):j()},vt=function(at){if(!ct(at,1)){at=Ca(at,h);var qt=at.clientX,ft=at.clientY,Zt=qt-F.x,Bt=ft-F.y,ne=F.isDragging;F.x=qt,F.y=ft,(ne||(Zt||Bt)&&(Math.abs(F.startX-qt)>=s||Math.abs(F.startY-ft)>=s))&&(ee||(ee=ne?2:1),ne||(F.isDragging=!0),Ot(Zt,Bt))}},gt=F.onPress=function(ut){ct(ut,1)||ut&&ut.button||(F.axis=rt=null,It.pause(),F.isPressed=!0,ut=Ca(ut),_t=zt=0,F.startX=F.x=ut.clientX,F.startY=F.y=ut.clientY,F._vx.reset(),F._vy.reset(),In(Z?o:M,Ti[1],vt,Nt,!0),F.deltaX=F.deltaY=0,b&&b(F))},pt=F.onRelease=function(ut){if(!ct(ut,1)){Ln(Z?o:M,Ti[1],vt,!0);var at=!isNaN(F.y-F.startY),qt=F.isDragging,ft=qt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Zt=Ca(ut);!ft&&at&&(F._vx.reset(),F._vy.reset(),h&&ht&&xn.delayedCall(.08,function(){if(Ya()-K>300&&!ut.defaultPrevented){if(ut.target.click)ut.target.click();else if(M.createEvent){var Bt=M.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,ai,1,Zt.screenX,Zt.screenY,Zt.clientX,Zt.clientY,!1,!1,!1,!1,0,null),ut.target.dispatchEvent(Bt)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,d&&qt&&!Z&&It.restart(!0),ee&&j(),m&&qt&&m(F),x&&x(F,ft)}},Gt=function(at){return at.touches&&at.touches.length>1&&(F.isGesturing=!0)&&nt(at,F.isDragging)},Yt=function(){return(F.isGesturing=!1)||L(F)},B=function(at){if(!ct(at)){var qt=Lt(),ft=Xt();xt((qt-I)*Jt,(ft-de)*Jt,1),I=qt,de=ft,d&&It.restart(!0)}},mt=function(at){if(!ct(at)){at=Ca(at,h),lt&&(tt=!0);var qt=(at.deltaMode===1?l:at.deltaMode===2?ai.innerHeight:1)*_;xt(at.deltaX*qt,at.deltaY*qt,0),d&&!Z&&It.restart(!0)}},et=function(at){if(!ct(at)){var qt=at.clientX,ft=at.clientY,Zt=qt-F.x,Bt=ft-F.y;F.x=qt,F.y=ft,Tt=!0,d&&It.restart(!0),(Zt||Bt)&&Ot(Zt,Bt)}},yt=function(at){F.event=at,V(F)},Et=function(at){F.event=at,N(F)},st=function(at){return ct(at)||Ca(at,h)&&jt(F)};It=F._dc=xn.delayedCall(f||.25,$).pause(),F.deltaX=F.deltaY=0,F._vx=lu(0,50,!0),F._vy=lu(0,50,!0),F.scrollX=Lt,F.scrollY=Xt,F.isDragging=F.isGesturing=F.isPressed=!1,e0(this),F.enable=function(ut){return F.isEnabled||(In(R?M:o,"scroll",ou),a.indexOf("scroll")>=0&&In(R?M:o,"scroll",B,Nt,J),a.indexOf("wheel")>=0&&In(o,"wheel",mt,Nt,J),(a.indexOf("touch")>=0&&jm||a.indexOf("pointer")>=0)&&(In(o,Ti[0],gt,Nt,J),In(M,Ti[2],pt),In(M,Ti[3],pt),ht&&In(o,"click",dt,!0,!0),jt&&In(o,"click",st),nt&&In(M,"gesturestart",Gt),L&&In(M,"gestureend",Yt),V&&In(o,Qr+"enter",yt),N&&In(o,Qr+"leave",Et),G&&In(o,Qr+"move",et)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=Tt=ee=!1,F._vx.reset(),F._vy.reset(),I=Lt(),de=Xt(),ut&&ut.type&&gt(ut),St&&St(F)),F},F.disable=function(){F.isEnabled&&(qs.filter(function(ut){return ut!==F&&qa(ut.target)}).length||Ln(R?M:o,"scroll",ou),F.isPressed&&(F._vx.reset(),F._vy.reset(),Ln(Z?o:M,Ti[1],vt,!0)),Ln(R?M:o,"scroll",B,J),Ln(o,"wheel",mt,J),Ln(o,Ti[0],gt,J),Ln(M,Ti[2],pt),Ln(M,Ti[3],pt),Ln(o,"click",dt,!0),Ln(o,"click",st),Ln(M,"gesturestart",Gt),Ln(M,"gestureend",Yt),Ln(o,Qr+"enter",yt),Ln(o,Qr+"leave",Et),Ln(o,Qr+"move",et),F.isEnabled=F.isPressed=F.isDragging=!1,Qt&&Qt(F))},F.kill=F.revert=function(){F.disable();var ut=qs.indexOf(F);ut>=0&&qs.splice(ut,1),sr===F&&(sr=0)},qs.push(F),Z&&qa(o)&&(sr=F),F.enable(g)},aE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Qe.version="3.15.0";Qe.create=function(r){return new Qe(r)};Qe.register=s0;Qe.getAll=function(){return qs.slice()};Qe.getById=function(r){return qs.filter(function(t){return t.vars.id===r})[0]};n0()&&xn.registerPlugin(Qe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kt,Gs,pe,Te,ii,be,tf,zl,_o,Za,Ua,Qo,En,jl,cu,On,Zd,Kd,Vs,a0,qc,o0,Un,hu,l0,c0,yr,uu,ef,ia,nf,Ka,fu,Zc,jo=1,Tn=Date.now,Kc=Tn(),Si=0,Oa=0,$d=function(t,e,n){var i=ti(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Jd=function(t,e){return e&&(!ti(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},cE=function r(){return Oa&&requestAnimationFrame(r)},Qd=function(){return jl=1},jd=function(){return jl=0},Ii=function(t){return t},Fa=function(t){return Math.round(t*1e5)/1e5||0},h0=function(){return typeof window<"u"},u0=function(){return kt||h0()&&(kt=window.gsap)&&kt.registerPlugin&&kt},_s=function(t){return!!~tf.indexOf(t)},f0=function(t){return(t==="Height"?nf:pe["inner"+t])||ii["client"+t]||be["client"+t]},d0=function(t){return Nr(t,"getBoundingClientRect")||(_s(t)?function(){return bl.width=pe.innerWidth,bl.height=nf,bl}:function(){return ir(t)})},hE=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Nr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?f0(s):t["client"+s])||0}},uE=function(t,e){return!e||~Hi.indexOf(t)?d0(t):function(){return bl}},ki=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Nr(t,n))?a()-d0(t)()[s]:_s(t)?(ii[n]||be[n])-f0(i):t[n]-t["offset"+i])},tl=function(t,e){for(var n=0;n<Vs.length;n+=3)(!e||~e.indexOf(Vs[n+1]))&&t(Vs[n],Vs[n+1],Vs[n+2])},ti=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},Ba=function(t){return typeof t=="number"},jr=function(t){return typeof t=="object"},Ra=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Bs=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ks=Math.abs,p0="left",m0="top",rf="right",sf="bottom",hs="width",us="height",$a="Right",Ja="Left",Qa="Top",ja="Bottom",nn="padding",gi="margin",ma="Width",af="Height",on="px",xi=function(t){return pe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},fE=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},tp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ir=function(t,e){var n=e&&xi(t)[cu]!=="matrix(1, 0, 0, 1, 0, 0)"&&kt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},_0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},dE=function(t){return function(e){return kt.utils.snap(_0(t),e)}},of=function(t){var e=kt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},pE=function(t){return function(e,n){return of(_0(t))(e,n.direction)}},el=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},pn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},nl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ep={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},il={toggleActions:"play",anticipatePin:0},Vl={top:0,left:0,center:.5,bottom:1,right:1},vl=function(t,e){if(ti(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Vl?Vl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},rl=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,_=Te.createElement("div"),g=_s(n)||Nr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?be:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,b=y?c:h,x="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(x+=(i===ln?rf:sf)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Ml(_,0,i,y),_},Ml=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ma]=1,s["border"+o+ma]=0,s[n.p]=e+"px",kt.set(t,s)},fe=[],du={},go,np=function(){return Tn()-Si>34&&(go||(go=requestAnimationFrame(lr)))},zs=function(){(!Un||!Un.isPressed||Un.startX>be.clientWidth)&&(me.cache++,Un?go||(go=requestAnimationFrame(lr)):lr(),Si||xs("scrollStart"),Si=Tn())},$c=function(){c0=pe.innerWidth,l0=pe.innerHeight},ka=function(t){me.cache++,(t===!0||!En&&!o0&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!hu||c0!==pe.innerWidth||Math.abs(pe.innerHeight-l0)>pe.innerHeight*.25))&&zl.restart(!0)},gs={},mE=[],g0=function r(){return dn(_e,"scrollEnd",r)||ss(!0)},xs=function(t){return gs[t]&&gs[t].map(function(e){return e()})||mE},jn=[],x0=function(t){for(var e=0;e<jn.length;e+=5)(!t||jn[e+4]&&jn[e+4].query===t)&&(jn[e].style.cssText=jn[e+1],jn[e].getBBox&&jn[e].setAttribute("transform",jn[e+2]||""),jn[e+3].uncache=1)},v0=function(){return me.forEach(function(t){return An(t)&&++t.cacheID&&(t.rec=t())})},lf=function(t,e){var n;for(On=0;On<fe.length;On++)n=fe[On],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ka=!0,e&&x0(e),e||xs("revert")},M0=function(t,e){me.cache++,(e||!Fn)&&me.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),ti(t)&&(pe.history.scrollRestoration=ef=t)},Fn,fs=0,ip,_E=function(){if(ip!==fs){var t=ip=fs;requestAnimationFrame(function(){return t===fs&&ss(!0)})}},S0=function(){be.appendChild(ia),nf=!Un&&ia.offsetHeight||pe.innerHeight,be.removeChild(ia)},rp=function(t){return _o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ss=function(t,e){if(ii=Te.documentElement,be=Te.body,tf=[pe,Te,ii,be],Si&&!t&&!Ka){pn(_e,"scrollEnd",g0);return}S0(),Fn=_e.isRefreshing=!0,Ka||v0();var n=xs("refreshInit");a0&&_e.sort(),e||lf(),me.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),fe.slice(0).forEach(function(i){return i.refresh()}),Ka=!1,fe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),fu=1,rp(!0),fe.forEach(function(i){var s=ki(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),rp(!1),fu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),me.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M0(ef,1),zl.pause(),fs++,Fn=2,lr(2),fe.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Fn=_e.isRefreshing=!1,xs("refresh")},pu=0,Sl=1,to,lr=function(t){if(t===2||!Fn&&!Ka){_e.isUpdating=!0,to&&to.update(0);var e=fe.length,n=Tn(),i=n-Kc>=50,s=e&&fe[0].scroll();if(Sl=pu>s?-1:1,Fn||(pu=s),i&&(Si&&!jl&&n-Si>200&&(Si=0,xs("scrollEnd")),Ua=Kc,Kc=n),Sl<0){for(On=e;On-- >0;)fe[On]&&fe[On].update(0,i);Sl=1}else for(On=0;On<e;On++)fe[On]&&fe[On].update(0,i);_e.isUpdating=!1}go=0},mu=[p0,m0,sf,rf,gi+ja,gi+$a,gi+Qa,gi+Ja,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yl=mu.concat([hs,us,"boxSizing","max"+ma,"max"+af,"position",gi,nn,nn+Qa,nn+$a,nn+ja,nn+Ja]),gE=function(t,e,n){ra(n);var i=t._gsap;if(i.spacerIsNative)ra(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Jc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=mu.length,a=e.style,o=t.style,l;s--;)l=mu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[sf]=o[rf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[hs]=Gl(t,Bn)+on,a[us]=Gl(t,ln)+on,a[nn]=o[gi]=o[m0]=o[p0]="0",ra(i),o[hs]=o["max"+ma]=n[hs],o[us]=o["max"+af]=n[us],o[nn]=n[nn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},xE=/([A-Z])/g,ra=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||kt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(xE,"-$1").toLowerCase())}},sl=function(t){for(var e=yl.length,n=t.style,i=[],s=0;s<e;s++)i.push(yl[s],n[yl[s]]);return i.t=t,i},vE=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},bl={left:0,top:0},sp=function(t,e,n,i,s,a,o,l,c,h,d,f,u,_){An(t)&&(t=t(l)),ti(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?vl("0"+t.substr(3),n):0));var g=u?u.time():0,p,m,y;if(u&&u.seek(0),isNaN(t)||(t=+t),Ba(t))u&&(t=kt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),o&&Ml(o,n,i,!0);else{An(e)&&(e=e(l));var b=(t||"0").split(" "),x,w,S,T;y=Hn(e,l)||be,x=ir(y)||{},(!x||!x.left&&!x.top)&&xi(y).display==="none"&&(T=y.style.display,y.style.display="block",x=ir(y),T?y.style.display=T:y.style.removeProperty("display")),w=vl(b[0],x[i.d]),S=vl(b[1]||"0",n),t=x[i.p]-c[i.p]-h+w+s-S,o&&Ml(o,S,i,n-S<20||o._isStart&&S>20),n-=n-S}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var v=t+n,E=a._isStart;p="scroll"+i.d2,Ml(a,v,i,E&&v>20||!E&&(d?Math.max(be[p],ii[p]):a.parentNode[p])<=v+1),d&&(c=ir(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+on))}return u&&y&&(p=ir(y),u.seek(f),m=ir(y),u._caScrollDist=p[i.p]-m[i.p],t=t/u._caScrollDist*f),u&&u.seek(g),u?t:Math.round(t)},ME=/(webkit|moz|length|cssText|inset)/i,ap=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===be){t._stOrig=s.cssText,o=xi(t);for(a in o)!+a&&!ME.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;kt.core.getCache(t).uncache=1,e.appendChild(t)}},y0=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},al=function(t,e,n){var i={};i[e.p]="+="+n,kt.set(t,i)},op=function(t,e){var n=Gr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,_={};c=c||n();var g=y0(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){me.cache++,a.tween&&lr()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=kt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(t,"wheel",n.wheelHandler),_e.isTouch&&pn(t,"touchmove",n.wheelHandler),s},_e=function(){function r(e,n){Gs||r.register(kt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oa){this.update=this.refresh=this.kill=Ii;return}n=tp(ti(n)||Ba(n)||n.nodeType?{trigger:n}:n,il);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,b=s.once,x=s.snap,w=s.pinReparent,S=s.pinSpacer,T=s.containerAnimation,v=s.fastScrollEnd,E=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Bn:ln,P=!d&&d!==0,D=Hn(n.scroller||pe),H=kt.core.getCache(D),V=_s(D),N=("pinType"in n?n.pinType:Nr(D,"pinType")||V&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),Z="markers"in n?n.markers:il.markers,nt=V?0:parseFloat(xi(D)["border"+C.p2+ma])||0,L=this,lt=n.onRefreshInit&&function(){return n.onRefreshInit(L)},St=hE(D,V,C),Qt=uE(D,V),jt=0,Jt=0,J=0,ht=Gr(D,C),ot,Ct,Vt,It,ee,Tt,tt,it,rt,F,_t,zt,Nt,Lt,Xt,I,de,Wt,R,M,k,W,K,dt,ct,$,j,xt,Ot,vt,gt,pt,Gt,Yt,B,mt,et,yt,Et;if(L._startClamp=L._endClamp=!1,L._dir=C,p*=45,L.scroller=D,L.scroll=T?T.time.bind(T):ht,It=ht(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(a0=1,n.refreshPriority===-9999&&(to=L)),H.tweenScroll=H.tweenScroll||{top:op(D,ln),left:op(D,Bn)},L.tweenTo=ot=H.tweenScroll[C.p],L.scrubDuration=function(ft){Gt=Ba(ft)&&ft,Gt?pt?pt.duration(ft):pt=kt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Gt,paused:!0,onComplete:function(){return m&&m(L)}}):(pt&&pt.progress(1).kill(),pt=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),vt=0,l||(l=i.vars.id)),x&&((!jr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in be.style&&kt.set(V?[be,ii]:D,{scrollBehavior:"auto"}),me.forEach(function(ft){return An(ft)&&ft.target===(V?Te.scrollingElement||ii:D)&&(ft.smooth=!1)}),Vt=An(x.snapTo)?x.snapTo:x.snapTo==="labels"?dE(i):x.snapTo==="labelsDirectional"?pE(i):x.directional!==!1?function(ft,Zt){return of(x.snapTo)(ft,Tn()-Jt<500?0:Zt.direction)}:kt.utils.snap(x.snapTo),Yt=x.duration||{min:.1,max:2},Yt=jr(Yt)?Za(Yt.min,Yt.max):Za(Yt,Yt),B=kt.delayedCall(x.delay||Gt/2||.1,function(){var ft=ht(),Zt=Tn()-Jt<500,Bt=ot.tween;if((Zt||Math.abs(L.getVelocity())<10)&&!Bt&&!jl&&jt!==ft){var ne=(ft-Tt)/Lt,Ue=i&&!P?i.totalProgress():ne,wt=Zt?0:(Ue-gt)/(Tn()-Ua)*1e3||0,Ut=kt.utils.clamp(-ne,1-ne,ks(wt/2)*wt/.185),ie=ne+(x.inertia===!1?0:Ut),se,Me,ae=x,je=ae.onStart,Ee=ae.onInterrupt,Mn=ae.onComplete;if(se=Vt(ie,L),Ba(se)||(se=ie),Me=Math.max(0,Math.round(Tt+se*Lt)),ft<=tt&&ft>=Tt&&Me!==ft){if(Bt&&!Bt._initted&&Bt.data<=ks(Me-ft))return;x.inertia===!1&&(Ut=se-ne),ot(Me,{duration:Yt(ks(Math.max(ks(ie-Ue),ks(se-Ue))*.185/wt/.05||0)),ease:x.ease||"power3",data:ks(Me-ft),onInterrupt:function(){return B.restart(!0)&&Ee&&Bs(L,Ee)},onComplete:function(){L.update(),jt=ht(),i&&!P&&(pt?pt.resetTo("totalProgress",se,i._tTime/i._tDur):i.progress(se)),vt=gt=i&&!P?i.totalProgress():L.progress,y&&y(L),Mn&&Bs(L,Mn)}},ft,Ut*Lt,Me-ft-Ut*Lt),je&&Bs(L,je,ot.tween)}}else L.isActive&&jt!==ft&&B.restart(!0)}).pause()),l&&(du[l]=L),f=L.trigger=Hn(f||u!==!0&&u),Et=f&&f._gsap&&f._gsap.stRevert,Et&&(Et=Et(L)),u=u===!0?f:Hn(u),ti(o)&&(o={targets:f,className:o}),u&&(_===!1||_===gi||(_=!_&&u.parentNode&&u.parentNode.style&&xi(u.parentNode).display==="flex"?!1:nn),L.pin=u,Ct=kt.core.getCache(u),Ct.spacer?Xt=Ct.pinState:(S&&(S=Hn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Ct.spacerIsNative=!!S,S&&(Ct.spacerState=sl(S))),Ct.spacer=Wt=S||Te.createElement("div"),Wt.classList.add("pin-spacer"),l&&Wt.classList.add("pin-spacer-"+l),Ct.pinState=Xt=sl(u)),n.force3D!==!1&&kt.set(u,{force3D:!0}),L.spacer=Wt=Ct.spacer,Ot=xi(u),dt=Ot[_+C.os2],M=kt.getProperty(u),k=kt.quickSetter(u,C.a,on),Jc(u,Wt,Ot),de=sl(u)),Z){zt=jr(Z)?tp(Z,ep):ep,F=rl("scroller-start",l,D,C,zt,0),_t=rl("scroller-end",l,D,C,zt,0,F),R=F["offset"+C.op.d2];var st=Hn(Nr(D,"content")||D);it=this.markerStart=rl("start",l,st,C,zt,R,0,T),rt=this.markerEnd=rl("end",l,st,C,zt,R,0,T),T&&(yt=kt.quickSetter([it,rt],C.a,on)),!N&&!(Hi.length&&Nr(D,"fixedMarkers")===!0)&&(fE(V?be:D),kt.set([F,_t],{force3D:!0}),$=kt.quickSetter(F,C.a,on),xt=kt.quickSetter(_t,C.a,on))}if(T){var ut=T.vars.onUpdate,at=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),ut&&ut.apply(T,at||[])})}if(L.previous=function(){return fe[fe.indexOf(L)-1]},L.next=function(){return fe[fe.indexOf(L)+1]},L.revert=function(ft,Zt){if(!Zt)return L.kill(!0);var Bt=ft!==!1||!L.enabled,ne=En;Bt!==L.isReverted&&(Bt&&(mt=Math.max(ht(),L.scroll.rec||0),J=L.progress,et=i&&i.progress()),it&&[it,rt,F,_t].forEach(function(Ue){return Ue.style.display=Bt?"none":"block"}),Bt&&(En=L,L.update(Bt)),u&&(!w||!L.isActive)&&(Bt?gE(u,Wt,Xt):Jc(u,Wt,xi(u),ct)),Bt||L.update(Bt),En=ne,L.isReverted=Bt)},L.refresh=function(ft,Zt,Bt,ne){if(!((En||!L.enabled)&&!Zt)){if(u&&ft&&Si){pn(r,"scrollEnd",g0);return}!Fn&&lt&&lt(L),En=L,ot.tween&&!Bt&&(ot.tween.kill(),ot.tween=0),pt&&pt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Rt){return Rt.vars.immediateRender&&Rt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ue=St(),wt=Qt(),Ut=T?T.duration():ki(D,C),ie=Lt<=.01||!Lt,se=0,Me=ne||0,ae=jr(Bt)?Bt.end:n.end,je=n.endTrigger||f,Ee=jr(Bt)?Bt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Mn=L.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,L),Dn=f&&Math.max(0,fe.indexOf(L))||0,tn=Dn,We,sn,Ci,Ms,un,qe,fi,A,z,q,X,Y,At;for(Z&&jr(Bt)&&(Y=kt.getProperty(F,C.p),At=kt.getProperty(_t,C.p));tn-- >0;)qe=fe[tn],qe.end||qe.refresh(0,1)||(En=L),fi=qe.pin,fi&&(fi===f||fi===u||fi===Mn)&&!qe.isReverted&&(q||(q=[]),q.unshift(qe),qe.revert(!0,!0)),qe!==fe[tn]&&(Dn--,tn--);for(An(Ee)&&(Ee=Ee(L)),Ee=$d(Ee,"start",L),Tt=sp(Ee,f,Ue,C,ht(),it,F,L,wt,nt,N,Ut,T,L._startClamp&&"_startClamp")||(u?-.001:0),An(ae)&&(ae=ae(L)),ti(ae)&&!ae.indexOf("+=")&&(~ae.indexOf(" ")?ae=(ti(Ee)?Ee.split(" ")[0]:"")+ae:(se=vl(ae.substr(2),Ue),ae=ti(Ee)?Ee:(T?kt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Tt):Tt)+se,je=f)),ae=$d(ae,"end",L),tt=Math.max(Tt,sp(ae||(je?"100% 0":Ut),je,Ue,C,ht()+se,rt,_t,L,wt,nt,N,Ut,T,L._endClamp&&"_endClamp"))||-.001,se=0,tn=Dn;tn--;)qe=fe[tn]||{},fi=qe.pin,fi&&qe.start-qe._pinPush<=Tt&&!T&&qe.end>0&&(We=qe.end-(L._startClamp?Math.max(0,qe.start):qe.start),(fi===f&&qe.start-qe._pinPush<Tt||fi===Mn)&&isNaN(Ee)&&(se+=We*(1-qe.progress)),fi===u&&(Me+=We));if(Tt+=se,tt+=se,L._startClamp&&(L._startClamp+=se),L._endClamp&&!Fn&&(L._endClamp=tt||-.001,tt=Math.min(tt,ki(D,C))),Lt=tt-Tt||(Tt-=.01)&&.001,ie&&(J=kt.utils.clamp(0,1,kt.utils.normalize(Tt,tt,mt))),L._pinPush=Me,it&&se&&(We={},We[C.a]="+="+se,Mn&&(We[C.p]="-="+ht()),kt.set([it,rt],We)),u&&!(fu&&L.end>=ki(D,C)))We=xi(u),Ms=C===ln,Ci=ht(),W=parseFloat(M(C.a))+Me,!Ut&&tt>1&&(X=(V?Te.scrollingElement||ii:D).style,X={style:X,value:X["overflow"+C.a.toUpperCase()]},V&&xi(be)["overflow"+C.a.toUpperCase()]!=="scroll"&&(X.style["overflow"+C.a.toUpperCase()]="scroll")),Jc(u,Wt,We),de=sl(u),sn=ir(u,!0),A=N&&Gr(D,Ms?Bn:ln)(),_?(ct=[_+C.os2,Lt+Me+on],ct.t=Wt,tn=_===nn?Gl(u,C)+Lt+Me:0,tn&&(ct.push(C.d,tn+on),Wt.style.flexBasis!=="auto"&&(Wt.style.flexBasis=tn+on)),ra(ct),Mn&&fe.forEach(function(Rt){Rt.pin===Mn&&Rt.vars.pinSpacing!==!1&&(Rt._subPinOffset=!0)}),N&&ht(mt)):(tn=Gl(u,C),tn&&Wt.style.flexBasis!=="auto"&&(Wt.style.flexBasis=tn+on)),N&&(un={top:sn.top+(Ms?Ci-Tt:A)+on,left:sn.left+(Ms?A:Ci-Tt)+on,boxSizing:"border-box",position:"fixed"},un[hs]=un["max"+ma]=Math.ceil(sn.width)+on,un[us]=un["max"+af]=Math.ceil(sn.height)+on,un[gi]=un[gi+Qa]=un[gi+$a]=un[gi+ja]=un[gi+Ja]="0",un[nn]=We[nn],un[nn+Qa]=We[nn+Qa],un[nn+$a]=We[nn+$a],un[nn+ja]=We[nn+ja],un[nn+Ja]=We[nn+Ja],I=vE(Xt,un,w),Fn&&ht(0)),i?(z=i._initted,qc(1),i.render(i.duration(),!0,!0),K=M(C.a)-W+Lt+Me,j=Math.abs(Lt-K)>1,N&&j&&I.splice(I.length-2,2),i.render(0,!0,!0),z||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),qc(0)):K=Lt,X&&(X.value?X.style["overflow"+C.a.toUpperCase()]=X.value:X.style.removeProperty("overflow-"+C.a));else if(f&&ht()&&!T)for(sn=f.parentNode;sn&&sn!==be;)sn._pinOffset&&(Tt-=sn._pinOffset,tt-=sn._pinOffset),sn=sn.parentNode;q&&q.forEach(function(Rt){return Rt.revert(!1,!0)}),L.start=Tt,L.end=tt,It=ee=Fn?mt:ht(),!T&&!Fn&&(It<mt&&ht(mt),L.scroll.rec=0),L.revert(!1,!0),Jt=Tn(),B&&(jt=-1,B.restart(!0)),En=0,i&&P&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(ie||J!==L.progress||T||g||i&&!i._initted)&&(i&&!P&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Tt<-.001&&!J?kt.utils.normalize(Tt,tt,0):J,!0),L.progress=ie||(It-Tt)/Lt===J?0:J),u&&_&&(Wt._pinOffset=Math.round(L.progress*K)),pt&&pt.invalidate(),isNaN(Y)||(Y-=kt.getProperty(F,C.p),At-=kt.getProperty(_t,C.p),al(F,C,Y),al(it,C,Y-(ne||0)),al(_t,C,At),al(rt,C,At-(ne||0))),ie&&!Fn&&L.update(),h&&!Fn&&!Nt&&(Nt=!0,h(L),Nt=!1)}},L.getVelocity=function(){return(ht()-ee)/(Tn()-Ua)*1e3||0},L.endAnimation=function(){Ra(L.callbackAnimation),i&&(pt?pt.progress(1):i.paused()?P||Ra(i,L.direction<0,1):Ra(i,i.reversed()))},L.labelToScroll=function(ft){return i&&i.labels&&(Tt||L.refresh()||Tt)+i.labels[ft]/i.duration()*Lt||0},L.getTrailing=function(ft){var Zt=fe.indexOf(L),Bt=L.direction>0?fe.slice(0,Zt).reverse():fe.slice(Zt+1);return(ti(ft)?Bt.filter(function(ne){return ne.vars.preventOverlaps===ft}):Bt).filter(function(ne){return L.direction>0?ne.end<=Tt:ne.start>=tt})},L.update=function(ft,Zt,Bt){if(!(T&&!Bt&&!ft)){var ne=Fn===!0?mt:L.scroll(),Ue=ft?0:(ne-Tt)/Lt,wt=Ue<0?0:Ue>1?1:Ue||0,Ut=L.progress,ie,se,Me,ae,je,Ee,Mn,Dn;if(Zt&&(ee=It,It=T?ht():ne,x&&(gt=vt,vt=i&&!P?i.totalProgress():wt)),p&&u&&!En&&!jo&&Si&&(!wt&&Tt<ne+(ne-ee)/(Tn()-Ua)*p?wt=1e-4:wt===1&&tt>ne+(ne-ee)/(Tn()-Ua)*p&&(wt=.9999)),wt!==Ut&&L.enabled){if(ie=L.isActive=!!wt&&wt<1,se=!!Ut&&Ut<1,Ee=ie!==se,je=Ee||!!wt!=!!Ut,L.direction=wt>Ut?1:-1,L.progress=wt,je&&!En&&(Me=wt&&!Ut?0:wt===1?1:Ut===1?2:3,P&&(ae=!Ee&&O[Me+1]!=="none"&&O[Me+1]||O[Me],Dn=i&&(ae==="complete"||ae==="reset"||ae in i))),E&&(Ee||Dn)&&(Dn||d||!i)&&(An(E)?E(L):L.getTrailing(E).forEach(function(Ci){return Ci.endAnimation()})),P||(pt&&!En&&!jo?(pt._dp._time-pt._start!==pt._time&&pt.render(pt._dp._time-pt._start),pt.resetTo?pt.resetTo("totalProgress",wt,i._tTime/i._tDur):(pt.vars.totalProgress=wt,pt.invalidate().restart())):i&&i.totalProgress(wt,!!(En&&(Jt||ft)))),u){if(ft&&_&&(Wt.style[_+C.os2]=dt),!N)k(Fa(W+K*wt));else if(je){if(Mn=!ft&&wt>Ut&&tt+1>ne&&ne+1>=ki(D,C),w)if(!ft&&(ie||Mn)){var tn=ir(u,!0),We=ne-Tt;ap(u,be,tn.top+(C===ln?We:0)+on,tn.left+(C===ln?0:We)+on)}else ap(u,Wt);ra(ie||Mn?I:de),j&&wt<1&&ie||k(W+(wt===1&&!Mn?K:0))}}x&&!ot.tween&&!En&&!jo&&B.restart(!0),o&&(Ee||b&&wt&&(wt<1||!Zc))&&_o(o.targets).forEach(function(Ci){return Ci.classList[ie||b?"add":"remove"](o.className)}),a&&!P&&!ft&&a(L),je&&!En?(P&&(Dn&&(ae==="complete"?i.pause().totalProgress(1):ae==="reset"?i.restart(!0).pause():ae==="restart"?i.restart(!0):i[ae]()),a&&a(L)),(Ee||!Zc)&&(c&&Ee&&Bs(L,c),G[Me]&&Bs(L,G[Me]),b&&(wt===1?L.kill(!1,1):G[Me]=0),Ee||(Me=wt===1?1:3,G[Me]&&Bs(L,G[Me]))),v&&!ie&&Math.abs(L.getVelocity())>(Ba(v)?v:2500)&&(Ra(L.callbackAnimation),pt?pt.progress(1):Ra(i,ae==="reverse"?1:!wt,1))):P&&a&&!En&&a(L)}if(xt){var sn=T?ne/T.duration()*(T._caScrollDist||0):ne;$(sn+(F._isFlipped?1:0)),xt(sn)}yt&&yt(-ne/T.duration()*(T._caScrollDist||0))}},L.enable=function(ft,Zt){L.enabled||(L.enabled=!0,pn(D,"resize",ka),V||pn(D,"scroll",zs),lt&&pn(r,"refreshInit",lt),ft!==!1&&(L.progress=J=0,It=ee=jt=ht()),Zt!==!1&&L.refresh())},L.getTween=function(ft){return ft&&ot?ot.tween:pt},L.setPositions=function(ft,Zt,Bt,ne){if(T){var Ue=T.scrollTrigger,wt=T.duration(),Ut=Ue.end-Ue.start;ft=Ue.start+Ut*ft/wt,Zt=Ue.start+Ut*Zt/wt}L.refresh(!1,!1,{start:Jd(ft,Bt&&!!L._startClamp),end:Jd(Zt,Bt&&!!L._endClamp)},ne),L.update()},L.adjustPinSpacing=function(ft){if(ct&&ft){var Zt=ct.indexOf(C.d)+1;ct[Zt]=parseFloat(ct[Zt])+ft+on,ct[1]=parseFloat(ct[1])+ft+on,ra(ct)}},L.disable=function(ft,Zt){if(ft!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Zt||pt&&pt.pause(),mt=0,Ct&&(Ct.uncache=1),lt&&dn(r,"refreshInit",lt),B&&(B.pause(),ot.tween&&ot.tween.kill()&&(ot.tween=0)),!V)){for(var Bt=fe.length;Bt--;)if(fe[Bt].scroller===D&&fe[Bt]!==L)return;dn(D,"resize",ka),V||dn(D,"scroll",zs)}},L.kill=function(ft,Zt){L.disable(ft,Zt),pt&&!Zt&&pt.kill(),l&&delete du[l];var Bt=fe.indexOf(L);Bt>=0&&fe.splice(Bt,1),Bt===On&&Sl>0&&On--,Bt=0,fe.forEach(function(ne){return ne.scroller===L.scroller&&(Bt=1)}),Bt||Fn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ft&&i.revert({kill:!1}),Zt||i.kill()),it&&[it,rt,F,_t].forEach(function(ne){return ne.parentNode&&ne.parentNode.removeChild(ne)}),to===L&&(to=0),u&&(Ct&&(Ct.uncache=1),Bt=0,fe.forEach(function(ne){return ne.pin===u&&Bt++}),Bt||(Ct.spacer=0)),n.onKill&&n.onKill(L)},fe.push(L),L.enable(!1,!1),Et&&Et(L),i&&i.add&&!Lt){var qt=L.update;L.update=function(){L.update=qt,me.cache++,Tt||tt||L.refresh()},kt.delayedCall(.01,L.update),Lt=.01,Tt=tt=0}else L.refresh();u&&_E()},r.register=function(n){return Gs||(kt=n||u0(),h0()&&window.document&&r.enable(),Gs=Oa),Gs},r.defaults=function(n){if(n)for(var i in n)il[i]=n[i];return il},r.disable=function(n,i){Oa=0,fe.forEach(function(a){return a[i?"kill":"disable"](n)}),dn(pe,"wheel",zs),dn(Te,"scroll",zs),clearInterval(Qo),dn(Te,"touchcancel",Ii),dn(be,"touchstart",Ii),el(dn,Te,"pointerdown,touchstart,mousedown",Qd),el(dn,Te,"pointerup,touchend,mouseup",jd),zl.kill(),tl(dn);for(var s=0;s<me.length;s+=3)nl(dn,me[s],me[s+1]),nl(dn,me[s],me[s+2])},r.enable=function(){if(pe=window,Te=document,ii=Te.documentElement,be=Te.body,kt){if(_o=kt.utils.toArray,Za=kt.utils.clamp,uu=kt.core.context||Ii,qc=kt.core.suppressOverwrites||Ii,ef=pe.history.scrollRestoration||"auto",pu=pe.pageYOffset||0,kt.core.globals("ScrollTrigger",r),be){Oa=1,ia=document.createElement("div"),ia.style.height="100vh",ia.style.position="absolute",S0(),cE(),Qe.register(kt),r.isTouch=Qe.isTouch,yr=Qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hu=Qe.isTouch===1,pn(pe,"wheel",zs),tf=[pe,Te,ii,be],kt.matchMedia?(r.matchMedia=function(h){var d=kt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},kt.addEventListener("matchMediaInit",function(){v0(),lf()}),kt.addEventListener("matchMediaRevert",function(){return x0()}),kt.addEventListener("matchMedia",function(){ss(0,1),xs("matchMedia")}),kt.matchMedia().add("(orientation: portrait)",function(){return $c(),$c})):console.warn("Requires GSAP 3.11.0 or later"),$c(),pn(Te,"scroll",zs);var n=be.hasAttribute("style"),i=be.style,s=i.borderTopStyle,a=kt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=ir(be),ln.m=Math.round(o.top+ln.sc())||0,Bn.m=Math.round(o.left+Bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),Qo=setInterval(np,250),kt.delayedCall(.5,function(){return jo=0}),pn(Te,"touchcancel",Ii),pn(be,"touchstart",Ii),el(pn,Te,"pointerdown,touchstart,mousedown",Qd),el(pn,Te,"pointerup,touchend,mouseup",jd),cu=kt.utils.checkPrefix("transform"),yl.push(cu),Gs=Tn(),zl=kt.delayedCall(.2,ss).pause(),Vs=[Te,"visibilitychange",function(){var h=pe.innerWidth,d=pe.innerHeight;Te.hidden?(Zd=h,Kd=d):(Zd!==h||Kd!==d)&&ka()},Te,"DOMContentLoaded",ss,pe,"load",ss,pe,"resize",ka],tl(pn),fe.forEach(function(h){return h.enable(0,1)}),l=0;l<me.length;l+=3)nl(dn,me[l],me[l+1]),nl(dn,me[l],me[l+2])}else if(Te){var c=function h(){r.enable(),Te.removeEventListener("DOMContentLoaded",h)};Te.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Zc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Qo)||(Qo=i)&&setInterval(np,i),"ignoreMobileResize"in n&&(hu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tl(dn)||tl(pn,n.autoRefreshEvents||"none"),o0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),a=me.indexOf(s),o=_s(s);~a&&me.splice(a,o?6:2),i&&(o?Hi.unshift(pe,i,be,i,ii,i):Hi.unshift(s,i))},r.clearMatchMedia=function(n){fe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ti(n)?Hn(n):n).getBoundingClientRect(),o=a[s?hs:us]*i||0;return s?a.right-o>0&&a.left+o<pe.innerWidth:a.bottom-o>0&&a.top+o<pe.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=Hn(n));var a=n.getBoundingClientRect(),o=a[s?hs:us],l=i==null?o/2:i in Vl?Vl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/pe.innerWidth:(a.top+l)/pe.innerHeight},r.killAll=function(n){if(fe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=gs.killAll||[];gs={},i.forEach(function(s){return s()})}},r}();_e.version="3.15.0";_e.saveStyles=function(r){return r?_o(r).forEach(function(t){if(t&&t.style){var e=jn.indexOf(t);e>=0&&jn.splice(e,5),jn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),kt.core.getCache(t),uu())}}):jn};_e.revert=function(r,t){return lf(!r,t)};_e.create=function(r,t){return new _e(r,t)};_e.refresh=function(r){return r?ka(!0):(Gs||_e.register())&&ss(!0)};_e.update=function(r){return++me.cache&&lr(r===!0?2:0)};_e.clearScrollMemory=M0;_e.maxScroll=function(r,t){return ki(r,t?Bn:ln)};_e.getScrollFunc=function(r,t){return Gr(Hn(r),t?Bn:ln)};_e.getById=function(r){return du[r]};_e.getAll=function(){return fe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};_e.isScrolling=function(){return!!Si};_e.snapDirectional=of;_e.addEventListener=function(r,t){var e=gs[r]||(gs[r]=[]);~e.indexOf(t)||e.push(t)};_e.removeEventListener=function(r,t){var e=gs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};_e.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],f=[],u=kt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(_){d.length||u.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&u.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&An(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return An(s)&&(s=s(),pn(_e,"refresh",function(){return s=t.batchMax()})),_o(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(_e.create(c))}),e};var lp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Qc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Qe.isTouch?" pinch-zoom":""):"none",t===ii&&r(be,e)},ol={auto:1,scroll:1},SE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||kt.core.getCache(s),o=Tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==be&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ol[(l=xi(s)).overflowY]||ol[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!_s(s)&&(ol[(l=xi(s)).overflowY]||ol[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},b0=function(t,e,n,i){return Qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&SE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(Te,Qe.eventTypes[0],hp,!1,!0)},onDisable:function(){return dn(Te,Qe.eventTypes[0],hp,!0)}})},yE=/(input|label|select|textarea)/i,cp,hp=function(t){var e=yE.test(t.target.tagName);(e||cp)&&(t._gsapAllow=!0,cp=e)},bE=function(t){jr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Hn(t.target)||ii,h=kt.core.globals().ScrollSmoother,d=h&&h.get(),f=yr&&(t.content&&Hn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Gr(c,ln),_=Gr(c,Bn),g=1,p=(Qe.isTouch&&pe.visualViewport?pe.visualViewport.scale*pe.visualViewport.width:pe.outerWidth)/pe.innerWidth,m=0,y=An(i)?function(){return i(o)}:function(){return i||2.8},b,x,w=b0(c,t.type,!0,s),S=function(){return x=!1},T=Ii,v=Ii,E=function(){l=ki(c,ln),v=Za(yr?1:0,l),n&&(T=Za(0,ki(c,Bn))),b=fs},C=function(){f._gsap.y=Fa(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},P=function(){if(x){requestAnimationFrame(S);var Z=Fa(o.deltaY/2),nt=v(u.v-Z);if(f&&nt!==u.v+u.offset){u.offset=nt-u.v;var L=Fa((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",u.cacheID=me.cache,lr()}return!0}u.offset&&C(),x=!0},D,H,V,N,G=function(){E(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&kt.set(f,{y:"+=0"}),t.ignoreCheck=function(O){return yr&&O.type==="touchmove"&&P()||g>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){x=!1;var O=g;g=Fa((pe.visualViewport&&pe.visualViewport.scale||1)/p),D.pause(),O!==g&&Qc(c,g>1.01?!0:n?!1:"x"),H=_(),V=u(),E(),b=fs},t.onRelease=t.onGestureStart=function(O,Z){if(u.offset&&C(),!Z)N.restart(!0);else{me.cache++;var nt=y(),L,lt;n&&(L=_(),lt=L+nt*.05*-O.velocityX/.227,nt*=lp(_,L,lt,ki(c,Bn)),D.vars.scrollX=T(lt)),L=u(),lt=L+nt*.05*-O.velocityY/.227,nt*=lp(u,L,lt,ki(c,ln)),D.vars.scrollY=v(lt),D.invalidate().duration(nt).play(.01),(yr&&D.vars.scrollY>=l||L>=l-1)&&kt.to({},{onUpdate:G,duration:nt})}a&&a(O)},t.onWheel=function(){D._ts&&D.pause(),Tn()-m>1e3&&(b=0,m=Tn())},t.onChange=function(O,Z,nt,L,lt){if(fs!==b&&E(),Z&&n&&_(T(L[2]===Z?H+(O.startX-O.x):_()+Z-L[1])),nt){u.offset&&C();var St=lt[2]===nt,Qt=St?V+O.startY-O.y:u()+nt-lt[1],jt=v(Qt);St&&Qt!==jt&&(V+=jt-Qt),u(jt)}(nt||Z)&&lr()},t.onEnable=function(){Qc(c,n?!1:"x"),_e.addEventListener("refresh",G),pn(pe,"resize",G),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=_.smooth=!1),w.enable()},t.onDisable=function(){Qc(c,!0),dn(pe,"resize",G),_e.removeEventListener("refresh",G),w.kill()},t.lockAxis=t.lockAxis!==!1,o=new Qe(t),o.iOS=yr,yr&&!u()&&u(1),yr&&kt.ticker.add(Ii),N=o._dc,D=kt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y0(u,u(),function(){return D.pause()})},onUpdate:lr,onComplete:N.vars.onComplete}),o};_e.sort=function(r){if(An(r))return fe.sort(r);var t=pe.pageYOffset||0;return _e.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+pe.innerHeight}),fe.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};_e.observe=function(r){return new Qe(r)};_e.normalizeScroll=function(r){if(typeof r>"u")return Un;if(r===!0&&Un)return Un.enable();if(r===!1){Un&&Un.kill(),Un=r;return}var t=r instanceof Qe?r:bE(r);return Un&&Un.target===t.target&&Un.kill(),_s(t.target)&&(Un=t),t};_e.core={_getVelocityProp:lu,_inputObserver:b0,_scrollers:me,_proxies:Hi,bridge:{ss:function(){Si||xs("scrollStart"),Si=Tn()},ref:function(){return En}}};u0()&&kt.registerPlugin(_e);ju.registerPlugin(_e);class EE{constructor(t,e,n){this.appScene=t,this.buildingModel=e,this.hotspotManager=n,this.isManualExploded=!1,this.initTimeline()}initTimeline(){const t=this.appScene.camera,e=this.appScene.cameraTarget;this.timeline=ju.timeline({scrollTrigger:{trigger:"#scroll-track",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:n=>{this.updateHUDStatus(n.progress)}}}),this.timeline.to(t.position,{x:-44,y:6,z:36,duration:2.5,ease:"power2.inOut"},0).to(e,{x:-34,y:2.5,z:24,duration:2.5,ease:"power2.inOut"},0).to({},{duration:18,onUpdate:()=>{if(!this.isManualExploded){const n=this.timeline.progress();let i=0;n<=.15?i=n/.15*.35:n<=.28?i=(1-(n-.15)/.13)*.35:i=0,this.buildingModel.updateExplosion(i)}}},0),this.timeline.to(t.position,{x:0,y:26.5,z:22,duration:2.5,ease:"power1.inOut"},2.5).to(e,{x:0,y:24,z:0,duration:2.5,ease:"power1.inOut"},2.5),this.timeline.to(t.position,{x:-3.5,y:25.8,z:12.5,duration:1.5,ease:"power2.inOut"},5).to(e,{x:-6,y:23.5,z:7.8,duration:1.5,ease:"power2.inOut"},5).to(t.position,{x:-9.5,y:25.8,z:7.8,duration:1.5,ease:"sine.inOut"},6.5).to(e,{x:-5.5,y:23.5,z:7.8,duration:1.5,ease:"sine.inOut"},6.5),this.timeline.to(t.position,{x:3.5,y:25.8,z:12,duration:1.5,ease:"power2.inOut"},8).to(e,{x:7.5,y:23.5,z:7,duration:1.5,ease:"power2.inOut"},8).to(t.position,{x:9.5,y:25.8,z:5,duration:1.5,ease:"sine.inOut"},9.5).to(e,{x:6.5,y:23.5,z:7,duration:1.5,ease:"sine.inOut"},9.5),this.timeline.to(t.position,{x:-2.5,y:25.8,z:-4,duration:1.5,ease:"power2.inOut"},11).to(e,{x:-6.5,y:23.5,z:-9.1,duration:1.5,ease:"power2.inOut"},11).to(t.position,{x:-9.8,y:25.8,z:-6.5,duration:1.5,ease:"sine.inOut"},12.5).to(e,{x:-6.5,y:23.5,z:-10.5,duration:1.5,ease:"sine.inOut"},12.5),this.timeline.to(t.position,{x:3.5,y:25.8,z:-3.5,duration:1,ease:"power2.inOut"},14).to(e,{x:6.5,y:23.5,z:-7,duration:1,ease:"power2.inOut"},14).to(t.position,{x:7.5,y:25.8,z:-8.5,duration:1,ease:"sine.inOut"},15).to(e,{x:6.5,y:23.5,z:-7.5,duration:1,ease:"sine.inOut"},15),this.timeline.to(t.position,{x:1,y:25.8,z:-10.5,duration:1,ease:"power2.inOut"},16).to(e,{x:1,y:24,z:-9,duration:1,ease:"power2.inOut"},16).to(t.position,{x:14,y:35,z:24,duration:1,ease:"power2.inOut"},17).to(e,{x:4,y:32,z:-4,duration:1,ease:"power2.inOut"},17)}updateHUDStatus(t){const e=document.getElementById("hud-structure-status"),n=document.getElementById("exploded-slider"),i=document.getElementById("exploded-val");if(!this.isManualExploded&&n&&i){const s=Math.round(Math.min(t*1.1,.6)*100);n.value=s,i.textContent=`${s}%`}e&&(t<.14?e.textContent="01 • EXCAVATOR (VAKU)":t<.28?e.textContent="02 • TOWER FACADE":t<.44?e.textContent="03 • DRAWING LOUNGE 360°":t<.6?e.textContent="04 • KITCHEN & DINING 360°":t<.76?e.textContent="05 • MASTER BEDROOM 360°":t<.88?e.textContent="06 • NAVY SPA BATHROOM 360°":e.textContent="07 • BALCONY & TOWER CRANE"),this.hotspotManager.updateHotspotVisibility(t)}}class TE{constructor(t,e,n,i){this.appScene=t,this.buildingModel=e,this.scrollAnim=n,this.hotspotManager=i,this.bindEvents()}bindEvents(){const t=document.getElementById("exploded-slider"),e=document.getElementById("exploded-val");t&&t.addEventListener("input",u=>{const _=parseFloat(u.target.value);e&&(e.textContent=`${Math.round(_)}%`),this.scrollAnim.isManualExploded=!0,this.buildingModel.updateExplosion(_/100)});const n=document.getElementById("btn-xray");n&&n.addEventListener("click",()=>{const u=!n.classList.contains("active");n.classList.toggle("active",u),this.buildingModel.setXrayMode(u)});const i=document.getElementById("btn-lighting");i&&i.addEventListener("click",()=>{const u=this.appScene.toggleNightMode();i.classList.toggle("active",u)});const s=document.getElementById("btn-hotspots");s&&s.addEventListener("click",()=>{const u=s.classList.contains("active");s.classList.toggle("active",!u),this.hotspotManager.toggleHotspots(!u)});const a=document.getElementById("btn-autorotate");a&&a.addEventListener("click",()=>{const u=this.appScene.toggleOrbitControls();a.classList.toggle("active",u)});const o=document.querySelectorAll(".floor-btn");o.forEach(u=>{u.addEventListener("click",()=>{o.forEach(g=>g.classList.remove("active")),u.classList.add("active");const _=u.dataset.layer;this.buildingModel.isolateLayer(_)})});const l=document.getElementById("btn-inspect-drawer"),c=document.getElementById("btn-close-drawer"),h=document.getElementById("spec-drawer"),d=document.getElementById("drawer-overlay");l&&h&&l.addEventListener("click",()=>{h.classList.add("open"),h.setAttribute("aria-hidden","false")});const f=()=>{h&&(h.classList.remove("open"),h.setAttribute("aria-hidden","true"))};c&&c.addEventListener("click",f),d&&d.addEventListener("click",f)}}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("webgl-canvas"),t=document.getElementById("hotspot-container"),e=document.getElementById("hud-fps");if(!r||!t)return;const n=new Fy(r),i=new By(n.scene),s=new ky(t,n.camera),a=new EE(n,i,s);new TE(n,i,a,s);function o(){requestAnimationFrame(o),n.render(l=>{e&&(e.textContent=l)}),s.updatePositions()}o()});
