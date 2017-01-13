/*Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert.
*/
//validar que solo se ingrese letras a nombres y apellidos

function checkInput(evt)
{
  if(window.event.keyCode >='65' && window.event.keyCode<='90' || window.event.keyCode =='8' || window.event.keyCode =='32')
      return true;
  else
      evt.preventDefault();
}
/*
function valida_email() {
		
	var input_email=document.getElementById("input_email").value;

	
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input_email))
	{
		alert("direccion correcta");

	}
	else 
	{
		alert("dirección email es incorrecta.");
	}

}*/

//function validateForm(){}

function valida(f) 
{
  var ok = true;
  var salida = document.getElementById("salida").value;

  if(f.input-social.value == "")
  {
    salida.innerHTML="Debes escribir contenido";
    ok = false;
  }

  return ok;
}
