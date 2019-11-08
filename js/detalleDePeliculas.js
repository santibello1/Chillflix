var urlParam = new URLSearchParams(location.search);;

var id = urlParam.get("idPeli");
var URL_IMG = "https://image.tmdb.org/t/p/original"




console.log(id);

var URL_DETALLE = "https://api.themoviedb.org/3/tv/"+id+"?api_key=6155fe2039bc62a9217a46c95e05b980&language=en-US";

var serie = document.querySelector('.serie')


fetch(URL_DETALLE)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    console.log(datos);

    var unaSerie = datos
    console.log(unaSerie.title);
     serie.innerHTML += '<h1 class="tituloSerie">'+unaSerie.name+'</h1>'
     serie.innerHTML += '<div class="imgSerieContainer">'
     serie.innerHTML += '<img class="imgSerie" src="'+URL_IMG+unaSerie.poster_path+'" alt="" >'
     serie.innerHTML += '</div>'
     serie.innerHTML += '<p class="">'+unaSerie.overview+'</p>'
     serie.innerHTML += '<p class="">'+"Puntaje:"+''+unaSerie.vote_average+'</p>'
     serie.innerHTML += '<p class="">'+"Generos:"+''+unaSerie.genres+'</p>'

    serie.innerHTML += '<p class="">'+unaSerie.overview+'</p>'


  })
  .catch(function (errores) {
    console.log(errores);
  });
