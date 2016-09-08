/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("hyuna",{

	hIndex: 1,

	// Module config defaults.
	defaults: {
		updateInterval: 10000,
		fadeSpeed: 1000
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	getDom: function() {
		this.hIndex = this.hIndex + 1;
		console.log(this.hIndex+'.png');

		if(this.hIndex == 5) this.hIndex = 1;

		var wrapper = document.createElement("div");
		wrapper.innerHTML = '<img src="modules/hyuna/img/'+this.hIndex+'.png">';
		return wrapper;

	}


});
