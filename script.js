document.getElementById('comprar').addEventListener('click', () => {
    const cantidad = document.getElementById('cantidad').value;
    let mensaje = `Vengo de la web, deseo comprar ${cantidad} pack${cantidad > 1 ? 's' : ''} de COFI.`;
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});

document.getElementById('informacion').addEventListener('click', () => {
    let mensaje = "Vengo de la web, deseo más información sobre COFI.";
    window.open(`https://wa.me/51925773294?text=${encodeURIComponent(mensaje)}`, '_blank');
});
