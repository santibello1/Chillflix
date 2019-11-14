
var API_KEY = "6155fe2039bc62a9217a46c95e05b980";
var URL_IMG = "https://image.tmdb.org/t/p/original";
var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
var busqueda = queryStringObj.get("searchbox");
var URL_TODAS = "https://api.themoviedb.org/3/search/tv?api_key=6155fe2039bc62a9217a46c95e05b980&language=en-US&query="+busqueda+"&page=1";


if (busqueda == "") {
  alert("La casilla está vacia")
  
}


fetch(URL_TODAS)
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta);
    var todasLasSeries = objetoLiteralRespuesta.results
    var todas = document.querySelector ('.todas ul')
    var div = ''
    console.log(todas);
    for (var i = 0; i < todasLasSeries.length; i++) {


      div = '<li>'
      div = '<a href="detalleDePeliculas.html?idPeli=' + todasLasSeries[i].id + '">'
      div += '<img src="'+URL_IMG+todasLasSeries[i].poster_path+'" alt="">'
      div += '</a>'
      div += '</li>'

      todas.innerHTML += div
    }
  })
