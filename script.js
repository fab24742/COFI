// Configuración de compra
document.querySelectorAll('.primary-button').forEach(button => {
    button.addEventListener('click', () => {
        const pack = button.getAttribute('data-pack');
        const precio = button.getAttribute('data-precio');
        const mensaje = `Hola! Quiero comprar ${pack} COFI Pack(s) por S/${precio}.`; // Comillas inversas para la plantilla literal
        window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank'); // Comillas en la URL
    });
});

// Información adicional
document.getElementById('informacion').addEventListener('click', () => {
    const mensaje = "Hola! Me gustaría recibir más información sobre COFI.";
    window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank'); // Comillas en la URL
});
