
var Mods = require('/ModulePaths');

var $$ = require(Mods.STYLES),
	PhotoViewer = require(Mods.PHOTO_VIEWER),
	PhotoRow = require(Mods.PHOTOS_ROW)
	Feed = require(Mods.FLICKR_FEED);

module.exports = function(){
	
	var tableview = Ti.UI.createTableView();
	
	function callbackTableView(data){
		
		var rows = [];
		
		if(data.error){
			alert(data.error);
			return;
		}
		
		for(var i = 0, j = data.length; i < j; i++){
			rows[i] = new PhotoRow(data[i]);
		}
		
		tableview.data = rows;
		
	}
	
	tableview.addEventListener('click', function(e){
		
		if(e.row){
			
			var item = e.row.data;
			
			var viewer = new PhotoViewer(item);
			
			viewer.showImage();
			
		}
		
	});
	
	Feed.getData(callbackTableView);
	
	return tableview;
}

