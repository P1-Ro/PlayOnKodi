window.onload = function(){
	var request = new Request("https://play-on-kodi-update-server.herokuapp.com/");
	fetch(request)
	.then((response) => {
		console.log("Ping completed")
	});
}