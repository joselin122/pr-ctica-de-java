function mostrarSeccion(id) {
    ocultarTodasLasSecciones();
    document.getElementById(id).style.display = 'block';
}

function ocultarSeccion(id) {
    document.getElementById(id).style.display = 'none';
}

function ocultarTodasLasSecciones() {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.style.display = 'none';
    });
}

function mostrarVentana(id) {
    document.getElementById(id).style.display = 'block';
}

function ocultarVentana(id) {
    document.getElementById(id).style.display = 'none';
}

function seleccionarProducto(producto) {
    mostrarVentana('formulario-pedido');
    document.getElementById('producto-pedido').value = producto;
}