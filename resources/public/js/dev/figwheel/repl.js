// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl.logging');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
figwheel.repl.default_ssl_port = (9533);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
return figwheel.repl.logging.console_logging.call(null);
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return figwheel.repl.logging.debug.call(null,figwheel.repl.logger,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
if((!((goog.debugLoader_ == null)))){
var path = goog.debugLoader_.getPathFromDeps_(ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
} else {
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
goog.require = figwheel.repl.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

if(cljs.core.truth_((function (){var or__4047__auto__ = reload;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();
}

goog.isProvided_ = (function (name){
return false;
});

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload;

return goog.require = figwheel.repl.figwheel_require;
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__11420_SHARP_,p2__11421_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11420_SHARP_)),p2__11421_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__11422_SHARP_,p2__11423_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11422_SHARP_),p2__11423_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__11431 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__11431.addCallback(((function (G__11431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__11431))
);

G__11431.addErrback(((function (G__11431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__11431))
);

return G__11431;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e11432){if((e11432 instanceof Error)){
var e = e11432;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e11432;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e11433){if((e11433 instanceof Error)){
var e = e11433;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e11433;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__11434 = cljs.core._EQ_;
var expr__11435 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__11434.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__11435))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__11434.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__11435))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__11434.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__11435))){
return figwheel.repl.worker_import_script;
} else {
return ((function (pred__11434,expr__11435){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__11434,expr__11435))
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__11437,callback){
var map__11438 = p__11437;
var map__11438__$1 = (((((!((map__11438 == null))))?(((((map__11438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11438):map__11438);
var file_msg = map__11438__$1;
var request_url = cljs.core.get.call(null,map__11438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,((function (map__11438,map__11438__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__11438,map__11438__$1,file_msg,request_url))
);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__11424_SHARP_){
return p1__11424_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__11441 = arguments.length;
switch (G__11441) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
if(clojure.string.ends_with_QMARK_.call(null,url,"goog/base.js")){
return true;
} else {
var temp__5753__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__11425_SHARP_){
return p1__11425_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e11442){if((e11442 instanceof Error)){
var e_11516 = e11442;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e_11516);
} else {
throw e11442;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__11426_SHARP_){
return p1__11426_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5753__auto__)){
var next_promise_fn = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}
});

figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2;


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__11427_SHARP_){
return p1__11427_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/** @define {string} */
goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (k,args){
return k;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (k,args){
return k;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__11517__delegate = function (args){
var seq__11443 = cljs.core.seq.call(null,printers);
var chunk__11444 = null;
var count__11445 = (0);
var i__11446 = (0);
while(true){
if((i__11446 < count__11445)){
var p = cljs.core._nth.call(null,chunk__11444,i__11446);
figwheel.repl.out_print.call(null,p,args);


var G__11518 = seq__11443;
var G__11519 = chunk__11444;
var G__11520 = count__11445;
var G__11521 = (i__11446 + (1));
seq__11443 = G__11518;
chunk__11444 = G__11519;
count__11445 = G__11520;
i__11446 = G__11521;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11443);
if(temp__5753__auto__){
var seq__11443__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11443__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__11443__$1);
var G__11522 = cljs.core.chunk_rest.call(null,seq__11443__$1);
var G__11523 = c__4461__auto__;
var G__11524 = cljs.core.count.call(null,c__4461__auto__);
var G__11525 = (0);
seq__11443 = G__11522;
chunk__11444 = G__11523;
count__11445 = G__11524;
i__11446 = G__11525;
continue;
} else {
var p = cljs.core.first.call(null,seq__11443__$1);
figwheel.repl.out_print.call(null,p,args);


var G__11526 = cljs.core.next.call(null,seq__11443__$1);
var G__11527 = null;
var G__11528 = (0);
var G__11529 = (0);
seq__11443 = G__11526;
chunk__11444 = G__11527;
count__11445 = G__11528;
i__11446 = G__11529;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__11517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11530__i = 0, G__11530__a = new Array(arguments.length -  0);
while (G__11530__i < G__11530__a.length) {G__11530__a[G__11530__i] = arguments[G__11530__i + 0]; ++G__11530__i;}
  args = new cljs.core.IndexedSeq(G__11530__a,0,null);
} 
return G__11517__delegate.call(this,args);};
G__11517.cljs$lang$maxFixedArity = 0;
G__11517.cljs$lang$applyTo = (function (arglist__11531){
var args = cljs.core.seq(arglist__11531);
return G__11517__delegate(args);
});
G__11517.cljs$core$IFn$_invoke$arity$variadic = G__11517__delegate;
return G__11517;
})()
;})(printers))
);

return cljs.core.set_print_err_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__11532__delegate = function (args){
var seq__11447 = cljs.core.seq.call(null,printers);
var chunk__11448 = null;
var count__11449 = (0);
var i__11450 = (0);
while(true){
if((i__11450 < count__11449)){
var p = cljs.core._nth.call(null,chunk__11448,i__11450);
figwheel.repl.err_print.call(null,p,args);


var G__11533 = seq__11447;
var G__11534 = chunk__11448;
var G__11535 = count__11449;
var G__11536 = (i__11450 + (1));
seq__11447 = G__11533;
chunk__11448 = G__11534;
count__11449 = G__11535;
i__11450 = G__11536;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11447);
if(temp__5753__auto__){
var seq__11447__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11447__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__11447__$1);
var G__11537 = cljs.core.chunk_rest.call(null,seq__11447__$1);
var G__11538 = c__4461__auto__;
var G__11539 = cljs.core.count.call(null,c__4461__auto__);
var G__11540 = (0);
seq__11447 = G__11537;
chunk__11448 = G__11538;
count__11449 = G__11539;
i__11450 = G__11540;
continue;
} else {
var p = cljs.core.first.call(null,seq__11447__$1);
figwheel.repl.err_print.call(null,p,args);


var G__11541 = cljs.core.next.call(null,seq__11447__$1);
var G__11542 = null;
var G__11543 = (0);
var G__11544 = (0);
seq__11447 = G__11541;
chunk__11448 = G__11542;
count__11449 = G__11543;
i__11450 = G__11544;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__11532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11545__i = 0, G__11545__a = new Array(arguments.length -  0);
while (G__11545__i < G__11545__a.length) {G__11545__a[G__11545__i] = arguments[G__11545__i + 0]; ++G__11545__i;}
  args = new cljs.core.IndexedSeq(G__11545__a,0,null);
} 
return G__11532__delegate.call(this,args);};
G__11532.cljs$lang$maxFixedArity = 0;
G__11532.cljs$lang$applyTo = (function (arglist__11546){
var args = cljs.core.seq(arglist__11546);
return G__11532__delegate(args);
});
G__11532.cljs$core$IFn$_invoke$arity$variadic = G__11532__delegate;
return G__11532;
})()
;})(printers))
);
});


/** @define {string} */
goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__11451,response_body){
var map__11452 = p__11451;
var map__11452__$1 = (((((!((map__11452 == null))))?(((((map__11452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11452):map__11452);
var uuid = cljs.core.get.call(null,map__11452__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__11454 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__11454,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__11454;
}
});

figwheel.repl.http_post = (function (){var pred__11455 = cljs.core._EQ_;
var expr__11456 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__11455.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__11456))){
var http = require("http");
return ((function (http,pred__11455,expr__11456){
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__11458 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5753__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5753__auto__)){
var q = temp__5753__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})())].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),((function (data,uri,http,pred__11455,expr__11456){
return (function (x){
return null;
});})(data,uri,http,pred__11455,expr__11456))
).on("error",((function (data,uri,http,pred__11455,expr__11456){
return (function (p1__11428_SHARP_){
return console.error(p1__11428_SHARP_);
});})(data,uri,http,pred__11455,expr__11456))
);
G__11458.write(post_data);

G__11458.end();

return G__11458;
});
;})(http,pred__11455,expr__11456))
} else {
return ((function (pred__11455,expr__11456){
return (function (url,response){
return goog.net.XhrIo.send(url,((function (pred__11455,expr__11456){
return (function (e){
return figwheel.repl.debug.call(null,"Response Posted");
});})(pred__11455,expr__11456))
,"POST",response);
});
;})(pred__11455,expr__11456))
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__11459,response_body){
var map__11460 = p__11459;
var map__11460__$1 = (((((!((map__11460 == null))))?(((((map__11460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11460):map__11460);
var old_msg = map__11460__$1;
var websocket = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__11460__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5753__auto___11547 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5753__auto___11547)){
var sn_11548 = temp__5753__auto___11547;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_11548);
} else {
}

var temp__5753__auto___11549 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5753__auto___11549)){
var sid_11550 = temp__5753__auto___11549;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_11550);
} else {
}

figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__11551 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = ((function (print_to_console_QMARK__11551){
return (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11464 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11465 = true;
var _STAR_print_fn_STAR__temp_val__11466 = ((function (_STAR_print_newline_STAR__orig_val__11463,_STAR_print_fn_STAR__orig_val__11464,_STAR_print_newline_STAR__temp_val__11465,sb,ua_product,print_to_console_QMARK__11551){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__11463,_STAR_print_fn_STAR__orig_val__11464,_STAR_print_newline_STAR__temp_val__11465,sb,ua_product,print_to_console_QMARK__11551))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11465;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11466;

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e11467){if((e11467 instanceof Error)){
var e = e11467;
return null;
} else {
throw e11467;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__4036__auto__ = print_to_console_QMARK__11551;
if(cljs.core.truth_(and__4036__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__4036__auto__;
}
})())){
setTimeout(((function (result_value,result_value__$1,output_str,_STAR_print_newline_STAR__orig_val__11463,_STAR_print_fn_STAR__orig_val__11464,_STAR_print_newline_STAR__temp_val__11465,_STAR_print_fn_STAR__temp_val__11466,sb,ua_product,print_to_console_QMARK__11551){
return (function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
});})(result_value,result_value__$1,output_str,_STAR_print_newline_STAR__orig_val__11463,_STAR_print_fn_STAR__orig_val__11464,_STAR_print_newline_STAR__temp_val__11465,_STAR_print_fn_STAR__temp_val__11466,sb,ua_product,print_to_console_QMARK__11551))
,(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11464;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11463;
}}catch (e11462){if((e11462 instanceof Error)){
var e = e11462;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e11462;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});})(print_to_console_QMARK__11551))
;

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__11468){
var map__11469 = p__11468;
var map__11469__$1 = (((((!((map__11469 == null))))?(((((map__11469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11469):map__11469);
var msg = map__11469__$1;
var code = cljs.core.get.call(null,map__11469__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__11471){
var map__11472 = p__11471;
var map__11472__$1 = (((((!((map__11472 == null))))?(((((map__11472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11472):map__11472);
var messages = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__11472__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__11474 = cljs.core.seq.call(null,messages);
var chunk__11475 = null;
var count__11476 = (0);
var i__11477 = (0);
while(true){
if((i__11477 < count__11476)){
var msg = cljs.core._nth.call(null,chunk__11475,i__11477);
figwheel.repl.message.call(null,(function (){var G__11478 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__11478,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__11478;
}
})());


var G__11552 = seq__11474;
var G__11553 = chunk__11475;
var G__11554 = count__11476;
var G__11555 = (i__11477 + (1));
seq__11474 = G__11552;
chunk__11475 = G__11553;
count__11476 = G__11554;
i__11477 = G__11555;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11474);
if(temp__5753__auto__){
var seq__11474__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11474__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__11474__$1);
var G__11556 = cljs.core.chunk_rest.call(null,seq__11474__$1);
var G__11557 = c__4461__auto__;
var G__11558 = cljs.core.count.call(null,c__4461__auto__);
var G__11559 = (0);
seq__11474 = G__11556;
chunk__11475 = G__11557;
count__11476 = G__11558;
i__11477 = G__11559;
continue;
} else {
var msg = cljs.core.first.call(null,seq__11474__$1);
figwheel.repl.message.call(null,(function (){var G__11479 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__11479,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__11479;
}
})());


var G__11560 = cljs.core.next.call(null,seq__11474__$1);
var G__11561 = null;
var G__11562 = (0);
var G__11563 = (0);
seq__11474 = G__11560;
chunk__11475 = G__11561;
count__11476 = G__11562;
i__11477 = G__11563;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__4047__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__11480_11564 = uri.getQueryData().add("fwsid",(function (){var or__4047__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__11480_11564.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4138__auto__ = Math.pow((2),attempt);
var y__4139__auto__ = (20);
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__11429_SHARP_){
if(typeof p1__11429_SHARP_ === 'string'){
return p1__11429_SHARP_;
} else {
return goog.json.serialize(p1__11429_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__11430_SHARP_){
if(typeof p1__11430_SHARP_ === 'string'){
return p1__11430_SHARP_;
} else {
return goog.json.serialize(p1__11430_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__11481 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__11481,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__11481;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__11482 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__11482,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__11482;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__4047__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__4036__auto__){
try{return require("ws");
}catch (e11486){if((e11486 instanceof Error)){
var e = e11486;
return null;
} else {
throw e11486;

}
}} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
var and__4036__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__4036__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__4036__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5751__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5751__auto__)){
var websocket_class = temp__5751__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11565 = arguments.length;
var i__4642__auto___11566 = (0);
while(true){
if((i__4642__auto___11566 < len__4641__auto___11565)){
args__4647__auto__.push((arguments[i__4642__auto___11566]));

var G__11567 = (i__4642__auto___11566 + (1));
i__4642__auto___11566 = G__11567;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__11488){
var vec__11489 = p__11488;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11489,(0),null);
return figwheel.repl.ensure_websocket.call(null,((function (vec__11489,websocket_url_SINGLEQUOTE_){
return (function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var G__11492 = websocket;
G__11492.addEventListener(goog.net.WebSocket.EventType.MESSAGE,((function (G__11492,websocket,url,vec__11489,websocket_url_SINGLEQUOTE_){
return (function (e){
var temp__5753__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e11493){if((e11493 instanceof Error)){
var e__$1 = e11493;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e__$1);
} else {
throw e11493;

}
}} else {
return null;
}
});})(G__11492,websocket,url,vec__11489,websocket_url_SINGLEQUOTE_))
);

G__11492.addEventListener(goog.net.WebSocket.EventType.OPENED,((function (G__11492,websocket,url,vec__11489,websocket_url_SINGLEQUOTE_){
return (function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
});})(G__11492,websocket,url,vec__11489,websocket_url_SINGLEQUOTE_))
);

G__11492.addEventListener(goog.net.WebSocket.EventType.CLOSED,((function (G__11492,websocket,url,vec__11489,websocket_url_SINGLEQUOTE_){
return (function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
});})(G__11492,websocket,url,vec__11489,websocket_url_SINGLEQUOTE_))
);

G__11492.open(url);

return G__11492;
});})(vec__11489,websocket_url_SINGLEQUOTE_))
);
});

figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq11487){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11487));
});


figwheel.repl.http_get = (function (){var pred__11494 = cljs.core._EQ_;
var expr__11495 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__11494.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__11495))){
var http = require("http");
return ((function (http,pred__11494,expr__11495){
return (function (url){
return (new goog.Promise(((function (http,pred__11494,expr__11495){
return (function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),((function (data,http,pred__11494,expr__11495){
return (function (response){
response.on("data",((function (data,http,pred__11494,expr__11495){
return (function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
});})(data,http,pred__11494,expr__11495))
);

return response.on("end",((function (data,http,pred__11494,expr__11495){
return (function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e11497){if((e11497 instanceof Error)){
var e = e11497;
console.error(e);

return err.call(null,e);
} else {
throw e11497;

}
}})());
});})(data,http,pred__11494,expr__11495))
);
});})(data,http,pred__11494,expr__11495))
).on("error",err);
});})(http,pred__11494,expr__11495))
));
});
;})(http,pred__11494,expr__11495))
} else {
return ((function (pred__11494,expr__11495){
return (function (url){
return (new goog.Promise(((function (pred__11494,expr__11495){
return (function (succ,err){
return goog.net.XhrIo.send(url,((function (pred__11494,expr__11495){
return (function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
});})(pred__11494,expr__11495))
);
});})(pred__11494,expr__11495))
));
});
;})(pred__11494,expr__11495))
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = ((function (url,surl){
return (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e11498){if((e11498 instanceof Error)){
var e = e11498;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
throw e11498;

}
}});})(url,surl))
;
var G__11499_11568 = url.getQueryData();
G__11499_11568.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then(((function (url,surl,msg_fn){
return (function (msg){
var typ = goog.object.get(msg,"connection-type");
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
});})(url,surl,msg_fn))
,((function (url,surl,msg_fn){
return (function (e){
if((e instanceof Error)){
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = (e instanceof goog.net.XhrIo);
if(and__4036__auto__){
return e.getResponseBody();
} else {
return and__4036__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout(((function (wait_time,url,surl,msg_fn){
return (function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
});})(wait_time,url,surl,msg_fn))
,wait_time);
});})(url,surl,msg_fn))
);
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11569 = arguments.length;
var i__4642__auto___11570 = (0);
while(true){
if((i__4642__auto___11570 < len__4641__auto___11569)){
args__4647__auto__.push((arguments[i__4642__auto___11570]));

var G__11571 = (i__4642__auto___11570 + (1));
i__4642__auto___11570 = G__11571;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__11501){
var vec__11502 = p__11501;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11502,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
});

figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq11500){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11500));
});


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(url,"http");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
figwheel.repl.logging.warning.call(null,figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null))].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/** @define {string} */
goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__11505 = cljs.core.seq.call(null,(function (){var G__11509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__11509,figwheel.core.logger);
} else {
return G__11509;
}
})());
var chunk__11506 = null;
var count__11507 = (0);
var i__11508 = (0);
while(true){
if((i__11508 < count__11507)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__11506,i__11508);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__11572 = seq__11505;
var G__11573 = chunk__11506;
var G__11574 = count__11507;
var G__11575 = (i__11508 + (1));
seq__11505 = G__11572;
chunk__11506 = G__11573;
count__11507 = G__11574;
i__11508 = G__11575;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__11505);
if(temp__5753__auto__){
var seq__11505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11505__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__11505__$1);
var G__11576 = cljs.core.chunk_rest.call(null,seq__11505__$1);
var G__11577 = c__4461__auto__;
var G__11578 = cljs.core.count.call(null,c__4461__auto__);
var G__11579 = (0);
seq__11505 = G__11576;
chunk__11506 = G__11577;
count__11507 = G__11578;
i__11508 = G__11579;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__11505__$1);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__11580 = cljs.core.next.call(null,seq__11505__$1);
var G__11581 = null;
var G__11582 = (0);
var G__11583 = (0);
seq__11505 = G__11580;
chunk__11506 = G__11581;
count__11507 = G__11582;
i__11508 = G__11583;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__4047__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(cljs.core.truth_(goog.string.startsWith(url,"ws"))){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(cljs.core.truth_(goog.string.startsWith(url,"http"))){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11584 = arguments.length;
var i__4642__auto___11585 = (0);
while(true){
if((i__4642__auto___11585 < len__4641__auto___11584)){
args__4647__auto__.push((arguments[i__4642__auto___11585]));

var G__11586 = (i__4642__auto___11585 + (1));
i__4642__auto___11585 = G__11586;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__11511){
var vec__11512 = p__11511;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11512,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
});

figwheel.repl.connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.connect.cljs$lang$applyTo = (function (seq11510){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11510));
});


//# sourceMappingURL=repl.js.map
