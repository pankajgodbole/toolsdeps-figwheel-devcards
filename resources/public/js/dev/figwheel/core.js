// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__9641_SHARP_){
var k = f.call(null,p1__9641_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9642){
var vec__9643 = p__9642;
var k = cljs.core.nth.call(null,vec__9643,(0),null);
var v = cljs.core.nth.call(null,vec__9643,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9647 = arguments.length;
var i__4642__auto___9648 = (0);
while(true){
if((i__4642__auto___9648 < len__4641__auto___9647)){
args__4647__auto__.push((arguments[i__4642__auto___9648]));

var G__9649 = (i__4642__auto___9648 + (1));
i__4642__auto___9648 = G__9649;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq9646){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9646));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__9652){
var map__9653 = p__9652;
var map__9653__$1 = (((((!((map__9653 == null))))?(((((map__9653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9653):map__9653);
var message = cljs.core.get.call(null,map__9653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__9653__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__9653,map__9653__$1,message,column){
return (function (p1__9651_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9651_SHARP_], null)));
});})(map__9653,map__9653__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__9653,map__9653__$1,message,column){
return (function (p1__9650_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__9650_SHARP_);
});})(map__9653,map__9653__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__9656){
var map__9657 = p__9656;
var map__9657__$1 = (((((!((map__9657 == null))))?(((((map__9657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9657):map__9657);
var message_data = map__9657__$1;
var message = cljs.core.get.call(null,map__9657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__9657__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9657__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__9657__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__9659 = file_excerpt;
var map__9659__$1 = (((((!((map__9659 == null))))?(((((map__9659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9659):map__9659);
var start_line = cljs.core.get.call(null,map__9659__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__9659__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__9659__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__9659,map__9659__$1,start_line,path,excerpt,map__9657,map__9657__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__9659,map__9659__$1,start_line,path,excerpt,map__9657,map__9657__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__9660 = cljs.core.split_with.call(null,((function (map__9659,map__9659__$1,start_line,path,excerpt,lines,map__9657,map__9657__$1,message_data,message,line,column,file_excerpt){
return (function (p1__9655_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__9655_SHARP_));
});})(map__9659,map__9659__$1,start_line,path,excerpt,lines,map__9657,map__9657__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__9660,(0),null);
var end = cljs.core.nth.call(null,vec__9660,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__9664){
var map__9665 = p__9664;
var map__9665__$1 = (((((!((map__9665 == null))))?(((((map__9665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9665):map__9665);
var file = cljs.core.get.call(null,map__9665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__9665__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9665__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__9667 = "";
var G__9667__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9667),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__9667);
var G__9667__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9667__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__9667__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9667__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__9667__$2;
}
});
figwheel.core.version_value = (function figwheel$core$version_value(v){
try{return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000000000),(10000),(1)], null),cljs.core.map.call(null,(function (p1__9668_SHARP_){
return parseInt(p1__9668_SHARP_);
}),cljs.core.take.call(null,(3),clojure.string.split.call(null,v,/[^\d]/)))));
}catch (e9675){if((e9675 instanceof Error)){
var e = e9675;
return ((100000000000) * (100));
} else {
throw e9675;

}
}});

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = (((figwheel.core.version_value.call(null,cljs.core._STAR_clojurescript_version_STAR_) >= figwheel.core.version_value.call(null,"1.10.844")))?(new goog.debug.Logger("Figwheel")):goog.log.getLogger.call(null,"Figwheel"));
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_9718 = (new goog.debug.Console());
var G__9676_9719 = c_9718.getFormatter();
goog.object.set(G__9676_9719,"showAbsoluteTime",false);

goog.object.set(G__9676_9719,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_9718);

}

var temp__5753__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__9677 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__9677,"data",(function (){var or__4047__auto__ = data;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__9677;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5751__auto__ = e.event_;
if(cljs.core.truth_(temp__5751__auto__)){
var e__$1 = temp__5751__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_9720 = cljs.core.atom.call(null,(0));
var promise_chain_9721 = (new goog.Promise(((function (last_reload_timestamp_9720){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_9720))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_9720,promise_chain_9721){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5751__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
var and__4036__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_9720) < ts);
if(and__4036__auto__){
return ts;
} else {
return and__4036__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ts = temp__5751__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_9720,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_9721.then(((function (warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__9678 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__9679 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__9679;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__9678,_STAR_inline_code_message_max_column_STAR__temp_val__9679,warn,warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721){
return (function (){
var seq__9680 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__9681 = null;
var count__9682 = (0);
var i__9683 = (0);
while(true){
if((i__9683 < count__9682)){
var w = cljs.core._nth.call(null,chunk__9681,i__9683);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__9722 = seq__9680;
var G__9723 = chunk__9681;
var G__9724 = count__9682;
var G__9725 = (i__9683 + (1));
seq__9680 = G__9722;
chunk__9681 = G__9723;
count__9682 = G__9724;
i__9683 = G__9725;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9680);
if(temp__5753__auto__){
var seq__9680__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9680__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__9680__$1);
var G__9726 = cljs.core.chunk_rest.call(null,seq__9680__$1);
var G__9727 = c__4461__auto__;
var G__9728 = cljs.core.count.call(null,c__4461__auto__);
var G__9729 = (0);
seq__9680 = G__9726;
chunk__9681 = G__9727;
count__9682 = G__9728;
i__9683 = G__9729;
continue;
} else {
var w = cljs.core.first.call(null,seq__9680__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__9730 = cljs.core.next.call(null,seq__9680__$1);
var G__9731 = null;
var G__9732 = (0);
var G__9733 = (0);
seq__9680 = G__9730;
chunk__9681 = G__9731;
count__9682 = G__9732;
i__9683 = G__9733;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__9678,_STAR_inline_code_message_max_column_STAR__temp_val__9679,warn,warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__9678;
}});})(warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_9721.then(((function (warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__9684 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__9685 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__9685;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__9684;
}});})(warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721))
);
} else {
return promise_chain_9721.then(((function (warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5751__auto__,last_reload_timestamp_9720,promise_chain_9721))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_9720,promise_chain_9721))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4036__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4036__auto____$1){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9734 = arguments.length;
var i__4642__auto___9735 = (0);
while(true){
if((i__4642__auto___9735 < len__4641__auto___9734)){
args__4647__auto__.push((arguments[i__4642__auto___9735]));

var G__9736 = (i__4642__auto___9735 + (1));
i__4642__auto___9735 = G__9736;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__9688){
var vec__9689 = p__9688;
var n = cljs.core.nth.call(null,vec__9689,(0),null);
var mdata = cljs.core.nth.call(null,vec__9689,(1),null);
var temp__5753__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__9692 = cljs.core.seq.call(null,hooks);
var chunk__9693 = null;
var count__9694 = (0);
var i__9695 = (0);
while(true){
if((i__9695 < count__9694)){
var vec__9696 = cljs.core._nth.call(null,chunk__9693,i__9695);
var n = cljs.core.nth.call(null,vec__9696,(0),null);
var f = cljs.core.nth.call(null,vec__9696,(1),null);
var temp__5751__auto___9737 = cljs.core.reduce.call(null,((function (seq__9692,chunk__9693,count__9694,i__9695,vec__9696,n,f,hooks){
return (function (p1__9669_SHARP_,p2__9670_SHARP_){
if(cljs.core.truth_(p1__9669_SHARP_)){
return goog.object.get(p1__9669_SHARP_,p2__9670_SHARP_);
} else {
return null;
}
});})(seq__9692,chunk__9693,count__9694,i__9695,vec__9696,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___9737)){
var hook_9738 = temp__5751__auto___9737;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_9738,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__9739 = seq__9692;
var G__9740 = chunk__9693;
var G__9741 = count__9694;
var G__9742 = (i__9695 + (1));
seq__9692 = G__9739;
chunk__9693 = G__9740;
count__9694 = G__9741;
i__9695 = G__9742;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9692);
if(temp__5753__auto__){
var seq__9692__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9692__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__9692__$1);
var G__9743 = cljs.core.chunk_rest.call(null,seq__9692__$1);
var G__9744 = c__4461__auto__;
var G__9745 = cljs.core.count.call(null,c__4461__auto__);
var G__9746 = (0);
seq__9692 = G__9743;
chunk__9693 = G__9744;
count__9694 = G__9745;
i__9695 = G__9746;
continue;
} else {
var vec__9699 = cljs.core.first.call(null,seq__9692__$1);
var n = cljs.core.nth.call(null,vec__9699,(0),null);
var f = cljs.core.nth.call(null,vec__9699,(1),null);
var temp__5751__auto___9747 = cljs.core.reduce.call(null,((function (seq__9692,chunk__9693,count__9694,i__9695,vec__9699,n,f,seq__9692__$1,temp__5753__auto__,hooks){
return (function (p1__9669_SHARP_,p2__9670_SHARP_){
if(cljs.core.truth_(p1__9669_SHARP_)){
return goog.object.get(p1__9669_SHARP_,p2__9670_SHARP_);
} else {
return null;
}
});})(seq__9692,chunk__9693,count__9694,i__9695,vec__9699,n,f,seq__9692__$1,temp__5753__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___9747)){
var hook_9748 = temp__5751__auto___9747;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_9748,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__9749 = cljs.core.next.call(null,seq__9692__$1);
var G__9750 = null;
var G__9751 = (0);
var G__9752 = (0);
seq__9692 = G__9749;
chunk__9693 = G__9750;
count__9694 = G__9751;
i__9695 = G__9752;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq9686){
var G__9687 = cljs.core.first.call(null,seq9686);
var seq9686__$1 = cljs.core.next.call(null,seq9686);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9687,seq9686__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9702){
var vec__9703 = p__9702;
var k = cljs.core.nth.call(null,vec__9703,(0),null);
var v = cljs.core.nth.call(null,vec__9703,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__9671_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__9671_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__9671_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__9672_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__9672_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4036__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4036__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4036__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__9673_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__9673_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__9706_9753 = cljs.core.seq.call(null,to_reload);
var chunk__9707_9754 = null;
var count__9708_9755 = (0);
var i__9709_9756 = (0);
while(true){
if((i__9709_9756 < count__9708_9755)){
var ns_9757 = cljs.core._nth.call(null,chunk__9707_9754,i__9709_9756);
goog.require(cljs.core.name.call(null,ns_9757),true);


var G__9758 = seq__9706_9753;
var G__9759 = chunk__9707_9754;
var G__9760 = count__9708_9755;
var G__9761 = (i__9709_9756 + (1));
seq__9706_9753 = G__9758;
chunk__9707_9754 = G__9759;
count__9708_9755 = G__9760;
i__9709_9756 = G__9761;
continue;
} else {
var temp__5753__auto___9762 = cljs.core.seq.call(null,seq__9706_9753);
if(temp__5753__auto___9762){
var seq__9706_9763__$1 = temp__5753__auto___9762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9706_9763__$1)){
var c__4461__auto___9764 = cljs.core.chunk_first.call(null,seq__9706_9763__$1);
var G__9765 = cljs.core.chunk_rest.call(null,seq__9706_9763__$1);
var G__9766 = c__4461__auto___9764;
var G__9767 = cljs.core.count.call(null,c__4461__auto___9764);
var G__9768 = (0);
seq__9706_9753 = G__9765;
chunk__9707_9754 = G__9766;
count__9708_9755 = G__9767;
i__9709_9756 = G__9768;
continue;
} else {
var ns_9769 = cljs.core.first.call(null,seq__9706_9763__$1);
goog.require(cljs.core.name.call(null,ns_9769),true);


var G__9770 = cljs.core.next.call(null,seq__9706_9763__$1);
var G__9771 = null;
var G__9772 = (0);
var G__9773 = (0);
seq__9706_9753 = G__9770;
chunk__9707_9754 = G__9771;
count__9708_9755 = G__9772;
i__9709_9756 = G__9773;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_9774 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var not_loaded = temp__5753__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_9774);
} else {
setTimeout(after_reload_fn_9774,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__9710 = cljs.core.seq.call(null,warnings);
var chunk__9711 = null;
var count__9712 = (0);
var i__9713 = (0);
while(true){
if((i__9713 < count__9712)){
var warning = cljs.core._nth.call(null,chunk__9711,i__9713);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__9775 = seq__9710;
var G__9776 = chunk__9711;
var G__9777 = count__9712;
var G__9778 = (i__9713 + (1));
seq__9710 = G__9775;
chunk__9711 = G__9776;
count__9712 = G__9777;
i__9713 = G__9778;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__9710);
if(temp__5753__auto__){
var seq__9710__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9710__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__9710__$1);
var G__9779 = cljs.core.chunk_rest.call(null,seq__9710__$1);
var G__9780 = c__4461__auto__;
var G__9781 = cljs.core.count.call(null,c__4461__auto__);
var G__9782 = (0);
seq__9710 = G__9779;
chunk__9711 = G__9780;
count__9712 = G__9781;
i__9713 = G__9782;
continue;
} else {
var warning = cljs.core.first.call(null,seq__9710__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__9783 = cljs.core.next.call(null,seq__9710__$1);
var G__9784 = null;
var G__9785 = (0);
var G__9786 = (0);
seq__9710 = G__9783;
chunk__9711 = G__9784;
count__9712 = G__9785;
i__9713 = G__9786;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__9714){
var map__9715 = p__9714;
var map__9715__$1 = (((((!((map__9715 == null))))?(((((map__9715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9715):map__9715);
var exception_data = map__9715__$1;
var file = cljs.core.get.call(null,map__9715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__9715__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__9715__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__9715,map__9715__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__9715,map__9715__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__9715,map__9715__$1,exception_data,file,type,message){
return (function (p1__9674_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__9674_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__9715,map__9715__$1,exception_data,file,type,message))
);

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__9717 = "Compile Exception - ";
var G__9717__$1 = (cljs.core.truth_((function (){var or__4047__auto__ = type;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return message;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9717),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__9717);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9717__$1)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join('');
} else {
return G__9717__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
