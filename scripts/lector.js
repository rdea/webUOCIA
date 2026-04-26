// lector.js

// 1. Obtener el ID de la URL (ej: ?id=0)
const urlParams = new URLSearchParams(window.location.search);
const cuentoId = parseInt(urlParams.get('id'));

// 2. Buscar el cuento en el arreglo (Usa el mismo array 'cuentos' de antes)
const cuento = cuentos.find(c => c.id === cuentoId);

if (cuento) {
    document.title = `Leyendo: ${cuento.titulo}`;
    
    // 3. Pintar Multimedia
    let media = "";
    if (cuento.video) {
        media += `<div class="video-contenedor"><video controls><source src="${cuento.video}" type="video/mp4"></video></div>`;
    }
    if (cuento.audio) {
        media += `<div class="audio-contenedor"><audio controls><source src="${cuento.audio}" type="audio/mpeg"></audio></div>`;
    }

    // 4. Inyectar en el HTML
    document.getElementById('cabecera-cuento').innerHTML = `
        <h1>${cuento.titulo}</h1>
        ${media}
    `;
    document.getElementById('texto-cuento').innerHTML = cuento.contenido;
} else {
    document.body.innerHTML = "<h1>¡Ups! Cuento no encontrado.</h1><a href='index.html'>Volver</a>";
}