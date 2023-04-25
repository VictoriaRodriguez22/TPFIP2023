document.getElementById("btn-iniciar").addEventListener("click", function(event) {
    event.preventDefault(); 
  

    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    // Leer el archivo JSON con los usuarios y contraseñas
    fetch("usuarios.json")
      .then(response => response.json())
      .then(data => {
        // Verificar si el usuario y la contraseña son correctos
        let found = false;
        data.forEach(user => {
          if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
            found = true;
            return;
          }
        });
  
        // Mostrar un mensaje de error si el usuario y la contraseña no son correctos
        if (found) {
            window.location.href = "Alumno/usuario-alumno.html";
        }
        else{
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch(error => {
        console.error("Error al leer el archivo JSON:", error);
      });
  });
  