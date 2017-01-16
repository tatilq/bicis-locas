/*Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert.
*/
//validar que todos los campos esten llenos
function validateForm()
{
  var username = document.getElementById("name").value;
  var userlastname = document.getElementById("lastname").value;
  var useremail = document.getElementById("input-email").value;
  var userpassword = document.getElementById("input-password").value;

  if(username.length == 0 ){
    alert("Por favor digite su nombre");
    return false;
  } 

  if(userlastname ==""){
    alert("Por favor digite su apellido");
    return false;
  } 

  if(useremail ==""){
    alert("Por favor digite su correo electrónico");
    return false;
  } 

  if(userpassword ==""){
    alert("Por favor digite su contraseña");
    return false;
  }
} 

//validar que solo se escriba letras
function checkInput(evt)
{
  if(window.event.keyCode >='65' && window.event.keyCode<='90' || window.event.keyCode =='8' || window.event.keyCode =='32')
  {
    return true;
  } 
  else
      evt.preventDefault();
}
//convierte la primera letra en mayuscula
function validaName(form) 
{
  form.l.disabled=(form.n.value=='');
  var nombre = document.getElementById("name");
  var nom=[];
  var minuNombre = nombre.value.slice(1);
  nom=nombre.value;
  nombre.value = nom[0].toUpperCase()+minuNombre;
}
function validaLastname(form) 
{
  form.e.disabled=(form.l.value=='');
  var apellido = document.getElementById("lastname");
  var apell=[];
  var minuApellido = apellido.value.slice(1);
  apell=apellido.value;
  apellido.value = apell[0].toUpperCase()+minuApellido;
}

function validaEmail(form) 
{
  
  var email = document.getElementById("input-email").value;
   var salida_mail = document.getElementById("salida_mail");
  

  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
  {
    salida_mail.innerHTML="Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com";
    return false;
  }
  else 
  {
     salida_mail.innerHTML="Correo Electrónico Válido ✔";
     form.p.disabled=(form.e.value=='');
    return true;
  }
  

}