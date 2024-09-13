// Instrucciones ocultas: Hacer que los packs sean clickeables y redirijan a WhatsApp con el mensaje predefinido.

document.addEventListener('DOMContentLoaded', function() {
    const packs = document.querySelectorAll('.pack');
    const whatsappBaseUrl = 'https://wa.me/NUMERO_WHATSAPP?text='; // Reemplaza NUMERO_WHATSAPP con tu número

    packs.forEach(pack => {
        pack.addEventListener('click', () => {
            const packType = pack.getAttribute('data-pack');
            const message = encodeURIComponent(`Hola, me interesa el Pack ${packType}`);
            window.open(`${whatsappBaseUrl}${message}`, '_blank');
        });
    });
});
