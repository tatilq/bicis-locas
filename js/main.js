//validar que todos los campos esten llenos
function validateForm()
{
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname".value);
  var username = document.getElementById("name").value;
  var userlastname = document.getElementById("lastname").value;
  var useremail = document.getElementById("input-email").value;
  var salida_enviar = document.getElementById("salida_enviar");
  if(username == "" || userlastname =="" || useremail =="" || validaPass()==false || validaBici()==false)
  { 
    salida_enviar.innerHTML="<p style='color:red; font-size:15px;' >Falta llenar Campos</p>";
    return false;
  }
  else
  {
    salida_enviar.innerHTML="<p style='color:green; font-size:15px;' >Formulario enviado ✔</p>";
    return true;
  } 
}
//convierte la primera letra en mayuscula
function validaName() 
{
  var nombre = document.getElementById("name");
  var salida_name = document.getElementById("salida_name");
  
  if((/^[a-zA-Z\s]*$/).test(nombre.value))
  {
    var nom=[];
    var minuNombre = nombre.value.slice(1);
    nom=nombre.value;
    nombre.value = nom[0].toUpperCase()+minuNombre;
    salida_name.innerHTML="<p style='color:green; font-size:15px;' >Nombre valido, primera letra mayuscula ✔</p>";
  }
  else
  {
    salida_name.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras</p>";
  
  }
}
//valida el nombre segun el formato valido
function validaLastname() 
{
  var apellido = document.getElementById("lastname");
  var salida_lastname = document.getElementById("salida_lastname");
  if((/^[a-zA-Z\s]*$/).test(apellido.value))
  {
    var apell=[];
    var minuApellido = apellido.value.slice(1);
    apell=apellido.value;
    apellido.value = apell[0].toUpperCase()+minuApellido;
    salida_lastname.innerHTML="<p style='color:green; font-size:15px;' >Apellido valido, primera letra mayuscula ✔</p>";
  }
  else
  {
    salida_lastname.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras</p>";
  
  }
}
//valida el email segun el formato valido
function validaEmail() 
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
    salida_mail.innerHTML="<p style='color:green; font-size:15px;'>Email valido ✔</p>";
    return true;
  }
  
}
//valida la contraseña, el minimo 6 caracteres
function validaPass()

{
  var password = document.getElementById("input-password").value;
  var salida_pass = document.getElementById("salida_pass");
  if (!password.match(/.{6,}/)) 
  {
    salida_pass.innerHTML="<p style='color:red; font-size:15px;'>Minimo 6 caracteres</p>";
    return false;
  }
  else if ( password == "123456" || password.toLowerCase() == "password" || password == "098754") 
  {
    salida_pass.innerHTML="<p style='color:red; font-size:15px;' >Contraseña Invalida</p>";
    return false;
  }
  else 
  {
    salida_pass.innerHTML="<p style='color:green; font-size:15px;'>Contraseña valida ✔</p>";
    return true;
  }
}
function validaBici()

{
  var tipoBici = document.getElementById("select_bici").value;
  var salida_bici = document.getElementById("salida_bici");
  if (tipoBici != 0)
  {
     salida_bici.innerHTML="<p style='color:green; font-size:15px;'>Bici Seleccionada ✔</p>";
    return true; 
  }
  else 
  {
    salida_bici.innerHTML="<p style='color:red; font-size:15px;'>Selecciona una Bici</p>";
    return false;
    
  }
}