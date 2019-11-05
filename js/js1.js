
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
      var populares = document.querySelector ('.populares')
      var div = ''
      console.log(arrayPopulares);
      for (var i = 0; i < arrayPopulares.length; i++) {


        div = '<div class="serie">'
        div +=     '<img src="'+URL_IMG+arrayPopulares[i].poster_path+'" alt="" style="heigth:100px;width:150px;">'
        div += '</div>'

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

        // <div class="serie">
        //     <img src="" alt="">
        // </div>
    })

  var URL_AL_AIRE_HOY = "on_the_air"
  var URL = "https://api.themoviedb.org/3/tv/"+URL_AL_AIRE_HOY+"?api_key="+API_KEY+"&language=en-US&page=1"
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);

        // <div class="serie">
        //     <img src="" alt="">
        // </div>
    })



})
