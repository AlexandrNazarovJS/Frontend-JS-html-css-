document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelector('.cardCarouse');
    const nextButton = document.querySelector('.arrow_next');
    const prevButton = document.querySelector('.arrow_back');
    const cards = document.querySelectorAll('.infoCardPhoto');
    const indicatorContainer = document.querySelector('.indetfic');

    if (!carousels || !nextButton || !prevButton || cards.length === 0 || !indicatorContainer) return;

    let currentIndex = 0;
    const indicators = [];

    // Генерация индикаторов
    cards.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.classList.add('identifier');
        if (index === 0) btn.classList.add('active');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToCard(index);
        });

        indicatorContainer.appendChild(btn);
        indicators.push(btn);
    });

    function scrollToCard(index) {
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(carousels).gap || 0);

        // Сброс классов
        cards.forEach(card => card.classList.remove('active'));
        indicators.forEach(dot => dot.classList.remove('active'));

        // Установка активного класса
        cards[index].classList.add('active');
        indicators[index].classList.add('active');

        // Прокрутка самого контейнера
        carousels.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });

        currentIndex = index;
    }

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex < cards.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    });

    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    });

    scrollToCard(currentIndex); // начальная инициализация
});


