document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactoForm");
    const mensajeDiv = document.getElementById("contacto-mensaje");
    if (form) {
        form.addEventListener("submit", function (e) {
            mensajeDiv.innerHTML = "";
            let errores = [];
            const nombre = form.nombre.value.trim();
            const email = form.email.value.trim();
            const mensaje = form.mensaje.value.trim();
            if (nombre === "") errores.push("El nombre es obligatorio.");
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push("El correo electrónico no es válido.");
            if (mensaje === "") errores.push("El mensaje es obligatorio.");
            if (errores.length > 0) {
                e.preventDefault();
                mensajeDiv.innerHTML = "<ul style='color:darkred;'>" +
                    errores.map(err => `<li>${err}</li>`).join("") +
                    "</ul>";
            } else {
                mensajeDiv.innerHTML = "<p style='color:green;'>¡Gracias por contactarnos! Te responderemos pronto.</p>";
            }
        });
    }
});