// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21623 = [];
var len__17843__auto___21629 = arguments.length;
var i__17844__auto___21630 = (0);
while(true){
if((i__17844__auto___21630 < len__17843__auto___21629)){
args21623.push((arguments[i__17844__auto___21630]));

var G__21631 = (i__17844__auto___21630 + (1));
i__17844__auto___21630 = G__21631;
continue;
} else {
}
break;
}

var G__21625 = args21623.length;
switch (G__21625) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21623.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21626 = (function (f,blockable,meta21627){
this.f = f;
this.blockable = blockable;
this.meta21627 = meta21627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21628,meta21627__$1){
var self__ = this;
var _21628__$1 = this;
return (new cljs.core.async.t_cljs$core$async21626(self__.f,self__.blockable,meta21627__$1));
});

cljs.core.async.t_cljs$core$async21626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21628){
var self__ = this;
var _21628__$1 = this;
return self__.meta21627;
});

cljs.core.async.t_cljs$core$async21626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21627","meta21627",-1809047527,null)], null);
});

cljs.core.async.t_cljs$core$async21626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21626";

cljs.core.async.t_cljs$core$async21626.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21626");
});

cljs.core.async.__GT_t_cljs$core$async21626 = (function cljs$core$async$__GT_t_cljs$core$async21626(f__$1,blockable__$1,meta21627){
return (new cljs.core.async.t_cljs$core$async21626(f__$1,blockable__$1,meta21627));
});

}

return (new cljs.core.async.t_cljs$core$async21626(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args21635 = [];
var len__17843__auto___21638 = arguments.length;
var i__17844__auto___21639 = (0);
while(true){
if((i__17844__auto___21639 < len__17843__auto___21638)){
args21635.push((arguments[i__17844__auto___21639]));

var G__21640 = (i__17844__auto___21639 + (1));
i__17844__auto___21639 = G__21640;
continue;
} else {
}
break;
}

var G__21637 = args21635.length;
switch (G__21637) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21635.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args21642 = [];
var len__17843__auto___21645 = arguments.length;
var i__17844__auto___21646 = (0);
while(true){
if((i__17844__auto___21646 < len__17843__auto___21645)){
args21642.push((arguments[i__17844__auto___21646]));

var G__21647 = (i__17844__auto___21646 + (1));
i__17844__auto___21646 = G__21647;
continue;
} else {
}
break;
}

var G__21644 = args21642.length;
switch (G__21644) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21642.length)].join('')));

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
var args21649 = [];
var len__17843__auto___21652 = arguments.length;
var i__17844__auto___21653 = (0);
while(true){
if((i__17844__auto___21653 < len__17843__auto___21652)){
args21649.push((arguments[i__17844__auto___21653]));

var G__21654 = (i__17844__auto___21653 + (1));
i__17844__auto___21653 = G__21654;
continue;
} else {
}
break;
}

var G__21651 = args21649.length;
switch (G__21651) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21649.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21656 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21656);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21656,ret){
return (function (){
return fn1.call(null,val_21656);
});})(val_21656,ret))
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
var args21657 = [];
var len__17843__auto___21660 = arguments.length;
var i__17844__auto___21661 = (0);
while(true){
if((i__17844__auto___21661 < len__17843__auto___21660)){
args21657.push((arguments[i__17844__auto___21661]));

var G__21662 = (i__17844__auto___21661 + (1));
i__17844__auto___21661 = G__21662;
continue;
} else {
}
break;
}

var G__21659 = args21657.length;
switch (G__21659) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21657.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17688__auto___21664 = n;
var x_21665 = (0);
while(true){
if((x_21665 < n__17688__auto___21664)){
(a[x_21665] = (0));

var G__21666 = (x_21665 + (1));
x_21665 = G__21666;
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

var G__21667 = (i + (1));
i = G__21667;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21671 = (function (alt_flag,flag,meta21672){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21672 = meta21672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21673,meta21672__$1){
var self__ = this;
var _21673__$1 = this;
return (new cljs.core.async.t_cljs$core$async21671(self__.alt_flag,self__.flag,meta21672__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21673){
var self__ = this;
var _21673__$1 = this;
return self__.meta21672;
});})(flag))
;

cljs.core.async.t_cljs$core$async21671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21671.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21672","meta21672",860803459,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21671";

cljs.core.async.t_cljs$core$async21671.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21671");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21671 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21671(alt_flag__$1,flag__$1,meta21672){
return (new cljs.core.async.t_cljs$core$async21671(alt_flag__$1,flag__$1,meta21672));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21671(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21677 = (function (alt_handler,flag,cb,meta21678){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21678 = meta21678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21679,meta21678__$1){
var self__ = this;
var _21679__$1 = this;
return (new cljs.core.async.t_cljs$core$async21677(self__.alt_handler,self__.flag,self__.cb,meta21678__$1));
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21679){
var self__ = this;
var _21679__$1 = this;
return self__.meta21678;
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21678","meta21678",-427704983,null)], null);
});

cljs.core.async.t_cljs$core$async21677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21677";

cljs.core.async.t_cljs$core$async21677.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21677");
});

cljs.core.async.__GT_t_cljs$core$async21677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21677(alt_handler__$1,flag__$1,cb__$1,meta21678){
return (new cljs.core.async.t_cljs$core$async21677(alt_handler__$1,flag__$1,cb__$1,meta21678));
});

}

return (new cljs.core.async.t_cljs$core$async21677(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21681_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21682 = (i + (1));
i = G__21682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17850__auto__ = [];
var len__17843__auto___21688 = arguments.length;
var i__17844__auto___21689 = (0);
while(true){
if((i__17844__auto___21689 < len__17843__auto___21688)){
args__17850__auto__.push((arguments[i__17844__auto___21689]));

var G__21690 = (i__17844__auto___21689 + (1));
i__17844__auto___21689 = G__21690;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21685){
var map__21686 = p__21685;
var map__21686__$1 = ((((!((map__21686 == null)))?((((map__21686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21686):map__21686);
var opts = map__21686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21683){
var G__21684 = cljs.core.first.call(null,seq21683);
var seq21683__$1 = cljs.core.next.call(null,seq21683);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21684,seq21683__$1);
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
var args21691 = [];
var len__17843__auto___21741 = arguments.length;
var i__17844__auto___21742 = (0);
while(true){
if((i__17844__auto___21742 < len__17843__auto___21741)){
args21691.push((arguments[i__17844__auto___21742]));

var G__21743 = (i__17844__auto___21742 + (1));
i__17844__auto___21742 = G__21743;
continue;
} else {
}
break;
}

var G__21693 = args21691.length;
switch (G__21693) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21691.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21578__auto___21745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___21745){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___21745){
return (function (state_21717){
var state_val_21718 = (state_21717[(1)]);
if((state_val_21718 === (7))){
var inst_21713 = (state_21717[(2)]);
var state_21717__$1 = state_21717;
var statearr_21719_21746 = state_21717__$1;
(statearr_21719_21746[(2)] = inst_21713);

(statearr_21719_21746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (1))){
var state_21717__$1 = state_21717;
var statearr_21720_21747 = state_21717__$1;
(statearr_21720_21747[(2)] = null);

(statearr_21720_21747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (4))){
var inst_21696 = (state_21717[(7)]);
var inst_21696__$1 = (state_21717[(2)]);
var inst_21697 = (inst_21696__$1 == null);
var state_21717__$1 = (function (){var statearr_21721 = state_21717;
(statearr_21721[(7)] = inst_21696__$1);

return statearr_21721;
})();
if(cljs.core.truth_(inst_21697)){
var statearr_21722_21748 = state_21717__$1;
(statearr_21722_21748[(1)] = (5));

} else {
var statearr_21723_21749 = state_21717__$1;
(statearr_21723_21749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (13))){
var state_21717__$1 = state_21717;
var statearr_21724_21750 = state_21717__$1;
(statearr_21724_21750[(2)] = null);

(statearr_21724_21750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (6))){
var inst_21696 = (state_21717[(7)]);
var state_21717__$1 = state_21717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21717__$1,(11),to,inst_21696);
} else {
if((state_val_21718 === (3))){
var inst_21715 = (state_21717[(2)]);
var state_21717__$1 = state_21717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21717__$1,inst_21715);
} else {
if((state_val_21718 === (12))){
var state_21717__$1 = state_21717;
var statearr_21725_21751 = state_21717__$1;
(statearr_21725_21751[(2)] = null);

(statearr_21725_21751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (2))){
var state_21717__$1 = state_21717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21717__$1,(4),from);
} else {
if((state_val_21718 === (11))){
var inst_21706 = (state_21717[(2)]);
var state_21717__$1 = state_21717;
if(cljs.core.truth_(inst_21706)){
var statearr_21726_21752 = state_21717__$1;
(statearr_21726_21752[(1)] = (12));

} else {
var statearr_21727_21753 = state_21717__$1;
(statearr_21727_21753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (9))){
var state_21717__$1 = state_21717;
var statearr_21728_21754 = state_21717__$1;
(statearr_21728_21754[(2)] = null);

(statearr_21728_21754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (5))){
var state_21717__$1 = state_21717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21729_21755 = state_21717__$1;
(statearr_21729_21755[(1)] = (8));

} else {
var statearr_21730_21756 = state_21717__$1;
(statearr_21730_21756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (14))){
var inst_21711 = (state_21717[(2)]);
var state_21717__$1 = state_21717;
var statearr_21731_21757 = state_21717__$1;
(statearr_21731_21757[(2)] = inst_21711);

(statearr_21731_21757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (10))){
var inst_21703 = (state_21717[(2)]);
var state_21717__$1 = state_21717;
var statearr_21732_21758 = state_21717__$1;
(statearr_21732_21758[(2)] = inst_21703);

(statearr_21732_21758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21718 === (8))){
var inst_21700 = cljs.core.async.close_BANG_.call(null,to);
var state_21717__$1 = state_21717;
var statearr_21733_21759 = state_21717__$1;
(statearr_21733_21759[(2)] = inst_21700);

(statearr_21733_21759[(1)] = (10));


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
});})(c__21578__auto___21745))
;
return ((function (switch__21466__auto__,c__21578__auto___21745){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_21737 = [null,null,null,null,null,null,null,null];
(statearr_21737[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_21737[(1)] = (1));

return statearr_21737;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_21717){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_21717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e21738){if((e21738 instanceof Object)){
var ex__21470__auto__ = e21738;
var statearr_21739_21760 = state_21717;
(statearr_21739_21760[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21761 = state_21717;
state_21717 = G__21761;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_21717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_21717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___21745))
})();
var state__21580__auto__ = (function (){var statearr_21740 = f__21579__auto__.call(null);
(statearr_21740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___21745);

return statearr_21740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___21745))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21945){
var vec__21946 = p__21945;
var v = cljs.core.nth.call(null,vec__21946,(0),null);
var p = cljs.core.nth.call(null,vec__21946,(1),null);
var job = vec__21946;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21578__auto___22128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___22128,res,vec__21946,v,p,job,jobs,results){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___22128,res,vec__21946,v,p,job,jobs,results){
return (function (state_21951){
var state_val_21952 = (state_21951[(1)]);
if((state_val_21952 === (1))){
var state_21951__$1 = state_21951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21951__$1,(2),res,v);
} else {
if((state_val_21952 === (2))){
var inst_21948 = (state_21951[(2)]);
var inst_21949 = cljs.core.async.close_BANG_.call(null,res);
var state_21951__$1 = (function (){var statearr_21953 = state_21951;
(statearr_21953[(7)] = inst_21948);

return statearr_21953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21951__$1,inst_21949);
} else {
return null;
}
}
});})(c__21578__auto___22128,res,vec__21946,v,p,job,jobs,results))
;
return ((function (switch__21466__auto__,c__21578__auto___22128,res,vec__21946,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0 = (function (){
var statearr_21957 = [null,null,null,null,null,null,null,null];
(statearr_21957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__);

(statearr_21957[(1)] = (1));

return statearr_21957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1 = (function (state_21951){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_21951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e21958){if((e21958 instanceof Object)){
var ex__21470__auto__ = e21958;
var statearr_21959_22129 = state_21951;
(statearr_21959_22129[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22130 = state_21951;
state_21951 = G__22130;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = function(state_21951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1.call(this,state_21951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___22128,res,vec__21946,v,p,job,jobs,results))
})();
var state__21580__auto__ = (function (){var statearr_21960 = f__21579__auto__.call(null);
(statearr_21960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___22128);

return statearr_21960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___22128,res,vec__21946,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21961){
var vec__21962 = p__21961;
var v = cljs.core.nth.call(null,vec__21962,(0),null);
var p = cljs.core.nth.call(null,vec__21962,(1),null);
var job = vec__21962;
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
var n__17688__auto___22131 = n;
var __22132 = (0);
while(true){
if((__22132 < n__17688__auto___22131)){
var G__21963_22133 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21963_22133) {
case "compute":
var c__21578__auto___22135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22132,c__21578__auto___22135,G__21963_22133,n__17688__auto___22131,jobs,results,process,async){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (__22132,c__21578__auto___22135,G__21963_22133,n__17688__auto___22131,jobs,results,process,async){
return (function (state_21976){
var state_val_21977 = (state_21976[(1)]);
if((state_val_21977 === (1))){
var state_21976__$1 = state_21976;
var statearr_21978_22136 = state_21976__$1;
(statearr_21978_22136[(2)] = null);

(statearr_21978_22136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (2))){
var state_21976__$1 = state_21976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21976__$1,(4),jobs);
} else {
if((state_val_21977 === (3))){
var inst_21974 = (state_21976[(2)]);
var state_21976__$1 = state_21976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21976__$1,inst_21974);
} else {
if((state_val_21977 === (4))){
var inst_21966 = (state_21976[(2)]);
var inst_21967 = process.call(null,inst_21966);
var state_21976__$1 = state_21976;
if(cljs.core.truth_(inst_21967)){
var statearr_21979_22137 = state_21976__$1;
(statearr_21979_22137[(1)] = (5));

} else {
var statearr_21980_22138 = state_21976__$1;
(statearr_21980_22138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (5))){
var state_21976__$1 = state_21976;
var statearr_21981_22139 = state_21976__$1;
(statearr_21981_22139[(2)] = null);

(statearr_21981_22139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (6))){
var state_21976__$1 = state_21976;
var statearr_21982_22140 = state_21976__$1;
(statearr_21982_22140[(2)] = null);

(statearr_21982_22140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (7))){
var inst_21972 = (state_21976[(2)]);
var state_21976__$1 = state_21976;
var statearr_21983_22141 = state_21976__$1;
(statearr_21983_22141[(2)] = inst_21972);

(statearr_21983_22141[(1)] = (3));


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
});})(__22132,c__21578__auto___22135,G__21963_22133,n__17688__auto___22131,jobs,results,process,async))
;
return ((function (__22132,switch__21466__auto__,c__21578__auto___22135,G__21963_22133,n__17688__auto___22131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0 = (function (){
var statearr_21987 = [null,null,null,null,null,null,null];
(statearr_21987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__);

(statearr_21987[(1)] = (1));

return statearr_21987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1 = (function (state_21976){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_21976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e21988){if((e21988 instanceof Object)){
var ex__21470__auto__ = e21988;
var statearr_21989_22142 = state_21976;
(statearr_21989_22142[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22143 = state_21976;
state_21976 = G__22143;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = function(state_21976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1.call(this,state_21976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__;
})()
;})(__22132,switch__21466__auto__,c__21578__auto___22135,G__21963_22133,n__17688__auto___22131,jobs,results,process,async))
})();
var state__21580__auto__ = (function (){var statearr_21990 = f__21579__auto__.call(null);
(statearr_21990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___22135);

return statearr_21990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(__22132,c__21578__auto___22135,G__21963_22133,n__17688__auto___22131,jobs,results,process,async))
);


break;
case "async":
var c__21578__auto___22144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22132,c__21578__auto___22144,G__21963_22133,n__17688__auto___22131,jobs,results,process,async){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (__22132,c__21578__auto___22144,G__21963_22133,n__17688__auto___22131,jobs,results,process,async){
return (function (state_22003){
var state_val_22004 = (state_22003[(1)]);
if((state_val_22004 === (1))){
var state_22003__$1 = state_22003;
var statearr_22005_22145 = state_22003__$1;
(statearr_22005_22145[(2)] = null);

(statearr_22005_22145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (2))){
var state_22003__$1 = state_22003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22003__$1,(4),jobs);
} else {
if((state_val_22004 === (3))){
var inst_22001 = (state_22003[(2)]);
var state_22003__$1 = state_22003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22003__$1,inst_22001);
} else {
if((state_val_22004 === (4))){
var inst_21993 = (state_22003[(2)]);
var inst_21994 = async.call(null,inst_21993);
var state_22003__$1 = state_22003;
if(cljs.core.truth_(inst_21994)){
var statearr_22006_22146 = state_22003__$1;
(statearr_22006_22146[(1)] = (5));

} else {
var statearr_22007_22147 = state_22003__$1;
(statearr_22007_22147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (5))){
var state_22003__$1 = state_22003;
var statearr_22008_22148 = state_22003__$1;
(statearr_22008_22148[(2)] = null);

(statearr_22008_22148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (6))){
var state_22003__$1 = state_22003;
var statearr_22009_22149 = state_22003__$1;
(statearr_22009_22149[(2)] = null);

(statearr_22009_22149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (7))){
var inst_21999 = (state_22003[(2)]);
var state_22003__$1 = state_22003;
var statearr_22010_22150 = state_22003__$1;
(statearr_22010_22150[(2)] = inst_21999);

(statearr_22010_22150[(1)] = (3));


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
});})(__22132,c__21578__auto___22144,G__21963_22133,n__17688__auto___22131,jobs,results,process,async))
;
return ((function (__22132,switch__21466__auto__,c__21578__auto___22144,G__21963_22133,n__17688__auto___22131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0 = (function (){
var statearr_22014 = [null,null,null,null,null,null,null];
(statearr_22014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__);

(statearr_22014[(1)] = (1));

return statearr_22014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1 = (function (state_22003){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22015){if((e22015 instanceof Object)){
var ex__21470__auto__ = e22015;
var statearr_22016_22151 = state_22003;
(statearr_22016_22151[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22152 = state_22003;
state_22003 = G__22152;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = function(state_22003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1.call(this,state_22003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__;
})()
;})(__22132,switch__21466__auto__,c__21578__auto___22144,G__21963_22133,n__17688__auto___22131,jobs,results,process,async))
})();
var state__21580__auto__ = (function (){var statearr_22017 = f__21579__auto__.call(null);
(statearr_22017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___22144);

return statearr_22017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(__22132,c__21578__auto___22144,G__21963_22133,n__17688__auto___22131,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22153 = (__22132 + (1));
__22132 = G__22153;
continue;
} else {
}
break;
}

var c__21578__auto___22154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___22154,jobs,results,process,async){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___22154,jobs,results,process,async){
return (function (state_22039){
var state_val_22040 = (state_22039[(1)]);
if((state_val_22040 === (1))){
var state_22039__$1 = state_22039;
var statearr_22041_22155 = state_22039__$1;
(statearr_22041_22155[(2)] = null);

(statearr_22041_22155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (2))){
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22039__$1,(4),from);
} else {
if((state_val_22040 === (3))){
var inst_22037 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22039__$1,inst_22037);
} else {
if((state_val_22040 === (4))){
var inst_22020 = (state_22039[(7)]);
var inst_22020__$1 = (state_22039[(2)]);
var inst_22021 = (inst_22020__$1 == null);
var state_22039__$1 = (function (){var statearr_22042 = state_22039;
(statearr_22042[(7)] = inst_22020__$1);

return statearr_22042;
})();
if(cljs.core.truth_(inst_22021)){
var statearr_22043_22156 = state_22039__$1;
(statearr_22043_22156[(1)] = (5));

} else {
var statearr_22044_22157 = state_22039__$1;
(statearr_22044_22157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (5))){
var inst_22023 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22039__$1 = state_22039;
var statearr_22045_22158 = state_22039__$1;
(statearr_22045_22158[(2)] = inst_22023);

(statearr_22045_22158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (6))){
var inst_22025 = (state_22039[(8)]);
var inst_22020 = (state_22039[(7)]);
var inst_22025__$1 = cljs.core.async.chan.call(null,(1));
var inst_22026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22027 = [inst_22020,inst_22025__$1];
var inst_22028 = (new cljs.core.PersistentVector(null,2,(5),inst_22026,inst_22027,null));
var state_22039__$1 = (function (){var statearr_22046 = state_22039;
(statearr_22046[(8)] = inst_22025__$1);

return statearr_22046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22039__$1,(8),jobs,inst_22028);
} else {
if((state_val_22040 === (7))){
var inst_22035 = (state_22039[(2)]);
var state_22039__$1 = state_22039;
var statearr_22047_22159 = state_22039__$1;
(statearr_22047_22159[(2)] = inst_22035);

(statearr_22047_22159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22040 === (8))){
var inst_22025 = (state_22039[(8)]);
var inst_22030 = (state_22039[(2)]);
var state_22039__$1 = (function (){var statearr_22048 = state_22039;
(statearr_22048[(9)] = inst_22030);

return statearr_22048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22039__$1,(9),results,inst_22025);
} else {
if((state_val_22040 === (9))){
var inst_22032 = (state_22039[(2)]);
var state_22039__$1 = (function (){var statearr_22049 = state_22039;
(statearr_22049[(10)] = inst_22032);

return statearr_22049;
})();
var statearr_22050_22160 = state_22039__$1;
(statearr_22050_22160[(2)] = null);

(statearr_22050_22160[(1)] = (2));


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
});})(c__21578__auto___22154,jobs,results,process,async))
;
return ((function (switch__21466__auto__,c__21578__auto___22154,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1 = (function (state_22039){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__21470__auto__ = e22055;
var statearr_22056_22161 = state_22039;
(statearr_22056_22161[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22162 = state_22039;
state_22039 = G__22162;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = function(state_22039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1.call(this,state_22039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___22154,jobs,results,process,async))
})();
var state__21580__auto__ = (function (){var statearr_22057 = f__21579__auto__.call(null);
(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___22154);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___22154,jobs,results,process,async))
);


var c__21578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto__,jobs,results,process,async){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto__,jobs,results,process,async){
return (function (state_22095){
var state_val_22096 = (state_22095[(1)]);
if((state_val_22096 === (7))){
var inst_22091 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22097_22163 = state_22095__$1;
(statearr_22097_22163[(2)] = inst_22091);

(statearr_22097_22163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (20))){
var state_22095__$1 = state_22095;
var statearr_22098_22164 = state_22095__$1;
(statearr_22098_22164[(2)] = null);

(statearr_22098_22164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (1))){
var state_22095__$1 = state_22095;
var statearr_22099_22165 = state_22095__$1;
(statearr_22099_22165[(2)] = null);

(statearr_22099_22165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (4))){
var inst_22060 = (state_22095[(7)]);
var inst_22060__$1 = (state_22095[(2)]);
var inst_22061 = (inst_22060__$1 == null);
var state_22095__$1 = (function (){var statearr_22100 = state_22095;
(statearr_22100[(7)] = inst_22060__$1);

return statearr_22100;
})();
if(cljs.core.truth_(inst_22061)){
var statearr_22101_22166 = state_22095__$1;
(statearr_22101_22166[(1)] = (5));

} else {
var statearr_22102_22167 = state_22095__$1;
(statearr_22102_22167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (15))){
var inst_22073 = (state_22095[(8)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22095__$1,(18),to,inst_22073);
} else {
if((state_val_22096 === (21))){
var inst_22086 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22103_22168 = state_22095__$1;
(statearr_22103_22168[(2)] = inst_22086);

(statearr_22103_22168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (13))){
var inst_22088 = (state_22095[(2)]);
var state_22095__$1 = (function (){var statearr_22104 = state_22095;
(statearr_22104[(9)] = inst_22088);

return statearr_22104;
})();
var statearr_22105_22169 = state_22095__$1;
(statearr_22105_22169[(2)] = null);

(statearr_22105_22169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (6))){
var inst_22060 = (state_22095[(7)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22095__$1,(11),inst_22060);
} else {
if((state_val_22096 === (17))){
var inst_22081 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
if(cljs.core.truth_(inst_22081)){
var statearr_22106_22170 = state_22095__$1;
(statearr_22106_22170[(1)] = (19));

} else {
var statearr_22107_22171 = state_22095__$1;
(statearr_22107_22171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (3))){
var inst_22093 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22095__$1,inst_22093);
} else {
if((state_val_22096 === (12))){
var inst_22070 = (state_22095[(10)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22095__$1,(14),inst_22070);
} else {
if((state_val_22096 === (2))){
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22095__$1,(4),results);
} else {
if((state_val_22096 === (19))){
var state_22095__$1 = state_22095;
var statearr_22108_22172 = state_22095__$1;
(statearr_22108_22172[(2)] = null);

(statearr_22108_22172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (11))){
var inst_22070 = (state_22095[(2)]);
var state_22095__$1 = (function (){var statearr_22109 = state_22095;
(statearr_22109[(10)] = inst_22070);

return statearr_22109;
})();
var statearr_22110_22173 = state_22095__$1;
(statearr_22110_22173[(2)] = null);

(statearr_22110_22173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (9))){
var state_22095__$1 = state_22095;
var statearr_22111_22174 = state_22095__$1;
(statearr_22111_22174[(2)] = null);

(statearr_22111_22174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (5))){
var state_22095__$1 = state_22095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22112_22175 = state_22095__$1;
(statearr_22112_22175[(1)] = (8));

} else {
var statearr_22113_22176 = state_22095__$1;
(statearr_22113_22176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (14))){
var inst_22073 = (state_22095[(8)]);
var inst_22075 = (state_22095[(11)]);
var inst_22073__$1 = (state_22095[(2)]);
var inst_22074 = (inst_22073__$1 == null);
var inst_22075__$1 = cljs.core.not.call(null,inst_22074);
var state_22095__$1 = (function (){var statearr_22114 = state_22095;
(statearr_22114[(8)] = inst_22073__$1);

(statearr_22114[(11)] = inst_22075__$1);

return statearr_22114;
})();
if(inst_22075__$1){
var statearr_22115_22177 = state_22095__$1;
(statearr_22115_22177[(1)] = (15));

} else {
var statearr_22116_22178 = state_22095__$1;
(statearr_22116_22178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (16))){
var inst_22075 = (state_22095[(11)]);
var state_22095__$1 = state_22095;
var statearr_22117_22179 = state_22095__$1;
(statearr_22117_22179[(2)] = inst_22075);

(statearr_22117_22179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (10))){
var inst_22067 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22118_22180 = state_22095__$1;
(statearr_22118_22180[(2)] = inst_22067);

(statearr_22118_22180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (18))){
var inst_22078 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22119_22181 = state_22095__$1;
(statearr_22119_22181[(2)] = inst_22078);

(statearr_22119_22181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (8))){
var inst_22064 = cljs.core.async.close_BANG_.call(null,to);
var state_22095__$1 = state_22095;
var statearr_22120_22182 = state_22095__$1;
(statearr_22120_22182[(2)] = inst_22064);

(statearr_22120_22182[(1)] = (10));


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
});})(c__21578__auto__,jobs,results,process,async))
;
return ((function (switch__21466__auto__,c__21578__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0 = (function (){
var statearr_22124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__);

(statearr_22124[(1)] = (1));

return statearr_22124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1 = (function (state_22095){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22125){if((e22125 instanceof Object)){
var ex__21470__auto__ = e22125;
var statearr_22126_22183 = state_22095;
(statearr_22126_22183[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22184 = state_22095;
state_22095 = G__22184;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__ = function(state_22095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1.call(this,state_22095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto__,jobs,results,process,async))
})();
var state__21580__auto__ = (function (){var statearr_22127 = f__21579__auto__.call(null);
(statearr_22127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto__);

return statearr_22127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto__,jobs,results,process,async))
);

return c__21578__auto__;
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
var args22185 = [];
var len__17843__auto___22188 = arguments.length;
var i__17844__auto___22189 = (0);
while(true){
if((i__17844__auto___22189 < len__17843__auto___22188)){
args22185.push((arguments[i__17844__auto___22189]));

var G__22190 = (i__17844__auto___22189 + (1));
i__17844__auto___22189 = G__22190;
continue;
} else {
}
break;
}

var G__22187 = args22185.length;
switch (G__22187) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22185.length)].join('')));

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
var args22192 = [];
var len__17843__auto___22195 = arguments.length;
var i__17844__auto___22196 = (0);
while(true){
if((i__17844__auto___22196 < len__17843__auto___22195)){
args22192.push((arguments[i__17844__auto___22196]));

var G__22197 = (i__17844__auto___22196 + (1));
i__17844__auto___22196 = G__22197;
continue;
} else {
}
break;
}

var G__22194 = args22192.length;
switch (G__22194) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22192.length)].join('')));

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
var args22199 = [];
var len__17843__auto___22252 = arguments.length;
var i__17844__auto___22253 = (0);
while(true){
if((i__17844__auto___22253 < len__17843__auto___22252)){
args22199.push((arguments[i__17844__auto___22253]));

var G__22254 = (i__17844__auto___22253 + (1));
i__17844__auto___22253 = G__22254;
continue;
} else {
}
break;
}

var G__22201 = args22199.length;
switch (G__22201) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22199.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21578__auto___22256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___22256,tc,fc){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___22256,tc,fc){
return (function (state_22227){
var state_val_22228 = (state_22227[(1)]);
if((state_val_22228 === (7))){
var inst_22223 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
var statearr_22229_22257 = state_22227__$1;
(statearr_22229_22257[(2)] = inst_22223);

(statearr_22229_22257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (1))){
var state_22227__$1 = state_22227;
var statearr_22230_22258 = state_22227__$1;
(statearr_22230_22258[(2)] = null);

(statearr_22230_22258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (4))){
var inst_22204 = (state_22227[(7)]);
var inst_22204__$1 = (state_22227[(2)]);
var inst_22205 = (inst_22204__$1 == null);
var state_22227__$1 = (function (){var statearr_22231 = state_22227;
(statearr_22231[(7)] = inst_22204__$1);

return statearr_22231;
})();
if(cljs.core.truth_(inst_22205)){
var statearr_22232_22259 = state_22227__$1;
(statearr_22232_22259[(1)] = (5));

} else {
var statearr_22233_22260 = state_22227__$1;
(statearr_22233_22260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (13))){
var state_22227__$1 = state_22227;
var statearr_22234_22261 = state_22227__$1;
(statearr_22234_22261[(2)] = null);

(statearr_22234_22261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (6))){
var inst_22204 = (state_22227[(7)]);
var inst_22210 = p.call(null,inst_22204);
var state_22227__$1 = state_22227;
if(cljs.core.truth_(inst_22210)){
var statearr_22235_22262 = state_22227__$1;
(statearr_22235_22262[(1)] = (9));

} else {
var statearr_22236_22263 = state_22227__$1;
(statearr_22236_22263[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (3))){
var inst_22225 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22227__$1,inst_22225);
} else {
if((state_val_22228 === (12))){
var state_22227__$1 = state_22227;
var statearr_22237_22264 = state_22227__$1;
(statearr_22237_22264[(2)] = null);

(statearr_22237_22264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (2))){
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22227__$1,(4),ch);
} else {
if((state_val_22228 === (11))){
var inst_22204 = (state_22227[(7)]);
var inst_22214 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22227__$1,(8),inst_22214,inst_22204);
} else {
if((state_val_22228 === (9))){
var state_22227__$1 = state_22227;
var statearr_22238_22265 = state_22227__$1;
(statearr_22238_22265[(2)] = tc);

(statearr_22238_22265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (5))){
var inst_22207 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22208 = cljs.core.async.close_BANG_.call(null,fc);
var state_22227__$1 = (function (){var statearr_22239 = state_22227;
(statearr_22239[(8)] = inst_22207);

return statearr_22239;
})();
var statearr_22240_22266 = state_22227__$1;
(statearr_22240_22266[(2)] = inst_22208);

(statearr_22240_22266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (14))){
var inst_22221 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
var statearr_22241_22267 = state_22227__$1;
(statearr_22241_22267[(2)] = inst_22221);

(statearr_22241_22267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (10))){
var state_22227__$1 = state_22227;
var statearr_22242_22268 = state_22227__$1;
(statearr_22242_22268[(2)] = fc);

(statearr_22242_22268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (8))){
var inst_22216 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
if(cljs.core.truth_(inst_22216)){
var statearr_22243_22269 = state_22227__$1;
(statearr_22243_22269[(1)] = (12));

} else {
var statearr_22244_22270 = state_22227__$1;
(statearr_22244_22270[(1)] = (13));

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
});})(c__21578__auto___22256,tc,fc))
;
return ((function (switch__21466__auto__,c__21578__auto___22256,tc,fc){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_22248 = [null,null,null,null,null,null,null,null,null];
(statearr_22248[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_22248[(1)] = (1));

return statearr_22248;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_22227){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22249){if((e22249 instanceof Object)){
var ex__21470__auto__ = e22249;
var statearr_22250_22271 = state_22227;
(statearr_22250_22271[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22272 = state_22227;
state_22227 = G__22272;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_22227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_22227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___22256,tc,fc))
})();
var state__21580__auto__ = (function (){var statearr_22251 = f__21579__auto__.call(null);
(statearr_22251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___22256);

return statearr_22251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___22256,tc,fc))
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
var c__21578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto__){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto__){
return (function (state_22336){
var state_val_22337 = (state_22336[(1)]);
if((state_val_22337 === (7))){
var inst_22332 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22338_22359 = state_22336__$1;
(statearr_22338_22359[(2)] = inst_22332);

(statearr_22338_22359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (1))){
var inst_22316 = init;
var state_22336__$1 = (function (){var statearr_22339 = state_22336;
(statearr_22339[(7)] = inst_22316);

return statearr_22339;
})();
var statearr_22340_22360 = state_22336__$1;
(statearr_22340_22360[(2)] = null);

(statearr_22340_22360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (4))){
var inst_22319 = (state_22336[(8)]);
var inst_22319__$1 = (state_22336[(2)]);
var inst_22320 = (inst_22319__$1 == null);
var state_22336__$1 = (function (){var statearr_22341 = state_22336;
(statearr_22341[(8)] = inst_22319__$1);

return statearr_22341;
})();
if(cljs.core.truth_(inst_22320)){
var statearr_22342_22361 = state_22336__$1;
(statearr_22342_22361[(1)] = (5));

} else {
var statearr_22343_22362 = state_22336__$1;
(statearr_22343_22362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (6))){
var inst_22319 = (state_22336[(8)]);
var inst_22316 = (state_22336[(7)]);
var inst_22323 = (state_22336[(9)]);
var inst_22323__$1 = f.call(null,inst_22316,inst_22319);
var inst_22324 = cljs.core.reduced_QMARK_.call(null,inst_22323__$1);
var state_22336__$1 = (function (){var statearr_22344 = state_22336;
(statearr_22344[(9)] = inst_22323__$1);

return statearr_22344;
})();
if(inst_22324){
var statearr_22345_22363 = state_22336__$1;
(statearr_22345_22363[(1)] = (8));

} else {
var statearr_22346_22364 = state_22336__$1;
(statearr_22346_22364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (3))){
var inst_22334 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22336__$1,inst_22334);
} else {
if((state_val_22337 === (2))){
var state_22336__$1 = state_22336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22336__$1,(4),ch);
} else {
if((state_val_22337 === (9))){
var inst_22323 = (state_22336[(9)]);
var inst_22316 = inst_22323;
var state_22336__$1 = (function (){var statearr_22347 = state_22336;
(statearr_22347[(7)] = inst_22316);

return statearr_22347;
})();
var statearr_22348_22365 = state_22336__$1;
(statearr_22348_22365[(2)] = null);

(statearr_22348_22365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (5))){
var inst_22316 = (state_22336[(7)]);
var state_22336__$1 = state_22336;
var statearr_22349_22366 = state_22336__$1;
(statearr_22349_22366[(2)] = inst_22316);

(statearr_22349_22366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (10))){
var inst_22330 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22350_22367 = state_22336__$1;
(statearr_22350_22367[(2)] = inst_22330);

(statearr_22350_22367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (8))){
var inst_22323 = (state_22336[(9)]);
var inst_22326 = cljs.core.deref.call(null,inst_22323);
var state_22336__$1 = state_22336;
var statearr_22351_22368 = state_22336__$1;
(statearr_22351_22368[(2)] = inst_22326);

(statearr_22351_22368[(1)] = (10));


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
});})(c__21578__auto__))
;
return ((function (switch__21466__auto__,c__21578__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21467__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21467__auto____0 = (function (){
var statearr_22355 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22355[(0)] = cljs$core$async$reduce_$_state_machine__21467__auto__);

(statearr_22355[(1)] = (1));

return statearr_22355;
});
var cljs$core$async$reduce_$_state_machine__21467__auto____1 = (function (state_22336){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22356){if((e22356 instanceof Object)){
var ex__21470__auto__ = e22356;
var statearr_22357_22369 = state_22336;
(statearr_22357_22369[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22370 = state_22336;
state_22336 = G__22370;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21467__auto__ = function(state_22336){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21467__auto____1.call(this,state_22336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21467__auto____0;
cljs$core$async$reduce_$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21467__auto____1;
return cljs$core$async$reduce_$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto__))
})();
var state__21580__auto__ = (function (){var statearr_22358 = f__21579__auto__.call(null);
(statearr_22358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto__);

return statearr_22358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto__))
);

return c__21578__auto__;
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
var args22371 = [];
var len__17843__auto___22423 = arguments.length;
var i__17844__auto___22424 = (0);
while(true){
if((i__17844__auto___22424 < len__17843__auto___22423)){
args22371.push((arguments[i__17844__auto___22424]));

var G__22425 = (i__17844__auto___22424 + (1));
i__17844__auto___22424 = G__22425;
continue;
} else {
}
break;
}

var G__22373 = args22371.length;
switch (G__22373) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22371.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto__){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto__){
return (function (state_22398){
var state_val_22399 = (state_22398[(1)]);
if((state_val_22399 === (7))){
var inst_22380 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22400_22427 = state_22398__$1;
(statearr_22400_22427[(2)] = inst_22380);

(statearr_22400_22427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (1))){
var inst_22374 = cljs.core.seq.call(null,coll);
var inst_22375 = inst_22374;
var state_22398__$1 = (function (){var statearr_22401 = state_22398;
(statearr_22401[(7)] = inst_22375);

return statearr_22401;
})();
var statearr_22402_22428 = state_22398__$1;
(statearr_22402_22428[(2)] = null);

(statearr_22402_22428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (4))){
var inst_22375 = (state_22398[(7)]);
var inst_22378 = cljs.core.first.call(null,inst_22375);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22398__$1,(7),ch,inst_22378);
} else {
if((state_val_22399 === (13))){
var inst_22392 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22403_22429 = state_22398__$1;
(statearr_22403_22429[(2)] = inst_22392);

(statearr_22403_22429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (6))){
var inst_22383 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
if(cljs.core.truth_(inst_22383)){
var statearr_22404_22430 = state_22398__$1;
(statearr_22404_22430[(1)] = (8));

} else {
var statearr_22405_22431 = state_22398__$1;
(statearr_22405_22431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (3))){
var inst_22396 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22398__$1,inst_22396);
} else {
if((state_val_22399 === (12))){
var state_22398__$1 = state_22398;
var statearr_22406_22432 = state_22398__$1;
(statearr_22406_22432[(2)] = null);

(statearr_22406_22432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (2))){
var inst_22375 = (state_22398[(7)]);
var state_22398__$1 = state_22398;
if(cljs.core.truth_(inst_22375)){
var statearr_22407_22433 = state_22398__$1;
(statearr_22407_22433[(1)] = (4));

} else {
var statearr_22408_22434 = state_22398__$1;
(statearr_22408_22434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (11))){
var inst_22389 = cljs.core.async.close_BANG_.call(null,ch);
var state_22398__$1 = state_22398;
var statearr_22409_22435 = state_22398__$1;
(statearr_22409_22435[(2)] = inst_22389);

(statearr_22409_22435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (9))){
var state_22398__$1 = state_22398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22410_22436 = state_22398__$1;
(statearr_22410_22436[(1)] = (11));

} else {
var statearr_22411_22437 = state_22398__$1;
(statearr_22411_22437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (5))){
var inst_22375 = (state_22398[(7)]);
var state_22398__$1 = state_22398;
var statearr_22412_22438 = state_22398__$1;
(statearr_22412_22438[(2)] = inst_22375);

(statearr_22412_22438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (10))){
var inst_22394 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22413_22439 = state_22398__$1;
(statearr_22413_22439[(2)] = inst_22394);

(statearr_22413_22439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (8))){
var inst_22375 = (state_22398[(7)]);
var inst_22385 = cljs.core.next.call(null,inst_22375);
var inst_22375__$1 = inst_22385;
var state_22398__$1 = (function (){var statearr_22414 = state_22398;
(statearr_22414[(7)] = inst_22375__$1);

return statearr_22414;
})();
var statearr_22415_22440 = state_22398__$1;
(statearr_22415_22440[(2)] = null);

(statearr_22415_22440[(1)] = (2));


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
});})(c__21578__auto__))
;
return ((function (switch__21466__auto__,c__21578__auto__){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_22419 = [null,null,null,null,null,null,null,null];
(statearr_22419[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_22419[(1)] = (1));

return statearr_22419;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_22398){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22420){if((e22420 instanceof Object)){
var ex__21470__auto__ = e22420;
var statearr_22421_22441 = state_22398;
(statearr_22421_22441[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22442 = state_22398;
state_22398 = G__22442;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_22398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_22398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto__))
})();
var state__21580__auto__ = (function (){var statearr_22422 = f__21579__auto__.call(null);
(statearr_22422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto__);

return statearr_22422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto__))
);

return c__21578__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22664 = (function (mult,ch,cs,meta22665){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22665 = meta22665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22666,meta22665__$1){
var self__ = this;
var _22666__$1 = this;
return (new cljs.core.async.t_cljs$core$async22664(self__.mult,self__.ch,self__.cs,meta22665__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22666){
var self__ = this;
var _22666__$1 = this;
return self__.meta22665;
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22665","meta22665",240449871,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22664";

cljs.core.async.t_cljs$core$async22664.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22664");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22664 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22664(mult__$1,ch__$1,cs__$1,meta22665){
return (new cljs.core.async.t_cljs$core$async22664(mult__$1,ch__$1,cs__$1,meta22665));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22664(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21578__auto___22885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___22885,cs,m,dchan,dctr,done){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___22885,cs,m,dchan,dctr,done){
return (function (state_22797){
var state_val_22798 = (state_22797[(1)]);
if((state_val_22798 === (7))){
var inst_22793 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22799_22886 = state_22797__$1;
(statearr_22799_22886[(2)] = inst_22793);

(statearr_22799_22886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (20))){
var inst_22698 = (state_22797[(7)]);
var inst_22708 = cljs.core.first.call(null,inst_22698);
var inst_22709 = cljs.core.nth.call(null,inst_22708,(0),null);
var inst_22710 = cljs.core.nth.call(null,inst_22708,(1),null);
var state_22797__$1 = (function (){var statearr_22800 = state_22797;
(statearr_22800[(8)] = inst_22709);

return statearr_22800;
})();
if(cljs.core.truth_(inst_22710)){
var statearr_22801_22887 = state_22797__$1;
(statearr_22801_22887[(1)] = (22));

} else {
var statearr_22802_22888 = state_22797__$1;
(statearr_22802_22888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (27))){
var inst_22745 = (state_22797[(9)]);
var inst_22740 = (state_22797[(10)]);
var inst_22669 = (state_22797[(11)]);
var inst_22738 = (state_22797[(12)]);
var inst_22745__$1 = cljs.core._nth.call(null,inst_22738,inst_22740);
var inst_22746 = cljs.core.async.put_BANG_.call(null,inst_22745__$1,inst_22669,done);
var state_22797__$1 = (function (){var statearr_22803 = state_22797;
(statearr_22803[(9)] = inst_22745__$1);

return statearr_22803;
})();
if(cljs.core.truth_(inst_22746)){
var statearr_22804_22889 = state_22797__$1;
(statearr_22804_22889[(1)] = (30));

} else {
var statearr_22805_22890 = state_22797__$1;
(statearr_22805_22890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (1))){
var state_22797__$1 = state_22797;
var statearr_22806_22891 = state_22797__$1;
(statearr_22806_22891[(2)] = null);

(statearr_22806_22891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (24))){
var inst_22698 = (state_22797[(7)]);
var inst_22715 = (state_22797[(2)]);
var inst_22716 = cljs.core.next.call(null,inst_22698);
var inst_22678 = inst_22716;
var inst_22679 = null;
var inst_22680 = (0);
var inst_22681 = (0);
var state_22797__$1 = (function (){var statearr_22807 = state_22797;
(statearr_22807[(13)] = inst_22678);

(statearr_22807[(14)] = inst_22680);

(statearr_22807[(15)] = inst_22679);

(statearr_22807[(16)] = inst_22681);

(statearr_22807[(17)] = inst_22715);

return statearr_22807;
})();
var statearr_22808_22892 = state_22797__$1;
(statearr_22808_22892[(2)] = null);

(statearr_22808_22892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (39))){
var state_22797__$1 = state_22797;
var statearr_22812_22893 = state_22797__$1;
(statearr_22812_22893[(2)] = null);

(statearr_22812_22893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (4))){
var inst_22669 = (state_22797[(11)]);
var inst_22669__$1 = (state_22797[(2)]);
var inst_22670 = (inst_22669__$1 == null);
var state_22797__$1 = (function (){var statearr_22813 = state_22797;
(statearr_22813[(11)] = inst_22669__$1);

return statearr_22813;
})();
if(cljs.core.truth_(inst_22670)){
var statearr_22814_22894 = state_22797__$1;
(statearr_22814_22894[(1)] = (5));

} else {
var statearr_22815_22895 = state_22797__$1;
(statearr_22815_22895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (15))){
var inst_22678 = (state_22797[(13)]);
var inst_22680 = (state_22797[(14)]);
var inst_22679 = (state_22797[(15)]);
var inst_22681 = (state_22797[(16)]);
var inst_22694 = (state_22797[(2)]);
var inst_22695 = (inst_22681 + (1));
var tmp22809 = inst_22678;
var tmp22810 = inst_22680;
var tmp22811 = inst_22679;
var inst_22678__$1 = tmp22809;
var inst_22679__$1 = tmp22811;
var inst_22680__$1 = tmp22810;
var inst_22681__$1 = inst_22695;
var state_22797__$1 = (function (){var statearr_22816 = state_22797;
(statearr_22816[(13)] = inst_22678__$1);

(statearr_22816[(14)] = inst_22680__$1);

(statearr_22816[(15)] = inst_22679__$1);

(statearr_22816[(18)] = inst_22694);

(statearr_22816[(16)] = inst_22681__$1);

return statearr_22816;
})();
var statearr_22817_22896 = state_22797__$1;
(statearr_22817_22896[(2)] = null);

(statearr_22817_22896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (21))){
var inst_22719 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22821_22897 = state_22797__$1;
(statearr_22821_22897[(2)] = inst_22719);

(statearr_22821_22897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (31))){
var inst_22745 = (state_22797[(9)]);
var inst_22749 = done.call(null,null);
var inst_22750 = cljs.core.async.untap_STAR_.call(null,m,inst_22745);
var state_22797__$1 = (function (){var statearr_22822 = state_22797;
(statearr_22822[(19)] = inst_22749);

return statearr_22822;
})();
var statearr_22823_22898 = state_22797__$1;
(statearr_22823_22898[(2)] = inst_22750);

(statearr_22823_22898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (32))){
var inst_22739 = (state_22797[(20)]);
var inst_22740 = (state_22797[(10)]);
var inst_22738 = (state_22797[(12)]);
var inst_22737 = (state_22797[(21)]);
var inst_22752 = (state_22797[(2)]);
var inst_22753 = (inst_22740 + (1));
var tmp22818 = inst_22739;
var tmp22819 = inst_22738;
var tmp22820 = inst_22737;
var inst_22737__$1 = tmp22820;
var inst_22738__$1 = tmp22819;
var inst_22739__$1 = tmp22818;
var inst_22740__$1 = inst_22753;
var state_22797__$1 = (function (){var statearr_22824 = state_22797;
(statearr_22824[(20)] = inst_22739__$1);

(statearr_22824[(22)] = inst_22752);

(statearr_22824[(10)] = inst_22740__$1);

(statearr_22824[(12)] = inst_22738__$1);

(statearr_22824[(21)] = inst_22737__$1);

return statearr_22824;
})();
var statearr_22825_22899 = state_22797__$1;
(statearr_22825_22899[(2)] = null);

(statearr_22825_22899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (40))){
var inst_22765 = (state_22797[(23)]);
var inst_22769 = done.call(null,null);
var inst_22770 = cljs.core.async.untap_STAR_.call(null,m,inst_22765);
var state_22797__$1 = (function (){var statearr_22826 = state_22797;
(statearr_22826[(24)] = inst_22769);

return statearr_22826;
})();
var statearr_22827_22900 = state_22797__$1;
(statearr_22827_22900[(2)] = inst_22770);

(statearr_22827_22900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (33))){
var inst_22756 = (state_22797[(25)]);
var inst_22758 = cljs.core.chunked_seq_QMARK_.call(null,inst_22756);
var state_22797__$1 = state_22797;
if(inst_22758){
var statearr_22828_22901 = state_22797__$1;
(statearr_22828_22901[(1)] = (36));

} else {
var statearr_22829_22902 = state_22797__$1;
(statearr_22829_22902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (13))){
var inst_22688 = (state_22797[(26)]);
var inst_22691 = cljs.core.async.close_BANG_.call(null,inst_22688);
var state_22797__$1 = state_22797;
var statearr_22830_22903 = state_22797__$1;
(statearr_22830_22903[(2)] = inst_22691);

(statearr_22830_22903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (22))){
var inst_22709 = (state_22797[(8)]);
var inst_22712 = cljs.core.async.close_BANG_.call(null,inst_22709);
var state_22797__$1 = state_22797;
var statearr_22831_22904 = state_22797__$1;
(statearr_22831_22904[(2)] = inst_22712);

(statearr_22831_22904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (36))){
var inst_22756 = (state_22797[(25)]);
var inst_22760 = cljs.core.chunk_first.call(null,inst_22756);
var inst_22761 = cljs.core.chunk_rest.call(null,inst_22756);
var inst_22762 = cljs.core.count.call(null,inst_22760);
var inst_22737 = inst_22761;
var inst_22738 = inst_22760;
var inst_22739 = inst_22762;
var inst_22740 = (0);
var state_22797__$1 = (function (){var statearr_22832 = state_22797;
(statearr_22832[(20)] = inst_22739);

(statearr_22832[(10)] = inst_22740);

(statearr_22832[(12)] = inst_22738);

(statearr_22832[(21)] = inst_22737);

return statearr_22832;
})();
var statearr_22833_22905 = state_22797__$1;
(statearr_22833_22905[(2)] = null);

(statearr_22833_22905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (41))){
var inst_22756 = (state_22797[(25)]);
var inst_22772 = (state_22797[(2)]);
var inst_22773 = cljs.core.next.call(null,inst_22756);
var inst_22737 = inst_22773;
var inst_22738 = null;
var inst_22739 = (0);
var inst_22740 = (0);
var state_22797__$1 = (function (){var statearr_22834 = state_22797;
(statearr_22834[(20)] = inst_22739);

(statearr_22834[(10)] = inst_22740);

(statearr_22834[(27)] = inst_22772);

(statearr_22834[(12)] = inst_22738);

(statearr_22834[(21)] = inst_22737);

return statearr_22834;
})();
var statearr_22835_22906 = state_22797__$1;
(statearr_22835_22906[(2)] = null);

(statearr_22835_22906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (43))){
var state_22797__$1 = state_22797;
var statearr_22836_22907 = state_22797__$1;
(statearr_22836_22907[(2)] = null);

(statearr_22836_22907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (29))){
var inst_22781 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22837_22908 = state_22797__$1;
(statearr_22837_22908[(2)] = inst_22781);

(statearr_22837_22908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (44))){
var inst_22790 = (state_22797[(2)]);
var state_22797__$1 = (function (){var statearr_22838 = state_22797;
(statearr_22838[(28)] = inst_22790);

return statearr_22838;
})();
var statearr_22839_22909 = state_22797__$1;
(statearr_22839_22909[(2)] = null);

(statearr_22839_22909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (6))){
var inst_22729 = (state_22797[(29)]);
var inst_22728 = cljs.core.deref.call(null,cs);
var inst_22729__$1 = cljs.core.keys.call(null,inst_22728);
var inst_22730 = cljs.core.count.call(null,inst_22729__$1);
var inst_22731 = cljs.core.reset_BANG_.call(null,dctr,inst_22730);
var inst_22736 = cljs.core.seq.call(null,inst_22729__$1);
var inst_22737 = inst_22736;
var inst_22738 = null;
var inst_22739 = (0);
var inst_22740 = (0);
var state_22797__$1 = (function (){var statearr_22840 = state_22797;
(statearr_22840[(20)] = inst_22739);

(statearr_22840[(10)] = inst_22740);

(statearr_22840[(29)] = inst_22729__$1);

(statearr_22840[(30)] = inst_22731);

(statearr_22840[(12)] = inst_22738);

(statearr_22840[(21)] = inst_22737);

return statearr_22840;
})();
var statearr_22841_22910 = state_22797__$1;
(statearr_22841_22910[(2)] = null);

(statearr_22841_22910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (28))){
var inst_22756 = (state_22797[(25)]);
var inst_22737 = (state_22797[(21)]);
var inst_22756__$1 = cljs.core.seq.call(null,inst_22737);
var state_22797__$1 = (function (){var statearr_22842 = state_22797;
(statearr_22842[(25)] = inst_22756__$1);

return statearr_22842;
})();
if(inst_22756__$1){
var statearr_22843_22911 = state_22797__$1;
(statearr_22843_22911[(1)] = (33));

} else {
var statearr_22844_22912 = state_22797__$1;
(statearr_22844_22912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (25))){
var inst_22739 = (state_22797[(20)]);
var inst_22740 = (state_22797[(10)]);
var inst_22742 = (inst_22740 < inst_22739);
var inst_22743 = inst_22742;
var state_22797__$1 = state_22797;
if(cljs.core.truth_(inst_22743)){
var statearr_22845_22913 = state_22797__$1;
(statearr_22845_22913[(1)] = (27));

} else {
var statearr_22846_22914 = state_22797__$1;
(statearr_22846_22914[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (34))){
var state_22797__$1 = state_22797;
var statearr_22847_22915 = state_22797__$1;
(statearr_22847_22915[(2)] = null);

(statearr_22847_22915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (17))){
var state_22797__$1 = state_22797;
var statearr_22848_22916 = state_22797__$1;
(statearr_22848_22916[(2)] = null);

(statearr_22848_22916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (3))){
var inst_22795 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22797__$1,inst_22795);
} else {
if((state_val_22798 === (12))){
var inst_22724 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22849_22917 = state_22797__$1;
(statearr_22849_22917[(2)] = inst_22724);

(statearr_22849_22917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (2))){
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22797__$1,(4),ch);
} else {
if((state_val_22798 === (23))){
var state_22797__$1 = state_22797;
var statearr_22850_22918 = state_22797__$1;
(statearr_22850_22918[(2)] = null);

(statearr_22850_22918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (35))){
var inst_22779 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22851_22919 = state_22797__$1;
(statearr_22851_22919[(2)] = inst_22779);

(statearr_22851_22919[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (19))){
var inst_22698 = (state_22797[(7)]);
var inst_22702 = cljs.core.chunk_first.call(null,inst_22698);
var inst_22703 = cljs.core.chunk_rest.call(null,inst_22698);
var inst_22704 = cljs.core.count.call(null,inst_22702);
var inst_22678 = inst_22703;
var inst_22679 = inst_22702;
var inst_22680 = inst_22704;
var inst_22681 = (0);
var state_22797__$1 = (function (){var statearr_22852 = state_22797;
(statearr_22852[(13)] = inst_22678);

(statearr_22852[(14)] = inst_22680);

(statearr_22852[(15)] = inst_22679);

(statearr_22852[(16)] = inst_22681);

return statearr_22852;
})();
var statearr_22853_22920 = state_22797__$1;
(statearr_22853_22920[(2)] = null);

(statearr_22853_22920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (11))){
var inst_22678 = (state_22797[(13)]);
var inst_22698 = (state_22797[(7)]);
var inst_22698__$1 = cljs.core.seq.call(null,inst_22678);
var state_22797__$1 = (function (){var statearr_22854 = state_22797;
(statearr_22854[(7)] = inst_22698__$1);

return statearr_22854;
})();
if(inst_22698__$1){
var statearr_22855_22921 = state_22797__$1;
(statearr_22855_22921[(1)] = (16));

} else {
var statearr_22856_22922 = state_22797__$1;
(statearr_22856_22922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (9))){
var inst_22726 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22857_22923 = state_22797__$1;
(statearr_22857_22923[(2)] = inst_22726);

(statearr_22857_22923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (5))){
var inst_22676 = cljs.core.deref.call(null,cs);
var inst_22677 = cljs.core.seq.call(null,inst_22676);
var inst_22678 = inst_22677;
var inst_22679 = null;
var inst_22680 = (0);
var inst_22681 = (0);
var state_22797__$1 = (function (){var statearr_22858 = state_22797;
(statearr_22858[(13)] = inst_22678);

(statearr_22858[(14)] = inst_22680);

(statearr_22858[(15)] = inst_22679);

(statearr_22858[(16)] = inst_22681);

return statearr_22858;
})();
var statearr_22859_22924 = state_22797__$1;
(statearr_22859_22924[(2)] = null);

(statearr_22859_22924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (14))){
var state_22797__$1 = state_22797;
var statearr_22860_22925 = state_22797__$1;
(statearr_22860_22925[(2)] = null);

(statearr_22860_22925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (45))){
var inst_22787 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22861_22926 = state_22797__$1;
(statearr_22861_22926[(2)] = inst_22787);

(statearr_22861_22926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (26))){
var inst_22729 = (state_22797[(29)]);
var inst_22783 = (state_22797[(2)]);
var inst_22784 = cljs.core.seq.call(null,inst_22729);
var state_22797__$1 = (function (){var statearr_22862 = state_22797;
(statearr_22862[(31)] = inst_22783);

return statearr_22862;
})();
if(inst_22784){
var statearr_22863_22927 = state_22797__$1;
(statearr_22863_22927[(1)] = (42));

} else {
var statearr_22864_22928 = state_22797__$1;
(statearr_22864_22928[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (16))){
var inst_22698 = (state_22797[(7)]);
var inst_22700 = cljs.core.chunked_seq_QMARK_.call(null,inst_22698);
var state_22797__$1 = state_22797;
if(inst_22700){
var statearr_22865_22929 = state_22797__$1;
(statearr_22865_22929[(1)] = (19));

} else {
var statearr_22866_22930 = state_22797__$1;
(statearr_22866_22930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (38))){
var inst_22776 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22867_22931 = state_22797__$1;
(statearr_22867_22931[(2)] = inst_22776);

(statearr_22867_22931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (30))){
var state_22797__$1 = state_22797;
var statearr_22868_22932 = state_22797__$1;
(statearr_22868_22932[(2)] = null);

(statearr_22868_22932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (10))){
var inst_22679 = (state_22797[(15)]);
var inst_22681 = (state_22797[(16)]);
var inst_22687 = cljs.core._nth.call(null,inst_22679,inst_22681);
var inst_22688 = cljs.core.nth.call(null,inst_22687,(0),null);
var inst_22689 = cljs.core.nth.call(null,inst_22687,(1),null);
var state_22797__$1 = (function (){var statearr_22869 = state_22797;
(statearr_22869[(26)] = inst_22688);

return statearr_22869;
})();
if(cljs.core.truth_(inst_22689)){
var statearr_22870_22933 = state_22797__$1;
(statearr_22870_22933[(1)] = (13));

} else {
var statearr_22871_22934 = state_22797__$1;
(statearr_22871_22934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (18))){
var inst_22722 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22872_22935 = state_22797__$1;
(statearr_22872_22935[(2)] = inst_22722);

(statearr_22872_22935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (42))){
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22797__$1,(45),dchan);
} else {
if((state_val_22798 === (37))){
var inst_22756 = (state_22797[(25)]);
var inst_22669 = (state_22797[(11)]);
var inst_22765 = (state_22797[(23)]);
var inst_22765__$1 = cljs.core.first.call(null,inst_22756);
var inst_22766 = cljs.core.async.put_BANG_.call(null,inst_22765__$1,inst_22669,done);
var state_22797__$1 = (function (){var statearr_22873 = state_22797;
(statearr_22873[(23)] = inst_22765__$1);

return statearr_22873;
})();
if(cljs.core.truth_(inst_22766)){
var statearr_22874_22936 = state_22797__$1;
(statearr_22874_22936[(1)] = (39));

} else {
var statearr_22875_22937 = state_22797__$1;
(statearr_22875_22937[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (8))){
var inst_22680 = (state_22797[(14)]);
var inst_22681 = (state_22797[(16)]);
var inst_22683 = (inst_22681 < inst_22680);
var inst_22684 = inst_22683;
var state_22797__$1 = state_22797;
if(cljs.core.truth_(inst_22684)){
var statearr_22876_22938 = state_22797__$1;
(statearr_22876_22938[(1)] = (10));

} else {
var statearr_22877_22939 = state_22797__$1;
(statearr_22877_22939[(1)] = (11));

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
});})(c__21578__auto___22885,cs,m,dchan,dctr,done))
;
return ((function (switch__21466__auto__,c__21578__auto___22885,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21467__auto__ = null;
var cljs$core$async$mult_$_state_machine__21467__auto____0 = (function (){
var statearr_22881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22881[(0)] = cljs$core$async$mult_$_state_machine__21467__auto__);

(statearr_22881[(1)] = (1));

return statearr_22881;
});
var cljs$core$async$mult_$_state_machine__21467__auto____1 = (function (state_22797){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_22797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e22882){if((e22882 instanceof Object)){
var ex__21470__auto__ = e22882;
var statearr_22883_22940 = state_22797;
(statearr_22883_22940[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22941 = state_22797;
state_22797 = G__22941;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21467__auto__ = function(state_22797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21467__auto____1.call(this,state_22797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21467__auto____0;
cljs$core$async$mult_$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21467__auto____1;
return cljs$core$async$mult_$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___22885,cs,m,dchan,dctr,done))
})();
var state__21580__auto__ = (function (){var statearr_22884 = f__21579__auto__.call(null);
(statearr_22884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___22885);

return statearr_22884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___22885,cs,m,dchan,dctr,done))
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
var args22942 = [];
var len__17843__auto___22945 = arguments.length;
var i__17844__auto___22946 = (0);
while(true){
if((i__17844__auto___22946 < len__17843__auto___22945)){
args22942.push((arguments[i__17844__auto___22946]));

var G__22947 = (i__17844__auto___22946 + (1));
i__17844__auto___22946 = G__22947;
continue;
} else {
}
break;
}

var G__22944 = args22942.length;
switch (G__22944) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22942.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___22959 = arguments.length;
var i__17844__auto___22960 = (0);
while(true){
if((i__17844__auto___22960 < len__17843__auto___22959)){
args__17850__auto__.push((arguments[i__17844__auto___22960]));

var G__22961 = (i__17844__auto___22960 + (1));
i__17844__auto___22960 = G__22961;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22953){
var map__22954 = p__22953;
var map__22954__$1 = ((((!((map__22954 == null)))?((((map__22954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22954):map__22954);
var opts = map__22954__$1;
var statearr_22956_22962 = state;
(statearr_22956_22962[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22954,map__22954__$1,opts){
return (function (val){
var statearr_22957_22963 = state;
(statearr_22957_22963[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22954,map__22954__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22958_22964 = state;
(statearr_22958_22964[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22949){
var G__22950 = cljs.core.first.call(null,seq22949);
var seq22949__$1 = cljs.core.next.call(null,seq22949);
var G__22951 = cljs.core.first.call(null,seq22949__$1);
var seq22949__$2 = cljs.core.next.call(null,seq22949__$1);
var G__22952 = cljs.core.first.call(null,seq22949__$2);
var seq22949__$3 = cljs.core.next.call(null,seq22949__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22950,G__22951,G__22952,seq22949__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23128 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23129){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23129 = meta23129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23130,meta23129__$1){
var self__ = this;
var _23130__$1 = this;
return (new cljs.core.async.t_cljs$core$async23128(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23129__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23130){
var self__ = this;
var _23130__$1 = this;
return self__.meta23129;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23129","meta23129",-1712271745,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23128";

cljs.core.async.t_cljs$core$async23128.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23128");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23128 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23129){
return (new cljs.core.async.t_cljs$core$async23128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23129));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23128(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21578__auto___23291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___23291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___23291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23228){
var state_val_23229 = (state_23228[(1)]);
if((state_val_23229 === (7))){
var inst_23146 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23230_23292 = state_23228__$1;
(statearr_23230_23292[(2)] = inst_23146);

(statearr_23230_23292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (20))){
var inst_23158 = (state_23228[(7)]);
var state_23228__$1 = state_23228;
var statearr_23231_23293 = state_23228__$1;
(statearr_23231_23293[(2)] = inst_23158);

(statearr_23231_23293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (27))){
var state_23228__$1 = state_23228;
var statearr_23232_23294 = state_23228__$1;
(statearr_23232_23294[(2)] = null);

(statearr_23232_23294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (1))){
var inst_23134 = (state_23228[(8)]);
var inst_23134__$1 = calc_state.call(null);
var inst_23136 = (inst_23134__$1 == null);
var inst_23137 = cljs.core.not.call(null,inst_23136);
var state_23228__$1 = (function (){var statearr_23233 = state_23228;
(statearr_23233[(8)] = inst_23134__$1);

return statearr_23233;
})();
if(inst_23137){
var statearr_23234_23295 = state_23228__$1;
(statearr_23234_23295[(1)] = (2));

} else {
var statearr_23235_23296 = state_23228__$1;
(statearr_23235_23296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (24))){
var inst_23202 = (state_23228[(9)]);
var inst_23181 = (state_23228[(10)]);
var inst_23188 = (state_23228[(11)]);
var inst_23202__$1 = inst_23181.call(null,inst_23188);
var state_23228__$1 = (function (){var statearr_23236 = state_23228;
(statearr_23236[(9)] = inst_23202__$1);

return statearr_23236;
})();
if(cljs.core.truth_(inst_23202__$1)){
var statearr_23237_23297 = state_23228__$1;
(statearr_23237_23297[(1)] = (29));

} else {
var statearr_23238_23298 = state_23228__$1;
(statearr_23238_23298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (4))){
var inst_23149 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23149)){
var statearr_23239_23299 = state_23228__$1;
(statearr_23239_23299[(1)] = (8));

} else {
var statearr_23240_23300 = state_23228__$1;
(statearr_23240_23300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (15))){
var inst_23175 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23175)){
var statearr_23241_23301 = state_23228__$1;
(statearr_23241_23301[(1)] = (19));

} else {
var statearr_23242_23302 = state_23228__$1;
(statearr_23242_23302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (21))){
var inst_23180 = (state_23228[(12)]);
var inst_23180__$1 = (state_23228[(2)]);
var inst_23181 = cljs.core.get.call(null,inst_23180__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23182 = cljs.core.get.call(null,inst_23180__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23183 = cljs.core.get.call(null,inst_23180__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23228__$1 = (function (){var statearr_23243 = state_23228;
(statearr_23243[(13)] = inst_23182);

(statearr_23243[(10)] = inst_23181);

(statearr_23243[(12)] = inst_23180__$1);

return statearr_23243;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23228__$1,(22),inst_23183);
} else {
if((state_val_23229 === (31))){
var inst_23210 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23210)){
var statearr_23244_23303 = state_23228__$1;
(statearr_23244_23303[(1)] = (32));

} else {
var statearr_23245_23304 = state_23228__$1;
(statearr_23245_23304[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (32))){
var inst_23187 = (state_23228[(14)]);
var state_23228__$1 = state_23228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23228__$1,(35),out,inst_23187);
} else {
if((state_val_23229 === (33))){
var inst_23180 = (state_23228[(12)]);
var inst_23158 = inst_23180;
var state_23228__$1 = (function (){var statearr_23246 = state_23228;
(statearr_23246[(7)] = inst_23158);

return statearr_23246;
})();
var statearr_23247_23305 = state_23228__$1;
(statearr_23247_23305[(2)] = null);

(statearr_23247_23305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (13))){
var inst_23158 = (state_23228[(7)]);
var inst_23165 = inst_23158.cljs$lang$protocol_mask$partition0$;
var inst_23166 = (inst_23165 & (64));
var inst_23167 = inst_23158.cljs$core$ISeq$;
var inst_23168 = (inst_23166) || (inst_23167);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23168)){
var statearr_23248_23306 = state_23228__$1;
(statearr_23248_23306[(1)] = (16));

} else {
var statearr_23249_23307 = state_23228__$1;
(statearr_23249_23307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (22))){
var inst_23187 = (state_23228[(14)]);
var inst_23188 = (state_23228[(11)]);
var inst_23186 = (state_23228[(2)]);
var inst_23187__$1 = cljs.core.nth.call(null,inst_23186,(0),null);
var inst_23188__$1 = cljs.core.nth.call(null,inst_23186,(1),null);
var inst_23189 = (inst_23187__$1 == null);
var inst_23190 = cljs.core._EQ_.call(null,inst_23188__$1,change);
var inst_23191 = (inst_23189) || (inst_23190);
var state_23228__$1 = (function (){var statearr_23250 = state_23228;
(statearr_23250[(14)] = inst_23187__$1);

(statearr_23250[(11)] = inst_23188__$1);

return statearr_23250;
})();
if(cljs.core.truth_(inst_23191)){
var statearr_23251_23308 = state_23228__$1;
(statearr_23251_23308[(1)] = (23));

} else {
var statearr_23252_23309 = state_23228__$1;
(statearr_23252_23309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (36))){
var inst_23180 = (state_23228[(12)]);
var inst_23158 = inst_23180;
var state_23228__$1 = (function (){var statearr_23253 = state_23228;
(statearr_23253[(7)] = inst_23158);

return statearr_23253;
})();
var statearr_23254_23310 = state_23228__$1;
(statearr_23254_23310[(2)] = null);

(statearr_23254_23310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (29))){
var inst_23202 = (state_23228[(9)]);
var state_23228__$1 = state_23228;
var statearr_23255_23311 = state_23228__$1;
(statearr_23255_23311[(2)] = inst_23202);

(statearr_23255_23311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (6))){
var state_23228__$1 = state_23228;
var statearr_23256_23312 = state_23228__$1;
(statearr_23256_23312[(2)] = false);

(statearr_23256_23312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (28))){
var inst_23198 = (state_23228[(2)]);
var inst_23199 = calc_state.call(null);
var inst_23158 = inst_23199;
var state_23228__$1 = (function (){var statearr_23257 = state_23228;
(statearr_23257[(7)] = inst_23158);

(statearr_23257[(15)] = inst_23198);

return statearr_23257;
})();
var statearr_23258_23313 = state_23228__$1;
(statearr_23258_23313[(2)] = null);

(statearr_23258_23313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (25))){
var inst_23224 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23259_23314 = state_23228__$1;
(statearr_23259_23314[(2)] = inst_23224);

(statearr_23259_23314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (34))){
var inst_23222 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23260_23315 = state_23228__$1;
(statearr_23260_23315[(2)] = inst_23222);

(statearr_23260_23315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (17))){
var state_23228__$1 = state_23228;
var statearr_23261_23316 = state_23228__$1;
(statearr_23261_23316[(2)] = false);

(statearr_23261_23316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (3))){
var state_23228__$1 = state_23228;
var statearr_23262_23317 = state_23228__$1;
(statearr_23262_23317[(2)] = false);

(statearr_23262_23317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (12))){
var inst_23226 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23228__$1,inst_23226);
} else {
if((state_val_23229 === (2))){
var inst_23134 = (state_23228[(8)]);
var inst_23139 = inst_23134.cljs$lang$protocol_mask$partition0$;
var inst_23140 = (inst_23139 & (64));
var inst_23141 = inst_23134.cljs$core$ISeq$;
var inst_23142 = (inst_23140) || (inst_23141);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23142)){
var statearr_23263_23318 = state_23228__$1;
(statearr_23263_23318[(1)] = (5));

} else {
var statearr_23264_23319 = state_23228__$1;
(statearr_23264_23319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (23))){
var inst_23187 = (state_23228[(14)]);
var inst_23193 = (inst_23187 == null);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23193)){
var statearr_23265_23320 = state_23228__$1;
(statearr_23265_23320[(1)] = (26));

} else {
var statearr_23266_23321 = state_23228__$1;
(statearr_23266_23321[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (35))){
var inst_23213 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23213)){
var statearr_23267_23322 = state_23228__$1;
(statearr_23267_23322[(1)] = (36));

} else {
var statearr_23268_23323 = state_23228__$1;
(statearr_23268_23323[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (19))){
var inst_23158 = (state_23228[(7)]);
var inst_23177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23158);
var state_23228__$1 = state_23228;
var statearr_23269_23324 = state_23228__$1;
(statearr_23269_23324[(2)] = inst_23177);

(statearr_23269_23324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (11))){
var inst_23158 = (state_23228[(7)]);
var inst_23162 = (inst_23158 == null);
var inst_23163 = cljs.core.not.call(null,inst_23162);
var state_23228__$1 = state_23228;
if(inst_23163){
var statearr_23270_23325 = state_23228__$1;
(statearr_23270_23325[(1)] = (13));

} else {
var statearr_23271_23326 = state_23228__$1;
(statearr_23271_23326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (9))){
var inst_23134 = (state_23228[(8)]);
var state_23228__$1 = state_23228;
var statearr_23272_23327 = state_23228__$1;
(statearr_23272_23327[(2)] = inst_23134);

(statearr_23272_23327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (5))){
var state_23228__$1 = state_23228;
var statearr_23273_23328 = state_23228__$1;
(statearr_23273_23328[(2)] = true);

(statearr_23273_23328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (14))){
var state_23228__$1 = state_23228;
var statearr_23274_23329 = state_23228__$1;
(statearr_23274_23329[(2)] = false);

(statearr_23274_23329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (26))){
var inst_23188 = (state_23228[(11)]);
var inst_23195 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23188);
var state_23228__$1 = state_23228;
var statearr_23275_23330 = state_23228__$1;
(statearr_23275_23330[(2)] = inst_23195);

(statearr_23275_23330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (16))){
var state_23228__$1 = state_23228;
var statearr_23276_23331 = state_23228__$1;
(statearr_23276_23331[(2)] = true);

(statearr_23276_23331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (38))){
var inst_23218 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23277_23332 = state_23228__$1;
(statearr_23277_23332[(2)] = inst_23218);

(statearr_23277_23332[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (30))){
var inst_23182 = (state_23228[(13)]);
var inst_23181 = (state_23228[(10)]);
var inst_23188 = (state_23228[(11)]);
var inst_23205 = cljs.core.empty_QMARK_.call(null,inst_23181);
var inst_23206 = inst_23182.call(null,inst_23188);
var inst_23207 = cljs.core.not.call(null,inst_23206);
var inst_23208 = (inst_23205) && (inst_23207);
var state_23228__$1 = state_23228;
var statearr_23278_23333 = state_23228__$1;
(statearr_23278_23333[(2)] = inst_23208);

(statearr_23278_23333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (10))){
var inst_23134 = (state_23228[(8)]);
var inst_23154 = (state_23228[(2)]);
var inst_23155 = cljs.core.get.call(null,inst_23154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23156 = cljs.core.get.call(null,inst_23154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23157 = cljs.core.get.call(null,inst_23154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23158 = inst_23134;
var state_23228__$1 = (function (){var statearr_23279 = state_23228;
(statearr_23279[(16)] = inst_23156);

(statearr_23279[(7)] = inst_23158);

(statearr_23279[(17)] = inst_23155);

(statearr_23279[(18)] = inst_23157);

return statearr_23279;
})();
var statearr_23280_23334 = state_23228__$1;
(statearr_23280_23334[(2)] = null);

(statearr_23280_23334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (18))){
var inst_23172 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23281_23335 = state_23228__$1;
(statearr_23281_23335[(2)] = inst_23172);

(statearr_23281_23335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (37))){
var state_23228__$1 = state_23228;
var statearr_23282_23336 = state_23228__$1;
(statearr_23282_23336[(2)] = null);

(statearr_23282_23336[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (8))){
var inst_23134 = (state_23228[(8)]);
var inst_23151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23134);
var state_23228__$1 = state_23228;
var statearr_23283_23337 = state_23228__$1;
(statearr_23283_23337[(2)] = inst_23151);

(statearr_23283_23337[(1)] = (10));


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
});})(c__21578__auto___23291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21466__auto__,c__21578__auto___23291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21467__auto__ = null;
var cljs$core$async$mix_$_state_machine__21467__auto____0 = (function (){
var statearr_23287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23287[(0)] = cljs$core$async$mix_$_state_machine__21467__auto__);

(statearr_23287[(1)] = (1));

return statearr_23287;
});
var cljs$core$async$mix_$_state_machine__21467__auto____1 = (function (state_23228){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_23228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e23288){if((e23288 instanceof Object)){
var ex__21470__auto__ = e23288;
var statearr_23289_23338 = state_23228;
(statearr_23289_23338[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23339 = state_23228;
state_23228 = G__23339;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21467__auto__ = function(state_23228){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21467__auto____1.call(this,state_23228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21467__auto____0;
cljs$core$async$mix_$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21467__auto____1;
return cljs$core$async$mix_$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___23291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21580__auto__ = (function (){var statearr_23290 = f__21579__auto__.call(null);
(statearr_23290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___23291);

return statearr_23290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___23291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23340 = [];
var len__17843__auto___23343 = arguments.length;
var i__17844__auto___23344 = (0);
while(true){
if((i__17844__auto___23344 < len__17843__auto___23343)){
args23340.push((arguments[i__17844__auto___23344]));

var G__23345 = (i__17844__auto___23344 + (1));
i__17844__auto___23344 = G__23345;
continue;
} else {
}
break;
}

var G__23342 = args23340.length;
switch (G__23342) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23340.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
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
var args23348 = [];
var len__17843__auto___23473 = arguments.length;
var i__17844__auto___23474 = (0);
while(true){
if((i__17844__auto___23474 < len__17843__auto___23473)){
args23348.push((arguments[i__17844__auto___23474]));

var G__23475 = (i__17844__auto___23474 + (1));
i__17844__auto___23474 = G__23475;
continue;
} else {
}
break;
}

var G__23350 = args23348.length;
switch (G__23350) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23348.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__23347_SHARP_){
if(cljs.core.truth_(p1__23347_SHARP_.call(null,topic))){
return p1__23347_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23347_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23351 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23352){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23352 = meta23352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23353,meta23352__$1){
var self__ = this;
var _23353__$1 = this;
return (new cljs.core.async.t_cljs$core$async23351(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23352__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23353){
var self__ = this;
var _23353__$1 = this;
return self__.meta23352;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23352","meta23352",2127928306,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23351";

cljs.core.async.t_cljs$core$async23351.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23351");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23351 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23352){
return (new cljs.core.async.t_cljs$core$async23351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23352));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23351(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21578__auto___23477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___23477,mults,ensure_mult,p){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___23477,mults,ensure_mult,p){
return (function (state_23425){
var state_val_23426 = (state_23425[(1)]);
if((state_val_23426 === (7))){
var inst_23421 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23427_23478 = state_23425__$1;
(statearr_23427_23478[(2)] = inst_23421);

(statearr_23427_23478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (20))){
var state_23425__$1 = state_23425;
var statearr_23428_23479 = state_23425__$1;
(statearr_23428_23479[(2)] = null);

(statearr_23428_23479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (1))){
var state_23425__$1 = state_23425;
var statearr_23429_23480 = state_23425__$1;
(statearr_23429_23480[(2)] = null);

(statearr_23429_23480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (24))){
var inst_23404 = (state_23425[(7)]);
var inst_23413 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23404);
var state_23425__$1 = state_23425;
var statearr_23430_23481 = state_23425__$1;
(statearr_23430_23481[(2)] = inst_23413);

(statearr_23430_23481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (4))){
var inst_23356 = (state_23425[(8)]);
var inst_23356__$1 = (state_23425[(2)]);
var inst_23357 = (inst_23356__$1 == null);
var state_23425__$1 = (function (){var statearr_23431 = state_23425;
(statearr_23431[(8)] = inst_23356__$1);

return statearr_23431;
})();
if(cljs.core.truth_(inst_23357)){
var statearr_23432_23482 = state_23425__$1;
(statearr_23432_23482[(1)] = (5));

} else {
var statearr_23433_23483 = state_23425__$1;
(statearr_23433_23483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (15))){
var inst_23398 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23434_23484 = state_23425__$1;
(statearr_23434_23484[(2)] = inst_23398);

(statearr_23434_23484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (21))){
var inst_23418 = (state_23425[(2)]);
var state_23425__$1 = (function (){var statearr_23435 = state_23425;
(statearr_23435[(9)] = inst_23418);

return statearr_23435;
})();
var statearr_23436_23485 = state_23425__$1;
(statearr_23436_23485[(2)] = null);

(statearr_23436_23485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (13))){
var inst_23380 = (state_23425[(10)]);
var inst_23382 = cljs.core.chunked_seq_QMARK_.call(null,inst_23380);
var state_23425__$1 = state_23425;
if(inst_23382){
var statearr_23437_23486 = state_23425__$1;
(statearr_23437_23486[(1)] = (16));

} else {
var statearr_23438_23487 = state_23425__$1;
(statearr_23438_23487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (22))){
var inst_23410 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
if(cljs.core.truth_(inst_23410)){
var statearr_23439_23488 = state_23425__$1;
(statearr_23439_23488[(1)] = (23));

} else {
var statearr_23440_23489 = state_23425__$1;
(statearr_23440_23489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (6))){
var inst_23406 = (state_23425[(11)]);
var inst_23356 = (state_23425[(8)]);
var inst_23404 = (state_23425[(7)]);
var inst_23404__$1 = topic_fn.call(null,inst_23356);
var inst_23405 = cljs.core.deref.call(null,mults);
var inst_23406__$1 = cljs.core.get.call(null,inst_23405,inst_23404__$1);
var state_23425__$1 = (function (){var statearr_23441 = state_23425;
(statearr_23441[(11)] = inst_23406__$1);

(statearr_23441[(7)] = inst_23404__$1);

return statearr_23441;
})();
if(cljs.core.truth_(inst_23406__$1)){
var statearr_23442_23490 = state_23425__$1;
(statearr_23442_23490[(1)] = (19));

} else {
var statearr_23443_23491 = state_23425__$1;
(statearr_23443_23491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (25))){
var inst_23415 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23444_23492 = state_23425__$1;
(statearr_23444_23492[(2)] = inst_23415);

(statearr_23444_23492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (17))){
var inst_23380 = (state_23425[(10)]);
var inst_23389 = cljs.core.first.call(null,inst_23380);
var inst_23390 = cljs.core.async.muxch_STAR_.call(null,inst_23389);
var inst_23391 = cljs.core.async.close_BANG_.call(null,inst_23390);
var inst_23392 = cljs.core.next.call(null,inst_23380);
var inst_23366 = inst_23392;
var inst_23367 = null;
var inst_23368 = (0);
var inst_23369 = (0);
var state_23425__$1 = (function (){var statearr_23445 = state_23425;
(statearr_23445[(12)] = inst_23367);

(statearr_23445[(13)] = inst_23369);

(statearr_23445[(14)] = inst_23368);

(statearr_23445[(15)] = inst_23391);

(statearr_23445[(16)] = inst_23366);

return statearr_23445;
})();
var statearr_23446_23493 = state_23425__$1;
(statearr_23446_23493[(2)] = null);

(statearr_23446_23493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (3))){
var inst_23423 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23425__$1,inst_23423);
} else {
if((state_val_23426 === (12))){
var inst_23400 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23447_23494 = state_23425__$1;
(statearr_23447_23494[(2)] = inst_23400);

(statearr_23447_23494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (2))){
var state_23425__$1 = state_23425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23425__$1,(4),ch);
} else {
if((state_val_23426 === (23))){
var state_23425__$1 = state_23425;
var statearr_23448_23495 = state_23425__$1;
(statearr_23448_23495[(2)] = null);

(statearr_23448_23495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (19))){
var inst_23406 = (state_23425[(11)]);
var inst_23356 = (state_23425[(8)]);
var inst_23408 = cljs.core.async.muxch_STAR_.call(null,inst_23406);
var state_23425__$1 = state_23425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23425__$1,(22),inst_23408,inst_23356);
} else {
if((state_val_23426 === (11))){
var inst_23380 = (state_23425[(10)]);
var inst_23366 = (state_23425[(16)]);
var inst_23380__$1 = cljs.core.seq.call(null,inst_23366);
var state_23425__$1 = (function (){var statearr_23449 = state_23425;
(statearr_23449[(10)] = inst_23380__$1);

return statearr_23449;
})();
if(inst_23380__$1){
var statearr_23450_23496 = state_23425__$1;
(statearr_23450_23496[(1)] = (13));

} else {
var statearr_23451_23497 = state_23425__$1;
(statearr_23451_23497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (9))){
var inst_23402 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23452_23498 = state_23425__$1;
(statearr_23452_23498[(2)] = inst_23402);

(statearr_23452_23498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (5))){
var inst_23363 = cljs.core.deref.call(null,mults);
var inst_23364 = cljs.core.vals.call(null,inst_23363);
var inst_23365 = cljs.core.seq.call(null,inst_23364);
var inst_23366 = inst_23365;
var inst_23367 = null;
var inst_23368 = (0);
var inst_23369 = (0);
var state_23425__$1 = (function (){var statearr_23453 = state_23425;
(statearr_23453[(12)] = inst_23367);

(statearr_23453[(13)] = inst_23369);

(statearr_23453[(14)] = inst_23368);

(statearr_23453[(16)] = inst_23366);

return statearr_23453;
})();
var statearr_23454_23499 = state_23425__$1;
(statearr_23454_23499[(2)] = null);

(statearr_23454_23499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (14))){
var state_23425__$1 = state_23425;
var statearr_23458_23500 = state_23425__$1;
(statearr_23458_23500[(2)] = null);

(statearr_23458_23500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (16))){
var inst_23380 = (state_23425[(10)]);
var inst_23384 = cljs.core.chunk_first.call(null,inst_23380);
var inst_23385 = cljs.core.chunk_rest.call(null,inst_23380);
var inst_23386 = cljs.core.count.call(null,inst_23384);
var inst_23366 = inst_23385;
var inst_23367 = inst_23384;
var inst_23368 = inst_23386;
var inst_23369 = (0);
var state_23425__$1 = (function (){var statearr_23459 = state_23425;
(statearr_23459[(12)] = inst_23367);

(statearr_23459[(13)] = inst_23369);

(statearr_23459[(14)] = inst_23368);

(statearr_23459[(16)] = inst_23366);

return statearr_23459;
})();
var statearr_23460_23501 = state_23425__$1;
(statearr_23460_23501[(2)] = null);

(statearr_23460_23501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (10))){
var inst_23367 = (state_23425[(12)]);
var inst_23369 = (state_23425[(13)]);
var inst_23368 = (state_23425[(14)]);
var inst_23366 = (state_23425[(16)]);
var inst_23374 = cljs.core._nth.call(null,inst_23367,inst_23369);
var inst_23375 = cljs.core.async.muxch_STAR_.call(null,inst_23374);
var inst_23376 = cljs.core.async.close_BANG_.call(null,inst_23375);
var inst_23377 = (inst_23369 + (1));
var tmp23455 = inst_23367;
var tmp23456 = inst_23368;
var tmp23457 = inst_23366;
var inst_23366__$1 = tmp23457;
var inst_23367__$1 = tmp23455;
var inst_23368__$1 = tmp23456;
var inst_23369__$1 = inst_23377;
var state_23425__$1 = (function (){var statearr_23461 = state_23425;
(statearr_23461[(12)] = inst_23367__$1);

(statearr_23461[(17)] = inst_23376);

(statearr_23461[(13)] = inst_23369__$1);

(statearr_23461[(14)] = inst_23368__$1);

(statearr_23461[(16)] = inst_23366__$1);

return statearr_23461;
})();
var statearr_23462_23502 = state_23425__$1;
(statearr_23462_23502[(2)] = null);

(statearr_23462_23502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (18))){
var inst_23395 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23463_23503 = state_23425__$1;
(statearr_23463_23503[(2)] = inst_23395);

(statearr_23463_23503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (8))){
var inst_23369 = (state_23425[(13)]);
var inst_23368 = (state_23425[(14)]);
var inst_23371 = (inst_23369 < inst_23368);
var inst_23372 = inst_23371;
var state_23425__$1 = state_23425;
if(cljs.core.truth_(inst_23372)){
var statearr_23464_23504 = state_23425__$1;
(statearr_23464_23504[(1)] = (10));

} else {
var statearr_23465_23505 = state_23425__$1;
(statearr_23465_23505[(1)] = (11));

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
});})(c__21578__auto___23477,mults,ensure_mult,p))
;
return ((function (switch__21466__auto__,c__21578__auto___23477,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_23469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23469[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_23469[(1)] = (1));

return statearr_23469;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_23425){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_23425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e23470){if((e23470 instanceof Object)){
var ex__21470__auto__ = e23470;
var statearr_23471_23506 = state_23425;
(statearr_23471_23506[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23507 = state_23425;
state_23425 = G__23507;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_23425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_23425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___23477,mults,ensure_mult,p))
})();
var state__21580__auto__ = (function (){var statearr_23472 = f__21579__auto__.call(null);
(statearr_23472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___23477);

return statearr_23472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___23477,mults,ensure_mult,p))
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
var args23508 = [];
var len__17843__auto___23511 = arguments.length;
var i__17844__auto___23512 = (0);
while(true){
if((i__17844__auto___23512 < len__17843__auto___23511)){
args23508.push((arguments[i__17844__auto___23512]));

var G__23513 = (i__17844__auto___23512 + (1));
i__17844__auto___23512 = G__23513;
continue;
} else {
}
break;
}

var G__23510 = args23508.length;
switch (G__23510) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23508.length)].join('')));

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
var args23515 = [];
var len__17843__auto___23518 = arguments.length;
var i__17844__auto___23519 = (0);
while(true){
if((i__17844__auto___23519 < len__17843__auto___23518)){
args23515.push((arguments[i__17844__auto___23519]));

var G__23520 = (i__17844__auto___23519 + (1));
i__17844__auto___23519 = G__23520;
continue;
} else {
}
break;
}

var G__23517 = args23515.length;
switch (G__23517) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23515.length)].join('')));

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
var args23522 = [];
var len__17843__auto___23593 = arguments.length;
var i__17844__auto___23594 = (0);
while(true){
if((i__17844__auto___23594 < len__17843__auto___23593)){
args23522.push((arguments[i__17844__auto___23594]));

var G__23595 = (i__17844__auto___23594 + (1));
i__17844__auto___23594 = G__23595;
continue;
} else {
}
break;
}

var G__23524 = args23522.length;
switch (G__23524) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23522.length)].join('')));

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
var c__21578__auto___23597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___23597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___23597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23563){
var state_val_23564 = (state_23563[(1)]);
if((state_val_23564 === (7))){
var state_23563__$1 = state_23563;
var statearr_23565_23598 = state_23563__$1;
(statearr_23565_23598[(2)] = null);

(statearr_23565_23598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (1))){
var state_23563__$1 = state_23563;
var statearr_23566_23599 = state_23563__$1;
(statearr_23566_23599[(2)] = null);

(statearr_23566_23599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (4))){
var inst_23527 = (state_23563[(7)]);
var inst_23529 = (inst_23527 < cnt);
var state_23563__$1 = state_23563;
if(cljs.core.truth_(inst_23529)){
var statearr_23567_23600 = state_23563__$1;
(statearr_23567_23600[(1)] = (6));

} else {
var statearr_23568_23601 = state_23563__$1;
(statearr_23568_23601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (15))){
var inst_23559 = (state_23563[(2)]);
var state_23563__$1 = state_23563;
var statearr_23569_23602 = state_23563__$1;
(statearr_23569_23602[(2)] = inst_23559);

(statearr_23569_23602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (13))){
var inst_23552 = cljs.core.async.close_BANG_.call(null,out);
var state_23563__$1 = state_23563;
var statearr_23570_23603 = state_23563__$1;
(statearr_23570_23603[(2)] = inst_23552);

(statearr_23570_23603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (6))){
var state_23563__$1 = state_23563;
var statearr_23571_23604 = state_23563__$1;
(statearr_23571_23604[(2)] = null);

(statearr_23571_23604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (3))){
var inst_23561 = (state_23563[(2)]);
var state_23563__$1 = state_23563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23563__$1,inst_23561);
} else {
if((state_val_23564 === (12))){
var inst_23549 = (state_23563[(8)]);
var inst_23549__$1 = (state_23563[(2)]);
var inst_23550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23549__$1);
var state_23563__$1 = (function (){var statearr_23572 = state_23563;
(statearr_23572[(8)] = inst_23549__$1);

return statearr_23572;
})();
if(cljs.core.truth_(inst_23550)){
var statearr_23573_23605 = state_23563__$1;
(statearr_23573_23605[(1)] = (13));

} else {
var statearr_23574_23606 = state_23563__$1;
(statearr_23574_23606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (2))){
var inst_23526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23527 = (0);
var state_23563__$1 = (function (){var statearr_23575 = state_23563;
(statearr_23575[(7)] = inst_23527);

(statearr_23575[(9)] = inst_23526);

return statearr_23575;
})();
var statearr_23576_23607 = state_23563__$1;
(statearr_23576_23607[(2)] = null);

(statearr_23576_23607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (11))){
var inst_23527 = (state_23563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23563,(10),Object,null,(9));
var inst_23536 = chs__$1.call(null,inst_23527);
var inst_23537 = done.call(null,inst_23527);
var inst_23538 = cljs.core.async.take_BANG_.call(null,inst_23536,inst_23537);
var state_23563__$1 = state_23563;
var statearr_23577_23608 = state_23563__$1;
(statearr_23577_23608[(2)] = inst_23538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (9))){
var inst_23527 = (state_23563[(7)]);
var inst_23540 = (state_23563[(2)]);
var inst_23541 = (inst_23527 + (1));
var inst_23527__$1 = inst_23541;
var state_23563__$1 = (function (){var statearr_23578 = state_23563;
(statearr_23578[(10)] = inst_23540);

(statearr_23578[(7)] = inst_23527__$1);

return statearr_23578;
})();
var statearr_23579_23609 = state_23563__$1;
(statearr_23579_23609[(2)] = null);

(statearr_23579_23609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (5))){
var inst_23547 = (state_23563[(2)]);
var state_23563__$1 = (function (){var statearr_23580 = state_23563;
(statearr_23580[(11)] = inst_23547);

return statearr_23580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23563__$1,(12),dchan);
} else {
if((state_val_23564 === (14))){
var inst_23549 = (state_23563[(8)]);
var inst_23554 = cljs.core.apply.call(null,f,inst_23549);
var state_23563__$1 = state_23563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23563__$1,(16),out,inst_23554);
} else {
if((state_val_23564 === (16))){
var inst_23556 = (state_23563[(2)]);
var state_23563__$1 = (function (){var statearr_23581 = state_23563;
(statearr_23581[(12)] = inst_23556);

return statearr_23581;
})();
var statearr_23582_23610 = state_23563__$1;
(statearr_23582_23610[(2)] = null);

(statearr_23582_23610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (10))){
var inst_23531 = (state_23563[(2)]);
var inst_23532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23563__$1 = (function (){var statearr_23583 = state_23563;
(statearr_23583[(13)] = inst_23531);

return statearr_23583;
})();
var statearr_23584_23611 = state_23563__$1;
(statearr_23584_23611[(2)] = inst_23532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23564 === (8))){
var inst_23545 = (state_23563[(2)]);
var state_23563__$1 = state_23563;
var statearr_23585_23612 = state_23563__$1;
(statearr_23585_23612[(2)] = inst_23545);

(statearr_23585_23612[(1)] = (5));


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
});})(c__21578__auto___23597,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21466__auto__,c__21578__auto___23597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_23589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23589[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_23589[(1)] = (1));

return statearr_23589;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_23563){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_23563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e23590){if((e23590 instanceof Object)){
var ex__21470__auto__ = e23590;
var statearr_23591_23613 = state_23563;
(statearr_23591_23613[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23614 = state_23563;
state_23563 = G__23614;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_23563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_23563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___23597,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21580__auto__ = (function (){var statearr_23592 = f__21579__auto__.call(null);
(statearr_23592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___23597);

return statearr_23592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___23597,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23616 = [];
var len__17843__auto___23672 = arguments.length;
var i__17844__auto___23673 = (0);
while(true){
if((i__17844__auto___23673 < len__17843__auto___23672)){
args23616.push((arguments[i__17844__auto___23673]));

var G__23674 = (i__17844__auto___23673 + (1));
i__17844__auto___23673 = G__23674;
continue;
} else {
}
break;
}

var G__23618 = args23616.length;
switch (G__23618) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23616.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21578__auto___23676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___23676,out){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___23676,out){
return (function (state_23648){
var state_val_23649 = (state_23648[(1)]);
if((state_val_23649 === (7))){
var inst_23628 = (state_23648[(7)]);
var inst_23627 = (state_23648[(8)]);
var inst_23627__$1 = (state_23648[(2)]);
var inst_23628__$1 = cljs.core.nth.call(null,inst_23627__$1,(0),null);
var inst_23629 = cljs.core.nth.call(null,inst_23627__$1,(1),null);
var inst_23630 = (inst_23628__$1 == null);
var state_23648__$1 = (function (){var statearr_23650 = state_23648;
(statearr_23650[(7)] = inst_23628__$1);

(statearr_23650[(8)] = inst_23627__$1);

(statearr_23650[(9)] = inst_23629);

return statearr_23650;
})();
if(cljs.core.truth_(inst_23630)){
var statearr_23651_23677 = state_23648__$1;
(statearr_23651_23677[(1)] = (8));

} else {
var statearr_23652_23678 = state_23648__$1;
(statearr_23652_23678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (1))){
var inst_23619 = cljs.core.vec.call(null,chs);
var inst_23620 = inst_23619;
var state_23648__$1 = (function (){var statearr_23653 = state_23648;
(statearr_23653[(10)] = inst_23620);

return statearr_23653;
})();
var statearr_23654_23679 = state_23648__$1;
(statearr_23654_23679[(2)] = null);

(statearr_23654_23679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (4))){
var inst_23620 = (state_23648[(10)]);
var state_23648__$1 = state_23648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23648__$1,(7),inst_23620);
} else {
if((state_val_23649 === (6))){
var inst_23644 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23655_23680 = state_23648__$1;
(statearr_23655_23680[(2)] = inst_23644);

(statearr_23655_23680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (3))){
var inst_23646 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23648__$1,inst_23646);
} else {
if((state_val_23649 === (2))){
var inst_23620 = (state_23648[(10)]);
var inst_23622 = cljs.core.count.call(null,inst_23620);
var inst_23623 = (inst_23622 > (0));
var state_23648__$1 = state_23648;
if(cljs.core.truth_(inst_23623)){
var statearr_23657_23681 = state_23648__$1;
(statearr_23657_23681[(1)] = (4));

} else {
var statearr_23658_23682 = state_23648__$1;
(statearr_23658_23682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (11))){
var inst_23620 = (state_23648[(10)]);
var inst_23637 = (state_23648[(2)]);
var tmp23656 = inst_23620;
var inst_23620__$1 = tmp23656;
var state_23648__$1 = (function (){var statearr_23659 = state_23648;
(statearr_23659[(11)] = inst_23637);

(statearr_23659[(10)] = inst_23620__$1);

return statearr_23659;
})();
var statearr_23660_23683 = state_23648__$1;
(statearr_23660_23683[(2)] = null);

(statearr_23660_23683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (9))){
var inst_23628 = (state_23648[(7)]);
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23648__$1,(11),out,inst_23628);
} else {
if((state_val_23649 === (5))){
var inst_23642 = cljs.core.async.close_BANG_.call(null,out);
var state_23648__$1 = state_23648;
var statearr_23661_23684 = state_23648__$1;
(statearr_23661_23684[(2)] = inst_23642);

(statearr_23661_23684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (10))){
var inst_23640 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23662_23685 = state_23648__$1;
(statearr_23662_23685[(2)] = inst_23640);

(statearr_23662_23685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (8))){
var inst_23628 = (state_23648[(7)]);
var inst_23627 = (state_23648[(8)]);
var inst_23620 = (state_23648[(10)]);
var inst_23629 = (state_23648[(9)]);
var inst_23632 = (function (){var cs = inst_23620;
var vec__23625 = inst_23627;
var v = inst_23628;
var c = inst_23629;
return ((function (cs,vec__23625,v,c,inst_23628,inst_23627,inst_23620,inst_23629,state_val_23649,c__21578__auto___23676,out){
return (function (p1__23615_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23615_SHARP_);
});
;})(cs,vec__23625,v,c,inst_23628,inst_23627,inst_23620,inst_23629,state_val_23649,c__21578__auto___23676,out))
})();
var inst_23633 = cljs.core.filterv.call(null,inst_23632,inst_23620);
var inst_23620__$1 = inst_23633;
var state_23648__$1 = (function (){var statearr_23663 = state_23648;
(statearr_23663[(10)] = inst_23620__$1);

return statearr_23663;
})();
var statearr_23664_23686 = state_23648__$1;
(statearr_23664_23686[(2)] = null);

(statearr_23664_23686[(1)] = (2));


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
});})(c__21578__auto___23676,out))
;
return ((function (switch__21466__auto__,c__21578__auto___23676,out){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_23668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23668[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_23668[(1)] = (1));

return statearr_23668;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_23648){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_23648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e23669){if((e23669 instanceof Object)){
var ex__21470__auto__ = e23669;
var statearr_23670_23687 = state_23648;
(statearr_23670_23687[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23688 = state_23648;
state_23648 = G__23688;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_23648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_23648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___23676,out))
})();
var state__21580__auto__ = (function (){var statearr_23671 = f__21579__auto__.call(null);
(statearr_23671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___23676);

return statearr_23671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___23676,out))
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
var args23689 = [];
var len__17843__auto___23738 = arguments.length;
var i__17844__auto___23739 = (0);
while(true){
if((i__17844__auto___23739 < len__17843__auto___23738)){
args23689.push((arguments[i__17844__auto___23739]));

var G__23740 = (i__17844__auto___23739 + (1));
i__17844__auto___23739 = G__23740;
continue;
} else {
}
break;
}

var G__23691 = args23689.length;
switch (G__23691) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23689.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21578__auto___23742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___23742,out){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___23742,out){
return (function (state_23715){
var state_val_23716 = (state_23715[(1)]);
if((state_val_23716 === (7))){
var inst_23697 = (state_23715[(7)]);
var inst_23697__$1 = (state_23715[(2)]);
var inst_23698 = (inst_23697__$1 == null);
var inst_23699 = cljs.core.not.call(null,inst_23698);
var state_23715__$1 = (function (){var statearr_23717 = state_23715;
(statearr_23717[(7)] = inst_23697__$1);

return statearr_23717;
})();
if(inst_23699){
var statearr_23718_23743 = state_23715__$1;
(statearr_23718_23743[(1)] = (8));

} else {
var statearr_23719_23744 = state_23715__$1;
(statearr_23719_23744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (1))){
var inst_23692 = (0);
var state_23715__$1 = (function (){var statearr_23720 = state_23715;
(statearr_23720[(8)] = inst_23692);

return statearr_23720;
})();
var statearr_23721_23745 = state_23715__$1;
(statearr_23721_23745[(2)] = null);

(statearr_23721_23745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (4))){
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23715__$1,(7),ch);
} else {
if((state_val_23716 === (6))){
var inst_23710 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23722_23746 = state_23715__$1;
(statearr_23722_23746[(2)] = inst_23710);

(statearr_23722_23746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (3))){
var inst_23712 = (state_23715[(2)]);
var inst_23713 = cljs.core.async.close_BANG_.call(null,out);
var state_23715__$1 = (function (){var statearr_23723 = state_23715;
(statearr_23723[(9)] = inst_23712);

return statearr_23723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23715__$1,inst_23713);
} else {
if((state_val_23716 === (2))){
var inst_23692 = (state_23715[(8)]);
var inst_23694 = (inst_23692 < n);
var state_23715__$1 = state_23715;
if(cljs.core.truth_(inst_23694)){
var statearr_23724_23747 = state_23715__$1;
(statearr_23724_23747[(1)] = (4));

} else {
var statearr_23725_23748 = state_23715__$1;
(statearr_23725_23748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (11))){
var inst_23692 = (state_23715[(8)]);
var inst_23702 = (state_23715[(2)]);
var inst_23703 = (inst_23692 + (1));
var inst_23692__$1 = inst_23703;
var state_23715__$1 = (function (){var statearr_23726 = state_23715;
(statearr_23726[(10)] = inst_23702);

(statearr_23726[(8)] = inst_23692__$1);

return statearr_23726;
})();
var statearr_23727_23749 = state_23715__$1;
(statearr_23727_23749[(2)] = null);

(statearr_23727_23749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (9))){
var state_23715__$1 = state_23715;
var statearr_23728_23750 = state_23715__$1;
(statearr_23728_23750[(2)] = null);

(statearr_23728_23750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (5))){
var state_23715__$1 = state_23715;
var statearr_23729_23751 = state_23715__$1;
(statearr_23729_23751[(2)] = null);

(statearr_23729_23751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (10))){
var inst_23707 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23730_23752 = state_23715__$1;
(statearr_23730_23752[(2)] = inst_23707);

(statearr_23730_23752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (8))){
var inst_23697 = (state_23715[(7)]);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(11),out,inst_23697);
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
});})(c__21578__auto___23742,out))
;
return ((function (switch__21466__auto__,c__21578__auto___23742,out){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_23734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23734[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_23734[(1)] = (1));

return statearr_23734;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_23715){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_23715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e23735){if((e23735 instanceof Object)){
var ex__21470__auto__ = e23735;
var statearr_23736_23753 = state_23715;
(statearr_23736_23753[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23754 = state_23715;
state_23715 = G__23754;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_23715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_23715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___23742,out))
})();
var state__21580__auto__ = (function (){var statearr_23737 = f__21579__auto__.call(null);
(statearr_23737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___23742);

return statearr_23737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___23742,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23762 = (function (map_LT_,f,ch,meta23763){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23763 = meta23763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23764,meta23763__$1){
var self__ = this;
var _23764__$1 = this;
return (new cljs.core.async.t_cljs$core$async23762(self__.map_LT_,self__.f,self__.ch,meta23763__$1));
});

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23764){
var self__ = this;
var _23764__$1 = this;
return self__.meta23763;
});

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23765 = (function (map_LT_,f,ch,meta23763,_,fn1,meta23766){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23763 = meta23763;
this._ = _;
this.fn1 = fn1;
this.meta23766 = meta23766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23767,meta23766__$1){
var self__ = this;
var _23767__$1 = this;
return (new cljs.core.async.t_cljs$core$async23765(self__.map_LT_,self__.f,self__.ch,self__.meta23763,self__._,self__.fn1,meta23766__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23767){
var self__ = this;
var _23767__$1 = this;
return self__.meta23766;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23755_SHARP_){
return f1.call(null,(((p1__23755_SHARP_ == null))?null:self__.f.call(null,p1__23755_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23765.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23763","meta23763",-933530078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23762","cljs.core.async/t_cljs$core$async23762",493952000,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23766","meta23766",518305408,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23765";

cljs.core.async.t_cljs$core$async23765.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23765");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23765 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23765(map_LT___$1,f__$1,ch__$1,meta23763__$1,___$2,fn1__$1,meta23766){
return (new cljs.core.async.t_cljs$core$async23765(map_LT___$1,f__$1,ch__$1,meta23763__$1,___$2,fn1__$1,meta23766));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23765(self__.map_LT_,self__.f,self__.ch,self__.meta23763,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23763","meta23763",-933530078,null)], null);
});

cljs.core.async.t_cljs$core$async23762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23762";

cljs.core.async.t_cljs$core$async23762.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23762");
});

cljs.core.async.__GT_t_cljs$core$async23762 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23762(map_LT___$1,f__$1,ch__$1,meta23763){
return (new cljs.core.async.t_cljs$core$async23762(map_LT___$1,f__$1,ch__$1,meta23763));
});

}

return (new cljs.core.async.t_cljs$core$async23762(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23771 = (function (map_GT_,f,ch,meta23772){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23772 = meta23772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23773,meta23772__$1){
var self__ = this;
var _23773__$1 = this;
return (new cljs.core.async.t_cljs$core$async23771(self__.map_GT_,self__.f,self__.ch,meta23772__$1));
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23773){
var self__ = this;
var _23773__$1 = this;
return self__.meta23772;
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23772","meta23772",-101255606,null)], null);
});

cljs.core.async.t_cljs$core$async23771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23771";

cljs.core.async.t_cljs$core$async23771.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23771");
});

cljs.core.async.__GT_t_cljs$core$async23771 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23771(map_GT___$1,f__$1,ch__$1,meta23772){
return (new cljs.core.async.t_cljs$core$async23771(map_GT___$1,f__$1,ch__$1,meta23772));
});

}

return (new cljs.core.async.t_cljs$core$async23771(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23777 = (function (filter_GT_,p,ch,meta23778){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23778 = meta23778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23779,meta23778__$1){
var self__ = this;
var _23779__$1 = this;
return (new cljs.core.async.t_cljs$core$async23777(self__.filter_GT_,self__.p,self__.ch,meta23778__$1));
});

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23779){
var self__ = this;
var _23779__$1 = this;
return self__.meta23778;
});

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23778","meta23778",1363972700,null)], null);
});

cljs.core.async.t_cljs$core$async23777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23777";

cljs.core.async.t_cljs$core$async23777.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23777");
});

cljs.core.async.__GT_t_cljs$core$async23777 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23777(filter_GT___$1,p__$1,ch__$1,meta23778){
return (new cljs.core.async.t_cljs$core$async23777(filter_GT___$1,p__$1,ch__$1,meta23778));
});

}

return (new cljs.core.async.t_cljs$core$async23777(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23780 = [];
var len__17843__auto___23824 = arguments.length;
var i__17844__auto___23825 = (0);
while(true){
if((i__17844__auto___23825 < len__17843__auto___23824)){
args23780.push((arguments[i__17844__auto___23825]));

var G__23826 = (i__17844__auto___23825 + (1));
i__17844__auto___23825 = G__23826;
continue;
} else {
}
break;
}

var G__23782 = args23780.length;
switch (G__23782) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23780.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21578__auto___23828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___23828,out){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___23828,out){
return (function (state_23803){
var state_val_23804 = (state_23803[(1)]);
if((state_val_23804 === (7))){
var inst_23799 = (state_23803[(2)]);
var state_23803__$1 = state_23803;
var statearr_23805_23829 = state_23803__$1;
(statearr_23805_23829[(2)] = inst_23799);

(statearr_23805_23829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (1))){
var state_23803__$1 = state_23803;
var statearr_23806_23830 = state_23803__$1;
(statearr_23806_23830[(2)] = null);

(statearr_23806_23830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (4))){
var inst_23785 = (state_23803[(7)]);
var inst_23785__$1 = (state_23803[(2)]);
var inst_23786 = (inst_23785__$1 == null);
var state_23803__$1 = (function (){var statearr_23807 = state_23803;
(statearr_23807[(7)] = inst_23785__$1);

return statearr_23807;
})();
if(cljs.core.truth_(inst_23786)){
var statearr_23808_23831 = state_23803__$1;
(statearr_23808_23831[(1)] = (5));

} else {
var statearr_23809_23832 = state_23803__$1;
(statearr_23809_23832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (6))){
var inst_23785 = (state_23803[(7)]);
var inst_23790 = p.call(null,inst_23785);
var state_23803__$1 = state_23803;
if(cljs.core.truth_(inst_23790)){
var statearr_23810_23833 = state_23803__$1;
(statearr_23810_23833[(1)] = (8));

} else {
var statearr_23811_23834 = state_23803__$1;
(statearr_23811_23834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (3))){
var inst_23801 = (state_23803[(2)]);
var state_23803__$1 = state_23803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23803__$1,inst_23801);
} else {
if((state_val_23804 === (2))){
var state_23803__$1 = state_23803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23803__$1,(4),ch);
} else {
if((state_val_23804 === (11))){
var inst_23793 = (state_23803[(2)]);
var state_23803__$1 = state_23803;
var statearr_23812_23835 = state_23803__$1;
(statearr_23812_23835[(2)] = inst_23793);

(statearr_23812_23835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (9))){
var state_23803__$1 = state_23803;
var statearr_23813_23836 = state_23803__$1;
(statearr_23813_23836[(2)] = null);

(statearr_23813_23836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (5))){
var inst_23788 = cljs.core.async.close_BANG_.call(null,out);
var state_23803__$1 = state_23803;
var statearr_23814_23837 = state_23803__$1;
(statearr_23814_23837[(2)] = inst_23788);

(statearr_23814_23837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (10))){
var inst_23796 = (state_23803[(2)]);
var state_23803__$1 = (function (){var statearr_23815 = state_23803;
(statearr_23815[(8)] = inst_23796);

return statearr_23815;
})();
var statearr_23816_23838 = state_23803__$1;
(statearr_23816_23838[(2)] = null);

(statearr_23816_23838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23804 === (8))){
var inst_23785 = (state_23803[(7)]);
var state_23803__$1 = state_23803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23803__$1,(11),out,inst_23785);
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
});})(c__21578__auto___23828,out))
;
return ((function (switch__21466__auto__,c__21578__auto___23828,out){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_23820 = [null,null,null,null,null,null,null,null,null];
(statearr_23820[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_23820[(1)] = (1));

return statearr_23820;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_23803){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_23803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e23821){if((e23821 instanceof Object)){
var ex__21470__auto__ = e23821;
var statearr_23822_23839 = state_23803;
(statearr_23822_23839[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23840 = state_23803;
state_23803 = G__23840;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_23803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_23803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___23828,out))
})();
var state__21580__auto__ = (function (){var statearr_23823 = f__21579__auto__.call(null);
(statearr_23823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___23828);

return statearr_23823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___23828,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23841 = [];
var len__17843__auto___23844 = arguments.length;
var i__17844__auto___23845 = (0);
while(true){
if((i__17844__auto___23845 < len__17843__auto___23844)){
args23841.push((arguments[i__17844__auto___23845]));

var G__23846 = (i__17844__auto___23845 + (1));
i__17844__auto___23845 = G__23846;
continue;
} else {
}
break;
}

var G__23843 = args23841.length;
switch (G__23843) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23841.length)].join('')));

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
var c__21578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto__){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto__){
return (function (state_24013){
var state_val_24014 = (state_24013[(1)]);
if((state_val_24014 === (7))){
var inst_24009 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24015_24056 = state_24013__$1;
(statearr_24015_24056[(2)] = inst_24009);

(statearr_24015_24056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (20))){
var inst_23979 = (state_24013[(7)]);
var inst_23990 = (state_24013[(2)]);
var inst_23991 = cljs.core.next.call(null,inst_23979);
var inst_23965 = inst_23991;
var inst_23966 = null;
var inst_23967 = (0);
var inst_23968 = (0);
var state_24013__$1 = (function (){var statearr_24016 = state_24013;
(statearr_24016[(8)] = inst_23965);

(statearr_24016[(9)] = inst_23990);

(statearr_24016[(10)] = inst_23966);

(statearr_24016[(11)] = inst_23967);

(statearr_24016[(12)] = inst_23968);

return statearr_24016;
})();
var statearr_24017_24057 = state_24013__$1;
(statearr_24017_24057[(2)] = null);

(statearr_24017_24057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (1))){
var state_24013__$1 = state_24013;
var statearr_24018_24058 = state_24013__$1;
(statearr_24018_24058[(2)] = null);

(statearr_24018_24058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (4))){
var inst_23954 = (state_24013[(13)]);
var inst_23954__$1 = (state_24013[(2)]);
var inst_23955 = (inst_23954__$1 == null);
var state_24013__$1 = (function (){var statearr_24019 = state_24013;
(statearr_24019[(13)] = inst_23954__$1);

return statearr_24019;
})();
if(cljs.core.truth_(inst_23955)){
var statearr_24020_24059 = state_24013__$1;
(statearr_24020_24059[(1)] = (5));

} else {
var statearr_24021_24060 = state_24013__$1;
(statearr_24021_24060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (15))){
var state_24013__$1 = state_24013;
var statearr_24025_24061 = state_24013__$1;
(statearr_24025_24061[(2)] = null);

(statearr_24025_24061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (21))){
var state_24013__$1 = state_24013;
var statearr_24026_24062 = state_24013__$1;
(statearr_24026_24062[(2)] = null);

(statearr_24026_24062[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (13))){
var inst_23965 = (state_24013[(8)]);
var inst_23966 = (state_24013[(10)]);
var inst_23967 = (state_24013[(11)]);
var inst_23968 = (state_24013[(12)]);
var inst_23975 = (state_24013[(2)]);
var inst_23976 = (inst_23968 + (1));
var tmp24022 = inst_23965;
var tmp24023 = inst_23966;
var tmp24024 = inst_23967;
var inst_23965__$1 = tmp24022;
var inst_23966__$1 = tmp24023;
var inst_23967__$1 = tmp24024;
var inst_23968__$1 = inst_23976;
var state_24013__$1 = (function (){var statearr_24027 = state_24013;
(statearr_24027[(8)] = inst_23965__$1);

(statearr_24027[(14)] = inst_23975);

(statearr_24027[(10)] = inst_23966__$1);

(statearr_24027[(11)] = inst_23967__$1);

(statearr_24027[(12)] = inst_23968__$1);

return statearr_24027;
})();
var statearr_24028_24063 = state_24013__$1;
(statearr_24028_24063[(2)] = null);

(statearr_24028_24063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (22))){
var state_24013__$1 = state_24013;
var statearr_24029_24064 = state_24013__$1;
(statearr_24029_24064[(2)] = null);

(statearr_24029_24064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (6))){
var inst_23954 = (state_24013[(13)]);
var inst_23963 = f.call(null,inst_23954);
var inst_23964 = cljs.core.seq.call(null,inst_23963);
var inst_23965 = inst_23964;
var inst_23966 = null;
var inst_23967 = (0);
var inst_23968 = (0);
var state_24013__$1 = (function (){var statearr_24030 = state_24013;
(statearr_24030[(8)] = inst_23965);

(statearr_24030[(10)] = inst_23966);

(statearr_24030[(11)] = inst_23967);

(statearr_24030[(12)] = inst_23968);

return statearr_24030;
})();
var statearr_24031_24065 = state_24013__$1;
(statearr_24031_24065[(2)] = null);

(statearr_24031_24065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (17))){
var inst_23979 = (state_24013[(7)]);
var inst_23983 = cljs.core.chunk_first.call(null,inst_23979);
var inst_23984 = cljs.core.chunk_rest.call(null,inst_23979);
var inst_23985 = cljs.core.count.call(null,inst_23983);
var inst_23965 = inst_23984;
var inst_23966 = inst_23983;
var inst_23967 = inst_23985;
var inst_23968 = (0);
var state_24013__$1 = (function (){var statearr_24032 = state_24013;
(statearr_24032[(8)] = inst_23965);

(statearr_24032[(10)] = inst_23966);

(statearr_24032[(11)] = inst_23967);

(statearr_24032[(12)] = inst_23968);

return statearr_24032;
})();
var statearr_24033_24066 = state_24013__$1;
(statearr_24033_24066[(2)] = null);

(statearr_24033_24066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (3))){
var inst_24011 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24013__$1,inst_24011);
} else {
if((state_val_24014 === (12))){
var inst_23999 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24034_24067 = state_24013__$1;
(statearr_24034_24067[(2)] = inst_23999);

(statearr_24034_24067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (2))){
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(4),in$);
} else {
if((state_val_24014 === (23))){
var inst_24007 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24035_24068 = state_24013__$1;
(statearr_24035_24068[(2)] = inst_24007);

(statearr_24035_24068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (19))){
var inst_23994 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24036_24069 = state_24013__$1;
(statearr_24036_24069[(2)] = inst_23994);

(statearr_24036_24069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (11))){
var inst_23965 = (state_24013[(8)]);
var inst_23979 = (state_24013[(7)]);
var inst_23979__$1 = cljs.core.seq.call(null,inst_23965);
var state_24013__$1 = (function (){var statearr_24037 = state_24013;
(statearr_24037[(7)] = inst_23979__$1);

return statearr_24037;
})();
if(inst_23979__$1){
var statearr_24038_24070 = state_24013__$1;
(statearr_24038_24070[(1)] = (14));

} else {
var statearr_24039_24071 = state_24013__$1;
(statearr_24039_24071[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (9))){
var inst_24001 = (state_24013[(2)]);
var inst_24002 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24013__$1 = (function (){var statearr_24040 = state_24013;
(statearr_24040[(15)] = inst_24001);

return statearr_24040;
})();
if(cljs.core.truth_(inst_24002)){
var statearr_24041_24072 = state_24013__$1;
(statearr_24041_24072[(1)] = (21));

} else {
var statearr_24042_24073 = state_24013__$1;
(statearr_24042_24073[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (5))){
var inst_23957 = cljs.core.async.close_BANG_.call(null,out);
var state_24013__$1 = state_24013;
var statearr_24043_24074 = state_24013__$1;
(statearr_24043_24074[(2)] = inst_23957);

(statearr_24043_24074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (14))){
var inst_23979 = (state_24013[(7)]);
var inst_23981 = cljs.core.chunked_seq_QMARK_.call(null,inst_23979);
var state_24013__$1 = state_24013;
if(inst_23981){
var statearr_24044_24075 = state_24013__$1;
(statearr_24044_24075[(1)] = (17));

} else {
var statearr_24045_24076 = state_24013__$1;
(statearr_24045_24076[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (16))){
var inst_23997 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24046_24077 = state_24013__$1;
(statearr_24046_24077[(2)] = inst_23997);

(statearr_24046_24077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (10))){
var inst_23966 = (state_24013[(10)]);
var inst_23968 = (state_24013[(12)]);
var inst_23973 = cljs.core._nth.call(null,inst_23966,inst_23968);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24013__$1,(13),out,inst_23973);
} else {
if((state_val_24014 === (18))){
var inst_23979 = (state_24013[(7)]);
var inst_23988 = cljs.core.first.call(null,inst_23979);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24013__$1,(20),out,inst_23988);
} else {
if((state_val_24014 === (8))){
var inst_23967 = (state_24013[(11)]);
var inst_23968 = (state_24013[(12)]);
var inst_23970 = (inst_23968 < inst_23967);
var inst_23971 = inst_23970;
var state_24013__$1 = state_24013;
if(cljs.core.truth_(inst_23971)){
var statearr_24047_24078 = state_24013__$1;
(statearr_24047_24078[(1)] = (10));

} else {
var statearr_24048_24079 = state_24013__$1;
(statearr_24048_24079[(1)] = (11));

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
});})(c__21578__auto__))
;
return ((function (switch__21466__auto__,c__21578__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21467__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21467__auto____0 = (function (){
var statearr_24052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24052[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21467__auto__);

(statearr_24052[(1)] = (1));

return statearr_24052;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21467__auto____1 = (function (state_24013){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_24013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e24053){if((e24053 instanceof Object)){
var ex__21470__auto__ = e24053;
var statearr_24054_24080 = state_24013;
(statearr_24054_24080[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24081 = state_24013;
state_24013 = G__24081;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21467__auto__ = function(state_24013){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21467__auto____1.call(this,state_24013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21467__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21467__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto__))
})();
var state__21580__auto__ = (function (){var statearr_24055 = f__21579__auto__.call(null);
(statearr_24055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto__);

return statearr_24055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto__))
);

return c__21578__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24082 = [];
var len__17843__auto___24085 = arguments.length;
var i__17844__auto___24086 = (0);
while(true){
if((i__17844__auto___24086 < len__17843__auto___24085)){
args24082.push((arguments[i__17844__auto___24086]));

var G__24087 = (i__17844__auto___24086 + (1));
i__17844__auto___24086 = G__24087;
continue;
} else {
}
break;
}

var G__24084 = args24082.length;
switch (G__24084) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24082.length)].join('')));

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
var args24089 = [];
var len__17843__auto___24092 = arguments.length;
var i__17844__auto___24093 = (0);
while(true){
if((i__17844__auto___24093 < len__17843__auto___24092)){
args24089.push((arguments[i__17844__auto___24093]));

var G__24094 = (i__17844__auto___24093 + (1));
i__17844__auto___24093 = G__24094;
continue;
} else {
}
break;
}

var G__24091 = args24089.length;
switch (G__24091) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24089.length)].join('')));

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
var args24096 = [];
var len__17843__auto___24147 = arguments.length;
var i__17844__auto___24148 = (0);
while(true){
if((i__17844__auto___24148 < len__17843__auto___24147)){
args24096.push((arguments[i__17844__auto___24148]));

var G__24149 = (i__17844__auto___24148 + (1));
i__17844__auto___24148 = G__24149;
continue;
} else {
}
break;
}

var G__24098 = args24096.length;
switch (G__24098) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24096.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21578__auto___24151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___24151,out){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___24151,out){
return (function (state_24122){
var state_val_24123 = (state_24122[(1)]);
if((state_val_24123 === (7))){
var inst_24117 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24124_24152 = state_24122__$1;
(statearr_24124_24152[(2)] = inst_24117);

(statearr_24124_24152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (1))){
var inst_24099 = null;
var state_24122__$1 = (function (){var statearr_24125 = state_24122;
(statearr_24125[(7)] = inst_24099);

return statearr_24125;
})();
var statearr_24126_24153 = state_24122__$1;
(statearr_24126_24153[(2)] = null);

(statearr_24126_24153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (4))){
var inst_24102 = (state_24122[(8)]);
var inst_24102__$1 = (state_24122[(2)]);
var inst_24103 = (inst_24102__$1 == null);
var inst_24104 = cljs.core.not.call(null,inst_24103);
var state_24122__$1 = (function (){var statearr_24127 = state_24122;
(statearr_24127[(8)] = inst_24102__$1);

return statearr_24127;
})();
if(inst_24104){
var statearr_24128_24154 = state_24122__$1;
(statearr_24128_24154[(1)] = (5));

} else {
var statearr_24129_24155 = state_24122__$1;
(statearr_24129_24155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (6))){
var state_24122__$1 = state_24122;
var statearr_24130_24156 = state_24122__$1;
(statearr_24130_24156[(2)] = null);

(statearr_24130_24156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (3))){
var inst_24119 = (state_24122[(2)]);
var inst_24120 = cljs.core.async.close_BANG_.call(null,out);
var state_24122__$1 = (function (){var statearr_24131 = state_24122;
(statearr_24131[(9)] = inst_24119);

return statearr_24131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24122__$1,inst_24120);
} else {
if((state_val_24123 === (2))){
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24122__$1,(4),ch);
} else {
if((state_val_24123 === (11))){
var inst_24102 = (state_24122[(8)]);
var inst_24111 = (state_24122[(2)]);
var inst_24099 = inst_24102;
var state_24122__$1 = (function (){var statearr_24132 = state_24122;
(statearr_24132[(7)] = inst_24099);

(statearr_24132[(10)] = inst_24111);

return statearr_24132;
})();
var statearr_24133_24157 = state_24122__$1;
(statearr_24133_24157[(2)] = null);

(statearr_24133_24157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (9))){
var inst_24102 = (state_24122[(8)]);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24122__$1,(11),out,inst_24102);
} else {
if((state_val_24123 === (5))){
var inst_24102 = (state_24122[(8)]);
var inst_24099 = (state_24122[(7)]);
var inst_24106 = cljs.core._EQ_.call(null,inst_24102,inst_24099);
var state_24122__$1 = state_24122;
if(inst_24106){
var statearr_24135_24158 = state_24122__$1;
(statearr_24135_24158[(1)] = (8));

} else {
var statearr_24136_24159 = state_24122__$1;
(statearr_24136_24159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (10))){
var inst_24114 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24137_24160 = state_24122__$1;
(statearr_24137_24160[(2)] = inst_24114);

(statearr_24137_24160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (8))){
var inst_24099 = (state_24122[(7)]);
var tmp24134 = inst_24099;
var inst_24099__$1 = tmp24134;
var state_24122__$1 = (function (){var statearr_24138 = state_24122;
(statearr_24138[(7)] = inst_24099__$1);

return statearr_24138;
})();
var statearr_24139_24161 = state_24122__$1;
(statearr_24139_24161[(2)] = null);

(statearr_24139_24161[(1)] = (2));


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
});})(c__21578__auto___24151,out))
;
return ((function (switch__21466__auto__,c__21578__auto___24151,out){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_24143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24143[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_24143[(1)] = (1));

return statearr_24143;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_24122){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_24122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e24144){if((e24144 instanceof Object)){
var ex__21470__auto__ = e24144;
var statearr_24145_24162 = state_24122;
(statearr_24145_24162[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24163 = state_24122;
state_24122 = G__24163;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___24151,out))
})();
var state__21580__auto__ = (function (){var statearr_24146 = f__21579__auto__.call(null);
(statearr_24146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___24151);

return statearr_24146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___24151,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24164 = [];
var len__17843__auto___24234 = arguments.length;
var i__17844__auto___24235 = (0);
while(true){
if((i__17844__auto___24235 < len__17843__auto___24234)){
args24164.push((arguments[i__17844__auto___24235]));

var G__24236 = (i__17844__auto___24235 + (1));
i__17844__auto___24235 = G__24236;
continue;
} else {
}
break;
}

var G__24166 = args24164.length;
switch (G__24166) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24164.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21578__auto___24238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___24238,out){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___24238,out){
return (function (state_24204){
var state_val_24205 = (state_24204[(1)]);
if((state_val_24205 === (7))){
var inst_24200 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24206_24239 = state_24204__$1;
(statearr_24206_24239[(2)] = inst_24200);

(statearr_24206_24239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (1))){
var inst_24167 = (new Array(n));
var inst_24168 = inst_24167;
var inst_24169 = (0);
var state_24204__$1 = (function (){var statearr_24207 = state_24204;
(statearr_24207[(7)] = inst_24168);

(statearr_24207[(8)] = inst_24169);

return statearr_24207;
})();
var statearr_24208_24240 = state_24204__$1;
(statearr_24208_24240[(2)] = null);

(statearr_24208_24240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (4))){
var inst_24172 = (state_24204[(9)]);
var inst_24172__$1 = (state_24204[(2)]);
var inst_24173 = (inst_24172__$1 == null);
var inst_24174 = cljs.core.not.call(null,inst_24173);
var state_24204__$1 = (function (){var statearr_24209 = state_24204;
(statearr_24209[(9)] = inst_24172__$1);

return statearr_24209;
})();
if(inst_24174){
var statearr_24210_24241 = state_24204__$1;
(statearr_24210_24241[(1)] = (5));

} else {
var statearr_24211_24242 = state_24204__$1;
(statearr_24211_24242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (15))){
var inst_24194 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24212_24243 = state_24204__$1;
(statearr_24212_24243[(2)] = inst_24194);

(statearr_24212_24243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (13))){
var state_24204__$1 = state_24204;
var statearr_24213_24244 = state_24204__$1;
(statearr_24213_24244[(2)] = null);

(statearr_24213_24244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (6))){
var inst_24169 = (state_24204[(8)]);
var inst_24190 = (inst_24169 > (0));
var state_24204__$1 = state_24204;
if(cljs.core.truth_(inst_24190)){
var statearr_24214_24245 = state_24204__$1;
(statearr_24214_24245[(1)] = (12));

} else {
var statearr_24215_24246 = state_24204__$1;
(statearr_24215_24246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (3))){
var inst_24202 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24204__$1,inst_24202);
} else {
if((state_val_24205 === (12))){
var inst_24168 = (state_24204[(7)]);
var inst_24192 = cljs.core.vec.call(null,inst_24168);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24204__$1,(15),out,inst_24192);
} else {
if((state_val_24205 === (2))){
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24204__$1,(4),ch);
} else {
if((state_val_24205 === (11))){
var inst_24184 = (state_24204[(2)]);
var inst_24185 = (new Array(n));
var inst_24168 = inst_24185;
var inst_24169 = (0);
var state_24204__$1 = (function (){var statearr_24216 = state_24204;
(statearr_24216[(10)] = inst_24184);

(statearr_24216[(7)] = inst_24168);

(statearr_24216[(8)] = inst_24169);

return statearr_24216;
})();
var statearr_24217_24247 = state_24204__$1;
(statearr_24217_24247[(2)] = null);

(statearr_24217_24247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (9))){
var inst_24168 = (state_24204[(7)]);
var inst_24182 = cljs.core.vec.call(null,inst_24168);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24204__$1,(11),out,inst_24182);
} else {
if((state_val_24205 === (5))){
var inst_24177 = (state_24204[(11)]);
var inst_24168 = (state_24204[(7)]);
var inst_24169 = (state_24204[(8)]);
var inst_24172 = (state_24204[(9)]);
var inst_24176 = (inst_24168[inst_24169] = inst_24172);
var inst_24177__$1 = (inst_24169 + (1));
var inst_24178 = (inst_24177__$1 < n);
var state_24204__$1 = (function (){var statearr_24218 = state_24204;
(statearr_24218[(11)] = inst_24177__$1);

(statearr_24218[(12)] = inst_24176);

return statearr_24218;
})();
if(cljs.core.truth_(inst_24178)){
var statearr_24219_24248 = state_24204__$1;
(statearr_24219_24248[(1)] = (8));

} else {
var statearr_24220_24249 = state_24204__$1;
(statearr_24220_24249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (14))){
var inst_24197 = (state_24204[(2)]);
var inst_24198 = cljs.core.async.close_BANG_.call(null,out);
var state_24204__$1 = (function (){var statearr_24222 = state_24204;
(statearr_24222[(13)] = inst_24197);

return statearr_24222;
})();
var statearr_24223_24250 = state_24204__$1;
(statearr_24223_24250[(2)] = inst_24198);

(statearr_24223_24250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (10))){
var inst_24188 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24224_24251 = state_24204__$1;
(statearr_24224_24251[(2)] = inst_24188);

(statearr_24224_24251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24205 === (8))){
var inst_24177 = (state_24204[(11)]);
var inst_24168 = (state_24204[(7)]);
var tmp24221 = inst_24168;
var inst_24168__$1 = tmp24221;
var inst_24169 = inst_24177;
var state_24204__$1 = (function (){var statearr_24225 = state_24204;
(statearr_24225[(7)] = inst_24168__$1);

(statearr_24225[(8)] = inst_24169);

return statearr_24225;
})();
var statearr_24226_24252 = state_24204__$1;
(statearr_24226_24252[(2)] = null);

(statearr_24226_24252[(1)] = (2));


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
});})(c__21578__auto___24238,out))
;
return ((function (switch__21466__auto__,c__21578__auto___24238,out){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_24230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24230[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_24230[(1)] = (1));

return statearr_24230;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_24204){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_24204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e24231){if((e24231 instanceof Object)){
var ex__21470__auto__ = e24231;
var statearr_24232_24253 = state_24204;
(statearr_24232_24253[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24254 = state_24204;
state_24204 = G__24254;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_24204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_24204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___24238,out))
})();
var state__21580__auto__ = (function (){var statearr_24233 = f__21579__auto__.call(null);
(statearr_24233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___24238);

return statearr_24233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___24238,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24255 = [];
var len__17843__auto___24329 = arguments.length;
var i__17844__auto___24330 = (0);
while(true){
if((i__17844__auto___24330 < len__17843__auto___24329)){
args24255.push((arguments[i__17844__auto___24330]));

var G__24331 = (i__17844__auto___24330 + (1));
i__17844__auto___24330 = G__24331;
continue;
} else {
}
break;
}

var G__24257 = args24255.length;
switch (G__24257) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24255.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21578__auto___24333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21578__auto___24333,out){
return (function (){
var f__21579__auto__ = (function (){var switch__21466__auto__ = ((function (c__21578__auto___24333,out){
return (function (state_24299){
var state_val_24300 = (state_24299[(1)]);
if((state_val_24300 === (7))){
var inst_24295 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24301_24334 = state_24299__$1;
(statearr_24301_24334[(2)] = inst_24295);

(statearr_24301_24334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (1))){
var inst_24258 = [];
var inst_24259 = inst_24258;
var inst_24260 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24299__$1 = (function (){var statearr_24302 = state_24299;
(statearr_24302[(7)] = inst_24259);

(statearr_24302[(8)] = inst_24260);

return statearr_24302;
})();
var statearr_24303_24335 = state_24299__$1;
(statearr_24303_24335[(2)] = null);

(statearr_24303_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (4))){
var inst_24263 = (state_24299[(9)]);
var inst_24263__$1 = (state_24299[(2)]);
var inst_24264 = (inst_24263__$1 == null);
var inst_24265 = cljs.core.not.call(null,inst_24264);
var state_24299__$1 = (function (){var statearr_24304 = state_24299;
(statearr_24304[(9)] = inst_24263__$1);

return statearr_24304;
})();
if(inst_24265){
var statearr_24305_24336 = state_24299__$1;
(statearr_24305_24336[(1)] = (5));

} else {
var statearr_24306_24337 = state_24299__$1;
(statearr_24306_24337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (15))){
var inst_24289 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24307_24338 = state_24299__$1;
(statearr_24307_24338[(2)] = inst_24289);

(statearr_24307_24338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (13))){
var state_24299__$1 = state_24299;
var statearr_24308_24339 = state_24299__$1;
(statearr_24308_24339[(2)] = null);

(statearr_24308_24339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (6))){
var inst_24259 = (state_24299[(7)]);
var inst_24284 = inst_24259.length;
var inst_24285 = (inst_24284 > (0));
var state_24299__$1 = state_24299;
if(cljs.core.truth_(inst_24285)){
var statearr_24309_24340 = state_24299__$1;
(statearr_24309_24340[(1)] = (12));

} else {
var statearr_24310_24341 = state_24299__$1;
(statearr_24310_24341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (3))){
var inst_24297 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24299__$1,inst_24297);
} else {
if((state_val_24300 === (12))){
var inst_24259 = (state_24299[(7)]);
var inst_24287 = cljs.core.vec.call(null,inst_24259);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24299__$1,(15),out,inst_24287);
} else {
if((state_val_24300 === (2))){
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24299__$1,(4),ch);
} else {
if((state_val_24300 === (11))){
var inst_24267 = (state_24299[(10)]);
var inst_24263 = (state_24299[(9)]);
var inst_24277 = (state_24299[(2)]);
var inst_24278 = [];
var inst_24279 = inst_24278.push(inst_24263);
var inst_24259 = inst_24278;
var inst_24260 = inst_24267;
var state_24299__$1 = (function (){var statearr_24311 = state_24299;
(statearr_24311[(7)] = inst_24259);

(statearr_24311[(8)] = inst_24260);

(statearr_24311[(11)] = inst_24277);

(statearr_24311[(12)] = inst_24279);

return statearr_24311;
})();
var statearr_24312_24342 = state_24299__$1;
(statearr_24312_24342[(2)] = null);

(statearr_24312_24342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (9))){
var inst_24259 = (state_24299[(7)]);
var inst_24275 = cljs.core.vec.call(null,inst_24259);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24299__$1,(11),out,inst_24275);
} else {
if((state_val_24300 === (5))){
var inst_24267 = (state_24299[(10)]);
var inst_24260 = (state_24299[(8)]);
var inst_24263 = (state_24299[(9)]);
var inst_24267__$1 = f.call(null,inst_24263);
var inst_24268 = cljs.core._EQ_.call(null,inst_24267__$1,inst_24260);
var inst_24269 = cljs.core.keyword_identical_QMARK_.call(null,inst_24260,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24270 = (inst_24268) || (inst_24269);
var state_24299__$1 = (function (){var statearr_24313 = state_24299;
(statearr_24313[(10)] = inst_24267__$1);

return statearr_24313;
})();
if(cljs.core.truth_(inst_24270)){
var statearr_24314_24343 = state_24299__$1;
(statearr_24314_24343[(1)] = (8));

} else {
var statearr_24315_24344 = state_24299__$1;
(statearr_24315_24344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (14))){
var inst_24292 = (state_24299[(2)]);
var inst_24293 = cljs.core.async.close_BANG_.call(null,out);
var state_24299__$1 = (function (){var statearr_24317 = state_24299;
(statearr_24317[(13)] = inst_24292);

return statearr_24317;
})();
var statearr_24318_24345 = state_24299__$1;
(statearr_24318_24345[(2)] = inst_24293);

(statearr_24318_24345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (10))){
var inst_24282 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24319_24346 = state_24299__$1;
(statearr_24319_24346[(2)] = inst_24282);

(statearr_24319_24346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24300 === (8))){
var inst_24259 = (state_24299[(7)]);
var inst_24267 = (state_24299[(10)]);
var inst_24263 = (state_24299[(9)]);
var inst_24272 = inst_24259.push(inst_24263);
var tmp24316 = inst_24259;
var inst_24259__$1 = tmp24316;
var inst_24260 = inst_24267;
var state_24299__$1 = (function (){var statearr_24320 = state_24299;
(statearr_24320[(7)] = inst_24259__$1);

(statearr_24320[(8)] = inst_24260);

(statearr_24320[(14)] = inst_24272);

return statearr_24320;
})();
var statearr_24321_24347 = state_24299__$1;
(statearr_24321_24347[(2)] = null);

(statearr_24321_24347[(1)] = (2));


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
});})(c__21578__auto___24333,out))
;
return ((function (switch__21466__auto__,c__21578__auto___24333,out){
return (function() {
var cljs$core$async$state_machine__21467__auto__ = null;
var cljs$core$async$state_machine__21467__auto____0 = (function (){
var statearr_24325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24325[(0)] = cljs$core$async$state_machine__21467__auto__);

(statearr_24325[(1)] = (1));

return statearr_24325;
});
var cljs$core$async$state_machine__21467__auto____1 = (function (state_24299){
while(true){
var ret_value__21468__auto__ = (function (){try{while(true){
var result__21469__auto__ = switch__21466__auto__.call(null,state_24299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21469__auto__;
}
break;
}
}catch (e24326){if((e24326 instanceof Object)){
var ex__21470__auto__ = e24326;
var statearr_24327_24348 = state_24299;
(statearr_24327_24348[(5)] = ex__21470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24349 = state_24299;
state_24299 = G__24349;
continue;
} else {
return ret_value__21468__auto__;
}
break;
}
});
cljs$core$async$state_machine__21467__auto__ = function(state_24299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21467__auto____1.call(this,state_24299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21467__auto____0;
cljs$core$async$state_machine__21467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21467__auto____1;
return cljs$core$async$state_machine__21467__auto__;
})()
;})(switch__21466__auto__,c__21578__auto___24333,out))
})();
var state__21580__auto__ = (function (){var statearr_24328 = f__21579__auto__.call(null);
(statearr_24328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21578__auto___24333);

return statearr_24328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21580__auto__);
});})(c__21578__auto___24333,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map