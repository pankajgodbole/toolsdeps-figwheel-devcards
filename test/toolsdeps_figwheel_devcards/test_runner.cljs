;;
;; test/toolsdeps_figwheel_devcards/test_runner.cljs
;;

(ns ^:figwheel-hooks yahtzee.test-runner
  (:require [cljs.test :as c-t]
            [cljs-test-display.core :as ctd-c]
            [toolsdeps-figwheel-devcards.calc-test]))

(enable-console-print!)

(defn ho-run-tests
  ""
  []
  (c-t/run-tests (ctd-c/init! "app-tests")
                 toolsdeps-figwheel-devcards.calc-test))
                 

(defn ^:after-load ho-render-on-reload
  ""
  []
  (ho-run-tests))                
                
(ho-run-tests)




