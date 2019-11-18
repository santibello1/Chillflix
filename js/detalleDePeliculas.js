var urlParam = new URLSearchParams(location.search);;

var id = urlParam.get("idPeli");
var URL_IMG = "https://image.tmdb.org/t/p/original"




console.log(id);

var URL_DETALLE = "https://api.themoviedb.org/3/tv/"+id+"?api_key=6155fe2039bc62a9217a46c95e05b980&language=es-AR";

var serie = document.querySelector('.detalles')
var trailer = document.querySelector('.trailer')

fetch(URL_DETALLE)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    console.log(datos);

    var unaSerie = datos
    console.log(unaSerie.title);
    for (var i = 0; i < unaSerie.genres; i++) {
      unaSerie[i]
    }

    var genero = unaSerie[i]
     serie.innerHTML += '<h1 class="tituloSerie">'+unaSerie.name+'</h1>'
     serie.innerHTML += '<div class="imgSerieContainer"><img class="imgSerie" src="'+URL_IMG+unaSerie.poster_path+'" alt="">'
     serie.innerHTML += '</div>'
     serie.innerHTML += '<button class="botonFav" type="button" name=""> agregar a favoritas </button>'
     serie.innerHTML += '<p class="parrafo">'+unaSerie.overview+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Puntaje:"+' '+unaSerie.vote_average+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Cantidad de episodios:"+' '+unaSerie.number_of_episodes+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Fecha de estreno:"+' '+unaSerie.first_air_date+'</p>'
     serie.innerHTML += '<p class="parrafo">'+"Lenguaje original:"+' '+unaSerie.original_language+'</p>'
     var generosLink = ""
     console.log(unaSerie.genres);
     for (var i = 0; i < unaSerie.genres.length; i++) {
       generosLink += '   <a href="genres.html?idDeGenero='+unaSerie.genres[i].id+'&nombreDeGenero='+unaSerie.genres[i].name+'">' + unaSerie.genres[i].name + '</a>'
     }
     serie.innerHTML += '<p class="parrafo">'+"Generos:"+' '+ generosLink+'</p>'

     serie.innerHTML += '<br>'
     serie.innerHTML += '<br>'
     serie.innerHTML += '<br>'

console.log(unaSerie);

  })
  .catch(function (errores) {
    console.log(errores);

  });

  fetch('https://api.themoviedb.org/3/tv/'+id+'/videos?api_key=6155fe2039bc62a9217a46c95e05b980&language=en-US')
.then(function(response){
  return response.json();
})
.then(function(obj) {
  console.log(obj);
  for (var i = 0; i < obj.results.length; i++) {
    trailer.innerHTML += '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+obj.results[i].key+'"></iframe>'
  }
})
.catch(function(error){
  console.log(error);
})


var URL_RECOMENDACIONES = "https://api.themoviedb.org/3/tv/"+id+"/recommendations?api_key=6155fe2039bc62a9217a46c95e05b980&language=en-US&page=1";

fetch(URL_RECOMENDACIONES)
.then(function(response){
return response.json();
})
.then(function(obj) {
console.log(obj);
var seriesEncontradas = obj.results
var recomendadas =  document.querySelector('.re')
var div = ''
for (var i = 0; i < seriesEncontradas.length; i++) {

                div = '<li>'
                div = '<a href="detalleDePeliculas.html?idPeli=' + seriesEncontradas[i].id + '">'
                div += '<img src="'+URL_IMG+seriesEncontradas[i].poster_path+'" alt="">'
                div += '</a>'
                div += '</li>'
                recomendadas.innerHTML += div


}
})
