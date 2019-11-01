window.onload = function(){

  fetch('http://example.com/movies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);

    })
    .catch(function(error){
      console.log("el errror es: "+ error)
    })















}
