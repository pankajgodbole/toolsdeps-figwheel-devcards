// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10161 = arguments.length;
switch (G__10161) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10162 = (function (f,blockable,meta10163){
this.f = f;
this.blockable = blockable;
this.meta10163 = meta10163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10164,meta10163__$1){
var self__ = this;
var _10164__$1 = this;
return (new cljs.core.async.t_cljs$core$async10162(self__.f,self__.blockable,meta10163__$1));
});

cljs.core.async.t_cljs$core$async10162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10164){
var self__ = this;
var _10164__$1 = this;
return self__.meta10163;
});

cljs.core.async.t_cljs$core$async10162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10163","meta10163",1022288736,null)], null);
});

cljs.core.async.t_cljs$core$async10162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10162";

cljs.core.async.t_cljs$core$async10162.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10162");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10162.
 */
cljs.core.async.__GT_t_cljs$core$async10162 = (function cljs$core$async$__GT_t_cljs$core$async10162(f__$1,blockable__$1,meta10163){
return (new cljs.core.async.t_cljs$core$async10162(f__$1,blockable__$1,meta10163));
});

}

return (new cljs.core.async.t_cljs$core$async10162(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10168 = arguments.length;
switch (G__10168) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10171 = arguments.length;
switch (G__10171) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10174 = arguments.length;
switch (G__10174) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10176 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10176);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10176,ret){
return (function (){
return fn1.call(null,val_10176);
});})(val_10176,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10178 = arguments.length;
switch (G__10178) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___10180 = n;
var x_10181 = (0);
while(true){
if((x_10181 < n__4518__auto___10180)){
(a[x_10181] = (0));

var G__10182 = (x_10181 + (1));
x_10181 = G__10182;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10183 = (i + (1));
i = G__10183;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10184 = (function (flag,meta10185){
this.flag = flag;
this.meta10185 = meta10185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10186,meta10185__$1){
var self__ = this;
var _10186__$1 = this;
return (new cljs.core.async.t_cljs$core$async10184(self__.flag,meta10185__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10186){
var self__ = this;
var _10186__$1 = this;
return self__.meta10185;
});})(flag))
;

cljs.core.async.t_cljs$core$async10184.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10184.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10185","meta10185",1979344862,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10184";

cljs.core.async.t_cljs$core$async10184.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10184");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10184.
 */
cljs.core.async.__GT_t_cljs$core$async10184 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10184(flag__$1,meta10185){
return (new cljs.core.async.t_cljs$core$async10184(flag__$1,meta10185));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10184(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10187 = (function (flag,cb,meta10188){
this.flag = flag;
this.cb = cb;
this.meta10188 = meta10188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10189,meta10188__$1){
var self__ = this;
var _10189__$1 = this;
return (new cljs.core.async.t_cljs$core$async10187(self__.flag,self__.cb,meta10188__$1));
});

cljs.core.async.t_cljs$core$async10187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10189){
var self__ = this;
var _10189__$1 = this;
return self__.meta10188;
});

cljs.core.async.t_cljs$core$async10187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10188","meta10188",1294573667,null)], null);
});

cljs.core.async.t_cljs$core$async10187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10187";

cljs.core.async.t_cljs$core$async10187.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10187");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10187.
 */
cljs.core.async.__GT_t_cljs$core$async10187 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10187(flag__$1,cb__$1,meta10188){
return (new cljs.core.async.t_cljs$core$async10187(flag__$1,cb__$1,meta10188));
});

}

return (new cljs.core.async.t_cljs$core$async10187(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10190_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10190_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10191_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10191_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10192 = (i + (1));
i = G__10192;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10198 = arguments.length;
var i__4642__auto___10199 = (0);
while(true){
if((i__4642__auto___10199 < len__4641__auto___10198)){
args__4647__auto__.push((arguments[i__4642__auto___10199]));

var G__10200 = (i__4642__auto___10199 + (1));
i__4642__auto___10199 = G__10200;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10195){
var map__10196 = p__10195;
var map__10196__$1 = (((((!((map__10196 == null))))?(((((map__10196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10196):map__10196);
var opts = map__10196__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10193){
var G__10194 = cljs.core.first.call(null,seq10193);
var seq10193__$1 = cljs.core.next.call(null,seq10193);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10194,seq10193__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10202 = arguments.length;
switch (G__10202) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10101__auto___10248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___10248){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___10248){
return (function (state_10226){
var state_val_10227 = (state_10226[(1)]);
if((state_val_10227 === (7))){
var inst_10222 = (state_10226[(2)]);
var state_10226__$1 = state_10226;
var statearr_10228_10249 = state_10226__$1;
(statearr_10228_10249[(2)] = inst_10222);

(statearr_10228_10249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (1))){
var state_10226__$1 = state_10226;
var statearr_10229_10250 = state_10226__$1;
(statearr_10229_10250[(2)] = null);

(statearr_10229_10250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (4))){
var inst_10205 = (state_10226[(7)]);
var inst_10205__$1 = (state_10226[(2)]);
var inst_10206 = (inst_10205__$1 == null);
var state_10226__$1 = (function (){var statearr_10230 = state_10226;
(statearr_10230[(7)] = inst_10205__$1);

return statearr_10230;
})();
if(cljs.core.truth_(inst_10206)){
var statearr_10231_10251 = state_10226__$1;
(statearr_10231_10251[(1)] = (5));

} else {
var statearr_10232_10252 = state_10226__$1;
(statearr_10232_10252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (13))){
var state_10226__$1 = state_10226;
var statearr_10233_10253 = state_10226__$1;
(statearr_10233_10253[(2)] = null);

(statearr_10233_10253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (6))){
var inst_10205 = (state_10226[(7)]);
var state_10226__$1 = state_10226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10226__$1,(11),to,inst_10205);
} else {
if((state_val_10227 === (3))){
var inst_10224 = (state_10226[(2)]);
var state_10226__$1 = state_10226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10226__$1,inst_10224);
} else {
if((state_val_10227 === (12))){
var state_10226__$1 = state_10226;
var statearr_10234_10254 = state_10226__$1;
(statearr_10234_10254[(2)] = null);

(statearr_10234_10254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (2))){
var state_10226__$1 = state_10226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10226__$1,(4),from);
} else {
if((state_val_10227 === (11))){
var inst_10215 = (state_10226[(2)]);
var state_10226__$1 = state_10226;
if(cljs.core.truth_(inst_10215)){
var statearr_10235_10255 = state_10226__$1;
(statearr_10235_10255[(1)] = (12));

} else {
var statearr_10236_10256 = state_10226__$1;
(statearr_10236_10256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (9))){
var state_10226__$1 = state_10226;
var statearr_10237_10257 = state_10226__$1;
(statearr_10237_10257[(2)] = null);

(statearr_10237_10257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (5))){
var state_10226__$1 = state_10226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10238_10258 = state_10226__$1;
(statearr_10238_10258[(1)] = (8));

} else {
var statearr_10239_10259 = state_10226__$1;
(statearr_10239_10259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (14))){
var inst_10220 = (state_10226[(2)]);
var state_10226__$1 = state_10226;
var statearr_10240_10260 = state_10226__$1;
(statearr_10240_10260[(2)] = inst_10220);

(statearr_10240_10260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (10))){
var inst_10212 = (state_10226[(2)]);
var state_10226__$1 = state_10226;
var statearr_10241_10261 = state_10226__$1;
(statearr_10241_10261[(2)] = inst_10212);

(statearr_10241_10261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10227 === (8))){
var inst_10209 = cljs.core.async.close_BANG_.call(null,to);
var state_10226__$1 = state_10226;
var statearr_10242_10262 = state_10226__$1;
(statearr_10242_10262[(2)] = inst_10209);

(statearr_10242_10262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___10248))
;
return ((function (switch__10006__auto__,c__10101__auto___10248){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_10243 = [null,null,null,null,null,null,null,null];
(statearr_10243[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_10243[(1)] = (1));

return statearr_10243;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_10226){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10244){if((e10244 instanceof Object)){
var ex__10010__auto__ = e10244;
var statearr_10245_10263 = state_10226;
(statearr_10245_10263[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10264 = state_10226;
state_10226 = G__10264;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_10226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_10226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___10248))
})();
var state__10103__auto__ = (function (){var statearr_10246 = f__10102__auto__.call(null);
(statearr_10246[(6)] = c__10101__auto___10248);

return statearr_10246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___10248))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10265){
var vec__10266 = p__10265;
var v = cljs.core.nth.call(null,vec__10266,(0),null);
var p = cljs.core.nth.call(null,vec__10266,(1),null);
var job = vec__10266;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10101__auto___10437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___10437,res,vec__10266,v,p,job,jobs,results){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___10437,res,vec__10266,v,p,job,jobs,results){
return (function (state_10273){
var state_val_10274 = (state_10273[(1)]);
if((state_val_10274 === (1))){
var state_10273__$1 = state_10273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10273__$1,(2),res,v);
} else {
if((state_val_10274 === (2))){
var inst_10270 = (state_10273[(2)]);
var inst_10271 = cljs.core.async.close_BANG_.call(null,res);
var state_10273__$1 = (function (){var statearr_10275 = state_10273;
(statearr_10275[(7)] = inst_10270);

return statearr_10275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10273__$1,inst_10271);
} else {
return null;
}
}
});})(c__10101__auto___10437,res,vec__10266,v,p,job,jobs,results))
;
return ((function (switch__10006__auto__,c__10101__auto___10437,res,vec__10266,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0 = (function (){
var statearr_10276 = [null,null,null,null,null,null,null,null];
(statearr_10276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__);

(statearr_10276[(1)] = (1));

return statearr_10276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1 = (function (state_10273){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10277){if((e10277 instanceof Object)){
var ex__10010__auto__ = e10277;
var statearr_10278_10438 = state_10273;
(statearr_10278_10438[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10439 = state_10273;
state_10273 = G__10439;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = function(state_10273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1.call(this,state_10273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___10437,res,vec__10266,v,p,job,jobs,results))
})();
var state__10103__auto__ = (function (){var statearr_10279 = f__10102__auto__.call(null);
(statearr_10279[(6)] = c__10101__auto___10437);

return statearr_10279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___10437,res,vec__10266,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10280){
var vec__10281 = p__10280;
var v = cljs.core.nth.call(null,vec__10281,(0),null);
var p = cljs.core.nth.call(null,vec__10281,(1),null);
var job = vec__10281;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___10440 = n;
var __10441 = (0);
while(true){
if((__10441 < n__4518__auto___10440)){
var G__10284_10442 = type;
var G__10284_10443__$1 = (((G__10284_10442 instanceof cljs.core.Keyword))?G__10284_10442.fqn:null);
switch (G__10284_10443__$1) {
case "compute":
var c__10101__auto___10445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10441,c__10101__auto___10445,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (__10441,c__10101__auto___10445,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async){
return (function (state_10297){
var state_val_10298 = (state_10297[(1)]);
if((state_val_10298 === (1))){
var state_10297__$1 = state_10297;
var statearr_10299_10446 = state_10297__$1;
(statearr_10299_10446[(2)] = null);

(statearr_10299_10446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (2))){
var state_10297__$1 = state_10297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10297__$1,(4),jobs);
} else {
if((state_val_10298 === (3))){
var inst_10295 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10297__$1,inst_10295);
} else {
if((state_val_10298 === (4))){
var inst_10287 = (state_10297[(2)]);
var inst_10288 = process.call(null,inst_10287);
var state_10297__$1 = state_10297;
if(cljs.core.truth_(inst_10288)){
var statearr_10300_10447 = state_10297__$1;
(statearr_10300_10447[(1)] = (5));

} else {
var statearr_10301_10448 = state_10297__$1;
(statearr_10301_10448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (5))){
var state_10297__$1 = state_10297;
var statearr_10302_10449 = state_10297__$1;
(statearr_10302_10449[(2)] = null);

(statearr_10302_10449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (6))){
var state_10297__$1 = state_10297;
var statearr_10303_10450 = state_10297__$1;
(statearr_10303_10450[(2)] = null);

(statearr_10303_10450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10298 === (7))){
var inst_10293 = (state_10297[(2)]);
var state_10297__$1 = state_10297;
var statearr_10304_10451 = state_10297__$1;
(statearr_10304_10451[(2)] = inst_10293);

(statearr_10304_10451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10441,c__10101__auto___10445,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async))
;
return ((function (__10441,switch__10006__auto__,c__10101__auto___10445,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0 = (function (){
var statearr_10305 = [null,null,null,null,null,null,null];
(statearr_10305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__);

(statearr_10305[(1)] = (1));

return statearr_10305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1 = (function (state_10297){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10306){if((e10306 instanceof Object)){
var ex__10010__auto__ = e10306;
var statearr_10307_10452 = state_10297;
(statearr_10307_10452[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10453 = state_10297;
state_10297 = G__10453;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = function(state_10297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1.call(this,state_10297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__;
})()
;})(__10441,switch__10006__auto__,c__10101__auto___10445,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async))
})();
var state__10103__auto__ = (function (){var statearr_10308 = f__10102__auto__.call(null);
(statearr_10308[(6)] = c__10101__auto___10445);

return statearr_10308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(__10441,c__10101__auto___10445,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async))
);


break;
case "async":
var c__10101__auto___10454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10441,c__10101__auto___10454,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (__10441,c__10101__auto___10454,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async){
return (function (state_10321){
var state_val_10322 = (state_10321[(1)]);
if((state_val_10322 === (1))){
var state_10321__$1 = state_10321;
var statearr_10323_10455 = state_10321__$1;
(statearr_10323_10455[(2)] = null);

(statearr_10323_10455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10322 === (2))){
var state_10321__$1 = state_10321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10321__$1,(4),jobs);
} else {
if((state_val_10322 === (3))){
var inst_10319 = (state_10321[(2)]);
var state_10321__$1 = state_10321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10321__$1,inst_10319);
} else {
if((state_val_10322 === (4))){
var inst_10311 = (state_10321[(2)]);
var inst_10312 = async.call(null,inst_10311);
var state_10321__$1 = state_10321;
if(cljs.core.truth_(inst_10312)){
var statearr_10324_10456 = state_10321__$1;
(statearr_10324_10456[(1)] = (5));

} else {
var statearr_10325_10457 = state_10321__$1;
(statearr_10325_10457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10322 === (5))){
var state_10321__$1 = state_10321;
var statearr_10326_10458 = state_10321__$1;
(statearr_10326_10458[(2)] = null);

(statearr_10326_10458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10322 === (6))){
var state_10321__$1 = state_10321;
var statearr_10327_10459 = state_10321__$1;
(statearr_10327_10459[(2)] = null);

(statearr_10327_10459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10322 === (7))){
var inst_10317 = (state_10321[(2)]);
var state_10321__$1 = state_10321;
var statearr_10328_10460 = state_10321__$1;
(statearr_10328_10460[(2)] = inst_10317);

(statearr_10328_10460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10441,c__10101__auto___10454,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async))
;
return ((function (__10441,switch__10006__auto__,c__10101__auto___10454,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0 = (function (){
var statearr_10329 = [null,null,null,null,null,null,null];
(statearr_10329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__);

(statearr_10329[(1)] = (1));

return statearr_10329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1 = (function (state_10321){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10330){if((e10330 instanceof Object)){
var ex__10010__auto__ = e10330;
var statearr_10331_10461 = state_10321;
(statearr_10331_10461[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10462 = state_10321;
state_10321 = G__10462;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = function(state_10321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1.call(this,state_10321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__;
})()
;})(__10441,switch__10006__auto__,c__10101__auto___10454,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async))
})();
var state__10103__auto__ = (function (){var statearr_10332 = f__10102__auto__.call(null);
(statearr_10332[(6)] = c__10101__auto___10454);

return statearr_10332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(__10441,c__10101__auto___10454,G__10284_10442,G__10284_10443__$1,n__4518__auto___10440,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10284_10443__$1)].join('')));

}

var G__10463 = (__10441 + (1));
__10441 = G__10463;
continue;
} else {
}
break;
}

var c__10101__auto___10464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___10464,jobs,results,process,async){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___10464,jobs,results,process,async){
return (function (state_10354){
var state_val_10355 = (state_10354[(1)]);
if((state_val_10355 === (7))){
var inst_10350 = (state_10354[(2)]);
var state_10354__$1 = state_10354;
var statearr_10356_10465 = state_10354__$1;
(statearr_10356_10465[(2)] = inst_10350);

(statearr_10356_10465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10355 === (1))){
var state_10354__$1 = state_10354;
var statearr_10357_10466 = state_10354__$1;
(statearr_10357_10466[(2)] = null);

(statearr_10357_10466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10355 === (4))){
var inst_10335 = (state_10354[(7)]);
var inst_10335__$1 = (state_10354[(2)]);
var inst_10336 = (inst_10335__$1 == null);
var state_10354__$1 = (function (){var statearr_10358 = state_10354;
(statearr_10358[(7)] = inst_10335__$1);

return statearr_10358;
})();
if(cljs.core.truth_(inst_10336)){
var statearr_10359_10467 = state_10354__$1;
(statearr_10359_10467[(1)] = (5));

} else {
var statearr_10360_10468 = state_10354__$1;
(statearr_10360_10468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10355 === (6))){
var inst_10335 = (state_10354[(7)]);
var inst_10340 = (state_10354[(8)]);
var inst_10340__$1 = cljs.core.async.chan.call(null,(1));
var inst_10341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10342 = [inst_10335,inst_10340__$1];
var inst_10343 = (new cljs.core.PersistentVector(null,2,(5),inst_10341,inst_10342,null));
var state_10354__$1 = (function (){var statearr_10361 = state_10354;
(statearr_10361[(8)] = inst_10340__$1);

return statearr_10361;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10354__$1,(8),jobs,inst_10343);
} else {
if((state_val_10355 === (3))){
var inst_10352 = (state_10354[(2)]);
var state_10354__$1 = state_10354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10354__$1,inst_10352);
} else {
if((state_val_10355 === (2))){
var state_10354__$1 = state_10354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10354__$1,(4),from);
} else {
if((state_val_10355 === (9))){
var inst_10347 = (state_10354[(2)]);
var state_10354__$1 = (function (){var statearr_10362 = state_10354;
(statearr_10362[(9)] = inst_10347);

return statearr_10362;
})();
var statearr_10363_10469 = state_10354__$1;
(statearr_10363_10469[(2)] = null);

(statearr_10363_10469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10355 === (5))){
var inst_10338 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10354__$1 = state_10354;
var statearr_10364_10470 = state_10354__$1;
(statearr_10364_10470[(2)] = inst_10338);

(statearr_10364_10470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10355 === (8))){
var inst_10340 = (state_10354[(8)]);
var inst_10345 = (state_10354[(2)]);
var state_10354__$1 = (function (){var statearr_10365 = state_10354;
(statearr_10365[(10)] = inst_10345);

return statearr_10365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10354__$1,(9),results,inst_10340);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___10464,jobs,results,process,async))
;
return ((function (switch__10006__auto__,c__10101__auto___10464,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0 = (function (){
var statearr_10366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__);

(statearr_10366[(1)] = (1));

return statearr_10366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1 = (function (state_10354){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10367){if((e10367 instanceof Object)){
var ex__10010__auto__ = e10367;
var statearr_10368_10471 = state_10354;
(statearr_10368_10471[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10472 = state_10354;
state_10354 = G__10472;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = function(state_10354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1.call(this,state_10354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___10464,jobs,results,process,async))
})();
var state__10103__auto__ = (function (){var statearr_10369 = f__10102__auto__.call(null);
(statearr_10369[(6)] = c__10101__auto___10464);

return statearr_10369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___10464,jobs,results,process,async))
);


var c__10101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto__,jobs,results,process,async){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto__,jobs,results,process,async){
return (function (state_10407){
var state_val_10408 = (state_10407[(1)]);
if((state_val_10408 === (7))){
var inst_10403 = (state_10407[(2)]);
var state_10407__$1 = state_10407;
var statearr_10409_10473 = state_10407__$1;
(statearr_10409_10473[(2)] = inst_10403);

(statearr_10409_10473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (20))){
var state_10407__$1 = state_10407;
var statearr_10410_10474 = state_10407__$1;
(statearr_10410_10474[(2)] = null);

(statearr_10410_10474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (1))){
var state_10407__$1 = state_10407;
var statearr_10411_10475 = state_10407__$1;
(statearr_10411_10475[(2)] = null);

(statearr_10411_10475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (4))){
var inst_10372 = (state_10407[(7)]);
var inst_10372__$1 = (state_10407[(2)]);
var inst_10373 = (inst_10372__$1 == null);
var state_10407__$1 = (function (){var statearr_10412 = state_10407;
(statearr_10412[(7)] = inst_10372__$1);

return statearr_10412;
})();
if(cljs.core.truth_(inst_10373)){
var statearr_10413_10476 = state_10407__$1;
(statearr_10413_10476[(1)] = (5));

} else {
var statearr_10414_10477 = state_10407__$1;
(statearr_10414_10477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (15))){
var inst_10385 = (state_10407[(8)]);
var state_10407__$1 = state_10407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10407__$1,(18),to,inst_10385);
} else {
if((state_val_10408 === (21))){
var inst_10398 = (state_10407[(2)]);
var state_10407__$1 = state_10407;
var statearr_10415_10478 = state_10407__$1;
(statearr_10415_10478[(2)] = inst_10398);

(statearr_10415_10478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (13))){
var inst_10400 = (state_10407[(2)]);
var state_10407__$1 = (function (){var statearr_10416 = state_10407;
(statearr_10416[(9)] = inst_10400);

return statearr_10416;
})();
var statearr_10417_10479 = state_10407__$1;
(statearr_10417_10479[(2)] = null);

(statearr_10417_10479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (6))){
var inst_10372 = (state_10407[(7)]);
var state_10407__$1 = state_10407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10407__$1,(11),inst_10372);
} else {
if((state_val_10408 === (17))){
var inst_10393 = (state_10407[(2)]);
var state_10407__$1 = state_10407;
if(cljs.core.truth_(inst_10393)){
var statearr_10418_10480 = state_10407__$1;
(statearr_10418_10480[(1)] = (19));

} else {
var statearr_10419_10481 = state_10407__$1;
(statearr_10419_10481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (3))){
var inst_10405 = (state_10407[(2)]);
var state_10407__$1 = state_10407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10407__$1,inst_10405);
} else {
if((state_val_10408 === (12))){
var inst_10382 = (state_10407[(10)]);
var state_10407__$1 = state_10407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10407__$1,(14),inst_10382);
} else {
if((state_val_10408 === (2))){
var state_10407__$1 = state_10407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10407__$1,(4),results);
} else {
if((state_val_10408 === (19))){
var state_10407__$1 = state_10407;
var statearr_10420_10482 = state_10407__$1;
(statearr_10420_10482[(2)] = null);

(statearr_10420_10482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (11))){
var inst_10382 = (state_10407[(2)]);
var state_10407__$1 = (function (){var statearr_10421 = state_10407;
(statearr_10421[(10)] = inst_10382);

return statearr_10421;
})();
var statearr_10422_10483 = state_10407__$1;
(statearr_10422_10483[(2)] = null);

(statearr_10422_10483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (9))){
var state_10407__$1 = state_10407;
var statearr_10423_10484 = state_10407__$1;
(statearr_10423_10484[(2)] = null);

(statearr_10423_10484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (5))){
var state_10407__$1 = state_10407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10424_10485 = state_10407__$1;
(statearr_10424_10485[(1)] = (8));

} else {
var statearr_10425_10486 = state_10407__$1;
(statearr_10425_10486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (14))){
var inst_10387 = (state_10407[(11)]);
var inst_10385 = (state_10407[(8)]);
var inst_10385__$1 = (state_10407[(2)]);
var inst_10386 = (inst_10385__$1 == null);
var inst_10387__$1 = cljs.core.not.call(null,inst_10386);
var state_10407__$1 = (function (){var statearr_10426 = state_10407;
(statearr_10426[(11)] = inst_10387__$1);

(statearr_10426[(8)] = inst_10385__$1);

return statearr_10426;
})();
if(inst_10387__$1){
var statearr_10427_10487 = state_10407__$1;
(statearr_10427_10487[(1)] = (15));

} else {
var statearr_10428_10488 = state_10407__$1;
(statearr_10428_10488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (16))){
var inst_10387 = (state_10407[(11)]);
var state_10407__$1 = state_10407;
var statearr_10429_10489 = state_10407__$1;
(statearr_10429_10489[(2)] = inst_10387);

(statearr_10429_10489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (10))){
var inst_10379 = (state_10407[(2)]);
var state_10407__$1 = state_10407;
var statearr_10430_10490 = state_10407__$1;
(statearr_10430_10490[(2)] = inst_10379);

(statearr_10430_10490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (18))){
var inst_10390 = (state_10407[(2)]);
var state_10407__$1 = state_10407;
var statearr_10431_10491 = state_10407__$1;
(statearr_10431_10491[(2)] = inst_10390);

(statearr_10431_10491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10408 === (8))){
var inst_10376 = cljs.core.async.close_BANG_.call(null,to);
var state_10407__$1 = state_10407;
var statearr_10432_10492 = state_10407__$1;
(statearr_10432_10492[(2)] = inst_10376);

(statearr_10432_10492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto__,jobs,results,process,async))
;
return ((function (switch__10006__auto__,c__10101__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0 = (function (){
var statearr_10433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__);

(statearr_10433[(1)] = (1));

return statearr_10433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1 = (function (state_10407){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10434){if((e10434 instanceof Object)){
var ex__10010__auto__ = e10434;
var statearr_10435_10493 = state_10407;
(statearr_10435_10493[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10494 = state_10407;
state_10407 = G__10494;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__ = function(state_10407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1.call(this,state_10407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto__,jobs,results,process,async))
})();
var state__10103__auto__ = (function (){var statearr_10436 = f__10102__auto__.call(null);
(statearr_10436[(6)] = c__10101__auto__);

return statearr_10436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto__,jobs,results,process,async))
);

return c__10101__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10496 = arguments.length;
switch (G__10496) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10499 = arguments.length;
switch (G__10499) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10502 = arguments.length;
switch (G__10502) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10101__auto___10551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___10551,tc,fc){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___10551,tc,fc){
return (function (state_10528){
var state_val_10529 = (state_10528[(1)]);
if((state_val_10529 === (7))){
var inst_10524 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10530_10552 = state_10528__$1;
(statearr_10530_10552[(2)] = inst_10524);

(statearr_10530_10552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (1))){
var state_10528__$1 = state_10528;
var statearr_10531_10553 = state_10528__$1;
(statearr_10531_10553[(2)] = null);

(statearr_10531_10553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (4))){
var inst_10505 = (state_10528[(7)]);
var inst_10505__$1 = (state_10528[(2)]);
var inst_10506 = (inst_10505__$1 == null);
var state_10528__$1 = (function (){var statearr_10532 = state_10528;
(statearr_10532[(7)] = inst_10505__$1);

return statearr_10532;
})();
if(cljs.core.truth_(inst_10506)){
var statearr_10533_10554 = state_10528__$1;
(statearr_10533_10554[(1)] = (5));

} else {
var statearr_10534_10555 = state_10528__$1;
(statearr_10534_10555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (13))){
var state_10528__$1 = state_10528;
var statearr_10535_10556 = state_10528__$1;
(statearr_10535_10556[(2)] = null);

(statearr_10535_10556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (6))){
var inst_10505 = (state_10528[(7)]);
var inst_10511 = p.call(null,inst_10505);
var state_10528__$1 = state_10528;
if(cljs.core.truth_(inst_10511)){
var statearr_10536_10557 = state_10528__$1;
(statearr_10536_10557[(1)] = (9));

} else {
var statearr_10537_10558 = state_10528__$1;
(statearr_10537_10558[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (3))){
var inst_10526 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10528__$1,inst_10526);
} else {
if((state_val_10529 === (12))){
var state_10528__$1 = state_10528;
var statearr_10538_10559 = state_10528__$1;
(statearr_10538_10559[(2)] = null);

(statearr_10538_10559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (2))){
var state_10528__$1 = state_10528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10528__$1,(4),ch);
} else {
if((state_val_10529 === (11))){
var inst_10505 = (state_10528[(7)]);
var inst_10515 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10528__$1,(8),inst_10515,inst_10505);
} else {
if((state_val_10529 === (9))){
var state_10528__$1 = state_10528;
var statearr_10539_10560 = state_10528__$1;
(statearr_10539_10560[(2)] = tc);

(statearr_10539_10560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (5))){
var inst_10508 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10509 = cljs.core.async.close_BANG_.call(null,fc);
var state_10528__$1 = (function (){var statearr_10540 = state_10528;
(statearr_10540[(8)] = inst_10508);

return statearr_10540;
})();
var statearr_10541_10561 = state_10528__$1;
(statearr_10541_10561[(2)] = inst_10509);

(statearr_10541_10561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (14))){
var inst_10522 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
var statearr_10542_10562 = state_10528__$1;
(statearr_10542_10562[(2)] = inst_10522);

(statearr_10542_10562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (10))){
var state_10528__$1 = state_10528;
var statearr_10543_10563 = state_10528__$1;
(statearr_10543_10563[(2)] = fc);

(statearr_10543_10563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10529 === (8))){
var inst_10517 = (state_10528[(2)]);
var state_10528__$1 = state_10528;
if(cljs.core.truth_(inst_10517)){
var statearr_10544_10564 = state_10528__$1;
(statearr_10544_10564[(1)] = (12));

} else {
var statearr_10545_10565 = state_10528__$1;
(statearr_10545_10565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___10551,tc,fc))
;
return ((function (switch__10006__auto__,c__10101__auto___10551,tc,fc){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_10546 = [null,null,null,null,null,null,null,null,null];
(statearr_10546[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_10546[(1)] = (1));

return statearr_10546;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_10528){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10547){if((e10547 instanceof Object)){
var ex__10010__auto__ = e10547;
var statearr_10548_10566 = state_10528;
(statearr_10548_10566[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10567 = state_10528;
state_10528 = G__10567;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_10528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_10528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___10551,tc,fc))
})();
var state__10103__auto__ = (function (){var statearr_10549 = f__10102__auto__.call(null);
(statearr_10549[(6)] = c__10101__auto___10551);

return statearr_10549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___10551,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto__){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto__){
return (function (state_10588){
var state_val_10589 = (state_10588[(1)]);
if((state_val_10589 === (7))){
var inst_10584 = (state_10588[(2)]);
var state_10588__$1 = state_10588;
var statearr_10590_10608 = state_10588__$1;
(statearr_10590_10608[(2)] = inst_10584);

(statearr_10590_10608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (1))){
var inst_10568 = init;
var state_10588__$1 = (function (){var statearr_10591 = state_10588;
(statearr_10591[(7)] = inst_10568);

return statearr_10591;
})();
var statearr_10592_10609 = state_10588__$1;
(statearr_10592_10609[(2)] = null);

(statearr_10592_10609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (4))){
var inst_10571 = (state_10588[(8)]);
var inst_10571__$1 = (state_10588[(2)]);
var inst_10572 = (inst_10571__$1 == null);
var state_10588__$1 = (function (){var statearr_10593 = state_10588;
(statearr_10593[(8)] = inst_10571__$1);

return statearr_10593;
})();
if(cljs.core.truth_(inst_10572)){
var statearr_10594_10610 = state_10588__$1;
(statearr_10594_10610[(1)] = (5));

} else {
var statearr_10595_10611 = state_10588__$1;
(statearr_10595_10611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (6))){
var inst_10571 = (state_10588[(8)]);
var inst_10575 = (state_10588[(9)]);
var inst_10568 = (state_10588[(7)]);
var inst_10575__$1 = f.call(null,inst_10568,inst_10571);
var inst_10576 = cljs.core.reduced_QMARK_.call(null,inst_10575__$1);
var state_10588__$1 = (function (){var statearr_10596 = state_10588;
(statearr_10596[(9)] = inst_10575__$1);

return statearr_10596;
})();
if(inst_10576){
var statearr_10597_10612 = state_10588__$1;
(statearr_10597_10612[(1)] = (8));

} else {
var statearr_10598_10613 = state_10588__$1;
(statearr_10598_10613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (3))){
var inst_10586 = (state_10588[(2)]);
var state_10588__$1 = state_10588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10588__$1,inst_10586);
} else {
if((state_val_10589 === (2))){
var state_10588__$1 = state_10588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10588__$1,(4),ch);
} else {
if((state_val_10589 === (9))){
var inst_10575 = (state_10588[(9)]);
var inst_10568 = inst_10575;
var state_10588__$1 = (function (){var statearr_10599 = state_10588;
(statearr_10599[(7)] = inst_10568);

return statearr_10599;
})();
var statearr_10600_10614 = state_10588__$1;
(statearr_10600_10614[(2)] = null);

(statearr_10600_10614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (5))){
var inst_10568 = (state_10588[(7)]);
var state_10588__$1 = state_10588;
var statearr_10601_10615 = state_10588__$1;
(statearr_10601_10615[(2)] = inst_10568);

(statearr_10601_10615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (10))){
var inst_10582 = (state_10588[(2)]);
var state_10588__$1 = state_10588;
var statearr_10602_10616 = state_10588__$1;
(statearr_10602_10616[(2)] = inst_10582);

(statearr_10602_10616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (8))){
var inst_10575 = (state_10588[(9)]);
var inst_10578 = cljs.core.deref.call(null,inst_10575);
var state_10588__$1 = state_10588;
var statearr_10603_10617 = state_10588__$1;
(statearr_10603_10617[(2)] = inst_10578);

(statearr_10603_10617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto__))
;
return ((function (switch__10006__auto__,c__10101__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10007__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10007__auto____0 = (function (){
var statearr_10604 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10604[(0)] = cljs$core$async$reduce_$_state_machine__10007__auto__);

(statearr_10604[(1)] = (1));

return statearr_10604;
});
var cljs$core$async$reduce_$_state_machine__10007__auto____1 = (function (state_10588){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10605){if((e10605 instanceof Object)){
var ex__10010__auto__ = e10605;
var statearr_10606_10618 = state_10588;
(statearr_10606_10618[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10619 = state_10588;
state_10588 = G__10619;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10007__auto__ = function(state_10588){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10007__auto____1.call(this,state_10588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10007__auto____0;
cljs$core$async$reduce_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10007__auto____1;
return cljs$core$async$reduce_$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto__))
})();
var state__10103__auto__ = (function (){var statearr_10607 = f__10102__auto__.call(null);
(statearr_10607[(6)] = c__10101__auto__);

return statearr_10607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto__))
);

return c__10101__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto__,f__$1){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto__,f__$1){
return (function (state_10625){
var state_val_10626 = (state_10625[(1)]);
if((state_val_10626 === (1))){
var inst_10620 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10625__$1 = state_10625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10625__$1,(2),inst_10620);
} else {
if((state_val_10626 === (2))){
var inst_10622 = (state_10625[(2)]);
var inst_10623 = f__$1.call(null,inst_10622);
var state_10625__$1 = state_10625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10625__$1,inst_10623);
} else {
return null;
}
}
});})(c__10101__auto__,f__$1))
;
return ((function (switch__10006__auto__,c__10101__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10007__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10007__auto____0 = (function (){
var statearr_10627 = [null,null,null,null,null,null,null];
(statearr_10627[(0)] = cljs$core$async$transduce_$_state_machine__10007__auto__);

(statearr_10627[(1)] = (1));

return statearr_10627;
});
var cljs$core$async$transduce_$_state_machine__10007__auto____1 = (function (state_10625){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10628){if((e10628 instanceof Object)){
var ex__10010__auto__ = e10628;
var statearr_10629_10631 = state_10625;
(statearr_10629_10631[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10632 = state_10625;
state_10625 = G__10632;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10007__auto__ = function(state_10625){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10007__auto____1.call(this,state_10625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10007__auto____0;
cljs$core$async$transduce_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10007__auto____1;
return cljs$core$async$transduce_$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto__,f__$1))
})();
var state__10103__auto__ = (function (){var statearr_10630 = f__10102__auto__.call(null);
(statearr_10630[(6)] = c__10101__auto__);

return statearr_10630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto__,f__$1))
);

return c__10101__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10634 = arguments.length;
switch (G__10634) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto__){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto__){
return (function (state_10659){
var state_val_10660 = (state_10659[(1)]);
if((state_val_10660 === (7))){
var inst_10641 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
var statearr_10661_10682 = state_10659__$1;
(statearr_10661_10682[(2)] = inst_10641);

(statearr_10661_10682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (1))){
var inst_10635 = cljs.core.seq.call(null,coll);
var inst_10636 = inst_10635;
var state_10659__$1 = (function (){var statearr_10662 = state_10659;
(statearr_10662[(7)] = inst_10636);

return statearr_10662;
})();
var statearr_10663_10683 = state_10659__$1;
(statearr_10663_10683[(2)] = null);

(statearr_10663_10683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (4))){
var inst_10636 = (state_10659[(7)]);
var inst_10639 = cljs.core.first.call(null,inst_10636);
var state_10659__$1 = state_10659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10659__$1,(7),ch,inst_10639);
} else {
if((state_val_10660 === (13))){
var inst_10653 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
var statearr_10664_10684 = state_10659__$1;
(statearr_10664_10684[(2)] = inst_10653);

(statearr_10664_10684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (6))){
var inst_10644 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
if(cljs.core.truth_(inst_10644)){
var statearr_10665_10685 = state_10659__$1;
(statearr_10665_10685[(1)] = (8));

} else {
var statearr_10666_10686 = state_10659__$1;
(statearr_10666_10686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (3))){
var inst_10657 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10659__$1,inst_10657);
} else {
if((state_val_10660 === (12))){
var state_10659__$1 = state_10659;
var statearr_10667_10687 = state_10659__$1;
(statearr_10667_10687[(2)] = null);

(statearr_10667_10687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (2))){
var inst_10636 = (state_10659[(7)]);
var state_10659__$1 = state_10659;
if(cljs.core.truth_(inst_10636)){
var statearr_10668_10688 = state_10659__$1;
(statearr_10668_10688[(1)] = (4));

} else {
var statearr_10669_10689 = state_10659__$1;
(statearr_10669_10689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (11))){
var inst_10650 = cljs.core.async.close_BANG_.call(null,ch);
var state_10659__$1 = state_10659;
var statearr_10670_10690 = state_10659__$1;
(statearr_10670_10690[(2)] = inst_10650);

(statearr_10670_10690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (9))){
var state_10659__$1 = state_10659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10671_10691 = state_10659__$1;
(statearr_10671_10691[(1)] = (11));

} else {
var statearr_10672_10692 = state_10659__$1;
(statearr_10672_10692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (5))){
var inst_10636 = (state_10659[(7)]);
var state_10659__$1 = state_10659;
var statearr_10673_10693 = state_10659__$1;
(statearr_10673_10693[(2)] = inst_10636);

(statearr_10673_10693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (10))){
var inst_10655 = (state_10659[(2)]);
var state_10659__$1 = state_10659;
var statearr_10674_10694 = state_10659__$1;
(statearr_10674_10694[(2)] = inst_10655);

(statearr_10674_10694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10660 === (8))){
var inst_10636 = (state_10659[(7)]);
var inst_10646 = cljs.core.next.call(null,inst_10636);
var inst_10636__$1 = inst_10646;
var state_10659__$1 = (function (){var statearr_10675 = state_10659;
(statearr_10675[(7)] = inst_10636__$1);

return statearr_10675;
})();
var statearr_10676_10695 = state_10659__$1;
(statearr_10676_10695[(2)] = null);

(statearr_10676_10695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto__))
;
return ((function (switch__10006__auto__,c__10101__auto__){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_10677 = [null,null,null,null,null,null,null,null];
(statearr_10677[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_10677[(1)] = (1));

return statearr_10677;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_10659){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10678){if((e10678 instanceof Object)){
var ex__10010__auto__ = e10678;
var statearr_10679_10696 = state_10659;
(statearr_10679_10696[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10697 = state_10659;
state_10659 = G__10697;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_10659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_10659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto__))
})();
var state__10103__auto__ = (function (){var statearr_10680 = f__10102__auto__.call(null);
(statearr_10680[(6)] = c__10101__auto__);

return statearr_10680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto__))
);

return c__10101__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10698 = (function (ch,cs,meta10699){
this.ch = ch;
this.cs = cs;
this.meta10699 = meta10699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10700,meta10699__$1){
var self__ = this;
var _10700__$1 = this;
return (new cljs.core.async.t_cljs$core$async10698(self__.ch,self__.cs,meta10699__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10700){
var self__ = this;
var _10700__$1 = this;
return self__.meta10699;
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10699","meta10699",-1442677380,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10698";

cljs.core.async.t_cljs$core$async10698.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10698");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10698.
 */
cljs.core.async.__GT_t_cljs$core$async10698 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10698(ch__$1,cs__$1,meta10699){
return (new cljs.core.async.t_cljs$core$async10698(ch__$1,cs__$1,meta10699));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10698(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10101__auto___10920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___10920,cs,m,dchan,dctr,done){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___10920,cs,m,dchan,dctr,done){
return (function (state_10835){
var state_val_10836 = (state_10835[(1)]);
if((state_val_10836 === (7))){
var inst_10831 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10837_10921 = state_10835__$1;
(statearr_10837_10921[(2)] = inst_10831);

(statearr_10837_10921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (20))){
var inst_10734 = (state_10835[(7)]);
var inst_10746 = cljs.core.first.call(null,inst_10734);
var inst_10747 = cljs.core.nth.call(null,inst_10746,(0),null);
var inst_10748 = cljs.core.nth.call(null,inst_10746,(1),null);
var state_10835__$1 = (function (){var statearr_10838 = state_10835;
(statearr_10838[(8)] = inst_10747);

return statearr_10838;
})();
if(cljs.core.truth_(inst_10748)){
var statearr_10839_10922 = state_10835__$1;
(statearr_10839_10922[(1)] = (22));

} else {
var statearr_10840_10923 = state_10835__$1;
(statearr_10840_10923[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (27))){
var inst_10783 = (state_10835[(9)]);
var inst_10776 = (state_10835[(10)]);
var inst_10703 = (state_10835[(11)]);
var inst_10778 = (state_10835[(12)]);
var inst_10783__$1 = cljs.core._nth.call(null,inst_10776,inst_10778);
var inst_10784 = cljs.core.async.put_BANG_.call(null,inst_10783__$1,inst_10703,done);
var state_10835__$1 = (function (){var statearr_10841 = state_10835;
(statearr_10841[(9)] = inst_10783__$1);

return statearr_10841;
})();
if(cljs.core.truth_(inst_10784)){
var statearr_10842_10924 = state_10835__$1;
(statearr_10842_10924[(1)] = (30));

} else {
var statearr_10843_10925 = state_10835__$1;
(statearr_10843_10925[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (1))){
var state_10835__$1 = state_10835;
var statearr_10844_10926 = state_10835__$1;
(statearr_10844_10926[(2)] = null);

(statearr_10844_10926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (24))){
var inst_10734 = (state_10835[(7)]);
var inst_10753 = (state_10835[(2)]);
var inst_10754 = cljs.core.next.call(null,inst_10734);
var inst_10712 = inst_10754;
var inst_10713 = null;
var inst_10714 = (0);
var inst_10715 = (0);
var state_10835__$1 = (function (){var statearr_10845 = state_10835;
(statearr_10845[(13)] = inst_10713);

(statearr_10845[(14)] = inst_10753);

(statearr_10845[(15)] = inst_10715);

(statearr_10845[(16)] = inst_10712);

(statearr_10845[(17)] = inst_10714);

return statearr_10845;
})();
var statearr_10846_10927 = state_10835__$1;
(statearr_10846_10927[(2)] = null);

(statearr_10846_10927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (39))){
var state_10835__$1 = state_10835;
var statearr_10850_10928 = state_10835__$1;
(statearr_10850_10928[(2)] = null);

(statearr_10850_10928[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (4))){
var inst_10703 = (state_10835[(11)]);
var inst_10703__$1 = (state_10835[(2)]);
var inst_10704 = (inst_10703__$1 == null);
var state_10835__$1 = (function (){var statearr_10851 = state_10835;
(statearr_10851[(11)] = inst_10703__$1);

return statearr_10851;
})();
if(cljs.core.truth_(inst_10704)){
var statearr_10852_10929 = state_10835__$1;
(statearr_10852_10929[(1)] = (5));

} else {
var statearr_10853_10930 = state_10835__$1;
(statearr_10853_10930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (15))){
var inst_10713 = (state_10835[(13)]);
var inst_10715 = (state_10835[(15)]);
var inst_10712 = (state_10835[(16)]);
var inst_10714 = (state_10835[(17)]);
var inst_10730 = (state_10835[(2)]);
var inst_10731 = (inst_10715 + (1));
var tmp10847 = inst_10713;
var tmp10848 = inst_10712;
var tmp10849 = inst_10714;
var inst_10712__$1 = tmp10848;
var inst_10713__$1 = tmp10847;
var inst_10714__$1 = tmp10849;
var inst_10715__$1 = inst_10731;
var state_10835__$1 = (function (){var statearr_10854 = state_10835;
(statearr_10854[(13)] = inst_10713__$1);

(statearr_10854[(18)] = inst_10730);

(statearr_10854[(15)] = inst_10715__$1);

(statearr_10854[(16)] = inst_10712__$1);

(statearr_10854[(17)] = inst_10714__$1);

return statearr_10854;
})();
var statearr_10855_10931 = state_10835__$1;
(statearr_10855_10931[(2)] = null);

(statearr_10855_10931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (21))){
var inst_10757 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10859_10932 = state_10835__$1;
(statearr_10859_10932[(2)] = inst_10757);

(statearr_10859_10932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (31))){
var inst_10783 = (state_10835[(9)]);
var inst_10787 = done.call(null,null);
var inst_10788 = cljs.core.async.untap_STAR_.call(null,m,inst_10783);
var state_10835__$1 = (function (){var statearr_10860 = state_10835;
(statearr_10860[(19)] = inst_10787);

return statearr_10860;
})();
var statearr_10861_10933 = state_10835__$1;
(statearr_10861_10933[(2)] = inst_10788);

(statearr_10861_10933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (32))){
var inst_10776 = (state_10835[(10)]);
var inst_10778 = (state_10835[(12)]);
var inst_10775 = (state_10835[(20)]);
var inst_10777 = (state_10835[(21)]);
var inst_10790 = (state_10835[(2)]);
var inst_10791 = (inst_10778 + (1));
var tmp10856 = inst_10776;
var tmp10857 = inst_10775;
var tmp10858 = inst_10777;
var inst_10775__$1 = tmp10857;
var inst_10776__$1 = tmp10856;
var inst_10777__$1 = tmp10858;
var inst_10778__$1 = inst_10791;
var state_10835__$1 = (function (){var statearr_10862 = state_10835;
(statearr_10862[(10)] = inst_10776__$1);

(statearr_10862[(22)] = inst_10790);

(statearr_10862[(12)] = inst_10778__$1);

(statearr_10862[(20)] = inst_10775__$1);

(statearr_10862[(21)] = inst_10777__$1);

return statearr_10862;
})();
var statearr_10863_10934 = state_10835__$1;
(statearr_10863_10934[(2)] = null);

(statearr_10863_10934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (40))){
var inst_10803 = (state_10835[(23)]);
var inst_10807 = done.call(null,null);
var inst_10808 = cljs.core.async.untap_STAR_.call(null,m,inst_10803);
var state_10835__$1 = (function (){var statearr_10864 = state_10835;
(statearr_10864[(24)] = inst_10807);

return statearr_10864;
})();
var statearr_10865_10935 = state_10835__$1;
(statearr_10865_10935[(2)] = inst_10808);

(statearr_10865_10935[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (33))){
var inst_10794 = (state_10835[(25)]);
var inst_10796 = cljs.core.chunked_seq_QMARK_.call(null,inst_10794);
var state_10835__$1 = state_10835;
if(inst_10796){
var statearr_10866_10936 = state_10835__$1;
(statearr_10866_10936[(1)] = (36));

} else {
var statearr_10867_10937 = state_10835__$1;
(statearr_10867_10937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (13))){
var inst_10724 = (state_10835[(26)]);
var inst_10727 = cljs.core.async.close_BANG_.call(null,inst_10724);
var state_10835__$1 = state_10835;
var statearr_10868_10938 = state_10835__$1;
(statearr_10868_10938[(2)] = inst_10727);

(statearr_10868_10938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (22))){
var inst_10747 = (state_10835[(8)]);
var inst_10750 = cljs.core.async.close_BANG_.call(null,inst_10747);
var state_10835__$1 = state_10835;
var statearr_10869_10939 = state_10835__$1;
(statearr_10869_10939[(2)] = inst_10750);

(statearr_10869_10939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (36))){
var inst_10794 = (state_10835[(25)]);
var inst_10798 = cljs.core.chunk_first.call(null,inst_10794);
var inst_10799 = cljs.core.chunk_rest.call(null,inst_10794);
var inst_10800 = cljs.core.count.call(null,inst_10798);
var inst_10775 = inst_10799;
var inst_10776 = inst_10798;
var inst_10777 = inst_10800;
var inst_10778 = (0);
var state_10835__$1 = (function (){var statearr_10870 = state_10835;
(statearr_10870[(10)] = inst_10776);

(statearr_10870[(12)] = inst_10778);

(statearr_10870[(20)] = inst_10775);

(statearr_10870[(21)] = inst_10777);

return statearr_10870;
})();
var statearr_10871_10940 = state_10835__$1;
(statearr_10871_10940[(2)] = null);

(statearr_10871_10940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (41))){
var inst_10794 = (state_10835[(25)]);
var inst_10810 = (state_10835[(2)]);
var inst_10811 = cljs.core.next.call(null,inst_10794);
var inst_10775 = inst_10811;
var inst_10776 = null;
var inst_10777 = (0);
var inst_10778 = (0);
var state_10835__$1 = (function (){var statearr_10872 = state_10835;
(statearr_10872[(10)] = inst_10776);

(statearr_10872[(27)] = inst_10810);

(statearr_10872[(12)] = inst_10778);

(statearr_10872[(20)] = inst_10775);

(statearr_10872[(21)] = inst_10777);

return statearr_10872;
})();
var statearr_10873_10941 = state_10835__$1;
(statearr_10873_10941[(2)] = null);

(statearr_10873_10941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (43))){
var state_10835__$1 = state_10835;
var statearr_10874_10942 = state_10835__$1;
(statearr_10874_10942[(2)] = null);

(statearr_10874_10942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (29))){
var inst_10819 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10875_10943 = state_10835__$1;
(statearr_10875_10943[(2)] = inst_10819);

(statearr_10875_10943[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (44))){
var inst_10828 = (state_10835[(2)]);
var state_10835__$1 = (function (){var statearr_10876 = state_10835;
(statearr_10876[(28)] = inst_10828);

return statearr_10876;
})();
var statearr_10877_10944 = state_10835__$1;
(statearr_10877_10944[(2)] = null);

(statearr_10877_10944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (6))){
var inst_10767 = (state_10835[(29)]);
var inst_10766 = cljs.core.deref.call(null,cs);
var inst_10767__$1 = cljs.core.keys.call(null,inst_10766);
var inst_10768 = cljs.core.count.call(null,inst_10767__$1);
var inst_10769 = cljs.core.reset_BANG_.call(null,dctr,inst_10768);
var inst_10774 = cljs.core.seq.call(null,inst_10767__$1);
var inst_10775 = inst_10774;
var inst_10776 = null;
var inst_10777 = (0);
var inst_10778 = (0);
var state_10835__$1 = (function (){var statearr_10878 = state_10835;
(statearr_10878[(10)] = inst_10776);

(statearr_10878[(29)] = inst_10767__$1);

(statearr_10878[(30)] = inst_10769);

(statearr_10878[(12)] = inst_10778);

(statearr_10878[(20)] = inst_10775);

(statearr_10878[(21)] = inst_10777);

return statearr_10878;
})();
var statearr_10879_10945 = state_10835__$1;
(statearr_10879_10945[(2)] = null);

(statearr_10879_10945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (28))){
var inst_10794 = (state_10835[(25)]);
var inst_10775 = (state_10835[(20)]);
var inst_10794__$1 = cljs.core.seq.call(null,inst_10775);
var state_10835__$1 = (function (){var statearr_10880 = state_10835;
(statearr_10880[(25)] = inst_10794__$1);

return statearr_10880;
})();
if(inst_10794__$1){
var statearr_10881_10946 = state_10835__$1;
(statearr_10881_10946[(1)] = (33));

} else {
var statearr_10882_10947 = state_10835__$1;
(statearr_10882_10947[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (25))){
var inst_10778 = (state_10835[(12)]);
var inst_10777 = (state_10835[(21)]);
var inst_10780 = (inst_10778 < inst_10777);
var inst_10781 = inst_10780;
var state_10835__$1 = state_10835;
if(cljs.core.truth_(inst_10781)){
var statearr_10883_10948 = state_10835__$1;
(statearr_10883_10948[(1)] = (27));

} else {
var statearr_10884_10949 = state_10835__$1;
(statearr_10884_10949[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (34))){
var state_10835__$1 = state_10835;
var statearr_10885_10950 = state_10835__$1;
(statearr_10885_10950[(2)] = null);

(statearr_10885_10950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (17))){
var state_10835__$1 = state_10835;
var statearr_10886_10951 = state_10835__$1;
(statearr_10886_10951[(2)] = null);

(statearr_10886_10951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (3))){
var inst_10833 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10835__$1,inst_10833);
} else {
if((state_val_10836 === (12))){
var inst_10762 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10887_10952 = state_10835__$1;
(statearr_10887_10952[(2)] = inst_10762);

(statearr_10887_10952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (2))){
var state_10835__$1 = state_10835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10835__$1,(4),ch);
} else {
if((state_val_10836 === (23))){
var state_10835__$1 = state_10835;
var statearr_10888_10953 = state_10835__$1;
(statearr_10888_10953[(2)] = null);

(statearr_10888_10953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (35))){
var inst_10817 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10889_10954 = state_10835__$1;
(statearr_10889_10954[(2)] = inst_10817);

(statearr_10889_10954[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (19))){
var inst_10734 = (state_10835[(7)]);
var inst_10738 = cljs.core.chunk_first.call(null,inst_10734);
var inst_10739 = cljs.core.chunk_rest.call(null,inst_10734);
var inst_10740 = cljs.core.count.call(null,inst_10738);
var inst_10712 = inst_10739;
var inst_10713 = inst_10738;
var inst_10714 = inst_10740;
var inst_10715 = (0);
var state_10835__$1 = (function (){var statearr_10890 = state_10835;
(statearr_10890[(13)] = inst_10713);

(statearr_10890[(15)] = inst_10715);

(statearr_10890[(16)] = inst_10712);

(statearr_10890[(17)] = inst_10714);

return statearr_10890;
})();
var statearr_10891_10955 = state_10835__$1;
(statearr_10891_10955[(2)] = null);

(statearr_10891_10955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (11))){
var inst_10734 = (state_10835[(7)]);
var inst_10712 = (state_10835[(16)]);
var inst_10734__$1 = cljs.core.seq.call(null,inst_10712);
var state_10835__$1 = (function (){var statearr_10892 = state_10835;
(statearr_10892[(7)] = inst_10734__$1);

return statearr_10892;
})();
if(inst_10734__$1){
var statearr_10893_10956 = state_10835__$1;
(statearr_10893_10956[(1)] = (16));

} else {
var statearr_10894_10957 = state_10835__$1;
(statearr_10894_10957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (9))){
var inst_10764 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10895_10958 = state_10835__$1;
(statearr_10895_10958[(2)] = inst_10764);

(statearr_10895_10958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (5))){
var inst_10710 = cljs.core.deref.call(null,cs);
var inst_10711 = cljs.core.seq.call(null,inst_10710);
var inst_10712 = inst_10711;
var inst_10713 = null;
var inst_10714 = (0);
var inst_10715 = (0);
var state_10835__$1 = (function (){var statearr_10896 = state_10835;
(statearr_10896[(13)] = inst_10713);

(statearr_10896[(15)] = inst_10715);

(statearr_10896[(16)] = inst_10712);

(statearr_10896[(17)] = inst_10714);

return statearr_10896;
})();
var statearr_10897_10959 = state_10835__$1;
(statearr_10897_10959[(2)] = null);

(statearr_10897_10959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (14))){
var state_10835__$1 = state_10835;
var statearr_10898_10960 = state_10835__$1;
(statearr_10898_10960[(2)] = null);

(statearr_10898_10960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (45))){
var inst_10825 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10899_10961 = state_10835__$1;
(statearr_10899_10961[(2)] = inst_10825);

(statearr_10899_10961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (26))){
var inst_10767 = (state_10835[(29)]);
var inst_10821 = (state_10835[(2)]);
var inst_10822 = cljs.core.seq.call(null,inst_10767);
var state_10835__$1 = (function (){var statearr_10900 = state_10835;
(statearr_10900[(31)] = inst_10821);

return statearr_10900;
})();
if(inst_10822){
var statearr_10901_10962 = state_10835__$1;
(statearr_10901_10962[(1)] = (42));

} else {
var statearr_10902_10963 = state_10835__$1;
(statearr_10902_10963[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (16))){
var inst_10734 = (state_10835[(7)]);
var inst_10736 = cljs.core.chunked_seq_QMARK_.call(null,inst_10734);
var state_10835__$1 = state_10835;
if(inst_10736){
var statearr_10903_10964 = state_10835__$1;
(statearr_10903_10964[(1)] = (19));

} else {
var statearr_10904_10965 = state_10835__$1;
(statearr_10904_10965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (38))){
var inst_10814 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10905_10966 = state_10835__$1;
(statearr_10905_10966[(2)] = inst_10814);

(statearr_10905_10966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (30))){
var state_10835__$1 = state_10835;
var statearr_10906_10967 = state_10835__$1;
(statearr_10906_10967[(2)] = null);

(statearr_10906_10967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (10))){
var inst_10713 = (state_10835[(13)]);
var inst_10715 = (state_10835[(15)]);
var inst_10723 = cljs.core._nth.call(null,inst_10713,inst_10715);
var inst_10724 = cljs.core.nth.call(null,inst_10723,(0),null);
var inst_10725 = cljs.core.nth.call(null,inst_10723,(1),null);
var state_10835__$1 = (function (){var statearr_10907 = state_10835;
(statearr_10907[(26)] = inst_10724);

return statearr_10907;
})();
if(cljs.core.truth_(inst_10725)){
var statearr_10908_10968 = state_10835__$1;
(statearr_10908_10968[(1)] = (13));

} else {
var statearr_10909_10969 = state_10835__$1;
(statearr_10909_10969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (18))){
var inst_10760 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10910_10970 = state_10835__$1;
(statearr_10910_10970[(2)] = inst_10760);

(statearr_10910_10970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (42))){
var state_10835__$1 = state_10835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10835__$1,(45),dchan);
} else {
if((state_val_10836 === (37))){
var inst_10803 = (state_10835[(23)]);
var inst_10703 = (state_10835[(11)]);
var inst_10794 = (state_10835[(25)]);
var inst_10803__$1 = cljs.core.first.call(null,inst_10794);
var inst_10804 = cljs.core.async.put_BANG_.call(null,inst_10803__$1,inst_10703,done);
var state_10835__$1 = (function (){var statearr_10911 = state_10835;
(statearr_10911[(23)] = inst_10803__$1);

return statearr_10911;
})();
if(cljs.core.truth_(inst_10804)){
var statearr_10912_10971 = state_10835__$1;
(statearr_10912_10971[(1)] = (39));

} else {
var statearr_10913_10972 = state_10835__$1;
(statearr_10913_10972[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (8))){
var inst_10715 = (state_10835[(15)]);
var inst_10714 = (state_10835[(17)]);
var inst_10717 = (inst_10715 < inst_10714);
var inst_10718 = inst_10717;
var state_10835__$1 = state_10835;
if(cljs.core.truth_(inst_10718)){
var statearr_10914_10973 = state_10835__$1;
(statearr_10914_10973[(1)] = (10));

} else {
var statearr_10915_10974 = state_10835__$1;
(statearr_10915_10974[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___10920,cs,m,dchan,dctr,done))
;
return ((function (switch__10006__auto__,c__10101__auto___10920,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10007__auto__ = null;
var cljs$core$async$mult_$_state_machine__10007__auto____0 = (function (){
var statearr_10916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10916[(0)] = cljs$core$async$mult_$_state_machine__10007__auto__);

(statearr_10916[(1)] = (1));

return statearr_10916;
});
var cljs$core$async$mult_$_state_machine__10007__auto____1 = (function (state_10835){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_10835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e10917){if((e10917 instanceof Object)){
var ex__10010__auto__ = e10917;
var statearr_10918_10975 = state_10835;
(statearr_10918_10975[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10976 = state_10835;
state_10835 = G__10976;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10007__auto__ = function(state_10835){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10007__auto____1.call(this,state_10835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10007__auto____0;
cljs$core$async$mult_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10007__auto____1;
return cljs$core$async$mult_$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___10920,cs,m,dchan,dctr,done))
})();
var state__10103__auto__ = (function (){var statearr_10919 = f__10102__auto__.call(null);
(statearr_10919[(6)] = c__10101__auto___10920);

return statearr_10919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___10920,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__10978 = arguments.length;
switch (G__10978) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10990 = arguments.length;
var i__4642__auto___10991 = (0);
while(true){
if((i__4642__auto___10991 < len__4641__auto___10990)){
args__4647__auto__.push((arguments[i__4642__auto___10991]));

var G__10992 = (i__4642__auto___10991 + (1));
i__4642__auto___10991 = G__10992;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10984){
var map__10985 = p__10984;
var map__10985__$1 = (((((!((map__10985 == null))))?(((((map__10985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10985):map__10985);
var opts = map__10985__$1;
var statearr_10987_10993 = state;
(statearr_10987_10993[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,((function (map__10985,map__10985__$1,opts){
return (function (val){
var statearr_10988_10994 = state;
(statearr_10988_10994[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10985,map__10985__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_10989_10995 = state;
(statearr_10989_10995[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10980){
var G__10981 = cljs.core.first.call(null,seq10980);
var seq10980__$1 = cljs.core.next.call(null,seq10980);
var G__10982 = cljs.core.first.call(null,seq10980__$1);
var seq10980__$2 = cljs.core.next.call(null,seq10980__$1);
var G__10983 = cljs.core.first.call(null,seq10980__$2);
var seq10980__$3 = cljs.core.next.call(null,seq10980__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10981,G__10982,G__10983,seq10980__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10996 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10997){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10997 = meta10997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10998,meta10997__$1){
var self__ = this;
var _10998__$1 = this;
return (new cljs.core.async.t_cljs$core$async10996(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10997__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10998){
var self__ = this;
var _10998__$1 = this;
return self__.meta10997;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10997","meta10997",-882537212,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10996";

cljs.core.async.t_cljs$core$async10996.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async10996");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10996.
 */
cljs.core.async.__GT_t_cljs$core$async10996 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10996(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10997){
return (new cljs.core.async.t_cljs$core$async10996(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10997));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10996(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10101__auto___11160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11100){
var state_val_11101 = (state_11100[(1)]);
if((state_val_11101 === (7))){
var inst_11015 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
var statearr_11102_11161 = state_11100__$1;
(statearr_11102_11161[(2)] = inst_11015);

(statearr_11102_11161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (20))){
var inst_11027 = (state_11100[(7)]);
var state_11100__$1 = state_11100;
var statearr_11103_11162 = state_11100__$1;
(statearr_11103_11162[(2)] = inst_11027);

(statearr_11103_11162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (27))){
var state_11100__$1 = state_11100;
var statearr_11104_11163 = state_11100__$1;
(statearr_11104_11163[(2)] = null);

(statearr_11104_11163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (1))){
var inst_11002 = (state_11100[(8)]);
var inst_11002__$1 = calc_state.call(null);
var inst_11004 = (inst_11002__$1 == null);
var inst_11005 = cljs.core.not.call(null,inst_11004);
var state_11100__$1 = (function (){var statearr_11105 = state_11100;
(statearr_11105[(8)] = inst_11002__$1);

return statearr_11105;
})();
if(inst_11005){
var statearr_11106_11164 = state_11100__$1;
(statearr_11106_11164[(1)] = (2));

} else {
var statearr_11107_11165 = state_11100__$1;
(statearr_11107_11165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (24))){
var inst_11074 = (state_11100[(9)]);
var inst_11060 = (state_11100[(10)]);
var inst_11051 = (state_11100[(11)]);
var inst_11074__$1 = inst_11051.call(null,inst_11060);
var state_11100__$1 = (function (){var statearr_11108 = state_11100;
(statearr_11108[(9)] = inst_11074__$1);

return statearr_11108;
})();
if(cljs.core.truth_(inst_11074__$1)){
var statearr_11109_11166 = state_11100__$1;
(statearr_11109_11166[(1)] = (29));

} else {
var statearr_11110_11167 = state_11100__$1;
(statearr_11110_11167[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (4))){
var inst_11018 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11018)){
var statearr_11111_11168 = state_11100__$1;
(statearr_11111_11168[(1)] = (8));

} else {
var statearr_11112_11169 = state_11100__$1;
(statearr_11112_11169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (15))){
var inst_11045 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11045)){
var statearr_11113_11170 = state_11100__$1;
(statearr_11113_11170[(1)] = (19));

} else {
var statearr_11114_11171 = state_11100__$1;
(statearr_11114_11171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (21))){
var inst_11050 = (state_11100[(12)]);
var inst_11050__$1 = (state_11100[(2)]);
var inst_11051 = cljs.core.get.call(null,inst_11050__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11052 = cljs.core.get.call(null,inst_11050__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11053 = cljs.core.get.call(null,inst_11050__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11100__$1 = (function (){var statearr_11115 = state_11100;
(statearr_11115[(13)] = inst_11052);

(statearr_11115[(11)] = inst_11051);

(statearr_11115[(12)] = inst_11050__$1);

return statearr_11115;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11100__$1,(22),inst_11053);
} else {
if((state_val_11101 === (31))){
var inst_11082 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11082)){
var statearr_11116_11172 = state_11100__$1;
(statearr_11116_11172[(1)] = (32));

} else {
var statearr_11117_11173 = state_11100__$1;
(statearr_11117_11173[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (32))){
var inst_11059 = (state_11100[(14)]);
var state_11100__$1 = state_11100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11100__$1,(35),out,inst_11059);
} else {
if((state_val_11101 === (33))){
var inst_11050 = (state_11100[(12)]);
var inst_11027 = inst_11050;
var state_11100__$1 = (function (){var statearr_11118 = state_11100;
(statearr_11118[(7)] = inst_11027);

return statearr_11118;
})();
var statearr_11119_11174 = state_11100__$1;
(statearr_11119_11174[(2)] = null);

(statearr_11119_11174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (13))){
var inst_11027 = (state_11100[(7)]);
var inst_11034 = inst_11027.cljs$lang$protocol_mask$partition0$;
var inst_11035 = (inst_11034 & (64));
var inst_11036 = inst_11027.cljs$core$ISeq$;
var inst_11037 = (cljs.core.PROTOCOL_SENTINEL === inst_11036);
var inst_11038 = ((inst_11035) || (inst_11037));
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11038)){
var statearr_11120_11175 = state_11100__$1;
(statearr_11120_11175[(1)] = (16));

} else {
var statearr_11121_11176 = state_11100__$1;
(statearr_11121_11176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (22))){
var inst_11060 = (state_11100[(10)]);
var inst_11059 = (state_11100[(14)]);
var inst_11058 = (state_11100[(2)]);
var inst_11059__$1 = cljs.core.nth.call(null,inst_11058,(0),null);
var inst_11060__$1 = cljs.core.nth.call(null,inst_11058,(1),null);
var inst_11061 = (inst_11059__$1 == null);
var inst_11062 = cljs.core._EQ_.call(null,inst_11060__$1,change);
var inst_11063 = ((inst_11061) || (inst_11062));
var state_11100__$1 = (function (){var statearr_11122 = state_11100;
(statearr_11122[(10)] = inst_11060__$1);

(statearr_11122[(14)] = inst_11059__$1);

return statearr_11122;
})();
if(cljs.core.truth_(inst_11063)){
var statearr_11123_11177 = state_11100__$1;
(statearr_11123_11177[(1)] = (23));

} else {
var statearr_11124_11178 = state_11100__$1;
(statearr_11124_11178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (36))){
var inst_11050 = (state_11100[(12)]);
var inst_11027 = inst_11050;
var state_11100__$1 = (function (){var statearr_11125 = state_11100;
(statearr_11125[(7)] = inst_11027);

return statearr_11125;
})();
var statearr_11126_11179 = state_11100__$1;
(statearr_11126_11179[(2)] = null);

(statearr_11126_11179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (29))){
var inst_11074 = (state_11100[(9)]);
var state_11100__$1 = state_11100;
var statearr_11127_11180 = state_11100__$1;
(statearr_11127_11180[(2)] = inst_11074);

(statearr_11127_11180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (6))){
var state_11100__$1 = state_11100;
var statearr_11128_11181 = state_11100__$1;
(statearr_11128_11181[(2)] = false);

(statearr_11128_11181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (28))){
var inst_11070 = (state_11100[(2)]);
var inst_11071 = calc_state.call(null);
var inst_11027 = inst_11071;
var state_11100__$1 = (function (){var statearr_11129 = state_11100;
(statearr_11129[(15)] = inst_11070);

(statearr_11129[(7)] = inst_11027);

return statearr_11129;
})();
var statearr_11130_11182 = state_11100__$1;
(statearr_11130_11182[(2)] = null);

(statearr_11130_11182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (25))){
var inst_11096 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
var statearr_11131_11183 = state_11100__$1;
(statearr_11131_11183[(2)] = inst_11096);

(statearr_11131_11183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (34))){
var inst_11094 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
var statearr_11132_11184 = state_11100__$1;
(statearr_11132_11184[(2)] = inst_11094);

(statearr_11132_11184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (17))){
var state_11100__$1 = state_11100;
var statearr_11133_11185 = state_11100__$1;
(statearr_11133_11185[(2)] = false);

(statearr_11133_11185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (3))){
var state_11100__$1 = state_11100;
var statearr_11134_11186 = state_11100__$1;
(statearr_11134_11186[(2)] = false);

(statearr_11134_11186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (12))){
var inst_11098 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11100__$1,inst_11098);
} else {
if((state_val_11101 === (2))){
var inst_11002 = (state_11100[(8)]);
var inst_11007 = inst_11002.cljs$lang$protocol_mask$partition0$;
var inst_11008 = (inst_11007 & (64));
var inst_11009 = inst_11002.cljs$core$ISeq$;
var inst_11010 = (cljs.core.PROTOCOL_SENTINEL === inst_11009);
var inst_11011 = ((inst_11008) || (inst_11010));
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11011)){
var statearr_11135_11187 = state_11100__$1;
(statearr_11135_11187[(1)] = (5));

} else {
var statearr_11136_11188 = state_11100__$1;
(statearr_11136_11188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (23))){
var inst_11059 = (state_11100[(14)]);
var inst_11065 = (inst_11059 == null);
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11065)){
var statearr_11137_11189 = state_11100__$1;
(statearr_11137_11189[(1)] = (26));

} else {
var statearr_11138_11190 = state_11100__$1;
(statearr_11138_11190[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (35))){
var inst_11085 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
if(cljs.core.truth_(inst_11085)){
var statearr_11139_11191 = state_11100__$1;
(statearr_11139_11191[(1)] = (36));

} else {
var statearr_11140_11192 = state_11100__$1;
(statearr_11140_11192[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (19))){
var inst_11027 = (state_11100[(7)]);
var inst_11047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11027);
var state_11100__$1 = state_11100;
var statearr_11141_11193 = state_11100__$1;
(statearr_11141_11193[(2)] = inst_11047);

(statearr_11141_11193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (11))){
var inst_11027 = (state_11100[(7)]);
var inst_11031 = (inst_11027 == null);
var inst_11032 = cljs.core.not.call(null,inst_11031);
var state_11100__$1 = state_11100;
if(inst_11032){
var statearr_11142_11194 = state_11100__$1;
(statearr_11142_11194[(1)] = (13));

} else {
var statearr_11143_11195 = state_11100__$1;
(statearr_11143_11195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (9))){
var inst_11002 = (state_11100[(8)]);
var state_11100__$1 = state_11100;
var statearr_11144_11196 = state_11100__$1;
(statearr_11144_11196[(2)] = inst_11002);

(statearr_11144_11196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (5))){
var state_11100__$1 = state_11100;
var statearr_11145_11197 = state_11100__$1;
(statearr_11145_11197[(2)] = true);

(statearr_11145_11197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (14))){
var state_11100__$1 = state_11100;
var statearr_11146_11198 = state_11100__$1;
(statearr_11146_11198[(2)] = false);

(statearr_11146_11198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (26))){
var inst_11060 = (state_11100[(10)]);
var inst_11067 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11060);
var state_11100__$1 = state_11100;
var statearr_11147_11199 = state_11100__$1;
(statearr_11147_11199[(2)] = inst_11067);

(statearr_11147_11199[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (16))){
var state_11100__$1 = state_11100;
var statearr_11148_11200 = state_11100__$1;
(statearr_11148_11200[(2)] = true);

(statearr_11148_11200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (38))){
var inst_11090 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
var statearr_11149_11201 = state_11100__$1;
(statearr_11149_11201[(2)] = inst_11090);

(statearr_11149_11201[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (30))){
var inst_11052 = (state_11100[(13)]);
var inst_11060 = (state_11100[(10)]);
var inst_11051 = (state_11100[(11)]);
var inst_11077 = cljs.core.empty_QMARK_.call(null,inst_11051);
var inst_11078 = inst_11052.call(null,inst_11060);
var inst_11079 = cljs.core.not.call(null,inst_11078);
var inst_11080 = ((inst_11077) && (inst_11079));
var state_11100__$1 = state_11100;
var statearr_11150_11202 = state_11100__$1;
(statearr_11150_11202[(2)] = inst_11080);

(statearr_11150_11202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (10))){
var inst_11002 = (state_11100[(8)]);
var inst_11023 = (state_11100[(2)]);
var inst_11024 = cljs.core.get.call(null,inst_11023,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11025 = cljs.core.get.call(null,inst_11023,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11026 = cljs.core.get.call(null,inst_11023,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11027 = inst_11002;
var state_11100__$1 = (function (){var statearr_11151 = state_11100;
(statearr_11151[(7)] = inst_11027);

(statearr_11151[(16)] = inst_11025);

(statearr_11151[(17)] = inst_11026);

(statearr_11151[(18)] = inst_11024);

return statearr_11151;
})();
var statearr_11152_11203 = state_11100__$1;
(statearr_11152_11203[(2)] = null);

(statearr_11152_11203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (18))){
var inst_11042 = (state_11100[(2)]);
var state_11100__$1 = state_11100;
var statearr_11153_11204 = state_11100__$1;
(statearr_11153_11204[(2)] = inst_11042);

(statearr_11153_11204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (37))){
var state_11100__$1 = state_11100;
var statearr_11154_11205 = state_11100__$1;
(statearr_11154_11205[(2)] = null);

(statearr_11154_11205[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11101 === (8))){
var inst_11002 = (state_11100[(8)]);
var inst_11020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11002);
var state_11100__$1 = state_11100;
var statearr_11155_11206 = state_11100__$1;
(statearr_11155_11206[(2)] = inst_11020);

(statearr_11155_11206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10006__auto__,c__10101__auto___11160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10007__auto__ = null;
var cljs$core$async$mix_$_state_machine__10007__auto____0 = (function (){
var statearr_11156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11156[(0)] = cljs$core$async$mix_$_state_machine__10007__auto__);

(statearr_11156[(1)] = (1));

return statearr_11156;
});
var cljs$core$async$mix_$_state_machine__10007__auto____1 = (function (state_11100){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11157){if((e11157 instanceof Object)){
var ex__10010__auto__ = e11157;
var statearr_11158_11207 = state_11100;
(statearr_11158_11207[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11208 = state_11100;
state_11100 = G__11208;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10007__auto__ = function(state_11100){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10007__auto____1.call(this,state_11100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10007__auto____0;
cljs$core$async$mix_$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10007__auto____1;
return cljs$core$async$mix_$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10103__auto__ = (function (){var statearr_11159 = f__10102__auto__.call(null);
(statearr_11159[(6)] = c__10101__auto___11160);

return statearr_11159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11210 = arguments.length;
switch (G__11210) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11214 = arguments.length;
switch (G__11214) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__11212_SHARP_){
if(cljs.core.truth_(p1__11212_SHARP_.call(null,topic))){
return p1__11212_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11212_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11215 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11216){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11216 = meta11216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11217,meta11216__$1){
var self__ = this;
var _11217__$1 = this;
return (new cljs.core.async.t_cljs$core$async11215(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11216__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11217){
var self__ = this;
var _11217__$1 = this;
return self__.meta11216;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11216","meta11216",1909587063,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11215";

cljs.core.async.t_cljs$core$async11215.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11215");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11215.
 */
cljs.core.async.__GT_t_cljs$core$async11215 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11216){
return (new cljs.core.async.t_cljs$core$async11215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11216));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11215(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10101__auto___11335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11335,mults,ensure_mult,p){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11335,mults,ensure_mult,p){
return (function (state_11289){
var state_val_11290 = (state_11289[(1)]);
if((state_val_11290 === (7))){
var inst_11285 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11291_11336 = state_11289__$1;
(statearr_11291_11336[(2)] = inst_11285);

(statearr_11291_11336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (20))){
var state_11289__$1 = state_11289;
var statearr_11292_11337 = state_11289__$1;
(statearr_11292_11337[(2)] = null);

(statearr_11292_11337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (1))){
var state_11289__$1 = state_11289;
var statearr_11293_11338 = state_11289__$1;
(statearr_11293_11338[(2)] = null);

(statearr_11293_11338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (24))){
var inst_11268 = (state_11289[(7)]);
var inst_11277 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11268);
var state_11289__$1 = state_11289;
var statearr_11294_11339 = state_11289__$1;
(statearr_11294_11339[(2)] = inst_11277);

(statearr_11294_11339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (4))){
var inst_11220 = (state_11289[(8)]);
var inst_11220__$1 = (state_11289[(2)]);
var inst_11221 = (inst_11220__$1 == null);
var state_11289__$1 = (function (){var statearr_11295 = state_11289;
(statearr_11295[(8)] = inst_11220__$1);

return statearr_11295;
})();
if(cljs.core.truth_(inst_11221)){
var statearr_11296_11340 = state_11289__$1;
(statearr_11296_11340[(1)] = (5));

} else {
var statearr_11297_11341 = state_11289__$1;
(statearr_11297_11341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (15))){
var inst_11262 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11298_11342 = state_11289__$1;
(statearr_11298_11342[(2)] = inst_11262);

(statearr_11298_11342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (21))){
var inst_11282 = (state_11289[(2)]);
var state_11289__$1 = (function (){var statearr_11299 = state_11289;
(statearr_11299[(9)] = inst_11282);

return statearr_11299;
})();
var statearr_11300_11343 = state_11289__$1;
(statearr_11300_11343[(2)] = null);

(statearr_11300_11343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (13))){
var inst_11244 = (state_11289[(10)]);
var inst_11246 = cljs.core.chunked_seq_QMARK_.call(null,inst_11244);
var state_11289__$1 = state_11289;
if(inst_11246){
var statearr_11301_11344 = state_11289__$1;
(statearr_11301_11344[(1)] = (16));

} else {
var statearr_11302_11345 = state_11289__$1;
(statearr_11302_11345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (22))){
var inst_11274 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
if(cljs.core.truth_(inst_11274)){
var statearr_11303_11346 = state_11289__$1;
(statearr_11303_11346[(1)] = (23));

} else {
var statearr_11304_11347 = state_11289__$1;
(statearr_11304_11347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (6))){
var inst_11270 = (state_11289[(11)]);
var inst_11220 = (state_11289[(8)]);
var inst_11268 = (state_11289[(7)]);
var inst_11268__$1 = topic_fn.call(null,inst_11220);
var inst_11269 = cljs.core.deref.call(null,mults);
var inst_11270__$1 = cljs.core.get.call(null,inst_11269,inst_11268__$1);
var state_11289__$1 = (function (){var statearr_11305 = state_11289;
(statearr_11305[(11)] = inst_11270__$1);

(statearr_11305[(7)] = inst_11268__$1);

return statearr_11305;
})();
if(cljs.core.truth_(inst_11270__$1)){
var statearr_11306_11348 = state_11289__$1;
(statearr_11306_11348[(1)] = (19));

} else {
var statearr_11307_11349 = state_11289__$1;
(statearr_11307_11349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (25))){
var inst_11279 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11308_11350 = state_11289__$1;
(statearr_11308_11350[(2)] = inst_11279);

(statearr_11308_11350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (17))){
var inst_11244 = (state_11289[(10)]);
var inst_11253 = cljs.core.first.call(null,inst_11244);
var inst_11254 = cljs.core.async.muxch_STAR_.call(null,inst_11253);
var inst_11255 = cljs.core.async.close_BANG_.call(null,inst_11254);
var inst_11256 = cljs.core.next.call(null,inst_11244);
var inst_11230 = inst_11256;
var inst_11231 = null;
var inst_11232 = (0);
var inst_11233 = (0);
var state_11289__$1 = (function (){var statearr_11309 = state_11289;
(statearr_11309[(12)] = inst_11255);

(statearr_11309[(13)] = inst_11230);

(statearr_11309[(14)] = inst_11233);

(statearr_11309[(15)] = inst_11231);

(statearr_11309[(16)] = inst_11232);

return statearr_11309;
})();
var statearr_11310_11351 = state_11289__$1;
(statearr_11310_11351[(2)] = null);

(statearr_11310_11351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (3))){
var inst_11287 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11289__$1,inst_11287);
} else {
if((state_val_11290 === (12))){
var inst_11264 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11311_11352 = state_11289__$1;
(statearr_11311_11352[(2)] = inst_11264);

(statearr_11311_11352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (2))){
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(4),ch);
} else {
if((state_val_11290 === (23))){
var state_11289__$1 = state_11289;
var statearr_11312_11353 = state_11289__$1;
(statearr_11312_11353[(2)] = null);

(statearr_11312_11353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (19))){
var inst_11270 = (state_11289[(11)]);
var inst_11220 = (state_11289[(8)]);
var inst_11272 = cljs.core.async.muxch_STAR_.call(null,inst_11270);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11289__$1,(22),inst_11272,inst_11220);
} else {
if((state_val_11290 === (11))){
var inst_11230 = (state_11289[(13)]);
var inst_11244 = (state_11289[(10)]);
var inst_11244__$1 = cljs.core.seq.call(null,inst_11230);
var state_11289__$1 = (function (){var statearr_11313 = state_11289;
(statearr_11313[(10)] = inst_11244__$1);

return statearr_11313;
})();
if(inst_11244__$1){
var statearr_11314_11354 = state_11289__$1;
(statearr_11314_11354[(1)] = (13));

} else {
var statearr_11315_11355 = state_11289__$1;
(statearr_11315_11355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (9))){
var inst_11266 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11316_11356 = state_11289__$1;
(statearr_11316_11356[(2)] = inst_11266);

(statearr_11316_11356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (5))){
var inst_11227 = cljs.core.deref.call(null,mults);
var inst_11228 = cljs.core.vals.call(null,inst_11227);
var inst_11229 = cljs.core.seq.call(null,inst_11228);
var inst_11230 = inst_11229;
var inst_11231 = null;
var inst_11232 = (0);
var inst_11233 = (0);
var state_11289__$1 = (function (){var statearr_11317 = state_11289;
(statearr_11317[(13)] = inst_11230);

(statearr_11317[(14)] = inst_11233);

(statearr_11317[(15)] = inst_11231);

(statearr_11317[(16)] = inst_11232);

return statearr_11317;
})();
var statearr_11318_11357 = state_11289__$1;
(statearr_11318_11357[(2)] = null);

(statearr_11318_11357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (14))){
var state_11289__$1 = state_11289;
var statearr_11322_11358 = state_11289__$1;
(statearr_11322_11358[(2)] = null);

(statearr_11322_11358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (16))){
var inst_11244 = (state_11289[(10)]);
var inst_11248 = cljs.core.chunk_first.call(null,inst_11244);
var inst_11249 = cljs.core.chunk_rest.call(null,inst_11244);
var inst_11250 = cljs.core.count.call(null,inst_11248);
var inst_11230 = inst_11249;
var inst_11231 = inst_11248;
var inst_11232 = inst_11250;
var inst_11233 = (0);
var state_11289__$1 = (function (){var statearr_11323 = state_11289;
(statearr_11323[(13)] = inst_11230);

(statearr_11323[(14)] = inst_11233);

(statearr_11323[(15)] = inst_11231);

(statearr_11323[(16)] = inst_11232);

return statearr_11323;
})();
var statearr_11324_11359 = state_11289__$1;
(statearr_11324_11359[(2)] = null);

(statearr_11324_11359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (10))){
var inst_11230 = (state_11289[(13)]);
var inst_11233 = (state_11289[(14)]);
var inst_11231 = (state_11289[(15)]);
var inst_11232 = (state_11289[(16)]);
var inst_11238 = cljs.core._nth.call(null,inst_11231,inst_11233);
var inst_11239 = cljs.core.async.muxch_STAR_.call(null,inst_11238);
var inst_11240 = cljs.core.async.close_BANG_.call(null,inst_11239);
var inst_11241 = (inst_11233 + (1));
var tmp11319 = inst_11230;
var tmp11320 = inst_11231;
var tmp11321 = inst_11232;
var inst_11230__$1 = tmp11319;
var inst_11231__$1 = tmp11320;
var inst_11232__$1 = tmp11321;
var inst_11233__$1 = inst_11241;
var state_11289__$1 = (function (){var statearr_11325 = state_11289;
(statearr_11325[(13)] = inst_11230__$1);

(statearr_11325[(17)] = inst_11240);

(statearr_11325[(14)] = inst_11233__$1);

(statearr_11325[(15)] = inst_11231__$1);

(statearr_11325[(16)] = inst_11232__$1);

return statearr_11325;
})();
var statearr_11326_11360 = state_11289__$1;
(statearr_11326_11360[(2)] = null);

(statearr_11326_11360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (18))){
var inst_11259 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11327_11361 = state_11289__$1;
(statearr_11327_11361[(2)] = inst_11259);

(statearr_11327_11361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (8))){
var inst_11233 = (state_11289[(14)]);
var inst_11232 = (state_11289[(16)]);
var inst_11235 = (inst_11233 < inst_11232);
var inst_11236 = inst_11235;
var state_11289__$1 = state_11289;
if(cljs.core.truth_(inst_11236)){
var statearr_11328_11362 = state_11289__$1;
(statearr_11328_11362[(1)] = (10));

} else {
var statearr_11329_11363 = state_11289__$1;
(statearr_11329_11363[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11335,mults,ensure_mult,p))
;
return ((function (switch__10006__auto__,c__10101__auto___11335,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11330[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11330[(1)] = (1));

return statearr_11330;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11289){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11331){if((e11331 instanceof Object)){
var ex__10010__auto__ = e11331;
var statearr_11332_11364 = state_11289;
(statearr_11332_11364[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11365 = state_11289;
state_11289 = G__11365;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11335,mults,ensure_mult,p))
})();
var state__10103__auto__ = (function (){var statearr_11333 = f__10102__auto__.call(null);
(statearr_11333[(6)] = c__10101__auto___11335);

return statearr_11333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11335,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11367 = arguments.length;
switch (G__11367) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11370 = arguments.length;
switch (G__11370) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11373 = arguments.length;
switch (G__11373) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10101__auto___11440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11412){
var state_val_11413 = (state_11412[(1)]);
if((state_val_11413 === (7))){
var state_11412__$1 = state_11412;
var statearr_11414_11441 = state_11412__$1;
(statearr_11414_11441[(2)] = null);

(statearr_11414_11441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (1))){
var state_11412__$1 = state_11412;
var statearr_11415_11442 = state_11412__$1;
(statearr_11415_11442[(2)] = null);

(statearr_11415_11442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (4))){
var inst_11376 = (state_11412[(7)]);
var inst_11378 = (inst_11376 < cnt);
var state_11412__$1 = state_11412;
if(cljs.core.truth_(inst_11378)){
var statearr_11416_11443 = state_11412__$1;
(statearr_11416_11443[(1)] = (6));

} else {
var statearr_11417_11444 = state_11412__$1;
(statearr_11417_11444[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (15))){
var inst_11408 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11418_11445 = state_11412__$1;
(statearr_11418_11445[(2)] = inst_11408);

(statearr_11418_11445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (13))){
var inst_11401 = cljs.core.async.close_BANG_.call(null,out);
var state_11412__$1 = state_11412;
var statearr_11419_11446 = state_11412__$1;
(statearr_11419_11446[(2)] = inst_11401);

(statearr_11419_11446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (6))){
var state_11412__$1 = state_11412;
var statearr_11420_11447 = state_11412__$1;
(statearr_11420_11447[(2)] = null);

(statearr_11420_11447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (3))){
var inst_11410 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11412__$1,inst_11410);
} else {
if((state_val_11413 === (12))){
var inst_11398 = (state_11412[(8)]);
var inst_11398__$1 = (state_11412[(2)]);
var inst_11399 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11398__$1);
var state_11412__$1 = (function (){var statearr_11421 = state_11412;
(statearr_11421[(8)] = inst_11398__$1);

return statearr_11421;
})();
if(cljs.core.truth_(inst_11399)){
var statearr_11422_11448 = state_11412__$1;
(statearr_11422_11448[(1)] = (13));

} else {
var statearr_11423_11449 = state_11412__$1;
(statearr_11423_11449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (2))){
var inst_11375 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11376 = (0);
var state_11412__$1 = (function (){var statearr_11424 = state_11412;
(statearr_11424[(7)] = inst_11376);

(statearr_11424[(9)] = inst_11375);

return statearr_11424;
})();
var statearr_11425_11450 = state_11412__$1;
(statearr_11425_11450[(2)] = null);

(statearr_11425_11450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (11))){
var inst_11376 = (state_11412[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11412,(10),Object,null,(9));
var inst_11385 = chs__$1.call(null,inst_11376);
var inst_11386 = done.call(null,inst_11376);
var inst_11387 = cljs.core.async.take_BANG_.call(null,inst_11385,inst_11386);
var state_11412__$1 = state_11412;
var statearr_11426_11451 = state_11412__$1;
(statearr_11426_11451[(2)] = inst_11387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11412__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (9))){
var inst_11376 = (state_11412[(7)]);
var inst_11389 = (state_11412[(2)]);
var inst_11390 = (inst_11376 + (1));
var inst_11376__$1 = inst_11390;
var state_11412__$1 = (function (){var statearr_11427 = state_11412;
(statearr_11427[(10)] = inst_11389);

(statearr_11427[(7)] = inst_11376__$1);

return statearr_11427;
})();
var statearr_11428_11452 = state_11412__$1;
(statearr_11428_11452[(2)] = null);

(statearr_11428_11452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (5))){
var inst_11396 = (state_11412[(2)]);
var state_11412__$1 = (function (){var statearr_11429 = state_11412;
(statearr_11429[(11)] = inst_11396);

return statearr_11429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11412__$1,(12),dchan);
} else {
if((state_val_11413 === (14))){
var inst_11398 = (state_11412[(8)]);
var inst_11403 = cljs.core.apply.call(null,f,inst_11398);
var state_11412__$1 = state_11412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11412__$1,(16),out,inst_11403);
} else {
if((state_val_11413 === (16))){
var inst_11405 = (state_11412[(2)]);
var state_11412__$1 = (function (){var statearr_11430 = state_11412;
(statearr_11430[(12)] = inst_11405);

return statearr_11430;
})();
var statearr_11431_11453 = state_11412__$1;
(statearr_11431_11453[(2)] = null);

(statearr_11431_11453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (10))){
var inst_11380 = (state_11412[(2)]);
var inst_11381 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11412__$1 = (function (){var statearr_11432 = state_11412;
(statearr_11432[(13)] = inst_11380);

return statearr_11432;
})();
var statearr_11433_11454 = state_11412__$1;
(statearr_11433_11454[(2)] = inst_11381);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11412__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11413 === (8))){
var inst_11394 = (state_11412[(2)]);
var state_11412__$1 = state_11412;
var statearr_11434_11455 = state_11412__$1;
(statearr_11434_11455[(2)] = inst_11394);

(statearr_11434_11455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10006__auto__,c__10101__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11435[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11435[(1)] = (1));

return statearr_11435;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11412){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11436){if((e11436 instanceof Object)){
var ex__10010__auto__ = e11436;
var statearr_11437_11456 = state_11412;
(statearr_11437_11456[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11457 = state_11412;
state_11412 = G__11457;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10103__auto__ = (function (){var statearr_11438 = f__10102__auto__.call(null);
(statearr_11438[(6)] = c__10101__auto___11440);

return statearr_11438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11460 = arguments.length;
switch (G__11460) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10101__auto___11514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11514,out){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11514,out){
return (function (state_11492){
var state_val_11493 = (state_11492[(1)]);
if((state_val_11493 === (7))){
var inst_11472 = (state_11492[(7)]);
var inst_11471 = (state_11492[(8)]);
var inst_11471__$1 = (state_11492[(2)]);
var inst_11472__$1 = cljs.core.nth.call(null,inst_11471__$1,(0),null);
var inst_11473 = cljs.core.nth.call(null,inst_11471__$1,(1),null);
var inst_11474 = (inst_11472__$1 == null);
var state_11492__$1 = (function (){var statearr_11494 = state_11492;
(statearr_11494[(7)] = inst_11472__$1);

(statearr_11494[(8)] = inst_11471__$1);

(statearr_11494[(9)] = inst_11473);

return statearr_11494;
})();
if(cljs.core.truth_(inst_11474)){
var statearr_11495_11515 = state_11492__$1;
(statearr_11495_11515[(1)] = (8));

} else {
var statearr_11496_11516 = state_11492__$1;
(statearr_11496_11516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (1))){
var inst_11461 = cljs.core.vec.call(null,chs);
var inst_11462 = inst_11461;
var state_11492__$1 = (function (){var statearr_11497 = state_11492;
(statearr_11497[(10)] = inst_11462);

return statearr_11497;
})();
var statearr_11498_11517 = state_11492__$1;
(statearr_11498_11517[(2)] = null);

(statearr_11498_11517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (4))){
var inst_11462 = (state_11492[(10)]);
var state_11492__$1 = state_11492;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11492__$1,(7),inst_11462);
} else {
if((state_val_11493 === (6))){
var inst_11488 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11499_11518 = state_11492__$1;
(statearr_11499_11518[(2)] = inst_11488);

(statearr_11499_11518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (3))){
var inst_11490 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11492__$1,inst_11490);
} else {
if((state_val_11493 === (2))){
var inst_11462 = (state_11492[(10)]);
var inst_11464 = cljs.core.count.call(null,inst_11462);
var inst_11465 = (inst_11464 > (0));
var state_11492__$1 = state_11492;
if(cljs.core.truth_(inst_11465)){
var statearr_11501_11519 = state_11492__$1;
(statearr_11501_11519[(1)] = (4));

} else {
var statearr_11502_11520 = state_11492__$1;
(statearr_11502_11520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (11))){
var inst_11462 = (state_11492[(10)]);
var inst_11481 = (state_11492[(2)]);
var tmp11500 = inst_11462;
var inst_11462__$1 = tmp11500;
var state_11492__$1 = (function (){var statearr_11503 = state_11492;
(statearr_11503[(10)] = inst_11462__$1);

(statearr_11503[(11)] = inst_11481);

return statearr_11503;
})();
var statearr_11504_11521 = state_11492__$1;
(statearr_11504_11521[(2)] = null);

(statearr_11504_11521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (9))){
var inst_11472 = (state_11492[(7)]);
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11492__$1,(11),out,inst_11472);
} else {
if((state_val_11493 === (5))){
var inst_11486 = cljs.core.async.close_BANG_.call(null,out);
var state_11492__$1 = state_11492;
var statearr_11505_11522 = state_11492__$1;
(statearr_11505_11522[(2)] = inst_11486);

(statearr_11505_11522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (10))){
var inst_11484 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11506_11523 = state_11492__$1;
(statearr_11506_11523[(2)] = inst_11484);

(statearr_11506_11523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (8))){
var inst_11462 = (state_11492[(10)]);
var inst_11472 = (state_11492[(7)]);
var inst_11471 = (state_11492[(8)]);
var inst_11473 = (state_11492[(9)]);
var inst_11476 = (function (){var cs = inst_11462;
var vec__11467 = inst_11471;
var v = inst_11472;
var c = inst_11473;
return ((function (cs,vec__11467,v,c,inst_11462,inst_11472,inst_11471,inst_11473,state_val_11493,c__10101__auto___11514,out){
return (function (p1__11458_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11458_SHARP_);
});
;})(cs,vec__11467,v,c,inst_11462,inst_11472,inst_11471,inst_11473,state_val_11493,c__10101__auto___11514,out))
})();
var inst_11477 = cljs.core.filterv.call(null,inst_11476,inst_11462);
var inst_11462__$1 = inst_11477;
var state_11492__$1 = (function (){var statearr_11507 = state_11492;
(statearr_11507[(10)] = inst_11462__$1);

return statearr_11507;
})();
var statearr_11508_11524 = state_11492__$1;
(statearr_11508_11524[(2)] = null);

(statearr_11508_11524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11514,out))
;
return ((function (switch__10006__auto__,c__10101__auto___11514,out){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11509 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11509[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11509[(1)] = (1));

return statearr_11509;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11492){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11510){if((e11510 instanceof Object)){
var ex__10010__auto__ = e11510;
var statearr_11511_11525 = state_11492;
(statearr_11511_11525[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11526 = state_11492;
state_11492 = G__11526;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11514,out))
})();
var state__10103__auto__ = (function (){var statearr_11512 = f__10102__auto__.call(null);
(statearr_11512[(6)] = c__10101__auto___11514);

return statearr_11512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11514,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11528 = arguments.length;
switch (G__11528) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10101__auto___11573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11573,out){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11573,out){
return (function (state_11552){
var state_val_11553 = (state_11552[(1)]);
if((state_val_11553 === (7))){
var inst_11534 = (state_11552[(7)]);
var inst_11534__$1 = (state_11552[(2)]);
var inst_11535 = (inst_11534__$1 == null);
var inst_11536 = cljs.core.not.call(null,inst_11535);
var state_11552__$1 = (function (){var statearr_11554 = state_11552;
(statearr_11554[(7)] = inst_11534__$1);

return statearr_11554;
})();
if(inst_11536){
var statearr_11555_11574 = state_11552__$1;
(statearr_11555_11574[(1)] = (8));

} else {
var statearr_11556_11575 = state_11552__$1;
(statearr_11556_11575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (1))){
var inst_11529 = (0);
var state_11552__$1 = (function (){var statearr_11557 = state_11552;
(statearr_11557[(8)] = inst_11529);

return statearr_11557;
})();
var statearr_11558_11576 = state_11552__$1;
(statearr_11558_11576[(2)] = null);

(statearr_11558_11576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (4))){
var state_11552__$1 = state_11552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11552__$1,(7),ch);
} else {
if((state_val_11553 === (6))){
var inst_11547 = (state_11552[(2)]);
var state_11552__$1 = state_11552;
var statearr_11559_11577 = state_11552__$1;
(statearr_11559_11577[(2)] = inst_11547);

(statearr_11559_11577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (3))){
var inst_11549 = (state_11552[(2)]);
var inst_11550 = cljs.core.async.close_BANG_.call(null,out);
var state_11552__$1 = (function (){var statearr_11560 = state_11552;
(statearr_11560[(9)] = inst_11549);

return statearr_11560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11552__$1,inst_11550);
} else {
if((state_val_11553 === (2))){
var inst_11529 = (state_11552[(8)]);
var inst_11531 = (inst_11529 < n);
var state_11552__$1 = state_11552;
if(cljs.core.truth_(inst_11531)){
var statearr_11561_11578 = state_11552__$1;
(statearr_11561_11578[(1)] = (4));

} else {
var statearr_11562_11579 = state_11552__$1;
(statearr_11562_11579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (11))){
var inst_11529 = (state_11552[(8)]);
var inst_11539 = (state_11552[(2)]);
var inst_11540 = (inst_11529 + (1));
var inst_11529__$1 = inst_11540;
var state_11552__$1 = (function (){var statearr_11563 = state_11552;
(statearr_11563[(10)] = inst_11539);

(statearr_11563[(8)] = inst_11529__$1);

return statearr_11563;
})();
var statearr_11564_11580 = state_11552__$1;
(statearr_11564_11580[(2)] = null);

(statearr_11564_11580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (9))){
var state_11552__$1 = state_11552;
var statearr_11565_11581 = state_11552__$1;
(statearr_11565_11581[(2)] = null);

(statearr_11565_11581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (5))){
var state_11552__$1 = state_11552;
var statearr_11566_11582 = state_11552__$1;
(statearr_11566_11582[(2)] = null);

(statearr_11566_11582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (10))){
var inst_11544 = (state_11552[(2)]);
var state_11552__$1 = state_11552;
var statearr_11567_11583 = state_11552__$1;
(statearr_11567_11583[(2)] = inst_11544);

(statearr_11567_11583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (8))){
var inst_11534 = (state_11552[(7)]);
var state_11552__$1 = state_11552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11552__$1,(11),out,inst_11534);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11573,out))
;
return ((function (switch__10006__auto__,c__10101__auto___11573,out){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11568[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11568[(1)] = (1));

return statearr_11568;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11552){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11569){if((e11569 instanceof Object)){
var ex__10010__auto__ = e11569;
var statearr_11570_11584 = state_11552;
(statearr_11570_11584[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11585 = state_11552;
state_11552 = G__11585;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11573,out))
})();
var state__10103__auto__ = (function (){var statearr_11571 = f__10102__auto__.call(null);
(statearr_11571[(6)] = c__10101__auto___11573);

return statearr_11571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11573,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11587 = (function (f,ch,meta11588){
this.f = f;
this.ch = ch;
this.meta11588 = meta11588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11589,meta11588__$1){
var self__ = this;
var _11589__$1 = this;
return (new cljs.core.async.t_cljs$core$async11587(self__.f,self__.ch,meta11588__$1));
});

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11589){
var self__ = this;
var _11589__$1 = this;
return self__.meta11588;
});

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11590 = (function (f,ch,meta11588,_,fn1,meta11591){
this.f = f;
this.ch = ch;
this.meta11588 = meta11588;
this._ = _;
this.fn1 = fn1;
this.meta11591 = meta11591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11592,meta11591__$1){
var self__ = this;
var _11592__$1 = this;
return (new cljs.core.async.t_cljs$core$async11590(self__.f,self__.ch,self__.meta11588,self__._,self__.fn1,meta11591__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11592){
var self__ = this;
var _11592__$1 = this;
return self__.meta11591;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11586_SHARP_){
return f1.call(null,(((p1__11586_SHARP_ == null))?null:self__.f.call(null,p1__11586_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11590.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11588","meta11588",954539393,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11587","cljs.core.async/t_cljs$core$async11587",1036014956,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11591","meta11591",-512795012,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11590";

cljs.core.async.t_cljs$core$async11590.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11590");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11590.
 */
cljs.core.async.__GT_t_cljs$core$async11590 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11590(f__$1,ch__$1,meta11588__$1,___$2,fn1__$1,meta11591){
return (new cljs.core.async.t_cljs$core$async11590(f__$1,ch__$1,meta11588__$1,___$2,fn1__$1,meta11591));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11590(self__.f,self__.ch,self__.meta11588,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11588","meta11588",954539393,null)], null);
});

cljs.core.async.t_cljs$core$async11587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11587";

cljs.core.async.t_cljs$core$async11587.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11587");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11587.
 */
cljs.core.async.__GT_t_cljs$core$async11587 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11587(f__$1,ch__$1,meta11588){
return (new cljs.core.async.t_cljs$core$async11587(f__$1,ch__$1,meta11588));
});

}

return (new cljs.core.async.t_cljs$core$async11587(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11593 = (function (f,ch,meta11594){
this.f = f;
this.ch = ch;
this.meta11594 = meta11594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11595,meta11594__$1){
var self__ = this;
var _11595__$1 = this;
return (new cljs.core.async.t_cljs$core$async11593(self__.f,self__.ch,meta11594__$1));
});

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11595){
var self__ = this;
var _11595__$1 = this;
return self__.meta11594;
});

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11594","meta11594",-1877342575,null)], null);
});

cljs.core.async.t_cljs$core$async11593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11593";

cljs.core.async.t_cljs$core$async11593.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11593");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11593.
 */
cljs.core.async.__GT_t_cljs$core$async11593 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11593(f__$1,ch__$1,meta11594){
return (new cljs.core.async.t_cljs$core$async11593(f__$1,ch__$1,meta11594));
});

}

return (new cljs.core.async.t_cljs$core$async11593(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11596 = (function (p,ch,meta11597){
this.p = p;
this.ch = ch;
this.meta11597 = meta11597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11598,meta11597__$1){
var self__ = this;
var _11598__$1 = this;
return (new cljs.core.async.t_cljs$core$async11596(self__.p,self__.ch,meta11597__$1));
});

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11598){
var self__ = this;
var _11598__$1 = this;
return self__.meta11597;
});

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11597","meta11597",-957128510,null)], null);
});

cljs.core.async.t_cljs$core$async11596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11596";

cljs.core.async.t_cljs$core$async11596.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async11596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11596.
 */
cljs.core.async.__GT_t_cljs$core$async11596 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11596(p__$1,ch__$1,meta11597){
return (new cljs.core.async.t_cljs$core$async11596(p__$1,ch__$1,meta11597));
});

}

return (new cljs.core.async.t_cljs$core$async11596(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11600 = arguments.length;
switch (G__11600) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10101__auto___11640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11640,out){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11640,out){
return (function (state_11621){
var state_val_11622 = (state_11621[(1)]);
if((state_val_11622 === (7))){
var inst_11617 = (state_11621[(2)]);
var state_11621__$1 = state_11621;
var statearr_11623_11641 = state_11621__$1;
(statearr_11623_11641[(2)] = inst_11617);

(statearr_11623_11641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (1))){
var state_11621__$1 = state_11621;
var statearr_11624_11642 = state_11621__$1;
(statearr_11624_11642[(2)] = null);

(statearr_11624_11642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (4))){
var inst_11603 = (state_11621[(7)]);
var inst_11603__$1 = (state_11621[(2)]);
var inst_11604 = (inst_11603__$1 == null);
var state_11621__$1 = (function (){var statearr_11625 = state_11621;
(statearr_11625[(7)] = inst_11603__$1);

return statearr_11625;
})();
if(cljs.core.truth_(inst_11604)){
var statearr_11626_11643 = state_11621__$1;
(statearr_11626_11643[(1)] = (5));

} else {
var statearr_11627_11644 = state_11621__$1;
(statearr_11627_11644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (6))){
var inst_11603 = (state_11621[(7)]);
var inst_11608 = p.call(null,inst_11603);
var state_11621__$1 = state_11621;
if(cljs.core.truth_(inst_11608)){
var statearr_11628_11645 = state_11621__$1;
(statearr_11628_11645[(1)] = (8));

} else {
var statearr_11629_11646 = state_11621__$1;
(statearr_11629_11646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (3))){
var inst_11619 = (state_11621[(2)]);
var state_11621__$1 = state_11621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11621__$1,inst_11619);
} else {
if((state_val_11622 === (2))){
var state_11621__$1 = state_11621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11621__$1,(4),ch);
} else {
if((state_val_11622 === (11))){
var inst_11611 = (state_11621[(2)]);
var state_11621__$1 = state_11621;
var statearr_11630_11647 = state_11621__$1;
(statearr_11630_11647[(2)] = inst_11611);

(statearr_11630_11647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (9))){
var state_11621__$1 = state_11621;
var statearr_11631_11648 = state_11621__$1;
(statearr_11631_11648[(2)] = null);

(statearr_11631_11648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (5))){
var inst_11606 = cljs.core.async.close_BANG_.call(null,out);
var state_11621__$1 = state_11621;
var statearr_11632_11649 = state_11621__$1;
(statearr_11632_11649[(2)] = inst_11606);

(statearr_11632_11649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (10))){
var inst_11614 = (state_11621[(2)]);
var state_11621__$1 = (function (){var statearr_11633 = state_11621;
(statearr_11633[(8)] = inst_11614);

return statearr_11633;
})();
var statearr_11634_11650 = state_11621__$1;
(statearr_11634_11650[(2)] = null);

(statearr_11634_11650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11622 === (8))){
var inst_11603 = (state_11621[(7)]);
var state_11621__$1 = state_11621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11621__$1,(11),out,inst_11603);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11640,out))
;
return ((function (switch__10006__auto__,c__10101__auto___11640,out){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11635 = [null,null,null,null,null,null,null,null,null];
(statearr_11635[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11635[(1)] = (1));

return statearr_11635;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11621){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11636){if((e11636 instanceof Object)){
var ex__10010__auto__ = e11636;
var statearr_11637_11651 = state_11621;
(statearr_11637_11651[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11652 = state_11621;
state_11621 = G__11652;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11640,out))
})();
var state__10103__auto__ = (function (){var statearr_11638 = f__10102__auto__.call(null);
(statearr_11638[(6)] = c__10101__auto___11640);

return statearr_11638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11640,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11654 = arguments.length;
switch (G__11654) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto__){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto__){
return (function (state_11717){
var state_val_11718 = (state_11717[(1)]);
if((state_val_11718 === (7))){
var inst_11713 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
var statearr_11719_11757 = state_11717__$1;
(statearr_11719_11757[(2)] = inst_11713);

(statearr_11719_11757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (20))){
var inst_11683 = (state_11717[(7)]);
var inst_11694 = (state_11717[(2)]);
var inst_11695 = cljs.core.next.call(null,inst_11683);
var inst_11669 = inst_11695;
var inst_11670 = null;
var inst_11671 = (0);
var inst_11672 = (0);
var state_11717__$1 = (function (){var statearr_11720 = state_11717;
(statearr_11720[(8)] = inst_11670);

(statearr_11720[(9)] = inst_11672);

(statearr_11720[(10)] = inst_11694);

(statearr_11720[(11)] = inst_11671);

(statearr_11720[(12)] = inst_11669);

return statearr_11720;
})();
var statearr_11721_11758 = state_11717__$1;
(statearr_11721_11758[(2)] = null);

(statearr_11721_11758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (1))){
var state_11717__$1 = state_11717;
var statearr_11722_11759 = state_11717__$1;
(statearr_11722_11759[(2)] = null);

(statearr_11722_11759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (4))){
var inst_11658 = (state_11717[(13)]);
var inst_11658__$1 = (state_11717[(2)]);
var inst_11659 = (inst_11658__$1 == null);
var state_11717__$1 = (function (){var statearr_11723 = state_11717;
(statearr_11723[(13)] = inst_11658__$1);

return statearr_11723;
})();
if(cljs.core.truth_(inst_11659)){
var statearr_11724_11760 = state_11717__$1;
(statearr_11724_11760[(1)] = (5));

} else {
var statearr_11725_11761 = state_11717__$1;
(statearr_11725_11761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (15))){
var state_11717__$1 = state_11717;
var statearr_11729_11762 = state_11717__$1;
(statearr_11729_11762[(2)] = null);

(statearr_11729_11762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (21))){
var state_11717__$1 = state_11717;
var statearr_11730_11763 = state_11717__$1;
(statearr_11730_11763[(2)] = null);

(statearr_11730_11763[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (13))){
var inst_11670 = (state_11717[(8)]);
var inst_11672 = (state_11717[(9)]);
var inst_11671 = (state_11717[(11)]);
var inst_11669 = (state_11717[(12)]);
var inst_11679 = (state_11717[(2)]);
var inst_11680 = (inst_11672 + (1));
var tmp11726 = inst_11670;
var tmp11727 = inst_11671;
var tmp11728 = inst_11669;
var inst_11669__$1 = tmp11728;
var inst_11670__$1 = tmp11726;
var inst_11671__$1 = tmp11727;
var inst_11672__$1 = inst_11680;
var state_11717__$1 = (function (){var statearr_11731 = state_11717;
(statearr_11731[(8)] = inst_11670__$1);

(statearr_11731[(9)] = inst_11672__$1);

(statearr_11731[(11)] = inst_11671__$1);

(statearr_11731[(12)] = inst_11669__$1);

(statearr_11731[(14)] = inst_11679);

return statearr_11731;
})();
var statearr_11732_11764 = state_11717__$1;
(statearr_11732_11764[(2)] = null);

(statearr_11732_11764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (22))){
var state_11717__$1 = state_11717;
var statearr_11733_11765 = state_11717__$1;
(statearr_11733_11765[(2)] = null);

(statearr_11733_11765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (6))){
var inst_11658 = (state_11717[(13)]);
var inst_11667 = f.call(null,inst_11658);
var inst_11668 = cljs.core.seq.call(null,inst_11667);
var inst_11669 = inst_11668;
var inst_11670 = null;
var inst_11671 = (0);
var inst_11672 = (0);
var state_11717__$1 = (function (){var statearr_11734 = state_11717;
(statearr_11734[(8)] = inst_11670);

(statearr_11734[(9)] = inst_11672);

(statearr_11734[(11)] = inst_11671);

(statearr_11734[(12)] = inst_11669);

return statearr_11734;
})();
var statearr_11735_11766 = state_11717__$1;
(statearr_11735_11766[(2)] = null);

(statearr_11735_11766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (17))){
var inst_11683 = (state_11717[(7)]);
var inst_11687 = cljs.core.chunk_first.call(null,inst_11683);
var inst_11688 = cljs.core.chunk_rest.call(null,inst_11683);
var inst_11689 = cljs.core.count.call(null,inst_11687);
var inst_11669 = inst_11688;
var inst_11670 = inst_11687;
var inst_11671 = inst_11689;
var inst_11672 = (0);
var state_11717__$1 = (function (){var statearr_11736 = state_11717;
(statearr_11736[(8)] = inst_11670);

(statearr_11736[(9)] = inst_11672);

(statearr_11736[(11)] = inst_11671);

(statearr_11736[(12)] = inst_11669);

return statearr_11736;
})();
var statearr_11737_11767 = state_11717__$1;
(statearr_11737_11767[(2)] = null);

(statearr_11737_11767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (3))){
var inst_11715 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11717__$1,inst_11715);
} else {
if((state_val_11718 === (12))){
var inst_11703 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
var statearr_11738_11768 = state_11717__$1;
(statearr_11738_11768[(2)] = inst_11703);

(statearr_11738_11768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (2))){
var state_11717__$1 = state_11717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11717__$1,(4),in$);
} else {
if((state_val_11718 === (23))){
var inst_11711 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
var statearr_11739_11769 = state_11717__$1;
(statearr_11739_11769[(2)] = inst_11711);

(statearr_11739_11769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (19))){
var inst_11698 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
var statearr_11740_11770 = state_11717__$1;
(statearr_11740_11770[(2)] = inst_11698);

(statearr_11740_11770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (11))){
var inst_11669 = (state_11717[(12)]);
var inst_11683 = (state_11717[(7)]);
var inst_11683__$1 = cljs.core.seq.call(null,inst_11669);
var state_11717__$1 = (function (){var statearr_11741 = state_11717;
(statearr_11741[(7)] = inst_11683__$1);

return statearr_11741;
})();
if(inst_11683__$1){
var statearr_11742_11771 = state_11717__$1;
(statearr_11742_11771[(1)] = (14));

} else {
var statearr_11743_11772 = state_11717__$1;
(statearr_11743_11772[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (9))){
var inst_11705 = (state_11717[(2)]);
var inst_11706 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11717__$1 = (function (){var statearr_11744 = state_11717;
(statearr_11744[(15)] = inst_11705);

return statearr_11744;
})();
if(cljs.core.truth_(inst_11706)){
var statearr_11745_11773 = state_11717__$1;
(statearr_11745_11773[(1)] = (21));

} else {
var statearr_11746_11774 = state_11717__$1;
(statearr_11746_11774[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (5))){
var inst_11661 = cljs.core.async.close_BANG_.call(null,out);
var state_11717__$1 = state_11717;
var statearr_11747_11775 = state_11717__$1;
(statearr_11747_11775[(2)] = inst_11661);

(statearr_11747_11775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (14))){
var inst_11683 = (state_11717[(7)]);
var inst_11685 = cljs.core.chunked_seq_QMARK_.call(null,inst_11683);
var state_11717__$1 = state_11717;
if(inst_11685){
var statearr_11748_11776 = state_11717__$1;
(statearr_11748_11776[(1)] = (17));

} else {
var statearr_11749_11777 = state_11717__$1;
(statearr_11749_11777[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (16))){
var inst_11701 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
var statearr_11750_11778 = state_11717__$1;
(statearr_11750_11778[(2)] = inst_11701);

(statearr_11750_11778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (10))){
var inst_11670 = (state_11717[(8)]);
var inst_11672 = (state_11717[(9)]);
var inst_11677 = cljs.core._nth.call(null,inst_11670,inst_11672);
var state_11717__$1 = state_11717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11717__$1,(13),out,inst_11677);
} else {
if((state_val_11718 === (18))){
var inst_11683 = (state_11717[(7)]);
var inst_11692 = cljs.core.first.call(null,inst_11683);
var state_11717__$1 = state_11717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11717__$1,(20),out,inst_11692);
} else {
if((state_val_11718 === (8))){
var inst_11672 = (state_11717[(9)]);
var inst_11671 = (state_11717[(11)]);
var inst_11674 = (inst_11672 < inst_11671);
var inst_11675 = inst_11674;
var state_11717__$1 = state_11717;
if(cljs.core.truth_(inst_11675)){
var statearr_11751_11779 = state_11717__$1;
(statearr_11751_11779[(1)] = (10));

} else {
var statearr_11752_11780 = state_11717__$1;
(statearr_11752_11780[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto__))
;
return ((function (switch__10006__auto__,c__10101__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10007__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10007__auto____0 = (function (){
var statearr_11753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11753[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10007__auto__);

(statearr_11753[(1)] = (1));

return statearr_11753;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10007__auto____1 = (function (state_11717){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11754){if((e11754 instanceof Object)){
var ex__10010__auto__ = e11754;
var statearr_11755_11781 = state_11717;
(statearr_11755_11781[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11782 = state_11717;
state_11717 = G__11782;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10007__auto__ = function(state_11717){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10007__auto____1.call(this,state_11717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10007__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10007__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto__))
})();
var state__10103__auto__ = (function (){var statearr_11756 = f__10102__auto__.call(null);
(statearr_11756[(6)] = c__10101__auto__);

return statearr_11756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto__))
);

return c__10101__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11784 = arguments.length;
switch (G__11784) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__11787 = arguments.length;
switch (G__11787) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__11790 = arguments.length;
switch (G__11790) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10101__auto___11837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11837,out){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11837,out){
return (function (state_11814){
var state_val_11815 = (state_11814[(1)]);
if((state_val_11815 === (7))){
var inst_11809 = (state_11814[(2)]);
var state_11814__$1 = state_11814;
var statearr_11816_11838 = state_11814__$1;
(statearr_11816_11838[(2)] = inst_11809);

(statearr_11816_11838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (1))){
var inst_11791 = null;
var state_11814__$1 = (function (){var statearr_11817 = state_11814;
(statearr_11817[(7)] = inst_11791);

return statearr_11817;
})();
var statearr_11818_11839 = state_11814__$1;
(statearr_11818_11839[(2)] = null);

(statearr_11818_11839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (4))){
var inst_11794 = (state_11814[(8)]);
var inst_11794__$1 = (state_11814[(2)]);
var inst_11795 = (inst_11794__$1 == null);
var inst_11796 = cljs.core.not.call(null,inst_11795);
var state_11814__$1 = (function (){var statearr_11819 = state_11814;
(statearr_11819[(8)] = inst_11794__$1);

return statearr_11819;
})();
if(inst_11796){
var statearr_11820_11840 = state_11814__$1;
(statearr_11820_11840[(1)] = (5));

} else {
var statearr_11821_11841 = state_11814__$1;
(statearr_11821_11841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (6))){
var state_11814__$1 = state_11814;
var statearr_11822_11842 = state_11814__$1;
(statearr_11822_11842[(2)] = null);

(statearr_11822_11842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (3))){
var inst_11811 = (state_11814[(2)]);
var inst_11812 = cljs.core.async.close_BANG_.call(null,out);
var state_11814__$1 = (function (){var statearr_11823 = state_11814;
(statearr_11823[(9)] = inst_11811);

return statearr_11823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11814__$1,inst_11812);
} else {
if((state_val_11815 === (2))){
var state_11814__$1 = state_11814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11814__$1,(4),ch);
} else {
if((state_val_11815 === (11))){
var inst_11794 = (state_11814[(8)]);
var inst_11803 = (state_11814[(2)]);
var inst_11791 = inst_11794;
var state_11814__$1 = (function (){var statearr_11824 = state_11814;
(statearr_11824[(7)] = inst_11791);

(statearr_11824[(10)] = inst_11803);

return statearr_11824;
})();
var statearr_11825_11843 = state_11814__$1;
(statearr_11825_11843[(2)] = null);

(statearr_11825_11843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (9))){
var inst_11794 = (state_11814[(8)]);
var state_11814__$1 = state_11814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11814__$1,(11),out,inst_11794);
} else {
if((state_val_11815 === (5))){
var inst_11791 = (state_11814[(7)]);
var inst_11794 = (state_11814[(8)]);
var inst_11798 = cljs.core._EQ_.call(null,inst_11794,inst_11791);
var state_11814__$1 = state_11814;
if(inst_11798){
var statearr_11827_11844 = state_11814__$1;
(statearr_11827_11844[(1)] = (8));

} else {
var statearr_11828_11845 = state_11814__$1;
(statearr_11828_11845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (10))){
var inst_11806 = (state_11814[(2)]);
var state_11814__$1 = state_11814;
var statearr_11829_11846 = state_11814__$1;
(statearr_11829_11846[(2)] = inst_11806);

(statearr_11829_11846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11815 === (8))){
var inst_11791 = (state_11814[(7)]);
var tmp11826 = inst_11791;
var inst_11791__$1 = tmp11826;
var state_11814__$1 = (function (){var statearr_11830 = state_11814;
(statearr_11830[(7)] = inst_11791__$1);

return statearr_11830;
})();
var statearr_11831_11847 = state_11814__$1;
(statearr_11831_11847[(2)] = null);

(statearr_11831_11847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11837,out))
;
return ((function (switch__10006__auto__,c__10101__auto___11837,out){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11832[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11832[(1)] = (1));

return statearr_11832;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11814){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11833){if((e11833 instanceof Object)){
var ex__10010__auto__ = e11833;
var statearr_11834_11848 = state_11814;
(statearr_11834_11848[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11849 = state_11814;
state_11814 = G__11849;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11837,out))
})();
var state__10103__auto__ = (function (){var statearr_11835 = f__10102__auto__.call(null);
(statearr_11835[(6)] = c__10101__auto___11837);

return statearr_11835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11837,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11851 = arguments.length;
switch (G__11851) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10101__auto___11917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___11917,out){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___11917,out){
return (function (state_11889){
var state_val_11890 = (state_11889[(1)]);
if((state_val_11890 === (7))){
var inst_11885 = (state_11889[(2)]);
var state_11889__$1 = state_11889;
var statearr_11891_11918 = state_11889__$1;
(statearr_11891_11918[(2)] = inst_11885);

(statearr_11891_11918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (1))){
var inst_11852 = (new Array(n));
var inst_11853 = inst_11852;
var inst_11854 = (0);
var state_11889__$1 = (function (){var statearr_11892 = state_11889;
(statearr_11892[(7)] = inst_11853);

(statearr_11892[(8)] = inst_11854);

return statearr_11892;
})();
var statearr_11893_11919 = state_11889__$1;
(statearr_11893_11919[(2)] = null);

(statearr_11893_11919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (4))){
var inst_11857 = (state_11889[(9)]);
var inst_11857__$1 = (state_11889[(2)]);
var inst_11858 = (inst_11857__$1 == null);
var inst_11859 = cljs.core.not.call(null,inst_11858);
var state_11889__$1 = (function (){var statearr_11894 = state_11889;
(statearr_11894[(9)] = inst_11857__$1);

return statearr_11894;
})();
if(inst_11859){
var statearr_11895_11920 = state_11889__$1;
(statearr_11895_11920[(1)] = (5));

} else {
var statearr_11896_11921 = state_11889__$1;
(statearr_11896_11921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (15))){
var inst_11879 = (state_11889[(2)]);
var state_11889__$1 = state_11889;
var statearr_11897_11922 = state_11889__$1;
(statearr_11897_11922[(2)] = inst_11879);

(statearr_11897_11922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (13))){
var state_11889__$1 = state_11889;
var statearr_11898_11923 = state_11889__$1;
(statearr_11898_11923[(2)] = null);

(statearr_11898_11923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (6))){
var inst_11854 = (state_11889[(8)]);
var inst_11875 = (inst_11854 > (0));
var state_11889__$1 = state_11889;
if(cljs.core.truth_(inst_11875)){
var statearr_11899_11924 = state_11889__$1;
(statearr_11899_11924[(1)] = (12));

} else {
var statearr_11900_11925 = state_11889__$1;
(statearr_11900_11925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (3))){
var inst_11887 = (state_11889[(2)]);
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11889__$1,inst_11887);
} else {
if((state_val_11890 === (12))){
var inst_11853 = (state_11889[(7)]);
var inst_11877 = cljs.core.vec.call(null,inst_11853);
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11889__$1,(15),out,inst_11877);
} else {
if((state_val_11890 === (2))){
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11889__$1,(4),ch);
} else {
if((state_val_11890 === (11))){
var inst_11869 = (state_11889[(2)]);
var inst_11870 = (new Array(n));
var inst_11853 = inst_11870;
var inst_11854 = (0);
var state_11889__$1 = (function (){var statearr_11901 = state_11889;
(statearr_11901[(7)] = inst_11853);

(statearr_11901[(10)] = inst_11869);

(statearr_11901[(8)] = inst_11854);

return statearr_11901;
})();
var statearr_11902_11926 = state_11889__$1;
(statearr_11902_11926[(2)] = null);

(statearr_11902_11926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (9))){
var inst_11853 = (state_11889[(7)]);
var inst_11867 = cljs.core.vec.call(null,inst_11853);
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11889__$1,(11),out,inst_11867);
} else {
if((state_val_11890 === (5))){
var inst_11853 = (state_11889[(7)]);
var inst_11857 = (state_11889[(9)]);
var inst_11862 = (state_11889[(11)]);
var inst_11854 = (state_11889[(8)]);
var inst_11861 = (inst_11853[inst_11854] = inst_11857);
var inst_11862__$1 = (inst_11854 + (1));
var inst_11863 = (inst_11862__$1 < n);
var state_11889__$1 = (function (){var statearr_11903 = state_11889;
(statearr_11903[(12)] = inst_11861);

(statearr_11903[(11)] = inst_11862__$1);

return statearr_11903;
})();
if(cljs.core.truth_(inst_11863)){
var statearr_11904_11927 = state_11889__$1;
(statearr_11904_11927[(1)] = (8));

} else {
var statearr_11905_11928 = state_11889__$1;
(statearr_11905_11928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (14))){
var inst_11882 = (state_11889[(2)]);
var inst_11883 = cljs.core.async.close_BANG_.call(null,out);
var state_11889__$1 = (function (){var statearr_11907 = state_11889;
(statearr_11907[(13)] = inst_11882);

return statearr_11907;
})();
var statearr_11908_11929 = state_11889__$1;
(statearr_11908_11929[(2)] = inst_11883);

(statearr_11908_11929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (10))){
var inst_11873 = (state_11889[(2)]);
var state_11889__$1 = state_11889;
var statearr_11909_11930 = state_11889__$1;
(statearr_11909_11930[(2)] = inst_11873);

(statearr_11909_11930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (8))){
var inst_11853 = (state_11889[(7)]);
var inst_11862 = (state_11889[(11)]);
var tmp11906 = inst_11853;
var inst_11853__$1 = tmp11906;
var inst_11854 = inst_11862;
var state_11889__$1 = (function (){var statearr_11910 = state_11889;
(statearr_11910[(7)] = inst_11853__$1);

(statearr_11910[(8)] = inst_11854);

return statearr_11910;
})();
var statearr_11911_11931 = state_11889__$1;
(statearr_11911_11931[(2)] = null);

(statearr_11911_11931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___11917,out))
;
return ((function (switch__10006__auto__,c__10101__auto___11917,out){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_11912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11912[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_11912[(1)] = (1));

return statearr_11912;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11889){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e11913){if((e11913 instanceof Object)){
var ex__10010__auto__ = e11913;
var statearr_11914_11932 = state_11889;
(statearr_11914_11932[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11933 = state_11889;
state_11889 = G__11933;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___11917,out))
})();
var state__10103__auto__ = (function (){var statearr_11915 = f__10102__auto__.call(null);
(statearr_11915[(6)] = c__10101__auto___11917);

return statearr_11915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___11917,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11935 = arguments.length;
switch (G__11935) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10101__auto___12005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10101__auto___12005,out){
return (function (){
var f__10102__auto__ = (function (){var switch__10006__auto__ = ((function (c__10101__auto___12005,out){
return (function (state_11977){
var state_val_11978 = (state_11977[(1)]);
if((state_val_11978 === (7))){
var inst_11973 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11979_12006 = state_11977__$1;
(statearr_11979_12006[(2)] = inst_11973);

(statearr_11979_12006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (1))){
var inst_11936 = [];
var inst_11937 = inst_11936;
var inst_11938 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11977__$1 = (function (){var statearr_11980 = state_11977;
(statearr_11980[(7)] = inst_11937);

(statearr_11980[(8)] = inst_11938);

return statearr_11980;
})();
var statearr_11981_12007 = state_11977__$1;
(statearr_11981_12007[(2)] = null);

(statearr_11981_12007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (4))){
var inst_11941 = (state_11977[(9)]);
var inst_11941__$1 = (state_11977[(2)]);
var inst_11942 = (inst_11941__$1 == null);
var inst_11943 = cljs.core.not.call(null,inst_11942);
var state_11977__$1 = (function (){var statearr_11982 = state_11977;
(statearr_11982[(9)] = inst_11941__$1);

return statearr_11982;
})();
if(inst_11943){
var statearr_11983_12008 = state_11977__$1;
(statearr_11983_12008[(1)] = (5));

} else {
var statearr_11984_12009 = state_11977__$1;
(statearr_11984_12009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (15))){
var inst_11967 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11985_12010 = state_11977__$1;
(statearr_11985_12010[(2)] = inst_11967);

(statearr_11985_12010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (13))){
var state_11977__$1 = state_11977;
var statearr_11986_12011 = state_11977__$1;
(statearr_11986_12011[(2)] = null);

(statearr_11986_12011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (6))){
var inst_11937 = (state_11977[(7)]);
var inst_11962 = inst_11937.length;
var inst_11963 = (inst_11962 > (0));
var state_11977__$1 = state_11977;
if(cljs.core.truth_(inst_11963)){
var statearr_11987_12012 = state_11977__$1;
(statearr_11987_12012[(1)] = (12));

} else {
var statearr_11988_12013 = state_11977__$1;
(statearr_11988_12013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (3))){
var inst_11975 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11977__$1,inst_11975);
} else {
if((state_val_11978 === (12))){
var inst_11937 = (state_11977[(7)]);
var inst_11965 = cljs.core.vec.call(null,inst_11937);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,(15),out,inst_11965);
} else {
if((state_val_11978 === (2))){
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11977__$1,(4),ch);
} else {
if((state_val_11978 === (11))){
var inst_11941 = (state_11977[(9)]);
var inst_11945 = (state_11977[(10)]);
var inst_11955 = (state_11977[(2)]);
var inst_11956 = [];
var inst_11957 = inst_11956.push(inst_11941);
var inst_11937 = inst_11956;
var inst_11938 = inst_11945;
var state_11977__$1 = (function (){var statearr_11989 = state_11977;
(statearr_11989[(11)] = inst_11957);

(statearr_11989[(7)] = inst_11937);

(statearr_11989[(12)] = inst_11955);

(statearr_11989[(8)] = inst_11938);

return statearr_11989;
})();
var statearr_11990_12014 = state_11977__$1;
(statearr_11990_12014[(2)] = null);

(statearr_11990_12014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (9))){
var inst_11937 = (state_11977[(7)]);
var inst_11953 = cljs.core.vec.call(null,inst_11937);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,(11),out,inst_11953);
} else {
if((state_val_11978 === (5))){
var inst_11941 = (state_11977[(9)]);
var inst_11945 = (state_11977[(10)]);
var inst_11938 = (state_11977[(8)]);
var inst_11945__$1 = f.call(null,inst_11941);
var inst_11946 = cljs.core._EQ_.call(null,inst_11945__$1,inst_11938);
var inst_11947 = cljs.core.keyword_identical_QMARK_.call(null,inst_11938,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11948 = ((inst_11946) || (inst_11947));
var state_11977__$1 = (function (){var statearr_11991 = state_11977;
(statearr_11991[(10)] = inst_11945__$1);

return statearr_11991;
})();
if(cljs.core.truth_(inst_11948)){
var statearr_11992_12015 = state_11977__$1;
(statearr_11992_12015[(1)] = (8));

} else {
var statearr_11993_12016 = state_11977__$1;
(statearr_11993_12016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (14))){
var inst_11970 = (state_11977[(2)]);
var inst_11971 = cljs.core.async.close_BANG_.call(null,out);
var state_11977__$1 = (function (){var statearr_11995 = state_11977;
(statearr_11995[(13)] = inst_11970);

return statearr_11995;
})();
var statearr_11996_12017 = state_11977__$1;
(statearr_11996_12017[(2)] = inst_11971);

(statearr_11996_12017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (10))){
var inst_11960 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11997_12018 = state_11977__$1;
(statearr_11997_12018[(2)] = inst_11960);

(statearr_11997_12018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (8))){
var inst_11937 = (state_11977[(7)]);
var inst_11941 = (state_11977[(9)]);
var inst_11945 = (state_11977[(10)]);
var inst_11950 = inst_11937.push(inst_11941);
var tmp11994 = inst_11937;
var inst_11937__$1 = tmp11994;
var inst_11938 = inst_11945;
var state_11977__$1 = (function (){var statearr_11998 = state_11977;
(statearr_11998[(7)] = inst_11937__$1);

(statearr_11998[(14)] = inst_11950);

(statearr_11998[(8)] = inst_11938);

return statearr_11998;
})();
var statearr_11999_12019 = state_11977__$1;
(statearr_11999_12019[(2)] = null);

(statearr_11999_12019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10101__auto___12005,out))
;
return ((function (switch__10006__auto__,c__10101__auto___12005,out){
return (function() {
var cljs$core$async$state_machine__10007__auto__ = null;
var cljs$core$async$state_machine__10007__auto____0 = (function (){
var statearr_12000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12000[(0)] = cljs$core$async$state_machine__10007__auto__);

(statearr_12000[(1)] = (1));

return statearr_12000;
});
var cljs$core$async$state_machine__10007__auto____1 = (function (state_11977){
while(true){
var ret_value__10008__auto__ = (function (){try{while(true){
var result__10009__auto__ = switch__10006__auto__.call(null,state_11977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10009__auto__;
}
break;
}
}catch (e12001){if((e12001 instanceof Object)){
var ex__10010__auto__ = e12001;
var statearr_12002_12020 = state_11977;
(statearr_12002_12020[(5)] = ex__10010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12021 = state_11977;
state_11977 = G__12021;
continue;
} else {
return ret_value__10008__auto__;
}
break;
}
});
cljs$core$async$state_machine__10007__auto__ = function(state_11977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10007__auto____1.call(this,state_11977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10007__auto____0;
cljs$core$async$state_machine__10007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10007__auto____1;
return cljs$core$async$state_machine__10007__auto__;
})()
;})(switch__10006__auto__,c__10101__auto___12005,out))
})();
var state__10103__auto__ = (function (){var statearr_12003 = f__10102__auto__.call(null);
(statearr_12003[(6)] = c__10101__auto___12005);

return statearr_12003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10103__auto__);
});})(c__10101__auto___12005,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
