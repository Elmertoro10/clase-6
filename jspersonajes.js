document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones "Ver más"
    const botones = document.querySelectorAll(".ver-mas");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Encuentra la tarjeta padre y extrae los datos
            const tarjeta = boton.closest(".character-card");
            const nombre = tarjeta.getAttribute("data-nombre");
            const descripcion = tarjeta.getAttribute("data-descripcion");

            mostrarModal(nombre, descripcion);
        });
    });
});

// Función para mostrar un modal dinámico
function mostrarModal(nombre, descripcion) {
    // Eliminar modal previo si existe
    const modalExistente = document.getElementById("modal-personaje");
    if (modalExistente) modalExistente.remove();

    // Crear modal
    const modal = document.createElement("div");
    modal.id = "modal-personaje";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "rgba(255, 255, 255, 0.95)";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.3)";
    modal.style.textAlign = "center";
    modal.style.zIndex = "1000";
    modal.style.maxWidth = "400px";
    modal.style.animation = "fadeIn 0.3s ease";

    modal.innerHTML = `
        <h2 style="color: #d9534f; font-weight: bold;">${nombre}</h2>
        <p style="color: #333; font-size: 16px;">${descripcion}</p>
        <button id="cerrar-modal" style="background: #d9534f; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Cerrar</button>
    `;

    document.body.appendChild(modal);

    document.getElementById("cerrar-modal").addEventListener("click", () => {
        modal.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => modal.remove(), 300);
    });
}
