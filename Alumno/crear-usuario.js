// // para implementar con el BACKEND

// let btnRegistrarse = document.querySelector("#registrarse");
//   btnRegistrarse.addEventListener("click", registrarUsuario);
//   async function registrarUsuario() {
//       console.log("funcion registrar usuario");
//       let nombre = document.getElementById("nombre").value;
//       let dni = document.getElementById("dni").value;
//       let fechaNacimiento = document.getElementById("fecha").value;
//       let direccion = document.getElementById("direccion").value;
//       let telefono = document.getElementById("telefono").value;
//       let email = document.getElementById("email").value;
//       let contrasena = document.getElementById("password").value;
//       let tipoUsuario = document.getElementById("inputState").value;

//       // Crear un objeto con los valores de entrada del usuario
//       let usuario = {
//         "nombre": nombre,
//         "dni": dni,
//         "fechaNacimiento": fechaNacimiento,
//         "direccion": direccion,
//         "telefono": telefono,
//         "email": email,
//         "contrasena": contrasena,
//         "tipoUsuario": tipoUsuario
//       };
//           }
//           let response = await fetch("http://localhost:3000/",{
//                   method: 'POST',
//                   headers: {
//                   'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify(usuario)
//               })
//           if (response.ok){
//               const contenido = await response.json();
//               console.log("los datos de ", contenido.email," fueron cargados correctamente");
//               window.location ="http://localhost:3000/";
//           }
//           else{
//               alert("Error en el registro");
//           }

// Obtener el botón "Registrarse"
let btnRegistrarse = document.getElementById("registrarse");
// Agregar un evento click al botón "Registrarse"
btnRegistrarse.addEventListener("click", function (event) {
  event.preventDefault();
  // Obtener los datos ingresados por el usuario
  const username = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;
  const dni = document.getElementById("dni").value;
  const fechaNacimiento = document.getElementById("fecha").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const tipoUsuario = document.getElementById("inputState").value;
  // Crear un objeto JSON con los datos ingresados por el usuario
  const userData = {
    username: username,
    dni: dni,
    fechaNacimiento: fechaNacimiento,
    direccion: direccion,
    telefono: telefono,
    email: email,
    password: password,
    tipoUsuario: tipoUsuario
  };
  // Convertir el objeto JSON a una cadena de texto
  const jsonString = JSON.stringify(userData);
  // Escribir la cadena de texto en un archivo JSON
  const fileName = 'usuarios.json';
  const fileContent = jsonString;
  const file = new File([fileContent], fileName, { type: 'text/json' });
  // Descargar el archivo JSON
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  console.log('User data saved:', userData);
});


//-------------------------------

