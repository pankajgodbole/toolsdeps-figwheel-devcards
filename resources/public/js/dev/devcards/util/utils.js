// Compiled by ClojureScript 1.10.439 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
goog.require('react');
devcards.util.utils.global$module$react = goog.global["React"];
devcards.util.utils.react_holder = devcards.util.utils.global$module$react;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5751__auto__)){
var doc = temp__5751__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8430_8434 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8431_8435 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8432_8436 = true;
var _STAR_print_fn_STAR__temp_val__8433_8437 = ((function (_STAR_print_newline_STAR__orig_val__8430_8434,_STAR_print_fn_STAR__orig_val__8431_8435,_STAR_print_newline_STAR__temp_val__8432_8436,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__8430_8434,_STAR_print_fn_STAR__orig_val__8431_8435,_STAR_print_newline_STAR__temp_val__8432_8436,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8432_8436;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8433_8437;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8431_8435;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8430_8434;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
}catch (e8428){if((e8428 instanceof Error)){
var e1 = e8428;
try{return obj.toString();
}catch (e8429){if((e8429 instanceof Error)){
var e2 = e8429;
return "<<Un-printable Type>>";
} else {
throw e8429;

}
}} else {
throw e8428;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__8438 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__8439 = cljs.pprint.code_dispatch;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__8439;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__8438;
}});

//# sourceMappingURL=utils.js.map
