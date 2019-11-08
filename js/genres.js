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
      //console.log(objetoLiteralRespuesta);

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
            //console.log(genreName);
            main_str  = '<article class="genre">'
            main_str +=  '<h2 class="titulos" id="'+ arrayDeGeneros[i].id +'">'+ genreName +'</h2>'
            main_str += '<div>'

             fetch(URL_GENRES_IMG+arrayDeGeneros[i].id)
               .then(function(response) {
                 return response.json();
               })
               .then(function(objetoLiteralSeries) {
                 // console.log(objetoLiteralSeries);
                 var test = document.querySelector(".genre div")
                arrayDeSeries = objetoLiteralSeries.results
                  for (var i = 0; i < 6; i++) {
                      // console.log(URL_IMG+arrayDeSeries[i].poster_path);
                      test.innerHTML += '<div class="serie">'
                      test.innerHTML +=    '<img src="'+URL_IMG+arrayDeSeries[i].poster_path+'" width="100">'
                      test.innerHTML += '</div>'
                      // console.log(main_str);
                    }

               })
               main_str += '</div></article>'
               console.log(main_str);
               main.innerHTML += main_str
         }

    })

    // fetch(URL_GENRES_IMG+10759)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(objetoLiteralSeries) {
    //     console.log("======");
    //     console.log(objetoLiteralSeries);
    //
    //     var coso = document.querySelector("#coso")
    //
    //    arrayDeSeries = objetoLiteralSeries.results
    //      for (var i = 0; i < arrayDeSeries.length; i++) {
    //          console.log(URL_IMG+arrayDeSeries[i].poster_path);
    //          coso.innerHTML += '<div class="serie">'
    //          coso.innerHTML +=    '<img src="'+URL_IMG+arrayDeSeries[i].poster_path+'">'
    //          coso.innerHTML += '</div>'
    //          // console.log(main_str);
    //        }
    //
    //   })
})
