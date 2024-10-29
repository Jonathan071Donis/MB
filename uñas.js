function showModal(imageSrc, description) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalDescription = document.getElementById("modalDescription");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalDescription.innerText = description;

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
