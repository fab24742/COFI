// Configuración de precios y descuentos
const precioPack = 35;
const descuentoDosPacks = 0.10; // 10% descuento para 2 packs
const descuentoTresPacks = 0.15; // 15% descuento para 3 packs + envío gratis

// Mostrar formulario al hacer clic en "Comprar"
document.getElementById('comprar').addEventListener('click', () => {
    document.getElementById('formulario').style.display = 'block';
});

// Ocultar formulario al hacer clic en "Cancelar"
document.getElementById('cerrar').addEventListener('click', () => {
    document.getElementById('formulario').style.display = 'none';
});

document.getElementById('confirmar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = parseInt(document.getElementById('distrito').value);
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const contacto = document.getElementById('contacto').value;
    
    let total = calcularTotal(cantidad, distrito);
    let ahorro = calcularAhorro(cantidad);

    // Mensaje de WhatsApp
    const mensaje = `Hola, soy ${nombre}! Quisiera comprar ${cantidad} pack(s) de COFI para el distrito seleccionado. Mi dirección exacta es: ${direccion}, y mi contacto es: ${contacto}. Total a pagar: S/${total}. Ahorro total: S/${ahorro}. ¡Gracias por su apoyo!`;
    
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});

document.getElementById('cantidad').addEventListener('change', actualizarTotal);
document.getElementById('distrito').addEventListener('change', actualizarTotal);

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

function calcularAhorro(cantidad) {
    let descuento = 0;

    if (cantidad === 2) {
        descuento = descuentoDosPacks;
    } else if (cantidad >= 3) {
        descuento = descuentoTresPacks;
    }

    const ahorro = cantidad * precioPack * descuento;
    return ahorro.toFixed(2);
}

function actualizarTotal() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = parseInt(document.getElementById('distrito').value);
    const total = calcularTotal(cantidad, distrito);
    const ahorro = calcularAhorro(cantidad);

    document.getElementById('total').textContent = total;
    document.getElementById('discount-info').textContent = `Ahorro: S/${ahorro}`;
}

// Botón de "Chatea para más información"
document.getElementById('informacion').addEventListener('click', () => {
    const mensaje = "Hola! Me gustaría recibir más información sobre COFI y sus opciones de compra.";
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});
