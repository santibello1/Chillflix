window.onload = function (){

var API_KEY = "6155fe2039bc62a9217a46c95e05b980";
var URL_IMG = "https://image.tmdb.org/t/p/original"

var queryString = location.search;

var queryStringObj = new URLSearchParams(queryString);
var idDeGenero = queryStringObj.get("idDeGenero")
console.log(queryStringObj.get("nombreDeGenero"))
var nombreDeGenero = queryStringObj.get("nombreDeGenero")

var titulos = document.querySelector(".titulos");




var URL_GENEROS = 'http://api.themoviedb.org/3/discover/tv?api_key=6155fe2039bc62a9217a46c95e05b980&sort_by=popularity.desc&with_genres='+idDeGenero+''

fetch(URL_GENEROS)
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta);
    var generos = objetoLiteralRespuesta.results
    var seriesPorGenero = document.querySelector ('.generosDeSerie ul')
    var div = ''

    for (var i = 0; i < generos.length; i++) {


      div = '<li>'
      div = '<a href="detalleDePeliculas.html?idPeli=' + generos[i].id + '">'
      div += '<img src="'+URL_IMG+generos[i].poster_path+'" alt="">'
      div += '</a>'
      div += '</li>'
      seriesPorGenero.innerHTML += div


      titulos.innerHTML = nombreDeGenero


    }
  })








}  //aca termina eñ onload
