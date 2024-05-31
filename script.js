document.addEventListener('DOMContentLoaded', function() {
  // Función para manejar el clic en el botón "SI"
  document.getElementById('yesBtn').addEventListener('click', function() {
    // Cambiar el texto del subtítulo a "Yo también te amo"
    document.getElementById('subtitle').textContent = "Yo también te amo";
    // Cambiar el color del subtítulo a rosado
    document.getElementById('subtitle').style.color = "pink";
    // Desaparecer el botón "SI"
    document.getElementById('yesBtn').style.display = "none";
  });

  // Array con las posiciones predefinidas
  var positions = [
    { top: '50px', left: '50px' },
    { top: '100px', left: '100px' },
    { top: '150px', left: '150px' },
    { top: '200px', left: '200px' }
  ];
  
  var currentPositionIndex = 0; // Índice de la posición actual
  
  // Función para manejar el clic en el botón "NO"
  document.getElementById('noBtn').addEventListener('click', function() {
    // Obtener la posición actual del array
    var currentPosition = positions[currentPositionIndex];
    
    // Mover el botón "NO" a la posición actual
    Object.assign(document.getElementById('noBtn').style, {
      position: 'fixed',
      ...currentPosition
    });

    // Incrementar el índice de la posición actual (ciclo circular)
    currentPositionIndex = (currentPositionIndex + 1) % positions.length;
  });
  
  // Función para manejar el clic en el botón "SI"
  document.getElementById('yesBtn').addEventListener('click', function() {
    // Desaparecer el botón "NO"
    document.getElementById('noBtn').style.display = "none";
  });

});

document.addEventListener('DOMContentLoaded', function() {
    const h1Element = document.querySelector('.color-change');
    const colors = ['#FF0000', '#FF4500', '#FF6347', '#FF7F50', '#FF69B4', '#FFB6C1', '#FFC0CB'];
    let colorIndex = 0;

    function changeColor() {
        h1Element.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeColor, 1000); // Cambia 1000 por el intervalo deseado en milisegundos
});document.addEventListener('DOMContentLoaded', function() {
    const h1Element = document.querySelector('.color-change');
    const colors = ['#FF0000', '#FF4500', '#FF6347', '#FF7F50', '#FF69B4', '#FFB6C1', '#FFC0CB'];
    let colorIndex = 0;

    function changeColor() {
        h1Element.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeColor, 1000); // Cambia 1000 por el intervalo deseado en milisegundos
});
setInterval(changeColor, 1000);