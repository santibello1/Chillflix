window.addEventListener('load', function(){

  document.querySelector('form .boton').addEventListener('click', function(event){


if (document.querySelector("input.buscador").value == "") {
  // uso el preventDefault para que no siga su comportamiento por defualt
  // no debe enviar
  event.preventDefault();
  alert("La casilla se encuentra vacia")

}


  })


})
