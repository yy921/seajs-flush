!function(n){function t(n){return e(n)||u(n)}function e(t){if(s.test(t.uri))return!0;for(var u in t._waitings)if(e(n.cache[u]))return!0;return!1}function u(n){return!i&&n.status===r.STATUS.SAVED}function o(n){for(var t,e=[],u={},o=0,r=n.length;r>o;o++)t=n[o],t&&!u[t]&&(u[t]=!0,e.push(t));return e}var r=n.Module,a=r.prototype.load,c=n.data,f=c.flushStack=[],i=!1;r.prototype.load=function(){var n=this;t(n)?a.call(n):f.push(n)},n.use=function(t,e){return r.use(t,e,c.cwd+"_use_"+c.cid()),n},n.flush=function(){var n=f.length;if(0!==n){for(var t=f.splice(0,n),e=[],u=0;n>u;u++)e=e.concat(t[u].resolve());e=o(e);var i=r.get(c.cwd+"_flush_"+c.cid(),e);i.load=a,i.callback=function(){for(var e=0;n>e;e++)t[e].onload();delete i.callback},r.preload(function(){i.load()})}},n.on("request",function(n){var t=n.onRequest;n.onRequest=function(){i=!0,t()}}),n.on("requested",function(){i=!1,n.flush()}),n.on("exec",function(){n.flush()});var s=/\/_preload_\d+$/;define("seajs-flush",[],{})}(seajs);