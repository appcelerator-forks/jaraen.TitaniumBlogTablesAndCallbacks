
var Mods = require('/ModulePaths');

var $$ = require(Mods.STYLES),
	PhotosView = require(Mods.PHOTOS_TABLEVIEW);


module.exports = function(){
	
	var args = args || {};
	
	var win = Ti.UI.createWindow($$.appWindow);
	
	var view = new PhotosView();
	
	win.add(view);
	
	return win;
	
}


