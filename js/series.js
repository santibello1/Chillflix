
window.addEventListener("load",function(){

  var API_KEY = "6155fe2039bc62a9217a46c95e05b980";
  var URL_IMG = "https://image.tmdb.org/t/p/original"

  var URL_POPULARES = "popular"
  var URL = "https://api.themoviedb.org/3/tv/"+URL_POPULARES+"?api_key="+API_KEY+"&language=en-US&page=1"
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      var arrayPopulares = objetoLiteralRespuesta.results
      var populares = document.querySelector ('#contPop ul')
      var div = ''
      console.log(arrayPopulares);
      for (var i = 0; i < arrayPopulares.length; i++) {

        div = '<li>'
        div = '<a href="detalleDePeliculas.html?idPeli=' + arrayPopulares[i].id + '">'
        div += '<img src="'+URL_IMG+arrayPopulares[i].poster_path+'" alt="">'
        div += '</a>'
        div += '</li>'

        populares.innerHTML += div

      }
    })

  var URL_MEJOR_PUNTAJE = "top_rated"
  var URL = "https://api.themoviedb.org/3/tv/"+URL_MEJOR_PUNTAJE+"?api_key="+API_KEY+"&language=en-US&page=1"
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      var arrayMejorPuntaje = objetoLiteralRespuesta.results
      var puntaje = document.querySelector ('.mejorPuntuadas ul')
      var div = ''
      console.log(arrayMejorPuntaje);
      for (var i = 0; i < arrayMejorPuntaje.length; i++) {


        div = '<li>'
        div = '<a href="detalleDePeliculas.html?idPeli=' + arrayMejorPuntaje[i].id + '">'
        div += '<img src="'+URL_IMG+arrayMejorPuntaje[i].poster_path+'" alt="">'
        div += '</a>'
        div += '</li>'
        puntaje.innerHTML += div
      }
    })

  var URL_AL_AIRE_HOY = "on_the_air"
  var URL = "https://api.themoviedb.org/3/tv/"+URL_AL_AIRE_HOY+"?api_key="+API_KEY+"&language=en-US&page=1"
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      var arrayAlAireHoy = objetoLiteralRespuesta.results
      var alAireHoy = document.querySelector ('.alAireHoy ul')
      var div = ''
      console.log(arrayAlAireHoy);
      for (var i = 0; i < arrayAlAireHoy.length; i++) {


        div = '<li>'
        div = '<a href="detalleDePeliculas.html?idPeli=' + arrayAlAireHoy[i].id + '">'
        div += '<img src="'+URL_IMG+arrayAlAireHoy[i].poster_path+'" alt="">'
        div += '</a>'
        div += '</li>'

        alAireHoy.innerHTML += div
      }
    })// </div>
    })
