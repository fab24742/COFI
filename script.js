// Precios y costos de envío
const pricePerPack = 38; // Precio para 1 pack
const priceTwoPacks = 72; // Envío gratis
const deliveryCosts = {
    "San Borja": 8,
    "Miraflores": 8,
    "San Isidro": 10,
    "Surco": 12,
};

document.querySelectorAll('.primary-button').forEach(button => {
    button.addEventListener('click', () => {
        const pack = button.getAttribute('data-pack');
        const precio = button.getAttribute('data-precio');
        const distritoSelect = pack === "1" ? document.getElementById('distrito1') : document.getElementById('distrito2');
        const distrito = distritoSelect.value;
        const deliveryCost = pack === "1" ? deliveryCosts[distrito] : 0;

        const total = parseInt(precio) + deliveryCost;
        const mensaje = `Hola! Quiero comprar ${pack} COFI Pack(s). Distrito: ${distrito}. Total: S/${total}.`;
        window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});
