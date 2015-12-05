define([], function() {

"use strict";

var BioView = Backbone.View.extend({
	initialize: function(){
		console.log('here');
	},
	toggleBio: function(e){
		e.preventDefault();
		console.log('toggle bio here');
		this.$el.find('p.hidden-bio').toggleClass('active');
		
	},
	events: {
		'click a.name': 'toggleBio'
	}
});

return BioView;

});