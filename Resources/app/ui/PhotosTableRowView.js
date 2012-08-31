
module.exports = function(item){
	
	var row = Ti.UI.createTableViewRow({
		height:100,
		backgroundColor:'#333',
		
		//custom fields
		data: item,
	});
	
	var img = Ti.UI.createImageView({
		image:item.media.m,
		width:80,
		height:80,
		left:10, top:10,
		borderColor:'black',
		borderWidth:1
	});
	
	var lblTitle = Ti.UI.createLabel({
		text:item.title,
		left:100,
		color:'#fff',
		font:{fontSize:16, fontFamily:'HelveticaNeue-Bold'}
	});
	
	row.add(img);
	
	row.add(lblTitle);
	
	return row;
}
