(ns ^:figwheel-hooks toolsdeps-figwheel-devcards.cards
  (:require [devcards.core                      :as dc]
            ;;[toolsdeps-figwheel-devcards.card-1 :as c1]
            ))

(enable-console-print!)

(defn render-card
  ""
  []
  (dc/start-devcard-ui))

(defn ^:after-load render-on-reload
  ""
  []
  (render-card))

(render-card)
