let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Función para detectar cuando se hace scroll
function scrollReveal() {
  const elementos = document.querySelectorAll(".oculto");

  elementos.forEach((elemento) => {
    const posicionElemento = elemento.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;

    if (posicionElemento < alturaVentana) {
      elemento.classList.add("mostrar");
    }
  });
}

// Evento que se dispara cuando se hace scroll
window.addEventListener("scroll", scrollReveal);

// Ejecutar scrollReveal al cargar la página para mostrar los elementos visibles inicialmente
scrollReveal();

function enviarMensaje() {
  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  // Verificar si los campos obligatorios están vacíos
  if (email === "" || nombre === "" || mensaje === "") {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  // Aquí podrías agregar más validaciones si lo deseas, como verificar el formato del email

  // Si todo está bien, mostrar la alerta de agradecimiento
  alert(`Gracias, ${nombre}! Tu mensaje ha sido enviado con éxito.`);
}

function mostrarAlerta() {
  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  // Aquí podrías agregar validaciones si lo deseas
  // Por ejemplo, verificar si los campos están vacíos antes de mostrar la alerta

  alert(`Gracias!, Tu mensaje ha sido enviado con éxito.`);
}
