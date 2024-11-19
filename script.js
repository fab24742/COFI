// Precios y costos de envío
const pricePerPack = 38;
const priceTwoPacks = 72; // Envío gratis
const deliveryCosts = {
    "San Borja": 8,
    "Miraflores": 8,
    "San Isidro": 10,
    "Surco": 12
};

// Función de cálculo y redirección a WhatsApp
document.querySelectorAll('.primary-button').forEach(button => {
    button.addEventListener('click', () => {
        const pack = button.getAttribute('data-pack');
        const precio = button.getAttribute('data-precio');
        const distritoSelect = button.previousElementSibling.value;
        const distrito = button.previousElementSibling.options[button.previousElementSibling.selectedIndex].text;

        let total = parseInt(precio);
        if (pack === "1") {
            total += deliveryCosts[distrito];
        }

        const mensaje = `Hola! Quiero comprar ${pack} COFI Pack(s). Distrito: ${distrito}. Total: S/${total}.`;
        window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});
