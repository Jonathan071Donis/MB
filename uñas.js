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
