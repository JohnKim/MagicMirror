/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = '<img src="http://img04.deviantart.net/149b/i/2013/221/d/5/hyuna__4minute__png__render__by_pikudesign-d6hce32.png">';
		return wrapper;
	}
});
