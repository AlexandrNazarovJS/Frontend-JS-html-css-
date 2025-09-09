var flowerFromServer = [
    { id: 1, name: "Роза", color: "red", image: "elegantnaacvetocnaakompozicia.jpg", description: "Красная роза", price: 200 },
    { id: 2, name: "Тюльпан", color: "yellow", image: "1.jpg", description: "Жёлтый тюльпан", price: 200 },
    { id: 3, name: "Лаванда", color: "purple", image: "buketkrasivyhcvetov.jpg", description: "Фиолетовая лаванда", price: 200 },
    { id: 4, name: "Лаванда", color: "purple", image: "1.jpg", description: "Фиолетовая лаванда", price: 200 },
    { id: 5, name: "Лаванда", color: "purple", image: "buketkrasivyhcvetov.jpg", description: "Фиолетовая лаванда", price: 200 },
    { id: 6, name: "Лаванда", color: "purple", image: "elegantnaacvetocnaakompozicia.jpg", description: "Жёлтый тюльпан", price: 200 },
    { id: 6, name: "Лаванда", color: "purple", image: "elegantnaacvetocnaakompozicia.jpg", description: "Фиолетовая лаванда", price: 200 }
];
function renderCards(flowers) {
    var container = document.querySelector('#cardsContainer');
    if (!container)
        return;
    container.innerHTML = '';
    flowers.forEach(function (flower) {
        var card = document.createElement('div');
        card.className = 'card';
        card.dataset.color = flower.color;
        card.innerHTML = "\n         <img src=\"images/".concat(flower.image, "\" alt=\"").concat(flower.name, "\">\n        <div class=\"card-content\">\n            <h3>").concat(flower.name, "</h3>\n            <p>").concat(flower.description, "</p>\n        </div>\n         <div class=\"card-price\">\n            <h3>").concat(flower.price, " \u0413\u0420\u041D</h3>\n        </div>\n        ");
        container.appendChild(card);
    });
}
renderCards(flowerFromServer);
