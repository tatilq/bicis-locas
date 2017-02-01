//-------------------------------FUNCION PRINCIPAL LLAMA A LAS DEMAS FUNCIONES-------------------------------------------------//
//------------------------NO SE PUEDE MANDAR EL FORMULARIO SI TODOS LOS CAMPOS NO SON CORRECTOS--------------------------------//
function validateForm(){
  var salida_enviar = document.getElementById("salida_enviar");
  validaName();
  validaLastname(); 
  validaEmail(); 
  validaPass(); 
  validaBici();
      
  if(validaName() == true && validaLastname()==true && validaEmail()==true && validaPass()==true && validaBici()==true)
      salida_enviar.innerHTML='<p style="color:green;">Formulario Enviado Correctamente ✔</p>';  
  else
     salida_enviar.innerHTML='<p style="color:red;">Llena todos los campos correctamente</p>';
}
//----------------------------------------CONVIERTE LA PRIMERA LETRA EN MAYUSCULA--------------------------------------------------//
function primMayuscula(id){
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
} 
//------------------------------------------VALIDA EL NOMBRE SEGUN FORMATO DADO----------------------------------------------------//
function validaName(){
  var name = document.getElementById("name"); 
  var isValid=false;
  if(name.value.length > 0 && name.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(name.value);
    document.getElementById("name").value = palabra; 
    salida_name.innerHTML="<p style='color:green; font-size:15px;' >Nombre valido ✔</p>";
    isValid=true;
  }
  else{
    salida_name.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre</p>";
    isValid=false;
  }   
  return isValid;
}
//------------------------------------------VALIDA EL APELLIDO SEGUN FORMATO DADO-----------------------------------------------------//
function validaLastname() {
  var lastname = document.getElementById("lastname");    
  var isValid=false;
  if(lastname.value.length > 0 && lastname.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(lastname.value);
    document.getElementById("lastname").value = palabra;  
    salida_lastname.innerHTML="<p style='color:green; font-size:15px;' >Apellido valido ✔</p>";
    isValid=true;
  }
  else{ 
   salida_lastname.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el apellido</p>";  
    
    isValid=false;
  }
  return isValid;  
}
//-------------------------------------------VALIDA EMAIL SEGUN FORMATO DADO----------------------------------------------------------//
function validaEmail(){
  var email = document.getElementById("input-email");
  var isValid=false;
 if(email.value.length > 0 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
    salida_mail.innerHTML="<p style='color:green; font-size:15px;'>Email valido ✔</p>";
    isValid=true;
  }
  else{
    salida_mail.innerHTML="<p style='color:red; font-size:15px;' >Formato Invalido, Ej: name@domain.com</p>";
    isValid=false;
  }
  return isValid;
 }
//--------------------------------------------VALIDA CONTRASEÑA SEGUN FORMATO DADO---------------------------------------------------------//
function validaPass(){
  var password = document.getElementById("input-password");
  var isValid=false;
  if (!password.value.match(/.{6,}/) || password.value == "123456" || password.value.toLowerCase() == "password" || password.value == "098754"){
    salida_pass.innerHTML="<p style='color:red; font-size:15px;'>Debes Ingresar una contraseña valida.</p>";
    isValid=false;
  }
  else{
   salida_pass.innerHTML="<p style='color:green; font-size:15px;'>Contraseña valida ✔</p>";
    isValid=true;
  }
  return isValid;
}
//------------------------------------------VALIDA QUE SELECCIONES UN TIPO DE BICICLETA------------------------------------------------------//
function validaBici(){
  var tipo = document.querySelector("select");
  var isValid=false;    
  if(tipo.value != 0){
    salida_bici.innerHTML="<p style='color:green; font-size:15px;'>Bici Seleccionada ✔</p>";
    isValid=true;
  } 
  else{   
    salida_bici.innerHTML="<p style='color:red; font-size:15px;'>Selecciona una Bici</p>";
    isValid=false;
  }
   return isValid;    
}
//-------------------------------------------------------------------FIN------------------------------------------------------------------//