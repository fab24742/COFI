// Configuración de precios y costos de envío
const pricePerPack = 38; // Precio por 1 pack
const priceTwoPacks = 72; // Precio para 2 packs con envío gratis
const deliveryCosts = {
    "San Borja": 8,
    "Miraflores": 8,
    "San Isidro": 10,
    "Surco": 12
};

// Botón de compra
document.querySelectorAll('.primary-button').forEach(button => {
    button.addEventListener('click', () => {
        const pack = button.getAttribute('data-pack');
        const precio = button.getAttribute('data-precio');
        const distrito = "Sin distrito seleccionado";

        let total = parseInt(precio);
        if (pack === "1" && distrito in deliveryCosts) {
            total += deliveryCosts[distrito];
        }

        const mensaje = `Hola! Quiero comprar ${pack} COFI Pack(s). Total: S/${total}.`;
        window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});

// Botón de información
document.getElementById('informacion').addEventListener('click', () => {
    const mensaje = "Hola! Me gustaría recibir más información sobre COFI.";
    window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
});
