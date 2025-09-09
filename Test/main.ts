interface flower {
    id:number;
    name:string;
    color:string;
    image:string;
    description:string;
    price:number;
}

const flowerFromServer: flower [] = [
    {id: 1, name:"Роза",color:"red",image:"elegantnaacvetocnaakompozicia.jpg",description:"Красная роза",price:200},
    { id: 2, name: "Тюльпан", color: "yellow", image: "1.jpg", description: "Жёлтый тюльпан" ,price:200},
    { id: 3, name: "Лаванда", color: "purple", image: "buketkrasivyhcvetov.jpg", description: "Фиолетовая лаванда",price:200 },
    { id: 4, name: "Лаванда", color: "purple", image: "1.jpg", description: "Фиолетовая лаванда",price:200 },
    { id: 5, name: "Лаванда", color: "purple", image: "buketkrasivyhcvetov.jpg", description: "Фиолетовая лаванда",price:200 },
    { id: 6, name: "Лаванда", color: "purple", image: "elegantnaacvetocnaakompozicia.jpg", description: "Жёлтый тюльпан",price:200 },
    { id: 6, name: "Лаванда", color: "purple", image: "elegantnaacvetocnaakompozicia.jpg", description: "Фиолетовая лаванда",price:200 }
];

function renderCards(flowers: flower[]){
    const container = document.querySelector<HTMLDivElement>('#cardsContainer');
    if (!container) return;


    container.innerHTML = '';
    flowers.forEach(flower =>{
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.color = flower.color;
        card.innerHTML = `
         <img src="images/${flower.image}" alt="${flower.name}">
        <div class="card-content">
            <h3>${flower.name}</h3>
            <p>${flower.description}</p>
        </div>
         <div class="card-price">
            <h3>${flower.price} ГРН</h3>
        </div>
        `;
        container.appendChild(card);
    })
}
renderCards(flowerFromServer);

interface choise{

}
