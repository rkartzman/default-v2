define([], function(){
	"use strict";

	var ScrollView = Backbone.View.extend({
		initialize: function(){
			console.log('init scroll view');
			// $(window).on('resize', _.bind(this.resize, this));
			$(window).on('scroll', _.bind(this.resize, this));
			this.$bounce = $('.bounce');
		},
		resize: function(){
			var self = this;
			var ww = $(window).width();
			var st = $(window).scrollTop();
			// var wo = $('section.white h2').offset().top;
			var bo = $('section.black').offset().top;
			if(st > 0){
				self.$bounce.addClass('fade');

			}
			
			if(st > bo){
				console.log('hey');
				
				$('section.white > h2').css({
					"position": "fixed", 
					"top": 200 - st + 800
				});
				self.$bounce.addClass('fade-out');
			}else {
				$('#navbar').css({
					"position": "relative", 
					"top": ''
				});
				$('section.white > h2').css({
					"top": ''
				});
			}
			
		}
	});
	return ScrollView;
});