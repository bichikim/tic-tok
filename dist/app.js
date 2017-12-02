module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.Run=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this._myList=this._getRunners.apply(this,[e].concat(r))}return r(t,[{key:"then",value:function(t){this._then=t}},{key:"catch",value:function(t){this._then=t}},{key:"start",value:function(){this._start()}},{key:"_getRunners",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.map(function(t){return t.apply(void 0,n)})}},{key:"_resolve",value:function(t){var e=this._then;"function"==typeof e&&e(t)}},{key:"_reject",value:function(t){var e=this._catch;"function"==typeof e&&e(t)}},{key:"_start",value:function(){var t=this;Promise.all(this._list).then(function(e){t._resolve(e)}).catch(function(e){t._reject(e)})}},{key:"_list",get:function(){return this._myList},set:function(t){this._myList=t}}]),t}()},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Step=e.Loop=e.Run=void 0;var r=n(3),o=n(0),i=n(4);e.Run=o.Run,e.Loop=r.Loop,e.Step=i.Step},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Loop=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0);e.Loop=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return u._delay=0,u._stop=-1,u}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Run),r(e,[{key:"delay",value:function(t){this._delay=t}},{key:"stop",value:function(t){this.stopAfter(0,t)}},{key:"stopAfter",value:function(t,e){this._stopThen=e,this._stop=t}},{key:"_start",value:function(){var t=this;this._stop>0&&(this._stop-=1),Promise.all(this._list).then(function(e){setTimeout(function(){if(t._resolve(e),0!==t._stop)t._start();else{var n=t._stopThen;"function"==typeof n&&(t._stop=-1,t._stopThen=null,n())}},t._delay)}).catch(function(e){t._reject(e)})}}]),e}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Step=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0);e.Step=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return u._delay=0,u._runningFlag=!0,u._nextList=[],u}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Run),r(e,[{key:"delay",value:function(t){this._delay=t}},{key:"add",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.addAll.apply(this,[[t]].concat(n))}},{key:"addAll",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this._getRunners.apply(this,[t].concat(n));this._runningFlag?this._nextList.push(o):(this._runningFlag=!0,this._list=o,this._start())}},{key:"_start",value:function(){var t=this;Promise.all(this._list).then(function(e){setTimeout(function(){t._resolve(e),t._nextList.length<1?t._runningFlag=!1:(t._list=t._nextList.pop(),t._start())},t._delay)}).catch(function(e){t._reject(e)})}}]),e}()}]);