// Función para redirigir a la página de personajes con efecto de rebote
function verPersonajes() {
    let btn = document.querySelector('.btn');
    btn.style.animation = "bounce 0.3s ease-in-out"; // Agrega la animación

    setTimeout(() => {
        window.location.href = "personajes.html"; // Redirige a la página de personajes
    }, 300);
}

// Efecto de rebote en el botón
const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('animationend', () => {
        btn.style.animation = ""; // Elimina la animación después de ejecutarse
    });
}

// Función para expandir imágenes con animación
function expandirImagen(img) {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    modal.style.animation = "fadeIn 0.3s ease-in-out";

    // Evento para cerrar el modal al hacer clic fuera de la imagen
    modal.onclick = function() {
        modal.style.animation = "fadeOut 0.3s ease-in-out";
        setTimeout(() => document.body.removeChild(modal), 300);
    };

    // Clonar la imagen y darle animación
    let imgClone = img.cloneNode();
    imgClone.style.width = '60%';
    imgClone.style.height = 'auto';
    imgClone.style.borderRadius = '10px';
    imgClone.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    imgClone.style.animation = "zoomIn 0.3s ease-in-out";

    modal.appendChild(imgClone);
    document.body.appendChild(modal);
}

// Función para mostrar detalles con modal animado
function mostrarDetalle(titulo, descripcion) {
    // Verificar si ya hay un modal y eliminarlo
    const modalExistente = document.getElementById("modal-detalle");
    if (modalExistente) modalExistente.remove();

    // Crear modal con animaciones
    let modal = document.createElement('div');
    modal.id = "modal-detalle";
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
    modal.style.animation = "fadeIn 0.3s ease-in-out";

    // Contenido del modal
    modal.innerHTML = `
        <h2 style="color: #d9534f; font-weight: bold;">${titulo}</h2>
        <p style="color: #333; font-size: 16px;">${descripcion}</p>
        <button id="cerrar-modal" style="background: #d9534f; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Cerrar</button>
    `;

    document.body.appendChild(modal);

    // Evento para cerrar el modal con animación
    document.getElementById("cerrar-modal").addEventListener("click", () => {
        modal.style.animation = "fadeOut 0.3s ease-in-out";
        setTimeout(() => modal.remove(), 300);
    });
}

// Detectar elementos con la clase fade-in y hacerlos aparecer al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const elementosAnimados = document.querySelectorAll('.fade-in');

    function mostrarElementosEnScroll() {
        elementosAnimados.forEach(elemento => {
            const posicion = elemento.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight / 1.3;

            if (posicion < alturaPantalla) {
                elemento.classList.add("visible");
            }
        });
    }

    // Detecta el scroll y activa la animación
    window.addEventListener("scroll", mostrarElementosEnScroll);
    mostrarElementosEnScroll(); // Para elementos visibles al inicio
});

// Reproducir un sonido al hacer clic en cualquier botón
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll("button");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            let sonido = new Audio("click.mp3"); // Ruta del sonido
            sonido.volume = 0.3; // Ajusta el volumen
            sonido.play();
        });
    });
});

// Agregar animaciones CSS en tiempo real
const estilos = document.createElement("style");
estilos.innerHTML = `
    /* Efecto de fade-in */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Efecto de fade-out */
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }

    /* Efecto de zoom-in */
    @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

    /* Efecto de rebote */
    @keyframes bounce {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(estilos);
