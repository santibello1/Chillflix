window.onload = function(){

  var url = "";
fetch(url)
	.then(function (res) {
		return res.json();
	})
	.then(function (informacion) {
		// hacer algo aquí con la información que llega de la API
	})
	.catch(function (errors) {
		console.log(errors);
	});
Contraer

















}
