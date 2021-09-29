// Compiled by ClojureScript 1.10.439 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__10404__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10401 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__10402 = cljs.core.seq.call(null,vec__10401);
var first__10403 = cljs.core.first.call(null,seq__10402);
var seq__10402__$1 = cljs.core.next.call(null,seq__10402);
var tag = first__10403;
var body = seq__10402__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10405__i = 0, G__10405__a = new Array(arguments.length -  0);
while (G__10405__i < G__10405__a.length) {G__10405__a[G__10405__i] = arguments[G__10405__i + 0]; ++G__10405__i;}
  args = new cljs.core.IndexedSeq(G__10405__a,0,null);
} 
return G__10404__delegate.call(this,args);};
G__10404.cljs$lang$maxFixedArity = 0;
G__10404.cljs$lang$applyTo = (function (arglist__10406){
var args = cljs.core.seq(arglist__10406);
return G__10404__delegate(args);
});
G__10404.cljs$core$IFn$_invoke$arity$variadic = G__10404__delegate;
return G__10404;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4434__auto__ = (function sablono$core$update_arglists_$_iter__10407(s__10408){
return (new cljs.core.LazySeq(null,(function (){
var s__10408__$1 = s__10408;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10408__$1);
if(temp__5753__auto__){
var s__10408__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10408__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__10408__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__10410 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__10409 = (0);
while(true){
if((i__10409 < size__4433__auto__)){
var args = cljs.core._nth.call(null,c__4432__auto__,i__10409);
cljs.core.chunk_append.call(null,b__10410,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10411 = (i__10409 + (1));
i__10409 = G__10411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10410),sablono$core$update_arglists_$_iter__10407.call(null,cljs.core.chunk_rest.call(null,s__10408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10410),null);
}
} else {
var args = cljs.core.first.call(null,s__10408__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10407.call(null,cljs.core.rest.call(null,s__10408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10417 = arguments.length;
var i__4642__auto___10418 = (0);
while(true){
if((i__4642__auto___10418 < len__4641__auto___10417)){
args__4647__auto__.push((arguments[i__4642__auto___10418]));

var G__10419 = (i__4642__auto___10418 + (1));
i__4642__auto___10418 = G__10419;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4434__auto__ = (function sablono$core$iter__10413(s__10414){
return (new cljs.core.LazySeq(null,(function (){
var s__10414__$1 = s__10414;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10414__$1);
if(temp__5753__auto__){
var s__10414__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10414__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__10414__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__10416 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__10415 = (0);
while(true){
if((i__10415 < size__4433__auto__)){
var style = cljs.core._nth.call(null,c__4432__auto__,i__10415);
cljs.core.chunk_append.call(null,b__10416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10420 = (i__10415 + (1));
i__10415 = G__10420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10416),sablono$core$iter__10413.call(null,cljs.core.chunk_rest.call(null,s__10414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10416),null);
}
} else {
var style = cljs.core.first.call(null,s__10414__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10413.call(null,cljs.core.rest.call(null,s__10414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq10412){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10412));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to10421 = (function sablono$core$link_to10421(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10424 = arguments.length;
var i__4642__auto___10425 = (0);
while(true){
if((i__4642__auto___10425 < len__4641__auto___10424)){
args__4647__auto__.push((arguments[i__4642__auto___10425]));

var G__10426 = (i__4642__auto___10425 + (1));
i__4642__auto___10425 = G__10426;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to10421.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.link_to10421.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to10421.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to10421.cljs$lang$applyTo = (function (seq10422){
var G__10423 = cljs.core.first.call(null,seq10422);
var seq10422__$1 = cljs.core.next.call(null,seq10422);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10423,seq10422__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10421);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10427 = (function sablono$core$mail_to10427(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10434 = arguments.length;
var i__4642__auto___10435 = (0);
while(true){
if((i__4642__auto___10435 < len__4641__auto___10434)){
args__4647__auto__.push((arguments[i__4642__auto___10435]));

var G__10436 = (i__4642__auto___10435 + (1));
i__4642__auto___10435 = G__10436;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to10427.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.mail_to10427.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10430){
var vec__10431 = p__10430;
var content = cljs.core.nth.call(null,vec__10431,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4047__auto__ = content;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to10427.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to10427.cljs$lang$applyTo = (function (seq10428){
var G__10429 = cljs.core.first.call(null,seq10428);
var seq10428__$1 = cljs.core.next.call(null,seq10428);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10429,seq10428__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10427);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10437 = (function sablono$core$unordered_list10437(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function sablono$core$unordered_list10437_$_iter__10438(s__10439){
return (new cljs.core.LazySeq(null,(function (){
var s__10439__$1 = s__10439;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10439__$1);
if(temp__5753__auto__){
var s__10439__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10439__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__10439__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__10441 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__10440 = (0);
while(true){
if((i__10440 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__10440);
cljs.core.chunk_append.call(null,b__10441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10442 = (i__10440 + (1));
i__10440 = G__10442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10441),sablono$core$unordered_list10437_$_iter__10438.call(null,cljs.core.chunk_rest.call(null,s__10439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10441),null);
}
} else {
var x = cljs.core.first.call(null,s__10439__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10437_$_iter__10438.call(null,cljs.core.rest.call(null,s__10439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10437);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10443 = (function sablono$core$ordered_list10443(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4434__auto__ = (function sablono$core$ordered_list10443_$_iter__10444(s__10445){
return (new cljs.core.LazySeq(null,(function (){
var s__10445__$1 = s__10445;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10445__$1);
if(temp__5753__auto__){
var s__10445__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10445__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__10445__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__10447 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__10446 = (0);
while(true){
if((i__10446 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__10446);
cljs.core.chunk_append.call(null,b__10447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10448 = (i__10446 + (1));
i__10446 = G__10448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10447),sablono$core$ordered_list10443_$_iter__10444.call(null,cljs.core.chunk_rest.call(null,s__10445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10447),null);
}
} else {
var x = cljs.core.first.call(null,s__10445__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10443_$_iter__10444.call(null,cljs.core.rest.call(null,s__10445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10443);
/**
 * Create an image element.
 */
sablono.core.image10449 = (function sablono$core$image10449(var_args){
var G__10451 = arguments.length;
switch (G__10451) {
case 1:
return sablono.core.image10449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image10449.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image10449.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image10449.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10449);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10453_SHARP_,p2__10454_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10453_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10454_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10455_SHARP_,p2__10456_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10455_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10456_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__10458 = arguments.length;
switch (G__10458) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field10460 = (function sablono$core$color_field10460(var_args){
var G__10462 = arguments.length;
switch (G__10462) {
case 1:
return sablono.core.color_field10460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field10460.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__10221__auto__);
});

sablono.core.color_field10460.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.color_field10460.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10460);

/**
 * Creates a date input field.
 */
sablono.core.date_field10463 = (function sablono$core$date_field10463(var_args){
var G__10465 = arguments.length;
switch (G__10465) {
case 1:
return sablono.core.date_field10463.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10463.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field10463.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__10221__auto__);
});

sablono.core.date_field10463.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.date_field10463.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10463);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10466 = (function sablono$core$datetime_field10466(var_args){
var G__10468 = arguments.length;
switch (G__10468) {
case 1:
return sablono.core.datetime_field10466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field10466.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__10221__auto__);
});

sablono.core.datetime_field10466.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.datetime_field10466.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10466);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10469 = (function sablono$core$datetime_local_field10469(var_args){
var G__10471 = arguments.length;
switch (G__10471) {
case 1:
return sablono.core.datetime_local_field10469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field10469.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__10221__auto__);
});

sablono.core.datetime_local_field10469.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.datetime_local_field10469.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10469);

/**
 * Creates a email input field.
 */
sablono.core.email_field10472 = (function sablono$core$email_field10472(var_args){
var G__10474 = arguments.length;
switch (G__10474) {
case 1:
return sablono.core.email_field10472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field10472.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__10221__auto__);
});

sablono.core.email_field10472.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.email_field10472.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10472);

/**
 * Creates a file input field.
 */
sablono.core.file_field10475 = (function sablono$core$file_field10475(var_args){
var G__10477 = arguments.length;
switch (G__10477) {
case 1:
return sablono.core.file_field10475.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10475.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field10475.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__10221__auto__);
});

sablono.core.file_field10475.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.file_field10475.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10475);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10478 = (function sablono$core$hidden_field10478(var_args){
var G__10480 = arguments.length;
switch (G__10480) {
case 1:
return sablono.core.hidden_field10478.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field10478.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__10221__auto__);
});

sablono.core.hidden_field10478.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.hidden_field10478.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10478);

/**
 * Creates a month input field.
 */
sablono.core.month_field10481 = (function sablono$core$month_field10481(var_args){
var G__10483 = arguments.length;
switch (G__10483) {
case 1:
return sablono.core.month_field10481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field10481.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__10221__auto__);
});

sablono.core.month_field10481.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.month_field10481.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10481);

/**
 * Creates a number input field.
 */
sablono.core.number_field10484 = (function sablono$core$number_field10484(var_args){
var G__10486 = arguments.length;
switch (G__10486) {
case 1:
return sablono.core.number_field10484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field10484.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__10221__auto__);
});

sablono.core.number_field10484.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.number_field10484.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10484);

/**
 * Creates a password input field.
 */
sablono.core.password_field10487 = (function sablono$core$password_field10487(var_args){
var G__10489 = arguments.length;
switch (G__10489) {
case 1:
return sablono.core.password_field10487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field10487.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__10221__auto__);
});

sablono.core.password_field10487.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.password_field10487.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10487);

/**
 * Creates a range input field.
 */
sablono.core.range_field10490 = (function sablono$core$range_field10490(var_args){
var G__10492 = arguments.length;
switch (G__10492) {
case 1:
return sablono.core.range_field10490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field10490.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__10221__auto__);
});

sablono.core.range_field10490.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.range_field10490.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10490);

/**
 * Creates a search input field.
 */
sablono.core.search_field10493 = (function sablono$core$search_field10493(var_args){
var G__10495 = arguments.length;
switch (G__10495) {
case 1:
return sablono.core.search_field10493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field10493.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__10221__auto__);
});

sablono.core.search_field10493.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.search_field10493.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10493);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10496 = (function sablono$core$tel_field10496(var_args){
var G__10498 = arguments.length;
switch (G__10498) {
case 1:
return sablono.core.tel_field10496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field10496.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__10221__auto__);
});

sablono.core.tel_field10496.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.tel_field10496.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10496);

/**
 * Creates a text input field.
 */
sablono.core.text_field10499 = (function sablono$core$text_field10499(var_args){
var G__10501 = arguments.length;
switch (G__10501) {
case 1:
return sablono.core.text_field10499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field10499.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__10221__auto__);
});

sablono.core.text_field10499.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.text_field10499.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10499);

/**
 * Creates a time input field.
 */
sablono.core.time_field10502 = (function sablono$core$time_field10502(var_args){
var G__10504 = arguments.length;
switch (G__10504) {
case 1:
return sablono.core.time_field10502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field10502.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__10221__auto__);
});

sablono.core.time_field10502.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.time_field10502.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10502);

/**
 * Creates a url input field.
 */
sablono.core.url_field10505 = (function sablono$core$url_field10505(var_args){
var G__10507 = arguments.length;
switch (G__10507) {
case 1:
return sablono.core.url_field10505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field10505.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__10221__auto__);
});

sablono.core.url_field10505.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.url_field10505.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10505);

/**
 * Creates a week input field.
 */
sablono.core.week_field10508 = (function sablono$core$week_field10508(var_args){
var G__10510 = arguments.length;
switch (G__10510) {
case 1:
return sablono.core.week_field10508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field10508.cljs$core$IFn$_invoke$arity$1 = (function (name__10221__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__10221__auto__);
});

sablono.core.week_field10508.cljs$core$IFn$_invoke$arity$2 = (function (name__10221__auto__,value__10222__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__10221__auto__,value__10222__auto__);
});

sablono.core.week_field10508.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10508);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10528 = (function sablono$core$check_box10528(var_args){
var G__10530 = arguments.length;
switch (G__10530) {
case 1:
return sablono.core.check_box10528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10528.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box10528.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box10528.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10528.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10528.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10528);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10532 = (function sablono$core$radio_button10532(var_args){
var G__10534 = arguments.length;
switch (G__10534) {
case 1:
return sablono.core.radio_button10532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10532.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button10532.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button10532.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10532.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10532.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10532);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10536 = (function sablono$core$select_options10536(coll){
var iter__4434__auto__ = (function sablono$core$select_options10536_$_iter__10537(s__10538){
return (new cljs.core.LazySeq(null,(function (){
var s__10538__$1 = s__10538;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__10538__$1);
if(temp__5753__auto__){
var s__10538__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10538__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__10538__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__10540 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__10539 = (0);
while(true){
if((i__10539 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__10539);
cljs.core.chunk_append.call(null,b__10540,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10541 = x;
var text = cljs.core.nth.call(null,vec__10541,(0),null);
var val = cljs.core.nth.call(null,vec__10541,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10541,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10536.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__10547 = (i__10539 + (1));
i__10539 = G__10547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10540),sablono$core$select_options10536_$_iter__10537.call(null,cljs.core.chunk_rest.call(null,s__10538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10540),null);
}
} else {
var x = cljs.core.first.call(null,s__10538__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10544 = x;
var text = cljs.core.nth.call(null,vec__10544,(0),null);
var val = cljs.core.nth.call(null,vec__10544,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10544,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10536.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options10536_$_iter__10537.call(null,cljs.core.rest.call(null,s__10538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10536);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10548 = (function sablono$core$drop_down10548(var_args){
var G__10550 = arguments.length;
switch (G__10550) {
case 2:
return sablono.core.drop_down10548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10548.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down10548.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10548.call(null,name,options,null);
});

sablono.core.drop_down10548.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down10548.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10548);
/**
 * Creates a text area element.
 */
sablono.core.text_area10552 = (function sablono$core$text_area10552(var_args){
var G__10554 = arguments.length;
switch (G__10554) {
case 1:
return sablono.core.text_area10552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area10552.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area10552.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area10552.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10552);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10556 = (function sablono$core$label10556(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10556);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10557 = (function sablono$core$submit_button10557(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10557);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10558 = (function sablono$core$reset_button10558(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10558);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10559 = (function sablono$core$form_to10559(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10566 = arguments.length;
var i__4642__auto___10567 = (0);
while(true){
if((i__4642__auto___10567 < len__4641__auto___10566)){
args__4647__auto__.push((arguments[i__4642__auto___10567]));

var G__10568 = (i__4642__auto___10567 + (1));
i__4642__auto___10567 = G__10568;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to10559.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.form_to10559.cljs$core$IFn$_invoke$arity$variadic = (function (p__10562,body){
var vec__10563 = p__10562;
var method = cljs.core.nth.call(null,vec__10563,(0),null);
var action = cljs.core.nth.call(null,vec__10563,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to10559.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to10559.cljs$lang$applyTo = (function (seq10560){
var G__10561 = cljs.core.first.call(null,seq10560);
var seq10560__$1 = cljs.core.next.call(null,seq10560);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10561,seq10560__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10559);

//# sourceMappingURL=core.js.map
