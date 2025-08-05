document.addEventListener('DOMContentLoaded', function() {
    // Загрузка навигации
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    // Загрузка футера
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});