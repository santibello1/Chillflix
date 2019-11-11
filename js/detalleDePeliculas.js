var urlParam = new URLSearchParams(location.search);;

var id = urlParam.get("idPeli");
var URL_IMG = "https://image.tmdb.org/t/p/original"




console.log(id);

var URL_DETALLE = "https://api.themoviedb.org/3/tv/"+id+"?api_key=6155fe2039bc62a9217a46c95e05b980&language=es-AR";

var serie = document.querySelector('main')


fetch(URL_DETALLE)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    console.log(datos);

    var unaSerie = datos
    console.log(unaSerie.title);
     serie.innerHTML += '<h1 class="tituloSerie">'+unaSerie.name+'</h1>'
     serie.innerHTML += '<div class="imgSerieContainer"><img class="imgSerie" src="'+URL_IMG+unaSerie.poster_path+'" alt="">'
     serie.innerHTML += '</div>'
     serie.innerHTML += '<p class="parrafo">'+unaSerie.overview+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Puntaje:"+' '+unaSerie.vote_average+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Generos:"+' '+unaSerie.genres+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Fecha de estreno:"+' '+unaSerie.first_air_date+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Lenguaje original:"+' '+unaSerie.original_language+'</p>'
     serie.innerHTML += '<br>'
     serie.innerHTML += '<br>'
     serie.innerHTML += '<br>'
     serie.innerHTML += '<br>'
console.log(unaSerie);

  })
  .catch(function (errores) {
    console.log(errores);
  });
