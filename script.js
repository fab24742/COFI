// Pricing and Delivery Logic
const pricePerPack = 38; // Price for 1 pack
const priceTwoPacks = 72; // Price for 2 packs (with free delivery)
const deliveryCosts = {
    "San Borja": 8,
    "Miraflores": 8,
    "San Isidro": 10,
    "Surco": 12
};

// Button event listener
document.querySelectorAll('.primary-button').forEach(button => {
    button.addEventListener('click', () => {
        const pack = button.getAttribute('data-pack');
        const precio = button.getAttribute('data-precio');
        const distritoSelect = document.getElementById('distrito');
        const distrito = distritoSelect ? distritoSelect.value : "Sin distrito seleccionado";

        let total = parseInt(precio);
        if (pack === "1" && distrito in deliveryCosts) {
            total += deliveryCosts[distrito];
        }

        const mensaje = `Hola! Quiero comprar ${pack} COFI Pack(s). Distrito: ${distrito}. Total: S/${total}.`;
        window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});

// Contact Information Listener
document.getElementById('informacion').addEventListener('click', () => {
    const mensaje = "Hola! Me gustaría recibir más información sobre COFI.";
    window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
});
