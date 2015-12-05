define([
  'jquery',
  'underscore',
  'backbone', 
  'views/bio',
  'views/scroll',
], function($, _, Backbone, BioView, ScrollView) {

"use strict";

// alert(document.readyState);
// alert('home sweet home');
var bv = new BioView({ el: $('.info-bio')});
var sv = new ScrollView({ el: $('body')});



});