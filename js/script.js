// Este es el archivo de JavaScript, el código que corre en el navegador.
// Por ahora hace solo una cosa: poner el año actual en el pie de página,
// para que no tengas que cambiarlo a mano cada enero.
//
// Es también el ejemplo más pequeño de para qué sirve la carpeta js/ y de
// cómo el HTML "llama" a este archivo (mira la última línea del index.html).

document.getElementById("anio").textContent = new Date().getFullYear();

// Garantizar que el video de fondo permanezca estrictamente sin sonido
const videoFondo = document.getElementById("video-estadero-bg");
if (videoFondo) {
    videoFondo.muted = true;
}

