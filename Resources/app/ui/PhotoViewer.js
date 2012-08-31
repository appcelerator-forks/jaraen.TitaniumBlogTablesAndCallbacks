
var Mods = require('/ModulePaths');

var $$ = require(Mods.STYLES);

module.exports = function(item){
	
	var win = Ti.UI.createWindow({
		backgroundColor:'#000',
		title:item.title
	});
	
	var img = Ti.UI.createImageView({
		image: item.media.m
	});
	
	win.add(img);
	
	if($$.iOS){
	
		var btnClose = Ti.UI.createButton({
			title:'Cerrar'
		});
	
		win.rightNavButton = btnClose;
		
		btnClose.addEventListener('click', function(){
			win.close();
		});
	}
	
	win.showImage = function (){
		
		win.open({
			modal : true
		});
		
	}
	
	
	return win;
	
}
