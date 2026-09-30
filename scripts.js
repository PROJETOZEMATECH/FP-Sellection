// Elementos da Interface
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const container = document.querySelector('.container');
const items = container.querySelectorAll('.list .item');
const indicators = document.querySelector('.indicators');
const dots = indicators.querySelectorAll('ul li');
const list = container.querySelector('.list');
const numberIndicator = indicators.querySelector('.number');

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

document.getElementById('botaohome')?.addEventListener('click', () => {
    alert('Você clicou no botão Home! 🎉');
    navMenu?.classList.remove('open');
});

document.getElementById('botaocarros')?.addEventListener('click', () => {
    alert('Você clicou no botão Carros! 🚗');
    navMenu?.classList.remove('open');
});

document.getElementById('botaocontato')?.addEventListener('click', () => {
    alert('Área de contato em desenvolvimento 🚧');
    navMenu?.classList.remove('open');
});


let active = 0;
const firstPosition = 0;
const lastPosition = items.length - 1;

function updateSlider() {
    //removi o active dos elementos que estavam ativos ZEMATECH
    container.querySelector('.list .item.active')?.classList.remove('active');
    indicators.querySelector('ul li.active')?.classList.remove('active');

    // Ativa os elementos da posição atual
    items[active].classList.add('active');
    dots[active].classList.add('active');
    
    // Atualiza a numeração (01, 02, etc.)
    numberIndicator.innerText = String(active + 1).padStart(2, '0');
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', '1');
    active = active + 1 > lastPosition ? 0 : active + 1;
    updateSlider();
};

prevButton.onclick = () => {
    list.style.setProperty('--calculation', '-1');
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    updateSlider();
};

// Animações com GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to('.divcar', {
    x: '-100vw',
    scrollTrigger: {
        trigger: '.nova-secao',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    }
});

gsap.to('.nova-secao h1', {
    y: -100,
    scrollTrigger: {
        trigger: '.nova-secao',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    }
});

gsap.to('.nova-secao p', {
    y: 100,
    scrollTrigger: {
        trigger: '.nova-secao',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    }
});