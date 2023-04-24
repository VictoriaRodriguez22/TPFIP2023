document.getElementById("btn-iniciar").addEventListener("click", function(event) {
    event.preventDefault(); 
  

    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Leer el archivo JSON con los usuarios y contraseñas
    fetch("usuarios.json")
      .then(response => response.json())
      .then(data => {
        // Verificar si el usuario y la contraseña son correctos
        var found = false;
        data.forEach(user => {
          if (user.username === username && user.password === password) {
            found = true;
            return;
          }
        });
  
        // Mostrar un mensaje de error si el usuario y la contraseña no son correctos
        if (found) {
            window.location.href = "usuario-alumno.html";
        }
        else{
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch(error => {
        console.error("Error al leer el archivo JSON:", error);
      });
  });
  