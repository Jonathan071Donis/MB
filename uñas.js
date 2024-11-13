// Lógica existente para mostrar y cerrar la modal de imágenes
function showModal(imageSrc, description) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalDescription = document.getElementById("modalDescription");
    const whatsappLink = document.getElementById("whatsappLink");
  
    modal.style.display = "flex";
    modalImg.src = imageSrc;
    modalDescription.innerText = description;
  
    // Construir el enlace de WhatsApp
    const phoneNumber = "50246058198"; // Reemplaza con el número de WhatsApp
    const message = `Hola, quiero consultar sobre: ${description}`;
    whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Cerrar el modal si se hace clic fuera de la imagen
    modal.addEventListener("click", function(event) {
      if (event.target == modal) {
        closeModal();
      }
    });
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
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

    // Abrir WhatsApp en una nueva ventana pero mantener al usuario en la misma página
    window.open(whatsappLink, "_blank");

    // Limpiar y cerrar la modal de citas
    document.getElementById("agendaCitaForm").reset();
    document.getElementById("citaModal").style.display = "none";
});

