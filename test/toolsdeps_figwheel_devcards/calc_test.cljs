;;
;; test/toolsdeps_figwheel_devcards/calc_test.cljs
;;

(ns toolsdeps-figwheel-devcards.calc-test
  (:require [cljs.test :as c-t]
            [toolsdeps-figwheel-devcards.calc :as tfd-c]))
            
(c-t/deftest  test-addition
  (c-t/is (= 4 (tfd-c/ho-add 2 2))))           

(c-t/deftest  test-subtraction
  (c-t/is (= 2 (tfd-c/ho-div 2 1))))