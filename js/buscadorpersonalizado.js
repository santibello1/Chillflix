

window.addEventListener("load",function(){
console.log("esto funciona?");
  var API_KEY = "6155fe2039bc62a9217a46c95e05b980";
  var URL_GENRES = "https://api.themoviedb.org/3/genre/tv/list?api_key="+API_KEY+"&language=en-US"
  // var URL_PER = "https://api.themoviedb.org/3/discover/tv?"+API_KEY+"&language=en-US&sort_by="+orden+"&first_air_date_year="+fechaDeEstreno+"&page=1&with_genres="+generoSi+"&without_genres="+generoNo+"";
  var URL_PER = "https://api.themoviedb.org/3/discover/tv?api_key=6155fe2039bc62a9217a46c95e05b980&language=es-AR&sort_by=popularity.desc&page=1";
  var URL_IMG = "https://image.tmdb.org/t/p/original"
  var URL_GENRES_IMG = "https://api.themoviedb.org/3/discover/tv?api_key="+API_KEY+"&sort_by=popularity.desc&page=1&with_genres="
  var generos
  var main

  var option = document.querySelector("select.select-generos")
  var option2 = document.querySelector("select.select-generos_2")
  var queryStringObj = new URLSearchParams(window.location.search);
  var generoSi = queryStringObj.get("generoSi");
  var generoNo = queryStringObj.get("generoNo");
  var orden = queryStringObj.get("orden");
  var fechaDeEstreno = queryStringObj.get("fechaDeEstreno");

    fetch(URL_GENRES)
      .then(function(response) {
        return response.json();
      })
      .then(function(objetoLiteralRespuesta) {
        console.log(objetoLiteralRespuesta);


        var arrayDeGeneros = objetoLiteralRespuesta.genres
        console.log(arrayDeGeneros);
           for (var i = 0; i < arrayDeGeneros.length; i++) {

              option.innerHTML += "<option value='"+i+"'>"+arrayDeGeneros[i].name+" </option>"
              option2.innerHTML += "<option value='"+i+"'>"+arrayDeGeneros[i].name+" </option>"

           }


      })




        fetch(URL_PER)
          .then(function(response) {
            return response.json();
          })
          .then(function(objetoLiteralRespuesta) {
            console.log(objetoLiteralRespuesta);
            var seriesEncontradas = objetoLiteralRespuesta.results
            var carrusel = document.querySelector ('.carrusel ul')
            var div = ''

            for (var i = 0; i < seriesEncontradas.length; i++) {


              div = '<li>'
              div = '<a href="detalleDePeliculas.html?idPeli=' + seriesEncontradas[i].id + '">'
              div += '<img src="'+URL_IMG+seriesEncontradas[i].poster_path+'" alt="">'
              div += '</a>'
              div += '</li>'
              carrusel.innerHTML += div





            }
          })


var boton = document.querySelector(".boton2")
boton.addEventListener(click)











})


// capturar boton buscar

// agregarle addEventListener 'click'

// preventDEfault

// validar que por lo menos un campo tenga data

// si eso sucede, envia data, sino advierte al usuario
