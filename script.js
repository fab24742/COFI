const deliveryCosts = {
    "San Borja": 8,
    "Miraflores": 8,
    "San Isidro": 10,
    "Surco": 12,
    "La Molina": 15
};

// Evento para producto 1
document.querySelectorAll('.primary-button').forEach(button => {
    button.addEventListener('click', () => {
        const pack = button.getAttribute('data-pack');
        const precio = parseFloat(button.getAttribute('data-precio'));
        let distrito = "N/A";

        if (pack === "1") {
            distrito = document.getElementById("distrito1").value;
            const deliveryCost = deliveryCosts[distrito];
            const total = precio + deliveryCost;

            const mensaje = `Hola! Quiero comprar 1 COFI Pack por S/${precio}. Costo de envío: S/${deliveryCost}. Total: S/${total}. Envío a ${distrito}.`;
            window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
        } else {
            const mensaje = `Hola! Quiero comprar 2 COFI Packs por S/${precio} (Envío gratis).`;
            window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
        }
    });
});

// Botón de más información
document.getElementById('informacion').addEventListener('click', () => {
    const mensaje = "Hola, me interesa saber más sobre COFI.";
    window.open(`https://wa.me/51951182402?text=${encodeURIComponent(mensaje)}`, '_blank');
});
