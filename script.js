// Configuración de precios y descuentos
const precioPack = 35;
const descuentoDosPacks = 0.10; // 10% descuento para 2 packs
const descuentoTresPacks = 0.15; // 15% descuento para 3 packs + envío gratis

document.getElementById('comprar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = parseInt(document.getElementById('distrito').value);

    // Calcular el precio con descuento y condiciones de envío gratis
    let precioTotal = calcularTotal(cantidad, distrito);
    const mensaje = `Hola! Estoy interesado en comprar ${cantidad} pack(s) de COFI para el distrito seleccionado. Total a pagar: S/${precioTotal}. ¿Podrías ayudarme con los detalles de entrega?`;
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});

document.getElementById('cantidad').addEventListener('change', calcularTotalUI);
document.getElementById('distrito').addEventListener('change', calcularTotalUI);

function calcularTotal(cantidad, distrito) {
    let descuento = 0;
    let totalEnvio = distrito;
    
    if (cantidad === 2) {
        descuento = descuentoDosPacks;
    } else if (cantidad >= 3) {
        descuento = descuentoTresPacks;
        totalEnvio = 0; // Envío gratis para 3 o más packs
    }

    const subtotal = cantidad * precioPack * (1 - descuento);
    const total = subtotal + totalEnvio;
    return total.toFixed(2);
}

function calcularTotalUI() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = parseInt(document.getElementById('distrito').value);
    const total = calcularTotal(cantidad, distrito);
    document.getElementById('total').textContent = total;
}

// Botón de "Chatea para más información"
document.getElementById('informacion').addEventListener('click', () => {
    const mensaje = "Hola! Me gustaría recibir más información sobre COFI y sus opciones de compra.";
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});
