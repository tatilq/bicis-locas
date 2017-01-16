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
   var salida_enviar = document.getElementById("salida_enviar");

  if(username.length == 0  || userlastname.length == 0 || useremail.length == 0 || userpassword.length == 0)
  {
    salida_enviar.innerHTML="<p style='color:red; font-size:20px;'> Faltan campos por llenar</p>";
    
    return false;
  } 
  else
  {
    salida_enviar.innerHTML="<p style='color:green; font-size:15px;'>Campos llenados correctamente✔</p>";
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
  //form.e.disabled=(form.l.value=='');
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
    salida_mail.innerHTML="<p style='color:red; font-size:15px;' >Formato Invalido, Ej: name@domain.com</p>";
    return false;
  }
  else 
  {
    salida_mail.innerHTML="<p style='color:green; font-size:20px;'>✔</p>";
    form.p.disabled=(form.e.value=='');
    return true;
  }
  
}
function validaPass()

{
  var password = document.getElementById("input-password").value;
  var salida_pass = document.getElementById("salida_pass");
  if (!password.match(/.{6,}/)) 
  {
    salida_pass.innerHTML="<p style='color:red; font-size:15px;'>Minimo 6 caracteres</p>";
    return false;
  }
  else if (password == "password" || password == "123456" || password == "098754") 
  {
    salida_pass.innerHTML="<p style='color:red; font-size:15px;' >Contraseña Invalida</p>";
    return false;
  }
  else 
  {
    salida_pass.innerHTML="<p style='color:green; font-size:20px;'>✔</p>";
    return true;
  }
}