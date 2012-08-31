
var osname = Ti.Platform.osname;

module.exports = {
	
	iOS: (osname === 'iphone' || osname === 'ipad'),
	
	android: osname === 'android',
	
	mainBackgroundColor: '#fefefe',
	
	appWindow:{
		backgroundColor:'#fefefe'
	}
}
