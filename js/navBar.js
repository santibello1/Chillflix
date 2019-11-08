window.addEventListener("load",function(){

  var API_KEY = "6155fe2039bc62a9217a46c95e05b980";
  var URL_GENRES = "https://api.themoviedb.org/3/genre/tv/list?api_key="+API_KEY+"&language=en-US"
  var URL_GENRES_IMG = "https://api.themoviedb.org/3/discover/tv?api_key="+API_KEY+"&sort_by=popularity.desc&page=1&with_genres="

  var URL_IMG = "https://image.tmdb.org/t/p/original"
  var arrayDeGeneros = []
  var generos
  var main
  var main_str =""
  var arrayDeSeries = []

  fetch(URL_GENRES)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);

      //voy a insertar los generos como LI dentro del UL

      // tengo un objetoLiteralRespuesta, que dentro tiene un array de generos
      // el array de generos, contiene objetos literales generos
      arrayDeGeneros = objetoLiteralRespuesta.genres
      // capturo el UL
      // "listaGeneros"
      generos = document.querySelector (".listaGeneros");
      main = document.querySelector ("main");
      // tengo que hacer un bucle para recorrer los elementos del array

         for (var i = 0; i < arrayDeGeneros.length; i++) {
            genreName = arrayDeGeneros[i].name
            generos.innerHTML += '<li><a href="genres.html?idDeGenero='+arrayDeGeneros[i].id+'&nombreDeGenero='+genreName+'">'+genreName+'</a></li>';
            console.log(genreName);

         }

    })

  

})
