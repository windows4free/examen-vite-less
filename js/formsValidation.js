document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donacionForm");
    const mensajeDiv = document.getElementById("form-mensaje");

    if (form) {
        form.addEventListener("submit", function (e) {
            mensajeDiv.innerHTML = "";
            let errores = [];
            const nombre = form.nombre.value.trim();
            const correo = form.correo.value.trim();
            const tipo = form.tipo.value;

            if (nombre === "") {
                errores.push("El nombre es obligatorio.");
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
                errores.push("El correo electrónico no es válido.");
            }
            if (tipo === "") {
                errores.push("Debes seleccionar qué deseas donar.");
            }

            if (errores.length > 0) {
                e.preventDefault();
                mensajeDiv.innerHTML = "<ul style='color:darkred;'>" +
                    errores.map(err => <li>${err}</li>).join("") +
                    "</ul>";
            } else {
                mensajeDiv.innerHTML = "<p style='color:green;'>¡Gracias por tu donación! Nos pondremos en contacto contigo pronto.</p>";
            }
        });
    }
});