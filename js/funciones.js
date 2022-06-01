function validarFormulario(){
    let x = document.forms["Registro"]["username"].value;
    let y = document.forms["Registro"]["eemail"].value;
    let z = document.forms["Registro"]["pwd"].value;
    let zz = document.forms["Registro"]["pwd2"].value;
    if(x == ""){
      alert("Falta el nombre de usuario");
      return false;
    }
    if(y == ""){
      alert("Introduce un correo electrónico");
      return false;
    }
    if((z == "") || (zz==""))
    {
      alert("Debe introcucir una contraseña");
      return false;
    }
    if(z != zz)
    {
      alert("La contraseña no coincide");
      return false;
    }
  
  }


  function recogerDatos(){
      
    let nombreUsuario = document.getElementById("username").value;
    let correo = document.getElementById("eemail").value;
    let contra = document.getElementById("pwd").value;
    let contra2 = document.getElementById("pwd2").value;

   
    if(nombreUsuario == "")
    {
        alert("Introduce un nombre de usuario");
        return false;
    }
    if(correo == "")
    {
        alert("Introduce un correo electrónico");
        return false;
    }
    if((contra == "") || (contra2 == ""))
    {
        alert("Introduce contraseña");
    
        return false;
    }
    if(contra != contra2)
    {
        alert("No coinciden las contraseñas");
        return false;
    }

    let datos = "Nombre de usuario: " + nombreUsuario +
                "\nCorrero Electrónico: " + correo;

    console.log(datos);
   // window.location.assign("../paginas/resultado.html");
    
}
function mostrarDatos()
{
  let nombreUsuario = document.getElementById("username").value;
  let correo = document.getElementById("eemail").value;
  let contra = document.getElementById("pwd").value;
  let contra2 = document.getElementById("pwd2").value;
  
  document.getElementById(recogerDatos).value;
}
