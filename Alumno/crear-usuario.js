// Obtener el botón "Registrarse"
let btnRegistrarse = document.getElementById("registrarse");

// Agregar un evento click al botón "Registrarse"
btnRegistrarse.addEventListener("click", function(event) {
  event.preventDefault();

  // Obtener los valores de entrada del usuario
  // let nombre = document.getElementById("nombre").value;
  // let dni = document.getElementById("dni").value;
  // let fechaNacimiento = document.getElementById("fecha").value;
  // let direccion = document.getElementById("direccion").value;
  // let telefono = document.getElementById("telefono").value;
  // let email = document.getElementById("email").value;
  // let contrasena = document.getElementById("password").value;
  // let tipoUsuario = document.getElementById("inputState").value;

  // // Crear un objeto con los valores de entrada del usuario
  // let usuario = {
  //   nombre: nombre,
  //   dni: dni,
  //   fechaNacimiento: fechaNacimiento,
  //   direccion: direccion,
  //   telefono: telefono,
  //   email: email,
  //   contrasena: contrasena,
  //   tipoUsuario: tipoUsuario
  // };

  const username = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;

  const userAccount = {
    username: username,
    password: password
  };

  // Guardar la cuenta de usuario en el almacenamiento local
  localStorage.setItem('userAccount', JSON.stringify(userAccount));
  
  // Crear un archivo JSON en el sistema de archivos
  window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
  window.requestFileSystem(window.TEMPORARY, 1024 * 1024, function(fs) {
    fs.root.getFile('usuarios.json', { create: true }, function(fileEntry) {
      fileEntry.createWriter(function(fileWriter) {
        const blob = new Blob([JSON.stringify(userAccount, null, 2)], { type: 'text/json' });

        fileWriter.addEventListener('writeend', function() {
          console.log('User account and JSON file created:', userAccount);
        });

        fileWriter.write(blob);
      });
    });
  }, function(error) {
    console.error('FileSystem API error:', error);
  });
});
