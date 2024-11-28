function showModal(imageSrc, description) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalDescription = document.getElementById("modalDescription");
  const whatsappLink = document.getElementById("whatsappLink");

  // Mostrar la modal y resetear estilos
  modal.style.display = "flex";

  // Ocultar contenido real de la modal temporalmente
  modalImg.style.display = "none";
  modalDescription.style.display = "none";
  whatsappLink.style.display = "none";

  // Mostrar el texto inicial "ESTUDIO MB" en estilo de carta
  modal.innerHTML = `
      <div class="modal-inner">
          <div class="modal-message">ESTUDIO MB</div>
      </div>
  `;

  // Listener para cerrar la modal al hacer clic fuera
  setTimeout(() => {
      document.addEventListener("click", closeModalOnOutsideClick);

      // Mostrar el contenido real después de 2 segundos
      setTimeout(() => {
          modal.innerHTML = `
              <div class="modal-inner">
                  <img class="modal-content" id="modalImg" alt="Imagen ampliada">
                  <p id="modalDescription" class="modal-description"></p>
                  <a id="whatsappLink" href="#" target="_blank" class="whatsapp-link">
                      <img src="https://e7.pngegg.com/pngimages/829/586/png-clipart-whatsapp-logo-whatsapp-logo-desktop-computer-icons-viber-grass-viber-thumbnail.png" alt="WhatsApp"> Contáctanos en WhatsApp
                  </a>
              </div>
          `;

          // Referenciar de nuevo los elementos (ya que el contenido se reemplazó)
          const modalImg = document.getElementById("modalImg");
          const modalDescription = document.getElementById("modalDescription");
          const whatsappLink = document.getElementById("whatsappLink");

          // Asignar contenido real
          modalImg.src = imageSrc;
          modalImg.style.display = "block"; // Mostrar la imagen
          modalDescription.innerText = description;
          modalDescription.style.display = "block"; // Mostrar la descripción
          whatsappLink.style.display = "flex"; // Mostrar el botón de WhatsApp

          // Construir el enlace de WhatsApp
          const phoneNumber = "50246058198"; // Reemplaza con el número de WhatsApp
          const message = `Hola, quiero consultar sobre: ${description}`;
          whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      }, 2000); // Tiempo de retraso en milisegundos (2 segundos)
  }, 0);
}

// Función para cerrar la modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  // Remover el listener de clics fuera de la modal
  document.removeEventListener("click", closeModalOnOutsideClick);
}

// Función para cerrar la modal si se hace clic fuera del contenido
function closeModalOnOutsideClick(event) {
  const modal = document.getElementById("modal");
  const modalInner = modal.querySelector(".modal-inner");

  // Si se hace clic fuera de modal-inner, cerrar la modal
  if (modal.style.display === "flex" && !modalInner.contains(event.target)) {
      closeModal();
  }
}


  document.getElementById("agendaCitaBtn").addEventListener("click", function() {
    document.getElementById("citaModal").style.display = "flex";
});

document.getElementById("cerrarModal").addEventListener("click", function() {
    document.getElementById("citaModal").style.display = "none";
});

// Almacenar citas en un arreglo
const citas = [];

document.getElementById("agendaCitaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente
    
    // Obtener los valores de los campos de la modal
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const servicio = document.getElementById("servicio").value;
    
    // Guardar la cita en el arreglo
    const cita = { nombre, telefono, servicio };
    citas.push(cita);

    // Construir el mensaje de WhatsApp
    const phoneNumber = "50246058198"; // Reemplaza con el número de WhatsApp del administrador
    const message = `Hola, necesito agendar una cita para el servicio de ${servicio}. Nombre: ${nombre}, Teléfono: ${telefono}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre WhatsApp en una nueva pestaña sin redirigir la página actual
    window.open(whatsappLink, '_blank');

    // Limpiar y cerrar la modal de citas
    document.getElementById("agendaCitaForm").reset();
    document.getElementById("citaModal").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("infoModal");
  const btn = document.getElementById("infoButton"); // Este botón debe existir en tu HTML
  const closeBtn = document.getElementById("cerrar"); // Usamos el id 'cerrarModal' ahora

  // Mostrar la modal cuando se hace clic en el botón
  btn.addEventListener("click", function() {
      modal.style.display = "block";  // Muestra la modal
  });

  // Cerrar la modal cuando se hace clic en el botón de cerrar
  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";  // Oculta la modal
  });

  // Cerrar la modal si se hace clic fuera de la modal
  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";  // Cierra la modal si se hace clic fuera de ella
      }
  });
});

Swal.fire({
  title: '<b>Bienvenido al Estudio MB</b>', // Título en negrita
  text: '¡Gracias por elegirnos, tu satisfacción es nuestra prioridad!',
  imageUrl: 'https://media.gettyimages.com/id/1169780650/es/vector/manicura.jpg?s=612x612&w=gi&k=20&c=P8okl3YtsYAebkmf8E_hSHpw9C4PutBRIBIXCvQfypc=', // URL de la imagen
  imageWidth: 200,  // Ajusta el tamaño de la imagen (más grande)
  imageHeight: 200, // Ajusta el tamaño de la imagen (más grande)
  imageAlt: 'Imagen personalizada',
  showConfirmButton: false,
  timer: 5000,
  customClass: {
    popup: 'swal-popup-custom' // Aplicamos una clase CSS personalizada
  }
});

// Agregar estilo personalizado
const style = document.createElement('style');
style.innerHTML = `
  .swal-popup-custom {
    background-color: #7fffd4; /* Color verde menta */
    border-radius: 15px; /* Bordes redondeados */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Efecto de sombra 3D */
  }
  .swal-popup-custom .swal-title {
    font-size: 24px; /* Tamaño del título */
    font-weight: bold; /* Negrita */
  }
  .swal-popup-custom .swal-text {
    font-size: 16px; /* Tamaño del texto */
  }
  .swal-popup-custom .swal-image {
    border-radius: 50%; /* Hacer la imagen redonda */
    border: 5px solid #fff; /* Borde blanco alrededor de la imagen */
  }
`;
document.head.appendChild(style);

