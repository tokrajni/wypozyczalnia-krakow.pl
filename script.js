// Funkcja do zmiany głównego zdjęcia w galerii
function changeImage(src) {
    // Zmiana źródła obrazu głównego
    document.getElementById('current-img').src = src;

    // Pobranie wszystkich miniaturek
    const thumbnails = document.querySelectorAll('.thumb');

    // Usunięcie klasy 'active' ze wszystkich miniaturek
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });

    // Dodanie klasy 'active' do klikniętej miniaturki
    event.target.classList.add('active');
}