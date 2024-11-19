// Pricing and Delivery Logic
const pricePerPack = 38; // Price for 1 pack
const priceTwoPacks = 72; // Price for 2 packs (with free delivery)
const deliveryCosts = {
    "San Borja": 8,
    "Miraflores": 8,
    "San Isidro": 10,
    "Surco": 12,
    "La Molina": 15,
    "Villa El Salvador": 15,
    "Chorrillos": 15,
};

// Update Total Price and Delivery Cost
document.getElementById('cantidad').addEventListener('change', updateTotal);
document.getElementById('distrito').addEventListener('change', updateTotal);

function updateTotal() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = document.getElementById('distrito').options[document.getElementById('distrito').selectedIndex].text;
    const deliveryCost = deliveryCosts[distrito];

    let total = pricePerPack * cantidad;
    let deliveryNote = "";

    if (cantidad === 1) {
        total += deliveryCost;
        deliveryNote = `Costo de envío: S/${deliveryCost}`;
    } else {
        deliveryNote = "Delivery Gratis";
    }

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('delivery-note').textContent = deliveryNote;
}

// WhatsApp Purchase Button
document.getElementById('comprar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = document.getElementById('distrito').options[document.getElementById('distrito').selectedIndex].text;
    const total = parseFloat(document.getElementById('total').textContent);

    const message = `Hola! Quiero comprar ${cantidad === 1 ? "1 Pack (12 Unidades)" : "2 Packs (24 Unidades - Delivery Gratis)"} por S/${total}. Distrito: ${distrito}.`;
    window.open(`https://wa.me/51951182402?text=${encodeURIComponent(message)}`, '_blank');
});
