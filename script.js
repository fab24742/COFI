document.getElementById('comprar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = parseInt(document.getElementById('distrito').value);
    const precioPack = 35;
    const total = cantidad * precioPack + distrito;

    const mensaje = `Vengo de la web, deseo comprar ${cantidad} pack(s) de COFI. Total a pagar: S/${total}.`;
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});

document.getElementById('cantidad').addEventListener('change', calcularTotal);
document.getElementById('distrito').addEventListener('change', calcularTotal);

function calcularTotal() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const distrito = parseInt(document.getElementById('distrito').value);
    const precioPack = 35;
    const total = cantidad * precioPack + distrito;
    document.getElementById('total').textContent = total;
}
