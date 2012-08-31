exports.getData = function(callback) {

	//note that some flickr tags returns invalid json data :S
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=appcelerator";

	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);

			try {
				var data = JSON.parse(this.responseText);

				data = data.items;
			} catch(err) {
				Ti.API.info(JSON.stringify(err))
				var data = {
					error : 'Not valid JSON data'
				};
			}

			if (callback) {
				callback(data);
			}
		},

		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout : 5000 // in milliseconds
	});

	// Prepare the connection.
	client.open("GET", url);

	// Send the request.
	client.send();

}

