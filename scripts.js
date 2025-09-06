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

    const menuOverlay = document.getElementById('menuOverlay');
    const burger = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');

    burger.addEventListener('click', () => {
        menuOverlay.classList.add('show');
    });
    
    closeBtn.addEventListener("click", () => {
      burger.classList.remove("active");
      menuOverlay.classList.remove("show");
    });


    const toggle = document.getElementById('themeToggle');
    const nav = document.getElementById('navID');
    
    

    if (localStorage.getItem('theme')==='dark'){
        toggle.checked = true ;
        document.body.classList.add('dark-theme');
        nav.classList.add('dark-theme');
        
        
    }
    toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        nav.classList.add('dark-theme');
        
        

    } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        nav.classList.remove('dark-theme');
        
    }
    });

    const btnSignIn = document.getElementById('signIn');
    const btnSignUp = document.getElementById('signUp');
    const ModalIn = document.getElementById('loginWindow');
    const ModalUp = document.getElementById('registrationWindow');
    const closeReg = document.getElementById('closeReg');
    const closeLog = document.getElementById('closeLog');
    
    
    btnSignIn.addEventListener('click', () => {
        ModalIn.classList.add('show');
        
    });

    btnSignUp.addEventListener('click', () => {
        ModalUp.classList.add('show');
    });
    closeReg.addEventListener('click',()=>{
        ModalUp.classList.remove('show');
    })
    closeLog.addEventListener('click',()=>{
        ModalIn.classList.remove('show');
    })

    btnSignIn.addEventListener('click',()=>{
        ModalUp.classList.remove('show');
        ModalIn.classList.add('show');
    })
    btnSignUp.addEventListener('click',()=>{
        ModalIn.classList.remove('show');
        ModalUp.classList.add('show');
    })


    const login = document.getElementById('login');
    const password = document.getElementById('Password');
    login.addEventListener('input',()=>{
        if (login.value.length>0){
            login.style.backgroundColor ='#fff';
        }else{
            login.style.backgroundColor ='';
        }
    })
    password.addEventListener('input',()=>{
        if (password.value.length>0){
            password.style.backgroundColor ='#fff';
        }else{
            password.style.backgroundColor ='';
        }
    })


    const areg = document.getElementById('aReg')
    const aInpt = document.getElementById('aInpt');
    areg.addEventListener('click',()=>{
        ModalUp.classList.remove('show');
        ModalIn.classList.add('show')
    })
    aInpt.addEventListener('click',()=>{
        ModalIn.classList.remove('show');
        ModalUp.classList.add('show');
    })


});

