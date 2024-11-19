document.getElementById('comprar').addEventListener('click', () => {
    document.getElementById('formulario').style.display = 'block';
});

document.getElementById('cerrar').addEventListener('click', () => {
    document.getElementById('formulario').style.display = 'none';
});

document.getElementById('confirmar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distritoText = document.getElementById('distrito').options[document.getElementById('distrito').selectedIndex].text;
    const distritoValue = parseInt(document.getElementById('distrito').value);
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    
    let total = calcularTotal(cantidad, distritoValue);
    let ahorro = calcularAhorro(cantidad);

    const mensaje = `Hola, soy ${nombre}. Quisiera comprar ${cantidad} pack(s) de COFI. 
    Dirección: ${direccion}, Distrito: ${distritoText}. 
    Total a pagar: S/${total}. Ahorro: S/${ahorro}. ¡Gracias!`;
    
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});

function calcularTotal(cantidad, distrito) {
    const precioPack = 35;
    const descuentoDosPacks = 0.10;
    const descuentoTresPacks = 0.15;
    let descuento = 0;
    let envio = distrito;

    if (cantidad === 2) descuento = descuentoDosPacks;
    if (cantidad >= 3) {
        descuento = descuentoTresPacks;
        envio = 0;
    }

    const subtotal = cantidad * precioPack * (1 - descuento);
    return (subtotal + envio).toFixed(2);
}

function calcularAhorro(cantidad) {
    const precioPack = 35;
    const descuentoDosPacks = 0.10;
    const descuentoTresPacks = 0.15;
    let descuento = cantidad === 2 ? descuentoDosPacks : cantidad >= 3 ? descuentoTresPacks : 0;

    return (cantidad * precioPack * descuento).toFixed(2);
}
