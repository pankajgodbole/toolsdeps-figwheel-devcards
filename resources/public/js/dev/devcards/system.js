// Compiled by ClojureScript 1.10.439 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devcards.util.utils');
goog.require('react');
goog.require('react_dom');
goog.require('goog.History');
devcards.system.global$module$react = goog.global["React"];
devcards.system.global$module$react_dom = goog.global["ReactDOM"];
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5751__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var first_child = temp__5751__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5751__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5751__auto__)){
var heads = temp__5751__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child.call(null,document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__12539_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__12539_SHARP_.token));
}));

var temp__5753__auto__ = goog.object.get(location,"hash");
if(cljs.core.truth_(temp__5753__auto__)){
var token = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__4036__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4036__auto____$2)){
var and__4036__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4036__auto____$3)){
return d;
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5751__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.last.call(null,path))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__12540,state){
var vec__12541 = p__12540;
var _ = cljs.core.nth.call(null,vec__12541,(0),null);
var map__12544 = cljs.core.nth.call(null,vec__12541,(1),null);
var map__12544__$1 = (((((!((map__12544 == null))))?(((((map__12544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12544):map__12544);
var path = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),((function (position,new_path,vec__12541,_,map__12544,map__12544__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
});})(position,new_path,vec__12541,_,map__12544,map__12544__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__4047__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__12546,path){
var map__12547 = p__12546;
var map__12547__$1 = (((((!((map__12547 == null))))?(((((map__12547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12547):map__12547);
var state = map__12547__$1;
var current_path = cljs.core.get.call(null,map__12547__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__12549,path){
var map__12550 = p__12549;
var map__12550__$1 = (((((!((map__12550 == null))))?(((((map__12550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12550):map__12550);
var state = map__12550__$1;
var current_path = cljs.core.get.call(null,map__12550__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__4036__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__12552_SHARP_){
var and__4036__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__12552_SHARP_));
if(and__4036__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__12552_SHARP_);
} else {
return and__4036__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__12553){
var map__12554 = p__12553;
var map__12554__$1 = (((((!((map__12554 == null))))?(((((map__12554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12554):map__12554);
var card = map__12554__$1;
var path = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return sablono.core.create_element.call(null,"div",({"key": devcards.system.path__GT_unique_card_id.call(null,path), "className": "com-rigsomelight-devcard"}),sablono.interpreter.interpret.call(null,(function (){var _STAR_devcard_data_STAR__orig_val__12556 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__12557 = card;
devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__12557;

try{return func.call(null);
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__12556;
}})()));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,devcards.system.current_page.call(null,data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__12558){
var map__12559 = p__12558;
var map__12559__$1 = (((((!((map__12559 == null))))?(((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var state = map__12559__$1;
var current_path = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__12559,map__12559__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__12559,map__12559__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.call(null,(0));
var sep_fn = ((function (counter){
return (function (_){
return sablono.core.create_element.call(null,"span",({"key": (function (){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return cljs.core.deref.call(null,counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"}),"/");
});})(counter))
;
return sablono.core.create_element.call(null,"div",({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.rest.call(null,cljs.core.interleave.call(null,cljs.core.iterate.call(null,sep_fn,sep_fn.call(null,null)),cljs.core.map.call(null,((function (counter,sep_fn){
return (function (p__12561){
var vec__12562 = p__12561;
var n = cljs.core.nth.call(null,vec__12562,(0),null);
var path = cljs.core.nth.call(null,vec__12562,(1),null);
return sablono.core.create_element.call(null,"span",({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id.call(null,path)}),sablono.core.create_element.call(null,"a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__12562,n,path,counter,sep_fn){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__12562,n,path,counter,sep_fn))
), "className": "com-rigsomelight-devcards_set-current-path"}),sablono.interpreter.interpret.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
});})(counter,sep_fn))
,crumbs)))),sablono.interpreter.interpret.call(null,devcards.system.cljs_logo.call(null)));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs12565 = cljs.core.map.call(null,(function (p__12566){
var vec__12567 = p__12566;
var key = cljs.core.nth.call(null,vec__12567,(0),null);
var child_tree = cljs.core.nth.call(null,vec__12567,(1),null);
return sablono.core.create_element.call(null,"a",({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_.call(null,((function (vec__12567,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
});})(vec__12567,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"}),sablono.core.create_element.call(null,"span",({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),sablono.core.create_element.call(null,"span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__12570){
var vec__12571 = p__12570;
var key = cljs.core.nth.call(null,vec__12571,(0),null);
var _ = cljs.core.nth.call(null,vec__12571,(1),null);
return cljs.core.name.call(null,key);
}),dirs));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs12565))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs12565)):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_.call(null,attrs12565))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12565)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return sablono.core.create_element.call(null,"div",({"className": ["com-rigsomelight-devcards-base ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5753__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
return clojure.string.replace.call(null,cljs.core.name.call(null,n),".","-");
} else {
return null;
}
})())].join('')}),(function (){var attrs12574 = (function (){var temp__5753__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__5753__auto__)){
var crumbs = temp__5753__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs12574))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs12574)):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_.call(null,attrs12574))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs12575 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs12575))?sablono.interpreter.attributes.call(null,attrs12575):null),((cljs.core.map_QMARK_.call(null,attrs12575))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12575)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12574),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs12576 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs12576))?sablono.interpreter.attributes.call(null,attrs12576):null),((cljs.core.map_QMARK_.call(null,attrs12576))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12576)], null)));
})()], null)));
})());
});
devcards.system.DevcardsRoot = (function (){var ctor__8406__auto__ = (function (props__8403__auto__){
var this__8404__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__8404__auto__,props__8403__auto__);

return this__8404__auto__;
});
goog.inherits(ctor__8406__auto__,devcards.util.utils.react_holder.Component);

var x12577_12578 = ctor__8406__auto__.prototype;
x12577_12578.componentDidMount = ((function (x12577_12578,ctor__8406__auto__){
return (function (){
var this$ = this;
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),((function (this$,x12577_12578,ctor__8406__auto__){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(this$,x12577_12578,ctor__8406__auto__))
);
});})(x12577_12578,ctor__8406__auto__))
;

x12577_12578.render = ((function (x12577_12578,ctor__8406__auto__){
return (function (){
var this$ = this;
return devcards.system.main_template.call(null,devcards.system.app_state);
});})(x12577_12578,ctor__8406__auto__))
;


return ctor__8406__auto__;
})();

devcards.system.DevcardsRoot.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return devcards.system.global$module$react_dom.render.call(null,devcards.system.global$module$react.createElement.call(null,devcards.system.DevcardsRoot),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__12197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12197__auto__,initial_data){
return (function (){
var f__12198__auto__ = (function (){var switch__12174__auto__ = ((function (c__12197__auto__,initial_data){
return (function (state_12626){
var state_val_12627 = (state_12626[(1)]);
if((state_val_12627 === (7))){
var inst_12622 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
var statearr_12628_12655 = state_12626__$1;
(statearr_12628_12655[(2)] = inst_12622);

(statearr_12628_12655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (1))){
var inst_12579 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_12580 = inst_12579;
var state_12626__$1 = (function (){var statearr_12629 = state_12626;
(statearr_12629[(7)] = inst_12580);

return statearr_12629;
})();
var statearr_12630_12656 = state_12626__$1;
(statearr_12630_12656[(2)] = null);

(statearr_12630_12656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (4))){
var inst_12587 = (state_12626[(8)]);
var inst_12587__$1 = (state_12626[(2)]);
var state_12626__$1 = (function (){var statearr_12631 = state_12626;
(statearr_12631[(8)] = inst_12587__$1);

return statearr_12631;
})();
if(cljs.core.truth_(inst_12587__$1)){
var statearr_12632_12657 = state_12626__$1;
(statearr_12632_12657[(1)] = (5));

} else {
var statearr_12633_12658 = state_12626__$1;
(statearr_12633_12658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (15))){
var state_12626__$1 = state_12626;
var statearr_12634_12659 = state_12626__$1;
(statearr_12634_12659[(2)] = null);

(statearr_12634_12659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (13))){
var inst_12617 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
var statearr_12635_12660 = state_12626__$1;
(statearr_12635_12660[(2)] = inst_12617);

(statearr_12635_12660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (6))){
var state_12626__$1 = state_12626;
var statearr_12636_12661 = state_12626__$1;
(statearr_12636_12661[(2)] = null);

(statearr_12636_12661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (3))){
var inst_12624 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12626__$1,inst_12624);
} else {
if((state_val_12627 === (12))){
var state_12626__$1 = state_12626;
var statearr_12637_12662 = state_12626__$1;
(statearr_12637_12662[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (2))){
var inst_12582 = (state_12626[(9)]);
var inst_12582__$1 = cljs.core.async.timeout.call(null,(500));
var inst_12583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12584 = [channel,inst_12582__$1];
var inst_12585 = (new cljs.core.PersistentVector(null,2,(5),inst_12583,inst_12584,null));
var state_12626__$1 = (function (){var statearr_12639 = state_12626;
(statearr_12639[(9)] = inst_12582__$1);

return statearr_12639;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12626__$1,(4),inst_12585);
} else {
if((state_val_12627 === (11))){
var inst_12580 = (state_12626[(7)]);
var inst_12605 = devcards.system.merge_in_new_data.call(null,start_data,inst_12580);
var state_12626__$1 = state_12626;
var statearr_12640_12663 = state_12626__$1;
(statearr_12640_12663[(2)] = inst_12605);

(statearr_12640_12663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (9))){
var inst_12596 = (state_12626[(10)]);
var inst_12603 = cljs.core._EQ_.call(null,inst_12596,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_12626__$1 = state_12626;
if(inst_12603){
var statearr_12641_12664 = state_12626__$1;
(statearr_12641_12664[(1)] = (11));

} else {
var statearr_12642_12665 = state_12626__$1;
(statearr_12642_12665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (5))){
var inst_12587 = (state_12626[(8)]);
var inst_12582 = (state_12626[(9)]);
var inst_12595 = cljs.core.nth.call(null,inst_12587,(0),null);
var inst_12596 = cljs.core.nth.call(null,inst_12595,(0),null);
var inst_12597 = cljs.core.nth.call(null,inst_12595,(1),null);
var inst_12598 = cljs.core.nth.call(null,inst_12587,(1),null);
var inst_12599 = cljs.core._EQ_.call(null,inst_12598,inst_12582);
var state_12626__$1 = (function (){var statearr_12643 = state_12626;
(statearr_12643[(11)] = inst_12597);

(statearr_12643[(10)] = inst_12596);

return statearr_12643;
})();
if(inst_12599){
var statearr_12644_12666 = state_12626__$1;
(statearr_12644_12666[(1)] = (8));

} else {
var statearr_12645_12667 = state_12626__$1;
(statearr_12645_12667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (14))){
var inst_12597 = (state_12626[(11)]);
var inst_12596 = (state_12626[(10)]);
var inst_12580 = (state_12626[(7)]);
var inst_12608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12609 = [inst_12596,inst_12597];
var inst_12610 = (new cljs.core.PersistentVector(null,2,(5),inst_12608,inst_12609,null));
var inst_12611 = devcards.system.dev_trans.call(null,inst_12610,inst_12580);
var inst_12580__$1 = inst_12611;
var state_12626__$1 = (function (){var statearr_12646 = state_12626;
(statearr_12646[(7)] = inst_12580__$1);

return statearr_12646;
})();
var statearr_12647_12668 = state_12626__$1;
(statearr_12647_12668[(2)] = null);

(statearr_12647_12668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (16))){
var inst_12615 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
var statearr_12648_12669 = state_12626__$1;
(statearr_12648_12669[(2)] = inst_12615);

(statearr_12648_12669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (10))){
var inst_12619 = (state_12626[(2)]);
var state_12626__$1 = state_12626;
var statearr_12649_12670 = state_12626__$1;
(statearr_12649_12670[(2)] = inst_12619);

(statearr_12649_12670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12627 === (8))){
var inst_12580 = (state_12626[(7)]);
var inst_12601 = devcards.system.merge_in_new_data.call(null,start_data,inst_12580);
var state_12626__$1 = state_12626;
var statearr_12650_12671 = state_12626__$1;
(statearr_12650_12671[(2)] = inst_12601);

(statearr_12650_12671[(1)] = (10));


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
});})(c__12197__auto__,initial_data))
;
return ((function (switch__12174__auto__,c__12197__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__12175__auto__ = null;
var devcards$system$off_the_books_$_state_machine__12175__auto____0 = (function (){
var statearr_12651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12651[(0)] = devcards$system$off_the_books_$_state_machine__12175__auto__);

(statearr_12651[(1)] = (1));

return statearr_12651;
});
var devcards$system$off_the_books_$_state_machine__12175__auto____1 = (function (state_12626){
while(true){
var ret_value__12176__auto__ = (function (){try{while(true){
var result__12177__auto__ = switch__12174__auto__.call(null,state_12626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12177__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object)){
var ex__12178__auto__ = e12652;
var statearr_12653_12672 = state_12626;
(statearr_12653_12672[(5)] = ex__12178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12673 = state_12626;
state_12626 = G__12673;
continue;
} else {
return ret_value__12176__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__12175__auto__ = function(state_12626){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__12175__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__12175__auto____1.call(this,state_12626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__12175__auto____0;
devcards$system$off_the_books_$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__12175__auto____1;
return devcards$system$off_the_books_$_state_machine__12175__auto__;
})()
;})(switch__12174__auto__,c__12197__auto__,initial_data))
})();
var state__12199__auto__ = (function (){var statearr_12654 = f__12198__auto__.call(null);
(statearr_12654[(6)] = c__12197__auto__);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12199__auto__);
});})(c__12197__auto__,initial_data))
);

return c__12197__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__12197__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12197__auto__){
return (function (){
var f__12198__auto__ = (function (){var switch__12174__auto__ = ((function (c__12197__auto__){
return (function (state_12681){
var state_val_12682 = (state_12681[(1)]);
if((state_val_12682 === (1))){
var inst_12674 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_12675 = cljs.core.PersistentVector.EMPTY;
var inst_12676 = devcards.system.off_the_books.call(null,channel,inst_12674,inst_12675);
var state_12681__$1 = state_12681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12681__$1,(2),inst_12676);
} else {
if((state_val_12682 === (2))){
var inst_12678 = (state_12681[(2)]);
var inst_12679 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_12678);
var state_12681__$1 = state_12681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12681__$1,inst_12679);
} else {
return null;
}
}
});})(c__12197__auto__))
;
return ((function (switch__12174__auto__,c__12197__auto__){
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto____0 = (function (){
var statearr_12683 = [null,null,null,null,null,null,null];
(statearr_12683[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto__);

(statearr_12683[(1)] = (1));

return statearr_12683;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto____1 = (function (state_12681){
while(true){
var ret_value__12176__auto__ = (function (){try{while(true){
var result__12177__auto__ = switch__12174__auto__.call(null,state_12681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12177__auto__;
}
break;
}
}catch (e12684){if((e12684 instanceof Object)){
var ex__12178__auto__ = e12684;
var statearr_12685_12687 = state_12681;
(statearr_12685_12687[(5)] = ex__12178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12688 = state_12681;
state_12681 = G__12688;
continue;
} else {
return ret_value__12176__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto__ = function(state_12681){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto____1.call(this,state_12681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__12175__auto__;
})()
;})(switch__12174__auto__,c__12197__auto__))
})();
var state__12199__auto__ = (function (){var statearr_12686 = f__12198__auto__.call(null);
(statearr_12686[(6)] = c__12197__auto__);

return statearr_12686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12199__auto__);
});})(c__12197__auto__))
);

return c__12197__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents.call(null,true);
} else {
}

var c__12197__auto___12728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12197__auto___12728){
return (function (){
var f__12198__auto__ = (function (){var switch__12174__auto__ = ((function (c__12197__auto___12728){
return (function (state_12713){
var state_val_12714 = (state_12713[(1)]);
if((state_val_12714 === (7))){
var state_12713__$1 = state_12713;
var statearr_12715_12729 = state_12713__$1;
(statearr_12715_12729[(2)] = null);

(statearr_12715_12729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (1))){
var inst_12689 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12713__$1,(2),inst_12689);
} else {
if((state_val_12714 === (4))){
var inst_12711 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12713__$1,inst_12711);
} else {
if((state_val_12714 === (6))){
var inst_12698 = (state_12713[(7)]);
var inst_12700 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_12701 = devcards.system.off_the_books.call(null,channel,inst_12700,inst_12698);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12713__$1,(9),inst_12701);
} else {
if((state_val_12714 === (3))){
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12713__$1,(5),channel);
} else {
if((state_val_12714 === (2))){
var inst_12691 = (state_12713[(2)]);
var inst_12692 = (function (){return ((function (inst_12691,state_val_12714,c__12197__auto___12728){
return (function (){
return renderer.call(null,devcards.system.app_state);
});
;})(inst_12691,state_val_12714,c__12197__auto___12728))
})();
var inst_12693 = setTimeout(inst_12692,(0));
var inst_12694 = (function (){return ((function (inst_12691,inst_12692,inst_12693,state_val_12714,c__12197__auto___12728){
return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),((function (inst_12691,inst_12692,inst_12693,state_val_12714,c__12197__auto___12728){
return (function (_,___$1,___$2,___$3){
return renderer.call(null,devcards.system.app_state);
});})(inst_12691,inst_12692,inst_12693,state_val_12714,c__12197__auto___12728))
);
});
;})(inst_12691,inst_12692,inst_12693,state_val_12714,c__12197__auto___12728))
})();
var inst_12695 = setTimeout(inst_12694,(0));
var state_12713__$1 = (function (){var statearr_12716 = state_12713;
(statearr_12716[(8)] = inst_12695);

(statearr_12716[(9)] = inst_12693);

(statearr_12716[(10)] = inst_12691);

return statearr_12716;
})();
var statearr_12717_12730 = state_12713__$1;
(statearr_12717_12730[(2)] = null);

(statearr_12717_12730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (9))){
var inst_12698 = (state_12713[(7)]);
var inst_12703 = (state_12713[(2)]);
var inst_12704 = (function (){var temp__5753__auto__ = inst_12698;
var v = inst_12698;
var new_state = inst_12703;
return ((function (temp__5753__auto__,v,new_state,inst_12698,inst_12703,state_val_12714,c__12197__auto___12728){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__5753__auto__,v,new_state,inst_12698,inst_12703,state_val_12714,c__12197__auto___12728))
})();
var inst_12705 = setTimeout(inst_12704,(0));
var state_12713__$1 = (function (){var statearr_12718 = state_12713;
(statearr_12718[(11)] = inst_12705);

return statearr_12718;
})();
var statearr_12719_12731 = state_12713__$1;
(statearr_12719_12731[(2)] = null);

(statearr_12719_12731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (5))){
var inst_12698 = (state_12713[(7)]);
var inst_12698__$1 = (state_12713[(2)]);
var state_12713__$1 = (function (){var statearr_12720 = state_12713;
(statearr_12720[(7)] = inst_12698__$1);

return statearr_12720;
})();
if(cljs.core.truth_(inst_12698__$1)){
var statearr_12721_12732 = state_12713__$1;
(statearr_12721_12732[(1)] = (6));

} else {
var statearr_12722_12733 = state_12713__$1;
(statearr_12722_12733[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (8))){
var inst_12709 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12723_12734 = state_12713__$1;
(statearr_12723_12734[(2)] = inst_12709);

(statearr_12723_12734[(1)] = (4));


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
});})(c__12197__auto___12728))
;
return ((function (switch__12174__auto__,c__12197__auto___12728){
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__12175__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__12175__auto____0 = (function (){
var statearr_12724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12724[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__12175__auto__);

(statearr_12724[(1)] = (1));

return statearr_12724;
});
var devcards$system$start_ui_with_renderer_$_state_machine__12175__auto____1 = (function (state_12713){
while(true){
var ret_value__12176__auto__ = (function (){try{while(true){
var result__12177__auto__ = switch__12174__auto__.call(null,state_12713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12177__auto__;
}
break;
}
}catch (e12725){if((e12725 instanceof Object)){
var ex__12178__auto__ = e12725;
var statearr_12726_12735 = state_12713;
(statearr_12726_12735[(5)] = ex__12178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12736 = state_12713;
state_12713 = G__12736;
continue;
} else {
return ret_value__12176__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__12175__auto__ = function(state_12713){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__12175__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__12175__auto____1.call(this,state_12713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__12175__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__12175__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__12175__auto__;
})()
;})(switch__12174__auto__,c__12197__auto___12728))
})();
var state__12199__auto__ = (function (){var statearr_12727 = f__12198__auto__.call(null);
(statearr_12727[(6)] = c__12197__auto___12728);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12199__auto__);
});})(c__12197__auto___12728))
);


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents.call(null,true);
} else {
}

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__12197__auto___12776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12197__auto___12776){
return (function (){
var f__12198__auto__ = (function (){var switch__12174__auto__ = ((function (c__12197__auto___12776){
return (function (state_12761){
var state_val_12762 = (state_12761[(1)]);
if((state_val_12762 === (7))){
var state_12761__$1 = state_12761;
var statearr_12763_12777 = state_12761__$1;
(statearr_12763_12777[(2)] = null);

(statearr_12763_12777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (1))){
var inst_12737 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12761__$1,(2),inst_12737);
} else {
if((state_val_12762 === (4))){
var inst_12759 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12761__$1,inst_12759);
} else {
if((state_val_12762 === (6))){
var inst_12746 = (state_12761[(7)]);
var inst_12748 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_12749 = devcards.system.off_the_books.call(null,channel,inst_12748,inst_12746);
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12761__$1,(9),inst_12749);
} else {
if((state_val_12762 === (3))){
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12761__$1,(5),channel);
} else {
if((state_val_12762 === (2))){
var inst_12739 = (state_12761[(2)]);
var inst_12740 = (function (){return ((function (inst_12739,state_val_12762,c__12197__auto___12776){
return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
;})(inst_12739,state_val_12762,c__12197__auto___12776))
})();
var inst_12741 = setTimeout(inst_12740,(0));
var inst_12742 = (function (){return ((function (inst_12739,inst_12740,inst_12741,state_val_12762,c__12197__auto___12776){
return (function (){
return devcards.system.hash_routing_init.call(null,devcards.system.app_state);
});
;})(inst_12739,inst_12740,inst_12741,state_val_12762,c__12197__auto___12776))
})();
var inst_12743 = setTimeout(inst_12742,(0));
var state_12761__$1 = (function (){var statearr_12764 = state_12761;
(statearr_12764[(8)] = inst_12741);

(statearr_12764[(9)] = inst_12743);

(statearr_12764[(10)] = inst_12739);

return statearr_12764;
})();
var statearr_12765_12778 = state_12761__$1;
(statearr_12765_12778[(2)] = null);

(statearr_12765_12778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (9))){
var inst_12746 = (state_12761[(7)]);
var inst_12751 = (state_12761[(2)]);
var inst_12752 = (function (){var temp__5753__auto__ = inst_12746;
var v = inst_12746;
var new_state = inst_12751;
return ((function (temp__5753__auto__,v,new_state,inst_12746,inst_12751,state_val_12762,c__12197__auto___12776){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__5753__auto__,v,new_state,inst_12746,inst_12751,state_val_12762,c__12197__auto___12776))
})();
var inst_12753 = setTimeout(inst_12752,(0));
var state_12761__$1 = (function (){var statearr_12766 = state_12761;
(statearr_12766[(11)] = inst_12753);

return statearr_12766;
})();
var statearr_12767_12779 = state_12761__$1;
(statearr_12767_12779[(2)] = null);

(statearr_12767_12779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (5))){
var inst_12746 = (state_12761[(7)]);
var inst_12746__$1 = (state_12761[(2)]);
var state_12761__$1 = (function (){var statearr_12768 = state_12761;
(statearr_12768[(7)] = inst_12746__$1);

return statearr_12768;
})();
if(cljs.core.truth_(inst_12746__$1)){
var statearr_12769_12780 = state_12761__$1;
(statearr_12769_12780[(1)] = (6));

} else {
var statearr_12770_12781 = state_12761__$1;
(statearr_12770_12781[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (8))){
var inst_12757 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
var statearr_12771_12782 = state_12761__$1;
(statearr_12771_12782[(2)] = inst_12757);

(statearr_12771_12782[(1)] = (4));


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
});})(c__12197__auto___12776))
;
return ((function (switch__12174__auto__,c__12197__auto___12776){
return (function() {
var devcards$system$start_ui_$_state_machine__12175__auto__ = null;
var devcards$system$start_ui_$_state_machine__12175__auto____0 = (function (){
var statearr_12772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12772[(0)] = devcards$system$start_ui_$_state_machine__12175__auto__);

(statearr_12772[(1)] = (1));

return statearr_12772;
});
var devcards$system$start_ui_$_state_machine__12175__auto____1 = (function (state_12761){
while(true){
var ret_value__12176__auto__ = (function (){try{while(true){
var result__12177__auto__ = switch__12174__auto__.call(null,state_12761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12177__auto__;
}
break;
}
}catch (e12773){if((e12773 instanceof Object)){
var ex__12178__auto__ = e12773;
var statearr_12774_12783 = state_12761;
(statearr_12774_12783[(5)] = ex__12178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12784 = state_12761;
state_12761 = G__12784;
continue;
} else {
return ret_value__12176__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__12175__auto__ = function(state_12761){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__12175__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__12175__auto____1.call(this,state_12761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__12175__auto____0;
devcards$system$start_ui_$_state_machine__12175__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__12175__auto____1;
return devcards$system$start_ui_$_state_machine__12175__auto__;
})()
;})(switch__12174__auto__,c__12197__auto___12776))
})();
var state__12199__auto__ = (function (){var statearr_12775 = f__12198__auto__.call(null);
(statearr_12775[(6)] = c__12197__auto___12776);

return statearr_12775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12199__auto__);
});})(c__12197__auto___12776))
);


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return devcards.system.global$module$react.createElement.call(null,"span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=system.js.map
