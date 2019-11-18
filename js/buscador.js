
var API_KEY = "6155fe2039bc62a9217a46c95e05b980";
var URL_IMG = "https://image.tmdb.org/t/p/original";
var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
var busqueda = queryStringObj.get("searchbox");
var URL_TODAS = "https://api.themoviedb.org/3/search/tv?api_key=6155fe2039bc62a9217a46c95e05b980&language=en-US&query="+busqueda+"&page=1";
var texto = document.querySelector('.titulos')
texto.innerHTML = "texto buscado:"+" "+busqueda+""
// if (busqueda == "") {
//   alert("La casilla está vacia")
//
// }





fetch(URL_TODAS)
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta);
    var todasLasSeries = objetoLiteralRespuesta.results
    if (todasLasSeries.length < 1) {
      texto.innerHTML = "No se han encontrado series"
    }
    console.log(todasLasSeries);
    var todas = document.querySelector ('.todas ')
    var div = ''
    console.log(todas);
    for (var i = 0; i < todasLasSeries.length; i++) {
      if (todasLasSeries[i].poster_path == null) {
        var poster = '../images/nodispo4.JPG"'
      }else {
        var poster = URL_IMG+ todasLasSeries[i].poster_path
      }

      div += '<div class="buscadas">'
      div += '<a href="detalleDePeliculas.html?idPeli=' + todasLasSeries[i].id + '">'
      div += '<img src="'+poster+'" alt="">'
      div += '</a>'
      div += '</div>'

      todas.innerHTML += div


    }
  })
