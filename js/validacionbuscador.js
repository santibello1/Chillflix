window.addEventListener('load', function(){

  document.querySelector('form .boton').addEventListener('click', function(event){


if (document.querySelector("input.buscador").value == "") {
  // uso el preventDefault para que no siga su comportamiento por defualt
  // no debe enviar
  event.preventDefault();
  alert("La casilla se encuentra vacia")

}



  })



  document.querySelector('form .boton2').addEventListener('click', function(event){


if (document.querySelector("select").value == "") {
  // uso el preventDefault para que no siga su comportamiento por defualt
  // no debe enviar
  event.preventDefault();
  alert("Las casillas se encuentran vacias")

}

if (document.querySelector("select.select-generos").value == document.querySelector("select.select-generos_2").value & document.querySelector("select.select-generos").value != "") {
  // uso el preventDefault para que no siga su comportamiento por defualt
  // no debe enviar
  event.preventDefault();
  alert("No se puede buscar y excluir el mismo genero")

}




  })


})
