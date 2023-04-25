
// Obtener referencias a los botones y elementos para cada tarjeta
const buttons = document.querySelectorAll("#myButton");
const elapsedTimes = document.querySelectorAll("#elapsedTime");

// Función para actualizar el tiempo transcurrido para una tarjeta
function updateElapsedTime(elapsedTime, startTime) {
  // Obtener el tiempo actual
  const now = new Date().getTime();

  // Calcular los minutos transcurridos desde que se presionó el botón
  const elapsedMinutes = Math.floor((now - startTime) / (1000 * 60));

    // Calcular las horas y minutos transcurridos
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const remainderMinutes = elapsedMinutes % 60;
  
    // Crear una cadena con el tiempo transcurrido en formato de horas y minutos
    let elapsedString = `${elapsedHours} hora${elapsedHours !== 1 ? 's' : ''}`;
    if (remainderMinutes > 0) {
      elapsedString += ` ${remainderMinutes} minuto${remainderMinutes !== 1 ? 's' : ''}`;
    }

  // Actualizar el elemento de la página con los minutos transcurridos
  elapsedTime.textContent = elapsedMinutes;
}

// Recorrer cada botón y agregar un listener para detectar cuándo se presiona
buttons.forEach((button, index) => {
  // Obtener el tiempo en que se presionó el botón para esta tarjeta, si existe
  const startTime = localStorage.getItem(`startTime${index}`);

  // Si hay un tiempo guardado, actualizar el tiempo transcurrido
  if (startTime) {
    updateElapsedTime(elapsedTimes[index], startTime);
    setInterval(() => {
      updateElapsedTime(elapsedTimes[index], startTime);
    }, 60 * 1000);
  }

  // Agregar listener al botón para detectar cuándo se presiona
  button.addEventListener("click", () => {
    // Guardar el tiempo en que se presionó el botón para esta tarjeta en localStorage
    localStorage.setItem(`startTime${index}`, new Date().getTime());

    // Llamar a la función para actualizar el tiempo transcurrido
    updateElapsedTime(elapsedTimes[index], localStorage.getItem(`startTime${index}`));

    // Llamar a la función updateElapsedTime cada minuto para actualizar el tiempo transcurrido
    setInterval(() => {
      updateElapsedTime(elapsedTimes[index], localStorage.getItem(`startTime${index}`));
    }, 60 * 1000);
  });
});

