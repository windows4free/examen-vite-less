export const getData = (page) => {
    console.log("Getting Context Data for page", page);
    let contextData = {};
    switch (page) {
        case "/index.html":
            contextData = {
                indexActivePage: true,
                heroContent: `<p>Bienvenido a <strong>By Mei</strong>, donde los arreglos unen corazones y crean sonrisas.</p>
                <p>Creamos arreglos personalizados para unir personas, fomentar la amistad y el amor, y ayudar a que todos tengan un ambiente más social y amoroso.</p>`
            };
            break;
        case "/acercade.html":
            contextData = {
                acercadeActivePage: true
            };
            break;
        case "/programas.html":
            contextData = {
                programasActivePage: true
            };
            break;
        case "/como-ayudar.html":
            contextData = {
                comoAyudarActivePage: true
            };
            break;
        case "/galeria.html":
            contextData = {
                galeriaActivePage: true,
                galeriaItems: [
                    { img: "imgs/arreglo1.jpg", alt: "Arreglo 1 By Mei", descripcion: "Arreglo 1: Detalle para amistad" },
                    { img: "imgs/arreglo2.jpg", alt: "Arreglo 2 By Mei", descripcion: "Arreglo 2: Para ocasiones especiales" },
                    { img: "imgs/arreglo3.jpg", alt: "Arreglo 3 By Mei", descripcion: "Arreglo 3: Un regalo para enamorados" },
                    { img: "imgs/arreglo4.jpg", alt: "Arreglo 4 By Mei", descripcion: "Arreglo 4: Sorpresa de colores" },
                    { img: "imgs/arreglo5.jpg", alt: "Arreglo 5 By Mei", descripcion: "Arreglo 5: Para celebrar logros" },
                    { img: "imgs/arreglo6.jpg", alt: "Arreglo 6 By Mei", descripcion: "Arreglo 6: Un detalle para mamá" }
                ]
            };
            break;
        case "/blog.html":
            contextData = {
                blogActivePage: true
            };
            break;
        case "/entregas.html":
            contextData = {
                entregasActivePage: true
            };
            break;
        case "/contacto.html":
            contextData = {
                contactoActivePage: true
            };
            break;
        case "/donaciones.html":
            contextData = {
                donacionesActivePage: true
            };
            break;
        case "/faq.html":
            contextData = {
                faqActivePage: true
            };
            break;
        default:
            contextData = { ...contextData };
    }
    return { ...contextData, ...getAllPageContext() };
};

function getAllPageContext() {
    return {
        currentYear: new Date().getFullYear().toString(),
        lastBuild: new Date().toLocaleString()
    };
}