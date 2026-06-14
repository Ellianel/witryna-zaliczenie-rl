// Podstawowy skrypt portalu Runo Leśne
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portal Runo Leśne zainicjalizowany.');
    
    // Automatyczny rok w stopce
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
